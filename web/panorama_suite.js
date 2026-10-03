import * as ol from "../../scripts/app.js";
import { app as vr } from "../../scripts/app.js";
import { api as Wt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Df(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const kt = {}, Xo = [], Lr = () => {
}, pg = () => !1, Ql = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ec = (e) => e.startsWith("onUpdate:"), Nn = Object.assign, Lf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, h_ = Object.prototype.hasOwnProperty, gt = (e, t) => h_.call(e, t), Ze = Array.isArray, qo = (e) => hs(e) === "[object Map]", hg = (e) => hs(e) === "[object Set]", vh = (e) => hs(e) === "[object Date]", nt = (e) => typeof e == "function", Jt = (e) => typeof e == "string", $r = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", mg = (e) => (xt(e) || nt(e)) && nt(e.then) && nt(e.catch), gg = Object.prototype.toString, hs = (e) => gg.call(e), m_ = (e) => hs(e).slice(8, -1), yg = (e) => hs(e) === "[object Object]", Rf = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ya = /* @__PURE__ */ Df(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, g_ = /-\w/g, En = tc(
  (e) => e.replace(g_, (t) => t.slice(1).toUpperCase())
), y_ = /\B([A-Z])/g, go = tc(
  (e) => e.replace(y_, "-$1").toLowerCase()
), nc = tc((e) => e.charAt(0).toUpperCase() + e.slice(1)), su = tc(
  (e) => e ? `on${nc(e)}` : ""
), Tr = (e, t) => !Object.is(e, t), al = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Vf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _h;
const rc = () => _h || (_h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Jt(r) ? w_(r) : _t(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Jt(e) || xt(e))
    return e;
}
const b_ = /;(?![^(]*\))/g, v_ = /:([^]+)/, __ = /\/\*[^]*?\*\//g;
function w_(e) {
  const t = {};
  return e.replace(__, "").split(b_).forEach((n) => {
    if (n) {
      const r = n.split(v_);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (Jt(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = ut(e[n]);
      r && (t += r + " ");
    }
  else if (xt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const x_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", S_ = /* @__PURE__ */ Df(x_);
function vg(e) {
  return !!e || e === "";
}
function k_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = $f(e[r], t[r]);
  return n;
}
function $f(e, t) {
  if (e === t) return !0;
  let n = vh(e), r = vh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = $r(e), r = $r(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? k_(e, t) : !1;
  if (n = xt(e), r = xt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !$f(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const _g = (e) => !!(e && e.__v_isRef === !0), ot = (e) => Jt(e) ? e : e == null ? "" : Ze(e) || xt(e) && (e.toString === gg || !nt(e.toString)) ? _g(e) ? ot(e.value) : JSON.stringify(e, wg, 2) : String(e), wg = (e, t) => _g(t) ? wg(e, t.value) : qo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[lu(r, a) + " =>"] = o, n),
    {}
  )
} : hg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => lu(n))
} : $r(t) ? lu(t) : xt(t) && !Ze(t) && !yg(t) ? String(t) : t, lu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $r(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vn;
class M_ {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Vn, !t && Vn && (this.index = (Vn.scopes || (Vn.scopes = [])).push(
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
      const n = Vn;
      try {
        return Vn = this, t();
      } finally {
        Vn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Vn, Vn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Vn = this.prevScope, this.prevScope = void 0);
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
function N_() {
  return Vn;
}
let Pt;
const cu = /* @__PURE__ */ new WeakSet();
class xg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Vn && Vn.active && Vn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cu.has(this) && (cu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || kg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wh(this), Mg(this);
    const t = Pt, n = _r;
    Pt = this, _r = !0;
    try {
      return this.fn();
    } finally {
      Ng(this), Pt = t, _r = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hf(t);
      this.deps = this.depsTail = void 0, wh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xu(this) && this.run();
  }
  get dirty() {
    return Xu(this);
  }
}
let Sg = 0, Xa, qa;
function kg(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qa, qa = e;
    return;
  }
  e.next = Xa, Xa = e;
}
function zf() {
  Sg++;
}
function jf() {
  if (--Sg > 0)
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
function Mg(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ng(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Hf(r), P_(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Xu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pg(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Pt, r = _r;
  Pt = e, _r = !0;
  try {
    Mg(e);
    const o = e.fn(e._value);
    (t.version === 0 || Tr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Pt = n, _r = r, Ng(e), e.flags &= -3;
  }
}
function Hf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Hf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function P_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _r = !0;
const Ag = [];
function ui() {
  Ag.push(_r), _r = !1;
}
function fi() {
  const e = Ag.pop();
  _r = e === void 0 ? !0 : e;
}
function wh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Pt;
    Pt = void 0;
    try {
      t();
    } finally {
      Pt = n;
    }
  }
}
let ns = 0;
class A_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Gf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Pt || !_r || Pt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Pt)
      n = this.activeLink = new A_(Pt, this), Pt.deps ? (n.prevDep = Pt.depsTail, Pt.depsTail.nextDep = n, Pt.depsTail = n) : Pt.deps = Pt.depsTail = n, Cg(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Pt.depsTail, n.nextDep = void 0, Pt.depsTail.nextDep = n, Pt.depsTail = n, Pt.deps === n && (Pt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ns++, this.notify(t);
  }
  notify(t) {
    zf();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      jf();
    }
  }
}
function Cg(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Cg(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const qu = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ Symbol(
  ""
), Ju = /* @__PURE__ */ Symbol(
  ""
), rs = /* @__PURE__ */ Symbol(
  ""
);
function Sn(e, t, n) {
  if (_r && Pt) {
    let r = qu.get(e);
    r || qu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Gf()), o.map = r, o.key = n), o.track();
  }
}
function ai(e, t, n, r, o, a) {
  const l = qu.get(e);
  if (!l) {
    ns++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (zf(), t === "clear")
    l.forEach(u);
  else {
    const d = Ze(e), b = d && Rf(n);
    if (d && n === "length") {
      const y = Number(r);
      l.forEach((w, S) => {
        (S === "length" || S === rs || !$r(S) && S >= y) && u(w);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(rs)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(oo)), qo(e) && u(l.get(Ju)));
          break;
        case "delete":
          d || (u(l.get(oo)), qo(e) && u(l.get(Ju)));
          break;
        case "set":
          qo(e) && u(l.get(oo));
          break;
      }
  }
  jf();
}
function Ro(e) {
  const t = /* @__PURE__ */ mt(e);
  return t === e ? t : (Sn(t, "iterate", rs), /* @__PURE__ */ ar(e) ? t : t.map(wr));
}
function ic(e) {
  return Sn(e = /* @__PURE__ */ mt(e), "iterate", rs), e;
}
function Or(e, t) {
  return /* @__PURE__ */ di(e) ? oa(/* @__PURE__ */ ao(e) ? wr(t) : t) : wr(t);
}
const C_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return uu(this, Symbol.iterator, (e) => Or(this, e));
  },
  concat(...e) {
    return Ro(this).concat(
      ...e.map((t) => Ze(t) ? Ro(t) : t)
    );
  },
  entries() {
    return uu(this, "entries", (e) => (e[1] = Or(this, e[1]), e));
  },
  every(e, t) {
    return Jr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Jr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Or(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Jr(
      this,
      "find",
      e,
      t,
      (n) => Or(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Jr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Jr(
      this,
      "findLast",
      e,
      t,
      (n) => Or(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Jr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Jr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fu(this, "includes", e);
  },
  indexOf(...e) {
    return fu(this, "indexOf", e);
  },
  join(e) {
    return Ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return fu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Jr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fa(this, "pop");
  },
  push(...e) {
    return Fa(this, "push", e);
  },
  reduce(e, ...t) {
    return xh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xh(this, "reduceRight", e, t);
  },
  shift() {
    return Fa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Jr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fa(this, "splice", e);
  },
  toReversed() {
    return Ro(this).toReversed();
  },
  toSorted(e) {
    return Ro(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ro(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fa(this, "unshift", e);
  },
  values() {
    return uu(this, "values", (e) => Or(this, e));
  }
};
function uu(e, t, n) {
  const r = ic(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ ar(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const I_ = Array.prototype;
function Jr(e, t, n, r, o, a) {
  const l = ic(e), u = l !== e && !/* @__PURE__ */ ar(e), d = l[t];
  if (d !== I_[t]) {
    const w = d.apply(e, a);
    return u ? wr(w) : w;
  }
  let b = n;
  l !== e && (u ? b = function(w, S) {
    return n.call(this, Or(e, w), S, e);
  } : n.length > 2 && (b = function(w, S) {
    return n.call(this, w, S, e);
  }));
  const y = d.call(l, b, r);
  return u && o ? o(y) : y;
}
function xh(e, t, n, r) {
  const o = ic(e), a = o !== e && !/* @__PURE__ */ ar(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, y, w) {
    return u && (u = !1, b = Or(e, b)), n.call(this, b, Or(e, y), w, e);
  }) : n.length > 3 && (l = function(b, y, w) {
    return n.call(this, b, y, w, e);
  }));
  const d = o[t](l, ...r);
  return u ? Or(e, d) : d;
}
function fu(e, t, n) {
  const r = /* @__PURE__ */ mt(e);
  Sn(r, "iterate", rs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Wf(n[0]) ? (n[0] = /* @__PURE__ */ mt(n[0]), r[t](...n)) : o;
}
function Fa(e, t, n = []) {
  ui(), zf();
  const r = (/* @__PURE__ */ mt(e))[t].apply(e, n);
  return jf(), fi(), r;
}
const E_ = /* @__PURE__ */ Df("__proto__,__v_isRef,__isVue"), Ig = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($r)
);
function O_(e) {
  $r(e) || (e = String(e));
  const t = /* @__PURE__ */ mt(this);
  return Sn(t, "has", e), t.hasOwnProperty(e);
}
class Eg {
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
      return r === (o ? a ? H_ : Dg : a ? Tg : Fg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Ze(t);
    if (!o) {
      let d;
      if (l && (d = C_[n]))
        return d;
      if (n === "hasOwnProperty")
        return O_;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Mn(t) ? t : r
    );
    if (($r(n) ? Ig.has(n) : E_(n)) || (o || Sn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ Mn(u)) {
      const d = l && Rf(n) ? u : u.value;
      return o && xt(d) ? /* @__PURE__ */ Qu(d) : d;
    }
    return xt(u) ? o ? /* @__PURE__ */ Qu(u) : /* @__PURE__ */ fa(u) : u;
  }
}
class Og extends Eg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Ze(t) && Rf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ di(a);
      if (!/* @__PURE__ */ ar(r) && !/* @__PURE__ */ di(r) && (a = /* @__PURE__ */ mt(a), r = /* @__PURE__ */ mt(r)), !l && /* @__PURE__ */ Mn(a) && !/* @__PURE__ */ Mn(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : gt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Mn(t) ? t : o
    );
    return t === /* @__PURE__ */ mt(o) && (u ? Tr(r, a) && ai(t, "set", n, r) : ai(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = gt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && ai(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!$r(n) || !Ig.has(n)) && Sn(t, "has", n), r;
  }
  ownKeys(t) {
    return Sn(
      t,
      "iterate",
      Ze(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class F_ extends Eg {
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
const T_ = /* @__PURE__ */ new Og(), D_ = /* @__PURE__ */ new F_(), L_ = /* @__PURE__ */ new Og(!0);
const Zu = (e) => e, js = (e) => Reflect.getPrototypeOf(e);
function R_(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ mt(o), l = qo(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), y = n ? Zu : t ? oa : wr;
    return !t && Sn(
      a,
      "iterate",
      d ? Ju : oo
    ), Nn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: w, done: S } = b.next();
          return S ? { value: w, done: S } : {
            value: u ? [y(w[0]), y(w[1])] : y(w),
            done: S
          };
        }
      }
    );
  };
}
function Hs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function V_(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ mt(a), u = /* @__PURE__ */ mt(o);
      e || (Tr(o, u) && Sn(l, "get", o), Sn(l, "get", u));
      const { has: d } = js(l), b = t ? Zu : e ? oa : wr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Sn(/* @__PURE__ */ mt(o), "iterate", oo), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ mt(a), u = /* @__PURE__ */ mt(o);
      return e || (Tr(o, u) && Sn(l, "has", o), Sn(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ mt(u), b = t ? Zu : e ? oa : wr;
      return !e && Sn(d, "iterate", oo), u.forEach((y, w) => o.call(a, b(y), b(w), l));
    }
  };
  return Nn(
    n,
    e ? {
      add: Hs("add"),
      set: Hs("set"),
      delete: Hs("delete"),
      clear: Hs("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ mt(this), l = js(a), u = /* @__PURE__ */ mt(o), d = !t && !/* @__PURE__ */ ar(o) && !/* @__PURE__ */ di(o) ? u : o;
        return l.has.call(a, d) || Tr(o, d) && l.has.call(a, o) || Tr(u, d) && l.has.call(a, u) || (a.add(d), ai(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ ar(a) && !/* @__PURE__ */ di(a) && (a = /* @__PURE__ */ mt(a));
        const l = /* @__PURE__ */ mt(this), { has: u, get: d } = js(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ mt(o), b = u.call(l, o));
        const y = d.call(l, o);
        return l.set(o, a), b ? Tr(a, y) && ai(l, "set", o, a) : ai(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ mt(this), { has: l, get: u } = js(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ mt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && ai(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ mt(this), a = o.size !== 0, l = o.clear();
        return a && ai(
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
    n[o] = R_(o, e, t);
  }), n;
}
function Kf(e, t) {
  const n = V_(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    gt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const $_ = {
  get: /* @__PURE__ */ Kf(!1, !1)
}, z_ = {
  get: /* @__PURE__ */ Kf(!1, !0)
}, j_ = {
  get: /* @__PURE__ */ Kf(!0, !1)
};
const Fg = /* @__PURE__ */ new WeakMap(), Tg = /* @__PURE__ */ new WeakMap(), Dg = /* @__PURE__ */ new WeakMap(), H_ = /* @__PURE__ */ new WeakMap();
function G_(e) {
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
function K_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : G_(m_(e));
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return /* @__PURE__ */ di(e) ? e : Bf(
    e,
    !1,
    T_,
    $_,
    Fg
  );
}
// @__NO_SIDE_EFFECTS__
function B_(e) {
  return Bf(
    e,
    !1,
    L_,
    z_,
    Tg
  );
}
// @__NO_SIDE_EFFECTS__
function Qu(e) {
  return Bf(
    e,
    !0,
    D_,
    j_,
    Dg
  );
}
function Bf(e, t, n, r, o) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = K_(e);
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
function ao(e) {
  return /* @__PURE__ */ di(e) ? /* @__PURE__ */ ao(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ mt(t) : e;
}
function W_(e) {
  return !gt(e, "__v_skip") && Object.isExtensible(e) && bg(e, "__v_skip", !0), e;
}
const wr = (e) => xt(e) ? /* @__PURE__ */ fa(e) : e, oa = (e) => xt(e) ? /* @__PURE__ */ Qu(e) : e;
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return U_(e, !1);
}
function U_(e, t) {
  return /* @__PURE__ */ Mn(e) ? e : new Y_(e, t);
}
class Y_ {
  constructor(t, n) {
    this.dep = new Gf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ mt(t), this._value = n ? t : wr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ar(t) || /* @__PURE__ */ di(t);
    t = r ? t : /* @__PURE__ */ mt(t), Tr(t, n) && (this._rawValue = t, this._value = r ? t : wr(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ Mn(e) ? e.value : e;
}
const X_ = {
  get: (e, t, n) => t === "__v_raw" ? e : tt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ Mn(o) && !/* @__PURE__ */ Mn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lg(e) {
  return /* @__PURE__ */ ao(e) ? e : new Proxy(e, X_);
}
class q_ {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Gf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pt !== this)
      return kg(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Pg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function J_(e, t, n = !1) {
  let r, o;
  return nt(e) ? r = e : (r = e.get, o = e.set), new q_(r, o, n);
}
const Gs = {}, kl = /* @__PURE__ */ new WeakMap();
let Zi;
function Z_(e, t = !1, n = Zi) {
  if (n) {
    let r = kl.get(n);
    r || kl.set(n, r = []), r.push(e);
  }
}
function Q_(e, t, n = kt) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ ar(V) || o === !1 || o === 0 ? si(V, 1) : si(V);
  let y, w, S, P, x = !1, v = !1;
  if (/* @__PURE__ */ Mn(e) ? (w = () => e.value, x = /* @__PURE__ */ ar(e)) : /* @__PURE__ */ ao(e) ? (w = () => b(e), x = !0) : Ze(e) ? (v = !0, x = e.some((V) => /* @__PURE__ */ ao(V) || /* @__PURE__ */ ar(V)), w = () => e.map((V) => {
    if (/* @__PURE__ */ Mn(V))
      return V.value;
    if (/* @__PURE__ */ ao(V))
      return b(V);
    if (nt(V))
      return d ? d(V, 2) : V();
  })) : nt(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (S) {
      ui();
      try {
        S();
      } finally {
        fi();
      }
    }
    const V = Zi;
    Zi = y;
    try {
      return d ? d(e, 3, [P]) : e(P);
    } finally {
      Zi = V;
    }
  } : w = Lr, t && o) {
    const V = w, O = o === !0 ? 1 / 0 : o;
    w = () => si(V(), O);
  }
  const F = N_(), $ = () => {
    y.stop(), F && F.active && Lf(F.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...O) => {
      V(...O), $();
    };
  }
  let W = v ? new Array(e.length).fill(Gs) : Gs;
  const I = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const O = y.run();
        if (o || x || (v ? O.some((j, K) => Tr(j, W[K])) : Tr(O, W))) {
          S && S();
          const j = Zi;
          Zi = y;
          try {
            const K = [
              O,
              // pass undefined as the old value when it's changed for the first time
              W === Gs ? void 0 : v && W[0] === Gs ? [] : W,
              P
            ];
            W = O, d ? d(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            );
          } finally {
            Zi = j;
          }
        }
      } else
        y.run();
  };
  return u && u(I), y = new xg(w), y.scheduler = l ? () => l(I, !1) : I, P = (V) => Z_(V, !1, y), S = y.onStop = () => {
    const V = kl.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const O of V) O();
      kl.delete(y);
    }
  }, t ? r ? I(!0) : W = y.run() : l ? l(I.bind(null, !0), !0) : y.run(), $.pause = y.pause.bind(y), $.resume = y.resume.bind(y), $.stop = $, $;
}
function si(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Mn(e))
    si(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      si(e[r], t, n);
  else if (hg(e) || qo(e))
    e.forEach((r) => {
      si(r, t, n);
    });
  else if (yg(e)) {
    for (const r in e)
      si(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && si(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ms(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    oc(o, t, n);
  }
}
function zr(e, t, n, r) {
  if (nt(e)) {
    const o = ms(e, t, n, r);
    return o && mg(o) && o.catch((a) => {
      oc(a, t, n);
    }), o;
  }
  if (Ze(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(zr(e[a], t, n, r));
    return o;
  }
}
function oc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || kt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let w = 0; w < y.length; w++)
          if (y[w](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ui(), ms(a, null, 10, [
        e,
        d,
        b
      ]), fi();
      return;
    }
  }
  ew(e, n, o, r, l);
}
function ew(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const In = [];
let Er = -1;
const Jo = [];
let Ai = null, Ho = 0;
const Rg = /* @__PURE__ */ Promise.resolve();
let Ml = null;
function ac(e) {
  const t = Ml || Rg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tw(e) {
  let t = Er + 1, n = In.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = In[r], a = is(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Uf(e) {
  if (!(e.flags & 1)) {
    const t = is(e), n = In[In.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= is(n) ? In.push(e) : In.splice(tw(t), 0, e), e.flags |= 1, Vg();
  }
}
function Vg() {
  Ml || (Ml = Rg.then(zg));
}
function nw(e) {
  Ze(e) ? Jo.push(...e) : Ai && e.id === -1 ? Ai.splice(Ho + 1, 0, e) : e.flags & 1 || (Jo.push(e), e.flags |= 1), Vg();
}
function Sh(e, t, n = Er + 1) {
  for (; n < In.length; n++) {
    const r = In[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      In.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function $g(e) {
  if (Jo.length) {
    const t = [...new Set(Jo)].sort(
      (n, r) => is(n) - is(r)
    );
    if (Jo.length = 0, Ai) {
      Ai.push(...t);
      return;
    }
    for (Ai = t, Ho = 0; Ho < Ai.length; Ho++) {
      const n = Ai[Ho];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ai = null, Ho = 0;
  }
}
const is = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zg(e) {
  try {
    for (Er = 0; Er < In.length; Er++) {
      const t = In[Er];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ms(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Er < In.length; Er++) {
      const t = In[Er];
      t && (t.flags &= -2);
    }
    Er = -1, In.length = 0, $g(), Ml = null, (In.length || Jo.length) && zg();
  }
}
let Un = null, jg = null;
function Nl(e) {
  const t = Un;
  return Un = e, jg = e && e.type.__scopeId || null, t;
}
function Hg(e, t = Un, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Dh(-1);
    const a = Nl(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Nl(a), r._d && Dh(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Rr(e, t) {
  if (Un === null)
    return e;
  const n = fc(Un), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = kt] = t[o];
    a && (nt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && si(l), r.push({
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
    d && (ui(), zr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), fi());
  }
}
function rw(e, t) {
  if (kn) {
    let n = kn.provides;
    const r = kn.parent && kn.parent.provides;
    r === n && (n = kn.provides = Object.create(r)), n[e] = t;
  }
}
function sl(e, t, n = !1) {
  const r = tx();
  if (r || Zo) {
    let o = Zo ? Zo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && nt(t) ? t.call(r && r.proxy) : t;
  }
}
const iw = /* @__PURE__ */ Symbol.for("v-scx"), ow = () => sl(iw);
function so(e, t, n) {
  return Gg(e, t, n);
}
function Gg(e, t, n = kt) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = Nn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (as) {
    if (a === "sync") {
      const P = ow();
      b = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!d) {
      const P = () => {
      };
      return P.stop = Lr, P.resume = Lr, P.pause = Lr, P;
    }
  }
  const y = kn;
  u.call = (P, x, v) => zr(P, y, x, v);
  let w = !1;
  a === "post" ? u.scheduler = (P) => {
    Rn(P, y && y.suspense);
  } : a !== "sync" && (w = !0, u.scheduler = (P, x) => {
    x ? P() : Uf(P);
  }), u.augmentJob = (P) => {
    t && (P.flags |= 4), w && (P.flags |= 2, y && (P.id = y.uid, P.i = y));
  };
  const S = Q_(e, t, u);
  return as && (b ? b.push(S) : d && S()), S;
}
function aw(e, t, n) {
  const r = this.proxy, o = Jt(e) ? e.includes(".") ? Kg(r, e) : () => r[e] : e.bind(r, r);
  let a;
  nt(t) ? a = t : (a = t.handler, n = t);
  const l = ys(this), u = Gg(o, a.bind(r), n);
  return l(), u;
}
function Kg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const sw = /* @__PURE__ */ Symbol("_vte"), lw = (e) => e.__isTeleport, cw = /* @__PURE__ */ Symbol("_leaveCb");
function Yf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function kh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Pl = /* @__PURE__ */ new WeakMap();
function Ja(e, t, n, r, o = !1) {
  if (Ze(e)) {
    e.forEach(
      (v, F) => Ja(
        v,
        t && (Ze(t) ? t[F] : t),
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
  const a = r.shapeFlag & 4 ? fc(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === kt ? u.refs = {} : u.refs, w = u.setupState, S = /* @__PURE__ */ mt(w), P = w === kt ? pg : (v) => kh(y, v) ? !1 : gt(S, v), x = (v, F) => !(F && kh(y, F));
  if (b != null && b !== d) {
    if (Mh(t), Jt(b))
      y[b] = null, P(b) && (w[b] = null);
    else if (/* @__PURE__ */ Mn(b)) {
      const v = t;
      x(b, v.k) && (b.value = null), v.k && (y[v.k] = null);
    }
  }
  if (nt(d))
    ms(d, u, 12, [l, y]);
  else {
    const v = Jt(d), F = /* @__PURE__ */ Mn(d);
    if (v || F) {
      const $ = () => {
        if (e.f) {
          const W = v ? P(d) ? w[d] : y[d] : x() || !e.k ? d.value : y[e.k];
          if (o)
            Ze(W) && Lf(W, a);
          else if (Ze(W))
            W.includes(a) || W.push(a);
          else if (v)
            y[d] = [a], P(d) && (w[d] = y[d]);
          else {
            const I = [a];
            x(d, e.k) && (d.value = I), e.k && (y[e.k] = I);
          }
        } else v ? (y[d] = l, P(d) && (w[d] = l)) : F && (x(d, e.k) && (d.value = l), e.k && (y[e.k] = l));
      };
      if (l) {
        const W = () => {
          $(), Pl.delete(e);
        };
        W.id = -1, Pl.set(e, W), Rn(W, n);
      } else
        Mh(e), $();
    }
  }
}
function Mh(e) {
  const t = Pl.get(e);
  t && (t.flags |= 8, Pl.delete(e));
}
rc().requestIdleCallback;
rc().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, Wg = (e) => e.type.__isKeepAlive;
function uw(e, t) {
  Ug(e, "a", t);
}
function fw(e, t) {
  Ug(e, "da", t);
}
function Ug(e, t, n = kn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (sc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Wg(o.parent.vnode) && dw(r, t, n, o), o = o.parent;
  }
}
function dw(e, t, n, r) {
  const o = sc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Yg(() => {
    Lf(r[t], o);
  }, n);
}
function sc(e, t, n = kn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      ui();
      const u = ys(n), d = zr(t, n, e, l);
      return u(), fi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const hi = (e) => (t, n = kn) => {
  (!as || e === "sp") && sc(e, (...r) => t(...r), n);
}, pw = hi("bm"), lc = hi("m"), hw = hi(
  "bu"
), mw = hi("u"), gs = hi(
  "bum"
), Yg = hi("um"), gw = hi(
  "sp"
), yw = hi("rtg"), bw = hi("rtc");
function vw(e, t = kn) {
  sc("ec", e, t);
}
const _w = "components", Xg = /* @__PURE__ */ Symbol.for("v-ndc");
function ww(e) {
  return Jt(e) ? xw(_w, e, !1) || e : e || Xg;
}
function xw(e, t, n = !0, r = !1) {
  const o = Un || kn;
  if (o) {
    const a = o.type;
    {
      const u = ax(
        a,
        !1
      );
      if (u && (u === t || u === En(t) || u === nc(En(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Nh(o[e] || a[e], t) || // global registration
      Nh(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function Nh(e, t) {
  return e && (e[t] || e[En(t)] || e[nc(En(t))]);
}
function wt(e, t, n, r) {
  let o;
  const a = n, l = Ze(e);
  if (l || Jt(e)) {
    const u = l && /* @__PURE__ */ ao(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ ar(e), b = /* @__PURE__ */ di(e), e = ic(e)), o = new Array(e.length);
    for (let y = 0, w = e.length; y < w; y++)
      o[y] = t(
        d ? b ? oa(wr(e[y])) : wr(e[y]) : e[y],
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
const ef = (e) => e ? g0(e) ? fc(e) : ef(e.parent) : null, Qa = (
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
    $parent: (e) => ef(e.parent),
    $root: (e) => ef(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Uf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ac.bind(e.proxy)),
    $watch: (e) => aw.bind(e)
  })
), du = (e, t) => e !== kt && !e.__isScriptSetup && gt(e, t), Sw = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: l, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const S = l[t];
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
        if (du(r, t))
          return l[t] = 1, r[t];
        if (o !== kt && gt(o, t))
          return l[t] = 2, o[t];
        if (gt(a, t))
          return l[t] = 3, a[t];
        if (n !== kt && gt(n, t))
          return l[t] = 4, n[t];
        tf && (l[t] = 0);
      }
    }
    const b = Qa[t];
    let y, w;
    if (b)
      return t === "$attrs" && Sn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== kt && gt(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, gt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return du(o, t) ? (o[t] = n, !0) : r !== kt && gt(r, t) ? (r[t] = n, !0) : gt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== kt && u[0] !== "$" && gt(e, u) || du(t, u) || gt(a, u) || gt(r, u) || gt(Qa, u) || gt(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : gt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ph(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let tf = !0;
function kw(e) {
  const t = Jg(e), n = e.proxy, r = e.ctx;
  tf = !1, t.beforeCreate && Ah(t.beforeCreate, e, "bc");
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
    beforeMount: w,
    mounted: S,
    beforeUpdate: P,
    updated: x,
    activated: v,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: W,
    destroyed: I,
    unmounted: V,
    render: O,
    renderTracked: j,
    renderTriggered: K,
    errorCaptured: Q,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: C,
    // assets
    components: ce,
    directives: de,
    filters: pe
  } = t;
  if (b && Mw(b, r, null), l)
    for (const H in l) {
      const A = l[H];
      nt(A) && (r[H] = A.bind(n));
    }
  if (o) {
    const H = o.call(n, n);
    xt(H) && (e.data = /* @__PURE__ */ fa(H));
  }
  if (tf = !0, a)
    for (const H in a) {
      const A = a[H], ee = nt(A) ? A.bind(n, n) : nt(A.get) ? A.get.bind(n, n) : Lr, Y = !nt(A) && nt(A.set) ? A.set.bind(n) : Lr, Ie = pt({
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
      qg(u[H], r, n, H);
  if (d) {
    const H = nt(d) ? d.call(n) : d;
    Reflect.ownKeys(H).forEach((A) => {
      rw(A, H[A]);
    });
  }
  y && Ah(y, e, "c");
  function X(H, A) {
    Ze(A) ? A.forEach((ee) => H(ee.bind(n))) : A && H(A.bind(n));
  }
  if (X(pw, w), X(lc, S), X(hw, P), X(mw, x), X(uw, v), X(fw, F), X(vw, Q), X(bw, j), X(yw, K), X(gs, W), X(Yg, V), X(gw, _e), Ze(T))
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
  O && e.render === Lr && (e.render = O), C != null && (e.inheritAttrs = C), ce && (e.components = ce), de && (e.directives = de), _e && Bg(e);
}
function Mw(e, t, n = Lr) {
  Ze(e) && (e = nf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    xt(o) ? "default" in o ? a = sl(
      o.from || r,
      o.default,
      !0
    ) : a = sl(o.from || r) : a = sl(o), /* @__PURE__ */ Mn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function Ah(e, t, n) {
  zr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qg(e, t, n, r) {
  let o = r.includes(".") ? Kg(n, r) : () => n[r];
  if (Jt(e)) {
    const a = t[e];
    nt(a) && so(o, a);
  } else if (nt(e))
    so(o, e.bind(n));
  else if (xt(e))
    if (Ze(e))
      e.forEach((a) => qg(a, t, n, r));
    else {
      const a = nt(e.handler) ? e.handler.bind(n) : t[e.handler];
      nt(a) && so(o, a, e);
    }
}
function Jg(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => Al(d, b, l, !0)
  ), Al(d, t, l)), xt(t) && a.set(t, d), d;
}
function Al(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && Al(e, a, n, !0), o && o.forEach(
    (l) => Al(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const u = Nw[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const Nw = {
  data: Ch,
  props: Ih,
  emits: Ih,
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
  watch: Aw,
  // provide / inject
  provide: Ch,
  inject: Pw
};
function Ch(e, t) {
  return t ? e ? function() {
    return Nn(
      nt(e) ? e.call(this, this) : e,
      nt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pw(e, t) {
  return ja(nf(e), nf(t));
}
function nf(e) {
  if (Ze(e)) {
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
function Ih(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Nn(
    /* @__PURE__ */ Object.create(null),
    Ph(e),
    Ph(t ?? {})
  ) : t;
}
function Aw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Nn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Cn(e[r], t[r]);
  return n;
}
function Zg() {
  return {
    app: null,
    config: {
      isNativeTag: pg,
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
let Cw = 0;
function Iw(e, t) {
  return function(r, o = null) {
    nt(r) || (r = Nn({}, r)), o != null && !xt(o) && (o = null);
    const a = Zg(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Cw++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: lx,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...w) {
        return l.has(y) || (y && nt(y.install) ? (l.add(y), y.install(b, ...w)) : nt(y) && (l.add(y), y(b, ...w))), b;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), b;
      },
      component(y, w) {
        return w ? (a.components[y] = w, b) : a.components[y];
      },
      directive(y, w) {
        return w ? (a.directives[y] = w, b) : a.directives[y];
      },
      mount(y, w, S) {
        if (!d) {
          const P = b._ceVNode || Te(r, o);
          return P.appContext = a, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(P, y, S), d = !0, b._container = y, y.__vue_app__ = b, fc(P.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (zr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, w) {
        return a.provides[y] = w, b;
      },
      runWithContext(y) {
        const w = Zo;
        Zo = b;
        try {
          return y();
        } finally {
          Zo = w;
        }
      }
    };
    return b;
  };
}
let Zo = null;
const Ew = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${En(t)}Modifiers`] || e[`${go(t)}Modifiers`];
function Ow(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || kt;
  let o = n;
  const a = t.startsWith("update:"), l = a && Ew(r, t.slice(7));
  l && (l.trim && (o = n.map((y) => Jt(y) ? y.trim() : y)), l.number && (o = n.map(Vf)));
  let u, d = r[u = su(t)] || // also try camelCase event handler (#2249)
  r[u = su(En(t))];
  !d && a && (d = r[u = su(go(t))]), d && zr(
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
    e.emitted[u] = !0, zr(
      b,
      e,
      6,
      o
    );
  }
}
const Fw = /* @__PURE__ */ new WeakMap();
function Qg(e, t, n = !1) {
  const r = n ? Fw : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!nt(e)) {
    const d = (b) => {
      const y = Qg(b, t, !0);
      y && (u = !0, Nn(l, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (xt(e) && r.set(e, null), null) : (Ze(a) ? a.forEach((d) => l[d] = null) : Nn(l, a), xt(e) && r.set(e, l), l);
}
function cc(e, t) {
  return !e || !Ql(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), gt(e, t[0].toLowerCase() + t.slice(1)) || gt(e, go(t)) || gt(e, t));
}
function Eh(e) {
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
    props: w,
    data: S,
    setupState: P,
    ctx: x,
    inheritAttrs: v
  } = e, F = Nl(e);
  let $, W;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, O = V;
      $ = Fr(
        b.call(
          O,
          V,
          y,
          w,
          P,
          S,
          x
        )
      ), W = u;
    } else {
      const V = t;
      $ = Fr(
        V.length > 1 ? V(
          w,
          { attrs: u, slots: l, emit: d }
        ) : V(
          w,
          null
        )
      ), W = t.props ? u : Tw(u);
    }
  } catch (V) {
    es.length = 0, oc(V, e, 1), $ = Te(Oi);
  }
  let I = $;
  if (W && v !== !1) {
    const V = Object.keys(W), { shapeFlag: O } = I;
    V.length && O & 7 && (a && V.some(ec) && (W = Dw(
      W,
      a
    )), I = aa(I, W, !1, !0));
  }
  return n.dirs && (I = aa(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Yf(I, n.transition), $ = I, Nl(F), $;
}
const Tw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ql(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dw = (e, t) => {
  const n = {};
  for (const r in e)
    (!ec(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Lw(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Oh(r, l, b) : !!l;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let w = 0; w < y.length; w++) {
        const S = y[w];
        if (e0(l, r, S) && !cc(b, S))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? Oh(r, l, b) : !0 : !!l;
  return !1;
}
function Oh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (e0(t, e, a) && !cc(n, a))
      return !0;
  }
  return !1;
}
function e0(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && xt(r) && xt(o) ? !$f(r, o) : r !== o;
}
function Rw({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const t0 = {}, n0 = () => Object.create(t0), r0 = (e) => Object.getPrototypeOf(e) === t0;
function Vw(e, t, n, r = !1) {
  const o = {}, a = n0();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), i0(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ B_(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function $w(e, t, n, r) {
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
      for (let w = 0; w < y.length; w++) {
        let S = y[w];
        if (cc(e.emitsOptions, S))
          continue;
        const P = t[S];
        if (d)
          if (gt(a, S))
            P !== a[S] && (a[S] = P, b = !0);
          else {
            const x = En(S);
            o[x] = rf(
              d,
              u,
              x,
              P,
              e,
              !1
            );
          }
        else
          P !== a[S] && (a[S] = P, b = !0);
      }
    }
  } else {
    i0(e, t, o, a) && (b = !0);
    let y;
    for (const w in u)
      (!t || // for camelCase
      !gt(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = go(w)) === w || !gt(t, y))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[w] = rf(
        d,
        u,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== u)
      for (const w in a)
        (!t || !gt(t, w)) && (delete a[w], b = !0);
  }
  b && ai(e.attrs, "set", "");
}
function i0(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let d in t) {
      if (Ya(d))
        continue;
      const b = t[d];
      let y;
      o && gt(o, y = En(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : cc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, l = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ mt(n), b = u || kt;
    for (let y = 0; y < a.length; y++) {
      const w = a[y];
      n[w] = rf(
        o,
        d,
        w,
        b[w],
        e,
        !gt(b, w)
      );
    }
  }
  return l;
}
function rf(e, t, n, r, o, a) {
  const l = e[n];
  if (l != null) {
    const u = gt(l, "default");
    if (u && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && nt(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = ys(o);
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
const zw = /* @__PURE__ */ new WeakMap();
function o0(e, t, n = !1) {
  const r = n ? zw : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!nt(e)) {
    const y = (w) => {
      d = !0;
      const [S, P] = o0(w, t, !0);
      Nn(l, S), P && u.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return xt(e) && r.set(e, Xo), Xo;
  if (Ze(a))
    for (let y = 0; y < a.length; y++) {
      const w = En(a[y]);
      Fh(w) && (l[w] = kt);
    }
  else if (a)
    for (const y in a) {
      const w = En(y);
      if (Fh(w)) {
        const S = a[y], P = l[w] = Ze(S) || nt(S) ? { type: S } : Nn({}, S), x = P.type;
        let v = !1, F = !0;
        if (Ze(x))
          for (let $ = 0; $ < x.length; ++$) {
            const W = x[$], I = nt(W) && W.name;
            if (I === "Boolean") {
              v = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          v = nt(x) && x.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = v, P[
          1
          /* shouldCastTrue */
        ] = F, (v || gt(P, "default")) && u.push(w);
      }
    }
  const b = [l, u];
  return xt(e) && r.set(e, b), b;
}
function Fh(e) {
  return e[0] !== "$" && !Ya(e);
}
const Xf = (e) => e === "_" || e === "_ctx" || e === "$stable", qf = (e) => Ze(e) ? e.map(Fr) : [Fr(e)], jw = (e, t, n) => {
  if (t._n)
    return t;
  const r = Hg((...o) => qf(t(...o)), n);
  return r._c = !1, r;
}, a0 = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Xf(o)) continue;
    const a = e[o];
    if (nt(a))
      t[o] = jw(o, a, r);
    else if (a != null) {
      const l = qf(a);
      t[o] = () => l;
    }
  }
}, s0 = (e, t) => {
  const n = qf(t);
  e.slots.default = () => n;
}, l0 = (e, t, n) => {
  for (const r in t)
    (n || !Xf(r)) && (e[r] = t[r]);
}, Hw = (e, t, n) => {
  const r = e.slots = n0();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (l0(r, t, n), n && bg(r, "_", o, !0)) : a0(t, r);
  } else t && s0(e, t);
}, Gw = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = kt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : l0(o, t, n) : (a = !t.$stable, a0(t, o)), l = t;
  } else t && (s0(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !Xf(u) && l[u] == null && delete o[u];
}, Rn = Yw;
function Kw(e) {
  return Bw(e);
}
function Bw(e, t) {
  const n = rc();
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
    parentNode: w,
    nextSibling: S,
    setScopeId: P = Lr,
    insertStaticContent: x
  } = e, v = (R, G, ne, se = null, me = null, ve = null, Se = void 0, Ne = null, we = !!G.dynamicChildren) => {
    if (R === G)
      return;
    R && !Ta(R, G) && (se = qn(R), Oe(R, me, ve, !0), R = null), G.patchFlag === -2 && (we = !1, G.dynamicChildren = null);
    const { type: fe, ref: je, shapeFlag: Ce } = G;
    switch (fe) {
      case uc:
        F(R, G, ne, se);
        break;
      case Oi:
        $(R, G, ne, se);
        break;
      case hu:
        R == null && W(G, ne, se, Se);
        break;
      case Ye:
        ce(
          R,
          G,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we
        );
        break;
      default:
        Ce & 1 ? O(
          R,
          G,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we
        ) : Ce & 6 ? de(
          R,
          G,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we
        ) : (Ce & 64 || Ce & 128) && fe.process(
          R,
          G,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we,
          hn
        );
    }
    je != null && me ? Ja(je, R && R.ref, ve, G || R, !G) : je == null && R && R.ref != null && Ja(R.ref, null, ve, R, !0);
  }, F = (R, G, ne, se) => {
    if (R == null)
      r(
        G.el = u(G.children),
        ne,
        se
      );
    else {
      const me = G.el = R.el;
      G.children !== R.children && b(me, G.children);
    }
  }, $ = (R, G, ne, se) => {
    R == null ? r(
      G.el = d(G.children || ""),
      ne,
      se
    ) : G.el = R.el;
  }, W = (R, G, ne, se) => {
    [R.el, R.anchor] = x(
      R.children,
      G,
      ne,
      se,
      R.el,
      R.anchor
    );
  }, I = ({ el: R, anchor: G }, ne, se) => {
    let me;
    for (; R && R !== G; )
      me = S(R), r(R, ne, se), R = me;
    r(G, ne, se);
  }, V = ({ el: R, anchor: G }) => {
    let ne;
    for (; R && R !== G; )
      ne = S(R), o(R), R = ne;
    o(G);
  }, O = (R, G, ne, se, me, ve, Se, Ne, we) => {
    if (G.type === "svg" ? Se = "svg" : G.type === "math" && (Se = "mathml"), R == null)
      j(
        G,
        ne,
        se,
        me,
        ve,
        Se,
        Ne,
        we
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
          we
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, j = (R, G, ne, se, me, ve, Se, Ne) => {
    let we, fe;
    const { props: je, shapeFlag: Ce, transition: Ve, dirs: Ge } = R;
    if (we = R.el = l(
      R.type,
      ve,
      je && je.is,
      je
    ), Ce & 8 ? y(we, R.children) : Ce & 16 && Q(
      R.children,
      we,
      null,
      se,
      me,
      pu(R, ve),
      Se,
      Ne
    ), Ge && Ki(R, null, se, "created"), K(we, R, R.scopeId, Se, se), je) {
      for (const h in je)
        h !== "value" && !Ya(h) && a(we, h, null, je[h], ve, se);
      "value" in je && a(we, "value", null, je.value, ve), (fe = je.onVnodeBeforeMount) && Pr(fe, se, R);
    }
    Ge && Ki(R, null, se, "beforeMount");
    const lt = Ww(me, Ve);
    lt && Ve.beforeEnter(we), r(we, G, ne), ((fe = je && je.onVnodeMounted) || lt || Ge) && Rn(() => {
      try {
        fe && Pr(fe, se, R), lt && Ve.enter(we), Ge && Ki(R, null, se, "mounted");
      } finally {
      }
    }, me);
  }, K = (R, G, ne, se, me) => {
    if (ne && P(R, ne), se)
      for (let ve = 0; ve < se.length; ve++)
        P(R, se[ve]);
    if (me) {
      let ve = me.subTree;
      if (G === ve || d0(ve.type) && (ve.ssContent === G || ve.ssFallback === G)) {
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
  }, Q = (R, G, ne, se, me, ve, Se, Ne, we = 0) => {
    for (let fe = we; fe < R.length; fe++) {
      const je = R[fe] = Ne ? ii(R[fe]) : Fr(R[fe]);
      v(
        null,
        je,
        G,
        ne,
        se,
        me,
        ve,
        Se,
        Ne
      );
    }
  }, _e = (R, G, ne, se, me, ve, Se) => {
    const Ne = G.el = R.el;
    let { patchFlag: we, dynamicChildren: fe, dirs: je } = G;
    we |= R.patchFlag & 16;
    const Ce = R.props || kt, Ve = G.props || kt;
    let Ge;
    if (ne && Bi(ne, !1), (Ge = Ve.onVnodeBeforeUpdate) && Pr(Ge, ne, G, R), je && Ki(G, R, ne, "beforeUpdate"), ne && Bi(ne, !0), (Ce.innerHTML && Ve.innerHTML == null || Ce.textContent && Ve.textContent == null) && y(Ne, ""), fe ? T(
      R.dynamicChildren,
      fe,
      Ne,
      ne,
      se,
      pu(G, me),
      ve
    ) : Se || A(
      R,
      G,
      Ne,
      null,
      ne,
      se,
      pu(G, me),
      ve,
      !1
    ), we > 0) {
      if (we & 16)
        C(Ne, Ce, Ve, ne, me);
      else if (we & 2 && Ce.class !== Ve.class && a(Ne, "class", null, Ve.class, me), we & 4 && a(Ne, "style", Ce.style, Ve.style, me), we & 8) {
        const lt = G.dynamicProps;
        for (let h = 0; h < lt.length; h++) {
          const De = lt[h], it = Ce[De], ft = Ve[De];
          (ft !== it || De === "value") && a(Ne, De, it, ft, me, ne);
        }
      }
      we & 1 && R.children !== G.children && y(Ne, G.children);
    } else !Se && fe == null && C(Ne, Ce, Ve, ne, me);
    ((Ge = Ve.onVnodeUpdated) || je) && Rn(() => {
      Ge && Pr(Ge, ne, G, R), je && Ki(G, R, ne, "updated");
    }, se);
  }, T = (R, G, ne, se, me, ve, Se) => {
    for (let Ne = 0; Ne < G.length; Ne++) {
      const we = R[Ne], fe = G[Ne], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ta(we, fe) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? w(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ne
        )
      );
      v(
        we,
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
  }, C = (R, G, ne, se, me) => {
    if (G !== ne) {
      if (G !== kt)
        for (const ve in G)
          !Ya(ve) && !(ve in ne) && a(
            R,
            ve,
            G[ve],
            null,
            me,
            se
          );
      for (const ve in ne) {
        if (Ya(ve)) continue;
        const Se = ne[ve], Ne = G[ve];
        Se !== Ne && ve !== "value" && a(R, ve, Ne, Se, me, se);
      }
      "value" in ne && a(R, "value", G.value, ne.value, me);
    }
  }, ce = (R, G, ne, se, me, ve, Se, Ne, we) => {
    const fe = G.el = R ? R.el : u(""), je = G.anchor = R ? R.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: Ve, slotScopeIds: Ge } = G;
    Ge && (Ne = Ne ? Ne.concat(Ge) : Ge), R == null ? (r(fe, ne, se), r(je, ne, se), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      G.children || [],
      ne,
      je,
      me,
      ve,
      Se,
      Ne,
      we
    )) : Ce > 0 && Ce & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ve.length ? (T(
      R.dynamicChildren,
      Ve,
      ne,
      me,
      ve,
      Se,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (G.key != null || me && G === me.subTree) && c0(
      R,
      G,
      !0
      /* shallow */
    )) : A(
      R,
      G,
      ne,
      je,
      me,
      ve,
      Se,
      Ne,
      we
    );
  }, de = (R, G, ne, se, me, ve, Se, Ne, we) => {
    G.slotScopeIds = Ne, R == null ? G.shapeFlag & 512 ? me.ctx.activate(
      G,
      ne,
      se,
      Se,
      we
    ) : pe(
      G,
      ne,
      se,
      me,
      ve,
      Se,
      we
    ) : U(R, G, we);
  }, pe = (R, G, ne, se, me, ve, Se) => {
    const Ne = R.component = ex(
      R,
      se,
      me
    );
    if (Wg(R) && (Ne.ctx.renderer = hn), nx(Ne, !1, Se), Ne.asyncDep) {
      if (me && me.registerDep(Ne, X, Se), !R.el) {
        const we = Ne.subTree = Te(Oi);
        $(null, we, G, ne), R.placeholder = we.el;
      }
    } else
      X(
        Ne,
        R,
        G,
        ne,
        me,
        ve,
        Se
      );
  }, U = (R, G, ne) => {
    const se = G.component = R.component;
    if (Lw(R, G, ne))
      if (se.asyncDep && !se.asyncResolved) {
        H(se, G, ne);
        return;
      } else
        se.next = G, se.update();
    else
      G.el = R.el, se.vnode = G;
  }, X = (R, G, ne, se, me, ve, Se) => {
    const Ne = () => {
      if (R.isMounted) {
        let { next: Ce, bu: Ve, u: Ge, parent: lt, vnode: h } = R;
        {
          const fn = u0(R);
          if (fn) {
            Ce && (Ce.el = h.el, H(R, Ce, Se)), fn.asyncDep.then(() => {
              Rn(() => {
                R.isUnmounted || fe();
              }, me);
            });
            return;
          }
        }
        let De = Ce, it;
        Bi(R, !1), Ce ? (Ce.el = h.el, H(R, Ce, Se)) : Ce = h, Ve && al(Ve), (it = Ce.props && Ce.props.onVnodeBeforeUpdate) && Pr(it, lt, Ce, h), Bi(R, !0);
        const ft = Eh(R), mn = R.subTree;
        R.subTree = ft, v(
          mn,
          ft,
          // parent may have changed if it's in a teleport
          w(mn.el),
          // anchor may have changed if it's in a fragment
          qn(mn),
          R,
          me,
          ve
        ), Ce.el = ft.el, De === null && Rw(R, ft.el), Ge && Rn(Ge, me), (it = Ce.props && Ce.props.onVnodeUpdated) && Rn(
          () => Pr(it, lt, Ce, h),
          me
        );
      } else {
        let Ce;
        const { el: Ve, props: Ge } = G, { bm: lt, m: h, parent: De, root: it, type: ft } = R, mn = Za(G);
        Bi(R, !1), lt && al(lt), !mn && (Ce = Ge && Ge.onVnodeBeforeMount) && Pr(Ce, De, G), Bi(R, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            ft,
            R.parent ? R.parent.type : void 0
          );
          const fn = R.subTree = Eh(R);
          v(
            null,
            fn,
            ne,
            se,
            R,
            me,
            ve
          ), G.el = fn.el;
        }
        if (h && Rn(h, me), !mn && (Ce = Ge && Ge.onVnodeMounted)) {
          const fn = G;
          Rn(
            () => Pr(Ce, De, fn),
            me
          );
        }
        (G.shapeFlag & 256 || De && Za(De.vnode) && De.vnode.shapeFlag & 256) && R.a && Rn(R.a, me), R.isMounted = !0, G = ne = se = null;
      }
    };
    R.scope.on();
    const we = R.effect = new xg(Ne);
    R.scope.off();
    const fe = R.update = we.run.bind(we), je = R.job = we.runIfDirty.bind(we);
    je.i = R, je.id = R.uid, we.scheduler = () => Uf(je), Bi(R, !0), fe();
  }, H = (R, G, ne) => {
    G.component = R;
    const se = R.vnode.props;
    R.vnode = G, R.next = null, $w(R, G.props, se, ne), Gw(R, G.children, ne), ui(), Sh(R), fi();
  }, A = (R, G, ne, se, me, ve, Se, Ne, we = !1) => {
    const fe = R && R.children, je = R ? R.shapeFlag : 0, Ce = G.children, { patchFlag: Ve, shapeFlag: Ge } = G;
    if (Ve > 0) {
      if (Ve & 128) {
        Y(
          fe,
          Ce,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we
        );
        return;
      } else if (Ve & 256) {
        ee(
          fe,
          Ce,
          ne,
          se,
          me,
          ve,
          Se,
          Ne,
          we
        );
        return;
      }
    }
    Ge & 8 ? (je & 16 && at(fe, me, ve), Ce !== fe && y(ne, Ce)) : je & 16 ? Ge & 16 ? Y(
      fe,
      Ce,
      ne,
      se,
      me,
      ve,
      Se,
      Ne,
      we
    ) : at(fe, me, ve, !0) : (je & 8 && y(ne, ""), Ge & 16 && Q(
      Ce,
      ne,
      se,
      me,
      ve,
      Se,
      Ne,
      we
    ));
  }, ee = (R, G, ne, se, me, ve, Se, Ne, we) => {
    R = R || Xo, G = G || Xo;
    const fe = R.length, je = G.length, Ce = Math.min(fe, je);
    let Ve;
    for (Ve = 0; Ve < Ce; Ve++) {
      const Ge = G[Ve] = we ? ii(G[Ve]) : Fr(G[Ve]);
      v(
        R[Ve],
        Ge,
        ne,
        null,
        me,
        ve,
        Se,
        Ne,
        we
      );
    }
    fe > je ? at(
      R,
      me,
      ve,
      !0,
      !1,
      Ce
    ) : Q(
      G,
      ne,
      se,
      me,
      ve,
      Se,
      Ne,
      we,
      Ce
    );
  }, Y = (R, G, ne, se, me, ve, Se, Ne, we) => {
    let fe = 0;
    const je = G.length;
    let Ce = R.length - 1, Ve = je - 1;
    for (; fe <= Ce && fe <= Ve; ) {
      const Ge = R[fe], lt = G[fe] = we ? ii(G[fe]) : Fr(G[fe]);
      if (Ta(Ge, lt))
        v(
          Ge,
          lt,
          ne,
          null,
          me,
          ve,
          Se,
          Ne,
          we
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ce && fe <= Ve; ) {
      const Ge = R[Ce], lt = G[Ve] = we ? ii(G[Ve]) : Fr(G[Ve]);
      if (Ta(Ge, lt))
        v(
          Ge,
          lt,
          ne,
          null,
          me,
          ve,
          Se,
          Ne,
          we
        );
      else
        break;
      Ce--, Ve--;
    }
    if (fe > Ce) {
      if (fe <= Ve) {
        const Ge = Ve + 1, lt = Ge < je ? G[Ge].el : se;
        for (; fe <= Ve; )
          v(
            null,
            G[fe] = we ? ii(G[fe]) : Fr(G[fe]),
            ne,
            lt,
            me,
            ve,
            Se,
            Ne,
            we
          ), fe++;
      }
    } else if (fe > Ve)
      for (; fe <= Ce; )
        Oe(R[fe], me, ve, !0), fe++;
    else {
      const Ge = fe, lt = fe, h = /* @__PURE__ */ new Map();
      for (fe = lt; fe <= Ve; fe++) {
        const Ot = G[fe] = we ? ii(G[fe]) : Fr(G[fe]);
        Ot.key != null && h.set(Ot.key, fe);
      }
      let De, it = 0;
      const ft = Ve - lt + 1;
      let mn = !1, fn = 0;
      const Jn = new Array(ft);
      for (fe = 0; fe < ft; fe++) Jn[fe] = 0;
      for (fe = Ge; fe <= Ce; fe++) {
        const Ot = R[fe];
        if (it >= ft) {
          Oe(Ot, me, ve, !0);
          continue;
        }
        let Pe;
        if (Ot.key != null)
          Pe = h.get(Ot.key);
        else
          for (De = lt; De <= Ve; De++)
            if (Jn[De - lt] === 0 && Ta(Ot, G[De])) {
              Pe = De;
              break;
            }
        Pe === void 0 ? Oe(Ot, me, ve, !0) : (Jn[Pe - lt] = fe + 1, Pe >= fn ? fn = Pe : mn = !0, v(
          Ot,
          G[Pe],
          ne,
          null,
          me,
          ve,
          Se,
          Ne,
          we
        ), it++);
      }
      const Zt = mn ? Uw(Jn) : Xo;
      for (De = Zt.length - 1, fe = ft - 1; fe >= 0; fe--) {
        const Ot = lt + fe, Pe = G[Ot], sn = G[Ot + 1], Gr = Ot + 1 < je ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          sn.el || f0(sn)
        ) : se;
        Jn[fe] === 0 ? v(
          null,
          Pe,
          ne,
          Gr,
          me,
          ve,
          Se,
          Ne,
          we
        ) : mn && (De < 0 || fe !== Zt[De] ? Ie(Pe, ne, Gr, 2) : De--);
      }
    }
  }, Ie = (R, G, ne, se, me = null) => {
    const { el: ve, type: Se, transition: Ne, children: we, shapeFlag: fe } = R;
    if (fe & 6) {
      Ie(R.component.subTree, G, ne, se);
      return;
    }
    if (fe & 128) {
      R.suspense.move(G, ne, se);
      return;
    }
    if (fe & 64) {
      Se.move(R, G, ne, hn);
      return;
    }
    if (Se === Ye) {
      r(ve, G, ne);
      for (let Ce = 0; Ce < we.length; Ce++)
        Ie(we[Ce], G, ne, se);
      r(R.anchor, G, ne);
      return;
    }
    if (Se === hu) {
      I(R, G, ne);
      return;
    }
    if (se !== 2 && fe & 1 && Ne)
      if (se === 0)
        Ne.beforeEnter(ve), r(ve, G, ne), Rn(() => Ne.enter(ve), me);
      else {
        const { leave: Ce, delayLeave: Ve, afterLeave: Ge } = Ne, lt = () => {
          R.ctx.isUnmounted ? o(ve) : r(ve, G, ne);
        }, h = () => {
          ve._isLeaving && ve[cw](
            !0
            /* cancelled */
          ), Ce(ve, () => {
            lt(), Ge && Ge();
          });
        };
        Ve ? Ve(ve, lt, h) : h();
      }
    else
      r(ve, G, ne);
  }, Oe = (R, G, ne, se = !1, me = !1) => {
    const {
      type: ve,
      props: Se,
      ref: Ne,
      children: we,
      dynamicChildren: fe,
      shapeFlag: je,
      patchFlag: Ce,
      dirs: Ve,
      cacheIndex: Ge,
      memo: lt
    } = R;
    if (Ce === -2 && (me = !1), Ne != null && (ui(), Ja(Ne, null, ne, R, !0), fi()), Ge != null && (G.renderCache[Ge] = void 0), je & 256) {
      G.ctx.deactivate(R);
      return;
    }
    const h = je & 1 && Ve, De = !Za(R);
    let it;
    if (De && (it = Se && Se.onVnodeBeforeUnmount) && Pr(it, G, R), je & 6)
      un(R.component, ne, se);
    else {
      if (je & 128) {
        R.suspense.unmount(ne, se);
        return;
      }
      h && Ki(R, null, G, "beforeUnmount"), je & 64 ? R.type.remove(
        R,
        G,
        ne,
        hn,
        se
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== Ye || Ce > 0 && Ce & 64) ? at(
        fe,
        G,
        ne,
        !1,
        !0
      ) : (ve === Ye && Ce & 384 || !me && je & 16) && at(we, G, ne), se && Mt(R);
    }
    const ft = lt != null && Ge == null;
    (De && (it = Se && Se.onVnodeUnmounted) || h || ft) && Rn(() => {
      it && Pr(it, G, R), h && Ki(R, null, G, "unmounted"), ft && (R.el = null);
    }, ne);
  }, Mt = (R) => {
    const { type: G, el: ne, anchor: se, transition: me } = R;
    if (G === Ye) {
      yt(ne, se);
      return;
    }
    if (G === hu) {
      V(R);
      return;
    }
    const ve = () => {
      o(ne), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (R.shapeFlag & 1 && me && !me.persisted) {
      const { leave: Se, delayLeave: Ne } = me, we = () => Se(ne, ve);
      Ne ? Ne(R.el, ve, we) : we();
    } else
      ve();
  }, yt = (R, G) => {
    let ne;
    for (; R !== G; )
      ne = S(R), o(R), R = ne;
    o(G);
  }, un = (R, G, ne) => {
    const { bum: se, scope: me, job: ve, subTree: Se, um: Ne, m: we, a: fe } = R;
    Th(we), Th(fe), se && al(se), me.stop(), ve && (ve.flags |= 8, Oe(Se, R, G, ne)), Ne && Rn(Ne, G), Rn(() => {
      R.isUnmounted = !0;
    }, G);
  }, at = (R, G, ne, se = !1, me = !1, ve = 0) => {
    for (let Se = ve; Se < R.length; Se++)
      Oe(R[Se], G, ne, se, me);
  }, qn = (R) => {
    if (R.shapeFlag & 6)
      return qn(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const G = S(R.anchor || R.el), ne = G && G[sw];
    return ne ? S(ne) : G;
  };
  let Et = !1;
  const en = (R, G, ne) => {
    let se;
    R == null ? G._vnode && (Oe(G._vnode, null, null, !0), se = G._vnode.component) : v(
      G._vnode || null,
      R,
      G,
      null,
      null,
      null,
      ne
    ), G._vnode = R, Et || (Et = !0, Sh(se), $g(), Et = !1);
  }, hn = {
    p: v,
    um: Oe,
    m: Ie,
    r: Mt,
    mt: pe,
    mc: Q,
    pc: A,
    pbc: T,
    n: qn,
    o: e
  };
  return {
    render: en,
    hydrate: void 0,
    createApp: Iw(en)
  };
}
function pu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ww(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function c0(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ze(r) && Ze(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = ii(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && c0(l, u)), u.type === uc && (u.patchFlag === -1 && (u = o[a] = ii(u)), u.el = l.el), u.type === Oi && !u.el && (u.el = l.el);
    }
}
function Uw(e) {
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
function u0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : u0(t);
}
function Th(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function f0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? f0(t.subTree) : null;
}
const d0 = (e) => e.__isSuspense;
function Yw(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : nw(e);
}
const Ye = /* @__PURE__ */ Symbol.for("v-fgt"), uc = /* @__PURE__ */ Symbol.for("v-txt"), Oi = /* @__PURE__ */ Symbol.for("v-cmt"), hu = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let Yn = null;
function re(e = !1) {
  es.push(Yn = e ? null : []);
}
function Xw() {
  es.pop(), Yn = es[es.length - 1] || null;
}
let os = 1;
function Dh(e, t = !1) {
  os += e, e < 0 && Yn && t && (Yn.hasOnce = !0);
}
function p0(e) {
  return e.dynamicChildren = os > 0 ? Yn || Xo : null, Xw(), os > 0 && Yn && Yn.push(e), e;
}
function ue(e, t, n, r, o, a) {
  return p0(
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
function xr(e, t, n, r, o) {
  return p0(
    Te(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function h0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ta(e, t) {
  return e.type === t.type && e.key === t.key;
}
const m0 = ({ key: e }) => e ?? null, ll = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Jt(e) || /* @__PURE__ */ Mn(e) || nt(e) ? { i: Un, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Ye ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && m0(t),
    ref: t && ll(t),
    scopeId: jg,
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
  return u ? (Jf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Jt(n) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Yn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Yn.push(d), d;
}
const Te = qw;
function qw(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Xg) && (e = Oi), h0(e)) {
    const u = aa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Jf(u, n), os > 0 && !a && Yn && (u.shapeFlag & 6 ? Yn[Yn.indexOf(e)] = u : Yn.push(u)), u.patchFlag = -2, u;
  }
  if (sx(e) && (e = e.__vccOpts), t) {
    t = Jw(t);
    let { class: u, style: d } = t;
    u && !Jt(u) && (t.class = ut(u)), xt(d) && (/* @__PURE__ */ Wf(d) && !Ze(d) && (d = Nn({}, d)), t.style = _t(d));
  }
  const l = Jt(e) ? 1 : d0(e) ? 128 : lw(e) ? 64 : xt(e) ? 4 : nt(e) ? 2 : 0;
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
function Jw(e) {
  return e ? /* @__PURE__ */ Wf(e) || r0(e) ? Nn({}, e) : e : null;
}
function aa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? oi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && m0(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ze(a) ? a.concat(ll(t)) : [a, ll(t)] : ll(t)
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
    patchFlag: t && e.type !== Ye ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && aa(e.ssContent),
    ssFallback: e.ssFallback && aa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Yf(
    y,
    d.clone(y)
  ), y;
}
function Ha(e = " ", t = 0) {
  return Te(uc, null, e, t);
}
function dt(e = "", t = !1) {
  return t ? (re(), xr(Oi, null, e)) : Te(Oi, null, e);
}
function Fr(e) {
  return e == null || typeof e == "boolean" ? Te(Oi) : Ze(e) ? Te(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : h0(e) ? ii(e) : Te(uc, null, String(e));
}
function ii(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : aa(e);
}
function Jf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Jf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !r0(t) ? t._ctx = Un : o === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else nt(t) ? (t = { default: t, _ctx: Un }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ha(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ut([t.class, r.class]));
      else if (o === "style")
        t.style = _t([t.style, r.style]);
      else if (Ql(o)) {
        const a = t[o], l = r[o];
        l && a !== l && !(Ze(a) && a.includes(l)) ? t[o] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ec(o) && (t[o] = l);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Pr(e, t, n, r = null) {
  zr(e, t, 7, [
    n,
    r
  ]);
}
const Zw = Zg();
let Qw = 0;
function ex(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Zw, a = {
    uid: Qw++,
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
    scope: new M_(
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
    propsOptions: o0(r, o),
    emitsOptions: Qg(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: kt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: kt,
    data: kt,
    props: kt,
    attrs: kt,
    slots: kt,
    refs: kt,
    setupState: kt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Ow.bind(null, a), e.ce && e.ce(a), a;
}
let kn = null;
const tx = () => kn || Un;
let Cl, of;
{
  const e = rc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  Cl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => kn = n
  ), of = t(
    "__VUE_SSR_SETTERS__",
    (n) => as = n
  );
}
const ys = (e) => {
  const t = kn;
  return Cl(e), e.scope.on(), () => {
    e.scope.off(), Cl(t);
  };
}, Lh = () => {
  kn && kn.scope.off(), Cl(null);
};
function g0(e) {
  return e.vnode.shapeFlag & 4;
}
let as = !1;
function nx(e, t = !1, n = !1) {
  t && of(t);
  const { props: r, children: o } = e.vnode, a = g0(e);
  Vw(e, r, a, t), Hw(e, o, n || t);
  const l = a ? rx(e, t) : void 0;
  return t && of(!1), l;
}
function rx(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sw);
  const { setup: r } = n;
  if (r) {
    ui();
    const o = e.setupContext = r.length > 1 ? ox(e) : null, a = ys(e), l = ms(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = mg(l);
    if (fi(), a(), (u || e.sp) && !Za(e) && Bg(e), u) {
      if (l.then(Lh, Lh), t)
        return l.then((d) => {
          Rh(e, d);
        }).catch((d) => {
          oc(d, e, 0);
        });
      e.asyncDep = l;
    } else
      Rh(e, l);
  } else
    y0(e);
}
function Rh(e, t, n) {
  nt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = Lg(t)), y0(e);
}
function y0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Lr);
  {
    const o = ys(e);
    ui();
    try {
      kw(e);
    } finally {
      fi(), o();
    }
  }
}
const ix = {
  get(e, t) {
    return Sn(e, "get", ""), e[t];
  }
};
function ox(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ix),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lg(W_(e.exposed)), {
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
function ax(e, t = !0) {
  return nt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sx(e) {
  return nt(e) && "__vccOpts" in e;
}
const pt = (e, t) => /* @__PURE__ */ J_(e, t, as), lx = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let af;
const Vh = typeof window < "u" && window.trustedTypes;
if (Vh)
  try {
    af = /* @__PURE__ */ Vh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const b0 = af ? (e) => af.createHTML(e) : (e) => e, cx = "http://www.w3.org/2000/svg", ux = "http://www.w3.org/1998/Math/MathML", ti = typeof document < "u" ? document : null, $h = ti && /* @__PURE__ */ ti.createElement("template"), fx = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? ti.createElementNS(cx, e) : t === "mathml" ? ti.createElementNS(ux, e) : n ? ti.createElement(e, { is: n }) : ti.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => ti.createTextNode(e),
  createComment: (e) => ti.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ti.querySelector(e),
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
      $h.innerHTML = b0(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = $h.content;
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
}, dx = /* @__PURE__ */ Symbol("_vtc");
function px(e, t, n) {
  const r = e[dx];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Il = /* @__PURE__ */ Symbol("_vod"), v0 = /* @__PURE__ */ Symbol("_vsh"), Ei = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Il] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Da(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Da(e, !0), r.enter(e)) : r.leave(e, () => {
      Da(e, !1);
    }) : Da(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Da(e, t);
  }
};
function Da(e, t) {
  e.style.display = t ? e[Il] : "none", e[v0] = !t;
}
const hx = /* @__PURE__ */ Symbol(""), mx = /(?:^|;)\s*display\s*:/;
function gx(e, t, n) {
  const r = e.style, o = Jt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Jt(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && cl(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && cl(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), cl(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[hx];
      l && (n += ";" + l), r.cssText = n, a = mx.test(n);
    }
  } else t && e.removeAttribute("style");
  Il in e && (e[Il] = a ? r.display : "", e[v0] && (r.display = "none"));
}
const zh = /\s*!important$/;
function cl(e, t, n) {
  if (Ze(n))
    n.forEach((r) => cl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = yx(e, t);
    zh.test(n) ? e.setProperty(
      go(r),
      n.replace(zh, ""),
      "important"
    ) : e[r] = n;
  }
}
const jh = ["Webkit", "Moz", "ms"], mu = {};
function yx(e, t) {
  const n = mu[t];
  if (n)
    return n;
  let r = En(t);
  if (r !== "filter" && r in e)
    return mu[t] = r;
  r = nc(r);
  for (let o = 0; o < jh.length; o++) {
    const a = jh[o] + r;
    if (a in e)
      return mu[t] = a;
  }
  return t;
}
const Hh = "http://www.w3.org/1999/xlink";
function Gh(e, t, n, r, o, a = S_(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hh, t.slice(6, t.length)) : e.setAttributeNS(Hh, t, n) : n == null || a && !vg(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : $r(n) ? String(n) : n
  );
}
function Kh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? b0(n) : n);
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
    u === "boolean" ? n = vg(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Go(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function bx(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Bh = /* @__PURE__ */ Symbol("_vei");
function vx(e, t, n, r, o = null) {
  const a = e[Bh] || (e[Bh] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = _x(t);
    if (r) {
      const b = a[t] = Sx(
        r,
        o
      );
      Go(e, u, b, d);
    } else l && (bx(e, u, l, d), a[t] = void 0);
  }
}
const Wh = /(?:Once|Passive|Capture)$/;
function _x(e) {
  let t;
  if (Wh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Wh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : go(e.slice(2)), t];
}
let gu = 0;
const wx = /* @__PURE__ */ Promise.resolve(), xx = () => gu || (wx.then(() => gu = 0), gu = Date.now());
function Sx(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    zr(
      kx(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = xx(), n;
}
function kx(e, t) {
  if (Ze(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Uh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Mx = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? px(e, r, l) : t === "style" ? gx(e, n, r) : Ql(t) ? ec(t) || vx(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nx(e, t, r, l)) ? (Kh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gh(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Px(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Jt(r))) ? Kh(e, En(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Gh(e, t, r, l));
};
function Nx(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Uh(t) && nt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Uh(t) && Jt(n) ? !1 : t in e;
}
function Px(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = En(t);
  return Array.isArray(n) ? n.some((o) => En(o) === r) : Object.keys(n).some((o) => En(o) === r);
}
const Yh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => al(t, n) : t;
};
function Ax(e) {
  e.target.composing = !0;
}
function Xh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const yu = /* @__PURE__ */ Symbol("_assign");
function qh(e, t, n) {
  return t && (e = e.trim()), n && (e = Vf(e)), e;
}
const Jh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[yu] = Yh(o);
    const a = r || o.props && o.props.type === "number";
    Go(e, t ? "change" : "input", (l) => {
      l.target.composing || e[yu](qh(e.value, n, a));
    }), (n || a) && Go(e, "change", () => {
      e.value = qh(e.value, n, a);
    }), t || (Go(e, "compositionstart", Ax), Go(e, "compositionend", Xh), Go(e, "change", Xh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[yu] = Yh(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Vf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Cx = ["ctrl", "shift", "alt", "meta"], Ix = {
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
  exact: (e, t) => Cx.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ct = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = Ix[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, Ex = /* @__PURE__ */ Nn({ patchProp: Mx }, fx);
let Zh;
function Ox() {
  return Zh || (Zh = Kw(Ex));
}
const Zf = ((...e) => {
  const t = Ox().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Tx(r);
    if (!o) return;
    const a = t._component;
    !nt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Fx(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function Fx(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tx(e) {
  return Jt(e) ? document.querySelector(e) : e;
}
function Ko(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Dx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qh(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let w = 0; w < o; w += 1)
    for (let S = 0; S < r; S += 1)
      a[(w * r + S) * 4 + 3] <= t || (S < l && (l = S), w < u && (u = w), S > d && (d = S), w > b && (b = w));
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
function Qf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function ni(e, t, n) {
  if (!e) return Ko(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Lt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let bu = null, vu = null, em = null, tm = null, Kt = null, La = null, An = null, Ni = null;
function Lx() {
  if (vu) return vu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), vu = n, n;
}
function _u(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  bu = ni(bu, n, r);
  const o = bu;
  Lt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", tm !== o.ctx && (em = o.ctx.createPattern(Lx(), "repeat"), tm = o.ctx), o.ctx.fillStyle = em, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Rx(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Vx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function $x(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function zx(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Rt = /* @__PURE__ */ new Map(), ed = 128;
function jx(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Rt.has(d)) {
    const W = Rt.get(d);
    return Rt.delete(d), Rt.set(d, W), W;
  }
  Rt.size >= ed && Rt.delete(Rt.keys().next().value);
  const b = l * 2 + 2, y = l + 1, w = Qf(b, b), S = w.getContext("2d"), P = u * l, x = l + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, $ = S.createRadialGradient(y, y, P, y, y, x);
  return $.addColorStop(0, v), $.addColorStop(1, F), S.fillStyle = $, S.fillRect(0, 0, b, b), Rt.set(d, w), w;
}
function Hx(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: y } = r, w = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), P = Math.max(0, o), x = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), F = `chisel:${w}:${S}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${P.toFixed(2)}:${x.toFixed(2)}:${v.toFixed(2)}`;
  if (Rt.has(F)) {
    const Q = Rt.get(F);
    return Rt.delete(F), Rt.set(F, Q), Q;
  }
  Rt.size >= ed && Rt.delete(Rt.keys().next().value);
  const $ = Qf(w, S), W = $.getContext("2d"), I = W.createImageData(w, S), V = I.data, O = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), K = 1 + P;
  for (let Q = 0; Q < S; Q++)
    for (let _e = 0; _e < w; _e++) {
      const T = _e + 0.5 - e, C = Q + 0.5 - t, ce = Math.max(Math.abs(T) - O, 0), pe = Math.hypot(ce, C) / t;
      if (pe >= 1) continue;
      const U = pe <= j ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - j)), X = 1 - pe, H = 1 + P * (1 - X) * (1 - X), A = 1 - x * X * X, ee = H * A / K;
      let Y = 1;
      if (v > 0) {
        const Mt = Math.floor((C + t) / 1.5), yt = Math.floor((T + e) / 8), un = lo(Qo(Mt * 41 + 500, yt * 19 + 300));
        Y = 1 - v * 0.42 * un;
      }
      const Ie = Math.round(255 * Math.min(1, y * U * ee * Y));
      if (Ie <= 0) continue;
      const Oe = (Q * w + _e) * 4;
      V[Oe] = u, V[Oe + 1] = d, V[Oe + 2] = b, V[Oe + 3] = Ie;
    }
  return W.putImageData(I, 0, 0), Rt.set(F, $), $;
}
function Qo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function lo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Gx(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), w = Math.hypot(y, d) / r;
  if (w >= 1) return 0;
  const S = lo(Qo(e * 17 + 3, t * 13 + 7)), P = w + a * 0.22 * (S - 0.5);
  if (P >= 1) return 0;
  const x = P <= o ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - o)), v = Kx(e, t, u, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const W = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, l * x * W));
}
function Kx(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = lo(Qo(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), w = lo(Qo(b * 23 + 800, y * 29 + 500)), S = lo(Qo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + S * 0.15;
}
function Bx(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), S = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Rt.has(S)) {
    const W = Rt.get(S);
    return Rt.delete(S), Rt.set(S, W), W;
  }
  Rt.size >= ed && Rt.delete(Rt.keys().next().value);
  const P = Qf(b, y), x = P.getContext("2d"), v = x.createImageData(b, y), F = v.data, $ = Math.max(0, Math.min(1, n));
  for (let W = 0; W < y; W++)
    for (let I = 0; I < b; I++) {
      const V = Gx(I, W, e, t, $, w, d);
      if (V <= 0) continue;
      const O = (W * b + I) * 4;
      F[O] = a, F[O + 1] = l, F[O + 2] = u, F[O + 3] = V;
    }
  return x.putImageData(v, 0, 0), Rt.set(S, P), P;
}
function _0(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = $x(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = Wx(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = zx(t, o), y = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", S = t == null ? void 0 : t.scatter, P = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let x;
  if (r === "chisel") {
    const $ = o * u, W = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    x = Hx($, W, a, l, I, V, O);
  } else if (r === "crayon") {
    const $ = o * u, W = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    x = Bx($, W, a, l, I);
  } else
    x = jx(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: x, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: P, latitudeCorrection: w };
}
function Wx(e) {
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
function Ux(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function nm(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function td(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, w = b * e.radiusPx * o, S = Qo(t, n);
    for (let P = 0; P < y; P++) {
      const x = lo(S + P * 2) * Math.PI * 2, v = Math.sqrt(lo(S + P * 2 + 1)) * w, F = t + Math.cos(x) * v, $ = n + Math.sin(x) * v, W = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, O = W * e.aspect * V;
      nm(e, F, $, W, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  nm(e, t, n, a, d);
}
function rm(e, t, n) {
  const r = Vx(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = _0(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let S = 0; S < r.length; S++) {
    let P = Number(r[S].u || 0) * o;
    const x = Number(r[S].v || 0) * a;
    S > 0 && Math.abs(P - u[S - 1].x) > o * 0.5 && (P += P < u[S - 1].x ? o : -o), u.push({ x: P, y: x });
  }
  if (td(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], w = 0;
  for (let S = 1; S < u.length; S++) {
    const P = u[S], x = { x: (b.x + P.x) * 0.5, y: (b.y + P.y) * 0.5 };
    S === 1 ? w = ss(l, y.x, y.y, x.x, x.y, w) : w = El(l, d, y, x, P, w), d = b, b = P, y = x;
  }
  u.length === 2 ? ss(l, y.x, y.y, b.x, b.y, w) : El(l, d, y, b, b, w), e.restore();
}
function ul(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = Ux(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const P = Rx(r[S]);
    let x = Number(P.x || 0) * o;
    S > 0 && Math.abs(x - u[S - 1].x) > o * 0.5 && (x += x < u[S - 1].x ? o : -o), u.push({ x, y: Number(P.y || 0) * a }), x < d && (d = x), x > b && (b = x);
  }
  function y(S) {
    e.beginPath(), e.moveTo(u[0].x + S, u[0].y);
    for (let P = 1; P < u.length; P++) e.lineTo(u[P].x + S, u[P].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = l, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function Ks(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    ul(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? rm(e, t, n) : (La = ni(La, n.width, n.height), Lt(La), rm(La.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(La.canvas, 0, 0), e.restore());
}
function Wi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ss(e, t, n, r, o, a) {
  const l = r - t, u = o - n, d = Math.hypot(l, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    td(e, t + l * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function El(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, w = u, S = w + d, P = S + b, x = S - w, v = 16;
  let F = a, $ = n.x, W = n.y;
  for (let I = 1; I <= v; I++) {
    const V = w + x * I / v, O = ((w - V) * t.x + (V - y) * n.x) / (w - y), j = ((w - V) * t.y + (V - y) * n.y) / (w - y), K = ((S - V) * n.x + (V - w) * r.x) / (S - w), Q = ((S - V) * n.y + (V - w) * r.y) / (S - w), _e = ((P - V) * r.x + (V - S) * o.x) / (P - S), T = ((P - V) * r.y + (V - S) * o.y) / (P - S), C = ((S - V) * O + (V - y) * K) / (S - y), ce = ((S - V) * j + (V - y) * Q) / (S - y), de = ((P - V) * K + (V - w) * _e) / (P - w), pe = ((P - V) * Q + (V - w) * T) / (P - w), U = ((S - V) * C + (V - w) * de) / (S - w), X = ((S - V) * ce + (V - w) * pe) / (S - w);
    F = ss(e, $, W, U, X, F), $ = U, W = X;
  }
  return F;
}
function Yx(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const P = _0(o, r, a), x = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", td(P, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: P.stampTex,
      radiusPx: P.radiusPx,
      spacingPx: P.spacingPx,
      aspect: P.aspect,
      angle: P.angle,
      stampKind: P.stampKind,
      scatter: P.scatter,
      latitudeCorrection: P.latitudeCorrection,
      strokeOpacity: x,
      velocityWidthFactor: v,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + b) * 0.5, w = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = ss(S, d.lastMidX, d.lastMidY, y, w, d.distSinceStamp) : d.distSinceStamp = El(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: w },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function sf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Ko(t, n), l = {
    descriptor: r,
    committedMask: Ko(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Ko(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Ko(t, n);
  let b = null, y = "", w = null;
  function S(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: Ko(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(T) {
    let C = o.get(T);
    return C || (C = S(T), o.set(T, C)), C;
  }
  function x(T) {
    return y === "mask" ? l : b ? P(b) : u;
  }
  function v(T) {
    var X;
    const C = !w || w.length !== T.length || T.some((H, A) => H !== w[A]), ce = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let de = l.displayDirty || u.displayDirty || C;
    for (const H of T) {
      const A = o.get(H);
      if (A != null && A.displayDirty) {
        de = !0;
        break;
      }
    }
    if (ce && (de = !0), !de) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const H of T) {
      const A = o.get(H);
      A && (A.displayDirty = !1);
    }
    w = [...T];
    const pe = d.ctx;
    Lt(d);
    const U = !!(ce != null && ce.isEraser);
    for (const H of T) {
      const A = o.get(H);
      if (!A) continue;
      const Y = b === A.actionGroupId && y === "paint" ? A.activeStroke : null;
      if (U)
        Kt = ni(Kt, t, n), Lt(Kt), Kt.ctx.drawImage(A.committedPaint.canvas, 0, 0), Wi(Kt.ctx, a.canvas), pe.drawImage(Kt.canvas, 0, 0);
      else if (pe.drawImage(A.committedPaint.canvas, 0, 0), Y) {
        const Ie = A.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        pe.save(), pe.globalAlpha = Ie, pe.drawImage(a.canvas, 0, 0), pe.restore();
      }
    }
  }
  function F(T) {
    var ce, de, pe, U, X;
    for (const H of o.values())
      Lt(H.committedPaint), Lt(H.currentStroke), H.activeStroke = null, H.displayDirty = !0;
    Lt(l.committedMask), Lt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, w = null;
    const C = [
      ...Array.isArray((de = (ce = T == null ? void 0 : T.painting) == null ? void 0 : ce.paint) == null ? void 0 : de.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (pe = T == null ? void 0 : T.painting) == null ? void 0 : pe.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const H of C) {
      if (((X = H == null ? void 0 : H.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const A = String((H == null ? void 0 : H.layerKind) || "paint"), Y = String((H == null ? void 0 : H.toolKind) || "pen") === "eraser";
      if (A === "mask") {
        const Ie = l.descriptor;
        Y ? (Kt = ni(Kt, Ie.width, Ie.height), Lt(Kt), Ks(Kt.ctx, H, Ie), Wi(l.committedMask.ctx, Kt.canvas)) : Ks(l.committedMask.ctx, H, Ie);
        continue;
      }
      if (Y) {
        Kt = ni(Kt, r.width, r.height), Lt(Kt), Ks(Kt.ctx, H, r);
        for (const Ie of o.values())
          Wi(Ie.committedPaint.ctx, Kt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((H == null ? void 0 : H.actionGroupId) || "__default__"), Oe = P(Ie), Mt = Oe.descriptor;
        Ks(Oe.committedPaint.ctx, H, Mt), Oe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function $(T, C) {
    y = String((T == null ? void 0 : T.layerKind) || "");
    const ce = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Lt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const de = ce ? u : P(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = ce ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Lt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0;
    }
  }
  function W(T, C) {
    var A;
    const ce = String((T == null ? void 0 : T.layerKind) || "paint"), de = String((T == null ? void 0 : T.toolKind) || "") === "eraser", pe = ce === "mask" ? l : de ? u : P(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), U = pe.activeStroke, X = pe.descriptor;
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
      U.pointCount === 2 ? ss(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : El(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    pe.lassoPreviewActive && (Lt(pe.currentStroke), ul(pe.currentStroke.ctx, T, X), pe.lassoPreviewActive = !1);
    const H = ce === "mask" ? l.committedMask : pe.committedPaint;
    if (de && ce === "paint")
      for (const ee of o.values())
        Wi(ee.committedPaint.ctx, pe.currentStroke.canvas), ee.displayDirty = !0;
    else if (de)
      Wi(H.ctx, pe.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      H.ctx.save(), H.ctx.globalAlpha = ee, H.ctx.drawImage(pe.currentStroke.canvas, 0, 0), H.ctx.restore();
    }
    Dx() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((A = T == null ? void 0 : T.targetSpace) == null ? void 0 : A.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Qh(pe.currentStroke.canvas), Qh(H.canvas), void 0), Lt(pe.currentStroke), pe.activeStroke = null, pe.displayDirty = !0, b = null, y = "", v([...o.keys()]);
  }
  function I(T) {
    if (y === "mask")
      Lt(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (y === "paint" && !b)
      Lt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const C = o.get(b);
      C && (Lt(C.currentStroke), C.activeStroke = null, C.lassoPreviewActive = !1, C.displayDirty = !0);
    }
    b = null, y = "", v([...o.keys()]);
  }
  function V(T, C) {
    var de;
    if (y = String((T == null ? void 0 : T.layerKind) || ""), String(((de = T == null ? void 0 : T.geometry) == null ? void 0 : de.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Lt(l.currentStroke), ul(l.currentStroke.ctx, T, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const pe = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = pe ? u : P(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = pe ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Lt(U.currentStroke), ul(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
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
  function j(T) {
    return o.get(String(T)) ?? null;
  }
  function K() {
    return [...o.keys()];
  }
  function Q(T) {
    var X;
    const C = o.get(String(T));
    if (!C) return null;
    const ce = y === "paint" && b === C.actionGroupId, de = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (de != null && de.isEraser)
      return An = ni(An, t, n), Lt(An), An.ctx.drawImage(C.committedPaint.canvas, 0, 0), Wi(An.ctx, a.canvas), An.canvas;
    const pe = ce ? C.activeStroke : null;
    if (!pe) return C.committedPaint.canvas;
    An = ni(An, t, n), Lt(An), An.ctx.drawImage(C.committedPaint.canvas, 0, 0);
    const U = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pe.strokeOpacity ?? 1));
    return An.ctx.save(), An.ctx.globalAlpha = U, An.ctx.drawImage(a.canvas, 0, 0), An.ctx.restore(), An.canvas;
  }
  function _e() {
    return Ni = ni(Ni, t, n), Lt(Ni), _u(Ni.ctx, l.committedMask.canvas), y === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (Kt = ni(Kt, t, n), Lt(Kt), Kt.ctx.drawImage(l.committedMask.canvas, 0, 0), Wi(Kt.ctx, a.canvas), Lt(Ni), _u(Ni.ctx, Kt.canvas)) : _u(Ni.ctx, a.canvas)), Ni.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: Yx,
    updateActiveStroke: V,
    commitActiveStroke: W,
    cancelActiveStroke: I,
    getErpTarget: O,
    ensureTarget: x,
    getGroupTarget: j,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: K
  };
}
function Z(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Xx(e, t) {
  let n = Bt(t) - Bt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const lf = 3;
function Ra(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ol(e, t = 0) {
  const n = Ra(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ra(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Ra(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Ra(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Ra(t) || 0);
}
function w0(e) {
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
const im = Math.PI / 180, om = 0.12, qx = lf, Jx = 35, Zx = 140, Ga = 100, Qx = 20, am = 0.8;
function eS(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Z(Number(e || Ga), 1, 179) * im;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / im;
}
function nd(e = {}) {
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
  function w(W, I, V = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const j = Number(O || performance.now()), K = Number(W), Q = Number(I), _e = K - d.drag.lastX, T = Q - d.drag.lastY;
    d.drag.lastX = K, d.drag.lastY = Q, d.drag.lastTs = j;
    const C = r() || { x: 1, y: 1 }, ce = Number(C.x || 1), de = Number(C.y || 1), pe = { ...t() };
    let U = 0, X = 0;
    if (V === "unwrap") {
      const A = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(A.w || 1)), Y = Math.max(1, Number(A.h || 1)), Ie = _e / ee, Oe = T / Y;
      U = -Ie * 360 * ce, X = Oe * 180 * de;
    } else {
      const A = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(A.w || 0)), Y = Math.max(1, Number(A.h || 0));
      if (ee > 1 && Y > 1) {
        const Ie = Z(Number(pe.fov || Ga), 1, 179), Oe = Z(eS(Ie, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ie * ce, X = T / Y * Oe * de;
      } else
        U = -_e * om * ce, X = T * om * de;
    }
    pe.yaw = Bt(Number(pe.yaw || 0) + U), pe.pitch = Z(Number(pe.pitch || 0) + X, -89.9, 89.9), n(pe), d.velHistory.push({ ts: j, yaw: pe.yaw, pitch: pe.pitch });
    let H = 0;
    for (; H < d.velHistory.length - 1 && d.velHistory[H].ts < j - 100; ) H++;
    return H > 0 && d.velHistory.splice(0, H), d.inertia.active = !1, d.inertia.lastTs = j, l(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function S(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(W || performance.now());
    d.drag.lastTs = I;
    const V = d.velHistory.filter((j) => I - j.ts <= 80);
    if (V.length >= 2) {
      const j = V[0], K = V.at(-1), Q = Math.max(1e-3, (K.ts - j.ts) / 1e3);
      let _e = K.yaw - j.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Q, d.inertia.vy = (K.pitch - j.pitch) / Q;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > Qx, d.inertia.lastTs = I, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function P(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(W || performance.now()), V = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const O = { ...t() };
    O.yaw = Bt(Number(O.yaw || 0) + d.inertia.vx * V), O.pitch = Z(Number(O.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const j = Math.exp(-5.5 * V);
    return d.inertia.vx *= j, d.inertia.vy *= j, Math.abs(d.inertia.vx) < am && Math.abs(d.inertia.vy) < am && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), l(), d.inertia.active;
  }
  function x() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function v(W) {
    const I = Math.sign(Number(W || 0));
    if (!I) return !1;
    const V = { ...t() }, O = Number(V.fov || Ga);
    return V.fov = Z(O + I * qx, Jx, Zx), n(V), l(), b("wheel", { deltaSign: I, fovBefore: O, fovAfter: V.fov }), !0;
  }
  function F(W, I = 0) {
    return v(Ol(W, I));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: Ga }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: w,
    endDrag: S,
    stepInertia: P,
    stopMotion: x,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: $
  };
}
const Ht = Math.PI / 180, an = 180 / Math.PI;
function sr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Fl(e, t) {
  return sr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Tl(e, t) {
  return sr(e.x * t, e.y * t, e.z * t);
}
function wu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function rd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return sr(e.x / t, e.y / t, e.z / t);
}
function $n(e, t) {
  const n = e * Ht, r = t * Ht, o = Math.cos(r);
  return sr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function da(e, t, n = 0) {
  const r = Number(e || 0) * Ht, o = Number(t || 0) * Ht, a = n * Ht, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), w = Math.sin(a);
  return {
    right: sr(
      l * y - u * b * w,
      d * w,
      -u * y - l * b * w
    ),
    up: sr(
      -l * w - u * b * y,
      d * y,
      u * w - l * b * y
    ),
    fwd: sr(u * d, b, l * d)
  };
}
function Dl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function vt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function tS() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function nS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = vt(r.z_index ?? r.zIndex, t.length);
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
function rS(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function iS(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = vt(e.t, 0), r = vt(e.widthScale, null), o = vt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = vt(e.u, null), l = vt(e.v, null);
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
    const a = vt(e.u, null), l = vt(e.v, null);
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
    const a = iS(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function oS(e, t, n, r) {
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
function aS(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = rS(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = oS(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = vt(e.size, null), l = vt(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = vt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, vt(S.r, 0))),
      g: Math.max(0, Math.min(1, vt(S.g, 0))),
      b: Math.max(0, Math.min(1, vt(S.b, 0))),
      a: Math.max(0, Math.min(1, vt(S.a, 1)))
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
    hardness: vt(e.hardness, null),
    flow: vt(e.flow, null),
    spacing: vt(e.spacing, null),
    createdAt: Math.trunc(vt(e.createdAt, 0)),
    color: w,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function sm(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = aS(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function sS(e) {
  if (!e || typeof e != "object") return null;
  const t = vt(e.u0, null), n = vt(e.v0, null), r = vt(e.u1, null), o = vt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function lS(e) {
  const t = e || {};
  return {
    du: vt(t.du, 0) ?? 0,
    dv: vt(t.dv, 0) ?? 0,
    rot_deg: vt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, vt(t.scale, 1) ?? 1)
  };
}
function cS(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = sS(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, vt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: lS(e.transform)
  } : null;
}
function uS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = cS(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ea(e) {
  const t = tS();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: nS(e.groups),
    paint: sm(e.paint, "paint"),
    mask: sm(e.mask, "mask"),
    raster_objects: uS(e.raster_objects)
  };
}
const jr = 1, Hr = 179, cf = 85;
function dc(e) {
  const t = ((rt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function x0(e, t) {
  let n = rt(e, 0) - rt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function S0(e, t, { shiftKey: n = !1 } = {}) {
  let r = rt(e, 0) + rt(t, 0) * an;
  return n && (r = Math.round(r / 15) * 15), dc(r);
}
function rt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function pi(e = {}) {
  const t = Z(rt(e.hFOV_deg || 90, 90), jr, Hr), n = Z(rt(e.vFOV_deg || 60, 60), jr, Hr), r = Math.tan(t * Ht * 0.5), o = Math.tan(n * Ht * 0.5);
  return {
    yawDeg: rt(e.yaw_deg, 0),
    pitchDeg: rt(e.pitch_deg, 0),
    rollDeg: rt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function co(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = pi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function id(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, rt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function od(e, t) {
  const n = Math.max(1e-12, rt(t, 1)), r = Math.max(1e-6, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Z(2 * Math.atan(r / (2 * n)) * an, jr, Hr), l = Z(2 * Math.atan(o / (2 * n)) * an, jr, Hr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function fS(e, t, n) {
  const r = rt(e == null ? void 0 : e.x, 0), o = rt(e == null ? void 0 : e.y, 0), a = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = pi(t), d = Math.max(1e-12, rt(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function ad(e, t, n = cf) {
  const r = Math.max(1e-12, rt(t, 1)), o = Z(rt(n, cf), 1, 89.999), a = r * Math.tan(o * Ht), l = Math.max(1, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function k0(e, t, n) {
  const r = Math.max(1e-12, rt(t, 1));
  return {
    x: (rt(n == null ? void 0 : n.x, 0) - rt(e == null ? void 0 : e.x, 0)) / r,
    y: -(rt(n == null ? void 0 : n.y, 0) - rt(e == null ? void 0 : e.y, 0)) / r
  };
}
function fl(e, t) {
  const n = Z(rt(e, 60), jr, Hr), r = Math.max(1e-6, rt(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * Ht * 0.5) * r) * an,
    jr,
    Hr
  );
}
function lm(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function dS(e, t) {
  const n = lm(e, 1), r = lm(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), l = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, l) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(l / d))}`;
}
function uo(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Ht, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Ht;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function to(e) {
  const t = uo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || dS(t, 1);
}
function M0(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = to(t), t;
}
function N0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? Z(l, jr, Hr) : Z(Math.min(42, rt(o, 100) * 0.42), 8, 96);
  return M0({
    id: String(e),
    label: "Frame 1",
    yaw_deg: rt(t, 0),
    pitch_deg: Z(rt(n, 0), -89.9, 89.9),
    roll_deg: dc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function ri(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : to(e);
}
function P0(e, t) {
  const n = pi(e), r = rt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * an, a = 2 * Math.atan(n.tanHalfY * r) * an;
  return o < jr || o > Hr || a < jr || a > Hr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function A0(e, t, n = lf) {
  const r = Math.sign(rt(t, 0)), o = Math.abs(rt(n, lf));
  if (!r || !(o > 0)) return null;
  const a = pi(e), l = a.hFovDeg + r * o;
  if (l < jr || l > Hr) return null;
  const u = Math.tan(l * Ht * 0.5);
  return P0(e, u / a.tanHalfX);
}
function C0(e, t) {
  const n = pi(e), r = da(n.yawDeg, n.pitchDeg, n.rollDeg), o = rt(t == null ? void 0 : t.x, 0), a = rt(t == null ? void 0 : t.y, 0);
  return rd(Fl(Fl(r.fwd, Tl(r.right, o)), Tl(r.up, a)));
}
function pS(e) {
  return sr(e.x, e.y, -e.z);
}
function dl(e) {
  return sr(e.x, e.y, -e.z);
}
function Xn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = da(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function I0(e) {
  const t = dl(sr(e[0][0], e[1][0], e[2][0])), n = dl(sr(e[0][1], e[1][1], e[2][1])), r = dl(sr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * an, pitchDeg: a * an, rollDeg: d * an };
}
function ls(e) {
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
    const S = 0.5 / Math.sqrt(y + 1);
    return { x: (d - l) * S, y: (r - u) * S, z: (o - n) * S, w: 0.25 / S };
  }
  if (t > a && t > b) {
    const S = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * S, y: (n + o) / S, z: (r + u) / S, w: (d - l) / S };
  }
  if (a > b) {
    const S = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / S, y: 0.25 * S, z: (l + d) / S, w: (r - u) / S };
  }
  const w = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / w, y: (l + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function Ws(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ro = 1e-6, uf = 1e-6, hS = 1e-9;
function cs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function mS(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    cs(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return cs(0, r, a, 1, 0.5 * (l + u));
}
function sa(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function la(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((S) => -S / o), u = r.map((S) => S / a);
  if (l.reduce((S, P, x) => S + P * u[x], 0) < 0) return n.map(() => 0);
  const d = l.map((S, P) => (S * a + u[P] * o) / (o + a)), b = (S) => Math.sqrt(S.reduce((P, x) => P + x * x, 0)), y = 3 * Math.min(b(l), b(u)), w = b(d);
  return w <= y ? d : d.map((S) => S * y / w);
}
function E0(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((y, w) => a[w] - y);
  let d = u;
  sa(e, r) && (d = la(t, r, n[r - 1].map((y, w) => y - o[w]), u).map((y) => y * l));
  let b = u;
  return sa(e, r + 1) && (b = la(t, r + 1, u.map((y) => -y), n[r + 2].map((y, w) => y - a[w])).map((y) => y * l)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function O0(e, t, n, r, o) {
  const [[a], [l]] = E0(e, t, n.map((u) => [u]), r);
  return cs(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function gS(e, t, n, r) {
  var b, y;
  const o = e.map((w) => w.value);
  let [a, l] = E0(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => cs(u[w], u[w] + a[w], d[w] + l[w], d[w], r));
}
function Ll([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function yS(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function xu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function bS([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function ff(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Yo(e, t) {
  return bS(Ll([-e[0], -e[1], -e[2], e[3]], t));
}
function Su(e, t, n) {
  return Ll(e, ff(Yo(e, t).map((r) => n * r)));
}
function ku(e, t) {
  const n = yS(e, t);
  if (Math.abs(n) > uf) return n < 0;
  const [r, o, a] = Yo(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > uf) return l < 0;
  return !1;
}
function Us(e) {
  const { x: t, y: n, z: r, w: o } = yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function df(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function vS(e, t, n, r) {
  const o = Us(e[n].value);
  let a = Us(e[n + 1].value);
  ku(o, a) && (a = xu(a));
  const l = t[n + 1] - t[n], u = Yo(o, a);
  let d = u;
  if (sa(e, n)) {
    let O = Us(e[n - 1].value);
    ku(O, o) && (O = xu(O)), d = la(t, n, Yo(o, O), u).map((j) => j * l);
  }
  let b = u;
  if (sa(e, n + 1)) {
    let O = Us(e[n + 2].value);
    ku(a, O) && (O = xu(O)), b = la(t, n + 1, Yo(a, o), Yo(a, O)).map((j) => j * l);
  }
  const y = Ll(o, ff(d.map((O, j) => 0.5 * (O - u[j])))), w = Ll(a, ff(u.map((O, j) => 0.5 * (O - b[j])))), [S, P, x, v] = Su(Su(o, a, r), Su(y, w, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: $, rollDeg: W } = I0(ls({ x: S, y: P, z: x, w: v })), I = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: df(F, I.yaw_deg, V.yaw_deg, r),
    pitch_deg: $,
    roll_deg: df(W, I.roll_deg, V.roll_deg, r)
  };
}
function us(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Rl(e) {
  return Math.sqrt(us(e, e));
}
function Vl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function F0(e, t) {
  const n = us(e, t), r = t.map((l, u) => l - n * e[u]), o = Rl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function Bo(e, t) {
  const n = Rl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ys(e, t, n) {
  return Bo(e, F0(e, t).map((r) => n * r));
}
function Mu(e, t) {
  const n = Vl(e[t].value), r = Vl(e[t + 1].value), o = us(n, r), a = o < 0 && Rl(r.map((d, b) => d - o * n[b])) <= uf;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = F0(n, r);
  const u = Rl(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function _S(e, t, n, r) {
  const o = Vl(e[n].value), a = Vl(e[n + 1].value), [l, u, d] = Mu(e, n);
  let b = l, y = u;
  const w = t[n + 1] - t[n];
  sa(e, n) && (b = la(t, n, Mu(e, n - 1)[1].map((I) => -I), b).map((I) => I * w)), sa(e, n + 1) && (y = la(t, n + 1, y.map((I) => -I), Mu(e, n + 1)[0]).map((I) => I * w));
  let S, P, x;
  if (d) {
    const I = Math.PI, V = cs(0, us(b, l) / I / 3, I - us(y, u) / I / 3, I, r);
    [S, P, x] = Bo(o, l.map((O) => V * O / I));
  } else {
    const I = Ys(Bo(o, b.map((j) => j / 3)), Bo(a, y.map((j) => -j / 3)), r), V = Ys(Bo(o, b.map((j) => r * j / 3)), I, r), O = Ys(I, Bo(a, y.map((j) => -(1 - r) * j / 3)), r);
    [S, P, x] = Ys(V, O, r);
  }
  const v = Math.hypot(S, x), F = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= hS ? F + ($ - F) * r : df(Math.atan2(S, x) * 180 / Math.PI, F, $, r), pitch_deg: Math.atan2(P, v) * 180 / Math.PI };
}
function wS(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = O0(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function xS(e, t, n, r) {
  return O0(e, t, e.map((o) => o.value), n, r);
}
const SS = { position: gS, rotation: vS, direction: _S, size: wS };
function qt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Ws(e[t].value);
  if (n <= r[0].frame + ro) return Ws(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - ro) return Ws(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + ro; ) a += 1;
  const l = r[a];
  if (Math.abs(n - l.frame) <= ro || l.easing === "hold") return Ws(l.value);
  const u = r.map((b) => b.frame), d = mS(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (SS[t] ?? xS)(r, u, a, d);
}
function pf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function kS(e) {
  return Math.min(1, Math.max(0, e));
}
function T0(e) {
  return Math.max(1e-6, e);
}
function D0(e, t) {
  return t - (e.start - e.in);
}
function Ci(e, t) {
  return t >= e.start - ro && (e.duration === null || t < e.start + e.duration - ro);
}
function sd(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = D0(o.clip, n);
  return {
    frame: n,
    camera: {
      position: qt(r, "position", n),
      ...qt(r, "rotation", n),
      hFOV_deg: pf(qt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Ci(o.clip, n),
      clip_frame: a,
      position: qt(o, "position", a),
      ...qt(o, "rotation", a),
      scale: T0(qt(o, "scale", a))
    },
    stickers: e.stickers.map((l) => fo(l, n))
  };
}
function MS(e, t) {
  if (e.placement === "world")
    return {
      position: qt(e, "position", t),
      ...qt(e, "rotation", t),
      scale: T0(qt(e, "scale", t))
    };
  const n = qt(e, "size", t);
  return {
    ...qt(e, "direction", t),
    roll_deg: qt(e, "roll", t),
    hFOV_deg: pf(n.hFOV_deg),
    vFOV_deg: pf(n.vFOV_deg)
  };
}
function fo(e, t) {
  const n = D0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Ci(e.clip, t),
    clip_frame: n,
    ...MS(e, n),
    opacity: kS(qt(e, "opacity", n))
  };
}
const NS = 2, PS = ["sky", "world"], AS = ["input", "output", "temp"], L0 = [0.42, 0, 0.58, 1];
function on(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Yt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function $l(e, t) {
  const n = Yt(e, t);
  return n !== null && n > 0 ? n : t;
}
function ir(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function po(e) {
  const t = Yt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function cm(e, t) {
  return typeof e == "boolean" ? e : t;
}
function R0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Yt(n, null));
  return t.includes(null) ? null : t;
}
function V0(e) {
  return R0(e) || [0, 0, 0];
}
function $0(e) {
  const t = on(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: ir(Yt(t.pitch_deg, 0), -90, 90),
    roll_deg: Yt(t.roll_deg, 0)
  };
}
function CS(e) {
  return ir(Yt(e, 90), 0.1, 179);
}
function IS(e) {
  return $l(e, 1);
}
function ES(e) {
  const t = on(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: ir(Yt(t.pitch_deg, 0), -90, 90)
  };
}
function OS(e) {
  return Yt(e, 0);
}
function FS(e) {
  const t = on(e) ? e : {};
  return {
    hFOV_deg: ir(Yt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: ir(Yt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function z0(e) {
  return ir(Yt(e, 1), 0, 1);
}
const ld = [["position", V0], ["rotation", $0], ["fov", CS]], pc = [["position", V0], ["rotation", $0], ["scale", IS]], cd = [["direction", ES], ["roll", OS], ["size", FS], ["opacity", z0]], ud = [...pc, ["opacity", z0]];
function TS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Yt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...L0];
}
function DS(e) {
  if (!on(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = R0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function LS(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!on(o)) continue;
    const a = po(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: TS(o.easing) }, u = n ? DS(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function hf(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = on(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: LS(a.keyframes, o, r === "position") };
  }
  return n;
}
function j0(e) {
  const t = on(e) ? e : {}, n = po(t.start), r = po(t.in), o = po(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function RS(e) {
  const t = on(e) ? e : {}, n = ir(Yt(t.x0, 0), 0, 1), r = ir(Yt(t.y0, 0), 0, 1), o = ir(Yt(t.x1, 1), 0, 1), a = ir(Yt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function VS(e) {
  if (!on(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: AS.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function $S(e) {
  const t = VS(e.source);
  if (!t) return null;
  const n = PS.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: j0(e.clip),
    visible: cm(e.visible, !0),
    locked: cm(e.locked, !1),
    crop: RS(e.crop),
    ...hf(e, r ? ud : cd)
  };
  return r || (o.z_index = po(e.z_index) ?? 0), o;
}
function zS(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = on(a) ? $S(a) : null;
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
function zl(e) {
  const t = on(e.timeline) ? e.timeline : {}, n = on(e.camera) ? e.camera : {}, r = on(e.scene) ? e.scene : {}, o = po(t.length);
  return {
    version: NS,
    timeline: {
      fps: $l(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: $l(n.aspect, 1), ...hf(n, ld) },
    scene: { clip: j0(r.clip), ...hf(r, pc) },
    stickers: zS(e.stickers),
    painting: ea(e.painting),
    painting_layer: on(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function jS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!on(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function HS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!on(t)) return {};
  const n = ir(Yt(t.hFOV_deg, 90), 1, 179), r = ir(Yt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function GS(e) {
  const t = on(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(on) : [];
  return n.sort((r, o) => Yt(r.z_index, 0) - Yt(o.z_index, 0)), zl({
    camera: HS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: jS(r, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return zl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!on(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? GS(t) : zl(t);
}
function Nu(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function um(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function H0(e, t) {
  if ($l(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => po(l * n), { length: o } = e.timeline, a = um(e.scene.clip, r);
  return zl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...Nu(e.camera, ld, r, 0, 0) },
    scene: { clip: a.clip, ...Nu(e.scene, pc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = um(l.clip, r), y = l.placement === "world" ? ud : cd;
      return { ...l, clip: u, ...Nu(l, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Pu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function G0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function fd(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ro);
}
function K0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? G0(e.keyframes[r - 1].easing) : [...L0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function or(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Pu(o.value, r);
    return;
  }
  const a = fd(o, n);
  a ? a.value = Pu(a.value, r) : K0(o, n, Pu(qt(e, t, n), r));
}
function bo(e) {
  return e.placement === "world" ? ud.map(([t]) => t) : e.placement === "sky" ? cd.map(([t]) => t) : (e.clip ? pc : ld).map(([t]) => t);
}
function KS(e, t) {
  for (const n of bo(e))
    fd(e[n], t) || K0(e[n], t, qt(e, n, t));
}
function BS(e) {
  const t = bo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function WS(e, t) {
  return bo(e).every((n) => !!fd(e[n], t));
}
function US(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = qt(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function YS(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const l of t) {
    const u = e[l], d = u.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), b = new Set(d.map((y) => y.frame));
    u.keyframes = [
      ...u.keyframes.filter((y) => !a.has(y.frame) && !b.has(y.frame)),
      ...d
    ].sort((y, w) => y.frame - w.frame);
  }
  return r;
}
function B0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function XS(e, t, n) {
  const r = B0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function qS(e, t, n, r) {
  for (const o of B0(e, t, n)) o.easing = G0(r);
}
function JS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function ZS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function QS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function fm(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function mf(e) {
  return bo(e).map((t) => e[t]);
}
function gf(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => mf(t).some((n) => n.keyframes.length > 0)) || !fm(e.scene.clip) || e.stickers.some((t) => !fm(t.clip));
}
function W0(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of mf(e.camera))
    for (const l of a.keyframes) o = Math.max(o, l.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: l } = a;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of mf(a))
      for (const d of u.keyframes) o = Math.max(o, l.start - l.in + d.frame + 1);
  }
  return o;
}
function ek(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Xs = { text: null, parsed: null };
function Kn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function jl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function tk({
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
    painting: ea(null),
    painting_layer: null,
    ui_settings: jl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function U0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function nk(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function rk(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function ik(e) {
  return Array.isArray(e) ? e.map((t) => M0(t)) : [];
}
function ok(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Y0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = tk(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Xs.text === o ? a = Xs.parsed : (a = JSON.parse(o), Xs = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const l = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: nk(a.assets),
      stickers: rk(a.stickers),
      shots: ik(a.shots),
      painting: ea(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: jl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = jl({ ...u.ui_settings, ...l })), u.output_preset = U0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Kn(n.coverage), delete u.editor_history, u;
  } catch {
    return Xs = { text: o, parsed: null }, r;
  }
}
function dm(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function ak(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function sk(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function X0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = mo(e);
  } catch {
    d = mo(null);
  }
  return u && u !== d.timeline.fps && (d = H0(d, u)), {
    ...d,
    coverage: Kn(o),
    bg_color: r,
    output_preset: U0(n),
    ui_settings: jl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function lk(e, t) {
  const n = H0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of bo(a)) a[u].keyframes = l[u].keyframes;
    }
}
function dd(e, t) {
  const n = fo(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const ck = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function pm(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function uk(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[ck[n]].keyframes.length));
}
function q0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = pm(n, ["yaw_deg", "pitch_deg"]), a = pm(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && or(e, "direction", r, o), n.rot_deg !== void 0 && or(e, "roll", r, n.rot_deg), Object.keys(a).length && or(e, "size", r, a);
}
const hc = ["position_x", "position_y", "position_z"];
function fk(e, t) {
  const n = qt(e, "position", t), r = qt(e, "rotation", t);
  return {
    ...Object.fromEntries(hc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: qt(e, "fov", t)
  };
}
function dk(e, t, n, r) {
  const o = hc.indexOf(n);
  if (o >= 0) {
    const a = qt(e, "position", t);
    a[o] = r, or(e, "position", t, a);
  } else n === "hFOV_deg" ? or(e, "fov", t, r) : or(e, "rotation", t, { [n]: r });
}
function pk(e, t, n) {
  or(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function hk(e, t) {
  const n = fo(e, t);
  return {
    ...Object.fromEntries(hc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function mk(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = hc.indexOf(n);
  if (a >= 0) {
    const l = qt(e, "position", o);
    l[a] = r, or(e, "position", o, l);
  } else n === "scale" ? or(e, "scale", o, r) : n === "opacity" ? or(e, "opacity", o, r / 100) : or(e, "rotation", o, { [n]: r });
}
function gk(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && or(e, o, r, n[o]);
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
function pl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function J0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function pd(e, t, n, r) {
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
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Bt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function yf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Z0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Q0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function ey(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? mo(t) : t);
}
function ty(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(mo(n)) === t;
  } catch {
    return !1;
  }
}
const Au = 0.15, _k = 0.01, wk = 1e-3, xk = 0.05, Sk = 4, hm = 250, kk = 16, io = 1, Mk = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function lr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Vr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function hd(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function pa(e, t, n = 0) {
  const r = Xn(e, t, n), o = Vr(r, 2);
  return { right: Vr(r, 0), up: Vr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function Nk(e, t) {
  return e === "6dof" ? t : { ...t, position: [0, 0, 0] };
}
function ny(e, t) {
  return t === "3dof" ? { mode: t, position: [0, 0, 0], moved: !1 } : { ...e, mode: t };
}
function Pk(e, t) {
  return t || e.mode === "3dof" ? e : ny(e, "3dof");
}
function Ak(e) {
  return lr(e.position, pa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function vo(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ry(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function mc(e, t) {
  return ry(vo(t, e.position), pa(e.yaw_deg, e.pitch_deg).forward);
}
function Ck(e, t, n = null, r = io) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * xk;
  if (n && mc(e, n) > 0) {
    const a = vo(n, e.position), l = Math.hypot(...a);
    return l >= o ? n : lr(e.position, a, o / l);
  }
  return lr(e.position, pa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Ik(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Sk ? !1 : t.time - e.time < hm || e.cost > kk && t.time - e.wheelTime < hm;
}
function md(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Ht);
  return { tanX: r, tanY: r * n / t };
}
function Ek(e, t, n, r, o = Ak(e)) {
  const a = Bt(e.yaw_deg + t / r * 360), l = Z(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Xn(e.yaw_deg, e.pitch_deg, 0), d = Xn(a, l, 0), b = vo(e.position, o), y = [0, 1, 2].map((S) => ry(Vr(u, S), b)), w = { ...e, yaw_deg: a, pitch_deg: l, position: lr(o, hd(d, y)) };
  return { ...w, distance: mc(w, o) };
}
function Ok(e, t, n, r, o, a = e.distance) {
  const { right: l, up: u } = pa(e.yaw_deg, e.pitch_deg), d = 2 * a * md(e, r, o).tanY / o;
  return { ...e, position: lr(lr(e.position, l, -t * d), u, n * d), distance: a };
}
function Fk(e, t, n, r = io) {
  const o = vo(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const l = Math.max(r, 1e-6), u = l * _k, d = n > 0 ? Math.min(Math.max(a * Au, u), a - l * wk) : -Math.max(a * Au / (1 - Au), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: lr(e.position, o, d / a) };
  return { ...b, distance: mc(b, t) };
}
function Tk(e, t, n, r) {
  const { tanX: o, tanY: a } = md(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = pa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: lr(t.center, d, -u), distance: u };
}
function Cu(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: io }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(md(e, t, n).tanY) * an,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function mm(e, t, n, r) {
  const { right: o, up: a, forward: l } = Dk(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Ht), y = b * e.aspect, w = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], S = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + w / d / y), y: r * 0.5 * (1 - S / d / b), z: d };
}
function Dk(e) {
  const t = ls(e.quaternion), n = Vr(t, 2);
  return { right: Vr(t, 0), up: Vr(t, 1), forward: n.map((r) => -r) };
}
function gm(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function Lk({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function iy(e, t) {
  if (!e || !t.active) return null;
  const n = $k(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: oy(t),
    itemQuaternion: e.kind === "splat" ? Mk : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Rk(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], l = iy(e, a);
  return l && { ...l, id: o.id, opacity: a.opacity, value: a };
}
function Vk(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function $k(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function oy(e) {
  return {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function ym(e, t) {
  return lr(e.position, hd(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function bm(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function vm({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function zk(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function jk(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...vm(t).map((a) => ym(e.scene, a)));
  for (const a of n) o.push(...ay(a));
  for (const { box: a, value: l } of r) o.push(...vm(a).map((u) => ym(l, u)));
  return o;
}
function Hk(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Xn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function ay(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => lr(e.position, hd(e.rotation, [r, o, 0])));
}
const Gk = 2, Kk = 0.5, Bk = 30;
function Wk(e, t) {
  const n = vo(t, e), r = Math.atan2(n[0], -n[2]) * an, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * an;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function Uk(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * Kk : Gk, a = t ? [...t] : lr(e.position, pa(e.yaw_deg, e.pitch_deg).forward, o), l = Math.hypot(...vo(a, e.position)), u = l > 0 ? Wk(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(l, 1e-3) * Math.tan(Bk * 0.5 * Ht);
  return { position: a, rotation: u, scale: d };
}
function _m(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function Yk(e) {
  return [0, 1, 2].map((t) => Vr(e, t));
}
function Xk(e, t, n, r) {
  if (e === "translate") return { position: lr(t.position, vo(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Zk(n.scale, r.scale) / n.scale };
  const o = _m(ls(r.quaternion), Yk(ls(n.quaternion))), a = _m(o, Xn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: l, pitchDeg: u, rollDeg: d } = I0(a);
  return Math.abs(u) <= qk ? { rotation: { yaw_deg: l + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: Jk(a, t.yaw_deg) } };
}
const qk = 89.9;
function Jk(e, t) {
  const n = Vr(e, 0), r = Vr(e, 1), o = Math.cos(t * Ht), a = Math.sin(t * Ht);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * an + 0;
}
function Zk(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, l) => Math.abs(l - e) > Math.abs(a - e) ? l : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function Qk(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const wm = 2048, sy = 0.28;
function ly(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Ht);
  return {
    quaternion: yo(Xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * an,
    aspect: r
  };
}
function hl(e) {
  const t = pi(e);
  return {
    quaternion: yo(Xn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function eM(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = ad(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * an,
      vFOV_deg: 2 * Math.atan(a / r) * an
    }
  };
}
function cy(e, t, n) {
  const [[r, o, a], [l, u, d], [b, y, w]] = ls(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * Ht), P = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(x, v = 1e-4) {
      const F = pS(x), $ = r * F.x + l * F.y + b * F.z, W = o * F.x + u * F.y + y * F.z, I = -(a * F.x + d * F.y + w * F.z), V = Math.max(I, v);
      return {
        x: t * 0.5 * (1 + $ / V / P),
        y: n * 0.5 * (1 - W / V / S),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(x, v) {
      const F = (x / t * 2 - 1) * P, $ = (1 - v / n * 2) * S;
      return rd(dl({
        x: r * F + o * $ - a,
        y: l * F + u * $ - d,
        z: b * F + y * $ - w
      }));
    }
  };
}
function tM(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = sd(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const w = n(u);
    if (!w) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * Ht), P = Math.tan(b.vFOV_deg * 0.5 * Ht), { crop: x } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
      opacity: y ? sy : b.opacity,
      zIndex: r(u),
      quaternion: yo(Xn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * x.x0 - 1) * S,
        x1: (2 * x.x1 - 1) * S,
        y0: (1 - 2 * x.y1) * P,
        y1: (1 - 2 * x.y0) * P
      }
    });
  });
  for (const u of o) l.push({ kind: "erp", ...u });
  return l.sort((u, d) => u.zIndex - d.zIndex);
}
function uy(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return tM(e, t, {
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
function nM(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function rM(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = sd(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), w = y ? r(y) : null;
    if (!w) return;
    const { width: S, height: P } = nM(w.media), x = Hk(b, u.crop, S, P);
    x && l.push({
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
      opacity: b.opacity,
      position: x.position,
      quaternion: x.quaternion,
      rotation: x.rotation,
      width: x.width,
      height: x.height,
      crop: u.crop
    });
  }), l;
}
const Iu = /* @__PURE__ */ new WeakMap();
let iM = 1;
function bf(e) {
  return Iu.has(e) || Iu.set(e, iM++), Iu.get(e);
}
function xm(e) {
  return e && typeof e == "object" ? bf(e) : e;
}
function Sm({ background: e, layers: t }) {
  return JSON.stringify([
    e && [bf(e.media), xm(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, bf(n.media), xm(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function oM({ onReady: e, onFailed: t, onUpdate: n = () => {
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
    gizmoPointer(l, u, d, b, y, w) {
      return r ? r.gizmoPointer(l, u, d, b, y, w) : null;
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
const fy = "3D view unavailable. Check the browser console.";
function Hl(e, t, n) {
  return ly({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function aM(e) {
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
const dy = aM(
  () => import("./.lazy/pano_three_view-I4xKe56s.js").then((e) => e.$).then((e) => e.createThreeView())
), Di = ["erp_image", "bg_erp", "bg_media"], gd = ["sticker_image", "sticker"], py = ["scene"], sM = {
  background: Di,
  "external-sticker": gd,
  scene: py
};
function hy(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function my(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = hy(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function lM(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function gy(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function cM(e, t) {
  const { graph: n, entry: r } = gy(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = hy(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const yy = [...Di, ...gd, ...py], uM = 256, Wo = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new WeakMap();
let by = () => null;
function vy(e) {
  return Eu.has(e) || Eu.set(e, JSON.stringify(e)), Eu.get(e);
}
function fM(e) {
  by = e;
}
function Gl(e, t) {
  const n = vy(e);
  Wo.delete(n), Wo.set(n, t), Wo.size > uM && Wo.delete(Wo.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? by(e) : null;
  if (!n) return !0;
  const r = my(e);
  let o = Wo.get(vy(n));
  if (o)
    Gl(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => yy.includes(l == null ? void 0 : l.name)))) return !0;
    Gl(n, r), o = r;
  }
  return sM[t].every((l) => o[l] === r[l]);
}
const Kl = /* @__PURE__ */ new WeakSet();
async function vf(e, t) {
  if (Kl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Kl.add(e), n.ok && r !== void 0 ? r : null;
}
function _y(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = gy(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => yy.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: cM(n, t) };
}
const ml = /* @__PURE__ */ new Map();
function dM(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && ml.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await vf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = _y(o, a);
        l && Gl(l.output, l.inputs);
      }
    });
}
const pM = 5;
function hM(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${pM}`, r = vf(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, vf(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, y, w, S;
      const d = String(l.id);
      for (const { id: P } of await r) {
        if (!u()) return null;
        const x = await a(P);
        if ((b = x == null ? void 0 : x.outputs) != null && b[d])
          return ((S = (w = (y = x.workflow) == null ? void 0 : y.prompt) == null ? void 0 : w[d]) == null ? void 0 : S.class_type) !== l.comfyClass ? null : _y(x, d);
      }
      return null;
    }
  };
}
function mM(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let Vo = null;
async function gM(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Kl.has(n) || (u = ml.get(o)) != null && u.has(r) || mM(t)) return null;
  (Vo == null ? void 0 : Vo.workflowId) !== o && (Vo = { workflowId: o, history: hM(n, o) }, queueMicrotask(() => {
    Vo = null;
  }));
  const l = await Vo.history.lastNodeOutput(e, a);
  return a() ? l ? (Gl(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (Kl.has(n) || ml.set(o, (ml.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function km(e, t, n, r = Di) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const Mm = /\.(mp4|webm|mov|m4v|mkv)$/i;
function gl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Mm.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Mm.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ou = /* @__PURE__ */ new WeakMap();
function yM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function _f(e) {
  return yM(e) ? (Ou.has(e) || Ou.set(e, Math.random().toString(36).slice(2, 10)), Ou.get(e)) : "run";
}
function wy(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function bM(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function yd(e, t = [], n = null) {
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
function vM({
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
  }, y = () => o(), w = () => {
    o(), d();
  }, S = () => o();
  let P = !1;
  const x = () => {
    P = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", w), r.addEventListener("pause", S), r.addEventListener("error", x), r.src = t, r.load(), { video: r, destroy: () => {
    var $, W;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", w), r.removeEventListener("pause", S), r.removeEventListener("error", x), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (W = r.load) == null || W.call(r));
  }, failed: () => P };
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
function _M(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Nm(e, t, n = null) {
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
  return !r && n != null && (r = _M(e == null ? void 0 : e.graph, n)), r;
}
function wM(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function xM(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function SM(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function xy({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const j = String(O[0] || "").trim();
      if (j)
        return Ui(t, {
          filename: j,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const K of O) {
        const Q = o(K);
        if (Q) return Q;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Ui(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const j = String(O.type || "").trim().toLowerCase();
    if (j === "dataurl") return String(O.value || "");
    if (j !== "comfy_image") return "";
    const K = String(O.filename || "").trim();
    return K ? Ui(t, {
      filename: K,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, l = (O) => {
    const j = e == null ? void 0 : e.nodeOutputs;
    if (!j || O == null) return null;
    const K = String(O);
    return j instanceof Map ? j.get(O) || j.get(K) || j.get(Number(K)) || null : j[O] || j[K] || null;
  }, u = (O, j) => {
    var Q;
    const K = l(O == null ? void 0 : O.id);
    return Array.isArray((Q = K == null ? void 0 : K.ui) == null ? void 0 : Q[j]) ? K.ui[j] : Array.isArray(K == null ? void 0 : K[j]) ? K[j] : [];
  }, d = (O, j) => {
    const K = l(O == null ? void 0 : O.id);
    return K != null && K.ui && Object.prototype.hasOwnProperty.call(K.ui, j) ? K.ui[j] : K && Object.prototype.hasOwnProperty.call(K, j) ? K[j] : null;
  }, b = (O, j) => {
    const K = d(O, "pano_sticker_input_state_hash"), Q = Array.isArray(K) ? K[0] : K;
    return String(Q ?? "").trim() || SM(j);
  }, y = (O) => {
    const j = [], K = /* @__PURE__ */ new Set();
    for (const Q of O || []) {
      const _e = o(Q);
      !_e || K.has(_e) || (K.add(_e), j.push(_e));
    }
    return j;
  }, w = (O, j) => {
    var _e;
    const K = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && K.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && K.push(O.ui.images);
    const Q = [];
    for (const T of K)
      j >= 0 && j < T.length && Q.push(T[j]), Q.push(...T);
    return Q;
  }, S = (O, j) => {
    var ee;
    const K = String(j || "").trim();
    if (!K) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === K);
    if (_e < 0) return { src: "", sourceType: "", inputName: K };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: K };
    const C = T.origin_id, ce = Nm(O, _e, C);
    if (!ce) return { src: "", sourceType: "", inputName: K };
    const de = Number(T.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ce) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const Y = [];
      de >= 0 && de < pe.length && Y.push(pe[de]), Y.push(...pe);
      const Ie = y(Y.filter((Oe) => !gl(Oe)));
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "appNodeImageUrls", inputName: K };
    }
    const U = l((ce == null ? void 0 : ce.id) ?? C), X = y(w(U, de).filter((Y) => !gl(Y))).map((Y) => `${Y}&pano_src=${_f(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: K };
    const H = Array.isArray(ce == null ? void 0 : ce.imgs) ? ce.imgs : [];
    if (H.length) {
      const Y = [];
      de >= 0 && de < H.length && Y.push(H[de]), Y.push(...H);
      const Ie = y(Y);
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "nodeImgs", inputName: K };
    }
    const A = (ee = ce == null ? void 0 : ce.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (A) {
      let Y = o(A.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (ce.comfyClass === "LoadImage" || ce.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: K };
    }
    return { src: "", sourceType: "", inputName: K };
  }, P = (O, j = []) => {
    var Q;
    const K = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of j) {
      const T = K.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === _e), C = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const ce = l(((Q = Nm(O, T, C.origin_id)) == null ? void 0 : Q.id) ?? C.origin_id), de = (Array.isArray(ce == null ? void 0 : ce.images) ? ce.images : []).find(gl);
      return de ? `${Ui(t, de)}&pano_src=${_f(ce)}` : "";
    }
    return "";
  }, x = (O, j = []) => {
    const K = Array.isArray(j) ? j : [j];
    for (const Q of K) {
      const _e = S(O, Q);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const j = String(O || "").trim();
    if (!j) return [];
    if (wM(j)) return [j];
    const { filename: K, subfolder: Q } = xM(j);
    return K ? y([
      Ui(t, { filename: K, subfolder: Q, type: "temp" }),
      Ui(t, { filename: K, subfolder: Q, type: "output" }),
      Ui(t, { filename: K, subfolder: Q, type: "input" }),
      j
    ]) : [j];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var j, K;
      try {
        (K = (j = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : j.forEach) == null || K.call(j, (Q, _e, T) => {
          var C;
          Q != null && Q.img && ((C = r == null ? void 0 : r.isImageLoadFailed) != null && C.call(r, Q.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, j) => {
      var K;
      (K = O == null ? void 0 : O.delete) == null || K.call(O, `__ui__${String(j || "")}`);
    },
    linkedValue: (O, j) => {
      var C, ce, de, pe;
      const K = String(j || ""), Q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === K) : -1, _e = Q >= 0 && O.graph ? O.getInputLink(Q) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (ce = U == null ? void 0 : U.data) == null ? void 0 : ce.result,
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
    linkedVideoFile: P,
    loadPreferredExactLinkedImage: (O, j = [], K = null, Q = "") => {
      var Mt;
      const _e = Array.isArray(j) ? j : [j], T = x(O, _e), ce = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((yt) => String(yt || "").trim()).filter(Boolean);
      if (!ce.length) return null;
      const de = y(ce.flatMap((yt) => v(yt)));
      if (!de.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const pe = String(Q || _e.join("|") || "image_exact"), U = ce.join(`
`), X = O.__panoLinkedInputImageCache.get(pe);
      if (X && X.srcRaw === U && X.img) return X.img;
      const H = n || globalThis.Image;
      if (typeof H != "function") return null;
      const A = new H();
      (Mt = r == null ? void 0 : r.markImageLoading) == null || Mt.call(r, A, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: A };
      O.__panoLinkedInputImageCache.set(pe, ee);
      let Y = -1;
      const Ie = (yt) => {
        var un, at, qn;
        yt === "ready" ? (un = r == null ? void 0 : r.markImageReady) == null || un.call(r, A, U) : (at = r == null ? void 0 : r.markImageFailed) == null || at.call(r, A, U), K == null || K(A), (qn = O.setDirtyCanvas) == null || qn.call(O, !0, !0);
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
    resolvePreferredExactLinkedSource: x,
    source: o,
    uiImage: (O, j, K, Q = null) => {
      var U, X, H;
      const _e = u(O, j)[0] || null, T = o(_e);
      if (!T) return null;
      const C = `__ui__${j}`, ce = (U = K == null ? void 0 : K.get) == null ? void 0 : U.call(K, C);
      if (ce && ce.__panoSrc === T) return ce;
      const de = n || globalThis.Image;
      if (typeof de != "function") return null;
      const pe = new de();
      return pe.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, pe, T), pe.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, pe, T), Q == null || Q(pe);
      }, pe.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, pe, T), Q == null || Q(pe);
      }, pe.src = T, (H = K == null ? void 0 : K.set) == null || H.call(K, C, pe), pe;
    },
    uiList: u,
    uiValue: d
  };
}
const kM = 1e-3;
function Sy(e, t, n, r) {
  if (!Ci(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(kM / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function ky(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function MM(e, t) {
  return Math.floor(e * t.fps);
}
function My(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Pm = 4;
function Ny({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((S, P) => S !== n[P])) && (n = l, r.clear(), o = null), u === null) return null;
      const y = MM(u, d);
      for (let S = y; S < Math.min(n.length, y + Pm + 1); S += 1) a(S);
      for (const S of r.keys())
        (S < y || S > y + Pm) && S !== o && r.delete(S);
      const w = r.get(y);
      return w != null && w.complete && w.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function Py({
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
    updateGesture(w) {
      if (d) return !1;
      l || this.beginGesture();
      const S = t(l, w);
      return S.changed ? (l = S.state, u = !0, r(l), y(), !0) : !1;
    },
    hasGestureChanges() {
      return l != null && u;
    },
    commitGesture() {
      if (d || !l) return !1;
      const w = u;
      return w && o(l), l = null, u = !1, r(null), y(), w;
    },
    cancelGesture() {
      return d || !l ? !1 : (l = null, u = !1, r(null), y(), !0);
    },
    apply(w) {
      if (d) return !1;
      l && this.commitGesture();
      const S = t(e(), w);
      return S.changed ? (o(S.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const w = l != null;
      l = null, u = !1, w && r(null);
    }
  };
}
const yl = "sticker_image_1", Ay = "external_image", ca = 0;
function ta(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Fu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Fi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function wf(e, t = ca) {
  return (e == null ? void 0 : e.version) !== 2 ? Fi(e) : Fi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: fo(n, t).active,
    external: n.source.kind === "port",
    ...dd(n, t)
  }));
}
function bd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Fi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Cy(e) {
  return String((e == null ? void 0 : e.id) || "") === yl || String((e == null ? void 0 : e.source_kind) || "") === Ay;
}
function vd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Cy(t);
}
const Iy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Ey(e) {
  return !Cy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Iy.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Oy(e) {
  const t = Ey(e);
  return t ? Iy.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Fy(e, t = {}) {
  var V, O, j;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((K) => String((K == null ? void 0 : K.id) || "") === yl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const K = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === yl;
    return {
      state: {
        ...e,
        stickers: n.filter((Q, _e) => _e !== r),
        active: K ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, w = Math.max(1, d), S = Math.max(1, b), P = t.pose && typeof t.pose == "object" ? t.pose : {}, x = u ? P.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || P.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(x)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const K = ta(v, w, S), Q = Number(((O = l == null ? void 0 : l.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = ta(Q, w, S), T = Number(((j = l == null ? void 0 : l.initial_pose) == null ? void 0 : j.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - K) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((C, ce) => ce === r ? {
          ...C,
          vFOV_deg: K,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: _e } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const F = n.reduce((K, Q) => Math.max(K, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), $ = {
    yaw_deg: Number(P.yaw_deg || 0),
    pitch_deg: Number(P.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: y ? ta(v, w, S) : Number(P.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(P.rot_deg ?? P.roll_deg ?? 0)
  }, W = {
    ...l || {},
    id: yl,
    source_kind: Ay,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: F + 1
  }, I = r >= 0 ? n.map((K, Q) => Q === r ? W : K) : [...n, W];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function Am(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const NM = ["IMAGE", "VIDEO"];
function Cm(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => NM.includes(n)) ? "2d" : null;
}
function PM(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Cm(r.type) ?? Cm((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Ty(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Am(e, "sticker"),
    awaitingPose: !t && (Am(e, "sticker_state") || PM(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Im(e, t) {
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
function Dy(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((F) => vd(e, F)), u = l >= 0 ? e.stickers[l] : null;
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
    const F = { ...Im(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map(($, W) => W === l ? F : $) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const F = [u.size.value, ...u.size.keyframes.map((I) => I.value)], $ = F.map((I) => ta(I.hFOV_deg, o, a));
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
    return { state: { ...e, stickers: [...e.stickers, Im(`sticker_${y}`, r)] }, changed: !0 };
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), S = (F) => d ? ta(F, o, a) : F, P = pd(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: S(w)
  }, Fi(e).reduce((F, $) => Math.max(F, $.z_index), -1) + 1), x = (r == null ? void 0 : r.keyframes) ?? {};
  return P.direction.keyframes = x.direction ?? [], P.roll.keyframes = x.roll ?? [], P.size.keyframes = (x.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: S(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, P] }, changed: !0 };
}
function _d(e) {
  const t = Fi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Fu(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Fu(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Fu(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function Ly(e) {
  const t = bd(e), n = vd(e, t), r = Fi(e).some((u) => u && u.visible !== !1), o = _d(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Oy(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function AM(e) {
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
function Em(e, t) {
  const n = bd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = AM(e), o = String(n.id || ""), a = _d(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function CM(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function IM(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Fy(e, t.value);
  if (t.type === "sync-port") return Dy(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === a))
      return { state: e, changed: !1 };
    const d = _d(e).reduce((S, P) => Math.max(S, Number(P.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ta(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, pd(a, pl(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const w = { id: a, asset_id: l, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [l]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], w],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Fi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = bd(e);
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
    const o = Ey(n);
    return !o || !Oy(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Em(e, "front");
  if (t.type === "send-back") return Em(e, "back");
  if (t.type === "delete-selected") {
    if (vd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Fi({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = CM(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? dd(n, ca) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = uk(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return q0(b, ca, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
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
function EM(e = {}) {
  return Py({
    ...e,
    reduce: IM,
    projectModel: Ly
  });
}
const xf = 2;
function Qi(e, t) {
  return Math.floor(e * t + 0.5);
}
function OM(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Ry({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, y = !1, w = { name: "idle" }, S = [];
  const P = () => b && !y, x = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of S) ee();
    S = [];
  }
  function F(ee, Y = {}) {
    return v(), w = { name: ee, ...Y }, u(), w;
  }
  function $(ee, Y, Ie) {
    const Oe = () => {
      w === ee && Ie();
    };
    e.addEventListener(Y, Oe), S.push(() => e.removeEventListener(Y, Oe));
  }
  function W(ee, Y) {
    let Ie = t.requestFrame(function Oe(Mt) {
      w === ee && (Y(Mt), w === ee && (Ie = t.requestFrame(Oe)));
    });
    S.push(() => t.cancelFrame(Ie));
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
  function j() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function K(ee) {
    if (!P()) return ee === "play" ? ce() : V();
    if (e.readyState < xf) {
      const Y = F("loading", { then: ee });
      return $(Y, "loadeddata", () => K(Y.then)), $(Y, "error", O), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? ce() : Q(ee, !1);
  }
  function Q(ee, Y) {
    const Ie = j();
    if (!e.ended && Qi(Number(e.currentTime), n()) === Qi(Ie, n())) return _e(ee);
    const Oe = F("seeking", { then: ee, frame: d, retried: Y });
    return $(Oe, "seeked", () => {
      const Mt = Qi(Number(e.currentTime), n()) === Qi(j(), n()), yt = d === Oe.frame;
      Mt || yt && Oe.retried ? _e(Oe.then) : Q(Oe.then, yt);
    }), $(Oe, "error", O), e.currentTime = Ie, Oe;
  }
  function _e(ee) {
    return ee === "play" ? T() : (l(), V());
  }
  function T() {
    const ee = F("playingVideo", { shown: !1 });
    if ($(ee, "pause", () => e.ended ? C() : U()), $(ee, "ended", C), $(ee, "error", O), o() && Qi(Number(e.duration), n()) >= r()) {
      const Ie = e.loop;
      e.loop = !0, S.push(() => {
        e.loop = Ie;
      });
    }
    const Y = (Ie, Oe) => {
      Oe && !ee.shown && (ee.shown = !0, u()), de(Qi(Ie, n()));
    };
    if (x()) {
      let Ie = e.requestVideoFrameCallback(function Oe(Mt, yt) {
        w === ee && (Y(Number(yt.mediaTime), !0), w === ee && (Ie = e.requestVideoFrameCallback(Oe)));
      });
      S.push(() => {
        var Oe;
        return (Oe = e.cancelVideoFrameCallback) == null ? void 0 : Oe.call(e, Ie);
      });
    } else
      W(ee, () => Y(Number(e.currentTime), e.readyState >= xf));
    return Promise.resolve(e.play()).catch(() => {
      w === ee && U();
    }), ee;
  }
  function C() {
    l(), ce();
  }
  function ce() {
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
    w.name === "playingVideo" && (v(), e.pause()), I(0), K("play");
  }
  function pe(ee) {
    w.name === "playingVideo" ? (v(), e.pause(), I(Math.max(0, ee)), l()) : I(Math.max(0, ee)), K("still");
  }
  function U() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", u();
    else if (w.name === "playingVideo") {
      v(), e.pause();
      const ee = OM(Number(e.currentTime), n());
      I(Math.min(ee, r() - 1)), l(), d === ee ? V() : K("still");
    } else w.name === "playingClock" && pe(Math.min(d, r() - 1));
  }
  function X() {
    if (!A()) {
      if (d >= r() - 1 && I(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", u();
        return;
      }
      K("play");
    }
  }
  function H(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", I(Y), u();
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), I(Y), K("still");
  }
  function A() {
    return w.name === "playingVideo" || w.name === "playingClock" || w.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return w.name;
    },
    get playing() {
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return w.name === "playingVideo" || w.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return w.name === "playingVideo" && w.shown;
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
      v(), b = !1, w = { name: "idle" };
    }
  };
}
function Vy({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function y(v) {
    l = v, e.currentTime = v;
  }
  function w() {
    const v = d;
    S(), d !== v && n();
  }
  function S() {
    if (!r || o || e.readyState < xf) return;
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
  const P = {
    loadeddata: w,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: w,
    seeked: () => {
      const v = l;
      l = null, !a.playing && v === a.time ? b(v) : w();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [v, F] of Object.entries(P)) e.addEventListener(v, F);
  function x(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: $ = !1, fps: W }) {
      v !== r && (x(v), n()), a = { time: F, playing: $, fps: W }, w();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, F) {
      return !r || o ? F : a.time === null ? null : a.playing && d ? e : u === null ? F : v;
    },
    dispose() {
      for (const [v, F] of Object.entries(P)) e.removeEventListener(v, F);
      x("");
    }
  };
}
function FM(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function TM({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", y = "", w = 0;
  const S = /* @__PURE__ */ new Set();
  let P = null, x = null;
  const v = () => o().timeline.fps, F = (T) => T.stickers.find((C) => C.source.kind === "port"), $ = () => {
    const T = o(), C = F(T);
    return W0(T, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(w * v()) : 0,
        P && C ? ky(C.clip, v(), P.meta) : 0
      )
    });
  }, W = Ry({
    video: e,
    clock: r,
    fps: v,
    span: $,
    loop: () => !0,
    onFrame: a,
    onCapture: l,
    onChange: d
  }), I = () => {
    y === b && Number.isFinite(e.duration) && (w = e.duration);
  }, V = () => {
    y && (S.add(y), d());
  }, O = Vy({ video: t, onCapture: u, onChange: d }), j = Ny({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", I), e.addEventListener("error", V);
  function K(T) {
    T !== y && (y = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), W.setSource(!!T));
  }
  function Q() {
    W.playing && W.stop();
  }
  function _e(T) {
    const C = F(T);
    x = P && C ? Sy(C.clip, W.frame, T.timeline.fps, P.meta) : null, O.follow({
      src: (P == null ? void 0 : P.src) || "",
      time: x,
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
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return P;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, C) {
      return P != null && P.frames ? j.picture(P.frames, x, P.meta, C) : O.picture(T, C);
    },
    toggle() {
      W.playing ? W.stop() : W.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: C, state: ce, sticker: de = null }) {
      if (P = T ? de : null, !T)
        return Q(), K(""), _e(ce), !1;
      for (const A of S)
        C.includes(A) || S.delete(A);
      const pe = C.find((A) => A && !S.has(A)) || "", U = pe !== b;
      U && (b = pe, w = 0), K(b);
      const X = gf(ce) || !!b && W.state !== "error" || !!P;
      return X || Q(), (U || !X || !W.playing && W.frame >= $()) && W.frame !== ca && W.seek(ca), _e(ce), X;
    },
    dispose() {
      W.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", I), e.removeEventListener("error", V), e.pause(), e.removeAttribute("src"), e.load(), y = "";
    }
  };
}
const Bl = Math.PI / 180, Dr = 180 / Math.PI, DM = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), LM = 260;
function Om(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function $y(e, t) {
  return t ? $y(t, e % t) : e;
}
function RM(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = $y(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function fs(e, t) {
  const n = Om(e), r = Om(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: RM(n, r) };
}
function ho(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function zy(e) {
  const t = ho(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ri(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function wd(e, t, n = DM) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, $, W) => {
    const I = F + $, V = Math.max(0, W - 1), O = I > V && I > 0 ? V / I : 1;
    return [F * O, $ * O];
  }, [y, w] = b(d, l, r), [S, P] = b(a, u, o), x = {
    x: y,
    y: S,
    w: Math.max(1, r - y - w),
    h: Math.max(1, o - S - P)
  }, v = id(x, t);
  return {
    x: x.x + (x.w - v.width) * 0.5,
    y: x.y + (x.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: x
  };
}
function VM(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = wd({ width: n, height: r }, 1), a = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Bl * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = C0(d, k0(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), y = $M(b, da(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = od({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function jy(e) {
  return {
    yaw: Bt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Dr),
    pitch: Z(Math.asin(Z(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Dr, -89.9, 89.9)
  };
}
function $M(e, t) {
  const n = jy(e), r = da(n.yaw, n.pitch, 0), o = wu(t, e), a = {
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
    roll: dc(Math.atan2(
      wu(u, r.up),
      wu(u, r.right)
    ) * Dr)
  };
}
function Hy(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = wd({ width: n, height: r }, uo(e)), a = co(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = C0(e, k0(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = jy(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Z(2 * Math.atan(n / (2 * a)) * Dr, 1, 179)
  };
}
function zM(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = co(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: y } = ad(d, u), w = {
    x: a - b,
    y: l - y,
    w: b * 2,
    h: y * 2
  }, S = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, P = r / o, x = Math.tan(cf * Bl), v = P >= 1 ? x : x * P, F = P >= 1 ? x / P : x;
  return {
    focalPx: u,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Dr,
      vFOV_deg: 2 * Math.atan(y / u) * Dr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Dr,
        vFOV_deg: 2 * Math.atan(F) * Dr
      }
    }
  };
}
function $o(e, t) {
  const n = ho(e);
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
function jM(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = co(n, e);
    return od(id(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: fl(a, t) };
}
function Fm(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = fs(t, n);
  if (!a) return e;
  const l = uo(e) >= 1;
  r && a.ratio >= 1 !== l && (a = fs(a.height, a.width));
  const u = jM(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function Gy(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ho(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = N0({
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
    const r = ho(e);
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
    return $o(e, (r) => Fm(
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
      const a = String(ri(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? fs(a[1], a[2]) : fs(uo(r), 1);
      return l ? Fm(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? $o(e, (o) => {
      const a = dc(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? $o(e, (r) => {
    const o = P0(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? $o(e, (r) => {
    const o = A0(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? $o(e, (r) => {
    const o = Wy(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Ky({
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
  const w = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: w,
    accumulatedRad: 0
  };
}
function By(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + x0(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: S0(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Wy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Bl, d = Math.cos(u), b = Math.sin(u), y = a / n, w = -l / n, S = y * d - w * b, P = y * b + w * d, x = Number(e.pitch_deg || 0) * Bl, v = Math.max(0.25, Math.abs(Math.cos(x)));
  return {
    ...e,
    yaw_deg: Bt(Number(e.yaw_deg || 0) - Math.atan(S) / v * Dr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(P) * Dr, -90, 90)
  };
}
function HM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Py({
    readState: e,
    reduce: Gy,
    projectModel: zy,
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
  keyframe: "keyframe"
}), GM = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, KM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: GM(t[2])
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
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" }
}, Tm = Object.fromEntries(
  Object.entries(BM).map(([e, t]) => [e, {
    name: t.name,
    elements: KM(t.body)
  }])
), It = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Tm, r) ? Tm[r] : null;
    });
    return (r, o) => n.value ? (re(), ue("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ut(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (re(!0), ue(Ye, null, wt(n.value.elements, (a, l) => (re(), ue(Ye, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${l}`
      }, [
        a.tag === "path" ? (re(), ue("path", oi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (re(), ue("circle", oi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (re(), ue("rect", oi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (re(), ue("line", oi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (re(), ue("polyline", oi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (re(), ue("polygon", oi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : dt("", !0)
      ], 64))), 128))
    ], 2)) : dt("", !0);
  }
}, cn = {
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
    const t = e, n = pt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (re(), xr(ww(e.tag), oi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Hg(() => [
        Te(It, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, WM = ["aria-expanded", "disabled"], UM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, YM = ["data-aspect", "disabled", "onClick"], XM = { class: "pano-cutout-aspect-custom" }, qM = ["disabled"], JM = ["disabled"], ZM = ["data-custom-width", "data-custom-height", "disabled"], Uy = {
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
    ]), a = /* @__PURE__ */ Ut("1"), l = /* @__PURE__ */ Ut("1"), u = /* @__PURE__ */ Ut(null), d = pt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = pt(() => {
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
    }), y = pt(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find(($) => $.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    so(y, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], l.value = F[2]);
    }, { immediate: !0 });
    function w(v) {
      r("action", v);
    }
    function S(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = u.value) != null && F.contains(v.target) || w({ type: "close-aspect" }));
    }
    lc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), gs(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function P(v) {
      const [F, $] = String(v.value || "").split(":");
      w({
        type: "set-aspect",
        width: F,
        height: $,
        preserveOrientation: !0
      });
    }
    function x() {
      w({
        type: "set-aspect",
        width: a.value,
        height: l.value,
        preserveOrientation: !1
      });
    }
    return (v, F) => (re(), ue("div", {
      ref_key: "rootElement",
      ref: u,
      class: ut(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (re(), xr(cn, {
        key: 0,
        icon: e.model.aspectIcon || tt(Me).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = ($) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (re(), ue("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = ($) => w({ type: "toggle-aspect" }))
      }, [
        Te(It, {
          icon: e.model.aspectIcon || tt(Me).aspect
        }, null, 8, ["icon"]),
        B("span", null, ot(y.value), 1),
        Te(It, {
          icon: tt(Me).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, WM)),
      Rr(B("div", UM, [
        (re(!0), ue(Ye, null, wt(b.value, ($) => (re(), ue("button", {
          key: $.value,
          class: ut(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (W) => P($)
        }, ot($.label), 11, YM))), 128)),
        B("div", XM, [
          Rr(B("input", {
            "onUpdate:modelValue": F[2] || (F[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, qM), [
            [Jh, a.value]
          ]),
          F[4] || (F[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          Rr(B("input", {
            "onUpdate:modelValue": F[3] || (F[3] = ($) => l.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, JM), [
            [Jh, l.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: x
          }, "Apply", 8, ZM)
        ])
      ], 512), [
        [Ei, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, QM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, eN = {
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
    return (r, o) => (re(), ue("div", {
      class: ut(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ct(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Te(cn, {
        icon: tt(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Ct((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", QM, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (re(!0), ue(Ye, null, wt(tt(n), (a) => (re(), ue("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, ot(a[0]), 1),
          B("span", null, ot(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, tN = {
  class: "pano-view-unavailable",
  role: "status"
}, xd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (re(), ue("div", tN, ot(tt(fy)), 1));
  }
}, nN = { class: "pano-cutout-node-surface" }, rN = ["title", "disabled"], iN = { class: "value" }, oN = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, aN = {
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
    return (r, o) => (re(), ue("div", nN, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Ct(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Ct(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Te(It, {
            icon: tt(Me).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        Te(cn, {
          icon: e.model.hasShot ? tt(Me).delete : tt(Me).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(Uy, {
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
          onDblclick: o[2] || (o[2] = Ct((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Te(It, {
            icon: tt(Me).roll
          }, null, 8, ["icon"]),
          B("span", iN, ot(e.model.rollLabel || "0.0°"), 1)
        ], 40, rN),
        Te(cn, {
          icon: tt(Me).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Te(eN)
      ], 32),
      e.model.hasShot === !1 ? (re(), ue("div", oN, " Choose a view · + Add Frame ")) : dt("", !0),
      e.model.viewUnavailable ? (re(), xr(xd, { key: 1 })) : dt("", !0)
    ]));
  }
}, Yy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Ut(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const w = a;
      return a = void 0, l = !1, { active: !0, intent: w };
    }
    function d(w) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (a = w, l = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(w) {
      var v, F;
      const { active: S, intent: P } = u();
      if (!S) return;
      const x = ((F = (v = w.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (x) {
        r("file-selected", { intent: P, file: x });
        return;
      }
      r("file-cancelled", { intent: P });
    }
    function y() {
      const { active: w, intent: S } = u();
      w && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (w, S) => (re(), ue("input", {
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
}, sN = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, lN = {
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
    return (r, o) => (re(), ue("div", {
      class: ut(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ct(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Te(cn, {
        icon: tt(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Ct((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", sN, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (re(!0), ue(Ye, null, wt(tt(n), (a) => (re(), ue("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, ot(a[0]), 1),
          B("span", null, ot(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, cN = { class: "pano-stickers-node-surface" }, uN = ["disabled"], fN = ["aria-label", "data-tip"], dN = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, pN = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, hN = {
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
    return (l, u) => (re(), ue("div", cN, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Ct(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Ct(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          Te(It, {
            icon: tt(Me).fullscreen
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
          Te(It, {
            icon: tt(Me).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, uN),
        Te(cn, {
          icon: e.model.locked ? tt(Me).lock_closed : tt(Me).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Te(cn, {
          icon: tt(Me).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Te(cn, {
          icon: tt(Me).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Te(cn, {
          icon: e.model.isExternalSelection ? tt(Me).back_initial : tt(Me).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(lN)
      ], 32),
      e.model.playable === !0 ? (re(), ue("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Ct(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Ct(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Te(It, {
          icon: e.model.playing ? tt(Me).pause : tt(Me).play
        }, null, 8, ["icon"])
      ], 40, fN)) : dt("", !0),
      e.model.hasStickers === !1 ? (re(), ue("div", dN, " Add Image to place a sticker ")) : dt("", !0),
      e.model.dropActive === !0 ? (re(), ue("div", pN, "Drop image to add")) : dt("", !0),
      Te(Yy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (re(), xr(xd, { key: 3 })) : dt("", !0)
    ]));
  }
}, Dm = 24;
function mN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Lm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function gN(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Sf(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Lm(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Lm(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : gN(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Sd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Xy(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Va(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function yN(e) {
  const t = da(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Z(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Ht * 0.5),
    tanY: Math.tan(Z(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Ht * 0.5)
  };
}
function Yi(e, t, n) {
  return rd(Fl(
    Fl(e.centerDir, Tl(e.right, t)),
    Tl(e.up, n)
  ));
}
function kd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = yN(e), r = Va(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Yi(n, -n.tanX, n.tanY),
    Yi(n, n.tanX, n.tanY),
    Yi(n, n.tanX, -n.tanY),
    Yi(n, -n.tanX, -n.tanY)
  ].map((S) => Va(S, t)), a = Array.from({ length: 4 }, (S, P) => {
    const x = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let $, W;
      P === 0 ? ($ = -n.tanX + 2 * n.tanX * F, W = n.tanY) : P === 1 ? ($ = n.tanX, W = n.tanY - 2 * n.tanY * F) : P === 2 ? ($ = n.tanX - 2 * n.tanX * F, W = -n.tanY) : ($ = -n.tanX, W = -n.tanY + 2 * n.tanY * F);
      const I = Va(Yi(n, $, W), t);
      I && x.push({ x: I.x, y: I.y });
    }
    return x;
  }), l = Va(Yi(n, 0, n.tanY), t), u = Va(
    Yi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, y = u.y - l.y, w = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / w * Dm,
      y: l.y + y / w * Dm
    },
    visible: !0
  };
}
function Rm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: kd(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = Sf(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = Sf(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function bN(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Bt(Math.atan2(r.x, r.z) * an),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * an
  };
}
function vN(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function _N(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * an;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let qs = null;
function Md() {
  return qs || (qs = new Promise((e) => {
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
  }), qs);
}
function nr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function wN(e, t = 1024) {
  const n = Math.max(1, Math.round(nr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(nr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function xN(e, t, n) {
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
function SN(e, t, n) {
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
function kN() {
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
      u.listeners.clear(), y.forEach((w) => w()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, l, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), y = xN(a, l, u);
    if (!b.startsWith("data:") || !y) return null;
    const w = SN(a, l, u), S = String((a == null ? void 0 : a.id) || "").trim() || w, P = t.get(S);
    if ((P == null ? void 0 : P.revision) === w) return { source: P.source, revision: w };
    const x = r(b, d), v = Number(x.naturalWidth || x.width || 0), F = Number(x.naturalHeight || x.height || 0);
    if (!x.complete || v < 1 || F < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(l)), $.height = Math.max(1, Math.round(u));
    const W = $.getContext("2d");
    return W ? (y.wrapOffsets.forEach((I) => {
      W.save(), W.translate(y.centerX + I, y.centerY), W.rotate(y.rotationRad), W.scale(y.scale, y.scale), W.drawImage(
        x,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), W.restore();
    }), t.set(S, { revision: w, source: $ }), { source: $, revision: w }) : null;
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
function MN(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function NN(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function PN({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const S = r.get(w.owner);
    (S == null ? void 0 : S.get(w.key)) === w && S.delete(w.key);
  }
  function l(w, S, P, x) {
    if (!w || typeof x != "function" || P.settled) return;
    let v = r.get(w);
    v || (v = /* @__PURE__ */ new Map(), r.set(w, v));
    const F = v.get(S);
    if ((F == null ? void 0 : F.entry) === P) {
      F.callback = x;
      return;
    }
    a(F);
    const $ = { owner: w, key: S, entry: P, callback: x };
    v.set(S, $), P.listeners.add($);
  }
  function u(w, S) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !S && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((P) => {
      a(P);
      try {
        P.callback(w.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [S, P] of n) {
        if (n.size <= w) break;
        !P.settled || P.listeners.size > 0 || (P.image.onload = null, P.image.onerror = null, n.delete(S));
      }
  }
  function b(w, S, P, x = null) {
    const v = String(S || ""), F = String(P || "");
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
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || l(w, v, $, x), $.image;
  }
  function y(w) {
    const S = r.get(w);
    S && ([...S.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: b, disposeOwner: y };
}
const Ka = /* @__PURE__ */ new WeakMap();
function qy(e, t, { editor: n = !1 } = {}) {
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
function li(e, ...t) {
  const n = Ka.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const bl = Object.freeze({
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
}), Jy = "PanoramaSuite.Editor.ViewControls", AN = {
  id: Jy,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(bl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function CN(e) {
  return Object.hasOwn(bl, e) ? bl[e] : bl.default;
}
function IN(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const l = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (l == null ? void 0 : l.action) ?? null;
}
function EN(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Wl = "state_json";
function ci(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function ON(e) {
  var l, u;
  const t = ci(e, Wl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Y0(n, {
    coverage: (l = ci(e, "coverage")) == null ? void 0 : l.value
  }), o = Gy(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Nd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ci(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, y, w, S, P, x;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (S = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || S.call(w, !0, !0), (x = (P = t == null ? void 0 : t.canvas) == null ? void 0 : P.setDirty) == null || x.call(P, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function FN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Vm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function TN(e) {
  var y, w, S, P, x, v;
  if (!e) return;
  const t = ci(e, "coverage"), n = ci(e, "bg_color"), r = ci(e, Wl), o = ci(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && FN(a) && (Vm(l) || l === ""))) return;
  let b = "360";
  if (Vm(l))
    try {
      b = String(Kn((y = JSON.parse(l)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (w = t.callback) == null || w.call(t, b), n.value = a, (S = n.callback) == null || S.call(n, a), r.value = l, (P = r.callback) == null || P.call(r, l), o && (o.value = u, (x = o.callback) == null || x.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function vl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function kf(e, t, n) {
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
async function DN(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function Ba(e, t, n) {
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
async function Zy(e, t = {}) {
  var r;
  await DN(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function LN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Zy(e), n ? n.apply(this, r) : this.value;
  };
}
function RN(e) {
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
function Tu(e, {
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
    var P;
    const w = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === w) return;
    RN(y), Nd(y, t), vl(y, Wl);
    const S = ci(y, Wl);
    if (LN(y, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const x = S.callback;
      S.callback = (v) => {
        var $;
        const F = x ? x(v) : void 0;
        return ($ = y.setDirtyCanvas) == null || $.call(y, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const x = ci(y, "bg_color");
      !d && x && (x.value == null || String(x.value).trim() === "" || String(x.value).toLowerCase() === "#000000") && (x.value = "#00ff00", (P = x.callback) == null || P.call(x, "#00ff00")), kf(y, r, () => o(y, "stickers")), u && (a(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && vl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
      return;
    }
    kf(y, r, () => o(y, "cutout")), l(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && vl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[y];
    e.prototype[y] = function() {
      const S = w ? w.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && ON(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && TN(this);
      const P = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && b(this), y === "onAdded" && P && li(this, "attach"), S;
    };
  }
}
function $N(e) {
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
function zN(e, {
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
    Nd(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    kf(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && vl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function jN({
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
    settings: [AN],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && Tu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && Tu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && Tu(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), Dl(y) && $N(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Nd(d, e), Dl(b) && zN(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const HN = /\.(png|jpe?g|webp|gif|bmp)$/i;
function br(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : HN.test(String(e.name || "")) : !1;
}
function Pd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => br(n)) : !1;
}
function GN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, w;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (Pd(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((w) => br(w));
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
async function Wa(e, t = {}) {
  var l, u, d, b;
  if (!br(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((w, S) => {
      const P = new n();
      P.onload = () => w(P), P.onerror = () => S(new Error("image load failed")), P.src = a;
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
async function eo(e, { fetchApi: t } = {}) {
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
const $m = /* @__PURE__ */ new WeakSet(), zm = /* @__PURE__ */ new WeakSet();
let jm = 0;
function Mf(e) {
  if (!e || typeof e != "object" || zm.has(e)) return e;
  const t = String(e.type || "preview");
  return jm += 1, e.type = `${t}:pano-${jm}`, zm.add(e), e;
}
function Ul(e) {
  if (!e || typeof e != "object" || $m.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, $m.add(e), e;
}
function Qy(e, t) {
  var r, o;
  if (!t || ((o = (r = Ul(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function KN({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Vt } = ol;
fM((e) => Ti(e.id));
dM(Wt);
const Ad = PN(), { linkedVideoFile: BN } = xy({ app: Vt, api: Wt });
function Nf() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ol == null ? void 0 : ol.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const WN = "pano_suite.ui_settings.v1", UN = 120, YN = 2048;
function Hm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(WN)) || "").trim();
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
function XN() {
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
function qN() {
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
function Pf(e) {
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
function eb(e) {
  const t = Pf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function JN(e, t, n) {
  eb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Af(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Cd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function tb(e) {
  return Dl(Cd(e));
}
function Gm(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function nb(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Af(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && _l(e), H2(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Af(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      _l(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      _l(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function ZN(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function _l(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  Cf.unregister(e), ZN(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const y = String((b == null ? void 0 : b.name) || ""), w = String((b == null ? void 0 : b.type) || ""), S = Nf();
      return y === S || w === S || y === "pano_preview" || w === "pano_preview" ? !0 : y === "preview" && w === "pano_preview";
    }).forEach((b) => v2(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function QN(e, t = "#00ff00") {
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
function e2(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = na(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Ln(e) {
  var u, d;
  const t = e2(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = na(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = na(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? X0(t, { backgroundColor: r, coverage: o, active: Z0(e) }) : QN(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function na(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function t2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function rb(e, t, n = null) {
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
  return !r && n != null && (r = t2(e == null ? void 0 : e.graph, n)), r;
}
function n2(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function ib(e, t = []) {
  const n = n2(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Di.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Km(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Yl(e, t) {
  const n = Km(e), r = Km(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function r2(e, t) {
  var n;
  return rb(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function i2(e, t = Di) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = ib(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return bM(e, l, r2);
}
const Cf = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Wt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, w, S;
        if (!a) return;
        const l = Yl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![...i2(a)].some((P) => Yl(r, P)) || wy(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (ob(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (S = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || S.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Wt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Wt) != null && e.removeEventListener) || (Wt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Xl(e) {
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
  return typeof ((a = Wt) == null ? void 0 : a.apiURL) == "function" ? Wt.apiURL(o) : o;
}
function o2(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function a2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function s2(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function l2(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (o2(t)) return [t];
  const { filename: n, subfolder: r } = a2(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Xl({
    filename: n,
    subfolder: r,
    type: a
  }));
  return s2([...o, t]);
}
function c2(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Xl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ti(e) {
  const t = Vt == null ? void 0 : Vt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Yl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const l of a)
      if (Yl(l, o)) return t[l];
  }
  return null;
}
function ts(e, t, n = null) {
  const r = n || Ti(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Wn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Wn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Xl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Wn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Xl(e);
}
function ql(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Du(e) {
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
function Id(e, t) {
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
function u2(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function f2(e, t) {
  try {
    e.__panoOwnOutputRev = MN(e.__panoOwnOutputRev);
    const n = u2(t);
    let r = "";
    for (const o of n)
      if (r = Wn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Id(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ra(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function d2(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return ra(e), null;
  const o = Ti(r), a = yd(o, t, Wn);
  if (!a)
    return ra(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = Id(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  ra(e);
  const y = vM({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function p2(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = ib(e, t).map((w) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, S) => ({ input: w, idx: S })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of l) {
    const S = n[w], P = e.graph ? e.getInputLink(w) : null;
    if ((P == null ? void 0 : P.origin_id) == null) continue;
    const x = P.origin_id, v = rb(e, w, x);
    if (!v) continue;
    const F = Number(P.origin_slot ?? 0), $ = Ti((v == null ? void 0 : v.id) ?? x), W = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (W.length) {
      const j = [];
      F >= 0 && F < W.length && j.push(W[F]), j.push(...W);
      for (const K of j.filter((Q) => !gl(Q))) {
        const Q = Wn(K);
        if (Q)
          return String((S == null ? void 0 : S.name) || ""), { src: `${Q}&pano_src=${_f($)}`, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Vt == null ? void 0 : Vt.getNodeImageUrls) == "function" ? Vt.getNodeImageUrls(v) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const j = [];
      F >= 0 && F < I.length && j.push(I[F]), j.push(...I);
      for (const K of j) {
        const Q = Wn(K);
        if (Q)
          return String((S == null ? void 0 : S.name) || ""), { src: Q, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const V = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (V.length) {
      const j = [];
      F >= 0 && F < V.length && j.push(V[F]), j.push(...V);
      for (const K of j) {
        const Q = Wn(K);
        if (Q)
          return String((S == null ? void 0 : S.name) || ""), { src: Q, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find((j) => String((j == null ? void 0 : j.name) || "").toLowerCase() === "image");
    if (O) {
      let j = Wn(O.value);
      if (j && !j.includes("/") && !j.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (j = Wt.apiURL(`/view?filename=${encodeURIComponent(j)}&type=input&subfolder=`)), j)
        return String((S == null ? void 0 : S.name) || ""), { src: j, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const u = xn(e, "background") ? Ti(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const S = Wn(w);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function h2(e, t = [], n = {}) {
  const r = p2(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = l2(o);
  if (!a.length) return null;
  const l = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return l && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = b, e.__panoLinkedInputImageCache.set(u, y);
  let w = -1;
  const S = () => {
    var x, v, F, $;
    if (w += 1, w >= a.length) {
      if (((v = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : v.call(x, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const P = a[w];
    y.pendingResolvedSrc = P, b.src = P;
  };
  return b.onload = () => {
    var P, x, v;
    ((x = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : x.call(P, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (P) => {
    var x, v, F, $;
    if (w + 1 < a.length) {
      S();
      return;
    }
    if (((v = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : v.call(x, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((P == null ? void 0 : P.type) || "error");
  }, S(), l && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function m2(e, t = [], n = null, r = {}) {
  const o = h2(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function ob(e) {
  var t, n;
  if (e) {
    Ad.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ra(e), e.__panoWrappedErpCache = null;
  }
}
function g2(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ra(e), e.__panoWrappedErpCache = null;
  }
}
function ab(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Js(e, t, n = "") {
  const r = ab(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < UN ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Bm(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function y2(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, w = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, w, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, w + b * 0.5 + 0.5), e.restore();
}
function Lu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function b2(e) {
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
function v2(e, t) {
  return Qy(e, t);
}
function ds(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let a = c2(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const P = Ti(e == null ? void 0 : e.id), x = ((S = P == null ? void 0 : P.ui) == null ? void 0 : S.pano_sticker_input_images) || (P == null ? void 0 : P.pano_sticker_input_images) || [];
    for (const v of Array.isArray(x) ? x : [x])
      if (a = Wn(v), a) break;
  }
  if (!a) return null;
  const l = ts(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Id(a, d) : a, y = NN(a, u, d);
  return Ad.get(e, y, b, (P, x) => {
    var v, F;
    x && (r != null && r.external && e.__panoOutputFromRun && li(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function _2(e, t) {
  var w, S, P, x;
  const n = M2(e, t), r = N2(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
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
  }).filter(Boolean) : [], u = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (x = (P = e.__panoRasterObjectSurfaceCache) == null ? void 0 : P.retain) == null || x.call(P, []), l;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = kN()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = wN(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
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
function w2(e, t, n, r) {
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
      const w = r.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(w[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = S2(e, t, r);
  return o || null;
}
function x2(e, t) {
  var w, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), l = (t == null ? void 0 : t.ds) || ((S = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : S.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function S2(e, t, n) {
  var o, a;
  const r = x2(t, n || (Vt == null ? void 0 : Vt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function k2(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function M2(e, t) {
  var b, y, w, S, P, x, v, F, $, W, I, V;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (S = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = k2(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = sf(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function N2(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function P2(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function A2(e, t, n) {
  const r = kd(t, n);
  r.visible && Sd(e, r.boundaryEdges, { selected: !1 });
}
function C2(e, t, n) {
  const r = kd(t, n);
  r.visible && (e.save(), Sd(e, r.boundaryEdges, { selected: !0 }), Xy(e, r, { accent: mN(t) }), e.restore());
}
function If(e, t, n) {
  return cy(Hl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Jl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ca;
}
function I2(e) {
  return [xn(e, "background") ? yd(Ti(e.id), ["pano_input_videos"], Wn) : "", BN(e, Di)];
}
function E2(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Ti(e.id), n = ts(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Wn), meta: n };
  const o = yd(t, ["pano_sticker_input_videos"], Wn);
  return o ? { src: o, meta: n } : null;
}
function O2({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Wm(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: mo({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = ds(e, l.id, J0(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), w = My(b.playback.stickerMedia, u);
        return y ? { media: y, revision: Du(y), source: w } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", y = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = ds(e, y, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return ql(u) ? { media: u, revision: Du(u) } : null;
  }, o = _2(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: ql(n) ? { media: n, revision: Du(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: uy(e.__panoSurfaceScene.sceneState, Jl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function F2(e, t, n) {
  var V, O, j, K, Q, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  ab(e, r);
  const o = Ln(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (j = (O = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : O.refresh) == null || j.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Q = (K = e.__panoStickersNodeSurface) == null ? void 0 : K.session) == null ? void 0 : Q.refresh) == null || _e.call(Q));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const y = (e.__panoSurfacePlayback ? O2(e.__panoSurfacePlayback) : d2(e, ["pano_input_videos"], () => {
    var C, ce;
    return (ce = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ce.call(C);
  })) || m2(
    e,
    Di,
    () => {
      var C, ce;
      return (ce = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ce.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), w = ql(y);
  let S = null;
  const P = (C, ce) => {
    S || (S = Wm(e, o, y));
    const de = n.render({ width: C.w, height: C.h, camera: ce, ...S });
    return de && d.drawImage(de.canvas, de.x, de.y, de.width, de.height, C.x, C.y, C.w, C.h), !!de;
  };
  if (r === "cutout") {
    const C = b2(o), ce = P2(y), de = C ? Z(pi(C).aspect, 0.1, 10) : w ? Z(Number(ce.width / ce.height), 0.05, 20) : 1, pe = wd(b, de);
    e.__panoCutoutNodeFrame = pe;
    let U = "none";
    const X = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (C)
      if (y && !w)
        U = "loading";
      else if (w) {
        const H = zM({ width: l, height: u }, pe, C);
        [
          !H.fallback || P(H.fallback.rect, hl(H.fallback.shot)),
          P(H.rect, hl(H.shot)),
          !H.fallback || P(pe, hl(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const H = e.__panoLastCutoutShot;
      H ? (e.__panoPreviewView = Hy(H, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? P(b, Hl(e.__panoPreviewView, l, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    w || n.release(), n.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(pe.x, pe.y, pe.w, pe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(pe.x + 0.5, pe.y + 0.5, Math.max(0, pe.w - 1), Math.max(0, pe.h - 1)), d.restore()), U === "loading" ? (Lu(e, !1), Js(e, !0, X)) : U === "empty" ? (Lu(e, !0), Js(e, !1, "")) : (Lu(e, !1), Js(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let x = !1;
  (!y || w) && (S = Wm(e, o, y), !S.background && !S.layers.length ? (n.release(), x = !0) : x = P(b, Hl(e.__panoPreviewView, l, u)));
  const v = !x && !n.failed;
  Js(e, v, v ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), v && y2(d, b, Bm(t, b));
  const F = If(e, l, u);
  !y && x && T2(d, F, Bm(t, b));
  const $ = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), W = wf(o, Jl(e)), I = x ? W.find((C) => String((C == null ? void 0 : C.id) || "") === $ && (C == null ? void 0 : C.visible) !== !1) : null;
  x && W.filter((C) => C !== I && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !ql(ds(e, C.id, null, { external: !0 }))).forEach((C) => A2(d, C, F)), I && C2(d, I, F);
}
function Um(e, t, n, r, o = 1) {
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
function T2(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push($n(b, u));
    Um(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push($n(u, b));
    Um(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: $n(0, 0) },
    { name: "Right", dir: $n(90, 0) },
    { name: "Back", dir: $n(180, 0) },
    { name: "Left", dir: $n(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const l = Math.max(9, Math.round(11 * n));
  e.font = `500 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Ef(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function D2(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function er(e, t) {
  return D2(e, t) ? !1 : (Ef(e), !0);
}
function Ym() {
  var n;
  const e = (n = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function L2(e) {
  var n;
  if (!e) return;
  const t = (n = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function R2(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !eb(e)) return;
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
function Xm(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && $2(e, 180, t);
    }
  };
}
function $2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ua(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const z2 = /* @__PURE__ */ new WeakMap();
function sb(e, t) {
  return wy(z2, e, t) ? !1 : (f2(e, t), ob(e), Ua(e), !0);
}
async function j2(e) {
  var n, r;
  const t = await gM(e, Vt, Wt);
  t && (sb(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function H2(e, t = {}) {
  var _o;
  const n = t.__allowStandalone === !0, r = tb(e);
  if (r && !n) {
    Cd(e);
    return;
  }
  r && R2(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Gm(e)
  }, u = "dom", d = l.signature || Gm(e);
  if (Number(e.__panoRebindGeneration || 0), Af(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Pf(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (_o = e.__panoDomPreview) != null && _o.widget || (e.__panoLegacyPreviewHooked && _l(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, w = b ? 0 : LM, S = document.createElement("div");
  if (qN(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const z = Ul(Mf(
      e.addDOMWidget(Nf(), "preview", S, Xm(e, null))
    ));
    Ua(e), e.__panoDomPreview = { widget: z, root: S, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const P = document.createElement("div");
  P.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const x = document.createElement("canvas");
  x.style.cssText = [
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
  ].join(";"), v.textContent = "Connect ERP image", P.appendChild(x), P.appendChild(v), S.appendChild(P);
  const F = w0(S), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild($)), JN(e, 120, 120), Ua(e);
  let W = null;
  try {
    V2(e, y, () => {
      var z, ye;
      return (ye = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ye.call(z);
    }), W = Ul(Mf(e.addDOMWidget(
      Nf(),
      "preview",
      S,
      Xm(
        e,
        () => {
          var z, ye;
          return (ye = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ye.call(z);
        },
        y,
        w,
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
  }, O = dy(V), j = /* @__PURE__ */ fa(o ? { ...Ly(Ln(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...zy(Ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let K = null;
  if (o && e.__panoSceneStateV2) {
    const [z, ye] = [0, 1].map(() => {
      const Ae = document.createElement("video");
      return Ae.playsInline = !0, Ae.preload = "auto", Ae.crossOrigin = "anonymous", Ae.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", P.appendChild(Ae), Ae;
    }), Ee = document.createElement("canvas");
    Ee.__panoFrameIdx = 0;
    const Re = document.createElement("canvas");
    Re.__panoFrameIdx = 0;
    const Le = TM({
      video: z,
      stickerVideo: ye,
      createImage: (Ae, Xe) => {
        const Qe = new Image();
        return Qe.onload = Xe, Qe.onerror = Xe, Qe.src = Ae, Qe;
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
        var Xe;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Ae = Math.min(1, YN / z.videoWidth);
        Ee.width = Math.round(z.videoWidth * Ae), Ee.height = Math.round(z.videoHeight * Ae), (Xe = Ee.getContext("2d")) == null || Xe.drawImage(z, 0, 0, Ee.width, Ee.height), Ee.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Ae;
        ye.videoWidth > 0 && ye.videoHeight > 0 && (Re.width = ye.videoWidth, Re.height = ye.videoHeight, (Ae = Re.getContext("2d")) == null || Ae.drawImage(ye, 0, 0), Re.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        j.playing = Le.playing, V();
      }
    });
    K = { playback: Le, video: z, still: Ee, stickerVideo: ye, stickerStill: Re, stickerSource: "" }, e.__panoSurfacePlayback = K;
  }
  const Q = () => {
    var Qe;
    const { playback: z, still: ye, stickerStill: Ee } = K, Re = FM(P, !!((Qe = e.flags) != null && Qe.collapsed)), Le = z.source, Ae = Re ? E2(e) : null, Xe = z.follow({
      shown: Re,
      sources: Re ? I2(e) : [],
      state: Ln(e),
      sticker: Ae
    });
    ((Ae == null ? void 0 : Ae.src) || "") !== K.stickerSource && (K.stickerSource = (Ae == null ? void 0 : Ae.src) || "", Ee.width = 0), z.source !== Le && (ye.width = 0, ye.__panoFrameIdx = 0), j.playable = Xe, j.playing = z.playing;
  }, _e = () => K == null ? void 0 : K.playback.pause();
  let T = null;
  const C = (o ? EM : HM)({
    readState: () => Ln(e),
    publishLiveState: (z) => {
      z ? (T = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (z) => {
      var Re, Le, Ae, Xe;
      const ye = na(e, "state_json");
      if (!ye) return;
      Q0(e, z.active);
      const Ee = ey(e, z);
      ty(e, Ee, String(ye.value ?? "")) || (ye.value = Ee, (Re = ye.callback) == null || Re.call(ye, Ee), e.__panoStateCache = null, (Le = e.setDirtyCanvas) == null || Le.call(e, !0, !0), (Xe = (Ae = e.graph) == null ? void 0 : Ae.setDirtyCanvas) == null || Xe.call(Ae, !0, !0));
    },
    onChange: (z) => Object.assign(j, z)
  }), de = o ? qy(e, (z = "sync", ye = null) => {
    var gi;
    if (!o || !e.graph || !C || C.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Tt = xn(e, "external-sticker"), Sr = Ln(e).stickers.find((xo) => xo.source.kind === "port");
      return C.apply({
        type: "sync-port",
        value: Ty(e, {
          pose: Tt ? ts(e, "pano_sticker_input_pose", ye) : null,
          image: Sr ? ds(e, Sr.id, null, { external: !0 }) : null
        })
      });
    }
    const Ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Tt) => String((Tt == null ? void 0 : Tt.name) || "") === "sticker_image") : -1, Re = Ee >= 0 ? ((gi = e.getInputLink(Ee)) == null ? void 0 : gi.id) ?? null : null;
    if (Re == null)
      return C.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Le = ts(e, "pano_sticker_input_pose", ye), Ae = Array.isArray(Le) ? Le[0] : Le, Xe = String(ts(e, "pano_sticker_input_state_hash", ye) ?? ""), Qe = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Ft = Ln(e), gn = (Array.isArray(Ft == null ? void 0 : Ft.stickers) ? Ft.stickers : []).find((Tt) => String((Tt == null ? void 0 : Tt.id) || "") === "sticker_image_1"), $t = ds(e, "sticker_image_1", null, { external: !0 }), wo = Ae && typeof Ae == "object" ? Ae : gn || { yaw_deg: Qe.yaw, pitch_deg: Qe.pitch, hFOV_deg: 30, rot_deg: 0 };
    return C.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: Xe,
        pose: wo,
        imageWidth: Number(($t == null ? void 0 : $t.naturalWidth) || ($t == null ? void 0 : $t.width) || 0),
        imageHeight: Number(($t == null ? void 0 : $t.naturalHeight) || ($t == null ? void 0 : $t.height) || 0)
      }
    });
  }) : () => {
  };
  let pe = 0;
  const U = async (z) => {
    if (!o || !C || !br(z)) return !1;
    _e();
    const ye = `asset_${Math.random().toString(16).slice(2, 10)}`, Ee = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    pe += 1, j.importing = !0;
    const Le = Ba(e, `add:${ye}`, async () => {
      const Ae = await Wa(z), Xe = await eo(z, {
        fetchApi: (Qe, Ft) => Wt.fetchApi(Qe, Ft)
      });
      return Ie(), C.apply({
        type: "add-sticker",
        value: {
          stickerId: Ee,
          assetId: ye,
          asset: Xe,
          imageWidth: Ae.width,
          imageHeight: Ae.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Le;
    } catch {
      return !1;
    } finally {
      pe = Math.max(0, pe - 1), j.importing = pe > 0, V();
    }
  };
  let X = null, H = null, A = null, ee = !1;
  const Y = () => {
    var z;
    return A && (clearTimeout(A), A = null), ee ? (ee = !1, ((z = C == null ? void 0 : C.commitGesture) == null ? void 0 : z.call(C)) ?? !1) : !1;
  }, Ie = () => {
    var Re, Le, Ae;
    const z = Y(), ye = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    if (X = null, H = null, ye != null) {
      try {
        (Re = x.hasPointerCapture) != null && Re.call(x, ye) && ((Le = x.releasePointerCapture) == null || Le.call(x, ye));
      } catch {
      }
      x.style.cursor = "grab";
    }
    const Ee = ((Ae = C == null ? void 0 : C.commitGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return z || Ee;
  }, Oe = () => {
    var Re, Le, Ae;
    const z = Y(), ye = X == null ? void 0 : X.pointerId;
    if (X = null, ye != null) {
      try {
        (Re = x.hasPointerCapture) != null && Re.call(x, ye) && ((Le = x.releasePointerCapture) == null || Le.call(x, ye));
      } catch {
      }
      x.style.cursor = "grab";
    }
    const Ee = ((Ae = C == null ? void 0 : C.cancelGesture) == null ? void 0 : Ae.call(C)) ?? !1;
    return z || Ee;
  }, Mt = () => Ie();
  C && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Mt));
  let yt = null, un = !1;
  if ($ && C)
    try {
      Md(), yt = Zf(o ? hN : aN, {
        model: j,
        onAction: (z) => {
          var Re, Le;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ie(), K == null || K.playback.toggle();
            return;
          }
          if (_e(), (z == null ? void 0 : z.type) === "open-editor") {
            Ie(), o || (j.aspectOpen = !1), (Re = e.__panoOpenEditor) == null || Re.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              U(z.file);
              return;
            }
            C.apply(z) && V();
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
          let ye = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Ae = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ye = {
              ...z,
              ...VM(Ae, {
                width: x.width,
                height: x.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Ae = ho(Ln(e));
            Ae && (e.__panoPreviewView = Hy(Ae, {
              width: x.width,
              height: x.height
            }));
          }
          const Ee = ((Le = e.__panoCutoutNodeFrame) == null ? void 0 : Le.safeRect) || null;
          j.aspectOpen = !1, C.apply({ ...ye, safeRect: Ee }) && V();
        }
      }), yt.mount($), un = !0;
    } catch {
      yt = null, un = !1;
    }
  const at = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    K && Q(), V();
  }) : null;
  at == null || at.observe(P);
  const qn = (z) => {
    var Ee, Re;
    I.raf = 0, I.inTick = !0;
    let ye = !1;
    try {
      ye = Et.stepInertia(z), (I.needsDraw || ye) && (I.needsDraw = !1, K && Q(), (Ee = e.flags) != null && Ee.collapsed || F2(e, x, O), j.viewUnavailable = O.failed);
    } finally {
      I.inTick = !1;
    }
    (ye || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(qn)), XN() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, Pf(e), $a(S), $a(P), $a(x), $a(S.parentElement), $a((Re = S.parentElement) == null ? void 0 : Re.parentElement), Number(x.width || 0), Number(x.height || 0), void 0);
  }, Et = nd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = x.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || x.clientWidth || 0)),
        h: Math.max(1, Number(z.height || x.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = Hm();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), en = o ? P : S, hn = (z) => {
    const ye = x.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - ye.left) * (x.width / Math.max(1, ye.width)),
      y: (Number(z.clientY) - ye.top) * (x.height / Math.max(1, ye.height))
    };
  }, mi = (z) => {
    var Re, Le;
    if (!o || !a) return;
    const ye = Ln(e), Ee = Rm(
      wf(ye, Jl(e)),
      String(((Re = ye == null ? void 0 : ye.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      hn(z),
      If(e, x.width, x.height)
    );
    if (!Ee) {
      x.style.cursor = "grab";
      return;
    }
    if (((Le = Ee.item) == null ? void 0 : Le.locked) === !0) {
      x.style.cursor = "default";
      return;
    }
    x.style.cursor = Ee.hit.cursor || "default";
  };
  x.addEventListener("pointerdown", (z) => {
    var Qe, Ft, gn, $t, wo, Ri, gi, Tt, Sr, xo, zt;
    if (!er(z, en) || z.button !== 0) return;
    if (!o) {
      const tn = ho(Ln(e)), cr = e.__panoCutoutNodeFrame;
      if (!tn) {
        (Qe = S.focus) == null || Qe.call(S, { preventScroll: !0 }), (Ft = x.setPointerCapture) == null || Ft.call(x, z.pointerId), x.style.cursor = "grabbing", Et.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (tn.locked === !0 || !cr || !C) return;
      const bs = hn(z);
      let Vi;
      if (z.shiftKey) {
        const zn = Ky({
          frame: cr,
          point: bs,
          startRollDeg: Number(tn.roll_deg ?? tn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!zn) return;
        Vi = { kind: "roll", pointerId: z.pointerId, rollGesture: zn };
      } else {
        const zn = ((gn = Ln(e)) == null ? void 0 : gn.ui_settings) || Hm();
        Vi = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: bs,
          startShot: { ...tn },
          focalPx: co(cr, tn),
          invertX: zn.invert_view_x === !0,
          invertY: zn.invert_view_y === !0
        };
      }
      Ie(), ($t = S.focus) == null || $t.call(S, { preventScroll: !0 }), (wo = x.setPointerCapture) == null || wo.call(x, z.pointerId), x.style.cursor = "grabbing", C.beginGesture(), X = Vi;
      return;
    }
    if (!a) return;
    const ye = hn(z), Ee = Ln(e), Re = String(((Ri = Ee == null ? void 0 : Ee.active) == null ? void 0 : Ri.selected_sticker_id) || ""), Le = If(e, x.width, x.height);
    (gi = S.focus) == null || gi.call(S, { preventScroll: !0 });
    const Ae = () => Rm(wf(Ee, Jl(e)), Re, ye, Le);
    let Xe = Ae();
    if (Xe && (K != null && K.playback.playing) && (_e(), Xe = Ae()), Xe && C) {
      if (Et.stopMotion(), Ie(), String(((Tt = Xe.item) == null ? void 0 : Tt.id) || "") !== Re && C.apply({ type: "select-sticker", id: Xe.item.id }), ((Sr = Xe.item) == null ? void 0 : Sr.locked) === !0) {
        V();
        return;
      }
      const tn = ye, cr = Xe.geometry.center;
      H = {
        active: !0,
        kind: Xe.hit.kind,
        pointerId: z.pointerId,
        startPoint: tn,
        startCenter: { ...cr },
        startSticker: { ...Xe.item },
        startDistance: Math.max(1, Math.hypot(tn.x - cr.x, tn.y - cr.y)),
        startAngle: Math.atan2(tn.y - cr.y, tn.x - cr.x),
        projection: Le
      }, C.beginGesture(), (xo = x.setPointerCapture) == null || xo.call(x, z.pointerId), x.style.cursor = Xe.hit.kind === "rotate" ? "grabbing" : Xe.hit.kind === "move" ? "move" : Xe.hit.cursor, V();
      return;
    }
    (zt = x.setPointerCapture) == null || zt.call(x, z.pointerId), x.style.cursor = "grabbing", Et.startDrag(z.clientX, z.clientY, z.pointerId);
  }), x.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!X) {
        if (!Et.state.drag.active) return;
        er(z, en), Et.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      if (er(z, en), X.kind === "pan") {
        const Ee = hn(z);
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
      const ye = By(X.rollGesture, hn(z), z);
      if (!ye) return;
      X.rollGesture = ye.gesture, C.updateGesture({ type: "set-roll", value: ye.rollDeg });
      return;
    }
    if (!H && !Et.state.drag.active) {
      mi(z);
      return;
    }
    if (H) {
      if (H.pointerId !== z.pointerId || !C) return;
      er(z, en);
      const ye = hn(z);
      let Ee = H.startSticker;
      if (H.kind === "move")
        Ee = bN(
          H.startSticker,
          {
            x: H.startCenter.x + ye.x - H.startPoint.x,
            y: H.startCenter.y + ye.y - H.startPoint.y
          },
          H.projection
        );
      else if (H.kind === "scale") {
        const Re = Math.hypot(ye.x - H.startCenter.x, ye.y - H.startCenter.y);
        Ee = vN(H.startSticker, H.startDistance, Re);
      } else if (H.kind === "rotate") {
        const Re = Math.atan2(ye.y - H.startCenter.y, ye.x - H.startCenter.x);
        Ee = _N(H.startSticker, H.startAngle, Re, z.shiftKey === !0);
      }
      C.updateGesture({ type: "set-transform", value: Ee }), V();
      return;
    }
    !a || !Et.state.drag.active || (er(z, en), Et.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const R = () => {
    var ye, Ee;
    if (!X && !H) {
      if (!Et.state.drag.active) return;
      Et.endDrag(), x.style.cursor = "grab", V();
      return;
    }
    if (!C) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    X = null, H = null;
    try {
      (ye = x.hasPointerCapture) != null && ye.call(x, z) && ((Ee = x.releasePointerCapture) == null || Ee.call(x, z));
    } catch {
    }
    C.cancelGesture(), x.style.cursor = "grab", V();
  }, G = (z, ye = !1) => {
    var Ee, Re, Le, Ae;
    if (!o) {
      if (!X) {
        if (!Et.state.drag.active) return;
        er(z, en), (Ee = x.releasePointerCapture) == null || Ee.call(x, z.pointerId), x.style.cursor = "grab", Et.endDrag(), V();
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      er(z, en), X = null, (Re = x.releasePointerCapture) == null || Re.call(x, z.pointerId), x.style.cursor = "grab", ye ? C.cancelGesture() : C.commitGesture(), mi(z), V();
      return;
    }
    if (H) {
      if (H.pointerId !== z.pointerId || !C) return;
      er(z, en), H = null, (Le = x.releasePointerCapture) == null || Le.call(x, z.pointerId), x.style.cursor = "grab", ye ? C.cancelGesture() : C.commitGesture(), V();
      return;
    }
    !a || !Et.state.drag.active || (er(z, en), (Ae = x.releasePointerCapture) == null || Ae.call(x, z.pointerId), x.style.cursor = "grab", Et.endDrag(), V());
  };
  x.addEventListener("pointerup", G), x.addEventListener("pointercancel", (z) => G(z, !0)), x.addEventListener("lostpointercapture", R), x.addEventListener("pointerleave", (z) => {
    !o && X || H || Et.state.drag.active && G(z);
  });
  const ne = (z) => {
    const ye = document.activeElement;
    if (ye !== S && !S.contains(ye)) return;
    if (z.key === "Escape" && (X || H) && C) {
      R(), Ef(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !C) return;
    const Ee = z.target, Re = String((Ee == null ? void 0 : Ee.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Ee != null && Ee.isContentEditable || j.canDelete === !0 && (_e(), Ie(), C.apply({ type: "delete-selected" }) && V(), Ef(z));
  };
  window.addEventListener("keydown", ne, !0);
  const se = KN({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => L2(z)
  }), me = (z) => {
    var Ee, Re, Le, Ae, Xe, Qe;
    if (!er(z, en)) return;
    if (!o) {
      const Ft = ho(Ln(e));
      if (Ft && Ft.locked !== !0 && C) {
        const gn = Ol(z);
        gn !== 0 && (ee || (Ie(), C.beginGesture(), ee = !0), C.updateGesture({
          type: "step-fov",
          direction: gn
        }) ? (A && clearTimeout(A), A = setTimeout(Y, 180), V()) : C.hasGestureChanges() || (C.cancelGesture(), ee = !1));
      } else if (!Ft) {
        const gn = Ym();
        Et.applyWheelEvent(z) && V(), se.schedule(gn);
      }
      (Ee = z.preventDefault) == null || Ee.call(z), (Re = z.stopPropagation) == null || Re.call(z), (Le = z.stopImmediatePropagation) == null || Le.call(z);
      return;
    }
    if (!a) return;
    const ye = Ym();
    Et.applyWheelEvent(z) && V(), (Ae = z.preventDefault) == null || Ae.call(z), (Xe = z.stopPropagation) == null || Xe.call(z), (Qe = z.stopImmediatePropagation) == null || Qe.call(z), se.schedule(ye);
  }, ve = o ? [P, x] : [P];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    ve.forEach((ye) => ye.addEventListener(z, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    x.addEventListener(z, (ye) => er(ye, en)), P.addEventListener(z, (ye) => er(ye, en));
  });
  const Se = na(e, "state_json");
  let Ne = null, we = null;
  Se && !Se.__panoPreviewPatchedCb && (Ne = Se.callback, we = (z) => {
    const ye = Ne ? Ne(z) : void 0;
    return V(), ye;
  }, Se.callback = we, Se.__panoPreviewPatchedCb = we);
  const fe = na(e, "bg_color");
  let je = null, Ce = null;
  fe && !fe.__panoPreviewPatchedCb && (je = fe.callback, Ce = (z) => {
    const ye = je ? je(z) : void 0;
    return V(), ye;
  }, fe.callback = Ce, fe.__panoPreviewPatchedCb = Ce);
  const Ve = e.onRemoved, Ge = e.onResize, lt = e.onExecuted, h = e.onDragOver, De = e.onDragDrop;
  let it = null;
  const ft = () => {
    o && (j.dropActive = !0, it && clearTimeout(it), it = setTimeout(() => {
      it = null, j.dropActive = !1;
    }, 140));
  }, mn = o ? function(z) {
    return (h ? h.apply(this, arguments) : !1) === !0 ? !0 : Pd(z == null ? void 0 : z.dataTransfer) ? (ft(), !0) : !1;
  } : null, fn = o ? function(z) {
    var Re;
    if ((De ? De.apply(this, arguments) : !1) === !0) return !0;
    const Ee = Array.from(((Re = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Re.files) || []).find((Le) => br(Le));
    return Ee ? (it && clearTimeout(it), it = null, j.dropActive = !1, U(Ee), !0) : !1;
  } : null;
  o && (e.onDragOver = mn, e.onDragDrop = fn);
  const Jn = o ? GN(S, {
    onActive: (z) => {
      if (z) {
        ft();
        return;
      }
      it && clearTimeout(it), it = null, j.dropActive = !1;
    },
    onDrop: (z) => {
      U(z);
    }
  }) : () => {
  }, Zt = function(z) {
    e.__panoOutputFromRun = !0;
    const ye = sb(e, z);
    li(e, ye ? "executed" : "sync", z), V();
    const Ee = lt ? lt.apply(this, arguments) : void 0;
    return Ua(e), Ee;
  };
  e.onExecuted = Zt;
  const Ot = e.onConnectionsChange, Pe = function(z, ye) {
    const Ee = km(e, z, ye, gd), Re = km(e, z, ye, Di), Le = arguments, Ae = Ot ? Ot.apply(this, Le) : void 0, Xe = () => {
      I.destroyed || (Re && g2(e), Ee && li(e, "connection-change"), Ua(e), V());
    };
    return Xe(), queueMicrotask(Xe), Ae;
  };
  e.onConnectionsChange = Pe;
  const sn = function() {
    const z = Ge ? Ge.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), z;
  };
  e.onResize = sn;
  const Gr = function() {
    return Li(), Cf.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = Gr;
  const Li = () => {
    var z, ye, Ee, Re, Le, Ae, Xe, Qe, Ft;
    I.destroyed = !0, (z = at == null ? void 0 : at.disconnect) == null || z.call(at), o ? Ie() : Oe(), x.removeEventListener("lostpointercapture", R), Jn(), F(), window.removeEventListener("keydown", ne, !0), (Ee = (ye = e.__panoStateFlushers) == null ? void 0 : ye.delete) == null || Ee.call(ye, Mt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Re = C == null ? void 0 : C.destroy) == null || Re.call(C), (Le = yt == null ? void 0 : yt.unmount) == null || Le.call(yt), K && (K.playback.dispose(), K.video.remove(), K.stickerVideo.remove(), e.__panoSurfacePlayback === K && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Xe = (Ae = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ae.dispose) == null || Xe.call(Ae), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, de(), se.dispose(), it && clearTimeout(it), it = null, Ad.disposeOwner(e), ra(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((Qe = e.__panoCutoutNodeSurface) == null ? void 0 : Qe.session) === C && (e.__panoCutoutNodeSurface = null), ((Ft = e.__panoStickersNodeSurface) == null ? void 0 : Ft.session) === C && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === sn && (e.onResize = Ge), e.onExecuted === Zt && (e.onExecuted = lt), e.onConnectionsChange === Pe && (e.onConnectionsChange = Ot), we && (Se == null ? void 0 : Se.callback) === we && (Se.callback = Ne), we && (Se == null ? void 0 : Se.__panoPreviewPatchedCb) === we && delete Se.__panoPreviewPatchedCb, Ce && (fe == null ? void 0 : fe.callback) === Ce && (fe.callback = je), Ce && (fe == null ? void 0 : fe.__panoPreviewPatchedCb) === Ce && delete fe.__panoPreviewPatchedCb, e.onDragOver === mn && (e.onDragOver = h), e.onDragDrop === fn && (e.onDragDrop = De), e.onRemoved === Gr && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = Li, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = C && un && !o ? { session: C, model: j } : null, e.__panoStickersNodeSurface = C && un && o ? { session: C, model: j } : null, e.__panoDomPreview = {
    widget: W,
    root: S,
    canvas: x,
    requestDraw: V,
    state: I,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Cf.register(e), e.graph && li(e, "attach"), V();
}
function qm(e, t = {}) {
  nb(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Jm(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (tb(e) && !n) {
    Cd(e);
    return;
  }
  nb(e).attach(t);
}
function G2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function K2(e, t = 1, n = wm) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : wm, w = Math.max(u, d), S = w > 0 ? Math.min(1, y / w) : 1;
  return {
    width: Math.max(1, Math.round(u * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function B2({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var P;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let l = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const x = d();
    return x === u || (u = x, o(x)), x;
  }, y = () => b();
  return (P = t == null ? void 0 : t.addEventListener) == null || P.call(t, "fullscreenchange", y), b(), { toggle: async () => {
    var x;
    if (l || !e || !t) return !1;
    if (d()) {
      try {
        await ((x = t.exitFullscreen) == null ? void 0 : x.call(t));
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
    var x, v, F;
    if (!l) {
      if (l = !0, (x = t == null ? void 0 : t.removeEventListener) == null || x.call(t, "fullscreenchange", y), d())
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
const W2 = { class: "pano-preview-node-surface" }, U2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (re(), ue("div", W2, [
      Te(cn, {
        icon: e.model.fullscreen ? tt(Me).fullscreen_close : tt(Me).fullscreen,
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
      e.model.viewUnavailable ? (re(), xr(xd, { key: 0 })) : dt("", !0)
    ]));
  }
}, Zs = 140, Y2 = 180, Zm = 40, Ru = 10;
function Qm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function eg(e, t) {
  const n = Qm(e), r = Qm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function tg(e) {
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
  return typeof ((a = Wt) == null ? void 0 : a.apiURL) == "function" ? Wt.apiURL(o) : o;
}
function ia(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ia(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return tg({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ia(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : tg(e);
}
function lb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function X2(e) {
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
function Of(e) {
  var o;
  const t = (o = vr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (eg(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (eg(a, n)) return t[a];
  return null;
}
function q2(e) {
  var r, o;
  const t = Of(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = ia(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function J2(e, t = "erp_image") {
  var P, x, v, F, $, W, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, O) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (x = (P = vr) == null ? void 0 : P.graph) == null ? void 0 : x.getNodeById) == null ? void 0 : v.call(x, a), u = Of(a), d = Of(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    ($ = u == null ? void 0 : u.ui) == null ? void 0 : $.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const O of V) {
        const j = ia(O);
        if (j) return j;
      }
  let y = [];
  try {
    y = typeof ((W = vr) == null ? void 0 : W.getNodeImageUrls) == "function" ? vr.getNodeImageUrls(l) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const V of y) {
      const O = ia(V);
      if (O) return O;
    }
  if (l) {
    const V = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const O of V) {
      const j = ia(O);
      if (j) return j;
    }
  }
  const w = (I = l == null ? void 0 : l.widgets) == null ? void 0 : I.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), S = String((w == null ? void 0 : w.value) || "").trim();
  return S ? Wt.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`) : "";
}
function Vu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function ng(e, t, n, r, o, a, l) {
  var b, y, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !lb(a) || n <= 1 || r <= 1) {
    Vu(t, n, r);
    return;
  }
  if (l.failed) {
    Vu(t, n, r);
    return;
  }
  const u = Number(((w = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: Hl(o, n, r),
    background: { media: a, revision: X2(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Vu(t, n, r);
}
function rg(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Z2 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = dy(() => this.requestDraw()), this.controller = nd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Bt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Z(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Z(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Zs}px`,
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
          return Zs;
        },
        getHeight() {
          return Zs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Ul(Mf(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Zs, Number(a.minHeight || 0)),
            minWidth: Math.max(Y2, Number(a.minWidth || 0))
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
      return Md(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ fa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = B2({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Zf(U2, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = w0(n), t.addEventListener("pointerdown", (a) => {
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
      G2(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !lb(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return rg(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, y, w, S, P;
      const a = w2(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !rg(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (P = n == null ? void 0 : n.stopImmediatePropagation) == null || P.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Ru * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - Zm - Ru);
    return { x: Ru, y: Zm, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), ng(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? fy : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = K2(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = q2(this.node);
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
    const n = J2(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), ng(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, y, w, S, P, x, v, F, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (w = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || w.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (x = (P = this.root) == null ? void 0 : P.remove) == null || x.call(P);
    } catch {
    }
    try {
      Qy(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : $.call(F, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Q2(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Z2(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function cb(e, t, n) {
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
function Ed(e) {
  return !!(e != null && e.prototype);
}
function ps(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function eP(e, t = {}) {
  Ed(e) || Q2(e, {
    ...t,
    onOpen: ps(e, t.onOpen)
  });
}
function tP(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Ed(e)) {
    Jm(e, {
      ...r,
      onOpen: ps(e, t.onOpen)
    });
    return;
  }
  cb(e, "stickers_node_preview", (o) => {
    Jm(o, {
      ...r,
      onOpen: ps(o, t.onOpen)
    });
  });
}
function nP(e, t = {}) {
  if (!Ed(e)) {
    qm(e, {
      ...t,
      onOpen: ps(e, t.onOpen)
    });
    return;
  }
  cb(e, "cutout_preview", (n) => {
    qm(n, {
      ...t,
      onOpen: ps(n, t.onOpen)
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
}, Zr = "pen";
function ig(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function rP(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), l = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((w) => {
      r.push(String(w || ""));
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
      const b = r.length, y = Math.max(0, b - l), w = o >= 0 ? Math.max(0, Math.min(o, y)) : y, S = r.slice(w, w + l), P = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - w));
      return {
        version: 1,
        entries: S,
        index: P
      };
    },
    hydrate: u
  };
}
function Xi(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function iP(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function oP({
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
    historyEntries: Array.from({ length: 8 }, (O, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const w = ((I = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : I.id) || "", S = !w, P = a(e.customPaintColor), x = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, $ = d(), W = Array.from({ length: 8 }, (O, j) => e.customPaintHistory[j] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...l(P.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    alphaValue: x,
    alphaText: `${x}%`,
    historyEntries: W.map((O, j) => ({
      index: j,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function aP({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function og(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function sP({
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
function lP({
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
  isStickerHidden: w,
  canRestoreSelectedToInitial: S,
  iconSet: P
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let x = [];
  if (n.length > 1)
    x = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!l }
    ];
  else if (r === "stroke")
    x = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u }
    ];
  else if (e === "stickers" || r === "image") {
    if (x = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!u }
    ], y(t) || (x.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: P.duplicate }), x.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: P.replace_image })), y(t)) {
      const v = S(), F = w(t);
      x.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: v ? "Back to initial position" : "Already at initial position",
        icon: P.back_initial,
        disabled: !v
      }), x.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: F ? "Show" : "Hide",
        tip: F ? "Show input image" : "Hide input image",
        icon: F ? P.eye : P.eye_dashed
      });
    }
    x.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? P.lock_open : P.lock_closed }), y(t) || x.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u });
  } else
    x = [
      {
        key: "aspect",
        kind: "aspect",
        icon: P.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((v) => ({ value: v, label: v, active: d === v }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: P.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u }
    ];
  return ub(o.corners, x);
}
const cP = [
  { key: "translate", label: "Move", tip: "Move the world sticker" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function uP({ corners: e, gizmoMode: t }) {
  return ub(e, [{
    key: "gizmo-mode",
    kind: "segments",
    attr: "data-gizmo-mode",
    label: "Gizmo mode",
    buttons: cP.map((n) => ({ ...n, pressed: n.key === t ? "true" : "false" }))
  }]);
}
function ub(e, t) {
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
const fP = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function dP(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: y = !1 }) {
  const w = (x, v, F, $, W) => {
    const I = (V) => (r == null ? void 0 : r.owner) === x && r.lane === V ? r.frames.map((O) => O + W) : [];
    return {
      id: x,
      label: F,
      clip: $,
      selected: x === o,
      open: l.has(x),
      keyed: WS(v, t - W),
      keys: BS(v).map((V) => ({ frame: V.frame + W, full: V.full })),
      selectedFrames: I(null),
      lanes: bo(v).map((V) => ({
        key: `${x}:${V}`,
        lane: V,
        label: fP[V],
        frames: v[V].keyframes.map((O) => O.frame + W),
        selectedFrames: I(V)
      }))
    };
  }, S = e.stickers.filter((x) => x.placement === "sky").sort((x, v) => v.z_index - x.z_index), P = e.stickers.filter((x) => x.placement === "world");
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
      w("camera", e.camera, "Camera", null, 0),
      ...[...S, ...P].map((x) => {
        const { start: v, in: F, duration: $ } = x.clip;
        return w(x.id, x, yf(x), { start: v, end: $ === null ? null : v + $ }, v - F);
      })
    ]
  };
}
function pP(e, t, n, r) {
  const o = XS(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const hP = ["aria-label"], mP = ["data-tip", "aria-pressed"], fb = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (re(), ue("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: _t({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (re(!0), ue(Ye, null, wt(e.buttons, (a) => (re(), ue("button", oi({
        key: a.key,
        class: ["pano-segment", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), ot(a.label), 17, mP))), 128))
    ], 12, hP));
  }
}, gP = { class: "pano-floating-right" }, yP = ["data-settled"], bP = ["data-ready", "data-settled"], vP = ["aria-label", "data-tip"], _P = {
  key: 1,
  class: "pano-camera-preview-label"
}, wP = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    // How the panorama view moves in space: 3DoF | 6DoF (#71), shown with World content.
    spaceButtons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), ue(Ye, null, [
      B("div", gP, [
        Rr(Te(fb, {
          buttons: e.spaceButtons,
          attr: "data-space-mode",
          label: "Space view mode"
        }, null, 8, ["buttons"]), [
          [Ei, e.spaceButtons.some((r) => r.visible !== !1)]
        ]),
        (re(!0), ue(Ye, null, wt(e.buttons, (r) => Rr((re(), xr(cn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"])), [
          [Ei, r.visible !== !1]
        ])), 128))
      ]),
      Rr(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: _t({
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
          e.previewToggle.visible ? (re(), ue("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Te(It, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, vP)) : dt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (re(), ue("div", _P, ot(e.preview.label || "Preview unavailable"), 1)) : dt("", !0)
        ], 14, bP)
      ], 8, yP), [
        [Ei, e.preview.visible]
      ])
    ], 64));
  }
}, xP = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, SP = ["y2", "transform"], kP = ["transform"], MP = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = pt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => Rr((re(), ue("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (re(), ue("svg", xP, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (re(!0), ue(Ye, null, wt(tt(n), (l) => (re(), ue("line", {
          key: l,
          class: ut(["pano-frame-roll-knob-tick", { zero: l === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: l % 45 === 0 ? 7 : 6,
          transform: `rotate(${l} 20 20)`
        }, null, 10, SP))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, kP),
        a[2] || (a[2] = B("circle", {
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
}, NP = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), ue("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Te(Uy, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Te(cn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Te(MP, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, PP = ["aria-label"], AP = { class: "pano-canvas-confirm-title" }, CP = { class: "pano-canvas-confirm-text" }, IP = { class: "pano-canvas-confirm-actions" }, EP = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, OP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ut(null), r = /* @__PURE__ */ Ut(null);
    let o = null;
    function a() {
      const w = r.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function l(w) {
      const S = r.value;
      if (!S) return;
      const P = S.querySelector(`[data-action='${w}']`);
      P instanceof HTMLButtonElement && P.click();
    }
    function u() {
      var v;
      const w = r.value;
      if (!w) return;
      const S = w.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const x = a()[0] || w;
      (v = x == null ? void 0 : x.focus) == null || v.call(x);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(w) {
      var $;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), l("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const S = a(), P = r.value;
      if (!S.length) {
        w.preventDefault(), ($ = P == null ? void 0 : P.focus) == null || $.call(P);
        return;
      }
      const x = S[0], v = S[S.length - 1], F = document.activeElement;
      if (w.shiftKey) {
        (F === x || F === P || !(P != null && P.contains(F))) && (w.preventDefault(), v.focus());
        return;
      }
      (F === v || !(P != null && P.contains(F))) && (w.preventDefault(), x.focus());
    }
    function y(w) {
      w.target === n.value && l("confirm-cancel");
    }
    return so(() => t.model.visible, (w, S) => {
      if (w) {
        o = document.activeElement, ac(() => {
          u();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), gs(() => {
      d();
    }), (w, S) => e.model.visible === !0 ? (re(), ue("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(y, ["self"])
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
        B("div", AP, ot(e.model.title), 1),
        B("div", CP, ot(e.model.text), 1),
        B("div", IP, [
          S[0] || (S[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", EP, ot(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, PP)
    ], 512)) : dt("", !0);
  }
}, FP = ["data-paint-pane"], TP = ["hidden"], DP = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], LP = ["aria-pressed", "disabled"], RP = ["hidden"], VP = { class: "pano-paint-color-pop-head" }, $P = { class: "pano-paint-color-field" }, zP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, jP = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, HP = { class: "pano-paint-color-field" }, GP = { class: "pano-paint-alpha-wrap" }, KP = ["value"], BP = { "data-paint-alpha-value": "" }, WP = ["hidden"], UP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, YP = ["data-paint-history-index", "aria-label", "disabled"], XP = ["data-paint-footer"], qP = ["data-paint-group"], JP = ["hidden"], ZP = ["value", "disabled"], QP = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, eA = ["hidden"], tA = {
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
    return (r, o) => (re(), ue("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (re(!0), ue(Ye, null, wt(e.panes, (a) => {
        var l;
        return re(), ue("div", {
          key: a.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (re(), ue("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (re(!0), ue(Ye, null, wt(e.paintSwatches, (u) => (re(), ue("button", {
              key: u.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: _t(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, DP))), 128)),
            B("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: _t({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, LP),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: _t({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", VP, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: _t({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", $P, [
                B("div", zP, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: _t({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", jP, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: _t({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", HP, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", GP, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, KP),
                  B("span", BP, ot(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", UP, [
                  (re(!0), ue(Ye, null, wt(e.state.historyEntries || [], (u) => (re(), ue("button", {
                    key: u.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: _t(n(u.color))
                  }, null, 14, YP))), 128))
                ])
              ], 8, WP)
            ], 12, RP)
          ], 10, TP)) : dt("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (re(!0), ue(Ye, null, wt(a.tools, (u) => {
                var d;
                return re(), xr(cn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, qP),
            B("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: _t({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, ZP),
              B("span", QP, ot(e.state.sizeText || "10"), 1)
            ], 10, JP),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = e.state.clearVisible) == null ? void 0 : l[a.key]) ?? !a.clearHidden)
            }, [
              Te(cn, {
                icon: tt(Me).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, eA)
          ], 8, XP)
        ], 10, FP);
      }), 128))
    ], 2));
  }
}, nA = {
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
    return t({ getRefs: a }), (l, u) => (re(), ue(Ye, null, [
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
}, rA = {
  key: 0,
  class: "pano-cutout-menu"
}, iA = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, oA = ["data-aspect"], aA = ["data-action", "aria-label", "data-tip", "disabled"], sA = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), ue("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: _t({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (re(!0), ue(Ye, null, wt(e.model.items || [], (r) => (re(), ue(Ye, {
        key: r.key
      }, [
        r.kind === "aspect" ? (re(), ue("div", rA, [
          B("button", iA, [
            Te(It, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: ut(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (re(!0), ue(Ye, null, wt(r.choices || [], (o) => (re(), ue("button", {
              key: o.value,
              class: ut(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, ot(o.label), 11, oA))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (re(), xr(fb, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (re(), ue("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Te(It, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, aA))
      ], 64))), 128))
    ], 4));
  }
}, lA = {
  key: 0,
  class: "pano-easing"
}, cA = { class: "pano-section-title" }, uA = { class: "pano-easing-range" }, fA = { class: "pano-easing-modes" }, dA = ["aria-pressed", "onClick"], pA = ["viewBox"], hA = ["x", "y"], mA = ["x1", "y1", "x2", "y2"], gA = ["d"], yA = ["x1", "y1", "x2", "y2"], bA = ["x1", "y1", "x2", "y2"], vA = ["cx", "cy"], _A = ["cx", "cy"], wA = { class: "pano-easing-note" }, Qr = 132, qi = 14, xA = {
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
    ], a = /* @__PURE__ */ Ut(null), l = pt(() => {
      var x;
      return Array.isArray((x = n.model) == null ? void 0 : x.easing) ? n.model.easing : null;
    }), u = (x) => qi + x * Qr, d = (x) => qi + (1 - x) * Qr, b = pt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [x, v, F, $] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(x)} ${d(v)} ${u(F)} ${d($)} ${u(1)} ${d(1)}`;
    }), y = pt(() => l.value ? l.value.map((x) => x.toFixed(2)).join(", ") : "");
    function w(x) {
      var v;
      return JSON.stringify(x.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function S(x, v) {
      r("timeline", { type: "easing", easing: x, commit: v });
    }
    function P(x, v) {
      var V;
      if (x.button !== 0 || !l.value) return;
      const F = x.currentTarget;
      (V = F.setPointerCapture) == null || V.call(F, x.pointerId);
      let $ = null;
      const W = (O) => {
        const j = a.value.getBoundingClientRect(), K = j.width / (Qr + qi * 2), Q = ((O.clientX - j.left) / K - qi) / Qr, _e = 1 - ((O.clientY - j.top) / K - qi) / Qr;
        $ = [...$ || l.value], $[v] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, $[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, S($, !1);
      }, I = () => {
        F.removeEventListener("pointermove", W), F.removeEventListener("pointerup", I), F.removeEventListener("pointercancel", I), $ && S($, !0);
      };
      F.addEventListener("pointermove", W), F.addEventListener("pointerup", I), F.addEventListener("pointercancel", I);
    }
    return (x, v) => e.model ? (re(), ue("div", lA, [
      B("div", cA, [
        v[2] || (v[2] = B("span", null, "Easing", -1)),
        B("span", uA, ot(e.model.label), 1)
      ]),
      B("div", fA, [
        (re(), ue(Ye, null, wt(o, (F) => B("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(F) ? "true" : "false",
          onClick: ($) => S(F.easing, !0)
        }, ot(F.label), 9, dA)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (re(), ue("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Qr + qi * 2} ${Qr + qi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: Qr,
          height: Qr
        }, null, 8, hA),
        B("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, mA),
        B("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, gA),
        l.value ? (re(), ue(Ye, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, yA),
          B("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, bA),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => P(F, 0))
          }, null, 40, vA),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => P(F, 2))
          }, null, 40, _A)
        ], 64)) : dt("", !0)
      ], 8, pA)) : dt("", !0),
      B("div", wA, [
        e.model.mixed ? (re(), ue(Ye, { key: 0 }, [
          Ha("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (re(), ue(Ye, { key: 1 }, [
          Ha("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (re(), ue(Ye, { key: 2 }, [
          Ha("Holds the value, then jumps to the next keyframe.")
        ], 64)) : l.value ? (re(), ue(Ye, { key: 3 }, [
          Ha("cubic-bezier(" + ot(y.value) + ")", 1)
        ], 64)) : dt("", !0)
      ])
    ])) : dt("", !0);
  }
}, SA = {
  class: "pano-side",
  "data-side": ""
}, kA = { class: "pano-side-head" }, MA = { class: "pano-side-title" }, NA = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, PA = {
  key: 0,
  class: "pano-side-scroll"
}, AA = { class: "pano-inspector" }, CA = { class: "pano-ui-row pano-coverage-row" }, IA = ["data-selected"], EA = ["aria-pressed", "disabled"], OA = ["aria-pressed", "disabled"], FA = {
  key: 0,
  class: "pano-section-title"
}, TA = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, DA = {
  class: "pano-picker",
  "data-picker": "selection"
}, LA = ["disabled"], RA = { class: "pano-picker-label" }, VA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $A = ["hidden"], zA = ["data-selection-id"], jA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, HA = {
  key: 2,
  class: "pano-state-actions"
}, GA = ["disabled"], KA = ["data-key"], BA = ["min", "max", "step", "value", "disabled", "data-param-key"], WA = ["min", "max", "step", "value", "disabled", "data-param-key"], UA = { class: "pano-visibility-section" }, YA = { class: "pano-visibility-stack" }, XA = ["data-visibility-row"], qA = { class: "pano-visibility-name" }, JA = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, ZA = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], QA = ["open"], eC = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, tC = { class: "pano-ui-settings-body" }, nC = { class: "pano-ui-row" }, rC = ["data-selected"], iC = ["aria-pressed"], oC = ["aria-pressed"], aC = { class: "pano-ui-row" }, sC = ["data-selected"], lC = ["aria-pressed"], cC = ["aria-pressed"], uC = {
  key: 1,
  class: "pano-side-footer"
}, fC = ["data-action"], dC = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = pt(() => {
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
      var b, y, w, S, P;
      return re(), ue("div", SA, [
        B("div", kA, [
          B("div", MA, [
            B("span", NA, [
              Te(It, {
                icon: tt(Me).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, ot(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (re(), ue("div", PA, [
          B("div", AA, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", CA, [
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
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "360", 8, EA),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, OA)
              ], 8, IA)
            ]),
            e.model.transformTitle !== !1 ? (re(), ue("div", FA, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : dt("", !0),
            e.model.selectionPicker ? (re(), ue("div", TA, [
              B("label", null, ot(e.model.selectionPicker.label), 1),
              B("div", DA, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", RA, [
                    e.model.selectionPicker.currentIcon ? (re(), ue("span", VA, [
                      Te(It, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    B("span", null, ot(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, LA),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (re(!0), ue(Ye, null, wt(e.model.selectionPicker.items || [], (x) => (re(), ue("button", {
                    key: x.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: x.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": x.id
                  }, [
                    x.icon ? (re(), ue("span", jA, [
                      Te(It, {
                        icon: x.icon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    B("span", null, ot(x.label), 1)
                  ], 10, zA))), 128))
                ], 8, $A)
              ])
            ])) : dt("", !0),
            e.model.copyStateButton ? (re(), ue("div", HA, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Te(It, {
                  icon: tt(Me).copy
                }, null, 8, ["icon"]),
                B("span", null, ot(e.model.copyStateButton.label), 1)
              ], 8, GA)
            ])) : dt("", !0),
            B("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (re(!0), ue(Ye, { key: 0 }, wt(e.model.notes, (x) => (re(), ue("div", {
                key: x,
                class: "pano-param-note"
              }, ot(x), 1))), 128)) : (re(!0), ue(Ye, { key: 1 }, wt(e.model.params || [], (x) => (re(), ue("div", {
                key: x.key,
                class: "pano-field",
                "data-key": x.key
              }, [
                B("label", null, ot(x.label), 1),
                B("input", {
                  type: "range",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.value,
                  disabled: l(x, e.model),
                  style: _t(a(x)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": x.key
                }, null, 12, BA),
                B("input", {
                  type: "number",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.displayValue,
                  disabled: l(x, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": x.key
                }, null, 8, WA)
              ], 8, KA))), 128))
            ], 2),
            Te(xA, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (x) => r("timeline", x))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (re(), ue(Ye, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", UA, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", YA, [
                  (re(!0), ue(Ye, null, wt(e.model.visibilityRows, (x) => (re(), ue("div", {
                    key: x.key,
                    class: ut(["pano-visibility-row", { "is-hidden": x.visible === !1, "is-disabled": x.enabled === !1 }]),
                    "data-visibility-row": x.key
                  }, [
                    B("span", qA, [
                      B("span", JA, [
                        Te(It, {
                          icon: x.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, ot(x.label), 1)
                    ]),
                    B("button", {
                      class: ut(["pano-visibility-toggle", { active: x.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": x.key,
                      "aria-label": x.ariaLabel,
                      "aria-pressed": x.visible === !0 ? "true" : "false",
                      "data-tip": x.tip,
                      disabled: x.enabled === !1
                    }, [
                      Te(It, {
                        icon: x.visible === !0 ? tt(Me).eye : tt(Me).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, ZA)
                  ], 10, XA))), 128))
                ])
              ])
            ], 64)) : dt("", !0),
            e.model.uiSettings ? (re(), ue("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", eC, [
                  Te(It, {
                    icon: tt(Me).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", tC, [
                B("div", nC, [
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
                    }, "Normal", 8, iC),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, oC)
                  ], 8, rC)
                ]),
                B("div", aC, [
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
                    }, "Normal", 8, lC),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, cC)
                  ], 8, sC)
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
            ], 8, QA)) : dt("", !0)
          ])
        ])) : dt("", !0),
        (e.model.footerButtons || []).length ? (re(), ue("div", uC, [
          (re(!0), ue(Ye, null, wt(e.model.footerButtons, (x) => (re(), ue("button", {
            key: x.action,
            class: ut(["pano-btn", { "pano-btn-primary": x.primary === !0 }]),
            type: "button",
            "data-action": x.action
          }, ot(x.label), 11, fC))), 128))
        ])) : dt("", !0)
      ]);
    };
  }
}, pC = { class: "pano-timeline-bar" }, hC = ["aria-label", "data-tip"], mC = ["aria-label", "data-tip"], gC = { class: "pano-timeline-time" }, yC = ["data-tip"], bC = { key: 0 }, vC = ["value"], _C = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, wC = ["value"], xC = ["aria-expanded"], SC = ["inert"], kC = { class: "pano-timeline-name" }, MC = ["aria-expanded", "aria-label", "onClick"], NC = ["title", "aria-current", "onClick"], PC = ["data-keyed", "aria-label", "onClick"], AC = ["onPointerdown"], CC = ["onPointerdown"], IC = ["onPointerdown"], EC = ["onPointerdown"], OC = ["aria-label", "data-tip", "onPointerdown"], FC = { key: 0 }, TC = ["onPointerdown"], DC = ["aria-label", "data-tip", "onPointerdown"], LC = { key: 0 }, RC = 10, VC = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Ut(null), l = /* @__PURE__ */ Ut(null), u = /* @__PURE__ */ Ut(1), d = /* @__PURE__ */ Ut(0), b = /* @__PURE__ */ Ut(!1);
    let y = null, w = null, S = null;
    lc(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), w = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && w.observe(l.value);
    }), gs(() => {
      y == null || y.disconnect(), w == null || w.disconnect(), S == null || S();
    });
    const P = pt(() => Math.max(1, Number(n.model.span || 1))), x = pt(() => u.value / P.value), v = (U) => `${U / P.value * 100}%`, F = pt(() => {
      const U = o.find((H) => H * x.value >= 56) || o[o.length - 1], X = [];
      for (let H = 0; H < P.value; H += U) X.push(H);
      return X;
    });
    function $(U) {
      const X = a.value.getBoundingClientRect(), H = Math.floor((U - X.left) / Math.max(1, X.width) * P.value);
      return Math.min(P.value - 1, Math.max(0, H));
    }
    function W(U, X, H) {
      const A = Math.ceil(RC / Math.max(1e-6, x.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return ek(X.map((Y) => Y.frame), A).map((Y, Ie) => ({
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
      const X = U.end === null ? P.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function j(U, X) {
      const H = U.clientX, A = Math.max(1e-6, x.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Oe) => {
        if (Oe.pointerId !== U.pointerId) return;
        const Mt = Math.round((Oe.clientX - H) / A);
        Mt !== ee && (ee = Mt, X("move", ee, Oe));
      }, Ie = (Oe) => {
        Oe.pointerId === U.pointerId && (S(), X("end", ee, Oe));
      };
      S == null || S(), S = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie), S = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
    }
    function K(U) {
      U.button === 0 && j(U, (X, H, A) => r("action", { type: "seek", frame: $(A.clientX), phase: X }));
    }
    function Q(U, X, H) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), j(U, (A, ee) => r("action", { type: "clip", id: X.id, mode: H, delta: ee, phase: A })));
    }
    function _e(U, X, H, A, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !1 }), j(U, (Y, Ie) => r("action", { type: "move-keys", delta: Ie, phase: Y }));
      }
    }
    const T = pt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function C(U, X, H) {
      r("action", X), await ac(), U.target.value = H();
    }
    function ce(U) {
      C(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function de(U) {
      const X = U.target.value.trim();
      C(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function pe(U, X, H) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: H, frames: [], additive: !1 });
    }
    return (U, X) => Rr((re(), ue("section", {
      class: ut(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", pC, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (H) => r("action", { type: "play" }))
        }, [
          Te(It, {
            icon: e.model.playing ? tt(Me).pause : tt(Me).play
          }, null, 8, ["icon"])
        ], 8, hC),
        e.model.hasAudio ? (re(), ue("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (H) => r("action", { type: "mute" }))
        }, [
          Te(It, {
            icon: e.model.muted ? tt(Me).volume_muted : tt(Me).volume2
          }, null, 8, ["icon"])
        ], 8, mC)) : dt("", !0),
        B("span", gC, ot(e.model.label), 1),
        B("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (re(), ue("span", bC, ot(T.value), 1)) : (re(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: ce
          }, null, 40, vC)),
          X[6] || (X[6] = B("span", null, "fps", -1))
        ], 8, yC),
        B("label", _C, [
          X[7] || (X[7] = B("span", null, "Length", -1)),
          B("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: de
          }, null, 40, wC)
        ]),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (H) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = B("span", null, "Timeline", -1)),
          Te(It, {
            icon: tt(Me).chevron
          }, null, 8, ["icon"])
        ], 8, xC)
      ]),
      B("div", {
        class: ut(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: _t({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Ct((H) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Ct((H) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Ct((H) => b.value = !1, ["self"]))
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
            (re(!0), ue(Ye, null, wt(F.value, (H) => (re(), ue("span", {
              key: H,
              class: "pano-timeline-tick",
              style: _t({ left: v(H) })
            }, ot(H), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: _t({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (re(!0), ue(Ye, null, wt(e.model.rows || [], (H) => (re(), ue(Ye, {
            key: H.id
          }, [
            B("div", {
              class: ut(["pano-timeline-head", { selected: H.selected }])
            }, [
              B("div", kC, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": H.open ? "true" : "false",
                  "aria-label": H.open ? `Hide ${H.label} parameters` : `Show ${H.label} parameters`,
                  onClick: Ct((A) => r("action", { type: "toggle-row", id: H.id }), ["stop"])
                }, [
                  Te(It, {
                    icon: tt(Me).chevron
                  }, null, 8, ["icon"])
                ], 8, MC),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: H.label,
                  "aria-current": H.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: H.id })
                }, [
                  Te(It, {
                    icon: H.clip ? tt(Me).image : tt(Me).camera
                  }, null, 8, ["icon"]),
                  B("span", null, ot(H.label), 1)
                ], 8, NC),
                B("button", {
                  class: ut(["pano-timeline-key", { keyed: H.keyed }]),
                  type: "button",
                  "data-keyed": H.keyed ? "true" : "false",
                  "aria-label": H.keyed ? `Every ${H.label} parameter has a keyframe here; update them` : `Add keyframes for every ${H.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((A) => r("action", { type: "key-row", owner: H.id }), ["stop"])
                }, [
                  Te(It, {
                    icon: tt(Me).keyframe
                  }, null, 8, ["icon"])
                ], 10, PC)
              ]),
              H.open ? (re(!0), ue(Ye, { key: 0 }, wt(H.lanes, (A) => (re(), ue("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, ot(A.label), 1))), 128)) : dt("", !0)
            ], 2),
            B("div", {
              class: ut(["pano-timeline-track", { selected: H.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => pe(A, H, null)
              }, [
                H.clip ? (re(), ue("div", {
                  key: 0,
                  class: ut(["pano-timeline-clip", { open: H.clip.end === null }]),
                  style: _t(O(H.clip)),
                  onPointerdown: Ct((A) => Q(A, H, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((A) => Q(A, H, "start"), ["stop"])
                  }, null, 40, IC),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((A) => Q(A, H, "end"), ["stop"])
                  }, null, 40, EC)
                ], 46, CC)) : dt("", !0),
                (re(!0), ue(Ye, null, wt(I(H), (A) => (re(), ue("button", {
                  key: A.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: _t({ left: v(A.frame + 0.5) }),
                  "aria-label": `${H.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: Ct((ee) => _e(ee, H, null, A, H.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (re(), ue("span", FC, ot(A.frames.length), 1)) : dt("", !0)
                ], 46, OC))), 128))
              ], 40, AC),
              H.open ? (re(!0), ue(Ye, { key: 0 }, wt(H.lanes, (A) => (re(), ue("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => pe(ee, H, A.lane)
              }, [
                (re(!0), ue(Ye, null, wt(V(A), (ee) => (re(), ue("button", {
                  key: ee.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: _t({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${A.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: Ct((Y) => _e(Y, H, A.lane, ee, A.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (re(), ue("span", LC, ot(ee.frames.length), 1)) : dt("", !0)
                ], 46, DC))), 128))
              ], 40, TC))), 128)) : dt("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: _t({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, SC)
    ], 2)), [
      [Ei, e.model.visible]
    ]);
  }
}, $C = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), ue("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: _t({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ot(e.model.text || ""), 7));
  }
}, zC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, jC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (re(), ue("div", zC, [
      (re(!0), ue(Ye, null, wt(e.buttons, (r) => Rr((re(), xr(cn, {
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
        [Ei, r.visible !== !1]
      ])), 128))
    ]));
  }
}, HC = ["data-video-ready"], GC = { class: "pano-video-transport-shell" }, KC = { class: "pano-video-controls-left" }, BC = { class: "pano-video-filmstrip" }, WC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, UC = ["src", "onLoad"], YC = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, XC = ["max", "value", "disabled"], qC = { class: "pano-video-controls-right" }, JC = ["data-has-audio"], ZC = { class: "pano-video-volume-pop" }, QC = ["value", "disabled"], eI = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Me.pause : Me.play;
    }), a = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), l = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = pt(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Me.loop_off : Me.loop;
    }), d = pt(() => {
      var O, j;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = pt(() => {
      var O, j, K;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Me.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number(((K = t.state) == null ? void 0 : K.volume) ?? 1) <= 0 ? Me.volume_muted : Me.volume2;
    }), y = pt(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), w = pt(() => ({ left: `${y.value}%` })), S = pt(() => {
      var Q, _e;
      const O = (Q = t.state) == null ? void 0 : Q.volumePct, j = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, K = Number(O ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, K))}%`
      };
    }), P = pt(() => {
      var K, Q;
      const j = [
        String(((K = t.state) == null ? void 0 : K.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, j)}ch`;
    }), x = pt(() => ({ "--pano-video-time-ch": P.value })), v = pt(() => {
      var K, Q;
      const O = Array.isArray((K = t.state) == null ? void 0 : K.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const j = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: j }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Ut(/* @__PURE__ */ new Set()), $ = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), W = (O) => F.value.has($(O)), I = (O) => {
      const j = new Set(F.value);
      j.add($(O)), F.value = j;
    };
    so(v, (O) => {
      const j = new Set(O.map($)), K = /* @__PURE__ */ new Set();
      for (const Q of F.value)
        j.has(Q) && K.add(Q);
      F.value = K;
    }, { immediate: !0 });
    const V = pt(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, j) => (re(), ue("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: _t(V.value)
    }, [
      j[1] || (j[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      j[2] || (j[2] = B("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", GC, [
        B("div", KC, [
          Te(cn, {
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
            style: _t(x.value)
          }, ot(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", BC, [
          B("div", WC, [
            (re(!0), ue(Ye, null, wt(v.value, (K) => (re(), ue("div", {
              key: $(K),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !K.src,
                "is-loaded": K.src && W(K)
              }])
            }, [
              K.src ? (re(), ue("img", {
                key: 0,
                src: K.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => I(K)
              }, null, 40, UC)) : (re(), ue("span", YC))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: _t(w.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
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
          }, null, 8, XC)
        ]),
        B("div", qC, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: _t(x.value)
          }, ot(e.state.durationLabel || "0:00"), 5),
          Te(cn, {
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
            B("div", ZC, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: _t(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, QC)
            ]),
            Te(cn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, JC)
        ])
      ])
    ], 14, HC));
  }
}, tI = { class: "pano-floating-top" }, nI = ["data-selected", "data-view-count"], rI = ["data-view", "aria-pressed", "aria-label", "disabled"], iI = { class: "label" }, oI = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return re(), ue("div", tI, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (re(!0), ue(Ye, null, wt(e.buttons, (o) => Rr((re(), ue("button", {
            key: o.key,
            class: ut(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Te(It, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", iI, ot(o.label), 1)
          ], 10, rI)), [
            [Ei, o.visible !== !1]
          ])), 128))
        ], 8, nI)
      ]);
    };
  }
};
function db(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Me.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Me.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Me.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): segments next to the view buttons at the bottom
    // right while the panorama view shows World content (PanoFloatingRight.vue).
    spaceButtons: t ? [] : [
      { key: "3dof", label: "3DoF", tip: "Look around from the ERP origin", pressed: "true" },
      { key: "6dof", label: "6DoF", tip: "Move freely in space", pressed: "false" }
    ],
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
      // Shown only while the panorama view is in space in 6DoF (#71).
      ...t ? [] : [
        { action: "frame-view", label: "Frame Content", tip: "Frame content", pressed: null, icon: Me.focus, visible: !1 }
      ],
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
const aI = ["aria-label"], sI = { class: "pano-stage-column" }, lI = { class: "pano-stage-wrap" }, cI = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, uI = {
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
    function w() {
      var T, C;
      return ((C = (T = y.value) == null ? void 0 : T.getRefs) == null ? void 0 : C.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(T) {
      var C, ce;
      return ((ce = (C = b.value) == null ? void 0 : C.open) == null ? void 0 : ce.call(C, T)) === !0;
    }
    function P(T) {
      o("image-file-selected", T);
    }
    function x(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: S });
    const v = pt(() => r.readOnly === !0), F = pt(() => r.shellPreset || db(r.type)), $ = pt(() => {
      var C, ce, de;
      const T = String((((C = r.uiState) == null ? void 0 : C.stageStatus) === "failed" ? (ce = r.uiState) == null ? void 0 : ce.stageStatusDetail : (de = r.uiState) == null ? void 0 : de.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = pt(() => {
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
      var ce;
      const C = I()[0] || d.value;
      (ce = C == null ? void 0 : C.focus) == null || ce.call(C);
    }
    function O() {
      var T;
      u != null && u.isConnected && ((T = u.focus) == null || T.call(u)), u = null;
    }
    function j(T) {
      var C, ce, de, pe;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = I();
          if (!U.length) {
            T.preventDefault(), (ce = (C = d.value) == null ? void 0 : C.focus) == null || ce.call(C);
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
    function Q() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", j), T ? (u || (u = document.activeElement), K(), document.addEventListener("keydown", j), ac(() => {
        V();
      })) : (Q(), O());
    }
    return lc(() => {
      _e(r.open);
    }), gs(() => {
      Q(), document.removeEventListener("keydown", j), O();
    }), so(() => r.open, (T) => {
      _e(T);
    }), (T, C) => e.open ? (re(), ue("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[2] || (C[2] = Ct((ce) => o("close"), ["self"]))
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
        B("div", sI, [
          B("div", lI, [
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
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (re(), ue("div", cI, ot($.value), 1)) : dt("", !0),
            C[6] || (C[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Te(nA, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Te(Yy, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: P,
              onFileCancelled: x
            }, null, 512),
            v.value ? dt("", !0) : (re(), ue(Ye, { key: 1 }, [
              Te(jC, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Te(NP, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Te(tA, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Te(eI, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Te(oI, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Te(wP, {
              buttons: e.uiState.floatingButtons || W.value,
              "space-buttons": e.uiState.spaceButtons || [],
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space-buttons", "fov-value", "preview", "preview-toggle"]),
            Te(sA, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Te($C, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Te(OP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Te(VC, {
            model: e.uiState.timeline || {},
            onAction: C[0] || (C[0] = (ce) => o("timeline", ce))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? dt("", !0) : (re(), xr(dC, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: C[1] || (C[1] = (ce) => o("timeline", ce))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, aI)
    ])) : dt("", !0);
  }
}, yr = "loading", ua = "ready", rr = "failed";
function pb(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function hb(e, t = "") {
  return e && (e.__panoLoadState = ua, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function mb(e, t = "") {
  return e && (e.__panoLoadState = rr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Ff(e, t) {
  return e ? e.__panoLoadState === rr ? rr : typeof t == "function" && t(e) ? ua : yr : ua;
}
function Tf(e) {
  return Ff(e) === rr;
}
function fI({ presented: e, background: t = ua, stickers: n = [] } = {}) {
  if (!e) return { status: yr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === yr, a = r.includes(yr);
  if (o && a) return { status: yr, detail: "mixed" };
  if (o) return { status: yr, detail: "background" };
  if (a) return { status: yr, detail: "stickers" };
  const l = t === rr, u = r.includes(rr);
  return l && u ? { status: rr, detail: "mixed" } : l ? { status: rr, detail: "background" } : u ? { status: rr, detail: "stickers" } : { status: ua, detail: "" };
}
const dI = "state_json", pI = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), $u = "sticker_image_1", hI = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), ag = 0.01, mI = "external_image", Qs = "pano_sticker_input_images", gI = "pano_sticker_input_videos", yI = "pano_sticker_input_frames", bI = "pano_sticker_input_video_meta", vI = !0, wl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ar = Math.PI / 180, no = 180 / Math.PI, zu = 1, _I = "rgb(255, 221, 87)", wI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, xI = 64, sg = 40, ju = 16, SI = 0.45, lg = 180, kI = 160, Zl = 24, MI = 4, NI = 4, el = /* @__PURE__ */ new Map(), cg = /* @__PURE__ */ new Map(), Ii = /* @__PURE__ */ new Map(), PI = 12, Bn = xy({
  app: vr,
  api: Wt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Tf,
    markImageFailed: mb,
    markImageLoading: pb,
    markImageReady: hb
  }
});
function Hu(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = Bn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const AI = Bn.assetSource, za = Bn.source, Gu = Bn.uiImage, CI = Bn.invalidateUiImage, II = Bn.resolvePreferredExactLinkedSource, Ku = Bn.loadPreferredExactLinkedImage;
function tl(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function EI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function OI(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function FI(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ii.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ii.delete(t), Ii.set(t, n), n);
}
function TI(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ii.delete(n), Ii.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ii.size > PI; ) {
      const o = Ii.keys().next().value;
      if (!o) break;
      Ii.delete(o);
    }
}
function DI(e) {
  return e * e * e;
}
function gc(e, t, n) {
  return { x: e, y: t, z: n };
}
function ug(e, t) {
  return gc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fg(e, t) {
  return gc(e.x * t, e.y * t, e.z * t);
}
function Bu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function LI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return gc(e.x / t, e.y / t, e.z / t);
}
function nl(e) {
  return {
    yaw: Bt(Math.atan2(e.x, e.z) * no),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * no, -90, 90)
  };
}
function ei(e, t) {
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
function Wu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return Pi(e, t);
  const d = Z((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, w = Number(e.x || 0) - b, S = Number(e.y || 0) - y;
  return w * w + S * S;
}
function tr(e, t, n) {
  return e + (t - e) * n;
}
function Cr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Z(n, 0, 1)})`;
}
function RI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let rl = { fillStyle: "", url: "" };
function VI(e, t, n) {
  if (rl.url && rl.fillStyle === String(e || ""))
    return rl.url;
  const r = RI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Zl}" height="${Zl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return rl = { fillStyle: String(e || ""), url: r }, r;
}
function xl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Gn(e) {
  return {
    r: Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Z(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function wn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function $I(e) {
  return wl.some((t) => xl(e, t.color));
}
function Uu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Z(Number(t), 0, 1), a = Z(Number(n), 0, 1);
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
function Yu(e) {
  const t = Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function zo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const gb = "pano_suite.ui_settings.v1", yb = "pano_suite.node_grid_visibility.v1";
let Uo = null, Ir = null;
function Sl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function zI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(gb)) || "").trim();
    if (!t) return Uo ? Sl(Uo) : null;
    const n = JSON.parse(t), r = Sl(n);
    return Uo = r, r;
  } catch {
    return Uo ? Sl(Uo) : null;
  }
}
function jI(e) {
  var n;
  const t = Sl(e);
  Uo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(gb, JSON.stringify(t));
  } catch {
  }
  return t;
}
function bb() {
  var e;
  if (Ir && typeof Ir == "object")
    return Ir;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(yb)) || "").trim();
    if (!t)
      return Ir = {}, Ir;
    const n = JSON.parse(t);
    return Ir = n && typeof n == "object" ? n : {}, Ir;
  } catch {
    return Ir = {}, Ir;
  }
}
function HI(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = bb()[n];
  return typeof o == "boolean" ? o : !!t;
}
function GI(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = bb();
  r[n] = !!t, Ir = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(yb, JSON.stringify(r));
  } catch {
  }
}
function KI(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function dg(e) {
  const { paintCount: t, maskCount: n } = KI(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function jo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function il(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function BI(e, t) {
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
function Ji(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function WI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function UI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function YI(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function XI(e, t, n = {}) {
  var gh;
  await Zy(e, { tolerateOperationFailure: !0 }), Bn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = BI(e, t);
  await Md();
  const u = il(e, "output_preset"), d = il(e, "coverage"), b = il(e, "bg_color"), y = il(e, dI), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Ku(
      e,
      i,
      () => le(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = w();
    return YI(i);
  }, P = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return UI(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : WI(s, i);
  }, x = t === "stickers" && e.__panoSceneStateV2 === !0, v = (x ? X0 : Y0)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: P(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Kn(d == null ? void 0 : d.value),
    sharedUiSettings: zI(),
    active: Z0(e),
    fps: x ? Hu(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, $ = F ? yp(F, !1) : { width: 220, height: 132 }, W = db(t), I = /* @__PURE__ */ fa({
    stageStatus: yr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (W.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    spaceButtons: (W.spaceButtons || []).map((i) => ({ ...i, visible: !1 })),
    // Only PanoramaStickersNode places images in space.
    toolButtons: (W.toolButtons || []).map((i) => ({ ...i, disabled: !1, ...i.key === "add-world" ? { visible: x } : {} })),
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
      customColorCss: Cr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Cr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
        Op(s);
        return;
      }
      if (i === "add-world") {
        Sv(s);
        return;
      }
      i === "replace" && Nv(s);
    }
  }, j = ({ intent: i } = {}) => {
  }, K = Zf(uI, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: W,
    paintSwatches: wl.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Cr(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      Lo();
    },
    onTimeline: (i) => _v(i),
    onImageFileSelected: O,
    onImageFileCancelled: j
  });
  let Q = null;
  try {
    Q = K.mount(V);
  } catch (i) {
    try {
      K.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const _e = V.querySelector(".pano-modal-overlay"), T = V.querySelector(".pano-modal"), C = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), ce = T == null ? void 0 : T.querySelector("[data-stage-background]"), de = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), pe = ((gh = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : gh.call(Q)) || {}, U = pe.cursor || null, X = pe.sizePreview || null, H = pe.sizeSample || null;
  if (!_e || !T || !C || !ce || !de || !U || !X || !H)
    throw K.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = C.getContext("2d"), ee = T.querySelector("[data-side]"), Y = T.querySelector("[data-video-element]"), Ie = T.querySelector("[data-port-video-element]"), Oe = T.querySelector(".pano-floating-right"), Mt = T.querySelector(".pano-floating-top"), yt = T.querySelector("[data-tool-rail]"), un = T.querySelector("[data-frame-rail]"), at = T.querySelector("[data-frame-roll-knob]"), qn = T.querySelector("[data-paint-dock]"), Et = T.querySelector(".pano-video-transport"), en = T.querySelector("[data-selection-menu]");
  let hn = !1;
  const mi = T.querySelector("[data-tooltip]"), R = T.querySelector("[data-camera-preview-host]"), G = T.querySelector("[data-camera-preview-canvas]"), ne = T.querySelector("[data-paint-color-row]"), se = T.querySelector("[data-paint-color-pop]"), me = T.querySelector("[data-paint-color-sv]"), ve = T.querySelector("[data-paint-color-sv-cursor]"), Se = T.querySelector("[data-paint-hue-strip]"), Ne = T.querySelector("[data-paint-hue-handle]");
  let we = 0, fe = 0;
  de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", ce.style.opacity = "0", o && (ee == null || ee.remove(), T.classList.add("pano-modal-readonly"));
  const je = () => {
    if (!h.customPaintSessionStart) return;
    if (xl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if ($I(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      Gn(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !xl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Ce = (i = !1) => {
    !se || se.hidden || (i ? je() : h.customPaintSessionStart = null, se.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, Ve = () => {
    se && (se.hidden && (h.customPaintSessionStart = Gn(h.customPaintColor)), se.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Gi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), Ce(!0), t === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), le()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const Ge = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, lt = JSON.stringify(dm(v)), h = {
    mode: "pano",
    selectedId: Ge,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: io,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Kn(v.coverage),
    historyController: rP(80, { entries: [lt], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Zr,
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
    showGrid: HI(e == null ? void 0 : e.id, !0),
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
    paintEngine: sf(),
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
    // PanoramaStickersNode: the Camera row of the Timeline is selected, so the inspector edits the Camera.
    inspectCamera: !1,
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
  }, De = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let it = null;
  t === "stickers" && (h.selectedId = null, v.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const ft = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), Zt = document.createElement("canvas");
  Zt.__panoFrameIdx = 0;
  const Ot = document.createElement("canvas");
  Ot.__panoFrameIdx = 0;
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
  }, sn = oM({
    onReady: () => le(),
    onFailed: () => le(),
    onUpdate: () => {
      Pe.backgroundDirty = !0, le({ localOnly: !0 });
    }
  });
  let Gr = { key: "", projection: null }, Li = { key: null, sceneState: null }, _o = null, z = null, ye = null, Ee = null;
  const Re = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Le = (i) => {
    const s = String(i || "default");
    C.style.cursor !== s && (C.style.cursor = s);
  }, Ae = {
    timer: 0,
    target: null
  }, Xe = {
    active: !1,
    depth: 0
  }, Qe = {
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
  }, Ft = 9, gn = [];
  let $t = 0;
  const wo = () => {
    var N, M;
    const i = (N = de == null ? void 0 : de.getBoundingClientRect) == null ? void 0 : N.call(de), s = (M = Oe == null ? void 0 : Oe.getBoundingClientRect) == null ? void 0 : M.call(Oe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, _ = Math.max(280, Math.floor(c - g * 2)), k = h.fullscreen ? Math.min(1200, _) : _;
    I.videoTransport.shellMaxWidthPx = k;
  }, Ri = () => {
    $t || ($t = window.requestAnimationFrame(() => {
      $t = 0, wo();
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
  }, Tt = typeof ResizeObserver < "u" ? new ResizeObserver(() => Ri()) : null;
  Tt == null || Tt.observe(de), Oe && (Tt == null || Tt.observe(Oe)), gn.push(() => {
    var i;
    $t && (window.cancelAnimationFrame($t), $t = 0), (i = Tt == null ? void 0 : Tt.disconnect) == null || i.call(Tt);
  }), Ri();
  const Sr = () => {
    Qe.thumbnailJobId += 1, Qe.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ft;
  }, xo = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      Sr();
      return;
    }
    const p = FI(f);
    if (p) {
      Qe.thumbnailSrc = f, I.videoTransport.thumbnails = p.thumbnails, I.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Qe.thumbnailJobId;
    Qe.thumbnailSrc = f, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ft;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const _ = await new Promise((oe) => {
      let ge = !1;
      const ie = (ke) => {
        ge || (ge = !0, oe(ke));
      };
      g.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), g.addEventListener("canplay", () => ie(!0), { once: !0 }), g.addEventListener("error", () => ie(!1), { once: !0 }), g.src = f, g.load();
    });
    if (Qe.thumbnailJobId !== m) return;
    const k = Number(g.videoWidth || 0), N = Number(g.videoHeight || 0);
    if (!_ || k < 1 || N < 1) {
      Qe.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), E = document.createElement("canvas"), L = 46, D = Math.max(72, Math.round(k / N * L));
    E.width = D, E.height = L;
    const q = E.getContext("2d");
    if (!q) return;
    const J = [], te = (oe) => new Promise((ge) => {
      let ie = !1;
      const ke = () => {
        ie || (ie = !0, ge());
      };
      g.addEventListener("seeked", ke, { once: !0 }), g.addEventListener("error", ke, { once: !0 });
      try {
        g.currentTime = oe;
      } catch {
        ke();
      }
    });
    for (let oe = 0; oe < Ft; oe += 1) {
      if (Qe.thumbnailJobId !== m) return;
      const ge = oe / (Ft - 1), ie = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), M * ge)) : 0;
      if (await te(ie), Qe.thumbnailJobId !== m) return;
      q.clearRect(0, 0, D, L), q.drawImage(g, 0, 0, D, L), J.push({
        id: `thumb-${oe}`,
        src: E.toDataURL("image/jpeg", 0.72),
        time: ie,
        label: Cc(ie)
      });
    }
    Qe.thumbnailJobId === m && (I.videoTransport.thumbnails = J, I.videoTransport.thumbnailCount = J.length || Ft, TI(f, {
      thumbnails: J,
      thumbnailCount: J.length || Ft,
      duration: M,
      fps: c
    }));
  };
  gn.push(() => {
    Sr();
  });
  const zt = Ry({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: ks,
    span: () => {
      if (x) return Xc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * ks());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => x,
    onFrame: (i) => {
      x ? mv(i) : bi(), le({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Hb() && (Pe.backgroundDirty = !0);
    },
    onChange: () => {
      bi(), qr(), le({ cause: "frame_view", localOnly: !0 });
    }
  });
  gn.push(() => zt.dispose());
  const tn = x && Ie instanceof HTMLVideoElement ? Vy({
    video: Ie,
    onCapture: () => {
      var c;
      const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
      i < 1 || s < 1 || (Ot.width = i, Ot.height = s, (c = Ot.getContext("2d")) == null || c.drawImage(Ie, 0, 0), Ot.__panoFrameIdx += 1, le({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => le({ cause: "frame_view", localOnly: !0 })
  }) : null;
  tn && gn.push(() => tn.dispose());
  const cr = x ? Ny({
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
      f && (Qe.failedSrcs.add(f), vi(), le());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", c]
    ])
      Y.addEventListener(f, p), gn.push(() => Y.removeEventListener(f, p));
  }
  function bs() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : c ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Vi(i) {
    return Pd(i == null ? void 0 : i.dataTransfer);
  }
  function zn(i) {
    const s = !!i;
    Xe.active !== s && (Xe.active = s, de.classList.toggle("drop-active", s));
  }
  function yc(i, s, c = h.viewFov, f = 140, p = 620) {
    const m = Xx(h.viewYaw, i), g = s - h.viewPitch, _ = c - h.viewFov, k = Math.hypot(m, g) + Math.abs(_) * 0.6, N = Math.round(Z(f + k * 2.2, f, p));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, le();
  }
  Jb();
  function kr() {
    return t === "stickers" ? vs() : v.shots;
  }
  function vs() {
    return x ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function ur(i) {
    return x && bt(i);
  }
  function bc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Qt(i) {
    return ur(i) ? dd(i, h.frame) : i;
  }
  function fr(i, s) {
    ur(i) ? q0(i, h.frame, s) : Object.assign(i, s);
  }
  function yn() {
    const i = v.painting || (v.painting = ea(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function vb(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = v.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const _ = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }
    return c;
  }
  function _b() {
    return vb("paint");
  }
  function ha(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ma(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function ln(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function ga(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const f = c.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function vc() {
    var s;
    let i = -1;
    for (const c of vs())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of yn())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function Od(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const f = yn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: s == null ? vc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function wb(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Z(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Z(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Z(c + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Z(c + p, 0, 1)
      }
    ];
  }
  function xb() {
    const i = new Set(_b()), c = yn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      c.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || c.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: vc(),
        locked: !1,
        frame: null
      });
    }), c.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), v.painting.groups = c, c;
  }
  function Sb(i, s, c) {
    var J;
    const f = (te) => (Number(te || 0) % 1 + 1) % 1, p = [];
    for (const te of c) {
      const oe = te == null ? void 0 : te.geometry, ge = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(ge) && p.push(...ge);
    }
    if (!p.length) return null;
    const m = f(((J = p[0]) == null ? void 0 : J.u) || 0);
    let g = 0, _ = 0;
    p.forEach((te) => {
      const oe = f((te == null ? void 0 : te.u) || 0);
      g += m + Zn(oe, m), _ += Number((te == null ? void 0 : te.v) || 0);
    });
    const k = (g / p.length % 1 + 1) % 1;
    let N = 1 / 0, M = -1 / 0, E = 1 / 0, L = -1 / 0;
    p.forEach((te) => {
      const oe = f((te == null ? void 0 : te.u) || 0), ge = Zn(oe, k);
      N = Math.min(N, ge), M = Math.max(M, ge);
      const ie = Number((te == null ? void 0 : te.v) || 0);
      E = Math.min(E, ie), L = Math.max(L, ie);
    });
    const D = c.reduce((te, oe) => {
      const ge = Mi(String((oe == null ? void 0 : oe.toolKind) || "pen")), ie = Dn[ge] || Dn[Zr], ke = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(te, ke);
    }, 0), q = Math.max(35e-4, D / 2048);
    return {
      centerUv: { u: ((k + (N + M) * 0.5) % 1 + 1) % 1, v: Z((E + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - N) * 0.5 + q,
      halfH: (L - E) * 0.5 + q,
      uvPad: q
    };
  }
  function yi(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = yn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = c || dr(f, s);
    return p.frame = Sb(f, s, m), p.frame;
  }
  function So() {
    var f;
    const i = vs().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = xb().map((p) => ({
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
  function _c(i = !0) {
    var c, f, p, m, g, _;
    const s = So().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = h.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), N = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((_ = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : _.toolKind) || "").trim();
      k && N === "paint" && M !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function wc(i = !0) {
    var _, k, N, M, E, L;
    const s = So();
    if (!i) return s;
    const c = String(((k = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((M = (N = h.interaction) == null ? void 0 : N.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((L = (E = h.interaction) == null ? void 0 : E.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!c || f !== "paint" || p === "eraser" || s.some((D) => D.type === "strokeGroup" && String(D.actionGroupId || "") === c))
      return s;
    const m = Nt();
    let g = s.reduce((D, q) => Math.max(D, Number((q == null ? void 0 : q.z_index) || 0)), -1) + 1;
    return m && nn(m) && String(m.actionGroupId || "") === c && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: g,
        item: null
      }
    ].sort((D, q) => Number((D == null ? void 0 : D.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0));
  }
  function kb() {
    return yn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Mo(ha("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Mb() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => ko(ma((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Fd(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function Nb() {
    var s, c, f, p;
    let i = null;
    try {
      const m = _c(), g = ((p = (f = (c = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ma()}:${xc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function xc() {
    var p, m, g, _, k, N, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Fd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const E = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), D = ((g = E == null ? void 0 : E.rawPoints) == null ? void 0 : g.length) ?? ((_ = E == null ? void 0 : E.points) == null ? void 0 : _.length) ?? 0, q = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${q}_${D}_${h.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${c || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Sc() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function jn(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function bt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function On() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function ko(i) {
    const s = ln(i);
    if (!s) return null;
    const c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ma(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function bn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = ln(i.rasterObjectId || i.id || "");
    return !!s && !!ko(ma(s));
  }
  function Mo(i) {
    const s = ga(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = yn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === c || String((p == null ? void 0 : p.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: ha("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function nn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Mo(ha(c, s));
  }
  function dr(i, s = null) {
    const c = ga(i, s), f = String(c.actionGroupId || "").trim();
    return f ? To(c.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function Pb(i, s = "paint") {
    const c = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${h.mode}:${ka()}`;
    if (h.mode === "frame") {
      const m = He(), g = String((m == null ? void 0 : m.id) || ""), _ = m ? rn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function _s(i, s, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Z(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function Zn(i, s) {
    let c = Number(i || 0) - Number(s || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function kc(i, s = null, c = null) {
    var N;
    const f = ga(i, s), p = Array.isArray(c) ? c : dr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const E = (M == null ? void 0 : M.geometry) || null, L = (E == null ? void 0 : E.geometryKind) === "lasso_fill" ? E == null ? void 0 : E.points : (E == null ? void 0 : E.processedPoints) || (E == null ? void 0 : E.rawPoints) || (E == null ? void 0 : E.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let _ = 0, k = 0;
    return m.forEach((M) => {
      _ += g + Zn(Number((M == null ? void 0 : M.u) || 0), g), k += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: Z(k / m.length, 0, 1)
    };
  }
  function ws(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Zn(Number(i.u || 0), p), _ = Number(i.v || 0) - m, k = Number(f || 0) * Ar, N = Math.cos(k), M = Math.sin(k), E = Math.max(0.02, Number(c || 1)), L = (g * N - _ * M) * E, D = (g * M + _ * N) * E;
    return {
      ...i,
      u: ((p + L) % 1 + 1) % 1,
      v: Z(m + D, 0, 1)
    };
  }
  function Td(i, s, c, f = null, p = null, m = null) {
    const g = ga(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const k = To(g.layerKind), N = Array.isArray(f) ? new Map(f.map((E) => [String((E == null ? void 0 : E.id) || ""), E])) : null;
    let M = !1;
    if (k.forEach((E) => {
      if (String((E == null ? void 0 : E.actionGroupId) || "").trim() !== _) return;
      const L = (N == null ? void 0 : N.get(String((E == null ? void 0 : E.id) || ""))) || E, D = E == null ? void 0 : E.geometry, q = L == null ? void 0 : L.geometry;
      !D || !q || (Array.isArray(q.points) && (D.points = q.points.map((J) => _s(J, s, c)), M = !0), Array.isArray(q.rawPoints) && (D.rawPoints = q.rawPoints.map((J) => _s(J, s, c)), M = !0), Array.isArray(q.processedPoints) && (D.processedPoints = q.processedPoints.map((J) => _s(J, s, c)), M = !0));
    }), M && m) {
      const E = yn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === _);
      E && (E.frame = null);
    }
    return M;
  }
  function Dd(i, s = 1, c = 0, f = null, p = null, m = null) {
    const g = ga(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const k = To(g.layerKind), N = Array.isArray(f) ? f : dr(_, g.layerKind), M = Array.isArray(N) ? new Map(N.map((D) => [String((D == null ? void 0 : D.id) || ""), D])) : null, E = (m == null ? void 0 : m.centerUv) ?? kc(_, g.layerKind, N);
    let L = !1;
    if (k.forEach((D) => {
      if (String((D == null ? void 0 : D.actionGroupId) || "").trim() !== _) return;
      const q = (M == null ? void 0 : M.get(String((D == null ? void 0 : D.id) || ""))) || D, J = D == null ? void 0 : D.geometry, te = q == null ? void 0 : q.geometry;
      !J || !te || (Array.isArray(te.points) && (J.points = te.points.map((oe) => ws(oe, E, s, c)), L = !0), Array.isArray(te.rawPoints) && (J.rawPoints = te.rawPoints.map((oe) => ws(oe, E, s, c)), L = !0), Array.isArray(te.processedPoints) && (J.processedPoints = te.processedPoints.map((oe) => ws(oe, E, s, c)), L = !0));
    }), L && m) {
      const D = yn().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === _);
      D && (D.frame = null);
    }
    return L;
  }
  function Ld(i, s, c, f = null) {
    const p = ln(i);
    if (!p) return !1;
    const m = On().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, _ = (g == null ? void 0 : g.transform) || {}, k = Number(_.du || 0) + Number(s || 0), N = Z(Number(_.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = N, !0;
  }
  function Ab(i, s = 1, c = null) {
    const f = ln(i);
    if (!f) return !1;
    const p = On().find((N) => String((N == null ? void 0 : N.id) || "").trim() === f);
    if (!p) return !1;
    const m = c && typeof c == "object" ? c : p, g = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(g.scale || 1)), k = Z(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = k, !0;
  }
  function Nt() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Mo(i);
    if (s) return s;
    const c = ko(i);
    return c || (t === "cutout" ? Sc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : kr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function Qn() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], c = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || c.has(p)) return;
      c.add(p);
      const m = p === String(h.selectedId || "") ? Nt() : Mo(p) || ko(p) || (t === "cutout" ? Sc().find((g) => String((g == null ? void 0 : g.id) || "") === p) : kr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function ya(i = null) {
    const s = Array.isArray(i) ? i : Qn();
    if (!s || s.length < 2) return null;
    const c = s.map((N) => Xt(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((N) => N.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = c.flatMap((N) => N.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), _ = Math.min(...p), k = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (_ + k) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x: g, y: _ },
        { x: g, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: _, a: { x: m, y: _ }, b: { x: g, y: _ } },
        { edge: "right", x: g, y: (_ + k) * 0.5, a: { x: g, y: _ }, b: { x: g, y: k } },
        { edge: "bottom", x: (m + g) * 0.5, y: k, a: { x: g, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (_ + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: _ },
      rotateHandle: { x: (m + g) * 0.5, y: _ - 30 }
    };
  }
  function Rd(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function xs() {
    const i = Nt();
    return i ? nn(i) || bn(i) ? "stroke" : jn(i) ? "frame" : "image" : null;
  }
  function dn(i) {
    if (!i || typeof i != "object") return !1;
    if (nn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), c = yn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (bn(i)) {
      const s = ln(i.rasterObjectId || i.id || ""), c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Mc(i = null) {
    const s = Array.isArray(i) ? i : Qn();
    return s.length > 0 && s.every((c) => dn(c));
  }
  function Cb(i, s) {
    const c = s === !0;
    if (!i || typeof i != "object") return !1;
    if (nn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = yn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    if (bn(i)) {
      const f = ln(i.rasterObjectId || i.id || ""), p = On().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function Ib() {
    if (r) return;
    const i = Qn();
    if (!i.length) return;
    const s = !Mc(i);
    let c = !1;
    i.forEach((f) => {
      Cb(f, s) && (c = !0);
    }), c && (et(), ct(), Ke(), $e(), le());
  }
  function pr(i) {
    h.inspectCamera = !1, Po(), De.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && bt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && jn(i) ? v.active.selected_shot_id = i.id || null : i ? jn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function Eb(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const _ = String((g == null ? void 0 : g.id) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }), h.selectedIds = c, h.inspectCamera = !1, Po(), De.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && c.includes(p) ? p : c[c.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && bt(m) && m.id || null, m && jn(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function Vd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, g;
      const p = Gt(c) ? String(c.id || $u) : String(((g = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : g.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Ob(i) {
    return i === "frame" ? Me.camera : i === "stroke" ? Me.paintbrush_vertical_tool : Me.image;
  }
  function Nc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Ob(i.kind)
    };
  }
  function Ss() {
    return vc();
  }
  function Gt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : x ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === $u || String(i.source_kind || "") === mI;
  }
  function No(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Fb(i) {
    return Gt(i) && No(i) ? sy : 1;
  }
  function Tb() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function Db() {
    return String(Tb() || "") === "lasso_fill";
  }
  function Lb() {
    if (r) return;
    const i = Nt();
    !i || !Gt(i) || (i.visible = No(i), Dt(), et(), ct(), $e(), Ke(), le());
  }
  function Rb() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !Gt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ic(Qs, () => {
      le();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = _i(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), et(), ct(), $e(), Ke(), le();
  }
  function Vb(i) {
    if (!i || !Gt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Ic(Qs, () => {
      le();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = _i(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function $b() {
    const i = Nt();
    if (!i || !Gt(i)) return !1;
    const s = Vb(i);
    if (!s) return !1;
    const c = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function Kr(i) {
    return Bn.uiList(e, i);
  }
  function Pc(i) {
    return Bn.uiValue(e, i);
  }
  function $d() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Dl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function zb() {
    const { metaKey: i } = $d(), s = Pc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Ac(i) {
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
  function Cc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), c = Math.floor(s / 60), f = s % 60;
    return `${c}:${String(f).padStart(2, "0")}`;
  }
  function ks() {
    return x ? v.timeline.fps : Qe.metaFps || 1e3;
  }
  function bi(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), f = zt.frame / ks(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = zt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : I.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : I.videoTransport.volume
    ), N = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : gi(Y), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: Cc(f),
      durationLabel: Cc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: N,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? Ft))
    });
  }
  function zd() {
    return !!(Y instanceof HTMLVideoElement && !x && Y.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function jd() {
    if (!(Y instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), bi({
      hasAudio: I.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function jb() {
    bi({
      visible: zd()
    });
  }
  function Hb() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    (Zt.width !== i || Zt.height !== s) && (Zt.width = i, Zt.height = s);
    const c = Zt.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), Zt.__panoFrameIdx = Number(Zt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Hd() {
    return !zt.showsVideo && Number(Zt.width || 0) > 0 && Number(Zt.height || 0) > 0 && Number(Zt.__panoFrameIdx || 0) > 0 ? Zt : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Gd() {
    Zt.__panoFrameIdx = 0, Pe.backgroundDirty = !0;
  }
  function vi() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = $d(), s = xn(e, "background") && Kr(i)[0] || null, c = za(s), f = [c, Bn.linkedVideoFile(e, sp())].filter(Boolean), p = f.find((E) => !Qe.failedSrcs.has(E)) || "";
    Qe.videoFailed = !p && f.length > 0;
    const m = p && p === c ? zb() : null;
    Qe.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (x ? v.timeline.fps : 24))), _ = Y.dataset.panoSrc === p && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : _)), N = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * g))), M = !!(m != null && m.has_audio) || gi(Y);
    return p && Y.dataset.panoSrc !== p ? (Y.pause(), Gd(), Y.dataset.panoSrc = p, Y.loop = !x && !!I.videoTransport.loop, Y.muted = !!I.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), Y.src = p, Y.load(), zt.setSource(!0), x || zt.seek(0)) : !p && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Gd(), Sr(), zt.setSource(!1)), x || (Y.loop = !!I.videoTransport.loop), p && !x && Qe.thumbnailSrc !== p && !Qe.thumbnailFailedSrcs.has(p) && xo(p, k, g), p || Sr(), bi({
      ready: !!p,
      visible: !!p && zd(),
      duration: k,
      frameCount: N,
      fps: g,
      hasAudio: M,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), p || null;
  }
  function Kd(i, s = null) {
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
  function Ic(i, s = null) {
    return Gu(e, i, ft, s || (() => le()));
  }
  function Ec(i = null) {
    return xn(e, "external-sticker") ? Ic(Qs, i) : null;
  }
  function Bd() {
    if (!xn(e, "external-sticker")) return null;
    const i = Kr(bI)[0];
    if (!i || typeof i != "object") return null;
    const s = Kr(yI).map(za).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = za(Kr(gI)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function Gb() {
    const i = v.stickers.find(Gt), s = i ? Bd() : null, c = s ? Sy(i.clip, h.frame, v.timeline.fps, s.meta) : null;
    tn.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: zt.advancing, fps: v.timeline.fps });
    const f = i ? $c(i) : null, p = s != null && s.frames ? cr.picture(s.frames, c, s.meta, f) : tn.picture(Ot, f);
    return p ? { media: p, revision: Ac(p), source: My(s, f) } : null;
  }
  function _i(i, s, c) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(c || 1)), m = Z(Number(i || 30), 0.1, 179) * Ar, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return Z(g * no, 0.1, 179);
  }
  function Kb(i) {
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
      const g = Number(m.yaw_deg), _ = Number(m.pitch_deg), k = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![g, _, k, N].every((D) => Number.isFinite(D))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const E = {
        yaw_deg: M,
        pitch_deg: Z(_, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: Z(N, 0.1, 179)
      }, L = Number(c.source_aspect);
      return Number.isFinite(L) && L > 0 && (E.source_aspect = L), E;
    } catch {
      return null;
    }
  }
  function Wd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = uo(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Z(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Bb(i) {
    var _;
    if (!i || typeof i != "object") return Wd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const k = Z(p, 0.1, 179) * Ar, N = Z(m, 0.1, 179) * Ar, M = Math.tan(N * 0.5);
      if (Math.abs(M) > 1e-6) {
        const E = Math.tan(k * 0.5) / M;
        Number.isFinite(E) && E > 0 && (g = E);
      }
    }
    if (i != null && i.asset_id && ((_ = v == null ? void 0 : v.assets) != null && _[i.asset_id])) {
      const k = v.assets[i.asset_id], N = Number((k == null ? void 0 : k.w) || 0), M = Number((k == null ? void 0 : k.h) || 0);
      N > 0 && M > 0 && (g = N / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Z(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Wb(i) {
    return Bn.linkedValue(e, i);
  }
  function Ub(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Kb(s);
    if (f) {
      const g = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), _ = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: _i(f.hFOV_deg, g, _),
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
  function Yb() {
    const i = Ec(() => {
      li(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? Kd(Pc("pano_sticker_input_pose"), null) : null;
    return Dy(v, Ty(e, { pose: s, image: i }));
  }
  function Xb() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, c = Ec(() => {
      li(e, "image-loaded");
    }), f = Kd(Pc("pano_sticker_input_pose"), null), p = Wb("sticker_state"), m = Bn.externalStateHash(e, p), g = s == null ? null : Ub(f, p, c);
    return Fy(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Ud(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? Yb() : Xb();
    if (s.changed) {
      const c = v.stickers.find(Gt);
      v.stickers = s.state.stickers, v.active = s.state.active, c && h.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (h.selectedId = null, h.selectedIds = []), ct(), $e(), Ke();
    }
    le();
  }
  function ba(i = {}) {
    const c = i.preservePanelValues !== !1 ? Qt(Nt()) : null;
    c && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ri(c)
    }), h.selectedId = null, h.selectedIds = [], Po(), h.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function va() {
    return !x || !h.worldSelectedId ? null : v.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function Oc(i) {
    pr(null), h.worldSelectedId = i, Pe.backgroundDirty = !0;
  }
  function Po() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, Pe.backgroundDirty = !0);
  }
  function Ms(i) {
    return !!i && !r && !i.locked;
  }
  function qb() {
    if (t !== "cutout") return;
    const i = He();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function Fc() {
    if (t !== "cutout") return;
    const i = He();
    Xi(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Me.camera : Me.plus_circle
    });
  }
  function $i() {
    const i = t === "cutout" && h.mode === "frame", s = !i && !!h.showGrid;
    Xi(I.floatingButtons, "action", "reset-view", {
      disabled: r || i
    });
    const c = zi(), f = c && h.spaceMode === "6dof";
    I.spaceButtons.forEach((p) => {
      p.visible = c, p.pressed = p.key === h.spaceMode ? "true" : "false";
    }), Xi(I.floatingButtons, "action", "frame-view", {
      visible: f,
      disabled: r || !f
    }), Xi(I.floatingButtons, "action", "toggle-grid", {
      icon: s ? Me.eye : Me.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Br() {
    var c;
    const i = !!He();
    h.mode === "frame" && !i && (h.mode = "pano"), h.outputPreviewRect = null, I.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && h.mode === "frame" ? He() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = zo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((c = h.interaction) == null ? void 0 : c.kind) === "roll_frame", I.frameRollKnob.armed = !!s && h.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? ri(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(ri(s)) === f
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!He(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = h.mode !== "frame", I.cameraPreview.expanded = !!h.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame), $i(), jp() ? ht(h.pointerPos) : Le(h.mode === "pano" ? "grab" : "default");
  }
  function Jb() {
    const s = lp({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Yd() {
    return ly({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, C.width, C.height);
  }
  function Xd() {
    return !x || !xn(e, "scene") ? null : gm(Kr("pano_scene_files"), Kr("pano_scene_meta"), za);
  }
  function Zb() {
    return !x || !xn(e, "external-sticker") ? null : gm(Kr("pano_sticker_files"), Kr("pano_sticker_meta"), za);
  }
  function zi() {
    return h.mode === "pano" && qd();
  }
  function qd() {
    return x && Lk({ sceneLinked: !!my(e).scene, files: Xd(), stickers: v.stickers });
  }
  function _a() {
    return h.spaceMode === "6dof" && zi();
  }
  function Tc() {
    var i, s, c;
    return CN((c = (s = (i = vr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : c.call(s, Jy));
  }
  function Jd() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Zd(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function Qb(i) {
    Zd(ny(Jd(), i)), Pe.backgroundDirty = !0, $i(), le({ localOnly: !0 });
  }
  function Wr() {
    var c;
    const i = h.viewMoved ? h.viewDistance : ((c = ji()) == null ? void 0 : c.radius) || io, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return Nk(h.spaceMode, s);
  }
  function ji() {
    var i;
    return ((i = Ur().space) == null ? void 0 : i.sphere) ?? null;
  }
  function Dc(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, Pe.backgroundDirty = !0, le({ localOnly: !0 });
  }
  function Qd() {
    var i;
    return ((i = ji()) == null ? void 0 : i.radius) || io;
  }
  function e1() {
    const i = ji();
    i && Dc(Tk(Wr(), i, C.width, C.height));
  }
  function Lc(i) {
    return sn.pick(Vs(), i.x, i.y, C.width, C.height);
  }
  function ep(i, s) {
    var c;
    return Ck(i, s, h.viewMoved ? null : (c = ji()) == null ? void 0 : c.center, Qd());
  }
  function tp() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function t1(i, s) {
    const c = performance.now(), f = { x: i.x, y: i.y, time: c, key: sn.contentKey(), view: tp() };
    if (!Ik(Ee, f)) {
      const m = Lc(i);
      Ee = { ...f, cost: performance.now() - c, hit: m };
    }
    const p = Wr();
    Dc(Fk(p, ep(p, Ee.hit), s, Qd())), Ee.view = tp(), Ee.wheelTime = c;
  }
  function np(i, s, c) {
    const f = ep(Wr(), Lc(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: mc(Wr(), f) }, ht(s), C.setPointerCapture(c);
  }
  function Rc() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${C.width}|${C.height}`;
    return Gr.key !== i && (Gr = { key: i, projection: cy(Yd(), C.width, C.height) }), Gr.projection;
  }
  function wa(i) {
    const s = Rc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Vc(i, s) {
    return Rc().ray(i, s);
  }
  function wi() {
    const i = C.width, s = C.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const _ = s, k = _ * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: _ };
    }
    const p = i, m = p / c;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function $c(i) {
    var g;
    if (i && typeof i == "object" && (Gt(i) || i.external === !0))
      return Ec(() => {
        li(e, "image-loaded");
      });
    const s = x ? xa(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = ft.get(s);
    if (c) return c;
    const f = x ? J0(i.source) : (g = v.assets) == null ? void 0 : g[s], p = AI(f);
    if (!p) return null;
    const m = new Image();
    return pb(m, p), m.onload = () => {
      hb(m, p), le();
    }, m.onerror = () => {
      mb(m, p), le();
    }, m.src = p, ft.set(s, m), m;
  }
  function xa(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function rp(i, s = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const f = mn.get(c);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = c, mn.set(c, p), p;
  }
  function n1(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = fn.get(s);
    if (c) return c.ready ? c : null;
    const f = rp(i, () => {
      const M = fn.get(s);
      M && (M.ready = !1), le({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const _ = g.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, p, m), _.drawImage(f, 0, 0, p, m);
    const k = _.getImageData(0, 0, p, m).data, N = { canvas: g, width: p, height: m, alpha: k, ready: !0 };
    return fn.set(s, N), N;
  }
  function r1(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Zn(Number(i.u || 0), p), _ = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), N = Number(f || 0) * Ar, M = Math.cos(N), E = Math.sin(N), L = g / k, D = _ / k, q = L * M + D * E, J = -L * E + D * M;
    return {
      ...i,
      u: ((p + q) % 1 + 1) % 1,
      v: m + J
    };
  }
  function i1(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = r1(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), _ = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(_ > 1e-6) || !(k > 1e-6)) return null;
    const N = Zn(Number(g.u || 0), Number(c.u0 || 0)) / _, M = (Number(g.v || 0) - Number(c.v0 || 0)) / k;
    if (N < 0 || N > 1 || M < 0 || M > 1) return 0;
    const E = n1(i);
    if (!E) return null;
    const L = Z(Math.floor(N * E.width), 0, E.width - 1), D = Z(Math.floor(M * E.height), 0, E.height - 1);
    return Number(E.alpha[(D * E.width + L) * 4 + 3] || 0);
  }
  function ip(i, s, c, f = null) {
    if (!(s != null && s.visible) || !ei(c, s.corners)) return !1;
    const p = f || mr(c, performance.now()), m = i1(i, p);
    return m === null ? !0 : m > 8;
  }
  function o1() {
    var f, p, m, g, _, k, N, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, _c(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : _.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((M = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: c };
  }
  function a1() {
    var D, q, J;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = Hn(), f = `${xc()}:${c.width}:${c.height}`;
    if (((D = h._activePaintEraserPreviewInfo) == null ? void 0 : D.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = wn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Uc(te, p.targetSpace, !0);
    }
    const g = Sa(c.width, c.height, { readback: !0 });
    if (!xp(g, p, { w: c.width, h: c.height })) return null;
    const _ = ((J = (q = g.ctx) == null ? void 0 : q.getImageData(0, 0, c.width, c.height)) == null ? void 0 : J.data) || null;
    if (!_) return null;
    let k = c.width, N = c.height, M = -1, E = -1;
    for (let te = 0; te < c.height; te += 1)
      for (let oe = 0; oe < c.width; oe += 1)
        _[(te * c.width + oe) * 4 + 3] <= 8 || (oe < k && (k = oe), te < N && (N = te), oe > M && (M = oe), te > E && (E = te));
    if (M < k || E < N)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const L = {
      surface: g,
      bounds: { minX: k, minY: N, maxX: M, maxY: E },
      key: `${f}:${k}:${N}:${M}:${E}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: L }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Ao() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function s1(i, s, c) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, _ = Number(m.u0 || 0) + Number(g.du || 0), k = Number(m.u1 || 0) + Number(g.du || 0), N = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(Z(N, 0, 1) * c),
        maxY: Math.ceil(Z(M, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = dr(i.actionGroupId, "paint"), g = yi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const _ = g.centerUv.u - g.halfW, k = g.centerUv.u + g.halfW, N = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(Z(N, 0, 1) * c),
        maxY: Math.ceil(Z(M, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    return null;
  }
  function l1(i, s, c) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: c - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((_) => !(g.maxX < _.minX || _.maxX < g.minX || g.maxY < _.minY || _.maxY < g.minY)));
  }
  function c1(i, s, c) {
    var ke, Be, qe, st, be, ae, he;
    if (!i || !s || !((ke = c == null ? void 0 : c.surface) != null && ke.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), p = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = s1(s, f, p);
    if (m && !l1(m, c.bounds, f)) return i;
    const g = String(((Be = s.item) == null ? void 0 : Be.id) || s.id || ""), _ = ((qe = s.item) == null ? void 0 : qe.transform) || {}, k = `${c.key}:${g}:${f}:${p}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, N = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(k)) return N.get(k);
    const M = Z(Math.floor(Number(((st = c.bounds) == null ? void 0 : st.minX) || 0)), 0, Math.max(0, f - 1)), E = Z(Math.floor(Number(((be = c.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, p - 1)), L = Z(Math.ceil(Number(((ae = c.bounds) == null ? void 0 : ae.maxX) || 0)), M, Math.max(0, f - 1)), D = Z(Math.ceil(Number(((he = c.bounds) == null ? void 0 : he.maxY) || 0)), E, Math.max(0, p - 1)), q = Math.max(1, L - M + 1), J = Math.max(1, D - E + 1), te = Sa(f, p, { readback: !0 });
    te.ctx.clearRect(0, 0, f, p), te.ctx.drawImage(i, 0, 0);
    const oe = te.ctx.getImageData(M, E, q, J);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(c.surface.canvas, 0, 0), te.ctx.restore();
    const ge = te.ctx.getImageData(M, E, q, J);
    let ie = !1;
    for (let Fe = 0; Fe < q * J; Fe += 1) {
      const xe = oe.data[Fe * 4 + 3], Ue = ge.data[Fe * 4 + 3];
      if (xe > Ue) {
        ie = !0;
        break;
      }
    }
    return ie ? (N.size > 64 && N.clear(), N.set(k, te.canvas), te.canvas) : (N.set(k, i), i);
  }
  function op(i, s = null) {
    const c = ln((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const p = rp(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = o1(), _ = (i == null ? void 0 : i.transform) || {}, k = [
      c,
      m,
      g,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      ka()
    ].join(":"), N = Jn.get(k);
    if (N) return N;
    Jn.size > 64 && Jn.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const E = M.getContext("2d");
    if (!E) return null;
    const L = Number(f.u0 || 0) * m, D = Number(f.v0 || 0) * g, q = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), J = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), te = L + q * 0.5 + Number(_.du || 0) * m, oe = D + J * 0.5 + Number(_.dv || 0) * g, ge = Number(_.rot_deg || 0) * Ar, ie = Math.max(0.01, Number(_.scale || 1));
    for (const ke of [-m, 0, m])
      E.save(), E.translate(te + ke, oe), E.rotate(ge), E.scale(ie, ie), E.drawImage(p, -q * 0.5, -J * 0.5, q, J), E.restore();
    return Jn.set(k, M), M;
  }
  async function zc(i, s) {
    const c = await new Promise((_) => i.toBlob(_, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Wt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let Ns = null, Ps = !1;
  function u1() {
    const i = dg(v.painting), { width: s, height: c } = Na();
    return sk(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function ap() {
    const i = String(e.id ?? "0"), s = el.get(i);
    if (Ps && s) return s;
    const c = (async () => {
      var m, g, _, k, N, M, E, L, D, q, J, te;
      const f = Ma(), p = dg(v.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Ns = f, Pn());
        return;
      }
      if (Ns !== f && !Ps) {
        Ps = !0;
        try {
          Os();
          const oe = _c(!1), ge = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, oe)) || null, ie = ((_ = ge == null ? void 0 : ge.displayPaint) == null ? void 0 : _.canvas) || null, ke = ((k = ge == null ? void 0 : ge.committedMask) == null ? void 0 : k.canvas) || null, Be = Math.max(1, Number(((N = ge == null ? void 0 : ge.descriptor) == null ? void 0 : N.width) || (ie == null ? void 0 : ie.width) || (ke == null ? void 0 : ke.width) || 2048)), qe = Math.max(1, Number(((M = ge == null ? void 0 : ge.descriptor) == null ? void 0 : M.height) || (ie == null ? void 0 : ie.height) || (ke == null ? void 0 : ke.height) || 1024));
          (!ie && p.totalPaintCount > 0 || !ke && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((E = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.width) || 0) !== Be || Number(((L = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== qe) && (h._paintLayerSyncBlankSurface = Sa(Be, qe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Be, qe));
          const st = ie || p.totalPaintCount > 0 && ((D = h._paintLayerSyncBlankSurface) == null ? void 0 : D.canvas) || null, be = ke || p.totalMaskCount > 0 && ((q = h._paintLayerSyncBlankSurface) == null ? void 0 : q.canvas) || null;
          if (!st && !be) return;
          let ae = null, he = null;
          const Fe = [];
          if (p.totalPaintCount > 0) {
            ae = await zc(st, `pano_paint_${i}.png`);
            for (const xe of oe) {
              const Ue = String(xe || "").trim();
              if (!Ue) continue;
              const We = ((te = (J = h.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : te.call(J, Ue)) || null;
              if (!We) continue;
              const ze = Ue.replace(/[^a-zA-Z0-9_-]+/g, "_"), Je = await zc(We, `pano_group_${i}_${ze}.png`);
              Je && Fe.push({
                id: Ue,
                actionGroupId: Ue,
                image: Je
              });
            }
          }
          p.totalMaskCount > 0 && (he = await zc(be, `pano_mask_${i}.png`)), f === Ma() && (v.painting_layer = {
            paint: ae,
            mask: he,
            groups: Fe,
            revision: f
          }, Ns = f, Pn());
        } catch (oe) {
          throw oe;
        } finally {
          Ps = !1;
        }
      }
    })();
    return el.set(i, c), c.finally(() => {
      el.get(i) === c && el.delete(i);
    }), c;
  }
  function jc() {
    if (t === "cutout") {
      const p = Hd();
      if (p) return p;
      const m = Ku(
        e,
        ["erp_image", "bg_erp"],
        () => le(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Tf(m) ? m : Gu(e, "pano_input_images", ft, () => le()) || m || null;
    }
    const i = Hd();
    if (i) return i;
    const s = xn(e, "background") ? Gu(e, "pano_input_images", ft, () => le()) : null;
    if (s && !Tf(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = sp();
    return Ku(e, c, () => le(), `background:${c.join("|")}`) || s || null;
  }
  function sp() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Hc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function f1() {
    if (sn.failed) return { status: rr, detail: "renderer" };
    if (!sn.ready) return { status: yr, detail: "boot" };
    let i = ua;
    const s = [];
    if (h.showPanorama) {
      const c = jc();
      i = Qe.videoFailed ? rr : Ff(c, Hc);
    }
    if (h.showObjects)
      for (const c of vs()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = $c(c);
        s.push(Ff(f, Hc));
      }
    return fI({
      presented: Pe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Co() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], ft.delete(s));
    });
  }
  function Gc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function Kc(i, s = null) {
    const { lon: c, lat: f } = Gc(i), p = wi();
    let m = p.x + (c / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function As(i) {
    const s = Qt(i), c = da(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(Z(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Ar), p = Math.tan(Z(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Ar);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: p
    };
  }
  function xi(i, s, c) {
    return LI(ug(ug(i.centerDir, fg(i.right, s)), fg(i.up, c)));
  }
  function lp(i) {
    const s = As(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => xi(s, f * s.tanX, p * s.tanY));
  }
  function cp(i, s, c) {
    const f = As(i), p = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return xi(f, p, m);
  }
  function up(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: Z((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function d1(i) {
    var k, N, M, E;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), p = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => _s(ws(L, c, f, p), m, g));
  }
  function p1(i) {
    const s = ln((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${ka()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (h.mode === "frame") {
      const m = He(), g = m ? rn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function h1(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = jn(i) ? "frame" : bt(i) ? "sticker" : "item", f = Qt(i), p = [
      c,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      ri(f),
      ur(i) && Ci(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = He(), g = m ? rn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function fp() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function m1() {
    return fp() ? `${bp()}:mask_display` : "";
  }
  function dp(i) {
    if (!h.showMask) return i;
    const s = fp();
    if (!s) return i;
    const c = m1(), f = i.reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), p = (Array.isArray(v.stickers) ? v.stickers : []).reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function g1() {
    var f, p;
    const i = wc(!0), s = a1(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const _ = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!_) continue;
        c.push({
          id: `paint_group:${g}`,
          source: _,
          revision: `${bp()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, _ = ln((g == null ? void 0 : g.id) || m.id || "");
        if (!_) continue;
        const k = op(g, () => le());
        if (!k) continue;
        const N = c1(k, m, s), M = (g == null ? void 0 : g.transform) || {};
        c.push({
          id: `raster:${_}`,
          source: N,
          revision: [
            Ma(),
            (s == null ? void 0 : s.key) || "",
            _,
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
    return dp(c);
  }
  function y1() {
    return (h.showObjects ? g1() : dp([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Ur() {
    return _o || (_o = b1()), _o;
  }
  function b1() {
    const i = jc(), s = y1(), c = { ...v.assets };
    for (const E of x ? [] : v.stickers) {
      const L = String((E == null ? void 0 : E.asset_id) || "");
      L && !c[L] && ft.has(L) && (c[L] = { type: "comfy_image", filename: L });
    }
    const f = x ? v.stickers.map((E) => bc(E) ? { ...E, source: { kind: "file", filename: xa(E) } } : E) : v.stickers, p = JSON.stringify([f, Object.keys(c), v.scene]);
    Li.key !== p && (Li = { key: p, sceneState: mo({ ...v, stickers: f, assets: c, painting: null }) });
    const m = tn ? Gb() : null, g = (E) => {
      if (tn && Gt(E)) return m;
      const L = $c(E);
      return L ? { media: L, revision: Ac(L) } : null;
    }, _ = h.showObjects ? uy(Li.sceneState, h.frame, v.stickers, { media: g, paintLayers: s }) : s.map((E) => ({ kind: "erp", ...E })), k = i && (i === Y || i === Zt) ? Y.dataset.panoSrc : i, N = h.showPanorama && Hc(i) ? { media: i, revision: Ac(i), coverage: Kn(v.coverage), source: k } : null;
    Zd(Pk(Jd(), qd()));
    const M = zi() ? v1(Li.sceneState, g) : null;
    return { background: N, layers: _, space: M };
  }
  function v1(i, s) {
    const c = sd(i, h.frame), f = Xd(), p = iy(f, c.scene), m = p != null && p.url ? sn.sceneBox(p.url) : null, g = m && bm(p.kind, m), _ = Zb(), k = h.showObjects ? Rk(_, i, c) : null, N = k != null && k.url ? sn.sceneBox(k.url) : null, M = N ? [{ box: bm(k.kind, N), value: k.value }] : [], E = h.showObjects ? rM(i, h.frame, v.stickers, { media: s }) : [], L = zk(jk(c, g, E, M)), D = h.showGrid && !h.fullscreen ? Qk((L == null ? void 0 : L.radius) || io) : null;
    return {
      gizmo: _1(c),
      grid: D,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: Vk(_, i),
      sticker: k,
      stickers: E,
      sphere: L
    };
  }
  function _1(i) {
    const s = va(), c = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !h.showObjects || !Ms(s) || !(c != null && c.active) ? null : { mode: h.gizmoMode, transform: oy(c) };
  }
  function w1() {
    if (!Pe.backgroundDirty && Pe.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = Ur(), f = ce.width, p = ce.height, m = sn.render({
      width: f,
      height: p,
      camera: c ? Cu(Wr(), f, p, c.sphere) : Yd(),
      background: i,
      layers: s,
      space: c
    }), g = ce.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !c ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), Pe.backgroundWasVisible = !!m, Pe.backgroundDirty = !1, ye = null, $i(), (h.worldSelectedId || hn) && Ke();
  }
  function pp(i, s, c, f) {
    const { background: p, layers: m } = Ur();
    if (!p && !m.length) return !1;
    const g = sn.render({ width: s.w, height: s.h, camera: hl(c), background: p, layers: m, owner: f });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function x1(i) {
    const s = Ur(), c = JSON.stringify([i, ce.width, ce.height, Sm(s)]);
    if (c === ye) return;
    const f = sn.renderUnwrap({ width: i.w, height: i.h, ...s }), p = ce.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, ce.width, ce.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), ye = f ? c : null, Pe.backgroundWasVisible = !1;
  }
  function S1(i = !1) {
    const s = C.width, c = C.height, f = wi();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || A.clearRect(0, 0, s, c), Os(), x1(f), h.showGrid && !h.fullscreen) {
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
  function hp(i, s, c = 1) {
    let f = !1;
    A.strokeStyle = s, A.lineWidth = c, A.beginPath();
    for (const p of i) {
      const m = wa(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), f = !0);
    }
    A.stroke();
  }
  function k1(i = !1) {
    const s = C.width, c = C.height;
    if (i || A.clearRect(0, 0, s, c), Os(), w1(), h.showGrid && !h.fullscreen && Ur().space)
      M1();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push($n(p, g));
        hp(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push($n(g, p));
        hp(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", f.forEach((p) => {
        const m = wa(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function M1() {
    const i = Cu(Wr(), C.width, C.height, ji()), s = mm(i, [0, 0, 0], C.width, C.height);
    s && (A.fillStyle = "rgba(255, 221, 87, 0.9)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", A.fillText("ERP origin", s.x, s.y - 12));
  }
  function N1(i, s = null, c = null, f = null) {
    if (h.mode === "frame") {
      const p = s || He();
      if (!p) return [];
      const m = c || rn(p);
      return rv(i, p, m);
    }
    return Sp(i, f);
  }
  function Cs(i, s = null, c = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = Sp([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Io(i);
    return m ? Yr(m, s, c, f) : null;
  }
  function P1(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = dr(c, i.layerKind), p = yi(c, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || kc(c, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], k = h.mode === "frame" ? He() : null, N = k ? rn(k) : null;
    for (const ie of f) {
      const ke = (ie == null ? void 0 : ie.geometry) || null, Be = (ke == null ? void 0 : ke.geometryKind) === "lasso_fill" ? ke == null ? void 0 : ke.points : (ke == null ? void 0 : ke.processedPoints) || (ke == null ? void 0 : ke.rawPoints) || (ke == null ? void 0 : ke.points) || [], qe = N1(Be, k, N, g).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!qe.length) continue;
      const st = Mi(String((ie == null ? void 0 : ie.toolKind) || "pen")), be = Dn[st] || Dn[Zr];
      _.push({
        points: qe,
        closed: String((ke == null ? void 0 : ke.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || i.layerKind || "paint")
      });
    }
    const M = Cs(m, null, k, N, g);
    if (!M) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const L = wb(p).map((ie) => Cs(ie, M.x, k, N, g)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (L.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const D = (ie, ke) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((ke == null ? void 0 : ke.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((ke == null ? void 0 : ke.y) || 0)) * 0.5,
      a: ie,
      b: ke
    }), q = D(L[0], L[1]), J = D(L[1], L[2]), te = D(L[2], L[3]), oe = D(L[3], L[0]), ge = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...q },
        { edge: "right", ...J },
        { edge: "bottom", ...te },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: q.x, y: q.y },
      rotateHandle: { x: q.x, y: q.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return h._strokeGeomCache.set(s, ge), ge;
  }
  function A1(i, s) {
    const c = h.mode === "frame" ? He() : null, f = c ? rn(c) : null, p = up(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = Cs(p, null, c, f, m), k = d1(i).map((L) => Cs(L, (g == null ? void 0 : g.x) ?? null, c, f, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(k) || k.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, L), L;
    }
    const N = k.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), E = {
      kind: "rasterObject",
      center: {
        x: N.reduce((L, D) => L + Number(D.x || 0), 0) / N.length,
        y: N.reduce((L, D) => L + Number(D.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return h._strokeGeomCache.set(s, E), E;
  }
  function Yr(i, s = null, c = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = c || He(), E = f || rn(M);
      if (!M || !E) return null;
      const L = M ? Pa(M, i) : null;
      return L ? {
        x: Number(E.x || 0) + Number(L.x || 0) * Number(E.w || 0),
        y: Number(E.y || 0) + Number(L.y || 0) * Number(E.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Kc(i, s);
    const m = 1e-4, g = Rc().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const _ = C.width, k = C.height, N = Math.max(_, k) * 2;
    return {
      x: Z(g.x, -N, _ + N),
      y: Z(g.y, -N, k + N),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function C1(i, s = []) {
    if (h.mode !== "pano" || bt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? OI(0.035, 0.2, Math.min(...c)) : 1;
  }
  function I1(i) {
    if (ur(i) && !Ci(i.clip, h.frame)) return { visible: !1 };
    const s = Qt(i), c = $n(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? He() : null, p = f ? rn(f) : null, m = h.mode === "pano" && (bt(i) || jn(i)), g = m ? { clipBehind: !0 } : null, _ = Yr(c, null, f, p, g);
    if (!_) return { visible: !1 };
    const k = As(i), M = lp(i).map((he) => Yr(he, _.x, f, p, g)).filter((he) => Number.isFinite(he == null ? void 0 : he.x) && Number.isFinite(he == null ? void 0 : he.y));
    if (M.length < 4) return { visible: !1 };
    const E = xi(k, 0, k.tanY), L = xi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), D = Yr(E, _.x, f, p, g);
    if (!D) return { visible: !1 };
    const q = Yr(L, (D == null ? void 0 : D.x) ?? _.x, f, p, g), J = ((q == null ? void 0 : q.x) ?? D.x) - D.x, te = ((q == null ? void 0 : q.y) ?? D.y) - D.y, oe = Math.hypot(J, te) || 1, ge = {
      x: D.x + J / oe * 30,
      y: D.y + te / oe * 30
    }, ie = Yr(xi(k, 0, k.tanY), _.x, f, p, g), ke = Yr(xi(k, k.tanX, 0), _.x, f, p, g), Be = Yr(xi(k, 0, -k.tanY), _.x, f, p, g), qe = Yr(xi(k, -k.tanX, 0), _.x, f, p, g);
    if (!ie || !ke || !Be || !qe) return { visible: !1 };
    const st = [
      _,
      ...M,
      D,
      q,
      ie,
      ke,
      Be,
      qe
    ];
    if (m && !st.some((he) => Number((he == null ? void 0 : he.rawZ) ?? (he == null ? void 0 : he.z)) > 1e-4)) return { visible: !1 };
    const be = C1(i, st), ae = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
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
        x: qe.x,
        y: qe.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: M.map((he) => ({ x: he.x, y: he.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: D.x, y: D.y },
      rotateHandle: ge,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Xt(i) {
    if (nn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = Pb(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), P1(i, m));
    }
    if (bn(i)) {
      const p = p1(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), A1(i, p));
    }
    const s = h1(i), c = h._strokeGeomCache.get(s);
    if (c) return c;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = I1(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function Is(i, s, c, f = null) {
    const p = [];
    for (let m = 0; m <= c; m += 1) {
      const g = m / c;
      let _ = 0, k = 0;
      s === 0 ? (_ = g, k = 0) : s === 1 ? (_ = 1, k = g) : s === 2 ? (_ = 1 - g, k = 1) : (_ = 0, k = 1 - g);
      const N = cp(i, _, k), M = h.mode === "unwrap" ? Kc(N, f) : wa(N);
      M && p.push(M);
    }
    return p;
  }
  function E1(i, s) {
    const c = Qt(i), f = $n(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), p = h.mode === "unwrap" ? Kc(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, _ = [
      Is(i, 0, g, m),
      Is(i, 1, g, m),
      Is(i, 2, g, m),
      Is(i, 3, g, m)
    ];
    Sd(A, _, { selected: s });
  }
  function O1() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Bc() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(f.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function Es(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(s[c].x, s[c].y);
      i.closePath();
    }
  }
  function mp(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const g = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    Es(A, f), A.fillStyle = _, A.fill(), A.strokeStyle = g, A.lineWidth = k, A.stroke(), A.save(), A.strokeStyle = g, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const N = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, E = s ? 12 : 9;
    N.forEach((L) => {
      const q = N.find((ge) => (ge == null ? void 0 : ge.edge) === M[L == null ? void 0 : L.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, J = q.x - L.x, te = q.y - L.y, oe = Math.hypot(J, te) || 1;
      A.beginPath(), A.moveTo(L.x, L.y), A.lineTo(L.x + J / oe * E, L.y + te / oe * E), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function F1(i, s, c, f) {
    const p = Z(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (jn(i)) {
      mp(s, c, f);
      return;
    }
    if (bt(i)) {
      const g = A.globalAlpha;
      A.globalAlpha = g * Fb(i) * p, h.mode === "frame" ? (A.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = c ? 2 : 1, Es(A, s.corners), A.stroke()) : E1(i, c), A.globalAlpha = g;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Es(A, s.corners), A.fill(), A.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = c ? 2.8 : 1.9, Es(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function gp(i, s, c) {
    if (bt(i)) {
      Xy(A, s, { accent: c });
      return;
    }
    A.fillStyle = c, s.corners.forEach((f) => {
      A.beginPath(), A.arc(f.x, f.y, 6.5, 0, Math.PI * 2), A.fill();
    }), jn(i) && (A.strokeStyle = c, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, E, L, D;
      const p = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((E = f.a) == null ? void 0 : E.x) ?? f.x), m = (((L = f.b) == null ? void 0 : L.y) ?? f.y) - (((D = f.a) == null ? void 0 : D.y) ?? f.y), g = Math.hypot(p, m) || 1, _ = p / g, k = m / g, N = 10;
      A.beginPath(), A.moveTo(f.x - _ * N, f.y - k * N), A.lineTo(f.x + _ * N, f.y + k * N), A.stroke();
    }), A.lineCap = "butt"), nn(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = c, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function T1() {
    var m;
    const i = h.mode === "frame" ? [] : Qn(), s = i.length > 1, c = t === "cutout" ? O1() : kr(), f = c.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${jn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== c || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const _ = h.mode !== "frame" && !s && Rd(g);
      if (h.mode === "frame" && !_ || !h.showObjects && !jn(g)) continue;
      const k = bt(g), N = jn(g), M = dn(g);
      if (!k && !N || ur(g) && !Ci(g.clip, h.frame)) continue;
      const E = Xt(g);
      if (t !== "stickers" && !E.visible)
        continue;
      const L = Z(Number((E == null ? void 0 : E.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const D = N && t === "cutout" && h.mode === "pano" ? Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= D, F1(g, E, _, M), _ && E.visible) {
        const q = M ? "#ff4d4f" : k && Gt(g) ? "#f59e0b" : "#0070f3", J = A.globalAlpha;
        A.globalAlpha = J * L, gp(g, E, q), A.globalAlpha = J;
      }
      A.restore();
    }
    if (t === "cutout" && h.mode === "pano" && !He() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, _ = Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= _, mp(g.geom, g.selected, g.locked), g.selected && gp(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (s) {
      const g = ya(i);
      if (g != null && g.visible) {
        const _ = Mc(i) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(g.corners[0].x, g.corners[0].y);
        for (let k = 1; k < g.corners.length; k += 1) A.lineTo(g.corners[k].x, g.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = _, g.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      i.forEach((g) => {
        if (!nn(g) && !bn(g)) return;
        const _ = Xt(g);
        if (!(_ != null && _.visible)) return;
        const k = dn(g) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(_.corners[0].x, _.corners[0].y);
        for (let N = 1; N < _.corners.length; N += 1) A.lineTo(_.corners[N].x, _.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, _.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Wp(h.interaction.start, h.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), A.fill(), A.stroke(), A.restore();
    }
  }
  function yp(i, s = !1) {
    const c = Z(uo(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function D1(i) {
    if (!R || !i) return !1;
    const s = R.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || R.clientWidth || 0)), f = Math.round(Number(s.clientHeight || R.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function L1() {
    if (h.outputPreviewRect = null, I.outputPreviewToggle.visible = h.mode !== "frame" && !!He(), t !== "cutout" || !I.cameraPreview) return;
    if (h.mode === "frame") {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = G == null ? void 0 : G.getContext("2d");
    if (!i || !s) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, G.width, G.height), z = null;
      return;
    }
    const c = yp(i, !!h.outputPreviewExpanded);
    I.cameraPreview.width = c.width, I.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (G.width !== p.w || G.height !== p.h) && (G.width = p.w, G.height = p.h);
    const m = JSON.stringify([p, pi(i), Sm(Ur())]);
    let g = m === z;
    if (g || (s.clearRect(0, 0, p.w, p.h), g = pp(s, p, i, "camera_preview"), z = g ? m : null), !g) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = jc() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const _ = D1(c);
    I.cameraPreview.ready = !0, I.cameraPreview.label = _ ? "" : "Loading preview", I.cameraPreview.settled = _ && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame;
  }
  function Wc(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return cp(i, c, f);
  }
  function Io(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return gc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function R1(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function V1(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: vn(i, "widthScale", 1),
      pressureLike: vn(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function $1(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Uc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let J = null;
      i.forEach((te) => {
        const oe = Number((te == null ? void 0 : te.u) || 0), ge = Number((te == null ? void 0 : te.v) || 0), ie = (oe % 1 + 1) % 1, ke = J == null ? ie : J + Zn(ie, (J % 1 + 1) % 1);
        p.set(te, { x: ke, y: ge }), J = ke;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : p.get(J) || R1(J), g = (J, te, oe, ge = {}) => {
      const ie = f ? (Number(te) % 1 + 1) % 1 : Number(te), ke = V1(J, ie, oe, ge);
      return p.set(ke, { x: Number(te), y: Number(oe) }), ke;
    }, _ = (J, te, oe) => {
      const ge = m(J), ie = m(te);
      return g(J, tr(ge.x, ie.x, oe), tr(ge.y, ie.y, oe), {
        t: tr(Number((J == null ? void 0 : J.t) || 0), Number((te == null ? void 0 : te.t) || 0), oe),
        widthScale: tr(vn(J, "widthScale", 1), vn(te, "widthScale", 1), oe),
        pressureLike: tr(vn(J, "pressureLike", 1), vn(te, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [g(i[0], J.x, J.y)];
    }
    const k = $1(s, c), N = (J, te) => {
      const oe = [0];
      for (let ae = 1; ae < J.length; ae += 1) {
        const he = m(J[ae - 1]), Fe = m(J[ae]);
        oe.push(oe[ae - 1] + Math.hypot(Fe.x - he.x, Fe.y - he.y));
      }
      const ge = oe[oe.length - 1] || 0;
      if (ge <= 1e-8) {
        const ae = J[0], he = m(ae);
        return [g(ae, he.x, he.y)];
      }
      const ie = [];
      let ke = 0;
      for (let ae = 0; ae <= ge + 1e-9; ae += te) {
        for (; ke < oe.length - 2 && oe[ke + 1] < ae; ) ke += 1;
        const he = oe[ke], Fe = oe[ke + 1], xe = Math.max(1e-8, Fe - he);
        ie.push(_(J[ke], J[ke + 1], Z((ae - he) / xe, 0, 1)));
      }
      const Be = J[J.length - 1], qe = m(Be), st = ie[ie.length - 1], be = st ? m(st) : null;
      return (!be || Math.hypot(be.x - qe.x, be.y - qe.y) > te * 0.35) && ie.push(g(Be, qe.x, qe.y)), ie;
    }, M = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const te = m(J[0]), oe = [g(J[0], te.x, te.y)];
      for (let ke = 0; ke < J.length - 1; ke += 1) {
        const Be = J[ke], qe = J[ke + 1], st = m(Be), be = m(qe), ae = g(
          Be,
          st.x * 0.75 + be.x * 0.25,
          st.y * 0.75 + be.y * 0.25,
          {
            t: Number(Be.t || 0) * 0.75 + Number(qe.t || 0) * 0.25,
            widthScale: vn(Be, "widthScale", 1) * 0.75 + vn(qe, "widthScale", 1) * 0.25,
            pressureLike: vn(Be, "pressureLike", 1) * 0.75 + vn(qe, "pressureLike", 1) * 0.25
          }
        ), he = g(
          Be,
          st.x * 0.25 + be.x * 0.75,
          st.y * 0.25 + be.y * 0.75,
          {
            t: Number(Be.t || 0) * 0.25 + Number(qe.t || 0) * 0.75,
            widthScale: vn(Be, "widthScale", 1) * 0.25 + vn(qe, "widthScale", 1) * 0.75,
            pressureLike: vn(Be, "pressureLike", 1) * 0.25 + vn(qe, "pressureLike", 1) * 0.75
          }
        );
        oe.push(ae, he);
      }
      const ge = J[J.length - 1], ie = m(ge);
      return oe.push(g(ge, ie.x, ie.y)), oe;
    }, E = N(i, k);
    if (E.length < 3) return E;
    const L = c ? 2 : 1;
    let D = E.slice();
    for (let J = 0; J < L; J += 1) D = M(D);
    return N(D, Math.max(k * 0.75, 55e-5));
  }
  function vn(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function z1(i) {
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
  function Sa(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function ka() {
    const i = Na();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ma() {
    const i = Na();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function bp() {
    const i = xc(), s = Ma();
    return i ? `${s}:${i}` : s;
  }
  function j1() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function H1() {
    h.paintCompositeRevision += 1;
  }
  function G1() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function vp() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), h.paintEngineRevisionKey = ka();
  }
  function _p() {
    v.painting_layer !== null && (v.painting_layer = null), Ns = "";
  }
  function Dt() {
    G1(), Pe.backgroundDirty = !0, Pe.dirty = !0;
  }
  function hr({ rebuildPaintEngine: i = !1 } = {}) {
    _p(), j1(), Dt(), i && vp();
  }
  function Eo() {
    _p(), H1(), Dt();
  }
  function Os() {
    var f;
    const i = Na(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = sf(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const c = ka();
    h.paintEngineRevisionKey !== c && (h.paintEngineRevisionKey = c, (f = h.paintEngine) == null || f.rebuildCommitted(v));
  }
  function Na() {
    const i = Math.max(1, P(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Hn() {
    return Na();
  }
  function K1(i, s, c, f, p = null) {
    const m = z1(i), g = vn(s, "widthScale", 1) * vn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Ar) * c * g) : Math.max(0.5, m.value / (2 * Math.PI) * c * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function B1(i, s, c = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = c.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const _ = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(_.a ?? 1) * 0.88) : Math.max(0.12, Number(_.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${k})`;
  }
  function W1(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function U1(i, s, c, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), B1(i, c, p);
    const g = (_) => W1(i, _, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const k = s[_], N = s[_ + 1];
      if (!k || !N) continue;
      const M = Number(k.x || 0), E = Number(k.y || 0), L = Number(N.x || 0), D = Number(N.y || 0), q = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(L) || !Number.isFinite(D) || !Number.isFinite(q) || !Number.isFinite(J)) continue;
      const te = L - M, oe = D - E, ge = Math.hypot(te, oe);
      if (!Number.isFinite(ge) || ge < 1e-6) {
        g(k);
        continue;
      }
      if (ge > Math.max(f.w, f.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(q, J)), ke = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Be = Math.max(1, Math.ceil(ge / ke));
      for (let qe = 0; qe <= Be; qe += 1) {
        const st = qe / Be;
        g({
          x: tr(M, L, st),
          y: tr(E, D, st),
          radiusPx: tr(q, J, st)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function Y1(i, s, c, f) {
    U1(i, s, c, f, { preview: !1 });
  }
  function X1(i, s, c, f, p) {
    var _, k, N, M;
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
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * f.w, Number(((k = s[0]) == null ? void 0 : k[g]) || 0) * f.h);
    for (let E = 1; E < s.length; E += 1)
      i.lineTo(Number(((N = s[E]) == null ? void 0 : N[m]) || 0) * f.w, Number(((M = s[E]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function wp(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function q1(i, s) {
    const c = wp(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: K1(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function xp(i, s, c = null) {
    var _, k, N, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return X1(i.ctx, wp(p), p, f), !0;
    const g = q1(p, f);
    return g.length ? (Y1(i.ctx, g, p, f), !0) : !1;
  }
  function J1(i, s, c, f = 8) {
    const p = new Uint8Array(s * c), m = [], g = new Int32Array(s * c), _ = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let N = 0; N < s; N += 1) {
        const M = k * s + N;
        if (p[M] || i[M] <= f) continue;
        let E = 0, L = 0;
        g[L] = N, _[L] = k, L += 1, p[M] = 1;
        const D = [];
        let q = N, J = k, te = N, oe = k;
        for (; E < L; ) {
          const ge = g[E], ie = _[E];
          E += 1, D.push({ x: ge, y: ie }), ge < q && (q = ge), ie < J && (J = ie), ge > te && (te = ge), ie > oe && (oe = ie);
          const ke = [
            [(ge - 1 + s) % s, ie],
            [(ge + 1) % s, ie],
            [ge, ie - 1],
            [ge, ie + 1]
          ];
          for (const [Be, qe] of ke) {
            if (qe < 0 || qe >= c) continue;
            const st = qe * s + Be;
            p[st] || i[st] <= f || (p[st] = 1, g[L] = Be, _[L] = qe, L += 1);
          }
        }
        m.push({ pixels: D, minX: q, minY: J, maxX: te, maxY: oe });
      }
    return m;
  }
  function Z1(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, N) => k - N);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let k = 0; k < c.length; k += 1) {
      const N = c[k], E = (k === c.length - 1 ? c[0] + s : c[k + 1]) - N - 1;
      E > f && (f = E, p = k);
    }
    const m = (c[(p + 1) % c.length] + s) % s;
    let g = 1 / 0, _ = -1 / 0;
    for (const k of c) {
      const N = (k - m + s) % s;
      g = Math.min(g, N), _ = Math.max(_, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - g + 1)
    };
  }
  function Q1(i, s, c = {}) {
    var N;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), _ = new Uint8Array(f * p);
    for (let M = 0; M < _.length; M += 1) _[M] = g.data[M * 4 + 3];
    return J1(_, f, p, 8).map((M, E) => {
      const L = Z1(M, f);
      if (!L) return null;
      const D = Number(L.widthPx || 0), q = M.maxY - M.minY + 1, J = Number(L.startX || 0), te = document.createElement("canvas");
      te.width = D, te.height = q;
      const oe = te.getContext("2d");
      if (!oe) return null;
      const ge = oe.createImageData(D, q);
      return M.pixels.forEach(({ x: ie, y: ke }) => {
        const Be = (ke * f + ie) * 4, qe = (Number(ie || 0) - J + f) % f, st = ((ke - M.minY) * D + qe) * 4;
        ge.data[st + 0] = g.data[Be + 0], ge.data[st + 1] = g.data[Be + 1], ge.data[st + 2] = g.data[Be + 2], ge.data[st + 3] = g.data[Be + 3];
      }), oe.putImageData(ge, 0, 0), {
        id: jo("raster"),
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
        rasterDataUrl: te.toDataURL("image/png"),
        transform: {
          du: J / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Pa(i, s) {
    if (!i || !s) return null;
    const c = As(i), f = Bu(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Bu(s, c.right) / f, m = Bu(s, c.up) / f;
    return {
      x: (p / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function ev(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const c = wi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => wa(Io(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Sp(i, s = null) {
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
    const c = i.map((f) => wa(Io(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function tv(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], p = i[(c + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function nv(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = Io(p), g = Pa(s, m);
      if (!g) return [];
      f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return tv(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function rv(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = Io(p), g = Pa(s, m);
      g && f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function iv() {
    const i = He(), s = Qc(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = eM(i, s, { width: C.width, height: C.height }), m = ov(c);
    return A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, C.width, C.height), pp(A, f, p) || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(f.x, f.y, f.w, f.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, C.width, C.height), A.roundRect(c.x, c.y, c.w, c.h, m), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = _I, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), A.stroke(), A.restore(), !0;
  }
  function ov(i) {
    const s = Math.max(1e-6, Number(Pe.frameCanvasScale || 1));
    return Math.min(Re * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Xr() {
    var s;
    const i = h.mode === "frame" ? He() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = zo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function av() {
    var k, N;
    if (((k = h.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let c;
    if (h.mode === "frame") {
      const M = He(), E = rn(M);
      c = nv(s, M, E);
    } else
      c = ev(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), _ = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) A.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    A.closePath(), f ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${g},${_},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function sv() {
    const i = h.frameRollOverlayVisual, s = Z(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = rn(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Ar, m = Math.hypot(c.w, c.h) * 0.55, g = Math.cos(p) * m, _ = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(c.x, c.y, c.w, c.h), A.clip(), A.translate(f.x, f.y), A.rotate(p);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    A.beginPath();
    for (let N = -m; N <= m; N += k)
      A.moveTo(N, -m), A.lineTo(N, m);
    for (let N = -m; N <= m; N += k)
      A.moveTo(-m, N), A.lineTo(m, N);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(f.x - g, f.y - _), A.lineTo(f.x + g, f.y + _), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function lv() {
    return t !== "cutout" || !He() ? 0 : SI;
  }
  function cv() {
    const i = Z(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || h.mode !== "pano") return;
    const s = He(), c = s ? Xt(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    c != null && c.visible && f && (h.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: Rd(s),
      locked: dn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, C.width, C.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) A.lineTo(m[g].x, m[g].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function kp() {
    _o = null, h.mode === "frame" ? (Pe.frameSafeRect = Gv(), iv()) : h.mode === "unwrap" ? S1(!1) : k1(!1), cv(), t === "cutout" && L1(), T1(), Xr(), av(), sv(), I.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), Pe.hasPresentedFrame || (Pe.hasPresentedFrame = !0, ce.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame && h.mode !== "frame");
    const i = f1();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === yr ? (de == null || de.removeAttribute("data-stage-ready"), de == null || de.setAttribute("data-stage-loading-kind", i.detail)) : (de == null || de.setAttribute("data-stage-ready", ""), de == null || de.removeAttribute("data-stage-loading-kind"));
  }
  function uv(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function fv() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Nb();
  }
  function le(i = {}) {
    var _, k, N, M, E, L, D, q, J, te;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), p = String(((_ = h.interaction) == null ? void 0 : _.kind) || "");
    (!s || p === "view" || p === "pan_frame" || uv() || !!((k = h.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Pe.backgroundDirty = !0), s && Fd() && (h.livePaintInteractionRevision += 1, Pe.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (Fc(), Br()), fv(), c && ((M = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || M.call(N), (E = e.setDirtyCanvas) == null || E.call(e, !0, !1)), c && !s && ((D = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || D.call(L, !0, !0), (te = (J = (q = vr) == null ? void 0 : q.canvas) == null ? void 0 : J.setDirty) == null || te.call(J, !0, !0)), Pe.dirty = !0;
  }
  function Mp() {
    const i = C.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== s || C.height !== c || ce.width !== s || ce.height !== c ? (C.width = s, C.height = c, ce.width = s, ce.height = c, Pe.backgroundDirty = !0, Pe.dirty = !0, t === "cutout" && (Pe.pendingStableLayoutFrames = Math.max(Number(Pe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function dv(i = performance.now()) {
    var m, g;
    Pe.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = c, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const _ = Z(
        (i - Number(h.frameRollOverlayStartTs || i)) / kI,
        0,
        1
      );
      h.frameRollOverlayAlpha = tr(
        Number(h.frameRollOverlayFrom || 0),
        c,
        tl(_)
      ), _ >= 1 && (h.frameRollOverlayAlpha = c, c === 0 && (h.frameRollOverlayVisual = null)), Pe.dirty = !0;
    }
    const f = lv();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const _ = Z(
        (i - Number(h.cutoutPanoDimStartTs || i)) / lg,
        0,
        1
      );
      h.cutoutPanoDimAlpha = tr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        tl(_)
      ), _ >= 1 && (h.cutoutPanoDimAlpha = f), _ >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), Pe.dirty = !0;
    }
    const p = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const _ = Z(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / lg,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = tr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        tl(_)
      ), _ >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), Pe.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(h.outputPreviewAnimDurationMs)), k = Z((i - Number(h.outputPreviewAnimStartTs || 0)) / _, 0, 1), M = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? EI(k) : DI(k);
      h.outputPreviewAnim = tr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, M), Pe.dirty = !0, k >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if ((g = h.viewTween) != null && g.active) {
      const _ = h.viewTween, k = Z((i - _.startTs) / _.durationMs, 0, 1), N = tl(k);
      h.viewYaw = Bt(_.startYaw + _.deltaYaw * N), h.viewPitch = _.startPitch + (_.targetPitch - _.startPitch) * N, h.viewFov = _.startFov + (_.targetFov - _.startFov) * N, Pe.backgroundDirty = !0, Pe.dirty = !0, k >= 1 && (h.viewTween = null);
    }
    if (h.viewInertia.vx = Number(pn.state.inertia.vx || 0), h.viewInertia.vy = Number(pn.state.inertia.vy || 0), h.viewInertia.active = !!pn.state.inertia.active, pn.stepInertia(i) && (h.viewInertia.vx = Number(pn.state.inertia.vx || 0), h.viewInertia.vy = Number(pn.state.inertia.vy || 0), h.viewInertia.active = !!pn.state.inertia.active, Pe.backgroundDirty = !0, Pe.dirty = !0), Pe.pendingStableLayoutFrames > 0 && (Pe.pendingStableLayoutFrames -= 1, Pe.dirty = !0), Pe.dirty) {
      if (Pe.pendingStableLayoutFrames > 0)
        return;
      Pe.dirty = !1, kp();
    }
  }
  function Np(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Pe.tickErrorSignature !== c && (Pe.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = rr, I.stageStatusDetail = "frame", de == null || de.setAttribute("data-stage-ready", ""), de == null || de.removeAttribute("data-stage-loading-kind");
    }
  }
  function Pp(i = performance.now()) {
    Pe.running && (Np(() => dv(i)), Pe.running && (Pe.rafId = requestAnimationFrame(Pp)));
  }
  function pv() {
    !Pe.running || !Mp() || Np(() => {
      Pe.dirty = !1, kp();
    });
  }
  const Ap = new ResizeObserver(pv);
  Ap.observe(C);
  function hv() {
    Pe.running = !1, Pe.rafId && cancelAnimationFrame(Pe.rafId), Pe.rafId = 0, Ap.disconnect();
  }
  function et() {
    r || x && v.stickers.some(bc) || (h.historyController.commitActionGroup(JSON.stringify(dm(v))), ru());
  }
  function Yc(i) {
    var p;
    if (r) return;
    Tn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (ru(), !s) return;
    const c = ak(v, s), f = (p = v.timeline) == null ? void 0 : p.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), x && v.timeline.fps !== f && zt.seek(Math.round(h.frame * v.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && Po(), Pe.backgroundDirty = !0, c.paintingChanged ? hr() : Dt(), Fn(), $e(), Pn(), le({ cause: "cutout_frame" });
  }
  function Cp() {
    var c, f;
    const i = Array.isArray((c = h.historyController) == null ? void 0 : c.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Fn() {
    bs();
    const i = oP({
      editor: h,
      swatches: wl,
      paintColorPopOpen: se ? !se.hidden : !1,
      colorToCss: Cr,
      colorsApproximatelyEqual: xl,
      rgb01ToHsv: Yu,
      hsv01ToRgb: Uu,
      getBrushPresetIdForTool: Mi,
      isActiveLassoTool: Db
    });
    if (Object.assign(I.paintDock, i), jb(), !i.visible) {
      se && (se.hidden = !0);
      return;
    }
    fe && (clearTimeout(fe), fe = 0), ne && (!i.colorEnabled && se && !se.hidden && (fe = window.setTimeout(() => {
      se.hidden = !0, I.paintDock.colorPopOpen = !1, fe = 0;
    }, 170)), se && (se.style.setProperty("--picker-hue-color", i.pickerHueColor), se.style.setProperty("--picker-sat", i.pickerSat), se.style.setProperty("--picker-val", i.pickerVal), se.style.setProperty("--picker-hue", i.pickerHue)), ve && (ve.style.left = i.pickerSvLeft, ve.style.top = i.pickerSvTop), Ne && (Ne.style.left = i.pickerHueLeft));
  }
  function Oo() {
    const i = Qt(t === "cutout" && h.mode === "frame" ? He() : Nt());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: ri(i)
    }, $e());
  }
  function $e() {
    var be, ae, he, Fe;
    if (qr(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = iP(v.ui_settings);
    if (a) {
      I.sidePanel = aP({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Kn
      });
      return;
    }
    const s = Nt(), c = t === "cutout" && h.mode === "frame" ? He() : null, f = c || s, p = c ? [c] : Qn(), m = c ? "shot" : xs();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const xe = Qt(f);
      h.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: ri(xe)
      }, ur(f) && (h.panelLastValues.opacity = fo(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : f, k = x && h.inspectCamera, N = va(), M = k ? fk(v.camera, h.frame) : N ? hk(N, h.frame) : ur(_) ? h.panelLastValues : _ || g, E = k || (N ? Ms(N) : !!_ && !dn(_));
    h.panelWasEnabled = E, Fc();
    let L = null;
    if (c) {
      const xe = Nc({ item: c, kind: "shot", label: "Frame" });
      L = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(c.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const xe = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? kr().forEach((ze, Je) => {
        var jt, Nr;
        if (!ze) return;
        const St = x ? yf(ze) : Gt(ze) ? String(ze.id || $u) : String(((Nr = (jt = v.assets) == null ? void 0 : jt[ze.asset_id]) == null ? void 0 : Nr.name) || ze.asset_id || ze.id), _n = `${Je + 1}. ${St}${Gt(ze) && No(ze) ? " (hidden)" : ""}`, At = Nc({ item: ze, label: _n, kind: "image" });
        xe.push({ id: ze.id, label: At.label, icon: At.icon, item: ze, kind: "image" });
      }) : Vd().forEach((ze) => {
        if (!(ze != null && ze.item)) return;
        const Je = Nc(ze);
        xe.push({ id: ze.item.id, label: Je.label, icon: Je.icon, item: ze.item, kind: ze.kind });
      });
      const Ue = (_ == null ? void 0 : _.id) || "", We = k ? { label: "Camera", icon: Me.camera } : N ? { label: yf(N), icon: Me.globe } : xe.find((ze) => ze.id === Ue) || xe[0];
      L = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: We.label,
        currentIcon: We.icon || null,
        items: xe.map((ze) => ({
          id: ze.id,
          label: ze.label,
          icon: ze.icon || null,
          active: ze.id === Ue
        }))
      };
    }
    const D = [], q = (xe, Ue, We, ze, Je) => {
      const St = Z(Number(M[xe] || 0), We, ze);
      D.push({
        key: xe,
        label: Ue,
        min: We,
        max: ze,
        step: Je,
        value: St,
        displayValue: zo(St),
        fillPct: Z((St - We) / Math.max(1e-6, ze - We) * 100, 0, 100),
        enabled: E && !r
      });
    }, J = [];
    if (k)
      q("position_x", "X", -100, 100, 0.01), q("position_y", "Y", -100, 100, 0.01), q("position_z", "Z", -100, 100, 0.01), q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("roll_deg", "Roll", -180, 180, 0.1), q("hFOV_deg", "FOV", 1, 179, 0.1);
    else if (N) {
      for (const [xe, Ue] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const We = og(M[xe]);
        q(xe, Ue, -We, We, 0.01);
      }
      q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("roll_deg", "Roll", -180, 180, 0.1), q("scale", "Scale", ag, og(M.scale), 0.01), q("opacity", "Opacity", 0, 100, 1);
    } else p.length > 1 ? (J.push(`Selected objects: ${p.length}`), J.push("Multi-selection supports z-order and delete.")) : (q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("hFOV_deg", "H FOV", 1, 179, 0.1), q("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? q("rot_deg", "Rotation", -180, 180, 0.1) : q("roll_deg", "Roll", -180, 180, 0.1), x && q("opacity", "Opacity", 0, 100, 1));
    const te = Array.isArray((ae = (be = v == null ? void 0 : v.painting) == null ? void 0 : be.paint) == null ? void 0 : ae.strokes) ? v.painting.paint.strokes.length : 0, oe = Array.isArray((Fe = (he = v == null ? void 0 : v.painting) == null ? void 0 : he.mask) == null ? void 0 : Fe.strokes) ? v.painting.mask.strokes.length : 0, ge = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], ie = II(
      e,
      ge.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), ke = !!String((ie == null ? void 0 : ie.src) || "").trim() || Kr("pano_input_images").length > 0, Be = kr().length > 0 || te > 0, qe = oe > 0, st = [
      { key: "mask", label: "Mask", icon: Me.circle_dashed_tool, visible: !!h.showMask, enabled: qe },
      { key: "objects", label: "Paint / Images", icon: Me.image, visible: !!h.showObjects, enabled: Be },
      { key: "panorama", label: "Panorama", icon: Me.globe, visible: !!h.showPanorama, enabled: ke }
    ].map((xe) => ({
      ...xe,
      ariaLabel: `Toggle ${xe.label.toLowerCase()}`,
      tip: xe.visible ? "Hide" : "Show"
    }));
    I.sidePanel = sP({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: L,
      enabled: E,
      selectedKind: k ? "camera" : N ? "world" : m,
      selectedItems: p,
      params: D,
      notes: J,
      visibilityRows: st,
      uiSettings: i,
      normalizeCoverageValue: Kn
    });
  }
  function qr() {
    if (!x || r) return;
    const i = Xc(), s = De.selection, c = s && Si(s.owner);
    if (s) {
      const p = c ? Aa(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => c[g].keyframes.some((_) => _.frame === m))), s.frames.length || (De.selection = null);
    }
    const f = v.timeline.fps;
    I.timeline = dP(v, {
      frame: h.frame,
      span: i,
      selection: De.selection,
      selectedId: h.inspectCamera ? "camera" : h.worldSelectedId || h.selectedId,
      expanded: De.expanded ?? gf(v),
      openRows: De.openRows,
      audio: gv() && I.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: zt.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: Hu(e) !== null || lM(e, ["bg_media", "sticker"])
    }), I.easing = De.selection ? pP(c, Aa(De.selection), De.selection.frames, Ca(De.selection.owner)) : null;
  }
  function Xc(i = null) {
    const s = v.timeline.fps, c = v.stickers.find(Gt), f = c ? Bd() : null, p = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0,
      f ? ky(c.clip, s, f.meta) : 0
    );
    return W0(v, { minimum: Math.round(s * 5), frames: p, openClip: i });
  }
  function Si(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function Aa(i) {
    return i.lane ? [i.lane] : bo(Si(i.owner));
  }
  function Ca(i) {
    if (i === "camera") return 0;
    const { clip: s } = Si(i);
    return s.start - s.in;
  }
  function Fs(i) {
    const s = Si(i);
    return !!s && s.locked !== !0;
  }
  function Ip() {
    const i = Nt();
    ur(i) && !Ci(i.clip, h.frame) && pr(null);
  }
  function mv(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (h.frame = s, Ip(), Dt(), $e(), Ke(), le());
  }
  function gv() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function yv(i) {
    vi(), zt.seek(i);
  }
  function Tn() {
    x && zt.stop();
  }
  function qc() {
    vi(), zt.toggle();
  }
  function Fo() {
    Dt(), $e(), Ke(), le();
  }
  function Hi() {
    et(), ct(), Fo();
  }
  function bv() {
    const { selection: i } = De;
    Fs(i.owner) && (Tn(), US(Si(i.owner), Aa(i), i.frames, h.frame - Ca(i.owner)), De.selection = null, Hi());
  }
  function Ep(i) {
    Tn();
    const s = Math.round(h.frame * i / v.timeline.fps);
    lk(v, i), De.selection = null, zt.seek(s), Hi();
  }
  function vv() {
    const i = Hu(e);
    i !== null && i !== v.timeline.fps && Ep(i);
  }
  function _v(i) {
    if (!(r || !x)) {
      if (i.type === "seek") {
        i.phase === "start" && vi(), zt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        qc();
        return;
      }
      if (i.type === "mute") {
        jd(), qr();
        return;
      }
      if (i.type === "toggle-expanded") {
        De.expanded = !(De.expanded ?? gf(v)), De.selection = null, qr();
        return;
      }
      if (i.type === "toggle-row") {
        De.openRows.has(i.id) ? De.openRows.delete(i.id) : De.openRows.add(i.id), qr();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !Ci(s.clip, h.frame) && yv(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? Oc(s.id) : pr(kr().find((c) => c.id === i.id) || null), h.inspectCamera = i.id === "camera", $i(), De.selection = null, $e(), Ke(), le();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ca(i.owner), c = i.frames.map((m) => m - s), f = De.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of c)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, _) => g - _);
        } else
          De.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        qr();
        return;
      }
      if (i.type === "move-keys") {
        const s = De.selection;
        if (!s || !Fs(s.owner)) return;
        const c = Si(s.owner), f = Aa(s);
        if (i.phase === "start") {
          Tn(), De.drag = { keyframes: f.map((g) => structuredClone(c[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = De;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, _) => {
          c[g].keyframes = structuredClone(p.keyframes[_]);
        });
        const m = YS(c, f, p.frames, i.delta, -Ca(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Fo();
          return;
        }
        De.drag = null, m ? Hi() : Fo();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Tn(), De.drag = { clip: { ...s.clip }, span: Xc(s.clip) };
          return;
        }
        const { drag: c } = De;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? JS(s.clip, i.delta) : i.delta && i.mode === "start" ? ZS(s.clip, f.start + i.delta) : i.delta && QS(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          Fo();
          return;
        }
        De.drag = null, Ip(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Hi() : Fo();
        return;
      }
      if (i.type === "key-row") {
        if (!Fs(i.owner)) return;
        Tn(), KS(Si(i.owner), h.frame - Ca(i.owner)), Hi();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || I.timeline.fpsLocked) {
          qr();
          return;
        }
        Ep(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          qr();
          return;
        }
        Tn(), v.timeline.length = s, Hi();
        return;
      }
      if (i.type === "easing") {
        const s = De.selection;
        if (!s || !Fs(s.owner)) return;
        Tn(), qS(Si(s.owner), Aa(s), s.frames, i.easing), i.commit ? Hi() : Fo();
      }
    }
  }
  async function Op(i) {
    if (r || t !== "stickers" && t !== "cutout" || !br(i)) return;
    if (x) {
      Tn(), await Fp(i);
      return;
    }
    const s = Ji("asset"), c = Ba(e, `add:${s}`, async () => {
      try {
        const { image: f } = await Wa(i);
        ft.set(s, f);
        const p = Ji("st");
        v.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: _i(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Ss()
        }), pr(v.stickers[v.stickers.length - 1]), Ts(), $e(), Ke(), le();
        const m = await eo(i, {
          fetchApi: (k, N) => Wt.fetchApi(k, N)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, Co(), et(), ct(), $e(), Ke(), le();
      } catch (f) {
        delete v.assets[s], ft.delete(s);
        const p = Array.isArray(v.stickers) ? v.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (v.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && pr(null), $e(), Ke(), le(), ct()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function wv() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add");
  }
  function xv() {
    var i;
    r || !x || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add-world");
  }
  async function Sv(i) {
    r || !x || !br(i) || (Tn(), await Fp(i, "world"));
  }
  function kv() {
    const i = { x: C.width / 2, y: C.height / 2 }, s = zi() ? Lc(i) : null;
    return Uk(Wr(), s, ji());
  }
  async function Fp(i, s = "sky") {
    const c = Ji("st"), f = Ba(e, `add:${c}`, async () => {
      const { image: p } = await Wa(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: _i(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, _ = s === "world" ? bk(c, g, kv()) : pd(c, g, m, Ss());
      ft.set(xa(_), p), v.stickers.push(_), s === "world" ? Oc(c) : pr(_), Ts(), $e(), Ke(), le();
      try {
        const k = await eo(i, {
          fetchApi: (M, E) => Wt.fetchApi(M, E)
        }), N = v.stickers.find((M) => M.id === c);
        if (!N) return;
        N.source = pl(k), ft.set(xa(N), p), et(), ct();
      } catch (k) {
        throw v.stickers = v.stickers.filter((N) => N.id !== c), h.selectedId === c && pr(null), h.worldSelectedId === c && Po(), et(), ct(), k;
      } finally {
        $e(), Ke(), le();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function Mv(i, s) {
    const c = Ba(e, `replace:${s}:${Ji("asset")}`, async () => {
      const { image: f } = await Wa(i), p = await eo(i, {
        fetchApi: (g, _) => Wt.fetchApi(g, _)
      }), m = v.stickers.find((g) => g.id === s);
      if (m) {
        m.source = pl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          g.vFOV_deg = _i(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        ft.set(xa(m), f), Dt(), et(), ct(), $e(), Ke(), le();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function Nv(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !bt(s) || Gt(s) || !br(i)) return;
    if (x) {
      await Mv(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = Ji("asset"), p = Ba(e, `replace:${c}:${f}`, async () => {
      var M;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === c) || null;
      if (!m || !bt(m) || Gt(m)) return;
      const g = String(m.asset_id || ""), _ = g ? wn(((M = v.assets) == null ? void 0 : M[g]) || null) : null, k = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: E } = await Wa(i);
        ft.set(f, E), m.asset_id = f, m.vFOV_deg = _i(
          Number(m.hFOV_deg || 30),
          Number(E.naturalWidth || E.width || 1),
          Number(E.naturalHeight || E.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Dt(), $e(), Ke(), le();
        const L = await eo(i, {
          fetchApi: (q, J) => Wt.fetchApi(q, J)
        }), D = (Array.isArray(v.stickers) ? v.stickers : []).find((q) => String((q == null ? void 0 : q.id) || "") === c) || null;
        if (!D || String(D.asset_id || "") !== f) return;
        v.assets[f] = L, Co(), et(), ct(), $e(), Ke(), le();
      } catch (E) {
        delete v.assets[f], ft.delete(f);
        const L = (Array.isArray(v.stickers) ? v.stickers : []).find((D) => String((D == null ? void 0 : D.id) || "") === c) || null;
        throw L && String(L.asset_id || "") === f && (g && _ && (v.assets[g] = _), L.asset_id = g, L.vFOV_deg = k, L.crop = N ? { ...N } : null), Dt(), ct(), $e(), Ke(), le(), E;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Pv() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !bt(i) || Gt(i) || (s = Q == null ? void 0 : Q.openImagePicker) == null || s.call(Q, "replace");
  }
  async function Av() {
    if (r || t !== "stickers") return;
    if (x) {
      await Cv();
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
        const g = await fetch(m).then((E) => E.blob()), _ = String(g.type || "image/png").split("/")[1] || "png", k = String((p == null ? void 0 : p.name) || `${f}.${_}`), N = new File([g], k, { type: g.type || "image/png" }), M = await eo(N, {
          fetchApi: (E, L) => Wt.fetchApi(E, L)
        });
        v.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (ct(), le());
  }
  async function Cv() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((_) => _.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await eo(m, {
            fetchApi: (_, k) => Wt.fetchApi(_, k)
          });
          s.source = pl(g), i = !0;
        } catch {
        }
    }
    i && (ct(), le());
  }
  function Iv() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      pr(i), h.mode = "pano", yc(
        Bt(Number(i.yaw_deg || 0)),
        Z(Number(i.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), $e(), Ke(), le({ cause: "cutout_frame" });
      return;
    }
    const s = N0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Bt(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    v.shots = [s], pr(s), Ts(), h.mode = "pano", et(), ct(), $e(), Ke(), le({ cause: "cutout_frame" });
  }
  function Ev() {
    r || t !== "cutout" || (v.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, v.active.selected_shot_id = null, et(), ct(), $e(), Ke(), le());
  }
  function Ov() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      Gt(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function Tp(i, s, c = "Clear") {
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
  async function Fv() {
    var c, f;
    if (r || !await Tp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = ea(null), hr();
    const s = Ov();
    if (t === "stickers")
      v.stickers = x ? v.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, x || (v.assets = {}), h.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Co();
    else {
      const p = ok(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Co();
    }
    et(), ct(), $e(), Ke(), le();
  }
  async function Tv(i) {
    var m, g, _, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = To(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await Tp(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((_ = h.interaction) == null ? void 0 : _.kind) === "draw" && ((k = h.interaction) == null ? void 0 : k.layerKind) === s) {
        const N = Hn();
        N && h.paintEngine.cancelActiveStroke(N), h.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = On().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== s), s === "paint" && (yn().length = 0), hr(), et(), ct(), $e(), Ke(), Fn(), le();
    }
  }
  function Dv() {
    if (r) return;
    const i = Nt();
    if (!i || !bt(i) || Gt(i) || x && bc(i)) return;
    let s;
    x ? s = vk(i, Ji("st"), Ss()) : (s = JSON.parse(JSON.stringify(i)), s.id = Ji("st"), s.yaw_deg = Bt((s.yaw_deg || 0) + 8), s.z_index = Ss()), v.stickers.push(s), v.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Dt(), et(), ct(), Ke(), $e(), le();
  }
  function Lv() {
    const i = va();
    return i ? (Ms(i) && (Tn(), yk(v, i.id), Po(), Dt(), et(), ct(), $e(), Ke(), $i(), le()), !0) : !1;
  }
  function Dp() {
    var c, f, p, m, g;
    if (r) return;
    const i = Qn(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((_) => dn(_))) {
      if (Tn(), i.length > 1) {
        const _ = new Set(i.filter((M) => nn(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => bn(M)).map((M) => ln(M.rasterObjectId || M.id || ""))), N = new Set(i.filter(bt).map((M) => String(M.id || "")));
        _.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = yn().filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), hr()), k.size > 0 && (v.painting.raster_objects = On().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Eo()), N.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => N.has(String((M == null ? void 0 : M.id) || "")) ? Gt(M) ? (No(M) || (M.visible = !1), !0) : !1 : !0), Co(), Dt()), h.selectedId = null, h.selectedIds = [], et(), ct(), $e(), Ke(), le();
        return;
      }
      if (nn(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (p = v.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== _), v.painting.groups = yn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== _), hr(), h.selectedId = null, h.selectedIds = [], et(), ct(), $e(), Ke(), le();
        return;
      }
      if (bn(s)) {
        const _ = ln(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = On().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== _), Eo(), h.selectedId = null, h.selectedIds = [], et(), ct(), $e(), Ke(), le();
        return;
      }
      if (t === "stickers" || bt(s)) {
        if (Gt(s)) {
          if (No(s)) return;
          s.visible = !1, Dt(), et(), ct(), $e(), Ke(), le();
          return;
        }
        v.stickers = v.stickers.filter((_) => _.id !== s.id), Co(), Dt(), h.selectedId = ((g = kr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = h.selectedId, et(), ct(), $e(), Ke(), le();
        return;
      }
      Ev();
    }
  }
  function Jc(i, s) {
    const c = Pe.frameSafeRect;
    if (!i || !c || h.mode !== "frame") return !1;
    const f = zu * co(c, i), p = od(id(c, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Lp(i, s) {
    if (!i || i.locked === !0) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [M, E] = _.split(":").map((L) => Number(L));
        if (Number.isFinite(M) && Number.isFinite(E)) return M >= E;
      }
      const k = Number(i.hFOV_deg || 64), N = Number(i.vFOV_deg || 40);
      return Math.abs(k - N) > 1e-6 ? k >= N : uo(i) >= 1;
    })();
    let [p, m] = c[String(s)] || c["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Jc(i, g)) {
      const _ = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = fl(_, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Rv(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = fs(s, c);
    if (!f) return !1;
    const p = f.ratio;
    if (!Jc(i, p)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = fl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Rp(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = pi(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Jc(i, p)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = fl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = to(i);
  }
  function Vp() {
    So().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function Vv() {
    if (r) return;
    const i = Qn();
    if (!Nt() || i.length === 0 || i.some((_) => dn(_))) return;
    Vp();
    const c = So(), f = new Set(i.map((_) => bt(_) ? `sticker:${String(_.id || "")}` : bn(_) ? `rasterObject:${ln(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (c.forEach((_) => {
      var N, M;
      const k = _.type === "sticker" ? `sticker:${String(((N = _.item) == null ? void 0 : N.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? p.push(_) : m.push(_);
    }), !p.length || p[p.length - 1] === c[c.length - 1]) return;
    [...m, ...p].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Dt(), et(), ct(), Ke(), le();
  }
  function $v() {
    if (r) return;
    const i = Qn();
    if (!Nt() || i.length === 0 || i.some((_) => dn(_))) return;
    Vp();
    const c = So(), f = new Set(i.map((_) => bt(_) ? `sticker:${String(_.id || "")}` : bn(_) ? `rasterObject:${ln(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (c.forEach((_) => {
      var N, M;
      const k = _.type === "sticker" ? `sticker:${String(((N = _.item) == null ? void 0 : N.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? p.push(_) : m.push(_);
    }), !p.length || p[0] === c[0]) return;
    [...p, ...m].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Dt(), et(), ct(), Ke(), le();
  }
  function zv() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = P(Number(v.output_preset || 2048))), d && (v.coverage = Kn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Pn(), e.setDirtyCanvas(!0, !0));
  }
  function Pn() {
    var s;
    if (r) return;
    v.coverage = Kn(v.coverage), Q0(e, v.active);
    const i = ey(e, v);
    y && !ty(e, i, String(y.value ?? "")) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const $p = () => Pn();
  r || (e.__panoFlushStateBeforeQueue = $p);
  function Zc() {
    v.ui_settings = jI(v.ui_settings), r || Pn();
  }
  function ct() {
    var i;
    r || (Pn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function jv() {
    r || u1() && ap().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Hv(i = {}) {
    var f, p, m, g, _, k, N, M, E, L;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), c && ((N = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || N.call(k, !0, !0), (L = (E = (M = vr) == null ? void 0 : M.canvas) == null ? void 0 : E.setDirty) == null || L.call(E, !0, !0));
  }
  function Ts() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Fn(), $e());
  }
  function ki(i) {
    const s = C.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * C.width,
      y: (i.clientY - s.top) / s.height * C.height
    };
  }
  function Ds(i) {
    const s = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function zp() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function Gv() {
    var D, q, J, te, oe;
    if (!C) return null;
    const i = (D = C.getBoundingClientRect) == null ? void 0 : D.call(C), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? C.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? C.height / i.height : 1;
    Pe.frameCanvasScale = Math.min(s, c);
    let f = 24, p = 24;
    const m = Math.max(f + 1, C.width - 24);
    let g = Math.max(p + 1, C.height - 24);
    const _ = (q = yt == null ? void 0 : yt.getBoundingClientRect) == null ? void 0 : q.call(yt), k = (J = un == null ? void 0 : un.getBoundingClientRect) == null ? void 0 : J.call(un);
    let N = 24;
    _ && i && _.width > 0 && _.height > 0 && (N = Math.max(N, (_.right - i.left) * s + sg)), k && i && k.width > 0 && k.height > 0 && ((te = I.frameRail) == null ? void 0 : te.visible) === !0 && (N = Math.max(N, (i.right - k.left) * s + sg)), f = Math.max(f, N);
    const M = Math.min(m, C.width - N);
    let E = 24;
    const L = (oe = Mt == null ? void 0 : Mt.getBoundingClientRect) == null ? void 0 : oe.call(Mt);
    if (L && i && L.width > 0 && L.height > 0 && (E = Math.max(E, (L.bottom - i.top) * c + ju)), [qn, Et].forEach((ge) => {
      var Be;
      if (!ge || !i) return;
      const ie = getComputedStyle(ge);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const ke = (Be = ge.getBoundingClientRect) == null ? void 0 : Be.call(ge);
      !ke || ke.width <= 0 || ke.height <= 0 || (E = Math.max(E, (i.bottom - ke.top) * c + ju));
    }), Oe && i) {
      const ge = getComputedStyle(Oe);
      ge.display !== "none" && ge.visibility !== "hidden" && Number(ge.opacity) > 0 && (E = Math.max(E, (xI + ju) * c));
    }
    return p = Math.max(p, E), g = Math.max(p + 1, Math.min(g, C.height - E)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function Qc(i = He()) {
    if (!i || !C) return null;
    const s = Pe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, C.width - 48),
      h: Math.max(1, C.height - 48)
    };
    return fS(s, i, zu * co(s, i));
  }
  function rn(i = He()) {
    const s = Qc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function eu() {
    return t === "cutout" && !!He();
  }
  function mr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = wi(), g = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Z(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = Vc(i.x, i.y), { lon: f, lat: p } = Gc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function gr(i, s, c = performance.now()) {
    const f = rn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Wc(s, p);
    if (!m) return null;
    const { lon: g, lat: _ } = Gc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - _ / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function Kv(i, s) {
    const c = He();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, p = A0(c, s);
    if (!p) return !1;
    if (f) {
      const m = zu * co(
        Pe.frameSafeRect || { w: C.width, h: C.height },
        p
      ), g = ad({ width: C.width, height: C.height }, m);
      if (g.halfW < C.width * 0.5 - 1e-6 || g.halfH < C.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = p.hFOV_deg, c.vFOV_deg = p.vFOV_deg, h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, et(), ct(), $e());
    }, 180), $e(), !0;
  }
  function Bv() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, et(), ct(), $e(), !0) : !1;
  }
  function Ia() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Gi(), h.interaction = null, Ao(), Br(), $e(), ht(h.pointerPos), le({ localOnly: !0 }), !0;
  }
  function Wv(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function Mi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Zr : Dn[s] ? s : h.activeBrushPresetId || Zr;
  }
  function jp() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (zp() || eu());
  }
  function Hp() {
    var i;
    return jp() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ls(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: c, y: f, inside: p }, g;
  }
  function Uv() {
    var M, E;
    if (!Hp()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, c = Mi(s), f = Dn[c] || Dn[Zr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Gn(h.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Z(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Z(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: Cr(_, k),
      strokeStyle: Cr(_, N),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((E = h.pointerPos) == null ? void 0 : E.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Yv() {
    var L, D, q;
    const i = Uv();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), E = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Zl, c = Zl, f = "0", g = "0", _ = "none", M = MI, E = NI, m = VI(i.fillStyle, N, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, p = Number(((q = (D = i.preset) == null ? void 0 : D.angle) == null ? void 0 : q.value) || 0) * no;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = g, U.style.boxShadow = _, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - E)}px) rotate(${p}deg)`;
  }
  function Xv() {
    var ge;
    if (!X || !H) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const c = Mi(s), f = Dn[c] || Dn[Zr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), _ = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : Gn(h.paintColor), N = i === "mask" ? Cr(k, 0.22) : _ ? "rgba(255,255,255,0.14)" : Cr(k, Z(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Cr(k, 0.96) : _ ? "rgba(255,255,255,0.72)" : Cr(k, Z(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let E = g * 2, L = g * 2, D = "999px", q = 0, J = N;
    const te = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ie = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      E = Math.max(16, g * 2 * ie), L = Math.max(10, g * 2), D = `${Math.min(8, L * 0.42)}px`, q = Number(((ge = f == null ? void 0 : f.angle) == null ? void 0 : ge.value) || 0) * no;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${M} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (E = Math.max(18, g * 1.8), L = E, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : _ && (J = "rgba(255,255,255,0.12)");
    H.style.width = `${Math.round(E)}px`, H.style.height = `${Math.round(L)}px`, H.style.borderRadius = D, H.style.background = J, H.style.border = `1px solid ${te}`, H.style.boxShadow = `0 0 0 1px ${oe}`, H.style.transform = `rotate(${q}deg)`, we && (clearTimeout(we), we = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function Rs() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), we && clearTimeout(we), we = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), we = 0;
    }, 180));
  }
  function Gp(i, s, c, f) {
    const p = Mi(s), m = Dn[p] || Dn[Zr], g = h.brushSizes[p] ?? 10, _ = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), k = Wv(f, _), N = c.map((E) => ({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: Number.isFinite(Number(E == null ? void 0 : E.widthScale)) ? Math.max(0, Number(E.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(E == null ? void 0 : E.pressureLike)) ? Math.max(0, Number(E.pressureLike)) : 1
    })), M = {
      id: jo(i),
      actionGroupId: jo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: _,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((E) => ({ ...E })),
        points: N.map((E) => ({ ...E }))
      }
    };
    return ig(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Kp(i, s, c, f) {
    const p = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = Mi(s), g = Dn[m] || Dn[Zr], _ = {
      id: jo(i),
      actionGroupId: jo("ag"),
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
    return ig(_, g), Number(g.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function To(i) {
    const s = v.painting || (v.painting = ea(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function qv(i, s, c = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const N = He();
      if (!N || (f = gr(s, N, c), !f)) return !1;
    } else
      f = mr(s, c);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const N = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (N < 15e-4 && M < 15e-4) return !1;
    }
    const _ = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ..._ }), m.push({ ..._ });
    const k = Hn();
    if (k) {
      const N = h.paintEngine.ensureTarget(k);
      h.paintEngine.appendStrokePoint(N, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Jv(i, s, c = performance.now()) {
    var g, _;
    let f;
    if (h.mode === "frame") {
      const k = He();
      if (!k) return !1;
      f = gr(s, k, c);
    } else
      f = mr(s, c);
    const p = (_ = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Zv(i) {
    var ie, ke, Be, qe, st;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Os();
    const c = Hn(), f = Sa(c.width, c.height);
    if (!xp(f, s, { w: c.width, h: c.height })) return !1;
    const p = ((ke = (ie = f.ctx) == null ? void 0 : ie.getImageData(0, 0, c.width, c.height)) == null ? void 0 : ke.data) || null;
    if (!p) return !1;
    const m = new Map(yn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], _ = [], k = [...On().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let N = !1, M = So().reduce((be, ae) => Math.max(be, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function E(be, ae, he, Fe = 8) {
      let xe = ae, Ue = he, We = -1, ze = -1;
      for (let Je = 0; Je < he; Je += 1)
        for (let St = 0; St < ae; St += 1)
          be[(Je * ae + St) * 4 + 3] <= Fe || (St < xe && (xe = St), Je < Ue && (Ue = Je), St > We && (We = St), Je > ze && (ze = Je));
      return We < xe || ze < Ue ? null : { minX: xe, minY: Ue, maxX: We, maxY: ze };
    }
    const L = E(p, c.width, c.height, 8);
    if (!L) return !1;
    function D(be, ae) {
      return !be || !ae ? !1 : !(be.maxX < ae.minX || ae.maxX < be.minX || be.maxY < ae.minY || ae.maxY < be.minY);
    }
    function q(be, ae) {
      const he = yi((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", ae);
      if (!he) return null;
      const Fe = he.centerUv.u - he.halfW, xe = he.centerUv.u + he.halfW, Ue = he.centerUv.v - he.halfH, We = he.centerUv.v + he.halfH, ze = c.width, Je = c.height;
      return {
        minX: Math.floor((Fe % 1 + 1) % 1 * ze),
        maxX: Math.ceil((xe % 1 + 1) % 1 * ze),
        minY: Math.floor(Z(Ue, 0, 1) * Je),
        maxY: Math.ceil(Z(We, 0, 1) * Je),
        wraps: xe - Fe >= 1 || Fe < 0 || xe > 1
      };
    }
    function J(be) {
      const ae = (be == null ? void 0 : be.bbox) || null;
      if (!ae) return null;
      const he = (be == null ? void 0 : be.transform) || {}, Fe = c.width, xe = c.height, Ue = Number(ae.u0 || 0) + Number(he.du || 0), We = Number(ae.u1 || 0) + Number(he.du || 0), ze = Number(ae.v0 || 0) + Number(he.dv || 0), Je = Number(ae.v1 || 0) + Number(he.dv || 0);
      return {
        minX: Math.floor((Ue % 1 + 1) % 1 * Fe),
        maxX: Math.ceil((We % 1 + 1) % 1 * Fe),
        minY: Math.floor(Z(ze, 0, 1) * xe),
        maxY: Math.ceil(Z(Je, 0, 1) * xe),
        wraps: We - Ue >= 1 || Ue < 0 || We > 1
      };
    }
    function te(be) {
      return be ? be.wraps ? D(L, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || D(L, { minX: be.minX, maxX: c.width - 1, minY: be.minY, maxY: be.maxY }) : D(L, be) : !0;
    }
    function oe(be) {
      if (!be) return { touched: !1, canvas: null };
      const ae = Sa(c.width, c.height, { readback: !0 });
      ae.ctx.drawImage(be, 0, 0);
      const he = ae.ctx.getImageData(0, 0, c.width, c.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(f.canvas, 0, 0), ae.ctx.restore();
      const Fe = ae.ctx.getImageData(0, 0, c.width, c.height);
      for (let xe = 0; xe < c.width * c.height; xe += 1) {
        if (p[xe * 4 + 3] <= 8) continue;
        const We = he.data[xe * 4 + 3], ze = Fe.data[xe * 4 + 3];
        if (We > ze)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ge(be, ae, he) {
      const Fe = Number(he == null ? void 0 : he.z_index), xe = Q1(be, ae, he).map((Ue, We) => ({
        ...Ue,
        z_index: Number.isFinite(Fe) ? Fe + We * 1e-3 : M + We * 1e-3
      }));
      return xe.length && (M = Math.max(M, ...xe.map((Ue) => Number((Ue == null ? void 0 : Ue.z_index) || 0))) + 1), xe;
    }
    for (const be of yn()) {
      const ae = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!ae) continue;
      const he = dr(ae, "paint");
      if (!te(q(be, he))) {
        _.push(be), g.push(...he);
        continue;
      }
      const Fe = ((qe = (Be = h.paintEngine) == null ? void 0 : Be.getGroupTarget) == null ? void 0 : qe.call(Be, ae)) || null, xe = ((st = Fe == null ? void 0 : Fe.committedPaint) == null ? void 0 : st.canvas) || null;
      if (!xe) {
        _.push(be), g.push(...he);
        continue;
      }
      const Ue = oe(xe);
      if (!Ue.touched || !Ue.canvas) {
        _.push(be), g.push(...he);
        continue;
      }
      N = !0;
      const We = ge(Ue.canvas, "paint", m.get(ae) || be || {});
      k.push(...We);
    }
    for (const be of On().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!te(J(be))) {
        k.push(be);
        continue;
      }
      const ae = op(be, null);
      if (!ae) {
        k.push(be);
        continue;
      }
      const he = oe(ae);
      if (!he.touched || !he.canvas) {
        k.push(be);
        continue;
      }
      N = !0;
      const Fe = ge(he.canvas, "paint", be);
      k.push(...Fe);
    }
    return N ? (v.painting.paint.strokes = g, v.painting.groups = _.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), v.painting.raster_objects = k.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), ba({ preservePanelValues: !1 }), !0) : !1;
  }
  function Qv(i) {
    var g, _, k, N, M;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.rawPoints) || ((N = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      tu(i);
      const E = Hn();
      E && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(E) : h.paintEngine.commitActiveStroke(i.stroke, E)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Gp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = Hn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function e_(i) {
    var g, _;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      tu(i);
      const k = Hn();
      k && h.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Kp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = Hn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function tu(i) {
    var m, g, _, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Uc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Zv(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Od((_ = i.stroke) == null ? void 0 : _.actionGroupId), To(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Uc(p, i.stroke.targetSpace, !0), f && Od((k = i.stroke) == null ? void 0 : k.actionGroupId), To(i.layerKind).push(i.stroke), !0);
  }
  function Bp(i) {
    var c;
    if (t === "cutout" && h.mode === "frame") {
      const f = He(), p = rn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = gr(i, f, performance.now()), _ = g ? Io(g) : null;
      if (_)
        for (const N of Bc()) {
          if (!bt(N)) continue;
          const M = Pa(N, _);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const E = Xt(N);
            if (E != null && E.visible) return { item: N, geom: E };
          }
        }
      const k = wc(!1).slice().sort((N, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of k) {
        if (N.type === "strokeGroup") {
          const L = Mo(ha("paint", N.actionGroupId || N.id || ""));
          if (!L) continue;
          const D = Xt(L);
          if (!(D != null && D.visible)) continue;
          const q = Array.isArray(D.strokePaths) ? D.strokePaths : [];
          for (const J of q) {
            const te = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!te.length) continue;
            if (J.closed && te.length >= 3 && ei(i, te)) return { item: L, geom: D };
            const oe = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let ge = 0; ge < te.length - 1; ge += 1)
              if (Wu(i, te[ge], te[ge + 1]) <= oe * oe) return { item: L, geom: D };
            if (te.length === 1 && Pi(i, te[0]) <= oe * oe) return { item: L, geom: D };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const L = ko(ma(((c = N.item) == null ? void 0 : c.id) || N.id || ""));
          if (!L) continue;
          const D = Xt(L);
          if (ip(L, D, i, g)) return { item: L, geom: D };
          continue;
        }
        const M = N.item;
        if (!M || !bt(M) || !_) continue;
        const E = Pa(M, _);
        if (E && Number(E.x) >= 0 && Number(E.x) <= 1 && Number(E.y) >= 0 && Number(E.y) <= 1) {
          const L = Xt(M);
          if (L != null && L.visible) return { item: M, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...wc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Mo(ha("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? ko(ma(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Bc().filter((f) => jn(f)) : []
    ];
    for (const f of s) {
      if (nn(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of g) {
          const k = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!k.length) continue;
          if (_.closed && k.length >= 3 && ei(i, k)) return { item: f, geom: m };
          const N = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < k.length - 1; M += 1)
            if (Wu(i, k[M], k[M + 1]) <= N * N) return { item: f, geom: m };
          if (k.length === 1 && Pi(i, k[0]) <= N * N) return { item: f, geom: m };
        }
        continue;
      }
      if (bn(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        if (ip(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = Xt(f);
      if (p.visible && ei(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Ea(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (bt(c)) return Sf(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((g) => Pi(g, s) <= 121);
      if (p >= 0) {
        const g = i.corners[p], _ = g.x - i.center.x, k = g.y - i.center.y, N = _ * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: N };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && ei(s, _)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let N = 0; N < _.length - 1; N += 1)
          if (Wu(s, _[N], _[N + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => Pi(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], g = m.x - i.center.x, _ = m.y - i.center.y, k = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      return ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
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
      const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: _ };
    }
    return Pi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function Wp(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function t_(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function n_(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => t_(i, p))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ei({ x: c, y: f }, s.corners);
  }
  function ht(i) {
    if (Yv(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Le("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Le("grabbing") : h.interaction.kind === "space_pan" ? Le("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Le("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Le("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Le(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Le("grabbing") : Le("default");
      return;
    }
    if (Hp()) {
      Le("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Le(wI);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Le("default");
        return;
      }
      Le("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Le("default");
      return;
    }
    if (h.gizmoAxis) {
      Le("grab");
      return;
    }
    const s = Nt(), c = s ? Xt(s) : null, f = s ? dn(s) : !1, p = f ? { kind: "none", cursor: "default" } : Ea(c, i, s);
    if (!f && p.kind !== "none") {
      Le(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Bp(i)) {
      Le("default");
      return;
    }
    Le(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!en) return;
    if (hn = !1, h.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId) {
      const p = r_();
      hn = p.visible, Up(p);
      return;
    }
    const i = Nt(), s = Qn();
    if (!i && s.length === 0 || h.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = xs(), f = lP({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? ya(s) : Xt(i),
      allLocked: Mc(s),
      anyLocked: s.some((p) => dn(p)),
      selectedLocked: dn(i),
      activeAspect: ri(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Gt,
      isStickerHidden: No,
      canRestoreSelectedToInitial: $b,
      iconSet: Me
    });
    Up(f);
  }
  function r_() {
    const i = zi() && !h.interaction ? Ur().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Vs(), c = i.stickers.find((m) => m.id === h.worldSelectedId), p = (c ? ay(c) : [i.gizmo.transform.position]).map((m) => mm(s, m, C.width, C.height)).filter(Boolean);
    return uP({ corners: p, gizmoMode: h.gizmoMode });
  }
  function Up(i) {
    var m, g;
    if (!i.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (_, k, { requireFitsBelow: N = !0 } = {}) => {
      var oe, ge, ie;
      const E = Number((oe = i.anchor) == null ? void 0 : oe.minX), L = Number((ge = i.anchor) == null ? void 0 : ge.maxX), D = Number((ie = i.anchor) == null ? void 0 : ie.maxY);
      if (![E, L, D].every(Number.isFinite)) return null;
      const q = Math.max(14, C.width - _ - 14), J = Z((E + L) * 0.5 - _ * 0.5, 14, q), te = D + 18;
      return !Number.isFinite(J) || !Number.isFinite(te) || N && te + k > C.height - 14 ? null : { left: J, top: te };
    }, c = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(c, f, { requireFitsBelow: !1 });
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
      const _ = en.getBoundingClientRect(), k = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, N = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40;
      h.menuSize = { w: k, h: N, measured: !0 };
      const M = s(k, N);
      if (!M) {
        I.selectionMenu.visible = !1;
        return;
      }
      I.selectionMenu.left = M.left, I.selectionMenu.top = M.top;
    });
  }
  function Gi() {
    Ae.timer && (clearTimeout(Ae.timer), Ae.timer = 0), Ae.target = null, I.tooltip.visible = !1;
  }
  function i_(i) {
    if (!mi || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var J, te;
      if (Ae.target !== c || !mi || !(c != null && c.isConnected)) return;
      const f = de.getBoundingClientRect(), p = c.getBoundingClientRect(), m = 8, g = 12, _ = Math.round(Number(((J = mi.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, k = Math.round(Number(((te = mi.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, N = !!c.closest(".pano-floating-left"), M = !!c.closest(".pano-frame-rail"), E = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let L = "", D = p.left - f.left + p.width * 0.5 - _ * 0.5, q = p.top - f.top - k - g;
      if (N)
        L = "tool-rail", D = p.right - f.left + 10, q = p.top - f.top + p.height * 0.5 - k * 0.5, D = Z(D, m, Math.max(m, f.width - _ - m)), q = Z(q, m, Math.max(m, f.height - k - m));
      else if (M)
        L = "frame-rail", D = p.left - f.left - _ - 10, q = p.top - f.top + p.height * 0.5 - k * 0.5, D = Z(D, m, Math.max(m, f.width - _ - m)), q = Z(q, m, Math.max(m, f.height - k - m));
      else if (E) {
        L = "footer";
        const oe = c.closest(".pano-paint-footer"), ge = oe ? oe.getBoundingClientRect() : p;
        D = ge.left - f.left + ge.width * 0.5 - _ * 0.5, q = ge.bottom - f.top + 5, D = Z(D, m, Math.max(m, f.width - _ - m)), q = Math.max(m, q);
      }
      D = Z(D, m, Math.max(m, f.width - _ - m)), q = Math.max(m, q), I.tooltip.left = D, I.tooltip.top = q, I.tooltip.variant = L, I.tooltip.visible = !0;
    });
  }
  const pn = nd({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Bt(Number(i.yaw || 0)), h.viewPitch = Z(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = Z(Number(i.fov || h.viewFov || 100), 35, 140);
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
  function o_(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += x0(s, i.lastAngle), i.lastAngle = s;
    const f = S0(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = zo(f), p.fillPct = (f + 180) / 360 * 100), Xr(), nu(i), le({ localOnly: !0 });
  }
  function a_(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = By(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = zo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), Xr(), nu(i), le({ localOnly: !0 });
  }
  const Yp = (i, s) => {
    const c = ki(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function nu(i) {
    var g, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Ae.timer && (clearTimeout(Ae.timer), Ae.timer = 0), Ae.target = null;
    const s = rn(i.shot), c = (g = C.getBoundingClientRect) == null ? void 0 : g.call(C), f = (_ = de.getBoundingClientRect) == null ? void 0 : _.call(de);
    if (!s || !c || !f || C.width <= 0 || C.height <= 0) return;
    const p = c.width / C.width, m = c.height / C.height;
    I.tooltip.text = `${zo(i.shot.roll_deg)}°`, I.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * p, I.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  at == null || at.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const c = rn(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = Yp(i, f);
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
    }, (m = at.setPointerCapture) == null || m.call(at, i.pointerId), i.preventDefault(), Xr(), nu(h.interaction), le({ localOnly: !0 });
  }), at == null || at.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || o_(
      h.interaction,
      Yp(i, h.interaction.center),
      i
    );
  });
  const s_ = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (et(), ct(), $e()), h.interaction = null, Gi(), Br(), Xr(), le());
  };
  at == null || at.addEventListener("pointerup", s_), at == null || at.addEventListener("pointercancel", () => Ia()), at == null || at.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Ia();
  }), at == null || at.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, et(), ct(), $e(), Xr(), le(), i.preventDefault());
  }), C.onpointerdown = (i) => {
    De.selection && (De.selection = null, qr());
    const s = ki(i);
    it = s, Ls(s, !0), h.viewTween = null, pn.state.inertia.active = !1, pn.state.inertia.vx = 0, pn.state.inertia.vy = 0;
    const c = _a(), f = c ? IN(Tc(), i) : null;
    if (f === "look") {
      i.preventDefault();
      const N = Ds(i);
      h.interaction = { kind: "view", last: N, lastTs: performance.now() }, pn.startDrag(N.x, N.y, i.pointerId, performance.now()), ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (f) {
      i.preventDefault(), np(f, s, i.pointerId);
      return;
    }
    if (c && i.button !== 0) {
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
        const N = h.mode === "unwrap" ? s : Ds(i);
        h.interaction = { kind: "view", last: N, lastTs: performance.now() }, pn.startDrag(N.x, N.y, i.pointerId, performance.now());
      }
      ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const N = He(), M = rn(N);
      if (!N || N.locked === !0 || !M) return;
      const E = Ky({
        frame: M,
        point: s,
        startRollDeg: Number(N.roll_deg ?? N.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!E) return;
      h.interaction = {
        kind: "roll_frame",
        shot: N,
        center: E.center,
        lastAngle: E.lastAngle,
        accumulatedRad: E.accumulatedRad,
        rollGesture: E,
        start: { roll_deg: Number(N.roll_deg ?? N.rot_deg ?? 0) },
        changed: !1,
        altStarted: E.source === "alt",
        source: E.source
      }, C.setPointerCapture(i.pointerId), i.preventDefault(), Xr(), le({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      const N = He();
      if (!N || r || N.locked === !0) return;
      h.interaction = {
        kind: "pan_frame",
        shot: N,
        last: s,
        start: { yaw_deg: Number(N.yaw_deg || 0), pitch_deg: Number(N.pitch_deg || 0) },
        changed: !1
      }, ht(s), C.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && Jp(i, s);
      return;
    }
    if (se && !se.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (zp() || eu())) {
      Tn();
      const N = h.primaryTool === "mask" ? "mask" : "paint", M = h.primaryTool === "mask" ? h.maskTool : h.paintTool, E = h.mode === "frame" && eu() ? He() : null, L = { kind: "ERP_GLOBAL" }, D = E ? gr(s, E, performance.now()) : mr(s, performance.now());
      if (!D) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: M === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: N,
        _livePreviewToken: jo("live"),
        stroke: M === "lasso_fill" ? Kp(N, M, [D], L) : Gp(N, M, [D], L)
      }, Ao();
      const q = Hn();
      if (q)
        if (h.paintEngine.beginStroke(h.interaction.stroke, q), h.interaction.kind === "paint_stroke") {
          const J = h.paintEngine.ensureTarget(q), te = Number((D == null ? void 0 : D.u) ?? (D == null ? void 0 : D.x) ?? 0), oe = Number((D == null ? void 0 : D.v) ?? (D == null ? void 0 : D.y) ?? 0);
          h.paintEngine.appendStrokePoint(J, te, oe, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, q);
      ht(s), C.setPointerCapture(i.pointerId), le();
      return;
    }
    const p = Qn(), m = Nt(), g = p.length > 1 ? ya(p) : m ? Xt(m) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, ht(s), C.setPointerCapture(i.pointerId), le({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && zi() && l_(i, s)) return;
    if (p.length > 1 && (g != null && g.visible)) {
      if ((p.some((M) => dn(M)) ? { kind: "none" } : Ea(g, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: p.map((M) => M),
          offset: { x: s.x - g.center.x, y: s.y - g.center.y },
          startCenter: { x: g.center.x, y: g.center.y },
          stickerSnapshots: p.filter((M) => bt(M)).map((M) => ({
            id: String(M.id || ""),
            yaw_deg: Number(Qt(M).yaw_deg || 0),
            pitch_deg: Number(Qt(M).pitch_deg || 0),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: p.filter((M) => nn(M)).map((M) => ({
            id: String(M.actionGroupId || M.id || ""),
            layerKind: String(M.layerKind || "paint"),
            snapshot: wn(dr(M.actionGroupId, M.layerKind)),
            frameSnapshot: wn(yi(M.actionGroupId, M.layerKind)),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: kc(M.actionGroupId, M.layerKind)
          })),
          rasterSnapshots: p.filter((M) => bn(M)).map((M) => ({
            id: ln(M.rasterObjectId || M.id || ""),
            snapshot: wn(On().find((E) => String((E == null ? void 0 : E.id) || "") === ln(M.rasterObjectId || M.id || ""))),
            center: (() => {
              var L, D;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: up(M)
          }))
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (m && (g != null && g.visible)) {
      const N = dn(m) ? { kind: "none" } : Ea(g, s, m);
      if (N.kind === "scale") {
        h.interaction = nn(m) ? {
          kind: "scale_stroke_group",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: wn(dr(m.actionGroupId, m.layerKind)),
          frameSnapshot: wn(yi(m.actionGroupId, m.layerKind)),
          cursor: N.cursor
        } : bn(m) ? {
          kind: "scale_raster_object",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: wn(On().find((M) => String((M == null ? void 0 : M.id) || "") === ln(m.rasterObjectId || m.id || ""))),
          cursor: N.cursor
        } : {
          kind: "scale",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Qt(m).hFOV_deg || 20),
          startVFOV: Number(Qt(m).vFOV_deg || 20),
          cursor: N.cursor
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "scale_x" || N.kind === "scale_y") {
        h.interaction = {
          kind: N.kind,
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Qt(m).hFOV_deg || 20),
          startVFOV: Number(Qt(m).vFOV_deg || 20),
          cursor: N.cursor,
          edge: N.edge
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "rotate") {
        h.interaction = nn(m) ? {
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
          startRot: Number(Qt(m).rot_deg || Qt(m).roll_deg || 0),
          startAng: Math.atan2(s.y - g.center.y, s.x - g.center.x)
        }, ht(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "move") {
        if (nn(m)) {
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
        if (bn(m)) {
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
    const _ = Bp(s);
    if (_) {
      const N = h.selectedId !== _.item.id;
      if (N && h.selectedId && (et(), Pn()), pr(_.item), t === "cutout" && N && (h.cutoutAspectOpen = !1), N && $e(), Ke(), le(), dn(_.item)) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: nn(_.item) ? "move_stroke_group" : bn(_.item) ? "move_raster_object" : "move",
        item: _.item,
        offset: { x: s.x - _.geom.center.x, y: s.y - _.geom.center.y },
        startUv: nn(_.item) || bn(_.item) ? h.mode === "frame" ? (() => {
          const M = He();
          return M ? gr(s, M, performance.now()) : null;
        })() : mr(s, performance.now()) : null,
        snapshot: nn(_.item) ? wn(dr(_.item.actionGroupId, _.item.layerKind)) : bn(_.item) ? wn(On().find((M) => String((M == null ? void 0 : M.id) || "") === ln(_.item.rasterObjectId || _.item.id || ""))) : null,
        frameSnapshot: nn(_.item) ? wn(yi(_.item.actionGroupId, _.item.layerKind)) : null
      }, ht(s), C.setPointerCapture(i.pointerId);
      return;
    }
    const k = !!h.selectedId;
    k && (et(), Pn()), ba(), k && $e(), Ke(), le(), h.mode === "pano" && Jp(i, s);
  };
  function Vs() {
    return Cu(Wr(), C.width, C.height, ji());
  }
  function Oa(i, s) {
    return sn.gizmoPointer(i, Vs(), s.x, s.y, C.width, C.height);
  }
  function l_(i, s) {
    var _;
    const c = (_ = Ur().space) == null ? void 0 : _.gizmo;
    if (c && Oa("hover", s) !== null && Oa("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: c.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: c.transform,
        base: fo(va(), h.frame),
        changed: !1
      }, C.setPointerCapture(i.pointerId), ht(s), !0;
    const f = Qn(), p = Nt(), m = f.length > 1 ? f.some((k) => dn(k)) ? "none" : Ea(ya(f), s).kind : p && !dn(p) ? Ea(Xt(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = sn.pickSticker(Vs(), s.x, s.y, C.width, C.height);
    return v.stickers.some((k) => k.id === g && k.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (et(), Pn()), Oc(g), $e(), Ke(), $i(), le()), h.interaction = { kind: "world_select" }, C.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Xp(i) {
    var f;
    const c = !!h.worldSelectedId && h.primaryTool === "cursor" && zi() && !!((f = Ur().space) != null && f.gizmo) ? Oa("hover", i) : null;
    c !== h.gizmoAxis && (h.gizmoAxis = c, Pe.backgroundDirty = !0, le({ localOnly: !0 }));
  }
  function c_(i, s) {
    const c = Oa("move", s), f = v.stickers.find((p) => p.id === i.id);
    !c || !f || (gk(f, h.frame, Xk(i.mode, i.base, i.start, c)), i.changed = !0, Dt(), $e(), le({ localOnly: !0 }));
  }
  function qp(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (Oa("up", h.pointerPos), Pe.backgroundDirty = !0, i.changed && (et(), ct(), $e())), ht(h.pointerPos), le();
  }
  function Jp(i, s) {
    if (_a()) {
      const f = Tc().emptyLeft;
      f && np(f, s, i.pointerId);
      return;
    }
    const c = Ds(i);
    h.interaction = { kind: "view", last: c, lastTs: performance.now() }, pn.startDrag(c.x, c.y, i.pointerId, performance.now()), ht(s), C.setPointerCapture(i.pointerId);
  }
  function u_(i, s) {
    if (!x || !zt.playing) return;
    if (zt.stop(), i.kind === "world_gizmo") {
      const p = v.stickers.find((m) => m.id === i.id);
      p && (i.base = fo(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = ya(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), _ = g ? Xt(g) : null;
        _ != null && _.visible && (m.yaw_deg = Number(Qt(g).yaw_deg || 0), m.pitch_deg = Number(Qt(g).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const c = Xt(i.item);
    if (!(c != null && c.visible)) return;
    const f = Qt(i.item);
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
    var f, p, m, g, _, k, N, M, E, L, D, q, J, te, oe, ge, ie, ke, Be, qe, st, be;
    const s = ki(i);
    if (Ls(s, !0), !h.interaction) {
      Xp(s), ht(s);
      return;
    }
    ht(s);
    const c = h.interaction;
    if (it && (s.x !== it.x || s.y !== it.y)) {
      const ae = it;
      it = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(c.kind) || u_(c, ae);
    }
    if (c.kind !== "world_select") {
      if (c.kind === "world_gizmo") {
        c_(c, s);
        return;
      }
      if (c.kind === "paint_stroke") {
        const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        ae.forEach((Fe) => {
          const xe = ki(Fe);
          if (h.mode === "frame") {
            const Ue = He(), We = Ue ? rn(Ue) : null;
            if (We) {
              const ze = (xe.x - We.x) / Math.max(1, We.w), Je = (xe.y - We.y) / Math.max(1, We.h);
              if (!(ze >= 0 && ze <= 1 && Je >= 0 && Je <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, Qv(c));
            }
          }
          qv(c, xe, performance.now()) && (he = !0);
        }), he && le({ localOnly: !0 });
        return;
      }
      if (c.kind === "paint_lasso_fill") {
        const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        if (ae.forEach((Fe) => {
          const xe = ki(Fe);
          if (h.mode === "frame") {
            const Ue = He(), We = Ue ? rn(Ue) : null;
            if (We) {
              const ze = (xe.x - We.x) / Math.max(1, We.w), Je = (xe.y - We.y) / Math.max(1, We.h);
              if (!(ze >= 0 && ze <= 1 && Je >= 0 && Je <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, e_(c));
            }
          }
          Jv(c, xe, performance.now()) && (he = !0);
        }), he) {
          const Fe = Hn();
          Fe && h.paintEngine.updateActiveStroke(c.stroke, Fe), le({ localOnly: !0 });
        }
        return;
      }
      if (c.kind === "view") {
        const ae = performance.now(), he = h.mode === "unwrap" ? s : Ds(i);
        pn.moveDrag(he.x, he.y, h.mode === "unwrap" ? "unwrap" : "pano", ae), c.lastTs = ae, c.last = he, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "space_pan" || c.kind === "space_orbit") {
        const ae = Wr();
        Dc(c.kind === "space_pan" ? Ok(ae, s.x - c.last.x, s.y - c.last.y, C.width, C.height, c.depth) : Ek(ae, s.x - c.last.x, s.y - c.last.y, C.height, c.pivot)), c.last = s;
        return;
      }
      if (c.kind === "pan_frame") {
        const ae = Qc(c.shot);
        if (!ae || !c.shot) return;
        const he = s.x - c.last.x, Fe = s.y - c.last.y, xe = Wy(c.shot, {
          dx: he,
          dy: Fe,
          focalPx: ae.focalPx,
          invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = v.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        c.shot.yaw_deg = xe.yaw_deg, c.shot.pitch_deg = xe.pitch_deg, c.changed = c.changed || Math.abs(he) > 0 || Math.abs(Fe) > 0, c.last = s, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "roll_frame") {
        if (c.source === "knob") return;
        a_(c, s, i);
        return;
      }
      if (c.kind === "move") {
        const ae = s.x - c.offset.x, he = s.y - c.offset.y;
        if (h.mode === "frame" && t === "cutout") {
          const Fe = He(), xe = rn(Fe);
          if (!Fe || !xe) return;
          const Ue = {
            x: Z((ae - xe.x) / Math.max(1, xe.w), 0, 1),
            y: Z((he - xe.y) / Math.max(1, xe.h), 0, 1)
          }, We = Wc(Fe, Ue);
          if (!We) return;
          const ze = nl(We);
          fr(c.item, { yaw_deg: ze.yaw, pitch_deg: ze.pitch });
        } else if (h.mode === "unwrap") {
          const Fe = wi(), xe = Z((ae - Fe.x) / Math.max(Fe.w, 1), 0, 1), Ue = Z((he - Fe.y) / Math.max(Fe.h, 1), 0, 1);
          fr(c.item, { yaw_deg: Bt(xe * 360 - 180), pitch_deg: Z(90 - Ue * 180, -90, 90) });
        } else {
          const Fe = Vc(ae, he), xe = nl(Fe);
          fr(c.item, { yaw_deg: xe.yaw, pitch_deg: xe.pitch });
        }
        bt(c.item) && Dt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "move_stroke_group") {
        const ae = h.mode === "frame" ? (() => {
          const xe = He();
          return xe ? gr(s, xe, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!ae || !c.startUv) return;
        const he = Zn(Number(ae.u || 0), Number(c.startUv.u || 0)), Fe = Number(ae.v || 0) - Number(c.startUv.v || 0);
        Td((m = c.item) == null ? void 0 : m.actionGroupId, he, Fe, c.snapshot, (g = c.item) == null ? void 0 : g.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_raster_object") {
        const ae = h.mode === "frame" ? (() => {
          const xe = He();
          return xe ? gr(s, xe, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!ae || !c.startUv) return;
        const he = Zn(Number(ae.u || 0), Number(c.startUv.u || 0)), Fe = Number(ae.v || 0) - Number(c.startUv.v || 0);
        Ld(((_ = c.item) == null ? void 0 : _.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", he, Fe, c.snapshot) && (Eo(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_raster_object") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        Ab(((N = c.item) == null ? void 0 : N.rasterObjectId) || ((M = c.item) == null ? void 0 : M.id) || "", he, c.snapshot) && (Eo(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_multi") {
        const ae = s.x - Number(((E = c.offset) == null ? void 0 : E.x) || 0), he = s.y - Number(((L = c.offset) == null ? void 0 : L.y) || 0);
        let Fe = !1, xe = !1, Ue = !1;
        const We = ae - Number(((D = c.startCenter) == null ? void 0 : D.x) || ae), ze = he - Number(((q = c.startCenter) == null ? void 0 : q.y) || he);
        for (const Je of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
          const St = (t === "cutout" ? Sc() : kr()).find((At) => String((At == null ? void 0 : At.id) || "") === String(Je.id || ""));
          if (!St || !bt(St)) continue;
          const _n = {
            x: Number(((J = Je.center) == null ? void 0 : J.x) || 0) + We,
            y: Number(((te = Je.center) == null ? void 0 : te.y) || 0) + ze
          };
          if (h.mode === "frame" && t === "cutout") {
            const At = He(), jt = rn(At);
            if (!At || !jt) continue;
            const Nr = {
              x: Z((_n.x - jt.x) / Math.max(1, jt.w), 0, 1),
              y: Z((_n.y - jt.y) / Math.max(1, jt.h), 0, 1)
            }, yh = Wc(At, Nr);
            if (!yh) continue;
            const bh = nl(yh);
            fr(St, { yaw_deg: bh.yaw, pitch_deg: bh.pitch });
          } else if (h.mode === "unwrap") {
            const At = wi(), jt = Z((_n.x - At.x) / Math.max(At.w, 1), 0, 1), Nr = Z((_n.y - At.y) / Math.max(At.h, 1), 0, 1);
            fr(St, { yaw_deg: Bt(jt * 360 - 180), pitch_deg: Z(90 - Nr * 180, -90, 90) });
          } else {
            const At = Vc(_n.x, _n.y), jt = nl(At);
            fr(St, { yaw_deg: jt.yaw, pitch_deg: jt.pitch });
          }
          Fe = !0;
        }
        for (const Je of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
          const St = {
            x: Number(((oe = Je.center) == null ? void 0 : oe.x) || 0) + We,
            y: Number(((ge = Je.center) == null ? void 0 : ge.y) || 0) + ze
          }, _n = h.mode === "frame" ? (() => {
            const jt = He();
            return jt ? gr(St, jt, performance.now()) : null;
          })() : mr(St, performance.now()), At = Je.centerUv || null;
          if (_n && At) {
            const jt = Zn(Number(_n.u || 0), Number(At.u || 0)), Nr = Number(_n.v || 0) - Number(At.v || 0);
            Td(Je.id, jt, Nr, Je.snapshot, Je.layerKind, Je.frameSnapshot) && (Fe = !0, xe = !0);
          }
        }
        for (const Je of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
          const St = {
            x: Number(((ie = Je.center) == null ? void 0 : ie.x) || 0) + We,
            y: Number(((ke = Je.center) == null ? void 0 : ke.y) || 0) + ze
          }, _n = h.mode === "frame" ? (() => {
            const jt = He();
            return jt ? gr(St, jt, performance.now()) : null;
          })() : mr(St, performance.now()), At = Je.centerUv || null;
          if (_n && At) {
            const jt = Zn(Number(_n.u || 0), Number(At.u || 0)), Nr = Number(_n.v || 0) - Number(At.v || 0);
            Ld(Je.id, jt, Nr, Je.snapshot) && (Fe = !0, Ue = !0);
          }
        }
        Fe && (xe ? hr({ rebuildPaintEngine: !1 }) : Ue ? Eo() : Dt(), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_stroke_group") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        Dd((Be = c.item) == null ? void 0 : Be.actionGroupId, he, 0, c.snapshot, (qe = c.item) == null ? void 0 : qe.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "rotate_stroke_group") {
        let ae = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * no;
        i.shiftKey && (ae = Math.round(ae / 45) * 45), Dd((st = c.item) == null ? void 0 : st.actionGroupId, 1, ae, c.snapshot, (be = c.item) == null ? void 0 : be.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (c.kind === "marquee_select") {
        c.current = s, le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { hFOV_deg: Z(c.startHFOV * he, 1, 179), vFOV_deg: Z(c.startVFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = to(c.item)), bt(c.item) && Dt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_x") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { hFOV_deg: Z(c.startHFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = to(c.item)), bt(c.item) && Dt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_y") {
        const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        fr(c.item, { vFOV_deg: Z(c.startVFOV * he, 1, 179) }), ur(c.item) || (c.item.aspect_id = to(c.item)), bt(c.item) && Dt(), le({ localOnly: !0 });
        return;
      }
      if (c.kind === "rotate") {
        let he = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * no, Fe = c.startRot - he;
        i.shiftKey && (Fe = Math.round(Fe / 45) * 45), fr(c.item, { [bt(c.item) ? "rot_deg" : "roll_deg"]: Fe }), bt(c.item) && Dt(), le({ localOnly: !0 });
      }
    }
  }, C.onpointerup = () => {
    var s, c, f, p, m, g, _, k;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, ht(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        qp(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        Ao();
        const N = tu(h.interaction), M = !!h.interaction._hasCommittedSegments;
        if (N || M) {
          hr();
          const E = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (E) {
            const D = yn().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === E);
            D && (D.frame = null);
          }
          const L = Hn();
          L && (N ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(L), vp()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, L) : h.paintEngine.cancelActiveStroke(L)), et(), Pn(), $e(), Ke(), e.setDirtyCanvas(!0, !0), le();
        } else {
          const E = Hn();
          E && h.paintEngine.cancelActiveStroke(E);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = Wp(h.interaction.start, h.interaction.current), E = [
          ...t === "cutout" ? Bc().filter((L) => !jn(L)) : [...kr()],
          ...kb(),
          ...Mb()
        ].filter((L) => n_(N, Xt(L)));
        Eb(E, ((g = E[E.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && E.length && (h.cutoutAspectOpen = !1), $e(), Ke(), le();
      } else if (((_ = h.interaction) == null ? void 0 : _.kind) === "pan_frame" || ((k = h.interaction) == null ? void 0 : k.kind) === "roll_frame")
        h.interaction.changed && (et(), ct(), $e());
      else if (h.interaction && h.interaction.kind !== "view") {
        let N = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (N = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (N = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (N = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? hr({ rebuildPaintEngine: !0 }) : Eo()), et(), Pn(), e.setDirtyCanvas(!0, !0), Oo(), Ke(), le();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Gi(), Ao(), i && i.kind === "view" && pn.endDrag(performance.now()), Br(), Ke(), ht(h.pointerPos), le();
    }
  }, C.onpointercancel = () => {
    var i, s, c, f, p;
    if (!Ia()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        qp(h.interaction);
        return;
      }
      if (((c = h.interaction) == null ? void 0 : c.kind) === "view" && pn.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Ao();
        const m = Hn();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Ao(), Br(), ht(h.pointerPos), le({ localOnly: !0 });
    }
  }, C.onlostpointercapture = () => {
    Ia();
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.oncontextmenu = (i) => {
    _a() && EN(Tc(), 2) && i.preventDefault();
  }, C.onmousemove = (i) => {
    const s = ki(i), c = Ls(s, !0);
    h.interaction || (ht(s), c && h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 }));
  }, C.onpointerleave = () => {
    h.interaction || Xp({ x: -1e6, y: -1e6 });
  }, C.onmouseleave = () => {
    Ls(h.pointerPos, !1), ht(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 });
  }, C.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = ki(i), c = Ol(i);
      c && Kv(s, c) && le({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (_a()) {
        const s = Ol(i);
        s && t1(ki(i), -s);
      } else pn.applyWheelEvent(i) && le({ localOnly: !0 });
      i.preventDefault();
    }
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), zn(!0));
  }, C.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Xe.depth = 0, zn(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => br(p));
    c && Op(c);
  };
  const Zp = (i) => {
    t !== "stickers" && t !== "cutout" || r || Vi(i) && (Xe.depth += 1, zn(!0), i.preventDefault());
  }, Qp = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Xe.active && Vi(i) && zn(!0), Xe.active && i.preventDefault());
  }, eh = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Xe.active) return;
    Xe.depth = Math.max(0, Xe.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Xe.depth === 0 || s) && zn(!1);
  }, th = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Xe.depth = 0, zn(!1), Vi(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Zp, !0), window.addEventListener("dragover", Qp, !0), window.addEventListener("dragleave", eh, !0), window.addEventListener("drop", th, !0);
  function ru() {
    const { canUndo: i, canRedo: s } = Cp();
    Xi(I.toolButtons, "value", "undo", { disabled: !i }), Xi(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const nh = (i, s, c = !1) => {
    var M;
    Tn();
    const f = t === "cutout" && h.mode === "frame" ? He() : null, p = f || Nt(), m = f ? "shot" : xs(), g = x && h.inspectCamera, _ = va();
    if (_ && !Ms(_) || !g && !_ && (!p || m === "stroke" || dn(p))) return;
    const k = (((M = I.sidePanel) == null ? void 0 : M.params) || []).find((E) => E.key === i);
    if (!k || k.enabled === !1) return;
    let N = Number(s);
    if (Number.isNaN(N) && (N = 0), _ && hI.has(i) ? N = i === "scale" ? Math.max(N, ag) : N : N = Z(N, Number(k.min), Number(k.max)), i === "yaw_deg" && (N = Bt(N)), g) {
      dk(v.camera, h.frame, i, N), $e(), c && et();
      return;
    }
    if (_) {
      mk(_, h.frame, i, N), Dt(), $e(), le(), c && et();
      return;
    }
    i === "opacity" ? pk(p, h.frame, N / 100) : fr(p, { [i]: N }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = to(p)), $e(), le(), c && et();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var f, p, m, g, _, k, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const M = Kn(s.getAttribute("data-coverage"));
      if (M === Kn(v.coverage)) return;
      v.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? Pe.backgroundDirty = !0 : (Pn(), Hv({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), $e(), Ke(), le();
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
      if (M && (t === "stickers" ? E = kr().find((L) => String((L == null ? void 0 : L.id) || "") === M) || null : E = ((m = Vd().find((L) => {
        var D;
        return String(((D = L == null ? void 0 : L.item) == null ? void 0 : D.id) || "") === M;
      })) == null ? void 0 : m.item) || null), pr(E || null), E && !nn(E)) {
        const L = Qt(E);
        yc(
          Bt(Number(L.yaw_deg || 0)),
          Z(Number(L.pitch_deg || 0), -89.9, 89.9),
          h.viewFov
        );
      }
      $e(), Ke(), le();
      return;
    }
    if (c === "copy-state-inline") {
      const M = Nt(), E = xs();
      if (!M || E === "stroke" || Qn().length > 1) return;
      const L = JSON.stringify(t === "cutout" && E !== "image" ? Wd(M) : Bb(Qt(M)));
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
      M === "panorama" ? h.showPanorama = !h.showPanorama : M === "objects" ? h.showObjects = !h.showObjects : M === "mask" && (h.showMask = !h.showMask), $e(), le();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Zc(), $e(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), le();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Zc(), $e(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), le();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, Zc(), $e(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), le();
      return;
    }
    if (c === "close-preview") {
      Lo();
      return;
    }
    if (c === "cancel-close") {
      Lo();
      return;
    }
    c === "save-close" && (zv(), Lo());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && nh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && nh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const iu = () => $i();
  iu(), T.addEventListener("click", (i) => {
    var N, M, E, L;
    if ((M = (N = i.target) == null ? void 0 : N.matches) != null && M.call(N, "[data-confirm-overlay]")) {
      const D = (E = I.confirmDialog) == null ? void 0 : E.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, D == null || D(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Qb(s.getAttribute("data-space-mode"));
      return;
    }
    const c = i.target.closest("[data-gizmo-mode]");
    if (c) {
      h.gizmoMode = c.getAttribute("data-gizmo-mode"), Pe.backgroundDirty = !0, Ke(), le({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.disabled) return;
      const D = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && (D !== "frame" && (Pe.frameSafeRect = null), $e(), Ke()), Ts(), Br(), le();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const D = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = D, (D === "paint" || D === "mask") && ba({ preservePanelValues: !0 }), Fn(), $e(), Ke(), le();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const D = String(p.getAttribute("data-tool-ui-action") || "");
        if ((D === "undo" || D === "redo") && p.disabled) return;
        D === "undo" ? Yc(-1) : D === "redo" ? Yc(1) : D === "clear" ? Fv() : D === "add" || D === "add-image" ? wv() : D === "add-world" ? xv() : D === "add-or-look" && Iv();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const D = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = D, ba({ preservePanelValues: !0 }), Dn[D] && (h.activeBrushPresetId = D), Fn(), $e(), Ke(), le();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), ba({ preservePanelValues: !0 }), Fn(), $e(), Ke(), le();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const D = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Tv(D);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const D = wl.find((q) => q.id === p.getAttribute("data-paint-color-swatch"));
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
      Qe.resumeAfterScrub = !1, qc();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), jd(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
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
        Lp(D, String(p.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, Oo(), et(), ct(), Br(), le();
        return;
      }
      if (m === "frame-aspect-custom") {
        const D = h.mode === "frame" ? He() : null, q = p.getAttribute("data-custom-width"), J = p.getAttribute("data-custom-height");
        if (!D || !Rv(D, q, J)) return;
        I.frameRail.aspectOpen = !1, Oo(), et(), ct(), Br(), le();
        return;
      }
      if (m === "frame-rotate-90") {
        const D = h.mode === "frame" ? He() : null;
        if (!D || D.locked === !0) return;
        Rp(D), I.frameRail.aspectOpen = !1, Oo(), et(), ct(), Br(), le();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), le();
        return;
      }
      if (m === "aspect-set") {
        const D = Nt();
        if (!D) return;
        const q = String(p.getAttribute("data-aspect") || "1:1");
        Lp(D, q), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Oo(), et(), ct(), Ke(), le();
        return;
      }
      if (m === "rotate-90") {
        const D = Nt();
        if (!D) return;
        Rp(D), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Oo(), et(), ct(), Ke(), le();
        return;
      }
      if (m === "bring-front") {
        Vv();
        return;
      }
      if (m === "send-back") {
        $v();
        return;
      }
      if (m === "duplicate") {
        Dv();
        return;
      }
      if (m === "replace-image") {
        Pv();
        return;
      }
      if (m === "toggle-lock") {
        Ib();
        return;
      }
      if (m === "back-initial") {
        Rb();
        return;
      }
      if (m === "toggle-visible") {
        Lb();
        return;
      }
      if (m === "delete") {
        Dp();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      yc(0, 0, 100, 180, 680), h.viewPosition = [0, 0, 0], h.viewMoved = !1;
      return;
    }
    if (m === "frame-view") {
      if (!_a()) return;
      e1();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, GI(e == null ? void 0 : e.id, h.showGrid), iu(), le();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), p_();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const D = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = D, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = D ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), sh(), le();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const _ = Number(g.getAttribute("data-paint-history-index")), k = h.customPaintHistory[_];
    k && (h.customPaintColor = Gn(k), h.paintColor = Gn(k), Fn());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      zt.playing && (Qe.resumeAfterScrub = !0), zt.seek(Qi(Number(s.value || 0), ks()));
      return;
    }
    const c = i.target.closest("[data-video-volume]");
    if (c) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = Z(Number(c.value || 0), 0, 1);
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
      h.brushSizes[g] = m, Fn(), Xv();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: Z(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = Gn(m), h.paintColor = Gn(m), Fn();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      Qe.resumeAfterScrub && zt.play(), Qe.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Rs();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Rs();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Rs();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Rs();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || Ae.target !== s && (Ae.target = s, Ae.timer && clearTimeout(Ae.timer), Ae.timer = window.setTimeout(() => {
      Ae.target === s && i_(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Ae.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || Gi();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Gi();
  });
  const f_ = (i, s) => {
    var _;
    if (!me) return;
    const c = me.getBoundingClientRect(), f = Z((i - c.left) / Math.max(1, c.width), 0, 1), p = 1 - Z((s - c.top) / Math.max(1, c.height), 0, 1), m = Yu(h.customPaintColor), g = { ...Uu(m.h, f, p), a: Number(((_ = h.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    h.customPaintColor = Gn(g), h.paintColor = Gn(g), Fn();
  }, d_ = (i) => {
    var m;
    if (!Se) return;
    const s = Se.getBoundingClientRect(), c = Z((i - s.left) / Math.max(1, s.width), 0, 1), f = Yu(h.customPaintColor), p = { ...Uu(c, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = Gn(p), h.paintColor = Gn(p), Fn();
  }, rh = (i, s) => {
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
    i.preventDefault(), i.stopPropagation(), rh(i, (s) => f_(s.clientX, s.clientY));
  }), Se && (Se.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), rh(i, (s) => d_(s.clientX));
  }), T.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (p = I.confirmDialog) == null ? void 0 : p.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const ih = () => {
    const i = !!h.fullscreen;
    Xi(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Me.fullscreen_close : Me.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, $s = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), iu(), ih(), Ri(), le());
  }, oh = () => document.fullscreenElement === _e, p_ = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        $s(!h.fullscreen);
        return;
      }
      oh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      $s(!h.fullscreen);
    }
  }, ah = () => {
    document.fullscreenEnabled && $s(oh());
  };
  document.addEventListener("fullscreenchange", ah), ih();
  const sh = () => {
    const i = !!h.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? Me.fullscreen_close : Me.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  sh();
  const ou = e.onConnectionsChange;
  let au = null, lh = () => {
  };
  !r && t === "stickers" && (lh = qy(e, (i = "sync") => {
    i === "executed" && (CI(ft, Qs), vi(), x && vv()), Ud(i);
  }, { editor: !0 }), au = function(...s) {
    typeof ou == "function" && ou.apply(this, s), vi(), li(this, "connections");
  }, e.onConnectionsChange = au), r || cg.set(String(e.id ?? "0"), () => ap());
  let Do = null;
  const Lo = async () => Do || (Do = (async () => {
    var i, s, c, f, p, m, g, _;
    return cg.delete(String(e.id ?? "0")), Bv(), r || Pn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", ah), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === $p && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (_ = (g = (m = vr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || _.call(g, !0, !0), Gi(), hv(), Y instanceof HTMLVideoElement && Y.pause(), gn.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), sn.dispose(), zn(!1), window.removeEventListener("keydown", ch, !0), window.removeEventListener("keydown", uh, !0), window.removeEventListener("keydown", dh, !0), window.removeEventListener("keyup", ph, !0), window.removeEventListener("keydown", zs, !0), window.removeEventListener("keyup", zs, !0), window.removeEventListener("blur", hh), window.removeEventListener("keydown", mh, !0), window.removeEventListener("dragenter", Zp, !0), window.removeEventListener("dragover", Qp, !0), window.removeEventListener("dragleave", eh, !0), window.removeEventListener("drop", th, !0), !r && t === "stickers" && (e.onConnectionsChange === au && (e.onConnectionsChange = ou), lh()), K.unmount(), V.remove(), jv(), Do = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Do = null, !1)), Do), ch = (i) => {
    var s, c, f, p, m;
    if (i.key === "Escape") {
      if (Ia()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (c = i.stopImmediatePropagation) == null || c.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), $s(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Lo();
    }
  }, uh = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const g = i.target, _ = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (De.selection) {
      bv(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (Lv()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (Dp(), i.preventDefault(), i.stopPropagation());
  }, fh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !x || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !pI.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, dh = (i) => {
    fh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || qc());
  }, ph = (i) => {
    fh(i) && (i.preventDefault(), i.stopPropagation());
  }, zs = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === c || (h.marqueeModifier = s, h.altModifier = c, Xr(), ht(h.pointerPos));
  }, hh = () => {
    h.marqueeModifier = !1, h.altModifier = !1, Xr(), ht(h.pointerPos);
  }, mh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Cp();
    i.shiftKey && !g || !i.shiftKey && !m || (Yc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", ch, !0), window.addEventListener("keydown", uh, !0), window.addEventListener("keydown", dh, !0), window.addEventListener("keyup", ph, !0), window.addEventListener("keydown", zs, !0), window.addEventListener("keyup", zs, !0), window.addEventListener("blur", hh), window.addEventListener("keydown", mh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Lo();
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
  Mr("cutout-focus", qb), !r && t === "stickers" && Mr("external-sticker-sync", () => Ud("open"), { rollbackState: !0 }), Av().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Mr("history", et), Mr("undo-redo", ru), Mr("paint-ui", Fn), Mr("side-panel", $e), Mr("look-at-frame", Fc), Mr("video-source", vi), Mr("canvas-size", Mp), Mr("cursor", () => ht(h.pointerPos)), le(), Pe.rafId = requestAnimationFrame(Pp);
}
vr.registerExtension(jN({
  app: vr,
  openEditor: XI,
  attachStickers: tP,
  attachCutout: nP,
  attachPreview: eP,
  restoreOutput: j2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: vI
}));
