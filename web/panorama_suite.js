import * as fa from "../../scripts/app.js";
import { app as ir } from "../../scripts/app.js";
import { api as pn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Eu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ft = {}, Qi = [], vr = () => {
}, Lp = () => !1, ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Ou = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, P0 = Object.prototype.hasOwnProperty, Mt = (e, t) => P0.call(e, t), it = Array.isArray, eo = (e) => vs(e) === "[object Map]", Rp = (e) => vs(e) === "[object Set]", Kd = (e) => vs(e) === "[object Date]", at = (e) => typeof e == "function", Jt = (e) => typeof e == "string", wr = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", Vp = (e) => (Et(e) || at(e)) && at(e.then) && at(e.catch), $p = Object.prototype.toString, vs = (e) => $p.call(e), N0 = (e) => vs(e).slice(8, -1), zp = (e) => vs(e) === "[object Object]", Fu = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Eu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, A0 = /-\w/g, xn = yl(
  (e) => e.replace(A0, (t) => t.slice(1).toUpperCase())
), C0 = /\B([A-Z])/g, Oi = yl(
  (e) => e.replace(C0, "-$1").toLowerCase()
), bl = yl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wl = yl(
  (e) => e ? `on${bl(e)}` : ""
), gr = (e, t) => !Object.is(e, t), pa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, jp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Tu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Wd;
const vl = () => Wd || (Wd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
const T0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", D0 = /* @__PURE__ */ Eu(T0);
function Hp(e) {
  return !!e || e === "";
}
function L0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Du(e[n], t[n]);
  return r;
}
function Du(e, t) {
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
      if (a && !l || !a && l || !Du(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Gp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Jt(e) ? e : e == null ? "" : it(e) || Et(e) && (e.toString === $p || !at(e.toString)) ? Gp(e) ? rt(e.value) : JSON.stringify(e, Kp, 2) : String(e), Kp = (e, t) => Gp(t) ? Kp(e, t.value) : eo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Ul(n, o) + " =>"] = i, r),
    {}
  )
} : Rp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ul(r))
} : wr(t) ? Ul(t) : Et(t) && !it(t) && !zp(t) ? String(t) : t, Ul = (e, t = "") => {
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
const Bl = /* @__PURE__ */ new WeakSet();
class Wp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bl.has(this) && (Bl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ud(this), Yp(this);
    const t = Lt, r = or;
    Lt = this, or = !0;
    try {
      return this.fn();
    } finally {
      qp(this), Lt = t, or = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vu(t);
      this.deps = this.depsTail = void 0, Ud(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Dc(this) && this.run();
  }
  get dirty() {
    return Dc(this);
  }
}
let Up = 0, Bo, Yo;
function Bp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yo, Yo = e;
    return;
  }
  e.next = Bo, Bo = e;
}
function Lu() {
  Up++;
}
function Ru() {
  if (--Up > 0)
    return;
  if (Yo) {
    let t = Yo;
    for (Yo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Bo; ) {
    let t = Bo;
    for (Bo = void 0; t; ) {
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
function Yp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Vu(n), $0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Dc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Dc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = or;
  Lt = e, or = !0;
  try {
    Yp(e);
    const i = e.fn(e._value);
    (t.version === 0 || gr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, or = n, qp(e), e.flags &= -3;
  }
}
function Vu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Vu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function $0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let or = !0;
const Jp = [];
function zr() {
  Jp.push(or), or = !1;
}
function jr() {
  const e = Jp.pop();
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
let ns = 0;
class z0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $u {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !or || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new z0(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, Zp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, ns++, this.notify(t);
  }
  notify(t) {
    Lu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Ru();
    }
  }
}
function Zp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Zp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Lc = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ Symbol(
  ""
), Rc = /* @__PURE__ */ Symbol(
  ""
), rs = /* @__PURE__ */ Symbol(
  ""
);
function dn(e, t, r) {
  if (or && Lt) {
    let n = Lc.get(e);
    n || Lc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new $u()), i.map = n, i.key = r), i.track();
  }
}
function Or(e, t, r, n, i, o) {
  const s = Lc.get(e);
  if (!s) {
    ns++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Lu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Fu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === rs || !wr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(rs)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(wi)), eo(e) && a(s.get(Rc)));
          break;
        case "delete":
          l || (a(s.get(wi)), eo(e) && a(s.get(Rc)));
          break;
        case "set":
          eo(e) && a(s.get(wi));
          break;
      }
  }
  Ru();
}
function ji(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (dn(t, "iterate", rs), /* @__PURE__ */ qn(e) ? t : t.map(lr));
}
function Sl(e) {
  return dn(e = /* @__PURE__ */ kt(e), "iterate", rs), e;
}
function pr(e, t) {
  return /* @__PURE__ */ Hr(e) ? ao(/* @__PURE__ */ xi(e) ? lr(t) : t) : lr(t);
}
const j0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yl(this, Symbol.iterator, (e) => pr(this, e));
  },
  concat(...e) {
    return ji(this).concat(
      ...e.map((t) => it(t) ? ji(t) : t)
    );
  },
  entries() {
    return Yl(this, "entries", (e) => (e[1] = pr(this, e[1]), e));
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
    return ql(this, "includes", e);
  },
  indexOf(...e) {
    return ql(this, "indexOf", e);
  },
  join(e) {
    return ji(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ql(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...t) {
    return Bd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bd(this, "reduceRight", e, t);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return ji(this).toReversed();
  },
  toSorted(e) {
    return ji(this).toSorted(e);
  },
  toSpliced(...e) {
    return ji(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return Yl(this, "values", (e) => pr(this, e));
  }
};
function Yl(e, t, r) {
  const n = Sl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ qn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const H0 = Array.prototype;
function Pr(e, t, r, n, i, o) {
  const s = Sl(e), a = s !== e && !/* @__PURE__ */ qn(e), l = s[t];
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
  const i = Sl(e), o = i !== e && !/* @__PURE__ */ qn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = pr(e, c)), r.call(this, c, pr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? pr(e, l) : l;
}
function ql(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  dn(n, "iterate", rs);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Hu(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Ao(e, t, r = []) {
  zr(), Lu();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return Ru(), jr(), n;
}
const G0 = /* @__PURE__ */ Eu("__proto__,__v_isRef,__isVue"), Qp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wr)
);
function K0(e) {
  wr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
class eh {
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
      return n === (i ? o ? ey : ih : o ? rh : nh).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
    if ((wr(r) ? Qp.has(r) : G0(r)) || (i || dn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ mn(a)) {
      const l = s && Fu(r) ? a : a.value;
      return i && Et(l) ? /* @__PURE__ */ $c(l) : l;
    }
    return Et(a) ? i ? /* @__PURE__ */ $c(a) : /* @__PURE__ */ mo(a) : a;
  }
}
class th extends eh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Fu(r);
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
    return (!wr(r) || !Qp.has(r)) && dn(t, "has", r), n;
  }
  ownKeys(t) {
    return dn(
      t,
      "iterate",
      it(t) ? "length" : wi
    ), Reflect.ownKeys(t);
  }
}
class W0 extends eh {
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
const U0 = /* @__PURE__ */ new th(), B0 = /* @__PURE__ */ new W0(), Y0 = /* @__PURE__ */ new th(!0);
const Vc = (e) => e, qs = (e) => Reflect.getPrototypeOf(e);
function q0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = eo(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Vc : t ? ao : lr;
    return !t && dn(
      o,
      "iterate",
      l ? Rc : wi
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
function Xs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function X0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (gr(i, a) && dn(s, "get", i), dn(s, "get", a));
      const { has: l } = qs(s), c = t ? Vc : e ? ao : lr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && dn(/* @__PURE__ */ kt(i), "iterate", wi), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (gr(i, a) && dn(s, "has", i), dn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? Vc : e ? ao : lr;
      return !e && dn(l, "iterate", wi), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return gn(
    r,
    e ? {
      add: Xs("add"),
      set: Xs("set"),
      delete: Xs("delete"),
      clear: Xs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = qs(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ qn(i) && !/* @__PURE__ */ Hr(i) ? a : i;
        return s.has.call(o, l) || gr(i, l) && s.has.call(o, i) || gr(a, l) && s.has.call(o, a) || (o.add(l), Or(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ qn(o) && !/* @__PURE__ */ Hr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = qs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? gr(o, d) && Or(s, "set", i, o) : Or(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = qs(o);
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
function zu(e, t) {
  const r = X0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const J0 = {
  get: /* @__PURE__ */ zu(!1, !1)
}, Z0 = {
  get: /* @__PURE__ */ zu(!1, !0)
}, Q0 = {
  get: /* @__PURE__ */ zu(!0, !1)
};
const nh = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap();
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
function mo(e) {
  return /* @__PURE__ */ Hr(e) ? e : ju(
    e,
    !1,
    U0,
    J0,
    nh
  );
}
// @__NO_SIDE_EFFECTS__
function ry(e) {
  return ju(
    e,
    !1,
    Y0,
    Z0,
    rh
  );
}
// @__NO_SIDE_EFFECTS__
function $c(e) {
  return ju(
    e,
    !0,
    B0,
    Q0,
    ih
  );
}
function ju(e, t, r, n, i) {
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
function xi(e) {
  return /* @__PURE__ */ Hr(e) ? /* @__PURE__ */ xi(e.__v_raw) : !!(e && e.__v_isReactive);
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
function Hu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function iy(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && jp(e, "__v_skip", !0), e;
}
const lr = (e) => Et(e) ? /* @__PURE__ */ mo(e) : e, ao = (e) => Et(e) ? /* @__PURE__ */ $c(e) : e;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return oh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Fa(e) {
  return oh(e, !0);
}
function oh(e, t) {
  return /* @__PURE__ */ mn(e) ? e : new oy(e, t);
}
class oy {
  constructor(t, r) {
    this.dep = new $u(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : lr(t), this.__v_isShallow = r;
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
function sh(e) {
  return /* @__PURE__ */ xi(e) ? e : new Proxy(e, sy);
}
class ay {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new $u(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return Bp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xp(this), t && (t.version = this.dep.version), this._value;
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
const Js = {}, Ta = /* @__PURE__ */ new WeakMap();
let bi;
function cy(e, t = !1, r = bi) {
  if (r) {
    let n = Ta.get(r);
    n || Ta.set(r, n = []), n.push(e);
  }
}
function uy(e, t, r = Ft) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (te) => i ? te : /* @__PURE__ */ qn(te) || i === !1 || i === 0 ? Fr(te, 1) : Fr(te);
  let d, u, f, m, w = !1, g = !1;
  if (/* @__PURE__ */ mn(e) ? (u = () => e.value, w = /* @__PURE__ */ qn(e)) : /* @__PURE__ */ xi(e) ? (u = () => c(e), w = !0) : it(e) ? (g = !0, w = e.some((te) => /* @__PURE__ */ xi(te) || /* @__PURE__ */ qn(te)), u = () => e.map((te) => {
    if (/* @__PURE__ */ mn(te))
      return te.value;
    if (/* @__PURE__ */ xi(te))
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
    const te = bi;
    bi = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      bi = te;
    }
  } : u = vr, t && i) {
    const te = u, C = i === !0 ? 1 / 0 : i;
    u = () => Fr(te(), C);
  }
  const h = V0(), _ = () => {
    d.stop(), h && h.active && Ou(h.effects, d);
  };
  if (o && t) {
    const te = t;
    t = (...C) => {
      te(...C), _();
    };
  }
  let ee = g ? new Array(e.length).fill(Js) : Js;
  const $ = (te) => {
    if (!(!(d.flags & 1) || !d.dirty && !te))
      if (t) {
        const C = d.run();
        if (i || w || (g ? C.some((X, z) => gr(X, ee[z])) : gr(C, ee))) {
          f && f();
          const X = bi;
          bi = d;
          try {
            const z = [
              C,
              // pass undefined as the old value when it's changed for the first time
              ee === Js ? void 0 : g && ee[0] === Js ? [] : ee,
              m
            ];
            ee = C, l ? l(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            bi = X;
          }
        }
      } else
        d.run();
  };
  return a && a($), d = new Wp(u), d.scheduler = s ? () => s($, !1) : $, m = (te) => cy(te, !1, d), f = d.onStop = () => {
    const te = Ta.get(d);
    if (te) {
      if (l)
        l(te, 4);
      else
        for (const C of te) C();
      Ta.delete(d);
    }
  }, t ? n ? $(!0) : ee = d.run() : s ? s($.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function Fr(e, t = 1 / 0, r) {
  if (t <= 0 || !Et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ mn(e))
    Fr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Fr(e[n], t, r);
  else if (Rp(e) || eo(e))
    e.forEach((n) => {
      Fr(n, t, r);
    });
  else if (zp(e)) {
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
function Ss(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    _l(i, t, r);
  }
}
function xr(e, t, r, n) {
  if (at(e)) {
    const i = Ss(e, t, r, n);
    return i && Vp(i) && i.catch((o) => {
      _l(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(xr(e[o], t, r, n));
    return i;
  }
}
function _l(e, t, r, n = !0) {
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
      zr(), Ss(o, null, 10, [
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
const to = [];
let Zr = null, Ki = 0;
const ah = /* @__PURE__ */ Promise.resolve();
let Da = null;
function wl(e) {
  const t = Da || ah;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fy(e) {
  let t = fr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = is(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Gu(e) {
  if (!(e.flags & 1)) {
    const t = is(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= is(r) ? Sn.push(e) : Sn.splice(fy(t), 0, e), e.flags |= 1, lh();
  }
}
function lh() {
  Da || (Da = ah.then(uh));
}
function py(e) {
  it(e) ? to.push(...e) : Zr && e.id === -1 ? Zr.splice(Ki + 1, 0, e) : e.flags & 1 || (to.push(e), e.flags |= 1), lh();
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
function ch(e) {
  if (to.length) {
    const t = [...new Set(to)].sort(
      (r, n) => is(r) - is(n)
    );
    if (to.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, Ki = 0; Ki < Zr.length; Ki++) {
      const r = Zr[Ki];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Zr = null, Ki = 0;
  }
}
const is = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uh(e) {
  try {
    for (fr = 0; fr < Sn.length; fr++) {
      const t = Sn[fr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ss(
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
    fr = -1, Sn.length = 0, ch(), Da = null, (Sn.length || to.length) && uh();
  }
}
let zn = null, dh = null;
function La(e) {
  const t = zn;
  return zn = e, dh = e && e.type.__scopeId || null, t;
}
function fh(e, t = zn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && af(-1);
    const o = La(t);
    let s;
    try {
      s = e(...i);
    } finally {
      La(o), n._d && af(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Vr(e, t) {
  if (zn === null)
    return e;
  const r = Nl(zn), n = e.dirs || (e.dirs = []);
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
function fi(e, t, r, n) {
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
function ha(e, t, r = !1) {
  const n = fb();
  if (n || no) {
    let i = no ? no._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const my = /* @__PURE__ */ Symbol.for("v-scx"), gy = () => ha(my);
function ki(e, t, r) {
  return ph(e, t, r);
}
function ph(e, t, r = Ft) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ss) {
    if (o === "sync") {
      const m = gy();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = vr, m.resume = vr, m.pause = vr, m;
    }
  }
  const d = fn;
  a.call = (m, w, g) => xr(m, d, w, g);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    On(m, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, w) => {
    w ? m() : Gu(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = uy(e, t, a);
  return ss && (c ? c.push(f) : l && f()), f;
}
function yy(e, t, r) {
  const n = this.proxy, i = Jt(e) ? e.includes(".") ? hh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = ws(this), a = ph(i, o.bind(n), r);
  return s(), a;
}
function hh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const by = /* @__PURE__ */ Symbol("_vte"), vy = (e) => e.__isTeleport, Sy = /* @__PURE__ */ Symbol("_leaveCb");
function Ku(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ku(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ra = /* @__PURE__ */ new WeakMap();
function qo(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, h) => qo(
        g,
        t && (it(t) ? t[h] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Xo(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && qo(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Nl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Ft ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), m = u === Ft ? Lp : (g) => qd(d, g) ? !1 : Mt(f, g), w = (g, h) => !(h && qd(d, h));
  if (c != null && c !== l) {
    if (Xd(t), Jt(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ mn(c)) {
      const g = t;
      w(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (at(l))
    Ss(l, a, 12, [s, d]);
  else {
    const g = Jt(l), h = /* @__PURE__ */ mn(l);
    if (g || h) {
      const _ = () => {
        if (e.f) {
          const ee = g ? m(l) ? u[l] : d[l] : w() || !e.k ? l.value : d[e.k];
          if (i)
            it(ee) && Ou(ee, o);
          else if (it(ee))
            ee.includes(o) || ee.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const $ = [o];
            w(l, e.k) && (l.value = $), e.k && (d[e.k] = $);
          }
        } else g ? (d[l] = s, m(l) && (u[l] = s)) : h && (w(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const ee = () => {
          _(), Ra.delete(e);
        };
        ee.id = -1, Ra.set(e, ee), On(ee, r);
      } else
        Xd(e), _();
    }
  }
}
function Xd(e) {
  const t = Ra.get(e);
  t && (t.flags |= 8, Ra.delete(e));
}
vl().requestIdleCallback;
vl().cancelIdleCallback;
const Xo = (e) => !!e.type.__asyncLoader, gh = (e) => e.type.__isKeepAlive;
function _y(e, t) {
  yh(e, "a", t);
}
function wy(e, t) {
  yh(e, "da", t);
}
function yh(e, t, r = fn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (xl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      gh(i.parent.vnode) && xy(n, t, r, i), i = i.parent;
  }
}
function xy(e, t, r, n) {
  const i = xl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  bh(() => {
    Ou(n[t], i);
  }, r);
}
function xl(e, t, r = fn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      zr();
      const a = ws(r), l = xr(t, r, e, s);
      return a(), jr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Kr = (e) => (t, r = fn) => {
  (!ss || e === "sp") && xl(e, (...n) => t(...n), r);
}, ky = Kr("bm"), kl = Kr("m"), My = Kr(
  "bu"
), Py = Kr("u"), _s = Kr(
  "bum"
), bh = Kr("um"), Ny = Kr(
  "sp"
), Ay = Kr("rtg"), Cy = Kr("rtc");
function Iy(e, t = fn) {
  xl("ec", e, t);
}
const Ey = "components", vh = /* @__PURE__ */ Symbol.for("v-ndc");
function Oy(e) {
  return Jt(e) ? Fy(Ey, e, !1) || e : e || vh;
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
      if (a && (a === t || a === xn(t) || a === bl(xn(t))))
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
  return e && (e[t] || e[xn(t)] || e[bl(xn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Jt(e)) {
    const a = s && /* @__PURE__ */ xi(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ qn(e), c = /* @__PURE__ */ Hr(e), e = Sl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ao(lr(e[d])) : lr(e[d]) : e[d],
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
const zc = (e) => e ? zh(e) ? Nl(e) : zc(e.parent) : null, Jo = (
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
    $parent: (e) => zc(e.parent),
    $root: (e) => zc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _h(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wl.bind(e.proxy)),
    $watch: (e) => yy.bind(e)
  })
), Xl = (e, t) => e !== Ft && !e.__isScriptSetup && Mt(e, t), Ty = {
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
        if (Xl(n, t))
          return s[t] = 1, n[t];
        if (i !== Ft && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Ft && Mt(r, t))
          return s[t] = 4, r[t];
        jc && (s[t] = 0);
      }
    }
    const c = Jo[t];
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
    return Xl(i, t) ? (i[t] = r, !0) : n !== Ft && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Ft && a[0] !== "$" && Mt(e, a) || Xl(t, a) || Mt(o, a) || Mt(n, a) || Mt(Jo, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
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
let jc = !0;
function Dy(e) {
  const t = _h(e), r = e.proxy, n = e.ctx;
  jc = !1, t.beforeCreate && Qd(t.beforeCreate, e, "bc");
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
    updated: w,
    activated: g,
    deactivated: h,
    beforeDestroy: _,
    beforeUnmount: ee,
    destroyed: $,
    unmounted: te,
    render: C,
    renderTracked: X,
    renderTriggered: z,
    errorCaptured: G,
    serverPrefetch: ne,
    // public API
    expose: he,
    inheritAttrs: q,
    // assets
    components: fe,
    directives: ce,
    filters: oe
  } = t;
  if (c && Ly(c, n, null), s)
    for (const j in s) {
      const A = s[j];
      at(A) && (n[j] = A.bind(r));
    }
  if (i) {
    const j = i.call(r, r);
    Et(j) && (e.data = /* @__PURE__ */ mo(j));
  }
  if (jc = !0, o)
    for (const j in o) {
      const A = o[j], H = at(A) ? A.bind(r, r) : at(A.get) ? A.get.bind(r, r) : vr, T = !at(A) && at(A.set) ? A.set.bind(r) : vr, B = dt({
        get: H,
        set: T
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => B.value,
        set: (pe) => B.value = pe
      });
    }
  if (a)
    for (const j in a)
      Sh(a[j], n, r, j);
  if (l) {
    const j = at(l) ? l.call(r) : l;
    Reflect.ownKeys(j).forEach((A) => {
      hy(A, j[A]);
    });
  }
  d && Qd(d, e, "c");
  function E(j, A) {
    it(A) ? A.forEach((H) => j(H.bind(r))) : A && j(A.bind(r));
  }
  if (E(ky, u), E(kl, f), E(My, m), E(Py, w), E(_y, g), E(wy, h), E(Iy, G), E(Cy, X), E(Ay, z), E(_s, ee), E(bh, te), E(Ny, ne), it(he))
    if (he.length) {
      const j = e.exposed || (e.exposed = {});
      he.forEach((A) => {
        Object.defineProperty(j, A, {
          get: () => r[A],
          set: (H) => r[A] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === vr && (e.render = C), q != null && (e.inheritAttrs = q), fe && (e.components = fe), ce && (e.directives = ce), ne && mh(e);
}
function Ly(e, t, r = vr) {
  it(e) && (e = Hc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Et(i) ? "default" in i ? o = ha(
      i.from || n,
      i.default,
      !0
    ) : o = ha(i.from || n) : o = ha(i), /* @__PURE__ */ mn(o) ? Object.defineProperty(t, n, {
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
function Sh(e, t, r, n) {
  let i = n.includes(".") ? hh(r, n) : () => r[n];
  if (Jt(e)) {
    const o = t[e];
    at(o) && ki(i, o);
  } else if (at(e))
    ki(i, e.bind(r));
  else if (Et(e))
    if (it(e))
      e.forEach((o) => Sh(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && ki(i, o, e);
    }
}
function _h(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Va(l, c, s, !0)
  ), Va(l, t, s)), Et(t) && o.set(t, l), l;
}
function Va(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Va(e, o, r, !0), i && i.forEach(
    (s) => Va(e, s, r, !0)
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
  methods: Lo,
  computed: Lo,
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
  components: Lo,
  directives: Lo,
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
  return Lo(Hc(e), Hc(t));
}
function Hc(e) {
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
function Lo(e, t) {
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
function wh() {
  return {
    app: null,
    config: {
      isNativeTag: Lp,
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
    const o = wh(), s = /* @__PURE__ */ new WeakSet(), a = [];
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
          const m = c._ceVNode || Be(n, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, Nl(m.component);
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
        const u = no;
        no = c;
        try {
          return d();
        } finally {
          no = u;
        }
      }
    };
    return c;
  };
}
let no = null;
const Hy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${Oi(t)}Modifiers`];
function Gy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ft;
  let i = r;
  const o = t.startsWith("update:"), s = o && Hy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Jt(d) ? d.trim() : d)), s.number && (i = r.map(Tu)));
  let a, l = n[a = Wl(t)] || // also try camelCase event handler (#2249)
  n[a = Wl(xn(t))];
  !l && o && (l = n[a = Wl(Oi(t))]), l && xr(
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
function xh(e, t, r = !1) {
  const n = r ? Ky : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = xh(c, t, !0);
      d && (a = !0, gn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Et(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : gn(s, o), Et(e) && n.set(e, s), s);
}
function Ml(e, t) {
  return !e || !ml(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, Oi(t)) || Mt(e, t));
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
    setupState: m,
    ctx: w,
    inheritAttrs: g
  } = e, h = La(e);
  let _, ee;
  try {
    if (r.shapeFlag & 4) {
      const te = i || n, C = te;
      _ = hr(
        c.call(
          C,
          te,
          d,
          u,
          m,
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
    Zo.length = 0, _l(te, e, 1), _ = Be(ni);
  }
  let $ = _;
  if (ee && g !== !1) {
    const te = Object.keys(ee), { shapeFlag: C } = $;
    te.length && C & 7 && (o && te.some(gl) && (ee = Uy(
      ee,
      o
    )), $ = lo($, ee, !1, !0));
  }
  return r.dirs && ($ = lo($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs), r.transition && Ku($, r.transition), _ = $, La(h), _;
}
const Wy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ml(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Uy = (e, t) => {
  const r = {};
  for (const n in e)
    (!gl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
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
        if (kh(s, n, f) && !Ml(c, f))
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
    if (kh(t, e, o) && !Ml(r, o))
      return !0;
  }
  return !1;
}
function kh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Et(n) && Et(i) ? !Du(n, i) : n !== i;
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
const Mh = {}, Ph = () => Object.create(Mh), Nh = (e) => Object.getPrototypeOf(e) === Mh;
function qy(e, t, r, n = !1) {
  const i = {}, o = Ph();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ah(e, t, i, o);
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
        if (Ml(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (Mt(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const w = xn(f);
            i[w] = Gc(
              l,
              a,
              w,
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
    Ah(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Oi(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Gc(
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
function Ah(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Uo(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = xn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Ml(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Ft;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Gc(
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
function Gc(e, t, r, n, i, o) {
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
          const d = ws(i);
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
    ] && (n === "" || n === Oi(r)) && (n = !0));
  }
  return n;
}
const Jy = /* @__PURE__ */ new WeakMap();
function Ch(e, t, r = !1) {
  const n = r ? Jy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = Ch(u, t, !0);
      gn(s, f), m && a.push(...m);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Et(e) && n.set(e, Qi), Qi;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = xn(o[d]);
      of(u) && (s[u] = Ft);
    }
  else if (o)
    for (const d in o) {
      const u = xn(d);
      if (of(u)) {
        const f = o[d], m = s[u] = it(f) || at(f) ? { type: f } : gn({}, f), w = m.type;
        let g = !1, h = !0;
        if (it(w))
          for (let _ = 0; _ < w.length; ++_) {
            const ee = w[_], $ = at(ee) && ee.name;
            if ($ === "Boolean") {
              g = !0;
              break;
            } else $ === "String" && (h = !1);
          }
        else
          g = at(w) && w.name === "Boolean";
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
function of(e) {
  return e[0] !== "$" && !Uo(e);
}
const Wu = (e) => e === "_" || e === "_ctx" || e === "$stable", Uu = (e) => it(e) ? e.map(hr) : [hr(e)], Zy = (e, t, r) => {
  if (t._n)
    return t;
  const n = fh((...i) => Uu(t(...i)), r);
  return n._c = !1, n;
}, Ih = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Wu(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = Zy(i, o, n);
    else if (o != null) {
      const s = Uu(o);
      t[i] = () => s;
    }
  }
}, Eh = (e, t) => {
  const r = Uu(t);
  e.slots.default = () => r;
}, Oh = (e, t, r) => {
  for (const n in t)
    (r || !Wu(n)) && (e[n] = t[n]);
}, Qy = (e, t, r) => {
  const n = e.slots = Ph();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Oh(n, t, r), r && jp(n, "_", i, !0)) : Ih(t, n);
  } else t && Eh(e, t);
}, eb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ft;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Oh(i, t, r) : (o = !t.$stable, Ih(t, i)), s = t;
  } else t && (Eh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Wu(a) && s[a] == null && delete i[a];
}, On = ob;
function tb(e) {
  return nb(e);
}
function nb(e, t) {
  const r = vl();
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
    setScopeId: m = vr,
    insertStaticContent: w
  } = e, g = (b, y, I, v = null, V = null, L = null, J = void 0, O = null, F = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !Co(b, y) && (v = de(b), pe(b, V, L, !0), b = null), y.patchFlag === -2 && (F = !1, y.dynamicChildren = null);
    const { type: x, ref: R, shapeFlag: Z } = y;
    switch (x) {
      case Pl:
        h(b, y, I, v);
        break;
      case ni:
        _(b, y, I, v);
        break;
      case Zl:
        b == null && ee(y, I, v, J);
        break;
      case Qe:
        fe(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        break;
      default:
        Z & 1 ? C(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        ) : Z & 6 ? ce(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        ) : (Z & 64 || Z & 128) && x.process(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F,
          N
        );
    }
    R != null && V ? qo(R, b && b.ref, L, y || b, !y) : R == null && b && b.ref != null && qo(b.ref, null, L, b, !0);
  }, h = (b, y, I, v) => {
    if (b == null)
      n(
        y.el = a(y.children),
        I,
        v
      );
    else {
      const V = y.el = b.el;
      y.children !== b.children && c(V, y.children);
    }
  }, _ = (b, y, I, v) => {
    b == null ? n(
      y.el = l(y.children || ""),
      I,
      v
    ) : y.el = b.el;
  }, ee = (b, y, I, v) => {
    [b.el, b.anchor] = w(
      b.children,
      y,
      I,
      v,
      b.el,
      b.anchor
    );
  }, $ = ({ el: b, anchor: y }, I, v) => {
    let V;
    for (; b && b !== y; )
      V = f(b), n(b, I, v), b = V;
    n(y, I, v);
  }, te = ({ el: b, anchor: y }) => {
    let I;
    for (; b && b !== y; )
      I = f(b), i(b), b = I;
    i(y);
  }, C = (b, y, I, v, V, L, J, O, F) => {
    if (y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), b == null)
      X(
        y,
        I,
        v,
        V,
        L,
        J,
        O,
        F
      );
    else {
      const x = b.el && b.el._isVueCE ? b.el : null;
      try {
        x && x._beginPatch(), ne(
          b,
          y,
          V,
          L,
          J,
          O,
          F
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, X = (b, y, I, v, V, L, J, O) => {
    let F, x;
    const { props: R, shapeFlag: Z, transition: me, dirs: ue } = b;
    if (F = b.el = s(
      b.type,
      L,
      R && R.is,
      R
    ), Z & 8 ? d(F, b.children) : Z & 16 && G(
      b.children,
      F,
      null,
      v,
      V,
      Jl(b, L),
      J,
      O
    ), ue && fi(b, null, v, "created"), z(F, b, b.scopeId, J, v), R) {
      for (const Se in R)
        Se !== "value" && !Uo(Se) && o(F, Se, null, R[Se], L, v);
      "value" in R && o(F, "value", null, R.value, L), (x = R.onVnodeBeforeMount) && ur(x, v, b);
    }
    ue && fi(b, null, v, "beforeMount");
    const ve = rb(V, me);
    ve && me.beforeEnter(F), n(F, y, I), ((x = R && R.onVnodeMounted) || ve || ue) && On(() => {
      try {
        x && ur(x, v, b), ve && me.enter(F), ue && fi(b, null, v, "mounted");
      } finally {
      }
    }, V);
  }, z = (b, y, I, v, V) => {
    if (I && m(b, I), v)
      for (let L = 0; L < v.length; L++)
        m(b, v[L]);
    if (V) {
      let L = V.subTree;
      if (y === L || Lh(L.type) && (L.ssContent === y || L.ssFallback === y)) {
        const J = V.vnode;
        z(
          b,
          J,
          J.scopeId,
          J.slotScopeIds,
          V.parent
        );
      }
    }
  }, G = (b, y, I, v, V, L, J, O, F = 0) => {
    for (let x = F; x < b.length; x++) {
      const R = b[x] = O ? Cr(b[x]) : hr(b[x]);
      g(
        null,
        R,
        y,
        I,
        v,
        V,
        L,
        J,
        O
      );
    }
  }, ne = (b, y, I, v, V, L, J) => {
    const O = y.el = b.el;
    let { patchFlag: F, dynamicChildren: x, dirs: R } = y;
    F |= b.patchFlag & 16;
    const Z = b.props || Ft, me = y.props || Ft;
    let ue;
    if (I && pi(I, !1), (ue = me.onVnodeBeforeUpdate) && ur(ue, I, y, b), R && fi(y, b, I, "beforeUpdate"), I && pi(I, !0), (Z.innerHTML && me.innerHTML == null || Z.textContent && me.textContent == null) && d(O, ""), x ? he(
      b.dynamicChildren,
      x,
      O,
      I,
      v,
      Jl(y, V),
      L
    ) : J || A(
      b,
      y,
      O,
      null,
      I,
      v,
      Jl(y, V),
      L,
      !1
    ), F > 0) {
      if (F & 16)
        q(O, Z, me, I, V);
      else if (F & 2 && Z.class !== me.class && o(O, "class", null, me.class, V), F & 4 && o(O, "style", Z.style, me.style, V), F & 8) {
        const ve = y.dynamicProps;
        for (let Se = 0; Se < ve.length; Se++) {
          const be = ve[Se], Q = Z[be], ge = me[be];
          (ge !== Q || be === "value") && o(O, be, Q, ge, V, I);
        }
      }
      F & 1 && b.children !== y.children && d(O, y.children);
    } else !J && x == null && q(O, Z, me, I, V);
    ((ue = me.onVnodeUpdated) || R) && On(() => {
      ue && ur(ue, I, y, b), R && fi(y, b, I, "updated");
    }, v);
  }, he = (b, y, I, v, V, L, J) => {
    for (let O = 0; O < y.length; O++) {
      const F = b[O], x = y[O], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Co(F, x) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      g(
        F,
        x,
        R,
        null,
        v,
        V,
        L,
        J,
        !0
      );
    }
  }, q = (b, y, I, v, V) => {
    if (y !== I) {
      if (y !== Ft)
        for (const L in y)
          !Uo(L) && !(L in I) && o(
            b,
            L,
            y[L],
            null,
            V,
            v
          );
      for (const L in I) {
        if (Uo(L)) continue;
        const J = I[L], O = y[L];
        J !== O && L !== "value" && o(b, L, O, J, V, v);
      }
      "value" in I && o(b, "value", y.value, I.value, V);
    }
  }, fe = (b, y, I, v, V, L, J, O, F) => {
    const x = y.el = b ? b.el : a(""), R = y.anchor = b ? b.anchor : a("");
    let { patchFlag: Z, dynamicChildren: me, slotScopeIds: ue } = y;
    ue && (O = O ? O.concat(ue) : ue), b == null ? (n(x, I, v), n(R, I, v), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      I,
      R,
      V,
      L,
      J,
      O,
      F
    )) : Z > 0 && Z & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === me.length ? (he(
      b.dynamicChildren,
      me,
      I,
      V,
      L,
      J,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || V && y === V.subTree) && Fh(
      b,
      y,
      !0
      /* shallow */
    )) : A(
      b,
      y,
      I,
      R,
      V,
      L,
      J,
      O,
      F
    );
  }, ce = (b, y, I, v, V, L, J, O, F) => {
    y.slotScopeIds = O, b == null ? y.shapeFlag & 512 ? V.ctx.activate(
      y,
      I,
      v,
      J,
      F
    ) : oe(
      y,
      I,
      v,
      V,
      L,
      J,
      F
    ) : U(b, y, F);
  }, oe = (b, y, I, v, V, L, J) => {
    const O = b.component = db(
      b,
      v,
      V
    );
    if (gh(b) && (O.ctx.renderer = N), pb(O, !1, J), O.asyncDep) {
      if (V && V.registerDep(O, E, J), !b.el) {
        const F = O.subTree = Be(ni);
        _(null, F, y, I), b.placeholder = F.el;
      }
    } else
      E(
        O,
        b,
        y,
        I,
        V,
        L,
        J
      );
  }, U = (b, y, I) => {
    const v = y.component = b.component;
    if (By(b, y, I))
      if (v.asyncDep && !v.asyncResolved) {
        j(v, y, I);
        return;
      } else
        v.next = y, v.update();
    else
      y.el = b.el, v.vnode = y;
  }, E = (b, y, I, v, V, L, J) => {
    const O = () => {
      if (b.isMounted) {
        let { next: Z, bu: me, u: ue, parent: ve, vnode: Se } = b;
        {
          const p = Th(b);
          if (p) {
            Z && (Z.el = Se.el, j(b, Z, J)), p.asyncDep.then(() => {
              On(() => {
                b.isUnmounted || x();
              }, V);
            });
            return;
          }
        }
        let be = Z, Q;
        pi(b, !1), Z ? (Z.el = Se.el, j(b, Z, J)) : Z = Se, me && pa(me), (Q = Z.props && Z.props.onVnodeBeforeUpdate) && ur(Q, ve, Z, Se), pi(b, !0);
        const ge = nf(b), Y = b.subTree;
        b.subTree = ge, g(
          Y,
          ge,
          // parent may have changed if it's in a teleport
          u(Y.el),
          // anchor may have changed if it's in a fragment
          de(Y),
          b,
          V,
          L
        ), Z.el = ge.el, be === null && Yy(b, ge.el), ue && On(ue, V), (Q = Z.props && Z.props.onVnodeUpdated) && On(
          () => ur(Q, ve, Z, Se),
          V
        );
      } else {
        let Z;
        const { el: me, props: ue } = y, { bm: ve, m: Se, parent: be, root: Q, type: ge } = b, Y = Xo(y);
        pi(b, !1), ve && pa(ve), !Y && (Z = ue && ue.onVnodeBeforeMount) && ur(Z, be, y), pi(b, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            ge,
            b.parent ? b.parent.type : void 0
          );
          const p = b.subTree = nf(b);
          g(
            null,
            p,
            I,
            v,
            b,
            V,
            L
          ), y.el = p.el;
        }
        if (Se && On(Se, V), !Y && (Z = ue && ue.onVnodeMounted)) {
          const p = y;
          On(
            () => ur(Z, be, p),
            V
          );
        }
        (y.shapeFlag & 256 || be && Xo(be.vnode) && be.vnode.shapeFlag & 256) && b.a && On(b.a, V), b.isMounted = !0, y = I = v = null;
      }
    };
    b.scope.on();
    const F = b.effect = new Wp(O);
    b.scope.off();
    const x = b.update = F.run.bind(F), R = b.job = F.runIfDirty.bind(F);
    R.i = b, R.id = b.uid, F.scheduler = () => Gu(R), pi(b, !0), x();
  }, j = (b, y, I) => {
    y.component = b;
    const v = b.vnode.props;
    b.vnode = y, b.next = null, Xy(b, y.props, v, I), eb(b, y.children, I), zr(), Yd(b), jr();
  }, A = (b, y, I, v, V, L, J, O, F = !1) => {
    const x = b && b.children, R = b ? b.shapeFlag : 0, Z = y.children, { patchFlag: me, shapeFlag: ue } = y;
    if (me > 0) {
      if (me & 128) {
        T(
          x,
          Z,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        return;
      } else if (me & 256) {
        H(
          x,
          Z,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        return;
      }
    }
    ue & 8 ? (R & 16 && re(x, V, L), Z !== x && d(I, Z)) : R & 16 ? ue & 16 ? T(
      x,
      Z,
      I,
      v,
      V,
      L,
      J,
      O,
      F
    ) : re(x, V, L, !0) : (R & 8 && d(I, ""), ue & 16 && G(
      Z,
      I,
      v,
      V,
      L,
      J,
      O,
      F
    ));
  }, H = (b, y, I, v, V, L, J, O, F) => {
    b = b || Qi, y = y || Qi;
    const x = b.length, R = y.length, Z = Math.min(x, R);
    let me;
    for (me = 0; me < Z; me++) {
      const ue = y[me] = F ? Cr(y[me]) : hr(y[me]);
      g(
        b[me],
        ue,
        I,
        null,
        V,
        L,
        J,
        O,
        F
      );
    }
    x > R ? re(
      b,
      V,
      L,
      !0,
      !1,
      Z
    ) : G(
      y,
      I,
      v,
      V,
      L,
      J,
      O,
      F,
      Z
    );
  }, T = (b, y, I, v, V, L, J, O, F) => {
    let x = 0;
    const R = y.length;
    let Z = b.length - 1, me = R - 1;
    for (; x <= Z && x <= me; ) {
      const ue = b[x], ve = y[x] = F ? Cr(y[x]) : hr(y[x]);
      if (Co(ue, ve))
        g(
          ue,
          ve,
          I,
          null,
          V,
          L,
          J,
          O,
          F
        );
      else
        break;
      x++;
    }
    for (; x <= Z && x <= me; ) {
      const ue = b[Z], ve = y[me] = F ? Cr(y[me]) : hr(y[me]);
      if (Co(ue, ve))
        g(
          ue,
          ve,
          I,
          null,
          V,
          L,
          J,
          O,
          F
        );
      else
        break;
      Z--, me--;
    }
    if (x > Z) {
      if (x <= me) {
        const ue = me + 1, ve = ue < R ? y[ue].el : v;
        for (; x <= me; )
          g(
            null,
            y[x] = F ? Cr(y[x]) : hr(y[x]),
            I,
            ve,
            V,
            L,
            J,
            O,
            F
          ), x++;
      }
    } else if (x > me)
      for (; x <= Z; )
        pe(b[x], V, L, !0), x++;
    else {
      const ue = x, ve = x, Se = /* @__PURE__ */ new Map();
      for (x = ve; x <= me; x++) {
        const M = y[x] = F ? Cr(y[x]) : hr(y[x]);
        M.key != null && Se.set(M.key, x);
      }
      let be, Q = 0;
      const ge = me - ve + 1;
      let Y = !1, p = 0;
      const P = new Array(ge);
      for (x = 0; x < ge; x++) P[x] = 0;
      for (x = ue; x <= Z; x++) {
        const M = b[x];
        if (Q >= ge) {
          pe(M, V, L, !0);
          continue;
        }
        let W;
        if (M.key != null)
          W = Se.get(M.key);
        else
          for (be = ve; be <= me; be++)
            if (P[be - ve] === 0 && Co(M, y[be])) {
              W = be;
              break;
            }
        W === void 0 ? pe(M, V, L, !0) : (P[W - ve] = x + 1, W >= p ? p = W : Y = !0, g(
          M,
          y[W],
          I,
          null,
          V,
          L,
          J,
          O,
          F
        ), Q++);
      }
      const S = Y ? ib(P) : Qi;
      for (be = S.length - 1, x = ge - 1; x >= 0; x--) {
        const M = ve + x, W = y[M], ye = y[M + 1], D = M + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ye.el || Dh(ye)
        ) : v;
        P[x] === 0 ? g(
          null,
          W,
          I,
          D,
          V,
          L,
          J,
          O,
          F
        ) : Y && (be < 0 || x !== S[be] ? B(W, I, D, 2) : be--);
      }
    }
  }, B = (b, y, I, v, V = null) => {
    const { el: L, type: J, transition: O, children: F, shapeFlag: x } = b;
    if (x & 6) {
      B(b.component.subTree, y, I, v);
      return;
    }
    if (x & 128) {
      b.suspense.move(y, I, v);
      return;
    }
    if (x & 64) {
      J.move(b, y, I, N);
      return;
    }
    if (J === Qe) {
      n(L, y, I);
      for (let Z = 0; Z < F.length; Z++)
        B(F[Z], y, I, v);
      n(b.anchor, y, I);
      return;
    }
    if (J === Zl) {
      $(b, y, I);
      return;
    }
    if (v !== 2 && x & 1 && O)
      if (v === 0)
        O.beforeEnter(L), n(L, y, I), On(() => O.enter(L), V);
      else {
        const { leave: Z, delayLeave: me, afterLeave: ue } = O, ve = () => {
          b.ctx.isUnmounted ? i(L) : n(L, y, I);
        }, Se = () => {
          L._isLeaving && L[Sy](
            !0
            /* cancelled */
          ), Z(L, () => {
            ve(), ue && ue();
          });
        };
        me ? me(L, ve, Se) : Se();
      }
    else
      n(L, y, I);
  }, pe = (b, y, I, v = !1, V = !1) => {
    const {
      type: L,
      props: J,
      ref: O,
      children: F,
      dynamicChildren: x,
      shapeFlag: R,
      patchFlag: Z,
      dirs: me,
      cacheIndex: ue,
      memo: ve
    } = b;
    if (Z === -2 && (V = !1), O != null && (zr(), qo(O, null, I, b, !0), jr()), ue != null && (y.renderCache[ue] = void 0), R & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const Se = R & 1 && me, be = !Xo(b);
    let Q;
    if (be && (Q = J && J.onVnodeBeforeUnmount) && ur(Q, y, b), R & 6)
      k(b.component, I, v);
    else {
      if (R & 128) {
        b.suspense.unmount(I, v);
        return;
      }
      Se && fi(b, null, y, "beforeUnmount"), R & 64 ? b.type.remove(
        b,
        y,
        I,
        N,
        v
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Qe || Z > 0 && Z & 64) ? re(
        x,
        y,
        I,
        !1,
        !0
      ) : (L === Qe && Z & 384 || !V && R & 16) && re(F, y, I), v && ae(b);
    }
    const ge = ve != null && ue == null;
    (be && (Q = J && J.onVnodeUnmounted) || Se || ge) && On(() => {
      Q && ur(Q, y, b), Se && fi(b, null, y, "unmounted"), ge && (b.el = null);
    }, I);
  }, ae = (b) => {
    const { type: y, el: I, anchor: v, transition: V } = b;
    if (y === Qe) {
      K(I, v);
      return;
    }
    if (y === Zl) {
      te(b);
      return;
    }
    const L = () => {
      i(I), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (b.shapeFlag & 1 && V && !V.persisted) {
      const { leave: J, delayLeave: O } = V, F = () => J(I, L);
      O ? O(b.el, L, F) : F();
    } else
      L();
  }, K = (b, y) => {
    let I;
    for (; b !== y; )
      I = f(b), i(b), b = I;
    i(y);
  }, k = (b, y, I) => {
    const { bum: v, scope: V, job: L, subTree: J, um: O, m: F, a: x } = b;
    sf(F), sf(x), v && pa(v), V.stop(), L && (L.flags |= 8, pe(J, b, y, I)), O && On(O, y), On(() => {
      b.isUnmounted = !0;
    }, y);
  }, re = (b, y, I, v = !1, V = !1, L = 0) => {
    for (let J = L; J < b.length; J++)
      pe(b[J], y, I, v, V);
  }, de = (b) => {
    if (b.shapeFlag & 6)
      return de(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), I = y && y[by];
    return I ? f(I) : y;
  };
  let _e = !1;
  const we = (b, y, I) => {
    let v;
    b == null ? y._vnode && (pe(y._vnode, null, null, !0), v = y._vnode.component) : g(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      I
    ), y._vnode = b, _e || (_e = !0, Yd(v), ch(), _e = !1);
  }, N = {
    p: g,
    um: pe,
    m: B,
    r: ae,
    mt: oe,
    mc: G,
    pc: A,
    pbc: he,
    n: de,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: jy(we)
  };
}
function Jl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function pi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Cr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Fh(s, a)), a.type === Pl && (a.patchFlag === -1 && (a = i[o] = Cr(a)), a.el = s.el), a.type === ni && !a.el && (a.el = s.el);
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
function Th(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Th(t);
}
function sf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Dh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Dh(t.subTree) : null;
}
const Lh = (e) => e.__isSuspense;
function ob(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : py(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), Pl = /* @__PURE__ */ Symbol.for("v-txt"), ni = /* @__PURE__ */ Symbol.for("v-cmt"), Zl = /* @__PURE__ */ Symbol.for("v-stc"), Zo = [];
let jn = null;
function Te(e = !1) {
  Zo.push(jn = e ? null : []);
}
function sb() {
  Zo.pop(), jn = Zo[Zo.length - 1] || null;
}
let os = 1;
function af(e, t = !1) {
  os += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function Rh(e) {
  return e.dynamicChildren = os > 0 ? jn || Qi : null, sb(), os > 0 && jn && jn.push(e), e;
}
function De(e, t, r, n, i, o) {
  return Rh(
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
  return Rh(
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
function Vh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Co(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $h = ({ key: e }) => e ?? null, ma = ({
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
    key: t && $h(t),
    ref: t && ma(t),
    scopeId: dh,
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
  return a ? (Bu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Jt(r) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === vh) && (e = ni), Vh(e)) {
    const a = lo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Bu(a, r), os > 0 && !o && jn && (a.shapeFlag & 6 ? jn[jn.indexOf(e)] = a : jn.push(a)), a.patchFlag = -2, a;
  }
  if (bb(e) && (e = e.__vccOpts), t) {
    t = lb(t);
    let { class: a, style: l } = t;
    a && !Jt(a) && (t.class = gt(a)), Et(l) && (/* @__PURE__ */ Hu(l) && !it(l) && (l = gn({}, l)), t.style = It(l));
  }
  const s = Jt(e) ? 1 : Lh(e) ? 128 : vy(e) ? 64 : Et(e) ? 4 : at(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Hu(e) || Nh(e) ? gn({}, e) : e : null;
}
function lo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Ir(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && $h(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(ma(t)) : [o, ma(t)] : ma(t)
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
    ssContent: e.ssContent && lo(e.ssContent),
    ssFallback: e.ssFallback && lo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Ku(
    d,
    l.clone(d)
  ), d;
}
function Ro(e = " ", t = 0) {
  return Be(Pl, null, e, t);
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
  ) : Vh(e) ? Cr(e) : Be(Pl, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lo(e);
}
function Bu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Nh(t) ? t._ctx = zn : i === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: zn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ro(t)]) : r = 8);
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
      else if (ml(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gl(i) && (t[i] = s);
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
const cb = wh();
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
    propsOptions: Ch(n, i),
    emitsOptions: xh(n, i),
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
let $a, Kc;
{
  const e = vl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  $a = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => fn = r
  ), Kc = t(
    "__VUE_SSR_SETTERS__",
    (r) => ss = r
  );
}
const ws = (e) => {
  const t = fn;
  return $a(e), e.scope.on(), () => {
    e.scope.off(), $a(t);
  };
}, lf = () => {
  fn && fn.scope.off(), $a(null);
};
function zh(e) {
  return e.vnode.shapeFlag & 4;
}
let ss = !1;
function pb(e, t = !1, r = !1) {
  t && Kc(t);
  const { props: n, children: i } = e.vnode, o = zh(e);
  qy(e, n, o, t), Qy(e, i, r || t);
  const s = o ? hb(e, t) : void 0;
  return t && Kc(!1), s;
}
function hb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ty);
  const { setup: n } = r;
  if (n) {
    zr();
    const i = e.setupContext = n.length > 1 ? gb(e) : null, o = ws(e), s = Ss(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Vp(s);
    if (jr(), o(), (a || e.sp) && !Xo(e) && mh(e), a) {
      if (s.then(lf, lf), t)
        return s.then((l) => {
          cf(e, l);
        }).catch((l) => {
          _l(l, e, 0);
        });
      e.asyncDep = s;
    } else
      cf(e, s);
  } else
    jh(e);
}
function cf(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = sh(t)), jh(e);
}
function jh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || vr);
  {
    const i = ws(e);
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
function Nl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sh(iy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Jo)
        return Jo[r](e);
    },
    has(t, r) {
      return r in t || r in Jo;
    }
  })) : e.proxy;
}
function yb(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bb(e) {
  return at(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ ly(e, t, ss), vb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wc;
const uf = typeof window < "u" && window.trustedTypes;
if (uf)
  try {
    Wc = /* @__PURE__ */ uf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hh = Wc ? (e) => Wc.createHTML(e) : (e) => e, Sb = "http://www.w3.org/2000/svg", _b = "http://www.w3.org/1998/Math/MathML", Ar = typeof document < "u" ? document : null, df = Ar && /* @__PURE__ */ Ar.createElement("template"), wb = {
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
      df.innerHTML = Hh(
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
const za = /* @__PURE__ */ Symbol("_vod"), Gh = /* @__PURE__ */ Symbol("_vsh"), Ai = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[za] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Io(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Io(e, !0), n.enter(e)) : n.leave(e, () => {
      Io(e, !1);
    }) : Io(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Io(e, t);
  }
};
function Io(e, t) {
  e.style.display = t ? e[za] : "none", e[Gh] = !t;
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
          r[a] == null && ga(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && ga(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), ga(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Mb];
      s && (r += ";" + s), n.cssText = r, o = Pb.test(r);
    }
  } else t && e.removeAttribute("style");
  za in e && (e[za] = o ? n.display : "", e[Gh] && (n.display = "none"));
}
const ff = /\s*!important$/;
function ga(e, t, r) {
  if (it(r))
    r.forEach((n) => ga(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Ab(e, t);
    ff.test(r) ? e.setProperty(
      Oi(n),
      r.replace(ff, ""),
      "important"
    ) : e[n] = r;
  }
}
const pf = ["Webkit", "Moz", "ms"], Ql = {};
function Ab(e, t) {
  const r = Ql[t];
  if (r)
    return r;
  let n = xn(t);
  if (n !== "filter" && n in e)
    return Ql[t] = n;
  n = bl(n);
  for (let i = 0; i < pf.length; i++) {
    const o = pf[i] + n;
    if (o in e)
      return Ql[t] = o;
  }
  return t;
}
const hf = "http://www.w3.org/1999/xlink";
function mf(e, t, r, n, i, o = D0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(hf, t.slice(6, t.length)) : e.setAttributeNS(hf, t, r) : r == null || o && !Hp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : wr(r) ? String(r) : r
  );
}
function gf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Hh(r) : r);
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
    a === "boolean" ? r = Hp(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Wi(e, t, r, n) {
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
      Wi(e, a, c, l);
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
  return [e[2] === ":" ? e.slice(3) : Oi(e.slice(2)), t];
}
let ec = 0;
const Ob = /* @__PURE__ */ Promise.resolve(), Fb = () => ec || (Ob.then(() => ec = 0), ec = Date.now());
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
  t === "class" ? kb(e, n, s) : t === "style" ? Nb(e, r, n) : ml(t) ? gl(t) || Ib(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rb(e, t, n, s)) ? (gf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
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
  return it(t) ? (r) => pa(t, r) : t;
};
function $b(e) {
  e.target.composing = !0;
}
function _f(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tc = /* @__PURE__ */ Symbol("_assign");
function wf(e, t, r) {
  return t && (e = e.trim()), r && (e = Tu(e)), e;
}
const xf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[tc] = Sf(i);
    const o = n || i.props && i.props.type === "number";
    Wi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[tc](wf(e.value, r, o));
    }), (r || o) && Wi(e, "change", () => {
      e.value = wf(e.value, r, o);
    }), t || (Wi(e, "compositionstart", $b), Wi(e, "compositionend", _f), Wi(e, "change", _f));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[tc] = Sf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Tu(e.value) : e.value, l = t ?? "";
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
const Yu = ((...e) => {
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
const Ub = "PanoramaSuite.Debug.Diagnostics", Bb = "PanoramaSuite.Debug.ExportDiagnostics", nc = "pano_suite.diagnostics.v1", Mf = "pano_suite.diagnostics.previous.v1", Yb = 300, qb = 2e5, Xb = 100, Jb = 20, Zb = 1e3, Qb = 2, Zs = 1024 * 1024;
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
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, w = t.FinalizationRegistry ? new t.FinalizationRegistry((N) => {
    d.delete(N), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((N) => {
    u.delete(N), m.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), _ = { created: 0, lost: 0, restored: 0, disposed: 0 }, ee = [], $ = /* @__PURE__ */ new Map();
  let te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const z = [];
  function G(N, le, b = void 0) {
    ee.push(b === void 0 ? { t: t.clock(), type: N, label: le } : { t: t.clock(), type: N, label: le, detail: b }), ee.length > Xb && ee.shift();
  }
  function ne(N, le, b, y, I) {
    if (!r || !y || !t.WeakRef) return y;
    const v = { ref: new t.WeakRef(y), label: I };
    return N.add(v), le == null || le.register(y, v), b.created += 1, y;
  }
  function he(N, le = "") {
    return ne(d, w, f, N, le);
  }
  function q(N, le = "") {
    return ne(u, g, m, N, le);
  }
  function fe({ label: N = "", width: le, height: b, offscreen: y = !1 } = {}) {
    const I = globalThis.OffscreenCanvas;
    let v;
    return y && typeof I < "u" ? v = new I(le, b) : (v = t.document().createElement("canvas"), le !== void 0 && b !== void 0 && (v.width = le, v.height = b)), he(v, N);
  }
  function ce(N) {
    N.width = 0, N.height = 0, r && (f.released += 1);
  }
  function oe(N = t.document(), le = "") {
    var b;
    return q(((b = N == null ? void 0 : N.createElement) == null ? void 0 : b.call(N, "video")) || null, le);
  }
  function U(N, le) {
    if (!r || !N) return () => {
    };
    const b = { label: le, lost: !1, disposed: !1 };
    h.add(b), _.created += 1, G("webgl-created", le);
    const y = () => {
      b.disposed || (b.lost = !0, _.lost += 1, G("webglcontextlost", le));
    }, I = () => {
      b.disposed || (b.lost = !1, _.restored += 1, G("webglcontextrestored", le));
    };
    return N.addEventListener("webglcontextlost", y), N.addEventListener("webglcontextrestored", I), () => {
      b.disposed || (b.disposed = !0, h.delete(b), _.disposed += 1, G("webgl-disposed", le));
    };
  }
  function E(N, le) {
    return $.set(N, le), () => {
      $.get(N) === le && $.delete(N);
    };
  }
  function j() {
    return r ? t.now() : -1;
  }
  function A(N) {
    if (N < 0 || !r) return;
    const le = t.now() - N;
    te.count += 1, te.maxMs = Math.max(te.maxMs, le);
  }
  function H(N, le) {
    if (le < 0 || !r) return;
    const b = t.now() - le, y = C.get(N) ?? { count: 0, maxMs: 0 };
    y.count += 1, y.maxMs = Math.max(y.maxMs, b), C.set(N, y);
  }
  function T() {
    let N = 0, le = 0, b = 0, y = [0, 0];
    const I = {};
    for (const v of d) {
      const V = v.ref.deref();
      if (!V) continue;
      N += 1;
      const L = V.width * V.height;
      L > 0 && (le += 1), b += L, L > y[0] * y[1] && (y = [V.width, V.height]);
      const J = I[v.label] ?? (I[v.label] = [0, 0]);
      J[0] += 1, J[1] += L;
    }
    return { ...f, alive: N, sized: le, pixels: b, mb: Xr(b * 4 / Zs, 1), largest: y, byLabel: I };
  }
  function B() {
    const N = [];
    let le = 0, b = 0;
    for (const y of u) {
      const I = y.ref.deref();
      if (!I) continue;
      le += 1;
      const v = !I.paused && !I.ended;
      v && (b += 1), N.length < Jb && N.push({
        label: y.label,
        playing: v,
        src: !!(I.currentSrc || I.src),
        size: [I.videoWidth || 0, I.videoHeight || 0],
        ready: I.readyState ?? 0,
        connected: !!I.isConnected
      });
    }
    return { ...m, alive: le, playing: b, list: N };
  }
  function pe() {
    const N = t.now(), le = t.memory(), b = {
      t: t.clock(),
      heap: le ? { used: Xr(le.usedJSHeapSize / Zs, 1), total: Xr(le.totalJSHeapSize / Zs, 1), limit: Xr(le.jsHeapSizeLimit / Zs, 1) } : null,
      canvas: T(),
      webgl: { ..._, alive: [...h].filter((y) => !y.lost).length },
      video: B(),
      frame: { count: te.count, maxMs: Xr(te.maxMs), longTasks: X.count, longTaskMaxMs: Xr(X.maxMs) },
      renders: Object.fromEntries([...C].map(([y, I]) => [y, { count: I.count, maxMs: Xr(I.maxMs) }])),
      sources: Object.fromEntries([...$].map(([y, I]) => [y, I()])),
      costMs: Xr(c, 3)
    };
    return te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, z.push({ record: b, text: JSON.stringify(b) }), z.length > Yb && z.shift(), l += 1, l % Qb === 0 && K(), c = t.now() - N, b;
  }
  function ae(N = qb) {
    const le = JSON.stringify({ ...o, events: ee }).slice(0, -1);
    let b = N - le.length - 14, y = z.length;
    for (; y > 0 && b - z[y - 1].text.length - 1 >= 0; )
      y -= 1, b -= z[y].text.length + 1;
    return `${le},"records":[${z.slice(y).map((I) => I.text).join(",")}]}`;
  }
  function K() {
    if (!o) return;
    const N = t.storage();
    if (N) {
      o.savedAt = t.clock();
      try {
        N.setItem(nc, ae());
      } catch {
      }
    }
  }
  function k() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", K();
  }
  function re() {
    var I;
    if (n) return i;
    n = !0;
    const N = t.storage();
    if (!N) return null;
    let le = null;
    try {
      if (le = N.getItem(nc), le === null) {
        const v = N.getItem(Mf);
        return i = v === null ? null : JSON.parse(v), i;
      }
      N.setItem(Mf, le), N.removeItem(nc), i = JSON.parse(le);
    } catch {
      return i;
    }
    const b = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], y = b.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${b.length} records kept. Its last records:`,
      JSON.stringify(y)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((I = b.at(-1)) == null ? void 0 : I.t) || 0).toISOString()}; ${b.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(y)
    ), i;
  }
  function de(N) {
    const le = N === !0;
    if (re(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, z.length = 0, a = t.observeLongTasks((b) => {
          for (const y of b)
            X.count += 1, X.maxMs = Math.max(X.maxMs, y.duration);
        }), t.addUnload(k), s = t.setInterval(pe, Zb), K();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(k), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", K();
    }
  }
  function _e() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...ee], records: z.map((N) => N.record) } : null,
      previous: i
    };
  }
  function we() {
    const N = t.document(), le = new Blob([JSON.stringify(_e(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(le), y = N.createElement("a");
    y.href = b, y.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, y.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: fe,
    releaseCanvas: ce,
    trackCanvas: he,
    createVideo: oe,
    trackVideo: q,
    watchContext: U,
    addSource: E,
    frameStart: j,
    frameEnd: A,
    renderEnd: H,
    sample: pe,
    serialize: ae,
    recoverPrevious: re,
    setEnabled: de,
    exportData: _e,
    download: we
  };
}
const Ln = n1(), rn = Ln.createCanvas, as = Ln.releaseCanvas, rc = Ln.trackCanvas, xs = Ln.createVideo, Pf = Ln.trackVideo, r1 = Ln.addSource, i1 = Ln.frameStart, o1 = Ln.frameEnd;
function Kh(e, t) {
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
function Ui(e, t) {
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
function qu(e, t) {
  return rn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Qr(e, t, r) {
  if (!e) return Ui(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Bt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let ic = null, oc = null, Cf = null, If = null, Ut = null, Eo = null;
function l1() {
  if (oc) return oc;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), oc = r, r;
}
function sc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  ic = Qr(ic, r, n);
  const i = ic;
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
const zt = /* @__PURE__ */ new Map(), Xu = 128;
function p1(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (zt.has(l)) {
    const ee = zt.get(l);
    return zt.delete(l), zt.set(l, ee), ee;
  }
  zt.size >= Xu && zt.delete(zt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = qu(c, c), f = u.getContext("2d"), m = a * s, w = s + 1, g = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, _ = f.createRadialGradient(d, d, m, d, d, w);
  return _.addColorStop(0, g), _.addColorStop(1, h), f.fillStyle = _, f.fillRect(0, 0, c, c), zt.set(l, u), u;
}
function h1(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), w = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${w.toFixed(2)}:${g.toFixed(2)}`;
  if (zt.has(h)) {
    const G = zt.get(h);
    return zt.delete(h), zt.set(h, G), G;
  }
  zt.size >= Xu && zt.delete(zt.keys().next().value);
  const _ = qu(u, f), ee = _.getContext("2d"), $ = ee.createImageData(u, f), te = $.data, C = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), z = 1 + m;
  for (let G = 0; G < f; G++)
    for (let ne = 0; ne < u; ne++) {
      const he = ne + 0.5 - e, q = G + 0.5 - t, fe = Math.max(Math.abs(he) - C, 0), oe = Math.hypot(fe, q) / t;
      if (oe >= 1) continue;
      const U = oe <= X ? 1 : Math.max(0, (1 - oe) / Math.max(1e-4, 1 - X)), E = 1 - oe, j = 1 + m * (1 - E) * (1 - E), A = 1 - w * E * E, H = j * A / z;
      let T = 1;
      if (g > 0) {
        const ae = Math.floor((q + t) / 1.5), K = Math.floor((he + e) / 8), k = Mi(ro(ae * 41 + 500, K * 19 + 300));
        T = 1 - g * 0.42 * k;
      }
      const B = Math.round(255 * Math.min(1, d * U * H * T));
      if (B <= 0) continue;
      const pe = (G * u + ne) * 4;
      te[pe] = a, te[pe + 1] = l, te[pe + 2] = c, te[pe + 3] = B;
    }
  return ee.putImageData($, 0, 0), zt.set(h, _), _;
}
function ro(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Mi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function m1(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Mi(ro(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const w = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = g1(e, t, a, l, r, n), h = o * 0.55;
  if (g < h) return 0;
  const ee = 0.45 + 0.55 * ((g - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * w * ee));
}
function g1(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Mi(ro(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Mi(ro(c * 23 + 800, d * 29 + 500)), f = Mi(ro(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function y1(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (zt.has(f)) {
    const ee = zt.get(f);
    return zt.delete(f), zt.set(f, ee), ee;
  }
  zt.size >= Xu && zt.delete(zt.keys().next().value);
  const m = qu(c, d), w = m.getContext("2d"), g = w.createImageData(c, d), h = g.data, _ = Math.max(0, Math.min(1, r));
  for (let ee = 0; ee < d; ee++)
    for (let $ = 0; $ < c; $++) {
      const te = m1($, ee, e, t, _, u, l);
      if (te <= 0) continue;
      const C = (ee * c + $) * 4;
      h[C] = o, h[C + 1] = s, h[C + 2] = a, h[C + 3] = te;
    }
  return w.putImageData(g, 0, 0), zt.set(f, m), m;
}
function Wh(e, t, r) {
  var g, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = d1(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = b1(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = f1(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let w;
  if (n === "chisel") {
    const _ = i * a, ee = i, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), te = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    w = h1(_, ee, o, s, $, te, C);
  } else if (n === "crayon") {
    const _ = i * a, ee = i, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    w = y1(_, ee, o, s, $);
  } else
    w = p1(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: w, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: m, latitudeCorrection: u };
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
function Ju(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = ro(t, r);
    for (let m = 0; m < d; m++) {
      const w = Mi(f + m * 2) * Math.PI * 2, g = Math.sqrt(Mi(f + m * 2 + 1)) * u, h = t + Math.cos(w) * g, _ = r + Math.sin(w) * g, ee = Math.max(0.5, e.radiusPx * i * 0.48), $ = (0.5 - _ / Math.max(1, e.desc.height)) * Math.PI, te = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, C = ee * e.aspect * te;
      Ef(e, h, _, ee, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Ef(e, t, r, o, l);
}
function Of(e, t, r) {
  const n = u1(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = Wh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let m = Number(n[f].u || 0) * i;
    const w = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(m - a[f - 1].x) > i * 0.5 && (m += m < a[f - 1].x ? i : -i), a.push({ x: m, y: w });
  }
  if (Ju(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const m = a[f], w = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = ls(s, d.x, d.y, w.x, w.y, u) : u = ja(s, l, d, w, m, u), l = c, c = m, d = w;
  }
  a.length === 2 ? ls(s, d.x, d.y, c.x, c.y, u) : ja(s, l, d, c, c, u), e.restore();
}
function ya(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = v1(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const m = c1(n[f]);
    let w = Number(m.x || 0) * i;
    f > 0 && Math.abs(w - a[f - 1].x) > i * 0.5 && (w += w < a[f - 1].x ? i : -i), a.push({ x: w, y: Number(m.y || 0) * o }), w < l && (l = w), w > c && (c = w);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let m = 1; m < a.length; m++) e.lineTo(a[m].x + f, a[m].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Qs(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    ya(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Of(e, t, r) : (Eo = Qr(Eo, r.width, r.height), Bt(Eo), Of(Eo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Eo.canvas, 0, 0), e.restore());
}
function hi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ls(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Ju(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function ja(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, m = f + c, w = f - u, g = 16;
  let h = o, _ = r.x, ee = r.y;
  for (let $ = 1; $ <= g; $++) {
    const te = u + w * $ / g, C = ((u - te) * t.x + (te - d) * r.x) / (u - d), X = ((u - te) * t.y + (te - d) * r.y) / (u - d), z = ((f - te) * r.x + (te - u) * n.x) / (f - u), G = ((f - te) * r.y + (te - u) * n.y) / (f - u), ne = ((m - te) * n.x + (te - f) * i.x) / (m - f), he = ((m - te) * n.y + (te - f) * i.y) / (m - f), q = ((f - te) * C + (te - d) * z) / (f - d), fe = ((f - te) * X + (te - d) * G) / (f - d), ce = ((m - te) * z + (te - u) * ne) / (m - u), oe = ((m - te) * G + (te - u) * he) / (m - u), U = ((f - te) * q + (te - u) * ce) / (f - u), E = ((f - te) * fe + (te - u) * oe) / (f - u);
    h = ls(e, _, ee, U, E, h), _ = U, ee = E;
  }
  return h;
}
function S1(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const m = Wh(i, n, o), w = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", _ = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Ju(m, c, a, 1), e.activeStroke = {
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
      strokeOpacity: w,
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
  l.pointCount === 1 ? l.distSinceStamp = ls(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = ja(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function Al(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ui(t, r), s = {
    descriptor: n,
    committedMask: Ui(t, r),
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
    committedPaint: Ui(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ui(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function w(ce) {
    return {
      actionGroupId: ce,
      descriptor: n,
      committedPaint: Ui(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(ce) {
    let oe = i.get(ce);
    return oe || (oe = w(ce), i.set(ce, oe)), oe;
  }
  function h(ce) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function _(ce) {
    var H;
    const oe = !u || u.length !== ce.length || ce.some((T, B) => T !== u[B]), U = d === "paint" && ((H = c ? i.get(c) : a) == null ? void 0 : H.activeStroke) || null;
    let E = s.displayDirty || a.displayDirty || oe;
    for (const T of ce) {
      const B = i.get(T);
      if (B != null && B.displayDirty) {
        E = !0;
        break;
      }
    }
    if (U && (E = !0), !E) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const T of ce) {
      const B = i.get(T);
      B && (B.displayDirty = !1);
    }
    u = [...ce];
    const j = l.ctx;
    Bt(l);
    const A = !!(U != null && U.isEraser);
    for (const T of ce) {
      const B = i.get(T);
      if (!B) continue;
      const ae = c === B.actionGroupId && d === "paint" ? B.activeStroke : null;
      if (A)
        Ut = Qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(B.committedPaint.canvas, 0, 0), hi(Ut.ctx, o.canvas), j.drawImage(Ut.canvas, 0, 0);
      else if (j.drawImage(B.committedPaint.canvas, 0, 0), ae) {
        const K = B.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ae.strokeOpacity ?? 1));
        j.save(), j.globalAlpha = K, j.drawImage(o.canvas, 0, 0), j.restore();
      }
    }
  }
  function ee(ce) {
    var U, E, j, A, H;
    for (const T of i.values())
      Bt(T.committedPaint), Bt(T.currentStroke), T.activeStroke = null, cn(T);
    Bt(s.committedMask), Bt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const oe = [
      ...Array.isArray((E = (U = ce == null ? void 0 : ce.painting) == null ? void 0 : U.paint) == null ? void 0 : E.strokes) ? ce.painting.paint.strokes : [],
      ...Array.isArray((A = (j = ce == null ? void 0 : ce.painting) == null ? void 0 : j.mask) == null ? void 0 : A.strokes) ? ce.painting.mask.strokes : []
    ];
    for (const T of oe) {
      if (((H = T == null ? void 0 : T.targetSpace) == null ? void 0 : H.kind) !== "ERP_GLOBAL") continue;
      const B = String((T == null ? void 0 : T.layerKind) || "paint"), ae = String((T == null ? void 0 : T.toolKind) || "pen") === "eraser";
      if (B === "mask") {
        const K = s.descriptor;
        ae ? (Ut = Qr(Ut, K.width, K.height), Bt(Ut), Qs(Ut.ctx, T, K), hi(s.committedMask.ctx, Ut.canvas)) : (Qs(s.committedMask.ctx, T, K), s.painted = !0);
        continue;
      }
      if (ae) {
        Ut = Qr(Ut, n.width, n.height), Bt(Ut), Qs(Ut.ctx, T, n);
        for (const K of i.values())
          hi(K.committedPaint.ctx, Ut.canvas), cn(K);
      } else {
        const K = String((T == null ? void 0 : T.actionGroupId) || "__default__"), k = g(K), re = k.descriptor;
        Qs(k.committedPaint.ctx, T, re), cn(k);
      }
    }
    _([...i.keys()]);
  }
  function $(ce, oe) {
    d = String((ce == null ? void 0 : ce.layerKind) || "");
    const U = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Bt(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const E = U ? a : g(String((ce == null ? void 0 : ce.actionGroupId) || "__default__"));
      c = U ? "" : String((ce == null ? void 0 : ce.actionGroupId) || "__default__"), Bt(E.currentStroke), E.activeStroke = null, cn(E);
    }
  }
  function te(ce, oe) {
    var B;
    const U = String((ce == null ? void 0 : ce.layerKind) || "paint"), E = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", j = U === "mask" ? s : E ? a : g(String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__")), A = j.activeStroke, H = j.descriptor;
    if (A && A.pointCount > 1) {
      const pe = j.currentStroke.ctx;
      pe.globalCompositeOperation = "source-over";
      const ae = {
        ctx: pe,
        stampTex: A.stampTex,
        radiusPx: A.radiusPx,
        spacingPx: A.spacingPx,
        desc: H,
        aspect: A.aspect,
        angle: A.angle,
        stampKind: A.stampKind,
        scatter: A.scatter,
        latitudeCorrection: A.latitudeCorrection
      };
      A.pointCount === 2 ? ls(ae, A.lastMidX, A.lastMidY, A.prev.x, A.prev.y, A.distSinceStamp) : ja(ae, A.pprev, { x: A.lastMidX, y: A.lastMidY }, A.prev, A.prev, A.distSinceStamp);
    }
    j.lassoPreviewActive && (Bt(j.currentStroke), ya(j.currentStroke.ctx, ce, H), j.lassoPreviewActive = !1);
    const T = U === "mask" ? s.committedMask : j.committedPaint;
    if (E && U === "paint")
      for (const pe of i.values())
        hi(pe.committedPaint.ctx, j.currentStroke.canvas), cn(pe);
    else if (E)
      hi(T.ctx, j.currentStroke.canvas);
    else {
      U === "mask" && (s.painted = !0);
      const pe = Math.max(0, Math.min(1, (A == null ? void 0 : A.strokeOpacity) ?? 1));
      T.ctx.save(), T.ctx.globalAlpha = pe, T.ctx.drawImage(j.currentStroke.canvas, 0, 0), T.ctx.restore();
    }
    a1() && (String((ce == null ? void 0 : ce.toolKind) || ""), String((H == null ? void 0 : H.kind) || ""), Number((H == null ? void 0 : H.width) || 0), Number((H == null ? void 0 : H.height) || 0), String(((B = ce == null ? void 0 : ce.targetSpace) == null ? void 0 : B.viewMode) || ""), Number((ce == null ? void 0 : ce.aspect) ?? 1), Af(j.currentStroke.canvas), Af(T.canvas), void 0), Bt(j.currentStroke), j.activeStroke = null, cn(j), f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function C(ce) {
    if (d === "mask")
      Bt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Bt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const oe = i.get(c);
      oe && (Bt(oe.currentStroke), oe.activeStroke = null, oe.lassoPreviewActive = !1, cn(oe));
    }
    f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function X(ce, oe) {
    var E;
    if (d = String((ce == null ? void 0 : ce.layerKind) || ""), String(((E = ce == null ? void 0 : ce.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Bt(s.currentStroke), ya(s.currentStroke.ctx, ce, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const j = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", A = j ? a : g(String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__"));
        c = j ? "" : String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__"), Bt(A.currentStroke), ya(A.currentStroke.ctx, ce, A.descriptor), A.lassoPreviewActive = !0, cn(A);
      }
      _([...i.keys()]);
    }
  }
  function z(ce) {
    return _(ce ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function G(ce) {
    return i.get(String(ce)) ?? null;
  }
  function ne() {
    return [...i.keys()];
  }
  function he(ce) {
    var pe;
    const oe = i.get(String(ce));
    if (!oe) return null;
    const U = d === "paint" && c === oe.actionGroupId, E = d === "paint" && ((pe = c ? i.get(c) : a) == null ? void 0 : pe.activeStroke) || null, j = !!(E != null && E.isEraser), A = U ? oe.activeStroke : null;
    if (!j && !A) return oe.committedPaint.canvas;
    const H = `${oe.revision}:${a.revision}:${j}`, T = f.get(oe.actionGroupId);
    if ((T == null ? void 0 : T.key) === H) return T.surface.canvas;
    const B = Qr((T == null ? void 0 : T.surface) ?? null, t, r);
    return Bt(B), B.ctx.drawImage(oe.committedPaint.canvas, 0, 0), j ? hi(B.ctx, o.canvas) : (B.ctx.save(), B.ctx.globalAlpha = oe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, A.strokeOpacity ?? 1)), B.ctx.drawImage(o.canvas, 0, 0), B.ctx.restore()), f.set(oe.actionGroupId, { key: H, surface: B }), B.canvas;
  }
  function q() {
    const ce = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ce || ce.isEraser) ? null : `${s.revision}:${!!ce}`;
  }
  function fe() {
    const ce = q();
    if (ce === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === ce) return m.surface.canvas;
    const oe = Qr((m == null ? void 0 : m.surface) ?? null, t, r);
    Bt(oe);
    const U = d === "mask" ? s.activeStroke : null;
    return U != null && U.isEraser ? (Ut = Qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(s.committedMask.canvas, 0, 0), hi(Ut.ctx, o.canvas), sc(oe.ctx, Ut.canvas)) : (sc(oe.ctx, s.committedMask.canvas), U && sc(oe.ctx, o.canvas)), m = { key: ce, surface: oe }, oe.canvas;
  }
  return {
    rebuildCommitted: ee,
    beginStroke: $,
    appendStrokePoint: S1,
    updateActiveStroke: X,
    commitActiveStroke: te,
    cancelActiveStroke: C,
    getErpTarget: z,
    ensureTarget: h,
    getGroupTarget: G,
    getGroupDisplayCanvas: he,
    getMaskDisplayCanvas: fe,
    getMaskDisplayRevision: q,
    getAllGroupIds: ne
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Zu(e, t) {
  let r = Ht(t) - Ht(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Uc = 3;
function Oo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ha(e, t = 0) {
  const r = Oo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Oo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Oo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Oo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Oo(t) || 0);
}
function Uh(e) {
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
const Ff = Math.PI / 180, Tf = 0.12, _1 = Uc, w1 = 35, x1 = 140, Vo = 100, k1 = 20, Df = 0.8;
function M1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Vo), 1, 179) * Ff;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Ff;
}
function Qu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Vo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(ee, $ = null) {
    a && a(ee, $);
  }
  function d(ee, $, te = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(ee || 0), l.drag.lastY = Number($ || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = te, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: te }), !0;
  }
  function u(ee, $, te = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(C || performance.now()), z = Number(ee), G = Number($), ne = z - l.drag.lastX, he = G - l.drag.lastY;
    l.drag.lastX = z, l.drag.lastY = G, l.drag.lastTs = X;
    const q = n() || { x: 1, y: 1 }, fe = Number(q.x || 1), ce = Number(q.y || 1), oe = { ...t() };
    let U = 0, E = 0;
    if (te === "unwrap") {
      const A = i() || { w: 1, h: 1 }, H = Math.max(1, Number(A.w || 1)), T = Math.max(1, Number(A.h || 1)), B = ne / H, pe = he / T;
      U = -B * 360 * fe, E = pe * 180 * ce;
    } else {
      const A = o() || { w: 0, h: 0 }, H = Math.max(1, Number(A.w || 0)), T = Math.max(1, Number(A.h || 0));
      if (H > 1 && T > 1) {
        const B = Ie(Number(oe.fov || Vo), 1, 179), pe = Ie(M1(B, H, T), 0.1, 179);
        U = -(ne / H) * B * fe, E = he / T * pe * ce;
      } else
        U = -ne * Tf * fe, E = he * Tf * ce;
    }
    oe.yaw = Ht(Number(oe.yaw || 0) + U), oe.pitch = Ie(Number(oe.pitch || 0) + E, -89.9, 89.9), r(oe), l.velHistory.push({ ts: X, yaw: oe.yaw, pitch: oe.pitch });
    let j = 0;
    for (; j < l.velHistory.length - 1 && l.velHistory[j].ts < X - 100; ) j++;
    return j > 0 && l.velHistory.splice(0, j), l.inertia.active = !1, l.inertia.lastTs = X, s(), c("drag", { phase: "move", dx: ne, dy: he, dYaw: U, dPitch: E }), !0;
  }
  function f(ee = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const $ = Number(ee || performance.now());
    l.drag.lastTs = $;
    const te = l.velHistory.filter((X) => $ - X.ts <= 80);
    if (te.length >= 2) {
      const X = te[0], z = te.at(-1), G = Math.max(1e-3, (z.ts - X.ts) / 1e3);
      let ne = z.yaw - X.yaw;
      ne > 180 && (ne -= 360), ne < -180 && (ne += 360), l.inertia.vx = ne / G, l.inertia.vy = (z.pitch - X.pitch) / G;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > k1, l.inertia.lastTs = $, c("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function m(ee = performance.now()) {
    if (!l.inertia.active) return !1;
    const $ = Number(ee || performance.now()), te = Math.max(1e-3, ($ - (l.inertia.lastTs || $)) / 1e3);
    l.inertia.lastTs = $;
    const C = { ...t() };
    C.yaw = Ht(Number(C.yaw || 0) + l.inertia.vx * te), C.pitch = Ie(Number(C.pitch || 0) + l.inertia.vy * te, -89.9, 89.9);
    const X = Math.exp(-5.5 * te);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < Df && Math.abs(l.inertia.vy) < Df && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), s(), l.inertia.active;
  }
  function w() {
    const ee = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], ee;
  }
  function g(ee) {
    const $ = Math.sign(Number(ee || 0));
    if (!$) return !1;
    const te = { ...t() }, C = Number(te.fov || Vo);
    return te.fov = Ie(C + $ * _1, w1, x1), r(te), s(), c("wheel", { deltaSign: $, fovBefore: C, fovAfter: te.fov }), !0;
  }
  function h(ee, $ = 0) {
    return g(Ha(ee, $));
  }
  function _() {
    r({ yaw: 0, pitch: 0, fov: Vo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: w,
    applyWheel: g,
    applyWheelEvent: h,
    resetView: _
  };
}
const wt = Math.PI / 180, tn = 180 / Math.PI;
function Xn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ga(e, t) {
  return Xn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ka(e, t) {
  return Xn(e.x * t, e.y * t, e.z * t);
}
function ac(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ed(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Xn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function go(e, t, r = 0) {
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
function Wa(e) {
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
function ea(e, t, r = 1) {
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
    const l = ea(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = ea(e.points, t, 1);
  if (!o) return null;
  const s = ea(e.rawPoints, t, 1), a = ea(e.processedPoints, t, 1);
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
function yo(e) {
  const t = P1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: N1(e.groups),
    paint: Lf(e.paint, "paint"),
    mask: Lf(e.mask, "mask"),
    raster_objects: D1(e.raster_objects)
  };
}
const Jn = 1, Zn = 179, Bc = 85;
function Cl(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Bh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Yh(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * tn;
  return r && (n = Math.round(n / 15) * 15), Cl(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function si(e = {}) {
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
function Ci(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = si(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function td(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function nd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * tn, Jn, Zn), s = Ie(2 * Math.atan(i / (2 * r)) * tn, Jn, Zn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function L1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = si(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function rd(e, t, r = Bc) {
  const n = Math.max(1e-12, ot(t, 1)), i = Ie(ot(r, Bc), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function qh(e, t, r) {
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
function ba(e, t) {
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
function Fi(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Pi(e) {
  const t = Fi(e), n = [
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
function id(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Pi(t), t;
}
function Xh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ie(s, Jn, Zn) : Ie(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return id({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Ie(ot(r, 0), -89.9, 89.9),
    roll_deg: Cl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Dr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Pi(e);
}
function Jh(e, t) {
  const r = si(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * tn, o = 2 * Math.atan(r.tanHalfY * n) * tn;
  return i < Jn || i > Zn || o < Jn || o > Zn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Zh(e, t, r = Uc) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, Uc));
  if (!n || !(i > 0)) return null;
  const o = si(e), s = o.hFovDeg + n * i;
  if (s < Jn || s > Zn) return null;
  const a = Math.tan(s * wt * 0.5);
  return Jh(e, a / o.tanHalfX);
}
function Qh(e, t) {
  const r = si(e), n = go(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return ed(Ga(Ga(n.fwd, Ka(n.right, i)), Ka(n.up, o)));
}
function $1(e) {
  return Xn(e.x, e.y, -e.z);
}
function va(e) {
  return Xn(e.x, e.y, -e.z);
}
function kn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = go(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function em(e) {
  const t = va(Xn(e[0][0], e[1][0], e[2][0])), r = va(Xn(e[0][1], e[1][1], e[2][1])), n = va(Xn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * tn, pitchDeg: o * tn, rollDeg: l * tn };
}
function cs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function ai(e) {
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
function ta(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const _i = 1e-6, Yc = 1e-6, z1 = 1e-9;
function us(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function j1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    us(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return us(0, n, o, 1, 0.5 * (s + a));
}
function co(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function uo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, m, w) => f + m * a[w], 0) < 0) return r.map(() => 0);
  const l = s.map((f, m) => (f * o + a[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, w) => m + w * w, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function tm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  co(e, n) && (l = uo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return co(e, n + 1) && (c = uo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function nm(e, t, r, n, i) {
  const [[o], [s]] = tm(e, t, r.map((a) => [a]), n);
  return us(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function H1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = tm(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => us(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Ua([e, t, r, n], [i, o, s, a]) {
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
function lc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function K1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function qc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ji(e, t) {
  return K1(Ua([-e[0], -e[1], -e[2], e[3]], t));
}
function cc(e, t, r) {
  return Ua(e, qc(Ji(e, t).map((n) => r * n)));
}
function uc(e, t) {
  const r = G1(e, t);
  if (Math.abs(r) > Yc) return r < 0;
  const [n, i, o] = Ji(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Yc) return s < 0;
  return !1;
}
function na(e) {
  const { x: t, y: r, z: n, w: i } = ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Xc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function W1(e, t, r, n) {
  const i = na(e[r].value);
  let o = na(e[r + 1].value);
  uc(i, o) && (o = lc(o));
  const s = t[r + 1] - t[r], a = Ji(i, o);
  let l = a;
  if (co(e, r)) {
    let C = na(e[r - 1].value);
    uc(C, i) && (C = lc(C)), l = uo(t, r, Ji(i, C), a).map((X) => X * s);
  }
  let c = a;
  if (co(e, r + 1)) {
    let C = na(e[r + 2].value);
    uc(o, C) && (C = lc(C)), c = uo(t, r + 1, Ji(o, i), Ji(o, C)).map((X) => X * s);
  }
  const d = Ua(i, qc(l.map((C, X) => 0.5 * (C - a[X])))), u = Ua(o, qc(a.map((C, X) => 0.5 * (C - c[X])))), [f, m, w, g] = cc(cc(i, o, n), cc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: _, rollDeg: ee } = em(cs({ x: f, y: m, z: w, w: g })), $ = e[r].value, te = e[r + 1].value;
  return {
    yaw_deg: Xc(h, $.yaw_deg, te.yaw_deg, n),
    pitch_deg: _,
    roll_deg: Xc(ee, $.roll_deg, te.roll_deg, n)
  };
}
function ds(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ba(e) {
  return Math.sqrt(ds(e, e));
}
function Ya(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function rm(e, t) {
  const r = ds(e, t), n = t.map((s, a) => s - r * e[a]), i = Ba(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Bi(e, t) {
  const r = Ba(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ra(e, t, r) {
  return Bi(e, rm(e, t).map((n) => r * n));
}
function dc(e, t) {
  const r = Ya(e[t].value), n = Ya(e[t + 1].value), i = ds(r, n), o = i < 0 && Ba(n.map((l, c) => l - i * r[c])) <= Yc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = rm(r, n);
  const a = Ba(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function U1(e, t, r, n) {
  const i = Ya(e[r].value), o = Ya(e[r + 1].value), [s, a, l] = dc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  co(e, r) && (c = uo(t, r, dc(e, r - 1)[1].map(($) => -$), c).map(($) => $ * u)), co(e, r + 1) && (d = uo(t, r + 1, d.map(($) => -$), dc(e, r + 1)[0]).map(($) => $ * u));
  let f, m, w;
  if (l) {
    const $ = Math.PI, te = us(0, ds(c, s) / $ / 3, $ - ds(d, a) / $ / 3, $, n);
    [f, m, w] = Bi(i, s.map((C) => te * C / $));
  } else {
    const $ = ra(Bi(i, c.map((X) => X / 3)), Bi(o, d.map((X) => -X / 3)), n), te = ra(Bi(i, c.map((X) => n * X / 3)), $, n), C = ra($, Bi(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, m, w] = ra(te, C, n);
  }
  const g = Math.hypot(f, w), h = e[r].value.yaw_deg, _ = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= z1 ? h + (_ - h) * n : Xc(Math.atan2(f, w) * 180 / Math.PI, h, _, n), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function B1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = nm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function Y1(e, t, r, n) {
  return nm(e, t, e.map((i) => i.value), r, n);
}
const q1 = { position: H1, rotation: W1, direction: U1, size: B1 };
function Kt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return ta(e[t].value);
  if (r <= n[0].frame + _i) return ta(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - _i) return ta(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + _i; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= _i || s.easing === "hold") return ta(s.value);
  const a = n.map((c) => c.frame), l = j1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (q1[t] ?? Y1)(n, a, o, l);
}
function Jc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function X1(e) {
  return Math.min(1, Math.max(0, e));
}
function im(e) {
  return Math.max(1e-6, e);
}
function om(e, t) {
  return t - (e.start - e.in);
}
function bo(e, t) {
  return t >= e.start - _i && (e.duration === null || t < e.start + e.duration - _i);
}
function Il(e, t) {
  return {
    position: Kt(e, "position", t),
    ...Kt(e, "rotation", t),
    hFOV_deg: Jc(Kt(e, "fov", t)),
    aspect: e.aspect
  };
}
function ks(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = om(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Il(n, r),
    scene: {
      active: i.visible && bo(i.clip, r),
      clip_frame: o,
      position: Kt(i, "position", o),
      ...Kt(i, "rotation", o),
      scale: im(Kt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Ii(s, r))
  };
}
function J1(e, t) {
  if (e.placement === "world")
    return {
      position: Kt(e, "position", t),
      ...Kt(e, "rotation", t),
      scale: im(Kt(e, "scale", t))
    };
  const r = Kt(e, "size", t);
  return {
    ...Kt(e, "direction", t),
    roll_deg: Kt(e, "roll", t),
    hFOV_deg: Jc(r.hFOV_deg),
    vFOV_deg: Jc(r.vFOV_deg)
  };
}
function Ii(e, t) {
  const r = om(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && bo(e.clip, t),
    clip_frame: r,
    ...J1(e, r),
    opacity: X1(Kt(e, "opacity", r))
  };
}
const Z1 = 2, sm = ["sky", "world"], Zc = ["perspective", "erp"], Q1 = ["input", "output", "temp"], am = [0.42, 0, 0.58, 1], lm = 1, od = 1e3, Qc = 1e7, sd = Qc, ad = Number.MAX_SAFE_INTEGER, ev = /^sticker_([0-9]{1,16})$/;
function Rt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function ld(e, t) {
  const r = qt(e, t);
  return r !== null && r > 0 ? r : t;
}
function wn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function vo(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Sa(e) {
  const t = vo(e);
  return t === null ? null : wn(t, -Qc, Qc);
}
function Ti(e) {
  const t = ld(e, null);
  return t === null ? null : wn(t, lm, od);
}
function cm(e) {
  const t = vo(e);
  return t !== null && t >= 1 ? Math.min(t, sd) : null;
}
function fs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function um(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => qt(r, null));
  return t.includes(null) ? null : t;
}
function dm(e) {
  return um(e) || [0, 0, 0];
}
function fm(e) {
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
  return ld(e, 1);
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
function pm(e) {
  return wn(qt(e, 1), 0, 1);
}
const El = [["position", dm], ["rotation", fm], ["fov", tv]], Ol = [["position", dm], ["rotation", fm], ["scale", nv]], Ms = [["direction", rv], ["roll", iv], ["size", ov], ["opacity", pm]], Ps = [...Ol, ["opacity", pm]];
function sv(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => qt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...am];
}
function av(e) {
  if (!Rt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = um(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function lv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Rt(i)) continue;
    const o = Sa(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: sv(i.easing) }, a = r ? av(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Fl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Rt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: lv(o.keyframes, i, n === "position") };
  }
  return r;
}
function Tl(e) {
  const t = Rt(e) ? e : {}, r = Sa(t.start), n = Sa(t.in), i = Sa(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function hm(e) {
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
  const r = sm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Tl(e.clip),
    visible: fs(e.visible, !0),
    locked: fs(e.locked, !1),
    crop: hm(e.crop),
    ...Fl(e, n ? Ps : Ms)
  };
  return n || (i.z_index = vo(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = dv(e.handoff_overrides, r)), i;
}
function dv(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? Ps : Ms).map(([n]) => n).filter((n) => r.includes(n));
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
  return { stickers: r, next: Math.min(o, ad) };
}
function pv(e) {
  const t = typeof e == "string" ? ev.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < ad ? r : 0;
}
function mm(e) {
  return e.reduce((t, r) => Math.max(t, pv(r.id)), 0) + 1;
}
function hv(e, t) {
  const r = vo(e), n = mm(t);
  return wn(r === null ? n : Math.max(r, n), 1, ad);
}
function mv(e) {
  if (!Rt(e)) return null;
  const t = Zc.includes(e.projection) ? e.projection : Zc[0];
  return { aspect: ld(e.aspect, 1), projection: t, visible: fs(e.visible, !0), ...Fl(e, El) };
}
function qa(e) {
  return typeof e == "string" && e ? e : null;
}
function gm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function gv(e) {
  if (!Rt(e) || qa(e.id) === null || !sm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Rt(e.clip) && (r.clip = Tl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Rt(e.crop) && (r.crop = hm(e.crop)), Object.assign(r, Fl(e, (t ? Ps : Ms).filter(([i]) => Rt(e[i]))));
  const n = t ? null : vo(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function yv(e) {
  const t = Rt(e) ? Ti(e.fps) : null;
  if (t === null || qa(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => qa(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(gv).filter((c) => c !== null), i = gm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Rt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Rt(o.clip) && (s.clip = Tl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function bv(e) {
  const t = (Array.isArray(e) ? e : []).map(yv).filter((r) => r !== null);
  return gm(t, (r) => r.layer);
}
function Xa(e) {
  const t = Rt(e.timeline) ? e.timeline : {}, r = Rt(e.scene) ? e.scene : {}, { stickers: n, next: i } = fv(e.stickers, e.next_sticker_id);
  return {
    version: Z1,
    id: qa(e.id),
    timeline: {
      fps: Ti(t.fps) ?? 24,
      length: cm(t.length)
    },
    camera: mv(e.camera),
    scene: { clip: Tl(r.clip), visible: fs(r.visible, !0), ...Fl(r, Ol) },
    stickers: n,
    next_sticker_id: i,
    painting: yo(e.painting),
    painting_layer: Rt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: fs(e.painting_visible, !0),
    upstream: bv(e.upstream)
  };
}
function vv(e, t) {
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
function Sv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Rt(t)) return null;
  const r = wn(qt(t.hFOV_deg, 90), 1, 179), n = wn(qt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function _v(e) {
  const t = Rt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Rt) : [];
  return r.sort((n, i) => qt(n.z_index, 0) - qt(i.z_index, 0)), Xa({
    camera: Sv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: vv(n, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return Xa({});
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
  return r === 1 ? _v(t) : Xa(t);
}
const fc = {
  state: { painting_visible: !0 },
  camera: { projection: Zc[0], visible: !0 },
  scene: { visible: !0 }
};
function pc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function eu(e) {
  const t = pc(e, fc.state);
  return t.id === null && delete t.id, t.next_sticker_id === mm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && pc(e.camera, fc.camera),
    scene: pc(e.scene, fc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function hc(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function Vf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function cd(e, t) {
  const r = Ti(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => vo(a * n), { length: o } = e.timeline, s = Vf(e.scene.clip, i);
  return Xa({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...hc(e.camera, El, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...hc(e.scene, Ol, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Vf(a.clip, i), u = a.placement === "world" ? Ps : Ms;
      return { ...a, clip: l, ...hc(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream
  });
}
function mc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function ym(e) {
  return Array.isArray(e) ? [...e] : e;
}
function bm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= _i);
}
function vm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? ym(e.keyframes[n - 1].easing) : [...am];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function hn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = mc(i.value, n);
    return;
  }
  const o = bm(i, r);
  o ? o.value = mc(o.value, n) : vm(i, r, mc(Kt(e, t, r), n));
}
function So(e) {
  return e.placement === "world" ? Ps.map(([t]) => t) : e.placement === "sky" ? Ms.map(([t]) => t) : (e.clip ? Ol : El).map(([t]) => t);
}
function wv(e, t) {
  for (const r of So(e))
    bm(e[r], t) || vm(e[r], t, Kt(e, r, t));
}
function xv(e) {
  const t = So(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function gc(e, t) {
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
function tu(e) {
  return So(e).map((t) => e[t]);
}
function Ja(e) {
  return tu(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Ov(e.clip);
}
function _m(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ja);
}
const Fv = 1e5;
function wm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of tu(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of tu(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : Fv;
}
function Tv(e) {
  return e > 0 ? Ti(Math.min(e, od)) : null;
}
function Dv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : cm(Math.max(1, Math.min(e, sd)));
}
const yc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Lv = 2e3;
function Rv(e, t, r = 56) {
  const n = yc.find((o) => o * t >= r) || yc[yc.length - 1], i = [];
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
let ia = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Za(e) {
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
    painting: yo(null),
    painting_layer: null,
    ui_settings: Za(n),
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
  return Array.isArray(e) ? e.map((t) => id(t)) : [];
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
    if (ia.text === i ? o = ia.parsed : (o = JSON.parse(i), ia = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: zv(o.assets),
      stickers: jv(o.stickers),
      shots: Hv(o.shots),
      painting: yo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Za(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = Za({ ...a.ui_settings, ...s })), a.output_preset = xm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Rn(r.coverage), delete a.editor_history, a;
  } catch {
    return ia = { text: i, parsed: null }, n;
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
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = Ti(t.fps);
  let l;
  try {
    l = Gr(e);
  } catch {
    l = Gr(null);
  }
  return a && a !== l.timeline.fps && (l = cd(l, a)), {
    ...l,
    coverage: Rn(i),
    bg_color: n,
    output_preset: xm(r),
    ui_settings: Za(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function Bv(e, t) {
  const r = cd(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of So(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Pm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function ud(e, t, r = null) {
  const n = Ii(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Pm(e, n, r), rot_deg: n.roll_deg };
}
const Yv = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function $f(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function qv(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Yv[r]].keyframes.length));
}
function Nm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = $f(r, ["yaw_deg", "pitch_deg"]), o = $f(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && hn(e, "direction", n, i), r.rot_deg !== void 0 && hn(e, "roll", n, r.rot_deg), Object.keys(o).length && hn(e, "size", n, o);
}
const Dl = ["position_x", "position_y", "position_z"], dd = "camera";
function Am(e, t) {
  const r = Il(e, t);
  return id({
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
    ...Object.fromEntries(Dl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Kt(e, "fov", t)
  };
}
function eS(e, t, r, n) {
  const i = Dl.indexOf(r);
  if (i >= 0) {
    const o = Kt(e, "position", t);
    o[i] = n, hn(e, "position", t, o);
  } else r === "hFOV_deg" ? hn(e, "fov", t, n) : hn(e, "rotation", t, { [r]: n });
}
function tS(e, t, r) {
  hn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function nS(e, t) {
  const r = Ii(e, t);
  return {
    ...Object.fromEntries(Dl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function rS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Dl.indexOf(r);
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
function _a(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Qa(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ll(e) {
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
function nu(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Cm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Im(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function zf(e, t) {
  return e != null && e.__panoSceneStateV2 ? eu(Gr(t)) : JSON.stringify(t);
}
const lS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function cS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => lS[e & 63]).join("");
}
function Em(e, t, r, n) {
  const i = zf(e, t);
  return uS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = cS(), zf(e, t));
}
function uS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Gr(r);
    if (eu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && eu(cd(i, o)) === t;
  } catch {
    return !1;
  }
}
const bc = 0.15, dS = 0.01, fS = 1e-3, pS = 0.05, hS = 4, jf = 250, mS = 16, sr = 1, gS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Sr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Rl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Di(e, t, r = 0) {
  const n = kn(e, t, r), i = Sr(n, 2);
  return { right: Sr(n, 0), up: Sr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function yS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function ru(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function bS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : ru(e, "3dof", r);
}
function vS(e) {
  return Di(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function SS(e) {
  return Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function li(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Qo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function pd(e, t) {
  return Qo(li(t, e.position), Di(e.yaw_deg, e.pitch_deg).forward);
}
function hd(e) {
  return Math.max(e, 1e-6) * pS;
}
function iu(e, t, r = null, n = sr) {
  if (t) return t;
  const i = hd(n);
  if (r && pd(e, r) > 0) {
    const o = li(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Om(e, t = sr) {
  return Math.max(e.distance, hd(t));
}
function Fm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > hS ? !1 : t.time - e.time < jf || e.cost > mS && t.time - e.wheelTime < jf;
}
function md(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function Tm(e, t, r, n, i = SS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = _S(t, r, o), l = Ht(e.yaw_deg + s / n * 360), c = Ie(e.pitch_deg - a / n * 360, -89.9, 89.9), d = kn(e.yaw_deg, e.pitch_deg, o), u = kn(l, c, o), f = li(e.position, i), m = [0, 1, 2].map((g) => Qo(Sr(d, g), f)), w = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, Rl(u, m)) };
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
  const i = li(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * dS, l = r > 0 ? Math.min(Math.max(o * bc, a), o - s * fS) : -Math.max(o * bc / (1 - bc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(pd(c, t), hd(n)) };
}
function wS(e, t, r, n) {
  const { tanX: i, tanY: o } = md(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Di(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function gd(e, t, r, n = null) {
  return Rm({
    quaternion: ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
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
function ps(e, t, r, n) {
  const { right: i, up: o, forward: s } = Vm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Vm(e) {
  const t = cs(e.quaternion), r = Sr(t, 2);
  return { right: Sr(t, 0), up: Sr(t, 1), forward: r.map((n) => -n) };
}
function el(e, t, r) {
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
    transform: ou(t),
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
function ou(e) {
  return {
    position: [...e.position],
    quaternion: ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function su(e, t) {
  return Kn(e.position, Rl(kn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function wa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function au({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function lu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function MS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...au(t).map((o) => su(e.scene, o)));
  for (const o of r) i.push(...bd(o));
  for (const { box: o, value: s } of n) i.push(...au(o).map((a) => su(s, a)));
  return i;
}
function PS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: kn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function bd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, Rl(e.rotation, [n, i, 0])));
}
function NS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? lu(bd(i)) : o != null && o.box ? lu(au(wa(o.kind, o.box)).map((s) => su(n, s))) : { center: [...n.position], radius: n.scale };
}
const AS = 2, CS = 0.5, IS = 30;
function jm(e, t) {
  const r = li(t, e), n = Math.atan2(r[0], -r[2]) * tn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * tn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function ES(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * CS : AS, o = t ? [...t] : Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...li(o, e.position)), a = s > 0 ? jm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(IS * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function Hf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function OS(e) {
  return [0, 1, 2].map((t) => Sr(e, t));
}
function Gf(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, li(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * RS(r.scale, n.scale) / r.scale };
  const i = Hf(cs(n.quaternion), OS(cs(r.quaternion))), o = Hf(i, kn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = em(o);
  return Math.abs(a) <= FS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: TS(o, t.yaw_deg) } };
}
const FS = 89.9;
function TS(e, t) {
  const r = Sr(e, 0), n = Sr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * tn + 0;
}
const DS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function LS(e, t, r, n, i) {
  if (!ps(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Vm(e), l = li(t, e.position), c = Qo(l, o), d = Qo(l, s), u = Qo(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect, w = Math.hypot(c, d, u) * DS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > w)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (te) => {
    const C = w * Math.sqrt(te * te + u * u - w * w);
    return [(te * u - C) / (u * u - w * w), (te * u + C) / (u * u - w * w)];
  }, [h, _] = g(c), [ee, $] = g(d);
  return {
    minX: n * 0.5 * (1 + h / m),
    maxX: n * 0.5 * (1 + _ / m),
    minY: i * 0.5 * (1 - $ / f),
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
  const r = kn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, Rl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function $S(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = ps(e, s, n, i), c = ps(e, a, n, i);
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
    quaternion: ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * tn,
    aspect: n
  };
}
function es(e) {
  const t = si(e);
  return {
    quaternion: ai(kn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Wm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = rd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
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
  const [[n, i, o], [s, a, l], [c, d, u]] = cs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(w, g = 1e-4) {
      const h = $1(w), _ = n * h.x + s * h.y + c * h.z, ee = i * h.x + a * h.y + d * h.z, $ = -(o * h.x + l * h.y + u * h.z), te = Math.max($, g);
      return {
        x: t * 0.5 * (1 + _ / te / m),
        y: r * 0.5 * (1 - ee / te / f),
        z: $
      };
    },
    // The unit direction seen at the point (x, y).
    ray(w, g) {
      const h = (w / t * 2 - 1) * m, _ = (1 - g / r * 2) * f;
      return ed(va({
        x: n * h + i * _ - o,
        y: s * h + a * _ - l,
        z: c * h + d * _ - u
      }));
    }
  };
}
function Bm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = ks(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), m = Math.tan(Pm(a, c, qm(u.media)) * 0.5 * wt), { crop: w } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Gm : c.opacity,
      zIndex: n(a),
      quaternion: ai(kn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * w.x0 - 1) * f,
        x1: (2 * w.x1 - 1) * f,
        y0: (1 - 2 * w.y1) * m,
        y1: (1 - 2 * w.y0) * m
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
function Xm(e, t, r, { media: n, evaluated: i = ks(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: m } = qm(u.media), w = PS(c, a.crop, f, m);
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
    l = Kh(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(g, h, _, ee, $) {
      return l && !f.lost ? l.pick(g, h, _, ee, $) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, h, _, ee, $) {
      return l && !f.lost ? l.pickSurface(g, h, _, ee, $) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, h, _, ee, $) {
      return l && !f.lost ? l.pickSticker(g, h, _, ee, $) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, h, _, ee, $, te) {
      return l && !f.lost ? l.gizmoPointer(g, h, _, ee, $, te) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", w), l == null || l.dispose(), l = null;
    }
  };
  function m(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function w() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", w), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const Jm = "3D view unavailable. Check the browser console.";
function tl(e, t, r) {
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
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => Kh(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), ar = ["erp_image", "bg_erp", "bg_media"], vd = ["sticker_image", "sticker"], Qm = ["scene"], WS = {
  background: ar,
  "external-sticker": vd,
  scene: Qm
};
function eg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Vl(e) {
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
function Kf(e, t) {
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
const rg = [...ar, ...vd, ...Qm], BS = 256, Yi = /* @__PURE__ */ new Map(), vc = /* @__PURE__ */ new WeakMap();
let ig = () => null;
function og(e) {
  return vc.has(e) || vc.set(e, JSON.stringify(e)), vc.get(e);
}
function YS(e) {
  ig = e;
}
function nl(e, t) {
  const r = og(e);
  Yi.delete(r), Yi.set(r, t), Yi.size > BS && Yi.delete(Yi.keys().next().value);
}
function Qt(e, t) {
  var o;
  const r = e ? ig(e) : null;
  if (!r) return !0;
  const n = Vl(e);
  let i = Yi.get(og(r));
  if (i)
    nl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => rg.includes(s == null ? void 0 : s.name)))) return !0;
    nl(r, n), i = n;
  }
  return WS[t].every((s) => i[s] === n[s]);
}
const rl = /* @__PURE__ */ new WeakSet();
async function cu(e, t) {
  if (rl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && rl.add(e), r.ok && n !== void 0 ? n : null;
}
function sg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = ng(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => rg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: US(r, t) };
}
const xa = /* @__PURE__ */ new Map();
function qS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && xa.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await cu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = sg(i, o);
        s && nl(s.output, s.inputs);
      }
    });
}
const XS = 5;
function JS(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${XS}`, n = cu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, cu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: m } of await n) {
        if (!a()) return null;
        const w = await o(m);
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
let Hi = null;
async function QS(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || rl.has(r) || (a = xa.get(i)) != null && a.has(n) || ZS(t)) return null;
  (Hi == null ? void 0 : Hi.workflowId) !== i && (Hi = { workflowId: i, history: JS(r, i) }, queueMicrotask(() => {
    Hi = null;
  }));
  const s = await Hi.history.lastNodeOutput(e, o);
  return o() ? s ? (nl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (rl.has(r) || xa.set(i, (xa.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Wf(e, t, r, n = ar) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Uf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ka(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Uf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Uf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Sc = /* @__PURE__ */ new WeakMap();
function e_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function uu(e) {
  return e_(e) ? (Sc.has(e) || Sc.set(e, Math.random().toString(36).slice(2, 10)), Sc.get(e)) : "run";
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
  const n = xs(e, "looping-preview");
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
  const w = () => {
    m = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", w), n.src = t, n.load();
  const g = () => {
    o || m || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var ee, $;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", w), n.pause(), (ee = n.removeAttribute) == null || ee.call(n, "src"), ($ = n.load) == null || $.call(n));
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
const hs = /* @__PURE__ */ new WeakMap(), lg = {
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
function Ns(e, t) {
  if (!e || typeof e != "object") return null;
  let r = hs.get(e);
  return r || (r = {}, hs.set(e, r)), r[t] ?? (r[t] = lg[t]());
}
function $l(e, t) {
  var r;
  return e && typeof e == "object" && ((r = hs.get(e)) == null ? void 0 : r[t]) || null;
}
const il = (e) => Ns(e, "editorSession"), St = (e) => Ns(e, "nodeSurface"), Lr = (e) => Ns(e, "previewNode"), Mn = (e) => Ns(e, "mediaCache"), Hn = (e) => Ns(e, "stateSync"), r_ = (e) => $l(e, "editorSession"), cg = (e) => $l(e, "nodeSurface"), ug = (e) => $l(e, "previewNode");
function _c(e) {
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
      _c(o == null ? void 0 : o.img), _c(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), _c((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function o_(e, t) {
  const r = $l(e, t);
  if (r)
    try {
      i_[t](r);
    } finally {
      delete hs.get(e)[t];
    }
}
function s_(e) {
  for (const t of Object.keys(lg))
    try {
      o_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && hs.delete(e);
}
function mi(e, t) {
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
function Bf(e, t, r = null) {
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
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const X = String(C[0] || "").trim();
      if (X)
        return mi(t, {
          filename: X,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const z of C) {
        const G = i(z);
        if (G) return G;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : mi(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const X = String(C.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(C.value || "");
    if (X !== "comfy_image") return "";
    const z = String(C.filename || "").trim();
    return z ? mi(t, {
      filename: z,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, s = (C) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || C == null) return null;
    const z = String(C);
    return X instanceof Map ? X.get(C) || X.get(z) || X.get(Number(z)) || null : X[C] || X[z] || null;
  }, a = (C, X) => {
    var G;
    const z = s(C == null ? void 0 : C.id);
    return Array.isArray((G = z == null ? void 0 : z.ui) == null ? void 0 : G[X]) ? z.ui[X] : Array.isArray(z == null ? void 0 : z[X]) ? z[X] : [];
  }, l = (C, X) => {
    const z = s(C == null ? void 0 : C.id);
    return z != null && z.ui && Object.prototype.hasOwnProperty.call(z.ui, X) ? z.ui[X] : z && Object.prototype.hasOwnProperty.call(z, X) ? z[X] : null;
  }, c = (C, X) => {
    const z = l(C, "pano_sticker_input_state_hash"), G = Array.isArray(z) ? z[0] : z;
    return String(G ?? "").trim() || u_(X);
  }, d = (C) => {
    const X = [], z = /* @__PURE__ */ new Set();
    for (const G of C || []) {
      const ne = i(G);
      !ne || z.has(ne) || (z.add(ne), X.push(ne));
    }
    return X;
  }, u = (C, X) => {
    var ne;
    const z = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && z.push(C.images), Array.isArray((ne = C == null ? void 0 : C.ui) == null ? void 0 : ne.images) && C.ui.images.length && z.push(C.ui.images);
    const G = [];
    for (const he of z)
      X >= 0 && X < he.length && G.push(he[X]), G.push(...he);
    return G;
  }, f = (C, X) => {
    var H;
    const z = String(X || "").trim();
    if (!z) return { src: "", sourceType: "", inputName: "" };
    const ne = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((T) => String((T == null ? void 0 : T.name) || "") === z);
    if (ne < 0) return { src: "", sourceType: "", inputName: z };
    const he = C.graph ? C.getInputLink(ne) : null;
    if ((he == null ? void 0 : he.origin_id) == null) return { src: "", sourceType: "", inputName: z };
    const q = he.origin_id, fe = Bf(C, ne, q);
    if (!fe) return { src: "", sourceType: "", inputName: z };
    const ce = Number(he.origin_slot ?? 0);
    let oe = [];
    try {
      oe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(fe) || [] : [];
    } catch {
      oe = [];
    }
    if (Array.isArray(oe) && oe.length) {
      const T = [];
      ce >= 0 && ce < oe.length && T.push(oe[ce]), T.push(...oe);
      const B = d(T.filter((pe) => !ka(pe)));
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: z };
    }
    const U = s((fe == null ? void 0 : fe.id) ?? q), E = d(u(U, ce).filter((T) => !ka(T))).map((T) => `${T}&pano_src=${uu(U)}`);
    if (E.length)
      return { src: E[0], srcCandidates: E, sourceType: "nodeOutputs", inputName: z };
    const j = Array.isArray(fe == null ? void 0 : fe.imgs) ? fe.imgs : [];
    if (j.length) {
      const T = [];
      ce >= 0 && ce < j.length && T.push(j[ce]), T.push(...j);
      const B = d(T);
      if (B.length)
        return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: z };
    }
    const A = (H = fe == null ? void 0 : fe.widgets) == null ? void 0 : H.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
    if (A) {
      let T = i(A.value);
      if (T && !T.includes("/") && !T.includes(":") && (fe.comfyClass === "LoadImage" || fe.type === "LoadImage") && (T = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`), T) return { src: T, sourceType: "widget", inputName: z };
    }
    return { src: "", sourceType: "", inputName: z };
  }, m = (C, X = []) => {
    var G;
    const z = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const ne of X) {
      const he = z.findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === ne), q = he >= 0 && C.graph ? C.getInputLink(he) : null;
      if ((q == null ? void 0 : q.origin_id) == null) continue;
      const fe = s(((G = Bf(C, he, q.origin_id)) == null ? void 0 : G.id) ?? q.origin_id), ce = (Array.isArray(fe == null ? void 0 : fe.images) ? fe.images : []).find(ka);
      return ce ? `${mi(t, ce)}&pano_src=${uu(fe)}` : "";
    }
    return "";
  }, w = (C, X = []) => {
    const z = Array.isArray(X) ? X : [X];
    for (const G of z) {
      const ne = f(C, G);
      if (String((ne == null ? void 0 : ne.src) || "").trim()) return ne;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (C) => {
    const X = String(C || "").trim();
    if (!X) return [];
    if (l_(X)) return [X];
    const { filename: z, subfolder: G } = c_(X);
    return z ? d([
      mi(t, { filename: z, subfolder: G, type: "temp" }),
      mi(t, { filename: z, subfolder: G, type: "output" }),
      mi(t, { filename: z, subfolder: G, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var X;
      try {
        (X = Mn(C)) == null || X.linkedImages.forEach((z, G, ne) => {
          var he;
          z != null && z.img && ((he = n == null ? void 0 : n.isImageLoadFailed) != null && he.call(n, z.img)) && ne.delete(G);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (C, X) => {
      var z;
      (z = C == null ? void 0 : C.delete) == null || z.call(C, `__ui__${String(X || "")}`);
    },
    linkedValue: (C, X) => {
      var q, fe, ce, oe;
      const z = String(X || ""), G = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === z) : -1, ne = G >= 0 && C.graph ? C.getInputLink(G) : null;
      if (ne) {
        const U = s(ne.origin_id), E = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (q = U == null ? void 0 : U.data) == null ? void 0 : q.output,
          (fe = U == null ? void 0 : U.data) == null ? void 0 : fe.result,
          (ce = U == null ? void 0 : U.ui) == null ? void 0 : ce.output,
          (oe = U == null ? void 0 : U.ui) == null ? void 0 : oe.result
        ];
        for (const j of E) {
          if (!Array.isArray(j)) continue;
          const A = j[Number(ne.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const he = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === z) : null;
      return String((he == null ? void 0 : he.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (C, X = [], z = null, G = "") => {
      var K;
      const ne = Array.isArray(X) ? X : [X], he = w(C, ne), fe = (Array.isArray(he == null ? void 0 : he.srcCandidates) && he.srcCandidates.length ? he.srcCandidates : [he == null ? void 0 : he.src]).map((k) => String(k || "").trim()).filter(Boolean);
      if (!fe.length) return null;
      const ce = d(fe.flatMap((k) => g(k)));
      if (!ce.length) return null;
      const oe = Mn(C).linkedImages, U = String(G || ne.join("|") || "image_exact"), E = fe.join(`
`), j = oe.get(U);
      if (j && j.srcRaw === E && j.img) return j.img;
      const A = r || globalThis.Image;
      if (typeof A != "function") return null;
      const H = new A();
      (K = n == null ? void 0 : n.markImageLoading) == null || K.call(n, H, E);
      const T = { srcRaw: E, resolvedSrc: "", img: H };
      oe.set(U, T);
      let B = -1;
      const pe = (k) => {
        var re, de, _e;
        k === "ready" ? (re = n == null ? void 0 : n.markImageReady) == null || re.call(n, H, E) : (de = n == null ? void 0 : n.markImageFailed) == null || de.call(n, H, E), z == null || z(H), (_e = C.setDirtyCanvas) == null || _e.call(C, !0, !0);
      }, ae = () => {
        if (B += 1, B >= ce.length) {
          pe("failed");
          return;
        }
        T.resolvedSrc = ce[B], H.src = T.resolvedSrc;
      };
      return H.onload = () => pe("ready"), H.onerror = () => {
        if (B + 1 < ce.length) {
          ae();
          return;
        }
        pe("failed");
      }, ae(), H;
    },
    output: s,
    resolvePreferredExactLinkedSource: w,
    source: i,
    uiImage: (C, X, z, G = null) => {
      var U, E, j;
      const ne = a(C, X)[0] || null, he = i(ne);
      if (!he) return null;
      const q = `__ui__${X}`, fe = (U = z == null ? void 0 : z.get) == null ? void 0 : U.call(z, q);
      if (fe && fe.__panoSrc === he) return fe;
      const ce = r || globalThis.Image;
      if (typeof ce != "function") return null;
      const oe = new ce();
      return oe.__panoSrc = he, (E = n == null ? void 0 : n.markImageLoading) == null || E.call(n, oe, he), oe.onload = () => {
        var A;
        (A = n == null ? void 0 : n.markImageReady) == null || A.call(n, oe, he), G == null || G(oe);
      }, oe.onerror = () => {
        var A;
        (A = n == null ? void 0 : n.markImageFailed) == null || A.call(n, oe, he), G == null || G(oe);
      }, oe.src = he, (j = z == null ? void 0 : z.set) == null || j.call(z, q, oe), oe;
    },
    uiList: a,
    uiValue: l
  };
}
const d_ = 1e-3;
function _d(e, t, r, n) {
  if (!bo(e, t)) return null;
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
const Yf = 4;
function xd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, m) => f !== r[m])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = f_(a, l);
      for (let f = d; f < Math.min(r.length, d + Yf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Yf) && f !== i && n.delete(f);
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
const Ma = "sticker_image_1", hg = "external_image", fo = 0;
function Pa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function wc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ri(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function du(e, t = fo) {
  return (e == null ? void 0 : e.version) !== 2 ? ri(e) : ri(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Ii(r, t).active,
    external: r.source.kind === "port",
    ...ud(r, t)
  }));
}
function kd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ri(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function mg(e) {
  return String((e == null ? void 0 : e.id) || "") === Ma || String((e == null ? void 0 : e.source_kind) || "") === hg;
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
  var te, C, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Ma);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const z = String(((te = e.active) == null ? void 0 : te.selected_sticker_id) || "") === Ma;
    return {
      state: {
        ...e,
        stickers: r.filter((G, ne) => ne !== n),
        active: z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, w = a ? m.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(w)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const z = Pa(g, u, f), G = Number(((C = s == null ? void 0 : s.initial_pose) == null ? void 0 : C.hFOV_deg) ?? g), ne = Pa(G, u, f), he = Number(((X = s == null ? void 0 : s.initial_pose) == null ? void 0 : X.vFOV_deg) ?? ne);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - z) <= 1e-6 && Math.abs(he - ne) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((q, fe) => fe === n ? {
          ...q,
          vFOV_deg: z,
          initial_pose: q.initial_pose && typeof q.initial_pose == "object" ? { ...q.initial_pose, vFOV_deg: ne } : q.initial_pose
        } : q)
      },
      changed: !0
    };
  }
  const h = r.reduce((z, G) => Math.max(z, Number((G == null ? void 0 : G.z_index) || 0)), -1), _ = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Pa(g, u, f) : Number(m.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, ee = {
    ...s || {},
    id: Ma,
    source_kind: hg,
    source_link_id: i,
    source_state_hash: o,
    ..._,
    initial_pose: { ..._ },
    visible: !0,
    z_index: h + 1
  }, $ = n >= 0 ? r.map((z, G) => G === n ? ee : z) : [...r, ee];
  return { state: { ...e, stickers: $ }, changed: !0 };
}
function qf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const p_ = ["IMAGE", "VIDEO"];
function Xf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => p_.includes(r)) ? "2d" : null;
}
function h_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Xf(n.type) ?? Xf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Sg(e, { pose: t = null } = {}) {
  return {
    connected: qf(e, "sticker"),
    awaitingPose: !t && (qf(e, "sticker_state") || h_(e, "sticker") !== "2d"),
    pose: t
  };
}
function Jf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Gr({ version: 2, stickers: [r] }).stickers[0];
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
        stickers: e.stickers.filter((m, w) => w !== i),
        active: f ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (o && (n == null ? void 0 : n.placement) === "world" && n.replace && o.placement === "sky") {
    const f = { ...Jf(o.id, n), clip: o.clip, visible: o.visible, locked: o.locked };
    return { state: { ...e, stickers: e.stickers.map((m, w) => w === i ? f : m) }, changed: !0 };
  }
  if (o || r) return { state: e, changed: !1 };
  const s = { ...e }, a = Ll(s);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...s, stickers: [...e.stickers, Jf(a, n)] }, changed: !0 };
  const l = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), c = fd(a, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: l,
    vFOV_deg: l
  }, ri(e).reduce((f, m) => Math.max(f, m.z_index), -1) + 1), d = (n == null ? void 0 : n.keyframes) ?? {};
  return c.direction.keyframes = d.direction ?? [], c.roll.keyframes = d.roll ?? [], c.size.keyframes = (d.size ?? []).map((f) => ({ ...f, value: { ...f.value, vFOV_deg: f.value.hFOV_deg } })), c.handoff_overrides = [], { state: { ...s, stickers: [...e.stickers, c] }, changed: !0 };
}
function Pd(e) {
  const t = ri(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: wc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: wc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: wc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function wg(e) {
  const t = kd(e), r = Md(e, t), n = ri(e).some((a) => a && a.visible !== !1), i = Pd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
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
function Zf(e, t) {
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
    const l = Pd(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Pa(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, m = Ll(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, fd(m, _a(i.asset), d, l + 1)],
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
    return !i || !ri(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
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
  if (t.type === "bring-front") return Zf(e, "front");
  if (t.type === "send-back") return Zf(e, "back");
  if (t.type === "delete-selected") {
    if (Md(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ri({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = g_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? ud(r, fo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = qv(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Nm(c, fo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
const fu = 2;
function vi(e, t) {
  return Math.floor(e * t + 0.5);
}
function v_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function xg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const m = () => c && !d, w = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const H of f) H();
    f = [];
  }
  function h(H, T = {}) {
    return g(), u = { name: H, ...T }, a(), u;
  }
  function _(H, T, B) {
    const pe = () => {
      u === H && B();
    };
    e.addEventListener(T, pe), f.push(() => e.removeEventListener(T, pe));
  }
  function ee(H, T) {
    let B = t.requestFrame(function pe(ae) {
      u === H && (T(ae), u === H && (B = t.requestFrame(pe)));
    });
    f.push(() => t.cancelFrame(B));
  }
  function $(H) {
    l = H, o(l);
  }
  function te() {
    return h(d ? "error" : "idle");
  }
  function C() {
    d = !0, te();
  }
  function X() {
    const { seekable: H } = e, T = H != null && H.length ? H.end(H.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(T) ? T : 1 / 0));
  }
  function z(H) {
    if (!m()) return H === "play" ? fe() : te();
    if (e.readyState < fu) {
      const T = h("loading", { then: H });
      return _(T, "loadeddata", () => z(T.then)), _(T, "error", C), T;
    }
    return H === "play" && l / r() >= Number(e.duration) ? fe() : G(H, !1);
  }
  function G(H, T) {
    const B = X();
    if (!e.ended && vi(Number(e.currentTime), r()) === vi(B, r())) return ne(H);
    const pe = h("seeking", { then: H, frame: l, retried: T });
    return _(pe, "seeked", () => {
      const ae = vi(Number(e.currentTime), r()) === vi(X(), r()), K = l === pe.frame;
      ae || K && pe.retried ? ne(pe.then) : G(pe.then, K);
    }), _(pe, "error", C), e.currentTime = B, pe;
  }
  function ne(H) {
    return H === "play" ? he() : (s(), te());
  }
  function he() {
    const H = h("playingVideo", { shown: !1 });
    if (_(H, "pause", () => e.ended ? q() : U()), _(H, "ended", q), _(H, "error", C), i() && vi(Number(e.duration), r()) >= n()) {
      const B = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = B;
      });
    }
    const T = (B, pe) => {
      pe && !H.shown && (H.shown = !0, a()), ce(vi(B, r()));
    };
    if (w()) {
      let B = e.requestVideoFrameCallback(function pe(ae, K) {
        u === H && (T(Number(K.mediaTime), !0), u === H && (B = e.requestVideoFrameCallback(pe)));
      });
      f.push(() => {
        var pe;
        return (pe = e.cancelVideoFrameCallback) == null ? void 0 : pe.call(e, B);
      });
    } else
      ee(H, () => T(Number(e.currentTime), e.readyState >= fu));
    return Promise.resolve(e.play()).catch(() => {
      u === H && U();
    }), H;
  }
  function q() {
    s(), fe();
  }
  function fe() {
    const H = h("playingClock", { startTs: t.now(), startFrame: l });
    return ee(H, (T) => ce(H.startFrame + Math.floor((T - H.startTs) / 1e3 * r()))), H;
  }
  function ce(H) {
    if (H < n()) {
      $(H);
      return;
    }
    if (!i()) {
      oe(n() - 1);
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), $(0), z("play");
  }
  function oe(H) {
    u.name === "playingVideo" ? (g(), e.pause(), $(Math.max(0, H)), s()) : $(Math.max(0, H)), z("still");
  }
  function U() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      g(), e.pause();
      const H = v_(Number(e.currentTime), r());
      $(Math.min(H, n() - 1)), s(), l === H ? te() : z("still");
    } else u.name === "playingClock" && oe(Math.min(l, n() - 1));
  }
  function E() {
    if (!A()) {
      if (l >= n() - 1 && $(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      z("play");
    }
  }
  function j(H) {
    const T = Math.max(0, Math.round(H));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", $(T), a();
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), $(T), z("still");
  }
  function A() {
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
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: E,
    stop: U,
    seek: j,
    toggle() {
      A() ? U() : E();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(H) {
      g(), c = !!H, d = !1, z("still");
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
    if (!n || i || e.readyState < fu) return;
    const { time: g, playing: h, fps: _ } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const ee = Number(e.duration), $ = Number.isFinite(ee) ? Math.min(g, ee) : g, te = Math.abs(Number(e.currentTime) - $) > 1.5 / _;
      if (e.ended && !te) return;
      te && d($), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
  function w(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: h = null, playing: _ = !1, fps: ee }) {
      g !== n && (w(g), r()), o = { time: h, playing: _, fps: ee }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : g;
    },
    dispose() {
      for (const [g, h] of Object.entries(m)) e.removeEventListener(g, h);
      w("");
    }
  };
}
function Na(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function S_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let w = null, g = null;
  const h = () => i().timeline.fps, _ = (q) => q.stickers.find((fe) => fe.source.kind === "port"), ee = () => {
    const q = i(), fe = _(q);
    return wm(q, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        w && fe ? fg(fe.clip, h(), w.meta) : 0
      ),
      camera: c
    });
  }, $ = xg({
    video: e,
    clock: n,
    fps: h,
    span: ee,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), te = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, C = () => {
    u && (m.add(u), l());
  }, X = Nd({ video: t, onCapture: a, onChange: l }), z = xd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", te), e.addEventListener("error", C);
  function G(q) {
    q !== u && (u = q, e.pause(), q ? e.src = q : e.removeAttribute("src"), e.load(), $.setSource(!!q));
  }
  function ne() {
    $.playing && $.stop();
  }
  function he(q) {
    const fe = _(q);
    g = w && fe ? _d(fe.clip, $.frame, q.timeline.fps, w.meta) : null, X.follow({
      src: (w == null ? void 0 : w.src) || "",
      time: g,
      playing: $.advancing,
      fps: q.timeline.fps
    });
  }
  return {
    get frame() {
      return $.frame;
    },
    get playing() {
      return $.playing;
    },
    get showsVideo() {
      return $.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ne,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return w;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(q, fe) {
      return w != null && w.frames ? z.picture(w.frames, g, w.meta, fe) : X.picture(q, fe);
    },
    toggle() {
      $.playing ? $.stop() : $.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: q, sources: fe, state: ce, sticker: oe = null }) {
      if (w = q ? oe : null, !q)
        return ne(), G(""), he(ce), !1;
      for (const H of m)
        fe.includes(H) || m.delete(H);
      const U = fe.find((H) => H && !m.has(H)) || "", E = U !== d;
      E && (d = U, f = 0), G(d);
      const j = _m(ce, { camera: c }) || !!d && $.state !== "error" || !!w;
      return j || ne(), (E || !j || !$.playing && $.frame >= ee()) && $.frame !== fo && $.seek(fo), he(ce), j;
    },
    dispose() {
      $.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", te), e.removeEventListener("error", C), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const ol = Math.PI / 180, yr = 180 / Math.PI, __ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), w_ = 260;
function Qf(e) {
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
function ms(e, t) {
  const r = Qf(e), n = Qf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: x_(r, n) };
}
function Ni(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Mg(e) {
  const t = Ni(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
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
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, _, ee) => {
    const $ = h + _, te = Math.max(0, ee - 1), C = $ > te && $ > 0 ? te / $ : 1;
    return [h * C, _ * C];
  }, [d, u] = c(l, s, n), [f, m] = c(o, a, i), w = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - m)
  }, g = td(w, t);
  return {
    x: w.x + (w.w - g.width) * 0.5,
    y: w.y + (w.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: w
  };
}
function k_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ad({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * ol * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Qh(l, qh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = M_(c, go(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = nd({ width: i.w, height: i.h }, s);
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
  const r = Pg(e), n = go(r.yaw, r.pitch, 0), i = ac(t, e), o = {
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
    roll: Cl(Math.atan2(
      ac(a, n.up),
      ac(a, n.right)
    ) * yr)
  };
}
function Ng(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ad({ width: r, height: n }, Fi(e)), o = Ci(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Qh(e, qh(
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
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ci(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = rd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, m = n / i, w = Math.tan(Bc * ol), g = m >= 1 ? w : w * m, h = m >= 1 ? w / m : w;
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
        vFOV_deg: 2 * Math.atan(h) * yr
      }
    }
  };
}
function Gi(e, t) {
  const r = Ni(e);
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
    const s = Ci(r, e);
    return nd(td(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ba(o, t) };
}
function ep(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = ms(t, r);
  if (!o) return e;
  const s = Fi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = ms(o.height, o.width));
  const a = N_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Ag(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ni(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Xh({
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
    const n = Ni(e);
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
    return Gi(e, (n) => ep(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Gi(e, (n) => {
      const o = String(Dr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? ms(o[1], o[2]) : ms(Fi(n), 1);
      return s ? ep(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Gi(e, (i) => {
      const o = Cl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Gi(e, (n) => {
    const i = Jh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Gi(e, (n) => {
    const i = Zh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Gi(e, (n) => {
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
  ), i = Number(e.accumulatedRad || 0) + Bh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Yh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Eg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * ol, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, m = d * c + u * l, w = Number(e.pitch_deg || 0) * ol, g = Math.max(0.25, Math.abs(Math.cos(w)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(f) / g * yr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(m) * yr, -90, 90)
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
}, tp = Object.fromEntries(
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
      return Object.prototype.hasOwnProperty.call(tp, n) ? tp[n] : null;
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
      default: fh(() => [
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
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return g.length ? g.map((_) => {
        const ee = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.value) || ""), $ = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.label) || ee);
        return {
          ...typeof _ == "object" && _ ? _ : {},
          value: ee,
          label: $,
          active: h ? ee === h : (_ == null ? void 0 : _.active) === !0
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
    ki(d, (g) => {
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
    kl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), _s(() => {
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
    function w() {
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
        icon: e.model.aspectIcon || tt(ze).aspect,
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
          onClick: (ee) => m(_)
        }, rt(_.label), 11, T_))), 128)),
        Me("div", D_, [
          Vr(Me("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (_) => o.value = _),
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
          h[4] || (h[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Vr(Me("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (_) => s.value = _),
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
        [Ai, e.model.aspectOpen === !0]
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
}, zl = {
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
      e.model.viewUnavailable ? (Te(), Gn(zl, { key: 1 })) : mt("", !0)
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
      var g, h;
      const { active: f, intent: m } = a();
      if (!f) return;
      const w = ((h = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : h[0]) || null;
      if (w) {
        n("file-selected", { intent: m, file: w });
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
      e.model.viewUnavailable ? (Te(), Gn(zl, { key: 3 })) : mt("", !0)
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
      e.model.viewUnavailable ? (Te(), Gn(zl, { key: 0 })) : mt("", !0)
    ]));
  }
}, aw = 2048, pu = 4096, Aa = (e) => Math.floor(e + 0.5), oa = (e) => Math.max(2, 2 * Aa(e / 2));
function Tg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function lw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? El.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Aa(e.timeline.length)) : t.length ? n = Math.max(1, Aa(Math.max(...t))) : r.length && (n = Math.max(1, Aa(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function cw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = aw : s = Math.floor(i * 360 / n);
  const a = Tg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => Il(a, m).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [oa(c), oa(d)];
  if (Math.max(...u) <= pu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = pu / Math.max(c, d);
  return { width: oa(c * f), height: oa(d * f), reducedFrom: u, defaulted: o };
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
  return e ? ai(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const xc = {
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
      return { shot: c, size: "auto", note: xc[a] };
    d = cw(e, lw(e), r, n, o);
  }
  const u = xc[a] ? [xc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${pu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function pw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, fw(r(), { ...t, bgWidth: n }));
  };
}
const np = 24;
function hw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ts(e, t) {
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
function hu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ts(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ts(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Lg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function mw(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ts(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ts(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ts(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Lg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
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
function Fo(e, t) {
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
  const t = go(
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
function gi(e, t, r) {
  return ed(Ga(
    Ga(e.centerDir, Ka(e.right, t)),
    Ka(e.up, r)
  ));
}
function Id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = gw(e), n = Fo(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    gi(r, -r.tanX, r.tanY),
    gi(r, r.tanX, r.tanY),
    gi(r, r.tanX, -r.tanY),
    gi(r, -r.tanX, -r.tanY)
  ].map((f) => Fo(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const w = [];
    for (let g = 0; g <= 28; g += 1) {
      const h = g / 28;
      let _, ee;
      m === 0 ? (_ = -r.tanX + 2 * r.tanX * h, ee = r.tanY) : m === 1 ? (_ = r.tanX, ee = r.tanY - 2 * r.tanY * h) : m === 2 ? (_ = r.tanX - 2 * r.tanX * h, ee = -r.tanY) : (_ = -r.tanX, ee = -r.tanY + 2 * r.tanY * h);
      const $ = Fo(gi(r, _, ee), t);
      $ && w.push({ x: $.x, y: $.y });
    }
    return w;
  }), s = Fo(gi(r, 0, r.tanY), t), a = Fo(
    gi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * np,
      y: s.y + d / u * np
    },
    visible: !0
  };
}
function rp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Id(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = hu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = hu(s.geometry, r);
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
let sa = null;
function Ed() {
  return sa || (sa = new Promise((e) => {
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
  }), sa);
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
    const u = ww(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const w = n(c, l), g = Number(w.naturalWidth || w.width || 0), h = Number(w.naturalHeight || w.height || 0);
    if (!w.complete || g < 1 || h < 1) return null;
    const _ = rn({ label: "raster-object" });
    _.width = Math.max(1, Math.round(s)), _.height = Math.max(1, Math.round(a));
    const ee = _.getContext("2d");
    return ee ? (d.wrapOffsets.forEach(($) => {
      ee.save(), ee.translate(d.centerX + $, d.centerY), ee.rotate(d.rotationRad), ee.scale(d.scale, d.scale), ee.drawImage(
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
  function s(u, f, m, w) {
    if (!u || typeof w != "function" || m.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const h = g.get(f);
    if ((h == null ? void 0 : h.entry) === m) {
      h.callback = w;
      return;
    }
    o(h);
    const _ = { owner: u, key: f, entry: m, callback: w };
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
  function c(u, f, m, w = null) {
    const g = String(f || ""), h = String(m || "");
    if (!g || !h) return null;
    let _ = r.get(g);
    if (_)
      r.delete(g), r.set(g, _);
    else {
      l(i - 1);
      const $ = e || globalThis.Image;
      if (typeof $ != "function") return null;
      const te = new $();
      _ = { key: g, image: te, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, _), te.onload = () => a(_, !0), te.onerror = () => a(_, !1), te.src = h;
    }
    return _.settled || _.image.complete && Number(_.image.naturalWidth || _.image.width || 0) > 0 || s(u, g, _, w), _.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const $o = /* @__PURE__ */ new WeakMap();
function Vg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = $o.get(e);
  n || (n = [], $o.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = $o.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && $o.delete(e);
  };
}
function ti(e, ...t) {
  const r = $o.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Ca = Object.freeze({
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
  options: Object.entries(Ca).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Aw(e) {
  return Object.hasOwn(Ca, e) ? Ca[e] : Ca.default;
}
function Cw(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Iw(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const sl = "state_json";
function Rr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Ew(e) {
  var s, a;
  const t = Rr(e, sl);
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
    var a, l, c, d, u, f, m, w, g;
    const o = n ? n(...i) : void 0, s = Hn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Lr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (m = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || m.call(f, !0, !0), (g = (w = t == null ? void 0 : t.canvas) == null ? void 0 : w.setDirty) == null || g.call(w, !0, !0), o;
  }, Hn(e).coverageSyncInstalled = !0;
}
function Ow(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function ip(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Fw(e) {
  var d, u, f, m, w, g;
  if (!e) return;
  const t = Rr(e, "coverage"), r = Rr(e, "bg_color"), n = Rr(e, sl), i = Rr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Ow(o) && (ip(s) || s === ""))) return;
  let c = "360";
  if (ip(s))
    try {
      c = String(Rn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (m = n.callback) == null || m.call(n, s), i && (i.value = a, (w = i.callback) == null || w.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ia(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function mu(e, t, r) {
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
function zo(e, t, r) {
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
  await ((o = (i = il(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
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
function kc(e, {
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
    Lw(u), Od(u, t), Ia(u, sl);
    const w = Rr(u, sl);
    if (Dw(u, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const h = w.callback;
      w.callback = (_) => {
        var $;
        const ee = h ? h(_) : void 0;
        return ($ = u.setDirtyCanvas) == null || $.call(u, !0, !1), ee;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = Rr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (g = h.callback) == null || g.call(h, "#00ff00")), mu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), m.stickers && Ia(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), m.attached = !0, m.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, mu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), m.cutout && Ia(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), m.attached = !0, m.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Ew(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && Fw(this);
      const w = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && w && ti(this, "attach"), m;
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
    mu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ia(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
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
      (d === "PanoramaStickers" || d === "Panorama Stickers") && kc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && kc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && kc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Wa(d) && Vw(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Od(l, e), Wa(c) && $w(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
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
async function jo(e, t = {}) {
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
async function Si(e, { fetchApi: t } = {}) {
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
const op = /* @__PURE__ */ new WeakSet(), sp = /* @__PURE__ */ new WeakSet();
let ap = 0;
function gu(e) {
  if (!e || typeof e != "object" || sp.has(e)) return e;
  const t = String(e.type || "preview");
  return ap += 1, e.type = `${t}:pano-${ap}`, sp.add(e), e;
}
function al(e) {
  if (!e || typeof e != "object" || op.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, op.add(e), e;
}
function Hg(e, t) {
  var n, i;
  if (!t || ((i = (n = al(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
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
const { app: jt } = fa;
YS((e) => ii(e.id));
qS(pn);
const Td = Pw(), { linkedVideoFile: Gg } = dg({ app: jt, api: pn });
function yu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (fa == null ? void 0 : fa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Kw = "pano_suite.ui_settings.v1", Ww = 120, Uw = 2048;
function lp() {
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
function To(e) {
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
function bu(e) {
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
  const t = bu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function qw(e, t, r) {
  Kg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function vu(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Wg(e) {
  return Wa(Dd(e));
}
function cp(e = null) {
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
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = vu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Mc(e), Kx(e, { ...n, mode: i }), this.activeBackend = vu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || St(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Mc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Mc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Mc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Su.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = yu();
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
function up(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function ll(e, t) {
  const r = up(e), n = up(t);
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
const Su = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = pn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, m, w;
        if (!o) return;
        const s = ll(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...tx(o)].some((g) => ll(n, g)) || (s && (Rd(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !ag(Mn(o).executedOutputs, n, r.output) && (Xg(o), (u = (d = St(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (w = (m = o.graph) == null ? void 0 : m.setDirtyCanvas) == null || w.call(m, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0));
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
function cl(e) {
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
  const i = ["temp", "output", "input"].map((o) => cl({
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
    return r ? cl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ii(e) {
  const t = jt == null ? void 0 : jt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (ll(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (ll(s, i)) return t[s];
  }
  return null;
}
function $r(e, t, r = null) {
  const n = r || ii(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
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
      return cl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = _n(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : cl(e);
}
function gs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ea(e) {
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
function io(e) {
  var r;
  const t = Mn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function cx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Qt(e, "background"))
    return io(e), null;
  const i = ii(n), o = Sd(i, t, _n);
  if (!o)
    return io(e), null;
  const s = Mn(e), a = Ld(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  io(e);
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
    const f = r[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const w = m.origin_id, g = Bg(e, u, w);
    if (!g) continue;
    const h = Number(m.origin_slot ?? 0), _ = ii((g == null ? void 0 : g.id) ?? w), ee = Array.isArray(_ == null ? void 0 : _.images) ? _.images : [];
    if (ee.length) {
      const X = [];
      h >= 0 && h < ee.length && X.push(ee[h]), X.push(...ee);
      for (const z of X.filter((G) => !ka(G))) {
        const G = _n(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: `${G}&pano_src=${uu(_)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (jt == null ? void 0 : jt.getNodeImageUrls) == "function" ? jt.getNodeImageUrls(g) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const X = [];
      h >= 0 && h < $.length && X.push($[h]), X.push(...$);
      for (const z of X) {
        const G = _n(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: G, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const te = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (te.length) {
      const X = [];
      h >= 0 && h < te.length && X.push(te[h]), X.push(...te);
      for (const z of X) {
        const G = _n(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: G, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (C) {
      let X = _n(C.value);
      if (X && !X.includes("/") && !X.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (X = pn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Qt(e, "background") ? ii(e == null ? void 0 : e.id) : null, l = [];
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
  const m = () => {
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
      m();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((w == null ? void 0 : w.type) || "error");
  }, m(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function qg(e, t = [], r = null, n = {}) {
  const i = dx(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Xg(e) {
  e && (Td.disposeOwner(e), Mn(e).linkedImages.clear(), io(e));
}
function fx(e) {
  e && (Mn(e).linkedImages.clear(), io(e));
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
function Do(e, t, r = "") {
  var s;
  const n = Jg(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < Ww ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function dp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function px(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Pc(e, t) {
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
function ul(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = sx(r);
  if (!o && (n != null && n.external)) {
    if (!Qt(e, "external-sticker")) return null;
    const m = ii(e == null ? void 0 : e.id), w = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(w) ? w : [w])
      if (o = _n(g), o) break;
  }
  if (!o) return null;
  const s = $r(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Mn(e).ownOutputRev : 0, c = n != null && n.external ? Ld(o, l) : o, d = Mw(o, a, l);
  return Td.get(e, d, c, (m, w) => {
    var g, h;
    w && (n != null && n.external && Mn(e).outputFromRun && ti(e, "image-loaded"), (h = (g = St(e).dom) == null ? void 0 : g.requestDraw) == null || h.call(g));
  }) || null;
}
function gx(e, t) {
  var f, m, w, g;
  const r = St(e), n = _x(e, t), i = wx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
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
    return (g = (w = r.rasterCache) == null ? void 0 : w.retain) == null || g.call(w, []), a;
  r.rasterCache || (r.rasterCache = xw()), r.rasterReady || (r.rasterReady = () => {
    var h, _;
    return (_ = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : _.call(h);
  });
  const c = Sw(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
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
  var d, u, f, m, w, g, h, _, ee, $, te, C;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (m = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : m.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = Sx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Al(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((_ = s.paintRevision) == null ? void 0 : _.mask) !== c.mask || ((ee = s.paintRevision) == null ? void 0 : ee.groups) !== c.groups || (($ = s.paintRevision) == null ? void 0 : $.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((te = t == null ? void 0 : t.painting) == null ? void 0 : te.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function wx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function fp(e) {
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
function _u(e, t, r) {
  return Um(tl(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function dl(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? fo;
}
function Mx(e) {
  return [Qt(e, "background") ? Sd(ii(e.id), ["pano_input_videos"], _n) : "", Gg(e, ar)];
}
function Px(e) {
  var o;
  if (!Qt(e, "external-sticker")) return null;
  const t = ii(e.id), r = $r(e, "pano_sticker_input_video_meta");
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
  const r = Vl(e), n = !!r.bg_media;
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
  return gs(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
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
      revision: Ea(o.image),
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
      a = ul(e, s.id, Qa(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = wd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Ea(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = ul(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return gs(a) ? { media: a, revision: Ea(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : gx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: gs(r) ? { media: r, revision: Ea(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Ym(n, dl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Dx(e, t, r, n = null) {
  var G, ne, he, q, fe, ce, oe;
  const i = St(e), o = String(i.mode || "stickers");
  Jg(e, o);
  const s = vn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (he = (ne = (G = i.cutout) == null ? void 0 : G.session) == null ? void 0 : ne.refresh) == null || he.call(ne)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ce = (fe = (q = i.stickers) == null ? void 0 : q.session) == null ? void 0 : fe.refresh) == null || ce.call(fe));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Do(e, !1, "");
    const { width: U, height: E } = fp(n.frame), j = Ix, A = Math.min(l / U, (c - j) / E);
    d.drawImage(n.frame, (l - U * A) / 2, j + (c - j - E * A) / 2, U * A, E * A);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, m = (f == null ? void 0 : f.media) || (i.playback ? Nx(i.playback) : cx(e, ["pano_input_videos"], () => {
    var U, E;
    return (E = (U = i.dom) == null ? void 0 : U.requestDraw) == null ? void 0 : E.call(U);
  })) || qg(
    e,
    ar,
    () => {
      var U, E;
      return (E = (U = i.dom) == null ? void 0 : U.requestDraw) == null ? void 0 : E.call(U);
    },
    { preserveReadyWhilePending: !1 }
  ), w = gs(m);
  let g = null;
  const h = () => f ? { background: f, layers: [] } : Tx(e, s, m), _ = (U, E) => {
    g || (g = h());
    const j = r.render({ width: U.w, height: U.h, camera: E, ...g });
    return j && d.drawImage(j.canvas, j.x, j.y, j.width, j.height, U.x, U.y, U.w, U.h), !!j;
  };
  if (o === "cutout") {
    const U = hx(s), E = fp(m), j = U ? Ie(si(U).aspect, 0.1, 10) : w ? Ie(Number(E.width / E.height), 0.05, 20) : 1, A = Ad(u, j);
    i.cutoutFrame = A;
    let H = "none";
    const T = String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "");
    if (U)
      if (m && !w)
        H = "loading";
      else if (w) {
        const B = P_({ width: l, height: c }, A, U);
        [
          !B.fallback || _(B.fallback.rect, es(B.fallback.shot)),
          _(B.rect, es(B.shot)),
          !B.fallback || _(A, es(U))
        ].every(Boolean) || (H = "loading");
      } else
        H = "empty";
    else {
      const B = i.lastCutoutShot;
      B ? (i.view = Ng(B, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), w ? _(u, tl(i.view, l, c)) || (H = "loading") : m ? H = "loading" : H = "empty";
    }
    w || r.release(), r.failed && H === "loading" && (H = "none"), U && (i.lastCutoutShot = { ...U }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(A.x, A.y, A.w, A.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(A.x + 0.5, A.y + 0.5, Math.max(0, A.w - 1), Math.max(0, A.h - 1)), d.restore()), H === "loading" ? (Pc(e, !1), Do(e, !0, T)) : H === "empty" ? (Pc(e, !0), Do(e, !1, "")) : (Pc(e, !1), Do(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let ee = !1;
  (!m || w) && (g = h(), !g.background && !g.layers.length ? (r.release(), ee = !0) : ee = _(u, tl(i.view, l, c)));
  const $ = !ee && !r.failed;
  Do(e, $, $ ? String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "") : ""), $ && px(d, u, dp(t, u));
  const te = _u(e, l, c);
  !m && ee && Lx(d, te, dp(t, u));
  const C = String(((oe = s == null ? void 0 : s.active) == null ? void 0 : oe.selected_sticker_id) || ""), X = du(s, dl(e)), z = ee && e.__panoStudio !== !0 ? X.find((U) => String((U == null ? void 0 : U.id) || "") === C && (U == null ? void 0 : U.visible) !== !1) : null;
  ee && !f && X.filter((U) => U !== z && (U == null ? void 0 : U.visible) !== !1 && (U.external || U.source_kind === "external_image")).filter((U) => !gs(ul(e, U.id, null, { external: !0 }))).forEach((U) => xx(d, U, te)), z && kx(d, z, te);
}
function pp(e, t, r, n, i = 1) {
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
    pp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Dn(a, c));
    pp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
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
function wu(e) {
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
  return Rx(e, t) ? !1 : (wu(e), !0);
}
function hp() {
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
function mp(e, t = null, r = 0, n = 0, i = !0) {
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
function Ho(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Hx = /* @__PURE__ */ new WeakMap();
function Qg(e, t) {
  return ag(Hx, e, t) ? !1 : (lx(e, t), Xg(e), Ho(e), !0);
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
    signature: cp(e)
  }.signature || cp(e), vu(e), e == null || e.id, n.mode, e.addDOMWidget, bu(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, m = f ? 0 : 56, w = f ? 0 : w_, g = document.createElement("div");
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
    const se = al(gu(
      e.addDOMWidget(yu(), "preview", g, mp(e, null))
    ));
    Ho(e), n.dom = { widget: se, root: g, requestDraw: () => {
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
  ].join(";"), ee.textContent = "Connect ERP image", h.appendChild(_), h.appendChild(ee), g.appendChild(h);
  const $ = Uh(g), te = document.createElement("div");
  te && (te.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", te.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(te)), qw(e, 120, 120), Ho(e);
  let C = null;
  try {
    zx(e, m, () => {
      var se, Fe;
      return (Fe = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Fe.call(se);
    }), C = al(gu(e.addDOMWidget(
      yu(),
      "preview",
      g,
      mp(
        e,
        () => {
          var se, Fe;
          return (Fe = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Fe.call(se);
        },
        m,
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
  }, z = pw(), G = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(b)));
  }, ne = Zm(G), he = /* @__PURE__ */ mo(a ? {
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
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((se) => ({ value: se, label: se }))
  });
  let q = null;
  if (a && e.__panoSceneStateV2) {
    const [se, Fe] = [0, 1].map(() => {
      const Ge = xs(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ge), Ge;
    }), Ae = rn({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Re = rn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ye = S_({
      video: se,
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
      onFrame: G,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var We;
        if (!(se.videoWidth > 0 && se.videoHeight > 0)) return;
        const Ge = Math.min(1, Uw / se.videoWidth);
        Ae.width = Math.round(se.videoWidth * Ge), Ae.height = Math.round(se.videoHeight * Ge), (We = Ae.getContext("2d")) == null || We.drawImage(se, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, G();
      },
      onStickerCapture: () => {
        var Ge;
        Fe.videoWidth > 0 && Fe.videoHeight > 0 && (Re.width = Fe.videoWidth, Re.height = Fe.videoHeight, (Ge = Re.getContext("2d")) == null || Ge.drawImage(Fe, 0, 0), Re.__panoFrameIdx += 1, G());
      },
      onChange: () => {
        he.playing = Ye.playing, G();
      }
    });
    q = { playback: Ye, video: se, still: Ae, stickerVideo: Fe, stickerStill: Re, stickerSource: "" }, n.playback = q;
  }
  const fe = () => {
    var ht;
    const { playback: se, still: Fe, stickerStill: Ae } = q, Re = Na(h, !!((ht = e.flags) != null && ht.collapsed)), Ye = se.source, Ge = Re ? Px(e) : null, We = se.follow({
      shown: Re,
      sources: Re ? Mx(e) : [],
      state: vn(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== q.stickerSource && (q.stickerSource = (Ge == null ? void 0 : Ge.src) || "", as(Ae)), se.source !== Ye && (as(Fe), Fe.__panoFrameIdx = 0), he.playable = We, he.playing = se.playing;
  }, ce = () => {
    var Fe, Ae;
    const se = ((Fe = i.ownOutputVideo) == null ? void 0 : Fe.player) ?? null;
    se && !Na(h, !!((Ae = e.flags) != null && Ae.collapsed)) && se.pause(), a && (he.playable = !!se && !se.failed(), he.playing = !!(se != null && se.playing));
  }, oe = () => {
    var se;
    q == null || q.playback.pause(), (se = i.ownOutputVideo) == null || se.player.pause();
  };
  let U = null;
  const E = (a ? b_ : A_)({
    readState: () => vn(e),
    publishLiveState: (se) => {
      se ? (U = se, o.liveState = se) : (o.liveState === U && (o.liveState = null), U = null), o.liveStateVersion += 1, o.parsedState = null, G();
    },
    commitState: (se) => {
      var Re, Ye, Ge, We;
      const Fe = br(e, "state_json");
      if (!Fe) return;
      Im(e, se.active);
      const Ae = Em(e, se, String(Fe.value ?? ""));
      Ae !== null && (Fe.value = Ae, (Re = Fe.callback) == null || Re.call(Fe, Ae), o.parsedState = null, (Ye = e.setDirtyCanvas) == null || Ye.call(e, !0, !0), (We = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || We.call(Ge, !0, !0));
    },
    onChange: (se) => Object.assign(he, se)
  }), A = a ? Vg(e, (se = "sync", Fe = null) => {
    var sn;
    if (!a || !e.graph || !E || E.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Wt = Qt(e, "external-sticker");
      return E.apply({
        type: "sync-port",
        value: Sg(e, {
          pose: Wt ? $r(e, "pano_sticker_input_pose", Fe) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Wt) => String((Wt == null ? void 0 : Wt.name) || "") === "sticker_image") : -1, Re = Ae >= 0 ? ((sn = e.getInputLink(Ae)) == null ? void 0 : sn.id) ?? null : null;
    if (Re == null)
      return E.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Qt(e, "external-sticker")) return !1;
    const Ye = $r(e, "pano_sticker_input_pose", Fe), Ge = Array.isArray(Ye) ? Ye[0] : Ye, We = String($r(e, "pano_sticker_input_state_hash", Fe) ?? ""), ht = n.view || { yaw: 0, pitch: 0 }, bt = vn(e), Tt = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Wt) => String((Wt == null ? void 0 : Wt.id) || "") === "sticker_image_1"), Nt = ul(e, "sticker_image_1", null, { external: !0 }), Pn = Ge && typeof Ge == "object" ? Ge : Tt || { yaw_deg: ht.yaw, pitch_deg: ht.pitch, hFOV_deg: 30, rot_deg: 0 };
    return E.apply({
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
  const T = async (se) => {
    if (!a || !E || !rr(se)) return !1;
    oe();
    const Fe = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...n.view || { yaw: 0, pitch: 0 } };
    H += 1, he.importing = !0;
    const Ye = zo(e, `add:${Fe}`, async () => {
      const Ge = await jo(se), We = await Si(se, {
        fetchApi: (ht, bt) => pn.fetchApi(ht, bt)
      });
      return re(), E.apply({
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
      H = Math.max(0, H - 1), he.importing = H > 0, G();
    }
  };
  let B = null, pe = null, ae = null, K = !1;
  const k = () => {
    var se;
    return ae && (clearTimeout(ae), ae = null), K ? (K = !1, ((se = E == null ? void 0 : E.commitGesture) == null ? void 0 : se.call(E)) ?? !1) : !1;
  }, re = () => {
    var Re, Ye, Ge;
    const se = k(), Fe = (B == null ? void 0 : B.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    if (B = null, pe = null, Fe != null) {
      try {
        (Re = _.hasPointerCapture) != null && Re.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Ge = E == null ? void 0 : E.commitGesture) == null ? void 0 : Ge.call(E)) ?? !1;
    return se || Ae;
  }, de = () => {
    var Re, Ye, Ge;
    const se = k(), Fe = B == null ? void 0 : B.pointerId;
    if (B = null, Fe != null) {
      try {
        (Re = _.hasPointerCapture) != null && Re.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Ge = E == null ? void 0 : E.cancelGesture) == null ? void 0 : Ge.call(E)) ?? !1;
    return se || Ae;
  }, _e = () => re();
  E && o.flushers.add(_e);
  let we = null, N = !1;
  if (te && E)
    try {
      Ed(), we = Yu(l ? sw : a ? ew : U_, {
        model: he,
        onAction: (se) => {
          var Re, Ye, Ge;
          if ((se == null ? void 0 : se.type) === "toggle-playback") {
            re(), q ? q.playback.toggle() : (Re = i.ownOutputVideo) == null || Re.player.toggle(), G();
            return;
          }
          if (oe(), (se == null ? void 0 : se.type) === "open-editor") {
            re(), a || (he.aspectOpen = !1), (Ye = n.openEditor) == null || Ye.call(n);
            return;
          }
          if (a) {
            if ((se == null ? void 0 : se.type) === "add-image-file") {
              T(se.file);
              return;
            }
            E.apply(se) && G();
            return;
          }
          if ((se == null ? void 0 : se.type) === "toggle-aspect") {
            he.aspectOpen = !he.aspectOpen;
            return;
          }
          if ((se == null ? void 0 : se.type) === "close-aspect") {
            he.aspectOpen = !1;
            return;
          }
          let Fe = se;
          if ((se == null ? void 0 : se.type) === "add-frame") {
            const We = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Fe = {
              ...se,
              ...k_(We, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((se == null ? void 0 : se.type) === "delete-frame") {
            const We = Ni(vn(e));
            We && (n.view = Ng(We, {
              width: _.width,
              height: _.height
            }));
          }
          const Ae = ((Ge = n.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          he.aspectOpen = !1, E.apply({ ...Fe, safeRect: Ae }) && G();
        }
      }), we.mount(te), N = !0;
    } catch {
      we = null, N = !1;
    }
  const le = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    q && fe(), G();
  }) : null;
  le == null || le.observe(h);
  const b = (se) => {
    var Ae, Re, Ye;
    X.raf = 0, X.inTick = !0;
    let Fe = !1;
    try {
      if (Fe = y.stepInertia(se), X.needsDraw || Fe) {
        X.needsDraw = !1, q ? fe() : ce();
        const Ge = l ? Cx(e, q) : null, We = Ge ? uw(Ge) : null, ht = () => Zg(e, vn(e)), bt = Ge && Na(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? Ox(e, We) : null;
        if ((Re = e.flags) != null && Re.collapsed || Dx(e, _, ne, bt), he.viewUnavailable = ne.failed, l) {
          const Tt = z({ ...Ge, display: Fx(e, We) }, ht);
          Tt && (he.status = Tt);
        }
      }
    } finally {
      X.inTick = !1;
    }
    (Fe || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(b)), Bw() && (!n.debugLastTs || se - n.debugLastTs > 1200) && (n.debugLastTs = se, n.mode, bu(e), To(g), To(h), To(_), To(g.parentElement), To((Ye = g.parentElement) == null ? void 0 : Ye.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, y = Qu({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (se) => {
      n.view = se;
    },
    getViewportSize: () => {
      const se = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(se.width || _.clientWidth || 0)),
        h: Math.max(1, Number(se.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const se = lp();
      return {
        x: se.invert_view_x ? -1 : 1,
        y: se.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      G();
    }
  }), I = a ? h : g, v = (se) => {
    const Fe = _.getBoundingClientRect();
    return {
      x: (Number(se.clientX) - Fe.left) * (_.width / Math.max(1, Fe.width)),
      y: (Number(se.clientY) - Fe.top) * (_.height / Math.max(1, Fe.height))
    };
  }, V = (se) => {
    var Re, Ye;
    if (!a || l || !d) return;
    const Fe = vn(e), Ae = rp(
      du(Fe, dl(e)),
      String(((Re = Fe == null ? void 0 : Fe.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      v(se),
      _u(e, _.width, _.height)
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
  _.addEventListener("pointerdown", (se) => {
    var ht, bt, Tt, Nt, Pn, qe, sn, Wt, ci, Wr, ui;
    if (!Wn(se, I) || se.button !== 0) return;
    if (!a) {
      const on = Ni(vn(e)), yn = n.cutoutFrame;
      if (!on) {
        (ht = g.focus) == null || ht.call(g, { preventScroll: !0 }), (bt = _.setPointerCapture) == null || bt.call(_, se.pointerId), _.style.cursor = "grabbing", y.startDrag(se.clientX, se.clientY, se.pointerId);
        return;
      }
      if (on.locked === !0 || !yn || !E) return;
      const Ur = v(se);
      let kr;
      if (se.shiftKey) {
        const cr = Cg({
          frame: yn,
          point: Ur,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!cr) return;
        kr = { kind: "roll", pointerId: se.pointerId, rollGesture: cr };
      } else {
        const cr = ((Tt = vn(e)) == null ? void 0 : Tt.ui_settings) || lp();
        kr = {
          kind: "pan",
          pointerId: se.pointerId,
          startPoint: Ur,
          startShot: { ...on },
          focalPx: Ci(yn, on),
          invertX: cr.invert_view_x === !0,
          invertY: cr.invert_view_y === !0
        };
      }
      re(), (Nt = g.focus) == null || Nt.call(g, { preventScroll: !0 }), (Pn = _.setPointerCapture) == null || Pn.call(_, se.pointerId), _.style.cursor = "grabbing", E.beginGesture(), B = kr;
      return;
    }
    if (!d) return;
    const Fe = v(se), Ae = vn(e), Re = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ye = _u(e, _.width, _.height);
    (sn = g.focus) == null || sn.call(g, { preventScroll: !0 });
    const Ge = () => rp(du(Ae, dl(e)), Re, Fe, Ye);
    let We = l ? null : Ge();
    if (We && (q != null && q.playback.playing) && (oe(), We = Ge()), We && E) {
      if (y.stopMotion(), re(), String(((Wt = We.item) == null ? void 0 : Wt.id) || "") !== Re && E.apply({ type: "select-sticker", id: We.item.id }), ((ci = We.item) == null ? void 0 : ci.locked) === !0) {
        G();
        return;
      }
      const on = Fe, yn = We.geometry.center;
      pe = {
        active: !0,
        kind: We.hit.kind,
        pointerId: se.pointerId,
        startPoint: on,
        startCenter: { ...yn },
        startSticker: { ...We.item },
        startDistance: Math.max(1, Math.hypot(on.x - yn.x, on.y - yn.y)),
        startAngle: Math.atan2(on.y - yn.y, on.x - yn.x),
        projection: Ye
      }, E.beginGesture(), (Wr = _.setPointerCapture) == null || Wr.call(_, se.pointerId), _.style.cursor = We.hit.kind === "rotate" ? "grabbing" : We.hit.kind === "move" ? "move" : We.hit.cursor, G();
      return;
    }
    (ui = _.setPointerCapture) == null || ui.call(_, se.pointerId), _.style.cursor = "grabbing", y.startDrag(se.clientX, se.clientY, se.pointerId);
  }), _.addEventListener("pointermove", (se) => {
    if (!a) {
      if (!B) {
        if (!y.state.drag.active) return;
        Wn(se, I), y.moveDrag(se.clientX, se.clientY, "pano");
        return;
      }
      if (B.pointerId !== se.pointerId || !E) return;
      if (Wn(se, I), B.kind === "pan") {
        const Ae = v(se);
        E.updateGesture({
          type: "pan-camera",
          startShot: B.startShot,
          dx: Ae.x - B.startPoint.x,
          dy: Ae.y - B.startPoint.y,
          focalPx: B.focalPx,
          invertX: B.invertX,
          invertY: B.invertY
        });
        return;
      }
      const Fe = Ig(B.rollGesture, v(se), se);
      if (!Fe) return;
      B.rollGesture = Fe.gesture, E.updateGesture({ type: "set-roll", value: Fe.rollDeg });
      return;
    }
    if (!pe && !y.state.drag.active) {
      V(se);
      return;
    }
    if (pe) {
      if (pe.pointerId !== se.pointerId || !E) return;
      Wn(se, I);
      const Fe = v(se);
      let Ae = pe.startSticker;
      if (pe.kind === "move")
        Ae = yw(
          pe.startSticker,
          {
            x: pe.startCenter.x + Fe.x - pe.startPoint.x,
            y: pe.startCenter.y + Fe.y - pe.startPoint.y
          },
          pe.projection
        );
      else if (pe.kind === "scale") {
        const Re = Math.hypot(Fe.x - pe.startCenter.x, Fe.y - pe.startCenter.y);
        Ae = bw(pe.startSticker, pe.startDistance, Re);
      } else if (pe.kind === "rotate") {
        const Re = Math.atan2(Fe.y - pe.startCenter.y, Fe.x - pe.startCenter.x);
        Ae = vw(pe.startSticker, pe.startAngle, Re, se.shiftKey === !0);
      }
      E.updateGesture({ type: "set-transform", value: Ae }), G();
      return;
    }
    !d || !y.state.drag.active || (Wn(se, I), y.moveDrag(se.clientX, se.clientY, "pano"));
  });
  const L = () => {
    var Fe, Ae;
    if (!B && !pe) {
      if (!y.state.drag.active) return;
      y.endDrag(), _.style.cursor = "grab", G();
      return;
    }
    if (!E) return;
    const se = (B == null ? void 0 : B.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    B = null, pe = null;
    try {
      (Fe = _.hasPointerCapture) != null && Fe.call(_, se) && ((Ae = _.releasePointerCapture) == null || Ae.call(_, se));
    } catch {
    }
    E.cancelGesture(), _.style.cursor = "grab", G();
  }, J = (se, Fe = !1) => {
    var Ae, Re, Ye, Ge;
    if (!a) {
      if (!B) {
        if (!y.state.drag.active) return;
        Wn(se, I), (Ae = _.releasePointerCapture) == null || Ae.call(_, se.pointerId), _.style.cursor = "grab", y.endDrag(), G();
        return;
      }
      if (B.pointerId !== se.pointerId || !E) return;
      Wn(se, I), B = null, (Re = _.releasePointerCapture) == null || Re.call(_, se.pointerId), _.style.cursor = "grab", Fe ? E.cancelGesture() : E.commitGesture(), V(se), G();
      return;
    }
    if (pe) {
      if (pe.pointerId !== se.pointerId || !E) return;
      Wn(se, I), pe = null, (Ye = _.releasePointerCapture) == null || Ye.call(_, se.pointerId), _.style.cursor = "grab", Fe ? E.cancelGesture() : E.commitGesture(), G();
      return;
    }
    !d || !y.state.drag.active || (Wn(se, I), (Ge = _.releasePointerCapture) == null || Ge.call(_, se.pointerId), _.style.cursor = "grab", y.endDrag(), G());
  };
  _.addEventListener("pointerup", J), _.addEventListener("pointercancel", (se) => J(se, !0)), _.addEventListener("lostpointercapture", L), _.addEventListener("pointerleave", (se) => {
    !a && B || pe || y.state.drag.active && J(se);
  });
  const O = (se) => {
    const Fe = document.activeElement;
    if (Fe !== g && !g.contains(Fe)) return;
    if (se.key === "Escape" && (B || pe) && E) {
      L(), wu(se);
      return;
    }
    if (!a || l || se.key !== "Delete" && se.key !== "Backspace" || !E) return;
    const Ae = se.target, Re = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Ae != null && Ae.isContentEditable || he.canDelete === !0 && (oe(), re(), E.apply({ type: "delete-selected" }) && G(), wu(se));
  };
  window.addEventListener("keydown", O, !0);
  const F = Gw({
    requestFrame: (se) => requestAnimationFrame(se),
    cancelFrame: (se) => cancelAnimationFrame(se),
    restore: (se) => Vx(se)
  }), x = (se) => {
    var Ae, Re, Ye, Ge, We, ht;
    if (!Wn(se, I)) return;
    if (!a) {
      const bt = Ni(vn(e));
      if (bt && bt.locked !== !0 && E) {
        const Tt = Ha(se);
        Tt !== 0 && (K || (re(), E.beginGesture(), K = !0), E.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (ae && clearTimeout(ae), ae = setTimeout(k, 180), G()) : E.hasGestureChanges() || (E.cancelGesture(), K = !1));
      } else if (!bt) {
        const Tt = hp();
        y.applyWheelEvent(se) && G(), F.schedule(Tt);
      }
      (Ae = se.preventDefault) == null || Ae.call(se), (Re = se.stopPropagation) == null || Re.call(se), (Ye = se.stopImmediatePropagation) == null || Ye.call(se);
      return;
    }
    if (!d) return;
    const Fe = hp();
    y.applyWheelEvent(se) && G(), (Ge = se.preventDefault) == null || Ge.call(se), (We = se.stopPropagation) == null || We.call(se), (ht = se.stopImmediatePropagation) == null || ht.call(se), F.schedule(Fe);
  }, R = a ? [h, _] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((se) => {
    R.forEach((Fe) => Fe.addEventListener(se, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((se) => {
    _.addEventListener(se, (Fe) => Wn(Fe, I)), h.addEventListener(se, (Fe) => Wn(Fe, I));
  });
  const Z = br(e, "state_json");
  let me = null, ue = null;
  Z && !Z.__panoPreviewPatchedCb && (me = Z.callback, ue = (se) => {
    const Fe = me ? me(se) : void 0;
    return G(), Fe;
  }, Z.callback = ue, Z.__panoPreviewPatchedCb = ue);
  const ve = br(e, "bg_color");
  let Se = null, be = null;
  ve && !ve.__panoPreviewPatchedCb && (Se = ve.callback, be = (se) => {
    const Fe = Se ? Se(se) : void 0;
    return G(), Fe;
  }, ve.callback = be, ve.__panoPreviewPatchedCb = be);
  const Q = l ? br(e, "output_size") : null, ge = Q == null ? void 0 : Q.callback, Y = Q ? (se) => {
    const Fe = ge ? ge(se) : void 0;
    return G(), Fe;
  } : null;
  Q && (Q.callback = Y);
  const p = e.onRemoved, P = e.onResize, S = e.onExecuted, M = e.onDragOver, W = e.onDragDrop;
  let ye = null;
  const D = () => {
    a && (he.dropActive = !0, ye && clearTimeout(ye), ye = setTimeout(() => {
      ye = null, he.dropActive = !1;
    }, 140));
  }, ie = c ? function(se) {
    return (M ? M.apply(this, arguments) : !1) === !0 ? !0 : Fd(se == null ? void 0 : se.dataTransfer) ? (D(), !0) : !1;
  } : null, Ne = c ? function(se) {
    var Re;
    if ((W ? W.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Re = se == null ? void 0 : se.dataTransfer) == null ? void 0 : Re.files) || []).find((Ye) => rr(Ye));
    return Ae ? (ye && clearTimeout(ye), ye = null, he.dropActive = !1, T(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = ie, e.onDragDrop = Ne);
  const xe = c ? Hw(g, {
    onActive: (se) => {
      if (se) {
        D();
        return;
      }
      ye && clearTimeout(ye), ye = null, he.dropActive = !1;
    },
    onDrop: (se) => {
      T(se);
    }
  }) : () => {
  }, Pe = function(se) {
    i.outputFromRun = !0;
    const Fe = Qg(e, se);
    ti(e, Fe ? "executed" : "sync", se), G();
    const Ae = S ? S.apply(this, arguments) : void 0;
    return Ho(e), Ae;
  };
  e.onExecuted = Pe;
  const Ce = e.onConnectionsChange, Le = function(se, Fe) {
    const Ae = Wf(e, se, Fe, vd), Re = Wf(e, se, Fe, ar), Ye = arguments, Ge = Ce ? Ce.apply(this, Ye) : void 0, We = () => {
      X.destroyed || (Re && fx(e), Ae && ti(e, "connection-change"), Ho(e), G());
    };
    return We(), queueMicrotask(We), Ge;
  };
  e.onConnectionsChange = Le;
  const je = function() {
    const se = P ? P.apply(this, arguments) : void 0;
    return St(this).userResized = !0, G(), se;
  };
  e.onResize = je;
  const Ke = function() {
    return $e(), Su.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ke;
  const $e = () => {
    var se, Fe, Ae, Re, Ye, Ge, We;
    X.destroyed = !0, (se = le == null ? void 0 : le.disconnect) == null || se.call(le), a ? re() : de(), _.removeEventListener("lostpointercapture", L), xe(), $(), window.removeEventListener("keydown", O, !0), o.flushers.delete(_e), (Fe = E == null ? void 0 : E.destroy) == null || Fe.call(E), (Ae = we == null ? void 0 : we.unmount) == null || Ae.call(we), q && (q.playback.dispose(), q.video.remove(), q.stickerVideo.remove(), n.playback === q && (n.playback = null)), ne.dispose(), n.scene = null, (Ye = (Re = n.rasterCache) == null ? void 0 : Re.dispose) == null || Ye.call(Re), n.rasterCache = null, n.rasterReady = null, A(), F.dispose(), ye && clearTimeout(ye), ye = null, Td.disposeOwner(e), io(e), Rd(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((Ge = n.cutout) == null ? void 0 : Ge.session) === E && (n.cutout = null), ((We = n.stickers) == null ? void 0 : We.session) === E && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === je && (e.onResize = P), e.onExecuted === Pe && (e.onExecuted = S), e.onConnectionsChange === Le && (e.onConnectionsChange = Ce), ue && (Z == null ? void 0 : Z.callback) === ue && (Z.callback = me), ue && (Z == null ? void 0 : Z.__panoPreviewPatchedCb) === ue && delete Z.__panoPreviewPatchedCb, be && (ve == null ? void 0 : ve.callback) === be && (ve.callback = Se), be && (ve == null ? void 0 : ve.__panoPreviewPatchedCb) === be && delete ve.__panoPreviewPatchedCb, Y && Q.callback === Y && (Q.callback = ge), e.onDragOver === ie && (e.onDragOver = M), e.onDragDrop === Ne && (e.onDragDrop = W), e.onRemoved === Ke && (e.onRemoved = p);
  };
  n.restore = $e, n.cutout = E && N && !a ? { session: E, model: he } : null, n.stickers = E && N && a ? { session: E, model: he } : null, n.dom = {
    widget: C,
    root: g,
    canvas: _,
    requestDraw: G,
    state: X,
    emptyHintEl: ee,
    nodeSurface: n.cutout
  }, Su.register(e), e.graph && ti(e, "attach"), G();
}
function gp(e, t = {}) {
  Ug(e).attach({
    ...t,
    mode: "cutout"
  });
}
function yp(e, t = {}) {
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
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (m = Math.min(m, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function Bx({
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
    const w = l();
    return w === a || (a = w, i(w)), w;
  }, d = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", d), c(), { toggle: async () => {
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
    var w, g, h;
    if (!s) {
      if (s = !0, (w = t == null ? void 0 : t.removeEventListener) == null || w.call(t, "fullscreenchange", d), l())
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
      e.model.viewUnavailable ? (Te(), Gn(zl, { key: 0 })) : mt("", !0)
    ]));
  }
}, aa = 140, Xx = 180, bp = 40, Nc = 10;
function vp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Sp(e, t) {
  const r = vp(e), n = vp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function _p(e) {
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
function oo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return oo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return _p({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = oo(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : _p(e);
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
function xu(e) {
  var i;
  const t = (i = ir) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Sp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Sp(o, r)) return t[o];
  return null;
}
function Zx(e) {
  var n, i;
  const t = xu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = oo(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function Qx(e, t = "erp_image") {
  var m, w, g, h, _, ee, $;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((te) => String((te == null ? void 0 : te.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((te, C) => String((te == null ? void 0 : te.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (w = (m = ir) == null ? void 0 : m.graph) == null ? void 0 : w.getNodeById) == null ? void 0 : g.call(w, o), a = xu(o), l = xu(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (_ = a == null ? void 0 : a.ui) == null ? void 0 : _.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const te of c)
    if (Array.isArray(te))
      for (const C of te) {
        const X = oo(C);
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
      const C = oo(te);
      if (C) return C;
    }
  if (s) {
    const te = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const C of te) {
      const X = oo(C);
      if (X) return X;
    }
  }
  const u = ($ = s == null ? void 0 : s.widgets) == null ? void 0 : $.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? pn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Ac(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function wp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !e0(o) || r <= 1 || n <= 1) {
    Ac(t, r, n);
    return;
  }
  if (s.failed) {
    Ac(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: tl(i, r, n),
    background: { media: o, revision: Jx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Ac(t, r, n);
}
function xp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ek {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Zm(() => this.requestDraw()), this.controller = Qu({
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
        `min-height:${aa}px`,
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
          return aa;
        },
        getHeight() {
          return aa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = al(gu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(aa, Number(o.minHeight || 0)),
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
      return Ed(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ mo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Bx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = Yu(qx, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Uh(r), t.addEventListener("pointerdown", (o) => {
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
    return this.root ? Na(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = ir.canvas) != null && n.graph) || this.node.graph === ir.canvas.graph);
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
      return xp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = yx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !xp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Nc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - bp - Nc);
    return { x: Nc, y: bp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), wp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
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
      const a = xs(document, "preview-node.video");
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), wp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, m, w, g, h, _;
    if (((r = ug(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (w = (m = this.root) == null ? void 0 : m.remove) == null || w.call(m);
    } catch {
    }
    try {
      Hg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((_ = (h = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : h.find) == null ? void 0 : _.call(h, (ee) => (ee == null ? void 0 : ee.name) === "coverage")) || null;
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
function ys(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function nk(e, t = {}) {
  Vd(e) || tk(e, {
    ...t,
    onOpen: ys(e, t.onOpen)
  });
}
function rk(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Vd(e)) {
    yp(e, {
      ...n,
      onOpen: ys(e, t.onOpen)
    });
    return;
  }
  t0(e, "stickers_node_preview", (i) => {
    yp(i, {
      ...n,
      onOpen: ys(i, t.onOpen)
    });
  });
}
function ik(e, t = {}) {
  if (!Vd(e)) {
    gp(e, {
      ...t,
      onOpen: ys(e, t.onOpen)
    });
    return;
  }
  t0(e, "cutout_preview", (r) => {
    gp(r, {
      ...t,
      onOpen: ys(r, t.onOpen)
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
function kp(e, t) {
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
    } catch (h) {
      i(h);
    }
  }
  function m() {
    !o && !s && !a && (o = e(w));
  }
  function w(g) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const ee of h.values()) f(() => ee(g));
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
      if (!sk.has(g)) throw new Error(`Unknown draw reason: ${g}`);
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
          [Ai, e.space.visible]
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
        [Ai, e.preview.visible]
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
      [Ai, e.model.visible === !0]
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
      const f = o(), m = n.value;
      if (!f.length) {
        u.preventDefault(), (_ = m == null ? void 0 : m.focus) == null || _.call(m);
        return;
      }
      const w = f[0], g = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === w || h === m || !(m != null && m.contains(h))) && (u.preventDefault(), g.focus());
        return;
      }
      (h === g || !(m != null && m.contains(h))) && (u.preventDefault(), w.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return ki(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, wl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), _s(() => {
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
}, sM = { class: "pano-section-title" }, aM = { class: "pano-easing-range" }, lM = { class: "pano-easing-modes" }, cM = ["aria-pressed", "onClick"], uM = ["viewBox"], dM = ["x", "y"], fM = ["x1", "y1", "x2", "y2"], pM = ["d"], hM = ["x1", "y1", "x2", "y2"], mM = ["x1", "y1", "x2", "y2"], gM = ["cx", "cy"], yM = ["cx", "cy"], bM = { class: "pano-easing-note" }, Nr = 132, yi = 14, vM = {
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
    }), a = (w) => yi + w * Nr, l = (w) => yi + (1 - w) * Nr, c = dt(() => {
      var ee;
      if (((ee = r.model) == null ? void 0 : ee.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [w, g, h, _] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(w)} ${l(g)} ${a(h)} ${l(_)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((w) => w.toFixed(2)).join(", ") : "");
    function u(w) {
      var g;
      return JSON.stringify(w.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(w, g) {
      n("timeline", { type: "easing", easing: w, commit: g });
    }
    function m(w, g) {
      var te;
      if (w.button !== 0 || !s.value) return;
      const h = w.currentTarget;
      (te = h.setPointerCapture) == null || te.call(h, w.pointerId);
      let _ = null;
      const ee = (C) => {
        const X = o.value.getBoundingClientRect(), z = X.width / (Nr + yi * 2), G = ((C.clientX - X.left) / z - yi) / Nr, ne = 1 - ((C.clientY - X.top) / z - yi) / Nr;
        _ = [..._ || s.value], _[g] = Math.round(Math.min(1, Math.max(0, G)) * 100) / 100, _[g + 1] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, f(_, !1);
      }, $ = () => {
        h.removeEventListener("pointermove", ee), h.removeEventListener("pointerup", $), h.removeEventListener("pointercancel", $), _ && f(_, !0);
      };
      h.addEventListener("pointermove", ee), h.addEventListener("pointerup", $), h.addEventListener("pointercancel", $);
    }
    return (w, g) => e.model ? (Te(), De("div", oM, [
      Me("div", sM, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", aM, rt(e.model.label), 1)
      ]),
      Me("div", lM, [
        (Te(), De(Qe, null, Pt(i, (h) => Me("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (_) => f(h.easing, !0)
        }, rt(h.label), 9, cM)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Nr + yi * 2} ${Nr + yi * 2}`,
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
            onPointerdown: g[0] || (g[0] = (h) => m(h, 0))
          }, null, 40, gM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (h) => m(h, 2))
          }, null, 40, yM)
        ], 64)) : mt("", !0)
      ], 8, uM)) : mt("", !0),
      Me("div", bM, [
        e.model.mixed ? (Te(), De(Qe, { key: 0 }, [
          Ro("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Qe, { key: 1 }, [
          Ro("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Qe, { key: 2 }, [
          Ro("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Te(), De(Qe, { key: 3 }, [
          Ro("cubic-bezier(" + rt(d.value) + ")", 1)
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
      const f = c.currentTarget, m = c.clientX, w = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const h = (ee) => {
        if (!g && Math.abs(ee.clientX - m) < 3) return;
        g = !0;
        const $ = w + (ee.clientX - m) * d.drag * (ee.shiftKey ? 0.1 : 1);
        u.value = String(Number($.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, _ = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", _), f.removeEventListener("pointercancel", _), f.removeEventListener("lostpointercapture", _), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", _), f.addEventListener("pointercancel", _), f.addEventListener("lostpointercapture", _);
    }
    return (c, d) => {
      var u, f, m, w, g;
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
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
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
                  (Te(!0), De(Qe, null, Pt(e.model.selectionPicker.items || [], (h) => (Te(), De("button", {
                    key: h.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: h.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": h.id
                  }, [
                    h.icon ? (Te(), De("span", VM, [
                      Be($t, {
                        icon: h.icon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, rt(h.label), 1)
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
              (e.model.notes || []).length ? (Te(!0), De(Qe, { key: 0 }, Pt(e.model.notes, (h) => (Te(), De("div", {
                key: h,
                class: "pano-param-note"
              }, rt(h), 1))), 128)) : (Te(!0), De(Qe, { key: 1 }, Pt(e.model.rows || [], (h) => (Te(), De(Qe, {
                key: h.key
              }, [
                h.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": h.key
                }, [
                  Me("label", null, rt(h.label), 1),
                  Me("div", HM, [
                    (Te(!0), De(Qe, null, Pt(h.fields, (_) => (Te(), De("div", {
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
                        "aria-label": `${h.label} ${_.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": _.key
                      }, null, 8, KM)
                    ]))), 128))
                  ])
                ], 8, jM)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": h.key
                }, [
                  Me("label", null, rt(h.label), 1),
                  Me("input", {
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
                  }, null, 12, UM),
                  Me("input", {
                    type: "number",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].displayValue,
                    disabled: s(h.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": h.fields[0].key
                  }, null, 8, BM)
                ], 8, WM))
              ], 64))), 128))
            ], 2),
            Be(vM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (h) => n("timeline", h))
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
          (Te(!0), De(Qe, null, Pt(e.model.footerButtons, (h) => (Te(), De("button", {
            key: h.action,
            class: gt(["pano-btn", { "pano-btn-primary": h.primary === !0 }]),
            type: "button",
            "data-action": h.action
          }, rt(h.label), 11, sP))), 128))
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
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Fa(0), playing: /* @__PURE__ */ Fa(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null), s = /* @__PURE__ */ Yt(1), a = /* @__PURE__ */ Yt(0), l = /* @__PURE__ */ Yt(!1);
    let c = null, d = null, u = null;
    kl(() => {
      c = new ResizeObserver(([E]) => {
        s.value = Math.max(1, E.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([E]) => {
        a.value = E.contentRect.height;
      }), o.value && d.observe(o.value);
    }), _s(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), m = dt(() => r.playhead.frame.value), w = dt(() => r.playhead.playing.value), g = dt(() => kv(m.value, Number(r.model.fps || 1))), h = dt(() => s.value / f.value), _ = (E) => `${E / f.value * 100}%`, ee = dt(() => Rv(f.value, h.value));
    function $(E) {
      const j = i.value.getBoundingClientRect(), A = Math.floor((E - j.left) / Math.max(1, j.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, A));
    }
    function te(E, j, A) {
      const H = Math.ceil(TP / Math.max(1e-6, h.value)), T = new Map(j.map((B) => [B.frame, B.full]));
      return Vv(j.map((B) => B.frame), H).map((B, pe) => ({
        ...B,
        key: `${E}:${pe}`,
        partial: B.frames.some((ae) => !T.get(ae)),
        selected: B.frames.some((ae) => A.includes(ae))
      }));
    }
    const C = dt(() => {
      const E = /* @__PURE__ */ new Map();
      for (const j of r.model.rows || []) {
        E.set(j.id, te(j.id, j.keys, j.selectedFrames));
        for (const A of j.lanes) E.set(A.key, te(A.key, A.frames.map((H) => ({ frame: H, full: !0 })), A.selectedFrames));
      }
      return E;
    });
    function X(E) {
      const j = E.end === null ? f.value : E.end;
      return { left: _(E.start), width: _(Math.max(0, j - E.start)) };
    }
    function z(E, j) {
      const A = E.clientX, H = Math.max(1e-6, h.value);
      let T = 0;
      j("start", 0, E);
      const B = (ae) => {
        if (ae.pointerId !== E.pointerId) return;
        const K = Math.round((ae.clientX - A) / H);
        K !== T && (T = K, j("move", T, ae));
      }, pe = (ae) => {
        ae.pointerId === E.pointerId && (u(), j("end", T, ae));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", pe), window.removeEventListener("pointercancel", pe), u = null;
      }, window.addEventListener("pointermove", B), window.addEventListener("pointerup", pe), window.addEventListener("pointercancel", pe);
    }
    function G(E) {
      E.button === 0 && z(E, (j, A, H) => n("action", { type: "seek", frame: $(H.clientX), phase: j }));
    }
    function ne(E, j, A) {
      E.button === 0 && (n("action", { type: "select-row", id: j.id }), z(E, (H, T) => n("action", { type: "clip", id: j.id, mode: A, delta: T, phase: H })));
    }
    function he(E, j, A, H, T) {
      if (E.button === 0) {
        if (E.shiftKey) {
          n("action", { type: "select-keys", owner: j.id, lane: A, frames: H.frames, additive: !0 });
          return;
        }
        H.frames.every((B) => T.includes(B)) || n("action", { type: "select-keys", owner: j.id, lane: A, frames: H.frames, additive: !1 }), z(E, (B, pe) => n("action", { type: "move-keys", delta: pe, phase: B }));
      }
    }
    const q = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function fe(E, j, A) {
      n("action", j), await wl(), E.target.value = A();
    }
    function ce(E) {
      fe(E, { type: "fps", fps: Number(E.target.value) }, () => q.value);
    }
    function oe(E) {
      const j = E.target.value.trim();
      fe(E, { type: "length", length: j ? Number(j) : null }, () => r.model.length ?? "");
    }
    function U(E, j, A) {
      E.button !== 0 || E.target !== E.currentTarget || n("action", { type: "select-keys", owner: j.id, lane: A, frames: [], additive: !1 });
    }
    return (E, j) => Vr((Te(), De("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", lP, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": w.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": w.value ? "Pause (Space)" : "Play (Space)",
          onClick: j[0] || (j[0] = (A) => n("action", { type: "play" }))
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
          onClick: j[1] || (j[1] = (A) => n("action", { type: "mute" }))
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
            min: tt(lm),
            max: tt(od),
            step: "any",
            value: q.value,
            "aria-label": "Timeline fps",
            onChange: ce
          }, null, 40, hP)),
          j[6] || (j[6] = Me("span", null, "fps", -1))
        ], 8, fP),
        Me("label", mP, [
          j[7] || (j[7] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: tt(sd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: oe
          }, null, 40, gP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: j[2] || (j[2] = (A) => n("action", { type: "toggle-expanded" }))
        }, [
          j[8] || (j[8] = Me("span", null, "Timeline", -1)),
          Be($t, {
            icon: tt(ze).chevron
          }, null, 8, ["icon"])
        ], 8, yP)
      ]),
      Me("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: j[3] || (j[3] = At((A) => l.value = !0, ["self"])),
        onTransitionend: j[4] || (j[4] = At((A) => l.value = !1, ["self"])),
        onTransitioncancel: j[5] || (j[5] = At((A) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          j[9] || (j[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: G
          }, [
            (Te(!0), De(Qe, null, Pt(ee.value, (A) => (Te(), De("span", {
              key: A,
              class: "pano-timeline-tick",
              style: It({ left: _(A) })
            }, rt(A), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: It({ left: _(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Qe, null, Pt(e.model.rows || [], (A) => (Te(), De(Qe, {
            key: A.id
          }, [
            Me("div", {
              class: gt(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", vP, [
                A.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.visible ? "Hide" : "Show",
                  onClick: At((H) => n("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: A.visible ? tt(ze).eye : tt(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, SP)) : (Te(), De("span", _P)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: At((H) => n("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, wP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (H) => n("action", { type: "select-row", id: A.id })
                }, [
                  Be($t, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, rt(A.label), 1)
                ], 8, xP),
                A.keyable ? (Te(), De("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: tt(gc)(A.keys, m.value) }]),
                  type: "button",
                  "data-keyed": tt(gc)(A.keys, m.value) ? "true" : "false",
                  "aria-label": tt(gc)(A.keys, m.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((H) => n("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, kP)) : mt("", !0)
              ]),
              A.open ? (Te(!0), De(Qe, { key: 0 }, Pt(A.lanes, (H) => (Te(), De("div", {
                key: H.key,
                class: "pano-timeline-lane-head"
              }, rt(H.label), 1))), 128)) : mt("", !0)
            ], 2),
            Me("div", {
              class: gt(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (H) => U(H, A, null)
              }, [
                A.clip ? (Te(), De("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: It(X(A.clip)),
                  onPointerdown: At((H) => ne(H, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((H) => ne(H, A, "start"), ["stop"])
                  }, null, 40, NP),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((H) => ne(H, A, "end"), ["stop"])
                  }, null, 40, AP)
                ], 46, PP)) : mt("", !0),
                (Te(!0), De(Qe, null, Pt(C.value.get(A.id), (H) => (Te(), De("button", {
                  key: H.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: H.selected, cluster: H.frames.length > 1, partial: H.partial }]),
                  style: It({ left: _(H.frame + 0.5) }),
                  "aria-label": `${A.label}: ${H.frames.length > 1 ? `${H.frames.length} keyframes` : `keyframe at frame ${H.frames[0]}`}`,
                  "data-tip": H.frames.length > 1 ? `${H.frames.length} keyframes` : `Frame ${H.frames[0]}`,
                  onPointerdown: At((T) => he(T, A, null, H, A.selectedFrames), ["stop"])
                }, [
                  H.frames.length > 1 ? (Te(), De("span", IP, rt(H.frames.length), 1)) : mt("", !0)
                ], 46, CP))), 128))
              ], 40, MP),
              A.open ? (Te(!0), De(Qe, { key: 0 }, Pt(A.lanes, (H) => (Te(), De("div", {
                key: H.key,
                class: "pano-timeline-lane",
                onPointerdown: (T) => U(T, A, H.lane)
              }, [
                (Te(!0), De(Qe, null, Pt(C.value.get(H.key), (T) => (Te(), De("button", {
                  key: T.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1 }]),
                  style: It({ left: _(T.frame + 0.5) }),
                  "aria-label": `${H.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: At((B) => he(B, A, H.lane, T, H.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (Te(), De("span", FP, rt(T.frames.length), 1)) : mt("", !0)
                ], 46, OP))), 128))
              ], 40, EP))), 128)) : mt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: It({ left: _(m.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, bP)
    ], 2)), [
      [Ai, e.model.visible]
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
        [Ai, n.visible !== !1]
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
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? ze.pause : ze.play;
    }), o = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = dt(() => {
      var C, X;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var C, X, z;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? ze.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), d = dt(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var G, ne;
      const C = (G = t.state) == null ? void 0 : G.volumePct, X = Number(((ne = t.state) == null ? void 0 : ne.volume) ?? 1) * 100, z = Number(C ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, z))}%`
      };
    }), m = dt(() => {
      var z, G;
      const X = [
        String(((z = t.state) == null ? void 0 : z.currentTimeLabel) || "0:00"),
        String(((G = t.state) == null ? void 0 : G.durationLabel) || "0:00")
      ].reduce((ne, he) => Math.max(ne, he.length), 4);
      return `${Math.max(4, X)}ch`;
    }), w = dt(() => ({ "--pano-video-time-ch": m.value })), g = dt(() => {
      var z, G;
      const C = Array.isArray((z = t.state) == null ? void 0 : z.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const X = Math.max(7, Number(((G = t.state) == null ? void 0 : G.thumbnailCount) || 9));
      return Array.from({ length: X }, (ne, he) => ({
        id: `placeholder-${he}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), _ = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), ee = (C) => h.value.has(_(C)), $ = (C) => {
      const X = new Set(h.value);
      X.add(_(C)), h.value = X;
    };
    ki(g, (C) => {
      const X = new Set(C.map(_)), z = /* @__PURE__ */ new Set();
      for (const G of h.value)
        X.has(G) && z.add(G);
      h.value = z;
    }, { immediate: !0 });
    const te = dt(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, X) => (Te(), De("div", {
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
            (Te(!0), De(Qe, null, Pt(g.value, (z) => (Te(), De("div", {
              key: _(z),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !z.src,
                "is-loaded": z.src && ee(z)
              }])
            }, [
              z.src ? (Te(), De("img", {
                key: 0,
                src: z.src,
                alt: "",
                draggable: "false",
                onLoad: (G) => $(z)
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
            [Ai, i.visible !== !1]
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
      var q, fe;
      return ((fe = (q = d.value) == null ? void 0 : q.getRefs) == null ? void 0 : fe.call(q)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(q) {
      var fe, ce;
      return ((ce = (fe = c.value) == null ? void 0 : fe.open) == null ? void 0 : ce.call(fe, q)) === !0;
    }
    function m(q) {
      i("image-file-selected", q);
    }
    function w(q) {
      i("image-file-cancelled", q);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = dt(() => n.readOnly === !0), h = dt(() => n.shellPreset || n0(n.type)), _ = dt(() => {
      var fe, ce, oe;
      const q = String((((fe = n.uiState) == null ? void 0 : fe.stageStatus) === "failed" ? (ce = n.uiState) == null ? void 0 : ce.stageStatusDetail : (oe = n.uiState) == null ? void 0 : oe.stageWarningDetail) ?? "");
      return q === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : q === "stickers" ? "One or more sticker previews are unavailable." : q === "frame" ? "The editor hit a rendering error. Check the browser console for details." : q === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : q.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), ee = dt(() => {
      var q, fe, ce;
      return ((q = n.uiState) == null ? void 0 : q.stageStatus) === "failed" || (fe = n.uiState) != null && fe.stageWarningDetail ? _.value : (ce = n.uiState) == null ? void 0 : ce.stageNotice;
    }), $ = dt(() => {
      var fe;
      const q = Array.isArray((fe = h.value) == null ? void 0 : fe.floatingButtons) ? h.value.floatingButtons.slice() : [];
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
      )).filter((fe) => fe instanceof HTMLElement ? !fe.hidden && fe.tabIndex >= 0 && fe.offsetParent !== null : !1) : [];
    }
    function C() {
      var ce;
      const fe = te()[0] || l.value;
      (ce = fe == null ? void 0 : fe.focus) == null || ce.call(fe);
    }
    function X() {
      var q;
      a != null && a.isConnected && ((q = a.focus) == null || q.call(a)), a = null;
    }
    function z(q) {
      var fe, ce, oe, U;
      if (!q.defaultPrevented) {
        if (q.key === "Tab") {
          const E = te();
          if (!E.length) {
            q.preventDefault(), (ce = (fe = l.value) == null ? void 0 : fe.focus) == null || ce.call(fe);
            return;
          }
          const j = E[0], A = E[E.length - 1], H = document.activeElement;
          if (q.shiftKey) {
            (H === j || H === l.value || !((oe = l.value) != null && oe.contains(H))) && (q.preventDefault(), A.focus());
            return;
          }
          (H === A || !((U = l.value) != null && U.contains(H))) && (q.preventDefault(), j.focus());
          return;
        }
        q.key === "Escape" && i("close");
      }
    }
    function G() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ne() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function he(q) {
      document.removeEventListener("keydown", z), q ? (a || (a = document.activeElement), G(), document.addEventListener("keydown", z), wl(() => {
        C();
      })) : (ne(), X());
    }
    return kl(() => {
      he(n.open);
    }), _s(() => {
      ne(), document.removeEventListener("keydown", z), X();
    }), ki(() => n.open, (q) => {
      he(q);
    }), (q, fe) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: fe[2] || (fe[2] = At((ce) => i("close"), ["self"]))
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
            fe[3] || (fe[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            fe[4] || (fe[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            fe[5] || (fe[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", sN, rt(ee.value), 1)) : mt("", !0),
            fe[6] || (fe[6] = Me("div", {
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
              onFileSelected: m,
              onFileCancelled: w
            }, null, 512),
            g.value ? mt("", !0) : (Te(), De(Qe, { key: 1 }, [
              Be(VP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Sk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(qk, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(JP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(nN, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(mk, {
              buttons: e.uiState.floatingButtons || $.value,
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
            onAction: fe[0] || (fe[0] = (ce) => i("timeline", ce))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? mt("", !0) : (Te(), Gn(aP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: fe[1] || (fe[1] = (ce) => i("timeline", ce))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, rN)
    ])) : mt("", !0);
  }
}, nr = "loading", bs = "ready", Yn = "failed";
function r0(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function i0(e, t = "") {
  return e && (e.__panoLoadState = bs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function o0(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ku(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? bs : nr : bs;
}
function Mu(e) {
  return ku(e) === Yn;
}
function lN({ presented: e, background: t = bs, stickers: r = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === nr, o = n.includes(nr);
  if (i && o) return { status: nr, detail: "mixed" };
  if (i) return { status: nr, detail: "background" };
  if (o) return { status: nr, detail: "stickers" };
  const s = t === Yn, a = n.includes(Yn);
  return s && a ? { status: Yn, detail: "mixed" } : s ? { status: Yn, detail: "background" } : a ? { status: Yn, detail: "stickers" } : { status: bs, detail: "" };
}
const cN = "state_json", uN = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), $d = "sticker_image_1", dN = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), s0 = 0.01, fN = "external_image", po = "pano_sticker_input_images", a0 = "pano_sticker_input_videos", l0 = "pano_sticker_input_frames", c0 = "pano_sticker_input_video_meta", pN = !0, jl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], _r = Math.PI / 180, Ei = 180 / Math.PI, Pu = 1, u0 = "rgb(255, 221, 87)", hN = "rgb(228, 228, 231)", mN = "rgb(180, 150, 60)", gN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, yN = 64, Mp = 40, Cc = 16, bN = 0.45, Pp = 180, vN = 160, fl = 24, SN = 4, _N = 4;
function Ic(e) {
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
function Hl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Np(e, t) {
  return Hl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ap(e, t) {
  return Hl(e.x * t, e.y * t, e.z * t);
}
function Ec(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function MN(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hl(e.x / t, e.y / t, e.z / t);
}
function la(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Ei),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Ei, -90, 90)
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
function Go(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Oc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Go(e, t);
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
let ca = { fillStyle: "", url: "" };
function NN(e, t, r) {
  if (ca.url && ca.fillStyle === String(e || ""))
    return ca.url;
  const n = PN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${fl}" height="${fl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ca = { fillStyle: String(e || ""), url: n }, n;
}
function pl(e, t, r = 0.015) {
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
  return jl.some((t) => pl(e, t.color));
}
function Nu(e, t, r) {
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
function Au(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function so(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function CN(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Cp(e) {
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
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, m = Number(s.rot_deg || 0) * _r, w = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(m), e.scale(w, w), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Zi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ua(e, t) {
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
function Ko(e) {
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
let qi = null, dr = null;
function Oa(e) {
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
    if (!t) return qi ? Oa(qi) : null;
    const r = JSON.parse(t), n = Oa(r);
    return qi = n, n;
  } catch {
    return qi ? Oa(qi) : null;
  }
}
function DN(e) {
  var r;
  const t = Oa(e);
  qi = t;
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
  const r = { ...e }, n = t.map((i) => i(Fc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Fc(r, t[o].name))), Fc(r, "showEditor");
}
function Fc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const Cu = 0.5, m0 = "PANO_SCENE";
function $N(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Gr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function zN(e, t, r) {
  return e * r / t;
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
function Ip(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * Cu };
}
function UN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = ks(s, r), c = (g) => g.visible ? n(g) : null, d = Bm(s, r, { media: c, zIndex: (g) => g.z_index, paintLayers: i, evaluated: l }).map((g) => Ip(g, t)), u = Xm(s, r, s.stickers, { media: c, evaluated: l }).map((g) => Ip(g, t)), f = [], m = el(Tr(a, "pano_scene_files"), Tr(a, "pano_scene_meta"), o);
  m && f.push({ slot: `${t}:scene`, urls: m.urls.filter(Boolean), request: yd(m, l.scene), value: l.scene, opacity: Cu });
  const w = el(Tr(a, "pano_sticker_files"), Tr(a, "pano_sticker_meta"), o);
  if (w) {
    const g = $m(w, s, l);
    f.push({ slot: `${t}:sticker`, urls: zm(w, s), request: g, value: (g == null ? void 0 : g.value) ?? null, opacity: ((g == null ? void 0 : g.opacity) ?? 1) * Cu });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ei = /* @__PURE__ */ new Map(), BN = 12;
function YN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ei.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ei.delete(t), ei.set(t, r), r);
}
function qN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ei.delete(r), ei.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ei.size > BN; ) {
      const i = ei.keys().next().value;
      if (!i) break;
      ei.delete(i);
    }
}
function XN(e) {
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
    runtime: w,
    scheduler: g,
    stageWrap: h,
    state: _,
    stateV2: ee,
    stillCanvas: $,
    studio: te,
    timelinePlayhead: C,
    type: X,
    uiState: z,
    videoEl: G
  } = e;
  let ne, he, q, fe, ce, oe;
  const U = {
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
  }, E = 9, j = [];
  let A = 0;
  const H = () => {
    var $e, He;
    const D = ($e = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : $e.call(h), ie = (He = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : He.call(i), Ne = Math.max(0, Number((D == null ? void 0 : D.width) || 0)), xe = ie ? Math.max(0, Number(ie.width || 0)) : 0, Le = xe > 0 ? xe + 14 + 12 : 72, je = Math.max(280, Math.floor(Ne - Le * 2)), Ke = r.fullscreen ? Math.min(1200, je) : je;
    z.videoTransport.shellMaxWidthPx = Ke;
  }, T = () => {
    A || (A = g.requestFrame(() => {
      A = 0, H();
    }));
  }, B = (D) => {
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
    return !!z.videoTransport.hasAudio;
  }, pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => T()) : null;
  pe == null || pe.observe(h), i && (pe == null || pe.observe(i)), j.push(() => {
    var D;
    A && (g.cancelFrame(A), A = 0), (D = pe == null ? void 0 : pe.disconnect) == null || D.call(pe);
  }), T();
  const ae = () => {
    U.thumbnailJobId += 1, U.thumbnailSrc = "", z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = E;
  }, K = async (D, ie, Ne) => {
    const xe = String(D || "").trim();
    if (!xe) {
      ae();
      return;
    }
    const Pe = YN(xe);
    if (Pe) {
      U.thumbnailSrc = xe, z.videoTransport.thumbnails = Pe.thumbnails, z.videoTransport.thumbnailCount = Pe.thumbnailCount;
      return;
    }
    const Ce = ++U.thumbnailJobId;
    U.thumbnailSrc = xe, z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = E;
    const Le = xs(document, "editor.thumbnails");
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
      if (U.thumbnailJobId !== Ce) return;
      const $e = Number(Le.videoWidth || 0), He = Number(Le.videoHeight || 0);
      if (!Ke || $e < 1 || He < 1) {
        U.thumbnailFailedSrcs.add(xe);
        return;
      }
      const se = Math.max(0, Number(Le.duration || ie || 0)), Fe = 46, Ae = Math.max(72, Math.round($e / He * Fe));
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
      for (let We = 0; We < E; We += 1) {
        if (U.thumbnailJobId !== Ce) return;
        const ht = E <= 1 ? 0 : We / (E - 1), bt = se > 0 ? Math.max(0, Math.min(se - Math.max(1e-3, 0.5 / Math.max(1, Number(Ne || 24))), se * ht)) : 0;
        if (await Ge(bt), U.thumbnailJobId !== Ce) return;
        Re.clearRect(0, 0, Ae, Fe), Re.drawImage(Le, 0, 0, Ae, Fe), Ye.push({
          id: `thumb-${We}`,
          src: je.toDataURL("image/jpeg", 0.72),
          time: bt,
          label: y(bt)
        });
      }
      if (U.thumbnailJobId !== Ce) return;
      z.videoTransport.thumbnails = Ye, z.videoTransport.thumbnailCount = Ye.length || E, qN(xe, {
        thumbnails: Ye,
        thumbnailCount: Ye.length || E,
        duration: se,
        fps: Ne
      });
    } finally {
      Le.removeAttribute("src"), Le.load(), as(je);
    }
  };
  j.push(() => {
    ae();
  });
  const k = xg({
    video: G instanceof HTMLVideoElement ? G : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (D) => g.requestFrame(D),
      cancelFrame: (D) => g.cancelFrame(D)
    },
    fps: I,
    span: () => {
      if (ee) return oe();
      const D = Math.round(Number(z.videoTransport.duration || 0) * I());
      return G.loop || !(D > 0) ? 1 / 0 : D;
    },
    loop: () => ee,
    onFrame: (D) => {
      ee ? q(D) : v(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      O() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      v(), C.playing.value = k.playing, ce(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  j.push(() => k.dispose());
  const re = ee && f instanceof HTMLVideoElement ? Nd({
    video: f,
    onCapture: () => {
      var Ne;
      const D = Number(f.videoWidth || 0), ie = Number(f.videoHeight || 0);
      D < 1 || ie < 1 || (u.width = D, u.height = ie, (Ne = u.getContext("2d")) == null || Ne.drawImage(f, 0, 0), u.__panoFrameIdx += 1, he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  re && j.push(() => re.dispose());
  const de = ee ? xd({
    createImage: (D, ie) => {
      const Ne = new Image();
      return Ne.onload = ie, Ne.onerror = ie, Ne.src = D, Ne;
    },
    onLoad: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (G instanceof HTMLVideoElement) {
    const D = () => {
      R(), he({ cause: "frame_view", localOnly: !0 });
    }, ie = () => {
      v({
        hasAudio: z.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? z.videoTransport.volume ?? 1)
      });
    }, Ne = () => {
      const xe = G.dataset.panoSrc;
      xe && (U.failedSrcs.add(xe), R(), he());
    };
    for (const [xe, Pe] of [
      ["loadedmetadata", D],
      ["loadeddata", D],
      ["canplay", D],
      ["volumechange", ie],
      ["error", Ne]
    ])
      G.addEventListener(xe, Pe), j.push(() => G.removeEventListener(xe, Pe));
  }
  function _e(D) {
    return t.uiList(d, D);
  }
  function we(D) {
    return t.uiValue(d, D);
  }
  function N() {
    const D = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Wa(D))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ie = p();
    return ie ? { videoKey: ie.videoKey, metaKey: ie.metaKey } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: D } = N(), ie = we(D);
    return Array.isArray(ie) && ie.length > 0 && ie[0] && typeof ie[0] == "object" ? ie[0] : ie && typeof ie == "object" ? ie : null;
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
    const ie = Math.max(0, Math.floor(Number(D || 0))), Ne = Math.floor(ie / 60), xe = ie % 60;
    return `${Ne}:${String(xe).padStart(2, "0")}`;
  }
  function I() {
    return ee ? _.timeline.fps : U.metaFps || 1e3;
  }
  function v(D = {}) {
    const ie = Number(D.duration ?? z.videoTransport.duration ?? 0), Ne = Math.max(1, Number(D.fps ?? z.videoTransport.fps ?? 24)), xe = k.frame / I(), Pe = Object.prototype.hasOwnProperty.call(D, "ready") ? !!D.ready : !!z.videoTransport.ready, Ce = k.playing, Le = Object.prototype.hasOwnProperty.call(D, "visible") ? !!D.visible : !!z.videoTransport.visible, je = Object.prototype.hasOwnProperty.call(D, "muted") ? !!D.muted : !!(G instanceof HTMLVideoElement ? G.muted : z.videoTransport.muted), Ke = Number(
      Object.prototype.hasOwnProperty.call(D, "volume") ? D.volume : G instanceof HTMLVideoElement ? G.volume : z.videoTransport.volume
    ), $e = Object.prototype.hasOwnProperty.call(D, "hasAudio") ? !!D.hasAudio : B(G), He = Object.prototype.hasOwnProperty.call(D, "loop") ? !!D.loop : !!z.videoTransport.loop;
    Object.assign(z.videoTransport, {
      ready: Pe,
      playing: Ce,
      visible: Le,
      loop: He,
      currentTime: Number.isFinite(xe) ? xe : 0,
      duration: Number.isFinite(ie) ? ie : 0,
      progressPct: ie > 1e-6 ? Math.max(0, Math.min(100, xe / ie * 100)) : 0,
      currentTimeLabel: y(xe),
      durationLabel: y(ie),
      frameCount: Math.max(0, Number(D.frameCount ?? z.videoTransport.frameCount ?? 0)),
      fps: Ne,
      hasAudio: $e,
      muted: je,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)) * 100),
      thumbnails: Array.isArray(D.thumbnails) ? D.thumbnails : z.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(D.thumbnailCount ?? z.videoTransport.thumbnailCount ?? E))
    });
  }
  function V() {
    return !!(G instanceof HTMLVideoElement && !ee && G.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function L() {
    if (!(G instanceof HTMLVideoElement) || !z.videoTransport.hasAudio) return;
    const D = !G.muted;
    G.muted = D, !D && Number(G.volume || 0) <= 0 && (G.volume = Math.max(0.01, Number(z.videoTransport.volume || 1))), v({
      hasAudio: z.videoTransport.hasAudio,
      muted: G.muted,
      volume: Number(G.volume ?? z.videoTransport.volume ?? 1)
    });
  }
  function J() {
    v({
      visible: V()
    });
  }
  function O() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const D = Number(G.videoWidth || 0), ie = Number(G.videoHeight || 0);
    ($.width !== D || $.height !== ie) && ($.width = D, $.height = ie);
    const Ne = $.getContext("2d");
    return Ne ? (Ne.clearRect(0, 0, D, ie), Ne.drawImage(G, 0, 0, D, ie), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function F() {
    return !k.showsVideo && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function x() {
    $.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function R() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: D } = N(), ie = (p() || Qt(d, "background")) && _e(D)[0] || null, Ne = l(ie), xe = [Ne, t.linkedVideoFile(d, S())].filter(Boolean), Pe = xe.find((se) => !U.failedSrcs.has(se)) || "";
    U.videoFailed = !Pe && xe.length > 0;
    const Ce = Pe && Pe === Ne ? le() : null;
    U.metaFps = Number(Ce == null ? void 0 : Ce.fps) > 0 ? Number(Ce.fps) : 0;
    const Le = Math.max(1, Number((Ce == null ? void 0 : Ce.fps) || (ee ? _.timeline.fps : 24))), je = G.dataset.panoSrc === Pe && Number.isFinite(G.duration) ? G.duration : 0, Ke = Number((Ce == null ? void 0 : Ce.duration) || ((Ce == null ? void 0 : Ce.frames) > 0 ? Ce.frames / Le : je)), $e = Math.max(0, Number((Ce == null ? void 0 : Ce.frames) || Math.round(Ke * Le))), He = !!(Ce != null && Ce.has_audio) || B(G);
    return Pe && G.dataset.panoSrc !== Pe ? (G.pause(), x(), G.dataset.panoSrc = Pe, G.loop = !ee && !!z.videoTransport.loop, G.muted = !!z.videoTransport.muted, G.volume = Math.max(0, Math.min(1, Number(z.videoTransport.volume ?? 1))), G.src = Pe, G.load(), k.setSource(!0), ee || k.seek(0)) : !Pe && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), delete G.dataset.panoSrc, G.load(), x(), ae(), k.setSource(!1)), ee || (G.loop = !!z.videoTransport.loop), Pe && !ee && U.thumbnailSrc !== Pe && !U.thumbnailFailedSrcs.has(Pe) && K(Pe, Ke, Le), Pe || ae(), v({
      ready: !!Pe,
      visible: !!Pe && V(),
      duration: Ke,
      frameCount: $e,
      fps: Le,
      hasAudio: He,
      loop: !!G.loop,
      muted: !!G.muted,
      volume: Number(G.volume ?? z.videoTransport.volume ?? 1),
      thumbnailCount: z.videoTransport.thumbnailCount
    }), Pe || null;
  }
  function Z(D, ie = null) {
    return c(d, D, o, ie || (() => he()));
  }
  function me(D = null) {
    return Qt(d, "external-sticker") ? Z(po, D) : null;
  }
  function ue() {
    if (!Qt(d, "external-sticker")) return null;
    const D = _e(c0)[0];
    if (!D || typeof D != "object") return null;
    const ie = _e(l0).map(l).filter(Boolean);
    if (ie.length) return { frames: ie, meta: D };
    const Ne = l(_e(a0)[0] || null);
    return Ne ? { src: Ne, meta: D } : null;
  }
  function ve() {
    const D = _.stickers.find(ne), ie = D ? ue() : null, Ne = ie ? _d(D.clip, r.frame, _.timeline.fps, ie.meta) : null;
    re.follow({ src: (ie == null ? void 0 : ie.src) || "", time: Ne, playing: k.advancing, fps: _.timeline.fps });
    const xe = D ? Q(D) : null, Pe = ie != null && ie.frames ? de.picture(ie.frames, Ne, ie.meta, xe) : re.picture(u, xe);
    return Pe ? { media: Pe, revision: b(Pe), source: wd(ie, xe) } : null;
  }
  function Se() {
    return !ee || !Qt(d, "scene") ? null : el(_e("pano_scene_files"), _e("pano_scene_meta"), l);
  }
  function be() {
    return !ee || !Qt(d, "external-sticker") ? null : el(_e("pano_sticker_files"), _e("pano_sticker_meta"), l);
  }
  function Q(D) {
    var Le;
    if (D && typeof D == "object" && (ne(D) || D.external === !0))
      return me(() => {
        ti(d, "image-loaded");
      });
    const ie = ee ? ge(D) : String(D && typeof D == "object" ? D.asset_id || D.assetId || "" : D || "");
    if (!ie) return null;
    const Ne = o.get(ie);
    if (Ne) return Ne;
    const xe = ee ? Qa(D.source) : (Le = _.assets) == null ? void 0 : Le[ie], Pe = a(xe);
    if (!Pe) return null;
    const Ce = new Image();
    return r0(Ce, Pe), Ce.onload = () => {
      i0(Ce, Pe), he();
    }, Ce.onerror = () => {
      o0(Ce, Pe), he();
    }, Ce.src = Pe, o.set(ie, Ce), Ce;
  }
  function ge(D) {
    const { source: ie } = D;
    return ie.filename ? `file:${ie.storage}:${ie.subfolder}:${ie.filename}` : `sticker:${D.id}`;
  }
  function Y() {
    if (X === "cutout") {
      const Ce = F();
      if (Ce) return Ce;
      const Le = s(
        d,
        ["erp_image", "bg_erp"],
        () => he(),
        "background:cutout:erp_image|bg_erp"
      );
      return Le && !Mu(Le) ? Le : c(d, "pano_input_images", o, () => he()) || Le || null;
    }
    const D = F();
    if (D) return D;
    const ie = p(), Ne = ie || Qt(d, "background") ? c(d, (ie == null ? void 0 : ie.imageKey) ?? "pano_input_images", o, () => he()) : null;
    if (Ne && !Mu(Ne)) return Ne;
    if (G instanceof HTMLVideoElement && G.dataset.panoSrc) return G;
    if (ie) return Ne;
    const xe = S();
    return s(d, xe, () => he(), `background:${xe.join("|")}`) || Ne || null;
  }
  function p() {
    return !te || !Qt(d, "scene") ? null : jN(_e);
  }
  function P() {
    var D;
    return ((D = p()) == null ? void 0 : D.coverage) ?? Rn(_.coverage);
  }
  function S() {
    if (p()) return [];
    if (X === "cutout") return ["erp_image", "bg_erp"];
    const D = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], ie = D.includes("erp_image"), Ne = D.includes("bg_erp");
    return m && (ie || Ne) ? ie ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function M(D) {
    return D ? D instanceof HTMLImageElement ? !!D.complete && Number(D.naturalWidth || D.width || 0) > 0 && Number(D.naturalHeight || D.height || 0) > 0 : D instanceof HTMLVideoElement ? Number(D.videoWidth || 0) > 0 && Number(D.videoHeight || 0) > 0 && Number(D.readyState || 0) >= 2 : Number(D.width || D.naturalWidth || 0) > 0 && Number(D.height || D.naturalHeight || 0) > 0 : !1;
  }
  function W() {
    if (n.failed) return { status: Yn, detail: "renderer" };
    if (!n.ready) return { status: nr, detail: "boot" };
    const D = Y(), ie = U.videoFailed ? Yn : ku(D, M), Ne = [];
    for (const xe of fe()) {
      if ((xe == null ? void 0 : xe.visible) === !1) continue;
      const Pe = Q(xe);
      Ne.push(ku(Pe, M));
    }
    return lN({
      presented: w.hasPresentedFrame,
      background: ie,
      stickers: Ne
    });
  }
  function ye() {
    G instanceof HTMLVideoElement && G.pause(), j.forEach((D) => {
      try {
        D();
      } catch {
      }
    });
  }
  return {
    connect(D) {
      ({
        isExternalSticker: ne,
        requestDraw: he,
        setTimelineFrame: q,
        skyStickers: fe,
        syncTimeline: ce,
        timelineSpanFrames: oe
      } = D);
    },
    videoState: U,
    queueVideoTransportLayout: T,
    playback: k,
    portVideo: re,
    getNodeUiValue: we,
    getMediaRevisionToken: b,
    playbackFps: I,
    syncVideoTransportState: v,
    toggleVideoMuted: L,
    syncVideoTransportVisibility: J,
    refreshModalVideoSource: R,
    getStickerUiImage: Z,
    getExternalStickerPreviewImage: me,
    getPortMedia: ue,
    followPortSticker: ve,
    getStickerImage: Q,
    stickerImageKey: ge,
    getConnectedErpImage: Y,
    backgroundCoverage: P,
    upstreamBackground: p,
    isDecodedImageReady: M,
    getStageImageStatus: W,
    sceneFiles: Se,
    stickerFiles: be,
    disposeMediaSession: ye
  };
}
function JN(e = 80, t = null, r = 8) {
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
const ZN = 80;
function g0(e) {
  return JSON.stringify(Kv(e));
}
function QN(e) {
  return JN(ZN, { entries: [g0(e)], index: 0 });
}
function y0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function e2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, m, w, g, h, _, ee, $, te, C;
  function X() {
    r || (ee(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(g0(i)), te()));
  }
  function z(ne) {
    var ce, oe;
    if (r) return;
    _();
    const he = ne < 0 ? t.historyController.undo() : t.historyController.redo();
    if (te(), !he) return;
    const q = Wv(i, he), fe = (ce = i.timeline) == null ? void 0 : ce.fps;
    Object.keys(i).forEach((U) => delete i[U]), Object.assign(i, q.state), ee(!1), o && i.timeline.fps !== fe && w.seek(Math.round(t.frame * i.timeline.fps / fe)), t.selectedId = y0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((oe = d()) == null ? void 0 : oe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), g(), n.backgroundDirty = !0, q.paintingChanged ? m() : f(), $(), C(), c(), h({ cause: "cutout_frame" });
  }
  function G() {
    var q, fe;
    const ne = Array.isArray((q = t.historyController) == null ? void 0 : q.entries) ? t.historyController.entries : [], he = Number((fe = t.historyController) == null ? void 0 : fe.index);
    return {
      canUndo: !r && ne.length > 1 && he > 0,
      canRedo: !r && ne.length > 1 && he >= 0 && he < ne.length - 1
    };
  }
  return {
    connect(ne) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: w,
        releaseHiddenSelection: g,
        requestDraw: h,
        stopTimelinePlayback: _,
        syncCutoutShot: ee,
        syncPaintUi: $,
        syncUndoRedoButtons: te,
        updateSidePanel: C
      } = ne);
    },
    pushHistory: X,
    restoreHistory: z,
    getHistoryCapabilities: G
  };
}
function t2(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, w;
  function g() {
    return s === "stickers" ? h() : i.shots;
  }
  function h() {
    return n ? i.stickers.filter((p) => p.placement === "sky") : i.stickers;
  }
  function _(p) {
    return n && re(p);
  }
  function ee(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function $(p) {
    if (!_(p)) return p;
    const P = Z(p) ? m(p) : null;
    return ud(p, r.frame, P && { width: P.naturalWidth || P.width, height: P.naturalHeight || P.height });
  }
  function te(p, P) {
    _(p) ? Nm(p, r.frame, P) : Object.assign(p, P);
  }
  function C() {
    const p = i.painting || (i.painting = yo(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function X(p = "paint") {
    var W, ye;
    const P = Array.isArray((ye = (W = i.painting) == null ? void 0 : W[p]) == null ? void 0 : ye.strokes) ? i.painting[p].strokes : [], S = [], M = /* @__PURE__ */ new Set();
    for (const D of P) {
      const ie = String((D == null ? void 0 : D.actionGroupId) || "").trim();
      !ie || M.has(ie) || (M.add(ie), S.push(ie));
    }
    return S;
  }
  function z() {
    return X("paint");
  }
  function G(p, P) {
    const S = String(P || "").trim();
    return S ? `${p === "mask" ? "mask" : "paint"}:${S}` : "";
  }
  function ne(p) {
    const P = String(p || "").trim();
    return P ? `raster:${P}` : "";
  }
  function he(p) {
    const P = String(p || "").trim();
    if (!P) return "";
    const S = P.match(/^raster:(.*)$/);
    return String(S ? S[1] || "" : P).trim();
  }
  function q(p, P = null) {
    const S = String(p || "").trim();
    if (!S) return { layerKind: "paint", actionGroupId: "" };
    const M = S.match(/^(paint|mask):(.*)$/);
    return M ? { layerKind: M[1] === "mask" ? "mask" : "paint", actionGroupId: String(M[2] || "").trim() } : { layerKind: P === "mask" ? "mask" : "paint", actionGroupId: S };
  }
  function fe() {
    var P;
    let p = -1;
    for (const S of h())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of C())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of Array.isArray((P = i.painting) == null ? void 0 : P.raster_objects) ? i.painting.raster_objects : [])
      String((S == null ? void 0 : S.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0)));
    return p + 1;
  }
  function ce(p, P = null) {
    const S = String(p || "").trim();
    if (!S) return null;
    const M = C();
    let W = M.find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || "") === S);
    return W ? P != null && (W.z_index = Math.max(0, Number(P || 0))) : (W = {
      id: S,
      type: "strokeGroup",
      actionGroupId: S,
      z_index: P == null ? fe() : Math.max(0, Number(P || 0)),
      locked: !1,
      frame: null
    }, M.push(W)), W;
  }
  function oe(p) {
    if (!(p != null && p.centerUv)) return [];
    const P = Number(p.centerUv.u || 0), S = Number(p.centerUv.v || 0), M = Number(p.halfW || 0), W = Number(p.halfH || 0);
    return [
      {
        u: ((P - M) % 1 + 1) % 1,
        v: Ie(S - W, 0, 1)
      },
      {
        u: ((P + M) % 1 + 1) % 1,
        v: Ie(S - W, 0, 1)
      },
      {
        u: ((P + M) % 1 + 1) % 1,
        v: Ie(S + W, 0, 1)
      },
      {
        u: ((P - M) % 1 + 1) % 1,
        v: Ie(S + W, 0, 1)
      }
    ];
  }
  function U() {
    const p = new Set(z()), S = C().filter((M) => p.has(String((M == null ? void 0 : M.actionGroupId) || "")));
    return p.forEach((M) => {
      S.some((W) => String((W == null ? void 0 : W.actionGroupId) || "") === M) || S.push({
        id: M,
        type: "strokeGroup",
        actionGroupId: M,
        z_index: fe(),
        locked: !1,
        frame: null
      });
    }), S.sort((M, W) => Number((M == null ? void 0 : M.z_index) || 0) - Number((W == null ? void 0 : W.z_index) || 0)), i.painting.groups = S, S;
  }
  function E(p, P, S) {
    var $e;
    const M = (He) => (Number(He || 0) % 1 + 1) % 1, W = [];
    for (const He of S) {
      const se = He == null ? void 0 : He.geometry, Fe = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(Fe) && W.push(...Fe);
    }
    if (!W.length) return null;
    const ye = M((($e = W[0]) == null ? void 0 : $e.u) || 0);
    let D = 0, ie = 0;
    W.forEach((He) => {
      const se = M((He == null ? void 0 : He.u) || 0);
      D += ye + v(se, ye), ie += Number((He == null ? void 0 : He.v) || 0);
    });
    const Ne = (D / W.length % 1 + 1) % 1;
    let xe = 1 / 0, Pe = -1 / 0, Ce = 1 / 0, Le = -1 / 0;
    W.forEach((He) => {
      const se = M((He == null ? void 0 : He.u) || 0), Fe = v(se, Ne);
      xe = Math.min(xe, Fe), Pe = Math.max(Pe, Fe);
      const Ae = Number((He == null ? void 0 : He.v) || 0);
      Ce = Math.min(Ce, Ae), Le = Math.max(Le, Ae);
    });
    const je = S.reduce((He, se) => {
      const Fe = l(String((se == null ? void 0 : se.toolKind) || "pen")), Ae = Tn[Fe] || Tn[Er], Re = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((Ae == null ? void 0 : Ae.sizeScale) ?? 1));
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
  function j(p, P, S) {
    const M = String(p || "").trim();
    if (!M) return null;
    const W = C().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === M);
    if (!W) return null;
    const ye = S || b(M, P);
    return W.frame = E(M, P, ye), W.frame;
  }
  function A() {
    var M;
    const p = h().map((W) => ({
      type: "sticker",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), P = U().map((W) => ({
      type: "strokeGroup",
      id: String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || ""),
      actionGroupId: String((W == null ? void 0 : W.actionGroupId) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), S = (Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : []).filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") === "paint").map((W) => ({
      type: "rasterObject",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    }));
    return [...p, ...P, ...S].sort((W, ye) => Number(W.z_index || 0) - Number(ye.z_index || 0));
  }
  function H(p = !0) {
    var S, M, W, ye, D, ie;
    const P = A().filter((Ne) => Ne.type === "strokeGroup").map((Ne) => String(Ne.actionGroupId || "")).filter((Ne) => !!Ne);
    if (p) {
      const Ne = String(((M = (S = r.interaction) == null ? void 0 : S.stroke) == null ? void 0 : M.actionGroupId) || "").trim(), xe = String(((ye = (W = r.interaction) == null ? void 0 : W.stroke) == null ? void 0 : ye.layerKind) || "").trim(), Pe = String(((ie = (D = r.interaction) == null ? void 0 : D.stroke) == null ? void 0 : ie.toolKind) || "").trim();
      Ne && xe === "paint" && Pe !== "eraser" && !P.includes(Ne) && P.push(Ne);
    }
    return P;
  }
  function T(p = !0) {
    var ie, Ne, xe, Pe, Ce, Le;
    const P = A();
    if (!p) return P;
    const S = String(((Ne = (ie = r.interaction) == null ? void 0 : ie.stroke) == null ? void 0 : Ne.actionGroupId) || "").trim(), M = String(((Pe = (xe = r.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : Pe.layerKind) || "").trim(), W = String(((Le = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!S || M !== "paint" || W === "eraser" || P.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === S))
      return P;
    const ye = f();
    let D = P.reduce((je, Ke) => Math.max(je, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return ye && le(ye) && String(ye.actionGroupId || "") === S && (D = Number(ye.z_index || 0)), [
      ...P,
      {
        type: "strokeGroup",
        id: S,
        actionGroupId: S,
        z_index: D,
        item: null
      }
    ].sort((je, Ke) => Number((je == null ? void 0 : je.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function B() {
    return C().slice().sort((p, P) => Number((p == null ? void 0 : p.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)).map((p) => N(G("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function pe() {
    var p;
    return (Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : []).filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") === "paint").slice().sort((P, S) => Number((P == null ? void 0 : P.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0)).map((P) => _e(ne((P == null ? void 0 : P.id) || ""))).filter(Boolean);
  }
  function ae() {
    return Array.isArray(i.stickers) ? h() : [];
  }
  function K() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ae()];
  }
  function k(p) {
    return !!p && Array.isArray(i.shots) && i.shots.includes(p);
  }
  function re(p) {
    return !!p && Array.isArray(i.stickers) && i.stickers.includes(p);
  }
  function de() {
    var p;
    return Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [];
  }
  function _e(p) {
    const P = he(p);
    if (!P) return null;
    const S = de().find((M) => String((M == null ? void 0 : M.id) || "").trim() === P);
    return !S || String((S == null ? void 0 : S.layerKind) || "paint") !== "paint" ? null : {
      ...S,
      id: ne(P),
      type: "rasterObject",
      rasterObjectId: P
    };
  }
  function we(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const P = he(p.rasterObjectId || p.id || "");
    return !!P && !!_e(ne(P));
  }
  function N(p) {
    const P = q(p), S = String(P.actionGroupId || "").trim();
    if (!S) return null;
    const M = C().find((W) => String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || "") === S || String((W == null ? void 0 : W.actionGroupId) || "") === S);
    return M ? {
      ...M,
      id: G("paint", S),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: S
    } : null;
  }
  function le(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const P = String(p.actionGroupId || "").trim(), S = String(p.layerKind || "paint").trim() || "paint";
    return !!P && !!N(G(S, P));
  }
  function b(p, P = null) {
    const S = q(p, P), M = String(S.actionGroupId || "").trim();
    return M ? d(S.layerKind).filter((W) => String((W == null ? void 0 : W.actionGroupId) || "").trim() === M) : [];
  }
  function y(p, P = "paint") {
    const S = String(p || "").trim(), W = `geomv5:${String(P || "paint").trim() || "paint"}:${S}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ye = a(), D = String((ye == null ? void 0 : ye.id) || ""), ie = ye ? c(ye) : null;
      return `${W}:frame:${D}:${Math.round(Number((ye == null ? void 0 : ye.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.roll_deg) ?? (ye == null ? void 0 : ye.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.x) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.y) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.w) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function I(p, P, S) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(P || 0)) % 1 + 1) % 1,
      v: Ie(Number(p.v || 0) + Number(S || 0), 0, 1)
    };
  }
  function v(p, P) {
    let S = Number(p || 0) - Number(P || 0);
    for (; S > 0.5; ) S -= 1;
    for (; S < -0.5; ) S += 1;
    return S;
  }
  function V(p, P = null, S = null) {
    var xe;
    const M = q(p, P), W = Array.isArray(S) ? S : b(M.actionGroupId, M.layerKind), ye = [];
    if (W.forEach((Pe) => {
      const Ce = (Pe == null ? void 0 : Pe.geometry) || null, Le = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Le) && ye.push(...Le);
    }), !ye.length) return { u: 0.5, v: 0.5 };
    const D = Number(((xe = ye[0]) == null ? void 0 : xe.u) || 0);
    let ie = 0, Ne = 0;
    return ye.forEach((Pe) => {
      ie += D + v(Number((Pe == null ? void 0 : Pe.u) || 0), D), Ne += Number((Pe == null ? void 0 : Pe.v) || 0);
    }), {
      u: (ie / ye.length % 1 + 1) % 1,
      v: Ie(Ne / ye.length, 0, 1)
    };
  }
  function L(p, P, S = 1, M = 0) {
    if (!p || typeof p != "object") return p;
    const W = Number((P == null ? void 0 : P.u) || 0), ye = Number((P == null ? void 0 : P.v) || 0), D = v(Number(p.u || 0), W), ie = Number(p.v || 0) - ye, Ne = Number(M || 0) * _r, xe = Math.cos(Ne), Pe = Math.sin(Ne), Ce = Math.max(0.02, Number(S || 1)), Le = (D * xe - ie * Pe) * Ce, je = (D * Pe + ie * xe) * Ce;
    return {
      ...p,
      u: ((W + Le) % 1 + 1) % 1,
      v: Ie(ye + je, 0, 1)
    };
  }
  function J(p, P, S, M = null, W = null, ye = null) {
    const D = q(p, W), ie = String(D.actionGroupId || "").trim();
    if (!ie) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(M) ? new Map(M.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Pe = !1;
    if (Ne.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== ie) return;
      const Le = (xe == null ? void 0 : xe.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, je = Ce == null ? void 0 : Ce.geometry, Ke = Le == null ? void 0 : Le.geometry;
      !je || !Ke || (Array.isArray(Ke.points) && (je.points = Ke.points.map(($e) => I($e, P, S)), Pe = !0), Array.isArray(Ke.rawPoints) && (je.rawPoints = Ke.rawPoints.map(($e) => I($e, P, S)), Pe = !0), Array.isArray(Ke.processedPoints) && (je.processedPoints = Ke.processedPoints.map(($e) => I($e, P, S)), Pe = !0));
    }), Pe && ye) {
      const Ce = C().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === ie);
      Ce && (Ce.frame = null);
    }
    return Pe;
  }
  function O(p, P = 1, S = 0, M = null, W = null, ye = null) {
    const D = q(p, W), ie = String(D.actionGroupId || "").trim();
    if (!ie) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(M) ? M : b(ie, D.layerKind), Pe = Array.isArray(xe) ? new Map(xe.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Ce = (ye == null ? void 0 : ye.centerUv) ?? V(ie, D.layerKind, xe);
    let Le = !1;
    if (Ne.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== ie) return;
      const Ke = (Pe == null ? void 0 : Pe.get(String((je == null ? void 0 : je.id) || ""))) || je, $e = je == null ? void 0 : je.geometry, He = Ke == null ? void 0 : Ke.geometry;
      !$e || !He || (Array.isArray(He.points) && ($e.points = He.points.map((se) => L(se, Ce, P, S)), Le = !0), Array.isArray(He.rawPoints) && ($e.rawPoints = He.rawPoints.map((se) => L(se, Ce, P, S)), Le = !0), Array.isArray(He.processedPoints) && ($e.processedPoints = He.processedPoints.map((se) => L(se, Ce, P, S)), Le = !0));
    }), Le && ye) {
      const je = C().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === ie);
      je && (je.frame = null);
    }
    return Le;
  }
  function F(p, P, S, M = null) {
    const W = he(p);
    if (!W) return !1;
    const ye = de().find((Pe) => String((Pe == null ? void 0 : Pe.id) || "").trim() === W);
    if (!ye) return !1;
    const D = M && typeof M == "object" ? M : ye, ie = (D == null ? void 0 : D.transform) || {}, Ne = Number(ie.du || 0) + Number(P || 0), xe = Ie(Number(ie.dv || 0) + Number(S || 0), -1, 1);
    return ye.transform || (ye.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ye.transform.du = Ne, ye.transform.dv = xe, !0;
  }
  function x(p, P = 1, S = null) {
    const M = he(p);
    if (!M) return !1;
    const W = de().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === M);
    if (!W) return !1;
    const ye = S && typeof S == "object" ? S : W, D = (ye == null ? void 0 : ye.transform) || {}, ie = Math.max(0.01, Number(D.scale || 1)), Ne = Ie(ie * Math.max(0.01, Number(P || 1)), 0.01, 100);
    return W.transform || (W.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), W.transform.scale = Ne, !0;
  }
  function R() {
    return fe();
  }
  function Z(p) {
    var P;
    return !p || typeof p != "object" ? !1 : o ? ((P = p.source) == null ? void 0 : P.kind) === "port" : String(p.id || "") === $d || String(p.source_kind || "") === fN;
  }
  function me(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function ue(p) {
    return Z(p) && me(p) ? Gm : 1;
  }
  function ve(p, P, S = 1, M = 0) {
    if (!p || typeof p != "object") return p;
    const W = Number((P == null ? void 0 : P.u) || 0), ye = Number((P == null ? void 0 : P.v) || 0), D = v(Number(p.u || 0), W), ie = Number(p.v || 0) - ye, Ne = Math.max(0.02, Number(S || 1)), xe = Number(M || 0) * _r, Pe = Math.cos(xe), Ce = Math.sin(xe), Le = D / Ne, je = ie / Ne, Ke = Le * Pe + je * Ce, $e = -Le * Ce + je * Pe;
    return {
      ...p,
      u: ((W + Ke) % 1 + 1) % 1,
      v: ye + $e
    };
  }
  function Se(p) {
    const P = (p == null ? void 0 : p.bbox) || null, S = (p == null ? void 0 : p.transform) || {};
    return P ? {
      u: (((Number(P.u0 || 0) + Number(P.u1 || 0)) * 0.5 + Number(S.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(P.v0 || 0) + Number(P.v1 || 0)) * 0.5 + Number(S.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function be(p) {
    var Ne, xe, Pe, Ce;
    const P = (p == null ? void 0 : p.bbox) || null;
    if (!P) return [];
    const S = {
      u: (Number(P.u0 || 0) + Number(P.u1 || 0)) * 0.5,
      v: (Number(P.v0 || 0) + Number(P.v1 || 0)) * 0.5
    }, M = Math.max(0.01, Number(((Ne = p == null ? void 0 : p.transform) == null ? void 0 : Ne.scale) || 1)), W = Number(((xe = p == null ? void 0 : p.transform) == null ? void 0 : xe.rot_deg) || 0), ye = Number(((Pe = p == null ? void 0 : p.transform) == null ? void 0 : Pe.du) || 0), D = Number(((Ce = p == null ? void 0 : p.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(P.u0 || 0), v: Number(P.v0 || 0) },
      { u: Number(P.u1 || 0), v: Number(P.v0 || 0) },
      { u: Number(P.u1 || 0), v: Number(P.v1 || 0) },
      { u: Number(P.u0 || 0), v: Number(P.v1 || 0) }
    ].map((Le) => I(L(Le, S, M, W), ye, D));
  }
  function Q(p) {
    const P = he((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), S = (p == null ? void 0 : p.transform) || {}, M = (p == null ? void 0 : p.bbox) || {}, W = `${P}:${r.mode}:${u()}:${M.u0}:${M.v0}:${M.u1}:${M.v1}:${S.du}:${S.dv}:${S.rot_deg}:${S.scale}`;
    if (r.mode === "frame") {
      const ye = a(), D = ye ? c(ye) : null;
      return `${W}:frame:${String((ye == null ? void 0 : ye.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ge(p) {
    const P = String((p == null ? void 0 : p.id) || ""), S = k(p) ? "frame" : re(p) ? "sticker" : "item", M = $(p), W = [
      S,
      P,
      r.mode,
      Number((M == null ? void 0 : M.yaw_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.pitch_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.hFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.vFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.rot_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.roll_deg) || 0).toFixed(4),
      Dr(M),
      _(p) && w(p)
    ].join(":");
    if (r.mode === "frame") {
      const ye = a(), D = ye ? c(ye) : null;
      return `${W}:frame:${String((ye == null ? void 0 : ye.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Y() {
    A().forEach((P, S) => {
      P.type === "sticker" && P.item && (P.item.z_index = S), P.type === "strokeGroup" && P.item && (P.item.z_index = S), P.type === "rasterObject" && P.item && (P.item.z_index = S);
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
        sceneStickerShown: w
      } = p);
    },
    getList: g,
    skyStickers: h,
    isSceneSticker: _,
    isUploadingSticker: ee,
    poseOf: $,
    writePose: te,
    getPaintingGroupList: C,
    makeStrokeGroupSelectionId: G,
    makeRasterObjectSelectionId: ne,
    parseRasterObjectSelectionId: he,
    ensurePaintingGroupEntry: ce,
    getFrameCornersUv: oe,
    ensureGroupFrame: j,
    getDisplayListObjects: A,
    getOrderedPaintGroupIds: H,
    getOrderedDisplayListObjects: T,
    getSelectableStrokeGroupItems: B,
    getSelectableRasterObjectItems: pe,
    cutoutStickers: ae,
    getCutoutSelectableItems: K,
    isShotItem: k,
    isStickerItem: re,
    getRasterObjectList: de,
    getRasterObjectItem: _e,
    isRasterObjectItem: we,
    getStrokeGroupItem: N,
    isStrokeGroupItem: le,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: y,
    shortestWrappedDelta: v,
    getStrokeGroupCenterUv: V,
    applyStrokeGroupOffset: J,
    applyStrokeGroupTransform: O,
    applyRasterObjectOffset: F,
    applyRasterObjectTransform: x,
    getNextStickerZIndex: R,
    isExternalSticker: Z,
    isStickerHidden: me,
    getStickerDisplayAlpha: ue,
    inverseTransformErpPointAround: ve,
    getRasterObjectCenterUv: Se,
    getRasterObjectTransformedErpPoints: be,
    getRasterObjectGeomCacheKey: Q,
    getSceneItemGeomCacheKey: ge,
    normalizeDisplayZIndices: Y
  };
}
function n2(e) {
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
  let c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K;
  function k() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const P = C(p);
    if (P) return P;
    const S = ee(p);
    return S || (o ? w().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null : h().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null);
  }
  function re() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], P = [], S = /* @__PURE__ */ new Set();
    return p.forEach((M) => {
      const W = String(M || "").trim();
      if (!W || S.has(W)) return;
      S.add(W);
      const ye = W === String(t.selectedId || "") ? k() : C(W) || ee(W) || (o ? w().find((D) => String((D == null ? void 0 : D.id) || "") === W) : h().find((D) => String((D == null ? void 0 : D.id) || "") === W));
      ye && P.push(ye);
    }), P;
  }
  function de(p = null) {
    const P = Array.isArray(p) ? p : re();
    if (!P || P.length < 2) return null;
    const S = P.map((xe) => E(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!S.length) return null;
    const M = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.x) || 0))), W = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.y) || 0))), ye = Math.min(...M), D = Math.max(...M), ie = Math.min(...W), Ne = Math.max(...W);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ye + D) * 0.5, y: (ie + Ne) * 0.5 },
      corners: [
        { x: ye, y: ie },
        { x: D, y: ie },
        { x: D, y: Ne },
        { x: ye, y: Ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ye + D) * 0.5, y: ie, a: { x: ye, y: ie }, b: { x: D, y: ie } },
        { edge: "right", x: D, y: (ie + Ne) * 0.5, a: { x: D, y: ie }, b: { x: D, y: Ne } },
        { edge: "bottom", x: (ye + D) * 0.5, y: Ne, a: { x: D, y: Ne }, b: { x: ye, y: Ne } },
        { edge: "left", x: ye, y: (ie + Ne) * 0.5, a: { x: ye, y: Ne }, b: { x: ye, y: ie } }
      ],
      rotateStemBase: { x: (ye + D) * 0.5, y: ie },
      rotateHandle: { x: (ye + D) * 0.5, y: ie - 30 }
    };
  }
  function _e(p) {
    const P = String((p == null ? void 0 : p.id) || "").trim();
    return !!P && Array.isArray(t.selectedIds) && t.selectedIds.includes(P);
  }
  function we() {
    const p = k();
    return p ? ce(p) || G(p) ? "stroke" : he(p) ? "frame" : "image" : null;
  }
  function N(p) {
    if (!p || typeof p != "object") return !1;
    if (ce(p)) {
      const P = String(p.actionGroupId || p.id || "").trim(), S = _().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === P);
      return (S == null ? void 0 : S.locked) === !0;
    }
    if (G(p)) {
      const P = A(p.rasterObjectId || p.id || ""), S = $().find((M) => String((M == null ? void 0 : M.id) || "").trim() === P);
      return (S == null ? void 0 : S.locked) === !0;
    }
    return p.locked === !0;
  }
  function le(p = null) {
    const P = Array.isArray(p) ? p : re();
    return P.length > 0 && P.every((S) => N(S));
  }
  function b(p, P) {
    const S = P === !0;
    if (!p || typeof p != "object") return !1;
    if (ce(p)) {
      const M = String(p.actionGroupId || p.id || "").trim(), W = _().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim() === M);
      return !W || W.locked === S ? !1 : (W.locked = S, !0);
    }
    if (G(p)) {
      const M = A(p.rasterObjectId || p.id || ""), W = $().find((ye) => String((ye == null ? void 0 : ye.id) || "").trim() === M);
      return !W || W.locked === S ? !1 : (W.locked = S, !0);
    }
    return p.locked === S ? !1 : (p.locked = S, !0);
  }
  function y() {
    if (r) return;
    const p = re();
    if (!p.length) return;
    const P = !le(p);
    let S = !1;
    p.forEach((M) => {
      b(M, P) && (S = !0);
    }), S && (T(), d(), ae(), K(), B());
  }
  function I(p) {
    ve(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && fe(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && he(p) ? s.active.selected_shot_id = p.id || null : p ? he(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function v(p, P = null) {
    const S = [], M = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((D) => {
      const ie = String((D == null ? void 0 : D.id) || "").trim();
      !ie || M.has(ie) || (M.add(ie), S.push(ie));
    }), t.selectedIds = S, ve(), a.selection = null;
    const W = String(P || "").trim();
    t.selectedId = W && S.includes(W) ? W : S[S.length - 1] || null;
    const ye = k();
    s.active.selected_sticker_id = ye && fe(ye) && ye.id || null, ye && he(ye) ? s.active.selected_shot_id = ye.id || null : S.length || (s.active.selected_shot_id = null);
  }
  function V() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((S, M) => ({
      kind: "frame",
      item: S,
      label: String((S == null ? void 0 : S.label) || `Frame ${M + 1}`)
    })), P = f().map((S, M) => {
      var ye, D;
      const W = z(S) ? String(S.id || $d) : String(((D = (ye = s.assets) == null ? void 0 : ye[S.asset_id]) == null ? void 0 : D.name) || S.asset_id || S.id || `Image ${M + 1}`);
      return {
        kind: "image",
        item: S,
        label: W
      };
    });
    return [...p, ...P];
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
    !p || !z(p) || (p.visible = q(p), Q(), oe(), T(), d(), K(), ae(), B());
  }
  function F() {
    if (r || l !== "stickers") return;
    const p = k();
    if (!p || !z(p)) return;
    const P = p.initial_pose;
    if (!P || typeof P != "object") return;
    p.yaw_deg = Number(P.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(P.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(P.hFOV_deg ?? p.hFOV_deg ?? 30);
    const S = te(po, () => {
      B();
    });
    S && (S.complete || S.naturalWidth || S.width) ? p.vFOV_deg = u(
      Number(P.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    ) : p.vFOV_deg = Number(P.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(P.rot_deg ?? p.rot_deg ?? 0), T(), d(), K(), ae(), B();
  }
  function x(p) {
    if (!p || !z(p)) return null;
    const P = p.initial_pose;
    if (!P || typeof P != "object") return null;
    const S = {
      yaw_deg: Number(P.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(P.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(P.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(P.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(P.rot_deg ?? p.rot_deg ?? 0)
    }, M = te(po, () => {
      B();
    });
    return M && (M.complete || M.naturalWidth || M.width) && (S.vFOV_deg = u(
      S.hFOV_deg,
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    )), S;
  }
  function R() {
    const p = k();
    if (!p || !z(p)) return !1;
    const P = x(p);
    if (!P) return !1;
    const S = (M, W) => Math.abs(Number(M || 0) - Number(W || 0)) <= 1e-4;
    return !(S(p.yaw_deg, P.yaw_deg) && S(p.pitch_deg, P.pitch_deg) && S(p.hFOV_deg, P.hFOV_deg) && S(p.vFOV_deg, P.vFOV_deg) && S(p.rot_deg, P.rot_deg));
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
    }), t.selectedId = null, t.selectedIds = [], ve(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function me() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function ue(p) {
    I(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function ve() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Se(p) {
    return !!p && !r && !p.locked;
  }
  function be() {
    if (l !== "cutout") return;
    const p = m();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function Q() {
    var P;
    const p = k();
    (ne(p) && !pe(p) || t.selectedId === dd && X() && !c() || we() === "stroke" && !j()) && I(null), ((P = me()) == null ? void 0 : P.visible) === !1 && ve();
  }
  function ge() {
    if (r) return;
    const p = re();
    if (!k() || p.length === 0 || p.some((ie) => N(ie))) return;
    U();
    const S = g(), M = new Set(p.map((ie) => fe(ie) ? `sticker:${String(ie.id || "")}` : G(ie) ? `rasterObject:${A(ie.rasterObjectId || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || ie.id || "")}`)), W = [], ye = [];
    if (S.forEach((ie) => {
      var xe, Pe;
      const Ne = ie.type === "sticker" ? `sticker:${String(((xe = ie.item) == null ? void 0 : xe.id) || "")}` : ie.type === "rasterObject" ? `rasterObject:${String(((Pe = ie.item) == null ? void 0 : Pe.id) || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || "")}`;
      M.has(Ne) ? W.push(ie) : ye.push(ie);
    }), !W.length || W[W.length - 1] === S[S.length - 1]) return;
    [...ye, ...W].forEach((ie, Ne) => {
      ie.type === "sticker" && ie.item && (ie.item.z_index = Ne), ie.type === "strokeGroup" && ie.item && (ie.item.z_index = Ne), ie.type === "rasterObject" && ie.item && (ie.item.z_index = Ne);
    }), oe(), T(), d(), ae(), B();
  }
  function Y() {
    if (r) return;
    const p = re();
    if (!k() || p.length === 0 || p.some((ie) => N(ie))) return;
    U();
    const S = g(), M = new Set(p.map((ie) => fe(ie) ? `sticker:${String(ie.id || "")}` : G(ie) ? `rasterObject:${A(ie.rasterObjectId || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || ie.id || "")}`)), W = [], ye = [];
    if (S.forEach((ie) => {
      var xe, Pe;
      const Ne = ie.type === "sticker" ? `sticker:${String(((xe = ie.item) == null ? void 0 : xe.id) || "")}` : ie.type === "rasterObject" ? `rasterObject:${String(((Pe = ie.item) == null ? void 0 : Pe.id) || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || "")}`;
      M.has(Ne) ? W.push(ie) : ye.push(ie);
    }), !W.length || W[0] === S[0]) return;
    [...W, ...ye].forEach((ie, Ne) => {
      ie.type === "sticker" && ie.item && (ie.item.z_index = Ne), ie.type === "strokeGroup" && ie.item && (ie.item.z_index = Ne), ie.type === "rasterObject" && ie.item && (ie.item.z_index = Ne);
    }), oe(), T(), d(), ae(), B();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: w,
        getDisplayListObjects: g,
        getList: h,
        getPaintingGroupList: _,
        getRasterObjectItem: ee,
        getRasterObjectList: $,
        getStickerUiImage: te,
        getStrokeGroupItem: C,
        hasCamera: X,
        isExternalSticker: z,
        isRasterObjectItem: G,
        isSceneSticker: ne,
        isShotItem: he,
        isStickerHidden: q,
        isStickerItem: fe,
        isStrokeGroupItem: ce,
        markObjectVisualsDirty: oe,
        normalizeDisplayZIndices: U,
        objectGeom: E,
        paintingShown: j,
        parseRasterObjectSelectionId: A,
        poseOf: H,
        pushHistory: T,
        requestDraw: B,
        sceneStickerShown: pe,
        updateSelectionMenu: ae,
        updateSidePanel: K
      } = p);
    },
    getSelected: k,
    getSelectedItems: re,
    getMultiSelectionGeom: de,
    isItemSelected: _e,
    getSelectedKind: we,
    isItemLocked: N,
    areAllSelectedItemsLocked: le,
    toggleSelectedLock: y,
    setSelectedItem: I,
    setSelectedItems: v,
    getCutoutInspectorItems: V,
    getSelectionItemIcon: L,
    getSelectionItemLabelData: J,
    toggleSelectedExternalStickerVisibility: O,
    restoreSelectedToInitialPose: F,
    canRestoreSelectedToInitial: R,
    clearSelection: Z,
    selectedWorldSticker: me,
    selectWorldSticker: ue,
    clearWorldSelection: ve,
    worldStickerEditable: Se,
    applyInitialCutoutFocus: be,
    releaseHiddenSelection: Q,
    bringSelectedToFront: ge,
    sendSelectedToBack: Y
  };
}
function r2(e) {
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
  function w() {
    const re = G({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !re || re.length !== 4 ? !1 : re[0].y >= re[3].y;
  }
  function g() {
    return Km({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const k = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return k.some((re, de) => re !== f.key[de]) && (f = { key: k, projection: Um(g(), r.width, r.height) }), f.projection;
  }
  function _(k) {
    const re = h().project(k);
    return re.z > 1e-4 ? re : null;
  }
  function ee(k, re) {
    return h().ray(k, re);
  }
  function $() {
    const k = r.width, re = r.height, de = 2;
    if (k / Math.max(re, 1) >= de) {
      const b = re, y = b * de;
      return { x: (k - y) * 0.5, y: 0, w: y, h: b };
    }
    const we = k, N = we / de;
    return { x: 0, y: (re - N) * 0.5, w: we, h: N };
  }
  function te(k) {
    return {
      lon: Math.atan2(k.x, k.z),
      lat: Math.asin(Ie(k.y, -1, 1))
    };
  }
  function C(k, re = null) {
    const { lon: de, lat: _e } = te(k), we = $();
    let N = we.x + (de / (2 * Math.PI) + 0.5) * we.w;
    const le = we.y + (0.5 - _e / Math.PI) * we.h;
    if (re !== null) {
      for (; N - re > we.w / 2; ) N -= we.w;
      for (; N - re < -we.w / 2; ) N += we.w;
    }
    return { x: N, y: le, z: 1 };
  }
  function X(k) {
    const re = c(k), de = go(
      Number(re.yaw_deg || 0),
      Number(re.pitch_deg || 0),
      Number(re.rot_deg || re.roll_deg || 0)
    ), _e = Math.tan(Ie(Number(re.hFOV_deg || 20), 0.1, 179) * 0.5 * _r), we = Math.tan(Ie(Number(re.vFOV_deg || 20), 0.1, 179) * 0.5 * _r);
    return {
      centerDir: de.fwd,
      right: de.right,
      up: de.up,
      tanX: _e,
      tanY: we
    };
  }
  function z(k, re, de) {
    return MN(Np(Np(k.centerDir, Ap(k.right, re)), Ap(k.up, de)));
  }
  function G(k) {
    const re = X(k);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: _e, v: we }) => z(re, _e * re.tanX, we * re.tanY));
  }
  function ne(k, re, de) {
    const _e = X(k), we = (re * 2 - 1) * _e.tanX, N = (1 - de * 2) * _e.tanY;
    return z(_e, we, N);
  }
  function he(k) {
    const re = t.width / Math.max(1, r.width), de = t.height / Math.max(1, r.height);
    return { x: k.x * re, y: k.y * de, w: k.w * re, h: k.h * de };
  }
  function q(k, re = null, de = null, _e = null) {
    if (n.mode === "frame") {
      const we = re || a();
      if (!we) return [];
      const N = de || l(we);
      return T(k, we, N);
    }
    return j(k, _e);
  }
  function fe(k, re = null, de = null, _e = null, we = null) {
    if (!k) return null;
    if (n.mode === "unwrap") {
      const le = j([k], we);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const N = oe(k);
    return N ? d(N, re, de, _e) : null;
  }
  function ce(k, re) {
    if (!k || !re) return null;
    const de = Number(re.x || 0), _e = Number(re.y || 0);
    return ne(k, de, _e);
  }
  function oe(k) {
    if (!k) return null;
    const re = (Number(k.u || 0) - 0.5) * (2 * Math.PI), de = (0.5 - Number(k.v || 0)) * Math.PI, _e = Math.cos(de);
    return Hl(_e * Math.sin(re), Math.sin(de), _e * Math.cos(re));
  }
  function U(k, re) {
    if (!k || !re) return null;
    const de = X(k), _e = Ec(re, de.centerDir);
    if (!Number.isFinite(_e) || _e <= 1e-6) return null;
    const we = Ec(re, de.right) / _e, N = Ec(re, de.up) / _e;
    return {
      x: (we / Math.max(1e-6, de.tanX) + 1) * 0.5,
      y: (1 - N / Math.max(1e-6, de.tanY)) * 0.5
    };
  }
  function E(k) {
    if (!Array.isArray(k) || k.length < 3) return [];
    if (n.mode === "unwrap") {
      const de = $();
      return k.map((_e) => ({
        x: de.x + Number(_e.u || 0) * de.w,
        y: de.y + Number(_e.v || 0) * de.h
      }));
    }
    const re = k.map((de) => _(oe(de))).filter(Boolean);
    return re.every((de) => Number(de.z || 0) > 0) ? re.map((de) => ({ x: Number(de.x || 0), y: Number(de.y || 0) })) : [];
  }
  function j(k, re = null) {
    if (!Array.isArray(k) || k.length < 1) return [];
    if (n.mode === "unwrap") {
      const _e = $();
      return k.map((we) => {
        const N = (Number(we.u || 0) % 1 + 1) % 1, le = re == null ? N : Number(re || 0) + u(N, re);
        return {
          x: _e.x + le * _e.w,
          y: _e.y + Number(we.v || 0) * _e.h
        };
      });
    }
    const de = k.map((_e) => _(oe(_e))).filter(Boolean);
    return de.every((_e) => Number(_e.z || 0) > 0) ? de.map((_e) => ({ x: Number(_e.x || 0), y: Number(_e.y || 0) })) : [];
  }
  function A(k, re = 160) {
    if (!Array.isArray(k) || k.length < 3) return !1;
    for (let de = 0; de < k.length; de += 1) {
      const _e = k[de], we = k[(de + 1) % k.length];
      if (!_e || !we || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || !Number.isFinite(we.x) || !Number.isFinite(we.y) || Math.hypot(Number(we.x) - Number(_e.x), Number(we.y) - Number(_e.y)) > re) return !1;
    }
    return !0;
  }
  function H(k, re, de) {
    if (!Array.isArray(k) || k.length < 3 || !re || !de) return [];
    const _e = [];
    for (const we of k) {
      const N = oe(we), le = U(re, N);
      if (!le) return [];
      _e.push({
        x: Number(de.x || 0) + Number(le.x || 0) * Number(de.w || 0),
        y: Number(de.y || 0) + Number(le.y || 0) * Number(de.h || 0)
      });
    }
    return A(_e, Math.max(80, Math.max(de.w, de.h) * 0.75)) ? _e : [];
  }
  function T(k, re, de) {
    if (!Array.isArray(k) || k.length < 1 || !re || !de) return [];
    const _e = [];
    for (const we of k) {
      const N = oe(we), le = U(re, N);
      le && _e.push({
        x: Number(de.x || 0) + Number(le.x || 0) * Number(de.w || 0),
        y: Number(de.y || 0) + Number(le.y || 0) * Number(de.h || 0)
      });
    }
    return _e;
  }
  function B(k) {
    const re = r.getBoundingClientRect();
    return {
      x: (k.clientX - re.left) / re.width * r.width,
      y: (k.clientY - re.top) / re.height * r.height
    };
  }
  function pe(k) {
    const re = r.getBoundingClientRect();
    return {
      x: Number(k.clientX) - Number(re.left || 0),
      y: Number(k.clientY) - Number(re.top || 0)
    };
  }
  function ae(k, re = performance.now()) {
    if (n.mode === "unwrap") {
      const N = $(), le = (k.x - N.x) / Math.max(1, N.w), b = (k.y - N.y) / Math.max(1, N.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Ie(b, 0, 1),
        t: Number(re || 0)
      };
    }
    const de = ee(k.x, k.y), { lon: _e, lat: we } = te(de);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_e / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - we / Math.PI, 0, 1),
      t: Number(re || 0)
    };
  }
  function K(k, re, de = performance.now()) {
    const _e = l(re);
    if (!_e) return null;
    const we = {
      x: (Number(k.x) - _e.x) / Math.max(1, _e.w),
      y: (Number(k.y) - _e.y) / Math.max(1, _e.h)
    };
    if (we.x < 0 || we.x > 1 || we.y < 0 || we.y > 1) return null;
    const N = ce(re, we);
    if (!N) return null;
    const { lon: le, lat: b } = te(N);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - b / Math.PI, 0, 1),
      t: Number(de || 0)
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
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: h,
    projectDir: _,
    screenToWorldDir: ee,
    getUnwrapRect: $,
    projectDirUnwrap: C,
    getStickerFrame: X,
    stickerDirFromFrame: z,
    stickerCornersDir: G,
    stickerSampleDir: ne,
    stickerCornerOrderSanity: w,
    projectEditorPoints: q,
    projectErpPointToEditor: fe,
    frameLocalPointToWorldDir: ce,
    erpPointToWorldDir: oe,
    worldDirToFrameLocalPoint: U,
    projectLassoPointsToCurrentView: E,
    projectErpLassoPointsToFrameRect: H,
    screenPos: B,
    screenPosCss: pe,
    screenPosToErpPoint: ae,
    screenPosToFrameAsErpPoint: K,
    deviceRect: he
  };
}
function i2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T;
  function B(N, le) {
    const b = String(N.actionGroupId || N.id || "").trim(), y = $(b, N.layerKind), I = a(b, N.layerKind, y), v = (I == null ? void 0 : I.centerUv) || ee(b, N.layerKind, y), V = n.mode === "unwrap" ? Number((v == null ? void 0 : v.u) || 0) : null, L = [], J = n.mode === "frame" ? l() : null, O = J ? u(J) : null;
    for (const Q of y) {
      const ge = (Q == null ? void 0 : Q.geometry) || null, Y = (ge == null ? void 0 : ge.geometryKind) === "lasso_fill" ? ge == null ? void 0 : ge.points : (ge == null ? void 0 : ge.processedPoints) || (ge == null ? void 0 : ge.rawPoints) || (ge == null ? void 0 : ge.points) || [], p = oe(Y, J, O, V).filter((M) => Number.isFinite(M == null ? void 0 : M.x) && Number.isFinite(M == null ? void 0 : M.y));
      if (!p.length) continue;
      const P = c(String((Q == null ? void 0 : Q.toolKind) || "pen")), S = Tn[P] || Tn[Er];
      L.push({
        points: p,
        closed: String((ge == null ? void 0 : ge.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Q == null ? void 0 : Q.size) || 10) * Math.max(0.1, Number((S == null ? void 0 : S.sizeScale) ?? 1)) + 10),
        layerKind: String((Q == null ? void 0 : Q.layerKind) || N.layerKind || "paint")
      });
    }
    const F = U(v, null, J, O, V);
    if (!F) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const R = d(I).map((Q) => U(Q, F.x, J, O, V)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y)).map((Q) => ({ x: Number(Q.x || 0), y: Number(Q.y || 0) }));
    if (R.length < 4) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const Z = (Q, ge) => ({
      x: (Number((Q == null ? void 0 : Q.x) || 0) + Number((ge == null ? void 0 : ge.x) || 0)) * 0.5,
      y: (Number((Q == null ? void 0 : Q.y) || 0) + Number((ge == null ? void 0 : ge.y) || 0)) * 0.5,
      a: Q,
      b: ge
    }), me = Z(R[0], R[1]), ue = Z(R[1], R[2]), ve = Z(R[2], R[3]), Se = Z(R[3], R[0]), be = {
      kind: "strokeGroup",
      center: { x: Number(F.x || 0), y: Number(F.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...me },
        { edge: "right", ...ue },
        { edge: "bottom", ...ve },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: me.x, y: me.y },
      rotateHandle: { x: me.x, y: me.y - 30 },
      strokePaths: L,
      visible: !0
    };
    return n._strokeGeomCache.set(le, be), be;
  }
  function pe(N, le) {
    const b = n.mode === "frame" ? l() : null, y = b ? u(b) : null, I = f(N), v = n.mode === "unwrap" ? Number((I == null ? void 0 : I.u) || 0) : null, V = U(I, null, b, y, v), J = w(N).map((R) => U(R, (V == null ? void 0 : V.x) ?? null, b, y, v)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
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
  function ae(N, le = null, b = null, y = null, I = {}) {
    if (n.mode === "frame") {
      const F = b || l(), x = y || u(F);
      if (!F || !x) return null;
      const R = F ? T(F, N) : null;
      return R ? {
        x: Number(x.x || 0) + Number(R.x || 0) * Number(x.w || 0),
        y: Number(x.y || 0) + Number(R.y || 0) * Number(x.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ce(N, le);
    const v = 1e-4, V = o().project(N, v);
    if (!Number.isFinite(V.z) || V.z <= v && !(I != null && I.clipBehind)) return null;
    const L = r.width, J = r.height, O = Math.max(L, J) * 2;
    return {
      x: Ie(V.x, -O, L + O),
      y: Ie(V.y, -O, J + O),
      z: Math.max(V.z, v),
      rawZ: V.z,
      clipped: V.z <= v
    };
  }
  function K(N, le = []) {
    if (n.mode !== "pano" || G(N)) return 1;
    const b = le.map((y) => Number((y == null ? void 0 : y.rawZ) ?? (y == null ? void 0 : y.z))).filter((y) => Number.isFinite(y));
    return b.length ? xN(0.035, 0.2, Math.min(...b)) : 1;
  }
  function k(N) {
    if (X(N) && !E(N)) return { visible: !1 };
    const le = q(N), b = Dn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), y = n.mode === "frame" ? l() : null, I = y ? u(y) : null, v = n.mode === "pano" && (G(N) || z(N)), V = v ? { clipBehind: !0 } : null, L = ae(b, null, y, I, V);
    if (!L) return { visible: !1 };
    const J = h(N), F = j(N).map((W) => ae(W, L.x, y, I, V)).filter((W) => Number.isFinite(W == null ? void 0 : W.x) && Number.isFinite(W == null ? void 0 : W.y));
    if (F.length < 4) return { visible: !1 };
    const x = A(J, 0, J.tanY), R = A(J, 0, J.tanY + Math.max(J.tanY * 0.43, 0.053)), Z = ae(x, L.x, y, I, V);
    if (!Z) return { visible: !1 };
    const me = ae(R, (Z == null ? void 0 : Z.x) ?? L.x, y, I, V), ue = ((me == null ? void 0 : me.x) ?? Z.x) - Z.x, ve = ((me == null ? void 0 : me.y) ?? Z.y) - Z.y, Se = Math.hypot(ue, ve) || 1, be = {
      x: Z.x + ue / Se * 30,
      y: Z.y + ve / Se * 30
    }, Q = ae(A(J, 0, J.tanY), L.x, y, I, V), ge = ae(A(J, J.tanX, 0), L.x, y, I, V), Y = ae(A(J, 0, -J.tanY), L.x, y, I, V), p = ae(A(J, -J.tanX, 0), L.x, y, I, V);
    if (!Q || !ge || !Y || !p) return { visible: !1 };
    const P = [
      L,
      ...F,
      Z,
      me,
      Q,
      ge,
      Y,
      p
    ];
    if (v && !P.some((W) => Number((W == null ? void 0 : W.rawZ) ?? (W == null ? void 0 : W.z)) > 1e-4)) return { visible: !1 };
    const S = K(N, P), M = [
      {
        edge: "top",
        x: Q.x,
        y: Q.y,
        a: { x: F[0].x, y: F[0].y },
        b: { x: F[1].x, y: F[1].y }
      },
      {
        edge: "right",
        x: ge.x,
        y: ge.y,
        a: { x: F[1].x, y: F[1].y },
        b: { x: F[2].x, y: F[2].y }
      },
      {
        edge: "bottom",
        x: Y.x,
        y: Y.y,
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
      corners: F.map((W) => ({ x: W.x, y: W.y })),
      edgeMidpoints: M,
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: be,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: S,
      visible: !0
    };
  }
  function re(N) {
    if (t && z(N) && te()) return { visible: !1 };
    if (!he() && (ne(N) || C(N))) return { visible: !1 };
    if (ne(N)) {
      const I = String(N.actionGroupId || N.id || "").trim(), v = _(I, N.layerKind), V = n._strokeGeomCache.get(v);
      return V || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), B(N, v));
    }
    if (C(N)) {
      const I = m(N), v = n._strokeGeomCache.get(I);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), pe(N, I));
    }
    const le = g(N), b = n._strokeGeomCache.get(le);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const y = k(N);
    return n._strokeGeomCache.set(le, y), y;
  }
  function de(N, le, b, y = null) {
    const I = [];
    for (let v = 0; v <= b; v += 1) {
      const V = v / b;
      let L = 0, J = 0;
      le === 0 ? (L = V, J = 0) : le === 1 ? (L = 1, J = V) : le === 2 ? (L = 1 - V, J = 1) : (L = 0, J = 1 - V);
      const O = H(N, L, J), F = n.mode === "unwrap" ? ce(O, y) : fe(O);
      F && I.push(F);
    }
    return I;
  }
  function _e() {
    const N = [...Array.isArray(i.shots) ? i.shots : []], le = [...s()].sort((b, y) => Number(b.z_index || 0) - Number(y.z_index || 0));
    return [...N, ...le];
  }
  function we() {
    const N = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((b, y) => Number(y.z_index || 0) - Number(b.z_index || 0)), ...N];
  }
  return {
    connect(N) {
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
        getRasterObjectTransformedErpPoints: w,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: h,
        getStrokeGeomCacheKey: _,
        getStrokeGroupCenterUv: ee,
        getStrokeGroupStrokes: $,
        isFreeSpaceView: te,
        isRasterObjectItem: C,
        isSceneSticker: X,
        isShotItem: z,
        isStickerItem: G,
        isStrokeGroupItem: ne,
        paintingShown: he,
        poseOf: q,
        projectDir: fe,
        projectDirUnwrap: ce,
        projectEditorPoints: oe,
        projectErpPointToEditor: U,
        sceneStickerShown: E,
        stickerCornersDir: j,
        stickerDirFromFrame: A,
        stickerSampleDir: H,
        worldDirToFrameLocalPoint: T
      } = N);
    },
    projectSceneItemDir: ae,
    objectGeom: re,
    sampleStickerEdge: de,
    getCutoutSelectableItemsForDisplay: _e,
    getCutoutSelectableItemsForHit: we
  };
}
const da = /* @__PURE__ */ new Map();
function o2(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q;
  function fe(v = r.interaction) {
    const V = String((v == null ? void 0 : v.kind) || "");
    if (V === "paint_stroke" || V === "paint_lasso_fill" || V === "move_stroke_group" || V === "scale_stroke_group" || V === "rotate_stroke_group" || V === "move_raster_object" || V === "scale_raster_object") return !0;
    if (V === "move_multi") {
      const L = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, J = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return L || J;
    }
    return !1;
  }
  function ce() {
    var V, L, J, O;
    let v = null;
    try {
      const F = g(), x = ((O = (J = (L = (V = r.paintEngine) == null ? void 0 : V.getErpTarget) == null ? void 0 : L.call(V, F)) == null ? void 0 : J.displayPaint) == null ? void 0 : O.canvas) || null;
      x && (v = {
        source: x,
        revision: `${h()}:${oe()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function oe() {
    var O, F, x, R, Z, me, ue;
    const v = r.interaction, V = String((v == null ? void 0 : v.kind) || "");
    if (!fe(v)) return "";
    if (V === "paint_stroke" || V === "paint_lasso_fill") {
      const ve = ((O = v == null ? void 0 : v.stroke) == null ? void 0 : O.geometry) || null, Se = String(((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.layerKind) || ""), be = ((x = ve == null ? void 0 : ve.rawPoints) == null ? void 0 : x.length) ?? ((R = ve == null ? void 0 : ve.points) == null ? void 0 : R.length) ?? 0, Q = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${Se || "paint"}_${V}_live${Q}_${be}_${r.livePaintInteractionRevision}`;
    }
    const L = String(((Z = v == null ? void 0 : v.item) == null ? void 0 : Z.actionGroupId) || ""), J = String(((me = v == null ? void 0 : v.item) == null ? void 0 : me.rasterObjectId) || ((ue = v == null ? void 0 : v.item) == null ? void 0 : ue.id) || "");
    return `_${V}_${L || J || "active"}_${r.livePaintInteractionRevision}`;
  }
  function U(v, V = null) {
    const L = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!L) return null;
    const J = s.get(L);
    if (J)
      return J.complete || J.width || J.naturalWidth, J;
    const O = new Image();
    return O.onload = () => {
      typeof V == "function" && V();
    }, O.src = L, s.set(L, O), O;
  }
  function E(v) {
    const V = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!V) return null;
    const L = o.get(V);
    if (L) return L.ready ? L : null;
    const J = U(v, () => {
      const ue = o.get(V);
      ue && (ue.ready = !1), ne({ localOnly: !0 });
    });
    if (!J || !(J.complete || J.width || J.naturalWidth)) return null;
    const O = Number(J.naturalWidth || J.width || 0), F = Number(J.naturalHeight || J.height || 0);
    if (O < 1 || F < 1) return null;
    const x = rn({ label: "editor.image-pixels" });
    x.width = O, x.height = F;
    const R = x.getContext("2d", { willReadFrequently: !0 });
    if (!R) return null;
    R.clearRect(0, 0, O, F), R.drawImage(J, 0, 0, O, F);
    const Z = R.getImageData(0, 0, O, F).data, me = { canvas: x, width: O, height: F, alpha: Z, ready: !0 };
    return o.set(V, me), me;
  }
  function j(v, V) {
    if (!v || !V) return null;
    const L = (v == null ? void 0 : v.bbox) || null;
    if (!L) return null;
    const J = (v == null ? void 0 : v.transform) || {}, O = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, F = {
      u: ((Number(V.u || 0) - Number(J.du || 0)) % 1 + 1) % 1,
      v: Number(V.v || 0) - Number(J.dv || 0)
    }, x = $(
      F,
      O,
      Number(J.scale || 1),
      Number(J.rot_deg || 0)
    ), R = Number(L.u1 || 0) - Number(L.u0 || 0), Z = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(R > 1e-6) || !(Z > 1e-6)) return null;
    const me = q(Number(x.u || 0), Number(L.u0 || 0)) / R, ue = (Number(x.v || 0) - Number(L.v0 || 0)) / Z;
    if (me < 0 || me > 1 || ue < 0 || ue > 1) return 0;
    const ve = E(v);
    if (!ve) return null;
    const Se = Ie(Math.floor(me * ve.width), 0, ve.width - 1), be = Ie(Math.floor(ue * ve.height), 0, ve.height - 1);
    return Number(ve.alpha[(be * ve.width + Se) * 4 + 3] || 0);
  }
  function A(v, V, L, J = null) {
    if (!(V != null && V.visible) || !Jr(L, V.corners)) return !1;
    const O = J || he(L, performance.now()), F = j(v, O);
    return F === null ? !0 : F > 8;
  }
  function H() {
    var J, O, F, x, R, Z, me, ue;
    const v = ((O = (J = r.paintEngine) == null ? void 0 : J.getErpTarget) == null ? void 0 : O.call(J, g(!1))) || null, V = Math.max(1, Number(((F = v == null ? void 0 : v.descriptor) == null ? void 0 : F.width) || ((R = (x = v == null ? void 0 : v.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : R.width) || 2048)), L = Math.max(1, Number(((Z = v == null ? void 0 : v.descriptor) == null ? void 0 : Z.height) || ((ue = (me = v == null ? void 0 : v.displayPaint) == null ? void 0 : me.canvas) == null ? void 0 : ue.height) || 1024));
    return { width: V, height: L };
  }
  function T() {
    var be, Q, ge;
    const v = r.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const V = (v == null ? void 0 : v.stroke) || null;
    if (!V || String((V == null ? void 0 : V.layerKind) || "") !== "paint" || String((V == null ? void 0 : V.toolKind) || "") !== "eraser") return null;
    const L = u(), J = `${oe()}:${L.width}:${L.height}`;
    if (((be = r._activePaintEraserPreviewInfo) == null ? void 0 : be.cacheKey) === J)
      return r._activePaintEraserPreviewInfo.value || null;
    const O = un(V), F = (O == null ? void 0 : O.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = X(Y, O.targetSpace, !0);
    }
    const x = c(L.width, L.height, { readback: !0 });
    if (!z(x, O, { w: L.width, h: L.height })) return null;
    const R = ((ge = (Q = x.ctx) == null ? void 0 : Q.getImageData(0, 0, L.width, L.height)) == null ? void 0 : ge.data) || null;
    if (!R) return null;
    let Z = L.width, me = L.height, ue = -1, ve = -1;
    for (let Y = 0; Y < L.height; Y += 1)
      for (let p = 0; p < L.width; p += 1)
        R[(Y * L.width + p) * 4 + 3] <= 8 || (p < Z && (Z = p), Y < me && (me = Y), p > ue && (ue = p), Y > ve && (ve = Y));
    if (ue < Z || ve < me)
      return r._activePaintEraserPreviewInfo = { cacheKey: J, value: null }, null;
    const Se = {
      surface: x,
      bounds: { minX: Z, minY: me, maxX: ue, maxY: ve },
      key: `${J}:${Z}:${me}:${ue}:${ve}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: J, value: Se }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Se;
  }
  function B() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function pe(v, V, L) {
    var J, O;
    if (!v) return null;
    if (v.type === "rasterObject" && ((J = v.item) != null && J.bbox)) {
      const F = v.item.bbox, x = ((O = v.item) == null ? void 0 : O.transform) || {}, R = Number(F.u0 || 0) + Number(x.du || 0), Z = Number(F.u1 || 0) + Number(x.du || 0), me = Number(F.v0 || 0) + Number(x.dv || 0), ue = Number(F.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((R % 1 + 1) % 1 * V),
        maxX: Math.ceil((Z % 1 + 1) % 1 * V),
        minY: Math.floor(Ie(me, 0, 1) * L),
        maxY: Math.ceil(Ie(ue, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    if (v.type === "strokeGroup") {
      const F = ee(v.actionGroupId, "paint"), x = d(v.actionGroupId, "paint", F);
      if (!x) return null;
      const R = x.centerUv.u - x.halfW, Z = x.centerUv.u + x.halfW, me = x.centerUv.v - x.halfH, ue = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((R % 1 + 1) % 1 * V),
        maxX: Math.ceil((Z % 1 + 1) % 1 * V),
        minY: Math.floor(Ie(me, 0, 1) * L),
        maxY: Math.ceil(Ie(ue, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    return null;
  }
  function ae(v, V, L) {
    if (!v || !V) return !1;
    const J = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: L - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], O = J(v), F = J(V);
    return O.some((x) => F.some((R) => !(x.maxX < R.minX || R.maxX < x.minX || x.maxY < R.minY || R.maxY < x.minY)));
  }
  function K(v, V, L) {
    var M, W, ye, D, ie, Ne, xe;
    if (!v || !V || !((M = L == null ? void 0 : L.surface) != null && M.canvas) || V.type !== "rasterObject") return v;
    const J = Number(v.width || L.surface.canvas.width || 0), O = Number(v.height || L.surface.canvas.height || 0);
    if (J < 1 || O < 1) return v;
    const F = pe(V, J, O);
    if (F && !ae(F, L.bounds, J)) return v;
    const x = String(((W = V.item) == null ? void 0 : W.id) || V.id || ""), R = ((ye = V.item) == null ? void 0 : ye.transform) || {}, Z = `${L.key}:${x}:${J}:${O}:${Number(R.du || 0).toFixed(6)}:${Number(R.dv || 0).toFixed(6)}:${Number(R.rot_deg || 0).toFixed(3)}:${Number(R.scale || 1).toFixed(4)}`, me = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (me.has(Z)) return me.get(Z);
    const ue = Ie(Math.floor(Number(((D = L.bounds) == null ? void 0 : D.minX) || 0)), 0, Math.max(0, J - 1)), ve = Ie(Math.floor(Number(((ie = L.bounds) == null ? void 0 : ie.minY) || 0)), 0, Math.max(0, O - 1)), Se = Ie(Math.ceil(Number(((Ne = L.bounds) == null ? void 0 : Ne.maxX) || 0)), ue, Math.max(0, J - 1)), be = Ie(Math.ceil(Number(((xe = L.bounds) == null ? void 0 : xe.maxY) || 0)), ve, Math.max(0, O - 1)), Q = Math.max(1, Se - ue + 1), ge = Math.max(1, be - ve + 1), Y = c(J, O, { readback: !0 });
    Y.ctx.clearRect(0, 0, J, O), Y.ctx.drawImage(v, 0, 0);
    const p = Y.ctx.getImageData(ue, ve, Q, ge);
    Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(L.surface.canvas, 0, 0), Y.ctx.restore();
    const P = Y.ctx.getImageData(ue, ve, Q, ge);
    let S = !1;
    for (let Pe = 0; Pe < Q * ge; Pe += 1) {
      const Ce = p.data[Pe * 4 + 3], Le = P.data[Pe * 4 + 3];
      if (Ce > Le) {
        S = !0;
        break;
      }
    }
    return S ? (me.size > 64 && me.clear(), me.set(Z, Y.canvas), Y.canvas) : (me.set(Z, v), v);
  }
  function k(v, V = null) {
    const L = C((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), J = (v == null ? void 0 : v.bbox) || null;
    if (!L || !J) return null;
    const O = U(v, V);
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
    ].join(":"), me = i.get(Z);
    if (me) return me;
    i.size > 64 && i.clear();
    const ue = rn({ label: "editor.raster-erp" });
    ue.width = F, ue.height = x;
    const ve = ue.getContext("2d");
    return ve ? (d0(ve, O, v, F, x), i.set(Z, ue), ue) : null;
  }
  async function re(v, V) {
    const L = await new Promise((R) => v.toBlob(R, "image/png")), J = new FormData();
    J.append("image", L, V), J.append("type", "input"), J.append("subfolder", "panorama_stickers"), J.append("overwrite", "1");
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
  let de = null, _e = !1;
  function we() {
    const v = Cp(a.painting), { width: V, height: L } = f();
    return Uv(a.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: V, height: L, nodeId: String(n.id ?? "0") });
  }
  function N() {
    const v = String(n.id ?? "0"), V = da.get(v);
    if (_e && V) return V;
    const L = (async () => {
      var F, x, R, Z, me, ue, ve, Se, be, Q, ge, Y;
      const J = h(), O = Cp(a.painting);
      if (O.totalPaintCount <= 0 && O.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, de = J, l());
        return;
      }
      if (de !== J && !_e) {
        _e = !0;
        try {
          G();
          const p = g(!1), P = ((x = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : x.call(F, p)) || null, S = ((R = P == null ? void 0 : P.displayPaint) == null ? void 0 : R.canvas) || null, M = ((Z = P == null ? void 0 : P.committedMask) == null ? void 0 : Z.canvas) || null, W = Math.max(1, Number(((me = P == null ? void 0 : P.descriptor) == null ? void 0 : me.width) || (S == null ? void 0 : S.width) || (M == null ? void 0 : M.width) || 2048)), ye = Math.max(1, Number(((ue = P == null ? void 0 : P.descriptor) == null ? void 0 : ue.height) || (S == null ? void 0 : S.height) || (M == null ? void 0 : M.height) || 1024));
          (!S && O.totalPaintCount > 0 || !M && O.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((ve = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ve.width) || 0) !== W || Number(((Se = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.height) || 0) !== ye) && (r._paintLayerSyncBlankSurface = c(W, ye)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, W, ye));
          const D = S || O.totalPaintCount > 0 && ((be = r._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null, ie = M || O.totalMaskCount > 0 && ((Q = r._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!D && !ie) return;
          let Ne = null, xe = null;
          const Pe = [];
          if (O.totalPaintCount > 0) {
            Ne = await re(D, `pano_paint_${v}.png`);
            for (const Ce of p) {
              const Le = String(Ce || "").trim();
              if (!Le) continue;
              const je = ((Y = (ge = r.paintEngine) == null ? void 0 : ge.getGroupDisplayCanvas) == null ? void 0 : Y.call(ge, Le)) || null;
              if (!je) continue;
              const Ke = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), $e = await re(je, `pano_group_${v}_${Ke}.png`);
              $e && Pe.push({
                id: Le,
                actionGroupId: Le,
                image: $e
              });
            }
          }
          O.totalMaskCount > 0 && (xe = await re(ie, `pano_mask_${v}.png`)), J === h() && (a.painting_layer = {
            paint: Ne,
            mask: xe,
            groups: Pe,
            revision: J
          }, de = J, l());
        } catch (p) {
          throw p;
        } finally {
          _e = !1;
        }
      }
    })();
    return da.set(v, L), L.finally(() => {
      da.get(v) === L && da.delete(v);
    }), L;
  }
  function le(v) {
    var x;
    const V = ((x = r.paintEngine) == null ? void 0 : x.getMaskDisplayCanvas()) || null;
    if (!V) return v;
    const L = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, J = v.reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.zIndex) || 0)), -1), O = (Array.isArray(a.stickers) ? a.stickers : []).reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.z_index) || 0)), -1), F = Math.max(J, O);
    return v.push({
      id: "mask_display",
      source: V,
      revision: L,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function b() {
    var J, O;
    const v = w(!0), V = T(), L = [];
    for (const F of v) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const x = String(F.actionGroupId || F.id || "");
        if (!x) continue;
        const R = ((O = (J = r.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : O.call(J, x)) || null;
        if (!R) continue;
        L.push({
          id: `paint_group:${x}`,
          source: R,
          revision: `${m()}:${x}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const x = F.item || null, R = C((x == null ? void 0 : x.id) || F.id || "");
        if (!R) continue;
        const Z = k(x, () => ne());
        if (!Z) continue;
        const me = K(Z, F, V), ue = (x == null ? void 0 : x.transform) || {};
        L.push({
          id: `raster:${R}`,
          source: me,
          revision: [
            h(),
            (V == null ? void 0 : V.key) || "",
            R,
            Number(ue.du || 0).toFixed(6),
            Number(ue.dv || 0).toFixed(6),
            Number(ue.rot_deg || 0).toFixed(3),
            Number(ue.scale || 1).toFixed(4)
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
  function I() {
    a.painting_layer !== null && (a.painting_layer = null), de = "";
  }
  return {
    connect(v) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: _,
        getStrokeGroupStrokes: ee,
        inverseTransformErpPointAround: $,
        paintingShown: te,
        parseRasterObjectSelectionId: C,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: G,
        requestDraw: ne,
        screenPosToErpPoint: he,
        shortestWrappedDelta: q
      } = v);
    },
    getSharedLivePaintSurface: ce,
    getLivePaintRevisionSuffix: oe,
    isPaintCompositeInteraction: fe,
    hitRasterObjectAt: A,
    invalidateLivePaintPreviewCaches: B,
    buildRasterObjectEditCanvas: k,
    needsPaintingLayerSync: we,
    syncPaintingLayerAsync: N,
    invalidatePaintingLayerState: I,
    buildEditorViewPaintLayers: y
  };
}
function s2(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(K) {
    return !K || typeof K != "object" ? { x: 0, y: 0 } : { x: Number((K == null ? void 0 : K.u) || 0), y: Number((K == null ? void 0 : K.v) || 0) };
  }
  function c(K, k, re, de = {}) {
    return { ...{
      ...K,
      t: Number((K == null ? void 0 : K.t) || 0),
      widthScale: f(K, "widthScale", 1),
      pressureLike: f(K, "pressureLike", 1)
    }, ...de, u: k, v: re };
  }
  function d(K, k = !1) {
    return k ? 12e-4 : 18e-4;
  }
  function u(K, k, re = !1) {
    if (!Array.isArray(K) || !K.length) return [];
    const de = String((k == null ? void 0 : k.kind) || "") === "ERP_GLOBAL", _e = /* @__PURE__ */ new WeakMap();
    if (de) {
      let O = null;
      K.forEach((F) => {
        const x = Number((F == null ? void 0 : F.u) || 0), R = Number((F == null ? void 0 : F.v) || 0), Z = (x % 1 + 1) % 1, me = O == null ? Z : O + a(Z, (O % 1 + 1) % 1);
        _e.set(F, { x: me, y: R }), O = me;
      });
    }
    const we = (O) => !O || typeof O != "object" ? { x: 0, y: 0 } : _e.get(O) || l(O), N = (O, F, x, R = {}) => {
      const Z = de ? (Number(F) % 1 + 1) % 1 : Number(F), me = c(O, Z, x, R);
      return _e.set(me, { x: Number(F), y: Number(x) }), me;
    }, le = (O, F, x) => {
      const R = we(O), Z = we(F);
      return N(O, Bn(R.x, Z.x, x), Bn(R.y, Z.y, x), {
        t: Bn(Number((O == null ? void 0 : O.t) || 0), Number((F == null ? void 0 : F.t) || 0), x),
        widthScale: Bn(f(O, "widthScale", 1), f(F, "widthScale", 1), x),
        pressureLike: Bn(f(O, "pressureLike", 1), f(F, "pressureLike", 1), x)
      });
    };
    if (K.length === 1) {
      const O = we(K[0]);
      return [N(K[0], O.x, O.y)];
    }
    const b = d(k, re), y = (O, F) => {
      const x = [0];
      for (let Q = 1; Q < O.length; Q += 1) {
        const ge = we(O[Q - 1]), Y = we(O[Q]);
        x.push(x[Q - 1] + Math.hypot(Y.x - ge.x, Y.y - ge.y));
      }
      const R = x[x.length - 1] || 0;
      if (R <= 1e-8) {
        const Q = O[0], ge = we(Q);
        return [N(Q, ge.x, ge.y)];
      }
      const Z = [];
      let me = 0;
      for (let Q = 0; Q <= R + 1e-9; Q += F) {
        for (; me < x.length - 2 && x[me + 1] < Q; ) me += 1;
        const ge = x[me], Y = x[me + 1], p = Math.max(1e-8, Y - ge);
        Z.push(le(O[me], O[me + 1], Ie((Q - ge) / p, 0, 1)));
      }
      const ue = O[O.length - 1], ve = we(ue), Se = Z[Z.length - 1], be = Se ? we(Se) : null;
      return (!be || Math.hypot(be.x - ve.x, be.y - ve.y) > F * 0.35) && Z.push(N(ue, ve.x, ve.y)), Z;
    }, I = (O) => {
      if (!Array.isArray(O) || O.length < 3) return O ? O.slice() : [];
      const F = we(O[0]), x = [N(O[0], F.x, F.y)];
      for (let me = 0; me < O.length - 1; me += 1) {
        const ue = O[me], ve = O[me + 1], Se = we(ue), be = we(ve), Q = N(
          ue,
          Se.x * 0.75 + be.x * 0.25,
          Se.y * 0.75 + be.y * 0.25,
          {
            t: Number(ue.t || 0) * 0.75 + Number(ve.t || 0) * 0.25,
            widthScale: f(ue, "widthScale", 1) * 0.75 + f(ve, "widthScale", 1) * 0.25,
            pressureLike: f(ue, "pressureLike", 1) * 0.75 + f(ve, "pressureLike", 1) * 0.25
          }
        ), ge = N(
          ue,
          Se.x * 0.25 + be.x * 0.75,
          Se.y * 0.25 + be.y * 0.75,
          {
            t: Number(ue.t || 0) * 0.25 + Number(ve.t || 0) * 0.75,
            widthScale: f(ue, "widthScale", 1) * 0.25 + f(ve, "widthScale", 1) * 0.75,
            pressureLike: f(ue, "pressureLike", 1) * 0.25 + f(ve, "pressureLike", 1) * 0.75
          }
        );
        x.push(Q, ge);
      }
      const R = O[O.length - 1], Z = we(R);
      return x.push(N(R, Z.x, Z.y)), x;
    }, v = y(K, b);
    if (v.length < 3) return v;
    const V = re ? 2 : 1;
    let L = v.slice();
    for (let O = 0; O < V; O += 1) L = I(L);
    return y(L, Math.max(b * 0.75, 55e-5));
  }
  function f(K, k, re = 1) {
    const de = Number(K == null ? void 0 : K[k]);
    return Number.isFinite(de) ? Math.max(0, de) : re;
  }
  function m(K) {
    const k = Number(K == null ? void 0 : K.radiusValue);
    if (Number.isFinite(k) && k > 0) {
      const re = String((K == null ? void 0 : K.radiusModel) || "").trim() || "erp_uv_norm";
      return re === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((K == null ? void 0 : K.size) || 10) * 0.5 / 2048)
      } : {
        model: re,
        value: k
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((K == null ? void 0 : K.size) || 10) * 0.5 / 2048)
    };
  }
  function w(K, k, re = {}) {
    const de = rn({ label: "editor.raster-surface" });
    de.width = Math.max(1, Math.round(K)), de.height = Math.max(1, Math.round(k));
    const _e = de.getContext("2d", re.readback ? { willReadFrequently: !0 } : void 0);
    return _e && (_e.clearRect(0, 0, de.width, de.height), _e.imageSmoothingEnabled = !0), { canvas: de, ctx: _e };
  }
  function g() {
    const K = he();
    return `${String(t.paintStrokeRevision)}:${K.width}x${K.height}`;
  }
  function h() {
    const K = he();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${K.width}x${K.height}`;
  }
  function _() {
    const K = i(), k = h();
    return K ? `${k}:${K}` : k;
  }
  function ee() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function $() {
    t.paintCompositeRevision += 1;
  }
  function te() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var K, k;
    t.paintEngineRevisionKey = null, (k = (K = t.paintEngine) == null ? void 0 : K.rebuildCommitted) == null || k.call(K, n), t.paintEngineRevisionKey = g();
  }
  function X() {
    te(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function z({ rebuildPaintEngine: K = !1 } = {}) {
    o(), ee(), X(), K && C();
  }
  function G() {
    o(), $(), X();
  }
  function ne() {
    var de;
    const K = he(), k = `${K.width}x${K.height}`;
    t.paintEngineDescriptorKey !== k && (t.paintEngine = Al(K), t.paintEngineDescriptorKey = k, t.paintEngineRevisionKey = "");
    const re = g();
    t.paintEngineRevisionKey !== re && (t.paintEngineRevisionKey = re, (de = t.paintEngine) == null || de.rebuildCommitted(n));
  }
  function he() {
    const K = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: K,
      height: Math.max(1, Math.round(K * 0.5))
    };
  }
  function q() {
    return he();
  }
  function fe(K, k, re, de, _e = null) {
    const we = m(K), N = f(k, "widthScale", 1) * f(k, "pressureLike", 1);
    return we.model === "erp_uv_norm" ? Math.max(0.5, we.value * re * N) : we.model === "world_angle" ? _e ? Math.max(0.5, we.value / Math.max(1e-6, Number(_e.hFOV_deg || 90) * _r) * re * N) : Math.max(0.5, we.value / (2 * Math.PI) * re * N) : Math.max(0.5, Number((K == null ? void 0 : K.size) || 10) * 0.5 * N);
  }
  function ce(K, k, re = {}) {
    const de = String((k == null ? void 0 : k.layerKind) || "paint"), _e = String((k == null ? void 0 : k.toolKind) || "pen"), we = re.preview === !0, N = we ? 0.78 : 1;
    if (K.globalAlpha = _e === "marker" ? 0.7 * N : 1, de === "mask") {
      K.fillStyle = we ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (_e === "eraser") {
      K.globalCompositeOperation = "destination-out", K.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((k == null ? void 0 : k.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = we ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    K.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${b})`;
  }
  function oe(K, k, re) {
    const de = Math.max(0.5, Math.min(re, Number((k == null ? void 0 : k.radiusPx) || 0.5)));
    !Number.isFinite(k == null ? void 0 : k.x) || !Number.isFinite(k == null ? void 0 : k.y) || !Number.isFinite(de) || (K.beginPath(), K.arc(Number(k.x || 0), Number(k.y || 0), de, 0, Math.PI * 2), K.fill());
  }
  function U(K, k, re, de, _e = {}) {
    if (!K || !Array.isArray(k) || !k.length) return;
    const we = Math.max(de.w, de.h) * 0.25;
    K.save(), ce(K, re, _e);
    const N = (le) => oe(K, le, we);
    if (k.length === 1) {
      N(k[0]), K.restore();
      return;
    }
    for (let le = 0; le < k.length - 1; le += 1) {
      const b = k[le], y = k[le + 1];
      if (!b || !y) continue;
      const I = Number(b.x || 0), v = Number(b.y || 0), V = Number(y.x || 0), L = Number(y.y || 0), J = Math.max(0.5, Math.min(we, Number(b.radiusPx || 0.5))), O = Math.max(0.5, Math.min(we, Number(y.radiusPx || 0.5)));
      if (!Number.isFinite(I) || !Number.isFinite(v) || !Number.isFinite(V) || !Number.isFinite(L) || !Number.isFinite(J) || !Number.isFinite(O)) continue;
      const F = V - I, x = L - v, R = Math.hypot(F, x);
      if (!Number.isFinite(R) || R < 1e-6) {
        N(b);
        continue;
      }
      if (R > Math.max(de.w, de.h) * 0.5) continue;
      const Z = Math.max(0.5, Math.min(J, O)), me = Math.max(0.35, Math.min(Z * 0.4, 2.25)), ue = Math.max(1, Math.ceil(R / me));
      for (let ve = 0; ve <= ue; ve += 1) {
        const Se = ve / ue;
        N({
          x: Bn(I, V, Se),
          y: Bn(v, L, Se),
          radiusPx: Bn(J, O, Se)
        });
      }
    }
    N(k[k.length - 1]), K.restore();
  }
  function E(K, k, re, de) {
    U(K, k, re, de, { preview: !1 });
  }
  function j(K, k, re, de, _e) {
    var le, b, y, I;
    if (!K || !Array.isArray(k) || k.length < 3) return;
    const we = "u", N = "v";
    if (K.save(), String((re == null ? void 0 : re.layerKind) || "") === "mask")
      K.fillStyle = "rgba(255,255,255,1)";
    else if (String((re == null ? void 0 : re.toolKind) || "") === "eraser")
      K.globalCompositeOperation = "destination-out", K.fillStyle = "rgba(0,0,0,1)";
    else {
      const v = (re == null ? void 0 : re.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      K.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${Number(v.a ?? 1)})`;
    }
    K.beginPath(), K.moveTo(Number(((le = k[0]) == null ? void 0 : le[we]) || 0) * de.w, Number(((b = k[0]) == null ? void 0 : b[N]) || 0) * de.h);
    for (let v = 1; v < k.length; v += 1)
      K.lineTo(Number(((y = k[v]) == null ? void 0 : y[we]) || 0) * de.w, Number(((I = k[v]) == null ? void 0 : I[N]) || 0) * de.h);
    K.closePath(), K.fill(), K.restore();
  }
  function A(K) {
    const k = (K == null ? void 0 : K.geometry) || null;
    return k ? String(k.geometryKind || "") === "lasso_fill" ? Array.isArray(k.points) ? k.points : [] : Array.isArray(k.processedPoints) && k.processedPoints.length ? k.processedPoints : Array.isArray(k.rawPoints) && k.rawPoints.length ? k.rawPoints : Array.isArray(k.points) ? k.points : [] : [];
  }
  function H(K, k) {
    const re = A(K);
    return !Array.isArray(re) || !re.length ? [] : re.map((de) => ({
      x: Number((de == null ? void 0 : de.u) || 0) * Number((k == null ? void 0 : k.w) || 1),
      y: Number((de == null ? void 0 : de.v) || 0) * Number((k == null ? void 0 : k.h) || 1),
      radiusPx: fe(K, de, Number((k == null ? void 0 : k.w) || 1), Number((k == null ? void 0 : k.h) || 1))
    }));
  }
  function T(K, k, re = null) {
    var le, b, y, I;
    if (!(K != null && K.ctx) || !k) return !1;
    const de = re || { w: Number(((le = K.canvas) == null ? void 0 : le.width) || 0), h: Number(((b = K.canvas) == null ? void 0 : b.height) || 0) }, _e = String((k == null ? void 0 : k.toolKind) || "") === "eraser" ? {
      ...k,
      layerKind: "mask",
      toolKind: String(((y = k == null ? void 0 : k.geometry) == null ? void 0 : y.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : k;
    if (String(((I = k == null ? void 0 : k.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill")
      return j(K.ctx, A(_e), _e, de), !0;
    const N = H(_e, de);
    return N.length ? (E(K.ctx, N, _e, de), !0) : !1;
  }
  function B(K, k, re, de = 8) {
    const _e = new Uint8Array(k * re), we = [], N = new Int32Array(k * re), le = new Int32Array(k * re);
    for (let b = 0; b < re; b += 1)
      for (let y = 0; y < k; y += 1) {
        const I = b * k + y;
        if (_e[I] || K[I] <= de) continue;
        let v = 0, V = 0;
        N[V] = y, le[V] = b, V += 1, _e[I] = 1;
        const L = [];
        let J = y, O = b, F = y, x = b;
        for (; v < V; ) {
          const R = N[v], Z = le[v];
          v += 1, L.push({ x: R, y: Z }), R < J && (J = R), Z < O && (O = Z), R > F && (F = R), Z > x && (x = Z);
          const me = [
            [(R - 1 + k) % k, Z],
            [(R + 1) % k, Z],
            [R, Z - 1],
            [R, Z + 1]
          ];
          for (const [ue, ve] of me) {
            if (ve < 0 || ve >= re) continue;
            const Se = ve * k + ue;
            _e[Se] || K[Se] <= de || (_e[Se] = 1, N[V] = ue, le[V] = ve, V += 1);
          }
        }
        we.push({ pixels: L, minX: J, minY: O, maxX: F, maxY: x });
      }
    return we;
  }
  function pe(K, k) {
    const re = [...new Set((Array.isArray(K == null ? void 0 : K.pixels) ? K.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, y) => b - y);
    if (!re.length) return null;
    if (re.length === 1)
      return { startX: re[0], widthPx: 1 };
    let de = -1, _e = 0;
    for (let b = 0; b < re.length; b += 1) {
      const y = re[b], v = (b === re.length - 1 ? re[0] + k : re[b + 1]) - y - 1;
      v > de && (de = v, _e = b);
    }
    const we = (re[(_e + 1) % re.length] + k) % k;
    let N = 1 / 0, le = -1 / 0;
    for (const b of re) {
      const y = (b - we + k) % k;
      N = Math.min(N, y), le = Math.max(le, y);
    }
    return {
      startX: we,
      widthPx: Math.max(1, le - N + 1)
    };
  }
  function ae(K, k, re = {}) {
    var y;
    const de = Number((K == null ? void 0 : K.width) || 0), _e = Number((K == null ? void 0 : K.height) || 0), we = (y = K == null ? void 0 : K.getContext) == null ? void 0 : y.call(K, "2d");
    if (!we || de < 1 || _e < 1) return [];
    const N = we.getImageData(0, 0, de, _e), le = new Uint8Array(de * _e);
    for (let I = 0; I < le.length; I += 1) le[I] = N.data[I * 4 + 3];
    return B(le, de, _e, 8).map((I, v) => {
      const V = pe(I, de);
      if (!V) return null;
      const L = Number(V.widthPx || 0), J = I.maxY - I.minY + 1, O = Number(V.startX || 0), F = rn({ label: "editor.lasso-fill" });
      F.width = L, F.height = J;
      const x = F.getContext("2d");
      if (!x) return null;
      const R = x.createImageData(L, J);
      return I.pixels.forEach(({ x: Z, y: me }) => {
        const ue = (me * de + Z) * 4, ve = (Number(Z || 0) - O + de) % de, Se = ((me - I.minY) * L + ve) * 4;
        R.data[Se + 0] = N.data[ue + 0], R.data[Se + 1] = N.data[ue + 1], R.data[Se + 2] = N.data[ue + 2], R.data[Se + 3] = N.data[ue + 3];
      }), x.putImageData(R, 0, 0), {
        id: Zi("raster"),
        type: "raster_frozen",
        layerKind: k === "mask" ? "mask" : "paint",
        z_index: Number((re == null ? void 0 : re.z_index) || 0) + v * 1e-3,
        locked: (re == null ? void 0 : re.locked) === !0,
        bbox: {
          u0: 0,
          v0: I.minY / _e,
          u1: L / de,
          v1: (I.maxY + 1) / _e
        },
        rasterDataUrl: F.toDataURL("image/png"),
        transform: {
          du: O / de,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(K) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = K);
    },
    processFreehandPoints: u,
    createRasterSurface: w,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: _,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: z,
    markPaintCompositeVisualsDirty: G,
    rebuildPaintEngineIfNeeded: ne,
    getDesiredPaintTargetDescriptor: he,
    getActivePaintTargetDescriptor: q,
    rasterizeStrokeToSurface: T,
    createRasterFrozenObjectsFromCanvas: ae
  };
}
function a2(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m;
  function w(ne, he = null) {
    var q;
    if (ne && typeof ne == "object" && !Array.isArray(ne)) return ne;
    if (Array.isArray(ne) && ne.length > 0) {
      const fe = ne[0];
      if (fe && typeof fe == "object" && !Array.isArray(fe)) return fe;
    }
    if (Array.isArray(he) && he.length > 0) {
      const fe = (q = he[0]) == null ? void 0 : q.parsed_state;
      if (fe && typeof fe == "object" && !Array.isArray(fe))
        return {
          yaw_deg: Number(fe.yaw_deg || 0),
          pitch_deg: Number(fe.pitch_deg || 0),
          hFOV_deg: Number(fe.hFOV_deg || 30),
          rot_deg: Number(fe.roll_deg || 0)
        };
    }
    return null;
  }
  function g(ne, he, q) {
    const fe = Math.max(1, Number(he || 1)), ce = Math.max(1, Number(q || 1)), oe = Ie(Number(ne || 30), 0.1, 179) * _r, U = 2 * Math.atan(Math.tan(oe * 0.5) * (ce / fe));
    return Ie(U * Ei, 0.1, 179);
  }
  function h(ne) {
    const he = String(ne || "").trim();
    if (!he) return null;
    try {
      const q = JSON.parse(he);
      if (!q || typeof q != "object" || String(q.kind || "") !== "pano_sticker_state") return null;
      const fe = q.version;
      let ce = null;
      if (typeof fe == "number" && Number.isInteger(fe) ? ce = fe : typeof fe == "string" && /^\d+$/.test(fe) && (ce = Number.parseInt(fe, 10)), ce !== 1) return null;
      const oe = q.pose;
      if (!oe || typeof oe != "object") return null;
      const U = Number(oe.yaw_deg), E = Number(oe.pitch_deg), j = Number(oe.roll_deg), A = Number(oe.hFOV_deg);
      if (![U, E, j, A].every((pe) => Number.isFinite(pe))) return null;
      let H = ((U + 180) % 360 + 360) % 360 - 180;
      Object.is(H, -0) && (H = 0);
      const T = {
        yaw_deg: H,
        pitch_deg: Ie(E, -89.9, 89.9),
        roll_deg: j,
        hFOV_deg: Ie(A, 0.1, 179)
      }, B = Number(q.source_aspect);
      return Number.isFinite(B) && B > 0 && (T.source_aspect = B), T;
    } catch {
      return null;
    }
  }
  function _(ne) {
    const he = Number(ne == null ? void 0 : ne.yaw_deg), q = Number(ne == null ? void 0 : ne.pitch_deg), fe = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), ce = Number(ne == null ? void 0 : ne.hFOV_deg), oe = Fi(ne);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(he) ? he : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Ie(Number.isFinite(ce) ? ce : 90, 0.1, 179)
      },
      source_aspect: oe
    };
  }
  function ee(ne) {
    var E;
    if (!ne || typeof ne != "object") return _(null);
    const he = Number(ne == null ? void 0 : ne.yaw_deg), q = Number(ne == null ? void 0 : ne.pitch_deg), fe = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), ce = Number(ne == null ? void 0 : ne.hFOV_deg), oe = Number(ne == null ? void 0 : ne.vFOV_deg);
    let U = 1;
    if (Number.isFinite(ce) && Number.isFinite(oe)) {
      const j = Ie(ce, 0.1, 179) * _r, A = Ie(oe, 0.1, 179) * _r, H = Math.tan(A * 0.5);
      if (Math.abs(H) > 1e-6) {
        const T = Math.tan(j * 0.5) / H;
        Number.isFinite(T) && T > 0 && (U = T);
      }
    }
    if (ne != null && ne.asset_id && ((E = o == null ? void 0 : o.assets) != null && E[ne.asset_id])) {
      const j = o.assets[ne.asset_id], A = Number((j == null ? void 0 : j.w) || 0), H = Number((j == null ? void 0 : j.h) || 0);
      A > 0 && H > 0 && (U = A / H);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(he) ? he : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Ie(Number.isFinite(ce) ? ce : 30, 0.1, 179)
      },
      source_aspect: U
    };
  }
  function $(ne) {
    return t.linkedValue(n, ne);
  }
  function te(ne, he, q) {
    const fe = ne && typeof ne == "object" ? {
      yaw_deg: Number(ne.yaw_deg || 0),
      pitch_deg: Number(ne.pitch_deg || 0),
      roll_deg: Number(ne.rot_deg ?? ne.roll_deg ?? 0),
      hFOV_deg: Number(ne.hFOV_deg || 30)
    } : h(he);
    if (fe) {
      const U = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || fe.source_aspect || 1), E = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
      return {
        yaw_deg: Number(fe.yaw_deg || 0),
        pitch_deg: Number(fe.pitch_deg || 0),
        hFOV_deg: Number(fe.hFOV_deg || 30),
        vFOV_deg: g(fe.hFOV_deg, U, E),
        rot_deg: Number(fe.roll_deg || 0)
      };
    }
    const ce = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 1), oe = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: g(30, ce, oe),
      rot_deg: 0
    };
  }
  function C() {
    const ne = Qt(n, "external-sticker") ? w(c("pano_sticker_input_pose"), null) : null;
    return _g(o, Sg(n, { pose: ne }));
  }
  function X() {
    var E;
    const ne = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((j) => String((j == null ? void 0 : j.name) || "") === "sticker_image") : -1, he = ne >= 0 ? ((E = n.getInputLink(ne)) == null ? void 0 : E.id) ?? null : null, q = l(() => {
      ti(n, "image-loaded");
    }), fe = w(c("pano_sticker_input_pose"), null), ce = $("sticker_state"), oe = t.externalStateHash(n, ce), U = he == null ? null : te(fe, ce, q);
    return vg(o, {
      connected: he != null,
      linkId: he,
      stateHash: oe,
      pose: U,
      imageWidth: Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 0),
      imageHeight: Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 0)
    });
  }
  function z(ne = "sync") {
    if (s !== "stickers" || i) return;
    const he = n.__panoSceneStateV2 ? C() : X();
    if (he.changed) {
      const q = o.stickers.find(d);
      o.stickers = he.state.stickers, o.active = he.state.active, q && r.selectedId === q.id && !o.stickers.some((fe) => fe.id === q.id) && (r.selectedId = null, r.selectedIds = []), a(), m(), f();
    } else ne === "image-loaded" && m();
    u();
  }
  function G() {
    const ne = Array.isArray(o.stickers) ? o.stickers : [], he = [];
    for (const q of ne)
      d(q) && (q.visible = !1, he.push(q));
    return he;
  }
  return {
    connect(ne) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: m
      } = ne);
    },
    computeStickerVFov: g,
    buildCanonicalCutoutStickerState: _,
    buildCanonicalSelectedStickerState: ee,
    reconcileExternalStickerFromInputs: z,
    collectExternalStickersForClearAll: G
  };
}
function Xi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function l2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function c2({
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
  var $, te;
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
    historyEntries: Array.from({ length: 8 }, (C, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = (($ = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : $.id) || "", f = !u, m = o(e.customPaintColor), w = Math.round(Math.max(0, Math.min(1, Number(((te = e.customPaintColor) == null ? void 0 : te.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[g] ?? 10, _ = l(), ee = Array.from({ length: 8 }, (C, X) => e.customPaintHistory[X] || null);
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
    alphaValue: w,
    alphaText: `${w}%`,
    historyEntries: ee.map((C, X) => ({
      index: X,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: _,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function u2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const d2 = {
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
function f2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = d2[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Tc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function p2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function h2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function m2(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const ho = "erp", g2 = ["1:1", "4:3", "3:2", "16:9"];
function v0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...g2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: ho, label: Number(r) === 180 ? "180°" : "360°", active: e === ho }] : []
  ];
}
function y2({
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
    rows: f2(s),
    notes: a,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function b2({
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
  cameraShot: w = !1,
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
      const _ = f(), ee = u(t);
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
        label: ee ? "Show" : "Hide",
        tip: ee ? "Show input image" : "Hide input image",
        icon: ee ? m.eye : m.eye_dashed
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
        choices: v0(l, { erp: w, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === ho }
    ], w ? h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : h.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    );
  return S0(i.corners, h);
}
const Ep = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function v2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Ep.filter((s) => s.cameraTip) : Ep;
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
function S2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), m = d + 18, w = c - 18 - r;
  let g;
  return m <= f ? g = Math.max(m, 14) : w >= 14 ? g = Math.min(w, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
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
function _2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const w2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function x2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (g, h, _, ee, $, te, { keyable: C = !0, hideable: X = !0 } = {}) => {
    const z = (G) => (r == null ? void 0 : r.owner) === g && r.lane === G ? r.frames.map((ne) => ne + te) : [];
    return {
      id: g,
      label: _,
      icon: ee,
      clip: $,
      selected: g === n,
      hideable: X,
      visible: h.visible,
      keyable: C,
      open: C && o.has(g),
      keys: xv(h).map((G) => ({ frame: G.frame + te, full: G.full })),
      selectedFrames: z(null),
      lanes: (C ? So(h) : []).map((G) => ({
        key: `${g}:${G}`,
        lane: G,
        label: w2[G],
        frames: h[G].keyframes.map((ne) => ne.frame + te),
        selectedFrames: z(G)
      }))
    };
  }, f = e.stickers.filter((g) => g.placement === "sky").sort((g, h) => h.z_index - g.z_index), m = e.stickers.filter((g) => g.placement === "world"), w = ({ start: g, in: h, duration: _ }) => ({ clip: { start: g, end: _ === null ? null : g + _ }, offset: g - h });
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
      ...[...f, ...m].map((g) => {
        const { clip: h, offset: _ } = w(g.clip);
        return u(g.id, g, nu(g), ze.image, h, _);
      }),
      ..._2(e.painting) || !e.painting_visible ? [{
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
      ...d || Ja(e.scene) ? [(() => {
        const { clip: g, offset: h } = w(e.scene.clip);
        return u("scene", e.scene, "Scene", ze.box, g, h, { keyable: !1 });
      })()] : []
    ]
  };
}
function k2(e, t, r, n) {
  const i = Nv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const M2 = 4, P2 = 0.25, w0 = {
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
  const { forward: n, right: i } = Di(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function N2() {
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
      return o * (t ? M2 : 1) * (r ? P2 : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const A2 = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), C2 = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function I2(e) {
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
function Op(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function E2(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return A2.has(r) && (r !== "frame" || t) && C2.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Op(s, -89.9, 89.9) && Op(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const O2 = 250, F2 = 600, T2 = 180, D2 = 2;
function L2(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Wo(e, t, r) {
  return e + (t - e) * r;
}
function R2(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Zu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / T2 + i / D2);
  return Math.round(Wo(O2, F2, o));
}
function V2(e, t, r) {
  const n = L2(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Wo(i, t.position[o], n)),
    yaw_deg: Ht(e.yaw_deg + Zu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Wo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Wo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Wo(e.distance, t.distance, n)
  };
}
function $2(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Zu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function z2(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return $2(e, t) ? null : { from: e, to: t, startTs: r, durationMs: R2(e, t, n), end: i };
}
function j2(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: V2(e.from, e.to, r), done: !1 };
}
function hl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function H2(e, t, r) {
  const n = hl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function G2(e) {
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
  let w, g, h, _, ee, $, te, C, X, z, G, ne, he, q = null;
  function fe(be, Q = null) {
    const ge = K();
    G(() => {
      i.viewTransition = z2(ge, be, performance.now(), { scale: y(), end: Q });
    }), !i.viewTransition && Q && ce(Q), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, ne(), X({ localOnly: !0, reason: ft.VIEW });
  }
  function ce(be) {
    pe(ru({ ...B(), moved: be.moved }, be.mode, k())), a.backgroundDirty = !0;
  }
  function oe() {
    i.viewTransition && (i.viewTransition = null, ne());
  }
  function U(be, Q) {
    fe({ ...K(), yaw_deg: be, pitch_deg: Q });
  }
  function E() {
    return !f || de() && !ee();
  }
  function j() {
    return i.mode === "pano" && A();
  }
  function A() {
    return u && xS({ sceneLinked: l && !!Vl(s).scene, files: z(), stickers: d.stickers });
  }
  function H() {
    return i.spaceMode === "6dof" && j();
  }
  function T() {
    var be, Q, ge;
    return Aw((ge = (Q = (be = t.ui) == null ? void 0 : be.settings) == null ? void 0 : Q.getSettingValue) == null ? void 0 : ge.call(Q, $g));
  }
  function B() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function pe(be) {
    i.spaceMode = be.mode, i.viewPosition = be.position, i.viewMoved = be.moved;
  }
  function ae(be) {
    var ge;
    const Q = H2(i.spaceMode, i.viewTransition, be);
    if (Q !== "keep") {
      if (Q === "return") {
        fe({ ...K(), position: k(), distance: ((ge = le()) == null ? void 0 : ge.radius) || sr }, { mode: be, moved: !1 });
        return;
      }
      oe(), pe(ru({ ...B(), position: K().position }, be, k())), a.backgroundDirty = !0, ne(), X({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function K() {
    var ge;
    const be = i.viewMoved ? i.viewDistance : ((ge = le()) == null ? void 0 : ge.radius) || sr, Q = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: be };
    return yS(i.spaceMode, Q, k());
  }
  function k() {
    return de() ? N().position : [0, 0, 0];
  }
  function re() {
    return r && d.camera !== null;
  }
  function de() {
    return re() && d.camera.visible;
  }
  function _e() {
    return d.painting_visible !== !1;
  }
  function we(be) {
    return be.visible && bo(be.clip, i.frame);
  }
  function N() {
    return Il(d.camera, i.frame);
  }
  function le() {
    var Q;
    const be = w();
    return ((Q = be.space ?? be.content) == null ? void 0 : Q.sphere) ?? null;
  }
  function b(be) {
    i.viewPosition = be.position, i.viewYaw = be.yaw_deg, i.viewPitch = be.pitch_deg, i.viewDistance = be.distance, i.viewMoved = !0, a.backgroundDirty = !0, X({ localOnly: !0, reason: ft.VIEW });
  }
  function y() {
    var be;
    return ((be = le()) == null ? void 0 : be.radius) || sr;
  }
  function I() {
    var M;
    const be = w().space, Q = g(), ge = i.worldSelectedId || i.selectedId, Y = Q.stickers.findIndex((W) => W.id === ge), p = Y < 0 ? null : {
      sticker: Q.stickers[Y],
      value: ks(Q, i.frame).stickers[Y],
      plane: be.stickers.find((W) => W.id === ge) ?? null,
      item: ((M = be.sticker) == null ? void 0 : M.id) === ge && be.sticker.url ? { kind: be.sticker.kind, box: o.sceneBox(be.sticker.url) } : null
    }, P = _() ? ue() : NS(le(), p);
    if (!P) return;
    const S = K();
    i.viewDistance = S.distance, i.viewMoved = !0, fe(wS(S, P, n.width, n.height));
  }
  function v(be) {
    return o.pickSurface(Se(), be.x, be.y, n.width, n.height);
  }
  function V(be, Q) {
    var ge;
    return iu(be, Q, i.viewMoved ? null : (ge = le()) == null ? void 0 : ge.center, y());
  }
  function L() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function J(be, Q) {
    const ge = performance.now(), Y = { x: be.x, y: be.y, time: ge, key: o.contentRevision(), view: L() };
    if (!Fm(q, Y)) {
      const P = v(be);
      q = { ...Y, cost: performance.now() - ge, hit: P };
    }
    const p = K();
    b(Lm(p, V(p, q.hit), Q, y())), q.view = L(), q.wheelTime = ge;
  }
  function O(be, Q, ge) {
    const Y = K();
    i.interaction = be === "orbit" ? { kind: "space_orbit", last: Q, pivot: V(Y, v(Q)) } : { kind: "space_pan", last: Q, depth: Om(Y, y()) }, he(Q), n.setPointerCapture(ge);
  }
  function F() {
    return H() || $();
  }
  function x(be) {
    const Q = C.elapsed(be);
    if (!Q || i.viewTransition) return !1;
    const ge = C.speed(y()) * Q;
    if ($()) return te(C.direction(), ge);
    if (!H()) return !1;
    const Y = K(), p = k0(Y, C.direction(), ge);
    return p === Y ? !1 : (i.viewPosition = p.position, i.viewDistance = Y.distance, i.viewMoved = !0, !0);
  }
  function R() {
    il(s).view = I2(i);
  }
  function Z() {
    const be = c && !b0({ hasShot: !!h(), erp: ee() }).disabled, Q = E2(il(s).view, { frame: be });
    Q && Object.assign(i, Q);
  }
  function me(be) {
    return be * 0.2;
  }
  function ue() {
    return { center: N().position, radius: me(y()) };
  }
  function ve(be, Q) {
    const { yaw_deg: ge, pitch_deg: Y } = jm(be.position, Q);
    return { ...be, yaw_deg: ge, pitch_deg: Y };
  }
  function Se() {
    return gd(K(), n.width, n.height, le());
  }
  return {
    connect(be) {
      ({
        editorViewInput: w,
        editorViewSceneState: g,
        getActiveCutoutShot: h,
        isCameraSelected: _,
        isErpCamera: ee,
        isFreeFrameView: $,
        moveFrameByKeys: te,
        moveKeys: C,
        requestDraw: X,
        sceneFiles: z,
        startAnimation: G,
        syncFloatingViewButtonState: ne,
        updateCursor: he
      } = be);
    },
    transitionView: fe,
    applyViewTransitionEnd: ce,
    cancelViewTransition: oe,
    turnViewTo: U,
    cameraPreviewShown: E,
    isSpaceView: j,
    hasSpaceContent: A,
    isFreeSpaceView: H,
    viewControls: T,
    spaceModeState: B,
    applySpaceMode: pe,
    setSpaceMode: ae,
    spaceViewState: K,
    spaceOrigin: k,
    hasCamera: re,
    cameraShoots: de,
    paintingShown: _e,
    sceneStickerShown: we,
    cutoutCamera: N,
    contentSphere: le,
    setSpaceView: b,
    spaceScale: y,
    frameSpaceContent: I,
    zoomSpaceAt: J,
    startSpaceDrag: O,
    canKeyMove: F,
    stepKeyMove: x,
    saveView: R,
    restoreView: Z,
    currentSpaceCamera: Se,
    cameraFrustumLength: me,
    cameraSphere: ue,
    lookingAt: ve
  };
}
function K2(e) {
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
  let u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we = { revision: -1, sceneState: null }, N = null;
  function le() {
    return N || (N = I()), N;
  }
  function b() {
    N = null;
  }
  function y() {
    return we.sceneState;
  }
  function I() {
    const Se = X(), be = m(), Q = { ...a.assets };
    for (const Pe of l ? [] : a.stickers) {
      const Ce = String((Pe == null ? void 0 : Pe.asset_id) || "");
      Ce && !Q[Ce] && i.has(Ce) && (Q[Ce] = { type: "comfy_image", filename: Ce });
    }
    const ge = l ? a.stickers.map((Pe) => oe(Pe) ? { ...Pe, source: { kind: "file", filename: ae(Pe) } } : Pe) : a.stickers;
    we.revision !== s.stateRevision && (we = { revision: s.stateRevision, sceneState: Gr({ ...a, stickers: ge, assets: Q, painting: null }) }), l && v(we.sceneState);
    const Y = ks(we.sceneState, r.frame), p = E ? te() : null, P = (Pe) => {
      if (l && !Pe.visible) return null;
      if (E && q(Pe)) return p;
      const Ce = G(Pe);
      return Ce ? { media: Ce, revision: z(Ce) } : null;
    }, S = de(), M = [...S.sky, ...Ym(we.sceneState, r.frame, a.stickers, { media: P, paintLayers: be, evaluated: Y })], W = Se && (Se === d || Se === c) ? d.dataset.panoSrc : Se, ye = he(Se) ? { media: Se, revision: z(Se), coverage: f(), source: W } : null, D = ne(), ie = bS(H(), D, T());
    ie.mode !== r.spaceMode && h(), u(ie);
    const Ne = D ? V(we.sceneState, Y, P, S) : null, xe = ce() ? { ...Ne, ...L(Ne) } : null;
    return { background: ye, layers: M, space: xe, content: Ne };
  }
  function v(Se) {
    const be = new Map(a.stickers.map((Q) => [Q.id, Q.clip]));
    Se.scene.clip = { ...a.scene.clip };
    for (const Q of Se.stickers) {
      const ge = be.get(Q.id);
      ge && (Q.clip = { ...ge });
    }
  }
  function V(Se, be, Q, ge) {
    const Y = j(), p = yd(Y, be.scene), P = p != null && p.url ? n.sceneBox(p.url) : null, S = P && wa(p.kind, P), M = pe(), W = $m(M, Se, be), ye = W != null && W.url ? n.sceneBox(W.url) : null, D = ye ? [{ box: wa(W.kind, ye), value: W.value }] : [], ie = Xm(Se, r.frame, a.stickers, { media: Q, evaluated: be });
    for (const { request: xe, value: Pe } of ge.items) {
      const Ce = xe != null && xe.url ? n.sceneBox(xe.url) : null;
      Ce && D.push({ box: wa(xe.kind, Ce), value: Pe });
    }
    const Ne = lu(MS(be, S, [...ie, ...ge.stickers], D));
    return {
      evaluated: be,
      sceneUrls: Y ? Y.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: zm(M, Se),
      sticker: W,
      stickers: ie,
      upstreamStickers: ge.stickers,
      upstreamItems: ge.items,
      sphere: Ne
    };
  }
  function L(Se) {
    var Q;
    const be = ((Q = Se.sphere) == null ? void 0 : Q.radius) || sr;
    return {
      gizmo: O() ? R() : J(Se.evaluated),
      grid: r.showGrid && !r.fullscreen ? VS(be) : null,
      lines: g() ? x(be) : []
    };
  }
  function J(Se) {
    const be = A(), Q = Se.stickers.find((ge) => ge.id === (be == null ? void 0 : be.id));
    return !_e(be) || !(Q != null && Q.active) ? null : { mode: r.gizmoMode, transform: ou(Q) };
  }
  function O() {
    return g() && r.selectedId === dd;
  }
  let F = { revision: -1, span: -1, segments: [] };
  function x(Se) {
    const be = k();
    (F.revision !== s.stateRevision || F.span !== be) && (F = { revision: s.stateRevision, span: be, segments: zS(jS(a, be)) });
    const { segments: Q } = F, ge = Q.length ? [{ segments: Q, color: mN }] : [];
    if (!fe()) return ge;
    const Y = O() ? u0 : hN;
    return [...ge, { segments: Hm(ee(), w(Se)), color: Y }];
  }
  function R() {
    return !fe() || !O() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: ou({ ...ee(), scale: 1 }) };
  }
  function Z() {
    const { background: Se, layers: be, space: Q } = le(), ge = t.width, Y = t.height, p = $({ x: 0, y: 0, w: ge, h: Y });
    let P = !1;
    return !Se && !be.length && !Q ? (n.clear(460551), P = n.ready) : (n.clear(), P = !!n.render({
      rect: p,
      camera: Q ? gd(B(), ge, Y, Q.sphere) : _(),
      background: Se,
      layers: be,
      space: Q
    })), K(), (r.worldSelectedId || O() || U()) && re(), P;
  }
  function me(Se) {
    const { content: be } = le();
    return !be || !Se.position ? es(Se) : Rm(es(Se), Se.position, C(), be.sphere);
  }
  function ue(Se, be, Q, ge = null) {
    const { background: Y, layers: p, content: P } = le();
    if (!Y && !p.length && !P) return null;
    const S = P && be.position ? P : null;
    return n.render({ rect: Se, camera: me(be), background: Y, layers: p, space: S, owner: Q, clearColor: ge });
  }
  function ve(Se) {
    return n.clear(460551), !!n.renderUnwrap({ rect: $(Se), ...le() });
  }
  return {
    connect(Se) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: m,
        cameraFrustumLength: w,
        cameraShoots: g,
        cancelViewTransition: h,
        currentViewCamera: _,
        cutoutCamera: ee,
        deviceRect: $,
        followPortSticker: te,
        frameViewDistance: C,
        getConnectedErpImage: X,
        getMediaRevisionToken: z,
        getStickerImage: G,
        hasSpaceContent: ne,
        isDecodedImageReady: he,
        isExternalSticker: q,
        isFreeSpaceView: fe,
        isSpaceView: ce,
        isUploadingSticker: oe,
        isWorldMenuShown: U,
        portVideo: E,
        sceneFiles: j,
        selectedWorldSticker: A,
        spaceModeState: H,
        spaceOrigin: T,
        spaceViewState: B,
        stickerFiles: pe,
        stickerImageKey: ae,
        syncFloatingViewButtonState: K,
        timelineSpanFrames: k,
        updateSelectionMenu: re,
        upstreamViewInput: de,
        worldStickerEditable: _e
      } = Se);
    },
    editorViewInput: le,
    endEditorViewFrame: b,
    editorViewSceneState: y,
    isCameraSelected: O,
    renderEditorView: Z,
    shotViewCamera: me,
    drawEditorViewShot: ue,
    renderEditorViewUnwrap: ve
  };
}
function W2(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [] };
  const m = /* @__PURE__ */ new Map(), w = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function g(oe) {
    if (!oe) return null;
    let U = m.get(oe);
    return U || (U = new Image(), U.onload = w, U.onerror = w, U.src = oe, m.set(oe, U)), U;
  }
  function h({ sceneState: oe, ui: U }) {
    return [
      ...oe.stickers.filter((E) => E.source.kind !== "port").map((E) => n(Qa(E.source))),
      i(Tr(U, po)[0] || null),
      ...oe.painting.raster_objects.map((E) => E.rasterDataUrl)
    ].filter(Boolean);
  }
  function _() {
    return a && (Kf(o, "scene") === m0 || !!ee());
  }
  function ee() {
    const oe = a && Qt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, U = Array.isArray(oe) ? oe : null;
    if (f.list !== U) {
      f.entries.forEach(fe), f = { list: U, entries: U ? $N(U).map((j) => ({ layer: j })) : [] };
      const E = new Set(f.entries.flatMap((j) => h(j.layer)));
      for (const j of [...m.keys()]) E.has(j) || m.delete(j);
    }
    return U && f.entries;
  }
  function $() {
    if (!ee()) return 0;
    const [oe] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(oe) > 0 ? Number(oe) : 0;
  }
  function te() {
    if (!a) return "";
    const oe = ee();
    if (GN(Kf(o, "scene"), oe)) return "Run the workflow to show the upstream scene.";
    if (!oe) return "";
    const U = t.uiList(o, "pano_sticker_warnings");
    return String(U.find((E) => String(E).startsWith(HN)) ?? "");
  }
  function C(oe, U, E) {
    const { ui: j, sceneState: A } = oe.layer, H = A.timeline.fps, T = Tr(j, c0)[0], B = Tr(j, l0).map(i).filter(Boolean), pe = i(Tr(j, a0)[0] || null), ae = T && typeof T == "object" ? B.length ? { frames: B, meta: T } : pe ? { src: pe, meta: T } : null : null, K = g(i(Tr(j, po)[0] || null)), k = ae ? _d(U.clip, E, H, ae.meta) : null;
    let re = K;
    if (ae != null && ae.frames)
      oe.frames || (oe.frames = xd({
        createImage: (de, _e) => {
          const we = new Image();
          return we.onload = _e, we.onerror = _e, we.src = de, we;
        },
        onLoad: w
      })), re = oe.frames.picture(ae.frames, k, ae.meta, K);
    else if (ae != null && ae.src) {
      const de = X(oe);
      de.follow({ src: ae.src, time: k, playing: d.advancing, fps: H }), re = de.picture(oe.still, K);
    }
    return re ? { media: re, revision: c(re), source: wd(ae, K) } : null;
  }
  function X(oe) {
    if (oe.follower) return oe.follower;
    const U = xs(document, "editor.upstream-port-video");
    U.playsInline = !0, U.preload = "auto";
    const E = rn({ label: "editor.upstream-port-still" });
    return E.__panoFrameIdx = 0, oe.video = U, oe.still = E, oe.follower = Nd({
      video: U,
      onCapture: () => {
        var H;
        const j = Number(U.videoWidth || 0), A = Number(U.videoHeight || 0);
        j < 1 || A < 1 || (E.width = j, E.height = A, (H = E.getContext("2d")) == null || H.drawImage(U, 0, 0), E.__panoFrameIdx += 1, w());
      },
      onChange: w
    }), oe.follower;
  }
  function z(oe, U, E) {
    if (U.source.kind === "port") return C(oe, U, E);
    const j = g(n(Qa(U.source)));
    return j ? { media: j, revision: c(j) } : null;
  }
  function G(oe) {
    var ae;
    const { sceneState: U } = oe.layer, { painting: E } = U, j = E.paint.strokes.length + E.mask.strokes.length;
    if (!U.painting_visible || !j && !E.raster_objects.length) return [];
    const A = l(), H = `${A.width}x${A.height}`;
    oe.paintSize !== H && (he(oe), oe.paintSize = H, oe.paintEngine = j ? Al(A) : null, (ae = oe.paintEngine) == null || ae.rebuildCommitted({ painting: E }), oe.rasters = /* @__PURE__ */ new Map());
    const T = oe.paintEngine, B = (T == null ? void 0 : T.getMaskDisplayCanvas()) || null, pe = [];
    for (const K of KN(U, T ? T.getAllGroupIds() : [], !!B)) {
      const k = K.kind === "group" ? T == null ? void 0 : T.getGroupDisplayCanvas(K.id) : K.kind === "mask" ? B : ne(oe, K.item, A);
      k && pe.push({ id: `${K.kind}:${K.id}`, media: k, revision: H, opacity: 1, zIndex: K.zIndex });
    }
    return pe;
  }
  function ne(oe, U, { width: E, height: j }) {
    if (oe.rasters.has(U.id)) return oe.rasters.get(U.id);
    const A = g(U.rasterDataUrl);
    if (!A.complete || !A.naturalWidth) return null;
    const H = rn({ label: "editor.upstream-raster-erp", width: E, height: j }), T = H.getContext("2d");
    return T ? (d0(T, A, U, E, j), oe.rasters.set(U.id, H), H) : null;
  }
  function he(oe) {
    var U;
    (U = oe.rasters) == null || U.forEach((E) => as(E)), oe.rasters = null, oe.paintEngine = null, oe.paintSize = null;
  }
  function q() {
    const oe = ee() ?? [], U = { sky: [], stickers: [], items: [] }, E = WN(oe.map((j) => j.layer));
    return oe.forEach((j, A) => {
      const H = zN(r.frame, s.timeline.fps, j.layer.sceneState.timeline.fps), T = UN(j.layer, E[A], H, {
        media: (B) => z(j, B, H),
        paintLayers: G(j),
        source: i
      });
      U.sky.push(...T.sky), U.stickers.push(...T.stickers), U.items.push(...T.items);
    }), U;
  }
  function fe(oe) {
    var U;
    (U = oe.follower) == null || U.dispose(), oe.still && as(oe.still), he(oe);
  }
  function ce() {
    f.entries.forEach(fe), f = { list: null, entries: [] }, m.clear();
  }
  return {
    connect(oe) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = oe);
    },
    upstreamLinked: _,
    upstreamNotice: te,
    upstreamSpanFrames: $,
    upstreamViewInput: q,
    disposeUpstream: ce
  };
}
const Iu = "camera_preview";
function U2(e) {
  return e === Iu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function B2(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function M0(e, t = !1) {
  const r = Ie(Fi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function Y2(e) {
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
  let d, u, f, m, w = null, g = !1, h = !1;
  function _() {
    g && (g = !1, o.releaseSplats(Iu));
  }
  function ee() {
    w = null, h = !1, _();
  }
  function $(ne) {
    if (!n || !ne) return !1;
    const he = n.closest(".pano-camera-preview");
    if (!he) return !1;
    const q = Math.round(Number(he.clientWidth || n.clientWidth || 0)), fe = Math.round(Number(he.clientHeight || n.clientHeight || 0));
    return Math.abs(q - Number(ne.width || 0)) <= 1 && Math.abs(fe - Number(ne.height || 0)) <= 1;
  }
  function te(ne, he) {
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
    const fe = M0(q, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = fe.width, c.cameraPreview.height = fe.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, _();
      return;
    }
    const ce = window.devicePixelRatio || 1, oe = Math.max(1, fe.width * ce), U = Math.max(1, fe.height * ce), E = Math.min(1, t.width / oe, t.height / U), j = { width: Math.max(1, Math.floor(oe * E)), height: Math.max(1, Math.floor(U * E)) }, A = !w || w.width !== j.width || w.height !== j.height || B2(he);
    if (ne && A) {
      g = !0;
      const T = u({ x: 0, y: t.height - j.height, w: j.width, h: j.height }, q, Iu);
      w = T ? j : null, T && G(T);
    }
    if (!w) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const H = $(fe);
    c.cameraPreview.ready = !0, c.cameraPreview.label = H ? "" : "Loading preview", c.cameraPreview.settled = H && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function C() {
    w = null, h = !1;
  }
  let X = 0, z = !1;
  function G(ne) {
    const he = ++X;
    createImageBitmap(ne.canvas, ne.x, ne.y, ne.width, ne.height).then((q) => {
      var fe;
      if (he !== X || !s.running) {
        q.close();
        return;
      }
      (fe = r.getContext("bitmaprenderer")) == null || fe.transferFromImageBitmap(q);
    }).catch((q) => {
      he !== X || !s.running || (h = !0, w = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !z && (z = !0, console.error("[PanoramaStickers] camera preview frame failed", q)));
    });
  }
  return {
    connect(ne) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = ne);
    },
    drawCutoutOutputPreview: te,
    forgetCameraPreviewFrame: C
  };
}
function q2(e) {
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
  let u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we, N, le, b;
  function y(Q) {
    const ge = r.width, Y = r.height, p = G();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ge, Y), re(), Q && (a.backgroundDirty = !we(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let S = 0; S <= 16; S += 1) {
        const M = p.x + p.w * S / 16;
        n.beginPath(), n.moveTo(M, p.y), n.lineTo(M, p.y + p.h), n.stroke();
      }
      for (let S = 0; S <= 8; S += 1) {
        const M = p.y + p.h * S / 8;
        n.beginPath(), n.moveTo(p.x, M), n.lineTo(p.x + p.w, M), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const P = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, P), n.fillText("Front", p.x + p.w * 0.5, P), n.fillText("Right", p.x + p.w * 0.75, P), n.fillText("Back", p.x + 38, P), n.fillText("Back", p.x + p.w - 38, P);
    }
  }
  function I(Q, ge, Y = 1) {
    let p = !1;
    n.strokeStyle = ge, n.lineWidth = Y, n.beginPath();
    for (const P of Q) {
      const S = pe(P);
      if (!S) {
        p = !1;
        continue;
      }
      p ? n.lineTo(S.x, S.y) : (n.moveTo(S.x, S.y), p = !0);
    }
    n.stroke();
  }
  function v(Q) {
    const ge = r.width, Y = r.height;
    if (n.clearRect(0, 0, ge, Y), re(), Q && (a.backgroundDirty = !_e()), i.showGrid && !i.fullscreen && g().space)
      V();
    else if (i.showGrid && !i.fullscreen) {
      for (let P = -180; P <= 180; P += 15) {
        const S = [];
        for (let M = -89; M <= 89; M += 4) S.push(Dn(P, M));
        I(S, "#3f3f46", P % 90 === 0 ? 1.3 : 1);
      }
      for (let P = -75; P <= 75; P += 15) {
        const S = [];
        for (let M = -180; M <= 180; M += 4) S.push(Dn(M, P));
        I(S, P === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", P === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((P) => {
        const S = pe(P.dir);
        S && n.fillText(P.name, S.x, S.y + 24);
      });
    }
  }
  function V() {
    const Q = gd(b(), r.width, r.height, f()), ge = ps(Q, [0, 0, 0], r.width, r.height);
    ge && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ge.x, ge.y - 12));
  }
  function L(Q, ge) {
    const Y = B(Q), p = Dn(Number(Y.yaw_deg || 0), Number(Y.pitch_deg || 0)), P = i.mode === "unwrap" ? ae(p) : null, S = P ? P.x : null, M = i.mode === "pano" ? 28 : 20, W = [
      N(Q, 0, M, S),
      N(Q, 1, M, S),
      N(Q, 2, M, S),
      N(Q, 3, M, S)
    ];
    Cd(n, W, { selected: ge });
  }
  function J(Q, ge = []) {
    if (!(!Q || !Array.isArray(ge) || ge.length < 4)) {
      Q.beginPath(), Q.moveTo(ge[0].x, ge[0].y);
      for (let Y = 1; Y < 4; Y += 1) Q.lineTo(ge[Y].x, ge[Y].y);
      Q.closePath();
    }
  }
  function O(Q, ge, Y) {
    const p = Array.isArray(Q == null ? void 0 : Q.corners) ? Q.corners : [];
    if (p.length < 4) return;
    const P = Ie(Number((Q == null ? void 0 : Q.visibilityAlpha) ?? 1), 0, 1);
    if (P <= 0.01) return;
    const S = n.globalAlpha;
    n.globalAlpha = S * P;
    const M = Y ? "rgba(255, 116, 116, 0.96)" : ge ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", W = Y ? "rgba(255, 89, 89, 0.08)" : ge ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ye = ge ? 3.2 : 2.6;
    J(n, p), n.fillStyle = W, n.fill(), n.strokeStyle = M, n.lineWidth = ye, n.stroke(), n.save(), n.strokeStyle = M, n.lineWidth = ge ? 3.2 : 2.6, n.lineCap = "round";
    const D = Array.isArray(Q == null ? void 0 : Q.edgeMidpoints) && Q.edgeMidpoints.length >= 4 ? Q.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], ie = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ne = ge ? 12 : 9;
    D.forEach((xe) => {
      const Ce = D.find(($e) => ($e == null ? void 0 : $e.edge) === ie[xe == null ? void 0 : xe.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Le = Ce.x - xe.x, je = Ce.y - xe.y, Ke = Math.hypot(Le, je) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + Le / Ke * Ne, xe.y + je / Ke * Ne), n.stroke();
    }), n.restore(), n.globalAlpha = S;
  }
  function F(Q, ge, Y, p) {
    const P = Ie(Number((ge == null ? void 0 : ge.visibilityAlpha) ?? 1), 0, 1);
    if (P <= 0.01) return;
    if (j(Q)) {
      O(ge, Y, p);
      return;
    }
    if (A(Q)) {
      const M = n.globalAlpha;
      n.globalAlpha = M * z(Q) * P, i.mode === "frame" ? (n.strokeStyle = Y ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Y ? 2 : 1, J(n, ge.corners), n.stroke()) : L(Q, Y), n.globalAlpha = M;
      return;
    }
    const S = n.globalAlpha;
    n.globalAlpha = S * P, n.fillStyle = Y ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", J(n, ge.corners), n.fill(), n.strokeStyle = Y ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Y ? 2.8 : 1.9, J(n, ge.corners), n.stroke(), n.globalAlpha = S;
  }
  function x(Q, ge, Y) {
    if (A(Q)) {
      Rg(n, ge, { accent: Y });
      return;
    }
    const p = !(j(Q) && he());
    n.fillStyle = Y, p && ge.corners.forEach((P) => {
      n.beginPath(), n.arc(P.x, P.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && j(Q) && (n.strokeStyle = Y, n.lineCap = "round", n.lineWidth = 4, ge.edgeMidpoints.forEach((P) => {
      var Ne, xe, Pe, Ce;
      const S = (((Ne = P.b) == null ? void 0 : Ne.x) ?? P.x) - (((xe = P.a) == null ? void 0 : xe.x) ?? P.x), M = (((Pe = P.b) == null ? void 0 : Pe.y) ?? P.y) - (((Ce = P.a) == null ? void 0 : Ce.y) ?? P.y), W = Math.hypot(S, M) || 1, ye = S / W, D = M / W, ie = 10;
      n.beginPath(), n.moveTo(P.x - ye * ie, P.y - D * ie), n.lineTo(P.x + ye * ie, P.y + D * ie), n.stroke();
    }), n.lineCap = "butt"), H(Q) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ge.rotateStemBase.x, ge.rotateStemBase.y), n.lineTo(ge.rotateHandle.x, ge.rotateHandle.y), n.stroke(), n.fillStyle = Y, n.beginPath(), n.arc(ge.rotateHandle.x, ge.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function R() {
    var S;
    const Q = i.mode === "frame" ? [] : X(), ge = Q.length > 1, Y = l ? _() : te(), p = Y.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${j(M) ? "frame" : Number((M == null ? void 0 : M.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Y || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: Y,
      orderKey: p,
      sorted: [...Y]
    });
    const P = i._sortedItemsCache.sorted;
    for (const M of P) {
      const W = i.mode !== "frame" && !ge && oe(M);
      if (i.mode === "frame" && !W) continue;
      const ye = A(M), D = j(M), ie = ce(M);
      if (!ye && !D || E(M) && !le(M)) continue;
      const Ne = T(M);
      if (d !== "stickers" && !Ne.visible)
        continue;
      const xe = Ie(Number((Ne == null ? void 0 : Ne.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Pe = D && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Pe, F(M, Ne, W, ie), W && Ne.visible) {
        const Ce = ie ? "#ff4d4f" : ye && q(M) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * xe, x(M, Ne, Ce), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const M = i.cutoutPanoFrameVisual, W = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= W, O(M.geom, M.selected, M.locked), M.selected && x(
        M.item,
        M.geom,
        M.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ge) {
      const M = C(Q);
      if (M != null && M.visible) {
        const W = u(Q) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(M.corners[0].x, M.corners[0].y);
        for (let ye = 1; ye < M.corners.length; ye += 1) n.lineTo(M.corners[ye].x, M.corners[ye].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = W, M.corners.forEach((ye) => {
          n.beginPath(), n.arc(ye.x, ye.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      Q.forEach((M) => {
        if (!H(M) && !U(M)) return;
        const W = T(M);
        if (!(W != null && W.visible)) return;
        const ye = ce(M) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(W.corners[0].x, W.corners[0].y);
        for (let D = 1; D < W.corners.length; D += 1) n.lineTo(W.corners[D].x, W.corners[D].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ye, W.corners.forEach((D) => {
          n.beginPath(), n.arc(D.x, D.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((S = i.interaction) == null ? void 0 : S.kind) === "marquee_select") {
      const M = de(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(M.x0, M.y0, M.x1 - M.x0, M.y1 - M.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Z(Q) {
    const ge = h(), Y = ee(ge);
    if (!ge || !Y)
      return n.clearRect(0, 0, r.width, r.height), Q && o.clear(657930), !1;
    const p = { x: Y.x, y: Y.y, w: Y.w, h: Y.h }, { rect: P, shot: S } = Wm(ge, Y, { width: r.width, height: r.height }), M = me(p);
    if (n.clearRect(0, 0, r.width, r.height), Q) {
      o.clear(657930);
      const W = m(P), ye = !!w(W, S, void 0, 657930);
      ye || o.clear(1118481, W), a.backgroundDirty = !ye;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, M), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = u0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, M - 1)), n.stroke(), n.restore(), !0;
  }
  function me(Q) {
    const ge = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ge, Number((Q == null ? void 0 : Q.w) || 0) * 0.5, Number((Q == null ? void 0 : Q.h) || 0) * 0.5);
  }
  function ue() {
    var ye, D;
    if (((ye = i.interaction) == null ? void 0 : ye.kind) !== "paint_lasso_fill") return;
    const Q = i.interaction.stroke, ge = (D = Q == null ? void 0 : Q.geometry) == null ? void 0 : D.points;
    let Y;
    if (i.mode === "frame") {
      const ie = h(), Ne = $(ie);
      Y = K(ge, ie, Ne);
    } else
      Y = k(ge);
    if (!Array.isArray(Y) || Y.length < 3) return;
    const p = String((Q == null ? void 0 : Q.layerKind) || "") === "mask", P = (Q == null ? void 0 : Q.color) || { r: 1, g: 0.25, b: 0.25 }, S = Math.round(Number(P.r || 0) * 255), M = Math.round(Number(P.g || 0) * 255), W = Math.round(Number(P.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Y[0].x || 0), Number(Y[0].y || 0));
    for (let ie = 1; ie < Y.length; ie++) n.lineTo(Number(Y[ie].x || 0), Number(Y[ie].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${S},${M},${W},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function ve() {
    const Q = i.frameRollOverlayVisual, ge = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(Q != null && Q.shot) || ge <= 1e-4) return;
    const Y = $(Q.shot);
    if (!Y) return;
    const p = { x: Y.x + Y.w * 0.5, y: Y.y + Y.h * 0.5 }, P = Number(Q.shot.roll_deg ?? Q.shot.rot_deg ?? 0) * _r, S = Math.hypot(Y.w, Y.h) * 0.55, M = Math.cos(P) * S, W = Math.sin(P) * S;
    n.save(), n.globalAlpha *= ge, n.beginPath(), n.rect(Y.x, Y.y, Y.w, Y.h), n.clip(), n.translate(p.x, p.y), n.rotate(P);
    const ye = Math.max(12, Math.min(Y.w, Y.h) / 6);
    n.beginPath();
    for (let D = -S; D <= S; D += ye)
      n.moveTo(D, -S), n.lineTo(D, S);
    for (let D = -S; D <= S; D += ye)
      n.moveTo(-S, D), n.lineTo(S, D);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - M, p.y - W), n.lineTo(p.x + M, p.y + W), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !h() || t && fe() || c && !ne() ? 0 : bN;
  }
  function be() {
    const Q = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (Q <= 1e-4 || !l || i.mode !== "pano") return;
    const ge = h(), Y = ge ? T(ge) : null, p = Array.isArray(Y == null ? void 0 : Y.corners) && Y.corners.length >= 4 ? Y.corners.map((M) => ({ x: Number(M.x || 0), y: Number(M.y || 0) })) : null;
    Y != null && Y.visible && p && (i.cutoutPanoDimCorners = p), ge && (Y != null && Y.visible) && p && (i.cutoutPanoFrameVisual = {
      item: ge,
      geom: Y,
      selected: oe(ge),
      locked: ce(ge)
    });
    const P = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, S = Y != null && Y.visible ? p : P ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${Q})`, n.beginPath(), n.rect(0, 0, r.width, r.height), S.length >= 4) {
      n.moveTo(S[0].x, S[0].y);
      for (let M = 1; M < 4; M += 1) n.lineTo(S[M].x, S[M].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(Q) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: w,
        editorViewInput: g,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: _,
        getFrameViewLayout: ee,
        getFrameViewRect: $,
        getList: te,
        getMultiSelectionGeom: C,
        getSelectedItems: X,
        getStickerDisplayAlpha: z,
        getUnwrapRect: G,
        isCameraSelected: ne,
        isErpCamera: he,
        isExternalSticker: q,
        isFreeSpaceView: fe,
        isItemLocked: ce,
        isItemSelected: oe,
        isRasterObjectItem: U,
        isSceneSticker: E,
        isShotItem: j,
        isStickerItem: A,
        isStrokeGroupItem: H,
        objectGeom: T,
        poseOf: B,
        projectDir: pe,
        projectDirUnwrap: ae,
        projectErpLassoPointsToFrameRect: K,
        projectLassoPointsToCurrentView: k,
        rebuildPaintEngineIfNeeded: re,
        rectFromPoints: de,
        renderEditorView: _e,
        renderEditorViewUnwrap: we,
        sampleStickerEdge: N,
        sceneStickerShown: le,
        spaceViewState: b
      } = Q);
    },
    drawGridUnwrap: y,
    drawGridPano: v,
    drawObjects: R,
    drawFrameViewBackground: Z,
    drawLassoOutlineOverlay: ue,
    drawFrameRollOverlay: ve,
    getCutoutPanoDimTarget: Se,
    drawCutoutPanoPassepartout: be
  };
}
function X2(e) {
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
    type: w,
    uiState: g,
    viewController: h
  } = e;
  let _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e = () => {
  };
  function we(Se = /* @__PURE__ */ new Set()) {
    he();
    const be = l.backgroundDirty;
    d && (H(), ee(be, Se)), i.mode === "frame" ? (l.frameSafeRect = E(), C(be)) : i.mode === "unwrap" ? z(be) : X(be), $(), ne(), ae(), G(), te(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && re(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const Q = oe();
    g.stageStatus = Q.status, g.stageStatusDetail = Q.detail, g.stageNotice = de(), Q.status === nr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", Q.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function N(Se = i.interaction) {
    if (w !== "stickers" || i.mode !== "pano") return !1;
    const be = String((Se == null ? void 0 : Se.kind) || "");
    return be === "move" || be === "scale" || be === "scale_x" || be === "scale_y" || be === "rotate" ? !0 : be === "move_multi" ? Array.isArray(Se == null ? void 0 : Se.stickerSnapshots) && Se.stickerSnapshots.length > 0 : !1;
  }
  function le() {
    return !!i.interaction || !!m.drag;
  }
  function b() {
    l.nodePreviewPending = !1;
    const Se = Hn(s);
    Se.liveState = f, Se.liveStateVersion += 1, ce();
  }
  function y(Se = {}) {
    var M, W, ye, D, ie, Ne, xe, Pe;
    const be = Se.reason ?? ft.STATE, Q = !!Se.localOnly, ge = Se.externalSync === !0, Y = String(Se.cause || ""), p = String(((M = i.interaction) == null ? void 0 : M.kind) || "");
    (!Q || p === "view" || p === "pan_frame" || N() || !!i.viewTransition || Y === "mode" || Y === "frame_view" || Y === "cutout_frame") && (l.backgroundDirty = !0), Q && U() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!Q || Y === "selection" || Y === "mode" || Y === "cutout_frame") && (K(), k()), le() ? l.nodePreviewPending = !0 : b(), ge && ((ye = (W = St(s).dom) == null ? void 0 : W.requestDraw) == null || ye.call(W), (D = s.setDirtyCanvas) == null || D.call(s, !0, !1)), ge && !Q && ((Ne = (ie = s.graph) == null ? void 0 : ie.setDirtyCanvas) == null || Ne.call(ie, !0, !0), (Pe = (xe = t == null ? void 0 : t.canvas) == null ? void 0 : xe.setDirty) == null || Pe.call(xe, !0, !0)), c.requestDraw(be);
  }
  function I() {
    const Se = n.getBoundingClientRect(), be = Math.max(2, Math.round(Se.width)), Q = Math.max(2, Math.round(Se.height)), ge = window.devicePixelRatio || 1, Y = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== be || n.height !== Q) && (n.width = be, n.height = Q);
    const p = HS(Se.width || be, Se.height || Q, ge, window.innerWidth || Se.width, window.innerHeight || Se.height);
    return o.resize(p.width, p.height), [n.width, n.height, r.width, r.height].join("x") === Y ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && v(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function v(Se) {
    Se(), c.wake();
  }
  function V() {
    return !!i.viewTransition || j.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || le();
  }
  function L(Se = performance.now(), be = /* @__PURE__ */ new Set()) {
    var P;
    l.nodePreviewPending && !le() && b(), be.forEach((S) => l.reasons.add(S)), be.size && (l.dirty = !0), [...be].some((S) => S !== ft.OVERLAY) && (l.backgroundDirty = !0), B(), l.lastTickTs > 0 ? Math.max(1e-3, (Se - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Se;
    const Q = i.mode === "frame" && ((P = i.interaction) == null ? void 0 : P.kind) === "roll_frame" ? i.interaction : null;
    Q != null && Q.shot && (i.frameRollOverlayVisual = { shot: Q.shot });
    const ge = Q ? 1 : 0;
    if (Math.abs(ge - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ge, i.frameRollOverlayStartTs = Se), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ge) > 1e-6) {
      const S = Ie(
        (Se - Number(i.frameRollOverlayStartTs || Se)) / vN,
        0,
        1
      );
      i.frameRollOverlayAlpha = Bn(
        Number(i.frameRollOverlayFrom || 0),
        ge,
        Ic(S)
      ), S >= 1 && (i.frameRollOverlayAlpha = ge, ge === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const Y = fe();
    if (Math.abs(Y - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = Y, i.cutoutPanoDimStartTs = Se), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Y) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoDimStartTs || Se)) / Pp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Bn(
        Number(i.cutoutPanoDimFrom || 0),
        Y,
        Ic(S)
      ), S >= 1 && (i.cutoutPanoDimAlpha = Y), S >= 1 && Y === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const p = d && q() ? 1 : 0;
    if (Math.abs(p - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = p, i.cutoutPanoFrameStartTs = Se), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoFrameStartTs || Se)) / Pp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Bn(
        Number(i.cutoutPanoFrameFrom || 0),
        p,
        Ic(S)
      ), S >= 1 && (i.cutoutPanoFrameAlpha = p, p === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const S = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), M = Ie((Se - Number(i.outputPreviewAnimStartTs || 0)) / S, 0, 1), ye = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? wN(M) : kN(M);
      i.outputPreviewAnim = Bn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ye), l.dirty = !0, M >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: S, done: M } = j2(i.viewTransition, Se);
      if (i.viewPosition = S.position, i.viewYaw = S.yaw_deg, i.viewPitch = S.pitch_deg, i.viewFov = S.hFOV_deg, i.viewDistance = S.distance, M) {
        const { end: W } = i.viewTransition;
        i.viewTransition = null, W && _(W), pe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (T(Se) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(Se) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
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
    } catch (be) {
      const Q = String((be == null ? void 0 : be.stack) || (be == null ? void 0 : be.message) || be || "unknown editor frame error");
      l.tickErrorSignature !== Q && (l.tickErrorSignature = Q, console.error("[PanoramaStickers] editor frame failed", be)), g.stageStatus = Yn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function O(Se = performance.now(), be = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const Q = i1();
    J(() => L(Se, be)), o1(Q);
  }
  function F() {
    !l.running || !I() || J(() => {
      l.dirty = !1, we(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const x = new ResizeObserver(F);
  let R = null;
  function Z() {
    R == null || R.removeEventListener("change", me), R = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), R.addEventListener("change", me);
  }
  function me() {
    Z(), F();
  }
  function ue() {
    _e = r1("editor", () => {
      var Se;
      return {
        type: w,
        readOnly: a,
        mode: i.mode,
        interaction: ((Se = i.interaction) == null ? void 0 : Se.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!A.playing
      };
    });
  }
  function ve() {
    _e(), l.running = !1, c.stop(), x.disconnect(), R.removeEventListener("change", me);
  }
  return {
    connect(Se) {
      ({
        applyViewTransitionEnd: _,
        drawCutoutOutputPreview: ee,
        drawCutoutPanoPassepartout: $,
        drawFrameRollOverlay: te,
        drawFrameViewBackground: C,
        drawGridPano: X,
        drawGridUnwrap: z,
        drawLassoOutlineOverlay: G,
        drawObjects: ne,
        endEditorViewFrame: he,
        getActiveCutoutShot: q,
        getCutoutPanoDimTarget: fe,
        getSharedLivePaintSurface: ce,
        getStageImageStatus: oe,
        isPaintCompositeInteraction: U,
        measureFrameSafeRect: E,
        moveKeys: j,
        playback: A,
        rebuildPaintEngineIfNeeded: H,
        stepKeyMove: T,
        syncCutoutShot: B,
        syncFloatingViewButtonState: pe,
        syncFrameRollKnob: ae,
        syncLookAtFrameButtonState: K,
        syncViewToggleState: k,
        updateSelectionMenu: re,
        upstreamNotice: de
      } = Se);
    },
    requestDraw: y,
    syncCanvasSize: I,
    startAnimation: v,
    editorAnimating: V,
    tick: O,
    stageResizeObserver: x,
    watchPixelRatio: Z,
    sampleEditorDiagnostics: ue,
    stopRenderLoop: ve
  };
}
function J2(e) {
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
    studio: w,
    type: g,
    uiState: h
  } = e;
  let _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we, N, le, b, y = 0;
  function I() {
    h.toolButtons.forEach((ue) => {
      const ve = ue.attr === "data-tool-mode", Se = ue.attr === "data-paint-tool", be = ue.attr === "data-mask-tool";
      ue.active = ve ? ue.value === r.primaryTool : Se ? ue.key === r.paintTool : be ? ue.key === r.maskTool : !1, ue.pressed = ue.active ? "true" : ue.pressed == null ? null : "false";
    });
  }
  function v() {
    if (w && Xi(h.toolButtons, "value", "add-camera", { disabled: ce() }), g !== "cutout") return;
    const ue = $();
    Xi(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ue ? "Look At Frame" : "Add Frame",
      tip: ue ? "Look at frame" : "Add frame",
      icon: ue ? ze.camera : ze.plus_circle
    });
  }
  function V() {
    const ue = p2({
      spaceView: pe(),
      spaceMode: hl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, ue.space);
    for (const [ve, Se] of Object.entries(ue.buttons)) Xi(h.floatingButtons, "action", ve, Se);
  }
  function L() {
    var Se;
    const ue = b0({ hasShot: !!$(), erp: E(), hidden: ce() && !ee(), studio: w });
    r.mode === "frame" && ue.disabled && (w ? K($()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((be) => {
      const Q = be.key === r.mode;
      be.pressed = Q ? "true" : "false", be.visible = !(be.key === "frame" && !f), be.key === "frame" ? Object.assign(be, ue) : be.disabled = !1;
    });
    const ve = f && r.mode === "frame" ? $() : null;
    h.frameRail.visible = !!ve, h.frameRail.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.visible = !!ve && !c && ve.locked !== !0, h.frameRollKnob.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.rollDeg = Number((ve == null ? void 0 : ve.roll_deg) ?? (ve == null ? void 0 : ve.rot_deg) ?? 0), h.frameRollKnob.displayValue = so(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", h.frameRollKnob.armed = !!ve && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = ve ? Dr(ve) : "", h.frameRail.aspectChoices = v0(ve ? String(Dr(ve)) : null, { erp: w, coverage: m.coverage }), ve || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!$(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && _(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), V(), H() ? le(r.pointerPos) : de(r.mode === "pano" ? "grab" : "default");
  }
  function J() {
    var ve;
    const ue = r.mode === "frame" ? $() : null;
    h.frameRollKnob.visible = !!ue && !c && ue.locked !== !0, h.frameRollKnob.rollDeg = Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0), h.frameRollKnob.displayValue = so(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((ve = r.interaction) == null ? void 0 : ve.kind) === "roll_frame", h.frameRollKnob.armed = !!ue && r.altModifier === !0;
  }
  function O() {
    I();
    const ue = c2({
      editor: r,
      swatches: jl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: mr,
      colorsApproximatelyEqual: pl,
      rgb01ToHsv: Au,
      hsv01ToRgb: Nu,
      getBrushPresetIdForTool: te,
      isActiveLassoTool: U
    });
    if (Object.assign(h.paintDock, ue), N(), !ue.visible) {
      i && (i.hidden = !0);
      return;
    }
    y && (clearTimeout(y), y = 0), o && (!ue.colorEnabled && i && !i.hidden && (y = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, y = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ue.pickerHueColor), i.style.setProperty("--picker-sat", ue.pickerSat), i.style.setProperty("--picker-val", ue.pickerVal), i.style.setProperty("--picker-hue", ue.pickerHue)), s && (s.style.left = ue.pickerSvLeft, s.style.top = ue.pickerSvTop), a && (a.style.left = ue.pickerHueLeft));
  }
  function F() {
    const ue = k(f && r.mode === "frame" ? $() : G());
    ue && (r.panelLastValues = {
      yaw_deg: Number(ue.yaw_deg || 0),
      pitch_deg: Number(ue.pitch_deg || 0),
      hFOV_deg: Number(ue.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ue.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(ue.rot_deg || 0),
      roll_deg: Number(ue.roll_deg || 0),
      aspect_id: Dr(ue)
    }, x());
  }
  function x() {
    _e(), we(), Z();
  }
  function R() {
    const ue = f && r.mode === "frame" ? $() : null;
    return [...ne(), re(), ue].some((ve) => T(ve) ? Ja(ve) : B(ve) && ce() && Ja(m.camera));
  }
  function Z() {
    if (n) return;
    m.ui_settings = m.ui_settings || {};
    const ue = l2(m.ui_settings);
    if (l) {
      h.sidePanel = u2({
        coverage: m.coverage,
        uiSettings: ue,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const ve = G(), Se = f && r.mode === "frame" ? $() : null, be = Se || ve, Q = Se ? [Se] : ne(), ge = Se ? "shot" : he();
    if (Q.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), be && ge !== "stroke") {
      const xe = k(be);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (ge === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (ge === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Dr(xe)
      }, T(be) && (r.panelLastValues.opacity = Ii(be, r.frame).opacity * 100);
    }
    const Y = r.panelLastValues || (g === "stickers" || ge === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = ge === "stroke" ? null : be, P = re(), S = t && (ge === "shot" || ge === "frame") && oe(), M = P ? nS(P, r.frame) : S ? { ...p, ...Qv(m.camera, r.frame), vFOV_deg: p.vFOV_deg } : T(p) ? r.panelLastValues : p || Y, W = P ? b(P) : !!p && !A(p);
    r.panelWasEnabled = W, v();
    let ye = null;
    if (Se) {
      const xe = fe({ item: Se, kind: "shot", label: "Frame" });
      ye = {
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
        const Le = $();
        Le && xe.push({ id: Le.id, label: "Camera", icon: q("frame"), item: Le, kind: "frame" }), z().forEach((je, Ke) => {
          var Fe, Ae;
          if (!je || T(je) && !je.visible) return;
          const $e = u ? nu(je) : j(je) ? String(je.id || $d) : String(((Ae = (Fe = m.assets) == null ? void 0 : Fe[je.asset_id]) == null ? void 0 : Ae.name) || je.asset_id || je.id), He = `${Ke + 1}. ${$e}${j(je) && ae(je) ? " (hidden)" : ""}`, se = fe({ item: je, label: He, kind: "image" });
          xe.push({ id: je.id, label: se.label, icon: se.icon, item: je, kind: "image" });
        });
      } else
        C().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const je = fe(Le);
          xe.push({ id: Le.item.id, label: je.label, icon: je.icon, item: Le.item, kind: Le.kind });
        });
      const Pe = (p == null ? void 0 : p.id) || "", Ce = P ? { label: nu(P), icon: ze.globe } : xe.find((Le) => Le.id === Pe) || xe[0];
      ye = {
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
    const D = [], ie = (xe, Pe, Ce, Le, je) => {
      const Ke = Ie(Number(M[xe] || 0), Ce, Le);
      D.push({
        key: xe,
        label: Pe,
        min: Ce,
        max: Le,
        step: je,
        value: Ke,
        displayValue: so(Ke),
        fillPct: Ie((Ke - Ce) / Math.max(1e-6, Le - Ce) * 100, 0, 100),
        enabled: W && !c
      });
    }, Ne = [];
    if (P) {
      for (const [xe, Pe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ce = Tc(M[xe]);
        ie(xe, Pe, -Ce, Ce, 0.01);
      }
      ie("yaw_deg", "Yaw", -180, 180, 0.1), ie("pitch_deg", "Pitch", -90, 90, 0.1), ie("roll_deg", "Roll", -180, 180, 0.1), ie("scale", "Scale", s0, Tc(M.scale), 0.01), ie("opacity", "Opacity", 0, 100, 1);
    } else if (Q.length > 1)
      Ne.push(`Selected objects: ${Q.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const xe = ge === "shot" || ge === "frame";
      if (S)
        for (const [Pe, Ce] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = Tc(M[Pe]);
          ie(Pe, Ce, -Le, Le, 0.01);
        }
      ie("yaw_deg", "Yaw", -180, 180, 0.1), ie("pitch_deg", "Pitch", -90, 90, 0.1), ie(ge === "image" || g === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ie("hFOV_deg", "H FOV", 1, 179, 0.1), ie("vFOV_deg", "V FOV", 1, 179, 0.1), xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && h2(Pe.key, { erp: E() });
      }), T(p) && !xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && m2(Pe.key, { port: j(p) });
      }), u && !xe && ie("opacity", "Opacity", 0, 100, 1);
    }
    h.sidePanel = y2({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: ye,
      enabled: W,
      selectedKind: P ? "world" : ge,
      selectedItems: Q,
      params: D,
      notes: Ne,
      uiSettings: ue,
      normalizeCoverageValue: Rn
    });
  }
  function me() {
    const { canUndo: ue, canRedo: ve } = X();
    Xi(h.toolButtons, "value", "undo", { disabled: !ue }), Xi(h.toolButtons, "value", "redo", { disabled: !ve });
  }
  return {
    connect(ue) {
      ({
        cameraPreviewShown: _,
        cameraShoots: ee,
        getActiveCutoutShot: $,
        getBrushPresetIdForTool: te,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: X,
        getList: z,
        getSelected: G,
        getSelectedItems: ne,
        getSelectedKind: he,
        getSelectionItemIcon: q,
        getSelectionItemLabelData: fe,
        hasCamera: ce,
        hasSpaceContent: oe,
        isActiveLassoTool: U,
        isErpCamera: E,
        isExternalSticker: j,
        isItemLocked: A,
        isPaintCursorEnabled: H,
        isSceneSticker: T,
        isShotItem: B,
        isSpaceView: pe,
        isStickerHidden: ae,
        leaveFrameView: K,
        poseOf: k,
        selectedWorldSticker: re,
        setCanvasCursor: de,
        syncCutoutShot: _e,
        syncTimeline: we,
        syncVideoTransportVisibility: N,
        updateCursor: le,
        worldStickerEditable: b
      } = ue);
    },
    syncLookAtFrameButtonState: v,
    syncFloatingViewButtonState: V,
    syncViewToggleState: L,
    syncFrameRollKnob: J,
    syncPaintUi: O,
    syncSidePanelControls: F,
    updateSidePanel: x,
    inspectorTimed: R,
    syncSidePanelModel: Z,
    syncUndoRedoButtons: me
  };
}
function Z2(e) {
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
  let m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe;
  function U() {
    if (!s || n) return;
    const y = j(), I = l.selection, v = I && A(I.owner);
    if (I) {
      const V = v ? H(I) : [];
      I.frames = I.frames.filter((L) => V.some((J) => v[J].keyframes.some((O) => O.frame === L))), I.frames.length || (l.selection = null);
    }
    d.timeline = x2(o, {
      span: y,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? E(),
      openRows: l.openRows,
      audio: K() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || tg(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Vl(r).scene && !ce()
    }), d.easing = l.selection ? k2(v, H(l.selection), l.selection.frames, T(l.selection.owner)) : null;
  }
  function E() {
    return _m(o, { camera: a });
  }
  function j(y = null) {
    const I = o.timeline.fps, v = o.stickers.find(_), V = v ? w() : null, L = Math.max(
      d.videoTransport.ready && !fe() ? Math.round(Number(d.videoTransport.duration || 0) * I) : 0,
      V ? fg(v.clip, I, V.meta) : 0,
      oe()
    );
    return wm(o, { minimum: Math.round(I * 5), frames: L, openClip: y, camera: a });
  }
  function A(y) {
    return y === "camera" ? g() ? o.camera : null : y === "scene" ? i ? o.scene : null : o.stickers.find((I) => I.id === y) || null;
  }
  function H(y) {
    return y.lane ? [y.lane] : So(A(y.owner));
  }
  function T(y) {
    if (y === "camera") return 0;
    const { clip: I } = A(y);
    return I.start - I.in;
  }
  function B(y) {
    return `${bo(y, t.frame)}:${y.start - y.in}`;
  }
  function pe(y) {
    const I = A(y);
    return !!I && I.locked !== !0;
  }
  function ae(y) {
    const I = Math.max(0, Math.round(y));
    if (I === t.frame) return;
    G(), t.frame = I, c.frame.value = I, G();
    const v = [t.selectedId, t.worldSelectedId];
    X(), ee(), v[0] !== t.selectedId || v[1] !== t.worldSelectedId ? q() : h() && ne(), he(), z({ reason: ft.PLAYHEAD });
  }
  function K() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function k(y) {
    C(), $.seek(y);
  }
  function re() {
    s && $.stop();
  }
  function de() {
    C(), $.toggle();
  }
  function _e() {
    G(), ee(), q(), he(), z();
  }
  function we() {
    te(), m(), _e();
  }
  function N() {
    const { selection: y } = l;
    pe(y.owner) && (re(), Mv(A(y.owner), H(y), y.frames, t.frame - T(y.owner)), l.selection = null, we());
  }
  function le(y) {
    const I = Ti(y);
    if (I === null || I === o.timeline.fps) return;
    re();
    const v = Math.round(t.frame * I / o.timeline.fps);
    Bv(o, I), l.selection = null, $.seek(v), we();
  }
  function b() {
    const y = f(r);
    y !== null && y !== o.timeline.fps && le(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: m,
        getPortMedia: w,
        hasCamera: g,
        inspectorTimed: h,
        isExternalSticker: _,
        markObjectVisualsDirty: ee,
        playback: $,
        pushHistory: te,
        refreshModalVideoSource: C,
        releaseHiddenSelection: X,
        requestDraw: z,
        syncCutoutShot: G,
        syncSidePanelModel: ne,
        updateSelectionMenu: he,
        updateSidePanel: q,
        upstreamBackground: fe,
        upstreamLinked: ce,
        upstreamSpanFrames: oe
      } = y);
    },
    syncTimeline: U,
    timelineTimed: E,
    timelineSpanFrames: j,
    timelineOwner: A,
    selectedLanes: H,
    timelineOffset: T,
    clipView: B,
    timelineEditable: pe,
    setTimelineFrame: ae,
    jumpTimelineTo: k,
    stopTimelinePlayback: re,
    togglePlayback: de,
    refreshTimelineEdit: _e,
    commitTimelineEdit: we,
    deleteSelectedKeyframes: N,
    changeTimelineFps: le,
    applyVideoTimelineFps: b
  };
}
function Q2(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A;
  function H(T) {
    if (!(n || !o)) {
      if (T.type === "seek") {
        if (T.phase === "move") {
          s.scrubFrame = T.frame, t.request("seek");
          return;
        }
        t.cancel(), T.phase === "start" && h(), g.seek(T.frame);
        return;
      }
      if (T.type === "play") {
        U();
        return;
      }
      if (T.type === "mute") {
        E(), ne();
        return;
      }
      if (T.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? oe()), s.selection = null, ne();
        return;
      }
      if (T.type === "toggle-row") {
        s.openRows.has(T.id) ? s.openRows.delete(T.id) : s.openRows.add(T.id), ne();
        return;
      }
      if (T.type === "toggle-visible") {
        if (T.id === _0) i.painting_visible = !i.painting_visible;
        else {
          const B = fe(T.id);
          if (!B) return;
          B.visible = !B.visible;
        }
        ee(), u();
        return;
      }
      if (T.type === "select-row") {
        const B = i.stickers.find((pe) => pe.id === T.id);
        if (B && !B.visible || T.id === "camera" && !l()) return;
        B && !bo(B.clip, r.frame) && w(B.clip.start), (B == null ? void 0 : B.placement) === "world" ? te(B.id) : T.id === "camera" ? X(f()) : X(m().find((pe) => pe.id === T.id) || null), G(), s.selection = null, A(), j(), $();
        return;
      }
      if (T.type === "select-keys") {
        const B = q(T.owner), pe = T.frames.map((k) => k - B), ae = s.selection, K = (ae == null ? void 0 : ae.owner) === T.owner && ae.lane === T.lane;
        if (T.additive && K) {
          const k = new Set(ae.frames);
          for (const re of pe)
            k.has(re) ? k.delete(re) : k.add(re);
          ae.frames = [...k].sort((re, de) => re - de);
        } else
          s.selection = pe.length ? { owner: T.owner, lane: T.lane, frames: pe } : null;
        ne();
        return;
      }
      if (T.type === "move-keys") {
        const B = s.selection;
        if (!B || !he(B.owner)) return;
        const pe = fe(B.owner), ae = C(B);
        if (T.phase === "start") {
          z(), s.drag = { keyframes: ae.map((re) => structuredClone(pe[re].keyframes)), frames: B.frames };
          return;
        }
        const { drag: K } = s;
        if (!(K != null && K.keyframes)) return;
        ae.forEach((re, de) => {
          pe[re].keyframes = structuredClone(K.keyframes[de]);
        });
        const k = Pv(pe, ae, K.frames, T.delta, -q(B.owner));
        if (B.frames = K.frames.map((re) => re + k), T.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, k ? u() : _();
        return;
      }
      if (T.type === "clip") {
        const B = T.id === "scene" ? fe("scene") : i.stickers.find((k) => k.id === T.id);
        if (!B || B.locked) return;
        if (T.phase === "start") {
          z(), s.drag = { clip: { ...B.clip }, span: ce(B.clip) };
          return;
        }
        const { drag: pe } = s;
        if (!(pe != null && pe.clip)) return;
        const ae = pe.clip, K = d(B.clip);
        if (B.clip = { ...ae }, T.delta && T.mode === "move" ? Cv(B.clip, T.delta) : T.delta && T.mode === "start" ? Iv(B.clip, ae.start + T.delta) : T.delta && Ev(B.clip, (ae.duration === null ? pe.span : ae.start + ae.duration) + T.delta, pe.span), T.phase !== "end") {
          t.request("timeline"), d(B.clip) !== K && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ee(), JSON.stringify(B.clip) !== JSON.stringify(ae) ? u() : _();
        return;
      }
      if (T.type === "key-row") {
        if (T.owner === "scene" || !he(T.owner)) return;
        z(), wv(fe(T.owner), r.frame - q(T.owner)), u();
        return;
      }
      if (T.type === "fps") {
        const B = Tv(T.fps);
        if (B === null || B === i.timeline.fps || a.timeline.fpsLocked) {
          ne();
          return;
        }
        c(B);
        return;
      }
      if (T.type === "length") {
        const B = Dv(T.length);
        if (B === void 0 || B === i.timeline.length) {
          ne();
          return;
        }
        z(), i.timeline.length = B, u();
        return;
      }
      if (T.type === "easing") {
        const B = s.selection;
        if (!B || !he(B.owner)) return;
        z(), Av(fe(B.owner), C(B), B.frames, T.easing), T.commit ? u() : _();
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
        getList: m,
        jumpTimelineTo: w,
        playback: g,
        refreshModalVideoSource: h,
        refreshTimelineEdit: _,
        releaseHiddenSelection: ee,
        requestDraw: $,
        selectWorldSticker: te,
        selectedLanes: C,
        setSelectedItem: X,
        stopTimelinePlayback: z,
        syncFloatingViewButtonState: G,
        syncTimeline: ne,
        timelineEditable: he,
        timelineOffset: q,
        timelineOwner: fe,
        timelineSpanFrames: ce,
        timelineTimed: oe,
        togglePlayback: U,
        toggleVideoMuted: E,
        updateSelectionMenu: j,
        updateSidePanel: A
      } = T);
    },
    onTimelineAction: H
  };
}
function eA(e) {
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
  let d, u, f, m;
  function w() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Rn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), g(), o.setDirtyCanvas(!0, !0));
  }
  function g() {
    var C;
    if (a || (f(), l.coverage = Rn(l.coverage), Im(o, l.active), !c)) return;
    const te = Em(o, l, String(c.value ?? ""), { rebased: n });
    te !== null && (c.value = te, (C = c.callback) == null || C.call(c, te));
  }
  function h() {
    l.ui_settings = DN(l.ui_settings), a || g();
  }
  function _() {
    var te;
    a || (g(), (te = o.setDirtyCanvas) == null || te.call(o, !0, !0));
  }
  function ee() {
    a || d() && m().catch((te) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", te);
    });
  }
  function $(te = {}) {
    var z, G, ne, he, q, fe, ce, oe, U, E, j;
    const C = te.syncPreview !== !1, X = te.syncGraph !== !1;
    C && ((ne = (G = (z = ug(o)) == null ? void 0 : z.runtime) == null ? void 0 : G.requestDraw) == null || ne.call(G), (fe = (q = (he = cg(o)) == null ? void 0 : he.dom) == null ? void 0 : q.requestDraw) == null || fe.call(q), (ce = o.setDirtyCanvas) == null || ce.call(o, !0, !1)), X && ((U = (oe = o.graph) == null ? void 0 : oe.setDirtyCanvas) == null || U.call(oe, !0, !0), (j = (E = t == null ? void 0 : t.canvas) == null ? void 0 : E.setDirty) == null || j.call(E, !0, !0));
  }
  return {
    connect(te) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: m
      } = te);
    },
    apply: w,
    commitState: g,
    persistUiSettings: h,
    commitAndRefreshNode: _,
    triggerBackgroundPersistenceOnClose: ee,
    syncCoverageChangeToNodePreviews: $
  };
}
function tA(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re;
  function de(I, v, V = "Clear") {
    return new Promise((L) => {
      a.confirmDialog = {
        visible: !0,
        title: String(I || ""),
        text: String(v || ""),
        confirmLabel: String(V || "Confirm"),
        resolve: L
      };
    });
  }
  async function _e() {
    var V, L;
    if (r || !await de(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = yo(null), U();
    const v = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((J) => J.placement === "world" || v.includes(J)) : v, n || (i.assets = {}), t.selectedId = ((V = v[0]) == null ? void 0 : V.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((L = v[0]) == null ? void 0 : L.id) || null, j();
    else {
      const J = Gv(i.shots, i.active.selected_shot_id);
      i.stickers = v, i.assets = {}, i.shots = J.shots, t.selectedId = J.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = J.selectedShotId, !J.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, j();
    }
    A(), u(), k(), K(), H();
  }
  async function we(I) {
    var O, F, x, R;
    if (r) return;
    const v = I === "mask" ? "mask" : "paint", V = v === "mask" ? "Mask" : "Paint", L = _(v);
    if (!(!L.length && !(((O = t.interaction) == null ? void 0 : O.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === v) || !await de(
      `Clear ${V}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${V}`
    ))) {
      if (((x = t.interaction) == null ? void 0 : x.kind) === "draw" && ((R = t.interaction) == null ? void 0 : R.layerKind) === v) {
        const Z = m(t.interaction);
        Z && t.paintEngine.cancelActiveStroke(Z), t.interaction = null;
      }
      L.length = 0, i.painting.raster_objects = ee().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") !== v), v === "paint" && (h().length = 0), U(), A(), u(), k(), K(), ae(), H();
    }
  }
  function N() {
    if (r) return;
    const I = $();
    if (!I || !he(I) || C(I) || n && fe(I)) return;
    let v;
    n ? v = aS(I, Ll(i), g()) : (v = JSON.parse(JSON.stringify(I)), v.id = Ko("st"), v.yaw_deg = Ht((v.yaw_deg || 0) + 8), v.z_index = g()), i.stickers.push(v), i.active.selected_sticker_id = v.id, t.selectedId = v.id, t.selectedIds = [v.id], ce(), A(), u(), K(), k(), H();
  }
  function le() {
    const I = T();
    return I ? (re(I) && (B(), oS(i, I.id), c(), ce(), A(), u(), k(), K(), pe(), H()), !0) : !1;
  }
  function b() {
    var V, L, J, O, F;
    if (r) return;
    const I = te(), v = $();
    if (!(!v && I.length === 0) && !I.some((x) => X(x))) {
      if (B(), I.length > 1) {
        const x = new Set(I.filter((me) => q(me)).map((me) => String(me.actionGroupId || me.id || ""))), R = new Set(I.filter((me) => z(me)).map((me) => E(me.rasterObjectId || me.id || ""))), Z = new Set(I.filter(he).map((me) => String(me.id || "")));
        x.size > 0 && (i.painting.paint.strokes = (Array.isArray((L = (V = i.painting) == null ? void 0 : V.paint) == null ? void 0 : L.strokes) ? i.painting.paint.strokes : []).filter((me) => !x.has(String((me == null ? void 0 : me.actionGroupId) || ""))), i.painting.groups = h().filter((me) => !x.has(String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || ""))), U()), R.size > 0 && (i.painting.raster_objects = ee().filter((me) => !R.has(String((me == null ? void 0 : me.id) || ""))), oe()), Z.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((me) => Z.has(String((me == null ? void 0 : me.id) || "")) ? C(me) ? (ne(me) || (me.visible = !1), !0) : !1 : !0), j(), ce()), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), H();
        return;
      }
      if (q(v)) {
        const x = String(v.actionGroupId || v.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((O = (J = i.painting) == null ? void 0 : J.paint) == null ? void 0 : O.strokes) ? i.painting.paint.strokes : []).filter((R) => String((R == null ? void 0 : R.actionGroupId) || "").trim() !== x), i.painting.groups = h().filter((R) => String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || "").trim() !== x), U(), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), H();
        return;
      }
      if (z(v)) {
        const x = E(v.rasterObjectId || v.id || "");
        i.painting.raster_objects = ee().filter((R) => String((R == null ? void 0 : R.id) || "").trim() !== x), oe(), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), H();
        return;
      }
      if (o && G(v)) {
        f();
        return;
      }
      if (s === "stickers" || he(v)) {
        if (C(v)) {
          if (ne(v)) return;
          v.visible = !1, ce(), A(), u(), k(), K(), H();
          return;
        }
        i.stickers = i.stickers.filter((x) => x.id !== v.id), j(), ce(), t.selectedId = ((F = w()[0]) == null ? void 0 : F.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, A(), u(), k(), K(), H();
        return;
      }
      l();
    }
  }
  function y() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ae(), k());
  }
  return {
    connect(I) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: m,
        getList: w,
        getNextStickerZIndex: g,
        getPaintingGroupList: h,
        getPaintingLayerList: _,
        getRasterObjectList: ee,
        getSelected: $,
        getSelectedItems: te,
        isExternalSticker: C,
        isItemLocked: X,
        isRasterObjectItem: z,
        isShotItem: G,
        isStickerHidden: ne,
        isStickerItem: he,
        isStrokeGroupItem: q,
        isUploadingSticker: fe,
        markObjectVisualsDirty: ce,
        markPaintCompositeVisualsDirty: oe,
        markPaintStrokeVisualsDirty: U,
        parseRasterObjectSelectionId: E,
        pruneUnusedAssets: j,
        pushHistory: A,
        requestDraw: H,
        selectedWorldSticker: T,
        stopTimelinePlayback: B,
        syncFloatingViewButtonState: pe,
        syncPaintUi: ae,
        updateSelectionMenu: K,
        updateSidePanel: k,
        worldStickerEditable: re
      } = I);
    },
    clearAll: _e,
    clearPaintingLayer: we,
    duplicateSelected: N,
    deleteSelectedWorldSticker: le,
    deleteSelected: b,
    forceCursorTool: y
  };
}
function nA(e) {
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
  let w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A;
  function H(O) {
    return Fd(O == null ? void 0 : O.dataTransfer);
  }
  function T(O) {
    const F = !!O;
    n.active !== F && (n.active = F, d.classList.toggle("drop-active", F));
  }
  function B() {
    const O = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      O.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function pe(O) {
    if (l || f !== "stickers" && f !== "cutout" || !rr(O)) return;
    if (c) {
      E(), await de(O);
      return;
    }
    const F = Ko("asset"), x = zo(a, `add:${F}`, async () => {
      try {
        const { image: R } = await jo(O);
        s.set(F, R);
        const Z = Ko("st");
        u.stickers.push({
          id: Z,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1)),
          rot_deg: 0,
          z_index: te()
        }), ce(u.stickers[u.stickers.length - 1]), $(), A(), j(), q();
        const me = await Si(O, {
          fetchApi: (Se, be) => t.fetchApi(Se, be)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === F).length) return;
        u.assets[F] = me, B(), he(), g(), A(), j(), q();
      } catch (R) {
        delete u.assets[F], s.delete(F);
        const Z = Array.isArray(u.stickers) ? u.stickers : [], me = Z.filter((ue) => String((ue == null ? void 0 : ue.asset_id) || "") === F);
        throw me.length && (u.stickers = Z.filter((ue) => String((ue == null ? void 0 : ue.asset_id) || "") !== F), me.some((ue) => String((ue == null ? void 0 : ue.id) || "") === String(i.selectedId || "")) && ce(null), A(), j(), q(), g()), R;
      }
    });
    try {
      await x;
    } catch {
    }
  }
  function ae() {
    var O;
    l || f !== "stickers" && f !== "cutout" || (O = m == null ? void 0 : m.openImagePicker) == null || O.call(m, "add");
  }
  function K() {
    var O;
    l || !c || (O = m == null ? void 0 : m.openImagePicker) == null || O.call(m, "add-world");
  }
  async function k(O) {
    l || !c || !rr(O) || (E(), await de(O, "world"));
  }
  function re() {
    const O = { x: r.width / 2, y: r.height / 2 }, F = z() ? o.pick(ee(), O.x, O.y, r.width, r.height) : null;
    return ES(oe(), F, _());
  }
  async function de(O, F = "sky") {
    const x = Ll(u), R = zo(a, `add:${x}`, async () => {
      const { image: Z } = await jo(O), me = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(Z.naturalWidth || Z.width || 1), Number(Z.naturalHeight || Z.height || 1)),
        rot_deg: 0
      }, ue = { kind: "file", filename: "" }, ve = F === "world" ? sS(x, ue, re()) : fd(x, ue, me, te());
      s.set(U(ve), Z), u.stickers.push(ve), F === "world" ? fe(x) : ce(ve), $(), A(), j(), q();
      try {
        const Se = await Si(O, {
          fetchApi: (Q, ge) => t.fetchApi(Q, ge)
        }), be = u.stickers.find((Q) => Q.id === x);
        if (!be) return;
        be.source = _a(Se), s.set(U(be), Z), he(), g();
      } catch (Se) {
        throw u.stickers = u.stickers.filter((be) => be.id !== x), i.selectedId === x && ce(null), i.worldSelectedId === x && w(), he(), g(), Se;
      } finally {
        A(), j(), q();
      }
    });
    try {
      await R;
    } catch {
    }
  }
  async function _e(O, F) {
    const x = zo(a, `replace:${F}:${Ko("asset")}`, async () => {
      const { image: R } = await jo(O), Z = await Si(O, {
        fetchApi: (ue, ve) => t.fetchApi(ue, ve)
      }), me = u.stickers.find((ue) => ue.id === F);
      if (me) {
        me.source = _a(Z), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ue of [me.size.value, ...me.size.keyframes.map((ve) => ve.value)])
          ue.vFOV_deg = h(ue.hFOV_deg, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1));
        s.set(U(me), R), ne(), he(), g(), A(), j(), q();
      }
    });
    try {
      await x;
    } catch {
    }
  }
  async function we(O) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = C();
    if (!F || !G(F) || X(F) || !rr(O)) return;
    if (c) {
      await _e(O, F.id);
      return;
    }
    const x = String(F.id || ""), R = Ko("asset"), Z = zo(a, `replace:${x}:${R}`, async () => {
      var Q;
      const me = (Array.isArray(u.stickers) ? u.stickers : []).find((ge) => String((ge == null ? void 0 : ge.id) || "") === x) || null;
      if (!me || !G(me) || X(me)) return;
      const ue = String(me.asset_id || ""), ve = ue ? un(((Q = u.assets) == null ? void 0 : Q[ue]) || null) : null, Se = Number(me.vFOV_deg || 0), be = me.crop && typeof me.crop == "object" ? { ...me.crop } : null;
      try {
        const { image: ge } = await jo(O);
        s.set(R, ge), me.asset_id = R, me.vFOV_deg = h(
          Number(me.hFOV_deg || 30),
          Number(ge.naturalWidth || ge.width || 1),
          Number(ge.naturalHeight || ge.height || 1)
        ), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ne(), A(), j(), q();
        const Y = await Si(O, {
          fetchApi: (P, S) => t.fetchApi(P, S)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((P) => String((P == null ? void 0 : P.id) || "") === x) || null;
        if (!p || String(p.asset_id || "") !== R) return;
        u.assets[R] = Y, B(), he(), g(), A(), j(), q();
      } catch (ge) {
        delete u.assets[R], s.delete(R);
        const Y = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === x) || null;
        throw Y && String(Y.asset_id || "") === R && (ue && ve && (u.assets[ue] = ve), Y.asset_id = ue, Y.vFOV_deg = Se, Y.crop = be ? { ...be } : null), ne(), g(), A(), j(), q(), ge;
      }
    });
    try {
      await Z;
    } catch {
    }
  }
  function N() {
    var F;
    if (l) return;
    const O = C();
    !O || !G(O) || X(O) || (F = m == null ? void 0 : m.openImagePicker) == null || F.call(m, "replace");
  }
  async function le() {
    if (l || f !== "stickers") return;
    if (c) {
      await b();
      return;
    }
    const O = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(O).filter(([, R]) => {
      const Z = String((R == null ? void 0 : R.type) || "").toLowerCase(), me = String((R == null ? void 0 : R.value) || "");
      return Z === "dataurl" && me.startsWith("data:image");
    });
    if (!F.length) return;
    let x = !1;
    for (const [R, Z] of F)
      try {
        const me = String((Z == null ? void 0 : Z.value) || "");
        if (!me) continue;
        const ue = await fetch(me).then((ge) => ge.blob()), ve = String(ue.type || "image/png").split("/")[1] || "png", Se = String((Z == null ? void 0 : Z.name) || `${R}.${ve}`), be = new File([ue], Se, { type: ue.type || "image/png" }), Q = await Si(be, {
          fetchApi: (ge, Y) => t.fetchApi(ge, Y)
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
          const R = await fetch(x).then((ve) => ve.blob()), Z = String(R.type || "image/png").split("/")[1] || "png", me = new File([R], `${F.id}.${Z}`, { type: R.type || "image/png" }), ue = await Si(me, {
            fetchApi: (ve, Se) => t.fetchApi(ve, Se)
          });
          F.source = _a(ue), O = !0;
        } catch {
        }
    }
    O && (g(), q());
  }
  function y(O) {
    f !== "stickers" && f !== "cutout" || l || (O.preventDefault(), T(!0));
  }
  function I(O) {
    var R;
    if (f !== "stickers" && f !== "cutout" || l) return;
    O.preventDefault(), O.stopPropagation(), n.depth = 0, T(!1);
    const x = Array.from(((R = O.dataTransfer) == null ? void 0 : R.files) || []).find((Z) => rr(Z));
    x && pe(x);
  }
  function v(O) {
    f !== "stickers" && f !== "cutout" || l || H(O) && (n.depth += 1, T(!0), O.preventDefault());
  }
  function V(O) {
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
        computeStickerVFov: h,
        contentSphere: _,
        currentSpaceCamera: ee,
        forceCursorTool: $,
        getNextStickerZIndex: te,
        getSelected: C,
        isExternalSticker: X,
        isSpaceView: z,
        isStickerItem: G,
        markObjectVisualsDirty: ne,
        pushHistory: he,
        requestDraw: q,
        selectWorldSticker: fe,
        setSelectedItem: ce,
        spaceViewState: oe,
        stickerImageKey: U,
        stopTimelinePlayback: E,
        updateSelectionMenu: j,
        updateSidePanel: A
      } = O);
    },
    addImageStickerFromFile: pe,
    addImageSticker: ae,
    addWorldImageSticker: K,
    addWorldStickerFromFile: k,
    replaceSelectedImageFromFile: we,
    replaceSelectedImage: N,
    migrateLegacyEmbeddedAssets: le,
    pruneUnusedAssets: B,
    setDropCue: T,
    onCanvasDragOver: y,
    onCanvasDrop: I,
    onWindowDragEnter: v,
    onWindowDragOver: V,
    onWindowDragLeave: L,
    onWindowDrop: J
  };
}
function rA(e) {
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
    uiState: w
  } = e;
  let g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we = o;
  function N(Y, p) {
    var M;
    const P = (M = C().space) == null ? void 0 : M.gizmo;
    if (q() && P && _e("hover", p) !== null && _e("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: P.mode, start: P.transform, base: te(), changed: !1 }, r.setPointerCapture(Y.pointerId), k(p), !0;
    const S = Hm(te(), h(A()));
    return $S($(), S, p, r.width, r.height) ? (q() || (j(R()), de(), re(), U()), n.interaction = { kind: "world_select" }, r.setPointerCapture(Y.pointerId), !0) : !1;
  }
  function le() {
    if (s || m !== "cutout") return;
    const Y = R();
    if (Y) {
      j(Y), n.mode = "pano", K(Ht(Number(Y.yaw_deg || 0)), Ie(Number(Y.pitch_deg || 0), -89.9, 89.9)), de(), re(), U({ cause: "cutout_frame" });
      return;
    }
    const p = Xh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], j(p), X(), n.mode = "pano", oe(), ee(), de(), re(), U({ cause: "cutout_frame" });
  }
  function b() {
    s || !u || G() || (T(), d.camera = Xv(H()), F(), j(R()), X(), oe(), ee(), de(), re(), U({ cause: "cutout_frame" }));
  }
  function y() {
    T(), d.camera = null, j(null), F(), oe(), ee(), de(), re(), U({ cause: "cutout_frame" });
  }
  function I(Y, p) {
    u && fe(Y) && (d.camera.projection = p === ho ? "erp" : "perspective", p === ho) || L(Y, p);
  }
  function v() {
    s || m !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, oe(), ee(), de(), re(), U());
  }
  function V(Y, p) {
    const P = a.frameSafeRect;
    if (!Y || !P || n.mode !== "frame") return !1;
    const S = Pu * Ci(P, Y), M = nd(td(P, p), S);
    return Y.hFOV_deg = M.hFOV_deg, Y.vFOV_deg = M.vFOV_deg, !0;
  }
  function L(Y, p) {
    if (!Y || Y.locked === !0) return;
    const P = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, S = (() => {
      const D = String(Y.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [xe, Pe] = D.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(xe) && Number.isFinite(Pe)) return xe >= Pe;
      }
      const ie = Number(Y.hFOV_deg || 64), Ne = Number(Y.vFOV_deg || 40);
      return Math.abs(ie - Ne) > 1e-6 ? ie >= Ne : Fi(Y) >= 1;
    })();
    let [M, W] = P[String(p)] || P["1:1"];
    M >= W !== S && ([M, W] = [W, M]);
    const ye = M / W;
    if (!V(Y, ye)) {
      const D = Ie(Number(Y.vFOV_deg || 40), 1, 179);
      Y.vFOV_deg = D, Y.hFOV_deg = ba(D, ye);
    }
    Y.aspect_id = `${M}:${W}`;
  }
  function J(Y, p, P) {
    if (!Y || Y.locked === !0) return !1;
    const S = ms(p, P);
    if (!S) return !1;
    const M = S.ratio;
    if (!V(Y, M)) {
      const W = Ie(Number(Y.vFOV_deg || 40), 1, 179);
      Y.vFOV_deg = W, Y.hFOV_deg = ba(W, M);
    }
    return Y.aspect_id = S.label, !0;
  }
  function O(Y) {
    if (!Y || Y.locked === !0) return;
    const p = String(Y.aspect_id || "").trim(), P = si(Y), S = P.tanHalfX / Math.max(1e-12, P.tanHalfY), M = 1 / Math.max(1e-12, S);
    if (!V(Y, M)) {
      const W = Ie(Number(Y.vFOV_deg || 60), 1, 179);
      Y.vFOV_deg = W, Y.hFOV_deg = ba(W, M);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [W, ye] = p.split(":");
      Y.aspect_id = `${ye}:${W}`;
    } else
      Y.aspect_id = Pi(Y);
  }
  function F(Y = !0) {
    var S, M;
    if (!t) return;
    const p = we;
    if (!_()) {
      we = null, (S = d.shots) != null && S.length && (d.shots = []), p && x(p, null);
      return;
    }
    const P = (M = d.shots) == null ? void 0 : M[0];
    Y && P && we && Zv(d.camera, n.frame, P, we), we = Am(d.camera, n.frame), P ? Object.assign(P, we, { position: [...we.position] }) : d.shots = [{ ...we, position: [...we.position] }], p || x(null, we);
  }
  function x(Y, p) {
    var W, ye;
    !p && n.mode === "frame" && ce(Y);
    const P = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((ye = (W = n.viewTransition) == null ? void 0 : W.end) == null ? void 0 : ye.mode) === "3dof") {
      ae({ ...H(), position: P }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ne()) return;
    const S = (Y == null ? void 0 : Y.position) ?? [0, 0, 0];
    if (S.every((D, ie) => D === P[ie])) return;
    const M = { ...H(), position: S };
    g({ mode: "6dof", position: S, moved: !0 }), n.viewDistance = M.distance, ae({ ...M, position: P }, { mode: "3dof", moved: !1 });
  }
  function R() {
    if (!l) return null;
    const Y = Array.isArray(d.shots) ? d.shots : [];
    if (!Y.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return Y.find((P) => String((P == null ? void 0 : P.id) || "") === p) || Y[0] || null;
  }
  function Z(Y, p, P = {}) {
    var W;
    if ((Y == null ? void 0 : Y.kind) !== "roll_frame" || !Y.shot) return;
    Y.accumulatedRad += Bh(p, Y.lastAngle), Y.lastAngle = p;
    const S = Yh(Y.start.roll_deg, Y.accumulatedRad, {
      shiftKey: P.shiftKey,
      altKey: Y.altStarted ? !1 : P.altKey
    });
    Y.shot.roll_deg = S, Y.changed = Y.changed || Math.abs(Y.accumulatedRad) > 1e-9;
    const M = (((W = w.sidePanel) == null ? void 0 : W.params) || []).find((ye) => ye.key === "roll_deg");
    M && (M.value = S, M.displayValue = so(S), M.fillPct = (S + 180) / 360 * 100), B(), ve(Y), U({ localOnly: !0 });
  }
  function me(Y, p, P = {}) {
    var W;
    if ((Y == null ? void 0 : Y.kind) !== "roll_frame" || !Y.shot || !Y.rollGesture) return;
    const S = Ig(Y.rollGesture, p, P);
    if (!S) return;
    Y.rollGesture = S.gesture, Y.center = S.gesture.center, Y.lastAngle = S.gesture.lastAngle, Y.accumulatedRad = S.gesture.accumulatedRad, Y.shot.roll_deg = S.rollDeg, Y.changed = Y.changed || Math.abs(S.gesture.accumulatedRad) > 1e-9;
    const M = (((W = w.sidePanel) == null ? void 0 : W.params) || []).find((ye) => ye.key === "roll_deg");
    M && (M.value = S.rollDeg, M.displayValue = so(S.rollDeg), M.fillPct = (S.rollDeg + 180) / 360 * 100), B(), ve(Y), U({ localOnly: !0 });
  }
  function ue(Y, p) {
    const P = E(Y);
    return Math.atan2(P.y - p.y, P.x - p.x);
  }
  function ve(Y) {
    var ye, D;
    if ((Y == null ? void 0 : Y.kind) !== "roll_frame" || !Y.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = z(Y.shot), P = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), S = (D = c.getBoundingClientRect) == null ? void 0 : D.call(c);
    if (!p || !P || !S || r.width <= 0 || r.height <= 0) return;
    const M = P.width / r.width, W = P.height / r.height;
    w.tooltip.text = `${so(Y.shot.roll_deg)}°`, w.tooltip.left = P.left - S.left + (p.x + p.w * 0.5) * M, w.tooltip.top = P.top - S.top + (p.y + p.h * 0.5) * W + 12, w.tooltip.variant = "roll", w.tooltip.visible = !0;
  }
  function Se(Y) {
    var W;
    if (Y.button !== 0 || s || n.mode !== "frame") return;
    const p = R();
    if (!p || p.locked === !0) return;
    const P = z(p);
    if (!P) return;
    const S = { x: P.x + P.w * 0.5, y: P.y + P.h * 0.5 }, M = ue(Y, S);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: S,
      lastAngle: M,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (W = i.setPointerCapture) == null || W.call(i, Y.pointerId), Y.preventDefault(), B(), ve(n.interaction), U({ localOnly: !0 });
  }
  function be(Y) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || Z(
      n.interaction,
      ue(Y, n.interaction.center),
      Y
    );
  }
  function Q() {
    const Y = n.interaction;
    (Y == null ? void 0 : Y.kind) !== "roll_frame" || Y.source !== "knob" || (Y.changed && (oe(), ee(), de()), n.interaction = null, he(), pe(), B(), U());
  }
  function ge(Y) {
    const p = n.mode === "frame" && !s ? R() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, oe(), ee(), de(), B(), U(), Y.preventDefault());
  }
  return {
    connect(Y) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: h,
        cameraShoots: _,
        commitAndRefreshNode: ee,
        currentSpaceCamera: $,
        cutoutCamera: te,
        editorViewInput: C,
        forceCursorTool: X,
        getFrameViewRect: z,
        hasCamera: G,
        hasSpaceContent: ne,
        hideTooltip: he,
        isCameraSelected: q,
        isShotItem: fe,
        leaveFrameView: ce,
        pushHistory: oe,
        requestDraw: U,
        screenPos: E,
        setSelectedItem: j,
        spaceScale: A,
        spaceViewState: H,
        stopTimelinePlayback: T,
        syncFrameRollKnob: B,
        syncViewToggleState: pe,
        transitionView: ae,
        turnViewTo: K,
        updateCursor: k,
        updateSelectionMenu: re,
        updateSidePanel: de,
        worldGizmoPointer: _e
      } = Y);
    },
    addCutoutFrame: le,
    addStudioCamera: b,
    deleteStudioCamera: y,
    setShotAspect: I,
    clearCutoutFrame: v,
    applyCutoutAspectCustom: J,
    rotateCutoutAspect90: O,
    syncCutoutShot: F,
    getActiveCutoutShot: R,
    startCameraPress: N,
    applySharedRollInteractionPoint: me,
    onFrameRollKnobPointerDown: Se,
    onFrameRollKnobPointerMove: be,
    finishKnobRoll: Q,
    onFrameRollKnobDoubleClick: ge
  };
}
function iA(e) {
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
    videoTransportEl: w
  } = e;
  let g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E = null, j = !1;
  function A(x) {
    if (n.mode = "pano", !x) return;
    h();
    const R = q().distance;
    n.viewYaw = Ht(x.yaw_deg), n.viewPitch = Ie(x.pitch_deg, -89.9, 89.9), n.viewFov = Ie(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = R, d.backgroundDirty = !0;
  }
  function H() {
    var S, M, W, ye, D;
    if (!r) return null;
    const x = (S = r.getBoundingClientRect) == null ? void 0 : S.call(r), R = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, Z = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(R, Z);
    let me = 24, ue = 24;
    const ve = Math.max(me + 1, r.width - 24);
    let Se = Math.max(ue + 1, r.height - 24);
    const be = (M = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : M.call(f), Q = (W = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : W.call(a);
    let ge = 24;
    be && x && be.width > 0 && be.height > 0 && (ge = Math.max(ge, (be.right - x.left) * R + Mp)), Q && x && Q.width > 0 && Q.height > 0 && ((ye = m.frameRail) == null ? void 0 : ye.visible) === !0 && (ge = Math.max(ge, (x.right - Q.left) * R + Mp)), me = Math.max(me, ge);
    const Y = Math.min(ve, r.width - ge);
    let p = 24;
    const P = (D = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : D.call(s);
    if (P && x && P.width > 0 && P.height > 0 && (p = Math.max(p, (P.bottom - x.top) * Z + Cc)), [l, w].forEach((ie) => {
      var Pe;
      if (!ie || !x) return;
      const Ne = getComputedStyle(ie);
      if (Ne.display === "none" || Ne.visibility === "hidden" || Number(Ne.opacity) <= 0) return;
      const xe = (Pe = ie.getBoundingClientRect) == null ? void 0 : Pe.call(ie);
      !xe || xe.width <= 0 || xe.height <= 0 || (p = Math.max(p, (x.bottom - xe.top) * Z + Cc));
    }), o && x) {
      const ie = getComputedStyle(o);
      ie.display !== "none" && ie.visibility !== "hidden" && Number(ie.opacity) > 0 && (p = Math.max(p, (yN + Cc) * Z));
    }
    return ue = Math.max(ue, p), Se = Math.max(ue + 1, Math.min(Se, r.height - p)), {
      x: me,
      y: ue,
      w: Math.max(1, Y - me),
      h: Math.max(1, Se - ue)
    };
  }
  function T(x = $()) {
    if (!x || !r) return null;
    const R = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return L1(R, x, Pu * Ci(R, x));
  }
  function B(x = $()) {
    const R = T(x);
    return R ? { x: R.x, y: R.y, w: R.w, h: R.h } : null;
  }
  function pe() {
    return u && !!$();
  }
  function ae(x, R) {
    const Z = $();
    if (!Z || Z.locked === !0) return !1;
    const me = Number(R) > 0, ue = Zh(Z, R);
    if (!ue) return !1;
    if (me) {
      const ve = Pu * Ci(
        d.frameSafeRect || { w: r.width, h: r.height },
        ue
      ), Se = rd({ width: r.width, height: r.height }, ve);
      if (Se.halfW < r.width * 0.5 - 1e-6 || Se.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Z.hFOV_deg = ue.hFOV_deg, Z.vFOV_deg = ue.vFOV_deg, K(), U(), !0;
  }
  function K() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, z(), _(), U());
    }, 180);
  }
  function k() {
    return t && n.mode === "frame" && te();
  }
  function re() {
    const x = $(), R = T(x);
    return x && R ? Wm(x, R, { width: r.width, height: r.height }) : null;
  }
  function de() {
    var x;
    return ((x = ee()) == null ? void 0 : x.radius) || sr;
  }
  function _e(x) {
    const { position: R, yaw_deg: Z, pitch_deg: me, roll_deg: ue, hFOV_deg: ve } = x.shot;
    return { position: R, yaw_deg: Z, pitch_deg: me, roll_deg: ue, hFOV_deg: ve, distance: de() };
  }
  function we(x, R) {
    const { rect: Z } = x;
    return i.pickSurface(ne(x.shot), R.x - Z.x, R.y - Z.y, Z.w, Z.h);
  }
  function N(x, R, Z) {
    return iu(R, we(x, Z), null, he());
  }
  function le(x) {
    return JSON.stringify([_e(x), x.rect]);
  }
  function b(x) {
    const R = $();
    R.position = [...x.position], R.yaw_deg = x.yaw_deg, R.pitch_deg = x.pitch_deg;
  }
  function y(x, R) {
    const Z = $();
    !Z || c || Z.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Z,
      last: x,
      start: { yaw_deg: Number(Z.yaw_deg || 0), pitch_deg: Number(Z.pitch_deg || 0) },
      changed: !1
    }, oe(x), r.setPointerCapture(R));
  }
  function I(x, R, Z) {
    const me = re();
    if (!me || c) return;
    const ue = _e(me);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: R, pivot: N(me, ue, R), changed: !1 } : { kind: "frame_pan", last: R, depth: Om(ue, he()), changed: !1 }, oe(R), r.setPointerCapture(Z);
  }
  function v(x, R) {
    const Z = re();
    if (!Z) return;
    const me = _e(Z), ue = R.x - x.last.x, ve = R.y - x.last.y;
    b(x.kind === "frame_pan" ? Dm(me, ue, ve, Z.rect.w, Z.rect.h, x.depth) : Tm(me, ue, ve, r.height, x.pivot)), x.changed = x.changed || ue !== 0 || ve !== 0, x.last = R, G({ localOnly: !0, cause: "frame_view" });
  }
  function V(x, R) {
    const Z = re();
    if (!Z || c) return;
    const me = _e(Z), ue = performance.now(), ve = { x: x.x, y: x.y, time: ue, key: i.contentRevision(), view: le(Z) };
    if (!Fm(E, ve)) {
      const Se = we(Z, x);
      E = { ...ve, cost: performance.now() - ue, hit: Se };
    }
    b(Lm(me, iu(me, E.hit, null, he()), R, he())), E.view = le(re() ?? Z), E.wheelTime = ue, K(), U(), G({ localOnly: !0, cause: "frame_view" });
  }
  function L(x, R) {
    const Z = $();
    if (!Z || c || Z.locked === !0) return !1;
    const me = k0(Z, x, R);
    return me === Z ? !1 : (fe(), Z.position = me.position, j = !0, !0);
  }
  function J() {
    return j ? (j = !1, z(), _(), U(), !0) : !1;
  }
  function O() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, z(), _(), U(), !0) : !1;
  }
  function F() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const R = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, R && C(), n.interaction = null, X(), ce(), U(), oe(n.pointerPos), G({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: g,
        cancelViewTransition: h,
        commitAndRefreshNode: _,
        contentSphere: ee,
        getActiveCutoutShot: $,
        hasSpaceContent: te,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: z,
        requestDraw: G,
        shotViewCamera: ne,
        spaceScale: he,
        spaceViewState: q,
        stopTimelinePlayback: fe,
        syncViewToggleState: ce,
        updateCursor: oe,
        updateSidePanel: U
      } = x);
    },
    leaveFrameView: A,
    measureFrameSafeRect: H,
    getFrameViewLayout: T,
    getFrameViewRect: B,
    supportsFramePainting: pe,
    zoomFrameViewAt: ae,
    isFreeFrameView: k,
    frameContext: re,
    frameViewDistance: de,
    frameSpaceView: _e,
    frameTarget: N,
    startPanFrame: y,
    startFrameDrag: I,
    dragFrame: v,
    zoomFrameAt: V,
    flushFrameWheelCommit: O,
    cancelFrameCameraGesture: F,
    moveFrameByKeys: L,
    endFrameKeyMove: J
  };
}
function oA(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G = 0;
  function ne() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function he() {
    return String(ne() || "") === "lasso_fill";
  }
  function q() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function fe(N, le) {
    const b = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function ce(N) {
    const le = String(N || "").trim();
    return le === "eraser" ? Er : Tn[le] ? le : t.activeBrushPresetId || Er;
  }
  function oe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (q() || z());
  }
  function U() {
    var N;
    return oe() && ((N = t.pointerPos) == null ? void 0 : N.inside) === !0;
  }
  function E(N, le = !0) {
    const b = Number((N == null ? void 0 : N.x) || 0), y = Number((N == null ? void 0 : N.y) || 0), I = le !== !1, v = t.pointerPos || { x: 0, y: 0, inside: !1 }, V = v.inside !== I || Math.abs(v.x - b) > 0.01 || Math.abs(v.y - y) > 0.01;
    return t.pointerPos = { x: b, y, inside: I }, V;
  }
  function j() {
    var F, x;
    if (!U()) return null;
    const N = t.primaryTool === "mask" ? "mask" : "paint", le = N === "mask" ? t.maskTool : t.paintTool, b = ce(le), y = Tn[b] || Tn[Er], I = Number(t.brushSizes[b] ?? 10), v = Math.max(1, I) * Math.max(0.1, Number(y.sizeScale ?? 1)), V = Math.max(3, v * 0.5), L = N === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(t.paintColor), J = N === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(L.a ?? 1) * 0.3), 0.16, 0.52), O = N === "mask" ? 0.95 : le === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(L.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: N,
      toolKind: le,
      preset: y,
      radius: V,
      fillStyle: mr(L, J),
      strokeStyle: mr(L, O),
      x: Number(((F = t.pointerPos) == null ? void 0 : F.x) || 0),
      y: Number(((x = t.pointerPos) == null ? void 0 : x.y) || 0),
      hotspotX: V,
      hotspotY: V
    };
  }
  function A() {
    var R, Z, me;
    const N = j();
    if (!r) return;
    if (!N) {
      r.style.display = "none";
      return;
    }
    let le = N.radius * 2, b = N.radius * 2, y = "999px", I = 0, v = N.fillStyle, V = "1px solid rgba(222, 222, 222, 0.72)", L = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const J = "rgba(222, 222, 222, 0.72)", O = "rgba(52, 52, 52, 0.72)";
    let F = Number(N.hotspotX ?? le * 0.5), x = Number(N.hotspotY ?? b * 0.5);
    if (N.toolKind === "lasso_fill")
      le = fl, b = fl, y = "0", V = "0", L = "none", F = SN, x = _N, v = NN(N.fillStyle, O, J);
    else if (N.layerKind === "mask")
      v = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (N.toolKind === "marker") {
      const ue = Math.max(1, Number(((R = N.preset) == null ? void 0 : R.aspect) ?? 1));
      le = Math.max(10, N.radius * 2 * ue), b = Math.max(6, N.radius * 2), y = `${Math.min(6, b * 0.42)}px`, I = Number(((me = (Z = N.preset) == null ? void 0 : Z.angle) == null ? void 0 : me.value) || 0) * Ei;
    } else N.toolKind === "brush" ? v = `radial-gradient(circle at 50% 50%, ${N.strokeStyle} 0%, ${N.fillStyle} 45%, rgba(0,0,0,0) 100%)` : N.toolKind === "eraser" && (v = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = y, r.style.border = V, r.style.boxShadow = L, r.style.background = v, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(N.x - F)}px, ${Math.round(N.y - x)}px) rotate(${I}deg)`;
  }
  function H() {
    var be;
    if (!n || !i) return;
    const N = t.primaryTool === "mask" ? "mask" : "paint", le = N === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const b = ce(le), y = Tn[b] || Tn[Er], I = Number(t.brushSizes[b] ?? 10), v = Math.max(1, I) * Math.max(0.1, Number(y.sizeScale ?? 1)), V = Math.max(6, v * 0.5), L = le === "eraser", J = N === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : L ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(t.paintColor), O = N === "mask" ? mr(J, 0.22) : L ? "rgba(255,255,255,0.14)" : mr(J, Ie(Math.max(0.18, Number(J.a ?? 1) * 0.34), 0.18, 0.56)), F = N === "mask" ? mr(J, 0.96) : L ? "rgba(255,255,255,0.72)" : mr(J, Ie(Math.max(0.56, Number(J.a ?? 1) * 0.96), 0.56, 1));
    let x = V * 2, R = V * 2, Z = "999px", me = 0, ue = O;
    const ve = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (N === "mask")
      ue = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const Q = Math.max(1, Number((y == null ? void 0 : y.aspect) ?? 1));
      x = Math.max(16, V * 2 * Q), R = Math.max(10, V * 2), Z = `${Math.min(8, R * 0.42)}px`, me = Number(((be = y == null ? void 0 : y.angle) == null ? void 0 : be.value) || 0) * Ei;
    } else le === "brush" ? ue = `radial-gradient(circle at 50% 50%, ${F} 0%, ${O} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (x = Math.max(18, V * 1.8), R = x, ue = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${F} 43%, ${F} 58%, rgba(0,0,0,0) 59%)`) : L && (ue = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(x)}px`, i.style.height = `${Math.round(R)}px`, i.style.borderRadius = Z, i.style.background = ue, i.style.border = `1px solid ${ve}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${me}deg)`, G && (clearTimeout(G), G = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function T() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), G && clearTimeout(G), G = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), G = 0;
    }, 180));
  }
  function B(N, le, b, y) {
    const I = ce(le), v = Tn[I] || Tn[Er], V = t.brushSizes[I] ?? 10, L = Math.max(1, V) * Math.max(0.1, v.sizeScale ?? 1), J = fe(y, L), O = b.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), F = {
      id: Zi(N),
      actionGroupId: Zi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: N,
      toolKind: le,
      size: L,
      createdAt: Date.now(),
      color: N === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: J.radiusModel,
      radiusValue: J.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: O.map((x) => ({ ...x })),
        points: O.map((x) => ({ ...x }))
      }
    };
    return kp(F, v), t.mode, Number(v.aspect ?? 1), Number(F.aspect ?? 1), String(F.stampKind || ""), Number(F.size || 0), String(F.radiusModel || ""), Number(F.radiusValue || 0), { ...F.targetSpace }, F;
  }
  function pe(N, le, b, y) {
    const I = b.map((J) => ({
      ...J,
      t: Number((J == null ? void 0 : J.t) || 0),
      widthScale: Number.isFinite(Number(J == null ? void 0 : J.widthScale)) ? Math.max(0, Number(J.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(J == null ? void 0 : J.pressureLike)) ? Math.max(0, Number(J.pressureLike)) : 1
    })), v = ce(le), V = Tn[v] || Tn[Er], L = {
      id: Zi(N),
      actionGroupId: Zi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: N,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: N === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: I.map((J) => ({ ...J }))
      }
    };
    return kp(L, V), t.mode, Number(V.aspect ?? 1), Number(L.aspect ?? 1), String(L.stampKind || ""), { ...L.targetSpace }, L;
  }
  function ae(N) {
    const le = o.painting || (o.painting = yo(null)), b = le[N] || (le[N] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function K(N, le, b = performance.now()) {
    let y;
    if (t.mode === "frame") {
      const O = f();
      if (!O || (y = X(le, O, b), !y)) return !1;
    } else
      y = C(le, b);
    if (!y) return !1;
    const I = N.stroke.geometry.rawPoints || N.stroke.geometry.points, v = N.stroke.geometry.points, V = I[I.length - 1];
    if (V) {
      const O = Math.abs(Number(y.u ?? y.x ?? 0) - Number(V.u ?? V.x ?? 0)), F = Math.abs(Number(y.v ?? y.y ?? 0) - Number(V.v ?? V.y ?? 0));
      if (O < 15e-4 && F < 15e-4) return !1;
    }
    const L = {
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    I.push({ ...L }), v.push({ ...L });
    const J = m(N);
    if (J) {
      const O = t.paintEngine.ensureTarget(J);
      t.paintEngine.appendStrokePoint(O, Number(L.u ?? 0), Number(L.v ?? 0), N.stroke);
    }
    return !0;
  }
  function k(N, le, b = performance.now()) {
    var V, L;
    let y;
    if (t.mode === "frame") {
      const J = f();
      if (!J) return !1;
      y = X(le, J, b);
    } else
      y = C(le, b);
    const I = (L = (V = N == null ? void 0 : N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.points;
    if (!y || !Array.isArray(I)) return !1;
    const v = I[I.length - 1];
    if (v) {
      const J = Math.abs(Number(y.u ?? y.x ?? 0) - Number(v.u ?? v.x ?? 0)), O = Math.abs(Number(y.v ?? y.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (J < 15e-4 && O < 15e-4) return !1;
    }
    return I.push({
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function re(N) {
    var Q, ge, Y, p, P;
    const le = (N == null ? void 0 : N.stroke) || null;
    if (!le || (N == null ? void 0 : N.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    te();
    const b = m(), y = c(b.width, b.height);
    if (!$(y, le, { w: b.width, h: b.height })) return !1;
    const I = ((ge = (Q = y.ctx) == null ? void 0 : Q.getImageData(0, 0, b.width, b.height)) == null ? void 0 : ge.data) || null;
    if (!I) return !1;
    const v = new Map(g().map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), S ? { ...S } : null])), V = [], L = [], J = [...h().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== "paint")];
    let O = !1, F = w().reduce((S, M) => Math.max(S, Number((M == null ? void 0 : M.z_index) || 0)), -1) + 1;
    function x(S, M, W, ye = 8) {
      let D = M, ie = W, Ne = -1, xe = -1;
      for (let Pe = 0; Pe < W; Pe += 1)
        for (let Ce = 0; Ce < M; Ce += 1)
          S[(Pe * M + Ce) * 4 + 3] <= ye || (Ce < D && (D = Ce), Pe < ie && (ie = Pe), Ce > Ne && (Ne = Ce), Pe > xe && (xe = Pe));
      return Ne < D || xe < ie ? null : { minX: D, minY: ie, maxX: Ne, maxY: xe };
    }
    const R = x(I, b.width, b.height, 8);
    if (!R) return !1;
    function Z(S, M) {
      return !S || !M ? !1 : !(S.maxX < M.minX || M.maxX < S.minX || S.maxY < M.minY || M.maxY < S.minY);
    }
    function me(S, M) {
      const W = d((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "", "paint", M);
      if (!W) return null;
      const ye = W.centerUv.u - W.halfW, D = W.centerUv.u + W.halfW, ie = W.centerUv.v - W.halfH, Ne = W.centerUv.v + W.halfH, xe = b.width, Pe = b.height;
      return {
        minX: Math.floor((ye % 1 + 1) % 1 * xe),
        maxX: Math.ceil((D % 1 + 1) % 1 * xe),
        minY: Math.floor(Ie(ie, 0, 1) * Pe),
        maxY: Math.ceil(Ie(Ne, 0, 1) * Pe),
        wraps: D - ye >= 1 || ye < 0 || D > 1
      };
    }
    function ue(S) {
      const M = (S == null ? void 0 : S.bbox) || null;
      if (!M) return null;
      const W = (S == null ? void 0 : S.transform) || {}, ye = b.width, D = b.height, ie = Number(M.u0 || 0) + Number(W.du || 0), Ne = Number(M.u1 || 0) + Number(W.du || 0), xe = Number(M.v0 || 0) + Number(W.dv || 0), Pe = Number(M.v1 || 0) + Number(W.dv || 0);
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * ye),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * ye),
        minY: Math.floor(Ie(xe, 0, 1) * D),
        maxY: Math.ceil(Ie(Pe, 0, 1) * D),
        wraps: Ne - ie >= 1 || ie < 0 || Ne > 1
      };
    }
    function ve(S) {
      return S ? S.wraps ? Z(R, { minX: 0, maxX: S.maxX, minY: S.minY, maxY: S.maxY }) || Z(R, { minX: S.minX, maxX: b.width - 1, minY: S.minY, maxY: S.maxY }) : Z(R, S) : !0;
    }
    function Se(S) {
      if (!S) return { touched: !1, canvas: null };
      const M = c(b.width, b.height, { readback: !0 });
      M.ctx.drawImage(S, 0, 0);
      const W = M.ctx.getImageData(0, 0, b.width, b.height);
      M.ctx.save(), M.ctx.globalCompositeOperation = "destination-out", M.ctx.drawImage(y.canvas, 0, 0), M.ctx.restore();
      const ye = M.ctx.getImageData(0, 0, b.width, b.height);
      for (let D = 0; D < b.width * b.height; D += 1) {
        if (I[D * 4 + 3] <= 8) continue;
        const Ne = W.data[D * 4 + 3], xe = ye.data[D * 4 + 3];
        if (Ne > xe)
          return { touched: !0, canvas: M.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function be(S, M, W) {
      const ye = Number(W == null ? void 0 : W.z_index), D = l(S, M, W).map((ie, Ne) => ({
        ...ie,
        z_index: Number.isFinite(ye) ? ye + Ne * 1e-3 : F + Ne * 1e-3
      }));
      return D.length && (F = Math.max(F, ...D.map((ie) => Number((ie == null ? void 0 : ie.z_index) || 0))) + 1), D;
    }
    for (const S of g()) {
      const M = String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim();
      if (!M) continue;
      const W = _(M, "paint");
      if (!ve(me(S, W))) {
        L.push(S), V.push(...W);
        continue;
      }
      const ye = ((p = (Y = t.paintEngine) == null ? void 0 : Y.getGroupTarget) == null ? void 0 : p.call(Y, M)) || null, D = ((P = ye == null ? void 0 : ye.committedPaint) == null ? void 0 : P.canvas) || null;
      if (!D) {
        L.push(S), V.push(...W);
        continue;
      }
      const ie = Se(D);
      if (!ie.touched || !ie.canvas) {
        L.push(S), V.push(...W);
        continue;
      }
      O = !0;
      const Ne = be(ie.canvas, "paint", v.get(M) || S || {});
      J.push(...Ne);
    }
    for (const S of h().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") === "paint")) {
      if (!ve(ue(S))) {
        J.push(S);
        continue;
      }
      const M = s(S, null);
      if (!M) {
        J.push(S);
        continue;
      }
      const W = Se(M);
      if (!W.touched || !W.canvas) {
        J.push(S);
        continue;
      }
      O = !0;
      const ye = be(W.canvas, "paint", S);
      J.push(...ye);
    }
    return O ? (o.painting.paint.strokes = V, o.painting.groups = L.sort((S, M) => Number((S == null ? void 0 : S.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), o.painting.raster_objects = J.sort((S, M) => Number((S == null ? void 0 : S.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function de(N) {
    var V, L, J, O, F;
    if ((((L = (V = N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.rawPoints) || ((O = (J = N.stroke) == null ? void 0 : J.geometry) == null ? void 0 : O.points) || []).length >= 1) {
      we(N);
      const x = m(N);
      x && (String(((F = N.stroke) == null ? void 0 : F.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(x) : t.paintEngine.commitActiveStroke(N.stroke, x)), N._hasCommittedSegments = !0;
    }
    const b = N.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, I = B(N.layerKind, b.toolKind, [], y);
    I.actionGroupId = b.actionGroupId, N.stroke = I;
    const v = m(N);
    v && t.paintEngine.beginStroke(I, v);
  }
  function _e(N) {
    var V, L;
    if ((((L = (V = N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.points) || []).length >= 3) {
      we(N);
      const J = m(N);
      J && t.paintEngine.commitActiveStroke(N.stroke, J), N._hasCommittedSegments = !0;
    }
    const b = N.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, I = pe(N.layerKind, b.toolKind, [], y);
    I.actionGroupId = b.actionGroupId, N.stroke = I;
    const v = m(N);
    v && t.paintEngine.beginStroke(I, v);
  }
  function we(N) {
    var v, V, L, J;
    const le = ((v = N == null ? void 0 : N.stroke) == null ? void 0 : v.geometry) || null;
    if (!le) return !1;
    const b = String(((V = N == null ? void 0 : N.stroke) == null ? void 0 : V.toolKind) || "pen");
    if (N.layerKind === "paint" && b === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = ee(le.rawPoints || le.points || [], N.stroke.targetSpace, !0)), re(N);
    const y = N.layerKind === "paint" && b !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (y && u((L = N.stroke) == null ? void 0 : L.actionGroupId), ae(N.layerKind).push(N.stroke), !0);
    const I = le.rawPoints || le.points || [];
    return I.length < 1 ? !1 : (le.processedPoints = ee(I, N.stroke.targetSpace, !0), y && u((J = N.stroke) == null ? void 0 : J.actionGroupId), ae(N.layerKind).push(N.stroke), !0);
  }
  return {
    connect(N) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: m,
        getDisplayListObjects: w,
        getPaintingGroupList: g,
        getRasterObjectList: h,
        getStrokeGroupStrokes: _,
        processFreehandPoints: ee,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: te,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: z
      } = N);
    },
    isActiveLassoTool: he,
    supportsErpPainting: q,
    getBrushPresetIdForTool: ce,
    isPaintCursorEnabled: oe,
    isActivePaintCursorVisible: U,
    setPointerPos: E,
    syncPaintCursorElement: A,
    showPaintSizePreview: H,
    hidePaintSizePreview: T,
    buildFreehandStrokeRecord: B,
    buildLassoFillStrokeRecord: pe,
    getPaintingLayerList: ae,
    appendPaintPoint: K,
    appendLassoPoint: k,
    _segmentFrameStroke: de,
    _segmentFrameLassoFill: _e,
    commitPaintInteraction: we
  };
}
function sA(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q;
  function fe(A) {
    var T;
    if (n && t.mode === "frame") {
      const B = s(), pe = l(B);
      if (!B || !pe || !(Number((A == null ? void 0 : A.x) || 0) >= Number(pe.x || 0) && Number((A == null ? void 0 : A.x) || 0) <= Number(pe.x || 0) + Number(pe.w || 0) && Number((A == null ? void 0 : A.y) || 0) >= Number(pe.y || 0) && Number((A == null ? void 0 : A.y) || 0) <= Number(pe.y || 0) + Number(pe.h || 0))) return null;
      const K = G(A, B, performance.now()), k = K ? o(K) : null;
      if (k)
        for (const de of a()) {
          if (!$(de)) continue;
          const _e = q(de, k);
          if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
            const we = z(de);
            if (we != null && we.visible) return { item: de, geom: we };
          }
        }
      const re = c(!1).slice().sort((de, _e) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0));
      for (const de of re) {
        if (de.type === "strokeGroup") {
          const N = f(X("paint", de.actionGroupId || de.id || ""));
          if (!N) continue;
          const le = z(N);
          if (!(le != null && le.visible)) continue;
          const b = Array.isArray(le.strokePaths) ? le.strokePaths : [];
          for (const y of b) {
            const I = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
            if (!I.length) continue;
            if (y.closed && I.length >= 3 && Jr(A, I)) return { item: N, geom: le };
            const v = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
            for (let V = 0; V < I.length - 1; V += 1)
              if (Oc(A, I[V], I[V + 1]) <= v * v) return { item: N, geom: le };
            if (I.length === 1 && Go(A, I[0]) <= v * v) return { item: N, geom: le };
          }
          continue;
        }
        if (de.type === "rasterObject") {
          const N = d(C(((T = de.item) == null ? void 0 : T.id) || de.id || ""));
          if (!N) continue;
          const le = z(N);
          if (m(N, le, A, K)) return { item: N, geom: le };
          continue;
        }
        const _e = de.item;
        if (!_e || !$(_e) || !k) continue;
        const we = q(_e, k);
        if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
          const N = z(_e);
          if (N != null && N.visible) return { item: _e, geom: N };
        }
      }
      return null;
    }
    const H = [
      ...c(!1).slice().sort((B, pe) => Number((pe == null ? void 0 : pe.z_index) || 0) - Number((B == null ? void 0 : B.z_index) || 0)).map((B) => {
        var pe;
        return B.type === "strokeGroup" ? f(X("paint", B.actionGroupId || B.id || "")) : B.type === "rasterObject" ? d(C(((pe = B.item) == null ? void 0 : pe.id) || B.id || "")) : B.item;
      }).filter(Boolean),
      ...n ? a().filter((B) => ee(B)) : []
    ];
    for (const B of H) {
      if (te(B)) {
        const ae = z(B);
        if (!(ae != null && ae.visible)) continue;
        const K = Array.isArray(ae.strokePaths) ? ae.strokePaths : [];
        for (const k of K) {
          const re = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
          if (!re.length) continue;
          if (k.closed && re.length >= 3 && Jr(A, re)) return { item: B, geom: ae };
          const de = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
          for (let _e = 0; _e < re.length - 1; _e += 1)
            if (Oc(A, re[_e], re[_e + 1]) <= de * de) return { item: B, geom: ae };
          if (re.length === 1 && Go(A, re[0]) <= de * de) return { item: B, geom: ae };
        }
        continue;
      }
      if (_(B)) {
        const ae = z(B);
        if (!(ae != null && ae.visible)) continue;
        if (m(B, ae, A)) return { item: B, geom: ae };
        continue;
      }
      const pe = z(B);
      if (pe.visible && Jr(A, pe.corners))
        return { item: B, geom: pe };
    }
    return null;
  }
  function ce(A, H, T = null) {
    if (!A || !A.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if ($(T)) return hu(A, H);
    if (A.kind === "strokeGroup") {
      const B = A.corners.findIndex((ae) => Go(ae, H) <= 121);
      if (B >= 0) {
        const ae = A.corners[B], K = ae.x - A.center.x, k = ae.y - A.center.y, re = K * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: B, cursor: re };
      }
      const pe = Array.isArray(A.strokePaths) ? A.strokePaths : [];
      for (const ae of pe) {
        const K = Array.isArray(ae == null ? void 0 : ae.points) ? ae.points : [];
        if (ae.closed && K.length >= 3 && Jr(H, K)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((ae == null ? void 0 : ae.lineWidth) || 0) * 0.5 + 6);
        for (let re = 0; re < K.length - 1; re += 1)
          if (Oc(H, K[re], K[re + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Jr(H, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (A.kind === "rasterObject") {
      const B = A.corners.findIndex((pe) => Go(pe, H) <= 121);
      if (B >= 0) {
        const pe = A.corners[B], ae = pe.x - A.center.x, K = pe.y - A.center.y, k = ae * K >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: B, cursor: k };
      }
      return Jr(H, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return mw(A, H, {
      edges: i === "cutout" || ee(T),
      resize: !(ee(T) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function oe(A, H) {
    return {
      x0: Math.min(Number((A == null ? void 0 : A.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y0: Math.min(Number((A == null ? void 0 : A.y) || 0), Number((H == null ? void 0 : H.y) || 0)),
      x1: Math.max(Number((A == null ? void 0 : A.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y1: Math.max(Number((A == null ? void 0 : A.y) || 0), Number((H == null ? void 0 : H.y) || 0))
    };
  }
  function U(A, H) {
    return !!A && !!H && Number(H.x) >= Number(A.x0) && Number(H.x) <= Number(A.x1) && Number(H.y) >= Number(A.y0) && Number(H.y) <= Number(A.y1);
  }
  function E(A, H) {
    if (!A || !(H != null && H.visible) || !Array.isArray(H.corners)) return !1;
    if (H.corners.some((pe) => U(A, pe))) return !0;
    const T = (Number(A.x0) + Number(A.x1)) * 0.5, B = (Number(A.y0) + Number(A.y1)) * 0.5;
    return !!Jr({ x: T, y: B }, H.corners);
  }
  function j(A) {
    if (he(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ne("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ne("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ne("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ne("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ne("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ne(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ne("grabbing") : ne("default");
      return;
    }
    if (w()) {
      ne("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ne(gN);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ne("default");
        return;
      }
      ne("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ne("default");
      return;
    }
    if (t.gizmoAxis) {
      ne("grab");
      return;
    }
    const H = u(), T = H ? z(H) : null, B = H ? h(H) : !1, pe = B ? { kind: "none", cursor: "default" } : ce(T, A, H);
    if (!B && pe.kind !== "none") {
      ne(pe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && fe(A)) {
      ne("default");
      return;
    }
    ne(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(A) {
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
        isActivePaintCursorVisible: w,
        isErpCamera: g,
        isItemLocked: h,
        isRasterObjectItem: _,
        isShotItem: ee,
        isStickerItem: $,
        isStrokeGroupItem: te,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: X,
        objectGeom: z,
        screenPosToFrameAsErpPoint: G,
        setCanvasCursor: ne,
        syncPaintCursorElement: he,
        worldDirToFrameLocalPoint: q
      } = A);
    },
    hitObjectAt: fe,
    handleHit: ce,
    rectFromPoints: oe,
    rectIntersectsGeom: E,
    updateCursor: j
  };
}
function aA(e) {
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
  let f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce = !1;
  function oe() {
    return ce;
  }
  function U() {
    if (!o) return;
    if (ce = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || te() && z()) {
      const K = E();
      ce = K.visible, j(K);
      return;
    }
    const T = _(), B = ee();
    if (!T && B.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const pe = $(), ae = b2({
      type: d,
      selected: T,
      selectedItems: B,
      selectedKind: pe,
      geom: B.length > 1 ? h(B) : fe(T),
      allLocked: f(B),
      anyLocked: B.some((K) => G(K)),
      selectedLocked: G(T),
      activeAspect: ne(T) && C() ? ho : Dr(T),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: X,
      isStickerHidden: q,
      canRestoreSelectedToInitial: m,
      iconSet: ze,
      cameraShot: t,
      coverage: a.coverage
    });
    j(ae);
  }
  function E() {
    const T = he() && !n.interaction ? g().space : null;
    if (!(T != null && T.gizmo)) return { visible: !1 };
    const B = w(), pe = T.stickers.find((re) => re.id === n.worldSelectedId), K = (pe ? bd(pe) : [T.gizmo.transform.position]).map((re) => ps(B, re, r.width, r.height)).filter(Boolean), k = LS(B, T.gizmo.transform.position, T.gizmo.mode, r.width, r.height);
    return v2({ corners: K, gizmoBox: k, gizmoMode: T.gizmo.mode, camera: te() });
  }
  function j(T) {
    var k, re;
    if (!T.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const B = (de, _e) => S2(T.anchor, de, _e, r.width, r.height), pe = Math.max(1, Number(((k = n.menuSize) == null ? void 0 : k.w) || 220)), ae = Math.max(1, Number(((re = n.menuSize) == null ? void 0 : re.h) || 40)), K = B(pe, ae);
    if (!K) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: K.left,
      top: K.top,
      items: T.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const de = o.getBoundingClientRect(), _e = Math.round(Number((de == null ? void 0 : de.width) || 0)) || 220, we = Math.round(Number((de == null ? void 0 : de.height) || 0)) || 40;
      n.menuSize = { w: _e, h: we, measured: !0 };
      const N = B(_e, we);
      N && (u.selectionMenu.left = N.left, u.selectionMenu.top = N.top);
    });
  }
  function A() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function H(T) {
    if (!c || !T || !T.isConnected) return;
    const B = String(T.getAttribute("data-tip") || "").trim();
    if (!B) return;
    u.tooltip.text = B, u.tooltip.visible = !0;
    const pe = T;
    i.requestFrame(() => {
      var v, V;
      if (l.target !== pe || !c || !(pe != null && pe.isConnected)) return;
      const ae = s.getBoundingClientRect(), K = pe.getBoundingClientRect(), k = 8, re = 12, de = Math.round(Number(((v = c.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, _e = Math.round(Number(((V = c.getBoundingClientRect()) == null ? void 0 : V.height) || 0)) || 24, we = !!pe.closest(".pano-floating-left"), N = !!pe.closest(".pano-frame-rail"), le = !!pe.closest(".pano-paint-footer") || !!pe.closest(".pano-paint-color-float");
      let b = "", y = K.left - ae.left + K.width * 0.5 - de * 0.5, I = K.top - ae.top - _e - re;
      if (pe.closest(".pano-floating-top") && (I = K.bottom - ae.top + re), we)
        b = "tool-rail", y = K.right - ae.left + 10, I = K.top - ae.top + K.height * 0.5 - _e * 0.5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Ie(I, k, Math.max(k, ae.height - _e - k));
      else if (N)
        b = "frame-rail", y = K.left - ae.left - de - 10, I = K.top - ae.top + K.height * 0.5 - _e * 0.5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Ie(I, k, Math.max(k, ae.height - _e - k));
      else if (le) {
        b = "footer";
        const L = pe.closest(".pano-paint-footer"), J = L ? L.getBoundingClientRect() : K;
        y = J.left - ae.left + J.width * 0.5 - de * 0.5, I = J.bottom - ae.top + 5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Math.max(k, I);
      }
      y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Math.max(k, I), u.tooltip.left = y, u.tooltip.top = I, u.tooltip.variant = b, u.tooltip.visible = !0;
    });
  }
  return {
    connect(T) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: w,
        editorViewInput: g,
        getMultiSelectionGeom: h,
        getSelected: _,
        getSelectedItems: ee,
        getSelectedKind: $,
        isCameraSelected: te,
        isErpCamera: C,
        isExternalSticker: X,
        isFreeSpaceView: z,
        isItemLocked: G,
        isShotItem: ne,
        isSpaceView: he,
        isStickerHidden: q,
        objectGeom: fe
      } = T);
    },
    isWorldMenuShown: oe,
    updateSelectionMenu: U,
    hideTooltip: A,
    showTooltipFor: H
  };
}
function lA(e) {
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
    type: w,
    viewController: g
  } = e;
  let h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we, N, le, b, y, I, v, V, L, J, O, F, x, R, Z, me, ue, ve, Se, be, Q, ge, Y, p, P, S, M, W, ye, D, ie, Ne, xe, Pe, Ce, Le, je, Ke, $e, He, se, Fe, Ae, Re, Ye, Ge, We, ht, bt, Tt, Nt, Pn, qe, sn, Wt, ci, Wr, ui, on, yn, Ur, kr, cr, _o, wo, xo, ko, As, Cs, Mo, Ot, Nn, Qn, Li, Vn, Is, Es, Os, Br = null;
  function Gl(Oe) {
    m.selection && (m.selection = null, Cs());
    const Ee = Re(Oe);
    Br = Ee, Nt(Ee, !0), ce(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const ke = Y(), vt = ge(), lt = ke || vt ? Cw(Li(), Oe) : null;
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
        const Xe = de();
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
      const Xe = de(), Ue = b(Xe);
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
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), ko(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      yn(Ee, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && No(Oe, Ee);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (cr() || _o())) {
      if (!Ce()) return;
      kr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Ze = n.mode === "frame" && _o() ? de() : null, Zt = { kind: "ERP_GLOBAL" }, xt = Ze ? We(Ee, Ze, performance.now()) : Ge(Ee, performance.now());
      if (!xt) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: Zi("live"),
        stroke: Ue === "lasso_fill" ? he(Xe, Ue, [xt], Zt) : ne(Xe, Ue, [xt], Zt)
      }, be();
      const Mr = _e(n.interaction);
      if (Mr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Mr), n.interaction.kind === "paint_stroke") {
          const Ri = n.paintEngine.ensureTarget(Mr), Vi = Number((xt == null ? void 0 : xt.u) ?? (xt == null ? void 0 : xt.x) ?? 0), $i = Number((xt == null ? void 0 : xt.v) ?? (xt == null ? void 0 : xt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ri, Vi, $i, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Mr);
      Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae();
      return;
    }
    const ut = x(), Je = F(), et = ut.length > 1 ? I(ut) : Je ? Pe(Je) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && q() && Y() && ui(Oe, Ee) || n.primaryTool === "cursor" && c && W() && Kl(Oe, Ee)) return;
    if (ut.length > 1 && (et != null && et.visible)) {
      if ((ut.some((Ue) => p(Ue)) ? { kind: "none" } : ue(et, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: ut.map((Ue) => Ue),
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: ut.filter((Ue) => ye(Ue)).map((Ue) => ({
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
            frameSnapshot: un(pe(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var Zt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Zt = Ze.center) == null ? void 0 : Zt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: R(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: ut.filter((Ue) => P(Ue)).map((Ue) => ({
            id: Le(Ue.rasterObjectId || Ue.id || ""),
            snapshot: un(L().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === Le(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var Zt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Zt = Ze.center) == null ? void 0 : Zt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: V(Ue)
          }))
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = p(Je) ? { kind: "none" } : ue(et, Ee, Je);
      if (Xe.kind === "scale") {
        n.interaction = D(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : P(Je) ? {
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
          frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind))
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
            const Ze = de();
            return Ze ? We(Ee, Ze, performance.now()) : null;
          })() : Ge(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ue,
            snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind))
          }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (P(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = de();
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
      if (Xe && n.selectedId && ($e(), j()), Pn(nt.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && Qn(), Nn(), Ae(), p(nt.item)) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: D(nt.item) ? "move_stroke_group" : P(nt.item) ? "move_raster_object" : "move",
        item: nt.item,
        offset: { x: Ee.x - nt.geom.center.x, y: Ee.y - nt.geom.center.y },
        startUv: D(nt.item) || P(nt.item) ? n.mode === "frame" ? (() => {
          const Ue = de();
          return Ue ? We(Ee, Ue, performance.now()) : null;
        })() : Ge(Ee, performance.now()) : null,
        snapshot: D(nt.item) ? un(Z(nt.item.actionGroupId, nt.item.layerKind)) : P(nt.item) ? un(L().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Le(nt.item.rasterObjectId || nt.item.id || ""))) : null,
        frameSnapshot: D(nt.item) ? un(pe(nt.item.actionGroupId, nt.item.layerKind)) : null
      }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const er = !!n.selectedId;
    er && ($e(), j()), oe(), er && Qn(), Nn(), Ae(), n.mode === "pano" && No(Oe, Ee);
  }
  function Yr(Oe, Ee) {
    return i.gizmoPointer(Oe, A(), Ee.x, Ee.y, t.width, t.height);
  }
  function Kl(Oe, Ee) {
    var et;
    const ke = (et = B().space) == null ? void 0 : et.gizmo;
    if (ke && Yr("hover", Ee) !== null && Yr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: Ii(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Ot(Ee), !0;
    const vt = x(), lt = F(), ut = vt.length > 1 ? vt.some((nt) => p(nt)) ? "none" : ue(I(vt), Ee).kind : lt && !p(lt) ? ue(Pe(lt), Ee, lt).kind : "none";
    if (ut !== "none" && ut !== "move") return !1;
    const Je = i.pickSticker(A(), Ee.x, Ee.y, t.width, t.height);
    return u.stickers.some((nt) => nt.id === Je && nt.placement === "world") ? (n.worldSelectedId !== Je && (n.selectedId && ($e(), j()), bt(Je), Qn(), Nn(), xo(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Po(Oe) {
    var vt;
    const ke = !!(n.worldSelectedId || Q()) && n.primaryTool === "cursor" && W() && !!((vt = B().space) != null && vt.gizmo) ? Yr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function Fs(Oe, Ee) {
    const ke = Yr("move", Ee);
    if (ke && Oe.camera) {
      for (const [lt, ut] of Object.entries(Gf(Oe.mode, Oe.base, Oe.start, ke))) hn(u.camera, lt, n.frame, ut);
      wo(), Oe.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = u.stickers.find((lt) => lt.id === Oe.id);
    !ke || !vt || (iS(vt, n.frame, Gf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, ie(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Ts(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (Yr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && ($e(), U(), Qn())), Ot(n.pointerPos), Ae();
  }
  function No(Oe, Ee) {
    if (Y()) {
      const vt = Li().emptyLeft;
      vt && Ur(vt, Ee, Oe.pointerId);
      return;
    }
    const ke = Ye(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, g.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Oe.pointerId);
  }
  function Ds(Oe, Ee) {
    if (!f || !je.playing || (je.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const lt = ae();
      lt && (Oe.pivot = re(lt, k(lt), Ee));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const lt = u.stickers.find((ut) => ut.id === Oe.id);
      Oe.camera ? Oe.base = H() : lt && (Oe.base = Ii(lt, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const lt = I(Oe.items);
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
  function Ls(Oe) {
    var vt, lt, ut, Je, et, nt, er, Xe, Ue, Ze, Zt, xt, Mr, Ri, Vi, $i, js, Hs, Gs, Ks, Ws, Us;
    const Ee = Re(Oe);
    if (Nt(Ee, !0), !n.interaction) {
      Po(Ee), Ot(Ee);
      return;
    }
    Ot(Ee);
    const ke = n.interaction;
    if (Br && (Ee.x !== Br.x || Ee.y !== Br.y)) {
      const ct = Br;
      Br = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Ds(ke, ct);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        Fs(ke, Ee);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        ct.forEach((yt) => {
          const _t = Re(yt);
          if (n.mode === "frame") {
            const An = de(), Xt = An ? b(An) : null;
            if (Xt) {
              const Cn = (_t.x - Xt.x) / Math.max(1, Xt.w), Vt = (_t.y - Xt.y) / Math.max(1, Xt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, _(ke));
            }
          }
          $(ke, _t, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        if (ct.forEach((yt) => {
          const _t = Re(yt);
          if (n.mode === "frame") {
            const An = de(), Xt = An ? b(An) : null;
            if (Xt) {
              const Cn = (_t.x - Xt.x) / Math.max(1, Xt.w), Vt = (_t.y - Xt.y) / Math.max(1, Xt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, h(ke));
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
        const ct = ci();
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
          const yt = de(), _t = b(yt);
          if (!yt || !_t) return;
          const An = {
            x: Ie((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Ie((pt - _t.y) / Math.max(1, _t.h), 0, 1)
          }, Xt = K(yt, An);
          if (!Xt) return;
          const Cn = la(Xt);
          Vn(ke.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const yt = me(), _t = Ie((ct - yt.x) / Math.max(yt.w, 1), 0, 1), An = Ie((pt - yt.y) / Math.max(yt.h, 1), 0, 1);
          Vn(ke.item, { yaw_deg: Ht(_t * 360 - 180), pitch_deg: Ie(90 - An * 180, -90, 90) });
        } else {
          const yt = ht(ct, pt), _t = la(yt);
          Vn(ke.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = de();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Wt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        z((ut = ke.item) == null ? void 0 : ut.actionGroupId, pt, yt, ke.snapshot, (Je = ke.item) == null ? void 0 : Je.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = de();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Wt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        te(((et = ke.item) == null ? void 0 : et.rasterObjectId) || ((nt = ke.item) == null ? void 0 : nt.id) || "", pt, yt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        C(((er = ke.item) == null ? void 0 : er.rasterObjectId) || ((Xe = ke.item) == null ? void 0 : Xe.id) || "", pt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const ct = Ee.x - Number(((Ue = ke.offset) == null ? void 0 : Ue.x) || 0), pt = Ee.y - Number(((Ze = ke.offset) == null ? void 0 : Ze.y) || 0);
        let yt = !1, _t = !1, An = !1;
        const Xt = ct - Number(((Zt = ke.startCenter) == null ? void 0 : Zt.x) || ct), Cn = pt - Number(((xt = ke.startCenter) == null ? void 0 : xt.y) || pt);
        for (const Vt of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const an = (w === "cutout" ? we() : y()).find((Dt) => String((Dt == null ? void 0 : Dt.id) || "") === String(Vt.id || ""));
          if (!an || !ye(an)) continue;
          const nn = {
            x: Number(((Mr = Vt.center) == null ? void 0 : Mr.x) || 0) + Xt,
            y: Number(((Ri = Vt.center) == null ? void 0 : Ri.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const Dt = de(), Gt = b(Dt);
            if (!Dt || !Gt) continue;
            const In = {
              x: Ie((nn.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Ie((nn.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, zi = K(Dt, In);
            if (!zi) continue;
            const En = la(zi);
            Vn(an, { yaw_deg: En.yaw, pitch_deg: En.pitch });
          } else if (n.mode === "unwrap") {
            const Dt = me(), Gt = Ie((nn.x - Dt.x) / Math.max(Dt.w, 1), 0, 1), In = Ie((nn.y - Dt.y) / Math.max(Dt.h, 1), 0, 1);
            Vn(an, { yaw_deg: Ht(Gt * 360 - 180), pitch_deg: Ie(90 - In * 180, -90, 90) });
          } else {
            const Dt = ht(nn.x, nn.y), Gt = la(Dt);
            Vn(an, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          yt = !0;
        }
        for (const Vt of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const an = {
            x: Number(((Vi = Vt.center) == null ? void 0 : Vi.x) || 0) + Xt,
            y: Number((($i = Vt.center) == null ? void 0 : $i.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = de();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Wt(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            z(Vt.id, Gt, In, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (yt = !0, _t = !0);
          }
        }
        for (const Vt of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const an = {
            x: Number(((js = Vt.center) == null ? void 0 : js.x) || 0) + Xt,
            y: Number(((Hs = Vt.center) == null ? void 0 : Hs.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = de();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Wt(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            te(Vt.id, Gt, In, Vt.snapshot) && (yt = !0, An = !0);
          }
        }
        yt && (_t ? xe({ rebuildPaintEngine: !1 }) : An ? Ne() : ie(), Ae({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        G((Gs = ke.item) == null ? void 0 : Gs.actionGroupId, pt, 0, ke.snapshot, (Ks = ke.item) == null ? void 0 : Ks.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - Number(ke.startAng || 0)) * Ei;
        Oe.shiftKey && (ct = Math.round(ct / 45) * 45), G((Ws = ke.item) == null ? void 0 : Ws.actionGroupId, 1, ct, ke.snapshot, (Us = ke.item) == null ? void 0 : Us.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ee, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179), vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Pi(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Pi(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Pi(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let pt = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - ke.startAng) * Ei, yt = ke.startRot - pt;
        Oe.shiftKey && (yt = Math.round(yt / 45) * 45), Vn(ke.item, { [ye(ke.item) ? "rot_deg" : "roll_deg"]: yt }), ye(ke.item) && ie(), Ae({ localOnly: !0 });
      }
    }
  }
  function Rs() {
    var Ee, ke, vt, lt, ut, Je, et;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Ot(n.pointerPos), Nn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        Ts(Oe);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        be();
        const nt = E(n.interaction), er = !!n.interaction._hasCommittedSegments;
        if (nt || er) {
          xe();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Ze = v().find((Zt) => String((Zt == null ? void 0 : Zt.actionGroupId) || "") === Xe);
            Ze && (Ze.frame = null);
          }
          const Ue = _e(n.interaction);
          Ue && (nt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Fe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), $e(), j(), Qn(), Nn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = _e(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((ut = n.interaction) == null ? void 0 : ut.kind) === "marquee_select") {
        const nt = He(n.interaction.start, n.interaction.current), Xe = [
          ...w === "cutout" ? N().filter((Ue) => !M(Ue)) : [...y()],
          ...O(),
          ...J()
        ].filter((Ue) => se(nt, Pe(Ue)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), Qn(), Nn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && ($e(), U(), Qn());
      else if (n.interaction && n.interaction.kind !== "view") {
        let nt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (nt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (nt = !0), nt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : Ne()), $e(), j(), o.setDirtyCanvas(!0, !0), As(), Nn(), Ae();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && ve(), be(), Oe && Oe.kind === "view" && Wr(() => g.endDrag(performance.now())), Mo(), Nn(), Ot(n.pointerPos), Ae();
    }
  }
  function Vs() {
    var Oe, Ee, ke, vt, lt;
    if (!fe()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        Ts(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && Wr(() => g.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        be();
        const ut = _e(n.interaction);
        ut && n.paintEngine.cancelActiveStroke(ut);
      }
      n.interaction = null, be(), Mo(), Ot(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function $s(Oe) {
    const Ee = Re(Oe), ke = Nt(Ee, !0);
    n.interaction || (Ot(Ee), ke && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function zs(Oe) {
    if (n.mode === "frame") {
      const Ee = Re(Oe), ke = Ha(Oe);
      ke && kr(), ke && ge() ? Is(Ee, -ke) : ke && Es(Ee, ke) && Ae({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ce(), Y()) {
        const Ee = Ha(Oe);
        Ee && Os(Re(Oe), -Ee);
      } else g.applyWheelEvent(Oe) && Ae({ localOnly: !0, reason: ft.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: _,
        appendLassoPoint: ee,
        appendPaintPoint: $,
        applyRasterObjectOffset: te,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: z,
        applyStrokeGroupTransform: G,
        buildFreehandStrokeRecord: ne,
        buildLassoFillStrokeRecord: he,
        cameraShoots: q,
        cancelFrameCameraGesture: fe,
        cancelViewTransition: ce,
        clearSelection: oe,
        commitAndRefreshNode: U,
        commitPaintInteraction: E,
        commitState: j,
        currentSpaceCamera: A,
        cutoutCamera: H,
        dragFrame: T,
        editorViewInput: B,
        ensureGroupFrame: pe,
        frameContext: ae,
        frameLocalPointToWorldDir: K,
        frameSpaceView: k,
        frameTarget: re,
        getActiveCutoutShot: de,
        getActivePaintTargetDescriptor: _e,
        getCutoutSelectableItems: we,
        getCutoutSelectableItemsForHit: N,
        getFrameViewLayout: le,
        getFrameViewRect: b,
        getList: y,
        getMultiSelectionGeom: I,
        getPaintingGroupList: v,
        getRasterObjectCenterUv: V,
        getRasterObjectList: L,
        getSelectableRasterObjectItems: J,
        getSelectableStrokeGroupItems: O,
        getSelected: F,
        getSelectedItems: x,
        getStrokeGroupCenterUv: R,
        getStrokeGroupStrokes: Z,
        getUnwrapRect: me,
        handleHit: ue,
        hideTooltip: ve,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: be,
        isCameraSelected: Q,
        isFreeFrameView: ge,
        isFreeSpaceView: Y,
        isItemLocked: p,
        isRasterObjectItem: P,
        isSceneSticker: S,
        isShotItem: M,
        isSpaceView: W,
        isStickerItem: ye,
        isStrokeGroupItem: D,
        markObjectVisualsDirty: ie,
        markPaintCompositeVisualsDirty: Ne,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: Pe,
        paintingShown: Ce,
        parseRasterObjectSelectionId: Le,
        playback: je,
        poseOf: Ke,
        pushHistory: $e,
        rectFromPoints: He,
        rectIntersectsGeom: se,
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
        spaceViewState: ci,
        startAnimation: Wr,
        startCameraPress: ui,
        startFrameDrag: on,
        startPanFrame: yn,
        startSpaceDrag: Ur,
        stopTimelinePlayback: kr,
        supportsErpPainting: cr,
        supportsFramePainting: _o,
        syncCutoutShot: wo,
        syncFloatingViewButtonState: xo,
        syncFrameRollKnob: ko,
        syncSidePanelControls: As,
        syncTimeline: Cs,
        syncViewToggleState: Mo,
        updateCursor: Ot,
        updateSelectionMenu: Nn,
        updateSidePanel: Qn,
        viewControls: Li,
        writePose: Vn,
        zoomFrameAt: Is,
        zoomFrameViewAt: Es,
        zoomSpaceAt: Os
      } = Oe);
    },
    onCanvasPointerDown: Gl,
    worldGizmoPointer: Yr,
    hoverWorldGizmo: Po,
    onCanvasPointerMove: Ls,
    onCanvasPointerUp: Rs,
    onCanvasPointerCancel: Vs,
    onCanvasMouseMove: $s,
    onCanvasWheel: zs
  };
}
function cA(e) {
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
  let f, m, w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K;
  function k(we, N, le = !1) {
    var J;
    j();
    const b = a && n.mode === "frame" ? _() : null, y = b || te(), I = b ? "shot" : X(), v = U();
    if (v && !ae(v) || !v && (!y || I === "stroke" || z(y))) return;
    const V = (((J = u.sidePanel) == null ? void 0 : J.params) || []).find((O) => O.key === we);
    if (!V || V.enabled === !1) return;
    let L = Number(N);
    if (Number.isNaN(L) && (L = 0), (v || t) && dN.has(we) ? L = we === "scale" ? Math.max(L, s0) : L : L = Ie(L, Number(V.min), Number(V.max)), we === "yaw_deg" && (L = Ht(L)), !v && t && we.startsWith("position_")) {
      H(), eS(l.camera, n.frame, we, L), pe(), oe(), le && ce();
      return;
    }
    if (v) {
      rS(v, n.frame, we, L), he(), pe(), oe(), le && ce();
      return;
    }
    we === "opacity" ? tS(y, n.frame, L / 100) : K(y, { [we]: L }), a && !G(y) && (we === "hFOV_deg" || we === "vFOV_deg") && (y.aspect_id = Pi(y)), pe(), oe(), le && ce();
  }
  async function re(we) {
    var b, y, I, v, V, L, J;
    const N = we.target.closest("[data-action]");
    if (!N) return;
    const le = String(N.getAttribute("data-action") || "");
    if (le === "coverage-set") {
      const O = Rn(N.getAttribute("data-coverage"));
      if (O === Rn(l.coverage)) return;
      l.coverage = O, n.coverage = O, r && (r.value = String(O)), o ? s.backgroundDirty = !0 : (h(), A({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), pe(), B(), oe();
      return;
    }
    if (le === "toggle-selection-picker") {
      if ((y = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && y.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (le === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const O = String(N.getAttribute("data-selection-id") || "");
      let F = null;
      if (O && (d === "stickers" ? F = [...$(), ...c ? l.shots : []].find((x) => String((x == null ? void 0 : x.id) || "") === O) || null : F = ((I = ee().find((x) => {
        var R;
        return String(((R = x == null ? void 0 : x.item) == null ? void 0 : R.id) || "") === O;
      })) == null ? void 0 : I.item) || null), E(F || null), F && !ne(F)) {
        const x = fe(F);
        T(Ht(Number(x.yaw_deg || 0)), Ie(Number(x.pitch_deg || 0), -89.9, 89.9));
      }
      pe(), B(), oe();
      return;
    }
    if (le === "copy-state-inline") {
      const O = te(), F = X();
      if (!O || F === "stroke" || C().length > 1) return;
      const x = JSON.stringify(a && F !== "image" ? m(O) : w(fe(O)));
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
      l.ui_settings.invert_view_x = N.getAttribute("data-value") === "1", q(), pe(), (V = i.setDirtyCanvas) == null || V.call(i, !0, !0), oe();
      return;
    }
    if (le === "set-invert-y") {
      l.ui_settings.invert_view_y = N.getAttribute("data-value") === "1", q(), pe(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), oe();
      return;
    }
    if (le === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, q(), pe(), (J = i.setDirtyCanvas) == null || J.call(i, !0, !0), oe();
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
  function de(we) {
    const N = we.target.closest("[data-action='param-input']");
    N && k(String(N.getAttribute("data-param-key") || ""), N.value, !1);
  }
  function _e(we) {
    const N = we.target.closest("[data-action='param-input']");
    N && k(String(N.getAttribute("data-param-key") || ""), N.value, !0);
  }
  return {
    connect(we) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: w,
        closeEditor: g,
        commitState: h,
        getActiveCutoutShot: _,
        getCutoutInspectorItems: ee,
        getList: $,
        getSelected: te,
        getSelectedItems: C,
        getSelectedKind: X,
        isItemLocked: z,
        isSceneSticker: G,
        isStrokeGroupItem: ne,
        markObjectVisualsDirty: he,
        persistUiSettings: q,
        poseOf: fe,
        pushHistory: ce,
        requestDraw: oe,
        selectedWorldSticker: U,
        setSelectedItem: E,
        stopTimelinePlayback: j,
        syncCoverageChangeToNodePreviews: A,
        syncCutoutShot: H,
        turnViewTo: T,
        updateSelectionMenu: B,
        updateSidePanel: pe,
        worldStickerEditable: ae,
        writePose: K
      } = we);
    },
    onSidePanelClick: re,
    onSidePanelInput: de,
    onSidePanelChange: _e
  };
}
function uA(e) {
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
  let w, g, h, _, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, j, A, H, T, B, pe, ae, K, k, re, de, _e, we, N, le, b, y, I, v, V, L, J, O, F, x, R, Z, me, ue, ve, Se, be;
  const Q = () => {
    if (!t.customPaintSessionStart) return;
    if (pl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (AN(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const $e = [
      $n(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !pl(He, t.customPaintColor))
    ];
    t.customPaintHistory = $e.slice(0, 8), t.customPaintSessionStart = null;
  }, ge = ($e = !1) => {
    !i || i.hidden || ($e ? Q() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, Y = () => {
    i && (i.hidden && (t.customPaintSessionStart = $n(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    V();
  }
  function P($e) {
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
    const se = $e.target.closest("[data-gizmo-mode]");
    if (se) {
      t.gizmoMode = se.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, ve(), k({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Fe = $e.target.closest("[data-view]");
    if (Fe) {
      if (Fe.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Fe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), Se(), ve()), q(), F(), k();
      return;
    }
    const Ae = $e.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && X({ preservePanelValues: !0 }), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? re(-1) : qe === "redo" ? re(1) : qe === "clear" ? te() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? _() : qe === "add-or-look" ? w() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, X({ preservePanelValues: !0 }), Tn[qe] && (t.activeBrushPresetId = qe), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = jl.find((sn) => sn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = $n(qe.color), ge(!0), L();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        $e.preventDefault(), $e.stopPropagation(), i && !i.hidden ? ge(!0) : Y(), L();
        return;
      }
    }
    const Re = String(((Nt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : Nt.call(Ae, "data-action")) || "");
    if (Re === "video-play-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub = !1, x();
      return;
    }
    if (Re === "video-audio-toggle") {
      $e.preventDefault(), $e.stopPropagation(), me(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Re === "video-loop-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, m.loop = qe, O({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: m.muted,
        volume: Number(m.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Re === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Re === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ce() : null;
        if (!qe || qe.locked === !0) return;
        N(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), Se(), ve(), k();
        return;
      }
      if (Re === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ce() : null, sn = Ae.getAttribute("data-custom-width"), Wt = Ae.getAttribute("data-custom-height");
        if (!qe || !ee(qe, sn, Wt)) return;
        f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), k();
        return;
      }
      if (Re === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ce() : null;
        if (!qe || qe.locked === !0) return;
        _e(qe), f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), k();
        return;
      }
      if (Re === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, ve(), k();
        return;
      }
      if (Re === "aspect-set") {
        const qe = U();
        if (!qe) return;
        const sn = String(Ae.getAttribute("data-aspect") || "1:1");
        N(qe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), pe(), z(), ve(), k();
        return;
      }
      if (Re === "rotate-90") {
        const qe = U();
        if (!qe || A()) return;
        _e(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), pe(), z(), ve(), k();
        return;
      }
      if (Re === "bring-front") {
        $();
        return;
      }
      if (Re === "send-back") {
        we();
        return;
      }
      if (Re === "duplicate") {
        he();
        return;
      }
      if (Re === "replace-image") {
        K();
        return;
      }
      if (Re === "toggle-lock") {
        Z();
        return;
      }
      if (Re === "back-initial") {
        de();
        return;
      }
      if (Re === "toggle-visible") {
        R();
        return;
      }
      if (Re === "delete") {
        ne();
        return;
      }
    }
    if (Re === "reset-view") {
      if (t.mode === "frame") return;
      ue(
        { position: I(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Pn = G()) == null ? void 0 : Pn.radius) || sr },
        { mode: hl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Re === "frame-view") {
      if (!H() || hl(t.spaceMode, t.viewTransition) !== "6dof") return;
      fe();
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
      if (!(m instanceof HTMLVideoElement)) return;
      T.playing && (be.resumeAfterScrub = !0), T.seek(vi(Number(He.value || 0), B()));
      return;
    }
    const se = $e.target.closest("[data-video-volume]");
    if (se) {
      if (!(m instanceof HTMLVideoElement)) return;
      const Re = Ie(Number(se.value || 0), 0, 1);
      m.volume = Re, m.muted = Re <= 1e-4, O({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: Re
      });
      return;
    }
    const Fe = $e.target.closest("[data-paint-size-slider]");
    if (Fe) {
      if (Fe.disabled) return;
      const Re = Math.max(1, Math.min(120, Math.round(Number(Fe.value)))), Ye = oe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ye] = Re, L(), b();
      return;
    }
    const Ae = $e.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Re = { ...t.customPaintColor, a: Ie(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = $n(Re), t.paintColor = $n(Re), L();
    }
  }
  function M($e) {
    var He;
    if ($e.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub && T.play(), be.resumeAfterScrub = !1;
      return;
    }
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((He = $e.target) == null ? void 0 : He.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && E();
  }
  function W($e) {
    const He = $e.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && y(He);
    }, 220));
  }
  function ye($e) {
    var Fe, Ae;
    const He = $e.target.closest("[data-tip]");
    !He || u.target !== He || ($e.relatedTarget instanceof Element ? (Ae = (Fe = $e.relatedTarget).closest) == null ? void 0 : Ae.call(Fe, "[data-tip]") : null) === He || j();
  }
  function D($e, He) {
    var Ge;
    if (!o) return;
    const se = o.getBoundingClientRect(), Fe = Ie(($e - se.left) / Math.max(1, se.width), 0, 1), Ae = 1 - Ie((He - se.top) / Math.max(1, se.height), 0, 1), Re = Au(t.customPaintColor), Ye = { ...Nu(Re.h, Fe, Ae), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = $n(Ye), t.paintColor = $n(Ye), L();
  }
  function ie($e) {
    var Re;
    if (!s) return;
    const He = s.getBoundingClientRect(), se = Ie(($e - He.left) / Math.max(1, He.width), 0, 1), Fe = Au(t.customPaintColor), Ae = { ...Nu(se, Fe.s, Fe.v), a: Number(((Re = t.customPaintColor) == null ? void 0 : Re.a) ?? 1) };
    t.customPaintColor = $n(Ae), t.paintColor = $n(Ae), L();
  }
  function Ne($e, He) {
    const se = $e.pointerId;
    He($e);
    const Fe = (Re) => {
      Re.pointerId === se && He(Re);
    }, Ae = (Re) => {
      Re.pointerId === se && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Fe), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const $e = !!t.fullscreen;
    Xi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: $e ? ze.fullscreen_close : ze.fullscreen,
      label: $e ? "Exit Fullscreen" : "Fullscreen",
      tip: $e ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe($e) {
    const He = !!$e;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), xe(), ae(), k());
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
        addStudioCamera: h,
        addWorldImageSticker: _,
        applyCutoutAspectCustom: ee,
        bringSelectedToFront: $,
        clearAll: te,
        clearPaintingLayer: C,
        clearSelection: X,
        commitAndRefreshNode: z,
        contentSphere: G,
        deleteSelected: ne,
        duplicateSelected: he,
        forceCursorTool: q,
        frameSpaceContent: fe,
        getActiveCutoutShot: ce,
        getBrushPresetIdForTool: oe,
        getSelected: U,
        hidePaintSizePreview: E,
        hideTooltip: j,
        isErpCamera: A,
        isFreeSpaceView: H,
        playback: T,
        playbackFps: B,
        pushHistory: pe,
        queueVideoTransportLayout: ae,
        replaceSelectedImage: K,
        requestDraw: k,
        restoreHistory: re,
        restoreSelectedToInitialPose: de,
        rotateCutoutAspect90: _e,
        sendSelectedToBack: we,
        setShotAspect: N,
        setSpaceMode: le,
        showPaintSizePreview: b,
        showTooltipFor: y,
        spaceOrigin: I,
        startAnimation: v,
        syncFloatingViewButtonState: V,
        syncPaintUi: L,
        syncSidePanelControls: J,
        syncVideoTransportState: O,
        syncViewToggleState: F,
        togglePlayback: x,
        toggleSelectedExternalStickerVisibility: R,
        toggleSelectedLock: Z,
        toggleVideoMuted: me,
        transitionView: ue,
        updateSelectionMenu: ve,
        updateSidePanel: Se,
        videoState: be
      } = $e);
    },
    closePaintColorPop: ge,
    syncGridToggleButton: p,
    onRootClick: P,
    onRootInput: S,
    onRootChange: M,
    onRootPointerOver: W,
    onRootPointerOut: ye,
    updatePaintColorFromSv: D,
    updatePaintColorFromHue: ie,
    bindDrag: Ne,
    syncFullscreenButton: xe,
    setFullscreenState: Pe,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: Ke
  };
}
function dA(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, m, w, g, h, _, ee, $, te, C, X;
  const z = N2();
  function G(ae) {
    var K, k, re, de, _e;
    if (ae.key === "Escape") {
      if (l()) {
        ae.preventDefault(), ae.stopPropagation(), (K = ae.stopImmediatePropagation) == null || K.call(ae);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        ae.preventDefault(), ae.stopPropagation(), (k = ae.stopImmediatePropagation) == null || k.call(ae), (re = document.exitFullscreen) == null || re.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        ae.preventDefault(), ae.stopPropagation(), (de = ae.stopImmediatePropagation) == null || de.call(ae), ee(!1);
        return;
      }
      ae.preventDefault(), ae.stopPropagation(), (_e = ae.stopImmediatePropagation) == null || _e.call(ae), d();
    }
  }
  function ne(ae) {
    const K = String(ae.key || ""), k = String(ae.code || ""), re = Number(ae.keyCode || 0);
    if (!(K === "Delete" || k === "Delete" || re === 46) && !(K === "Backspace" || k === "Backspace" || re === 8)) return;
    const we = ae.target, N = ((we == null ? void 0 : we.tagName) || "").toUpperCase();
    if (N === "INPUT" || N === "TEXTAREA" || we != null && we.isContentEditable) return;
    if (o.selection) {
      f(), ae.preventDefault(), ae.stopPropagation();
      return;
    }
    if (m()) {
      ae.preventDefault(), ae.stopPropagation();
      return;
    }
    h() && (u(), ae.preventDefault(), ae.stopPropagation());
  }
  function he(ae) {
    if (s.confirmDialog.visible) return !1;
    const K = ae.composedPath()[0];
    if (K !== document.body && K !== document.documentElement && !r.contains(K)) return !1;
    const k = ((K == null ? void 0 : K.tagName) || "").toUpperCase();
    return k === "INPUT" ? !uN.has(String(K.type || "text").toLowerCase()) : k !== "TEXTAREA" && k !== "SELECT" && !(K != null && K.isContentEditable);
  }
  function q(ae) {
    return ae.code !== "Space" || ae.ctrlKey || ae.metaKey || ae.altKey || n || !i || !s.timeline.visible ? !1 : he(ae);
  }
  function fe(ae) {
    q(ae) && (ae.preventDefault(), ae.stopPropagation(), ae.repeat || C());
  }
  function ce(ae) {
    q(ae) && (ae.preventDefault(), ae.stopPropagation());
  }
  function oe(ae) {
    if (z.modifiers(ae), !!x0(ae.code)) {
      if (!he(ae)) {
        E(ae.code);
        return;
      }
      ae.ctrlKey || ae.metaKey || (ae.preventDefault(), ae.stopPropagation(), a() && (z.press(ae.code, ae.timeStamp), ae.repeat || c(), $(() => {
      })));
    }
  }
  function U(ae) {
    z.modifiers(ae), ae.key === "Meta" && j(), E(ae.code) && (ae.preventDefault(), ae.stopPropagation());
  }
  function E(ae) {
    return z.release(ae) ? (z.held || w(), !0) : !1;
  }
  function j() {
    z.held && (z.releaseAll(), w());
  }
  function A() {
    document.hidden && j();
  }
  function H() {
    j();
  }
  function T(ae) {
    const K = !!(ae.ctrlKey || ae.metaKey), k = !!ae.altKey;
    t.marqueeModifier === K && t.altModifier === k || (t.marqueeModifier = K, t.altModifier = k, te(), X(t.pointerPos));
  }
  function B() {
    j(), t.marqueeModifier = !1, t.altModifier = !1, te(), X(t.pointerPos);
  }
  function pe(ae) {
    if (n || !ae.ctrlKey && !ae.metaKey) return;
    const K = String(ae.key || "").toLowerCase(), k = String(ae.code || "");
    if (K !== "z" && k !== "KeyZ") return;
    const re = ae.target, de = ((re == null ? void 0 : re.tagName) || "").toUpperCase();
    if (de === "INPUT" || de === "TEXTAREA" || re != null && re.isContentEditable) return;
    const { canUndo: _e, canRedo: we } = g();
    ae.shiftKey && !we || !ae.shiftKey && !_e || (_(ae.shiftKey ? 1 : -1), ae.preventDefault(), ae.stopPropagation());
  }
  return {
    connect(ae) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: m,
        endFrameKeyMove: w,
        getHistoryCapabilities: g,
        getSelected: h,
        restoreHistory: _,
        setFullscreenState: ee,
        startAnimation: $,
        syncFrameRollKnob: te,
        togglePlayback: C,
        updateCursor: X
      } = ae);
    },
    moveKeys: z,
    onEscClose: G,
    onDeleteKey: ne,
    onSpaceKey: fe,
    onSpaceKeyUp: ce,
    onMoveKeyDown: oe,
    onMoveKeyUp: U,
    onVisibilityChange: A,
    onContextMenu: H,
    onModifierKeyChange: T,
    onWindowBlur: B,
    onUndoRedoKey: pe
  };
}
const Fp = /* @__PURE__ */ new Map(), oi = dg({
  app: ir,
  api: pn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Mu,
    markImageFailed: o0,
    markImageLoading: r0,
    markImageReady: i0
  }
});
function Tp(e) {
  if (!Qt(e, "background") || !Qt(e, "external-sticker")) return null;
  const t = oi.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ti(t[0]) : null;
}
const fA = oi.assetSource, pA = oi.source, hA = oi.uiImage, mA = oi.invalidateUiImage, Dp = oi.loadPreferredExactLinkedImage;
async function gA(e, t, r = {}) {
  var zd, jd;
  await zg(e, { tolerateOperationFailure: !0 }), oi.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = IN(e, t);
  await Ed();
  const a = ua(e, "output_preset"), l = ua(e, "coverage"), c = ua(e, "bg_color"), d = ua(e, cN), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Dp(
      e,
      Ve,
      () => ut(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return FN(Ve);
  }, m = (Ve = 2048) => {
    const st = a == null ? void 0 : a.value;
    return ON(st) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : EN(st, Ve);
  }, w = e.__panoSceneStateV2 === !0, g = t === "stickers" && w, h = g && e.__panoStudio === !0, _ = h, ee = t === "cutout" || h, $ = (w ? Mm : km)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Rn(l == null ? void 0 : l.value),
    sharedUiSettings: TN(),
    active: Cm(e),
    fps: w ? Tp(e) : null
  });
  Hn(e).liveState = $, Hn(e).liveStateVersion = 0;
  let te = null;
  _ ? (te = $.camera && $.camera.visible !== !1 ? Am($.camera, 0) : null, $.shots = te ? [{ ...te, position: [...te.position] }] : [], $.active.selected_shot_id = null) : t === "cutout" && ($.shots = Array.isArray($.shots) ? $.shots.slice(0, 1) : [], $.shots.length || ($.active.selected_shot_id = null));
  const C = t === "cutout" ? (() => {
    var tr;
    const Ve = Array.isArray($.shots) ? $.shots : [], st = String(((tr = $ == null ? void 0 : $.active) == null ? void 0 : tr.selected_shot_id) || "");
    return Ve.find((ln) => String((ln == null ? void 0 : ln.id) || "") === st) || Ve[0] || null;
  })() : null, X = C ? M0(C, !1) : { width: 220, height: 132 }, z = n0(h ? "studio" : t), G = /* @__PURE__ */ mo({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (z.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (zd = z.spaceButtons) != null && zd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: z.spaceButtons, frame: z.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (z.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(z.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
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
      label: C ? "Loading preview" : "Add Frame to preview"
    }
  }), ne = { frame: /* @__PURE__ */ Fa(0), playing: /* @__PURE__ */ Fa(!1) }, he = document.createElement("div");
  document.body.appendChild(he);
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
  }, fe = ({ intent: Ve } = {}) => {
  }, ce = Yu(aN, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: z,
    paintSwatches: jl.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: mr(Ve.color, 1)
    })),
    uiState: G,
    playhead: ne,
    onClose: () => {
      zi();
    },
    onTimeline: (Ve) => Ts(Ve),
    onImageFileSelected: q,
    onImageFileCancelled: fe
  });
  let oe = null;
  try {
    oe = ce.mount(he);
  } catch (Ve) {
    try {
      ce.unmount();
    } catch {
    }
    throw he.remove(), Ve;
  }
  const U = he.querySelector(".pano-modal-overlay"), E = he.querySelector(".pano-modal"), j = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), A = E == null ? void 0 : E.querySelector("[data-stage-background]"), H = E == null ? void 0 : E.querySelector(".pano-stage-wrap"), T = ((jd = oe == null ? void 0 : oe.getPaintOverlayRefs) == null ? void 0 : jd.call(oe)) || {}, B = T.cursor || null, pe = T.sizePreview || null, ae = T.sizeSample || null;
  if (!U || !E || !j || !A || !H || !B || !pe || !ae)
    throw ce.unmount(), he.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const K = j.getContext("2d"), k = E.querySelector("[data-side]"), re = E.querySelector("[data-video-element]"), de = E.querySelector("[data-port-video-element]");
  rc(j, "editor.stage-overlay"), rc(A, "editor.stage-background"), Pf(re, "editor.video"), Pf(de, "editor.port-video");
  const _e = E.querySelector(".pano-floating-right"), we = E.querySelector(".pano-floating-top"), N = E.querySelector("[data-tool-rail]"), le = E.querySelector("[data-frame-rail]"), b = E.querySelector("[data-frame-roll-knob]"), y = E.querySelector("[data-paint-dock]"), I = E.querySelector(".pano-video-transport"), v = E.querySelector("[data-selection-menu]"), V = E.querySelector("[data-tooltip]"), L = E.querySelector("[data-camera-preview-host]"), J = E.querySelector("[data-camera-preview-canvas]");
  rc(J, "editor.camera-preview");
  const O = E.querySelector("[data-paint-color-row]"), F = E.querySelector("[data-paint-color-pop]"), x = E.querySelector("[data-paint-color-sv]"), R = E.querySelector("[data-paint-color-sv-cursor]"), Z = E.querySelector("[data-paint-hue-strip]"), me = E.querySelector("[data-paint-hue-handle]");
  H == null || H.removeAttribute("data-stage-ready"), H == null || H.setAttribute("data-stage-loading-kind", "boot"), j.style.opacity = "1", A.style.opacity = "0", i && (k == null || k.remove(), E.classList.add("pano-modal-readonly")), E.addEventListener("pointerdown", () => M.wake(), !0), E.addEventListener("pointerdown", (Ve) => {
    var st;
    Ve.target.closest("[data-frame-roll-knob]") || Pn(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((tr) => {
      tr.hidden = !0;
    }), se(!0), ee && ve.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (ve.cutoutAspectOpen = !1, ve.menuMode = "", ve.menuSize.measured = !1, An(), ut()), (st = G.frameRail) != null && st.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (G.frameRail.aspectOpen = !1)));
  });
  const ve = {
    mode: "pano",
    selectedId: y0(t, $),
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
    coverage: Rn($.coverage),
    historyController: QN($),
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
    paintEngine: Al(),
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
  t === "stickers" && (ve.selectedId = null, $.active.selected_sticker_id = null), ve.selectedIds = ve.selectedId ? [ve.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), p = rn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const P = rn({ label: "editor.port-still" });
  P.__panoFrameIdx = 0;
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
  }, M = ak({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, st) => Us(Ve, st),
    animating: () => Ye()
  }), W = ok({
    requestFrame: (Ve) => M.requestFrame(Ve),
    cancelFrame: (Ve) => M.cancelFrame(Ve),
    tasks: {
      seek: () => Oe.seek(Se.scrubFrame),
      timeline: () => Ks(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Mr(), ut({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => Xt()
    }
  }), ye = GS({
    canvas: A,
    onReady: () => {
      xt(), ut({ reason: ft.CONTEXT });
    },
    onFailed: () => ut(),
    onUpdate: () => ut({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (Ve) => ut({ localOnly: !0, reason: U2(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bt(), xt(), ut({ reason: ft.CONTEXT });
    }
  }), D = Number.parseFloat(
    getComputedStyle(E).getPropertyValue("--pano-float-radius")
  ) || 10, ie = (Ve) => {
    const st = String(Ve || "default");
    j.style.cursor !== st && (j.style.cursor = st);
  }, Ne = {
    timer: 0,
    target: null
  }, xe = {
    active: !1,
    depth: 0
  }, Pe = Qu({
    getView: () => ({ yaw: ve.viewYaw, pitch: ve.viewPitch, fov: ve.viewFov }),
    setView: (Ve) => {
      ve.viewYaw = Ht(Number(Ve.yaw || 0)), ve.viewPitch = Ie(Number(Ve.pitch || 0), -89.9, 89.9), ve.viewFov = Ie(Number(Ve.fov || ve.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = j.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || j.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || j.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, st;
      return {
        x: (Ve = $.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (st = $.ui_settings) != null && st.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => M.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ce,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: je,
    applyVideoTimelineFps: Ke,
    bindDrag: $e,
    cancelFrameCameraGesture: He,
    closePaintColorPop: se,
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
    migrateLegacyEmbeddedAssets: ci,
    onCanvasDragOver: Wr,
    onCanvasDrop: ui,
    onCanvasMouseMove: on,
    onCanvasPointerCancel: yn,
    onCanvasPointerDown: Ur,
    onCanvasPointerMove: kr,
    onCanvasPointerUp: cr,
    onCanvasWheel: _o,
    onContextMenu: wo,
    onDeleteKey: xo,
    onEscClose: ko,
    onFrameRollKnobDoubleClick: As,
    onFrameRollKnobPointerDown: Cs,
    onFrameRollKnobPointerMove: Mo,
    onFullscreenChange: Ot,
    onModifierKeyChange: Nn,
    onMoveKeyDown: Qn,
    onMoveKeyUp: Li,
    onRootChange: Vn,
    onRootClick: Is,
    onRootInput: Es,
    onRootPointerOut: Os,
    onRootPointerOver: Br,
    onSidePanelChange: Gl,
    onSidePanelClick: Yr,
    onSidePanelInput: Kl,
    onSpaceKey: Po,
    onSpaceKeyUp: Fs,
    onTimelineAction: Ts,
    onUndoRedoKey: No,
    onVisibilityChange: Ds,
    onWindowBlur: Ls,
    onWindowDragEnter: Rs,
    onWindowDragLeave: Vs,
    onWindowDragOver: $s,
    onWindowDrop: zs,
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
    syncFullscreenButton: Ri,
    syncGridToggleButton: Vi,
    syncLookAtFrameButtonState: $i,
    syncOutputPreviewToggleButton: js,
    syncPaintUi: Hs,
    syncPaintingLayerAsync: Gs,
    syncTimeline: Ks,
    syncUndoRedoButtons: Ws,
    tick: Us,
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
    backgroundCanvas: A,
    bgWidget: c,
    cameraV2: _,
    canvas: j,
    closeEditor: zi,
    comfyMedia: oi,
    coverageWidget: l,
    ctx: K,
    cutoutPreviewCanvas: J,
    cutoutPreviewHost: L,
    dragCue: xe,
    dragFrames: W,
    editor: ve,
    editorView: ye,
    floatingRightEl: _e,
    floatingTopEl: we,
    frameGateCssRadius: D,
    frameRailEl: le,
    frameRollKnobEl: b,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: te,
    loadPreferredExactLinkedImage: Dp,
    mediaAssetSource: fA,
    mediaSource: pA,
    mediaUiImage: hA,
    node: e,
    overlay: U,
    paintColorPop: F,
    paintColorRow: O,
    paintColorSv: x,
    paintColorSvCursor: R,
    paintCursorEl: B,
    paintDockEl: y,
    paintHueHandle: me,
    paintHueStrip: Z,
    paintSizePreviewEl: pe,
    paintSizePreviewSampleEl: ae,
    portStillCanvas: P,
    portVideoEl: de,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: Y,
    rasterImageAlphaCache: ge,
    rasterImageCache: Q,
    readOnly: n,
    resolveEditorOutputPresetWidth: m,
    root: E,
    runtime: S,
    sceneV2: g,
    scheduler: M,
    selectionMenu: v,
    setCanvasCursor: ie,
    shotEditor: ee,
    stageWrap: H,
    state: $,
    stateV2: w,
    stateWidget: d,
    stillCanvas: p,
    studio: h,
    timeline: Se,
    timelinePlayhead: ne,
    toolRailEl: N,
    tooltip: Ne,
    tooltipEl: V,
    type: t,
    uiState: G,
    videoEl: re,
    videoTimelineFps: Tp,
    videoTransportEl: I,
    viewController: Pe,
    vueModal: oe
  }, [
    XN,
    e2,
    t2,
    n2,
    r2,
    i2,
    o2,
    s2,
    a2,
    G2,
    K2,
    W2,
    Y2,
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
    dA
  ]);
  Ze(), Ue.observe(j), Vt();
  const an = () => Fe();
  n || (il(e).flushBeforeQueue = an), b == null || b.addEventListener("pointerdown", Cs), b == null || b.addEventListener("pointermove", Mo), b == null || b.addEventListener("pointerup", We), b == null || b.addEventListener("pointercancel", () => He()), b == null || b.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = ve.interaction) == null ? void 0 : Ve.source) === "knob" && He();
  }), b == null || b.addEventListener("dblclick", As), j.onpointerdown = Ur, j.onpointermove = kr, j.onpointerup = cr, j.onpointercancel = yn, j.onlostpointercapture = () => {
    He();
  }, j.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, j.oncontextmenu = (Ve) => {
    (Wt() || sn()) && Iw(Cn(), 2) && Ve.preventDefault();
  }, j.onmousemove = on, j.onpointerleave = () => {
    ve.interaction || qe({ x: -1e6, y: -1e6 });
  }, j.onmouseleave = () => {
    Xe(ve.pointerPos, !1), pt(ve.pointerPos), ve.mode === "frame" && ve.primaryTool === "cursor" && ut({ localOnly: !0, reason: ft.OVERLAY });
  }, j.onwheel = _o, j.ondragover = Wr, j.ondrop = ui, window.addEventListener("dragenter", Rs, !0), window.addEventListener("dragover", $s, !0), window.addEventListener("dragleave", Vs, !0), window.addEventListener("drop", zs, !0), k == null || k.addEventListener("click", Yr), k == null || k.addEventListener("input", Kl), k == null || k.addEventListener("change", Gl), Vi(), E.addEventListener("click", Is), E.addEventListener("input", Es), E.addEventListener("change", Vn), E.addEventListener("pointerup", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("pointercancel", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("pointerover", Br), E.addEventListener("pointerout", Os), E.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Pn();
  }), x && (x.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => _t(st.clientX, st.clientY));
  }), Z && (Z.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => yt(st.clientX));
  }), E.addEventListener("click", (Ve) => {
    var di;
    const st = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!st) return;
    const tr = st.getAttribute("data-action") === "confirm-accept", ln = (di = G.confirmDialog) == null ? void 0 : di.resolve;
    G.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(tr);
  }), document.addEventListener("fullscreenchange", Ot), Ri(), js();
  const nn = e.onConnectionsChange;
  let Dt = null, Gt = () => {
  };
  !n && t === "stickers" && (Gt = Vg(e, (Ve = "sync") => {
    Ve === "executed" && (mA(be, po), vt(), g && Ke()), ke(Ve);
  }, { editor: !0 }), Dt = function(...st) {
    typeof nn == "function" && nn.apply(this, st), vt(), ti(this, "connections");
  }, e.onConnectionsChange = Dt), n || Fp.set(String(e.id ?? "0"), () => Gs());
  let In = null;
  async function zi() {
    return In || (In = (async () => {
      var st, tr, ln, di, qr, Bs, Hd, Ys, Gd;
      Fp.delete(String(e.id ?? "0")), ht(), Ge(), n || Fe(), nt(), document.fullscreenElement === U && ((st = document.exitFullscreen) == null || st.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ot), Hn(e).liveState = null;
      const Ve = r_(e);
      return (Ve == null ? void 0 : Ve.flushBeforeQueue) === an && (Ve.flushBeforeQueue = null), (di = (ln = (tr = cg(e)) == null ? void 0 : tr.dom) == null ? void 0 : ln.requestDraw) == null || di.call(ln), (Bs = (qr = e.graph) == null ? void 0 : qr.setDirtyCanvas) == null || Bs.call(qr, !0, !0), (Gd = (Ys = (Hd = ir) == null ? void 0 : Hd.canvas) == null ? void 0 : Ys.setDirty) == null || Gd.call(Ys, !0, !0), Pn(), W.cancel(), Zt(), Ae(), Re(), ye.dispose(), er(!1), window.removeEventListener("keydown", ko, !0), window.removeEventListener("keydown", xo, !0), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keyup", Fs, !0), window.removeEventListener("keydown", Qn, !0), window.removeEventListener("keyup", Li, !0), document.removeEventListener("visibilitychange", Ds), window.removeEventListener("contextmenu", wo, !0), window.removeEventListener("keydown", Nn, !0), window.removeEventListener("keyup", Nn, !0), window.removeEventListener("blur", Ls), window.removeEventListener("keydown", No, !0), window.removeEventListener("dragenter", Rs, !0), window.removeEventListener("dragover", $s, !0), window.removeEventListener("dragleave", Vs, !0), window.removeEventListener("drop", zs, !0), !n && t === "stickers" && (e.onConnectionsChange === Dt && (e.onConnectionsChange = nn), Gt()), ce.unmount(), he.remove(), ct(), In = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), In = null, !1)), In);
  }
  window.addEventListener("keydown", ko, !0), window.addEventListener("keydown", xo, !0), window.addEventListener("keydown", Po, !0), window.addEventListener("keyup", Fs, !0), window.addEventListener("keydown", Qn, !0), window.addEventListener("keyup", Li, !0), document.addEventListener("visibilitychange", Ds), window.addEventListener("contextmenu", wo, !0), window.addEventListener("keydown", Nn, !0), window.addEventListener("keyup", Nn, !0), window.addEventListener("blur", Ls), window.addEventListener("keydown", No, !0), U.addEventListener("pointerdown", (Ve) => {
    Ve.target === U && zi();
  });
  function En(Ve, st, { rollbackState: tr = !1 } = {}) {
    let ln = "";
    try {
      tr && (ln = JSON.stringify($)), st();
    } catch (di) {
      if (ln)
        try {
          const qr = JSON.parse(ln);
          Object.keys($).forEach((Bs) => delete $[Bs]), Object.assign($, qr), n || Fe();
        } catch (qr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, qr);
        }
      G.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, di);
    }
  }
  En("view", Je), En("cutout-focus", je), !n && t === "stickers" && En("external-sticker-sync", () => ke("open"), { rollbackState: !0 }), ci().catch((Ve) => {
    G.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), En("history", Ee), En("undo-redo", Ws), En("paint-ui", Hs), En("side-panel", Xt), En("look-at-frame", $i), En("video-source", vt), En("canvas-size", xt), En("cursor", () => pt(ve.pointerPos)), ut(), et();
}
ir.registerExtension(zw({
  app: ir,
  openEditor: gA,
  attachStickers: rk,
  attachCutout: ik,
  attachPreview: nk,
  restoreOutput: Gx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: pN
}));
