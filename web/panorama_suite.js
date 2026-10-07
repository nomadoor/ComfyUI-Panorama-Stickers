import * as ba from "../../scripts/app.js";
import { app as lr } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Tt = {}, oo = [], kr = () => {
}, zp = () => !1, xl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), kl = (e) => e.startsWith("onUpdate:"), yn = Object.assign, Vu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, V0 = Object.prototype.hasOwnProperty, xt = (e, t) => V0.call(e, t), it = Array.isArray, so = (e) => Ns(e) === "[object Map]", jp = (e) => Ns(e) === "[object Set]", Xd = (e) => Ns(e) === "[object Date]", ct = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Nr = (e) => typeof e == "symbol", Ot = (e) => e !== null && typeof e == "object", Hp = (e) => (Ot(e) || ct(e)) && ct(e.then) && ct(e.catch), Gp = Object.prototype.toString, Ns = (e) => Gp.call(e), $0 = (e) => Ns(e).slice(8, -1), Kp = (e) => Ns(e) === "[object Object]", $u = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zo = /* @__PURE__ */ Ru(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ml = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, z0 = /-\w/g, Mn = Ml(
  (e) => e.replace(z0, (t) => t.slice(1).toUpperCase())
), j0 = /\B([A-Z])/g, Ri = Ml(
  (e) => e.replace(j0, "-$1").toLowerCase()
), Pl = Ml((e) => e.charAt(0).toUpperCase() + e.slice(1)), ec = Ml(
  (e) => e ? `on${Pl(e)}` : ""
), _r = (e, t) => !Object.is(e, t), va = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Wp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, zu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Jd;
const Nl = () => Jd || (Jd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? W0(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ot(e))
    return e;
}
const H0 = /;(?![^(]*\))/g, G0 = /:([^]+)/, K0 = /\/\*[^]*?\*\//g;
function W0(e) {
  const t = {};
  return e.replace(K0, "").split(H0).forEach((r) => {
    if (r) {
      const n = r.split(G0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Qt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (Ot(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const U0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", B0 = /* @__PURE__ */ Ru(U0);
function Up(e) {
  return !!e || e === "";
}
function Y0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = ju(e[n], t[n]);
  return r;
}
function ju(e, t) {
  if (e === t) return !0;
  let r = Xd(e), n = Xd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Nr(e), n = Nr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? Y0(e, t) : !1;
  if (r = Ot(e), n = Ot(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !ju(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Bp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ot(e) && (e.toString === Gp || !ct(e.toString)) ? Bp(e) ? rt(e.value) : JSON.stringify(e, Yp, 2) : String(e), Yp = (e, t) => Bp(t) ? Yp(e, t.value) : so(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[tc(n, o) + " =>"] = i, r),
    {}
  )
} : jp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => tc(r))
} : Nr(t) ? tc(t) : Ot(t) && !it(t) && !Kp(t) ? String(t) : t, tc = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let On;
class q0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = On, !t && On && (this.index = (On.scopes || (On.scopes = [])).push(
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
      const r = On;
      try {
        return On = this, t();
      } finally {
        On = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = On, On = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (On = this.prevScope, this.prevScope = void 0);
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
function X0() {
  return On;
}
let Rt;
const nc = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, nc.has(this) && (nc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zd(this), Zp(this);
    const t = Rt, r = cr;
    Rt = this, cr = !0;
    try {
      return this.fn();
    } finally {
      Qp(this), Rt = t, cr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ku(t);
      this.deps = this.depsTail = void 0, Zd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? nc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gc(this) && this.run();
  }
  get dirty() {
    return Gc(this);
  }
}
let Xp = 0, Qo, es;
function Jp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = es, es = e;
    return;
  }
  e.next = Qo, Qo = e;
}
function Hu() {
  Xp++;
}
function Gu() {
  if (--Xp > 0)
    return;
  if (es) {
    let t = es;
    for (es = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Qo; ) {
    let t = Qo;
    for (Qo = void 0; t; ) {
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
function Zp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Ku(n), J0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Gc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (eh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function eh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cs) || (e.globalVersion = cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Rt, n = cr;
  Rt = e, cr = !0;
  try {
    Zp(e);
    const i = e.fn(e._value);
    (t.version === 0 || _r(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Rt = r, cr = n, Qp(e), e.flags &= -3;
  }
}
function Ku(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Ku(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function J0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let cr = !0;
const th = [];
function Hr() {
  th.push(cr), cr = !1;
}
function Gr() {
  const e = th.pop();
  cr = e === void 0 ? !0 : e;
}
function Zd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Rt;
    Rt = void 0;
    try {
      t();
    } finally {
      Rt = r;
    }
  }
}
let cs = 0;
class Z0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Rt || !cr || Rt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Rt)
      r = this.activeLink = new Z0(Rt, this), Rt.deps ? (r.prevDep = Rt.depsTail, Rt.depsTail.nextDep = r, Rt.depsTail = r) : Rt.deps = Rt.depsTail = r, nh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Rt.depsTail, r.nextDep = void 0, Rt.depsTail.nextDep = r, Rt.depsTail = r, Rt.deps === r && (Rt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cs++, this.notify(t);
  }
  notify(t) {
    Hu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Gu();
    }
  }
}
function nh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        nh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Kc = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ Symbol(
  ""
), Wc = /* @__PURE__ */ Symbol(
  ""
), us = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (cr && Rt) {
    let n = Kc.get(e);
    n || Kc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Wu()), i.map = n, i.key = r), i.track();
  }
}
function Lr(e, t, r, n, i, o) {
  const s = Kc.get(e);
  if (!s) {
    cs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Hu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && $u(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === us || !Nr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(us)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Ni)), so(e) && a(s.get(Wc)));
          break;
        case "delete":
          l || (a(s.get(Ni)), so(e) && a(s.get(Wc)));
          break;
        case "set":
          so(e) && a(s.get(Ni));
          break;
      }
  }
  Gu();
}
function Bi(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (fn(t, "iterate", us), /* @__PURE__ */ Xn(e) ? t : t.map(fr));
}
function Al(e) {
  return fn(e = /* @__PURE__ */ wt(e), "iterate", us), e;
}
function yr(e, t) {
  return /* @__PURE__ */ Kr(e) ? ho(/* @__PURE__ */ Ai(e) ? fr(t) : t) : fr(t);
}
const Q0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return rc(this, Symbol.iterator, (e) => yr(this, e));
  },
  concat(...e) {
    return Bi(this).concat(
      ...e.map((t) => it(t) ? Bi(t) : t)
    );
  },
  entries() {
    return rc(this, "entries", (e) => (e[1] = yr(this, e[1]), e));
  },
  every(e, t) {
    return Ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ir(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => yr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ir(
      this,
      "find",
      e,
      t,
      (r) => yr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ir(
      this,
      "findLast",
      e,
      t,
      (r) => yr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ic(this, "includes", e);
  },
  indexOf(...e) {
    return ic(this, "indexOf", e);
  },
  join(e) {
    return Bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ic(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return To(this, "pop");
  },
  push(...e) {
    return To(this, "push", e);
  },
  reduce(e, ...t) {
    return Qd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qd(this, "reduceRight", e, t);
  },
  shift() {
    return To(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return To(this, "splice", e);
  },
  toReversed() {
    return Bi(this).toReversed();
  },
  toSorted(e) {
    return Bi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bi(this).toSpliced(...e);
  },
  unshift(...e) {
    return To(this, "unshift", e);
  },
  values() {
    return rc(this, "values", (e) => yr(this, e));
  }
};
function rc(e, t, r) {
  const n = Al(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Xn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ey = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Al(e), a = s !== e && !/* @__PURE__ */ Xn(e), l = s[t];
  if (l !== ey[t]) {
    const u = l.apply(e, o);
    return a ? fr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, yr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Qd(e, t, r, n) {
  const i = Al(e), o = i !== e && !/* @__PURE__ */ Xn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = yr(e, c)), r.call(this, c, yr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? yr(e, l) : l;
}
function ic(e, t, r) {
  const n = /* @__PURE__ */ wt(e);
  fn(n, "iterate", us);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Yu(r[0]) ? (r[0] = /* @__PURE__ */ wt(r[0]), n[t](...r)) : i;
}
function To(e, t, r = []) {
  Hr(), Hu();
  const n = (/* @__PURE__ */ wt(e))[t].apply(e, r);
  return Gu(), Gr(), n;
}
const ty = /* @__PURE__ */ Ru("__proto__,__v_isRef,__isVue"), rh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nr)
);
function ny(e) {
  Nr(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class ih {
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
      return n === (i ? o ? fy : lh : o ? ah : sh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = Q0[r]))
        return l;
      if (r === "hasOwnProperty")
        return ny;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((Nr(r) ? rh.has(r) : ty(r)) || (i || fn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ gn(a)) {
      const l = s && $u(r) ? a : a.value;
      return i && Ot(l) ? /* @__PURE__ */ Bc(l) : l;
    }
    return Ot(a) ? i ? /* @__PURE__ */ Bc(a) : /* @__PURE__ */ _o(a) : a;
  }
}
class oh extends ih {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && $u(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Xn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ wt(o), n = /* @__PURE__ */ wt(n)), !s && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ wt(i) && (a ? _r(n, o) && Lr(t, "set", r, n) : Lr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Lr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Nr(r) || !rh.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      it(t) ? "length" : Ni
    ), Reflect.ownKeys(t);
  }
}
class ry extends ih {
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
const iy = /* @__PURE__ */ new oh(), oy = /* @__PURE__ */ new ry(), sy = /* @__PURE__ */ new oh(!0);
const Uc = (e) => e, ta = (e) => Reflect.getPrototypeOf(e);
function ay(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ wt(i), s = so(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Uc : t ? ho : fr;
    return !t && fn(
      o,
      "iterate",
      l ? Wc : Ni
    ), yn(
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
function na(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ly(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      e || (_r(i, a) && fn(s, "get", i), fn(s, "get", a));
      const { has: l } = ta(s), c = t ? Uc : e ? ho : fr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ wt(i), "iterate", Ni), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ wt(o), a = /* @__PURE__ */ wt(i);
      return e || (_r(i, a) && fn(s, "has", i), fn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ wt(a), c = t ? Uc : e ? ho : fr;
      return !e && fn(l, "iterate", Ni), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return yn(
    r,
    e ? {
      add: na("add"),
      set: na("set"),
      delete: na("delete"),
      clear: na("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ wt(this), s = ta(o), a = /* @__PURE__ */ wt(i), l = !t && !/* @__PURE__ */ Xn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || _r(i, l) && s.has.call(o, i) || _r(a, l) && s.has.call(o, a) || (o.add(l), Lr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Xn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ wt(o));
        const s = /* @__PURE__ */ wt(this), { has: a, get: l } = ta(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ wt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? _r(o, d) && Lr(s, "set", i, o) : Lr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ wt(this), { has: s, get: a } = ta(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ wt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Lr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ wt(this), o = i.size !== 0, s = i.clear();
        return o && Lr(
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
    r[i] = ay(i, e, t);
  }), r;
}
function Uu(e, t) {
  const r = ly(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const cy = {
  get: /* @__PURE__ */ Uu(!1, !1)
}, uy = {
  get: /* @__PURE__ */ Uu(!1, !0)
}, dy = {
  get: /* @__PURE__ */ Uu(!0, !1)
};
const sh = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap(), fy = /* @__PURE__ */ new WeakMap();
function py(e) {
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
function hy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : py($0(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return /* @__PURE__ */ Kr(e) ? e : Bu(
    e,
    !1,
    iy,
    cy,
    sh
  );
}
// @__NO_SIDE_EFFECTS__
function my(e) {
  return Bu(
    e,
    !1,
    sy,
    uy,
    ah
  );
}
// @__NO_SIDE_EFFECTS__
function Bc(e) {
  return Bu(
    e,
    !0,
    oy,
    dy,
    lh
  );
}
function Bu(e, t, r, n, i) {
  if (!Ot(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = hy(e);
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
function Ai(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ai(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function gy(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && Wp(e, "__v_skip", !0), e;
}
const fr = (e) => Ot(e) ? /* @__PURE__ */ _o(e) : e, ho = (e) => Ot(e) ? /* @__PURE__ */ Bc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return ch(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return ch(e, !0);
}
function ch(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new yy(e, t);
}
class yy {
  constructor(t, r) {
    this.dep = new Wu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ wt(t), this._value = r ? t : fr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ wt(t), _r(t, r) && (this._rawValue = t, this._value = n ? t : fr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const by = {
  get: (e, t, r) => t === "__v_raw" ? e : nt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function uh(e) {
  return /* @__PURE__ */ Ai(e) ? e : new Proxy(e, by);
}
class vy {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Wu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return Jp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return eh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Sy(e, t, r = !1) {
  let n, i;
  return ct(e) ? n = e : (n = e.get, i = e.set), new vy(n, i, r);
}
const ra = {}, za = /* @__PURE__ */ new WeakMap();
let xi;
function _y(e, t = !1, r = xi) {
  if (r) {
    let n = za.get(r);
    n || za.set(r, n = []), n.push(e);
  }
}
function wy(e, t, r = Tt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (oe) => i ? oe : /* @__PURE__ */ Xn(oe) || i === !1 || i === 0 ? Rr(oe, 1) : Rr(oe);
  let d, u, f, p, k = !1, h = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, k = /* @__PURE__ */ Xn(e)) : /* @__PURE__ */ Ai(e) ? (u = () => c(e), k = !0) : it(e) ? (h = !0, k = e.some((oe) => /* @__PURE__ */ Ai(oe) || /* @__PURE__ */ Xn(oe)), u = () => e.map((oe) => {
    if (/* @__PURE__ */ gn(oe))
      return oe.value;
    if (/* @__PURE__ */ Ai(oe))
      return c(oe);
    if (ct(oe))
      return l ? l(oe, 2) : oe();
  })) : ct(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const oe = xi;
    xi = d;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      xi = oe;
    }
  } : u = kr, t && i) {
    const oe = u, I = i === !0 ? 1 / 0 : i;
    u = () => Rr(oe(), I);
  }
  const m = X0(), b = () => {
    d.stop(), m && m.active && Vu(m.effects, d);
  };
  if (o && t) {
    const oe = t;
    t = (...I) => {
      oe(...I), b();
    };
  }
  let G = h ? new Array(e.length).fill(ra) : ra;
  const L = (oe) => {
    if (!(!(d.flags & 1) || !d.dirty && !oe))
      if (t) {
        const I = d.run();
        if (i || k || (h ? I.some((J, T) => _r(J, G[T])) : _r(I, G))) {
          f && f();
          const J = xi;
          xi = d;
          try {
            const T = [
              I,
              // pass undefined as the old value when it's changed for the first time
              G === ra ? void 0 : h && G[0] === ra ? [] : G,
              p
            ];
            G = I, l ? l(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            xi = J;
          }
        }
      } else
        d.run();
  };
  return a && a(L), d = new qp(u), d.scheduler = s ? () => s(L, !1) : L, p = (oe) => _y(oe, !1, d), f = d.onStop = () => {
    const oe = za.get(d);
    if (oe) {
      if (l)
        l(oe, 4);
      else
        for (const I of oe) I();
      za.delete(d);
    }
  }, t ? n ? L(!0) : G = d.run() : s ? s(L.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Rr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ot(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Rr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Rr(e[n], t, r);
  else if (jp(e) || so(e))
    e.forEach((n) => {
      Rr(n, t, r);
    });
  else if (Kp(e)) {
    for (const n in e)
      Rr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function As(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Cl(i, t, r);
  }
}
function Ar(e, t, r, n) {
  if (ct(e)) {
    const i = As(e, t, r, n);
    return i && Hp(i) && i.catch((o) => {
      Cl(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ar(e[o], t, r, n));
    return i;
  }
}
function Cl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Tt;
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
      Hr(), As(o, null, 10, [
        e,
        l,
        c
      ]), Gr();
      return;
    }
  }
  xy(e, r, i, n, s);
}
function xy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const wn = [];
let gr = -1;
const ao = [];
let ei = null, Xi = 0;
const dh = /* @__PURE__ */ Promise.resolve();
let ja = null;
function Il(e) {
  const t = ja || dh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ky(e) {
  let t = gr + 1, r = wn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = wn[n], o = ds(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function qu(e) {
  if (!(e.flags & 1)) {
    const t = ds(e), r = wn[wn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ds(r) ? wn.push(e) : wn.splice(ky(t), 0, e), e.flags |= 1, fh();
  }
}
function fh() {
  ja || (ja = dh.then(hh));
}
function My(e) {
  it(e) ? ao.push(...e) : ei && e.id === -1 ? ei.splice(Xi + 1, 0, e) : e.flags & 1 || (ao.push(e), e.flags |= 1), fh();
}
function ef(e, t, r = gr + 1) {
  for (; r < wn.length; r++) {
    const n = wn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      wn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ph(e) {
  if (ao.length) {
    const t = [...new Set(ao)].sort(
      (r, n) => ds(r) - ds(n)
    );
    if (ao.length = 0, ei) {
      ei.push(...t);
      return;
    }
    for (ei = t, Xi = 0; Xi < ei.length; Xi++) {
      const r = ei[Xi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ei = null, Xi = 0;
  }
}
const ds = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hh(e) {
  try {
    for (gr = 0; gr < wn.length; gr++) {
      const t = wn[gr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), As(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; gr < wn.length; gr++) {
      const t = wn[gr];
      t && (t.flags &= -2);
    }
    gr = -1, wn.length = 0, ph(), ja = null, (wn.length || ao.length) && hh();
  }
}
let zn = null, mh = null;
function Ha(e) {
  const t = zn;
  return zn = e, mh = e && e.type.__scopeId || null, t;
}
function gh(e, t = zn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && pf(-1);
    const o = Ha(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ha(o), n._d && pf(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (zn === null)
    return e;
  const r = Dl(zn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Tt] = t[i];
    o && (ct(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Rr(s), n.push({
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
function yi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (Hr(), Ar(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Gr());
  }
}
function Py(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function Sa(e, t, r = !1) {
  const n = kb();
  if (n || lo) {
    let i = lo ? lo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ct(t) ? t.call(n && n.proxy) : t;
  }
}
const Ny = /* @__PURE__ */ Symbol.for("v-scx"), Ay = () => Sa(Ny);
function Ci(e, t, r) {
  return yh(e, t, r);
}
function yh(e, t, r = Tt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ps) {
    if (o === "sync") {
      const p = Ay();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = kr, p.resume = kr, p.pause = kr, p;
    }
  }
  const d = pn;
  a.call = (p, k, h) => Ar(p, d, k, h);
  let u = !1;
  o === "post" ? a.scheduler = (p) => {
    En(p, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (p, k) => {
    k ? p() : qu(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = wy(e, t, a);
  return ps && (c ? c.push(f) : l && f()), f;
}
function Cy(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? bh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  ct(t) ? o = t : (o = t.handler, r = t);
  const s = Is(this), a = yh(i, o.bind(n), r);
  return s(), a;
}
function bh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Iy = /* @__PURE__ */ Symbol("_vte"), Ey = (e) => e.__isTeleport, Oy = /* @__PURE__ */ Symbol("_leaveCb");
function Xu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function vh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function tf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function ts(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (h, m) => ts(
        h,
        t && (it(t) ? t[m] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (ns(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ts(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Dl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Tt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ wt(u), p = u === Tt ? zp : (h) => tf(d, h) ? !1 : xt(f, h), k = (h, m) => !(m && tf(d, m));
  if (c != null && c !== l) {
    if (nf(t), Qt(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const h = t;
      k(c, h.k) && (c.value = null), h.k && (d[h.k] = null);
    }
  }
  if (ct(l))
    As(l, a, 12, [s, d]);
  else {
    const h = Qt(l), m = /* @__PURE__ */ gn(l);
    if (h || m) {
      const b = () => {
        if (e.f) {
          const G = h ? p(l) ? u[l] : d[l] : k() || !e.k ? l.value : d[e.k];
          if (i)
            it(G) && Vu(G, o);
          else if (it(G))
            G.includes(o) || G.push(o);
          else if (h)
            d[l] = [o], p(l) && (u[l] = d[l]);
          else {
            const L = [o];
            k(l, e.k) && (l.value = L), e.k && (d[e.k] = L);
          }
        } else h ? (d[l] = s, p(l) && (u[l] = s)) : m && (k(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const G = () => {
          b(), Ga.delete(e);
        };
        G.id = -1, Ga.set(e, G), En(G, r);
      } else
        nf(e), b();
    }
  }
}
function nf(e) {
  const t = Ga.get(e);
  t && (t.flags |= 8, Ga.delete(e));
}
Nl().requestIdleCallback;
Nl().cancelIdleCallback;
const ns = (e) => !!e.type.__asyncLoader, Sh = (e) => e.type.__isKeepAlive;
function Fy(e, t) {
  _h(e, "a", t);
}
function Ty(e, t) {
  _h(e, "da", t);
}
function _h(e, t, r = pn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (El(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Sh(i.parent.vnode) && Dy(n, t, r, i), i = i.parent;
  }
}
function Dy(e, t, r, n) {
  const i = El(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  wh(() => {
    Vu(n[t], i);
  }, r);
}
function El(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Hr();
      const a = Is(r), l = Ar(t, r, e, s);
      return a(), Gr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Ur = (e) => (t, r = pn) => {
  (!ps || e === "sp") && El(e, (...n) => t(...n), r);
}, Ly = Ur("bm"), Ol = Ur("m"), Ry = Ur(
  "bu"
), Vy = Ur("u"), Cs = Ur(
  "bum"
), wh = Ur("um"), $y = Ur(
  "sp"
), zy = Ur("rtg"), jy = Ur("rtc");
function Hy(e, t = pn) {
  El("ec", e, t);
}
const Gy = "components", xh = /* @__PURE__ */ Symbol.for("v-ndc");
function Ky(e) {
  return Qt(e) ? Wy(Gy, e, !1) || e : e || xh;
}
function Wy(e, t, r = !0, n = !1) {
  const i = zn || pn;
  if (i) {
    const o = i.type;
    {
      const a = Cb(
        o,
        !1
      );
      if (a && (a === t || a === Mn(t) || a === Pl(Mn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      rf(i[e] || o[e], t) || // global registration
      rf(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function rf(e, t) {
  return e && (e[t] || e[Mn(t)] || e[Pl(Mn(t))]);
}
function kt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ai(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Xn(e), c = /* @__PURE__ */ Kr(e), e = Al(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ho(fr(e[d])) : fr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ot(e))
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
const Yc = (e) => e ? Kh(e) ? Dl(e) : Yc(e.parent) : null, rs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yc(e.parent),
    $root: (e) => Yc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Mh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Il.bind(e.proxy)),
    $watch: (e) => Cy.bind(e)
  })
), oc = (e, t) => e !== Tt && !e.__isScriptSetup && xt(e, t), Uy = {
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
        if (oc(n, t))
          return s[t] = 1, n[t];
        if (i !== Tt && xt(i, t))
          return s[t] = 2, i[t];
        if (xt(o, t))
          return s[t] = 3, o[t];
        if (r !== Tt && xt(r, t))
          return s[t] = 4, r[t];
        qc && (s[t] = 0);
      }
    }
    const c = rs[t];
    let d, u;
    if (c)
      return t === "$attrs" && fn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Tt && xt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, xt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return oc(i, t) ? (i[t] = r, !0) : n !== Tt && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Tt && a[0] !== "$" && xt(e, a) || oc(t, a) || xt(o, a) || xt(n, a) || xt(rs, a) || xt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function of(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let qc = !0;
function By(e) {
  const t = Mh(e), r = e.proxy, n = e.ctx;
  qc = !1, t.beforeCreate && sf(t.beforeCreate, e, "bc");
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
    beforeUpdate: p,
    updated: k,
    activated: h,
    deactivated: m,
    beforeDestroy: b,
    beforeUnmount: G,
    destroyed: L,
    unmounted: oe,
    render: I,
    renderTracked: J,
    renderTriggered: T,
    errorCaptured: B,
    serverPrefetch: ve,
    // public API
    expose: _e,
    inheritAttrs: he,
    // assets
    components: ye,
    directives: de,
    filters: we
  } = t;
  if (c && Yy(c, n, null), s)
    for (const ie in s) {
      const te = s[ie];
      ct(te) && (n[ie] = te.bind(r));
    }
  if (i) {
    const ie = i.call(r, r);
    Ot(ie) && (e.data = /* @__PURE__ */ _o(ie));
  }
  if (qc = !0, o)
    for (const ie in o) {
      const te = o[ie], x = ct(te) ? te.bind(r, r) : ct(te.get) ? te.get.bind(r, r) : kr, v = !ct(te) && ct(te.set) ? te.set.bind(r) : kr, w = dt({
        get: x,
        set: v
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => w.value,
        set: (Z) => w.value = Z
      });
    }
  if (a)
    for (const ie in a)
      kh(a[ie], n, r, ie);
  if (l) {
    const ie = ct(l) ? l.call(r) : l;
    Reflect.ownKeys(ie).forEach((te) => {
      Py(te, ie[te]);
    });
  }
  d && sf(d, e, "c");
  function V(ie, te) {
    it(te) ? te.forEach((x) => ie(x.bind(r))) : te && ie(te.bind(r));
  }
  if (V(Ly, u), V(Ol, f), V(Ry, p), V(Vy, k), V(Fy, h), V(Ty, m), V(Hy, B), V(jy, J), V(zy, T), V(Cs, G), V(wh, oe), V($y, ve), it(_e))
    if (_e.length) {
      const ie = e.exposed || (e.exposed = {});
      _e.forEach((te) => {
        Object.defineProperty(ie, te, {
          get: () => r[te],
          set: (x) => r[te] = x,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === kr && (e.render = I), he != null && (e.inheritAttrs = he), ye && (e.components = ye), de && (e.directives = de), ve && vh(e);
}
function Yy(e, t, r = kr) {
  it(e) && (e = Xc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ot(i) ? "default" in i ? o = Sa(
      i.from || n,
      i.default,
      !0
    ) : o = Sa(i.from || n) : o = Sa(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function sf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function kh(e, t, r, n) {
  let i = n.includes(".") ? bh(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    ct(o) && Ci(i, o);
  } else if (ct(e))
    Ci(i, e.bind(r));
  else if (Ot(e))
    if (it(e))
      e.forEach((o) => kh(o, t, r, n));
    else {
      const o = ct(e.handler) ? e.handler.bind(r) : t[e.handler];
      ct(o) && Ci(i, o, e);
    }
}
function Mh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ka(l, c, s, !0)
  ), Ka(l, t, s)), Ot(t) && o.set(t, l), l;
}
function Ka(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ka(e, o, r, !0), i && i.forEach(
    (s) => Ka(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = qy[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const qy = {
  data: af,
  props: lf,
  emits: lf,
  // objects
  methods: Ho,
  computed: Ho,
  // lifecycle
  beforeCreate: Sn,
  created: Sn,
  beforeMount: Sn,
  mounted: Sn,
  beforeUpdate: Sn,
  updated: Sn,
  beforeDestroy: Sn,
  beforeUnmount: Sn,
  destroyed: Sn,
  unmounted: Sn,
  activated: Sn,
  deactivated: Sn,
  errorCaptured: Sn,
  serverPrefetch: Sn,
  // assets
  components: Ho,
  directives: Ho,
  // watch
  watch: Jy,
  // provide / inject
  provide: af,
  inject: Xy
};
function af(e, t) {
  return t ? e ? function() {
    return yn(
      ct(e) ? e.call(this, this) : e,
      ct(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xy(e, t) {
  return Ho(Xc(e), Xc(t));
}
function Xc(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Sn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ho(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function lf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    of(e),
    of(t ?? {})
  ) : t;
}
function Jy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function Ph() {
  return {
    app: null,
    config: {
      isNativeTag: zp,
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
let Zy = 0;
function Qy(e, t) {
  return function(n, i = null) {
    ct(n) || (n = yn({}, n)), i != null && !Ot(i) && (i = null);
    const o = Ph(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Zy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Eb,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && ct(d.install) ? (s.add(d), d.install(c, ...u)) : ct(d) && (s.add(d), d(c, ...u))), c;
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
          const p = c._ceVNode || Be(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), l = !0, c._container = d, d.__vue_app__ = c, Dl(p.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Ar(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = lo;
        lo = c;
        try {
          return d();
        } finally {
          lo = u;
        }
      }
    };
    return c;
  };
}
let lo = null;
const eb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mn(t)}Modifiers`] || e[`${Ri(t)}Modifiers`];
function tb(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Tt;
  let i = r;
  const o = t.startsWith("update:"), s = o && eb(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(zu)));
  let a, l = n[a = ec(t)] || // also try camelCase event handler (#2249)
  n[a = ec(Mn(t))];
  !l && o && (l = n[a = ec(Ri(t))]), l && Ar(
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
    e.emitted[a] = !0, Ar(
      c,
      e,
      6,
      i
    );
  }
}
const nb = /* @__PURE__ */ new WeakMap();
function Nh(e, t, r = !1) {
  const n = r ? nb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!ct(e)) {
    const l = (c) => {
      const d = Nh(c, t, !0);
      d && (a = !0, yn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ot(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : yn(s, o), Ot(e) && n.set(e, s), s);
}
function Fl(e, t) {
  return !e || !xl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, Ri(t)) || xt(e, t));
}
function cf(e) {
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
    setupState: p,
    ctx: k,
    inheritAttrs: h
  } = e, m = Ha(e);
  let b, G;
  try {
    if (r.shapeFlag & 4) {
      const oe = i || n, I = oe;
      b = br(
        c.call(
          I,
          oe,
          d,
          u,
          p,
          f,
          k
        )
      ), G = a;
    } else {
      const oe = t;
      b = br(
        oe.length > 1 ? oe(
          u,
          { attrs: a, slots: s, emit: l }
        ) : oe(
          u,
          null
        )
      ), G = t.props ? a : rb(a);
    }
  } catch (oe) {
    is.length = 0, Cl(oe, e, 1), b = Be(oi);
  }
  let L = b;
  if (G && h !== !1) {
    const oe = Object.keys(G), { shapeFlag: I } = L;
    oe.length && I & 7 && (o && oe.some(kl) && (G = ib(
      G,
      o
    )), L = mo(L, G, !1, !0));
  }
  return r.dirs && (L = mo(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(r.dirs) : r.dirs), r.transition && Xu(L, r.transition), b = L, Ha(m), b;
}
const rb = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || xl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ib = (e, t) => {
  const r = {};
  for (const n in e)
    (!kl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ob(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? uf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Ah(s, n, f) && !Fl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? uf(n, s, c) : !0 : !!s;
  return !1;
}
function uf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Ah(t, e, o) && !Fl(r, o))
      return !0;
  }
  return !1;
}
function Ah(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ot(n) && Ot(i) ? !ju(n, i) : n !== i;
}
function sb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Ch = {}, Ih = () => Object.create(Ch), Eh = (e) => Object.getPrototypeOf(e) === Ch;
function ab(e, t, r, n = !1) {
  const i = {}, o = Ih();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ my(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function lb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ wt(i), [l] = e.propsOptions;
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
        if (Fl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (xt(o, f))
            p !== o[f] && (o[f] = p, c = !0);
          else {
            const k = Mn(f);
            i[k] = Jc(
              l,
              a,
              k,
              p,
              e,
              !1
            );
          }
        else
          p !== o[f] && (o[f] = p, c = !0);
      }
    }
  } else {
    Oh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !xt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ri(u)) === u || !xt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Jc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !xt(t, u)) && (delete o[u], c = !0);
  }
  c && Lr(e.attrs, "set", "");
}
function Oh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Zo(l))
        continue;
      const c = t[l];
      let d;
      i && xt(i, d = Mn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Fl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ wt(r), c = a || Tt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Jc(
        i,
        l,
        u,
        c[u],
        e,
        !xt(c, u)
      );
    }
  }
  return s;
}
function Jc(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = xt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ct(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Is(i);
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
    ] && (n === "" || n === Ri(r)) && (n = !0));
  }
  return n;
}
const cb = /* @__PURE__ */ new WeakMap();
function Fh(e, t, r = !1) {
  const n = r ? cb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!ct(e)) {
    const d = (u) => {
      l = !0;
      const [f, p] = Fh(u, t, !0);
      yn(s, f), p && a.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ot(e) && n.set(e, oo), oo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Mn(o[d]);
      df(u) && (s[u] = Tt);
    }
  else if (o)
    for (const d in o) {
      const u = Mn(d);
      if (df(u)) {
        const f = o[d], p = s[u] = it(f) || ct(f) ? { type: f } : yn({}, f), k = p.type;
        let h = !1, m = !0;
        if (it(k))
          for (let b = 0; b < k.length; ++b) {
            const G = k[b], L = ct(G) && G.name;
            if (L === "Boolean") {
              h = !0;
              break;
            } else L === "String" && (m = !1);
          }
        else
          h = ct(k) && k.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = h, p[
          1
          /* shouldCastTrue */
        ] = m, (h || xt(p, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ot(e) && n.set(e, c), c;
}
function df(e) {
  return e[0] !== "$" && !Zo(e);
}
const Ju = (e) => e === "_" || e === "_ctx" || e === "$stable", Zu = (e) => it(e) ? e.map(br) : [br(e)], ub = (e, t, r) => {
  if (t._n)
    return t;
  const n = gh((...i) => Zu(t(...i)), r);
  return n._c = !1, n;
}, Th = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ju(i)) continue;
    const o = e[i];
    if (ct(o))
      t[i] = ub(i, o, n);
    else if (o != null) {
      const s = Zu(o);
      t[i] = () => s;
    }
  }
}, Dh = (e, t) => {
  const r = Zu(t);
  e.slots.default = () => r;
}, Lh = (e, t, r) => {
  for (const n in t)
    (r || !Ju(n)) && (e[n] = t[n]);
}, db = (e, t, r) => {
  const n = e.slots = Ih();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Lh(n, t, r), r && Wp(n, "_", i, !0)) : Th(t, n);
  } else t && Dh(e, t);
}, fb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Tt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Lh(i, t, r) : (o = !t.$stable, Th(t, i)), s = t;
  } else t && (Dh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Ju(a) && s[a] == null && delete i[a];
}, En = yb;
function pb(e) {
  return hb(e);
}
function hb(e, t) {
  const r = Nl();
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
    setScopeId: p = kr,
    insertStaticContent: k
  } = e, h = (y, _, A, g = null, D = null, R = null, q = void 0, E = null, F = !!_.dynamicChildren) => {
    if (y === _)
      return;
    y && !Do(y, _) && (g = ne(y), Z(y, D, R, !0), y = null), _.patchFlag === -2 && (F = !1, _.dynamicChildren = null);
    const { type: M, ref: H, shapeFlag: Y } = _;
    switch (M) {
      case Tl:
        m(y, _, A, g);
        break;
      case oi:
        b(y, _, A, g);
        break;
      case ac:
        y == null && G(_, A, g, q);
        break;
      case Ze:
        ye(
          y,
          _,
          A,
          g,
          D,
          R,
          q,
          E,
          F
        );
        break;
      default:
        Y & 1 ? I(
          y,
          _,
          A,
          g,
          D,
          R,
          q,
          E,
          F
        ) : Y & 6 ? de(
          y,
          _,
          A,
          g,
          D,
          R,
          q,
          E,
          F
        ) : (Y & 64 || Y & 128) && M.process(
          y,
          _,
          A,
          g,
          D,
          R,
          q,
          E,
          F,
          C
        );
    }
    H != null && D ? ts(H, y && y.ref, R, _ || y, !_) : H == null && y && y.ref != null && ts(y.ref, null, R, y, !0);
  }, m = (y, _, A, g) => {
    if (y == null)
      n(
        _.el = a(_.children),
        A,
        g
      );
    else {
      const D = _.el = y.el;
      _.children !== y.children && c(D, _.children);
    }
  }, b = (y, _, A, g) => {
    y == null ? n(
      _.el = l(_.children || ""),
      A,
      g
    ) : _.el = y.el;
  }, G = (y, _, A, g) => {
    [y.el, y.anchor] = k(
      y.children,
      _,
      A,
      g,
      y.el,
      y.anchor
    );
  }, L = ({ el: y, anchor: _ }, A, g) => {
    let D;
    for (; y && y !== _; )
      D = f(y), n(y, A, g), y = D;
    n(_, A, g);
  }, oe = ({ el: y, anchor: _ }) => {
    let A;
    for (; y && y !== _; )
      A = f(y), i(y), y = A;
    i(_);
  }, I = (y, _, A, g, D, R, q, E, F) => {
    if (_.type === "svg" ? q = "svg" : _.type === "math" && (q = "mathml"), y == null)
      J(
        _,
        A,
        g,
        D,
        R,
        q,
        E,
        F
      );
    else {
      const M = y.el && y.el._isVueCE ? y.el : null;
      try {
        M && M._beginPatch(), ve(
          y,
          _,
          D,
          R,
          q,
          E,
          F
        );
      } finally {
        M && M._endPatch();
      }
    }
  }, J = (y, _, A, g, D, R, q, E) => {
    let F, M;
    const { props: H, shapeFlag: Y, transition: fe, dirs: be } = y;
    if (F = y.el = s(
      y.type,
      R,
      H && H.is,
      H
    ), Y & 8 ? d(F, y.children) : Y & 16 && B(
      y.children,
      F,
      null,
      g,
      D,
      sc(y, R),
      q,
      E
    ), be && yi(y, null, g, "created"), T(F, y, y.scopeId, q, g), H) {
      for (const ce in H)
        ce !== "value" && !Zo(ce) && o(F, ce, null, H[ce], R, g);
      "value" in H && o(F, "value", null, H.value, R), (M = H.onVnodeBeforeMount) && hr(M, g, y);
    }
    be && yi(y, null, g, "beforeMount");
    const ke = mb(D, fe);
    ke && fe.beforeEnter(F), n(F, _, A), ((M = H && H.onVnodeMounted) || ke || be) && En(() => {
      try {
        M && hr(M, g, y), ke && fe.enter(F), be && yi(y, null, g, "mounted");
      } finally {
      }
    }, D);
  }, T = (y, _, A, g, D) => {
    if (A && p(y, A), g)
      for (let R = 0; R < g.length; R++)
        p(y, g[R]);
    if (D) {
      let R = D.subTree;
      if (_ === R || zh(R.type) && (R.ssContent === _ || R.ssFallback === _)) {
        const q = D.vnode;
        T(
          y,
          q,
          q.scopeId,
          q.slotScopeIds,
          D.parent
        );
      }
    }
  }, B = (y, _, A, g, D, R, q, E, F = 0) => {
    for (let M = F; M < y.length; M++) {
      const H = y[M] = E ? Fr(y[M]) : br(y[M]);
      h(
        null,
        H,
        _,
        A,
        g,
        D,
        R,
        q,
        E
      );
    }
  }, ve = (y, _, A, g, D, R, q) => {
    const E = _.el = y.el;
    let { patchFlag: F, dynamicChildren: M, dirs: H } = _;
    F |= y.patchFlag & 16;
    const Y = y.props || Tt, fe = _.props || Tt;
    let be;
    if (A && bi(A, !1), (be = fe.onVnodeBeforeUpdate) && hr(be, A, _, y), H && yi(_, y, A, "beforeUpdate"), A && bi(A, !0), (Y.innerHTML && fe.innerHTML == null || Y.textContent && fe.textContent == null) && d(E, ""), M ? _e(
      y.dynamicChildren,
      M,
      E,
      A,
      g,
      sc(_, D),
      R
    ) : q || te(
      y,
      _,
      E,
      null,
      A,
      g,
      sc(_, D),
      R,
      !1
    ), F > 0) {
      if (F & 16)
        he(E, Y, fe, A, D);
      else if (F & 2 && Y.class !== fe.class && o(E, "class", null, fe.class, D), F & 4 && o(E, "style", Y.style, fe.style, D), F & 8) {
        const ke = _.dynamicProps;
        for (let ce = 0; ce < ke.length; ce++) {
          const xe = ke[ce], K = Y[xe], pe = fe[xe];
          (pe !== K || xe === "value") && o(E, xe, K, pe, D, A);
        }
      }
      F & 1 && y.children !== _.children && d(E, _.children);
    } else !q && M == null && he(E, Y, fe, A, D);
    ((be = fe.onVnodeUpdated) || H) && En(() => {
      be && hr(be, A, _, y), H && yi(_, y, A, "updated");
    }, g);
  }, _e = (y, _, A, g, D, R, q) => {
    for (let E = 0; E < _.length; E++) {
      const F = y[E], M = _[E], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Do(F, M) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      h(
        F,
        M,
        H,
        null,
        g,
        D,
        R,
        q,
        !0
      );
    }
  }, he = (y, _, A, g, D) => {
    if (_ !== A) {
      if (_ !== Tt)
        for (const R in _)
          !Zo(R) && !(R in A) && o(
            y,
            R,
            _[R],
            null,
            D,
            g
          );
      for (const R in A) {
        if (Zo(R)) continue;
        const q = A[R], E = _[R];
        q !== E && R !== "value" && o(y, R, E, q, D, g);
      }
      "value" in A && o(y, "value", _.value, A.value, D);
    }
  }, ye = (y, _, A, g, D, R, q, E, F) => {
    const M = _.el = y ? y.el : a(""), H = _.anchor = y ? y.anchor : a("");
    let { patchFlag: Y, dynamicChildren: fe, slotScopeIds: be } = _;
    be && (E = E ? E.concat(be) : be), y == null ? (n(M, A, g), n(H, A, g), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      A,
      H,
      D,
      R,
      q,
      E,
      F
    )) : Y > 0 && Y & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === fe.length ? (_e(
      y.dynamicChildren,
      fe,
      A,
      D,
      R,
      q,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || D && _ === D.subTree) && Rh(
      y,
      _,
      !0
      /* shallow */
    )) : te(
      y,
      _,
      A,
      H,
      D,
      R,
      q,
      E,
      F
    );
  }, de = (y, _, A, g, D, R, q, E, F) => {
    _.slotScopeIds = E, y == null ? _.shapeFlag & 512 ? D.ctx.activate(
      _,
      A,
      g,
      q,
      F
    ) : we(
      _,
      A,
      g,
      D,
      R,
      q,
      F
    ) : ue(y, _, F);
  }, we = (y, _, A, g, D, R, q) => {
    const E = y.component = xb(
      y,
      g,
      D
    );
    if (Sh(y) && (E.ctx.renderer = C), Mb(E, !1, q), E.asyncDep) {
      if (D && D.registerDep(E, V, q), !y.el) {
        const F = E.subTree = Be(oi);
        b(null, F, _, A), y.placeholder = F.el;
      }
    } else
      V(
        E,
        y,
        _,
        A,
        D,
        R,
        q
      );
  }, ue = (y, _, A) => {
    const g = _.component = y.component;
    if (ob(y, _, A))
      if (g.asyncDep && !g.asyncResolved) {
        ie(g, _, A);
        return;
      } else
        g.next = _, g.update();
    else
      _.el = y.el, g.vnode = _;
  }, V = (y, _, A, g, D, R, q) => {
    const E = () => {
      if (y.isMounted) {
        let { next: Y, bu: fe, u: be, parent: ke, vnode: ce } = y;
        {
          const ae = Vh(y);
          if (ae) {
            Y && (Y.el = ce.el, ie(y, Y, q)), ae.asyncDep.then(() => {
              En(() => {
                y.isUnmounted || M();
              }, D);
            });
            return;
          }
        }
        let xe = Y, K;
        bi(y, !1), Y ? (Y.el = ce.el, ie(y, Y, q)) : Y = ce, fe && va(fe), (K = Y.props && Y.props.onVnodeBeforeUpdate) && hr(K, ke, Y, ce), bi(y, !0);
        const pe = cf(y), z = y.subTree;
        y.subTree = pe, h(
          z,
          pe,
          // parent may have changed if it's in a teleport
          u(z.el),
          // anchor may have changed if it's in a fragment
          ne(z),
          y,
          D,
          R
        ), Y.el = pe.el, xe === null && sb(y, pe.el), be && En(be, D), (K = Y.props && Y.props.onVnodeUpdated) && En(
          () => hr(K, ke, Y, ce),
          D
        );
      } else {
        let Y;
        const { el: fe, props: be } = _, { bm: ke, m: ce, parent: xe, root: K, type: pe } = y, z = ns(_);
        bi(y, !1), ke && va(ke), !z && (Y = be && be.onVnodeBeforeMount) && hr(Y, xe, _), bi(y, !0);
        {
          K.ce && K.ce._hasShadowRoot() && K.ce._injectChildStyle(
            pe,
            y.parent ? y.parent.type : void 0
          );
          const ae = y.subTree = cf(y);
          h(
            null,
            ae,
            A,
            g,
            y,
            D,
            R
          ), _.el = ae.el;
        }
        if (ce && En(ce, D), !z && (Y = be && be.onVnodeMounted)) {
          const ae = _;
          En(
            () => hr(Y, xe, ae),
            D
          );
        }
        (_.shapeFlag & 256 || xe && ns(xe.vnode) && xe.vnode.shapeFlag & 256) && y.a && En(y.a, D), y.isMounted = !0, _ = A = g = null;
      }
    };
    y.scope.on();
    const F = y.effect = new qp(E);
    y.scope.off();
    const M = y.update = F.run.bind(F), H = y.job = F.runIfDirty.bind(F);
    H.i = y, H.id = y.uid, F.scheduler = () => qu(H), bi(y, !0), M();
  }, ie = (y, _, A) => {
    _.component = y;
    const g = y.vnode.props;
    y.vnode = _, y.next = null, lb(y, _.props, g, A), fb(y, _.children, A), Hr(), ef(y), Gr();
  }, te = (y, _, A, g, D, R, q, E, F = !1) => {
    const M = y && y.children, H = y ? y.shapeFlag : 0, Y = _.children, { patchFlag: fe, shapeFlag: be } = _;
    if (fe > 0) {
      if (fe & 128) {
        v(
          M,
          Y,
          A,
          g,
          D,
          R,
          q,
          E,
          F
        );
        return;
      } else if (fe & 256) {
        x(
          M,
          Y,
          A,
          g,
          D,
          R,
          q,
          E,
          F
        );
        return;
      }
    }
    be & 8 ? (H & 16 && W(M, D, R), Y !== M && d(A, Y)) : H & 16 ? be & 16 ? v(
      M,
      Y,
      A,
      g,
      D,
      R,
      q,
      E,
      F
    ) : W(M, D, R, !0) : (H & 8 && d(A, ""), be & 16 && B(
      Y,
      A,
      g,
      D,
      R,
      q,
      E,
      F
    ));
  }, x = (y, _, A, g, D, R, q, E, F) => {
    y = y || oo, _ = _ || oo;
    const M = y.length, H = _.length, Y = Math.min(M, H);
    let fe;
    for (fe = 0; fe < Y; fe++) {
      const be = _[fe] = F ? Fr(_[fe]) : br(_[fe]);
      h(
        y[fe],
        be,
        A,
        null,
        D,
        R,
        q,
        E,
        F
      );
    }
    M > H ? W(
      y,
      D,
      R,
      !0,
      !1,
      Y
    ) : B(
      _,
      A,
      g,
      D,
      R,
      q,
      E,
      F,
      Y
    );
  }, v = (y, _, A, g, D, R, q, E, F) => {
    let M = 0;
    const H = _.length;
    let Y = y.length - 1, fe = H - 1;
    for (; M <= Y && M <= fe; ) {
      const be = y[M], ke = _[M] = F ? Fr(_[M]) : br(_[M]);
      if (Do(be, ke))
        h(
          be,
          ke,
          A,
          null,
          D,
          R,
          q,
          E,
          F
        );
      else
        break;
      M++;
    }
    for (; M <= Y && M <= fe; ) {
      const be = y[Y], ke = _[fe] = F ? Fr(_[fe]) : br(_[fe]);
      if (Do(be, ke))
        h(
          be,
          ke,
          A,
          null,
          D,
          R,
          q,
          E,
          F
        );
      else
        break;
      Y--, fe--;
    }
    if (M > Y) {
      if (M <= fe) {
        const be = fe + 1, ke = be < H ? _[be].el : g;
        for (; M <= fe; )
          h(
            null,
            _[M] = F ? Fr(_[M]) : br(_[M]),
            A,
            ke,
            D,
            R,
            q,
            E,
            F
          ), M++;
      }
    } else if (M > fe)
      for (; M <= Y; )
        Z(y[M], D, R, !0), M++;
    else {
      const be = M, ke = M, ce = /* @__PURE__ */ new Map();
      for (M = ke; M <= fe; M++) {
        const j = _[M] = F ? Fr(_[M]) : br(_[M]);
        j.key != null && ce.set(j.key, M);
      }
      let xe, K = 0;
      const pe = fe - ke + 1;
      let z = !1, ae = 0;
      const $ = new Array(pe);
      for (M = 0; M < pe; M++) $[M] = 0;
      for (M = be; M <= Y; M++) {
        const j = y[M];
        if (K >= pe) {
          Z(j, D, R, !0);
          continue;
        }
        let N;
        if (j.key != null)
          N = ce.get(j.key);
        else
          for (xe = ke; xe <= fe; xe++)
            if ($[xe - ke] === 0 && Do(j, _[xe])) {
              N = xe;
              break;
            }
        N === void 0 ? Z(j, D, R, !0) : ($[N - ke] = M + 1, N >= ae ? ae = N : z = !0, h(
          j,
          _[N],
          A,
          null,
          D,
          R,
          q,
          E,
          F
        ), K++);
      }
      const U = z ? gb($) : oo;
      for (xe = U.length - 1, M = pe - 1; M >= 0; M--) {
        const j = ke + M, N = _[j], Q = _[j + 1], P = j + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Q.el || $h(Q)
        ) : g;
        $[M] === 0 ? h(
          null,
          N,
          A,
          P,
          D,
          R,
          q,
          E,
          F
        ) : z && (xe < 0 || M !== U[xe] ? w(N, A, P, 2) : xe--);
      }
    }
  }, w = (y, _, A, g, D = null) => {
    const { el: R, type: q, transition: E, children: F, shapeFlag: M } = y;
    if (M & 6) {
      w(y.component.subTree, _, A, g);
      return;
    }
    if (M & 128) {
      y.suspense.move(_, A, g);
      return;
    }
    if (M & 64) {
      q.move(y, _, A, C);
      return;
    }
    if (q === Ze) {
      n(R, _, A);
      for (let Y = 0; Y < F.length; Y++)
        w(F[Y], _, A, g);
      n(y.anchor, _, A);
      return;
    }
    if (q === ac) {
      L(y, _, A);
      return;
    }
    if (g !== 2 && M & 1 && E)
      if (g === 0)
        E.beforeEnter(R), n(R, _, A), En(() => E.enter(R), D);
      else {
        const { leave: Y, delayLeave: fe, afterLeave: be } = E, ke = () => {
          y.ctx.isUnmounted ? i(R) : n(R, _, A);
        }, ce = () => {
          R._isLeaving && R[Oy](
            !0
            /* cancelled */
          ), Y(R, () => {
            ke(), be && be();
          });
        };
        fe ? fe(R, ke, ce) : ce();
      }
    else
      n(R, _, A);
  }, Z = (y, _, A, g = !1, D = !1) => {
    const {
      type: R,
      props: q,
      ref: E,
      children: F,
      dynamicChildren: M,
      shapeFlag: H,
      patchFlag: Y,
      dirs: fe,
      cacheIndex: be,
      memo: ke
    } = y;
    if (Y === -2 && (D = !1), E != null && (Hr(), ts(E, null, A, y, !0), Gr()), be != null && (_.renderCache[be] = void 0), H & 256) {
      _.ctx.deactivate(y);
      return;
    }
    const ce = H & 1 && fe, xe = !ns(y);
    let K;
    if (xe && (K = q && q.onVnodeBeforeUnmount) && hr(K, _, y), H & 6)
      S(y.component, A, g);
    else {
      if (H & 128) {
        y.suspense.unmount(A, g);
        return;
      }
      ce && yi(y, null, _, "beforeUnmount"), H & 64 ? y.type.remove(
        y,
        _,
        A,
        C,
        g
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== Ze || Y > 0 && Y & 64) ? W(
        M,
        _,
        A,
        !1,
        !0
      ) : (R === Ze && Y & 384 || !D && H & 16) && W(F, _, A), g && X(y);
    }
    const pe = ke != null && be == null;
    (xe && (K = q && q.onVnodeUnmounted) || ce || pe) && En(() => {
      K && hr(K, _, y), ce && yi(y, null, _, "unmounted"), pe && (y.el = null);
    }, A);
  }, X = (y) => {
    const { type: _, el: A, anchor: g, transition: D } = y;
    if (_ === Ze) {
      O(A, g);
      return;
    }
    if (_ === ac) {
      oe(y);
      return;
    }
    const R = () => {
      i(A), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (y.shapeFlag & 1 && D && !D.persisted) {
      const { leave: q, delayLeave: E } = D, F = () => q(A, R);
      E ? E(y.el, R, F) : F();
    } else
      R();
  }, O = (y, _) => {
    let A;
    for (; y !== _; )
      A = f(y), i(y), y = A;
    i(_);
  }, S = (y, _, A) => {
    const { bum: g, scope: D, job: R, subTree: q, um: E, m: F, a: M } = y;
    ff(F), ff(M), g && va(g), D.stop(), R && (R.flags |= 8, Z(q, y, _, A)), E && En(E, _), En(() => {
      y.isUnmounted = !0;
    }, _);
  }, W = (y, _, A, g = !1, D = !1, R = 0) => {
    for (let q = R; q < y.length; q++)
      Z(y[q], _, A, g, D);
  }, ne = (y) => {
    if (y.shapeFlag & 6)
      return ne(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const _ = f(y.anchor || y.el), A = _ && _[Iy];
    return A ? f(A) : _;
  };
  let me = !1;
  const Se = (y, _, A) => {
    let g;
    y == null ? _._vnode && (Z(_._vnode, null, null, !0), g = _._vnode.component) : h(
      _._vnode || null,
      y,
      _,
      null,
      null,
      null,
      A
    ), _._vnode = y, me || (me = !0, ef(g), ph(), me = !1);
  }, C = {
    p: h,
    um: Z,
    m: w,
    r: X,
    mt: we,
    mc: B,
    pc: te,
    pbc: _e,
    n: ne,
    o: e
  };
  return {
    render: Se,
    hydrate: void 0,
    createApp: Qy(Se)
  };
}
function sc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function bi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Rh(s, a)), a.type === Tl && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === oi && !a.el && (a.el = s.el);
    }
}
function gb(e) {
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
function Vh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vh(t);
}
function ff(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $h(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $h(t.subTree) : null;
}
const zh = (e) => e.__isSuspense;
function yb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : My(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Tl = /* @__PURE__ */ Symbol.for("v-txt"), oi = /* @__PURE__ */ Symbol.for("v-cmt"), ac = /* @__PURE__ */ Symbol.for("v-stc"), is = [];
let jn = null;
function Le(e = !1) {
  is.push(jn = e ? null : []);
}
function bb() {
  is.pop(), jn = is[is.length - 1] || null;
}
let fs = 1;
function pf(e, t = !1) {
  fs += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function jh(e) {
  return e.dynamicChildren = fs > 0 ? jn || oo : null, bb(), fs > 0 && jn && jn.push(e), e;
}
function Ve(e, t, r, n, i, o) {
  return jh(
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
  return jh(
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
function Hh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Do(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gh = ({ key: e }) => e ?? null, _a = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ gn(e) || ct(e) ? { i: zn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gh(t),
    ref: t && _a(t),
    scopeId: mh,
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
  return a ? (Qu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), fs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  jn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && jn.push(l), l;
}
const Be = vb;
function vb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === xh) && (e = oi), Hh(e)) {
    const a = mo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Qu(a, r), fs > 0 && !o && jn && (a.shapeFlag & 6 ? jn[jn.indexOf(e)] = a : jn.push(a)), a.patchFlag = -2, a;
  }
  if (Ib(e) && (e = e.__vccOpts), t) {
    t = Sb(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ot(l) && (/* @__PURE__ */ Yu(l) && !it(l) && (l = yn({}, l)), t.style = Et(l));
  }
  const s = Qt(e) ? 1 : zh(e) ? 128 : Ey(e) ? 64 : Ot(e) ? 4 : ct(e) ? 2 : 0;
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
function Sb(e) {
  return e ? /* @__PURE__ */ Yu(e) || Eh(e) ? yn({}, e) : e : null;
}
function mo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Gh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(_a(t)) : [o, _a(t)] : _a(t)
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
    ssContent: e.ssContent && mo(e.ssContent),
    ssFallback: e.ssFallback && mo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Xu(
    d,
    l.clone(d)
  ), d;
}
function Go(e = " ", t = 0) {
  return Be(Tl, null, e, t);
}
function pt(e = "", t = !1) {
  return t ? (Le(), Gn(oi, null, e)) : Be(oi, null, e);
}
function br(e) {
  return e == null || typeof e == "boolean" ? Be(oi) : it(e) ? Be(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hh(e) ? Fr(e) : Be(Tl, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mo(e);
}
function Qu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Qu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Eh(t) ? t._ctx = zn : i === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ct(t) ? (t = { default: t, _ctx: zn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Go(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Tr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Et([t.style, n.style]);
      else if (xl(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !kl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function hr(e, t, r, n = null) {
  Ar(e, t, 7, [
    r,
    n
  ]);
}
const _b = Ph();
let wb = 0;
function xb(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || _b, o = {
    uid: wb++,
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
    scope: new q0(
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
    propsOptions: Fh(n, i),
    emitsOptions: Nh(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Tt,
    data: Tt,
    props: Tt,
    attrs: Tt,
    slots: Tt,
    refs: Tt,
    setupState: Tt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = tb.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const kb = () => pn || zn;
let Wa, Zc;
{
  const e = Nl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Wa = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), Zc = t(
    "__VUE_SSR_SETTERS__",
    (r) => ps = r
  );
}
const Is = (e) => {
  const t = pn;
  return Wa(e), e.scope.on(), () => {
    e.scope.off(), Wa(t);
  };
}, hf = () => {
  pn && pn.scope.off(), Wa(null);
};
function Kh(e) {
  return e.vnode.shapeFlag & 4;
}
let ps = !1;
function Mb(e, t = !1, r = !1) {
  t && Zc(t);
  const { props: n, children: i } = e.vnode, o = Kh(e);
  ab(e, n, o, t), db(e, i, r || t);
  const s = o ? Pb(e, t) : void 0;
  return t && Zc(!1), s;
}
function Pb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Uy);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? Ab(e) : null, o = Is(e), s = As(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Hp(s);
    if (Gr(), o(), (a || e.sp) && !ns(e) && vh(e), a) {
      if (s.then(hf, hf), t)
        return s.then((l) => {
          mf(e, l);
        }).catch((l) => {
          Cl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      mf(e, s);
  } else
    Wh(e);
}
function mf(e, t, r) {
  ct(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ot(t) && (e.setupState = uh(t)), Wh(e);
}
function Wh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || kr);
  {
    const i = Is(e);
    Hr();
    try {
      By(e);
    } finally {
      Gr(), i();
    }
  }
}
const Nb = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Ab(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Dl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(uh(gy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in rs)
        return rs[r](e);
    },
    has(t, r) {
      return r in t || r in rs;
    }
  })) : e.proxy;
}
function Cb(e, t = !0) {
  return ct(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ib(e) {
  return ct(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Sy(e, t, ps), Eb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qc;
const gf = typeof window < "u" && window.trustedTypes;
if (gf)
  try {
    Qc = /* @__PURE__ */ gf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Uh = Qc ? (e) => Qc.createHTML(e) : (e) => e, Ob = "http://www.w3.org/2000/svg", Fb = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, yf = Or && /* @__PURE__ */ Or.createElement("template"), Tb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(Ob, e) : t === "mathml" ? Or.createElementNS(Fb, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Or.createTextNode(e),
  createComment: (e) => Or.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Or.querySelector(e),
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
      yf.innerHTML = Uh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = yf.content;
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
}, Db = /* @__PURE__ */ Symbol("_vtc");
function Lb(e, t, r) {
  const n = e[Db];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ua = /* @__PURE__ */ Symbol("_vod"), Bh = /* @__PURE__ */ Symbol("_vsh"), Ti = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ua] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Lo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Lo(e, !0), n.enter(e)) : n.leave(e, () => {
      Lo(e, !1);
    }) : Lo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lo(e, t);
  }
};
function Lo(e, t) {
  e.style.display = t ? e[Ua] : "none", e[Bh] = !t;
}
const Rb = /* @__PURE__ */ Symbol(""), Vb = /(?:^|;)\s*display\s*:/;
function $b(e, t, r) {
  const n = e.style, i = Qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Qt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && wa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && wa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), wa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Rb];
      s && (r += ";" + s), n.cssText = r, o = Vb.test(r);
    }
  } else t && e.removeAttribute("style");
  Ua in e && (e[Ua] = o ? n.display : "", e[Bh] && (n.display = "none"));
}
const bf = /\s*!important$/;
function wa(e, t, r) {
  if (it(r))
    r.forEach((n) => wa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = zb(e, t);
    bf.test(r) ? e.setProperty(
      Ri(n),
      r.replace(bf, ""),
      "important"
    ) : e[n] = r;
  }
}
const vf = ["Webkit", "Moz", "ms"], lc = {};
function zb(e, t) {
  const r = lc[t];
  if (r)
    return r;
  let n = Mn(t);
  if (n !== "filter" && n in e)
    return lc[t] = n;
  n = Pl(n);
  for (let i = 0; i < vf.length; i++) {
    const o = vf[i] + n;
    if (o in e)
      return lc[t] = o;
  }
  return t;
}
const Sf = "http://www.w3.org/1999/xlink";
function _f(e, t, r, n, i, o = B0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Sf, t.slice(6, t.length)) : e.setAttributeNS(Sf, t, r) : r == null || o && !Up(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Nr(r) ? String(r) : r
  );
}
function wf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Uh(r) : r);
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
    a === "boolean" ? r = Up(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Ji(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function jb(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const xf = /* @__PURE__ */ Symbol("_vei");
function Hb(e, t, r, n, i = null) {
  const o = e[xf] || (e[xf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = Gb(t);
    if (n) {
      const c = o[t] = Ub(
        n,
        i
      );
      Ji(e, a, c, l);
    } else s && (jb(e, a, s, l), o[t] = void 0);
  }
}
const kf = /(?:Once|Passive|Capture)$/;
function Gb(e) {
  let t;
  if (kf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(kf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ri(e.slice(2)), t];
}
let cc = 0;
const Kb = /* @__PURE__ */ Promise.resolve(), Wb = () => cc || (Kb.then(() => cc = 0), cc = Date.now());
function Ub(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      Bb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Wb(), r;
}
function Bb(e, t) {
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
const Mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Lb(e, n, s) : t === "style" ? $b(e, r, n) : xl(t) ? kl(t) || Hb(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qb(e, t, n, s)) ? (wf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _f(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? wf(e, Mn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), _f(e, t, n, s));
};
function qb(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mf(t) && ct(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Mf(t) && Qt(r) ? !1 : t in e;
}
function Xb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Mn(t);
  return Array.isArray(r) ? r.some((i) => Mn(i) === n) : Object.keys(r).some((i) => Mn(i) === n);
}
const Pf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => va(t, r) : t;
};
function Jb(e) {
  e.target.composing = !0;
}
function Nf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const uc = /* @__PURE__ */ Symbol("_assign");
function Af(e, t, r) {
  return t && (e = e.trim()), r && (e = zu(e)), e;
}
const Cf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[uc] = Pf(i);
    const o = n || i.props && i.props.type === "number";
    Ji(e, t ? "change" : "input", (s) => {
      s.target.composing || e[uc](Af(e.value, r, o));
    }), (r || o) && Ji(e, "change", () => {
      e.value = Af(e.value, r, o);
    }), t || (Ji(e, "compositionstart", Jb), Ji(e, "compositionend", Nf), Ji(e, "change", Nf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[uc] = Pf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? zu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Zb = ["ctrl", "shift", "alt", "meta"], Qb = {
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
  exact: (e, t) => Zb.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ct = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Qb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, ev = /* @__PURE__ */ yn({ patchProp: Yb }, Tb);
let If;
function tv() {
  return If || (If = pb(ev));
}
const ed = ((...e) => {
  const t = tv().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = rv(n);
    if (!i) return;
    const o = t._component;
    !ct(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, nv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function nv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
const iv = "PanoramaSuite.Debug.Diagnostics", ov = "PanoramaSuite.Debug.ExportDiagnostics", dc = "pano_suite.diagnostics.v1", Ef = "pano_suite.diagnostics.previous.v1", sv = 300, av = 2e5, lv = 100, cv = 20, uv = 1e3, dv = 2, ia = 1024 * 1024;
function Zr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function fv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function pv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: fv,
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
function hv(e = {}) {
  const t = { ...pv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    d.delete(C), f.collected += 1;
  }) : null, h = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    u.delete(C), p.collected += 1;
  }) : null, m = /* @__PURE__ */ new Set(), b = { created: 0, lost: 0, restored: 0, disposed: 0 }, G = [], L = /* @__PURE__ */ new Map();
  let oe = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), J = { count: 0, maxMs: 0 };
  const T = [];
  function B(C, le, y = void 0) {
    G.push(y === void 0 ? { t: t.clock(), type: C, label: le } : { t: t.clock(), type: C, label: le, detail: y }), G.length > lv && G.shift();
  }
  function ve(C, le, y, _, A) {
    if (!r || !_ || !t.WeakRef) return _;
    const g = { ref: new t.WeakRef(_), label: A };
    return C.add(g), le == null || le.register(_, g), y.created += 1, _;
  }
  function _e(C, le = "") {
    return ve(d, k, f, C, le);
  }
  function he(C, le = "") {
    return ve(u, h, p, C, le);
  }
  function ye({ label: C = "", width: le, height: y, offscreen: _ = !1 } = {}) {
    const A = globalThis.OffscreenCanvas;
    let g;
    return _ && typeof A < "u" ? g = new A(le, y) : (g = t.document().createElement("canvas"), le !== void 0 && y !== void 0 && (g.width = le, g.height = y)), _e(g, C);
  }
  function de(C) {
    C.width = 0, C.height = 0, r && (f.released += 1);
  }
  function we(C = t.document(), le = "") {
    var y;
    return he(((y = C == null ? void 0 : C.createElement) == null ? void 0 : y.call(C, "video")) || null, le);
  }
  function ue(C, le) {
    if (!r || !C) return () => {
    };
    const y = { label: le, lost: !1, disposed: !1 };
    m.add(y), b.created += 1, B("webgl-created", le);
    const _ = () => {
      y.disposed || (y.lost = !0, b.lost += 1, B("webglcontextlost", le));
    }, A = () => {
      y.disposed || (y.lost = !1, b.restored += 1, B("webglcontextrestored", le));
    };
    return C.addEventListener("webglcontextlost", _), C.addEventListener("webglcontextrestored", A), () => {
      y.disposed || (y.disposed = !0, m.delete(y), b.disposed += 1, B("webgl-disposed", le));
    };
  }
  function V(C, le) {
    return L.set(C, le), () => {
      L.get(C) === le && L.delete(C);
    };
  }
  function ie() {
    return r ? t.now() : -1;
  }
  function te(C) {
    if (C < 0 || !r) return;
    const le = t.now() - C;
    oe.count += 1, oe.maxMs = Math.max(oe.maxMs, le);
  }
  function x(C, le) {
    if (le < 0 || !r) return;
    const y = t.now() - le, _ = I.get(C) ?? { count: 0, maxMs: 0 };
    _.count += 1, _.maxMs = Math.max(_.maxMs, y), I.set(C, _);
  }
  function v() {
    let C = 0, le = 0, y = 0, _ = [0, 0];
    const A = {};
    for (const g of d) {
      const D = g.ref.deref();
      if (!D) continue;
      C += 1;
      const R = D.width * D.height;
      R > 0 && (le += 1), y += R, R > _[0] * _[1] && (_ = [D.width, D.height]);
      const q = A[g.label] ?? (A[g.label] = [0, 0]);
      q[0] += 1, q[1] += R;
    }
    return { ...f, alive: C, sized: le, pixels: y, mb: Zr(y * 4 / ia, 1), largest: _, byLabel: A };
  }
  function w() {
    const C = [];
    let le = 0, y = 0;
    for (const _ of u) {
      const A = _.ref.deref();
      if (!A) continue;
      le += 1;
      const g = !A.paused && !A.ended;
      g && (y += 1), C.length < cv && C.push({
        label: _.label,
        playing: g,
        src: !!(A.currentSrc || A.src),
        size: [A.videoWidth || 0, A.videoHeight || 0],
        ready: A.readyState ?? 0,
        connected: !!A.isConnected
      });
    }
    return { ...p, alive: le, playing: y, list: C };
  }
  function Z() {
    const C = t.now(), le = t.memory(), y = {
      t: t.clock(),
      heap: le ? { used: Zr(le.usedJSHeapSize / ia, 1), total: Zr(le.totalJSHeapSize / ia, 1), limit: Zr(le.jsHeapSizeLimit / ia, 1) } : null,
      canvas: v(),
      webgl: { ...b, alive: [...m].filter((_) => !_.lost).length },
      video: w(),
      frame: { count: oe.count, maxMs: Zr(oe.maxMs), longTasks: J.count, longTaskMaxMs: Zr(J.maxMs) },
      renders: Object.fromEntries([...I].map(([_, A]) => [_, { count: A.count, maxMs: Zr(A.maxMs) }])),
      sources: Object.fromEntries([...L].map(([_, A]) => [_, A()])),
      costMs: Zr(c, 3)
    };
    return oe = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), J = { count: 0, maxMs: 0 }, T.push({ record: y, text: JSON.stringify(y) }), T.length > sv && T.shift(), l += 1, l % dv === 0 && O(), c = t.now() - C, y;
  }
  function X(C = av) {
    const le = JSON.stringify({ ...o, events: G }).slice(0, -1);
    let y = C - le.length - 14, _ = T.length;
    for (; _ > 0 && y - T[_ - 1].text.length - 1 >= 0; )
      _ -= 1, y -= T[_].text.length + 1;
    return `${le},"records":[${T.slice(_).map((A) => A.text).join(",")}]}`;
  }
  function O() {
    if (!o) return;
    const C = t.storage();
    if (C) {
      o.savedAt = t.clock();
      try {
        C.setItem(dc, X());
      } catch {
      }
    }
  }
  function S() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", O();
  }
  function W() {
    var A;
    if (n) return i;
    n = !0;
    const C = t.storage();
    if (!C) return null;
    let le = null;
    try {
      if (le = C.getItem(dc), le === null) {
        const g = C.getItem(Ef);
        return i = g === null ? null : JSON.parse(g), i;
      }
      C.setItem(Ef, le), C.removeItem(dc), i = JSON.parse(le);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], _ = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(_)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((A = y.at(-1)) == null ? void 0 : A.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(_)
    ), i;
  }
  function ne(C) {
    const le = C === !0;
    if (W(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, T.length = 0, a = t.observeLongTasks((y) => {
          for (const _ of y)
            J.count += 1, J.maxMs = Math.max(J.maxMs, _.duration);
        }), t.addUnload(S), s = t.setInterval(Z, uv), O();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(S), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", O();
    }
  }
  function me() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...G], records: T.map((C) => C.record) } : null,
      previous: i
    };
  }
  function Se() {
    const C = t.document(), le = new Blob([JSON.stringify(me(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(le), _ = C.createElement("a");
    _.href = y, _.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, _.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ye,
    releaseCanvas: de,
    trackCanvas: _e,
    createVideo: we,
    trackVideo: he,
    watchContext: ue,
    addSource: V,
    frameStart: ie,
    frameEnd: te,
    renderEnd: x,
    sample: Z,
    serialize: X,
    recoverPrevious: W,
    setEnabled: ne,
    exportData: me,
    download: Se
  };
}
const Dn = hv(), on = Dn.createCanvas, hs = Dn.releaseCanvas, fc = Dn.trackCanvas, Es = Dn.createVideo, Of = Dn.trackVideo, mv = Dn.addSource, gv = Dn.frameStart, yv = Dn.frameEnd;
function Yh(e, t) {
  const r = Dn.watchContext(e.canvas, t), n = Dn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Dn.frameStart(), l = o(s);
    return Dn.renderEnd(t, a), l;
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
const bv = {
  id: iv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Dn.setEnabled(e === !0)
}, Ff = {
  id: ov,
  label: "Export Panorama Suite diagnostics",
  function: () => Dn.download()
};
function Zi(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function vv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Tf(e, t = 8) {
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
function td(e, t) {
  return on({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ti(e, t, r) {
  if (!e) return Zi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function qt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function un(e) {
  e.displayDirty = !0, e.revision += 1;
}
let pc = null, hc = null, Df = null, Lf = null, Yt = null, Ro = null;
function Sv() {
  if (hc) return hc;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), hc = r, r;
}
function mc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  pc = ti(pc, r, n);
  const i = pc;
  qt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Lf !== i.ctx && (Df = i.ctx.createPattern(Sv(), "repeat"), Lf = i.ctx), i.ctx.fillStyle = Df, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function _v(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function wv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function xv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function kv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const jt = /* @__PURE__ */ new Map(), nd = 128;
function Mv(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (jt.has(l)) {
    const G = jt.get(l);
    return jt.delete(l), jt.set(l, G), G;
  }
  jt.size >= nd && jt.delete(jt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = td(c, c), f = u.getContext("2d"), p = a * s, k = s + 1, h = `rgba(${r},${n},${i},${o})`, m = `rgba(${r},${n},${i},0)`, b = f.createRadialGradient(d, d, p, d, d, k);
  return b.addColorStop(0, h), b.addColorStop(1, m), f.fillStyle = b, f.fillRect(0, 0, c, c), jt.set(l, u), u;
}
function Pv(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), k = Math.max(0, Math.min(0.99, o)), h = Math.max(0, Math.min(1, s ?? 0)), m = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${p.toFixed(2)}:${k.toFixed(2)}:${h.toFixed(2)}`;
  if (jt.has(m)) {
    const B = jt.get(m);
    return jt.delete(m), jt.set(m, B), B;
  }
  jt.size >= nd && jt.delete(jt.keys().next().value);
  const b = td(u, f), G = b.getContext("2d"), L = G.createImageData(u, f), oe = L.data, I = Math.max(0, e - t), J = Math.max(0, Math.min(1, r)), T = 1 + p;
  for (let B = 0; B < f; B++)
    for (let ve = 0; ve < u; ve++) {
      const _e = ve + 0.5 - e, he = B + 0.5 - t, ye = Math.max(Math.abs(_e) - I, 0), we = Math.hypot(ye, he) / t;
      if (we >= 1) continue;
      const ue = we <= J ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - J)), V = 1 - we, ie = 1 + p * (1 - V) * (1 - V), te = 1 - k * V * V, x = ie * te / T;
      let v = 1;
      if (h > 0) {
        const X = Math.floor((he + t) / 1.5), O = Math.floor((_e + e) / 8), S = Ii(co(X * 41 + 500, O * 19 + 300));
        v = 1 - h * 0.42 * S;
      }
      const w = Math.round(255 * Math.min(1, d * ue * x * v));
      if (w <= 0) continue;
      const Z = (B * u + ve) * 4;
      oe[Z] = a, oe[Z + 1] = l, oe[Z + 2] = c, oe[Z + 3] = w;
    }
  return G.putImageData(L, 0, 0), jt.set(m, b), b;
}
function co(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Ii(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Nv(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Ii(co(e * 17 + 3, t * 13 + 7)), p = u + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const k = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), h = Av(e, t, a, l, r, n), m = o * 0.55;
  if (h < m) return 0;
  const G = 0.45 + 0.55 * ((h - m) / Math.max(1e-4, 1 - m));
  return Math.round(255 * Math.min(1, s * k * G));
}
function Av(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Ii(co(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Ii(co(c * 23 + 800, d * 29 + 500)), f = Ii(co(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Cv(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (jt.has(f)) {
    const G = jt.get(f);
    return jt.delete(f), jt.set(f, G), G;
  }
  jt.size >= nd && jt.delete(jt.keys().next().value);
  const p = td(c, d), k = p.getContext("2d"), h = k.createImageData(c, d), m = h.data, b = Math.max(0, Math.min(1, r));
  for (let G = 0; G < d; G++)
    for (let L = 0; L < c; L++) {
      const oe = Nv(L, G, e, t, b, u, l);
      if (oe <= 0) continue;
      const I = (G * c + L) * 4;
      m[I] = o, m[I + 1] = s, m[I + 2] = a, m[I + 3] = oe;
    }
  return k.putImageData(h, 0, 0), jt.set(f, p), p;
}
function qh(e, t, r) {
  var h, m;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = xv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Iv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((h = t == null ? void 0 : t.angle) == null ? void 0 : h.value) ?? 0), c = kv(t, i), d = String(((m = t == null ? void 0 : t.targetSpace) == null ? void 0 : m.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let k;
  if (n === "chisel") {
    const b = i * a, G = i, L = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), oe = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = Pv(b, G, o, s, L, oe, I);
  } else if (n === "crayon") {
    const b = i * a, G = i, L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = Cv(b, G, o, s, L);
  } else
    k = Mv(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: k, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: p, latitudeCorrection: u };
}
function Iv(e) {
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
function Ev(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Rf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function rd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = co(t, r);
    for (let p = 0; p < d; p++) {
      const k = Ii(f + p * 2) * Math.PI * 2, h = Math.sqrt(Ii(f + p * 2 + 1)) * u, m = t + Math.cos(k) * h, b = r + Math.sin(k) * h, G = Math.max(0.5, e.radiusPx * i * 0.48), L = (0.5 - b / Math.max(1, e.desc.height)) * Math.PI, oe = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(L)) : 1, I = G * e.aspect * oe;
      Rf(e, m, b, G, I);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Rf(e, t, r, o, l);
}
function Vf(e, t, r) {
  const n = wv(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = qh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const k = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - a[f - 1].x) > i * 0.5 && (p += p < a[f - 1].x ? i : -i), a.push({ x: p, y: k });
  }
  if (rd(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const p = a[f], k = { x: (c.x + p.x) * 0.5, y: (c.y + p.y) * 0.5 };
    f === 1 ? u = ms(s, d.x, d.y, k.x, k.y, u) : u = Ba(s, l, d, k, p, u), l = c, c = p, d = k;
  }
  a.length === 2 ? ms(s, d.x, d.y, c.x, c.y, u) : Ba(s, l, d, c, c, u), e.restore();
}
function xa(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = Ev(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = _v(n[f]);
    let k = Number(p.x || 0) * i;
    f > 0 && Math.abs(k - a[f - 1].x) > i * 0.5 && (k += k < a[f - 1].x ? i : -i), a.push({ x: k, y: Number(p.y || 0) * o }), k < l && (l = k), k > c && (c = k);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let p = 1; p < a.length; p++) e.lineTo(a[p].x + f, a[p].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function oa(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    xa(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Vf(e, t, r) : (Ro = ti(Ro, r.width, r.height), qt(Ro), Vf(Ro.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Ro.canvas, 0, 0), e.restore());
}
function vi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ms(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    rd(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ba(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, p = f + c, k = f - u, h = 16;
  let m = o, b = r.x, G = r.y;
  for (let L = 1; L <= h; L++) {
    const oe = u + k * L / h, I = ((u - oe) * t.x + (oe - d) * r.x) / (u - d), J = ((u - oe) * t.y + (oe - d) * r.y) / (u - d), T = ((f - oe) * r.x + (oe - u) * n.x) / (f - u), B = ((f - oe) * r.y + (oe - u) * n.y) / (f - u), ve = ((p - oe) * n.x + (oe - f) * i.x) / (p - f), _e = ((p - oe) * n.y + (oe - f) * i.y) / (p - f), he = ((f - oe) * I + (oe - d) * T) / (f - d), ye = ((f - oe) * J + (oe - d) * B) / (f - d), de = ((p - oe) * T + (oe - u) * ve) / (p - u), we = ((p - oe) * B + (oe - u) * _e) / (p - u), ue = ((f - oe) * he + (oe - u) * de) / (f - u), V = ((f - oe) * ye + (oe - u) * we) / (f - u);
    m = ms(e, b, G, ue, V, m), b = ue, G = V;
  }
  return m;
}
function Ov(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const p = qh(i, n, o), k = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), h = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), m = String((n == null ? void 0 : n.toolKind) || "") === "eraser", b = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", rd(p, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: p.stampTex,
      radiusPx: p.radiusPx,
      spacingPx: p.spacingPx,
      aspect: p.aspect,
      angle: p.angle,
      stampKind: p.stampKind,
      scatter: p.scatter,
      latitudeCorrection: p.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: h,
      distSinceStamp: 0,
      isEraser: m,
      layerKind: b,
      pointCount: 1
    }, un(e);
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
  l.pointCount === 1 ? l.distSinceStamp = ms(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Ba(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, un(e);
}
function Ll(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Zi(t, r), s = {
    descriptor: n,
    committedMask: Zi(t, r),
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
    committedPaint: Zi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Zi(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let p = null;
  function k(de) {
    return {
      actionGroupId: de,
      descriptor: n,
      committedPaint: Zi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function h(de) {
    let we = i.get(de);
    return we || (we = k(de), i.set(de, we)), we;
  }
  function m(de) {
    return d === "mask" ? s : c ? h(c) : a;
  }
  function b(de) {
    var x;
    const we = !u || u.length !== de.length || de.some((v, w) => v !== u[w]), ue = d === "paint" && ((x = c ? i.get(c) : a) == null ? void 0 : x.activeStroke) || null;
    let V = s.displayDirty || a.displayDirty || we;
    for (const v of de) {
      const w = i.get(v);
      if (w != null && w.displayDirty) {
        V = !0;
        break;
      }
    }
    if (ue && (V = !0), !V) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const v of de) {
      const w = i.get(v);
      w && (w.displayDirty = !1);
    }
    u = [...de];
    const ie = l.ctx;
    qt(l);
    const te = !!(ue != null && ue.isEraser);
    for (const v of de) {
      const w = i.get(v);
      if (!w) continue;
      const X = c === w.actionGroupId && d === "paint" ? w.activeStroke : null;
      if (te)
        Yt = ti(Yt, t, r), qt(Yt), Yt.ctx.drawImage(w.committedPaint.canvas, 0, 0), vi(Yt.ctx, o.canvas), ie.drawImage(Yt.canvas, 0, 0);
      else if (ie.drawImage(w.committedPaint.canvas, 0, 0), X) {
        const O = w.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, X.strokeOpacity ?? 1));
        ie.save(), ie.globalAlpha = O, ie.drawImage(o.canvas, 0, 0), ie.restore();
      }
    }
  }
  function G(de) {
    var ue, V, ie, te, x;
    for (const v of i.values())
      qt(v.committedPaint), qt(v.currentStroke), v.activeStroke = null, un(v);
    qt(s.committedMask), qt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), un(s), un(a), u = null;
    const we = [
      ...Array.isArray((V = (ue = de == null ? void 0 : de.painting) == null ? void 0 : ue.paint) == null ? void 0 : V.strokes) ? de.painting.paint.strokes : [],
      ...Array.isArray((te = (ie = de == null ? void 0 : de.painting) == null ? void 0 : ie.mask) == null ? void 0 : te.strokes) ? de.painting.mask.strokes : []
    ];
    for (const v of we) {
      if (((x = v == null ? void 0 : v.targetSpace) == null ? void 0 : x.kind) !== "ERP_GLOBAL") continue;
      const w = String((v == null ? void 0 : v.layerKind) || "paint"), X = String((v == null ? void 0 : v.toolKind) || "pen") === "eraser";
      if (w === "mask") {
        const O = s.descriptor;
        X ? (Yt = ti(Yt, O.width, O.height), qt(Yt), oa(Yt.ctx, v, O), vi(s.committedMask.ctx, Yt.canvas)) : (oa(s.committedMask.ctx, v, O), s.painted = !0);
        continue;
      }
      if (X) {
        Yt = ti(Yt, n.width, n.height), qt(Yt), oa(Yt.ctx, v, n);
        for (const O of i.values())
          vi(O.committedPaint.ctx, Yt.canvas), un(O);
      } else {
        const O = String((v == null ? void 0 : v.actionGroupId) || "__default__"), S = h(O), W = S.descriptor;
        oa(S.committedPaint.ctx, v, W), un(S);
      }
    }
    b([...i.keys()]);
  }
  function L(de, we) {
    d = String((de == null ? void 0 : de.layerKind) || "");
    const ue = String((de == null ? void 0 : de.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, qt(s.currentStroke), s.activeStroke = null, un(s);
    else {
      const V = ue ? a : h(String((de == null ? void 0 : de.actionGroupId) || "__default__"));
      c = ue ? "" : String((de == null ? void 0 : de.actionGroupId) || "__default__"), qt(V.currentStroke), V.activeStroke = null, un(V);
    }
  }
  function oe(de, we) {
    var w;
    const ue = String((de == null ? void 0 : de.layerKind) || "paint"), V = String((de == null ? void 0 : de.toolKind) || "") === "eraser", ie = ue === "mask" ? s : V ? a : h(String((de == null ? void 0 : de.actionGroupId) || c || "__default__")), te = ie.activeStroke, x = ie.descriptor;
    if (te && te.pointCount > 1) {
      const Z = ie.currentStroke.ctx;
      Z.globalCompositeOperation = "source-over";
      const X = {
        ctx: Z,
        stampTex: te.stampTex,
        radiusPx: te.radiusPx,
        spacingPx: te.spacingPx,
        desc: x,
        aspect: te.aspect,
        angle: te.angle,
        stampKind: te.stampKind,
        scatter: te.scatter,
        latitudeCorrection: te.latitudeCorrection
      };
      te.pointCount === 2 ? ms(X, te.lastMidX, te.lastMidY, te.prev.x, te.prev.y, te.distSinceStamp) : Ba(X, te.pprev, { x: te.lastMidX, y: te.lastMidY }, te.prev, te.prev, te.distSinceStamp);
    }
    ie.lassoPreviewActive && (qt(ie.currentStroke), xa(ie.currentStroke.ctx, de, x), ie.lassoPreviewActive = !1);
    const v = ue === "mask" ? s.committedMask : ie.committedPaint;
    if (V && ue === "paint")
      for (const Z of i.values())
        vi(Z.committedPaint.ctx, ie.currentStroke.canvas), un(Z);
    else if (V)
      vi(v.ctx, ie.currentStroke.canvas);
    else {
      ue === "mask" && (s.painted = !0);
      const Z = Math.max(0, Math.min(1, (te == null ? void 0 : te.strokeOpacity) ?? 1));
      v.ctx.save(), v.ctx.globalAlpha = Z, v.ctx.drawImage(ie.currentStroke.canvas, 0, 0), v.ctx.restore();
    }
    vv() && (String((de == null ? void 0 : de.toolKind) || ""), String((x == null ? void 0 : x.kind) || ""), Number((x == null ? void 0 : x.width) || 0), Number((x == null ? void 0 : x.height) || 0), String(((w = de == null ? void 0 : de.targetSpace) == null ? void 0 : w.viewMode) || ""), Number((de == null ? void 0 : de.aspect) ?? 1), Tf(ie.currentStroke.canvas), Tf(v.canvas), void 0), qt(ie.currentStroke), ie.activeStroke = null, un(ie), f.clear(), c = null, d = "", b([...i.keys()]);
  }
  function I(de) {
    if (d === "mask")
      qt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, un(s);
    else if (d === "paint" && !c)
      qt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, un(a);
    else if (c) {
      const we = i.get(c);
      we && (qt(we.currentStroke), we.activeStroke = null, we.lassoPreviewActive = !1, un(we));
    }
    f.clear(), c = null, d = "", b([...i.keys()]);
  }
  function J(de, we) {
    var V;
    if (d = String((de == null ? void 0 : de.layerKind) || ""), String(((V = de == null ? void 0 : de.geometry) == null ? void 0 : V.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        qt(s.currentStroke), xa(s.currentStroke.ctx, de, s.descriptor), s.lassoPreviewActive = !0, un(s);
      else {
        const ie = String((de == null ? void 0 : de.toolKind) || "") === "eraser", te = ie ? a : h(String((de == null ? void 0 : de.actionGroupId) || c || "__default__"));
        c = ie ? "" : String((de == null ? void 0 : de.actionGroupId) || c || "__default__"), qt(te.currentStroke), xa(te.currentStroke.ctx, de, te.descriptor), te.lassoPreviewActive = !0, un(te);
      }
      b([...i.keys()]);
    }
  }
  function T(de) {
    return b(de ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function B(de) {
    return i.get(String(de)) ?? null;
  }
  function ve() {
    return [...i.keys()];
  }
  function _e(de) {
    var Z;
    const we = i.get(String(de));
    if (!we) return null;
    const ue = d === "paint" && c === we.actionGroupId, V = d === "paint" && ((Z = c ? i.get(c) : a) == null ? void 0 : Z.activeStroke) || null, ie = !!(V != null && V.isEraser), te = ue ? we.activeStroke : null;
    if (!ie && !te) return we.committedPaint.canvas;
    const x = `${we.revision}:${a.revision}:${ie}`, v = f.get(we.actionGroupId);
    if ((v == null ? void 0 : v.key) === x) return v.surface.canvas;
    const w = ti((v == null ? void 0 : v.surface) ?? null, t, r);
    return qt(w), w.ctx.drawImage(we.committedPaint.canvas, 0, 0), ie ? vi(w.ctx, o.canvas) : (w.ctx.save(), w.ctx.globalAlpha = we.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, te.strokeOpacity ?? 1)), w.ctx.drawImage(o.canvas, 0, 0), w.ctx.restore()), f.set(we.actionGroupId, { key: x, surface: w }), w.canvas;
  }
  function he() {
    const de = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!de || de.isEraser) ? null : `${s.revision}:${!!de}`;
  }
  function ye() {
    const de = he();
    if (de === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === de) return p.surface.canvas;
    const we = ti((p == null ? void 0 : p.surface) ?? null, t, r);
    qt(we);
    const ue = d === "mask" ? s.activeStroke : null;
    return ue != null && ue.isEraser ? (Yt = ti(Yt, t, r), qt(Yt), Yt.ctx.drawImage(s.committedMask.canvas, 0, 0), vi(Yt.ctx, o.canvas), mc(we.ctx, Yt.canvas)) : (mc(we.ctx, s.committedMask.canvas), ue && mc(we.ctx, o.canvas)), p = { key: de, surface: we }, we.canvas;
  }
  return {
    rebuildCommitted: G,
    beginStroke: L,
    appendStrokePoint: Ov,
    updateActiveStroke: J,
    commitActiveStroke: oe,
    cancelActiveStroke: I,
    getErpTarget: T,
    ensureTarget: m,
    getGroupTarget: B,
    getGroupDisplayCanvas: _e,
    getMaskDisplayCanvas: ye,
    getMaskDisplayRevision: he,
    getAllGroupIds: ve
  };
}
function Oe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Gt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function id(e, t) {
  let r = Gt(t) - Gt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const eu = 3;
function Vo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ya(e, t = 0) {
  const r = Vo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Vo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Vo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Vo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Vo(t) || 0);
}
function Xh(e) {
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
const $f = Math.PI / 180, zf = 0.12, Fv = eu, Tv = 35, Dv = 140, Ko = 100, Lv = 20, jf = 0.8;
function Rv(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Oe(Number(e || Ko), 1, 179) * $f;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / $f;
}
function od(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ko })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(G, L = null) {
    a && a(G, L);
  }
  function d(G, L, oe = null, I = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(G || 0), l.drag.lastY = Number(L || 0), l.drag.lastTs = Number(I || performance.now()), l.drag.pointerId = oe, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: oe }), !0;
  }
  function u(G, L, oe = "pano", I = performance.now()) {
    if (!l.drag.active) return !1;
    const J = Number(I || performance.now()), T = Number(G), B = Number(L), ve = T - l.drag.lastX, _e = B - l.drag.lastY;
    l.drag.lastX = T, l.drag.lastY = B, l.drag.lastTs = J;
    const he = n() || { x: 1, y: 1 }, ye = Number(he.x || 1), de = Number(he.y || 1), we = { ...t() };
    let ue = 0, V = 0;
    if (oe === "unwrap") {
      const te = i() || { w: 1, h: 1 }, x = Math.max(1, Number(te.w || 1)), v = Math.max(1, Number(te.h || 1)), w = ve / x, Z = _e / v;
      ue = -w * 360 * ye, V = Z * 180 * de;
    } else {
      const te = o() || { w: 0, h: 0 }, x = Math.max(1, Number(te.w || 0)), v = Math.max(1, Number(te.h || 0));
      if (x > 1 && v > 1) {
        const w = Oe(Number(we.fov || Ko), 1, 179), Z = Oe(Rv(w, x, v), 0.1, 179);
        ue = -(ve / x) * w * ye, V = _e / v * Z * de;
      } else
        ue = -ve * zf * ye, V = _e * zf * de;
    }
    we.yaw = Gt(Number(we.yaw || 0) + ue), we.pitch = Oe(Number(we.pitch || 0) + V, -89.9, 89.9), r(we), l.velHistory.push({ ts: J, yaw: we.yaw, pitch: we.pitch });
    let ie = 0;
    for (; ie < l.velHistory.length - 1 && l.velHistory[ie].ts < J - 100; ) ie++;
    return ie > 0 && l.velHistory.splice(0, ie), l.inertia.active = !1, l.inertia.lastTs = J, s(), c("drag", { phase: "move", dx: ve, dy: _e, dYaw: ue, dPitch: V }), !0;
  }
  function f(G = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const L = Number(G || performance.now());
    l.drag.lastTs = L;
    const oe = l.velHistory.filter((J) => L - J.ts <= 80);
    if (oe.length >= 2) {
      const J = oe[0], T = oe.at(-1), B = Math.max(1e-3, (T.ts - J.ts) / 1e3);
      let ve = T.yaw - J.yaw;
      ve > 180 && (ve -= 360), ve < -180 && (ve += 360), l.inertia.vx = ve / B, l.inertia.vy = (T.pitch - J.pitch) / B;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const I = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = I > Lv, l.inertia.lastTs = L, c("drag", { phase: "end", speed: I, inertiaActive: l.inertia.active }), !0;
  }
  function p(G = performance.now()) {
    if (!l.inertia.active) return !1;
    const L = Number(G || performance.now()), oe = Math.max(1e-3, (L - (l.inertia.lastTs || L)) / 1e3);
    l.inertia.lastTs = L;
    const I = { ...t() };
    I.yaw = Gt(Number(I.yaw || 0) + l.inertia.vx * oe), I.pitch = Oe(Number(I.pitch || 0) + l.inertia.vy * oe, -89.9, 89.9);
    const J = Math.exp(-5.5 * oe);
    return l.inertia.vx *= J, l.inertia.vy *= J, Math.abs(l.inertia.vx) < jf && Math.abs(l.inertia.vy) < jf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(I), s(), l.inertia.active;
  }
  function k() {
    const G = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], G;
  }
  function h(G) {
    const L = Math.sign(Number(G || 0));
    if (!L) return !1;
    const oe = { ...t() }, I = Number(oe.fov || Ko);
    return oe.fov = Oe(I + L * Fv, Tv, Dv), r(oe), s(), c("wheel", { deltaSign: L, fovBefore: I, fovAfter: oe.fov }), !0;
  }
  function m(G, L = 0) {
    return h(Ya(G, L));
  }
  function b() {
    r({ yaw: 0, pitch: 0, fov: Ko }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: p,
    stopMotion: k,
    applyWheel: h,
    applyWheelEvent: m,
    resetView: b
  };
}
const _t = Math.PI / 180, nn = 180 / Math.PI;
function Jn(e, t, r) {
  return { x: e, y: t, z: r };
}
function qa(e, t) {
  return Jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Xa(e, t) {
  return Jn(e.x * t, e.y * t, e.z * t);
}
function gc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function sd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Jn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const r = e * _t, n = t * _t, i = Math.cos(n);
  return Jn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function wo(e, t, r = 0) {
  const n = Number(e || 0) * _t, i = Number(t || 0) * _t, o = r * _t, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Jn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Jn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Jn(a * l, c, s * l)
  };
}
function Ja(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Vv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function $v(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = It(n.z_index ?? n.zIndex, t.length);
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
function zv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function jv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = It(e.t, 0), n = It(e.widthScale, null), i = It(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = It(e.u, null), s = It(e.v, null);
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
    const o = It(e.u, null), s = It(e.v, null);
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
function sa(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = jv(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Hv(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = sa(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = sa(e.points, t, 1);
  if (!o) return null;
  const s = sa(e.rawPoints, t, 1), a = sa(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function Gv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = zv(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Hv(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = It(e.size, null), s = It(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = It(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, It(f.r, 0))),
      g: Math.max(0, Math.min(1, It(f.g, 0))),
      b: Math.max(0, Math.min(1, It(f.b, 0))),
      a: Math.max(0, Math.min(1, It(f.a, 1)))
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
    hardness: It(e.hardness, null),
    flow: It(e.flow, null),
    spacing: It(e.spacing, null),
    createdAt: Math.trunc(It(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function Hf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Gv(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Kv(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function Wv(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function Uv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Kv(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Wv(e.transform)
  } : null;
}
function Bv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Uv(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function xo(e) {
  const t = Vv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: $v(e.groups),
    paint: Hf(e.paint, "paint"),
    mask: Hf(e.mask, "mask"),
    raster_objects: Bv(e.raster_objects)
  };
}
const Zn = 1, Qn = 179, tu = 85;
function Rl(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Jh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Zh(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * nn;
  return r && (n = Math.round(n / 15) * 15), Rl(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Oe(ot(e.hFOV_deg || 90, 90), Zn, Qn), r = Oe(ot(e.vFOV_deg || 60, 60), Zn, Qn), n = Math.tan(t * _t * 0.5), i = Math.tan(r * _t * 0.5);
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
function Di(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function ad(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function ld(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(n / (2 * r)) * nn, Zn, Qn), s = Oe(2 * Math.atan(i / (2 * r)) * nn, Zn, Qn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function Yv(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function cd(e, t, r = tu) {
  const n = Math.max(1e-12, ot(t, 1)), i = Oe(ot(r, tu), 1, 89.999), o = n * Math.tan(i * _t), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Qh(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function qv(e, t) {
  const r = Oe(ot(e, 90), Zn, Qn), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) / n) * nn,
    Zn,
    Qn
  );
}
function ka(e, t) {
  const r = Oe(ot(e, 60), Zn, Qn), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * _t * 0.5) * n) * nn,
    Zn,
    Qn
  );
}
function Gf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Xv(e, t) {
  const r = Gf(e, 1), n = Gf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Vi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * _t, r = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * _t;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ei(e) {
  const t = Vi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Xv(t, 1);
}
function ud(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ei(t), t;
}
function em({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, Zn, Qn) : Oe(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return ud({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Oe(ot(r, 0), -89.9, 89.9),
    roll_deg: Rl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ei(e);
}
function tm(e, t) {
  const r = ui(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * nn, o = 2 * Math.atan(r.tanHalfY * n) * nn;
  return i < Zn || i > Qn || o < Zn || o > Qn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function nm(e, t, r = eu) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, eu));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < Zn || s > Qn) return null;
  const a = Math.tan(s * _t * 0.5);
  return tm(e, a / o.tanHalfX);
}
function rm(e, t) {
  const r = ui(e), n = wo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return sd(qa(qa(n.fwd, Xa(n.right, i)), Xa(n.up, o)));
}
function Jv(e) {
  return Jn(e.x, e.y, -e.z);
}
function Ma(e) {
  return Jn(e.x, e.y, -e.z);
}
function Pn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = wo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function im(e) {
  const t = Ma(Jn(e[0][0], e[1][0], e[2][0])), r = Ma(Jn(e[0][1], e[1][1], e[2][1])), n = Ma(Jn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * nn, pitchDeg: o * nn, rollDeg: l * nn };
}
function gs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function di(e) {
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
function aa(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Pi = 1e-6, nu = 1e-6, Zv = 1e-9;
function ys(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function Qv(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    ys(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return ys(0, n, o, 1, 0.5 * (s + a));
}
function go(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function yo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, p, k) => f + p * a[k], 0) < 0) return r.map(() => 0);
  const l = s.map((f, p) => (f * o + a[p] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((p, k) => p + k * k, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function om(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  go(e, n) && (l = yo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return go(e, n + 1) && (c = yo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function sm(e, t, r, n, i) {
  const [[o], [s]] = om(e, t, r.map((a) => [a]), n);
  return ys(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function e1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = om(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ys(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Za([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function t1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function yc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function n1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function ru(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ro(e, t) {
  return n1(Za([-e[0], -e[1], -e[2], e[3]], t));
}
function bc(e, t, r) {
  return Za(e, ru(ro(e, t).map((n) => r * n)));
}
function vc(e, t) {
  const r = t1(e, t);
  if (Math.abs(r) > nu) return r < 0;
  const [n, i, o] = ro(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > nu) return s < 0;
  return !1;
}
function la(e) {
  const { x: t, y: r, z: n, w: i } = di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function iu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function r1(e, t, r, n) {
  const i = la(e[r].value);
  let o = la(e[r + 1].value);
  vc(i, o) && (o = yc(o));
  const s = t[r + 1] - t[r], a = ro(i, o);
  let l = a;
  if (go(e, r)) {
    let I = la(e[r - 1].value);
    vc(I, i) && (I = yc(I)), l = yo(t, r, ro(i, I), a).map((J) => J * s);
  }
  let c = a;
  if (go(e, r + 1)) {
    let I = la(e[r + 2].value);
    vc(o, I) && (I = yc(I)), c = yo(t, r + 1, ro(o, i), ro(o, I)).map((J) => J * s);
  }
  const d = Za(i, ru(l.map((I, J) => 0.5 * (I - a[J])))), u = Za(o, ru(a.map((I, J) => 0.5 * (I - c[J])))), [f, p, k, h] = bc(bc(i, o, n), bc(d, u, n), 2 * n * (1 - n)), { yawDeg: m, pitchDeg: b, rollDeg: G } = im(gs({ x: f, y: p, z: k, w: h })), L = e[r].value, oe = e[r + 1].value;
  return {
    yaw_deg: iu(m, L.yaw_deg, oe.yaw_deg, n),
    pitch_deg: b,
    roll_deg: iu(G, L.roll_deg, oe.roll_deg, n)
  };
}
function bs(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Qa(e) {
  return Math.sqrt(bs(e, e));
}
function el(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function am(e, t) {
  const r = bs(e, t), n = t.map((s, a) => s - r * e[a]), i = Qa(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Qi(e, t) {
  const r = Qa(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ca(e, t, r) {
  return Qi(e, am(e, t).map((n) => r * n));
}
function Sc(e, t) {
  const r = el(e[t].value), n = el(e[t + 1].value), i = bs(r, n), o = i < 0 && Qa(n.map((l, c) => l - i * r[c])) <= nu;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = am(r, n);
  const a = Qa(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function i1(e, t, r, n) {
  const i = el(e[r].value), o = el(e[r + 1].value), [s, a, l] = Sc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  go(e, r) && (c = yo(t, r, Sc(e, r - 1)[1].map((L) => -L), c).map((L) => L * u)), go(e, r + 1) && (d = yo(t, r + 1, d.map((L) => -L), Sc(e, r + 1)[0]).map((L) => L * u));
  let f, p, k;
  if (l) {
    const L = Math.PI, oe = ys(0, bs(c, s) / L / 3, L - bs(d, a) / L / 3, L, n);
    [f, p, k] = Qi(i, s.map((I) => oe * I / L));
  } else {
    const L = ca(Qi(i, c.map((J) => J / 3)), Qi(o, d.map((J) => -J / 3)), n), oe = ca(Qi(i, c.map((J) => n * J / 3)), L, n), I = ca(L, Qi(o, d.map((J) => -(1 - n) * J / 3)), n);
    [f, p, k] = ca(oe, I, n);
  }
  const h = Math.hypot(f, k), m = e[r].value.yaw_deg, b = e[r + 1].value.yaw_deg;
  return { yaw_deg: h <= Zv ? m + (b - m) * n : iu(Math.atan2(f, k) * 180 / Math.PI, m, b, n), pitch_deg: Math.atan2(p, h) * 180 / Math.PI };
}
function o1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = sm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function s1(e, t, r, n) {
  return sm(e, t, e.map((i) => i.value), r, n);
}
const a1 = { position: e1, rotation: r1, direction: i1, size: o1 };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return aa(e[t].value);
  if (r <= n[0].frame + Pi) return aa(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Pi) return aa(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Pi; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Pi || s.easing === "hold") return aa(s.value);
  const a = n.map((c) => c.frame), l = Qv(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (a1[t] ?? s1)(n, a, o, l);
}
function ou(e) {
  return Math.min(179, Math.max(0.1, e));
}
function l1(e) {
  return Math.min(1, Math.max(0, e));
}
function lm(e) {
  return Math.max(1e-6, e);
}
function cm(e, t) {
  return t - (e.start - e.in);
}
function ko(e, t) {
  return t >= e.start - Pi && (e.duration === null || t < e.start + e.duration - Pi);
}
function Vl(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: ou(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Os(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = cm(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Vl(n, r),
    scene: {
      active: i.visible && ko(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: lm(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function c1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: lm(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: ou(r.hFOV_deg),
    vFOV_deg: ou(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = cm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ko(e.clip, t),
    clip_frame: r,
    ...c1(e, r),
    opacity: l1(Wt(e, "opacity", r))
  };
}
const u1 = 2, um = ["sky", "world"], su = ["perspective", "erp"], d1 = ["input", "output", "temp"], dm = [0.42, 0, 0.58, 1], fm = 1, dd = 1e3, au = 1e7, fd = au, pd = Number.MAX_SAFE_INTEGER, f1 = /^sticker_([0-9]{1,16})$/;
function Vt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function hd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function kn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function si(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Pa(e) {
  const t = si(e);
  return t === null ? null : kn(t, -au, au);
}
function fi(e) {
  const t = hd(e, null);
  return t === null ? null : kn(t, fm, dd);
}
function pm(e) {
  const t = si(e);
  return t !== null && t >= 1 ? Math.min(t, fd) : null;
}
function vs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function hm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function mm(e) {
  return hm(e) || [0, 0, 0];
}
function gm(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: kn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function p1(e) {
  return kn(Zt(e, 90), 0.1, 179);
}
function h1(e) {
  return hd(e, 1);
}
function m1(e) {
  const t = Vt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: kn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function g1(e) {
  return Zt(e, 0);
}
function y1(e) {
  const t = Vt(e) ? e : {};
  return {
    hFOV_deg: kn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: kn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function ym(e) {
  return kn(Zt(e, 1), 0, 1);
}
const $l = [["position", mm], ["rotation", gm], ["fov", p1]], zl = [["position", mm], ["rotation", gm], ["scale", h1]], $i = [["direction", m1], ["roll", g1], ["size", y1], ["opacity", ym]], zi = [...zl, ["opacity", ym]];
function b1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...dm];
}
function v1(e) {
  if (!Vt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = hm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function S1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Vt(i)) continue;
    const o = Pa(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: b1(i.easing) }, a = r ? v1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function jl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Vt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: S1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Hl(e) {
  const t = Vt(e) ? e : {}, r = Pa(t.start), n = Pa(t.in), i = Pa(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function bm(e) {
  const t = Vt(e) ? e : {}, r = kn(Zt(t.x0, 0), 0, 1), n = kn(Zt(t.y0, 0), 0, 1), i = kn(Zt(t.x1, 1), 0, 1), o = kn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function _1(e) {
  if (!Vt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: d1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function w1(e) {
  const t = _1(e.source);
  if (!t) return null;
  const r = um.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Hl(e.clip),
    visible: vs(e.visible, !0),
    locked: vs(e.locked, !1),
    crop: bm(e.crop),
    ...jl(e, n ? zi : $i)
  };
  return n || (i.z_index = si(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = x1(e.handoff_overrides, r)), i;
}
function x1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? zi : $i).map(([n]) => n).filter((n) => r.includes(n));
}
function k1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Vt(s) ? w1(s) : null;
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
  let o = P1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, pd) };
}
function M1(e) {
  const t = typeof e == "string" ? f1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < pd ? r : 0;
}
function vm(e) {
  return e.reduce((t, r) => Math.max(t, M1(r.id)), 0) + 1;
}
function P1(e, t) {
  const r = si(e), n = vm(t);
  return kn(r === null ? n : Math.max(r, n), 1, pd);
}
function N1(e) {
  if (!Vt(e)) return null;
  const t = su.includes(e.projection) ? e.projection : su[0];
  return { aspect: hd(e.aspect, 1), projection: t, visible: vs(e.visible, !0), ...jl(e, $l) };
}
function tl(e) {
  return typeof e == "string" && e ? e : null;
}
function Sm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function A1(e) {
  if (!Vt(e) || tl(e.id) === null || !um.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Vt(e.clip) && (r.clip = Hl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Vt(e.crop) && (r.crop = bm(e.crop)), Object.assign(r, jl(e, (t ? zi : $i).filter(([i]) => Vt(e[i]))));
  const n = t ? null : si(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function _m(e) {
  const t = Vt(e) ? fi(e.fps) : null;
  if (t === null || tl(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => tl(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(A1).filter((c) => c !== null), i = Sm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Vt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Vt(o.clip) && (s.clip = Hl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function C1(e) {
  const t = (Array.isArray(e) ? e : []).map(_m).filter((r) => r !== null);
  return Sm(t, (r) => r.layer);
}
function nl(e) {
  const t = Vt(e.timeline) ? e.timeline : {}, r = Vt(e.scene) ? e.scene : {}, { stickers: n, next: i } = k1(e.stickers, e.next_sticker_id);
  return {
    version: u1,
    id: tl(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: pm(t.length)
    },
    camera: N1(e.camera),
    scene: { clip: Hl(r.clip), visible: vs(r.visible, !0), ...jl(r, zl) },
    stickers: n,
    next_sticker_id: i,
    painting: xo(e.painting),
    painting_layer: Vt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: vs(e.painting_visible, !0),
    upstream: C1(e.upstream)
  };
}
function I1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Vt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function E1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Vt(t)) return null;
  const r = kn(Zt(t.hFOV_deg, 90), 1, 179), n = kn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function O1(e) {
  const t = Vt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Vt) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), nl({
    camera: E1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: I1(n, t),
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
function er(e) {
  if (e == null || typeof e == "string" && !e.trim()) return nl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Vt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? O1(t) : nl(t);
}
const _c = {
  state: { painting_visible: !0 },
  camera: { projection: su[0], visible: !0 },
  scene: { visible: !0 }
};
function wc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function lu(e) {
  const t = wc(e, _c.state);
  return t.id === null && delete t.id, t.next_sticker_id === vm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && wc(e.camera, _c.camera),
    scene: wc(e.scene, _c.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function os(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function rl(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Mo(e, t) {
  const r = fi(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => si(a * n), { length: o } = e.timeline, s = rl(e.scene.clip, i);
  return nl({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...os(e.camera, $l, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...os(e.scene, zl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = rl(a.clip, i), u = a.placement === "world" ? zi : $i;
      return { ...a, clip: l, ...os(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream
  });
}
function wm(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => si(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? zi : $i).filter(([p]) => Object.hasOwn(l, p));
    if (!Object.hasOwn(l, "clip")) {
      const p = o.get(l.id) ?? 0, k = si(p * (e.fps / r));
      return { ...l, ...os(l, c, i, k, p) };
    }
    const { clip: d, anchor: u, newAnchor: f } = rl(l.clip, i);
    return { ...l, clip: d, ...os(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: rl(e.scene.clip, i).clip } : e.scene;
  return _m({ ...e, fps: r, stickers: s, scene: a });
}
function xc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function xm(e) {
  return Array.isArray(e) ? [...e] : e;
}
function km(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Pi);
}
function Mm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? xm(e.keyframes[n - 1].easing) : [...dm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = xc(i.value, n);
    return;
  }
  const o = km(i, r);
  o ? o.value = xc(o.value, n) : Mm(i, r, xc(Wt(e, t, r), n));
}
function Po(e) {
  return e.placement === "world" ? zi.map(([t]) => t) : e.placement === "sky" ? $i.map(([t]) => t) : (e.clip ? zl : $l).map(([t]) => t);
}
function F1(e, t) {
  for (const r of Po(e))
    km(e[r], t) || Mm(e[r], t, Wt(e, r, t));
}
function T1(e) {
  const t = Po(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function kc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function D1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function L1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function R1(e, t, r, n, i) {
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
function Pm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function V1(e, t, r) {
  const n = Pm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function $1(e, t, r, n) {
  for (const i of Pm(e, t, r)) i.easing = xm(n);
}
function z1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function j1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function H1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function G1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function cu(e) {
  return Po(e).map((t) => e[t]);
}
function il(e) {
  return cu(e).some((t) => t.keyframes.length > 0) || !!e.clip && !G1(e.clip);
}
function Nm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(il);
}
const K1 = 1e5;
function Am(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of cu(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of cu(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : K1;
}
function W1(e) {
  return e > 0 ? fi(Math.min(e, dd)) : null;
}
function U1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : pm(Math.max(1, Math.min(e, fd)));
}
const Mc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], B1 = 2e3;
function Y1(e, t, r = 56) {
  const n = Mc.find((o) => o * t >= r) || Mc[Mc.length - 1], i = [];
  for (let o = 0; o < e && i.length < B1; o += n) i.push(o);
  return i;
}
function q1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let ua = { text: null, parsed: null };
function Ln(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ol(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function X1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ln(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: xo(null),
    painting_layer: null,
    ui_settings: ol(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Cm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function J1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function Z1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Q1(e) {
  return Array.isArray(e) ? e.map((t) => ud(t)) : [];
}
function eS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Im(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = X1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (ua.text === i ? o = ua.parsed : (o = JSON.parse(i), ua = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: J1(o.assets),
      stickers: Z1(o.stickers),
      shots: Q1(o.shots),
      painting: xo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ol(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = ol({ ...a.ui_settings, ...s })), a.output_preset = Cm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Ln(r.coverage), delete a.editor_history, a;
  } catch {
    return ua = { text: i, parsed: null }, n;
  }
}
function tS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function nS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function rS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Em(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = er(e);
  } catch {
    l = er(null);
  }
  return a && a !== l.timeline.fps && (l = Mo(l, a)), {
    ...l,
    coverage: Ln(i),
    bg_color: n,
    output_preset: Cm(r),
    ui_settings: ol(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function iS(e, t) {
  const r = Mo(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Po(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Om(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * _t, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / _t;
  return Math.min(179, Math.max(0.1, i));
}
function md(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Om(e, n, r), rot_deg: n.roll_deg };
}
const oS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Kf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function sS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[oS[r]].keyframes.length));
}
function Fm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Kf(r, ["yaw_deg", "pitch_deg"]), o = Kf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const Gl = ["position_x", "position_y", "position_z"], gd = "camera";
function Tm(e, t) {
  const r = Vl(e, t);
  return ud({
    id: gd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: qv(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function aS(e) {
  return er({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Gt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function lS(e) {
  return e - 360 * Math.round(e / 360);
}
function cS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + lS(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * _t * 0.5) / Math.tan(r.vFOV_deg * _t * 0.5)), r.position.some((o, s) => o !== n.position[s]) && mn(e, "position", t, [...r.position]);
}
function uS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Gl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function dS(e, t, r, n) {
  const i = Gl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function fS(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function pS(e, t) {
  const r = Wr(e, t);
  return {
    ...Object.fromEntries(Gl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function hS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Gl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, mn(e, "position", i, s);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function mS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function gS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function yS(e, t, r) {
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
function Na(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function sl(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Kl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function yd(e, t, r, n) {
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
function bS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Gt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Dm(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Lm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Rm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Wf(e, t) {
  return e != null && e.__panoSceneStateV2 ? lu(er(t)) : JSON.stringify(t);
}
const vS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function SS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => vS[e & 63]).join("");
}
function Vm(e, t, r, n) {
  const i = Wf(e, t);
  return _S(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = SS(), Wf(e, t));
}
function _S(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = er(r);
    if (lu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && lu(Mo(i, o)) === t;
  } catch {
    return !1;
  }
}
const Pc = 0.15, wS = 0.01, xS = 1e-3, kS = 0.05, MS = 4, Uf = 250, PS = 16, ur = 1, NS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Wl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function ji(e, t, r = 0) {
  const n = Pn(e, t, r), i = Mr(n, 2);
  return { right: Mr(n, 0), up: Mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function AS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function uu(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function CS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : uu(e, "3dof", r);
}
function IS(e) {
  return ji(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function ES(e) {
  return Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function pi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ss(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function bd(e, t) {
  return ss(pi(t, e.position), ji(e.yaw_deg, e.pitch_deg).forward);
}
function vd(e) {
  return Math.max(e, 1e-6) * kS;
}
function du(e, t, r = null, n = ur) {
  if (t) return t;
  const i = vd(n);
  if (r && bd(e, r) > 0) {
    const o = pi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function $m(e, t = ur) {
  return Math.max(e.distance, vd(t));
}
function zm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > MS ? !1 : t.time - e.time < Uf || e.cost > PS && t.time - e.wheelTime < Uf;
}
function Sd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * _t);
  return { tanX: n, tanY: n * r / t };
}
function jm(e, t, r, n, i = ES(e)) {
  const o = e.roll_deg ?? 0, [s, a] = OS(t, r, o), l = Gt(e.yaw_deg + s / n * 360), c = Oe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Pn(e.yaw_deg, e.pitch_deg, o), u = Pn(l, c, o), f = pi(e.position, i), p = [0, 1, 2].map((h) => ss(Mr(d, h), f)), k = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, Wl(u, p)) };
  return { ...k, distance: bd(k, i) };
}
function OS(e, t, r) {
  const n = Math.cos(r * _t), i = Math.sin(r * _t);
  return [e * n + t * i, t * n - e * i];
}
function Hm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = IS(e), l = 2 * o * Sd(e, n, i).tanY / i;
  return { ...e, position: Kn(Kn(e.position, s, -t * l), a, r * l), distance: o };
}
function Gm(e, t, r, n = ur) {
  const i = pi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * wS, l = r > 0 ? Math.min(Math.max(o * Pc, a), o - s * xS) : -Math.max(o * Pc / (1 - Pc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(bd(c, t), vd(n)) };
}
function FS(e, t, r, n) {
  const { tanX: i, tanY: o } = Sd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = ji(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function _d(e, t, r, n = null) {
  return Km({
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Sd(e, t, r).tanY) * nn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function Km(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: ur }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Ss(e, t, r, n) {
  const { right: i, up: o, forward: s } = Wm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * _t), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Wm(e) {
  const t = gs(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function al(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function TS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function wd(e, t) {
  if (!e || !t.active) return null;
  const r = DS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: fu(t),
    itemQuaternion: e.kind === "splat" ? NS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Um(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = wd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function Bm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function DS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function fu(e) {
  return {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function pu(e, t) {
  return Kn(e.position, Wl(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Aa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function hu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function mu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function LS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...hu(t).map((o) => pu(e.scene, o)));
  for (const o of r) i.push(...xd(o));
  for (const { box: o, value: s } of n) i.push(...hu(o).map((a) => pu(s, a)));
  return i;
}
function RS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Pn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function xd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, Wl(e.rotation, [n, i, 0])));
}
function VS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? mu(xd(i)) : o != null && o.box ? mu(hu(Aa(o.kind, o.box)).map((s) => pu(n, s))) : { center: [...n.position], radius: n.scale };
}
const $S = 2, zS = 0.5, jS = 30;
function Ym(e, t) {
  const r = pi(t, e), n = Math.atan2(r[0], -r[2]) * nn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * nn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function HS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * zS : $S, o = t ? [...t] : Kn(e.position, ji(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...pi(o, e.position)), a = s > 0 ? Ym(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(jS * 0.5 * _t);
  return { position: o, rotation: a, scale: l };
}
function Bf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function GS(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function Yf(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, pi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * YS(r.scale, n.scale) / r.scale };
  const i = Bf(gs(n.quaternion), GS(gs(r.quaternion))), o = Bf(i, Pn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = im(o);
  return Math.abs(a) <= KS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: WS(o, t.yaw_deg) } };
}
const KS = 89.9;
function WS(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * _t), o = Math.sin(t * _t);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * nn + 0;
}
const US = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function BS(e, t, r, n, i) {
  if (!Ss(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Wm(e), l = pi(t, e.position), c = ss(l, o), d = ss(l, s), u = ss(l, a), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect, k = Math.hypot(c, d, u) * US[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > k)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const h = (oe) => {
    const I = k * Math.sqrt(oe * oe + u * u - k * k);
    return [(oe * u - I) / (u * u - k * k), (oe * u + I) / (u * u - k * k)];
  }, [m, b] = h(c), [G, L] = h(d);
  return {
    minX: n * 0.5 * (1 + m / p),
    maxX: n * 0.5 * (1 + b / p),
    minY: i * 0.5 * (1 - L / f),
    maxY: i * 0.5 * (1 - G / f)
  };
}
function YS(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function qS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function qm(e, t) {
  const r = Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * _t) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, Wl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function XS(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Ss(e, s, n, i), c = Ss(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function JS(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function ZS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function QS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Xm = 0.28;
function Jm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * _t);
  return {
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * nn,
    aspect: n
  };
}
function as(e) {
  const t = ui(e);
  return {
    quaternion: di(Pn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Zm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = cd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * nn,
      vFOV_deg: 2 * Math.atan(o / n) * nn
    }
  };
}
function Qm(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = gs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * _t), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, h = 1e-4) {
      const m = Jv(k), b = n * m.x + s * m.y + c * m.z, G = i * m.x + a * m.y + d * m.z, L = -(o * m.x + l * m.y + u * m.z), oe = Math.max(L, h);
      return {
        x: t * 0.5 * (1 + b / oe / p),
        y: r * 0.5 * (1 - G / oe / f),
        z: L
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, h) {
      const m = (k / t * 2 - 1) * p, b = (1 - h / r * 2) * f;
      return sd(Ma({
        x: n * m + i * b - o,
        y: s * m + a * b - l,
        z: c * m + d * b - u
      }));
    }
  };
}
function eg(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Os(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * _t), p = Math.tan(Om(a, c, ng(u.media)) * 0.5 * _t), { crop: k } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Xm : c.opacity,
      zIndex: n(a),
      quaternion: di(Pn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * f,
        x1: (2 * k.x1 - 1) * f,
        y0: (1 - 2 * k.y1) * p,
        y1: (1 - 2 * k.y0) * p
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function tg(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return eg(e, t, {
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
function ng(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function rg(e, t, r, { media: n, evaluated: i = Os(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: p } = ng(u.media), k = RS(c, a.crop, f, p);
    k && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: k.position,
      quaternion: k.quaternion,
      rotation: k.rotation,
      width: k.width,
      height: k.height,
      crop: a.crop
    });
  }), s;
}
function e_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BVorUOAb.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Yh(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(h) {
      return l && !f.lost ? l.render(h) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(h) {
      return l && !f.lost ? l.renderUnwrap(h) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(h, m) {
      return l && !f.lost ? l.resize(h, m) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(h, m) {
      l && !f.lost && l.clear(h, m);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(h) {
      l && !f.lost && l.releaseSplats(h);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(h) {
      return l ? l.sceneBox(h) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(h, m, b, G, L) {
      return l && !f.lost ? l.pick(h, m, b, G, L) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(h, m, b, G, L) {
      return l && !f.lost ? l.pickSurface(h, m, b, G, L) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(h, m, b, G, L) {
      return l && !f.lost ? l.pickSticker(h, m, b, G, L) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(h, m, b, G, L, oe) {
      return l && !f.lost ? l.gizmoPointer(h, m, b, G, L, oe) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", k), l == null || l.dispose(), l = null;
    }
  };
  function p(h) {
    h.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function k() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", k), s().then((h) => {
    c || (a = h, !f.lost && (u(), f.ready = !0, t()));
  }).catch((h) => {
    console.error("[PanoramaStickers] three.js view is unavailable", h), f.failed = !0, r();
  }), f;
}
const ig = "3D view unavailable. Check the browser console.";
function ll(e, t, r) {
  return Jm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function t_(e) {
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
const og = t_(
  () => import("./.lazy/pano_three_view-BVorUOAb.js").then((e) => e.$).then((e) => Yh(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), dr = ["erp_image", "bg_erp", "bg_media"], kd = ["sticker_image", "sticker"], sg = ["scene"], Md = ["sticker", "sticker_state"], n_ = {
  background: dr,
  "external-sticker": kd,
  scene: sg,
  "sticker-handoff": Md
};
function ag(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Ul(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = ag(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function lg(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function qf(e, t) {
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
function cg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function r_(e, t) {
  const { graph: r, entry: n } = cg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = ag(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const ug = [...dr, ...kd, ...sg, ...Md], i_ = 256, eo = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new WeakMap();
let dg = () => null;
function fg(e) {
  return Nc.has(e) || Nc.set(e, JSON.stringify(e)), Nc.get(e);
}
function o_(e) {
  dg = e;
}
function cl(e, t) {
  const r = fg(e);
  eo.delete(r), eo.set(r, t), eo.size > i_ && eo.delete(eo.keys().next().value);
}
function Kt(e, t) {
  var o;
  const r = e ? dg(e) : null;
  if (!r) return !0;
  const n = Ul(e);
  let i = eo.get(fg(r));
  if (i)
    cl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => ug.includes(s == null ? void 0 : s.name)))) return !0;
    cl(r, n), i = n;
  }
  return n_[t].every((s) => i[s] === n[s]);
}
const ul = /* @__PURE__ */ new WeakSet();
async function gu(e, t) {
  if (ul.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && ul.add(e), r.ok && n !== void 0 ? n : null;
}
function pg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = cg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => ug.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: r_(r, t) };
}
const Ca = /* @__PURE__ */ new Map();
function s_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Ca.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await gu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = pg(i, o);
        s && cl(s.output, s.inputs);
      }
    });
}
const a_ = 5;
function l_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${a_}`, n = gu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, gu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: p } of await n) {
        if (!a()) return null;
        const k = await o(p);
        if ((c = k == null ? void 0 : k.outputs) != null && c[l])
          return ((f = (u = (d = k.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : pg(k, l);
      }
      return null;
    }
  };
}
function c_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Yi = null;
async function u_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || ul.has(r) || (a = Ca.get(i)) != null && a.has(n) || c_(t)) return null;
  (Yi == null ? void 0 : Yi.workflowId) !== i && (Yi = { workflowId: i, history: l_(r, i) }, queueMicrotask(() => {
    Yi = null;
  }));
  const s = await Yi.history.lastNodeOutput(e, o);
  return o() ? s ? (cl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (ul.has(r) || Ca.set(i, (Ca.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Xf(e, t, r, n = dr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Jf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ia(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Jf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Jf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ac = /* @__PURE__ */ new WeakMap();
function d_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function yu(e) {
  return d_(e) ? (Ac.has(e) || Ac.set(e, Math.random().toString(36).slice(2, 10)), Ac.get(e)) : "run";
}
function hg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function f_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Pd(e, t = [], r = null) {
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
function p_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Es(e, "looping-preview");
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
  let p = !1;
  const k = () => {
    p = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", k), n.src = t, n.load();
  const h = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, m = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var G, L;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", k), n.pause(), (G = n.removeAttribute) == null || G.call(n, "src"), (L = n.load) == null || L.call(n));
    },
    failed: () => p,
    play: h,
    pause: m,
    toggle() {
      n.paused ? h() : m();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const _s = /* @__PURE__ */ new WeakMap(), mg = {
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
function Fs(e, t) {
  if (!e || typeof e != "object") return null;
  let r = _s.get(e);
  return r || (r = {}, _s.set(e, r)), r[t] ?? (r[t] = mg[t]());
}
function Bl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = _s.get(e)) == null ? void 0 : r[t]) || null;
}
const dl = (e) => Fs(e, "editorSession"), bt = (e) => Fs(e, "nodeSurface"), $r = (e) => Fs(e, "previewNode"), Nn = (e) => Fs(e, "mediaCache"), Hn = (e) => Fs(e, "stateSync"), h_ = (e) => Bl(e, "editorSession"), gg = (e) => Bl(e, "nodeSurface"), yg = (e) => Bl(e, "previewNode");
function Cc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const m_ = {
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
      Cc(o == null ? void 0 : o.img), Cc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Cc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function g_(e, t) {
  const r = Bl(e, t);
  if (r)
    try {
      m_[t](r);
    } finally {
      delete _s.get(e)[t];
    }
}
function y_(e) {
  for (const t of Object.keys(mg))
    try {
      g_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && _s.delete(e);
}
function Si(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function b_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Zf(e, t, r = null) {
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
  return !n && r != null && (n = b_(e == null ? void 0 : e.graph, r)), n;
}
function v_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function S_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function __(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function bg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (I) => {
    if (!I) return "";
    if (typeof I == "string") return String(I || "").trim();
    if (Array.isArray(I)) {
      if (I.length === 0) return "";
      if (I.length === 1) return i(I[0]);
      const J = String(I[0] || "").trim();
      if (J)
        return Si(t, {
          filename: J,
          subfolder: String(I[1] || "").trim(),
          type: String(I[2] || "output").trim() || "output"
        });
      for (const T of I) {
        const B = i(T);
        if (B) return B;
      }
      return "";
    }
    return typeof (I == null ? void 0 : I.src) == "string" && I.src ? I.src : typeof (I == null ? void 0 : I.url) == "string" && I.url ? I.url : Si(t, I);
  }, o = (I) => {
    if (!I || typeof I != "object") return "";
    const J = String(I.type || "").trim().toLowerCase();
    if (J === "dataurl") return String(I.value || "");
    if (J !== "comfy_image") return "";
    const T = String(I.filename || "").trim();
    return T ? Si(t, {
      filename: T,
      subfolder: String(I.subfolder || ""),
      type: String(I.storage || "input")
    }) : "";
  }, s = (I) => {
    const J = e == null ? void 0 : e.nodeOutputs;
    if (!J || I == null) return null;
    const T = String(I);
    return J instanceof Map ? J.get(I) || J.get(T) || J.get(Number(T)) || null : J[I] || J[T] || null;
  }, a = (I, J) => {
    var B;
    const T = s(I == null ? void 0 : I.id);
    return Array.isArray((B = T == null ? void 0 : T.ui) == null ? void 0 : B[J]) ? T.ui[J] : Array.isArray(T == null ? void 0 : T[J]) ? T[J] : [];
  }, l = (I, J) => {
    const T = s(I == null ? void 0 : I.id);
    return T != null && T.ui && Object.prototype.hasOwnProperty.call(T.ui, J) ? T.ui[J] : T && Object.prototype.hasOwnProperty.call(T, J) ? T[J] : null;
  }, c = (I, J) => {
    const T = l(I, "pano_sticker_input_state_hash"), B = Array.isArray(T) ? T[0] : T;
    return String(B ?? "").trim() || __(J);
  }, d = (I) => {
    const J = [], T = /* @__PURE__ */ new Set();
    for (const B of I || []) {
      const ve = i(B);
      !ve || T.has(ve) || (T.add(ve), J.push(ve));
    }
    return J;
  }, u = (I, J) => {
    var ve;
    const T = [];
    Array.isArray(I == null ? void 0 : I.images) && I.images.length && T.push(I.images), Array.isArray((ve = I == null ? void 0 : I.ui) == null ? void 0 : ve.images) && I.ui.images.length && T.push(I.ui.images);
    const B = [];
    for (const _e of T)
      J >= 0 && J < _e.length && B.push(_e[J]), B.push(..._e);
    return B;
  }, f = (I, J) => {
    var x;
    const T = String(J || "").trim();
    if (!T) return { src: "", sourceType: "", inputName: "" };
    const ve = (Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : []).findIndex((v) => String((v == null ? void 0 : v.name) || "") === T);
    if (ve < 0) return { src: "", sourceType: "", inputName: T };
    const _e = I.graph ? I.getInputLink(ve) : null;
    if ((_e == null ? void 0 : _e.origin_id) == null) return { src: "", sourceType: "", inputName: T };
    const he = _e.origin_id, ye = Zf(I, ve, he);
    if (!ye) return { src: "", sourceType: "", inputName: T };
    const de = Number(_e.origin_slot ?? 0);
    let we = [];
    try {
      we = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ye) || [] : [];
    } catch {
      we = [];
    }
    if (Array.isArray(we) && we.length) {
      const v = [];
      de >= 0 && de < we.length && v.push(we[de]), v.push(...we);
      const w = d(v.filter((Z) => !Ia(Z)));
      if (w.length)
        return { src: w[0], srcCandidates: w, sourceType: "appNodeImageUrls", inputName: T };
    }
    const ue = s((ye == null ? void 0 : ye.id) ?? he), V = d(u(ue, de).filter((v) => !Ia(v))).map((v) => `${v}&pano_src=${yu(ue)}`);
    if (V.length)
      return { src: V[0], srcCandidates: V, sourceType: "nodeOutputs", inputName: T };
    const ie = Array.isArray(ye == null ? void 0 : ye.imgs) ? ye.imgs : [];
    if (ie.length) {
      const v = [];
      de >= 0 && de < ie.length && v.push(ie[de]), v.push(...ie);
      const w = d(v);
      if (w.length)
        return { src: w[0], srcCandidates: w, sourceType: "nodeImgs", inputName: T };
    }
    const te = (x = ye == null ? void 0 : ye.widgets) == null ? void 0 : x.find((v) => String((v == null ? void 0 : v.name) || "").toLowerCase() === "image");
    if (te) {
      let v = i(te.value);
      if (v && !v.includes("/") && !v.includes(":") && (ye.comfyClass === "LoadImage" || ye.type === "LoadImage") && (v = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(v)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(v)}&type=input&subfolder=`), v) return { src: v, sourceType: "widget", inputName: T };
    }
    return { src: "", sourceType: "", inputName: T };
  }, p = (I, J = []) => {
    var B;
    const T = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : [];
    for (const ve of J) {
      const _e = T.findIndex((we) => String((we == null ? void 0 : we.name) || "") === ve), he = _e >= 0 && I.graph ? I.getInputLink(_e) : null;
      if ((he == null ? void 0 : he.origin_id) == null) continue;
      const ye = s(((B = Zf(I, _e, he.origin_id)) == null ? void 0 : B.id) ?? he.origin_id), de = (Array.isArray(ye == null ? void 0 : ye.images) ? ye.images : []).find(Ia);
      return de ? `${Si(t, de)}&pano_src=${yu(ye)}` : "";
    }
    return "";
  }, k = (I, J = []) => {
    const T = Array.isArray(J) ? J : [J];
    for (const B of T) {
      const ve = f(I, B);
      if (String((ve == null ? void 0 : ve.src) || "").trim()) return ve;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, h = (I) => {
    const J = String(I || "").trim();
    if (!J) return [];
    if (v_(J)) return [J];
    const { filename: T, subfolder: B } = S_(J);
    return T ? d([
      Si(t, { filename: T, subfolder: B, type: "temp" }),
      Si(t, { filename: T, subfolder: B, type: "output" }),
      Si(t, { filename: T, subfolder: B, type: "input" }),
      J
    ]) : [J];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (I) => {
      var J;
      try {
        (J = Nn(I)) == null || J.linkedImages.forEach((T, B, ve) => {
          var _e;
          T != null && T.img && ((_e = n == null ? void 0 : n.isImageLoadFailed) != null && _e.call(n, T.img)) && ve.delete(B);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (I, J) => {
      var T;
      (T = I == null ? void 0 : I.delete) == null || T.call(I, `__ui__${String(J || "")}`);
    },
    linkedValue: (I, J) => {
      var he, ye, de, we;
      const T = String(J || ""), B = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs.findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === T) : -1, ve = B >= 0 && I.graph ? I.getInputLink(B) : null;
      if (ve) {
        const ue = s(ve.origin_id), V = [
          ue == null ? void 0 : ue.output,
          ue == null ? void 0 : ue.result,
          (he = ue == null ? void 0 : ue.data) == null ? void 0 : he.output,
          (ye = ue == null ? void 0 : ue.data) == null ? void 0 : ye.result,
          (de = ue == null ? void 0 : ue.ui) == null ? void 0 : de.output,
          (we = ue == null ? void 0 : ue.ui) == null ? void 0 : we.result
        ];
        for (const ie of V) {
          if (!Array.isArray(ie)) continue;
          const te = ie[Number(ve.origin_slot || 0)];
          if (typeof te == "string" && te.trim()) return te;
        }
      }
      const _e = Array.isArray(I == null ? void 0 : I.widgets) ? I.widgets.find((ue) => String((ue == null ? void 0 : ue.name) || "") === T) : null;
      return String((_e == null ? void 0 : _e.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (I, J = [], T = null, B = "") => {
      var O;
      const ve = Array.isArray(J) ? J : [J], _e = k(I, ve), ye = (Array.isArray(_e == null ? void 0 : _e.srcCandidates) && _e.srcCandidates.length ? _e.srcCandidates : [_e == null ? void 0 : _e.src]).map((S) => String(S || "").trim()).filter(Boolean);
      if (!ye.length) return null;
      const de = d(ye.flatMap((S) => h(S)));
      if (!de.length) return null;
      const we = Nn(I).linkedImages, ue = String(B || ve.join("|") || "image_exact"), V = ye.join(`
`), ie = we.get(ue);
      if (ie && ie.srcRaw === V && ie.img) return ie.img;
      const te = r || globalThis.Image;
      if (typeof te != "function") return null;
      const x = new te();
      (O = n == null ? void 0 : n.markImageLoading) == null || O.call(n, x, V);
      const v = { srcRaw: V, resolvedSrc: "", img: x };
      we.set(ue, v);
      let w = -1;
      const Z = (S) => {
        var W, ne, me;
        S === "ready" ? (W = n == null ? void 0 : n.markImageReady) == null || W.call(n, x, V) : (ne = n == null ? void 0 : n.markImageFailed) == null || ne.call(n, x, V), T == null || T(x), (me = I.setDirtyCanvas) == null || me.call(I, !0, !0);
      }, X = () => {
        if (w += 1, w >= de.length) {
          Z("failed");
          return;
        }
        v.resolvedSrc = de[w], x.src = v.resolvedSrc;
      };
      return x.onload = () => Z("ready"), x.onerror = () => {
        if (w + 1 < de.length) {
          X();
          return;
        }
        Z("failed");
      }, X(), x;
    },
    output: s,
    resolvePreferredExactLinkedSource: k,
    source: i,
    uiImage: (I, J, T, B = null) => {
      var ue, V, ie;
      const ve = a(I, J)[0] || null, _e = i(ve);
      if (!_e) return null;
      const he = `__ui__${J}`, ye = (ue = T == null ? void 0 : T.get) == null ? void 0 : ue.call(T, he);
      if (ye && ye.__panoSrc === _e) return ye;
      const de = r || globalThis.Image;
      if (typeof de != "function") return null;
      const we = new de();
      return we.__panoSrc = _e, (V = n == null ? void 0 : n.markImageLoading) == null || V.call(n, we, _e), we.onload = () => {
        var te;
        (te = n == null ? void 0 : n.markImageReady) == null || te.call(n, we, _e), B == null || B(we);
      }, we.onerror = () => {
        var te;
        (te = n == null ? void 0 : n.markImageFailed) == null || te.call(n, we, _e), B == null || B(we);
      }, we.src = _e, (ie = T == null ? void 0 : T.set) == null || ie.call(T, he, we), we;
    },
    uiList: a,
    uiValue: l
  };
}
const w_ = 1e-3;
function Nd(e, t, r, n) {
  if (!ko(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(w_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function vg(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function x_(e, t) {
  return Math.floor(e * t.fps);
}
function Ad(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Qf = 4;
function Cd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, p) => f !== r[p])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = x_(a, l);
      for (let f = d; f < Math.min(r.length, d + Qf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Qf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Sg({
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
const bo = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, k_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function _g(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !bo[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ni(e) {
  return structuredClone(e);
}
function M_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function P_(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Id(e, t, r) {
  const n = P_(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of bo[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(k_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ni(er({ version: 2, stickers: [i] }).stickers[0]);
}
function N_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Id(e, n, t) : n) };
}
function A_(e, t) {
  const r = bo[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !M_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function C_(e, t) {
  if (!t || t.id !== e.id) return ni(e);
  if (e.placement === t.placement) {
    const n = ni(e);
    for (const i of bo[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ni(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => bo[e.placement].includes(n))) return ni(e);
  const r = ni(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ni(e[n]);
  return r;
}
function I_(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ni(Id(e, t, r)[n]), !0);
}
const Ea = "sticker_image_1", wg = "external_image", vo = 0;
function Oa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Ic(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ai(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function bu(e, t = vo) {
  return (e == null ? void 0 : e.version) !== 2 ? ai(e) : ai(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...md(r, t)
  }));
}
function Ed(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ai(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function xg(e) {
  return String((e == null ? void 0 : e.id) || "") === Ea || String((e == null ? void 0 : e.source_kind) || "") === wg;
}
function Od(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : xg(t);
}
const kg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Mg(e) {
  return !xg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(kg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Pg(e) {
  const t = Mg(e);
  return t ? kg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Ng(e, t = {}) {
  var oe, I, J;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((T) => String((T == null ? void 0 : T.id) || "") === Ea);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const T = String(((oe = e.active) == null ? void 0 : oe.selected_sticker_id) || "") === Ea;
    return {
      state: {
        ...e,
        stickers: r.filter((B, ve) => ve !== n),
        active: T ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), p = t.pose && typeof t.pose == "object" ? t.pose : {}, k = a ? p.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || p.hFOV_deg || 30, h = Math.min(179, Math.max(0.1, Number(k)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const T = Oa(h, u, f), B = Number(((I = s == null ? void 0 : s.initial_pose) == null ? void 0 : I.hFOV_deg) ?? h), ve = Oa(B, u, f), _e = Number(((J = s == null ? void 0 : s.initial_pose) == null ? void 0 : J.vFOV_deg) ?? ve);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - T) <= 1e-6 && Math.abs(_e - ve) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((he, ye) => ye === n ? {
          ...he,
          vFOV_deg: T,
          initial_pose: he.initial_pose && typeof he.initial_pose == "object" ? { ...he.initial_pose, vFOV_deg: ve } : he.initial_pose
        } : he)
      },
      changed: !0
    };
  }
  const m = r.reduce((T, B) => Math.max(T, Number((B == null ? void 0 : B.z_index) || 0)), -1), b = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: h,
    vFOV_deg: d ? Oa(h, u, f) : Number(p.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || h),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, G = {
    ...s || {},
    id: Ea,
    source_kind: wg,
    source_link_id: i,
    source_state_hash: o,
    ...b,
    initial_pose: { ...b },
    visible: !0,
    z_index: m + 1
  }, L = n >= 0 ? r.map((T, B) => B === n ? G : T) : [...r, G];
  return { state: { ...e, stickers: L }, changed: !0 };
}
function fl(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const E_ = ["IMAGE", "VIDEO"];
function ep(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => E_.includes(r)) ? "2d" : null;
}
function O_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? ep(n.type) ?? ep((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Ag(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: fl(e, "sticker"),
    awaitingPose: !t && (fl(e, "sticker_state") || O_(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Cg(e) {
  return fl(e, "sticker") && fl(e, "sticker_state");
}
function F_(e, t) {
  return Cg(e) ? _g(t) : null;
}
function T_(e, t, r) {
  return N_(Em(e, t), _g(r));
}
function tp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return er({ version: 2, stickers: [i] }).stickers[0];
}
function Ig(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((p) => Od(e, p)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((k, h) => h !== o),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const p = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((h) => [h, s[h]])), k = tp(s.id, n, p);
    return { state: { ...e, stickers: e.stickers.map((h, m) => m === o ? k : h) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Kl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, tp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = yd(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, ai(e).reduce((p, k) => Math.max(p, k.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: p.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Fd(e) {
  const t = ai(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Ic(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Ic(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Ic(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function Eg(e) {
  const t = Ed(e), r = Od(e, t), n = ai(e).some((a) => a && a.visible !== !1), i = Fd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Pg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function D_(e) {
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
function np(e, t) {
  const r = Ed(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = D_(e), i = String(r.id || ""), o = Fd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function L_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function R_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Ng(e, t.value);
  if (t.type === "sync-port") return Ig(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Fd(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Oa(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, p = Kl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, yd(p, Na(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: p }
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
    return !i || !ai(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Ed(e);
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
    const i = Mg(r);
    return !i || !Pg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return np(e, "front");
  if (t.type === "send-back") return np(e, "back");
  if (t.type === "delete-selected") {
    if (Od(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ai({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = L_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? md(r, vo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = sS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Fm(c, vo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function V_(e = {}) {
  return Sg({
    ...e,
    reduce: R_,
    projectModel: Eg
  });
}
const vu = 2;
function ki(e, t) {
  return Math.floor(e * t + 0.5);
}
function $_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Og({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const p = () => c && !d, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function h() {
    for (const x of f) x();
    f = [];
  }
  function m(x, v = {}) {
    return h(), u = { name: x, ...v }, a(), u;
  }
  function b(x, v, w) {
    const Z = () => {
      u === x && w();
    };
    e.addEventListener(v, Z), f.push(() => e.removeEventListener(v, Z));
  }
  function G(x, v) {
    let w = t.requestFrame(function Z(X) {
      u === x && (v(X), u === x && (w = t.requestFrame(Z)));
    });
    f.push(() => t.cancelFrame(w));
  }
  function L(x) {
    l = x, o(l);
  }
  function oe() {
    return m(d ? "error" : "idle");
  }
  function I() {
    d = !0, oe();
  }
  function J() {
    const { seekable: x } = e, v = x != null && x.length ? x.end(x.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(v) ? v : 1 / 0));
  }
  function T(x) {
    if (!p()) return x === "play" ? ye() : oe();
    if (e.readyState < vu) {
      const v = m("loading", { then: x });
      return b(v, "loadeddata", () => T(v.then)), b(v, "error", I), v;
    }
    return x === "play" && l / r() >= Number(e.duration) ? ye() : B(x, !1);
  }
  function B(x, v) {
    const w = J();
    if (!e.ended && ki(Number(e.currentTime), r()) === ki(w, r())) return ve(x);
    const Z = m("seeking", { then: x, frame: l, retried: v });
    return b(Z, "seeked", () => {
      const X = ki(Number(e.currentTime), r()) === ki(J(), r()), O = l === Z.frame;
      X || O && Z.retried ? ve(Z.then) : B(Z.then, O);
    }), b(Z, "error", I), e.currentTime = w, Z;
  }
  function ve(x) {
    return x === "play" ? _e() : (s(), oe());
  }
  function _e() {
    const x = m("playingVideo", { shown: !1 });
    if (b(x, "pause", () => e.ended ? he() : ue()), b(x, "ended", he), b(x, "error", I), i() && ki(Number(e.duration), r()) >= n()) {
      const w = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = w;
      });
    }
    const v = (w, Z) => {
      Z && !x.shown && (x.shown = !0, a()), de(ki(w, r()));
    };
    if (k()) {
      let w = e.requestVideoFrameCallback(function Z(X, O) {
        u === x && (v(Number(O.mediaTime), !0), u === x && (w = e.requestVideoFrameCallback(Z)));
      });
      f.push(() => {
        var Z;
        return (Z = e.cancelVideoFrameCallback) == null ? void 0 : Z.call(e, w);
      });
    } else
      G(x, () => v(Number(e.currentTime), e.readyState >= vu));
    return Promise.resolve(e.play()).catch(() => {
      u === x && ue();
    }), x;
  }
  function he() {
    s(), ye();
  }
  function ye() {
    const x = m("playingClock", { startTs: t.now(), startFrame: l });
    return G(x, (v) => de(x.startFrame + Math.floor((v - x.startTs) / 1e3 * r()))), x;
  }
  function de(x) {
    if (x < n()) {
      L(x);
      return;
    }
    if (!i()) {
      we(n() - 1);
      return;
    }
    u.name === "playingVideo" && (h(), e.pause()), L(0), T("play");
  }
  function we(x) {
    u.name === "playingVideo" ? (h(), e.pause(), L(Math.max(0, x)), s()) : L(Math.max(0, x)), T("still");
  }
  function ue() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      h(), e.pause();
      const x = $_(Number(e.currentTime), r());
      L(Math.min(x, n() - 1)), s(), l === x ? oe() : T("still");
    } else u.name === "playingClock" && we(Math.min(l, n() - 1));
  }
  function V() {
    if (!te()) {
      if (l >= n() - 1 && L(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      T("play");
    }
  }
  function ie(x) {
    const v = Math.max(0, Math.round(x));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", L(v), a();
      return;
    }
    u.name === "playingVideo" && (h(), e.pause()), L(v), T("still");
  }
  function te() {
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
      return te();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: V,
    stop: ue,
    seek: ie,
    toggle() {
      te() ? ue() : V();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(x) {
      h(), c = !!x, d = !1, T("still");
    },
    dispose() {
      h(), c = !1, u = { name: "idle" };
    }
  };
}
function Td({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(h) {
    a = h, t();
  }
  function d(h) {
    s = h, e.currentTime = h;
  }
  function u() {
    const h = l;
    f(), l !== h && r();
  }
  function f() {
    if (!n || i || e.readyState < vu) return;
    const { time: h, playing: m, fps: b } = o;
    if (h === null) {
      e.pause(), l = !1;
      return;
    }
    if (m) {
      if (s !== null) return;
      const G = Number(e.duration), L = Number.isFinite(G) ? Math.min(h, G) : h, oe = Math.abs(Number(e.currentTime) - L) > 1.5 / b;
      if (e.ended && !oe) return;
      oe && d(L), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === h) && (Number(e.currentTime) === h ? c(h) : d(h));
  }
  const p = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const h = s;
      s = null, !o.playing && h === o.time ? c(h) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [h, m] of Object.entries(p)) e.addEventListener(h, m);
  function k(h) {
    n = h, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: h = "", time: m = null, playing: b = !1, fps: G }) {
      h !== n && (k(h), r()), o = { time: m, playing: b, fps: G }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(h, m) {
      return !n || i ? m : o.time === null ? null : o.playing && l ? e : a === null ? m : h;
    },
    dispose() {
      for (const [h, m] of Object.entries(p)) e.removeEventListener(h, m);
      k("");
    }
  };
}
function Fa(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function z_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let k = null, h = null;
  const m = () => i().timeline.fps, b = (he) => he.stickers.find((ye) => ye.source.kind === "port"), G = () => {
    const he = i(), ye = b(he);
    return Am(he, {
      minimum: Math.round(m() * 5),
      frames: Math.max(
        d ? Math.round(f * m()) : 0,
        k && ye ? vg(ye.clip, m(), k.meta) : 0
      ),
      camera: c
    });
  }, L = Og({
    video: e,
    clock: n,
    fps: m,
    span: G,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), oe = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, I = () => {
    u && (p.add(u), l());
  }, J = Td({ video: t, onCapture: a, onChange: l }), T = Cd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", oe), e.addEventListener("error", I);
  function B(he) {
    he !== u && (u = he, e.pause(), he ? e.src = he : e.removeAttribute("src"), e.load(), L.setSource(!!he));
  }
  function ve() {
    L.playing && L.stop();
  }
  function _e(he) {
    const ye = b(he);
    h = k && ye ? Nd(ye.clip, L.frame, he.timeline.fps, k.meta) : null, J.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: h,
      playing: L.advancing,
      fps: he.timeline.fps
    });
  }
  return {
    get frame() {
      return L.frame;
    },
    get playing() {
      return L.playing;
    },
    get showsVideo() {
      return L.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ve,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(he, ye) {
      return k != null && k.frames ? T.picture(k.frames, h, k.meta, ye) : J.picture(he, ye);
    },
    toggle() {
      L.playing ? L.stop() : L.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: he, sources: ye, state: de, sticker: we = null }) {
      if (k = he ? we : null, !he)
        return ve(), B(""), _e(de), !1;
      for (const x of p)
        ye.includes(x) || p.delete(x);
      const ue = ye.find((x) => x && !p.has(x)) || "", V = ue !== d;
      V && (d = ue, f = 0), B(d);
      const ie = Nm(de, { camera: c }) || !!d && L.state !== "error" || !!k;
      return ie || ve(), (V || !ie || !L.playing && L.frame >= G()) && L.frame !== vo && L.seek(vo), _e(de), ie;
    },
    dispose() {
      L.dispose(), J.dispose(), e.removeEventListener("loadedmetadata", oe), e.removeEventListener("error", I), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const pl = Math.PI / 180, wr = 180 / Math.PI, j_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), H_ = 260;
function rp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Fg(e, t) {
  return t ? Fg(t, e % t) : e;
}
function G_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Fg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function ws(e, t) {
  const r = rp(e), n = rp(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: G_(r, n) };
}
function Oi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Tg(e) {
  const t = Oi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Dd(e, t, r = j_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (m, b, G) => {
    const L = m + b, oe = Math.max(0, G - 1), I = L > oe && L > 0 ? oe / L : 1;
    return [m * I, b * I];
  }, [d, u] = c(l, s, n), [f, p] = c(o, a, i), k = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - p)
  }, h = ad(k, t);
  return {
    x: k.x + (k.w - h.width) * 0.5,
    y: k.y + (k.h - h.height) * 0.5,
    w: h.width,
    h: h.height,
    safeRect: k
  };
}
function K_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Dd({ width: r, height: n }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * pl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = rm(l, Qh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = W_(c, wo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = ld({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Dg(e) {
  return {
    yaw: Gt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function W_(e, t) {
  const r = Dg(e), n = wo(r.yaw, r.pitch, 0), i = gc(t, e), o = {
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
    roll: Rl(Math.atan2(
      gc(a, n.up),
      gc(a, n.right)
    ) * wr)
  };
}
function Lg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Dd({ width: r, height: n }, Vi(e)), o = Di(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = rm(e, Qh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Dg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(r / (2 * o)) * wr, 1, 179)
  };
}
function U_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Di(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = cd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, p = n / i, k = Math.tan(tu * pl), h = p >= 1 ? k : k * p, m = p >= 1 ? k / p : k;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * wr,
      vFOV_deg: 2 * Math.atan(d / a) * wr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(h) * wr,
        vFOV_deg: 2 * Math.atan(m) * wr
      }
    }
  };
}
function qi(e, t) {
  const r = Oi(e);
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
function B_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Di(r, e);
    return ld(ad(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ka(o, t) };
}
function ip(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = ws(t, r);
  if (!o) return e;
  const s = Vi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = ws(o.height, o.width));
  const a = B_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Rg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Oi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = em({
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
    const n = Oi(e);
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
    return qi(e, (n) => ip(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return qi(e, (n) => {
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? ws(o[1], o[2]) : ws(Vi(n), 1);
      return s ? ip(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? qi(e, (i) => {
      const o = Rl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? qi(e, (n) => {
    const i = tm(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? qi(e, (n) => {
    const i = nm(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? qi(e, (n) => {
    const i = zg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Vg({
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
function $g(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Jh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Zh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function zg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * pl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, p = d * c + u * l, k = Number(e.pitch_deg || 0) * pl, h = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Gt(Number(e.yaw_deg || 0) - Math.atan(f) / h * wr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(p) * wr, -90, 90)
  };
}
function Y_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Sg({
    readState: e,
    reduce: Rg,
    projectModel: Tg,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const Ke = Object.freeze({
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
}), q_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, X_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: q_(t[2])
})), J_ = {
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
}, op = Object.fromEntries(
  Object.entries(J_).map(([e, t]) => [e, {
    name: t.name,
    elements: X_(t.body)
  }])
), zt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(op, n) ? op[n] : null;
    });
    return (n, i) => r.value ? (Le(), Ve("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: mt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Le(!0), Ve(Ze, null, kt(r.value.elements, (o, s) => (Le(), Ve(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Le(), Ve("path", Tr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Le(), Ve("circle", Tr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Le(), Ve("rect", Tr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Le(), Ve("line", Tr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Le(), Ve("polyline", Tr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Le(), Ve("polygon", Tr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : pt("", !0)
      ], 64))), 128))
    ], 2)) : pt("", !0);
  }
}, tn = {
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
    return (n, i) => (Le(), Gn(Ky(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: gh(() => [
        Be(zt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Z_ = ["aria-expanded", "disabled"], Q_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, ew = ["data-aspect", "disabled", "onClick"], tw = { class: "pano-cutout-aspect-custom" }, nw = ["disabled"], rw = ["disabled"], iw = ["data-custom-width", "data-custom-height", "disabled"], jg = {
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
    ]), o = /* @__PURE__ */ Jt("1"), s = /* @__PURE__ */ Jt("1"), a = /* @__PURE__ */ Jt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const h = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], m = String(r.model.aspectLabel || "");
      return h.length ? h.map((b) => {
        const G = typeof b == "string" ? b : String((b == null ? void 0 : b.value) || ""), L = typeof b == "string" ? b : String((b == null ? void 0 : b.label) || G);
        return {
          ...typeof b == "object" && b ? b : {},
          value: G,
          label: L,
          active: m ? G === m : (b == null ? void 0 : b.active) === !0
        };
      }) : i.map((b) => ({
        ...b,
        active: b.value === m
      }));
    }), d = dt(() => {
      var m;
      const h = String(r.model.aspectLabel || "").trim();
      return h || String(((m = c.value.find((b) => b.active === !0)) == null ? void 0 : m.label) || "Aspect");
    });
    Ci(d, (h) => {
      const m = String(h || "").match(/^([0-9.]+):([0-9.]+)$/);
      m && (o.value = m[1], s.value = m[2]);
    }, { immediate: !0 });
    function u(h) {
      n("action", h);
    }
    function f(h) {
      var m;
      r.model.aspectOpen === !0 && ((m = a.value) != null && m.contains(h.target) || u({ type: "close-aspect" }));
    }
    Ol(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Cs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(h) {
      const [m, b] = String(h.value || "").split(":");
      u({
        type: "set-aspect",
        width: m,
        height: b,
        preserveOrientation: !0
      });
    }
    function k() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (h, m) => (Le(), Ve("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Le(), Gn(tn, {
        key: 0,
        icon: e.model.aspectIcon || nt(Ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: m[0] || (m[0] = (b) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Le(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: m[1] || (m[1] = (b) => u({ type: "toggle-aspect" }))
      }, [
        Be(zt, {
          icon: e.model.aspectIcon || nt(Ke).aspect
        }, null, 8, ["icon"]),
        Me("span", null, rt(d.value), 1),
        Be(zt, {
          icon: nt(Ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Z_)),
      jr(Me("div", Q_, [
        (Le(!0), Ve(Ze, null, kt(c.value, (b) => (Le(), Ve("button", {
          key: b.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: b.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": b.value,
          disabled: l.value,
          onClick: (G) => p(b)
        }, rt(b.label), 11, ew))), 128)),
        Me("div", tw, [
          jr(Me("input", {
            "onUpdate:modelValue": m[2] || (m[2] = (b) => o.value = b),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, nw), [
            [Cf, o.value]
          ]),
          m[4] || (m[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Me("input", {
            "onUpdate:modelValue": m[3] || (m[3] = (b) => s.value = b),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, rw), [
            [Cf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: k
          }, "Apply", 8, iw)
        ])
      ], 512), [
        [Ti, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, ow = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, sw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Be(tn, {
        icon: nt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", ow, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, kt(nt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, aw = {
  class: "pano-view-unavailable",
  role: "status"
}, Yl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Le(), Ve("div", aw, rt(nt(ig)), 1));
  }
}, lw = { class: "pano-cutout-node-surface" }, cw = ["title", "disabled"], uw = { class: "value" }, dw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, fw = {
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
    return (n, i) => (Le(), Ve("div", lw, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Ct(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: nt(Ke).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(tn, {
          icon: e.model.hasShot ? nt(Ke).delete : nt(Ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(jg, {
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
          onDblclick: i[2] || (i[2] = Ct((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(zt, {
            icon: nt(Ke).roll
          }, null, 8, ["icon"]),
          Me("span", uw, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, cw),
        Be(tn, {
          icon: nt(Ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(sw)
      ], 32),
      e.model.hasShot === !1 ? (Le(), Ve("div", dw, " Choose a view · + Add Frame ")) : pt("", !0),
      e.model.viewUnavailable ? (Le(), Gn(Yl, { key: 1 })) : pt("", !0)
    ]));
  }
}, Hg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Jt(null);
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
      var h, m;
      const { active: f, intent: p } = a();
      if (!f) return;
      const k = ((m = (h = u.target) == null ? void 0 : h.files) == null ? void 0 : m[0]) || null;
      if (k) {
        n("file-selected", { intent: p, file: k });
        return;
      }
      n("file-cancelled", { intent: p });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Le(), Ve("input", {
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
}, pw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, hw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
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
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Be(tn, {
        icon: nt(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", pw, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, kt(nt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, mw = { class: "pano-stickers-node-surface" }, gw = ["disabled"], yw = ["aria-label", "data-tip"], bw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, vw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Sw = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null);
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
    return (s, a) => (Le(), Ve("div", mw, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Ct(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: nt(Ke).fullscreen
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
          Be(zt, {
            icon: nt(Ke).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, gw),
        Be(tn, {
          icon: e.model.locked ? nt(Ke).lock_closed : nt(Ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(tn, {
          icon: nt(Ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(tn, {
          icon: nt(Ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(tn, {
          icon: e.model.isExternalSelection ? nt(Ke).back_initial : nt(Ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(hw)
      ], 32),
      e.model.playable === !0 ? (Le(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Ct(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Ct(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(zt, {
          icon: e.model.playing ? nt(Ke).pause : nt(Ke).play
        }, null, 8, ["icon"])
      ], 40, yw)) : pt("", !0),
      e.model.hasStickers === !1 ? (Le(), Ve("div", bw, " Add Image to place a sticker ")) : pt("", !0),
      e.model.dropActive === !0 ? (Le(), Ve("div", vw, "Drop image to add")) : pt("", !0),
      Be(Hg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Le(), Gn(Yl, { key: 3 })) : pt("", !0)
    ]));
  }
}, _w = { class: "pano-studio-node-surface" }, ww = {
  class: "pano-studio-node-status",
  role: "status"
}, xw = { class: "pano-studio-node-shot" }, kw = { class: "pano-studio-node-size" }, Mw = { class: "pano-studio-node-note" }, Pw = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", _w, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Ct(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Ct(() => {
        }, ["stop"]))
      }, [
        Me("div", ww, [
          Me("span", xw, rt(e.model.status.shot), 1),
          Me("span", kw, rt(e.model.status.size), 1),
          Me("span", Mw, rt(e.model.status.note), 1)
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
          Be(zt, {
            icon: nt(Ke).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Le(), Gn(Yl, { key: 0 })) : pt("", !0)
    ]));
  }
}, Nw = 2048, Su = 4096, Ta = (e) => Math.floor(e + 0.5), da = (e) => Math.max(2, 2 * Ta(e / 2));
function Gg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Aw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? $l.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Ta(e.timeline.length)) : t.length ? n = Math.max(1, Ta(Math.max(...t))) : r.length && (n = Math.max(1, Ta(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function Cw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = Nw : s = Math.floor(i * 360 / n);
  const a = Gg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((p) => Vl(a, p).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [da(c), da(d)];
  if (Math.max(...u) <= Su) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Su / Math.max(c, d);
  return { width: da(c * f), height: da(d * f), reducedFrom: u, defaulted: o };
}
function Kg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Iw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Kg(e, t, String(r), n) } : null;
}
function Ew(e) {
  return e ? di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Ec = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Ow(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Gg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Kg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Ec[a] };
    d = Cw(e, Aw(e), r, n, o);
  }
  const u = Ec[a] ? [Ec[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Su} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Fw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Ow(r(), { ...t, bgWidth: n }));
  };
}
const sp = 24;
function Tw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ls(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Wg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function _u(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ls(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Wg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Dw(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ls(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ls(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Wg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Ld(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Ug(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function $o(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Oe(r.x, -n, t.width + n),
    y: Oe(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function Lw(e) {
  const t = wo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * _t * 0.5),
    tanY: Math.tan(Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * _t * 0.5)
  };
}
function _i(e, t, r) {
  return sd(qa(
    qa(e.centerDir, Xa(e.right, t)),
    Xa(e.up, r)
  ));
}
function Rd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Lw(e), n = $o(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    _i(r, -r.tanX, r.tanY),
    _i(r, r.tanX, r.tanY),
    _i(r, r.tanX, -r.tanY),
    _i(r, -r.tanX, -r.tanY)
  ].map((f) => $o(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const k = [];
    for (let h = 0; h <= 28; h += 1) {
      const m = h / 28;
      let b, G;
      p === 0 ? (b = -r.tanX + 2 * r.tanX * m, G = r.tanY) : p === 1 ? (b = r.tanX, G = r.tanY - 2 * r.tanY * m) : p === 2 ? (b = r.tanX - 2 * r.tanX * m, G = -r.tanY) : (b = -r.tanX, G = -r.tanY + 2 * r.tanY * m);
      const L = $o(_i(r, b, G), t);
      L && k.push({ x: L.x, y: L.y });
    }
    return k;
  }), s = $o(_i(r, 0, r.tanY), t), a = $o(
    _i(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * sp,
      y: s.y + d / u * sp
    },
    visible: !0
  };
}
function ap(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Rd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = _u(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = _u(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Rw(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Gt(Math.atan2(n.x, n.z) * nn),
    pitch_deg: Math.asin(Oe(n.y, -1, 1)) * nn
  };
}
function Vw(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function $w(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * nn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let fa = null;
function Vd() {
  return fa || (fa = new Promise((e) => {
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
  }), fa);
}
function Bn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function zw(e, t = 1024) {
  const r = Math.max(1, Math.round(Bn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Bn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function jw(e, t, r) {
  const n = Bn(t), i = Bn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Bn(o.u0), a = Bn(o.v0), l = Bn(o.u1), c = Bn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Bn(d.du)) * n,
    centerY: ((a + c) * 0.5 + Bn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Bn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Bn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function Hw(e, t, r) {
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
function Gw() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = jw(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = Hw(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === u) return { source: p.source, revision: u };
    const k = n(c, l), h = Number(k.naturalWidth || k.width || 0), m = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || h < 1 || m < 1) return null;
    const b = on({ label: "raster-object" });
    b.width = Math.max(1, Math.round(s)), b.height = Math.max(1, Math.round(a));
    const G = b.getContext("2d");
    return G ? (d.wrapOffsets.forEach((L) => {
      G.save(), G.translate(d.centerX + L, d.centerY), G.rotate(d.rotationRad), G.scale(d.scale, d.scale), G.drawImage(
        k,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), G.restore();
    }), t.set(f, { revision: u, source: b }), { source: b, revision: u }) : null;
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
function Kw(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Ww(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Uw({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, p, k) {
    if (!u || typeof k != "function" || p.settled) return;
    let h = n.get(u);
    h || (h = /* @__PURE__ */ new Map(), n.set(u, h));
    const m = h.get(f);
    if ((m == null ? void 0 : m.entry) === p) {
      m.callback = k;
      return;
    }
    o(m);
    const b = { owner: u, key: f, entry: p, callback: k };
    h.set(f, b), p.listeners.add(b);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((p) => {
      o(p);
      try {
        p.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, p] of r) {
        if (r.size <= u) break;
        !p.settled || p.listeners.size > 0 || (p.image.onload = null, p.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, p, k = null) {
    const h = String(f || ""), m = String(p || "");
    if (!h || !m) return null;
    let b = r.get(h);
    if (b)
      r.delete(h), r.set(h, b);
    else {
      l(i - 1);
      const L = e || globalThis.Image;
      if (typeof L != "function") return null;
      const oe = new L();
      b = { key: h, image: oe, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(h, b), oe.onload = () => a(b, !0), oe.onerror = () => a(b, !1), oe.src = m;
    }
    return b.settled || b.image.complete && Number(b.image.naturalWidth || b.image.width || 0) > 0 || s(u, h, b, k), b.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Wo = /* @__PURE__ */ new WeakMap();
function Bg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Wo.get(e);
  n || (n = [], Wo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Wo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Wo.delete(e);
  };
}
function ii(e, ...t) {
  const r = Wo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Da = Object.freeze({
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
}), Yg = "PanoramaSuite.Editor.ViewControls", Bw = {
  id: Yg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Da).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Yw(e) {
  return Object.hasOwn(Da, e) ? Da[e] : Da.default;
}
function qw(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Xw(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const hl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Jw(e) {
  var s, a;
  const t = zr(e, hl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = Im(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = Rg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function $d(e, t) {
  if (!e || Hn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, p, k, h;
    const o = n ? n(...i) : void 0, s = Hn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = bt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (h = (k = t == null ? void 0 : t.canvas) == null ? void 0 : k.setDirty) == null || h.call(k, !0, !0), o;
  }, Hn(e).coverageSyncInstalled = !0;
}
function Zw(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function lp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Qw(e) {
  var d, u, f, p, k, h;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, hl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Zw(o) && (lp(s) || s === ""))) return;
  let c = "360";
  if (lp(s))
    try {
      c = String(Ln((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (p = n.callback) == null || p.call(n, s), i && (i.value = a, (k = i.callback) == null || k.call(i, a)), (h = e.setDirtyCanvas) == null || h.call(e, !0, !0);
}
function La(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function wu(e, t, r) {
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
async function ex(e, { tolerateOperationFailure: t = !1 } = {}) {
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
function Uo(e, t, r) {
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
async function qg(e, t = {}) {
  var n, i, o;
  await ex(e, t);
  const r = Array.from(((n = Hn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = dl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function tx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await qg(e), r ? r.apply(this, n) : this.value;
  };
}
function nx(e) {
  var r;
  const t = bt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function Xg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return y_(this), r;
  };
}
function rx(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Oc(e, {
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
    var h;
    const f = `editor_btn|${r}`, p = bt(u);
    if (p.attached === !0 && p.mountKey === f) return;
    nx(u), $d(u, t), La(u, hl);
    const k = zr(u, hl);
    if (tx(u, k), k && !k.__panoPreviewPatchedCb) {
      k.__panoPreviewPatchedCb = !0;
      const m = k.callback;
      k.callback = (b) => {
        var L;
        const G = m ? m(b) : void 0;
        return (L = u.setDirtyCanvas) == null || L.call(u, !0, !1), G;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const m = zr(u, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (h = m.callback) == null || h.call(m, "#00ff00")), wu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), p.stickers && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), p.attached = !0, p.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, wu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), p.cutout && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), p.attached = !0, p.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Jw(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && Qw(this);
      const k = bt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && k && ii(this, "attach"), p;
    };
  }
  Xg(e);
}
function ix(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return rx(this), n;
  }, Xg(e);
}
function ox(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = $r(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if ($r(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    $d(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    wu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && La(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function sx({
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
    settings: [Bw, bv],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Ff],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Ff.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Oc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Oc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Oc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ja(d) && ix(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      bt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      $d(l, e), Ja(c) && ox(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const ax = /\.(png|jpe?g|webp|gif|bmp)$/i;
function sr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ax.test(String(e.name || "")) : !1;
}
function zd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => sr(r)) : !1;
}
function lx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (zd(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => sr(u));
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
async function Bo(e, t = {}) {
  var s, a, l, c;
  if (!sr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const p = new r();
      p.onload = () => u(p), p.onerror = () => f(new Error("image load failed")), p.src = o;
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
async function Mi(e, { fetchApi: t } = {}) {
  if (!sr(e)) throw new TypeError("A supported image file is required.");
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
const cp = /* @__PURE__ */ new WeakSet(), up = /* @__PURE__ */ new WeakSet();
let dp = 0;
function xu(e) {
  if (!e || typeof e != "object" || up.has(e)) return e;
  const t = String(e.type || "preview");
  return dp += 1, e.type = `${t}:pano-${dp}`, up.add(e), e;
}
function ml(e) {
  if (!e || typeof e != "object" || cp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, cp.add(e), e;
}
function Jg(e, t) {
  var n, i;
  if (!t || ((i = (n = ml(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function cx({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Ht } = ba;
o_((e) => li(e.id));
s_(hn);
const jd = Uw(), { linkedVideoFile: Zg } = bg({ app: Ht, api: hn });
function ku() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ba == null ? void 0 : ba.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ux = "pano_suite.ui_settings.v1", dx = 120, fx = 2048;
function fp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(ux)) || "").trim();
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
function px() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function zo(e) {
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
function hx() {
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
function Mu(e) {
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
function Qg(e) {
  const t = Mu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function mx(e, t, r) {
  Qg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Pu(e) {
  var t, r;
  return (r = (t = bt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Hd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function e0(e) {
  return Ja(Hd(e));
}
function pp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function t0(e) {
  const t = bt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Pu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Fc(e), uk(e, { ...n, mode: i }), this.activeBackend = Pu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || bt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Fc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Fc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Fc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Nu.unregister(e);
  const r = bt(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = ku();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Dx(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function gx(e, t = "#00ff00") {
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
function yx(e) {
  var r, n;
  const t = (r = Hn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = xr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function _n(e) {
  var d, u;
  const t = Hn(e), r = yx(e), n = t.liveStateVersion, i = String(((d = xr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = xr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Cg(e) && Kt(e, "sticker-handoff") ? ar(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? T_(r, { backgroundColor: i, coverage: o, active: Lm(e) }, a) : gx(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function xr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function bx(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function n0(e, t, r = null) {
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
  return !n && r != null && (n = bx(e == null ? void 0 : e.graph, r)), n;
}
function vx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function r0(e, t = []) {
  const r = vx(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    dr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function hp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function gl(e, t) {
  const r = hp(e), n = hp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Sx(e, t) {
  var r;
  return n0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function _x(e, t = dr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = r0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return f_(e, s, Sx);
}
const Nu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, p, k;
        if (!o) return;
        const s = gl(n, o == null ? void 0 : o.id);
        String(bt(o).mode || "") === "cutout" && !s || !s && ![..._x(o)].some((h) => gl(n, h)) || (s && (Kd(o), (c = (l = bt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !hg(Nn(o).executedOutputs, n, r.output) && (o0(o), (u = (d = bt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (k = (p = o.graph) == null ? void 0 : p.setDirtyCanvas) == null || k.call(p, !0, !0), String(bt(o).mode || ""), String(bt(o).mode || ""), void 0));
      });
    }, hn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = hn) != null && e.removeEventListener) || (hn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function yl(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function wx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function xx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function kx(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Mx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (wx(t)) return [t];
  const { filename: r, subfolder: n } = xx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => yl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return kx([...i, t]);
}
function Px(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? yl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function li(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (gl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (gl(s, i)) return t[s];
  }
  return null;
}
function ar(e, t, r = null) {
  const n = r || li(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function xn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return yl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = xn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : yl(e);
}
function xs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ra(e) {
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
function Gd(e, t) {
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
function Nx(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Ax(e, t) {
  try {
    const r = Nn(e);
    r.ownOutputRev = Kw(r.ownOutputRev);
    const n = Nx(t);
    let i = "";
    for (const o of n)
      if (i = xn(o), i) break;
    i ? (Gd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function uo(e) {
  var r;
  const t = Nn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Cx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Kt(e, "background"))
    return uo(e), null;
  const i = li(n), o = Pd(i, t, xn);
  if (!o)
    return uo(e), null;
  const s = Nn(e), a = Gd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  uo(e);
  const d = p_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Ix(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = r0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], p = e.graph ? e.getInputLink(u) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const k = p.origin_id, h = n0(e, u, k);
    if (!h) continue;
    const m = Number(p.origin_slot ?? 0), b = li((h == null ? void 0 : h.id) ?? k), G = Array.isArray(b == null ? void 0 : b.images) ? b.images : [];
    if (G.length) {
      const J = [];
      m >= 0 && m < G.length && J.push(G[m]), J.push(...G);
      for (const T of J.filter((B) => !Ia(B))) {
        const B = xn(T);
        if (B)
          return String((f == null ? void 0 : f.name) || ""), { src: `${B}&pano_src=${yu(b)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let L = [];
    try {
      L = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(h) || [] : [];
    } catch {
      L = [];
    }
    if (Array.isArray(L) && L.length) {
      const J = [];
      m >= 0 && m < L.length && J.push(L[m]), J.push(...L);
      for (const T of J) {
        const B = xn(T);
        if (B)
          return String((f == null ? void 0 : f.name) || ""), { src: B, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const oe = Array.isArray(h == null ? void 0 : h.imgs) ? h.imgs : [];
    if (oe.length) {
      const J = [];
      m >= 0 && m < oe.length && J.push(oe[m]), J.push(...oe);
      for (const T of J) {
        const B = xn(T);
        if (B)
          return String((f == null ? void 0 : f.name) || ""), { src: B, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const I = (c = h == null ? void 0 : h.widgets) == null ? void 0 : c.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (I) {
      let J = xn(I.value);
      if (J && !J.includes("/") && !J.includes(":") && (h.comfyClass === "LoadImage" || h.type === "LoadImage") && (J = hn.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((f == null ? void 0 : f.name) || ""), { src: J, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Kt(e, "background") ? li(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = xn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Ex(e, t = [], r = {}) {
  const n = Ix(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Mx(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Nn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const p = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const k = o[f];
    u.pendingResolvedSrc = k, d.src = k;
  };
  return d.onload = () => {
    var k;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
  }, d.onerror = (k) => {
    if (f + 1 < o.length) {
      p();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((k == null ? void 0 : k.type) || "error");
  }, p(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function i0(e, t = [], r = null, n = {}) {
  const i = Ex(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function o0(e) {
  e && (jd.disposeOwner(e), Nn(e).linkedImages.clear(), uo(e));
}
function Ox(e) {
  e && (Nn(e).linkedImages.clear(), uo(e));
}
function s0(e, t) {
  const r = bt(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function jo(e, t, r = "") {
  var s;
  const n = s0(e, ((s = bt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < dx ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function mp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Fx(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Tc(e, t) {
  var n, i;
  const r = (i = (n = bt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Tx(e) {
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
function Dx(e, t) {
  return Jg(e, t);
}
function bl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Px(r);
  if (!o && (n != null && n.external)) {
    if (!Kt(e, "external-sticker")) return null;
    const p = li(e == null ? void 0 : e.id), k = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const h of Array.isArray(k) ? k : [k])
      if (o = xn(h), o) break;
  }
  if (!o) return null;
  const s = ar(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Nn(e).ownOutputRev : 0, c = n != null && n.external ? Gd(o, l) : o, d = Ww(o, a, l);
  return jd.get(e, d, c, (p, k) => {
    var h, m;
    k && (n != null && n.external && Nn(e).outputFromRun && ii(e, "image-loaded"), (m = (h = bt(e).dom) == null ? void 0 : h.requestDraw) == null || m.call(h));
  }) || null;
}
function Lx(e, t) {
  var f, p, k, h;
  const r = bt(e), n = jx(e, t), i = Hx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((m) => m && typeof m == "object").map((m) => [String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim(), Number((m == null ? void 0 : m.z_index) || 0)])
  ), a = n ? i.map((m) => {
    const b = n.getGroupDisplayCanvas(m);
    return b ? {
      id: `paint_group:${m}`,
      source: b,
      revision: `${String(r.paintRevisionKey || "")}:${m}`,
      zIndex: Number(s.get(m) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (h = (k = r.rasterCache) == null ? void 0 : k.retain) == null || h.call(k, []), a;
  r.rasterCache || (r.rasterCache = Gw()), r.rasterReady || (r.rasterReady = () => {
    var m, b;
    return (b = (m = r.dom) == null ? void 0 : m.requestDraw) == null ? void 0 : b.call(m);
  });
  const c = zw(t == null ? void 0 : t.output_preset), d = l.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((m) => {
    const b = r.rasterCache.get(
      m,
      c.width,
      c.height,
      r.rasterReady
    );
    return b ? {
      id: `raster:${String((m == null ? void 0 : m.id) || "")}`,
      source: b.source,
      revision: b.revision,
      zIndex: Number((m == null ? void 0 : m.z_index) || 0),
      opacity: 1,
      visible: (m == null ? void 0 : m.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function Rx(e, t, r, n) {
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
  const i = $x(e, t, n);
  return i || null;
}
function Vx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function $x(e, t, r) {
  var i, o;
  const n = Vx(t, r || (Ht == null ? void 0 : Ht.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function zx(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function jx(e, t) {
  var d, u, f, p, k, h, m, b, G, L, oe, I;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (p = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : p.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = bt(e), a = zx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Ll(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((h = t == null ? void 0 : t.painting) == null ? void 0 : h.raster_objects) || null
  };
  return (((m = s.paintRevision) == null ? void 0 : m.paint) !== c.paint || ((b = s.paintRevision) == null ? void 0 : b.mask) !== c.mask || ((G = s.paintRevision) == null ? void 0 : G.groups) !== c.groups || ((L = s.paintRevision) == null ? void 0 : L.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((oe = t == null ? void 0 : t.painting) == null ? void 0 : oe.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Hx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function gp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Gx(e, t, r) {
  const n = Rd(t, r);
  n.visible && Ld(e, n.boundaryEdges, { selected: !1 });
}
function Kx(e, t, r) {
  const n = Rd(t, r);
  n.visible && (e.save(), Ld(e, n.boundaryEdges, { selected: !0 }), Ug(e, n, { accent: Tw(t) }), e.restore());
}
function Au(e, t, r) {
  return Qm(ll(bt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function vl(e) {
  var t;
  return ((t = bt(e).playback) == null ? void 0 : t.playback.frame) ?? vo;
}
function Wx(e) {
  return [Kt(e, "background") ? Pd(li(e.id), ["pano_input_videos"], xn) : "", Zg(e, dr)];
}
function Ux(e) {
  var o;
  if (!Kt(e, "external-sticker")) return null;
  const t = li(e.id), r = ar(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(xn), meta: r };
  const i = Pd(t, ["pano_sticker_input_videos"], xn);
  return i ? { src: i, meta: r } : null;
}
function Bx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function a0(e, t) {
  var n;
  const r = bt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: er({ ...t, painting: null }) }), r.scene.sceneState;
}
function Yx(e, t) {
  const r = Ul(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Kt(e, "background")) {
    const o = ar(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (lg(e, dr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === Zg(e, dr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = i0(e, dr, null, { preserveReadyWhilePending: !1 });
  return xs(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function qx(e, t) {
  var i, o, s;
  const r = String(((i = xr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Kt(e, a));
  return {
    stateText: String(((o = xr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: _n(e).coverage,
    bgColor: String(((s = xr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Yx(e, t) : null,
    run: n && ar(e, "pano_output_size") || null,
    erp: ar(e, "pano_output_erp") || null,
    frame: ar(e, "pano_output_frame") || null
  };
}
const Xx = 38;
function Kd(e) {
  const t = Nn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Jx(e, t) {
  const r = Nn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === xn(t.entry) ? r : null;
}
function Zx(e, t) {
  const r = Nn(e), n = bt(e), i = t ? xn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Kd(e), !i) return null;
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
      revision: Ra(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Ew(t.entry.rotation)
    }
  } : null;
}
function Qx(e, t) {
  var r;
  return t ? (r = Jx(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function ek(e, t, r) {
  const n = a0(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = bl(e, s.id, sl(s.source), { external: s.source.kind === "port" });
      const c = bt(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = Ad(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Ra(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = bl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return xs(a) ? { media: a, revision: Ra(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : Lx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: xs(r) ? { media: r, revision: Ra(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: tg(n, vl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function tk(e, t, r, n = null) {
  var B, ve, _e, he, ye, de, we;
  const i = bt(e), o = String(i.mode || "stickers");
  s0(e, o);
  const s = _n(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (_e = (ve = (B = i.cutout) == null ? void 0 : B.session) == null ? void 0 : ve.refresh) == null || _e.call(ve)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (de = (ye = (he = i.stickers) == null ? void 0 : he.session) == null ? void 0 : ye.refresh) == null || de.call(ye));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), jo(e, !1, "");
    const { width: ue, height: V } = gp(n.frame), ie = Xx, te = Math.min(l / ue, (c - ie) / V);
    d.drawImage(n.frame, (l - ue * te) / 2, ie + (c - ie - V * te) / 2, ue * te, V * te);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, p = (f == null ? void 0 : f.media) || (i.playback ? Bx(i.playback) : Cx(e, ["pano_input_videos"], () => {
    var ue, V;
    return (V = (ue = i.dom) == null ? void 0 : ue.requestDraw) == null ? void 0 : V.call(ue);
  })) || i0(
    e,
    dr,
    () => {
      var ue, V;
      return (V = (ue = i.dom) == null ? void 0 : ue.requestDraw) == null ? void 0 : V.call(ue);
    },
    { preserveReadyWhilePending: !1 }
  ), k = xs(p);
  let h = null;
  const m = () => f ? { background: f, layers: [] } : ek(e, s, p), b = (ue, V) => {
    h || (h = m());
    const ie = r.render({ width: ue.w, height: ue.h, camera: V, ...h });
    return ie && d.drawImage(ie.canvas, ie.x, ie.y, ie.width, ie.height, ue.x, ue.y, ue.w, ue.h), !!ie;
  };
  if (o === "cutout") {
    const ue = Tx(s), V = gp(p), ie = ue ? Oe(ui(ue).aspect, 0.1, 10) : k ? Oe(Number(V.width / V.height), 0.05, 20) : 1, te = Dd(u, ie);
    i.cutoutFrame = te;
    let x = "none";
    const v = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (ue)
      if (p && !k)
        x = "loading";
      else if (k) {
        const w = U_({ width: l, height: c }, te, ue);
        [
          !w.fallback || b(w.fallback.rect, as(w.fallback.shot)),
          b(w.rect, as(w.shot)),
          !w.fallback || b(te, as(ue))
        ].every(Boolean) || (x = "loading");
      } else
        x = "empty";
    else {
      const w = i.lastCutoutShot;
      w ? (i.view = Lg(w, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), k ? b(u, ll(i.view, l, c)) || (x = "loading") : p ? x = "loading" : x = "empty";
    }
    k || r.release(), r.failed && x === "loading" && (x = "none"), ue && (i.lastCutoutShot = { ...ue }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(te.x, te.y, te.w, te.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(te.x + 0.5, te.y + 0.5, Math.max(0, te.w - 1), Math.max(0, te.h - 1)), d.restore()), x === "loading" ? (Tc(e, !1), jo(e, !0, v)) : x === "empty" ? (Tc(e, !0), jo(e, !1, "")) : (Tc(e, !1), jo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let G = !1;
  (!p || k) && (h = m(), !h.background && !h.layers.length ? (r.release(), G = !0) : G = b(u, ll(i.view, l, c)));
  const L = !G && !r.failed;
  jo(e, L, L ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), L && Fx(d, u, mp(t, u));
  const oe = Au(e, l, c);
  !p && G && nk(d, oe, mp(t, u));
  const I = String(((we = s == null ? void 0 : s.active) == null ? void 0 : we.selected_sticker_id) || ""), J = bu(s, vl(e)), T = G && e.__panoStudio !== !0 ? J.find((ue) => String((ue == null ? void 0 : ue.id) || "") === I && (ue == null ? void 0 : ue.visible) !== !1) : null;
  G && !f && J.filter((ue) => ue !== T && (ue == null ? void 0 : ue.visible) !== !1 && (ue.external || ue.source_kind === "external_image")).filter((ue) => !xs(bl(e, ue.id, null, { external: !0 }))).forEach((ue) => Gx(d, ue, oe)), T && Kx(d, T, oe);
}
function yp(e, t, r, n, i = 1) {
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
function nk(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Tn(c, a));
    yp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Tn(a, c));
    yp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Tn(0, 0) },
    { name: "Right", dir: Tn(90, 0) },
    { name: "Back", dir: Tn(180, 0) },
    { name: "Left", dir: Tn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Cu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function rk(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Un(e, t) {
  return rk(e, t) ? !1 : (Cu(e), !0);
}
function bp() {
  var r;
  const e = (r = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function ik(e) {
  var r;
  if (!e) return;
  const t = (r = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ok(e, t = 360, r = 260) {
  const n = bt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !Qg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function sk(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = bt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function vp(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = bt(e);
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
      s.userResized = !0, t == null || t(), i && ak(e, 180, t);
    }
  };
}
function ak(e, t = 180, r = null) {
  if (!e) return;
  const n = bt(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Yo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const lk = /* @__PURE__ */ new WeakMap();
function l0(e, t) {
  return hg(lk, e, t) ? !1 : (Ax(e, t), o0(e), Yo(e), !0);
}
async function ck(e) {
  var r, n;
  const t = await u_(e, Ht, hn);
  t && (l0(e, t), (n = (r = bt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function uk(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = bt(e), i = Nn(e), o = Hn(e), s = e0(e);
  if (s && !r) {
    Hd(e);
    return;
  }
  s && ok(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: pp(e)
  }.signature || pp(e), Pu(e), e == null || e.id, n.mode, e.addDOMWidget, Mu(e), (ze = n.dom) != null && ze.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, p = f ? 0 : 56, k = f ? 0 : H_, h = document.createElement("div");
  if (hx(), h.className = "pano-node-preview-dom", h.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && h.classList.add("pano-node-preview--no-preview"), h.setAttribute("data-capture-wheel", "true"), h.tabIndex = 0, h.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    k > 0 ? `min-height:${k}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const se = ml(xu(
      e.addDOMWidget(ku(), "preview", h, vp(e, null))
    ));
    Yo(e), n.dom = { widget: se, root: h, requestDraw: () => {
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
  const b = on({ label: "node.surface" });
  b.style.cssText = [
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
  const G = document.createElement("div");
  G.style.cssText = [
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
  ].join(";"), G.textContent = "Connect ERP image", m.appendChild(b), m.appendChild(G), h.appendChild(m);
  const L = Xh(h), oe = document.createElement("div");
  oe && (oe.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", oe.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", h.appendChild(oe)), mx(e, 120, 120), Yo(e);
  let I = null;
  try {
    sk(e, p, () => {
      var se, Ie;
      return (Ie = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Ie.call(se);
    }), I = ml(xu(e.addDOMWidget(
      ku(),
      "preview",
      h,
      vp(
        e,
        () => {
          var se, Ie;
          return (Ie = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Ie.call(se);
        },
        p,
        k,
        !1
      )
    )));
  } catch {
    return;
  }
  const J = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = Fw(), B = () => {
    J.destroyed || (J.needsDraw = !0, !J.inTick && !J.raf && (J.raf = requestAnimationFrame(y)));
  }, ve = og(B), _e = /* @__PURE__ */ _o(a ? {
    ...Eg(_n(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Tg(_n(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((se) => ({ value: se, label: se }))
  });
  let he = null;
  if (a && e.__panoSceneStateV2) {
    const [se, Ie] = [0, 1].map(() => {
      const He = Es(document, "node.playback");
      return He.playsInline = !0, He.preload = "auto", He.crossOrigin = "anonymous", He.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", m.appendChild(He), He;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Fe = on({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const je = z_({
      video: se,
      stickerVideo: Ie,
      createImage: (He, Ue) => {
        const ut = new Image();
        return ut.onload = Ue, ut.onerror = Ue, ut.src = He, ut;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (He) => requestAnimationFrame(He),
        cancelFrame: (He) => cancelAnimationFrame(He)
      },
      readState: () => _n(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: B,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(se.videoWidth > 0 && se.videoHeight > 0)) return;
        const He = Math.min(1, fx / se.videoWidth);
        Ae.width = Math.round(se.videoWidth * He), Ae.height = Math.round(se.videoHeight * He), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(se, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, B();
      },
      onStickerCapture: () => {
        var He;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Fe.width = Ie.videoWidth, Fe.height = Ie.videoHeight, (He = Fe.getContext("2d")) == null || He.drawImage(Ie, 0, 0), Fe.__panoFrameIdx += 1, B());
      },
      onChange: () => {
        _e.playing = je.playing, B();
      }
    });
    he = { playback: je, video: se, still: Ae, stickerVideo: Ie, stickerStill: Fe, stickerSource: "" }, n.playback = he;
  }
  const ye = () => {
    var ut;
    const { playback: se, still: Ie, stickerStill: Ae } = he, Fe = Fa(m, !!((ut = e.flags) != null && ut.collapsed)), je = se.source, He = Fe ? Ux(e) : null, Ue = se.follow({
      shown: Fe,
      sources: Fe ? Wx(e) : [],
      state: _n(e),
      sticker: He
    });
    ((He == null ? void 0 : He.src) || "") !== he.stickerSource && (he.stickerSource = (He == null ? void 0 : He.src) || "", hs(Ae)), se.source !== je && (hs(Ie), Ie.__panoFrameIdx = 0), _e.playable = Ue, _e.playing = se.playing;
  }, de = () => {
    var Ie, Ae;
    const se = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    se && !Fa(m, !!((Ae = e.flags) != null && Ae.collapsed)) && se.pause(), a && (_e.playable = !!se && !se.failed(), _e.playing = !!(se != null && se.playing));
  }, we = () => {
    var se;
    he == null || he.playback.pause(), (se = i.ownOutputVideo) == null || se.player.pause();
  };
  let ue = null;
  const V = (a ? V_ : Y_)({
    readState: () => _n(e),
    publishLiveState: (se) => {
      se ? (ue = se, o.liveState = se) : (o.liveState === ue && (o.liveState = null), ue = null), o.liveStateVersion += 1, o.parsedState = null, B();
    },
    commitState: (se) => {
      var Fe, je, He, Ue;
      const Ie = xr(e, "state_json");
      if (!Ie) return;
      Rm(e, se.active);
      const Ae = Vm(e, se, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Fe = Ie.callback) == null || Fe.call(Ie, Ae), o.parsedState = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ue = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || Ue.call(He, !0, !0));
    },
    onChange: (se) => Object.assign(_e, se)
  }), te = a ? Bg(e, (se = "sync", Ie = null) => {
    var ln;
    if (!a || !e.graph || !V || V.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ut = Kt(e, "external-sticker");
      return V.apply({
        type: "sync-port",
        value: Ag(e, {
          pose: Ut ? ar(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Kt(e, "sticker-handoff") ? ar(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ut) => String((Ut == null ? void 0 : Ut.name) || "") === "sticker_image") : -1, Fe = Ae >= 0 ? ((ln = e.getInputLink(Ae)) == null ? void 0 : ln.id) ?? null : null;
    if (Fe == null)
      return V.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Kt(e, "external-sticker")) return !1;
    const je = ar(e, "pano_sticker_input_pose", Ie), He = Array.isArray(je) ? je[0] : je, Ue = String(ar(e, "pano_sticker_input_state_hash", Ie) ?? ""), ut = n.view || { yaw: 0, pitch: 0 }, yt = _n(e), Dt = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === "sticker_image_1"), At = bl(e, "sticker_image_1", null, { external: !0 }), An = He && typeof He == "object" ? He : Dt || { yaw_deg: ut.yaw, pitch_deg: ut.pitch, hFOV_deg: 30, rot_deg: 0 };
    return V.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ue,
        pose: An,
        imageWidth: Number((At == null ? void 0 : At.naturalWidth) || (At == null ? void 0 : At.width) || 0),
        imageHeight: Number((At == null ? void 0 : At.naturalHeight) || (At == null ? void 0 : At.height) || 0)
      }
    });
  }) : () => {
  };
  let x = 0;
  const v = async (se) => {
    if (!a || !V || !sr(se)) return !1;
    we();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...n.view || { yaw: 0, pitch: 0 } };
    x += 1, _e.importing = !0;
    const je = Uo(e, `add:${Ie}`, async () => {
      const He = await Bo(se), Ue = await Mi(se, {
        fetchApi: (ut, yt) => hn.fetchApi(ut, yt)
      });
      return W(), V.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Ie,
          asset: Ue,
          imageWidth: He.width,
          imageHeight: He.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      x = Math.max(0, x - 1), _e.importing = x > 0, B();
    }
  };
  let w = null, Z = null, X = null, O = !1;
  const S = () => {
    var se;
    return X && (clearTimeout(X), X = null), O ? (O = !1, ((se = V == null ? void 0 : V.commitGesture) == null ? void 0 : se.call(V)) ?? !1) : !1;
  }, W = () => {
    var Fe, je, He;
    const se = S(), Ie = (w == null ? void 0 : w.pointerId) ?? (Z == null ? void 0 : Z.pointerId);
    if (w = null, Z = null, Ie != null) {
      try {
        (Fe = b.hasPointerCapture) != null && Fe.call(b, Ie) && ((je = b.releasePointerCapture) == null || je.call(b, Ie));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ae = ((He = V == null ? void 0 : V.commitGesture) == null ? void 0 : He.call(V)) ?? !1;
    return se || Ae;
  }, ne = () => {
    var Fe, je, He;
    const se = S(), Ie = w == null ? void 0 : w.pointerId;
    if (w = null, Ie != null) {
      try {
        (Fe = b.hasPointerCapture) != null && Fe.call(b, Ie) && ((je = b.releasePointerCapture) == null || je.call(b, Ie));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ae = ((He = V == null ? void 0 : V.cancelGesture) == null ? void 0 : He.call(V)) ?? !1;
    return se || Ae;
  }, me = () => W();
  V && o.flushers.add(me);
  let Se = null, C = !1;
  if (oe && V)
    try {
      Vd(), Se = ed(l ? Pw : a ? Sw : fw, {
        model: _e,
        onAction: (se) => {
          var Fe, je, He;
          if ((se == null ? void 0 : se.type) === "toggle-playback") {
            W(), he ? he.playback.toggle() : (Fe = i.ownOutputVideo) == null || Fe.player.toggle(), B();
            return;
          }
          if (we(), (se == null ? void 0 : se.type) === "open-editor") {
            W(), a || (_e.aspectOpen = !1), (je = n.openEditor) == null || je.call(n);
            return;
          }
          if (a) {
            if ((se == null ? void 0 : se.type) === "add-image-file") {
              v(se.file);
              return;
            }
            V.apply(se) && B();
            return;
          }
          if ((se == null ? void 0 : se.type) === "toggle-aspect") {
            _e.aspectOpen = !_e.aspectOpen;
            return;
          }
          if ((se == null ? void 0 : se.type) === "close-aspect") {
            _e.aspectOpen = !1;
            return;
          }
          let Ie = se;
          if ((se == null ? void 0 : se.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...se,
              ...K_(Ue, {
                width: b.width,
                height: b.height
              })
            };
          } else if ((se == null ? void 0 : se.type) === "delete-frame") {
            const Ue = Oi(_n(e));
            Ue && (n.view = Lg(Ue, {
              width: b.width,
              height: b.height
            }));
          }
          const Ae = ((He = n.cutoutFrame) == null ? void 0 : He.safeRect) || null;
          _e.aspectOpen = !1, V.apply({ ...Ie, safeRect: Ae }) && B();
        }
      }), Se.mount(oe), C = !0;
    } catch {
      Se = null, C = !1;
    }
  const le = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    he && ye(), B();
  }) : null;
  le == null || le.observe(m);
  const y = (se) => {
    var Ae, Fe, je;
    J.raf = 0, J.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = _.stepInertia(se), J.needsDraw || Ie) {
        J.needsDraw = !1, he ? ye() : de();
        const He = l ? qx(e, he) : null, Ue = He ? Iw(He) : null, ut = () => a0(e, _n(e)), yt = He && Fa(m, !!((Ae = e.flags) != null && Ae.collapsed)) ? Zx(e, Ue) : null;
        if ((Fe = e.flags) != null && Fe.collapsed || tk(e, b, ve, yt), _e.viewUnavailable = ve.failed, l) {
          const Dt = T({ ...He, display: Qx(e, Ue) }, ut);
          Dt && (_e.status = Dt);
        }
      }
    } finally {
      J.inTick = !1;
    }
    (Ie || J.needsDraw) && !J.raf && (J.raf = requestAnimationFrame(y)), px() && (!n.debugLastTs || se - n.debugLastTs > 1200) && (n.debugLastTs = se, n.mode, Mu(e), zo(h), zo(m), zo(b), zo(h.parentElement), zo((je = h.parentElement) == null ? void 0 : je.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, _ = od({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (se) => {
      n.view = se;
    },
    getViewportSize: () => {
      const se = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number(se.width || b.clientWidth || 0)),
        h: Math.max(1, Number(se.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const se = fp();
      return {
        x: se.invert_view_x ? -1 : 1,
        y: se.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      B();
    }
  }), A = a ? m : h, g = (se) => {
    const Ie = b.getBoundingClientRect();
    return {
      x: (Number(se.clientX) - Ie.left) * (b.width / Math.max(1, Ie.width)),
      y: (Number(se.clientY) - Ie.top) * (b.height / Math.max(1, Ie.height))
    };
  }, D = (se) => {
    var Fe, je;
    if (!a || l || !d) return;
    const Ie = _n(e), Ae = ap(
      bu(Ie, vl(e)),
      String(((Fe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      g(se),
      Au(e, b.width, b.height)
    );
    if (!Ae) {
      b.style.cursor = "grab";
      return;
    }
    if (((je = Ae.item) == null ? void 0 : je.locked) === !0) {
      b.style.cursor = "default";
      return;
    }
    b.style.cursor = Ae.hit.cursor || "default";
  };
  b.addEventListener("pointerdown", (se) => {
    var ut, yt, Dt, At, An, qe, ln, Ut, hi, Br, mi;
    if (!Un(se, A) || se.button !== 0) return;
    if (!a) {
      const sn = Oi(_n(e)), bn = n.cutoutFrame;
      if (!sn) {
        (ut = h.focus) == null || ut.call(h, { preventScroll: !0 }), (yt = b.setPointerCapture) == null || yt.call(b, se.pointerId), b.style.cursor = "grabbing", _.startDrag(se.clientX, se.clientY, se.pointerId);
        return;
      }
      if (sn.locked === !0 || !bn || !V) return;
      const Yr = g(se);
      let pr;
      if (se.shiftKey) {
        const tr = Vg({
          frame: bn,
          point: Yr,
          startRollDeg: Number(sn.roll_deg ?? sn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!tr) return;
        pr = { kind: "roll", pointerId: se.pointerId, rollGesture: tr };
      } else {
        const tr = ((Dt = _n(e)) == null ? void 0 : Dt.ui_settings) || fp();
        pr = {
          kind: "pan",
          pointerId: se.pointerId,
          startPoint: Yr,
          startShot: { ...sn },
          focalPx: Di(bn, sn),
          invertX: tr.invert_view_x === !0,
          invertY: tr.invert_view_y === !0
        };
      }
      W(), (At = h.focus) == null || At.call(h, { preventScroll: !0 }), (An = b.setPointerCapture) == null || An.call(b, se.pointerId), b.style.cursor = "grabbing", V.beginGesture(), w = pr;
      return;
    }
    if (!d) return;
    const Ie = g(se), Ae = _n(e), Fe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), je = Au(e, b.width, b.height);
    (ln = h.focus) == null || ln.call(h, { preventScroll: !0 });
    const He = () => ap(bu(Ae, vl(e)), Fe, Ie, je);
    let Ue = l ? null : He();
    if (Ue && (he != null && he.playback.playing) && (we(), Ue = He()), Ue && V) {
      if (_.stopMotion(), W(), String(((Ut = Ue.item) == null ? void 0 : Ut.id) || "") !== Fe && V.apply({ type: "select-sticker", id: Ue.item.id }), ((hi = Ue.item) == null ? void 0 : hi.locked) === !0) {
        B();
        return;
      }
      const sn = Ie, bn = Ue.geometry.center;
      Z = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: se.pointerId,
        startPoint: sn,
        startCenter: { ...bn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(sn.x - bn.x, sn.y - bn.y)),
        startAngle: Math.atan2(sn.y - bn.y, sn.x - bn.x),
        projection: je
      }, V.beginGesture(), (Br = b.setPointerCapture) == null || Br.call(b, se.pointerId), b.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, B();
      return;
    }
    (mi = b.setPointerCapture) == null || mi.call(b, se.pointerId), b.style.cursor = "grabbing", _.startDrag(se.clientX, se.clientY, se.pointerId);
  }), b.addEventListener("pointermove", (se) => {
    if (!a) {
      if (!w) {
        if (!_.state.drag.active) return;
        Un(se, A), _.moveDrag(se.clientX, se.clientY, "pano");
        return;
      }
      if (w.pointerId !== se.pointerId || !V) return;
      if (Un(se, A), w.kind === "pan") {
        const Ae = g(se);
        V.updateGesture({
          type: "pan-camera",
          startShot: w.startShot,
          dx: Ae.x - w.startPoint.x,
          dy: Ae.y - w.startPoint.y,
          focalPx: w.focalPx,
          invertX: w.invertX,
          invertY: w.invertY
        });
        return;
      }
      const Ie = $g(w.rollGesture, g(se), se);
      if (!Ie) return;
      w.rollGesture = Ie.gesture, V.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!Z && !_.state.drag.active) {
      D(se);
      return;
    }
    if (Z) {
      if (Z.pointerId !== se.pointerId || !V) return;
      Un(se, A);
      const Ie = g(se);
      let Ae = Z.startSticker;
      if (Z.kind === "move")
        Ae = Rw(
          Z.startSticker,
          {
            x: Z.startCenter.x + Ie.x - Z.startPoint.x,
            y: Z.startCenter.y + Ie.y - Z.startPoint.y
          },
          Z.projection
        );
      else if (Z.kind === "scale") {
        const Fe = Math.hypot(Ie.x - Z.startCenter.x, Ie.y - Z.startCenter.y);
        Ae = Vw(Z.startSticker, Z.startDistance, Fe);
      } else if (Z.kind === "rotate") {
        const Fe = Math.atan2(Ie.y - Z.startCenter.y, Ie.x - Z.startCenter.x);
        Ae = $w(Z.startSticker, Z.startAngle, Fe, se.shiftKey === !0);
      }
      V.updateGesture({ type: "set-transform", value: Ae }), B();
      return;
    }
    !d || !_.state.drag.active || (Un(se, A), _.moveDrag(se.clientX, se.clientY, "pano"));
  });
  const R = () => {
    var Ie, Ae;
    if (!w && !Z) {
      if (!_.state.drag.active) return;
      _.endDrag(), b.style.cursor = "grab", B();
      return;
    }
    if (!V) return;
    const se = (w == null ? void 0 : w.pointerId) ?? (Z == null ? void 0 : Z.pointerId);
    w = null, Z = null;
    try {
      (Ie = b.hasPointerCapture) != null && Ie.call(b, se) && ((Ae = b.releasePointerCapture) == null || Ae.call(b, se));
    } catch {
    }
    V.cancelGesture(), b.style.cursor = "grab", B();
  }, q = (se, Ie = !1) => {
    var Ae, Fe, je, He;
    if (!a) {
      if (!w) {
        if (!_.state.drag.active) return;
        Un(se, A), (Ae = b.releasePointerCapture) == null || Ae.call(b, se.pointerId), b.style.cursor = "grab", _.endDrag(), B();
        return;
      }
      if (w.pointerId !== se.pointerId || !V) return;
      Un(se, A), w = null, (Fe = b.releasePointerCapture) == null || Fe.call(b, se.pointerId), b.style.cursor = "grab", Ie ? V.cancelGesture() : V.commitGesture(), D(se), B();
      return;
    }
    if (Z) {
      if (Z.pointerId !== se.pointerId || !V) return;
      Un(se, A), Z = null, (je = b.releasePointerCapture) == null || je.call(b, se.pointerId), b.style.cursor = "grab", Ie ? V.cancelGesture() : V.commitGesture(), B();
      return;
    }
    !d || !_.state.drag.active || (Un(se, A), (He = b.releasePointerCapture) == null || He.call(b, se.pointerId), b.style.cursor = "grab", _.endDrag(), B());
  };
  b.addEventListener("pointerup", q), b.addEventListener("pointercancel", (se) => q(se, !0)), b.addEventListener("lostpointercapture", R), b.addEventListener("pointerleave", (se) => {
    !a && w || Z || _.state.drag.active && q(se);
  });
  const E = (se) => {
    const Ie = document.activeElement;
    if (Ie !== h && !h.contains(Ie)) return;
    if (se.key === "Escape" && (w || Z) && V) {
      R(), Cu(se);
      return;
    }
    if (!a || l || se.key !== "Delete" && se.key !== "Backspace" || !V) return;
    const Ae = se.target, Fe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ae != null && Ae.isContentEditable || _e.canDelete === !0 && (we(), W(), V.apply({ type: "delete-selected" }) && B(), Cu(se));
  };
  window.addEventListener("keydown", E, !0);
  const F = cx({
    requestFrame: (se) => requestAnimationFrame(se),
    cancelFrame: (se) => cancelAnimationFrame(se),
    restore: (se) => ik(se)
  }), M = (se) => {
    var Ae, Fe, je, He, Ue, ut;
    if (!Un(se, A)) return;
    if (!a) {
      const yt = Oi(_n(e));
      if (yt && yt.locked !== !0 && V) {
        const Dt = Ya(se);
        Dt !== 0 && (O || (W(), V.beginGesture(), O = !0), V.updateGesture({
          type: "step-fov",
          direction: Dt
        }) ? (X && clearTimeout(X), X = setTimeout(S, 180), B()) : V.hasGestureChanges() || (V.cancelGesture(), O = !1));
      } else if (!yt) {
        const Dt = bp();
        _.applyWheelEvent(se) && B(), F.schedule(Dt);
      }
      (Ae = se.preventDefault) == null || Ae.call(se), (Fe = se.stopPropagation) == null || Fe.call(se), (je = se.stopImmediatePropagation) == null || je.call(se);
      return;
    }
    if (!d) return;
    const Ie = bp();
    _.applyWheelEvent(se) && B(), (He = se.preventDefault) == null || He.call(se), (Ue = se.stopPropagation) == null || Ue.call(se), (ut = se.stopImmediatePropagation) == null || ut.call(se), F.schedule(Ie);
  }, H = a ? [m, b] : [m];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((se) => {
    H.forEach((Ie) => Ie.addEventListener(se, M, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((se) => {
    b.addEventListener(se, (Ie) => Un(Ie, A)), m.addEventListener(se, (Ie) => Un(Ie, A));
  });
  const Y = xr(e, "state_json");
  let fe = null, be = null;
  Y && !Y.__panoPreviewPatchedCb && (fe = Y.callback, be = (se) => {
    const Ie = fe ? fe(se) : void 0;
    return B(), Ie;
  }, Y.callback = be, Y.__panoPreviewPatchedCb = be);
  const ke = xr(e, "bg_color");
  let ce = null, xe = null;
  ke && !ke.__panoPreviewPatchedCb && (ce = ke.callback, xe = (se) => {
    const Ie = ce ? ce(se) : void 0;
    return B(), Ie;
  }, ke.callback = xe, ke.__panoPreviewPatchedCb = xe);
  const K = l ? xr(e, "output_size") : null, pe = K == null ? void 0 : K.callback, z = K ? (se) => {
    const Ie = pe ? pe(se) : void 0;
    return B(), Ie;
  } : null;
  K && (K.callback = z);
  const ae = e.onRemoved, $ = e.onResize, U = e.onExecuted, j = e.onDragOver, N = e.onDragDrop;
  let Q = null;
  const P = () => {
    a && (_e.dropActive = !0, Q && clearTimeout(Q), Q = setTimeout(() => {
      Q = null, _e.dropActive = !1;
    }, 140));
  }, re = c ? function(se) {
    return (j ? j.apply(this, arguments) : !1) === !0 ? !0 : zd(se == null ? void 0 : se.dataTransfer) ? (P(), !0) : !1;
  } : null, ee = c ? function(se) {
    var Fe;
    if ((N ? N.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Fe = se == null ? void 0 : se.dataTransfer) == null ? void 0 : Fe.files) || []).find((je) => sr(je));
    return Ae ? (Q && clearTimeout(Q), Q = null, _e.dropActive = !1, v(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = re, e.onDragDrop = ee);
  const ge = c ? lx(h, {
    onActive: (se) => {
      if (se) {
        P();
        return;
      }
      Q && clearTimeout(Q), Q = null, _e.dropActive = !1;
    },
    onDrop: (se) => {
      v(se);
    }
  }) : () => {
  }, Pe = function(se) {
    i.outputFromRun = !0;
    const Ie = l0(e, se);
    ii(e, Ie ? "executed" : "sync", se), B();
    const Ae = U ? U.apply(this, arguments) : void 0;
    return Yo(e), Ae;
  };
  e.onExecuted = Pe;
  const Ee = e.onConnectionsChange, Re = function(se, Ie) {
    const Ae = Xf(e, se, Ie, [...kd, ...Md]), Fe = Xf(e, se, Ie, dr), je = arguments, He = Ee ? Ee.apply(this, je) : void 0, Ue = () => {
      J.destroyed || (Fe && Ox(e), Ae && ii(e, "connection-change"), Yo(e), B());
    };
    return Ue(), queueMicrotask(Ue), He;
  };
  e.onConnectionsChange = Re;
  const We = function() {
    const se = $ ? $.apply(this, arguments) : void 0;
    return bt(this).userResized = !0, B(), se;
  };
  e.onResize = We;
  const Ge = function() {
    return Ce(), Nu.unregister(this), ae ? ae.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const Ce = () => {
    var se, Ie, Ae, Fe, je, He, Ue;
    J.destroyed = !0, (se = le == null ? void 0 : le.disconnect) == null || se.call(le), a ? W() : ne(), b.removeEventListener("lostpointercapture", R), ge(), L(), window.removeEventListener("keydown", E, !0), o.flushers.delete(me), (Ie = V == null ? void 0 : V.destroy) == null || Ie.call(V), (Ae = Se == null ? void 0 : Se.unmount) == null || Ae.call(Se), he && (he.playback.dispose(), he.video.remove(), he.stickerVideo.remove(), n.playback === he && (n.playback = null)), ve.dispose(), n.scene = null, (je = (Fe = n.rasterCache) == null ? void 0 : Fe.dispose) == null || je.call(Fe), n.rasterCache = null, n.rasterReady = null, te(), F.dispose(), Q && clearTimeout(Q), Q = null, jd.disposeOwner(e), uo(e), Kd(e), J.raf && cancelAnimationFrame(J.raf), J.raf = 0, ((He = n.cutout) == null ? void 0 : He.session) === V && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === V && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === We && (e.onResize = $), e.onExecuted === Pe && (e.onExecuted = U), e.onConnectionsChange === Re && (e.onConnectionsChange = Ee), be && (Y == null ? void 0 : Y.callback) === be && (Y.callback = fe), be && (Y == null ? void 0 : Y.__panoPreviewPatchedCb) === be && delete Y.__panoPreviewPatchedCb, xe && (ke == null ? void 0 : ke.callback) === xe && (ke.callback = ce), xe && (ke == null ? void 0 : ke.__panoPreviewPatchedCb) === xe && delete ke.__panoPreviewPatchedCb, z && K.callback === z && (K.callback = pe), e.onDragOver === re && (e.onDragOver = j), e.onDragDrop === ee && (e.onDragDrop = N), e.onRemoved === Ge && (e.onRemoved = ae);
  };
  n.restore = Ce, n.cutout = V && C && !a ? { session: V, model: _e } : null, n.stickers = V && C && a ? { session: V, model: _e } : null, n.dom = {
    widget: I,
    root: h,
    canvas: b,
    requestDraw: B,
    state: J,
    emptyHintEl: G,
    nodeSurface: n.cutout
  }, Nu.register(e), e.graph && ii(e, "attach"), B();
}
function Sp(e, t = {}) {
  t0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function _p(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (e0(e) && !r) {
    Hd(e);
    return;
  }
  t0(e).attach(t);
}
function dk(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function fk(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let p = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (p = Math.min(p, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(c * p))
  };
}
function pk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var p;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const k = l();
    return k === a || (a = k, i(k)), k;
  }, d = () => c();
  return (p = t == null ? void 0 : t.addEventListener) == null || p.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var k;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
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
    var k, h, m;
    if (!s) {
      if (s = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", d), l())
        try {
          const b = (h = t.exitFullscreen) == null ? void 0 : h.call(t);
          (m = b == null ? void 0 : b.catch) == null || m.call(b, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const hk = { class: "pano-preview-node-surface" }, mk = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", hk, [
      Be(tn, {
        icon: e.model.fullscreen ? nt(Ke).fullscreen_close : nt(Ke).fullscreen,
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
      e.model.viewUnavailable ? (Le(), Gn(Yl, { key: 0 })) : pt("", !0)
    ]));
  }
}, pa = 140, gk = 180, wp = 40, Dc = 10;
function xp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function kp(e, t) {
  const r = xp(e), n = xp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Mp(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function fo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return fo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Mp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = fo(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Mp(e);
}
function c0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function yk(e) {
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
function Iu(e) {
  var i;
  const t = (i = lr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (kp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (kp(o, r)) return t[o];
  return null;
}
function bk(e) {
  var n, i;
  const t = Iu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = fo(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function vk(e, t = "erp_image") {
  var p, k, h, m, b, G, L;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((oe, I) => String((oe == null ? void 0 : oe.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(I))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (h = (k = (p = lr) == null ? void 0 : p.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : h.call(k, o), a = Iu(o), l = Iu(e == null ? void 0 : e.id), c = [
    (m = l == null ? void 0 : l.ui) == null ? void 0 : m.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (b = a == null ? void 0 : a.ui) == null ? void 0 : b.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const oe of c)
    if (Array.isArray(oe))
      for (const I of oe) {
        const J = fo(I);
        if (J) return J;
      }
  let d = [];
  try {
    d = typeof ((G = lr) == null ? void 0 : G.getNodeImageUrls) == "function" ? lr.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const oe of d) {
      const I = fo(oe);
      if (I) return I;
    }
  if (s) {
    const oe = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const I of oe) {
      const J = fo(I);
      if (J) return J;
    }
  }
  const u = (L = s == null ? void 0 : s.widgets) == null ? void 0 : L.find((oe) => String((oe == null ? void 0 : oe.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Lc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Pp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !c0(o) || r <= 1 || n <= 1) {
    Lc(t, r, n);
    return;
  }
  if (s.failed) {
    Lc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: ll(i, r, n),
    background: { media: o, revision: yk(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Lc(t, r, n);
}
function Np(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Sk {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = og(() => this.requestDraw()), this.controller = od({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Gt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Oe(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Oe(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${pa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = on({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return pa;
        },
        getHeight() {
          return pa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = ml(xu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(pa, Number(o.minHeight || 0)),
            minWidth: Math.max(gk, Number(o.minWidth || 0))
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
      return Vd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ _o({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = pk({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = ed(mk, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), $r(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Xh(r), t.addEventListener("pointerdown", (o) => {
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
      dk(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !c0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Fa(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = lr.canvas) != null && n.graph) || this.node.graph === lr.canvas.graph);
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
      return Np(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, d, u, f, p;
      const o = Rx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Np(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (p = r == null ? void 0 : r.stopImmediatePropagation) == null || p.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Dc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - wp - Dc);
    return { x: Dc, y: wp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Pp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? ig : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = fk(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = bk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Es(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = vk(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Pp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, p, k, h, m, b;
    if (((r = yg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (p = this.root) == null ? void 0 : p.remove) == null || k.call(p);
    } catch {
    }
    try {
      Jg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((b = (m = (h = this.node) == null ? void 0 : h.widgets) == null ? void 0 : m.find) == null ? void 0 : b.call(m, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function _k(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new Sk(e, t);
  $r(e).runtime = r, r.attach();
}
function u0(e, t, r) {
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
function Wd(e) {
  return !!(e != null && e.prototype);
}
function ks(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function wk(e, t = {}) {
  Wd(e) || _k(e, {
    ...t,
    onOpen: ks(e, t.onOpen)
  });
}
function xk(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Wd(e)) {
    _p(e, {
      ...n,
      onOpen: ks(e, t.onOpen)
    });
    return;
  }
  u0(e, "stickers_node_preview", (i) => {
    _p(i, {
      ...n,
      onOpen: ks(i, t.onOpen)
    });
  });
}
function kk(e, t = {}) {
  if (!Wd(e)) {
    Sp(e, {
      ...t,
      onOpen: ks(e, t.onOpen)
    });
    return;
  }
  u0(e, "cutout_preview", (r) => {
    Sp(r, {
      ...t,
      onOpen: ks(r, t.onOpen)
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
}, Dr = "pen";
function Ap(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Mk({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), Pk = new Set(Object.values(ft));
function Nk({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(h) {
    try {
      h();
    } catch (m) {
      i(m);
    }
  }
  function p() {
    !o && !s && !a && (o = e(k));
  }
  function k(h) {
    o = 0, s = !0;
    try {
      const m = c;
      c = /* @__PURE__ */ new Map();
      for (const G of m.values()) f(() => G(h));
      if (a) return;
      const b = l;
      l = /* @__PURE__ */ new Set(), (b.size || n()) && f(() => r(h, b));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && p();
  }
  return {
    requestDraw(h) {
      if (!Pk.has(h)) throw new Error(`Unknown draw reason: ${h}`);
      h === ft.STATE && (u += 1), l.add(h), p();
    },
    requestFrame(h) {
      const m = d++;
      return c.set(m, h), p(), m;
    },
    cancelFrame(h) {
      c.delete(h);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      p();
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
const Ak = { class: "pano-floating-right" }, Ck = {
  key: 0,
  class: "pano-floating-space"
}, Ik = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Ek = ["data-settled"], Ok = ["data-ready", "data-settled"], Fk = ["aria-label", "data-tip"], Tk = {
  key: 1,
  class: "pano-camera-preview-label"
}, Dk = {
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
    return (t, r) => (Le(), Ve(Ze, null, [
      Me("div", Ak, [
        e.space ? jr((Le(), Ve("div", Ck, [
          Me("div", Ik, [
            (Le(!0), Ve(Ze, null, kt(e.space.modes, (n) => (Le(), Gn(tn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(tn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ti, e.space.visible]
        ]) : pt("", !0),
        (Le(!0), Ve(Ze, null, kt(e.buttons, (n) => (Le(), Gn(tn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      jr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
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
          e.previewToggle.visible ? (Le(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(zt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Fk)) : pt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Le(), Ve("div", Tk, rt(e.preview.label || "Preview unavailable"), 1)) : pt("", !0)
        ], 14, Ok)
      ], 8, Ek), [
        [Ti, e.preview.visible]
      ])
    ], 64));
  }
}, Lk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Rk = ["y2", "transform"], Vk = ["transform"], $k = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Le(), Ve("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Le(), Ve("svg", Lk, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Le(!0), Ve(Ze, null, kt(nt(r), (s) => (Le(), Ve("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, Rk))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Vk),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ti, e.model.visible === !0]
    ]);
  }
}, zk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(jg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be($k, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, jk = ["aria-label"], Hk = { class: "pano-canvas-confirm-title" }, Gk = { class: "pano-canvas-confirm-text" }, Kk = { class: "pano-canvas-confirm-actions" }, Wk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Uk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null);
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
      const p = f.querySelector(`[data-action='${u}']`);
      p instanceof HTMLButtonElement && p.click();
    }
    function a() {
      var h;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const k = o()[0] || u;
      (h = k == null ? void 0 : k.focus) == null || h.call(k);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var b;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        u.preventDefault(), (b = p == null ? void 0 : p.focus) == null || b.call(p);
        return;
      }
      const k = f[0], h = f[f.length - 1], m = document.activeElement;
      if (u.shiftKey) {
        (m === k || m === p || !(p != null && p.contains(m))) && (u.preventDefault(), h.focus());
        return;
      }
      (m === h || !(p != null && p.contains(m))) && (u.preventDefault(), k.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ci(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, Il(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Cs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Le(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(d, ["self"])
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
        Me("div", Hk, rt(e.model.title), 1),
        Me("div", Gk, rt(e.model.text), 1),
        Me("div", Kk, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", Wk, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, jk)
    ], 512)) : pt("", !0);
  }
}, Bk = ["data-paint-pane"], Yk = ["hidden"], qk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Xk = ["aria-pressed", "disabled"], Jk = ["hidden"], Zk = { class: "pano-paint-color-pop-head" }, Qk = { class: "pano-paint-color-field" }, eM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, tM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, nM = { class: "pano-paint-color-field" }, rM = { class: "pano-paint-alpha-wrap" }, iM = ["value"], oM = { "data-paint-alpha-value": "" }, sM = ["hidden"], aM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, lM = ["data-paint-history-index", "aria-label", "disabled"], cM = ["data-paint-footer"], uM = ["data-paint-group"], dM = ["hidden"], fM = ["value", "disabled"], pM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, hM = ["hidden"], mM = {
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
    return (n, i) => (Le(), Ve("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Le(!0), Ve(Ze, null, kt(e.panes, (o) => {
        var s;
        return Le(), Ve("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Le(), Ve("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Le(!0), Ve(Ze, null, kt(e.paintSwatches, (a) => (Le(), Ve("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, qk))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Xk),
            Me("div", {
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
              Me("div", Zk, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", Qk, [
                Me("div", eM, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", tM, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", nM, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", rM, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, iM),
                  Me("span", oM, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", aM, [
                  (Le(!0), Ve(Ze, null, kt(e.state.historyEntries || [], (a) => (Le(), Ve("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, lM))), 128))
                ])
              ], 8, sM)
            ], 12, Jk)
          ], 10, Yk)) : pt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Le(!0), Ve(Ze, null, kt(o.tools, (a) => {
                var l;
                return Le(), Gn(tn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, uM),
            Me("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, fM),
              Me("span", pM, rt(e.state.sizeText || "10"), 1)
            ], 10, dM),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(tn, {
                icon: nt(Ke).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, hM)
          ], 8, cM)
        ], 10, Bk);
      }), 128))
    ], 2));
  }
}, gM = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null), i = /* @__PURE__ */ Jt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Le(), Ve(Ze, null, [
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
}, yM = ["aria-label"], bM = ["data-tip", "aria-pressed"], vM = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Le(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Le(!0), Ve(Ze, null, kt(e.buttons, (o) => (Le(), Ve("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, bM))), 128))
    ], 12, yM));
  }
}, SM = {
  key: 0,
  class: "pano-cutout-menu"
}, _M = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, wM = ["data-aspect"], xM = ["data-action", "aria-label", "data-tip", "disabled"], kM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Le(!0), Ve(Ze, null, kt(e.model.items || [], (n) => (Le(), Ve(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Le(), Ve("div", SM, [
          Me("button", _M, [
            Be(zt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Le(!0), Ve(Ze, null, kt(n.choices || [], (i) => (Le(), Ve("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, wM))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Le(), Gn(vM, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Le(), Ve("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be(zt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, xM))
      ], 64))), 128))
    ], 4));
  }
}, MM = {
  key: 0,
  class: "pano-easing"
}, PM = { class: "pano-section-title" }, NM = { class: "pano-easing-range" }, AM = { class: "pano-easing-modes" }, CM = ["aria-pressed", "onClick"], IM = ["viewBox"], EM = ["x", "y"], OM = ["x1", "y1", "x2", "y2"], FM = ["d"], TM = ["x1", "y1", "x2", "y2"], DM = ["x1", "y1", "x2", "y2"], LM = ["cx", "cy"], RM = ["cx", "cy"], VM = { class: "pano-easing-note" }, Er = 132, wi = 14, $M = {
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
    ], o = /* @__PURE__ */ Jt(null), s = dt(() => {
      var k;
      return Array.isArray((k = r.model) == null ? void 0 : k.easing) ? r.model.easing : null;
    }), a = (k) => wi + k * Er, l = (k) => wi + (1 - k) * Er, c = dt(() => {
      var G;
      if (((G = r.model) == null ? void 0 : G.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [k, h, m, b] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(k)} ${l(h)} ${a(m)} ${l(b)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((k) => k.toFixed(2)).join(", ") : "");
    function u(k) {
      var h;
      return JSON.stringify(k.easing) === JSON.stringify((h = r.model) == null ? void 0 : h.easing);
    }
    function f(k, h) {
      n("timeline", { type: "easing", easing: k, commit: h });
    }
    function p(k, h) {
      var oe;
      if (k.button !== 0 || !s.value) return;
      const m = k.currentTarget;
      (oe = m.setPointerCapture) == null || oe.call(m, k.pointerId);
      let b = null;
      const G = (I) => {
        const J = o.value.getBoundingClientRect(), T = J.width / (Er + wi * 2), B = ((I.clientX - J.left) / T - wi) / Er, ve = 1 - ((I.clientY - J.top) / T - wi) / Er;
        b = [...b || s.value], b[h] = Math.round(Math.min(1, Math.max(0, B)) * 100) / 100, b[h + 1] = Math.round(Math.min(1, Math.max(0, ve)) * 100) / 100, f(b, !1);
      }, L = () => {
        m.removeEventListener("pointermove", G), m.removeEventListener("pointerup", L), m.removeEventListener("pointercancel", L), b && f(b, !0);
      };
      m.addEventListener("pointermove", G), m.addEventListener("pointerup", L), m.addEventListener("pointercancel", L);
    }
    return (k, h) => e.model ? (Le(), Ve("div", MM, [
      Me("div", PM, [
        h[2] || (h[2] = Me("span", null, "Easing", -1)),
        Me("span", NM, rt(e.model.label), 1)
      ]),
      Me("div", AM, [
        (Le(), Ve(Ze, null, kt(i, (m) => Me("button", {
          key: m.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(m) ? "true" : "false",
          onClick: (b) => f(m.easing, !0)
        }, rt(m.label), 9, CM)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Le(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + wi * 2} ${Er + wi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, EM),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, OM),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, FM),
        s.value ? (Le(), Ve(Ze, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, TM),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, DM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: h[0] || (h[0] = (m) => p(m, 0))
          }, null, 40, LM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: h[1] || (h[1] = (m) => p(m, 2))
          }, null, 40, RM)
        ], 64)) : pt("", !0)
      ], 8, IM)) : pt("", !0),
      Me("div", VM, [
        e.model.mixed ? (Le(), Ve(Ze, { key: 0 }, [
          Go("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Le(), Ve(Ze, { key: 1 }, [
          Go("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Le(), Ve(Ze, { key: 2 }, [
          Go("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Le(), Ve(Ze, { key: 3 }, [
          Go("cubic-bezier(" + rt(d.value) + ")", 1)
        ], 64)) : pt("", !0)
      ])
    ])) : pt("", !0);
  }
}, zM = {
  key: 0,
  class: "pano-field-wide pano-handoff-row"
}, jM = { class: "pano-handoff-lanes" }, HM = ["data-lane", "disabled", "title"], GM = {
  __name: "PanoHandoffRevert",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Le(), Ve("div", zM, [
      r[0] || (r[0] = Me("label", null, "Upstream", -1)),
      Me("div", jM, [
        (Le(!0), Ve(Ze, null, kt(e.model.lanes, (n) => (Le(), Ve("button", {
          key: n.name,
          class: "pano-btn subtle pano-btn-tight",
          type: "button",
          "data-action": "revert-handoff-lane",
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, rt(n.label), 9, HM))), 128))
      ])
    ])) : pt("", !0);
  }
}, KM = ["title"], WM = { class: "pano-ui-row" }, UM = ["data-selected"], BM = ["aria-pressed", "disabled"], YM = ["aria-pressed", "disabled"], qM = { class: "pano-ui-row" }, XM = ["data-selected"], JM = ["aria-pressed", "disabled"], ZM = ["aria-pressed", "disabled"], QM = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Le(), Ve("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Me("div", WM, [
        r[0] || (r[0] = Me("label", null, "Visible", -1)),
        Me("div", {
          class: "pano-segment",
          "data-selected": e.model.visible ? "0" : "1"
        }, [
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-visible",
            "data-value": "1",
            "aria-pressed": e.model.visible ? "true" : "false",
            disabled: e.model.disabled
          }, "Shown", 8, BM),
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-visible",
            "data-value": "0",
            "aria-pressed": e.model.visible ? "false" : "true",
            disabled: e.model.disabled
          }, "Hidden", 8, YM)
        ], 8, UM)
      ]),
      Me("div", qM, [
        r[1] || (r[1] = Me("label", null, "Lock", -1)),
        Me("div", {
          class: "pano-segment",
          "data-selected": e.model.locked ? "1" : "0"
        }, [
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-locked",
            "data-value": "0",
            "aria-pressed": e.model.locked ? "false" : "true",
            disabled: e.model.disabled
          }, "Unlocked", 8, JM),
          Me("button", {
            class: "pano-segment-btn",
            type: "button",
            "data-action": "upstream-locked",
            "data-value": "1",
            "aria-pressed": e.model.locked ? "true" : "false",
            disabled: e.model.disabled
          }, "Locked", 8, ZM)
        ], 8, XM)
      ])
    ], 8, KM)) : pt("", !0);
  }
}, eP = {
  class: "pano-side",
  "data-side": ""
}, tP = { class: "pano-side-head" }, nP = { class: "pano-side-title" }, rP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, iP = {
  key: 0,
  class: "pano-side-scroll"
}, oP = { class: "pano-inspector" }, sP = { class: "pano-ui-row pano-coverage-row" }, aP = ["data-selected"], lP = ["aria-pressed", "disabled"], cP = ["aria-pressed", "disabled"], uP = {
  key: 0,
  class: "pano-section-title"
}, dP = { class: "meta" }, fP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, pP = {
  class: "pano-picker",
  "data-picker": "selection"
}, hP = ["disabled"], mP = { class: "pano-picker-label" }, gP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, yP = ["hidden"], bP = ["data-selection-id"], vP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, SP = {
  key: 2,
  class: "pano-state-actions"
}, _P = ["disabled"], wP = ["data-key"], xP = { class: "pano-field-group-values" }, kP = ["title", "onPointerdown"], MP = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], PP = ["data-key"], NP = ["min", "max", "step", "value", "disabled", "data-param-key"], AP = ["min", "max", "step", "value", "disabled", "data-param-key"], CP = ["open"], IP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, EP = { class: "pano-ui-settings-body" }, OP = { class: "pano-ui-row" }, FP = ["data-selected"], TP = ["aria-pressed"], DP = ["aria-pressed"], LP = { class: "pano-ui-row" }, RP = ["data-selected"], VP = ["aria-pressed"], $P = ["aria-pressed"], zP = {
  key: 1,
  class: "pano-side-footer"
}, jP = ["data-action"], HP = {
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
      const f = c.currentTarget, p = c.clientX, k = Number(u.value) || 0;
      let h = !1;
      f.setPointerCapture(c.pointerId);
      const m = (G) => {
        if (!h && Math.abs(G.clientX - p) < 3) return;
        h = !0;
        const L = k + (G.clientX - p) * d.drag * (G.shiftKey ? 0.1 : 1);
        u.value = String(Number(L.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, b = () => {
        f.removeEventListener("pointermove", m), f.removeEventListener("pointerup", b), f.removeEventListener("pointercancel", b), f.removeEventListener("lostpointercapture", b), h ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", m), f.addEventListener("pointerup", b), f.addEventListener("pointercancel", b), f.addEventListener("lostpointercapture", b);
    }
    return (c, d) => {
      var u, f, p, k, h, m;
      return Le(), Ve("div", eP, [
        Me("div", tP, [
          Me("div", nP, [
            Me("span", rP, [
              Be(zt, {
                icon: nt(Ke).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Le(), Ve("div", iP, [
          Me("div", oP, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", sP, [
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
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, lP),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "180", 8, cP)
              ], 8, aP)
            ]),
            e.model.transformTitle !== !1 ? (Le(), Ve("div", uP, [
              d[3] || (d[3] = Me("span", null, "Transform", -1)),
              Me("span", dP, rt(((m = e.model.upstream) == null ? void 0 : m.origin) || ""), 1)
            ])) : pt("", !0),
            e.model.selectionPicker ? (Le(), Ve("div", fP, [
              Me("label", null, rt(e.model.selectionPicker.label), 1),
              Me("div", pP, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", mP, [
                    e.model.selectionPicker.currentIcon ? (Le(), Ve("span", gP, [
                      Be(zt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Me("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, hP),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Le(!0), Ve(Ze, null, kt(e.model.selectionPicker.items || [], (b) => (Le(), Ve("button", {
                    key: b.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: b.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": b.id
                  }, [
                    b.icon ? (Le(), Ve("span", vP, [
                      Be(zt, {
                        icon: b.icon
                      }, null, 8, ["icon"])
                    ])) : pt("", !0),
                    Me("span", null, rt(b.label), 1)
                  ], 10, bP))), 128))
                ], 8, yP)
              ])
            ])) : pt("", !0),
            e.model.copyStateButton ? (Le(), Ve("div", SP, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(zt, {
                  icon: nt(Ke).copy
                }, null, 8, ["icon"]),
                Me("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, _P)
            ])) : pt("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Le(!0), Ve(Ze, { key: 0 }, kt(e.model.notes, (b) => (Le(), Ve("div", {
                key: b,
                class: "pano-param-note"
              }, rt(b), 1))), 128)) : (Le(!0), Ve(Ze, { key: 1 }, kt(e.model.rows || [], (b) => (Le(), Ve(Ze, {
                key: b.key
              }, [
                b.grouped ? (Le(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": b.key
                }, [
                  Me("label", null, rt(b.label), 1),
                  Me("div", xP, [
                    (Le(!0), Ve(Ze, null, kt(b.fields, (G) => (Le(), Ve("div", {
                      key: G.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: s(G, e.model) }]),
                        title: G.label,
                        onPointerdown: (L) => l(L, G)
                      }, rt(G.short), 43, kP),
                      Me("input", {
                        ref_for: !0,
                        ref: (L) => {
                          a[G.key] = L;
                        },
                        type: "number",
                        min: G.min,
                        max: G.max,
                        step: G.step,
                        value: G.displayValue,
                        disabled: s(G, e.model),
                        "aria-label": `${b.label} ${G.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": G.key
                      }, null, 8, MP)
                    ]))), 128))
                  ])
                ], 8, wP)) : (Le(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": b.key
                }, [
                  Me("label", null, rt(b.label), 1),
                  Me("input", {
                    type: "range",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].value,
                    disabled: s(b.fields[0], e.model),
                    style: Et(o(b.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": b.fields[0].key
                  }, null, 12, NP),
                  Me("input", {
                    type: "number",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].displayValue,
                    disabled: s(b.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": b.fields[0].key
                  }, null, 8, AP)
                ], 8, PP))
              ], 64))), 128))
            ], 2),
            Be(GM, {
              model: e.model.handoff
            }, null, 8, ["model"]),
            Be(QM, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Be($M, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (b) => n("timeline", b))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Le(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", IP, [
                  Be(zt, {
                    icon: nt(Ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", EP, [
                Me("div", OP, [
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
                    }, "Normal", 8, TP),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, DP)
                  ], 8, FP)
                ]),
                Me("div", LP, [
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
                    }, "Normal", 8, VP),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, $P)
                  ], 8, RP)
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
            ], 8, CP)) : pt("", !0)
          ])
        ])) : pt("", !0),
        (e.model.footerButtons || []).length ? (Le(), Ve("div", zP, [
          (Le(!0), Ve(Ze, null, kt(e.model.footerButtons, (b) => (Le(), Ve("button", {
            key: b.action,
            class: mt(["pano-btn", { "pano-btn-primary": b.primary === !0 }]),
            type: "button",
            "data-action": b.action
          }, rt(b.label), 11, jP))), 128))
        ])) : pt("", !0)
      ]);
    };
  }
}, GP = { class: "pano-timeline-bar" }, KP = ["aria-label", "data-tip"], WP = ["aria-label", "data-tip"], UP = { class: "pano-timeline-time" }, BP = ["data-tip"], YP = { key: 0 }, qP = ["min", "max", "value"], XP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, JP = ["max", "value"], ZP = ["aria-expanded"], QP = ["inert"], eN = { class: "pano-timeline-name" }, tN = ["aria-pressed", "aria-label", "data-tip", "onClick"], nN = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, rN = ["disabled", "aria-expanded", "aria-label", "onClick"], iN = ["title", "aria-current", "onClick"], oN = ["data-keyed", "aria-label", "onClick"], sN = ["onPointerdown"], aN = ["onPointerdown"], lN = ["onPointerdown"], cN = ["onPointerdown"], uN = ["aria-label", "data-tip", "onPointerdown"], dN = { key: 0 }, fN = ["onPointerdown"], pN = ["aria-label", "data-tip", "onPointerdown"], hN = { key: 0 }, mN = 10, gN = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null), s = /* @__PURE__ */ Jt(1), a = /* @__PURE__ */ Jt(0), l = /* @__PURE__ */ Jt(!1);
    let c = null, d = null, u = null;
    Ol(() => {
      c = new ResizeObserver(([V]) => {
        s.value = Math.max(1, V.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([V]) => {
        a.value = V.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Cs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), p = dt(() => r.playhead.frame.value), k = dt(() => r.playhead.playing.value), h = dt(() => D1(p.value, Number(r.model.fps || 1))), m = dt(() => s.value / f.value), b = (V) => `${V / f.value * 100}%`, G = dt(() => Y1(f.value, m.value));
    function L(V) {
      const ie = i.value.getBoundingClientRect(), te = Math.floor((V - ie.left) / Math.max(1, ie.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, te));
    }
    function oe(V, ie, te) {
      const x = Math.ceil(mN / Math.max(1e-6, m.value)), v = new Map(ie.map((w) => [w.frame, w.full]));
      return q1(ie.map((w) => w.frame), x).map((w, Z) => ({
        ...w,
        key: `${V}:${Z}`,
        partial: w.frames.some((X) => !v.get(X)),
        selected: w.frames.some((X) => te.includes(X))
      }));
    }
    const I = dt(() => {
      const V = /* @__PURE__ */ new Map();
      for (const ie of r.model.rows || []) {
        V.set(ie.id, oe(ie.id, ie.keys, ie.selectedFrames));
        for (const te of ie.lanes) V.set(te.key, oe(te.key, te.frames.map((x) => ({ frame: x, full: !0 })), te.selectedFrames));
      }
      return V;
    });
    function J(V) {
      const ie = V.end === null ? f.value : V.end;
      return { left: b(V.start), width: b(Math.max(0, ie - V.start)) };
    }
    function T(V, ie) {
      const te = V.clientX, x = Math.max(1e-6, m.value);
      let v = 0;
      ie("start", 0, V);
      const w = (X) => {
        if (X.pointerId !== V.pointerId) return;
        const O = Math.round((X.clientX - te) / x);
        O !== v && (v = O, ie("move", v, X));
      }, Z = (X) => {
        X.pointerId === V.pointerId && (u(), ie("end", v, X));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", Z), window.removeEventListener("pointercancel", Z), u = null;
      }, window.addEventListener("pointermove", w), window.addEventListener("pointerup", Z), window.addEventListener("pointercancel", Z);
    }
    function B(V) {
      V.button === 0 && T(V, (ie, te, x) => n("action", { type: "seek", frame: L(x.clientX), phase: ie }));
    }
    function ve(V, ie, te) {
      V.button === 0 && (n("action", { type: "select-row", id: ie.id }), T(V, (x, v) => n("action", { type: "clip", id: ie.id, mode: te, delta: v, phase: x })));
    }
    function _e(V, ie, te, x, v) {
      if (V.button === 0) {
        if (V.shiftKey) {
          n("action", { type: "select-keys", owner: ie.id, lane: te, frames: x.frames, additive: !0 });
          return;
        }
        x.frames.every((w) => v.includes(w)) || n("action", { type: "select-keys", owner: ie.id, lane: te, frames: x.frames, additive: !1 }), T(V, (w, Z) => n("action", { type: "move-keys", delta: Z, phase: w }));
      }
    }
    const he = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ye(V, ie, te) {
      n("action", ie), await Il(), V.target.value = te();
    }
    function de(V) {
      ye(V, { type: "fps", fps: Number(V.target.value) }, () => he.value);
    }
    function we(V) {
      const ie = V.target.value.trim();
      ye(V, { type: "length", length: ie ? Number(ie) : null }, () => r.model.length ?? "");
    }
    function ue(V, ie, te) {
      V.button !== 0 || V.target !== V.currentTarget || n("action", { type: "select-keys", owner: ie.id, lane: te, frames: [], additive: !1 });
    }
    return (V, ie) => jr((Le(), Ve("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", GP, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": k.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": k.value ? "Pause (Space)" : "Play (Space)",
          onClick: ie[0] || (ie[0] = (te) => n("action", { type: "play" }))
        }, [
          Be(zt, {
            icon: k.value ? nt(Ke).pause : nt(Ke).play
          }, null, 8, ["icon"])
        ], 8, KP),
        e.model.hasAudio ? (Le(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: ie[1] || (ie[1] = (te) => n("action", { type: "mute" }))
        }, [
          Be(zt, {
            icon: e.model.muted ? nt(Ke).volume_muted : nt(Ke).volume2
          }, null, 8, ["icon"])
        ], 8, WP)) : pt("", !0),
        Me("span", UP, rt(h.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Le(), Ve("span", YP, rt(he.value), 1)) : (Le(), Ve("input", {
            key: 1,
            type: "number",
            min: nt(fm),
            max: nt(dd),
            step: "any",
            value: he.value,
            "aria-label": "Timeline fps",
            onChange: de
          }, null, 40, qP)),
          ie[6] || (ie[6] = Me("span", null, "fps", -1))
        ], 8, BP),
        Me("label", XP, [
          ie[7] || (ie[7] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: nt(fd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: we
          }, null, 40, JP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: ie[2] || (ie[2] = (te) => n("action", { type: "toggle-expanded" }))
        }, [
          ie[8] || (ie[8] = Me("span", null, "Timeline", -1)),
          Be(zt, {
            icon: nt(Ke).chevron
          }, null, 8, ["icon"])
        ], 8, ZP)
      ]),
      Me("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: ie[3] || (ie[3] = Ct((te) => l.value = !0, ["self"])),
        onTransitionend: ie[4] || (ie[4] = Ct((te) => l.value = !1, ["self"])),
        onTransitioncancel: ie[5] || (ie[5] = Ct((te) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          ie[9] || (ie[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: B
          }, [
            (Le(!0), Ve(Ze, null, kt(G.value, (te) => (Le(), Ve("span", {
              key: te,
              class: "pano-timeline-tick",
              style: Et({ left: b(te) })
            }, rt(te), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: b(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Le(!0), Ve(Ze, null, kt(e.model.rows || [], (te) => (Le(), Ve(Ze, {
            key: te.id
          }, [
            Me("div", {
              class: mt(["pano-timeline-head", { selected: te.selected, "is-hidden": !te.visible }])
            }, [
              Me("div", eN, [
                te.hideable ? (Le(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": te.visible ? "true" : "false",
                  "aria-label": `${te.label} visible`,
                  "data-tip": te.visible ? "Hide" : "Show",
                  onClick: Ct((x) => n("action", { type: "toggle-visible", id: te.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: te.visible ? nt(Ke).eye : nt(Ke).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, tN)) : (Le(), Ve("span", nN)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !te.keyable,
                  "aria-expanded": te.open ? "true" : "false",
                  "aria-label": te.open ? `Hide ${te.label} parameters` : `Show ${te.label} parameters`,
                  onClick: Ct((x) => n("action", { type: "toggle-row", id: te.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: nt(Ke).chevron
                  }, null, 8, ["icon"])
                ], 8, rN),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: te.label,
                  "aria-current": te.selected ? "true" : void 0,
                  onClick: (x) => n("action", { type: "select-row", id: te.id })
                }, [
                  Be(zt, {
                    icon: te.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, rt(te.label), 1)
                ], 8, iN),
                te.keyable ? (Le(), Ve("button", {
                  key: 2,
                  class: mt(["pano-timeline-key", { keyed: nt(kc)(te.keys, p.value) }]),
                  type: "button",
                  "data-keyed": nt(kc)(te.keys, p.value) ? "true" : "false",
                  "aria-label": nt(kc)(te.keys, p.value) ? `Every ${te.label} parameter has a keyframe here; update them` : `Add keyframes for every ${te.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((x) => n("action", { type: "key-row", owner: te.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: nt(Ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, oN)) : pt("", !0)
              ]),
              te.open ? (Le(!0), Ve(Ze, { key: 0 }, kt(te.lanes, (x) => (Le(), Ve("div", {
                key: x.key,
                class: "pano-timeline-lane-head"
              }, rt(x.label), 1))), 128)) : pt("", !0)
            ], 2),
            Me("div", {
              class: mt(["pano-timeline-track", { selected: te.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (x) => ue(x, te, null)
              }, [
                te.clip ? (Le(), Ve("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: te.clip.end === null }]),
                  style: Et(J(te.clip)),
                  onPointerdown: Ct((x) => ve(x, te, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((x) => ve(x, te, "start"), ["stop"])
                  }, null, 40, lN),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((x) => ve(x, te, "end"), ["stop"])
                  }, null, 40, cN)
                ], 46, aN)) : pt("", !0),
                (Le(!0), Ve(Ze, null, kt(I.value.get(te.id), (x) => (Le(), Ve("button", {
                  key: x.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: x.selected, cluster: x.frames.length > 1, partial: x.partial }]),
                  style: Et({ left: b(x.frame + 0.5) }),
                  "aria-label": `${te.label}: ${x.frames.length > 1 ? `${x.frames.length} keyframes` : `keyframe at frame ${x.frames[0]}`}`,
                  "data-tip": x.frames.length > 1 ? `${x.frames.length} keyframes` : `Frame ${x.frames[0]}`,
                  onPointerdown: Ct((v) => _e(v, te, null, x, te.selectedFrames), ["stop"])
                }, [
                  x.frames.length > 1 ? (Le(), Ve("span", dN, rt(x.frames.length), 1)) : pt("", !0)
                ], 46, uN))), 128))
              ], 40, sN),
              te.open ? (Le(!0), Ve(Ze, { key: 0 }, kt(te.lanes, (x) => (Le(), Ve("div", {
                key: x.key,
                class: "pano-timeline-lane",
                onPointerdown: (v) => ue(v, te, x.lane)
              }, [
                (Le(!0), Ve(Ze, null, kt(I.value.get(x.key), (v) => (Le(), Ve("button", {
                  key: v.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: v.selected, cluster: v.frames.length > 1 }]),
                  style: Et({ left: b(v.frame + 0.5) }),
                  "aria-label": `${x.label}: ${v.frames.length > 1 ? `${v.frames.length} keyframes` : `keyframe at frame ${v.frames[0]}`}`,
                  "data-tip": v.frames.length > 1 ? `${v.frames.length} keyframes` : `Frame ${v.frames[0]}`,
                  onPointerdown: Ct((w) => _e(w, te, x.lane, v, x.selectedFrames), ["stop"])
                }, [
                  v.frames.length > 1 ? (Le(), Ve("span", hN, rt(v.frames.length), 1)) : pt("", !0)
                ], 46, pN))), 128))
              ], 40, fN))), 128)) : pt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: b(p.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, QP)
    ], 2)), [
      [Ti, e.model.visible]
    ]);
  }
}, yN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, bN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, vN = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", bN, [
      (Le(!0), Ve(Ze, null, kt(e.buttons, (n) => jr((Le(), Gn(tn, {
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
        [Ti, n.visible !== !1]
      ])), 128))
    ]));
  }
}, SN = ["data-video-ready"], _N = { class: "pano-video-transport-shell" }, wN = { class: "pano-video-controls-left" }, xN = { class: "pano-video-filmstrip" }, kN = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, MN = ["src", "onLoad"], PN = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, NN = ["max", "value", "disabled"], AN = { class: "pano-video-controls-right" }, CN = ["data-has-audio"], IN = { class: "pano-video-volume-pop" }, EN = ["value", "disabled"], ON = {
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
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? Ke.pause : Ke.play;
    }), o = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? Ke.loop_off : Ke.loop;
    }), l = dt(() => {
      var I, J;
      return ((I = t.state) == null ? void 0 : I.muted) === !0 || Number(((J = t.state) == null ? void 0 : J.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var I, J, T;
      return ((I = t.state) == null ? void 0 : I.hasAudio) !== !0 ? Ke.volume : ((J = t.state) == null ? void 0 : J.muted) === !0 || Number(((T = t.state) == null ? void 0 : T.volume) ?? 1) <= 0 ? Ke.volume_muted : Ke.volume2;
    }), d = dt(() => {
      var I;
      return Math.max(0, Math.min(100, Number(((I = t.state) == null ? void 0 : I.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var B, ve;
      const I = (B = t.state) == null ? void 0 : B.volumePct, J = Number(((ve = t.state) == null ? void 0 : ve.volume) ?? 1) * 100, T = Number(I ?? J ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, T))}%`
      };
    }), p = dt(() => {
      var T, B;
      const J = [
        String(((T = t.state) == null ? void 0 : T.currentTimeLabel) || "0:00"),
        String(((B = t.state) == null ? void 0 : B.durationLabel) || "0:00")
      ].reduce((ve, _e) => Math.max(ve, _e.length), 4);
      return `${Math.max(4, J)}ch`;
    }), k = dt(() => ({ "--pano-video-time-ch": p.value })), h = dt(() => {
      var T, B;
      const I = Array.isArray((T = t.state) == null ? void 0 : T.thumbnails) ? t.state.thumbnails : [];
      if (I.length) return I;
      const J = Math.max(7, Number(((B = t.state) == null ? void 0 : B.thumbnailCount) || 9));
      return Array.from({ length: J }, (ve, _e) => ({
        id: `placeholder-${_e}`,
        src: "",
        label: ""
      }));
    }), m = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), b = (I) => String((I == null ? void 0 : I.id) || (I == null ? void 0 : I.src) || (I == null ? void 0 : I.label) || ""), G = (I) => m.value.has(b(I)), L = (I) => {
      const J = new Set(m.value);
      J.add(b(I)), m.value = J;
    };
    Ci(h, (I) => {
      const J = new Set(I.map(b)), T = /* @__PURE__ */ new Set();
      for (const B of m.value)
        J.has(B) && T.add(B);
      m.value = T;
    }, { immediate: !0 });
    const oe = dt(() => {
      var I;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((I = t.state) == null ? void 0 : I.shellMaxWidthPx) || 640))}px`
      };
    });
    return (I, J) => (Le(), Ve("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(oe.value)
    }, [
      J[1] || (J[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      J[2] || (J[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", _N, [
        Me("div", wN, [
          Be(tn, {
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
            style: Et(k.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", xN, [
          Me("div", kN, [
            (Le(!0), Ve(Ze, null, kt(h.value, (T) => (Le(), Ve("div", {
              key: b(T),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !T.src,
                "is-loaded": T.src && G(T)
              }])
            }, [
              T.src ? (Le(), Ve("img", {
                key: 0,
                src: T.src,
                alt: "",
                draggable: "false",
                onLoad: (B) => L(T)
              }, null, 40, MN)) : (Le(), Ve("span", PN))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: Et(u.value),
            "aria-hidden": "true"
          }, [...J[0] || (J[0] = [
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
          }, null, 8, NN)
        ]),
        Me("div", AN, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(k.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Be(tn, {
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
            Me("div", IN, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, EN)
            ]),
            Be(tn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, CN)
        ])
      ])
    ], 14, SN));
  }
}, FN = { class: "pano-floating-top" }, TN = ["data-selected", "data-view-count"], DN = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], LN = { class: "label" }, RN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Le(), Ve("div", FN, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Le(!0), Ve(Ze, null, kt(e.buttons, (i) => jr((Le(), Ve("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(zt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", LN, rt(i.label), 1)
          ], 10, DN)), [
            [Ti, i.visible !== !1]
          ])), 128))
        ], 8, TN)
      ]);
    };
  }
};
function d0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ke.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ke.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: Ke.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ke.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ke.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ke.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ke.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ke.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ke.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ke.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ke.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ke.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ke.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ke.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ke.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ke.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ke.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ke.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ke.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ke.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ke.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ke.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ke.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ke.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ke.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ke.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ke.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ke.lasso_tool }
        ]
      }
    ]
  };
}
const VN = ["aria-label"], $N = { class: "pano-stage-column" }, zN = { class: "pano-stage-wrap" }, jN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, HN = {
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
    const l = /* @__PURE__ */ Jt(null), c = /* @__PURE__ */ Jt(null), d = /* @__PURE__ */ Jt(null);
    function u() {
      var he, ye;
      return ((ye = (he = d.value) == null ? void 0 : he.getRefs) == null ? void 0 : ye.call(he)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(he) {
      var ye, de;
      return ((de = (ye = c.value) == null ? void 0 : ye.open) == null ? void 0 : de.call(ye, he)) === !0;
    }
    function p(he) {
      i("image-file-selected", he);
    }
    function k(he) {
      i("image-file-cancelled", he);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const h = dt(() => n.readOnly === !0), m = dt(() => n.shellPreset || d0(n.type)), b = dt(() => {
      var ye, de, we;
      const he = String((((ye = n.uiState) == null ? void 0 : ye.stageStatus) === "failed" ? (de = n.uiState) == null ? void 0 : de.stageStatusDetail : (we = n.uiState) == null ? void 0 : we.stageWarningDetail) ?? "");
      return he === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : he === "stickers" ? "One or more sticker previews are unavailable." : he === "frame" ? "The editor hit a rendering error. Check the browser console for details." : he === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : he.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = dt(() => {
      var he, ye, de;
      return ((he = n.uiState) == null ? void 0 : he.stageStatus) === "failed" || (ye = n.uiState) != null && ye.stageWarningDetail ? b.value : (de = n.uiState) == null ? void 0 : de.stageNotice;
    }), L = dt(() => {
      var ye;
      const he = Array.isArray((ye = m.value) == null ? void 0 : ye.floatingButtons) ? m.value.floatingButtons.slice() : [];
      return h.value && he.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ke.fullscreen
      }), he;
    });
    function oe() {
      const he = l.value;
      return he ? Array.from(he.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ye) => ye instanceof HTMLElement ? !ye.hidden && ye.tabIndex >= 0 && ye.offsetParent !== null : !1) : [];
    }
    function I() {
      var de;
      const ye = oe()[0] || l.value;
      (de = ye == null ? void 0 : ye.focus) == null || de.call(ye);
    }
    function J() {
      var he;
      a != null && a.isConnected && ((he = a.focus) == null || he.call(a)), a = null;
    }
    function T(he) {
      var ye, de, we, ue;
      if (!he.defaultPrevented) {
        if (he.key === "Tab") {
          const V = oe();
          if (!V.length) {
            he.preventDefault(), (de = (ye = l.value) == null ? void 0 : ye.focus) == null || de.call(ye);
            return;
          }
          const ie = V[0], te = V[V.length - 1], x = document.activeElement;
          if (he.shiftKey) {
            (x === ie || x === l.value || !((we = l.value) != null && we.contains(x))) && (he.preventDefault(), te.focus());
            return;
          }
          (x === te || !((ue = l.value) != null && ue.contains(x))) && (he.preventDefault(), ie.focus());
          return;
        }
        he.key === "Escape" && i("close");
      }
    }
    function B() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ve() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function _e(he) {
      document.removeEventListener("keydown", T), he ? (a || (a = document.activeElement), B(), document.addEventListener("keydown", T), Il(() => {
        I();
      })) : (ve(), J());
    }
    return Ol(() => {
      _e(n.open);
    }), Cs(() => {
      ve(), document.removeEventListener("keydown", T), J();
    }), Ci(() => n.open, (he) => {
      _e(he);
    }), (he, ye) => e.open ? (Le(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ye[2] || (ye[2] = Ct((de) => i("close"), ["self"]))
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
        Me("div", $N, [
          Me("div", zN, [
            ye[3] || (ye[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ye[4] || (ye[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ye[5] || (ye[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Le(), Ve("div", jN, rt(G.value), 1)) : pt("", !0),
            ye[6] || (ye[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(gM, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(Hg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: p,
              onFileCancelled: k
            }, null, 512),
            h.value ? pt("", !0) : (Le(), Ve(Ze, { key: 1 }, [
              Be(vN, {
                buttons: e.uiState.toolButtons || m.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(zk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(mM, {
                "paint-swatches": e.paintSwatches,
                panes: m.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(ON, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(RN, {
              buttons: e.uiState.viewButtons || m.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(Dk, {
              buttons: e.uiState.floatingButtons || L.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(kM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(yN, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Uk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(gN, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ye[0] || (ye[0] = (de) => i("timeline", de))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? pt("", !0) : (Le(), Gn(HP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ye[1] || (ye[1] = (de) => i("timeline", de))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, VN)
    ])) : pt("", !0);
  }
}, or = "loading", Ms = "ready", qn = "failed";
function f0(e, t = "") {
  return e && (e.__panoLoadState = or, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function p0(e, t = "") {
  return e && (e.__panoLoadState = Ms, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function h0(e, t = "") {
  return e && (e.__panoLoadState = qn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Eu(e, t) {
  return e ? e.__panoLoadState === qn ? qn : typeof t == "function" && t(e) ? Ms : or : Ms;
}
function Ou(e) {
  return Eu(e) === qn;
}
function GN({ presented: e, background: t = Ms, stickers: r = [] } = {}) {
  if (!e) return { status: or, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === or, o = n.includes(or);
  if (i && o) return { status: or, detail: "mixed" };
  if (i) return { status: or, detail: "background" };
  if (o) return { status: or, detail: "stickers" };
  const s = t === qn, a = n.includes(qn);
  return s && a ? { status: qn, detail: "mixed" } : s ? { status: qn, detail: "background" } : a ? { status: qn, detail: "stickers" } : { status: Ms, detail: "" };
}
const KN = "state_json", WN = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Ud = "sticker_image_1", UN = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), m0 = 0.01, BN = "external_image", Fi = "pano_sticker_input_images", g0 = "pano_sticker_input_videos", y0 = "pano_sticker_input_frames", b0 = "pano_sticker_input_video_meta", YN = !0, ql = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pr = Math.PI / 180, Li = 180 / Math.PI, Fu = 1, v0 = "rgb(255, 221, 87)", qN = "rgb(228, 228, 231)", XN = "rgb(180, 150, 60)", JN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, ZN = 64, Cp = 40, Rc = 16, QN = 0.45, Ip = 180, e2 = 160, Sl = 24, t2 = 4, n2 = 4;
function Vc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function r2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function i2(e, t, r) {
  const n = Oe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function o2(e) {
  return e * e * e;
}
function Xl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ep(e, t) {
  return Xl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Op(e, t) {
  return Xl(e.x * t, e.y * t, e.z * t);
}
function $c(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function s2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xl(e.x / t, e.y / t, e.z / t);
}
function ha(e) {
  return {
    yaw: Gt(Math.atan2(e.x, e.z) * Li),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * Li, -90, 90)
  };
}
function Qr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function qo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function zc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return qo(e, t);
  const l = Oe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Yn(e, t, r) {
  return e + (t - e) * r;
}
function vr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(r, 0, 1)})`;
}
function a2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ma = { fillStyle: "", url: "" };
function l2(e, t, r) {
  if (ma.url && ma.fillStyle === String(e || ""))
    return ma.url;
  const n = a2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Sl}" height="${Sl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ma = { fillStyle: String(e || ""), url: n }, n;
}
function _l(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function $n(e) {
  return {
    r: Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Oe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function c2(e) {
  return ql.some((t) => _l(e, t.color));
}
function Tu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Oe(Number(t), 0, 1), o = Oe(Number(r), 0, 1);
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
function Du(e) {
  const t = Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function u2(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Fp(e) {
  const { paintCount: t, maskCount: r } = u2(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function S0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, p = Number(s.rot_deg || 0) * Pr, k = Math.max(0.01, Number(s.scale || 1));
  for (const h of [-n, 0, n])
    e.save(), e.translate(u + h, f), e.rotate(p), e.scale(k, k), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function io(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ga(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function d2(e, t) {
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
function Xo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function f2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function p2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function h2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const _0 = "pano_suite.ui_settings.v1", w0 = "pano_suite.node_grid_visibility.v1";
let to = null, mr = null;
function Va(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function m2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(_0)) || "").trim();
    if (!t) return to ? Va(to) : null;
    const r = JSON.parse(t), n = Va(r);
    return to = n, n;
  } catch {
    return to ? Va(to) : null;
  }
}
function g2(e) {
  var r;
  const t = Va(e);
  to = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(_0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function x0() {
  var e;
  if (mr && typeof mr == "object")
    return mr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(w0)) || "").trim();
    if (!t)
      return mr = {}, mr;
    const r = JSON.parse(t);
    return mr = r && typeof r == "object" ? r : {}, mr;
  } catch {
    return mr = {}, mr;
  }
}
function y2(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = x0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function b2(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = x0();
  n[r] = !!t, mr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(w0, JSON.stringify(n));
  } catch {
  }
}
function v2(e, t) {
  const r = { ...e }, n = t.map((i) => i(jc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(jc(r, t[o].name))), jc(r, "showEditor");
}
function jc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
function S2(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : wm(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
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
const k0 = "PANO_SCENE";
function _2(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: er(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function w2(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Ln(e("pano_upstream_coverage")[0])
  };
}
const x2 = "bg_media is not used";
function k2(e, t) {
  return e === k0 && t === null;
}
function M2(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Sr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function P2(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function N2(e, t, r) {
  const n = P2(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((p) => p.layer === i.id) ?? null : null, c = S2(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Mo(u, r), painting: d };
    for (const p of f.stickers)
      p.origin = { layer: n[s], id: p.id }, p.id = M0(n[s], p.id);
    return { key: n[s], sceneState: f, ui: o };
  });
}
function M0(e, t) {
  return `upstream:${e}:${t}`;
}
function Xt(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function Ps(e) {
  return !e.origin.layer.startsWith("#");
}
function P0(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? zi : $i).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function A2(e) {
  return Object.fromEntries(P0(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Tp(e) {
  return new Map(e.flatMap(({ sceneState: t }) => t.stickers.map((r) => [r.id, A2(r)])));
}
function C2(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  return r.forEach(({ key: a, sceneState: l }, c) => {
    for (const d of l.stickers) {
      const u = n.get(d.id);
      if (!u || !Ps(d)) continue;
      const f = P0(d).filter((G) => JSON.stringify(d[G]) !== u[G]);
      if (!f.length) continue;
      s = !0;
      let p = o.findIndex((G) => G.layer === a);
      if (p < 0 && (p = o.push({ layer: a, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[p].fps !== i) {
        const G = t[c].sceneState;
        o[p] = wm(o[p], G.timeline.fps === i ? G : Mo(G, i));
      }
      const { id: k } = d.origin, h = [...o[p].stickers], m = h.findIndex((G) => G.id === k), b = m >= 0 && h[m].placement === d.placement ? { ...h[m] } : { id: k, placement: d.placement };
      for (const G of f) b[G] = structuredClone(d[G]);
      m >= 0 ? h[m] = b : h.push(b), o[p] = { ...o[p], stickers: h };
    }
  }), s ? er({ version: 2, upstream: o }).upstream : e;
}
function I2(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = Os(s, r), c = (h) => h.visible ? n(h) : null, d = eg(s, r, { media: c, zIndex: (h) => h.z_index, paintLayers: i, evaluated: l }).map((h) => h.kind === "erp" ? { ...h, id: M0(t, h.id) } : h), u = rg(s, r, s.stickers, { media: c, evaluated: l }), f = [], p = al(Sr(a, "pano_scene_files"), Sr(a, "pano_scene_meta"), o);
  p && f.push({ slot: `${t}:scene`, urls: p.urls.filter(Boolean), request: wd(p, l.scene), value: l.scene, opacity: 1 });
  const k = al(Sr(a, "pano_sticker_files"), Sr(a, "pano_sticker_meta"), o);
  if (k) {
    const h = Um(k, s, l);
    f.push({ slot: `${t}:sticker`, urls: Bm(k, s), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: (h == null ? void 0 : h.opacity) ?? 1 });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ri = /* @__PURE__ */ new Map(), E2 = 12;
function O2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ri.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ri.delete(t), ri.set(t, r), r);
}
function F2(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ri.delete(r), ri.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ri.size > E2; ) {
      const i = ri.keys().next().value;
      if (!i) break;
      ri.delete(i);
    }
}
function T2(e) {
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
    readOnly: p,
    runtime: k,
    scheduler: h,
    stageWrap: m,
    state: b,
    stateV2: G,
    stillCanvas: L,
    studio: oe,
    timelinePlayhead: I,
    type: J,
    uiState: T,
    videoEl: B
  } = e;
  let ve, _e, he, ye, de, we;
  const ue = {
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
  }, V = 9, ie = [];
  let te = 0;
  const x = () => {
    var Ce, ze;
    const P = (Ce = m == null ? void 0 : m.getBoundingClientRect) == null ? void 0 : Ce.call(m), re = (ze = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : ze.call(i), ee = Math.max(0, Number((P == null ? void 0 : P.width) || 0)), ge = re ? Math.max(0, Number(re.width || 0)) : 0, Re = ge > 0 ? ge + 14 + 12 : 72, We = Math.max(280, Math.floor(ee - Re * 2)), Ge = r.fullscreen ? Math.min(1200, We) : We;
    T.videoTransport.shellMaxWidthPx = Ge;
  }, v = () => {
    te || (te = h.requestFrame(() => {
      te = 0, x();
    }));
  }, w = (P) => {
    if (!(P instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(P.audioTracks) && P.audioTracks.length > 0 || P.audioTracks && typeof P.audioTracks.length == "number" && P.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof P.mozHasAudio == "boolean") return P.mozHasAudio;
    } catch {
    }
    try {
      if (Number(P.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!T.videoTransport.hasAudio;
  }, Z = typeof ResizeObserver < "u" ? new ResizeObserver(() => v()) : null;
  Z == null || Z.observe(m), i && (Z == null || Z.observe(i)), ie.push(() => {
    var P;
    te && (h.cancelFrame(te), te = 0), (P = Z == null ? void 0 : Z.disconnect) == null || P.call(Z);
  }), v();
  const X = () => {
    ue.thumbnailJobId += 1, ue.thumbnailSrc = "", T.videoTransport.thumbnails = [], T.videoTransport.thumbnailCount = V;
  }, O = async (P, re, ee) => {
    const ge = String(P || "").trim();
    if (!ge) {
      X();
      return;
    }
    const Pe = O2(ge);
    if (Pe) {
      ue.thumbnailSrc = ge, T.videoTransport.thumbnails = Pe.thumbnails, T.videoTransport.thumbnailCount = Pe.thumbnailCount;
      return;
    }
    const Ee = ++ue.thumbnailJobId;
    ue.thumbnailSrc = ge, T.videoTransport.thumbnails = [], T.videoTransport.thumbnailCount = V;
    const Re = Es(document, "editor.thumbnails");
    Re.preload = "auto", Re.muted = !0, Re.playsInline = !0, Re.crossOrigin = "anonymous";
    const We = on({ label: "editor.thumbnail" });
    try {
      const Ge = await new Promise((Ue) => {
        let ut = !1;
        const yt = (Dt) => {
          ut || (ut = !0, Ue(Dt));
        };
        Re.addEventListener("loadedmetadata", () => yt(!0), { once: !0 }), Re.addEventListener("canplay", () => yt(!0), { once: !0 }), Re.addEventListener("error", () => yt(!1), { once: !0 }), Re.src = ge, Re.load();
      });
      if (ue.thumbnailJobId !== Ee) return;
      const Ce = Number(Re.videoWidth || 0), ze = Number(Re.videoHeight || 0);
      if (!Ge || Ce < 1 || ze < 1) {
        ue.thumbnailFailedSrcs.add(ge);
        return;
      }
      const se = Math.max(0, Number(Re.duration || re || 0)), Ie = 46, Ae = Math.max(72, Math.round(Ce / ze * Ie));
      We.width = Ae, We.height = Ie;
      const Fe = We.getContext("2d");
      if (!Fe) return;
      const je = [], He = (Ue) => new Promise((ut) => {
        let yt = !1;
        const Dt = () => {
          yt || (yt = !0, ut());
        };
        Re.addEventListener("seeked", Dt, { once: !0 }), Re.addEventListener("error", Dt, { once: !0 });
        try {
          Re.currentTime = Ue;
        } catch {
          Dt();
        }
      });
      for (let Ue = 0; Ue < V; Ue += 1) {
        if (ue.thumbnailJobId !== Ee) return;
        const ut = V <= 1 ? 0 : Ue / (V - 1), yt = se > 0 ? Math.max(0, Math.min(se - Math.max(1e-3, 0.5 / Math.max(1, Number(ee || 24))), se * ut)) : 0;
        if (await He(yt), ue.thumbnailJobId !== Ee) return;
        Fe.clearRect(0, 0, Ae, Ie), Fe.drawImage(Re, 0, 0, Ae, Ie), je.push({
          id: `thumb-${Ue}`,
          src: We.toDataURL("image/jpeg", 0.72),
          time: yt,
          label: _(yt)
        });
      }
      if (ue.thumbnailJobId !== Ee) return;
      T.videoTransport.thumbnails = je, T.videoTransport.thumbnailCount = je.length || V, F2(ge, {
        thumbnails: je,
        thumbnailCount: je.length || V,
        duration: se,
        fps: ee
      });
    } finally {
      Re.removeAttribute("src"), Re.load(), hs(We);
    }
  };
  ie.push(() => {
    X();
  });
  const S = Og({
    video: B instanceof HTMLVideoElement ? B : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (P) => h.requestFrame(P),
      cancelFrame: (P) => h.cancelFrame(P)
    },
    fps: A,
    span: () => {
      if (G) return we();
      const P = Math.round(Number(T.videoTransport.duration || 0) * A());
      return B.loop || !(P > 0) ? 1 / 0 : P;
    },
    loop: () => G,
    onFrame: (P) => {
      G ? he(P) : g(), _e({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      E() && (k.backgroundDirty = !0);
    },
    onChange: () => {
      g(), I.playing.value = S.playing, de(), _e({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  ie.push(() => S.dispose());
  const W = G && f instanceof HTMLVideoElement ? Td({
    video: f,
    onCapture: () => {
      var ee;
      const P = Number(f.videoWidth || 0), re = Number(f.videoHeight || 0);
      P < 1 || re < 1 || (u.width = P, u.height = re, (ee = u.getContext("2d")) == null || ee.drawImage(f, 0, 0), u.__panoFrameIdx += 1, _e({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => _e({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  W && ie.push(() => W.dispose());
  const ne = G ? Cd({
    createImage: (P, re) => {
      const ee = new Image();
      return ee.onload = re, ee.onerror = re, ee.src = P, ee;
    },
    onLoad: () => _e({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (B instanceof HTMLVideoElement) {
    const P = () => {
      H(), _e({ cause: "frame_view", localOnly: !0 });
    }, re = () => {
      g({
        hasAudio: T.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? T.videoTransport.volume ?? 1)
      });
    }, ee = () => {
      const ge = B.dataset.panoSrc;
      ge && (ue.failedSrcs.add(ge), H(), _e());
    };
    for (const [ge, Pe] of [
      ["loadedmetadata", P],
      ["loadeddata", P],
      ["canplay", P],
      ["volumechange", re],
      ["error", ee]
    ])
      B.addEventListener(ge, Pe), ie.push(() => B.removeEventListener(ge, Pe));
  }
  function me(P) {
    return t.uiList(d, P);
  }
  function Se(P) {
    return t.uiValue(d, P);
  }
  function C() {
    const P = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ja(P))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const re = ae();
    return re ? { videoKey: re.videoKey, metaKey: re.metaKey } : J === "stickers" || J === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: P } = C(), re = Se(P);
    return Array.isArray(re) && re.length > 0 && re[0] && typeof re[0] == "object" ? re[0] : re && typeof re == "object" ? re : null;
  }
  function y(P) {
    return P ? P instanceof HTMLVideoElement ? [
      String(P.currentSrc || P.src || ""),
      Number(P.videoWidth || 0),
      Number(P.videoHeight || 0)
    ].join("|") : P instanceof HTMLCanvasElement ? [
      "canvas",
      Number(P.width || 0),
      Number(P.height || 0),
      String(P.__panoFrameIdx || 0)
    ].join("|") : [
      String(P.currentSrc || P.src || ""),
      Number(P.naturalWidth || P.width || 0),
      Number(P.naturalHeight || P.height || 0)
    ].join("|") : "none";
  }
  function _(P) {
    const re = Math.max(0, Math.floor(Number(P || 0))), ee = Math.floor(re / 60), ge = re % 60;
    return `${ee}:${String(ge).padStart(2, "0")}`;
  }
  function A() {
    return G ? b.timeline.fps : ue.metaFps || 1e3;
  }
  function g(P = {}) {
    const re = Number(P.duration ?? T.videoTransport.duration ?? 0), ee = Math.max(1, Number(P.fps ?? T.videoTransport.fps ?? 24)), ge = S.frame / A(), Pe = Object.prototype.hasOwnProperty.call(P, "ready") ? !!P.ready : !!T.videoTransport.ready, Ee = S.playing, Re = Object.prototype.hasOwnProperty.call(P, "visible") ? !!P.visible : !!T.videoTransport.visible, We = Object.prototype.hasOwnProperty.call(P, "muted") ? !!P.muted : !!(B instanceof HTMLVideoElement ? B.muted : T.videoTransport.muted), Ge = Number(
      Object.prototype.hasOwnProperty.call(P, "volume") ? P.volume : B instanceof HTMLVideoElement ? B.volume : T.videoTransport.volume
    ), Ce = Object.prototype.hasOwnProperty.call(P, "hasAudio") ? !!P.hasAudio : w(B), ze = Object.prototype.hasOwnProperty.call(P, "loop") ? !!P.loop : !!T.videoTransport.loop;
    Object.assign(T.videoTransport, {
      ready: Pe,
      playing: Ee,
      visible: Re,
      loop: ze,
      currentTime: Number.isFinite(ge) ? ge : 0,
      duration: Number.isFinite(re) ? re : 0,
      progressPct: re > 1e-6 ? Math.max(0, Math.min(100, ge / re * 100)) : 0,
      currentTimeLabel: _(ge),
      durationLabel: _(re),
      frameCount: Math.max(0, Number(P.frameCount ?? T.videoTransport.frameCount ?? 0)),
      fps: ee,
      hasAudio: Ce,
      muted: We,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)) * 100),
      thumbnails: Array.isArray(P.thumbnails) ? P.thumbnails : T.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(P.thumbnailCount ?? T.videoTransport.thumbnailCount ?? V))
    });
  }
  function D() {
    return !!(B instanceof HTMLVideoElement && !G && B.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function R() {
    if (!(B instanceof HTMLVideoElement) || !T.videoTransport.hasAudio) return;
    const P = !B.muted;
    B.muted = P, !P && Number(B.volume || 0) <= 0 && (B.volume = Math.max(0.01, Number(T.videoTransport.volume || 1))), g({
      hasAudio: T.videoTransport.hasAudio,
      muted: B.muted,
      volume: Number(B.volume ?? T.videoTransport.volume ?? 1)
    });
  }
  function q() {
    g({
      visible: D()
    });
  }
  function E() {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return !1;
    const P = Number(B.videoWidth || 0), re = Number(B.videoHeight || 0);
    (L.width !== P || L.height !== re) && (L.width = P, L.height = re);
    const ee = L.getContext("2d");
    return ee ? (ee.clearRect(0, 0, P, re), ee.drawImage(B, 0, 0, P, re), L.__panoFrameIdx = Number(L.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function F() {
    return !S.showsVideo && Number(L.width || 0) > 0 && Number(L.height || 0) > 0 && Number(L.__panoFrameIdx || 0) > 0 ? L : B instanceof HTMLVideoElement && Number(B.videoWidth || 0) > 0 && Number(B.videoHeight || 0) > 0 && Number(B.readyState || 0) >= 2 ? B : null;
  }
  function M() {
    L.__panoFrameIdx = 0, k.backgroundDirty = !0;
  }
  function H() {
    if (!(B instanceof HTMLVideoElement)) return null;
    const { videoKey: P } = C(), re = (ae() || Kt(d, "background")) && me(P)[0] || null, ee = l(re), ge = [ee, t.linkedVideoFile(d, U())].filter(Boolean), Pe = ge.find((se) => !ue.failedSrcs.has(se)) || "";
    ue.videoFailed = !Pe && ge.length > 0;
    const Ee = Pe && Pe === ee ? le() : null;
    ue.metaFps = Number(Ee == null ? void 0 : Ee.fps) > 0 ? Number(Ee.fps) : 0;
    const Re = Math.max(1, Number((Ee == null ? void 0 : Ee.fps) || (G ? b.timeline.fps : 24))), We = B.dataset.panoSrc === Pe && Number.isFinite(B.duration) ? B.duration : 0, Ge = Number((Ee == null ? void 0 : Ee.duration) || ((Ee == null ? void 0 : Ee.frames) > 0 ? Ee.frames / Re : We)), Ce = Math.max(0, Number((Ee == null ? void 0 : Ee.frames) || Math.round(Ge * Re))), ze = !!(Ee != null && Ee.has_audio) || w(B);
    return Pe && B.dataset.panoSrc !== Pe ? (B.pause(), M(), B.dataset.panoSrc = Pe, B.loop = !G && !!T.videoTransport.loop, B.muted = !!T.videoTransport.muted, B.volume = Math.max(0, Math.min(1, Number(T.videoTransport.volume ?? 1))), B.src = Pe, B.load(), S.setSource(!0), G || S.seek(0)) : !Pe && B.getAttribute("src") && (B.pause(), B.removeAttribute("src"), delete B.dataset.panoSrc, B.load(), M(), X(), S.setSource(!1)), G || (B.loop = !!T.videoTransport.loop), Pe && !G && ue.thumbnailSrc !== Pe && !ue.thumbnailFailedSrcs.has(Pe) && O(Pe, Ge, Re), Pe || X(), g({
      ready: !!Pe,
      visible: !!Pe && D(),
      duration: Ge,
      frameCount: Ce,
      fps: Re,
      hasAudio: ze,
      loop: !!B.loop,
      muted: !!B.muted,
      volume: Number(B.volume ?? T.videoTransport.volume ?? 1),
      thumbnailCount: T.videoTransport.thumbnailCount
    }), Pe || null;
  }
  function Y(P, re = null) {
    return c(d, P, o, re || (() => _e()));
  }
  function fe(P = null) {
    return Kt(d, "external-sticker") ? Y(Fi, P) : null;
  }
  function be() {
    if (!Kt(d, "external-sticker")) return null;
    const P = me(b0)[0];
    if (!P || typeof P != "object") return null;
    const re = me(y0).map(l).filter(Boolean);
    if (re.length) return { frames: re, meta: P };
    const ee = l(me(g0)[0] || null);
    return ee ? { src: ee, meta: P } : null;
  }
  function ke() {
    const P = b.stickers.find(ve), re = P ? be() : null, ee = re ? Nd(P.clip, r.frame, b.timeline.fps, re.meta) : null;
    W.follow({ src: (re == null ? void 0 : re.src) || "", time: ee, playing: S.advancing, fps: b.timeline.fps });
    const ge = P ? K(P) : null, Pe = re != null && re.frames ? ne.picture(re.frames, ee, re.meta, ge) : W.picture(u, ge);
    return Pe ? { media: Pe, revision: y(Pe), source: Ad(re, ge) } : null;
  }
  function ce() {
    return !G || !Kt(d, "scene") ? null : al(me("pano_scene_files"), me("pano_scene_meta"), l);
  }
  function xe() {
    return !G || !Kt(d, "external-sticker") ? null : al(me("pano_sticker_files"), me("pano_sticker_meta"), l);
  }
  function K(P) {
    var Re;
    if (P && typeof P == "object" && (ve(P) || P.external === !0))
      return fe(() => {
        ii(d, "image-loaded");
      });
    const re = G ? pe(P) : String(P && typeof P == "object" ? P.asset_id || P.assetId || "" : P || "");
    if (!re) return null;
    const ee = o.get(re);
    if (ee) return ee;
    const ge = G ? sl(P.source) : (Re = b.assets) == null ? void 0 : Re[re], Pe = a(ge);
    if (!Pe) return null;
    const Ee = new Image();
    return f0(Ee, Pe), Ee.onload = () => {
      p0(Ee, Pe), _e();
    }, Ee.onerror = () => {
      h0(Ee, Pe), _e();
    }, Ee.src = Pe, o.set(re, Ee), Ee;
  }
  function pe(P) {
    const { source: re } = P;
    return re.filename ? `file:${re.storage}:${re.subfolder}:${re.filename}` : `sticker:${P.id}`;
  }
  function z() {
    if (J === "cutout") {
      const Ee = F();
      if (Ee) return Ee;
      const Re = s(
        d,
        ["erp_image", "bg_erp"],
        () => _e(),
        "background:cutout:erp_image|bg_erp"
      );
      return Re && !Ou(Re) ? Re : c(d, "pano_input_images", o, () => _e()) || Re || null;
    }
    const P = F();
    if (P) return P;
    const re = ae(), ee = re || Kt(d, "background") ? c(d, (re == null ? void 0 : re.imageKey) ?? "pano_input_images", o, () => _e()) : null;
    if (ee && !Ou(ee)) return ee;
    if (B instanceof HTMLVideoElement && B.dataset.panoSrc) return B;
    if (re) return ee;
    const ge = U();
    return s(d, ge, () => _e(), `background:${ge.join("|")}`) || ee || null;
  }
  function ae() {
    return !oe || !Kt(d, "scene") ? null : w2(me);
  }
  function $() {
    var P;
    return ((P = ae()) == null ? void 0 : P.coverage) ?? Ln(b.coverage);
  }
  function U() {
    if (ae()) return [];
    if (J === "cutout") return ["erp_image", "bg_erp"];
    const P = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((ge) => String((ge == null ? void 0 : ge.name) || "")) : [], re = P.includes("erp_image"), ee = P.includes("bg_erp");
    return p && (re || ee) ? re ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : J === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function j(P) {
    return P ? P instanceof HTMLImageElement ? !!P.complete && Number(P.naturalWidth || P.width || 0) > 0 && Number(P.naturalHeight || P.height || 0) > 0 : P instanceof HTMLVideoElement ? Number(P.videoWidth || 0) > 0 && Number(P.videoHeight || 0) > 0 && Number(P.readyState || 0) >= 2 : Number(P.width || P.naturalWidth || 0) > 0 && Number(P.height || P.naturalHeight || 0) > 0 : !1;
  }
  function N() {
    if (n.failed) return { status: qn, detail: "renderer" };
    if (!n.ready) return { status: or, detail: "boot" };
    const P = z(), re = ue.videoFailed ? qn : Eu(P, j), ee = [];
    for (const ge of ye()) {
      if ((ge == null ? void 0 : ge.visible) === !1) continue;
      const Pe = K(ge);
      ee.push(Eu(Pe, j));
    }
    return GN({
      presented: k.hasPresentedFrame,
      background: re,
      stickers: ee
    });
  }
  function Q() {
    B instanceof HTMLVideoElement && B.pause(), ie.forEach((P) => {
      try {
        P();
      } catch {
      }
    });
  }
  return {
    connect(P) {
      ({
        isExternalSticker: ve,
        requestDraw: _e,
        setTimelineFrame: he,
        skyStickers: ye,
        syncTimeline: de,
        timelineSpanFrames: we
      } = P);
    },
    videoState: ue,
    queueVideoTransportLayout: v,
    playback: S,
    portVideo: W,
    getNodeUiValue: Se,
    getMediaRevisionToken: y,
    playbackFps: A,
    syncVideoTransportState: g,
    toggleVideoMuted: R,
    syncVideoTransportVisibility: q,
    refreshModalVideoSource: H,
    getStickerUiImage: Y,
    getExternalStickerPreviewImage: fe,
    getPortMedia: be,
    followPortSticker: ke,
    getStickerImage: K,
    stickerImageKey: pe,
    getConnectedErpImage: z,
    backgroundCoverage: $,
    upstreamBackground: ae,
    isDecodedImageReady: j,
    getStageImageStatus: N,
    sceneFiles: ce,
    stickerFiles: xe,
    disposeMediaSession: Q
  };
}
function D2(e = 80, t = null, r = 8) {
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
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), p = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: p
      };
    },
    hydrate: a
  };
}
const L2 = 80;
function N0(e) {
  return JSON.stringify(tS(e));
}
function R2(e) {
  return D2(L2, { entries: [N0(e)], index: 0 });
}
function A0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function V2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve;
  function _e() {
    r || (oe(), J(), B(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(N0(L())), T()));
  }
  function he(de) {
    var ie, te;
    if (r) return;
    G();
    const we = de < 0 ? t.historyController.undo() : t.historyController.redo();
    if (T(), !we) return;
    const ue = nS(i, we), V = (ie = i.timeline) == null ? void 0 : ie.fps;
    Object.keys(i).forEach((x) => delete i[x]), Object.assign(i, ue.state), oe(!1), J({ restored: !0 }), o && h(), o && i.timeline.fps !== V && k.seek(Math.round(t.frame * i.timeline.fps / V)), t.selectedId = A0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((te = d()) == null ? void 0 : te.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, ue.paintingChanged ? p() : f(), I(), ve(), c(), b({ cause: "cutout_frame" });
  }
  function ye() {
    var ue, V;
    const de = Array.isArray((ue = t.historyController) == null ? void 0 : ue.entries) ? t.historyController.entries : [], we = Number((V = t.historyController) == null ? void 0 : V.index);
    return {
      canUndo: !r && de.length > 1 && we > 0,
      canRedo: !r && de.length > 1 && we >= 0 && we < de.length - 1
    };
  }
  return {
    connect(de) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: k,
        rebuildUpstreamWorking: h,
        releaseHiddenSelection: m,
        requestDraw: b,
        stopTimelinePlayback: G,
        storedEditorState: L,
        syncCutoutShot: oe,
        syncPaintUi: I,
        syncPortHandoff: J,
        syncUndoRedoButtons: T,
        syncUpstreamEdits: B,
        updateSidePanel: ve
      } = de);
    },
    pushHistory: _e,
    restoreHistory: he,
    getHistoryCapabilities: ye
  };
}
function $2(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, k, h, m;
  function b() {
    return s !== "stickers" ? i.shots : n ? [...G(), ...L()] : G();
  }
  function G() {
    return n ? i.stickers.filter((N) => N.placement === "sky") : i.stickers;
  }
  function L() {
    if (!n) return [];
    const N = m(), Q = [...new Set(N.map((P) => P.origin.layer))];
    return N.filter((P) => P.placement === "sky").sort((P, re) => Q.indexOf(P.origin.layer) - Q.indexOf(re.origin.layer) || P.z_index - re.z_index);
  }
  function oe(N) {
    return i.stickers.find((Q) => Q.id === N) || m().find((Q) => Q.id === N) || null;
  }
  function I(N) {
    return n && C(N);
  }
  function J(N) {
    return N.source.kind === "file" && !N.source.filename && !N.source.data_url;
  }
  function T(N) {
    if (!I(N)) return N;
    const Q = ce(N) ? Xt(N) ? h(N) : p(N) : null;
    return md(N, r.frame, Q && { width: Q.naturalWidth || Q.width, height: Q.naturalHeight || Q.height });
  }
  function B(N, Q) {
    I(N) ? Fm(N, r.frame, Q) : Object.assign(N, Q);
  }
  function ve() {
    const N = i.painting || (i.painting = xo(null));
    return Array.isArray(N.groups) || (N.groups = []), N.groups;
  }
  function _e(N = "paint") {
    var ee, ge;
    const Q = Array.isArray((ge = (ee = i.painting) == null ? void 0 : ee[N]) == null ? void 0 : ge.strokes) ? i.painting[N].strokes : [], P = [], re = /* @__PURE__ */ new Set();
    for (const Pe of Q) {
      const Ee = String((Pe == null ? void 0 : Pe.actionGroupId) || "").trim();
      !Ee || re.has(Ee) || (re.add(Ee), P.push(Ee));
    }
    return P;
  }
  function he() {
    return _e("paint");
  }
  function ye(N, Q) {
    const P = String(Q || "").trim();
    return P ? `${N === "mask" ? "mask" : "paint"}:${P}` : "";
  }
  function de(N) {
    const Q = String(N || "").trim();
    return Q ? `raster:${Q}` : "";
  }
  function we(N) {
    const Q = String(N || "").trim();
    if (!Q) return "";
    const P = Q.match(/^raster:(.*)$/);
    return String(P ? P[1] || "" : Q).trim();
  }
  function ue(N, Q = null) {
    const P = String(N || "").trim();
    if (!P) return { layerKind: "paint", actionGroupId: "" };
    const re = P.match(/^(paint|mask):(.*)$/);
    return re ? { layerKind: re[1] === "mask" ? "mask" : "paint", actionGroupId: String(re[2] || "").trim() } : { layerKind: Q === "mask" ? "mask" : "paint", actionGroupId: P };
  }
  function V() {
    var Q;
    let N = -1;
    for (const P of G())
      N = Math.max(N, Number((P == null ? void 0 : P.z_index) || 0));
    for (const P of ve())
      N = Math.max(N, Number((P == null ? void 0 : P.z_index) || 0));
    for (const P of Array.isArray((Q = i.painting) == null ? void 0 : Q.raster_objects) ? i.painting.raster_objects : [])
      String((P == null ? void 0 : P.layerKind) || "paint") === "paint" && (N = Math.max(N, Number((P == null ? void 0 : P.z_index) || 0)));
    return N + 1;
  }
  function ie(N, Q = null) {
    const P = String(N || "").trim();
    if (!P) return null;
    const re = ve();
    let ee = re.find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === P);
    return ee ? Q != null && (ee.z_index = Math.max(0, Number(Q || 0))) : (ee = {
      id: P,
      type: "strokeGroup",
      actionGroupId: P,
      z_index: Q == null ? V() : Math.max(0, Number(Q || 0)),
      locked: !1,
      frame: null
    }, re.push(ee)), ee;
  }
  function te(N) {
    if (!(N != null && N.centerUv)) return [];
    const Q = Number(N.centerUv.u || 0), P = Number(N.centerUv.v || 0), re = Number(N.halfW || 0), ee = Number(N.halfH || 0);
    return [
      {
        u: ((Q - re) % 1 + 1) % 1,
        v: Oe(P - ee, 0, 1)
      },
      {
        u: ((Q + re) % 1 + 1) % 1,
        v: Oe(P - ee, 0, 1)
      },
      {
        u: ((Q + re) % 1 + 1) % 1,
        v: Oe(P + ee, 0, 1)
      },
      {
        u: ((Q - re) % 1 + 1) % 1,
        v: Oe(P + ee, 0, 1)
      }
    ];
  }
  function x() {
    const N = new Set(he()), P = ve().filter((re) => N.has(String((re == null ? void 0 : re.actionGroupId) || "")));
    return N.forEach((re) => {
      P.some((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === re) || P.push({
        id: re,
        type: "strokeGroup",
        actionGroupId: re,
        z_index: V(),
        locked: !1,
        frame: null
      });
    }), P.sort((re, ee) => Number((re == null ? void 0 : re.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), i.painting.groups = P, P;
  }
  function v(N, Q, P) {
    var Ae;
    const re = (Fe) => (Number(Fe || 0) % 1 + 1) % 1, ee = [];
    for (const Fe of P) {
      const je = Fe == null ? void 0 : Fe.geometry, He = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(He) && ee.push(...He);
    }
    if (!ee.length) return null;
    const ge = re(((Ae = ee[0]) == null ? void 0 : Ae.u) || 0);
    let Pe = 0, Ee = 0;
    ee.forEach((Fe) => {
      const je = re((Fe == null ? void 0 : Fe.u) || 0);
      Pe += ge + E(je, ge), Ee += Number((Fe == null ? void 0 : Fe.v) || 0);
    });
    const Re = (Pe / ee.length % 1 + 1) % 1;
    let We = 1 / 0, Ge = -1 / 0, Ce = 1 / 0, ze = -1 / 0;
    ee.forEach((Fe) => {
      const je = re((Fe == null ? void 0 : Fe.u) || 0), He = E(je, Re);
      We = Math.min(We, He), Ge = Math.max(Ge, He);
      const Ue = Number((Fe == null ? void 0 : Fe.v) || 0);
      Ce = Math.min(Ce, Ue), ze = Math.max(ze, Ue);
    });
    const se = P.reduce((Fe, je) => {
      const He = l(String((je == null ? void 0 : je.toolKind) || "pen")), Ue = Fn[He] || Fn[Dr], ut = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Fe, ut);
    }, 0), Ie = Math.max(35e-4, se / 2048);
    return {
      centerUv: { u: ((Re + (We + Ge) * 0.5) % 1 + 1) % 1, v: Oe((Ce + ze) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ge - We) * 0.5 + Ie,
      halfH: (ze - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function w(N, Q, P) {
    const re = String(N || "").trim();
    if (!re) return null;
    const ee = ve().find((Pe) => String((Pe == null ? void 0 : Pe.actionGroupId) || "") === re);
    if (!ee) return null;
    const ge = P || D(re, Q);
    return ee.frame = v(re, Q, ge), ee.frame;
  }
  function Z() {
    var re;
    const N = G().map((ee) => ({
      type: "sticker",
      id: String((ee == null ? void 0 : ee.id) || ""),
      z_index: Number((ee == null ? void 0 : ee.z_index) || 0),
      item: ee
    })), Q = x().map((ee) => ({
      type: "strokeGroup",
      id: String((ee == null ? void 0 : ee.id) || (ee == null ? void 0 : ee.actionGroupId) || ""),
      actionGroupId: String((ee == null ? void 0 : ee.actionGroupId) || ""),
      z_index: Number((ee == null ? void 0 : ee.z_index) || 0),
      item: ee
    })), P = (Array.isArray((re = i.painting) == null ? void 0 : re.raster_objects) ? i.painting.raster_objects : []).filter((ee) => String((ee == null ? void 0 : ee.layerKind) || "paint") === "paint").map((ee) => ({
      type: "rasterObject",
      id: String((ee == null ? void 0 : ee.id) || ""),
      z_index: Number((ee == null ? void 0 : ee.z_index) || 0),
      item: ee
    }));
    return [...N, ...Q, ...P].sort((ee, ge) => Number(ee.z_index || 0) - Number(ge.z_index || 0));
  }
  function X(N = !0) {
    var P, re, ee, ge, Pe, Ee;
    const Q = Z().filter((Re) => Re.type === "strokeGroup").map((Re) => String(Re.actionGroupId || "")).filter((Re) => !!Re);
    if (N) {
      const Re = String(((re = (P = r.interaction) == null ? void 0 : P.stroke) == null ? void 0 : re.actionGroupId) || "").trim(), We = String(((ge = (ee = r.interaction) == null ? void 0 : ee.stroke) == null ? void 0 : ge.layerKind) || "").trim(), Ge = String(((Ee = (Pe = r.interaction) == null ? void 0 : Pe.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Re && We === "paint" && Ge !== "eraser" && !Q.includes(Re) && Q.push(Re);
    }
    return Q;
  }
  function O(N = !0) {
    var Ee, Re, We, Ge, Ce, ze;
    const Q = Z();
    if (!N) return Q;
    const P = String(((Re = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Re.actionGroupId) || "").trim(), re = String(((Ge = (We = r.interaction) == null ? void 0 : We.stroke) == null ? void 0 : Ge.layerKind) || "").trim(), ee = String(((ze = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!P || re !== "paint" || ee === "eraser" || Q.some((se) => se.type === "strokeGroup" && String(se.actionGroupId || "") === P))
      return Q;
    const ge = f();
    let Pe = Q.reduce((se, Ie) => Math.max(se, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return ge && g(ge) && String(ge.actionGroupId || "") === P && (Pe = Number(ge.z_index || 0)), [
      ...Q,
      {
        type: "strokeGroup",
        id: P,
        actionGroupId: P,
        z_index: Pe,
        item: null
      }
    ].sort((se, Ie) => Number((se == null ? void 0 : se.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function S() {
    return ve().slice().sort((N, Q) => Number((N == null ? void 0 : N.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0)).map((N) => A(ye("paint", (N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))).filter(Boolean);
  }
  function W() {
    var N;
    return (Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : []).filter((Q) => String((Q == null ? void 0 : Q.layerKind) || "paint") === "paint").slice().sort((Q, P) => Number((Q == null ? void 0 : Q.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)).map((Q) => y(de((Q == null ? void 0 : Q.id) || ""))).filter(Boolean);
  }
  function ne() {
    return Array.isArray(i.stickers) ? G() : [];
  }
  function me() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ne(), ...L()];
  }
  function Se(N) {
    return !!N && Array.isArray(i.shots) && i.shots.includes(N);
  }
  function C(N) {
    return !!N && (Array.isArray(i.stickers) && i.stickers.includes(N) || Xt(N));
  }
  function le() {
    var N;
    return Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : [];
  }
  function y(N) {
    const Q = we(N);
    if (!Q) return null;
    const P = le().find((re) => String((re == null ? void 0 : re.id) || "").trim() === Q);
    return !P || String((P == null ? void 0 : P.layerKind) || "paint") !== "paint" ? null : {
      ...P,
      id: de(Q),
      type: "rasterObject",
      rasterObjectId: Q
    };
  }
  function _(N) {
    if (!N || typeof N != "object" || String(N.type || "") !== "rasterObject") return !1;
    const Q = we(N.rasterObjectId || N.id || "");
    return !!Q && !!y(de(Q));
  }
  function A(N) {
    const Q = ue(N), P = String(Q.actionGroupId || "").trim();
    if (!P) return null;
    const re = ve().find((ee) => String((ee == null ? void 0 : ee.id) || (ee == null ? void 0 : ee.actionGroupId) || "") === P || String((ee == null ? void 0 : ee.actionGroupId) || "") === P);
    return re ? {
      ...re,
      id: ye("paint", P),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: P
    } : null;
  }
  function g(N) {
    if (!N || typeof N != "object" || String(N.type || "") !== "strokeGroup") return !1;
    const Q = String(N.actionGroupId || "").trim(), P = String(N.layerKind || "paint").trim() || "paint";
    return !!Q && !!A(ye(P, Q));
  }
  function D(N, Q = null) {
    const P = ue(N, Q), re = String(P.actionGroupId || "").trim();
    return re ? d(P.layerKind).filter((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "").trim() === re) : [];
  }
  function R(N, Q = "paint") {
    const P = String(N || "").trim(), ee = `geomv5:${String(Q || "paint").trim() || "paint"}:${P}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ge = a(), Pe = String((ge == null ? void 0 : ge.id) || ""), Ee = ge ? c(ge) : null;
      return `${ee}:frame:${Pe}:${Math.round(Number((ge == null ? void 0 : ge.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.roll_deg) ?? (ge == null ? void 0 : ge.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${ee}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function q(N, Q, P) {
    return !N || typeof N != "object" ? N : {
      ...N,
      u: ((Number(N.u || 0) + Number(Q || 0)) % 1 + 1) % 1,
      v: Oe(Number(N.v || 0) + Number(P || 0), 0, 1)
    };
  }
  function E(N, Q) {
    let P = Number(N || 0) - Number(Q || 0);
    for (; P > 0.5; ) P -= 1;
    for (; P < -0.5; ) P += 1;
    return P;
  }
  function F(N, Q = null, P = null) {
    var We;
    const re = ue(N, Q), ee = Array.isArray(P) ? P : D(re.actionGroupId, re.layerKind), ge = [];
    if (ee.forEach((Ge) => {
      const Ce = (Ge == null ? void 0 : Ge.geometry) || null, ze = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(ze) && ge.push(...ze);
    }), !ge.length) return { u: 0.5, v: 0.5 };
    const Pe = Number(((We = ge[0]) == null ? void 0 : We.u) || 0);
    let Ee = 0, Re = 0;
    return ge.forEach((Ge) => {
      Ee += Pe + E(Number((Ge == null ? void 0 : Ge.u) || 0), Pe), Re += Number((Ge == null ? void 0 : Ge.v) || 0);
    }), {
      u: (Ee / ge.length % 1 + 1) % 1,
      v: Oe(Re / ge.length, 0, 1)
    };
  }
  function M(N, Q, P = 1, re = 0) {
    if (!N || typeof N != "object") return N;
    const ee = Number((Q == null ? void 0 : Q.u) || 0), ge = Number((Q == null ? void 0 : Q.v) || 0), Pe = E(Number(N.u || 0), ee), Ee = Number(N.v || 0) - ge, Re = Number(re || 0) * Pr, We = Math.cos(Re), Ge = Math.sin(Re), Ce = Math.max(0.02, Number(P || 1)), ze = (Pe * We - Ee * Ge) * Ce, se = (Pe * Ge + Ee * We) * Ce;
    return {
      ...N,
      u: ((ee + ze) % 1 + 1) % 1,
      v: Oe(ge + se, 0, 1)
    };
  }
  function H(N, Q, P, re = null, ee = null, ge = null) {
    const Pe = ue(N, ee), Ee = String(Pe.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Re = d(Pe.layerKind), We = Array.isArray(re) ? new Map(re.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Ge = !1;
    if (Re.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const ze = (We == null ? void 0 : We.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, se = Ce == null ? void 0 : Ce.geometry, Ie = ze == null ? void 0 : ze.geometry;
      !se || !Ie || (Array.isArray(Ie.points) && (se.points = Ie.points.map((Ae) => q(Ae, Q, P)), Ge = !0), Array.isArray(Ie.rawPoints) && (se.rawPoints = Ie.rawPoints.map((Ae) => q(Ae, Q, P)), Ge = !0), Array.isArray(Ie.processedPoints) && (se.processedPoints = Ie.processedPoints.map((Ae) => q(Ae, Q, P)), Ge = !0));
    }), Ge && ge) {
      const Ce = ve().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return Ge;
  }
  function Y(N, Q = 1, P = 0, re = null, ee = null, ge = null) {
    const Pe = ue(N, ee), Ee = String(Pe.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Re = d(Pe.layerKind), We = Array.isArray(re) ? re : D(Ee, Pe.layerKind), Ge = Array.isArray(We) ? new Map(We.map((se) => [String((se == null ? void 0 : se.id) || ""), se])) : null, Ce = (ge == null ? void 0 : ge.centerUv) ?? F(Ee, Pe.layerKind, We);
    let ze = !1;
    if (Re.forEach((se) => {
      if (String((se == null ? void 0 : se.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (Ge == null ? void 0 : Ge.get(String((se == null ? void 0 : se.id) || ""))) || se, Ae = se == null ? void 0 : se.geometry, Fe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Fe || (Array.isArray(Fe.points) && (Ae.points = Fe.points.map((je) => M(je, Ce, Q, P)), ze = !0), Array.isArray(Fe.rawPoints) && (Ae.rawPoints = Fe.rawPoints.map((je) => M(je, Ce, Q, P)), ze = !0), Array.isArray(Fe.processedPoints) && (Ae.processedPoints = Fe.processedPoints.map((je) => M(je, Ce, Q, P)), ze = !0));
    }), ze && ge) {
      const se = ve().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      se && (se.frame = null);
    }
    return ze;
  }
  function fe(N, Q, P, re = null) {
    const ee = we(N);
    if (!ee) return !1;
    const ge = le().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "").trim() === ee);
    if (!ge) return !1;
    const Pe = re && typeof re == "object" ? re : ge, Ee = (Pe == null ? void 0 : Pe.transform) || {}, Re = Number(Ee.du || 0) + Number(Q || 0), We = Oe(Number(Ee.dv || 0) + Number(P || 0), -1, 1);
    return ge.transform || (ge.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ge.transform.du = Re, ge.transform.dv = We, !0;
  }
  function be(N, Q = 1, P = null) {
    const re = we(N);
    if (!re) return !1;
    const ee = le().find((We) => String((We == null ? void 0 : We.id) || "").trim() === re);
    if (!ee) return !1;
    const ge = P && typeof P == "object" ? P : ee, Pe = (ge == null ? void 0 : ge.transform) || {}, Ee = Math.max(0.01, Number(Pe.scale || 1)), Re = Oe(Ee * Math.max(0.01, Number(Q || 1)), 0.01, 100);
    return ee.transform || (ee.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ee.transform.scale = Re, !0;
  }
  function ke() {
    return V();
  }
  function ce(N) {
    var Q;
    return !N || typeof N != "object" ? !1 : o ? ((Q = N.source) == null ? void 0 : Q.kind) === "port" : String(N.id || "") === Ud || String(N.source_kind || "") === BN;
  }
  function xe(N) {
    return !!(N && typeof N == "object" && N.visible === !1);
  }
  function K(N) {
    return ce(N) && xe(N) ? Xm : 1;
  }
  function pe(N, Q, P = 1, re = 0) {
    if (!N || typeof N != "object") return N;
    const ee = Number((Q == null ? void 0 : Q.u) || 0), ge = Number((Q == null ? void 0 : Q.v) || 0), Pe = E(Number(N.u || 0), ee), Ee = Number(N.v || 0) - ge, Re = Math.max(0.02, Number(P || 1)), We = Number(re || 0) * Pr, Ge = Math.cos(We), Ce = Math.sin(We), ze = Pe / Re, se = Ee / Re, Ie = ze * Ge + se * Ce, Ae = -ze * Ce + se * Ge;
    return {
      ...N,
      u: ((ee + Ie) % 1 + 1) % 1,
      v: ge + Ae
    };
  }
  function z(N) {
    const Q = (N == null ? void 0 : N.bbox) || null, P = (N == null ? void 0 : N.transform) || {};
    return Q ? {
      u: (((Number(Q.u0 || 0) + Number(Q.u1 || 0)) * 0.5 + Number(P.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(Q.v0 || 0) + Number(Q.v1 || 0)) * 0.5 + Number(P.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function ae(N) {
    var Re, We, Ge, Ce;
    const Q = (N == null ? void 0 : N.bbox) || null;
    if (!Q) return [];
    const P = {
      u: (Number(Q.u0 || 0) + Number(Q.u1 || 0)) * 0.5,
      v: (Number(Q.v0 || 0) + Number(Q.v1 || 0)) * 0.5
    }, re = Math.max(0.01, Number(((Re = N == null ? void 0 : N.transform) == null ? void 0 : Re.scale) || 1)), ee = Number(((We = N == null ? void 0 : N.transform) == null ? void 0 : We.rot_deg) || 0), ge = Number(((Ge = N == null ? void 0 : N.transform) == null ? void 0 : Ge.du) || 0), Pe = Number(((Ce = N == null ? void 0 : N.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(Q.u0 || 0), v: Number(Q.v0 || 0) },
      { u: Number(Q.u1 || 0), v: Number(Q.v0 || 0) },
      { u: Number(Q.u1 || 0), v: Number(Q.v1 || 0) },
      { u: Number(Q.u0 || 0), v: Number(Q.v1 || 0) }
    ].map((ze) => q(M(ze, P, re, ee), ge, Pe));
  }
  function $(N) {
    const Q = we((N == null ? void 0 : N.rasterObjectId) || (N == null ? void 0 : N.id) || ""), P = (N == null ? void 0 : N.transform) || {}, re = (N == null ? void 0 : N.bbox) || {}, ee = `${Q}:${r.mode}:${u()}:${re.u0}:${re.v0}:${re.u1}:${re.v1}:${P.du}:${P.dv}:${P.rot_deg}:${P.scale}`;
    if (r.mode === "frame") {
      const ge = a(), Pe = ge ? c(ge) : null;
      return `${ee}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${ee}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function U(N) {
    const Q = String((N == null ? void 0 : N.id) || ""), P = Se(N) ? "frame" : C(N) ? "sticker" : "item", re = T(N), ee = [
      P,
      Q,
      r.mode,
      Number((re == null ? void 0 : re.yaw_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.pitch_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.hFOV_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.vFOV_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.rot_deg) || 0).toFixed(4),
      Number((re == null ? void 0 : re.roll_deg) || 0).toFixed(4),
      Vr(re),
      I(N) && k(N)
    ].join(":");
    if (r.mode === "frame") {
      const ge = a(), Pe = ge ? c(ge) : null;
      return `${ee}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${ee}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function j() {
    Z().forEach((Q, P) => {
      Q.type === "sticker" && Q.item && (Q.item.z_index = P), Q.type === "strokeGroup" && Q.item && (Q.item.z_index = P), Q.type === "rasterObject" && Q.item && (Q.item.z_index = P);
    });
  }
  return {
    connect(N) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: p,
        sceneStickerShown: k,
        upstreamStickerImage: h,
        upstreamStickers: m
      } = N);
    },
    getList: b,
    skyStickers: G,
    upstreamSkyStickers: L,
    stickerById: oe,
    isSceneSticker: I,
    isUploadingSticker: J,
    poseOf: T,
    writePose: B,
    getPaintingGroupList: ve,
    makeStrokeGroupSelectionId: ye,
    makeRasterObjectSelectionId: de,
    parseRasterObjectSelectionId: we,
    ensurePaintingGroupEntry: ie,
    getFrameCornersUv: te,
    ensureGroupFrame: w,
    getDisplayListObjects: Z,
    getOrderedPaintGroupIds: X,
    getOrderedDisplayListObjects: O,
    getSelectableStrokeGroupItems: S,
    getSelectableRasterObjectItems: W,
    cutoutStickers: ne,
    getCutoutSelectableItems: me,
    isShotItem: Se,
    isStickerItem: C,
    getRasterObjectList: le,
    getRasterObjectItem: y,
    isRasterObjectItem: _,
    getStrokeGroupItem: A,
    isStrokeGroupItem: g,
    getStrokeGroupStrokes: D,
    getStrokeGeomCacheKey: R,
    shortestWrappedDelta: E,
    getStrokeGroupCenterUv: F,
    applyStrokeGroupOffset: H,
    applyStrokeGroupTransform: Y,
    applyRasterObjectOffset: fe,
    applyRasterObjectTransform: be,
    getNextStickerZIndex: ke,
    isExternalSticker: ce,
    isStickerHidden: xe,
    getStickerDisplayAlpha: K,
    inverseTransformErpPointAround: pe,
    getRasterObjectCenterUv: z,
    getRasterObjectTransformedErpPoints: ae,
    getRasterObjectGeomCacheKey: $,
    getSceneItemGeomCacheKey: U,
    normalizeDisplayZIndices: j
  };
}
function z2(e) {
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
  let c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S;
  function W() {
    const $ = String(t.selectedId || "");
    if (!$) return null;
    const U = I($);
    if (U) return U;
    const j = G($);
    return j || (o ? k().find((N) => String((N == null ? void 0 : N.id) || "") === $) || null : m().find((N) => String((N == null ? void 0 : N.id) || "") === $) || null);
  }
  function ne() {
    const $ = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], U = [], j = /* @__PURE__ */ new Set();
    return $.forEach((N) => {
      const Q = String(N || "").trim();
      if (!Q || j.has(Q)) return;
      j.add(Q);
      const P = Q === String(t.selectedId || "") ? W() : I(Q) || G(Q) || (o ? k().find((re) => String((re == null ? void 0 : re.id) || "") === Q) : m().find((re) => String((re == null ? void 0 : re.id) || "") === Q));
      P && U.push(P);
    }), U;
  }
  function me($ = null) {
    const U = Array.isArray($) ? $ : ne();
    if (!U || U.length < 2) return null;
    const j = U.map((Pe) => V(Pe)).filter((Pe) => (Pe == null ? void 0 : Pe.visible) && Array.isArray(Pe.corners) && Pe.corners.length);
    if (!j.length) return null;
    const N = j.flatMap((Pe) => Pe.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), Q = j.flatMap((Pe) => Pe.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), P = Math.min(...N), re = Math.max(...N), ee = Math.min(...Q), ge = Math.max(...Q);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (P + re) * 0.5, y: (ee + ge) * 0.5 },
      corners: [
        { x: P, y: ee },
        { x: re, y: ee },
        { x: re, y: ge },
        { x: P, y: ge }
      ],
      edgeMidpoints: [
        { edge: "top", x: (P + re) * 0.5, y: ee, a: { x: P, y: ee }, b: { x: re, y: ee } },
        { edge: "right", x: re, y: (ee + ge) * 0.5, a: { x: re, y: ee }, b: { x: re, y: ge } },
        { edge: "bottom", x: (P + re) * 0.5, y: ge, a: { x: re, y: ge }, b: { x: P, y: ge } },
        { edge: "left", x: P, y: (ee + ge) * 0.5, a: { x: P, y: ge }, b: { x: P, y: ee } }
      ],
      rotateStemBase: { x: (P + re) * 0.5, y: ee },
      rotateHandle: { x: (P + re) * 0.5, y: ee - 30 }
    };
  }
  function Se($) {
    const U = String(($ == null ? void 0 : $.id) || "").trim();
    return !!U && Array.isArray(t.selectedIds) && t.selectedIds.includes(U);
  }
  function C() {
    const $ = W();
    return $ ? de($) || B($) ? "stroke" : _e($) ? "frame" : "image" : null;
  }
  function le($) {
    if (!$ || typeof $ != "object") return !1;
    if (de($)) {
      const U = String($.actionGroupId || $.id || "").trim(), j = b().find((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() === U);
      return (j == null ? void 0 : j.locked) === !0;
    }
    if (B($)) {
      const U = te($.rasterObjectId || $.id || ""), j = L().find((N) => String((N == null ? void 0 : N.id) || "").trim() === U);
      return (j == null ? void 0 : j.locked) === !0;
    }
    return Xt($) && !Ps($) ? !0 : $.locked === !0;
  }
  function y($ = null) {
    const U = Array.isArray($) ? $ : ne();
    return U.length > 0 && U.every((j) => le(j));
  }
  function _($, U) {
    const j = U === !0;
    if (!$ || typeof $ != "object") return !1;
    if (de($)) {
      const N = String($.actionGroupId || $.id || "").trim(), Q = b().find((P) => String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim() === N);
      return !Q || Q.locked === j ? !1 : (Q.locked = j, !0);
    }
    if (B($)) {
      const N = te($.rasterObjectId || $.id || ""), Q = L().find((P) => String((P == null ? void 0 : P.id) || "").trim() === N);
      return !Q || Q.locked === j ? !1 : (Q.locked = j, !0);
    }
    return $.locked === j || Xt($) && !Ps($) ? !1 : ($.locked = j, !0);
  }
  function A() {
    if (r) return;
    const $ = ne();
    if (!$.length) return;
    const U = !y($);
    let j = !1;
    $.forEach((N) => {
      _(N, U) && (j = !0);
    }), j && (v(), d(), O(), S(), w());
  }
  function g($) {
    ce(), a.selection = null, t.selectedId = ($ == null ? void 0 : $.id) || null, t.selectedIds = $ != null && $.id ? [$.id] : [], $ && ye($) && !Xt($) ? s.active.selected_sticker_id = $.id || null : s.active.selected_sticker_id = null, $ && _e($) ? s.active.selected_shot_id = $.id || null : $ ? _e($) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function D($, U = null) {
    const j = [], N = /* @__PURE__ */ new Set();
    (Array.isArray($) ? $ : []).forEach((re) => {
      const ee = String((re == null ? void 0 : re.id) || "").trim();
      !ee || N.has(ee) || (N.add(ee), j.push(ee));
    }), t.selectedIds = j, ce(), a.selection = null;
    const Q = String(U || "").trim();
    t.selectedId = Q && j.includes(Q) ? Q : j[j.length - 1] || null;
    const P = W();
    s.active.selected_sticker_id = P && ye(P) && !Xt(P) && P.id || null, P && _e(P) ? s.active.selected_shot_id = P.id || null : j.length || (s.active.selected_shot_id = null);
  }
  function R() {
    const $ = (Array.isArray(s.shots) ? s.shots : []).map((j, N) => ({
      kind: "frame",
      item: j,
      label: String((j == null ? void 0 : j.label) || `Frame ${N + 1}`)
    })), U = f().map((j, N) => {
      var P, re;
      const Q = T(j) ? String(j.id || Ud) : String(((re = (P = s.assets) == null ? void 0 : P[j.asset_id]) == null ? void 0 : re.name) || j.asset_id || j.id || `Image ${N + 1}`);
      return {
        kind: "image",
        item: j,
        label: Q
      };
    });
    return [...$, ...U];
  }
  function q($) {
    return $ === "frame" ? Ke.camera : $ === "stroke" ? Ke.paintbrush_vertical_tool : Ke.image;
  }
  function E($) {
    return !$ || !$.item ? {
      label: String(($ == null ? void 0 : $.label) || ""),
      icon: null
    } : {
      label: String($.label || ""),
      icon: q($.kind)
    };
  }
  function F() {
    if (r) return;
    const $ = W();
    !$ || !T($) || ($.visible = he($), pe(), we(), v(), d(), S(), O(), w());
  }
  function M() {
    if (r || l !== "stickers") return;
    const $ = W();
    if (!$ || !T($)) return;
    const U = $.initial_pose;
    if (!U || typeof U != "object") return;
    $.yaw_deg = Number(U.yaw_deg ?? $.yaw_deg ?? 0), $.pitch_deg = Number(U.pitch_deg ?? $.pitch_deg ?? 0), $.hFOV_deg = Number(U.hFOV_deg ?? $.hFOV_deg ?? 30);
    const j = oe(Fi, () => {
      w();
    });
    j && (j.complete || j.naturalWidth || j.width) ? $.vFOV_deg = u(
      Number(U.hFOV_deg ?? $.hFOV_deg ?? 30),
      Number(j.naturalWidth || j.width || 1),
      Number(j.naturalHeight || j.height || 1)
    ) : $.vFOV_deg = Number(U.vFOV_deg ?? $.vFOV_deg ?? 30), $.rot_deg = Number(U.rot_deg ?? $.rot_deg ?? 0), v(), d(), S(), O(), w();
  }
  function H($) {
    if (!$ || !T($)) return null;
    const U = $.initial_pose;
    if (!U || typeof U != "object") return null;
    const j = {
      yaw_deg: Number(U.yaw_deg ?? $.yaw_deg ?? 0),
      pitch_deg: Number(U.pitch_deg ?? $.pitch_deg ?? 0),
      hFOV_deg: Number(U.hFOV_deg ?? $.hFOV_deg ?? 30),
      vFOV_deg: Number(U.vFOV_deg ?? $.vFOV_deg ?? 30),
      rot_deg: Number(U.rot_deg ?? $.rot_deg ?? 0)
    }, N = oe(Fi, () => {
      w();
    });
    return N && (N.complete || N.naturalWidth || N.width) && (j.vFOV_deg = u(
      j.hFOV_deg,
      Number(N.naturalWidth || N.width || 1),
      Number(N.naturalHeight || N.height || 1)
    )), j;
  }
  function Y() {
    const $ = W();
    if (!$ || !T($)) return !1;
    const U = H($);
    if (!U) return !1;
    const j = (N, Q) => Math.abs(Number(N || 0) - Number(Q || 0)) <= 1e-4;
    return !(j($.yaw_deg, U.yaw_deg) && j($.pitch_deg, U.pitch_deg) && j($.hFOV_deg, U.hFOV_deg) && j($.vFOV_deg, U.vFOV_deg) && j($.rot_deg, U.rot_deg));
  }
  function fe($ = {}) {
    const j = $.preservePanelValues !== !1 ? x(W()) : null;
    j && (t.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: Vr(j)
    }), t.selectedId = null, t.selectedIds = [], ce(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function be() {
    if (!i || !t.worldSelectedId) return null;
    const $ = X(t.worldSelectedId);
    return ($ == null ? void 0 : $.placement) === "world" ? $ : null;
  }
  function ke($) {
    g(null), t.worldSelectedId = $, n.backgroundDirty = !0;
  }
  function ce() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function xe($) {
    return !!$ && !r && !le($);
  }
  function K() {
    if (l !== "cutout") return;
    const $ = p();
    $ && (t.selectedId = String($.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function pe() {
    var U;
    const $ = W();
    (ve($) && !Z($) || t.selectedId === gd && J() && !c() || C() === "stroke" && !ie()) && g(null), ((U = be()) == null ? void 0 : U.visible) === !1 && ce();
  }
  function z() {
    if (r) return;
    const $ = ne();
    if (!W() || $.length === 0 || $.some(Xt) || $.some((ee) => le(ee))) return;
    ue();
    const j = h(), N = new Set($.map((ee) => ye(ee) ? `sticker:${String(ee.id || "")}` : B(ee) ? `rasterObject:${te(ee.rasterObjectId || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || ee.id || "")}`)), Q = [], P = [];
    if (j.forEach((ee) => {
      var Pe, Ee;
      const ge = ee.type === "sticker" ? `sticker:${String(((Pe = ee.item) == null ? void 0 : Pe.id) || "")}` : ee.type === "rasterObject" ? `rasterObject:${String(((Ee = ee.item) == null ? void 0 : Ee.id) || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || "")}`;
      N.has(ge) ? Q.push(ee) : P.push(ee);
    }), !Q.length || Q[Q.length - 1] === j[j.length - 1]) return;
    [...P, ...Q].forEach((ee, ge) => {
      ee.type === "sticker" && ee.item && (ee.item.z_index = ge), ee.type === "strokeGroup" && ee.item && (ee.item.z_index = ge), ee.type === "rasterObject" && ee.item && (ee.item.z_index = ge);
    }), we(), v(), d(), O(), w();
  }
  function ae() {
    if (r) return;
    const $ = ne();
    if (!W() || $.length === 0 || $.some(Xt) || $.some((ee) => le(ee))) return;
    ue();
    const j = h(), N = new Set($.map((ee) => ye(ee) ? `sticker:${String(ee.id || "")}` : B(ee) ? `rasterObject:${te(ee.rasterObjectId || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || ee.id || "")}`)), Q = [], P = [];
    if (j.forEach((ee) => {
      var Pe, Ee;
      const ge = ee.type === "sticker" ? `sticker:${String(((Pe = ee.item) == null ? void 0 : Pe.id) || "")}` : ee.type === "rasterObject" ? `rasterObject:${String(((Ee = ee.item) == null ? void 0 : Ee.id) || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || "")}`;
      N.has(ge) ? Q.push(ee) : P.push(ee);
    }), !Q.length || Q[0] === j[0]) return;
    [...Q, ...P].forEach((ee, ge) => {
      ee.type === "sticker" && ee.item && (ee.item.z_index = ge), ee.type === "strokeGroup" && ee.item && (ee.item.z_index = ge), ee.type === "rasterObject" && ee.item && (ee.item.z_index = ge);
    }), we(), v(), d(), O(), w();
  }
  return {
    connect($) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: k,
        getDisplayListObjects: h,
        getList: m,
        getPaintingGroupList: b,
        getRasterObjectItem: G,
        getRasterObjectList: L,
        getStickerUiImage: oe,
        getStrokeGroupItem: I,
        hasCamera: J,
        isExternalSticker: T,
        isRasterObjectItem: B,
        isSceneSticker: ve,
        isShotItem: _e,
        isStickerHidden: he,
        isStickerItem: ye,
        isStrokeGroupItem: de,
        markObjectVisualsDirty: we,
        normalizeDisplayZIndices: ue,
        objectGeom: V,
        paintingShown: ie,
        parseRasterObjectSelectionId: te,
        poseOf: x,
        pushHistory: v,
        requestDraw: w,
        sceneStickerShown: Z,
        stickerById: X,
        updateSelectionMenu: O,
        updateSidePanel: S
      } = $);
    },
    getSelected: W,
    getSelectedItems: ne,
    getMultiSelectionGeom: me,
    isItemSelected: Se,
    getSelectedKind: C,
    isItemLocked: le,
    areAllSelectedItemsLocked: y,
    toggleSelectedLock: A,
    setSelectedItem: g,
    setSelectedItems: D,
    getCutoutInspectorItems: R,
    getSelectionItemIcon: q,
    getSelectionItemLabelData: E,
    toggleSelectedExternalStickerVisibility: F,
    restoreSelectedToInitialPose: M,
    canRestoreSelectedToInitial: Y,
    clearSelection: fe,
    selectedWorldSticker: be,
    selectWorldSticker: ke,
    clearWorldSelection: ce,
    worldStickerEditable: xe,
    applyInitialCutoutFocus: K,
    releaseHiddenSelection: pe,
    bringSelectedToFront: z,
    sendSelectedToBack: ae
  };
}
function j2(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function p() {
    return o && s() && i.camera.projection === "erp";
  }
  function k() {
    const W = B({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !W || W.length !== 4 ? !1 : W[0].y >= W[3].y;
  }
  function h() {
    return Jm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function m() {
    const S = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return S.some((W, ne) => W !== f.key[ne]) && (f = { key: S, projection: Qm(h(), r.width, r.height) }), f.projection;
  }
  function b(S) {
    const W = m().project(S);
    return W.z > 1e-4 ? W : null;
  }
  function G(S, W) {
    return m().ray(S, W);
  }
  function L() {
    const S = r.width, W = r.height, ne = 2;
    if (S / Math.max(W, 1) >= ne) {
      const y = W, _ = y * ne;
      return { x: (S - _) * 0.5, y: 0, w: _, h: y };
    }
    const Se = S, C = Se / ne;
    return { x: 0, y: (W - C) * 0.5, w: Se, h: C };
  }
  function oe(S) {
    return {
      lon: Math.atan2(S.x, S.z),
      lat: Math.asin(Oe(S.y, -1, 1))
    };
  }
  function I(S, W = null) {
    const { lon: ne, lat: me } = oe(S), Se = L();
    let C = Se.x + (ne / (2 * Math.PI) + 0.5) * Se.w;
    const le = Se.y + (0.5 - me / Math.PI) * Se.h;
    if (W !== null) {
      for (; C - W > Se.w / 2; ) C -= Se.w;
      for (; C - W < -Se.w / 2; ) C += Se.w;
    }
    return { x: C, y: le, z: 1 };
  }
  function J(S) {
    const W = c(S), ne = wo(
      Number(W.yaw_deg || 0),
      Number(W.pitch_deg || 0),
      Number(W.rot_deg || W.roll_deg || 0)
    ), me = Math.tan(Oe(Number(W.hFOV_deg || 20), 0.1, 179) * 0.5 * Pr), Se = Math.tan(Oe(Number(W.vFOV_deg || 20), 0.1, 179) * 0.5 * Pr);
    return {
      centerDir: ne.fwd,
      right: ne.right,
      up: ne.up,
      tanX: me,
      tanY: Se
    };
  }
  function T(S, W, ne) {
    return s2(Ep(Ep(S.centerDir, Op(S.right, W)), Op(S.up, ne)));
  }
  function B(S) {
    const W = J(S);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: me, v: Se }) => T(W, me * W.tanX, Se * W.tanY));
  }
  function ve(S, W, ne) {
    const me = J(S), Se = (W * 2 - 1) * me.tanX, C = (1 - ne * 2) * me.tanY;
    return T(me, Se, C);
  }
  function _e(S) {
    const W = t.width / Math.max(1, r.width), ne = t.height / Math.max(1, r.height);
    return { x: S.x * W, y: S.y * ne, w: S.w * W, h: S.h * ne };
  }
  function he(S, W = null, ne = null, me = null) {
    if (n.mode === "frame") {
      const Se = W || a();
      if (!Se) return [];
      const C = ne || l(Se);
      return v(S, Se, C);
    }
    return ie(S, me);
  }
  function ye(S, W = null, ne = null, me = null, Se = null) {
    if (!S) return null;
    if (n.mode === "unwrap") {
      const le = ie([S], Se);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const C = we(S);
    return C ? d(C, W, ne, me) : null;
  }
  function de(S, W) {
    if (!S || !W) return null;
    const ne = Number(W.x || 0), me = Number(W.y || 0);
    return ve(S, ne, me);
  }
  function we(S) {
    if (!S) return null;
    const W = (Number(S.u || 0) - 0.5) * (2 * Math.PI), ne = (0.5 - Number(S.v || 0)) * Math.PI, me = Math.cos(ne);
    return Xl(me * Math.sin(W), Math.sin(ne), me * Math.cos(W));
  }
  function ue(S, W) {
    if (!S || !W) return null;
    const ne = J(S), me = $c(W, ne.centerDir);
    if (!Number.isFinite(me) || me <= 1e-6) return null;
    const Se = $c(W, ne.right) / me, C = $c(W, ne.up) / me;
    return {
      x: (Se / Math.max(1e-6, ne.tanX) + 1) * 0.5,
      y: (1 - C / Math.max(1e-6, ne.tanY)) * 0.5
    };
  }
  function V(S) {
    if (!Array.isArray(S) || S.length < 3) return [];
    if (n.mode === "unwrap") {
      const ne = L();
      return S.map((me) => ({
        x: ne.x + Number(me.u || 0) * ne.w,
        y: ne.y + Number(me.v || 0) * ne.h
      }));
    }
    const W = S.map((ne) => b(we(ne))).filter(Boolean);
    return W.every((ne) => Number(ne.z || 0) > 0) ? W.map((ne) => ({ x: Number(ne.x || 0), y: Number(ne.y || 0) })) : [];
  }
  function ie(S, W = null) {
    if (!Array.isArray(S) || S.length < 1) return [];
    if (n.mode === "unwrap") {
      const me = L();
      return S.map((Se) => {
        const C = (Number(Se.u || 0) % 1 + 1) % 1, le = W == null ? C : Number(W || 0) + u(C, W);
        return {
          x: me.x + le * me.w,
          y: me.y + Number(Se.v || 0) * me.h
        };
      });
    }
    const ne = S.map((me) => b(we(me))).filter(Boolean);
    return ne.every((me) => Number(me.z || 0) > 0) ? ne.map((me) => ({ x: Number(me.x || 0), y: Number(me.y || 0) })) : [];
  }
  function te(S, W = 160) {
    if (!Array.isArray(S) || S.length < 3) return !1;
    for (let ne = 0; ne < S.length; ne += 1) {
      const me = S[ne], Se = S[(ne + 1) % S.length];
      if (!me || !Se || !Number.isFinite(me.x) || !Number.isFinite(me.y) || !Number.isFinite(Se.x) || !Number.isFinite(Se.y) || Math.hypot(Number(Se.x) - Number(me.x), Number(Se.y) - Number(me.y)) > W) return !1;
    }
    return !0;
  }
  function x(S, W, ne) {
    if (!Array.isArray(S) || S.length < 3 || !W || !ne) return [];
    const me = [];
    for (const Se of S) {
      const C = we(Se), le = ue(W, C);
      if (!le) return [];
      me.push({
        x: Number(ne.x || 0) + Number(le.x || 0) * Number(ne.w || 0),
        y: Number(ne.y || 0) + Number(le.y || 0) * Number(ne.h || 0)
      });
    }
    return te(me, Math.max(80, Math.max(ne.w, ne.h) * 0.75)) ? me : [];
  }
  function v(S, W, ne) {
    if (!Array.isArray(S) || S.length < 1 || !W || !ne) return [];
    const me = [];
    for (const Se of S) {
      const C = we(Se), le = ue(W, C);
      le && me.push({
        x: Number(ne.x || 0) + Number(le.x || 0) * Number(ne.w || 0),
        y: Number(ne.y || 0) + Number(le.y || 0) * Number(ne.h || 0)
      });
    }
    return me;
  }
  function w(S) {
    const W = r.getBoundingClientRect();
    return {
      x: (S.clientX - W.left) / W.width * r.width,
      y: (S.clientY - W.top) / W.height * r.height
    };
  }
  function Z(S) {
    const W = r.getBoundingClientRect();
    return {
      x: Number(S.clientX) - Number(W.left || 0),
      y: Number(S.clientY) - Number(W.top || 0)
    };
  }
  function X(S, W = performance.now()) {
    if (n.mode === "unwrap") {
      const C = L(), le = (S.x - C.x) / Math.max(1, C.w), y = (S.y - C.y) / Math.max(1, C.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Oe(y, 0, 1),
        t: Number(W || 0)
      };
    }
    const ne = G(S.x, S.y), { lon: me, lat: Se } = oe(ne);
    return {
      targetKind: "ERP_GLOBAL",
      u: (me / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - Se / Math.PI, 0, 1),
      t: Number(W || 0)
    };
  }
  function O(S, W, ne = performance.now()) {
    const me = l(W);
    if (!me) return null;
    const Se = {
      x: (Number(S.x) - me.x) / Math.max(1, me.w),
      y: (Number(S.y) - me.y) / Math.max(1, me.h)
    };
    if (Se.x < 0 || Se.x > 1 || Se.y < 0 || Se.y > 1) return null;
    const C = de(W, Se);
    if (!C) return null;
    const { lon: le, lat: y } = oe(C);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - y / Math.PI, 0, 1),
      t: Number(ne || 0)
    };
  }
  return {
    connect(S) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = S);
    },
    isErpCamera: p,
    currentViewCamera: h,
    currentViewProjection: m,
    projectDir: b,
    screenToWorldDir: G,
    getUnwrapRect: L,
    projectDirUnwrap: I,
    getStickerFrame: J,
    stickerDirFromFrame: T,
    stickerCornersDir: B,
    stickerSampleDir: ve,
    stickerCornerOrderSanity: k,
    projectEditorPoints: he,
    projectErpPointToEditor: ye,
    frameLocalPointToWorldDir: de,
    erpPointToWorldDir: we,
    worldDirToFrameLocalPoint: ue,
    projectLassoPointsToCurrentView: V,
    projectErpLassoPointsToFrameRect: x,
    screenPos: w,
    screenPosCss: Z,
    screenPosToErpPoint: X,
    screenPosToFrameAsErpPoint: O,
    deviceRect: _e
  };
}
function H2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v;
  function w(C, le) {
    const y = String(C.actionGroupId || C.id || "").trim(), _ = L(y, C.layerKind), A = a(y, C.layerKind, _), g = (A == null ? void 0 : A.centerUv) || G(y, C.layerKind, _), D = n.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, R = [], q = n.mode === "frame" ? l() : null, E = q ? u(q) : null;
    for (const K of _) {
      const pe = (K == null ? void 0 : K.geometry) || null, z = (pe == null ? void 0 : pe.geometryKind) === "lasso_fill" ? pe == null ? void 0 : pe.points : (pe == null ? void 0 : pe.processedPoints) || (pe == null ? void 0 : pe.rawPoints) || (pe == null ? void 0 : pe.points) || [], ae = we(z, q, E, D).filter((j) => Number.isFinite(j == null ? void 0 : j.x) && Number.isFinite(j == null ? void 0 : j.y));
      if (!ae.length) continue;
      const $ = c(String((K == null ? void 0 : K.toolKind) || "pen")), U = Fn[$] || Fn[Dr];
      R.push({
        points: ae,
        closed: String((pe == null ? void 0 : pe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((K == null ? void 0 : K.size) || 10) * Math.max(0.1, Number((U == null ? void 0 : U.sizeScale) ?? 1)) + 10),
        layerKind: String((K == null ? void 0 : K.layerKind) || C.layerKind || "paint")
      });
    }
    const F = ue(g, null, q, E, D);
    if (!F) {
      const K = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, K), K;
    }
    const H = d(A).map((K) => ue(K, F.x, q, E, D)).filter((K) => Number.isFinite(K == null ? void 0 : K.x) && Number.isFinite(K == null ? void 0 : K.y)).map((K) => ({ x: Number(K.x || 0), y: Number(K.y || 0) }));
    if (H.length < 4) {
      const K = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, K), K;
    }
    const Y = (K, pe) => ({
      x: (Number((K == null ? void 0 : K.x) || 0) + Number((pe == null ? void 0 : pe.x) || 0)) * 0.5,
      y: (Number((K == null ? void 0 : K.y) || 0) + Number((pe == null ? void 0 : pe.y) || 0)) * 0.5,
      a: K,
      b: pe
    }), fe = Y(H[0], H[1]), be = Y(H[1], H[2]), ke = Y(H[2], H[3]), ce = Y(H[3], H[0]), xe = {
      kind: "strokeGroup",
      center: { x: Number(F.x || 0), y: Number(F.y || 0) },
      corners: H,
      edgeMidpoints: [
        { edge: "top", ...fe },
        { edge: "right", ...be },
        { edge: "bottom", ...ke },
        { edge: "left", ...ce }
      ],
      rotateStemBase: { x: fe.x, y: fe.y },
      rotateHandle: { x: fe.x, y: fe.y - 30 },
      strokePaths: R,
      visible: !0
    };
    return n._strokeGeomCache.set(le, xe), xe;
  }
  function Z(C, le) {
    const y = n.mode === "frame" ? l() : null, _ = y ? u(y) : null, A = f(C), g = n.mode === "unwrap" ? Number((A == null ? void 0 : A.u) || 0) : null, D = ue(A, null, y, _, g), q = k(C).map((H) => ue(H, (D == null ? void 0 : D.x) ?? null, y, _, g)).filter((H) => Number.isFinite(H == null ? void 0 : H.x) && Number.isFinite(H == null ? void 0 : H.y));
    if (!Array.isArray(q) || q.length < 4) {
      const H = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(le, H), H;
    }
    const E = q.slice(0, 4).map((H) => ({ x: Number((H == null ? void 0 : H.x) || 0), y: Number((H == null ? void 0 : H.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: E.reduce((H, Y) => H + Number(Y.x || 0), 0) / E.length,
        y: E.reduce((H, Y) => H + Number(Y.y || 0), 0) / E.length
      },
      corners: E,
      visible: !0
    };
    return n._strokeGeomCache.set(le, M), M;
  }
  function X(C, le = null, y = null, _ = null, A = {}) {
    if (n.mode === "frame") {
      const F = y || l(), M = _ || u(F);
      if (!F || !M) return null;
      const H = F ? v(F, C) : null;
      return H ? {
        x: Number(M.x || 0) + Number(H.x || 0) * Number(M.w || 0),
        y: Number(M.y || 0) + Number(H.y || 0) * Number(M.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return de(C, le);
    const g = 1e-4, D = o().project(C, g);
    if (!Number.isFinite(D.z) || D.z <= g && !(A != null && A.clipBehind)) return null;
    const R = r.width, q = r.height, E = Math.max(R, q) * 2;
    return {
      x: Oe(D.x, -E, R + E),
      y: Oe(D.y, -E, q + E),
      z: Math.max(D.z, g),
      rawZ: D.z,
      clipped: D.z <= g
    };
  }
  function O(C, le = []) {
    if (n.mode !== "pano" || B(C)) return 1;
    const y = le.map((_) => Number((_ == null ? void 0 : _.rawZ) ?? (_ == null ? void 0 : _.z))).filter((_) => Number.isFinite(_));
    return y.length ? i2(0.035, 0.2, Math.min(...y)) : 1;
  }
  function S(C) {
    if (J(C) && !V(C)) return { visible: !1 };
    const le = he(C), y = Tn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), _ = n.mode === "frame" ? l() : null, A = _ ? u(_) : null, g = n.mode === "pano" && (B(C) || T(C)), D = g ? { clipBehind: !0 } : null, R = X(y, null, _, A, D);
    if (!R) return { visible: !1 };
    const q = m(C), F = ie(C).map((N) => X(N, R.x, _, A, D)).filter((N) => Number.isFinite(N == null ? void 0 : N.x) && Number.isFinite(N == null ? void 0 : N.y));
    if (F.length < 4) return { visible: !1 };
    const M = te(q, 0, q.tanY), H = te(q, 0, q.tanY + Math.max(q.tanY * 0.43, 0.053)), Y = X(M, R.x, _, A, D);
    if (!Y) return { visible: !1 };
    const fe = X(H, (Y == null ? void 0 : Y.x) ?? R.x, _, A, D), be = ((fe == null ? void 0 : fe.x) ?? Y.x) - Y.x, ke = ((fe == null ? void 0 : fe.y) ?? Y.y) - Y.y, ce = Math.hypot(be, ke) || 1, xe = {
      x: Y.x + be / ce * 30,
      y: Y.y + ke / ce * 30
    }, K = X(te(q, 0, q.tanY), R.x, _, A, D), pe = X(te(q, q.tanX, 0), R.x, _, A, D), z = X(te(q, 0, -q.tanY), R.x, _, A, D), ae = X(te(q, -q.tanX, 0), R.x, _, A, D);
    if (!K || !pe || !z || !ae) return { visible: !1 };
    const $ = [
      R,
      ...F,
      Y,
      fe,
      K,
      pe,
      z,
      ae
    ];
    if (g && !$.some((N) => Number((N == null ? void 0 : N.rawZ) ?? (N == null ? void 0 : N.z)) > 1e-4)) return { visible: !1 };
    const U = O(C, $), j = [
      {
        edge: "top",
        x: K.x,
        y: K.y,
        a: { x: F[0].x, y: F[0].y },
        b: { x: F[1].x, y: F[1].y }
      },
      {
        edge: "right",
        x: pe.x,
        y: pe.y,
        a: { x: F[1].x, y: F[1].y },
        b: { x: F[2].x, y: F[2].y }
      },
      {
        edge: "bottom",
        x: z.x,
        y: z.y,
        a: { x: F[2].x, y: F[2].y },
        b: { x: F[3].x, y: F[3].y }
      },
      {
        edge: "left",
        x: ae.x,
        y: ae.y,
        a: { x: F[3].x, y: F[3].y },
        b: { x: F[0].x, y: F[0].y }
      }
    ];
    return {
      center: { x: R.x, y: R.y },
      corners: F.map((N) => ({ x: N.x, y: N.y })),
      edgeMidpoints: j,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: xe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: U,
      visible: !0
    };
  }
  function W(C) {
    if (t && T(C) && oe()) return { visible: !1 };
    if (!_e() && (ve(C) || I(C))) return { visible: !1 };
    if (ve(C)) {
      const A = String(C.actionGroupId || C.id || "").trim(), g = b(A, C.layerKind), D = n._strokeGeomCache.get(g);
      return D || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), w(C, g));
    }
    if (I(C)) {
      const A = p(C), g = n._strokeGeomCache.get(A);
      return g || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Z(C, A));
    }
    const le = h(C), y = n._strokeGeomCache.get(le);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const _ = S(C);
    return n._strokeGeomCache.set(le, _), _;
  }
  function ne(C, le, y, _ = null) {
    const A = [];
    for (let g = 0; g <= y; g += 1) {
      const D = g / y;
      let R = 0, q = 0;
      le === 0 ? (R = D, q = 0) : le === 1 ? (R = 1, q = D) : le === 2 ? (R = 1 - D, q = 1) : (R = 0, q = 1 - D);
      const E = x(C, R, q), F = n.mode === "unwrap" ? de(E, _) : ye(E);
      F && A.push(F);
    }
    return A;
  }
  function me() {
    const C = [...Array.isArray(i.shots) ? i.shots : []], le = [...s()].sort((y, _) => Number(y.z_index || 0) - Number(_.z_index || 0));
    return [...C, ...le];
  }
  function Se() {
    const C = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((y, _) => Number(_.z_index || 0) - Number(y.z_index || 0)), ...C];
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
        getRasterObjectGeomCacheKey: p,
        getRasterObjectTransformedErpPoints: k,
        getSceneItemGeomCacheKey: h,
        getStickerFrame: m,
        getStrokeGeomCacheKey: b,
        getStrokeGroupCenterUv: G,
        getStrokeGroupStrokes: L,
        isFreeSpaceView: oe,
        isRasterObjectItem: I,
        isSceneSticker: J,
        isShotItem: T,
        isStickerItem: B,
        isStrokeGroupItem: ve,
        paintingShown: _e,
        poseOf: he,
        projectDir: ye,
        projectDirUnwrap: de,
        projectEditorPoints: we,
        projectErpPointToEditor: ue,
        sceneStickerShown: V,
        stickerCornersDir: ie,
        stickerDirFromFrame: te,
        stickerSampleDir: x,
        worldDirToFrameLocalPoint: v
      } = C);
    },
    projectSceneItemDir: X,
    objectGeom: W,
    sampleStickerEdge: ne,
    getCutoutSelectableItemsForDisplay: me,
    getCutoutSelectableItemsForHit: Se
  };
}
const ya = /* @__PURE__ */ new Map();
function G2(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he;
  function ye(g = r.interaction) {
    const D = String((g == null ? void 0 : g.kind) || "");
    if (D === "paint_stroke" || D === "paint_lasso_fill" || D === "move_stroke_group" || D === "scale_stroke_group" || D === "rotate_stroke_group" || D === "move_raster_object" || D === "scale_raster_object") return !0;
    if (D === "move_multi") {
      const R = Array.isArray(g == null ? void 0 : g.strokeSnapshots) && g.strokeSnapshots.length > 0, q = Array.isArray(g == null ? void 0 : g.rasterSnapshots) && g.rasterSnapshots.length > 0;
      return R || q;
    }
    return !1;
  }
  function de() {
    var D, R, q, E;
    let g = null;
    try {
      const F = h(), M = ((E = (q = (R = (D = r.paintEngine) == null ? void 0 : D.getErpTarget) == null ? void 0 : R.call(D, F)) == null ? void 0 : q.displayPaint) == null ? void 0 : E.canvas) || null;
      M && (g = {
        source: M,
        revision: `${m()}:${we()}`
      });
    } catch {
      g = null;
    }
    return g;
  }
  function we() {
    var E, F, M, H, Y, fe, be;
    const g = r.interaction, D = String((g == null ? void 0 : g.kind) || "");
    if (!ye(g)) return "";
    if (D === "paint_stroke" || D === "paint_lasso_fill") {
      const ke = ((E = g == null ? void 0 : g.stroke) == null ? void 0 : E.geometry) || null, ce = String(((F = g == null ? void 0 : g.stroke) == null ? void 0 : F.layerKind) || ""), xe = ((M = ke == null ? void 0 : ke.rawPoints) == null ? void 0 : M.length) ?? ((H = ke == null ? void 0 : ke.points) == null ? void 0 : H.length) ?? 0, K = String((g == null ? void 0 : g._livePreviewToken) || "");
      return `_${ce || "paint"}_${D}_live${K}_${xe}_${r.livePaintInteractionRevision}`;
    }
    const R = String(((Y = g == null ? void 0 : g.item) == null ? void 0 : Y.actionGroupId) || ""), q = String(((fe = g == null ? void 0 : g.item) == null ? void 0 : fe.rasterObjectId) || ((be = g == null ? void 0 : g.item) == null ? void 0 : be.id) || "");
    return `_${D}_${R || q || "active"}_${r.livePaintInteractionRevision}`;
  }
  function ue(g, D = null) {
    const R = String((g == null ? void 0 : g.rasterDataUrl) || "").trim();
    if (!R) return null;
    const q = s.get(R);
    if (q)
      return q.complete || q.width || q.naturalWidth, q;
    const E = new Image();
    return E.onload = () => {
      typeof D == "function" && D();
    }, E.src = R, s.set(R, E), E;
  }
  function V(g) {
    const D = String((g == null ? void 0 : g.rasterDataUrl) || "").trim();
    if (!D) return null;
    const R = o.get(D);
    if (R) return R.ready ? R : null;
    const q = ue(g, () => {
      const be = o.get(D);
      be && (be.ready = !1), ve({ localOnly: !0 });
    });
    if (!q || !(q.complete || q.width || q.naturalWidth)) return null;
    const E = Number(q.naturalWidth || q.width || 0), F = Number(q.naturalHeight || q.height || 0);
    if (E < 1 || F < 1) return null;
    const M = on({ label: "editor.image-pixels" });
    M.width = E, M.height = F;
    const H = M.getContext("2d", { willReadFrequently: !0 });
    if (!H) return null;
    H.clearRect(0, 0, E, F), H.drawImage(q, 0, 0, E, F);
    const Y = H.getImageData(0, 0, E, F).data, fe = { canvas: M, width: E, height: F, alpha: Y, ready: !0 };
    return o.set(D, fe), fe;
  }
  function ie(g, D) {
    if (!g || !D) return null;
    const R = (g == null ? void 0 : g.bbox) || null;
    if (!R) return null;
    const q = (g == null ? void 0 : g.transform) || {}, E = {
      u: (Number(R.u0 || 0) + Number(R.u1 || 0)) * 0.5,
      v: (Number(R.v0 || 0) + Number(R.v1 || 0)) * 0.5
    }, F = {
      u: ((Number(D.u || 0) - Number(q.du || 0)) % 1 + 1) % 1,
      v: Number(D.v || 0) - Number(q.dv || 0)
    }, M = L(
      F,
      E,
      Number(q.scale || 1),
      Number(q.rot_deg || 0)
    ), H = Number(R.u1 || 0) - Number(R.u0 || 0), Y = Number(R.v1 || 0) - Number(R.v0 || 0);
    if (!(H > 1e-6) || !(Y > 1e-6)) return null;
    const fe = he(Number(M.u || 0), Number(R.u0 || 0)) / H, be = (Number(M.v || 0) - Number(R.v0 || 0)) / Y;
    if (fe < 0 || fe > 1 || be < 0 || be > 1) return 0;
    const ke = V(g);
    if (!ke) return null;
    const ce = Oe(Math.floor(fe * ke.width), 0, ke.width - 1), xe = Oe(Math.floor(be * ke.height), 0, ke.height - 1);
    return Number(ke.alpha[(xe * ke.width + ce) * 4 + 3] || 0);
  }
  function te(g, D, R, q = null) {
    if (!(D != null && D.visible) || !Qr(R, D.corners)) return !1;
    const E = q || _e(R, performance.now()), F = ie(g, E);
    return F === null ? !0 : F > 8;
  }
  function x() {
    var q, E, F, M, H, Y, fe, be;
    const g = ((E = (q = r.paintEngine) == null ? void 0 : q.getErpTarget) == null ? void 0 : E.call(q, h(!1))) || null, D = Math.max(1, Number(((F = g == null ? void 0 : g.descriptor) == null ? void 0 : F.width) || ((H = (M = g == null ? void 0 : g.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : H.width) || 2048)), R = Math.max(1, Number(((Y = g == null ? void 0 : g.descriptor) == null ? void 0 : Y.height) || ((be = (fe = g == null ? void 0 : g.displayPaint) == null ? void 0 : fe.canvas) == null ? void 0 : be.height) || 1024));
    return { width: D, height: R };
  }
  function v() {
    var xe, K, pe;
    const g = r.interaction;
    if ((g == null ? void 0 : g.kind) !== "paint_stroke") return null;
    const D = (g == null ? void 0 : g.stroke) || null;
    if (!D || String((D == null ? void 0 : D.layerKind) || "") !== "paint" || String((D == null ? void 0 : D.toolKind) || "") !== "eraser") return null;
    const R = u(), q = `${we()}:${R.width}:${R.height}`;
    if (((xe = r._activePaintEraserPreviewInfo) == null ? void 0 : xe.cacheKey) === q)
      return r._activePaintEraserPreviewInfo.value || null;
    const E = dn(D), F = (E == null ? void 0 : E.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const z = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = J(z, E.targetSpace, !0);
    }
    const M = c(R.width, R.height, { readback: !0 });
    if (!T(M, E, { w: R.width, h: R.height })) return null;
    const H = ((pe = (K = M.ctx) == null ? void 0 : K.getImageData(0, 0, R.width, R.height)) == null ? void 0 : pe.data) || null;
    if (!H) return null;
    let Y = R.width, fe = R.height, be = -1, ke = -1;
    for (let z = 0; z < R.height; z += 1)
      for (let ae = 0; ae < R.width; ae += 1)
        H[(z * R.width + ae) * 4 + 3] <= 8 || (ae < Y && (Y = ae), z < fe && (fe = z), ae > be && (be = ae), z > ke && (ke = z));
    if (be < Y || ke < fe)
      return r._activePaintEraserPreviewInfo = { cacheKey: q, value: null }, null;
    const ce = {
      surface: M,
      bounds: { minX: Y, minY: fe, maxX: be, maxY: ke },
      key: `${q}:${Y}:${fe}:${be}:${ke}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: q, value: ce }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ce;
  }
  function w() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function Z(g, D, R) {
    var q, E;
    if (!g) return null;
    if (g.type === "rasterObject" && ((q = g.item) != null && q.bbox)) {
      const F = g.item.bbox, M = ((E = g.item) == null ? void 0 : E.transform) || {}, H = Number(F.u0 || 0) + Number(M.du || 0), Y = Number(F.u1 || 0) + Number(M.du || 0), fe = Number(F.v0 || 0) + Number(M.dv || 0), be = Number(F.v1 || 0) + Number(M.dv || 0);
      return {
        minX: Math.floor((H % 1 + 1) % 1 * D),
        maxX: Math.ceil((Y % 1 + 1) % 1 * D),
        minY: Math.floor(Oe(fe, 0, 1) * R),
        maxY: Math.ceil(Oe(be, 0, 1) * R),
        wraps: Y - H >= 1 || H < 0 || Y > 1
      };
    }
    if (g.type === "strokeGroup") {
      const F = G(g.actionGroupId, "paint"), M = d(g.actionGroupId, "paint", F);
      if (!M) return null;
      const H = M.centerUv.u - M.halfW, Y = M.centerUv.u + M.halfW, fe = M.centerUv.v - M.halfH, be = M.centerUv.v + M.halfH;
      return {
        minX: Math.floor((H % 1 + 1) % 1 * D),
        maxX: Math.ceil((Y % 1 + 1) % 1 * D),
        minY: Math.floor(Oe(fe, 0, 1) * R),
        maxY: Math.ceil(Oe(be, 0, 1) * R),
        wraps: Y - H >= 1 || H < 0 || Y > 1
      };
    }
    return null;
  }
  function X(g, D, R) {
    if (!g || !D) return !1;
    const q = (M) => M.wraps ? [
      { minX: 0, maxX: M.maxX, minY: M.minY, maxY: M.maxY, wraps: !1 },
      { minX: M.minX, maxX: R - 1, minY: M.minY, maxY: M.maxY, wraps: !1 }
    ] : [M], E = q(g), F = q(D);
    return E.some((M) => F.some((H) => !(M.maxX < H.minX || H.maxX < M.minX || M.maxY < H.minY || H.maxY < M.minY)));
  }
  function O(g, D, R) {
    var j, N, Q, P, re, ee, ge;
    if (!g || !D || !((j = R == null ? void 0 : R.surface) != null && j.canvas) || D.type !== "rasterObject") return g;
    const q = Number(g.width || R.surface.canvas.width || 0), E = Number(g.height || R.surface.canvas.height || 0);
    if (q < 1 || E < 1) return g;
    const F = Z(D, q, E);
    if (F && !X(F, R.bounds, q)) return g;
    const M = String(((N = D.item) == null ? void 0 : N.id) || D.id || ""), H = ((Q = D.item) == null ? void 0 : Q.transform) || {}, Y = `${R.key}:${M}:${q}:${E}:${Number(H.du || 0).toFixed(6)}:${Number(H.dv || 0).toFixed(6)}:${Number(H.rot_deg || 0).toFixed(3)}:${Number(H.scale || 1).toFixed(4)}`, fe = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (fe.has(Y)) return fe.get(Y);
    const be = Oe(Math.floor(Number(((P = R.bounds) == null ? void 0 : P.minX) || 0)), 0, Math.max(0, q - 1)), ke = Oe(Math.floor(Number(((re = R.bounds) == null ? void 0 : re.minY) || 0)), 0, Math.max(0, E - 1)), ce = Oe(Math.ceil(Number(((ee = R.bounds) == null ? void 0 : ee.maxX) || 0)), be, Math.max(0, q - 1)), xe = Oe(Math.ceil(Number(((ge = R.bounds) == null ? void 0 : ge.maxY) || 0)), ke, Math.max(0, E - 1)), K = Math.max(1, ce - be + 1), pe = Math.max(1, xe - ke + 1), z = c(q, E, { readback: !0 });
    z.ctx.clearRect(0, 0, q, E), z.ctx.drawImage(g, 0, 0);
    const ae = z.ctx.getImageData(be, ke, K, pe);
    z.ctx.save(), z.ctx.globalCompositeOperation = "destination-out", z.ctx.drawImage(R.surface.canvas, 0, 0), z.ctx.restore();
    const $ = z.ctx.getImageData(be, ke, K, pe);
    let U = !1;
    for (let Pe = 0; Pe < K * pe; Pe += 1) {
      const Ee = ae.data[Pe * 4 + 3], Re = $.data[Pe * 4 + 3];
      if (Ee > Re) {
        U = !0;
        break;
      }
    }
    return U ? (fe.size > 64 && fe.clear(), fe.set(Y, z.canvas), z.canvas) : (fe.set(Y, g), g);
  }
  function S(g, D = null) {
    const R = I((g == null ? void 0 : g.rasterObjectId) || (g == null ? void 0 : g.id) || ""), q = (g == null ? void 0 : g.bbox) || null;
    if (!R || !q) return null;
    const E = ue(g, D);
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const { width: F, height: M } = x(), H = (g == null ? void 0 : g.transform) || {}, Y = [
      R,
      F,
      M,
      q.u0,
      q.v0,
      q.u1,
      q.v1,
      H.du,
      H.dv,
      H.rot_deg,
      H.scale,
      b()
    ].join(":"), fe = i.get(Y);
    if (fe) return fe;
    i.size > 64 && i.clear();
    const be = on({ label: "editor.raster-erp" });
    be.width = F, be.height = M;
    const ke = be.getContext("2d");
    return ke ? (S0(ke, E, g, F, M), i.set(Y, be), be) : null;
  }
  async function W(g, D) {
    const R = await new Promise((H) => g.toBlob(H, "image/png")), q = new FormData();
    q.append("image", R, D), q.append("type", "input"), q.append("subfolder", "panorama_stickers"), q.append("overwrite", "1");
    const E = await t.fetchApi("/upload/image", { method: "POST", body: q });
    if (!E || E.status !== 200) throw new Error(`upload failed (${E == null ? void 0 : E.status})`);
    const F = await E.json(), M = String((F == null ? void 0 : F.name) || "").trim();
    if (!M) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: M,
      subfolder: String((F == null ? void 0 : F.subfolder) || "panorama_stickers"),
      storage: String((F == null ? void 0 : F.type) || "input")
    };
  }
  let ne = null, me = !1;
  function Se() {
    const g = Fp(a.painting), { width: D, height: R } = f();
    return rS(a.painting_layer, { paintCount: g.totalPaintCount, maskCount: g.totalMaskCount, width: D, height: R, nodeId: String(n.id ?? "0") });
  }
  function C() {
    const g = String(n.id ?? "0"), D = ya.get(g);
    if (me && D) return D;
    const R = (async () => {
      var F, M, H, Y, fe, be, ke, ce, xe, K, pe, z;
      const q = m(), E = Fp(a.painting);
      if (E.totalPaintCount <= 0 && E.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ne = q, l());
        return;
      }
      if (ne !== q && !me) {
        me = !0;
        try {
          B();
          const ae = h(!1), $ = ((M = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : M.call(F, ae)) || null, U = ((H = $ == null ? void 0 : $.displayPaint) == null ? void 0 : H.canvas) || null, j = ((Y = $ == null ? void 0 : $.committedMask) == null ? void 0 : Y.canvas) || null, N = Math.max(1, Number(((fe = $ == null ? void 0 : $.descriptor) == null ? void 0 : fe.width) || (U == null ? void 0 : U.width) || (j == null ? void 0 : j.width) || 2048)), Q = Math.max(1, Number(((be = $ == null ? void 0 : $.descriptor) == null ? void 0 : be.height) || (U == null ? void 0 : U.height) || (j == null ? void 0 : j.height) || 1024));
          (!U && E.totalPaintCount > 0 || !j && E.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((ke = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ke.width) || 0) !== N || Number(((ce = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ce.height) || 0) !== Q) && (r._paintLayerSyncBlankSurface = c(N, Q)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, N, Q));
          const P = U || E.totalPaintCount > 0 && ((xe = r._paintLayerSyncBlankSurface) == null ? void 0 : xe.canvas) || null, re = j || E.totalMaskCount > 0 && ((K = r._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null;
          if (!P && !re) return;
          let ee = null, ge = null;
          const Pe = [];
          if (E.totalPaintCount > 0) {
            ee = await W(P, `pano_paint_${g}.png`);
            for (const Ee of ae) {
              const Re = String(Ee || "").trim();
              if (!Re) continue;
              const We = ((z = (pe = r.paintEngine) == null ? void 0 : pe.getGroupDisplayCanvas) == null ? void 0 : z.call(pe, Re)) || null;
              if (!We) continue;
              const Ge = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ce = await W(We, `pano_group_${g}_${Ge}.png`);
              Ce && Pe.push({
                id: Re,
                actionGroupId: Re,
                image: Ce
              });
            }
          }
          E.totalMaskCount > 0 && (ge = await W(re, `pano_mask_${g}.png`)), q === m() && (a.painting_layer = {
            paint: ee,
            mask: ge,
            groups: Pe,
            revision: q
          }, ne = q, l());
        } catch (ae) {
          throw ae;
        } finally {
          me = !1;
        }
      }
    })();
    return ya.set(g, R), R.finally(() => {
      ya.get(g) === R && ya.delete(g);
    }), R;
  }
  function le(g) {
    var M;
    const D = ((M = r.paintEngine) == null ? void 0 : M.getMaskDisplayCanvas()) || null;
    if (!D) return g;
    const R = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, q = g.reduce((H, Y) => Math.max(H, Number((Y == null ? void 0 : Y.zIndex) || 0)), -1), E = (Array.isArray(a.stickers) ? a.stickers : []).reduce((H, Y) => Math.max(H, Number((Y == null ? void 0 : Y.z_index) || 0)), -1), F = Math.max(q, E);
    return g.push({
      id: "mask_display",
      source: D,
      revision: R,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), g;
  }
  function y() {
    var q, E;
    const g = k(!0), D = v(), R = [];
    for (const F of g) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const M = String(F.actionGroupId || F.id || "");
        if (!M) continue;
        const H = ((E = (q = r.paintEngine) == null ? void 0 : q.getGroupDisplayCanvas) == null ? void 0 : E.call(q, M)) || null;
        if (!H) continue;
        R.push({
          id: `paint_group:${M}`,
          source: H,
          revision: `${p()}:${M}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const M = F.item || null, H = I((M == null ? void 0 : M.id) || F.id || "");
        if (!H) continue;
        const Y = S(M, () => ve());
        if (!Y) continue;
        const fe = O(Y, F, D), be = (M == null ? void 0 : M.transform) || {};
        R.push({
          id: `raster:${H}`,
          source: fe,
          revision: [
            m(),
            (D == null ? void 0 : D.key) || "",
            H,
            Number(be.du || 0).toFixed(6),
            Number(be.dv || 0).toFixed(6),
            Number(be.rot_deg || 0).toFixed(3),
            Number(be.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: (M == null ? void 0 : M.visible) !== !1
        });
      }
    }
    return le(R);
  }
  function _() {
    return oe() ? y().filter((g) => g.visible !== !1).map((g) => ({ id: g.id, media: g.source, revision: g.revision, opacity: g.opacity, zIndex: g.zIndex })) : [];
  }
  function A() {
    a.painting_layer !== null && (a.painting_layer = null), ne = "";
  }
  return {
    connect(g) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: p,
        getOrderedDisplayListObjects: k,
        getOrderedPaintGroupIds: h,
        getPaintingCompositeRevisionKey: m,
        getPaintingRevisionKey: b,
        getStrokeGroupStrokes: G,
        inverseTransformErpPointAround: L,
        paintingShown: oe,
        parseRasterObjectSelectionId: I,
        processFreehandPoints: J,
        rasterizeStrokeToSurface: T,
        rebuildPaintEngineIfNeeded: B,
        requestDraw: ve,
        screenPosToErpPoint: _e,
        shortestWrappedDelta: he
      } = g);
    },
    getSharedLivePaintSurface: de,
    getLivePaintRevisionSuffix: we,
    isPaintCompositeInteraction: ye,
    hitRasterObjectAt: te,
    invalidateLivePaintPreviewCaches: w,
    buildRasterObjectEditCanvas: S,
    needsPaintingLayerSync: Se,
    syncPaintingLayerAsync: C,
    invalidatePaintingLayerState: A,
    buildEditorViewPaintLayers: _
  };
}
function K2(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(O) {
    return !O || typeof O != "object" ? { x: 0, y: 0 } : { x: Number((O == null ? void 0 : O.u) || 0), y: Number((O == null ? void 0 : O.v) || 0) };
  }
  function c(O, S, W, ne = {}) {
    return { ...{
      ...O,
      t: Number((O == null ? void 0 : O.t) || 0),
      widthScale: f(O, "widthScale", 1),
      pressureLike: f(O, "pressureLike", 1)
    }, ...ne, u: S, v: W };
  }
  function d(O, S = !1) {
    return S ? 12e-4 : 18e-4;
  }
  function u(O, S, W = !1) {
    if (!Array.isArray(O) || !O.length) return [];
    const ne = String((S == null ? void 0 : S.kind) || "") === "ERP_GLOBAL", me = /* @__PURE__ */ new WeakMap();
    if (ne) {
      let E = null;
      O.forEach((F) => {
        const M = Number((F == null ? void 0 : F.u) || 0), H = Number((F == null ? void 0 : F.v) || 0), Y = (M % 1 + 1) % 1, fe = E == null ? Y : E + a(Y, (E % 1 + 1) % 1);
        me.set(F, { x: fe, y: H }), E = fe;
      });
    }
    const Se = (E) => !E || typeof E != "object" ? { x: 0, y: 0 } : me.get(E) || l(E), C = (E, F, M, H = {}) => {
      const Y = ne ? (Number(F) % 1 + 1) % 1 : Number(F), fe = c(E, Y, M, H);
      return me.set(fe, { x: Number(F), y: Number(M) }), fe;
    }, le = (E, F, M) => {
      const H = Se(E), Y = Se(F);
      return C(E, Yn(H.x, Y.x, M), Yn(H.y, Y.y, M), {
        t: Yn(Number((E == null ? void 0 : E.t) || 0), Number((F == null ? void 0 : F.t) || 0), M),
        widthScale: Yn(f(E, "widthScale", 1), f(F, "widthScale", 1), M),
        pressureLike: Yn(f(E, "pressureLike", 1), f(F, "pressureLike", 1), M)
      });
    };
    if (O.length === 1) {
      const E = Se(O[0]);
      return [C(O[0], E.x, E.y)];
    }
    const y = d(S, W), _ = (E, F) => {
      const M = [0];
      for (let K = 1; K < E.length; K += 1) {
        const pe = Se(E[K - 1]), z = Se(E[K]);
        M.push(M[K - 1] + Math.hypot(z.x - pe.x, z.y - pe.y));
      }
      const H = M[M.length - 1] || 0;
      if (H <= 1e-8) {
        const K = E[0], pe = Se(K);
        return [C(K, pe.x, pe.y)];
      }
      const Y = [];
      let fe = 0;
      for (let K = 0; K <= H + 1e-9; K += F) {
        for (; fe < M.length - 2 && M[fe + 1] < K; ) fe += 1;
        const pe = M[fe], z = M[fe + 1], ae = Math.max(1e-8, z - pe);
        Y.push(le(E[fe], E[fe + 1], Oe((K - pe) / ae, 0, 1)));
      }
      const be = E[E.length - 1], ke = Se(be), ce = Y[Y.length - 1], xe = ce ? Se(ce) : null;
      return (!xe || Math.hypot(xe.x - ke.x, xe.y - ke.y) > F * 0.35) && Y.push(C(be, ke.x, ke.y)), Y;
    }, A = (E) => {
      if (!Array.isArray(E) || E.length < 3) return E ? E.slice() : [];
      const F = Se(E[0]), M = [C(E[0], F.x, F.y)];
      for (let fe = 0; fe < E.length - 1; fe += 1) {
        const be = E[fe], ke = E[fe + 1], ce = Se(be), xe = Se(ke), K = C(
          be,
          ce.x * 0.75 + xe.x * 0.25,
          ce.y * 0.75 + xe.y * 0.25,
          {
            t: Number(be.t || 0) * 0.75 + Number(ke.t || 0) * 0.25,
            widthScale: f(be, "widthScale", 1) * 0.75 + f(ke, "widthScale", 1) * 0.25,
            pressureLike: f(be, "pressureLike", 1) * 0.75 + f(ke, "pressureLike", 1) * 0.25
          }
        ), pe = C(
          be,
          ce.x * 0.25 + xe.x * 0.75,
          ce.y * 0.25 + xe.y * 0.75,
          {
            t: Number(be.t || 0) * 0.25 + Number(ke.t || 0) * 0.75,
            widthScale: f(be, "widthScale", 1) * 0.25 + f(ke, "widthScale", 1) * 0.75,
            pressureLike: f(be, "pressureLike", 1) * 0.25 + f(ke, "pressureLike", 1) * 0.75
          }
        );
        M.push(K, pe);
      }
      const H = E[E.length - 1], Y = Se(H);
      return M.push(C(H, Y.x, Y.y)), M;
    }, g = _(O, y);
    if (g.length < 3) return g;
    const D = W ? 2 : 1;
    let R = g.slice();
    for (let E = 0; E < D; E += 1) R = A(R);
    return _(R, Math.max(y * 0.75, 55e-5));
  }
  function f(O, S, W = 1) {
    const ne = Number(O == null ? void 0 : O[S]);
    return Number.isFinite(ne) ? Math.max(0, ne) : W;
  }
  function p(O) {
    const S = Number(O == null ? void 0 : O.radiusValue);
    if (Number.isFinite(S) && S > 0) {
      const W = String((O == null ? void 0 : O.radiusModel) || "").trim() || "erp_uv_norm";
      return W === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
      } : {
        model: W,
        value: S
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
    };
  }
  function k(O, S, W = {}) {
    const ne = on({ label: "editor.raster-surface" });
    ne.width = Math.max(1, Math.round(O)), ne.height = Math.max(1, Math.round(S));
    const me = ne.getContext("2d", W.readback ? { willReadFrequently: !0 } : void 0);
    return me && (me.clearRect(0, 0, ne.width, ne.height), me.imageSmoothingEnabled = !0), { canvas: ne, ctx: me };
  }
  function h() {
    const O = _e();
    return `${String(t.paintStrokeRevision)}:${O.width}x${O.height}`;
  }
  function m() {
    const O = _e();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${O.width}x${O.height}`;
  }
  function b() {
    const O = i(), S = m();
    return O ? `${S}:${O}` : S;
  }
  function G() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function L() {
    t.paintCompositeRevision += 1;
  }
  function oe() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function I() {
    var O, S;
    t.paintEngineRevisionKey = null, (S = (O = t.paintEngine) == null ? void 0 : O.rebuildCommitted) == null || S.call(O, n), t.paintEngineRevisionKey = h();
  }
  function J() {
    oe(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function T({ rebuildPaintEngine: O = !1 } = {}) {
    o(), G(), J(), O && I();
  }
  function B() {
    o(), L(), J();
  }
  function ve() {
    var ne;
    const O = _e(), S = `${O.width}x${O.height}`;
    t.paintEngineDescriptorKey !== S && (t.paintEngine = Ll(O), t.paintEngineDescriptorKey = S, t.paintEngineRevisionKey = "");
    const W = h();
    t.paintEngineRevisionKey !== W && (t.paintEngineRevisionKey = W, (ne = t.paintEngine) == null || ne.rebuildCommitted(n));
  }
  function _e() {
    const O = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: O,
      height: Math.max(1, Math.round(O * 0.5))
    };
  }
  function he() {
    return _e();
  }
  function ye(O, S, W, ne, me = null) {
    const Se = p(O), C = f(S, "widthScale", 1) * f(S, "pressureLike", 1);
    return Se.model === "erp_uv_norm" ? Math.max(0.5, Se.value * W * C) : Se.model === "world_angle" ? me ? Math.max(0.5, Se.value / Math.max(1e-6, Number(me.hFOV_deg || 90) * Pr) * W * C) : Math.max(0.5, Se.value / (2 * Math.PI) * W * C) : Math.max(0.5, Number((O == null ? void 0 : O.size) || 10) * 0.5 * C);
  }
  function de(O, S, W = {}) {
    const ne = String((S == null ? void 0 : S.layerKind) || "paint"), me = String((S == null ? void 0 : S.toolKind) || "pen"), Se = W.preview === !0, C = Se ? 0.78 : 1;
    if (O.globalAlpha = me === "marker" ? 0.7 * C : 1, ne === "mask") {
      O.fillStyle = Se ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (me === "eraser") {
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((S == null ? void 0 : S.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (S == null ? void 0 : S.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = Se ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    O.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${y})`;
  }
  function we(O, S, W) {
    const ne = Math.max(0.5, Math.min(W, Number((S == null ? void 0 : S.radiusPx) || 0.5)));
    !Number.isFinite(S == null ? void 0 : S.x) || !Number.isFinite(S == null ? void 0 : S.y) || !Number.isFinite(ne) || (O.beginPath(), O.arc(Number(S.x || 0), Number(S.y || 0), ne, 0, Math.PI * 2), O.fill());
  }
  function ue(O, S, W, ne, me = {}) {
    if (!O || !Array.isArray(S) || !S.length) return;
    const Se = Math.max(ne.w, ne.h) * 0.25;
    O.save(), de(O, W, me);
    const C = (le) => we(O, le, Se);
    if (S.length === 1) {
      C(S[0]), O.restore();
      return;
    }
    for (let le = 0; le < S.length - 1; le += 1) {
      const y = S[le], _ = S[le + 1];
      if (!y || !_) continue;
      const A = Number(y.x || 0), g = Number(y.y || 0), D = Number(_.x || 0), R = Number(_.y || 0), q = Math.max(0.5, Math.min(Se, Number(y.radiusPx || 0.5))), E = Math.max(0.5, Math.min(Se, Number(_.radiusPx || 0.5)));
      if (!Number.isFinite(A) || !Number.isFinite(g) || !Number.isFinite(D) || !Number.isFinite(R) || !Number.isFinite(q) || !Number.isFinite(E)) continue;
      const F = D - A, M = R - g, H = Math.hypot(F, M);
      if (!Number.isFinite(H) || H < 1e-6) {
        C(y);
        continue;
      }
      if (H > Math.max(ne.w, ne.h) * 0.5) continue;
      const Y = Math.max(0.5, Math.min(q, E)), fe = Math.max(0.35, Math.min(Y * 0.4, 2.25)), be = Math.max(1, Math.ceil(H / fe));
      for (let ke = 0; ke <= be; ke += 1) {
        const ce = ke / be;
        C({
          x: Yn(A, D, ce),
          y: Yn(g, R, ce),
          radiusPx: Yn(q, E, ce)
        });
      }
    }
    C(S[S.length - 1]), O.restore();
  }
  function V(O, S, W, ne) {
    ue(O, S, W, ne, { preview: !1 });
  }
  function ie(O, S, W, ne, me) {
    var le, y, _, A;
    if (!O || !Array.isArray(S) || S.length < 3) return;
    const Se = "u", C = "v";
    if (O.save(), String((W == null ? void 0 : W.layerKind) || "") === "mask")
      O.fillStyle = "rgba(255,255,255,1)";
    else if (String((W == null ? void 0 : W.toolKind) || "") === "eraser")
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
    else {
      const g = (W == null ? void 0 : W.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      O.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${Number(g.a ?? 1)})`;
    }
    O.beginPath(), O.moveTo(Number(((le = S[0]) == null ? void 0 : le[Se]) || 0) * ne.w, Number(((y = S[0]) == null ? void 0 : y[C]) || 0) * ne.h);
    for (let g = 1; g < S.length; g += 1)
      O.lineTo(Number(((_ = S[g]) == null ? void 0 : _[Se]) || 0) * ne.w, Number(((A = S[g]) == null ? void 0 : A[C]) || 0) * ne.h);
    O.closePath(), O.fill(), O.restore();
  }
  function te(O) {
    const S = (O == null ? void 0 : O.geometry) || null;
    return S ? String(S.geometryKind || "") === "lasso_fill" ? Array.isArray(S.points) ? S.points : [] : Array.isArray(S.processedPoints) && S.processedPoints.length ? S.processedPoints : Array.isArray(S.rawPoints) && S.rawPoints.length ? S.rawPoints : Array.isArray(S.points) ? S.points : [] : [];
  }
  function x(O, S) {
    const W = te(O);
    return !Array.isArray(W) || !W.length ? [] : W.map((ne) => ({
      x: Number((ne == null ? void 0 : ne.u) || 0) * Number((S == null ? void 0 : S.w) || 1),
      y: Number((ne == null ? void 0 : ne.v) || 0) * Number((S == null ? void 0 : S.h) || 1),
      radiusPx: ye(O, ne, Number((S == null ? void 0 : S.w) || 1), Number((S == null ? void 0 : S.h) || 1))
    }));
  }
  function v(O, S, W = null) {
    var le, y, _, A;
    if (!(O != null && O.ctx) || !S) return !1;
    const ne = W || { w: Number(((le = O.canvas) == null ? void 0 : le.width) || 0), h: Number(((y = O.canvas) == null ? void 0 : y.height) || 0) }, me = String((S == null ? void 0 : S.toolKind) || "") === "eraser" ? {
      ...S,
      layerKind: "mask",
      toolKind: String(((_ = S == null ? void 0 : S.geometry) == null ? void 0 : _.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : S;
    if (String(((A = S == null ? void 0 : S.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill")
      return ie(O.ctx, te(me), me, ne), !0;
    const C = x(me, ne);
    return C.length ? (V(O.ctx, C, me, ne), !0) : !1;
  }
  function w(O, S, W, ne = 8) {
    const me = new Uint8Array(S * W), Se = [], C = new Int32Array(S * W), le = new Int32Array(S * W);
    for (let y = 0; y < W; y += 1)
      for (let _ = 0; _ < S; _ += 1) {
        const A = y * S + _;
        if (me[A] || O[A] <= ne) continue;
        let g = 0, D = 0;
        C[D] = _, le[D] = y, D += 1, me[A] = 1;
        const R = [];
        let q = _, E = y, F = _, M = y;
        for (; g < D; ) {
          const H = C[g], Y = le[g];
          g += 1, R.push({ x: H, y: Y }), H < q && (q = H), Y < E && (E = Y), H > F && (F = H), Y > M && (M = Y);
          const fe = [
            [(H - 1 + S) % S, Y],
            [(H + 1) % S, Y],
            [H, Y - 1],
            [H, Y + 1]
          ];
          for (const [be, ke] of fe) {
            if (ke < 0 || ke >= W) continue;
            const ce = ke * S + be;
            me[ce] || O[ce] <= ne || (me[ce] = 1, C[D] = be, le[D] = ke, D += 1);
          }
        }
        Se.push({ pixels: R, minX: q, minY: E, maxX: F, maxY: M });
      }
    return Se;
  }
  function Z(O, S) {
    const W = [...new Set((Array.isArray(O == null ? void 0 : O.pixels) ? O.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, _) => y - _);
    if (!W.length) return null;
    if (W.length === 1)
      return { startX: W[0], widthPx: 1 };
    let ne = -1, me = 0;
    for (let y = 0; y < W.length; y += 1) {
      const _ = W[y], g = (y === W.length - 1 ? W[0] + S : W[y + 1]) - _ - 1;
      g > ne && (ne = g, me = y);
    }
    const Se = (W[(me + 1) % W.length] + S) % S;
    let C = 1 / 0, le = -1 / 0;
    for (const y of W) {
      const _ = (y - Se + S) % S;
      C = Math.min(C, _), le = Math.max(le, _);
    }
    return {
      startX: Se,
      widthPx: Math.max(1, le - C + 1)
    };
  }
  function X(O, S, W = {}) {
    var _;
    const ne = Number((O == null ? void 0 : O.width) || 0), me = Number((O == null ? void 0 : O.height) || 0), Se = (_ = O == null ? void 0 : O.getContext) == null ? void 0 : _.call(O, "2d");
    if (!Se || ne < 1 || me < 1) return [];
    const C = Se.getImageData(0, 0, ne, me), le = new Uint8Array(ne * me);
    for (let A = 0; A < le.length; A += 1) le[A] = C.data[A * 4 + 3];
    return w(le, ne, me, 8).map((A, g) => {
      const D = Z(A, ne);
      if (!D) return null;
      const R = Number(D.widthPx || 0), q = A.maxY - A.minY + 1, E = Number(D.startX || 0), F = on({ label: "editor.lasso-fill" });
      F.width = R, F.height = q;
      const M = F.getContext("2d");
      if (!M) return null;
      const H = M.createImageData(R, q);
      return A.pixels.forEach(({ x: Y, y: fe }) => {
        const be = (fe * ne + Y) * 4, ke = (Number(Y || 0) - E + ne) % ne, ce = ((fe - A.minY) * R + ke) * 4;
        H.data[ce + 0] = C.data[be + 0], H.data[ce + 1] = C.data[be + 1], H.data[ce + 2] = C.data[be + 2], H.data[ce + 3] = C.data[be + 3];
      }), M.putImageData(H, 0, 0), {
        id: io("raster"),
        type: "raster_frozen",
        layerKind: S === "mask" ? "mask" : "paint",
        z_index: Number((W == null ? void 0 : W.z_index) || 0) + g * 1e-3,
        locked: (W == null ? void 0 : W.locked) === !0,
        bbox: {
          u0: 0,
          v0: A.minY / me,
          u1: R / ne,
          v1: (A.maxY + 1) / me
        },
        rasterDataUrl: F.toDataURL("image/png"),
        transform: {
          du: E / ne,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(O) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = O);
    },
    processFreehandPoints: u,
    createRasterSurface: k,
    getPaintingRevisionKey: h,
    getPaintingCompositeRevisionKey: m,
    getDisplayPaintRevisionKey: b,
    refreshPaintEngineRevisionCache: I,
    markObjectVisualsDirty: J,
    markPaintStrokeVisualsDirty: T,
    markPaintCompositeVisualsDirty: B,
    rebuildPaintEngineIfNeeded: ve,
    getDesiredPaintTargetDescriptor: _e,
    getActivePaintTargetDescriptor: he,
    rasterizeStrokeToSurface: v,
    createRasterFrozenObjectsFromCanvas: X
  };
}
function W2(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, k, h, m = { stored: null, shown: null, handoff: null, fps: null };
  function b(x, v = null) {
    var w;
    if (x && typeof x == "object" && !Array.isArray(x)) return x;
    if (Array.isArray(x) && x.length > 0) {
      const Z = x[0];
      if (Z && typeof Z == "object" && !Array.isArray(Z)) return Z;
    }
    if (Array.isArray(v) && v.length > 0) {
      const Z = (w = v[0]) == null ? void 0 : w.parsed_state;
      if (Z && typeof Z == "object" && !Array.isArray(Z))
        return {
          yaw_deg: Number(Z.yaw_deg || 0),
          pitch_deg: Number(Z.pitch_deg || 0),
          hFOV_deg: Number(Z.hFOV_deg || 30),
          rot_deg: Number(Z.roll_deg || 0)
        };
    }
    return null;
  }
  function G(x, v, w) {
    const Z = Math.max(1, Number(v || 1)), X = Math.max(1, Number(w || 1)), O = Oe(Number(x || 30), 0.1, 179) * Pr, S = 2 * Math.atan(Math.tan(O * 0.5) * (X / Z));
    return Oe(S * Li, 0.1, 179);
  }
  function L(x) {
    const v = String(x || "").trim();
    if (!v) return null;
    try {
      const w = JSON.parse(v);
      if (!w || typeof w != "object" || String(w.kind || "") !== "pano_sticker_state") return null;
      const Z = w.version;
      let X = null;
      if (typeof Z == "number" && Number.isInteger(Z) ? X = Z : typeof Z == "string" && /^\d+$/.test(Z) && (X = Number.parseInt(Z, 10)), X !== 1) return null;
      const O = w.pose;
      if (!O || typeof O != "object") return null;
      const S = Number(O.yaw_deg), W = Number(O.pitch_deg), ne = Number(O.roll_deg), me = Number(O.hFOV_deg);
      if (![S, W, ne, me].every((y) => Number.isFinite(y))) return null;
      let Se = ((S + 180) % 360 + 360) % 360 - 180;
      Object.is(Se, -0) && (Se = 0);
      const C = {
        yaw_deg: Se,
        pitch_deg: Oe(W, -89.9, 89.9),
        roll_deg: ne,
        hFOV_deg: Oe(me, 0.1, 179)
      }, le = Number(w.source_aspect);
      return Number.isFinite(le) && le > 0 && (C.source_aspect = le), C;
    } catch {
      return null;
    }
  }
  function oe(x) {
    const v = Number(x == null ? void 0 : x.yaw_deg), w = Number(x == null ? void 0 : x.pitch_deg), Z = Number((x == null ? void 0 : x.roll_deg) ?? (x == null ? void 0 : x.rot_deg)), X = Number(x == null ? void 0 : x.hFOV_deg), O = Vi(x);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(v) ? v : 0),
        pitch_deg: Oe(Number.isFinite(w) ? w : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Z) ? Z : 0,
        hFOV_deg: Oe(Number.isFinite(X) ? X : 90, 0.1, 179)
      },
      source_aspect: O
    };
  }
  function I(x) {
    var W;
    if (!x || typeof x != "object") return oe(null);
    const v = Number(x == null ? void 0 : x.yaw_deg), w = Number(x == null ? void 0 : x.pitch_deg), Z = Number((x == null ? void 0 : x.roll_deg) ?? (x == null ? void 0 : x.rot_deg)), X = Number(x == null ? void 0 : x.hFOV_deg), O = Number(x == null ? void 0 : x.vFOV_deg);
    let S = 1;
    if (Number.isFinite(X) && Number.isFinite(O)) {
      const ne = Oe(X, 0.1, 179) * Pr, me = Oe(O, 0.1, 179) * Pr, Se = Math.tan(me * 0.5);
      if (Math.abs(Se) > 1e-6) {
        const C = Math.tan(ne * 0.5) / Se;
        Number.isFinite(C) && C > 0 && (S = C);
      }
    }
    if (x != null && x.asset_id && ((W = o == null ? void 0 : o.assets) != null && W[x.asset_id])) {
      const ne = o.assets[x.asset_id], me = Number((ne == null ? void 0 : ne.w) || 0), Se = Number((ne == null ? void 0 : ne.h) || 0);
      me > 0 && Se > 0 && (S = me / Se);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(v) ? v : 0),
        pitch_deg: Oe(Number.isFinite(w) ? w : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Z) ? Z : 0,
        hFOV_deg: Oe(Number.isFinite(X) ? X : 30, 0.1, 179)
      },
      source_aspect: S
    };
  }
  function J(x) {
    return t.linkedValue(n, x);
  }
  function T(x, v, w) {
    const Z = x && typeof x == "object" ? {
      yaw_deg: Number(x.yaw_deg || 0),
      pitch_deg: Number(x.pitch_deg || 0),
      roll_deg: Number(x.rot_deg ?? x.roll_deg ?? 0),
      hFOV_deg: Number(x.hFOV_deg || 30)
    } : L(v);
    if (Z) {
      const S = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.width) || Z.source_aspect || 1), W = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.height) || 1);
      return {
        yaw_deg: Number(Z.yaw_deg || 0),
        pitch_deg: Number(Z.pitch_deg || 0),
        hFOV_deg: Number(Z.hFOV_deg || 30),
        vFOV_deg: G(Z.hFOV_deg, S, W),
        rot_deg: Number(Z.roll_deg || 0)
      };
    }
    const X = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.width) || 1), O = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: G(30, X, O),
      rot_deg: 0
    };
  }
  function B() {
    const x = Kt(n, "external-sticker") ? b(c("pano_sticker_input_pose"), null) : null;
    return Ig(o, Ag(n, { pose: x, handoff: ve() }));
  }
  function ve() {
    return Kt(n, "sticker-handoff") ? F_(n, c("pano_sticker_handoff")) : null;
  }
  function _e() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function he(x, v, w) {
    return structuredClone(Mo(er({ version: 2, timeline: { fps: v }, stickers: [x] }), w).stickers[0]);
  }
  function ye({ record: x = !0, restored: v = !1 } = {}) {
    var ne;
    if (!_e()) return !1;
    const w = o.stickers.find((me) => {
      var Se;
      return ((Se = me.source) == null ? void 0 : Se.kind) === "port";
    });
    if (!w)
      return m = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: Z } = o.timeline;
    let X;
    if (v || !m.handoff || ((ne = m.stored) == null ? void 0 : ne.id) !== w.id)
      X = structuredClone(w);
    else {
      const me = (Se) => m.fps === Z ? Se : he(Se, m.fps, Z);
      x && A_(w, me(m.shown)), X = C_(w, me(m.stored));
    }
    const O = ve(), S = O ? Id(o, X, O) : structuredClone(X), W = JSON.stringify(S) !== JSON.stringify(w);
    if (W) {
      for (const me of Object.keys(w)) delete w[me];
      Object.assign(w, S);
    }
    return m = { stored: X, shown: structuredClone(S), handoff: O, fps: Z }, W;
  }
  function de() {
    return m.handoff ? { ...o, stickers: o.stickers.map((x) => {
      var v;
      return ((v = x.source) == null ? void 0 : v.kind) === "port" ? m.stored : x;
    }) } : o;
  }
  function we(x) {
    var Z;
    if (!_e() || ((Z = x == null ? void 0 : x.source) == null ? void 0 : Z.kind) !== "port") return null;
    const { handoff: v } = m, w = !!v && v.placement === x.placement;
    return bo[x.placement].map((X) => ({ name: X, overridden: w && x.handoff_overrides.includes(X) }));
  }
  function ue(x) {
    ye();
    const v = o.stickers.find((w) => {
      var Z;
      return ((Z = w.source) == null ? void 0 : Z.kind) === "port";
    });
    !v || v.locked || !m.handoff || !I_(o, v, m.handoff, x) || (m.shown = structuredClone(v), m.stored[x] = structuredClone(v[x]), f(), a(), u(), h(), p());
  }
  function V() {
    var W;
    const x = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ne) => String((ne == null ? void 0 : ne.name) || "") === "sticker_image") : -1, v = x >= 0 ? ((W = n.getInputLink(x)) == null ? void 0 : W.id) ?? null : null, w = l(() => {
      ii(n, "image-loaded");
    }), Z = b(c("pano_sticker_input_pose"), null), X = J("sticker_state"), O = t.externalStateHash(n, X), S = v == null ? null : T(Z, X, w);
    return Ng(o, {
      connected: v != null,
      linkId: v,
      stateHash: O,
      pose: S,
      imageWidth: Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.width) || 0),
      imageHeight: Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.height) || 0)
    });
  }
  function ie(x = "sync") {
    if (s !== "stickers" || i) return;
    const v = n.__panoSceneStateV2 ? B() : V();
    if (v.changed) {
      const w = o.stickers.find(d);
      o.stickers = v.state.stickers, o.active = v.state.active, w && r.selectedId === w.id && !o.stickers.some((Z) => Z.id === w.id) && (r.selectedId = null, r.selectedIds = []), a(), h(), k();
    } else ye({ restored: x === "open" }) ? (u(), h()) : x === "image-loaded" && h();
    p();
  }
  function te() {
    const x = Array.isArray(o.stickers) ? o.stickers : [], v = [];
    for (const w of x)
      d(w) && (w.visible = !1, v.push(w));
    return v;
  }
  return {
    connect(x) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: p,
        updateSelectionMenu: k,
        updateSidePanel: h
      } = x);
    },
    computeStickerVFov: G,
    buildCanonicalCutoutStickerState: oe,
    buildCanonicalSelectedStickerState: I,
    reconcileExternalStickerFromInputs: ie,
    collectExternalStickersForClearAll: te,
    syncPortHandoff: ye,
    storedEditorState: de,
    portHandoffLanes: we,
    revertPortHandoffLane: ue
  };
}
function no(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function U2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function B2({
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
  var L, oe;
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
    historyEntries: Array.from({ length: 8 }, (I, J) => ({ index: J, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((L = t.find((I) => i(e.paintColor, I.color))) == null ? void 0 : L.id) || "", f = !u, p = o(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((oe = e.customPaintColor) == null ? void 0 : oe.a) ?? 1))) * 100), h = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), m = e.brushSizes[h] ?? 10, b = l(), G = Array.from({ length: 8 }, (I, J) => e.customPaintHistory[J] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(p.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: G.map((I, J) => ({
      index: J,
      color: I ? { cssColor: n(I, 1) } : null
    })),
    sizeValue: m,
    sizeText: String(m),
    sizeFill: `${Math.max(0, Math.min(100, (m - 1) / 119 * 100))}%`,
    sizeDisabled: b,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Y2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const q2 = {
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
function X2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = q2[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Hc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function J2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? Ke.eye : Ke.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function C0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function Z2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function Q2(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const So = "erp", eA = ["1:1", "4:3", "3:2", "16:9"];
function I0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...eA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: So, label: Number(r) === 180 ? "180°" : "360°", active: e === So }] : []
  ];
}
const tA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" };
function nA(e, { enabled: t = !0 } = {}) {
  return e ? { lanes: e.map(({ name: r, overridden: n }) => ({ name: r, label: tA[r], disabled: !t || !n })) } : null;
}
function E0(e) {
  return `Upstream · ${e}`;
}
function rA({ layer: e, editable: t, visible: r, locked: n, readOnly: i }) {
  const o = e !== null && !t;
  return {
    origin: e === null ? "" : `${E0(e)}${o ? " · inherited only" : ""}`,
    note: o ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    visible: r,
    locked: n,
    disabled: e === null || i || !t
  };
}
function iA({
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
  handoff: d = null,
  upstream: u = null
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
    rows: X2(s),
    notes: a,
    handoff: d,
    upstream: u,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function oA({
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
  iconSet: p,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: k = !1,
  coverage: h = 360,
  // Upstream elements in the selection (ADR 0030): null, or { lockable }. Only Lock acts on them, while their
  // layer keeps overrides; the other buttons stay in place, disabled.
  upstream: m = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let b = [];
  if (r.length > 1)
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a }
    ], d(t) || (b.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), b.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), d(t)) {
      const G = f(), L = u(t);
      b.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: G ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !G
      }), b.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: L ? "Show" : "Hide",
        tip: L ? "Show input image" : "Hide input image",
        icon: L ? p.eye : p.eye_dashed
      });
    }
    b.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed }), d(t) || b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a });
  } else
    b = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!c,
        choices: I0(l, { erp: k, coverage: h })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === So }
    ], k ? b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : b.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    );
  return m && (b = b.map((G) => ({ ...G, disabled: G.key === "toggle-lock" ? !m.lockable : !0 }))), O0(i.corners, b);
}
const Dp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function sA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Dp.filter((s) => s.cameraTip) : Dp;
  return O0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ke.delete }] : []
  ]);
}
function aA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = d + 18, k = c - 18 - r;
  let h;
  return p <= f ? h = Math.max(p, 14) : k >= 14 ? h = Math.min(k, f) : h = Math.min(Math.max(p, 14), f), { left: u, top: h };
}
function O0(e, t) {
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
const F0 = "painting";
function lA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const cA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function uA(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (h, m, b, G, L, oe, { keyable: I = !0, hideable: J = !0 } = {}) => {
    const T = (B) => (r == null ? void 0 : r.owner) === h && r.lane === B ? r.frames.map((ve) => ve + oe) : [];
    return {
      id: h,
      label: b,
      icon: G,
      clip: L,
      selected: h === n,
      hideable: J,
      visible: m.visible,
      keyable: I,
      open: I && o.has(h),
      keys: T1(m).map((B) => ({ frame: B.frame + oe, full: B.full })),
      selectedFrames: T(null),
      lanes: (I ? Po(m) : []).map((B) => ({
        key: `${h}:${B}`,
        lane: B,
        label: cA[B],
        frames: m[B].keyframes.map((ve) => ve.frame + oe),
        selectedFrames: T(B)
      }))
    };
  }, f = e.stickers.filter((h) => h.placement === "sky").sort((h, m) => m.z_index - h.z_index), p = e.stickers.filter((h) => h.placement === "world"), k = ({ start: h, in: m, duration: b }) => ({ clip: { start: h, end: b === null ? null : h + b }, offset: h - m });
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
      ...l ? [u("camera", e.camera, "Camera", Ke.camera, null, 0, { hideable: c })] : [],
      ...[...f, ...p].map((h) => {
        const { clip: m, offset: b } = k(h.clip);
        return u(h.id, h, Dm(h), Ke.image, m, b);
      }),
      ...lA(e.painting) || !e.painting_visible ? [{
        id: F0,
        label: "Paint",
        icon: Ke.paintbrush_vertical_tool,
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
      ...d || il(e.scene) ? [(() => {
        const { clip: h, offset: m } = k(e.scene.clip);
        return u("scene", e.scene, "Scene", Ke.box, h, m, { keyable: !1 });
      })()] : []
    ]
  };
}
function dA(e, t, r, n) {
  const i = V1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const fA = 4, pA = 0.25, T0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function D0(e) {
  return Object.hasOwn(T0, e);
}
function L0(e, t, r) {
  const { forward: n, right: i } = ji(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function hA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return D0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
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
        const [a, l] = T0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? fA : 1) * (r ? pA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const mA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), gA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function yA(e) {
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
function Lp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function bA(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return mA.has(r) && (r !== "frame" || t) && gA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Lp(s, -89.9, 89.9) && Lp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const vA = 250, SA = 600, _A = 180, wA = 2;
function xA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Jo(e, t, r) {
  return e + (t - e) * r;
}
function kA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(id(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / _A + i / wA);
  return Math.round(Jo(vA, SA, o));
}
function MA(e, t, r) {
  const n = xA(Oe(r, 0, 1));
  return {
    position: e.position.map((i, o) => Jo(i, t.position[o], n)),
    yaw_deg: Gt(e.yaw_deg + id(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Jo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Jo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Jo(e.distance, t.distance, n)
  };
}
function PA(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(id(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function NA(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return PA(e, t) ? null : { from: e, to: t, startTs: r, durationMs: kA(e, t, n), end: i };
}
function AA(e, t) {
  const r = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: MA(e.from, e.to, r), done: !1 };
}
function wl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function CA(e, t, r) {
  const n = wl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function IA(e) {
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
    viewController: p
  } = e;
  let k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye = null;
  function de(K, pe = null) {
    const z = S();
    B(() => {
      i.viewTransition = NA(z, K, performance.now(), { scale: A(), end: pe });
    }), !i.viewTransition && pe && we(pe), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, _e(), J({ localOnly: !0, reason: ft.VIEW });
  }
  function we(K) {
    X(uu({ ...Z(), moved: K.moved }, K.mode, W())), a.backgroundDirty = !0;
  }
  function ue() {
    i.viewTransition && (i.viewTransition = null, _e());
  }
  function V(K, pe) {
    de({ ...S(), yaw_deg: K, pitch_deg: pe });
  }
  function ie() {
    return !f || me() && !G();
  }
  function te() {
    return i.mode === "pano" && x();
  }
  function x() {
    return u && TS({ sceneLinked: l && !!Ul(s).scene, files: T(), stickers: d.stickers });
  }
  function v() {
    return i.spaceMode === "6dof" && te();
  }
  function w() {
    var K, pe, z;
    return Yw((z = (pe = (K = t.ui) == null ? void 0 : K.settings) == null ? void 0 : pe.getSettingValue) == null ? void 0 : z.call(pe, Yg));
  }
  function Z() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function X(K) {
    i.spaceMode = K.mode, i.viewPosition = K.position, i.viewMoved = K.moved;
  }
  function O(K) {
    var z;
    const pe = CA(i.spaceMode, i.viewTransition, K);
    if (pe !== "keep") {
      if (pe === "return") {
        de({ ...S(), position: W(), distance: ((z = y()) == null ? void 0 : z.radius) || ur }, { mode: K, moved: !1 });
        return;
      }
      ue(), X(uu({ ...Z(), position: S().position }, K, W())), a.backgroundDirty = !0, _e(), J({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function S() {
    var z;
    const K = i.viewMoved ? i.viewDistance : ((z = y()) == null ? void 0 : z.radius) || ur, pe = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: K };
    return AS(i.spaceMode, pe, W());
  }
  function W() {
    return me() ? le().position : [0, 0, 0];
  }
  function ne() {
    return r && d.camera !== null;
  }
  function me() {
    return ne() && d.camera.visible;
  }
  function Se() {
    return d.painting_visible !== !1;
  }
  function C(K) {
    return K.visible && ko(K.clip, i.frame);
  }
  function le() {
    return Vl(d.camera, i.frame);
  }
  function y() {
    var pe;
    const K = k();
    return ((pe = K.space ?? K.content) == null ? void 0 : pe.sphere) ?? null;
  }
  function _(K) {
    i.viewPosition = K.position, i.viewYaw = K.yaw_deg, i.viewPitch = K.pitch_deg, i.viewDistance = K.distance, i.viewMoved = !0, a.backgroundDirty = !0, J({ localOnly: !0, reason: ft.VIEW });
  }
  function A() {
    var K;
    return ((K = y()) == null ? void 0 : K.radius) || ur;
  }
  function g() {
    var P;
    const K = k().space, pe = h(), z = i.worldSelectedId || i.selectedId, ae = pe.stickers.findIndex((re) => re.id === z), $ = ae < 0 ? ve(z) : null, U = ae < 0 ? (P = K.upstreamItems.find((re) => {
      var ee;
      return ((ee = re.request) == null ? void 0 : ee.id) === z;
    })) == null ? void 0 : P.request : K.sticker, j = ae < 0 && !Xt($) ? null : {
      sticker: $ ?? pe.stickers[ae],
      value: $ ? Wr($, i.frame) : Os(pe, i.frame).stickers[ae],
      plane: [...K.stickers, ...K.upstreamStickers].find((re) => re.id === z) ?? null,
      item: (U == null ? void 0 : U.id) === z && U.url ? { kind: U.kind, box: o.sceneBox(U.url) } : null
    }, N = b() ? ke() : VS(y(), j);
    if (!N) return;
    const Q = S();
    i.viewDistance = Q.distance, i.viewMoved = !0, de(FS(Q, N, n.width, n.height));
  }
  function D(K) {
    return o.pickSurface(xe(), K.x, K.y, n.width, n.height);
  }
  function R(K, pe) {
    var z;
    return du(K, pe, i.viewMoved ? null : (z = y()) == null ? void 0 : z.center, A());
  }
  function q() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function E(K, pe) {
    const z = performance.now(), ae = { x: K.x, y: K.y, time: z, key: o.contentRevision(), view: q() };
    if (!zm(ye, ae)) {
      const U = D(K);
      ye = { ...ae, cost: performance.now() - z, hit: U };
    }
    const $ = S();
    _(Gm($, R($, ye.hit), pe, A())), ye.view = q(), ye.wheelTime = z;
  }
  function F(K, pe, z) {
    const ae = S();
    i.interaction = K === "orbit" ? { kind: "space_orbit", last: pe, pivot: R(ae, D(pe)) } : { kind: "space_pan", last: pe, depth: $m(ae, A()) }, he(pe), n.setPointerCapture(z);
  }
  function M() {
    return v() || L();
  }
  function H(K) {
    const pe = I.elapsed(K);
    if (!pe || i.viewTransition) return !1;
    const z = I.speed(A()) * pe;
    if (L()) return oe(I.direction(), z);
    if (!v()) return !1;
    const ae = S(), $ = L0(ae, I.direction(), z);
    return $ === ae ? !1 : (i.viewPosition = $.position, i.viewDistance = ae.distance, i.viewMoved = !0, !0);
  }
  function Y() {
    dl(s).view = yA(i);
  }
  function fe() {
    const K = c && !C0({ hasShot: !!m(), erp: G() }).disabled, pe = bA(dl(s).view, { frame: K });
    pe && Object.assign(i, pe);
  }
  function be(K) {
    return K * 0.2;
  }
  function ke() {
    return { center: le().position, radius: be(A()) };
  }
  function ce(K, pe) {
    const { yaw_deg: z, pitch_deg: ae } = Ym(K.position, pe);
    return { ...K, yaw_deg: z, pitch_deg: ae };
  }
  function xe() {
    return _d(S(), n.width, n.height, y());
  }
  return {
    connect(K) {
      ({
        editorViewInput: k,
        editorViewSceneState: h,
        getActiveCutoutShot: m,
        isCameraSelected: b,
        isErpCamera: G,
        isFreeFrameView: L,
        moveFrameByKeys: oe,
        moveKeys: I,
        requestDraw: J,
        sceneFiles: T,
        startAnimation: B,
        stickerById: ve,
        syncFloatingViewButtonState: _e,
        updateCursor: he
      } = K);
    },
    transitionView: de,
    applyViewTransitionEnd: we,
    cancelViewTransition: ue,
    turnViewTo: V,
    cameraPreviewShown: ie,
    isSpaceView: te,
    hasSpaceContent: x,
    isFreeSpaceView: v,
    viewControls: w,
    spaceModeState: Z,
    applySpaceMode: X,
    setSpaceMode: O,
    spaceViewState: S,
    spaceOrigin: W,
    hasCamera: ne,
    cameraShoots: me,
    paintingShown: Se,
    sceneStickerShown: C,
    cutoutCamera: le,
    contentSphere: y,
    setSpaceView: _,
    spaceScale: A,
    frameSpaceContent: g,
    zoomSpaceAt: E,
    startSpaceDrag: F,
    canKeyMove: M,
    stepKeyMove: H,
    saveView: Y,
    restoreView: fe,
    currentSpaceCamera: xe,
    cameraFrustumLength: be,
    cameraSphere: ke,
    lookingAt: ce
  };
}
function EA(e) {
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
  let u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se = { revision: -1, sceneState: null }, C = null;
  function le() {
    return C || (C = A()), C;
  }
  function y() {
    C = null;
  }
  function _() {
    return Se.sceneState;
  }
  function A() {
    const ce = J(), xe = p(), K = { ...a.assets };
    for (const Pe of l ? [] : a.stickers) {
      const Ee = String((Pe == null ? void 0 : Pe.asset_id) || "");
      Ee && !K[Ee] && i.has(Ee) && (K[Ee] = { type: "comfy_image", filename: Ee });
    }
    const pe = l ? a.stickers.map((Pe) => we(Pe) ? { ...Pe, source: { kind: "file", filename: X(Pe) } } : Pe) : a.stickers;
    Se.revision !== s.stateRevision && (Se = { revision: s.stateRevision, sceneState: er({ ...a, stickers: pe, assets: K, painting: null }) }), l && g(Se.sceneState);
    const z = Os(Se.sceneState, r.frame), ae = V ? oe() : null, $ = (Pe) => {
      if (l && !Pe.visible) return null;
      if (V && he(Pe)) return ae;
      const Ee = B(Pe);
      return Ee ? { media: Ee, revision: T(Ee) } : null;
    }, U = ne(), j = [...U.sky, ...tg(Se.sceneState, r.frame, a.stickers, { media: $, paintLayers: xe, evaluated: z })], N = ce && (ce === d || ce === c) ? d.dataset.panoSrc : ce, Q = _e(ce) ? { media: ce, revision: T(ce), coverage: f(), source: N } : null, P = ve(), re = CS(x(), P, v());
    re.mode !== r.spaceMode && m(), u(re);
    const ee = P ? D(Se.sceneState, z, $, U) : null, ge = de() ? { ...ee, ...R(ee) } : null;
    return { background: Q, layers: j, space: ge, content: ee };
  }
  function g(ce) {
    const xe = new Map(a.stickers.map((K) => [K.id, K.clip]));
    ce.scene.clip = { ...a.scene.clip };
    for (const K of ce.stickers) {
      const pe = xe.get(K.id);
      pe && (K.clip = { ...pe });
    }
  }
  function D(ce, xe, K, pe) {
    const z = ie(), ae = wd(z, xe.scene), $ = ae != null && ae.url ? n.sceneBox(ae.url) : null, U = $ && Aa(ae.kind, $), j = Z(), N = Um(j, ce, xe), Q = N != null && N.url ? n.sceneBox(N.url) : null, P = Q ? [{ box: Aa(N.kind, Q), value: N.value }] : [], re = rg(ce, r.frame, a.stickers, { media: K, evaluated: xe });
    for (const { request: ge, value: Pe } of pe.items) {
      const Ee = ge != null && ge.url ? n.sceneBox(ge.url) : null;
      Ee && P.push({ box: Aa(ge.kind, Ee), value: Pe });
    }
    const ee = mu(LS(xe, U, [...re, ...pe.stickers], P));
    return {
      evaluated: xe,
      sceneUrls: z ? z.urls.filter(Boolean) : [],
      scene: ae,
      stickerUrls: Bm(j, ce),
      sticker: N,
      stickers: re,
      upstreamStickers: pe.stickers,
      upstreamItems: pe.items,
      sphere: ee
    };
  }
  function R(ce) {
    var K;
    const xe = ((K = ce.sphere) == null ? void 0 : K.radius) || ur;
    return {
      gizmo: E() ? H() : q(ce.evaluated),
      grid: r.showGrid && !r.fullscreen ? qS(xe) : null,
      lines: h() ? M(xe) : []
    };
  }
  function q(ce) {
    const xe = te(), K = Xt(xe) ? Wr(xe, r.frame) : ce.stickers.find((pe) => pe.id === (xe == null ? void 0 : xe.id));
    return !me(xe) || !(K != null && K.active) ? null : { mode: r.gizmoMode, transform: fu(K) };
  }
  function E() {
    return h() && r.selectedId === gd;
  }
  let F = { revision: -1, span: -1, segments: [] };
  function M(ce) {
    const xe = S();
    (F.revision !== s.stateRevision || F.span !== xe) && (F = { revision: s.stateRevision, span: xe, segments: JS(ZS(a, xe)) });
    const { segments: K } = F, pe = K.length ? [{ segments: K, color: XN }] : [];
    if (!ye()) return pe;
    const z = E() ? v0 : qN;
    return [...pe, { segments: qm(G(), k(ce)), color: z }];
  }
  function H() {
    return !ye() || !E() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: fu({ ...G(), scale: 1 }) };
  }
  function Y() {
    const { background: ce, layers: xe, space: K } = le(), pe = t.width, z = t.height, ae = L({ x: 0, y: 0, w: pe, h: z });
    let $ = !1;
    return !ce && !xe.length && !K ? (n.clear(460551), $ = n.ready) : (n.clear(), $ = !!n.render({
      rect: ae,
      camera: K ? _d(w(), pe, z, K.sphere) : b(),
      background: ce,
      layers: xe,
      space: K
    })), O(), (r.worldSelectedId || E() || ue()) && W(), $;
  }
  function fe(ce) {
    const { content: xe } = le();
    return !xe || !ce.position ? as(ce) : Km(as(ce), ce.position, I(), xe.sphere);
  }
  function be(ce, xe, K, pe = null) {
    const { background: z, layers: ae, content: $ } = le();
    if (!z && !ae.length && !$) return null;
    const U = $ && xe.position ? $ : null;
    return n.render({ rect: ce, camera: fe(xe), background: z, layers: ae, space: U, owner: K, clearColor: pe });
  }
  function ke(ce) {
    return n.clear(460551), !!n.renderUnwrap({ rect: L(ce), ...le() });
  }
  return {
    connect(ce) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: p,
        cameraFrustumLength: k,
        cameraShoots: h,
        cancelViewTransition: m,
        currentViewCamera: b,
        cutoutCamera: G,
        deviceRect: L,
        followPortSticker: oe,
        frameViewDistance: I,
        getConnectedErpImage: J,
        getMediaRevisionToken: T,
        getStickerImage: B,
        hasSpaceContent: ve,
        isDecodedImageReady: _e,
        isExternalSticker: he,
        isFreeSpaceView: ye,
        isSpaceView: de,
        isUploadingSticker: we,
        isWorldMenuShown: ue,
        portVideo: V,
        sceneFiles: ie,
        selectedWorldSticker: te,
        spaceModeState: x,
        spaceOrigin: v,
        spaceViewState: w,
        stickerFiles: Z,
        stickerImageKey: X,
        syncFloatingViewButtonState: O,
        timelineSpanFrames: S,
        updateSelectionMenu: W,
        upstreamViewInput: ne,
        worldStickerEditable: me
      } = ce);
    },
    editorViewInput: le,
    endEditorViewFrame: y,
    editorViewSceneState: _,
    isCameraSelected: E,
    renderEditorView: Y,
    shotViewCamera: fe,
    drawEditorViewShot: be,
    renderEditorViewUnwrap: ke
  };
}
function OA(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map();
  const k = /* @__PURE__ */ new Map(), h = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function m(x) {
    if (!x) return null;
    let v = k.get(x);
    return v || (v = new Image(), v.onload = h, v.onerror = h, v.src = x, k.set(x, v)), v;
  }
  function b({ sceneState: x, ui: v }) {
    return [
      ...x.stickers.filter((w) => w.source.kind !== "port").map((w) => n(sl(w.source))),
      i(Sr(v, Fi)[0] || null),
      ...x.painting.raster_objects.map((w) => w.rasterDataUrl)
    ].filter(Boolean);
  }
  function G() {
    return a && (qf(o, "scene") === k0 || !!L());
  }
  function L() {
    const x = a && Kt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, v = Array.isArray(x) ? x : null;
    if (f.list !== v) {
      f.entries.forEach(ie), f = { list: v, entries: v ? _2(v).map((Z) => ({ layer: Z })) : [], fps: null };
      const w = new Set(f.entries.flatMap((Z) => b(Z.layer)));
      for (const Z of [...k.keys()]) w.has(Z) || k.delete(Z);
    }
    return v && f.fps !== s.timeline.fps && oe(), v && f.entries;
  }
  function oe() {
    if (!f.list) return;
    const x = N2(f.entries.map((v) => v.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((v, w) => {
      v.working = x[w];
    }), f.fps = s.timeline.fps, p = Tp(x);
  }
  function I() {
    if (!f.list) return;
    const x = f.entries.map((w) => w.working), v = C2(s.upstream, f.entries.map((w) => w.layer), x, p, f.fps);
    v !== s.upstream && (s.upstream = v, p = Tp(x));
  }
  function J() {
    return (L() ?? []).flatMap((x) => x.working.sceneState.stickers);
  }
  function T(x) {
    const v = f.entries.find((w) => {
      var Z;
      return ((Z = w.working) == null ? void 0 : Z.key) === x.origin.layer;
    });
    return v ? m(i(Sr(v.layer.ui, Fi)[0] || null)) : null;
  }
  function B() {
    if (!L()) return 0;
    const [x] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(x) > 0 ? Number(x) : 0;
  }
  function ve() {
    if (!a) return "";
    const x = L();
    if (k2(qf(o, "scene"), x)) return "Run the workflow to show the upstream scene.";
    if (!x) return "";
    const v = t.uiList(o, "pano_sticker_warnings");
    return String(v.find((w) => String(w).startsWith(x2)) ?? "");
  }
  function _e(x, v, w) {
    const { ui: Z } = x.layer, X = s.timeline.fps, O = Sr(Z, b0)[0], S = Sr(Z, y0).map(i).filter(Boolean), W = i(Sr(Z, g0)[0] || null), ne = O && typeof O == "object" ? S.length ? { frames: S, meta: O } : W ? { src: W, meta: O } : null : null, me = m(i(Sr(Z, Fi)[0] || null)), Se = ne ? Nd(v.clip, w, X, ne.meta) : null;
    let C = me;
    if (ne != null && ne.frames)
      x.frames || (x.frames = Cd({
        createImage: (le, y) => {
          const _ = new Image();
          return _.onload = y, _.onerror = y, _.src = le, _;
        },
        onLoad: h
      })), C = x.frames.picture(ne.frames, Se, ne.meta, me);
    else if (ne != null && ne.src) {
      const le = he(x);
      le.follow({ src: ne.src, time: Se, playing: d.advancing, fps: X }), C = le.picture(x.still, me);
    }
    return C ? { media: C, revision: c(C), source: Ad(ne, me) } : null;
  }
  function he(x) {
    if (x.follower) return x.follower;
    const v = Es(document, "editor.upstream-port-video");
    v.playsInline = !0, v.preload = "auto";
    const w = on({ label: "editor.upstream-port-still" });
    return w.__panoFrameIdx = 0, x.video = v, x.still = w, x.follower = Td({
      video: v,
      onCapture: () => {
        var O;
        const Z = Number(v.videoWidth || 0), X = Number(v.videoHeight || 0);
        Z < 1 || X < 1 || (w.width = Z, w.height = X, (O = w.getContext("2d")) == null || O.drawImage(v, 0, 0), w.__panoFrameIdx += 1, h());
      },
      onChange: h
    }), x.follower;
  }
  function ye(x, v, w) {
    if (v.source.kind === "port") return _e(x, v, w);
    const Z = m(n(sl(v.source)));
    return Z ? { media: Z, revision: c(Z) } : null;
  }
  function de(x) {
    var me;
    const { sceneState: v } = x.working, { painting: w } = v, Z = w.paint.strokes.length + w.mask.strokes.length;
    if (!v.painting_visible || !Z && !w.raster_objects.length) return [];
    const X = l(), O = `${X.width}x${X.height}`;
    x.paintSize !== O && (ue(x), x.paintSize = O, x.paintEngine = Z ? Ll(X) : null, (me = x.paintEngine) == null || me.rebuildCommitted({ painting: w }), x.rasters = /* @__PURE__ */ new Map());
    const S = x.paintEngine, W = (S == null ? void 0 : S.getMaskDisplayCanvas()) || null, ne = [];
    for (const Se of M2(v, S ? S.getAllGroupIds() : [], !!W)) {
      const C = Se.kind === "group" ? S == null ? void 0 : S.getGroupDisplayCanvas(Se.id) : Se.kind === "mask" ? W : we(x, Se.item, X);
      C && ne.push({ id: `${Se.kind}:${Se.id}`, media: C, revision: O, opacity: 1, zIndex: Se.zIndex });
    }
    return ne;
  }
  function we(x, v, { width: w, height: Z }) {
    if (x.rasters.has(v.id)) return x.rasters.get(v.id);
    const X = m(v.rasterDataUrl);
    if (!X.complete || !X.naturalWidth) return null;
    const O = on({ label: "editor.upstream-raster-erp", width: w, height: Z }), S = O.getContext("2d");
    return S ? (S0(S, X, v, w, Z), x.rasters.set(v.id, O), O) : null;
  }
  function ue(x) {
    var v;
    (v = x.rasters) == null || v.forEach((w) => hs(w)), x.rasters = null, x.paintEngine = null, x.paintSize = null;
  }
  function V() {
    const x = L() ?? [], v = { sky: [], stickers: [], items: [] }, w = r.frame;
    return x.forEach((Z) => {
      const X = I2(Z.working, Z.working.key, w, {
        media: (O) => ye(Z, O, w),
        paintLayers: de(Z),
        source: i
      });
      v.sky.push(...X.sky), v.stickers.push(...X.stickers), v.items.push(...X.items);
    }), v;
  }
  function ie(x) {
    var v;
    (v = x.follower) == null || v.dispose(), x.still && hs(x.still), ue(x);
  }
  function te() {
    f.entries.forEach(ie), f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map(), k.clear();
  }
  return {
    connect(x) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = x);
    },
    upstreamEntries: L,
    upstreamLinked: G,
    upstreamNotice: ve,
    upstreamSpanFrames: B,
    upstreamViewInput: V,
    rebuildUpstreamWorking: oe,
    syncUpstreamEdits: I,
    upstreamStickers: J,
    upstreamStickerImage: T,
    disposeUpstream: te
  };
}
const Lu = "camera_preview";
function FA(e) {
  return e === Lu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function TA(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function R0(e, t = !1) {
  const r = Oe(Vi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function DA(e) {
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
  let d, u, f, p, k = null, h = !1, m = !1;
  function b() {
    h && (h = !1, o.releaseSplats(Lu));
  }
  function G() {
    k = null, m = !1, b();
  }
  function L(ve) {
    if (!n || !ve) return !1;
    const _e = n.closest(".pano-camera-preview");
    if (!_e) return !1;
    const he = Math.round(Number(_e.clientWidth || n.clientWidth || 0)), ye = Math.round(Number(_e.clientHeight || n.clientHeight || 0));
    return Math.abs(he - Number(ve.width || 0)) <= 1 && Math.abs(ye - Number(ve.height || 0)) <= 1;
  }
  function oe(ve, _e) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, G();
      return;
    }
    const he = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !he || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = he ? "Preview unavailable" : "Add Frame to preview", G();
      return;
    }
    const ye = R0(he, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ye.width, c.cameraPreview.height = ye.height, m) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, b();
      return;
    }
    const de = window.devicePixelRatio || 1, we = Math.max(1, ye.width * de), ue = Math.max(1, ye.height * de), V = Math.min(1, t.width / we, t.height / ue), ie = { width: Math.max(1, Math.floor(we * V)), height: Math.max(1, Math.floor(ue * V)) }, te = !k || k.width !== ie.width || k.height !== ie.height || TA(_e);
    if (ve && te) {
      h = !0;
      const v = u({ x: 0, y: t.height - ie.height, w: ie.width, h: ie.height }, he, Lu);
      k = v ? ie : null, v && B(v);
    }
    if (!k) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const x = L(ye);
    c.cameraPreview.ready = !0, c.cameraPreview.label = x ? "" : "Loading preview", c.cameraPreview.settled = x && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function I() {
    k = null, m = !1;
  }
  let J = 0, T = !1;
  function B(ve) {
    const _e = ++J;
    createImageBitmap(ve.canvas, ve.x, ve.y, ve.width, ve.height).then((he) => {
      var ye;
      if (_e !== J || !s.running) {
        he.close();
        return;
      }
      (ye = r.getContext("bitmaprenderer")) == null || ye.transferFromImageBitmap(he);
    }).catch((he) => {
      _e !== J || !s.running || (m = !0, k = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !T && (T = !0, console.error("[PanoramaStickers] camera preview frame failed", he)));
    });
  }
  return {
    connect(ve) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: p
      } = ve);
    },
    drawCutoutOutputPreview: oe,
    forgetCameraPreviewFrame: I
  };
}
function LA(e) {
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
  let u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se, C, le, y;
  function _(K) {
    const pe = r.width, z = r.height, ae = B();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, pe, z), W(), K && (a.backgroundDirty = !Se(ae)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let U = 0; U <= 16; U += 1) {
        const j = ae.x + ae.w * U / 16;
        n.beginPath(), n.moveTo(j, ae.y), n.lineTo(j, ae.y + ae.h), n.stroke();
      }
      for (let U = 0; U <= 8; U += 1) {
        const j = ae.y + ae.h * U / 8;
        n.beginPath(), n.moveTo(ae.x, j), n.lineTo(ae.x + ae.w, j), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(ae.x, ae.y + ae.h / 2), n.lineTo(ae.x + ae.w, ae.y + ae.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const $ = ae.y + ae.h * 0.57;
      n.fillText("Left", ae.x + ae.w * 0.25, $), n.fillText("Front", ae.x + ae.w * 0.5, $), n.fillText("Right", ae.x + ae.w * 0.75, $), n.fillText("Back", ae.x + 38, $), n.fillText("Back", ae.x + ae.w - 38, $);
    }
  }
  function A(K, pe, z = 1) {
    let ae = !1;
    n.strokeStyle = pe, n.lineWidth = z, n.beginPath();
    for (const $ of K) {
      const U = Z($);
      if (!U) {
        ae = !1;
        continue;
      }
      ae ? n.lineTo(U.x, U.y) : (n.moveTo(U.x, U.y), ae = !0);
    }
    n.stroke();
  }
  function g(K) {
    const pe = r.width, z = r.height;
    if (n.clearRect(0, 0, pe, z), W(), K && (a.backgroundDirty = !me()), i.showGrid && !i.fullscreen && h().space)
      D();
    else if (i.showGrid && !i.fullscreen) {
      for (let $ = -180; $ <= 180; $ += 15) {
        const U = [];
        for (let j = -89; j <= 89; j += 4) U.push(Tn($, j));
        A(U, "#3f3f46", $ % 90 === 0 ? 1.3 : 1);
      }
      for (let $ = -75; $ <= 75; $ += 15) {
        const U = [];
        for (let j = -180; j <= 180; j += 4) U.push(Tn(j, $));
        A(U, $ === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", $ === 0 ? 1.5 : 1);
      }
      const ae = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", ae.forEach(($) => {
        const U = Z($.dir);
        U && n.fillText($.name, U.x, U.y + 24);
      });
    }
  }
  function D() {
    const K = _d(y(), r.width, r.height, f()), pe = Ss(K, [0, 0, 0], r.width, r.height);
    pe && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", pe.x, pe.y - 12));
  }
  function R(K, pe) {
    const z = w(K), ae = Tn(Number(z.yaw_deg || 0), Number(z.pitch_deg || 0)), $ = i.mode === "unwrap" ? X(ae) : null, U = $ ? $.x : null, j = i.mode === "pano" ? 28 : 20, N = [
      C(K, 0, j, U),
      C(K, 1, j, U),
      C(K, 2, j, U),
      C(K, 3, j, U)
    ];
    Ld(n, N, { selected: pe });
  }
  function q(K, pe = []) {
    if (!(!K || !Array.isArray(pe) || pe.length < 4)) {
      K.beginPath(), K.moveTo(pe[0].x, pe[0].y);
      for (let z = 1; z < 4; z += 1) K.lineTo(pe[z].x, pe[z].y);
      K.closePath();
    }
  }
  function E(K, pe, z) {
    const ae = Array.isArray(K == null ? void 0 : K.corners) ? K.corners : [];
    if (ae.length < 4) return;
    const $ = Oe(Number((K == null ? void 0 : K.visibilityAlpha) ?? 1), 0, 1);
    if ($ <= 0.01) return;
    const U = n.globalAlpha;
    n.globalAlpha = U * $;
    const j = z ? "rgba(255, 116, 116, 0.96)" : pe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", N = z ? "rgba(255, 89, 89, 0.08)" : pe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", Q = pe ? 3.2 : 2.6;
    q(n, ae), n.fillStyle = N, n.fill(), n.strokeStyle = j, n.lineWidth = Q, n.stroke(), n.save(), n.strokeStyle = j, n.lineWidth = pe ? 3.2 : 2.6, n.lineCap = "round";
    const P = Array.isArray(K == null ? void 0 : K.edgeMidpoints) && K.edgeMidpoints.length >= 4 ? K.edgeMidpoints : [
      { edge: "top", x: (ae[0].x + ae[1].x) * 0.5, y: (ae[0].y + ae[1].y) * 0.5 },
      { edge: "right", x: (ae[1].x + ae[2].x) * 0.5, y: (ae[1].y + ae[2].y) * 0.5 },
      { edge: "bottom", x: (ae[2].x + ae[3].x) * 0.5, y: (ae[2].y + ae[3].y) * 0.5 },
      { edge: "left", x: (ae[3].x + ae[0].x) * 0.5, y: (ae[3].y + ae[0].y) * 0.5 }
    ], re = { top: "bottom", right: "left", bottom: "top", left: "right" }, ee = pe ? 12 : 9;
    P.forEach((ge) => {
      const Ee = P.find((Ce) => (Ce == null ? void 0 : Ce.edge) === re[ge == null ? void 0 : ge.edge]) || {
        x: (ae[0].x + ae[1].x + ae[2].x + ae[3].x) * 0.25,
        y: (ae[0].y + ae[1].y + ae[2].y + ae[3].y) * 0.25
      }, Re = Ee.x - ge.x, We = Ee.y - ge.y, Ge = Math.hypot(Re, We) || 1;
      n.beginPath(), n.moveTo(ge.x, ge.y), n.lineTo(ge.x + Re / Ge * ee, ge.y + We / Ge * ee), n.stroke();
    }), n.restore(), n.globalAlpha = U;
  }
  function F(K, pe, z, ae) {
    const $ = Oe(Number((pe == null ? void 0 : pe.visibilityAlpha) ?? 1), 0, 1);
    if ($ <= 0.01) return;
    if (ie(K)) {
      E(pe, z, ae);
      return;
    }
    if (te(K)) {
      const j = n.globalAlpha;
      n.globalAlpha = j * T(K) * $, i.mode === "frame" ? (n.strokeStyle = z ? "rgba(250, 250, 250, 0.9)" : ae ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = z ? 2 : 1, q(n, pe.corners), n.stroke()) : R(K, z), n.globalAlpha = j;
      return;
    }
    const U = n.globalAlpha;
    n.globalAlpha = U * $, n.fillStyle = z ? "rgba(0, 112, 243, 0.24)" : ae ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", q(n, pe.corners), n.fill(), n.strokeStyle = z ? "rgba(255, 255, 255, 1)" : ae ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = z ? 2.8 : 1.9, q(n, pe.corners), n.stroke(), n.globalAlpha = U;
  }
  function M(K, pe, z) {
    if (te(K)) {
      Ug(n, pe, { accent: z });
      return;
    }
    const ae = !(ie(K) && _e());
    n.fillStyle = z, ae && pe.corners.forEach(($) => {
      n.beginPath(), n.arc($.x, $.y, 6.5, 0, Math.PI * 2), n.fill();
    }), ae && ie(K) && (n.strokeStyle = z, n.lineCap = "round", n.lineWidth = 4, pe.edgeMidpoints.forEach(($) => {
      var ee, ge, Pe, Ee;
      const U = (((ee = $.b) == null ? void 0 : ee.x) ?? $.x) - (((ge = $.a) == null ? void 0 : ge.x) ?? $.x), j = (((Pe = $.b) == null ? void 0 : Pe.y) ?? $.y) - (((Ee = $.a) == null ? void 0 : Ee.y) ?? $.y), N = Math.hypot(U, j) || 1, Q = U / N, P = j / N, re = 10;
      n.beginPath(), n.moveTo($.x - Q * re, $.y - P * re), n.lineTo($.x + Q * re, $.y + P * re), n.stroke();
    }), n.lineCap = "butt"), x(K) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(pe.rotateStemBase.x, pe.rotateStemBase.y), n.lineTo(pe.rotateHandle.x, pe.rotateHandle.y), n.stroke(), n.fillStyle = z, n.beginPath(), n.arc(pe.rotateHandle.x, pe.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function H() {
    var U;
    const K = i.mode === "frame" ? [] : J(), pe = K.length > 1, z = l ? b() : oe(), ae = z.map((j) => `${String((j == null ? void 0 : j.id) || "")}:${ie(j) ? "frame" : Number((j == null ? void 0 : j.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== z || i._sortedItemsCache.orderKey !== ae) && (i._sortedItemsCache = {
      src: z,
      orderKey: ae,
      sorted: [...z]
    });
    const $ = [...K.filter(Xt), ...i._sortedItemsCache.sorted];
    for (const j of $) {
      const N = i.mode !== "frame" && !pe && we(j);
      if (i.mode === "frame" && !N) continue;
      const Q = te(j), P = ie(j), re = de(j);
      if (!Q && !P || V(j) && !le(j)) continue;
      const ee = v(j);
      if (d !== "stickers" && !ee.visible)
        continue;
      const ge = Oe(Number((ee == null ? void 0 : ee.visibilityAlpha) ?? 1), 0, 1);
      if (ge <= 0.01) continue;
      const Pe = P && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Pe, F(j, ee, N, re), N && ee.visible) {
        const Ee = re ? "#ff4d4f" : Q && he(j) ? "#f59e0b" : "#0070f3", Re = n.globalAlpha;
        n.globalAlpha = Re * ge, M(j, ee, Ee), n.globalAlpha = Re;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !m() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const j = i.cutoutPanoFrameVisual, N = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= N, E(j.geom, j.selected, j.locked), j.selected && M(
        j.item,
        j.geom,
        j.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (pe) {
      const j = I(K);
      if (j != null && j.visible) {
        const N = u(K) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(j.corners[0].x, j.corners[0].y);
        for (let Q = 1; Q < j.corners.length; Q += 1) n.lineTo(j.corners[Q].x, j.corners[Q].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = N, j.corners.forEach((Q) => {
          n.beginPath(), n.arc(Q.x, Q.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      K.forEach((j) => {
        if (!x(j) && !ue(j)) return;
        const N = v(j);
        if (!(N != null && N.visible)) return;
        const Q = de(j) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(N.corners[0].x, N.corners[0].y);
        for (let P = 1; P < N.corners.length; P += 1) n.lineTo(N.corners[P].x, N.corners[P].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = Q, N.corners.forEach((P) => {
          n.beginPath(), n.arc(P.x, P.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((U = i.interaction) == null ? void 0 : U.kind) === "marquee_select") {
      const j = ne(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(j.x0, j.y0, j.x1 - j.x0, j.y1 - j.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Y(K) {
    const pe = m(), z = G(pe);
    if (!pe || !z)
      return n.clearRect(0, 0, r.width, r.height), K && o.clear(657930), !1;
    const ae = { x: z.x, y: z.y, w: z.w, h: z.h }, { rect: $, shot: U } = Zm(pe, z, { width: r.width, height: r.height }), j = fe(ae);
    if (n.clearRect(0, 0, r.width, r.height), K) {
      o.clear(657930);
      const N = p($), Q = !!k(N, U, void 0, 657930);
      Q || o.clear(1118481, N), a.backgroundDirty = !Q;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(ae.x, ae.y, ae.w, ae.h, j), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = v0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(ae.x + 1, ae.y + 1, ae.w - 2, ae.h - 2, Math.max(0, j - 1)), n.stroke(), n.restore(), !0;
  }
  function fe(K) {
    const pe = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * pe, Number((K == null ? void 0 : K.w) || 0) * 0.5, Number((K == null ? void 0 : K.h) || 0) * 0.5);
  }
  function be() {
    var Q, P;
    if (((Q = i.interaction) == null ? void 0 : Q.kind) !== "paint_lasso_fill") return;
    const K = i.interaction.stroke, pe = (P = K == null ? void 0 : K.geometry) == null ? void 0 : P.points;
    let z;
    if (i.mode === "frame") {
      const re = m(), ee = L(re);
      z = O(pe, re, ee);
    } else
      z = S(pe);
    if (!Array.isArray(z) || z.length < 3) return;
    const ae = String((K == null ? void 0 : K.layerKind) || "") === "mask", $ = (K == null ? void 0 : K.color) || { r: 1, g: 0.25, b: 0.25 }, U = Math.round(Number($.r || 0) * 255), j = Math.round(Number($.g || 0) * 255), N = Math.round(Number($.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(z[0].x || 0), Number(z[0].y || 0));
    for (let re = 1; re < z.length; re++) n.lineTo(Number(z[re].x || 0), Number(z[re].y || 0));
    n.closePath(), ae ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${U},${j},${N},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function ke() {
    const K = i.frameRollOverlayVisual, pe = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(K != null && K.shot) || pe <= 1e-4) return;
    const z = L(K.shot);
    if (!z) return;
    const ae = { x: z.x + z.w * 0.5, y: z.y + z.h * 0.5 }, $ = Number(K.shot.roll_deg ?? K.shot.rot_deg ?? 0) * Pr, U = Math.hypot(z.w, z.h) * 0.55, j = Math.cos($) * U, N = Math.sin($) * U;
    n.save(), n.globalAlpha *= pe, n.beginPath(), n.rect(z.x, z.y, z.w, z.h), n.clip(), n.translate(ae.x, ae.y), n.rotate($);
    const Q = Math.max(12, Math.min(z.w, z.h) / 6);
    n.beginPath();
    for (let P = -U; P <= U; P += Q)
      n.moveTo(P, -U), n.lineTo(P, U);
    for (let P = -U; P <= U; P += Q)
      n.moveTo(-U, P), n.lineTo(U, P);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(ae.x - j, ae.y - N), n.lineTo(ae.x + j, ae.y + N), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function ce() {
    return !l || !m() || t && ye() || c && !ve() ? 0 : QN;
  }
  function xe() {
    const K = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (K <= 1e-4 || !l || i.mode !== "pano") return;
    const pe = m(), z = pe ? v(pe) : null, ae = Array.isArray(z == null ? void 0 : z.corners) && z.corners.length >= 4 ? z.corners.map((j) => ({ x: Number(j.x || 0), y: Number(j.y || 0) })) : null;
    z != null && z.visible && ae && (i.cutoutPanoDimCorners = ae), pe && (z != null && z.visible) && ae && (i.cutoutPanoFrameVisual = {
      item: pe,
      geom: z,
      selected: we(pe),
      locked: de(pe)
    });
    const $ = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, U = z != null && z.visible ? ae : $ ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${K})`, n.beginPath(), n.rect(0, 0, r.width, r.height), U.length >= 4) {
      n.moveTo(U[0].x, U[0].y);
      for (let j = 1; j < 4; j += 1) n.lineTo(U[j].x, U[j].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(K) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: k,
        editorViewInput: h,
        getActiveCutoutShot: m,
        getCutoutSelectableItemsForDisplay: b,
        getFrameViewLayout: G,
        getFrameViewRect: L,
        getList: oe,
        getMultiSelectionGeom: I,
        getSelectedItems: J,
        getStickerDisplayAlpha: T,
        getUnwrapRect: B,
        isCameraSelected: ve,
        isErpCamera: _e,
        isExternalSticker: he,
        isFreeSpaceView: ye,
        isItemLocked: de,
        isItemSelected: we,
        isRasterObjectItem: ue,
        isSceneSticker: V,
        isShotItem: ie,
        isStickerItem: te,
        isStrokeGroupItem: x,
        objectGeom: v,
        poseOf: w,
        projectDir: Z,
        projectDirUnwrap: X,
        projectErpLassoPointsToFrameRect: O,
        projectLassoPointsToCurrentView: S,
        rebuildPaintEngineIfNeeded: W,
        rectFromPoints: ne,
        renderEditorView: me,
        renderEditorViewUnwrap: Se,
        sampleStickerEdge: C,
        sceneStickerShown: le,
        spaceViewState: y
      } = K);
    },
    drawGridUnwrap: _,
    drawGridPano: g,
    drawObjects: H,
    drawFrameViewBackground: Y,
    drawLassoOutlineOverlay: be,
    drawFrameRollOverlay: ke,
    getCutoutPanoDimTarget: ce,
    drawCutoutPanoPassepartout: xe
  };
}
function RA(e) {
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
    timeline: p,
    type: k,
    uiState: h,
    viewController: m
  } = e;
  let b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me = () => {
  };
  function Se(ce = /* @__PURE__ */ new Set()) {
    _e();
    const xe = l.backgroundDirty;
    d && (x(), G(xe, ce)), i.mode === "frame" ? (l.frameSafeRect = V(), I(xe)) : i.mode === "unwrap" ? T(xe) : J(xe), L(), ve(), X(), B(), oe(), h.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && W(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && h.cameraPreview && (h.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const K = we();
    h.stageStatus = K.status, h.stageStatusDetail = K.detail, h.stageNotice = ne(), K.status === or ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", K.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function C(ce = i.interaction) {
    if (k !== "stickers" || i.mode !== "pano") return !1;
    const xe = String((ce == null ? void 0 : ce.kind) || "");
    return xe === "move" || xe === "scale" || xe === "scale_x" || xe === "scale_y" || xe === "rotate" ? !0 : xe === "move_multi" ? Array.isArray(ce == null ? void 0 : ce.stickerSnapshots) && ce.stickerSnapshots.length > 0 : !1;
  }
  function le() {
    return !!i.interaction || !!p.drag;
  }
  function y() {
    l.nodePreviewPending = !1;
    const ce = Hn(s);
    ce.liveState = f, ce.liveStateVersion += 1, de();
  }
  function _(ce = {}) {
    var j, N, Q, P, re, ee, ge, Pe;
    const xe = ce.reason ?? ft.STATE, K = !!ce.localOnly, pe = ce.externalSync === !0, z = String(ce.cause || ""), ae = String(((j = i.interaction) == null ? void 0 : j.kind) || "");
    (!K || ae === "view" || ae === "pan_frame" || C() || !!i.viewTransition || z === "mode" || z === "frame_view" || z === "cutout_frame") && (l.backgroundDirty = !0), K && ue() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!K || z === "selection" || z === "mode" || z === "cutout_frame") && (O(), S()), le() ? l.nodePreviewPending = !0 : y(), pe && ((Q = (N = bt(s).dom) == null ? void 0 : N.requestDraw) == null || Q.call(N), (P = s.setDirtyCanvas) == null || P.call(s, !0, !1)), pe && !K && ((ee = (re = s.graph) == null ? void 0 : re.setDirtyCanvas) == null || ee.call(re, !0, !0), (Pe = (ge = t == null ? void 0 : t.canvas) == null ? void 0 : ge.setDirty) == null || Pe.call(ge, !0, !0)), c.requestDraw(xe);
  }
  function A() {
    const ce = n.getBoundingClientRect(), xe = Math.max(2, Math.round(ce.width)), K = Math.max(2, Math.round(ce.height)), pe = window.devicePixelRatio || 1, z = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== xe || n.height !== K) && (n.width = xe, n.height = K);
    const ae = QS(ce.width || xe, ce.height || K, pe, window.innerWidth || ce.width, window.innerHeight || ce.height);
    return o.resize(ae.width, ae.height), [n.width, n.height, r.width, r.height].join("x") === z ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && g(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function g(ce) {
    ce(), c.wake();
  }
  function D() {
    return !!i.viewTransition || ie.held || !!m.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || le();
  }
  function R(ce = performance.now(), xe = /* @__PURE__ */ new Set()) {
    var $;
    l.nodePreviewPending && !le() && y(), xe.forEach((U) => l.reasons.add(U)), xe.size && (l.dirty = !0), [...xe].some((U) => U !== ft.OVERLAY) && (l.backgroundDirty = !0), w(), l.lastTickTs > 0 ? Math.max(1e-3, (ce - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ce;
    const K = i.mode === "frame" && (($ = i.interaction) == null ? void 0 : $.kind) === "roll_frame" ? i.interaction : null;
    K != null && K.shot && (i.frameRollOverlayVisual = { shot: K.shot });
    const pe = K ? 1 : 0;
    if (Math.abs(pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = pe, i.frameRollOverlayStartTs = ce), Math.abs(Number(i.frameRollOverlayAlpha || 0) - pe) > 1e-6) {
      const U = Oe(
        (ce - Number(i.frameRollOverlayStartTs || ce)) / e2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Yn(
        Number(i.frameRollOverlayFrom || 0),
        pe,
        Vc(U)
      ), U >= 1 && (i.frameRollOverlayAlpha = pe, pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const z = ye();
    if (Math.abs(z - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = z, i.cutoutPanoDimStartTs = ce), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - z) > 1e-6) {
      const U = Oe(
        (ce - Number(i.cutoutPanoDimStartTs || ce)) / Ip,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Yn(
        Number(i.cutoutPanoDimFrom || 0),
        z,
        Vc(U)
      ), U >= 1 && (i.cutoutPanoDimAlpha = z), U >= 1 && z === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ae = d && he() ? 1 : 0;
    if (Math.abs(ae - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ae, i.cutoutPanoFrameStartTs = ce), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ae) > 1e-6) {
      const U = Oe(
        (ce - Number(i.cutoutPanoFrameStartTs || ce)) / Ip,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Yn(
        Number(i.cutoutPanoFrameFrom || 0),
        ae,
        Vc(U)
      ), U >= 1 && (i.cutoutPanoFrameAlpha = ae, ae === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const U = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), j = Oe((ce - Number(i.outputPreviewAnimStartTs || 0)) / U, 0, 1), Q = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? r2(j) : o2(j);
      i.outputPreviewAnim = Yn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, Q), l.dirty = !0, j >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: U, done: j } = AA(i.viewTransition, ce);
      if (i.viewPosition = U.position, i.viewYaw = U.yaw_deg, i.viewPitch = U.pitch_deg, i.viewFov = U.hFOV_deg, i.viewDistance = U.distance, j) {
        const { end: N } = i.viewTransition;
        i.viewTransition = null, N && b(N), Z();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (v(ce) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, m.stepInertia(ce) && (i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const U = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), Se(U);
    }
  }
  function q(ce) {
    try {
      ce();
    } catch (xe) {
      const K = String((xe == null ? void 0 : xe.stack) || (xe == null ? void 0 : xe.message) || xe || "unknown editor frame error");
      l.tickErrorSignature !== K && (l.tickErrorSignature = K, console.error("[PanoramaStickers] editor frame failed", xe)), h.stageStatus = qn, h.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function E(ce = performance.now(), xe = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const K = gv();
    q(() => R(ce, xe)), yv(K);
  }
  function F() {
    !l.running || !A() || q(() => {
      l.dirty = !1, Se(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const M = new ResizeObserver(F);
  let H = null;
  function Y() {
    H == null || H.removeEventListener("change", fe), H = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), H.addEventListener("change", fe);
  }
  function fe() {
    Y(), F();
  }
  function be() {
    me = mv("editor", () => {
      var ce;
      return {
        type: k,
        readOnly: a,
        mode: i.mode,
        interaction: ((ce = i.interaction) == null ? void 0 : ce.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!te.playing
      };
    });
  }
  function ke() {
    me(), l.running = !1, c.stop(), M.disconnect(), H.removeEventListener("change", fe);
  }
  return {
    connect(ce) {
      ({
        applyViewTransitionEnd: b,
        drawCutoutOutputPreview: G,
        drawCutoutPanoPassepartout: L,
        drawFrameRollOverlay: oe,
        drawFrameViewBackground: I,
        drawGridPano: J,
        drawGridUnwrap: T,
        drawLassoOutlineOverlay: B,
        drawObjects: ve,
        endEditorViewFrame: _e,
        getActiveCutoutShot: he,
        getCutoutPanoDimTarget: ye,
        getSharedLivePaintSurface: de,
        getStageImageStatus: we,
        isPaintCompositeInteraction: ue,
        measureFrameSafeRect: V,
        moveKeys: ie,
        playback: te,
        rebuildPaintEngineIfNeeded: x,
        stepKeyMove: v,
        syncCutoutShot: w,
        syncFloatingViewButtonState: Z,
        syncFrameRollKnob: X,
        syncLookAtFrameButtonState: O,
        syncViewToggleState: S,
        updateSelectionMenu: W,
        upstreamNotice: ne
      } = ce);
    },
    requestDraw: _,
    syncCanvasSize: A,
    startAnimation: g,
    editorAnimating: D,
    tick: E,
    stageResizeObserver: M,
    watchPixelRatio: Y,
    sampleEditorDiagnostics: be,
    stopRenderLoop: ke
  };
}
function VA(e) {
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
    state: p,
    studio: k,
    type: h,
    uiState: m
  } = e;
  let b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se, C, le, y, _, A = 0;
  function g() {
    m.toolButtons.forEach((ce) => {
      const xe = ce.attr === "data-tool-mode", K = ce.attr === "data-paint-tool", pe = ce.attr === "data-mask-tool";
      ce.active = xe ? ce.value === r.primaryTool : K ? ce.key === r.paintTool : pe ? ce.key === r.maskTool : !1, ce.pressed = ce.active ? "true" : ce.pressed == null ? null : "false";
    });
  }
  function D() {
    if (k && no(m.toolButtons, "value", "add-camera", { disabled: de() }), h !== "cutout") return;
    const ce = L();
    no(m.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ce ? "Look At Frame" : "Add Frame",
      tip: ce ? "Look at frame" : "Add frame",
      icon: ce ? Ke.camera : Ke.plus_circle
    });
  }
  function R() {
    const ce = J2({
      spaceView: Z(),
      spaceMode: wl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    m.space && Object.assign(m.space, ce.space);
    for (const [xe, K] of Object.entries(ce.buttons)) no(m.floatingButtons, "action", xe, K);
  }
  function q() {
    var K;
    const ce = C0({ hasShot: !!L(), erp: V(), hidden: de() && !G(), studio: k });
    r.mode === "frame" && ce.disabled && (k ? O(L()) : r.mode = "pano"), r.outputPreviewRect = null, m.viewButtons.forEach((pe) => {
      const z = pe.key === r.mode;
      pe.pressed = z ? "true" : "false", pe.visible = !(pe.key === "frame" && !f), pe.key === "frame" ? Object.assign(pe, ce) : pe.disabled = !1;
    });
    const xe = f && r.mode === "frame" ? L() : null;
    m.frameRail.visible = !!xe, m.frameRail.disabled = c || (xe == null ? void 0 : xe.locked) === !0, m.frameRollKnob.visible = !!xe && !c && xe.locked !== !0, m.frameRollKnob.disabled = c || (xe == null ? void 0 : xe.locked) === !0, m.frameRollKnob.rollDeg = Number((xe == null ? void 0 : xe.roll_deg) ?? (xe == null ? void 0 : xe.rot_deg) ?? 0), m.frameRollKnob.displayValue = po(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((K = r.interaction) == null ? void 0 : K.kind) === "roll_frame", m.frameRollKnob.armed = !!xe && r.altModifier === !0, m.frameRail.rollKnob = m.frameRollKnob, m.frameRail.aspectLabel = xe ? Vr(xe) : "", m.frameRail.aspectChoices = I0(xe ? String(Vr(xe)) : null, { erp: k, coverage: p.coverage }), xe || (m.frameRail.aspectOpen = !1), m.outputPreviewToggle.visible = h === "cutout" && r.mode !== "frame" && !!L(), f && m.cameraPreview && (m.cameraPreview.visible = r.mode !== "frame" && b(), m.cameraPreview.expanded = !!r.outputPreviewExpanded, m.cameraPreview.settled = m.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), R(), x() ? y(r.pointerPos) : me(r.mode === "pano" ? "grab" : "default");
  }
  function E() {
    var xe;
    const ce = r.mode === "frame" ? L() : null;
    m.frameRollKnob.visible = !!ce && !c && ce.locked !== !0, m.frameRollKnob.rollDeg = Number((ce == null ? void 0 : ce.roll_deg) ?? (ce == null ? void 0 : ce.rot_deg) ?? 0), m.frameRollKnob.displayValue = po(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((xe = r.interaction) == null ? void 0 : xe.kind) === "roll_frame", m.frameRollKnob.armed = !!ce && r.altModifier === !0;
  }
  function F() {
    g();
    const ce = B2({
      editor: r,
      swatches: ql,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: vr,
      colorsApproximatelyEqual: _l,
      rgb01ToHsv: Du,
      hsv01ToRgb: Tu,
      getBrushPresetIdForTool: oe,
      isActiveLassoTool: ue
    });
    if (Object.assign(m.paintDock, ce), le(), !ce.visible) {
      i && (i.hidden = !0);
      return;
    }
    A && (clearTimeout(A), A = 0), o && (!ce.colorEnabled && i && !i.hidden && (A = window.setTimeout(() => {
      i.hidden = !0, m.paintDock.colorPopOpen = !1, A = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ce.pickerHueColor), i.style.setProperty("--picker-sat", ce.pickerSat), i.style.setProperty("--picker-val", ce.pickerVal), i.style.setProperty("--picker-hue", ce.pickerHue)), s && (s.style.left = ce.pickerSvLeft, s.style.top = ce.pickerSvTop), a && (a.style.left = ce.pickerHueLeft));
  }
  function M() {
    const ce = W(f && r.mode === "frame" ? L() : B());
    ce && (r.panelLastValues = {
      yaw_deg: Number(ce.yaw_deg || 0),
      pitch_deg: Number(ce.pitch_deg || 0),
      hFOV_deg: Number(ce.hFOV_deg || (h === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ce.vFOV_deg || (h === "stickers" ? 30 : 60)),
      rot_deg: Number(ce.rot_deg || 0),
      roll_deg: Number(ce.roll_deg || 0),
      aspect_id: Vr(ce)
    }, H());
  }
  function H() {
    Se(), C(), fe();
  }
  function Y() {
    const ce = f && r.mode === "frame" ? L() : null;
    return [...ve(), ne(), ce].some((xe) => v(xe) ? il(xe) : w(xe) && de() && il(p.camera));
  }
  function fe() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const ce = U2(p.ui_settings);
    if (l) {
      m.sidePanel = Y2({
        coverage: p.coverage,
        uiSettings: ce,
        normalizeCoverageValue: Ln
      });
      return;
    }
    const xe = B(), K = f && r.mode === "frame" ? L() : null, pe = K || xe, z = K ? [K] : ve(), ae = K ? "shot" : _e();
    if (z.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), pe && ae !== "stroke") {
      const Re = W(pe);
      r.panelLastValues = {
        yaw_deg: Number(Re.yaw_deg || 0),
        pitch_deg: Number(Re.pitch_deg || 0),
        hFOV_deg: Number(Re.hFOV_deg || (ae === "image" ? 30 : 90)),
        vFOV_deg: Number(Re.vFOV_deg || (ae === "image" ? 30 : 60)),
        rot_deg: Number(Re.rot_deg || 0),
        roll_deg: Number(Re.roll_deg || 0),
        aspect_id: Vr(Re)
      }, v(pe) && (r.panelLastValues.opacity = Wr(pe, r.frame).opacity * 100);
    }
    const $ = r.panelLastValues || (h === "stickers" || ae === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), U = ae === "stroke" ? null : pe, j = ne(), N = t && (ae === "shot" || ae === "frame") && we(), Q = j ? pS(j, r.frame) : N ? { ...U, ...uS(p.camera, r.frame), vFOV_deg: U.vFOV_deg } : v(U) ? r.panelLastValues : U || $, P = j ? _(j) : !!U && !te(U);
    r.panelWasEnabled = P, D();
    let re = null;
    if (K) {
      const Re = ye({ item: K, kind: "shot", label: "Frame" });
      re = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Re.label,
        currentIcon: Re.icon || null,
        items: [{
          id: String(K.id || ""),
          label: Re.label,
          icon: Re.icon || null,
          active: !0
        }]
      };
    } else if (h === "stickers" || h === "cutout") {
      const Re = [{
        id: "",
        label: h === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (h === "stickers") {
        const Ce = L();
        Ce && Re.push({ id: Ce.id, label: "Camera", icon: he("frame"), item: Ce, kind: "frame" }), T().forEach((ze, se) => {
          var je, He;
          if (!ze || v(ze) && !ze.visible) return;
          const Ie = u ? be(ze) : ie(ze) ? String(ze.id || Ud) : String(((He = (je = p.assets) == null ? void 0 : je[ze.asset_id]) == null ? void 0 : He.name) || ze.asset_id || ze.id), Ae = `${se + 1}. ${Ie}${ie(ze) && X(ze) ? " (hidden)" : ""}`, Fe = ye({ item: ze, label: Ae, kind: "image" });
          Re.push({ id: ze.id, label: Fe.label, icon: Fe.icon, item: ze, kind: "image" });
        });
      } else
        I().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const ze = ye(Ce);
          Re.push({ id: Ce.item.id, label: ze.label, icon: ze.icon, item: Ce.item, kind: Ce.kind });
        });
      const We = (U == null ? void 0 : U.id) || "", Ge = j ? { label: be(j), icon: Ke.globe } : Re.find((Ce) => Ce.id === We) || Re[0];
      re = {
        label: "Selection",
        open: !1,
        disabled: Re.length <= 1,
        currentLabel: Ge.label,
        currentIcon: Ge.icon || null,
        items: Re.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === We
        }))
      };
    }
    const ee = [], ge = (Re, We, Ge, Ce, ze) => {
      const se = Oe(Number(Q[Re] || 0), Ge, Ce);
      ee.push({
        key: Re,
        label: We,
        min: Ge,
        max: Ce,
        step: ze,
        value: se,
        displayValue: po(se),
        fillPct: Oe((se - Ge) / Math.max(1e-6, Ce - Ge) * 100, 0, 100),
        enabled: P && !c
      });
    }, Pe = [];
    if (j) {
      for (const [Re, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = Hc(Q[Re]);
        ge(Re, We, -Ge, Ge, 0.01);
      }
      ge("yaw_deg", "Yaw", -180, 180, 0.1), ge("pitch_deg", "Pitch", -90, 90, 0.1), ge("roll_deg", "Roll", -180, 180, 0.1), ge("scale", "Scale", m0, Hc(Q.scale), 0.01), ge("opacity", "Opacity", 0, 100, 1);
    } else if (z.length > 1)
      Pe.push(`Selected objects: ${z.length}`), Pe.push("Multi-selection supports z-order and delete.");
    else {
      const Re = ae === "shot" || ae === "frame";
      if (N)
        for (const [We, Ge] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Hc(Q[We]);
          ge(We, Ge, -Ce, Ce, 0.01);
        }
      ge("yaw_deg", "Yaw", -180, 180, 0.1), ge("pitch_deg", "Pitch", -90, 90, 0.1), ge(ae === "image" || h === "stickers" && !Re ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ge("hFOV_deg", "H FOV", 1, 179, 0.1), ge("vFOV_deg", "V FOV", 1, 179, 0.1), Re && ee.forEach((We) => {
        We.enabled = We.enabled && Z2(We.key, { erp: V() });
      }), v(U) && !Re && ee.forEach((We) => {
        We.enabled = We.enabled && Q2(We.key, { port: ie(U) });
      }), u && !Re && ge("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = z.length > 1 ? null : j || U;
    m.sidePanel = iA({
      coverage: p.coverage,
      readOnly: c,
      selectionPicker: re,
      enabled: P,
      selectedKind: j ? "world" : ae,
      selectedItems: z,
      params: ee,
      notes: Pe,
      uiSettings: ce,
      normalizeCoverageValue: Ln,
      // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
      handoff: !Ee || Xt(Ee) ? null : nA(S(Ee), { enabled: P && !c }),
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: k && Ee && (Ee === j || v(Ee)) ? rA({
        layer: Xt(Ee) ? Ee.origin.layer : null,
        editable: Xt(Ee) && Ps(Ee),
        visible: Ee.visible,
        locked: Ee.locked === !0,
        readOnly: c
      }) : null
    });
  }
  function be(ce) {
    const xe = Dm(ce);
    return Xt(ce) ? `${E0(ce.origin.layer)} · ${xe}` : xe;
  }
  function ke() {
    const { canUndo: ce, canRedo: xe } = J();
    no(m.toolButtons, "value", "undo", { disabled: !ce }), no(m.toolButtons, "value", "redo", { disabled: !xe });
  }
  return {
    connect(ce) {
      ({
        cameraPreviewShown: b,
        cameraShoots: G,
        getActiveCutoutShot: L,
        getBrushPresetIdForTool: oe,
        getCutoutInspectorItems: I,
        getHistoryCapabilities: J,
        getList: T,
        getSelected: B,
        getSelectedItems: ve,
        getSelectedKind: _e,
        getSelectionItemIcon: he,
        getSelectionItemLabelData: ye,
        hasCamera: de,
        hasSpaceContent: we,
        isActiveLassoTool: ue,
        isErpCamera: V,
        isExternalSticker: ie,
        isItemLocked: te,
        isPaintCursorEnabled: x,
        isSceneSticker: v,
        isShotItem: w,
        isSpaceView: Z,
        isStickerHidden: X,
        leaveFrameView: O,
        portHandoffLanes: S,
        poseOf: W,
        selectedWorldSticker: ne,
        setCanvasCursor: me,
        syncCutoutShot: Se,
        syncTimeline: C,
        syncVideoTransportVisibility: le,
        updateCursor: y,
        worldStickerEditable: _
      } = ce);
    },
    syncLookAtFrameButtonState: D,
    syncFloatingViewButtonState: R,
    syncViewToggleState: q,
    syncFrameRollKnob: E,
    syncPaintUi: F,
    syncSidePanelControls: M,
    updateSidePanel: H,
    inspectorTimed: Y,
    syncSidePanelModel: fe,
    syncUndoRedoButtons: ke
  };
}
function $A(e) {
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
  let p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue;
  function V() {
    if (!s || n) return;
    const A = te(), g = l.selection, D = g && x(g.owner);
    if (g) {
      const R = D ? v(g) : [];
      g.frames = g.frames.filter((q) => R.some((E) => D[E].keyframes.some((F) => F.frame === q))), g.frames.length || (l.selection = null);
    }
    d.timeline = uA(o, {
      span: A,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? ie(),
      openRows: l.openRows,
      audio: S() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || lg(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: h(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Ul(r).scene && !we()
    }), d.easing = l.selection ? dA(D, v(l.selection), l.selection.frames, w(l.selection.owner)) : null;
  }
  function ie() {
    return Nm(o, { camera: a });
  }
  function te(A = null) {
    const g = o.timeline.fps, D = o.stickers.find(b), R = D ? k() : null, q = Math.max(
      d.videoTransport.ready && !de() ? Math.round(Number(d.videoTransport.duration || 0) * g) : 0,
      R ? vg(D.clip, g, R.meta) : 0,
      ue()
    );
    return Am(o, { minimum: Math.round(g * 5), frames: q, openClip: A, camera: a });
  }
  function x(A) {
    return A === "camera" ? h() ? o.camera : null : A === "scene" ? i ? o.scene : null : ve(A);
  }
  function v(A) {
    return A.lane ? [A.lane] : Po(x(A.owner));
  }
  function w(A) {
    if (A === "camera") return 0;
    const { clip: g } = x(A);
    return g.start - g.in;
  }
  function Z(A) {
    return `${ko(A, t.frame)}:${A.start - A.in}`;
  }
  function X(A) {
    const g = x(A);
    return !!g && g.locked !== !0;
  }
  function O(A) {
    const g = Math.max(0, Math.round(A));
    if (g === t.frame) return;
    B(), t.frame = g, c.frame.value = g, B();
    const D = [t.selectedId, t.worldSelectedId];
    J(), G(), D[0] !== t.selectedId || D[1] !== t.worldSelectedId ? ye() : m() && _e(), he(), T({ reason: ft.PLAYHEAD });
  }
  function S() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function W(A) {
    I(), L.seek(A);
  }
  function ne() {
    s && L.stop();
  }
  function me() {
    I(), L.toggle();
  }
  function Se() {
    B(), G(), ye(), he(), T();
  }
  function C() {
    oe(), p(), Se();
  }
  function le() {
    const { selection: A } = l;
    X(A.owner) && (ne(), L1(x(A.owner), v(A), A.frames, t.frame - w(A.owner)), l.selection = null, C());
  }
  function y(A) {
    const g = fi(A);
    if (g === null || g === o.timeline.fps) return;
    ne();
    const D = Math.round(t.frame * g / o.timeline.fps);
    iS(o, g), l.selection = null, L.seek(D), C();
  }
  function _() {
    const A = f(r);
    A !== null && A !== o.timeline.fps && y(A);
  }
  return {
    connect(A) {
      ({
        commitAndRefreshNode: p,
        getPortMedia: k,
        hasCamera: h,
        inspectorTimed: m,
        isExternalSticker: b,
        markObjectVisualsDirty: G,
        playback: L,
        pushHistory: oe,
        refreshModalVideoSource: I,
        releaseHiddenSelection: J,
        requestDraw: T,
        syncCutoutShot: B,
        stickerById: ve,
        syncSidePanelModel: _e,
        updateSelectionMenu: he,
        updateSidePanel: ye,
        upstreamBackground: de,
        upstreamLinked: we,
        upstreamSpanFrames: ue
      } = A);
    },
    syncTimeline: V,
    timelineTimed: ie,
    timelineSpanFrames: te,
    timelineOwner: x,
    selectedLanes: v,
    timelineOffset: w,
    clipView: Z,
    timelineEditable: X,
    setTimelineFrame: O,
    jumpTimelineTo: W,
    stopTimelinePlayback: ne,
    togglePlayback: me,
    refreshTimelineEdit: Se,
    commitTimelineEdit: C,
    deleteSelectedKeyframes: le,
    changeTimelineFps: y,
    applyVideoTimelineFps: _
  };
}
function zA(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te;
  function x(v) {
    if (!(n || !o)) {
      if (v.type === "seek") {
        if (v.phase === "move") {
          s.scrubFrame = v.frame, t.request("seek");
          return;
        }
        t.cancel(), v.phase === "start" && m(), h.seek(v.frame);
        return;
      }
      if (v.type === "play") {
        ue();
        return;
      }
      if (v.type === "mute") {
        V(), ve();
        return;
      }
      if (v.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? we()), s.selection = null, ve();
        return;
      }
      if (v.type === "toggle-row") {
        s.openRows.has(v.id) ? s.openRows.delete(v.id) : s.openRows.add(v.id), ve();
        return;
      }
      if (v.type === "toggle-visible") {
        if (v.id === F0) i.painting_visible = !i.painting_visible;
        else {
          const w = ye(v.id);
          if (!w) return;
          w.visible = !w.visible;
        }
        G(), u();
        return;
      }
      if (v.type === "select-row") {
        const w = i.stickers.find((Z) => Z.id === v.id);
        if (w && !w.visible || v.id === "camera" && !l()) return;
        w && !ko(w.clip, r.frame) && k(w.clip.start), (w == null ? void 0 : w.placement) === "world" ? oe(w.id) : v.id === "camera" ? J(f()) : J(p().find((Z) => Z.id === v.id) || null), B(), s.selection = null, te(), ie(), L();
        return;
      }
      if (v.type === "select-keys") {
        const w = he(v.owner), Z = v.frames.map((S) => S - w), X = s.selection, O = (X == null ? void 0 : X.owner) === v.owner && X.lane === v.lane;
        if (v.additive && O) {
          const S = new Set(X.frames);
          for (const W of Z)
            S.has(W) ? S.delete(W) : S.add(W);
          X.frames = [...S].sort((W, ne) => W - ne);
        } else
          s.selection = Z.length ? { owner: v.owner, lane: v.lane, frames: Z } : null;
        ve();
        return;
      }
      if (v.type === "move-keys") {
        const w = s.selection;
        if (!w || !_e(w.owner)) return;
        const Z = ye(w.owner), X = I(w);
        if (v.phase === "start") {
          T(), s.drag = { keyframes: X.map((W) => structuredClone(Z[W].keyframes)), frames: w.frames };
          return;
        }
        const { drag: O } = s;
        if (!(O != null && O.keyframes)) return;
        X.forEach((W, ne) => {
          Z[W].keyframes = structuredClone(O.keyframes[ne]);
        });
        const S = R1(Z, X, O.frames, v.delta, -he(w.owner));
        if (w.frames = O.frames.map((W) => W + S), v.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, S ? u() : b();
        return;
      }
      if (v.type === "clip") {
        const w = v.id === "scene" ? ye("scene") : i.stickers.find((S) => S.id === v.id);
        if (!w || w.locked) return;
        if (v.phase === "start") {
          T(), s.drag = { clip: { ...w.clip }, span: de(w.clip) };
          return;
        }
        const { drag: Z } = s;
        if (!(Z != null && Z.clip)) return;
        const X = Z.clip, O = d(w.clip);
        if (w.clip = { ...X }, v.delta && v.mode === "move" ? z1(w.clip, v.delta) : v.delta && v.mode === "start" ? j1(w.clip, X.start + v.delta) : v.delta && H1(w.clip, (X.duration === null ? Z.span : X.start + X.duration) + v.delta, Z.span), v.phase !== "end") {
          t.request("timeline"), d(w.clip) !== O && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, G(), JSON.stringify(w.clip) !== JSON.stringify(X) ? u() : b();
        return;
      }
      if (v.type === "key-row") {
        if (v.owner === "scene" || !_e(v.owner)) return;
        T(), F1(ye(v.owner), r.frame - he(v.owner)), u();
        return;
      }
      if (v.type === "fps") {
        const w = W1(v.fps);
        if (w === null || w === i.timeline.fps || a.timeline.fpsLocked) {
          ve();
          return;
        }
        c(w);
        return;
      }
      if (v.type === "length") {
        const w = U1(v.length);
        if (w === void 0 || w === i.timeline.length) {
          ve();
          return;
        }
        T(), i.timeline.length = w, u();
        return;
      }
      if (v.type === "easing") {
        const w = s.selection;
        if (!w || !_e(w.owner)) return;
        T(), $1(ye(w.owner), I(w), w.frames, v.easing), v.commit ? u() : b();
      }
    }
  }
  return {
    connect(v) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: p,
        jumpTimelineTo: k,
        playback: h,
        refreshModalVideoSource: m,
        refreshTimelineEdit: b,
        releaseHiddenSelection: G,
        requestDraw: L,
        selectWorldSticker: oe,
        selectedLanes: I,
        setSelectedItem: J,
        stopTimelinePlayback: T,
        syncFloatingViewButtonState: B,
        syncTimeline: ve,
        timelineEditable: _e,
        timelineOffset: he,
        timelineOwner: ye,
        timelineSpanFrames: de,
        timelineTimed: we,
        togglePlayback: ue,
        toggleVideoMuted: V,
        updateSelectionMenu: ie,
        updateSidePanel: te
      } = v);
    },
    onTimelineAction: x
  };
}
function jA(e) {
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
  let d, u, f, p, k, h, m;
  function b() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Ln(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), G(), o.setDirtyCanvas(!0, !0));
  }
  function G() {
    var ve;
    if (a || (p(), h(), m(), l.coverage = Ln(l.coverage), Rm(o, l.active), !c)) return;
    const T = f(), B = Vm(o, T, String(c.value ?? ""), { rebased: n });
    B !== null && (T !== l && (l.id = T.id), c.value = B, (ve = c.callback) == null || ve.call(c, B));
  }
  function L() {
    l.ui_settings = g2(l.ui_settings), a || G();
  }
  function oe() {
    var T;
    a || (G(), (T = o.setDirtyCanvas) == null || T.call(o, !0, !0));
  }
  function I() {
    a || d() && k().catch((T) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", T);
    });
  }
  function J(T = {}) {
    var _e, he, ye, de, we, ue, V, ie, te, x, v;
    const B = T.syncPreview !== !1, ve = T.syncGraph !== !1;
    B && ((ye = (he = (_e = yg(o)) == null ? void 0 : _e.runtime) == null ? void 0 : he.requestDraw) == null || ye.call(he), (ue = (we = (de = gg(o)) == null ? void 0 : de.dom) == null ? void 0 : we.requestDraw) == null || ue.call(we), (V = o.setDirtyCanvas) == null || V.call(o, !0, !1)), ve && ((te = (ie = o.graph) == null ? void 0 : ie.setDirtyCanvas) == null || te.call(ie, !0, !0), (v = (x = t == null ? void 0 : t.canvas) == null ? void 0 : x.setDirty) == null || v.call(x, !0, !0));
  }
  return {
    connect(T) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: p,
        syncPaintingLayerAsync: k,
        syncPortHandoff: h,
        syncUpstreamEdits: m
      } = T);
    },
    apply: b,
    commitState: G,
    persistUiSettings: L,
    commitAndRefreshNode: oe,
    triggerBackgroundPersistenceOnClose: I,
    syncCoverageChangeToNodePreviews: J
  };
}
function HA(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W;
  function ne(A, g, D = "Clear") {
    return new Promise((R) => {
      a.confirmDialog = {
        visible: !0,
        title: String(A || ""),
        text: String(g || ""),
        confirmLabel: String(D || "Confirm"),
        resolve: R
      };
    });
  }
  async function me() {
    var D, R;
    if (r || !await ne(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = xo(null), ue();
    const g = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((q) => q.placement === "world" || g.includes(q)) : g, n || (i.assets = {}), t.selectedId = ((D = g[0]) == null ? void 0 : D.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((R = g[0]) == null ? void 0 : R.id) || null, ie();
    else {
      const q = eS(i.shots, i.active.selected_shot_id);
      i.stickers = g, i.assets = {}, i.shots = q.shots, t.selectedId = q.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = q.selectedShotId, !q.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, ie();
    }
    te(), u(), S(), O(), x();
  }
  async function Se(A) {
    var E, F, M, H;
    if (r) return;
    const g = A === "mask" ? "mask" : "paint", D = g === "mask" ? "Mask" : "Paint", R = b(g);
    if (!(!R.length && !(((E = t.interaction) == null ? void 0 : E.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === g) || !await ne(
      `Clear ${D}`,
      `This will remove all ${g} strokes in the current node.`,
      `Clear ${D}`
    ))) {
      if (((M = t.interaction) == null ? void 0 : M.kind) === "draw" && ((H = t.interaction) == null ? void 0 : H.layerKind) === g) {
        const Y = p(t.interaction);
        Y && t.paintEngine.cancelActiveStroke(Y), t.interaction = null;
      }
      R.length = 0, i.painting.raster_objects = G().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") !== g), g === "paint" && (m().length = 0), ue(), te(), u(), S(), O(), X(), x();
    }
  }
  function C() {
    if (r) return;
    const A = L();
    if (!A || !_e(A) || I(A) || Xt(A) || n && ye(A)) return;
    let g;
    n ? g = bS(A, Kl(i), h()) : (g = JSON.parse(JSON.stringify(A)), g.id = Xo("st"), g.yaw_deg = Gt((g.yaw_deg || 0) + 8), g.z_index = h()), i.stickers.push(g), i.active.selected_sticker_id = g.id, t.selectedId = g.id, t.selectedIds = [g.id], de(), te(), u(), O(), S(), x();
  }
  function le() {
    const A = v();
    return A ? (!W(A) || Xt(A) || (w(), gS(i, A.id), c(), de(), te(), u(), S(), O(), Z(), x()), !0) : !1;
  }
  function y() {
    var D, R, q, E, F;
    if (r) return;
    const A = oe(), g = L();
    if (!(!g && A.length === 0) && !A.some(Xt) && !A.some((M) => J(M))) {
      if (w(), A.length > 1) {
        const M = new Set(A.filter((fe) => he(fe)).map((fe) => String(fe.actionGroupId || fe.id || ""))), H = new Set(A.filter((fe) => T(fe)).map((fe) => V(fe.rasterObjectId || fe.id || ""))), Y = new Set(A.filter(_e).map((fe) => String(fe.id || "")));
        M.size > 0 && (i.painting.paint.strokes = (Array.isArray((R = (D = i.painting) == null ? void 0 : D.paint) == null ? void 0 : R.strokes) ? i.painting.paint.strokes : []).filter((fe) => !M.has(String((fe == null ? void 0 : fe.actionGroupId) || ""))), i.painting.groups = m().filter((fe) => !M.has(String((fe == null ? void 0 : fe.actionGroupId) || (fe == null ? void 0 : fe.id) || ""))), ue()), H.size > 0 && (i.painting.raster_objects = G().filter((fe) => !H.has(String((fe == null ? void 0 : fe.id) || ""))), we()), Y.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((fe) => Y.has(String((fe == null ? void 0 : fe.id) || "")) ? I(fe) ? (ve(fe) || (fe.visible = !1), !0) : !1 : !0), ie(), de()), t.selectedId = null, t.selectedIds = [], te(), u(), S(), O(), x();
        return;
      }
      if (he(g)) {
        const M = String(g.actionGroupId || g.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((E = (q = i.painting) == null ? void 0 : q.paint) == null ? void 0 : E.strokes) ? i.painting.paint.strokes : []).filter((H) => String((H == null ? void 0 : H.actionGroupId) || "").trim() !== M), i.painting.groups = m().filter((H) => String((H == null ? void 0 : H.actionGroupId) || (H == null ? void 0 : H.id) || "").trim() !== M), ue(), t.selectedId = null, t.selectedIds = [], te(), u(), S(), O(), x();
        return;
      }
      if (T(g)) {
        const M = V(g.rasterObjectId || g.id || "");
        i.painting.raster_objects = G().filter((H) => String((H == null ? void 0 : H.id) || "").trim() !== M), we(), t.selectedId = null, t.selectedIds = [], te(), u(), S(), O(), x();
        return;
      }
      if (o && B(g)) {
        f();
        return;
      }
      if (s === "stickers" || _e(g)) {
        if (I(g)) {
          if (ve(g)) return;
          g.visible = !1, de(), te(), u(), S(), O(), x();
          return;
        }
        i.stickers = i.stickers.filter((M) => M.id !== g.id), ie(), de(), t.selectedId = ((F = k()[0]) == null ? void 0 : F.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, te(), u(), S(), O(), x();
        return;
      }
      l();
    }
  }
  function _() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", X(), S());
  }
  return {
    connect(A) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: p,
        getList: k,
        getNextStickerZIndex: h,
        getPaintingGroupList: m,
        getPaintingLayerList: b,
        getRasterObjectList: G,
        getSelected: L,
        getSelectedItems: oe,
        isExternalSticker: I,
        isItemLocked: J,
        isRasterObjectItem: T,
        isShotItem: B,
        isStickerHidden: ve,
        isStickerItem: _e,
        isStrokeGroupItem: he,
        isUploadingSticker: ye,
        markObjectVisualsDirty: de,
        markPaintCompositeVisualsDirty: we,
        markPaintStrokeVisualsDirty: ue,
        parseRasterObjectSelectionId: V,
        pruneUnusedAssets: ie,
        pushHistory: te,
        requestDraw: x,
        selectedWorldSticker: v,
        stopTimelinePlayback: w,
        syncFloatingViewButtonState: Z,
        syncPaintUi: X,
        updateSelectionMenu: O,
        updateSidePanel: S,
        worldStickerEditable: W
      } = A);
    },
    clearAll: me,
    clearPaintingLayer: Se,
    duplicateSelected: C,
    deleteSelectedWorldSticker: le,
    deleteSelected: y,
    forceCursorTool: _
  };
}
function GA(e) {
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
    vueModal: p
  } = e;
  let k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te;
  function x(E) {
    return zd(E == null ? void 0 : E.dataTransfer);
  }
  function v(E) {
    const F = !!E;
    n.active !== F && (n.active = F, d.classList.toggle("drop-active", F));
  }
  function w() {
    const E = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      E.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function Z(E) {
    if (l || f !== "stickers" && f !== "cutout" || !sr(E)) return;
    if (c) {
      V(), await ne(E);
      return;
    }
    const F = Xo("asset"), M = Uo(a, `add:${F}`, async () => {
      try {
        const { image: H } = await Bo(E);
        s.set(F, H);
        const Y = Xo("st");
        u.stickers.push({
          id: Y,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: m(30, Number(H.naturalWidth || H.width || 1), Number(H.naturalHeight || H.height || 1)),
          rot_deg: 0,
          z_index: oe()
        }), de(u.stickers[u.stickers.length - 1]), L(), te(), ie(), he();
        const fe = await Mi(E, {
          fetchApi: (ce, xe) => t.fetchApi(ce, xe)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((ce) => String((ce == null ? void 0 : ce.asset_id) || "") === F).length) return;
        u.assets[F] = fe, w(), _e(), h(), te(), ie(), he();
      } catch (H) {
        delete u.assets[F], s.delete(F);
        const Y = Array.isArray(u.stickers) ? u.stickers : [], fe = Y.filter((be) => String((be == null ? void 0 : be.asset_id) || "") === F);
        throw fe.length && (u.stickers = Y.filter((be) => String((be == null ? void 0 : be.asset_id) || "") !== F), fe.some((be) => String((be == null ? void 0 : be.id) || "") === String(i.selectedId || "")) && de(null), te(), ie(), he(), h()), H;
      }
    });
    try {
      await M;
    } catch {
    }
  }
  function X() {
    var E;
    l || f !== "stickers" && f !== "cutout" || (E = p == null ? void 0 : p.openImagePicker) == null || E.call(p, "add");
  }
  function O() {
    var E;
    l || !c || (E = p == null ? void 0 : p.openImagePicker) == null || E.call(p, "add-world");
  }
  async function S(E) {
    l || !c || !sr(E) || (V(), await ne(E, "world"));
  }
  function W() {
    const E = { x: r.width / 2, y: r.height / 2 }, F = T() ? o.pick(G(), E.x, E.y, r.width, r.height) : null;
    return HS(we(), F, b());
  }
  async function ne(E, F = "sky") {
    const M = Kl(u), H = Uo(a, `add:${M}`, async () => {
      const { image: Y } = await Bo(E), fe = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: m(30, Number(Y.naturalWidth || Y.width || 1), Number(Y.naturalHeight || Y.height || 1)),
        rot_deg: 0
      }, be = { kind: "file", filename: "" }, ke = F === "world" ? yS(M, be, W()) : yd(M, be, fe, oe());
      s.set(ue(ke), Y), u.stickers.push(ke), F === "world" ? ye(M) : de(ke), L(), te(), ie(), he();
      try {
        const ce = await Mi(E, {
          fetchApi: (K, pe) => t.fetchApi(K, pe)
        }), xe = u.stickers.find((K) => K.id === M);
        if (!xe) return;
        xe.source = Na(ce), s.set(ue(xe), Y), _e(), h();
      } catch (ce) {
        throw u.stickers = u.stickers.filter((xe) => xe.id !== M), i.selectedId === M && de(null), i.worldSelectedId === M && k(), _e(), h(), ce;
      } finally {
        te(), ie(), he();
      }
    });
    try {
      await H;
    } catch {
    }
  }
  async function me(E, F) {
    const M = Uo(a, `replace:${F}:${Xo("asset")}`, async () => {
      const { image: H } = await Bo(E), Y = await Mi(E, {
        fetchApi: (be, ke) => t.fetchApi(be, ke)
      }), fe = u.stickers.find((be) => be.id === F);
      if (fe) {
        fe.source = Na(Y), fe.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const be of [fe.size.value, ...fe.size.keyframes.map((ke) => ke.value)])
          be.vFOV_deg = m(be.hFOV_deg, Number(H.naturalWidth || H.width || 1), Number(H.naturalHeight || H.height || 1));
        s.set(ue(fe), H), ve(), _e(), h(), te(), ie(), he();
      }
    });
    try {
      await M;
    } catch {
    }
  }
  async function Se(E) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = I();
    if (!F || !B(F) || J(F) || Xt(F) || !sr(E)) return;
    if (c) {
      await me(E, F.id);
      return;
    }
    const M = String(F.id || ""), H = Xo("asset"), Y = Uo(a, `replace:${M}:${H}`, async () => {
      var K;
      const fe = (Array.isArray(u.stickers) ? u.stickers : []).find((pe) => String((pe == null ? void 0 : pe.id) || "") === M) || null;
      if (!fe || !B(fe) || J(fe)) return;
      const be = String(fe.asset_id || ""), ke = be ? dn(((K = u.assets) == null ? void 0 : K[be]) || null) : null, ce = Number(fe.vFOV_deg || 0), xe = fe.crop && typeof fe.crop == "object" ? { ...fe.crop } : null;
      try {
        const { image: pe } = await Bo(E);
        s.set(H, pe), fe.asset_id = H, fe.vFOV_deg = m(
          Number(fe.hFOV_deg || 30),
          Number(pe.naturalWidth || pe.width || 1),
          Number(pe.naturalHeight || pe.height || 1)
        ), fe.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ve(), te(), ie(), he();
        const z = await Mi(E, {
          fetchApi: ($, U) => t.fetchApi($, U)
        }), ae = (Array.isArray(u.stickers) ? u.stickers : []).find(($) => String(($ == null ? void 0 : $.id) || "") === M) || null;
        if (!ae || String(ae.asset_id || "") !== H) return;
        u.assets[H] = z, w(), _e(), h(), te(), ie(), he();
      } catch (pe) {
        delete u.assets[H], s.delete(H);
        const z = (Array.isArray(u.stickers) ? u.stickers : []).find((ae) => String((ae == null ? void 0 : ae.id) || "") === M) || null;
        throw z && String(z.asset_id || "") === H && (be && ke && (u.assets[be] = ke), z.asset_id = be, z.vFOV_deg = ce, z.crop = xe ? { ...xe } : null), ve(), h(), te(), ie(), he(), pe;
      }
    });
    try {
      await Y;
    } catch {
    }
  }
  function C() {
    var F;
    if (l) return;
    const E = I();
    !E || !B(E) || J(E) || Xt(E) || (F = p == null ? void 0 : p.openImagePicker) == null || F.call(p, "replace");
  }
  async function le() {
    if (l || f !== "stickers") return;
    if (c) {
      await y();
      return;
    }
    const E = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(E).filter(([, H]) => {
      const Y = String((H == null ? void 0 : H.type) || "").toLowerCase(), fe = String((H == null ? void 0 : H.value) || "");
      return Y === "dataurl" && fe.startsWith("data:image");
    });
    if (!F.length) return;
    let M = !1;
    for (const [H, Y] of F)
      try {
        const fe = String((Y == null ? void 0 : Y.value) || "");
        if (!fe) continue;
        const be = await fetch(fe).then((pe) => pe.blob()), ke = String(be.type || "image/png").split("/")[1] || "png", ce = String((Y == null ? void 0 : Y.name) || `${H}.${ke}`), xe = new File([be], ce, { type: be.type || "image/png" }), K = await Mi(xe, {
          fetchApi: (pe, z) => t.fetchApi(pe, z)
        });
        u.assets[H] = {
          ...K,
          w: Number((Y == null ? void 0 : Y.w) || 0),
          h: Number((Y == null ? void 0 : Y.h) || 0)
        }, M = !0;
      } catch {
      }
    M && (h(), he());
  }
  async function y() {
    let E = !1;
    for (const F of u.stickers) {
      const M = F.source.data_url;
      if (M)
        try {
          const H = await fetch(M).then((ke) => ke.blob()), Y = String(H.type || "image/png").split("/")[1] || "png", fe = new File([H], `${F.id}.${Y}`, { type: H.type || "image/png" }), be = await Mi(fe, {
            fetchApi: (ke, ce) => t.fetchApi(ke, ce)
          });
          F.source = Na(be), E = !0;
        } catch {
        }
    }
    E && (h(), he());
  }
  function _(E) {
    f !== "stickers" && f !== "cutout" || l || (E.preventDefault(), v(!0));
  }
  function A(E) {
    var H;
    if (f !== "stickers" && f !== "cutout" || l) return;
    E.preventDefault(), E.stopPropagation(), n.depth = 0, v(!1);
    const M = Array.from(((H = E.dataTransfer) == null ? void 0 : H.files) || []).find((Y) => sr(Y));
    M && Z(M);
  }
  function g(E) {
    f !== "stickers" && f !== "cutout" || l || x(E) && (n.depth += 1, v(!0), E.preventDefault());
  }
  function D(E) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && x(E) && v(!0), n.active && E.preventDefault());
  }
  function R(E) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const F = Number(E.clientX) <= 0 && Number(E.clientY) <= 0;
    (n.depth === 0 || F) && v(!1);
  }
  function q(E) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, v(!1), x(E) && E.preventDefault());
  }
  return {
    connect(E) {
      ({
        clearWorldSelection: k,
        commitAndRefreshNode: h,
        computeStickerVFov: m,
        contentSphere: b,
        currentSpaceCamera: G,
        forceCursorTool: L,
        getNextStickerZIndex: oe,
        getSelected: I,
        isExternalSticker: J,
        isSpaceView: T,
        isStickerItem: B,
        markObjectVisualsDirty: ve,
        pushHistory: _e,
        requestDraw: he,
        selectWorldSticker: ye,
        setSelectedItem: de,
        spaceViewState: we,
        stickerImageKey: ue,
        stopTimelinePlayback: V,
        updateSelectionMenu: ie,
        updateSidePanel: te
      } = E);
    },
    addImageStickerFromFile: Z,
    addImageSticker: X,
    addWorldImageSticker: O,
    addWorldStickerFromFile: S,
    replaceSelectedImageFromFile: Se,
    replaceSelectedImage: C,
    migrateLegacyEmbeddedAssets: le,
    pruneUnusedAssets: w,
    setDropCue: v,
    onCanvasDragOver: _,
    onCanvasDrop: A,
    onWindowDragEnter: g,
    onWindowDragOver: D,
    onWindowDragLeave: R,
    onWindowDrop: q
  };
}
function KA(e) {
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
    type: p,
    uiState: k
  } = e;
  let h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se = o;
  function C(z, ae) {
    var j;
    const $ = (j = I().space) == null ? void 0 : j.gizmo;
    if (he() && $ && me("hover", ae) !== null && me("down", ae))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: $.mode, start: $.transform, base: oe(), changed: !1 }, r.setPointerCapture(z.pointerId), S(ae), !0;
    const U = qm(oe(), m(te()));
    return XS(L(), U, ae, r.width, r.height) ? (he() || (ie(H()), ne(), W(), ue()), n.interaction = { kind: "world_select" }, r.setPointerCapture(z.pointerId), !0) : !1;
  }
  function le() {
    if (s || p !== "cutout") return;
    const z = H();
    if (z) {
      ie(z), n.mode = "pano", O(Gt(Number(z.yaw_deg || 0)), Oe(Number(z.pitch_deg || 0), -89.9, 89.9)), ne(), W(), ue({ cause: "cutout_frame" });
      return;
    }
    const ae = em({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Gt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [ae], ie(ae), J(), n.mode = "pano", we(), G(), ne(), W(), ue({ cause: "cutout_frame" });
  }
  function y() {
    s || !u || B() || (v(), d.camera = aS(x()), F(), ie(H()), J(), we(), G(), ne(), W(), ue({ cause: "cutout_frame" }));
  }
  function _() {
    v(), d.camera = null, ie(null), F(), we(), G(), ne(), W(), ue({ cause: "cutout_frame" });
  }
  function A(z, ae) {
    u && ye(z) && (d.camera.projection = ae === So ? "erp" : "perspective", ae === So) || R(z, ae);
  }
  function g() {
    s || p !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, we(), G(), ne(), W(), ue());
  }
  function D(z, ae) {
    const $ = a.frameSafeRect;
    if (!z || !$ || n.mode !== "frame") return !1;
    const U = Fu * Di($, z), j = ld(ad($, ae), U);
    return z.hFOV_deg = j.hFOV_deg, z.vFOV_deg = j.vFOV_deg, !0;
  }
  function R(z, ae) {
    if (!z || z.locked === !0) return;
    const $ = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, U = (() => {
      const P = String(z.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(P)) {
        const [ge, Pe] = P.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(ge) && Number.isFinite(Pe)) return ge >= Pe;
      }
      const re = Number(z.hFOV_deg || 64), ee = Number(z.vFOV_deg || 40);
      return Math.abs(re - ee) > 1e-6 ? re >= ee : Vi(z) >= 1;
    })();
    let [j, N] = $[String(ae)] || $["1:1"];
    j >= N !== U && ([j, N] = [N, j]);
    const Q = j / N;
    if (!D(z, Q)) {
      const P = Oe(Number(z.vFOV_deg || 40), 1, 179);
      z.vFOV_deg = P, z.hFOV_deg = ka(P, Q);
    }
    z.aspect_id = `${j}:${N}`;
  }
  function q(z, ae, $) {
    if (!z || z.locked === !0) return !1;
    const U = ws(ae, $);
    if (!U) return !1;
    const j = U.ratio;
    if (!D(z, j)) {
      const N = Oe(Number(z.vFOV_deg || 40), 1, 179);
      z.vFOV_deg = N, z.hFOV_deg = ka(N, j);
    }
    return z.aspect_id = U.label, !0;
  }
  function E(z) {
    if (!z || z.locked === !0) return;
    const ae = String(z.aspect_id || "").trim(), $ = ui(z), U = $.tanHalfX / Math.max(1e-12, $.tanHalfY), j = 1 / Math.max(1e-12, U);
    if (!D(z, j)) {
      const N = Oe(Number(z.vFOV_deg || 60), 1, 179);
      z.vFOV_deg = N, z.hFOV_deg = ka(N, j);
    }
    if (/^\d+:\d+$/.test(ae)) {
      const [N, Q] = ae.split(":");
      z.aspect_id = `${Q}:${N}`;
    } else
      z.aspect_id = Ei(z);
  }
  function F(z = !0) {
    var U, j;
    if (!t) return;
    const ae = Se;
    if (!b()) {
      Se = null, (U = d.shots) != null && U.length && (d.shots = []), ae && M(ae, null);
      return;
    }
    const $ = (j = d.shots) == null ? void 0 : j[0];
    z && $ && Se && cS(d.camera, n.frame, $, Se), Se = Tm(d.camera, n.frame), $ ? Object.assign($, Se, { position: [...Se.position] }) : d.shots = [{ ...Se, position: [...Se.position] }], ae || M(null, Se);
  }
  function M(z, ae) {
    var N, Q;
    !ae && n.mode === "frame" && de(z);
    const $ = (ae == null ? void 0 : ae.position) ?? [0, 0, 0];
    if (((Q = (N = n.viewTransition) == null ? void 0 : N.end) == null ? void 0 : Q.mode) === "3dof") {
      X({ ...x(), position: $ }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ve()) return;
    const U = (z == null ? void 0 : z.position) ?? [0, 0, 0];
    if (U.every((P, re) => P === $[re])) return;
    const j = { ...x(), position: U };
    h({ mode: "6dof", position: U, moved: !0 }), n.viewDistance = j.distance, X({ ...j, position: $ }, { mode: "3dof", moved: !1 });
  }
  function H() {
    if (!l) return null;
    const z = Array.isArray(d.shots) ? d.shots : [];
    if (!z.length) return null;
    const ae = String(d.active.selected_shot_id || "");
    return z.find(($) => String(($ == null ? void 0 : $.id) || "") === ae) || z[0] || null;
  }
  function Y(z, ae, $ = {}) {
    var N;
    if ((z == null ? void 0 : z.kind) !== "roll_frame" || !z.shot) return;
    z.accumulatedRad += Jh(ae, z.lastAngle), z.lastAngle = ae;
    const U = Zh(z.start.roll_deg, z.accumulatedRad, {
      shiftKey: $.shiftKey,
      altKey: z.altStarted ? !1 : $.altKey
    });
    z.shot.roll_deg = U, z.changed = z.changed || Math.abs(z.accumulatedRad) > 1e-9;
    const j = (((N = k.sidePanel) == null ? void 0 : N.params) || []).find((Q) => Q.key === "roll_deg");
    j && (j.value = U, j.displayValue = po(U), j.fillPct = (U + 180) / 360 * 100), w(), ke(z), ue({ localOnly: !0 });
  }
  function fe(z, ae, $ = {}) {
    var N;
    if ((z == null ? void 0 : z.kind) !== "roll_frame" || !z.shot || !z.rollGesture) return;
    const U = $g(z.rollGesture, ae, $);
    if (!U) return;
    z.rollGesture = U.gesture, z.center = U.gesture.center, z.lastAngle = U.gesture.lastAngle, z.accumulatedRad = U.gesture.accumulatedRad, z.shot.roll_deg = U.rollDeg, z.changed = z.changed || Math.abs(U.gesture.accumulatedRad) > 1e-9;
    const j = (((N = k.sidePanel) == null ? void 0 : N.params) || []).find((Q) => Q.key === "roll_deg");
    j && (j.value = U.rollDeg, j.displayValue = po(U.rollDeg), j.fillPct = (U.rollDeg + 180) / 360 * 100), w(), ke(z), ue({ localOnly: !0 });
  }
  function be(z, ae) {
    const $ = V(z);
    return Math.atan2($.y - ae.y, $.x - ae.x);
  }
  function ke(z) {
    var Q, P;
    if ((z == null ? void 0 : z.kind) !== "roll_frame" || !z.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const ae = T(z.shot), $ = (Q = r.getBoundingClientRect) == null ? void 0 : Q.call(r), U = (P = c.getBoundingClientRect) == null ? void 0 : P.call(c);
    if (!ae || !$ || !U || r.width <= 0 || r.height <= 0) return;
    const j = $.width / r.width, N = $.height / r.height;
    k.tooltip.text = `${po(z.shot.roll_deg)}°`, k.tooltip.left = $.left - U.left + (ae.x + ae.w * 0.5) * j, k.tooltip.top = $.top - U.top + (ae.y + ae.h * 0.5) * N + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  function ce(z) {
    var N;
    if (z.button !== 0 || s || n.mode !== "frame") return;
    const ae = H();
    if (!ae || ae.locked === !0) return;
    const $ = T(ae);
    if (!$) return;
    const U = { x: $.x + $.w * 0.5, y: $.y + $.h * 0.5 }, j = be(z, U);
    n.interaction = {
      kind: "roll_frame",
      shot: ae,
      center: U,
      lastAngle: j,
      accumulatedRad: 0,
      start: { roll_deg: Number(ae.roll_deg ?? ae.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (N = i.setPointerCapture) == null || N.call(i, z.pointerId), z.preventDefault(), w(), ke(n.interaction), ue({ localOnly: !0 });
  }
  function xe(z) {
    var ae;
    ((ae = n.interaction) == null ? void 0 : ae.kind) !== "roll_frame" || n.interaction.source !== "knob" || Y(
      n.interaction,
      be(z, n.interaction.center),
      z
    );
  }
  function K() {
    const z = n.interaction;
    (z == null ? void 0 : z.kind) !== "roll_frame" || z.source !== "knob" || (z.changed && (we(), G(), ne()), n.interaction = null, _e(), Z(), w(), ue());
  }
  function pe(z) {
    const ae = n.mode === "frame" && !s ? H() : null;
    !ae || ae.locked === !0 || Math.abs(Number(ae.roll_deg ?? ae.rot_deg ?? 0)) <= 1e-9 || (ae.roll_deg = 0, we(), G(), ne(), w(), ue(), z.preventDefault());
  }
  return {
    connect(z) {
      ({
        applySpaceMode: h,
        cameraFrustumLength: m,
        cameraShoots: b,
        commitAndRefreshNode: G,
        currentSpaceCamera: L,
        cutoutCamera: oe,
        editorViewInput: I,
        forceCursorTool: J,
        getFrameViewRect: T,
        hasCamera: B,
        hasSpaceContent: ve,
        hideTooltip: _e,
        isCameraSelected: he,
        isShotItem: ye,
        leaveFrameView: de,
        pushHistory: we,
        requestDraw: ue,
        screenPos: V,
        setSelectedItem: ie,
        spaceScale: te,
        spaceViewState: x,
        stopTimelinePlayback: v,
        syncFrameRollKnob: w,
        syncViewToggleState: Z,
        transitionView: X,
        turnViewTo: O,
        updateCursor: S,
        updateSelectionMenu: W,
        updateSidePanel: ne,
        worldGizmoPointer: me
      } = z);
    },
    addCutoutFrame: le,
    addStudioCamera: y,
    deleteStudioCamera: _,
    setShotAspect: A,
    clearCutoutFrame: g,
    applyCutoutAspectCustom: q,
    rotateCutoutAspect90: E,
    syncCutoutShot: F,
    getActiveCutoutShot: H,
    startCameraPress: C,
    applySharedRollInteractionPoint: fe,
    onFrameRollKnobPointerDown: ce,
    onFrameRollKnobPointerMove: xe,
    finishKnobRoll: K,
    onFrameRollKnobDoubleClick: pe
  };
}
function WA(e) {
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
    uiState: p,
    videoTransportEl: k
  } = e;
  let h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V = null, ie = !1;
  function te(M) {
    if (n.mode = "pano", !M) return;
    m();
    const H = he().distance;
    n.viewYaw = Gt(M.yaw_deg), n.viewPitch = Oe(M.pitch_deg, -89.9, 89.9), n.viewFov = Oe(M.hFOV_deg, 35, 140), n.spaceMode === "6dof" && h({ mode: "6dof", position: [...M.position], moved: !0 }), n.viewDistance = H, d.backgroundDirty = !0;
  }
  function x() {
    var U, j, N, Q, P;
    if (!r) return null;
    const M = (U = r.getBoundingClientRect) == null ? void 0 : U.call(r), H = Number((M == null ? void 0 : M.width) || 0) > 0 ? r.width / M.width : 1, Y = Number((M == null ? void 0 : M.height) || 0) > 0 ? r.height / M.height : 1;
    d.frameCanvasScale = Math.min(H, Y);
    let fe = 24, be = 24;
    const ke = Math.max(fe + 1, r.width - 24);
    let ce = Math.max(be + 1, r.height - 24);
    const xe = (j = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : j.call(f), K = (N = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : N.call(a);
    let pe = 24;
    xe && M && xe.width > 0 && xe.height > 0 && (pe = Math.max(pe, (xe.right - M.left) * H + Cp)), K && M && K.width > 0 && K.height > 0 && ((Q = p.frameRail) == null ? void 0 : Q.visible) === !0 && (pe = Math.max(pe, (M.right - K.left) * H + Cp)), fe = Math.max(fe, pe);
    const z = Math.min(ke, r.width - pe);
    let ae = 24;
    const $ = (P = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : P.call(s);
    if ($ && M && $.width > 0 && $.height > 0 && (ae = Math.max(ae, ($.bottom - M.top) * Y + Rc)), [l, k].forEach((re) => {
      var Pe;
      if (!re || !M) return;
      const ee = getComputedStyle(re);
      if (ee.display === "none" || ee.visibility === "hidden" || Number(ee.opacity) <= 0) return;
      const ge = (Pe = re.getBoundingClientRect) == null ? void 0 : Pe.call(re);
      !ge || ge.width <= 0 || ge.height <= 0 || (ae = Math.max(ae, (M.bottom - ge.top) * Y + Rc));
    }), o && M) {
      const re = getComputedStyle(o);
      re.display !== "none" && re.visibility !== "hidden" && Number(re.opacity) > 0 && (ae = Math.max(ae, (ZN + Rc) * Y));
    }
    return be = Math.max(be, ae), ce = Math.max(be + 1, Math.min(ce, r.height - ae)), {
      x: fe,
      y: be,
      w: Math.max(1, z - fe),
      h: Math.max(1, ce - be)
    };
  }
  function v(M = L()) {
    if (!M || !r) return null;
    const H = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Yv(H, M, Fu * Di(H, M));
  }
  function w(M = L()) {
    const H = v(M);
    return H ? { x: H.x, y: H.y, w: H.w, h: H.h } : null;
  }
  function Z() {
    return u && !!L();
  }
  function X(M, H) {
    const Y = L();
    if (!Y || Y.locked === !0) return !1;
    const fe = Number(H) > 0, be = nm(Y, H);
    if (!be) return !1;
    if (fe) {
      const ke = Fu * Di(
        d.frameSafeRect || { w: r.width, h: r.height },
        be
      ), ce = cd({ width: r.width, height: r.height }, ke);
      if (ce.halfW < r.width * 0.5 - 1e-6 || ce.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Y.hFOV_deg = be.hFOV_deg, Y.vFOV_deg = be.vFOV_deg, O(), ue(), !0;
  }
  function O() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, T(), b(), ue());
    }, 180);
  }
  function S() {
    return t && n.mode === "frame" && oe();
  }
  function W() {
    const M = L(), H = v(M);
    return M && H ? Zm(M, H, { width: r.width, height: r.height }) : null;
  }
  function ne() {
    var M;
    return ((M = G()) == null ? void 0 : M.radius) || ur;
  }
  function me(M) {
    const { position: H, yaw_deg: Y, pitch_deg: fe, roll_deg: be, hFOV_deg: ke } = M.shot;
    return { position: H, yaw_deg: Y, pitch_deg: fe, roll_deg: be, hFOV_deg: ke, distance: ne() };
  }
  function Se(M, H) {
    const { rect: Y } = M;
    return i.pickSurface(ve(M.shot), H.x - Y.x, H.y - Y.y, Y.w, Y.h);
  }
  function C(M, H, Y) {
    return du(H, Se(M, Y), null, _e());
  }
  function le(M) {
    return JSON.stringify([me(M), M.rect]);
  }
  function y(M) {
    const H = L();
    H.position = [...M.position], H.yaw_deg = M.yaw_deg, H.pitch_deg = M.pitch_deg;
  }
  function _(M, H) {
    const Y = L();
    !Y || c || Y.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Y,
      last: M,
      start: { yaw_deg: Number(Y.yaw_deg || 0), pitch_deg: Number(Y.pitch_deg || 0) },
      changed: !1
    }, we(M), r.setPointerCapture(H));
  }
  function A(M, H, Y) {
    const fe = W();
    if (!fe || c) return;
    const be = me(fe);
    n.interaction = M === "orbit" ? { kind: "frame_orbit", last: H, pivot: C(fe, be, H), changed: !1 } : { kind: "frame_pan", last: H, depth: $m(be, _e()), changed: !1 }, we(H), r.setPointerCapture(Y);
  }
  function g(M, H) {
    const Y = W();
    if (!Y) return;
    const fe = me(Y), be = H.x - M.last.x, ke = H.y - M.last.y;
    y(M.kind === "frame_pan" ? Hm(fe, be, ke, Y.rect.w, Y.rect.h, M.depth) : jm(fe, be, ke, r.height, M.pivot)), M.changed = M.changed || be !== 0 || ke !== 0, M.last = H, B({ localOnly: !0, cause: "frame_view" });
  }
  function D(M, H) {
    const Y = W();
    if (!Y || c) return;
    const fe = me(Y), be = performance.now(), ke = { x: M.x, y: M.y, time: be, key: i.contentRevision(), view: le(Y) };
    if (!zm(V, ke)) {
      const ce = Se(Y, M);
      V = { ...ke, cost: performance.now() - be, hit: ce };
    }
    y(Gm(fe, du(fe, V.hit, null, _e()), H, _e())), V.view = le(W() ?? Y), V.wheelTime = be, O(), ue(), B({ localOnly: !0, cause: "frame_view" });
  }
  function R(M, H) {
    const Y = L();
    if (!Y || c || Y.locked === !0) return !1;
    const fe = L0(Y, M, H);
    return fe === Y ? !1 : (ye(), Y.position = fe.position, ie = !0, !0);
  }
  function q() {
    return ie ? (ie = !1, T(), b(), ue(), !0) : !1;
  }
  function E() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, T(), b(), ue(), !0) : !1;
  }
  function F() {
    const M = n.interaction;
    if (!(M != null && M.shot) || !M.start || M.kind !== "pan_frame" && M.kind !== "roll_frame") return !1;
    const H = M.kind === "roll_frame";
    return M.kind === "pan_frame" ? (M.shot.yaw_deg = M.start.yaw_deg, M.shot.pitch_deg = M.start.pitch_deg) : M.shot.roll_deg = M.start.roll_deg, H && I(), n.interaction = null, J(), de(), ue(), we(n.pointerPos), B({ localOnly: !0 }), !0;
  }
  return {
    connect(M) {
      ({
        applySpaceMode: h,
        cancelViewTransition: m,
        commitAndRefreshNode: b,
        contentSphere: G,
        getActiveCutoutShot: L,
        hasSpaceContent: oe,
        hideTooltip: I,
        invalidateLivePaintPreviewCaches: J,
        pushHistory: T,
        requestDraw: B,
        shotViewCamera: ve,
        spaceScale: _e,
        spaceViewState: he,
        stopTimelinePlayback: ye,
        syncViewToggleState: de,
        updateCursor: we,
        updateSidePanel: ue
      } = M);
    },
    leaveFrameView: te,
    measureFrameSafeRect: x,
    getFrameViewLayout: v,
    getFrameViewRect: w,
    supportsFramePainting: Z,
    zoomFrameViewAt: X,
    isFreeFrameView: S,
    frameContext: W,
    frameViewDistance: ne,
    frameSpaceView: me,
    frameTarget: C,
    startPanFrame: _,
    startFrameDrag: A,
    dragFrame: g,
    zoomFrameAt: D,
    flushFrameWheelCommit: E,
    cancelFrameCameraGesture: F,
    moveFrameByKeys: R,
    endFrameKeyMove: q
  };
}
function UA(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B = 0;
  function ve() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function _e() {
    return String(ve() || "") === "lasso_fill";
  }
  function he() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ye(C, le) {
    const y = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function de(C) {
    const le = String(C || "").trim();
    return le === "eraser" ? Dr : Fn[le] ? le : t.activeBrushPresetId || Dr;
  }
  function we() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (he() || T());
  }
  function ue() {
    var C;
    return we() && ((C = t.pointerPos) == null ? void 0 : C.inside) === !0;
  }
  function V(C, le = !0) {
    const y = Number((C == null ? void 0 : C.x) || 0), _ = Number((C == null ? void 0 : C.y) || 0), A = le !== !1, g = t.pointerPos || { x: 0, y: 0, inside: !1 }, D = g.inside !== A || Math.abs(g.x - y) > 0.01 || Math.abs(g.y - _) > 0.01;
    return t.pointerPos = { x: y, y: _, inside: A }, D;
  }
  function ie() {
    var F, M;
    if (!ue()) return null;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool, y = de(le), _ = Fn[y] || Fn[Dr], A = Number(t.brushSizes[y] ?? 10), g = Math.max(1, A) * Math.max(0.1, Number(_.sizeScale ?? 1)), D = Math.max(3, g * 0.5), R = C === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(t.paintColor), q = C === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(R.a ?? 1) * 0.3), 0.16, 0.52), E = C === "mask" ? 0.95 : le === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(R.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: C,
      toolKind: le,
      preset: _,
      radius: D,
      fillStyle: vr(R, q),
      strokeStyle: vr(R, E),
      x: Number(((F = t.pointerPos) == null ? void 0 : F.x) || 0),
      y: Number(((M = t.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: D,
      hotspotY: D
    };
  }
  function te() {
    var H, Y, fe;
    const C = ie();
    if (!r) return;
    if (!C) {
      r.style.display = "none";
      return;
    }
    let le = C.radius * 2, y = C.radius * 2, _ = "999px", A = 0, g = C.fillStyle, D = "1px solid rgba(222, 222, 222, 0.72)", R = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const q = "rgba(222, 222, 222, 0.72)", E = "rgba(52, 52, 52, 0.72)";
    let F = Number(C.hotspotX ?? le * 0.5), M = Number(C.hotspotY ?? y * 0.5);
    if (C.toolKind === "lasso_fill")
      le = Sl, y = Sl, _ = "0", D = "0", R = "none", F = t2, M = n2, g = l2(C.fillStyle, E, q);
    else if (C.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (C.toolKind === "marker") {
      const be = Math.max(1, Number(((H = C.preset) == null ? void 0 : H.aspect) ?? 1));
      le = Math.max(10, C.radius * 2 * be), y = Math.max(6, C.radius * 2), _ = `${Math.min(6, y * 0.42)}px`, A = Number(((fe = (Y = C.preset) == null ? void 0 : Y.angle) == null ? void 0 : fe.value) || 0) * Li;
    } else C.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${C.strokeStyle} 0%, ${C.fillStyle} 45%, rgba(0,0,0,0) 100%)` : C.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = _, r.style.border = D, r.style.boxShadow = R, r.style.background = g, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(C.x - F)}px, ${Math.round(C.y - M)}px) rotate(${A}deg)`;
  }
  function x() {
    var xe;
    if (!n || !i) return;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const y = de(le), _ = Fn[y] || Fn[Dr], A = Number(t.brushSizes[y] ?? 10), g = Math.max(1, A) * Math.max(0.1, Number(_.sizeScale ?? 1)), D = Math.max(6, g * 0.5), R = le === "eraser", q = C === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : R ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(t.paintColor), E = C === "mask" ? vr(q, 0.22) : R ? "rgba(255,255,255,0.14)" : vr(q, Oe(Math.max(0.18, Number(q.a ?? 1) * 0.34), 0.18, 0.56)), F = C === "mask" ? vr(q, 0.96) : R ? "rgba(255,255,255,0.72)" : vr(q, Oe(Math.max(0.56, Number(q.a ?? 1) * 0.96), 0.56, 1));
    let M = D * 2, H = D * 2, Y = "999px", fe = 0, be = E;
    const ke = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (C === "mask")
      be = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const K = Math.max(1, Number((_ == null ? void 0 : _.aspect) ?? 1));
      M = Math.max(16, D * 2 * K), H = Math.max(10, D * 2), Y = `${Math.min(8, H * 0.42)}px`, fe = Number(((xe = _ == null ? void 0 : _.angle) == null ? void 0 : xe.value) || 0) * Li;
    } else le === "brush" ? be = `radial-gradient(circle at 50% 50%, ${F} 0%, ${E} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (M = Math.max(18, D * 1.8), H = M, be = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${F} 43%, ${F} 58%, rgba(0,0,0,0) 59%)`) : R && (be = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(M)}px`, i.style.height = `${Math.round(H)}px`, i.style.borderRadius = Y, i.style.background = be, i.style.border = `1px solid ${ke}`, i.style.boxShadow = `0 0 0 1px ${ce}`, i.style.transform = `rotate(${fe}deg)`, B && (clearTimeout(B), B = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function v() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), B && clearTimeout(B), B = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), B = 0;
    }, 180));
  }
  function w(C, le, y, _) {
    const A = de(le), g = Fn[A] || Fn[Dr], D = t.brushSizes[A] ?? 10, R = Math.max(1, D) * Math.max(0.1, g.sizeScale ?? 1), q = ye(_, R), E = y.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), F = {
      id: io(C),
      actionGroupId: io("ag"),
      targetSpace: _ && typeof _ == "object" ? { ..._, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: R,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: q.radiusModel,
      radiusValue: q.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: E.map((M) => ({ ...M })),
        points: E.map((M) => ({ ...M }))
      }
    };
    return Ap(F, g), t.mode, Number(g.aspect ?? 1), Number(F.aspect ?? 1), String(F.stampKind || ""), Number(F.size || 0), String(F.radiusModel || ""), Number(F.radiusValue || 0), { ...F.targetSpace }, F;
  }
  function Z(C, le, y, _) {
    const A = y.map((q) => ({
      ...q,
      t: Number((q == null ? void 0 : q.t) || 0),
      widthScale: Number.isFinite(Number(q == null ? void 0 : q.widthScale)) ? Math.max(0, Number(q.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(q == null ? void 0 : q.pressureLike)) ? Math.max(0, Number(q.pressureLike)) : 1
    })), g = de(le), D = Fn[g] || Fn[Dr], R = {
      id: io(C),
      actionGroupId: io("ag"),
      targetSpace: _ && typeof _ == "object" ? { ..._, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: A.map((q) => ({ ...q }))
      }
    };
    return Ap(R, D), t.mode, Number(D.aspect ?? 1), Number(R.aspect ?? 1), String(R.stampKind || ""), { ...R.targetSpace }, R;
  }
  function X(C) {
    const le = o.painting || (o.painting = xo(null)), y = le[C] || (le[C] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function O(C, le, y = performance.now()) {
    let _;
    if (t.mode === "frame") {
      const E = f();
      if (!E || (_ = J(le, E, y), !_)) return !1;
    } else
      _ = I(le, y);
    if (!_) return !1;
    const A = C.stroke.geometry.rawPoints || C.stroke.geometry.points, g = C.stroke.geometry.points, D = A[A.length - 1];
    if (D) {
      const E = Math.abs(Number(_.u ?? _.x ?? 0) - Number(D.u ?? D.x ?? 0)), F = Math.abs(Number(_.v ?? _.y ?? 0) - Number(D.v ?? D.y ?? 0));
      if (E < 15e-4 && F < 15e-4) return !1;
    }
    const R = {
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    A.push({ ...R }), g.push({ ...R });
    const q = p(C);
    if (q) {
      const E = t.paintEngine.ensureTarget(q);
      t.paintEngine.appendStrokePoint(E, Number(R.u ?? 0), Number(R.v ?? 0), C.stroke);
    }
    return !0;
  }
  function S(C, le, y = performance.now()) {
    var D, R;
    let _;
    if (t.mode === "frame") {
      const q = f();
      if (!q) return !1;
      _ = J(le, q, y);
    } else
      _ = I(le, y);
    const A = (R = (D = C == null ? void 0 : C.stroke) == null ? void 0 : D.geometry) == null ? void 0 : R.points;
    if (!_ || !Array.isArray(A)) return !1;
    const g = A[A.length - 1];
    if (g) {
      const q = Math.abs(Number(_.u ?? _.x ?? 0) - Number(g.u ?? g.x ?? 0)), E = Math.abs(Number(_.v ?? _.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (q < 15e-4 && E < 15e-4) return !1;
    }
    return A.push({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function W(C) {
    var K, pe, z, ae, $;
    const le = (C == null ? void 0 : C.stroke) || null;
    if (!le || (C == null ? void 0 : C.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    oe();
    const y = p(), _ = c(y.width, y.height);
    if (!L(_, le, { w: y.width, h: y.height })) return !1;
    const A = ((pe = (K = _.ctx) == null ? void 0 : K.getImageData(0, 0, y.width, y.height)) == null ? void 0 : pe.data) || null;
    if (!A) return !1;
    const g = new Map(h().map((U) => [String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim(), U ? { ...U } : null])), D = [], R = [], q = [...m().filter((U) => String((U == null ? void 0 : U.layerKind) || "paint") !== "paint")];
    let E = !1, F = k().reduce((U, j) => Math.max(U, Number((j == null ? void 0 : j.z_index) || 0)), -1) + 1;
    function M(U, j, N, Q = 8) {
      let P = j, re = N, ee = -1, ge = -1;
      for (let Pe = 0; Pe < N; Pe += 1)
        for (let Ee = 0; Ee < j; Ee += 1)
          U[(Pe * j + Ee) * 4 + 3] <= Q || (Ee < P && (P = Ee), Pe < re && (re = Pe), Ee > ee && (ee = Ee), Pe > ge && (ge = Pe));
      return ee < P || ge < re ? null : { minX: P, minY: re, maxX: ee, maxY: ge };
    }
    const H = M(A, y.width, y.height, 8);
    if (!H) return !1;
    function Y(U, j) {
      return !U || !j ? !1 : !(U.maxX < j.minX || j.maxX < U.minX || U.maxY < j.minY || j.maxY < U.minY);
    }
    function fe(U, j) {
      const N = d((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "", "paint", j);
      if (!N) return null;
      const Q = N.centerUv.u - N.halfW, P = N.centerUv.u + N.halfW, re = N.centerUv.v - N.halfH, ee = N.centerUv.v + N.halfH, ge = y.width, Pe = y.height;
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * ge),
        maxX: Math.ceil((P % 1 + 1) % 1 * ge),
        minY: Math.floor(Oe(re, 0, 1) * Pe),
        maxY: Math.ceil(Oe(ee, 0, 1) * Pe),
        wraps: P - Q >= 1 || Q < 0 || P > 1
      };
    }
    function be(U) {
      const j = (U == null ? void 0 : U.bbox) || null;
      if (!j) return null;
      const N = (U == null ? void 0 : U.transform) || {}, Q = y.width, P = y.height, re = Number(j.u0 || 0) + Number(N.du || 0), ee = Number(j.u1 || 0) + Number(N.du || 0), ge = Number(j.v0 || 0) + Number(N.dv || 0), Pe = Number(j.v1 || 0) + Number(N.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * Q),
        maxX: Math.ceil((ee % 1 + 1) % 1 * Q),
        minY: Math.floor(Oe(ge, 0, 1) * P),
        maxY: Math.ceil(Oe(Pe, 0, 1) * P),
        wraps: ee - re >= 1 || re < 0 || ee > 1
      };
    }
    function ke(U) {
      return U ? U.wraps ? Y(H, { minX: 0, maxX: U.maxX, minY: U.minY, maxY: U.maxY }) || Y(H, { minX: U.minX, maxX: y.width - 1, minY: U.minY, maxY: U.maxY }) : Y(H, U) : !0;
    }
    function ce(U) {
      if (!U) return { touched: !1, canvas: null };
      const j = c(y.width, y.height, { readback: !0 });
      j.ctx.drawImage(U, 0, 0);
      const N = j.ctx.getImageData(0, 0, y.width, y.height);
      j.ctx.save(), j.ctx.globalCompositeOperation = "destination-out", j.ctx.drawImage(_.canvas, 0, 0), j.ctx.restore();
      const Q = j.ctx.getImageData(0, 0, y.width, y.height);
      for (let P = 0; P < y.width * y.height; P += 1) {
        if (A[P * 4 + 3] <= 8) continue;
        const ee = N.data[P * 4 + 3], ge = Q.data[P * 4 + 3];
        if (ee > ge)
          return { touched: !0, canvas: j.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function xe(U, j, N) {
      const Q = Number(N == null ? void 0 : N.z_index), P = l(U, j, N).map((re, ee) => ({
        ...re,
        z_index: Number.isFinite(Q) ? Q + ee * 1e-3 : F + ee * 1e-3
      }));
      return P.length && (F = Math.max(F, ...P.map((re) => Number((re == null ? void 0 : re.z_index) || 0))) + 1), P;
    }
    for (const U of h()) {
      const j = String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim();
      if (!j) continue;
      const N = b(j, "paint");
      if (!ke(fe(U, N))) {
        R.push(U), D.push(...N);
        continue;
      }
      const Q = ((ae = (z = t.paintEngine) == null ? void 0 : z.getGroupTarget) == null ? void 0 : ae.call(z, j)) || null, P = (($ = Q == null ? void 0 : Q.committedPaint) == null ? void 0 : $.canvas) || null;
      if (!P) {
        R.push(U), D.push(...N);
        continue;
      }
      const re = ce(P);
      if (!re.touched || !re.canvas) {
        R.push(U), D.push(...N);
        continue;
      }
      E = !0;
      const ee = xe(re.canvas, "paint", g.get(j) || U || {});
      q.push(...ee);
    }
    for (const U of m().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint")) {
      if (!ke(be(U))) {
        q.push(U);
        continue;
      }
      const j = s(U, null);
      if (!j) {
        q.push(U);
        continue;
      }
      const N = ce(j);
      if (!N.touched || !N.canvas) {
        q.push(U);
        continue;
      }
      E = !0;
      const Q = xe(N.canvas, "paint", U);
      q.push(...Q);
    }
    return E ? (o.painting.paint.strokes = D, o.painting.groups = R.sort((U, j) => Number((U == null ? void 0 : U.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), o.painting.raster_objects = q.sort((U, j) => Number((U == null ? void 0 : U.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ne(C) {
    var D, R, q, E, F;
    if ((((R = (D = C.stroke) == null ? void 0 : D.geometry) == null ? void 0 : R.rawPoints) || ((E = (q = C.stroke) == null ? void 0 : q.geometry) == null ? void 0 : E.points) || []).length >= 1) {
      Se(C);
      const M = p(C);
      M && (String(((F = C.stroke) == null ? void 0 : F.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(M) : t.paintEngine.commitActiveStroke(C.stroke, M)), C._hasCommittedSegments = !0;
    }
    const y = C.stroke, _ = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, A = w(C.layerKind, y.toolKind, [], _);
    A.actionGroupId = y.actionGroupId, C.stroke = A;
    const g = p(C);
    g && t.paintEngine.beginStroke(A, g);
  }
  function me(C) {
    var D, R;
    if ((((R = (D = C.stroke) == null ? void 0 : D.geometry) == null ? void 0 : R.points) || []).length >= 3) {
      Se(C);
      const q = p(C);
      q && t.paintEngine.commitActiveStroke(C.stroke, q), C._hasCommittedSegments = !0;
    }
    const y = C.stroke, _ = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, A = Z(C.layerKind, y.toolKind, [], _);
    A.actionGroupId = y.actionGroupId, C.stroke = A;
    const g = p(C);
    g && t.paintEngine.beginStroke(A, g);
  }
  function Se(C) {
    var g, D, R, q;
    const le = ((g = C == null ? void 0 : C.stroke) == null ? void 0 : g.geometry) || null;
    if (!le) return !1;
    const y = String(((D = C == null ? void 0 : C.stroke) == null ? void 0 : D.toolKind) || "pen");
    if (C.layerKind === "paint" && y === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = G(le.rawPoints || le.points || [], C.stroke.targetSpace, !0)), W(C);
    const _ = C.layerKind === "paint" && y !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (_ && u((R = C.stroke) == null ? void 0 : R.actionGroupId), X(C.layerKind).push(C.stroke), !0);
    const A = le.rawPoints || le.points || [];
    return A.length < 1 ? !1 : (le.processedPoints = G(A, C.stroke.targetSpace, !0), _ && u((q = C.stroke) == null ? void 0 : q.actionGroupId), X(C.layerKind).push(C.stroke), !0);
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
        getActivePaintTargetDescriptor: p,
        getDisplayListObjects: k,
        getPaintingGroupList: h,
        getRasterObjectList: m,
        getStrokeGroupStrokes: b,
        processFreehandPoints: G,
        rasterizeStrokeToSurface: L,
        rebuildPaintEngineIfNeeded: oe,
        screenPosToErpPoint: I,
        screenPosToFrameAsErpPoint: J,
        supportsFramePainting: T
      } = C);
    },
    isActiveLassoTool: _e,
    supportsErpPainting: he,
    getBrushPresetIdForTool: de,
    isPaintCursorEnabled: we,
    isActivePaintCursorVisible: ue,
    setPointerPos: V,
    syncPaintCursorElement: te,
    showPaintSizePreview: x,
    hidePaintSizePreview: v,
    buildFreehandStrokeRecord: w,
    buildLassoFillStrokeRecord: Z,
    getPaintingLayerList: X,
    appendPaintPoint: O,
    appendLassoPoint: S,
    _segmentFrameStroke: ne,
    _segmentFrameLassoFill: me,
    commitPaintInteraction: Se
  };
}
function BA(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye;
  function de() {
    return he().reverse();
  }
  function we(v) {
    var Z;
    if (n && t.mode === "frame") {
      const X = s(), O = l(X);
      if (!X || !O || !(Number((v == null ? void 0 : v.x) || 0) >= Number(O.x || 0) && Number((v == null ? void 0 : v.x) || 0) <= Number(O.x || 0) + Number(O.w || 0) && Number((v == null ? void 0 : v.y) || 0) >= Number(O.y || 0) && Number((v == null ? void 0 : v.y) || 0) <= Number(O.y || 0) + Number(O.h || 0))) return null;
      const W = B(v, X, performance.now()), ne = W ? o(W) : null;
      if (ne)
        for (const Se of a()) {
          if (!L(Se)) continue;
          const C = ye(Se, ne);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const le = T(Se);
            if (le != null && le.visible) return { item: Se, geom: le };
          }
        }
      const me = c(!1).slice().sort((Se, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((Se == null ? void 0 : Se.z_index) || 0));
      for (const Se of me) {
        if (Se.type === "strokeGroup") {
          const y = f(J("paint", Se.actionGroupId || Se.id || ""));
          if (!y) continue;
          const _ = T(y);
          if (!(_ != null && _.visible)) continue;
          const A = Array.isArray(_.strokePaths) ? _.strokePaths : [];
          for (const g of A) {
            const D = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
            if (!D.length) continue;
            if (g.closed && D.length >= 3 && Qr(v, D)) return { item: y, geom: _ };
            const R = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
            for (let q = 0; q < D.length - 1; q += 1)
              if (zc(v, D[q], D[q + 1]) <= R * R) return { item: y, geom: _ };
            if (D.length === 1 && qo(v, D[0]) <= R * R) return { item: y, geom: _ };
          }
          continue;
        }
        if (Se.type === "rasterObject") {
          const y = d(I(((Z = Se.item) == null ? void 0 : Z.id) || Se.id || ""));
          if (!y) continue;
          const _ = T(y);
          if (p(y, _, v, W)) return { item: y, geom: _ };
          continue;
        }
        const C = Se.item;
        if (!C || !L(C) || !ne) continue;
        const le = ye(C, ne);
        if (le && Number(le.x) >= 0 && Number(le.x) <= 1 && Number(le.y) >= 0 && Number(le.y) <= 1) {
          const y = T(C);
          if (y != null && y.visible) return { item: C, geom: y };
        }
      }
      if (!ne) return null;
      for (const Se of de()) {
        const C = ye(Se, ne);
        if (!C || !(Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1)) continue;
        const le = T(Se);
        if (le != null && le.visible) return { item: Se, geom: le };
      }
      return null;
    }
    const w = [
      ...c(!1).slice().sort((X, O) => Number((O == null ? void 0 : O.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)).map((X) => {
        var O;
        return X.type === "strokeGroup" ? f(J("paint", X.actionGroupId || X.id || "")) : X.type === "rasterObject" ? d(I(((O = X.item) == null ? void 0 : O.id) || X.id || "")) : X.item;
      }).filter(Boolean),
      ...de(),
      ...n ? a().filter((X) => G(X)) : []
    ];
    for (const X of w) {
      if (oe(X)) {
        const S = T(X);
        if (!(S != null && S.visible)) continue;
        const W = Array.isArray(S.strokePaths) ? S.strokePaths : [];
        for (const ne of W) {
          const me = Array.isArray(ne == null ? void 0 : ne.points) ? ne.points : [];
          if (!me.length) continue;
          if (ne.closed && me.length >= 3 && Qr(v, me)) return { item: X, geom: S };
          const Se = Math.max(8, Number((ne == null ? void 0 : ne.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < me.length - 1; C += 1)
            if (zc(v, me[C], me[C + 1]) <= Se * Se) return { item: X, geom: S };
          if (me.length === 1 && qo(v, me[0]) <= Se * Se) return { item: X, geom: S };
        }
        continue;
      }
      if (b(X)) {
        const S = T(X);
        if (!(S != null && S.visible)) continue;
        if (p(X, S, v)) return { item: X, geom: S };
        continue;
      }
      const O = T(X);
      if (O.visible && Qr(v, O.corners))
        return { item: X, geom: O };
    }
    return null;
  }
  function ue(v, w, Z = null) {
    if (!v || !v.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (L(Z)) return _u(v, w);
    if (v.kind === "strokeGroup") {
      const X = v.corners.findIndex((S) => qo(S, w) <= 121);
      if (X >= 0) {
        const S = v.corners[X], W = S.x - v.center.x, ne = S.y - v.center.y, me = W * ne >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: X, cursor: me };
      }
      const O = Array.isArray(v.strokePaths) ? v.strokePaths : [];
      for (const S of O) {
        const W = Array.isArray(S == null ? void 0 : S.points) ? S.points : [];
        if (S.closed && W.length >= 3 && Qr(w, W)) return { kind: "move", cursor: "default" };
        const ne = Math.max(8, Number((S == null ? void 0 : S.lineWidth) || 0) * 0.5 + 6);
        for (let me = 0; me < W.length - 1; me += 1)
          if (zc(w, W[me], W[me + 1]) <= ne * ne) return { kind: "move", cursor: "default" };
      }
      return Qr(w, v.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (v.kind === "rasterObject") {
      const X = v.corners.findIndex((O) => qo(O, w) <= 121);
      if (X >= 0) {
        const O = v.corners[X], S = O.x - v.center.x, W = O.y - v.center.y, ne = S * W >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: X, cursor: ne };
      }
      return Qr(w, v.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Dw(v, w, {
      edges: i === "cutout" || G(Z),
      resize: !(G(Z) && h()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function V(v, w) {
    return {
      x0: Math.min(Number((v == null ? void 0 : v.x) || 0), Number((w == null ? void 0 : w.x) || 0)),
      y0: Math.min(Number((v == null ? void 0 : v.y) || 0), Number((w == null ? void 0 : w.y) || 0)),
      x1: Math.max(Number((v == null ? void 0 : v.x) || 0), Number((w == null ? void 0 : w.x) || 0)),
      y1: Math.max(Number((v == null ? void 0 : v.y) || 0), Number((w == null ? void 0 : w.y) || 0))
    };
  }
  function ie(v, w) {
    return !!v && !!w && Number(w.x) >= Number(v.x0) && Number(w.x) <= Number(v.x1) && Number(w.y) >= Number(v.y0) && Number(w.y) <= Number(v.y1);
  }
  function te(v, w) {
    if (!v || !(w != null && w.visible) || !Array.isArray(w.corners)) return !1;
    if (w.corners.some((O) => ie(v, O))) return !0;
    const Z = (Number(v.x0) + Number(v.x1)) * 0.5, X = (Number(v.y0) + Number(v.y1)) * 0.5;
    return !!Qr({ x: Z, y: X }, w.corners);
  }
  function x(v) {
    if (_e(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ve("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ve("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ve("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ve("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ve("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ve(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ve("grabbing") : ve("default");
      return;
    }
    if (k()) {
      ve("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ve(JN);
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
    const w = u(), Z = w ? T(w) : null, X = w ? m(w) : !1, O = X ? { kind: "none", cursor: "default" } : ue(Z, v, w);
    if (!X && O.kind !== "none") {
      ve(O.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && we(v)) {
      ve("default");
      return;
    }
    ve(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(v) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: p,
        isActivePaintCursorVisible: k,
        isErpCamera: h,
        isItemLocked: m,
        isRasterObjectItem: b,
        isShotItem: G,
        isStickerItem: L,
        isStrokeGroupItem: oe,
        makeRasterObjectSelectionId: I,
        makeStrokeGroupSelectionId: J,
        objectGeom: T,
        screenPosToFrameAsErpPoint: B,
        setCanvasCursor: ve,
        syncPaintCursorElement: _e,
        upstreamSkyStickers: he,
        worldDirToFrameLocalPoint: ye
      } = v);
    },
    hitObjectAt: we,
    handleHit: ue,
    rectFromPoints: V,
    rectIntersectsGeom: te,
    updateCursor: x
  };
}
function YA(e) {
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
  let f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de = !1;
  function we() {
    return de;
  }
  function ue() {
    if (!o) return;
    if (de = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || oe() && T()) {
      const S = ie();
      de = S.visible, te(S);
      return;
    }
    const w = b(), Z = G();
    if (!w && Z.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const X = L(), O = oA({
      type: d,
      selected: w,
      selectedItems: Z,
      selectedKind: X,
      geom: Z.length > 1 ? m(Z) : ye(w),
      allLocked: f(Z),
      anyLocked: Z.some((S) => B(S)),
      selectedLocked: B(w),
      activeAspect: ve(w) && I() ? So : Vr(w),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: J,
      isStickerHidden: he,
      canRestoreSelectedToInitial: p,
      iconSet: Ke,
      cameraShot: t,
      coverage: a.coverage,
      upstream: V(Z)
    });
    te(O);
  }
  function V(w) {
    const Z = w.filter(Xt);
    return Z.length ? { lockable: Z.every(Ps) } : null;
  }
  function ie() {
    const w = _e() && !n.interaction ? h().space : null;
    if (!(w != null && w.gizmo)) return { visible: !1 };
    const Z = k(), X = [...w.stickers, ...w.upstreamStickers].find((ne) => ne.id === n.worldSelectedId), S = (X ? xd(X) : [w.gizmo.transform.position]).map((ne) => Ss(Z, ne, r.width, r.height)).filter(Boolean), W = BS(Z, w.gizmo.transform.position, w.gizmo.mode, r.width, r.height);
    return sA({ corners: S, gizmoBox: W, gizmoMode: w.gizmo.mode, camera: oe() });
  }
  function te(w) {
    var W, ne;
    if (!w.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Z = (me, Se) => aA(w.anchor, me, Se, r.width, r.height), X = Math.max(1, Number(((W = n.menuSize) == null ? void 0 : W.w) || 220)), O = Math.max(1, Number(((ne = n.menuSize) == null ? void 0 : ne.h) || 40)), S = Z(X, O);
    if (!S) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: S.left,
      top: S.top,
      items: w.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const me = o.getBoundingClientRect(), Se = Math.round(Number((me == null ? void 0 : me.width) || 0)) || 220, C = Math.round(Number((me == null ? void 0 : me.height) || 0)) || 40;
      n.menuSize = { w: Se, h: C, measured: !0 };
      const le = Z(Se, C);
      le && (u.selectionMenu.left = le.left, u.selectionMenu.top = le.top);
    });
  }
  function x() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function v(w) {
    if (!c || !w || !w.isConnected) return;
    const Z = String(w.getAttribute("data-tip") || "").trim();
    if (!Z) return;
    u.tooltip.text = Z, u.tooltip.visible = !0;
    const X = w;
    i.requestFrame(() => {
      var D, R;
      if (l.target !== X || !c || !(X != null && X.isConnected)) return;
      const O = s.getBoundingClientRect(), S = X.getBoundingClientRect(), W = 8, ne = 12, me = Math.round(Number(((D = c.getBoundingClientRect()) == null ? void 0 : D.width) || 0)) || 100, Se = Math.round(Number(((R = c.getBoundingClientRect()) == null ? void 0 : R.height) || 0)) || 24, C = !!X.closest(".pano-floating-left"), le = !!X.closest(".pano-frame-rail"), y = !!X.closest(".pano-paint-footer") || !!X.closest(".pano-paint-color-float");
      let _ = "", A = S.left - O.left + S.width * 0.5 - me * 0.5, g = S.top - O.top - Se - ne;
      if (X.closest(".pano-floating-top") && (g = S.bottom - O.top + ne), C)
        _ = "tool-rail", A = S.right - O.left + 10, g = S.top - O.top + S.height * 0.5 - Se * 0.5, A = Oe(A, W, Math.max(W, O.width - me - W)), g = Oe(g, W, Math.max(W, O.height - Se - W));
      else if (le)
        _ = "frame-rail", A = S.left - O.left - me - 10, g = S.top - O.top + S.height * 0.5 - Se * 0.5, A = Oe(A, W, Math.max(W, O.width - me - W)), g = Oe(g, W, Math.max(W, O.height - Se - W));
      else if (y) {
        _ = "footer";
        const q = X.closest(".pano-paint-footer"), E = q ? q.getBoundingClientRect() : S;
        A = E.left - O.left + E.width * 0.5 - me * 0.5, g = E.bottom - O.top + 5, A = Oe(A, W, Math.max(W, O.width - me - W)), g = Math.max(W, g);
      }
      A = Oe(A, W, Math.max(W, O.width - me - W)), g = Math.max(W, g), u.tooltip.left = A, u.tooltip.top = g, u.tooltip.variant = _, u.tooltip.visible = !0;
    });
  }
  return {
    connect(w) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: p,
        currentSpaceCamera: k,
        editorViewInput: h,
        getMultiSelectionGeom: m,
        getSelected: b,
        getSelectedItems: G,
        getSelectedKind: L,
        isCameraSelected: oe,
        isErpCamera: I,
        isExternalSticker: J,
        isFreeSpaceView: T,
        isItemLocked: B,
        isShotItem: ve,
        isSpaceView: _e,
        isStickerHidden: he,
        objectGeom: ye
      } = w);
    },
    isWorldMenuShown: we,
    updateSelectionMenu: ue,
    hideTooltip: x,
    showTooltipFor: v
  };
}
function qA(e) {
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
    timeline: p,
    type: k,
    viewController: h
  } = e;
  let m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se, C, le, y, _, A, g, D, R, q, E, F, M, H, Y, fe, be, ke, ce, xe, K, pe, z, ae, $, U, j, N, Q, P, re, ee, ge, Pe, Ee, Re, We, Ge, Ce, ze, se, Ie, Ae, Fe, je, He, Ue, ut, yt, Dt, At, An, qe, ln, Ut, hi, Br, mi, sn, bn, Yr, pr, tr, Ts, Hi, No, Ao, Ds, Ls, Rs, Gi, Mt, Wn, nr, Co, Rn, Vs, $s, zs, qr = null;
  function Jl(De) {
    p.selection && (p.selection = null, Rs());
    const Te = Fe(De);
    qr = Te, At(Te, !0), de(), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0;
    const Ne = z(), vt = pe(), tt = Ne || vt ? qw(Co(), De) : null;
    if (vt && tt) {
      De.preventDefault(), tt === "look" ? bn(Te, De.pointerId) : sn(tt, Te, De.pointerId);
      return;
    }
    if (tt === "look") {
      De.preventDefault();
      const Xe = je(De);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, De.pointerId, performance.now()), Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (tt) {
      De.preventDefault(), Yr(tt, Te, De.pointerId);
      return;
    }
    if ((Ne || vt) && De.button !== 0) {
      De.preventDefault();
      return;
    }
    if (De.button === 1) {
      if (De.preventDefault(), n.mode === "frame") {
        const Xe = ne();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Te,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Te : je(De);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, h.startDrag(Xe.x, Xe.y, De.pointerId, performance.now());
      }
      Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (De.button !== 0) return;
    if (n.mode === "frame" && (De.altKey || De.shiftKey) && !a) {
      const Xe = ne(), Ye = y(Xe);
      if (!Xe || Xe.locked === !0 || !Ye) return;
      const Qe = Vg({
        frame: Ye,
        point: Te,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: De.shiftKey,
        altKey: De.altKey,
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
      }, t.setPointerCapture(De.pointerId), De.preventDefault(), Ds(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      bn(Te, De.pointerId), De.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && Oo(De, Te);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (Ts() || Hi())) {
      if (!Ee()) return;
      tr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ye = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Hi() ? ne() : null, Bt = { kind: "ERP_GLOBAL" }, Nt = Qe ? Ue(Te, Qe, performance.now()) : He(Te, performance.now());
      if (!Nt) {
        Mt(Te);
        return;
      }
      n.interaction = {
        kind: Ye === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: io("live"),
        stroke: Ye === "lasso_fill" ? _e(Xe, Ye, [Nt], Bt) : ve(Xe, Ye, [Nt], Bt)
      }, xe();
      const Cr = me(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Ki = n.paintEngine.ensureTarget(Cr), Wi = Number((Nt == null ? void 0 : Nt.u) ?? (Nt == null ? void 0 : Nt.x) ?? 0), Ui = Number((Nt == null ? void 0 : Nt.v) ?? (Nt == null ? void 0 : Nt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ki, Wi, Ui, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      Mt(Te), t.setPointerCapture(De.pointerId), Ae();
      return;
    }
    const Pt = M(), Je = F(), et = Pt.length > 1 ? A(Pt) : Je ? Pe(Je) : null;
    if (n.primaryTool === "cursor" && (De.ctrlKey || De.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Te, current: Te }, Mt(Te), t.setPointerCapture(De.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && he() && z() && mi(De, Te) || n.primaryTool === "cursor" && c && N() && js(De, Te)) return;
    if (Pt.length > 1 && (et != null && et.visible)) {
      if ((Pt.some((Ye) => ae(Ye)) ? { kind: "none" } : be(et, Te)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: Pt.map((Ye) => Ye),
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: Pt.filter((Ye) => Q(Ye)).map((Ye) => ({
            id: String(Ye.id || ""),
            yaw_deg: Number(Ge(Ye).yaw_deg || 0),
            pitch_deg: Number(Ge(Ye).pitch_deg || 0),
            center: (() => {
              var Bt, Nt;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Nt = Qe.center) == null ? void 0 : Nt.y) || 0) } : { x: Te.x, y: Te.y };
            })()
          })),
          strokeSnapshots: Pt.filter((Ye) => P(Ye)).map((Ye) => ({
            id: String(Ye.actionGroupId || Ye.id || ""),
            layerKind: String(Ye.layerKind || "paint"),
            snapshot: dn(Y(Ye.actionGroupId, Ye.layerKind)),
            frameSnapshot: dn(Z(Ye.actionGroupId, Ye.layerKind)),
            center: (() => {
              var Bt, Nt;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Nt = Qe.center) == null ? void 0 : Nt.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: H(Ye.actionGroupId, Ye.layerKind)
          })),
          rasterSnapshots: Pt.filter((Ye) => $(Ye)).map((Ye) => ({
            id: Re(Ye.rasterObjectId || Ye.id || ""),
            snapshot: dn(R().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Re(Ye.rasterObjectId || Ye.id || ""))),
            center: (() => {
              var Bt, Nt;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Bt = Qe.center) == null ? void 0 : Bt.x) || 0), y: Number(((Nt = Qe.center) == null ? void 0 : Nt.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: D(Ye)
          }))
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = ae(Je) ? { kind: "none" } : be(et, Te, Je);
      if (Xe.kind === "scale") {
        n.interaction = P(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(Z(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : $(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(R().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Re(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = P(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x),
          snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(Z(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ge(Je).rot_deg || Ge(Je).roll_deg || 0),
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x)
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (P(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = ne();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ye,
            snapshot: dn(Y(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: dn(Z(Je.actionGroupId, Je.layerKind))
          }, Mt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        if ($(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = ne();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : He(Te, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ye,
            snapshot: dn(R().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Re(Je.rasterObjectId || Je.id || "")))
          }, Mt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y }
        }, Mt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    }
    const st = ce(Te);
    if (st) {
      const Xe = n.selectedId !== st.item.id;
      if (Xe && n.selectedId && (Ce(), ie()), An(st.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && nr(), Wn(), Ae(), ae(st.item)) {
        Mt(Te);
        return;
      }
      n.interaction = {
        kind: P(st.item) ? "move_stroke_group" : $(st.item) ? "move_raster_object" : "move",
        item: st.item,
        offset: { x: Te.x - st.geom.center.x, y: Te.y - st.geom.center.y },
        startUv: P(st.item) || $(st.item) ? n.mode === "frame" ? (() => {
          const Ye = ne();
          return Ye ? Ue(Te, Ye, performance.now()) : null;
        })() : He(Te, performance.now()) : null,
        snapshot: P(st.item) ? dn(Y(st.item.actionGroupId, st.item.layerKind)) : $(st.item) ? dn(R().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Re(st.item.rasterObjectId || st.item.id || ""))) : null,
        frameSnapshot: P(st.item) ? dn(Z(st.item.actionGroupId, st.item.layerKind)) : null
      }, Mt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    const Vn = !!n.selectedId;
    Vn && (Ce(), ie()), we(), Vn && nr(), Wn(), Ae(), n.mode === "pano" && Oo(De, Te);
  }
  function Xr(De, Te) {
    return i.gizmoPointer(De, te(), Te.x, Te.y, t.width, t.height);
  }
  function js(De, Te) {
    var et, st;
    const Ne = (et = w().space) == null ? void 0 : et.gizmo;
    if (Ne && Xr("hover", Te) !== null && Xr("down", Te))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Ne.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Ne.transform,
        base: Wr(Dt(), n.frame),
        changed: !1
      }, t.setPointerCapture(De.pointerId), Mt(Te), !0;
    const vt = M(), tt = F(), Pt = vt.length > 1 ? vt.some((Vn) => ae(Vn)) ? "none" : be(A(vt), Te).kind : tt && !ae(tt) ? be(Pe(tt), Te, tt).kind : "none";
    if (Pt !== "none" && Pt !== "move") return !1;
    const Je = i.pickSticker(te(), Te.x, Te.y, t.width, t.height);
    return ((st = pr(Je)) == null ? void 0 : st.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), ie()), yt(Je), nr(), Wn(), Ao(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(De.pointerId), !0);
  }
  function Io(De) {
    var vt;
    const Ne = !!(n.worldSelectedId || K()) && n.primaryTool === "cursor" && N() && !!((vt = w().space) != null && vt.gizmo) ? Xr("hover", De) : null;
    Ne !== n.gizmoAxis && (n.gizmoAxis = Ne, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function Zl(De, Te) {
    const Ne = Xr("move", Te);
    if (Ne && De.camera) {
      for (const [tt, Pt] of Object.entries(Yf(De.mode, De.base, De.start, Ne))) mn(u.camera, tt, n.frame, Pt);
      No(), De.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = pr(De.id);
    !Ne || !vt || (mS(vt, n.frame, Yf(De.mode, De.base, De.start, Ne)), De.changed = !0, re(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Eo(De) {
    n.interaction = null, n.gizmoAxis = null, De.kind === "world_gizmo" && (Xr("up", n.pointerPos), l.backgroundDirty = !0, De.changed && (Ce(), ue(), nr())), Mt(n.pointerPos), Ae();
  }
  function Oo(De, Te) {
    if (z()) {
      const vt = Co().emptyLeft;
      vt && Yr(vt, Te, De.pointerId);
      return;
    }
    const Ne = je(De);
    n.interaction = { kind: "view", last: Ne, lastTs: performance.now() }, h.startDrag(Ne.x, Ne.y, De.pointerId, performance.now()), Mt(Te), t.setPointerCapture(De.pointerId);
  }
  function Hs(De, Te) {
    if (!f || !We.playing || (We.stop(), De.kind === "frame_pan")) return;
    if (De.kind === "frame_orbit") {
      const tt = X();
      tt && (De.pivot = W(tt, S(tt), Te));
      return;
    }
    if (De.kind === "world_gizmo") {
      const tt = pr(De.id);
      De.camera ? De.base = x() : tt && (De.base = Wr(tt, n.frame));
      return;
    }
    if (De.kind === "move_multi") {
      const tt = A(De.items);
      if (!(tt != null && tt.visible)) return;
      De.offset = { x: Te.x - tt.center.x, y: Te.y - tt.center.y }, De.startCenter = { x: tt.center.x, y: tt.center.y };
      for (const Pt of De.stickerSnapshots) {
        const Je = De.items.find((st) => String((st == null ? void 0 : st.id) || "") === Pt.id), et = Je ? Pe(Je) : null;
        et != null && et.visible && (Pt.yaw_deg = Number(Ge(Je).yaw_deg || 0), Pt.pitch_deg = Number(Ge(Je).pitch_deg || 0), Pt.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(De.kind)) return;
    const Ne = Pe(De.item);
    if (!(Ne != null && Ne.visible)) return;
    const vt = Ge(De.item);
    if (De.kind === "move") {
      De.offset = { x: Te.x - Ne.center.x, y: Te.y - Ne.center.y };
      return;
    }
    if (De.center = Ne.center, De.kind === "rotate") {
      De.startRot = Number(vt.rot_deg || vt.roll_deg || 0), De.startAng = Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x);
      return;
    }
    De.startDist = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)), De.startHFOV = Number(vt.hFOV_deg || 20), De.startVFOV = Number(vt.vFOV_deg || 20);
  }
  function Gs(De) {
    var vt, tt, Pt, Je, et, st, Vn, Xe, Ye, Qe, Bt, Nt, Cr, Ki, Wi, Ui, Bs, Ys, qs, Xs, Js, Zs;
    const Te = Fe(De);
    if (At(Te, !0), !n.interaction) {
      Io(Te), Mt(Te);
      return;
    }
    Mt(Te);
    const Ne = n.interaction;
    if (qr && (Te.x !== qr.x || Te.y !== qr.y)) {
      const lt = qr;
      qr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Ne.kind) || Hs(Ne, lt);
    }
    if (Ne.kind !== "world_select") {
      if (Ne.kind === "world_gizmo") {
        Zl(Ne, Te);
        return;
      }
      if (Ne.kind === "paint_stroke") {
        const lt = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        lt.forEach((gt) => {
          const St = Fe(gt);
          if (n.mode === "frame") {
            const vn = ne(), en = vn ? y(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Lt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Lt >= 0 && Lt <= 1)) {
                Ne._outOfFrame = !0;
                return;
              }
              Ne._outOfFrame && (Ne._outOfFrame = !1, b(Ne));
            }
          }
          L(Ne, St, performance.now()) && (ht = !0);
        }), ht && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (Ne.kind === "paint_lasso_fill") {
        const lt = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        if (lt.forEach((gt) => {
          const St = Fe(gt);
          if (n.mode === "frame") {
            const vn = ne(), en = vn ? y(vn) : null;
            if (en) {
              const Cn = (St.x - en.x) / Math.max(1, en.w), Lt = (St.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Lt >= 0 && Lt <= 1)) {
                Ne._outOfFrame = !0;
                return;
              }
              Ne._outOfFrame && (Ne._outOfFrame = !1, m(Ne));
            }
          }
          G(Ne, St, performance.now()) && (ht = !0);
        }), ht) {
          const gt = me(Ne);
          gt && n.paintEngine.updateActiveStroke(Ne.stroke, gt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (Ne.kind === "view") {
        const lt = performance.now(), ht = n.mode === "unwrap" ? Te : je(De);
        h.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", lt), Ne.lastTs = lt, Ne.last = ht, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (Ne.kind === "frame_pan" || Ne.kind === "frame_orbit") {
        v(Ne, Te);
        return;
      }
      if (Ne.kind === "space_pan" || Ne.kind === "space_orbit") {
        const lt = hi();
        ln(Ne.kind === "space_pan" ? Hm(lt, Te.x - Ne.last.x, Te.y - Ne.last.y, t.width, t.height, Ne.depth) : jm(lt, Te.x - Ne.last.x, Te.y - Ne.last.y, t.height, Ne.pivot)), Ne.last = Te;
        return;
      }
      if (Ne.kind === "pan_frame") {
        const lt = le(Ne.shot);
        if (!lt || !Ne.shot) return;
        const ht = Te.x - Ne.last.x, gt = Te.y - Ne.last.y, St = zg(Ne.shot, {
          dx: ht,
          dy: gt,
          focalPx: lt.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((tt = u.ui_settings) == null ? void 0 : tt.invert_view_y) === !0
        });
        Ne.shot.yaw_deg = St.yaw_deg, Ne.shot.pitch_deg = St.pitch_deg, Ne.changed = Ne.changed || Math.abs(ht) > 0 || Math.abs(gt) > 0, Ne.last = Te, Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "roll_frame") {
        if (Ne.source === "knob") return;
        J(Ne, Te, De);
        return;
      }
      if (Ne.kind === "move") {
        const lt = Te.x - Ne.offset.x, ht = Te.y - Ne.offset.y;
        if (n.mode === "frame" && d) {
          const gt = ne(), St = y(gt);
          if (!gt || !St) return;
          const vn = {
            x: Oe((lt - St.x) / Math.max(1, St.w), 0, 1),
            y: Oe((ht - St.y) / Math.max(1, St.h), 0, 1)
          }, en = O(gt, vn);
          if (!en) return;
          const Cn = ha(en);
          Rn(Ne.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const gt = fe(), St = Oe((lt - gt.x) / Math.max(gt.w, 1), 0, 1), vn = Oe((ht - gt.y) / Math.max(gt.h, 1), 0, 1);
          Rn(Ne.item, { yaw_deg: Gt(St * 360 - 180), pitch_deg: Oe(90 - vn * 180, -90, 90) });
        } else {
          const gt = ut(lt, ht), St = ha(gt);
          Rn(Ne.item, { yaw_deg: St.yaw, pitch_deg: St.pitch });
        }
        Q(Ne.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "move_stroke_group") {
        const lt = n.mode === "frame" ? (() => {
          const St = ne();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!lt || !Ne.startUv) return;
        const ht = Ut(Number(lt.u || 0), Number(Ne.startUv.u || 0)), gt = Number(lt.v || 0) - Number(Ne.startUv.v || 0);
        T((Pt = Ne.item) == null ? void 0 : Pt.actionGroupId, ht, gt, Ne.snapshot, (Je = Ne.item) == null ? void 0 : Je.layerKind, Ne.frameSnapshot) && (ge({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "move_raster_object") {
        const lt = n.mode === "frame" ? (() => {
          const St = ne();
          return St ? Ue(Te, St, performance.now()) : null;
        })() : He(Te, performance.now());
        if (!lt || !Ne.startUv) return;
        const ht = Ut(Number(lt.u || 0), Number(Ne.startUv.u || 0)), gt = Number(lt.v || 0) - Number(Ne.startUv.v || 0);
        oe(((et = Ne.item) == null ? void 0 : et.rasterObjectId) || ((st = Ne.item) == null ? void 0 : st.id) || "", ht, gt, Ne.snapshot) && (ee(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Math.max(1, Number(Ne.startDist || 1));
        I(((Vn = Ne.item) == null ? void 0 : Vn.rasterObjectId) || ((Xe = Ne.item) == null ? void 0 : Xe.id) || "", ht, Ne.snapshot) && (ee(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "move_multi") {
        const lt = Te.x - Number(((Ye = Ne.offset) == null ? void 0 : Ye.x) || 0), ht = Te.y - Number(((Qe = Ne.offset) == null ? void 0 : Qe.y) || 0);
        let gt = !1, St = !1, vn = !1;
        const en = lt - Number(((Bt = Ne.startCenter) == null ? void 0 : Bt.x) || lt), Cn = ht - Number(((Nt = Ne.startCenter) == null ? void 0 : Nt.y) || ht);
        for (const Lt of Array.isArray(Ne.stickerSnapshots) ? Ne.stickerSnapshots : []) {
          const an = (k === "cutout" ? Se() : _()).find(($t) => String(($t == null ? void 0 : $t.id) || "") === String(Lt.id || ""));
          if (!an || !Q(an)) continue;
          const rn = {
            x: Number(((Cr = Lt.center) == null ? void 0 : Cr.x) || 0) + en,
            y: Number(((Ki = Lt.center) == null ? void 0 : Ki.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const $t = ne(), Ft = y($t);
            if (!$t || !Ft) continue;
            const rr = {
              x: Oe((rn.x - Ft.x) / Math.max(1, Ft.w), 0, 1),
              y: Oe((rn.y - Ft.y) / Math.max(1, Ft.h), 0, 1)
            }, In = O($t, rr);
            if (!In) continue;
            const Fo = ha(In);
            Rn(an, { yaw_deg: Fo.yaw, pitch_deg: Fo.pitch });
          } else if (n.mode === "unwrap") {
            const $t = fe(), Ft = Oe((rn.x - $t.x) / Math.max($t.w, 1), 0, 1), rr = Oe((rn.y - $t.y) / Math.max($t.h, 1), 0, 1);
            Rn(an, { yaw_deg: Gt(Ft * 360 - 180), pitch_deg: Oe(90 - rr * 180, -90, 90) });
          } else {
            const $t = ut(rn.x, rn.y), Ft = ha($t);
            Rn(an, { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch });
          }
          gt = !0;
        }
        for (const Lt of Array.isArray(Ne.strokeSnapshots) ? Ne.strokeSnapshots : []) {
          const an = {
            x: Number(((Wi = Lt.center) == null ? void 0 : Wi.x) || 0) + en,
            y: Number(((Ui = Lt.center) == null ? void 0 : Ui.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = ne();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Lt.centerUv || null;
          if (rn && $t) {
            const Ft = Ut(Number(rn.u || 0), Number($t.u || 0)), rr = Number(rn.v || 0) - Number($t.v || 0);
            T(Lt.id, Ft, rr, Lt.snapshot, Lt.layerKind, Lt.frameSnapshot) && (gt = !0, St = !0);
          }
        }
        for (const Lt of Array.isArray(Ne.rasterSnapshots) ? Ne.rasterSnapshots : []) {
          const an = {
            x: Number(((Bs = Lt.center) == null ? void 0 : Bs.x) || 0) + en,
            y: Number(((Ys = Lt.center) == null ? void 0 : Ys.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Ft = ne();
            return Ft ? Ue(an, Ft, performance.now()) : null;
          })() : He(an, performance.now()), $t = Lt.centerUv || null;
          if (rn && $t) {
            const Ft = Ut(Number(rn.u || 0), Number($t.u || 0)), rr = Number(rn.v || 0) - Number($t.v || 0);
            oe(Lt.id, Ft, rr, Lt.snapshot) && (gt = !0, vn = !0);
          }
        }
        gt && (St ? ge({ rebuildPaintEngine: !1 }) : vn ? ee() : re(), Ae({ localOnly: !0 }));
        return;
      }
      if (Ne.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Math.max(1, Number(Ne.startDist || 1));
        B((qs = Ne.item) == null ? void 0 : qs.actionGroupId, ht, 0, Ne.snapshot, (Xs = Ne.item) == null ? void 0 : Xs.layerKind, Ne.frameSnapshot) && (ge({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "rotate_stroke_group") {
        let lt = (Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x) - Number(Ne.startAng || 0)) * Li;
        De.shiftKey && (lt = Math.round(lt / 45) * 45), B((Js = Ne.item) == null ? void 0 : Js.actionGroupId, 1, lt, Ne.snapshot, (Zs = Ne.item) == null ? void 0 : Zs.layerKind, Ne.frameSnapshot) && (ge({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "marquee_select") {
        Ne.current = Te, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (Ne.kind === "scale") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        Rn(Ne.item, { hFOV_deg: Oe(Ne.startHFOV * ht, 1, 179), vFOV_deg: Oe(Ne.startVFOV * ht, 1, 179) }), U(Ne.item) || (Ne.item.aspect_id = Ei(Ne.item)), Q(Ne.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        Rn(Ne.item, { hFOV_deg: Oe(Ne.startHFOV * ht, 1, 179) }), U(Ne.item) || (Ne.item.aspect_id = Ei(Ne.item)), Q(Ne.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        Rn(Ne.item, { vFOV_deg: Oe(Ne.startVFOV * ht, 1, 179) }), U(Ne.item) || (Ne.item.aspect_id = Ei(Ne.item)), Q(Ne.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "rotate") {
        let ht = (Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x) - Ne.startAng) * Li, gt = Ne.startRot - ht;
        De.shiftKey && (gt = Math.round(gt / 45) * 45), Rn(Ne.item, { [Q(Ne.item) ? "rot_deg" : "roll_deg"]: gt }), Q(Ne.item) && re(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ks() {
    var Te, Ne, vt, tt, Pt, Je, et;
    const De = n.interaction;
    if (!((De == null ? void 0 : De.kind) === "roll_frame" && De.source === "knob")) {
      if ((De == null ? void 0 : De.kind) === "space_pan" || (De == null ? void 0 : De.kind) === "space_orbit") {
        n.interaction = null, Mt(n.pointerPos), Wn();
        return;
      }
      if ((De == null ? void 0 : De.kind) === "world_select" || (De == null ? void 0 : De.kind) === "world_gizmo") {
        Eo(De);
        return;
      }
      if (((Te = n.interaction) == null ? void 0 : Te.kind) === "paint_stroke" || ((Ne = n.interaction) == null ? void 0 : Ne.kind) === "paint_lasso_fill") {
        xe();
        const st = V(n.interaction), Vn = !!n.interaction._hasCommittedSegments;
        if (st || Vn) {
          ge();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = g().find((Bt) => String((Bt == null ? void 0 : Bt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Ye = me(n.interaction);
          Ye && (st ? String(((tt = n.interaction.stroke) == null ? void 0 : tt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ye), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ye) : n.paintEngine.cancelActiveStroke(Ye)), Ce(), ie(), nr(), Wn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = me(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((Pt = n.interaction) == null ? void 0 : Pt.kind) === "marquee_select") {
        const st = ze(n.interaction.start, n.interaction.current), Xe = [
          ...k === "cutout" ? C().filter((Ye) => !j(Ye)) : [..._()],
          ...E(),
          ...q()
        ].filter((Ye) => se(st, Pe(Ye)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), nr(), Wn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), ue(), nr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let st = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (st = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (st = !0), st && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ge({ rebuildPaintEngine: !0 }) : ee()), Ce(), ie(), o.setDirtyCanvas(!0, !0), Ls(), Wn(), Ae();
      }
      n.interaction = null, (De == null ? void 0 : De.kind) === "roll_frame" && ke(), xe(), De && De.kind === "view" && Br(() => h.endDrag(performance.now())), Gi(), Wn(), Mt(n.pointerPos), Ae();
    }
  }
  function Ws() {
    var De, Te, Ne, vt, tt;
    if (!ye()) {
      if (((De = n.interaction) == null ? void 0 : De.kind) === "world_select" || ((Te = n.interaction) == null ? void 0 : Te.kind) === "world_gizmo") {
        Eo(n.interaction);
        return;
      }
      if (((Ne = n.interaction) == null ? void 0 : Ne.kind) === "view" && Br(() => h.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((tt = n.interaction) == null ? void 0 : tt.kind) === "paint_lasso_fill") {
        xe();
        const Pt = me(n.interaction);
        Pt && n.paintEngine.cancelActiveStroke(Pt);
      }
      n.interaction = null, xe(), Gi(), Mt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Us(De) {
    const Te = Fe(De), Ne = At(Te, !0);
    n.interaction || (Mt(Te), Ne && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function Ql(De) {
    if (n.mode === "frame") {
      const Te = Fe(De), Ne = Ya(De);
      Ne && tr(), Ne && pe() ? Vs(Te, -Ne) : Ne && $s(Te, Ne) && Ae({ localOnly: !0 }), De.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (de(), z()) {
        const Te = Ya(De);
        Te && zs(Fe(De), -Te);
      } else h.applyWheelEvent(De) && Ae({ localOnly: !0, reason: ft.VIEW });
      De.preventDefault();
    }
  }
  return {
    connect(De) {
      ({
        _segmentFrameLassoFill: m,
        _segmentFrameStroke: b,
        appendLassoPoint: G,
        appendPaintPoint: L,
        applyRasterObjectOffset: oe,
        applyRasterObjectTransform: I,
        applySharedRollInteractionPoint: J,
        applyStrokeGroupOffset: T,
        applyStrokeGroupTransform: B,
        buildFreehandStrokeRecord: ve,
        buildLassoFillStrokeRecord: _e,
        cameraShoots: he,
        cancelFrameCameraGesture: ye,
        cancelViewTransition: de,
        clearSelection: we,
        commitAndRefreshNode: ue,
        commitPaintInteraction: V,
        commitState: ie,
        currentSpaceCamera: te,
        cutoutCamera: x,
        dragFrame: v,
        editorViewInput: w,
        ensureGroupFrame: Z,
        frameContext: X,
        frameLocalPointToWorldDir: O,
        frameSpaceView: S,
        frameTarget: W,
        getActiveCutoutShot: ne,
        getActivePaintTargetDescriptor: me,
        getCutoutSelectableItems: Se,
        getCutoutSelectableItemsForHit: C,
        getFrameViewLayout: le,
        getFrameViewRect: y,
        getList: _,
        getMultiSelectionGeom: A,
        getPaintingGroupList: g,
        getRasterObjectCenterUv: D,
        getRasterObjectList: R,
        getSelectableRasterObjectItems: q,
        getSelectableStrokeGroupItems: E,
        getSelected: F,
        getSelectedItems: M,
        getStrokeGroupCenterUv: H,
        getStrokeGroupStrokes: Y,
        getUnwrapRect: fe,
        handleHit: be,
        hideTooltip: ke,
        hitObjectAt: ce,
        invalidateLivePaintPreviewCaches: xe,
        isCameraSelected: K,
        isFreeFrameView: pe,
        isFreeSpaceView: z,
        isItemLocked: ae,
        isRasterObjectItem: $,
        isSceneSticker: U,
        isShotItem: j,
        isSpaceView: N,
        isStickerItem: Q,
        isStrokeGroupItem: P,
        markObjectVisualsDirty: re,
        markPaintCompositeVisualsDirty: ee,
        markPaintStrokeVisualsDirty: ge,
        objectGeom: Pe,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Re,
        playback: We,
        poseOf: Ge,
        pushHistory: Ce,
        rectFromPoints: ze,
        rectIntersectsGeom: se,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Fe,
        screenPosCss: je,
        screenPosToErpPoint: He,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: ut,
        selectWorldSticker: yt,
        selectedWorldSticker: Dt,
        setPointerPos: At,
        setSelectedItem: An,
        setSelectedItems: qe,
        setSpaceView: ln,
        shortestWrappedDelta: Ut,
        spaceViewState: hi,
        startAnimation: Br,
        startCameraPress: mi,
        startFrameDrag: sn,
        startPanFrame: bn,
        startSpaceDrag: Yr,
        stickerById: pr,
        stopTimelinePlayback: tr,
        supportsErpPainting: Ts,
        supportsFramePainting: Hi,
        syncCutoutShot: No,
        syncFloatingViewButtonState: Ao,
        syncFrameRollKnob: Ds,
        syncSidePanelControls: Ls,
        syncTimeline: Rs,
        syncViewToggleState: Gi,
        updateCursor: Mt,
        updateSelectionMenu: Wn,
        updateSidePanel: nr,
        viewControls: Co,
        writePose: Rn,
        zoomFrameAt: Vs,
        zoomFrameViewAt: $s,
        zoomSpaceAt: zs
      } = De);
    },
    onCanvasPointerDown: Jl,
    worldGizmoPointer: Xr,
    hoverWorldGizmo: Io,
    onCanvasPointerMove: Gs,
    onCanvasPointerUp: Ks,
    onCanvasPointerCancel: Ws,
    onCanvasMouseMove: Us,
    onCanvasWheel: Ql
  };
}
function XA(e) {
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
  let f, p, k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne;
  function me(_, A, g = !1) {
    var H;
    v();
    const D = a && n.mode === "frame" ? G() : null, R = D || I(), q = D ? "shot" : T(), E = te();
    if (E && !W(E) || !E && (!R || q === "stroke" || B(R))) return;
    const F = (((H = u.sidePanel) == null ? void 0 : H.params) || []).find((Y) => Y.key === _);
    if (!F || F.enabled === !1) return;
    let M = Number(A);
    if (Number.isNaN(M) && (M = 0), (E || t) && UN.has(_) ? M = _ === "scale" ? Math.max(M, m0) : M : M = Oe(M, Number(F.min), Number(F.max)), _ === "yaw_deg" && (M = Gt(M)), !E && t && _.startsWith("position_")) {
      Z(), dS(l.camera, n.frame, _, M), S(), V(), g && we();
      return;
    }
    if (E) {
      hS(E, n.frame, _, M), he(), S(), V(), g && we();
      return;
    }
    _ === "opacity" ? fS(R, n.frame, M / 100) : ne(R, { [_]: M }), a && !ve(R) && (_ === "hFOV_deg" || _ === "vFOV_deg") && (R.aspect_id = Ei(R)), S(), V(), g && we();
  }
  function Se(_, A) {
    var D, R;
    const g = te() || I();
    !Xt(g) || ((R = (D = u.sidePanel) == null ? void 0 : D.upstream) == null ? void 0 : R.disabled) !== !1 || g[_] === A || (v(), g[_] = A, ue(), he(), we(), m(), S(), O(), V());
  }
  async function C(_) {
    var D, R, q, E, F, M, H;
    const A = _.target.closest("[data-action]");
    if (!A) return;
    const g = String(A.getAttribute("data-action") || "");
    if (g === "coverage-set") {
      const Y = Ln(A.getAttribute("data-coverage"));
      if (Y === Ln(l.coverage)) return;
      l.coverage = Y, n.coverage = Y, r && (r.value = String(Y)), o ? s.backgroundDirty = !0 : (b(), w({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), S(), O(), V();
      return;
    }
    if (g === "revert-handoff-lane") {
      v(), ie(String(A.getAttribute("data-lane") || ""));
      return;
    }
    if (g === "upstream-visible" || g === "upstream-locked") {
      Se(g === "upstream-visible" ? "visible" : "locked", A.getAttribute("data-value") === "1");
      return;
    }
    if (g === "toggle-selection-picker") {
      if ((R = (D = u.sidePanel) == null ? void 0 : D.selectionPicker) != null && R.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (g === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Y = String(A.getAttribute("data-selection-id") || "");
      let fe = null;
      if (Y && (d === "stickers" ? fe = [...oe(), ...c ? l.shots : []].find((be) => String((be == null ? void 0 : be.id) || "") === Y) || null : fe = ((q = L().find((be) => {
        var ke;
        return String(((ke = be == null ? void 0 : be.item) == null ? void 0 : ke.id) || "") === Y;
      })) == null ? void 0 : q.item) || null), x(fe || null), fe && !_e(fe)) {
        const be = de(fe);
        X(Gt(Number(be.yaw_deg || 0)), Oe(Number(be.pitch_deg || 0), -89.9, 89.9));
      }
      S(), O(), V();
      return;
    }
    if (g === "copy-state-inline") {
      const Y = I(), fe = T();
      if (!Y || fe === "stroke" || J().length > 1) return;
      const be = JSON.stringify(a && fe !== "image" ? p(Y) : k(de(Y)));
      try {
        await navigator.clipboard.writeText(be), (E = u.sidePanel) != null && E.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ke;
          (ke = u.sidePanel) != null && ke.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (g === "set-invert-x") {
      l.ui_settings.invert_view_x = A.getAttribute("data-value") === "1", ye(), S(), (F = i.setDirtyCanvas) == null || F.call(i, !0, !0), V();
      return;
    }
    if (g === "set-invert-y") {
      l.ui_settings.invert_view_y = A.getAttribute("data-value") === "1", ye(), S(), (M = i.setDirtyCanvas) == null || M.call(i, !0, !0), V();
      return;
    }
    if (g === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, ye(), S(), (H = i.setDirtyCanvas) == null || H.call(i, !0, !0), V();
      return;
    }
    if (g === "close-preview") {
      h();
      return;
    }
    if (g === "cancel-close") {
      h();
      return;
    }
    g === "save-close" && (f(), h());
  }
  function le(_) {
    const A = _.target.closest("[data-action='param-input']");
    A && me(String(A.getAttribute("data-param-key") || ""), A.value, !1);
  }
  function y(_) {
    const A = _.target.closest("[data-action='param-input']");
    A && me(String(A.getAttribute("data-param-key") || ""), A.value, !0);
  }
  return {
    connect(_) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: k,
        closeEditor: h,
        commitAndRefreshNode: m,
        commitState: b,
        getActiveCutoutShot: G,
        getCutoutInspectorItems: L,
        getList: oe,
        getSelected: I,
        getSelectedItems: J,
        getSelectedKind: T,
        isItemLocked: B,
        isSceneSticker: ve,
        isStrokeGroupItem: _e,
        markObjectVisualsDirty: he,
        persistUiSettings: ye,
        poseOf: de,
        pushHistory: we,
        releaseHiddenSelection: ue,
        requestDraw: V,
        revertPortHandoffLane: ie,
        selectedWorldSticker: te,
        setSelectedItem: x,
        stopTimelinePlayback: v,
        syncCoverageChangeToNodePreviews: w,
        syncCutoutShot: Z,
        turnViewTo: X,
        updateSelectionMenu: O,
        updateSidePanel: S,
        worldStickerEditable: W,
        writePose: ne
      } = _);
    },
    onSidePanelClick: C,
    onSidePanelInput: le,
    onSidePanelChange: y
  };
}
function JA(e) {
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
    videoEl: p
  } = e;
  let k, h, m, b, G, L, oe, I, J, T, B, ve, _e, he, ye, de, we, ue, V, ie, te, x, v, w, Z, X, O, S, W, ne, me, Se, C, le, y, _, A, g, D, R, q, E, F, M, H, Y, fe, be, ke, ce, xe;
  const K = () => {
    if (!t.customPaintSessionStart) return;
    if (_l(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (c2(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      $n(t.customPaintColor),
      ...t.customPaintHistory.filter((ze) => !_l(ze, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, pe = (Ce = !1) => {
    !i || i.hidden || (Ce ? K() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, z = () => {
    i && (i.hidden && (t.customPaintSessionStart = $n(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function ae() {
    D();
  }
  function $(Ce) {
    var ut, yt, Dt, At, An;
    if ((yt = (ut = Ce.target) == null ? void 0 : ut.matches) != null && yt.call(ut, "[data-confirm-overlay]")) {
      const qe = (Dt = f.confirmDialog) == null ? void 0 : Dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const ze = Ce.target.closest("[data-space-mode]");
    if (ze) {
      le(ze.getAttribute("data-space-mode"));
      return;
    }
    const se = Ce.target.closest("[data-gizmo-mode]");
    if (se) {
      t.gizmoMode = se.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, ke(), S({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), ce(), ke()), he(), F(), S();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && J({ preservePanelValues: !0 }), R(), ce(), ke(), S();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? W(-1) : qe === "redo" ? W(1) : qe === "clear" ? oe() : qe === "add" || qe === "add-image" ? h() : qe === "add-world" ? b() : qe === "add-or-look" ? k() : qe === "add-camera" && m();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, J({ preservePanelValues: !0 }), Fn[qe] && (t.activeBrushPresetId = qe), R(), ce(), ke(), S();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), J({ preservePanelValues: !0 }), R(), ce(), ke(), S();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        I(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = ql.find((ln) => ln.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = $n(qe.color), pe(!0), R();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? pe(!0) : z(), R();
        return;
      }
    }
    const Fe = String(((At = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : At.call(Ae, "data-action")) || "");
    if (Fe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      xe.resumeAfterScrub = !1, M();
      return;
    }
    if (Fe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), fe(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Fe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, p.loop = qe, E({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: p.muted,
        volume: Number(p.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Fe === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Fe === "frame-aspect-set") {
        const qe = t.mode === "frame" ? de() : null;
        if (!qe || qe.locked === !0) return;
        C(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, q(), Z(), T(), F(), ce(), ke(), S();
        return;
      }
      if (Fe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? de() : null, ln = Ae.getAttribute("data-custom-width"), Ut = Ae.getAttribute("data-custom-height");
        if (!qe || !G(qe, ln, Ut)) return;
        f.frameRail.aspectOpen = !1, q(), Z(), T(), F(), S();
        return;
      }
      if (Fe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? de() : null;
        if (!qe || qe.locked === !0) return;
        me(qe), f.frameRail.aspectOpen = !1, q(), Z(), T(), F(), S();
        return;
      }
      if (Fe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, ke(), S();
        return;
      }
      if (Fe === "aspect-set") {
        const qe = ue();
        if (!qe) return;
        const ln = String(Ae.getAttribute("data-aspect") || "1:1");
        C(qe, ln), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, q(), Z(), T(), ke(), S();
        return;
      }
      if (Fe === "rotate-90") {
        const qe = ue();
        if (!qe || te()) return;
        me(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, q(), Z(), T(), ke(), S();
        return;
      }
      if (Fe === "bring-front") {
        L();
        return;
      }
      if (Fe === "send-back") {
        Se();
        return;
      }
      if (Fe === "duplicate") {
        _e();
        return;
      }
      if (Fe === "replace-image") {
        O();
        return;
      }
      if (Fe === "toggle-lock") {
        Y();
        return;
      }
      if (Fe === "back-initial") {
        ne();
        return;
      }
      if (Fe === "toggle-visible") {
        H();
        return;
      }
      if (Fe === "delete") {
        ve();
        return;
      }
    }
    if (Fe === "reset-view") {
      if (t.mode === "frame") return;
      be(
        { position: A(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((An = B()) == null ? void 0 : An.radius) || ur },
        { mode: wl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Fe === "frame-view") {
      if (!x() || wl(t.spaceMode, t.viewTransition) !== "6dof") return;
      ye();
      return;
    }
    if (Fe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, b2(r == null ? void 0 : r.id, t.showGrid), ae(), S();
      return;
    }
    if (Fe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Re();
      return;
    }
    if (Fe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, g(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ge(), S();
      return;
    }
    const je = Ce.target.closest("[data-paint-history-index]");
    if (!je) return;
    const He = Number(je.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[He];
    Ue && (t.customPaintColor = $n(Ue), t.paintColor = $n(Ue), R());
  }
  function U(Ce) {
    const ze = Ce.target.closest("[data-video-seek]");
    if (ze) {
      if (!(p instanceof HTMLVideoElement)) return;
      v.playing && (xe.resumeAfterScrub = !0), v.seek(ki(Number(ze.value || 0), w()));
      return;
    }
    const se = Ce.target.closest("[data-video-volume]");
    if (se) {
      if (!(p instanceof HTMLVideoElement)) return;
      const Fe = Oe(Number(se.value || 0), 0, 1);
      p.volume = Fe, p.muted = Fe <= 1e-4, E({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: Fe
      });
      return;
    }
    const Ie = Ce.target.closest("[data-paint-size-slider]");
    if (Ie) {
      if (Ie.disabled) return;
      const Fe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), je = we(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[je] = Fe, R(), y();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Fe = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = $n(Fe), t.paintColor = $n(Fe), R();
    }
  }
  function j(Ce) {
    var ze;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      xe.resumeAfterScrub && v.play(), xe.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((ze = Ce.target) == null ? void 0 : ze.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && V();
  }
  function N(Ce) {
    const ze = Ce.target.closest("[data-tip]");
    !ze || !l.contains(ze) || u.target !== ze && (u.target = ze, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === ze && _(ze);
    }, 220));
  }
  function Q(Ce) {
    var Ie, Ae;
    const ze = Ce.target.closest("[data-tip]");
    !ze || u.target !== ze || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === ze || ie();
  }
  function P(Ce, ze) {
    var He;
    if (!o) return;
    const se = o.getBoundingClientRect(), Ie = Oe((Ce - se.left) / Math.max(1, se.width), 0, 1), Ae = 1 - Oe((ze - se.top) / Math.max(1, se.height), 0, 1), Fe = Du(t.customPaintColor), je = { ...Tu(Fe.h, Ie, Ae), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = $n(je), t.paintColor = $n(je), R();
  }
  function re(Ce) {
    var Fe;
    if (!s) return;
    const ze = s.getBoundingClientRect(), se = Oe((Ce - ze.left) / Math.max(1, ze.width), 0, 1), Ie = Du(t.customPaintColor), Ae = { ...Tu(se, Ie.s, Ie.v), a: Number(((Fe = t.customPaintColor) == null ? void 0 : Fe.a) ?? 1) };
    t.customPaintColor = $n(Ae), t.paintColor = $n(Ae), R();
  }
  function ee(Ce, ze) {
    const se = Ce.pointerId;
    ze(Ce);
    const Ie = (Fe) => {
      Fe.pointerId === se && ze(Fe);
    }, Ae = (Fe) => {
      Fe.pointerId === se && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ie), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function ge() {
    const Ce = !!t.fullscreen;
    no(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? Ke.fullscreen_close : Ke.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe(Ce) {
    const ze = !!Ce;
    t.fullscreen !== ze && (t.fullscreen = ze, l.classList.toggle("pano-modal-fullscreen", ze), ze ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), ae(), ge(), X(), S());
  }
  function Ee() {
    return document.fullscreenElement === n;
  }
  async function Re() {
    var Ce, ze;
    try {
      if (!document.fullscreenEnabled) {
        Pe(!t.fullscreen);
        return;
      }
      Ee() ? await ((ze = document.exitFullscreen) == null ? void 0 : ze.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      Pe(!t.fullscreen);
    }
  }
  function We() {
    document.fullscreenEnabled && Pe(Ee());
  }
  function Ge() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? Ke.fullscreen_close : Ke.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: k,
        addImageSticker: h,
        addStudioCamera: m,
        addWorldImageSticker: b,
        applyCutoutAspectCustom: G,
        bringSelectedToFront: L,
        clearAll: oe,
        clearPaintingLayer: I,
        clearSelection: J,
        commitAndRefreshNode: T,
        contentSphere: B,
        deleteSelected: ve,
        duplicateSelected: _e,
        forceCursorTool: he,
        frameSpaceContent: ye,
        getActiveCutoutShot: de,
        getBrushPresetIdForTool: we,
        getSelected: ue,
        hidePaintSizePreview: V,
        hideTooltip: ie,
        isErpCamera: te,
        isFreeSpaceView: x,
        playback: v,
        playbackFps: w,
        pushHistory: Z,
        queueVideoTransportLayout: X,
        replaceSelectedImage: O,
        requestDraw: S,
        restoreHistory: W,
        restoreSelectedToInitialPose: ne,
        rotateCutoutAspect90: me,
        sendSelectedToBack: Se,
        setShotAspect: C,
        setSpaceMode: le,
        showPaintSizePreview: y,
        showTooltipFor: _,
        spaceOrigin: A,
        startAnimation: g,
        syncFloatingViewButtonState: D,
        syncPaintUi: R,
        syncSidePanelControls: q,
        syncVideoTransportState: E,
        syncViewToggleState: F,
        togglePlayback: M,
        toggleSelectedExternalStickerVisibility: H,
        toggleSelectedLock: Y,
        toggleVideoMuted: fe,
        transitionView: be,
        updateSelectionMenu: ke,
        updateSidePanel: ce,
        videoState: xe
      } = Ce);
    },
    closePaintColorPop: pe,
    syncGridToggleButton: ae,
    onRootClick: $,
    onRootInput: U,
    onRootChange: j,
    onRootPointerOver: N,
    onRootPointerOut: Q,
    updatePaintColorFromSv: P,
    updatePaintColorFromHue: re,
    bindDrag: ee,
    syncFullscreenButton: ge,
    setFullscreenState: Pe,
    onFullscreenChange: We,
    syncOutputPreviewToggleButton: Ge
  };
}
function ZA(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, p, k, h, m, b, G, L, oe, I, J;
  const T = hA();
  function B(X) {
    var O, S, W, ne, me;
    if (X.key === "Escape") {
      if (l()) {
        X.preventDefault(), X.stopPropagation(), (O = X.stopImmediatePropagation) == null || O.call(X);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        X.preventDefault(), X.stopPropagation(), (S = X.stopImmediatePropagation) == null || S.call(X), (W = document.exitFullscreen) == null || W.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        X.preventDefault(), X.stopPropagation(), (ne = X.stopImmediatePropagation) == null || ne.call(X), G(!1);
        return;
      }
      X.preventDefault(), X.stopPropagation(), (me = X.stopImmediatePropagation) == null || me.call(X), d();
    }
  }
  function ve(X) {
    const O = String(X.key || ""), S = String(X.code || ""), W = Number(X.keyCode || 0);
    if (!(O === "Delete" || S === "Delete" || W === 46) && !(O === "Backspace" || S === "Backspace" || W === 8)) return;
    const Se = X.target, C = ((Se == null ? void 0 : Se.tagName) || "").toUpperCase();
    if (C === "INPUT" || C === "TEXTAREA" || Se != null && Se.isContentEditable) return;
    if (o.selection) {
      f(), X.preventDefault(), X.stopPropagation();
      return;
    }
    if (p()) {
      X.preventDefault(), X.stopPropagation();
      return;
    }
    m() && (u(), X.preventDefault(), X.stopPropagation());
  }
  function _e(X) {
    if (s.confirmDialog.visible) return !1;
    const O = X.composedPath()[0];
    if (O !== document.body && O !== document.documentElement && !r.contains(O)) return !1;
    const S = ((O == null ? void 0 : O.tagName) || "").toUpperCase();
    return S === "INPUT" ? !WN.has(String(O.type || "text").toLowerCase()) : S !== "TEXTAREA" && S !== "SELECT" && !(O != null && O.isContentEditable);
  }
  function he(X) {
    return X.code !== "Space" || X.ctrlKey || X.metaKey || X.altKey || n || !i || !s.timeline.visible ? !1 : _e(X);
  }
  function ye(X) {
    he(X) && (X.preventDefault(), X.stopPropagation(), X.repeat || I());
  }
  function de(X) {
    he(X) && (X.preventDefault(), X.stopPropagation());
  }
  function we(X) {
    if (T.modifiers(X), !!D0(X.code)) {
      if (!_e(X)) {
        V(X.code);
        return;
      }
      X.ctrlKey || X.metaKey || (X.preventDefault(), X.stopPropagation(), a() && (T.press(X.code, X.timeStamp), X.repeat || c(), L(() => {
      })));
    }
  }
  function ue(X) {
    T.modifiers(X), X.key === "Meta" && ie(), V(X.code) && (X.preventDefault(), X.stopPropagation());
  }
  function V(X) {
    return T.release(X) ? (T.held || k(), !0) : !1;
  }
  function ie() {
    T.held && (T.releaseAll(), k());
  }
  function te() {
    document.hidden && ie();
  }
  function x() {
    ie();
  }
  function v(X) {
    const O = !!(X.ctrlKey || X.metaKey), S = !!X.altKey;
    t.marqueeModifier === O && t.altModifier === S || (t.marqueeModifier = O, t.altModifier = S, oe(), J(t.pointerPos));
  }
  function w() {
    ie(), t.marqueeModifier = !1, t.altModifier = !1, oe(), J(t.pointerPos);
  }
  function Z(X) {
    if (n || !X.ctrlKey && !X.metaKey) return;
    const O = String(X.key || "").toLowerCase(), S = String(X.code || "");
    if (O !== "z" && S !== "KeyZ") return;
    const W = X.target, ne = ((W == null ? void 0 : W.tagName) || "").toUpperCase();
    if (ne === "INPUT" || ne === "TEXTAREA" || W != null && W.isContentEditable) return;
    const { canUndo: me, canRedo: Se } = h();
    X.shiftKey && !Se || !X.shiftKey && !me || (b(X.shiftKey ? 1 : -1), X.preventDefault(), X.stopPropagation());
  }
  return {
    connect(X) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: p,
        endFrameKeyMove: k,
        getHistoryCapabilities: h,
        getSelected: m,
        restoreHistory: b,
        setFullscreenState: G,
        startAnimation: L,
        syncFrameRollKnob: oe,
        togglePlayback: I,
        updateCursor: J
      } = X);
    },
    moveKeys: T,
    onEscClose: B,
    onDeleteKey: ve,
    onSpaceKey: ye,
    onSpaceKeyUp: de,
    onMoveKeyDown: we,
    onMoveKeyUp: ue,
    onVisibilityChange: te,
    onContextMenu: x,
    onModifierKeyChange: v,
    onWindowBlur: w,
    onUndoRedoKey: Z
  };
}
const Rp = /* @__PURE__ */ new Map(), ci = bg({
  app: lr,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Ou,
    markImageFailed: h0,
    markImageLoading: f0,
    markImageReady: p0
  }
});
function Vp(e) {
  if (!Kt(e, "background") || !Kt(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const QA = ci.assetSource, eC = ci.source, tC = ci.uiImage, nC = ci.invalidateUiImage, $p = ci.loadPreferredExactLinkedImage;
async function rC(e, t, r = {}) {
  var Fo, Bd;
  await qg(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = d2(e, t);
  await Vd();
  const a = ga(e, "output_preset"), l = ga(e, "coverage"), c = ga(e, "bg_color"), d = ga(e, KN), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return $p(
      e,
      $e,
      () => tt(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return h2($e);
  }, p = ($e = 2048) => {
    const at = a == null ? void 0 : a.value;
    return p2(at) ? f() || Math.max(1, Math.round(Number($e || 2048))) : f2(at, $e);
  }, k = e.__panoSceneStateV2 === !0, h = t === "stickers" && k, m = h && e.__panoStudio === !0, b = m, G = t === "cutout" || m, L = (k ? Em : Im)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Ln(l == null ? void 0 : l.value),
    sharedUiSettings: m2(),
    active: Lm(e),
    fps: k ? Vp(e) : null
  });
  Hn(e).liveState = L, Hn(e).liveStateVersion = 0;
  let oe = null;
  b ? (oe = L.camera && L.camera.visible !== !1 ? Tm(L.camera, 0) : null, L.shots = oe ? [{ ...oe, position: [...oe.position] }] : [], L.active.selected_shot_id = null) : t === "cutout" && (L.shots = Array.isArray(L.shots) ? L.shots.slice(0, 1) : [], L.shots.length || (L.active.selected_shot_id = null));
  const I = t === "cutout" ? (() => {
    var ir;
    const $e = Array.isArray(L.shots) ? L.shots : [], at = String(((ir = L == null ? void 0 : L.active) == null ? void 0 : ir.selected_shot_id) || "");
    return $e.find((cn) => String((cn == null ? void 0 : cn.id) || "") === at) || $e[0] || null;
  })() : null, J = I ? R0(I, !1) : { width: 220, height: 132 }, T = d0(m ? "studio" : t), B = /* @__PURE__ */ _o({
    stageStatus: or,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (T.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fo = T.spaceButtons) != null && Fo.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: T.spaceButtons, frame: T.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (T.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: h } : {}
    })),
    floatingButtons: [
      ...(T.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ke.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: Ke.aspect,
      rotateIcon: Ke.rotate_90,
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
      icon: Ke.fullscreen,
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
      customColorCss: vr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: vr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, ($e, at) => ({ index: at, color: null })),
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
      width: J.width,
      height: J.height,
      label: I ? "Loading preview" : "Add Frame to preview"
    }
  }), ve = { frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }, _e = document.createElement("div");
  document.body.appendChild(_e);
  const he = ({ intent: $e, file: at } = {}) => {
    if (sr(at)) {
      if ($e === "add") {
        Ee(at);
        return;
      }
      if ($e === "add-world") {
        Re(at);
        return;
      }
      $e === "replace" && vt(at);
    }
  }, ye = ({ intent: $e } = {}) => {
  }, de = ed(HN, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: T,
    paintSwatches: ql.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: vr($e.color, 1)
    })),
    uiState: B,
    playhead: ve,
    onClose: () => {
      rr();
    },
    onTimeline: ($e) => Zl($e),
    onImageFileSelected: he,
    onImageFileCancelled: ye
  });
  let we = null;
  try {
    we = de.mount(_e);
  } catch ($e) {
    try {
      de.unmount();
    } catch {
    }
    throw _e.remove(), $e;
  }
  const ue = _e.querySelector(".pano-modal-overlay"), V = _e.querySelector(".pano-modal"), ie = V == null ? void 0 : V.querySelector("[data-stage-overlay]"), te = V == null ? void 0 : V.querySelector("[data-stage-background]"), x = V == null ? void 0 : V.querySelector(".pano-stage-wrap"), v = ((Bd = we == null ? void 0 : we.getPaintOverlayRefs) == null ? void 0 : Bd.call(we)) || {}, w = v.cursor || null, Z = v.sizePreview || null, X = v.sizeSample || null;
  if (!ue || !V || !ie || !te || !x || !w || !Z || !X)
    throw de.unmount(), _e.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const O = ie.getContext("2d"), S = V.querySelector("[data-side]"), W = V.querySelector("[data-video-element]"), ne = V.querySelector("[data-port-video-element]");
  fc(ie, "editor.stage-overlay"), fc(te, "editor.stage-background"), Of(W, "editor.video"), Of(ne, "editor.port-video");
  const me = V.querySelector(".pano-floating-right"), Se = V.querySelector(".pano-floating-top"), C = V.querySelector("[data-tool-rail]"), le = V.querySelector("[data-frame-rail]"), y = V.querySelector("[data-frame-roll-knob]"), _ = V.querySelector("[data-paint-dock]"), A = V.querySelector(".pano-video-transport"), g = V.querySelector("[data-selection-menu]"), D = V.querySelector("[data-tooltip]"), R = V.querySelector("[data-camera-preview-host]"), q = V.querySelector("[data-camera-preview-canvas]");
  fc(q, "editor.camera-preview");
  const E = V.querySelector("[data-paint-color-row]"), F = V.querySelector("[data-paint-color-pop]"), M = V.querySelector("[data-paint-color-sv]"), H = V.querySelector("[data-paint-color-sv-cursor]"), Y = V.querySelector("[data-paint-hue-strip]"), fe = V.querySelector("[data-paint-hue-handle]");
  x == null || x.removeAttribute("data-stage-ready"), x == null || x.setAttribute("data-stage-loading-kind", "boot"), ie.style.opacity = "1", te.style.opacity = "0", i && (S == null || S.remove(), V.classList.add("pano-modal-readonly")), V.addEventListener("pointerdown", () => j.wake(), !0), V.addEventListener("pointerdown", ($e) => {
    var at;
    $e.target.closest("[data-frame-roll-knob]") || An(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (V.querySelectorAll(".pano-picker-pop").forEach((ir) => {
      ir.hidden = !0;
    }), se(!0), G && ke.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (ke.cutoutAspectOpen = !1, ke.menuMode = "", ke.menuSize.measured = !1, St(), tt()), (at = B.frameRail) != null && at.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (B.frameRail.aspectOpen = !1)));
  });
  const ke = {
    mode: "pano",
    selectedId: A0(t, L),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: ur,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: Ln(L.coverage),
    historyController: R2(L),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Dr,
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
    showGrid: y2(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ll(),
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
  }, ce = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (ke.selectedId = null, L.active.selected_sticker_id = null), ke.selectedIds = ke.selectedId ? [ke.selectedId] : [];
  const xe = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), ae = on({ label: "editor.still" });
  ae.__panoFrameIdx = 0;
  const $ = on({ label: "editor.port-still" });
  $.__panoFrameIdx = 0;
  const U = {
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
  }, j = Nk({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, at) => Js($e, at),
    animating: () => je()
  }), N = Mk({
    requestFrame: ($e) => j.requestFrame($e),
    cancelFrame: ($e) => j.cancelFrame($e),
    tasks: {
      seek: () => Ql.seek(ce.scrubFrame),
      timeline: () => qs(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Nt(), tt({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => vn()
    }
  }), Q = e_({
    canvas: te,
    onReady: () => {
      Bt(), tt({ reason: ft.CONTEXT });
    },
    onFailed: () => tt(),
    onUpdate: () => tt({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: ($e) => tt({ localOnly: !0, reason: FA($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      yt(), Bt(), tt({ reason: ft.CONTEXT });
    }
  }), P = Number.parseFloat(
    getComputedStyle(V).getPropertyValue("--pano-float-radius")
  ) || 10, re = ($e) => {
    const at = String($e || "default");
    ie.style.cursor !== at && (ie.style.cursor = at);
  }, ee = {
    timer: 0,
    target: null
  }, ge = {
    active: !1,
    depth: 0
  }, Pe = od({
    getView: () => ({ yaw: ke.viewYaw, pitch: ke.viewPitch, fov: ke.viewFov }),
    setView: ($e) => {
      ke.viewYaw = Gt(Number($e.yaw || 0)), ke.viewPitch = Oe(Number($e.pitch || 0), -89.9, 89.9), ke.viewFov = Oe(Number($e.fov || ke.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = ie.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || ie.clientWidth || 0)),
        h: Math.max(1, Number($e.height || ie.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, at;
      return {
        x: ($e = L.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (at = L.ui_settings) != null && at.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => j.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Re,
    applyInitialCutoutFocus: We,
    applyVideoTimelineFps: Ge,
    bindDrag: Ce,
    cancelFrameCameraGesture: ze,
    closePaintColorPop: se,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Fe,
    editorAnimating: je,
    endFrameKeyMove: He,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: ut,
    forgetCameraPreviewFrame: yt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: At,
    hideTooltip: An,
    hoverWorldGizmo: qe,
    isFreeFrameView: ln,
    isFreeSpaceView: Ut,
    migrateLegacyEmbeddedAssets: hi,
    onCanvasDragOver: Br,
    onCanvasDrop: mi,
    onCanvasMouseMove: sn,
    onCanvasPointerCancel: bn,
    onCanvasPointerDown: Yr,
    onCanvasPointerMove: pr,
    onCanvasPointerUp: tr,
    onCanvasWheel: Ts,
    onContextMenu: Hi,
    onDeleteKey: No,
    onEscClose: Ao,
    onFrameRollKnobDoubleClick: Ds,
    onFrameRollKnobPointerDown: Ls,
    onFrameRollKnobPointerMove: Rs,
    onFullscreenChange: Gi,
    onModifierKeyChange: Mt,
    onMoveKeyDown: Wn,
    onMoveKeyUp: nr,
    onRootChange: Co,
    onRootClick: Rn,
    onRootInput: Vs,
    onRootPointerOut: $s,
    onRootPointerOver: zs,
    onSidePanelChange: qr,
    onSidePanelClick: Jl,
    onSidePanelInput: Xr,
    onSpaceKey: js,
    onSpaceKeyUp: Io,
    onTimelineAction: Zl,
    onUndoRedoKey: Eo,
    onVisibilityChange: Oo,
    onWindowBlur: Hs,
    onWindowDragEnter: Gs,
    onWindowDragLeave: Ks,
    onWindowDragOver: Ws,
    onWindowDrop: Us,
    playback: Ql,
    pushHistory: De,
    reconcileExternalStickerFromInputs: Te,
    refreshModalVideoSource: Ne,
    replaceSelectedImageFromFile: vt,
    requestDraw: tt,
    restoreView: Pt,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: st,
    setPointerPos: Vn,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Ye,
    stopRenderLoop: Qe,
    syncCanvasSize: Bt,
    syncCutoutShot: Nt,
    syncFullscreenButton: Cr,
    syncGridToggleButton: Ki,
    syncLookAtFrameButtonState: Wi,
    syncOutputPreviewToggleButton: Ui,
    syncPaintUi: Bs,
    syncPaintingLayerAsync: Ys,
    syncTimeline: qs,
    syncUndoRedoButtons: Xs,
    tick: Js,
    triggerBackgroundPersistenceOnClose: Zs,
    updateCursor: lt,
    updatePaintColorFromHue: ht,
    updatePaintColorFromSv: gt,
    updateSelectionMenu: St,
    updateSidePanel: vn,
    viewControls: en,
    watchPixelRatio: Cn
  } = v2({
    api: hn,
    app: lr,
    backgroundCanvas: te,
    bgWidget: c,
    cameraV2: b,
    canvas: ie,
    closeEditor: rr,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: O,
    cutoutPreviewCanvas: q,
    cutoutPreviewHost: R,
    dragCue: ge,
    dragFrames: N,
    editor: ke,
    editorView: Q,
    floatingRightEl: me,
    floatingTopEl: Se,
    frameGateCssRadius: P,
    frameRailEl: le,
    frameRollKnobEl: y,
    hideSidebar: i,
    imageCache: xe,
    initialShotBase: oe,
    loadPreferredExactLinkedImage: $p,
    mediaAssetSource: QA,
    mediaSource: eC,
    mediaUiImage: tC,
    node: e,
    overlay: ue,
    paintColorPop: F,
    paintColorRow: E,
    paintColorSv: M,
    paintColorSvCursor: H,
    paintCursorEl: w,
    paintDockEl: _,
    paintHueHandle: fe,
    paintHueStrip: Y,
    paintSizePreviewEl: Z,
    paintSizePreviewSampleEl: X,
    portStillCanvas: $,
    portVideoEl: ne,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: z,
    rasterImageAlphaCache: pe,
    rasterImageCache: K,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: V,
    runtime: U,
    sceneV2: h,
    scheduler: j,
    selectionMenu: g,
    setCanvasCursor: re,
    shotEditor: G,
    stageWrap: x,
    state: L,
    stateV2: k,
    stateWidget: d,
    stillCanvas: ae,
    studio: m,
    timeline: ce,
    timelinePlayhead: ve,
    toolRailEl: C,
    tooltip: ee,
    tooltipEl: D,
    type: t,
    uiState: B,
    videoEl: W,
    videoTimelineFps: Vp,
    videoTransportEl: A,
    viewController: Pe,
    vueModal: we
  }, [
    T2,
    V2,
    $2,
    z2,
    j2,
    H2,
    G2,
    K2,
    W2,
    IA,
    EA,
    OA,
    DA,
    LA,
    RA,
    VA,
    $A,
    zA,
    jA,
    HA,
    GA,
    KA,
    WA,
    UA,
    BA,
    YA,
    qA,
    XA,
    JA,
    ZA
  ]);
  Ye(), Xe.observe(ie), Cn();
  const Lt = () => Ie();
  n || (dl(e).flushBeforeQueue = Lt), y == null || y.addEventListener("pointerdown", Ls), y == null || y.addEventListener("pointermove", Rs), y == null || y.addEventListener("pointerup", Ue), y == null || y.addEventListener("pointercancel", () => ze()), y == null || y.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = ke.interaction) == null ? void 0 : $e.source) === "knob" && ze();
  }), y == null || y.addEventListener("dblclick", Ds), ie.onpointerdown = Yr, ie.onpointermove = pr, ie.onpointerup = tr, ie.onpointercancel = bn, ie.onlostpointercapture = () => {
    ze();
  }, ie.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, ie.oncontextmenu = ($e) => {
    (Ut() || ln()) && Xw(en(), 2) && $e.preventDefault();
  }, ie.onmousemove = sn, ie.onpointerleave = () => {
    ke.interaction || qe({ x: -1e6, y: -1e6 });
  }, ie.onmouseleave = () => {
    Vn(ke.pointerPos, !1), lt(ke.pointerPos), ke.mode === "frame" && ke.primaryTool === "cursor" && tt({ localOnly: !0, reason: ft.OVERLAY });
  }, ie.onwheel = Ts, ie.ondragover = Br, ie.ondrop = mi, window.addEventListener("dragenter", Gs, !0), window.addEventListener("dragover", Ws, !0), window.addEventListener("dragleave", Ks, !0), window.addEventListener("drop", Us, !0), S == null || S.addEventListener("click", Jl), S == null || S.addEventListener("input", Xr), S == null || S.addEventListener("change", qr), Ki(), V.addEventListener("click", Rn), V.addEventListener("input", Vs), V.addEventListener("change", Co), V.addEventListener("pointerup", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && At();
  }), V.addEventListener("pointercancel", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && At();
  }), V.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && At();
  }), V.addEventListener("pointerover", zs), V.addEventListener("pointerout", $s), V.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || An();
  }), M && (M.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => gt(at.clientX, at.clientY));
  }), Y && (Y.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => ht(at.clientX));
  }), V.addEventListener("click", ($e) => {
    var gi;
    const at = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!at) return;
    const ir = at.getAttribute("data-action") === "confirm-accept", cn = (gi = B.confirmDialog) == null ? void 0 : gi.resolve;
    B.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, cn == null || cn(ir);
  }), document.addEventListener("fullscreenchange", Gi), Cr(), Ui();
  const an = e.onConnectionsChange;
  let rn = null, $t = () => {
  };
  !n && t === "stickers" && ($t = Bg(e, ($e = "sync") => {
    $e === "executed" && (nC(xe, Fi), Ne(), h && Ge()), Te($e);
  }, { editor: !0 }), rn = function(...at) {
    typeof an == "function" && an.apply(this, at), Ne(), ii(this, "connections");
  }, e.onConnectionsChange = rn), n || Rp.set(String(e.id ?? "0"), () => Ys());
  let Ft = null;
  async function rr() {
    return Ft || (Ft = (async () => {
      var at, ir, cn, gi, Jr, Qs, Yd, ea, qd;
      Rp.delete(String(e.id ?? "0")), ut(), He(), n || Ie(), et(), document.fullscreenElement === ue && ((at = document.exitFullscreen) == null || at.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Gi), Hn(e).liveState = null;
      const $e = h_(e);
      return ($e == null ? void 0 : $e.flushBeforeQueue) === Lt && ($e.flushBeforeQueue = null), (gi = (cn = (ir = gg(e)) == null ? void 0 : ir.dom) == null ? void 0 : cn.requestDraw) == null || gi.call(cn), (Qs = (Jr = e.graph) == null ? void 0 : Jr.setDirtyCanvas) == null || Qs.call(Jr, !0, !0), (qd = (ea = (Yd = lr) == null ? void 0 : Yd.canvas) == null ? void 0 : ea.setDirty) == null || qd.call(ea, !0, !0), An(), N.cancel(), Qe(), Ae(), Fe(), Q.dispose(), st(!1), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keydown", No, !0), window.removeEventListener("keydown", js, !0), window.removeEventListener("keyup", Io, !0), window.removeEventListener("keydown", Wn, !0), window.removeEventListener("keyup", nr, !0), document.removeEventListener("visibilitychange", Oo), window.removeEventListener("contextmenu", Hi, !0), window.removeEventListener("keydown", Mt, !0), window.removeEventListener("keyup", Mt, !0), window.removeEventListener("blur", Hs), window.removeEventListener("keydown", Eo, !0), window.removeEventListener("dragenter", Gs, !0), window.removeEventListener("dragover", Ws, !0), window.removeEventListener("dragleave", Ks, !0), window.removeEventListener("drop", Us, !0), !n && t === "stickers" && (e.onConnectionsChange === rn && (e.onConnectionsChange = an), $t()), de.unmount(), _e.remove(), Zs(), Ft = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), Ft = null, !1)), Ft);
  }
  window.addEventListener("keydown", Ao, !0), window.addEventListener("keydown", No, !0), window.addEventListener("keydown", js, !0), window.addEventListener("keyup", Io, !0), window.addEventListener("keydown", Wn, !0), window.addEventListener("keyup", nr, !0), document.addEventListener("visibilitychange", Oo), window.addEventListener("contextmenu", Hi, !0), window.addEventListener("keydown", Mt, !0), window.addEventListener("keyup", Mt, !0), window.addEventListener("blur", Hs), window.addEventListener("keydown", Eo, !0), ue.addEventListener("pointerdown", ($e) => {
    $e.target === ue && rr();
  });
  function In($e, at, { rollbackState: ir = !1 } = {}) {
    let cn = "";
    try {
      ir && (cn = JSON.stringify(L)), at();
    } catch (gi) {
      if (cn)
        try {
          const Jr = JSON.parse(cn);
          Object.keys(L).forEach((Qs) => delete L[Qs]), Object.assign(L, Jr), n || Ie();
        } catch (Jr) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Jr);
        }
      B.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, gi);
    }
  }
  In("view", Pt), In("cutout-focus", We), !n && t === "stickers" && In("external-sticker-sync", () => Te("open"), { rollbackState: !0 }), hi().catch(($e) => {
    B.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), In("history", De), In("undo-redo", Xs), In("paint-ui", Bs), In("side-panel", vn), In("look-at-frame", Wi), In("video-source", Ne), In("canvas-size", Bt), In("cursor", () => lt(ke.pointerPos)), tt(), Je();
}
lr.registerExtension(sx({
  app: lr,
  openEditor: rC,
  attachStickers: xk,
  attachCutout: kk,
  attachPreview: wk,
  restoreOutput: ck,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: YN
}));
