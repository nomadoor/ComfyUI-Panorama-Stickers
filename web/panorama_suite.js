import * as va from "../../scripts/app.js";
import { app as ur } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Dt = {}, oo = [], xr = () => {
}, qp = () => !1, Ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nl = (e) => e.startsWith("onUpdate:"), yn = Object.assign, zu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Z0 = Object.prototype.hasOwnProperty, Mt = (e, t) => Z0.call(e, t), it = Array.isArray, so = (e) => As(e) === "[object Map]", Xp = (e) => As(e) === "[object Set]", of = (e) => As(e) === "[object Date]", dt = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Ft = (e) => e !== null && typeof e == "object", Jp = (e) => (Ft(e) || dt(e)) && dt(e.then) && dt(e.catch), Zp = Object.prototype.toString, As = (e) => Zp.call(e), Q0 = (e) => As(e).slice(8, -1), Qp = (e) => As(e) === "[object Object]", ju = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zo = /* @__PURE__ */ $u(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ey = /-\w/g, Mn = Pl(
  (e) => e.replace(ey, (t) => t.slice(1).toUpperCase())
), ty = /\B([A-Z])/g, $i = Pl(
  (e) => e.replace(ty, "-$1").toLowerCase()
), Al = Pl((e) => e.charAt(0).toUpperCase() + e.slice(1)), nc = Pl(
  (e) => e ? `on${Al(e)}` : ""
), _r = (e, t) => !Object.is(e, t), Sa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, eh = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Hu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let sf;
const Cl = () => sf || (sf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? oy(n) : Ot(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ft(e))
    return e;
}
const ny = /;(?![^(]*\))/g, ry = /:([^]+)/, iy = /\/\*[^]*?\*\//g;
function oy(e) {
  const t = {};
  return e.replace(iy, "").split(ny).forEach((r) => {
    if (r) {
      const n = r.split(ry);
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
  else if (Ft(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const sy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ay = /* @__PURE__ */ $u(sy);
function th(e) {
  return !!e || e === "";
}
function ly(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Gu(e[n], t[n]);
  return r;
}
function Gu(e, t) {
  if (e === t) return !0;
  let r = of(e), n = of(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Pr(e), n = Pr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? ly(e, t) : !1;
  if (r = Ft(e), n = Ft(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Gu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const nh = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ft(e) && (e.toString === Zp || !dt(e.toString)) ? nh(e) ? tt(e.value) : JSON.stringify(e, rh, 2) : String(e), rh = (e, t) => nh(t) ? rh(e, t.value) : so(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[rc(n, o) + " =>"] = i, r),
    {}
  )
} : Xp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => rc(r))
} : Pr(t) ? rc(t) : Ft(t) && !it(t) && !Qp(t) ? String(t) : t, rc = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let On;
class cy {
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
function uy() {
  return On;
}
let Vt;
const ic = /* @__PURE__ */ new WeakSet();
class ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ic.has(this) && (ic.delete(this), this.trigger()));
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
    this.flags |= 2, af(this), ah(this);
    const t = Vt, r = dr;
    Vt = this, dr = !0;
    try {
      return this.fn();
    } finally {
      lh(this), Vt = t, dr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Uu(t);
      this.deps = this.depsTail = void 0, af(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ic.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wc(this) && this.run();
  }
  get dirty() {
    return Wc(this);
  }
}
let oh = 0, Qo, es;
function sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = es, es = e;
    return;
  }
  e.next = Qo, Qo = e;
}
function Ku() {
  oh++;
}
function Wu() {
  if (--oh > 0)
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
function ah(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lh(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Uu(n), dy(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Wc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ch(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ch(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cs) || (e.globalVersion = cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Vt, n = dr;
  Vt = e, dr = !0;
  try {
    ah(e);
    const i = e.fn(e._value);
    (t.version === 0 || _r(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Vt = r, dr = n, lh(e), e.flags &= -3;
  }
}
function Uu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Uu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function dy(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let dr = !0;
const uh = [];
function Hr() {
  uh.push(dr), dr = !1;
}
function Gr() {
  const e = uh.pop();
  dr = e === void 0 ? !0 : e;
}
function af(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Vt;
    Vt = void 0;
    try {
      t();
    } finally {
      Vt = r;
    }
  }
}
let cs = 0;
class fy {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Vt || !dr || Vt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Vt)
      r = this.activeLink = new fy(Vt, this), Vt.deps ? (r.prevDep = Vt.depsTail, Vt.depsTail.nextDep = r, Vt.depsTail = r) : Vt.deps = Vt.depsTail = r, dh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Vt.depsTail, r.nextDep = void 0, Vt.depsTail.nextDep = r, Vt.depsTail = r, Vt.deps === r && (Vt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cs++, this.notify(t);
  }
  notify(t) {
    Ku();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Wu();
    }
  }
}
function dh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        dh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Uc = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ Symbol(
  ""
), Bc = /* @__PURE__ */ Symbol(
  ""
), us = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, r) {
  if (dr && Vt) {
    let n = Uc.get(e);
    n || Uc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Bu()), i.map = n, i.key = r), i.track();
  }
}
function Lr(e, t, r, n, i, o) {
  const s = Uc.get(e);
  if (!s) {
    cs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Ku(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && ju(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === us || !Pr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(us)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Ci)), so(e) && a(s.get(Bc)));
          break;
        case "delete":
          l || (a(s.get(Ci)), so(e) && a(s.get(Bc)));
          break;
        case "set":
          so(e) && a(s.get(Ci));
          break;
      }
  }
  Wu();
}
function Bi(e) {
  const t = /* @__PURE__ */ xt(e);
  return t === e ? t : (fn(t, "iterate", us), /* @__PURE__ */ Zn(e) ? t : t.map(pr));
}
function Il(e) {
  return fn(e = /* @__PURE__ */ xt(e), "iterate", us), e;
}
function br(e, t) {
  return /* @__PURE__ */ Kr(e) ? ho(/* @__PURE__ */ Ii(e) ? pr(t) : t) : pr(t);
}
const py = {
  __proto__: null,
  [Symbol.iterator]() {
    return oc(this, Symbol.iterator, (e) => br(this, e));
  },
  concat(...e) {
    return Bi(this).concat(
      ...e.map((t) => it(t) ? Bi(t) : t)
    );
  },
  entries() {
    return oc(this, "entries", (e) => (e[1] = br(this, e[1]), e));
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
      (r) => r.map((n) => br(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ir(
      this,
      "find",
      e,
      t,
      (r) => br(this, r),
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
      (r) => br(this, r),
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
    return sc(this, "includes", e);
  },
  indexOf(...e) {
    return sc(this, "indexOf", e);
  },
  join(e) {
    return Bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return sc(this, "lastIndexOf", e);
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
    return lf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return lf(this, "reduceRight", e, t);
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
    return oc(this, "values", (e) => br(this, e));
  }
};
function oc(e, t, r) {
  const n = Il(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Zn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const hy = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Il(e), a = s !== e && !/* @__PURE__ */ Zn(e), l = s[t];
  if (l !== hy[t]) {
    const u = l.apply(e, o);
    return a ? pr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, br(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function lf(e, t, r, n) {
  const i = Il(e), o = i !== e && !/* @__PURE__ */ Zn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = br(e, c)), r.call(this, c, br(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? br(e, l) : l;
}
function sc(e, t, r) {
  const n = /* @__PURE__ */ xt(e);
  fn(n, "iterate", us);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Xu(r[0]) ? (r[0] = /* @__PURE__ */ xt(r[0]), n[t](...r)) : i;
}
function To(e, t, r = []) {
  Hr(), Ku();
  const n = (/* @__PURE__ */ xt(e))[t].apply(e, r);
  return Wu(), Gr(), n;
}
const my = /* @__PURE__ */ $u("__proto__,__v_isRef,__isVue"), fh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function gy(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ xt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class ph {
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
      return n === (i ? o ? Ny : yh : o ? gh : mh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = py[r]))
        return l;
      if (r === "hasOwnProperty")
        return gy;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((Pr(r) ? fh.has(r) : my(r)) || (i || fn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ gn(a)) {
      const l = s && ju(r) ? a : a.value;
      return i && Ft(l) ? /* @__PURE__ */ qc(l) : l;
    }
    return Ft(a) ? i ? /* @__PURE__ */ qc(a) : /* @__PURE__ */ _o(a) : a;
  }
}
class hh extends ph {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && ju(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Zn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ xt(o), n = /* @__PURE__ */ xt(n)), !s && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : Mt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ xt(i) && (a ? _r(n, o) && Lr(t, "set", r, n) : Lr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Mt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Lr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Pr(r) || !fh.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      it(t) ? "length" : Ci
    ), Reflect.ownKeys(t);
  }
}
class yy extends ph {
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
const by = /* @__PURE__ */ new hh(), vy = /* @__PURE__ */ new yy(), Sy = /* @__PURE__ */ new hh(!0);
const Yc = (e) => e, na = (e) => Reflect.getPrototypeOf(e);
function _y(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ xt(i), s = so(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Yc : t ? ho : pr;
    return !t && fn(
      o,
      "iterate",
      l ? Bc : Ci
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
function ra(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wy(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ xt(o), a = /* @__PURE__ */ xt(i);
      e || (_r(i, a) && fn(s, "get", i), fn(s, "get", a));
      const { has: l } = na(s), c = t ? Yc : e ? ho : pr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ xt(i), "iterate", Ci), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ xt(o), a = /* @__PURE__ */ xt(i);
      return e || (_r(i, a) && fn(s, "has", i), fn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ xt(a), c = t ? Yc : e ? ho : pr;
      return !e && fn(l, "iterate", Ci), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return yn(
    r,
    e ? {
      add: ra("add"),
      set: ra("set"),
      delete: ra("delete"),
      clear: ra("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ xt(this), s = na(o), a = /* @__PURE__ */ xt(i), l = !t && !/* @__PURE__ */ Zn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || _r(i, l) && s.has.call(o, i) || _r(a, l) && s.has.call(o, a) || (o.add(l), Lr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Zn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ xt(o));
        const s = /* @__PURE__ */ xt(this), { has: a, get: l } = na(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ xt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? _r(o, d) && Lr(s, "set", i, o) : Lr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ xt(this), { has: s, get: a } = na(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ xt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Lr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ xt(this), o = i.size !== 0, s = i.clear();
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
    r[i] = _y(i, e, t);
  }), r;
}
function Yu(e, t) {
  const r = wy(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const ky = {
  get: /* @__PURE__ */ Yu(!1, !1)
}, xy = {
  get: /* @__PURE__ */ Yu(!1, !0)
}, My = {
  get: /* @__PURE__ */ Yu(!0, !1)
};
const mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ new WeakMap(), Ny = /* @__PURE__ */ new WeakMap();
function Py(e) {
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
function Ay(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Py(Q0(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return /* @__PURE__ */ Kr(e) ? e : qu(
    e,
    !1,
    by,
    ky,
    mh
  );
}
// @__NO_SIDE_EFFECTS__
function Cy(e) {
  return qu(
    e,
    !1,
    Sy,
    xy,
    gh
  );
}
// @__NO_SIDE_EFFECTS__
function qc(e) {
  return qu(
    e,
    !0,
    vy,
    My,
    yh
  );
}
function qu(e, t, r, n, i) {
  if (!Ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Ay(e);
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
function Ii(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ii(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ xt(t) : e;
}
function Iy(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && eh(e, "__v_skip", !0), e;
}
const pr = (e) => Ft(e) ? /* @__PURE__ */ _o(e) : e, ho = (e) => Ft(e) ? /* @__PURE__ */ qc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return bh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return bh(e, !0);
}
function bh(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new Ey(e, t);
}
class Ey {
  constructor(t, r) {
    this.dep = new Bu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ xt(t), this._value = r ? t : pr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Zn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ xt(t), _r(t, r) && (this._rawValue = t, this._value = n ? t : pr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const Oy = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function vh(e) {
  return /* @__PURE__ */ Ii(e) ? e : new Proxy(e, Oy);
}
class Fy {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Bu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Vt !== this)
      return sh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ch(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ty(e, t, r = !1) {
  let n, i;
  return dt(e) ? n = e : (n = e.get, i = e.set), new Fy(n, i, r);
}
const ia = {}, za = /* @__PURE__ */ new WeakMap();
let Mi;
function Dy(e, t = !1, r = Mi) {
  if (r) {
    let n = za.get(r);
    n || za.set(r, n = []), n.push(e);
  }
}
function Ly(e, t, r = Dt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (ee) => i ? ee : /* @__PURE__ */ Zn(ee) || i === !1 || i === 0 ? Rr(ee, 1) : Rr(ee);
  let d, u, f, p, _ = !1, g = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, _ = /* @__PURE__ */ Zn(e)) : /* @__PURE__ */ Ii(e) ? (u = () => c(e), _ = !0) : it(e) ? (g = !0, _ = e.some((ee) => /* @__PURE__ */ Ii(ee) || /* @__PURE__ */ Zn(ee)), u = () => e.map((ee) => {
    if (/* @__PURE__ */ gn(ee))
      return ee.value;
    if (/* @__PURE__ */ Ii(ee))
      return c(ee);
    if (dt(ee))
      return l ? l(ee, 2) : ee();
  })) : dt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const ee = Mi;
    Mi = d;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Mi = ee;
    }
  } : u = xr, t && i) {
    const ee = u, C = i === !0 ? 1 / 0 : i;
    u = () => Rr(ee(), C);
  }
  const h = uy(), y = () => {
    d.stop(), h && h.active && zu(h.effects, d);
  };
  if (o && t) {
    const ee = t;
    t = (...C) => {
      ee(...C), y();
    };
  }
  let B = g ? new Array(e.length).fill(ia) : ia;
  const D = (ee) => {
    if (!(!(d.flags & 1) || !d.dirty && !ee))
      if (t) {
        const C = d.run();
        if (i || _ || (g ? C.some((Y, $) => _r(Y, B[$])) : _r(C, B))) {
          f && f();
          const Y = Mi;
          Mi = d;
          try {
            const $ = [
              C,
              // pass undefined as the old value when it's changed for the first time
              B === ia ? void 0 : g && B[0] === ia ? [] : B,
              p
            ];
            B = C, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Mi = Y;
          }
        }
      } else
        d.run();
  };
  return a && a(D), d = new ih(u), d.scheduler = s ? () => s(D, !1) : D, p = (ee) => Dy(ee, !1, d), f = d.onStop = () => {
    const ee = za.get(d);
    if (ee) {
      if (l)
        l(ee, 4);
      else
        for (const C of ee) C();
      za.delete(d);
    }
  }, t ? n ? D(!0) : B = d.run() : s ? s(D.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function Rr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ft(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Rr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Rr(e[n], t, r);
  else if (Xp(e) || so(e))
    e.forEach((n) => {
      Rr(n, t, r);
    });
  else if (Qp(e)) {
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
function Cs(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    El(i, t, r);
  }
}
function Ar(e, t, r, n) {
  if (dt(e)) {
    const i = Cs(e, t, r, n);
    return i && Jp(i) && i.catch((o) => {
      El(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ar(e[o], t, r, n));
    return i;
  }
}
function El(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Dt;
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
      Hr(), Cs(o, null, 10, [
        e,
        l,
        c
      ]), Gr();
      return;
    }
  }
  Ry(e, r, i, n, s);
}
function Ry(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const wn = [];
let yr = -1;
const ao = [];
let ti = null, Xi = 0;
const Sh = /* @__PURE__ */ Promise.resolve();
let ja = null;
function Ol(e) {
  const t = ja || Sh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vy(e) {
  let t = yr + 1, r = wn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = wn[n], o = ds(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ju(e) {
  if (!(e.flags & 1)) {
    const t = ds(e), r = wn[wn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ds(r) ? wn.push(e) : wn.splice(Vy(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  ja || (ja = Sh.then(kh));
}
function $y(e) {
  it(e) ? ao.push(...e) : ti && e.id === -1 ? ti.splice(Xi + 1, 0, e) : e.flags & 1 || (ao.push(e), e.flags |= 1), _h();
}
function cf(e, t, r = yr + 1) {
  for (; r < wn.length; r++) {
    const n = wn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      wn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function wh(e) {
  if (ao.length) {
    const t = [...new Set(ao)].sort(
      (r, n) => ds(r) - ds(n)
    );
    if (ao.length = 0, ti) {
      ti.push(...t);
      return;
    }
    for (ti = t, Xi = 0; Xi < ti.length; Xi++) {
      const r = ti[Xi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ti = null, Xi = 0;
  }
}
const ds = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kh(e) {
  try {
    for (yr = 0; yr < wn.length; yr++) {
      const t = wn[yr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Cs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; yr < wn.length; yr++) {
      const t = wn[yr];
      t && (t.flags &= -2);
    }
    yr = -1, wn.length = 0, wh(), ja = null, (wn.length || ao.length) && kh();
  }
}
let Gn = null, xh = null;
function Ha(e) {
  const t = Gn;
  return Gn = e, xh = e && e.type.__scopeId || null, t;
}
function Mh(e, t = Gn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && _f(-1);
    const o = Ha(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ha(o), n._d && _f(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (Gn === null)
    return e;
  const r = Rl(Gn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Dt] = t[i];
    o && (dt(o) && (o = {
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
function vi(e, t, r, n) {
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
function zy(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function _a(e, t, r = !1) {
  const n = Vb();
  if (n || lo) {
    let i = lo ? lo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && dt(t) ? t.call(n && n.proxy) : t;
  }
}
const jy = /* @__PURE__ */ Symbol.for("v-scx"), Hy = () => _a(jy);
function Ei(e, t, r) {
  return Nh(e, t, r);
}
function Nh(e, t, r = Dt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ps) {
    if (o === "sync") {
      const p = Hy();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = xr, p.resume = xr, p.pause = xr, p;
    }
  }
  const d = pn;
  a.call = (p, _, g) => Ar(p, d, _, g);
  let u = !1;
  o === "post" ? a.scheduler = (p) => {
    En(p, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (p, _) => {
    _ ? p() : Ju(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const f = Ly(e, t, a);
  return ps && (c ? c.push(f) : l && f()), f;
}
function Gy(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? Ph(n, e) : () => n[e] : e.bind(n, n);
  let o;
  dt(t) ? o = t : (o = t.handler, r = t);
  const s = Es(this), a = Nh(i, o.bind(n), r);
  return s(), a;
}
function Ph(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ky = /* @__PURE__ */ Symbol("_vte"), Wy = (e) => e.__isTeleport, Uy = /* @__PURE__ */ Symbol("_leaveCb");
function Zu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ah(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function uf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function ts(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, h) => ts(
        g,
        t && (it(t) ? t[h] : t),
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
  const o = n.shapeFlag & 4 ? Rl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Dt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ xt(u), p = u === Dt ? qp : (g) => uf(d, g) ? !1 : Mt(f, g), _ = (g, h) => !(h && uf(d, h));
  if (c != null && c !== l) {
    if (df(t), Qt(c))
      d[c] = null, p(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const g = t;
      _(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (dt(l))
    Cs(l, a, 12, [s, d]);
  else {
    const g = Qt(l), h = /* @__PURE__ */ gn(l);
    if (g || h) {
      const y = () => {
        if (e.f) {
          const B = g ? p(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            it(B) && zu(B, o);
          else if (it(B))
            B.includes(o) || B.push(o);
          else if (g)
            d[l] = [o], p(l) && (u[l] = d[l]);
          else {
            const D = [o];
            _(l, e.k) && (l.value = D), e.k && (d[e.k] = D);
          }
        } else g ? (d[l] = s, p(l) && (u[l] = s)) : h && (_(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const B = () => {
          y(), Ga.delete(e);
        };
        B.id = -1, Ga.set(e, B), En(B, r);
      } else
        df(e), y();
    }
  }
}
function df(e) {
  const t = Ga.get(e);
  t && (t.flags |= 8, Ga.delete(e));
}
Cl().requestIdleCallback;
Cl().cancelIdleCallback;
const ns = (e) => !!e.type.__asyncLoader, Ch = (e) => e.type.__isKeepAlive;
function By(e, t) {
  Ih(e, "a", t);
}
function Yy(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, r = pn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Fl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Ch(i.parent.vnode) && qy(n, t, r, i), i = i.parent;
  }
}
function qy(e, t, r, n) {
  const i = Fl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Eh(() => {
    zu(n[t], i);
  }, r);
}
function Fl(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Hr();
      const a = Es(r), l = Ar(t, r, e, s);
      return a(), Gr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Br = (e) => (t, r = pn) => {
  (!ps || e === "sp") && Fl(e, (...n) => t(...n), r);
}, Xy = Br("bm"), Tl = Br("m"), Jy = Br(
  "bu"
), Zy = Br("u"), Is = Br(
  "bum"
), Eh = Br("um"), Qy = Br(
  "sp"
), eb = Br("rtg"), tb = Br("rtc");
function nb(e, t = pn) {
  Fl("ec", e, t);
}
const rb = "components", Oh = /* @__PURE__ */ Symbol.for("v-ndc");
function ib(e) {
  return Qt(e) ? ob(rb, e, !1) || e : e || Oh;
}
function ob(e, t, r = !0, n = !1) {
  const i = Gn || pn;
  if (i) {
    const o = i.type;
    {
      const a = Gb(
        o,
        !1
      );
      if (a && (a === t || a === Mn(t) || a === Al(Mn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ff(i[e] || o[e], t) || // global registration
      ff(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function ff(e, t) {
  return e && (e[t] || e[Mn(t)] || e[Al(Mn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ii(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Zn(e), c = /* @__PURE__ */ Kr(e), e = Il(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ho(pr(e[d])) : pr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ft(e))
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
const Xc = (e) => e ? Qh(e) ? Rl(e) : Xc(e.parent) : null, rs = (
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
    $parent: (e) => Xc(e.parent),
    $root: (e) => Xc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Th(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ju(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ol.bind(e.proxy)),
    $watch: (e) => Gy.bind(e)
  })
), ac = (e, t) => e !== Dt && !e.__isScriptSetup && Mt(e, t), sb = {
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
        if (ac(n, t))
          return s[t] = 1, n[t];
        if (i !== Dt && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Dt && Mt(r, t))
          return s[t] = 4, r[t];
        Jc && (s[t] = 0);
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
    if (r !== Dt && Mt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, Mt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ac(i, t) ? (i[t] = r, !0) : n !== Dt && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Dt && a[0] !== "$" && Mt(e, a) || ac(t, a) || Mt(o, a) || Mt(n, a) || Mt(rs, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Mt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function pf(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Jc = !0;
function ab(e) {
  const t = Th(e), r = e.proxy, n = e.ctx;
  Jc = !1, t.beforeCreate && hf(t.beforeCreate, e, "bc");
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
    updated: _,
    activated: g,
    deactivated: h,
    beforeDestroy: y,
    beforeUnmount: B,
    destroyed: D,
    unmounted: ee,
    render: C,
    renderTracked: Y,
    renderTriggered: $,
    errorCaptured: ne,
    serverPrefetch: _e,
    // public API
    expose: ye,
    inheritAttrs: we,
    // assets
    components: be,
    directives: pe,
    filters: ve
  } = t;
  if (c && lb(c, n, null), s)
    for (const me in s) {
      const ce = s[me];
      dt(ce) && (n[me] = ce.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Ft(me) && (e.data = /* @__PURE__ */ _o(me));
  }
  if (Jc = !0, o)
    for (const me in o) {
      const ce = o[me], O = dt(ce) ? ce.bind(r, r) : dt(ce.get) ? ce.get.bind(r, r) : xr, L = !dt(ce) && dt(ce.set) ? ce.set.bind(r) : xr, M = ut({
        get: O,
        set: L
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => M.value,
        set: (de) => M.value = de
      });
    }
  if (a)
    for (const me in a)
      Fh(a[me], n, r, me);
  if (l) {
    const me = dt(l) ? l.call(r) : l;
    Reflect.ownKeys(me).forEach((ce) => {
      zy(ce, me[ce]);
    });
  }
  d && hf(d, e, "c");
  function ie(me, ce) {
    it(ce) ? ce.forEach((O) => me(O.bind(r))) : ce && me(ce.bind(r));
  }
  if (ie(Xy, u), ie(Tl, f), ie(Jy, p), ie(Zy, _), ie(By, g), ie(Yy, h), ie(nb, ne), ie(tb, Y), ie(eb, $), ie(Is, B), ie(Eh, ee), ie(Qy, _e), it(ye))
    if (ye.length) {
      const me = e.exposed || (e.exposed = {});
      ye.forEach((ce) => {
        Object.defineProperty(me, ce, {
          get: () => r[ce],
          set: (O) => r[ce] = O,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === xr && (e.render = C), we != null && (e.inheritAttrs = we), be && (e.components = be), pe && (e.directives = pe), _e && Ah(e);
}
function lb(e, t, r = xr) {
  it(e) && (e = Zc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ft(i) ? "default" in i ? o = _a(
      i.from || n,
      i.default,
      !0
    ) : o = _a(i.from || n) : o = _a(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function hf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Fh(e, t, r, n) {
  let i = n.includes(".") ? Ph(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    dt(o) && Ei(i, o);
  } else if (dt(e))
    Ei(i, e.bind(r));
  else if (Ft(e))
    if (it(e))
      e.forEach((o) => Fh(o, t, r, n));
    else {
      const o = dt(e.handler) ? e.handler.bind(r) : t[e.handler];
      dt(o) && Ei(i, o, e);
    }
}
function Th(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ka(l, c, s, !0)
  ), Ka(l, t, s)), Ft(t) && o.set(t, l), l;
}
function Ka(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ka(e, o, r, !0), i && i.forEach(
    (s) => Ka(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = cb[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const cb = {
  data: mf,
  props: gf,
  emits: gf,
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
  watch: db,
  // provide / inject
  provide: mf,
  inject: ub
};
function mf(e, t) {
  return t ? e ? function() {
    return yn(
      dt(e) ? e.call(this, this) : e,
      dt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ub(e, t) {
  return Ho(Zc(e), Zc(t));
}
function Zc(e) {
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
function gf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    pf(e),
    pf(t ?? {})
  ) : t;
}
function db(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function Dh() {
  return {
    app: null,
    config: {
      isNativeTag: qp,
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
let fb = 0;
function pb(e, t) {
  return function(n, i = null) {
    dt(n) || (n = yn({}, n)), i != null && !Ft(i) && (i = null);
    const o = Dh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: fb++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Wb,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && dt(d.install) ? (s.add(d), d.install(c, ...u)) : dt(d) && (s.add(d), d(c, ...u))), c;
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
          const p = c._ceVNode || Ye(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, d, f), l = !0, c._container = d, d.__vue_app__ = c, Rl(p.component);
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
const hb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mn(t)}Modifiers`] || e[`${$i(t)}Modifiers`];
function mb(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Dt;
  let i = r;
  const o = t.startsWith("update:"), s = o && hb(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(Hu)));
  let a, l = n[a = nc(t)] || // also try camelCase event handler (#2249)
  n[a = nc(Mn(t))];
  !l && o && (l = n[a = nc($i(t))]), l && Ar(
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
const gb = /* @__PURE__ */ new WeakMap();
function Lh(e, t, r = !1) {
  const n = r ? gb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!dt(e)) {
    const l = (c) => {
      const d = Lh(c, t, !0);
      d && (a = !0, yn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ft(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : yn(s, o), Ft(e) && n.set(e, s), s);
}
function Dl(e, t) {
  return !e || !Ml(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, $i(t)) || Mt(e, t));
}
function yf(e) {
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
    ctx: _,
    inheritAttrs: g
  } = e, h = Ha(e);
  let y, B;
  try {
    if (r.shapeFlag & 4) {
      const ee = i || n, C = ee;
      y = vr(
        c.call(
          C,
          ee,
          d,
          u,
          p,
          f,
          _
        )
      ), B = a;
    } else {
      const ee = t;
      y = vr(
        ee.length > 1 ? ee(
          u,
          { attrs: a, slots: s, emit: l }
        ) : ee(
          u,
          null
        )
      ), B = t.props ? a : yb(a);
    }
  } catch (ee) {
    is.length = 0, El(ee, e, 1), y = Ye(si);
  }
  let D = y;
  if (B && g !== !1) {
    const ee = Object.keys(B), { shapeFlag: C } = D;
    ee.length && C & 7 && (o && ee.some(Nl) && (B = bb(
      B,
      o
    )), D = mo(D, B, !1, !0));
  }
  return r.dirs && (D = mo(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition && Zu(D, r.transition), y = D, Ha(h), y;
}
const yb = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ml(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, bb = (e, t) => {
  const r = {};
  for (const n in e)
    (!Nl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function vb(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? bf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Rh(s, n, f) && !Dl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? bf(n, s, c) : !0 : !!s;
  return !1;
}
function bf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Rh(t, e, o) && !Dl(r, o))
      return !0;
  }
  return !1;
}
function Rh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ft(n) && Ft(i) ? !Gu(n, i) : n !== i;
}
function Sb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Vh = {}, $h = () => Object.create(Vh), zh = (e) => Object.getPrototypeOf(e) === Vh;
function _b(e, t, r, n = !1) {
  const i = {}, o = $h();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ Cy(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function wb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ xt(i), [l] = e.propsOptions;
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
        if (Dl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (Mt(o, f))
            p !== o[f] && (o[f] = p, c = !0);
          else {
            const _ = Mn(f);
            i[_] = Qc(
              l,
              a,
              _,
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
    jh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = $i(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Qc(
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
  c && Lr(e.attrs, "set", "");
}
function jh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Zo(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = Mn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Dl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ xt(r), c = a || Dt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Qc(
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
function Qc(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = Mt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && dt(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Es(i);
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
    ] && (n === "" || n === $i(r)) && (n = !0));
  }
  return n;
}
const kb = /* @__PURE__ */ new WeakMap();
function Hh(e, t, r = !1) {
  const n = r ? kb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!dt(e)) {
    const d = (u) => {
      l = !0;
      const [f, p] = Hh(u, t, !0);
      yn(s, f), p && a.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ft(e) && n.set(e, oo), oo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Mn(o[d]);
      vf(u) && (s[u] = Dt);
    }
  else if (o)
    for (const d in o) {
      const u = Mn(d);
      if (vf(u)) {
        const f = o[d], p = s[u] = it(f) || dt(f) ? { type: f } : yn({}, f), _ = p.type;
        let g = !1, h = !0;
        if (it(_))
          for (let y = 0; y < _.length; ++y) {
            const B = _[y], D = dt(B) && B.name;
            if (D === "Boolean") {
              g = !0;
              break;
            } else D === "String" && (h = !1);
          }
        else
          g = dt(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = g, p[
          1
          /* shouldCastTrue */
        ] = h, (g || Mt(p, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ft(e) && n.set(e, c), c;
}
function vf(e) {
  return e[0] !== "$" && !Zo(e);
}
const Qu = (e) => e === "_" || e === "_ctx" || e === "$stable", ed = (e) => it(e) ? e.map(vr) : [vr(e)], xb = (e, t, r) => {
  if (t._n)
    return t;
  const n = Mh((...i) => ed(t(...i)), r);
  return n._c = !1, n;
}, Gh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Qu(i)) continue;
    const o = e[i];
    if (dt(o))
      t[i] = xb(i, o, n);
    else if (o != null) {
      const s = ed(o);
      t[i] = () => s;
    }
  }
}, Kh = (e, t) => {
  const r = ed(t);
  e.slots.default = () => r;
}, Wh = (e, t, r) => {
  for (const n in t)
    (r || !Qu(n)) && (e[n] = t[n]);
}, Mb = (e, t, r) => {
  const n = e.slots = $h();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Wh(n, t, r), r && eh(n, "_", i, !0)) : Gh(t, n);
  } else t && Kh(e, t);
}, Nb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Dt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Wh(i, t, r) : (o = !t.$stable, Gh(t, i)), s = t;
  } else t && (Kh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Qu(a) && s[a] == null && delete i[a];
}, En = Eb;
function Pb(e) {
  return Ab(e);
}
function Ab(e, t) {
  const r = Cl();
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
    setScopeId: p = xr,
    insertStaticContent: _
  } = e, g = (m, S, V, w = null, T = null, z = null, Z = void 0, E = null, N = !!S.dynamicChildren) => {
    if (m === S)
      return;
    m && !Do(m, S) && (w = le(m), de(m, T, z, !0), m = null), S.patchFlag === -2 && (N = !1, S.dynamicChildren = null);
    const { type: b, ref: A, shapeFlag: X } = S;
    switch (b) {
      case Ll:
        h(m, S, V, w);
        break;
      case si:
        y(m, S, V, w);
        break;
      case cc:
        m == null && B(S, V, w, Z);
        break;
      case Ze:
        be(
          m,
          S,
          V,
          w,
          T,
          z,
          Z,
          E,
          N
        );
        break;
      default:
        X & 1 ? C(
          m,
          S,
          V,
          w,
          T,
          z,
          Z,
          E,
          N
        ) : X & 6 ? pe(
          m,
          S,
          V,
          w,
          T,
          z,
          Z,
          E,
          N
        ) : (X & 64 || X & 128) && b.process(
          m,
          S,
          V,
          w,
          T,
          z,
          Z,
          E,
          N,
          v
        );
    }
    A != null && T ? ts(A, m && m.ref, z, S || m, !S) : A == null && m && m.ref != null && ts(m.ref, null, z, m, !0);
  }, h = (m, S, V, w) => {
    if (m == null)
      n(
        S.el = a(S.children),
        V,
        w
      );
    else {
      const T = S.el = m.el;
      S.children !== m.children && c(T, S.children);
    }
  }, y = (m, S, V, w) => {
    m == null ? n(
      S.el = l(S.children || ""),
      V,
      w
    ) : S.el = m.el;
  }, B = (m, S, V, w) => {
    [m.el, m.anchor] = _(
      m.children,
      S,
      V,
      w,
      m.el,
      m.anchor
    );
  }, D = ({ el: m, anchor: S }, V, w) => {
    let T;
    for (; m && m !== S; )
      T = f(m), n(m, V, w), m = T;
    n(S, V, w);
  }, ee = ({ el: m, anchor: S }) => {
    let V;
    for (; m && m !== S; )
      V = f(m), i(m), m = V;
    i(S);
  }, C = (m, S, V, w, T, z, Z, E, N) => {
    if (S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), m == null)
      Y(
        S,
        V,
        w,
        T,
        z,
        Z,
        E,
        N
      );
    else {
      const b = m.el && m.el._isVueCE ? m.el : null;
      try {
        b && b._beginPatch(), _e(
          m,
          S,
          T,
          z,
          Z,
          E,
          N
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, Y = (m, S, V, w, T, z, Z, E) => {
    let N, b;
    const { props: A, shapeFlag: X, transition: ge, dirs: he } = m;
    if (N = m.el = s(
      m.type,
      z,
      A && A.is,
      A
    ), X & 8 ? d(N, m.children) : X & 16 && ne(
      m.children,
      N,
      null,
      w,
      T,
      lc(m, z),
      Z,
      E
    ), he && vi(m, null, w, "created"), $(N, m, m.scopeId, Z, w), A) {
      for (const se in A)
        se !== "value" && !Zo(se) && o(N, se, null, A[se], z, w);
      "value" in A && o(N, "value", null, A.value, z), (b = A.onVnodeBeforeMount) && mr(b, w, m);
    }
    he && vi(m, null, w, "beforeMount");
    const xe = Cb(T, ge);
    xe && ge.beforeEnter(N), n(N, S, V), ((b = A && A.onVnodeMounted) || xe || he) && En(() => {
      try {
        b && mr(b, w, m), xe && ge.enter(N), he && vi(m, null, w, "mounted");
      } finally {
      }
    }, T);
  }, $ = (m, S, V, w, T) => {
    if (V && p(m, V), w)
      for (let z = 0; z < w.length; z++)
        p(m, w[z]);
    if (T) {
      let z = T.subTree;
      if (S === z || qh(z.type) && (z.ssContent === S || z.ssFallback === S)) {
        const Z = T.vnode;
        $(
          m,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          T.parent
        );
      }
    }
  }, ne = (m, S, V, w, T, z, Z, E, N = 0) => {
    for (let b = N; b < m.length; b++) {
      const A = m[b] = E ? Fr(m[b]) : vr(m[b]);
      g(
        null,
        A,
        S,
        V,
        w,
        T,
        z,
        Z,
        E
      );
    }
  }, _e = (m, S, V, w, T, z, Z) => {
    const E = S.el = m.el;
    let { patchFlag: N, dynamicChildren: b, dirs: A } = S;
    N |= m.patchFlag & 16;
    const X = m.props || Dt, ge = S.props || Dt;
    let he;
    if (V && Si(V, !1), (he = ge.onVnodeBeforeUpdate) && mr(he, V, S, m), A && vi(S, m, V, "beforeUpdate"), V && Si(V, !0), (X.innerHTML && ge.innerHTML == null || X.textContent && ge.textContent == null) && d(E, ""), b ? ye(
      m.dynamicChildren,
      b,
      E,
      V,
      w,
      lc(S, T),
      z
    ) : Z || ce(
      m,
      S,
      E,
      null,
      V,
      w,
      lc(S, T),
      z,
      !1
    ), N > 0) {
      if (N & 16)
        we(E, X, ge, V, T);
      else if (N & 2 && X.class !== ge.class && o(E, "class", null, ge.class, T), N & 4 && o(E, "style", X.style, ge.style, T), N & 8) {
        const xe = S.dynamicProps;
        for (let se = 0; se < xe.length; se++) {
          const ke = xe[se], j = X[ke], ae = ge[ke];
          (ae !== j || ke === "value") && o(E, ke, j, ae, T, V);
        }
      }
      N & 1 && m.children !== S.children && d(E, S.children);
    } else !Z && b == null && we(E, X, ge, V, T);
    ((he = ge.onVnodeUpdated) || A) && En(() => {
      he && mr(he, V, S, m), A && vi(S, m, V, "updated");
    }, w);
  }, ye = (m, S, V, w, T, z, Z) => {
    for (let E = 0; E < S.length; E++) {
      const N = m[E], b = S[E], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Do(N, b) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? u(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      g(
        N,
        b,
        A,
        null,
        w,
        T,
        z,
        Z,
        !0
      );
    }
  }, we = (m, S, V, w, T) => {
    if (S !== V) {
      if (S !== Dt)
        for (const z in S)
          !Zo(z) && !(z in V) && o(
            m,
            z,
            S[z],
            null,
            T,
            w
          );
      for (const z in V) {
        if (Zo(z)) continue;
        const Z = V[z], E = S[z];
        Z !== E && z !== "value" && o(m, z, E, Z, T, w);
      }
      "value" in V && o(m, "value", S.value, V.value, T);
    }
  }, be = (m, S, V, w, T, z, Z, E, N) => {
    const b = S.el = m ? m.el : a(""), A = S.anchor = m ? m.anchor : a("");
    let { patchFlag: X, dynamicChildren: ge, slotScopeIds: he } = S;
    he && (E = E ? E.concat(he) : he), m == null ? (n(b, V, w), n(A, V, w), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      V,
      A,
      T,
      z,
      Z,
      E,
      N
    )) : X > 0 && X & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === ge.length ? (ye(
      m.dynamicChildren,
      ge,
      V,
      T,
      z,
      Z,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || T && S === T.subTree) && Uh(
      m,
      S,
      !0
      /* shallow */
    )) : ce(
      m,
      S,
      V,
      A,
      T,
      z,
      Z,
      E,
      N
    );
  }, pe = (m, S, V, w, T, z, Z, E, N) => {
    S.slotScopeIds = E, m == null ? S.shapeFlag & 512 ? T.ctx.activate(
      S,
      V,
      w,
      Z,
      N
    ) : ve(
      S,
      V,
      w,
      T,
      z,
      Z,
      N
    ) : fe(m, S, N);
  }, ve = (m, S, V, w, T, z, Z) => {
    const E = m.component = Rb(
      m,
      w,
      T
    );
    if (Ch(m) && (E.ctx.renderer = v), $b(E, !1, Z), E.asyncDep) {
      if (T && T.registerDep(E, ie, Z), !m.el) {
        const N = E.subTree = Ye(si);
        y(null, N, S, V), m.placeholder = N.el;
      }
    } else
      ie(
        E,
        m,
        S,
        V,
        T,
        z,
        Z
      );
  }, fe = (m, S, V) => {
    const w = S.component = m.component;
    if (vb(m, S, V))
      if (w.asyncDep && !w.asyncResolved) {
        me(w, S, V);
        return;
      } else
        w.next = S, w.update();
    else
      S.el = m.el, w.vnode = S;
  }, ie = (m, S, V, w, T, z, Z) => {
    const E = () => {
      if (m.isMounted) {
        let { next: X, bu: ge, u: he, parent: xe, vnode: se } = m;
        {
          const te = Bh(m);
          if (te) {
            X && (X.el = se.el, me(m, X, Z)), te.asyncDep.then(() => {
              En(() => {
                m.isUnmounted || b();
              }, T);
            });
            return;
          }
        }
        let ke = X, j;
        Si(m, !1), X ? (X.el = se.el, me(m, X, Z)) : X = se, ge && Sa(ge), (j = X.props && X.props.onVnodeBeforeUpdate) && mr(j, xe, X, se), Si(m, !0);
        const ae = yf(m), G = m.subTree;
        m.subTree = ae, g(
          G,
          ae,
          // parent may have changed if it's in a teleport
          u(G.el),
          // anchor may have changed if it's in a fragment
          le(G),
          m,
          T,
          z
        ), X.el = ae.el, ke === null && Sb(m, ae.el), he && En(he, T), (j = X.props && X.props.onVnodeUpdated) && En(
          () => mr(j, xe, X, se),
          T
        );
      } else {
        let X;
        const { el: ge, props: he } = S, { bm: xe, m: se, parent: ke, root: j, type: ae } = m, G = ns(S);
        Si(m, !1), xe && Sa(xe), !G && (X = he && he.onVnodeBeforeMount) && mr(X, ke, S), Si(m, !0);
        {
          j.ce && j.ce._hasShadowRoot() && j.ce._injectChildStyle(
            ae,
            m.parent ? m.parent.type : void 0
          );
          const te = m.subTree = yf(m);
          g(
            null,
            te,
            V,
            w,
            m,
            T,
            z
          ), S.el = te.el;
        }
        if (se && En(se, T), !G && (X = he && he.onVnodeMounted)) {
          const te = S;
          En(
            () => mr(X, ke, te),
            T
          );
        }
        (S.shapeFlag & 256 || ke && ns(ke.vnode) && ke.vnode.shapeFlag & 256) && m.a && En(m.a, T), m.isMounted = !0, S = V = w = null;
      }
    };
    m.scope.on();
    const N = m.effect = new ih(E);
    m.scope.off();
    const b = m.update = N.run.bind(N), A = m.job = N.runIfDirty.bind(N);
    A.i = m, A.id = m.uid, N.scheduler = () => Ju(A), Si(m, !0), b();
  }, me = (m, S, V) => {
    S.component = m;
    const w = m.vnode.props;
    m.vnode = S, m.next = null, wb(m, S.props, w, V), Nb(m, S.children, V), Hr(), cf(m), Gr();
  }, ce = (m, S, V, w, T, z, Z, E, N = !1) => {
    const b = m && m.children, A = m ? m.shapeFlag : 0, X = S.children, { patchFlag: ge, shapeFlag: he } = S;
    if (ge > 0) {
      if (ge & 128) {
        L(
          b,
          X,
          V,
          w,
          T,
          z,
          Z,
          E,
          N
        );
        return;
      } else if (ge & 256) {
        O(
          b,
          X,
          V,
          w,
          T,
          z,
          Z,
          E,
          N
        );
        return;
      }
    }
    he & 8 ? (A & 16 && P(b, T, z), X !== b && d(V, X)) : A & 16 ? he & 16 ? L(
      b,
      X,
      V,
      w,
      T,
      z,
      Z,
      E,
      N
    ) : P(b, T, z, !0) : (A & 8 && d(V, ""), he & 16 && ne(
      X,
      V,
      w,
      T,
      z,
      Z,
      E,
      N
    ));
  }, O = (m, S, V, w, T, z, Z, E, N) => {
    m = m || oo, S = S || oo;
    const b = m.length, A = S.length, X = Math.min(b, A);
    let ge;
    for (ge = 0; ge < X; ge++) {
      const he = S[ge] = N ? Fr(S[ge]) : vr(S[ge]);
      g(
        m[ge],
        he,
        V,
        null,
        T,
        z,
        Z,
        E,
        N
      );
    }
    b > A ? P(
      m,
      T,
      z,
      !0,
      !1,
      X
    ) : ne(
      S,
      V,
      w,
      T,
      z,
      Z,
      E,
      N,
      X
    );
  }, L = (m, S, V, w, T, z, Z, E, N) => {
    let b = 0;
    const A = S.length;
    let X = m.length - 1, ge = A - 1;
    for (; b <= X && b <= ge; ) {
      const he = m[b], xe = S[b] = N ? Fr(S[b]) : vr(S[b]);
      if (Do(he, xe))
        g(
          he,
          xe,
          V,
          null,
          T,
          z,
          Z,
          E,
          N
        );
      else
        break;
      b++;
    }
    for (; b <= X && b <= ge; ) {
      const he = m[X], xe = S[ge] = N ? Fr(S[ge]) : vr(S[ge]);
      if (Do(he, xe))
        g(
          he,
          xe,
          V,
          null,
          T,
          z,
          Z,
          E,
          N
        );
      else
        break;
      X--, ge--;
    }
    if (b > X) {
      if (b <= ge) {
        const he = ge + 1, xe = he < A ? S[he].el : w;
        for (; b <= ge; )
          g(
            null,
            S[b] = N ? Fr(S[b]) : vr(S[b]),
            V,
            xe,
            T,
            z,
            Z,
            E,
            N
          ), b++;
      }
    } else if (b > ge)
      for (; b <= X; )
        de(m[b], T, z, !0), b++;
    else {
      const he = b, xe = b, se = /* @__PURE__ */ new Map();
      for (b = xe; b <= ge; b++) {
        const U = S[b] = N ? Fr(S[b]) : vr(S[b]);
        U.key != null && se.set(U.key, b);
      }
      let ke, j = 0;
      const ae = ge - xe + 1;
      let G = !1, te = 0;
      const H = new Array(ae);
      for (b = 0; b < ae; b++) H[b] = 0;
      for (b = he; b <= X; b++) {
        const U = m[b];
        if (j >= ae) {
          de(U, T, z, !0);
          continue;
        }
        let x;
        if (U.key != null)
          x = se.get(U.key);
        else
          for (ke = xe; ke <= ge; ke++)
            if (H[ke - xe] === 0 && Do(U, S[ke])) {
              x = ke;
              break;
            }
        x === void 0 ? de(U, T, z, !0) : (H[x - xe] = b + 1, x >= te ? te = x : G = !0, g(
          U,
          S[x],
          V,
          null,
          T,
          z,
          Z,
          E,
          N
        ), j++);
      }
      const J = G ? Ib(H) : oo;
      for (ke = J.length - 1, b = ae - 1; b >= 0; b--) {
        const U = xe + b, x = S[U], re = S[U + 1], ue = U + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          re.el || Yh(re)
        ) : w;
        H[b] === 0 ? g(
          null,
          x,
          V,
          ue,
          T,
          z,
          Z,
          E,
          N
        ) : G && (ke < 0 || b !== J[ke] ? M(x, V, ue, 2) : ke--);
      }
    }
  }, M = (m, S, V, w, T = null) => {
    const { el: z, type: Z, transition: E, children: N, shapeFlag: b } = m;
    if (b & 6) {
      M(m.component.subTree, S, V, w);
      return;
    }
    if (b & 128) {
      m.suspense.move(S, V, w);
      return;
    }
    if (b & 64) {
      Z.move(m, S, V, v);
      return;
    }
    if (Z === Ze) {
      n(z, S, V);
      for (let X = 0; X < N.length; X++)
        M(N[X], S, V, w);
      n(m.anchor, S, V);
      return;
    }
    if (Z === cc) {
      D(m, S, V);
      return;
    }
    if (w !== 2 && b & 1 && E)
      if (w === 0)
        E.beforeEnter(z), n(z, S, V), En(() => E.enter(z), T);
      else {
        const { leave: X, delayLeave: ge, afterLeave: he } = E, xe = () => {
          m.ctx.isUnmounted ? i(z) : n(z, S, V);
        }, se = () => {
          z._isLeaving && z[Uy](
            !0
            /* cancelled */
          ), X(z, () => {
            xe(), he && he();
          });
        };
        ge ? ge(z, xe, se) : se();
      }
    else
      n(z, S, V);
  }, de = (m, S, V, w = !1, T = !1) => {
    const {
      type: z,
      props: Z,
      ref: E,
      children: N,
      dynamicChildren: b,
      shapeFlag: A,
      patchFlag: X,
      dirs: ge,
      cacheIndex: he,
      memo: xe
    } = m;
    if (X === -2 && (T = !1), E != null && (Hr(), ts(E, null, V, m, !0), Gr()), he != null && (S.renderCache[he] = void 0), A & 256) {
      S.ctx.deactivate(m);
      return;
    }
    const se = A & 1 && ge, ke = !ns(m);
    let j;
    if (ke && (j = Z && Z.onVnodeBeforeUnmount) && mr(j, S, m), A & 6)
      k(m.component, V, w);
    else {
      if (A & 128) {
        m.suspense.unmount(V, w);
        return;
      }
      se && vi(m, null, S, "beforeUnmount"), A & 64 ? m.type.remove(
        m,
        S,
        V,
        v,
        w
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== Ze || X > 0 && X & 64) ? P(
        b,
        S,
        V,
        !1,
        !0
      ) : (z === Ze && X & 384 || !T && A & 16) && P(N, S, V), w && Q(m);
    }
    const ae = xe != null && he == null;
    (ke && (j = Z && Z.onVnodeUnmounted) || se || ae) && En(() => {
      j && mr(j, S, m), se && vi(m, null, S, "unmounted"), ae && (m.el = null);
    }, V);
  }, Q = (m) => {
    const { type: S, el: V, anchor: w, transition: T } = m;
    if (S === Ze) {
      R(V, w);
      return;
    }
    if (S === cc) {
      ee(m);
      return;
    }
    const z = () => {
      i(V), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (m.shapeFlag & 1 && T && !T.persisted) {
      const { leave: Z, delayLeave: E } = T, N = () => Z(V, z);
      E ? E(m.el, z, N) : N();
    } else
      z();
  }, R = (m, S) => {
    let V;
    for (; m !== S; )
      V = f(m), i(m), m = V;
    i(S);
  }, k = (m, S, V) => {
    const { bum: w, scope: T, job: z, subTree: Z, um: E, m: N, a: b } = m;
    Sf(N), Sf(b), w && Sa(w), T.stop(), z && (z.flags |= 8, de(Z, m, S, V)), E && En(E, S), En(() => {
      m.isUnmounted = !0;
    }, S);
  }, P = (m, S, V, w = !1, T = !1, z = 0) => {
    for (let Z = z; Z < m.length; Z++)
      de(m[Z], S, V, w, T);
  }, le = (m) => {
    if (m.shapeFlag & 6)
      return le(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const S = f(m.anchor || m.el), V = S && S[Ky];
    return V ? f(V) : S;
  };
  let q = !1;
  const I = (m, S, V) => {
    let w;
    m == null ? S._vnode && (de(S._vnode, null, null, !0), w = S._vnode.component) : g(
      S._vnode || null,
      m,
      S,
      null,
      null,
      null,
      V
    ), S._vnode = m, q || (q = !0, cf(w), wh(), q = !1);
  }, v = {
    p: g,
    um: de,
    m: M,
    r: Q,
    mt: ve,
    mc: ne,
    pc: ce,
    pbc: ye,
    n: le,
    o: e
  };
  return {
    render: I,
    hydrate: void 0,
    createApp: pb(I)
  };
}
function lc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Si({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Uh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Uh(s, a)), a.type === Ll && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === si && !a.el && (a.el = s.el);
    }
}
function Ib(e) {
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
function Bh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bh(t);
}
function Sf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yh(t.subTree) : null;
}
const qh = (e) => e.__isSuspense;
function Eb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : $y(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Ll = /* @__PURE__ */ Symbol.for("v-txt"), si = /* @__PURE__ */ Symbol.for("v-cmt"), cc = /* @__PURE__ */ Symbol.for("v-stc"), is = [];
let Kn = null;
function Le(e = !1) {
  is.push(Kn = e ? null : []);
}
function Ob() {
  is.pop(), Kn = is[is.length - 1] || null;
}
let fs = 1;
function _f(e, t = !1) {
  fs += e, e < 0 && Kn && t && (Kn.hasOnce = !0);
}
function Xh(e) {
  return e.dynamicChildren = fs > 0 ? Kn || oo : null, Ob(), fs > 0 && Kn && Kn.push(e), e;
}
function Ve(e, t, r, n, i, o) {
  return Xh(
    Ne(
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
function Rn(e, t, r, n, i) {
  return Xh(
    Ye(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function Jh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Do(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zh = ({ key: e }) => e ?? null, wa = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ gn(e) || dt(e) ? { i: Gn, r: e, k: t, f: !!r } : e : null);
function Ne(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zh(t),
    ref: t && wa(t),
    scopeId: xh,
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
    ctx: Gn
  };
  return a ? (td(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), fs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Kn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Kn.push(l), l;
}
const Ye = Fb;
function Fb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Oh) && (e = si), Jh(e)) {
    const a = mo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && td(a, r), fs > 0 && !o && Kn && (a.shapeFlag & 6 ? Kn[Kn.indexOf(e)] = a : Kn.push(a)), a.patchFlag = -2, a;
  }
  if (Kb(e) && (e = e.__vccOpts), t) {
    t = Tb(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ft(l) && (/* @__PURE__ */ Xu(l) && !it(l) && (l = yn({}, l)), t.style = Ot(l));
  }
  const s = Qt(e) ? 1 : qh(e) ? 128 : Wy(e) ? 64 : Ft(e) ? 4 : dt(e) ? 2 : 0;
  return Ne(
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
function Tb(e) {
  return e ? /* @__PURE__ */ Xu(e) || zh(e) ? yn({}, e) : e : null;
}
function mo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Zh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(wa(t)) : [o, wa(t)] : wa(t)
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
  return l && n && Zu(
    d,
    l.clone(d)
  ), d;
}
function Go(e = " ", t = 0) {
  return Ye(Ll, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (Le(), Rn(si, null, e)) : Ye(si, null, e);
}
function vr(e) {
  return e == null || typeof e == "boolean" ? Ye(si) : it(e) ? Ye(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jh(e) ? Fr(e) : Ye(Ll, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mo(e);
}
function td(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), td(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !zh(t) ? t._ctx = Gn : i === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else dt(t) ? (t = { default: t, _ctx: Gn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Go(t)]) : r = 8);
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
        t.style = Ot([t.style, n.style]);
      else if (Ml(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function mr(e, t, r, n = null) {
  Ar(e, t, 7, [
    r,
    n
  ]);
}
const Db = Dh();
let Lb = 0;
function Rb(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Db, o = {
    uid: Lb++,
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
    scope: new cy(
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
    propsOptions: Hh(n, i),
    emitsOptions: Lh(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Dt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Dt,
    data: Dt,
    props: Dt,
    attrs: Dt,
    slots: Dt,
    refs: Dt,
    setupState: Dt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = mb.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Vb = () => pn || Gn;
let Wa, eu;
{
  const e = Cl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Wa = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), eu = t(
    "__VUE_SSR_SETTERS__",
    (r) => ps = r
  );
}
const Es = (e) => {
  const t = pn;
  return Wa(e), e.scope.on(), () => {
    e.scope.off(), Wa(t);
  };
}, wf = () => {
  pn && pn.scope.off(), Wa(null);
};
function Qh(e) {
  return e.vnode.shapeFlag & 4;
}
let ps = !1;
function $b(e, t = !1, r = !1) {
  t && eu(t);
  const { props: n, children: i } = e.vnode, o = Qh(e);
  _b(e, n, o, t), Mb(e, i, r || t);
  const s = o ? zb(e, t) : void 0;
  return t && eu(!1), s;
}
function zb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sb);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? Hb(e) : null, o = Es(e), s = Cs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Jp(s);
    if (Gr(), o(), (a || e.sp) && !ns(e) && Ah(e), a) {
      if (s.then(wf, wf), t)
        return s.then((l) => {
          kf(e, l);
        }).catch((l) => {
          El(l, e, 0);
        });
      e.asyncDep = s;
    } else
      kf(e, s);
  } else
    em(e);
}
function kf(e, t, r) {
  dt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ft(t) && (e.setupState = vh(t)), em(e);
}
function em(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || xr);
  {
    const i = Es(e);
    Hr();
    try {
      ab(e);
    } finally {
      Gr(), i();
    }
  }
}
const jb = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Hb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, jb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Rl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vh(Iy(e.exposed)), {
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
function Gb(e, t = !0) {
  return dt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kb(e) {
  return dt(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ Ty(e, t, ps), Wb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tu;
const xf = typeof window < "u" && window.trustedTypes;
if (xf)
  try {
    tu = /* @__PURE__ */ xf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tm = tu ? (e) => tu.createHTML(e) : (e) => e, Ub = "http://www.w3.org/2000/svg", Bb = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, Mf = Or && /* @__PURE__ */ Or.createElement("template"), Yb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(Ub, e) : t === "mathml" ? Or.createElementNS(Bb, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
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
      Mf.innerHTML = tm(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Mf.content;
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
}, qb = /* @__PURE__ */ Symbol("_vtc");
function Xb(e, t, r) {
  const n = e[qb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ua = /* @__PURE__ */ Symbol("_vod"), nm = /* @__PURE__ */ Symbol("_vsh"), Li = {
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
  e.style.display = t ? e[Ua] : "none", e[nm] = !t;
}
const Jb = /* @__PURE__ */ Symbol(""), Zb = /(?:^|;)\s*display\s*:/;
function Qb(e, t, r) {
  const n = e.style, i = Qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Qt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && ka(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && ka(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), ka(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Jb];
      s && (r += ";" + s), n.cssText = r, o = Zb.test(r);
    }
  } else t && e.removeAttribute("style");
  Ua in e && (e[Ua] = o ? n.display : "", e[nm] && (n.display = "none"));
}
const Nf = /\s*!important$/;
function ka(e, t, r) {
  if (it(r))
    r.forEach((n) => ka(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = ev(e, t);
    Nf.test(r) ? e.setProperty(
      $i(n),
      r.replace(Nf, ""),
      "important"
    ) : e[n] = r;
  }
}
const Pf = ["Webkit", "Moz", "ms"], uc = {};
function ev(e, t) {
  const r = uc[t];
  if (r)
    return r;
  let n = Mn(t);
  if (n !== "filter" && n in e)
    return uc[t] = n;
  n = Al(n);
  for (let i = 0; i < Pf.length; i++) {
    const o = Pf[i] + n;
    if (o in e)
      return uc[t] = o;
  }
  return t;
}
const Af = "http://www.w3.org/1999/xlink";
function Cf(e, t, r, n, i, o = ay(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Af, t.slice(6, t.length)) : e.setAttributeNS(Af, t, r) : r == null || o && !th(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(r) ? String(r) : r
  );
}
function If(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? tm(r) : r);
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
    a === "boolean" ? r = th(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
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
function tv(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ef = /* @__PURE__ */ Symbol("_vei");
function nv(e, t, r, n, i = null) {
  const o = e[Ef] || (e[Ef] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = rv(t);
    if (n) {
      const c = o[t] = sv(
        n,
        i
      );
      Ji(e, a, c, l);
    } else s && (tv(e, a, s, l), o[t] = void 0);
  }
}
const Of = /(?:Once|Passive|Capture)$/;
function rv(e) {
  let t;
  if (Of.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Of); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $i(e.slice(2)), t];
}
let dc = 0;
const iv = /* @__PURE__ */ Promise.resolve(), ov = () => dc || (iv.then(() => dc = 0), dc = Date.now());
function sv(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      av(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = ov(), r;
}
function av(e, t) {
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
const Ff = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lv = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Xb(e, n, s) : t === "style" ? Qb(e, r, n) : Ml(t) ? Nl(t) || nv(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cv(e, t, n, s)) ? (If(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (uv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? If(e, Mn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Cf(e, t, n, s));
};
function cv(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ff(t) && dt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ff(t) && Qt(r) ? !1 : t in e;
}
function uv(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Mn(t);
  return Array.isArray(r) ? r.some((i) => Mn(i) === n) : Object.keys(r).some((i) => Mn(i) === n);
}
const Tf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => Sa(t, r) : t;
};
function dv(e) {
  e.target.composing = !0;
}
function Df(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fc = /* @__PURE__ */ Symbol("_assign");
function Lf(e, t, r) {
  return t && (e = e.trim()), r && (e = Hu(e)), e;
}
const Rf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[fc] = Tf(i);
    const o = n || i.props && i.props.type === "number";
    Ji(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fc](Lf(e.value, r, o));
    }), (r || o) && Ji(e, "change", () => {
      e.value = Lf(e.value, r, o);
    }), t || (Ji(e, "compositionstart", dv), Ji(e, "compositionend", Df), Ji(e, "change", Df));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[fc] = Tf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, fv = ["ctrl", "shift", "alt", "meta"], pv = {
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
  exact: (e, t) => fv.some((r) => e[`${r}Key`] && !t.includes(r))
}, Nt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = pv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, hv = /* @__PURE__ */ yn({ patchProp: lv }, Yb);
let Vf;
function mv() {
  return Vf || (Vf = Pb(hv));
}
const nd = ((...e) => {
  const t = mv().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = yv(n);
    if (!i) return;
    const o = t._component;
    !dt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, gv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function gv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function yv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
const bv = "PanoramaSuite.Debug.Diagnostics", vv = "PanoramaSuite.Debug.ExportDiagnostics", pc = "pano_suite.diagnostics.v1", $f = "pano_suite.diagnostics.previous.v1", Sv = 300, _v = 2e5, wv = 100, kv = 20, xv = 1e3, Mv = 2, oa = 1024 * 1024;
function Qr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Nv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Pv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Nv,
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
function Av(e = {}) {
  const t = { ...Pv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    d.delete(v), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    u.delete(v), p.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, B = [], D = /* @__PURE__ */ new Map();
  let ee = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 };
  const $ = [];
  function ne(v, K, m = void 0) {
    B.push(m === void 0 ? { t: t.clock(), type: v, label: K } : { t: t.clock(), type: v, label: K, detail: m }), B.length > wv && B.shift();
  }
  function _e(v, K, m, S, V) {
    if (!r || !S || !t.WeakRef) return S;
    const w = { ref: new t.WeakRef(S), label: V };
    return v.add(w), K == null || K.register(S, w), m.created += 1, S;
  }
  function ye(v, K = "") {
    return _e(d, _, f, v, K);
  }
  function we(v, K = "") {
    return _e(u, g, p, v, K);
  }
  function be({ label: v = "", width: K, height: m, offscreen: S = !1 } = {}) {
    const V = globalThis.OffscreenCanvas;
    let w;
    return S && typeof V < "u" ? w = new V(K, m) : (w = t.document().createElement("canvas"), K !== void 0 && m !== void 0 && (w.width = K, w.height = m)), ye(w, v);
  }
  function pe(v) {
    v.width = 0, v.height = 0, r && (f.released += 1);
  }
  function ve(v = t.document(), K = "") {
    var m;
    return we(((m = v == null ? void 0 : v.createElement) == null ? void 0 : m.call(v, "video")) || null, K);
  }
  function fe(v, K) {
    if (!r || !v) return () => {
    };
    const m = { label: K, lost: !1, disposed: !1 };
    h.add(m), y.created += 1, ne("webgl-created", K);
    const S = () => {
      m.disposed || (m.lost = !0, y.lost += 1, ne("webglcontextlost", K));
    }, V = () => {
      m.disposed || (m.lost = !1, y.restored += 1, ne("webglcontextrestored", K));
    };
    return v.addEventListener("webglcontextlost", S), v.addEventListener("webglcontextrestored", V), () => {
      m.disposed || (m.disposed = !0, h.delete(m), y.disposed += 1, ne("webgl-disposed", K));
    };
  }
  function ie(v, K) {
    return D.set(v, K), () => {
      D.get(v) === K && D.delete(v);
    };
  }
  function me() {
    return r ? t.now() : -1;
  }
  function ce(v) {
    if (v < 0 || !r) return;
    const K = t.now() - v;
    ee.count += 1, ee.maxMs = Math.max(ee.maxMs, K);
  }
  function O(v, K) {
    if (K < 0 || !r) return;
    const m = t.now() - K, S = C.get(v) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, m), C.set(v, S);
  }
  function L() {
    let v = 0, K = 0, m = 0, S = [0, 0];
    const V = {};
    for (const w of d) {
      const T = w.ref.deref();
      if (!T) continue;
      v += 1;
      const z = T.width * T.height;
      z > 0 && (K += 1), m += z, z > S[0] * S[1] && (S = [T.width, T.height]);
      const Z = V[w.label] ?? (V[w.label] = [0, 0]);
      Z[0] += 1, Z[1] += z;
    }
    return { ...f, alive: v, sized: K, pixels: m, mb: Qr(m * 4 / oa, 1), largest: S, byLabel: V };
  }
  function M() {
    const v = [];
    let K = 0, m = 0;
    for (const S of u) {
      const V = S.ref.deref();
      if (!V) continue;
      K += 1;
      const w = !V.paused && !V.ended;
      w && (m += 1), v.length < kv && v.push({
        label: S.label,
        playing: w,
        src: !!(V.currentSrc || V.src),
        size: [V.videoWidth || 0, V.videoHeight || 0],
        ready: V.readyState ?? 0,
        connected: !!V.isConnected
      });
    }
    return { ...p, alive: K, playing: m, list: v };
  }
  function de() {
    const v = t.now(), K = t.memory(), m = {
      t: t.clock(),
      heap: K ? { used: Qr(K.usedJSHeapSize / oa, 1), total: Qr(K.totalJSHeapSize / oa, 1), limit: Qr(K.jsHeapSizeLimit / oa, 1) } : null,
      canvas: L(),
      webgl: { ...y, alive: [...h].filter((S) => !S.lost).length },
      video: M(),
      frame: { count: ee.count, maxMs: Qr(ee.maxMs), longTasks: Y.count, longTaskMaxMs: Qr(Y.maxMs) },
      renders: Object.fromEntries([...C].map(([S, V]) => [S, { count: V.count, maxMs: Qr(V.maxMs) }])),
      sources: Object.fromEntries([...D].map(([S, V]) => [S, V()])),
      costMs: Qr(c, 3)
    };
    return ee = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 }, $.push({ record: m, text: JSON.stringify(m) }), $.length > Sv && $.shift(), l += 1, l % Mv === 0 && R(), c = t.now() - v, m;
  }
  function Q(v = _v) {
    const K = JSON.stringify({ ...o, events: B }).slice(0, -1);
    let m = v - K.length - 14, S = $.length;
    for (; S > 0 && m - $[S - 1].text.length - 1 >= 0; )
      S -= 1, m -= $[S].text.length + 1;
    return `${K},"records":[${$.slice(S).map((V) => V.text).join(",")}]}`;
  }
  function R() {
    if (!o) return;
    const v = t.storage();
    if (v) {
      o.savedAt = t.clock();
      try {
        v.setItem(pc, Q());
      } catch {
      }
    }
  }
  function k() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", R();
  }
  function P() {
    var V;
    if (n) return i;
    n = !0;
    const v = t.storage();
    if (!v) return null;
    let K = null;
    try {
      if (K = v.getItem(pc), K === null) {
        const w = v.getItem($f);
        return i = w === null ? null : JSON.parse(w), i;
      }
      v.setItem($f, K), v.removeItem(pc), i = JSON.parse(K);
    } catch {
      return i;
    }
    const m = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = m.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${m.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((V = m.at(-1)) == null ? void 0 : V.t) || 0).toISOString()}; ${m.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function le(v) {
    const K = v === !0;
    if (P(), K !== r) {
      if (r = K, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, $.length = 0, a = t.observeLongTasks((m) => {
          for (const S of m)
            Y.count += 1, Y.maxMs = Math.max(Y.maxMs, S.duration);
        }), t.addUnload(k), s = t.setInterval(de, xv), R();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(k), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", R();
    }
  }
  function q() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...B], records: $.map((v) => v.record) } : null,
      previous: i
    };
  }
  function I() {
    const v = t.document(), K = new Blob([JSON.stringify(q(), null, 1)], { type: "application/json" }), m = URL.createObjectURL(K), S = v.createElement("a");
    S.href = m, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(m), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: be,
    releaseCanvas: pe,
    trackCanvas: ye,
    createVideo: ve,
    trackVideo: we,
    watchContext: fe,
    addSource: ie,
    frameStart: me,
    frameEnd: ce,
    renderEnd: O,
    sample: de,
    serialize: Q,
    recoverPrevious: P,
    setEnabled: le,
    exportData: q,
    download: I
  };
}
const Ln = Av(), on = Ln.createCanvas, hs = Ln.releaseCanvas, hc = Ln.trackCanvas, Os = Ln.createVideo, zf = Ln.trackVideo, Cv = Ln.addSource, Iv = Ln.frameStart, Ev = Ln.frameEnd;
function rm(e, t) {
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
const Ov = {
  id: bv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Ln.setEnabled(e === !0)
}, jf = {
  id: vv,
  label: "Export Panorama Suite diagnostics",
  function: () => Ln.download()
};
function Zi(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Fv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Hf(e, t = 8) {
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
function rd(e, t) {
  return on({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ni(e, t, r) {
  if (!e) return Zi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Xt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function un(e) {
  e.displayDirty = !0, e.revision += 1;
}
let mc = null, gc = null, Gf = null, Kf = null, qt = null, Ro = null;
function Tv() {
  if (gc) return gc;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), gc = r, r;
}
function yc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  mc = ni(mc, r, n);
  const i = mc;
  Xt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Kf !== i.ctx && (Gf = i.ctx.createPattern(Tv(), "repeat"), Kf = i.ctx), i.ctx.fillStyle = Gf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Dv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Lv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Rv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Vv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ht = /* @__PURE__ */ new Map(), id = 128;
function $v(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Ht.has(l)) {
    const B = Ht.get(l);
    return Ht.delete(l), Ht.set(l, B), B;
  }
  Ht.size >= id && Ht.delete(Ht.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = rd(c, c), f = u.getContext("2d"), p = a * s, _ = s + 1, g = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, y = f.createRadialGradient(d, d, p, d, d, _);
  return y.addColorStop(0, g), y.addColorStop(1, h), f.fillStyle = y, f.fillRect(0, 0, c, c), Ht.set(l, u), u;
}
function zv(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${p.toFixed(2)}:${_.toFixed(2)}:${g.toFixed(2)}`;
  if (Ht.has(h)) {
    const ne = Ht.get(h);
    return Ht.delete(h), Ht.set(h, ne), ne;
  }
  Ht.size >= id && Ht.delete(Ht.keys().next().value);
  const y = rd(u, f), B = y.getContext("2d"), D = B.createImageData(u, f), ee = D.data, C = Math.max(0, e - t), Y = Math.max(0, Math.min(1, r)), $ = 1 + p;
  for (let ne = 0; ne < f; ne++)
    for (let _e = 0; _e < u; _e++) {
      const ye = _e + 0.5 - e, we = ne + 0.5 - t, be = Math.max(Math.abs(ye) - C, 0), ve = Math.hypot(be, we) / t;
      if (ve >= 1) continue;
      const fe = ve <= Y ? 1 : Math.max(0, (1 - ve) / Math.max(1e-4, 1 - Y)), ie = 1 - ve, me = 1 + p * (1 - ie) * (1 - ie), ce = 1 - _ * ie * ie, O = me * ce / $;
      let L = 1;
      if (g > 0) {
        const Q = Math.floor((we + t) / 1.5), R = Math.floor((ye + e) / 8), k = Oi(co(Q * 41 + 500, R * 19 + 300));
        L = 1 - g * 0.42 * k;
      }
      const M = Math.round(255 * Math.min(1, d * fe * O * L));
      if (M <= 0) continue;
      const de = (ne * u + _e) * 4;
      ee[de] = a, ee[de + 1] = l, ee[de + 2] = c, ee[de + 3] = M;
    }
  return B.putImageData(D, 0, 0), Ht.set(h, y), y;
}
function co(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Oi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function jv(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Oi(co(e * 17 + 3, t * 13 + 7)), p = u + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const _ = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), g = Hv(e, t, a, l, r, n), h = o * 0.55;
  if (g < h) return 0;
  const B = 0.45 + 0.55 * ((g - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * _ * B));
}
function Hv(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Oi(co(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Oi(co(c * 23 + 800, d * 29 + 500)), f = Oi(co(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Gv(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Ht.has(f)) {
    const B = Ht.get(f);
    return Ht.delete(f), Ht.set(f, B), B;
  }
  Ht.size >= id && Ht.delete(Ht.keys().next().value);
  const p = rd(c, d), _ = p.getContext("2d"), g = _.createImageData(c, d), h = g.data, y = Math.max(0, Math.min(1, r));
  for (let B = 0; B < d; B++)
    for (let D = 0; D < c; D++) {
      const ee = jv(D, B, e, t, y, u, l);
      if (ee <= 0) continue;
      const C = (B * c + D) * 4;
      h[C] = o, h[C + 1] = s, h[C + 2] = a, h[C + 3] = ee;
    }
  return _.putImageData(g, 0, 0), Ht.set(f, p), p;
}
function im(e, t, r) {
  var g, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Rv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Kv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = Vv(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const y = i * a, B = i, D = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), ee = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = zv(y, B, o, s, D, ee, C);
  } else if (n === "crayon") {
    const y = i * a, B = i, D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = Gv(y, B, o, s, D);
  } else
    _ = $v(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: p, latitudeCorrection: u };
}
function Kv(e) {
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
function Wv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Wf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function od(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = co(t, r);
    for (let p = 0; p < d; p++) {
      const _ = Oi(f + p * 2) * Math.PI * 2, g = Math.sqrt(Oi(f + p * 2 + 1)) * u, h = t + Math.cos(_) * g, y = r + Math.sin(_) * g, B = Math.max(0.5, e.radiusPx * i * 0.48), D = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, ee = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(D)) : 1, C = B * e.aspect * ee;
      Wf(e, h, y, B, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Wf(e, t, r, o, l);
}
function Uf(e, t, r) {
  const n = Lv(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = im(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - a[f - 1].x) > i * 0.5 && (p += p < a[f - 1].x ? i : -i), a.push({ x: p, y: _ });
  }
  if (od(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const p = a[f], _ = { x: (c.x + p.x) * 0.5, y: (c.y + p.y) * 0.5 };
    f === 1 ? u = ms(s, d.x, d.y, _.x, _.y, u) : u = Ba(s, l, d, _, p, u), l = c, c = p, d = _;
  }
  a.length === 2 ? ms(s, d.x, d.y, c.x, c.y, u) : Ba(s, l, d, c, c, u), e.restore();
}
function xa(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = Wv(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = Dv(n[f]);
    let _ = Number(p.x || 0) * i;
    f > 0 && Math.abs(_ - a[f - 1].x) > i * 0.5 && (_ += _ < a[f - 1].x ? i : -i), a.push({ x: _, y: Number(p.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let p = 1; p < a.length; p++) e.lineTo(a[p].x + f, a[p].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function sa(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    xa(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Uf(e, t, r) : (Ro = ni(Ro, r.width, r.height), Xt(Ro), Uf(Ro.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Ro.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ms(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    od(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ba(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, p = f + c, _ = f - u, g = 16;
  let h = o, y = r.x, B = r.y;
  for (let D = 1; D <= g; D++) {
    const ee = u + _ * D / g, C = ((u - ee) * t.x + (ee - d) * r.x) / (u - d), Y = ((u - ee) * t.y + (ee - d) * r.y) / (u - d), $ = ((f - ee) * r.x + (ee - u) * n.x) / (f - u), ne = ((f - ee) * r.y + (ee - u) * n.y) / (f - u), _e = ((p - ee) * n.x + (ee - f) * i.x) / (p - f), ye = ((p - ee) * n.y + (ee - f) * i.y) / (p - f), we = ((f - ee) * C + (ee - d) * $) / (f - d), be = ((f - ee) * Y + (ee - d) * ne) / (f - d), pe = ((p - ee) * $ + (ee - u) * _e) / (p - u), ve = ((p - ee) * ne + (ee - u) * ye) / (p - u), fe = ((f - ee) * we + (ee - u) * pe) / (f - u), ie = ((f - ee) * be + (ee - u) * ve) / (f - u);
    h = ms(e, y, B, fe, ie, h), y = fe, B = ie;
  }
  return h;
}
function Uv(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const p = im(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", y = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", od(p, c, a, 1), e.activeStroke = {
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
      strokeOpacity: _,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: y,
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
function Vl(e = {}) {
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
  function _(pe) {
    return {
      actionGroupId: pe,
      descriptor: n,
      committedPaint: Zi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(pe) {
    let ve = i.get(pe);
    return ve || (ve = _(pe), i.set(pe, ve)), ve;
  }
  function h(pe) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(pe) {
    var O;
    const ve = !u || u.length !== pe.length || pe.some((L, M) => L !== u[M]), fe = d === "paint" && ((O = c ? i.get(c) : a) == null ? void 0 : O.activeStroke) || null;
    let ie = s.displayDirty || a.displayDirty || ve;
    for (const L of pe) {
      const M = i.get(L);
      if (M != null && M.displayDirty) {
        ie = !0;
        break;
      }
    }
    if (fe && (ie = !0), !ie) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const L of pe) {
      const M = i.get(L);
      M && (M.displayDirty = !1);
    }
    u = [...pe];
    const me = l.ctx;
    Xt(l);
    const ce = !!(fe != null && fe.isEraser);
    for (const L of pe) {
      const M = i.get(L);
      if (!M) continue;
      const Q = c === M.actionGroupId && d === "paint" ? M.activeStroke : null;
      if (ce)
        qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(M.committedPaint.canvas, 0, 0), _i(qt.ctx, o.canvas), me.drawImage(qt.canvas, 0, 0);
      else if (me.drawImage(M.committedPaint.canvas, 0, 0), Q) {
        const R = M.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Q.strokeOpacity ?? 1));
        me.save(), me.globalAlpha = R, me.drawImage(o.canvas, 0, 0), me.restore();
      }
    }
  }
  function B(pe) {
    var fe, ie, me, ce, O;
    for (const L of i.values())
      Xt(L.committedPaint), Xt(L.currentStroke), L.activeStroke = null, un(L);
    Xt(s.committedMask), Xt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), un(s), un(a), u = null;
    const ve = [
      ...Array.isArray((ie = (fe = pe == null ? void 0 : pe.painting) == null ? void 0 : fe.paint) == null ? void 0 : ie.strokes) ? pe.painting.paint.strokes : [],
      ...Array.isArray((ce = (me = pe == null ? void 0 : pe.painting) == null ? void 0 : me.mask) == null ? void 0 : ce.strokes) ? pe.painting.mask.strokes : []
    ];
    for (const L of ve) {
      if (((O = L == null ? void 0 : L.targetSpace) == null ? void 0 : O.kind) !== "ERP_GLOBAL") continue;
      const M = String((L == null ? void 0 : L.layerKind) || "paint"), Q = String((L == null ? void 0 : L.toolKind) || "pen") === "eraser";
      if (M === "mask") {
        const R = s.descriptor;
        Q ? (qt = ni(qt, R.width, R.height), Xt(qt), sa(qt.ctx, L, R), _i(s.committedMask.ctx, qt.canvas)) : (sa(s.committedMask.ctx, L, R), s.painted = !0);
        continue;
      }
      if (Q) {
        qt = ni(qt, n.width, n.height), Xt(qt), sa(qt.ctx, L, n);
        for (const R of i.values())
          _i(R.committedPaint.ctx, qt.canvas), un(R);
      } else {
        const R = String((L == null ? void 0 : L.actionGroupId) || "__default__"), k = g(R), P = k.descriptor;
        sa(k.committedPaint.ctx, L, P), un(k);
      }
    }
    y([...i.keys()]);
  }
  function D(pe, ve) {
    d = String((pe == null ? void 0 : pe.layerKind) || "");
    const fe = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Xt(s.currentStroke), s.activeStroke = null, un(s);
    else {
      const ie = fe ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || "__default__"));
      c = fe ? "" : String((pe == null ? void 0 : pe.actionGroupId) || "__default__"), Xt(ie.currentStroke), ie.activeStroke = null, un(ie);
    }
  }
  function ee(pe, ve) {
    var M;
    const fe = String((pe == null ? void 0 : pe.layerKind) || "paint"), ie = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser", me = fe === "mask" ? s : ie ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__")), ce = me.activeStroke, O = me.descriptor;
    if (ce && ce.pointCount > 1) {
      const de = me.currentStroke.ctx;
      de.globalCompositeOperation = "source-over";
      const Q = {
        ctx: de,
        stampTex: ce.stampTex,
        radiusPx: ce.radiusPx,
        spacingPx: ce.spacingPx,
        desc: O,
        aspect: ce.aspect,
        angle: ce.angle,
        stampKind: ce.stampKind,
        scatter: ce.scatter,
        latitudeCorrection: ce.latitudeCorrection
      };
      ce.pointCount === 2 ? ms(Q, ce.lastMidX, ce.lastMidY, ce.prev.x, ce.prev.y, ce.distSinceStamp) : Ba(Q, ce.pprev, { x: ce.lastMidX, y: ce.lastMidY }, ce.prev, ce.prev, ce.distSinceStamp);
    }
    me.lassoPreviewActive && (Xt(me.currentStroke), xa(me.currentStroke.ctx, pe, O), me.lassoPreviewActive = !1);
    const L = fe === "mask" ? s.committedMask : me.committedPaint;
    if (ie && fe === "paint")
      for (const de of i.values())
        _i(de.committedPaint.ctx, me.currentStroke.canvas), un(de);
    else if (ie)
      _i(L.ctx, me.currentStroke.canvas);
    else {
      fe === "mask" && (s.painted = !0);
      const de = Math.max(0, Math.min(1, (ce == null ? void 0 : ce.strokeOpacity) ?? 1));
      L.ctx.save(), L.ctx.globalAlpha = de, L.ctx.drawImage(me.currentStroke.canvas, 0, 0), L.ctx.restore();
    }
    Fv() && (String((pe == null ? void 0 : pe.toolKind) || ""), String((O == null ? void 0 : O.kind) || ""), Number((O == null ? void 0 : O.width) || 0), Number((O == null ? void 0 : O.height) || 0), String(((M = pe == null ? void 0 : pe.targetSpace) == null ? void 0 : M.viewMode) || ""), Number((pe == null ? void 0 : pe.aspect) ?? 1), Hf(me.currentStroke.canvas), Hf(L.canvas), void 0), Xt(me.currentStroke), me.activeStroke = null, un(me), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function C(pe) {
    if (d === "mask")
      Xt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, un(s);
    else if (d === "paint" && !c)
      Xt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, un(a);
    else if (c) {
      const ve = i.get(c);
      ve && (Xt(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, un(ve));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function Y(pe, ve) {
    var ie;
    if (d = String((pe == null ? void 0 : pe.layerKind) || ""), String(((ie = pe == null ? void 0 : pe.geometry) == null ? void 0 : ie.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Xt(s.currentStroke), xa(s.currentStroke.ctx, pe, s.descriptor), s.lassoPreviewActive = !0, un(s);
      else {
        const me = String((pe == null ? void 0 : pe.toolKind) || "") === "eraser", ce = me ? a : g(String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__"));
        c = me ? "" : String((pe == null ? void 0 : pe.actionGroupId) || c || "__default__"), Xt(ce.currentStroke), xa(ce.currentStroke.ctx, pe, ce.descriptor), ce.lassoPreviewActive = !0, un(ce);
      }
      y([...i.keys()]);
    }
  }
  function $(pe) {
    return y(pe ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function ne(pe) {
    return i.get(String(pe)) ?? null;
  }
  function _e() {
    return [...i.keys()];
  }
  function ye(pe) {
    var de;
    const ve = i.get(String(pe));
    if (!ve) return null;
    const fe = d === "paint" && c === ve.actionGroupId, ie = d === "paint" && ((de = c ? i.get(c) : a) == null ? void 0 : de.activeStroke) || null, me = !!(ie != null && ie.isEraser), ce = fe ? ve.activeStroke : null;
    if (!me && !ce) return ve.committedPaint.canvas;
    const O = `${ve.revision}:${a.revision}:${me}`, L = f.get(ve.actionGroupId);
    if ((L == null ? void 0 : L.key) === O) return L.surface.canvas;
    const M = ni((L == null ? void 0 : L.surface) ?? null, t, r);
    return Xt(M), M.ctx.drawImage(ve.committedPaint.canvas, 0, 0), me ? _i(M.ctx, o.canvas) : (M.ctx.save(), M.ctx.globalAlpha = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ce.strokeOpacity ?? 1)), M.ctx.drawImage(o.canvas, 0, 0), M.ctx.restore()), f.set(ve.actionGroupId, { key: O, surface: M }), M.canvas;
  }
  function we() {
    const pe = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!pe || pe.isEraser) ? null : `${s.revision}:${!!pe}`;
  }
  function be() {
    const pe = we();
    if (pe === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === pe) return p.surface.canvas;
    const ve = ni((p == null ? void 0 : p.surface) ?? null, t, r);
    Xt(ve);
    const fe = d === "mask" ? s.activeStroke : null;
    return fe != null && fe.isEraser ? (qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(s.committedMask.canvas, 0, 0), _i(qt.ctx, o.canvas), yc(ve.ctx, qt.canvas)) : (yc(ve.ctx, s.committedMask.canvas), fe && yc(ve.ctx, o.canvas)), p = { key: pe, surface: ve }, ve.canvas;
  }
  return {
    rebuildCommitted: B,
    beginStroke: D,
    appendStrokePoint: Uv,
    updateActiveStroke: Y,
    commitActiveStroke: ee,
    cancelActiveStroke: C,
    getErpTarget: $,
    ensureTarget: h,
    getGroupTarget: ne,
    getGroupDisplayCanvas: ye,
    getMaskDisplayCanvas: be,
    getMaskDisplayRevision: we,
    getAllGroupIds: _e
  };
}
function Oe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function sd(e, t) {
  let r = Kt(t) - Kt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const nu = 3;
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
function om(e) {
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
const Bf = Math.PI / 180, Yf = 0.12, Bv = nu, Yv = 35, qv = 140, Ko = 100, Xv = 20, qf = 0.8;
function Jv(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Oe(Number(e || Ko), 1, 179) * Bf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Bf;
}
function ad(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ko })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(B, D = null) {
    a && a(B, D);
  }
  function d(B, D, ee = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(B || 0), l.drag.lastY = Number(D || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = ee, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: ee }), !0;
  }
  function u(B, D, ee = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const Y = Number(C || performance.now()), $ = Number(B), ne = Number(D), _e = $ - l.drag.lastX, ye = ne - l.drag.lastY;
    l.drag.lastX = $, l.drag.lastY = ne, l.drag.lastTs = Y;
    const we = n() || { x: 1, y: 1 }, be = Number(we.x || 1), pe = Number(we.y || 1), ve = { ...t() };
    let fe = 0, ie = 0;
    if (ee === "unwrap") {
      const ce = i() || { w: 1, h: 1 }, O = Math.max(1, Number(ce.w || 1)), L = Math.max(1, Number(ce.h || 1)), M = _e / O, de = ye / L;
      fe = -M * 360 * be, ie = de * 180 * pe;
    } else {
      const ce = o() || { w: 0, h: 0 }, O = Math.max(1, Number(ce.w || 0)), L = Math.max(1, Number(ce.h || 0));
      if (O > 1 && L > 1) {
        const M = Oe(Number(ve.fov || Ko), 1, 179), de = Oe(Jv(M, O, L), 0.1, 179);
        fe = -(_e / O) * M * be, ie = ye / L * de * pe;
      } else
        fe = -_e * Yf * be, ie = ye * Yf * pe;
    }
    ve.yaw = Kt(Number(ve.yaw || 0) + fe), ve.pitch = Oe(Number(ve.pitch || 0) + ie, -89.9, 89.9), r(ve), l.velHistory.push({ ts: Y, yaw: ve.yaw, pitch: ve.pitch });
    let me = 0;
    for (; me < l.velHistory.length - 1 && l.velHistory[me].ts < Y - 100; ) me++;
    return me > 0 && l.velHistory.splice(0, me), l.inertia.active = !1, l.inertia.lastTs = Y, s(), c("drag", { phase: "move", dx: _e, dy: ye, dYaw: fe, dPitch: ie }), !0;
  }
  function f(B = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const D = Number(B || performance.now());
    l.drag.lastTs = D;
    const ee = l.velHistory.filter((Y) => D - Y.ts <= 80);
    if (ee.length >= 2) {
      const Y = ee[0], $ = ee.at(-1), ne = Math.max(1e-3, ($.ts - Y.ts) / 1e3);
      let _e = $.yaw - Y.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), l.inertia.vx = _e / ne, l.inertia.vy = ($.pitch - Y.pitch) / ne;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > Xv, l.inertia.lastTs = D, c("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function p(B = performance.now()) {
    if (!l.inertia.active) return !1;
    const D = Number(B || performance.now()), ee = Math.max(1e-3, (D - (l.inertia.lastTs || D)) / 1e3);
    l.inertia.lastTs = D;
    const C = { ...t() };
    C.yaw = Kt(Number(C.yaw || 0) + l.inertia.vx * ee), C.pitch = Oe(Number(C.pitch || 0) + l.inertia.vy * ee, -89.9, 89.9);
    const Y = Math.exp(-5.5 * ee);
    return l.inertia.vx *= Y, l.inertia.vy *= Y, Math.abs(l.inertia.vx) < qf && Math.abs(l.inertia.vy) < qf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), s(), l.inertia.active;
  }
  function _() {
    const B = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], B;
  }
  function g(B) {
    const D = Math.sign(Number(B || 0));
    if (!D) return !1;
    const ee = { ...t() }, C = Number(ee.fov || Ko);
    return ee.fov = Oe(C + D * Bv, Yv, qv), r(ee), s(), c("wheel", { deltaSign: D, fovBefore: C, fovAfter: ee.fov }), !0;
  }
  function h(B, D = 0) {
    return g(Ya(B, D));
  }
  function y() {
    r({ yaw: 0, pitch: 0, fov: Ko }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: p,
    stopMotion: _,
    applyWheel: g,
    applyWheelEvent: h,
    resetView: y
  };
}
const wt = Math.PI / 180, nn = 180 / Math.PI;
function Qn(e, t, r) {
  return { x: e, y: t, z: r };
}
function qa(e, t) {
  return Qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Xa(e, t) {
  return Qn(e.x * t, e.y * t, e.z * t);
}
function bc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ld(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Qn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Qn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function wo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Qn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Qn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Qn(a * l, c, s * l)
  };
}
function Ja(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Et(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Zv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Qv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Et(n.z_index ?? n.zIndex, t.length);
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
function e1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function t1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Et(e.t, 0), n = Et(e.widthScale, null), i = Et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Et(e.u, null), s = Et(e.v, null);
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
    const o = Et(e.u, null), s = Et(e.v, null);
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
function aa(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = t1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function n1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = aa(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = aa(e.points, t, 1);
  if (!o) return null;
  const s = aa(e.rawPoints, t, 1), a = aa(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function r1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = e1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = n1(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Et(e.size, null), s = Et(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = Et(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Et(f.r, 0))),
      g: Math.max(0, Math.min(1, Et(f.g, 0))),
      b: Math.max(0, Math.min(1, Et(f.b, 0))),
      a: Math.max(0, Math.min(1, Et(f.a, 1)))
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
    hardness: Et(e.hardness, null),
    flow: Et(e.flow, null),
    spacing: Et(e.spacing, null),
    createdAt: Math.trunc(Et(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function Xf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = r1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function i1(e) {
  if (!e || typeof e != "object") return null;
  const t = Et(e.u0, null), r = Et(e.v0, null), n = Et(e.u1, null), i = Et(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function o1(e) {
  const t = e || {};
  return {
    du: Et(t.du, 0) ?? 0,
    dv: Et(t.dv, 0) ?? 0,
    rot_deg: Et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Et(t.scale, 1) ?? 1)
  };
}
function s1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = i1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: o1(e.transform)
  } : null;
}
function a1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = s1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function ko(e) {
  const t = Zv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Qv(e.groups),
    paint: Xf(e.paint, "paint"),
    mask: Xf(e.mask, "mask"),
    raster_objects: a1(e.raster_objects)
  };
}
const tr = 1, nr = 179, ru = 85;
function $l(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function sm(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function am(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * nn;
  return r && (n = Math.round(n / 15) * 15), $l(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Oe(ot(e.hFOV_deg || 90, 90), tr, nr), r = Oe(ot(e.vFOV_deg || 60, 60), tr, nr), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
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
function Ri(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function cd(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function ud(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Oe(2 * Math.atan(n / (2 * r)) * nn, tr, nr), s = Oe(2 * Math.atan(i / (2 * r)) * nn, tr, nr);
  return { hFOV_deg: o, vFOV_deg: s };
}
function l1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function dd(e, t, r = ru) {
  const n = Math.max(1e-12, ot(t, 1)), i = Oe(ot(r, ru), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function lm(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function c1(e, t) {
  const r = Oe(ot(e, 90), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * nn,
    tr,
    nr
  );
}
function Ma(e, t) {
  const r = Oe(ot(e, 60), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Oe(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * nn,
    tr,
    nr
  );
}
function Jf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function u1(e, t) {
  const r = Jf(e, 1), n = Jf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function zi(e) {
  const t = Oe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Oe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Fi(e) {
  const t = zi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || u1(t, 1);
}
function fd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fi(t), t;
}
function cm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Oe(s, tr, nr) : Oe(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return fd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Oe(ot(r, 0), -89.9, 89.9),
    roll_deg: $l(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fi(e);
}
function um(e, t) {
  const r = ui(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * nn, o = 2 * Math.atan(r.tanHalfY * n) * nn;
  return i < tr || i > nr || o < tr || o > nr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function dm(e, t, r = nu) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, nu));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < tr || s > nr) return null;
  const a = Math.tan(s * wt * 0.5);
  return um(e, a / o.tanHalfX);
}
function fm(e, t) {
  const r = ui(e), n = wo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return ld(qa(qa(n.fwd, Xa(n.right, i)), Xa(n.up, o)));
}
function d1(e) {
  return Qn(e.x, e.y, -e.z);
}
function Na(e) {
  return Qn(e.x, e.y, -e.z);
}
function Nn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = wo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function pm(e) {
  const t = Na(Qn(e[0][0], e[1][0], e[2][0])), r = Na(Qn(e[0][1], e[1][1], e[2][1])), n = Na(Qn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
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
function la(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ai = 1e-6, iu = 1e-6, f1 = 1e-9;
function ys(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function p1(e, t) {
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
  if (s.reduce((f, p, _) => f + p * a[_], 0) < 0) return r.map(() => 0);
  const l = s.map((f, p) => (f * o + a[p] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((p, _) => p + _ * _, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function hm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  go(e, n) && (l = yo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return go(e, n + 1) && (c = yo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function mm(e, t, r, n, i) {
  const [[o], [s]] = hm(e, t, r.map((a) => [a]), n);
  return ys(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function h1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = hm(e, t, i, r);
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
function m1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function vc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function g1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function ou(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ro(e, t) {
  return g1(Za([-e[0], -e[1], -e[2], e[3]], t));
}
function Sc(e, t, r) {
  return Za(e, ou(ro(e, t).map((n) => r * n)));
}
function _c(e, t) {
  const r = m1(e, t);
  if (Math.abs(r) > iu) return r < 0;
  const [n, i, o] = ro(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > iu) return s < 0;
  return !1;
}
function ca(e) {
  const { x: t, y: r, z: n, w: i } = di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function su(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function y1(e, t, r, n) {
  const i = ca(e[r].value);
  let o = ca(e[r + 1].value);
  _c(i, o) && (o = vc(o));
  const s = t[r + 1] - t[r], a = ro(i, o);
  let l = a;
  if (go(e, r)) {
    let C = ca(e[r - 1].value);
    _c(C, i) && (C = vc(C)), l = yo(t, r, ro(i, C), a).map((Y) => Y * s);
  }
  let c = a;
  if (go(e, r + 1)) {
    let C = ca(e[r + 2].value);
    _c(o, C) && (C = vc(C)), c = yo(t, r + 1, ro(o, i), ro(o, C)).map((Y) => Y * s);
  }
  const d = Za(i, ou(l.map((C, Y) => 0.5 * (C - a[Y])))), u = Za(o, ou(a.map((C, Y) => 0.5 * (C - c[Y])))), [f, p, _, g] = Sc(Sc(i, o, n), Sc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: y, rollDeg: B } = pm(gs({ x: f, y: p, z: _, w: g })), D = e[r].value, ee = e[r + 1].value;
  return {
    yaw_deg: su(h, D.yaw_deg, ee.yaw_deg, n),
    pitch_deg: y,
    roll_deg: su(B, D.roll_deg, ee.roll_deg, n)
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
function gm(e, t) {
  const r = bs(e, t), n = t.map((s, a) => s - r * e[a]), i = Qa(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Qi(e, t) {
  const r = Qa(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ua(e, t, r) {
  return Qi(e, gm(e, t).map((n) => r * n));
}
function wc(e, t) {
  const r = el(e[t].value), n = el(e[t + 1].value), i = bs(r, n), o = i < 0 && Qa(n.map((l, c) => l - i * r[c])) <= iu;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = gm(r, n);
  const a = Qa(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function b1(e, t, r, n) {
  const i = el(e[r].value), o = el(e[r + 1].value), [s, a, l] = wc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  go(e, r) && (c = yo(t, r, wc(e, r - 1)[1].map((D) => -D), c).map((D) => D * u)), go(e, r + 1) && (d = yo(t, r + 1, d.map((D) => -D), wc(e, r + 1)[0]).map((D) => D * u));
  let f, p, _;
  if (l) {
    const D = Math.PI, ee = ys(0, bs(c, s) / D / 3, D - bs(d, a) / D / 3, D, n);
    [f, p, _] = Qi(i, s.map((C) => ee * C / D));
  } else {
    const D = ua(Qi(i, c.map((Y) => Y / 3)), Qi(o, d.map((Y) => -Y / 3)), n), ee = ua(Qi(i, c.map((Y) => n * Y / 3)), D, n), C = ua(D, Qi(o, d.map((Y) => -(1 - n) * Y / 3)), n);
    [f, p, _] = ua(ee, C, n);
  }
  const g = Math.hypot(f, _), h = e[r].value.yaw_deg, y = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= f1 ? h + (y - h) * n : su(Math.atan2(f, _) * 180 / Math.PI, h, y, n), pitch_deg: Math.atan2(p, g) * 180 / Math.PI };
}
function v1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = mm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function S1(e, t, r, n) {
  return mm(e, t, e.map((i) => i.value), r, n);
}
const _1 = { position: h1, rotation: y1, direction: b1, size: v1 };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return la(e[t].value);
  if (r <= n[0].frame + Ai) return la(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ai) return la(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ai; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Ai || s.easing === "hold") return la(s.value);
  const a = n.map((c) => c.frame), l = p1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (_1[t] ?? S1)(n, a, o, l);
}
function au(e) {
  return Math.min(179, Math.max(0.1, e));
}
function w1(e) {
  return Math.min(1, Math.max(0, e));
}
function ym(e) {
  return Math.max(1e-6, e);
}
function bm(e, t) {
  return t - (e.start - e.in);
}
function xo(e, t) {
  return t >= e.start - Ai && (e.duration === null || t < e.start + e.duration - Ai);
}
function zl(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: au(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Fs(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = bm(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : zl(n, r),
    scene: {
      active: i.visible && xo(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: ym(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function k1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: ym(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: au(r.hFOV_deg),
    vFOV_deg: au(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = bm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && xo(e.clip, t),
    clip_frame: r,
    ...k1(e, r),
    opacity: w1(Wt(e, "opacity", r))
  };
}
const x1 = 2, vm = ["sky", "world"], lu = ["perspective", "erp"], M1 = ["input", "output", "temp"], Sm = [0.42, 0, 0.58, 1], _m = 1, pd = 1e3, cu = 1e7, hd = cu, md = Number.MAX_SAFE_INTEGER, N1 = /^sticker_([0-9]{1,16})$/;
function $t(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function gd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function xn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ai(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Pa(e) {
  const t = ai(e);
  return t === null ? null : xn(t, -cu, cu);
}
function fi(e) {
  const t = gd(e, null);
  return t === null ? null : xn(t, _m, pd);
}
function wm(e) {
  const t = ai(e);
  return t !== null && t >= 1 ? Math.min(t, hd) : null;
}
function vs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function km(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function xm(e) {
  return km(e) || [0, 0, 0];
}
function Mm(e) {
  const t = $t(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: xn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function P1(e) {
  return xn(Zt(e, 90), 0.1, 179);
}
function A1(e) {
  return gd(e, 1);
}
function C1(e) {
  const t = $t(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: xn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function I1(e) {
  return Zt(e, 0);
}
function E1(e) {
  const t = $t(e) ? e : {};
  return {
    hFOV_deg: xn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: xn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Nm(e) {
  return xn(Zt(e, 1), 0, 1);
}
const yd = [["position", xm], ["rotation", Mm], ["fov", P1]], jl = [["position", xm], ["rotation", Mm], ["scale", A1]], pi = [["direction", C1], ["roll", I1], ["size", E1], ["opacity", Nm]], hi = [...jl, ["opacity", Nm]];
function O1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Sm];
}
function F1(e) {
  if (!$t(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = km(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function T1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!$t(i)) continue;
    const o = Pa(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: O1(i.easing) }, a = r ? F1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Hl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = $t(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: T1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Gl(e) {
  const t = $t(e) ? e : {}, r = Pa(t.start), n = Pa(t.in), i = Pa(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Pm(e) {
  const t = $t(e) ? e : {}, r = xn(Zt(t.x0, 0), 0, 1), n = xn(Zt(t.y0, 0), 0, 1), i = xn(Zt(t.x1, 1), 0, 1), o = xn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function D1(e) {
  if (!$t(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: M1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function L1(e) {
  const t = D1(e.source);
  if (!t) return null;
  const r = vm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Gl(e.clip),
    visible: vs(e.visible, !0),
    locked: vs(e.locked, !1),
    crop: Pm(e.crop),
    ...Hl(e, n ? hi : pi)
  };
  return n || (i.z_index = ai(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = R1(e.handoff_overrides, r)), i;
}
function R1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? hi : pi).map(([n]) => n).filter((n) => r.includes(n));
}
function V1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = $t(s) ? L1(s) : null;
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
  let o = z1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, md) };
}
function $1(e) {
  const t = typeof e == "string" ? N1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < md ? r : 0;
}
function Am(e) {
  return e.reduce((t, r) => Math.max(t, $1(r.id)), 0) + 1;
}
function z1(e, t) {
  const r = ai(e), n = Am(t);
  return xn(r === null ? n : Math.max(r, n), 1, md);
}
function j1(e) {
  if (!$t(e)) return null;
  const t = lu.includes(e.projection) ? e.projection : lu[0];
  return { aspect: gd(e.aspect, 1), projection: t, visible: vs(e.visible, !0), ...Hl(e, yd) };
}
function tl(e) {
  return typeof e == "string" && e ? e : null;
}
function Cm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function H1(e) {
  if (!$t(e) || tl(e.id) === null || !vm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  $t(e.clip) && (r.clip = Gl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  $t(e.crop) && (r.crop = Pm(e.crop)), Object.assign(r, Hl(e, (t ? hi : pi).filter(([i]) => $t(e[i]))));
  const n = t ? null : ai(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Im(e) {
  const t = $t(e) ? fi(e.fps) : null;
  if (t === null || tl(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => tl(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(H1).filter((c) => c !== null), i = Cm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = $t(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), $t(o.clip) && (s.clip = Gl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function G1(e) {
  const t = (Array.isArray(e) ? e : []).map(Im).filter((r) => r !== null);
  return Cm(t, (r) => r.layer);
}
function nl(e) {
  const t = $t(e.timeline) ? e.timeline : {}, r = $t(e.scene) ? e.scene : {}, { stickers: n, next: i } = V1(e.stickers, e.next_sticker_id);
  return {
    version: x1,
    id: tl(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: wm(t.length)
    },
    camera: j1(e.camera),
    scene: { clip: Gl(r.clip), visible: vs(r.visible, !0), ...Hl(r, jl) },
    stickers: n,
    next_sticker_id: i,
    painting: ko(e.painting),
    painting_layer: $t(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: vs(e.painting_visible, !0),
    upstream: G1(e.upstream)
  };
}
function K1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!$t(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function W1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!$t(t)) return null;
  const r = xn(Zt(t.hFOV_deg, 90), 1, 179), n = xn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function U1(e) {
  const t = $t(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter($t) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), nl({
    camera: W1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: K1(n, t),
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
function Vn(e) {
  if (e == null || typeof e == "string" && !e.trim()) return nl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!$t(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? U1(t) : nl(t);
}
const kc = {
  state: { painting_visible: !0 },
  camera: { projection: lu[0], visible: !0 },
  scene: { visible: !0 }
};
function xc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function uu(e) {
  const t = xc(e, kc.state);
  return t.id === null && delete t.id, t.next_sticker_id === Am(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && xc(e.camera, kc.camera),
    scene: xc(e.scene, kc.scene),
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
  const n = r / e.timeline.fps, i = (a) => ai(a * n), { length: o } = e.timeline, s = rl(e.scene.clip, i);
  return nl({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...os(e.camera, yd, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...os(e.scene, jl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = rl(a.clip, i), u = a.placement === "world" ? hi : pi;
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
function Em(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => ai(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? hi : pi).filter(([p]) => Object.hasOwn(l, p));
    if (!Object.hasOwn(l, "clip")) {
      const p = o.get(l.id) ?? 0, _ = ai(p * (e.fps / r));
      return { ...l, ...os(l, c, i, _, p) };
    }
    const { clip: d, anchor: u, newAnchor: f } = rl(l.clip, i);
    return { ...l, clip: d, ...os(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: rl(e.scene.clip, i).clip } : e.scene;
  return Im({ ...e, fps: r, stickers: s, scene: a });
}
const B1 = 1e-3;
function bd(e, t, r, n) {
  if (!xo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(B1 / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function vd(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function Ss(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const r = e("pano_sticker_files").length;
  return r > 1 ? { kind: "IMAGE", frames: r } : null;
}
function Y1(e, t) {
  return Math.floor(e * t.fps);
}
function Sd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Zf = 4;
function _d({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, p) => f !== r[p])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = Y1(a, l);
      for (let f = d; f < Math.min(r.length, d + Zf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Zf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Mc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Om(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Fm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ai);
}
function Tm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Om(e.keyframes[n - 1].easing) : [...Sm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Mc(i.value, n);
    return;
  }
  const o = Fm(i, r);
  o ? o.value = Mc(o.value, n) : Tm(i, r, Mc(Wt(e, t, r), n));
}
function No(e) {
  return e.placement === "world" ? hi.map(([t]) => t) : e.placement === "sky" ? pi.map(([t]) => t) : (e.clip ? jl : yd).map(([t]) => t);
}
function q1(e, t) {
  for (const r of No(e))
    Fm(e[r], t) || Tm(e[r], t, Wt(e, r, t));
}
function X1(e) {
  const t = No(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Nc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function J1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Z1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function Q1(e, t, r, n, i, o = 1 / 0) {
  n = Math.min(n, Math.max(0, o - Math.max(...r))), n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const s = new Set(r);
  for (const a of t) {
    const l = e[a], c = l.keyframes.filter((u) => s.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), d = new Set(c.map((u) => u.frame));
    l.keyframes = [
      ...l.keyframes.filter((u) => !s.has(u.frame) && !d.has(u.frame)),
      ...c
    ].sort((u, f) => u.frame - f.frame);
  }
  return n;
}
function Dm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function eS(e, t, r) {
  const n = Dm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function tS(e, t, r, n) {
  for (const i of Dm(e, t, r)) i.easing = Om(n);
}
function nS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function rS(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function iS(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function oS(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Lm(e) {
  return No(e).map((t) => e[t]);
}
function il(e) {
  return Lm(e).some((t) => t.keyframes.length > 0) || !!e.clip && !oS(e.clip);
}
function Rm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(il);
}
const Vm = 1e5;
function wd(e, t = {}) {
  const { length: r } = e.timeline, n = r ? Math.max(1, Math.round(r)) : sS(e, t);
  return Number.isFinite(n) ? n : Vm;
}
function sS(e, { bg: t = null, port: r = null, sceneItems: n = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (_) => _.duration === null || _ === o, c = [e.scene.clip, ...e.stickers.map((_) => _.clip)].filter((_) => !l(_)).map((_) => _.start + _.duration), d = e.stickers.find((_) => _.source.kind === "port");
  r && d && l(d.clip) && c.push(vd({ ...d.clip, duration: null }, a, r));
  const u = e.scene.clip;
  n > 1 && l(u) && c.push(u.start - u.in + n);
  const f = s && e.camera ? Lm(e.camera).flatMap((_) => _.keyframes.map((g) => g.frame)) : [];
  let p = 1;
  return t != null && t.video ? p = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? p = t.frames : c.length ? p = Math.max(1, Math.round(Math.max(...c))) : f.length && (p = Math.max(1, Math.round(Math.max(...f)) + 1)), i && (p = Math.max(p, i.frames, ...i.ends.map(Math.round))), p;
}
function aS(e) {
  return e > 0 ? fi(Math.min(e, pd)) : null;
}
function lS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : wm(Math.max(1, Math.min(e, hd)));
}
const Pc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], cS = 2e3;
function uS(e, t, r = 56) {
  const n = Pc.find((o) => o * t >= r) || Pc[Pc.length - 1], i = [];
  for (let o = 0; o < e && i.length < cS; o += n) i.push(o);
  return i;
}
function dS(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let da = { text: null, parsed: null };
function $n(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ol(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function fS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: $n(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ko(null),
    painting_layer: null,
    ui_settings: ol(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function $m(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function pS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function hS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function mS(e) {
  return Array.isArray(e) ? e.map((t) => fd(t)) : [];
}
function gS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function zm(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = fS(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (da.text === i ? o = da.parsed : (o = JSON.parse(i), da = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: pS(o.assets),
      stickers: hS(o.stickers),
      shots: mS(o.shots),
      painting: ko(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ol(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = ol({ ...a.ui_settings, ...s })), a.output_preset = $m(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = $n(r.coverage), delete a.editor_history, a;
  } catch {
    return da = { text: i, parsed: null }, n;
  }
}
function yS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function bS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function vS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function jm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = Vn(e);
  } catch {
    l = Vn(null);
  }
  return a && a !== l.timeline.fps && (l = Mo(l, a)), {
    ...l,
    coverage: $n(i),
    bg_color: n,
    output_preset: $m(r),
    ui_settings: ol(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function SS(e, t) {
  const r = Mo(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of No(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Hm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function kd(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Hm(e, n, r), rot_deg: n.roll_deg };
}
const _S = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Qf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function wS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[_S[r]].keyframes.length));
}
function Gm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Qf(r, ["yaw_deg", "pitch_deg"]), o = Qf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const Kl = ["position_x", "position_y", "position_z"], xd = "camera";
function Km(e, t) {
  const r = zl(e, t);
  return fd({
    id: xd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: c1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function kS(e) {
  return Vn({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Kt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function xS(e) {
  return e - 360 * Math.round(e / 360);
}
function MS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + xS(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && mn(e, "position", t, [...r.position]);
}
function NS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Kl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function PS(e, t, r, n) {
  const i = Kl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function AS(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function CS(e, t) {
  const r = Wr(e, t);
  return {
    ...Object.fromEntries(Kl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function IS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Kl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, mn(e, "position", i, s);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function ES(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function OS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function FS(e, t, r) {
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
function Aa(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function sl(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Wl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Md(e, t, r, n) {
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
function TS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Kt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Wm(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Um(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Bm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function ep(e, t) {
  return e != null && e.__panoSceneStateV2 ? uu(Vn(t)) : JSON.stringify(t);
}
const DS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function LS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => DS[e & 63]).join("");
}
function Ym(e, t, r, n) {
  const i = ep(e, t);
  return RS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = LS(), ep(e, t));
}
function RS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Vn(r);
    if (uu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && uu(Mo(i, o)) === t;
  } catch {
    return !1;
  }
}
const Ac = 0.15, VS = 0.01, $S = 1e-3, zS = 0.05, jS = 4, tp = 250, HS = 16, fr = 1, GS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Un(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Ul(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function ji(e, t, r = 0) {
  const n = Nn(e, t, r), i = Mr(n, 2);
  return { right: Mr(n, 0), up: Mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function KS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function du(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function WS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : du(e, "3dof", r);
}
function US(e) {
  return ji(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function BS(e) {
  return Un(e.position, ji(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function mi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ss(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Nd(e, t) {
  return ss(mi(t, e.position), ji(e.yaw_deg, e.pitch_deg).forward);
}
function Pd(e) {
  return Math.max(e, 1e-6) * zS;
}
function fu(e, t, r = null, n = fr) {
  if (t) return t;
  const i = Pd(n);
  if (r && Nd(e, r) > 0) {
    const o = mi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Un(e.position, o, i / s);
  }
  return Un(e.position, ji(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function qm(e, t = fr) {
  return Math.max(e.distance, Pd(t));
}
function Xm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > jS ? !1 : t.time - e.time < tp || e.cost > HS && t.time - e.wheelTime < tp;
}
function Ad(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function Jm(e, t, r, n, i = BS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = YS(t, r, o), l = Kt(e.yaw_deg + s / n * 360), c = Oe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Nn(e.yaw_deg, e.pitch_deg, o), u = Nn(l, c, o), f = mi(e.position, i), p = [0, 1, 2].map((g) => ss(Mr(d, g), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: Un(i, Ul(u, p)) };
  return { ..._, distance: Nd(_, i) };
}
function YS(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function Zm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = US(e), l = 2 * o * Ad(e, n, i).tanY / i;
  return { ...e, position: Un(Un(e.position, s, -t * l), a, r * l), distance: o };
}
function Qm(e, t, r, n = fr) {
  const i = mi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * VS, l = r > 0 ? Math.min(Math.max(o * Ac, a), o - s * $S) : -Math.max(o * Ac / (1 - Ac), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Un(e.position, i, l / o) };
  return { ...c, distance: Math.max(Nd(c, t), Pd(n)) };
}
function qS(e, t, r, n) {
  const { tanX: i, tanY: o } = Ad(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = ji(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Un(t.center, l, -a), distance: a };
}
function Cd(e, t, r, n = null) {
  return eg({
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Ad(e, t, r).tanY) * nn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function eg(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: fr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function _s(e, t, r, n) {
  const { right: i, up: o, forward: s } = tg(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function tg(e) {
  const t = gs(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function al(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function XS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Id(e, t) {
  if (!e || !t.active) return null;
  const r = JS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: pu(t),
    itemQuaternion: e.kind === "splat" ? GS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function ng(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = Id(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function rg(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function JS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function pu(e) {
  return {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function hu(e, t) {
  return Un(e.position, Ul(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Ca(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function mu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function gu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function ZS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...mu(t).map((o) => hu(e.scene, o)));
  for (const o of r) i.push(...Ed(o));
  for (const { box: o, value: s } of n) i.push(...mu(o).map((a) => hu(s, a)));
  return i;
}
function QS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Nn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Ed(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Un(e.position, Ul(e.rotation, [n, i, 0])));
}
function e_(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? gu(Ed(i)) : o != null && o.box ? gu(mu(Ca(o.kind, o.box)).map((s) => hu(n, s))) : { center: [...n.position], radius: n.scale };
}
const t_ = 2, n_ = 0.5, r_ = 30;
function ig(e, t) {
  const r = mi(t, e), n = Math.atan2(r[0], -r[2]) * nn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * nn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function i_(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * n_ : t_, o = t ? [...t] : Un(e.position, ji(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...mi(o, e.position)), a = s > 0 ? ig(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(r_ * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function np(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function o_(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function rp(e, t, r, n) {
  if (e === "translate") return { position: Un(t.position, mi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * u_(r.scale, n.scale) / r.scale };
  const i = np(gs(n.quaternion), o_(gs(r.quaternion))), o = np(i, Nn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = pm(o);
  return Math.abs(a) <= s_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: a_(o, t.yaw_deg) } };
}
const s_ = 89.9;
function a_(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * nn + 0;
}
const l_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function c_(e, t, r, n, i) {
  if (!_s(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = tg(e), l = mi(t, e.position), c = ss(l, o), d = ss(l, s), u = ss(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), p = f * e.aspect, _ = Math.hypot(c, d, u) * l_[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (ee) => {
    const C = _ * Math.sqrt(ee * ee + u * u - _ * _);
    return [(ee * u - C) / (u * u - _ * _), (ee * u + C) / (u * u - _ * _)];
  }, [h, y] = g(c), [B, D] = g(d);
  return {
    minX: n * 0.5 * (1 + h / p),
    maxX: n * 0.5 * (1 + y / p),
    minY: i * 0.5 * (1 - D / f),
    maxY: i * 0.5 * (1 - B / f)
  };
}
function u_(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function d_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function og(e, t) {
  const r = Nn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Un(e.position, Ul(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function f_(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = _s(e, s, n, i), c = _s(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Oe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function p_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function h_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function m_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const sg = 0.28;
function ag(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * nn,
    aspect: n
  };
}
function as(e) {
  const t = ui(e);
  return {
    quaternion: di(Nn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function lg(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = dd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * nn,
      vFOV_deg: 2 * Math.atan(o / n) * nn
    }
  };
}
function cg(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = gs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, g = 1e-4) {
      const h = d1(_), y = n * h.x + s * h.y + c * h.z, B = i * h.x + a * h.y + d * h.z, D = -(o * h.x + l * h.y + u * h.z), ee = Math.max(D, g);
      return {
        x: t * 0.5 * (1 + y / ee / p),
        y: r * 0.5 * (1 - B / ee / f),
        z: D
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, g) {
      const h = (_ / t * 2 - 1) * p, y = (1 - g / r * 2) * f;
      return ld(Na({
        x: n * h + i * y - o,
        y: s * h + a * y - l,
        z: c * h + d * y - u
      }));
    }
  };
}
function ug(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Fs(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), p = Math.tan(Hm(a, c, fg(u.media)) * 0.5 * wt), { crop: _ } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? sg : c.opacity,
      zIndex: n(a),
      quaternion: di(Nn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * p,
        y1: (1 - 2 * _.y0) * p
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function dg(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return ug(e, t, {
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
function fg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function pg(e, t, r, { media: n, evaluated: i = Fs(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: p } = fg(u.media), _ = QS(c, a.crop, f, p);
    _ && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: _.position,
      quaternion: _.quaternion,
      rotation: _.rotation,
      width: _.width,
      height: _.height,
      crop: a.crop
    });
  }), s;
}
function g_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BVorUOAb.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = rm(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(g, h, y, B, D) {
      return l && !f.lost ? l.pick(g, h, y, B, D) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, h, y, B, D) {
      return l && !f.lost ? l.pickSurface(g, h, y, B, D) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, h, y, B, D) {
      return l && !f.lost ? l.pickSticker(g, h, y, B, D) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, h, y, B, D, ee) {
      return l && !f.lost ? l.gizmoPointer(g, h, y, B, D, ee) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", _), l == null || l.dispose(), l = null;
    }
  };
  function p(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function _() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", _), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const hg = "3D view unavailable. Check the browser console.";
function ll(e, t, r) {
  return ag({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function y_(e) {
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
const mg = y_(
  () => import("./.lazy/pano_three_view-BVorUOAb.js").then((e) => e.$).then((e) => rm(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), er = ["erp_image", "bg_erp", "bg_media"], Od = ["sticker_image", "sticker"], gg = ["scene"], Fd = ["sticker", "sticker_state"], b_ = {
  background: er,
  "external-sticker": Od,
  scene: gg,
  "sticker-handoff": Fd
};
function yg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Bl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = yg(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function cl(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function ip(e, t) {
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
function bg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function v_(e, t) {
  const { graph: r, entry: n } = bg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = yg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const vg = [...er, ...Od, ...gg, ...Fd], S_ = 256, eo = /* @__PURE__ */ new Map(), Cc = /* @__PURE__ */ new WeakMap();
let Sg = () => null;
function _g(e) {
  return Cc.has(e) || Cc.set(e, JSON.stringify(e)), Cc.get(e);
}
function __(e) {
  Sg = e;
}
function ul(e, t) {
  const r = _g(e);
  eo.delete(r), eo.set(r, t), eo.size > S_ && eo.delete(eo.keys().next().value);
}
function Lt(e, t) {
  var o;
  const r = e ? Sg(e) : null;
  if (!r) return !0;
  const n = Bl(e);
  let i = eo.get(_g(r));
  if (i)
    ul(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => vg.includes(s == null ? void 0 : s.name)))) return !0;
    ul(r, n), i = n;
  }
  return b_[t].every((s) => i[s] === n[s]);
}
const dl = /* @__PURE__ */ new WeakSet();
async function yu(e, t) {
  if (dl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && dl.add(e), r.ok && n !== void 0 ? n : null;
}
function wg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = bg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => vg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: v_(r, t) };
}
const Ia = /* @__PURE__ */ new Map();
function w_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Ia.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await yu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = wg(i, o);
        s && ul(s.output, s.inputs);
      }
    });
}
const k_ = 5;
function x_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${k_}`, n = yu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, yu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: p } of await n) {
        if (!a()) return null;
        const _ = await o(p);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : wg(_, l);
      }
      return null;
    }
  };
}
function M_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Yi = null;
async function N_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || dl.has(r) || (a = Ia.get(i)) != null && a.has(n) || M_(t)) return null;
  (Yi == null ? void 0 : Yi.workflowId) !== i && (Yi = { workflowId: i, history: x_(r, i) }, queueMicrotask(() => {
    Yi = null;
  }));
  const s = await Yi.history.lastNodeOutput(e, o);
  return o() ? s ? (ul(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (dl.has(r) || Ia.set(i, (Ia.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function op(e, t, r, n = er) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const sp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ea(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return sp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return sp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ic = /* @__PURE__ */ new WeakMap();
function P_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function bu(e) {
  return P_(e) ? (Ic.has(e) || Ic.set(e, Math.random().toString(36).slice(2, 10)), Ic.get(e)) : "run";
}
function kg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function A_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Td(e, t = [], r = null) {
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
function C_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Os(e, "looping-preview");
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
  const _ = () => {
    p = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const g = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var B, D;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (B = n.removeAttribute) == null || B.call(n, "src"), (D = n.load) == null || D.call(n));
    },
    failed: () => p,
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
const ws = /* @__PURE__ */ new WeakMap(), xg = {
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
    // The ends of the Clip ranges Panorama Studio overrides upstream, for its Timeline's length, with the result
    // list and state they were made from (pano_preview_runtime.js surfaceTimelineMedia).
    upstreamLength: null,
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
function Ts(e, t) {
  if (!e || typeof e != "object") return null;
  let r = ws.get(e);
  return r || (r = {}, ws.set(e, r)), r[t] ?? (r[t] = xg[t]());
}
function Yl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = ws.get(e)) == null ? void 0 : r[t]) || null;
}
const fl = (e) => Ts(e, "editorSession"), yt = (e) => Ts(e, "nodeSurface"), $r = (e) => Ts(e, "previewNode"), Pn = (e) => Ts(e, "mediaCache"), Wn = (e) => Ts(e, "stateSync"), I_ = (e) => Yl(e, "editorSession"), Mg = (e) => Yl(e, "nodeSurface"), Ng = (e) => Yl(e, "previewNode");
function Ec(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const E_ = {
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
      Ec(o == null ? void 0 : o.img), Ec(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Ec((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function O_(e, t) {
  const r = Yl(e, t);
  if (r)
    try {
      E_[t](r);
    } finally {
      delete ws.get(e)[t];
    }
}
function F_(e) {
  for (const t of Object.keys(xg))
    try {
      O_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && ws.delete(e);
}
function wi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function T_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ap(e, t, r = null) {
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
  return !n && r != null && (n = T_(e == null ? void 0 : e.graph, r)), n;
}
function D_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function L_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function R_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Pg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const Y = String(C[0] || "").trim();
      if (Y)
        return wi(t, {
          filename: Y,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const $ of C) {
        const ne = i($);
        if (ne) return ne;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : wi(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const Y = String(C.type || "").trim().toLowerCase();
    if (Y === "dataurl") return String(C.value || "");
    if (Y !== "comfy_image") return "";
    const $ = String(C.filename || "").trim();
    return $ ? wi(t, {
      filename: $,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, s = (C) => {
    const Y = e == null ? void 0 : e.nodeOutputs;
    if (!Y || C == null) return null;
    const $ = String(C);
    return Y instanceof Map ? Y.get(C) || Y.get($) || Y.get(Number($)) || null : Y[C] || Y[$] || null;
  }, a = (C, Y) => {
    var ne;
    const $ = s(C == null ? void 0 : C.id);
    return Array.isArray((ne = $ == null ? void 0 : $.ui) == null ? void 0 : ne[Y]) ? $.ui[Y] : Array.isArray($ == null ? void 0 : $[Y]) ? $[Y] : [];
  }, l = (C, Y) => {
    const $ = s(C == null ? void 0 : C.id);
    return $ != null && $.ui && Object.prototype.hasOwnProperty.call($.ui, Y) ? $.ui[Y] : $ && Object.prototype.hasOwnProperty.call($, Y) ? $[Y] : null;
  }, c = (C, Y) => {
    const $ = l(C, "pano_sticker_input_state_hash"), ne = Array.isArray($) ? $[0] : $;
    return String(ne ?? "").trim() || R_(Y);
  }, d = (C) => {
    const Y = [], $ = /* @__PURE__ */ new Set();
    for (const ne of C || []) {
      const _e = i(ne);
      !_e || $.has(_e) || ($.add(_e), Y.push(_e));
    }
    return Y;
  }, u = (C, Y) => {
    var _e;
    const $ = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && $.push(C.images), Array.isArray((_e = C == null ? void 0 : C.ui) == null ? void 0 : _e.images) && C.ui.images.length && $.push(C.ui.images);
    const ne = [];
    for (const ye of $)
      Y >= 0 && Y < ye.length && ne.push(ye[Y]), ne.push(...ye);
    return ne;
  }, f = (C, Y) => {
    var O;
    const $ = String(Y || "").trim();
    if (!$) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((L) => String((L == null ? void 0 : L.name) || "") === $);
    if (_e < 0) return { src: "", sourceType: "", inputName: $ };
    const ye = C.graph ? C.getInputLink(_e) : null;
    if ((ye == null ? void 0 : ye.origin_id) == null) return { src: "", sourceType: "", inputName: $ };
    const we = ye.origin_id, be = ap(C, _e, we);
    if (!be) return { src: "", sourceType: "", inputName: $ };
    const pe = Number(ye.origin_slot ?? 0);
    let ve = [];
    try {
      ve = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(be) || [] : [];
    } catch {
      ve = [];
    }
    if (Array.isArray(ve) && ve.length) {
      const L = [];
      pe >= 0 && pe < ve.length && L.push(ve[pe]), L.push(...ve);
      const M = d(L.filter((de) => !Ea(de)));
      if (M.length)
        return { src: M[0], srcCandidates: M, sourceType: "appNodeImageUrls", inputName: $ };
    }
    const fe = s((be == null ? void 0 : be.id) ?? we), ie = d(u(fe, pe).filter((L) => !Ea(L))).map((L) => `${L}&pano_src=${bu(fe)}`);
    if (ie.length)
      return { src: ie[0], srcCandidates: ie, sourceType: "nodeOutputs", inputName: $ };
    const me = Array.isArray(be == null ? void 0 : be.imgs) ? be.imgs : [];
    if (me.length) {
      const L = [];
      pe >= 0 && pe < me.length && L.push(me[pe]), L.push(...me);
      const M = d(L);
      if (M.length)
        return { src: M[0], srcCandidates: M, sourceType: "nodeImgs", inputName: $ };
    }
    const ce = (O = be == null ? void 0 : be.widgets) == null ? void 0 : O.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image");
    if (ce) {
      let L = i(ce.value);
      if (L && !L.includes("/") && !L.includes(":") && (be.comfyClass === "LoadImage" || be.type === "LoadImage") && (L = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(L)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(L)}&type=input&subfolder=`), L) return { src: L, sourceType: "widget", inputName: $ };
    }
    return { src: "", sourceType: "", inputName: $ };
  }, p = (C, Y = []) => {
    var ne;
    const $ = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const _e of Y) {
      const ye = $.findIndex((ve) => String((ve == null ? void 0 : ve.name) || "") === _e), we = ye >= 0 && C.graph ? C.getInputLink(ye) : null;
      if ((we == null ? void 0 : we.origin_id) == null) continue;
      const be = s(((ne = ap(C, ye, we.origin_id)) == null ? void 0 : ne.id) ?? we.origin_id), pe = (Array.isArray(be == null ? void 0 : be.images) ? be.images : []).find(Ea);
      return pe ? `${wi(t, pe)}&pano_src=${bu(be)}` : "";
    }
    return "";
  }, _ = (C, Y = []) => {
    const $ = Array.isArray(Y) ? Y : [Y];
    for (const ne of $) {
      const _e = f(C, ne);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (C) => {
    const Y = String(C || "").trim();
    if (!Y) return [];
    if (D_(Y)) return [Y];
    const { filename: $, subfolder: ne } = L_(Y);
    return $ ? d([
      wi(t, { filename: $, subfolder: ne, type: "temp" }),
      wi(t, { filename: $, subfolder: ne, type: "output" }),
      wi(t, { filename: $, subfolder: ne, type: "input" }),
      Y
    ]) : [Y];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var Y;
      try {
        (Y = Pn(C)) == null || Y.linkedImages.forEach(($, ne, _e) => {
          var ye;
          $ != null && $.img && ((ye = n == null ? void 0 : n.isImageLoadFailed) != null && ye.call(n, $.img)) && _e.delete(ne);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (C, Y) => {
      var $;
      ($ = C == null ? void 0 : C.delete) == null || $.call(C, `__ui__${String(Y || "")}`);
    },
    linkedValue: (C, Y) => {
      var we, be, pe, ve;
      const $ = String(Y || ""), ne = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === $) : -1, _e = ne >= 0 && C.graph ? C.getInputLink(ne) : null;
      if (_e) {
        const fe = s(_e.origin_id), ie = [
          fe == null ? void 0 : fe.output,
          fe == null ? void 0 : fe.result,
          (we = fe == null ? void 0 : fe.data) == null ? void 0 : we.output,
          (be = fe == null ? void 0 : fe.data) == null ? void 0 : be.result,
          (pe = fe == null ? void 0 : fe.ui) == null ? void 0 : pe.output,
          (ve = fe == null ? void 0 : fe.ui) == null ? void 0 : ve.result
        ];
        for (const me of ie) {
          if (!Array.isArray(me)) continue;
          const ce = me[Number(_e.origin_slot || 0)];
          if (typeof ce == "string" && ce.trim()) return ce;
        }
      }
      const ye = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((fe) => String((fe == null ? void 0 : fe.name) || "") === $) : null;
      return String((ye == null ? void 0 : ye.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (C, Y = [], $ = null, ne = "") => {
      var R;
      const _e = Array.isArray(Y) ? Y : [Y], ye = _(C, _e), be = (Array.isArray(ye == null ? void 0 : ye.srcCandidates) && ye.srcCandidates.length ? ye.srcCandidates : [ye == null ? void 0 : ye.src]).map((k) => String(k || "").trim()).filter(Boolean);
      if (!be.length) return null;
      const pe = d(be.flatMap((k) => g(k)));
      if (!pe.length) return null;
      const ve = Pn(C).linkedImages, fe = String(ne || _e.join("|") || "image_exact"), ie = be.join(`
`), me = ve.get(fe);
      if (me && me.srcRaw === ie && me.img) return me.img;
      const ce = r || globalThis.Image;
      if (typeof ce != "function") return null;
      const O = new ce();
      (R = n == null ? void 0 : n.markImageLoading) == null || R.call(n, O, ie);
      const L = { srcRaw: ie, resolvedSrc: "", img: O };
      ve.set(fe, L);
      let M = -1;
      const de = (k) => {
        var P, le, q;
        k === "ready" ? (P = n == null ? void 0 : n.markImageReady) == null || P.call(n, O, ie) : (le = n == null ? void 0 : n.markImageFailed) == null || le.call(n, O, ie), $ == null || $(O), (q = C.setDirtyCanvas) == null || q.call(C, !0, !0);
      }, Q = () => {
        if (M += 1, M >= pe.length) {
          de("failed");
          return;
        }
        L.resolvedSrc = pe[M], O.src = L.resolvedSrc;
      };
      return O.onload = () => de("ready"), O.onerror = () => {
        if (M + 1 < pe.length) {
          Q();
          return;
        }
        de("failed");
      }, Q(), O;
    },
    output: s,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (C, Y, $, ne = null) => {
      var fe, ie, me;
      const _e = a(C, Y)[0] || null, ye = i(_e);
      if (!ye) return null;
      const we = `__ui__${Y}`, be = (fe = $ == null ? void 0 : $.get) == null ? void 0 : fe.call($, we);
      if (be && be.__panoSrc === ye) return be;
      const pe = r || globalThis.Image;
      if (typeof pe != "function") return null;
      const ve = new pe();
      return ve.__panoSrc = ye, (ie = n == null ? void 0 : n.markImageLoading) == null || ie.call(n, ve, ye), ve.onload = () => {
        var ce;
        (ce = n == null ? void 0 : n.markImageReady) == null || ce.call(n, ve, ye), ne == null || ne(ve);
      }, ve.onerror = () => {
        var ce;
        (ce = n == null ? void 0 : n.markImageFailed) == null || ce.call(n, ve, ye), ne == null || ne(ve);
      }, ve.src = ye, (me = $ == null ? void 0 : $.set) == null || me.call($, we, ve), ve;
    },
    uiList: a,
    uiValue: l
  };
}
function Ag({
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
const bo = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, V_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Cg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !bo[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ri(e) {
  return structuredClone(e);
}
function $_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function z_(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Dd(e, t, r) {
  const n = z_(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of bo[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(V_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ri(Vn({ version: 2, stickers: [i] }).stickers[0]);
}
function j_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Dd(e, n, t) : n) };
}
function H_(e, t) {
  const r = bo[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !$_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function G_(e, t) {
  if (!t || t.id !== e.id) return ri(e);
  if (e.placement === t.placement) {
    const n = ri(e);
    for (const i of bo[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ri(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => bo[e.placement].includes(n))) return ri(e);
  const r = ri(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ri(e[n]);
  return r;
}
function K_(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ri(Dd(e, t, r)[n]), !0);
}
const Oa = "sticker_image_1", Ig = "external_image", vo = 0;
function Fa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Oc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function li(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function vu(e, t = vo) {
  return (e == null ? void 0 : e.version) !== 2 ? li(e) : li(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...kd(r, t)
  }));
}
function Ld(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && li(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Eg(e) {
  return String((e == null ? void 0 : e.id) || "") === Oa || String((e == null ? void 0 : e.source_kind) || "") === Ig;
}
function Rd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Eg(t);
}
const Og = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Fg(e) {
  return !Eg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Og.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Tg(e) {
  const t = Fg(e);
  return t ? Og.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Dg(e, t = {}) {
  var ee, C, Y;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Oa);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const $ = String(((ee = e.active) == null ? void 0 : ee.selected_sticker_id) || "") === Oa;
    return {
      state: {
        ...e,
        stickers: r.filter((ne, _e) => _e !== n),
        active: $ ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), p = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = a ? p.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || p.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(_)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const $ = Fa(g, u, f), ne = Number(((C = s == null ? void 0 : s.initial_pose) == null ? void 0 : C.hFOV_deg) ?? g), _e = Fa(ne, u, f), ye = Number(((Y = s == null ? void 0 : s.initial_pose) == null ? void 0 : Y.vFOV_deg) ?? _e);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - $) <= 1e-6 && Math.abs(ye - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((we, be) => be === n ? {
          ...we,
          vFOV_deg: $,
          initial_pose: we.initial_pose && typeof we.initial_pose == "object" ? { ...we.initial_pose, vFOV_deg: _e } : we.initial_pose
        } : we)
      },
      changed: !0
    };
  }
  const h = r.reduce(($, ne) => Math.max($, Number((ne == null ? void 0 : ne.z_index) || 0)), -1), y = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Fa(g, u, f) : Number(p.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, B = {
    ...s || {},
    id: Oa,
    source_kind: Ig,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: h + 1
  }, D = n >= 0 ? r.map(($, ne) => ne === n ? B : $) : [...r, B];
  return { state: { ...e, stickers: D }, changed: !0 };
}
function pl(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const W_ = ["IMAGE", "VIDEO"];
function lp(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => W_.includes(r)) ? "2d" : null;
}
function U_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? lp(n.type) ?? lp((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Lg(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: pl(e, "sticker"),
    awaitingPose: !t && (pl(e, "sticker_state") || U_(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Rg(e) {
  return pl(e, "sticker") && pl(e, "sticker_state");
}
function B_(e, t) {
  return Rg(e) ? Cg(t) : null;
}
function Y_(e, t, r) {
  return j_(jm(e, t), Cg(r));
}
function cp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return Vn({ version: 2, stickers: [i] }).stickers[0];
}
function Vg(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((p) => Rd(e, p)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, g) => g !== o),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const p = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), _ = cp(s.id, n, p);
    return { state: { ...e, stickers: e.stickers.map((g, h) => h === o ? _ : g) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Wl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, cp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = Md(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, li(e).reduce((p, _) => Math.max(p, _.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: p.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Vd(e) {
  const t = li(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Oc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function $g(e) {
  const t = Ld(e), r = Rd(e, t), n = li(e).some((a) => a && a.visible !== !1), i = Vd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Tg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function q_(e) {
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
function up(e, t) {
  const r = Ld(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = q_(e), i = String(r.id || ""), o = Vd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function X_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function J_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Dg(e, t.value);
  if (t.type === "sync-port") return Vg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Vd(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Fa(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, p = Wl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Md(p, Aa(i.asset), d, l + 1)],
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
    return !i || !li(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Ld(e);
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
    const i = Fg(r);
    return !i || !Tg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return up(e, "front");
  if (t.type === "send-back") return up(e, "back");
  if (t.type === "delete-selected") {
    if (Rd(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = li({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = X_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? kd(r, vo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = wS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Gm(c, vo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function Z_(e = {}) {
  return Ag({
    ...e,
    reduce: J_,
    projectModel: $g
  });
}
const Su = 2;
function Ni(e, t) {
  return Math.floor(e * t + 0.5);
}
function Q_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function zg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const p = () => c && !d, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const O of f) O();
    f = [];
  }
  function h(O, L = {}) {
    return g(), u = { name: O, ...L }, a(), u;
  }
  function y(O, L, M) {
    const de = () => {
      u === O && M();
    };
    e.addEventListener(L, de), f.push(() => e.removeEventListener(L, de));
  }
  function B(O, L) {
    let M = t.requestFrame(function de(Q) {
      u === O && (L(Q), u === O && (M = t.requestFrame(de)));
    });
    f.push(() => t.cancelFrame(M));
  }
  function D(O) {
    l = O, o(l);
  }
  function ee() {
    return h(d ? "error" : "idle");
  }
  function C() {
    d = !0, ee();
  }
  function Y() {
    const { seekable: O } = e, L = O != null && O.length ? O.end(O.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(L) ? L : 1 / 0));
  }
  function $(O) {
    if (!p()) return O === "play" ? be() : ee();
    if (e.readyState < Su) {
      const L = h("loading", { then: O });
      return y(L, "loadeddata", () => $(L.then)), y(L, "error", C), L;
    }
    return O === "play" && l / r() >= Number(e.duration) ? be() : ne(O, !1);
  }
  function ne(O, L) {
    const M = Y();
    if (!e.ended && Ni(Number(e.currentTime), r()) === Ni(M, r())) return _e(O);
    const de = h("seeking", { then: O, frame: l, retried: L });
    return y(de, "seeked", () => {
      const Q = Ni(Number(e.currentTime), r()) === Ni(Y(), r()), R = l === de.frame;
      Q || R && de.retried ? _e(de.then) : ne(de.then, R);
    }), y(de, "error", C), e.currentTime = M, de;
  }
  function _e(O) {
    return O === "play" ? ye() : (s(), ee());
  }
  function ye() {
    const O = h("playingVideo", { shown: !1 });
    if (y(O, "pause", () => e.ended ? we() : fe()), y(O, "ended", we), y(O, "error", C), i() && Ni(Number(e.duration), r()) >= n()) {
      const M = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = M;
      });
    }
    const L = (M, de) => {
      de && !O.shown && (O.shown = !0, a()), pe(Ni(M, r()));
    };
    if (_()) {
      let M = e.requestVideoFrameCallback(function de(Q, R) {
        u === O && (L(Number(R.mediaTime), !0), u === O && (M = e.requestVideoFrameCallback(de)));
      });
      f.push(() => {
        var de;
        return (de = e.cancelVideoFrameCallback) == null ? void 0 : de.call(e, M);
      });
    } else
      B(O, () => L(Number(e.currentTime), e.readyState >= Su));
    return Promise.resolve(e.play()).catch(() => {
      u === O && fe();
    }), O;
  }
  function we() {
    s(), be();
  }
  function be() {
    const O = h("playingClock", { startTs: t.now(), startFrame: l });
    return B(O, (L) => pe(O.startFrame + Math.floor((L - O.startTs) / 1e3 * r()))), O;
  }
  function pe(O) {
    if (O < n()) {
      D(O);
      return;
    }
    if (!i() || n() <= 1) {
      ve(n() - 1);
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), D(0), $("play");
  }
  function ve(O) {
    u.name === "playingVideo" ? (g(), e.pause(), D(Math.max(0, O)), s()) : D(Math.max(0, O)), $("still");
  }
  function fe() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      g(), e.pause();
      const O = Q_(Number(e.currentTime), r());
      D(Math.min(O, n() - 1)), s(), l === O ? ee() : $("still");
    } else u.name === "playingClock" && ve(Math.min(l, n() - 1));
  }
  function ie() {
    if (!(ce() || n() <= 1)) {
      if (l >= n() - 1 && D(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      $("play");
    }
  }
  function me(O) {
    const L = Math.max(0, Math.min(Math.round(O), n() - 1));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", D(L), a();
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), D(L), $("still");
  }
  function ce() {
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
      return ce();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: ie,
    stop: fe,
    seek: me,
    toggle() {
      ce() ? fe() : ie();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(O) {
      g(), c = !!O, d = !1, $("still");
    },
    dispose() {
      g(), c = !1, u = { name: "idle" };
    }
  };
}
function $d({ video: e, onCapture: t, onChange: r }) {
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
    if (!n || i || e.readyState < Su) return;
    const { time: g, playing: h, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const B = Number(e.duration), D = Number.isFinite(B) ? Math.min(g, B) : g, ee = Math.abs(Number(e.currentTime) - D) > 1.5 / y;
      if (e.ended && !ee) return;
      ee && d(D), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const p = {
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
  for (const [g, h] of Object.entries(p)) e.addEventListener(g, h);
  function _(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: h = null, playing: y = !1, fps: B }) {
      g !== n && (_(g), r()), o = { time: h, playing: y, fps: B }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : g;
    },
    dispose() {
      for (const [g, h] of Object.entries(p)) e.removeEventListener(g, h);
      _("");
    }
  };
}
function Ta(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function ew({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let _ = null, g = null, h = {};
  const y = () => i().timeline.fps, B = (be) => be.stickers.find((pe) => pe.source.kind === "port"), D = () => wd(i(), {
    ...h,
    bg: h.bg !== void 0 ? h.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null,
    port: (_ == null ? void 0 : _.meta) ?? h.port ?? null,
    camera: c
  }), ee = zg({
    video: e,
    clock: n,
    fps: y,
    span: D,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), C = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, Y = () => {
    u && (p.add(u), l());
  }, $ = $d({ video: t, onCapture: a, onChange: l }), ne = _d({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", C), e.addEventListener("error", Y);
  function _e(be) {
    be !== u && (u = be, e.pause(), be ? e.src = be : e.removeAttribute("src"), e.load(), ee.setSource(!!be));
  }
  function ye() {
    ee.playing && ee.stop();
  }
  function we(be) {
    const pe = B(be);
    g = _ && pe ? bd(pe.clip, ee.frame, be.timeline.fps, _.meta) : null, $.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: g,
      playing: ee.advancing,
      fps: be.timeline.fps
    });
  }
  return {
    get frame() {
      return ee.frame;
    },
    get playing() {
      return ee.playing;
    },
    get showsVideo() {
      return ee.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ye,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(be, pe) {
      return _ != null && _.frames ? ne.picture(_.frames, g, _.meta, pe) : $.picture(be, pe);
    },
    toggle() {
      ee.playing ? ee.stop() : ee.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in). Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: be, sources: pe, state: ve, sticker: fe = null, media: ie = {} }) {
      if (_ = be ? fe : null, h = ie, !be)
        return ye(), _e(""), we(ve), !1;
      for (const M of p)
        pe.includes(M) || p.delete(M);
      const me = pe.find((M) => M && !p.has(M)) || "", ce = me !== d;
      ce && (d = me, f = 0), _e(d);
      const O = Rm(ve, { camera: c }) || !!d && ee.state !== "error" || !!_;
      return O || ye(), (ce || !O || !ee.playing && ee.frame >= D()) && ee.frame !== vo && ee.seek(vo), we(ve), O;
    },
    dispose() {
      ee.dispose(), $.dispose(), e.removeEventListener("loadedmetadata", C), e.removeEventListener("error", Y), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function tw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : Em(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
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
const jg = "PANO_SCENE";
function Hg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Vn(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function Gg(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: $n(e("pano_upstream_coverage")[0])
  };
}
const nw = "bg_media is not used";
function rw(e, t) {
  return e === jg && t === null;
}
function iw(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Fn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function Kg(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function Wg(e, t, r) {
  const n = Kg(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((p) => p.layer === i.id) ?? null : null, c = tw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Mo(u, r), painting: d };
    for (const p of f.stickers)
      p.origin = { layer: n[s], id: p.id }, p.id = zd(n[s], p.id);
    return { key: n[s], sceneState: f, ui: o, received: i };
  });
}
function zd(e, t) {
  return `upstream:${e}:${t}`;
}
function _u(e, t) {
  return zd(e, t);
}
function Ut(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function hl(e) {
  return ks(e.origin.layer);
}
function ks(e) {
  return !e.startsWith("#");
}
function Ug(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? hi : pi).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function ow(e) {
  return Object.fromEntries(Ug(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Bg(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function jd(e) {
  return `layer:${e}`;
}
function dp(e) {
  return new Map(e.flatMap(({ key: t, sceneState: r }) => [
    [jd(t), Bg(r)],
    ...r.stickers.map((n) => [n.id, ow(n)])
  ]));
}
function sw(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = Em(o[d], u.timeline.fps === i ? u : Mo(u, i));
    }
    return d;
  };
  return r.forEach(({ key: l, sceneState: c }, d) => {
    if (!ks(l)) return;
    const u = n.get(jd(l));
    if (u) {
      const f = Bg(c), p = ["visible", "clip"].filter((_) => f[_] !== u[_]);
      if (p.length) {
        const _ = a(l, d), g = { ...o[_].scene };
        for (const h of p) g[h] = structuredClone(c.scene[h]);
        o[_] = { ...o[_], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const _ = a(l, d);
        o[_] = { ...o[_], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const p = n.get(f.id);
      if (!p) continue;
      const _ = Ug(f).filter((ee) => JSON.stringify(f[ee]) !== p[ee]);
      if (!_.length) continue;
      const g = a(l, d), { id: h } = f.origin, y = [...o[g].stickers], B = y.findIndex((ee) => ee.id === h), D = B >= 0 && y[B].placement === f.placement ? { ...y[B] } : { id: h, placement: f.placement };
      for (const ee of _) D[ee] = structuredClone(f[ee]);
      B >= 0 ? y[B] = D : y.push(D), o[g] = { ...o[g], stickers: y };
    }
  }), s ? Vn({ version: 2, upstream: o }).upstream : e;
}
function aw(e, t, r) {
  const n = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!ks(i)) return;
    const a = t.find((d) => d.layer === i), l = r.get(jd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && n.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((p) => p.id === d.origin.id && p.placement === d.placement && Object.hasOwn(p, "clip")), f = r.has(d.id) && r.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && n.push({ index: s, clip: d.clip, sticker: d });
    }
  }), n;
}
function Yg(e, t, r, n, i, o = null) {
  return aw(e, t, r).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? n(s) : null;
    return c ? [vd({ ...a, duration: null }, i, c)] : [];
  });
}
function ql(e, t, r, n) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(n({ layer: t, fps: r, deleted: [], stickers: [], scene: {} })) : o[i] = n(o[i]), Vn({ version: 2, upstream: o }).upstream;
}
function lw(e, t, r) {
  return t.reduce((n, { layer: i, id: o }) => ql(n, i, r, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const cw = new Set([...pi, ...hi].map(([e]) => e));
function qg(e, { layer: t, id: r }) {
  var n;
  return ((n = e.find((i) => i.layer === t)) == null ? void 0 : n.stickers.find((i) => i.id === r)) ?? null;
}
function uw(e, t, r = null) {
  const { origin: n } = t, i = qg(e, n);
  return !i || r !== null && !(cw.has(r) && i.placement === t.placement && Object.hasOwn(i, r)) ? e : ql(e, n.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== n.id) return [s];
      if (r === null) return [];
      const a = { ...s };
      return delete a[r], [a];
    })
  }));
}
function dw(e, t) {
  var n;
  const r = new Set((n = e.find((i) => i.layer === t.key)) == null ? void 0 : n.deleted);
  return t.received.stickers.filter((i) => r.has(i.id)).length;
}
function fw(e, t) {
  var r;
  return (r = e.find((n) => n.layer === t)) != null && r.deleted.length ? ql(e, t, null, (n) => ({ ...n, deleted: [] })) : e;
}
function Xg(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function pw(e, t) {
  return Xg(e.find((r) => r.layer === t)) ? ql(e, t, null, ({ painting_visible: r, ...n }) => ({ ...n, scene: {} })) : e;
}
function hw(e, t) {
  const r = Kg(t), n = new Map(t.flatMap(({ sceneState: s }, a) => r[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = n.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? Vn({ version: 2, upstream: o }).upstream : e;
}
function mw(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a, received: l } = e, c = Fs(s, r), d = (h) => h.visible ? n(h) : null, u = ug(s, r, { media: d, zIndex: (h) => h.z_index, paintLayers: i, evaluated: c }).map((h) => h.kind === "erp" ? { ...h, id: zd(t, h.id) } : h), f = pg(s, r, s.stickers, { media: d, evaluated: c }), p = [], _ = al(Fn(a, "pano_scene_files"), Fn(a, "pano_scene_meta"), o);
  _ && p.push({ slot: `${t}:scene`, urls: _.urls.filter(Boolean), request: Id(_, c.scene), value: c.scene, opacity: 1 });
  const g = al(Fn(a, "pano_sticker_files"), Fn(a, "pano_sticker_meta"), o);
  if (g) {
    const h = ng(g, s, c);
    p.push({ slot: `${t}:sticker`, urls: rg(g, l), request: h, value: (h == null ? void 0 : h.value) ?? null, opacity: (h == null ? void 0 : h.opacity) ?? 1 });
  }
  return { evaluated: c, sky: u, stickers: f, items: p };
}
const ml = Math.PI / 180, wr = 180 / Math.PI, gw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), yw = 260;
function fp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Jg(e, t) {
  return t ? Jg(t, e % t) : e;
}
function bw(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Jg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function xs(e, t) {
  const r = fp(e), n = fp(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: bw(r, n) };
}
function Ti(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Zg(e) {
  const t = Ti(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Hd(e, t, r = gw) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, y, B) => {
    const D = h + y, ee = Math.max(0, B - 1), C = D > ee && D > 0 ? ee / D : 1;
    return [h * C, y * C];
  }, [d, u] = c(l, s, n), [f, p] = c(o, a, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - p)
  }, g = cd(_, t);
  return {
    x: _.x + (_.w - g.width) * 0.5,
    y: _.y + (_.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: _
  };
}
function vw(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Hd({ width: r, height: n }, 1), o = Oe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * ml * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = fm(l, lm(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = Sw(c, wo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = ud({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Qg(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: Oe(Math.asin(Oe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function Sw(e, t) {
  const r = Qg(e), n = wo(r.yaw, r.pitch, 0), i = bc(t, e), o = {
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
    roll: $l(Math.atan2(
      bc(a, n.up),
      bc(a, n.right)
    ) * wr)
  };
}
function e0(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Hd({ width: r, height: n }, zi(e)), o = Ri(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = fm(e, lm(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Qg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Oe(2 * Math.atan(r / (2 * o)) * wr, 1, 179)
  };
}
function _w(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ri(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = dd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, p = n / i, _ = Math.tan(ru * ml), g = p >= 1 ? _ : _ * p, h = p >= 1 ? _ / p : _;
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
        hFOV_deg: 2 * Math.atan(g) * wr,
        vFOV_deg: 2 * Math.atan(h) * wr
      }
    }
  };
}
function qi(e, t) {
  const r = Ti(e);
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
function ww(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Ri(r, e);
    return ud(cd(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Ma(o, t) };
}
function pp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = xs(t, r);
  if (!o) return e;
  const s = zi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = xs(o.height, o.width));
  const a = ww(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function t0(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ti(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = cm({
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
    const n = Ti(e);
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
    return qi(e, (n) => pp(
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
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? xs(o[1], o[2]) : xs(zi(n), 1);
      return s ? pp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? qi(e, (i) => {
      const o = $l(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? qi(e, (n) => {
    const i = um(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? qi(e, (n) => {
    const i = dm(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? qi(e, (n) => {
    const i = i0(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function n0({
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
function r0(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + sm(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: am(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function i0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * ml, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, p = d * c + u * l, _ = Number(e.pitch_deg || 0) * ml, g = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(f) / g * wr),
    pitch_deg: Oe(Number(e.pitch_deg || 0) - Math.atan(p) * wr, -90, 90)
  };
}
function kw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Ag({
    readState: e,
    reduce: t0,
    projectModel: Zg,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const We = Object.freeze({
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
}), xw = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, Mw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: xw(t[2])
})), Nw = {
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
}, hp = Object.fromEntries(
  Object.entries(Nw).map(([e, t]) => [e, {
    name: t.name,
    elements: Mw(t.body)
  }])
), jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(hp, n) ? hp[n] : null;
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
      (Le(!0), Ve(Ze, null, Pt(r.value.elements, (o, s) => (Le(), Ve(Ze, {
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
        }, o.attrs), null, 16)) : lt("", !0)
      ], 64))), 128))
    ], 2)) : lt("", !0);
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
    const t = e, r = ut(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Le(), Rn(ib(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Mh(() => [
        Ye(jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Pw = ["aria-expanded", "disabled"], Aw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Cw = ["data-aspect", "disabled", "onClick"], Iw = { class: "pano-cutout-aspect-custom" }, Ew = ["disabled"], Ow = ["disabled"], Fw = ["data-custom-width", "data-custom-height", "disabled"], o0 = {
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
    ]), o = /* @__PURE__ */ Jt("1"), s = /* @__PURE__ */ Jt("1"), a = /* @__PURE__ */ Jt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const B = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), D = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || B);
        return {
          ...typeof y == "object" && y ? y : {},
          value: B,
          label: D,
          active: h ? B === h : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === h
      }));
    }), d = ut(() => {
      var h;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((h = c.value.find((y) => y.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    Ei(d, (g) => {
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
    Tl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Is(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(g) {
      const [h, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: y,
        preserveOrientation: !0
      });
    }
    function _() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, h) => (Le(), Ve("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Le(), Rn(tn, {
        key: 0,
        icon: e.model.aspectIcon || rt(We).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Le(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Ye(jt, {
          icon: e.model.aspectIcon || rt(We).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, tt(d.value), 1),
        Ye(jt, {
          icon: rt(We).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Pw)),
      jr(Ne("div", Aw, [
        (Le(!0), Ve(Ze, null, Pt(c.value, (y) => (Le(), Ve("button", {
          key: y.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (B) => p(y)
        }, tt(y.label), 11, Cw))), 128)),
        Ne("div", Iw, [
          jr(Ne("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, Ew), [
            [Rf, o.value]
          ]),
          h[4] || (h[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Ne("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Ow), [
            [Rf, s.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, Fw)
        ])
      ], 512), [
        [Li, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Tw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Dw = {
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
      onPointerdown: i[1] || (i[1] = Nt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Nt(() => {
      }, ["stop"]))
    }, [
      Ye(tn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Tw, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, Pt(rt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, tt(o[0]), 1),
          Ne("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Lw = {
  class: "pano-view-unavailable",
  role: "status"
}, Xl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Le(), Ve("div", Lw, tt(rt(hg)), 1));
  }
}, Rw = { class: "pano-cutout-node-surface" }, Vw = ["title", "disabled"], $w = { class: "value" }, zw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, jw = {
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
    return (n, i) => (Le(), Ve("div", Rw, [
      Ne("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Nt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Nt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ye(tn, {
          icon: e.model.hasShot ? rt(We).delete : rt(We).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(o0, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Ne("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Nt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ye(jt, {
            icon: rt(We).roll
          }, null, 8, ["icon"]),
          Ne("span", $w, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Vw),
        Ye(tn, {
          icon: rt(We).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(Dw)
      ], 32),
      e.model.hasShot === !1 ? (Le(), Ve("div", zw, " Choose a view · + Add Frame ")) : lt("", !0),
      e.model.viewUnavailable ? (Le(), Rn(Xl, { key: 1 })) : lt("", !0)
    ]));
  }
}, s0 = {
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
      var g, h;
      const { active: f, intent: p } = a();
      if (!f) return;
      const _ = ((h = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : h[0]) || null;
      if (_) {
        n("file-selected", { intent: p, file: _ });
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
}, Hw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Gw = {
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
      onPointerdown: i[1] || (i[1] = Nt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Nt(() => {
      }, ["stop"]))
    }, [
      Ye(tn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Nt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Hw, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Le(!0), Ve(Ze, null, Pt(rt(r), (o) => (Le(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, tt(o[0]), 1),
          Ne("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Kw = { class: "pano-stickers-node-surface" }, Ww = ["disabled"], Uw = ["aria-label", "data-tip"], Bw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Yw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, qw = {
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
    return (s, a) => (Le(), Ve("div", Kw, [
      Ne("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Nt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Nt(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ye(jt, {
            icon: rt(We).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, Ww),
        Ye(tn, {
          icon: e.model.locked ? rt(We).lock_closed : rt(We).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ye(tn, {
          icon: rt(We).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(tn, {
          icon: rt(We).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(tn, {
          icon: e.model.isExternalSelection ? rt(We).back_initial : rt(We).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(Gw)
      ], 32),
      e.model.playable === !0 ? (Le(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Nt(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Nt(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ye(jt, {
          icon: e.model.playing ? rt(We).pause : rt(We).play
        }, null, 8, ["icon"])
      ], 40, Uw)) : lt("", !0),
      e.model.hasStickers === !1 ? (Le(), Ve("div", Bw, " Add Image to place a sticker ")) : lt("", !0),
      e.model.dropActive === !0 ? (Le(), Ve("div", Yw, "Drop image to add")) : lt("", !0),
      Ye(s0, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Le(), Rn(Xl, { key: 3 })) : lt("", !0)
    ]));
  }
}, Xw = { class: "pano-studio-node-surface" }, Jw = {
  class: "pano-studio-node-status",
  role: "status"
}, Zw = { class: "pano-studio-node-shot" }, Qw = { class: "pano-studio-node-size" }, ek = { class: "pano-studio-node-note" }, tk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", Xw, [
      Ne("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Nt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Nt(() => {
        }, ["stop"]))
      }, [
        Ne("div", Jw, [
          Ne("span", Zw, tt(e.model.status.shot), 1),
          Ne("span", Qw, tt(e.model.status.size), 1),
          Ne("span", ek, tt(e.model.status.note), 1)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ye(jt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Ne("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Le(), Rn(Xl, { key: 0 })) : lt("", !0)
    ]));
  }
}, nk = 2048, wu = 4096, rk = (e) => Math.floor(e + 0.5), fa = (e) => Math.max(2, 2 * rk(e / 2));
function a0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function ik(e) {
  const t = wd(e, { camera: !0 });
  return t === Vm ? [] : Array.from({ length: t }, (r, n) => n);
}
function ok(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = nk : s = Math.floor(i * 360 / n);
  const a = a0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((p) => zl(a, p).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [fa(c), fa(d)];
  if (Math.max(...u) <= wu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = wu / Math.max(c, d);
  return { width: fa(c * f), height: fa(d * f), reducedFrom: u, defaulted: o };
}
function l0(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function sk({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === l0(e, t, String(r), n) } : null;
}
function ak(e) {
  return e ? di(Nn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Fc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function lk(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = a0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === l0(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Fc[a] };
    d = ok(e, ik(e), r, n, o);
  }
  const u = Fc[a] ? [Fc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${wu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function ck() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, lk(r(), { ...t, bgWidth: n }));
  };
}
const mp = 24;
function uk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ls(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function c0(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function ku(e, t) {
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
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function dk(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
  return ls(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Gd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function u0(e, t, { accent: r = "#0070f3" } = {}) {
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
function fk(e) {
  const t = wo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function ki(e, t, r) {
  return ld(qa(
    qa(e.centerDir, Xa(e.right, t)),
    Xa(e.up, r)
  ));
}
function Kd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = fk(e), n = $o(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ki(r, -r.tanX, r.tanY),
    ki(r, r.tanX, r.tanY),
    ki(r, r.tanX, -r.tanY),
    ki(r, -r.tanX, -r.tanY)
  ].map((f) => $o(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const _ = [];
    for (let g = 0; g <= 28; g += 1) {
      const h = g / 28;
      let y, B;
      p === 0 ? (y = -r.tanX + 2 * r.tanX * h, B = r.tanY) : p === 1 ? (y = r.tanX, B = r.tanY - 2 * r.tanY * h) : p === 2 ? (y = r.tanX - 2 * r.tanX * h, B = -r.tanY) : (y = -r.tanX, B = -r.tanY + 2 * r.tanY * h);
      const D = $o(ki(r, y, B), t);
      D && _.push({ x: D.x, y: D.y });
    }
    return _;
  }), s = $o(ki(r, 0, r.tanY), t), a = $o(
    ki(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * mp,
      y: s.y + d / u * mp
    },
    visible: !0
  };
}
function gp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Kd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = ku(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = ku(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function pk(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(n.x, n.z) * nn),
    pitch_deg: Math.asin(Oe(n.y, -1, 1)) * nn
  };
}
function hk(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Oe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Oe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function mk(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * nn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let pa = null;
function Wd() {
  return pa || (pa = new Promise((e) => {
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
  }), pa);
}
function qn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function gk(e, t = 1024) {
  const r = Math.max(1, Math.round(qn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(qn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function yk(e, t, r) {
  const n = qn(t), i = qn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = qn(o.u0), a = qn(o.v0), l = qn(o.u1), c = qn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + qn(d.du)) * n,
    centerY: ((a + c) * 0.5 + qn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: qn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, qn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function bk(e, t, r) {
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
function vk() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = yk(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = bk(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === u) return { source: p.source, revision: u };
    const _ = n(c, l), g = Number(_.naturalWidth || _.width || 0), h = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || g < 1 || h < 1) return null;
    const y = on({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const B = y.getContext("2d");
    return B ? (d.wrapOffsets.forEach((D) => {
      B.save(), B.translate(d.centerX + D, d.centerY), B.rotate(d.rotationRad), B.scale(d.scale, d.scale), B.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), B.restore();
    }), t.set(f, { revision: u, source: y }), { source: y, revision: u }) : null;
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
function Sk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function _k(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function wk({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, p, _) {
    if (!u || typeof _ != "function" || p.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const h = g.get(f);
    if ((h == null ? void 0 : h.entry) === p) {
      h.callback = _;
      return;
    }
    o(h);
    const y = { owner: u, key: f, entry: p, callback: _ };
    g.set(f, y), p.listeners.add(y);
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
  function c(u, f, p, _ = null) {
    const g = String(f || ""), h = String(p || "");
    if (!g || !h) return null;
    let y = r.get(g);
    if (y)
      r.delete(g), r.set(g, y);
    else {
      l(i - 1);
      const D = e || globalThis.Image;
      if (typeof D != "function") return null;
      const ee = new D();
      y = { key: g, image: ee, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, y), ee.onload = () => a(y, !0), ee.onerror = () => a(y, !1), ee.src = h;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, _), y.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Wo = /* @__PURE__ */ new WeakMap();
function d0(e, t, { editor: r = !1 } = {}) {
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
function oi(e, ...t) {
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
}), f0 = "PanoramaSuite.Editor.ViewControls", kk = {
  id: f0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Da).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function xk(e) {
  return Object.hasOwn(Da, e) ? Da[e] : Da.default;
}
function Mk(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Nk(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const gl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Pk(e) {
  var s, a;
  const t = zr(e, gl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = zm(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = t0(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Ud(e, t) {
  if (!e || Wn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, p, _, g;
    const o = n ? n(...i) : void 0, s = Wn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = yt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (g = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || g.call(_, !0, !0), o;
  }, Wn(e).coverageSyncInstalled = !0;
}
function Ak(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function yp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Ck(e) {
  var d, u, f, p, _, g;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, gl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Ak(o) && (yp(s) || s === ""))) return;
  let c = "360";
  if (yp(s))
    try {
      c = String($n((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (p = n.callback) == null || p.call(n, s), i && (i.value = a, (_ = i.callback) == null || _.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function La(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function xu(e, t, r) {
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
async function Ik(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Wn(e)) == null ? void 0 : n.pendingStickerUploads;
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
  const n = Wn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function p0(e, t = {}) {
  var n, i, o;
  await Ik(e, t);
  const r = Array.from(((n = Wn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = fl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function Ek(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await p0(e), r ? r.apply(this, n) : this.value;
  };
}
function Ok(e) {
  var r;
  const t = yt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function h0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return F_(this), r;
  };
}
function Fk(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Tc(e, {
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
    const f = `editor_btn|${r}`, p = yt(u);
    if (p.attached === !0 && p.mountKey === f) return;
    Ok(u), Ud(u, t), La(u, gl);
    const _ = zr(u, gl);
    if (Ek(u, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const h = _.callback;
      _.callback = (y) => {
        var D;
        const B = h ? h(y) : void 0;
        return (D = u.setDirtyCanvas) == null || D.call(u, !0, !1), B;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = zr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (g = h.callback) == null || g.call(h, "#00ff00")), xu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), p.stickers && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), p.attached = !0, p.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, xu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), p.cutout && La(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), p.attached = !0, p.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Pk(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && Ck(this);
      const _ = yt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && oi(this, "attach"), p;
    };
  }
  h0(e);
}
function Tk(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return Fk(this), n;
  }, h0(e);
}
function Dk(e, {
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
    Ud(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    xu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && La(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function Lk({
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
    settings: [kk, Ov],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [jf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [jf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Tc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Tc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Tc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ja(d) && Tk(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      yt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Ud(l, e), Ja(c) && Dk(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const Rk = /\.(png|jpe?g|webp|gif|bmp)$/i;
function lr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Rk.test(String(e.name || "")) : !1;
}
function Bd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => lr(r)) : !1;
}
function Vk(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Bd(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => lr(u));
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
  if (!lr(e)) throw new TypeError("A supported image file is required.");
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
async function Pi(e, { fetchApi: t } = {}) {
  if (!lr(e)) throw new TypeError("A supported image file is required.");
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
const bp = /* @__PURE__ */ new WeakSet(), vp = /* @__PURE__ */ new WeakSet();
let Sp = 0;
function Mu(e) {
  if (!e || typeof e != "object" || vp.has(e)) return e;
  const t = String(e.type || "preview");
  return Sp += 1, e.type = `${t}:pano-${Sp}`, vp.add(e), e;
}
function yl(e) {
  if (!e || typeof e != "object" || bp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, bp.add(e), e;
}
function m0(e, t) {
  var n, i;
  if (!t || ((i = (n = yl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function $k({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Gt } = va;
__((e) => Ur(e.id));
w_(hn);
const Yd = wk(), { linkedVideoFile: g0 } = Pg({ app: Gt, api: hn });
function Nu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (va == null ? void 0 : va.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const zk = "pano_suite.ui_settings.v1", jk = 120, Hk = 2048;
function _p() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(zk)) || "").trim();
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
function Gk() {
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
function Kk() {
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
function Pu(e) {
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
function y0(e) {
  const t = Pu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Wk(e, t, r) {
  y0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Au(e) {
  var t, r;
  return (r = (t = yt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function qd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function b0(e) {
  return Ja(qd(e));
}
function wp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function v0(e) {
  const t = yt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Au(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Dc(e), Hx(e, { ...n, mode: i }), this.activeBackend = Au(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || yt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Dc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Dc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Dc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Cu.unregister(e);
  const r = yt(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Nu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => dx(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Uk(e, t = "#00ff00") {
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
function Bk(e) {
  var r, n;
  const t = (r = Wn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = kr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function _n(e) {
  var d, u;
  const t = Wn(e), r = Bk(e), n = t.liveStateVersion, i = String(((d = kr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = kr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Rg(e) && Lt(e, "sticker-handoff") ? cr(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? Y_(r, { backgroundColor: i, coverage: o, active: Um(e) }, a) : Uk(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function kr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function Yk(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function S0(e, t, r = null) {
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
  return !n && r != null && (n = Yk(e == null ? void 0 : e.graph, r)), n;
}
function qk(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function _0(e, t = []) {
  const r = qk(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    er.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function kp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function bl(e, t) {
  const r = kp(e), n = kp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Xk(e, t) {
  var r;
  return S0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function Jk(e, t = er) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = _0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return A_(e, s, Xk);
}
const Cu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, p, _;
        if (!o) return;
        const s = bl(n, o == null ? void 0 : o.id);
        String(yt(o).mode || "") === "cutout" && !s || !s && ![...Jk(o)].some((g) => bl(n, g)) || (s && (Jd(o), (c = (l = yt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !kg(Pn(o).executedOutputs, n, r.output) && (k0(o), (u = (d = yt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (_ = (p = o.graph) == null ? void 0 : p.setDirtyCanvas) == null || _.call(p, !0, !0), String(yt(o).mode || ""), String(yt(o).mode || ""), void 0));
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
function vl(e) {
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
function Zk(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Qk(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function ex(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function tx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Zk(t)) return [t];
  const { filename: r, subfolder: n } = Qk(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => vl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return ex([...i, t]);
}
function nx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? vl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ur(e) {
  const t = Gt == null ? void 0 : Gt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (bl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (bl(s, i)) return t[s];
  }
  return null;
}
function cr(e, t, r = null) {
  const n = r || Ur(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function kn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return kn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return vl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = kn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : vl(e);
}
function Ms(e) {
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
function Xd(e, t) {
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
function rx(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function ix(e, t) {
  try {
    const r = Pn(e);
    r.ownOutputRev = Sk(r.ownOutputRev);
    const n = rx(t);
    let i = "";
    for (const o of n)
      if (i = kn(o), i) break;
    i ? (Xd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function uo(e) {
  var r;
  const t = Pn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function ox(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Lt(e, "background"))
    return uo(e), null;
  const i = Ur(n), o = Td(i, t, kn);
  if (!o)
    return uo(e), null;
  const s = Pn(e), a = Xd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  uo(e);
  const d = C_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function sx(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = _0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], p = e.graph ? e.getInputLink(u) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const _ = p.origin_id, g = S0(e, u, _);
    if (!g) continue;
    const h = Number(p.origin_slot ?? 0), y = Ur((g == null ? void 0 : g.id) ?? _), B = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (B.length) {
      const Y = [];
      h >= 0 && h < B.length && Y.push(B[h]), Y.push(...B);
      for (const $ of Y.filter((ne) => !Ea(ne))) {
        const ne = kn($);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ne}&pano_src=${bu(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let D = [];
    try {
      D = typeof (Gt == null ? void 0 : Gt.getNodeImageUrls) == "function" ? Gt.getNodeImageUrls(g) || [] : [];
    } catch {
      D = [];
    }
    if (Array.isArray(D) && D.length) {
      const Y = [];
      h >= 0 && h < D.length && Y.push(D[h]), Y.push(...D);
      for (const $ of Y) {
        const ne = kn($);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const ee = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (ee.length) {
      const Y = [];
      h >= 0 && h < ee.length && Y.push(ee[h]), Y.push(...ee);
      for (const $ of Y) {
        const ne = kn($);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (C) {
      let Y = kn(C.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (Y = hn.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`)), Y)
        return String((f == null ? void 0 : f.name) || ""), { src: Y, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Lt(e, "background") ? Ur(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = kn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function ax(e, t = [], r = {}) {
  const n = sx(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = tx(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Pn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
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
    const _ = o[f];
    u.pendingResolvedSrc = _, d.src = _;
  };
  return d.onload = () => {
    var _;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (_) => {
    if (f + 1 < o.length) {
      p();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, p(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function w0(e, t = [], r = null, n = {}) {
  const i = ax(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function k0(e) {
  e && (Yd.disposeOwner(e), Pn(e).linkedImages.clear(), uo(e));
}
function lx(e) {
  e && (Pn(e).linkedImages.clear(), uo(e));
}
function x0(e, t) {
  const r = yt(e);
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
  const n = x0(e, ((s = yt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < jk ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function xp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function cx(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Lc(e, t) {
  var n, i;
  const r = (i = (n = yt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function ux(e) {
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
function dx(e, t) {
  return m0(e, t);
}
function Sl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = nx(r);
  if (!o && (n != null && n.external)) {
    if (!Lt(e, "external-sticker")) return null;
    const p = Ur(e == null ? void 0 : e.id), _ = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const g of Array.isArray(_) ? _ : [_])
      if (o = kn(g), o) break;
  }
  if (!o) return null;
  const s = cr(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Pn(e).ownOutputRev : 0, c = n != null && n.external ? Xd(o, l) : o, d = _k(o, a, l);
  return Yd.get(e, d, c, (p, _) => {
    var g, h;
    _ && (n != null && n.external && Pn(e).outputFromRun && oi(e, "image-loaded"), (h = (g = yt(e).dom) == null ? void 0 : g.requestDraw) == null || h.call(g));
  }) || null;
}
function fx(e, t) {
  var f, p, _, g;
  const r = yt(e), n = yx(e, t), i = bx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const y = n.getGroupDisplayCanvas(h);
    return y ? {
      id: `paint_group:${h}`,
      source: y,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (g = (_ = r.rasterCache) == null ? void 0 : _.retain) == null || g.call(_, []), a;
  r.rasterCache || (r.rasterCache = vk()), r.rasterReady || (r.rasterReady = () => {
    var h, y;
    return (y = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : y.call(h);
  });
  const c = gk(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const y = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return y ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: y.source,
      revision: y.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function px(e, t, r, n) {
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
  const i = mx(e, t, n);
  return i || null;
}
function hx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function mx(e, t, r) {
  var i, o;
  const n = hx(t, r || (Gt == null ? void 0 : Gt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function gx(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function yx(e, t) {
  var d, u, f, p, _, g, h, y, B, D, ee, C;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (p = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : p.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = yt(e), a = gx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Vl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((y = s.paintRevision) == null ? void 0 : y.mask) !== c.mask || ((B = s.paintRevision) == null ? void 0 : B.groups) !== c.groups || ((D = s.paintRevision) == null ? void 0 : D.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((ee = t == null ? void 0 : t.painting) == null ? void 0 : ee.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function bx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Mp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function vx(e, t, r) {
  const n = Kd(t, r);
  n.visible && Gd(e, n.boundaryEdges, { selected: !1 });
}
function Sx(e, t, r) {
  const n = Kd(t, r);
  n.visible && (e.save(), Gd(e, n.boundaryEdges, { selected: !0 }), u0(e, n, { accent: uk(t) }), e.restore());
}
function Iu(e, t, r) {
  return cg(ll(yt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function _l(e) {
  var t;
  return ((t = yt(e).playback) == null ? void 0 : t.playback.frame) ?? vo;
}
function _x(e) {
  return [Lt(e, "background") ? Td(Ur(e.id), ["pano_input_videos"], kn) : "", g0(e, er)];
}
function wx(e) {
  var o;
  if (!Lt(e, "external-sticker")) return null;
  const t = Ur(e.id), r = cr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(kn), meta: r };
  const i = Td(t, ["pano_sticker_input_videos"], kn);
  return i ? { src: i, meta: r } : null;
}
function kx(e, t) {
  const r = Ur(e.id), n = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(n) ? n : [];
}
function xx(e, t) {
  var s;
  const r = {}, n = (a) => kx(e, a), i = Lt(e, "scene"), o = i ? n("pano_upstream_layers") : [];
  if (i && Gg(n)) r.bg = null;
  else if (Lt(e, "background")) {
    const a = n("pano_input_video_meta")[0];
    a && typeof a == "object" && (r.bg = { video: cl(e, er), frames: Number(a.frames), duration: Number(a.duration) });
  }
  if (Lt(e, "external-sticker") && (r.port = Ss(n)), o.length) {
    const a = yt(e);
    if (((s = a.upstreamLength) == null ? void 0 : s.layers) !== o || a.upstreamLength.state !== t) {
      const c = Hg(o), d = Wg(c, t.upstream, t.timeline.fps), u = (f) => Ss((p) => Fn(c[f].ui, p));
      a.upstreamLength = { layers: o, state: t, ends: Yg(d, t.upstream, /* @__PURE__ */ new Map(), u, t.timeline.fps) };
    }
    const [l] = n("pano_upstream_frames").length ? n("pano_upstream_frames") : n("pano_timeline_frames");
    r.upstream = { frames: Number(l) > 0 ? Number(l) : 0, ends: a.upstreamLength.ends };
  } else i && (r.sceneItems = n("pano_scene_files").length);
  return r;
}
function Mx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function M0(e, t) {
  var n;
  const r = yt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: Vn({ ...t, painting: null }) }), r.scene.sceneState;
}
function Nx(e, t) {
  const r = Bl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Lt(e, "background")) {
    const o = cr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (cl(e, er)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === g0(e, er) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = w0(e, er, null, { preserveReadyWhilePending: !1 });
  return Ms(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Px(e, t) {
  var i, o, s;
  const r = String(((i = kr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Lt(e, a));
  return {
    stateText: String(((o = kr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: _n(e).coverage,
    bgColor: String(((s = kr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Nx(e, t) : null,
    run: n && cr(e, "pano_output_size") || null,
    erp: cr(e, "pano_output_erp") || null,
    frame: cr(e, "pano_output_frame") || null
  };
}
const Ax = 38;
function Jd(e) {
  const t = Pn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Cx(e, t) {
  const r = Pn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === kn(t.entry) ? r : null;
}
function Ix(e, t) {
  const r = Pn(e), n = yt(e), i = t ? kn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Jd(e), !i) return null;
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
      quaternion: ak(t.entry.rotation)
    }
  } : null;
}
function Ex(e, t) {
  var r;
  return t ? (r = Cx(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function Ox(e, t, r) {
  const n = M0(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = Sl(e, s.id, sl(s.source), { external: s.source.kind === "port" });
      const c = yt(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = Sd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Ra(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = Sl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return Ms(a) ? { media: a, revision: Ra(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : fx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: Ms(r) ? { media: r, revision: Ra(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: dg(n, _l(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Fx(e, t, r, n = null) {
  var ne, _e, ye, we, be, pe, ve;
  const i = yt(e), o = String(i.mode || "stickers");
  x0(e, o);
  const s = _n(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (ye = (_e = (ne = i.cutout) == null ? void 0 : ne.session) == null ? void 0 : _e.refresh) == null || ye.call(_e)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (pe = (be = (we = i.stickers) == null ? void 0 : we.session) == null ? void 0 : be.refresh) == null || pe.call(be));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), jo(e, !1, "");
    const { width: fe, height: ie } = Mp(n.frame), me = Ax, ce = Math.min(l / fe, (c - me) / ie);
    d.drawImage(n.frame, (l - fe * ce) / 2, me + (c - me - ie * ce) / 2, fe * ce, ie * ce);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, p = (f == null ? void 0 : f.media) || (i.playback ? Mx(i.playback) : ox(e, ["pano_input_videos"], () => {
    var fe, ie;
    return (ie = (fe = i.dom) == null ? void 0 : fe.requestDraw) == null ? void 0 : ie.call(fe);
  })) || w0(
    e,
    er,
    () => {
      var fe, ie;
      return (ie = (fe = i.dom) == null ? void 0 : fe.requestDraw) == null ? void 0 : ie.call(fe);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Ms(p);
  let g = null;
  const h = () => f ? { background: f, layers: [] } : Ox(e, s, p), y = (fe, ie) => {
    g || (g = h());
    const me = r.render({ width: fe.w, height: fe.h, camera: ie, ...g });
    return me && d.drawImage(me.canvas, me.x, me.y, me.width, me.height, fe.x, fe.y, fe.w, fe.h), !!me;
  };
  if (o === "cutout") {
    const fe = ux(s), ie = Mp(p), me = fe ? Oe(ui(fe).aspect, 0.1, 10) : _ ? Oe(Number(ie.width / ie.height), 0.05, 20) : 1, ce = Hd(u, me);
    i.cutoutFrame = ce;
    let O = "none";
    const L = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (fe)
      if (p && !_)
        O = "loading";
      else if (_) {
        const M = _w({ width: l, height: c }, ce, fe);
        [
          !M.fallback || y(M.fallback.rect, as(M.fallback.shot)),
          y(M.rect, as(M.shot)),
          !M.fallback || y(ce, as(fe))
        ].every(Boolean) || (O = "loading");
      } else
        O = "empty";
    else {
      const M = i.lastCutoutShot;
      M ? (i.view = e0(M, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), _ ? y(u, ll(i.view, l, c)) || (O = "loading") : p ? O = "loading" : O = "empty";
    }
    _ || r.release(), r.failed && O === "loading" && (O = "none"), fe && (i.lastCutoutShot = { ...fe }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(ce.x, ce.y, ce.w, ce.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ce.x + 0.5, ce.y + 0.5, Math.max(0, ce.w - 1), Math.max(0, ce.h - 1)), d.restore()), O === "loading" ? (Lc(e, !1), jo(e, !0, L)) : O === "empty" ? (Lc(e, !0), jo(e, !1, "")) : (Lc(e, !1), jo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let B = !1;
  (!p || _) && (g = h(), !g.background && !g.layers.length ? (r.release(), B = !0) : B = y(u, ll(i.view, l, c)));
  const D = !B && !r.failed;
  jo(e, D, D ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), D && cx(d, u, xp(t, u));
  const ee = Iu(e, l, c);
  !p && B && Tx(d, ee, xp(t, u));
  const C = String(((ve = s == null ? void 0 : s.active) == null ? void 0 : ve.selected_sticker_id) || ""), Y = vu(s, _l(e)), $ = B && e.__panoStudio !== !0 ? Y.find((fe) => String((fe == null ? void 0 : fe.id) || "") === C && (fe == null ? void 0 : fe.visible) !== !1) : null;
  B && !f && Y.filter((fe) => fe !== $ && (fe == null ? void 0 : fe.visible) !== !1 && (fe.external || fe.source_kind === "external_image")).filter((fe) => !Ms(Sl(e, fe.id, null, { external: !0 }))).forEach((fe) => vx(d, fe, ee)), $ && Sx(d, $, ee);
}
function Np(e, t, r, n, i = 1) {
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
function Tx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Dn(c, a));
    Np(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Dn(a, c));
    Np(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
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
function Eu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Dx(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Yn(e, t) {
  return Dx(e, t) ? !1 : (Eu(e), !0);
}
function Pp() {
  var r;
  const e = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Lx(e) {
  var r;
  if (!e) return;
  const t = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Rx(e, t = 360, r = 260) {
  const n = yt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !y0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function Vx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = yt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Ap(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = yt(e);
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
      s.userResized = !0, t == null || t(), i && $x(e, 180, t);
    }
  };
}
function $x(e, t = 180, r = null) {
  if (!e) return;
  const n = yt(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Yo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const zx = /* @__PURE__ */ new WeakMap();
function N0(e, t) {
  return kg(zx, e, t) ? !1 : (ix(e, t), k0(e), Yo(e), !0);
}
async function jx(e) {
  var r, n;
  const t = await N_(e, Gt, hn);
  t && (N0(e, t), (n = (r = yt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Hx(e, t = {}) {
  var ze;
  const r = t.__allowStandalone === !0, n = yt(e), i = Pn(e), o = Wn(e), s = b0(e);
  if (s && !r) {
    qd(e);
    return;
  }
  s && Rx(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: wp(e)
  }.signature || wp(e), Au(e), e == null || e.id, n.mode, e.addDOMWidget, Pu(e), (ze = n.dom) != null && ze.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, p = f ? 0 : 56, _ = f ? 0 : yw, g = document.createElement("div");
  if (Kk(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    _ > 0 ? `min-height:${_}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const oe = yl(Mu(
      e.addDOMWidget(Nu(), "preview", g, Ap(e, null))
    ));
    Yo(e), n.dom = { widget: oe, root: g, requestDraw: () => {
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
  const y = on({ label: "node.surface" });
  y.style.cssText = [
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
  const B = document.createElement("div");
  B.style.cssText = [
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
  ].join(";"), B.textContent = "Connect ERP image", h.appendChild(y), h.appendChild(B), g.appendChild(h);
  const D = om(g), ee = document.createElement("div");
  ee && (ee.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", ee.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(ee)), Wk(e, 120, 120), Yo(e);
  let C = null;
  try {
    Vx(e, p, () => {
      var oe, Ie;
      return (Ie = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Ie.call(oe);
    }), C = yl(Mu(e.addDOMWidget(
      Nu(),
      "preview",
      g,
      Ap(
        e,
        () => {
          var oe, Ie;
          return (Ie = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Ie.call(oe);
        },
        p,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const Y = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, $ = ck(), ne = () => {
    Y.destroyed || (Y.needsDraw = !0, !Y.inTick && !Y.raf && (Y.raf = requestAnimationFrame(m)));
  }, _e = mg(ne), ye = /* @__PURE__ */ _o(a ? {
    ...$g(_n(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Zg(_n(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((oe) => ({ value: oe, label: oe }))
  });
  let we = null;
  if (a && e.__panoSceneStateV2) {
    const [oe, Ie] = [0, 1].map(() => {
      const Ge = Os(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ge), Ge;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Fe = on({ label: "node.port-still" });
    Fe.__panoFrameIdx = 0;
    const He = ew({
      video: oe,
      stickerVideo: Ie,
      createImage: (Ge, Ue) => {
        const ft = new Image();
        return ft.onload = Ue, ft.onerror = Ue, ft.src = Ge, ft;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => _n(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: ne,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(oe.videoWidth > 0 && oe.videoHeight > 0)) return;
        const Ge = Math.min(1, Hk / oe.videoWidth);
        Ae.width = Math.round(oe.videoWidth * Ge), Ae.height = Math.round(oe.videoHeight * Ge), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(oe, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, ne();
      },
      onStickerCapture: () => {
        var Ge;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Fe.width = Ie.videoWidth, Fe.height = Ie.videoHeight, (Ge = Fe.getContext("2d")) == null || Ge.drawImage(Ie, 0, 0), Fe.__panoFrameIdx += 1, ne());
      },
      onChange: () => {
        ye.playing = He.playing, ne();
      }
    });
    we = { playback: He, video: oe, still: Ae, stickerVideo: Ie, stickerStill: Fe, stickerSource: "" }, n.playback = we;
  }
  const be = () => {
    var vt;
    const { playback: oe, still: Ie, stickerStill: Ae } = we, Fe = Ta(h, !!((vt = e.flags) != null && vt.collapsed)), He = oe.source, Ge = Fe ? wx(e) : null, Ue = _n(e), ft = oe.follow({
      shown: Fe,
      sources: Fe ? _x(e) : [],
      state: Ue,
      sticker: Ge,
      media: Fe ? xx(e, Ue) : {}
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== we.stickerSource && (we.stickerSource = (Ge == null ? void 0 : Ge.src) || "", hs(Ae)), oe.source !== He && (hs(Ie), Ie.__panoFrameIdx = 0), ye.playable = ft, ye.playing = oe.playing;
  }, pe = () => {
    var Ie, Ae;
    const oe = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    oe && !Ta(h, !!((Ae = e.flags) != null && Ae.collapsed)) && oe.pause(), a && (ye.playable = !!oe && !oe.failed(), ye.playing = !!(oe != null && oe.playing));
  }, ve = () => {
    var oe;
    we == null || we.playback.pause(), (oe = i.ownOutputVideo) == null || oe.player.pause();
  };
  let fe = null;
  const ie = (a ? Z_ : kw)({
    readState: () => _n(e),
    publishLiveState: (oe) => {
      oe ? (fe = oe, o.liveState = oe) : (o.liveState === fe && (o.liveState = null), fe = null), o.liveStateVersion += 1, o.parsedState = null, ne();
    },
    commitState: (oe) => {
      var Fe, He, Ge, Ue;
      const Ie = kr(e, "state_json");
      if (!Ie) return;
      Bm(e, oe.active);
      const Ae = Ym(e, oe, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Fe = Ie.callback) == null || Fe.call(Ie, Ae), o.parsedState = null, (He = e.setDirtyCanvas) == null || He.call(e, !0, !0), (Ue = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Ue.call(Ge, !0, !0));
    },
    onChange: (oe) => Object.assign(ye, oe)
  }), ce = a ? d0(e, (oe = "sync", Ie = null) => {
    var ln;
    if (!a || !e.graph || !ie || ie.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Bt = Lt(e, "external-sticker");
      return ie.apply({
        type: "sync-port",
        value: Lg(e, {
          pose: Bt ? cr(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Lt(e, "sticker-handoff") ? cr(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Bt) => String((Bt == null ? void 0 : Bt.name) || "") === "sticker_image") : -1, Fe = Ae >= 0 ? ((ln = e.getInputLink(Ae)) == null ? void 0 : ln.id) ?? null : null;
    if (Fe == null)
      return ie.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Lt(e, "external-sticker")) return !1;
    const He = cr(e, "pano_sticker_input_pose", Ie), Ge = Array.isArray(He) ? He[0] : He, Ue = String(cr(e, "pano_sticker_input_state_hash", Ie) ?? ""), ft = n.view || { yaw: 0, pitch: 0 }, vt = _n(e), kt = (Array.isArray(vt == null ? void 0 : vt.stickers) ? vt.stickers : []).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === "sticker_image_1"), bt = Sl(e, "sticker_image_1", null, { external: !0 }), An = Ge && typeof Ge == "object" ? Ge : kt || { yaw_deg: ft.yaw, pitch_deg: ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return ie.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ue,
        pose: An,
        imageWidth: Number((bt == null ? void 0 : bt.naturalWidth) || (bt == null ? void 0 : bt.width) || 0),
        imageHeight: Number((bt == null ? void 0 : bt.naturalHeight) || (bt == null ? void 0 : bt.height) || 0)
      }
    });
  }) : () => {
  };
  let O = 0;
  const L = async (oe) => {
    if (!a || !ie || !lr(oe)) return !1;
    ve();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...n.view || { yaw: 0, pitch: 0 } };
    O += 1, ye.importing = !0;
    const He = Uo(e, `add:${Ie}`, async () => {
      const Ge = await Bo(oe), Ue = await Pi(oe, {
        fetchApi: (ft, vt) => hn.fetchApi(ft, vt)
      });
      return P(), ie.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Ie,
          asset: Ue,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await He;
    } catch {
      return !1;
    } finally {
      O = Math.max(0, O - 1), ye.importing = O > 0, ne();
    }
  };
  let M = null, de = null, Q = null, R = !1;
  const k = () => {
    var oe;
    return Q && (clearTimeout(Q), Q = null), R ? (R = !1, ((oe = ie == null ? void 0 : ie.commitGesture) == null ? void 0 : oe.call(ie)) ?? !1) : !1;
  }, P = () => {
    var Fe, He, Ge;
    const oe = k(), Ie = (M == null ? void 0 : M.pointerId) ?? (de == null ? void 0 : de.pointerId);
    if (M = null, de = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((He = y.releasePointerCapture) == null || He.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ge = ie == null ? void 0 : ie.commitGesture) == null ? void 0 : Ge.call(ie)) ?? !1;
    return oe || Ae;
  }, le = () => {
    var Fe, He, Ge;
    const oe = k(), Ie = M == null ? void 0 : M.pointerId;
    if (M = null, Ie != null) {
      try {
        (Fe = y.hasPointerCapture) != null && Fe.call(y, Ie) && ((He = y.releasePointerCapture) == null || He.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ge = ie == null ? void 0 : ie.cancelGesture) == null ? void 0 : Ge.call(ie)) ?? !1;
    return oe || Ae;
  }, q = () => P();
  ie && o.flushers.add(q);
  let I = null, v = !1;
  if (ee && ie)
    try {
      Wd(), I = nd(l ? tk : a ? qw : jw, {
        model: ye,
        onAction: (oe) => {
          var Fe, He, Ge;
          if ((oe == null ? void 0 : oe.type) === "toggle-playback") {
            P(), we ? we.playback.toggle() : (Fe = i.ownOutputVideo) == null || Fe.player.toggle(), ne();
            return;
          }
          if (ve(), (oe == null ? void 0 : oe.type) === "open-editor") {
            P(), a || (ye.aspectOpen = !1), (He = n.openEditor) == null || He.call(n);
            return;
          }
          if (a) {
            if ((oe == null ? void 0 : oe.type) === "add-image-file") {
              L(oe.file);
              return;
            }
            ie.apply(oe) && ne();
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "toggle-aspect") {
            ye.aspectOpen = !ye.aspectOpen;
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "close-aspect") {
            ye.aspectOpen = !1;
            return;
          }
          let Ie = oe;
          if ((oe == null ? void 0 : oe.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...oe,
              ...vw(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((oe == null ? void 0 : oe.type) === "delete-frame") {
            const Ue = Ti(_n(e));
            Ue && (n.view = e0(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = ((Ge = n.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          ye.aspectOpen = !1, ie.apply({ ...Ie, safeRect: Ae }) && ne();
        }
      }), I.mount(ee), v = !0;
    } catch {
      I = null, v = !1;
    }
  const K = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    we && be(), ne();
  }) : null;
  K == null || K.observe(h);
  const m = (oe) => {
    var Ae, Fe, He;
    Y.raf = 0, Y.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = S.stepInertia(oe), Y.needsDraw || Ie) {
        Y.needsDraw = !1, we ? be() : pe();
        const Ge = l ? Px(e, we) : null, Ue = Ge ? sk(Ge) : null, ft = () => M0(e, _n(e)), vt = Ge && Ta(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? Ix(e, Ue) : null;
        if ((Fe = e.flags) != null && Fe.collapsed || Fx(e, y, _e, vt), ye.viewUnavailable = _e.failed, l) {
          const kt = $({ ...Ge, display: Ex(e, Ue) }, ft);
          kt && (ye.status = kt);
        }
      }
    } finally {
      Y.inTick = !1;
    }
    (Ie || Y.needsDraw) && !Y.raf && (Y.raf = requestAnimationFrame(m)), Gk() && (!n.debugLastTs || oe - n.debugLastTs > 1200) && (n.debugLastTs = oe, n.mode, Pu(e), zo(g), zo(h), zo(y), zo(g.parentElement), zo((He = g.parentElement) == null ? void 0 : He.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, S = ad({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (oe) => {
      n.view = oe;
    },
    getViewportSize: () => {
      const oe = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(oe.width || y.clientWidth || 0)),
        h: Math.max(1, Number(oe.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const oe = _p();
      return {
        x: oe.invert_view_x ? -1 : 1,
        y: oe.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      ne();
    }
  }), V = a ? h : g, w = (oe) => {
    const Ie = y.getBoundingClientRect();
    return {
      x: (Number(oe.clientX) - Ie.left) * (y.width / Math.max(1, Ie.width)),
      y: (Number(oe.clientY) - Ie.top) * (y.height / Math.max(1, Ie.height))
    };
  }, T = (oe) => {
    var Fe, He;
    if (!a || l || !d) return;
    const Ie = _n(e), Ae = gp(
      vu(Ie, _l(e)),
      String(((Fe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      w(oe),
      Iu(e, y.width, y.height)
    );
    if (!Ae) {
      y.style.cursor = "grab";
      return;
    }
    if (((He = Ae.item) == null ? void 0 : He.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ae.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (oe) => {
    var ft, vt, kt, bt, An, qe, ln, Bt, gi, Yr, yi;
    if (!Yn(oe, V) || oe.button !== 0) return;
    if (!a) {
      const sn = Ti(_n(e)), bn = n.cutoutFrame;
      if (!sn) {
        (ft = g.focus) == null || ft.call(g, { preventScroll: !0 }), (vt = y.setPointerCapture) == null || vt.call(y, oe.pointerId), y.style.cursor = "grabbing", S.startDrag(oe.clientX, oe.clientY, oe.pointerId);
        return;
      }
      if (sn.locked === !0 || !bn || !ie) return;
      const qr = w(oe);
      let hr;
      if (oe.shiftKey) {
        const rr = n0({
          frame: bn,
          point: qr,
          startRollDeg: Number(sn.roll_deg ?? sn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!rr) return;
        hr = { kind: "roll", pointerId: oe.pointerId, rollGesture: rr };
      } else {
        const rr = ((kt = _n(e)) == null ? void 0 : kt.ui_settings) || _p();
        hr = {
          kind: "pan",
          pointerId: oe.pointerId,
          startPoint: qr,
          startShot: { ...sn },
          focalPx: Ri(bn, sn),
          invertX: rr.invert_view_x === !0,
          invertY: rr.invert_view_y === !0
        };
      }
      P(), (bt = g.focus) == null || bt.call(g, { preventScroll: !0 }), (An = y.setPointerCapture) == null || An.call(y, oe.pointerId), y.style.cursor = "grabbing", ie.beginGesture(), M = hr;
      return;
    }
    if (!d) return;
    const Ie = w(oe), Ae = _n(e), Fe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), He = Iu(e, y.width, y.height);
    (ln = g.focus) == null || ln.call(g, { preventScroll: !0 });
    const Ge = () => gp(vu(Ae, _l(e)), Fe, Ie, He);
    let Ue = l ? null : Ge();
    if (Ue && (we != null && we.playback.playing) && (ve(), Ue = Ge()), Ue && ie) {
      if (S.stopMotion(), P(), String(((Bt = Ue.item) == null ? void 0 : Bt.id) || "") !== Fe && ie.apply({ type: "select-sticker", id: Ue.item.id }), ((gi = Ue.item) == null ? void 0 : gi.locked) === !0) {
        ne();
        return;
      }
      const sn = Ie, bn = Ue.geometry.center;
      de = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: oe.pointerId,
        startPoint: sn,
        startCenter: { ...bn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(sn.x - bn.x, sn.y - bn.y)),
        startAngle: Math.atan2(sn.y - bn.y, sn.x - bn.x),
        projection: He
      }, ie.beginGesture(), (Yr = y.setPointerCapture) == null || Yr.call(y, oe.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, ne();
      return;
    }
    (yi = y.setPointerCapture) == null || yi.call(y, oe.pointerId), y.style.cursor = "grabbing", S.startDrag(oe.clientX, oe.clientY, oe.pointerId);
  }), y.addEventListener("pointermove", (oe) => {
    if (!a) {
      if (!M) {
        if (!S.state.drag.active) return;
        Yn(oe, V), S.moveDrag(oe.clientX, oe.clientY, "pano");
        return;
      }
      if (M.pointerId !== oe.pointerId || !ie) return;
      if (Yn(oe, V), M.kind === "pan") {
        const Ae = w(oe);
        ie.updateGesture({
          type: "pan-camera",
          startShot: M.startShot,
          dx: Ae.x - M.startPoint.x,
          dy: Ae.y - M.startPoint.y,
          focalPx: M.focalPx,
          invertX: M.invertX,
          invertY: M.invertY
        });
        return;
      }
      const Ie = r0(M.rollGesture, w(oe), oe);
      if (!Ie) return;
      M.rollGesture = Ie.gesture, ie.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!de && !S.state.drag.active) {
      T(oe);
      return;
    }
    if (de) {
      if (de.pointerId !== oe.pointerId || !ie) return;
      Yn(oe, V);
      const Ie = w(oe);
      let Ae = de.startSticker;
      if (de.kind === "move")
        Ae = pk(
          de.startSticker,
          {
            x: de.startCenter.x + Ie.x - de.startPoint.x,
            y: de.startCenter.y + Ie.y - de.startPoint.y
          },
          de.projection
        );
      else if (de.kind === "scale") {
        const Fe = Math.hypot(Ie.x - de.startCenter.x, Ie.y - de.startCenter.y);
        Ae = hk(de.startSticker, de.startDistance, Fe);
      } else if (de.kind === "rotate") {
        const Fe = Math.atan2(Ie.y - de.startCenter.y, Ie.x - de.startCenter.x);
        Ae = mk(de.startSticker, de.startAngle, Fe, oe.shiftKey === !0);
      }
      ie.updateGesture({ type: "set-transform", value: Ae }), ne();
      return;
    }
    !d || !S.state.drag.active || (Yn(oe, V), S.moveDrag(oe.clientX, oe.clientY, "pano"));
  });
  const z = () => {
    var Ie, Ae;
    if (!M && !de) {
      if (!S.state.drag.active) return;
      S.endDrag(), y.style.cursor = "grab", ne();
      return;
    }
    if (!ie) return;
    const oe = (M == null ? void 0 : M.pointerId) ?? (de == null ? void 0 : de.pointerId);
    M = null, de = null;
    try {
      (Ie = y.hasPointerCapture) != null && Ie.call(y, oe) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, oe));
    } catch {
    }
    ie.cancelGesture(), y.style.cursor = "grab", ne();
  }, Z = (oe, Ie = !1) => {
    var Ae, Fe, He, Ge;
    if (!a) {
      if (!M) {
        if (!S.state.drag.active) return;
        Yn(oe, V), (Ae = y.releasePointerCapture) == null || Ae.call(y, oe.pointerId), y.style.cursor = "grab", S.endDrag(), ne();
        return;
      }
      if (M.pointerId !== oe.pointerId || !ie) return;
      Yn(oe, V), M = null, (Fe = y.releasePointerCapture) == null || Fe.call(y, oe.pointerId), y.style.cursor = "grab", Ie ? ie.cancelGesture() : ie.commitGesture(), T(oe), ne();
      return;
    }
    if (de) {
      if (de.pointerId !== oe.pointerId || !ie) return;
      Yn(oe, V), de = null, (He = y.releasePointerCapture) == null || He.call(y, oe.pointerId), y.style.cursor = "grab", Ie ? ie.cancelGesture() : ie.commitGesture(), ne();
      return;
    }
    !d || !S.state.drag.active || (Yn(oe, V), (Ge = y.releasePointerCapture) == null || Ge.call(y, oe.pointerId), y.style.cursor = "grab", S.endDrag(), ne());
  };
  y.addEventListener("pointerup", Z), y.addEventListener("pointercancel", (oe) => Z(oe, !0)), y.addEventListener("lostpointercapture", z), y.addEventListener("pointerleave", (oe) => {
    !a && M || de || S.state.drag.active && Z(oe);
  });
  const E = (oe) => {
    const Ie = document.activeElement;
    if (Ie !== g && !g.contains(Ie)) return;
    if (oe.key === "Escape" && (M || de) && ie) {
      z(), Eu(oe);
      return;
    }
    if (!a || l || oe.key !== "Delete" && oe.key !== "Backspace" || !ie) return;
    const Ae = oe.target, Fe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ae != null && Ae.isContentEditable || ye.canDelete === !0 && (ve(), P(), ie.apply({ type: "delete-selected" }) && ne(), Eu(oe));
  };
  window.addEventListener("keydown", E, !0);
  const N = $k({
    requestFrame: (oe) => requestAnimationFrame(oe),
    cancelFrame: (oe) => cancelAnimationFrame(oe),
    restore: (oe) => Lx(oe)
  }), b = (oe) => {
    var Ae, Fe, He, Ge, Ue, ft;
    if (!Yn(oe, V)) return;
    if (!a) {
      const vt = Ti(_n(e));
      if (vt && vt.locked !== !0 && ie) {
        const kt = Ya(oe);
        kt !== 0 && (R || (P(), ie.beginGesture(), R = !0), ie.updateGesture({
          type: "step-fov",
          direction: kt
        }) ? (Q && clearTimeout(Q), Q = setTimeout(k, 180), ne()) : ie.hasGestureChanges() || (ie.cancelGesture(), R = !1));
      } else if (!vt) {
        const kt = Pp();
        S.applyWheelEvent(oe) && ne(), N.schedule(kt);
      }
      (Ae = oe.preventDefault) == null || Ae.call(oe), (Fe = oe.stopPropagation) == null || Fe.call(oe), (He = oe.stopImmediatePropagation) == null || He.call(oe);
      return;
    }
    if (!d) return;
    const Ie = Pp();
    S.applyWheelEvent(oe) && ne(), (Ge = oe.preventDefault) == null || Ge.call(oe), (Ue = oe.stopPropagation) == null || Ue.call(oe), (ft = oe.stopImmediatePropagation) == null || ft.call(oe), N.schedule(Ie);
  }, A = a ? [h, y] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((oe) => {
    A.forEach((Ie) => Ie.addEventListener(oe, b, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((oe) => {
    y.addEventListener(oe, (Ie) => Yn(Ie, V)), h.addEventListener(oe, (Ie) => Yn(Ie, V));
  });
  const X = kr(e, "state_json");
  let ge = null, he = null;
  X && !X.__panoPreviewPatchedCb && (ge = X.callback, he = (oe) => {
    const Ie = ge ? ge(oe) : void 0;
    return ne(), Ie;
  }, X.callback = he, X.__panoPreviewPatchedCb = he);
  const xe = kr(e, "bg_color");
  let se = null, ke = null;
  xe && !xe.__panoPreviewPatchedCb && (se = xe.callback, ke = (oe) => {
    const Ie = se ? se(oe) : void 0;
    return ne(), Ie;
  }, xe.callback = ke, xe.__panoPreviewPatchedCb = ke);
  const j = l ? kr(e, "output_size") : null, ae = j == null ? void 0 : j.callback, G = j ? (oe) => {
    const Ie = ae ? ae(oe) : void 0;
    return ne(), Ie;
  } : null;
  j && (j.callback = G);
  const te = e.onRemoved, H = e.onResize, J = e.onExecuted, U = e.onDragOver, x = e.onDragDrop;
  let re = null;
  const ue = () => {
    a && (ye.dropActive = !0, re && clearTimeout(re), re = setTimeout(() => {
      re = null, ye.dropActive = !1;
    }, 140));
  }, F = c ? function(oe) {
    return (U ? U.apply(this, arguments) : !1) === !0 ? !0 : Bd(oe == null ? void 0 : oe.dataTransfer) ? (ue(), !0) : !1;
  } : null, W = c ? function(oe) {
    var Fe;
    if ((x ? x.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Fe = oe == null ? void 0 : oe.dataTransfer) == null ? void 0 : Fe.files) || []).find((He) => lr(He));
    return Ae ? (re && clearTimeout(re), re = null, ye.dropActive = !1, L(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = F, e.onDragDrop = W);
  const Se = c ? Vk(g, {
    onActive: (oe) => {
      if (oe) {
        ue();
        return;
      }
      re && clearTimeout(re), re = null, ye.dropActive = !1;
    },
    onDrop: (oe) => {
      L(oe);
    }
  }) : () => {
  }, Me = function(oe) {
    i.outputFromRun = !0;
    const Ie = N0(e, oe);
    oi(e, Ie ? "executed" : "sync", oe), ne();
    const Ae = J ? J.apply(this, arguments) : void 0;
    return Yo(e), Ae;
  };
  e.onExecuted = Me;
  const Ee = e.onConnectionsChange, Re = function(oe, Ie) {
    const Ae = op(e, oe, Ie, [...Od, ...Fd]), Fe = op(e, oe, Ie, er), He = arguments, Ge = Ee ? Ee.apply(this, He) : void 0, Ue = () => {
      Y.destroyed || (Fe && lx(e), Ae && oi(e, "connection-change"), Yo(e), ne());
    };
    return Ue(), queueMicrotask(Ue), Ge;
  };
  e.onConnectionsChange = Re;
  const je = function() {
    const oe = H ? H.apply(this, arguments) : void 0;
    return yt(this).userResized = !0, ne(), oe;
  };
  e.onResize = je;
  const Ke = function() {
    return Ce(), Cu.unregister(this), te ? te.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ke;
  const Ce = () => {
    var oe, Ie, Ae, Fe, He, Ge, Ue;
    Y.destroyed = !0, (oe = K == null ? void 0 : K.disconnect) == null || oe.call(K), a ? P() : le(), y.removeEventListener("lostpointercapture", z), Se(), D(), window.removeEventListener("keydown", E, !0), o.flushers.delete(q), (Ie = ie == null ? void 0 : ie.destroy) == null || Ie.call(ie), (Ae = I == null ? void 0 : I.unmount) == null || Ae.call(I), we && (we.playback.dispose(), we.video.remove(), we.stickerVideo.remove(), n.playback === we && (n.playback = null)), _e.dispose(), n.scene = null, (He = (Fe = n.rasterCache) == null ? void 0 : Fe.dispose) == null || He.call(Fe), n.rasterCache = null, n.rasterReady = null, ce(), N.dispose(), re && clearTimeout(re), re = null, Yd.disposeOwner(e), uo(e), Jd(e), Y.raf && cancelAnimationFrame(Y.raf), Y.raf = 0, ((Ge = n.cutout) == null ? void 0 : Ge.session) === ie && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === ie && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === je && (e.onResize = H), e.onExecuted === Me && (e.onExecuted = J), e.onConnectionsChange === Re && (e.onConnectionsChange = Ee), he && (X == null ? void 0 : X.callback) === he && (X.callback = ge), he && (X == null ? void 0 : X.__panoPreviewPatchedCb) === he && delete X.__panoPreviewPatchedCb, ke && (xe == null ? void 0 : xe.callback) === ke && (xe.callback = se), ke && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === ke && delete xe.__panoPreviewPatchedCb, G && j.callback === G && (j.callback = ae), e.onDragOver === F && (e.onDragOver = U), e.onDragDrop === W && (e.onDragDrop = x), e.onRemoved === Ke && (e.onRemoved = te);
  };
  n.restore = Ce, n.cutout = ie && v && !a ? { session: ie, model: ye } : null, n.stickers = ie && v && a ? { session: ie, model: ye } : null, n.dom = {
    widget: C,
    root: g,
    canvas: y,
    requestDraw: ne,
    state: Y,
    emptyHintEl: B,
    nodeSurface: n.cutout
  }, Cu.register(e), e.graph && oi(e, "attach"), ne();
}
function Cp(e, t = {}) {
  v0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Ip(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (b0(e) && !r) {
    qd(e);
    return;
  }
  v0(e).attach(t);
}
function Gx(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Kx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let p = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (p = Math.min(p, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(c * p))
  };
}
function Wx({
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
    const _ = l();
    return _ === a || (a = _, i(_)), _;
  }, d = () => c();
  return (p = t == null ? void 0 : t.addEventListener) == null || p.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var _;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
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
    var _, g, h;
    if (!s) {
      if (s = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", d), l())
        try {
          const y = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (h = y == null ? void 0 : y.catch) == null || h.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const Ux = { class: "pano-preview-node-surface" }, Bx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Le(), Ve("div", Ux, [
      Ye(tn, {
        icon: e.model.fullscreen ? rt(We).fullscreen_close : rt(We).fullscreen,
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
      e.model.viewUnavailable ? (Le(), Rn(Xl, { key: 0 })) : lt("", !0)
    ]));
  }
}, ha = 140, Yx = 180, Ep = 40, Rc = 10;
function Op(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Fp(e, t) {
  const r = Op(e), n = Op(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Tp(e) {
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
      return Tp({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Tp(e);
}
function P0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function qx(e) {
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
function Ou(e) {
  var i;
  const t = (i = ur) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Fp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Fp(o, r)) return t[o];
  return null;
}
function Xx(e) {
  var n, i;
  const t = Ou(e == null ? void 0 : e.id), r = [
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
function Jx(e, t = "erp_image") {
  var p, _, g, h, y, B, D;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((ee) => String((ee == null ? void 0 : ee.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((ee, C) => String((ee == null ? void 0 : ee.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (_ = (p = ur) == null ? void 0 : p.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : g.call(_, o), a = Ou(o), l = Ou(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const ee of c)
    if (Array.isArray(ee))
      for (const C of ee) {
        const Y = fo(C);
        if (Y) return Y;
      }
  let d = [];
  try {
    d = typeof ((B = ur) == null ? void 0 : B.getNodeImageUrls) == "function" ? ur.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const ee of d) {
      const C = fo(ee);
      if (C) return C;
    }
  if (s) {
    const ee = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const C of ee) {
      const Y = fo(C);
      if (Y) return Y;
    }
  }
  const u = (D = s == null ? void 0 : s.widgets) == null ? void 0 : D.find((ee) => String((ee == null ? void 0 : ee.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Vc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Dp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !P0(o) || r <= 1 || n <= 1) {
    Vc(t, r, n);
    return;
  }
  if (s.failed) {
    Vc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: ll(i, r, n),
    background: { media: o, revision: qx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Vc(t, r, n);
}
function Lp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Zx {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = mg(() => this.requestDraw()), this.controller = ad({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Kt(Number((n == null ? void 0 : n.yaw) || 0)),
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
        `min-height:${ha}px`,
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
          return ha;
        },
        getHeight() {
          return ha;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = yl(Mu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ha, Number(o.minHeight || 0)),
            minWidth: Math.max(Yx, Number(o.minWidth || 0))
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
      return Wd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ _o({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Wx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = nd(Bx, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = om(r), t.addEventListener("pointerdown", (o) => {
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
      Gx(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !P0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Ta(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = ur.canvas) != null && n.graph) || this.node.graph === ur.canvas.graph);
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
      return Lp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = px(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Lp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Rc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Ep - Rc);
    return { x: Rc, y: Ep, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Dp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? hg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Kx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Xx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Os(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = Jx(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Dp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, p, _, g, h, y;
    if (((r = Ng(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (p = this.root) == null ? void 0 : p.remove) == null || _.call(p);
    } catch {
    }
    try {
      m0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (h = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : h.find) == null ? void 0 : y.call(h, (B) => (B == null ? void 0 : B.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function Qx(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new Zx(e, t);
  $r(e).runtime = r, r.attach();
}
function A0(e, t, r) {
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
function Zd(e) {
  return !!(e != null && e.prototype);
}
function Ns(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function eM(e, t = {}) {
  Zd(e) || Qx(e, {
    ...t,
    onOpen: Ns(e, t.onOpen)
  });
}
function tM(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Zd(e)) {
    Ip(e, {
      ...n,
      onOpen: Ns(e, t.onOpen)
    });
    return;
  }
  A0(e, "stickers_node_preview", (i) => {
    Ip(i, {
      ...n,
      onOpen: Ns(i, t.onOpen)
    });
  });
}
function nM(e, t = {}) {
  if (!Zd(e)) {
    Cp(e, {
      ...t,
      onOpen: Ns(e, t.onOpen)
    });
    return;
  }
  A0(e, "cutout_preview", (r) => {
    Cp(r, {
      ...t,
      onOpen: Ns(r, t.onOpen)
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
}, Dr = "pen";
function Rp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function rM({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const pt = Object.freeze({
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
}), iM = new Set(Object.values(pt));
function oM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (h) {
      i(h);
    }
  }
  function p() {
    !o && !s && !a && (o = e(_));
  }
  function _(g) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const B of h.values()) f(() => B(g));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || n()) && f(() => r(g, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && p();
  }
  return {
    requestDraw(g) {
      if (!iM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === pt.STATE && (u += 1), l.add(g), p();
    },
    requestFrame(g) {
      const h = d++;
      return c.set(h, g), p(), h;
    },
    cancelFrame(g) {
      c.delete(g);
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
const sM = { class: "pano-floating-right" }, aM = {
  key: 0,
  class: "pano-floating-space"
}, lM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, cM = ["data-settled"], uM = ["data-ready", "data-settled"], dM = ["aria-label", "data-tip"], fM = {
  key: 1,
  class: "pano-camera-preview-label"
}, pM = {
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
      Ne("div", sM, [
        e.space ? jr((Le(), Ve("div", aM, [
          Ne("div", lM, [
            (Le(!0), Ve(Ze, null, Pt(e.space.modes, (n) => (Le(), Rn(tn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ye(tn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Li, e.space.visible]
        ]) : lt("", !0),
        (Le(!0), Ve(Ze, null, Pt(e.buttons, (n) => (Le(), Rn(tn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      jr(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ot({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Ne("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ne("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Le(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ye(jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, dM)) : lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Le(), Ve("div", fM, tt(e.preview.label || "Preview unavailable"), 1)) : lt("", !0)
        ], 14, uM)
      ], 8, cM), [
        [Li, e.preview.visible]
      ])
    ], 64));
  }
}, hM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, mM = ["y2", "transform"], gM = ["transform"], yM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Le(), Ve("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Le(), Ve("svg", hM, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Le(!0), Ve(Ze, null, Pt(rt(r), (s) => (Le(), Ve("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, mM))), 128)),
        Ne("g", { transform: n.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, gM),
        o[2] || (o[2] = Ne("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Li, e.model.visible === !0]
    ]);
  }
}, bM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ye(o0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ye(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(yM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, vM = ["aria-label"], SM = { class: "pano-canvas-confirm-title" }, _M = { class: "pano-canvas-confirm-text" }, wM = { class: "pano-canvas-confirm-actions" }, kM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, xM = {
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
      var g;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const _ = o()[0] || u;
      (g = _ == null ? void 0 : _.focus) == null || g.call(_);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var y;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        u.preventDefault(), (y = p == null ? void 0 : p.focus) == null || y.call(p);
        return;
      }
      const _ = f[0], g = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === _ || h === p || !(p != null && p.contains(h))) && (u.preventDefault(), g.focus());
        return;
      }
      (h === g || !(p != null && p.contains(h))) && (u.preventDefault(), _.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ei(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, Ol(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Is(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Le(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Nt(d, ["self"])
    }, [
      Ne("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Ne("div", SM, tt(e.model.title), 1),
        Ne("div", _M, tt(e.model.text), 1),
        Ne("div", wM, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", kM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, vM)
    ], 512)) : lt("", !0);
  }
}, MM = ["data-paint-pane"], NM = ["hidden"], PM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], AM = ["aria-pressed", "disabled"], CM = ["hidden"], IM = { class: "pano-paint-color-pop-head" }, EM = { class: "pano-paint-color-field" }, OM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, FM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, TM = { class: "pano-paint-color-field" }, DM = { class: "pano-paint-alpha-wrap" }, LM = ["value"], RM = { "data-paint-alpha-value": "" }, VM = ["hidden"], $M = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, zM = ["data-paint-history-index", "aria-label", "disabled"], jM = ["data-paint-footer"], HM = ["data-paint-group"], GM = ["hidden"], KM = ["value", "disabled"], WM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, UM = ["hidden"], BM = {
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
      (Le(!0), Ve(Ze, null, Pt(e.panes, (o) => {
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
            (Le(!0), Ve(Ze, null, Pt(e.paintSwatches, (a) => (Le(), Ve("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Ot(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, PM))), 128)),
            Ne("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ot({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, AM),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ot({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ne("div", IM, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ot({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", EM, [
                Ne("div", OM, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ot({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", FM, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ot({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", TM, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", DM, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, LM),
                  Ne("span", RM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", $M, [
                  (Le(!0), Ve(Ze, null, Pt(e.state.historyEntries || [], (a) => (Le(), Ve("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Ot(r(a.color))
                  }, null, 14, zM))), 128))
                ])
              ], 8, VM)
            ], 12, CM)
          ], 10, NM)) : lt("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Le(!0), Ve(Ze, null, Pt(o.tools, (a) => {
                var l;
                return Le(), Rn(tn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, HM),
            Ne("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Ne("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Ot({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, KM),
              Ne("span", WM, tt(e.state.sizeText || "10"), 1)
            ], 10, GM),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ye(tn, {
                icon: rt(We).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, UM)
          ], 8, jM)
        ], 10, MM);
      }), 128))
    ], 2));
  }
}, YM = {
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
      Ne("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ne("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Ne("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, qM = ["aria-label"], XM = ["data-tip", "aria-pressed"], JM = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Le(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Ot({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Le(!0), Ve(Ze, null, Pt(e.buttons, (o) => (Le(), Ve("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), tt(o.label), 17, XM))), 128))
    ], 12, qM));
  }
}, ZM = {
  key: 0,
  class: "pano-cutout-menu"
}, QM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, eN = ["data-aspect"], tN = ["data-action", "aria-label", "data-tip", "disabled"], nN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ot({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Le(!0), Ve(Ze, null, Pt(e.model.items || [], (n) => (Le(), Ve(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Le(), Ve("div", ZM, [
          Ne("button", QM, [
            Ye(jt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Le(!0), Ve(Ze, null, Pt(n.choices || [], (i) => (Le(), Ve("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, tt(i.label), 11, eN))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Le(), Rn(JM, {
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
          Ye(jt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, tN))
      ], 64))), 128))
    ], 4));
  }
}, rN = {
  key: 0,
  class: "pano-easing"
}, iN = { class: "pano-section-title" }, oN = { class: "pano-easing-range" }, sN = { class: "pano-easing-modes" }, aN = ["aria-pressed", "onClick"], lN = ["viewBox"], cN = ["x", "y"], uN = ["x1", "y1", "x2", "y2"], dN = ["d"], fN = ["x1", "y1", "x2", "y2"], pN = ["x1", "y1", "x2", "y2"], hN = ["cx", "cy"], mN = ["cx", "cy"], gN = { class: "pano-easing-note" }, Er = 132, xi = 14, yN = {
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
    ], o = /* @__PURE__ */ Jt(null), s = ut(() => {
      var _;
      return Array.isArray((_ = r.model) == null ? void 0 : _.easing) ? r.model.easing : null;
    }), a = (_) => xi + _ * Er, l = (_) => xi + (1 - _) * Er, c = ut(() => {
      var B;
      if (((B = r.model) == null ? void 0 : B.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [_, g, h, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(_)} ${l(g)} ${a(h)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = ut(() => s.value ? s.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var g;
      return JSON.stringify(_.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(_, g) {
      n("timeline", { type: "easing", easing: _, commit: g });
    }
    function p(_, g) {
      var ee;
      if (_.button !== 0 || !s.value) return;
      const h = _.currentTarget;
      (ee = h.setPointerCapture) == null || ee.call(h, _.pointerId);
      let y = null;
      const B = (C) => {
        const Y = o.value.getBoundingClientRect(), $ = Y.width / (Er + xi * 2), ne = ((C.clientX - Y.left) / $ - xi) / Er, _e = 1 - ((C.clientY - Y.top) / $ - xi) / Er;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, f(y, !1);
      }, D = () => {
        h.removeEventListener("pointermove", B), h.removeEventListener("pointerup", D), h.removeEventListener("pointercancel", D), y && f(y, !0);
      };
      h.addEventListener("pointermove", B), h.addEventListener("pointerup", D), h.addEventListener("pointercancel", D);
    }
    return (_, g) => e.model ? (Le(), Ve("div", rN, [
      Ne("div", iN, [
        g[2] || (g[2] = Ne("span", null, "Easing", -1)),
        Ne("span", oN, tt(e.model.label), 1)
      ]),
      Ne("div", sN, [
        (Le(), Ve(Ze, null, Pt(i, (h) => Ne("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (y) => f(h.easing, !0)
        }, tt(h.label), 9, aN)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Le(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + xi * 2} ${Er + xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, cN),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, uN),
        Ne("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, dN),
        s.value ? (Le(), Ve(Ze, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, fN),
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, pN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (h) => p(h, 0))
          }, null, 40, hN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (h) => p(h, 2))
          }, null, 40, mN)
        ], 64)) : lt("", !0)
      ], 8, lN)) : lt("", !0),
      Ne("div", gN, [
        e.model.mixed ? (Le(), Ve(Ze, { key: 0 }, [
          Go("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Le(), Ve(Ze, { key: 1 }, [
          Go("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Le(), Ve(Ze, { key: 2 }, [
          Go("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Le(), Ve(Ze, { key: 3 }, [
          Go("cubic-bezier(" + tt(d.value) + ")", 1)
        ], 64)) : lt("", !0)
      ])
    ])) : lt("", !0);
  }
}, bN = ["title"], vN = { class: "pano-ui-row" }, SN = ["disabled"], _N = { class: "pano-upstream-lanes" }, wN = ["data-action", "data-lane", "disabled", "title"], kN = {
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
      Ne("div", vN, [
        r[0] || (r[0] = Ne("label", null, "Revert to upstream", -1)),
        Ne("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, SN)
      ]),
      Ne("div", _N, [
        (Le(!0), Ve(Ze, null, Pt(e.model.lanes, (n) => (Le(), Ve("button", {
          key: n.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": n.action,
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, tt(n.label), 9, wN))), 128))
      ])
    ], 8, bN)) : lt("", !0);
  }
}, xN = {
  class: "pano-side",
  "data-side": ""
}, MN = { class: "pano-side-head" }, NN = { class: "pano-side-title" }, PN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, AN = {
  key: 0,
  class: "pano-side-scroll"
}, CN = { class: "pano-inspector" }, IN = { class: "pano-ui-row pano-coverage-row" }, EN = ["data-selected"], ON = ["aria-pressed", "disabled"], FN = ["aria-pressed", "disabled"], TN = {
  key: 0,
  class: "pano-section-title"
}, DN = { class: "meta" }, LN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, RN = {
  class: "pano-picker",
  "data-picker": "selection"
}, VN = ["disabled"], $N = { class: "pano-picker-label" }, zN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, jN = ["hidden"], HN = ["data-selection-id"], GN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, KN = {
  key: 2,
  class: "pano-state-actions"
}, WN = ["disabled"], UN = ["data-key"], BN = { class: "pano-field-group-values" }, YN = ["title", "onPointerdown"], qN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], XN = ["data-key"], JN = ["min", "max", "step", "value", "disabled", "data-param-key"], ZN = ["min", "max", "step", "value", "disabled", "data-param-key"], QN = ["open"], eP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, tP = { class: "pano-ui-settings-body" }, nP = { class: "pano-ui-row" }, rP = ["data-selected"], iP = ["aria-pressed"], oP = ["aria-pressed"], sP = { class: "pano-ui-row" }, aP = ["data-selected"], lP = ["aria-pressed"], cP = ["aria-pressed"], uP = {
  key: 1,
  class: "pano-side-footer"
}, dP = ["data-action"], fP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ut(() => {
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
      const f = c.currentTarget, p = c.clientX, _ = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const h = (B) => {
        if (!g && Math.abs(B.clientX - p) < 3) return;
        g = !0;
        const D = _ + (B.clientX - p) * d.drag * (B.shiftKey ? 0.1 : 1);
        u.value = String(Number(D.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, p, _, g, h;
      return Le(), Ve("div", xN, [
        Ne("div", MN, [
          Ne("div", NN, [
            Ne("span", PN, [
              Ye(jt, {
                icon: rt(We).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Le(), Ve("div", AN, [
          Ne("div", CN, [
            d[9] || (d[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", IN, [
              d[2] || (d[2] = Ne("label", null, "Coverage", -1)),
              Ne("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, ON),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, FN)
              ], 8, EN)
            ]),
            e.model.transformTitle !== !1 ? (Le(), Ve("div", TN, [
              d[3] || (d[3] = Ne("span", null, "Transform", -1)),
              Ne("span", DN, tt(((h = e.model.upstream) == null ? void 0 : h.origin) || ""), 1)
            ])) : lt("", !0),
            e.model.selectionPicker ? (Le(), Ve("div", LN, [
              Ne("label", null, tt(e.model.selectionPicker.label), 1),
              Ne("div", RN, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", $N, [
                    e.model.selectionPicker.currentIcon ? (Le(), Ve("span", zN, [
                      Ye(jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Ne("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, VN),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Le(!0), Ve(Ze, null, Pt(e.model.selectionPicker.items || [], (y) => (Le(), Ve("button", {
                    key: y.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Le(), Ve("span", GN, [
                      Ye(jt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Ne("span", null, tt(y.label), 1)
                  ], 10, HN))), 128))
                ], 8, jN)
              ])
            ])) : lt("", !0),
            e.model.copyStateButton ? (Le(), Ve("div", KN, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(jt, {
                  icon: rt(We).copy
                }, null, 8, ["icon"]),
                Ne("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, WN)
            ])) : lt("", !0),
            Ne("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Le(!0), Ve(Ze, { key: 0 }, Pt(e.model.notes, (y) => (Le(), Ve("div", {
                key: y,
                class: "pano-param-note"
              }, tt(y), 1))), 128)) : (Le(!0), Ve(Ze, { key: 1 }, Pt(e.model.rows || [], (y) => (Le(), Ve(Ze, {
                key: y.key
              }, [
                y.grouped ? (Le(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ne("label", null, tt(y.label), 1),
                  Ne("div", BN, [
                    (Le(!0), Ve(Ze, null, Pt(y.fields, (B) => (Le(), Ve("div", {
                      key: B.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: mt(["pano-axis", { disabled: s(B, e.model) }]),
                        title: B.label,
                        onPointerdown: (D) => l(D, B)
                      }, tt(B.short), 43, YN),
                      Ne("input", {
                        ref_for: !0,
                        ref: (D) => {
                          a[B.key] = D;
                        },
                        type: "number",
                        min: B.min,
                        max: B.max,
                        step: B.step,
                        value: B.displayValue,
                        disabled: s(B, e.model),
                        "aria-label": `${y.label} ${B.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": B.key
                      }, null, 8, qN)
                    ]))), 128))
                  ])
                ], 8, UN)) : (Le(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Ne("label", null, tt(y.label), 1),
                  Ne("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: Ot(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, JN),
                  Ne("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: s(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, ZN)
                ], 8, XN))
              ], 64))), 128))
            ], 2),
            Ye(kN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Ye(yN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => n("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Le(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                d[5] || (d[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", eP, [
                  Ye(jt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", tP, [
                Ne("div", nP, [
                  d[6] || (d[6] = Ne("label", null, "Drag X", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, iP),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, oP)
                  ], 8, rP)
                ]),
                Ne("div", sP, [
                  d[7] || (d[7] = Ne("label", null, "Drag Y", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, lP),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, cP)
                  ], 8, aP)
                ]),
                d[8] || (d[8] = Ne("div", { class: "pano-ui-row" }, [
                  Ne("span"),
                  Ne("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, QN)) : lt("", !0)
          ])
        ])) : lt("", !0),
        (e.model.footerButtons || []).length ? (Le(), Ve("div", uP, [
          (Le(!0), Ve(Ze, null, Pt(e.model.footerButtons, (y) => (Le(), Ve("button", {
            key: y.action,
            class: mt(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, tt(y.label), 11, dP))), 128))
        ])) : lt("", !0)
      ]);
    };
  }
}, pP = { class: "pano-timeline-group" }, hP = ["title"], mP = ["disabled"], gP = ["disabled"], yP = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (Le(), Ve("div", pP, [
      Ne("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, tt(e.group.label), 9, hP),
      Ne("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = Nt((o) => r("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, mP),
      Ne("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = Nt((o) => r("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, tt(e.group.restore.label), 9, gP)
    ]));
  }
}, bP = { class: "pano-timeline-bar" }, vP = ["disabled", "aria-label", "data-tip"], SP = ["aria-label", "data-tip"], _P = { class: "pano-timeline-time" }, wP = ["data-tip"], kP = { key: 0 }, xP = ["min", "max", "value"], MP = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames; empty follows the inputs (Auto)"
}, NP = ["max", "placeholder", "value"], PP = ["aria-expanded"], AP = ["inert"], CP = { class: "pano-timeline-name" }, IP = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], EP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, OP = ["disabled", "aria-expanded", "aria-label", "onClick"], FP = ["title", "aria-current", "onClick"], TP = ["role", "aria-label", "data-tip"], DP = ["disabled", "data-keyed", "aria-label", "onClick"], LP = ["onPointerdown"], RP = ["onPointerdown"], VP = ["onPointerdown"], $P = ["onPointerdown"], zP = ["aria-label", "data-tip", "onPointerdown"], jP = { key: 0 }, HP = ["onPointerdown"], GP = ["aria-label", "data-tip", "onPointerdown"], KP = { key: 0 }, WP = 10, UP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null), s = /* @__PURE__ */ Jt(1), a = /* @__PURE__ */ Jt(0), l = /* @__PURE__ */ Jt(!1);
    let c = null, d = null, u = null;
    Tl(() => {
      c = new ResizeObserver(([ce]) => {
        s.value = Math.max(1, ce.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([ce]) => {
        a.value = ce.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Is(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), p = ut(() => r.playhead.frame.value), _ = ut(() => r.playhead.playing.value), g = ut(() => J1(p.value, Number(r.model.fps || 1))), h = ut(() => s.value / f.value), y = (ce) => `${ce / f.value * 100}%`, B = ut(() => uS(f.value, h.value));
    function D(ce) {
      const O = i.value.getBoundingClientRect(), L = Math.floor((ce - O.left) / Math.max(1, O.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, L));
    }
    function ee(ce, O, L) {
      const M = Math.ceil(WP / Math.max(1e-6, h.value)), de = O.filter((R) => R.frame < f.value), Q = new Map(de.map((R) => [R.frame, R.full]));
      return dS(de.map((R) => R.frame), M).map((R, k) => ({
        ...R,
        key: `${ce}:${k}`,
        partial: R.frames.some((P) => !Q.get(P)),
        selected: R.frames.some((P) => L.includes(P))
      }));
    }
    const C = ut(() => [
      ...(r.model.rows || []).map((ce) => ({ key: ce.id, row: ce })),
      ...(r.model.groups || []).flatMap((ce) => [
        { key: `group:${ce.key}`, group: ce },
        ...ce.rows.map((O) => ({ key: O.id, row: O }))
      ])
    ]), Y = ut(() => {
      const ce = /* @__PURE__ */ new Map();
      for (const { row: O } of C.value)
        if (O) {
          ce.set(O.id, ee(O.id, O.keys, O.selectedFrames));
          for (const L of O.lanes) ce.set(L.key, ee(L.key, L.frames.map((M) => ({ frame: M, full: !0 })), L.selectedFrames));
        }
      return ce;
    });
    function $(ce) {
      const O = ce.end === null ? f.value : Math.min(ce.end, f.value);
      return { left: y(ce.start), width: y(Math.max(0, O - ce.start)) };
    }
    function ne(ce, O) {
      const L = ce.clientX, M = Math.max(1e-6, h.value);
      let de = 0;
      O("start", 0, ce);
      const Q = (k) => {
        if (k.pointerId !== ce.pointerId) return;
        const P = Math.round((k.clientX - L) / M);
        P !== de && (de = P, O("move", de, k));
      }, R = (k) => {
        k.pointerId === ce.pointerId && (u(), O("end", de, k));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), u = null;
      }, window.addEventListener("pointermove", Q), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R);
    }
    function _e(ce) {
      ce.button === 0 && ne(ce, (O, L, M) => n("action", { type: "seek", frame: D(M.clientX), phase: O }));
    }
    function ye(ce, O, L) {
      ce.button === 0 && (n("action", { type: "select-row", id: O.id }), ne(ce, (M, de) => n("action", { type: "clip", id: O.id, mode: L, delta: de, phase: M })));
    }
    function we(ce, O, L, M, de) {
      if (ce.button === 0) {
        if (ce.shiftKey) {
          n("action", { type: "select-keys", owner: O.id, lane: L, frames: M.frames, additive: !0 });
          return;
        }
        M.frames.every((Q) => de.includes(Q)) || n("action", { type: "select-keys", owner: O.id, lane: L, frames: M.frames, additive: !1 }), ne(ce, (Q, R) => n("action", { type: "move-keys", delta: R, phase: Q }));
      }
    }
    const be = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function pe(ce, O, L) {
      n("action", O), await Ol(), ce.target.value = L();
    }
    function ve(ce) {
      pe(ce, { type: "fps", fps: Number(ce.target.value) }, () => be.value);
    }
    const fe = ut(() => `Auto (${f.value})`);
    function ie(ce) {
      const O = ce.target.value.trim();
      pe(ce, { type: "length", length: O ? Number(O) : null }, () => r.model.length ?? "");
    }
    function me(ce, O, L) {
      ce.button !== 0 || ce.target !== ce.currentTarget || n("action", { type: "select-keys", owner: O.id, lane: L, frames: [], additive: !1 });
    }
    return (ce, O) => jr((Le(), Ve("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", bP, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: O[0] || (O[0] = (L) => n("action", { type: "play" }))
        }, [
          Ye(jt, {
            icon: _.value ? rt(We).pause : rt(We).play
          }, null, 8, ["icon"])
        ], 8, vP),
        e.model.hasAudio ? (Le(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: O[1] || (O[1] = (L) => n("action", { type: "mute" }))
        }, [
          Ye(jt, {
            icon: e.model.muted ? rt(We).volume_muted : rt(We).volume2
          }, null, 8, ["icon"])
        ], 8, SP)) : lt("", !0),
        Ne("span", _P, tt(g.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Le(), Ve("span", kP, tt(be.value), 1)) : (Le(), Ve("input", {
            key: 1,
            type: "number",
            min: rt(_m),
            max: rt(pd),
            step: "any",
            value: be.value,
            "aria-label": "Timeline fps",
            onChange: ve
          }, null, 40, xP)),
          O[7] || (O[7] = Ne("span", null, "fps", -1))
        ], 8, wP),
        Ne("label", MP, [
          O[8] || (O[8] = Ne("span", null, "Length", -1)),
          Ne("input", {
            type: "number",
            min: "1",
            max: rt(hd),
            step: "1",
            placeholder: fe.value,
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ie
          }, null, 40, NP)
        ]),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: O[2] || (O[2] = (L) => n("action", { type: "toggle-expanded" }))
        }, [
          O[9] || (O[9] = Ne("span", null, "Timeline", -1)),
          Ye(jt, {
            icon: rt(We).chevron
          }, null, 8, ["icon"])
        ], 8, PP)
      ]),
      Ne("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Ot({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: O[4] || (O[4] = Nt((L) => l.value = !0, ["self"])),
        onTransitionend: O[5] || (O[5] = Nt((L) => l.value = !1, ["self"])),
        onTransitioncancel: O[6] || (O[6] = Nt((L) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          O[10] || (O[10] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: _e
          }, [
            (Le(!0), Ve(Ze, null, Pt(B.value, (L) => (Le(), Ve("span", {
              key: L,
              class: "pano-timeline-tick",
              style: Ot({ left: y(L) })
            }, tt(L), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: Ot({ left: y(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Le(!0), Ve(Ze, null, Pt(C.value, ({ key: L, row: M, group: de }) => (Le(), Ve(Ze, { key: L }, [
            de ? (Le(), Rn(yP, {
              key: 0,
              group: de,
              onAction: O[3] || (O[3] = (Q) => n("action", Q))
            }, null, 8, ["group"])) : lt("", !0),
            M ? (Le(), Ve("div", {
              key: 1,
              class: mt(["pano-timeline-head", { selected: M.selected, "is-hidden": !M.visible }])
            }, [
              Ne("div", CP, [
                M.hideable ? (Le(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": M.visible ? "true" : "false",
                  disabled: !M.editable,
                  "aria-label": `${M.label} visible`,
                  "data-tip": M.editable ? M.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: Nt((Q) => n("action", { type: "toggle-visible", id: M.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: M.visible ? rt(We).eye : rt(We).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, IP)) : (Le(), Ve("span", EP)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !M.keyable,
                  "aria-expanded": M.open ? "true" : "false",
                  "aria-label": M.open ? `Hide ${M.label} parameters` : `Show ${M.label} parameters`,
                  onClick: Nt((Q) => n("action", { type: "toggle-row", id: M.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ], 8, OP),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: M.label,
                  "aria-current": M.selected ? "true" : void 0,
                  onClick: (Q) => n("action", { type: "select-row", id: M.id })
                }, [
                  Ye(jt, {
                    icon: M.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, tt(M.label), 1)
                ], 8, FP),
                M.upstream ? (Le(), Ve("span", {
                  key: 2,
                  class: mt(["pano-timeline-override", { on: M.overridden }]),
                  role: M.overridden ? "img" : void 0,
                  "aria-label": M.overridden ? "Overridden in this node" : void 0,
                  "data-tip": M.overridden ? "Overridden in this node" : null
                }, null, 10, TP)) : lt("", !0),
                M.keyable ? (Le(), Ve("button", {
                  key: 3,
                  class: mt(["pano-timeline-key", { keyed: rt(Nc)(M.keys, p.value) }]),
                  type: "button",
                  disabled: !M.editable,
                  "data-keyed": rt(Nc)(M.keys, p.value) ? "true" : "false",
                  "aria-label": rt(Nc)(M.keys, p.value) ? `Every ${M.label} parameter has a keyframe here; update them` : `Add keyframes for every ${M.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Nt((Q) => n("action", { type: "key-row", owner: M.id }), ["stop"])
                }, [
                  Ye(jt, {
                    icon: rt(We).keyframe
                  }, null, 8, ["icon"])
                ], 10, DP)) : lt("", !0)
              ]),
              M.open ? (Le(!0), Ve(Ze, { key: 0 }, Pt(M.lanes, (Q) => (Le(), Ve("div", {
                key: Q.key,
                class: "pano-timeline-lane-head"
              }, tt(Q.label), 1))), 128)) : lt("", !0)
            ], 2)) : lt("", !0),
            M ? (Le(), Ve("div", {
              key: 2,
              class: mt(["pano-timeline-track", { selected: M.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (Q) => me(Q, M, null)
              }, [
                M.clip && M.clip.start < f.value ? (Le(), Ve("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: M.clip.end === null }]),
                  style: Ot($(M.clip)),
                  onPointerdown: Nt((Q) => ye(Q, M, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Nt((Q) => ye(Q, M, "start"), ["stop"])
                  }, null, 40, VP),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Nt((Q) => ye(Q, M, "end"), ["stop"])
                  }, null, 40, $P)
                ], 46, RP)) : lt("", !0),
                (Le(!0), Ve(Ze, null, Pt(Y.value.get(M.id), (Q) => (Le(), Ve("button", {
                  key: Q.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: Q.selected, cluster: Q.frames.length > 1, partial: Q.partial }]),
                  style: Ot({ left: y(Q.frame + 0.5) }),
                  "aria-label": `${M.label}: ${Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `keyframe at frame ${Q.frames[0]}`}`,
                  "data-tip": Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `Frame ${Q.frames[0]}`,
                  onPointerdown: Nt((R) => we(R, M, null, Q, M.selectedFrames), ["stop"])
                }, [
                  Q.frames.length > 1 ? (Le(), Ve("span", jP, tt(Q.frames.length), 1)) : lt("", !0)
                ], 46, zP))), 128))
              ], 40, LP),
              M.open ? (Le(!0), Ve(Ze, { key: 0 }, Pt(M.lanes, (Q) => (Le(), Ve("div", {
                key: Q.key,
                class: "pano-timeline-lane",
                onPointerdown: (R) => me(R, M, Q.lane)
              }, [
                (Le(!0), Ve(Ze, null, Pt(Y.value.get(Q.key), (R) => (Le(), Ve("button", {
                  key: R.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: R.selected, cluster: R.frames.length > 1 }]),
                  style: Ot({ left: y(R.frame + 0.5) }),
                  "aria-label": `${Q.label}: ${R.frames.length > 1 ? `${R.frames.length} keyframes` : `keyframe at frame ${R.frames[0]}`}`,
                  "data-tip": R.frames.length > 1 ? `${R.frames.length} keyframes` : `Frame ${R.frames[0]}`,
                  onPointerdown: Nt((k) => we(k, M, Q.lane, R, Q.selectedFrames), ["stop"])
                }, [
                  R.frames.length > 1 ? (Le(), Ve("span", KP, tt(R.frames.length), 1)) : lt("", !0)
                ], 46, GP))), 128))
              ], 40, HP))), 128)) : lt("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: Ot({ left: y(p.value + 0.5) })
              }, null, 4)
            ], 2)) : lt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, AP)
    ], 2)), [
      [Li, e.model.visible]
    ]);
  }
}, BP = {
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
      style: Ot({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, YP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, qP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Le(), Ve("div", YP, [
      (Le(!0), Ve(Ze, null, Pt(e.buttons, (n) => jr((Le(), Rn(tn, {
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
        [Li, n.visible !== !1]
      ])), 128))
    ]));
  }
}, XP = ["data-video-ready"], JP = { class: "pano-video-transport-shell" }, ZP = { class: "pano-video-controls-left" }, QP = { class: "pano-video-filmstrip" }, e2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, t2 = ["src", "onLoad"], n2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, r2 = ["max", "value", "disabled"], i2 = { class: "pano-video-controls-right" }, o2 = ["data-has-audio"], s2 = { class: "pano-video-volume-pop" }, a2 = ["value", "disabled"], l2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? We.pause : We.play;
    }), o = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = ut(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? We.loop_off : We.loop;
    }), l = ut(() => {
      var C, Y;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var C, Y, $;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? We.volume : ((Y = t.state) == null ? void 0 : Y.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? We.volume_muted : We.volume2;
    }), d = ut(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var ne, _e;
      const C = (ne = t.state) == null ? void 0 : ne.volumePct, Y = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, $ = Number(C ?? Y ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, $))}%`
      };
    }), p = ut(() => {
      var $, ne;
      const Y = [
        String((($ = t.state) == null ? void 0 : $.currentTimeLabel) || "0:00"),
        String(((ne = t.state) == null ? void 0 : ne.durationLabel) || "0:00")
      ].reduce((_e, ye) => Math.max(_e, ye.length), 4);
      return `${Math.max(4, Y)}ch`;
    }), _ = ut(() => ({ "--pano-video-time-ch": p.value })), g = ut(() => {
      var $, ne;
      const C = Array.isArray(($ = t.state) == null ? void 0 : $.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const Y = Math.max(7, Number(((ne = t.state) == null ? void 0 : ne.thumbnailCount) || 9));
      return Array.from({ length: Y }, (_e, ye) => ({
        id: `placeholder-${ye}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), y = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), B = (C) => h.value.has(y(C)), D = (C) => {
      const Y = new Set(h.value);
      Y.add(y(C)), h.value = Y;
    };
    Ei(g, (C) => {
      const Y = new Set(C.map(y)), $ = /* @__PURE__ */ new Set();
      for (const ne of h.value)
        Y.has(ne) && $.add(ne);
      h.value = $;
    }, { immediate: !0 });
    const ee = ut(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, Y) => (Le(), Ve("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ot(ee.value)
    }, [
      Y[1] || (Y[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y[2] || (Y[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", JP, [
        Ne("div", ZP, [
          Ye(tn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-time pano-video-time-start",
            style: Ot(_.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", QP, [
          Ne("div", e2, [
            (Le(!0), Ve(Ze, null, Pt(g.value, ($) => (Le(), Ve("div", {
              key: y($),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !$.src,
                "is-loaded": $.src && B($)
              }])
            }, [
              $.src ? (Le(), Ve("img", {
                key: 0,
                src: $.src,
                alt: "",
                draggable: "false",
                onLoad: (ne) => D($)
              }, null, 40, t2)) : (Le(), Ve("span", n2))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: Ot(u.value),
            "aria-hidden": "true"
          }, [...Y[0] || (Y[0] = [
            Ne("span", { class: "pano-video-playhead-line" }, null, -1),
            Ne("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Ne("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, r2)
        ]),
        Ne("div", i2, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ot(_.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Ye(tn, {
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
          Ne("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Ne("div", s2, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ot(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, a2)
            ]),
            Ye(tn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, o2)
        ])
      ])
    ], 14, XP));
  }
}, c2 = { class: "pano-floating-top" }, u2 = ["data-selected", "data-view-count"], d2 = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], f2 = { class: "label" }, p2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Le(), Ve("div", c2, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Le(!0), Ve(Ze, null, Pt(e.buttons, (i) => jr((Le(), Ve("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ye(jt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", f2, tt(i.label), 1)
          ], 10, d2)), [
            [Li, i.visible !== !1]
          ])), 128))
        ], 8, u2)
      ]);
    };
  }
};
function C0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: We.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: We.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: We.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: We.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: We.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: We.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: We.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: We.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: We.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: We.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: We.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: We.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: We.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: We.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: We.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: We.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: We.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: We.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: We.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: We.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: We.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: We.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: We.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: We.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: We.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: We.lasso_tool }
        ]
      }
    ]
  };
}
const h2 = ["aria-label"], m2 = { class: "pano-stage-column" }, g2 = { class: "pano-stage-wrap" }, y2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, b2 = {
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
      var we, be;
      return ((be = (we = d.value) == null ? void 0 : we.getRefs) == null ? void 0 : be.call(we)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(we) {
      var be, pe;
      return ((pe = (be = c.value) == null ? void 0 : be.open) == null ? void 0 : pe.call(be, we)) === !0;
    }
    function p(we) {
      i("image-file-selected", we);
    }
    function _(we) {
      i("image-file-cancelled", we);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = ut(() => n.readOnly === !0), h = ut(() => n.shellPreset || C0(n.type)), y = ut(() => {
      var be, pe, ve;
      const we = String((((be = n.uiState) == null ? void 0 : be.stageStatus) === "failed" ? (pe = n.uiState) == null ? void 0 : pe.stageStatusDetail : (ve = n.uiState) == null ? void 0 : ve.stageWarningDetail) ?? "");
      return we === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : we === "stickers" ? "One or more sticker previews are unavailable." : we === "frame" ? "The editor hit a rendering error. Check the browser console for details." : we === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : we.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), B = ut(() => {
      var we, be, pe;
      return ((we = n.uiState) == null ? void 0 : we.stageStatus) === "failed" || (be = n.uiState) != null && be.stageWarningDetail ? y.value : (pe = n.uiState) == null ? void 0 : pe.stageNotice;
    }), D = ut(() => {
      var be;
      const we = Array.isArray((be = h.value) == null ? void 0 : be.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return g.value && we.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: We.fullscreen
      }), we;
    });
    function ee() {
      const we = l.value;
      return we ? Array.from(we.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((be) => be instanceof HTMLElement ? !be.hidden && be.tabIndex >= 0 && be.offsetParent !== null : !1) : [];
    }
    function C() {
      var pe;
      const be = ee()[0] || l.value;
      (pe = be == null ? void 0 : be.focus) == null || pe.call(be);
    }
    function Y() {
      var we;
      a != null && a.isConnected && ((we = a.focus) == null || we.call(a)), a = null;
    }
    function $(we) {
      var be, pe, ve, fe;
      if (!we.defaultPrevented) {
        if (we.key === "Tab") {
          const ie = ee();
          if (!ie.length) {
            we.preventDefault(), (pe = (be = l.value) == null ? void 0 : be.focus) == null || pe.call(be);
            return;
          }
          const me = ie[0], ce = ie[ie.length - 1], O = document.activeElement;
          if (we.shiftKey) {
            (O === me || O === l.value || !((ve = l.value) != null && ve.contains(O))) && (we.preventDefault(), ce.focus());
            return;
          }
          (O === ce || !((fe = l.value) != null && fe.contains(O))) && (we.preventDefault(), me.focus());
          return;
        }
        we.key === "Escape" && i("close");
      }
    }
    function ne() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function _e() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function ye(we) {
      document.removeEventListener("keydown", $), we ? (a || (a = document.activeElement), ne(), document.addEventListener("keydown", $), Ol(() => {
        C();
      })) : (_e(), Y());
    }
    return Tl(() => {
      ye(n.open);
    }), Is(() => {
      _e(), document.removeEventListener("keydown", $), Y();
    }), Ei(() => n.open, (we) => {
      ye(we);
    }), (we, be) => e.open ? (Le(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: be[2] || (be[2] = Nt((pe) => i("close"), ["self"]))
    }, [
      Ne("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Ne("div", m2, [
          Ne("div", g2, [
            be[3] || (be[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            be[4] || (be[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            be[5] || (be[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Le(), Ve("div", y2, tt(B.value), 1)) : lt("", !0),
            be[6] || (be[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ye(YM, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ye(s0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: p,
              onFileCancelled: _
            }, null, 512),
            g.value ? lt("", !0) : (Le(), Ve(Ze, { key: 1 }, [
              Ye(qP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ye(bM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ye(BM, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ye(l2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ye(p2, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ye(pM, {
              buttons: e.uiState.floatingButtons || D.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ye(nN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ye(BP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ye(xM, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ye(UP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: be[0] || (be[0] = (pe) => i("timeline", pe))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? lt("", !0) : (Le(), Rn(fP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: be[1] || (be[1] = (pe) => i("timeline", pe))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, h2)
    ])) : lt("", !0);
  }
}, ar = "loading", Ps = "ready", Jn = "failed";
function I0(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function E0(e, t = "") {
  return e && (e.__panoLoadState = Ps, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function O0(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Fu(e, t) {
  return e ? e.__panoLoadState === Jn ? Jn : typeof t == "function" && t(e) ? Ps : ar : Ps;
}
function Tu(e) {
  return Fu(e) === Jn;
}
function v2({ presented: e, background: t = Ps, stickers: r = [] } = {}) {
  if (!e) return { status: ar, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === ar, o = n.includes(ar);
  if (i && o) return { status: ar, detail: "mixed" };
  if (i) return { status: ar, detail: "background" };
  if (o) return { status: ar, detail: "stickers" };
  const s = t === Jn, a = n.includes(Jn);
  return s && a ? { status: Jn, detail: "mixed" } : s ? { status: Jn, detail: "background" } : a ? { status: Jn, detail: "stickers" } : { status: Ps, detail: "" };
}
const S2 = "state_json", _2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Qd = "sticker_image_1", w2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), F0 = 0.01, k2 = "external_image", Di = "pano_sticker_input_images", T0 = "pano_sticker_input_videos", D0 = "pano_sticker_input_frames", L0 = "pano_sticker_input_video_meta", x2 = !0, Jl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Nr = Math.PI / 180, Vi = 180 / Math.PI, Du = 1, R0 = "rgb(255, 221, 87)", M2 = "rgb(228, 228, 231)", N2 = "rgb(180, 150, 60)", P2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, A2 = 64, Vp = 40, $c = 16, C2 = 0.45, $p = 180, I2 = 160, wl = 24, E2 = 4, O2 = 4;
function zc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function F2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function T2(e, t, r) {
  const n = Oe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function D2(e) {
  return e * e * e;
}
function Zl(e, t, r) {
  return { x: e, y: t, z: r };
}
function zp(e, t) {
  return Zl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function jp(e, t) {
  return Zl(e.x * t, e.y * t, e.z * t);
}
function jc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function L2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Zl(e.x / t, e.y / t, e.z / t);
}
function ma(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * Vi),
    pitch: Oe(Math.asin(Oe(e.y, -1, 1)) * Vi, -90, 90)
  };
}
function ei(e, t) {
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
function Hc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return qo(e, t);
  const l = Oe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Xn(e, t, r) {
  return e + (t - e) * r;
}
function Sr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Oe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Oe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Oe(r, 0, 1)})`;
}
function R2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ga = { fillStyle: "", url: "" };
function V2(e, t, r) {
  if (ga.url && ga.fillStyle === String(e || ""))
    return ga.url;
  const n = R2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${wl}" height="${wl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ga = { fillStyle: String(e || ""), url: n }, n;
}
function kl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Hn(e) {
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
function $2(e) {
  return Jl.some((t) => kl(e, t.color));
}
function Lu(e, t, r) {
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
function Ru(e) {
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
function z2(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Hp(e) {
  const { paintCount: t, maskCount: r } = z2(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function V0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, p = Number(s.rot_deg || 0) * Nr, _ = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(p), e.scale(_, _), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function io(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ya(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function j2(e, t) {
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
function H2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function G2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function K2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const $0 = "pano_suite.ui_settings.v1", z0 = "pano_suite.node_grid_visibility.v1";
let to = null, gr = null;
function Va(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function W2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($0)) || "").trim();
    if (!t) return to ? Va(to) : null;
    const r = JSON.parse(t), n = Va(r);
    return to = n, n;
  } catch {
    return to ? Va(to) : null;
  }
}
function U2(e) {
  var r;
  const t = Va(e);
  to = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem($0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function j0() {
  var e;
  if (gr && typeof gr == "object")
    return gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(z0)) || "").trim();
    if (!t)
      return gr = {}, gr;
    const r = JSON.parse(t);
    return gr = r && typeof r == "object" ? r : {}, gr;
  } catch {
    return gr = {}, gr;
  }
}
function B2(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = j0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function Y2(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = j0();
  n[r] = !!t, gr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(z0, JSON.stringify(n));
  } catch {
  }
}
function q2(e, t) {
  const r = { ...e }, n = t.map((i) => i(Gc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Gc(r, t[o].name))), Gc(r, "showEditor");
}
function Gc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const ii = /* @__PURE__ */ new Map(), X2 = 12;
function J2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ii.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ii.delete(t), ii.set(t, r), r);
}
function Z2(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ii.delete(r), ii.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ii.size > X2; ) {
      const i = ii.keys().next().value;
      if (!i) break;
      ii.delete(i);
    }
}
function Q2(e) {
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
    runtime: _,
    scheduler: g,
    stageWrap: h,
    state: y,
    stateV2: B,
    stillCanvas: D,
    studio: ee,
    timelinePlayhead: C,
    type: Y,
    uiState: $,
    videoEl: ne
  } = e;
  let _e, ye, we, be, pe, ve;
  const fe = {
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
  }, ie = 9, me = [];
  let ce = 0;
  const O = () => {
    var ze, oe;
    const F = (ze = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : ze.call(h), W = (oe = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : oe.call(i), Se = Math.max(0, Number((F == null ? void 0 : F.width) || 0)), Me = W ? Math.max(0, Number(W.width || 0)) : 0, je = Me > 0 ? Me + 14 + 12 : 72, Ke = Math.max(280, Math.floor(Se - je * 2)), Ce = r.fullscreen ? Math.min(1200, Ke) : Ke;
    $.videoTransport.shellMaxWidthPx = Ce;
  }, L = () => {
    ce || (ce = g.requestFrame(() => {
      ce = 0, O();
    }));
  }, M = (F) => {
    if (!(F instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(F.audioTracks) && F.audioTracks.length > 0 || F.audioTracks && typeof F.audioTracks.length == "number" && F.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof F.mozHasAudio == "boolean") return F.mozHasAudio;
    } catch {
    }
    try {
      if (Number(F.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!$.videoTransport.hasAudio;
  }, de = typeof ResizeObserver < "u" ? new ResizeObserver(() => L()) : null;
  de == null || de.observe(h), i && (de == null || de.observe(i)), me.push(() => {
    var F;
    ce && (g.cancelFrame(ce), ce = 0), (F = de == null ? void 0 : de.disconnect) == null || F.call(de);
  }), L();
  const Q = () => {
    fe.thumbnailJobId += 1, fe.thumbnailSrc = "", $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ie;
  }, R = async (F, W, Se) => {
    const Me = String(F || "").trim();
    if (!Me) {
      Q();
      return;
    }
    const Ee = J2(Me);
    if (Ee) {
      fe.thumbnailSrc = Me, $.videoTransport.thumbnails = Ee.thumbnails, $.videoTransport.thumbnailCount = Ee.thumbnailCount;
      return;
    }
    const Re = ++fe.thumbnailJobId;
    fe.thumbnailSrc = Me, $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ie;
    const je = Os(document, "editor.thumbnails");
    je.preload = "auto", je.muted = !0, je.playsInline = !0, je.crossOrigin = "anonymous";
    const Ke = on({ label: "editor.thumbnail" });
    try {
      const Ce = await new Promise((ft) => {
        let vt = !1;
        const kt = (bt) => {
          vt || (vt = !0, ft(bt));
        };
        je.addEventListener("loadedmetadata", () => kt(!0), { once: !0 }), je.addEventListener("canplay", () => kt(!0), { once: !0 }), je.addEventListener("error", () => kt(!1), { once: !0 }), je.src = Me, je.load();
      });
      if (fe.thumbnailJobId !== Re) return;
      const ze = Number(je.videoWidth || 0), oe = Number(je.videoHeight || 0);
      if (!Ce || ze < 1 || oe < 1) {
        fe.thumbnailFailedSrcs.add(Me);
        return;
      }
      const Ie = Math.max(0, Number(je.duration || W || 0)), Ae = 46, Fe = Math.max(72, Math.round(ze / oe * Ae));
      Ke.width = Fe, Ke.height = Ae;
      const He = Ke.getContext("2d");
      if (!He) return;
      const Ge = [], Ue = (ft) => new Promise((vt) => {
        let kt = !1;
        const bt = () => {
          kt || (kt = !0, vt());
        };
        je.addEventListener("seeked", bt, { once: !0 }), je.addEventListener("error", bt, { once: !0 });
        try {
          je.currentTime = ft;
        } catch {
          bt();
        }
      });
      for (let ft = 0; ft < ie; ft += 1) {
        if (fe.thumbnailJobId !== Re) return;
        const vt = ie <= 1 ? 0 : ft / (ie - 1), kt = Ie > 0 ? Math.max(0, Math.min(Ie - Math.max(1e-3, 0.5 / Math.max(1, Number(Se || 24))), Ie * vt)) : 0;
        if (await Ue(kt), fe.thumbnailJobId !== Re) return;
        He.clearRect(0, 0, Fe, Ae), He.drawImage(je, 0, 0, Fe, Ae), Ge.push({
          id: `thumb-${ft}`,
          src: Ke.toDataURL("image/jpeg", 0.72),
          time: kt,
          label: S(kt)
        });
      }
      if (fe.thumbnailJobId !== Re) return;
      $.videoTransport.thumbnails = Ge, $.videoTransport.thumbnailCount = Ge.length || ie, Z2(Me, {
        thumbnails: Ge,
        thumbnailCount: Ge.length || ie,
        duration: Ie,
        fps: Se
      });
    } finally {
      je.removeAttribute("src"), je.load(), hs(Ke);
    }
  };
  me.push(() => {
    Q();
  });
  const k = zg({
    video: ne instanceof HTMLVideoElement ? ne : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (F) => g.requestFrame(F),
      cancelFrame: (F) => g.cancelFrame(F)
    },
    fps: V,
    span: () => {
      if (B) return ve();
      const F = Math.round(Number($.videoTransport.duration || 0) * V());
      return ne.loop || !(F > 0) ? 1 / 0 : F;
    },
    loop: () => B,
    onFrame: (F) => {
      B ? we(F) : w(), ye({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    },
    onCapture: () => {
      E() && (_.backgroundDirty = !0);
    },
    onChange: () => {
      w(), C.playing.value = k.playing, pe(), ye({ cause: "frame_view", localOnly: !0, reason: pt.PLAYHEAD });
    }
  });
  me.push(() => k.dispose());
  const P = B && f instanceof HTMLVideoElement ? $d({
    video: f,
    onCapture: () => {
      var Se;
      const F = Number(f.videoWidth || 0), W = Number(f.videoHeight || 0);
      F < 1 || W < 1 || (u.width = F, u.height = W, (Se = u.getContext("2d")) == null || Se.drawImage(f, 0, 0), u.__panoFrameIdx += 1, ye({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA }));
    },
    onChange: () => ye({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  P && me.push(() => P.dispose());
  const le = B ? _d({
    createImage: (F, W) => {
      const Se = new Image();
      return Se.onload = W, Se.onerror = W, Se.src = F, Se;
    },
    onLoad: () => ye({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA })
  }) : null;
  if (ne instanceof HTMLVideoElement) {
    const F = () => {
      A(), ye({ cause: "frame_view", localOnly: !0 });
    }, W = () => {
      w({
        hasAudio: $.videoTransport.hasAudio,
        muted: ne.muted,
        volume: Number(ne.volume ?? $.videoTransport.volume ?? 1)
      });
    }, Se = () => {
      const Me = ne.dataset.panoSrc;
      Me && (fe.failedSrcs.add(Me), A(), ye());
    };
    for (const [Me, Ee] of [
      ["loadedmetadata", F],
      ["loadeddata", F],
      ["canplay", F],
      ["volumechange", W],
      ["error", Se]
    ])
      ne.addEventListener(Me, Ee), me.push(() => ne.removeEventListener(Me, Ee));
  }
  function q(F) {
    return t.uiList(d, F);
  }
  function I(F) {
    return t.uiValue(d, F);
  }
  function v() {
    const F = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ja(F))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const W = H();
    return W ? { videoKey: W.videoKey, metaKey: W.metaKey } : Y === "stickers" || Y === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function K() {
    const { metaKey: F } = v(), W = I(F);
    return Array.isArray(W) && W.length > 0 && W[0] && typeof W[0] == "object" ? W[0] : W && typeof W == "object" ? W : null;
  }
  function m(F) {
    return F ? F instanceof HTMLVideoElement ? [
      String(F.currentSrc || F.src || ""),
      Number(F.videoWidth || 0),
      Number(F.videoHeight || 0)
    ].join("|") : F instanceof HTMLCanvasElement ? [
      "canvas",
      Number(F.width || 0),
      Number(F.height || 0),
      String(F.__panoFrameIdx || 0)
    ].join("|") : [
      String(F.currentSrc || F.src || ""),
      Number(F.naturalWidth || F.width || 0),
      Number(F.naturalHeight || F.height || 0)
    ].join("|") : "none";
  }
  function S(F) {
    const W = Math.max(0, Math.floor(Number(F || 0))), Se = Math.floor(W / 60), Me = W % 60;
    return `${Se}:${String(Me).padStart(2, "0")}`;
  }
  function V() {
    return B ? y.timeline.fps : fe.metaFps || 1e3;
  }
  function w(F = {}) {
    const W = Number(F.duration ?? $.videoTransport.duration ?? 0), Se = Math.max(1, Number(F.fps ?? $.videoTransport.fps ?? 24)), Me = k.frame / V(), Ee = Object.prototype.hasOwnProperty.call(F, "ready") ? !!F.ready : !!$.videoTransport.ready, Re = k.playing, je = Object.prototype.hasOwnProperty.call(F, "visible") ? !!F.visible : !!$.videoTransport.visible, Ke = Object.prototype.hasOwnProperty.call(F, "muted") ? !!F.muted : !!(ne instanceof HTMLVideoElement ? ne.muted : $.videoTransport.muted), Ce = Number(
      Object.prototype.hasOwnProperty.call(F, "volume") ? F.volume : ne instanceof HTMLVideoElement ? ne.volume : $.videoTransport.volume
    ), ze = Object.prototype.hasOwnProperty.call(F, "hasAudio") ? !!F.hasAudio : M(ne), oe = Object.prototype.hasOwnProperty.call(F, "loop") ? !!F.loop : !!$.videoTransport.loop;
    Object.assign($.videoTransport, {
      ready: Ee,
      playing: Re,
      visible: je,
      loop: oe,
      currentTime: Number.isFinite(Me) ? Me : 0,
      duration: Number.isFinite(W) ? W : 0,
      progressPct: W > 1e-6 ? Math.max(0, Math.min(100, Me / W * 100)) : 0,
      currentTimeLabel: S(Me),
      durationLabel: S(W),
      frameCount: Math.max(0, Number(F.frameCount ?? $.videoTransport.frameCount ?? 0)),
      fps: Se,
      hasAudio: ze,
      muted: Ke,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ce) ? Ce : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ce) ? Ce : 1)) * 100),
      thumbnails: Array.isArray(F.thumbnails) ? F.thumbnails : $.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(F.thumbnailCount ?? $.videoTransport.thumbnailCount ?? ie))
    });
  }
  function T() {
    return !!(ne instanceof HTMLVideoElement && !B && ne.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function z() {
    if (!(ne instanceof HTMLVideoElement) || !$.videoTransport.hasAudio) return;
    const F = !ne.muted;
    ne.muted = F, !F && Number(ne.volume || 0) <= 0 && (ne.volume = Math.max(0.01, Number($.videoTransport.volume || 1))), w({
      hasAudio: $.videoTransport.hasAudio,
      muted: ne.muted,
      volume: Number(ne.volume ?? $.videoTransport.volume ?? 1)
    });
  }
  function Z() {
    w({
      visible: T()
    });
  }
  function E() {
    if (!(ne instanceof HTMLVideoElement) || Number(ne.videoWidth || 0) < 1 || Number(ne.videoHeight || 0) < 1) return !1;
    const F = Number(ne.videoWidth || 0), W = Number(ne.videoHeight || 0);
    (D.width !== F || D.height !== W) && (D.width = F, D.height = W);
    const Se = D.getContext("2d");
    return Se ? (Se.clearRect(0, 0, F, W), Se.drawImage(ne, 0, 0, F, W), D.__panoFrameIdx = Number(D.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !k.showsVideo && Number(D.width || 0) > 0 && Number(D.height || 0) > 0 && Number(D.__panoFrameIdx || 0) > 0 ? D : ne instanceof HTMLVideoElement && Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 ? ne : null;
  }
  function b() {
    D.__panoFrameIdx = 0, _.backgroundDirty = !0;
  }
  function A() {
    if (!(ne instanceof HTMLVideoElement)) return null;
    const { videoKey: F } = v(), W = (H() || Lt(d, "background")) && q(F)[0] || null, Se = l(W), Me = [Se, t.linkedVideoFile(d, U())].filter(Boolean), Ee = Me.find((Ie) => !fe.failedSrcs.has(Ie)) || "";
    fe.videoFailed = !Ee && Me.length > 0;
    const Re = Ee && Ee === Se ? K() : null;
    fe.metaFps = Number(Re == null ? void 0 : Re.fps) > 0 ? Number(Re.fps) : 0;
    const je = Math.max(1, Number((Re == null ? void 0 : Re.fps) || (B ? y.timeline.fps : 24))), Ke = ne.dataset.panoSrc === Ee && Number.isFinite(ne.duration) ? ne.duration : 0, Ce = Number((Re == null ? void 0 : Re.duration) || ((Re == null ? void 0 : Re.frames) > 0 ? Re.frames / je : Ke)), ze = Math.max(0, Number((Re == null ? void 0 : Re.frames) || Math.round(Ce * je))), oe = !!(Re != null && Re.has_audio) || M(ne);
    return Ee && ne.dataset.panoSrc !== Ee ? (ne.pause(), b(), ne.dataset.panoSrc = Ee, ne.loop = !B && !!$.videoTransport.loop, ne.muted = !!$.videoTransport.muted, ne.volume = Math.max(0, Math.min(1, Number($.videoTransport.volume ?? 1))), ne.src = Ee, ne.load(), k.setSource(!0), B || k.seek(0)) : !Ee && ne.getAttribute("src") && (ne.pause(), ne.removeAttribute("src"), delete ne.dataset.panoSrc, ne.load(), b(), Q(), k.setSource(!1)), B || (ne.loop = !!$.videoTransport.loop), Ee && !B && fe.thumbnailSrc !== Ee && !fe.thumbnailFailedSrcs.has(Ee) && R(Ee, Ce, je), Ee || Q(), w({
      ready: !!Ee,
      visible: !!Ee && T(),
      duration: Ce,
      frameCount: ze,
      fps: je,
      hasAudio: oe,
      loop: !!ne.loop,
      muted: !!ne.muted,
      volume: Number(ne.volume ?? $.videoTransport.volume ?? 1),
      thumbnailCount: $.videoTransport.thumbnailCount
    }), Ee || null;
  }
  function X(F, W = null) {
    return c(d, F, o, W || (() => ye()));
  }
  function ge(F = null) {
    return Lt(d, "external-sticker") ? X(Di, F) : null;
  }
  function he() {
    if (!Lt(d, "external-sticker")) return null;
    const F = q(L0)[0];
    if (!F || typeof F != "object") return null;
    const W = q(D0).map(l).filter(Boolean);
    if (W.length) return { frames: W, meta: F };
    const Se = l(q(T0)[0] || null);
    return Se ? { src: Se, meta: F } : null;
  }
  function xe() {
    return Lt(d, "external-sticker") ? Ss(q) : null;
  }
  function se() {
    const F = y.stickers.find(_e), W = F ? he() : null, Se = W ? bd(F.clip, r.frame, y.timeline.fps, W.meta) : null;
    P.follow({ src: (W == null ? void 0 : W.src) || "", time: Se, playing: k.advancing, fps: y.timeline.fps });
    const Me = F ? ae(F) : null, Ee = W != null && W.frames ? le.picture(W.frames, Se, W.meta, Me) : P.picture(u, Me);
    return Ee ? { media: Ee, revision: m(Ee), source: Sd(W, Me) } : null;
  }
  function ke() {
    return !B || !Lt(d, "scene") ? null : al(q("pano_scene_files"), q("pano_scene_meta"), l);
  }
  function j() {
    return !B || !Lt(d, "external-sticker") ? null : al(q("pano_sticker_files"), q("pano_sticker_meta"), l);
  }
  function ae(F) {
    var je;
    if (F && typeof F == "object" && (_e(F) || F.external === !0))
      return ge(() => {
        oi(d, "image-loaded");
      });
    const W = B ? G(F) : String(F && typeof F == "object" ? F.asset_id || F.assetId || "" : F || "");
    if (!W) return null;
    const Se = o.get(W);
    if (Se) return Se;
    const Me = B ? sl(F.source) : (je = y.assets) == null ? void 0 : je[W], Ee = a(Me);
    if (!Ee) return null;
    const Re = new Image();
    return I0(Re, Ee), Re.onload = () => {
      E0(Re, Ee), ye();
    }, Re.onerror = () => {
      O0(Re, Ee), ye();
    }, Re.src = Ee, o.set(W, Re), Re;
  }
  function G(F) {
    const { source: W } = F;
    return W.filename ? `file:${W.storage}:${W.subfolder}:${W.filename}` : `sticker:${F.id}`;
  }
  function te() {
    if (Y === "cutout") {
      const Re = N();
      if (Re) return Re;
      const je = s(
        d,
        ["erp_image", "bg_erp"],
        () => ye(),
        "background:cutout:erp_image|bg_erp"
      );
      return je && !Tu(je) ? je : c(d, "pano_input_images", o, () => ye()) || je || null;
    }
    const F = N();
    if (F) return F;
    const W = H(), Se = W || Lt(d, "background") ? c(d, (W == null ? void 0 : W.imageKey) ?? "pano_input_images", o, () => ye()) : null;
    if (Se && !Tu(Se)) return Se;
    if (ne instanceof HTMLVideoElement && ne.dataset.panoSrc) return ne;
    if (W) return Se;
    const Me = U();
    return s(d, Me, () => ye(), `background:${Me.join("|")}`) || Se || null;
  }
  function H() {
    return !ee || !Lt(d, "scene") ? null : Gg(q);
  }
  function J() {
    var F;
    return ((F = H()) == null ? void 0 : F.coverage) ?? $n(y.coverage);
  }
  function U() {
    if (H()) return [];
    if (Y === "cutout") return ["erp_image", "bg_erp"];
    const F = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Me) => String((Me == null ? void 0 : Me.name) || "")) : [], W = F.includes("erp_image"), Se = F.includes("bg_erp");
    return p && (W || Se) ? W ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Y === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function x(F) {
    return F ? F instanceof HTMLImageElement ? !!F.complete && Number(F.naturalWidth || F.width || 0) > 0 && Number(F.naturalHeight || F.height || 0) > 0 : F instanceof HTMLVideoElement ? Number(F.videoWidth || 0) > 0 && Number(F.videoHeight || 0) > 0 && Number(F.readyState || 0) >= 2 : Number(F.width || F.naturalWidth || 0) > 0 && Number(F.height || F.naturalHeight || 0) > 0 : !1;
  }
  function re() {
    if (n.failed) return { status: Jn, detail: "renderer" };
    if (!n.ready) return { status: ar, detail: "boot" };
    const F = te(), W = fe.videoFailed ? Jn : Fu(F, x), Se = [];
    for (const Me of be()) {
      if ((Me == null ? void 0 : Me.visible) === !1) continue;
      const Ee = ae(Me);
      Se.push(Fu(Ee, x));
    }
    return v2({
      presented: _.hasPresentedFrame,
      background: W,
      stickers: Se
    });
  }
  function ue() {
    ne instanceof HTMLVideoElement && ne.pause(), me.forEach((F) => {
      try {
        F();
      } catch {
      }
    });
  }
  return {
    connect(F) {
      ({
        isExternalSticker: _e,
        requestDraw: ye,
        setTimelineFrame: we,
        skyStickers: be,
        syncTimeline: pe,
        timelineSpanFrames: ve
      } = F);
    },
    videoState: fe,
    queueVideoTransportLayout: L,
    playback: k,
    portVideo: P,
    getNodeUiValue: I,
    getMediaRevisionToken: m,
    playbackFps: V,
    syncVideoTransportState: w,
    toggleVideoMuted: z,
    syncVideoTransportVisibility: Z,
    refreshModalVideoSource: A,
    getStickerUiImage: X,
    getExternalStickerPreviewImage: ge,
    getPortMediaMeta: xe,
    followPortSticker: se,
    getStickerImage: ae,
    stickerImageKey: G,
    getConnectedErpImage: te,
    backgroundCoverage: J,
    upstreamBackground: H,
    isDecodedImageReady: x,
    getStageImageStatus: re,
    sceneFiles: ke,
    stickerFiles: j,
    disposeMediaSession: ue
  };
}
function eA(e = 80, t = null, r = 8) {
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
const tA = 80;
function H0(e) {
  return JSON.stringify(yS(e));
}
function nA(e) {
  return eA(tA, { entries: [H0(e)], index: 0 });
}
function G0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function rA(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye;
  function we({ initial: ve = !1 } = {}) {
    r || (C(), $(), _e(), ve || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(H0(ee())), ne()));
  }
  function be(ve) {
    var ce, O;
    if (r) return;
    D();
    const fe = ve < 0 ? t.historyController.undo() : t.historyController.redo();
    if (ne(), !fe) return;
    const ie = bS(i, fe), me = (ce = i.timeline) == null ? void 0 : ce.fps;
    Object.keys(i).forEach((L) => delete i[L]), Object.assign(i, ie.state), C(!1), $({ restored: !0 }), o && h(), o && i.timeline.fps !== me && _.seek(Math.round(t.frame * i.timeline.fps / me)), t.selectedId = G0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((O = d()) == null ? void 0 : O.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), n.backgroundDirty = !0, ie.paintingChanged ? p() : f(), Y(), ye(), c(), B({ cause: "cutout_frame" });
  }
  function pe() {
    var ie, me;
    const ve = Array.isArray((ie = t.historyController) == null ? void 0 : ie.entries) ? t.historyController.entries : [], fe = Number((me = t.historyController) == null ? void 0 : me.index);
    return {
      canUndo: !r && ve.length > 1 && fe > 0,
      canRedo: !r && ve.length > 1 && fe >= 0 && fe < ve.length - 1
    };
  }
  return {
    connect(ve) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: _,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: h,
        releaseHiddenSelection: y,
        requestDraw: B,
        stopTimelinePlayback: D,
        storedEditorState: ee,
        syncCutoutShot: C,
        syncPaintUi: Y,
        syncPortHandoff: $,
        syncUndoRedoButtons: ne,
        syncUpstreamEdits: _e,
        updateSidePanel: ye
      } = ve);
    },
    pushHistory: we,
    restoreHistory: be,
    getHistoryCapabilities: pe
  };
}
function iA(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, _, g, h;
  function y() {
    return s !== "stickers" ? i.shots : n ? [...B(), ...D()] : B();
  }
  function B() {
    return n ? i.stickers.filter((x) => x.placement === "sky") : i.stickers;
  }
  function D() {
    if (!n) return [];
    const x = h(), re = [...new Set(x.map((ue) => ue.origin.layer))];
    return x.filter((ue) => ue.placement === "sky").sort((ue, F) => re.indexOf(ue.origin.layer) - re.indexOf(F.origin.layer) || ue.z_index - F.z_index);
  }
  function ee(x) {
    return i.stickers.find((re) => re.id === x) || h().find((re) => re.id === x) || null;
  }
  function C(x) {
    return n && v(x);
  }
  function Y(x) {
    return x.source.kind === "file" && !x.source.filename && !x.source.data_url;
  }
  function $(x) {
    if (!C(x)) return x;
    const re = se(x) ? Ut(x) ? g(x) : p(x) : null;
    return kd(x, r.frame, re && { width: re.naturalWidth || re.width, height: re.naturalHeight || re.height });
  }
  function ne(x, re) {
    C(x) ? Gm(x, r.frame, re) : Object.assign(x, re);
  }
  function _e() {
    const x = i.painting || (i.painting = ko(null));
    return Array.isArray(x.groups) || (x.groups = []), x.groups;
  }
  function ye(x = "paint") {
    var W, Se;
    const re = Array.isArray((Se = (W = i.painting) == null ? void 0 : W[x]) == null ? void 0 : Se.strokes) ? i.painting[x].strokes : [], ue = [], F = /* @__PURE__ */ new Set();
    for (const Me of re) {
      const Ee = String((Me == null ? void 0 : Me.actionGroupId) || "").trim();
      !Ee || F.has(Ee) || (F.add(Ee), ue.push(Ee));
    }
    return ue;
  }
  function we() {
    return ye("paint");
  }
  function be(x, re) {
    const ue = String(re || "").trim();
    return ue ? `${x === "mask" ? "mask" : "paint"}:${ue}` : "";
  }
  function pe(x) {
    const re = String(x || "").trim();
    return re ? `raster:${re}` : "";
  }
  function ve(x) {
    const re = String(x || "").trim();
    if (!re) return "";
    const ue = re.match(/^raster:(.*)$/);
    return String(ue ? ue[1] || "" : re).trim();
  }
  function fe(x, re = null) {
    const ue = String(x || "").trim();
    if (!ue) return { layerKind: "paint", actionGroupId: "" };
    const F = ue.match(/^(paint|mask):(.*)$/);
    return F ? { layerKind: F[1] === "mask" ? "mask" : "paint", actionGroupId: String(F[2] || "").trim() } : { layerKind: re === "mask" ? "mask" : "paint", actionGroupId: ue };
  }
  function ie() {
    var re;
    let x = -1;
    for (const ue of B())
      x = Math.max(x, Number((ue == null ? void 0 : ue.z_index) || 0));
    for (const ue of _e())
      x = Math.max(x, Number((ue == null ? void 0 : ue.z_index) || 0));
    for (const ue of Array.isArray((re = i.painting) == null ? void 0 : re.raster_objects) ? i.painting.raster_objects : [])
      String((ue == null ? void 0 : ue.layerKind) || "paint") === "paint" && (x = Math.max(x, Number((ue == null ? void 0 : ue.z_index) || 0)));
    return x + 1;
  }
  function me(x, re = null) {
    const ue = String(x || "").trim();
    if (!ue) return null;
    const F = _e();
    let W = F.find((Se) => String((Se == null ? void 0 : Se.actionGroupId) || "") === ue);
    return W ? re != null && (W.z_index = Math.max(0, Number(re || 0))) : (W = {
      id: ue,
      type: "strokeGroup",
      actionGroupId: ue,
      z_index: re == null ? ie() : Math.max(0, Number(re || 0)),
      locked: !1,
      frame: null
    }, F.push(W)), W;
  }
  function ce(x) {
    if (!(x != null && x.centerUv)) return [];
    const re = Number(x.centerUv.u || 0), ue = Number(x.centerUv.v || 0), F = Number(x.halfW || 0), W = Number(x.halfH || 0);
    return [
      {
        u: ((re - F) % 1 + 1) % 1,
        v: Oe(ue - W, 0, 1)
      },
      {
        u: ((re + F) % 1 + 1) % 1,
        v: Oe(ue - W, 0, 1)
      },
      {
        u: ((re + F) % 1 + 1) % 1,
        v: Oe(ue + W, 0, 1)
      },
      {
        u: ((re - F) % 1 + 1) % 1,
        v: Oe(ue + W, 0, 1)
      }
    ];
  }
  function O() {
    const x = new Set(we()), ue = _e().filter((F) => x.has(String((F == null ? void 0 : F.actionGroupId) || "")));
    return x.forEach((F) => {
      ue.some((W) => String((W == null ? void 0 : W.actionGroupId) || "") === F) || ue.push({
        id: F,
        type: "strokeGroup",
        actionGroupId: F,
        z_index: ie(),
        locked: !1,
        frame: null
      });
    }), ue.sort((F, W) => Number((F == null ? void 0 : F.z_index) || 0) - Number((W == null ? void 0 : W.z_index) || 0)), i.painting.groups = ue, ue;
  }
  function L(x, re, ue) {
    var Ae;
    const F = (Fe) => (Number(Fe || 0) % 1 + 1) % 1, W = [];
    for (const Fe of ue) {
      const He = Fe == null ? void 0 : Fe.geometry, Ge = (He == null ? void 0 : He.geometryKind) === "lasso_fill" ? He == null ? void 0 : He.points : (He == null ? void 0 : He.processedPoints) || (He == null ? void 0 : He.rawPoints) || (He == null ? void 0 : He.points) || [];
      Array.isArray(Ge) && W.push(...Ge);
    }
    if (!W.length) return null;
    const Se = F(((Ae = W[0]) == null ? void 0 : Ae.u) || 0);
    let Me = 0, Ee = 0;
    W.forEach((Fe) => {
      const He = F((Fe == null ? void 0 : Fe.u) || 0);
      Me += Se + E(He, Se), Ee += Number((Fe == null ? void 0 : Fe.v) || 0);
    });
    const Re = (Me / W.length % 1 + 1) % 1;
    let je = 1 / 0, Ke = -1 / 0, Ce = 1 / 0, ze = -1 / 0;
    W.forEach((Fe) => {
      const He = F((Fe == null ? void 0 : Fe.u) || 0), Ge = E(He, Re);
      je = Math.min(je, Ge), Ke = Math.max(Ke, Ge);
      const Ue = Number((Fe == null ? void 0 : Fe.v) || 0);
      Ce = Math.min(Ce, Ue), ze = Math.max(ze, Ue);
    });
    const oe = ue.reduce((Fe, He) => {
      const Ge = l(String((He == null ? void 0 : He.toolKind) || "pen")), Ue = Tn[Ge] || Tn[Dr], ft = Math.max(1, Number((He == null ? void 0 : He.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Fe, ft);
    }, 0), Ie = Math.max(35e-4, oe / 2048);
    return {
      centerUv: { u: ((Re + (je + Ke) * 0.5) % 1 + 1) % 1, v: Oe((Ce + ze) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ke - je) * 0.5 + Ie,
      halfH: (ze - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function M(x, re, ue) {
    const F = String(x || "").trim();
    if (!F) return null;
    const W = _e().find((Me) => String((Me == null ? void 0 : Me.actionGroupId) || "") === F);
    if (!W) return null;
    const Se = ue || T(F, re);
    return W.frame = L(F, re, Se), W.frame;
  }
  function de() {
    var F;
    const x = B().map((W) => ({
      type: "sticker",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), re = O().map((W) => ({
      type: "strokeGroup",
      id: String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || ""),
      actionGroupId: String((W == null ? void 0 : W.actionGroupId) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), ue = (Array.isArray((F = i.painting) == null ? void 0 : F.raster_objects) ? i.painting.raster_objects : []).filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") === "paint").map((W) => ({
      type: "rasterObject",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    }));
    return [...x, ...re, ...ue].sort((W, Se) => Number(W.z_index || 0) - Number(Se.z_index || 0));
  }
  function Q(x = !0) {
    var ue, F, W, Se, Me, Ee;
    const re = de().filter((Re) => Re.type === "strokeGroup").map((Re) => String(Re.actionGroupId || "")).filter((Re) => !!Re);
    if (x) {
      const Re = String(((F = (ue = r.interaction) == null ? void 0 : ue.stroke) == null ? void 0 : F.actionGroupId) || "").trim(), je = String(((Se = (W = r.interaction) == null ? void 0 : W.stroke) == null ? void 0 : Se.layerKind) || "").trim(), Ke = String(((Ee = (Me = r.interaction) == null ? void 0 : Me.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Re && je === "paint" && Ke !== "eraser" && !re.includes(Re) && re.push(Re);
    }
    return re;
  }
  function R(x = !0) {
    var Ee, Re, je, Ke, Ce, ze;
    const re = de();
    if (!x) return re;
    const ue = String(((Re = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Re.actionGroupId) || "").trim(), F = String(((Ke = (je = r.interaction) == null ? void 0 : je.stroke) == null ? void 0 : Ke.layerKind) || "").trim(), W = String(((ze = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!ue || F !== "paint" || W === "eraser" || re.some((oe) => oe.type === "strokeGroup" && String(oe.actionGroupId || "") === ue))
      return re;
    const Se = f();
    let Me = re.reduce((oe, Ie) => Math.max(oe, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return Se && w(Se) && String(Se.actionGroupId || "") === ue && (Me = Number(Se.z_index || 0)), [
      ...re,
      {
        type: "strokeGroup",
        id: ue,
        actionGroupId: ue,
        z_index: Me,
        item: null
      }
    ].sort((oe, Ie) => Number((oe == null ? void 0 : oe.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function k() {
    return _e().slice().sort((x, re) => Number((x == null ? void 0 : x.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)).map((x) => V(be("paint", (x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || ""))).filter(Boolean);
  }
  function P() {
    var x;
    return (Array.isArray((x = i.painting) == null ? void 0 : x.raster_objects) ? i.painting.raster_objects : []).filter((re) => String((re == null ? void 0 : re.layerKind) || "paint") === "paint").slice().sort((re, ue) => Number((re == null ? void 0 : re.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0)).map((re) => m(pe((re == null ? void 0 : re.id) || ""))).filter(Boolean);
  }
  function le() {
    return Array.isArray(i.stickers) ? B() : [];
  }
  function q() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...le(), ...D()];
  }
  function I(x) {
    return !!x && Array.isArray(i.shots) && i.shots.includes(x);
  }
  function v(x) {
    return !!x && (Array.isArray(i.stickers) && i.stickers.includes(x) || Ut(x));
  }
  function K() {
    var x;
    return Array.isArray((x = i.painting) == null ? void 0 : x.raster_objects) ? i.painting.raster_objects : [];
  }
  function m(x) {
    const re = ve(x);
    if (!re) return null;
    const ue = K().find((F) => String((F == null ? void 0 : F.id) || "").trim() === re);
    return !ue || String((ue == null ? void 0 : ue.layerKind) || "paint") !== "paint" ? null : {
      ...ue,
      id: pe(re),
      type: "rasterObject",
      rasterObjectId: re
    };
  }
  function S(x) {
    if (!x || typeof x != "object" || String(x.type || "") !== "rasterObject") return !1;
    const re = ve(x.rasterObjectId || x.id || "");
    return !!re && !!m(pe(re));
  }
  function V(x) {
    const re = fe(x), ue = String(re.actionGroupId || "").trim();
    if (!ue) return null;
    const F = _e().find((W) => String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || "") === ue || String((W == null ? void 0 : W.actionGroupId) || "") === ue);
    return F ? {
      ...F,
      id: be("paint", ue),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: ue
    } : null;
  }
  function w(x) {
    if (!x || typeof x != "object" || String(x.type || "") !== "strokeGroup") return !1;
    const re = String(x.actionGroupId || "").trim(), ue = String(x.layerKind || "paint").trim() || "paint";
    return !!re && !!V(be(ue, re));
  }
  function T(x, re = null) {
    const ue = fe(x, re), F = String(ue.actionGroupId || "").trim();
    return F ? d(ue.layerKind).filter((W) => String((W == null ? void 0 : W.actionGroupId) || "").trim() === F) : [];
  }
  function z(x, re = "paint") {
    const ue = String(x || "").trim(), W = `geomv5:${String(re || "paint").trim() || "paint"}:${ue}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const Se = a(), Me = String((Se == null ? void 0 : Se.id) || ""), Ee = Se ? c(Se) : null;
      return `${W}:frame:${Me}:${Math.round(Number((Se == null ? void 0 : Se.yaw_deg) || 0) * 1e3)}:${Math.round(Number((Se == null ? void 0 : Se.pitch_deg) || 0) * 1e3)}:${Math.round(Number((Se == null ? void 0 : Se.roll_deg) ?? (Se == null ? void 0 : Se.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((Se == null ? void 0 : Se.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((Se == null ? void 0 : Se.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Z(x, re, ue) {
    return !x || typeof x != "object" ? x : {
      ...x,
      u: ((Number(x.u || 0) + Number(re || 0)) % 1 + 1) % 1,
      v: Oe(Number(x.v || 0) + Number(ue || 0), 0, 1)
    };
  }
  function E(x, re) {
    let ue = Number(x || 0) - Number(re || 0);
    for (; ue > 0.5; ) ue -= 1;
    for (; ue < -0.5; ) ue += 1;
    return ue;
  }
  function N(x, re = null, ue = null) {
    var je;
    const F = fe(x, re), W = Array.isArray(ue) ? ue : T(F.actionGroupId, F.layerKind), Se = [];
    if (W.forEach((Ke) => {
      const Ce = (Ke == null ? void 0 : Ke.geometry) || null, ze = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(ze) && Se.push(...ze);
    }), !Se.length) return { u: 0.5, v: 0.5 };
    const Me = Number(((je = Se[0]) == null ? void 0 : je.u) || 0);
    let Ee = 0, Re = 0;
    return Se.forEach((Ke) => {
      Ee += Me + E(Number((Ke == null ? void 0 : Ke.u) || 0), Me), Re += Number((Ke == null ? void 0 : Ke.v) || 0);
    }), {
      u: (Ee / Se.length % 1 + 1) % 1,
      v: Oe(Re / Se.length, 0, 1)
    };
  }
  function b(x, re, ue = 1, F = 0) {
    if (!x || typeof x != "object") return x;
    const W = Number((re == null ? void 0 : re.u) || 0), Se = Number((re == null ? void 0 : re.v) || 0), Me = E(Number(x.u || 0), W), Ee = Number(x.v || 0) - Se, Re = Number(F || 0) * Nr, je = Math.cos(Re), Ke = Math.sin(Re), Ce = Math.max(0.02, Number(ue || 1)), ze = (Me * je - Ee * Ke) * Ce, oe = (Me * Ke + Ee * je) * Ce;
    return {
      ...x,
      u: ((W + ze) % 1 + 1) % 1,
      v: Oe(Se + oe, 0, 1)
    };
  }
  function A(x, re, ue, F = null, W = null, Se = null) {
    const Me = fe(x, W), Ee = String(Me.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Re = d(Me.layerKind), je = Array.isArray(F) ? new Map(F.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Ke = !1;
    if (Re.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const ze = (je == null ? void 0 : je.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, oe = Ce == null ? void 0 : Ce.geometry, Ie = ze == null ? void 0 : ze.geometry;
      !oe || !Ie || (Array.isArray(Ie.points) && (oe.points = Ie.points.map((Ae) => Z(Ae, re, ue)), Ke = !0), Array.isArray(Ie.rawPoints) && (oe.rawPoints = Ie.rawPoints.map((Ae) => Z(Ae, re, ue)), Ke = !0), Array.isArray(Ie.processedPoints) && (oe.processedPoints = Ie.processedPoints.map((Ae) => Z(Ae, re, ue)), Ke = !0));
    }), Ke && Se) {
      const Ce = _e().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return Ke;
  }
  function X(x, re = 1, ue = 0, F = null, W = null, Se = null) {
    const Me = fe(x, W), Ee = String(Me.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Re = d(Me.layerKind), je = Array.isArray(F) ? F : T(Ee, Me.layerKind), Ke = Array.isArray(je) ? new Map(je.map((oe) => [String((oe == null ? void 0 : oe.id) || ""), oe])) : null, Ce = (Se == null ? void 0 : Se.centerUv) ?? N(Ee, Me.layerKind, je);
    let ze = !1;
    if (Re.forEach((oe) => {
      if (String((oe == null ? void 0 : oe.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (Ke == null ? void 0 : Ke.get(String((oe == null ? void 0 : oe.id) || ""))) || oe, Ae = oe == null ? void 0 : oe.geometry, Fe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Fe || (Array.isArray(Fe.points) && (Ae.points = Fe.points.map((He) => b(He, Ce, re, ue)), ze = !0), Array.isArray(Fe.rawPoints) && (Ae.rawPoints = Fe.rawPoints.map((He) => b(He, Ce, re, ue)), ze = !0), Array.isArray(Fe.processedPoints) && (Ae.processedPoints = Fe.processedPoints.map((He) => b(He, Ce, re, ue)), ze = !0));
    }), ze && Se) {
      const oe = _e().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      oe && (oe.frame = null);
    }
    return ze;
  }
  function ge(x, re, ue, F = null) {
    const W = ve(x);
    if (!W) return !1;
    const Se = K().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "").trim() === W);
    if (!Se) return !1;
    const Me = F && typeof F == "object" ? F : Se, Ee = (Me == null ? void 0 : Me.transform) || {}, Re = Number(Ee.du || 0) + Number(re || 0), je = Oe(Number(Ee.dv || 0) + Number(ue || 0), -1, 1);
    return Se.transform || (Se.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), Se.transform.du = Re, Se.transform.dv = je, !0;
  }
  function he(x, re = 1, ue = null) {
    const F = ve(x);
    if (!F) return !1;
    const W = K().find((je) => String((je == null ? void 0 : je.id) || "").trim() === F);
    if (!W) return !1;
    const Se = ue && typeof ue == "object" ? ue : W, Me = (Se == null ? void 0 : Se.transform) || {}, Ee = Math.max(0.01, Number(Me.scale || 1)), Re = Oe(Ee * Math.max(0.01, Number(re || 1)), 0.01, 100);
    return W.transform || (W.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), W.transform.scale = Re, !0;
  }
  function xe() {
    return ie();
  }
  function se(x) {
    var re;
    return !x || typeof x != "object" ? !1 : o ? ((re = x.source) == null ? void 0 : re.kind) === "port" : String(x.id || "") === Qd || String(x.source_kind || "") === k2;
  }
  function ke(x) {
    return !!(x && typeof x == "object" && x.visible === !1);
  }
  function j(x) {
    return se(x) && ke(x) ? sg : 1;
  }
  function ae(x, re, ue = 1, F = 0) {
    if (!x || typeof x != "object") return x;
    const W = Number((re == null ? void 0 : re.u) || 0), Se = Number((re == null ? void 0 : re.v) || 0), Me = E(Number(x.u || 0), W), Ee = Number(x.v || 0) - Se, Re = Math.max(0.02, Number(ue || 1)), je = Number(F || 0) * Nr, Ke = Math.cos(je), Ce = Math.sin(je), ze = Me / Re, oe = Ee / Re, Ie = ze * Ke + oe * Ce, Ae = -ze * Ce + oe * Ke;
    return {
      ...x,
      u: ((W + Ie) % 1 + 1) % 1,
      v: Se + Ae
    };
  }
  function G(x) {
    const re = (x == null ? void 0 : x.bbox) || null, ue = (x == null ? void 0 : x.transform) || {};
    return re ? {
      u: (((Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5 + Number(ue.du || 0)) % 1 + 1) % 1,
      v: Oe((Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5 + Number(ue.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function te(x) {
    var Re, je, Ke, Ce;
    const re = (x == null ? void 0 : x.bbox) || null;
    if (!re) return [];
    const ue = {
      u: (Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5,
      v: (Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5
    }, F = Math.max(0.01, Number(((Re = x == null ? void 0 : x.transform) == null ? void 0 : Re.scale) || 1)), W = Number(((je = x == null ? void 0 : x.transform) == null ? void 0 : je.rot_deg) || 0), Se = Number(((Ke = x == null ? void 0 : x.transform) == null ? void 0 : Ke.du) || 0), Me = Number(((Ce = x == null ? void 0 : x.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(re.u0 || 0), v: Number(re.v0 || 0) },
      { u: Number(re.u1 || 0), v: Number(re.v0 || 0) },
      { u: Number(re.u1 || 0), v: Number(re.v1 || 0) },
      { u: Number(re.u0 || 0), v: Number(re.v1 || 0) }
    ].map((ze) => Z(b(ze, ue, F, W), Se, Me));
  }
  function H(x) {
    const re = ve((x == null ? void 0 : x.rasterObjectId) || (x == null ? void 0 : x.id) || ""), ue = (x == null ? void 0 : x.transform) || {}, F = (x == null ? void 0 : x.bbox) || {}, W = `${re}:${r.mode}:${u()}:${F.u0}:${F.v0}:${F.u1}:${F.v1}:${ue.du}:${ue.dv}:${ue.rot_deg}:${ue.scale}`;
    if (r.mode === "frame") {
      const Se = a(), Me = Se ? c(Se) : null;
      return `${W}:frame:${String((Se == null ? void 0 : Se.id) || "")}:${Math.round(Number((Me == null ? void 0 : Me.x) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.y) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.w) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function J(x) {
    const re = String((x == null ? void 0 : x.id) || ""), ue = I(x) ? "frame" : v(x) ? "sticker" : "item", F = $(x), W = [
      ue,
      re,
      r.mode,
      Number((F == null ? void 0 : F.yaw_deg) || 0).toFixed(4),
      Number((F == null ? void 0 : F.pitch_deg) || 0).toFixed(4),
      Number((F == null ? void 0 : F.hFOV_deg) || 0).toFixed(4),
      Number((F == null ? void 0 : F.vFOV_deg) || 0).toFixed(4),
      Number((F == null ? void 0 : F.rot_deg) || 0).toFixed(4),
      Number((F == null ? void 0 : F.roll_deg) || 0).toFixed(4),
      Vr(F),
      C(x) && _(x)
    ].join(":");
    if (r.mode === "frame") {
      const Se = a(), Me = Se ? c(Se) : null;
      return `${W}:frame:${String((Se == null ? void 0 : Se.id) || "")}:${Math.round(Number((Me == null ? void 0 : Me.x) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.y) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.w) || 0))}:${Math.round(Number((Me == null ? void 0 : Me.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function U() {
    de().forEach((re, ue) => {
      re.type === "sticker" && re.item && (re.item.z_index = ue), re.type === "strokeGroup" && re.item && (re.item.z_index = ue), re.type === "rasterObject" && re.item && (re.item.z_index = ue);
    });
  }
  return {
    connect(x) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: p,
        sceneStickerShown: _,
        upstreamStickerImage: g,
        upstreamStickers: h
      } = x);
    },
    getList: y,
    skyStickers: B,
    upstreamSkyStickers: D,
    stickerById: ee,
    isSceneSticker: C,
    isUploadingSticker: Y,
    poseOf: $,
    writePose: ne,
    getPaintingGroupList: _e,
    makeStrokeGroupSelectionId: be,
    makeRasterObjectSelectionId: pe,
    parseRasterObjectSelectionId: ve,
    ensurePaintingGroupEntry: me,
    getFrameCornersUv: ce,
    ensureGroupFrame: M,
    getDisplayListObjects: de,
    getOrderedPaintGroupIds: Q,
    getOrderedDisplayListObjects: R,
    getSelectableStrokeGroupItems: k,
    getSelectableRasterObjectItems: P,
    cutoutStickers: le,
    getCutoutSelectableItems: q,
    isShotItem: I,
    isStickerItem: v,
    getRasterObjectList: K,
    getRasterObjectItem: m,
    isRasterObjectItem: S,
    getStrokeGroupItem: V,
    isStrokeGroupItem: w,
    getStrokeGroupStrokes: T,
    getStrokeGeomCacheKey: z,
    shortestWrappedDelta: E,
    getStrokeGroupCenterUv: N,
    applyStrokeGroupOffset: A,
    applyStrokeGroupTransform: X,
    applyRasterObjectOffset: ge,
    applyRasterObjectTransform: he,
    getNextStickerZIndex: xe,
    isExternalSticker: se,
    isStickerHidden: ke,
    getStickerDisplayAlpha: j,
    inverseTransformErpPointAround: ae,
    getRasterObjectCenterUv: G,
    getRasterObjectTransformedErpPoints: te,
    getRasterObjectGeomCacheKey: H,
    getSceneItemGeomCacheKey: J,
    normalizeDisplayZIndices: U
  };
}
function oA(e) {
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
  let c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k;
  function P() {
    const H = String(t.selectedId || "");
    if (!H) return null;
    const J = C(H);
    if (J) return J;
    const U = B(H);
    return U || (o ? _().find((x) => String((x == null ? void 0 : x.id) || "") === H) || null : h().find((x) => String((x == null ? void 0 : x.id) || "") === H) || null);
  }
  function le() {
    const H = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], J = [], U = /* @__PURE__ */ new Set();
    return H.forEach((x) => {
      const re = String(x || "").trim();
      if (!re || U.has(re)) return;
      U.add(re);
      const ue = re === String(t.selectedId || "") ? P() : C(re) || B(re) || (o ? _().find((F) => String((F == null ? void 0 : F.id) || "") === re) : h().find((F) => String((F == null ? void 0 : F.id) || "") === re));
      ue && J.push(ue);
    }), J;
  }
  function q(H = null) {
    const J = Array.isArray(H) ? H : le();
    if (!J || J.length < 2) return null;
    const U = J.map((Me) => ie(Me)).filter((Me) => (Me == null ? void 0 : Me.visible) && Array.isArray(Me.corners) && Me.corners.length);
    if (!U.length) return null;
    const x = U.flatMap((Me) => Me.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), re = U.flatMap((Me) => Me.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), ue = Math.min(...x), F = Math.max(...x), W = Math.min(...re), Se = Math.max(...re);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ue + F) * 0.5, y: (W + Se) * 0.5 },
      corners: [
        { x: ue, y: W },
        { x: F, y: W },
        { x: F, y: Se },
        { x: ue, y: Se }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ue + F) * 0.5, y: W, a: { x: ue, y: W }, b: { x: F, y: W } },
        { edge: "right", x: F, y: (W + Se) * 0.5, a: { x: F, y: W }, b: { x: F, y: Se } },
        { edge: "bottom", x: (ue + F) * 0.5, y: Se, a: { x: F, y: Se }, b: { x: ue, y: Se } },
        { edge: "left", x: ue, y: (W + Se) * 0.5, a: { x: ue, y: Se }, b: { x: ue, y: W } }
      ],
      rotateStemBase: { x: (ue + F) * 0.5, y: W },
      rotateHandle: { x: (ue + F) * 0.5, y: W - 30 }
    };
  }
  function I(H) {
    const J = String((H == null ? void 0 : H.id) || "").trim();
    return !!J && Array.isArray(t.selectedIds) && t.selectedIds.includes(J);
  }
  function v() {
    const H = P();
    return H ? pe(H) || ne(H) ? "stroke" : ye(H) ? "frame" : "image" : null;
  }
  function K(H) {
    if (!H || typeof H != "object") return !1;
    if (pe(H)) {
      const J = String(H.actionGroupId || H.id || "").trim(), U = y().find((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() === J);
      return (U == null ? void 0 : U.locked) === !0;
    }
    if (ne(H)) {
      const J = ce(H.rasterObjectId || H.id || ""), U = D().find((x) => String((x == null ? void 0 : x.id) || "").trim() === J);
      return (U == null ? void 0 : U.locked) === !0;
    }
    return Ut(H) && !hl(H) ? !0 : H.locked === !0;
  }
  function m(H = null) {
    const J = Array.isArray(H) ? H : le();
    return J.length > 0 && J.every((U) => K(U));
  }
  function S(H, J) {
    const U = J === !0;
    if (!H || typeof H != "object") return !1;
    if (pe(H)) {
      const x = String(H.actionGroupId || H.id || "").trim(), re = y().find((ue) => String((ue == null ? void 0 : ue.actionGroupId) || (ue == null ? void 0 : ue.id) || "").trim() === x);
      return !re || re.locked === U ? !1 : (re.locked = U, !0);
    }
    if (ne(H)) {
      const x = ce(H.rasterObjectId || H.id || ""), re = D().find((ue) => String((ue == null ? void 0 : ue.id) || "").trim() === x);
      return !re || re.locked === U ? !1 : (re.locked = U, !0);
    }
    return H.locked === U || Ut(H) && !hl(H) ? !1 : (H.locked = U, !0);
  }
  function V() {
    if (r) return;
    const H = le();
    if (!H.length) return;
    const J = !m(H);
    let U = !1;
    H.forEach((x) => {
      S(x, J) && (U = !0);
    }), U && (L(), d(), R(), k(), M());
  }
  function w(H) {
    se(), a.selection = null, t.selectedId = (H == null ? void 0 : H.id) || null, t.selectedIds = H != null && H.id ? [H.id] : [], H && be(H) && !Ut(H) ? s.active.selected_sticker_id = H.id || null : s.active.selected_sticker_id = null, H && ye(H) ? s.active.selected_shot_id = H.id || null : H ? ye(H) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function T(H, J = null) {
    const U = [], x = /* @__PURE__ */ new Set();
    (Array.isArray(H) ? H : []).forEach((F) => {
      const W = String((F == null ? void 0 : F.id) || "").trim();
      !W || x.has(W) || (x.add(W), U.push(W));
    }), t.selectedIds = U, se(), a.selection = null;
    const re = String(J || "").trim();
    t.selectedId = re && U.includes(re) ? re : U[U.length - 1] || null;
    const ue = P();
    s.active.selected_sticker_id = ue && be(ue) && !Ut(ue) && ue.id || null, ue && ye(ue) ? s.active.selected_shot_id = ue.id || null : U.length || (s.active.selected_shot_id = null);
  }
  function z() {
    const H = (Array.isArray(s.shots) ? s.shots : []).map((U, x) => ({
      kind: "frame",
      item: U,
      label: String((U == null ? void 0 : U.label) || `Frame ${x + 1}`)
    })), J = f().map((U, x) => {
      var ue, F;
      const re = $(U) ? String(U.id || Qd) : String(((F = (ue = s.assets) == null ? void 0 : ue[U.asset_id]) == null ? void 0 : F.name) || U.asset_id || U.id || `Image ${x + 1}`);
      return {
        kind: "image",
        item: U,
        label: re
      };
    });
    return [...H, ...J];
  }
  function Z(H) {
    return H === "frame" ? We.camera : H === "stroke" ? We.paintbrush_vertical_tool : We.image;
  }
  function E(H) {
    return !H || !H.item ? {
      label: String((H == null ? void 0 : H.label) || ""),
      icon: null
    } : {
      label: String(H.label || ""),
      icon: Z(H.kind)
    };
  }
  function N() {
    if (r) return;
    const H = P();
    !H || !$(H) || (H.visible = we(H), ae(), ve(), L(), d(), k(), R(), M());
  }
  function b() {
    if (r || l !== "stickers") return;
    const H = P();
    if (!H || !$(H)) return;
    const J = H.initial_pose;
    if (!J || typeof J != "object") return;
    H.yaw_deg = Number(J.yaw_deg ?? H.yaw_deg ?? 0), H.pitch_deg = Number(J.pitch_deg ?? H.pitch_deg ?? 0), H.hFOV_deg = Number(J.hFOV_deg ?? H.hFOV_deg ?? 30);
    const U = ee(Di, () => {
      M();
    });
    U && (U.complete || U.naturalWidth || U.width) ? H.vFOV_deg = u(
      Number(J.hFOV_deg ?? H.hFOV_deg ?? 30),
      Number(U.naturalWidth || U.width || 1),
      Number(U.naturalHeight || U.height || 1)
    ) : H.vFOV_deg = Number(J.vFOV_deg ?? H.vFOV_deg ?? 30), H.rot_deg = Number(J.rot_deg ?? H.rot_deg ?? 0), L(), d(), k(), R(), M();
  }
  function A(H) {
    if (!H || !$(H)) return null;
    const J = H.initial_pose;
    if (!J || typeof J != "object") return null;
    const U = {
      yaw_deg: Number(J.yaw_deg ?? H.yaw_deg ?? 0),
      pitch_deg: Number(J.pitch_deg ?? H.pitch_deg ?? 0),
      hFOV_deg: Number(J.hFOV_deg ?? H.hFOV_deg ?? 30),
      vFOV_deg: Number(J.vFOV_deg ?? H.vFOV_deg ?? 30),
      rot_deg: Number(J.rot_deg ?? H.rot_deg ?? 0)
    }, x = ee(Di, () => {
      M();
    });
    return x && (x.complete || x.naturalWidth || x.width) && (U.vFOV_deg = u(
      U.hFOV_deg,
      Number(x.naturalWidth || x.width || 1),
      Number(x.naturalHeight || x.height || 1)
    )), U;
  }
  function X() {
    const H = P();
    if (!H || !$(H)) return !1;
    const J = A(H);
    if (!J) return !1;
    const U = (x, re) => Math.abs(Number(x || 0) - Number(re || 0)) <= 1e-4;
    return !(U(H.yaw_deg, J.yaw_deg) && U(H.pitch_deg, J.pitch_deg) && U(H.hFOV_deg, J.hFOV_deg) && U(H.vFOV_deg, J.vFOV_deg) && U(H.rot_deg, J.rot_deg));
  }
  function ge(H = {}) {
    const U = H.preservePanelValues !== !1 ? O(P()) : null;
    U && (t.panelLastValues = {
      yaw_deg: Number(U.yaw_deg || 0),
      pitch_deg: Number(U.pitch_deg || 0),
      hFOV_deg: Number(U.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(U.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(U.rot_deg || 0),
      roll_deg: Number(U.roll_deg || 0),
      aspect_id: Vr(U)
    }), t.selectedId = null, t.selectedIds = [], se(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function he() {
    if (!i || !t.worldSelectedId) return null;
    const H = Q(t.worldSelectedId);
    return (H == null ? void 0 : H.placement) === "world" ? H : null;
  }
  function xe(H) {
    w(null), t.worldSelectedId = H, n.backgroundDirty = !0;
  }
  function se() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function ke(H) {
    return !!H && !r && !K(H);
  }
  function j() {
    if (l !== "cutout") return;
    const H = p();
    H && (t.selectedId = String(H.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ae() {
    var J;
    const H = P();
    (_e(H) && !de(H) || t.selectedId === xd && Y() && !c() || v() === "stroke" && !me()) && w(null), ((J = he()) == null ? void 0 : J.visible) === !1 && se();
  }
  function G() {
    if (r) return;
    const H = le();
    if (!P() || H.length === 0 || H.some(Ut) || H.some((W) => K(W))) return;
    fe();
    const U = g(), x = new Set(H.map((W) => be(W) ? `sticker:${String(W.id || "")}` : ne(W) ? `rasterObject:${ce(W.rasterObjectId || W.id || "")}` : `strokeGroup:${String(W.actionGroupId || W.id || "")}`)), re = [], ue = [];
    if (U.forEach((W) => {
      var Me, Ee;
      const Se = W.type === "sticker" ? `sticker:${String(((Me = W.item) == null ? void 0 : Me.id) || "")}` : W.type === "rasterObject" ? `rasterObject:${String(((Ee = W.item) == null ? void 0 : Ee.id) || W.id || "")}` : `strokeGroup:${String(W.actionGroupId || "")}`;
      x.has(Se) ? re.push(W) : ue.push(W);
    }), !re.length || re[re.length - 1] === U[U.length - 1]) return;
    [...ue, ...re].forEach((W, Se) => {
      W.type === "sticker" && W.item && (W.item.z_index = Se), W.type === "strokeGroup" && W.item && (W.item.z_index = Se), W.type === "rasterObject" && W.item && (W.item.z_index = Se);
    }), ve(), L(), d(), R(), M();
  }
  function te() {
    if (r) return;
    const H = le();
    if (!P() || H.length === 0 || H.some(Ut) || H.some((W) => K(W))) return;
    fe();
    const U = g(), x = new Set(H.map((W) => be(W) ? `sticker:${String(W.id || "")}` : ne(W) ? `rasterObject:${ce(W.rasterObjectId || W.id || "")}` : `strokeGroup:${String(W.actionGroupId || W.id || "")}`)), re = [], ue = [];
    if (U.forEach((W) => {
      var Me, Ee;
      const Se = W.type === "sticker" ? `sticker:${String(((Me = W.item) == null ? void 0 : Me.id) || "")}` : W.type === "rasterObject" ? `rasterObject:${String(((Ee = W.item) == null ? void 0 : Ee.id) || W.id || "")}` : `strokeGroup:${String(W.actionGroupId || "")}`;
      x.has(Se) ? re.push(W) : ue.push(W);
    }), !re.length || re[0] === U[0]) return;
    [...re, ...ue].forEach((W, Se) => {
      W.type === "sticker" && W.item && (W.item.z_index = Se), W.type === "strokeGroup" && W.item && (W.item.z_index = Se), W.type === "rasterObject" && W.item && (W.item.z_index = Se);
    }), ve(), L(), d(), R(), M();
  }
  return {
    connect(H) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: _,
        getDisplayListObjects: g,
        getList: h,
        getPaintingGroupList: y,
        getRasterObjectItem: B,
        getRasterObjectList: D,
        getStickerUiImage: ee,
        getStrokeGroupItem: C,
        hasCamera: Y,
        isExternalSticker: $,
        isRasterObjectItem: ne,
        isSceneSticker: _e,
        isShotItem: ye,
        isStickerHidden: we,
        isStickerItem: be,
        isStrokeGroupItem: pe,
        markObjectVisualsDirty: ve,
        normalizeDisplayZIndices: fe,
        objectGeom: ie,
        paintingShown: me,
        parseRasterObjectSelectionId: ce,
        poseOf: O,
        pushHistory: L,
        requestDraw: M,
        sceneStickerShown: de,
        stickerById: Q,
        updateSelectionMenu: R,
        updateSidePanel: k
      } = H);
    },
    getSelected: P,
    getSelectedItems: le,
    getMultiSelectionGeom: q,
    isItemSelected: I,
    getSelectedKind: v,
    isItemLocked: K,
    areAllSelectedItemsLocked: m,
    toggleSelectedLock: V,
    setSelectedItem: w,
    setSelectedItems: T,
    getCutoutInspectorItems: z,
    getSelectionItemIcon: Z,
    getSelectionItemLabelData: E,
    toggleSelectedExternalStickerVisibility: N,
    restoreSelectedToInitialPose: b,
    canRestoreSelectedToInitial: X,
    clearSelection: ge,
    selectedWorldSticker: he,
    selectWorldSticker: xe,
    clearWorldSelection: se,
    worldStickerEditable: ke,
    applyInitialCutoutFocus: j,
    releaseHiddenSelection: ae,
    bringSelectedToFront: G,
    sendSelectedToBack: te
  };
}
function sA(e) {
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
  function _() {
    const P = ne({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !P || P.length !== 4 ? !1 : P[0].y >= P[3].y;
  }
  function g() {
    return ag({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const k = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return k.some((P, le) => P !== f.key[le]) && (f = { key: k, projection: cg(g(), r.width, r.height) }), f.projection;
  }
  function y(k) {
    const P = h().project(k);
    return P.z > 1e-4 ? P : null;
  }
  function B(k, P) {
    return h().ray(k, P);
  }
  function D() {
    const k = r.width, P = r.height, le = 2;
    if (k / Math.max(P, 1) >= le) {
      const m = P, S = m * le;
      return { x: (k - S) * 0.5, y: 0, w: S, h: m };
    }
    const I = k, v = I / le;
    return { x: 0, y: (P - v) * 0.5, w: I, h: v };
  }
  function ee(k) {
    return {
      lon: Math.atan2(k.x, k.z),
      lat: Math.asin(Oe(k.y, -1, 1))
    };
  }
  function C(k, P = null) {
    const { lon: le, lat: q } = ee(k), I = D();
    let v = I.x + (le / (2 * Math.PI) + 0.5) * I.w;
    const K = I.y + (0.5 - q / Math.PI) * I.h;
    if (P !== null) {
      for (; v - P > I.w / 2; ) v -= I.w;
      for (; v - P < -I.w / 2; ) v += I.w;
    }
    return { x: v, y: K, z: 1 };
  }
  function Y(k) {
    const P = c(k), le = wo(
      Number(P.yaw_deg || 0),
      Number(P.pitch_deg || 0),
      Number(P.rot_deg || P.roll_deg || 0)
    ), q = Math.tan(Oe(Number(P.hFOV_deg || 20), 0.1, 179) * 0.5 * Nr), I = Math.tan(Oe(Number(P.vFOV_deg || 20), 0.1, 179) * 0.5 * Nr);
    return {
      centerDir: le.fwd,
      right: le.right,
      up: le.up,
      tanX: q,
      tanY: I
    };
  }
  function $(k, P, le) {
    return L2(zp(zp(k.centerDir, jp(k.right, P)), jp(k.up, le)));
  }
  function ne(k) {
    const P = Y(k);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: q, v: I }) => $(P, q * P.tanX, I * P.tanY));
  }
  function _e(k, P, le) {
    const q = Y(k), I = (P * 2 - 1) * q.tanX, v = (1 - le * 2) * q.tanY;
    return $(q, I, v);
  }
  function ye(k) {
    const P = t.width / Math.max(1, r.width), le = t.height / Math.max(1, r.height);
    return { x: k.x * P, y: k.y * le, w: k.w * P, h: k.h * le };
  }
  function we(k, P = null, le = null, q = null) {
    if (n.mode === "frame") {
      const I = P || a();
      if (!I) return [];
      const v = le || l(I);
      return L(k, I, v);
    }
    return me(k, q);
  }
  function be(k, P = null, le = null, q = null, I = null) {
    if (!k) return null;
    if (n.mode === "unwrap") {
      const K = me([k], I);
      return K[0] ? { x: K[0].x, y: K[0].y, z: 1 } : null;
    }
    const v = ve(k);
    return v ? d(v, P, le, q) : null;
  }
  function pe(k, P) {
    if (!k || !P) return null;
    const le = Number(P.x || 0), q = Number(P.y || 0);
    return _e(k, le, q);
  }
  function ve(k) {
    if (!k) return null;
    const P = (Number(k.u || 0) - 0.5) * (2 * Math.PI), le = (0.5 - Number(k.v || 0)) * Math.PI, q = Math.cos(le);
    return Zl(q * Math.sin(P), Math.sin(le), q * Math.cos(P));
  }
  function fe(k, P) {
    if (!k || !P) return null;
    const le = Y(k), q = jc(P, le.centerDir);
    if (!Number.isFinite(q) || q <= 1e-6) return null;
    const I = jc(P, le.right) / q, v = jc(P, le.up) / q;
    return {
      x: (I / Math.max(1e-6, le.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, le.tanY)) * 0.5
    };
  }
  function ie(k) {
    if (!Array.isArray(k) || k.length < 3) return [];
    if (n.mode === "unwrap") {
      const le = D();
      return k.map((q) => ({
        x: le.x + Number(q.u || 0) * le.w,
        y: le.y + Number(q.v || 0) * le.h
      }));
    }
    const P = k.map((le) => y(ve(le))).filter(Boolean);
    return P.every((le) => Number(le.z || 0) > 0) ? P.map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) })) : [];
  }
  function me(k, P = null) {
    if (!Array.isArray(k) || k.length < 1) return [];
    if (n.mode === "unwrap") {
      const q = D();
      return k.map((I) => {
        const v = (Number(I.u || 0) % 1 + 1) % 1, K = P == null ? v : Number(P || 0) + u(v, P);
        return {
          x: q.x + K * q.w,
          y: q.y + Number(I.v || 0) * q.h
        };
      });
    }
    const le = k.map((q) => y(ve(q))).filter(Boolean);
    return le.every((q) => Number(q.z || 0) > 0) ? le.map((q) => ({ x: Number(q.x || 0), y: Number(q.y || 0) })) : [];
  }
  function ce(k, P = 160) {
    if (!Array.isArray(k) || k.length < 3) return !1;
    for (let le = 0; le < k.length; le += 1) {
      const q = k[le], I = k[(le + 1) % k.length];
      if (!q || !I || !Number.isFinite(q.x) || !Number.isFinite(q.y) || !Number.isFinite(I.x) || !Number.isFinite(I.y) || Math.hypot(Number(I.x) - Number(q.x), Number(I.y) - Number(q.y)) > P) return !1;
    }
    return !0;
  }
  function O(k, P, le) {
    if (!Array.isArray(k) || k.length < 3 || !P || !le) return [];
    const q = [];
    for (const I of k) {
      const v = ve(I), K = fe(P, v);
      if (!K) return [];
      q.push({
        x: Number(le.x || 0) + Number(K.x || 0) * Number(le.w || 0),
        y: Number(le.y || 0) + Number(K.y || 0) * Number(le.h || 0)
      });
    }
    return ce(q, Math.max(80, Math.max(le.w, le.h) * 0.75)) ? q : [];
  }
  function L(k, P, le) {
    if (!Array.isArray(k) || k.length < 1 || !P || !le) return [];
    const q = [];
    for (const I of k) {
      const v = ve(I), K = fe(P, v);
      K && q.push({
        x: Number(le.x || 0) + Number(K.x || 0) * Number(le.w || 0),
        y: Number(le.y || 0) + Number(K.y || 0) * Number(le.h || 0)
      });
    }
    return q;
  }
  function M(k) {
    const P = r.getBoundingClientRect();
    return {
      x: (k.clientX - P.left) / P.width * r.width,
      y: (k.clientY - P.top) / P.height * r.height
    };
  }
  function de(k) {
    const P = r.getBoundingClientRect();
    return {
      x: Number(k.clientX) - Number(P.left || 0),
      y: Number(k.clientY) - Number(P.top || 0)
    };
  }
  function Q(k, P = performance.now()) {
    if (n.mode === "unwrap") {
      const v = D(), K = (k.x - v.x) / Math.max(1, v.w), m = (k.y - v.y) / Math.max(1, v.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (K % 1 + 1) % 1,
        v: Oe(m, 0, 1),
        t: Number(P || 0)
      };
    }
    const le = B(k.x, k.y), { lon: q, lat: I } = ee(le);
    return {
      targetKind: "ERP_GLOBAL",
      u: (q / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - I / Math.PI, 0, 1),
      t: Number(P || 0)
    };
  }
  function R(k, P, le = performance.now()) {
    const q = l(P);
    if (!q) return null;
    const I = {
      x: (Number(k.x) - q.x) / Math.max(1, q.w),
      y: (Number(k.y) - q.y) / Math.max(1, q.h)
    };
    if (I.x < 0 || I.x > 1 || I.y < 0 || I.y > 1) return null;
    const v = pe(P, I);
    if (!v) return null;
    const { lon: K, lat: m } = ee(v);
    return {
      targetKind: "ERP_GLOBAL",
      u: (K / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Oe(0.5 - m / Math.PI, 0, 1),
      t: Number(le || 0)
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
    isErpCamera: p,
    currentViewCamera: g,
    currentViewProjection: h,
    projectDir: y,
    screenToWorldDir: B,
    getUnwrapRect: D,
    projectDirUnwrap: C,
    getStickerFrame: Y,
    stickerDirFromFrame: $,
    stickerCornersDir: ne,
    stickerSampleDir: _e,
    stickerCornerOrderSanity: _,
    projectEditorPoints: we,
    projectErpPointToEditor: be,
    frameLocalPointToWorldDir: pe,
    erpPointToWorldDir: ve,
    worldDirToFrameLocalPoint: fe,
    projectLassoPointsToCurrentView: ie,
    projectErpLassoPointsToFrameRect: O,
    screenPos: M,
    screenPosCss: de,
    screenPosToErpPoint: Q,
    screenPosToFrameAsErpPoint: R,
    deviceRect: ye
  };
}
function aA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L;
  function M(v, K) {
    const m = String(v.actionGroupId || v.id || "").trim(), S = D(m, v.layerKind), V = a(m, v.layerKind, S), w = (V == null ? void 0 : V.centerUv) || B(m, v.layerKind, S), T = n.mode === "unwrap" ? Number((w == null ? void 0 : w.u) || 0) : null, z = [], Z = n.mode === "frame" ? l() : null, E = Z ? u(Z) : null;
    for (const j of S) {
      const ae = (j == null ? void 0 : j.geometry) || null, G = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [], te = ve(G, Z, E, T).filter((U) => Number.isFinite(U == null ? void 0 : U.x) && Number.isFinite(U == null ? void 0 : U.y));
      if (!te.length) continue;
      const H = c(String((j == null ? void 0 : j.toolKind) || "pen")), J = Tn[H] || Tn[Dr];
      z.push({
        points: te,
        closed: String((ae == null ? void 0 : ae.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((j == null ? void 0 : j.size) || 10) * Math.max(0.1, Number((J == null ? void 0 : J.sizeScale) ?? 1)) + 10),
        layerKind: String((j == null ? void 0 : j.layerKind) || v.layerKind || "paint")
      });
    }
    const N = fe(w, null, Z, E, T);
    if (!N) {
      const j = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(K, j), j;
    }
    const A = d(V).map((j) => fe(j, N.x, Z, E, T)).filter((j) => Number.isFinite(j == null ? void 0 : j.x) && Number.isFinite(j == null ? void 0 : j.y)).map((j) => ({ x: Number(j.x || 0), y: Number(j.y || 0) }));
    if (A.length < 4) {
      const j = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(K, j), j;
    }
    const X = (j, ae) => ({
      x: (Number((j == null ? void 0 : j.x) || 0) + Number((ae == null ? void 0 : ae.x) || 0)) * 0.5,
      y: (Number((j == null ? void 0 : j.y) || 0) + Number((ae == null ? void 0 : ae.y) || 0)) * 0.5,
      a: j,
      b: ae
    }), ge = X(A[0], A[1]), he = X(A[1], A[2]), xe = X(A[2], A[3]), se = X(A[3], A[0]), ke = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: A,
      edgeMidpoints: [
        { edge: "top", ...ge },
        { edge: "right", ...he },
        { edge: "bottom", ...xe },
        { edge: "left", ...se }
      ],
      rotateStemBase: { x: ge.x, y: ge.y },
      rotateHandle: { x: ge.x, y: ge.y - 30 },
      strokePaths: z,
      visible: !0
    };
    return n._strokeGeomCache.set(K, ke), ke;
  }
  function de(v, K) {
    const m = n.mode === "frame" ? l() : null, S = m ? u(m) : null, V = f(v), w = n.mode === "unwrap" ? Number((V == null ? void 0 : V.u) || 0) : null, T = fe(V, null, m, S, w), Z = _(v).map((A) => fe(A, (T == null ? void 0 : T.x) ?? null, m, S, w)).filter((A) => Number.isFinite(A == null ? void 0 : A.x) && Number.isFinite(A == null ? void 0 : A.y));
    if (!Array.isArray(Z) || Z.length < 4) {
      const A = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(K, A), A;
    }
    const E = Z.slice(0, 4).map((A) => ({ x: Number((A == null ? void 0 : A.x) || 0), y: Number((A == null ? void 0 : A.y) || 0) })), b = {
      kind: "rasterObject",
      center: {
        x: E.reduce((A, X) => A + Number(X.x || 0), 0) / E.length,
        y: E.reduce((A, X) => A + Number(X.y || 0), 0) / E.length
      },
      corners: E,
      visible: !0
    };
    return n._strokeGeomCache.set(K, b), b;
  }
  function Q(v, K = null, m = null, S = null, V = {}) {
    if (n.mode === "frame") {
      const N = m || l(), b = S || u(N);
      if (!N || !b) return null;
      const A = N ? L(N, v) : null;
      return A ? {
        x: Number(b.x || 0) + Number(A.x || 0) * Number(b.w || 0),
        y: Number(b.y || 0) + Number(A.y || 0) * Number(b.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return pe(v, K);
    const w = 1e-4, T = o().project(v, w);
    if (!Number.isFinite(T.z) || T.z <= w && !(V != null && V.clipBehind)) return null;
    const z = r.width, Z = r.height, E = Math.max(z, Z) * 2;
    return {
      x: Oe(T.x, -E, z + E),
      y: Oe(T.y, -E, Z + E),
      z: Math.max(T.z, w),
      rawZ: T.z,
      clipped: T.z <= w
    };
  }
  function R(v, K = []) {
    if (n.mode !== "pano" || ne(v)) return 1;
    const m = K.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return m.length ? T2(0.035, 0.2, Math.min(...m)) : 1;
  }
  function k(v) {
    if (Y(v) && !ie(v)) return { visible: !1 };
    const K = we(v), m = Dn(Number(K.yaw_deg || 0), Number(K.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, V = S ? u(S) : null, w = n.mode === "pano" && (ne(v) || $(v)), T = w ? { clipBehind: !0 } : null, z = Q(m, null, S, V, T);
    if (!z) return { visible: !1 };
    const Z = h(v), N = me(v).map((x) => Q(x, z.x, S, V, T)).filter((x) => Number.isFinite(x == null ? void 0 : x.x) && Number.isFinite(x == null ? void 0 : x.y));
    if (N.length < 4) return { visible: !1 };
    const b = ce(Z, 0, Z.tanY), A = ce(Z, 0, Z.tanY + Math.max(Z.tanY * 0.43, 0.053)), X = Q(b, z.x, S, V, T);
    if (!X) return { visible: !1 };
    const ge = Q(A, (X == null ? void 0 : X.x) ?? z.x, S, V, T), he = ((ge == null ? void 0 : ge.x) ?? X.x) - X.x, xe = ((ge == null ? void 0 : ge.y) ?? X.y) - X.y, se = Math.hypot(he, xe) || 1, ke = {
      x: X.x + he / se * 30,
      y: X.y + xe / se * 30
    }, j = Q(ce(Z, 0, Z.tanY), z.x, S, V, T), ae = Q(ce(Z, Z.tanX, 0), z.x, S, V, T), G = Q(ce(Z, 0, -Z.tanY), z.x, S, V, T), te = Q(ce(Z, -Z.tanX, 0), z.x, S, V, T);
    if (!j || !ae || !G || !te) return { visible: !1 };
    const H = [
      z,
      ...N,
      X,
      ge,
      j,
      ae,
      G,
      te
    ];
    if (w && !H.some((x) => Number((x == null ? void 0 : x.rawZ) ?? (x == null ? void 0 : x.z)) > 1e-4)) return { visible: !1 };
    const J = R(v, H), U = [
      {
        edge: "top",
        x: j.x,
        y: j.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: ae.x,
        y: ae.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: G.x,
        y: G.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: te.x,
        y: te.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: z.x, y: z.y },
      corners: N.map((x) => ({ x: x.x, y: x.y })),
      edgeMidpoints: U,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: ke,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: J,
      visible: !0
    };
  }
  function P(v) {
    if (t && $(v) && ee()) return { visible: !1 };
    if (!ye() && (_e(v) || C(v))) return { visible: !1 };
    if (_e(v)) {
      const V = String(v.actionGroupId || v.id || "").trim(), w = y(V, v.layerKind), T = n._strokeGeomCache.get(w);
      return T || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), M(v, w));
    }
    if (C(v)) {
      const V = p(v), w = n._strokeGeomCache.get(V);
      return w || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), de(v, V));
    }
    const K = g(v), m = n._strokeGeomCache.get(K);
    if (m) return m;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = k(v);
    return n._strokeGeomCache.set(K, S), S;
  }
  function le(v, K, m, S = null) {
    const V = [];
    for (let w = 0; w <= m; w += 1) {
      const T = w / m;
      let z = 0, Z = 0;
      K === 0 ? (z = T, Z = 0) : K === 1 ? (z = 1, Z = T) : K === 2 ? (z = 1 - T, Z = 1) : (z = 0, Z = 1 - T);
      const E = O(v, z, Z), N = n.mode === "unwrap" ? pe(E, S) : be(E);
      N && V.push(N);
    }
    return V;
  }
  function q() {
    const v = [...Array.isArray(i.shots) ? i.shots : []], K = [...s()].sort((m, S) => Number(m.z_index || 0) - Number(S.z_index || 0));
    return [...v, ...K];
  }
  function I() {
    const v = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((m, S) => Number(S.z_index || 0) - Number(m.z_index || 0)), ...v];
  }
  return {
    connect(v) {
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
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: h,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: D,
        isFreeSpaceView: ee,
        isRasterObjectItem: C,
        isSceneSticker: Y,
        isShotItem: $,
        isStickerItem: ne,
        isStrokeGroupItem: _e,
        paintingShown: ye,
        poseOf: we,
        projectDir: be,
        projectDirUnwrap: pe,
        projectEditorPoints: ve,
        projectErpPointToEditor: fe,
        sceneStickerShown: ie,
        stickerCornersDir: me,
        stickerDirFromFrame: ce,
        stickerSampleDir: O,
        worldDirToFrameLocalPoint: L
      } = v);
    },
    projectSceneItemDir: Q,
    objectGeom: P,
    sampleStickerEdge: le,
    getCutoutSelectableItemsForDisplay: q,
    getCutoutSelectableItemsForHit: I
  };
}
const ba = /* @__PURE__ */ new Map();
function lA(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we;
  function be(w = r.interaction) {
    const T = String((w == null ? void 0 : w.kind) || "");
    if (T === "paint_stroke" || T === "paint_lasso_fill" || T === "move_stroke_group" || T === "scale_stroke_group" || T === "rotate_stroke_group" || T === "move_raster_object" || T === "scale_raster_object") return !0;
    if (T === "move_multi") {
      const z = Array.isArray(w == null ? void 0 : w.strokeSnapshots) && w.strokeSnapshots.length > 0, Z = Array.isArray(w == null ? void 0 : w.rasterSnapshots) && w.rasterSnapshots.length > 0;
      return z || Z;
    }
    return !1;
  }
  function pe() {
    var T, z, Z, E;
    let w = null;
    try {
      const N = g(), b = ((E = (Z = (z = (T = r.paintEngine) == null ? void 0 : T.getErpTarget) == null ? void 0 : z.call(T, N)) == null ? void 0 : Z.displayPaint) == null ? void 0 : E.canvas) || null;
      b && (w = {
        source: b,
        revision: `${h()}:${ve()}`
      });
    } catch {
      w = null;
    }
    return w;
  }
  function ve() {
    var E, N, b, A, X, ge, he;
    const w = r.interaction, T = String((w == null ? void 0 : w.kind) || "");
    if (!be(w)) return "";
    if (T === "paint_stroke" || T === "paint_lasso_fill") {
      const xe = ((E = w == null ? void 0 : w.stroke) == null ? void 0 : E.geometry) || null, se = String(((N = w == null ? void 0 : w.stroke) == null ? void 0 : N.layerKind) || ""), ke = ((b = xe == null ? void 0 : xe.rawPoints) == null ? void 0 : b.length) ?? ((A = xe == null ? void 0 : xe.points) == null ? void 0 : A.length) ?? 0, j = String((w == null ? void 0 : w._livePreviewToken) || "");
      return `_${se || "paint"}_${T}_live${j}_${ke}_${r.livePaintInteractionRevision}`;
    }
    const z = String(((X = w == null ? void 0 : w.item) == null ? void 0 : X.actionGroupId) || ""), Z = String(((ge = w == null ? void 0 : w.item) == null ? void 0 : ge.rasterObjectId) || ((he = w == null ? void 0 : w.item) == null ? void 0 : he.id) || "");
    return `_${T}_${z || Z || "active"}_${r.livePaintInteractionRevision}`;
  }
  function fe(w, T = null) {
    const z = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!z) return null;
    const Z = s.get(z);
    if (Z)
      return Z.complete || Z.width || Z.naturalWidth, Z;
    const E = new Image();
    return E.onload = () => {
      typeof T == "function" && T();
    }, E.src = z, s.set(z, E), E;
  }
  function ie(w) {
    const T = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!T) return null;
    const z = o.get(T);
    if (z) return z.ready ? z : null;
    const Z = fe(w, () => {
      const he = o.get(T);
      he && (he.ready = !1), _e({ localOnly: !0 });
    });
    if (!Z || !(Z.complete || Z.width || Z.naturalWidth)) return null;
    const E = Number(Z.naturalWidth || Z.width || 0), N = Number(Z.naturalHeight || Z.height || 0);
    if (E < 1 || N < 1) return null;
    const b = on({ label: "editor.image-pixels" });
    b.width = E, b.height = N;
    const A = b.getContext("2d", { willReadFrequently: !0 });
    if (!A) return null;
    A.clearRect(0, 0, E, N), A.drawImage(Z, 0, 0, E, N);
    const X = A.getImageData(0, 0, E, N).data, ge = { canvas: b, width: E, height: N, alpha: X, ready: !0 };
    return o.set(T, ge), ge;
  }
  function me(w, T) {
    if (!w || !T) return null;
    const z = (w == null ? void 0 : w.bbox) || null;
    if (!z) return null;
    const Z = (w == null ? void 0 : w.transform) || {}, E = {
      u: (Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5,
      v: (Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5
    }, N = {
      u: ((Number(T.u || 0) - Number(Z.du || 0)) % 1 + 1) % 1,
      v: Number(T.v || 0) - Number(Z.dv || 0)
    }, b = D(
      N,
      E,
      Number(Z.scale || 1),
      Number(Z.rot_deg || 0)
    ), A = Number(z.u1 || 0) - Number(z.u0 || 0), X = Number(z.v1 || 0) - Number(z.v0 || 0);
    if (!(A > 1e-6) || !(X > 1e-6)) return null;
    const ge = we(Number(b.u || 0), Number(z.u0 || 0)) / A, he = (Number(b.v || 0) - Number(z.v0 || 0)) / X;
    if (ge < 0 || ge > 1 || he < 0 || he > 1) return 0;
    const xe = ie(w);
    if (!xe) return null;
    const se = Oe(Math.floor(ge * xe.width), 0, xe.width - 1), ke = Oe(Math.floor(he * xe.height), 0, xe.height - 1);
    return Number(xe.alpha[(ke * xe.width + se) * 4 + 3] || 0);
  }
  function ce(w, T, z, Z = null) {
    if (!(T != null && T.visible) || !ei(z, T.corners)) return !1;
    const E = Z || ye(z, performance.now()), N = me(w, E);
    return N === null ? !0 : N > 8;
  }
  function O() {
    var Z, E, N, b, A, X, ge, he;
    const w = ((E = (Z = r.paintEngine) == null ? void 0 : Z.getErpTarget) == null ? void 0 : E.call(Z, g(!1))) || null, T = Math.max(1, Number(((N = w == null ? void 0 : w.descriptor) == null ? void 0 : N.width) || ((A = (b = w == null ? void 0 : w.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : A.width) || 2048)), z = Math.max(1, Number(((X = w == null ? void 0 : w.descriptor) == null ? void 0 : X.height) || ((he = (ge = w == null ? void 0 : w.displayPaint) == null ? void 0 : ge.canvas) == null ? void 0 : he.height) || 1024));
    return { width: T, height: z };
  }
  function L() {
    var ke, j, ae;
    const w = r.interaction;
    if ((w == null ? void 0 : w.kind) !== "paint_stroke") return null;
    const T = (w == null ? void 0 : w.stroke) || null;
    if (!T || String((T == null ? void 0 : T.layerKind) || "") !== "paint" || String((T == null ? void 0 : T.toolKind) || "") !== "eraser") return null;
    const z = u(), Z = `${ve()}:${z.width}:${z.height}`;
    if (((ke = r._activePaintEraserPreviewInfo) == null ? void 0 : ke.cacheKey) === Z)
      return r._activePaintEraserPreviewInfo.value || null;
    const E = dn(T), N = (E == null ? void 0 : E.geometry) || null;
    if (N && String(N.geometryKind || "") !== "lasso_fill") {
      const G = Array.isArray(N.rawPoints) && N.rawPoints.length ? N.rawPoints : Array.isArray(N.points) ? N.points : [];
      N.processedPoints = Y(G, E.targetSpace, !0);
    }
    const b = c(z.width, z.height, { readback: !0 });
    if (!$(b, E, { w: z.width, h: z.height })) return null;
    const A = ((ae = (j = b.ctx) == null ? void 0 : j.getImageData(0, 0, z.width, z.height)) == null ? void 0 : ae.data) || null;
    if (!A) return null;
    let X = z.width, ge = z.height, he = -1, xe = -1;
    for (let G = 0; G < z.height; G += 1)
      for (let te = 0; te < z.width; te += 1)
        A[(G * z.width + te) * 4 + 3] <= 8 || (te < X && (X = te), G < ge && (ge = G), te > he && (he = te), G > xe && (xe = G));
    if (he < X || xe < ge)
      return r._activePaintEraserPreviewInfo = { cacheKey: Z, value: null }, null;
    const se = {
      surface: b,
      bounds: { minX: X, minY: ge, maxX: he, maxY: xe },
      key: `${Z}:${X}:${ge}:${he}:${xe}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: Z, value: se }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), se;
  }
  function M() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function de(w, T, z) {
    var Z, E;
    if (!w) return null;
    if (w.type === "rasterObject" && ((Z = w.item) != null && Z.bbox)) {
      const N = w.item.bbox, b = ((E = w.item) == null ? void 0 : E.transform) || {}, A = Number(N.u0 || 0) + Number(b.du || 0), X = Number(N.u1 || 0) + Number(b.du || 0), ge = Number(N.v0 || 0) + Number(b.dv || 0), he = Number(N.v1 || 0) + Number(b.dv || 0);
      return {
        minX: Math.floor((A % 1 + 1) % 1 * T),
        maxX: Math.ceil((X % 1 + 1) % 1 * T),
        minY: Math.floor(Oe(ge, 0, 1) * z),
        maxY: Math.ceil(Oe(he, 0, 1) * z),
        wraps: X - A >= 1 || A < 0 || X > 1
      };
    }
    if (w.type === "strokeGroup") {
      const N = B(w.actionGroupId, "paint"), b = d(w.actionGroupId, "paint", N);
      if (!b) return null;
      const A = b.centerUv.u - b.halfW, X = b.centerUv.u + b.halfW, ge = b.centerUv.v - b.halfH, he = b.centerUv.v + b.halfH;
      return {
        minX: Math.floor((A % 1 + 1) % 1 * T),
        maxX: Math.ceil((X % 1 + 1) % 1 * T),
        minY: Math.floor(Oe(ge, 0, 1) * z),
        maxY: Math.ceil(Oe(he, 0, 1) * z),
        wraps: X - A >= 1 || A < 0 || X > 1
      };
    }
    return null;
  }
  function Q(w, T, z) {
    if (!w || !T) return !1;
    const Z = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: z - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], E = Z(w), N = Z(T);
    return E.some((b) => N.some((A) => !(b.maxX < A.minX || A.maxX < b.minX || b.maxY < A.minY || A.maxY < b.minY)));
  }
  function R(w, T, z) {
    var U, x, re, ue, F, W, Se;
    if (!w || !T || !((U = z == null ? void 0 : z.surface) != null && U.canvas) || T.type !== "rasterObject") return w;
    const Z = Number(w.width || z.surface.canvas.width || 0), E = Number(w.height || z.surface.canvas.height || 0);
    if (Z < 1 || E < 1) return w;
    const N = de(T, Z, E);
    if (N && !Q(N, z.bounds, Z)) return w;
    const b = String(((x = T.item) == null ? void 0 : x.id) || T.id || ""), A = ((re = T.item) == null ? void 0 : re.transform) || {}, X = `${z.key}:${b}:${Z}:${E}:${Number(A.du || 0).toFixed(6)}:${Number(A.dv || 0).toFixed(6)}:${Number(A.rot_deg || 0).toFixed(3)}:${Number(A.scale || 1).toFixed(4)}`, ge = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (ge.has(X)) return ge.get(X);
    const he = Oe(Math.floor(Number(((ue = z.bounds) == null ? void 0 : ue.minX) || 0)), 0, Math.max(0, Z - 1)), xe = Oe(Math.floor(Number(((F = z.bounds) == null ? void 0 : F.minY) || 0)), 0, Math.max(0, E - 1)), se = Oe(Math.ceil(Number(((W = z.bounds) == null ? void 0 : W.maxX) || 0)), he, Math.max(0, Z - 1)), ke = Oe(Math.ceil(Number(((Se = z.bounds) == null ? void 0 : Se.maxY) || 0)), xe, Math.max(0, E - 1)), j = Math.max(1, se - he + 1), ae = Math.max(1, ke - xe + 1), G = c(Z, E, { readback: !0 });
    G.ctx.clearRect(0, 0, Z, E), G.ctx.drawImage(w, 0, 0);
    const te = G.ctx.getImageData(he, xe, j, ae);
    G.ctx.save(), G.ctx.globalCompositeOperation = "destination-out", G.ctx.drawImage(z.surface.canvas, 0, 0), G.ctx.restore();
    const H = G.ctx.getImageData(he, xe, j, ae);
    let J = !1;
    for (let Me = 0; Me < j * ae; Me += 1) {
      const Ee = te.data[Me * 4 + 3], Re = H.data[Me * 4 + 3];
      if (Ee > Re) {
        J = !0;
        break;
      }
    }
    return J ? (ge.size > 64 && ge.clear(), ge.set(X, G.canvas), G.canvas) : (ge.set(X, w), w);
  }
  function k(w, T = null) {
    const z = C((w == null ? void 0 : w.rasterObjectId) || (w == null ? void 0 : w.id) || ""), Z = (w == null ? void 0 : w.bbox) || null;
    if (!z || !Z) return null;
    const E = fe(w, T);
    if (!E || !(E.complete || E.width || E.naturalWidth)) return null;
    const { width: N, height: b } = O(), A = (w == null ? void 0 : w.transform) || {}, X = [
      z,
      N,
      b,
      Z.u0,
      Z.v0,
      Z.u1,
      Z.v1,
      A.du,
      A.dv,
      A.rot_deg,
      A.scale,
      y()
    ].join(":"), ge = i.get(X);
    if (ge) return ge;
    i.size > 64 && i.clear();
    const he = on({ label: "editor.raster-erp" });
    he.width = N, he.height = b;
    const xe = he.getContext("2d");
    return xe ? (V0(xe, E, w, N, b), i.set(X, he), he) : null;
  }
  async function P(w, T) {
    const z = await new Promise((A) => w.toBlob(A, "image/png")), Z = new FormData();
    Z.append("image", z, T), Z.append("type", "input"), Z.append("subfolder", "panorama_stickers"), Z.append("overwrite", "1");
    const E = await t.fetchApi("/upload/image", { method: "POST", body: Z });
    if (!E || E.status !== 200) throw new Error(`upload failed (${E == null ? void 0 : E.status})`);
    const N = await E.json(), b = String((N == null ? void 0 : N.name) || "").trim();
    if (!b) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: b,
      subfolder: String((N == null ? void 0 : N.subfolder) || "panorama_stickers"),
      storage: String((N == null ? void 0 : N.type) || "input")
    };
  }
  let le = null, q = !1;
  function I() {
    const w = Hp(a.painting), { width: T, height: z } = f();
    return vS(a.painting_layer, { paintCount: w.totalPaintCount, maskCount: w.totalMaskCount, width: T, height: z, nodeId: String(n.id ?? "0") });
  }
  function v() {
    const w = String(n.id ?? "0"), T = ba.get(w);
    if (q && T) return T;
    const z = (async () => {
      var N, b, A, X, ge, he, xe, se, ke, j, ae, G;
      const Z = h(), E = Hp(a.painting);
      if (E.totalPaintCount <= 0 && E.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, le = Z, l());
        return;
      }
      if (le !== Z && !q) {
        q = !0;
        try {
          ne();
          const te = g(!1), H = ((b = (N = r.paintEngine) == null ? void 0 : N.getErpTarget) == null ? void 0 : b.call(N, te)) || null, J = ((A = H == null ? void 0 : H.displayPaint) == null ? void 0 : A.canvas) || null, U = ((X = H == null ? void 0 : H.committedMask) == null ? void 0 : X.canvas) || null, x = Math.max(1, Number(((ge = H == null ? void 0 : H.descriptor) == null ? void 0 : ge.width) || (J == null ? void 0 : J.width) || (U == null ? void 0 : U.width) || 2048)), re = Math.max(1, Number(((he = H == null ? void 0 : H.descriptor) == null ? void 0 : he.height) || (J == null ? void 0 : J.height) || (U == null ? void 0 : U.height) || 1024));
          (!J && E.totalPaintCount > 0 || !U && E.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((xe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : xe.width) || 0) !== x || Number(((se = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : se.height) || 0) !== re) && (r._paintLayerSyncBlankSurface = c(x, re)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, x, re));
          const ue = J || E.totalPaintCount > 0 && ((ke = r._paintLayerSyncBlankSurface) == null ? void 0 : ke.canvas) || null, F = U || E.totalMaskCount > 0 && ((j = r._paintLayerSyncBlankSurface) == null ? void 0 : j.canvas) || null;
          if (!ue && !F) return;
          let W = null, Se = null;
          const Me = [];
          if (E.totalPaintCount > 0) {
            W = await P(ue, `pano_paint_${w}.png`);
            for (const Ee of te) {
              const Re = String(Ee || "").trim();
              if (!Re) continue;
              const je = ((G = (ae = r.paintEngine) == null ? void 0 : ae.getGroupDisplayCanvas) == null ? void 0 : G.call(ae, Re)) || null;
              if (!je) continue;
              const Ke = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ce = await P(je, `pano_group_${w}_${Ke}.png`);
              Ce && Me.push({
                id: Re,
                actionGroupId: Re,
                image: Ce
              });
            }
          }
          E.totalMaskCount > 0 && (Se = await P(F, `pano_mask_${w}.png`)), Z === h() && (a.painting_layer = {
            paint: W,
            mask: Se,
            groups: Me,
            revision: Z
          }, le = Z, l());
        } catch (te) {
          throw te;
        } finally {
          q = !1;
        }
      }
    })();
    return ba.set(w, z), z.finally(() => {
      ba.get(w) === z && ba.delete(w);
    }), z;
  }
  function K(w) {
    var b;
    const T = ((b = r.paintEngine) == null ? void 0 : b.getMaskDisplayCanvas()) || null;
    if (!T) return w;
    const z = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, Z = w.reduce((A, X) => Math.max(A, Number((X == null ? void 0 : X.zIndex) || 0)), -1), E = (Array.isArray(a.stickers) ? a.stickers : []).reduce((A, X) => Math.max(A, Number((X == null ? void 0 : X.z_index) || 0)), -1), N = Math.max(Z, E);
    return w.push({
      id: "mask_display",
      source: T,
      revision: z,
      zIndex: N + 1,
      opacity: 1,
      visible: !0
    }), w;
  }
  function m() {
    var Z, E;
    const w = _(!0), T = L(), z = [];
    for (const N of w) {
      if ((N == null ? void 0 : N.type) === "strokeGroup") {
        const b = String(N.actionGroupId || N.id || "");
        if (!b) continue;
        const A = ((E = (Z = r.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : E.call(Z, b)) || null;
        if (!A) continue;
        z.push({
          id: `paint_group:${b}`,
          source: A,
          revision: `${p()}:${b}`,
          zIndex: Number((N == null ? void 0 : N.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((N == null ? void 0 : N.type) === "rasterObject") {
        const b = N.item || null, A = C((b == null ? void 0 : b.id) || N.id || "");
        if (!A) continue;
        const X = k(b, () => _e());
        if (!X) continue;
        const ge = R(X, N, T), he = (b == null ? void 0 : b.transform) || {};
        z.push({
          id: `raster:${A}`,
          source: ge,
          revision: [
            h(),
            (T == null ? void 0 : T.key) || "",
            A,
            Number(he.du || 0).toFixed(6),
            Number(he.dv || 0).toFixed(6),
            Number(he.rot_deg || 0).toFixed(3),
            Number(he.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((N == null ? void 0 : N.z_index) || 0),
          opacity: 1,
          visible: (b == null ? void 0 : b.visible) !== !1
        });
      }
    }
    return K(z);
  }
  function S() {
    return ee() ? m().filter((w) => w.visible !== !1).map((w) => ({ id: w.id, media: w.source, revision: w.revision, opacity: w.opacity, zIndex: w.zIndex })) : [];
  }
  function V() {
    a.painting_layer !== null && (a.painting_layer = null), le = "";
  }
  return {
    connect(w) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: p,
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: B,
        inverseTransformErpPointAround: D,
        paintingShown: ee,
        parseRasterObjectSelectionId: C,
        processFreehandPoints: Y,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: ne,
        requestDraw: _e,
        screenPosToErpPoint: ye,
        shortestWrappedDelta: we
      } = w);
    },
    getSharedLivePaintSurface: pe,
    getLivePaintRevisionSuffix: ve,
    isPaintCompositeInteraction: be,
    hitRasterObjectAt: ce,
    invalidateLivePaintPreviewCaches: M,
    buildRasterObjectEditCanvas: k,
    needsPaintingLayerSync: I,
    syncPaintingLayerAsync: v,
    invalidatePaintingLayerState: V,
    buildEditorViewPaintLayers: S
  };
}
function cA(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(R) {
    return !R || typeof R != "object" ? { x: 0, y: 0 } : { x: Number((R == null ? void 0 : R.u) || 0), y: Number((R == null ? void 0 : R.v) || 0) };
  }
  function c(R, k, P, le = {}) {
    return { ...{
      ...R,
      t: Number((R == null ? void 0 : R.t) || 0),
      widthScale: f(R, "widthScale", 1),
      pressureLike: f(R, "pressureLike", 1)
    }, ...le, u: k, v: P };
  }
  function d(R, k = !1) {
    return k ? 12e-4 : 18e-4;
  }
  function u(R, k, P = !1) {
    if (!Array.isArray(R) || !R.length) return [];
    const le = String((k == null ? void 0 : k.kind) || "") === "ERP_GLOBAL", q = /* @__PURE__ */ new WeakMap();
    if (le) {
      let E = null;
      R.forEach((N) => {
        const b = Number((N == null ? void 0 : N.u) || 0), A = Number((N == null ? void 0 : N.v) || 0), X = (b % 1 + 1) % 1, ge = E == null ? X : E + a(X, (E % 1 + 1) % 1);
        q.set(N, { x: ge, y: A }), E = ge;
      });
    }
    const I = (E) => !E || typeof E != "object" ? { x: 0, y: 0 } : q.get(E) || l(E), v = (E, N, b, A = {}) => {
      const X = le ? (Number(N) % 1 + 1) % 1 : Number(N), ge = c(E, X, b, A);
      return q.set(ge, { x: Number(N), y: Number(b) }), ge;
    }, K = (E, N, b) => {
      const A = I(E), X = I(N);
      return v(E, Xn(A.x, X.x, b), Xn(A.y, X.y, b), {
        t: Xn(Number((E == null ? void 0 : E.t) || 0), Number((N == null ? void 0 : N.t) || 0), b),
        widthScale: Xn(f(E, "widthScale", 1), f(N, "widthScale", 1), b),
        pressureLike: Xn(f(E, "pressureLike", 1), f(N, "pressureLike", 1), b)
      });
    };
    if (R.length === 1) {
      const E = I(R[0]);
      return [v(R[0], E.x, E.y)];
    }
    const m = d(k, P), S = (E, N) => {
      const b = [0];
      for (let j = 1; j < E.length; j += 1) {
        const ae = I(E[j - 1]), G = I(E[j]);
        b.push(b[j - 1] + Math.hypot(G.x - ae.x, G.y - ae.y));
      }
      const A = b[b.length - 1] || 0;
      if (A <= 1e-8) {
        const j = E[0], ae = I(j);
        return [v(j, ae.x, ae.y)];
      }
      const X = [];
      let ge = 0;
      for (let j = 0; j <= A + 1e-9; j += N) {
        for (; ge < b.length - 2 && b[ge + 1] < j; ) ge += 1;
        const ae = b[ge], G = b[ge + 1], te = Math.max(1e-8, G - ae);
        X.push(K(E[ge], E[ge + 1], Oe((j - ae) / te, 0, 1)));
      }
      const he = E[E.length - 1], xe = I(he), se = X[X.length - 1], ke = se ? I(se) : null;
      return (!ke || Math.hypot(ke.x - xe.x, ke.y - xe.y) > N * 0.35) && X.push(v(he, xe.x, xe.y)), X;
    }, V = (E) => {
      if (!Array.isArray(E) || E.length < 3) return E ? E.slice() : [];
      const N = I(E[0]), b = [v(E[0], N.x, N.y)];
      for (let ge = 0; ge < E.length - 1; ge += 1) {
        const he = E[ge], xe = E[ge + 1], se = I(he), ke = I(xe), j = v(
          he,
          se.x * 0.75 + ke.x * 0.25,
          se.y * 0.75 + ke.y * 0.25,
          {
            t: Number(he.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: f(he, "widthScale", 1) * 0.75 + f(xe, "widthScale", 1) * 0.25,
            pressureLike: f(he, "pressureLike", 1) * 0.75 + f(xe, "pressureLike", 1) * 0.25
          }
        ), ae = v(
          he,
          se.x * 0.25 + ke.x * 0.75,
          se.y * 0.25 + ke.y * 0.75,
          {
            t: Number(he.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: f(he, "widthScale", 1) * 0.25 + f(xe, "widthScale", 1) * 0.75,
            pressureLike: f(he, "pressureLike", 1) * 0.25 + f(xe, "pressureLike", 1) * 0.75
          }
        );
        b.push(j, ae);
      }
      const A = E[E.length - 1], X = I(A);
      return b.push(v(A, X.x, X.y)), b;
    }, w = S(R, m);
    if (w.length < 3) return w;
    const T = P ? 2 : 1;
    let z = w.slice();
    for (let E = 0; E < T; E += 1) z = V(z);
    return S(z, Math.max(m * 0.75, 55e-5));
  }
  function f(R, k, P = 1) {
    const le = Number(R == null ? void 0 : R[k]);
    return Number.isFinite(le) ? Math.max(0, le) : P;
  }
  function p(R) {
    const k = Number(R == null ? void 0 : R.radiusValue);
    if (Number.isFinite(k) && k > 0) {
      const P = String((R == null ? void 0 : R.radiusModel) || "").trim() || "erp_uv_norm";
      return P === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((R == null ? void 0 : R.size) || 10) * 0.5 / 2048)
      } : {
        model: P,
        value: k
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((R == null ? void 0 : R.size) || 10) * 0.5 / 2048)
    };
  }
  function _(R, k, P = {}) {
    const le = on({ label: "editor.raster-surface" });
    le.width = Math.max(1, Math.round(R)), le.height = Math.max(1, Math.round(k));
    const q = le.getContext("2d", P.readback ? { willReadFrequently: !0 } : void 0);
    return q && (q.clearRect(0, 0, le.width, le.height), q.imageSmoothingEnabled = !0), { canvas: le, ctx: q };
  }
  function g() {
    const R = ye();
    return `${String(t.paintStrokeRevision)}:${R.width}x${R.height}`;
  }
  function h() {
    const R = ye();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${R.width}x${R.height}`;
  }
  function y() {
    const R = i(), k = h();
    return R ? `${k}:${R}` : k;
  }
  function B() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function D() {
    t.paintCompositeRevision += 1;
  }
  function ee() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var R, k;
    t.paintEngineRevisionKey = null, (k = (R = t.paintEngine) == null ? void 0 : R.rebuildCommitted) == null || k.call(R, n), t.paintEngineRevisionKey = g();
  }
  function Y() {
    ee(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function $({ rebuildPaintEngine: R = !1 } = {}) {
    o(), B(), Y(), R && C();
  }
  function ne() {
    o(), D(), Y();
  }
  function _e() {
    var le;
    const R = ye(), k = `${R.width}x${R.height}`;
    t.paintEngineDescriptorKey !== k && (t.paintEngine = Vl(R), t.paintEngineDescriptorKey = k, t.paintEngineRevisionKey = "");
    const P = g();
    t.paintEngineRevisionKey !== P && (t.paintEngineRevisionKey = P, (le = t.paintEngine) == null || le.rebuildCommitted(n));
  }
  function ye() {
    const R = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: R,
      height: Math.max(1, Math.round(R * 0.5))
    };
  }
  function we() {
    return ye();
  }
  function be(R, k, P, le, q = null) {
    const I = p(R), v = f(k, "widthScale", 1) * f(k, "pressureLike", 1);
    return I.model === "erp_uv_norm" ? Math.max(0.5, I.value * P * v) : I.model === "world_angle" ? q ? Math.max(0.5, I.value / Math.max(1e-6, Number(q.hFOV_deg || 90) * Nr) * P * v) : Math.max(0.5, I.value / (2 * Math.PI) * P * v) : Math.max(0.5, Number((R == null ? void 0 : R.size) || 10) * 0.5 * v);
  }
  function pe(R, k, P = {}) {
    const le = String((k == null ? void 0 : k.layerKind) || "paint"), q = String((k == null ? void 0 : k.toolKind) || "pen"), I = P.preview === !0, v = I ? 0.78 : 1;
    if (R.globalAlpha = q === "marker" ? 0.7 * v : 1, le === "mask") {
      R.fillStyle = I ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (q === "eraser") {
      R.globalCompositeOperation = "destination-out", R.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const K = String((k == null ? void 0 : k.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, m = I ? Math.max(0.28, Number(K.a ?? 1) * 0.88) : Math.max(0.12, Number(K.a ?? 1));
    R.fillStyle = `rgba(${Math.round(Number(K.r || 0) * 255)}, ${Math.round(Number(K.g || 0) * 255)}, ${Math.round(Number(K.b || 0) * 255)}, ${m})`;
  }
  function ve(R, k, P) {
    const le = Math.max(0.5, Math.min(P, Number((k == null ? void 0 : k.radiusPx) || 0.5)));
    !Number.isFinite(k == null ? void 0 : k.x) || !Number.isFinite(k == null ? void 0 : k.y) || !Number.isFinite(le) || (R.beginPath(), R.arc(Number(k.x || 0), Number(k.y || 0), le, 0, Math.PI * 2), R.fill());
  }
  function fe(R, k, P, le, q = {}) {
    if (!R || !Array.isArray(k) || !k.length) return;
    const I = Math.max(le.w, le.h) * 0.25;
    R.save(), pe(R, P, q);
    const v = (K) => ve(R, K, I);
    if (k.length === 1) {
      v(k[0]), R.restore();
      return;
    }
    for (let K = 0; K < k.length - 1; K += 1) {
      const m = k[K], S = k[K + 1];
      if (!m || !S) continue;
      const V = Number(m.x || 0), w = Number(m.y || 0), T = Number(S.x || 0), z = Number(S.y || 0), Z = Math.max(0.5, Math.min(I, Number(m.radiusPx || 0.5))), E = Math.max(0.5, Math.min(I, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(V) || !Number.isFinite(w) || !Number.isFinite(T) || !Number.isFinite(z) || !Number.isFinite(Z) || !Number.isFinite(E)) continue;
      const N = T - V, b = z - w, A = Math.hypot(N, b);
      if (!Number.isFinite(A) || A < 1e-6) {
        v(m);
        continue;
      }
      if (A > Math.max(le.w, le.h) * 0.5) continue;
      const X = Math.max(0.5, Math.min(Z, E)), ge = Math.max(0.35, Math.min(X * 0.4, 2.25)), he = Math.max(1, Math.ceil(A / ge));
      for (let xe = 0; xe <= he; xe += 1) {
        const se = xe / he;
        v({
          x: Xn(V, T, se),
          y: Xn(w, z, se),
          radiusPx: Xn(Z, E, se)
        });
      }
    }
    v(k[k.length - 1]), R.restore();
  }
  function ie(R, k, P, le) {
    fe(R, k, P, le, { preview: !1 });
  }
  function me(R, k, P, le, q) {
    var K, m, S, V;
    if (!R || !Array.isArray(k) || k.length < 3) return;
    const I = "u", v = "v";
    if (R.save(), String((P == null ? void 0 : P.layerKind) || "") === "mask")
      R.fillStyle = "rgba(255,255,255,1)";
    else if (String((P == null ? void 0 : P.toolKind) || "") === "eraser")
      R.globalCompositeOperation = "destination-out", R.fillStyle = "rgba(0,0,0,1)";
    else {
      const w = (P == null ? void 0 : P.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      R.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${Number(w.a ?? 1)})`;
    }
    R.beginPath(), R.moveTo(Number(((K = k[0]) == null ? void 0 : K[I]) || 0) * le.w, Number(((m = k[0]) == null ? void 0 : m[v]) || 0) * le.h);
    for (let w = 1; w < k.length; w += 1)
      R.lineTo(Number(((S = k[w]) == null ? void 0 : S[I]) || 0) * le.w, Number(((V = k[w]) == null ? void 0 : V[v]) || 0) * le.h);
    R.closePath(), R.fill(), R.restore();
  }
  function ce(R) {
    const k = (R == null ? void 0 : R.geometry) || null;
    return k ? String(k.geometryKind || "") === "lasso_fill" ? Array.isArray(k.points) ? k.points : [] : Array.isArray(k.processedPoints) && k.processedPoints.length ? k.processedPoints : Array.isArray(k.rawPoints) && k.rawPoints.length ? k.rawPoints : Array.isArray(k.points) ? k.points : [] : [];
  }
  function O(R, k) {
    const P = ce(R);
    return !Array.isArray(P) || !P.length ? [] : P.map((le) => ({
      x: Number((le == null ? void 0 : le.u) || 0) * Number((k == null ? void 0 : k.w) || 1),
      y: Number((le == null ? void 0 : le.v) || 0) * Number((k == null ? void 0 : k.h) || 1),
      radiusPx: be(R, le, Number((k == null ? void 0 : k.w) || 1), Number((k == null ? void 0 : k.h) || 1))
    }));
  }
  function L(R, k, P = null) {
    var K, m, S, V;
    if (!(R != null && R.ctx) || !k) return !1;
    const le = P || { w: Number(((K = R.canvas) == null ? void 0 : K.width) || 0), h: Number(((m = R.canvas) == null ? void 0 : m.height) || 0) }, q = String((k == null ? void 0 : k.toolKind) || "") === "eraser" ? {
      ...k,
      layerKind: "mask",
      toolKind: String(((S = k == null ? void 0 : k.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : k;
    if (String(((V = k == null ? void 0 : k.geometry) == null ? void 0 : V.geometryKind) || "") === "lasso_fill")
      return me(R.ctx, ce(q), q, le), !0;
    const v = O(q, le);
    return v.length ? (ie(R.ctx, v, q, le), !0) : !1;
  }
  function M(R, k, P, le = 8) {
    const q = new Uint8Array(k * P), I = [], v = new Int32Array(k * P), K = new Int32Array(k * P);
    for (let m = 0; m < P; m += 1)
      for (let S = 0; S < k; S += 1) {
        const V = m * k + S;
        if (q[V] || R[V] <= le) continue;
        let w = 0, T = 0;
        v[T] = S, K[T] = m, T += 1, q[V] = 1;
        const z = [];
        let Z = S, E = m, N = S, b = m;
        for (; w < T; ) {
          const A = v[w], X = K[w];
          w += 1, z.push({ x: A, y: X }), A < Z && (Z = A), X < E && (E = X), A > N && (N = A), X > b && (b = X);
          const ge = [
            [(A - 1 + k) % k, X],
            [(A + 1) % k, X],
            [A, X - 1],
            [A, X + 1]
          ];
          for (const [he, xe] of ge) {
            if (xe < 0 || xe >= P) continue;
            const se = xe * k + he;
            q[se] || R[se] <= le || (q[se] = 1, v[T] = he, K[T] = xe, T += 1);
          }
        }
        I.push({ pixels: z, minX: Z, minY: E, maxX: N, maxY: b });
      }
    return I;
  }
  function de(R, k) {
    const P = [...new Set((Array.isArray(R == null ? void 0 : R.pixels) ? R.pixels : []).map((m) => Number((m == null ? void 0 : m.x) || 0)).filter((m) => Number.isFinite(m)))].sort((m, S) => m - S);
    if (!P.length) return null;
    if (P.length === 1)
      return { startX: P[0], widthPx: 1 };
    let le = -1, q = 0;
    for (let m = 0; m < P.length; m += 1) {
      const S = P[m], w = (m === P.length - 1 ? P[0] + k : P[m + 1]) - S - 1;
      w > le && (le = w, q = m);
    }
    const I = (P[(q + 1) % P.length] + k) % k;
    let v = 1 / 0, K = -1 / 0;
    for (const m of P) {
      const S = (m - I + k) % k;
      v = Math.min(v, S), K = Math.max(K, S);
    }
    return {
      startX: I,
      widthPx: Math.max(1, K - v + 1)
    };
  }
  function Q(R, k, P = {}) {
    var S;
    const le = Number((R == null ? void 0 : R.width) || 0), q = Number((R == null ? void 0 : R.height) || 0), I = (S = R == null ? void 0 : R.getContext) == null ? void 0 : S.call(R, "2d");
    if (!I || le < 1 || q < 1) return [];
    const v = I.getImageData(0, 0, le, q), K = new Uint8Array(le * q);
    for (let V = 0; V < K.length; V += 1) K[V] = v.data[V * 4 + 3];
    return M(K, le, q, 8).map((V, w) => {
      const T = de(V, le);
      if (!T) return null;
      const z = Number(T.widthPx || 0), Z = V.maxY - V.minY + 1, E = Number(T.startX || 0), N = on({ label: "editor.lasso-fill" });
      N.width = z, N.height = Z;
      const b = N.getContext("2d");
      if (!b) return null;
      const A = b.createImageData(z, Z);
      return V.pixels.forEach(({ x: X, y: ge }) => {
        const he = (ge * le + X) * 4, xe = (Number(X || 0) - E + le) % le, se = ((ge - V.minY) * z + xe) * 4;
        A.data[se + 0] = v.data[he + 0], A.data[se + 1] = v.data[he + 1], A.data[se + 2] = v.data[he + 2], A.data[se + 3] = v.data[he + 3];
      }), b.putImageData(A, 0, 0), {
        id: io("raster"),
        type: "raster_frozen",
        layerKind: k === "mask" ? "mask" : "paint",
        z_index: Number((P == null ? void 0 : P.z_index) || 0) + w * 1e-3,
        locked: (P == null ? void 0 : P.locked) === !0,
        bbox: {
          u0: 0,
          v0: V.minY / q,
          u1: z / le,
          v1: (V.maxY + 1) / q
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: E / le,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(R) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = R);
    },
    processFreehandPoints: u,
    createRasterSurface: _,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: Y,
    markPaintStrokeVisualsDirty: $,
    markPaintCompositeVisualsDirty: ne,
    rebuildPaintEngineIfNeeded: _e,
    getDesiredPaintTargetDescriptor: ye,
    getActivePaintTargetDescriptor: we,
    rasterizeStrokeToSurface: L,
    createRasterFrozenObjectsFromCanvas: Q
  };
}
function uA(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, p, _, g, h = { stored: null, shown: null, handoff: null, fps: null };
  function y(O, L = null) {
    var M;
    if (O && typeof O == "object" && !Array.isArray(O)) return O;
    if (Array.isArray(O) && O.length > 0) {
      const de = O[0];
      if (de && typeof de == "object" && !Array.isArray(de)) return de;
    }
    if (Array.isArray(L) && L.length > 0) {
      const de = (M = L[0]) == null ? void 0 : M.parsed_state;
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
  function B(O, L, M) {
    const de = Math.max(1, Number(L || 1)), Q = Math.max(1, Number(M || 1)), R = Oe(Number(O || 30), 0.1, 179) * Nr, k = 2 * Math.atan(Math.tan(R * 0.5) * (Q / de));
    return Oe(k * Vi, 0.1, 179);
  }
  function D(O) {
    const L = String(O || "").trim();
    if (!L) return null;
    try {
      const M = JSON.parse(L);
      if (!M || typeof M != "object" || String(M.kind || "") !== "pano_sticker_state") return null;
      const de = M.version;
      let Q = null;
      if (typeof de == "number" && Number.isInteger(de) ? Q = de : typeof de == "string" && /^\d+$/.test(de) && (Q = Number.parseInt(de, 10)), Q !== 1) return null;
      const R = M.pose;
      if (!R || typeof R != "object") return null;
      const k = Number(R.yaw_deg), P = Number(R.pitch_deg), le = Number(R.roll_deg), q = Number(R.hFOV_deg);
      if (![k, P, le, q].every((m) => Number.isFinite(m))) return null;
      let I = ((k + 180) % 360 + 360) % 360 - 180;
      Object.is(I, -0) && (I = 0);
      const v = {
        yaw_deg: I,
        pitch_deg: Oe(P, -89.9, 89.9),
        roll_deg: le,
        hFOV_deg: Oe(q, 0.1, 179)
      }, K = Number(M.source_aspect);
      return Number.isFinite(K) && K > 0 && (v.source_aspect = K), v;
    } catch {
      return null;
    }
  }
  function ee(O) {
    const L = Number(O == null ? void 0 : O.yaw_deg), M = Number(O == null ? void 0 : O.pitch_deg), de = Number((O == null ? void 0 : O.roll_deg) ?? (O == null ? void 0 : O.rot_deg)), Q = Number(O == null ? void 0 : O.hFOV_deg), R = zi(O);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(L) ? L : 0),
        pitch_deg: Oe(Number.isFinite(M) ? M : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(de) ? de : 0,
        hFOV_deg: Oe(Number.isFinite(Q) ? Q : 90, 0.1, 179)
      },
      source_aspect: R
    };
  }
  function C(O) {
    var P;
    if (!O || typeof O != "object") return ee(null);
    const L = Number(O == null ? void 0 : O.yaw_deg), M = Number(O == null ? void 0 : O.pitch_deg), de = Number((O == null ? void 0 : O.roll_deg) ?? (O == null ? void 0 : O.rot_deg)), Q = Number(O == null ? void 0 : O.hFOV_deg), R = Number(O == null ? void 0 : O.vFOV_deg);
    let k = 1;
    if (Number.isFinite(Q) && Number.isFinite(R)) {
      const le = Oe(Q, 0.1, 179) * Nr, q = Oe(R, 0.1, 179) * Nr, I = Math.tan(q * 0.5);
      if (Math.abs(I) > 1e-6) {
        const v = Math.tan(le * 0.5) / I;
        Number.isFinite(v) && v > 0 && (k = v);
      }
    }
    if (O != null && O.asset_id && ((P = o == null ? void 0 : o.assets) != null && P[O.asset_id])) {
      const le = o.assets[O.asset_id], q = Number((le == null ? void 0 : le.w) || 0), I = Number((le == null ? void 0 : le.h) || 0);
      q > 0 && I > 0 && (k = q / I);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(L) ? L : 0),
        pitch_deg: Oe(Number.isFinite(M) ? M : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(de) ? de : 0,
        hFOV_deg: Oe(Number.isFinite(Q) ? Q : 30, 0.1, 179)
      },
      source_aspect: k
    };
  }
  function Y(O) {
    return t.linkedValue(n, O);
  }
  function $(O, L, M) {
    const de = O && typeof O == "object" ? {
      yaw_deg: Number(O.yaw_deg || 0),
      pitch_deg: Number(O.pitch_deg || 0),
      roll_deg: Number(O.rot_deg ?? O.roll_deg ?? 0),
      hFOV_deg: Number(O.hFOV_deg || 30)
    } : D(L);
    if (de) {
      const k = Number((M == null ? void 0 : M.naturalWidth) || (M == null ? void 0 : M.width) || de.source_aspect || 1), P = Number((M == null ? void 0 : M.naturalHeight) || (M == null ? void 0 : M.height) || 1);
      return {
        yaw_deg: Number(de.yaw_deg || 0),
        pitch_deg: Number(de.pitch_deg || 0),
        hFOV_deg: Number(de.hFOV_deg || 30),
        vFOV_deg: B(de.hFOV_deg, k, P),
        rot_deg: Number(de.roll_deg || 0)
      };
    }
    const Q = Number((M == null ? void 0 : M.naturalWidth) || (M == null ? void 0 : M.width) || 1), R = Number((M == null ? void 0 : M.naturalHeight) || (M == null ? void 0 : M.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: B(30, Q, R),
      rot_deg: 0
    };
  }
  function ne() {
    const O = Lt(n, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return Vg(o, Lg(n, { pose: O, handoff: _e() }));
  }
  function _e() {
    return Lt(n, "sticker-handoff") ? B_(n, c("pano_sticker_handoff")) : null;
  }
  function ye() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function we(O, L, M) {
    return structuredClone(Mo(Vn({ version: 2, timeline: { fps: L }, stickers: [O] }), M).stickers[0]);
  }
  function be({ record: O = !0, restored: L = !1 } = {}) {
    var le;
    if (!ye()) return !1;
    const M = o.stickers.find((q) => {
      var I;
      return ((I = q.source) == null ? void 0 : I.kind) === "port";
    });
    if (!M)
      return h = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: de } = o.timeline;
    let Q;
    if (L || !h.handoff || ((le = h.stored) == null ? void 0 : le.id) !== M.id)
      Q = structuredClone(M);
    else {
      const q = (I) => h.fps === de ? I : we(I, h.fps, de);
      O && H_(M, q(h.shown)), Q = G_(M, q(h.stored));
    }
    const R = _e(), k = R ? Dd(o, Q, R) : structuredClone(Q), P = JSON.stringify(k) !== JSON.stringify(M);
    if (P) {
      for (const q of Object.keys(M)) delete M[q];
      Object.assign(M, k);
    }
    return h = { stored: Q, shown: structuredClone(k), handoff: R, fps: de }, P;
  }
  function pe() {
    return h.handoff ? { ...o, stickers: o.stickers.map((O) => {
      var L;
      return ((L = O.source) == null ? void 0 : L.kind) === "port" ? h.stored : O;
    }) } : o;
  }
  function ve(O) {
    var de;
    if (!ye() || ((de = O == null ? void 0 : O.source) == null ? void 0 : de.kind) !== "port") return null;
    const { handoff: L } = h, M = !!L && L.placement === O.placement;
    return bo[O.placement].map((Q) => ({ name: Q, overridden: M && O.handoff_overrides.includes(Q) }));
  }
  function fe(O) {
    be();
    const L = o.stickers.find((M) => {
      var de;
      return ((de = M.source) == null ? void 0 : de.kind) === "port";
    });
    !L || L.locked || !h.handoff || !K_(o, L, h.handoff, O) || (h.shown = structuredClone(L), h.stored[O] = structuredClone(L[O]), f(), a(), u(), g(), p());
  }
  function ie() {
    var P;
    const O = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((le) => String((le == null ? void 0 : le.name) || "") === "sticker_image") : -1, L = O >= 0 ? ((P = n.getInputLink(O)) == null ? void 0 : P.id) ?? null : null, M = l(() => {
      oi(n, "image-loaded");
    }), de = y(c("pano_sticker_input_pose"), null), Q = Y("sticker_state"), R = t.externalStateHash(n, Q), k = L == null ? null : $(de, Q, M);
    return Dg(o, {
      connected: L != null,
      linkId: L,
      stateHash: R,
      pose: k,
      imageWidth: Number((M == null ? void 0 : M.naturalWidth) || (M == null ? void 0 : M.width) || 0),
      imageHeight: Number((M == null ? void 0 : M.naturalHeight) || (M == null ? void 0 : M.height) || 0)
    });
  }
  function me(O = "sync") {
    if (s !== "stickers" || i) return;
    const L = n.__panoSceneStateV2 ? ne() : ie();
    if (L.changed) {
      const M = o.stickers.find(d);
      o.stickers = L.state.stickers, o.active = L.state.active, M && r.selectedId === M.id && !o.stickers.some((de) => de.id === M.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), _();
    } else be({ restored: O === "open" }) ? (u(), g()) : O === "image-loaded" && g();
    p();
  }
  function ce() {
    const O = Array.isArray(o.stickers) ? o.stickers : [], L = [];
    for (const M of O)
      d(M) && (M.visible = !1, L.push(M));
    return L;
  }
  return {
    connect(O) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: p,
        updateSelectionMenu: _,
        updateSidePanel: g
      } = O);
    },
    computeStickerVFov: B,
    buildCanonicalCutoutStickerState: ee,
    buildCanonicalSelectedStickerState: C,
    reconcileExternalStickerFromInputs: me,
    collectExternalStickersForClearAll: ce,
    syncPortHandoff: be,
    storedEditorState: pe,
    portHandoffLanes: ve,
    revertPortHandoffLane: fe
  };
}
function no(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function dA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function fA({
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
  var D, ee;
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
    historyEntries: Array.from({ length: 8 }, (C, Y) => ({ index: Y, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((D = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : D.id) || "", f = !u, p = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((ee = e.customPaintColor) == null ? void 0 : ee.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[g] ?? 10, y = l(), B = Array.from({ length: 8 }, (C, Y) => e.customPaintHistory[Y] || null);
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
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: B.map((C, Y) => ({
      index: Y,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function pA({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const hA = {
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
function mA(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = hA[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Kc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function gA({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? We.eye : We.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function K0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function yA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function bA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const So = "erp", vA = ["1:1", "4:3", "3:2", "16:9"];
function W0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...vA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: So, label: Number(r) === 180 ? "180°" : "360°", active: e === So }] : []
  ];
}
const SA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, _A = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, wA = { ...SA, opacity: "Opacity" };
function ef(e) {
  return `Upstream · ${e}`;
}
function kA({ layer: e, editable: t, locked: r, readOnly: n, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !n && t && !r && !!o, c = (d) => !n && !r && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${ef(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: _A[i].map((d) => ({
      name: d,
      label: wA[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function xA({
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
  upstream: d = null
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
    rows: mA(s),
    notes: a,
    upstream: d,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function MA({
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
  cameraShot: _ = !1,
  coverage: g = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: h = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (r.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), d(t)) {
      const B = f(), D = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: B ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !B
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: D ? "Show" : "Hide",
        tip: D ? "Show input image" : "Hide input image",
        icon: D ? p.eye : p.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed }), (!d(t) || h) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!c,
        choices: W0(l, { erp: _, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === So }
    ], _ ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    );
  return h && (y = y.map((B) => ({
    ...B,
    disabled: B.key === "toggle-lock" ? !h.editable : B.key === "delete" ? !h.editable || !!B.disabled : !0
  }))), U0(i.corners, y);
}
const Gp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function NA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Gp.filter((s) => s.cameraTip) : Gp;
  return U0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: We.delete }] : []
  ]);
}
function PA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = d + 18, _ = c - 18 - r;
  let g;
  return p <= f ? g = Math.max(p, 14) : _ >= 14 ? g = Math.min(_, f) : g = Math.min(Math.max(p, 14), f), { left: u, top: g };
}
function U0(e, t) {
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
const B0 = "painting";
function AA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const CA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function IA(e, { span: t, portBarEnd: r = () => null, selection: n, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [] }) {
  const p = (h, y, B, D, ee, C, { keyable: Y = !0, hideable: $ = !0, origin: ne = null } = {}) => {
    const _e = (ye) => (n == null ? void 0 : n.owner) === h && n.lane === ye ? n.frames.map((we) => we + C) : [];
    return {
      id: h,
      label: B,
      icon: D,
      clip: ee,
      selected: h === i,
      hideable: $,
      visible: y.visible,
      ...Kp(ne),
      keyable: Y,
      open: Y && s.has(h),
      keys: X1(y).map((ye) => ({ frame: ye.frame + C, full: ye.full })),
      selectedFrames: _e(null),
      lanes: (Y ? No(y) : []).map((ye) => ({
        key: `${h}:${ye}`,
        lane: ye,
        label: CA[ye],
        frames: y[ye].keyframes.map((we) => we.frame + C),
        selectedFrames: _e(ye)
      }))
    };
  }, _ = ({ start: h, in: y, duration: B }, D = null) => ({ clip: { start: h, end: B === null ? D : h + B }, offset: h - y }), g = (h, { idOf: y = (ee) => ee, sceneRow: B, origin: D = null }) => {
    const ee = h.stickers.filter((Y) => Y.placement === "sky").sort((Y, $) => $.z_index - Y.z_index), C = h.stickers.filter((Y) => Y.placement === "world");
    return [
      ...[...ee, ...C].map((Y) => {
        const { clip: $, offset: ne } = _(Y.clip, r(Y)), _e = Wm(D ? { ...Y, id: Y.origin.id } : Y);
        return p(Y.id, Y, _e, We.image, $, ne, { origin: D && { ...D, overridden: D.stickerOverridden(Y) } });
      }),
      ...AA(h.painting) || !h.painting_visible ? [{
        id: y(B0),
        label: "Paint",
        icon: We.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: h.painting_visible,
        ...Kp(D && { ...D, overridden: D.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...B || il(h.scene) ? [(() => {
        const { clip: Y, offset: $ } = _(h.scene.clip);
        return p(y("scene"), h.scene, "Scene", We.box, Y, $, {
          keyable: !1,
          origin: D && { ...D, overridden: D.sceneOverridden }
        });
      })()] : []
    ];
  };
  return {
    visible: !0,
    expanded: o,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    // A Timeline of one frame has nothing to play.
    playable: t > 1,
    fps: e.timeline.fps,
    fpsLocked: l,
    length: e.timeline.length,
    rows: [
      ...c ? [p("camera", e.camera, "Camera", We.camera, null, 0, { hideable: d })] : [],
      ...g(e, { sceneRow: u })
    ],
    groups: f.map(({ key: h, sceneState: y, editable: B, record: D, scene: ee, deleted: C }) => ({
      key: h,
      label: `${ef(h)}${B ? "" : " · inherited only"}`,
      revert: { disabled: !B || !Xg(D) },
      restore: { label: `Restore deleted (${C})`, disabled: !B || C === 0 },
      rows: g(y, {
        idOf: (Y) => _u(h, Y),
        sceneRow: ee || !y.scene.visible,
        origin: {
          editable: B,
          stickerOverridden: (Y) => !!(D != null && D.stickers.some(($) => $.id === Y.origin.id && $.placement === Y.placement)),
          paintingOverridden: !!D && Object.hasOwn(D, "painting_visible"),
          sceneOverridden: !!D && Object.keys(D.scene).length > 0
        }
      })
    }))
  };
}
function Kp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function EA(e, t, r, n) {
  const i = eS(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const OA = 4, FA = 0.25, Y0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function q0(e) {
  return Object.hasOwn(Y0, e);
}
function X0(e, t, r) {
  const { forward: n, right: i } = ji(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function TA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return q0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
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
        const [a, l] = Y0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? OA : 1) * (r ? FA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const DA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), LA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function RA(e) {
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
function Wp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function VA(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return DA.has(r) && (r !== "frame" || t) && LA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Wp(s, -89.9, 89.9) && Wp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const $A = 250, zA = 600, jA = 180, HA = 2;
function GA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Jo(e, t, r) {
  return e + (t - e) * r;
}
function KA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(sd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / jA + i / HA);
  return Math.round(Jo($A, zA, o));
}
function WA(e, t, r) {
  const n = GA(Oe(r, 0, 1));
  return {
    position: e.position.map((i, o) => Jo(i, t.position[o], n)),
    yaw_deg: Kt(e.yaw_deg + sd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Jo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Jo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Jo(e.distance, t.distance, n)
  };
}
function UA(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(sd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function BA(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return UA(e, t) ? null : { from: e, to: t, startTs: r, durationMs: KA(e, t, n), end: i };
}
function YA(e, t) {
  const r = Oe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: WA(e.from, e.to, r), done: !1 };
}
function xl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function qA(e, t, r) {
  const n = xl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function XA(e) {
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
  let _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be = null;
  function pe(j, ae = null) {
    const G = k();
    ne(() => {
      i.viewTransition = BA(G, j, performance.now(), { scale: V(), end: ae });
    }), !i.viewTransition && ae && ve(ae), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, ye(), Y({ localOnly: !0, reason: pt.VIEW });
  }
  function ve(j) {
    Q(du({ ...de(), moved: j.moved }, j.mode, P())), a.backgroundDirty = !0;
  }
  function fe() {
    i.viewTransition && (i.viewTransition = null, ye());
  }
  function ie(j, ae) {
    pe({ ...k(), yaw_deg: j, pitch_deg: ae });
  }
  function me() {
    return !f || q() && !B();
  }
  function ce() {
    return i.mode === "pano" && O();
  }
  function O() {
    return u && XS({ sceneLinked: l && !!Bl(s).scene, files: $(), stickers: d.stickers });
  }
  function L() {
    return i.spaceMode === "6dof" && ce();
  }
  function M() {
    var j, ae, G;
    return xk((G = (ae = (j = t.ui) == null ? void 0 : j.settings) == null ? void 0 : ae.getSettingValue) == null ? void 0 : G.call(ae, f0));
  }
  function de() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function Q(j) {
    i.spaceMode = j.mode, i.viewPosition = j.position, i.viewMoved = j.moved;
  }
  function R(j) {
    var G;
    const ae = qA(i.spaceMode, i.viewTransition, j);
    if (ae !== "keep") {
      if (ae === "return") {
        pe({ ...k(), position: P(), distance: ((G = m()) == null ? void 0 : G.radius) || fr }, { mode: j, moved: !1 });
        return;
      }
      fe(), Q(du({ ...de(), position: k().position }, j, P())), a.backgroundDirty = !0, ye(), Y({ localOnly: !0, reason: pt.VIEW });
    }
  }
  function k() {
    var G;
    const j = i.viewMoved ? i.viewDistance : ((G = m()) == null ? void 0 : G.radius) || fr, ae = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: j };
    return KS(i.spaceMode, ae, P());
  }
  function P() {
    return q() ? K().position : [0, 0, 0];
  }
  function le() {
    return r && d.camera !== null;
  }
  function q() {
    return le() && d.camera.visible;
  }
  function I() {
    return d.painting_visible !== !1;
  }
  function v(j) {
    return j.visible && xo(j.clip, i.frame);
  }
  function K() {
    return zl(d.camera, i.frame);
  }
  function m() {
    var ae;
    const j = _();
    return ((ae = j.space ?? j.content) == null ? void 0 : ae.sphere) ?? null;
  }
  function S(j) {
    i.viewPosition = j.position, i.viewYaw = j.yaw_deg, i.viewPitch = j.pitch_deg, i.viewDistance = j.distance, i.viewMoved = !0, a.backgroundDirty = !0, Y({ localOnly: !0, reason: pt.VIEW });
  }
  function V() {
    var j;
    return ((j = m()) == null ? void 0 : j.radius) || fr;
  }
  function w() {
    var ue;
    const j = _().space, ae = g(), G = i.worldSelectedId || i.selectedId, te = ae.stickers.findIndex((F) => F.id === G), H = te < 0 ? _e(G) : null, J = te < 0 ? (ue = j.upstreamItems.find((F) => {
      var W;
      return ((W = F.request) == null ? void 0 : W.id) === G;
    })) == null ? void 0 : ue.request : j.sticker, U = te < 0 && !Ut(H) ? null : {
      sticker: H ?? ae.stickers[te],
      value: H ? Wr(H, i.frame) : Fs(ae, i.frame).stickers[te],
      plane: [...j.stickers, ...j.upstreamStickers].find((F) => F.id === G) ?? null,
      item: (J == null ? void 0 : J.id) === G && J.url ? { kind: J.kind, box: o.sceneBox(J.url) } : null
    }, x = y() ? xe() : e_(m(), U);
    if (!x) return;
    const re = k();
    i.viewDistance = re.distance, i.viewMoved = !0, pe(qS(re, x, n.width, n.height));
  }
  function T(j) {
    return o.pickSurface(ke(), j.x, j.y, n.width, n.height);
  }
  function z(j, ae) {
    var G;
    return fu(j, ae, i.viewMoved ? null : (G = m()) == null ? void 0 : G.center, V());
  }
  function Z() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function E(j, ae) {
    const G = performance.now(), te = { x: j.x, y: j.y, time: G, key: o.contentRevision(), view: Z() };
    if (!Xm(be, te)) {
      const J = T(j);
      be = { ...te, cost: performance.now() - G, hit: J };
    }
    const H = k();
    S(Qm(H, z(H, be.hit), ae, V())), be.view = Z(), be.wheelTime = G;
  }
  function N(j, ae, G) {
    const te = k();
    i.interaction = j === "orbit" ? { kind: "space_orbit", last: ae, pivot: z(te, T(ae)) } : { kind: "space_pan", last: ae, depth: qm(te, V()) }, we(ae), n.setPointerCapture(G);
  }
  function b() {
    return L() || D();
  }
  function A(j) {
    const ae = C.elapsed(j);
    if (!ae || i.viewTransition) return !1;
    const G = C.speed(V()) * ae;
    if (D()) return ee(C.direction(), G);
    if (!L()) return !1;
    const te = k(), H = X0(te, C.direction(), G);
    return H === te ? !1 : (i.viewPosition = H.position, i.viewDistance = te.distance, i.viewMoved = !0, !0);
  }
  function X() {
    fl(s).view = RA(i);
  }
  function ge() {
    const j = c && !K0({ hasShot: !!h(), erp: B() }).disabled, ae = VA(fl(s).view, { frame: j });
    ae && Object.assign(i, ae);
  }
  function he(j) {
    return j * 0.2;
  }
  function xe() {
    return { center: K().position, radius: he(V()) };
  }
  function se(j, ae) {
    const { yaw_deg: G, pitch_deg: te } = ig(j.position, ae);
    return { ...j, yaw_deg: G, pitch_deg: te };
  }
  function ke() {
    return Cd(k(), n.width, n.height, m());
  }
  return {
    connect(j) {
      ({
        editorViewInput: _,
        editorViewSceneState: g,
        getActiveCutoutShot: h,
        isCameraSelected: y,
        isErpCamera: B,
        isFreeFrameView: D,
        moveFrameByKeys: ee,
        moveKeys: C,
        requestDraw: Y,
        sceneFiles: $,
        startAnimation: ne,
        stickerById: _e,
        syncFloatingViewButtonState: ye,
        updateCursor: we
      } = j);
    },
    transitionView: pe,
    applyViewTransitionEnd: ve,
    cancelViewTransition: fe,
    turnViewTo: ie,
    cameraPreviewShown: me,
    isSpaceView: ce,
    hasSpaceContent: O,
    isFreeSpaceView: L,
    viewControls: M,
    spaceModeState: de,
    applySpaceMode: Q,
    setSpaceMode: R,
    spaceViewState: k,
    spaceOrigin: P,
    hasCamera: le,
    cameraShoots: q,
    paintingShown: I,
    sceneStickerShown: v,
    cutoutCamera: K,
    contentSphere: m,
    setSpaceView: S,
    spaceScale: V,
    frameSpaceContent: w,
    zoomSpaceAt: E,
    startSpaceDrag: N,
    canKeyMove: b,
    stepKeyMove: A,
    saveView: X,
    restoreView: ge,
    currentSpaceCamera: ke,
    cameraFrustumLength: he,
    cameraSphere: xe,
    lookingAt: se
  };
}
function JA(e) {
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
  let u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I = { revision: -1, sceneState: null }, v = null;
  function K() {
    return v || (v = V()), v;
  }
  function m() {
    v = null;
  }
  function S() {
    return I.sceneState;
  }
  function V() {
    const se = Y(), ke = p(), j = { ...a.assets };
    for (const Me of l ? [] : a.stickers) {
      const Ee = String((Me == null ? void 0 : Me.asset_id) || "");
      Ee && !j[Ee] && i.has(Ee) && (j[Ee] = { type: "comfy_image", filename: Ee });
    }
    const ae = l ? a.stickers.map((Me) => ve(Me) ? { ...Me, source: { kind: "file", filename: Q(Me) } } : Me) : a.stickers;
    I.revision !== s.stateRevision && (I = { revision: s.stateRevision, sceneState: Vn({ ...a, stickers: ae, assets: j, painting: null }) }), l && w(I.sceneState);
    const G = Fs(I.sceneState, r.frame), te = ie ? ee() : null, H = (Me) => {
      if (l && !Me.visible) return null;
      if (ie && we(Me)) return te;
      const Ee = ne(Me);
      return Ee ? { media: Ee, revision: $(Ee) } : null;
    }, J = le(), U = [...J.sky, ...dg(I.sceneState, r.frame, a.stickers, { media: H, paintLayers: ke, evaluated: G })], x = se && (se === d || se === c) ? d.dataset.panoSrc : se, re = ye(se) ? { media: se, revision: $(se), coverage: f(), source: x } : null, ue = _e(), F = WS(O(), ue, L());
    F.mode !== r.spaceMode && h(), u(F);
    const W = ue ? T(I.sceneState, G, H, J) : null, Se = pe() ? { ...W, ...z(W) } : null;
    return { background: re, layers: U, space: Se, content: W };
  }
  function w(se) {
    const ke = new Map(a.stickers.map((j) => [j.id, j.clip]));
    se.scene.clip = { ...a.scene.clip };
    for (const j of se.stickers) {
      const ae = ke.get(j.id);
      ae && (j.clip = { ...ae });
    }
  }
  function T(se, ke, j, ae) {
    const G = me(), te = Id(G, ke.scene), H = te != null && te.url ? n.sceneBox(te.url) : null, J = H && Ca(te.kind, H), U = de(), x = ng(U, se, ke), re = x != null && x.url ? n.sceneBox(x.url) : null, ue = re ? [{ box: Ca(x.kind, re), value: x.value }] : [], F = pg(se, r.frame, a.stickers, { media: j, evaluated: ke });
    for (const { request: Se, value: Me } of ae.items) {
      const Ee = Se != null && Se.url ? n.sceneBox(Se.url) : null;
      Ee && ue.push({ box: Ca(Se.kind, Ee), value: Me });
    }
    const W = gu(ZS(ke, J, [...F, ...ae.stickers], ue));
    return {
      evaluated: ke,
      sceneUrls: G ? G.urls.filter(Boolean) : [],
      scene: te,
      stickerUrls: rg(U, se),
      sticker: x,
      stickers: F,
      upstreamStickers: ae.stickers,
      upstreamItems: ae.items,
      sphere: W
    };
  }
  function z(se) {
    var j;
    const ke = ((j = se.sphere) == null ? void 0 : j.radius) || fr;
    return {
      gizmo: E() ? A() : Z(se.evaluated),
      grid: r.showGrid && !r.fullscreen ? d_(ke) : null,
      lines: g() ? b(ke) : []
    };
  }
  function Z(se) {
    const ke = ce(), j = Ut(ke) ? Wr(ke, r.frame) : se.stickers.find((ae) => ae.id === (ke == null ? void 0 : ke.id));
    return !q(ke) || !(j != null && j.active) ? null : { mode: r.gizmoMode, transform: pu(j) };
  }
  function E() {
    return g() && r.selectedId === xd;
  }
  let N = { revision: -1, span: -1, segments: [] };
  function b(se) {
    const ke = k();
    (N.revision !== s.stateRevision || N.span !== ke) && (N = { revision: s.stateRevision, span: ke, segments: p_(h_(a, ke)) });
    const { segments: j } = N, ae = j.length ? [{ segments: j, color: N2 }] : [];
    if (!be()) return ae;
    const G = E() ? R0 : M2;
    return [...ae, { segments: og(B(), _(se)), color: G }];
  }
  function A() {
    return !be() || !E() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: pu({ ...B(), scale: 1 }) };
  }
  function X() {
    const { background: se, layers: ke, space: j } = K(), ae = t.width, G = t.height, te = D({ x: 0, y: 0, w: ae, h: G });
    let H = !1;
    return !se && !ke.length && !j ? (n.clear(460551), H = n.ready) : (n.clear(), H = !!n.render({
      rect: te,
      camera: j ? Cd(M(), ae, G, j.sphere) : y(),
      background: se,
      layers: ke,
      space: j
    })), R(), (r.worldSelectedId || E() || fe()) && P(), H;
  }
  function ge(se) {
    const { content: ke } = K();
    return !ke || !se.position ? as(se) : eg(as(se), se.position, C(), ke.sphere);
  }
  function he(se, ke, j, ae = null) {
    const { background: G, layers: te, content: H } = K();
    if (!G && !te.length && !H) return null;
    const J = H && ke.position ? H : null;
    return n.render({ rect: se, camera: ge(ke), background: G, layers: te, space: J, owner: j, clearColor: ae });
  }
  function xe(se) {
    return n.clear(460551), !!n.renderUnwrap({ rect: D(se), ...K() });
  }
  return {
    connect(se) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: p,
        cameraFrustumLength: _,
        cameraShoots: g,
        cancelViewTransition: h,
        currentViewCamera: y,
        cutoutCamera: B,
        deviceRect: D,
        followPortSticker: ee,
        frameViewDistance: C,
        getConnectedErpImage: Y,
        getMediaRevisionToken: $,
        getStickerImage: ne,
        hasSpaceContent: _e,
        isDecodedImageReady: ye,
        isExternalSticker: we,
        isFreeSpaceView: be,
        isSpaceView: pe,
        isUploadingSticker: ve,
        isWorldMenuShown: fe,
        portVideo: ie,
        sceneFiles: me,
        selectedWorldSticker: ce,
        spaceModeState: O,
        spaceOrigin: L,
        spaceViewState: M,
        stickerFiles: de,
        stickerImageKey: Q,
        syncFloatingViewButtonState: R,
        timelineSpanFrames: k,
        updateSelectionMenu: P,
        upstreamViewInput: le,
        worldStickerEditable: q
      } = se);
    },
    editorViewInput: K,
    endEditorViewFrame: m,
    editorViewSceneState: S,
    isCameraSelected: E,
    renderEditorView: X,
    shotViewCamera: ge,
    drawEditorViewShot: he,
    renderEditorViewUnwrap: xe
  };
}
function ZA(e) {
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
  const _ = /* @__PURE__ */ new Map(), g = () => u({ cause: "frame_view", localOnly: !0, reason: pt.MEDIA });
  function h(q) {
    if (!q) return null;
    let I = _.get(q);
    return I || (I = new Image(), I.onload = g, I.onerror = g, I.src = q, _.set(q, I)), I;
  }
  function y({ sceneState: q, ui: I }) {
    return [
      ...q.stickers.filter((v) => v.source.kind !== "port").map((v) => n(sl(v.source))),
      i(Fn(I, Di)[0] || null),
      ...q.painting.raster_objects.map((v) => v.rasterDataUrl)
    ].filter(Boolean);
  }
  function B() {
    return a && (ip(o, "scene") === jg || !!D());
  }
  function D() {
    const q = a && Lt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, I = Array.isArray(q) ? q : null;
    if (f.list !== I) {
      f.entries.forEach(P), f = { list: I, entries: I ? Hg(I).map((K) => ({ layer: K })) : [], fps: null };
      const v = new Set(f.entries.flatMap((K) => y(K.layer)));
      for (const K of [..._.keys()]) v.has(K) || _.delete(K);
    }
    return I && f.fps !== s.timeline.fps && ee(), I && f.entries;
  }
  function ee() {
    if (!f.list) return;
    const q = Wg(f.entries.map((I) => I.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((I, v) => {
      I.working = q[v];
    }), f.fps = s.timeline.fps, p = dp(q);
  }
  function C() {
    if (!f.list) return;
    const q = f.entries.map((v) => v.working), I = sw(s.upstream, f.entries.map((v) => v.layer), q, p, f.fps);
    I !== s.upstream && (s.upstream = I, p = dp(q));
  }
  function Y() {
    const q = D();
    q && (s.upstream = hw(s.upstream, q.map((I) => I.layer)));
  }
  function $(q) {
    C();
    const I = q(s.upstream);
    return I === s.upstream ? !1 : (s.upstream = I, ee(), !0);
  }
  function ne(q) {
    const I = q.map((v) => v.origin);
    return $((v) => lw(v, I, s.timeline.fps));
  }
  function _e(q, I = null) {
    return $((v) => uw(v, q, I));
  }
  function ye(q) {
    return $((I) => pw(I, q));
  }
  function we(q) {
    return $((I) => fw(I, q));
  }
  function be() {
    return (D() ?? []).flatMap((q) => q.working.sceneState.stickers);
  }
  function pe(q) {
    const I = f.entries.find((v) => {
      var K;
      return ((K = v.working) == null ? void 0 : K.key) === q.origin.layer;
    });
    return I ? h(i(Fn(I.layer.ui, Di)[0] || null)) : null;
  }
  function ve(q = null) {
    const I = D();
    if (!I) return null;
    const [v] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], K = I.map((S) => S.working), m = (S) => Ss((V) => Fn(I[S].layer.ui, V));
    return {
      frames: Number(v) > 0 ? Number(v) : 0,
      ends: Yg(K, s.upstream, p, m, s.timeline.fps, q)
    };
  }
  function fe(q) {
    const I = f.entries.find((v) => {
      var K;
      return ((K = v.working) == null ? void 0 : K.key) === q.origin.layer;
    });
    return I ? Ss((v) => Fn(I.layer.ui, v)) : null;
  }
  function ie() {
    return (D() ?? []).map(({ layer: q, working: I }) => {
      const v = ks(I.key);
      return {
        key: I.key,
        sceneState: I.sceneState,
        editable: v,
        record: v ? s.upstream.find((K) => K.layer === I.key) ?? null : null,
        scene: Fn(q.ui, "pano_scene_files").length > 0,
        deleted: v ? dw(s.upstream, I) : 0
      };
    });
  }
  function me(q) {
    for (const { working: I } of D() ?? []) {
      const { key: v, sceneState: K } = I, m = ks(v);
      if (q === _u(v, "scene")) return { editable: m, part: "scene", owner: K.scene, sceneState: K };
      if (q === _u(v, "painting")) return { editable: m, part: "painting", owner: null, sceneState: K };
      const S = K.stickers.find((V) => V.id === q);
      if (S) return { editable: m, part: "sticker", owner: S, sceneState: K };
    }
    return null;
  }
  function ce() {
    if (!a) return "";
    const q = D();
    if (rw(ip(o, "scene"), q)) return "Run the workflow to show the upstream scene.";
    if (!q) return "";
    const I = t.uiList(o, "pano_sticker_warnings");
    return String(I.find((v) => String(v).startsWith(nw)) ?? "");
  }
  function O(q, I, v) {
    const { ui: K } = q.layer, m = s.timeline.fps, S = Fn(K, L0)[0], V = Fn(K, D0).map(i).filter(Boolean), w = i(Fn(K, T0)[0] || null), T = S && typeof S == "object" ? V.length ? { frames: V, meta: S } : w ? { src: w, meta: S } : null : null, z = h(i(Fn(K, Di)[0] || null)), Z = T ? bd(I.clip, v, m, T.meta) : null;
    let E = z;
    if (T != null && T.frames)
      q.frames || (q.frames = _d({
        createImage: (N, b) => {
          const A = new Image();
          return A.onload = b, A.onerror = b, A.src = N, A;
        },
        onLoad: g
      })), E = q.frames.picture(T.frames, Z, T.meta, z);
    else if (T != null && T.src) {
      const N = L(q);
      N.follow({ src: T.src, time: Z, playing: d.advancing, fps: m }), E = N.picture(q.still, z);
    }
    return E ? { media: E, revision: c(E), source: Sd(T, z) } : null;
  }
  function L(q) {
    if (q.follower) return q.follower;
    const I = Os(document, "editor.upstream-port-video");
    I.playsInline = !0, I.preload = "auto";
    const v = on({ label: "editor.upstream-port-still" });
    return v.__panoFrameIdx = 0, q.video = I, q.still = v, q.follower = $d({
      video: I,
      onCapture: () => {
        var S;
        const K = Number(I.videoWidth || 0), m = Number(I.videoHeight || 0);
        K < 1 || m < 1 || (v.width = K, v.height = m, (S = v.getContext("2d")) == null || S.drawImage(I, 0, 0), v.__panoFrameIdx += 1, g());
      },
      onChange: g
    }), q.follower;
  }
  function M(q, I, v) {
    if (I.source.kind === "port") return O(q, I, v);
    const K = h(n(sl(I.source)));
    return K ? { media: K, revision: c(K) } : null;
  }
  function de(q) {
    var z;
    const { sceneState: I } = q.working, { painting: v } = I, K = v.paint.strokes.length + v.mask.strokes.length;
    if (!I.painting_visible || !K && !v.raster_objects.length) return [];
    const m = l(), S = `${m.width}x${m.height}`;
    q.paintSize !== S && (R(q), q.paintSize = S, q.paintEngine = K ? Vl(m) : null, (z = q.paintEngine) == null || z.rebuildCommitted({ painting: v }), q.rasters = /* @__PURE__ */ new Map());
    const V = q.paintEngine, w = (V == null ? void 0 : V.getMaskDisplayCanvas()) || null, T = [];
    for (const Z of iw(I, V ? V.getAllGroupIds() : [], !!w)) {
      const E = Z.kind === "group" ? V == null ? void 0 : V.getGroupDisplayCanvas(Z.id) : Z.kind === "mask" ? w : Q(q, Z.item, m);
      E && T.push({ id: `${Z.kind}:${Z.id}`, media: E, revision: S, opacity: 1, zIndex: Z.zIndex });
    }
    return T;
  }
  function Q(q, I, { width: v, height: K }) {
    if (q.rasters.has(I.id)) return q.rasters.get(I.id);
    const m = h(I.rasterDataUrl);
    if (!m.complete || !m.naturalWidth) return null;
    const S = on({ label: "editor.upstream-raster-erp", width: v, height: K }), V = S.getContext("2d");
    return V ? (V0(V, m, I, v, K), q.rasters.set(I.id, S), S) : null;
  }
  function R(q) {
    var I;
    (I = q.rasters) == null || I.forEach((v) => hs(v)), q.rasters = null, q.paintEngine = null, q.paintSize = null;
  }
  function k() {
    const q = D() ?? [], I = { sky: [], stickers: [], items: [] }, v = r.frame;
    return q.forEach((K) => {
      const m = mw(K.working, K.working.key, v, {
        media: (S) => M(K, S, v),
        paintLayers: de(K),
        source: i
      });
      I.sky.push(...m.sky), I.stickers.push(...m.stickers), I.items.push(...m.items);
    }), I;
  }
  function P(q) {
    var I;
    (I = q.follower) == null || I.dispose(), q.still && hs(q.still), R(q);
  }
  function le() {
    f.entries.forEach(P), f = { list: null, entries: [], fps: null }, p = /* @__PURE__ */ new Map(), _.clear();
  }
  return {
    connect(q) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = q);
    },
    upstreamEntries: D,
    upstreamLinked: B,
    upstreamNotice: ce,
    upstreamOutput: ve,
    upstreamPortMeta: fe,
    upstreamViewInput: k,
    rebuildUpstreamWorking: ee,
    syncUpstreamEdits: C,
    pruneUpstreamRecords: Y,
    deleteUpstreamStickers: ne,
    revertUpstreamSticker: _e,
    revertUpstreamLayer: ye,
    restoreUpstreamDeleted: we,
    upstreamStickers: be,
    upstreamStickerImage: pe,
    upstreamTimelineLayers: ie,
    upstreamRow: me,
    disposeUpstream: le
  };
}
const Vu = "camera_preview";
function QA(e) {
  return e === Vu ? pt.SPLAT_PREVIEW : pt.SPLAT_STAGE;
}
function eC(e) {
  return [...e].some((t) => t !== pt.VIEW && t !== pt.OVERLAY && t !== pt.SPLAT_STAGE);
}
function J0(e, t = !1) {
  const r = Oe(zi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function tC(e) {
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
  let d, u, f, p, _ = null, g = !1, h = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Vu));
  }
  function B() {
    _ = null, h = !1, y();
  }
  function D(_e) {
    if (!n || !_e) return !1;
    const ye = n.closest(".pano-camera-preview");
    if (!ye) return !1;
    const we = Math.round(Number(ye.clientWidth || n.clientWidth || 0)), be = Math.round(Number(ye.clientHeight || n.clientHeight || 0));
    return Math.abs(we - Number(_e.width || 0)) <= 1 && Math.abs(be - Number(_e.height || 0)) <= 1;
  }
  function ee(_e, ye) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, B();
      return;
    }
    const we = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !we || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = we ? "Preview unavailable" : "Add Frame to preview", B();
      return;
    }
    const be = J0(we, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = be.width, c.cameraPreview.height = be.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const pe = window.devicePixelRatio || 1, ve = Math.max(1, be.width * pe), fe = Math.max(1, be.height * pe), ie = Math.min(1, t.width / ve, t.height / fe), me = { width: Math.max(1, Math.floor(ve * ie)), height: Math.max(1, Math.floor(fe * ie)) }, ce = !_ || _.width !== me.width || _.height !== me.height || eC(ye);
    if (_e && ce) {
      g = !0;
      const L = u({ x: 0, y: t.height - me.height, w: me.width, h: me.height }, we, Vu);
      _ = L ? me : null, L && ne(L);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const O = D(be);
    c.cameraPreview.ready = !0, c.cameraPreview.label = O ? "" : "Loading preview", c.cameraPreview.settled = O && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function C() {
    _ = null, h = !1;
  }
  let Y = 0, $ = !1;
  function ne(_e) {
    const ye = ++Y;
    createImageBitmap(_e.canvas, _e.x, _e.y, _e.width, _e.height).then((we) => {
      var be;
      if (ye !== Y || !s.running) {
        we.close();
        return;
      }
      (be = r.getContext("bitmaprenderer")) == null || be.transferFromImageBitmap(we);
    }).catch((we) => {
      ye !== Y || !s.running || (h = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !$ && ($ = !0, console.error("[PanoramaStickers] camera preview frame failed", we)));
    });
  }
  return {
    connect(_e) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: p
      } = _e);
    },
    drawCutoutOutputPreview: ee,
    forgetCameraPreviewFrame: C
  };
}
function nC(e) {
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
  let u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I, v, K, m;
  function S(j) {
    const ae = r.width, G = r.height, te = ne();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ae, G), P(), j && (a.backgroundDirty = !I(te)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let J = 0; J <= 16; J += 1) {
        const U = te.x + te.w * J / 16;
        n.beginPath(), n.moveTo(U, te.y), n.lineTo(U, te.y + te.h), n.stroke();
      }
      for (let J = 0; J <= 8; J += 1) {
        const U = te.y + te.h * J / 8;
        n.beginPath(), n.moveTo(te.x, U), n.lineTo(te.x + te.w, U), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(te.x, te.y + te.h / 2), n.lineTo(te.x + te.w, te.y + te.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const H = te.y + te.h * 0.57;
      n.fillText("Left", te.x + te.w * 0.25, H), n.fillText("Front", te.x + te.w * 0.5, H), n.fillText("Right", te.x + te.w * 0.75, H), n.fillText("Back", te.x + 38, H), n.fillText("Back", te.x + te.w - 38, H);
    }
  }
  function V(j, ae, G = 1) {
    let te = !1;
    n.strokeStyle = ae, n.lineWidth = G, n.beginPath();
    for (const H of j) {
      const J = de(H);
      if (!J) {
        te = !1;
        continue;
      }
      te ? n.lineTo(J.x, J.y) : (n.moveTo(J.x, J.y), te = !0);
    }
    n.stroke();
  }
  function w(j) {
    const ae = r.width, G = r.height;
    if (n.clearRect(0, 0, ae, G), P(), j && (a.backgroundDirty = !q()), i.showGrid && !i.fullscreen && g().space)
      T();
    else if (i.showGrid && !i.fullscreen) {
      for (let H = -180; H <= 180; H += 15) {
        const J = [];
        for (let U = -89; U <= 89; U += 4) J.push(Dn(H, U));
        V(J, "#3f3f46", H % 90 === 0 ? 1.3 : 1);
      }
      for (let H = -75; H <= 75; H += 15) {
        const J = [];
        for (let U = -180; U <= 180; U += 4) J.push(Dn(U, H));
        V(J, H === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", H === 0 ? 1.5 : 1);
      }
      const te = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", te.forEach((H) => {
        const J = de(H.dir);
        J && n.fillText(H.name, J.x, J.y + 24);
      });
    }
  }
  function T() {
    const j = Cd(m(), r.width, r.height, f()), ae = _s(j, [0, 0, 0], r.width, r.height);
    ae && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ae.x, ae.y - 12));
  }
  function z(j, ae) {
    const G = M(j), te = Dn(Number(G.yaw_deg || 0), Number(G.pitch_deg || 0)), H = i.mode === "unwrap" ? Q(te) : null, J = H ? H.x : null, U = i.mode === "pano" ? 28 : 20, x = [
      v(j, 0, U, J),
      v(j, 1, U, J),
      v(j, 2, U, J),
      v(j, 3, U, J)
    ];
    Gd(n, x, { selected: ae });
  }
  function Z(j, ae = []) {
    if (!(!j || !Array.isArray(ae) || ae.length < 4)) {
      j.beginPath(), j.moveTo(ae[0].x, ae[0].y);
      for (let G = 1; G < 4; G += 1) j.lineTo(ae[G].x, ae[G].y);
      j.closePath();
    }
  }
  function E(j, ae, G) {
    const te = Array.isArray(j == null ? void 0 : j.corners) ? j.corners : [];
    if (te.length < 4) return;
    const H = Oe(Number((j == null ? void 0 : j.visibilityAlpha) ?? 1), 0, 1);
    if (H <= 0.01) return;
    const J = n.globalAlpha;
    n.globalAlpha = J * H;
    const U = G ? "rgba(255, 116, 116, 0.96)" : ae ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", x = G ? "rgba(255, 89, 89, 0.08)" : ae ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", re = ae ? 3.2 : 2.6;
    Z(n, te), n.fillStyle = x, n.fill(), n.strokeStyle = U, n.lineWidth = re, n.stroke(), n.save(), n.strokeStyle = U, n.lineWidth = ae ? 3.2 : 2.6, n.lineCap = "round";
    const ue = Array.isArray(j == null ? void 0 : j.edgeMidpoints) && j.edgeMidpoints.length >= 4 ? j.edgeMidpoints : [
      { edge: "top", x: (te[0].x + te[1].x) * 0.5, y: (te[0].y + te[1].y) * 0.5 },
      { edge: "right", x: (te[1].x + te[2].x) * 0.5, y: (te[1].y + te[2].y) * 0.5 },
      { edge: "bottom", x: (te[2].x + te[3].x) * 0.5, y: (te[2].y + te[3].y) * 0.5 },
      { edge: "left", x: (te[3].x + te[0].x) * 0.5, y: (te[3].y + te[0].y) * 0.5 }
    ], F = { top: "bottom", right: "left", bottom: "top", left: "right" }, W = ae ? 12 : 9;
    ue.forEach((Se) => {
      const Ee = ue.find((Ce) => (Ce == null ? void 0 : Ce.edge) === F[Se == null ? void 0 : Se.edge]) || {
        x: (te[0].x + te[1].x + te[2].x + te[3].x) * 0.25,
        y: (te[0].y + te[1].y + te[2].y + te[3].y) * 0.25
      }, Re = Ee.x - Se.x, je = Ee.y - Se.y, Ke = Math.hypot(Re, je) || 1;
      n.beginPath(), n.moveTo(Se.x, Se.y), n.lineTo(Se.x + Re / Ke * W, Se.y + je / Ke * W), n.stroke();
    }), n.restore(), n.globalAlpha = J;
  }
  function N(j, ae, G, te) {
    const H = Oe(Number((ae == null ? void 0 : ae.visibilityAlpha) ?? 1), 0, 1);
    if (H <= 0.01) return;
    if (me(j)) {
      E(ae, G, te);
      return;
    }
    if (ce(j)) {
      const U = n.globalAlpha;
      n.globalAlpha = U * $(j) * H, i.mode === "frame" ? (n.strokeStyle = G ? "rgba(250, 250, 250, 0.9)" : te ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = G ? 2 : 1, Z(n, ae.corners), n.stroke()) : z(j, G), n.globalAlpha = U;
      return;
    }
    const J = n.globalAlpha;
    n.globalAlpha = J * H, n.fillStyle = G ? "rgba(0, 112, 243, 0.24)" : te ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Z(n, ae.corners), n.fill(), n.strokeStyle = G ? "rgba(255, 255, 255, 1)" : te ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = G ? 2.8 : 1.9, Z(n, ae.corners), n.stroke(), n.globalAlpha = J;
  }
  function b(j, ae, G) {
    if (ce(j)) {
      u0(n, ae, { accent: G });
      return;
    }
    const te = !(me(j) && ye());
    n.fillStyle = G, te && ae.corners.forEach((H) => {
      n.beginPath(), n.arc(H.x, H.y, 6.5, 0, Math.PI * 2), n.fill();
    }), te && me(j) && (n.strokeStyle = G, n.lineCap = "round", n.lineWidth = 4, ae.edgeMidpoints.forEach((H) => {
      var W, Se, Me, Ee;
      const J = (((W = H.b) == null ? void 0 : W.x) ?? H.x) - (((Se = H.a) == null ? void 0 : Se.x) ?? H.x), U = (((Me = H.b) == null ? void 0 : Me.y) ?? H.y) - (((Ee = H.a) == null ? void 0 : Ee.y) ?? H.y), x = Math.hypot(J, U) || 1, re = J / x, ue = U / x, F = 10;
      n.beginPath(), n.moveTo(H.x - re * F, H.y - ue * F), n.lineTo(H.x + re * F, H.y + ue * F), n.stroke();
    }), n.lineCap = "butt"), O(j) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ae.rotateStemBase.x, ae.rotateStemBase.y), n.lineTo(ae.rotateHandle.x, ae.rotateHandle.y), n.stroke(), n.fillStyle = G, n.beginPath(), n.arc(ae.rotateHandle.x, ae.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function A() {
    var J;
    const j = i.mode === "frame" ? [] : Y(), ae = j.length > 1, G = l ? y() : ee(), te = G.map((U) => `${String((U == null ? void 0 : U.id) || "")}:${me(U) ? "frame" : Number((U == null ? void 0 : U.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== G || i._sortedItemsCache.orderKey !== te) && (i._sortedItemsCache = {
      src: G,
      orderKey: te,
      sorted: [...G]
    });
    const H = [...j.filter(Ut), ...i._sortedItemsCache.sorted];
    for (const U of H) {
      const x = i.mode !== "frame" && !ae && ve(U);
      if (i.mode === "frame" && !x) continue;
      const re = ce(U), ue = me(U), F = pe(U);
      if (!re && !ue || ie(U) && !K(U)) continue;
      const W = L(U);
      if (d !== "stickers" && !W.visible)
        continue;
      const Se = Oe(Number((W == null ? void 0 : W.visibilityAlpha) ?? 1), 0, 1);
      if (Se <= 0.01) continue;
      const Me = ue && l && i.mode === "pano" ? Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, N(U, W, x, F), x && W.visible) {
        const Ee = F ? "#ff4d4f" : re && we(U) ? "#f59e0b" : "#0070f3", Re = n.globalAlpha;
        n.globalAlpha = Re * Se, b(U, W, Ee), n.globalAlpha = Re;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const U = i.cutoutPanoFrameVisual, x = Oe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= x, E(U.geom, U.selected, U.locked), U.selected && b(
        U.item,
        U.geom,
        U.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ae) {
      const U = C(j);
      if (U != null && U.visible) {
        const x = u(j) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(U.corners[0].x, U.corners[0].y);
        for (let re = 1; re < U.corners.length; re += 1) n.lineTo(U.corners[re].x, U.corners[re].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = x, U.corners.forEach((re) => {
          n.beginPath(), n.arc(re.x, re.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      j.forEach((U) => {
        if (!O(U) && !fe(U)) return;
        const x = L(U);
        if (!(x != null && x.visible)) return;
        const re = pe(U) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(x.corners[0].x, x.corners[0].y);
        for (let ue = 1; ue < x.corners.length; ue += 1) n.lineTo(x.corners[ue].x, x.corners[ue].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = re, x.corners.forEach((ue) => {
          n.beginPath(), n.arc(ue.x, ue.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((J = i.interaction) == null ? void 0 : J.kind) === "marquee_select") {
      const U = le(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(U.x0, U.y0, U.x1 - U.x0, U.y1 - U.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function X(j) {
    const ae = h(), G = B(ae);
    if (!ae || !G)
      return n.clearRect(0, 0, r.width, r.height), j && o.clear(657930), !1;
    const te = { x: G.x, y: G.y, w: G.w, h: G.h }, { rect: H, shot: J } = lg(ae, G, { width: r.width, height: r.height }), U = ge(te);
    if (n.clearRect(0, 0, r.width, r.height), j) {
      o.clear(657930);
      const x = p(H), re = !!_(x, J, void 0, 657930);
      re || o.clear(1118481, x), a.backgroundDirty = !re;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(te.x, te.y, te.w, te.h, U), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = R0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(te.x + 1, te.y + 1, te.w - 2, te.h - 2, Math.max(0, U - 1)), n.stroke(), n.restore(), !0;
  }
  function ge(j) {
    const ae = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ae, Number((j == null ? void 0 : j.w) || 0) * 0.5, Number((j == null ? void 0 : j.h) || 0) * 0.5);
  }
  function he() {
    var re, ue;
    if (((re = i.interaction) == null ? void 0 : re.kind) !== "paint_lasso_fill") return;
    const j = i.interaction.stroke, ae = (ue = j == null ? void 0 : j.geometry) == null ? void 0 : ue.points;
    let G;
    if (i.mode === "frame") {
      const F = h(), W = D(F);
      G = R(ae, F, W);
    } else
      G = k(ae);
    if (!Array.isArray(G) || G.length < 3) return;
    const te = String((j == null ? void 0 : j.layerKind) || "") === "mask", H = (j == null ? void 0 : j.color) || { r: 1, g: 0.25, b: 0.25 }, J = Math.round(Number(H.r || 0) * 255), U = Math.round(Number(H.g || 0) * 255), x = Math.round(Number(H.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(G[0].x || 0), Number(G[0].y || 0));
    for (let F = 1; F < G.length; F++) n.lineTo(Number(G[F].x || 0), Number(G[F].y || 0));
    n.closePath(), te ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${J},${U},${x},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function xe() {
    const j = i.frameRollOverlayVisual, ae = Oe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(j != null && j.shot) || ae <= 1e-4) return;
    const G = D(j.shot);
    if (!G) return;
    const te = { x: G.x + G.w * 0.5, y: G.y + G.h * 0.5 }, H = Number(j.shot.roll_deg ?? j.shot.rot_deg ?? 0) * Nr, J = Math.hypot(G.w, G.h) * 0.55, U = Math.cos(H) * J, x = Math.sin(H) * J;
    n.save(), n.globalAlpha *= ae, n.beginPath(), n.rect(G.x, G.y, G.w, G.h), n.clip(), n.translate(te.x, te.y), n.rotate(H);
    const re = Math.max(12, Math.min(G.w, G.h) / 6);
    n.beginPath();
    for (let ue = -J; ue <= J; ue += re)
      n.moveTo(ue, -J), n.lineTo(ue, J);
    for (let ue = -J; ue <= J; ue += re)
      n.moveTo(-J, ue), n.lineTo(J, ue);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(te.x - U, te.y - x), n.lineTo(te.x + U, te.y + x), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function se() {
    return !l || !h() || t && be() || c && !_e() ? 0 : C2;
  }
  function ke() {
    const j = Oe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (j <= 1e-4 || !l || i.mode !== "pano") return;
    const ae = h(), G = ae ? L(ae) : null, te = Array.isArray(G == null ? void 0 : G.corners) && G.corners.length >= 4 ? G.corners.map((U) => ({ x: Number(U.x || 0), y: Number(U.y || 0) })) : null;
    G != null && G.visible && te && (i.cutoutPanoDimCorners = te), ae && (G != null && G.visible) && te && (i.cutoutPanoFrameVisual = {
      item: ae,
      geom: G,
      selected: ve(ae),
      locked: pe(ae)
    });
    const H = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, J = G != null && G.visible ? te : H ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${j})`, n.beginPath(), n.rect(0, 0, r.width, r.height), J.length >= 4) {
      n.moveTo(J[0].x, J[0].y);
      for (let U = 1; U < 4; U += 1) n.lineTo(J[U].x, J[U].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(j) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: _,
        editorViewInput: g,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: B,
        getFrameViewRect: D,
        getList: ee,
        getMultiSelectionGeom: C,
        getSelectedItems: Y,
        getStickerDisplayAlpha: $,
        getUnwrapRect: ne,
        isCameraSelected: _e,
        isErpCamera: ye,
        isExternalSticker: we,
        isFreeSpaceView: be,
        isItemLocked: pe,
        isItemSelected: ve,
        isRasterObjectItem: fe,
        isSceneSticker: ie,
        isShotItem: me,
        isStickerItem: ce,
        isStrokeGroupItem: O,
        objectGeom: L,
        poseOf: M,
        projectDir: de,
        projectDirUnwrap: Q,
        projectErpLassoPointsToFrameRect: R,
        projectLassoPointsToCurrentView: k,
        rebuildPaintEngineIfNeeded: P,
        rectFromPoints: le,
        renderEditorView: q,
        renderEditorViewUnwrap: I,
        sampleStickerEdge: v,
        sceneStickerShown: K,
        spaceViewState: m
      } = j);
    },
    drawGridUnwrap: S,
    drawGridPano: w,
    drawObjects: A,
    drawFrameViewBackground: X,
    drawLassoOutlineOverlay: he,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: se,
    drawCutoutPanoPassepartout: ke
  };
}
function rC(e) {
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
    type: _,
    uiState: g,
    viewController: h
  } = e;
  let y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q = () => {
  };
  function I(se = /* @__PURE__ */ new Set()) {
    ye();
    const ke = l.backgroundDirty;
    d && (O(), B(ke, se)), i.mode === "frame" ? (l.frameSafeRect = ie(), C(ke)) : i.mode === "unwrap" ? $(ke) : Y(ke), D(), _e(), Q(), ne(), ee(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && P(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const j = ve();
    g.stageStatus = j.status, g.stageStatusDetail = j.detail, g.stageNotice = le(), j.status === ar ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", j.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function v(se = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const ke = String((se == null ? void 0 : se.kind) || "");
    return ke === "move" || ke === "scale" || ke === "scale_x" || ke === "scale_y" || ke === "rotate" ? !0 : ke === "move_multi" ? Array.isArray(se == null ? void 0 : se.stickerSnapshots) && se.stickerSnapshots.length > 0 : !1;
  }
  function K() {
    return !!i.interaction || !!p.drag;
  }
  function m() {
    l.nodePreviewPending = !1;
    const se = Wn(s);
    se.liveState = f, se.liveStateVersion += 1, pe();
  }
  function S(se = {}) {
    var U, x, re, ue, F, W, Se, Me;
    const ke = se.reason ?? pt.STATE, j = !!se.localOnly, ae = se.externalSync === !0, G = String(se.cause || ""), te = String(((U = i.interaction) == null ? void 0 : U.kind) || "");
    (!j || te === "view" || te === "pan_frame" || v() || !!i.viewTransition || G === "mode" || G === "frame_view" || G === "cutout_frame") && (l.backgroundDirty = !0), j && fe() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!j || G === "selection" || G === "mode" || G === "cutout_frame") && (R(), k()), K() ? l.nodePreviewPending = !0 : m(), ae && ((re = (x = yt(s).dom) == null ? void 0 : x.requestDraw) == null || re.call(x), (ue = s.setDirtyCanvas) == null || ue.call(s, !0, !1)), ae && !j && ((W = (F = s.graph) == null ? void 0 : F.setDirtyCanvas) == null || W.call(F, !0, !0), (Me = (Se = t == null ? void 0 : t.canvas) == null ? void 0 : Se.setDirty) == null || Me.call(Se, !0, !0)), c.requestDraw(ke);
  }
  function V() {
    const se = n.getBoundingClientRect(), ke = Math.max(2, Math.round(se.width)), j = Math.max(2, Math.round(se.height)), ae = window.devicePixelRatio || 1, G = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== ke || n.height !== j) && (n.width = ke, n.height = j);
    const te = m_(se.width || ke, se.height || j, ae, window.innerWidth || se.width, window.innerHeight || se.height);
    return o.resize(te.width, te.height), [n.width, n.height, r.width, r.height].join("x") === G ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && w(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function w(se) {
    se(), c.wake();
  }
  function T() {
    return !!i.viewTransition || me.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || K();
  }
  function z(se = performance.now(), ke = /* @__PURE__ */ new Set()) {
    var H;
    l.nodePreviewPending && !K() && m(), ke.forEach((J) => l.reasons.add(J)), ke.size && (l.dirty = !0), [...ke].some((J) => J !== pt.OVERLAY) && (l.backgroundDirty = !0), M(), l.lastTickTs > 0 ? Math.max(1e-3, (se - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = se;
    const j = i.mode === "frame" && ((H = i.interaction) == null ? void 0 : H.kind) === "roll_frame" ? i.interaction : null;
    j != null && j.shot && (i.frameRollOverlayVisual = { shot: j.shot });
    const ae = j ? 1 : 0;
    if (Math.abs(ae - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ae, i.frameRollOverlayStartTs = se), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ae) > 1e-6) {
      const J = Oe(
        (se - Number(i.frameRollOverlayStartTs || se)) / I2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Xn(
        Number(i.frameRollOverlayFrom || 0),
        ae,
        zc(J)
      ), J >= 1 && (i.frameRollOverlayAlpha = ae, ae === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const G = be();
    if (Math.abs(G - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = G, i.cutoutPanoDimStartTs = se), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - G) > 1e-6) {
      const J = Oe(
        (se - Number(i.cutoutPanoDimStartTs || se)) / $p,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Xn(
        Number(i.cutoutPanoDimFrom || 0),
        G,
        zc(J)
      ), J >= 1 && (i.cutoutPanoDimAlpha = G), J >= 1 && G === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const te = d && we() ? 1 : 0;
    if (Math.abs(te - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = te, i.cutoutPanoFrameStartTs = se), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - te) > 1e-6) {
      const J = Oe(
        (se - Number(i.cutoutPanoFrameStartTs || se)) / $p,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Xn(
        Number(i.cutoutPanoFrameFrom || 0),
        te,
        zc(J)
      ), J >= 1 && (i.cutoutPanoFrameAlpha = te, te === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const J = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), U = Oe((se - Number(i.outputPreviewAnimStartTs || 0)) / J, 0, 1), re = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? F2(U) : D2(U);
      i.outputPreviewAnim = Xn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, re), l.dirty = !0, U >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: J, done: U } = YA(i.viewTransition, se);
      if (i.viewPosition = J.position, i.viewYaw = J.yaw_deg, i.viewPitch = J.pitch_deg, i.viewFov = J.hFOV_deg, i.viewDistance = J.distance, U) {
        const { end: x } = i.viewTransition;
        i.viewTransition = null, x && y(x), de();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (L(se) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(se) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const J = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), I(J);
    }
  }
  function Z(se) {
    try {
      se();
    } catch (ke) {
      const j = String((ke == null ? void 0 : ke.stack) || (ke == null ? void 0 : ke.message) || ke || "unknown editor frame error");
      l.tickErrorSignature !== j && (l.tickErrorSignature = j, console.error("[PanoramaStickers] editor frame failed", ke)), g.stageStatus = Jn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function E(se = performance.now(), ke = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const j = Iv();
    Z(() => z(se, ke)), Ev(j);
  }
  function N() {
    !l.running || !V() || Z(() => {
      l.dirty = !1, I(/* @__PURE__ */ new Set([pt.RESIZE]));
    });
  }
  const b = new ResizeObserver(N);
  let A = null;
  function X() {
    A == null || A.removeEventListener("change", ge), A = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), A.addEventListener("change", ge);
  }
  function ge() {
    X(), N();
  }
  function he() {
    q = Cv("editor", () => {
      var se;
      return {
        type: _,
        readOnly: a,
        mode: i.mode,
        interaction: ((se = i.interaction) == null ? void 0 : se.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!ce.playing
      };
    });
  }
  function xe() {
    q(), l.running = !1, c.stop(), b.disconnect(), A.removeEventListener("change", ge);
  }
  return {
    connect(se) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: B,
        drawCutoutPanoPassepartout: D,
        drawFrameRollOverlay: ee,
        drawFrameViewBackground: C,
        drawGridPano: Y,
        drawGridUnwrap: $,
        drawLassoOutlineOverlay: ne,
        drawObjects: _e,
        endEditorViewFrame: ye,
        getActiveCutoutShot: we,
        getCutoutPanoDimTarget: be,
        getSharedLivePaintSurface: pe,
        getStageImageStatus: ve,
        isPaintCompositeInteraction: fe,
        measureFrameSafeRect: ie,
        moveKeys: me,
        playback: ce,
        rebuildPaintEngineIfNeeded: O,
        stepKeyMove: L,
        syncCutoutShot: M,
        syncFloatingViewButtonState: de,
        syncFrameRollKnob: Q,
        syncLookAtFrameButtonState: R,
        syncViewToggleState: k,
        updateSelectionMenu: P,
        upstreamNotice: le
      } = se);
    },
    requestDraw: S,
    syncCanvasSize: V,
    startAnimation: w,
    editorAnimating: T,
    tick: E,
    stageResizeObserver: b,
    watchPixelRatio: X,
    sampleEditorDiagnostics: he,
    stopRenderLoop: xe
  };
}
function iC(e) {
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
    studio: _,
    type: g,
    uiState: h
  } = e;
  let y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I, v, K, m, S, V = 0;
  function w() {
    h.toolButtons.forEach((se) => {
      const ke = se.attr === "data-tool-mode", j = se.attr === "data-paint-tool", ae = se.attr === "data-mask-tool";
      se.active = ke ? se.value === r.primaryTool : j ? se.key === r.paintTool : ae ? se.key === r.maskTool : !1, se.pressed = se.active ? "true" : se.pressed == null ? null : "false";
    });
  }
  function T() {
    if (_ && no(h.toolButtons, "value", "add-camera", { disabled: pe() }), g !== "cutout") return;
    const se = D();
    no(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: se ? "Look At Frame" : "Add Frame",
      tip: se ? "Look at frame" : "Add frame",
      icon: se ? We.camera : We.plus_circle
    });
  }
  function z() {
    const se = gA({
      spaceView: de(),
      spaceMode: xl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, se.space);
    for (const [ke, j] of Object.entries(se.buttons)) no(h.floatingButtons, "action", ke, j);
  }
  function Z() {
    var j;
    const se = K0({ hasShot: !!D(), erp: ie(), hidden: pe() && !B(), studio: _ });
    r.mode === "frame" && se.disabled && (_ ? R(D()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((ae) => {
      const G = ae.key === r.mode;
      ae.pressed = G ? "true" : "false", ae.visible = !(ae.key === "frame" && !f), ae.key === "frame" ? Object.assign(ae, se) : ae.disabled = !1;
    });
    const ke = f && r.mode === "frame" ? D() : null;
    h.frameRail.visible = !!ke, h.frameRail.disabled = c || (ke == null ? void 0 : ke.locked) === !0, h.frameRollKnob.visible = !!ke && !c && ke.locked !== !0, h.frameRollKnob.disabled = c || (ke == null ? void 0 : ke.locked) === !0, h.frameRollKnob.rollDeg = Number((ke == null ? void 0 : ke.roll_deg) ?? (ke == null ? void 0 : ke.rot_deg) ?? 0), h.frameRollKnob.displayValue = po(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((j = r.interaction) == null ? void 0 : j.kind) === "roll_frame", h.frameRollKnob.armed = !!ke && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = ke ? Vr(ke) : "", h.frameRail.aspectChoices = W0(ke ? String(Vr(ke)) : null, { erp: _, coverage: p.coverage }), ke || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!D(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && y(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), z(), O() ? m(r.pointerPos) : q(r.mode === "pano" ? "grab" : "default");
  }
  function E() {
    var ke;
    const se = r.mode === "frame" ? D() : null;
    h.frameRollKnob.visible = !!se && !c && se.locked !== !0, h.frameRollKnob.rollDeg = Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg) ?? 0), h.frameRollKnob.displayValue = po(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((ke = r.interaction) == null ? void 0 : ke.kind) === "roll_frame", h.frameRollKnob.armed = !!se && r.altModifier === !0;
  }
  function N() {
    w();
    const se = fA({
      editor: r,
      swatches: Jl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Sr,
      colorsApproximatelyEqual: kl,
      rgb01ToHsv: Ru,
      hsv01ToRgb: Lu,
      getBrushPresetIdForTool: ee,
      isActiveLassoTool: fe
    });
    if (Object.assign(h.paintDock, se), K(), !se.visible) {
      i && (i.hidden = !0);
      return;
    }
    V && (clearTimeout(V), V = 0), o && (!se.colorEnabled && i && !i.hidden && (V = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, V = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", se.pickerHueColor), i.style.setProperty("--picker-sat", se.pickerSat), i.style.setProperty("--picker-val", se.pickerVal), i.style.setProperty("--picker-hue", se.pickerHue)), s && (s.style.left = se.pickerSvLeft, s.style.top = se.pickerSvTop), a && (a.style.left = se.pickerHueLeft));
  }
  function b() {
    const se = P(f && r.mode === "frame" ? D() : ne());
    se && (r.panelLastValues = {
      yaw_deg: Number(se.yaw_deg || 0),
      pitch_deg: Number(se.pitch_deg || 0),
      hFOV_deg: Number(se.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(se.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(se.rot_deg || 0),
      roll_deg: Number(se.roll_deg || 0),
      aspect_id: Vr(se)
    }, A());
  }
  function A() {
    I(), v(), ge();
  }
  function X() {
    const se = f && r.mode === "frame" ? D() : null;
    return [..._e(), le(), se].some((ke) => L(ke) ? il(ke) : M(ke) && pe() && il(p.camera));
  }
  function ge() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const se = dA(p.ui_settings);
    if (l) {
      h.sidePanel = pA({
        coverage: p.coverage,
        uiSettings: se,
        normalizeCoverageValue: $n
      });
      return;
    }
    const ke = ne(), j = f && r.mode === "frame" ? D() : null, ae = j || ke, G = j ? [j] : _e(), te = j ? "shot" : ye();
    if (G.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ae && te !== "stroke") {
      const Re = P(ae);
      r.panelLastValues = {
        yaw_deg: Number(Re.yaw_deg || 0),
        pitch_deg: Number(Re.pitch_deg || 0),
        hFOV_deg: Number(Re.hFOV_deg || (te === "image" ? 30 : 90)),
        vFOV_deg: Number(Re.vFOV_deg || (te === "image" ? 30 : 60)),
        rot_deg: Number(Re.rot_deg || 0),
        roll_deg: Number(Re.roll_deg || 0),
        aspect_id: Vr(Re)
      }, L(ae) && (r.panelLastValues.opacity = Wr(ae, r.frame).opacity * 100);
    }
    const H = r.panelLastValues || (g === "stickers" || te === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), J = te === "stroke" ? null : ae, U = le(), x = t && (te === "shot" || te === "frame") && ve(), re = U ? CS(U, r.frame) : x ? { ...J, ...NS(p.camera, r.frame), vFOV_deg: J.vFOV_deg } : L(J) ? r.panelLastValues : J || H, ue = U ? S(U) : !!J && !ce(J);
    r.panelWasEnabled = ue, T();
    let F = null;
    if (j) {
      const Re = be({ item: j, kind: "shot", label: "Frame" });
      F = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Re.label,
        currentIcon: Re.icon || null,
        items: [{
          id: String(j.id || ""),
          label: Re.label,
          icon: Re.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const Re = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const Ce = D();
        Ce && Re.push({ id: Ce.id, label: "Camera", icon: we("frame"), item: Ce, kind: "frame" }), $().forEach((ze, oe) => {
          var He, Ge;
          if (!ze || L(ze) && !ze.visible) return;
          const Ie = u ? he(ze) : me(ze) ? String(ze.id || Qd) : String(((Ge = (He = p.assets) == null ? void 0 : He[ze.asset_id]) == null ? void 0 : Ge.name) || ze.asset_id || ze.id), Ae = `${oe + 1}. ${Ie}${me(ze) && Q(ze) ? " (hidden)" : ""}`, Fe = be({ item: ze, label: Ae, kind: "image" });
          Re.push({ id: ze.id, label: Fe.label, icon: Fe.icon, item: ze, kind: "image" });
        });
      } else
        C().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const ze = be(Ce);
          Re.push({ id: Ce.item.id, label: ze.label, icon: ze.icon, item: Ce.item, kind: Ce.kind });
        });
      const je = (J == null ? void 0 : J.id) || "", Ke = U ? { label: he(U), icon: We.globe } : Re.find((Ce) => Ce.id === je) || Re[0];
      F = {
        label: "Selection",
        open: !1,
        disabled: Re.length <= 1,
        currentLabel: Ke.label,
        currentIcon: Ke.icon || null,
        items: Re.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === je
        }))
      };
    }
    const W = [], Se = (Re, je, Ke, Ce, ze) => {
      const oe = Oe(Number(re[Re] || 0), Ke, Ce);
      W.push({
        key: Re,
        label: je,
        min: Ke,
        max: Ce,
        step: ze,
        value: oe,
        displayValue: po(oe),
        fillPct: Oe((oe - Ke) / Math.max(1e-6, Ce - Ke) * 100, 0, 100),
        enabled: ue && !c
      });
    }, Me = [];
    if (U) {
      for (const [Re, je] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ke = Kc(re[Re]);
        Se(Re, je, -Ke, Ke, 0.01);
      }
      Se("yaw_deg", "Yaw", -180, 180, 0.1), Se("pitch_deg", "Pitch", -90, 90, 0.1), Se("roll_deg", "Roll", -180, 180, 0.1), Se("scale", "Scale", F0, Kc(re.scale), 0.01), Se("opacity", "Opacity", 0, 100, 1);
    } else if (G.length > 1)
      Me.push(`Selected objects: ${G.length}`), Me.push("Multi-selection supports z-order and delete.");
    else {
      const Re = te === "shot" || te === "frame";
      if (x)
        for (const [je, Ke] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Kc(re[je]);
          Se(je, Ke, -Ce, Ce, 0.01);
        }
      Se("yaw_deg", "Yaw", -180, 180, 0.1), Se("pitch_deg", "Pitch", -90, 90, 0.1), Se(te === "image" || g === "stickers" && !Re ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Se("hFOV_deg", "H FOV", 1, 179, 0.1), Se("vFOV_deg", "V FOV", 1, 179, 0.1), Re && W.forEach((je) => {
        je.enabled = je.enabled && yA(je.key, { erp: ie() });
      }), L(J) && !Re && W.forEach((je) => {
        je.enabled = je.enabled && bA(je.key, { port: me(J) });
      }), u && !Re && Se("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = G.length > 1 ? null : U || J;
    h.sidePanel = xA({
      coverage: p.coverage,
      readOnly: c,
      selectionPicker: F,
      enabled: ue,
      selectedKind: U ? "world" : te,
      selectedItems: G,
      params: W,
      notes: Me,
      uiSettings: se,
      normalizeCoverageValue: $n,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: _ && Ee && (Ee === U || L(Ee)) ? kA({
        layer: Ut(Ee) ? Ee.origin.layer : null,
        editable: Ut(Ee) && hl(Ee),
        locked: Ee.locked === !0,
        readOnly: c,
        placement: Ee.placement,
        override: Ut(Ee) ? qg(p.upstream, Ee.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ut(Ee) ? null : k(Ee)
      }) : null
    });
  }
  function he(se) {
    const ke = Wm(se);
    return Ut(se) ? `${ef(se.origin.layer)} · ${ke}` : ke;
  }
  function xe() {
    const { canUndo: se, canRedo: ke } = Y();
    no(h.toolButtons, "value", "undo", { disabled: !se }), no(h.toolButtons, "value", "redo", { disabled: !ke });
  }
  return {
    connect(se) {
      ({
        cameraPreviewShown: y,
        cameraShoots: B,
        getActiveCutoutShot: D,
        getBrushPresetIdForTool: ee,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: Y,
        getList: $,
        getSelected: ne,
        getSelectedItems: _e,
        getSelectedKind: ye,
        getSelectionItemIcon: we,
        getSelectionItemLabelData: be,
        hasCamera: pe,
        hasSpaceContent: ve,
        isActiveLassoTool: fe,
        isErpCamera: ie,
        isExternalSticker: me,
        isItemLocked: ce,
        isPaintCursorEnabled: O,
        isSceneSticker: L,
        isShotItem: M,
        isSpaceView: de,
        isStickerHidden: Q,
        leaveFrameView: R,
        portHandoffLanes: k,
        poseOf: P,
        selectedWorldSticker: le,
        setCanvasCursor: q,
        syncCutoutShot: I,
        syncTimeline: v,
        syncVideoTransportVisibility: K,
        updateCursor: m,
        worldStickerEditable: S
      } = se);
    },
    syncLookAtFrameButtonState: T,
    syncFloatingViewButtonState: z,
    syncViewToggleState: Z,
    syncFrameRollKnob: E,
    syncPaintUi: N,
    syncSidePanelControls: b,
    updateSidePanel: A,
    inspectorTimed: X,
    syncSidePanelModel: ge,
    syncUndoRedoButtons: xe
  };
}
function oC(e) {
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
  let p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O;
  function L() {
    var X;
    if (!s || n) return;
    const N = ((X = l.drag) == null ? void 0 : X.limit) ?? de();
    !l.drag && D.frame > N - 1 && D.seek(N - 1);
    const b = l.selection, A = b && R(b.owner);
    if (b) {
      const ge = A ? P(b) : [], he = le(b.owner);
      b.frames = b.frames.filter((xe) => xe + he < N && ge.some((se) => A[se].keyframes.some((ke) => ke.frame === xe))), b.frames.length || (l.selection = null);
    }
    d.timeline = IA(o, {
      span: N,
      portBarEnd: Q,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? M(),
      openRows: l.openRows,
      audio: K() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || cl(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Bl(r).scene && !fe(),
      upstream: O()
    }), d.easing = l.selection && I(l.selection.owner) ? EA(A, P(l.selection), l.selection.frames, le(l.selection.owner)) : null;
  }
  function M() {
    return Rm(o, { camera: a });
  }
  function de(N = null) {
    var X;
    const b = d.videoTransport, A = b.ready && !ve() && b.frameCount > 0 ? { video: cl(r, ["bg_media"]), frames: b.frameCount, duration: Number(b.duration || 0) } : null;
    return wd(o, {
      bg: A,
      port: _(),
      sceneItems: fe() ? 0 : ((X = ne()) == null ? void 0 : X.urls.length) ?? 0,
      upstream: ie(N),
      openClip: N,
      camera: a
    });
  }
  function Q(N) {
    var A;
    if (((A = N.source) == null ? void 0 : A.kind) !== "port" || N.clip.duration !== null) return null;
    const b = N.origin ? me(N) : y(N) ? _() : null;
    return b ? vd(N.clip, o.timeline.fps, b) : null;
  }
  function R(N) {
    if (N === "camera") return g() ? o.camera : null;
    if (N === "scene") return i ? o.scene : null;
    const b = ce(N);
    return b ? b.owner : ye(N);
  }
  function k(N) {
    var b;
    return ((b = ce(N)) == null ? void 0 : b.editable) ?? !0;
  }
  function P(N) {
    return N.lane ? [N.lane] : No(R(N.owner));
  }
  function le(N) {
    var A;
    if (N === "camera") return 0;
    const b = (A = R(N)) == null ? void 0 : A.clip;
    return b ? b.start - b.in : 0;
  }
  function q(N) {
    return `${xo(N, t.frame)}:${N.start - N.in}`;
  }
  function I(N) {
    var A;
    const b = R(N);
    return !!b && b.locked !== !0 && k(N) && ((A = ce(N)) == null ? void 0 : A.part) !== "scene";
  }
  function v(N) {
    const b = Math.max(0, Math.round(N));
    if (b === t.frame) return;
    _e(), t.frame = b, c.frame.value = b, _e();
    const A = [t.selectedId, t.worldSelectedId];
    Y(), B(), A[0] !== t.selectedId || A[1] !== t.worldSelectedId ? pe() : h() && we(), be(), $({ reason: pt.PLAYHEAD });
  }
  function K() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function m(N) {
    C(), D.seek(N);
  }
  function S() {
    s && D.stop();
  }
  function V() {
    C(), D.toggle();
  }
  function w() {
    _e(), B(), pe(), be(), $();
  }
  function T() {
    ee(), p(), w();
  }
  function z() {
    const { selection: N } = l;
    I(N.owner) && (S(), Z1(R(N.owner), P(N), N.frames, t.frame - le(N.owner)), l.selection = null, T());
  }
  function Z(N) {
    const b = fi(N);
    if (b === null || b === o.timeline.fps) return;
    S();
    const A = Math.round(t.frame * b / o.timeline.fps);
    SS(o, b), l.selection = null, D.seek(A), T();
  }
  function E() {
    const N = f(r);
    N !== null && N !== o.timeline.fps && Z(N);
  }
  return {
    connect(N) {
      ({
        commitAndRefreshNode: p,
        getPortMediaMeta: _,
        hasCamera: g,
        inspectorTimed: h,
        isExternalSticker: y,
        markObjectVisualsDirty: B,
        playback: D,
        pushHistory: ee,
        refreshModalVideoSource: C,
        releaseHiddenSelection: Y,
        requestDraw: $,
        sceneFiles: ne,
        syncCutoutShot: _e,
        stickerById: ye,
        syncSidePanelModel: we,
        updateSelectionMenu: be,
        updateSidePanel: pe,
        upstreamBackground: ve,
        upstreamLinked: fe,
        upstreamOutput: ie,
        upstreamPortMeta: me,
        upstreamRow: ce,
        upstreamTimelineLayers: O
      } = N);
    },
    syncTimeline: L,
    timelineTimed: M,
    timelineSpanFrames: de,
    portBarEnd: Q,
    timelineOwner: R,
    selectedLanes: P,
    timelineOffset: le,
    clipView: q,
    timelineEditable: I,
    rowEditable: k,
    setTimelineFrame: v,
    jumpTimelineTo: m,
    stopTimelinePlayback: S,
    togglePlayback: V,
    refreshTimelineEdit: w,
    commitTimelineEdit: T,
    deleteSelectedKeyframes: z,
    changeTimelineFps: Z,
    applyVideoTimelineFps: E
  };
}
function sC(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R;
  function k(P) {
    var le, q;
    if (!(n || !o)) {
      if (P.type === "seek") {
        if (P.phase === "move") {
          s.scrubFrame = P.frame, t.request("seek");
          return;
        }
        t.cancel(), P.phase === "start" && y(), g.seek(P.frame);
        return;
      }
      if (P.type === "play") {
        L();
        return;
      }
      if (P.type === "mute") {
        M(), ve();
        return;
      }
      if (P.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? O()), s.selection = null, ve();
        return;
      }
      if (P.type === "restore-upstream-deleted" || P.type === "revert-upstream-layer") {
        const I = (q = (le = a.timeline) == null ? void 0 : le.groups) == null ? void 0 : q.find((K) => K.key === P.key), v = P.type === "restore-upstream-deleted" ? I == null ? void 0 : I.restore : I == null ? void 0 : I.revert;
        if (!v || v.disabled) return;
        P.type === "restore-upstream-deleted" ? C(P.key) : Y(P.key), ve();
        return;
      }
      if (P.type === "toggle-row") {
        s.openRows.has(P.id) ? s.openRows.delete(P.id) : s.openRows.add(P.id), ve();
        return;
      }
      if (P.type === "toggle-visible") {
        if (!$(P.id)) return;
        const I = R(P.id);
        if (P.id === B0) i.painting_visible = !i.painting_visible;
        else if ((I == null ? void 0 : I.part) === "painting") I.sceneState.painting_visible = !I.sceneState.painting_visible;
        else {
          const v = me(P.id);
          if (!v) return;
          v.visible = !v.visible;
        }
        D(), u();
        return;
      }
      if (P.type === "select-row") {
        const I = we(P.id);
        if (I && !I.visible || P.id === "camera" && !l()) return;
        I && !xo(I.clip, r.frame) && _(I.clip.start), (I == null ? void 0 : I.placement) === "world" ? ne(I.id) : P.id === "camera" ? ye(f()) : ye(p().find((v) => v.id === P.id) || null), pe(), s.selection = null, Q(), de(), ee();
        return;
      }
      if (P.type === "select-keys") {
        const I = ie(P.owner), v = P.frames.map((S) => S - I), K = s.selection, m = (K == null ? void 0 : K.owner) === P.owner && K.lane === P.lane;
        if (P.additive && m) {
          const S = new Set(K.frames);
          for (const V of v)
            S.has(V) ? S.delete(V) : S.add(V);
          K.frames = [...S].sort((V, w) => V - w);
        } else
          s.selection = v.length ? { owner: P.owner, lane: P.lane, frames: v } : null;
        ve();
        return;
      }
      if (P.type === "move-keys") {
        const I = s.selection;
        if (!I || !fe(I.owner)) return;
        const v = me(I.owner), K = _e(I);
        if (P.phase === "start") {
          be(), s.drag = { keyframes: K.map((w) => structuredClone(v[w].keyframes)), frames: I.frames, limit: ce() };
          return;
        }
        const { drag: m } = s;
        if (!(m != null && m.keyframes)) return;
        K.forEach((w, T) => {
          v[w].keyframes = structuredClone(m.keyframes[T]);
        });
        const S = ie(I.owner), V = Q1(v, K, m.frames, P.delta, -S, m.limit - 1 - S);
        if (I.frames = m.frames.map((w) => w + V), P.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, V ? u() : B();
        return;
      }
      if (P.type === "clip") {
        const I = me(P.id);
        if (!(I != null && I.clip) || I.locked || !$(P.id)) return;
        if (P.phase === "start") {
          be();
          const { clip: S } = I, V = ce(), w = h(I), T = S.duration === null ? w ?? V : S.start + S.duration;
          s.drag = { clip: { ...S }, span: ce(S), limit: V, end: T, last: S.duration === null ? w ?? S.start + 1 : T };
          return;
        }
        const { drag: v } = s;
        if (!(v != null && v.clip)) return;
        const K = v.clip, m = d(I.clip);
        if (I.clip = { ...K }, P.delta && P.mode === "move" ? nS(I.clip, Math.min(P.delta, Math.max(0, v.limit - v.last))) : P.delta && P.mode === "start" ? rS(I.clip, Math.min(K.start + P.delta, Math.max(v.limit - 1, K.start))) : P.delta && iS(I.clip, Math.min(v.end + P.delta, Math.max(v.limit, v.end)), v.span), P.phase !== "end") {
          t.request("timeline"), d(I.clip) !== m && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, D(), JSON.stringify(I.clip) !== JSON.stringify(K) ? u() : B();
        return;
      }
      if (P.type === "key-row") {
        if (P.owner === "scene" || !fe(P.owner)) return;
        be(), q1(me(P.owner), r.frame - ie(P.owner)), u();
        return;
      }
      if (P.type === "fps") {
        const I = aS(P.fps);
        if (I === null || I === i.timeline.fps || a.timeline.fpsLocked) {
          ve();
          return;
        }
        c(I);
        return;
      }
      if (P.type === "length") {
        const I = lS(P.length);
        if (I === void 0 || I === i.timeline.length) {
          ve();
          return;
        }
        be(), i.timeline.length = I, u();
        return;
      }
      if (P.type === "easing") {
        const I = s.selection;
        if (!I || !fe(I.owner)) return;
        be(), tS(me(I.owner), _e(I), I.frames, P.easing), P.commit ? u() : B();
      }
    }
  }
  return {
    connect(P) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: p,
        jumpTimelineTo: _,
        playback: g,
        portBarEnd: h,
        refreshModalVideoSource: y,
        refreshTimelineEdit: B,
        releaseHiddenSelection: D,
        requestDraw: ee,
        restoreUpstreamDeletedCommand: C,
        revertUpstreamLayerCommand: Y,
        rowEditable: $,
        selectWorldSticker: ne,
        selectedLanes: _e,
        setSelectedItem: ye,
        stickerById: we,
        stopTimelinePlayback: be,
        syncFloatingViewButtonState: pe,
        syncTimeline: ve,
        timelineEditable: fe,
        timelineOffset: ie,
        timelineOwner: me,
        timelineSpanFrames: ce,
        timelineTimed: O,
        togglePlayback: L,
        toggleVideoMuted: M,
        updateSelectionMenu: de,
        updateSidePanel: Q,
        upstreamRow: R
      } = P);
    },
    onTimelineAction: k
  };
}
function aC(e) {
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
  let d, u, f, p, _, g, h;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = $n(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), B(), o.setDirtyCanvas(!0, !0));
  }
  function B() {
    var _e;
    if (a || (p(), g(), h(), l.coverage = $n(l.coverage), Bm(o, l.active), !c)) return;
    const $ = f(), ne = Ym(o, $, String(c.value ?? ""), { rebased: n });
    ne !== null && ($ !== l && (l.id = $.id), c.value = ne, (_e = c.callback) == null || _e.call(c, ne));
  }
  function D() {
    l.ui_settings = U2(l.ui_settings), a || B();
  }
  function ee() {
    var $;
    a || (B(), ($ = o.setDirtyCanvas) == null || $.call(o, !0, !0));
  }
  function C() {
    a || d() && _().catch(($) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", $);
    });
  }
  function Y($ = {}) {
    var ye, we, be, pe, ve, fe, ie, me, ce, O, L;
    const ne = $.syncPreview !== !1, _e = $.syncGraph !== !1;
    ne && ((be = (we = (ye = Ng(o)) == null ? void 0 : ye.runtime) == null ? void 0 : we.requestDraw) == null || be.call(we), (fe = (ve = (pe = Mg(o)) == null ? void 0 : pe.dom) == null ? void 0 : ve.requestDraw) == null || fe.call(ve), (ie = o.setDirtyCanvas) == null || ie.call(o, !0, !1)), _e && ((ce = (me = o.graph) == null ? void 0 : me.setDirtyCanvas) == null || ce.call(me, !0, !0), (L = (O = t == null ? void 0 : t.canvas) == null ? void 0 : O.setDirty) == null || L.call(O, !0, !0));
  }
  return {
    connect($) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: p,
        syncPaintingLayerAsync: _,
        syncPortHandoff: g,
        syncUpstreamEdits: h
      } = $);
    },
    apply: y,
    commitState: B,
    persistUiSettings: D,
    commitAndRefreshNode: ee,
    triggerBackgroundPersistenceOnClose: C,
    syncCoverageChangeToNodePreviews: Y
  };
}
function lC(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I, v;
  function K(b, A, X = "Clear") {
    return new Promise((ge) => {
      a.confirmDialog = {
        visible: !0,
        title: String(b || ""),
        text: String(A || ""),
        confirmLabel: String(X || "Confirm"),
        resolve: ge
      };
    });
  }
  async function m() {
    var X, ge;
    if (r || !await K(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = ko(null), ie();
    const A = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((he) => he.placement === "world" || A.includes(he)) : A, n || (i.assets = {}), t.selectedId = ((X = A[0]) == null ? void 0 : X.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((ge = A[0]) == null ? void 0 : ge.id) || null, ce();
    else {
      const he = gS(i.shots, i.active.selected_shot_id);
      i.stickers = A, i.assets = {}, i.shots = he.shots, t.selectedId = he.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = he.selectedShotId, !he.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, ce();
    }
    O(), u(), I(), q(), M();
  }
  async function S(b) {
    var xe, se, ke, j;
    if (r) return;
    const A = b === "mask" ? "mask" : "paint", X = A === "mask" ? "Mask" : "Paint", ge = B(A);
    if (!(!ge.length && !(((xe = t.interaction) == null ? void 0 : xe.kind) === "draw" && ((se = t.interaction) == null ? void 0 : se.layerKind) === A) || !await K(
      `Clear ${X}`,
      `This will remove all ${A} strokes in the current node.`,
      `Clear ${X}`
    ))) {
      if (((ke = t.interaction) == null ? void 0 : ke.kind) === "draw" && ((j = t.interaction) == null ? void 0 : j.layerKind) === A) {
        const ae = _(t.interaction);
        ae && t.paintEngine.cancelActiveStroke(ae), t.interaction = null;
      }
      ge.length = 0, i.painting.raster_objects = D().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") !== A), A === "paint" && (y().length = 0), ie(), O(), u(), I(), q(), le(), M();
    }
  }
  function V() {
    if (r) return;
    const b = ee();
    if (!b || !we(b) || Y(b) || Ut(b) || n && pe(b)) return;
    let A;
    n ? A = TS(b, Wl(i), h()) : (A = JSON.parse(JSON.stringify(b)), A.id = Xo("st"), A.yaw_deg = Kt((A.yaw_deg || 0) + 8), A.z_index = h()), i.stickers.push(A), i.active.selected_sticker_id = A.id, t.selectedId = A.id, t.selectedIds = [A.id], ve(), O(), u(), q(), I(), M();
  }
  function w() {
    const b = R();
    return b ? (v(b) && (k(), Ut(b) ? p([b]) : OS(i, b.id), c(), ve(), O(), u(), I(), q(), P(), M()), !0) : !1;
  }
  function T() {
    var ge, he, xe, se, ke;
    if (r) return;
    const b = C(), A = ee();
    if (!A && b.length === 0 || b.some((j) => $(j))) return;
    k();
    const X = b.filter(Ut);
    if (X.length && (p(X), ve()), b.length > 1 || X.length) {
      const j = new Set(b.filter((te) => be(te)).map((te) => String(te.actionGroupId || te.id || ""))), ae = new Set(b.filter((te) => ne(te)).map((te) => me(te.rasterObjectId || te.id || ""))), G = new Set(b.filter(we).map((te) => String(te.id || "")));
      j.size > 0 && (i.painting.paint.strokes = (Array.isArray((he = (ge = i.painting) == null ? void 0 : ge.paint) == null ? void 0 : he.strokes) ? i.painting.paint.strokes : []).filter((te) => !j.has(String((te == null ? void 0 : te.actionGroupId) || ""))), i.painting.groups = y().filter((te) => !j.has(String((te == null ? void 0 : te.actionGroupId) || (te == null ? void 0 : te.id) || ""))), ie()), ae.size > 0 && (i.painting.raster_objects = D().filter((te) => !ae.has(String((te == null ? void 0 : te.id) || ""))), fe()), G.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((te) => G.has(String((te == null ? void 0 : te.id) || "")) ? Y(te) ? (ye(te) || (te.visible = !1), !0) : !1 : !0), ce(), ve()), t.selectedId = null, t.selectedIds = [], O(), u(), I(), q(), M();
      return;
    }
    if (be(A)) {
      const j = String(A.actionGroupId || A.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((se = (xe = i.painting) == null ? void 0 : xe.paint) == null ? void 0 : se.strokes) ? i.painting.paint.strokes : []).filter((ae) => String((ae == null ? void 0 : ae.actionGroupId) || "").trim() !== j), i.painting.groups = y().filter((ae) => String((ae == null ? void 0 : ae.actionGroupId) || (ae == null ? void 0 : ae.id) || "").trim() !== j), ie(), t.selectedId = null, t.selectedIds = [], O(), u(), I(), q(), M();
      return;
    }
    if (ne(A)) {
      const j = me(A.rasterObjectId || A.id || "");
      i.painting.raster_objects = D().filter((ae) => String((ae == null ? void 0 : ae.id) || "").trim() !== j), fe(), t.selectedId = null, t.selectedIds = [], O(), u(), I(), q(), M();
      return;
    }
    if (o && _e(A)) {
      f();
      return;
    }
    if (s === "stickers" || we(A)) {
      if (Y(A)) {
        if (ye(A)) return;
        A.visible = !1, ve(), O(), u(), I(), q(), M();
        return;
      }
      i.stickers = i.stickers.filter((j) => j.id !== A.id), ce(), ve(), t.selectedId = ((ke = g()[0]) == null ? void 0 : ke.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, O(), u(), I(), q(), M();
      return;
    }
    l();
  }
  function z(b, A) {
    r || (k(), b(A) && (L(), ve(), O(), u(), I(), q(), M()));
  }
  function Z(b) {
    z(de, b);
  }
  function E(b) {
    z(Q, b);
  }
  function N() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", le(), I());
  }
  return {
    connect(b) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: p,
        getActivePaintTargetDescriptor: _,
        getList: g,
        getNextStickerZIndex: h,
        getPaintingGroupList: y,
        getPaintingLayerList: B,
        getRasterObjectList: D,
        getSelected: ee,
        getSelectedItems: C,
        isExternalSticker: Y,
        isItemLocked: $,
        isRasterObjectItem: ne,
        isShotItem: _e,
        isStickerHidden: ye,
        isStickerItem: we,
        isStrokeGroupItem: be,
        isUploadingSticker: pe,
        markObjectVisualsDirty: ve,
        markPaintCompositeVisualsDirty: fe,
        markPaintStrokeVisualsDirty: ie,
        parseRasterObjectSelectionId: me,
        pruneUnusedAssets: ce,
        pushHistory: O,
        releaseHiddenSelection: L,
        requestDraw: M,
        restoreUpstreamDeleted: de,
        revertUpstreamLayer: Q,
        selectedWorldSticker: R,
        stopTimelinePlayback: k,
        syncFloatingViewButtonState: P,
        syncPaintUi: le,
        updateSelectionMenu: q,
        updateSidePanel: I,
        worldStickerEditable: v
      } = b);
    },
    clearAll: m,
    clearPaintingLayer: S,
    duplicateSelected: V,
    deleteSelectedWorldSticker: w,
    deleteSelected: T,
    restoreUpstreamDeletedCommand: Z,
    revertUpstreamLayerCommand: E,
    forceCursorTool: N
  };
}
function cC(e) {
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
  let _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce;
  function O(E) {
    return Bd(E == null ? void 0 : E.dataTransfer);
  }
  function L(E) {
    const N = !!E;
    n.active !== N && (n.active = N, d.classList.toggle("drop-active", N));
  }
  function M() {
    const E = new Set(
      (u.stickers || []).map((N) => String((N == null ? void 0 : N.asset_id) || "")).filter((N) => !!N)
    );
    Object.keys(u.assets || {}).forEach((N) => {
      E.has(N) || (delete u.assets[N], s.delete(N));
    });
  }
  async function de(E) {
    if (l || f !== "stickers" && f !== "cutout" || !lr(E)) return;
    if (c) {
      ie(), await le(E);
      return;
    }
    const N = Xo("asset"), b = Uo(a, `add:${N}`, async () => {
      try {
        const { image: A } = await Bo(E);
        s.set(N, A);
        const X = Xo("st");
        u.stickers.push({
          id: X,
          asset_id: N,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(A.naturalWidth || A.width || 1), Number(A.naturalHeight || A.height || 1)),
          rot_deg: 0,
          z_index: ee()
        }), pe(u.stickers[u.stickers.length - 1]), D(), ce(), me(), we();
        const ge = await Pi(E, {
          fetchApi: (se, ke) => t.fetchApi(se, ke)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((se) => String((se == null ? void 0 : se.asset_id) || "") === N).length) return;
        u.assets[N] = ge, M(), ye(), g(), ce(), me(), we();
      } catch (A) {
        delete u.assets[N], s.delete(N);
        const X = Array.isArray(u.stickers) ? u.stickers : [], ge = X.filter((he) => String((he == null ? void 0 : he.asset_id) || "") === N);
        throw ge.length && (u.stickers = X.filter((he) => String((he == null ? void 0 : he.asset_id) || "") !== N), ge.some((he) => String((he == null ? void 0 : he.id) || "") === String(i.selectedId || "")) && pe(null), ce(), me(), we(), g()), A;
      }
    });
    try {
      await b;
    } catch {
    }
  }
  function Q() {
    var E;
    l || f !== "stickers" && f !== "cutout" || (E = p == null ? void 0 : p.openImagePicker) == null || E.call(p, "add");
  }
  function R() {
    var E;
    l || !c || (E = p == null ? void 0 : p.openImagePicker) == null || E.call(p, "add-world");
  }
  async function k(E) {
    l || !c || !lr(E) || (ie(), await le(E, "world"));
  }
  function P() {
    const E = { x: r.width / 2, y: r.height / 2 }, N = $() ? o.pick(B(), E.x, E.y, r.width, r.height) : null;
    return i_(ve(), N, y());
  }
  async function le(E, N = "sky") {
    const b = Wl(u), A = Uo(a, `add:${b}`, async () => {
      const { image: X } = await Bo(E), ge = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1)),
        rot_deg: 0
      }, he = { kind: "file", filename: "" }, xe = N === "world" ? FS(b, he, P()) : Md(b, he, ge, ee());
      s.set(fe(xe), X), u.stickers.push(xe), N === "world" ? be(b) : pe(xe), D(), ce(), me(), we();
      try {
        const se = await Pi(E, {
          fetchApi: (j, ae) => t.fetchApi(j, ae)
        }), ke = u.stickers.find((j) => j.id === b);
        if (!ke) return;
        ke.source = Aa(se), s.set(fe(ke), X), ye(), g();
      } catch (se) {
        throw u.stickers = u.stickers.filter((ke) => ke.id !== b), i.selectedId === b && pe(null), i.worldSelectedId === b && _(), ye(), g(), se;
      } finally {
        ce(), me(), we();
      }
    });
    try {
      await A;
    } catch {
    }
  }
  async function q(E, N) {
    const b = Uo(a, `replace:${N}:${Xo("asset")}`, async () => {
      const { image: A } = await Bo(E), X = await Pi(E, {
        fetchApi: (he, xe) => t.fetchApi(he, xe)
      }), ge = u.stickers.find((he) => he.id === N);
      if (ge) {
        ge.source = Aa(X), ge.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const he of [ge.size.value, ...ge.size.keyframes.map((xe) => xe.value)])
          he.vFOV_deg = h(he.hFOV_deg, Number(A.naturalWidth || A.width || 1), Number(A.naturalHeight || A.height || 1));
        s.set(fe(ge), A), _e(), ye(), g(), ce(), me(), we();
      }
    });
    try {
      await b;
    } catch {
    }
  }
  async function I(E) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const N = C();
    if (!N || !ne(N) || Y(N) || Ut(N) || !lr(E)) return;
    if (c) {
      await q(E, N.id);
      return;
    }
    const b = String(N.id || ""), A = Xo("asset"), X = Uo(a, `replace:${b}:${A}`, async () => {
      var j;
      const ge = (Array.isArray(u.stickers) ? u.stickers : []).find((ae) => String((ae == null ? void 0 : ae.id) || "") === b) || null;
      if (!ge || !ne(ge) || Y(ge)) return;
      const he = String(ge.asset_id || ""), xe = he ? dn(((j = u.assets) == null ? void 0 : j[he]) || null) : null, se = Number(ge.vFOV_deg || 0), ke = ge.crop && typeof ge.crop == "object" ? { ...ge.crop } : null;
      try {
        const { image: ae } = await Bo(E);
        s.set(A, ae), ge.asset_id = A, ge.vFOV_deg = h(
          Number(ge.hFOV_deg || 30),
          Number(ae.naturalWidth || ae.width || 1),
          Number(ae.naturalHeight || ae.height || 1)
        ), ge.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, _e(), ce(), me(), we();
        const G = await Pi(E, {
          fetchApi: (H, J) => t.fetchApi(H, J)
        }), te = (Array.isArray(u.stickers) ? u.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === b) || null;
        if (!te || String(te.asset_id || "") !== A) return;
        u.assets[A] = G, M(), ye(), g(), ce(), me(), we();
      } catch (ae) {
        delete u.assets[A], s.delete(A);
        const G = (Array.isArray(u.stickers) ? u.stickers : []).find((te) => String((te == null ? void 0 : te.id) || "") === b) || null;
        throw G && String(G.asset_id || "") === A && (he && xe && (u.assets[he] = xe), G.asset_id = he, G.vFOV_deg = se, G.crop = ke ? { ...ke } : null), _e(), g(), ce(), me(), we(), ae;
      }
    });
    try {
      await X;
    } catch {
    }
  }
  function v() {
    var N;
    if (l) return;
    const E = C();
    !E || !ne(E) || Y(E) || Ut(E) || (N = p == null ? void 0 : p.openImagePicker) == null || N.call(p, "replace");
  }
  async function K() {
    if (l || f !== "stickers") return;
    if (c) {
      await m();
      return;
    }
    const E = u.assets && typeof u.assets == "object" ? u.assets : {}, N = Object.entries(E).filter(([, A]) => {
      const X = String((A == null ? void 0 : A.type) || "").toLowerCase(), ge = String((A == null ? void 0 : A.value) || "");
      return X === "dataurl" && ge.startsWith("data:image");
    });
    if (!N.length) return;
    let b = !1;
    for (const [A, X] of N)
      try {
        const ge = String((X == null ? void 0 : X.value) || "");
        if (!ge) continue;
        const he = await fetch(ge).then((ae) => ae.blob()), xe = String(he.type || "image/png").split("/")[1] || "png", se = String((X == null ? void 0 : X.name) || `${A}.${xe}`), ke = new File([he], se, { type: he.type || "image/png" }), j = await Pi(ke, {
          fetchApi: (ae, G) => t.fetchApi(ae, G)
        });
        u.assets[A] = {
          ...j,
          w: Number((X == null ? void 0 : X.w) || 0),
          h: Number((X == null ? void 0 : X.h) || 0)
        }, b = !0;
      } catch {
      }
    b && (g(), we());
  }
  async function m() {
    let E = !1;
    for (const N of u.stickers) {
      const b = N.source.data_url;
      if (b)
        try {
          const A = await fetch(b).then((xe) => xe.blob()), X = String(A.type || "image/png").split("/")[1] || "png", ge = new File([A], `${N.id}.${X}`, { type: A.type || "image/png" }), he = await Pi(ge, {
            fetchApi: (xe, se) => t.fetchApi(xe, se)
          });
          N.source = Aa(he), E = !0;
        } catch {
        }
    }
    E && (g(), we());
  }
  function S(E) {
    f !== "stickers" && f !== "cutout" || l || (E.preventDefault(), L(!0));
  }
  function V(E) {
    var A;
    if (f !== "stickers" && f !== "cutout" || l) return;
    E.preventDefault(), E.stopPropagation(), n.depth = 0, L(!1);
    const b = Array.from(((A = E.dataTransfer) == null ? void 0 : A.files) || []).find((X) => lr(X));
    b && de(b);
  }
  function w(E) {
    f !== "stickers" && f !== "cutout" || l || O(E) && (n.depth += 1, L(!0), E.preventDefault());
  }
  function T(E) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && O(E) && L(!0), n.active && E.preventDefault());
  }
  function z(E) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const N = Number(E.clientX) <= 0 && Number(E.clientY) <= 0;
    (n.depth === 0 || N) && L(!1);
  }
  function Z(E) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, L(!1), O(E) && E.preventDefault());
  }
  return {
    connect(E) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: g,
        computeStickerVFov: h,
        contentSphere: y,
        currentSpaceCamera: B,
        forceCursorTool: D,
        getNextStickerZIndex: ee,
        getSelected: C,
        isExternalSticker: Y,
        isSpaceView: $,
        isStickerItem: ne,
        markObjectVisualsDirty: _e,
        pushHistory: ye,
        requestDraw: we,
        selectWorldSticker: be,
        setSelectedItem: pe,
        spaceViewState: ve,
        stickerImageKey: fe,
        stopTimelinePlayback: ie,
        updateSelectionMenu: me,
        updateSidePanel: ce
      } = E);
    },
    addImageStickerFromFile: de,
    addImageSticker: Q,
    addWorldImageSticker: R,
    addWorldStickerFromFile: k,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: v,
    migrateLegacyEmbeddedAssets: K,
    pruneUnusedAssets: M,
    setDropCue: L,
    onCanvasDragOver: S,
    onCanvasDrop: V,
    onWindowDragEnter: w,
    onWindowDragOver: T,
    onWindowDragLeave: z,
    onWindowDrop: Z
  };
}
function uC(e) {
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
    uiState: _
  } = e;
  let g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I = o;
  function v(G, te) {
    var U;
    const H = (U = C().space) == null ? void 0 : U.gizmo;
    if (we() && H && q("hover", te) !== null && q("down", te))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: H.mode, start: H.transform, base: ee(), changed: !1 }, r.setPointerCapture(G.pointerId), k(te), !0;
    const J = og(ee(), h(ce()));
    return f_(D(), J, te, r.width, r.height) ? (we() || (me(A()), le(), P(), fe()), n.interaction = { kind: "world_select" }, r.setPointerCapture(G.pointerId), !0) : !1;
  }
  function K() {
    if (s || p !== "cutout") return;
    const G = A();
    if (G) {
      me(G), n.mode = "pano", R(Kt(Number(G.yaw_deg || 0)), Oe(Number(G.pitch_deg || 0), -89.9, 89.9)), le(), P(), fe({ cause: "cutout_frame" });
      return;
    }
    const te = cm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [te], me(te), Y(), n.mode = "pano", ve(), B(), le(), P(), fe({ cause: "cutout_frame" });
  }
  function m() {
    s || !u || ne() || (L(), d.camera = kS(O()), N(), me(A()), Y(), ve(), B(), le(), P(), fe({ cause: "cutout_frame" }));
  }
  function S() {
    L(), d.camera = null, me(null), N(), ve(), B(), le(), P(), fe({ cause: "cutout_frame" });
  }
  function V(G, te) {
    u && be(G) && (d.camera.projection = te === So ? "erp" : "perspective", te === So) || z(G, te);
  }
  function w() {
    s || p !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ve(), B(), le(), P(), fe());
  }
  function T(G, te) {
    const H = a.frameSafeRect;
    if (!G || !H || n.mode !== "frame") return !1;
    const J = Du * Ri(H, G), U = ud(cd(H, te), J);
    return G.hFOV_deg = U.hFOV_deg, G.vFOV_deg = U.vFOV_deg, !0;
  }
  function z(G, te) {
    if (!G || G.locked === !0) return;
    const H = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, J = (() => {
      const ue = String(G.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(ue)) {
        const [Se, Me] = ue.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(Se) && Number.isFinite(Me)) return Se >= Me;
      }
      const F = Number(G.hFOV_deg || 64), W = Number(G.vFOV_deg || 40);
      return Math.abs(F - W) > 1e-6 ? F >= W : zi(G) >= 1;
    })();
    let [U, x] = H[String(te)] || H["1:1"];
    U >= x !== J && ([U, x] = [x, U]);
    const re = U / x;
    if (!T(G, re)) {
      const ue = Oe(Number(G.vFOV_deg || 40), 1, 179);
      G.vFOV_deg = ue, G.hFOV_deg = Ma(ue, re);
    }
    G.aspect_id = `${U}:${x}`;
  }
  function Z(G, te, H) {
    if (!G || G.locked === !0) return !1;
    const J = xs(te, H);
    if (!J) return !1;
    const U = J.ratio;
    if (!T(G, U)) {
      const x = Oe(Number(G.vFOV_deg || 40), 1, 179);
      G.vFOV_deg = x, G.hFOV_deg = Ma(x, U);
    }
    return G.aspect_id = J.label, !0;
  }
  function E(G) {
    if (!G || G.locked === !0) return;
    const te = String(G.aspect_id || "").trim(), H = ui(G), J = H.tanHalfX / Math.max(1e-12, H.tanHalfY), U = 1 / Math.max(1e-12, J);
    if (!T(G, U)) {
      const x = Oe(Number(G.vFOV_deg || 60), 1, 179);
      G.vFOV_deg = x, G.hFOV_deg = Ma(x, U);
    }
    if (/^\d+:\d+$/.test(te)) {
      const [x, re] = te.split(":");
      G.aspect_id = `${re}:${x}`;
    } else
      G.aspect_id = Fi(G);
  }
  function N(G = !0) {
    var J, U;
    if (!t) return;
    const te = I;
    if (!y()) {
      I = null, (J = d.shots) != null && J.length && (d.shots = []), te && b(te, null);
      return;
    }
    const H = (U = d.shots) == null ? void 0 : U[0];
    G && H && I && MS(d.camera, n.frame, H, I), I = Km(d.camera, n.frame), H ? Object.assign(H, I, { position: [...I.position] }) : d.shots = [{ ...I, position: [...I.position] }], te || b(null, I);
  }
  function b(G, te) {
    var x, re;
    !te && n.mode === "frame" && pe(G);
    const H = (te == null ? void 0 : te.position) ?? [0, 0, 0];
    if (((re = (x = n.viewTransition) == null ? void 0 : x.end) == null ? void 0 : re.mode) === "3dof") {
      Q({ ...O(), position: H }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !_e()) return;
    const J = (G == null ? void 0 : G.position) ?? [0, 0, 0];
    if (J.every((ue, F) => ue === H[F])) return;
    const U = { ...O(), position: J };
    g({ mode: "6dof", position: J, moved: !0 }), n.viewDistance = U.distance, Q({ ...U, position: H }, { mode: "3dof", moved: !1 });
  }
  function A() {
    if (!l) return null;
    const G = Array.isArray(d.shots) ? d.shots : [];
    if (!G.length) return null;
    const te = String(d.active.selected_shot_id || "");
    return G.find((H) => String((H == null ? void 0 : H.id) || "") === te) || G[0] || null;
  }
  function X(G, te, H = {}) {
    var x;
    if ((G == null ? void 0 : G.kind) !== "roll_frame" || !G.shot) return;
    G.accumulatedRad += sm(te, G.lastAngle), G.lastAngle = te;
    const J = am(G.start.roll_deg, G.accumulatedRad, {
      shiftKey: H.shiftKey,
      altKey: G.altStarted ? !1 : H.altKey
    });
    G.shot.roll_deg = J, G.changed = G.changed || Math.abs(G.accumulatedRad) > 1e-9;
    const U = (((x = _.sidePanel) == null ? void 0 : x.params) || []).find((re) => re.key === "roll_deg");
    U && (U.value = J, U.displayValue = po(J), U.fillPct = (J + 180) / 360 * 100), M(), xe(G), fe({ localOnly: !0 });
  }
  function ge(G, te, H = {}) {
    var x;
    if ((G == null ? void 0 : G.kind) !== "roll_frame" || !G.shot || !G.rollGesture) return;
    const J = r0(G.rollGesture, te, H);
    if (!J) return;
    G.rollGesture = J.gesture, G.center = J.gesture.center, G.lastAngle = J.gesture.lastAngle, G.accumulatedRad = J.gesture.accumulatedRad, G.shot.roll_deg = J.rollDeg, G.changed = G.changed || Math.abs(J.gesture.accumulatedRad) > 1e-9;
    const U = (((x = _.sidePanel) == null ? void 0 : x.params) || []).find((re) => re.key === "roll_deg");
    U && (U.value = J.rollDeg, U.displayValue = po(J.rollDeg), U.fillPct = (J.rollDeg + 180) / 360 * 100), M(), xe(G), fe({ localOnly: !0 });
  }
  function he(G, te) {
    const H = ie(G);
    return Math.atan2(H.y - te.y, H.x - te.x);
  }
  function xe(G) {
    var re, ue;
    if ((G == null ? void 0 : G.kind) !== "roll_frame" || !G.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const te = $(G.shot), H = (re = r.getBoundingClientRect) == null ? void 0 : re.call(r), J = (ue = c.getBoundingClientRect) == null ? void 0 : ue.call(c);
    if (!te || !H || !J || r.width <= 0 || r.height <= 0) return;
    const U = H.width / r.width, x = H.height / r.height;
    _.tooltip.text = `${po(G.shot.roll_deg)}°`, _.tooltip.left = H.left - J.left + (te.x + te.w * 0.5) * U, _.tooltip.top = H.top - J.top + (te.y + te.h * 0.5) * x + 12, _.tooltip.variant = "roll", _.tooltip.visible = !0;
  }
  function se(G) {
    var x;
    if (G.button !== 0 || s || n.mode !== "frame") return;
    const te = A();
    if (!te || te.locked === !0) return;
    const H = $(te);
    if (!H) return;
    const J = { x: H.x + H.w * 0.5, y: H.y + H.h * 0.5 }, U = he(G, J);
    n.interaction = {
      kind: "roll_frame",
      shot: te,
      center: J,
      lastAngle: U,
      accumulatedRad: 0,
      start: { roll_deg: Number(te.roll_deg ?? te.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (x = i.setPointerCapture) == null || x.call(i, G.pointerId), G.preventDefault(), M(), xe(n.interaction), fe({ localOnly: !0 });
  }
  function ke(G) {
    var te;
    ((te = n.interaction) == null ? void 0 : te.kind) !== "roll_frame" || n.interaction.source !== "knob" || X(
      n.interaction,
      he(G, n.interaction.center),
      G
    );
  }
  function j() {
    const G = n.interaction;
    (G == null ? void 0 : G.kind) !== "roll_frame" || G.source !== "knob" || (G.changed && (ve(), B(), le()), n.interaction = null, ye(), de(), M(), fe());
  }
  function ae(G) {
    const te = n.mode === "frame" && !s ? A() : null;
    !te || te.locked === !0 || Math.abs(Number(te.roll_deg ?? te.rot_deg ?? 0)) <= 1e-9 || (te.roll_deg = 0, ve(), B(), le(), M(), fe(), G.preventDefault());
  }
  return {
    connect(G) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: h,
        cameraShoots: y,
        commitAndRefreshNode: B,
        currentSpaceCamera: D,
        cutoutCamera: ee,
        editorViewInput: C,
        forceCursorTool: Y,
        getFrameViewRect: $,
        hasCamera: ne,
        hasSpaceContent: _e,
        hideTooltip: ye,
        isCameraSelected: we,
        isShotItem: be,
        leaveFrameView: pe,
        pushHistory: ve,
        requestDraw: fe,
        screenPos: ie,
        setSelectedItem: me,
        spaceScale: ce,
        spaceViewState: O,
        stopTimelinePlayback: L,
        syncFrameRollKnob: M,
        syncViewToggleState: de,
        transitionView: Q,
        turnViewTo: R,
        updateCursor: k,
        updateSelectionMenu: P,
        updateSidePanel: le,
        worldGizmoPointer: q
      } = G);
    },
    addCutoutFrame: K,
    addStudioCamera: m,
    deleteStudioCamera: S,
    setShotAspect: V,
    clearCutoutFrame: w,
    applyCutoutAspectCustom: Z,
    rotateCutoutAspect90: E,
    syncCutoutShot: N,
    getActiveCutoutShot: A,
    startCameraPress: v,
    applySharedRollInteractionPoint: ge,
    onFrameRollKnobPointerDown: se,
    onFrameRollKnobPointerMove: ke,
    finishKnobRoll: j,
    onFrameRollKnobDoubleClick: ae
  };
}
function dC(e) {
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
    videoTransportEl: _
  } = e;
  let g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie = null, me = !1;
  function ce(b) {
    if (n.mode = "pano", !b) return;
    h();
    const A = we().distance;
    n.viewYaw = Kt(b.yaw_deg), n.viewPitch = Oe(b.pitch_deg, -89.9, 89.9), n.viewFov = Oe(b.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...b.position], moved: !0 }), n.viewDistance = A, d.backgroundDirty = !0;
  }
  function O() {
    var J, U, x, re, ue;
    if (!r) return null;
    const b = (J = r.getBoundingClientRect) == null ? void 0 : J.call(r), A = Number((b == null ? void 0 : b.width) || 0) > 0 ? r.width / b.width : 1, X = Number((b == null ? void 0 : b.height) || 0) > 0 ? r.height / b.height : 1;
    d.frameCanvasScale = Math.min(A, X);
    let ge = 24, he = 24;
    const xe = Math.max(ge + 1, r.width - 24);
    let se = Math.max(he + 1, r.height - 24);
    const ke = (U = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : U.call(f), j = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a);
    let ae = 24;
    ke && b && ke.width > 0 && ke.height > 0 && (ae = Math.max(ae, (ke.right - b.left) * A + Vp)), j && b && j.width > 0 && j.height > 0 && ((re = p.frameRail) == null ? void 0 : re.visible) === !0 && (ae = Math.max(ae, (b.right - j.left) * A + Vp)), ge = Math.max(ge, ae);
    const G = Math.min(xe, r.width - ae);
    let te = 24;
    const H = (ue = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : ue.call(s);
    if (H && b && H.width > 0 && H.height > 0 && (te = Math.max(te, (H.bottom - b.top) * X + $c)), [l, _].forEach((F) => {
      var Me;
      if (!F || !b) return;
      const W = getComputedStyle(F);
      if (W.display === "none" || W.visibility === "hidden" || Number(W.opacity) <= 0) return;
      const Se = (Me = F.getBoundingClientRect) == null ? void 0 : Me.call(F);
      !Se || Se.width <= 0 || Se.height <= 0 || (te = Math.max(te, (b.bottom - Se.top) * X + $c));
    }), o && b) {
      const F = getComputedStyle(o);
      F.display !== "none" && F.visibility !== "hidden" && Number(F.opacity) > 0 && (te = Math.max(te, (A2 + $c) * X));
    }
    return he = Math.max(he, te), se = Math.max(he + 1, Math.min(se, r.height - te)), {
      x: ge,
      y: he,
      w: Math.max(1, G - ge),
      h: Math.max(1, se - he)
    };
  }
  function L(b = D()) {
    if (!b || !r) return null;
    const A = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return l1(A, b, Du * Ri(A, b));
  }
  function M(b = D()) {
    const A = L(b);
    return A ? { x: A.x, y: A.y, w: A.w, h: A.h } : null;
  }
  function de() {
    return u && !!D();
  }
  function Q(b, A) {
    const X = D();
    if (!X || X.locked === !0) return !1;
    const ge = Number(A) > 0, he = dm(X, A);
    if (!he) return !1;
    if (ge) {
      const xe = Du * Ri(
        d.frameSafeRect || { w: r.width, h: r.height },
        he
      ), se = dd({ width: r.width, height: r.height }, xe);
      if (se.halfW < r.width * 0.5 - 1e-6 || se.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return X.hFOV_deg = he.hFOV_deg, X.vFOV_deg = he.vFOV_deg, R(), fe(), !0;
  }
  function R() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, $(), y(), fe());
    }, 180);
  }
  function k() {
    return t && n.mode === "frame" && ee();
  }
  function P() {
    const b = D(), A = L(b);
    return b && A ? lg(b, A, { width: r.width, height: r.height }) : null;
  }
  function le() {
    var b;
    return ((b = B()) == null ? void 0 : b.radius) || fr;
  }
  function q(b) {
    const { position: A, yaw_deg: X, pitch_deg: ge, roll_deg: he, hFOV_deg: xe } = b.shot;
    return { position: A, yaw_deg: X, pitch_deg: ge, roll_deg: he, hFOV_deg: xe, distance: le() };
  }
  function I(b, A) {
    const { rect: X } = b;
    return i.pickSurface(_e(b.shot), A.x - X.x, A.y - X.y, X.w, X.h);
  }
  function v(b, A, X) {
    return fu(A, I(b, X), null, ye());
  }
  function K(b) {
    return JSON.stringify([q(b), b.rect]);
  }
  function m(b) {
    const A = D();
    A.position = [...b.position], A.yaw_deg = b.yaw_deg, A.pitch_deg = b.pitch_deg;
  }
  function S(b, A) {
    const X = D();
    !X || c || X.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: X,
      last: b,
      start: { yaw_deg: Number(X.yaw_deg || 0), pitch_deg: Number(X.pitch_deg || 0) },
      changed: !1
    }, ve(b), r.setPointerCapture(A));
  }
  function V(b, A, X) {
    const ge = P();
    if (!ge || c) return;
    const he = q(ge);
    n.interaction = b === "orbit" ? { kind: "frame_orbit", last: A, pivot: v(ge, he, A), changed: !1 } : { kind: "frame_pan", last: A, depth: qm(he, ye()), changed: !1 }, ve(A), r.setPointerCapture(X);
  }
  function w(b, A) {
    const X = P();
    if (!X) return;
    const ge = q(X), he = A.x - b.last.x, xe = A.y - b.last.y;
    m(b.kind === "frame_pan" ? Zm(ge, he, xe, X.rect.w, X.rect.h, b.depth) : Jm(ge, he, xe, r.height, b.pivot)), b.changed = b.changed || he !== 0 || xe !== 0, b.last = A, ne({ localOnly: !0, cause: "frame_view" });
  }
  function T(b, A) {
    const X = P();
    if (!X || c) return;
    const ge = q(X), he = performance.now(), xe = { x: b.x, y: b.y, time: he, key: i.contentRevision(), view: K(X) };
    if (!Xm(ie, xe)) {
      const se = I(X, b);
      ie = { ...xe, cost: performance.now() - he, hit: se };
    }
    m(Qm(ge, fu(ge, ie.hit, null, ye()), A, ye())), ie.view = K(P() ?? X), ie.wheelTime = he, R(), fe(), ne({ localOnly: !0, cause: "frame_view" });
  }
  function z(b, A) {
    const X = D();
    if (!X || c || X.locked === !0) return !1;
    const ge = X0(X, b, A);
    return ge === X ? !1 : (be(), X.position = ge.position, me = !0, !0);
  }
  function Z() {
    return me ? (me = !1, $(), y(), fe(), !0) : !1;
  }
  function E() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, $(), y(), fe(), !0) : !1;
  }
  function N() {
    const b = n.interaction;
    if (!(b != null && b.shot) || !b.start || b.kind !== "pan_frame" && b.kind !== "roll_frame") return !1;
    const A = b.kind === "roll_frame";
    return b.kind === "pan_frame" ? (b.shot.yaw_deg = b.start.yaw_deg, b.shot.pitch_deg = b.start.pitch_deg) : b.shot.roll_deg = b.start.roll_deg, A && C(), n.interaction = null, Y(), pe(), fe(), ve(n.pointerPos), ne({ localOnly: !0 }), !0;
  }
  return {
    connect(b) {
      ({
        applySpaceMode: g,
        cancelViewTransition: h,
        commitAndRefreshNode: y,
        contentSphere: B,
        getActiveCutoutShot: D,
        hasSpaceContent: ee,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: Y,
        pushHistory: $,
        requestDraw: ne,
        shotViewCamera: _e,
        spaceScale: ye,
        spaceViewState: we,
        stopTimelinePlayback: be,
        syncViewToggleState: pe,
        updateCursor: ve,
        updateSidePanel: fe
      } = b);
    },
    leaveFrameView: ce,
    measureFrameSafeRect: O,
    getFrameViewLayout: L,
    getFrameViewRect: M,
    supportsFramePainting: de,
    zoomFrameViewAt: Q,
    isFreeFrameView: k,
    frameContext: P,
    frameViewDistance: le,
    frameSpaceView: q,
    frameTarget: v,
    startPanFrame: S,
    startFrameDrag: V,
    dragFrame: w,
    zoomFrameAt: T,
    flushFrameWheelCommit: E,
    cancelFrameCameraGesture: N,
    moveFrameByKeys: z,
    endFrameKeyMove: Z
  };
}
function fC(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne = 0;
  function _e() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ye() {
    return String(_e() || "") === "lasso_fill";
  }
  function we() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function be(v, K) {
    const m = Number(K || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, m / 2048)
    };
  }
  function pe(v) {
    const K = String(v || "").trim();
    return K === "eraser" ? Dr : Tn[K] ? K : t.activeBrushPresetId || Dr;
  }
  function ve() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (we() || $());
  }
  function fe() {
    var v;
    return ve() && ((v = t.pointerPos) == null ? void 0 : v.inside) === !0;
  }
  function ie(v, K = !0) {
    const m = Number((v == null ? void 0 : v.x) || 0), S = Number((v == null ? void 0 : v.y) || 0), V = K !== !1, w = t.pointerPos || { x: 0, y: 0, inside: !1 }, T = w.inside !== V || Math.abs(w.x - m) > 0.01 || Math.abs(w.y - S) > 0.01;
    return t.pointerPos = { x: m, y: S, inside: V }, T;
  }
  function me() {
    var N, b;
    if (!fe()) return null;
    const v = t.primaryTool === "mask" ? "mask" : "paint", K = v === "mask" ? t.maskTool : t.paintTool, m = pe(K), S = Tn[m] || Tn[Dr], V = Number(t.brushSizes[m] ?? 10), w = Math.max(1, V) * Math.max(0.1, Number(S.sizeScale ?? 1)), T = Math.max(3, w * 0.5), z = v === "mask" ? K === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : K === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(t.paintColor), Z = v === "mask" ? K === "lasso_fill" ? 0.18 : 0.2 : K === "eraser" ? 0.06 : Oe(Math.max(0.16, Number(z.a ?? 1) * 0.3), 0.16, 0.52), E = v === "mask" ? 0.95 : K === "eraser" ? 0.75 : Oe(Math.max(0.46, Number(z.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: v,
      toolKind: K,
      preset: S,
      radius: T,
      fillStyle: Sr(z, Z),
      strokeStyle: Sr(z, E),
      x: Number(((N = t.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((b = t.pointerPos) == null ? void 0 : b.y) || 0),
      hotspotX: T,
      hotspotY: T
    };
  }
  function ce() {
    var A, X, ge;
    const v = me();
    if (!r) return;
    if (!v) {
      r.style.display = "none";
      return;
    }
    let K = v.radius * 2, m = v.radius * 2, S = "999px", V = 0, w = v.fillStyle, T = "1px solid rgba(222, 222, 222, 0.72)", z = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const Z = "rgba(222, 222, 222, 0.72)", E = "rgba(52, 52, 52, 0.72)";
    let N = Number(v.hotspotX ?? K * 0.5), b = Number(v.hotspotY ?? m * 0.5);
    if (v.toolKind === "lasso_fill")
      K = wl, m = wl, S = "0", T = "0", z = "none", N = E2, b = O2, w = V2(v.fillStyle, E, Z);
    else if (v.layerKind === "mask")
      w = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (v.toolKind === "marker") {
      const he = Math.max(1, Number(((A = v.preset) == null ? void 0 : A.aspect) ?? 1));
      K = Math.max(10, v.radius * 2 * he), m = Math.max(6, v.radius * 2), S = `${Math.min(6, m * 0.42)}px`, V = Number(((ge = (X = v.preset) == null ? void 0 : X.angle) == null ? void 0 : ge.value) || 0) * Vi;
    } else v.toolKind === "brush" ? w = `radial-gradient(circle at 50% 50%, ${v.strokeStyle} 0%, ${v.fillStyle} 45%, rgba(0,0,0,0) 100%)` : v.toolKind === "eraser" && (w = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(K)}px`, r.style.height = `${Math.round(m)}px`, r.style.borderRadius = S, r.style.border = T, r.style.boxShadow = z, r.style.background = w, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(v.x - N)}px, ${Math.round(v.y - b)}px) rotate(${V}deg)`;
  }
  function O() {
    var ke;
    if (!n || !i) return;
    const v = t.primaryTool === "mask" ? "mask" : "paint", K = v === "mask" ? t.maskTool : t.paintTool;
    if (K === "lasso_fill") return;
    const m = pe(K), S = Tn[m] || Tn[Dr], V = Number(t.brushSizes[m] ?? 10), w = Math.max(1, V) * Math.max(0.1, Number(S.sizeScale ?? 1)), T = Math.max(6, w * 0.5), z = K === "eraser", Z = v === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : z ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(t.paintColor), E = v === "mask" ? Sr(Z, 0.22) : z ? "rgba(255,255,255,0.14)" : Sr(Z, Oe(Math.max(0.18, Number(Z.a ?? 1) * 0.34), 0.18, 0.56)), N = v === "mask" ? Sr(Z, 0.96) : z ? "rgba(255,255,255,0.72)" : Sr(Z, Oe(Math.max(0.56, Number(Z.a ?? 1) * 0.96), 0.56, 1));
    let b = T * 2, A = T * 2, X = "999px", ge = 0, he = E;
    const xe = "rgba(222, 222, 222, 0.72)", se = "rgba(52, 52, 52, 0.72)";
    if (v === "mask")
      he = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (K === "marker") {
      const j = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      b = Math.max(16, T * 2 * j), A = Math.max(10, T * 2), X = `${Math.min(8, A * 0.42)}px`, ge = Number(((ke = S == null ? void 0 : S.angle) == null ? void 0 : ke.value) || 0) * Vi;
    } else K === "brush" ? he = `radial-gradient(circle at 50% 50%, ${N} 0%, ${E} 48%, rgba(0,0,0,0) 100%)` : K === "lasso_fill" ? (b = Math.max(18, T * 1.8), A = b, he = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : z && (he = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(b)}px`, i.style.height = `${Math.round(A)}px`, i.style.borderRadius = X, i.style.background = he, i.style.border = `1px solid ${xe}`, i.style.boxShadow = `0 0 0 1px ${se}`, i.style.transform = `rotate(${ge}deg)`, ne && (clearTimeout(ne), ne = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function L() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ne && clearTimeout(ne), ne = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ne = 0;
    }, 180));
  }
  function M(v, K, m, S) {
    const V = pe(K), w = Tn[V] || Tn[Dr], T = t.brushSizes[V] ?? 10, z = Math.max(1, T) * Math.max(0.1, w.sizeScale ?? 1), Z = be(S, z), E = m.map((b) => ({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: Number.isFinite(Number(b == null ? void 0 : b.widthScale)) ? Math.max(0, Number(b.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(b == null ? void 0 : b.pressureLike)) ? Math.max(0, Number(b.pressureLike)) : 1
    })), N = {
      id: io(v),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: K,
      size: z,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: Z.radiusModel,
      radiusValue: Z.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: E.map((b) => ({ ...b })),
        points: E.map((b) => ({ ...b }))
      }
    };
    return Rp(N, w), t.mode, Number(w.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function de(v, K, m, S) {
    const V = m.map((Z) => ({
      ...Z,
      t: Number((Z == null ? void 0 : Z.t) || 0),
      widthScale: Number.isFinite(Number(Z == null ? void 0 : Z.widthScale)) ? Math.max(0, Number(Z.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Z == null ? void 0 : Z.pressureLike)) ? Math.max(0, Number(Z.pressureLike)) : 1
    })), w = pe(K), T = Tn[w] || Tn[Dr], z = {
      id: io(v),
      actionGroupId: io("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: K,
      size: 10,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: V.map((Z) => ({ ...Z }))
      }
    };
    return Rp(z, T), t.mode, Number(T.aspect ?? 1), Number(z.aspect ?? 1), String(z.stampKind || ""), { ...z.targetSpace }, z;
  }
  function Q(v) {
    const K = o.painting || (o.painting = ko(null)), m = K[v] || (K[v] = { strokes: [] });
    return Array.isArray(m.strokes) || (m.strokes = []), m.strokes;
  }
  function R(v, K, m = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const E = f();
      if (!E || (S = Y(K, E, m), !S)) return !1;
    } else
      S = C(K, m);
    if (!S) return !1;
    const V = v.stroke.geometry.rawPoints || v.stroke.geometry.points, w = v.stroke.geometry.points, T = V[V.length - 1];
    if (T) {
      const E = Math.abs(Number(S.u ?? S.x ?? 0) - Number(T.u ?? T.x ?? 0)), N = Math.abs(Number(S.v ?? S.y ?? 0) - Number(T.v ?? T.y ?? 0));
      if (E < 15e-4 && N < 15e-4) return !1;
    }
    const z = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    V.push({ ...z }), w.push({ ...z });
    const Z = p(v);
    if (Z) {
      const E = t.paintEngine.ensureTarget(Z);
      t.paintEngine.appendStrokePoint(E, Number(z.u ?? 0), Number(z.v ?? 0), v.stroke);
    }
    return !0;
  }
  function k(v, K, m = performance.now()) {
    var T, z;
    let S;
    if (t.mode === "frame") {
      const Z = f();
      if (!Z) return !1;
      S = Y(K, Z, m);
    } else
      S = C(K, m);
    const V = (z = (T = v == null ? void 0 : v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : z.points;
    if (!S || !Array.isArray(V)) return !1;
    const w = V[V.length - 1];
    if (w) {
      const Z = Math.abs(Number(S.u ?? S.x ?? 0) - Number(w.u ?? w.x ?? 0)), E = Math.abs(Number(S.v ?? S.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (Z < 15e-4 && E < 15e-4) return !1;
    }
    return V.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function P(v) {
    var j, ae, G, te, H;
    const K = (v == null ? void 0 : v.stroke) || null;
    if (!K || (v == null ? void 0 : v.layerKind) !== "paint" || String((K == null ? void 0 : K.toolKind) || "") !== "eraser") return !1;
    ee();
    const m = p(), S = c(m.width, m.height);
    if (!D(S, K, { w: m.width, h: m.height })) return !1;
    const V = ((ae = (j = S.ctx) == null ? void 0 : j.getImageData(0, 0, m.width, m.height)) == null ? void 0 : ae.data) || null;
    if (!V) return !1;
    const w = new Map(g().map((J) => [String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim(), J ? { ...J } : null])), T = [], z = [], Z = [...h().filter((J) => String((J == null ? void 0 : J.layerKind) || "paint") !== "paint")];
    let E = !1, N = _().reduce((J, U) => Math.max(J, Number((U == null ? void 0 : U.z_index) || 0)), -1) + 1;
    function b(J, U, x, re = 8) {
      let ue = U, F = x, W = -1, Se = -1;
      for (let Me = 0; Me < x; Me += 1)
        for (let Ee = 0; Ee < U; Ee += 1)
          J[(Me * U + Ee) * 4 + 3] <= re || (Ee < ue && (ue = Ee), Me < F && (F = Me), Ee > W && (W = Ee), Me > Se && (Se = Me));
      return W < ue || Se < F ? null : { minX: ue, minY: F, maxX: W, maxY: Se };
    }
    const A = b(V, m.width, m.height, 8);
    if (!A) return !1;
    function X(J, U) {
      return !J || !U ? !1 : !(J.maxX < U.minX || U.maxX < J.minX || J.maxY < U.minY || U.maxY < J.minY);
    }
    function ge(J, U) {
      const x = d((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "", "paint", U);
      if (!x) return null;
      const re = x.centerUv.u - x.halfW, ue = x.centerUv.u + x.halfW, F = x.centerUv.v - x.halfH, W = x.centerUv.v + x.halfH, Se = m.width, Me = m.height;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * Se),
        maxX: Math.ceil((ue % 1 + 1) % 1 * Se),
        minY: Math.floor(Oe(F, 0, 1) * Me),
        maxY: Math.ceil(Oe(W, 0, 1) * Me),
        wraps: ue - re >= 1 || re < 0 || ue > 1
      };
    }
    function he(J) {
      const U = (J == null ? void 0 : J.bbox) || null;
      if (!U) return null;
      const x = (J == null ? void 0 : J.transform) || {}, re = m.width, ue = m.height, F = Number(U.u0 || 0) + Number(x.du || 0), W = Number(U.u1 || 0) + Number(x.du || 0), Se = Number(U.v0 || 0) + Number(x.dv || 0), Me = Number(U.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((F % 1 + 1) % 1 * re),
        maxX: Math.ceil((W % 1 + 1) % 1 * re),
        minY: Math.floor(Oe(Se, 0, 1) * ue),
        maxY: Math.ceil(Oe(Me, 0, 1) * ue),
        wraps: W - F >= 1 || F < 0 || W > 1
      };
    }
    function xe(J) {
      return J ? J.wraps ? X(A, { minX: 0, maxX: J.maxX, minY: J.minY, maxY: J.maxY }) || X(A, { minX: J.minX, maxX: m.width - 1, minY: J.minY, maxY: J.maxY }) : X(A, J) : !0;
    }
    function se(J) {
      if (!J) return { touched: !1, canvas: null };
      const U = c(m.width, m.height, { readback: !0 });
      U.ctx.drawImage(J, 0, 0);
      const x = U.ctx.getImageData(0, 0, m.width, m.height);
      U.ctx.save(), U.ctx.globalCompositeOperation = "destination-out", U.ctx.drawImage(S.canvas, 0, 0), U.ctx.restore();
      const re = U.ctx.getImageData(0, 0, m.width, m.height);
      for (let ue = 0; ue < m.width * m.height; ue += 1) {
        if (V[ue * 4 + 3] <= 8) continue;
        const W = x.data[ue * 4 + 3], Se = re.data[ue * 4 + 3];
        if (W > Se)
          return { touched: !0, canvas: U.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ke(J, U, x) {
      const re = Number(x == null ? void 0 : x.z_index), ue = l(J, U, x).map((F, W) => ({
        ...F,
        z_index: Number.isFinite(re) ? re + W * 1e-3 : N + W * 1e-3
      }));
      return ue.length && (N = Math.max(N, ...ue.map((F) => Number((F == null ? void 0 : F.z_index) || 0))) + 1), ue;
    }
    for (const J of g()) {
      const U = String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim();
      if (!U) continue;
      const x = y(U, "paint");
      if (!xe(ge(J, x))) {
        z.push(J), T.push(...x);
        continue;
      }
      const re = ((te = (G = t.paintEngine) == null ? void 0 : G.getGroupTarget) == null ? void 0 : te.call(G, U)) || null, ue = ((H = re == null ? void 0 : re.committedPaint) == null ? void 0 : H.canvas) || null;
      if (!ue) {
        z.push(J), T.push(...x);
        continue;
      }
      const F = se(ue);
      if (!F.touched || !F.canvas) {
        z.push(J), T.push(...x);
        continue;
      }
      E = !0;
      const W = ke(F.canvas, "paint", w.get(U) || J || {});
      Z.push(...W);
    }
    for (const J of h().filter((U) => String((U == null ? void 0 : U.layerKind) || "paint") === "paint")) {
      if (!xe(he(J))) {
        Z.push(J);
        continue;
      }
      const U = s(J, null);
      if (!U) {
        Z.push(J);
        continue;
      }
      const x = se(U);
      if (!x.touched || !x.canvas) {
        Z.push(J);
        continue;
      }
      E = !0;
      const re = ke(x.canvas, "paint", J);
      Z.push(...re);
    }
    return E ? (o.painting.paint.strokes = T, o.painting.groups = z.sort((J, U) => Number((J == null ? void 0 : J.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)), o.painting.raster_objects = Z.sort((J, U) => Number((J == null ? void 0 : J.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function le(v) {
    var T, z, Z, E, N;
    if ((((z = (T = v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : z.rawPoints) || ((E = (Z = v.stroke) == null ? void 0 : Z.geometry) == null ? void 0 : E.points) || []).length >= 1) {
      I(v);
      const b = p(v);
      b && (String(((N = v.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(b) : t.paintEngine.commitActiveStroke(v.stroke, b)), v._hasCommittedSegments = !0;
    }
    const m = v.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = M(v.layerKind, m.toolKind, [], S);
    V.actionGroupId = m.actionGroupId, v.stroke = V;
    const w = p(v);
    w && t.paintEngine.beginStroke(V, w);
  }
  function q(v) {
    var T, z;
    if ((((z = (T = v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : z.points) || []).length >= 3) {
      I(v);
      const Z = p(v);
      Z && t.paintEngine.commitActiveStroke(v.stroke, Z), v._hasCommittedSegments = !0;
    }
    const m = v.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = de(v.layerKind, m.toolKind, [], S);
    V.actionGroupId = m.actionGroupId, v.stroke = V;
    const w = p(v);
    w && t.paintEngine.beginStroke(V, w);
  }
  function I(v) {
    var w, T, z, Z;
    const K = ((w = v == null ? void 0 : v.stroke) == null ? void 0 : w.geometry) || null;
    if (!K) return !1;
    const m = String(((T = v == null ? void 0 : v.stroke) == null ? void 0 : T.toolKind) || "pen");
    if (v.layerKind === "paint" && m === "eraser")
      return K.geometryKind !== "lasso_fill" && (K.processedPoints = B(K.rawPoints || K.points || [], v.stroke.targetSpace, !0)), P(v);
    const S = v.layerKind === "paint" && m !== "eraser";
    if (K.geometryKind === "lasso_fill")
      return (Array.isArray(K.points) ? K.points : []).length < 3 ? !1 : (S && u((z = v.stroke) == null ? void 0 : z.actionGroupId), Q(v.layerKind).push(v.stroke), !0);
    const V = K.rawPoints || K.points || [];
    return V.length < 1 ? !1 : (K.processedPoints = B(V, v.stroke.targetSpace, !0), S && u((Z = v.stroke) == null ? void 0 : Z.actionGroupId), Q(v.layerKind).push(v.stroke), !0);
  }
  return {
    connect(v) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: p,
        getDisplayListObjects: _,
        getPaintingGroupList: g,
        getRasterObjectList: h,
        getStrokeGroupStrokes: y,
        processFreehandPoints: B,
        rasterizeStrokeToSurface: D,
        rebuildPaintEngineIfNeeded: ee,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: Y,
        supportsFramePainting: $
      } = v);
    },
    isActiveLassoTool: ye,
    supportsErpPainting: we,
    getBrushPresetIdForTool: pe,
    isPaintCursorEnabled: ve,
    isActivePaintCursorVisible: fe,
    setPointerPos: ie,
    syncPaintCursorElement: ce,
    showPaintSizePreview: O,
    hidePaintSizePreview: L,
    buildFreehandStrokeRecord: M,
    buildLassoFillStrokeRecord: de,
    getPaintingLayerList: Q,
    appendPaintPoint: R,
    appendLassoPoint: k,
    _segmentFrameStroke: le,
    _segmentFrameLassoFill: q,
    commitPaintInteraction: I
  };
}
function pC(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be;
  function pe() {
    return we().reverse();
  }
  function ve(L) {
    var de;
    if (n && t.mode === "frame") {
      const Q = s(), R = l(Q);
      if (!Q || !R || !(Number((L == null ? void 0 : L.x) || 0) >= Number(R.x || 0) && Number((L == null ? void 0 : L.x) || 0) <= Number(R.x || 0) + Number(R.w || 0) && Number((L == null ? void 0 : L.y) || 0) >= Number(R.y || 0) && Number((L == null ? void 0 : L.y) || 0) <= Number(R.y || 0) + Number(R.h || 0))) return null;
      const P = ne(L, Q, performance.now()), le = P ? o(P) : null;
      if (le)
        for (const I of a()) {
          if (!D(I)) continue;
          const v = be(I, le);
          if (v && Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1) {
            const K = $(I);
            if (K != null && K.visible) return { item: I, geom: K };
          }
        }
      const q = c(!1).slice().sort((I, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of q) {
        if (I.type === "strokeGroup") {
          const m = f(Y("paint", I.actionGroupId || I.id || ""));
          if (!m) continue;
          const S = $(m);
          if (!(S != null && S.visible)) continue;
          const V = Array.isArray(S.strokePaths) ? S.strokePaths : [];
          for (const w of V) {
            const T = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
            if (!T.length) continue;
            if (w.closed && T.length >= 3 && ei(L, T)) return { item: m, geom: S };
            const z = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
            for (let Z = 0; Z < T.length - 1; Z += 1)
              if (Hc(L, T[Z], T[Z + 1]) <= z * z) return { item: m, geom: S };
            if (T.length === 1 && qo(L, T[0]) <= z * z) return { item: m, geom: S };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const m = d(C(((de = I.item) == null ? void 0 : de.id) || I.id || ""));
          if (!m) continue;
          const S = $(m);
          if (p(m, S, L, P)) return { item: m, geom: S };
          continue;
        }
        const v = I.item;
        if (!v || !D(v) || !le) continue;
        const K = be(v, le);
        if (K && Number(K.x) >= 0 && Number(K.x) <= 1 && Number(K.y) >= 0 && Number(K.y) <= 1) {
          const m = $(v);
          if (m != null && m.visible) return { item: v, geom: m };
        }
      }
      if (!le) return null;
      for (const I of pe()) {
        const v = be(I, le);
        if (!v || !(Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1)) continue;
        const K = $(I);
        if (K != null && K.visible) return { item: I, geom: K };
      }
      return null;
    }
    const M = [
      ...c(!1).slice().sort((Q, R) => Number((R == null ? void 0 : R.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0)).map((Q) => {
        var R;
        return Q.type === "strokeGroup" ? f(Y("paint", Q.actionGroupId || Q.id || "")) : Q.type === "rasterObject" ? d(C(((R = Q.item) == null ? void 0 : R.id) || Q.id || "")) : Q.item;
      }).filter(Boolean),
      ...pe(),
      ...n ? a().filter((Q) => B(Q)) : []
    ];
    for (const Q of M) {
      if (ee(Q)) {
        const k = $(Q);
        if (!(k != null && k.visible)) continue;
        const P = Array.isArray(k.strokePaths) ? k.strokePaths : [];
        for (const le of P) {
          const q = Array.isArray(le == null ? void 0 : le.points) ? le.points : [];
          if (!q.length) continue;
          if (le.closed && q.length >= 3 && ei(L, q)) return { item: Q, geom: k };
          const I = Math.max(8, Number((le == null ? void 0 : le.lineWidth) || 0) * 0.5 + 6);
          for (let v = 0; v < q.length - 1; v += 1)
            if (Hc(L, q[v], q[v + 1]) <= I * I) return { item: Q, geom: k };
          if (q.length === 1 && qo(L, q[0]) <= I * I) return { item: Q, geom: k };
        }
        continue;
      }
      if (y(Q)) {
        const k = $(Q);
        if (!(k != null && k.visible)) continue;
        if (p(Q, k, L)) return { item: Q, geom: k };
        continue;
      }
      const R = $(Q);
      if (R.visible && ei(L, R.corners))
        return { item: Q, geom: R };
    }
    return null;
  }
  function fe(L, M, de = null) {
    if (!L || !L.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (D(de)) return ku(L, M);
    if (L.kind === "strokeGroup") {
      const Q = L.corners.findIndex((k) => qo(k, M) <= 121);
      if (Q >= 0) {
        const k = L.corners[Q], P = k.x - L.center.x, le = k.y - L.center.y, q = P * le >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: Q, cursor: q };
      }
      const R = Array.isArray(L.strokePaths) ? L.strokePaths : [];
      for (const k of R) {
        const P = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
        if (k.closed && P.length >= 3 && ei(M, P)) return { kind: "move", cursor: "default" };
        const le = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
        for (let q = 0; q < P.length - 1; q += 1)
          if (Hc(M, P[q], P[q + 1]) <= le * le) return { kind: "move", cursor: "default" };
      }
      return ei(M, L.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (L.kind === "rasterObject") {
      const Q = L.corners.findIndex((R) => qo(R, M) <= 121);
      if (Q >= 0) {
        const R = L.corners[Q], k = R.x - L.center.x, P = R.y - L.center.y, le = k * P >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: Q, cursor: le };
      }
      return ei(M, L.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return dk(L, M, {
      edges: i === "cutout" || B(de),
      resize: !(B(de) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function ie(L, M) {
    return {
      x0: Math.min(Number((L == null ? void 0 : L.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y0: Math.min(Number((L == null ? void 0 : L.y) || 0), Number((M == null ? void 0 : M.y) || 0)),
      x1: Math.max(Number((L == null ? void 0 : L.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y1: Math.max(Number((L == null ? void 0 : L.y) || 0), Number((M == null ? void 0 : M.y) || 0))
    };
  }
  function me(L, M) {
    return !!L && !!M && Number(M.x) >= Number(L.x0) && Number(M.x) <= Number(L.x1) && Number(M.y) >= Number(L.y0) && Number(M.y) <= Number(L.y1);
  }
  function ce(L, M) {
    if (!L || !(M != null && M.visible) || !Array.isArray(M.corners)) return !1;
    if (M.corners.some((R) => me(L, R))) return !0;
    const de = (Number(L.x0) + Number(L.x1)) * 0.5, Q = (Number(L.y0) + Number(L.y1)) * 0.5;
    return !!ei({ x: de, y: Q }, M.corners);
  }
  function O(L) {
    if (ye(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? _e("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? _e("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? _e("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? _e("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? _e("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? _e(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? _e("grabbing") : _e("default");
      return;
    }
    if (_()) {
      _e("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        _e(P2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        _e("default");
        return;
      }
      _e("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      _e("default");
      return;
    }
    if (t.gizmoAxis) {
      _e("grab");
      return;
    }
    const M = u(), de = M ? $(M) : null, Q = M ? h(M) : !1, R = Q ? { kind: "none", cursor: "default" } : fe(de, L, M);
    if (!Q && R.kind !== "none") {
      _e(R.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && ve(L)) {
      _e("default");
      return;
    }
    _e(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(L) {
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
        isActivePaintCursorVisible: _,
        isErpCamera: g,
        isItemLocked: h,
        isRasterObjectItem: y,
        isShotItem: B,
        isStickerItem: D,
        isStrokeGroupItem: ee,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: Y,
        objectGeom: $,
        screenPosToFrameAsErpPoint: ne,
        setCanvasCursor: _e,
        syncPaintCursorElement: ye,
        upstreamSkyStickers: we,
        worldDirToFrameLocalPoint: be
      } = L);
    },
    hitObjectAt: ve,
    handleHit: fe,
    rectFromPoints: ie,
    rectIntersectsGeom: ce,
    updateCursor: O
  };
}
function hC(e) {
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
  let f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe = !1;
  function ve() {
    return pe;
  }
  function fe() {
    if (!o) return;
    if (pe = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || ee() && $()) {
      const k = me();
      pe = k.visible, ce(k);
      return;
    }
    const M = y(), de = B();
    if (!M && de.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Q = D(), R = MA({
      type: d,
      selected: M,
      selectedItems: de,
      selectedKind: Q,
      geom: de.length > 1 ? h(de) : be(M),
      allLocked: f(de),
      anyLocked: de.some((k) => ne(k)),
      selectedLocked: ne(M),
      activeAspect: _e(M) && C() ? So : Vr(M),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: Y,
      isStickerHidden: we,
      canRestoreSelectedToInitial: p,
      iconSet: We,
      cameraShot: t,
      coverage: a.coverage,
      upstream: ie(de)
    });
    ce(R);
  }
  function ie(M) {
    const de = M.filter(Ut);
    return de.length ? { editable: de.every(hl) } : null;
  }
  function me() {
    const M = ye() && !n.interaction ? g().space : null;
    if (!(M != null && M.gizmo)) return { visible: !1 };
    const de = _(), Q = [...M.stickers, ...M.upstreamStickers].find((le) => le.id === n.worldSelectedId), k = (Q ? Ed(Q) : [M.gizmo.transform.position]).map((le) => _s(de, le, r.width, r.height)).filter(Boolean), P = c_(de, M.gizmo.transform.position, M.gizmo.mode, r.width, r.height);
    return NA({ corners: k, gizmoBox: P, gizmoMode: M.gizmo.mode, camera: ee() });
  }
  function ce(M) {
    var P, le;
    if (!M.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const de = (q, I) => PA(M.anchor, q, I, r.width, r.height), Q = Math.max(1, Number(((P = n.menuSize) == null ? void 0 : P.w) || 220)), R = Math.max(1, Number(((le = n.menuSize) == null ? void 0 : le.h) || 40)), k = de(Q, R);
    if (!k) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: k.left,
      top: k.top,
      items: M.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const q = o.getBoundingClientRect(), I = Math.round(Number((q == null ? void 0 : q.width) || 0)) || 220, v = Math.round(Number((q == null ? void 0 : q.height) || 0)) || 40;
      n.menuSize = { w: I, h: v, measured: !0 };
      const K = de(I, v);
      K && (u.selectionMenu.left = K.left, u.selectionMenu.top = K.top);
    });
  }
  function O() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function L(M) {
    if (!c || !M || !M.isConnected) return;
    const de = String(M.getAttribute("data-tip") || "").trim();
    if (!de) return;
    u.tooltip.text = de, u.tooltip.visible = !0;
    const Q = M;
    i.requestFrame(() => {
      var T, z;
      if (l.target !== Q || !c || !(Q != null && Q.isConnected)) return;
      const R = s.getBoundingClientRect(), k = Q.getBoundingClientRect(), P = 8, le = 12, q = Math.round(Number(((T = c.getBoundingClientRect()) == null ? void 0 : T.width) || 0)) || 100, I = Math.round(Number(((z = c.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, v = !!Q.closest(".pano-floating-left"), K = !!Q.closest(".pano-frame-rail"), m = !!Q.closest(".pano-paint-footer") || !!Q.closest(".pano-paint-color-float");
      let S = "", V = k.left - R.left + k.width * 0.5 - q * 0.5, w = k.top - R.top - I - le;
      if (Q.closest(".pano-floating-top") && (w = k.bottom - R.top + le), v)
        S = "tool-rail", V = k.right - R.left + 10, w = k.top - R.top + k.height * 0.5 - I * 0.5, V = Oe(V, P, Math.max(P, R.width - q - P)), w = Oe(w, P, Math.max(P, R.height - I - P));
      else if (K)
        S = "frame-rail", V = k.left - R.left - q - 10, w = k.top - R.top + k.height * 0.5 - I * 0.5, V = Oe(V, P, Math.max(P, R.width - q - P)), w = Oe(w, P, Math.max(P, R.height - I - P));
      else if (m) {
        S = "footer";
        const Z = Q.closest(".pano-paint-footer"), E = Z ? Z.getBoundingClientRect() : k;
        V = E.left - R.left + E.width * 0.5 - q * 0.5, w = E.bottom - R.top + 5, V = Oe(V, P, Math.max(P, R.width - q - P)), w = Math.max(P, w);
      }
      V = Oe(V, P, Math.max(P, R.width - q - P)), w = Math.max(P, w), u.tooltip.left = V, u.tooltip.top = w, u.tooltip.variant = S, u.tooltip.visible = !0;
    });
  }
  return {
    connect(M) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: p,
        currentSpaceCamera: _,
        editorViewInput: g,
        getMultiSelectionGeom: h,
        getSelected: y,
        getSelectedItems: B,
        getSelectedKind: D,
        isCameraSelected: ee,
        isErpCamera: C,
        isExternalSticker: Y,
        isFreeSpaceView: $,
        isItemLocked: ne,
        isShotItem: _e,
        isSpaceView: ye,
        isStickerHidden: we,
        objectGeom: be
      } = M);
    },
    isWorldMenuShown: ve,
    updateSelectionMenu: fe,
    hideTooltip: O,
    showTooltipFor: L
  };
}
function mC(e) {
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
    type: _,
    viewController: g
  } = e;
  let h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I, v, K, m, S, V, w, T, z, Z, E, N, b, A, X, ge, he, xe, se, ke, j, ae, G, te, H, J, U, x, re, ue, F, W, Se, Me, Ee, Re, je, Ke, Ce, ze, oe, Ie, Ae, Fe, He, Ge, Ue, ft, vt, kt, bt, An, qe, ln, Bt, gi, Yr, yi, sn, bn, qr, hr, rr, Ds, Hi, Po, Ao, Ls, Rs, Vs, Gi, At, Bn, ir, Co, zn, $s, zs, js, Xr = null;
  function Ql(De) {
    p.selection && (p.selection = null, Vs());
    const Te = Fe(De);
    Xr = Te, bt(Te, !0), pe(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const Pe = G(), St = ae(), nt = Pe || St ? Mk(Co(), De) : null;
    if (St && nt) {
      De.preventDefault(), nt === "look" ? bn(Te, De.pointerId) : sn(nt, Te, De.pointerId);
      return;
    }
    if (nt === "look") {
      De.preventDefault();
      const Xe = He(De);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, De.pointerId, performance.now()), At(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (nt) {
      De.preventDefault(), qr(nt, Te, De.pointerId);
      return;
    }
    if ((Pe || St) && De.button !== 0) {
      De.preventDefault();
      return;
    }
    if (De.button === 1) {
      if (De.preventDefault(), n.mode === "frame") {
        const Xe = le();
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
        const Xe = n.mode === "unwrap" ? Te : He(De);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, De.pointerId, performance.now());
      }
      At(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (De.button !== 0) return;
    if (n.mode === "frame" && (De.altKey || De.shiftKey) && !a) {
      const Xe = le(), Be = m(Xe);
      if (!Xe || Xe.locked === !0 || !Be) return;
      const Qe = n0({
        frame: Be,
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
      }, t.setPointerCapture(De.pointerId), De.preventDefault(), Ls(), Ae({ localOnly: !0 });
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
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (Ds() || Hi())) {
      if (!Ee()) return;
      rr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Be = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Hi() ? le() : null, Yt = { kind: "ERP_GLOBAL" }, It = Qe ? Ue(Te, Qe, performance.now()) : Ge(Te, performance.now());
      if (!It) {
        At(Te);
        return;
      }
      n.interaction = {
        kind: Be === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: io("live"),
        stroke: Be === "lasso_fill" ? ye(Xe, Be, [It], Yt) : _e(Xe, Be, [It], Yt)
      }, ke();
      const Cr = q(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Ki = n.paintEngine.ensureTarget(Cr), Wi = Number((It == null ? void 0 : It.u) ?? (It == null ? void 0 : It.x) ?? 0), Ui = Number((It == null ? void 0 : It.v) ?? (It == null ? void 0 : It.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ki, Wi, Ui, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      At(Te), t.setPointerCapture(De.pointerId), Ae();
      return;
    }
    const Ct = b(), Je = N(), et = Ct.length > 1 ? V(Ct) : Je ? Me(Je) : null;
    if (n.primaryTool === "cursor" && (De.ctrlKey || De.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Te, current: Te }, At(Te), t.setPointerCapture(De.pointerId), Ae({ localOnly: !0, reason: pt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && we() && G() && yi(De, Te) || n.primaryTool === "cursor" && c && x() && Hs(De, Te)) return;
    if (Ct.length > 1 && (et != null && et.visible)) {
      if ((Ct.some((Be) => te(Be)) ? { kind: "none" } : he(et, Te)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: Ct.map((Be) => Be),
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: Ct.filter((Be) => re(Be)).map((Be) => ({
            id: String(Be.id || ""),
            yaw_deg: Number(Ke(Be).yaw_deg || 0),
            pitch_deg: Number(Ke(Be).pitch_deg || 0),
            center: (() => {
              var Yt, It;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((It = Qe.center) == null ? void 0 : It.y) || 0) } : { x: Te.x, y: Te.y };
            })()
          })),
          strokeSnapshots: Ct.filter((Be) => ue(Be)).map((Be) => ({
            id: String(Be.actionGroupId || Be.id || ""),
            layerKind: String(Be.layerKind || "paint"),
            snapshot: dn(X(Be.actionGroupId, Be.layerKind)),
            frameSnapshot: dn(de(Be.actionGroupId, Be.layerKind)),
            center: (() => {
              var Yt, It;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((It = Qe.center) == null ? void 0 : It.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: A(Be.actionGroupId, Be.layerKind)
          })),
          rasterSnapshots: Ct.filter((Be) => H(Be)).map((Be) => ({
            id: Re(Be.rasterObjectId || Be.id || ""),
            snapshot: dn(z().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Re(Be.rasterObjectId || Be.id || ""))),
            center: (() => {
              var Yt, It;
              const Qe = Me(Be);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((It = Qe.center) == null ? void 0 : It.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: T(Be)
          }))
        }, At(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = te(Je) ? { kind: "none" } : he(et, Te, Je);
      if (Xe.kind === "scale") {
        n.interaction = ue(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(X(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(de(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : H(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: dn(z().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Re(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, At(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, At(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = ue(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x),
          snapshot: dn(X(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: dn(de(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ke(Je).rot_deg || Ke(Je).roll_deg || 0),
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x)
        }, At(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (ue(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = le();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : Ge(Te, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Be,
            snapshot: dn(X(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: dn(de(Je.actionGroupId, Je.layerKind))
          }, At(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        if (H(Je)) {
          const Be = n.mode === "frame" ? (() => {
            const Qe = le();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : Ge(Te, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Be,
            snapshot: dn(z().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Re(Je.rasterObjectId || Je.id || "")))
          }, At(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y }
        }, At(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    }
    const st = se(Te);
    if (st) {
      const Xe = n.selectedId !== st.item.id;
      if (Xe && n.selectedId && (Ce(), me()), An(st.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && ir(), Bn(), Ae(), te(st.item)) {
        At(Te);
        return;
      }
      n.interaction = {
        kind: ue(st.item) ? "move_stroke_group" : H(st.item) ? "move_raster_object" : "move",
        item: st.item,
        offset: { x: Te.x - st.geom.center.x, y: Te.y - st.geom.center.y },
        startUv: ue(st.item) || H(st.item) ? n.mode === "frame" ? (() => {
          const Be = le();
          return Be ? Ue(Te, Be, performance.now()) : null;
        })() : Ge(Te, performance.now()) : null,
        snapshot: ue(st.item) ? dn(X(st.item.actionGroupId, st.item.layerKind)) : H(st.item) ? dn(z().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Re(st.item.rasterObjectId || st.item.id || ""))) : null,
        frameSnapshot: ue(st.item) ? dn(de(st.item.actionGroupId, st.item.layerKind)) : null
      }, At(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    const jn = !!n.selectedId;
    jn && (Ce(), me()), ve(), jn && ir(), Bn(), Ae(), n.mode === "pano" && Oo(De, Te);
  }
  function Jr(De, Te) {
    return i.gizmoPointer(De, ce(), Te.x, Te.y, t.width, t.height);
  }
  function Hs(De, Te) {
    var et, st;
    const Pe = (et = M().space) == null ? void 0 : et.gizmo;
    if (Pe && Jr("hover", Te) !== null && Jr("down", Te))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Pe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Pe.transform,
        base: Wr(kt(), n.frame),
        changed: !1
      }, t.setPointerCapture(De.pointerId), At(Te), !0;
    const St = b(), nt = N(), Ct = St.length > 1 ? St.some((jn) => te(jn)) ? "none" : he(V(St), Te).kind : nt && !te(nt) ? he(Me(nt), Te, nt).kind : "none";
    if (Ct !== "none" && Ct !== "move") return !1;
    const Je = i.pickSticker(ce(), Te.x, Te.y, t.width, t.height);
    return ((st = hr(Je)) == null ? void 0 : st.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), me()), vt(Je), ir(), Bn(), Ao(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(De.pointerId), !0);
  }
  function Io(De) {
    var St;
    const Pe = !!(n.worldSelectedId || j()) && n.primaryTool === "cursor" && x() && !!((St = M().space) != null && St.gizmo) ? Jr("hover", De) : null;
    Pe !== n.gizmoAxis && (n.gizmoAxis = Pe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: pt.VIEW }));
  }
  function ec(De, Te) {
    const Pe = Jr("move", Te);
    if (Pe && De.camera) {
      for (const [nt, Ct] of Object.entries(rp(De.mode, De.base, De.start, Pe))) mn(u.camera, nt, n.frame, Ct);
      Po(), De.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const St = hr(De.id);
    !Pe || !St || (ES(St, n.frame, rp(De.mode, De.base, De.start, Pe)), De.changed = !0, F(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Eo(De) {
    n.interaction = null, n.gizmoAxis = null, De.kind === "world_gizmo" && (Jr("up", n.pointerPos), l.backgroundDirty = !0, De.changed && (Ce(), fe(), ir())), At(n.pointerPos), Ae();
  }
  function Oo(De, Te) {
    if (G()) {
      const St = Co().emptyLeft;
      St && qr(St, Te, De.pointerId);
      return;
    }
    const Pe = He(De);
    n.interaction = { kind: "view", last: Pe, lastTs: performance.now() }, g.startDrag(Pe.x, Pe.y, De.pointerId, performance.now()), At(Te), t.setPointerCapture(De.pointerId);
  }
  function Gs(De, Te) {
    if (!f || !je.playing || (je.stop(), De.kind === "frame_pan")) return;
    if (De.kind === "frame_orbit") {
      const nt = Q();
      nt && (De.pivot = P(nt, k(nt), Te));
      return;
    }
    if (De.kind === "world_gizmo") {
      const nt = hr(De.id);
      De.camera ? De.base = O() : nt && (De.base = Wr(nt, n.frame));
      return;
    }
    if (De.kind === "move_multi") {
      const nt = V(De.items);
      if (!(nt != null && nt.visible)) return;
      De.offset = { x: Te.x - nt.center.x, y: Te.y - nt.center.y }, De.startCenter = { x: nt.center.x, y: nt.center.y };
      for (const Ct of De.stickerSnapshots) {
        const Je = De.items.find((st) => String((st == null ? void 0 : st.id) || "") === Ct.id), et = Je ? Me(Je) : null;
        et != null && et.visible && (Ct.yaw_deg = Number(Ke(Je).yaw_deg || 0), Ct.pitch_deg = Number(Ke(Je).pitch_deg || 0), Ct.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(De.kind)) return;
    const Pe = Me(De.item);
    if (!(Pe != null && Pe.visible)) return;
    const St = Ke(De.item);
    if (De.kind === "move") {
      De.offset = { x: Te.x - Pe.center.x, y: Te.y - Pe.center.y };
      return;
    }
    if (De.center = Pe.center, De.kind === "rotate") {
      De.startRot = Number(St.rot_deg || St.roll_deg || 0), De.startAng = Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x);
      return;
    }
    De.startDist = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)), De.startHFOV = Number(St.hFOV_deg || 20), De.startVFOV = Number(St.vFOV_deg || 20);
  }
  function Ks(De) {
    var St, nt, Ct, Je, et, st, jn, Xe, Be, Qe, Yt, It, Cr, Ki, Wi, Ui, Ys, qs, Xs, Js, Zs, Qs;
    const Te = Fe(De);
    if (bt(Te, !0), !n.interaction) {
      Io(Te), At(Te);
      return;
    }
    At(Te);
    const Pe = n.interaction;
    if (Xr && (Te.x !== Xr.x || Te.y !== Xr.y)) {
      const ct = Xr;
      Xr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Pe.kind) || Gs(Pe, ct);
    }
    if (Pe.kind !== "world_select") {
      if (Pe.kind === "world_gizmo") {
        ec(Pe, Te);
        return;
      }
      if (Pe.kind === "paint_stroke") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        ct.forEach((gt) => {
          const _t = Fe(gt);
          if (n.mode === "frame") {
            const vn = le(), en = vn ? m(vn) : null;
            if (en) {
              const Cn = (_t.x - en.x) / Math.max(1, en.w), Rt = (_t.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Rt >= 0 && Rt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, y(Pe));
            }
          }
          D(Pe, _t, performance.now()) && (ht = !0);
        }), ht && Ae({ localOnly: !0, reason: pt.PAINT });
        return;
      }
      if (Pe.kind === "paint_lasso_fill") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        if (ct.forEach((gt) => {
          const _t = Fe(gt);
          if (n.mode === "frame") {
            const vn = le(), en = vn ? m(vn) : null;
            if (en) {
              const Cn = (_t.x - en.x) / Math.max(1, en.w), Rt = (_t.y - en.y) / Math.max(1, en.h);
              if (!(Cn >= 0 && Cn <= 1 && Rt >= 0 && Rt <= 1)) {
                Pe._outOfFrame = !0;
                return;
              }
              Pe._outOfFrame && (Pe._outOfFrame = !1, h(Pe));
            }
          }
          B(Pe, _t, performance.now()) && (ht = !0);
        }), ht) {
          const gt = q(Pe);
          gt && n.paintEngine.updateActiveStroke(Pe.stroke, gt), Ae({ localOnly: !0, reason: pt.PAINT });
        }
        return;
      }
      if (Pe.kind === "view") {
        const ct = performance.now(), ht = n.mode === "unwrap" ? Te : He(De);
        g.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Pe.lastTs = ct, Pe.last = ht, Ae({ localOnly: !0, reason: pt.VIEW });
        return;
      }
      if (Pe.kind === "frame_pan" || Pe.kind === "frame_orbit") {
        L(Pe, Te);
        return;
      }
      if (Pe.kind === "space_pan" || Pe.kind === "space_orbit") {
        const ct = gi();
        ln(Pe.kind === "space_pan" ? Zm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.width, t.height, Pe.depth) : Jm(ct, Te.x - Pe.last.x, Te.y - Pe.last.y, t.height, Pe.pivot)), Pe.last = Te;
        return;
      }
      if (Pe.kind === "pan_frame") {
        const ct = K(Pe.shot);
        if (!ct || !Pe.shot) return;
        const ht = Te.x - Pe.last.x, gt = Te.y - Pe.last.y, _t = i0(Pe.shot, {
          dx: ht,
          dy: gt,
          focalPx: ct.focalPx,
          invertX: ((St = u.ui_settings) == null ? void 0 : St.invert_view_x) === !0,
          invertY: ((nt = u.ui_settings) == null ? void 0 : nt.invert_view_y) === !0
        });
        Pe.shot.yaw_deg = _t.yaw_deg, Pe.shot.pitch_deg = _t.pitch_deg, Pe.changed = Pe.changed || Math.abs(ht) > 0 || Math.abs(gt) > 0, Pe.last = Te, Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "roll_frame") {
        if (Pe.source === "knob") return;
        Y(Pe, Te, De);
        return;
      }
      if (Pe.kind === "move") {
        const ct = Te.x - Pe.offset.x, ht = Te.y - Pe.offset.y;
        if (n.mode === "frame" && d) {
          const gt = le(), _t = m(gt);
          if (!gt || !_t) return;
          const vn = {
            x: Oe((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Oe((ht - _t.y) / Math.max(1, _t.h), 0, 1)
          }, en = R(gt, vn);
          if (!en) return;
          const Cn = ma(en);
          zn(Pe.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const gt = ge(), _t = Oe((ct - gt.x) / Math.max(gt.w, 1), 0, 1), vn = Oe((ht - gt.y) / Math.max(gt.h, 1), 0, 1);
          zn(Pe.item, { yaw_deg: Kt(_t * 360 - 180), pitch_deg: Oe(90 - vn * 180, -90, 90) });
        } else {
          const gt = ft(ct, ht), _t = ma(gt);
          zn(Pe.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        re(Pe.item) && F(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = le();
          return _t ? Ue(Te, _t, performance.now()) : null;
        })() : Ge(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        $((Ct = Pe.item) == null ? void 0 : Ct.actionGroupId, ht, gt, Pe.snapshot, (Je = Pe.item) == null ? void 0 : Je.layerKind, Pe.frameSnapshot) && (Se({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = le();
          return _t ? Ue(Te, _t, performance.now()) : null;
        })() : Ge(Te, performance.now());
        if (!ct || !Pe.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Pe.startUv.u || 0)), gt = Number(ct.v || 0) - Number(Pe.startUv.v || 0);
        ee(((et = Pe.item) == null ? void 0 : et.rasterObjectId) || ((st = Pe.item) == null ? void 0 : st.id) || "", ht, gt, Pe.snapshot) && (W(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        C(((jn = Pe.item) == null ? void 0 : jn.rasterObjectId) || ((Xe = Pe.item) == null ? void 0 : Xe.id) || "", ht, Pe.snapshot) && (W(), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "move_multi") {
        const ct = Te.x - Number(((Be = Pe.offset) == null ? void 0 : Be.x) || 0), ht = Te.y - Number(((Qe = Pe.offset) == null ? void 0 : Qe.y) || 0);
        let gt = !1, _t = !1, vn = !1;
        const en = ct - Number(((Yt = Pe.startCenter) == null ? void 0 : Yt.x) || ct), Cn = ht - Number(((It = Pe.startCenter) == null ? void 0 : It.y) || ht);
        for (const Rt of Array.isArray(Pe.stickerSnapshots) ? Pe.stickerSnapshots : []) {
          const an = (_ === "cutout" ? I() : S()).find((zt) => String((zt == null ? void 0 : zt.id) || "") === String(Rt.id || ""));
          if (!an || !re(an)) continue;
          const rn = {
            x: Number(((Cr = Rt.center) == null ? void 0 : Cr.x) || 0) + en,
            y: Number(((Ki = Rt.center) == null ? void 0 : Ki.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const zt = le(), Tt = m(zt);
            if (!zt || !Tt) continue;
            const or = {
              x: Oe((rn.x - Tt.x) / Math.max(1, Tt.w), 0, 1),
              y: Oe((rn.y - Tt.y) / Math.max(1, Tt.h), 0, 1)
            }, In = R(zt, or);
            if (!In) continue;
            const Fo = ma(In);
            zn(an, { yaw_deg: Fo.yaw, pitch_deg: Fo.pitch });
          } else if (n.mode === "unwrap") {
            const zt = ge(), Tt = Oe((rn.x - zt.x) / Math.max(zt.w, 1), 0, 1), or = Oe((rn.y - zt.y) / Math.max(zt.h, 1), 0, 1);
            zn(an, { yaw_deg: Kt(Tt * 360 - 180), pitch_deg: Oe(90 - or * 180, -90, 90) });
          } else {
            const zt = ft(rn.x, rn.y), Tt = ma(zt);
            zn(an, { yaw_deg: Tt.yaw, pitch_deg: Tt.pitch });
          }
          gt = !0;
        }
        for (const Rt of Array.isArray(Pe.strokeSnapshots) ? Pe.strokeSnapshots : []) {
          const an = {
            x: Number(((Wi = Rt.center) == null ? void 0 : Wi.x) || 0) + en,
            y: Number(((Ui = Rt.center) == null ? void 0 : Ui.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Tt = le();
            return Tt ? Ue(an, Tt, performance.now()) : null;
          })() : Ge(an, performance.now()), zt = Rt.centerUv || null;
          if (rn && zt) {
            const Tt = Bt(Number(rn.u || 0), Number(zt.u || 0)), or = Number(rn.v || 0) - Number(zt.v || 0);
            $(Rt.id, Tt, or, Rt.snapshot, Rt.layerKind, Rt.frameSnapshot) && (gt = !0, _t = !0);
          }
        }
        for (const Rt of Array.isArray(Pe.rasterSnapshots) ? Pe.rasterSnapshots : []) {
          const an = {
            x: Number(((Ys = Rt.center) == null ? void 0 : Ys.x) || 0) + en,
            y: Number(((qs = Rt.center) == null ? void 0 : qs.y) || 0) + Cn
          }, rn = n.mode === "frame" ? (() => {
            const Tt = le();
            return Tt ? Ue(an, Tt, performance.now()) : null;
          })() : Ge(an, performance.now()), zt = Rt.centerUv || null;
          if (rn && zt) {
            const Tt = Bt(Number(rn.u || 0), Number(zt.u || 0)), or = Number(rn.v || 0) - Number(zt.v || 0);
            ee(Rt.id, Tt, or, Rt.snapshot) && (gt = !0, vn = !0);
          }
        }
        gt && (_t ? Se({ rebuildPaintEngine: !1 }) : vn ? W() : F(), Ae({ localOnly: !0 }));
        return;
      }
      if (Pe.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Math.max(1, Number(Pe.startDist || 1));
        ne((Xs = Pe.item) == null ? void 0 : Xs.actionGroupId, ht, 0, Pe.snapshot, (Js = Pe.item) == null ? void 0 : Js.layerKind, Pe.frameSnapshot) && (Se({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Number(Pe.startAng || 0)) * Vi;
        De.shiftKey && (ct = Math.round(ct / 45) * 45), ne((Zs = Pe.item) == null ? void 0 : Zs.actionGroupId, 1, ct, Pe.snapshot, (Qs = Pe.item) == null ? void 0 : Qs.layerKind, Pe.frameSnapshot) && (Se({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: pt.PAINT }));
        return;
      }
      if (Pe.kind === "marquee_select") {
        Pe.current = Te, Ae({ localOnly: !0, reason: pt.OVERLAY });
        return;
      }
      if (Pe.kind === "scale") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179), vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), J(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), re(Pe.item) && F(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { hFOV_deg: Oe(Pe.startHFOV * ht, 1, 179) }), J(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), re(Pe.item) && F(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(Te.x - Pe.center.x, Te.y - Pe.center.y)) / Pe.startDist;
        zn(Pe.item, { vFOV_deg: Oe(Pe.startVFOV * ht, 1, 179) }), J(Pe.item) || (Pe.item.aspect_id = Fi(Pe.item)), re(Pe.item) && F(), Ae({ localOnly: !0 });
        return;
      }
      if (Pe.kind === "rotate") {
        let ht = (Math.atan2(Te.y - Pe.center.y, Te.x - Pe.center.x) - Pe.startAng) * Vi, gt = Pe.startRot - ht;
        De.shiftKey && (gt = Math.round(gt / 45) * 45), zn(Pe.item, { [re(Pe.item) ? "rot_deg" : "roll_deg"]: gt }), re(Pe.item) && F(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ws() {
    var Te, Pe, St, nt, Ct, Je, et;
    const De = n.interaction;
    if (!((De == null ? void 0 : De.kind) === "roll_frame" && De.source === "knob")) {
      if ((De == null ? void 0 : De.kind) === "space_pan" || (De == null ? void 0 : De.kind) === "space_orbit") {
        n.interaction = null, At(n.pointerPos), Bn();
        return;
      }
      if ((De == null ? void 0 : De.kind) === "world_select" || (De == null ? void 0 : De.kind) === "world_gizmo") {
        Eo(De);
        return;
      }
      if (((Te = n.interaction) == null ? void 0 : Te.kind) === "paint_stroke" || ((Pe = n.interaction) == null ? void 0 : Pe.kind) === "paint_lasso_fill") {
        ke();
        const st = ie(n.interaction), jn = !!n.interaction._hasCommittedSegments;
        if (st || jn) {
          Se();
          const Xe = String(((St = n.interaction.stroke) == null ? void 0 : St.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = w().find((Yt) => String((Yt == null ? void 0 : Yt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Be = q(n.interaction);
          Be && (st ? String(((nt = n.interaction.stroke) == null ? void 0 : nt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Be), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Be) : n.paintEngine.cancelActiveStroke(Be)), Ce(), me(), ir(), Bn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = q(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((Ct = n.interaction) == null ? void 0 : Ct.kind) === "marquee_select") {
        const st = ze(n.interaction.start, n.interaction.current), Xe = [
          ..._ === "cutout" ? v().filter((Be) => !U(Be)) : [...S()],
          ...E(),
          ...Z()
        ].filter((Be) => oe(st, Me(Be)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), ir(), Bn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), fe(), ir());
      else if (n.interaction && n.interaction.kind !== "view") {
        let st = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (st = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (st = !0), st && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? Se({ rebuildPaintEngine: !0 }) : W()), Ce(), me(), o.setDirtyCanvas(!0, !0), Rs(), Bn(), Ae();
      }
      n.interaction = null, (De == null ? void 0 : De.kind) === "roll_frame" && xe(), ke(), De && De.kind === "view" && Yr(() => g.endDrag(performance.now())), Gi(), Bn(), At(n.pointerPos), Ae();
    }
  }
  function Us() {
    var De, Te, Pe, St, nt;
    if (!be()) {
      if (((De = n.interaction) == null ? void 0 : De.kind) === "world_select" || ((Te = n.interaction) == null ? void 0 : Te.kind) === "world_gizmo") {
        Eo(n.interaction);
        return;
      }
      if (((Pe = n.interaction) == null ? void 0 : Pe.kind) === "view" && Yr(() => g.endDrag(performance.now())), ((St = n.interaction) == null ? void 0 : St.kind) === "paint_stroke" || ((nt = n.interaction) == null ? void 0 : nt.kind) === "paint_lasso_fill") {
        ke();
        const Ct = q(n.interaction);
        Ct && n.paintEngine.cancelActiveStroke(Ct);
      }
      n.interaction = null, ke(), Gi(), At(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Bs(De) {
    const Te = Fe(De), Pe = bt(Te, !0);
    n.interaction || (At(Te), Pe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: pt.OVERLAY }));
  }
  function tc(De) {
    if (n.mode === "frame") {
      const Te = Fe(De), Pe = Ya(De);
      Pe && rr(), Pe && ae() ? $s(Te, -Pe) : Pe && zs(Te, Pe) && Ae({ localOnly: !0 }), De.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (pe(), G()) {
        const Te = Ya(De);
        Te && js(Fe(De), -Te);
      } else g.applyWheelEvent(De) && Ae({ localOnly: !0, reason: pt.VIEW });
      De.preventDefault();
    }
  }
  return {
    connect(De) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: y,
        appendLassoPoint: B,
        appendPaintPoint: D,
        applyRasterObjectOffset: ee,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: Y,
        applyStrokeGroupOffset: $,
        applyStrokeGroupTransform: ne,
        buildFreehandStrokeRecord: _e,
        buildLassoFillStrokeRecord: ye,
        cameraShoots: we,
        cancelFrameCameraGesture: be,
        cancelViewTransition: pe,
        clearSelection: ve,
        commitAndRefreshNode: fe,
        commitPaintInteraction: ie,
        commitState: me,
        currentSpaceCamera: ce,
        cutoutCamera: O,
        dragFrame: L,
        editorViewInput: M,
        ensureGroupFrame: de,
        frameContext: Q,
        frameLocalPointToWorldDir: R,
        frameSpaceView: k,
        frameTarget: P,
        getActiveCutoutShot: le,
        getActivePaintTargetDescriptor: q,
        getCutoutSelectableItems: I,
        getCutoutSelectableItemsForHit: v,
        getFrameViewLayout: K,
        getFrameViewRect: m,
        getList: S,
        getMultiSelectionGeom: V,
        getPaintingGroupList: w,
        getRasterObjectCenterUv: T,
        getRasterObjectList: z,
        getSelectableRasterObjectItems: Z,
        getSelectableStrokeGroupItems: E,
        getSelected: N,
        getSelectedItems: b,
        getStrokeGroupCenterUv: A,
        getStrokeGroupStrokes: X,
        getUnwrapRect: ge,
        handleHit: he,
        hideTooltip: xe,
        hitObjectAt: se,
        invalidateLivePaintPreviewCaches: ke,
        isCameraSelected: j,
        isFreeFrameView: ae,
        isFreeSpaceView: G,
        isItemLocked: te,
        isRasterObjectItem: H,
        isSceneSticker: J,
        isShotItem: U,
        isSpaceView: x,
        isStickerItem: re,
        isStrokeGroupItem: ue,
        markObjectVisualsDirty: F,
        markPaintCompositeVisualsDirty: W,
        markPaintStrokeVisualsDirty: Se,
        objectGeom: Me,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Re,
        playback: je,
        poseOf: Ke,
        pushHistory: Ce,
        rectFromPoints: ze,
        rectIntersectsGeom: oe,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Fe,
        screenPosCss: He,
        screenPosToErpPoint: Ge,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: ft,
        selectWorldSticker: vt,
        selectedWorldSticker: kt,
        setPointerPos: bt,
        setSelectedItem: An,
        setSelectedItems: qe,
        setSpaceView: ln,
        shortestWrappedDelta: Bt,
        spaceViewState: gi,
        startAnimation: Yr,
        startCameraPress: yi,
        startFrameDrag: sn,
        startPanFrame: bn,
        startSpaceDrag: qr,
        stickerById: hr,
        stopTimelinePlayback: rr,
        supportsErpPainting: Ds,
        supportsFramePainting: Hi,
        syncCutoutShot: Po,
        syncFloatingViewButtonState: Ao,
        syncFrameRollKnob: Ls,
        syncSidePanelControls: Rs,
        syncTimeline: Vs,
        syncViewToggleState: Gi,
        updateCursor: At,
        updateSelectionMenu: Bn,
        updateSidePanel: ir,
        viewControls: Co,
        writePose: zn,
        zoomFrameAt: $s,
        zoomFrameViewAt: zs,
        zoomSpaceAt: js
      } = De);
    },
    onCanvasPointerDown: Ql,
    worldGizmoPointer: Jr,
    hoverWorldGizmo: Io,
    onCanvasPointerMove: Ks,
    onCanvasPointerUp: Ws,
    onCanvasPointerCancel: Us,
    onCanvasMouseMove: Bs,
    onCanvasWheel: tc
  };
}
function gC(e) {
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
  let f, p, _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q;
  function I(w, T, z = !1) {
    var ge;
    M();
    const Z = a && n.mode === "frame" ? B() : null, E = Z || C(), N = Z ? "shot" : $(), b = O();
    if (b && !le(b) || !b && (!E || N === "stroke" || ne(E))) return;
    const A = (((ge = u.sidePanel) == null ? void 0 : ge.params) || []).find((he) => he.key === w);
    if (!A || A.enabled === !1) return;
    let X = Number(T);
    if (Number.isNaN(X) && (X = 0), (b || t) && w2.has(w) ? X = w === "scale" ? Math.max(X, F0) : X : X = Oe(X, Number(A.min), Number(A.max)), w === "yaw_deg" && (X = Kt(X)), !b && t && w.startsWith("position_")) {
      Q(), PS(l.camera, n.frame, w, X), P(), ie(), z && ve();
      return;
    }
    if (b) {
      IS(b, n.frame, w, X), we(), P(), ie(), z && ve();
      return;
    }
    w === "opacity" ? AS(E, n.frame, X / 100) : q(E, { [w]: X }), a && !_e(E) && (w === "hFOV_deg" || w === "vFOV_deg") && (E.aspect_id = Fi(E)), P(), ie(), z && ve();
  }
  function v(w, T) {
    var E;
    const z = (E = u.sidePanel) == null ? void 0 : E.upstream;
    if (!z) return !1;
    const Z = T ? z.lanes.find((N) => N.name === T && N.action === w) : w === "revert-upstream" ? z.revertAll : null;
    return !!Z && !Z.disabled;
  }
  function K(w) {
    const T = O() || C();
    Ut(T) && (M(), ce(T, w) && (fe(), we(), ve(), h(), P(), k(), ie()));
  }
  async function m(w) {
    var Z, E, N, b, A, X, ge;
    const T = w.target.closest("[data-action]");
    if (!T) return;
    const z = String(T.getAttribute("data-action") || "");
    if (z === "coverage-set") {
      const he = $n(T.getAttribute("data-coverage"));
      if (he === $n(l.coverage)) return;
      l.coverage = he, n.coverage = he, r && (r.value = String(he)), o ? s.backgroundDirty = !0 : (y(), de({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), P(), k(), ie();
      return;
    }
    if (z === "revert-handoff-lane" || z === "revert-upstream") {
      const he = T.getAttribute("data-lane") || null;
      if (!v(z, he)) return;
      z === "revert-handoff-lane" ? (M(), me(he)) : K(he);
      return;
    }
    if (z === "toggle-selection-picker") {
      if ((E = (Z = u.sidePanel) == null ? void 0 : Z.selectionPicker) != null && E.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (z === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const he = String(T.getAttribute("data-selection-id") || "");
      let xe = null;
      if (he && (d === "stickers" ? xe = [...ee(), ...c ? l.shots : []].find((se) => String((se == null ? void 0 : se.id) || "") === he) || null : xe = ((N = D().find((se) => {
        var ke;
        return String(((ke = se == null ? void 0 : se.item) == null ? void 0 : ke.id) || "") === he;
      })) == null ? void 0 : N.item) || null), L(xe || null), xe && !ye(xe)) {
        const se = pe(xe);
        R(Kt(Number(se.yaw_deg || 0)), Oe(Number(se.pitch_deg || 0), -89.9, 89.9));
      }
      P(), k(), ie();
      return;
    }
    if (z === "copy-state-inline") {
      const he = C(), xe = $();
      if (!he || xe === "stroke" || Y().length > 1) return;
      const se = JSON.stringify(a && xe !== "image" ? p(he) : _(pe(he)));
      try {
        await navigator.clipboard.writeText(se), (b = u.sidePanel) != null && b.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ke;
          (ke = u.sidePanel) != null && ke.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (z === "set-invert-x") {
      l.ui_settings.invert_view_x = T.getAttribute("data-value") === "1", be(), P(), (A = i.setDirtyCanvas) == null || A.call(i, !0, !0), ie();
      return;
    }
    if (z === "set-invert-y") {
      l.ui_settings.invert_view_y = T.getAttribute("data-value") === "1", be(), P(), (X = i.setDirtyCanvas) == null || X.call(i, !0, !0), ie();
      return;
    }
    if (z === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, be(), P(), (ge = i.setDirtyCanvas) == null || ge.call(i, !0, !0), ie();
      return;
    }
    if (z === "close-preview") {
      g();
      return;
    }
    if (z === "cancel-close") {
      g();
      return;
    }
    z === "save-close" && (f(), g());
  }
  function S(w) {
    const T = w.target.closest("[data-action='param-input']");
    T && I(String(T.getAttribute("data-param-key") || ""), T.value, !1);
  }
  function V(w) {
    const T = w.target.closest("[data-action='param-input']");
    T && I(String(T.getAttribute("data-param-key") || ""), T.value, !0);
  }
  return {
    connect(w) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: _,
        closeEditor: g,
        commitAndRefreshNode: h,
        commitState: y,
        getActiveCutoutShot: B,
        getCutoutInspectorItems: D,
        getList: ee,
        getSelected: C,
        getSelectedItems: Y,
        getSelectedKind: $,
        isItemLocked: ne,
        isSceneSticker: _e,
        isStrokeGroupItem: ye,
        markObjectVisualsDirty: we,
        persistUiSettings: be,
        poseOf: pe,
        pushHistory: ve,
        releaseHiddenSelection: fe,
        requestDraw: ie,
        revertPortHandoffLane: me,
        revertUpstreamSticker: ce,
        selectedWorldSticker: O,
        setSelectedItem: L,
        stopTimelinePlayback: M,
        syncCoverageChangeToNodePreviews: de,
        syncCutoutShot: Q,
        turnViewTo: R,
        updateSelectionMenu: k,
        updateSidePanel: P,
        worldStickerEditable: le,
        writePose: q
      } = w);
    },
    onSidePanelClick: m,
    onSidePanelInput: S,
    onSidePanelChange: V
  };
}
function yC(e) {
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
  let _, g, h, y, B, D, ee, C, Y, $, ne, _e, ye, we, be, pe, ve, fe, ie, me, ce, O, L, M, de, Q, R, k, P, le, q, I, v, K, m, S, V, w, T, z, Z, E, N, b, A, X, ge, he, xe, se, ke;
  const j = () => {
    if (!t.customPaintSessionStart) return;
    if (kl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if ($2(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      Hn(t.customPaintColor),
      ...t.customPaintHistory.filter((ze) => !kl(ze, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, ae = (Ce = !1) => {
    !i || i.hidden || (Ce ? j() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, G = () => {
    i && (i.hidden && (t.customPaintSessionStart = Hn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function te() {
    T();
  }
  function H(Ce) {
    var ft, vt, kt, bt, An;
    if ((vt = (ft = Ce.target) == null ? void 0 : ft.matches) != null && vt.call(ft, "[data-confirm-overlay]")) {
      const qe = (kt = f.confirmDialog) == null ? void 0 : kt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const ze = Ce.target.closest("[data-space-mode]");
    if (ze) {
      K(ze.getAttribute("data-space-mode"));
      return;
    }
    const oe = Ce.target.closest("[data-gizmo-mode]");
    if (oe) {
      t.gizmoMode = oe.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, xe(), k({ localOnly: !0, reason: pt.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), se(), xe()), we(), N(), k();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && Y({ preservePanelValues: !0 }), z(), se(), xe(), k();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? P(-1) : qe === "redo" ? P(1) : qe === "clear" ? ee() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? y() : qe === "add-or-look" ? _() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, Y({ preservePanelValues: !0 }), Tn[qe] && (t.activeBrushPresetId = qe), z(), se(), xe(), k();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), Y({ preservePanelValues: !0 }), z(), se(), xe(), k();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Jl.find((ln) => ln.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = Hn(qe.color), ae(!0), z();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? ae(!0) : G(), z();
        return;
      }
    }
    const Fe = String(((bt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : bt.call(Ae, "data-action")) || "");
    if (Fe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      ke.resumeAfterScrub = !1, b();
      return;
    }
    if (Fe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), ge(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
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
        const qe = t.mode === "frame" ? pe() : null;
        if (!qe || qe.locked === !0) return;
        v(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, Z(), de(), $(), N(), se(), xe(), k();
        return;
      }
      if (Fe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? pe() : null, ln = Ae.getAttribute("data-custom-width"), Bt = Ae.getAttribute("data-custom-height");
        if (!qe || !B(qe, ln, Bt)) return;
        f.frameRail.aspectOpen = !1, Z(), de(), $(), N(), k();
        return;
      }
      if (Fe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? pe() : null;
        if (!qe || qe.locked === !0) return;
        q(qe), f.frameRail.aspectOpen = !1, Z(), de(), $(), N(), k();
        return;
      }
      if (Fe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, xe(), k();
        return;
      }
      if (Fe === "aspect-set") {
        const qe = fe();
        if (!qe) return;
        const ln = String(Ae.getAttribute("data-aspect") || "1:1");
        v(qe, ln), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, Z(), de(), $(), xe(), k();
        return;
      }
      if (Fe === "rotate-90") {
        const qe = fe();
        if (!qe || ce()) return;
        q(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, Z(), de(), $(), xe(), k();
        return;
      }
      if (Fe === "bring-front") {
        D();
        return;
      }
      if (Fe === "send-back") {
        I();
        return;
      }
      if (Fe === "duplicate") {
        ye();
        return;
      }
      if (Fe === "replace-image") {
        R();
        return;
      }
      if (Fe === "toggle-lock") {
        X();
        return;
      }
      if (Fe === "back-initial") {
        le();
        return;
      }
      if (Fe === "toggle-visible") {
        A();
        return;
      }
      if (Fe === "delete") {
        _e();
        return;
      }
    }
    if (Fe === "reset-view") {
      if (t.mode === "frame") return;
      he(
        { position: V(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((An = ne()) == null ? void 0 : An.radius) || fr },
        { mode: xl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Fe === "frame-view") {
      if (!O() || xl(t.spaceMode, t.viewTransition) !== "6dof") return;
      be();
      return;
    }
    if (Fe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, Y2(r == null ? void 0 : r.id, t.showGrid), te(), k();
      return;
    }
    if (Fe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Re();
      return;
    }
    if (Fe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, w(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ke(), k();
      return;
    }
    const He = Ce.target.closest("[data-paint-history-index]");
    if (!He) return;
    const Ge = Number(He.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[Ge];
    Ue && (t.customPaintColor = Hn(Ue), t.paintColor = Hn(Ue), z());
  }
  function J(Ce) {
    const ze = Ce.target.closest("[data-video-seek]");
    if (ze) {
      if (!(p instanceof HTMLVideoElement)) return;
      L.playing && (ke.resumeAfterScrub = !0), L.seek(Ni(Number(ze.value || 0), M()));
      return;
    }
    const oe = Ce.target.closest("[data-video-volume]");
    if (oe) {
      if (!(p instanceof HTMLVideoElement)) return;
      const Fe = Oe(Number(oe.value || 0), 0, 1);
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
      const Fe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), He = ve(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[He] = Fe, z(), m();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Fe = { ...t.customPaintColor, a: Oe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Hn(Fe), t.paintColor = Hn(Fe), z();
    }
  }
  function U(Ce) {
    var ze;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      ke.resumeAfterScrub && L.play(), ke.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((ze = Ce.target) == null ? void 0 : ze.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && ie();
  }
  function x(Ce) {
    const ze = Ce.target.closest("[data-tip]");
    !ze || !l.contains(ze) || u.target !== ze && (u.target = ze, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === ze && S(ze);
    }, 220));
  }
  function re(Ce) {
    var Ie, Ae;
    const ze = Ce.target.closest("[data-tip]");
    !ze || u.target !== ze || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === ze || me();
  }
  function ue(Ce, ze) {
    var Ge;
    if (!o) return;
    const oe = o.getBoundingClientRect(), Ie = Oe((Ce - oe.left) / Math.max(1, oe.width), 0, 1), Ae = 1 - Oe((ze - oe.top) / Math.max(1, oe.height), 0, 1), Fe = Ru(t.customPaintColor), He = { ...Lu(Fe.h, Ie, Ae), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = Hn(He), t.paintColor = Hn(He), z();
  }
  function F(Ce) {
    var Fe;
    if (!s) return;
    const ze = s.getBoundingClientRect(), oe = Oe((Ce - ze.left) / Math.max(1, ze.width), 0, 1), Ie = Ru(t.customPaintColor), Ae = { ...Lu(oe, Ie.s, Ie.v), a: Number(((Fe = t.customPaintColor) == null ? void 0 : Fe.a) ?? 1) };
    t.customPaintColor = Hn(Ae), t.paintColor = Hn(Ae), z();
  }
  function W(Ce, ze) {
    const oe = Ce.pointerId;
    ze(Ce);
    const Ie = (Fe) => {
      Fe.pointerId === oe && ze(Fe);
    }, Ae = (Fe) => {
      Fe.pointerId === oe && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ie), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function Se() {
    const Ce = !!t.fullscreen;
    no(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? We.fullscreen_close : We.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me(Ce) {
    const ze = !!Ce;
    t.fullscreen !== ze && (t.fullscreen = ze, l.classList.toggle("pano-modal-fullscreen", ze), ze ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), te(), Se(), Q(), k());
  }
  function Ee() {
    return document.fullscreenElement === n;
  }
  async function Re() {
    var Ce, ze;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      Ee() ? await ((ze = document.exitFullscreen) == null ? void 0 : ze.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Me(Ee());
  }
  function Ke() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? We.fullscreen_close : We.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: _,
        addImageSticker: g,
        addStudioCamera: h,
        addWorldImageSticker: y,
        applyCutoutAspectCustom: B,
        bringSelectedToFront: D,
        clearAll: ee,
        clearPaintingLayer: C,
        clearSelection: Y,
        commitAndRefreshNode: $,
        contentSphere: ne,
        deleteSelected: _e,
        duplicateSelected: ye,
        forceCursorTool: we,
        frameSpaceContent: be,
        getActiveCutoutShot: pe,
        getBrushPresetIdForTool: ve,
        getSelected: fe,
        hidePaintSizePreview: ie,
        hideTooltip: me,
        isErpCamera: ce,
        isFreeSpaceView: O,
        playback: L,
        playbackFps: M,
        pushHistory: de,
        queueVideoTransportLayout: Q,
        replaceSelectedImage: R,
        requestDraw: k,
        restoreHistory: P,
        restoreSelectedToInitialPose: le,
        rotateCutoutAspect90: q,
        sendSelectedToBack: I,
        setShotAspect: v,
        setSpaceMode: K,
        showPaintSizePreview: m,
        showTooltipFor: S,
        spaceOrigin: V,
        startAnimation: w,
        syncFloatingViewButtonState: T,
        syncPaintUi: z,
        syncSidePanelControls: Z,
        syncVideoTransportState: E,
        syncViewToggleState: N,
        togglePlayback: b,
        toggleSelectedExternalStickerVisibility: A,
        toggleSelectedLock: X,
        toggleVideoMuted: ge,
        transitionView: he,
        updateSelectionMenu: xe,
        updateSidePanel: se,
        videoState: ke
      } = Ce);
    },
    closePaintColorPop: ae,
    syncGridToggleButton: te,
    onRootClick: H,
    onRootInput: J,
    onRootChange: U,
    onRootPointerOver: x,
    onRootPointerOut: re,
    updatePaintColorFromSv: ue,
    updatePaintColorFromHue: F,
    bindDrag: W,
    syncFullscreenButton: Se,
    setFullscreenState: Me,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: Ke
  };
}
function bC(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, p, _, g, h, y, B, D, ee, C, Y;
  const $ = TA();
  function ne(Q) {
    var R, k, P, le, q;
    if (Q.key === "Escape") {
      if (l()) {
        Q.preventDefault(), Q.stopPropagation(), (R = Q.stopImmediatePropagation) == null || R.call(Q);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        Q.preventDefault(), Q.stopPropagation(), (k = Q.stopImmediatePropagation) == null || k.call(Q), (P = document.exitFullscreen) == null || P.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        Q.preventDefault(), Q.stopPropagation(), (le = Q.stopImmediatePropagation) == null || le.call(Q), B(!1);
        return;
      }
      Q.preventDefault(), Q.stopPropagation(), (q = Q.stopImmediatePropagation) == null || q.call(Q), d();
    }
  }
  function _e(Q) {
    const R = String(Q.key || ""), k = String(Q.code || ""), P = Number(Q.keyCode || 0);
    if (!(R === "Delete" || k === "Delete" || P === 46) && !(R === "Backspace" || k === "Backspace" || P === 8)) return;
    const I = Q.target, v = ((I == null ? void 0 : I.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || I != null && I.isContentEditable) return;
    if (o.selection) {
      f(), Q.preventDefault(), Q.stopPropagation();
      return;
    }
    if (p()) {
      Q.preventDefault(), Q.stopPropagation();
      return;
    }
    h() && (u(), Q.preventDefault(), Q.stopPropagation());
  }
  function ye(Q) {
    if (s.confirmDialog.visible) return !1;
    const R = Q.composedPath()[0];
    if (R !== document.body && R !== document.documentElement && !r.contains(R)) return !1;
    const k = ((R == null ? void 0 : R.tagName) || "").toUpperCase();
    return k === "INPUT" ? !_2.has(String(R.type || "text").toLowerCase()) : k !== "TEXTAREA" && k !== "SELECT" && !(R != null && R.isContentEditable);
  }
  function we(Q) {
    return Q.code !== "Space" || Q.ctrlKey || Q.metaKey || Q.altKey || n || !i || !s.timeline.visible ? !1 : ye(Q);
  }
  function be(Q) {
    we(Q) && (Q.preventDefault(), Q.stopPropagation(), Q.repeat || C());
  }
  function pe(Q) {
    we(Q) && (Q.preventDefault(), Q.stopPropagation());
  }
  function ve(Q) {
    if ($.modifiers(Q), !!q0(Q.code)) {
      if (!ye(Q)) {
        ie(Q.code);
        return;
      }
      Q.ctrlKey || Q.metaKey || (Q.preventDefault(), Q.stopPropagation(), a() && ($.press(Q.code, Q.timeStamp), Q.repeat || c(), D(() => {
      })));
    }
  }
  function fe(Q) {
    $.modifiers(Q), Q.key === "Meta" && me(), ie(Q.code) && (Q.preventDefault(), Q.stopPropagation());
  }
  function ie(Q) {
    return $.release(Q) ? ($.held || _(), !0) : !1;
  }
  function me() {
    $.held && ($.releaseAll(), _());
  }
  function ce() {
    document.hidden && me();
  }
  function O() {
    me();
  }
  function L(Q) {
    const R = !!(Q.ctrlKey || Q.metaKey), k = !!Q.altKey;
    t.marqueeModifier === R && t.altModifier === k || (t.marqueeModifier = R, t.altModifier = k, ee(), Y(t.pointerPos));
  }
  function M() {
    me(), t.marqueeModifier = !1, t.altModifier = !1, ee(), Y(t.pointerPos);
  }
  function de(Q) {
    if (n || !Q.ctrlKey && !Q.metaKey) return;
    const R = String(Q.key || "").toLowerCase(), k = String(Q.code || "");
    if (R !== "z" && k !== "KeyZ") return;
    const P = Q.target, le = ((P == null ? void 0 : P.tagName) || "").toUpperCase();
    if (le === "INPUT" || le === "TEXTAREA" || P != null && P.isContentEditable) return;
    const { canUndo: q, canRedo: I } = g();
    Q.shiftKey && !I || !Q.shiftKey && !q || (y(Q.shiftKey ? 1 : -1), Q.preventDefault(), Q.stopPropagation());
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
        deleteSelectedWorldSticker: p,
        endFrameKeyMove: _,
        getHistoryCapabilities: g,
        getSelected: h,
        restoreHistory: y,
        setFullscreenState: B,
        startAnimation: D,
        syncFrameRollKnob: ee,
        togglePlayback: C,
        updateCursor: Y
      } = Q);
    },
    moveKeys: $,
    onEscClose: ne,
    onDeleteKey: _e,
    onSpaceKey: be,
    onSpaceKeyUp: pe,
    onMoveKeyDown: ve,
    onMoveKeyUp: fe,
    onVisibilityChange: ce,
    onContextMenu: O,
    onModifierKeyChange: L,
    onWindowBlur: M,
    onUndoRedoKey: de
  };
}
const Up = /* @__PURE__ */ new Map(), ci = Pg({
  app: ur,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Tu,
    markImageFailed: O0,
    markImageLoading: I0,
    markImageReady: E0
  }
});
function Bp(e) {
  if (!Lt(e, "background") || !Lt(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const vC = ci.assetSource, SC = ci.source, _C = ci.uiImage, wC = ci.invalidateUiImage, Yp = ci.loadPreferredExactLinkedImage;
async function kC(e, t, r = {}) {
  var Fo, tf;
  await p0(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = j2(e, t);
  await Wd();
  const a = ya(e, "output_preset"), l = ya(e, "coverage"), c = ya(e, "bg_color"), d = ya(e, S2), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Yp(
      e,
      $e,
      () => nt(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return K2($e);
  }, p = ($e = 2048) => {
    const at = a == null ? void 0 : a.value;
    return G2(at) ? f() || Math.max(1, Math.round(Number($e || 2048))) : H2(at, $e);
  }, _ = e.__panoSceneStateV2 === !0, g = t === "stickers" && _, h = g && e.__panoStudio === !0, y = h, B = t === "cutout" || h, D = (_ ? jm : zm)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: $n(l == null ? void 0 : l.value),
    sharedUiSettings: W2(),
    active: Um(e),
    fps: _ ? Bp(e) : null
  });
  Wn(e).liveState = D, Wn(e).liveStateVersion = 0;
  let ee = null;
  y ? (ee = D.camera && D.camera.visible !== !1 ? Km(D.camera, 0) : null, D.shots = ee ? [{ ...ee, position: [...ee.position] }] : [], D.active.selected_shot_id = null) : t === "cutout" && (D.shots = Array.isArray(D.shots) ? D.shots.slice(0, 1) : [], D.shots.length || (D.active.selected_shot_id = null));
  const C = t === "cutout" ? (() => {
    var sr;
    const $e = Array.isArray(D.shots) ? D.shots : [], at = String(((sr = D == null ? void 0 : D.active) == null ? void 0 : sr.selected_shot_id) || "");
    return $e.find((cn) => String((cn == null ? void 0 : cn.id) || "") === at) || $e[0] || null;
  })() : null, Y = C ? J0(C, !1) : { width: 220, height: 132 }, $ = C0(h ? "studio" : t), ne = /* @__PURE__ */ _o({
    stageStatus: ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: ($.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fo = $.spaceButtons) != null && Fo.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: $.spaceButtons, frame: $.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: ($.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...($.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: We.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: We.aspect,
      rotateIcon: We.rotate_90,
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
      icon: We.fullscreen,
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
      customColorCss: Sr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Sr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: Y.width,
      height: Y.height,
      label: C ? "Loading preview" : "Add Frame to preview"
    }
  }), _e = { frame: /* @__PURE__ */ $a(0), playing: /* @__PURE__ */ $a(!1) }, ye = document.createElement("div");
  document.body.appendChild(ye);
  const we = ({ intent: $e, file: at } = {}) => {
    if (lr(at)) {
      if ($e === "add") {
        Ee(at);
        return;
      }
      if ($e === "add-world") {
        Re(at);
        return;
      }
      $e === "replace" && St(at);
    }
  }, be = ({ intent: $e } = {}) => {
  }, pe = nd(b2, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: $,
    paintSwatches: Jl.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: Sr($e.color, 1)
    })),
    uiState: ne,
    playhead: _e,
    onClose: () => {
      or();
    },
    onTimeline: ($e) => ec($e),
    onImageFileSelected: we,
    onImageFileCancelled: be
  });
  let ve = null;
  try {
    ve = pe.mount(ye);
  } catch ($e) {
    try {
      pe.unmount();
    } catch {
    }
    throw ye.remove(), $e;
  }
  const fe = ye.querySelector(".pano-modal-overlay"), ie = ye.querySelector(".pano-modal"), me = ie == null ? void 0 : ie.querySelector("[data-stage-overlay]"), ce = ie == null ? void 0 : ie.querySelector("[data-stage-background]"), O = ie == null ? void 0 : ie.querySelector(".pano-stage-wrap"), L = ((tf = ve == null ? void 0 : ve.getPaintOverlayRefs) == null ? void 0 : tf.call(ve)) || {}, M = L.cursor || null, de = L.sizePreview || null, Q = L.sizeSample || null;
  if (!fe || !ie || !me || !ce || !O || !M || !de || !Q)
    throw pe.unmount(), ye.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const R = me.getContext("2d"), k = ie.querySelector("[data-side]"), P = ie.querySelector("[data-video-element]"), le = ie.querySelector("[data-port-video-element]");
  hc(me, "editor.stage-overlay"), hc(ce, "editor.stage-background"), zf(P, "editor.video"), zf(le, "editor.port-video");
  const q = ie.querySelector(".pano-floating-right"), I = ie.querySelector(".pano-floating-top"), v = ie.querySelector("[data-tool-rail]"), K = ie.querySelector("[data-frame-rail]"), m = ie.querySelector("[data-frame-roll-knob]"), S = ie.querySelector("[data-paint-dock]"), V = ie.querySelector(".pano-video-transport"), w = ie.querySelector("[data-selection-menu]"), T = ie.querySelector("[data-tooltip]"), z = ie.querySelector("[data-camera-preview-host]"), Z = ie.querySelector("[data-camera-preview-canvas]");
  hc(Z, "editor.camera-preview");
  const E = ie.querySelector("[data-paint-color-row]"), N = ie.querySelector("[data-paint-color-pop]"), b = ie.querySelector("[data-paint-color-sv]"), A = ie.querySelector("[data-paint-color-sv-cursor]"), X = ie.querySelector("[data-paint-hue-strip]"), ge = ie.querySelector("[data-paint-hue-handle]");
  O == null || O.removeAttribute("data-stage-ready"), O == null || O.setAttribute("data-stage-loading-kind", "boot"), me.style.opacity = "1", ce.style.opacity = "0", i && (k == null || k.remove(), ie.classList.add("pano-modal-readonly")), ie.addEventListener("pointerdown", () => U.wake(), !0), ie.addEventListener("pointerdown", ($e) => {
    var at;
    $e.target.closest("[data-frame-roll-knob]") || An(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (ie.querySelectorAll(".pano-picker-pop").forEach((sr) => {
      sr.hidden = !0;
    }), oe(!0), B && xe.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (xe.cutoutAspectOpen = !1, xe.menuMode = "", xe.menuSize.measured = !1, _t(), nt()), (at = ne.frameRail) != null && at.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (ne.frameRail.aspectOpen = !1)));
  });
  const xe = {
    mode: "pano",
    selectedId: G0(t, D),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: fr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: $n(D.coverage),
    historyController: nA(D),
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
    showGrid: B2(e == null ? void 0 : e.id, !0),
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
    paintEngine: Vl(),
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
  }, se = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (xe.selectedId = null, D.active.selected_sticker_id = null), xe.selectedIds = xe.selectedId ? [xe.selectedId] : [];
  const ke = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), te = on({ label: "editor.still" });
  te.__panoFrameIdx = 0;
  const H = on({ label: "editor.port-still" });
  H.__panoFrameIdx = 0;
  const J = {
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
  }, U = oM({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, at) => Zs($e, at),
    animating: () => He()
  }), x = rM({
    requestFrame: ($e) => U.requestFrame($e),
    cancelFrame: ($e) => U.cancelFrame($e),
    tasks: {
      seek: () => tc.seek(se.scrubFrame),
      timeline: () => Xs(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        It(), nt({ localOnly: !0, reason: pt.STATE });
      },
      sidePanel: () => vn()
    }
  }), re = g_({
    canvas: ce,
    onReady: () => {
      Yt(), nt({ reason: pt.CONTEXT });
    },
    onFailed: () => nt(),
    onUpdate: () => nt({ localOnly: !0, reason: pt.MEDIA }),
    onSplats: ($e) => nt({ localOnly: !0, reason: QA($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      vt(), Yt(), nt({ reason: pt.CONTEXT });
    }
  }), ue = Number.parseFloat(
    getComputedStyle(ie).getPropertyValue("--pano-float-radius")
  ) || 10, F = ($e) => {
    const at = String($e || "default");
    me.style.cursor !== at && (me.style.cursor = at);
  }, W = {
    timer: 0,
    target: null
  }, Se = {
    active: !1,
    depth: 0
  }, Me = ad({
    getView: () => ({ yaw: xe.viewYaw, pitch: xe.viewPitch, fov: xe.viewFov }),
    setView: ($e) => {
      xe.viewYaw = Kt(Number($e.yaw || 0)), xe.viewPitch = Oe(Number($e.pitch || 0), -89.9, 89.9), xe.viewFov = Oe(Number($e.fov || xe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const $e = me.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || me.clientWidth || 0)),
        h: Math.max(1, Number($e.height || me.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, at;
      return {
        x: ($e = D.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (at = D.ui_settings) != null && at.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => kt(),
    onInteraction: () => U.requestDraw(pt.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Re,
    applyInitialCutoutFocus: je,
    applyVideoTimelineFps: Ke,
    bindDrag: Ce,
    cancelFrameCameraGesture: ze,
    closePaintColorPop: oe,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Fe,
    editorAnimating: He,
    endFrameKeyMove: Ge,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: ft,
    forgetCameraPreviewFrame: vt,
    getUnwrapRect: kt,
    hidePaintSizePreview: bt,
    hideTooltip: An,
    hoverWorldGizmo: qe,
    isFreeFrameView: ln,
    isFreeSpaceView: Bt,
    migrateLegacyEmbeddedAssets: gi,
    onCanvasDragOver: Yr,
    onCanvasDrop: yi,
    onCanvasMouseMove: sn,
    onCanvasPointerCancel: bn,
    onCanvasPointerDown: qr,
    onCanvasPointerMove: hr,
    onCanvasPointerUp: rr,
    onCanvasWheel: Ds,
    onContextMenu: Hi,
    onDeleteKey: Po,
    onEscClose: Ao,
    onFrameRollKnobDoubleClick: Ls,
    onFrameRollKnobPointerDown: Rs,
    onFrameRollKnobPointerMove: Vs,
    onFullscreenChange: Gi,
    onModifierKeyChange: At,
    onMoveKeyDown: Bn,
    onMoveKeyUp: ir,
    onRootChange: Co,
    onRootClick: zn,
    onRootInput: $s,
    onRootPointerOut: zs,
    onRootPointerOver: js,
    onSidePanelChange: Xr,
    onSidePanelClick: Ql,
    onSidePanelInput: Jr,
    onSpaceKey: Hs,
    onSpaceKeyUp: Io,
    onTimelineAction: ec,
    onUndoRedoKey: Eo,
    onVisibilityChange: Oo,
    onWindowBlur: Gs,
    onWindowDragEnter: Ks,
    onWindowDragLeave: Ws,
    onWindowDragOver: Us,
    onWindowDrop: Bs,
    playback: tc,
    pushHistory: De,
    reconcileExternalStickerFromInputs: Te,
    refreshModalVideoSource: Pe,
    replaceSelectedImageFromFile: St,
    requestDraw: nt,
    restoreView: Ct,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: st,
    setPointerPos: jn,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Be,
    stopRenderLoop: Qe,
    syncCanvasSize: Yt,
    syncCutoutShot: It,
    syncFullscreenButton: Cr,
    syncGridToggleButton: Ki,
    syncLookAtFrameButtonState: Wi,
    syncOutputPreviewToggleButton: Ui,
    syncPaintUi: Ys,
    syncPaintingLayerAsync: qs,
    syncTimeline: Xs,
    syncUndoRedoButtons: Js,
    tick: Zs,
    triggerBackgroundPersistenceOnClose: Qs,
    updateCursor: ct,
    updatePaintColorFromHue: ht,
    updatePaintColorFromSv: gt,
    updateSelectionMenu: _t,
    updateSidePanel: vn,
    viewControls: en,
    watchPixelRatio: Cn
  } = q2({
    api: hn,
    app: ur,
    backgroundCanvas: ce,
    bgWidget: c,
    cameraV2: y,
    canvas: me,
    closeEditor: or,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: R,
    cutoutPreviewCanvas: Z,
    cutoutPreviewHost: z,
    dragCue: Se,
    dragFrames: x,
    editor: xe,
    editorView: re,
    floatingRightEl: q,
    floatingTopEl: I,
    frameGateCssRadius: ue,
    frameRailEl: K,
    frameRollKnobEl: m,
    hideSidebar: i,
    imageCache: ke,
    initialShotBase: ee,
    loadPreferredExactLinkedImage: Yp,
    mediaAssetSource: vC,
    mediaSource: SC,
    mediaUiImage: _C,
    node: e,
    overlay: fe,
    paintColorPop: N,
    paintColorRow: E,
    paintColorSv: b,
    paintColorSvCursor: A,
    paintCursorEl: M,
    paintDockEl: S,
    paintHueHandle: ge,
    paintHueStrip: X,
    paintSizePreviewEl: de,
    paintSizePreviewSampleEl: Q,
    portStillCanvas: H,
    portVideoEl: le,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: G,
    rasterImageAlphaCache: ae,
    rasterImageCache: j,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: ie,
    runtime: J,
    sceneV2: g,
    scheduler: U,
    selectionMenu: w,
    setCanvasCursor: F,
    shotEditor: B,
    stageWrap: O,
    state: D,
    stateV2: _,
    stateWidget: d,
    stillCanvas: te,
    studio: h,
    timeline: se,
    timelinePlayhead: _e,
    toolRailEl: v,
    tooltip: W,
    tooltipEl: T,
    type: t,
    uiState: ne,
    videoEl: P,
    videoTimelineFps: Bp,
    videoTransportEl: V,
    viewController: Me,
    vueModal: ve
  }, [
    Q2,
    rA,
    iA,
    oA,
    sA,
    aA,
    lA,
    cA,
    uA,
    XA,
    JA,
    ZA,
    tC,
    nC,
    rC,
    iC,
    oC,
    sC,
    aC,
    lC,
    cC,
    uC,
    dC,
    fC,
    pC,
    hC,
    mC,
    gC,
    yC,
    bC
  ]);
  Be(), Xe.observe(me), Cn();
  const Rt = () => Ie();
  n || (fl(e).flushBeforeQueue = Rt), m == null || m.addEventListener("pointerdown", Rs), m == null || m.addEventListener("pointermove", Vs), m == null || m.addEventListener("pointerup", Ue), m == null || m.addEventListener("pointercancel", () => ze()), m == null || m.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = xe.interaction) == null ? void 0 : $e.source) === "knob" && ze();
  }), m == null || m.addEventListener("dblclick", Ls), me.onpointerdown = qr, me.onpointermove = hr, me.onpointerup = rr, me.onpointercancel = bn, me.onlostpointercapture = () => {
    ze();
  }, me.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, me.oncontextmenu = ($e) => {
    (Bt() || ln()) && Nk(en(), 2) && $e.preventDefault();
  }, me.onmousemove = sn, me.onpointerleave = () => {
    xe.interaction || qe({ x: -1e6, y: -1e6 });
  }, me.onmouseleave = () => {
    jn(xe.pointerPos, !1), ct(xe.pointerPos), xe.mode === "frame" && xe.primaryTool === "cursor" && nt({ localOnly: !0, reason: pt.OVERLAY });
  }, me.onwheel = Ds, me.ondragover = Yr, me.ondrop = yi, window.addEventListener("dragenter", Ks, !0), window.addEventListener("dragover", Us, !0), window.addEventListener("dragleave", Ws, !0), window.addEventListener("drop", Bs, !0), k == null || k.addEventListener("click", Ql), k == null || k.addEventListener("input", Jr), k == null || k.addEventListener("change", Xr), Ki(), ie.addEventListener("click", zn), ie.addEventListener("input", $s), ie.addEventListener("change", Co), ie.addEventListener("pointerup", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && bt();
  }), ie.addEventListener("pointercancel", ($e) => {
    var at;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((at = $e.target) == null ? void 0 : at.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && bt();
  }), ie.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && bt();
  }), ie.addEventListener("pointerover", js), ie.addEventListener("pointerout", zs), ie.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || An();
  }), b && (b.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => gt(at.clientX, at.clientY));
  }), X && (X.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (at) => ht(at.clientX));
  }), ie.addEventListener("click", ($e) => {
    var bi;
    const at = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!at) return;
    const sr = at.getAttribute("data-action") === "confirm-accept", cn = (bi = ne.confirmDialog) == null ? void 0 : bi.resolve;
    ne.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, cn == null || cn(sr);
  }), document.addEventListener("fullscreenchange", Gi), Cr(), Ui();
  const an = e.onConnectionsChange;
  let rn = null, zt = () => {
  };
  !n && t === "stickers" && (zt = d0(e, ($e = "sync") => {
    $e === "executed" && (wC(ke, Di), Pe(), g && Ke()), Te($e);
  }, { editor: !0 }), rn = function(...at) {
    typeof an == "function" && an.apply(this, at), Pe(), oi(this, "connections");
  }, e.onConnectionsChange = rn), n || Up.set(String(e.id ?? "0"), () => qs());
  let Tt = null;
  async function or() {
    return Tt || (Tt = (async () => {
      var at, sr, cn, bi, Zr, ea, nf, ta, rf;
      Up.delete(String(e.id ?? "0")), ft(), Ge(), n || Ie(), et(), document.fullscreenElement === fe && ((at = document.exitFullscreen) == null || at.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Gi), Wn(e).liveState = null;
      const $e = I_(e);
      return ($e == null ? void 0 : $e.flushBeforeQueue) === Rt && ($e.flushBeforeQueue = null), (bi = (cn = (sr = Mg(e)) == null ? void 0 : sr.dom) == null ? void 0 : cn.requestDraw) == null || bi.call(cn), (ea = (Zr = e.graph) == null ? void 0 : Zr.setDirtyCanvas) == null || ea.call(Zr, !0, !0), (rf = (ta = (nf = ur) == null ? void 0 : nf.canvas) == null ? void 0 : ta.setDirty) == null || rf.call(ta, !0, !0), An(), x.cancel(), Qe(), Ae(), Fe(), re.dispose(), st(!1), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keydown", Hs, !0), window.removeEventListener("keyup", Io, !0), window.removeEventListener("keydown", Bn, !0), window.removeEventListener("keyup", ir, !0), document.removeEventListener("visibilitychange", Oo), window.removeEventListener("contextmenu", Hi, !0), window.removeEventListener("keydown", At, !0), window.removeEventListener("keyup", At, !0), window.removeEventListener("blur", Gs), window.removeEventListener("keydown", Eo, !0), window.removeEventListener("dragenter", Ks, !0), window.removeEventListener("dragover", Us, !0), window.removeEventListener("dragleave", Ws, !0), window.removeEventListener("drop", Bs, !0), !n && t === "stickers" && (e.onConnectionsChange === rn && (e.onConnectionsChange = an), zt()), pe.unmount(), ye.remove(), Qs(), Tt = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), Tt = null, !1)), Tt);
  }
  window.addEventListener("keydown", Ao, !0), window.addEventListener("keydown", Po, !0), window.addEventListener("keydown", Hs, !0), window.addEventListener("keyup", Io, !0), window.addEventListener("keydown", Bn, !0), window.addEventListener("keyup", ir, !0), document.addEventListener("visibilitychange", Oo), window.addEventListener("contextmenu", Hi, !0), window.addEventListener("keydown", At, !0), window.addEventListener("keyup", At, !0), window.addEventListener("blur", Gs), window.addEventListener("keydown", Eo, !0), fe.addEventListener("pointerdown", ($e) => {
    $e.target === fe && or();
  });
  function In($e, at, { rollbackState: sr = !1 } = {}) {
    let cn = "";
    try {
      sr && (cn = JSON.stringify(D)), at();
    } catch (bi) {
      if (cn)
        try {
          const Zr = JSON.parse(cn);
          Object.keys(D).forEach((ea) => delete D[ea]), Object.assign(D, Zr), n || Ie();
        } catch (Zr) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Zr);
        }
      ne.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, bi);
    }
  }
  In("view", Ct), In("cutout-focus", je), !n && t === "stickers" && In("external-sticker-sync", () => Te("open"), { rollbackState: !0 }), gi().catch(($e) => {
    ne.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), In("history", () => De({ initial: !0 })), In("undo-redo", Js), In("paint-ui", Ys), In("side-panel", vn), In("look-at-frame", Wi), In("video-source", Pe), In("canvas-size", Yt), In("cursor", () => ct(xe.pointerPos)), nt(), Je();
}
ur.registerExtension(Lk({
  app: ur,
  openEditor: kC,
  attachStickers: tM,
  attachCutout: nM,
  attachPreview: eM,
  restoreOutput: jx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: x2
}));
