import * as al from "../../scripts/app.js";
import { app as vr } from "../../scripts/app.js";
import { api as Bt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function jf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const St = {}, Yo = [], Dr = () => {
}, gg = () => !1, tc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nc = (e) => e.startsWith("onUpdate:"), Nn = Object.assign, Hf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, g_ = Object.prototype.hasOwnProperty, gt = (e, t) => g_.call(e, t), Je = Array.isArray, Xo = (e) => ms(e) === "[object Map]", yg = (e) => ms(e) === "[object Set]", Nh = (e) => ms(e) === "[object Date]", et = (e) => typeof e == "function", qt = (e) => typeof e == "string", Rr = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", bg = (e) => (xt(e) || et(e)) && et(e.then) && et(e.catch), vg = Object.prototype.toString, ms = (e) => vg.call(e), y_ = (e) => ms(e).slice(8, -1), _g = (e) => ms(e) === "[object Object]", Gf = (e) => qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ya = /* @__PURE__ */ jf(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, b_ = /-\w/g, En = rc(
  (e) => e.replace(b_, (t) => t.slice(1).toUpperCase())
), v_ = /\B([A-Z])/g, go = rc(
  (e) => e.replace(v_, "-$1").toLowerCase()
), ic = rc((e) => e.charAt(0).toUpperCase() + e.slice(1)), lu = rc(
  (e) => e ? `on${ic(e)}` : ""
), Fr = (e, t) => !Object.is(e, t), sl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, wg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Kf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ph;
const oc = () => Ph || (Ph = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = qt(r) ? S_(r) : wt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (qt(e) || xt(e))
    return e;
}
const __ = /;(?![^(]*\))/g, w_ = /:([^]+)/, x_ = /\/\*[^]*?\*\//g;
function S_(e) {
  const t = {};
  return e.replace(x_, "").split(__).forEach((n) => {
    if (n) {
      const r = n.split(w_);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (qt(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = ct(e[n]);
      r && (t += r + " ");
    }
  else if (xt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const k_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", M_ = /* @__PURE__ */ jf(k_);
function xg(e) {
  return !!e || e === "";
}
function N_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Wf(e[r], t[r]);
  return n;
}
function Wf(e, t) {
  if (e === t) return !0;
  let n = Nh(e), r = Nh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Rr(e), r = Rr(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? N_(e, t) : !1;
  if (n = xt(e), r = xt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !Wf(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Sg = (e) => !!(e && e.__v_isRef === !0), it = (e) => qt(e) ? e : e == null ? "" : Je(e) || xt(e) && (e.toString === vg || !et(e.toString)) ? Sg(e) ? it(e.value) : JSON.stringify(e, kg, 2) : String(e), kg = (e, t) => Sg(t) ? kg(e, t.value) : Xo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[cu(r, a) + " =>"] = o, n),
    {}
  )
} : yg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => cu(n))
} : Rr(t) ? cu(t) : xt(t) && !Je(t) && !_g(t) ? String(t) : t, cu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $n;
class P_ {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = $n, !t && $n && (this.index = ($n.scopes || ($n.scopes = [])).push(
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
      const n = $n;
      try {
        return $n = this, t();
      } finally {
        $n = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $n, $n = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && ($n = this.prevScope, this.prevScope = void 0);
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
function A_() {
  return $n;
}
let Nt;
const uu = /* @__PURE__ */ new WeakSet();
class Mg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $n && $n.active && $n.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, uu.has(this) && (uu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ah(this), Ag(this);
    const t = Nt, n = _r;
    Nt = this, _r = !0;
    try {
      return this.fn();
    } finally {
      Cg(this), Nt = t, _r = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Yf(t);
      this.deps = this.depsTail = void 0, Ah(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? uu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qu(this) && this.run();
  }
  get dirty() {
    return qu(this);
  }
}
let Ng = 0, Xa, qa;
function Pg(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qa, qa = e;
    return;
  }
  e.next = Xa, Xa = e;
}
function Bf() {
  Ng++;
}
function Uf() {
  if (--Ng > 0)
    return;
  if (qa) {
    let t = qa;
    for (qa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xa; ) {
    let t = Xa;
    for (Xa = void 0; t; ) {
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
function Ag(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Cg(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Yf(r), C_(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function qu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ig(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ig(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rs) || (e.globalVersion = rs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Nt, r = _r;
  Nt = e, _r = !0;
  try {
    Ag(e);
    const o = e.fn(e._value);
    (t.version === 0 || Fr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Nt = n, _r = r, Cg(e), e.flags &= -3;
  }
}
function Yf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Yf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function C_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _r = !0;
const Eg = [];
function ci() {
  Eg.push(_r), _r = !1;
}
function ui() {
  const e = Eg.pop();
  _r = e === void 0 ? !0 : e;
}
function Ah(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Nt;
    Nt = void 0;
    try {
      t();
    } finally {
      Nt = n;
    }
  }
}
let rs = 0;
class I_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Nt || !_r || Nt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Nt)
      n = this.activeLink = new I_(Nt, this), Nt.deps ? (n.prevDep = Nt.depsTail, Nt.depsTail.nextDep = n, Nt.depsTail = n) : Nt.deps = Nt.depsTail = n, Og(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Nt.depsTail, n.nextDep = void 0, Nt.depsTail.nextDep = n, Nt.depsTail = n, Nt.deps === n && (Nt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, rs++, this.notify(t);
  }
  notify(t) {
    Bf();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Uf();
    }
  }
}
function Og(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Og(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ju = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ Symbol(
  ""
), Zu = /* @__PURE__ */ Symbol(
  ""
), is = /* @__PURE__ */ Symbol(
  ""
);
function Sn(e, t, n) {
  if (_r && Nt) {
    let r = Ju.get(e);
    r || Ju.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Xf()), o.map = r, o.key = n), o.track();
  }
}
function ri(e, t, n, r, o, a) {
  const l = Ju.get(e);
  if (!l) {
    rs++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Bf(), t === "clear")
    l.forEach(u);
  else {
    const d = Je(e), b = d && Gf(n);
    if (d && n === "length") {
      const y = Number(r);
      l.forEach((_, x) => {
        (x === "length" || x === is || !Rr(x) && x >= y) && u(_);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(is)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(io)), Xo(e) && u(l.get(Zu)));
          break;
        case "delete":
          d || (u(l.get(io)), Xo(e) && u(l.get(Zu)));
          break;
        case "set":
          Xo(e) && u(l.get(io));
          break;
      }
  }
  Uf();
}
function Lo(e) {
  const t = /* @__PURE__ */ mt(e);
  return t === e ? t : (Sn(t, "iterate", is), /* @__PURE__ */ or(e) ? t : t.map(wr));
}
function ac(e) {
  return Sn(e = /* @__PURE__ */ mt(e), "iterate", is), e;
}
function Er(e, t) {
  return /* @__PURE__ */ fi(e) ? ia(/* @__PURE__ */ oo(e) ? wr(t) : t) : wr(t);
}
const E_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return fu(this, Symbol.iterator, (e) => Er(this, e));
  },
  concat(...e) {
    return Lo(this).concat(
      ...e.map((t) => Je(t) ? Lo(t) : t)
    );
  },
  entries() {
    return fu(this, "entries", (e) => (e[1] = Er(this, e[1]), e));
  },
  every(e, t) {
    return Yr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Er(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Yr(
      this,
      "find",
      e,
      t,
      (n) => Er(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Yr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yr(
      this,
      "findLast",
      e,
      t,
      (n) => Er(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Yr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return du(this, "includes", e);
  },
  indexOf(...e) {
    return du(this, "indexOf", e);
  },
  join(e) {
    return Lo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return du(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oa(this, "pop");
  },
  push(...e) {
    return Oa(this, "push", e);
  },
  reduce(e, ...t) {
    return Ch(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ch(this, "reduceRight", e, t);
  },
  shift() {
    return Oa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oa(this, "splice", e);
  },
  toReversed() {
    return Lo(this).toReversed();
  },
  toSorted(e) {
    return Lo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Oa(this, "unshift", e);
  },
  values() {
    return fu(this, "values", (e) => Er(this, e));
  }
};
function fu(e, t, n) {
  const r = ac(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ or(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const O_ = Array.prototype;
function Yr(e, t, n, r, o, a) {
  const l = ac(e), u = l !== e && !/* @__PURE__ */ or(e), d = l[t];
  if (d !== O_[t]) {
    const _ = d.apply(e, a);
    return u ? wr(_) : _;
  }
  let b = n;
  l !== e && (u ? b = function(_, x) {
    return n.call(this, Er(e, _), x, e);
  } : n.length > 2 && (b = function(_, x) {
    return n.call(this, _, x, e);
  }));
  const y = d.call(l, b, r);
  return u && o ? o(y) : y;
}
function Ch(e, t, n, r) {
  const o = ac(e), a = o !== e && !/* @__PURE__ */ or(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, y, _) {
    return u && (u = !1, b = Er(e, b)), n.call(this, b, Er(e, y), _, e);
  }) : n.length > 3 && (l = function(b, y, _) {
    return n.call(this, b, y, _, e);
  }));
  const d = o[t](l, ...r);
  return u ? Er(e, d) : d;
}
function du(e, t, n) {
  const r = /* @__PURE__ */ mt(e);
  Sn(r, "iterate", is);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zf(n[0]) ? (n[0] = /* @__PURE__ */ mt(n[0]), r[t](...n)) : o;
}
function Oa(e, t, n = []) {
  ci(), Bf();
  const r = (/* @__PURE__ */ mt(e))[t].apply(e, n);
  return Uf(), ui(), r;
}
const F_ = /* @__PURE__ */ jf("__proto__,__v_isRef,__isVue"), Fg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rr)
);
function T_(e) {
  Rr(e) || (e = String(e));
  const t = /* @__PURE__ */ mt(this);
  return Sn(t, "has", e), t.hasOwnProperty(e);
}
class Tg {
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
      return r === (o ? a ? K_ : $g : a ? Rg : Lg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Je(t);
    if (!o) {
      let d;
      if (l && (d = E_[n]))
        return d;
      if (n === "hasOwnProperty")
        return T_;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Mn(t) ? t : r
    );
    if ((Rr(n) ? Fg.has(n) : F_(n)) || (o || Sn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ Mn(u)) {
      const d = l && Gf(n) ? u : u.value;
      return o && xt(d) ? /* @__PURE__ */ ef(d) : d;
    }
    return xt(u) ? o ? /* @__PURE__ */ ef(u) : /* @__PURE__ */ ua(u) : u;
  }
}
class Dg extends Tg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Je(t) && Gf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ fi(a);
      if (!/* @__PURE__ */ or(r) && !/* @__PURE__ */ fi(r) && (a = /* @__PURE__ */ mt(a), r = /* @__PURE__ */ mt(r)), !l && /* @__PURE__ */ Mn(a) && !/* @__PURE__ */ Mn(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : gt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Mn(t) ? t : o
    );
    return t === /* @__PURE__ */ mt(o) && (u ? Fr(r, a) && ri(t, "set", n, r) : ri(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = gt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && ri(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Rr(n) || !Fg.has(n)) && Sn(t, "has", n), r;
  }
  ownKeys(t) {
    return Sn(
      t,
      "iterate",
      Je(t) ? "length" : io
    ), Reflect.ownKeys(t);
  }
}
class D_ extends Tg {
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
const L_ = /* @__PURE__ */ new Dg(), R_ = /* @__PURE__ */ new D_(), $_ = /* @__PURE__ */ new Dg(!0);
const Qu = (e) => e, Hs = (e) => Reflect.getPrototypeOf(e);
function V_(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ mt(o), l = Xo(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), y = n ? Qu : t ? ia : wr;
    return !t && Sn(
      a,
      "iterate",
      d ? Zu : io
    ), Nn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: _, done: x } = b.next();
          return x ? { value: _, done: x } : {
            value: u ? [y(_[0]), y(_[1])] : y(_),
            done: x
          };
        }
      }
    );
  };
}
function Gs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function z_(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ mt(a), u = /* @__PURE__ */ mt(o);
      e || (Fr(o, u) && Sn(l, "get", o), Sn(l, "get", u));
      const { has: d } = Hs(l), b = t ? Qu : e ? ia : wr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Sn(/* @__PURE__ */ mt(o), "iterate", io), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ mt(a), u = /* @__PURE__ */ mt(o);
      return e || (Fr(o, u) && Sn(l, "has", o), Sn(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ mt(u), b = t ? Qu : e ? ia : wr;
      return !e && Sn(d, "iterate", io), u.forEach((y, _) => o.call(a, b(y), b(_), l));
    }
  };
  return Nn(
    n,
    e ? {
      add: Gs("add"),
      set: Gs("set"),
      delete: Gs("delete"),
      clear: Gs("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ mt(this), l = Hs(a), u = /* @__PURE__ */ mt(o), d = !t && !/* @__PURE__ */ or(o) && !/* @__PURE__ */ fi(o) ? u : o;
        return l.has.call(a, d) || Fr(o, d) && l.has.call(a, o) || Fr(u, d) && l.has.call(a, u) || (a.add(d), ri(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ or(a) && !/* @__PURE__ */ fi(a) && (a = /* @__PURE__ */ mt(a));
        const l = /* @__PURE__ */ mt(this), { has: u, get: d } = Hs(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ mt(o), b = u.call(l, o));
        const y = d.call(l, o);
        return l.set(o, a), b ? Fr(a, y) && ri(l, "set", o, a) : ri(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ mt(this), { has: l, get: u } = Hs(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ mt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && ri(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ mt(this), a = o.size !== 0, l = o.clear();
        return a && ri(
          o,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = V_(o, e, t);
  }), n;
}
function qf(e, t) {
  const n = z_(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    gt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const j_ = {
  get: /* @__PURE__ */ qf(!1, !1)
}, H_ = {
  get: /* @__PURE__ */ qf(!1, !0)
}, G_ = {
  get: /* @__PURE__ */ qf(!0, !1)
};
const Lg = /* @__PURE__ */ new WeakMap(), Rg = /* @__PURE__ */ new WeakMap(), $g = /* @__PURE__ */ new WeakMap(), K_ = /* @__PURE__ */ new WeakMap();
function W_(e) {
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
function B_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : W_(y_(e));
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  return /* @__PURE__ */ fi(e) ? e : Jf(
    e,
    !1,
    L_,
    j_,
    Lg
  );
}
// @__NO_SIDE_EFFECTS__
function U_(e) {
  return Jf(
    e,
    !1,
    $_,
    H_,
    Rg
  );
}
// @__NO_SIDE_EFFECTS__
function ef(e) {
  return Jf(
    e,
    !0,
    R_,
    G_,
    $g
  );
}
function Jf(e, t, n, r, o) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = B_(e);
  if (a === 0)
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const u = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return /* @__PURE__ */ fi(e) ? /* @__PURE__ */ oo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ mt(t) : e;
}
function Y_(e) {
  return !gt(e, "__v_skip") && Object.isExtensible(e) && wg(e, "__v_skip", !0), e;
}
const wr = (e) => xt(e) ? /* @__PURE__ */ ua(e) : e, ia = (e) => xt(e) ? /* @__PURE__ */ ef(e) : e;
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return X_(e, !1);
}
function X_(e, t) {
  return /* @__PURE__ */ Mn(e) ? e : new q_(e, t);
}
class q_ {
  constructor(t, n) {
    this.dep = new Xf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ mt(t), this._value = n ? t : wr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ or(t) || /* @__PURE__ */ fi(t);
    t = r ? t : /* @__PURE__ */ mt(t), Fr(t, n) && (this._rawValue = t, this._value = r ? t : wr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ Mn(e) ? e.value : e;
}
const J_ = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ Mn(o) && !/* @__PURE__ */ Mn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Vg(e) {
  return /* @__PURE__ */ oo(e) ? e : new Proxy(e, J_);
}
class Z_ {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Nt !== this)
      return Pg(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ig(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Q_(e, t, n = !1) {
  let r, o;
  return et(e) ? r = e : (r = e.get, o = e.set), new Z_(r, o, n);
}
const Ks = {}, Ml = /* @__PURE__ */ new WeakMap();
let Ji;
function ew(e, t = !1, n = Ji) {
  if (n) {
    let r = Ml.get(n);
    r || Ml.set(n, r = []), r.push(e);
  }
}
function tw(e, t, n = St) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ or(V) || o === !1 || o === 0 ? ii(V, 1) : ii(V);
  let y, _, x, N, S = !1, v = !1;
  if (/* @__PURE__ */ Mn(e) ? (_ = () => e.value, S = /* @__PURE__ */ or(e)) : /* @__PURE__ */ oo(e) ? (_ = () => b(e), S = !0) : Je(e) ? (v = !0, S = e.some((V) => /* @__PURE__ */ oo(V) || /* @__PURE__ */ or(V)), _ = () => e.map((V) => {
    if (/* @__PURE__ */ Mn(V))
      return V.value;
    if (/* @__PURE__ */ oo(V))
      return b(V);
    if (et(V))
      return d ? d(V, 2) : V();
  })) : et(e) ? t ? _ = d ? () => d(e, 2) : e : _ = () => {
    if (x) {
      ci();
      try {
        x();
      } finally {
        ui();
      }
    }
    const V = Ji;
    Ji = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      Ji = V;
    }
  } : _ = Dr, t && o) {
    const V = _, O = o === !0 ? 1 / 0 : o;
    _ = () => ii(V(), O);
  }
  const F = A_(), $ = () => {
    y.stop(), F && F.active && Hf(F.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...O) => {
      V(...O), $();
    };
  }
  let W = v ? new Array(e.length).fill(Ks) : Ks;
  const I = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const O = y.run();
        if (o || S || (v ? O.some((z, K) => Fr(z, W[K])) : Fr(O, W))) {
          x && x();
          const z = Ji;
          Ji = y;
          try {
            const K = [
              O,
              // pass undefined as the old value when it's changed for the first time
              W === Ks ? void 0 : v && W[0] === Ks ? [] : W,
              N
            ];
            W = O, d ? d(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            Ji = z;
          }
        }
      } else
        y.run();
  };
  return u && u(I), y = new Mg(_), y.scheduler = l ? () => l(I, !1) : I, N = (V) => ew(V, !1, y), x = y.onStop = () => {
    const V = Ml.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const O of V) O();
      Ml.delete(y);
    }
  }, t ? r ? I(!0) : W = y.run() : l ? l(I.bind(null, !0), !0) : y.run(), $.pause = y.pause.bind(y), $.resume = y.resume.bind(y), $.stop = $, $;
}
function ii(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Mn(e))
    ii(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      ii(e[r], t, n);
  else if (yg(e) || Xo(e))
    e.forEach((r) => {
      ii(r, t, n);
    });
  else if (_g(e)) {
    for (const r in e)
      ii(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ii(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    sc(o, t, n);
  }
}
function $r(e, t, n, r) {
  if (et(e)) {
    const o = gs(e, t, n, r);
    return o && bg(o) && o.catch((a) => {
      sc(a, t, n);
    }), o;
  }
  if (Je(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push($r(e[a], t, n, r));
    return o;
  }
}
function sc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || St;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let _ = 0; _ < y.length; _++)
          if (y[_](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ci(), gs(a, null, 10, [
        e,
        d,
        b
      ]), ui();
      return;
    }
  }
  nw(e, n, o, r, l);
}
function nw(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const In = [];
let Ir = -1;
const qo = [];
let Ai = null, jo = 0;
const zg = /* @__PURE__ */ Promise.resolve();
let Nl = null;
function lc(e) {
  const t = Nl || zg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rw(e) {
  let t = Ir + 1, n = In.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = In[r], a = os(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qf(e) {
  if (!(e.flags & 1)) {
    const t = os(e), n = In[In.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= os(n) ? In.push(e) : In.splice(rw(t), 0, e), e.flags |= 1, jg();
  }
}
function jg() {
  Nl || (Nl = zg.then(Gg));
}
function iw(e) {
  Je(e) ? qo.push(...e) : Ai && e.id === -1 ? Ai.splice(jo + 1, 0, e) : e.flags & 1 || (qo.push(e), e.flags |= 1), jg();
}
function Ih(e, t, n = Ir + 1) {
  for (; n < In.length; n++) {
    const r = In[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      In.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Hg(e) {
  if (qo.length) {
    const t = [...new Set(qo)].sort(
      (n, r) => os(n) - os(r)
    );
    if (qo.length = 0, Ai) {
      Ai.push(...t);
      return;
    }
    for (Ai = t, jo = 0; jo < Ai.length; jo++) {
      const n = Ai[jo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ai = null, jo = 0;
  }
}
const os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gg(e) {
  try {
    for (Ir = 0; Ir < In.length; Ir++) {
      const t = In[Ir];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ir < In.length; Ir++) {
      const t = In[Ir];
      t && (t.flags &= -2);
    }
    Ir = -1, In.length = 0, Hg(), Nl = null, (In.length || qo.length) && Gg();
  }
}
let Un = null, Kg = null;
function Pl(e) {
  const t = Un;
  return Un = e, Kg = e && e.type.__scopeId || null, t;
}
function Wg(e, t = Un, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Hh(-1);
    const a = Pl(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Pl(a), r._d && Hh(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function li(e, t) {
  if (Un === null)
    return e;
  const n = pc(Un), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = St] = t[o];
    a && (et(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ii(l), r.push({
      dir: a,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Ki(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a && (u.oldValue = a[l].value);
    let d = u.dir[r];
    d && (ci(), $r(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), ui());
  }
}
function ow(e, t) {
  if (kn) {
    let n = kn.provides;
    const r = kn.parent && kn.parent.provides;
    r === n && (n = kn.provides = Object.create(r)), n[e] = t;
  }
}
function ll(e, t, n = !1) {
  const r = rx();
  if (r || Jo) {
    let o = Jo ? Jo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && et(t) ? t.call(r && r.proxy) : t;
  }
}
const aw = /* @__PURE__ */ Symbol.for("v-scx"), sw = () => ll(aw);
function ao(e, t, n) {
  return Bg(e, t, n);
}
function Bg(e, t, n = St) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = Nn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (ss) {
    if (a === "sync") {
      const N = sw();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Dr, N.resume = Dr, N.pause = Dr, N;
    }
  }
  const y = kn;
  u.call = (N, S, v) => $r(N, y, S, v);
  let _ = !1;
  a === "post" ? u.scheduler = (N) => {
    Rn(N, y && y.suspense);
  } : a !== "sync" && (_ = !0, u.scheduler = (N, S) => {
    S ? N() : Qf(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), _ && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = tw(e, t, u);
  return ss && (b ? b.push(x) : d && x()), x;
}
function lw(e, t, n) {
  const r = this.proxy, o = qt(e) ? e.includes(".") ? Ug(r, e) : () => r[e] : e.bind(r, r);
  let a;
  et(t) ? a = t : (a = t.handler, n = t);
  const l = bs(this), u = Bg(o, a.bind(r), n);
  return l(), u;
}
function Ug(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const cw = /* @__PURE__ */ Symbol("_vte"), uw = (e) => e.__isTeleport, fw = /* @__PURE__ */ Symbol("_leaveCb");
function ed(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ed(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Yg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Eh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Al = /* @__PURE__ */ new WeakMap();
function Ja(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (v, F) => Ja(
        v,
        t && (Je(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Za(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ja(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? pc(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === St ? u.refs = {} : u.refs, _ = u.setupState, x = /* @__PURE__ */ mt(_), N = _ === St ? gg : (v) => Eh(y, v) ? !1 : gt(x, v), S = (v, F) => !(F && Eh(y, F));
  if (b != null && b !== d) {
    if (Oh(t), qt(b))
      y[b] = null, N(b) && (_[b] = null);
    else if (/* @__PURE__ */ Mn(b)) {
      const v = t;
      S(b, v.k) && (b.value = null), v.k && (y[v.k] = null);
    }
  }
  if (et(d))
    gs(d, u, 12, [l, y]);
  else {
    const v = qt(d), F = /* @__PURE__ */ Mn(d);
    if (v || F) {
      const $ = () => {
        if (e.f) {
          const W = v ? N(d) ? _[d] : y[d] : S() || !e.k ? d.value : y[e.k];
          if (o)
            Je(W) && Hf(W, a);
          else if (Je(W))
            W.includes(a) || W.push(a);
          else if (v)
            y[d] = [a], N(d) && (_[d] = y[d]);
          else {
            const I = [a];
            S(d, e.k) && (d.value = I), e.k && (y[e.k] = I);
          }
        } else v ? (y[d] = l, N(d) && (_[d] = l)) : F && (S(d, e.k) && (d.value = l), e.k && (y[e.k] = l));
      };
      if (l) {
        const W = () => {
          $(), Al.delete(e);
        };
        W.id = -1, Al.set(e, W), Rn(W, n);
      } else
        Oh(e), $();
    }
  }
}
function Oh(e) {
  const t = Al.get(e);
  t && (t.flags |= 8, Al.delete(e));
}
oc().requestIdleCallback;
oc().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, Xg = (e) => e.type.__isKeepAlive;
function dw(e, t) {
  qg(e, "a", t);
}
function pw(e, t) {
  qg(e, "da", t);
}
function qg(e, t, n = kn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (cc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xg(o.parent.vnode) && hw(r, t, n, o), o = o.parent;
  }
}
function hw(e, t, n, r) {
  const o = cc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Jg(() => {
    Hf(r[t], o);
  }, n);
}
function cc(e, t, n = kn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      ci();
      const u = bs(n), d = $r(t, n, e, l);
      return u(), ui(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const pi = (e) => (t, n = kn) => {
  (!ss || e === "sp") && cc(e, (...r) => t(...r), n);
}, mw = pi("bm"), uc = pi("m"), gw = pi(
  "bu"
), yw = pi("u"), ys = pi(
  "bum"
), Jg = pi("um"), bw = pi(
  "sp"
), vw = pi("rtg"), _w = pi("rtc");
function ww(e, t = kn) {
  cc("ec", e, t);
}
const xw = "components", Zg = /* @__PURE__ */ Symbol.for("v-ndc");
function Sw(e) {
  return qt(e) ? kw(xw, e, !1) || e : e || Zg;
}
function kw(e, t, n = !0, r = !1) {
  const o = Un || kn;
  if (o) {
    const a = o.type;
    {
      const u = lx(
        a,
        !1
      );
      if (u && (u === t || u === En(t) || u === ic(En(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fh(o[e] || a[e], t) || // global registration
      Fh(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function Fh(e, t) {
  return e && (e[t] || e[En(t)] || e[ic(En(t))]);
}
function bt(e, t, n, r) {
  let o;
  const a = n, l = Je(e);
  if (l || qt(e)) {
    const u = l && /* @__PURE__ */ oo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ or(e), b = /* @__PURE__ */ fi(e), e = ac(e)), o = new Array(e.length);
    for (let y = 0, _ = e.length; y < _; y++)
      o[y] = t(
        d ? b ? ia(wr(e[y])) : wr(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (xt(e))
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
const tf = (e) => e ? v0(e) ? pc(e) : tf(e.parent) : null, Qa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Nn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => tf(e.parent),
    $root: (e) => tf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e0(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lc.bind(e.proxy)),
    $watch: (e) => lw.bind(e)
  })
), pu = (e, t) => e !== St && !e.__isScriptSetup && gt(e, t), Mw = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: l, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const x = l[t];
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
        if (pu(r, t))
          return l[t] = 1, r[t];
        if (o !== St && gt(o, t))
          return l[t] = 2, o[t];
        if (gt(a, t))
          return l[t] = 3, a[t];
        if (n !== St && gt(n, t))
          return l[t] = 4, n[t];
        nf && (l[t] = 0);
      }
    }
    const b = Qa[t];
    let y, _;
    if (b)
      return t === "$attrs" && Sn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== St && gt(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      _ = d.config.globalProperties, gt(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return pu(o, t) ? (o[t] = n, !0) : r !== St && gt(r, t) ? (r[t] = n, !0) : gt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== St && u[0] !== "$" && gt(e, u) || pu(t, u) || gt(a, u) || gt(r, u) || gt(Qa, u) || gt(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : gt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Th(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nf = !0;
function Nw(e) {
  const t = e0(e), n = e.proxy, r = e.ctx;
  nf = !1, t.beforeCreate && Dh(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: l,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: y,
    beforeMount: _,
    mounted: x,
    beforeUpdate: N,
    updated: S,
    activated: v,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: W,
    destroyed: I,
    unmounted: V,
    render: O,
    renderTracked: z,
    renderTriggered: K,
    errorCaptured: J,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: C,
    // assets
    components: ue,
    directives: de,
    filters: pe
  } = t;
  if (b && Pw(b, r, null), l)
    for (const H in l) {
      const A = l[H];
      et(A) && (r[H] = A.bind(n));
    }
  if (o) {
    const H = o.call(n, n);
    xt(H) && (e.data = /* @__PURE__ */ ua(H));
  }
  if (nf = !0, a)
    for (const H in a) {
      const A = a[H], ee = et(A) ? A.bind(n, n) : et(A.get) ? A.get.bind(n, n) : Dr, Y = !et(A) && et(A.set) ? A.set.bind(n) : Dr, Ie = dt({
        get: ee,
        set: Y
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Oe) => Ie.value = Oe
      });
    }
  if (u)
    for (const H in u)
      Qg(u[H], r, n, H);
  if (d) {
    const H = et(d) ? d.call(n) : d;
    Reflect.ownKeys(H).forEach((A) => {
      ow(A, H[A]);
    });
  }
  y && Dh(y, e, "c");
  function X(H, A) {
    Je(A) ? A.forEach((ee) => H(ee.bind(n))) : A && H(A.bind(n));
  }
  if (X(mw, _), X(uc, x), X(gw, N), X(yw, S), X(dw, v), X(pw, F), X(ww, J), X(_w, z), X(vw, K), X(ys, W), X(Jg, V), X(bw, _e), Je(T))
    if (T.length) {
      const H = e.exposed || (e.exposed = {});
      T.forEach((A) => {
        Object.defineProperty(H, A, {
          get: () => n[A],
          set: (ee) => n[A] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Dr && (e.render = O), C != null && (e.inheritAttrs = C), ue && (e.components = ue), de && (e.directives = de), _e && Yg(e);
}
function Pw(e, t, n = Dr) {
  Je(e) && (e = rf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    xt(o) ? "default" in o ? a = ll(
      o.from || r,
      o.default,
      !0
    ) : a = ll(o.from || r) : a = ll(o), /* @__PURE__ */ Mn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function Dh(e, t, n) {
  $r(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qg(e, t, n, r) {
  let o = r.includes(".") ? Ug(n, r) : () => n[r];
  if (qt(e)) {
    const a = t[e];
    et(a) && ao(o, a);
  } else if (et(e))
    ao(o, e.bind(n));
  else if (xt(e))
    if (Je(e))
      e.forEach((a) => Qg(a, t, n, r));
    else {
      const a = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(a) && ao(o, a, e);
    }
}
function e0(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => Cl(d, b, l, !0)
  ), Cl(d, t, l)), xt(t) && a.set(t, d), d;
}
function Cl(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && Cl(e, a, n, !0), o && o.forEach(
    (l) => Cl(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const u = Aw[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const Aw = {
  data: Lh,
  props: Rh,
  emits: Rh,
  // objects
  methods: ja,
  computed: ja,
  // lifecycle
  beforeCreate: Cn,
  created: Cn,
  beforeMount: Cn,
  mounted: Cn,
  beforeUpdate: Cn,
  updated: Cn,
  beforeDestroy: Cn,
  beforeUnmount: Cn,
  destroyed: Cn,
  unmounted: Cn,
  activated: Cn,
  deactivated: Cn,
  errorCaptured: Cn,
  serverPrefetch: Cn,
  // assets
  components: ja,
  directives: ja,
  // watch
  watch: Iw,
  // provide / inject
  provide: Lh,
  inject: Cw
};
function Lh(e, t) {
  return t ? e ? function() {
    return Nn(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Cw(e, t) {
  return ja(rf(e), rf(t));
}
function rf(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Cn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ja(e, t) {
  return e ? Nn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rh(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Nn(
    /* @__PURE__ */ Object.create(null),
    Th(e),
    Th(t ?? {})
  ) : t;
}
function Iw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Nn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Cn(e[r], t[r]);
  return n;
}
function t0() {
  return {
    app: null,
    config: {
      isNativeTag: gg,
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
let Ew = 0;
function Ow(e, t) {
  return function(r, o = null) {
    et(r) || (r = Nn({}, r)), o != null && !xt(o) && (o = null);
    const a = t0(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Ew++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: ux,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ..._) {
        return l.has(y) || (y && et(y.install) ? (l.add(y), y.install(b, ..._)) : et(y) && (l.add(y), y(b, ..._))), b;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), b;
      },
      component(y, _) {
        return _ ? (a.components[y] = _, b) : a.components[y];
      },
      directive(y, _) {
        return _ ? (a.directives[y] = _, b) : a.directives[y];
      },
      mount(y, _, x) {
        if (!d) {
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, pc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && ($r(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, _) {
        return a.provides[y] = _, b;
      },
      runWithContext(y) {
        const _ = Jo;
        Jo = b;
        try {
          return y();
        } finally {
          Jo = _;
        }
      }
    };
    return b;
  };
}
let Jo = null;
const Fw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${En(t)}Modifiers`] || e[`${go(t)}Modifiers`];
function Tw(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || St;
  let o = n;
  const a = t.startsWith("update:"), l = a && Fw(r, t.slice(7));
  l && (l.trim && (o = n.map((y) => qt(y) ? y.trim() : y)), l.number && (o = n.map(Kf)));
  let u, d = r[u = lu(t)] || // also try camelCase event handler (#2249)
  r[u = lu(En(t))];
  !d && a && (d = r[u = lu(go(t))]), d && $r(
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
    e.emitted[u] = !0, $r(
      b,
      e,
      6,
      o
    );
  }
}
const Dw = /* @__PURE__ */ new WeakMap();
function n0(e, t, n = !1) {
  const r = n ? Dw : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!et(e)) {
    const d = (b) => {
      const y = n0(b, t, !0);
      y && (u = !0, Nn(l, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (xt(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => l[d] = null) : Nn(l, a), xt(e) && r.set(e, l), l);
}
function fc(e, t) {
  return !e || !tc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), gt(e, t[0].toLowerCase() + t.slice(1)) || gt(e, go(t)) || gt(e, t));
}
function $h(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: l,
    attrs: u,
    emit: d,
    render: b,
    renderCache: y,
    props: _,
    data: x,
    setupState: N,
    ctx: S,
    inheritAttrs: v
  } = e, F = Pl(e);
  let $, W;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, O = V;
      $ = Or(
        b.call(
          O,
          V,
          y,
          _,
          N,
          x,
          S
        )
      ), W = u;
    } else {
      const V = t;
      $ = Or(
        V.length > 1 ? V(
          _,
          { attrs: u, slots: l, emit: d }
        ) : V(
          _,
          null
        )
      ), W = t.props ? u : Lw(u);
    }
  } catch (V) {
    es.length = 0, sc(V, e, 1), $ = De(Ei);
  }
  let I = $;
  if (W && v !== !1) {
    const V = Object.keys(W), { shapeFlag: O } = I;
    V.length && O & 7 && (a && V.some(nc) && (W = Rw(
      W,
      a
    )), I = oa(I, W, !1, !0));
  }
  return n.dirs && (I = oa(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ed(I, n.transition), $ = I, Pl(F), $;
}
const Lw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || tc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rw = (e, t) => {
  const n = {};
  for (const r in e)
    (!nc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function $w(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Vh(r, l, b) : !!l;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let _ = 0; _ < y.length; _++) {
        const x = y[_];
        if (r0(l, r, x) && !fc(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? Vh(r, l, b) : !0 : !!l;
  return !1;
}
function Vh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (r0(t, e, a) && !fc(n, a))
      return !0;
  }
  return !1;
}
function r0(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && xt(r) && xt(o) ? !Wf(r, o) : r !== o;
}
function Vw({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const i0 = {}, o0 = () => Object.create(i0), a0 = (e) => Object.getPrototypeOf(e) === i0;
function zw(e, t, n, r = !1) {
  const o = {}, a = o0();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), s0(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ U_(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function jw(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: l }
  } = e, u = /* @__PURE__ */ mt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const y = e.vnode.dynamicProps;
      for (let _ = 0; _ < y.length; _++) {
        let x = y[_];
        if (fc(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (gt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const S = En(x);
            o[S] = of(
              d,
              u,
              S,
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
    s0(e, t, o, a) && (b = !0);
    let y;
    for (const _ in u)
      (!t || // for camelCase
      !gt(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = go(_)) === _ || !gt(t, y))) && (d ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[_] = of(
        d,
        u,
        _,
        void 0,
        e,
        !0
      )) : delete o[_]);
    if (a !== u)
      for (const _ in a)
        (!t || !gt(t, _)) && (delete a[_], b = !0);
  }
  b && ri(e.attrs, "set", "");
}
function s0(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let d in t) {
      if (Ya(d))
        continue;
      const b = t[d];
      let y;
      o && gt(o, y = En(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : fc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, l = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ mt(n), b = u || St;
    for (let y = 0; y < a.length; y++) {
      const _ = a[y];
      n[_] = of(
        o,
        d,
        _,
        b[_],
        e,
        !gt(b, _)
      );
    }
  }
  return l;
}
function of(e, t, n, r, o, a) {
  const l = e[n];
  if (l != null) {
    const u = gt(l, "default");
    if (u && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && et(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = bs(o);
          r = b[n] = d.call(
            null,
            t
          ), y();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    l[
      0
      /* shouldCast */
    ] && (a && !u ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === go(n)) && (r = !0));
  }
  return r;
}
const Hw = /* @__PURE__ */ new WeakMap();
function l0(e, t, n = !1) {
  const r = n ? Hw : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const y = (_) => {
      d = !0;
      const [x, N] = l0(_, t, !0);
      Nn(l, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return xt(e) && r.set(e, Yo), Yo;
  if (Je(a))
    for (let y = 0; y < a.length; y++) {
      const _ = En(a[y]);
      zh(_) && (l[_] = St);
    }
  else if (a)
    for (const y in a) {
      const _ = En(y);
      if (zh(_)) {
        const x = a[y], N = l[_] = Je(x) || et(x) ? { type: x } : Nn({}, x), S = N.type;
        let v = !1, F = !0;
        if (Je(S))
          for (let $ = 0; $ < S.length; ++$) {
            const W = S[$], I = et(W) && W.name;
            if (I === "Boolean") {
              v = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          v = et(S) && S.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = v, N[
          1
          /* shouldCastTrue */
        ] = F, (v || gt(N, "default")) && u.push(_);
      }
    }
  const b = [l, u];
  return xt(e) && r.set(e, b), b;
}
function zh(e) {
  return e[0] !== "$" && !Ya(e);
}
const td = (e) => e === "_" || e === "_ctx" || e === "$stable", nd = (e) => Je(e) ? e.map(Or) : [Or(e)], Gw = (e, t, n) => {
  if (t._n)
    return t;
  const r = Wg((...o) => nd(t(...o)), n);
  return r._c = !1, r;
}, c0 = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (td(o)) continue;
    const a = e[o];
    if (et(a))
      t[o] = Gw(o, a, r);
    else if (a != null) {
      const l = nd(a);
      t[o] = () => l;
    }
  }
}, u0 = (e, t) => {
  const n = nd(t);
  e.slots.default = () => n;
}, f0 = (e, t, n) => {
  for (const r in t)
    (n || !td(r)) && (e[r] = t[r]);
}, Kw = (e, t, n) => {
  const r = e.slots = o0();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (f0(r, t, n), n && wg(r, "_", o, !0)) : c0(t, r);
  } else t && u0(e, t);
}, Ww = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = St;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : f0(o, t, n) : (a = !t.$stable, c0(t, o)), l = t;
  } else t && (u0(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !td(u) && l[u] == null && delete o[u];
}, Rn = qw;
function Bw(e) {
  return Uw(e);
}
function Uw(e, t) {
  const n = oc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: l,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: y,
    parentNode: _,
    nextSibling: x,
    setScopeId: N = Dr,
    insertStaticContent: S
  } = e, v = (R, G, re, se = null, me = null, ve = null, Se = void 0, Ne = null, xe = !!G.dynamicChildren) => {
    if (R === G)
      return;
    R && !Fa(R, G) && (se = qn(R), Oe(R, me, ve, !0), R = null), G.patchFlag === -2 && (xe = !1, G.dynamicChildren = null);
    const { type: fe, ref: je, shapeFlag: Ce } = G;
    switch (fe) {
      case dc:
        F(R, G, re, se);
        break;
      case Ei:
        $(R, G, re, se);
        break;
      case mu:
        R == null && W(G, re, se, Se);
        break;
      case Ue:
        ue(
          R,
          G,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe
        );
        break;
      default:
        Ce & 1 ? O(
          R,
          G,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe
        ) : Ce & 6 ? de(
          R,
          G,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe
        ) : (Ce & 64 || Ce & 128) && fe.process(
          R,
          G,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe,
          mn
        );
    }
    je != null && me ? Ja(je, R && R.ref, ve, G || R, !G) : je == null && R && R.ref != null && Ja(R.ref, null, ve, R, !0);
  }, F = (R, G, re, se) => {
    if (R == null)
      r(
        G.el = u(G.children),
        re,
        se
      );
    else {
      const me = G.el = R.el;
      G.children !== R.children && b(me, G.children);
    }
  }, $ = (R, G, re, se) => {
    R == null ? r(
      G.el = d(G.children || ""),
      re,
      se
    ) : G.el = R.el;
  }, W = (R, G, re, se) => {
    [R.el, R.anchor] = S(
      R.children,
      G,
      re,
      se,
      R.el,
      R.anchor
    );
  }, I = ({ el: R, anchor: G }, re, se) => {
    let me;
    for (; R && R !== G; )
      me = x(R), r(R, re, se), R = me;
    r(G, re, se);
  }, V = ({ el: R, anchor: G }) => {
    let re;
    for (; R && R !== G; )
      re = x(R), o(R), R = re;
    o(G);
  }, O = (R, G, re, se, me, ve, Se, Ne, xe) => {
    if (G.type === "svg" ? Se = "svg" : G.type === "math" && (Se = "mathml"), R == null)
      z(
        G,
        re,
        se,
        me,
        ve,
        Se,
        Ne,
        xe
      );
    else {
      const fe = R.el && R.el._isVueCE ? R.el : null;
      try {
        fe && fe._beginPatch(), _e(
          R,
          G,
          me,
          ve,
          Se,
          Ne,
          xe
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, z = (R, G, re, se, me, ve, Se, Ne) => {
    let xe, fe;
    const { props: je, shapeFlag: Ce, transition: Ve, dirs: Ke } = R;
    if (xe = R.el = l(
      R.type,
      ve,
      je && je.is,
      je
    ), Ce & 8 ? y(xe, R.children) : Ce & 16 && J(
      R.children,
      xe,
      null,
      se,
      me,
      hu(R, ve),
      Se,
      Ne
    ), Ke && Ki(R, null, se, "created"), K(xe, R, R.scopeId, Se, se), je) {
      for (const h in je)
        h !== "value" && !Ya(h) && a(xe, h, null, je[h], ve, se);
      "value" in je && a(xe, "value", null, je.value, ve), (fe = je.onVnodeBeforeMount) && Nr(fe, se, R);
    }
    Ke && Ki(R, null, se, "beforeMount");
    const st = Yw(me, Ve);
    st && Ve.beforeEnter(xe), r(xe, G, re), ((fe = je && je.onVnodeMounted) || st || Ke) && Rn(() => {
      try {
        fe && Nr(fe, se, R), st && Ve.enter(xe), Ke && Ki(R, null, se, "mounted");
      } finally {
      }
    }, me);
  }, K = (R, G, re, se, me) => {
    if (re && N(R, re), se)
      for (let ve = 0; ve < se.length; ve++)
        N(R, se[ve]);
    if (me) {
      let ve = me.subTree;
      if (G === ve || m0(ve.type) && (ve.ssContent === G || ve.ssFallback === G)) {
        const Se = me.vnode;
        K(
          R,
          Se,
          Se.scopeId,
          Se.slotScopeIds,
          me.parent
        );
      }
    }
  }, J = (R, G, re, se, me, ve, Se, Ne, xe = 0) => {
    for (let fe = xe; fe < R.length; fe++) {
      const je = R[fe] = Ne ? ti(R[fe]) : Or(R[fe]);
      v(
        null,
        je,
        G,
        re,
        se,
        me,
        ve,
        Se,
        Ne
      );
    }
  }, _e = (R, G, re, se, me, ve, Se) => {
    const Ne = G.el = R.el;
    let { patchFlag: xe, dynamicChildren: fe, dirs: je } = G;
    xe |= R.patchFlag & 16;
    const Ce = R.props || St, Ve = G.props || St;
    let Ke;
    if (re && Wi(re, !1), (Ke = Ve.onVnodeBeforeUpdate) && Nr(Ke, re, G, R), je && Ki(G, R, re, "beforeUpdate"), re && Wi(re, !0), (Ce.innerHTML && Ve.innerHTML == null || Ce.textContent && Ve.textContent == null) && y(Ne, ""), fe ? T(
      R.dynamicChildren,
      fe,
      Ne,
      re,
      se,
      hu(G, me),
      ve
    ) : Se || A(
      R,
      G,
      Ne,
      null,
      re,
      se,
      hu(G, me),
      ve,
      !1
    ), xe > 0) {
      if (xe & 16)
        C(Ne, Ce, Ve, re, me);
      else if (xe & 2 && Ce.class !== Ve.class && a(Ne, "class", null, Ve.class, me), xe & 4 && a(Ne, "style", Ce.style, Ve.style, me), xe & 8) {
        const st = G.dynamicProps;
        for (let h = 0; h < st.length; h++) {
          const Le = st[h], nt = Ce[Le], ft = Ve[Le];
          (ft !== nt || Le === "value") && a(Ne, Le, nt, ft, me, re);
        }
      }
      xe & 1 && R.children !== G.children && y(Ne, G.children);
    } else !Se && fe == null && C(Ne, Ce, Ve, re, me);
    ((Ke = Ve.onVnodeUpdated) || je) && Rn(() => {
      Ke && Nr(Ke, re, G, R), je && Ki(G, R, re, "updated");
    }, se);
  }, T = (R, G, re, se, me, ve, Se) => {
    for (let Ne = 0; Ne < G.length; Ne++) {
      const xe = R[Ne], fe = G[Ne], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Fa(xe, fe) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? _(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      v(
        xe,
        fe,
        je,
        null,
        se,
        me,
        ve,
        Se,
        !0
      );
    }
  }, C = (R, G, re, se, me) => {
    if (G !== re) {
      if (G !== St)
        for (const ve in G)
          !Ya(ve) && !(ve in re) && a(
            R,
            ve,
            G[ve],
            null,
            me,
            se
          );
      for (const ve in re) {
        if (Ya(ve)) continue;
        const Se = re[ve], Ne = G[ve];
        Se !== Ne && ve !== "value" && a(R, ve, Ne, Se, me, se);
      }
      "value" in re && a(R, "value", G.value, re.value, me);
    }
  }, ue = (R, G, re, se, me, ve, Se, Ne, xe) => {
    const fe = G.el = R ? R.el : u(""), je = G.anchor = R ? R.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: Ve, slotScopeIds: Ke } = G;
    Ke && (Ne = Ne ? Ne.concat(Ke) : Ke), R == null ? (r(fe, re, se), r(je, re, se), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      G.children || [],
      re,
      je,
      me,
      ve,
      Se,
      Ne,
      xe
    )) : Ce > 0 && Ce & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ve.length ? (T(
      R.dynamicChildren,
      Ve,
      re,
      me,
      ve,
      Se,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (G.key != null || me && G === me.subTree) && d0(
      R,
      G,
      !0
      /* shallow */
    )) : A(
      R,
      G,
      re,
      je,
      me,
      ve,
      Se,
      Ne,
      xe
    );
  }, de = (R, G, re, se, me, ve, Se, Ne, xe) => {
    G.slotScopeIds = Ne, R == null ? G.shapeFlag & 512 ? me.ctx.activate(
      G,
      re,
      se,
      Se,
      xe
    ) : pe(
      G,
      re,
      se,
      me,
      ve,
      Se,
      xe
    ) : U(R, G, xe);
  }, pe = (R, G, re, se, me, ve, Se) => {
    const Ne = R.component = nx(
      R,
      se,
      me
    );
    if (Xg(R) && (Ne.ctx.renderer = mn), ix(Ne, !1, Se), Ne.asyncDep) {
      if (me && me.registerDep(Ne, X, Se), !R.el) {
        const xe = Ne.subTree = De(Ei);
        $(null, xe, G, re), R.placeholder = xe.el;
      }
    } else
      X(
        Ne,
        R,
        G,
        re,
        me,
        ve,
        Se
      );
  }, U = (R, G, re) => {
    const se = G.component = R.component;
    if ($w(R, G, re))
      if (se.asyncDep && !se.asyncResolved) {
        H(se, G, re);
        return;
      } else
        se.next = G, se.update();
    else
      G.el = R.el, se.vnode = G;
  }, X = (R, G, re, se, me, ve, Se) => {
    const Ne = () => {
      if (R.isMounted) {
        let { next: Ce, bu: Ve, u: Ke, parent: st, vnode: h } = R;
        {
          const un = p0(R);
          if (un) {
            Ce && (Ce.el = h.el, H(R, Ce, Se)), un.asyncDep.then(() => {
              Rn(() => {
                R.isUnmounted || fe();
              }, me);
            });
            return;
          }
        }
        let Le = Ce, nt;
        Wi(R, !1), Ce ? (Ce.el = h.el, H(R, Ce, Se)) : Ce = h, Ve && sl(Ve), (nt = Ce.props && Ce.props.onVnodeBeforeUpdate) && Nr(nt, st, Ce, h), Wi(R, !0);
        const ft = $h(R), gn = R.subTree;
        R.subTree = ft, v(
          gn,
          ft,
          // parent may have changed if it's in a teleport
          _(gn.el),
          // anchor may have changed if it's in a fragment
          qn(gn),
          R,
          me,
          ve
        ), Ce.el = ft.el, Le === null && Vw(R, ft.el), Ke && Rn(Ke, me), (nt = Ce.props && Ce.props.onVnodeUpdated) && Rn(
          () => Nr(nt, st, Ce, h),
          me
        );
      } else {
        let Ce;
        const { el: Ve, props: Ke } = G, { bm: st, m: h, parent: Le, root: nt, type: ft } = R, gn = Za(G);
        Wi(R, !1), st && sl(st), !gn && (Ce = Ke && Ke.onVnodeBeforeMount) && Nr(Ce, Le, G), Wi(R, !0);
        {
          nt.ce && nt.ce._hasShadowRoot() && nt.ce._injectChildStyle(
            ft,
            R.parent ? R.parent.type : void 0
          );
          const un = R.subTree = $h(R);
          v(
            null,
            un,
            re,
            se,
            R,
            me,
            ve
          ), G.el = un.el;
        }
        if (h && Rn(h, me), !gn && (Ce = Ke && Ke.onVnodeMounted)) {
          const un = G;
          Rn(
            () => Nr(Ce, Le, un),
            me
          );
        }
        (G.shapeFlag & 256 || Le && Za(Le.vnode) && Le.vnode.shapeFlag & 256) && R.a && Rn(R.a, me), R.isMounted = !0, G = re = se = null;
      }
    };
    R.scope.on();
    const xe = R.effect = new Mg(Ne);
    R.scope.off();
    const fe = R.update = xe.run.bind(xe), je = R.job = xe.runIfDirty.bind(xe);
    je.i = R, je.id = R.uid, xe.scheduler = () => Qf(je), Wi(R, !0), fe();
  }, H = (R, G, re) => {
    G.component = R;
    const se = R.vnode.props;
    R.vnode = G, R.next = null, jw(R, G.props, se, re), Ww(R, G.children, re), ci(), Ih(R), ui();
  }, A = (R, G, re, se, me, ve, Se, Ne, xe = !1) => {
    const fe = R && R.children, je = R ? R.shapeFlag : 0, Ce = G.children, { patchFlag: Ve, shapeFlag: Ke } = G;
    if (Ve > 0) {
      if (Ve & 128) {
        Y(
          fe,
          Ce,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe
        );
        return;
      } else if (Ve & 256) {
        ee(
          fe,
          Ce,
          re,
          se,
          me,
          ve,
          Se,
          Ne,
          xe
        );
        return;
      }
    }
    Ke & 8 ? (je & 16 && at(fe, me, ve), Ce !== fe && y(re, Ce)) : je & 16 ? Ke & 16 ? Y(
      fe,
      Ce,
      re,
      se,
      me,
      ve,
      Se,
      Ne,
      xe
    ) : at(fe, me, ve, !0) : (je & 8 && y(re, ""), Ke & 16 && J(
      Ce,
      re,
      se,
      me,
      ve,
      Se,
      Ne,
      xe
    ));
  }, ee = (R, G, re, se, me, ve, Se, Ne, xe) => {
    R = R || Yo, G = G || Yo;
    const fe = R.length, je = G.length, Ce = Math.min(fe, je);
    let Ve;
    for (Ve = 0; Ve < Ce; Ve++) {
      const Ke = G[Ve] = xe ? ti(G[Ve]) : Or(G[Ve]);
      v(
        R[Ve],
        Ke,
        re,
        null,
        me,
        ve,
        Se,
        Ne,
        xe
      );
    }
    fe > je ? at(
      R,
      me,
      ve,
      !0,
      !1,
      Ce
    ) : J(
      G,
      re,
      se,
      me,
      ve,
      Se,
      Ne,
      xe,
      Ce
    );
  }, Y = (R, G, re, se, me, ve, Se, Ne, xe) => {
    let fe = 0;
    const je = G.length;
    let Ce = R.length - 1, Ve = je - 1;
    for (; fe <= Ce && fe <= Ve; ) {
      const Ke = R[fe], st = G[fe] = xe ? ti(G[fe]) : Or(G[fe]);
      if (Fa(Ke, st))
        v(
          Ke,
          st,
          re,
          null,
          me,
          ve,
          Se,
          Ne,
          xe
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ce && fe <= Ve; ) {
      const Ke = R[Ce], st = G[Ve] = xe ? ti(G[Ve]) : Or(G[Ve]);
      if (Fa(Ke, st))
        v(
          Ke,
          st,
          re,
          null,
          me,
          ve,
          Se,
          Ne,
          xe
        );
      else
        break;
      Ce--, Ve--;
    }
    if (fe > Ce) {
      if (fe <= Ve) {
        const Ke = Ve + 1, st = Ke < je ? G[Ke].el : se;
        for (; fe <= Ve; )
          v(
            null,
            G[fe] = xe ? ti(G[fe]) : Or(G[fe]),
            re,
            st,
            me,
            ve,
            Se,
            Ne,
            xe
          ), fe++;
      }
    } else if (fe > Ve)
      for (; fe <= Ce; )
        Oe(R[fe], me, ve, !0), fe++;
    else {
      const Ke = fe, st = fe, h = /* @__PURE__ */ new Map();
      for (fe = st; fe <= Ve; fe++) {
        const Et = G[fe] = xe ? ti(G[fe]) : Or(G[fe]);
        Et.key != null && h.set(Et.key, fe);
      }
      let Le, nt = 0;
      const ft = Ve - st + 1;
      let gn = !1, un = 0;
      const Jn = new Array(ft);
      for (fe = 0; fe < ft; fe++) Jn[fe] = 0;
      for (fe = Ke; fe <= Ce; fe++) {
        const Et = R[fe];
        if (nt >= ft) {
          Oe(Et, me, ve, !0);
          continue;
        }
        let Pe;
        if (Et.key != null)
          Pe = h.get(Et.key);
        else
          for (Le = st; Le <= Ve; Le++)
            if (Jn[Le - st] === 0 && Fa(Et, G[Le])) {
              Pe = Le;
              break;
            }
        Pe === void 0 ? Oe(Et, me, ve, !0) : (Jn[Pe - st] = fe + 1, Pe >= un ? un = Pe : gn = !0, v(
          Et,
          G[Pe],
          re,
          null,
          me,
          ve,
          Se,
          Ne,
          xe
        ), nt++);
      }
      const Jt = gn ? Xw(Jn) : Yo;
      for (Le = Jt.length - 1, fe = ft - 1; fe >= 0; fe--) {
        const Et = st + fe, Pe = G[Et], tn = G[Et + 1], jr = Et + 1 < je ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          tn.el || h0(tn)
        ) : se;
        Jn[fe] === 0 ? v(
          null,
          Pe,
          re,
          jr,
          me,
          ve,
          Se,
          Ne,
          xe
        ) : gn && (Le < 0 || fe !== Jt[Le] ? Ie(Pe, re, jr, 2) : Le--);
      }
    }
  }, Ie = (R, G, re, se, me = null) => {
    const { el: ve, type: Se, transition: Ne, children: xe, shapeFlag: fe } = R;
    if (fe & 6) {
      Ie(R.component.subTree, G, re, se);
      return;
    }
    if (fe & 128) {
      R.suspense.move(G, re, se);
      return;
    }
    if (fe & 64) {
      Se.move(R, G, re, mn);
      return;
    }
    if (Se === Ue) {
      r(ve, G, re);
      for (let Ce = 0; Ce < xe.length; Ce++)
        Ie(xe[Ce], G, re, se);
      r(R.anchor, G, re);
      return;
    }
    if (Se === mu) {
      I(R, G, re);
      return;
    }
    if (se !== 2 && fe & 1 && Ne)
      if (se === 0)
        Ne.beforeEnter(ve), r(ve, G, re), Rn(() => Ne.enter(ve), me);
      else {
        const { leave: Ce, delayLeave: Ve, afterLeave: Ke } = Ne, st = () => {
          R.ctx.isUnmounted ? o(ve) : r(ve, G, re);
        }, h = () => {
          ve._isLeaving && ve[fw](
            !0
            /* cancelled */
          ), Ce(ve, () => {
            st(), Ke && Ke();
          });
        };
        Ve ? Ve(ve, st, h) : h();
      }
    else
      r(ve, G, re);
  }, Oe = (R, G, re, se = !1, me = !1) => {
    const {
      type: ve,
      props: Se,
      ref: Ne,
      children: xe,
      dynamicChildren: fe,
      shapeFlag: je,
      patchFlag: Ce,
      dirs: Ve,
      cacheIndex: Ke,
      memo: st
    } = R;
    if (Ce === -2 && (me = !1), Ne != null && (ci(), Ja(Ne, null, re, R, !0), ui()), Ke != null && (G.renderCache[Ke] = void 0), je & 256) {
      G.ctx.deactivate(R);
      return;
    }
    const h = je & 1 && Ve, Le = !Za(R);
    let nt;
    if (Le && (nt = Se && Se.onVnodeBeforeUnmount) && Nr(nt, G, R), je & 6)
      cn(R.component, re, se);
    else {
      if (je & 128) {
        R.suspense.unmount(re, se);
        return;
      }
      h && Ki(R, null, G, "beforeUnmount"), je & 64 ? R.type.remove(
        R,
        G,
        re,
        mn,
        se
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== Ue || Ce > 0 && Ce & 64) ? at(
        fe,
        G,
        re,
        !1,
        !0
      ) : (ve === Ue && Ce & 384 || !me && je & 16) && at(xe, G, re), se && kt(R);
    }
    const ft = st != null && Ke == null;
    (Le && (nt = Se && Se.onVnodeUnmounted) || h || ft) && Rn(() => {
      nt && Nr(nt, G, R), h && Ki(R, null, G, "unmounted"), ft && (R.el = null);
    }, re);
  }, kt = (R) => {
    const { type: G, el: re, anchor: se, transition: me } = R;
    if (G === Ue) {
      yt(re, se);
      return;
    }
    if (G === mu) {
      V(R);
      return;
    }
    const ve = () => {
      o(re), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (R.shapeFlag & 1 && me && !me.persisted) {
      const { leave: Se, delayLeave: Ne } = me, xe = () => Se(re, ve);
      Ne ? Ne(R.el, ve, xe) : xe();
    } else
      ve();
  }, yt = (R, G) => {
    let re;
    for (; R !== G; )
      re = x(R), o(R), R = re;
    o(G);
  }, cn = (R, G, re) => {
    const { bum: se, scope: me, job: ve, subTree: Se, um: Ne, m: xe, a: fe } = R;
    jh(xe), jh(fe), se && sl(se), me.stop(), ve && (ve.flags |= 8, Oe(Se, R, G, re)), Ne && Rn(Ne, G), Rn(() => {
      R.isUnmounted = !0;
    }, G);
  }, at = (R, G, re, se = !1, me = !1, ve = 0) => {
    for (let Se = ve; Se < R.length; Se++)
      Oe(R[Se], G, re, se, me);
  }, qn = (R) => {
    if (R.shapeFlag & 6)
      return qn(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const G = x(R.anchor || R.el), re = G && G[cw];
    return re ? x(re) : G;
  };
  let It = !1;
  const en = (R, G, re) => {
    let se;
    R == null ? G._vnode && (Oe(G._vnode, null, null, !0), se = G._vnode.component) : v(
      G._vnode || null,
      R,
      G,
      null,
      null,
      null,
      re
    ), G._vnode = R, It || (It = !0, Ih(se), Hg(), It = !1);
  }, mn = {
    p: v,
    um: Oe,
    m: Ie,
    r: kt,
    mt: pe,
    mc: J,
    pc: A,
    pbc: T,
    n: qn,
    o: e
  };
  return {
    render: en,
    hydrate: void 0,
    createApp: Ow(en)
  };
}
function hu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function d0(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = ti(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && d0(l, u)), u.type === dc && (u.patchFlag === -1 && (u = o[a] = ti(u)), u.el = l.el), u.type === Ei && !u.el && (u.el = l.el);
    }
}
function Xw(e) {
  const t = e.slice(), n = [0];
  let r, o, a, l, u;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, l = n.length - 1; a < l; )
        u = a + l >> 1, e[n[u]] < b ? a = u + 1 : l = u;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, l = n[a - 1]; a-- > 0; )
    n[a] = l, l = t[l];
  return n;
}
function p0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : p0(t);
}
function jh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function h0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? h0(t.subTree) : null;
}
const m0 = (e) => e.__isSuspense;
function qw(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : iw(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), dc = /* @__PURE__ */ Symbol.for("v-txt"), Ei = /* @__PURE__ */ Symbol.for("v-cmt"), mu = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let Yn = null;
function te(e = !1) {
  es.push(Yn = e ? null : []);
}
function Jw() {
  es.pop(), Yn = es[es.length - 1] || null;
}
let as = 1;
function Hh(e, t = !1) {
  as += e, e < 0 && Yn && t && (Yn.hasOnce = !0);
}
function g0(e) {
  return e.dynamicChildren = as > 0 ? Yn || Yo : null, Jw(), as > 0 && Yn && Yn.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return g0(
    B(
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
function sr(e, t, n, r, o) {
  return g0(
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
function y0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const b0 = ({ key: e }) => e ?? null, cl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qt(e) || /* @__PURE__ */ Mn(e) || et(e) ? { i: Un, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Ue ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && b0(t),
    ref: t && cl(t),
    scopeId: Kg,
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
    ctx: Un
  };
  return u ? (rd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= qt(n) ? 8 : 16), as > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Yn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Yn.push(d), d;
}
const De = Zw;
function Zw(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Zg) && (e = Ei), y0(e)) {
    const u = oa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rd(u, n), as > 0 && !a && Yn && (u.shapeFlag & 6 ? Yn[Yn.indexOf(e)] = u : Yn.push(u)), u.patchFlag = -2, u;
  }
  if (cx(e) && (e = e.__vccOpts), t) {
    t = Qw(t);
    let { class: u, style: d } = t;
    u && !qt(u) && (t.class = ct(u)), xt(d) && (/* @__PURE__ */ Zf(d) && !Je(d) && (d = Nn({}, d)), t.style = wt(d));
  }
  const l = qt(e) ? 1 : m0(e) ? 128 : uw(e) ? 64 : xt(e) ? 4 : et(e) ? 2 : 0;
  return B(
    e,
    t,
    n,
    r,
    o,
    l,
    a,
    !0
  );
}
function Qw(e) {
  return e ? /* @__PURE__ */ Zf(e) || a0(e) ? Nn({}, e) : e : null;
}
function oa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? ni(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && b0(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(cl(t)) : [a, cl(t)] : cl(t)
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
    patchFlag: t && e.type !== Ue ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && oa(e.ssContent),
    ssFallback: e.ssFallback && oa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && ed(
    y,
    d.clone(y)
  ), y;
}
function Ha(e = " ", t = 0) {
  return De(dc, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (te(), sr(Ei, null, e)) : De(Ei, null, e);
}
function Or(e) {
  return e == null || typeof e == "boolean" ? De(Ei) : Je(e) ? De(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : y0(e) ? ti(e) : De(dc, null, String(e));
}
function ti(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : oa(e);
}
function rd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), rd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !a0(t) ? t._ctx = Un : o === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Un }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ha(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ni(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ct([t.class, r.class]));
      else if (o === "style")
        t.style = wt([t.style, r.style]);
      else if (tc(o)) {
        const a = t[o], l = r[o];
        l && a !== l && !(Je(a) && a.includes(l)) ? t[o] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !nc(o) && (t[o] = l);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Nr(e, t, n, r = null) {
  $r(e, t, 7, [
    n,
    r
  ]);
}
const ex = t0();
let tx = 0;
function nx(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || ex, a = {
    uid: tx++,
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
    scope: new P_(
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
    propsOptions: l0(r, o),
    emitsOptions: n0(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: St,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: St,
    data: St,
    props: St,
    attrs: St,
    slots: St,
    refs: St,
    setupState: St,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Tw.bind(null, a), e.ce && e.ce(a), a;
}
let kn = null;
const rx = () => kn || Un;
let Il, af;
{
  const e = oc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  Il = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => kn = n
  ), af = t(
    "__VUE_SSR_SETTERS__",
    (n) => ss = n
  );
}
const bs = (e) => {
  const t = kn;
  return Il(e), e.scope.on(), () => {
    e.scope.off(), Il(t);
  };
}, Gh = () => {
  kn && kn.scope.off(), Il(null);
};
function v0(e) {
  return e.vnode.shapeFlag & 4;
}
let ss = !1;
function ix(e, t = !1, n = !1) {
  t && af(t);
  const { props: r, children: o } = e.vnode, a = v0(e);
  zw(e, r, a, t), Kw(e, o, n || t);
  const l = a ? ox(e, t) : void 0;
  return t && af(!1), l;
}
function ox(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mw);
  const { setup: r } = n;
  if (r) {
    ci();
    const o = e.setupContext = r.length > 1 ? sx(e) : null, a = bs(e), l = gs(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = bg(l);
    if (ui(), a(), (u || e.sp) && !Za(e) && Yg(e), u) {
      if (l.then(Gh, Gh), t)
        return l.then((d) => {
          Kh(e, d);
        }).catch((d) => {
          sc(d, e, 0);
        });
      e.asyncDep = l;
    } else
      Kh(e, l);
  } else
    _0(e);
}
function Kh(e, t, n) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = Vg(t)), _0(e);
}
function _0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dr);
  {
    const o = bs(e);
    ci();
    try {
      Nw(e);
    } finally {
      ui(), o();
    }
  }
}
const ax = {
  get(e, t) {
    return Sn(e, "get", ""), e[t];
  }
};
function sx(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ax),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vg(Y_(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qa)
        return Qa[n](e);
    },
    has(t, n) {
      return n in t || n in Qa;
    }
  })) : e.proxy;
}
function lx(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cx(e) {
  return et(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Q_(e, t, ss), ux = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sf;
const Wh = typeof window < "u" && window.trustedTypes;
if (Wh)
  try {
    sf = /* @__PURE__ */ Wh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const w0 = sf ? (e) => sf.createHTML(e) : (e) => e, fx = "http://www.w3.org/2000/svg", dx = "http://www.w3.org/1998/Math/MathML", Zr = typeof document < "u" ? document : null, Bh = Zr && /* @__PURE__ */ Zr.createElement("template"), px = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Zr.createElementNS(fx, e) : t === "mathml" ? Zr.createElementNS(dx, e) : n ? Zr.createElement(e, { is: n }) : Zr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Zr.createTextNode(e),
  createComment: (e) => Zr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Zr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const l = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Bh.innerHTML = w0(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Bh.content;
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
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, hx = /* @__PURE__ */ Symbol("_vtc");
function mx(e, t, n) {
  const r = e[hx];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const El = /* @__PURE__ */ Symbol("_vod"), x0 = /* @__PURE__ */ Symbol("_vsh"), ho = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[El] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ta(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ta(e, !0), r.enter(e)) : r.leave(e, () => {
      Ta(e, !1);
    }) : Ta(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ta(e, t);
  }
};
function Ta(e, t) {
  e.style.display = t ? e[El] : "none", e[x0] = !t;
}
const gx = /* @__PURE__ */ Symbol(""), yx = /(?:^|;)\s*display\s*:/;
function bx(e, t, n) {
  const r = e.style, o = qt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (qt(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && ul(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && ul(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), ul(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[gx];
      l && (n += ";" + l), r.cssText = n, a = yx.test(n);
    }
  } else t && e.removeAttribute("style");
  El in e && (e[El] = a ? r.display : "", e[x0] && (r.display = "none"));
}
const Uh = /\s*!important$/;
function ul(e, t, n) {
  if (Je(n))
    n.forEach((r) => ul(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = vx(e, t);
    Uh.test(n) ? e.setProperty(
      go(r),
      n.replace(Uh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Yh = ["Webkit", "Moz", "ms"], gu = {};
function vx(e, t) {
  const n = gu[t];
  if (n)
    return n;
  let r = En(t);
  if (r !== "filter" && r in e)
    return gu[t] = r;
  r = ic(r);
  for (let o = 0; o < Yh.length; o++) {
    const a = Yh[o] + r;
    if (a in e)
      return gu[t] = a;
  }
  return t;
}
const Xh = "http://www.w3.org/1999/xlink";
function qh(e, t, n, r, o, a = M_(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xh, t.slice(6, t.length)) : e.setAttributeNS(Xh, t, n) : n == null || a && !xg(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Rr(n) ? String(n) : n
  );
}
function Jh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? w0(n) : n);
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
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = xg(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Ho(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function _x(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Zh = /* @__PURE__ */ Symbol("_vei");
function wx(e, t, n, r, o = null) {
  const a = e[Zh] || (e[Zh] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = xx(t);
    if (r) {
      const b = a[t] = Mx(
        r,
        o
      );
      Ho(e, u, b, d);
    } else l && (_x(e, u, l, d), a[t] = void 0);
  }
}
const Qh = /(?:Once|Passive|Capture)$/;
function xx(e) {
  let t;
  if (Qh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Qh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : go(e.slice(2)), t];
}
let yu = 0;
const Sx = /* @__PURE__ */ Promise.resolve(), kx = () => yu || (Sx.then(() => yu = 0), yu = Date.now());
function Mx(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    $r(
      Nx(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = kx(), n;
}
function Nx(e, t) {
  if (Je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const em = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Px = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? mx(e, r, l) : t === "style" ? bx(e, n, r) : tc(t) ? nc(t) || wx(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ax(e, t, r, l)) ? (Jh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qh(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cx(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !qt(r))) ? Jh(e, En(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), qh(e, t, r, l));
};
function Ax(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && em(t) && et(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return em(t) && qt(n) ? !1 : t in e;
}
function Cx(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = En(t);
  return Array.isArray(n) ? n.some((o) => En(o) === r) : Object.keys(n).some((o) => En(o) === r);
}
const tm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => sl(t, n) : t;
};
function Ix(e) {
  e.target.composing = !0;
}
function nm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const bu = /* @__PURE__ */ Symbol("_assign");
function rm(e, t, n) {
  return t && (e = e.trim()), n && (e = Kf(e)), e;
}
const im = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[bu] = tm(o);
    const a = r || o.props && o.props.type === "number";
    Ho(e, t ? "change" : "input", (l) => {
      l.target.composing || e[bu](rm(e.value, n, a));
    }), (n || a) && Ho(e, "change", () => {
      e.value = rm(e.value, n, a);
    }), t || (Ho(e, "compositionstart", Ix), Ho(e, "compositionend", nm), Ho(e, "change", nm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[bu] = tm(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Kf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Ex = ["ctrl", "shift", "alt", "meta"], Ox = {
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
  exact: (e, t) => Ex.some((n) => e[`${n}Key`] && !t.includes(n))
}, At = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = Ox[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, Fx = /* @__PURE__ */ Nn({ patchProp: Px }, px);
let om;
function Tx() {
  return om || (om = Bw(Fx));
}
const id = ((...e) => {
  const t = Tx().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Lx(r);
    if (!o) return;
    const a = t._component;
    !et(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Dx(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function Dx(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Lx(e) {
  return qt(e) ? document.querySelector(e) : e;
}
function Go(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Rx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function am(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let _ = 0; _ < o; _ += 1)
    for (let x = 0; x < r; x += 1)
      a[(_ * r + x) * 4 + 3] <= t || (x < l && (l = x), _ < u && (u = _), x > d && (d = x), _ > b && (b = _));
  return d < l || b < u ? null : {
    minX: l,
    minY: u,
    maxX: d,
    maxY: b,
    width: d - l + 1,
    height: b - u + 1,
    aspect: Number(((d - l + 1) / Math.max(1, b - u + 1)).toFixed(4))
  };
}
function od(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Qr(e, t, n) {
  if (!e) return Go(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Dt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let vu = null, _u = null, sm = null, lm = null, Kt = null, Da = null, An = null, Ni = null;
function $x() {
  if (_u) return _u;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), _u = n, n;
}
function wu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  vu = Qr(vu, n, r);
  const o = vu;
  Dt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", lm !== o.ctx && (sm = o.ctx.createPattern($x(), "repeat"), lm = o.ctx), o.ctx.fillStyle = sm, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Vx(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function zx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function jx(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Hx(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Lt = /* @__PURE__ */ new Map(), ad = 128;
function Gx(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Lt.has(d)) {
    const W = Lt.get(d);
    return Lt.delete(d), Lt.set(d, W), W;
  }
  Lt.size >= ad && Lt.delete(Lt.keys().next().value);
  const b = l * 2 + 2, y = l + 1, _ = od(b, b), x = _.getContext("2d"), N = u * l, S = l + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, $ = x.createRadialGradient(y, y, N, y, y, S);
  return $.addColorStop(0, v), $.addColorStop(1, F), x.fillStyle = $, x.fillRect(0, 0, b, b), Lt.set(d, _), _;
}
function Kx(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: y } = r, _ = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), F = `chisel:${_}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${S.toFixed(2)}:${v.toFixed(2)}`;
  if (Lt.has(F)) {
    const J = Lt.get(F);
    return Lt.delete(F), Lt.set(F, J), J;
  }
  Lt.size >= ad && Lt.delete(Lt.keys().next().value);
  const $ = od(_, x), W = $.getContext("2d"), I = W.createImageData(_, x), V = I.data, O = Math.max(0, e - t), z = Math.max(0, Math.min(1, n)), K = 1 + N;
  for (let J = 0; J < x; J++)
    for (let _e = 0; _e < _; _e++) {
      const T = _e + 0.5 - e, C = J + 0.5 - t, ue = Math.max(Math.abs(T) - O, 0), pe = Math.hypot(ue, C) / t;
      if (pe >= 1) continue;
      const U = pe <= z ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - z)), X = 1 - pe, H = 1 + N * (1 - X) * (1 - X), A = 1 - S * X * X, ee = H * A / K;
      let Y = 1;
      if (v > 0) {
        const kt = Math.floor((C + t) / 1.5), yt = Math.floor((T + e) / 8), cn = so(Zo(kt * 41 + 500, yt * 19 + 300));
        Y = 1 - v * 0.42 * cn;
      }
      const Ie = Math.round(255 * Math.min(1, y * U * ee * Y));
      if (Ie <= 0) continue;
      const Oe = (J * _ + _e) * 4;
      V[Oe] = u, V[Oe + 1] = d, V[Oe + 2] = b, V[Oe + 3] = Ie;
    }
  return W.putImageData(I, 0, 0), Lt.set(F, $), $;
}
function Zo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function so(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Wx(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), _ = Math.hypot(y, d) / r;
  if (_ >= 1) return 0;
  const x = so(Zo(e * 17 + 3, t * 13 + 7)), N = _ + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const S = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), v = Bx(e, t, u, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const W = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, l * S * W));
}
function Bx(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = so(Zo(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), _ = so(Zo(b * 23 + 800, y * 29 + 500)), x = so(Zo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + _ * 0.3 + x * 0.15;
}
function Ux(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${_.toFixed(2)}`;
  if (Lt.has(x)) {
    const W = Lt.get(x);
    return Lt.delete(x), Lt.set(x, W), W;
  }
  Lt.size >= ad && Lt.delete(Lt.keys().next().value);
  const N = od(b, y), S = N.getContext("2d"), v = S.createImageData(b, y), F = v.data, $ = Math.max(0, Math.min(1, n));
  for (let W = 0; W < y; W++)
    for (let I = 0; I < b; I++) {
      const V = Wx(I, W, e, t, $, _, d);
      if (V <= 0) continue;
      const O = (W * b + I) * 4;
      F[O] = a, F[O + 1] = l, F[O + 2] = u, F[O + 3] = V;
    }
  return S.putImageData(v, 0, 0), Lt.set(x, N), N;
}
function S0(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = jx(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = Yx(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = Hx(t, o), y = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), _ = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const $ = o * u, W = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = Kx($, W, a, l, I, V, O);
  } else if (r === "crayon") {
    const $ = o * u, W = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = Ux($, W, a, l, I);
  } else
    S = Gx(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: _ };
}
function Yx(e) {
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
function Xx(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function cm(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function sd(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, _ = b * e.radiusPx * o, x = Zo(t, n);
    for (let N = 0; N < y; N++) {
      const S = so(x + N * 2) * Math.PI * 2, v = Math.sqrt(so(x + N * 2 + 1)) * _, F = t + Math.cos(S) * v, $ = n + Math.sin(S) * v, W = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, O = W * e.aspect * V;
      cm(e, F, $, W, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  cm(e, t, n, a, d);
}
function um(e, t, n) {
  const r = zx(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = S0(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: S });
  }
  if (sd(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], _ = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], S = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? _ = ls(l, y.x, y.y, S.x, S.y, _) : _ = Ol(l, d, y, S, N, _), d = b, b = N, y = S;
  }
  u.length === 2 ? ls(l, y.x, y.y, b.x, b.y, _) : Ol(l, d, y, b, b, _), e.restore();
}
function fl(e, t, n) {
  var _;
  const r = Array.isArray((_ = t == null ? void 0 : t.geometry) == null ? void 0 : _.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = Xx(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = Vx(r[x]);
    let S = Number(N.x || 0) * o;
    x > 0 && Math.abs(S - u[x - 1].x) > o * 0.5 && (S += S < u[x - 1].x ? o : -o), u.push({ x: S, y: Number(N.y || 0) * a }), S < d && (d = S), S > b && (b = S);
  }
  function y(x) {
    e.beginPath(), e.moveTo(u[0].x + x, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + x, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = l, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function Ws(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    fl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? um(e, t, n) : (Da = Qr(Da, n.width, n.height), Dt(Da), um(Da.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(Da.canvas, 0, 0), e.restore());
}
function Bi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ls(e, t, n, r, o, a) {
  const l = r - t, u = o - n, d = Math.hypot(l, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    sd(e, t + l * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function Ol(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, _ = u, x = _ + d, N = x + b, S = x - _, v = 16;
  let F = a, $ = n.x, W = n.y;
  for (let I = 1; I <= v; I++) {
    const V = _ + S * I / v, O = ((_ - V) * t.x + (V - y) * n.x) / (_ - y), z = ((_ - V) * t.y + (V - y) * n.y) / (_ - y), K = ((x - V) * n.x + (V - _) * r.x) / (x - _), J = ((x - V) * n.y + (V - _) * r.y) / (x - _), _e = ((N - V) * r.x + (V - x) * o.x) / (N - x), T = ((N - V) * r.y + (V - x) * o.y) / (N - x), C = ((x - V) * O + (V - y) * K) / (x - y), ue = ((x - V) * z + (V - y) * J) / (x - y), de = ((N - V) * K + (V - _) * _e) / (N - _), pe = ((N - V) * J + (V - _) * T) / (N - _), U = ((x - V) * C + (V - _) * de) / (x - _), X = ((x - V) * ue + (V - _) * pe) / (x - _);
    F = ls(e, $, W, U, X, F), $ = U, W = X;
  }
  return F;
}
function qx(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const N = S0(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", sd(N, b, u, 1), e.activeStroke = {
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
      strokeOpacity: S,
      velocityWidthFactor: v,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + b) * 0.5, _ = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = ls(x, d.lastMidX, d.lastMidY, y, _, d.distSinceStamp) : d.distSinceStamp = Ol(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: _ },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = _, d.pointCount++, e.displayDirty = !0;
}
function lf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Go(t, n), l = {
    descriptor: r,
    committedMask: Go(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Go(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Go(t, n);
  let b = null, y = "", _ = null;
  function x(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: Go(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(T) {
    let C = o.get(T);
    return C || (C = x(T), o.set(T, C)), C;
  }
  function S(T) {
    return y === "mask" ? l : b ? N(b) : u;
  }
  function v(T) {
    var X;
    const C = !_ || _.length !== T.length || T.some((H, A) => H !== _[A]), ue = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let de = l.displayDirty || u.displayDirty || C;
    for (const H of T) {
      const A = o.get(H);
      if (A != null && A.displayDirty) {
        de = !0;
        break;
      }
    }
    if (ue && (de = !0), !de) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const H of T) {
      const A = o.get(H);
      A && (A.displayDirty = !1);
    }
    _ = [...T];
    const pe = d.ctx;
    Dt(d);
    const U = !!(ue != null && ue.isEraser);
    for (const H of T) {
      const A = o.get(H);
      if (!A) continue;
      const Y = b === A.actionGroupId && y === "paint" ? A.activeStroke : null;
      if (U)
        Kt = Qr(Kt, t, n), Dt(Kt), Kt.ctx.drawImage(A.committedPaint.canvas, 0, 0), Bi(Kt.ctx, a.canvas), pe.drawImage(Kt.canvas, 0, 0);
      else if (pe.drawImage(A.committedPaint.canvas, 0, 0), Y) {
        const Ie = A.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        pe.save(), pe.globalAlpha = Ie, pe.drawImage(a.canvas, 0, 0), pe.restore();
      }
    }
  }
  function F(T) {
    var ue, de, pe, U, X;
    for (const H of o.values())
      Dt(H.committedPaint), Dt(H.currentStroke), H.activeStroke = null, H.displayDirty = !0;
    Dt(l.committedMask), Dt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, _ = null;
    const C = [
      ...Array.isArray((de = (ue = T == null ? void 0 : T.painting) == null ? void 0 : ue.paint) == null ? void 0 : de.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (pe = T == null ? void 0 : T.painting) == null ? void 0 : pe.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const H of C) {
      if (((X = H == null ? void 0 : H.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const A = String((H == null ? void 0 : H.layerKind) || "paint"), Y = String((H == null ? void 0 : H.toolKind) || "pen") === "eraser";
      if (A === "mask") {
        const Ie = l.descriptor;
        Y ? (Kt = Qr(Kt, Ie.width, Ie.height), Dt(Kt), Ws(Kt.ctx, H, Ie), Bi(l.committedMask.ctx, Kt.canvas)) : Ws(l.committedMask.ctx, H, Ie);
        continue;
      }
      if (Y) {
        Kt = Qr(Kt, r.width, r.height), Dt(Kt), Ws(Kt.ctx, H, r);
        for (const Ie of o.values())
          Bi(Ie.committedPaint.ctx, Kt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((H == null ? void 0 : H.actionGroupId) || "__default__"), Oe = N(Ie), kt = Oe.descriptor;
        Ws(Oe.committedPaint.ctx, H, kt), Oe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function $(T, C) {
    y = String((T == null ? void 0 : T.layerKind) || "");
    const ue = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Dt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const de = ue ? u : N(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = ue ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Dt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0;
    }
  }
  function W(T, C) {
    var A;
    const ue = String((T == null ? void 0 : T.layerKind) || "paint"), de = String((T == null ? void 0 : T.toolKind) || "") === "eraser", pe = ue === "mask" ? l : de ? u : N(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), U = pe.activeStroke, X = pe.descriptor;
    if (U && U.pointCount > 1) {
      const ee = pe.currentStroke.ctx;
      ee.globalCompositeOperation = "source-over";
      const Y = {
        ctx: ee,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: X,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter,
        latitudeCorrection: U.latitudeCorrection
      };
      U.pointCount === 2 ? ls(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : Ol(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    pe.lassoPreviewActive && (Dt(pe.currentStroke), fl(pe.currentStroke.ctx, T, X), pe.lassoPreviewActive = !1);
    const H = ue === "mask" ? l.committedMask : pe.committedPaint;
    if (de && ue === "paint")
      for (const ee of o.values())
        Bi(ee.committedPaint.ctx, pe.currentStroke.canvas), ee.displayDirty = !0;
    else if (de)
      Bi(H.ctx, pe.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      H.ctx.save(), H.ctx.globalAlpha = ee, H.ctx.drawImage(pe.currentStroke.canvas, 0, 0), H.ctx.restore();
    }
    Rx() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((A = T == null ? void 0 : T.targetSpace) == null ? void 0 : A.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), am(pe.currentStroke.canvas), am(H.canvas), void 0), Dt(pe.currentStroke), pe.activeStroke = null, pe.displayDirty = !0, b = null, y = "", v([...o.keys()]);
  }
  function I(T) {
    if (y === "mask")
      Dt(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (y === "paint" && !b)
      Dt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const C = o.get(b);
      C && (Dt(C.currentStroke), C.activeStroke = null, C.lassoPreviewActive = !1, C.displayDirty = !0);
    }
    b = null, y = "", v([...o.keys()]);
  }
  function V(T, C) {
    var de;
    if (y = String((T == null ? void 0 : T.layerKind) || ""), String(((de = T == null ? void 0 : T.geometry) == null ? void 0 : de.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Dt(l.currentStroke), fl(l.currentStroke.ctx, T, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const pe = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = pe ? u : N(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = pe ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Dt(U.currentStroke), fl(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      v([...o.keys()]);
    }
  }
  function O(T) {
    return v(T ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: l.committedMask,
      descriptor: r
    };
  }
  function z(T) {
    return o.get(String(T)) ?? null;
  }
  function K() {
    return [...o.keys()];
  }
  function J(T) {
    var X;
    const C = o.get(String(T));
    if (!C) return null;
    const ue = y === "paint" && b === C.actionGroupId, de = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (de != null && de.isEraser)
      return An = Qr(An, t, n), Dt(An), An.ctx.drawImage(C.committedPaint.canvas, 0, 0), Bi(An.ctx, a.canvas), An.canvas;
    const pe = ue ? C.activeStroke : null;
    if (!pe) return C.committedPaint.canvas;
    An = Qr(An, t, n), Dt(An), An.ctx.drawImage(C.committedPaint.canvas, 0, 0);
    const U = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pe.strokeOpacity ?? 1));
    return An.ctx.save(), An.ctx.globalAlpha = U, An.ctx.drawImage(a.canvas, 0, 0), An.ctx.restore(), An.canvas;
  }
  function _e() {
    return Ni = Qr(Ni, t, n), Dt(Ni), wu(Ni.ctx, l.committedMask.canvas), y === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (Kt = Qr(Kt, t, n), Dt(Kt), Kt.ctx.drawImage(l.committedMask.canvas, 0, 0), Bi(Kt.ctx, a.canvas), Dt(Ni), wu(Ni.ctx, Kt.canvas)) : wu(Ni.ctx, a.canvas)), Ni.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: qx,
    updateActiveStroke: V,
    commitActiveStroke: W,
    cancelActiveStroke: I,
    getErpTarget: O,
    ensureTarget: S,
    getGroupTarget: z,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: K
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Wt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Jx(e, t) {
  let n = Wt(t) - Wt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const cf = 3;
function La(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Fl(e, t = 0) {
  const n = La(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = La(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = La(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = La(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(La(t) || 0);
}
function k0(e) {
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
const fm = Math.PI / 180, dm = 0.12, Zx = cf, Qx = 35, eS = 140, Ga = 100, tS = 20, pm = 0.8;
function nS(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = q(Number(e || Ga), 1, 179) * fm;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / fm;
}
function ld(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ga })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(W, I = null) {
    u && u(W, I);
  }
  function y(W, I, V = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(W || 0), d.drag.lastY = Number(I || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function _(W, I, V = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const z = Number(O || performance.now()), K = Number(W), J = Number(I), _e = K - d.drag.lastX, T = J - d.drag.lastY;
    d.drag.lastX = K, d.drag.lastY = J, d.drag.lastTs = z;
    const C = r() || { x: 1, y: 1 }, ue = Number(C.x || 1), de = Number(C.y || 1), pe = { ...t() };
    let U = 0, X = 0;
    if (V === "unwrap") {
      const A = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(A.w || 1)), Y = Math.max(1, Number(A.h || 1)), Ie = _e / ee, Oe = T / Y;
      U = -Ie * 360 * ue, X = Oe * 180 * de;
    } else {
      const A = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(A.w || 0)), Y = Math.max(1, Number(A.h || 0));
      if (ee > 1 && Y > 1) {
        const Ie = q(Number(pe.fov || Ga), 1, 179), Oe = q(nS(Ie, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ie * ue, X = T / Y * Oe * de;
      } else
        U = -_e * dm * ue, X = T * dm * de;
    }
    pe.yaw = Wt(Number(pe.yaw || 0) + U), pe.pitch = q(Number(pe.pitch || 0) + X, -89.9, 89.9), n(pe), d.velHistory.push({ ts: z, yaw: pe.yaw, pitch: pe.pitch });
    let H = 0;
    for (; H < d.velHistory.length - 1 && d.velHistory[H].ts < z - 100; ) H++;
    return H > 0 && d.velHistory.splice(0, H), d.inertia.active = !1, d.inertia.lastTs = z, l(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function x(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(W || performance.now());
    d.drag.lastTs = I;
    const V = d.velHistory.filter((z) => I - z.ts <= 80);
    if (V.length >= 2) {
      const z = V[0], K = V.at(-1), J = Math.max(1e-3, (K.ts - z.ts) / 1e3);
      let _e = K.yaw - z.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / J, d.inertia.vy = (K.pitch - z.pitch) / J;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > tS, d.inertia.lastTs = I, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function N(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(W || performance.now()), V = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const O = { ...t() };
    O.yaw = Wt(Number(O.yaw || 0) + d.inertia.vx * V), O.pitch = q(Number(O.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const z = Math.exp(-5.5 * V);
    return d.inertia.vx *= z, d.inertia.vy *= z, Math.abs(d.inertia.vx) < pm && Math.abs(d.inertia.vy) < pm && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), l(), d.inertia.active;
  }
  function S() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function v(W) {
    const I = Math.sign(Number(W || 0));
    if (!I) return !1;
    const V = { ...t() }, O = Number(V.fov || Ga);
    return V.fov = q(O + I * Zx, Qx, eS), n(V), l(), b("wheel", { deltaSign: I, fovBefore: O, fovAfter: V.fov }), !0;
  }
  function F(W, I = 0) {
    return v(Fl(W, I));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: Ga }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: _,
    endDrag: x,
    stepInertia: N,
    stopMotion: S,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: $
  };
}
const $t = Math.PI / 180, sn = 180 / Math.PI;
function ar(e, t, n) {
  return { x: e, y: t, z: n };
}
function Tl(e, t) {
  return ar(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Dl(e, t) {
  return ar(e.x * t, e.y * t, e.z * t);
}
function xu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function cd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ar(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const n = e * $t, r = t * $t, o = Math.cos(r);
  return ar(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function fa(e, t, n = 0) {
  const r = Number(e || 0) * $t, o = Number(t || 0) * $t, a = n * $t, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), _ = Math.sin(a);
  return {
    right: ar(
      l * y - u * b * _,
      d * _,
      -u * y - l * b * _
    ),
    up: ar(
      -l * _ - u * b * y,
      d * y,
      u * _ - l * b * y
    ),
    fwd: ar(u * d, b, l * d)
  };
}
function Ll(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function _t(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function rS() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function iS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = _t(r.z_index ?? r.zIndex, t.length);
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
function oS(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function aS(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = _t(e.t, 0), r = _t(e.widthScale, null), o = _t(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = _t(e.u, null), l = _t(e.v, null);
    if (a == null || l == null) return null;
    const u = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, l)),
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = _t(e.u, null), l = _t(e.v, null);
    if (a == null || l == null) return null;
    const u = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: l,
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  return null;
}
function Bs(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = aS(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function sS(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Bs(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Bs(e.points, t, 1);
  if (!a) return null;
  const l = Bs(e.rawPoints, t, 1), u = Bs(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: l || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function lS(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = oS(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = sS(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = _t(e.size, null), l = _t(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = _t(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let _ = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    _ = {
      r: Math.max(0, Math.min(1, _t(x.r, 0))),
      g: Math.max(0, Math.min(1, _t(x.g, 0))),
      b: Math.max(0, Math.min(1, _t(x.b, 0))),
      a: Math.max(0, Math.min(1, _t(x.a, 1)))
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
    opacity: Math.max(0, Math.min(1, l)),
    hardness: _t(e.hardness, null),
    flow: _t(e.flow, null),
    spacing: _t(e.spacing, null),
    createdAt: Math.trunc(_t(e.createdAt, 0)),
    color: _,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function hm(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = lS(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function cS(e) {
  if (!e || typeof e != "object") return null;
  const t = _t(e.u0, null), n = _t(e.v0, null), r = _t(e.u1, null), o = _t(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function uS(e) {
  const t = e || {};
  return {
    du: _t(t.du, 0) ?? 0,
    dv: _t(t.dv, 0) ?? 0,
    rot_deg: _t(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, _t(t.scale, 1) ?? 1)
  };
}
function fS(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = cS(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, _t(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: uS(e.transform)
  } : null;
}
function dS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = fS(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Qo(e) {
  const t = rS();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: iS(e.groups),
    paint: hm(e.paint, "paint"),
    mask: hm(e.mask, "mask"),
    raster_objects: dS(e.raster_objects)
  };
}
const Vr = 1, zr = 179, uf = 85;
function hc(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function M0(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function N0(e, t, { shiftKey: n = !1 } = {}) {
  let r = tt(e, 0) + tt(t, 0) * sn;
  return n && (r = Math.round(r / 15) * 15), hc(r);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function di(e = {}) {
  const t = q(tt(e.hFOV_deg || 90, 90), Vr, zr), n = q(tt(e.vFOV_deg || 60, 60), Vr, zr), r = Math.tan(t * $t * 0.5), o = Math.tan(n * $t * 0.5);
  return {
    yawDeg: tt(e.yaw_deg, 0),
    pitchDeg: tt(e.pitch_deg, 0),
    rollDeg: tt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function lo(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = di(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function ud(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, tt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function fd(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), r = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = q(2 * Math.atan(r / (2 * n)) * sn, Vr, zr), l = q(2 * Math.atan(o / (2 * n)) * sn, Vr, zr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function pS(e, t, n) {
  const r = tt(e == null ? void 0 : e.x, 0), o = tt(e == null ? void 0 : e.y, 0), a = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = di(t), d = Math.max(1e-12, tt(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function dd(e, t, n = uf) {
  const r = Math.max(1e-12, tt(t, 1)), o = q(tt(n, uf), 1, 89.999), a = r * Math.tan(o * $t), l = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function P0(e, t, n) {
  const r = Math.max(1e-12, tt(t, 1));
  return {
    x: (tt(n == null ? void 0 : n.x, 0) - tt(e == null ? void 0 : e.x, 0)) / r,
    y: -(tt(n == null ? void 0 : n.y, 0) - tt(e == null ? void 0 : e.y, 0)) / r
  };
}
function dl(e, t) {
  const n = q(tt(e, 60), Vr, zr), r = Math.max(1e-6, tt(t, 1));
  return q(
    2 * Math.atan(Math.tan(n * $t * 0.5) * r) * sn,
    Vr,
    zr
  );
}
function mm(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function hS(e, t) {
  const n = mm(e, 1), r = mm(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), l = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, l) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(l / d))}`;
}
function co(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * $t, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * $t;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function eo(e) {
  const t = co(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || hS(t, 1);
}
function A0(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = eo(t), t;
}
function C0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? q(l, Vr, zr) : q(Math.min(42, tt(o, 100) * 0.42), 8, 96);
  return A0({
    id: String(e),
    label: "Frame 1",
    yaw_deg: tt(t, 0),
    pitch_deg: q(tt(n, 0), -89.9, 89.9),
    roll_deg: hc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function ei(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : eo(e);
}
function I0(e, t) {
  const n = di(e), r = tt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * sn, a = 2 * Math.atan(n.tanHalfY * r) * sn;
  return o < Vr || o > zr || a < Vr || a > zr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function E0(e, t, n = cf) {
  const r = Math.sign(tt(t, 0)), o = Math.abs(tt(n, cf));
  if (!r || !(o > 0)) return null;
  const a = di(e), l = a.hFovDeg + r * o;
  if (l < Vr || l > zr) return null;
  const u = Math.tan(l * $t * 0.5);
  return I0(e, u / a.tanHalfX);
}
function O0(e, t) {
  const n = di(e), r = fa(n.yawDeg, n.pitchDeg, n.rollDeg), o = tt(t == null ? void 0 : t.x, 0), a = tt(t == null ? void 0 : t.y, 0);
  return cd(Tl(Tl(r.fwd, Dl(r.right, o)), Dl(r.up, a)));
}
function mS(e) {
  return ar(e.x, e.y, -e.z);
}
function pl(e) {
  return ar(e.x, e.y, -e.z);
}
function Xn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = fa(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function F0(e) {
  const t = pl(ar(e[0][0], e[1][0], e[2][0])), n = pl(ar(e[0][1], e[1][1], e[2][1])), r = pl(ar(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * sn, pitchDeg: a * sn, rollDeg: d * sn };
}
function cs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function yo(e) {
  const [[t, n, r], [o, a, l], [u, d, b]] = e, y = t + a + b;
  if (y > 0) {
    const x = 0.5 / Math.sqrt(y + 1);
    return { x: (d - l) * x, y: (r - u) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > b) {
    const x = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + u) / x, w: (d - l) / x };
  }
  if (a > b) {
    const x = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / x, y: 0.25 * x, z: (l + d) / x, w: (r - u) / x };
  }
  const _ = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / _, y: (l + d) / _, z: 0.25 * _, w: (o - n) / _ };
}
function Us(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const no = 1e-6, ff = 1e-6, gS = 1e-9;
function us(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function yS(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    us(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return us(0, r, a, 1, 0.5 * (l + u));
}
function aa(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function sa(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (l.reduce((x, N, S) => x + N * u[S], 0) < 0) return n.map(() => 0);
  const d = l.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, S) => N + S * S, 0)), y = 3 * Math.min(b(l), b(u)), _ = b(d);
  return _ <= y ? d : d.map((x) => x * y / _);
}
function T0(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((y, _) => a[_] - y);
  let d = u;
  aa(e, r) && (d = sa(t, r, n[r - 1].map((y, _) => y - o[_]), u).map((y) => y * l));
  let b = u;
  return aa(e, r + 1) && (b = sa(t, r + 1, u.map((y) => -y), n[r + 2].map((y, _) => y - a[_])).map((y) => y * l)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function D0(e, t, n, r, o) {
  const [[a], [l]] = T0(e, t, n.map((u) => [u]), r);
  return us(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function bS(e, t, n, r) {
  var b, y;
  const o = e.map((_) => _.value);
  let [a, l] = T0(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((_) => us(u[_], u[_] + a[_], d[_] + l[_], d[_], r));
}
function Rl([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function vS(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Su(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function _S([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function df(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Uo(e, t) {
  return _S(Rl([-e[0], -e[1], -e[2], e[3]], t));
}
function ku(e, t, n) {
  return Rl(e, df(Uo(e, t).map((r) => n * r)));
}
function Mu(e, t) {
  const n = vS(e, t);
  if (Math.abs(n) > ff) return n < 0;
  const [r, o, a] = Uo(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > ff) return l < 0;
  return !1;
}
function Ys(e) {
  const { x: t, y: n, z: r, w: o } = yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function pf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function wS(e, t, n, r) {
  const o = Ys(e[n].value);
  let a = Ys(e[n + 1].value);
  Mu(o, a) && (a = Su(a));
  const l = t[n + 1] - t[n], u = Uo(o, a);
  let d = u;
  if (aa(e, n)) {
    let O = Ys(e[n - 1].value);
    Mu(O, o) && (O = Su(O)), d = sa(t, n, Uo(o, O), u).map((z) => z * l);
  }
  let b = u;
  if (aa(e, n + 1)) {
    let O = Ys(e[n + 2].value);
    Mu(a, O) && (O = Su(O)), b = sa(t, n + 1, Uo(a, o), Uo(a, O)).map((z) => z * l);
  }
  const y = Rl(o, df(d.map((O, z) => 0.5 * (O - u[z])))), _ = Rl(a, df(u.map((O, z) => 0.5 * (O - b[z])))), [x, N, S, v] = ku(ku(o, a, r), ku(y, _, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: $, rollDeg: W } = F0(cs({ x, y: N, z: S, w: v })), I = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: pf(F, I.yaw_deg, V.yaw_deg, r),
    pitch_deg: $,
    roll_deg: pf(W, I.roll_deg, V.roll_deg, r)
  };
}
function fs(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function $l(e) {
  return Math.sqrt(fs(e, e));
}
function Vl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function L0(e, t) {
  const n = fs(e, t), r = t.map((l, u) => l - n * e[u]), o = $l(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function Ko(e, t) {
  const n = $l(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Xs(e, t, n) {
  return Ko(e, L0(e, t).map((r) => n * r));
}
function Nu(e, t) {
  const n = Vl(e[t].value), r = Vl(e[t + 1].value), o = fs(n, r), a = o < 0 && $l(r.map((d, b) => d - o * n[b])) <= ff;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = L0(n, r);
  const u = $l(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function xS(e, t, n, r) {
  const o = Vl(e[n].value), a = Vl(e[n + 1].value), [l, u, d] = Nu(e, n);
  let b = l, y = u;
  const _ = t[n + 1] - t[n];
  aa(e, n) && (b = sa(t, n, Nu(e, n - 1)[1].map((I) => -I), b).map((I) => I * _)), aa(e, n + 1) && (y = sa(t, n + 1, y.map((I) => -I), Nu(e, n + 1)[0]).map((I) => I * _));
  let x, N, S;
  if (d) {
    const I = Math.PI, V = us(0, fs(b, l) / I / 3, I - fs(y, u) / I / 3, I, r);
    [x, N, S] = Ko(o, l.map((O) => V * O / I));
  } else {
    const I = Xs(Ko(o, b.map((z) => z / 3)), Ko(a, y.map((z) => -z / 3)), r), V = Xs(Ko(o, b.map((z) => r * z / 3)), I, r), O = Xs(I, Ko(a, y.map((z) => -(1 - r) * z / 3)), r);
    [x, N, S] = Xs(V, O, r);
  }
  const v = Math.hypot(x, S), F = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= gS ? F + ($ - F) * r : pf(Math.atan2(x, S) * 180 / Math.PI, F, $, r), pitch_deg: Math.atan2(N, v) * 180 / Math.PI };
}
function SS(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = D0(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function kS(e, t, n, r) {
  return D0(e, t, e.map((o) => o.value), n, r);
}
const MS = { position: bS, rotation: wS, direction: xS, size: SS };
function hn(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Us(e[t].value);
  if (n <= r[0].frame + no) return Us(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - no) return Us(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + no; ) a += 1;
  const l = r[a];
  if (Math.abs(n - l.frame) <= no || l.easing === "hold") return Us(l.value);
  const u = r.map((b) => b.frame), d = yS(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (MS[t] ?? kS)(r, u, a, d);
}
function hf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function NS(e) {
  return Math.min(1, Math.max(0, e));
}
function R0(e) {
  return Math.max(1e-6, e);
}
function $0(e, t) {
  return t - (e.start - e.in);
}
function Ci(e, t) {
  return t >= e.start - no && (e.duration === null || t < e.start + e.duration - no);
}
function zl(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = $0(o.clip, n);
  return {
    frame: n,
    camera: {
      position: hn(r, "position", n),
      ...hn(r, "rotation", n),
      hFOV_deg: hf(hn(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Ci(o.clip, n),
      clip_frame: a,
      position: hn(o, "position", a),
      ...hn(o, "rotation", a),
      scale: R0(hn(o, "scale", a))
    },
    stickers: e.stickers.map((l) => uo(l, n))
  };
}
function PS(e, t) {
  if (e.placement === "world")
    return {
      position: hn(e, "position", t),
      ...hn(e, "rotation", t),
      scale: R0(hn(e, "scale", t))
    };
  const n = hn(e, "size", t);
  return {
    ...hn(e, "direction", t),
    roll_deg: hn(e, "roll", t),
    hFOV_deg: hf(n.hFOV_deg),
    vFOV_deg: hf(n.vFOV_deg)
  };
}
function uo(e, t) {
  const n = $0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Ci(e.clip, t),
    clip_frame: n,
    ...PS(e, n),
    opacity: NS(hn(e, "opacity", n))
  };
}
const AS = 2, CS = ["sky", "world"], IS = ["input", "output", "temp"], V0 = [0.42, 0, 0.58, 1];
function an(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Yt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function jl(e, t) {
  const n = Yt(e, t);
  return n !== null && n > 0 ? n : t;
}
function ir(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function fo(e) {
  const t = Yt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function gm(e, t) {
  return typeof e == "boolean" ? e : t;
}
function z0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Yt(n, null));
  return t.includes(null) ? null : t;
}
function j0(e) {
  return z0(e) || [0, 0, 0];
}
function H0(e) {
  const t = an(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: ir(Yt(t.pitch_deg, 0), -90, 90),
    roll_deg: Yt(t.roll_deg, 0)
  };
}
function ES(e) {
  return ir(Yt(e, 90), 0.1, 179);
}
function OS(e) {
  return jl(e, 1);
}
function FS(e) {
  const t = an(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: ir(Yt(t.pitch_deg, 0), -90, 90)
  };
}
function TS(e) {
  return Yt(e, 0);
}
function DS(e) {
  const t = an(e) ? e : {};
  return {
    hFOV_deg: ir(Yt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: ir(Yt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function G0(e) {
  return ir(Yt(e, 1), 0, 1);
}
const pd = [["position", j0], ["rotation", H0], ["fov", ES]], mc = [["position", j0], ["rotation", H0], ["scale", OS]], hd = [["direction", FS], ["roll", TS], ["size", DS], ["opacity", G0]], md = [...mc, ["opacity", G0]];
function LS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Yt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...V0];
}
function RS(e) {
  if (!an(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = z0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function $S(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!an(o)) continue;
    const a = fo(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: LS(o.easing) }, u = n ? RS(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function mf(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = an(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: $S(a.keyframes, o, r === "position") };
  }
  return n;
}
function K0(e) {
  const t = an(e) ? e : {}, n = fo(t.start), r = fo(t.in), o = fo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function VS(e) {
  const t = an(e) ? e : {}, n = ir(Yt(t.x0, 0), 0, 1), r = ir(Yt(t.y0, 0), 0, 1), o = ir(Yt(t.x1, 1), 0, 1), a = ir(Yt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function zS(e) {
  if (!an(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: IS.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function jS(e) {
  const t = zS(e.source);
  if (!t) return null;
  const n = CS.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: K0(e.clip),
    visible: gm(e.visible, !0),
    locked: gm(e.locked, !1),
    crop: VS(e.crop),
    ...mf(e, r ? md : hd)
  };
  return r || (o.z_index = fo(e.z_index) ?? 0), o;
}
function HS(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = an(a) ? jS(a) : null;
    if (l) {
      if (l.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(l);
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
function Hl(e) {
  const t = an(e.timeline) ? e.timeline : {}, n = an(e.camera) ? e.camera : {}, r = an(e.scene) ? e.scene : {}, o = fo(t.length);
  return {
    version: AS,
    timeline: {
      fps: jl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: jl(n.aspect, 1), ...mf(n, pd) },
    scene: { clip: K0(r.clip), ...mf(r, mc) },
    stickers: HS(e.stickers),
    painting: Qo(e.painting),
    painting_layer: an(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function GS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!an(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function KS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!an(t)) return {};
  const n = ir(Yt(t.hFOV_deg, 90), 1, 179), r = ir(Yt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function WS(e) {
  const t = an(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(an) : [];
  return n.sort((r, o) => Yt(r.z_index, 0) - Yt(o.z_index, 0)), Hl({
    camera: KS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: GS(r, t),
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
function mo(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Hl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!an(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? WS(t) : Hl(t);
}
function Pu(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function ym(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function W0(e, t) {
  if (jl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => fo(l * n), { length: o } = e.timeline, a = ym(e.scene.clip, r);
  return Hl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...Pu(e.camera, pd, r, 0, 0) },
    scene: { clip: a.clip, ...Pu(e.scene, mc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = ym(l.clip, r), y = l.placement === "world" ? md : hd;
      return { ...l, clip: u, ...Pu(l, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Au(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function B0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function gd(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= no);
}
function U0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? B0(e.keyframes[r - 1].easing) : [...V0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function oi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Au(o.value, r);
    return;
  }
  const a = gd(o, n);
  a ? a.value = Au(a.value, r) : U0(o, n, Au(hn(e, t, n), r));
}
function bo(e) {
  return e.placement === "world" ? md.map(([t]) => t) : e.placement === "sky" ? hd.map(([t]) => t) : (e.clip ? mc : pd).map(([t]) => t);
}
function BS(e, t) {
  for (const n of bo(e))
    gd(e[n], t) || U0(e[n], t, hn(e, n, t));
}
function US(e) {
  const t = bo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function YS(e, t) {
  return bo(e).every((n) => !!gd(e[n], t));
}
function XS(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = hn(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function qS(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const l of t) {
    const u = e[l], d = u.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), b = new Set(d.map((y) => y.frame));
    u.keyframes = [
      ...u.keyframes.filter((y) => !a.has(y.frame) && !b.has(y.frame)),
      ...d
    ].sort((y, _) => y.frame - _.frame);
  }
  return r;
}
function Y0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function JS(e, t, n) {
  const r = Y0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function ZS(e, t, n, r) {
  for (const o of Y0(e, t, n)) o.easing = B0(r);
}
function QS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function ek(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function tk(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function bm(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function gf(e) {
  return bo(e).map((t) => e[t]);
}
function yf(e, { camera: t = !1 } = {}) {
  return [...t ? [e.camera] : [], e.scene, ...e.stickers].some((n) => gf(n).some((r) => r.keyframes.length > 0)) || !bm(e.scene.clip) || e.stickers.some((n) => !bm(n.clip));
}
function X0(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o)
    for (const l of gf(e.camera))
      for (const u of l.keyframes) a = Math.max(a, u.frame + 1);
  for (const l of [e.scene, ...e.stickers]) {
    const { clip: u } = l;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of gf(l))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return a;
}
function nk(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let qs = { text: null, parsed: null };
function Kn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Gl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function rk({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Kn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Qo(null),
    painting_layer: null,
    ui_settings: Gl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function q0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function ik(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function ok(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function ak(e) {
  return Array.isArray(e) ? e.map((t) => A0(t)) : [];
}
function sk(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function J0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = rk(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (qs.text === o ? a = qs.parsed : (a = JSON.parse(o), qs = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const l = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: ik(a.assets),
      stickers: ok(a.stickers),
      shots: ak(a.shots),
      painting: Qo(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Gl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = Gl({ ...u.ui_settings, ...l })), u.output_preset = q0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Kn(n.coverage), delete u.editor_history, u;
  } catch {
    return qs = { text: o, parsed: null }, r;
  }
}
function vm(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function lk(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function ck(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Z0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = mo(e);
  } catch {
    d = mo(null);
  }
  return u && u !== d.timeline.fps && (d = W0(d, u)), {
    ...d,
    coverage: Kn(o),
    bg_color: r,
    output_preset: q0(n),
    ui_settings: Gl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function uk(e, t) {
  const n = W0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of bo(a)) a[u].keyframes = l[u].keyframes;
    }
}
function yd(e, t) {
  const n = uo(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const fk = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function _m(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function dk(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[fk[n]].keyframes.length));
}
function Q0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = _m(n, ["yaw_deg", "pitch_deg"]), a = _m(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && oi(e, "direction", r, o), n.rot_deg !== void 0 && oi(e, "roll", r, n.rot_deg), Object.keys(a).length && oi(e, "size", r, a);
}
const ey = ["position_x", "position_y", "position_z"];
function pk(e, t, n) {
  oi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function hk(e, t) {
  const n = uo(e, t);
  return {
    ...Object.fromEntries(ey.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function mk(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = ey.indexOf(n);
  if (a >= 0) {
    const l = hn(e, "position", o);
    l[a] = r, oi(e, "position", o, l);
  } else n === "scale" ? oi(e, "scale", o, r) : n === "opacity" ? oi(e, "opacity", o, r / 100) : oi(e, "rotation", o, { [n]: r });
}
function gk(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && oi(e, o, r, n[o]);
}
function yk(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function bk(e, t, n) {
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
function hl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ty(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function bd(e, t, n, r) {
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
function vk(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Wt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function bf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function ny(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function ry(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function iy(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? mo(t) : t);
}
function oy(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(mo(n)) === t;
  } catch {
    return !1;
  }
}
const Cu = 0.15, _k = 0.01, wk = 1e-3, xk = 0.05, Sk = 4, wm = 250, kk = 16, ro = 1, Mk = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function lr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Lr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function vd(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function da(e, t, n = 0) {
  const r = Xn(e, t, n), o = Lr(r, 2);
  return { right: Lr(r, 0), up: Lr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function Nk(e, t) {
  return e === "6dof" ? t : { ...t, position: [0, 0, 0] };
}
function ay(e, t) {
  return t === "3dof" ? { mode: t, position: [0, 0, 0], moved: !1 } : { ...e, mode: t };
}
function Pk(e, t) {
  return t || e.mode === "3dof" ? e : ay(e, "3dof");
}
function Ak(e) {
  return lr(e.position, da(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Ti(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ts(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function gc(e, t) {
  return ts(Ti(t, e.position), da(e.yaw_deg, e.pitch_deg).forward);
}
function Ck(e, t, n = null, r = ro) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * xk;
  if (n && gc(e, n) > 0) {
    const a = Ti(n, e.position), l = Math.hypot(...a);
    return l >= o ? n : lr(e.position, a, o / l);
  }
  return lr(e.position, da(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Ik(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Sk ? !1 : t.time - e.time < wm || e.cost > kk && t.time - e.wheelTime < wm;
}
function _d(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * $t);
  return { tanX: r, tanY: r * n / t };
}
function Ek(e, t, n, r, o = Ak(e)) {
  const a = Wt(e.yaw_deg + t / r * 360), l = q(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Xn(e.yaw_deg, e.pitch_deg, 0), d = Xn(a, l, 0), b = Ti(e.position, o), y = [0, 1, 2].map((x) => ts(Lr(u, x), b)), _ = { ...e, yaw_deg: a, pitch_deg: l, position: lr(o, vd(d, y)) };
  return { ..._, distance: gc(_, o) };
}
function Ok(e, t, n, r, o, a = e.distance) {
  const { right: l, up: u } = da(e.yaw_deg, e.pitch_deg), d = 2 * a * _d(e, r, o).tanY / o;
  return { ...e, position: lr(lr(e.position, l, -t * d), u, n * d), distance: a };
}
function Fk(e, t, n, r = ro) {
  const o = Ti(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const l = Math.max(r, 1e-6), u = l * _k, d = n > 0 ? Math.min(Math.max(a * Cu, u), a - l * wk) : -Math.max(a * Cu / (1 - Cu), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: lr(e.position, o, d / a) };
  return { ...b, distance: gc(b, t) };
}
function Tk(e, t, n, r) {
  const { tanX: o, tanY: a } = _d(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = da(e.yaw_deg, e.pitch_deg);
  return { ...e, position: lr(t.center, d, -u), distance: u };
}
function Iu(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: ro }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(_d(e, t, n).tanY) * sn,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function vf(e, t, n, r) {
  const { right: o, up: a, forward: l } = sy(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * $t), y = b * e.aspect, _ = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + _ / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function sy(e) {
  const t = cs(e.quaternion), n = Lr(t, 2);
  return { right: Lr(t, 0), up: Lr(t, 1), forward: n.map((r) => -r) };
}
function xm(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function Dk({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function ly(e, t) {
  if (!e || !t.active) return null;
  const n = $k(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: cy(t),
    itemQuaternion: e.kind === "splat" ? Mk : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Lk(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], l = ly(e, a);
  return l && { ...l, id: o.id, opacity: a.opacity, value: a };
}
function Rk(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function $k(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function cy(e) {
  return {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function _f(e, t) {
  return lr(e.position, vd(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function wf(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function xf({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function Sf(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function Vk(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...xf(t).map((a) => _f(e.scene, a)));
  for (const a of n) o.push(...wd(a));
  for (const { box: a, value: l } of r) o.push(...xf(a).map((u) => _f(l, u)));
  return o;
}
function zk(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Xn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function wd(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => lr(e.position, vd(e.rotation, [r, o, 0])));
}
function jk(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? Sf(wd(o)) : a != null && a.box ? Sf(xf(wf(a.kind, a.box)).map((l) => _f(r, l))) : { center: [...r.position], radius: r.scale };
}
const Hk = 2, Gk = 0.5, Kk = 30;
function Wk(e, t) {
  const n = Ti(t, e), r = Math.atan2(n[0], -n[2]) * sn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * sn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function Bk(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * Gk : Hk, a = t ? [...t] : lr(e.position, da(e.yaw_deg, e.pitch_deg).forward, o), l = Math.hypot(...Ti(a, e.position)), u = l > 0 ? Wk(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(l, 1e-3) * Math.tan(Kk * 0.5 * $t);
  return { position: a, rotation: u, scale: d };
}
function Sm(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function Uk(e) {
  return [0, 1, 2].map((t) => Lr(e, t));
}
function Yk(e, t, n, r) {
  if (e === "translate") return { position: lr(t.position, Ti(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Qk(n.scale, r.scale) / n.scale };
  const o = Sm(cs(r.quaternion), Uk(cs(n.quaternion))), a = Sm(o, Xn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: l, pitchDeg: u, rollDeg: d } = F0(a);
  return Math.abs(u) <= Xk ? { rotation: { yaw_deg: l + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: qk(a, t.yaw_deg) } };
}
const Xk = 89.9;
function qk(e, t) {
  const n = Lr(e, 0), r = Lr(e, 1), o = Math.cos(t * $t), a = Math.sin(t * $t);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * sn + 0;
}
const Jk = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Zk(e, t, n, r, o) {
  if (!vf(e, t, r, o)) return null;
  const { right: a, up: l, forward: u } = sy(e), d = Ti(t, e.position), b = ts(d, a), y = ts(d, l), _ = ts(d, u), x = Math.tan(e.fovY_deg * 0.5 * $t), N = x * e.aspect, S = Math.hypot(b, y, _) * Jk[n] * Math.min(1.9 * x, 7) / 4;
  if (!(_ > S)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const v = (V) => {
    const O = S * Math.sqrt(V * V + _ * _ - S * S);
    return [(V * _ - O) / (_ * _ - S * S), (V * _ + O) / (_ * _ - S * S)];
  }, [F, $] = v(b), [W, I] = v(y);
  return {
    minX: r * 0.5 * (1 + F / N),
    maxX: r * 0.5 * (1 + $ / N),
    minY: o * 0.5 * (1 - I / x),
    maxY: o * 0.5 * (1 - W / x)
  };
}
function Qk(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, l) => Math.abs(l - e) > Math.abs(a - e) ? l : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function eM(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const km = 2048, uy = 0.28;
function fy(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * $t);
  return {
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * sn,
    aspect: r
  };
}
function ml(e) {
  const t = di(e);
  return {
    quaternion: yo(Xn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function tM(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = dd(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * sn,
      vFOV_deg: 2 * Math.atan(a / r) * sn
    }
  };
}
function dy(e, t, n) {
  const [[r, o, a], [l, u, d], [b, y, _]] = cs(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * $t), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, v = 1e-4) {
      const F = mS(S), $ = r * F.x + l * F.y + b * F.z, W = o * F.x + u * F.y + y * F.z, I = -(a * F.x + d * F.y + _ * F.z), V = Math.max(I, v);
      return {
        x: t * 0.5 * (1 + $ / V / N),
        y: n * 0.5 * (1 - W / V / x),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, v) {
      const F = (S / t * 2 - 1) * N, $ = (1 - v / n * 2) * x;
      return cd(pl({
        x: r * F + o * $ - a,
        y: l * F + u * $ - d,
        z: b * F + y * $ - _
      }));
    }
  };
}
function nM(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = zl(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const _ = n(u);
    if (!_) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * $t), N = Math.tan(b.vFOV_deg * 0.5 * $t), { crop: S } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
      opacity: y ? uy : b.opacity,
      zIndex: r(u),
      quaternion: yo(Xn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * x,
        x1: (2 * S.x1 - 1) * x,
        y0: (1 - 2 * S.y1) * N,
        y1: (1 - 2 * S.y0) * N
      }
    });
  });
  for (const u of o) l.push({ kind: "erp", ...u });
  return l.sort((u, d) => u.zIndex - d.zIndex);
}
function py(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return nM(e, t, {
    media: (l) => {
      const u = a.get(l.id);
      return u ? r(u) : null;
    },
    zIndex: (l) => {
      var u;
      return Number(((u = a.get(l.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: o
  });
}
function rM(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function iM(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = zl(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), _ = y ? r(y) : null;
    if (!_) return;
    const { width: x, height: N } = rM(_.media), S = zk(b, u.crop, x, N);
    S && l.push({
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
      opacity: b.opacity,
      position: S.position,
      quaternion: S.quaternion,
      rotation: S.rotation,
      width: S.width,
      height: S.height,
      crop: u.crop
    });
  }), l;
}
const Eu = /* @__PURE__ */ new WeakMap();
let oM = 1;
function kf(e) {
  return Eu.has(e) || Eu.set(e, oM++), Eu.get(e);
}
function Mm(e) {
  return e && typeof e == "object" ? kf(e) : e;
}
function Nm({ background: e, layers: t }) {
  return JSON.stringify([
    e && [kf(e.media), Mm(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, kf(n.media), Mm(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function aM({ onReady: e, onFailed: t, onUpdate: n = () => {
} }) {
  let r = null, o = !1;
  const a = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(l) {
      return r ? r.render(l) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(l) {
      return r ? r.renderUnwrap(l) : null;
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(l) {
      return r ? r.sceneBox(l) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(l, u, d, b, y) {
      return r ? r.pick(l, u, d, b, y) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(l, u, d, b, y) {
      return r ? r.pickSticker(l, u, d, b, y) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(l, u, d, b, y, _) {
      return r ? r.gizmoPointer(l, u, d, b, y, _) : null;
    },
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-I4xKe56s.js").then((l) => l.$).then((l) => {
    o || (r = l.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((l) => {
    console.error("[PanoramaStickers] three.js view is unavailable", l), a.failed = !0, t();
  }), a;
}
const hy = "3D view unavailable. Check the browser console.";
function Kl(e, t, n) {
  return fy({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function sM(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((l) => {
      if (n = !1, !o.size) {
        l.dispose();
        return;
      }
      t = l, o.forEach((u) => u.onChange());
    }).catch((l) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", l), o.forEach((u) => u.onChange()));
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
const my = sM(
  () => import("./.lazy/pano_three_view-I4xKe56s.js").then((e) => e.$).then((e) => e.createThreeView())
), Di = ["erp_image", "bg_erp", "bg_media"], xd = ["sticker_image", "sticker"], gy = ["scene"], lM = {
  background: Di,
  "external-sticker": xd,
  scene: gy
};
function yy(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function by(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = yy(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function cM(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function vy(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function uM(e, t) {
  const { graph: n, entry: r } = vy(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = yy(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const _y = [...Di, ...xd, ...gy], fM = 256, Wo = /* @__PURE__ */ new Map(), Ou = /* @__PURE__ */ new WeakMap();
let wy = () => null;
function xy(e) {
  return Ou.has(e) || Ou.set(e, JSON.stringify(e)), Ou.get(e);
}
function dM(e) {
  wy = e;
}
function Wl(e, t) {
  const n = xy(e);
  Wo.delete(n), Wo.set(n, t), Wo.size > fM && Wo.delete(Wo.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? wy(e) : null;
  if (!n) return !0;
  const r = by(e);
  let o = Wo.get(xy(n));
  if (o)
    Wl(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => _y.includes(l == null ? void 0 : l.name)))) return !0;
    Wl(n, r), o = r;
  }
  return lM[t].every((l) => o[l] === r[l]);
}
const Bl = /* @__PURE__ */ new WeakSet();
async function Mf(e, t) {
  if (Bl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Bl.add(e), n.ok && r !== void 0 ? r : null;
}
function Sy(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = vy(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => _y.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: uM(n, t) };
}
const gl = /* @__PURE__ */ new Map();
function pM(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && gl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Mf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = Sy(o, a);
        l && Wl(l.output, l.inputs);
      }
    });
}
const hM = 5;
function mM(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${hM}`, r = Mf(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, Mf(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, y, _, x;
      const d = String(l.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const S = await a(N);
        if ((b = S == null ? void 0 : S.outputs) != null && b[d])
          return ((x = (_ = (y = S.workflow) == null ? void 0 : y.prompt) == null ? void 0 : _[d]) == null ? void 0 : x.class_type) !== l.comfyClass ? null : Sy(S, d);
      }
      return null;
    }
  };
}
function gM(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let Ro = null;
async function yM(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Bl.has(n) || (u = gl.get(o)) != null && u.has(r) || gM(t)) return null;
  (Ro == null ? void 0 : Ro.workflowId) !== o && (Ro = { workflowId: o, history: mM(n, o) }, queueMicrotask(() => {
    Ro = null;
  }));
  const l = await Ro.history.lastNodeOutput(e, a);
  return a() ? l ? (Wl(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (Bl.has(n) || gl.set(o, (gl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Pm(e, t, n, r = Di) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const Am = /\.(mp4|webm|mov|m4v|mkv)$/i;
function yl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Am.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Am.test(String((e == null ? void 0 : e.filename) || ""));
}
const Fu = /* @__PURE__ */ new WeakMap();
function bM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Nf(e) {
  return bM(e) ? (Fu.has(e) || Fu.set(e, Math.random().toString(36).slice(2, 10)), Fu.get(e)) : "run";
}
function ky(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function vM(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function Sd(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const l = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const u of l)
      if (Array.isArray(u))
        for (const d of u) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function _M({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var F;
  const r = ((F = e == null ? void 0 : e.createElement) == null ? void 0 : F.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, l = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || l || r.paused || r.ended || (l = r.requestVideoFrameCallback(() => {
      l = 0, !a && (o(), d());
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
  }, y = () => o(), _ = () => {
    o(), d();
  }, x = () => o();
  let N = !1;
  const S = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", _), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var $, W;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", _), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (W = r.load) == null || W.call(r));
  }, failed: () => N };
}
function Ui(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function wM(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Cm(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const l = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = l ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(l.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = wM(e == null ? void 0 : e.graph, n)), r;
}
function xM(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function SM(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function kM(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function My({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const z = String(O[0] || "").trim();
      if (z)
        return Ui(t, {
          filename: z,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const K of O) {
        const J = o(K);
        if (J) return J;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Ui(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const z = String(O.type || "").trim().toLowerCase();
    if (z === "dataurl") return String(O.value || "");
    if (z !== "comfy_image") return "";
    const K = String(O.filename || "").trim();
    return K ? Ui(t, {
      filename: K,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, l = (O) => {
    const z = e == null ? void 0 : e.nodeOutputs;
    if (!z || O == null) return null;
    const K = String(O);
    return z instanceof Map ? z.get(O) || z.get(K) || z.get(Number(K)) || null : z[O] || z[K] || null;
  }, u = (O, z) => {
    var J;
    const K = l(O == null ? void 0 : O.id);
    return Array.isArray((J = K == null ? void 0 : K.ui) == null ? void 0 : J[z]) ? K.ui[z] : Array.isArray(K == null ? void 0 : K[z]) ? K[z] : [];
  }, d = (O, z) => {
    const K = l(O == null ? void 0 : O.id);
    return K != null && K.ui && Object.prototype.hasOwnProperty.call(K.ui, z) ? K.ui[z] : K && Object.prototype.hasOwnProperty.call(K, z) ? K[z] : null;
  }, b = (O, z) => {
    const K = d(O, "pano_sticker_input_state_hash"), J = Array.isArray(K) ? K[0] : K;
    return String(J ?? "").trim() || kM(z);
  }, y = (O) => {
    const z = [], K = /* @__PURE__ */ new Set();
    for (const J of O || []) {
      const _e = o(J);
      !_e || K.has(_e) || (K.add(_e), z.push(_e));
    }
    return z;
  }, _ = (O, z) => {
    var _e;
    const K = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && K.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && K.push(O.ui.images);
    const J = [];
    for (const T of K)
      z >= 0 && z < T.length && J.push(T[z]), J.push(...T);
    return J;
  }, x = (O, z) => {
    var ee;
    const K = String(z || "").trim();
    if (!K) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === K);
    if (_e < 0) return { src: "", sourceType: "", inputName: K };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: K };
    const C = T.origin_id, ue = Cm(O, _e, C);
    if (!ue) return { src: "", sourceType: "", inputName: K };
    const de = Number(T.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ue) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const Y = [];
      de >= 0 && de < pe.length && Y.push(pe[de]), Y.push(...pe);
      const Ie = y(Y.filter((Oe) => !yl(Oe)));
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "appNodeImageUrls", inputName: K };
    }
    const U = l((ue == null ? void 0 : ue.id) ?? C), X = y(_(U, de).filter((Y) => !yl(Y))).map((Y) => `${Y}&pano_src=${Nf(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: K };
    const H = Array.isArray(ue == null ? void 0 : ue.imgs) ? ue.imgs : [];
    if (H.length) {
      const Y = [];
      de >= 0 && de < H.length && Y.push(H[de]), Y.push(...H);
      const Ie = y(Y);
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "nodeImgs", inputName: K };
    }
    const A = (ee = ue == null ? void 0 : ue.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (A) {
      let Y = o(A.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (ue.comfyClass === "LoadImage" || ue.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: K };
    }
    return { src: "", sourceType: "", inputName: K };
  }, N = (O, z = []) => {
    var J;
    const K = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of z) {
      const T = K.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === _e), C = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const ue = l(((J = Cm(O, T, C.origin_id)) == null ? void 0 : J.id) ?? C.origin_id), de = (Array.isArray(ue == null ? void 0 : ue.images) ? ue.images : []).find(yl);
      return de ? `${Ui(t, de)}&pano_src=${Nf(ue)}` : "";
    }
    return "";
  }, S = (O, z = []) => {
    const K = Array.isArray(z) ? z : [z];
    for (const J of K) {
      const _e = x(O, J);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const z = String(O || "").trim();
    if (!z) return [];
    if (xM(z)) return [z];
    const { filename: K, subfolder: J } = SM(z);
    return K ? y([
      Ui(t, { filename: K, subfolder: J, type: "temp" }),
      Ui(t, { filename: K, subfolder: J, type: "output" }),
      Ui(t, { filename: K, subfolder: J, type: "input" }),
      z
    ]) : [z];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var z, K;
      try {
        (K = (z = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : z.forEach) == null || K.call(z, (J, _e, T) => {
          var C;
          J != null && J.img && ((C = r == null ? void 0 : r.isImageLoadFailed) != null && C.call(r, J.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, z) => {
      var K;
      (K = O == null ? void 0 : O.delete) == null || K.call(O, `__ui__${String(z || "")}`);
    },
    linkedValue: (O, z) => {
      var C, ue, de, pe;
      const K = String(z || ""), J = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === K) : -1, _e = J >= 0 && O.graph ? O.getInputLink(J) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (ue = U == null ? void 0 : U.data) == null ? void 0 : ue.result,
          (de = U == null ? void 0 : U.ui) == null ? void 0 : de.output,
          (pe = U == null ? void 0 : U.ui) == null ? void 0 : pe.result
        ];
        for (const H of X) {
          if (!Array.isArray(H)) continue;
          const A = H[Number(_e.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === K) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (O, z = [], K = null, J = "") => {
      var kt;
      const _e = Array.isArray(z) ? z : [z], T = S(O, _e), ue = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((yt) => String(yt || "").trim()).filter(Boolean);
      if (!ue.length) return null;
      const de = y(ue.flatMap((yt) => v(yt)));
      if (!de.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const pe = String(J || _e.join("|") || "image_exact"), U = ue.join(`
`), X = O.__panoLinkedInputImageCache.get(pe);
      if (X && X.srcRaw === U && X.img) return X.img;
      const H = n || globalThis.Image;
      if (typeof H != "function") return null;
      const A = new H();
      (kt = r == null ? void 0 : r.markImageLoading) == null || kt.call(r, A, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: A };
      O.__panoLinkedInputImageCache.set(pe, ee);
      let Y = -1;
      const Ie = (yt) => {
        var cn, at, qn;
        yt === "ready" ? (cn = r == null ? void 0 : r.markImageReady) == null || cn.call(r, A, U) : (at = r == null ? void 0 : r.markImageFailed) == null || at.call(r, A, U), K == null || K(A), (qn = O.setDirtyCanvas) == null || qn.call(O, !0, !0);
      }, Oe = () => {
        if (Y += 1, Y >= de.length) {
          Ie("failed");
          return;
        }
        ee.resolvedSrc = de[Y], A.src = ee.resolvedSrc;
      };
      return A.onload = () => Ie("ready"), A.onerror = () => {
        if (Y + 1 < de.length) {
          Oe();
          return;
        }
        Ie("failed");
      }, Oe(), A;
    },
    output: l,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (O, z, K, J = null) => {
      var U, X, H;
      const _e = u(O, z)[0] || null, T = o(_e);
      if (!T) return null;
      const C = `__ui__${z}`, ue = (U = K == null ? void 0 : K.get) == null ? void 0 : U.call(K, C);
      if (ue && ue.__panoSrc === T) return ue;
      const de = n || globalThis.Image;
      if (typeof de != "function") return null;
      const pe = new de();
      return pe.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, pe, T), pe.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, pe, T), J == null || J(pe);
      }, pe.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, pe, T), J == null || J(pe);
      }, pe.src = T, (H = K == null ? void 0 : K.set) == null || H.call(K, C, pe), pe;
    },
    uiList: u,
    uiValue: d
  };
}
const MM = 1e-3;
function Ny(e, t, n, r) {
  if (!Ci(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(MM / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Py(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function NM(e, t) {
  return Math.floor(e * t.fps);
}
function Ay(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Im = 4;
function Cy({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((x, N) => x !== n[N])) && (n = l, r.clear(), o = null), u === null) return null;
      const y = NM(u, d);
      for (let x = y; x < Math.min(n.length, y + Im + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + Im) && x !== o && r.delete(x);
      const _ = r.get(y);
      return _ != null && _.complete && _.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function Iy({
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
  let l = null, u = !1, d = !1;
  const b = () => l || e(), y = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || l ? !1 : (l = e(), u = !1, y(), !0);
    },
    updateGesture(_) {
      if (d) return !1;
      l || this.beginGesture();
      const x = t(l, _);
      return x.changed ? (l = x.state, u = !0, r(l), y(), !0) : !1;
    },
    hasGestureChanges() {
      return l != null && u;
    },
    commitGesture() {
      if (d || !l) return !1;
      const _ = u;
      return _ && o(l), l = null, u = !1, r(null), y(), _;
    },
    cancelGesture() {
      return d || !l ? !1 : (l = null, u = !1, r(null), y(), !0);
    },
    apply(_) {
      if (d) return !1;
      l && this.commitGesture();
      const x = t(e(), _);
      return x.changed ? (o(x.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const _ = l != null;
      l = null, u = !1, _ && r(null);
    }
  };
}
const bl = "sticker_image_1", Ey = "external_image", la = 0;
function ea(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Tu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Oi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Pf(e, t = la) {
  return (e == null ? void 0 : e.version) !== 2 ? Oi(e) : Oi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: uo(n, t).active,
    external: n.source.kind === "port",
    ...yd(n, t)
  }));
}
function kd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Oi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Oy(e) {
  return String((e == null ? void 0 : e.id) || "") === bl || String((e == null ? void 0 : e.source_kind) || "") === Ey;
}
function Md(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Oy(t);
}
const Fy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Ty(e) {
  return !Oy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Fy.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Dy(e) {
  const t = Ty(e);
  return t ? Fy.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Ly(e, t = {}) {
  var V, O, z;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((K) => String((K == null ? void 0 : K.id) || "") === bl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const K = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === bl;
    return {
      state: {
        ...e,
        stickers: n.filter((J, _e) => _e !== r),
        active: K ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, _ = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, S = u ? N.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || N.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(S)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const K = ea(v, _, x), J = Number(((O = l == null ? void 0 : l.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = ea(J, _, x), T = Number(((z = l == null ? void 0 : l.initial_pose) == null ? void 0 : z.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - K) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((C, ue) => ue === r ? {
          ...C,
          vFOV_deg: K,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: _e } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const F = n.reduce((K, J) => Math.max(K, Number((J == null ? void 0 : J.z_index) || 0)), -1), $ = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: y ? ea(v, _, x) : Number(N.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, W = {
    ...l || {},
    id: bl,
    source_kind: Ey,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: F + 1
  }, I = r >= 0 ? n.map((K, J) => J === r ? W : K) : [...n, W];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function Em(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const PM = ["IMAGE", "VIDEO"];
function Om(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => PM.includes(n)) ? "2d" : null;
}
function AM(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Om(r.type) ?? Om((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Ry(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Em(e, "sticker"),
    awaitingPose: !t && (Em(e, "sticker_state") || AM(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Fm(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return mo({ version: 2, stickers: [n] }).stickers[0];
}
function $y(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((F) => Md(e, F)), u = l >= 0 ? e.stickers[l] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const F = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter(($, W) => W !== l),
        active: F ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const F = { ...Fm(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map(($, W) => W === l ? F : $) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const F = [u.size.value, ...u.size.keyframes.map((I) => I.value)], $ = F.map((I) => ea(I.hFOV_deg, o, a));
    if (F.every((I, V) => Math.abs(I.vFOV_deg - $[V]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...u.size.value, vFOV_deg: $[0] },
      keyframes: u.size.keyframes.map((I, V) => ({ ...I, value: { ...I.value, vFOV_deg: $[V + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((I, V) => V === l ? { ...I, size: W } : I) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((F) => F.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Fm(`sticker_${y}`, r)] }, changed: !0 };
  const _ = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (F) => d ? ea(F, o, a) : F, N = bd(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: _,
    vFOV_deg: x(_)
  }, Oi(e).reduce((F, $) => Math.max(F, $.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = S.direction ?? [], N.roll.keyframes = S.roll ?? [], N.size.keyframes = (S.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: x(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function Nd(e) {
  const t = Oi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Tu(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Tu(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Tu(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function Vy(e) {
  const t = kd(e), n = Md(e, t), r = Oi(e).some((u) => u && u.visible !== !1), o = Nd(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Dy(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function CM(e) {
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
function Tm(e, t) {
  const n = kd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = CM(e), o = String(n.id || ""), a = Nd(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function IM(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function EM(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Ly(e, t.value);
  if (t.type === "sync-port") return $y(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = Nd(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ea(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, bd(a, hl(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const _ = { id: a, asset_id: l, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [l]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], _],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Oi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = kd(e);
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
    const o = Ty(n);
    return !o || !Dy(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Tm(e, "front");
  if (t.type === "send-back") return Tm(e, "back");
  if (t.type === "delete-selected") {
    if (Md(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Oi({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = IM(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? yd(n, la) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = dk(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return Q0(b, la, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
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
function OM(e = {}) {
  return Iy({
    ...e,
    reduce: EM,
    projectModel: Vy
  });
}
const Af = 2;
function Zi(e, t) {
  return Math.floor(e * t + 0.5);
}
function FM(e, t) {
  return Math.floor(e * t + 1e-3);
}
function zy({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, y = !1, _ = { name: "idle" }, x = [];
  const N = () => b && !y, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of x) ee();
    x = [];
  }
  function F(ee, Y = {}) {
    return v(), _ = { name: ee, ...Y }, u(), _;
  }
  function $(ee, Y, Ie) {
    const Oe = () => {
      _ === ee && Ie();
    };
    e.addEventListener(Y, Oe), x.push(() => e.removeEventListener(Y, Oe));
  }
  function W(ee, Y) {
    let Ie = t.requestFrame(function Oe(kt) {
      _ === ee && (Y(kt), _ === ee && (Ie = t.requestFrame(Oe)));
    });
    x.push(() => t.cancelFrame(Ie));
  }
  function I(ee) {
    d = ee, a(d);
  }
  function V() {
    return F(y ? "error" : "idle");
  }
  function O() {
    y = !0, V();
  }
  function z() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function K(ee) {
    if (!N()) return ee === "play" ? ue() : V();
    if (e.readyState < Af) {
      const Y = F("loading", { then: ee });
      return $(Y, "loadeddata", () => K(Y.then)), $(Y, "error", O), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? ue() : J(ee, !1);
  }
  function J(ee, Y) {
    const Ie = z();
    if (!e.ended && Zi(Number(e.currentTime), n()) === Zi(Ie, n())) return _e(ee);
    const Oe = F("seeking", { then: ee, frame: d, retried: Y });
    return $(Oe, "seeked", () => {
      const kt = Zi(Number(e.currentTime), n()) === Zi(z(), n()), yt = d === Oe.frame;
      kt || yt && Oe.retried ? _e(Oe.then) : J(Oe.then, yt);
    }), $(Oe, "error", O), e.currentTime = Ie, Oe;
  }
  function _e(ee) {
    return ee === "play" ? T() : (l(), V());
  }
  function T() {
    const ee = F("playingVideo", { shown: !1 });
    if ($(ee, "pause", () => e.ended ? C() : U()), $(ee, "ended", C), $(ee, "error", O), o() && Zi(Number(e.duration), n()) >= r()) {
      const Ie = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ie;
      });
    }
    const Y = (Ie, Oe) => {
      Oe && !ee.shown && (ee.shown = !0, u()), de(Zi(Ie, n()));
    };
    if (S()) {
      let Ie = e.requestVideoFrameCallback(function Oe(kt, yt) {
        _ === ee && (Y(Number(yt.mediaTime), !0), _ === ee && (Ie = e.requestVideoFrameCallback(Oe)));
      });
      x.push(() => {
        var Oe;
        return (Oe = e.cancelVideoFrameCallback) == null ? void 0 : Oe.call(e, Ie);
      });
    } else
      W(ee, () => Y(Number(e.currentTime), e.readyState >= Af));
    return Promise.resolve(e.play()).catch(() => {
      _ === ee && U();
    }), ee;
  }
  function C() {
    l(), ue();
  }
  function ue() {
    const ee = F("playingClock", { startTs: t.now(), startFrame: d });
    return W(ee, (Y) => de(ee.startFrame + Math.floor((Y - ee.startTs) / 1e3 * n()))), ee;
  }
  function de(ee) {
    if (ee < r()) {
      I(ee);
      return;
    }
    if (!o()) {
      pe(r() - 1);
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), I(0), K("play");
  }
  function pe(ee) {
    _.name === "playingVideo" ? (v(), e.pause(), I(Math.max(0, ee)), l()) : I(Math.max(0, ee)), K("still");
  }
  function U() {
    if (_.name === "loading" || _.name === "seeking")
      _.then = "still", u();
    else if (_.name === "playingVideo") {
      v(), e.pause();
      const ee = FM(Number(e.currentTime), n());
      I(Math.min(ee, r() - 1)), l(), d === ee ? V() : K("still");
    } else _.name === "playingClock" && pe(Math.min(d, r() - 1));
  }
  function X() {
    if (!A()) {
      if (d >= r() - 1 && I(0), _.name === "loading" || _.name === "seeking") {
        _.then = "play", u();
        return;
      }
      K("play");
    }
  }
  function H(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (_.name === "loading" || _.name === "seeking") {
      _.then = "still", I(Y), u();
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), I(Y), K("still");
  }
  function A() {
    return _.name === "playingVideo" || _.name === "playingClock" || _.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return _.name;
    },
    get playing() {
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return _.name === "playingVideo" || _.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return _.name === "playingVideo" && _.shown;
    },
    play: X,
    stop: U,
    seek: H,
    toggle() {
      A() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ee) {
      v(), b = !!ee, y = !1, K("still");
    },
    dispose() {
      v(), b = !1, _ = { name: "idle" };
    }
  };
}
function jy({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function y(v) {
    l = v, e.currentTime = v;
  }
  function _() {
    const v = d;
    x(), d !== v && n();
  }
  function x() {
    if (!r || o || e.readyState < Af) return;
    const { time: v, playing: F, fps: $ } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (F) {
      if (l !== null) return;
      const W = Number(e.duration), I = Number.isFinite(W) ? Math.min(v, W) : v, V = Math.abs(Number(e.currentTime) - I) > 1.5 / $;
      if (e.ended && !V) return;
      V && y(I), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(l !== null || u === v) && (Number(e.currentTime) === v ? b(v) : y(v));
  }
  const N = {
    loadeddata: _,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: _,
    seeked: () => {
      const v = l;
      l = null, !a.playing && v === a.time ? b(v) : _();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [v, F] of Object.entries(N)) e.addEventListener(v, F);
  function S(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: $ = !1, fps: W }) {
      v !== r && (S(v), n()), a = { time: F, playing: $, fps: W }, _();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, F) {
      return !r || o ? F : a.time === null ? null : a.playing && d ? e : u === null ? F : v;
    },
    dispose() {
      for (const [v, F] of Object.entries(N)) e.removeEventListener(v, F);
      S("");
    }
  };
}
function TM(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function DM({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", y = "", _ = 0;
  const x = /* @__PURE__ */ new Set();
  let N = null, S = null;
  const v = () => o().timeline.fps, F = (T) => T.stickers.find((C) => C.source.kind === "port"), $ = () => {
    const T = o(), C = F(T);
    return X0(T, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(_ * v()) : 0,
        N && C ? Py(C.clip, v(), N.meta) : 0
      )
    });
  }, W = zy({
    video: e,
    clock: r,
    fps: v,
    span: $,
    loop: () => !0,
    onFrame: a,
    onCapture: l,
    onChange: d
  }), I = () => {
    y === b && Number.isFinite(e.duration) && (_ = e.duration);
  }, V = () => {
    y && (x.add(y), d());
  }, O = jy({ video: t, onCapture: u, onChange: d }), z = Cy({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", I), e.addEventListener("error", V);
  function K(T) {
    T !== y && (y = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), W.setSource(!!T));
  }
  function J() {
    W.playing && W.stop();
  }
  function _e(T) {
    const C = F(T);
    S = N && C ? Ny(C.clip, W.frame, T.timeline.fps, N.meta) : null, O.follow({
      src: (N == null ? void 0 : N.src) || "",
      time: S,
      playing: W.advancing,
      fps: T.timeline.fps
    });
  }
  return {
    get frame() {
      return W.frame;
    },
    get playing() {
      return W.playing;
    },
    get showsVideo() {
      return W.showsVideo;
    },
    get source() {
      return y;
    },
    pause: J,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return N;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, C) {
      return N != null && N.frames ? z.picture(N.frames, S, N.meta, C) : O.picture(T, C);
    },
    toggle() {
      W.playing ? W.stop() : W.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: C, state: ue, sticker: de = null }) {
      if (N = T ? de : null, !T)
        return J(), K(""), _e(ue), !1;
      for (const A of x)
        C.includes(A) || x.delete(A);
      const pe = C.find((A) => A && !x.has(A)) || "", U = pe !== b;
      U && (b = pe, _ = 0), K(b);
      const X = yf(ue) || !!b && W.state !== "error" || !!N;
      return X || J(), (U || !X || !W.playing && W.frame >= $()) && W.frame !== la && W.seek(la), _e(ue), X;
    },
    dispose() {
      W.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", I), e.removeEventListener("error", V), e.pause(), e.removeAttribute("src"), e.load(), y = "";
    }
  };
}
const Ul = Math.PI / 180, Tr = 180 / Math.PI, LM = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), RM = 260;
function Dm(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Hy(e, t) {
  return t ? Hy(t, e % t) : e;
}
function $M(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Hy(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function ds(e, t) {
  const n = Dm(e), r = Dm(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: $M(n, r) };
}
function po(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Gy(e) {
  const t = po(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ei(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Pd(e, t, n = LM) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, $, W) => {
    const I = F + $, V = Math.max(0, W - 1), O = I > V && I > 0 ? V / I : 1;
    return [F * O, $ * O];
  }, [y, _] = b(d, l, r), [x, N] = b(a, u, o), S = {
    x: y,
    y: x,
    w: Math.max(1, r - y - _),
    h: Math.max(1, o - x - N)
  }, v = ud(S, t);
  return {
    x: S.x + (S.w - v.width) * 0.5,
    y: S.y + (S.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: S
  };
}
function VM(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pd({ width: n, height: r }, 1), a = q(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Ul * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = O0(d, P0(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), y = zM(b, fa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), _ = fd({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: _.hFOV_deg
  };
}
function Ky(e) {
  return {
    yaw: Wt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Tr),
    pitch: q(Math.asin(q(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Tr, -89.9, 89.9)
  };
}
function zM(e, t) {
  const n = Ky(e), r = fa(n.yaw, n.pitch, 0), o = xu(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, l = Math.hypot(a.x, a.y, a.z);
  if (!(l > 1e-8)) return { ...n, roll: 0 };
  const u = {
    x: a.x / l,
    y: a.y / l,
    z: a.z / l
  };
  return {
    ...n,
    roll: hc(Math.atan2(
      xu(u, r.up),
      xu(u, r.right)
    ) * Tr)
  };
}
function Wy(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pd({ width: n, height: r }, co(e)), a = lo(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = O0(e, P0(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Ky(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: q(2 * Math.atan(n / (2 * a)) * Tr, 1, 179)
  };
}
function jM(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = lo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: y } = dd(d, u), _ = {
    x: a - b,
    y: l - y,
    w: b * 2,
    h: y * 2
  }, x = _.x <= 0 && _.y <= 0 && _.x + _.w >= r && _.y + _.h >= o, N = r / o, S = Math.tan(uf * Ul), v = N >= 1 ? S : S * N, F = N >= 1 ? S / N : S;
  return {
    focalPx: u,
    rect: _,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Tr,
      vFOV_deg: 2 * Math.atan(y / u) * Tr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Tr,
        vFOV_deg: 2 * Math.atan(F) * Tr
      }
    }
  };
}
function $o(e, t) {
  const n = po(e);
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
function HM(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = lo(n, e);
    return fd(ud(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: dl(a, t) };
}
function Lm(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = ds(t, n);
  if (!a) return e;
  const l = co(e) >= 1;
  r && a.ratio >= 1 !== l && (a = ds(a.height, a.width));
  const u = HM(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function By(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (po(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = C0({
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
    const r = po(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((l) => l !== r), a = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
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
    return $o(e, (r) => Lm(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return $o(e, (r) => {
      const a = String(ei(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? ds(a[1], a[2]) : ds(co(r), 1);
      return l ? Lm(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? $o(e, (o) => {
      const a = hc(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? $o(e, (r) => {
    const o = I0(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? $o(e, (r) => {
    const o = E0(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? $o(e, (r) => {
    const o = Xy(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Uy({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: l = 0.05
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
  if (u === "shift" && y < Math.min(d.w, d.h) * l) return null;
  const _ = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: _,
    accumulatedRad: 0
  };
}
function Yy(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + M0(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: N0(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Xy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ul, d = Math.cos(u), b = Math.sin(u), y = a / n, _ = -l / n, x = y * d - _ * b, N = y * b + _ * d, S = Number(e.pitch_deg || 0) * Ul, v = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Wt(Number(e.yaw_deg || 0) - Math.atan(x) / v * Tr),
    pitch_deg: q(Number(e.pitch_deg || 0) - Math.atan(N) * Tr, -90, 90)
  };
}
function GM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Iy({
    readState: e,
    reduce: By,
    projectModel: Gy,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Me = Object.freeze({
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
  dof_6: "dof_6"
}), KM = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, WM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: KM(t[2])
})), BM = {
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
  dof_6: { name: "arrows-move", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 9l3 3l-3 3' /><path d='M15 12h6' /><path d='M6 9l-3 3l3 3' /><path d='M3 12h6' /><path d='M9 18l3 3l3 -3' /><path d='M12 15v6' /><path d='M15 6l-3 -3l-3 3' /><path d='M12 3v6' />" }
}, Rm = Object.fromEntries(
  Object.entries(BM).map(([e, t]) => [e, {
    name: t.name,
    elements: WM(t.body)
  }])
), Ct = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Rm, r) ? Rm[r] : null;
    });
    return (r, o) => n.value ? (te(), ce("svg", {
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
      (te(!0), ce(Ue, null, bt(n.value.elements, (a, l) => (te(), ce(Ue, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${l}`
      }, [
        a.tag === "path" ? (te(), ce("path", ni({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (te(), ce("circle", ni({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (te(), ce("rect", ni({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (te(), ce("line", ni({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (te(), ce("polyline", ni({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (te(), ce("polygon", ni({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ut("", !0)
      ], 64))), 128))
    ], 2)) : ut("", !0);
  }
}, Qt = {
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
    return (r, o) => (te(), sr(Sw(e.tag), ni({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Wg(() => [
        De(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, UM = ["aria-expanded", "disabled"], YM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, XM = ["data-aspect", "disabled", "onClick"], qM = { class: "pano-cutout-aspect-custom" }, JM = ["disabled"], ZM = ["disabled"], QM = ["data-custom-width", "data-custom-height", "disabled"], qy = {
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
    ]), a = /* @__PURE__ */ Ut("1"), l = /* @__PURE__ */ Ut("1"), u = /* @__PURE__ */ Ut(null), d = dt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = dt(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return v.length ? v.map(($) => {
        const W = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), I = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || W);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: W,
          label: I,
          active: F ? W === F : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === F
      }));
    }), y = dt(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find(($) => $.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    ao(y, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], l.value = F[2]);
    }, { immediate: !0 });
    function _(v) {
      r("action", v);
    }
    function x(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = u.value) != null && F.contains(v.target) || _({ type: "close-aspect" }));
    }
    uc(() => {
      document.addEventListener("pointerdown", x, !0);
    }), ys(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(v) {
      const [F, $] = String(v.value || "").split(":");
      _({
        type: "set-aspect",
        width: F,
        height: $,
        preserveOrientation: !0
      });
    }
    function S() {
      _({
        type: "set-aspect",
        width: a.value,
        height: l.value,
        preserveOrientation: !1
      });
    }
    return (v, F) => (te(), ce("div", {
      ref_key: "rootElement",
      ref: u,
      class: ct(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (te(), sr(Qt, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Me).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = ($) => _({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (te(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = ($) => _({ type: "toggle-aspect" }))
      }, [
        De(Ct, {
          icon: e.model.aspectIcon || Qe(Me).aspect
        }, null, 8, ["icon"]),
        B("span", null, it(y.value), 1),
        De(Ct, {
          icon: Qe(Me).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, UM)),
      li(B("div", YM, [
        (te(!0), ce(Ue, null, bt(b.value, ($) => (te(), ce("button", {
          key: $.value,
          class: ct(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (W) => N($)
        }, it($.label), 11, XM))), 128)),
        B("div", qM, [
          li(B("input", {
            "onUpdate:modelValue": F[2] || (F[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, JM), [
            [im, a.value]
          ]),
          F[4] || (F[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          li(B("input", {
            "onUpdate:modelValue": F[3] || (F[3] = ($) => l.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, ZM), [
            [im, l.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, QM)
        ])
      ], 512), [
        [ho, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, eN = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, tN = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (te(), ce("div", {
      class: ct(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(Qt, {
        icon: Qe(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", eN, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (te(!0), ce(Ue, null, bt(Qe(n), (a) => (te(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, it(a[0]), 1),
          B("span", null, it(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, nN = {
  class: "pano-view-unavailable",
  role: "status"
}, Ad = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (te(), ce("div", nN, it(Qe(hy)), 1));
  }
}, rN = { class: "pano-cutout-node-surface" }, iN = ["title", "disabled"], oN = { class: "value" }, aN = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, sN = {
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
    return (r, o) => (te(), ce("div", rN, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = At(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = At(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Me).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(Qt, {
          icon: e.model.hasShot ? Qe(Me).delete : Qe(Me).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(qy, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        B("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = At((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Ct, {
            icon: Qe(Me).roll
          }, null, 8, ["icon"]),
          B("span", oN, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, iN),
        De(Qt, {
          icon: Qe(Me).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(tN)
      ], 32),
      e.model.hasShot === !1 ? (te(), ce("div", aN, " Choose a view · + Add Frame ")) : ut("", !0),
      e.model.viewUnavailable ? (te(), sr(Ad, { key: 1 })) : ut("", !0)
    ]));
  }
}, Jy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Ut(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const _ = a;
      return a = void 0, l = !1, { active: !0, intent: _ };
    }
    function d(_) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = _, l = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(_) {
      var v, F;
      const { active: x, intent: N } = u();
      if (!x) return;
      const S = ((F = (v = _.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: N, file: S });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: _, intent: x } = u();
      _ && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (_, x) => (te(), ce("input", {
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
}, lN = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, cN = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), n = Object.freeze([
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
    return (r, o) => (te(), ce("div", {
      class: ct(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(Qt, {
        icon: Qe(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", lN, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (te(!0), ce(Ue, null, bt(Qe(n), (a) => (te(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, it(a[0]), 1),
          B("span", null, it(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, uN = { class: "pano-stickers-node-surface" }, fN = ["disabled"], dN = ["aria-label", "data-tip"], pN = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, hN = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, mN = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ut(null);
    function r(l) {
      var u;
      (u = t.onAction) == null || u.call(t, l);
    }
    function o() {
      var l, u;
      (u = (l = n.value) == null ? void 0 : l.open) == null || u.call(l, "add");
    }
    function a(l) {
      r({ type: "add-image-file", file: (l == null ? void 0 : l.file) || null });
    }
    return (l, u) => (te(), ce("div", uN, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = At(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = At(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Me).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Ct, {
            icon: Qe(Me).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, fN),
        De(Qt, {
          icon: e.model.locked ? Qe(Me).lock_closed : Qe(Me).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(Qt, {
          icon: Qe(Me).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(Qt, {
          icon: Qe(Me).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(Qt, {
          icon: e.model.isExternalSelection ? Qe(Me).back_initial : Qe(Me).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(cN)
      ], 32),
      e.model.playable === !0 ? (te(), ce("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = At(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = At(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Ct, {
          icon: e.model.playing ? Qe(Me).pause : Qe(Me).play
        }, null, 8, ["icon"])
      ], 40, dN)) : ut("", !0),
      e.model.hasStickers === !1 ? (te(), ce("div", pN, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (te(), ce("div", hN, "Drop image to add")) : ut("", !0),
      De(Jy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (te(), sr(Ad, { key: 3 })) : ut("", !0)
    ]));
  }
}, $m = 24;
function gN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Vm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function yN(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Cf(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Vm(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Vm(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : yN(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Cd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Zy(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ra(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: q(n.x, -r, t.width + r),
    y: q(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function bN(e) {
  const t = fa(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(q(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * $t * 0.5),
    tanY: Math.tan(q(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * $t * 0.5)
  };
}
function Yi(e, t, n) {
  return cd(Tl(
    Tl(e.centerDir, Dl(e.right, t)),
    Dl(e.up, n)
  ));
}
function Id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = bN(e), r = Ra(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Yi(n, -n.tanX, n.tanY),
    Yi(n, n.tanX, n.tanY),
    Yi(n, n.tanX, -n.tanY),
    Yi(n, -n.tanX, -n.tanY)
  ].map((x) => Ra(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const S = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let $, W;
      N === 0 ? ($ = -n.tanX + 2 * n.tanX * F, W = n.tanY) : N === 1 ? ($ = n.tanX, W = n.tanY - 2 * n.tanY * F) : N === 2 ? ($ = n.tanX - 2 * n.tanX * F, W = -n.tanY) : ($ = -n.tanX, W = -n.tanY + 2 * n.tanY * F);
      const I = Ra(Yi(n, $, W), t);
      I && S.push({ x: I.x, y: I.y });
    }
    return S;
  }), l = Ra(Yi(n, 0, n.tanY), t), u = Ra(
    Yi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, y = u.y - l.y, _ = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / _ * $m,
      y: l.y + y / _ * $m
    },
    visible: !0
  };
}
function zm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: Id(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = Cf(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = Cf(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function vN(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Wt(Math.atan2(r.x, r.z) * sn),
    pitch_deg: Math.asin(q(r.y, -1, 1)) * sn
  };
}
function _N(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: q(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: q(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function wN(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * sn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Js = null;
function Ed() {
  return Js || (Js = new Promise((e) => {
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
  }), Js);
}
function nr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function xN(e, t = 1024) {
  const n = Math.max(1, Math.round(nr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(nr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function SN(e, t, n) {
  const r = nr(t), o = nr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const l = nr(a.u0), u = nr(a.v0), d = nr(a.u1), b = nr(a.v1);
  if (d <= l || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((l + d) * 0.5 + nr(y.du)) * r,
    centerY: ((u + b) * 0.5 + nr(y.dv)) * o,
    width: (d - l) * r,
    height: (b - u) * o,
    rotationRad: nr(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, nr(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function kN(e, t, n) {
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
function MN() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, l] of e) {
        if (e.size <= 16) break;
        l.settled && (l.image.onload = null, l.image.onerror = null, e.delete(a));
      }
  }
  function r(a, l) {
    let u = e.get(a);
    if (u)
      return e.delete(a), e.set(a, u), !u.settled && typeof l == "function" && u.listeners.add(l), u.image;
    const d = new Image();
    u = { image: d, listeners: new Set(typeof l == "function" ? [l] : []), settled: !1 }, e.set(a, u);
    const b = () => {
      u.settled = !0;
      const y = [...u.listeners];
      u.listeners.clear(), y.forEach((_) => _()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, l, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), y = SN(a, l, u);
    if (!b.startsWith("data:") || !y) return null;
    const _ = kN(a, l, u), x = String((a == null ? void 0 : a.id) || "").trim() || _, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === _) return { source: N.source, revision: _ };
    const S = r(b, d), v = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || v < 1 || F < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(l)), $.height = Math.max(1, Math.round(u));
    const W = $.getContext("2d");
    return W ? (y.wrapOffsets.forEach((I) => {
      W.save(), W.translate(y.centerX + I, y.centerY), W.rotate(y.rotationRad), W.scale(y.scale, y.scale), W.drawImage(
        S,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), W.restore();
    }), t.set(x, { revision: _, source: $ }), { source: $, revision: _ }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const l = new Set(Array.from(a, (u) => String(u || "").trim()).filter(Boolean));
      for (const u of t.keys())
        l.has(u) || t.delete(u);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function NN(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function PN(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function AN({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(_) {
    if (!_) return;
    _.entry.listeners.delete(_);
    const x = r.get(_.owner);
    (x == null ? void 0 : x.get(_.key)) === _ && x.delete(_.key);
  }
  function l(_, x, N, S) {
    if (!_ || typeof S != "function" || N.settled) return;
    let v = r.get(_);
    v || (v = /* @__PURE__ */ new Map(), r.set(_, v));
    const F = v.get(x);
    if ((F == null ? void 0 : F.entry) === N) {
      F.callback = S;
      return;
    }
    a(F);
    const $ = { owner: _, key: x, entry: N, callback: S };
    v.set(x, $), N.listeners.add($);
  }
  function u(_, x) {
    _.settled || (_.settled = !0, _.image.onload = null, _.image.onerror = null, !x && n.get(_.key) === _ && n.delete(_.key), [..._.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(_.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(_) {
    if (!(n.size <= _))
      for (const [x, N] of n) {
        if (n.size <= _) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function b(_, x, N, S = null) {
    const v = String(x || ""), F = String(N || "");
    if (!v || !F) return null;
    let $ = n.get(v);
    if ($)
      n.delete(v), n.set(v, $);
    else {
      d(o - 1);
      const I = e || globalThis.Image;
      if (typeof I != "function") return null;
      const V = new I();
      $ = { key: v, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, $), V.onload = () => u($, !0), V.onerror = () => u($, !1), V.src = F;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || l(_, v, $, S), $.image;
  }
  function y(_) {
    const x = r.get(_);
    x && ([...x.values()].forEach(a), r.delete(_), d(o));
  }
  return { get: b, disposeOwner: y };
}
const Ka = /* @__PURE__ */ new WeakMap();
function Qy(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Ka.get(e);
  r || (r = [], Ka.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const l = Ka.get(e);
    if (!l) return;
    const u = l.indexOf(o);
    u >= 0 && l.splice(u, 1), l.length === 0 && Ka.delete(e);
  };
}
function ai(e, ...t) {
  const n = Ka.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const vl = Object.freeze({
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
}), eb = "PanoramaSuite.Editor.ViewControls", CN = {
  id: eb,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(vl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function IN(e) {
  return Object.hasOwn(vl, e) ? vl[e] : vl.default;
}
function EN(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const l = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (l == null ? void 0 : l.action) ?? null;
}
function ON(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Yl = "state_json";
function si(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function FN(e) {
  var l, u;
  const t = si(e, Yl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = J0(n, {
    coverage: (l = si(e, "coverage")) == null ? void 0 : l.value
  }), o = By(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Od(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = si(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, y, _, x, N, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), (S = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || S.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function TN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function jm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function DN(e) {
  var y, _, x, N, S, v;
  if (!e) return;
  const t = si(e, "coverage"), n = si(e, "bg_color"), r = si(e, Yl), o = si(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && TN(a) && (jm(l) || l === ""))) return;
  let b = "360";
  if (jm(l))
    try {
      b = String(Kn((y = JSON.parse(l)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (_ = t.callback) == null || _.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = l, (N = r.callback) == null || N.call(r, l), o && (o.value = u, (S = o.callback) == null || S.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function _l(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function If(e, t, n) {
  var a, l;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((u) => String((u == null ? void 0 : u.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (l = o.parentEl) != null && l.style && (o.parentEl.style.display = "");
    const u = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(u) || Number(u[0] || 0) <= 0 || Number(u[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function LN(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function Wa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), l = a.catch(() => {
  });
  e.__panoStickerOperationTail = l, e.__panoPendingStickerUploads.set(t, a);
  const u = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(u, u), l.then(() => {
    e.__panoStickerOperationTail === l && (e.__panoStickerOperationTail = null);
  }), a;
}
async function tb(e, t = {}) {
  var r;
  await LN(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function RN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await tb(e), n ? n.apply(this, r) : this.value;
  };
}
function $N(e) {
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
function VN(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Du(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: l,
  enableStickersPreview: u,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function b(y) {
    var N;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    $N(y), Od(y, t), _l(y, Yl);
    const x = si(y, Yl);
    if (RN(y, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (v) => {
        var $;
        const F = S ? S(v) : void 0;
        return ($ = y.setDirtyCanvas) == null || $.call(y, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const S = si(y, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (N = S.callback) == null || N.call(S, "#00ff00")), If(y, r, () => o(y, "stickers")), u && (a(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && _l(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
      return;
    }
    If(y, r, () => o(y, "cutout")), l(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && _l(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const _ = e.prototype[y];
    e.prototype[y] = function() {
      const x = _ ? _.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && FN(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && DN(this);
      const N = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && b(this), y === "onAdded" && N && ai(this, "attach"), x;
    };
  }
}
function zN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return VN(this), r;
  };
}
function jN(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const l = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), u = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = u, !l && u < 40) {
      o(a);
      return;
    }
    Od(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    If(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && _l(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function HN({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: l,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [CN],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && Du(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && Du(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && Du(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), Ll(y) && zN(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Od(d, e), Ll(b) && jN(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const GN = /\.(png|jpe?g|webp|gif|bmp)$/i;
function br(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : GN.test(String(e.name || "")) : !1;
}
function Fd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => br(n)) : !1;
}
function KN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, _;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (_ = d == null ? void 0 : d.stopImmediatePropagation) == null || _.call(d);
  }, a = (d) => {
    if (Fd(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, l = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, u = (d) => {
    var y;
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((_) => br(_));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", l, !0), e.addEventListener("drop", u, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", l, !0), e.removeEventListener("drop", u, !0), n(!1);
  };
}
async function Ba(e, t = {}) {
  var l, u, d, b;
  if (!br(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((_, x) => {
      const N = new n();
      N.onload = () => _(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
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
async function Qi(e, { fetchApi: t } = {}) {
  if (!br(e)) throw new TypeError("A supported image file is required.");
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
const Hm = /* @__PURE__ */ new WeakSet(), Gm = /* @__PURE__ */ new WeakSet();
let Km = 0;
function Ef(e) {
  if (!e || typeof e != "object" || Gm.has(e)) return e;
  const t = String(e.type || "preview");
  return Km += 1, e.type = `${t}:pano-${Km}`, Gm.add(e), e;
}
function Xl(e) {
  if (!e || typeof e != "object" || Hm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Hm.add(e), e;
}
function nb(e, t) {
  var r, o;
  if (!t || ((o = (r = Xl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function WN({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Rt } = al;
dM((e) => Fi(e.id));
pM(Bt);
const Td = AN(), { linkedVideoFile: BN } = My({ app: Rt, api: Bt });
function Of() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (al == null ? void 0 : al.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const UN = "pano_suite.ui_settings.v1", YN = 120, XN = 2048;
function Wm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(UN)) || "").trim();
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
function qN() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function $a(e) {
  var n, r, o, a, l;
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
    styleTransform: String(((l = e.style) == null ? void 0 : l.transform) || "")
  };
}
function JN() {
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
function Ff(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const a = Number(r), l = Number(o);
    return !Number.isFinite(a) || !Number.isFinite(l) ? null : [a, l];
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
function rb(e) {
  const t = Ff(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function ZN(e, t, n) {
  rb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Tf(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function ib(e) {
  return Ll(Dd(e));
}
function Bm(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function ob(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Tf(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && wl(e), G2(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Tf(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      wl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      wl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function QN(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function wl(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  Df.unregister(e), QN(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (u = (l = n.root) == null ? void 0 : l.remove) == null || u.call(l);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const y = String((b == null ? void 0 : b.name) || ""), _ = String((b == null ? void 0 : b.type) || ""), x = Of();
      return y === x || _ === x || y === "pano_preview" || _ === "pano_preview" ? !0 : y === "preview" && _ === "pano_preview";
    }).forEach((b) => _2(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function e2(e, t = "#00ff00") {
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
function t2(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ta(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Ln(e) {
  var u, d;
  const t = t2(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ta(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ta(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? Z0(t, { backgroundColor: r, coverage: o, active: ny(e) }) : e2(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function ta(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function n2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function ab(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const l = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = l ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(l.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = n2(e == null ? void 0 : e.graph, n)), r;
}
function r2(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function sb(e, t = []) {
  const n = r2(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Di.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Um(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ql(e, t) {
  const n = Um(e), r = Um(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function i2(e, t) {
  var n;
  return ab(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function o2(e, t = Di) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = sb(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return vM(e, l, i2);
}
const Df = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Bt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, _, x;
        if (!a) return;
        const l = ql(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![...o2(a)].some((N) => ql(r, N)) || ky(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (lb(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (_ = a.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Bt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Bt) != null && e.removeEventListener) || (Bt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Jl(e) {
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
  return typeof ((a = Bt) == null ? void 0 : a.apiURL) == "function" ? Bt.apiURL(o) : o;
}
function a2(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function s2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function l2(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function c2(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (a2(t)) return [t];
  const { filename: n, subfolder: r } = s2(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Jl({
    filename: n,
    subfolder: r,
    type: a
  }));
  return l2([...o, t]);
}
function u2(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Jl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Fi(e) {
  const t = Rt == null ? void 0 : Rt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (ql(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const l of a)
      if (ql(l, o)) return t[l];
  }
  return null;
}
function ns(e, t, n = null) {
  const r = n || Fi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Bn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Bn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Jl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Jl(e);
}
function Zl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Lu(e) {
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
function f2(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function d2(e, t) {
  try {
    e.__panoOwnOutputRev = NN(e.__panoOwnOutputRev);
    const n = f2(t);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Ld(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function na(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function p2(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return na(e), null;
  const o = Fi(r), a = Sd(o, t, Bn);
  if (!a)
    return na(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = Ld(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  na(e);
  const y = _M({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function h2(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = sb(e, t).map((_) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(_))).filter((_) => _ >= 0), a = n.map((_, x) => ({ input: _, idx: x })).filter(({ input: _ }) => String((_ == null ? void 0 : _.type) || "").toUpperCase() === "IMAGE").map(({ idx: _ }) => _), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const _ of l) {
    const x = n[_], N = e.graph ? e.getInputLink(_) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const S = N.origin_id, v = ab(e, _, S);
    if (!v) continue;
    const F = Number(N.origin_slot ?? 0), $ = Fi((v == null ? void 0 : v.id) ?? S), W = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (W.length) {
      const z = [];
      F >= 0 && F < W.length && z.push(W[F]), z.push(...W);
      for (const K of z.filter((J) => !yl(J))) {
        const J = Bn(K);
        if (J)
          return String((x == null ? void 0 : x.name) || ""), { src: `${J}&pano_src=${Nf($)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Rt == null ? void 0 : Rt.getNodeImageUrls) == "function" ? Rt.getNodeImageUrls(v) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const z = [];
      F >= 0 && F < I.length && z.push(I[F]), z.push(...I);
      for (const K of z) {
        const J = Bn(K);
        if (J)
          return String((x == null ? void 0 : x.name) || ""), { src: J, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const V = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (V.length) {
      const z = [];
      F >= 0 && F < V.length && z.push(V[F]), z.push(...V);
      for (const K of z) {
        const J = Bn(K);
        if (J)
          return String((x == null ? void 0 : x.name) || ""), { src: J, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image");
    if (O) {
      let z = Bn(O.value);
      if (z && !z.includes("/") && !z.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (z = Bt.apiURL(`/view?filename=${encodeURIComponent(z)}&type=input&subfolder=`)), z)
        return String((x == null ? void 0 : x.name) || ""), { src: z, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = xn(e, "background") ? Fi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const _ of d) {
      const x = Bn(_);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function m2(e, t = [], n = {}) {
  const r = h2(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = c2(o);
  if (!a.length) return null;
  const l = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return l && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = b, e.__panoLinkedInputImageCache.set(u, y);
  let _ = -1;
  const x = () => {
    var S, v, F, $;
    if (_ += 1, _ >= a.length) {
      if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[_];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, S, v;
    ((S = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : S.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (N) => {
    var S, v, F, $;
    if (_ + 1 < a.length) {
      x();
      return;
    }
    if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), l && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function g2(e, t = [], n = null, r = {}) {
  const o = m2(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function lb(e) {
  var t, n;
  if (e) {
    Td.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, na(e), e.__panoWrappedErpCache = null;
  }
}
function y2(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, na(e), e.__panoWrappedErpCache = null;
  }
}
function cb(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Zs(e, t, n = "") {
  const r = cb(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < YN ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Ym(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function b2(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, _ = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, _, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, _ + b * 0.5 + 0.5), e.restore();
}
function Ru(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function v2(e) {
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
function _2(e, t) {
  return nb(e, t);
}
function ps(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = u2(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const N = Fi(e == null ? void 0 : e.id), S = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const v of Array.isArray(S) ? S : [S])
      if (a = Bn(v), a) break;
  }
  if (!a) return null;
  const l = ns(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Ld(a, d) : a, y = PN(a, u, d);
  return Td.get(e, y, b, (N, S) => {
    var v, F;
    S && (r != null && r.external && e.__panoOutputFromRun && ai(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function w2(e, t) {
  var _, x, N, S;
  const n = N2(e, t), r = P2(t), o = Array.isArray((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) ? t.painting.groups : [], a = new Map(
    o.filter((v) => v && typeof v == "object").map((v) => [String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim(), Number((v == null ? void 0 : v.z_index) || 0)])
  ), l = n ? r.map((v) => {
    const F = n.getGroupDisplayCanvas(v);
    return F ? {
      id: `paint_group:${v}`,
      source: F,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${v}`,
      zIndex: Number(a.get(v) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (S = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || S.call(N, []), l;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = MN()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = xN(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((v) => {
    const F = e.__panoRasterObjectSurfaceCache.get(
      v,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return F ? {
      id: `raster:${String((v == null ? void 0 : v.id) || "")}`,
      source: F.source,
      revision: F.revision,
      zIndex: Number((v == null ? void 0 : v.z_index) || 0),
      opacity: 1,
      visible: (v == null ? void 0 : v.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...l, ...y];
}
function x2(e, t, n, r) {
  var a, l, u, d, b, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const _ = r.convertEventToCanvasOffset(t);
      if (Array.isArray(_) && _.length >= 2)
        return {
          x: Number(_[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(_[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = k2(e, t, r);
  return o || null;
}
function S2(e, t) {
  var _, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (_ = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : _.call(o), l = (t == null ? void 0 : t.ds) || ((x = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : x.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function k2(e, t, n) {
  var o, a;
  const r = S2(t, n || (Rt == null ? void 0 : Rt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function M2(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function N2(e, t) {
  var b, y, _, x, N, S, v, F, $, W, I, V;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (_ = t == null ? void 0 : t.painting) == null ? void 0 : _.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = M2(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = lf(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function P2(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function A2(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function C2(e, t, n) {
  const r = Id(t, n);
  r.visible && Cd(e, r.boundaryEdges, { selected: !1 });
}
function I2(e, t, n) {
  const r = Id(t, n);
  r.visible && (e.save(), Cd(e, r.boundaryEdges, { selected: !0 }), Zy(e, r, { accent: gN(t) }), e.restore());
}
function Lf(e, t, n) {
  return dy(Kl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ql(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? la;
}
function E2(e) {
  return [xn(e, "background") ? Sd(Fi(e.id), ["pano_input_videos"], Bn) : "", BN(e, Di)];
}
function O2(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Fi(e.id), n = ns(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Bn), meta: n };
  const o = Sd(t, ["pano_sticker_input_videos"], Bn);
  return o ? { src: o, meta: n } : null;
}
function F2({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Xm(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: mo({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = ps(e, l.id, ty(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), _ = Ay(b.playback.stickerMedia, u);
        return y ? { media: y, revision: Lu(y), source: _ } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", y = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = ps(e, y, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return Zl(u) ? { media: u, revision: Lu(u) } : null;
  }, o = w2(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: Zl(n) ? { media: n, revision: Lu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: py(e.__panoSurfaceScene.sceneState, Ql(e), t.stickers, { media: r, paintLayers: o })
  };
}
function T2(e, t, n) {
  var V, O, z, K, J, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  cb(e, r);
  const o = Ln(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (z = (O = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : O.refresh) == null || z.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (J = (K = e.__panoStickersNodeSurface) == null ? void 0 : K.session) == null ? void 0 : J.refresh) == null || _e.call(J));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const y = (e.__panoSurfacePlayback ? F2(e.__panoSurfacePlayback) : p2(e, ["pano_input_videos"], () => {
    var C, ue;
    return (ue = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ue.call(C);
  })) || g2(
    e,
    Di,
    () => {
      var C, ue;
      return (ue = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ue.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Zl(y);
  let x = null;
  const N = (C, ue) => {
    x || (x = Xm(e, o, y));
    const de = n.render({ width: C.w, height: C.h, camera: ue, ...x });
    return de && d.drawImage(de.canvas, de.x, de.y, de.width, de.height, C.x, C.y, C.w, C.h), !!de;
  };
  if (r === "cutout") {
    const C = v2(o), ue = A2(y), de = C ? q(di(C).aspect, 0.1, 10) : _ ? q(Number(ue.width / ue.height), 0.05, 20) : 1, pe = Pd(b, de);
    e.__panoCutoutNodeFrame = pe;
    let U = "none";
    const X = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (C)
      if (y && !_)
        U = "loading";
      else if (_) {
        const H = jM({ width: l, height: u }, pe, C);
        [
          !H.fallback || N(H.fallback.rect, ml(H.fallback.shot)),
          N(H.rect, ml(H.shot)),
          !H.fallback || N(pe, ml(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const H = e.__panoLastCutoutShot;
      H ? (e.__panoPreviewView = Wy(H, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), _ ? N(b, Kl(e.__panoPreviewView, l, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    _ || n.release(), n.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(pe.x, pe.y, pe.w, pe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(pe.x + 0.5, pe.y + 0.5, Math.max(0, pe.w - 1), Math.max(0, pe.h - 1)), d.restore()), U === "loading" ? (Ru(e, !1), Zs(e, !0, X)) : U === "empty" ? (Ru(e, !0), Zs(e, !1, "")) : (Ru(e, !1), Zs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!y || _) && (x = Xm(e, o, y), !x.background && !x.layers.length ? (n.release(), S = !0) : S = N(b, Kl(e.__panoPreviewView, l, u)));
  const v = !S && !n.failed;
  Zs(e, v, v ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), v && b2(d, b, Ym(t, b));
  const F = Lf(e, l, u);
  !y && S && D2(d, F, Ym(t, b));
  const $ = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), W = Pf(o, Ql(e)), I = S ? W.find((C) => String((C == null ? void 0 : C.id) || "") === $ && (C == null ? void 0 : C.visible) !== !1) : null;
  S && W.filter((C) => C !== I && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !Zl(ps(e, C.id, null, { external: !0 }))).forEach((C) => C2(d, C, F)), I && I2(d, I, F);
}
function qm(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const l of t) {
    const u = n.project(l);
    if (u.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(u.x, u.y) : (e.moveTo(u.x, u.y), a = !0);
  }
  e.stroke();
}
function D2(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Vn(b, u));
    qm(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Vn(u, b));
    qm(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Vn(0, 0) },
    { name: "Right", dir: Vn(90, 0) },
    { name: "Back", dir: Vn(180, 0) },
    { name: "Left", dir: Vn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const l = Math.max(9, Math.round(11 * n));
  e.font = `500 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Rf(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function L2(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function er(e, t) {
  return L2(e, t) ? !1 : (Rf(e), !0);
}
function Jm() {
  var n;
  const e = (n = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function R2(e) {
  var n;
  if (!e) return;
  const t = (n = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function $2(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !rb(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function V2(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, l;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Zm(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && z2(e, 180, t);
    }
  };
}
function z2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ua(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const j2 = /* @__PURE__ */ new WeakMap();
function ub(e, t) {
  return ky(j2, e, t) ? !1 : (d2(e, t), lb(e), Ua(e), !0);
}
async function H2(e) {
  var n, r;
  const t = await yM(e, Rt, Bt);
  t && (ub(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function G2(e, t = {}) {
  var vo;
  const n = t.__allowStandalone === !0, r = ib(e);
  if (r && !n) {
    Dd(e);
    return;
  }
  r && $2(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Bm(e)
  }, u = "dom", d = l.signature || Bm(e);
  if (Number(e.__panoRebindGeneration || 0), Tf(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ff(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (vo = e.__panoDomPreview) != null && vo.widget || (e.__panoLegacyPreviewHooked && wl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, _ = b ? 0 : RM, x = document.createElement("div");
  if (JN(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    _ > 0 ? `min-height:${_}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const j = Xl(Ef(
      e.addDOMWidget(Of(), "preview", x, Zm(e, null))
    ));
    Ua(e), e.__panoDomPreview = { widget: j, root: x, requestDraw: () => {
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
  const S = document.createElement("canvas");
  S.style.cssText = [
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
  const v = document.createElement("div");
  v.style.cssText = [
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
  ].join(";"), v.textContent = "Connect ERP image", N.appendChild(S), N.appendChild(v), x.appendChild(N);
  const F = k0(x), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), ZN(e, 120, 120), Ua(e);
  let W = null;
  try {
    V2(e, y, () => {
      var j, ge;
      return (ge = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : ge.call(j);
    }), W = Xl(Ef(e.addDOMWidget(
      Of(),
      "preview",
      x,
      Zm(
        e,
        () => {
          var j, ge;
          return (ge = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : ge.call(j);
        },
        y,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const I = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, V = () => {
    I.destroyed || (I.needsDraw = !0, !I.inTick && !I.raf && (I.raf = requestAnimationFrame(qn)));
  }, O = my(V), z = /* @__PURE__ */ ua(o ? { ...Vy(Ln(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Gy(Ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((j) => ({ value: j, label: j }))
  });
  let K = null;
  if (o && e.__panoSceneStateV2) {
    const [j, ge] = [0, 1].map(() => {
      const Ae = document.createElement("video");
      return Ae.playsInline = !0, Ae.preload = "auto", Ae.crossOrigin = "anonymous", Ae.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Ae), Ae;
    }), Ee = document.createElement("canvas");
    Ee.__panoFrameIdx = 0;
    const $e = document.createElement("canvas");
    $e.__panoFrameIdx = 0;
    const Re = DM({
      video: j,
      stickerVideo: ge,
      createImage: (Ae, Ye) => {
        const Ze = new Image();
        return Ze.onload = Ye, Ze.onerror = Ye, Ze.src = Ae, Ze;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ae) => requestAnimationFrame(Ae),
        cancelFrame: (Ae) => cancelAnimationFrame(Ae)
      },
      readState: () => Ln(e),
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ye;
        if (!(j.videoWidth > 0 && j.videoHeight > 0)) return;
        const Ae = Math.min(1, XN / j.videoWidth);
        Ee.width = Math.round(j.videoWidth * Ae), Ee.height = Math.round(j.videoHeight * Ae), (Ye = Ee.getContext("2d")) == null || Ye.drawImage(j, 0, 0, Ee.width, Ee.height), Ee.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Ae;
        ge.videoWidth > 0 && ge.videoHeight > 0 && ($e.width = ge.videoWidth, $e.height = ge.videoHeight, (Ae = $e.getContext("2d")) == null || Ae.drawImage(ge, 0, 0), $e.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        z.playing = Re.playing, V();
      }
    });
    K = { playback: Re, video: j, still: Ee, stickerVideo: ge, stickerStill: $e, stickerSource: "" }, e.__panoSurfacePlayback = K;
  }
  const J = () => {
    var Ze;
    const { playback: j, still: ge, stickerStill: Ee } = K, $e = TM(N, !!((Ze = e.flags) != null && Ze.collapsed)), Re = j.source, Ae = $e ? O2(e) : null, Ye = j.follow({
      shown: $e,
      sources: $e ? E2(e) : [],
      state: Ln(e),
      sticker: Ae
    });
    ((Ae == null ? void 0 : Ae.src) || "") !== K.stickerSource && (K.stickerSource = (Ae == null ? void 0 : Ae.src) || "", Ee.width = 0), j.source !== Re && (ge.width = 0, ge.__panoFrameIdx = 0), z.playable = Ye, z.playing = j.playing;
  }, _e = () => K == null ? void 0 : K.playback.pause();
  let T = null;
  const C = (o ? OM : GM)({
    readState: () => Ln(e),
    publishLiveState: (j) => {
      j ? (T = j, e.__panoLiveStateOverride = j) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (j) => {
      var $e, Re, Ae, Ye;
      const ge = ta(e, "state_json");
      if (!ge) return;
      ry(e, j.active);
      const Ee = iy(e, j);
      oy(e, Ee, String(ge.value ?? "")) || (ge.value = Ee, ($e = ge.callback) == null || $e.call(ge, Ee), e.__panoStateCache = null, (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !0), (Ye = (Ae = e.graph) == null ? void 0 : Ae.setDirtyCanvas) == null || Ye.call(Ae, !0, !0));
    },
    onChange: (j) => Object.assign(z, j)
  }), de = o ? Qy(e, (j = "sync", ge = null) => {
    var gi;
    if (!o || !e.graph || !C || C.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ft = xn(e, "external-sticker"), xr = Ln(e).stickers.find((wo) => wo.source.kind === "port");
      return C.apply({
        type: "sync-port",
        value: Ry(e, {
          pose: Ft ? ns(e, "pano_sticker_input_pose", ge) : null,
          image: xr ? ps(e, xr.id, null, { external: !0 }) : null
        })
      });
    }
    const Ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ft) => String((Ft == null ? void 0 : Ft.name) || "") === "sticker_image") : -1, $e = Ee >= 0 ? ((gi = e.getInputLink(Ee)) == null ? void 0 : gi.id) ?? null : null;
    if ($e == null)
      return C.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Re = ns(e, "pano_sticker_input_pose", ge), Ae = Array.isArray(Re) ? Re[0] : Re, Ye = String(ns(e, "pano_sticker_input_state_hash", ge) ?? ""), Ze = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Ot = Ln(e), yn = (Array.isArray(Ot == null ? void 0 : Ot.stickers) ? Ot.stickers : []).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === "sticker_image_1"), Vt = ps(e, "sticker_image_1", null, { external: !0 }), _o = Ae && typeof Ae == "object" ? Ae : yn || { yaw_deg: Ze.yaw, pitch_deg: Ze.pitch, hFOV_deg: 30, rot_deg: 0 };
    return C.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: $e,
        stateHash: Ye,
        pose: _o,
        imageWidth: Number((Vt == null ? void 0 : Vt.naturalWidth) || (Vt == null ? void 0 : Vt.width) || 0),
        imageHeight: Number((Vt == null ? void 0 : Vt.naturalHeight) || (Vt == null ? void 0 : Vt.height) || 0)
      }
    });
  }) : () => {
  };
  let pe = 0;
  const U = async (j) => {
    if (!o || !C || !br(j)) return !1;
    _e();
    const ge = `asset_${Math.random().toString(16).slice(2, 10)}`, Ee = `st_${Math.random().toString(16).slice(2, 10)}`, $e = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    pe += 1, z.importing = !0;
    const Re = Wa(e, `add:${ge}`, async () => {
      const Ae = await Ba(j), Ye = await Qi(j, {
        fetchApi: (Ze, Ot) => Bt.fetchApi(Ze, Ot)
      });
      return Ie(), C.apply({
        type: "add-sticker",
        value: {
          stickerId: Ee,
          assetId: ge,
          asset: Ye,
          imageWidth: Ae.width,
          imageHeight: Ae.height,
          yaw_deg: Number($e.yaw || 0),
          pitch_deg: Number($e.pitch || 0)
        }
      });
    });
    try {
      return await Re;
    } catch {
      return !1;
    } finally {
      pe = Math.max(0, pe - 1), z.importing = pe > 0, V();
    }
  };
  let X = null, H = null, A = null, ee = !1;
  const Y = () => {
    var j;
    return A && (clearTimeout(A), A = null), ee ? (ee = !1, ((j = C == null ? void 0 : C.commitGesture) == null ? void 0 : j.call(C)) ?? !1) : !1;
  }, Ie = () => {
    var $e, Re, Ae;
    const j = Y(), ge = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    if (X = null, H = null, ge != null) {
      try {
        ($e = S.hasPointerCapture) != null && $e.call(S, ge) && ((Re = S.releasePointerCapture) == null || Re.call(S, ge));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ee = ((Ae = C == null ? void 0 : C.commitGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return j || Ee;
  }, Oe = () => {
    var $e, Re, Ae;
    const j = Y(), ge = X == null ? void 0 : X.pointerId;
    if (X = null, ge != null) {
      try {
        ($e = S.hasPointerCapture) != null && $e.call(S, ge) && ((Re = S.releasePointerCapture) == null || Re.call(S, ge));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ee = ((Ae = C == null ? void 0 : C.cancelGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return j || Ee;
  }, kt = () => Ie();
  C && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(kt));
  let yt = null, cn = !1;
  if ($ && C)
    try {
      Ed(), yt = id(o ? mN : sN, {
        model: z,
        onAction: (j) => {
          var $e, Re;
          if ((j == null ? void 0 : j.type) === "toggle-playback") {
            Ie(), K == null || K.playback.toggle();
            return;
          }
          if (_e(), (j == null ? void 0 : j.type) === "open-editor") {
            Ie(), o || (z.aspectOpen = !1), ($e = e.__panoOpenEditor) == null || $e.call(e);
            return;
          }
          if (o) {
            if ((j == null ? void 0 : j.type) === "add-image-file") {
              U(j.file);
              return;
            }
            C.apply(j) && V();
            return;
          }
          if ((j == null ? void 0 : j.type) === "toggle-aspect") {
            z.aspectOpen = !z.aspectOpen;
            return;
          }
          if ((j == null ? void 0 : j.type) === "close-aspect") {
            z.aspectOpen = !1;
            return;
          }
          let ge = j;
          if ((j == null ? void 0 : j.type) === "add-frame") {
            const Ae = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ge = {
              ...j,
              ...VM(Ae, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((j == null ? void 0 : j.type) === "delete-frame") {
            const Ae = po(Ln(e));
            Ae && (e.__panoPreviewView = Wy(Ae, {
              width: S.width,
              height: S.height
            }));
          }
          const Ee = ((Re = e.__panoCutoutNodeFrame) == null ? void 0 : Re.safeRect) || null;
          z.aspectOpen = !1, C.apply({ ...ge, safeRect: Ee }) && V();
        }
      }), yt.mount($), cn = !0;
    } catch {
      yt = null, cn = !1;
    }
  const at = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    K && J(), V();
  }) : null;
  at == null || at.observe(N);
  const qn = (j) => {
    var Ee, $e;
    I.raf = 0, I.inTick = !0;
    let ge = !1;
    try {
      ge = It.stepInertia(j), (I.needsDraw || ge) && (I.needsDraw = !1, K && J(), (Ee = e.flags) != null && Ee.collapsed || T2(e, S, O), z.viewUnavailable = O.failed);
    } finally {
      I.inTick = !1;
    }
    (ge || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(qn)), qN() && (!e.__panoDebugLastTs || j - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = j, e.__panoPreviewMode, Ff(e), $a(x), $a(N), $a(S), $a(x.parentElement), $a(($e = x.parentElement) == null ? void 0 : $e.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, It = ld({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (j) => {
      e.__panoPreviewView = j;
    },
    getViewportSize: () => {
      const j = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(j.width || S.clientWidth || 0)),
        h: Math.max(1, Number(j.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const j = Wm();
      return {
        x: j.invert_view_x ? -1 : 1,
        y: j.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), en = o ? N : x, mn = (j) => {
    const ge = S.getBoundingClientRect();
    return {
      x: (Number(j.clientX) - ge.left) * (S.width / Math.max(1, ge.width)),
      y: (Number(j.clientY) - ge.top) * (S.height / Math.max(1, ge.height))
    };
  }, hi = (j) => {
    var $e, Re;
    if (!o || !a) return;
    const ge = Ln(e), Ee = zm(
      Pf(ge, Ql(e)),
      String((($e = ge == null ? void 0 : ge.active) == null ? void 0 : $e.selected_sticker_id) || ""),
      mn(j),
      Lf(e, S.width, S.height)
    );
    if (!Ee) {
      S.style.cursor = "grab";
      return;
    }
    if (((Re = Ee.item) == null ? void 0 : Re.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Ee.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (j) => {
    var Ze, Ot, yn, Vt, _o, Li, gi, Ft, xr, wo, zt;
    if (!er(j, en) || j.button !== 0) return;
    if (!o) {
      const nn = po(Ln(e)), cr = e.__panoCutoutNodeFrame;
      if (!nn) {
        (Ze = x.focus) == null || Ze.call(x, { preventScroll: !0 }), (Ot = S.setPointerCapture) == null || Ot.call(S, j.pointerId), S.style.cursor = "grabbing", It.startDrag(j.clientX, j.clientY, j.pointerId);
        return;
      }
      if (nn.locked === !0 || !cr || !C) return;
      const vs = mn(j);
      let Ri;
      if (j.shiftKey) {
        const zn = Uy({
          frame: cr,
          point: vs,
          startRollDeg: Number(nn.roll_deg ?? nn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!zn) return;
        Ri = { kind: "roll", pointerId: j.pointerId, rollGesture: zn };
      } else {
        const zn = ((yn = Ln(e)) == null ? void 0 : yn.ui_settings) || Wm();
        Ri = {
          kind: "pan",
          pointerId: j.pointerId,
          startPoint: vs,
          startShot: { ...nn },
          focalPx: lo(cr, nn),
          invertX: zn.invert_view_x === !0,
          invertY: zn.invert_view_y === !0
        };
      }
      Ie(), (Vt = x.focus) == null || Vt.call(x, { preventScroll: !0 }), (_o = S.setPointerCapture) == null || _o.call(S, j.pointerId), S.style.cursor = "grabbing", C.beginGesture(), X = Ri;
      return;
    }
    if (!a) return;
    const ge = mn(j), Ee = Ln(e), $e = String(((Li = Ee == null ? void 0 : Ee.active) == null ? void 0 : Li.selected_sticker_id) || ""), Re = Lf(e, S.width, S.height);
    (gi = x.focus) == null || gi.call(x, { preventScroll: !0 });
    const Ae = () => zm(Pf(Ee, Ql(e)), $e, ge, Re);
    let Ye = Ae();
    if (Ye && (K != null && K.playback.playing) && (_e(), Ye = Ae()), Ye && C) {
      if (It.stopMotion(), Ie(), String(((Ft = Ye.item) == null ? void 0 : Ft.id) || "") !== $e && C.apply({ type: "select-sticker", id: Ye.item.id }), ((xr = Ye.item) == null ? void 0 : xr.locked) === !0) {
        V();
        return;
      }
      const nn = ge, cr = Ye.geometry.center;
      H = {
        active: !0,
        kind: Ye.hit.kind,
        pointerId: j.pointerId,
        startPoint: nn,
        startCenter: { ...cr },
        startSticker: { ...Ye.item },
        startDistance: Math.max(1, Math.hypot(nn.x - cr.x, nn.y - cr.y)),
        startAngle: Math.atan2(nn.y - cr.y, nn.x - cr.x),
        projection: Re
      }, C.beginGesture(), (wo = S.setPointerCapture) == null || wo.call(S, j.pointerId), S.style.cursor = Ye.hit.kind === "rotate" ? "grabbing" : Ye.hit.kind === "move" ? "move" : Ye.hit.cursor, V();
      return;
    }
    (zt = S.setPointerCapture) == null || zt.call(S, j.pointerId), S.style.cursor = "grabbing", It.startDrag(j.clientX, j.clientY, j.pointerId);
  }), S.addEventListener("pointermove", (j) => {
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        er(j, en), It.moveDrag(j.clientX, j.clientY, "pano");
        return;
      }
      if (X.pointerId !== j.pointerId || !C) return;
      if (er(j, en), X.kind === "pan") {
        const Ee = mn(j);
        C.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Ee.x - X.startPoint.x,
          dy: Ee.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ge = Yy(X.rollGesture, mn(j), j);
      if (!ge) return;
      X.rollGesture = ge.gesture, C.updateGesture({ type: "set-roll", value: ge.rollDeg });
      return;
    }
    if (!H && !It.state.drag.active) {
      hi(j);
      return;
    }
    if (H) {
      if (H.pointerId !== j.pointerId || !C) return;
      er(j, en);
      const ge = mn(j);
      let Ee = H.startSticker;
      if (H.kind === "move")
        Ee = vN(
          H.startSticker,
          {
            x: H.startCenter.x + ge.x - H.startPoint.x,
            y: H.startCenter.y + ge.y - H.startPoint.y
          },
          H.projection
        );
      else if (H.kind === "scale") {
        const $e = Math.hypot(ge.x - H.startCenter.x, ge.y - H.startCenter.y);
        Ee = _N(H.startSticker, H.startDistance, $e);
      } else if (H.kind === "rotate") {
        const $e = Math.atan2(ge.y - H.startCenter.y, ge.x - H.startCenter.x);
        Ee = wN(H.startSticker, H.startAngle, $e, j.shiftKey === !0);
      }
      C.updateGesture({ type: "set-transform", value: Ee }), V();
      return;
    }
    !a || !It.state.drag.active || (er(j, en), It.moveDrag(j.clientX, j.clientY, "pano"));
  });
  const R = () => {
    var ge, Ee;
    if (!X && !H) {
      if (!It.state.drag.active) return;
      It.endDrag(), S.style.cursor = "grab", V();
      return;
    }
    if (!C) return;
    const j = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    X = null, H = null;
    try {
      (ge = S.hasPointerCapture) != null && ge.call(S, j) && ((Ee = S.releasePointerCapture) == null || Ee.call(S, j));
    } catch {
    }
    C.cancelGesture(), S.style.cursor = "grab", V();
  }, G = (j, ge = !1) => {
    var Ee, $e, Re, Ae;
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        er(j, en), (Ee = S.releasePointerCapture) == null || Ee.call(S, j.pointerId), S.style.cursor = "grab", It.endDrag(), V();
        return;
      }
      if (X.pointerId !== j.pointerId || !C) return;
      er(j, en), X = null, ($e = S.releasePointerCapture) == null || $e.call(S, j.pointerId), S.style.cursor = "grab", ge ? C.cancelGesture() : C.commitGesture(), hi(j), V();
      return;
    }
    if (H) {
      if (H.pointerId !== j.pointerId || !C) return;
      er(j, en), H = null, (Re = S.releasePointerCapture) == null || Re.call(S, j.pointerId), S.style.cursor = "grab", ge ? C.cancelGesture() : C.commitGesture(), V();
      return;
    }
    !a || !It.state.drag.active || (er(j, en), (Ae = S.releasePointerCapture) == null || Ae.call(S, j.pointerId), S.style.cursor = "grab", It.endDrag(), V());
  };
  S.addEventListener("pointerup", G), S.addEventListener("pointercancel", (j) => G(j, !0)), S.addEventListener("lostpointercapture", R), S.addEventListener("pointerleave", (j) => {
    !o && X || H || It.state.drag.active && G(j);
  });
  const re = (j) => {
    const ge = document.activeElement;
    if (ge !== x && !x.contains(ge)) return;
    if (j.key === "Escape" && (X || H) && C) {
      R(), Rf(j);
      return;
    }
    if (!o || j.key !== "Delete" && j.key !== "Backspace" || !C) return;
    const Ee = j.target, $e = String((Ee == null ? void 0 : Ee.tagName) || "").toUpperCase();
    $e === "INPUT" || $e === "TEXTAREA" || Ee != null && Ee.isContentEditable || z.canDelete === !0 && (_e(), Ie(), C.apply({ type: "delete-selected" }) && V(), Rf(j));
  };
  window.addEventListener("keydown", re, !0);
  const se = WN({
    requestFrame: (j) => requestAnimationFrame(j),
    cancelFrame: (j) => cancelAnimationFrame(j),
    restore: (j) => R2(j)
  }), me = (j) => {
    var Ee, $e, Re, Ae, Ye, Ze;
    if (!er(j, en)) return;
    if (!o) {
      const Ot = po(Ln(e));
      if (Ot && Ot.locked !== !0 && C) {
        const yn = Fl(j);
        yn !== 0 && (ee || (Ie(), C.beginGesture(), ee = !0), C.updateGesture({
          type: "step-fov",
          direction: yn
        }) ? (A && clearTimeout(A), A = setTimeout(Y, 180), V()) : C.hasGestureChanges() || (C.cancelGesture(), ee = !1));
      } else if (!Ot) {
        const yn = Jm();
        It.applyWheelEvent(j) && V(), se.schedule(yn);
      }
      (Ee = j.preventDefault) == null || Ee.call(j), ($e = j.stopPropagation) == null || $e.call(j), (Re = j.stopImmediatePropagation) == null || Re.call(j);
      return;
    }
    if (!a) return;
    const ge = Jm();
    It.applyWheelEvent(j) && V(), (Ae = j.preventDefault) == null || Ae.call(j), (Ye = j.stopPropagation) == null || Ye.call(j), (Ze = j.stopImmediatePropagation) == null || Ze.call(j), se.schedule(ge);
  }, ve = o ? [N, S] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((j) => {
    ve.forEach((ge) => ge.addEventListener(j, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((j) => {
    S.addEventListener(j, (ge) => er(ge, en)), N.addEventListener(j, (ge) => er(ge, en));
  });
  const Se = ta(e, "state_json");
  let Ne = null, xe = null;
  Se && !Se.__panoPreviewPatchedCb && (Ne = Se.callback, xe = (j) => {
    const ge = Ne ? Ne(j) : void 0;
    return V(), ge;
  }, Se.callback = xe, Se.__panoPreviewPatchedCb = xe);
  const fe = ta(e, "bg_color");
  let je = null, Ce = null;
  fe && !fe.__panoPreviewPatchedCb && (je = fe.callback, Ce = (j) => {
    const ge = je ? je(j) : void 0;
    return V(), ge;
  }, fe.callback = Ce, fe.__panoPreviewPatchedCb = Ce);
  const Ve = e.onRemoved, Ke = e.onResize, st = e.onExecuted, h = e.onDragOver, Le = e.onDragDrop;
  let nt = null;
  const ft = () => {
    o && (z.dropActive = !0, nt && clearTimeout(nt), nt = setTimeout(() => {
      nt = null, z.dropActive = !1;
    }, 140));
  }, gn = o ? function(j) {
    return (h ? h.apply(this, arguments) : !1) === !0 ? !0 : Fd(j == null ? void 0 : j.dataTransfer) ? (ft(), !0) : !1;
  } : null, un = o ? function(j) {
    var $e;
    if ((Le ? Le.apply(this, arguments) : !1) === !0) return !0;
    const Ee = Array.from((($e = j == null ? void 0 : j.dataTransfer) == null ? void 0 : $e.files) || []).find((Re) => br(Re));
    return Ee ? (nt && clearTimeout(nt), nt = null, z.dropActive = !1, U(Ee), !0) : !1;
  } : null;
  o && (e.onDragOver = gn, e.onDragDrop = un);
  const Jn = o ? KN(x, {
    onActive: (j) => {
      if (j) {
        ft();
        return;
      }
      nt && clearTimeout(nt), nt = null, z.dropActive = !1;
    },
    onDrop: (j) => {
      U(j);
    }
  }) : () => {
  }, Jt = function(j) {
    e.__panoOutputFromRun = !0;
    const ge = ub(e, j);
    ai(e, ge ? "executed" : "sync", j), V();
    const Ee = st ? st.apply(this, arguments) : void 0;
    return Ua(e), Ee;
  };
  e.onExecuted = Jt;
  const Et = e.onConnectionsChange, Pe = function(j, ge) {
    const Ee = Pm(e, j, ge, xd), $e = Pm(e, j, ge, Di), Re = arguments, Ae = Et ? Et.apply(this, Re) : void 0, Ye = () => {
      I.destroyed || ($e && y2(e), Ee && ai(e, "connection-change"), Ua(e), V());
    };
    return Ye(), queueMicrotask(Ye), Ae;
  };
  e.onConnectionsChange = Pe;
  const tn = function() {
    const j = Ke ? Ke.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), j;
  };
  e.onResize = tn;
  const jr = function() {
    return mi(), Df.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = jr;
  const mi = () => {
    var j, ge, Ee, $e, Re, Ae, Ye, Ze, Ot;
    I.destroyed = !0, (j = at == null ? void 0 : at.disconnect) == null || j.call(at), o ? Ie() : Oe(), S.removeEventListener("lostpointercapture", R), Jn(), F(), window.removeEventListener("keydown", re, !0), (Ee = (ge = e.__panoStateFlushers) == null ? void 0 : ge.delete) == null || Ee.call(ge, kt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), ($e = C == null ? void 0 : C.destroy) == null || $e.call(C), (Re = yt == null ? void 0 : yt.unmount) == null || Re.call(yt), K && (K.playback.dispose(), K.video.remove(), K.stickerVideo.remove(), e.__panoSurfacePlayback === K && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Ye = (Ae = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ae.dispose) == null || Ye.call(Ae), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, de(), se.dispose(), nt && clearTimeout(nt), nt = null, Td.disposeOwner(e), na(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((Ze = e.__panoCutoutNodeSurface) == null ? void 0 : Ze.session) === C && (e.__panoCutoutNodeSurface = null), ((Ot = e.__panoStickersNodeSurface) == null ? void 0 : Ot.session) === C && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === tn && (e.onResize = Ke), e.onExecuted === Jt && (e.onExecuted = st), e.onConnectionsChange === Pe && (e.onConnectionsChange = Et), xe && (Se == null ? void 0 : Se.callback) === xe && (Se.callback = Ne), xe && (Se == null ? void 0 : Se.__panoPreviewPatchedCb) === xe && delete Se.__panoPreviewPatchedCb, Ce && (fe == null ? void 0 : fe.callback) === Ce && (fe.callback = je), Ce && (fe == null ? void 0 : fe.__panoPreviewPatchedCb) === Ce && delete fe.__panoPreviewPatchedCb, e.onDragOver === gn && (e.onDragOver = h), e.onDragDrop === un && (e.onDragDrop = Le), e.onRemoved === jr && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = mi, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = C && cn && !o ? { session: C, model: z } : null, e.__panoStickersNodeSurface = C && cn && o ? { session: C, model: z } : null, e.__panoDomPreview = {
    widget: W,
    root: x,
    canvas: S,
    requestDraw: V,
    state: I,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Df.register(e), e.graph && ai(e, "attach"), V();
}
function Qm(e, t = {}) {
  ob(e).attach({
    ...t,
    mode: "cutout"
  });
}
function eg(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (ib(e) && !n) {
    Dd(e);
    return;
  }
  ob(e).attach(t);
}
function K2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function W2(e, t = 1, n = km) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : km, _ = Math.max(u, d), x = _ > 0 ? Math.min(1, y / _) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function B2({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let l = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const S = d();
    return S === u || (u = S, o(S)), S;
  }, y = () => b();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", y), b(), { toggle: async () => {
    var S;
    if (l || !e || !t) return !1;
    if (d()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
      } catch {
      }
      return l ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), l) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return l || (a(), b()), !1;
  }, isActive: d, destroy: () => {
    var S, v, F;
    if (!l) {
      if (l = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", y), d())
        try {
          const $ = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (F = $ == null ? void 0 : $.catch) == null || F.call($, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const U2 = { class: "pano-preview-node-surface" }, Y2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (te(), ce("div", U2, [
      De(Qt, {
        icon: e.model.fullscreen ? Qe(Me).fullscreen_close : Qe(Me).fullscreen,
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
      e.model.viewUnavailable ? (te(), sr(Ad, { key: 0 })) : ut("", !0)
    ]));
  }
}, Qs = 140, X2 = 180, tg = 40, $u = 10;
function ng(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function rg(e, t) {
  const n = ng(e), r = ng(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ig(e) {
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
  return typeof ((a = Bt) == null ? void 0 : a.apiURL) == "function" ? Bt.apiURL(o) : o;
}
function ra(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ra(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return ig({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ra(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ig(e);
}
function fb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function q2(e) {
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
function $f(e) {
  var o;
  const t = (o = vr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (rg(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (rg(a, n)) return t[a];
  return null;
}
function J2(e) {
  var r, o;
  const t = $f(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = ra(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function Z2(e, t = "erp_image") {
  var N, S, v, F, $, W, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, O) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (S = (N = vr) == null ? void 0 : N.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : v.call(S, a), u = $f(a), d = $f(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    ($ = u == null ? void 0 : u.ui) == null ? void 0 : $.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const O of V) {
        const z = ra(O);
        if (z) return z;
      }
  let y = [];
  try {
    y = typeof ((W = vr) == null ? void 0 : W.getNodeImageUrls) == "function" ? vr.getNodeImageUrls(l) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const V of y) {
      const O = ra(V);
      if (O) return O;
    }
  if (l) {
    const V = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const O of V) {
      const z = ra(O);
      if (z) return z;
    }
  }
  const _ = (I = l == null ? void 0 : l.widgets) == null ? void 0 : I.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), x = String((_ == null ? void 0 : _.value) || "").trim();
  return x ? Bt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function Vu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function og(e, t, n, r, o, a, l) {
  var b, y, _;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !fb(a) || n <= 1 || r <= 1) {
    Vu(t, n, r);
    return;
  }
  if (l.failed) {
    Vu(t, n, r);
    return;
  }
  const u = Number(((_ = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: Kl(o, n, r),
    background: { media: a, revision: q2(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Vu(t, n, r);
}
function ag(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Q2 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = my(() => this.requestDraw()), this.controller = ld({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Wt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: q(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: q(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, l, u;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((l = this.canvas) == null ? void 0 : l.clientWidth) || 0)),
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
      const l = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), l;
    }, this.node.onConnectionsChange = function() {
      const l = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), l;
    }, this.node.onResize = function() {
      const l = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), l;
    }, this.node.onRemoved = function() {
      const l = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), l;
    };
    const n = ((a = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (l) => (l == null ? void 0 : l.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...l) => {
      const u = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...l) : void 0;
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
        `min-height:${Qs}px`,
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
          return Qs;
        },
        getHeight() {
          return Qs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Xl(Ef(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Qs, Number(a.minHeight || 0)),
            minWidth: Math.max(X2, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, a, l;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Ed(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ua({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = B2({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = id(Y2, {
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
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (l = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || l.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = k0(n), t.addEventListener("pointerdown", (a) => {
      var l, u, d;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const r = (a) => {
      var l, u;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var l;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var l;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }), n.addEventListener("keydown", (a) => {
      var l;
      K2(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !fb(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var l;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const a = t.getLegacyPreviewRect();
      return ag(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var l;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - a.x, o.y - a.y, "pano"), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, b, y, _, x, N;
      const a = x2(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !ag(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (_ = n == null ? void 0 : n.preventDefault) == null || _.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - $u * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - tg - $u);
    return { x: $u, y: tg, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), og(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? hy : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = W2(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = J2(this.node);
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
    const n = Z2(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), og(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, y, _, x, N, S, v, F, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (_ = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || _.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (N = this.root) == null ? void 0 : N.remove) == null || S.call(N);
    } catch {
    }
    try {
      nb(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : $.call(F, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function eP(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Q2(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function db(e, t, n) {
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
  const l = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const u = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
}
function Rd(e) {
  return !!(e != null && e.prototype);
}
function hs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function tP(e, t = {}) {
  Rd(e) || eP(e, {
    ...t,
    onOpen: hs(e, t.onOpen)
  });
}
function nP(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Rd(e)) {
    eg(e, {
      ...r,
      onOpen: hs(e, t.onOpen)
    });
    return;
  }
  db(e, "stickers_node_preview", (o) => {
    eg(o, {
      ...r,
      onOpen: hs(o, t.onOpen)
    });
  });
}
function rP(e, t = {}) {
  if (!Rd(e)) {
    Qm(e, {
      ...t,
      onOpen: hs(e, t.onOpen)
    });
    return;
  }
  db(e, "cutout_preview", (n) => {
    Qm(n, {
      ...t,
      onOpen: hs(n, t.onOpen)
    });
  });
}
const Dn = {
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
}, Xr = "pen";
function sg(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function iP(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), l = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((_) => {
      r.push(String(_ || ""));
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
      const b = r.length, y = Math.max(0, b - l), _ = o >= 0 ? Math.max(0, Math.min(o, y)) : y, x = r.slice(_, _ + l), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - _));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: u
  };
}
function Va(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function oP(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function aP({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: l,
  getBrushPresetIdForTool: u,
  isActiveLassoTool: d
}) {
  var I, V;
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
    historyEntries: Array.from({ length: 8 }, (O, z) => ({ index: z, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const _ = ((I = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : I.id) || "", x = !_, N = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, $ = d(), W = Array.from({ length: 8 }, (O, z) => e.customPaintHistory[z] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: _,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...l(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: W.map((O, z) => ({
      index: z,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function sP({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function lg(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function lP({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
        icon: a ? Me.eye : Me.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function cP({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: l,
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
    params: l,
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
function uP({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: l,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: y,
  isStickerHidden: _,
  canRestoreSelectedToInitial: x,
  iconSet: N
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!l }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const v = x(), F = _(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: v ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !v
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: F ? "Show" : "Hide",
        tip: F ? "Show input image" : "Hide input image",
        icon: F ? N.eye : N.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((v) => ({ value: v, label: v, active: d === v }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  return pb(o.corners, S);
}
const fP = [
  { key: "translate", label: "Move", tip: "Move the world sticker" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function dP({ corners: e, gizmoBox: t = null, gizmoMode: n }) {
  const r = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [];
  return pb([...e, ...r], [{
    key: "gizmo-mode",
    kind: "segments",
    attr: "data-gizmo-mode",
    label: "Gizmo mode",
    buttons: fP.map((o) => ({ ...o, pressed: o.key === n ? "true" : "false" }))
  }]);
}
function pP(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const _ = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), x = Math.max(14, o - n - 14), N = y + 18, S = b - 18 - n;
  let v;
  return N <= x ? v = Math.max(N, 14) : S >= 14 ? v = Math.min(S, x) : v = Math.min(Math.max(N, 14), x), { left: _, top: v };
}
function pb(e, t) {
  const n = e.map((b) => ({ x: Number(b == null ? void 0 : b.x), y: Number(b == null ? void 0 : b.y) })).filter((b) => Number.isFinite(b.x) && Number.isFinite(b.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((b) => b.x), o = n.map((b) => b.y), a = Math.min(...r), l = Math.max(...r), u = Math.min(...o), d = Math.max(...o);
  return {
    visible: !0,
    left: (a + l) * 0.5,
    top: d + 18,
    items: t,
    anchor: { minX: a, maxX: l, minY: u, maxY: d }
  };
}
const hP = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function mP(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: _ = !1 }) {
  const x = (v, F, $, W, I) => {
    const V = (O) => (r == null ? void 0 : r.owner) === v && r.lane === O ? r.frames.map((z) => z + I) : [];
    return {
      id: v,
      label: $,
      clip: W,
      selected: v === o,
      open: l.has(v),
      keyed: YS(F, t - I),
      keys: US(F).map((O) => ({ frame: O.frame + I, full: O.full })),
      selectedFrames: V(null),
      lanes: bo(F).map((O) => ({
        key: `${v}:${O}`,
        lane: O,
        label: hP[O],
        frames: F[O].keyframes.map((z) => z.frame + I),
        selectedFrames: V(O)
      }))
    };
  }, N = e.stickers.filter((v) => v.placement === "sky").sort((v, F) => F.z_index - v.z_index), S = e.stickers.filter((v) => v.placement === "world");
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
    fpsLocked: y,
    length: e.timeline.length,
    rows: [
      ..._ ? [x("camera", e.camera, "Camera", null, 0)] : [],
      ...[...N, ...S].map((v) => {
        const { start: F, in: $, duration: W } = v.clip;
        return x(v.id, v, bf(v), { start: F, end: W === null ? null : F + W }, F - $);
      })
    ]
  };
}
function gP(e, t, n, r) {
  const o = JS(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const yP = { class: "pano-floating-right" }, bP = {
  key: 0,
  class: "pano-floating-space"
}, vP = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, _P = ["data-settled"], wP = ["data-ready", "data-settled"], xP = ["aria-label", "data-tip"], SP = {
  key: 1,
  class: "pano-camera-preview-label"
}, kP = {
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
    return (t, n) => (te(), ce(Ue, null, [
      B("div", yP, [
        e.space ? li((te(), ce("div", bP, [
          B("div", vP, [
            (te(!0), ce(Ue, null, bt(e.space.modes, (r) => (te(), sr(Qt, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          De(Qt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ho, e.space.visible]
        ]) : ut("", !0),
        (te(!0), ce(Ue, null, bt(e.buttons, (r) => (te(), sr(Qt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      li(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: ct(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: wt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = B("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            B("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (te(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Ct, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, xP)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (te(), ce("div", SP, it(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, wP)
      ], 8, _P), [
        [ho, e.preview.visible]
      ])
    ], 64));
  }
}, MP = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, NP = ["y2", "transform"], PP = ["transform"], AP = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => li((te(), ce("div", {
      class: ct(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (te(), ce("svg", MP, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (te(!0), ce(Ue, null, bt(Qe(n), (l) => (te(), ce("line", {
          key: l,
          class: ct(["pano-frame-roll-knob-tick", { zero: l === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: l % 45 === 0 ? 7 : 6,
          transform: `rotate(${l} 20 20)`
        }, null, 10, NP))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, PP),
        a[2] || (a[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ho, e.model.visible === !0]
    ]);
  }
}, CP = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (te(), ce("div", {
      class: ct(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(qy, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(Qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(AP, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, IP = ["aria-label"], EP = { class: "pano-canvas-confirm-title" }, OP = { class: "pano-canvas-confirm-text" }, FP = { class: "pano-canvas-confirm-actions" }, TP = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, DP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ut(null), r = /* @__PURE__ */ Ut(null);
    let o = null;
    function a() {
      const _ = r.value;
      return _ ? Array.from(_.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function l(_) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${_}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var v;
      const _ = r.value;
      if (!_) return;
      const x = _.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const S = a()[0] || _;
      (v = S == null ? void 0 : S.focus) == null || v.call(S);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(_) {
      var $;
      if (_.defaultPrevented) return;
      if (_.key === "Escape") {
        _.preventDefault(), _.stopPropagation(), l("confirm-cancel");
        return;
      }
      if (_.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        _.preventDefault(), ($ = N == null ? void 0 : N.focus) == null || $.call(N);
        return;
      }
      const S = x[0], v = x[x.length - 1], F = document.activeElement;
      if (_.shiftKey) {
        (F === S || F === N || !(N != null && N.contains(F))) && (_.preventDefault(), v.focus());
        return;
      }
      (F === v || !(N != null && N.contains(F))) && (_.preventDefault(), S.focus());
    }
    function y(_) {
      _.target === n.value && l("confirm-cancel");
    }
    return ao(() => t.model.visible, (_, x) => {
      if (_) {
        o = document.activeElement, lc(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), ys(() => {
      d();
    }), (_, x) => e.model.visible === !0 ? (te(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(y, ["self"])
    }, [
      B("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        B("div", EP, it(e.model.title), 1),
        B("div", OP, it(e.model.text), 1),
        B("div", FP, [
          x[0] || (x[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", TP, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, IP)
    ], 512)) : ut("", !0);
  }
}, LP = ["data-paint-pane"], RP = ["hidden"], $P = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], VP = ["aria-pressed", "disabled"], zP = ["hidden"], jP = { class: "pano-paint-color-pop-head" }, HP = { class: "pano-paint-color-field" }, GP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, KP = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, WP = { class: "pano-paint-color-field" }, BP = { class: "pano-paint-alpha-wrap" }, UP = ["value"], YP = { "data-paint-alpha-value": "" }, XP = ["hidden"], qP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, JP = ["data-paint-history-index", "aria-label", "disabled"], ZP = ["data-paint-footer"], QP = ["data-paint-group"], eA = ["hidden"], tA = ["value", "disabled"], nA = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, rA = ["hidden"], iA = {
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
    return (r, o) => (te(), ce("div", {
      class: ct(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (te(!0), ce(Ue, null, bt(e.panes, (a) => {
        var l;
        return te(), ce("div", {
          key: a.key,
          class: ct(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (te(), ce("div", {
            key: 0,
            class: ct(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (te(!0), ce(Ue, null, bt(e.paintSwatches, (u) => (te(), ce("button", {
              key: u.id,
              class: ct(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: wt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, $P))), 128)),
            B("button", {
              class: ct(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: wt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, VP),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: wt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", jP, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: wt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", HP, [
                B("div", GP, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: wt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", KP, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: wt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", WP, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", BP, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, UP),
                  B("span", YP, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", qP, [
                  (te(!0), ce(Ue, null, bt(e.state.historyEntries || [], (u) => (te(), ce("button", {
                    key: u.index,
                    class: ct(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: wt(n(u.color))
                  }, null, 14, JP))), 128))
                ])
              ], 8, XP)
            ], 12, zP)
          ], 10, RP)) : ut("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (te(!0), ce(Ue, null, bt(a.tools, (u) => {
                var d;
                return te(), sr(Qt, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, QP),
            B("div", {
              class: ct(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              B("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: wt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, tA),
              B("span", nA, it(e.state.sizeText || "10"), 1)
            ], 10, eA),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = e.state.clearVisible) == null ? void 0 : l[a.key]) ?? !a.clearHidden)
            }, [
              De(Qt, {
                icon: Qe(Me).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, rA)
          ], 8, ZP)
        ], 10, LP);
      }), 128))
    ], 2));
  }
}, oA = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Ut(null), r = /* @__PURE__ */ Ut(null), o = /* @__PURE__ */ Ut(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (l, u) => (te(), ce(Ue, null, [
      B("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      B("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        B("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, aA = ["aria-label"], sA = ["data-tip", "aria-pressed"], lA = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (te(), ce("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: wt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (te(!0), ce(Ue, null, bt(e.buttons, (a) => (te(), ce("button", ni({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), it(a.label), 17, sA))), 128))
    ], 12, aA));
  }
}, cA = {
  key: 0,
  class: "pano-cutout-menu"
}, uA = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, fA = ["data-aspect"], dA = ["data-action", "aria-label", "data-tip", "disabled"], pA = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (te(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: wt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (te(!0), ce(Ue, null, bt(e.model.items || [], (r) => (te(), ce(Ue, {
        key: r.key
      }, [
        r.kind === "aspect" ? (te(), ce("div", cA, [
          B("button", uA, [
            De(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: ct(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (te(!0), ce(Ue, null, bt(r.choices || [], (o) => (te(), ce("button", {
              key: o.value,
              class: ct(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, it(o.label), 11, fA))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (te(), sr(lA, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (te(), ce("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(Ct, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, dA))
      ], 64))), 128))
    ], 4));
  }
}, hA = {
  key: 0,
  class: "pano-easing"
}, mA = { class: "pano-section-title" }, gA = { class: "pano-easing-range" }, yA = { class: "pano-easing-modes" }, bA = ["aria-pressed", "onClick"], vA = ["viewBox"], _A = ["x", "y"], wA = ["x1", "y1", "x2", "y2"], xA = ["d"], SA = ["x1", "y1", "x2", "y2"], kA = ["x1", "y1", "x2", "y2"], MA = ["cx", "cy"], NA = ["cx", "cy"], PA = { class: "pano-easing-note" }, qr = 132, Xi = 14, AA = {
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
    ], a = /* @__PURE__ */ Ut(null), l = dt(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), u = (S) => Xi + S * qr, d = (S) => Xi + (1 - S) * qr, b = dt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [S, v, F, $] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(S)} ${d(v)} ${u(F)} ${d($)} ${u(1)} ${d(1)}`;
    }), y = dt(() => l.value ? l.value.map((S) => S.toFixed(2)).join(", ") : "");
    function _(S) {
      var v;
      return JSON.stringify(S.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function x(S, v) {
      r("timeline", { type: "easing", easing: S, commit: v });
    }
    function N(S, v) {
      var V;
      if (S.button !== 0 || !l.value) return;
      const F = S.currentTarget;
      (V = F.setPointerCapture) == null || V.call(F, S.pointerId);
      let $ = null;
      const W = (O) => {
        const z = a.value.getBoundingClientRect(), K = z.width / (qr + Xi * 2), J = ((O.clientX - z.left) / K - Xi) / qr, _e = 1 - ((O.clientY - z.top) / K - Xi) / qr;
        $ = [...$ || l.value], $[v] = Math.round(Math.min(1, Math.max(0, J)) * 100) / 100, $[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x($, !1);
      }, I = () => {
        F.removeEventListener("pointermove", W), F.removeEventListener("pointerup", I), F.removeEventListener("pointercancel", I), $ && x($, !0);
      };
      F.addEventListener("pointermove", W), F.addEventListener("pointerup", I), F.addEventListener("pointercancel", I);
    }
    return (S, v) => e.model ? (te(), ce("div", hA, [
      B("div", mA, [
        v[2] || (v[2] = B("span", null, "Easing", -1)),
        B("span", gA, it(e.model.label), 1)
      ]),
      B("div", yA, [
        (te(), ce(Ue, null, bt(o, (F) => B("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": _(F) ? "true" : "false",
          onClick: ($) => x(F.easing, !0)
        }, it(F.label), 9, bA)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (te(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${qr + Xi * 2} ${qr + Xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: qr,
          height: qr
        }, null, 8, _A),
        B("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, wA),
        B("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, xA),
        l.value ? (te(), ce(Ue, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, SA),
          B("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, kA),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => N(F, 0))
          }, null, 40, MA),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => N(F, 2))
          }, null, 40, NA)
        ], 64)) : ut("", !0)
      ], 8, vA)) : ut("", !0),
      B("div", PA, [
        e.model.mixed ? (te(), ce(Ue, { key: 0 }, [
          Ha("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (te(), ce(Ue, { key: 1 }, [
          Ha("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (te(), ce(Ue, { key: 2 }, [
          Ha("Holds the value, then jumps to the next keyframe.")
        ], 64)) : l.value ? (te(), ce(Ue, { key: 3 }, [
          Ha("cubic-bezier(" + it(y.value) + ")", 1)
        ], 64)) : ut("", !0)
      ])
    ])) : ut("", !0);
  }
}, CA = {
  class: "pano-side",
  "data-side": ""
}, IA = { class: "pano-side-head" }, EA = { class: "pano-side-title" }, OA = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, FA = {
  key: 0,
  class: "pano-side-scroll"
}, TA = { class: "pano-inspector" }, DA = { class: "pano-ui-row pano-coverage-row" }, LA = ["data-selected"], RA = ["aria-pressed", "disabled"], $A = ["aria-pressed", "disabled"], VA = {
  key: 0,
  class: "pano-section-title"
}, zA = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, jA = {
  class: "pano-picker",
  "data-picker": "selection"
}, HA = ["disabled"], GA = { class: "pano-picker-label" }, KA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, WA = ["hidden"], BA = ["data-selection-id"], UA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, YA = {
  key: 2,
  class: "pano-state-actions"
}, XA = ["disabled"], qA = ["data-key"], JA = ["min", "max", "step", "value", "disabled", "data-param-key"], ZA = ["min", "max", "step", "value", "disabled", "data-param-key"], QA = { class: "pano-visibility-section" }, eC = { class: "pano-visibility-stack" }, tC = ["data-visibility-row"], nC = { class: "pano-visibility-name" }, rC = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, iC = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], oC = ["open"], aC = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, sC = { class: "pano-ui-settings-body" }, lC = { class: "pano-ui-row" }, cC = ["data-selected"], uC = ["aria-pressed"], fC = ["aria-pressed"], dC = { class: "pano-ui-row" }, pC = ["data-selected"], hC = ["aria-pressed"], mC = ["aria-pressed"], gC = {
  key: 1,
  class: "pano-side-footer"
}, yC = ["data-action"], bC = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = dt(() => {
      const u = n.model;
      return !u || typeof u != "object" ? !1 : Object.keys(u).length > 0 && !!u.coverage;
    });
    function a(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function l(u, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    return (u, d) => {
      var b, y, _, x, N;
      return te(), ce("div", CA, [
        B("div", IA, [
          B("div", EA, [
            B("span", OA, [
              De(Ct, {
                icon: Qe(Me).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (te(), ce("div", FA, [
          B("div", TA, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", DA, [
              d[2] || (d[2] = B("label", null, "Coverage", -1)),
              B("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, RA),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, $A)
              ], 8, LA)
            ]),
            e.model.transformTitle !== !1 ? (te(), ce("div", VA, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : ut("", !0),
            e.model.selectionPicker ? (te(), ce("div", zA, [
              B("label", null, it(e.model.selectionPicker.label), 1),
              B("div", jA, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", GA, [
                    e.model.selectionPicker.currentIcon ? (te(), ce("span", KA, [
                      De(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    B("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, HA),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (te(!0), ce(Ue, null, bt(e.model.selectionPicker.items || [], (S) => (te(), ce("button", {
                    key: S.id,
                    type: "button",
                    class: ct(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (te(), ce("span", UA, [
                      De(Ct, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    B("span", null, it(S.label), 1)
                  ], 10, BA))), 128))
                ], 8, WA)
              ])
            ])) : ut("", !0),
            e.model.copyStateButton ? (te(), ce("div", YA, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ct, {
                  icon: Qe(Me).copy
                }, null, 8, ["icon"]),
                B("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, XA)
            ])) : ut("", !0),
            B("div", {
              class: ct(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (te(!0), ce(Ue, { key: 0 }, bt(e.model.notes, (S) => (te(), ce("div", {
                key: S,
                class: "pano-param-note"
              }, it(S), 1))), 128)) : (te(!0), ce(Ue, { key: 1 }, bt(e.model.params || [], (S) => (te(), ce("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                B("label", null, it(S.label), 1),
                B("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: l(S, e.model),
                  style: wt(a(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, JA),
                B("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: l(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, ZA)
              ], 8, qA))), 128))
            ], 2),
            De(AA, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (te(), ce(Ue, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", QA, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", eC, [
                  (te(!0), ce(Ue, null, bt(e.model.visibilityRows, (S) => (te(), ce("div", {
                    key: S.key,
                    class: ct(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    B("span", nC, [
                      B("span", rC, [
                        De(Ct, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, it(S.label), 1)
                    ]),
                    B("button", {
                      class: ct(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      De(Ct, {
                        icon: S.visible === !0 ? Qe(Me).eye : Qe(Me).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, iC)
                  ], 10, tC))), 128))
                ])
              ])
            ], 64)) : ut("", !0),
            e.model.uiSettings ? (te(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", aC, [
                  De(Ct, {
                    icon: Qe(Me).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", sC, [
                B("div", lC, [
                  d[8] || (d[8] = B("label", null, "Drag X", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, uC),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, fC)
                  ], 8, cC)
                ]),
                B("div", dC, [
                  d[9] || (d[9] = B("label", null, "Drag Y", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, hC),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, mC)
                  ], 8, pC)
                ]),
                d[10] || (d[10] = B("div", { class: "pano-ui-row" }, [
                  B("span"),
                  B("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, oC)) : ut("", !0)
          ])
        ])) : ut("", !0),
        (e.model.footerButtons || []).length ? (te(), ce("div", gC, [
          (te(!0), ce(Ue, null, bt(e.model.footerButtons, (S) => (te(), ce("button", {
            key: S.action,
            class: ct(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, it(S.label), 11, yC))), 128))
        ])) : ut("", !0)
      ]);
    };
  }
}, vC = { class: "pano-timeline-bar" }, _C = ["aria-label", "data-tip"], wC = ["aria-label", "data-tip"], xC = { class: "pano-timeline-time" }, SC = ["data-tip"], kC = { key: 0 }, MC = ["value"], NC = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, PC = ["value"], AC = ["aria-expanded"], CC = ["inert"], IC = { class: "pano-timeline-name" }, EC = ["aria-expanded", "aria-label", "onClick"], OC = ["title", "aria-current", "onClick"], FC = ["data-keyed", "aria-label", "onClick"], TC = ["onPointerdown"], DC = ["onPointerdown"], LC = ["onPointerdown"], RC = ["onPointerdown"], $C = ["aria-label", "data-tip", "onPointerdown"], VC = { key: 0 }, zC = ["onPointerdown"], jC = ["aria-label", "data-tip", "onPointerdown"], HC = { key: 0 }, GC = 10, KC = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Ut(null), l = /* @__PURE__ */ Ut(null), u = /* @__PURE__ */ Ut(1), d = /* @__PURE__ */ Ut(0), b = /* @__PURE__ */ Ut(!1);
    let y = null, _ = null, x = null;
    uc(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), _ = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && _.observe(l.value);
    }), ys(() => {
      y == null || y.disconnect(), _ == null || _.disconnect(), x == null || x();
    });
    const N = dt(() => Math.max(1, Number(n.model.span || 1))), S = dt(() => u.value / N.value), v = (U) => `${U / N.value * 100}%`, F = dt(() => {
      const U = o.find((H) => H * S.value >= 56) || o[o.length - 1], X = [];
      for (let H = 0; H < N.value; H += U) X.push(H);
      return X;
    });
    function $(U) {
      const X = a.value.getBoundingClientRect(), H = Math.floor((U - X.left) / Math.max(1, X.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, H));
    }
    function W(U, X, H) {
      const A = Math.ceil(GC / Math.max(1e-6, S.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return nk(X.map((Y) => Y.frame), A).map((Y, Ie) => ({
        ...Y,
        key: `${U}:${Ie}`,
        partial: Y.frames.some((Oe) => !ee.get(Oe)),
        selected: Y.frames.some((Oe) => H.includes(Oe))
      }));
    }
    function I(U) {
      return W(U.id, U.keys, U.selectedFrames);
    }
    function V(U) {
      return W(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? N.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function z(U, X) {
      const H = U.clientX, A = Math.max(1e-6, S.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Oe) => {
        if (Oe.pointerId !== U.pointerId) return;
        const kt = Math.round((Oe.clientX - H) / A);
        kt !== ee && (ee = kt, X("move", ee, Oe));
      }, Ie = (Oe) => {
        Oe.pointerId === U.pointerId && (x(), X("end", ee, Oe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie), x = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
    }
    function K(U) {
      U.button === 0 && z(U, (X, H, A) => r("action", { type: "seek", frame: $(A.clientX), phase: X }));
    }
    function J(U, X, H) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), z(U, (A, ee) => r("action", { type: "clip", id: X.id, mode: H, delta: ee, phase: A })));
    }
    function _e(U, X, H, A, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !1 }), z(U, (Y, Ie) => r("action", { type: "move-keys", delta: Ie, phase: Y }));
      }
    }
    const T = dt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function C(U, X, H) {
      r("action", X), await lc(), U.target.value = H();
    }
    function ue(U) {
      C(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function de(U) {
      const X = U.target.value.trim();
      C(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function pe(U, X, H) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: H, frames: [], additive: !1 });
    }
    return (U, X) => li((te(), ce("section", {
      class: ct(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", vC, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (H) => r("action", { type: "play" }))
        }, [
          De(Ct, {
            icon: e.model.playing ? Qe(Me).pause : Qe(Me).play
          }, null, 8, ["icon"])
        ], 8, _C),
        e.model.hasAudio ? (te(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (H) => r("action", { type: "mute" }))
        }, [
          De(Ct, {
            icon: e.model.muted ? Qe(Me).volume_muted : Qe(Me).volume2
          }, null, 8, ["icon"])
        ], 8, wC)) : ut("", !0),
        B("span", xC, it(e.model.label), 1),
        B("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (te(), ce("span", kC, it(T.value), 1)) : (te(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: ue
          }, null, 40, MC)),
          X[6] || (X[6] = B("span", null, "fps", -1))
        ], 8, SC),
        B("label", NC, [
          X[7] || (X[7] = B("span", null, "Length", -1)),
          B("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: de
          }, null, 40, PC)
        ]),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (H) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = B("span", null, "Timeline", -1)),
          De(Ct, {
            icon: Qe(Me).chevron
          }, null, 8, ["icon"])
        ], 8, AC)
      ]),
      B("div", {
        class: ct(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: wt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = At((H) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = At((H) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = At((H) => b.value = !1, ["self"]))
      }, [
        B("div", {
          ref_key: "gridRef",
          ref: l,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = B("div", { class: "pano-timeline-corner" }, null, -1)),
          B("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: K
          }, [
            (te(!0), ce(Ue, null, bt(F.value, (H) => (te(), ce("span", {
              key: H,
              class: "pano-timeline-tick",
              style: wt({ left: v(H) })
            }, it(H), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: wt({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (te(!0), ce(Ue, null, bt(e.model.rows || [], (H) => (te(), ce(Ue, {
            key: H.id
          }, [
            B("div", {
              class: ct(["pano-timeline-head", { selected: H.selected }])
            }, [
              B("div", IC, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": H.open ? "true" : "false",
                  "aria-label": H.open ? `Hide ${H.label} parameters` : `Show ${H.label} parameters`,
                  onClick: At((A) => r("action", { type: "toggle-row", id: H.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Me).chevron
                  }, null, 8, ["icon"])
                ], 8, EC),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: H.label,
                  "aria-current": H.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: H.id })
                }, [
                  De(Ct, {
                    icon: H.clip ? Qe(Me).image : Qe(Me).camera
                  }, null, 8, ["icon"]),
                  B("span", null, it(H.label), 1)
                ], 8, OC),
                B("button", {
                  class: ct(["pano-timeline-key", { keyed: H.keyed }]),
                  type: "button",
                  "data-keyed": H.keyed ? "true" : "false",
                  "aria-label": H.keyed ? `Every ${H.label} parameter has a keyframe here; update them` : `Add keyframes for every ${H.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((A) => r("action", { type: "key-row", owner: H.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Me).keyframe
                  }, null, 8, ["icon"])
                ], 10, FC)
              ]),
              H.open ? (te(!0), ce(Ue, { key: 0 }, bt(H.lanes, (A) => (te(), ce("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, it(A.label), 1))), 128)) : ut("", !0)
            ], 2),
            B("div", {
              class: ct(["pano-timeline-track", { selected: H.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => pe(A, H, null)
              }, [
                H.clip ? (te(), ce("div", {
                  key: 0,
                  class: ct(["pano-timeline-clip", { open: H.clip.end === null }]),
                  style: wt(O(H.clip)),
                  onPointerdown: At((A) => J(A, H, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((A) => J(A, H, "start"), ["stop"])
                  }, null, 40, LC),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((A) => J(A, H, "end"), ["stop"])
                  }, null, 40, RC)
                ], 46, DC)) : ut("", !0),
                (te(!0), ce(Ue, null, bt(I(H), (A) => (te(), ce("button", {
                  key: A.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: wt({ left: v(A.frame + 0.5) }),
                  "aria-label": `${H.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: At((ee) => _e(ee, H, null, A, H.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (te(), ce("span", VC, it(A.frames.length), 1)) : ut("", !0)
                ], 46, $C))), 128))
              ], 40, TC),
              H.open ? (te(!0), ce(Ue, { key: 0 }, bt(H.lanes, (A) => (te(), ce("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => pe(ee, H, A.lane)
              }, [
                (te(!0), ce(Ue, null, bt(V(A), (ee) => (te(), ce("button", {
                  key: ee.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: wt({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${A.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: At((Y) => _e(Y, H, A.lane, ee, A.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (te(), ce("span", HC, it(ee.frames.length), 1)) : ut("", !0)
                ], 46, jC))), 128))
              ], 40, zC))), 128)) : ut("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: wt({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, CC)
    ], 2)), [
      [ho, e.model.visible]
    ]);
  }
}, WC = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (te(), ce("div", {
      class: ct(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: wt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, BC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, UC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (te(), ce("div", BC, [
      (te(!0), ce(Ue, null, bt(e.buttons, (r) => li((te(), sr(Qt, {
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
        [ho, r.visible !== !1]
      ])), 128))
    ]));
  }
}, YC = ["data-video-ready"], XC = { class: "pano-video-transport-shell" }, qC = { class: "pano-video-controls-left" }, JC = { class: "pano-video-filmstrip" }, ZC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, QC = ["src", "onLoad"], eI = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, tI = ["max", "value", "disabled"], nI = { class: "pano-video-controls-right" }, rI = ["data-has-audio"], iI = { class: "pano-video-volume-pop" }, oI = ["value", "disabled"], aI = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Me.pause : Me.play;
    }), a = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), l = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = dt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Me.loop_off : Me.loop;
    }), d = dt(() => {
      var O, z;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = dt(() => {
      var O, z, K;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Me.volume : ((z = t.state) == null ? void 0 : z.muted) === !0 || Number(((K = t.state) == null ? void 0 : K.volume) ?? 1) <= 0 ? Me.volume_muted : Me.volume2;
    }), y = dt(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), _ = dt(() => ({ left: `${y.value}%` })), x = dt(() => {
      var J, _e;
      const O = (J = t.state) == null ? void 0 : J.volumePct, z = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, K = Number(O ?? z ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, K))}%`
      };
    }), N = dt(() => {
      var K, J;
      const z = [
        String(((K = t.state) == null ? void 0 : K.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, z)}ch`;
    }), S = dt(() => ({ "--pano-video-time-ch": N.value })), v = dt(() => {
      var K, J;
      const O = Array.isArray((K = t.state) == null ? void 0 : K.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const z = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: z }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Ut(/* @__PURE__ */ new Set()), $ = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), W = (O) => F.value.has($(O)), I = (O) => {
      const z = new Set(F.value);
      z.add($(O)), F.value = z;
    };
    ao(v, (O) => {
      const z = new Set(O.map($)), K = /* @__PURE__ */ new Set();
      for (const J of F.value)
        z.has(J) && K.add(J);
      F.value = K;
    }, { immediate: !0 });
    const V = dt(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, z) => (te(), ce("div", {
      class: ct(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: wt(V.value)
    }, [
      z[1] || (z[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      z[2] || (z[2] = B("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", XC, [
        B("div", qC, [
          De(Qt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: wt(S.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", JC, [
          B("div", ZC, [
            (te(!0), ce(Ue, null, bt(v.value, (K) => (te(), ce("div", {
              key: $(K),
              class: ct(["pano-video-thumb", {
                "is-placeholder": !K.src,
                "is-loaded": K.src && W(K)
              }])
            }, [
              K.src ? (te(), ce("img", {
                key: 0,
                src: K.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => I(K)
              }, null, 40, QC)) : (te(), ce("span", eI))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: wt(_.value),
            "aria-hidden": "true"
          }, [...z[0] || (z[0] = [
            B("span", { class: "pano-video-playhead-line" }, null, -1),
            B("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          B("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, tI)
        ]),
        B("div", nI, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: wt(S.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          De(Qt, {
            "extra-class": "pano-video-control",
            icon: u.value,
            label: a.value,
            tip: l.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", iI, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: wt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, oI)
            ]),
            De(Qt, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, rI)
        ])
      ])
    ], 14, YC));
  }
}, sI = { class: "pano-floating-top" }, lI = ["data-selected", "data-view-count"], cI = ["data-view", "aria-pressed", "aria-label", "disabled"], uI = { class: "label" }, fI = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return te(), ce("div", sI, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (te(!0), ce(Ue, null, bt(e.buttons, (o) => li((te(), ce("button", {
            key: o.key,
            class: ct(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            De(Ct, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", uI, it(o.label), 1)
          ], 10, cI)), [
            [ho, o.visible !== !1]
          ])), 128))
        ], 8, lI)
      ]);
    };
  }
};
function hb(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Me.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Me.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Me.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected / All show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: t ? [] : [
      { key: "3dof", label: "3DoF", tip: "3DoF view (stay at the origin)", icon: Me.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF view (move freely)", icon: Me.dof_6 }
    ],
    spaceFrameButton: t ? null : { action: "frame-view", label: "Frame Selected / All", tip: "Frame the selected sticker, or everything when nothing is selected", icon: Me.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Me.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Me.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Me.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Me.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Me.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Me.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Me.globe, pressed: null, visible: !1 }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Me.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Me.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Me.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Me.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Me.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Me.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Me.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Me.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Me.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Me.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Me.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Me.lasso_tool }
        ]
      }
    ]
  };
}
const dI = ["aria-label"], pI = { class: "pano-stage-column" }, hI = { class: "pano-stage-wrap" }, mI = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, gI = {
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
    let a = "", l = !1, u = null;
    const d = /* @__PURE__ */ Ut(null), b = /* @__PURE__ */ Ut(null), y = /* @__PURE__ */ Ut(null);
    function _() {
      var T, C;
      return ((C = (T = y.value) == null ? void 0 : T.getRefs) == null ? void 0 : C.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(T) {
      var C, ue;
      return ((ue = (C = b.value) == null ? void 0 : C.open) == null ? void 0 : ue.call(C, T)) === !0;
    }
    function N(T) {
      o("image-file-selected", T);
    }
    function S(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: _, openImagePicker: x });
    const v = dt(() => r.readOnly === !0), F = dt(() => r.shellPreset || hb(r.type)), $ = dt(() => {
      var C, ue, de;
      const T = String((((C = r.uiState) == null ? void 0 : C.stageStatus) === "failed" ? (ue = r.uiState) == null ? void 0 : ue.stageStatusDetail : (de = r.uiState) == null ? void 0 : de.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = dt(() => {
      var C;
      const T = Array.isArray((C = F.value) == null ? void 0 : C.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return v.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Me.fullscreen
      }), T;
    });
    function I() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function V() {
      var ue;
      const C = I()[0] || d.value;
      (ue = C == null ? void 0 : C.focus) == null || ue.call(C);
    }
    function O() {
      var T;
      u != null && u.isConnected && ((T = u.focus) == null || T.call(u)), u = null;
    }
    function z(T) {
      var C, ue, de, pe;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = I();
          if (!U.length) {
            T.preventDefault(), (ue = (C = d.value) == null ? void 0 : C.focus) == null || ue.call(C);
            return;
          }
          const X = U[0], H = U[U.length - 1], A = document.activeElement;
          if (T.shiftKey) {
            (A === X || A === d.value || !((de = d.value) != null && de.contains(A))) && (T.preventDefault(), H.focus());
            return;
          }
          (A === H || !((pe = d.value) != null && pe.contains(A))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function K() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function J() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", z), T ? (u || (u = document.activeElement), K(), document.addEventListener("keydown", z), lc(() => {
        V();
      })) : (J(), O());
    }
    return uc(() => {
      _e(r.open);
    }), ys(() => {
      J(), document.removeEventListener("keydown", z), O();
    }), ao(() => r.open, (T) => {
      _e(T);
    }), (T, C) => e.open ? (te(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[2] || (C[2] = At((ue) => o("close"), ["self"]))
    }, [
      B("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        B("div", pI, [
          B("div", hI, [
            C[3] || (C[3] = B("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[4] || (C[4] = B("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[5] || (C[5] = B("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (te(), ce("div", mI, it($.value), 1)) : ut("", !0),
            C[6] || (C[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(oA, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            De(Jy, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: S
            }, null, 512),
            v.value ? ut("", !0) : (te(), ce(Ue, { key: 1 }, [
              De(UC, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(CP, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(iA, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(aI, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(fI, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(kP, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            De(pA, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(WC, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(DP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(KC, {
            model: e.uiState.timeline || {},
            onAction: C[0] || (C[0] = (ue) => o("timeline", ue))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ut("", !0) : (te(), sr(bC, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: C[1] || (C[1] = (ue) => o("timeline", ue))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, dI)
    ])) : ut("", !0);
  }
}, yr = "loading", ca = "ready", rr = "failed";
function mb(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function gb(e, t = "") {
  return e && (e.__panoLoadState = ca, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function yb(e, t = "") {
  return e && (e.__panoLoadState = rr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Vf(e, t) {
  return e ? e.__panoLoadState === rr ? rr : typeof t == "function" && t(e) ? ca : yr : ca;
}
function zf(e) {
  return Vf(e) === rr;
}
function yI({ presented: e, background: t = ca, stickers: n = [] } = {}) {
  if (!e) return { status: yr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === yr, a = r.includes(yr);
  if (o && a) return { status: yr, detail: "mixed" };
  if (o) return { status: yr, detail: "background" };
  if (a) return { status: yr, detail: "stickers" };
  const l = t === rr, u = r.includes(rr);
  return l && u ? { status: rr, detail: "mixed" } : l ? { status: rr, detail: "background" } : u ? { status: rr, detail: "stickers" } : { status: ca, detail: "" };
}
const bI = "state_json", vI = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), zu = "sticker_image_1", _I = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), cg = 0.01, wI = "external_image", el = "pano_sticker_input_images", xI = "pano_sticker_input_videos", SI = "pano_sticker_input_frames", kI = "pano_sticker_input_video_meta", MI = !0, xl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pr = Math.PI / 180, to = 180 / Math.PI, ju = 1, NI = "rgb(255, 221, 87)", PI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, AI = 64, ug = 40, Hu = 16, CI = 0.45, fg = 180, II = 160, ec = 24, EI = 4, OI = 4, tl = /* @__PURE__ */ new Map(), dg = /* @__PURE__ */ new Map(), Ii = /* @__PURE__ */ new Map(), FI = 12, Wn = My({
  app: vr,
  api: Bt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: zf,
    markImageFailed: yb,
    markImageLoading: mb,
    markImageReady: gb
  }
});
function Gu(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = Wn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const TI = Wn.assetSource, za = Wn.source, Ku = Wn.uiImage, DI = Wn.invalidateUiImage, LI = Wn.resolvePreferredExactLinkedSource, Wu = Wn.loadPreferredExactLinkedImage;
function nl(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function RI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function $I(e, t, n) {
  const r = q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function VI(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ii.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ii.delete(t), Ii.set(t, n), n);
}
function zI(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ii.delete(n), Ii.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ii.size > FI; ) {
      const o = Ii.keys().next().value;
      if (!o) break;
      Ii.delete(o);
    }
}
function jI(e) {
  return e * e * e;
}
function yc(e, t, n) {
  return { x: e, y: t, z: n };
}
function pg(e, t) {
  return yc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function hg(e, t) {
  return yc(e.x * t, e.y * t, e.z * t);
}
function Bu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function HI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return yc(e.x / t, e.y / t, e.z / t);
}
function rl(e) {
  return {
    yaw: Wt(Math.atan2(e.x, e.z) * to),
    pitch: q(Math.asin(q(e.y, -1, 1)) * to, -90, 90)
  };
}
function Jr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, l = t[r].y, u = t[o].x, d = t[o].y;
    l > e.y != d > e.y && e.x < (u - a) * (e.y - l) / (d - l || 1e-6) + a && (n = !n);
  }
  return n;
}
function Pi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Uu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return Pi(e, t);
  const d = q((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, _ = Number(e.x || 0) - b, x = Number(e.y || 0) - y;
  return _ * _ + x * x;
}
function tr(e, t, n) {
  return e + (t - e) * n;
}
function Ar(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function GI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let il = { fillStyle: "", url: "" };
function KI(e, t, n) {
  if (il.url && il.fillStyle === String(e || ""))
    return il.url;
  const r = GI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ec}" height="${ec}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return il = { fillStyle: String(e || ""), url: r }, r;
}
function Sl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Gn(e) {
  return {
    r: q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function wn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function WI(e) {
  return xl.some((t) => Sl(e, t.color));
}
function Yu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = q(Number(t), 0, 1), a = q(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const l = Math.floor(r * 6), u = r * 6 - l, d = a * (1 - o), b = a * (1 - u * o), y = a * (1 - (1 - u) * o);
  switch (l % 6) {
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
function Xu(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function Vo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const bb = "pano_suite.ui_settings.v1", vb = "pano_suite.node_grid_visibility.v1";
let Bo = null, Cr = null;
function kl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function BI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(bb)) || "").trim();
    if (!t) return Bo ? kl(Bo) : null;
    const n = JSON.parse(t), r = kl(n);
    return Bo = r, r;
  } catch {
    return Bo ? kl(Bo) : null;
  }
}
function UI(e) {
  var n;
  const t = kl(e);
  Bo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(bb, JSON.stringify(t));
  } catch {
  }
  return t;
}
function _b() {
  var e;
  if (Cr && typeof Cr == "object")
    return Cr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(vb)) || "").trim();
    if (!t)
      return Cr = {}, Cr;
    const n = JSON.parse(t);
    return Cr = n && typeof n == "object" ? n : {}, Cr;
  } catch {
    return Cr = {}, Cr;
  }
}
function YI(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = _b()[n];
  return typeof o == "boolean" ? o : !!t;
}
function XI(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = _b();
  r[n] = !!t, Cr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(vb, JSON.stringify(r));
  } catch {
  }
}
function qI(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function mg(e) {
  const { paintCount: t, maskCount: n } = qI(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, a = 0;
  return r.forEach((l) => {
    String((l == null ? void 0 : l.layerKind) || "paint") === "mask" ? a += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: a,
    totalPaintCount: t + o,
    totalMaskCount: n + a
  };
}
function zo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ol(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function JI(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function qi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ZI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function QI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function eE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function tE(e, t, n = {}) {
  var xh, Sh;
  await tb(e, { tolerateOperationFailure: !0 }), Wn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = JI(e, t);
  await Ed();
  const u = ol(e, "output_preset"), d = ol(e, "coverage"), b = ol(e, "bg_color"), y = ol(e, bI), _ = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Wu(
      e,
      i,
      () => le(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = _();
    return eE(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return QI(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : ZI(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, v = (S ? Z0 : J0)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Kn(d == null ? void 0 : d.value),
    sharedUiSettings: BI(),
    active: ny(e),
    fps: S ? Gu(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, $ = F ? Sp(F, !1) : { width: 220, height: 132 }, W = hb(t), I = /* @__PURE__ */ ua({
    stageStatus: yr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (W.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (xh = W.spaceButtons) != null && xh.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: W.spaceButtons, frame: W.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    toolButtons: (W.toolButtons || []).map((i) => ({ ...i, disabled: !1, ...i.key === "add-world" ? { visible: S } : {} })),
    floatingButtons: [
      ...(W.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Me.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Me.aspect,
      rotateIcon: Me.rotate_90,
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
      icon: Me.fullscreen,
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
      customColorCss: Ar({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Ar({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: $.width,
      height: $.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const O = ({ intent: i, file: s } = {}) => {
    if (br(s)) {
      if (i === "add") {
        $p(s);
        return;
      }
      if (i === "add-world") {
        Mv(s);
        return;
      }
      i === "replace" && Av(s);
    }
  }, z = ({ intent: i } = {}) => {
  }, K = id(gI, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: W,
    paintSwatches: xl.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Ar(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      Do();
    },
    onTimeline: (i) => xv(i),
    onImageFileSelected: O,
    onImageFileCancelled: z
  });
  let J = null;
  try {
    J = K.mount(V);
  } catch (i) {
    try {
      K.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const _e = V.querySelector(".pano-modal-overlay"), T = V.querySelector(".pano-modal"), C = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), ue = T == null ? void 0 : T.querySelector("[data-stage-background]"), de = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), pe = ((Sh = J == null ? void 0 : J.getPaintOverlayRefs) == null ? void 0 : Sh.call(J)) || {}, U = pe.cursor || null, X = pe.sizePreview || null, H = pe.sizeSample || null;
  if (!_e || !T || !C || !ue || !de || !U || !X || !H)
    throw K.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = C.getContext("2d"), ee = T.querySelector("[data-side]"), Y = T.querySelector("[data-video-element]"), Ie = T.querySelector("[data-port-video-element]"), Oe = T.querySelector(".pano-floating-right"), kt = T.querySelector(".pano-floating-top"), yt = T.querySelector("[data-tool-rail]"), cn = T.querySelector("[data-frame-rail]"), at = T.querySelector("[data-frame-roll-knob]"), qn = T.querySelector("[data-paint-dock]"), It = T.querySelector(".pano-video-transport"), en = T.querySelector("[data-selection-menu]");
  let mn = !1;
  const hi = T.querySelector("[data-tooltip]"), R = T.querySelector("[data-camera-preview-host]"), G = T.querySelector("[data-camera-preview-canvas]"), re = T.querySelector("[data-paint-color-row]"), se = T.querySelector("[data-paint-color-pop]"), me = T.querySelector("[data-paint-color-sv]"), ve = T.querySelector("[data-paint-color-sv-cursor]"), Se = T.querySelector("[data-paint-hue-strip]"), Ne = T.querySelector("[data-paint-hue-handle]");
  let xe = 0, fe = 0;
  de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", ue.style.opacity = "0", o && (ee == null || ee.remove(), T.classList.add("pano-modal-readonly"));
  const je = () => {
    if (!h.customPaintSessionStart) return;
    if (Sl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (WI(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      Gn(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !Sl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Ce = (i = !1) => {
    !se || se.hidden || (i ? je() : h.customPaintSessionStart = null, se.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, Ve = () => {
    se && (se.hidden && (h.customPaintSessionStart = Gn(h.customPaintColor)), se.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Hi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), Ce(!0), t === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, We(), le()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const Ke = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, st = JSON.stringify(vm(v)), h = {
    mode: "pano",
    selectedId: Ke,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: ro,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Kn(v.coverage),
    historyController: iP(80, { entries: [st], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Xr,
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
    showGrid: YI(e == null ? void 0 : e.id, !0),
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
    paintEngine: lf(),
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
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Le = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let nt = null;
  t === "stickers" && (h.selectedId = null, v.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const ft = /* @__PURE__ */ new Map(), gn = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), Jt = document.createElement("canvas");
  Jt.__panoFrameIdx = 0;
  const Et = document.createElement("canvas");
  Et.__panoFrameIdx = 0;
  const Pe = {
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
  }, tn = aM({
    onReady: () => le(),
    onFailed: () => le(),
    onUpdate: () => {
      Pe.backgroundDirty = !0, le({ localOnly: !0 });
    }
  });
  let jr = { key: "", projection: null }, mi = { key: null, sceneState: null }, vo = null, j = null, ge = null, Ee = null;
  const $e = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Re = (i) => {
    const s = String(i || "default");
    C.style.cursor !== s && (C.style.cursor = s);
  }, Ae = {
    timer: 0,
    target: null
  }, Ye = {
    active: !1,
    depth: 0
  }, Ze = {
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
  }, Ot = 9, yn = [];
  let Vt = 0;
  const _o = () => {
    var P, M;
    const i = (P = de == null ? void 0 : de.getBoundingClientRect) == null ? void 0 : P.call(de), s = (M = Oe == null ? void 0 : Oe.getBoundingClientRect) == null ? void 0 : M.call(Oe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(c - g * 2)), k = h.fullscreen ? Math.min(1200, w) : w;
    I.videoTransport.shellMaxWidthPx = k;
  }, Li = () => {
    Vt || (Vt = window.requestAnimationFrame(() => {
      Vt = 0, _o();
    }));
  }, gi = (i) => {
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
    return !!I.videoTransport.hasAudio;
  }, Ft = typeof ResizeObserver < "u" ? new ResizeObserver(() => Li()) : null;
  Ft == null || Ft.observe(de), Oe && (Ft == null || Ft.observe(Oe)), yn.push(() => {
    var i;
    Vt && (window.cancelAnimationFrame(Vt), Vt = 0), (i = Ft == null ? void 0 : Ft.disconnect) == null || i.call(Ft);
  }), Li();
  const xr = () => {
    Ze.thumbnailJobId += 1, Ze.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ot;
  }, wo = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      xr();
      return;
    }
    const p = VI(f);
    if (p) {
      Ze.thumbnailSrc = f, I.videoTransport.thumbnails = p.thumbnails, I.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Ze.thumbnailJobId;
    Ze.thumbnailSrc = f, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ot;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((oe) => {
      let ye = !1;
      const ae = (ke) => {
        ye || (ye = !0, oe(ke));
      };
      g.addEventListener("loadedmetadata", () => ae(!0), { once: !0 }), g.addEventListener("canplay", () => ae(!0), { once: !0 }), g.addEventListener("error", () => ae(!1), { once: !0 }), g.src = f, g.load();
    });
    if (Ze.thumbnailJobId !== m) return;
    const k = Number(g.videoWidth || 0), P = Number(g.videoHeight || 0);
    if (!w || k < 1 || P < 1) {
      Ze.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), E = document.createElement("canvas"), L = 46, D = Math.max(72, Math.round(k / P * L));
    E.width = D, E.height = L;
    const Q = E.getContext("2d");
    if (!Q) return;
    const Z = [], ne = (oe) => new Promise((ye) => {
      let ae = !1;
      const ke = () => {
        ae || (ae = !0, ye());
      };
      g.addEventListener("seeked", ke, { once: !0 }), g.addEventListener("error", ke, { once: !0 });
      try {
        g.currentTime = oe;
      } catch {
        ke();
      }
    });
    for (let oe = 0; oe < Ot; oe += 1) {
      if (Ze.thumbnailJobId !== m) return;
      const ye = oe / (Ot - 1), ae = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), M * ye)) : 0;
      if (await ne(ae), Ze.thumbnailJobId !== m) return;
      Q.clearRect(0, 0, D, L), Q.drawImage(g, 0, 0, D, L), Z.push({
        id: `thumb-${oe}`,
        src: E.toDataURL("image/jpeg", 0.72),
        time: ae,
        label: Ic(ae)
      });
    }
    Ze.thumbnailJobId === m && (I.videoTransport.thumbnails = Z, I.videoTransport.thumbnailCount = Z.length || Ot, zI(f, {
      thumbnails: Z,
      thumbnailCount: Z.length || Ot,
      duration: M,
      fps: c
    }));
  };
  yn.push(() => {
    xr();
  });
  const zt = zy({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: Ms,
    span: () => {
      if (S) return qc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * Ms());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? yv(i) : bi(), le({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Kb() && (Pe.backgroundDirty = !0);
    },
    onChange: () => {
      bi(), Ur(), le({ cause: "frame_view", localOnly: !0 });
    }
  });
  yn.push(() => zt.dispose());
  const nn = S && Ie instanceof HTMLVideoElement ? jy({
    video: Ie,
    onCapture: () => {
      var c;
      const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
      i < 1 || s < 1 || (Et.width = i, Et.height = s, (c = Et.getContext("2d")) == null || c.drawImage(Ie, 0, 0), Et.__panoFrameIdx += 1, le({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => le({ cause: "frame_view", localOnly: !0 })
  }) : null;
  nn && yn.push(() => nn.dispose());
  const cr = S ? Cy({
    createImage: (i, s) => {
      const c = new Image();
      return c.onload = s, c.onerror = s, c.src = i, c;
    },
    onLoad: () => le({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      vi(), le({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      bi({
        hasAudio: I.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
      });
    }, c = () => {
      const f = Y.dataset.panoSrc;
      f && (Ze.failedSrcs.add(f), vi(), le());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", c]
    ])
      Y.addEventListener(f, p), yn.push(() => Y.removeEventListener(f, p));
  }
  function vs() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : c ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Ri(i) {
    return Fd(i == null ? void 0 : i.dataTransfer);
  }
  function zn(i) {
    const s = !!i;
    Ye.active !== s && (Ye.active = s, de.classList.toggle("drop-active", s));
  }
  function bc(i, s, c = h.viewFov, f = 140, p = 620) {
    const m = Jx(h.viewYaw, i), g = s - h.viewPitch, w = c - h.viewFov, k = Math.hypot(m, g) + Math.abs(w) * 0.6, P = Math.round(q(f + k * 2.2, f, p));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: P,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, le();
  }
  Qb();
  function Sr() {
    return t === "stickers" ? _s() : v.shots;
  }
  function _s() {
    return S ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function ur(i) {
    return S && vt(i);
  }
  function vc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Zt(i) {
    return ur(i) ? yd(i, h.frame) : i;
  }
  function fr(i, s) {
    ur(i) ? Q0(i, h.frame, s) : Object.assign(i, s);
  }
  function bn() {
    const i = v.painting || (v.painting = Qo(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function wb(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = v.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }
    return c;
  }
  function xb() {
    return wb("paint");
  }
  function pa(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ha(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function ln(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function ma(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const f = c.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function _c() {
    var s;
    let i = -1;
    for (const c of _s())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of bn())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function $d(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const f = bn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: s == null ? _c() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function Sb(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: q(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: q(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: q(c + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: q(c + p, 0, 1)
      }
    ];
  }
  function kb() {
    const i = new Set(xb()), c = bn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      c.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || c.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: _c(),
        locked: !1,
        frame: null
      });
    }), c.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), v.painting.groups = c, c;
  }
  function Mb(i, s, c) {
    var Z;
    const f = (ne) => (Number(ne || 0) % 1 + 1) % 1, p = [];
    for (const ne of c) {
      const oe = ne == null ? void 0 : ne.geometry, ye = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(ye) && p.push(...ye);
    }
    if (!p.length) return null;
    const m = f(((Z = p[0]) == null ? void 0 : Z.u) || 0);
    let g = 0, w = 0;
    p.forEach((ne) => {
      const oe = f((ne == null ? void 0 : ne.u) || 0);
      g += m + Zn(oe, m), w += Number((ne == null ? void 0 : ne.v) || 0);
    });
    const k = (g / p.length % 1 + 1) % 1;
    let P = 1 / 0, M = -1 / 0, E = 1 / 0, L = -1 / 0;
    p.forEach((ne) => {
      const oe = f((ne == null ? void 0 : ne.u) || 0), ye = Zn(oe, k);
      P = Math.min(P, ye), M = Math.max(M, ye);
      const ae = Number((ne == null ? void 0 : ne.v) || 0);
      E = Math.min(E, ae), L = Math.max(L, ae);
    });
    const D = c.reduce((ne, oe) => {
      const ye = Mi(String((oe == null ? void 0 : oe.toolKind) || "pen")), ae = Dn[ye] || Dn[Xr], ke = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((ae == null ? void 0 : ae.sizeScale) ?? 1));
      return Math.max(ne, ke);
    }, 0), Q = Math.max(35e-4, D / 2048);
    return {
      centerUv: { u: ((k + (P + M) * 0.5) % 1 + 1) % 1, v: q((E + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - P) * 0.5 + Q,
      halfH: (L - E) * 0.5 + Q,
      uvPad: Q
    };
  }
  function yi(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = bn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = c || dr(f, s);
    return p.frame = Mb(f, s, m), p.frame;
  }
  function xo() {
    var f;
    const i = _s().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = kb().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), c = (Array.isArray((f = v.painting) == null ? void 0 : f.raster_objects) ? v.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...c].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function wc(i = !0) {
    var c, f, p, m, g, w;
    const s = xo().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = h.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), P = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      k && P === "paint" && M !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function xc(i = !0) {
    var w, k, P, M, E, L;
    const s = xo();
    if (!i) return s;
    const c = String(((k = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((M = (P = h.interaction) == null ? void 0 : P.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((L = (E = h.interaction) == null ? void 0 : E.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!c || f !== "paint" || p === "eraser" || s.some((D) => D.type === "strokeGroup" && String(D.actionGroupId || "") === c))
      return s;
    const m = Mt();
    let g = s.reduce((D, Q) => Math.max(D, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return m && rn(m) && String(m.actionGroupId || "") === c && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: g,
        item: null
      }
    ].sort((D, Q) => Number((D == null ? void 0 : D.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function Nb() {
    return bn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => ko(pa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Pb() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => So(ha((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Vd(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function Ab() {
    var s, c, f, p;
    let i = null;
    try {
      const m = wc(), g = ((p = (f = (c = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${ka()}:${Sc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Sc() {
    var p, m, g, w, k, P, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Vd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const E = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), D = ((g = E == null ? void 0 : E.rawPoints) == null ? void 0 : g.length) ?? ((w = E == null ? void 0 : E.points) == null ? void 0 : w.length) ?? 0, Q = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${Q}_${D}_${h.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((P = i == null ? void 0 : i.item) == null ? void 0 : P.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${c || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function kc() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function jn(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function vt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function On() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function So(i) {
    const s = ln(i);
    if (!s) return null;
    const c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ha(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function vn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = ln(i.rasterObjectId || i.id || "");
    return !!s && !!So(ha(s));
  }
  function ko(i) {
    const s = ma(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = bn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === c || String((p == null ? void 0 : p.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: pa("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function rn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!ko(pa(c, s));
  }
  function dr(i, s = null) {
    const c = ma(i, s), f = String(c.actionGroupId || "").trim();
    return f ? Fo(c.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function Cb(i, s = "paint") {
    const c = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${h.mode}:${Sa()}`;
    if (h.mode === "frame") {
      const m = He(), g = String((m == null ? void 0 : m.id) || ""), w = m ? on(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function ws(i, s, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: q(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function Zn(i, s) {
    let c = Number(i || 0) - Number(s || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Mc(i, s = null, c = null) {
    var P;
    const f = ma(i, s), p = Array.isArray(c) ? c : dr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const E = (M == null ? void 0 : M.geometry) || null, L = (E == null ? void 0 : E.geometryKind) === "lasso_fill" ? E == null ? void 0 : E.points : (E == null ? void 0 : E.processedPoints) || (E == null ? void 0 : E.rawPoints) || (E == null ? void 0 : E.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((P = m[0]) == null ? void 0 : P.u) || 0);
    let w = 0, k = 0;
    return m.forEach((M) => {
      w += g + Zn(Number((M == null ? void 0 : M.u) || 0), g), k += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: q(k / m.length, 0, 1)
    };
  }
  function xs(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Zn(Number(i.u || 0), p), w = Number(i.v || 0) - m, k = Number(f || 0) * Pr, P = Math.cos(k), M = Math.sin(k), E = Math.max(0.02, Number(c || 1)), L = (g * P - w * M) * E, D = (g * M + w * P) * E;
    return {
      ...i,
      u: ((p + L) % 1 + 1) % 1,
      v: q(m + D, 0, 1)
    };
  }
  function zd(i, s, c, f = null, p = null, m = null) {
    const g = ma(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Fo(g.layerKind), P = Array.isArray(f) ? new Map(f.map((E) => [String((E == null ? void 0 : E.id) || ""), E])) : null;
    let M = !1;
    if (k.forEach((E) => {
      if (String((E == null ? void 0 : E.actionGroupId) || "").trim() !== w) return;
      const L = (P == null ? void 0 : P.get(String((E == null ? void 0 : E.id) || ""))) || E, D = E == null ? void 0 : E.geometry, Q = L == null ? void 0 : L.geometry;
      !D || !Q || (Array.isArray(Q.points) && (D.points = Q.points.map((Z) => ws(Z, s, c)), M = !0), Array.isArray(Q.rawPoints) && (D.rawPoints = Q.rawPoints.map((Z) => ws(Z, s, c)), M = !0), Array.isArray(Q.processedPoints) && (D.processedPoints = Q.processedPoints.map((Z) => ws(Z, s, c)), M = !0));
    }), M && m) {
      const E = bn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === w);
      E && (E.frame = null);
    }
    return M;
  }
  function jd(i, s = 1, c = 0, f = null, p = null, m = null) {
    const g = ma(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Fo(g.layerKind), P = Array.isArray(f) ? f : dr(w, g.layerKind), M = Array.isArray(P) ? new Map(P.map((D) => [String((D == null ? void 0 : D.id) || ""), D])) : null, E = (m == null ? void 0 : m.centerUv) ?? Mc(w, g.layerKind, P);
    let L = !1;
    if (k.forEach((D) => {
      if (String((D == null ? void 0 : D.actionGroupId) || "").trim() !== w) return;
      const Q = (M == null ? void 0 : M.get(String((D == null ? void 0 : D.id) || ""))) || D, Z = D == null ? void 0 : D.geometry, ne = Q == null ? void 0 : Q.geometry;
      !Z || !ne || (Array.isArray(ne.points) && (Z.points = ne.points.map((oe) => xs(oe, E, s, c)), L = !0), Array.isArray(ne.rawPoints) && (Z.rawPoints = ne.rawPoints.map((oe) => xs(oe, E, s, c)), L = !0), Array.isArray(ne.processedPoints) && (Z.processedPoints = ne.processedPoints.map((oe) => xs(oe, E, s, c)), L = !0));
    }), L && m) {
      const D = bn().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === w);
      D && (D.frame = null);
    }
    return L;
  }
  function Hd(i, s, c, f = null) {
    const p = ln(i);
    if (!p) return !1;
    const m = On().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, k = Number(w.du || 0) + Number(s || 0), P = q(Number(w.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = P, !0;
  }
  function Ib(i, s = 1, c = null) {
    const f = ln(i);
    if (!f) return !1;
    const p = On().find((P) => String((P == null ? void 0 : P.id) || "").trim() === f);
    if (!p) return !1;
    const m = c && typeof c == "object" ? c : p, g = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(g.scale || 1)), k = q(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = k, !0;
  }
  function Mt() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = ko(i);
    if (s) return s;
    const c = So(i);
    return c || (t === "cutout" ? kc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : Sr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function Qn() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], c = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || c.has(p)) return;
      c.add(p);
      const m = p === String(h.selectedId || "") ? Mt() : ko(p) || So(p) || (t === "cutout" ? kc().find((g) => String((g == null ? void 0 : g.id) || "") === p) : Sr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function ga(i = null) {
    const s = Array.isArray(i) ? i : Qn();
    if (!s || s.length < 2) return null;
    const c = s.map((P) => Xt(P)).filter((P) => (P == null ? void 0 : P.visible) && Array.isArray(P.corners) && P.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((P) => P.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = c.flatMap((P) => P.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), w = Math.min(...p), k = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (w + k) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: g, y: w },
        { x: g, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: w, a: { x: m, y: w }, b: { x: g, y: w } },
        { edge: "right", x: g, y: (w + k) * 0.5, a: { x: g, y: w }, b: { x: g, y: k } },
        { edge: "bottom", x: (m + g) * 0.5, y: k, a: { x: g, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (w + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: w },
      rotateHandle: { x: (m + g) * 0.5, y: w - 30 }
    };
  }
  function Gd(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Ss() {
    const i = Mt();
    return i ? rn(i) || vn(i) ? "stroke" : jn(i) ? "frame" : "image" : null;
  }
  function fn(i) {
    if (!i || typeof i != "object") return !1;
    if (rn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), c = bn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (vn(i)) {
      const s = ln(i.rasterObjectId || i.id || ""), c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Nc(i = null) {
    const s = Array.isArray(i) ? i : Qn();
    return s.length > 0 && s.every((c) => fn(c));
  }
  function Eb(i, s) {
    const c = s === !0;
    if (!i || typeof i != "object") return !1;
    if (rn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = bn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    if (vn(i)) {
      const f = ln(i.rasterObjectId || i.id || ""), p = On().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function Ob() {
    if (r) return;
    const i = Qn();
    if (!i.length) return;
    const s = !Nc(i);
    let c = !1;
    i.forEach((f) => {
      Eb(f, s) && (c = !0);
    }), c && (rt(), lt(), We(), ze(), le());
  }
  function pr(i) {
    No(), Le.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && vt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && jn(i) ? v.active.selected_shot_id = i.id || null : i ? jn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function Fb(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }), h.selectedIds = c, No(), Le.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && c.includes(p) ? p : c[c.length - 1] || null;
    const m = Mt();
    v.active.selected_sticker_id = m && vt(m) && m.id || null, m && jn(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function Kd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, g;
      const p = Gt(c) ? String(c.id || zu) : String(((g = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : g.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Tb(i) {
    return i === "frame" ? Me.camera : i === "stroke" ? Me.paintbrush_vertical_tool : Me.image;
  }
  function Pc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Tb(i.kind)
    };
  }
  function ks() {
    return _c();
  }
  function Gt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === zu || String(i.source_kind || "") === wI;
  }
  function Mo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Db(i) {
    return Gt(i) && Mo(i) ? uy : 1;
  }
  function Lb() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function Rb() {
    return String(Lb() || "") === "lasso_fill";
  }
  function $b() {
    if (r) return;
    const i = Mt();
    !i || !Gt(i) || (i.visible = Mo(i), Tt(), rt(), lt(), ze(), We(), le());
  }
  function Vb() {
    if (r || t !== "stickers") return;
    const i = Mt();
    if (!i || !Gt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ec(el, () => {
      le();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = _i(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), rt(), lt(), ze(), We(), le();
  }
  function zb(i) {
    if (!i || !Gt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Ec(el, () => {
      le();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = _i(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function jb() {
    const i = Mt();
    if (!i || !Gt(i)) return !1;
    const s = zb(i);
    if (!s) return !1;
    const c = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function Hr(i) {
    return Wn.uiList(e, i);
  }
  function Ac(i) {
    return Wn.uiValue(e, i);
  }
  function Wd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Ll(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Hb() {
    const { metaKey: i } = Wd(), s = Ac(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Cc(i) {
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
  function Ic(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), c = Math.floor(s / 60), f = s % 60;
    return `${c}:${String(f).padStart(2, "0")}`;
  }
  function Ms() {
    return S ? v.timeline.fps : Ze.metaFps || 1e3;
  }
  function bi(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), f = zt.frame / Ms(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = zt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : I.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : I.videoTransport.volume
    ), P = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : gi(Y), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: Ic(f),
      durationLabel: Ic(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: P,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? Ot))
    });
  }
  function Bd() {
    return !!(Y instanceof HTMLVideoElement && !S && Y.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Ud() {
    if (!(Y instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), bi({
      hasAudio: I.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function Gb() {
    bi({
      visible: Bd()
    });
  }
  function Kb() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    (Jt.width !== i || Jt.height !== s) && (Jt.width = i, Jt.height = s);
    const c = Jt.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), Jt.__panoFrameIdx = Number(Jt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Yd() {
    return !zt.showsVideo && Number(Jt.width || 0) > 0 && Number(Jt.height || 0) > 0 && Number(Jt.__panoFrameIdx || 0) > 0 ? Jt : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Xd() {
    Jt.__panoFrameIdx = 0, Pe.backgroundDirty = !0;
  }
  function vi() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Wd(), s = xn(e, "background") && Hr(i)[0] || null, c = za(s), f = [c, Wn.linkedVideoFile(e, pp())].filter(Boolean), p = f.find((E) => !Ze.failedSrcs.has(E)) || "";
    Ze.videoFailed = !p && f.length > 0;
    const m = p && p === c ? Hb() : null;
    Ze.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? v.timeline.fps : 24))), w = Y.dataset.panoSrc === p && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), P = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * g))), M = !!(m != null && m.has_audio) || gi(Y);
    return p && Y.dataset.panoSrc !== p ? (Y.pause(), Xd(), Y.dataset.panoSrc = p, Y.loop = !S && !!I.videoTransport.loop, Y.muted = !!I.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), Y.src = p, Y.load(), zt.setSource(!0), S || zt.seek(0)) : !p && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Xd(), xr(), zt.setSource(!1)), S || (Y.loop = !!I.videoTransport.loop), p && !S && Ze.thumbnailSrc !== p && !Ze.thumbnailFailedSrcs.has(p) && wo(p, k, g), p || xr(), bi({
      ready: !!p,
      visible: !!p && Bd(),
      duration: k,
      frameCount: P,
      fps: g,
      hasAudio: M,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), p || null;
  }
  function qd(i, s = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const f = i[0];
      if (f && typeof f == "object" && !Array.isArray(f)) return f;
    }
    if (Array.isArray(s) && s.length > 0) {
      const f = (c = s[0]) == null ? void 0 : c.parsed_state;
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
  function Ec(i, s = null) {
    return Ku(e, i, ft, s || (() => le()));
  }
  function Oc(i = null) {
    return xn(e, "external-sticker") ? Ec(el, i) : null;
  }
  function Jd() {
    if (!xn(e, "external-sticker")) return null;
    const i = Hr(kI)[0];
    if (!i || typeof i != "object") return null;
    const s = Hr(SI).map(za).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = za(Hr(xI)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function Wb() {
    const i = v.stickers.find(Gt), s = i ? Jd() : null, c = s ? Ny(i.clip, h.frame, v.timeline.fps, s.meta) : null;
    nn.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: zt.advancing, fps: v.timeline.fps });
    const f = i ? zc(i) : null, p = s != null && s.frames ? cr.picture(s.frames, c, s.meta, f) : nn.picture(Et, f);
    return p ? { media: p, revision: Cc(p), source: Ay(s, f) } : null;
  }
  function _i(i, s, c) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(c || 1)), m = q(Number(i || 30), 0.1, 179) * Pr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return q(g * to, 0.1, 179);
  }
  function Bb(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const c = JSON.parse(s);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const f = c.version;
      let p = null;
      if (typeof f == "number" && Number.isInteger(f) ? p = f : typeof f == "string" && /^\d+$/.test(f) && (p = Number.parseInt(f, 10)), p !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), w = Number(m.pitch_deg), k = Number(m.roll_deg), P = Number(m.hFOV_deg);
      if (![g, w, k, P].every((D) => Number.isFinite(D))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const E = {
        yaw_deg: M,
        pitch_deg: q(w, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: q(P, 0.1, 179)
      }, L = Number(c.source_aspect);
      return Number.isFinite(L) && L > 0 && (E.source_aspect = L), E;
    } catch {
      return null;
    }
  }
  function Zd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = co(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Wt(Number.isFinite(s) ? s : 0),
        pitch_deg: q(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: q(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Ub(i) {
    var w;
    if (!i || typeof i != "object") return Zd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const k = q(p, 0.1, 179) * Pr, P = q(m, 0.1, 179) * Pr, M = Math.tan(P * 0.5);
      if (Math.abs(M) > 1e-6) {
        const E = Math.tan(k * 0.5) / M;
        Number.isFinite(E) && E > 0 && (g = E);
      }
    }
    if (i != null && i.asset_id && ((w = v == null ? void 0 : v.assets) != null && w[i.asset_id])) {
      const k = v.assets[i.asset_id], P = Number((k == null ? void 0 : k.w) || 0), M = Number((k == null ? void 0 : k.h) || 0);
      P > 0 && M > 0 && (g = P / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Wt(Number.isFinite(s) ? s : 0),
        pitch_deg: q(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: q(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Yb(i) {
    return Wn.linkedValue(e, i);
  }
  function Xb(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Bb(s);
    if (f) {
      const g = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), w = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: _i(f.hFOV_deg, g, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: _i(30, p, m),
      rot_deg: 0
    };
  }
  function qb() {
    const i = Oc(() => {
      ai(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? qd(Ac("pano_sticker_input_pose"), null) : null;
    return $y(v, Ry(e, { pose: s, image: i }));
  }
  function Jb() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, c = Oc(() => {
      ai(e, "image-loaded");
    }), f = qd(Ac("pano_sticker_input_pose"), null), p = Yb("sticker_state"), m = Wn.externalStateHash(e, p), g = s == null ? null : Xb(f, p, c);
    return Ly(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Qd(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? qb() : Jb();
    if (s.changed) {
      const c = v.stickers.find(Gt);
      v.stickers = s.state.stickers, v.active = s.state.active, c && h.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (h.selectedId = null, h.selectedIds = []), lt(), ze(), We();
    }
    le();
  }
  function ya(i = {}) {
    const c = i.preservePanelValues !== !1 ? Zt(Mt()) : null;
    c && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ei(c)
    }), h.selectedId = null, h.selectedIds = [], No(), h.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function ba() {
    return !S || !h.worldSelectedId ? null : v.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function Fc(i) {
    pr(null), h.worldSelectedId = i, Pe.backgroundDirty = !0;
  }
  function No() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, Pe.backgroundDirty = !0);
  }
  function Ns(i) {
    return !!i && !r && !i.locked;
  }
  function Zb() {
    if (t !== "cutout") return;
    const i = He();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function Tc() {
    if (t !== "cutout") return;
    const i = He();
    Va(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Me.camera : Me.plus_circle
    });
  }
  function $i() {
    const i = lP({
      spaceView: Vi(),
      spaceMode: h.spaceMode,
      readOnly: r,
      frameMode: t === "cutout" && h.mode === "frame",
      showGrid: h.showGrid
    });
    I.space && Object.assign(I.space, i.space);
    for (const [s, c] of Object.entries(i.buttons)) Va(I.floatingButtons, "action", s, c);
  }
  function Gr() {
    var c;
    const i = !!He();
    h.mode === "frame" && !i && (h.mode = "pano"), h.outputPreviewRect = null, I.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && h.mode === "frame" ? He() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = Vo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((c = h.interaction) == null ? void 0 : c.kind) === "roll_frame", I.frameRollKnob.armed = !!s && h.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? ei(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(ei(s)) === f
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!He(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = h.mode !== "frame", I.cameraPreview.expanded = !!h.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame), $i(), Up() ? ht(h.pointerPos) : Re(h.mode === "pano" ? "grab" : "default");
  }
  function Qb() {
    const s = hp({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function ep() {
    return fy({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, C.width, C.height);
  }
  function tp() {
    return !S || !xn(e, "scene") ? null : xm(Hr("pano_scene_files"), Hr("pano_scene_meta"), za);
  }
  function e1() {
    return !S || !xn(e, "external-sticker") ? null : xm(Hr("pano_sticker_files"), Hr("pano_sticker_meta"), za);
  }
  function Vi() {
    return h.mode === "pano" && np();
  }
  function np() {
    return S && Dk({ sceneLinked: !!by(e).scene, files: tp(), stickers: v.stickers });
  }
  function va() {
    return h.spaceMode === "6dof" && Vi();
  }
  function Dc() {
    var i, s, c;
    return IN((c = (s = (i = vr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : c.call(s, eb));
  }
  function rp() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function ip(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function t1(i) {
    ip(ay(rp(), i)), Pe.backgroundDirty = !0, $i(), le({ localOnly: !0 });
  }
  function Kr() {
    var c;
    const i = h.viewMoved ? h.viewDistance : ((c = zi()) == null ? void 0 : c.radius) || ro, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return Nk(h.spaceMode, s);
  }
  function zi() {
    var i;
    return ((i = kr().space) == null ? void 0 : i.sphere) ?? null;
  }
  function Lc(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, Pe.backgroundDirty = !0, le({ localOnly: !0 });
  }
  function op() {
    var i;
    return ((i = zi()) == null ? void 0 : i.radius) || ro;
  }
  function n1() {
    var g;
    const i = kr().space, s = mi.sceneState, c = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((w) => w.id === c), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: zl(s, h.frame).stickers[f],
      plane: i.stickers.find((w) => w.id === c) ?? null,
      item: ((g = i.sticker) == null ? void 0 : g.id) === c && i.sticker.url ? { kind: i.sticker.kind, box: tn.sceneBox(i.sticker.url) } : null
    }, m = jk(zi(), p);
    m && Lc(Tk(Kr(), m, C.width, C.height));
  }
  function Rc(i) {
    return tn.pick(Vs(), i.x, i.y, C.width, C.height);
  }
  function ap(i, s) {
    var c;
    return Ck(i, s, h.viewMoved ? null : (c = zi()) == null ? void 0 : c.center, op());
  }
  function sp() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function r1(i, s) {
    const c = performance.now(), f = { x: i.x, y: i.y, time: c, key: tn.contentKey(), view: sp() };
    if (!Ik(Ee, f)) {
      const m = Rc(i);
      Ee = { ...f, cost: performance.now() - c, hit: m };
    }
    const p = Kr();
    Lc(Fk(p, ap(p, Ee.hit), s, op())), Ee.view = sp(), Ee.wheelTime = c;
  }
  function lp(i, s, c) {
    const f = ap(Kr(), Rc(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: gc(Kr(), f) }, ht(s), C.setPointerCapture(c);
  }
  function $c() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${C.width}|${C.height}`;
    return jr.key !== i && (jr = { key: i, projection: dy(ep(), C.width, C.height) }), jr.projection;
  }
  function _a(i) {
    const s = $c().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Vc(i, s) {
    return $c().ray(i, s);
  }
  function wi() {
    const i = C.width, s = C.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const w = s, k = w * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: w };
    }
    const p = i, m = p / c;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function zc(i) {
    var g;
    if (i && typeof i == "object" && (Gt(i) || i.external === !0))
      return Oc(() => {
        ai(e, "image-loaded");
      });
    const s = S ? wa(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = ft.get(s);
    if (c) return c;
    const f = S ? ty(i.source) : (g = v.assets) == null ? void 0 : g[s], p = TI(f);
    if (!p) return null;
    const m = new Image();
    return mb(m, p), m.onload = () => {
      gb(m, p), le();
    }, m.onerror = () => {
      yb(m, p), le();
    }, m.src = p, ft.set(s, m), m;
  }
  function wa(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function cp(i, s = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const f = gn.get(c);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = c, gn.set(c, p), p;
  }
  function i1(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = un.get(s);
    if (c) return c.ready ? c : null;
    const f = cp(i, () => {
      const M = un.get(s);
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
    const k = w.getImageData(0, 0, p, m).data, P = { canvas: g, width: p, height: m, alpha: k, ready: !0 };
    return un.set(s, P), P;
  }
  function o1(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Zn(Number(i.u || 0), p), w = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), P = Number(f || 0) * Pr, M = Math.cos(P), E = Math.sin(P), L = g / k, D = w / k, Q = L * M + D * E, Z = -L * E + D * M;
    return {
      ...i,
      u: ((p + Q) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function a1(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = o1(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(w > 1e-6) || !(k > 1e-6)) return null;
    const P = Zn(Number(g.u || 0), Number(c.u0 || 0)) / w, M = (Number(g.v || 0) - Number(c.v0 || 0)) / k;
    if (P < 0 || P > 1 || M < 0 || M > 1) return 0;
    const E = i1(i);
    if (!E) return null;
    const L = q(Math.floor(P * E.width), 0, E.width - 1), D = q(Math.floor(M * E.height), 0, E.height - 1);
    return Number(E.alpha[(D * E.width + L) * 4 + 3] || 0);
  }
  function up(i, s, c, f = null) {
    if (!(s != null && s.visible) || !Jr(c, s.corners)) return !1;
    const p = f || mr(c, performance.now()), m = a1(i, p);
    return m === null ? !0 : m > 8;
  }
  function s1() {
    var f, p, m, g, w, k, P, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, wc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((M = (P = i == null ? void 0 : i.displayPaint) == null ? void 0 : P.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: c };
  }
  function l1() {
    var D, Q, Z;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = Hn(), f = `${Sc()}:${c.width}:${c.height}`;
    if (((D = h._activePaintEraserPreviewInfo) == null ? void 0 : D.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = wn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Yc(ne, p.targetSpace, !0);
    }
    const g = xa(c.width, c.height, { readback: !0 });
    if (!Ap(g, p, { w: c.width, h: c.height })) return null;
    const w = ((Z = (Q = g.ctx) == null ? void 0 : Q.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Z.data) || null;
    if (!w) return null;
    let k = c.width, P = c.height, M = -1, E = -1;
    for (let ne = 0; ne < c.height; ne += 1)
      for (let oe = 0; oe < c.width; oe += 1)
        w[(ne * c.width + oe) * 4 + 3] <= 8 || (oe < k && (k = oe), ne < P && (P = ne), oe > M && (M = oe), ne > E && (E = ne));
    if (M < k || E < P)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const L = {
      surface: g,
      bounds: { minX: k, minY: P, maxX: M, maxY: E },
      key: `${f}:${k}:${P}:${M}:${E}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: L }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Po() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function c1(i, s, c) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(g.du || 0), k = Number(m.u1 || 0) + Number(g.du || 0), P = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(q(P, 0, 1) * c),
        maxY: Math.ceil(q(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = dr(i.actionGroupId, "paint"), g = yi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const w = g.centerUv.u - g.halfW, k = g.centerUv.u + g.halfW, P = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(q(P, 0, 1) * c),
        maxY: Math.ceil(q(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    return null;
  }
  function u1(i, s, c) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: c - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function f1(i, s, c) {
    var ke, Be, Xe, ot, be, ie, he;
    if (!i || !s || !((ke = c == null ? void 0 : c.surface) != null && ke.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), p = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = c1(s, f, p);
    if (m && !u1(m, c.bounds, f)) return i;
    const g = String(((Be = s.item) == null ? void 0 : Be.id) || s.id || ""), w = ((Xe = s.item) == null ? void 0 : Xe.transform) || {}, k = `${c.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, P = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (P.has(k)) return P.get(k);
    const M = q(Math.floor(Number(((ot = c.bounds) == null ? void 0 : ot.minX) || 0)), 0, Math.max(0, f - 1)), E = q(Math.floor(Number(((be = c.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, p - 1)), L = q(Math.ceil(Number(((ie = c.bounds) == null ? void 0 : ie.maxX) || 0)), M, Math.max(0, f - 1)), D = q(Math.ceil(Number(((he = c.bounds) == null ? void 0 : he.maxY) || 0)), E, Math.max(0, p - 1)), Q = Math.max(1, L - M + 1), Z = Math.max(1, D - E + 1), ne = xa(f, p, { readback: !0 });
    ne.ctx.clearRect(0, 0, f, p), ne.ctx.drawImage(i, 0, 0);
    const oe = ne.ctx.getImageData(M, E, Q, Z);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(c.surface.canvas, 0, 0), ne.ctx.restore();
    const ye = ne.ctx.getImageData(M, E, Q, Z);
    let ae = !1;
    for (let we = 0; we < Q * Z; we += 1) {
      const Te = oe.data[we * 4 + 3], Ge = ye.data[we * 4 + 3];
      if (Te > Ge) {
        ae = !0;
        break;
      }
    }
    return ae ? (P.size > 64 && P.clear(), P.set(k, ne.canvas), ne.canvas) : (P.set(k, i), i);
  }
  function fp(i, s = null) {
    const c = ln((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const p = cp(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = s1(), w = (i == null ? void 0 : i.transform) || {}, k = [
      c,
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
      Sa()
    ].join(":"), P = Jn.get(k);
    if (P) return P;
    Jn.size > 64 && Jn.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const E = M.getContext("2d");
    if (!E) return null;
    const L = Number(f.u0 || 0) * m, D = Number(f.v0 || 0) * g, Q = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Z = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), ne = L + Q * 0.5 + Number(w.du || 0) * m, oe = D + Z * 0.5 + Number(w.dv || 0) * g, ye = Number(w.rot_deg || 0) * Pr, ae = Math.max(0.01, Number(w.scale || 1));
    for (const ke of [-m, 0, m])
      E.save(), E.translate(ne + ke, oe), E.rotate(ye), E.scale(ae, ae), E.drawImage(p, -Q * 0.5, -Z * 0.5, Q, Z), E.restore();
    return Jn.set(k, M), M;
  }
  async function jc(i, s) {
    const c = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Bt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let Ps = null, As = !1;
  function d1() {
    const i = mg(v.painting), { width: s, height: c } = Ma();
    return ck(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function dp() {
    const i = String(e.id ?? "0"), s = tl.get(i);
    if (As && s) return s;
    const c = (async () => {
      var m, g, w, k, P, M, E, L, D, Q, Z, ne;
      const f = ka(), p = mg(v.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Ps = f, Pn());
        return;
      }
      if (Ps !== f && !As) {
        As = !0;
        try {
          Fs();
          const oe = wc(!1), ye = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, oe)) || null, ae = ((w = ye == null ? void 0 : ye.displayPaint) == null ? void 0 : w.canvas) || null, ke = ((k = ye == null ? void 0 : ye.committedMask) == null ? void 0 : k.canvas) || null, Be = Math.max(1, Number(((P = ye == null ? void 0 : ye.descriptor) == null ? void 0 : P.width) || (ae == null ? void 0 : ae.width) || (ke == null ? void 0 : ke.width) || 2048)), Xe = Math.max(1, Number(((M = ye == null ? void 0 : ye.descriptor) == null ? void 0 : M.height) || (ae == null ? void 0 : ae.height) || (ke == null ? void 0 : ke.height) || 1024));
          (!ae && p.totalPaintCount > 0 || !ke && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((E = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.width) || 0) !== Be || Number(((L = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Xe) && (h._paintLayerSyncBlankSurface = xa(Be, Xe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Be, Xe));
          const ot = ae || p.totalPaintCount > 0 && ((D = h._paintLayerSyncBlankSurface) == null ? void 0 : D.canvas) || null, be = ke || p.totalMaskCount > 0 && ((Q = h._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!ot && !be) return;
          let ie = null, he = null;
          const we = [];
          if (p.totalPaintCount > 0) {
            ie = await jc(ot, `pano_paint_${i}.png`);
            for (const Te of oe) {
              const Ge = String(Te || "").trim();
              if (!Ge) continue;
              const Fe = ((ne = (Z = h.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : ne.call(Z, Ge)) || null;
              if (!Fe) continue;
              const pt = Ge.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await jc(Fe, `pano_group_${i}_${pt}.png`);
              qe && we.push({
                id: Ge,
                actionGroupId: Ge,
                image: qe
              });
            }
          }
          p.totalMaskCount > 0 && (he = await jc(be, `pano_mask_${i}.png`)), f === ka() && (v.painting_layer = {
            paint: ie,
            mask: he,
            groups: we,
            revision: f
          }, Ps = f, Pn());
        } catch (oe) {
          throw oe;
        } finally {
          As = !1;
        }
      }
    })();
    return tl.set(i, c), c.finally(() => {
      tl.get(i) === c && tl.delete(i);
    }), c;
  }
  function Hc() {
    if (t === "cutout") {
      const p = Yd();
      if (p) return p;
      const m = Wu(
        e,
        ["erp_image", "bg_erp"],
        () => le(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !zf(m) ? m : Ku(e, "pano_input_images", ft, () => le()) || m || null;
    }
    const i = Yd();
    if (i) return i;
    const s = xn(e, "background") ? Ku(e, "pano_input_images", ft, () => le()) : null;
    if (s && !zf(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = pp();
    return Wu(e, c, () => le(), `background:${c.join("|")}`) || s || null;
  }
  function pp() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Gc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function p1() {
    if (tn.failed) return { status: rr, detail: "renderer" };
    if (!tn.ready) return { status: yr, detail: "boot" };
    let i = ca;
    const s = [];
    if (h.showPanorama) {
      const c = Hc();
      i = Ze.videoFailed ? rr : Vf(c, Gc);
    }
    if (h.showObjects)
      for (const c of _s()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = zc(c);
        s.push(Vf(f, Gc));
      }
    return yI({
      presented: Pe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Ao() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], ft.delete(s));
    });
  }
  function Kc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(q(i.y, -1, 1))
    };
  }
  function Wc(i, s = null) {
    const { lon: c, lat: f } = Kc(i), p = wi();
    let m = p.x + (c / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function Cs(i) {
    const s = Zt(i), c = fa(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(q(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Pr), p = Math.tan(q(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Pr);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: p
    };
  }
  function xi(i, s, c) {
    return HI(pg(pg(i.centerDir, hg(i.right, s)), hg(i.up, c)));
  }
  function hp(i) {
    const s = Cs(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => xi(s, f * s.tanX, p * s.tanY));
  }
  function mp(i, s, c) {
    const f = Cs(i), p = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return xi(f, p, m);
  }
  function gp(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: q((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function h1(i) {
    var k, P, M, E;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), p = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => ws(xs(L, c, f, p), m, g));
  }
  function m1(i) {
    const s = ln((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Sa()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (h.mode === "frame") {
      const m = He(), g = m ? on(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function g1(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = jn(i) ? "frame" : vt(i) ? "sticker" : "item", f = Zt(i), p = [
      c,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      ei(f),
      ur(i) && Ci(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = He(), g = m ? on(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function yp() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function y1() {
    return yp() ? `${kp()}:mask_display` : "";
  }
  function bp(i) {
    if (!h.showMask) return i;
    const s = yp();
    if (!s) return i;
    const c = y1(), f = i.reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.zIndex) || 0)), -1), p = (Array.isArray(v.stickers) ? v.stickers : []).reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function b1() {
    var f, p;
    const i = xc(!0), s = l1(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        c.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${kp()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = ln((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const k = fp(g, () => le());
        if (!k) continue;
        const P = f1(k, m, s), M = (g == null ? void 0 : g.transform) || {};
        c.push({
          id: `raster:${w}`,
          source: P,
          revision: [
            ka(),
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
    return bp(c);
  }
  function v1() {
    return (h.showObjects ? b1() : bp([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function kr() {
    return vo || (vo = _1()), vo;
  }
  function _1() {
    const i = Hc(), s = v1(), c = { ...v.assets };
    for (const E of S ? [] : v.stickers) {
      const L = String((E == null ? void 0 : E.asset_id) || "");
      L && !c[L] && ft.has(L) && (c[L] = { type: "comfy_image", filename: L });
    }
    const f = S ? v.stickers.map((E) => vc(E) ? { ...E, source: { kind: "file", filename: wa(E) } } : E) : v.stickers, p = JSON.stringify([f, Object.keys(c), v.scene]);
    mi.key !== p && (mi = { key: p, sceneState: mo({ ...v, stickers: f, assets: c, painting: null }) });
    const m = nn ? Wb() : null, g = (E) => {
      if (nn && Gt(E)) return m;
      const L = zc(E);
      return L ? { media: L, revision: Cc(L) } : null;
    }, w = h.showObjects ? py(mi.sceneState, h.frame, v.stickers, { media: g, paintLayers: s }) : s.map((E) => ({ kind: "erp", ...E })), k = i && (i === Y || i === Jt) ? Y.dataset.panoSrc : i, P = h.showPanorama && Gc(i) ? { media: i, revision: Cc(i), coverage: Kn(v.coverage), source: k } : null;
    ip(Pk(rp(), np()));
    const M = Vi() ? w1(mi.sceneState, g) : null;
    return { background: P, layers: w, space: M };
  }
  function w1(i, s) {
    const c = zl(i, h.frame), f = tp(), p = ly(f, c.scene), m = p != null && p.url ? tn.sceneBox(p.url) : null, g = m && wf(p.kind, m), w = e1(), k = h.showObjects ? Lk(w, i, c) : null, P = k != null && k.url ? tn.sceneBox(k.url) : null, M = P ? [{ box: wf(k.kind, P), value: k.value }] : [], E = h.showObjects ? iM(i, h.frame, v.stickers, { media: s }) : [], L = Sf(Vk(c, g, E, M)), D = h.showGrid && !h.fullscreen ? eM((L == null ? void 0 : L.radius) || ro) : null;
    return {
      gizmo: x1(c),
      grid: D,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: Rk(w, i),
      sticker: k,
      stickers: E,
      sphere: L
    };
  }
  function x1(i) {
    const s = ba(), c = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !h.showObjects || !Ns(s) || !(c != null && c.active) ? null : { mode: h.gizmoMode, transform: cy(c) };
  }
  function S1() {
    if (!Pe.backgroundDirty && Pe.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = kr(), f = ue.width, p = ue.height, m = tn.render({
      width: f,
      height: p,
      camera: c ? Iu(Kr(), f, p, c.sphere) : ep(),
      background: i,
      layers: s,
      space: c
    }), g = ue.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !c ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), Pe.backgroundWasVisible = !!m, Pe.backgroundDirty = !1, ge = null, $i(), (h.worldSelectedId || mn) && We();
  }
  function vp(i, s, c, f) {
    const { background: p, layers: m } = kr();
    if (!p && !m.length) return !1;
    const g = tn.render({ width: s.w, height: s.h, camera: ml(c), background: p, layers: m, owner: f });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function k1(i) {
    const s = kr(), c = JSON.stringify([i, ue.width, ue.height, Nm(s)]);
    if (c === ge) return;
    const f = tn.renderUnwrap({ width: i.w, height: i.h, ...s }), p = ue.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, ue.width, ue.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), ge = f ? c : null, Pe.backgroundWasVisible = !1;
  }
  function M1(i = !1) {
    const s = C.width, c = C.height, f = wi();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || A.clearRect(0, 0, s, c), Fs(), k1(f), h.showGrid && !h.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        A.beginPath(), A.moveTo(g, f.y), A.lineTo(g, f.y + f.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        A.beginPath(), A.moveTo(f.x, g), A.lineTo(f.x + f.w, g), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(f.x, f.y + f.h / 2), A.lineTo(f.x + f.w, f.y + f.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const p = f.y + f.h * 0.57;
      A.fillText("Left", f.x + f.w * 0.25, p), A.fillText("Front", f.x + f.w * 0.5, p), A.fillText("Right", f.x + f.w * 0.75, p), A.fillText("Back", f.x + 38, p), A.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function _p(i, s, c = 1) {
    let f = !1;
    A.strokeStyle = s, A.lineWidth = c, A.beginPath();
    for (const p of i) {
      const m = _a(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), f = !0);
    }
    A.stroke();
  }
  function N1(i = !1) {
    const s = C.width, c = C.height;
    if (i || A.clearRect(0, 0, s, c), Fs(), S1(), h.showGrid && !h.fullscreen && kr().space)
      P1();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Vn(p, g));
        _p(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Vn(g, p));
        _p(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", f.forEach((p) => {
        const m = _a(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function P1() {
    const i = Iu(Kr(), C.width, C.height, zi()), s = vf(i, [0, 0, 0], C.width, C.height);
    s && (A.fillStyle = "rgba(255, 221, 87, 0.9)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", A.fillText("ERP origin", s.x, s.y - 12));
  }
  function A1(i, s = null, c = null, f = null) {
    if (h.mode === "frame") {
      const p = s || He();
      if (!p) return [];
      const m = c || on(p);
      return ov(i, p, m);
    }
    return Cp(i, f);
  }
  function Is(i, s = null, c = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = Cp([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Co(i);
    return m ? Wr(m, s, c, f) : null;
  }
  function C1(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = dr(c, i.layerKind), p = yi(c, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || Mc(c, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], k = h.mode === "frame" ? He() : null, P = k ? on(k) : null;
    for (const ae of f) {
      const ke = (ae == null ? void 0 : ae.geometry) || null, Be = (ke == null ? void 0 : ke.geometryKind) === "lasso_fill" ? ke == null ? void 0 : ke.points : (ke == null ? void 0 : ke.processedPoints) || (ke == null ? void 0 : ke.rawPoints) || (ke == null ? void 0 : ke.points) || [], Xe = A1(Be, k, P, g).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
      if (!Xe.length) continue;
      const ot = Mi(String((ae == null ? void 0 : ae.toolKind) || "pen")), be = Dn[ot] || Dn[Xr];
      w.push({
        points: Xe,
        closed: String((ke == null ? void 0 : ke.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ae == null ? void 0 : ae.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((ae == null ? void 0 : ae.layerKind) || i.layerKind || "paint")
      });
    }
    const M = Is(m, null, k, P, g);
    if (!M) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ae), ae;
    }
    const L = Sb(p).map((ae) => Is(ae, M.x, k, P, g)).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y)).map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) }));
    if (L.length < 4) {
      const ae = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ae), ae;
    }
    const D = (ae, ke) => ({
      x: (Number((ae == null ? void 0 : ae.x) || 0) + Number((ke == null ? void 0 : ke.x) || 0)) * 0.5,
      y: (Number((ae == null ? void 0 : ae.y) || 0) + Number((ke == null ? void 0 : ke.y) || 0)) * 0.5,
      a: ae,
      b: ke
    }), Q = D(L[0], L[1]), Z = D(L[1], L[2]), ne = D(L[2], L[3]), oe = D(L[3], L[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...Z },
        { edge: "bottom", ...ne },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, ye), ye;
  }
  function I1(i, s) {
    const c = h.mode === "frame" ? He() : null, f = c ? on(c) : null, p = gp(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = Is(p, null, c, f, m), k = h1(i).map((L) => Is(L, (g == null ? void 0 : g.x) ?? null, c, f, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(k) || k.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, L), L;
    }
    const P = k.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), E = {
      kind: "rasterObject",
      center: {
        x: P.reduce((L, D) => L + Number(D.x || 0), 0) / P.length,
        y: P.reduce((L, D) => L + Number(D.y || 0), 0) / P.length
      },
      corners: P,
      visible: !0
    };
    return h._strokeGeomCache.set(s, E), E;
  }
  function Wr(i, s = null, c = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = c || He(), E = f || on(M);
      if (!M || !E) return null;
      const L = M ? Na(M, i) : null;
      return L ? {
        x: Number(E.x || 0) + Number(L.x || 0) * Number(E.w || 0),
        y: Number(E.y || 0) + Number(L.y || 0) * Number(E.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Wc(i, s);
    const m = 1e-4, g = $c().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const w = C.width, k = C.height, P = Math.max(w, k) * 2;
    return {
      x: q(g.x, -P, w + P),
      y: q(g.y, -P, k + P),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function E1(i, s = []) {
    if (h.mode !== "pano" || vt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? $I(0.035, 0.2, Math.min(...c)) : 1;
  }
  function O1(i) {
    if (ur(i) && !Ci(i.clip, h.frame)) return { visible: !1 };
    const s = Zt(i), c = Vn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? He() : null, p = f ? on(f) : null, m = h.mode === "pano" && (vt(i) || jn(i)), g = m ? { clipBehind: !0 } : null, w = Wr(c, null, f, p, g);
    if (!w) return { visible: !1 };
    const k = Cs(i), M = hp(i).map((he) => Wr(he, w.x, f, p, g)).filter((he) => Number.isFinite(he == null ? void 0 : he.x) && Number.isFinite(he == null ? void 0 : he.y));
    if (M.length < 4) return { visible: !1 };
    const E = xi(k, 0, k.tanY), L = xi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), D = Wr(E, w.x, f, p, g);
    if (!D) return { visible: !1 };
    const Q = Wr(L, (D == null ? void 0 : D.x) ?? w.x, f, p, g), Z = ((Q == null ? void 0 : Q.x) ?? D.x) - D.x, ne = ((Q == null ? void 0 : Q.y) ?? D.y) - D.y, oe = Math.hypot(Z, ne) || 1, ye = {
      x: D.x + Z / oe * 30,
      y: D.y + ne / oe * 30
    }, ae = Wr(xi(k, 0, k.tanY), w.x, f, p, g), ke = Wr(xi(k, k.tanX, 0), w.x, f, p, g), Be = Wr(xi(k, 0, -k.tanY), w.x, f, p, g), Xe = Wr(xi(k, -k.tanX, 0), w.x, f, p, g);
    if (!ae || !ke || !Be || !Xe) return { visible: !1 };
    const ot = [
      w,
      ...M,
      D,
      Q,
      ae,
      ke,
      Be,
      Xe
    ];
    if (m && !ot.some((he) => Number((he == null ? void 0 : he.rawZ) ?? (he == null ? void 0 : he.z)) > 1e-4)) return { visible: !1 };
    const be = E1(i, ot), ie = [
      {
        edge: "top",
        x: ae.x,
        y: ae.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ke.x,
        y: ke.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Be.x,
        y: Be.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Xe.x,
        y: Xe.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((he) => ({ x: he.x, y: he.y })),
      edgeMidpoints: ie,
      rotateStemBase: { x: D.x, y: D.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Xt(i) {
    if (rn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = Cb(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), C1(i, m));
    }
    if (vn(i)) {
      const p = m1(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), I1(i, p));
    }
    const s = g1(i), c = h._strokeGeomCache.get(s);
    if (c) return c;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = O1(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function Es(i, s, c, f = null) {
    const p = [];
    for (let m = 0; m <= c; m += 1) {
      const g = m / c;
      let w = 0, k = 0;
      s === 0 ? (w = g, k = 0) : s === 1 ? (w = 1, k = g) : s === 2 ? (w = 1 - g, k = 1) : (w = 0, k = 1 - g);
      const P = mp(i, w, k), M = h.mode === "unwrap" ? Wc(P, f) : _a(P);
      M && p.push(M);
    }
    return p;
  }
  function F1(i, s) {
    const c = Zt(i), f = Vn(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), p = h.mode === "unwrap" ? Wc(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      Es(i, 0, g, m),
      Es(i, 1, g, m),
      Es(i, 2, g, m),
      Es(i, 3, g, m)
    ];
    Cd(A, w, { selected: s });
  }
  function T1() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Bc() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(f.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function Os(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(s[c].x, s[c].y);
      i.closePath();
    }
  }
  function wp(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = q(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const g = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    Os(A, f), A.fillStyle = w, A.fill(), A.strokeStyle = g, A.lineWidth = k, A.stroke(), A.save(), A.strokeStyle = g, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const P = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, E = s ? 12 : 9;
    P.forEach((L) => {
      const Q = P.find((ye) => (ye == null ? void 0 : ye.edge) === M[L == null ? void 0 : L.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Z = Q.x - L.x, ne = Q.y - L.y, oe = Math.hypot(Z, ne) || 1;
      A.beginPath(), A.moveTo(L.x, L.y), A.lineTo(L.x + Z / oe * E, L.y + ne / oe * E), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function D1(i, s, c, f) {
    const p = q(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (jn(i)) {
      wp(s, c, f);
      return;
    }
    if (vt(i)) {
      const g = A.globalAlpha;
      A.globalAlpha = g * Db(i) * p, h.mode === "frame" ? (A.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = c ? 2 : 1, Os(A, s.corners), A.stroke()) : F1(i, c), A.globalAlpha = g;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Os(A, s.corners), A.fill(), A.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = c ? 2.8 : 1.9, Os(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function xp(i, s, c) {
    if (vt(i)) {
      Zy(A, s, { accent: c });
      return;
    }
    A.fillStyle = c, s.corners.forEach((f) => {
      A.beginPath(), A.arc(f.x, f.y, 6.5, 0, Math.PI * 2), A.fill();
    }), jn(i) && (A.strokeStyle = c, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, E, L, D;
      const p = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((E = f.a) == null ? void 0 : E.x) ?? f.x), m = (((L = f.b) == null ? void 0 : L.y) ?? f.y) - (((D = f.a) == null ? void 0 : D.y) ?? f.y), g = Math.hypot(p, m) || 1, w = p / g, k = m / g, P = 10;
      A.beginPath(), A.moveTo(f.x - w * P, f.y - k * P), A.lineTo(f.x + w * P, f.y + k * P), A.stroke();
    }), A.lineCap = "butt"), rn(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = c, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function L1() {
    var m;
    const i = h.mode === "frame" ? [] : Qn(), s = i.length > 1, c = t === "cutout" ? T1() : Sr(), f = c.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${jn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== c || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && Gd(g);
      if (h.mode === "frame" && !w || !h.showObjects && !jn(g)) continue;
      const k = vt(g), P = jn(g), M = fn(g);
      if (!k && !P || ur(g) && !Ci(g.clip, h.frame)) continue;
      const E = Xt(g);
      if (t !== "stickers" && !E.visible)
        continue;
      const L = q(Number((E == null ? void 0 : E.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const D = P && t === "cutout" && h.mode === "pano" ? q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= D, D1(g, E, w, M), w && E.visible) {
        const Q = M ? "#ff4d4f" : k && Gt(g) ? "#f59e0b" : "#0070f3", Z = A.globalAlpha;
        A.globalAlpha = Z * L, xp(g, E, Q), A.globalAlpha = Z;
      }
      A.restore();
    }
    if (t === "cutout" && h.mode === "pano" && !He() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= w, wp(g.geom, g.selected, g.locked), g.selected && xp(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (s) {
      const g = ga(i);
      if (g != null && g.visible) {
        const w = Nc(i) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(g.corners[0].x, g.corners[0].y);
        for (let k = 1; k < g.corners.length; k += 1) A.lineTo(g.corners[k].x, g.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = w, g.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      i.forEach((g) => {
        if (!rn(g) && !vn(g)) return;
        const w = Xt(g);
        if (!(w != null && w.visible)) return;
        const k = fn(g) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let P = 1; P < w.corners.length; P += 1) A.lineTo(w.corners[P].x, w.corners[P].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((P) => {
          A.beginPath(), A.arc(P.x, P.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Zp(h.interaction.start, h.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), A.fill(), A.stroke(), A.restore();
    }
  }
  function Sp(i, s = !1) {
    const c = q(co(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function R1(i) {
    if (!R || !i) return !1;
    const s = R.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || R.clientWidth || 0)), f = Math.round(Number(s.clientHeight || R.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function $1() {
    if (h.outputPreviewRect = null, I.outputPreviewToggle.visible = h.mode !== "frame" && !!He(), t !== "cutout" || !I.cameraPreview) return;
    if (h.mode === "frame") {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = G == null ? void 0 : G.getContext("2d");
    if (!i || !s) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, G.width, G.height), j = null;
      return;
    }
    const c = Sp(i, !!h.outputPreviewExpanded);
    I.cameraPreview.width = c.width, I.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (G.width !== p.w || G.height !== p.h) && (G.width = p.w, G.height = p.h);
    const m = JSON.stringify([p, di(i), Nm(kr())]);
    let g = m === j;
    if (g || (s.clearRect(0, 0, p.w, p.h), g = vp(s, p, i, "camera_preview"), j = g ? m : null), !g) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = Hc() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const w = R1(c);
    I.cameraPreview.ready = !0, I.cameraPreview.label = w ? "" : "Loading preview", I.cameraPreview.settled = w && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame;
  }
  function Uc(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return mp(i, c, f);
  }
  function Co(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return yc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function V1(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function z1(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: _n(i, "widthScale", 1),
      pressureLike: _n(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function j1(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Yc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Z = null;
      i.forEach((ne) => {
        const oe = Number((ne == null ? void 0 : ne.u) || 0), ye = Number((ne == null ? void 0 : ne.v) || 0), ae = (oe % 1 + 1) % 1, ke = Z == null ? ae : Z + Zn(ae, (Z % 1 + 1) % 1);
        p.set(ne, { x: ke, y: ye }), Z = ke;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : p.get(Z) || V1(Z), g = (Z, ne, oe, ye = {}) => {
      const ae = f ? (Number(ne) % 1 + 1) % 1 : Number(ne), ke = z1(Z, ae, oe, ye);
      return p.set(ke, { x: Number(ne), y: Number(oe) }), ke;
    }, w = (Z, ne, oe) => {
      const ye = m(Z), ae = m(ne);
      return g(Z, tr(ye.x, ae.x, oe), tr(ye.y, ae.y, oe), {
        t: tr(Number((Z == null ? void 0 : Z.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), oe),
        widthScale: tr(_n(Z, "widthScale", 1), _n(ne, "widthScale", 1), oe),
        pressureLike: tr(_n(Z, "pressureLike", 1), _n(ne, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const Z = m(i[0]);
      return [g(i[0], Z.x, Z.y)];
    }
    const k = j1(s, c), P = (Z, ne) => {
      const oe = [0];
      for (let ie = 1; ie < Z.length; ie += 1) {
        const he = m(Z[ie - 1]), we = m(Z[ie]);
        oe.push(oe[ie - 1] + Math.hypot(we.x - he.x, we.y - he.y));
      }
      const ye = oe[oe.length - 1] || 0;
      if (ye <= 1e-8) {
        const ie = Z[0], he = m(ie);
        return [g(ie, he.x, he.y)];
      }
      const ae = [];
      let ke = 0;
      for (let ie = 0; ie <= ye + 1e-9; ie += ne) {
        for (; ke < oe.length - 2 && oe[ke + 1] < ie; ) ke += 1;
        const he = oe[ke], we = oe[ke + 1], Te = Math.max(1e-8, we - he);
        ae.push(w(Z[ke], Z[ke + 1], q((ie - he) / Te, 0, 1)));
      }
      const Be = Z[Z.length - 1], Xe = m(Be), ot = ae[ae.length - 1], be = ot ? m(ot) : null;
      return (!be || Math.hypot(be.x - Xe.x, be.y - Xe.y) > ne * 0.35) && ae.push(g(Be, Xe.x, Xe.y)), ae;
    }, M = (Z) => {
      if (!Array.isArray(Z) || Z.length < 3) return Z ? Z.slice() : [];
      const ne = m(Z[0]), oe = [g(Z[0], ne.x, ne.y)];
      for (let ke = 0; ke < Z.length - 1; ke += 1) {
        const Be = Z[ke], Xe = Z[ke + 1], ot = m(Be), be = m(Xe), ie = g(
          Be,
          ot.x * 0.75 + be.x * 0.25,
          ot.y * 0.75 + be.y * 0.25,
          {
            t: Number(Be.t || 0) * 0.75 + Number(Xe.t || 0) * 0.25,
            widthScale: _n(Be, "widthScale", 1) * 0.75 + _n(Xe, "widthScale", 1) * 0.25,
            pressureLike: _n(Be, "pressureLike", 1) * 0.75 + _n(Xe, "pressureLike", 1) * 0.25
          }
        ), he = g(
          Be,
          ot.x * 0.25 + be.x * 0.75,
          ot.y * 0.25 + be.y * 0.75,
          {
            t: Number(Be.t || 0) * 0.25 + Number(Xe.t || 0) * 0.75,
            widthScale: _n(Be, "widthScale", 1) * 0.25 + _n(Xe, "widthScale", 1) * 0.75,
            pressureLike: _n(Be, "pressureLike", 1) * 0.25 + _n(Xe, "pressureLike", 1) * 0.75
          }
        );
        oe.push(ie, he);
      }
      const ye = Z[Z.length - 1], ae = m(ye);
      return oe.push(g(ye, ae.x, ae.y)), oe;
    }, E = P(i, k);
    if (E.length < 3) return E;
    const L = c ? 2 : 1;
    let D = E.slice();
    for (let Z = 0; Z < L; Z += 1) D = M(D);
    return P(D, Math.max(k * 0.75, 55e-5));
  }
  function _n(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function H1(i) {
    const s = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(s) && s > 0) {
      const c = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: s
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function xa(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Sa() {
    const i = Ma();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ka() {
    const i = Ma();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function kp() {
    const i = Sc(), s = ka();
    return i ? `${s}:${i}` : s;
  }
  function G1() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function K1() {
    h.paintCompositeRevision += 1;
  }
  function W1() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Mp() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), h.paintEngineRevisionKey = Sa();
  }
  function Np() {
    v.painting_layer !== null && (v.painting_layer = null), Ps = "";
  }
  function Tt() {
    W1(), Pe.backgroundDirty = !0, Pe.dirty = !0;
  }
  function hr({ rebuildPaintEngine: i = !1 } = {}) {
    Np(), G1(), Tt(), i && Mp();
  }
  function Io() {
    Np(), K1(), Tt();
  }
  function Fs() {
    var f;
    const i = Ma(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = lf(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const c = Sa();
    h.paintEngineRevisionKey !== c && (h.paintEngineRevisionKey = c, (f = h.paintEngine) == null || f.rebuildCommitted(v));
  }
  function Ma() {
    const i = Math.max(1, N(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Hn() {
    return Ma();
  }
  function B1(i, s, c, f, p = null) {
    const m = H1(i), g = _n(s, "widthScale", 1) * _n(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Pr) * c * g) : Math.max(0.5, m.value / (2 * Math.PI) * c * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function U1(i, s, c = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = c.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${k})`;
  }
  function Y1(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function X1(i, s, c, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), U1(i, c, p);
    const g = (w) => Y1(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const k = s[w], P = s[w + 1];
      if (!k || !P) continue;
      const M = Number(k.x || 0), E = Number(k.y || 0), L = Number(P.x || 0), D = Number(P.y || 0), Q = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(P.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(L) || !Number.isFinite(D) || !Number.isFinite(Q) || !Number.isFinite(Z)) continue;
      const ne = L - M, oe = D - E, ye = Math.hypot(ne, oe);
      if (!Number.isFinite(ye) || ye < 1e-6) {
        g(k);
        continue;
      }
      if (ye > Math.max(f.w, f.h) * 0.5) continue;
      const ae = Math.max(0.5, Math.min(Q, Z)), ke = Math.max(0.35, Math.min(ae * 0.4, 2.25)), Be = Math.max(1, Math.ceil(ye / ke));
      for (let Xe = 0; Xe <= Be; Xe += 1) {
        const ot = Xe / Be;
        g({
          x: tr(M, L, ot),
          y: tr(E, D, ot),
          radiusPx: tr(Q, Z, ot)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function q1(i, s, c, f) {
    X1(i, s, c, f, { preview: !1 });
  }
  function J1(i, s, c, f, p) {
    var w, k, P, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const E = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(E.r || 0) * 255)}, ${Math.round(Number(E.g || 0) * 255)}, ${Math.round(Number(E.b || 0) * 255)}, ${Number(E.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((k = s[0]) == null ? void 0 : k[g]) || 0) * f.h);
    for (let E = 1; E < s.length; E += 1)
      i.lineTo(Number(((P = s[E]) == null ? void 0 : P[m]) || 0) * f.w, Number(((M = s[E]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Pp(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function Z1(i, s) {
    const c = Pp(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: B1(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Ap(i, s, c = null) {
    var w, k, P, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((P = s == null ? void 0 : s.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return J1(i.ctx, Pp(p), p, f), !0;
    const g = Z1(p, f);
    return g.length ? (q1(i.ctx, g, p, f), !0) : !1;
  }
  function Q1(i, s, c, f = 8) {
    const p = new Uint8Array(s * c), m = [], g = new Int32Array(s * c), w = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let P = 0; P < s; P += 1) {
        const M = k * s + P;
        if (p[M] || i[M] <= f) continue;
        let E = 0, L = 0;
        g[L] = P, w[L] = k, L += 1, p[M] = 1;
        const D = [];
        let Q = P, Z = k, ne = P, oe = k;
        for (; E < L; ) {
          const ye = g[E], ae = w[E];
          E += 1, D.push({ x: ye, y: ae }), ye < Q && (Q = ye), ae < Z && (Z = ae), ye > ne && (ne = ye), ae > oe && (oe = ae);
          const ke = [
            [(ye - 1 + s) % s, ae],
            [(ye + 1) % s, ae],
            [ye, ae - 1],
            [ye, ae + 1]
          ];
          for (const [Be, Xe] of ke) {
            if (Xe < 0 || Xe >= c) continue;
            const ot = Xe * s + Be;
            p[ot] || i[ot] <= f || (p[ot] = 1, g[L] = Be, w[L] = Xe, L += 1);
          }
        }
        m.push({ pixels: D, minX: Q, minY: Z, maxX: ne, maxY: oe });
      }
    return m;
  }
  function ev(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, P) => k - P);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let k = 0; k < c.length; k += 1) {
      const P = c[k], E = (k === c.length - 1 ? c[0] + s : c[k + 1]) - P - 1;
      E > f && (f = E, p = k);
    }
    const m = (c[(p + 1) % c.length] + s) % s;
    let g = 1 / 0, w = -1 / 0;
    for (const k of c) {
      const P = (k - m + s) % s;
      g = Math.min(g, P), w = Math.max(w, P);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - g + 1)
    };
  }
  function tv(i, s, c = {}) {
    var P;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (P = i == null ? void 0 : i.getContext) == null ? void 0 : P.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return Q1(w, f, p, 8).map((M, E) => {
      const L = ev(M, f);
      if (!L) return null;
      const D = Number(L.widthPx || 0), Q = M.maxY - M.minY + 1, Z = Number(L.startX || 0), ne = document.createElement("canvas");
      ne.width = D, ne.height = Q;
      const oe = ne.getContext("2d");
      if (!oe) return null;
      const ye = oe.createImageData(D, Q);
      return M.pixels.forEach(({ x: ae, y: ke }) => {
        const Be = (ke * f + ae) * 4, Xe = (Number(ae || 0) - Z + f) % f, ot = ((ke - M.minY) * D + Xe) * 4;
        ye.data[ot + 0] = g.data[Be + 0], ye.data[ot + 1] = g.data[Be + 1], ye.data[ot + 2] = g.data[Be + 2], ye.data[ot + 3] = g.data[Be + 3];
      }), oe.putImageData(ye, 0, 0), {
        id: zo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + E * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: D / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: ne.toDataURL("image/png"),
        transform: {
          du: Z / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Na(i, s) {
    if (!i || !s) return null;
    const c = Cs(i), f = Bu(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Bu(s, c.right) / f, m = Bu(s, c.up) / f;
    return {
      x: (p / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function nv(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const c = wi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => _a(Co(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Cp(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = wi();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + Zn(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const c = i.map((f) => _a(Co(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function rv(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], p = i[(c + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function iv(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = Co(p), g = Na(s, m);
      if (!g) return [];
      f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return rv(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function ov(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = Co(p), g = Na(s, m);
      g && f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function av() {
    const i = He(), s = eu(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = tM(i, s, { width: C.width, height: C.height }), m = sv(c);
    return A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, C.width, C.height), vp(A, f, p) || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(f.x, f.y, f.w, f.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, C.width, C.height), A.roundRect(c.x, c.y, c.w, c.h, m), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = NI, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), A.stroke(), A.restore(), !0;
  }
  function sv(i) {
    const s = Math.max(1e-6, Number(Pe.frameCanvasScale || 1));
    return Math.min($e * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Br() {
    var s;
    const i = h.mode === "frame" ? He() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = Vo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function lv() {
    var k, P;
    if (((k = h.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (P = i == null ? void 0 : i.geometry) == null ? void 0 : P.points;
    let c;
    if (h.mode === "frame") {
      const M = He(), E = on(M);
      c = iv(s, M, E);
    } else
      c = nv(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) A.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    A.closePath(), f ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${g},${w},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function cv() {
    const i = h.frameRollOverlayVisual, s = q(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = on(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Pr, m = Math.hypot(c.w, c.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(c.x, c.y, c.w, c.h), A.clip(), A.translate(f.x, f.y), A.rotate(p);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    A.beginPath();
    for (let P = -m; P <= m; P += k)
      A.moveTo(P, -m), A.lineTo(P, m);
    for (let P = -m; P <= m; P += k)
      A.moveTo(-m, P), A.lineTo(m, P);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(f.x - g, f.y - w), A.lineTo(f.x + g, f.y + w), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function uv() {
    return t !== "cutout" || !He() ? 0 : CI;
  }
  function fv() {
    const i = q(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || h.mode !== "pano") return;
    const s = He(), c = s ? Xt(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    c != null && c.visible && f && (h.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: Gd(s),
      locked: fn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, C.width, C.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) A.lineTo(m[g].x, m[g].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function Ip() {
    vo = null, h.mode === "frame" ? (Pe.frameSafeRect = Wv(), av()) : h.mode === "unwrap" ? M1(!1) : N1(!1), fv(), t === "cutout" && $1(), L1(), Br(), lv(), cv(), I.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && We(), Pe.hasPresentedFrame || (Pe.hasPresentedFrame = !0, ue.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame && h.mode !== "frame");
    const i = p1();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === yr ? (de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", i.detail)) : (de == null || de.setAttribute("data-stage-ready", ""), de == null || de.removeAttribute("data-stage-loading-kind"));
  }
  function dv(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function pv() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Ab();
  }
  function le(i = {}) {
    var w, k, P, M, E, L, D, Q, Z, ne;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || dv() || !!((k = h.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Pe.backgroundDirty = !0), s && Vd() && (h.livePaintInteractionRevision += 1, Pe.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (Tc(), Gr()), pv(), c && ((M = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || M.call(P), (E = e.setDirtyCanvas) == null || E.call(e, !0, !1)), c && !s && ((D = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || D.call(L, !0, !0), (ne = (Z = (Q = vr) == null ? void 0 : Q.canvas) == null ? void 0 : Z.setDirty) == null || ne.call(Z, !0, !0)), Pe.dirty = !0;
  }
  function Ep() {
    const i = C.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== s || C.height !== c || ue.width !== s || ue.height !== c ? (C.width = s, C.height = c, ue.width = s, ue.height = c, Pe.backgroundDirty = !0, Pe.dirty = !0, t === "cutout" && (Pe.pendingStableLayoutFrames = Math.max(Number(Pe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function hv(i = performance.now()) {
    var m, g;
    Pe.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = c, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const w = q(
        (i - Number(h.frameRollOverlayStartTs || i)) / II,
        0,
        1
      );
      h.frameRollOverlayAlpha = tr(
        Number(h.frameRollOverlayFrom || 0),
        c,
        nl(w)
      ), w >= 1 && (h.frameRollOverlayAlpha = c, c === 0 && (h.frameRollOverlayVisual = null)), Pe.dirty = !0;
    }
    const f = uv();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const w = q(
        (i - Number(h.cutoutPanoDimStartTs || i)) / fg,
        0,
        1
      );
      h.cutoutPanoDimAlpha = tr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        nl(w)
      ), w >= 1 && (h.cutoutPanoDimAlpha = f), w >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), Pe.dirty = !0;
    }
    const p = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const w = q(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / fg,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = tr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        nl(w)
      ), w >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), Pe.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const w = Math.max(1, Number(h.outputPreviewAnimDurationMs)), k = q((i - Number(h.outputPreviewAnimStartTs || 0)) / w, 0, 1), M = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? RI(k) : jI(k);
      h.outputPreviewAnim = tr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, M), Pe.dirty = !0, k >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if ((g = h.viewTween) != null && g.active) {
      const w = h.viewTween, k = q((i - w.startTs) / w.durationMs, 0, 1), P = nl(k);
      h.viewYaw = Wt(w.startYaw + w.deltaYaw * P), h.viewPitch = w.startPitch + (w.targetPitch - w.startPitch) * P, h.viewFov = w.startFov + (w.targetFov - w.startFov) * P, Pe.backgroundDirty = !0, Pe.dirty = !0, k >= 1 && (h.viewTween = null);
    }
    if (h.viewInertia.vx = Number(dn.state.inertia.vx || 0), h.viewInertia.vy = Number(dn.state.inertia.vy || 0), h.viewInertia.active = !!dn.state.inertia.active, dn.stepInertia(i) && (h.viewInertia.vx = Number(dn.state.inertia.vx || 0), h.viewInertia.vy = Number(dn.state.inertia.vy || 0), h.viewInertia.active = !!dn.state.inertia.active, Pe.backgroundDirty = !0, Pe.dirty = !0), Pe.pendingStableLayoutFrames > 0 && (Pe.pendingStableLayoutFrames -= 1, Pe.dirty = !0), Pe.dirty) {
      if (Pe.pendingStableLayoutFrames > 0)
        return;
      Pe.dirty = !1, Ip();
    }
  }
  function Op(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Pe.tickErrorSignature !== c && (Pe.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = rr, I.stageStatusDetail = "frame", de == null || de.setAttribute("data-stage-ready", ""), de == null || de.removeAttribute("data-stage-loading-kind");
    }
  }
  function Fp(i = performance.now()) {
    Pe.running && (Op(() => hv(i)), Pe.running && (Pe.rafId = requestAnimationFrame(Fp)));
  }
  function mv() {
    !Pe.running || !Ep() || Op(() => {
      Pe.dirty = !1, Ip();
    });
  }
  const Tp = new ResizeObserver(mv);
  Tp.observe(C);
  function gv() {
    Pe.running = !1, Pe.rafId && cancelAnimationFrame(Pe.rafId), Pe.rafId = 0, Tp.disconnect();
  }
  function rt() {
    r || S && v.stickers.some(vc) || (h.historyController.commitActionGroup(JSON.stringify(vm(v))), iu());
  }
  function Xc(i) {
    var p;
    if (r) return;
    Tn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (iu(), !s) return;
    const c = lk(v, s), f = (p = v.timeline) == null ? void 0 : p.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), S && v.timeline.fps !== f && zt.seek(Math.round(h.frame * v.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && No(), Pe.backgroundDirty = !0, c.paintingChanged ? hr() : Tt(), Fn(), ze(), Pn(), le({ cause: "cutout_frame" });
  }
  function Dp() {
    var c, f;
    const i = Array.isArray((c = h.historyController) == null ? void 0 : c.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Fn() {
    vs();
    const i = aP({
      editor: h,
      swatches: xl,
      paintColorPopOpen: se ? !se.hidden : !1,
      colorToCss: Ar,
      colorsApproximatelyEqual: Sl,
      rgb01ToHsv: Xu,
      hsv01ToRgb: Yu,
      getBrushPresetIdForTool: Mi,
      isActiveLassoTool: Rb
    });
    if (Object.assign(I.paintDock, i), Gb(), !i.visible) {
      se && (se.hidden = !0);
      return;
    }
    fe && (clearTimeout(fe), fe = 0), re && (!i.colorEnabled && se && !se.hidden && (fe = window.setTimeout(() => {
      se.hidden = !0, I.paintDock.colorPopOpen = !1, fe = 0;
    }, 170)), se && (se.style.setProperty("--picker-hue-color", i.pickerHueColor), se.style.setProperty("--picker-sat", i.pickerSat), se.style.setProperty("--picker-val", i.pickerVal), se.style.setProperty("--picker-hue", i.pickerHue)), ve && (ve.style.left = i.pickerSvLeft, ve.style.top = i.pickerSvTop), Ne && (Ne.style.left = i.pickerHueLeft));
  }
  function Eo() {
    const i = Zt(t === "cutout" && h.mode === "frame" ? He() : Mt());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: ei(i)
    }, ze());
  }
  function ze() {
    var ot, be, ie, he;
    if (Ur(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = oP(v.ui_settings);
    if (a) {
      I.sidePanel = sP({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Kn
      });
      return;
    }
    const s = Mt(), c = t === "cutout" && h.mode === "frame" ? He() : null, f = c || s, p = c ? [c] : Qn(), m = c ? "shot" : Ss();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const we = Zt(f);
      h.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: ei(we)
      }, ur(f) && (h.panelLastValues.opacity = uo(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, k = ba(), P = k ? hk(k, h.frame) : ur(w) ? h.panelLastValues : w || g, M = k ? Ns(k) : !!w && !fn(w);
    h.panelWasEnabled = M, Tc();
    let E = null;
    if (c) {
      const we = Pc({ item: c, kind: "shot", label: "Frame" });
      E = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: we.label,
        currentIcon: we.icon || null,
        items: [{
          id: String(c.id || ""),
          label: we.label,
          icon: we.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const we = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Sr().forEach((Fe, pt) => {
        var Pt, Ht;
        if (!Fe) return;
        const qe = S ? bf(Fe) : Gt(Fe) ? String(Fe.id || zu) : String(((Ht = (Pt = v.assets) == null ? void 0 : Pt[Fe.asset_id]) == null ? void 0 : Ht.name) || Fe.asset_id || Fe.id), jt = `${pt + 1}. ${qe}${Gt(Fe) && Mo(Fe) ? " (hidden)" : ""}`, pn = Pc({ item: Fe, label: jt, kind: "image" });
        we.push({ id: Fe.id, label: pn.label, icon: pn.icon, item: Fe, kind: "image" });
      }) : Kd().forEach((Fe) => {
        if (!(Fe != null && Fe.item)) return;
        const pt = Pc(Fe);
        we.push({ id: Fe.item.id, label: pt.label, icon: pt.icon, item: Fe.item, kind: Fe.kind });
      });
      const Te = (w == null ? void 0 : w.id) || "", Ge = k ? { label: bf(k), icon: Me.globe } : we.find((Fe) => Fe.id === Te) || we[0];
      E = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: Ge.label,
        currentIcon: Ge.icon || null,
        items: we.map((Fe) => ({
          id: Fe.id,
          label: Fe.label,
          icon: Fe.icon || null,
          active: Fe.id === Te
        }))
      };
    }
    const L = [], D = (we, Te, Ge, Fe, pt) => {
      const qe = q(Number(P[we] || 0), Ge, Fe);
      L.push({
        key: we,
        label: Te,
        min: Ge,
        max: Fe,
        step: pt,
        value: qe,
        displayValue: Vo(qe),
        fillPct: q((qe - Ge) / Math.max(1e-6, Fe - Ge) * 100, 0, 100),
        enabled: M && !r
      });
    }, Q = [];
    if (k) {
      for (const [we, Te] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = lg(P[we]);
        D(we, Te, -Ge, Ge, 0.01);
      }
      D("yaw_deg", "Yaw", -180, 180, 0.1), D("pitch_deg", "Pitch", -90, 90, 0.1), D("roll_deg", "Roll", -180, 180, 0.1), D("scale", "Scale", cg, lg(P.scale), 0.01), D("opacity", "Opacity", 0, 100, 1);
    } else p.length > 1 ? (Q.push(`Selected objects: ${p.length}`), Q.push("Multi-selection supports z-order and delete.")) : (D("yaw_deg", "Yaw", -180, 180, 0.1), D("pitch_deg", "Pitch", -90, 90, 0.1), D("hFOV_deg", "H FOV", 1, 179, 0.1), D("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? D("rot_deg", "Rotation", -180, 180, 0.1) : D("roll_deg", "Roll", -180, 180, 0.1), S && D("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((be = (ot = v == null ? void 0 : v.painting) == null ? void 0 : ot.paint) == null ? void 0 : be.strokes) ? v.painting.paint.strokes.length : 0, ne = Array.isArray((he = (ie = v == null ? void 0 : v.painting) == null ? void 0 : ie.mask) == null ? void 0 : he.strokes) ? v.painting.mask.strokes.length : 0, oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], ye = LI(
      e,
      oe.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), ae = !!String((ye == null ? void 0 : ye.src) || "").trim() || Hr("pano_input_images").length > 0, ke = Sr().length > 0 || Z > 0, Be = ne > 0, Xe = [
      { key: "mask", label: "Mask", icon: Me.circle_dashed_tool, visible: !!h.showMask, enabled: Be },
      { key: "objects", label: "Paint / Images", icon: Me.image, visible: !!h.showObjects, enabled: ke },
      { key: "panorama", label: "Panorama", icon: Me.globe, visible: !!h.showPanorama, enabled: ae }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    I.sidePanel = cP({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: E,
      enabled: M,
      selectedKind: k ? "world" : m,
      selectedItems: p,
      params: L,
      notes: Q,
      visibilityRows: Xe,
      uiSettings: i,
      normalizeCoverageValue: Kn
    });
  }
  function Ur() {
    if (!S || r) return;
    const i = qc(), s = Le.selection, c = s && Si(s.owner);
    if (s) {
      const p = c ? Pa(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => c[g].keyframes.some((w) => w.frame === m))), s.frames.length || (Le.selection = null);
    }
    const f = v.timeline.fps;
    I.timeline = mP(v, {
      frame: h.frame,
      span: i,
      selection: Le.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Le.expanded ?? yf(v),
      openRows: Le.openRows,
      audio: bv() && I.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: zt.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: Gu(e) !== null || cM(e, ["bg_media", "sticker"])
    }), I.easing = Le.selection ? gP(c, Pa(Le.selection), Le.selection.frames, Aa(Le.selection.owner)) : null;
  }
  function qc(i = null) {
    const s = v.timeline.fps, c = v.stickers.find(Gt), f = c ? Jd() : null, p = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0,
      f ? Py(c.clip, s, f.meta) : 0
    );
    return X0(v, { minimum: Math.round(s * 5), frames: p, openClip: i });
  }
  function Si(i) {
    return v.stickers.find((s) => s.id === i) || null;
  }
  function Pa(i) {
    return i.lane ? [i.lane] : bo(Si(i.owner));
  }
  function Aa(i) {
    const { clip: s } = Si(i);
    return s.start - s.in;
  }
  function Ts(i) {
    const s = Si(i);
    return !!s && s.locked !== !0;
  }
  function Lp() {
    const i = Mt();
    ur(i) && !Ci(i.clip, h.frame) && pr(null);
  }
  function yv(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (h.frame = s, Lp(), Tt(), ze(), We(), le());
  }
  function bv() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function vv(i) {
    vi(), zt.seek(i);
  }
  function Tn() {
    S && zt.stop();
  }
  function Jc() {
    vi(), zt.toggle();
  }
  function Oo() {
    Tt(), ze(), We(), le();
  }
  function ji() {
    rt(), lt(), Oo();
  }
  function _v() {
    const { selection: i } = Le;
    Ts(i.owner) && (Tn(), XS(Si(i.owner), Pa(i), i.frames, h.frame - Aa(i.owner)), Le.selection = null, ji());
  }
  function Rp(i) {
    Tn();
    const s = Math.round(h.frame * i / v.timeline.fps);
    uk(v, i), Le.selection = null, zt.seek(s), ji();
  }
  function wv() {
    const i = Gu(e);
    i !== null && i !== v.timeline.fps && Rp(i);
  }
  function xv(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && vi(), zt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Jc();
        return;
      }
      if (i.type === "mute") {
        Ud(), Ur();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? yf(v)), Le.selection = null, Ur();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), Ur();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !Ci(s.clip, h.frame) && vv(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? Fc(s.id) : pr(Sr().find((c) => c.id === i.id) || null), $i(), Le.selection = null, ze(), We(), le();
        return;
      }
      if (i.type === "select-keys") {
        const s = Aa(i.owner), c = i.frames.map((m) => m - s), f = Le.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of c)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, w) => g - w);
        } else
          Le.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        Ur();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !Ts(s.owner)) return;
        const c = Si(s.owner), f = Pa(s);
        if (i.phase === "start") {
          Tn(), Le.drag = { keyframes: f.map((g) => structuredClone(c[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Le;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          c[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = qS(c, f, p.frames, i.delta, -Aa(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Oo();
          return;
        }
        Le.drag = null, m ? ji() : Oo();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Tn(), Le.drag = { clip: { ...s.clip }, span: qc(s.clip) };
          return;
        }
        const { drag: c } = Le;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? QS(s.clip, i.delta) : i.delta && i.mode === "start" ? ek(s.clip, f.start + i.delta) : i.delta && tk(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          Oo();
          return;
        }
        Le.drag = null, Lp(), JSON.stringify(s.clip) !== JSON.stringify(f) ? ji() : Oo();
        return;
      }
      if (i.type === "key-row") {
        if (!Ts(i.owner)) return;
        Tn(), BS(Si(i.owner), h.frame - Aa(i.owner)), ji();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || I.timeline.fpsLocked) {
          Ur();
          return;
        }
        Rp(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          Ur();
          return;
        }
        Tn(), v.timeline.length = s, ji();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !Ts(s.owner)) return;
        Tn(), ZS(Si(s.owner), Pa(s), s.frames, i.easing), i.commit ? ji() : Oo();
      }
    }
  }
  async function $p(i) {
    if (r || t !== "stickers" && t !== "cutout" || !br(i)) return;
    if (S) {
      Tn(), await Vp(i);
      return;
    }
    const s = qi("asset"), c = Wa(e, `add:${s}`, async () => {
      try {
        const { image: f } = await Ba(i);
        ft.set(s, f);
        const p = qi("st");
        v.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: _i(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: ks()
        }), pr(v.stickers[v.stickers.length - 1]), Ds(), ze(), We(), le();
        const m = await Qi(i, {
          fetchApi: (k, P) => Bt.fetchApi(k, P)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, Ao(), rt(), lt(), ze(), We(), le();
      } catch (f) {
        delete v.assets[s], ft.delete(s);
        const p = Array.isArray(v.stickers) ? v.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (v.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && pr(null), ze(), We(), le(), lt()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function Sv() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = J == null ? void 0 : J.openImagePicker) == null || i.call(J, "add");
  }
  function kv() {
    var i;
    r || !S || (i = J == null ? void 0 : J.openImagePicker) == null || i.call(J, "add-world");
  }
  async function Mv(i) {
    r || !S || !br(i) || (Tn(), await Vp(i, "world"));
  }
  function Nv() {
    const i = { x: C.width / 2, y: C.height / 2 }, s = Vi() ? Rc(i) : null;
    return Bk(Kr(), s, zi());
  }
  async function Vp(i, s = "sky") {
    const c = qi("st"), f = Wa(e, `add:${c}`, async () => {
      const { image: p } = await Ba(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: _i(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? bk(c, g, Nv()) : bd(c, g, m, ks());
      ft.set(wa(w), p), v.stickers.push(w), s === "world" ? Fc(c) : pr(w), Ds(), ze(), We(), le();
      try {
        const k = await Qi(i, {
          fetchApi: (M, E) => Bt.fetchApi(M, E)
        }), P = v.stickers.find((M) => M.id === c);
        if (!P) return;
        P.source = hl(k), ft.set(wa(P), p), rt(), lt();
      } catch (k) {
        throw v.stickers = v.stickers.filter((P) => P.id !== c), h.selectedId === c && pr(null), h.worldSelectedId === c && No(), rt(), lt(), k;
      } finally {
        ze(), We(), le();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function Pv(i, s) {
    const c = Wa(e, `replace:${s}:${qi("asset")}`, async () => {
      const { image: f } = await Ba(i), p = await Qi(i, {
        fetchApi: (g, w) => Bt.fetchApi(g, w)
      }), m = v.stickers.find((g) => g.id === s);
      if (m) {
        m.source = hl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = _i(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        ft.set(wa(m), f), Tt(), rt(), lt(), ze(), We(), le();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function Av(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Mt();
    if (!s || !vt(s) || Gt(s) || !br(i)) return;
    if (S) {
      await Pv(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = qi("asset"), p = Wa(e, `replace:${c}:${f}`, async () => {
      var M;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === c) || null;
      if (!m || !vt(m) || Gt(m)) return;
      const g = String(m.asset_id || ""), w = g ? wn(((M = v.assets) == null ? void 0 : M[g]) || null) : null, k = Number(m.vFOV_deg || 0), P = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: E } = await Ba(i);
        ft.set(f, E), m.asset_id = f, m.vFOV_deg = _i(
          Number(m.hFOV_deg || 30),
          Number(E.naturalWidth || E.width || 1),
          Number(E.naturalHeight || E.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Tt(), ze(), We(), le();
        const L = await Qi(i, {
          fetchApi: (Q, Z) => Bt.fetchApi(Q, Z)
        }), D = (Array.isArray(v.stickers) ? v.stickers : []).find((Q) => String((Q == null ? void 0 : Q.id) || "") === c) || null;
        if (!D || String(D.asset_id || "") !== f) return;
        v.assets[f] = L, Ao(), rt(), lt(), ze(), We(), le();
      } catch (E) {
        delete v.assets[f], ft.delete(f);
        const L = (Array.isArray(v.stickers) ? v.stickers : []).find((D) => String((D == null ? void 0 : D.id) || "") === c) || null;
        throw L && String(L.asset_id || "") === f && (g && w && (v.assets[g] = w), L.asset_id = g, L.vFOV_deg = k, L.crop = P ? { ...P } : null), Tt(), lt(), ze(), We(), le(), E;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Cv() {
    var s;
    if (r) return;
    const i = Mt();
    !i || !vt(i) || Gt(i) || (s = J == null ? void 0 : J.openImagePicker) == null || s.call(J, "replace");
  }
  async function Iv() {
    if (r || t !== "stickers") return;
    if (S) {
      await Ev();
      return;
    }
    const i = v.assets && typeof v.assets == "object" ? v.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let c = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((E) => E.blob()), w = String(g.type || "image/png").split("/")[1] || "png", k = String((p == null ? void 0 : p.name) || `${f}.${w}`), P = new File([g], k, { type: g.type || "image/png" }), M = await Qi(P, {
          fetchApi: (E, L) => Bt.fetchApi(E, L)
        });
        v.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (lt(), le());
  }
  async function Ev() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await Qi(m, {
            fetchApi: (w, k) => Bt.fetchApi(w, k)
          });
          s.source = hl(g), i = !0;
        } catch {
        }
    }
    i && (lt(), le());
  }
  function Ov() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      pr(i), h.mode = "pano", bc(
        Wt(Number(i.yaw_deg || 0)),
        q(Number(i.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), ze(), We(), le({ cause: "cutout_frame" });
      return;
    }
    const s = C0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Wt(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    v.shots = [s], pr(s), Ds(), h.mode = "pano", rt(), lt(), ze(), We(), le({ cause: "cutout_frame" });
  }
  function Fv() {
    r || t !== "cutout" || (v.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, v.active.selected_shot_id = null, rt(), lt(), ze(), We(), le());
  }
  function Tv() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      Gt(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function zp(i, s, c = "Clear") {
    return new Promise((f) => {
      I.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: f
      };
    });
  }
  async function Dv() {
    var c, f;
    if (r || !await zp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = Qo(null), hr();
    const s = Tv();
    if (t === "stickers")
      v.stickers = S ? v.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, S || (v.assets = {}), h.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Ao();
    else {
      const p = sk(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Ao();
    }
    rt(), lt(), ze(), We(), le();
  }
  async function Lv(i) {
    var m, g, w, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = Fo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await zp(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((k = h.interaction) == null ? void 0 : k.layerKind) === s) {
        const P = Hn();
        P && h.paintEngine.cancelActiveStroke(P), h.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = On().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") !== s), s === "paint" && (bn().length = 0), hr(), rt(), lt(), ze(), We(), Fn(), le();
    }
  }
  function Rv() {
    if (r) return;
    const i = Mt();
    if (!i || !vt(i) || Gt(i) || S && vc(i)) return;
    let s;
    S ? s = vk(i, qi("st"), ks()) : (s = JSON.parse(JSON.stringify(i)), s.id = qi("st"), s.yaw_deg = Wt((s.yaw_deg || 0) + 8), s.z_index = ks()), v.stickers.push(s), v.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Tt(), rt(), lt(), We(), ze(), le();
  }
  function $v() {
    const i = ba();
    return i ? (Ns(i) && (Tn(), yk(v, i.id), No(), Tt(), rt(), lt(), ze(), We(), $i(), le()), !0) : !1;
  }
  function jp() {
    var c, f, p, m, g;
    if (r) return;
    const i = Qn(), s = Mt();
    if (!(!s && i.length === 0) && !i.some((w) => fn(w))) {
      if (Tn(), i.length > 1) {
        const w = new Set(i.filter((M) => rn(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => vn(M)).map((M) => ln(M.rasterObjectId || M.id || ""))), P = new Set(i.filter(vt).map((M) => String(M.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = bn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), hr()), k.size > 0 && (v.painting.raster_objects = On().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Io()), P.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => P.has(String((M == null ? void 0 : M.id) || "")) ? Gt(M) ? (Mo(M) || (M.visible = !1), !0) : !1 : !0), Ao(), Tt()), h.selectedId = null, h.selectedIds = [], rt(), lt(), ze(), We(), le();
        return;
      }
      if (rn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (p = v.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), v.painting.groups = bn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), hr(), h.selectedId = null, h.selectedIds = [], rt(), lt(), ze(), We(), le();
        return;
      }
      if (vn(s)) {
        const w = ln(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = On().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Io(), h.selectedId = null, h.selectedIds = [], rt(), lt(), ze(), We(), le();
        return;
      }
      if (t === "stickers" || vt(s)) {
        if (Gt(s)) {
          if (Mo(s)) return;
          s.visible = !1, Tt(), rt(), lt(), ze(), We(), le();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== s.id), Ao(), Tt(), h.selectedId = ((g = Sr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = h.selectedId, rt(), lt(), ze(), We(), le();
        return;
      }
      Fv();
    }
  }
  function Zc(i, s) {
    const c = Pe.frameSafeRect;
    if (!i || !c || h.mode !== "frame") return !1;
    const f = ju * lo(c, i), p = fd(ud(c, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Hp(i, s) {
    if (!i || i.locked === !0) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, E] = w.split(":").map((L) => Number(L));
        if (Number.isFinite(M) && Number.isFinite(E)) return M >= E;
      }
      const k = Number(i.hFOV_deg || 64), P = Number(i.vFOV_deg || 40);
      return Math.abs(k - P) > 1e-6 ? k >= P : co(i) >= 1;
    })();
    let [p, m] = c[String(s)] || c["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Zc(i, g)) {
      const w = q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = dl(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Vv(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = ds(s, c);
    if (!f) return !1;
    const p = f.ratio;
    if (!Zc(i, p)) {
      const m = q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = dl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Gp(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = di(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Zc(i, p)) {
      const m = q(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = dl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = eo(i);
  }
  function Kp() {
    xo().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function zv() {
    if (r) return;
    const i = Qn();
    if (!Mt() || i.length === 0 || i.some((w) => fn(w))) return;
    Kp();
    const c = xo(), f = new Set(i.map((w) => vt(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${ln(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (c.forEach((w) => {
      var P, M;
      const k = w.type === "sticker" ? `sticker:${String(((P = w.item) == null ? void 0 : P.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === c[c.length - 1]) return;
    [...m, ...p].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Tt(), rt(), lt(), We(), le();
  }
  function jv() {
    if (r) return;
    const i = Qn();
    if (!Mt() || i.length === 0 || i.some((w) => fn(w))) return;
    Kp();
    const c = xo(), f = new Set(i.map((w) => vt(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${ln(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (c.forEach((w) => {
      var P, M;
      const k = w.type === "sticker" ? `sticker:${String(((P = w.item) == null ? void 0 : P.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === c[0]) return;
    [...p, ...m].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Tt(), rt(), lt(), We(), le();
  }
  function Hv() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = N(Number(v.output_preset || 2048))), d && (v.coverage = Kn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Pn(), e.setDirtyCanvas(!0, !0));
  }
  function Pn() {
    var s;
    if (r) return;
    v.coverage = Kn(v.coverage), ry(e, v.active);
    const i = iy(e, v);
    y && !oy(e, i, String(y.value ?? "")) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Wp = () => Pn();
  r || (e.__panoFlushStateBeforeQueue = Wp);
  function Qc() {
    v.ui_settings = UI(v.ui_settings), r || Pn();
  }
  function lt() {
    var i;
    r || (Pn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Gv() {
    r || d1() && dp().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Kv(i = {}) {
    var f, p, m, g, w, k, P, M, E, L;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), c && ((P = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || P.call(k, !0, !0), (L = (E = (M = vr) == null ? void 0 : M.canvas) == null ? void 0 : E.setDirty) == null || L.call(E, !0, !0));
  }
  function Ds() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Fn(), ze());
  }
  function ki(i) {
    const s = C.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * C.width,
      y: (i.clientY - s.top) / s.height * C.height
    };
  }
  function Ls(i) {
    const s = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Bp() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function Wv() {
    var D, Q, Z, ne, oe;
    if (!C) return null;
    const i = (D = C.getBoundingClientRect) == null ? void 0 : D.call(C), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? C.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? C.height / i.height : 1;
    Pe.frameCanvasScale = Math.min(s, c);
    let f = 24, p = 24;
    const m = Math.max(f + 1, C.width - 24);
    let g = Math.max(p + 1, C.height - 24);
    const w = (Q = yt == null ? void 0 : yt.getBoundingClientRect) == null ? void 0 : Q.call(yt), k = (Z = cn == null ? void 0 : cn.getBoundingClientRect) == null ? void 0 : Z.call(cn);
    let P = 24;
    w && i && w.width > 0 && w.height > 0 && (P = Math.max(P, (w.right - i.left) * s + ug)), k && i && k.width > 0 && k.height > 0 && ((ne = I.frameRail) == null ? void 0 : ne.visible) === !0 && (P = Math.max(P, (i.right - k.left) * s + ug)), f = Math.max(f, P);
    const M = Math.min(m, C.width - P);
    let E = 24;
    const L = (oe = kt == null ? void 0 : kt.getBoundingClientRect) == null ? void 0 : oe.call(kt);
    if (L && i && L.width > 0 && L.height > 0 && (E = Math.max(E, (L.bottom - i.top) * c + Hu)), [qn, It].forEach((ye) => {
      var Be;
      if (!ye || !i) return;
      const ae = getComputedStyle(ye);
      if (ae.display === "none" || ae.visibility === "hidden" || Number(ae.opacity) <= 0) return;
      const ke = (Be = ye.getBoundingClientRect) == null ? void 0 : Be.call(ye);
      !ke || ke.width <= 0 || ke.height <= 0 || (E = Math.max(E, (i.bottom - ke.top) * c + Hu));
    }), Oe && i) {
      const ye = getComputedStyle(Oe);
      ye.display !== "none" && ye.visibility !== "hidden" && Number(ye.opacity) > 0 && (E = Math.max(E, (AI + Hu) * c));
    }
    return p = Math.max(p, E), g = Math.max(p + 1, Math.min(g, C.height - E)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function eu(i = He()) {
    if (!i || !C) return null;
    const s = Pe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, C.width - 48),
      h: Math.max(1, C.height - 48)
    };
    return pS(s, i, ju * lo(s, i));
  }
  function on(i = He()) {
    const s = eu(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function tu() {
    return t === "cutout" && !!He();
  }
  function mr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = wi(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: q(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = Vc(i.x, i.y), { lon: f, lat: p } = Kc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function gr(i, s, c = performance.now()) {
    const f = on(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Uc(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = Kc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - w / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function Bv(i, s) {
    const c = He();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, p = E0(c, s);
    if (!p) return !1;
    if (f) {
      const m = ju * lo(
        Pe.frameSafeRect || { w: C.width, h: C.height },
        p
      ), g = dd({ width: C.width, height: C.height }, m);
      if (g.halfW < C.width * 0.5 - 1e-6 || g.halfH < C.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = p.hFOV_deg, c.vFOV_deg = p.vFOV_deg, h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, rt(), lt(), ze());
    }, 180), ze(), !0;
  }
  function Uv() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, rt(), lt(), ze(), !0) : !1;
  }
  function Ca() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Hi(), h.interaction = null, Po(), Gr(), ze(), ht(h.pointerPos), le({ localOnly: !0 }), !0;
  }
  function Yv(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function Mi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Xr : Dn[s] ? s : h.activeBrushPresetId || Xr;
  }
  function Up() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (Bp() || tu());
  }
  function Yp() {
    var i;
    return Up() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Rs(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: c, y: f, inside: p }, g;
  }
  function Xv() {
    var M, E;
    if (!Yp()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, c = Mi(s), f = Dn[c] || Dn[Xr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Gn(h.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : q(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), P = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : q(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: Ar(w, k),
      strokeStyle: Ar(w, P),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((E = h.pointerPos) == null ? void 0 : E.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function qv() {
    var L, D, Q;
    const i = Xv();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", P = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), E = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = ec, c = ec, f = "0", g = "0", w = "none", M = EI, E = OI, m = KI(i.fillStyle, P, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Z), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, p = Number(((Q = (D = i.preset) == null ? void 0 : D.angle) == null ? void 0 : Q.value) || 0) * to;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = g, U.style.boxShadow = w, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - E)}px) rotate(${p}deg)`;
  }
  function Jv() {
    var ye;
    if (!X || !H) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const c = Mi(s), f = Dn[c] || Dn[Xr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Gn(h.paintColor), P = i === "mask" ? Ar(k, 0.22) : w ? "rgba(255,255,255,0.14)" : Ar(k, q(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Ar(k, 0.96) : w ? "rgba(255,255,255,0.72)" : Ar(k, q(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let E = g * 2, L = g * 2, D = "999px", Q = 0, Z = P;
    const ne = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ae = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      E = Math.max(16, g * 2 * ae), L = Math.max(10, g * 2), D = `${Math.min(8, L * 0.42)}px`, Q = Number(((ye = f == null ? void 0 : f.angle) == null ? void 0 : ye.value) || 0) * to;
    } else s === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${M} 0%, ${P} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (E = Math.max(18, g * 1.8), L = E, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (Z = "rgba(255,255,255,0.12)");
    H.style.width = `${Math.round(E)}px`, H.style.height = `${Math.round(L)}px`, H.style.borderRadius = D, H.style.background = Z, H.style.border = `1px solid ${ne}`, H.style.boxShadow = `0 0 0 1px ${oe}`, H.style.transform = `rotate(${Q}deg)`, xe && (clearTimeout(xe), xe = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function $s() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), xe && clearTimeout(xe), xe = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), xe = 0;
    }, 180));
  }
  function Xp(i, s, c, f) {
    const p = Mi(s), m = Dn[p] || Dn[Xr], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), k = Yv(f, w), P = c.map((E) => ({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: Number.isFinite(Number(E == null ? void 0 : E.widthScale)) ? Math.max(0, Number(E.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(E == null ? void 0 : E.pressureLike)) ? Math.max(0, Number(E.pressureLike)) : 1
    })), M = {
      id: zo(i),
      actionGroupId: zo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: P.map((E) => ({ ...E })),
        points: P.map((E) => ({ ...E }))
      }
    };
    return sg(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function qp(i, s, c, f) {
    const p = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = Mi(s), g = Dn[m] || Dn[Xr], w = {
      id: zo(i),
      actionGroupId: zo("ag"),
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
        points: p.map((k) => ({ ...k }))
      }
    };
    return sg(w, g), Number(g.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Fo(i) {
    const s = v.painting || (v.painting = Qo(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Zv(i, s, c = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const P = He();
      if (!P || (f = gr(s, P, c), !f)) return !1;
    } else
      f = mr(s, c);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const P = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (P < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const k = Hn();
    if (k) {
      const P = h.paintEngine.ensureTarget(k);
      h.paintEngine.appendStrokePoint(P, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Qv(i, s, c = performance.now()) {
    var g, w;
    let f;
    if (h.mode === "frame") {
      const k = He();
      if (!k) return !1;
      f = gr(s, k, c);
    } else
      f = mr(s, c);
    const p = (w = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), P = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && P < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function e_(i) {
    var ae, ke, Be, Xe, ot;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Fs();
    const c = Hn(), f = xa(c.width, c.height);
    if (!Ap(f, s, { w: c.width, h: c.height })) return !1;
    const p = ((ke = (ae = f.ctx) == null ? void 0 : ae.getImageData(0, 0, c.width, c.height)) == null ? void 0 : ke.data) || null;
    if (!p) return !1;
    const m = new Map(bn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], w = [], k = [...On().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let P = !1, M = xo().reduce((be, ie) => Math.max(be, Number((ie == null ? void 0 : ie.z_index) || 0)), -1) + 1;
    function E(be, ie, he, we = 8) {
      let Te = ie, Ge = he, Fe = -1, pt = -1;
      for (let qe = 0; qe < he; qe += 1)
        for (let jt = 0; jt < ie; jt += 1)
          be[(qe * ie + jt) * 4 + 3] <= we || (jt < Te && (Te = jt), qe < Ge && (Ge = qe), jt > Fe && (Fe = jt), qe > pt && (pt = qe));
      return Fe < Te || pt < Ge ? null : { minX: Te, minY: Ge, maxX: Fe, maxY: pt };
    }
    const L = E(p, c.width, c.height, 8);
    if (!L) return !1;
    function D(be, ie) {
      return !be || !ie ? !1 : !(be.maxX < ie.minX || ie.maxX < be.minX || be.maxY < ie.minY || ie.maxY < be.minY);
    }
    function Q(be, ie) {
      const he = yi((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", ie);
      if (!he) return null;
      const we = he.centerUv.u - he.halfW, Te = he.centerUv.u + he.halfW, Ge = he.centerUv.v - he.halfH, Fe = he.centerUv.v + he.halfH, pt = c.width, qe = c.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * pt),
        maxX: Math.ceil((Te % 1 + 1) % 1 * pt),
        minY: Math.floor(q(Ge, 0, 1) * qe),
        maxY: Math.ceil(q(Fe, 0, 1) * qe),
        wraps: Te - we >= 1 || we < 0 || Te > 1
      };
    }
    function Z(be) {
      const ie = (be == null ? void 0 : be.bbox) || null;
      if (!ie) return null;
      const he = (be == null ? void 0 : be.transform) || {}, we = c.width, Te = c.height, Ge = Number(ie.u0 || 0) + Number(he.du || 0), Fe = Number(ie.u1 || 0) + Number(he.du || 0), pt = Number(ie.v0 || 0) + Number(he.dv || 0), qe = Number(ie.v1 || 0) + Number(he.dv || 0);
      return {
        minX: Math.floor((Ge % 1 + 1) % 1 * we),
        maxX: Math.ceil((Fe % 1 + 1) % 1 * we),
        minY: Math.floor(q(pt, 0, 1) * Te),
        maxY: Math.ceil(q(qe, 0, 1) * Te),
        wraps: Fe - Ge >= 1 || Ge < 0 || Fe > 1
      };
    }
    function ne(be) {
      return be ? be.wraps ? D(L, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || D(L, { minX: be.minX, maxX: c.width - 1, minY: be.minY, maxY: be.maxY }) : D(L, be) : !0;
    }
    function oe(be) {
      if (!be) return { touched: !1, canvas: null };
      const ie = xa(c.width, c.height, { readback: !0 });
      ie.ctx.drawImage(be, 0, 0);
      const he = ie.ctx.getImageData(0, 0, c.width, c.height);
      ie.ctx.save(), ie.ctx.globalCompositeOperation = "destination-out", ie.ctx.drawImage(f.canvas, 0, 0), ie.ctx.restore();
      const we = ie.ctx.getImageData(0, 0, c.width, c.height);
      for (let Te = 0; Te < c.width * c.height; Te += 1) {
        if (p[Te * 4 + 3] <= 8) continue;
        const Fe = he.data[Te * 4 + 3], pt = we.data[Te * 4 + 3];
        if (Fe > pt)
          return { touched: !0, canvas: ie.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(be, ie, he) {
      const we = Number(he == null ? void 0 : he.z_index), Te = tv(be, ie, he).map((Ge, Fe) => ({
        ...Ge,
        z_index: Number.isFinite(we) ? we + Fe * 1e-3 : M + Fe * 1e-3
      }));
      return Te.length && (M = Math.max(M, ...Te.map((Ge) => Number((Ge == null ? void 0 : Ge.z_index) || 0))) + 1), Te;
    }
    for (const be of bn()) {
      const ie = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!ie) continue;
      const he = dr(ie, "paint");
      if (!ne(Q(be, he))) {
        w.push(be), g.push(...he);
        continue;
      }
      const we = ((Xe = (Be = h.paintEngine) == null ? void 0 : Be.getGroupTarget) == null ? void 0 : Xe.call(Be, ie)) || null, Te = ((ot = we == null ? void 0 : we.committedPaint) == null ? void 0 : ot.canvas) || null;
      if (!Te) {
        w.push(be), g.push(...he);
        continue;
      }
      const Ge = oe(Te);
      if (!Ge.touched || !Ge.canvas) {
        w.push(be), g.push(...he);
        continue;
      }
      P = !0;
      const Fe = ye(Ge.canvas, "paint", m.get(ie) || be || {});
      k.push(...Fe);
    }
    for (const be of On().filter((ie) => String((ie == null ? void 0 : ie.layerKind) || "paint") === "paint")) {
      if (!ne(Z(be))) {
        k.push(be);
        continue;
      }
      const ie = fp(be, null);
      if (!ie) {
        k.push(be);
        continue;
      }
      const he = oe(ie);
      if (!he.touched || !he.canvas) {
        k.push(be);
        continue;
      }
      P = !0;
      const we = ye(he.canvas, "paint", be);
      k.push(...we);
    }
    return P ? (v.painting.paint.strokes = g, v.painting.groups = w.sort((be, ie) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), v.painting.raster_objects = k.sort((be, ie) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0)), ya({ preservePanelValues: !1 }), !0) : !1;
  }
  function t_(i) {
    var g, w, k, P, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((P = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : P.points) || []).length >= 1) {
      nu(i);
      const E = Hn();
      E && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(E) : h.paintEngine.commitActiveStroke(i.stroke, E)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Xp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = Hn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function n_(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      nu(i);
      const k = Hn();
      k && h.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = qp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = Hn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function nu(i) {
    var m, g, w, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Yc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), e_(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && $d((w = i.stroke) == null ? void 0 : w.actionGroupId), Fo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Yc(p, i.stroke.targetSpace, !0), f && $d((k = i.stroke) == null ? void 0 : k.actionGroupId), Fo(i.layerKind).push(i.stroke), !0);
  }
  function Jp(i) {
    var c;
    if (t === "cutout" && h.mode === "frame") {
      const f = He(), p = on(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = gr(i, f, performance.now()), w = g ? Co(g) : null;
      if (w)
        for (const P of Bc()) {
          if (!vt(P)) continue;
          const M = Na(P, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const E = Xt(P);
            if (E != null && E.visible) return { item: P, geom: E };
          }
        }
      const k = xc(!1).slice().sort((P, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0));
      for (const P of k) {
        if (P.type === "strokeGroup") {
          const L = ko(pa("paint", P.actionGroupId || P.id || ""));
          if (!L) continue;
          const D = Xt(L);
          if (!(D != null && D.visible)) continue;
          const Q = Array.isArray(D.strokePaths) ? D.strokePaths : [];
          for (const Z of Q) {
            const ne = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!ne.length) continue;
            if (Z.closed && ne.length >= 3 && Jr(i, ne)) return { item: L, geom: D };
            const oe = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let ye = 0; ye < ne.length - 1; ye += 1)
              if (Uu(i, ne[ye], ne[ye + 1]) <= oe * oe) return { item: L, geom: D };
            if (ne.length === 1 && Pi(i, ne[0]) <= oe * oe) return { item: L, geom: D };
          }
          continue;
        }
        if (P.type === "rasterObject") {
          const L = So(ha(((c = P.item) == null ? void 0 : c.id) || P.id || ""));
          if (!L) continue;
          const D = Xt(L);
          if (up(L, D, i, g)) return { item: L, geom: D };
          continue;
        }
        const M = P.item;
        if (!M || !vt(M) || !w) continue;
        const E = Na(M, w);
        if (E && Number(E.x) >= 0 && Number(E.x) <= 1 && Number(E.y) >= 0 && Number(E.y) <= 1) {
          const L = Xt(M);
          if (L != null && L.visible) return { item: M, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...xc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? ko(pa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? So(ha(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Bc().filter((f) => jn(f)) : []
    ];
    for (const f of s) {
      if (rn(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const k = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!k.length) continue;
          if (w.closed && k.length >= 3 && Jr(i, k)) return { item: f, geom: m };
          const P = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < k.length - 1; M += 1)
            if (Uu(i, k[M], k[M + 1]) <= P * P) return { item: f, geom: m };
          if (k.length === 1 && Pi(i, k[0]) <= P * P) return { item: f, geom: m };
        }
        continue;
      }
      if (vn(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        if (up(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = Xt(f);
      if (p.visible && Jr(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Ia(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (vt(c)) return Cf(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((g) => Pi(g, s) <= 121);
      if (p >= 0) {
        const g = i.corners[p], w = g.x - i.center.x, k = g.y - i.center.y, P = w * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: P };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const w = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && w.length >= 3 && Jr(s, w)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let P = 0; P < w.length - 1; P += 1)
          if (Uu(s, w[P], w[P + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => Pi(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], g = m.x - i.center.x, w = m.y - i.center.y, k = g * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      return Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => Pi(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const f = i.corners.findIndex((p) => Pi(p, s) <= 121);
    if (f >= 0) {
      const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: w };
    }
    return Pi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function Zp(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function r_(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function i_(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => r_(i, p))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Jr({ x: c, y: f }, s.corners);
  }
  function ht(i) {
    if (qv(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Re("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Re("grabbing") : h.interaction.kind === "space_pan" ? Re("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Re("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Re("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Re(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Re("grabbing") : Re("default");
      return;
    }
    if (Yp()) {
      Re("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Re(PI);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Re("default");
        return;
      }
      Re("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Re("default");
      return;
    }
    if (h.gizmoAxis) {
      Re("grab");
      return;
    }
    const s = Mt(), c = s ? Xt(s) : null, f = s ? fn(s) : !1, p = f ? { kind: "none", cursor: "default" } : Ia(c, i, s);
    if (!f && p.kind !== "none") {
      Re(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Jp(i)) {
      Re("default");
      return;
    }
    Re(h.mode === "pano" ? "grab" : "default");
  }
  function We() {
    if (!en) return;
    if (mn = !1, h.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId) {
      const p = o_();
      mn = p.visible, Qp(p);
      return;
    }
    const i = Mt(), s = Qn();
    if (!i && s.length === 0 || h.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = Ss(), f = uP({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? ga(s) : Xt(i),
      allLocked: Nc(s),
      anyLocked: s.some((p) => fn(p)),
      selectedLocked: fn(i),
      activeAspect: ei(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Gt,
      isStickerHidden: Mo,
      canRestoreSelectedToInitial: jb,
      iconSet: Me
    });
    Qp(f);
  }
  function o_() {
    const i = Vi() && !h.interaction ? kr().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Vs(), c = i.stickers.find((g) => g.id === h.worldSelectedId), p = (c ? wd(c) : [i.gizmo.transform.position]).map((g) => vf(s, g, C.width, C.height)).filter(Boolean), m = Zk(s, i.gizmo.transform.position, i.gizmo.mode, C.width, C.height);
    return dP({ corners: p, gizmoBox: m, gizmoMode: h.gizmoMode });
  }
  function Qp(i) {
    var m, g;
    if (!i.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, k) => pP(i.anchor, w, k, C.width, C.height), c = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(c, f);
    if (!p) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!en || I.selectionMenu.visible !== !0) return;
      const w = en.getBoundingClientRect(), k = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, P = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: k, h: P, measured: !0 };
      const M = s(k, P);
      M && (I.selectionMenu.left = M.left, I.selectionMenu.top = M.top);
    });
  }
  function Hi() {
    Ae.timer && (clearTimeout(Ae.timer), Ae.timer = 0), Ae.target = null, I.tooltip.visible = !1;
  }
  function a_(i) {
    if (!hi || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var Z, ne;
      if (Ae.target !== c || !hi || !(c != null && c.isConnected)) return;
      const f = de.getBoundingClientRect(), p = c.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((Z = hi.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, k = Math.round(Number(((ne = hi.getBoundingClientRect()) == null ? void 0 : ne.height) || 0)) || 24, P = !!c.closest(".pano-floating-left"), M = !!c.closest(".pano-frame-rail"), E = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let L = "", D = p.left - f.left + p.width * 0.5 - w * 0.5, Q = p.top - f.top - k - g;
      if (P)
        L = "tool-rail", D = p.right - f.left + 10, Q = p.top - f.top + p.height * 0.5 - k * 0.5, D = q(D, m, Math.max(m, f.width - w - m)), Q = q(Q, m, Math.max(m, f.height - k - m));
      else if (M)
        L = "frame-rail", D = p.left - f.left - w - 10, Q = p.top - f.top + p.height * 0.5 - k * 0.5, D = q(D, m, Math.max(m, f.width - w - m)), Q = q(Q, m, Math.max(m, f.height - k - m));
      else if (E) {
        L = "footer";
        const oe = c.closest(".pano-paint-footer"), ye = oe ? oe.getBoundingClientRect() : p;
        D = ye.left - f.left + ye.width * 0.5 - w * 0.5, Q = ye.bottom - f.top + 5, D = q(D, m, Math.max(m, f.width - w - m)), Q = Math.max(m, Q);
      }
      D = q(D, m, Math.max(m, f.width - w - m)), Q = Math.max(m, Q), I.tooltip.left = D, I.tooltip.top = Q, I.tooltip.variant = L, I.tooltip.visible = !0;
    });
  }
  const dn = ld({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Wt(Number(i.yaw || 0)), h.viewPitch = q(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = q(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || C.clientWidth || 0)),
        h: Math.max(1, Number(i.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = v.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = v.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: wi,
    onInteraction: () => {
      Pe.backgroundDirty = !0, Pe.dirty = !0;
    }
  });
  function s_(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += M0(s, i.lastAngle), i.lastAngle = s;
    const f = N0(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Vo(f), p.fillPct = (f + 180) / 360 * 100), Br(), ru(i), le({ localOnly: !0 });
  }
  function l_(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = Yy(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Vo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), Br(), ru(i), le({ localOnly: !0 });
  }
  const eh = (i, s) => {
    const c = ki(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function ru(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Ae.timer && (clearTimeout(Ae.timer), Ae.timer = 0), Ae.target = null;
    const s = on(i.shot), c = (g = C.getBoundingClientRect) == null ? void 0 : g.call(C), f = (w = de.getBoundingClientRect) == null ? void 0 : w.call(de);
    if (!s || !c || !f || C.width <= 0 || C.height <= 0) return;
    const p = c.width / C.width, m = c.height / C.height;
    I.tooltip.text = `${Vo(i.shot.roll_deg)}°`, I.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * p, I.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  at == null || at.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const c = on(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = eh(i, f);
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
    }, (m = at.setPointerCapture) == null || m.call(at, i.pointerId), i.preventDefault(), Br(), ru(h.interaction), le({ localOnly: !0 });
  }), at == null || at.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || s_(
      h.interaction,
      eh(i, h.interaction.center),
      i
    );
  });
  const c_ = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (rt(), lt(), ze()), h.interaction = null, Hi(), Gr(), Br(), le());
  };
  at == null || at.addEventListener("pointerup", c_), at == null || at.addEventListener("pointercancel", () => Ca()), at == null || at.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Ca();
  }), at == null || at.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, rt(), lt(), ze(), Br(), le(), i.preventDefault());
  }), C.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, Ur());
    const s = ki(i);
    nt = s, Rs(s, !0), h.viewTween = null, dn.state.inertia.active = !1, dn.state.inertia.vx = 0, dn.state.inertia.vy = 0;
    const c = va(), f = c ? EN(Dc(), i) : null;
    if (f === "look") {
      i.preventDefault();
      const P = Ls(i);
      h.interaction = { kind: "view", last: P, lastTs: performance.now() }, dn.startDrag(P.x, P.y, i.pointerId, performance.now()), ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (f) {
      i.preventDefault(), lp(f, s, i.pointerId);
      return;
    }
    if (c && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const P = He();
        if (!P || r || P.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: P,
          last: s,
          start: {
            yaw_deg: Number(P.yaw_deg || 0),
            pitch_deg: Number(P.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const P = h.mode === "unwrap" ? s : Ls(i);
        h.interaction = { kind: "view", last: P, lastTs: performance.now() }, dn.startDrag(P.x, P.y, i.pointerId, performance.now());
      }
      ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const P = He(), M = on(P);
      if (!P || P.locked === !0 || !M) return;
      const E = Uy({
        frame: M,
        point: s,
        startRollDeg: Number(P.roll_deg ?? P.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!E) return;
      h.interaction = {
        kind: "roll_frame",
        shot: P,
        center: E.center,
        lastAngle: E.lastAngle,
        accumulatedRad: E.accumulatedRad,
        rollGesture: E,
        start: { roll_deg: Number(P.roll_deg ?? P.rot_deg ?? 0) },
        changed: !1,
        altStarted: E.source === "alt",
        source: E.source
      }, C.setPointerCapture(i.pointerId), i.preventDefault(), Br(), le({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      const P = He();
      if (!P || r || P.locked === !0) return;
      h.interaction = {
        kind: "pan_frame",
        shot: P,
        last: s,
        start: { yaw_deg: Number(P.yaw_deg || 0), pitch_deg: Number(P.pitch_deg || 0) },
        changed: !1
      }, ht(s), C.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && rh(i, s);
      return;
    }
    if (se && !se.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (Bp() || tu())) {
      Tn();
      const P = h.primaryTool === "mask" ? "mask" : "paint", M = h.primaryTool === "mask" ? h.maskTool : h.paintTool, E = h.mode === "frame" && tu() ? He() : null, L = { kind: "ERP_GLOBAL" }, D = E ? gr(s, E, performance.now()) : mr(s, performance.now());
      if (!D) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: M === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: P,
        _livePreviewToken: zo("live"),
        stroke: M === "lasso_fill" ? qp(P, M, [D], L) : Xp(P, M, [D], L)
      }, Po();
      const Q = Hn();
      if (Q)
        if (h.paintEngine.beginStroke(h.interaction.stroke, Q), h.interaction.kind === "paint_stroke") {
          const Z = h.paintEngine.ensureTarget(Q), ne = Number((D == null ? void 0 : D.u) ?? (D == null ? void 0 : D.x) ?? 0), oe = Number((D == null ? void 0 : D.v) ?? (D == null ? void 0 : D.y) ?? 0);
          h.paintEngine.appendStrokePoint(Z, ne, oe, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, Q);
      ht(s), C.setPointerCapture(i.pointerId), le();
      return;
    }
    const p = Qn(), m = Mt(), g = p.length > 1 ? ga(p) : m ? Xt(m) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, ht(s), C.setPointerCapture(i.pointerId), le({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && Vi() && u_(i, s)) return;
    if (p.length > 1 && (g != null && g.visible)) {
      if ((p.some((M) => fn(M)) ? { kind: "none" } : Ia(g, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: p.map((M) => M),
          offset: { x: s.x - g.center.x, y: s.y - g.center.y },
          startCenter: { x: g.center.x, y: g.center.y },
          stickerSnapshots: p.filter((M) => vt(M)).map((M) => ({
            id: String(M.id || ""),
            yaw_deg: Number(Zt(M).yaw_deg || 0),
            pitch_deg: Number(Zt(M).pitch_deg || 0),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: p.filter((M) => rn(M)).map((M) => ({
            id: String(M.actionGroupId || M.id || ""),
            layerKind: String(M.layerKind || "paint"),
            snapshot: wn(dr(M.actionGroupId, M.layerKind)),
            frameSnapshot: wn(yi(M.actionGroupId, M.layerKind)),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Mc(M.actionGroupId, M.layerKind)
          })),
          rasterSnapshots: p.filter((M) => vn(M)).map((M) => ({
            id: ln(M.rasterObjectId || M.id || ""),
            snapshot: wn(On().find((E) => String((E == null ? void 0 : E.id) || "") === ln(M.rasterObjectId || M.id || ""))),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: gp(M)
          }))
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (m && (g != null && g.visible)) {
      const P = fn(m) ? { kind: "none" } : Ia(g, s, m);
      if (P.kind === "scale") {
        h.interaction = rn(m) ? {
          kind: "scale_stroke_group",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: wn(dr(m.actionGroupId, m.layerKind)),
          frameSnapshot: wn(yi(m.actionGroupId, m.layerKind)),
          cursor: P.cursor
        } : vn(m) ? {
          kind: "scale_raster_object",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: wn(On().find((M) => String((M == null ? void 0 : M.id) || "") === ln(m.rasterObjectId || m.id || ""))),
          cursor: P.cursor
        } : {
          kind: "scale",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Zt(m).hFOV_deg || 20),
          startVFOV: Number(Zt(m).vFOV_deg || 20),
          cursor: P.cursor
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "scale_x" || P.kind === "scale_y") {
        h.interaction = {
          kind: P.kind,
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Zt(m).hFOV_deg || 20),
          startVFOV: Number(Zt(m).vFOV_deg || 20),
          cursor: P.cursor,
          edge: P.edge
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "rotate") {
        h.interaction = rn(m) ? {
          kind: "rotate_stroke_group",
          item: m,
          center: g.center,
          startAng: Math.atan2(s.y - g.center.y, s.x - g.center.x),
          snapshot: wn(dr(m.actionGroupId, m.layerKind)),
          frameSnapshot: wn(yi(m.actionGroupId, m.layerKind))
        } : {
          kind: "rotate",
          item: m,
          center: g.center,
          startRot: Number(Zt(m).rot_deg || Zt(m).roll_deg || 0),
          startAng: Math.atan2(s.y - g.center.y, s.x - g.center.x)
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (P.kind === "move") {
        if (rn(m)) {
          const M = h.mode === "frame" ? (() => {
            const E = He();
            return E ? gr(s, E, performance.now()) : null;
          })() : mr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: m,
            startUv: M,
            snapshot: wn(dr(m.actionGroupId, m.layerKind)),
            frameSnapshot: wn(yi(m.actionGroupId, m.layerKind))
          }, ht(s), C.setPointerCapture(i.pointerId);
          return;
        }
        if (vn(m)) {
          const M = h.mode === "frame" ? (() => {
            const E = He();
            return E ? gr(s, E, performance.now()) : null;
          })() : mr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: m,
            startUv: M,
            snapshot: wn(On().find((E) => String((E == null ? void 0 : E.id) || "") === ln(m.rasterObjectId || m.id || "")))
          }, ht(s), C.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: m,
          offset: { x: s.x - g.center.x, y: s.y - g.center.y }
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const w = Jp(s);
    if (w) {
      const P = h.selectedId !== w.item.id;
      if (P && h.selectedId && (rt(), Pn()), pr(w.item), t === "cutout" && P && (h.cutoutAspectOpen = !1), P && ze(), We(), le(), fn(w.item)) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: rn(w.item) ? "move_stroke_group" : vn(w.item) ? "move_raster_object" : "move",
        item: w.item,
        offset: { x: s.x - w.geom.center.x, y: s.y - w.geom.center.y },
        startUv: rn(w.item) || vn(w.item) ? h.mode === "frame" ? (() => {
          const M = He();
          return M ? gr(s, M, performance.now()) : null;
        })() : mr(s, performance.now()) : null,
        snapshot: rn(w.item) ? wn(dr(w.item.actionGroupId, w.item.layerKind)) : vn(w.item) ? wn(On().find((M) => String((M == null ? void 0 : M.id) || "") === ln(w.item.rasterObjectId || w.item.id || ""))) : null,
        frameSnapshot: rn(w.item) ? wn(yi(w.item.actionGroupId, w.item.layerKind)) : null
      }, ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    const k = !!h.selectedId;
    k && (rt(), Pn()), ya(), k && ze(), We(), le(), h.mode === "pano" && rh(i, s);
  };
  function Vs() {
    return Iu(Kr(), C.width, C.height, zi());
  }
  function Ea(i, s) {
    return tn.gizmoPointer(i, Vs(), s.x, s.y, C.width, C.height);
  }
  function u_(i, s) {
    var w;
    const c = (w = kr().space) == null ? void 0 : w.gizmo;
    if (c && Ea("hover", s) !== null && Ea("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: c.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: c.transform,
        base: uo(ba(), h.frame),
        changed: !1
      }, C.setPointerCapture(i.pointerId), ht(s), !0;
    const f = Qn(), p = Mt(), m = f.length > 1 ? f.some((k) => fn(k)) ? "none" : Ia(ga(f), s).kind : p && !fn(p) ? Ia(Xt(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = tn.pickSticker(Vs(), s.x, s.y, C.width, C.height);
    return v.stickers.some((k) => k.id === g && k.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (rt(), Pn()), Fc(g), ze(), We(), $i(), le()), h.interaction = { kind: "world_select" }, C.setPointerCapture(i.pointerId), !0) : !1;
  }
  function th(i) {
    var f;
    const c = !!h.worldSelectedId && h.primaryTool === "cursor" && Vi() && !!((f = kr().space) != null && f.gizmo) ? Ea("hover", i) : null;
    c !== h.gizmoAxis && (h.gizmoAxis = c, Pe.backgroundDirty = !0, le({ localOnly: !0 }));
  }
  function f_(i, s) {
    const c = Ea("move", s), f = v.stickers.find((p) => p.id === i.id);
    !c || !f || (gk(f, h.frame, Yk(i.mode, i.base, i.start, c)), i.changed = !0, Tt(), ze(), le({ localOnly: !0 }));
  }
  function nh(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (Ea("up", h.pointerPos), Pe.backgroundDirty = !0, i.changed && (rt(), lt(), ze())), ht(h.pointerPos), le();
  }
  function rh(i, s) {
    if (va()) {
      const f = Dc().emptyLeft;
      f && lp(f, s, i.pointerId);
      return;
    }
    const c = Ls(i);
    h.interaction = { kind: "view", last: c, lastTs: performance.now() }, dn.startDrag(c.x, c.y, i.pointerId, performance.now()), ht(s), C.setPointerCapture(i.pointerId);
  }
  function d_(i, s) {
    if (!S || !zt.playing) return;
    if (zt.stop(), i.kind === "world_gizmo") {
      const p = v.stickers.find((m) => m.id === i.id);
      p && (i.base = uo(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = ga(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), w = g ? Xt(g) : null;
        w != null && w.visible && (m.yaw_deg = Number(Zt(g).yaw_deg || 0), m.pitch_deg = Number(Zt(g).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const c = Xt(i.item);
    if (!(c != null && c.visible)) return;
    const f = Zt(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - c.center.x, y: s.y - c.center.y };
      return;
    }
    if (i.center = c.center, i.kind === "rotate") {
      i.startRot = Number(f.rot_deg || f.roll_deg || 0), i.startAng = Math.atan2(s.y - c.center.y, s.x - c.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)), i.startHFOV = Number(f.hFOV_deg || 20), i.startVFOV = Number(f.vFOV_deg || 20);
  }
  C.onpointermove = (i) => {
    var f, p, m, g, w, k, P, M, E, L, D, Q, Z, ne, oe, ye, ae, ke, Be, Xe, ot, be;
    const s = ki(i);
    if (Rs(s, !0), !h.interaction) {
      th(s), ht(s);
      return;
    }
    ht(s);
    const c = h.interaction;
    if (nt && (s.x !== nt.x || s.y !== nt.y)) {
      const ie = nt;
      nt = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(c.kind) || d_(c, ie);
    }
    if (c.kind !== "world_select") {
      if (c.kind === "world_gizmo") {
        f_(c, s);
        return;
      }
      if (c.kind === "paint_stroke") {
        const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        ie.forEach((we) => {
          const Te = ki(we);
          if (h.mode === "frame") {
            const Ge = He(), Fe = Ge ? on(Ge) : null;
            if (Fe) {
              const pt = (Te.x - Fe.x) / Math.max(1, Fe.w), qe = (Te.y - Fe.y) / Math.max(1, Fe.h);
              if (!(pt >= 0 && pt <= 1 && qe >= 0 && qe <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, t_(c));
            }
          }
          Zv(c, Te, performance.now()) && (he = !0);
        }), he && le({ localOnly: !0 });
        return;
      }
      if (c.kind === "paint_lasso_fill") {
        const ie = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        if (ie.forEach((we) => {
          const Te = ki(we);
          if (h.mode === "frame") {
            const Ge = He(), Fe = Ge ? on(Ge) : null;
            if (Fe) {
              const pt = (Te.x - Fe.x) / Math.max(1, Fe.w), qe = (Te.y - Fe.y) / Math.max(1, Fe.h);
              if (!(pt >= 0 && pt <= 1 && qe >= 0 && qe <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, n_(c));
            }
          }
          Qv(c, Te, performance.now()) && (he = !0);
        }), he) {
          const we = Hn();
          we && h.paintEngine.updateActiveStroke(c.stroke, we), le({ localOnly: !0 });
        }
        return;
      }
      if (c.kind === "view") {
        const ie = performance.now(), he = h.mode === "unwrap" ? s : Ls(i);
        dn.moveDrag(he.x, he.y, h.mode === "unwrap" ? "unwrap" : "pano", ie), c.lastTs = ie, c.last = he, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "space_pan" || c.kind === "space_orbit") {
        const ie = Kr();
        Lc(c.kind === "space_pan" ? Ok(ie, s.x - c.last.x, s.y - c.last.y, C.width, C.height, c.depth) : Ek(ie, s.x - c.last.x, s.y - c.last.y, C.height, c.pivot)), c.last = s;
        return;
      }
      if (c.kind === "pan_frame") {
        const ie = eu(c.shot);
        if (!ie || !c.shot) return;
        const he = s.x - c.last.x, we = s.y - c.last.y, Te = Xy(c.shot, {
          dx: he,
          dy: we,
          focalPx: ie.focalPx,
          invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = v.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        c.shot.yaw_deg = Te.yaw_deg, c.shot.pitch_deg = Te.pitch_deg, c.changed = c.changed || Math.abs(he) > 0 || Math.abs(we) > 0, c.last = s, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "roll_frame") {
        if (c.source === "knob") return;
        l_(c, s, i);
        return;
      }
      if (c.kind === "move") {
        const ie = s.x - c.offset.x, he = s.y - c.offset.y;
        if (h.mode === "frame" && t === "cutout") {
          const we = He(), Te = on(we);
          if (!we || !Te) return;
          const Ge = {
            x: q((ie - Te.x) / Math.max(1, Te.w), 0, 1),
            y: q((he - Te.y) / Math.max(1, Te.h), 0, 1)
          }, Fe = Uc(we, Ge);
          if (!Fe) return;
          const pt = rl(Fe);
          fr(c.item, { yaw_deg: pt.yaw, pitch_deg: pt.pitch });
        } else if (h.mode === "unwrap") {
          const we = wi(), Te = q((ie - we.x) / Math.max(we.w, 1), 0, 1), Ge = q((he - we.y) / Math.max(we.h, 1), 0, 1);
          fr(c.item, { yaw_deg: Wt(Te * 360 - 180), pitch_deg: q(90 - Ge * 180, -90, 90) });
        } else {
          const we = Vc(ie, he), Te = rl(we);
          fr(c.item, { yaw_deg: Te.yaw, pitch_deg: Te.pitch });
        }
        vt(c.item) && Tt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "move_stroke_group") {
        const ie = h.mode === "frame" ? (() => {
          const Te = He();
          return Te ? gr(s, Te, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!ie || !c.startUv) return;
        const he = Zn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
        zd((m = c.item) == null ? void 0 : m.actionGroupId, he, we, c.snapshot, (g = c.item) == null ? void 0 : g.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_raster_object") {
        const ie = h.mode === "frame" ? (() => {
          const Te = He();
          return Te ? gr(s, Te, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!ie || !c.startUv) return;
        const he = Zn(Number(ie.u || 0), Number(c.startUv.u || 0)), we = Number(ie.v || 0) - Number(c.startUv.v || 0);
        Hd(((w = c.item) == null ? void 0 : w.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", he, we, c.snapshot) && (Io(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_raster_object") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        Ib(((P = c.item) == null ? void 0 : P.rasterObjectId) || ((M = c.item) == null ? void 0 : M.id) || "", he, c.snapshot) && (Io(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_multi") {
        const ie = s.x - Number(((E = c.offset) == null ? void 0 : E.x) || 0), he = s.y - Number(((L = c.offset) == null ? void 0 : L.y) || 0);
        let we = !1, Te = !1, Ge = !1;
        const Fe = ie - Number(((D = c.startCenter) == null ? void 0 : D.x) || ie), pt = he - Number(((Q = c.startCenter) == null ? void 0 : Q.y) || he);
        for (const qe of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
          const jt = (t === "cutout" ? kc() : Sr()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(qe.id || ""));
          if (!jt || !vt(jt)) continue;
          const pn = {
            x: Number(((Z = qe.center) == null ? void 0 : Z.x) || 0) + Fe,
            y: Number(((ne = qe.center) == null ? void 0 : ne.y) || 0) + pt
          };
          if (h.mode === "frame" && t === "cutout") {
            const Pt = He(), Ht = on(Pt);
            if (!Pt || !Ht) continue;
            const Gi = {
              x: q((pn.x - Ht.x) / Math.max(1, Ht.w), 0, 1),
              y: q((pn.y - Ht.y) / Math.max(1, Ht.h), 0, 1)
            }, kh = Uc(Pt, Gi);
            if (!kh) continue;
            const Mh = rl(kh);
            fr(jt, { yaw_deg: Mh.yaw, pitch_deg: Mh.pitch });
          } else if (h.mode === "unwrap") {
            const Pt = wi(), Ht = q((pn.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), Gi = q((pn.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
            fr(jt, { yaw_deg: Wt(Ht * 360 - 180), pitch_deg: q(90 - Gi * 180, -90, 90) });
          } else {
            const Pt = Vc(pn.x, pn.y), Ht = rl(Pt);
            fr(jt, { yaw_deg: Ht.yaw, pitch_deg: Ht.pitch });
          }
          we = !0;
        }
        for (const qe of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
          const jt = {
            x: Number(((oe = qe.center) == null ? void 0 : oe.x) || 0) + Fe,
            y: Number(((ye = qe.center) == null ? void 0 : ye.y) || 0) + pt
          }, pn = h.mode === "frame" ? (() => {
            const Ht = He();
            return Ht ? gr(jt, Ht, performance.now()) : null;
          })() : mr(jt, performance.now()), Pt = qe.centerUv || null;
          if (pn && Pt) {
            const Ht = Zn(Number(pn.u || 0), Number(Pt.u || 0)), Gi = Number(pn.v || 0) - Number(Pt.v || 0);
            zd(qe.id, Ht, Gi, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (we = !0, Te = !0);
          }
        }
        for (const qe of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
          const jt = {
            x: Number(((ae = qe.center) == null ? void 0 : ae.x) || 0) + Fe,
            y: Number(((ke = qe.center) == null ? void 0 : ke.y) || 0) + pt
          }, pn = h.mode === "frame" ? (() => {
            const Ht = He();
            return Ht ? gr(jt, Ht, performance.now()) : null;
          })() : mr(jt, performance.now()), Pt = qe.centerUv || null;
          if (pn && Pt) {
            const Ht = Zn(Number(pn.u || 0), Number(Pt.u || 0)), Gi = Number(pn.v || 0) - Number(Pt.v || 0);
            Hd(qe.id, Ht, Gi, qe.snapshot) && (we = !0, Ge = !0);
          }
        }
        we && (Te ? hr({ rebuildPaintEngine: !1 }) : Ge ? Io() : Tt(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_stroke_group") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        jd((Be = c.item) == null ? void 0 : Be.actionGroupId, he, 0, c.snapshot, (Xe = c.item) == null ? void 0 : Xe.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "rotate_stroke_group") {
        let ie = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * to;
        i.shiftKey && (ie = Math.round(ie / 45) * 45), jd((ot = c.item) == null ? void 0 : ot.actionGroupId, 1, ie, c.snapshot, (be = c.item) == null ? void 0 : be.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "marquee_select") {
        c.current = s, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { hFOV_deg: q(c.startHFOV * he, 1, 179), vFOV_deg: q(c.startVFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = eo(c.item)), vt(c.item) && Tt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_x") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { hFOV_deg: q(c.startHFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = eo(c.item)), vt(c.item) && Tt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_y") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { vFOV_deg: q(c.startVFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = eo(c.item)), vt(c.item) && Tt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "rotate") {
        let he = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * to, we = c.startRot - he;
        i.shiftKey && (we = Math.round(we / 45) * 45), fr(c.item, { [vt(c.item) ? "rot_deg" : "roll_deg"]: we }), vt(c.item) && Tt(), le({ localOnly: !0 });
      }
    }
  }, C.onpointerup = () => {
    var s, c, f, p, m, g, w, k;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, ht(h.pointerPos), We();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        nh(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        Po();
        const P = nu(h.interaction), M = !!h.interaction._hasCommittedSegments;
        if (P || M) {
          hr();
          const E = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (E) {
            const D = bn().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === E);
            D && (D.frame = null);
          }
          const L = Hn();
          L && (P ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(L), Mp()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, L) : h.paintEngine.cancelActiveStroke(L)), rt(), Pn(), ze(), We(), e.setDirtyCanvas(!0, !0), le();
        } else {
          const E = Hn();
          E && h.paintEngine.cancelActiveStroke(E);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const P = Zp(h.interaction.start, h.interaction.current), E = [
          ...t === "cutout" ? Bc().filter((L) => !jn(L)) : [...Sr()],
          ...Nb(),
          ...Pb()
        ].filter((L) => i_(P, Xt(L)));
        Fb(E, ((g = E[E.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && E.length && (h.cutoutAspectOpen = !1), ze(), We(), le();
      } else if (((w = h.interaction) == null ? void 0 : w.kind) === "pan_frame" || ((k = h.interaction) == null ? void 0 : k.kind) === "roll_frame")
        h.interaction.changed && (rt(), lt(), ze());
      else if (h.interaction && h.interaction.kind !== "view") {
        let P = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (P = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (P = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (P = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (P = !0), P && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? hr({ rebuildPaintEngine: !0 }) : Io()), rt(), Pn(), e.setDirtyCanvas(!0, !0), Eo(), We(), le();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Hi(), Po(), i && i.kind === "view" && dn.endDrag(performance.now()), Gr(), We(), ht(h.pointerPos), le();
    }
  }, C.onpointercancel = () => {
    var i, s, c, f, p;
    if (!Ca()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        nh(h.interaction);
        return;
      }
      if (((c = h.interaction) == null ? void 0 : c.kind) === "view" && dn.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Po();
        const m = Hn();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Po(), Gr(), ht(h.pointerPos), le({ localOnly: !0 });
    }
  }, C.onlostpointercapture = () => {
    Ca();
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.oncontextmenu = (i) => {
    va() && ON(Dc(), 2) && i.preventDefault();
  }, C.onmousemove = (i) => {
    const s = ki(i), c = Rs(s, !0);
    h.interaction || (ht(s), c && h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 }));
  }, C.onpointerleave = () => {
    h.interaction || th({ x: -1e6, y: -1e6 });
  }, C.onmouseleave = () => {
    Rs(h.pointerPos, !1), ht(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 });
  }, C.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = ki(i), c = Fl(i);
      c && Bv(s, c) && le({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (va()) {
        const s = Fl(i);
        s && r1(ki(i), -s);
      } else dn.applyWheelEvent(i) && le({ localOnly: !0 });
      i.preventDefault();
    }
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), zn(!0));
  }, C.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ye.depth = 0, zn(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => br(p));
    c && $p(c);
  };
  const ih = (i) => {
    t !== "stickers" && t !== "cutout" || r || Ri(i) && (Ye.depth += 1, zn(!0), i.preventDefault());
  }, oh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ye.active && Ri(i) && zn(!0), Ye.active && i.preventDefault());
  }, ah = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ye.active) return;
    Ye.depth = Math.max(0, Ye.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ye.depth === 0 || s) && zn(!1);
  }, sh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ye.depth = 0, zn(!1), Ri(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", ih, !0), window.addEventListener("dragover", oh, !0), window.addEventListener("dragleave", ah, !0), window.addEventListener("drop", sh, !0);
  function iu() {
    const { canUndo: i, canRedo: s } = Dp();
    Va(I.toolButtons, "value", "undo", { disabled: !i }), Va(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const lh = (i, s, c = !1) => {
    var P;
    Tn();
    const f = t === "cutout" && h.mode === "frame" ? He() : null, p = f || Mt(), m = f ? "shot" : Ss(), g = ba();
    if (g && !Ns(g) || !g && (!p || m === "stroke" || fn(p))) return;
    const w = (((P = I.sidePanel) == null ? void 0 : P.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), g && _I.has(i) ? k = i === "scale" ? Math.max(k, cg) : k : k = q(k, Number(w.min), Number(w.max)), i === "yaw_deg" && (k = Wt(k)), g) {
      mk(g, h.frame, i, k), Tt(), ze(), le(), c && rt();
      return;
    }
    i === "opacity" ? pk(p, h.frame, k / 100) : fr(p, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = eo(p)), ze(), le(), c && rt();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var f, p, m, g, w, k, P;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const M = Kn(s.getAttribute("data-coverage"));
      if (M === Kn(v.coverage)) return;
      v.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? Pe.backgroundDirty = !0 : (Pn(), Kv({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), We(), le();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((p = (f = I.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      I.sidePanel.selectionPicker.open = !I.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      I.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let E = null;
      if (M && (t === "stickers" ? E = Sr().find((L) => String((L == null ? void 0 : L.id) || "") === M) || null : E = ((m = Kd().find((L) => {
        var D;
        return String(((D = L == null ? void 0 : L.item) == null ? void 0 : D.id) || "") === M;
      })) == null ? void 0 : m.item) || null), pr(E || null), E && !rn(E)) {
        const L = Zt(E);
        bc(
          Wt(Number(L.yaw_deg || 0)),
          q(Number(L.pitch_deg || 0), -89.9, 89.9),
          h.viewFov
        );
      }
      ze(), We(), le();
      return;
    }
    if (c === "copy-state-inline") {
      const M = Mt(), E = Ss();
      if (!M || E === "stroke" || Qn().length > 1) return;
      const L = JSON.stringify(t === "cutout" && E !== "image" ? Zd(M) : Ub(Zt(M)));
      try {
        await navigator.clipboard.writeText(L), (g = I.sidePanel) != null && g.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var D;
          (D = I.sidePanel) != null && D.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? h.showPanorama = !h.showPanorama : M === "objects" ? h.showObjects = !h.showObjects : M === "mask" && (h.showMask = !h.showMask), ze(), le();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Qc(), ze(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), le();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Qc(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), le();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, Qc(), ze(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), le();
      return;
    }
    if (c === "close-preview") {
      Do();
      return;
    }
    if (c === "cancel-close") {
      Do();
      return;
    }
    c === "save-close" && (Hv(), Do());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && lh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && lh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const ou = () => $i();
  ou(), T.addEventListener("click", (i) => {
    var P, M, E, L;
    if ((M = (P = i.target) == null ? void 0 : P.matches) != null && M.call(P, "[data-confirm-overlay]")) {
      const D = (E = I.confirmDialog) == null ? void 0 : E.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, D == null || D(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      t1(s.getAttribute("data-space-mode"));
      return;
    }
    const c = i.target.closest("[data-gizmo-mode]");
    if (c) {
      h.gizmoMode = c.getAttribute("data-gizmo-mode"), Pe.backgroundDirty = !0, We(), le({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.disabled) return;
      const D = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && (D !== "frame" && (Pe.frameSafeRect = null), ze(), We()), Ds(), Gr(), le();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const D = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = D, (D === "paint" || D === "mask") && ya({ preservePanelValues: !0 }), Fn(), ze(), We(), le();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const D = String(p.getAttribute("data-tool-ui-action") || "");
        if ((D === "undo" || D === "redo") && p.disabled) return;
        D === "undo" ? Xc(-1) : D === "redo" ? Xc(1) : D === "clear" ? Dv() : D === "add" || D === "add-image" ? Sv() : D === "add-world" ? kv() : D === "add-or-look" && Ov();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const D = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = D, ya({ preservePanelValues: !0 }), Dn[D] && (h.activeBrushPresetId = D), Fn(), ze(), We(), le();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), ya({ preservePanelValues: !0 }), Fn(), ze(), We(), le();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const D = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Lv(D);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const D = xl.find((Q) => Q.id === p.getAttribute("data-paint-color-swatch"));
        if (!D) return;
        h.paintColor = Gn(D.color), Ce(!0), Fn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), se && !se.hidden ? Ce(!0) : Ve(), Fn();
        return;
      }
    }
    const m = String(((L = p == null ? void 0 : p.getAttribute) == null ? void 0 : L.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      Ze.resumeAfterScrub = !1, Jc();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Ud(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      const D = !I.videoTransport.loop;
      I.videoTransport.loop = D, Y.loop = D, bi({
        hasAudio: I.videoTransport.hasAudio,
        loop: D,
        muted: Y.muted,
        volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const D = h.mode === "frame" ? He() : null;
        if (!D || D.locked === !0) return;
        Hp(D, String(p.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, Eo(), rt(), lt(), Gr(), le();
        return;
      }
      if (m === "frame-aspect-custom") {
        const D = h.mode === "frame" ? He() : null, Q = p.getAttribute("data-custom-width"), Z = p.getAttribute("data-custom-height");
        if (!D || !Vv(D, Q, Z)) return;
        I.frameRail.aspectOpen = !1, Eo(), rt(), lt(), Gr(), le();
        return;
      }
      if (m === "frame-rotate-90") {
        const D = h.mode === "frame" ? He() : null;
        if (!D || D.locked === !0) return;
        Gp(D), I.frameRail.aspectOpen = !1, Eo(), rt(), lt(), Gr(), le();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, We(), le();
        return;
      }
      if (m === "aspect-set") {
        const D = Mt();
        if (!D) return;
        const Q = String(p.getAttribute("data-aspect") || "1:1");
        Hp(D, Q), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Eo(), rt(), lt(), We(), le();
        return;
      }
      if (m === "rotate-90") {
        const D = Mt();
        if (!D) return;
        Gp(D), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Eo(), rt(), lt(), We(), le();
        return;
      }
      if (m === "bring-front") {
        zv();
        return;
      }
      if (m === "send-back") {
        jv();
        return;
      }
      if (m === "duplicate") {
        Rv();
        return;
      }
      if (m === "replace-image") {
        Cv();
        return;
      }
      if (m === "toggle-lock") {
        Ob();
        return;
      }
      if (m === "back-initial") {
        Vb();
        return;
      }
      if (m === "toggle-visible") {
        $b();
        return;
      }
      if (m === "delete") {
        jp();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      bc(0, 0, 100, 180, 680), h.viewPosition = [0, 0, 0], h.viewMoved = !1;
      return;
    }
    if (m === "frame-view") {
      if (!va()) return;
      n1();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, XI(e == null ? void 0 : e.id, h.showGrid), ou(), le();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), m_();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const D = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = D, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = D ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), ph(), le();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), k = h.customPaintHistory[w];
    k && (h.customPaintColor = Gn(k), h.paintColor = Gn(k), Fn());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      zt.playing && (Ze.resumeAfterScrub = !0), zt.seek(Zi(Number(s.value || 0), Ms()));
      return;
    }
    const c = i.target.closest("[data-video-volume]");
    if (c) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = q(Number(c.value || 0), 0, 1);
      Y.volume = m, Y.muted = m <= 1e-4, bi({
        hasAudio: I.videoTransport.hasAudio,
        muted: Y.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Mi(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Fn(), Jv();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: q(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = Gn(m), h.paintColor = Gn(m), Fn();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      Ze.resumeAfterScrub && zt.play(), Ze.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && $s();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && $s();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && $s();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && $s();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || Ae.target !== s && (Ae.target = s, Ae.timer && clearTimeout(Ae.timer), Ae.timer = window.setTimeout(() => {
      Ae.target === s && a_(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Ae.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || Hi();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Hi();
  });
  const p_ = (i, s) => {
    var w;
    if (!me) return;
    const c = me.getBoundingClientRect(), f = q((i - c.left) / Math.max(1, c.width), 0, 1), p = 1 - q((s - c.top) / Math.max(1, c.height), 0, 1), m = Xu(h.customPaintColor), g = { ...Yu(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = Gn(g), h.paintColor = Gn(g), Fn();
  }, h_ = (i) => {
    var m;
    if (!Se) return;
    const s = Se.getBoundingClientRect(), c = q((i - s.left) / Math.max(1, s.width), 0, 1), f = Xu(h.customPaintColor), p = { ...Yu(c, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = Gn(p), h.paintColor = Gn(p), Fn();
  }, ch = (i, s) => {
    const c = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === c && s(m);
    }, p = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  me && (me.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ch(i, (s) => p_(s.clientX, s.clientY));
  }), Se && (Se.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ch(i, (s) => h_(s.clientX));
  }), T.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (p = I.confirmDialog) == null ? void 0 : p.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const uh = () => {
    const i = !!h.fullscreen;
    Va(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Me.fullscreen_close : Me.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, zs = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), ou(), uh(), Li(), le());
  }, fh = () => document.fullscreenElement === _e, m_ = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        zs(!h.fullscreen);
        return;
      }
      fh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      zs(!h.fullscreen);
    }
  }, dh = () => {
    document.fullscreenEnabled && zs(fh());
  };
  document.addEventListener("fullscreenchange", dh), uh();
  const ph = () => {
    const i = !!h.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? Me.fullscreen_close : Me.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  ph();
  const au = e.onConnectionsChange;
  let su = null, hh = () => {
  };
  !r && t === "stickers" && (hh = Qy(e, (i = "sync") => {
    i === "executed" && (DI(ft, el), vi(), S && wv()), Qd(i);
  }, { editor: !0 }), su = function(...s) {
    typeof au == "function" && au.apply(this, s), vi(), ai(this, "connections");
  }, e.onConnectionsChange = su), r || dg.set(String(e.id ?? "0"), () => dp());
  let To = null;
  const Do = async () => To || (To = (async () => {
    var i, s, c, f, p, m, g, w;
    return dg.delete(String(e.id ?? "0")), Uv(), r || Pn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", dh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Wp && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = vr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), Hi(), gv(), Y instanceof HTMLVideoElement && Y.pause(), yn.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), tn.dispose(), zn(!1), window.removeEventListener("keydown", mh, !0), window.removeEventListener("keydown", gh, !0), window.removeEventListener("keydown", bh, !0), window.removeEventListener("keyup", vh, !0), window.removeEventListener("keydown", js, !0), window.removeEventListener("keyup", js, !0), window.removeEventListener("blur", _h), window.removeEventListener("keydown", wh, !0), window.removeEventListener("dragenter", ih, !0), window.removeEventListener("dragover", oh, !0), window.removeEventListener("dragleave", ah, !0), window.removeEventListener("drop", sh, !0), !r && t === "stickers" && (e.onConnectionsChange === su && (e.onConnectionsChange = au), hh()), K.unmount(), V.remove(), Gv(), To = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), To = null, !1)), To), mh = (i) => {
    var s, c, f, p, m;
    if (i.key === "Escape") {
      if (Ca()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (c = i.stopImmediatePropagation) == null || c.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), zs(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Do();
    }
  }, gh = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Le.selection) {
      _v(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if ($v()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Mt() && (jp(), i.preventDefault(), i.stopPropagation());
  }, yh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !vI.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, bh = (i) => {
    yh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Jc());
  }, vh = (i) => {
    yh(i) && (i.preventDefault(), i.stopPropagation());
  }, js = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === c || (h.marqueeModifier = s, h.altModifier = c, Br(), ht(h.pointerPos));
  }, _h = () => {
    h.marqueeModifier = !1, h.altModifier = !1, Br(), ht(h.pointerPos);
  }, wh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Dp();
    i.shiftKey && !g || !i.shiftKey && !m || (Xc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", mh, !0), window.addEventListener("keydown", gh, !0), window.addEventListener("keydown", bh, !0), window.addEventListener("keyup", vh, !0), window.addEventListener("keydown", js, !0), window.addEventListener("keyup", js, !0), window.addEventListener("blur", _h), window.addEventListener("keydown", wh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Do();
  });
  function Mr(i, s, { rollbackState: c = !1 } = {}) {
    let f = "";
    try {
      c && (f = JSON.stringify(v)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(v).forEach((g) => delete v[g]), Object.assign(v, m), r || Pn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      I.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Mr("cutout-focus", Zb), !r && t === "stickers" && Mr("external-sticker-sync", () => Qd("open"), { rollbackState: !0 }), Iv().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Mr("history", rt), Mr("undo-redo", iu), Mr("paint-ui", Fn), Mr("side-panel", ze), Mr("look-at-frame", Tc), Mr("video-source", vi), Mr("canvas-size", Ep), Mr("cursor", () => ht(h.pointerPos)), le(), Pe.rafId = requestAnimationFrame(Fp);
}
vr.registerExtension(HN({
  app: vr,
  openEditor: tE,
  attachStickers: nP,
  attachCutout: rP,
  attachPreview: tP,
  restoreOutput: H2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: MI
}));
