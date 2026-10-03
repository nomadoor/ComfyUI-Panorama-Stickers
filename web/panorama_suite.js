import * as il from "../../scripts/app.js";
import { app as vr } from "../../scripts/app.js";
import { api as Kt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Tf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xt = {}, Jo = [], Lr = () => {
}, sg = () => !1, Zl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ql = (e) => e.startsWith("onUpdate:"), Mn = Object.assign, Df = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, o_ = Object.prototype.hasOwnProperty, ht = (e, t) => o_.call(e, t), Qe = Array.isArray, Zo = (e) => hs(e) === "[object Map]", lg = (e) => hs(e) === "[object Set]", gh = (e) => hs(e) === "[object Date]", rt = (e) => typeof e == "function", qt = (e) => typeof e == "string", Rr = (e) => typeof e == "symbol", _t = (e) => e !== null && typeof e == "object", cg = (e) => (_t(e) || rt(e)) && rt(e.then) && rt(e.catch), ug = Object.prototype.toString, hs = (e) => ug.call(e), a_ = (e) => hs(e).slice(8, -1), fg = (e) => hs(e) === "[object Object]", Lf = (e) => qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ya = /* @__PURE__ */ Tf(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ec = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, s_ = /-\w/g, In = ec(
  (e) => e.replace(s_, (t) => t.slice(1).toUpperCase())
), l_ = /\B([A-Z])/g, mo = ec(
  (e) => e.replace(l_, "-$1").toLowerCase()
), tc = ec((e) => e.charAt(0).toUpperCase() + e.slice(1)), au = ec(
  (e) => e ? `on${tc(e)}` : ""
), Tr = (e, t) => !Object.is(e, t), ol = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, dg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Rf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let yh;
const nc = () => yh || (yh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (Qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = qt(r) ? d_(r) : St(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (qt(e) || _t(e))
    return e;
}
const c_ = /;(?![^(]*\))/g, u_ = /:([^]+)/, f_ = /\/\*[^]*?\*\//g;
function d_(e) {
  const t = {};
  return e.replace(f_, "").split(c_).forEach((n) => {
    if (n) {
      const r = n.split(u_);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (qt(e))
    t = e;
  else if (Qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = ot(e[n]);
      r && (t += r + " ");
    }
  else if (_t(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const p_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", h_ = /* @__PURE__ */ Tf(p_);
function pg(e) {
  return !!e || e === "";
}
function m_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Vf(e[r], t[r]);
  return n;
}
function Vf(e, t) {
  if (e === t) return !0;
  let n = gh(e), r = gh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Rr(e), r = Rr(t), n || r)
    return e === t;
  if (n = Qe(e), r = Qe(t), n || r)
    return n && r ? m_(e, t) : !1;
  if (n = _t(e), r = _t(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !Vf(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const hg = (e) => !!(e && e.__v_isRef === !0), nt = (e) => qt(e) ? e : e == null ? "" : Qe(e) || _t(e) && (e.toString === ug || !rt(e.toString)) ? hg(e) ? nt(e.value) : JSON.stringify(e, mg, 2) : String(e), mg = (e, t) => hg(t) ? mg(e, t.value) : Zo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[su(r, a) + " =>"] = o, n),
    {}
  )
} : lg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => su(n))
} : Rr(t) ? su(t) : _t(t) && !Qe(t) && !fg(t) ? String(t) : t, su = (e, t = "") => {
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
let Vn;
class g_ {
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
function y_() {
  return Vn;
}
let Pt;
const lu = /* @__PURE__ */ new WeakSet();
class gg {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Vn && Vn.active && Vn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lu.has(this) && (lu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bh(this), vg(this);
    const t = Pt, n = _r;
    Pt = this, _r = !0;
    try {
      return this.fn();
    } finally {
      _g(this), Pt = t, _r = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        jf(t);
      this.deps = this.depsTail = void 0, bh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yu(this) && this.run();
  }
  get dirty() {
    return Yu(this);
  }
}
let yg = 0, Xa, qa;
function bg(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qa, qa = e;
    return;
  }
  e.next = Xa, Xa = e;
}
function $f() {
  yg++;
}
function zf() {
  if (--yg > 0)
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
function vg(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _g(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), jf(r), b_(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Yu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wg(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wg(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Pt, r = _r;
  Pt = e, _r = !0;
  try {
    vg(e);
    const o = e.fn(e._value);
    (t.version === 0 || Tr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Pt = n, _r = r, _g(e), e.flags &= -3;
  }
}
function jf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      jf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function b_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _r = !0;
const xg = [];
function ui() {
  xg.push(_r), _r = !1;
}
function fi() {
  const e = xg.pop();
  _r = e === void 0 ? !0 : e;
}
function bh(e) {
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
class v_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Hf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Pt || !_r || Pt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Pt)
      n = this.activeLink = new v_(Pt, this), Pt.deps ? (n.prevDep = Pt.depsTail, Pt.depsTail.nextDep = n, Pt.depsTail = n) : Pt.deps = Pt.depsTail = n, Sg(n);
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
    $f();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zf();
    }
  }
}
function Sg(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Sg(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xu = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ Symbol(
  ""
), qu = /* @__PURE__ */ Symbol(
  ""
), rs = /* @__PURE__ */ Symbol(
  ""
);
function xn(e, t, n) {
  if (_r && Pt) {
    let r = Xu.get(e);
    r || Xu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Hf()), o.map = r, o.key = n), o.track();
  }
}
function oi(e, t, n, r, o, a) {
  const l = Xu.get(e);
  if (!l) {
    ns++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if ($f(), t === "clear")
    l.forEach(u);
  else {
    const d = Qe(e), b = d && Lf(n);
    if (d && n === "length") {
      const g = Number(r);
      l.forEach((_, S) => {
        (S === "length" || S === rs || !Rr(S) && S >= g) && u(_);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(rs)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(io)), Zo(e) && u(l.get(qu)));
          break;
        case "delete":
          d || (u(l.get(io)), Zo(e) && u(l.get(qu)));
          break;
        case "set":
          Zo(e) && u(l.get(io));
          break;
      }
  }
  zf();
}
function $o(e) {
  const t = /* @__PURE__ */ pt(e);
  return t === e ? t : (xn(t, "iterate", rs), /* @__PURE__ */ ir(e) ? t : t.map(xr));
}
function rc(e) {
  return xn(e = /* @__PURE__ */ pt(e), "iterate", rs), e;
}
function Or(e, t) {
  return /* @__PURE__ */ di(e) ? sa(/* @__PURE__ */ oo(e) ? xr(t) : t) : xr(t);
}
const __ = {
  __proto__: null,
  [Symbol.iterator]() {
    return cu(this, Symbol.iterator, (e) => Or(this, e));
  },
  concat(...e) {
    return $o(this).concat(
      ...e.map((t) => Qe(t) ? $o(t) : t)
    );
  },
  entries() {
    return cu(this, "entries", (e) => (e[1] = Or(this, e[1]), e));
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
    return uu(this, "includes", e);
  },
  indexOf(...e) {
    return uu(this, "indexOf", e);
  },
  join(e) {
    return $o(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return uu(this, "lastIndexOf", e);
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
    return vh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vh(this, "reduceRight", e, t);
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
    return $o(this).toReversed();
  },
  toSorted(e) {
    return $o(this).toSorted(e);
  },
  toSpliced(...e) {
    return $o(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fa(this, "unshift", e);
  },
  values() {
    return cu(this, "values", (e) => Or(this, e));
  }
};
function cu(e, t, n) {
  const r = rc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ ir(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const w_ = Array.prototype;
function Jr(e, t, n, r, o, a) {
  const l = rc(e), u = l !== e && !/* @__PURE__ */ ir(e), d = l[t];
  if (d !== w_[t]) {
    const _ = d.apply(e, a);
    return u ? xr(_) : _;
  }
  let b = n;
  l !== e && (u ? b = function(_, S) {
    return n.call(this, Or(e, _), S, e);
  } : n.length > 2 && (b = function(_, S) {
    return n.call(this, _, S, e);
  }));
  const g = d.call(l, b, r);
  return u && o ? o(g) : g;
}
function vh(e, t, n, r) {
  const o = rc(e), a = o !== e && !/* @__PURE__ */ ir(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, g, _) {
    return u && (u = !1, b = Or(e, b)), n.call(this, b, Or(e, g), _, e);
  }) : n.length > 3 && (l = function(b, g, _) {
    return n.call(this, b, g, _, e);
  }));
  const d = o[t](l, ...r);
  return u ? Or(e, d) : d;
}
function uu(e, t, n) {
  const r = /* @__PURE__ */ pt(e);
  xn(r, "iterate", rs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Bf(n[0]) ? (n[0] = /* @__PURE__ */ pt(n[0]), r[t](...n)) : o;
}
function Fa(e, t, n = []) {
  ui(), $f();
  const r = (/* @__PURE__ */ pt(e))[t].apply(e, n);
  return zf(), fi(), r;
}
const x_ = /* @__PURE__ */ Tf("__proto__,__v_isRef,__isVue"), kg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rr)
);
function S_(e) {
  Rr(e) || (e = String(e));
  const t = /* @__PURE__ */ pt(this);
  return xn(t, "has", e), t.hasOwnProperty(e);
}
class Mg {
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
      return r === (o ? a ? F_ : Cg : a ? Ag : Pg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Qe(t);
    if (!o) {
      let d;
      if (l && (d = __[n]))
        return d;
      if (n === "hasOwnProperty")
        return S_;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ kn(t) ? t : r
    );
    if ((Rr(n) ? kg.has(n) : x_(n)) || (o || xn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ kn(u)) {
      const d = l && Lf(n) ? u : u.value;
      return o && _t(d) ? /* @__PURE__ */ Zu(d) : d;
    }
    return _t(u) ? o ? /* @__PURE__ */ Zu(u) : /* @__PURE__ */ pa(u) : u;
  }
}
class Ng extends Mg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Qe(t) && Lf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ di(a);
      if (!/* @__PURE__ */ ir(r) && !/* @__PURE__ */ di(r) && (a = /* @__PURE__ */ pt(a), r = /* @__PURE__ */ pt(r)), !l && /* @__PURE__ */ kn(a) && !/* @__PURE__ */ kn(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ kn(t) ? t : o
    );
    return t === /* @__PURE__ */ pt(o) && (u ? Tr(r, a) && oi(t, "set", n, r) : oi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && oi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Rr(n) || !kg.has(n)) && xn(t, "has", n), r;
  }
  ownKeys(t) {
    return xn(
      t,
      "iterate",
      Qe(t) ? "length" : io
    ), Reflect.ownKeys(t);
  }
}
class k_ extends Mg {
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
const M_ = /* @__PURE__ */ new Ng(), N_ = /* @__PURE__ */ new k_(), P_ = /* @__PURE__ */ new Ng(!0);
const Ju = (e) => e, zs = (e) => Reflect.getPrototypeOf(e);
function A_(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ pt(o), l = Zo(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), g = n ? Ju : t ? sa : xr;
    return !t && xn(
      a,
      "iterate",
      d ? qu : io
    ), Mn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: _, done: S } = b.next();
          return S ? { value: _, done: S } : {
            value: u ? [g(_[0]), g(_[1])] : g(_),
            done: S
          };
        }
      }
    );
  };
}
function js(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function C_(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ pt(a), u = /* @__PURE__ */ pt(o);
      e || (Tr(o, u) && xn(l, "get", o), xn(l, "get", u));
      const { has: d } = zs(l), b = t ? Ju : e ? sa : xr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && xn(/* @__PURE__ */ pt(o), "iterate", io), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ pt(a), u = /* @__PURE__ */ pt(o);
      return e || (Tr(o, u) && xn(l, "has", o), xn(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ pt(u), b = t ? Ju : e ? sa : xr;
      return !e && xn(d, "iterate", io), u.forEach((g, _) => o.call(a, b(g), b(_), l));
    }
  };
  return Mn(
    n,
    e ? {
      add: js("add"),
      set: js("set"),
      delete: js("delete"),
      clear: js("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ pt(this), l = zs(a), u = /* @__PURE__ */ pt(o), d = !t && !/* @__PURE__ */ ir(o) && !/* @__PURE__ */ di(o) ? u : o;
        return l.has.call(a, d) || Tr(o, d) && l.has.call(a, o) || Tr(u, d) && l.has.call(a, u) || (a.add(d), oi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ ir(a) && !/* @__PURE__ */ di(a) && (a = /* @__PURE__ */ pt(a));
        const l = /* @__PURE__ */ pt(this), { has: u, get: d } = zs(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ pt(o), b = u.call(l, o));
        const g = d.call(l, o);
        return l.set(o, a), b ? Tr(a, g) && oi(l, "set", o, a) : oi(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ pt(this), { has: l, get: u } = zs(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ pt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && oi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ pt(this), a = o.size !== 0, l = o.clear();
        return a && oi(
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
    n[o] = A_(o, e, t);
  }), n;
}
function Gf(e, t) {
  const n = C_(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const I_ = {
  get: /* @__PURE__ */ Gf(!1, !1)
}, E_ = {
  get: /* @__PURE__ */ Gf(!1, !0)
}, O_ = {
  get: /* @__PURE__ */ Gf(!0, !1)
};
const Pg = /* @__PURE__ */ new WeakMap(), Ag = /* @__PURE__ */ new WeakMap(), Cg = /* @__PURE__ */ new WeakMap(), F_ = /* @__PURE__ */ new WeakMap();
function T_(e) {
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
function D_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : T_(a_(e));
}
// @__NO_SIDE_EFFECTS__
function pa(e) {
  return /* @__PURE__ */ di(e) ? e : Kf(
    e,
    !1,
    M_,
    I_,
    Pg
  );
}
// @__NO_SIDE_EFFECTS__
function L_(e) {
  return Kf(
    e,
    !1,
    P_,
    E_,
    Ag
  );
}
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  return Kf(
    e,
    !0,
    N_,
    O_,
    Cg
  );
}
function Kf(e, t, n, r, o) {
  if (!_t(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = D_(e);
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
  return /* @__PURE__ */ di(e) ? /* @__PURE__ */ oo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Bf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pt(t) : e;
}
function R_(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && dg(e, "__v_skip", !0), e;
}
const xr = (e) => _t(e) ? /* @__PURE__ */ pa(e) : e, sa = (e) => _t(e) ? /* @__PURE__ */ Zu(e) : e;
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return V_(e, !1);
}
function V_(e, t) {
  return /* @__PURE__ */ kn(e) ? e : new $_(e, t);
}
class $_ {
  constructor(t, n) {
    this.dep = new Hf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pt(t), this._value = n ? t : xr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ir(t) || /* @__PURE__ */ di(t);
    t = r ? t : /* @__PURE__ */ pt(t), Tr(t, n) && (this._rawValue = t, this._value = r ? t : xr(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ kn(e) ? e.value : e;
}
const z_ = {
  get: (e, t, n) => t === "__v_raw" ? e : tt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ kn(o) && !/* @__PURE__ */ kn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ig(e) {
  return /* @__PURE__ */ oo(e) ? e : new Proxy(e, z_);
}
class j_ {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Hf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pt !== this)
      return bg(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wg(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function H_(e, t, n = !1) {
  let r, o;
  return rt(e) ? r = e : (r = e.get, o = e.set), new j_(r, o, n);
}
const Hs = {}, Sl = /* @__PURE__ */ new WeakMap();
let Ji;
function G_(e, t = !1, n = Ji) {
  if (n) {
    let r = Sl.get(n);
    r || Sl.set(n, r = []), r.push(e);
  }
}
function K_(e, t, n = xt) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ ir(V) || o === !1 || o === 0 ? ai(V, 1) : ai(V);
  let g, _, S, P, x = !1, v = !1;
  if (/* @__PURE__ */ kn(e) ? (_ = () => e.value, x = /* @__PURE__ */ ir(e)) : /* @__PURE__ */ oo(e) ? (_ = () => b(e), x = !0) : Qe(e) ? (v = !0, x = e.some((V) => /* @__PURE__ */ oo(V) || /* @__PURE__ */ ir(V)), _ = () => e.map((V) => {
    if (/* @__PURE__ */ kn(V))
      return V.value;
    if (/* @__PURE__ */ oo(V))
      return b(V);
    if (rt(V))
      return d ? d(V, 2) : V();
  })) : rt(e) ? t ? _ = d ? () => d(e, 2) : e : _ = () => {
    if (S) {
      ui();
      try {
        S();
      } finally {
        fi();
      }
    }
    const V = Ji;
    Ji = g;
    try {
      return d ? d(e, 3, [P]) : e(P);
    } finally {
      Ji = V;
    }
  } : _ = Lr, t && o) {
    const V = _, O = o === !0 ? 1 / 0 : o;
    _ = () => ai(V(), O);
  }
  const F = y_(), z = () => {
    g.stop(), F && F.active && Df(F.effects, g);
  };
  if (a && t) {
    const V = t;
    t = (...O) => {
      V(...O), z();
    };
  }
  let B = v ? new Array(e.length).fill(Hs) : Hs;
  const I = (V) => {
    if (!(!(g.flags & 1) || !g.dirty && !V))
      if (t) {
        const O = g.run();
        if (o || x || (v ? O.some(($, G) => Tr($, B[G])) : Tr(O, B))) {
          S && S();
          const $ = Ji;
          Ji = g;
          try {
            const G = [
              O,
              // pass undefined as the old value when it's changed for the first time
              B === Hs ? void 0 : v && B[0] === Hs ? [] : B,
              P
            ];
            B = O, d ? d(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Ji = $;
          }
        }
      } else
        g.run();
  };
  return u && u(I), g = new gg(_), g.scheduler = l ? () => l(I, !1) : I, P = (V) => G_(V, !1, g), S = g.onStop = () => {
    const V = Sl.get(g);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const O of V) O();
      Sl.delete(g);
    }
  }, t ? r ? I(!0) : B = g.run() : l ? l(I.bind(null, !0), !0) : g.run(), z.pause = g.pause.bind(g), z.resume = g.resume.bind(g), z.stop = z, z;
}
function ai(e, t = 1 / 0, n) {
  if (t <= 0 || !_t(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ kn(e))
    ai(e.value, t, n);
  else if (Qe(e))
    for (let r = 0; r < e.length; r++)
      ai(e[r], t, n);
  else if (lg(e) || Zo(e))
    e.forEach((r) => {
      ai(r, t, n);
    });
  else if (fg(e)) {
    for (const r in e)
      ai(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ai(e[r], t, n);
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
    ic(o, t, n);
  }
}
function Vr(e, t, n, r) {
  if (rt(e)) {
    const o = ms(e, t, n, r);
    return o && cg(o) && o.catch((a) => {
      ic(a, t, n);
    }), o;
  }
  if (Qe(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Vr(e[a], t, n, r));
    return o;
  }
}
function ic(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || xt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const g = u.ec;
      if (g) {
        for (let _ = 0; _ < g.length; _++)
          if (g[_](e, d, b) === !1)
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
  B_(e, n, o, r, l);
}
function B_(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Cn = [];
let Er = -1;
const Qo = [];
let Ii = null, Ko = 0;
const Eg = /* @__PURE__ */ Promise.resolve();
let kl = null;
function oc(e) {
  const t = kl || Eg;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function W_(e) {
  let t = Er + 1, n = Cn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Cn[r], a = is(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Wf(e) {
  if (!(e.flags & 1)) {
    const t = is(e), n = Cn[Cn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= is(n) ? Cn.push(e) : Cn.splice(W_(t), 0, e), e.flags |= 1, Og();
  }
}
function Og() {
  kl || (kl = Eg.then(Tg));
}
function U_(e) {
  Qe(e) ? Qo.push(...e) : Ii && e.id === -1 ? Ii.splice(Ko + 1, 0, e) : e.flags & 1 || (Qo.push(e), e.flags |= 1), Og();
}
function _h(e, t, n = Er + 1) {
  for (; n < Cn.length; n++) {
    const r = Cn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Cn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fg(e) {
  if (Qo.length) {
    const t = [...new Set(Qo)].sort(
      (n, r) => is(n) - is(r)
    );
    if (Qo.length = 0, Ii) {
      Ii.push(...t);
      return;
    }
    for (Ii = t, Ko = 0; Ko < Ii.length; Ko++) {
      const n = Ii[Ko];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ii = null, Ko = 0;
  }
}
const is = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Tg(e) {
  try {
    for (Er = 0; Er < Cn.length; Er++) {
      const t = Cn[Er];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ms(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Er < Cn.length; Er++) {
      const t = Cn[Er];
      t && (t.flags &= -2);
    }
    Er = -1, Cn.length = 0, Fg(), kl = null, (Cn.length || Qo.length) && Tg();
  }
}
let Wn = null, Dg = null;
function Ml(e) {
  const t = Wn;
  return Wn = e, Dg = e && e.type.__scopeId || null, t;
}
function Lg(e, t = Wn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Oh(-1);
    const a = Ml(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Ml(a), r._d && Oh(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function wr(e, t) {
  if (Wn === null)
    return e;
  const n = uc(Wn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = xt] = t[o];
    a && (rt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ai(l), r.push({
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
function Gi(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a && (u.oldValue = a[l].value);
    let d = u.dir[r];
    d && (ui(), Vr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), fi());
  }
}
function Y_(e, t) {
  if (Sn) {
    let n = Sn.provides;
    const r = Sn.parent && Sn.parent.provides;
    r === n && (n = Sn.provides = Object.create(r)), n[e] = t;
  }
}
function al(e, t, n = !1) {
  const r = Ww();
  if (r || ea) {
    let o = ea ? ea._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && rt(t) ? t.call(r && r.proxy) : t;
  }
}
const X_ = /* @__PURE__ */ Symbol.for("v-scx"), q_ = () => al(X_);
function ao(e, t, n) {
  return Rg(e, t, n);
}
function Rg(e, t, n = xt) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = Mn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (as) {
    if (a === "sync") {
      const P = q_();
      b = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!d) {
      const P = () => {
      };
      return P.stop = Lr, P.resume = Lr, P.pause = Lr, P;
    }
  }
  const g = Sn;
  u.call = (P, x, v) => Vr(P, g, x, v);
  let _ = !1;
  a === "post" ? u.scheduler = (P) => {
    Rn(P, g && g.suspense);
  } : a !== "sync" && (_ = !0, u.scheduler = (P, x) => {
    x ? P() : Wf(P);
  }), u.augmentJob = (P) => {
    t && (P.flags |= 4), _ && (P.flags |= 2, g && (P.id = g.uid, P.i = g));
  };
  const S = K_(e, t, u);
  return as && (b ? b.push(S) : d && S()), S;
}
function J_(e, t, n) {
  const r = this.proxy, o = qt(e) ? e.includes(".") ? Vg(r, e) : () => r[e] : e.bind(r, r);
  let a;
  rt(t) ? a = t : (a = t.handler, n = t);
  const l = ys(this), u = Rg(o, a.bind(r), n);
  return l(), u;
}
function Vg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Z_ = /* @__PURE__ */ Symbol("_vte"), Q_ = (e) => e.__isTeleport, ew = /* @__PURE__ */ Symbol("_leaveCb");
function Uf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Uf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $g(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nl = /* @__PURE__ */ new WeakMap();
function Ja(e, t, n, r, o = !1) {
  if (Qe(e)) {
    e.forEach(
      (v, F) => Ja(
        v,
        t && (Qe(t) ? t[F] : t),
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
  const a = r.shapeFlag & 4 ? uc(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, g = u.refs === xt ? u.refs = {} : u.refs, _ = u.setupState, S = /* @__PURE__ */ pt(_), P = _ === xt ? sg : (v) => wh(g, v) ? !1 : ht(S, v), x = (v, F) => !(F && wh(g, F));
  if (b != null && b !== d) {
    if (xh(t), qt(b))
      g[b] = null, P(b) && (_[b] = null);
    else if (/* @__PURE__ */ kn(b)) {
      const v = t;
      x(b, v.k) && (b.value = null), v.k && (g[v.k] = null);
    }
  }
  if (rt(d))
    ms(d, u, 12, [l, g]);
  else {
    const v = qt(d), F = /* @__PURE__ */ kn(d);
    if (v || F) {
      const z = () => {
        if (e.f) {
          const B = v ? P(d) ? _[d] : g[d] : x() || !e.k ? d.value : g[e.k];
          if (o)
            Qe(B) && Df(B, a);
          else if (Qe(B))
            B.includes(a) || B.push(a);
          else if (v)
            g[d] = [a], P(d) && (_[d] = g[d]);
          else {
            const I = [a];
            x(d, e.k) && (d.value = I), e.k && (g[e.k] = I);
          }
        } else v ? (g[d] = l, P(d) && (_[d] = l)) : F && (x(d, e.k) && (d.value = l), e.k && (g[e.k] = l));
      };
      if (l) {
        const B = () => {
          z(), Nl.delete(e);
        };
        B.id = -1, Nl.set(e, B), Rn(B, n);
      } else
        xh(e), z();
    }
  }
}
function xh(e) {
  const t = Nl.get(e);
  t && (t.flags |= 8, Nl.delete(e));
}
nc().requestIdleCallback;
nc().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, zg = (e) => e.type.__isKeepAlive;
function tw(e, t) {
  jg(e, "a", t);
}
function nw(e, t) {
  jg(e, "da", t);
}
function jg(e, t, n = Sn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ac(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      zg(o.parent.vnode) && rw(r, t, n, o), o = o.parent;
  }
}
function rw(e, t, n, r) {
  const o = ac(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Hg(() => {
    Df(r[t], o);
  }, n);
}
function ac(e, t, n = Sn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      ui();
      const u = ys(n), d = Vr(t, n, e, l);
      return u(), fi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const hi = (e) => (t, n = Sn) => {
  (!as || e === "sp") && ac(e, (...r) => t(...r), n);
}, iw = hi("bm"), sc = hi("m"), ow = hi(
  "bu"
), aw = hi("u"), gs = hi(
  "bum"
), Hg = hi("um"), sw = hi(
  "sp"
), lw = hi("rtg"), cw = hi("rtc");
function uw(e, t = Sn) {
  ac("ec", e, t);
}
const fw = "components", Gg = /* @__PURE__ */ Symbol.for("v-ndc");
function dw(e) {
  return qt(e) ? pw(fw, e, !1) || e : e || Gg;
}
function pw(e, t, n = !0, r = !1) {
  const o = Wn || Sn;
  if (o) {
    const a = o.type;
    {
      const u = Jw(
        a,
        !1
      );
      if (u && (u === t || u === In(t) || u === tc(In(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sh(o[e] || a[e], t) || // global registration
      Sh(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function Sh(e, t) {
  return e && (e[t] || e[In(t)] || e[tc(In(t))]);
}
function yt(e, t, n, r) {
  let o;
  const a = n, l = Qe(e);
  if (l || qt(e)) {
    const u = l && /* @__PURE__ */ oo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ ir(e), b = /* @__PURE__ */ di(e), e = rc(e)), o = new Array(e.length);
    for (let g = 0, _ = e.length; g < _; g++)
      o[g] = t(
        d ? b ? sa(xr(e[g])) : xr(e[g]) : e[g],
        g,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (_t(e))
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
const Qu = (e) => e ? u0(e) ? uc(e) : Qu(e.parent) : null, Qa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qu(e.parent),
    $root: (e) => Qu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = oc.bind(e.proxy)),
    $watch: (e) => J_.bind(e)
  })
), fu = (e, t) => e !== xt && !e.__isScriptSetup && ht(e, t), hw = {
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
        if (fu(r, t))
          return l[t] = 1, r[t];
        if (o !== xt && ht(o, t))
          return l[t] = 2, o[t];
        if (ht(a, t))
          return l[t] = 3, a[t];
        if (n !== xt && ht(n, t))
          return l[t] = 4, n[t];
        ef && (l[t] = 0);
      }
    }
    const b = Qa[t];
    let g, _;
    if (b)
      return t === "$attrs" && xn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== xt && ht(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      _ = d.config.globalProperties, ht(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return fu(o, t) ? (o[t] = n, !0) : r !== xt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== xt && u[0] !== "$" && ht(e, u) || fu(t, u) || ht(a, u) || ht(r, u) || ht(Qa, u) || ht(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function kh(e) {
  return Qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ef = !0;
function mw(e) {
  const t = Bg(e), n = e.proxy, r = e.ctx;
  ef = !1, t.beforeCreate && Mh(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: l,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: _,
    mounted: S,
    beforeUpdate: P,
    updated: x,
    activated: v,
    deactivated: F,
    beforeDestroy: z,
    beforeUnmount: B,
    destroyed: I,
    unmounted: V,
    render: O,
    renderTracked: $,
    renderTriggered: G,
    errorCaptured: ee,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: C,
    // assets
    components: ce,
    directives: ue,
    filters: fe
  } = t;
  if (b && gw(b, r, null), l)
    for (const H in l) {
      const A = l[H];
      rt(A) && (r[H] = A.bind(n));
    }
  if (o) {
    const H = o.call(n, n);
    _t(H) && (e.data = /* @__PURE__ */ pa(H));
  }
  if (ef = !0, a)
    for (const H in a) {
      const A = a[H], te = rt(A) ? A.bind(n, n) : rt(A.get) ? A.get.bind(n, n) : Lr, Y = !rt(A) && rt(A.set) ? A.set.bind(n) : Lr, Ce = ft({
        get: te,
        set: Y
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (Fe) => Ce.value = Fe
      });
    }
  if (u)
    for (const H in u)
      Kg(u[H], r, n, H);
  if (d) {
    const H = rt(d) ? d.call(n) : d;
    Reflect.ownKeys(H).forEach((A) => {
      Y_(A, H[A]);
    });
  }
  g && Mh(g, e, "c");
  function X(H, A) {
    Qe(A) ? A.forEach((te) => H(te.bind(n))) : A && H(A.bind(n));
  }
  if (X(iw, _), X(sc, S), X(ow, P), X(aw, x), X(tw, v), X(nw, F), X(uw, ee), X(cw, $), X(lw, G), X(gs, B), X(Hg, V), X(sw, _e), Qe(T))
    if (T.length) {
      const H = e.exposed || (e.exposed = {});
      T.forEach((A) => {
        Object.defineProperty(H, A, {
          get: () => n[A],
          set: (te) => n[A] = te,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Lr && (e.render = O), C != null && (e.inheritAttrs = C), ce && (e.components = ce), ue && (e.directives = ue), _e && $g(e);
}
function gw(e, t, n = Lr) {
  Qe(e) && (e = tf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    _t(o) ? "default" in o ? a = al(
      o.from || r,
      o.default,
      !0
    ) : a = al(o.from || r) : a = al(o), /* @__PURE__ */ kn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function Mh(e, t, n) {
  Vr(
    Qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Kg(e, t, n, r) {
  let o = r.includes(".") ? Vg(n, r) : () => n[r];
  if (qt(e)) {
    const a = t[e];
    rt(a) && ao(o, a);
  } else if (rt(e))
    ao(o, e.bind(n));
  else if (_t(e))
    if (Qe(e))
      e.forEach((a) => Kg(a, t, n, r));
    else {
      const a = rt(e.handler) ? e.handler.bind(n) : t[e.handler];
      rt(a) && ao(o, a, e);
    }
}
function Bg(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => Pl(d, b, l, !0)
  ), Pl(d, t, l)), _t(t) && a.set(t, d), d;
}
function Pl(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && Pl(e, a, n, !0), o && o.forEach(
    (l) => Pl(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const u = yw[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const yw = {
  data: Nh,
  props: Ph,
  emits: Ph,
  // objects
  methods: ja,
  computed: ja,
  // lifecycle
  beforeCreate: An,
  created: An,
  beforeMount: An,
  mounted: An,
  beforeUpdate: An,
  updated: An,
  beforeDestroy: An,
  beforeUnmount: An,
  destroyed: An,
  unmounted: An,
  activated: An,
  deactivated: An,
  errorCaptured: An,
  serverPrefetch: An,
  // assets
  components: ja,
  directives: ja,
  // watch
  watch: vw,
  // provide / inject
  provide: Nh,
  inject: bw
};
function Nh(e, t) {
  return t ? e ? function() {
    return Mn(
      rt(e) ? e.call(this, this) : e,
      rt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bw(e, t) {
  return ja(tf(e), tf(t));
}
function tf(e) {
  if (Qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function An(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ja(e, t) {
  return e ? Mn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ph(e, t) {
  return e ? Qe(e) && Qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mn(
    /* @__PURE__ */ Object.create(null),
    kh(e),
    kh(t ?? {})
  ) : t;
}
function vw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Mn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = An(e[r], t[r]);
  return n;
}
function Wg() {
  return {
    app: null,
    config: {
      isNativeTag: sg,
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
let _w = 0;
function ww(e, t) {
  return function(r, o = null) {
    rt(r) || (r = Mn({}, r)), o != null && !_t(o) && (o = null);
    const a = Wg(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: _w++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Qw,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ..._) {
        return l.has(g) || (g && rt(g.install) ? (l.add(g), g.install(b, ..._)) : rt(g) && (l.add(g), g(b, ..._))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, _) {
        return _ ? (a.components[g] = _, b) : a.components[g];
      },
      directive(g, _) {
        return _ ? (a.directives[g] = _, b) : a.directives[g];
      },
      mount(g, _, S) {
        if (!d) {
          const P = b._ceVNode || De(r, o);
          return P.appContext = a, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(P, g, S), d = !0, b._container = g, g.__vue_app__ = b, uc(P.component);
        }
      },
      onUnmount(g) {
        u.push(g);
      },
      unmount() {
        d && (Vr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, _) {
        return a.provides[g] = _, b;
      },
      runWithContext(g) {
        const _ = ea;
        ea = b;
        try {
          return g();
        } finally {
          ea = _;
        }
      }
    };
    return b;
  };
}
let ea = null;
const xw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${In(t)}Modifiers`] || e[`${mo(t)}Modifiers`];
function Sw(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || xt;
  let o = n;
  const a = t.startsWith("update:"), l = a && xw(r, t.slice(7));
  l && (l.trim && (o = n.map((g) => qt(g) ? g.trim() : g)), l.number && (o = n.map(Rf)));
  let u, d = r[u = au(t)] || // also try camelCase event handler (#2249)
  r[u = au(In(t))];
  !d && a && (d = r[u = au(mo(t))]), d && Vr(
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
    e.emitted[u] = !0, Vr(
      b,
      e,
      6,
      o
    );
  }
}
const kw = /* @__PURE__ */ new WeakMap();
function Ug(e, t, n = !1) {
  const r = n ? kw : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!rt(e)) {
    const d = (b) => {
      const g = Ug(b, t, !0);
      g && (u = !0, Mn(l, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (_t(e) && r.set(e, null), null) : (Qe(a) ? a.forEach((d) => l[d] = null) : Mn(l, a), _t(e) && r.set(e, l), l);
}
function lc(e, t) {
  return !e || !Zl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, mo(t)) || ht(e, t));
}
function Ah(e) {
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
    renderCache: g,
    props: _,
    data: S,
    setupState: P,
    ctx: x,
    inheritAttrs: v
  } = e, F = Ml(e);
  let z, B;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, O = V;
      z = Fr(
        b.call(
          O,
          V,
          g,
          _,
          P,
          S,
          x
        )
      ), B = u;
    } else {
      const V = t;
      z = Fr(
        V.length > 1 ? V(
          _,
          { attrs: u, slots: l, emit: d }
        ) : V(
          _,
          null
        )
      ), B = t.props ? u : Mw(u);
    }
  } catch (V) {
    es.length = 0, ic(V, e, 1), z = De(Di);
  }
  let I = z;
  if (B && v !== !1) {
    const V = Object.keys(B), { shapeFlag: O } = I;
    V.length && O & 7 && (a && V.some(Ql) && (B = Nw(
      B,
      a
    )), I = la(I, B, !1, !0));
  }
  return n.dirs && (I = la(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Uf(I, n.transition), z = I, Ml(F), z;
}
const Mw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nw = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ql(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Pw(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Ch(r, l, b) : !!l;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        const S = g[_];
        if (Yg(l, r, S) && !lc(b, S))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? Ch(r, l, b) : !0 : !!l;
  return !1;
}
function Ch(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Yg(t, e, a) && !lc(n, a))
      return !0;
  }
  return !1;
}
function Yg(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && _t(r) && _t(o) ? !Vf(r, o) : r !== o;
}
function Aw({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Xg = {}, qg = () => Object.create(Xg), Jg = (e) => Object.getPrototypeOf(e) === Xg;
function Cw(e, t, n, r = !1) {
  const o = {}, a = qg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zg(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ L_(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Iw(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: l }
  } = e, u = /* @__PURE__ */ pt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const g = e.vnode.dynamicProps;
      for (let _ = 0; _ < g.length; _++) {
        let S = g[_];
        if (lc(e.emitsOptions, S))
          continue;
        const P = t[S];
        if (d)
          if (ht(a, S))
            P !== a[S] && (a[S] = P, b = !0);
          else {
            const x = In(S);
            o[x] = nf(
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
    Zg(e, t, o, a) && (b = !0);
    let g;
    for (const _ in u)
      (!t || // for camelCase
      !ht(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = mo(_)) === _ || !ht(t, g))) && (d ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[_] = nf(
        d,
        u,
        _,
        void 0,
        e,
        !0
      )) : delete o[_]);
    if (a !== u)
      for (const _ in a)
        (!t || !ht(t, _)) && (delete a[_], b = !0);
  }
  b && oi(e.attrs, "set", "");
}
function Zg(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let d in t) {
      if (Ya(d))
        continue;
      const b = t[d];
      let g;
      o && ht(o, g = In(d)) ? !a || !a.includes(g) ? n[g] = b : (u || (u = {}))[g] = b : lc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, l = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ pt(n), b = u || xt;
    for (let g = 0; g < a.length; g++) {
      const _ = a[g];
      n[_] = nf(
        o,
        d,
        _,
        b[_],
        e,
        !ht(b, _)
      );
    }
  }
  return l;
}
function nf(e, t, n, r, o, a) {
  const l = e[n];
  if (l != null) {
    const u = ht(l, "default");
    if (u && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && rt(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = ys(o);
          r = b[n] = d.call(
            null,
            t
          ), g();
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
    ] && (r === "" || r === mo(n)) && (r = !0));
  }
  return r;
}
const Ew = /* @__PURE__ */ new WeakMap();
function Qg(e, t, n = !1) {
  const r = n ? Ew : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!rt(e)) {
    const g = (_) => {
      d = !0;
      const [S, P] = Qg(_, t, !0);
      Mn(l, S), P && u.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return _t(e) && r.set(e, Jo), Jo;
  if (Qe(a))
    for (let g = 0; g < a.length; g++) {
      const _ = In(a[g]);
      Ih(_) && (l[_] = xt);
    }
  else if (a)
    for (const g in a) {
      const _ = In(g);
      if (Ih(_)) {
        const S = a[g], P = l[_] = Qe(S) || rt(S) ? { type: S } : Mn({}, S), x = P.type;
        let v = !1, F = !0;
        if (Qe(x))
          for (let z = 0; z < x.length; ++z) {
            const B = x[z], I = rt(B) && B.name;
            if (I === "Boolean") {
              v = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          v = rt(x) && x.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = v, P[
          1
          /* shouldCastTrue */
        ] = F, (v || ht(P, "default")) && u.push(_);
      }
    }
  const b = [l, u];
  return _t(e) && r.set(e, b), b;
}
function Ih(e) {
  return e[0] !== "$" && !Ya(e);
}
const Yf = (e) => e === "_" || e === "_ctx" || e === "$stable", Xf = (e) => Qe(e) ? e.map(Fr) : [Fr(e)], Ow = (e, t, n) => {
  if (t._n)
    return t;
  const r = Lg((...o) => Xf(t(...o)), n);
  return r._c = !1, r;
}, e0 = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Yf(o)) continue;
    const a = e[o];
    if (rt(a))
      t[o] = Ow(o, a, r);
    else if (a != null) {
      const l = Xf(a);
      t[o] = () => l;
    }
  }
}, t0 = (e, t) => {
  const n = Xf(t);
  e.slots.default = () => n;
}, n0 = (e, t, n) => {
  for (const r in t)
    (n || !Yf(r)) && (e[r] = t[r]);
}, Fw = (e, t, n) => {
  const r = e.slots = qg();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (n0(r, t, n), n && dg(r, "_", o, !0)) : e0(t, r);
  } else t && t0(e, t);
}, Tw = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = xt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : n0(o, t, n) : (a = !t.$stable, e0(t, o)), l = t;
  } else t && (t0(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !Yf(u) && l[u] == null && delete o[u];
}, Rn = $w;
function Dw(e) {
  return Lw(e);
}
function Lw(e, t) {
  const n = nc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: l,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: _,
    nextSibling: S,
    setScopeId: P = Lr,
    insertStaticContent: x
  } = e, v = (R, W, Z, ve = null, ge = null, ye = null, Me = void 0, Ne = null, we = !!W.dynamicChildren) => {
    if (R === W)
      return;
    R && !Ta(R, W) && (ve = Xn(R), Fe(R, ge, ye, !0), R = null), W.patchFlag === -2 && (we = !1, W.dynamicChildren = null);
    const { type: de, ref: Re, shapeFlag: Ie } = W;
    switch (de) {
      case cc:
        F(R, W, Z, ve);
        break;
      case Di:
        z(R, W, Z, ve);
        break;
      case pu:
        R == null && B(W, Z, ve, Me);
        break;
      case Ue:
        ce(
          R,
          W,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we
        );
        break;
      default:
        Ie & 1 ? O(
          R,
          W,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we
        ) : Ie & 6 ? ue(
          R,
          W,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we
        ) : (Ie & 64 || Ie & 128) && de.process(
          R,
          W,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we,
          cn
        );
    }
    Re != null && ge ? Ja(Re, R && R.ref, ye, W || R, !W) : Re == null && R && R.ref != null && Ja(R.ref, null, ye, R, !0);
  }, F = (R, W, Z, ve) => {
    if (R == null)
      r(
        W.el = u(W.children),
        Z,
        ve
      );
    else {
      const ge = W.el = R.el;
      W.children !== R.children && b(ge, W.children);
    }
  }, z = (R, W, Z, ve) => {
    R == null ? r(
      W.el = d(W.children || ""),
      Z,
      ve
    ) : W.el = R.el;
  }, B = (R, W, Z, ve) => {
    [R.el, R.anchor] = x(
      R.children,
      W,
      Z,
      ve,
      R.el,
      R.anchor
    );
  }, I = ({ el: R, anchor: W }, Z, ve) => {
    let ge;
    for (; R && R !== W; )
      ge = S(R), r(R, Z, ve), R = ge;
    r(W, Z, ve);
  }, V = ({ el: R, anchor: W }) => {
    let Z;
    for (; R && R !== W; )
      Z = S(R), o(R), R = Z;
    o(W);
  }, O = (R, W, Z, ve, ge, ye, Me, Ne, we) => {
    if (W.type === "svg" ? Me = "svg" : W.type === "math" && (Me = "mathml"), R == null)
      $(
        W,
        Z,
        ve,
        ge,
        ye,
        Me,
        Ne,
        we
      );
    else {
      const de = R.el && R.el._isVueCE ? R.el : null;
      try {
        de && de._beginPatch(), _e(
          R,
          W,
          ge,
          ye,
          Me,
          Ne,
          we
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, $ = (R, W, Z, ve, ge, ye, Me, Ne) => {
    let we, de;
    const { props: Re, shapeFlag: Ie, transition: Ve, dirs: Be } = R;
    if (we = R.el = l(
      R.type,
      ye,
      Re && Re.is,
      Re
    ), Ie & 8 ? g(we, R.children) : Ie & 16 && ee(
      R.children,
      we,
      null,
      ve,
      ge,
      du(R, ye),
      Me,
      Ne
    ), Be && Gi(R, null, ve, "created"), G(we, R, R.scopeId, Me, ve), Re) {
      for (const Le in Re)
        Le !== "value" && !Ya(Le) && a(we, Le, null, Re[Le], ye, ve);
      "value" in Re && a(we, "value", null, Re.value, ye), (de = Re.onVnodeBeforeMount) && Pr(de, ve, R);
    }
    Be && Gi(R, null, ve, "beforeMount");
    const p = Rw(ge, Ve);
    p && Ve.beforeEnter(we), r(we, W, Z), ((de = Re && Re.onVnodeMounted) || p || Be) && Rn(() => {
      try {
        de && Pr(de, ve, R), p && Ve.enter(we), Be && Gi(R, null, ve, "mounted");
      } finally {
      }
    }, ge);
  }, G = (R, W, Z, ve, ge) => {
    if (Z && P(R, Z), ve)
      for (let ye = 0; ye < ve.length; ye++)
        P(R, ve[ye]);
    if (ge) {
      let ye = ge.subTree;
      if (W === ye || a0(ye.type) && (ye.ssContent === W || ye.ssFallback === W)) {
        const Me = ge.vnode;
        G(
          R,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          ge.parent
        );
      }
    }
  }, ee = (R, W, Z, ve, ge, ye, Me, Ne, we = 0) => {
    for (let de = we; de < R.length; de++) {
      const Re = R[de] = Ne ? ii(R[de]) : Fr(R[de]);
      v(
        null,
        Re,
        W,
        Z,
        ve,
        ge,
        ye,
        Me,
        Ne
      );
    }
  }, _e = (R, W, Z, ve, ge, ye, Me) => {
    const Ne = W.el = R.el;
    let { patchFlag: we, dynamicChildren: de, dirs: Re } = W;
    we |= R.patchFlag & 16;
    const Ie = R.props || xt, Ve = W.props || xt;
    let Be;
    if (Z && Ki(Z, !1), (Be = Ve.onVnodeBeforeUpdate) && Pr(Be, Z, W, R), Re && Gi(W, R, Z, "beforeUpdate"), Z && Ki(Z, !0), (Ie.innerHTML && Ve.innerHTML == null || Ie.textContent && Ve.textContent == null) && g(Ne, ""), de ? T(
      R.dynamicChildren,
      de,
      Ne,
      Z,
      ve,
      du(W, ge),
      ye
    ) : Me || A(
      R,
      W,
      Ne,
      null,
      Z,
      ve,
      du(W, ge),
      ye,
      !1
    ), we > 0) {
      if (we & 16)
        C(Ne, Ie, Ve, Z, ge);
      else if (we & 2 && Ie.class !== Ve.class && a(Ne, "class", null, Ve.class, ge), we & 4 && a(Ne, "style", Ie.style, Ve.style, ge), we & 8) {
        const p = W.dynamicProps;
        for (let Le = 0; Le < p.length; Le++) {
          const ct = p[Le], We = Ie[ct], Rt = Ve[ct];
          (Rt !== We || ct === "value") && a(Ne, ct, We, Rt, ge, Z);
        }
      }
      we & 1 && R.children !== W.children && g(Ne, W.children);
    } else !Me && de == null && C(Ne, Ie, Ve, Z, ge);
    ((Be = Ve.onVnodeUpdated) || Re) && Rn(() => {
      Be && Pr(Be, Z, W, R), Re && Gi(W, R, Z, "updated");
    }, ve);
  }, T = (R, W, Z, ve, ge, ye, Me) => {
    for (let Ne = 0; Ne < W.length; Ne++) {
      const we = R[Ne], de = W[Ne], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ta(we, de) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? _(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Z
        )
      );
      v(
        we,
        de,
        Re,
        null,
        ve,
        ge,
        ye,
        Me,
        !0
      );
    }
  }, C = (R, W, Z, ve, ge) => {
    if (W !== Z) {
      if (W !== xt)
        for (const ye in W)
          !Ya(ye) && !(ye in Z) && a(
            R,
            ye,
            W[ye],
            null,
            ge,
            ve
          );
      for (const ye in Z) {
        if (Ya(ye)) continue;
        const Me = Z[ye], Ne = W[ye];
        Me !== Ne && ye !== "value" && a(R, ye, Ne, Me, ge, ve);
      }
      "value" in Z && a(R, "value", W.value, Z.value, ge);
    }
  }, ce = (R, W, Z, ve, ge, ye, Me, Ne, we) => {
    const de = W.el = R ? R.el : u(""), Re = W.anchor = R ? R.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: Ve, slotScopeIds: Be } = W;
    Be && (Ne = Ne ? Ne.concat(Be) : Be), R == null ? (r(de, Z, ve), r(Re, Z, ve), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      Z,
      Re,
      ge,
      ye,
      Me,
      Ne,
      we
    )) : Ie > 0 && Ie & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Ve.length ? (T(
      R.dynamicChildren,
      Ve,
      Z,
      ge,
      ye,
      Me,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || ge && W === ge.subTree) && r0(
      R,
      W,
      !0
      /* shallow */
    )) : A(
      R,
      W,
      Z,
      Re,
      ge,
      ye,
      Me,
      Ne,
      we
    );
  }, ue = (R, W, Z, ve, ge, ye, Me, Ne, we) => {
    W.slotScopeIds = Ne, R == null ? W.shapeFlag & 512 ? ge.ctx.activate(
      W,
      Z,
      ve,
      Me,
      we
    ) : fe(
      W,
      Z,
      ve,
      ge,
      ye,
      Me,
      we
    ) : U(R, W, we);
  }, fe = (R, W, Z, ve, ge, ye, Me) => {
    const Ne = R.component = Bw(
      R,
      ve,
      ge
    );
    if (zg(R) && (Ne.ctx.renderer = cn), Uw(Ne, !1, Me), Ne.asyncDep) {
      if (ge && ge.registerDep(Ne, X, Me), !R.el) {
        const we = Ne.subTree = De(Di);
        z(null, we, W, Z), R.placeholder = we.el;
      }
    } else
      X(
        Ne,
        R,
        W,
        Z,
        ge,
        ye,
        Me
      );
  }, U = (R, W, Z) => {
    const ve = W.component = R.component;
    if (Pw(R, W, Z))
      if (ve.asyncDep && !ve.asyncResolved) {
        H(ve, W, Z);
        return;
      } else
        ve.next = W, ve.update();
    else
      W.el = R.el, ve.vnode = W;
  }, X = (R, W, Z, ve, ge, ye, Me) => {
    const Ne = () => {
      if (R.isMounted) {
        let { next: Ie, bu: Ve, u: Be, parent: p, vnode: Le } = R;
        {
          const nn = i0(R);
          if (nn) {
            Ie && (Ie.el = Le.el, H(R, Ie, Me)), nn.asyncDep.then(() => {
              Rn(() => {
                R.isUnmounted || de();
              }, ge);
            });
            return;
          }
        }
        let ct = Ie, We;
        Ki(R, !1), Ie ? (Ie.el = Le.el, H(R, Ie, Me)) : Ie = Le, Ve && ol(Ve), (We = Ie.props && Ie.props.onVnodeBeforeUpdate) && Pr(We, p, Ie, Le), Ki(R, !0);
        const Rt = Ah(R), un = R.subTree;
        R.subTree = Rt, v(
          un,
          Rt,
          // parent may have changed if it's in a teleport
          _(un.el),
          // anchor may have changed if it's in a fragment
          Xn(un),
          R,
          ge,
          ye
        ), Ie.el = Rt.el, ct === null && Aw(R, Rt.el), Be && Rn(Be, ge), (We = Ie.props && Ie.props.onVnodeUpdated) && Rn(
          () => Pr(We, p, Ie, Le),
          ge
        );
      } else {
        let Ie;
        const { el: Ve, props: Be } = W, { bm: p, m: Le, parent: ct, root: We, type: Rt } = R, un = Za(W);
        Ki(R, !1), p && ol(p), !un && (Ie = Be && Be.onVnodeBeforeMount) && Pr(Ie, ct, W), Ki(R, !0);
        {
          We.ce && We.ce._hasShadowRoot() && We.ce._injectChildStyle(
            Rt,
            R.parent ? R.parent.type : void 0
          );
          const nn = R.subTree = Ah(R);
          v(
            null,
            nn,
            Z,
            ve,
            R,
            ge,
            ye
          ), W.el = nn.el;
        }
        if (Le && Rn(Le, ge), !un && (Ie = Be && Be.onVnodeMounted)) {
          const nn = W;
          Rn(
            () => Pr(Ie, ct, nn),
            ge
          );
        }
        (W.shapeFlag & 256 || ct && Za(ct.vnode) && ct.vnode.shapeFlag & 256) && R.a && Rn(R.a, ge), R.isMounted = !0, W = Z = ve = null;
      }
    };
    R.scope.on();
    const we = R.effect = new gg(Ne);
    R.scope.off();
    const de = R.update = we.run.bind(we), Re = R.job = we.runIfDirty.bind(we);
    Re.i = R, Re.id = R.uid, we.scheduler = () => Wf(Re), Ki(R, !0), de();
  }, H = (R, W, Z) => {
    W.component = R;
    const ve = R.vnode.props;
    R.vnode = W, R.next = null, Iw(R, W.props, ve, Z), Tw(R, W.children, Z), ui(), _h(R), fi();
  }, A = (R, W, Z, ve, ge, ye, Me, Ne, we = !1) => {
    const de = R && R.children, Re = R ? R.shapeFlag : 0, Ie = W.children, { patchFlag: Ve, shapeFlag: Be } = W;
    if (Ve > 0) {
      if (Ve & 128) {
        Y(
          de,
          Ie,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we
        );
        return;
      } else if (Ve & 256) {
        te(
          de,
          Ie,
          Z,
          ve,
          ge,
          ye,
          Me,
          Ne,
          we
        );
        return;
      }
    }
    Be & 8 ? (Re & 16 && at(de, ge, ye), Ie !== de && g(Z, Ie)) : Re & 16 ? Be & 16 ? Y(
      de,
      Ie,
      Z,
      ve,
      ge,
      ye,
      Me,
      Ne,
      we
    ) : at(de, ge, ye, !0) : (Re & 8 && g(Z, ""), Be & 16 && ee(
      Ie,
      Z,
      ve,
      ge,
      ye,
      Me,
      Ne,
      we
    ));
  }, te = (R, W, Z, ve, ge, ye, Me, Ne, we) => {
    R = R || Jo, W = W || Jo;
    const de = R.length, Re = W.length, Ie = Math.min(de, Re);
    let Ve;
    for (Ve = 0; Ve < Ie; Ve++) {
      const Be = W[Ve] = we ? ii(W[Ve]) : Fr(W[Ve]);
      v(
        R[Ve],
        Be,
        Z,
        null,
        ge,
        ye,
        Me,
        Ne,
        we
      );
    }
    de > Re ? at(
      R,
      ge,
      ye,
      !0,
      !1,
      Ie
    ) : ee(
      W,
      Z,
      ve,
      ge,
      ye,
      Me,
      Ne,
      we,
      Ie
    );
  }, Y = (R, W, Z, ve, ge, ye, Me, Ne, we) => {
    let de = 0;
    const Re = W.length;
    let Ie = R.length - 1, Ve = Re - 1;
    for (; de <= Ie && de <= Ve; ) {
      const Be = R[de], p = W[de] = we ? ii(W[de]) : Fr(W[de]);
      if (Ta(Be, p))
        v(
          Be,
          p,
          Z,
          null,
          ge,
          ye,
          Me,
          Ne,
          we
        );
      else
        break;
      de++;
    }
    for (; de <= Ie && de <= Ve; ) {
      const Be = R[Ie], p = W[Ve] = we ? ii(W[Ve]) : Fr(W[Ve]);
      if (Ta(Be, p))
        v(
          Be,
          p,
          Z,
          null,
          ge,
          ye,
          Me,
          Ne,
          we
        );
      else
        break;
      Ie--, Ve--;
    }
    if (de > Ie) {
      if (de <= Ve) {
        const Be = Ve + 1, p = Be < Re ? W[Be].el : ve;
        for (; de <= Ve; )
          v(
            null,
            W[de] = we ? ii(W[de]) : Fr(W[de]),
            Z,
            p,
            ge,
            ye,
            Me,
            Ne,
            we
          ), de++;
      }
    } else if (de > Ve)
      for (; de <= Ie; )
        Fe(R[de], ge, ye, !0), de++;
    else {
      const Be = de, p = de, Le = /* @__PURE__ */ new Map();
      for (de = p; de <= Ve; de++) {
        const Pe = W[de] = we ? ii(W[de]) : Fr(W[de]);
        Pe.key != null && Le.set(Pe.key, de);
      }
      let ct, We = 0;
      const Rt = Ve - p + 1;
      let un = !1, nn = 0;
      const jt = new Array(Rt);
      for (de = 0; de < Rt; de++) jt[de] = 0;
      for (de = Be; de <= Ie; de++) {
        const Pe = R[de];
        if (We >= Rt) {
          Fe(Pe, ge, ye, !0);
          continue;
        }
        let Mt;
        if (Pe.key != null)
          Mt = Le.get(Pe.key);
        else
          for (ct = p; ct <= Ve; ct++)
            if (jt[ct - p] === 0 && Ta(Pe, W[ct])) {
              Mt = ct;
              break;
            }
        Mt === void 0 ? Fe(Pe, ge, ye, !0) : (jt[Mt - p] = de + 1, Mt >= nn ? nn = Mt : un = !0, v(
          Pe,
          W[Mt],
          Z,
          null,
          ge,
          ye,
          Me,
          Ne,
          we
        ), We++);
      }
      const qn = un ? Vw(jt) : Jo;
      for (ct = qn.length - 1, de = Rt - 1; de >= 0; de--) {
        const Pe = p + de, Mt = W[Pe], Hr = W[Pe + 1], Sr = Pe + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Hr.el || o0(Hr)
        ) : ve;
        jt[de] === 0 ? v(
          null,
          Mt,
          Z,
          Sr,
          ge,
          ye,
          Me,
          Ne,
          we
        ) : un && (ct < 0 || de !== qn[ct] ? Ce(Mt, Z, Sr, 2) : ct--);
      }
    }
  }, Ce = (R, W, Z, ve, ge = null) => {
    const { el: ye, type: Me, transition: Ne, children: we, shapeFlag: de } = R;
    if (de & 6) {
      Ce(R.component.subTree, W, Z, ve);
      return;
    }
    if (de & 128) {
      R.suspense.move(W, Z, ve);
      return;
    }
    if (de & 64) {
      Me.move(R, W, Z, cn);
      return;
    }
    if (Me === Ue) {
      r(ye, W, Z);
      for (let Ie = 0; Ie < we.length; Ie++)
        Ce(we[Ie], W, Z, ve);
      r(R.anchor, W, Z);
      return;
    }
    if (Me === pu) {
      I(R, W, Z);
      return;
    }
    if (ve !== 2 && de & 1 && Ne)
      if (ve === 0)
        Ne.beforeEnter(ye), r(ye, W, Z), Rn(() => Ne.enter(ye), ge);
      else {
        const { leave: Ie, delayLeave: Ve, afterLeave: Be } = Ne, p = () => {
          R.ctx.isUnmounted ? o(ye) : r(ye, W, Z);
        }, Le = () => {
          ye._isLeaving && ye[ew](
            !0
            /* cancelled */
          ), Ie(ye, () => {
            p(), Be && Be();
          });
        };
        Ve ? Ve(ye, p, Le) : Le();
      }
    else
      r(ye, W, Z);
  }, Fe = (R, W, Z, ve = !1, ge = !1) => {
    const {
      type: ye,
      props: Me,
      ref: Ne,
      children: we,
      dynamicChildren: de,
      shapeFlag: Re,
      patchFlag: Ie,
      dirs: Ve,
      cacheIndex: Be,
      memo: p
    } = R;
    if (Ie === -2 && (ge = !1), Ne != null && (ui(), Ja(Ne, null, Z, R, !0), fi()), Be != null && (W.renderCache[Be] = void 0), Re & 256) {
      W.ctx.deactivate(R);
      return;
    }
    const Le = Re & 1 && Ve, ct = !Za(R);
    let We;
    if (ct && (We = Me && Me.onVnodeBeforeUnmount) && Pr(We, W, R), Re & 6)
      ln(R.component, Z, ve);
    else {
      if (Re & 128) {
        R.suspense.unmount(Z, ve);
        return;
      }
      Le && Gi(R, null, W, "beforeUnmount"), Re & 64 ? R.type.remove(
        R,
        W,
        Z,
        cn,
        ve
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ye !== Ue || Ie > 0 && Ie & 64) ? at(
        de,
        W,
        Z,
        !1,
        !0
      ) : (ye === Ue && Ie & 384 || !ge && Re & 16) && at(we, W, Z), ve && kt(R);
    }
    const Rt = p != null && Be == null;
    (ct && (We = Me && Me.onVnodeUnmounted) || Le || Rt) && Rn(() => {
      We && Pr(We, W, R), Le && Gi(R, null, W, "unmounted"), Rt && (R.el = null);
    }, Z);
  }, kt = (R) => {
    const { type: W, el: Z, anchor: ve, transition: ge } = R;
    if (W === Ue) {
      mt(Z, ve);
      return;
    }
    if (W === pu) {
      V(R);
      return;
    }
    const ye = () => {
      o(Z), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (R.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: Me, delayLeave: Ne } = ge, we = () => Me(Z, ye);
      Ne ? Ne(R.el, ye, we) : we();
    } else
      ye();
  }, mt = (R, W) => {
    let Z;
    for (; R !== W; )
      Z = S(R), o(R), R = Z;
    o(W);
  }, ln = (R, W, Z) => {
    const { bum: ve, scope: ge, job: ye, subTree: Me, um: Ne, m: we, a: de } = R;
    Eh(we), Eh(de), ve && ol(ve), ge.stop(), ye && (ye.flags |= 8, Fe(Me, R, W, Z)), Ne && Rn(Ne, W), Rn(() => {
      R.isUnmounted = !0;
    }, W);
  }, at = (R, W, Z, ve = !1, ge = !1, ye = 0) => {
    for (let Me = ye; Me < R.length; Me++)
      Fe(R[Me], W, Z, ve, ge);
  }, Xn = (R) => {
    if (R.shapeFlag & 6)
      return Xn(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const W = S(R.anchor || R.el), Z = W && W[Z_];
    return Z ? S(Z) : W;
  };
  let Ot = !1;
  const Zt = (R, W, Z) => {
    let ve;
    R == null ? W._vnode && (Fe(W._vnode, null, null, !0), ve = W._vnode.component) : v(
      W._vnode || null,
      R,
      W,
      null,
      null,
      null,
      Z
    ), W._vnode = R, Ot || (Ot = !0, _h(ve), Fg(), Ot = !1);
  }, cn = {
    p: v,
    um: Fe,
    m: Ce,
    r: kt,
    mt: fe,
    mc: ee,
    pc: A,
    pbc: T,
    n: Xn,
    o: e
  };
  return {
    render: Zt,
    hydrate: void 0,
    createApp: ww(Zt)
  };
}
function du({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ki({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function r0(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Qe(r) && Qe(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = ii(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && r0(l, u)), u.type === cc && (u.patchFlag === -1 && (u = o[a] = ii(u)), u.el = l.el), u.type === Di && !u.el && (u.el = l.el);
    }
}
function Vw(e) {
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
function i0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : i0(t);
}
function Eh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function o0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? o0(t.subTree) : null;
}
const a0 = (e) => e.__isSuspense;
function $w(e, t) {
  t && t.pendingBranch ? Qe(e) ? t.effects.push(...e) : t.effects.push(e) : U_(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), cc = /* @__PURE__ */ Symbol.for("v-txt"), Di = /* @__PURE__ */ Symbol.for("v-cmt"), pu = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let Un = null;
function re(e = !1) {
  es.push(Un = e ? null : []);
}
function zw() {
  es.pop(), Un = es[es.length - 1] || null;
}
let os = 1;
function Oh(e, t = !1) {
  os += e, e < 0 && Un && t && (Un.hasOnce = !0);
}
function s0(e) {
  return e.dynamicChildren = os > 0 ? Un || Jo : null, zw(), os > 0 && Un && Un.push(e), e;
}
function le(e, t, n, r, o, a) {
  return s0(
    K(
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
function jr(e, t, n, r, o) {
  return s0(
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
function l0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ta(e, t) {
  return e.type === t.type && e.key === t.key;
}
const c0 = ({ key: e }) => e ?? null, sl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qt(e) || /* @__PURE__ */ kn(e) || rt(e) ? { i: Wn, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, r = 0, o = null, a = e === Ue ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && c0(t),
    ref: t && sl(t),
    scopeId: Dg,
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
    ctx: Wn
  };
  return u ? (qf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= qt(n) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Un.push(d), d;
}
const De = jw;
function jw(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Gg) && (e = Di), l0(e)) {
    const u = la(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qf(u, n), os > 0 && !a && Un && (u.shapeFlag & 6 ? Un[Un.indexOf(e)] = u : Un.push(u)), u.patchFlag = -2, u;
  }
  if (Zw(e) && (e = e.__vccOpts), t) {
    t = Hw(t);
    let { class: u, style: d } = t;
    u && !qt(u) && (t.class = ot(u)), _t(d) && (/* @__PURE__ */ Bf(d) && !Qe(d) && (d = Mn({}, d)), t.style = St(d));
  }
  const l = qt(e) ? 1 : a0(e) ? 128 : Q_(e) ? 64 : _t(e) ? 4 : rt(e) ? 2 : 0;
  return K(
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
function Hw(e) {
  return e ? /* @__PURE__ */ Bf(e) || Jg(e) ? Mn({}, e) : e : null;
}
function la(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? Ei(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && c0(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Qe(a) ? a.concat(sl(t)) : [a, sl(t)] : sl(t)
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
    ssContent: e.ssContent && la(e.ssContent),
    ssFallback: e.ssFallback && la(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Uf(
    g,
    d.clone(g)
  ), g;
}
function Ha(e = " ", t = 0) {
  return De(cc, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (re(), jr(Di, null, e)) : De(Di, null, e);
}
function Fr(e) {
  return e == null || typeof e == "boolean" ? De(Di) : Qe(e) ? De(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : l0(e) ? ii(e) : De(cc, null, String(e));
}
function ii(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : la(e);
}
function qf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), qf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Jg(t) ? t._ctx = Wn : o === 3 && Wn && (Wn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: Wn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ha(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ei(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ot([t.class, r.class]));
      else if (o === "style")
        t.style = St([t.style, r.style]);
      else if (Zl(o)) {
        const a = t[o], l = r[o];
        l && a !== l && !(Qe(a) && a.includes(l)) ? t[o] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ql(o) && (t[o] = l);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Pr(e, t, n, r = null) {
  Vr(e, t, 7, [
    n,
    r
  ]);
}
const Gw = Wg();
let Kw = 0;
function Bw(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Gw, a = {
    uid: Kw++,
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
    scope: new g_(
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
    propsOptions: Qg(r, o),
    emitsOptions: Ug(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: xt,
    data: xt,
    props: xt,
    attrs: xt,
    slots: xt,
    refs: xt,
    setupState: xt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Sw.bind(null, a), e.ce && e.ce(a), a;
}
let Sn = null;
const Ww = () => Sn || Wn;
let Al, rf;
{
  const e = nc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  Al = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Sn = n
  ), rf = t(
    "__VUE_SSR_SETTERS__",
    (n) => as = n
  );
}
const ys = (e) => {
  const t = Sn;
  return Al(e), e.scope.on(), () => {
    e.scope.off(), Al(t);
  };
}, Fh = () => {
  Sn && Sn.scope.off(), Al(null);
};
function u0(e) {
  return e.vnode.shapeFlag & 4;
}
let as = !1;
function Uw(e, t = !1, n = !1) {
  t && rf(t);
  const { props: r, children: o } = e.vnode, a = u0(e);
  Cw(e, r, a, t), Fw(e, o, n || t);
  const l = a ? Yw(e, t) : void 0;
  return t && rf(!1), l;
}
function Yw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hw);
  const { setup: r } = n;
  if (r) {
    ui();
    const o = e.setupContext = r.length > 1 ? qw(e) : null, a = ys(e), l = ms(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = cg(l);
    if (fi(), a(), (u || e.sp) && !Za(e) && $g(e), u) {
      if (l.then(Fh, Fh), t)
        return l.then((d) => {
          Th(e, d);
        }).catch((d) => {
          ic(d, e, 0);
        });
      e.asyncDep = l;
    } else
      Th(e, l);
  } else
    f0(e);
}
function Th(e, t, n) {
  rt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _t(t) && (e.setupState = Ig(t)), f0(e);
}
function f0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Lr);
  {
    const o = ys(e);
    ui();
    try {
      mw(e);
    } finally {
      fi(), o();
    }
  }
}
const Xw = {
  get(e, t) {
    return xn(e, "get", ""), e[t];
  }
};
function qw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function uc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ig(R_(e.exposed)), {
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
function Jw(e, t = !0) {
  return rt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zw(e) {
  return rt(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ H_(e, t, as), Qw = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let of;
const Dh = typeof window < "u" && window.trustedTypes;
if (Dh)
  try {
    of = /* @__PURE__ */ Dh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const d0 = of ? (e) => of.createHTML(e) : (e) => e, ex = "http://www.w3.org/2000/svg", tx = "http://www.w3.org/1998/Math/MathML", ti = typeof document < "u" ? document : null, Lh = ti && /* @__PURE__ */ ti.createElement("template"), nx = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? ti.createElementNS(ex, e) : t === "mathml" ? ti.createElementNS(tx, e) : n ? ti.createElement(e, { is: n }) : ti.createElement(e);
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
      Lh.innerHTML = d0(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Lh.content;
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
}, rx = /* @__PURE__ */ Symbol("_vtc");
function ix(e, t, n) {
  const r = e[rx];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cl = /* @__PURE__ */ Symbol("_vod"), p0 = /* @__PURE__ */ Symbol("_vsh"), ci = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Cl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Da(e, t);
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
  e.style.display = t ? e[Cl] : "none", e[p0] = !t;
}
const ox = /* @__PURE__ */ Symbol(""), ax = /(?:^|;)\s*display\s*:/;
function sx(e, t, n) {
  const r = e.style, o = qt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (qt(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && ll(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && ll(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), ll(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[ox];
      l && (n += ";" + l), r.cssText = n, a = ax.test(n);
    }
  } else t && e.removeAttribute("style");
  Cl in e && (e[Cl] = a ? r.display : "", e[p0] && (r.display = "none"));
}
const Rh = /\s*!important$/;
function ll(e, t, n) {
  if (Qe(n))
    n.forEach((r) => ll(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = lx(e, t);
    Rh.test(n) ? e.setProperty(
      mo(r),
      n.replace(Rh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Vh = ["Webkit", "Moz", "ms"], hu = {};
function lx(e, t) {
  const n = hu[t];
  if (n)
    return n;
  let r = In(t);
  if (r !== "filter" && r in e)
    return hu[t] = r;
  r = tc(r);
  for (let o = 0; o < Vh.length; o++) {
    const a = Vh[o] + r;
    if (a in e)
      return hu[t] = a;
  }
  return t;
}
const $h = "http://www.w3.org/1999/xlink";
function zh(e, t, n, r, o, a = h_(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($h, t.slice(6, t.length)) : e.setAttributeNS($h, t, n) : n == null || a && !pg(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Rr(n) ? String(n) : n
  );
}
function jh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? d0(n) : n);
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
    u === "boolean" ? n = pg(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Bo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function cx(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Hh = /* @__PURE__ */ Symbol("_vei");
function ux(e, t, n, r, o = null) {
  const a = e[Hh] || (e[Hh] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = fx(t);
    if (r) {
      const b = a[t] = hx(
        r,
        o
      );
      Bo(e, u, b, d);
    } else l && (cx(e, u, l, d), a[t] = void 0);
  }
}
const Gh = /(?:Once|Passive|Capture)$/;
function fx(e) {
  let t;
  if (Gh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Gh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : mo(e.slice(2)), t];
}
let mu = 0;
const dx = /* @__PURE__ */ Promise.resolve(), px = () => mu || (dx.then(() => mu = 0), mu = Date.now());
function hx(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Vr(
      mx(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = px(), n;
}
function mx(e, t) {
  if (Qe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Kh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gx = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? ix(e, r, l) : t === "style" ? sx(e, n, r) : Zl(t) ? Ql(t) || ux(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yx(e, t, r, l)) ? (jh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zh(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (bx(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !qt(r))) ? jh(e, In(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), zh(e, t, r, l));
};
function yx(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Kh(t) && rt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Kh(t) && qt(n) ? !1 : t in e;
}
function bx(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = In(t);
  return Array.isArray(n) ? n.some((o) => In(o) === r) : Object.keys(n).some((o) => In(o) === r);
}
const Bh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Qe(t) ? (n) => ol(t, n) : t;
};
function vx(e) {
  e.target.composing = !0;
}
function Wh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const gu = /* @__PURE__ */ Symbol("_assign");
function Uh(e, t, n) {
  return t && (e = e.trim()), n && (e = Rf(e)), e;
}
const Yh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[gu] = Bh(o);
    const a = r || o.props && o.props.type === "number";
    Bo(e, t ? "change" : "input", (l) => {
      l.target.composing || e[gu](Uh(e.value, n, a));
    }), (n || a) && Bo(e, "change", () => {
      e.value = Uh(e.value, n, a);
    }), t || (Bo(e, "compositionstart", vx), Bo(e, "compositionend", Wh), Bo(e, "change", Wh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[gu] = Bh(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Rf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, _x = ["ctrl", "shift", "alt", "meta"], wx = {
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
  exact: (e, t) => _x.some((n) => e[`${n}Key`] && !t.includes(n))
}, It = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = wx[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, xx = /* @__PURE__ */ Mn({ patchProp: gx }, nx);
let Xh;
function Sx() {
  return Xh || (Xh = Dw(xx));
}
const Jf = ((...e) => {
  const t = Sx().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Mx(r);
    if (!o) return;
    const a = t._component;
    !rt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, kx(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function kx(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mx(e) {
  return qt(e) ? document.querySelector(e) : e;
}
function Wo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Nx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function qh(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let _ = 0; _ < o; _ += 1)
    for (let S = 0; S < r; S += 1)
      a[(_ * r + S) * 4 + 3] <= t || (S < l && (l = S), _ < u && (u = _), S > d && (d = S), _ > b && (b = _));
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
function Zf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function ni(e, t, n) {
  if (!e) return Wo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Tt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let yu = null, bu = null, Jh = null, Zh = null, Ht = null, La = null, Pn = null, Ai = null;
function Px() {
  if (bu) return bu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), bu = n, n;
}
function vu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  yu = ni(yu, n, r);
  const o = yu;
  Tt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Zh !== o.ctx && (Jh = o.ctx.createPattern(Px(), "repeat"), Zh = o.ctx), o.ctx.fillStyle = Jh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Ax(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Cx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Ix(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Ex(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Dt = /* @__PURE__ */ new Map(), Qf = 128;
function Ox(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Dt.has(d)) {
    const B = Dt.get(d);
    return Dt.delete(d), Dt.set(d, B), B;
  }
  Dt.size >= Qf && Dt.delete(Dt.keys().next().value);
  const b = l * 2 + 2, g = l + 1, _ = Zf(b, b), S = _.getContext("2d"), P = u * l, x = l + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, z = S.createRadialGradient(g, g, P, g, g, x);
  return z.addColorStop(0, v), z.addColorStop(1, F), S.fillStyle = z, S.fillRect(0, 0, b, b), Dt.set(d, _), _;
}
function Fx(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: g } = r, _ = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), P = Math.max(0, o), x = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), F = `chisel:${_}:${S}:${n.toFixed(2)}:${u}:${d}:${b}:${g.toFixed(3)}:${P.toFixed(2)}:${x.toFixed(2)}:${v.toFixed(2)}`;
  if (Dt.has(F)) {
    const ee = Dt.get(F);
    return Dt.delete(F), Dt.set(F, ee), ee;
  }
  Dt.size >= Qf && Dt.delete(Dt.keys().next().value);
  const z = Zf(_, S), B = z.getContext("2d"), I = B.createImageData(_, S), V = I.data, O = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), G = 1 + P;
  for (let ee = 0; ee < S; ee++)
    for (let _e = 0; _e < _; _e++) {
      const T = _e + 0.5 - e, C = ee + 0.5 - t, ce = Math.max(Math.abs(T) - O, 0), fe = Math.hypot(ce, C) / t;
      if (fe >= 1) continue;
      const U = fe <= $ ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - $)), X = 1 - fe, H = 1 + P * (1 - X) * (1 - X), A = 1 - x * X * X, te = H * A / G;
      let Y = 1;
      if (v > 0) {
        const kt = Math.floor((C + t) / 1.5), mt = Math.floor((T + e) / 8), ln = so(ta(kt * 41 + 500, mt * 19 + 300));
        Y = 1 - v * 0.42 * ln;
      }
      const Ce = Math.round(255 * Math.min(1, g * U * te * Y));
      if (Ce <= 0) continue;
      const Fe = (ee * _ + _e) * 4;
      V[Fe] = u, V[Fe + 1] = d, V[Fe + 2] = b, V[Fe + 3] = Ce;
    }
  return B.putImageData(I, 0, 0), Dt.set(F, z), z;
}
function ta(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function so(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Tx(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(u) - b, 0), _ = Math.hypot(g, d) / r;
  if (_ >= 1) return 0;
  const S = so(ta(e * 17 + 3, t * 13 + 7)), P = _ + a * 0.22 * (S - 0.5);
  if (P >= 1) return 0;
  const x = P <= o ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - o)), v = Dx(e, t, u, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const B = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, l * x * B));
}
function Dx(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = so(ta(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), _ = so(ta(b * 23 + 800, g * 29 + 500)), S = so(ta(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + _ * 0.3 + S * 0.15;
}
function Lx(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), _ = Math.max(0, Math.min(1, o)), S = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${_.toFixed(2)}`;
  if (Dt.has(S)) {
    const B = Dt.get(S);
    return Dt.delete(S), Dt.set(S, B), B;
  }
  Dt.size >= Qf && Dt.delete(Dt.keys().next().value);
  const P = Zf(b, g), x = P.getContext("2d"), v = x.createImageData(b, g), F = v.data, z = Math.max(0, Math.min(1, n));
  for (let B = 0; B < g; B++)
    for (let I = 0; I < b; I++) {
      const V = Tx(I, B, e, t, z, _, d);
      if (V <= 0) continue;
      const O = (B * b + I) * 4;
      F[O] = a, F[O + 1] = l, F[O + 2] = u, F[O + 3] = V;
    }
  return x.putImageData(v, 0, 0), Dt.set(S, P), P;
}
function h0(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = Ix(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = Rx(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = Ex(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), _ = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", S = t == null ? void 0 : t.scatter, P = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let x;
  if (r === "chisel") {
    const z = o * u, B = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    x = Fx(z, B, a, l, I, V, O);
  } else if (r === "crayon") {
    const z = o * u, B = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    x = Lx(z, B, a, l, I);
  } else
    x = Ox(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: x, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: P, latitudeCorrection: _ };
}
function Rx(e) {
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
function Vx(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Qh(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function ed(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, _ = b * e.radiusPx * o, S = ta(t, n);
    for (let P = 0; P < g; P++) {
      const x = so(S + P * 2) * Math.PI * 2, v = Math.sqrt(so(S + P * 2 + 1)) * _, F = t + Math.cos(x) * v, z = n + Math.sin(x) * v, B = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, O = B * e.aspect * V;
      Qh(e, F, z, B, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  Qh(e, t, n, a, d);
}
function em(e, t, n) {
  const r = Cx(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = h0(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let S = 0; S < r.length; S++) {
    let P = Number(r[S].u || 0) * o;
    const x = Number(r[S].v || 0) * a;
    S > 0 && Math.abs(P - u[S - 1].x) > o * 0.5 && (P += P < u[S - 1].x ? o : -o), u.push({ x: P, y: x });
  }
  if (ed(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], g = u[0], _ = 0;
  for (let S = 1; S < u.length; S++) {
    const P = u[S], x = { x: (b.x + P.x) * 0.5, y: (b.y + P.y) * 0.5 };
    S === 1 ? _ = ss(l, g.x, g.y, x.x, x.y, _) : _ = Il(l, d, g, x, P, _), d = b, b = P, g = x;
  }
  u.length === 2 ? ss(l, g.x, g.y, b.x, b.y, _) : Il(l, d, g, b, b, _), e.restore();
}
function cl(e, t, n) {
  var _;
  const r = Array.isArray((_ = t == null ? void 0 : t.geometry) == null ? void 0 : _.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = Vx(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const P = Ax(r[S]);
    let x = Number(P.x || 0) * o;
    S > 0 && Math.abs(x - u[S - 1].x) > o * 0.5 && (x += x < u[S - 1].x ? o : -o), u.push({ x, y: Number(P.y || 0) * a }), x < d && (d = x), x > b && (b = x);
  }
  function g(S) {
    e.beginPath(), e.moveTo(u[0].x + S, u[0].y);
    for (let P = 1; P < u.length; P++) e.lineTo(u[P].x + S, u[P].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = l, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function Gs(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    cl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? em(e, t, n) : (La = ni(La, n.width, n.height), Tt(La), em(La.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(La.canvas, 0, 0), e.restore());
}
function Bi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ss(e, t, n, r, o, a) {
  const l = r - t, u = o - n, d = Math.hypot(l, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    ed(e, t + l * g, n + u * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function Il(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, _ = u, S = _ + d, P = S + b, x = S - _, v = 16;
  let F = a, z = n.x, B = n.y;
  for (let I = 1; I <= v; I++) {
    const V = _ + x * I / v, O = ((_ - V) * t.x + (V - g) * n.x) / (_ - g), $ = ((_ - V) * t.y + (V - g) * n.y) / (_ - g), G = ((S - V) * n.x + (V - _) * r.x) / (S - _), ee = ((S - V) * n.y + (V - _) * r.y) / (S - _), _e = ((P - V) * r.x + (V - S) * o.x) / (P - S), T = ((P - V) * r.y + (V - S) * o.y) / (P - S), C = ((S - V) * O + (V - g) * G) / (S - g), ce = ((S - V) * $ + (V - g) * ee) / (S - g), ue = ((P - V) * G + (V - _) * _e) / (P - _), fe = ((P - V) * ee + (V - _) * T) / (P - _), U = ((S - V) * C + (V - _) * ue) / (S - _), X = ((S - V) * ce + (V - _) * fe) / (S - _);
    F = ss(e, z, B, U, X, F), z = U, B = X;
  }
  return F;
}
function $x(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const P = h0(o, r, a), x = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", z = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", ed(P, b, u, 1), e.activeStroke = {
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
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + b) * 0.5, _ = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = ss(S, d.lastMidX, d.lastMidY, g, _, d.distSinceStamp) : d.distSinceStamp = Il(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: _ },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = g, d.lastMidY = _, d.pointCount++, e.displayDirty = !0;
}
function af(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Wo(t, n), l = {
    descriptor: r,
    committedMask: Wo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Wo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Wo(t, n);
  let b = null, g = "", _ = null;
  function S(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: Wo(t, n),
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
    return g === "mask" ? l : b ? P(b) : u;
  }
  function v(T) {
    var X;
    const C = !_ || _.length !== T.length || T.some((H, A) => H !== _[A]), ce = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let ue = l.displayDirty || u.displayDirty || C;
    for (const H of T) {
      const A = o.get(H);
      if (A != null && A.displayDirty) {
        ue = !0;
        break;
      }
    }
    if (ce && (ue = !0), !ue) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const H of T) {
      const A = o.get(H);
      A && (A.displayDirty = !1);
    }
    _ = [...T];
    const fe = d.ctx;
    Tt(d);
    const U = !!(ce != null && ce.isEraser);
    for (const H of T) {
      const A = o.get(H);
      if (!A) continue;
      const Y = b === A.actionGroupId && g === "paint" ? A.activeStroke : null;
      if (U)
        Ht = ni(Ht, t, n), Tt(Ht), Ht.ctx.drawImage(A.committedPaint.canvas, 0, 0), Bi(Ht.ctx, a.canvas), fe.drawImage(Ht.canvas, 0, 0);
      else if (fe.drawImage(A.committedPaint.canvas, 0, 0), Y) {
        const Ce = A.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        fe.save(), fe.globalAlpha = Ce, fe.drawImage(a.canvas, 0, 0), fe.restore();
      }
    }
  }
  function F(T) {
    var ce, ue, fe, U, X;
    for (const H of o.values())
      Tt(H.committedPaint), Tt(H.currentStroke), H.activeStroke = null, H.displayDirty = !0;
    Tt(l.committedMask), Tt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, _ = null;
    const C = [
      ...Array.isArray((ue = (ce = T == null ? void 0 : T.painting) == null ? void 0 : ce.paint) == null ? void 0 : ue.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (fe = T == null ? void 0 : T.painting) == null ? void 0 : fe.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const H of C) {
      if (((X = H == null ? void 0 : H.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const A = String((H == null ? void 0 : H.layerKind) || "paint"), Y = String((H == null ? void 0 : H.toolKind) || "pen") === "eraser";
      if (A === "mask") {
        const Ce = l.descriptor;
        Y ? (Ht = ni(Ht, Ce.width, Ce.height), Tt(Ht), Gs(Ht.ctx, H, Ce), Bi(l.committedMask.ctx, Ht.canvas)) : Gs(l.committedMask.ctx, H, Ce);
        continue;
      }
      if (Y) {
        Ht = ni(Ht, r.width, r.height), Tt(Ht), Gs(Ht.ctx, H, r);
        for (const Ce of o.values())
          Bi(Ce.committedPaint.ctx, Ht.canvas), Ce.displayDirty = !0;
      } else {
        const Ce = String((H == null ? void 0 : H.actionGroupId) || "__default__"), Fe = P(Ce), kt = Fe.descriptor;
        Gs(Fe.committedPaint.ctx, H, kt), Fe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function z(T, C) {
    g = String((T == null ? void 0 : T.layerKind) || "");
    const ce = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Tt(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const ue = ce ? u : P(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = ce ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Tt(ue.currentStroke), ue.activeStroke = null, ue.displayDirty = !0;
    }
  }
  function B(T, C) {
    var A;
    const ce = String((T == null ? void 0 : T.layerKind) || "paint"), ue = String((T == null ? void 0 : T.toolKind) || "") === "eraser", fe = ce === "mask" ? l : ue ? u : P(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), U = fe.activeStroke, X = fe.descriptor;
    if (U && U.pointCount > 1) {
      const te = fe.currentStroke.ctx;
      te.globalCompositeOperation = "source-over";
      const Y = {
        ctx: te,
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
      U.pointCount === 2 ? ss(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : Il(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    fe.lassoPreviewActive && (Tt(fe.currentStroke), cl(fe.currentStroke.ctx, T, X), fe.lassoPreviewActive = !1);
    const H = ce === "mask" ? l.committedMask : fe.committedPaint;
    if (ue && ce === "paint")
      for (const te of o.values())
        Bi(te.committedPaint.ctx, fe.currentStroke.canvas), te.displayDirty = !0;
    else if (ue)
      Bi(H.ctx, fe.currentStroke.canvas);
    else {
      const te = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      H.ctx.save(), H.ctx.globalAlpha = te, H.ctx.drawImage(fe.currentStroke.canvas, 0, 0), H.ctx.restore();
    }
    Nx() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((A = T == null ? void 0 : T.targetSpace) == null ? void 0 : A.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), qh(fe.currentStroke.canvas), qh(H.canvas), void 0), Tt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0, b = null, g = "", v([...o.keys()]);
  }
  function I(T) {
    if (g === "mask")
      Tt(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (g === "paint" && !b)
      Tt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const C = o.get(b);
      C && (Tt(C.currentStroke), C.activeStroke = null, C.lassoPreviewActive = !1, C.displayDirty = !0);
    }
    b = null, g = "", v([...o.keys()]);
  }
  function V(T, C) {
    var ue;
    if (g = String((T == null ? void 0 : T.layerKind) || ""), String(((ue = T == null ? void 0 : T.geometry) == null ? void 0 : ue.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Tt(l.currentStroke), cl(l.currentStroke.ctx, T, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const fe = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = fe ? u : P(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = fe ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Tt(U.currentStroke), cl(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
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
  function $(T) {
    return o.get(String(T)) ?? null;
  }
  function G() {
    return [...o.keys()];
  }
  function ee(T) {
    var X;
    const C = o.get(String(T));
    if (!C) return null;
    const ce = g === "paint" && b === C.actionGroupId, ue = g === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (ue != null && ue.isEraser)
      return Pn = ni(Pn, t, n), Tt(Pn), Pn.ctx.drawImage(C.committedPaint.canvas, 0, 0), Bi(Pn.ctx, a.canvas), Pn.canvas;
    const fe = ce ? C.activeStroke : null;
    if (!fe) return C.committedPaint.canvas;
    Pn = ni(Pn, t, n), Tt(Pn), Pn.ctx.drawImage(C.committedPaint.canvas, 0, 0);
    const U = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
    return Pn.ctx.save(), Pn.ctx.globalAlpha = U, Pn.ctx.drawImage(a.canvas, 0, 0), Pn.ctx.restore(), Pn.canvas;
  }
  function _e() {
    return Ai = ni(Ai, t, n), Tt(Ai), vu(Ai.ctx, l.committedMask.canvas), g === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (Ht = ni(Ht, t, n), Tt(Ht), Ht.ctx.drawImage(l.committedMask.canvas, 0, 0), Bi(Ht.ctx, a.canvas), Tt(Ai), vu(Ai.ctx, Ht.canvas)) : vu(Ai.ctx, a.canvas)), Ai.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: z,
    appendStrokePoint: $x,
    updateActiveStroke: V,
    commitActiveStroke: B,
    cancelActiveStroke: I,
    getErpTarget: O,
    ensureTarget: x,
    getGroupTarget: $,
    getGroupDisplayCanvas: ee,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: G
  };
}
function Q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Gt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function zx(e, t) {
  let n = Gt(t) - Gt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const sf = 3;
function Ra(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function El(e, t = 0) {
  const n = Ra(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ra(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Ra(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Ra(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Ra(t) || 0);
}
function m0(e) {
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
const tm = Math.PI / 180, nm = 0.12, jx = sf, Hx = 35, Gx = 140, Ga = 100, Kx = 20, rm = 0.8;
function Bx(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Q(Number(e || Ga), 1, 179) * tm;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / tm;
}
function td(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ga })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(B, I = null) {
    u && u(B, I);
  }
  function g(B, I, V = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(B || 0), d.drag.lastY = Number(I || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function _(B, I, V = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const $ = Number(O || performance.now()), G = Number(B), ee = Number(I), _e = G - d.drag.lastX, T = ee - d.drag.lastY;
    d.drag.lastX = G, d.drag.lastY = ee, d.drag.lastTs = $;
    const C = r() || { x: 1, y: 1 }, ce = Number(C.x || 1), ue = Number(C.y || 1), fe = { ...t() };
    let U = 0, X = 0;
    if (V === "unwrap") {
      const A = o() || { w: 1, h: 1 }, te = Math.max(1, Number(A.w || 1)), Y = Math.max(1, Number(A.h || 1)), Ce = _e / te, Fe = T / Y;
      U = -Ce * 360 * ce, X = Fe * 180 * ue;
    } else {
      const A = a() || { w: 0, h: 0 }, te = Math.max(1, Number(A.w || 0)), Y = Math.max(1, Number(A.h || 0));
      if (te > 1 && Y > 1) {
        const Ce = Q(Number(fe.fov || Ga), 1, 179), Fe = Q(Bx(Ce, te, Y), 0.1, 179);
        U = -(_e / te) * Ce * ce, X = T / Y * Fe * ue;
      } else
        U = -_e * nm * ce, X = T * nm * ue;
    }
    fe.yaw = Gt(Number(fe.yaw || 0) + U), fe.pitch = Q(Number(fe.pitch || 0) + X, -89.9, 89.9), n(fe), d.velHistory.push({ ts: $, yaw: fe.yaw, pitch: fe.pitch });
    let H = 0;
    for (; H < d.velHistory.length - 1 && d.velHistory[H].ts < $ - 100; ) H++;
    return H > 0 && d.velHistory.splice(0, H), d.inertia.active = !1, d.inertia.lastTs = $, l(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function S(B = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(B || performance.now());
    d.drag.lastTs = I;
    const V = d.velHistory.filter(($) => I - $.ts <= 80);
    if (V.length >= 2) {
      const $ = V[0], G = V.at(-1), ee = Math.max(1e-3, (G.ts - $.ts) / 1e3);
      let _e = G.yaw - $.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / ee, d.inertia.vy = (G.pitch - $.pitch) / ee;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > Kx, d.inertia.lastTs = I, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function P(B = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(B || performance.now()), V = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const O = { ...t() };
    O.yaw = Gt(Number(O.yaw || 0) + d.inertia.vx * V), O.pitch = Q(Number(O.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const $ = Math.exp(-5.5 * V);
    return d.inertia.vx *= $, d.inertia.vy *= $, Math.abs(d.inertia.vx) < rm && Math.abs(d.inertia.vy) < rm && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), l(), d.inertia.active;
  }
  function x() {
    const B = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], B;
  }
  function v(B) {
    const I = Math.sign(Number(B || 0));
    if (!I) return !1;
    const V = { ...t() }, O = Number(V.fov || Ga);
    return V.fov = Q(O + I * jx, Hx, Gx), n(V), l(), b("wheel", { deltaSign: I, fovBefore: O, fovAfter: V.fov }), !0;
  }
  function F(B, I = 0) {
    return v(El(B, I));
  }
  function z() {
    n({ yaw: 0, pitch: 0, fov: Ga }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: _,
    endDrag: S,
    stepInertia: P,
    stopMotion: x,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: z
  };
}
const Xt = Math.PI / 180, sn = 180 / Math.PI;
function or(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ol(e, t) {
  return or(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Fl(e, t) {
  return or(e.x * t, e.y * t, e.z * t);
}
function _u(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function nd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return or(e.x / t, e.y / t, e.z / t);
}
function $n(e, t) {
  const n = e * Xt, r = t * Xt, o = Math.cos(r);
  return or(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function ha(e, t, n = 0) {
  const r = Number(e || 0) * Xt, o = Number(t || 0) * Xt, a = n * Xt, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), _ = Math.sin(a);
  return {
    right: or(
      l * g - u * b * _,
      d * _,
      -u * g - l * b * _
    ),
    up: or(
      -l * _ - u * b * g,
      d * g,
      u * _ - l * b * g
    ),
    fwd: or(u * d, b, l * d)
  };
}
function Tl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function vt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Wx() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Ux(e) {
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
function Yx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Xx(e, t) {
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
function Ks(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Xx(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function qx(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Ks(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Ks(e.points, t, 1);
  if (!a) return null;
  const l = Ks(e.rawPoints, t, 1), u = Ks(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: l || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Jx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Yx(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = qx(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = vt(e.size, null), l = vt(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = vt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let _ = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    _ = {
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
    color: _,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function im(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Jx(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Zx(e) {
  if (!e || typeof e != "object") return null;
  const t = vt(e.u0, null), n = vt(e.v0, null), r = vt(e.u1, null), o = vt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function Qx(e) {
  const t = e || {};
  return {
    du: vt(t.du, 0) ?? 0,
    dv: vt(t.dv, 0) ?? 0,
    rot_deg: vt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, vt(t.scale, 1) ?? 1)
  };
}
function eS(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Zx(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, vt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Qx(e.transform)
  } : null;
}
function tS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = eS(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function na(e) {
  const t = Wx();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Ux(e.groups),
    paint: im(e.paint, "paint"),
    mask: im(e.mask, "mask"),
    raster_objects: tS(e.raster_objects)
  };
}
const $r = 1, zr = 179, lf = 85;
function fc(e) {
  const t = ((it(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function g0(e, t) {
  let n = it(e, 0) - it(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function y0(e, t, { shiftKey: n = !1 } = {}) {
  let r = it(e, 0) + it(t, 0) * sn;
  return n && (r = Math.round(r / 15) * 15), fc(r);
}
function it(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function pi(e = {}) {
  const t = Q(it(e.hFOV_deg || 90, 90), $r, zr), n = Q(it(e.vFOV_deg || 60, 60), $r, zr), r = Math.tan(t * Xt * 0.5), o = Math.tan(n * Xt * 0.5);
  return {
    yawDeg: it(e.yaw_deg, 0),
    pitchDeg: it(e.pitch_deg, 0),
    rollDeg: it(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function lo(e, t) {
  const n = Math.max(1, it((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, it((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = pi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function rd(e, t) {
  const n = Math.max(1, it((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, it((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, it(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function id(e, t) {
  const n = Math.max(1e-12, it(t, 1)), r = Math.max(1e-6, it((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, it((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Q(2 * Math.atan(r / (2 * n)) * sn, $r, zr), l = Q(2 * Math.atan(o / (2 * n)) * sn, $r, zr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function nS(e, t, n) {
  const r = it(e == null ? void 0 : e.x, 0), o = it(e == null ? void 0 : e.y, 0), a = Math.max(1, it((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, it((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = pi(t), d = Math.max(1e-12, it(n, 1)), b = 2 * d * u.tanHalfX, g = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function od(e, t, n = lf) {
  const r = Math.max(1e-12, it(t, 1)), o = Q(it(n, lf), 1, 89.999), a = r * Math.tan(o * Xt), l = Math.max(1, it((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, it((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function b0(e, t, n) {
  const r = Math.max(1e-12, it(t, 1));
  return {
    x: (it(n == null ? void 0 : n.x, 0) - it(e == null ? void 0 : e.x, 0)) / r,
    y: -(it(n == null ? void 0 : n.y, 0) - it(e == null ? void 0 : e.y, 0)) / r
  };
}
function ul(e, t) {
  const n = Q(it(e, 60), $r, zr), r = Math.max(1e-6, it(t, 1));
  return Q(
    2 * Math.atan(Math.tan(n * Xt * 0.5) * r) * sn,
    $r,
    zr
  );
}
function om(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function rS(e, t) {
  const n = om(e, 1), r = om(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), l = Math.max(1, Math.round(r * o)), u = (b, g) => g ? u(g, b % g) : b, d = u(a, l) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(l / d))}`;
}
function co(e) {
  const t = Q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Xt, n = Q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Xt;
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
  return (r == null ? void 0 : r[0]) || rS(t, 1);
}
function v0(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = eo(t), t;
}
function _0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? Q(l, $r, zr) : Q(Math.min(42, it(o, 100) * 0.42), 8, 96);
  return v0({
    id: String(e),
    label: "Frame 1",
    yaw_deg: it(t, 0),
    pitch_deg: Q(it(n, 0), -89.9, 89.9),
    roll_deg: fc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function ri(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : eo(e);
}
function w0(e, t) {
  const n = pi(e), r = it(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * sn, a = 2 * Math.atan(n.tanHalfY * r) * sn;
  return o < $r || o > zr || a < $r || a > zr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function x0(e, t, n = sf) {
  const r = Math.sign(it(t, 0)), o = Math.abs(it(n, sf));
  if (!r || !(o > 0)) return null;
  const a = pi(e), l = a.hFovDeg + r * o;
  if (l < $r || l > zr) return null;
  const u = Math.tan(l * Xt * 0.5);
  return w0(e, u / a.tanHalfX);
}
function S0(e, t) {
  const n = pi(e), r = ha(n.yawDeg, n.pitchDeg, n.rollDeg), o = it(t == null ? void 0 : t.x, 0), a = it(t == null ? void 0 : t.y, 0);
  return nd(Ol(Ol(r.fwd, Fl(r.right, o)), Fl(r.up, a)));
}
function iS(e) {
  return or(e.x, e.y, -e.z);
}
function fl(e) {
  return or(e.x, e.y, -e.z);
}
function Yn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = ha(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function k0(e) {
  const t = fl(or(e[0][0], e[1][0], e[2][0])), n = fl(or(e[0][1], e[1][1], e[2][1])), r = fl(or(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * sn, pitchDeg: a * sn, rollDeg: d * sn };
}
function ls(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function go(e) {
  const [[t, n, r], [o, a, l], [u, d, b]] = e, g = t + a + b;
  if (g > 0) {
    const S = 0.5 / Math.sqrt(g + 1);
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
  const _ = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / _, y: (l + d) / _, z: 0.25 * _, w: (o - n) / _ };
}
function Bs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const no = 1e-6, cf = 1e-6, oS = 1e-9;
function cs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function aS(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    cs(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return cs(0, r, a, 1, 0.5 * (l + u));
}
function ca(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ua(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((S) => -S / o), u = r.map((S) => S / a);
  if (l.reduce((S, P, x) => S + P * u[x], 0) < 0) return n.map(() => 0);
  const d = l.map((S, P) => (S * a + u[P] * o) / (o + a)), b = (S) => Math.sqrt(S.reduce((P, x) => P + x * x, 0)), g = 3 * Math.min(b(l), b(u)), _ = b(d);
  return _ <= g ? d : d.map((S) => S * g / _);
}
function M0(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((g, _) => a[_] - g);
  let d = u;
  ca(e, r) && (d = ua(t, r, n[r - 1].map((g, _) => g - o[_]), u).map((g) => g * l));
  let b = u;
  return ca(e, r + 1) && (b = ua(t, r + 1, u.map((g) => -g), n[r + 2].map((g, _) => g - a[_])).map((g) => g * l)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function N0(e, t, n, r, o) {
  const [[a], [l]] = M0(e, t, n.map((u) => [u]), r);
  return cs(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function sS(e, t, n, r) {
  var b, g;
  const o = e.map((_) => _.value);
  let [a, l] = M0(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((_) => cs(u[_], u[_] + a[_], d[_] + l[_], d[_], r));
}
function Dl([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function lS(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function wu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function cS([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function uf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function qo(e, t) {
  return cS(Dl([-e[0], -e[1], -e[2], e[3]], t));
}
function xu(e, t, n) {
  return Dl(e, uf(qo(e, t).map((r) => n * r)));
}
function Su(e, t) {
  const n = lS(e, t);
  if (Math.abs(n) > cf) return n < 0;
  const [r, o, a] = qo(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > cf) return l < 0;
  return !1;
}
function Ws(e) {
  const { x: t, y: n, z: r, w: o } = go(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function ff(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function uS(e, t, n, r) {
  const o = Ws(e[n].value);
  let a = Ws(e[n + 1].value);
  Su(o, a) && (a = wu(a));
  const l = t[n + 1] - t[n], u = qo(o, a);
  let d = u;
  if (ca(e, n)) {
    let O = Ws(e[n - 1].value);
    Su(O, o) && (O = wu(O)), d = ua(t, n, qo(o, O), u).map(($) => $ * l);
  }
  let b = u;
  if (ca(e, n + 1)) {
    let O = Ws(e[n + 2].value);
    Su(a, O) && (O = wu(O)), b = ua(t, n + 1, qo(a, o), qo(a, O)).map(($) => $ * l);
  }
  const g = Dl(o, uf(d.map((O, $) => 0.5 * (O - u[$])))), _ = Dl(a, uf(u.map((O, $) => 0.5 * (O - b[$])))), [S, P, x, v] = xu(xu(o, a, r), xu(g, _, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: z, rollDeg: B } = k0(ls({ x: S, y: P, z: x, w: v })), I = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: ff(F, I.yaw_deg, V.yaw_deg, r),
    pitch_deg: z,
    roll_deg: ff(B, I.roll_deg, V.roll_deg, r)
  };
}
function us(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Ll(e) {
  return Math.sqrt(us(e, e));
}
function Rl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function P0(e, t) {
  const n = us(e, t), r = t.map((l, u) => l - n * e[u]), o = Ll(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function Uo(e, t) {
  const n = Ll(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Us(e, t, n) {
  return Uo(e, P0(e, t).map((r) => n * r));
}
function ku(e, t) {
  const n = Rl(e[t].value), r = Rl(e[t + 1].value), o = us(n, r), a = o < 0 && Ll(r.map((d, b) => d - o * n[b])) <= cf;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = P0(n, r);
  const u = Ll(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function fS(e, t, n, r) {
  const o = Rl(e[n].value), a = Rl(e[n + 1].value), [l, u, d] = ku(e, n);
  let b = l, g = u;
  const _ = t[n + 1] - t[n];
  ca(e, n) && (b = ua(t, n, ku(e, n - 1)[1].map((I) => -I), b).map((I) => I * _)), ca(e, n + 1) && (g = ua(t, n + 1, g.map((I) => -I), ku(e, n + 1)[0]).map((I) => I * _));
  let S, P, x;
  if (d) {
    const I = Math.PI, V = cs(0, us(b, l) / I / 3, I - us(g, u) / I / 3, I, r);
    [S, P, x] = Uo(o, l.map((O) => V * O / I));
  } else {
    const I = Us(Uo(o, b.map(($) => $ / 3)), Uo(a, g.map(($) => -$ / 3)), r), V = Us(Uo(o, b.map(($) => r * $ / 3)), I, r), O = Us(I, Uo(a, g.map(($) => -(1 - r) * $ / 3)), r);
    [S, P, x] = Us(V, O, r);
  }
  const v = Math.hypot(S, x), F = e[n].value.yaw_deg, z = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= oS ? F + (z - F) * r : ff(Math.atan2(S, x) * 180 / Math.PI, F, z, r), pitch_deg: Math.atan2(P, v) * 180 / Math.PI };
}
function dS(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = N0(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function pS(e, t, n, r) {
  return N0(e, t, e.map((o) => o.value), n, r);
}
const hS = { position: sS, rotation: uS, direction: fS, size: dS };
function Yt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Bs(e[t].value);
  if (n <= r[0].frame + no) return Bs(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - no) return Bs(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + no; ) a += 1;
  const l = r[a];
  if (Math.abs(n - l.frame) <= no || l.easing === "hold") return Bs(l.value);
  const u = r.map((b) => b.frame), d = aS(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (hS[t] ?? pS)(r, u, a, d);
}
function df(e) {
  return Math.min(179, Math.max(0.1, e));
}
function mS(e) {
  return Math.min(1, Math.max(0, e));
}
function A0(e) {
  return Math.max(1e-6, e);
}
function C0(e, t) {
  return t - (e.start - e.in);
}
function Oi(e, t) {
  return t >= e.start - no && (e.duration === null || t < e.start + e.duration - no);
}
function ad(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = C0(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Yt(r, "position", n),
      ...Yt(r, "rotation", n),
      hFOV_deg: df(Yt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Oi(o.clip, n),
      clip_frame: a,
      position: Yt(o, "position", a),
      ...Yt(o, "rotation", a),
      scale: A0(Yt(o, "scale", a))
    },
    stickers: e.stickers.map((l) => uo(l, n))
  };
}
function gS(e, t) {
  if (e.placement === "world")
    return {
      position: Yt(e, "position", t),
      ...Yt(e, "rotation", t),
      scale: A0(Yt(e, "scale", t))
    };
  const n = Yt(e, "size", t);
  return {
    ...Yt(e, "direction", t),
    roll_deg: Yt(e, "roll", t),
    hFOV_deg: df(n.hFOV_deg),
    vFOV_deg: df(n.vFOV_deg)
  };
}
function uo(e, t) {
  const n = C0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Oi(e.clip, t),
    clip_frame: n,
    ...gS(e, n),
    opacity: mS(Yt(e, "opacity", n))
  };
}
const yS = 2, bS = ["sky", "world"], vS = ["input", "output", "temp"], I0 = [0.42, 0, 0.58, 1];
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Wt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Vl(e, t) {
  const n = Wt(e, t);
  return n !== null && n > 0 ? n : t;
}
function nr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function fo(e) {
  const t = Wt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function am(e, t) {
  return typeof e == "boolean" ? e : t;
}
function E0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Wt(n, null));
  return t.includes(null) ? null : t;
}
function O0(e) {
  return E0(e) || [0, 0, 0];
}
function F0(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Wt(t.yaw_deg, 0),
    pitch_deg: nr(Wt(t.pitch_deg, 0), -90, 90),
    roll_deg: Wt(t.roll_deg, 0)
  };
}
function _S(e) {
  return nr(Wt(e, 90), 0.1, 179);
}
function wS(e) {
  return Vl(e, 1);
}
function xS(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Wt(t.yaw_deg, 0),
    pitch_deg: nr(Wt(t.pitch_deg, 0), -90, 90)
  };
}
function SS(e) {
  return Wt(e, 0);
}
function kS(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: nr(Wt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: nr(Wt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function T0(e) {
  return nr(Wt(e, 1), 0, 1);
}
const sd = [["position", O0], ["rotation", F0], ["fov", _S]], dc = [["position", O0], ["rotation", F0], ["scale", wS]], ld = [["direction", xS], ["roll", SS], ["size", kS], ["opacity", T0]], cd = [...dc, ["opacity", T0]];
function MS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Wt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...I0];
}
function NS(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = E0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function PS(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!tn(o)) continue;
    const a = fo(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: MS(o.easing) }, u = n ? NS(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function pf(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = tn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: PS(a.keyframes, o, r === "position") };
  }
  return n;
}
function D0(e) {
  const t = tn(e) ? e : {}, n = fo(t.start), r = fo(t.in), o = fo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function AS(e) {
  const t = tn(e) ? e : {}, n = nr(Wt(t.x0, 0), 0, 1), r = nr(Wt(t.y0, 0), 0, 1), o = nr(Wt(t.x1, 1), 0, 1), a = nr(Wt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function CS(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: vS.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function IS(e) {
  const t = CS(e.source);
  if (!t) return null;
  const n = bS.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: D0(e.clip),
    visible: am(e.visible, !0),
    locked: am(e.locked, !1),
    crop: AS(e.crop),
    ...pf(e, r ? cd : ld)
  };
  return r || (o.z_index = fo(e.z_index) ?? 0), o;
}
function ES(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = tn(a) ? IS(a) : null;
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
function $l(e) {
  const t = tn(e.timeline) ? e.timeline : {}, n = tn(e.camera) ? e.camera : {}, r = tn(e.scene) ? e.scene : {}, o = fo(t.length);
  return {
    version: yS,
    timeline: {
      fps: Vl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: Vl(n.aspect, 1), ...pf(n, sd) },
    scene: { clip: D0(r.clip), ...pf(r, dc) },
    stickers: ES(e.stickers),
    painting: na(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function OS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function FS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return {};
  const n = nr(Wt(t.hFOV_deg, 90), 1, 179), r = nr(Wt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function TS(e) {
  const t = tn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return n.sort((r, o) => Wt(r.z_index, 0) - Wt(o.z_index, 0)), $l({
    camera: FS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: OS(r, t),
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
function ho(e) {
  if (e == null || typeof e == "string" && !e.trim()) return $l({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? TS(t) : $l(t);
}
function Mu(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function sm(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function L0(e, t) {
  if (Vl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => fo(l * n), { length: o } = e.timeline, a = sm(e.scene.clip, r);
  return $l({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...Mu(e.camera, sd, r, 0, 0) },
    scene: { clip: a.clip, ...Mu(e.scene, dc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = sm(l.clip, r), g = l.placement === "world" ? cd : ld;
      return { ...l, clip: u, ...Mu(l, g, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Nu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function R0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function ud(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= no);
}
function V0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? R0(e.keyframes[r - 1].easing) : [...I0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function rr(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Nu(o.value, r);
    return;
  }
  const a = ud(o, n);
  a ? a.value = Nu(a.value, r) : V0(o, n, Nu(Yt(e, t, n), r));
}
function yo(e) {
  return e.placement === "world" ? cd.map(([t]) => t) : e.placement === "sky" ? ld.map(([t]) => t) : (e.clip ? dc : sd).map(([t]) => t);
}
function DS(e, t) {
  for (const n of yo(e))
    ud(e[n], t) || V0(e[n], t, Yt(e, n, t));
}
function LS(e) {
  const t = yo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function RS(e, t) {
  return yo(e).every((n) => !!ud(e[n], t));
}
function VS(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Yt(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function $S(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const l of t) {
    const u = e[l], d = u.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    u.keyframes = [
      ...u.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, _) => g.frame - _.frame);
  }
  return r;
}
function $0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function zS(e, t, n) {
  const r = $0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function jS(e, t, n, r) {
  for (const o of $0(e, t, n)) o.easing = R0(r);
}
function HS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function GS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function KS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function lm(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function hf(e) {
  return yo(e).map((t) => e[t]);
}
function mf(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => hf(t).some((n) => n.keyframes.length > 0)) || !lm(e.scene.clip) || e.stickers.some((t) => !lm(t.clip));
}
function z0(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of hf(e.camera))
    for (const l of a.keyframes) o = Math.max(o, l.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: l } = a;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of hf(a))
      for (const d of u.keyframes) o = Math.max(o, l.start - l.in + d.frame + 1);
  }
  return o;
}
function BS(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Ys = { text: null, parsed: null };
function Gn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function zl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function WS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Gn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: na(null),
    painting_layer: null,
    ui_settings: zl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function j0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function US(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function YS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function XS(e) {
  return Array.isArray(e) ? e.map((t) => v0(t)) : [];
}
function qS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function H0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = WS(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Ys.text === o ? a = Ys.parsed : (a = JSON.parse(o), Ys = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const l = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: US(a.assets),
      stickers: YS(a.stickers),
      shots: XS(a.shots),
      painting: na(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: zl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = zl({ ...u.ui_settings, ...l })), u.output_preset = j0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Gn(n.coverage), delete u.editor_history, u;
  } catch {
    return Ys = { text: o, parsed: null }, r;
  }
}
function cm(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function JS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function ZS(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function G0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = ho(e);
  } catch {
    d = ho(null);
  }
  return u && u !== d.timeline.fps && (d = L0(d, u)), {
    ...d,
    coverage: Gn(o),
    bg_color: r,
    output_preset: j0(n),
    ui_settings: zl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function QS(e, t) {
  const n = L0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of yo(a)) a[u].keyframes = l[u].keyframes;
    }
}
function fd(e, t) {
  const n = uo(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const ek = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function um(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function tk(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[ek[n]].keyframes.length));
}
function K0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = um(n, ["yaw_deg", "pitch_deg"]), a = um(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && rr(e, "direction", r, o), n.rot_deg !== void 0 && rr(e, "roll", r, n.rot_deg), Object.keys(a).length && rr(e, "size", r, a);
}
const pc = ["position_x", "position_y", "position_z"];
function nk(e, t) {
  const n = Yt(e, "position", t), r = Yt(e, "rotation", t);
  return {
    ...Object.fromEntries(pc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Yt(e, "fov", t)
  };
}
function rk(e, t, n, r) {
  const o = pc.indexOf(n);
  if (o >= 0) {
    const a = Yt(e, "position", t);
    a[o] = r, rr(e, "position", t, a);
  } else n === "hFOV_deg" ? rr(e, "fov", t, r) : rr(e, "rotation", t, { [n]: r });
}
function ik(e, t, n) {
  rr(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function ok(e, t) {
  const n = uo(e, t);
  return {
    ...Object.fromEntries(pc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function ak(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = pc.indexOf(n);
  if (a >= 0) {
    const l = Yt(e, "position", o);
    l[a] = r, rr(e, "position", o, l);
  } else n === "scale" ? rr(e, "scale", o, r) : n === "opacity" ? rr(e, "opacity", o, r / 100) : rr(e, "rotation", o, { [n]: r });
}
function sk(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && rr(e, o, r, n[o]);
}
function lk(e, t, n) {
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
function dl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function B0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function dd(e, t, n, r) {
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
function ck(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Gt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function gf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function W0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function U0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Y0(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? ho(t) : t);
}
function X0(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(ho(n)) === t;
  } catch {
    return !1;
  }
}
const Pu = 0.15, uk = 0.01, fk = 1e-3, dk = 0.05, pk = 4, fm = 250, hk = 16, ro = 1, mk = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function ar(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Ti(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function pd(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function ma(e, t, n = 0) {
  const r = Yn(e, t, n), o = Ti(r, 2);
  return { right: Ti(r, 0), up: Ti(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function gk(e, t) {
  return e === "6dof" ? t : { ...t, position: [0, 0, 0] };
}
function q0(e, t) {
  return t === "3dof" ? { mode: t, position: [0, 0, 0], moved: !1 } : { ...e, mode: t };
}
function yk(e, t) {
  return t || e.mode === "3dof" ? e : q0(e, "3dof");
}
function bk(e) {
  return ar(e.position, ma(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function bo(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function J0(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function hc(e, t) {
  return J0(bo(t, e.position), ma(e.yaw_deg, e.pitch_deg).forward);
}
function vk(e, t, n = null, r = ro) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * dk;
  if (n && hc(e, n) > 0) {
    const a = bo(n, e.position), l = Math.hypot(...a);
    return l >= o ? n : ar(e.position, a, o / l);
  }
  return ar(e.position, ma(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function _k(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > pk ? !1 : t.time - e.time < fm || e.cost > hk && t.time - e.wheelTime < fm;
}
function hd(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Xt);
  return { tanX: r, tanY: r * n / t };
}
function wk(e, t, n, r, o = bk(e)) {
  const a = Gt(e.yaw_deg + t / r * 360), l = Q(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Yn(e.yaw_deg, e.pitch_deg, 0), d = Yn(a, l, 0), b = bo(e.position, o), g = [0, 1, 2].map((S) => J0(Ti(u, S), b)), _ = { ...e, yaw_deg: a, pitch_deg: l, position: ar(o, pd(d, g)) };
  return { ..._, distance: hc(_, o) };
}
function xk(e, t, n, r, o, a = e.distance) {
  const { right: l, up: u } = ma(e.yaw_deg, e.pitch_deg), d = 2 * a * hd(e, r, o).tanY / o;
  return { ...e, position: ar(ar(e.position, l, -t * d), u, n * d), distance: a };
}
function Sk(e, t, n, r = ro) {
  const o = bo(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const l = Math.max(r, 1e-6), u = l * uk, d = n > 0 ? Math.min(Math.max(a * Pu, u), a - l * fk) : -Math.max(a * Pu / (1 - Pu), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: ar(e.position, o, d / a) };
  return { ...b, distance: hc(b, t) };
}
function kk(e, t, n, r) {
  const { tanX: o, tanY: a } = hd(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = ma(e.yaw_deg, e.pitch_deg);
  return { ...e, position: ar(t.center, d, -u), distance: u };
}
function Au(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: ro }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: go(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(hd(e, t, n).tanY) * sn,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function Mk(e, t, n, r) {
  const { right: o, up: a, forward: l } = Nk(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Xt), g = b * e.aspect, _ = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], S = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + _ / d / g), y: r * 0.5 * (1 - S / d / b), z: d };
}
function Nk(e) {
  const t = ls(e.quaternion), n = Ti(t, 2);
  return { right: Ti(t, 0), up: Ti(t, 1), forward: n.map((r) => -r) };
}
function dm(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function Pk({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Z0(e, t) {
  if (!e || !t.active) return null;
  const n = Ik(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Q0(t),
    itemQuaternion: e.kind === "splat" ? mk : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Ak(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], l = Z0(e, a);
  return l && { ...l, id: o.id, opacity: a.opacity, value: a };
}
function Ck(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Ik(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Q0(e) {
  return {
    position: [...e.position],
    quaternion: go(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function pm(e, t) {
  return ar(e.position, pd(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function hm(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function mm({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function Ek(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function Ok(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...mm(t).map((a) => pm(e.scene, a)));
  for (const a of n) o.push(...Tk(a));
  for (const { box: a, value: l } of r) o.push(...mm(a).map((u) => pm(l, u)));
  return o;
}
function Fk(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: go(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Yn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function Tk(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => ar(e.position, pd(e.rotation, [r, o, 0])));
}
const Dk = 2, Lk = 0.5, Rk = 30;
function Vk(e, t) {
  const n = bo(t, e), r = Math.atan2(n[0], -n[2]) * sn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * sn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function $k(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * Lk : Dk, a = t ? [...t] : ar(e.position, ma(e.yaw_deg, e.pitch_deg).forward, o), l = Math.hypot(...bo(a, e.position)), u = l > 0 ? Vk(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(l, 1e-3) * Math.tan(Rk * 0.5 * Xt);
  return { position: a, rotation: u, scale: d };
}
function gm(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function zk(e) {
  return [0, 1, 2].map((t) => Ti(e, t));
}
function jk(e, t, n, r) {
  if (e === "translate") return { position: ar(t.position, bo(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Hk(n.scale, r.scale) / n.scale };
  const o = gm(ls(r.quaternion), zk(ls(n.quaternion))), { yawDeg: a, pitchDeg: l, rollDeg: u } = k0(gm(o, Yn(t.yaw_deg, t.pitch_deg, t.roll_deg)));
  return { rotation: { yaw_deg: a + 0, pitch_deg: l, roll_deg: u + 0 } };
}
function Hk(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, l) => Math.abs(l - e) > Math.abs(a - e) ? l : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function Gk(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const ym = 2048, ey = 0.28;
function ty(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Xt);
  return {
    quaternion: go(Yn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * sn,
    aspect: r
  };
}
function pl(e) {
  const t = pi(e);
  return {
    quaternion: go(Yn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Kk(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = od(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * sn,
      vFOV_deg: 2 * Math.atan(a / r) * sn
    }
  };
}
function ny(e, t, n) {
  const [[r, o, a], [l, u, d], [b, g, _]] = ls(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * Xt), P = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(x, v = 1e-4) {
      const F = iS(x), z = r * F.x + l * F.y + b * F.z, B = o * F.x + u * F.y + g * F.z, I = -(a * F.x + d * F.y + _ * F.z), V = Math.max(I, v);
      return {
        x: t * 0.5 * (1 + z / V / P),
        y: n * 0.5 * (1 - B / V / S),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(x, v) {
      const F = (x / t * 2 - 1) * P, z = (1 - v / n * 2) * S;
      return nd(fl({
        x: r * F + o * z - a,
        y: l * F + u * z - d,
        z: b * F + g * z - _
      }));
    }
  };
}
function Bk(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = ad(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const g = u.source.kind === "port" && !u.visible;
    if (!b.active && !g) return;
    const _ = n(u);
    if (!_) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * Xt), P = Math.tan(b.vFOV_deg * 0.5 * Xt), { crop: x } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
      opacity: g ? ey : b.opacity,
      zIndex: r(u),
      quaternion: go(Yn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
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
function ry(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return Bk(e, t, {
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
function Wk(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Uk(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = ad(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const g = o.get(u.id), _ = g ? r(g) : null;
    if (!_) return;
    const { width: S, height: P } = Wk(_.media), x = Fk(b, u.crop, S, P);
    x && l.push({
      id: u.id,
      media: _.media,
      revision: _.revision,
      source: _.source,
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
const Cu = /* @__PURE__ */ new WeakMap();
let Yk = 1;
function yf(e) {
  return Cu.has(e) || Cu.set(e, Yk++), Cu.get(e);
}
function bm(e) {
  return e && typeof e == "object" ? yf(e) : e;
}
function vm({ background: e, layers: t }) {
  return JSON.stringify([
    e && [yf(e.media), bm(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, yf(n.media), bm(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function Xk({ onReady: e, onFailed: t, onUpdate: n = () => {
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
    pick(l, u, d, b, g) {
      return r ? r.pick(l, u, d, b, g) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(l, u, d, b, g) {
      return r ? r.pickSticker(l, u, d, b, g) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(l, u, d, b, g, _) {
      return r ? r.gizmoPointer(l, u, d, b, g, _) : null;
    },
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-Dz-yQ88M.js").then((l) => l.$).then((l) => {
    o || (r = l.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((l) => {
    console.error("[PanoramaStickers] three.js view is unavailable", l), a.failed = !0, t();
  }), a;
}
const iy = "3D view unavailable. Check the browser console.";
function jl(e, t, n) {
  return ty({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function qk(e) {
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
const oy = qk(
  () => import("./.lazy/pano_three_view-Dz-yQ88M.js").then((e) => e.$).then((e) => e.createThreeView())
), Vi = ["erp_image", "bg_erp", "bg_media"], md = ["sticker_image", "sticker"], ay = ["scene"], Jk = {
  background: Vi,
  "external-sticker": md,
  scene: ay
};
function sy(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function ly(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = sy(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function Zk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function cy(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function Qk(e, t) {
  const { graph: n, entry: r } = cy(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = sy(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const uy = [...Vi, ...md, ...ay], eM = 256, Yo = /* @__PURE__ */ new Map(), Iu = /* @__PURE__ */ new WeakMap();
let fy = () => null;
function dy(e) {
  return Iu.has(e) || Iu.set(e, JSON.stringify(e)), Iu.get(e);
}
function tM(e) {
  fy = e;
}
function Hl(e, t) {
  const n = dy(e);
  Yo.delete(n), Yo.set(n, t), Yo.size > eM && Yo.delete(Yo.keys().next().value);
}
function wn(e, t) {
  var a;
  const n = e ? fy(e) : null;
  if (!n) return !0;
  const r = ly(e);
  let o = Yo.get(dy(n));
  if (o)
    Hl(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => uy.includes(l == null ? void 0 : l.name)))) return !0;
    Hl(n, r), o = r;
  }
  return Jk[t].every((l) => o[l] === r[l]);
}
const Gl = /* @__PURE__ */ new WeakSet();
async function bf(e, t) {
  if (Gl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Gl.add(e), n.ok && r !== void 0 ? r : null;
}
function py(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = cy(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => uy.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: Qk(n, t) };
}
const hl = /* @__PURE__ */ new Map();
function nM(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && hl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await bf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = py(o, a);
        l && Hl(l.output, l.inputs);
      }
    });
}
const rM = 5;
function iM(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${rM}`, r = bf(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, bf(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, g, _, S;
      const d = String(l.id);
      for (const { id: P } of await r) {
        if (!u()) return null;
        const x = await a(P);
        if ((b = x == null ? void 0 : x.outputs) != null && b[d])
          return ((S = (_ = (g = x.workflow) == null ? void 0 : g.prompt) == null ? void 0 : _[d]) == null ? void 0 : S.class_type) !== l.comfyClass ? null : py(x, d);
      }
      return null;
    }
  };
}
function oM(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let zo = null;
async function aM(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Gl.has(n) || (u = hl.get(o)) != null && u.has(r) || oM(t)) return null;
  (zo == null ? void 0 : zo.workflowId) !== o && (zo = { workflowId: o, history: iM(n, o) }, queueMicrotask(() => {
    zo = null;
  }));
  const l = await zo.history.lastNodeOutput(e, a);
  return a() ? l ? (Hl(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (Gl.has(n) || hl.set(o, (hl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function _m(e, t, n, r = Vi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const wm = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ml(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return wm.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return wm.test(String((e == null ? void 0 : e.filename) || ""));
}
const Eu = /* @__PURE__ */ new WeakMap();
function sM(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function vf(e) {
  return sM(e) ? (Eu.has(e) || Eu.set(e, Math.random().toString(36).slice(2, 10)), Eu.get(e)) : "run";
}
function hy(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function lM(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function gd(e, t = [], n = null) {
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
function cM({
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
  }, g = () => o(), _ = () => {
    o(), d();
  }, S = () => o();
  let P = !1;
  const x = () => {
    P = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", g), r.addEventListener("play", _), r.addEventListener("pause", S), r.addEventListener("error", x), r.src = t, r.load(), { video: r, destroy: () => {
    var z, B;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", _), r.removeEventListener("pause", S), r.removeEventListener("error", x), r.pause(), (z = r.removeAttribute) == null || z.call(r, "src"), (B = r.load) == null || B.call(r));
  }, failed: () => P };
}
function Wi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function uM(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function xm(e, t, n = null) {
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
  return !r && n != null && (r = uM(e == null ? void 0 : e.graph, n)), r;
}
function fM(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function dM(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function pM(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function my({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const $ = String(O[0] || "").trim();
      if ($)
        return Wi(t, {
          filename: $,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const G of O) {
        const ee = o(G);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Wi(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const $ = String(O.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(O.value || "");
    if ($ !== "comfy_image") return "";
    const G = String(O.filename || "").trim();
    return G ? Wi(t, {
      filename: G,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, l = (O) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || O == null) return null;
    const G = String(O);
    return $ instanceof Map ? $.get(O) || $.get(G) || $.get(Number(G)) || null : $[O] || $[G] || null;
  }, u = (O, $) => {
    var ee;
    const G = l(O == null ? void 0 : O.id);
    return Array.isArray((ee = G == null ? void 0 : G.ui) == null ? void 0 : ee[$]) ? G.ui[$] : Array.isArray(G == null ? void 0 : G[$]) ? G[$] : [];
  }, d = (O, $) => {
    const G = l(O == null ? void 0 : O.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, $) ? G.ui[$] : G && Object.prototype.hasOwnProperty.call(G, $) ? G[$] : null;
  }, b = (O, $) => {
    const G = d(O, "pano_sticker_input_state_hash"), ee = Array.isArray(G) ? G[0] : G;
    return String(ee ?? "").trim() || pM($);
  }, g = (O) => {
    const $ = [], G = /* @__PURE__ */ new Set();
    for (const ee of O || []) {
      const _e = o(ee);
      !_e || G.has(_e) || (G.add(_e), $.push(_e));
    }
    return $;
  }, _ = (O, $) => {
    var _e;
    const G = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && G.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && G.push(O.ui.images);
    const ee = [];
    for (const T of G)
      $ >= 0 && $ < T.length && ee.push(T[$]), ee.push(...T);
    return ee;
  }, S = (O, $) => {
    var te;
    const G = String($ || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === G);
    if (_e < 0) return { src: "", sourceType: "", inputName: G };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const C = T.origin_id, ce = xm(O, _e, C);
    if (!ce) return { src: "", sourceType: "", inputName: G };
    const ue = Number(T.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ce) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Y = [];
      ue >= 0 && ue < fe.length && Y.push(fe[ue]), Y.push(...fe);
      const Ce = g(Y.filter((Fe) => !ml(Fe)));
      if (Ce.length)
        return { src: Ce[0], srcCandidates: Ce, sourceType: "appNodeImageUrls", inputName: G };
    }
    const U = l((ce == null ? void 0 : ce.id) ?? C), X = g(_(U, ue).filter((Y) => !ml(Y))).map((Y) => `${Y}&pano_src=${vf(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: G };
    const H = Array.isArray(ce == null ? void 0 : ce.imgs) ? ce.imgs : [];
    if (H.length) {
      const Y = [];
      ue >= 0 && ue < H.length && Y.push(H[ue]), Y.push(...H);
      const Ce = g(Y);
      if (Ce.length)
        return { src: Ce[0], srcCandidates: Ce, sourceType: "nodeImgs", inputName: G };
    }
    const A = (te = ce == null ? void 0 : ce.widgets) == null ? void 0 : te.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (A) {
      let Y = o(A.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (ce.comfyClass === "LoadImage" || ce.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, P = (O, $ = []) => {
    var ee;
    const G = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of $) {
      const T = G.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === _e), C = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const ce = l(((ee = xm(O, T, C.origin_id)) == null ? void 0 : ee.id) ?? C.origin_id), ue = (Array.isArray(ce == null ? void 0 : ce.images) ? ce.images : []).find(ml);
      return ue ? `${Wi(t, ue)}&pano_src=${vf(ce)}` : "";
    }
    return "";
  }, x = (O, $ = []) => {
    const G = Array.isArray($) ? $ : [$];
    for (const ee of G) {
      const _e = S(O, ee);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const $ = String(O || "").trim();
    if (!$) return [];
    if (fM($)) return [$];
    const { filename: G, subfolder: ee } = dM($);
    return G ? g([
      Wi(t, { filename: G, subfolder: ee, type: "temp" }),
      Wi(t, { filename: G, subfolder: ee, type: "output" }),
      Wi(t, { filename: G, subfolder: ee, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var $, G;
      try {
        (G = ($ = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || G.call($, (ee, _e, T) => {
          var C;
          ee != null && ee.img && ((C = r == null ? void 0 : r.isImageLoadFailed) != null && C.call(r, ee.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, $) => {
      var G;
      (G = O == null ? void 0 : O.delete) == null || G.call(O, `__ui__${String($ || "")}`);
    },
    linkedValue: (O, $) => {
      var C, ce, ue, fe;
      const G = String($ || ""), ee = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === G) : -1, _e = ee >= 0 && O.graph ? O.getInputLink(ee) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (ce = U == null ? void 0 : U.data) == null ? void 0 : ce.result,
          (ue = U == null ? void 0 : U.ui) == null ? void 0 : ue.output,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.result
        ];
        for (const H of X) {
          if (!Array.isArray(H)) continue;
          const A = H[Number(_e.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === G) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: P,
    loadPreferredExactLinkedImage: (O, $ = [], G = null, ee = "") => {
      var kt;
      const _e = Array.isArray($) ? $ : [$], T = x(O, _e), ce = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((mt) => String(mt || "").trim()).filter(Boolean);
      if (!ce.length) return null;
      const ue = g(ce.flatMap((mt) => v(mt)));
      if (!ue.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(ee || _e.join("|") || "image_exact"), U = ce.join(`
`), X = O.__panoLinkedInputImageCache.get(fe);
      if (X && X.srcRaw === U && X.img) return X.img;
      const H = n || globalThis.Image;
      if (typeof H != "function") return null;
      const A = new H();
      (kt = r == null ? void 0 : r.markImageLoading) == null || kt.call(r, A, U);
      const te = { srcRaw: U, resolvedSrc: "", img: A };
      O.__panoLinkedInputImageCache.set(fe, te);
      let Y = -1;
      const Ce = (mt) => {
        var ln, at, Xn;
        mt === "ready" ? (ln = r == null ? void 0 : r.markImageReady) == null || ln.call(r, A, U) : (at = r == null ? void 0 : r.markImageFailed) == null || at.call(r, A, U), G == null || G(A), (Xn = O.setDirtyCanvas) == null || Xn.call(O, !0, !0);
      }, Fe = () => {
        if (Y += 1, Y >= ue.length) {
          Ce("failed");
          return;
        }
        te.resolvedSrc = ue[Y], A.src = te.resolvedSrc;
      };
      return A.onload = () => Ce("ready"), A.onerror = () => {
        if (Y + 1 < ue.length) {
          Fe();
          return;
        }
        Ce("failed");
      }, Fe(), A;
    },
    output: l,
    resolvePreferredExactLinkedSource: x,
    source: o,
    uiImage: (O, $, G, ee = null) => {
      var U, X, H;
      const _e = u(O, $)[0] || null, T = o(_e);
      if (!T) return null;
      const C = `__ui__${$}`, ce = (U = G == null ? void 0 : G.get) == null ? void 0 : U.call(G, C);
      if (ce && ce.__panoSrc === T) return ce;
      const ue = n || globalThis.Image;
      if (typeof ue != "function") return null;
      const fe = new ue();
      return fe.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, fe, T), fe.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, fe, T), ee == null || ee(fe);
      }, fe.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, fe, T), ee == null || ee(fe);
      }, fe.src = T, (H = G == null ? void 0 : G.set) == null || H.call(G, C, fe), fe;
    },
    uiList: u,
    uiValue: d
  };
}
const hM = 1e-3;
function gy(e, t, n, r) {
  if (!Oi(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(hM / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function yy(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function mM(e, t) {
  return Math.floor(e * t.fps);
}
function by(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Sm = 4;
function vy({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((S, P) => S !== n[P])) && (n = l, r.clear(), o = null), u === null) return null;
      const g = mM(u, d);
      for (let S = g; S < Math.min(n.length, g + Sm + 1); S += 1) a(S);
      for (const S of r.keys())
        (S < g || S > g + Sm) && S !== o && r.delete(S);
      const _ = r.get(g);
      return _ != null && _.complete && _.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function _y({
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
  const b = () => l || e(), g = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || l ? !1 : (l = e(), u = !1, g(), !0);
    },
    updateGesture(_) {
      if (d) return !1;
      l || this.beginGesture();
      const S = t(l, _);
      return S.changed ? (l = S.state, u = !0, r(l), g(), !0) : !1;
    },
    hasGestureChanges() {
      return l != null && u;
    },
    commitGesture() {
      if (d || !l) return !1;
      const _ = u;
      return _ && o(l), l = null, u = !1, r(null), g(), _;
    },
    cancelGesture() {
      return d || !l ? !1 : (l = null, u = !1, r(null), g(), !0);
    },
    apply(_) {
      if (d) return !1;
      l && this.commitGesture();
      const S = t(e(), _);
      return S.changed ? (o(S.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const _ = l != null;
      l = null, u = !1, _ && r(null);
    }
  };
}
const gl = "sticker_image_1", wy = "external_image", fa = 0;
function ra(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Ou(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Li(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function _f(e, t = fa) {
  return (e == null ? void 0 : e.version) !== 2 ? Li(e) : Li(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: uo(n, t).active,
    external: n.source.kind === "port",
    ...fd(n, t)
  }));
}
function yd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Li(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function xy(e) {
  return String((e == null ? void 0 : e.id) || "") === gl || String((e == null ? void 0 : e.source_kind) || "") === wy;
}
function bd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : xy(t);
}
const Sy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function ky(e) {
  return !xy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Sy.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function My(e) {
  const t = ky(e);
  return t ? Sy.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Ny(e, t = {}) {
  var V, O, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((G) => String((G == null ? void 0 : G.id) || "") === gl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const G = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === gl;
    return {
      state: {
        ...e,
        stickers: n.filter((ee, _e) => _e !== r),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, _ = Math.max(1, d), S = Math.max(1, b), P = t.pose && typeof t.pose == "object" ? t.pose : {}, x = u ? P.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || P.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(x)));
  if (!u) {
    if (!g) return { state: e, changed: !1 };
    const G = ra(v, _, S), ee = Number(((O = l == null ? void 0 : l.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = ra(ee, _, S), T = Number((($ = l == null ? void 0 : l.initial_pose) == null ? void 0 : $.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((C, ce) => ce === r ? {
          ...C,
          vFOV_deg: G,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: _e } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const F = n.reduce((G, ee) => Math.max(G, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), z = {
    yaw_deg: Number(P.yaw_deg || 0),
    pitch_deg: Number(P.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: g ? ra(v, _, S) : Number(P.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(P.rot_deg ?? P.roll_deg ?? 0)
  }, B = {
    ...l || {},
    id: gl,
    source_kind: wy,
    source_link_id: o,
    source_state_hash: a,
    ...z,
    initial_pose: { ...z },
    visible: !0,
    z_index: F + 1
  }, I = r >= 0 ? n.map((G, ee) => ee === r ? B : G) : [...n, B];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function km(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const gM = ["IMAGE", "VIDEO"];
function Mm(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => gM.includes(n)) ? "2d" : null;
}
function yM(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((g) => (g == null ? void 0 : g.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Mm(r.type) ?? Mm((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Py(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: km(e, "sticker"),
    awaitingPose: !t && (km(e, "sticker_state") || yM(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Nm(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return ho({ version: 2, stickers: [n] }).stickers[0];
}
function Ay(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((F) => bd(e, F)), u = l >= 0 ? e.stickers[l] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const F = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((z, B) => B !== l),
        active: F ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const F = { ...Nm(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((z, B) => B === l ? F : z) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const F = [u.size.value, ...u.size.keyframes.map((I) => I.value)], z = F.map((I) => ra(I.hFOV_deg, o, a));
    if (F.every((I, V) => Math.abs(I.vFOV_deg - z[V]) <= 1e-6)) return { state: e, changed: !1 };
    const B = {
      value: { ...u.size.value, vFOV_deg: z[0] },
      keyframes: u.size.keyframes.map((I, V) => ({ ...I, value: { ...I.value, vFOV_deg: z[V + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((I, V) => V === l ? { ...I, size: B } : I) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((F) => F.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Nm(`sticker_${g}`, r)] }, changed: !0 };
  const _ = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), S = (F) => d ? ra(F, o, a) : F, P = dd(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: _,
    vFOV_deg: S(_)
  }, Li(e).reduce((F, z) => Math.max(F, z.z_index), -1) + 1), x = (r == null ? void 0 : r.keyframes) ?? {};
  return P.direction.keyframes = x.direction ?? [], P.roll.keyframes = x.roll ?? [], P.size.keyframes = (x.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: S(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, P] }, changed: !0 };
}
function vd(e) {
  const t = Li(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Ou(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Ou(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Ou(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function Cy(e) {
  const t = yd(e), n = bd(e, t), r = Li(e).some((u) => u && u.visible !== !1), o = vd(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: My(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function bM(e) {
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
function Pm(e, t) {
  const n = yd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = bM(e), o = String(n.id || ""), a = vd(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function vM(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function _M(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Ny(e, t.value);
  if (t.type === "sync-port") return Ay(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === a))
      return { state: e, changed: !1 };
    const d = vd(e).reduce((S, P) => Math.max(S, Number(P.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ra(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, dd(a, dl(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const _ = { id: a, asset_id: l, ...g, z_index: d + 1 };
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
    return !o || !Li(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = yd(e);
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
    const o = ky(n);
    return !o || !My(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Pm(e, "front");
  if (t.type === "send-back") return Pm(e, "back");
  if (t.type === "delete-selected") {
    if (bd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Li({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = vM(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? fd(n, fa) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = tk(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return K0(b, fa, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function wM(e = {}) {
  return _y({
    ...e,
    reduce: _M,
    projectModel: Cy
  });
}
const wf = 2;
function Zi(e, t) {
  return Math.floor(e * t + 0.5);
}
function xM(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Iy({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, g = !1, _ = { name: "idle" }, S = [];
  const P = () => b && !g, x = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const te of S) te();
    S = [];
  }
  function F(te, Y = {}) {
    return v(), _ = { name: te, ...Y }, u(), _;
  }
  function z(te, Y, Ce) {
    const Fe = () => {
      _ === te && Ce();
    };
    e.addEventListener(Y, Fe), S.push(() => e.removeEventListener(Y, Fe));
  }
  function B(te, Y) {
    let Ce = t.requestFrame(function Fe(kt) {
      _ === te && (Y(kt), _ === te && (Ce = t.requestFrame(Fe)));
    });
    S.push(() => t.cancelFrame(Ce));
  }
  function I(te) {
    d = te, a(d);
  }
  function V() {
    return F(g ? "error" : "idle");
  }
  function O() {
    g = !0, V();
  }
  function $() {
    const { seekable: te } = e, Y = te != null && te.length ? te.end(te.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function G(te) {
    if (!P()) return te === "play" ? ce() : V();
    if (e.readyState < wf) {
      const Y = F("loading", { then: te });
      return z(Y, "loadeddata", () => G(Y.then)), z(Y, "error", O), Y;
    }
    return te === "play" && d / n() >= Number(e.duration) ? ce() : ee(te, !1);
  }
  function ee(te, Y) {
    const Ce = $();
    if (!e.ended && Zi(Number(e.currentTime), n()) === Zi(Ce, n())) return _e(te);
    const Fe = F("seeking", { then: te, frame: d, retried: Y });
    return z(Fe, "seeked", () => {
      const kt = Zi(Number(e.currentTime), n()) === Zi($(), n()), mt = d === Fe.frame;
      kt || mt && Fe.retried ? _e(Fe.then) : ee(Fe.then, mt);
    }), z(Fe, "error", O), e.currentTime = Ce, Fe;
  }
  function _e(te) {
    return te === "play" ? T() : (l(), V());
  }
  function T() {
    const te = F("playingVideo", { shown: !1 });
    if (z(te, "pause", () => e.ended ? C() : U()), z(te, "ended", C), z(te, "error", O), o() && Zi(Number(e.duration), n()) >= r()) {
      const Ce = e.loop;
      e.loop = !0, S.push(() => {
        e.loop = Ce;
      });
    }
    const Y = (Ce, Fe) => {
      Fe && !te.shown && (te.shown = !0, u()), ue(Zi(Ce, n()));
    };
    if (x()) {
      let Ce = e.requestVideoFrameCallback(function Fe(kt, mt) {
        _ === te && (Y(Number(mt.mediaTime), !0), _ === te && (Ce = e.requestVideoFrameCallback(Fe)));
      });
      S.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ce);
      });
    } else
      B(te, () => Y(Number(e.currentTime), e.readyState >= wf));
    return Promise.resolve(e.play()).catch(() => {
      _ === te && U();
    }), te;
  }
  function C() {
    l(), ce();
  }
  function ce() {
    const te = F("playingClock", { startTs: t.now(), startFrame: d });
    return B(te, (Y) => ue(te.startFrame + Math.floor((Y - te.startTs) / 1e3 * n()))), te;
  }
  function ue(te) {
    if (te < r()) {
      I(te);
      return;
    }
    if (!o()) {
      fe(r() - 1);
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), I(0), G("play");
  }
  function fe(te) {
    _.name === "playingVideo" ? (v(), e.pause(), I(Math.max(0, te)), l()) : I(Math.max(0, te)), G("still");
  }
  function U() {
    if (_.name === "loading" || _.name === "seeking")
      _.then = "still", u();
    else if (_.name === "playingVideo") {
      v(), e.pause();
      const te = xM(Number(e.currentTime), n());
      I(Math.min(te, r() - 1)), l(), d === te ? V() : G("still");
    } else _.name === "playingClock" && fe(Math.min(d, r() - 1));
  }
  function X() {
    if (!A()) {
      if (d >= r() - 1 && I(0), _.name === "loading" || _.name === "seeking") {
        _.then = "play", u();
        return;
      }
      G("play");
    }
  }
  function H(te) {
    const Y = Math.max(0, Math.round(te));
    if (_.name === "loading" || _.name === "seeking") {
      _.then = "still", I(Y), u();
      return;
    }
    _.name === "playingVideo" && (v(), e.pause()), I(Y), G("still");
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
    setSource(te) {
      v(), b = !!te, g = !1, G("still");
    },
    dispose() {
      v(), b = !1, _ = { name: "idle" };
    }
  };
}
function Ey({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function g(v) {
    l = v, e.currentTime = v;
  }
  function _() {
    const v = d;
    S(), d !== v && n();
  }
  function S() {
    if (!r || o || e.readyState < wf) return;
    const { time: v, playing: F, fps: z } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (F) {
      if (l !== null) return;
      const B = Number(e.duration), I = Number.isFinite(B) ? Math.min(v, B) : v, V = Math.abs(Number(e.currentTime) - I) > 1.5 / z;
      if (e.ended && !V) return;
      V && g(I), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(l !== null || u === v) && (Number(e.currentTime) === v ? b(v) : g(v));
  }
  const P = {
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
  for (const [v, F] of Object.entries(P)) e.addEventListener(v, F);
  function x(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: z = !1, fps: B }) {
      v !== r && (x(v), n()), a = { time: F, playing: z, fps: B }, _();
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
function SM(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function kM({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", g = "", _ = 0;
  const S = /* @__PURE__ */ new Set();
  let P = null, x = null;
  const v = () => o().timeline.fps, F = (T) => T.stickers.find((C) => C.source.kind === "port"), z = () => {
    const T = o(), C = F(T);
    return z0(T, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(_ * v()) : 0,
        P && C ? yy(C.clip, v(), P.meta) : 0
      )
    });
  }, B = Iy({
    video: e,
    clock: r,
    fps: v,
    span: z,
    loop: () => !0,
    onFrame: a,
    onCapture: l,
    onChange: d
  }), I = () => {
    g === b && Number.isFinite(e.duration) && (_ = e.duration);
  }, V = () => {
    g && (S.add(g), d());
  }, O = Ey({ video: t, onCapture: u, onChange: d }), $ = vy({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", I), e.addEventListener("error", V);
  function G(T) {
    T !== g && (g = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), B.setSource(!!T));
  }
  function ee() {
    B.playing && B.stop();
  }
  function _e(T) {
    const C = F(T);
    x = P && C ? gy(C.clip, B.frame, T.timeline.fps, P.meta) : null, O.follow({
      src: (P == null ? void 0 : P.src) || "",
      time: x,
      playing: B.advancing,
      fps: T.timeline.fps
    });
  }
  return {
    get frame() {
      return B.frame;
    },
    get playing() {
      return B.playing;
    },
    get showsVideo() {
      return B.showsVideo;
    },
    get source() {
      return g;
    },
    pause: ee,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return P;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, C) {
      return P != null && P.frames ? $.picture(P.frames, x, P.meta, C) : O.picture(T, C);
    },
    toggle() {
      B.playing ? B.stop() : B.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: C, state: ce, sticker: ue = null }) {
      if (P = T ? ue : null, !T)
        return ee(), G(""), _e(ce), !1;
      for (const A of S)
        C.includes(A) || S.delete(A);
      const fe = C.find((A) => A && !S.has(A)) || "", U = fe !== b;
      U && (b = fe, _ = 0), G(b);
      const X = mf(ce) || !!b && B.state !== "error" || !!P;
      return X || ee(), (U || !X || !B.playing && B.frame >= z()) && B.frame !== fa && B.seek(fa), _e(ce), X;
    },
    dispose() {
      B.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", I), e.removeEventListener("error", V), e.pause(), e.removeAttribute("src"), e.load(), g = "";
    }
  };
}
const Kl = Math.PI / 180, Dr = 180 / Math.PI, MM = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), NM = 260;
function Am(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Oy(e, t) {
  return t ? Oy(t, e % t) : e;
}
function PM(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Oy(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function fs(e, t) {
  const n = Am(e), r = Am(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: PM(n, r) };
}
function po(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Fy(e) {
  const t = po(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ri(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function _d(e, t, n = MM) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, z, B) => {
    const I = F + z, V = Math.max(0, B - 1), O = I > V && I > 0 ? V / I : 1;
    return [F * O, z * O];
  }, [g, _] = b(d, l, r), [S, P] = b(a, u, o), x = {
    x: g,
    y: S,
    w: Math.max(1, r - g - _),
    h: Math.max(1, o - S - P)
  }, v = rd(x, t);
  return {
    x: x.x + (x.w - v.width) * 0.5,
    y: x.y + (x.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: x
  };
}
function AM(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = _d({ width: n, height: r }, 1), a = Q(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Kl * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = S0(d, b0(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), g = CM(b, ha(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), _ = id({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: _.hFOV_deg
  };
}
function Ty(e) {
  return {
    yaw: Gt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Dr),
    pitch: Q(Math.asin(Q(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Dr, -89.9, 89.9)
  };
}
function CM(e, t) {
  const n = Ty(e), r = ha(n.yaw, n.pitch, 0), o = _u(t, e), a = {
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
    roll: fc(Math.atan2(
      _u(u, r.up),
      _u(u, r.right)
    ) * Dr)
  };
}
function Dy(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = _d({ width: n, height: r }, co(e)), a = lo(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = S0(e, b0(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Ty(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Q(2 * Math.atan(n / (2 * a)) * Dr, 1, 179)
  };
}
function IM(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = lo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: g } = od(d, u), _ = {
    x: a - b,
    y: l - g,
    w: b * 2,
    h: g * 2
  }, S = _.x <= 0 && _.y <= 0 && _.x + _.w >= r && _.y + _.h >= o, P = r / o, x = Math.tan(lf * Kl), v = P >= 1 ? x : x * P, F = P >= 1 ? x / P : x;
  return {
    focalPx: u,
    rect: _,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Dr,
      vFOV_deg: 2 * Math.atan(g / u) * Dr
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
function jo(e, t) {
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
function EM(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = lo(n, e);
    return id(rd(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: ul(a, t) };
}
function Cm(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = fs(t, n);
  if (!a) return e;
  const l = co(e) >= 1;
  r && a.ratio >= 1 !== l && (a = fs(a.height, a.width));
  const u = EM(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function Ly(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (po(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = _0({
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
    return jo(e, (r) => Cm(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return jo(e, (r) => {
      const a = String(ri(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? fs(a[1], a[2]) : fs(co(r), 1);
      return l ? Cm(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? jo(e, (o) => {
      const a = fc(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? jo(e, (r) => {
    const o = w0(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? jo(e, (r) => {
    const o = x0(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? jo(e, (r) => {
    const o = $y(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Ry({
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
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && g < Math.min(d.w, d.h) * l) return null;
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
function Vy(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + g0(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: y0(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function $y(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Kl, d = Math.cos(u), b = Math.sin(u), g = a / n, _ = -l / n, S = g * d - _ * b, P = g * b + _ * d, x = Number(e.pitch_deg || 0) * Kl, v = Math.max(0.25, Math.abs(Math.cos(x)));
  return {
    ...e,
    yaw_deg: Gt(Number(e.yaw_deg || 0) - Math.atan(S) / v * Dr),
    pitch_deg: Q(Number(e.pitch_deg || 0) - Math.atan(P) * Dr, -90, 90)
  };
}
function OM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return _y({
    readState: e,
    reduce: Ly,
    projectModel: Fy,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const ke = Object.freeze({
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
}), FM = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, TM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: FM(t[2])
})), DM = {
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
}, Im = Object.fromEntries(
  Object.entries(DM).map(([e, t]) => [e, {
    name: t.name,
    elements: TM(t.body)
  }])
), Et = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Im, r) ? Im[r] : null;
    });
    return (r, o) => n.value ? (re(), le("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ot(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (re(!0), le(Ue, null, yt(n.value.elements, (a, l) => (re(), le(Ue, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${l}`
      }, [
        a.tag === "path" ? (re(), le("path", Ei({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (re(), le("circle", Ei({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (re(), le("rect", Ei({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (re(), le("line", Ei({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (re(), le("polyline", Ei({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (re(), le("polygon", Ei({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ut("", !0)
      ], 64))), 128))
    ], 2)) : ut("", !0);
  }
}, an = {
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
    return (r, o) => (re(), jr(dw(e.tag), Ei({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Lg(() => [
        De(Et, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, LM = ["aria-expanded", "disabled"], RM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, VM = ["data-aspect", "disabled", "onClick"], $M = { class: "pano-cutout-aspect-custom" }, zM = ["disabled"], jM = ["disabled"], HM = ["data-custom-width", "data-custom-height", "disabled"], zy = {
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
    ]), a = /* @__PURE__ */ Bt("1"), l = /* @__PURE__ */ Bt("1"), u = /* @__PURE__ */ Bt(null), d = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ft(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return v.length ? v.map((z) => {
        const B = typeof z == "string" ? z : String((z == null ? void 0 : z.value) || ""), I = typeof z == "string" ? z : String((z == null ? void 0 : z.label) || B);
        return {
          ...typeof z == "object" && z ? z : {},
          value: B,
          label: I,
          active: F ? B === F : (z == null ? void 0 : z.active) === !0
        };
      }) : o.map((z) => ({
        ...z,
        active: z.value === F
      }));
    }), g = ft(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find((z) => z.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    ao(g, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], l.value = F[2]);
    }, { immediate: !0 });
    function _(v) {
      r("action", v);
    }
    function S(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = u.value) != null && F.contains(v.target) || _({ type: "close-aspect" }));
    }
    sc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), gs(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function P(v) {
      const [F, z] = String(v.value || "").split(":");
      _({
        type: "set-aspect",
        width: F,
        height: z,
        preserveOrientation: !0
      });
    }
    function x() {
      _({
        type: "set-aspect",
        width: a.value,
        height: l.value,
        preserveOrientation: !1
      });
    }
    return (v, F) => (re(), le("div", {
      ref_key: "rootElement",
      ref: u,
      class: ot(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (re(), jr(an, {
        key: 0,
        icon: e.model.aspectIcon || tt(ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = (z) => _({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (re(), le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = (z) => _({ type: "toggle-aspect" }))
      }, [
        De(Et, {
          icon: e.model.aspectIcon || tt(ke).aspect
        }, null, 8, ["icon"]),
        K("span", null, nt(g.value), 1),
        De(Et, {
          icon: tt(ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, LM)),
      wr(K("div", RM, [
        (re(!0), le(Ue, null, yt(b.value, (z) => (re(), le("button", {
          key: z.value,
          class: ot(["pano-btn pano-frame-aspect-choice", { active: z.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": z.value,
          disabled: d.value,
          onClick: (B) => P(z)
        }, nt(z.label), 11, VM))), 128)),
        K("div", $M, [
          wr(K("input", {
            "onUpdate:modelValue": F[2] || (F[2] = (z) => a.value = z),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, zM), [
            [Yh, a.value]
          ]),
          F[4] || (F[4] = K("span", { "aria-hidden": "true" }, ":", -1)),
          wr(K("input", {
            "onUpdate:modelValue": F[3] || (F[3] = (z) => l.value = z),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, jM), [
            [Yh, l.value]
          ]),
          K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: x
          }, "Apply", 8, HM)
        ])
      ], 512), [
        [ci, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, GM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, KM = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Bt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (re(), le("div", {
      class: ot(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = It(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = It(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: tt(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = It((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", GM, [
        o[3] || (o[3] = K("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (re(!0), le(Ue, null, yt(tt(n), (a) => (re(), le("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          K("kbd", null, nt(a[0]), 1),
          K("span", null, nt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, BM = {
  class: "pano-view-unavailable",
  role: "status"
}, wd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (re(), le("div", BM, nt(tt(iy)), 1));
  }
}, WM = { class: "pano-cutout-node-surface" }, UM = ["title", "disabled"], YM = { class: "value" }, XM = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, qM = {
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
    return (r, o) => (re(), le("div", WM, [
      K("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = It(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = It(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Et, {
            icon: tt(ke).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(an, {
          icon: e.model.hasShot ? tt(ke).delete : tt(ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(zy, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        K("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = It((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Et, {
            icon: tt(ke).roll
          }, null, 8, ["icon"]),
          K("span", YM, nt(e.model.rollLabel || "0.0°"), 1)
        ], 40, UM),
        De(an, {
          icon: tt(ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(KM)
      ], 32),
      e.model.hasShot === !1 ? (re(), le("div", XM, " Choose a view · + Add Frame ")) : ut("", !0),
      e.model.viewUnavailable ? (re(), jr(wd, { key: 1 })) : ut("", !0)
    ]));
  }
}, jy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Bt(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const _ = a;
      return a = void 0, l = !1, { active: !0, intent: _ };
    }
    function d(_) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (a = _, l = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(_) {
      var v, F;
      const { active: S, intent: P } = u();
      if (!S) return;
      const x = ((F = (v = _.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (x) {
        r("file-selected", { intent: P, file: x });
        return;
      }
      r("file-cancelled", { intent: P });
    }
    function g() {
      const { active: _, intent: S } = u();
      _ && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (_, S) => (re(), le("input", {
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
}, JM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, ZM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Bt(!1), n = Object.freeze([
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
    return (r, o) => (re(), le("div", {
      class: ot(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = It(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = It(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: tt(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = It((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", JM, [
        o[3] || (o[3] = K("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (re(!0), le(Ue, null, yt(tt(n), (a) => (re(), le("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          K("kbd", null, nt(a[0]), 1),
          K("span", null, nt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, QM = { class: "pano-stickers-node-surface" }, eN = ["disabled"], tN = ["aria-label", "data-tip"], nN = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, rN = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, iN = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Bt(null);
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
    return (l, u) => (re(), le("div", QM, [
      K("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = It(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = It(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Et, {
            icon: tt(ke).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Et, {
            icon: tt(ke).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = K("span", { class: "label" }, "Add Image", -1))
        ], 8, eN),
        De(an, {
          icon: e.model.locked ? tt(ke).lock_closed : tt(ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(an, {
          icon: tt(ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: tt(ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: e.model.isExternalSelection ? tt(ke).back_initial : tt(ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(ZM)
      ], 32),
      e.model.playable === !0 ? (re(), le("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = It(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = It(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Et, {
          icon: e.model.playing ? tt(ke).pause : tt(ke).play
        }, null, 8, ["icon"])
      ], 40, tN)) : ut("", !0),
      e.model.hasStickers === !1 ? (re(), le("div", nN, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (re(), le("div", rN, "Drop image to add")) : ut("", !0),
      De(jy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (re(), jr(wd, { key: 3 })) : ut("", !0)
    ]));
  }
}, Em = 24;
function oN(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Om(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function aN(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function xf(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Om(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Om(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : aN(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function xd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Hy(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Va(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Q(n.x, -r, t.width + r),
    y: Q(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function sN(e) {
  const t = ha(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Q(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Xt * 0.5),
    tanY: Math.tan(Q(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Xt * 0.5)
  };
}
function Ui(e, t, n) {
  return nd(Ol(
    Ol(e.centerDir, Fl(e.right, t)),
    Fl(e.up, n)
  ));
}
function Sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = sN(e), r = Va(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Ui(n, -n.tanX, n.tanY),
    Ui(n, n.tanX, n.tanY),
    Ui(n, n.tanX, -n.tanY),
    Ui(n, -n.tanX, -n.tanY)
  ].map((S) => Va(S, t)), a = Array.from({ length: 4 }, (S, P) => {
    const x = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let z, B;
      P === 0 ? (z = -n.tanX + 2 * n.tanX * F, B = n.tanY) : P === 1 ? (z = n.tanX, B = n.tanY - 2 * n.tanY * F) : P === 2 ? (z = n.tanX - 2 * n.tanX * F, B = -n.tanY) : (z = -n.tanX, B = -n.tanY + 2 * n.tanY * F);
      const I = Va(Ui(n, z, B), t);
      I && x.push({ x: I.x, y: I.y });
    }
    return x;
  }), l = Va(Ui(n, 0, n.tanY), t), u = Va(
    Ui(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, g = u.y - l.y, _ = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / _ * Em,
      y: l.y + g / _ * Em
    },
    visible: !0
  };
}
function Fm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: Sd(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = xf(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = xf(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function lN(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Gt(Math.atan2(r.x, r.z) * sn),
    pitch_deg: Math.asin(Q(r.y, -1, 1)) * sn
  };
}
function cN(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Q(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Q(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function uN(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * sn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Xs = null;
function kd() {
  return Xs || (Xs = new Promise((e) => {
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
  }), Xs);
}
function er(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function fN(e, t = 1024) {
  const n = Math.max(1, Math.round(er(e, 2048))), r = Math.min(n, Math.max(1, Math.round(er(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function dN(e, t, n) {
  const r = er(t), o = er(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const l = er(a.u0), u = er(a.v0), d = er(a.u1), b = er(a.v1);
  if (d <= l || b <= u) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((l + d) * 0.5 + er(g.du)) * r,
    centerY: ((u + b) * 0.5 + er(g.dv)) * o,
    width: (d - l) * r,
    height: (b - u) * o,
    rotationRad: er(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, er(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function pN(e, t, n) {
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
function hN() {
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
      const g = [...u.listeners];
      u.listeners.clear(), g.forEach((_) => _()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, l, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = dN(a, l, u);
    if (!b.startsWith("data:") || !g) return null;
    const _ = pN(a, l, u), S = String((a == null ? void 0 : a.id) || "").trim() || _, P = t.get(S);
    if ((P == null ? void 0 : P.revision) === _) return { source: P.source, revision: _ };
    const x = r(b, d), v = Number(x.naturalWidth || x.width || 0), F = Number(x.naturalHeight || x.height || 0);
    if (!x.complete || v < 1 || F < 1) return null;
    const z = document.createElement("canvas");
    z.width = Math.max(1, Math.round(l)), z.height = Math.max(1, Math.round(u));
    const B = z.getContext("2d");
    return B ? (g.wrapOffsets.forEach((I) => {
      B.save(), B.translate(g.centerX + I, g.centerY), B.rotate(g.rotationRad), B.scale(g.scale, g.scale), B.drawImage(
        x,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), B.restore();
    }), t.set(S, { revision: _, source: z }), { source: z, revision: _ }) : null;
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
function mN(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function gN(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function yN({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(_) {
    if (!_) return;
    _.entry.listeners.delete(_);
    const S = r.get(_.owner);
    (S == null ? void 0 : S.get(_.key)) === _ && S.delete(_.key);
  }
  function l(_, S, P, x) {
    if (!_ || typeof x != "function" || P.settled) return;
    let v = r.get(_);
    v || (v = /* @__PURE__ */ new Map(), r.set(_, v));
    const F = v.get(S);
    if ((F == null ? void 0 : F.entry) === P) {
      F.callback = x;
      return;
    }
    a(F);
    const z = { owner: _, key: S, entry: P, callback: x };
    v.set(S, z), P.listeners.add(z);
  }
  function u(_, S) {
    _.settled || (_.settled = !0, _.image.onload = null, _.image.onerror = null, !S && n.get(_.key) === _ && n.delete(_.key), [..._.listeners].forEach((P) => {
      a(P);
      try {
        P.callback(_.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(_) {
    if (!(n.size <= _))
      for (const [S, P] of n) {
        if (n.size <= _) break;
        !P.settled || P.listeners.size > 0 || (P.image.onload = null, P.image.onerror = null, n.delete(S));
      }
  }
  function b(_, S, P, x = null) {
    const v = String(S || ""), F = String(P || "");
    if (!v || !F) return null;
    let z = n.get(v);
    if (z)
      n.delete(v), n.set(v, z);
    else {
      d(o - 1);
      const I = e || globalThis.Image;
      if (typeof I != "function") return null;
      const V = new I();
      z = { key: v, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, z), V.onload = () => u(z, !0), V.onerror = () => u(z, !1), V.src = F;
    }
    return z.settled || z.image.complete && Number(z.image.naturalWidth || z.image.width || 0) > 0 || l(_, v, z, x), z.image;
  }
  function g(_) {
    const S = r.get(_);
    S && ([...S.values()].forEach(a), r.delete(_), d(o));
  }
  return { get: b, disposeOwner: g };
}
const Ka = /* @__PURE__ */ new WeakMap();
function Gy(e, t, { editor: n = !1 } = {}) {
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
function si(e, ...t) {
  const n = Ka.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const yl = Object.freeze({
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
}), Ky = "PanoramaSuite.Editor.ViewControls", bN = {
  id: Ky,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(yl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function vN(e) {
  return Object.hasOwn(yl, e) ? yl[e] : yl.default;
}
function _N(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const l = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (l == null ? void 0 : l.action) ?? null;
}
function wN(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Bl = "state_json";
function li(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function xN(e) {
  var l, u;
  const t = li(e, Bl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = H0(n, {
    coverage: (l = li(e, "coverage")) == null ? void 0 : l.value
  }), o = Ly(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Md(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = li(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, g, _, S, P, x;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (S = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || S.call(_, !0, !0), (x = (P = t == null ? void 0 : t.canvas) == null ? void 0 : P.setDirty) == null || x.call(P, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function SN(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Tm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function kN(e) {
  var g, _, S, P, x, v;
  if (!e) return;
  const t = li(e, "coverage"), n = li(e, "bg_color"), r = li(e, Bl), o = li(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && SN(a) && (Tm(l) || l === ""))) return;
  let b = "360";
  if (Tm(l))
    try {
      b = String(Gn((g = JSON.parse(l)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (_ = t.callback) == null || _.call(t, b), n.value = a, (S = n.callback) == null || S.call(n, a), r.value = l, (P = r.callback) == null || P.call(r, l), o && (o.value = u, (x = o.callback) == null || x.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function bl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function Sf(e, t, n) {
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
async function MN(e, { tolerateOperationFailure: t = !1 } = {}) {
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
async function By(e, t = {}) {
  var r;
  await MN(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function NN(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await By(e), n ? n.apply(this, r) : this.value;
  };
}
function PN(e) {
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
function AN(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Fu(e, {
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
  function b(g) {
    var P;
    const _ = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === _) return;
    PN(g), Md(g, t), bl(g, Bl);
    const S = li(g, Bl);
    if (NN(g, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const x = S.callback;
      S.callback = (v) => {
        var z;
        const F = x ? x(v) : void 0;
        return (z = g.setDirtyCanvas) == null || z.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const x = li(g, "bg_color");
      !d && x && (x.value == null || String(x.value).trim() === "" || String(x.value).toLowerCase() === "#000000") && (x.value = "#00ff00", (P = x.callback) == null || P.call(x, "#00ff00")), Sf(g, r, () => o(g, "stickers")), u && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && bl(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
      return;
    }
    Sf(g, r, () => o(g, "cutout")), l(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && bl(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = _;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const _ = e.prototype[g];
    e.prototype[g] = function() {
      const S = _ ? _.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && xN(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && kN(this);
      const P = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && b(this), g === "onAdded" && P && si(this, "attach"), S;
    };
  }
}
function CN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return AN(this), r;
  };
}
function IN(e, {
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
    Md(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Sf(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && bl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function EN({
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
    settings: [bN],
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && Fu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaStickersNode" && Fu(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && Fu(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), Tl(g) && CN(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Md(d, e), Tl(b) && IN(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const ON = /\.(png|jpe?g|webp|gif|bmp)$/i;
function br(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ON.test(String(e.name || "")) : !1;
}
function Nd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => br(n)) : !1;
}
function FN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, _;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (_ = d == null ? void 0 : d.stopImmediatePropagation) == null || _.call(d);
  }, a = (d) => {
    if (Nd(d == null ? void 0 : d.dataTransfer)) {
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
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((_) => br(_));
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
    const g = await new Promise((_, S) => {
      const P = new n();
      P.onload = () => _(P), P.onerror = () => S(new Error("image load failed")), P.src = a;
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
const Dm = /* @__PURE__ */ new WeakSet(), Lm = /* @__PURE__ */ new WeakSet();
let Rm = 0;
function kf(e) {
  if (!e || typeof e != "object" || Lm.has(e)) return e;
  const t = String(e.type || "preview");
  return Rm += 1, e.type = `${t}:pano-${Rm}`, Lm.add(e), e;
}
function Wl(e) {
  if (!e || typeof e != "object" || Dm.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Dm.add(e), e;
}
function Wy(e, t) {
  var r, o;
  if (!t || ((o = (r = Wl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function TN({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Lt } = il;
tM((e) => Ri(e.id));
nM(Kt);
const Pd = yN(), { linkedVideoFile: DN } = my({ app: Lt, api: Kt });
function Mf() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (il == null ? void 0 : il.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const LN = "pano_suite.ui_settings.v1", RN = 120, VN = 2048;
function Vm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(LN)) || "").trim();
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
function $N() {
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
function zN() {
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
function Nf(e) {
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
function Uy(e) {
  const t = Nf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function jN(e, t, n) {
  Uy(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Pf(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Ad(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Yy(e) {
  return Tl(Ad(e));
}
function $m(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function Xy(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Pf(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && vl(e), O2(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Pf(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      vl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      vl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function HN(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function vl(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  Af.unregister(e), HN(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((b == null ? void 0 : b.name) || ""), _ = String((b == null ? void 0 : b.type) || ""), S = Mf();
      return g === S || _ === S || g === "pano_preview" || _ === "pano_preview" ? !0 : g === "preview" && _ === "pano_preview";
    }).forEach((b) => c2(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function GN(e, t = "#00ff00") {
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
function KN(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ia(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Ln(e) {
  var u, d;
  const t = KN(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ia(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ia(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? G0(t, { backgroundColor: r, coverage: o, active: W0(e) }) : GN(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function ia(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function BN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function qy(e, t, n = null) {
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
  return !r && n != null && (r = BN(e == null ? void 0 : e.graph, n)), r;
}
function WN(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Jy(e, t = []) {
  const n = WN(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Vi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function zm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Ul(e, t) {
  const n = zm(e), r = zm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function UN(e, t) {
  var n;
  return qy(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function YN(e, t = Vi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = Jy(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return lM(e, l, UN);
}
const Af = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Kt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, _, S;
        if (!a) return;
        const l = Ul(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![...YN(a)].some((P) => Ul(r, P)) || hy(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (Zy(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (S = (_ = a.graph) == null ? void 0 : _.setDirtyCanvas) == null || S.call(_, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Kt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Kt) != null && e.removeEventListener) || (Kt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Yl(e) {
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
  return typeof ((a = Kt) == null ? void 0 : a.apiURL) == "function" ? Kt.apiURL(o) : o;
}
function XN(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function qN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function JN(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function ZN(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (XN(t)) return [t];
  const { filename: n, subfolder: r } = qN(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Yl({
    filename: n,
    subfolder: r,
    type: a
  }));
  return JN([...o, t]);
}
function QN(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Yl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ri(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Ul(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const l of a)
      if (Ul(l, o)) return t[l];
  }
  return null;
}
function ts(e, t, n = null) {
  const r = n || Ri(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
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
      return Yl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Yl(e);
}
function Xl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Tu(e) {
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
function Cd(e, t) {
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
function e2(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function t2(e, t) {
  try {
    e.__panoOwnOutputRev = mN(e.__panoOwnOutputRev);
    const n = e2(t);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Cd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function oa(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function n2(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!wn(e, "background"))
    return oa(e), null;
  const o = Ri(r), a = gd(o, t, Bn);
  if (!a)
    return oa(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = Cd(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  oa(e);
  const g = cM({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function r2(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = Jy(e, t).map((_) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(_))).filter((_) => _ >= 0), a = n.map((_, S) => ({ input: _, idx: S })).filter(({ input: _ }) => String((_ == null ? void 0 : _.type) || "").toUpperCase() === "IMAGE").map(({ idx: _ }) => _), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const _ of l) {
    const S = n[_], P = e.graph ? e.getInputLink(_) : null;
    if ((P == null ? void 0 : P.origin_id) == null) continue;
    const x = P.origin_id, v = qy(e, _, x);
    if (!v) continue;
    const F = Number(P.origin_slot ?? 0), z = Ri((v == null ? void 0 : v.id) ?? x), B = Array.isArray(z == null ? void 0 : z.images) ? z.images : [];
    if (B.length) {
      const $ = [];
      F >= 0 && F < B.length && $.push(B[F]), $.push(...B);
      for (const G of $.filter((ee) => !ml(ee))) {
        const ee = Bn(G);
        if (ee)
          return String((S == null ? void 0 : S.name) || ""), { src: `${ee}&pano_src=${vf(z)}`, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(v) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const $ = [];
      F >= 0 && F < I.length && $.push(I[F]), $.push(...I);
      for (const G of $) {
        const ee = Bn(G);
        if (ee)
          return String((S == null ? void 0 : S.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const V = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (V.length) {
      const $ = [];
      F >= 0 && F < V.length && $.push(V[F]), $.push(...V);
      for (const G of $) {
        const ee = Bn(G);
        if (ee)
          return String((S == null ? void 0 : S.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (O) {
      let $ = Bn(O.value);
      if ($ && !$.includes("/") && !$.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && ($ = Kt.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((S == null ? void 0 : S.name) || ""), { src: $, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const u = wn(e, "background") ? Ri(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((g = u == null ? void 0 : u.ui) == null ? void 0 : g.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const _ of d) {
      const S = Bn(_);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function i2(e, t = [], n = {}) {
  const r = r2(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = ZN(o);
  if (!a.length) return null;
  const l = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return l && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(u, g);
  let _ = -1;
  const S = () => {
    var x, v, F, z;
    if (_ += 1, _ >= a.length) {
      if (((v = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : v.call(x, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (z = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || z.call(F, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const P = a[_];
    g.pendingResolvedSrc = P, b.src = P;
  };
  return b.onload = () => {
    var P, x, v;
    ((x = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : x.call(P, u)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (P) => {
    var x, v, F, z;
    if (_ + 1 < a.length) {
      S();
      return;
    }
    if (((v = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : v.call(x, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (z = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || z.call(F, u);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((P == null ? void 0 : P.type) || "error");
  }, S(), l && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function o2(e, t = [], n = null, r = {}) {
  const o = i2(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function Zy(e) {
  var t, n;
  if (e) {
    Pd.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, oa(e), e.__panoWrappedErpCache = null;
  }
}
function a2(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, oa(e), e.__panoWrappedErpCache = null;
  }
}
function Qy(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function qs(e, t, n = "") {
  const r = Qy(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < RN ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function jm(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function s2(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), g = r + (a - d) * 0.5, _ = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, _, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, _ + b * 0.5 + 0.5), e.restore();
}
function Du(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function l2(e) {
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
function c2(e, t) {
  return Wy(e, t);
}
function ds(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let a = QN(n);
  if (!a && (r != null && r.external)) {
    if (!wn(e, "external-sticker")) return null;
    const P = Ri(e == null ? void 0 : e.id), x = ((S = P == null ? void 0 : P.ui) == null ? void 0 : S.pano_sticker_input_images) || (P == null ? void 0 : P.pano_sticker_input_images) || [];
    for (const v of Array.isArray(x) ? x : [x])
      if (a = Bn(v), a) break;
  }
  if (!a) return null;
  const l = ts(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Cd(a, d) : a, g = gN(a, u, d);
  return Pd.get(e, g, b, (P, x) => {
    var v, F;
    x && (r != null && r.external && e.__panoOutputFromRun && si(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function u2(e, t) {
  var _, S, P, x;
  const n = m2(e, t), r = g2(t), o = Array.isArray((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) ? t.painting.groups : [], a = new Map(
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
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = hN()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = fN(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = u.map((v) => {
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
  return [...l, ...g];
}
function f2(e, t, n, r) {
  var a, l, u, d, b, g;
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
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = p2(e, t, r);
  return o || null;
}
function d2(e, t) {
  var _, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (_ = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : _.call(o), l = (t == null ? void 0 : t.ds) || ((S = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : S.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), g = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function p2(e, t, n) {
  var o, a;
  const r = d2(t, n || (Lt == null ? void 0 : Lt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function h2(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function m2(e, t) {
  var b, g, _, S, P, x, v, F, z, B, I, V;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (S = (_ = t == null ? void 0 : t.painting) == null ? void 0 : _.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = h2(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = af(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== d.groups || ((B = e.__panoPreviewPaintRevision) == null ? void 0 : B.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function g2(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function y2(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function b2(e, t, n) {
  const r = Sd(t, n);
  r.visible && xd(e, r.boundaryEdges, { selected: !1 });
}
function v2(e, t, n) {
  const r = Sd(t, n);
  r.visible && (e.save(), xd(e, r.boundaryEdges, { selected: !0 }), Hy(e, r, { accent: oN(t) }), e.restore());
}
function Cf(e, t, n) {
  return ny(jl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function ql(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? fa;
}
function _2(e) {
  return [wn(e, "background") ? gd(Ri(e.id), ["pano_input_videos"], Bn) : "", DN(e, Vi)];
}
function w2(e) {
  var a;
  if (!wn(e, "external-sticker")) return null;
  const t = Ri(e.id), n = ts(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Bn), meta: n };
  const o = gd(t, ["pano_sticker_input_videos"], Bn);
  return o ? { src: o, meta: n } : null;
}
function x2({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Hm(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: ho({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = ds(e, l.id, B0(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, u), _ = by(b.playback.stickerMedia, u);
        return g ? { media: g, revision: Tu(g), source: _ } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", g = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = ds(e, g, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return Xl(u) ? { media: u, revision: Tu(u) } : null;
  }, o = u2(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: Xl(n) ? { media: n, revision: Tu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: ry(e.__panoSurfaceScene.sceneState, ql(e), t.stickers, { media: r, paintLayers: o })
  };
}
function S2(e, t, n) {
  var V, O, $, G, ee, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  Qy(e, r);
  const o = Ln(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, ($ = (O = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : O.refresh) == null || $.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (ee = (G = e.__panoStickersNodeSurface) == null ? void 0 : G.session) == null ? void 0 : ee.refresh) == null || _e.call(ee));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const g = (e.__panoSurfacePlayback ? x2(e.__panoSurfacePlayback) : n2(e, ["pano_input_videos"], () => {
    var C, ce;
    return (ce = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ce.call(C);
  })) || o2(
    e,
    Vi,
    () => {
      var C, ce;
      return (ce = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : ce.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Xl(g);
  let S = null;
  const P = (C, ce) => {
    S || (S = Hm(e, o, g));
    const ue = n.render({ width: C.w, height: C.h, camera: ce, ...S });
    return ue && d.drawImage(ue.canvas, ue.x, ue.y, ue.width, ue.height, C.x, C.y, C.w, C.h), !!ue;
  };
  if (r === "cutout") {
    const C = l2(o), ce = y2(g), ue = C ? Q(pi(C).aspect, 0.1, 10) : _ ? Q(Number(ce.width / ce.height), 0.05, 20) : 1, fe = _d(b, ue);
    e.__panoCutoutNodeFrame = fe;
    let U = "none";
    const X = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (C)
      if (g && !_)
        U = "loading";
      else if (_) {
        const H = IM({ width: l, height: u }, fe, C);
        [
          !H.fallback || P(H.fallback.rect, pl(H.fallback.shot)),
          P(H.rect, pl(H.shot)),
          !H.fallback || P(fe, pl(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const H = e.__panoLastCutoutShot;
      H ? (e.__panoPreviewView = Dy(H, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), _ ? P(b, jl(e.__panoPreviewView, l, u)) || (U = "loading") : g ? U = "loading" : U = "empty";
    }
    _ || n.release(), n.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), U === "loading" ? (Du(e, !1), qs(e, !0, X)) : U === "empty" ? (Du(e, !0), qs(e, !1, "")) : (Du(e, !1), qs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let x = !1;
  (!g || _) && (S = Hm(e, o, g), !S.background && !S.layers.length ? (n.release(), x = !0) : x = P(b, jl(e.__panoPreviewView, l, u)));
  const v = !x && !n.failed;
  qs(e, v, v ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), v && s2(d, b, jm(t, b));
  const F = Cf(e, l, u);
  !g && x && k2(d, F, jm(t, b));
  const z = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), B = _f(o, ql(e)), I = x ? B.find((C) => String((C == null ? void 0 : C.id) || "") === z && (C == null ? void 0 : C.visible) !== !1) : null;
  x && B.filter((C) => C !== I && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !Xl(ds(e, C.id, null, { external: !0 }))).forEach((C) => b2(d, C, F)), I && v2(d, I, F);
}
function Gm(e, t, n, r, o = 1) {
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
function k2(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push($n(b, u));
    Gm(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push($n(u, b));
    Gm(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
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
function If(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function M2(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Zn(e, t) {
  return M2(e, t) ? !1 : (If(e), !0);
}
function Km() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function N2(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function P2(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Uy(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function A2(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, l;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Bm(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && C2(e, 180, t);
    }
  };
}
function C2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ua(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const I2 = /* @__PURE__ */ new WeakMap();
function eb(e, t) {
  return hy(I2, e, t) ? !1 : (t2(e, t), Zy(e), Ua(e), !0);
}
async function E2(e) {
  var n, r;
  const t = await aM(e, Lt, Kt);
  t && (eb(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function O2(e, t = {}) {
  var _o;
  const n = t.__allowStandalone === !0, r = Yy(e);
  if (r && !n) {
    Ad(e);
    return;
  }
  r && P2(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: $m(e)
  }, u = "dom", d = l.signature || $m(e);
  if (Number(e.__panoRebindGeneration || 0), Pf(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Nf(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (_o = e.__panoDomPreview) != null && _o.widget || (e.__panoLegacyPreviewHooked && vl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, _ = b ? 0 : NM, S = document.createElement("div");
  if (zN(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const j = Wl(kf(
      e.addDOMWidget(Mf(), "preview", S, Bm(e, null))
    ));
    Ua(e), e.__panoDomPreview = { widget: j, root: S, requestDraw: () => {
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
  const F = m0(S), z = document.createElement("div");
  z && (z.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(z)), jN(e, 120, 120), Ua(e);
  let B = null;
  try {
    A2(e, g, () => {
      var j, he;
      return (he = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : he.call(j);
    }), B = Wl(kf(e.addDOMWidget(
      Mf(),
      "preview",
      S,
      Bm(
        e,
        () => {
          var j, he;
          return (he = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : he.call(j);
        },
        g,
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
    I.destroyed || (I.needsDraw = !0, !I.inTick && !I.raf && (I.raf = requestAnimationFrame(Xn)));
  }, O = oy(V), $ = /* @__PURE__ */ pa(o ? { ...Cy(Ln(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Fy(Ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((j) => ({ value: j, label: j }))
  });
  let G = null;
  if (o && e.__panoSceneStateV2) {
    const [j, he] = [0, 1].map(() => {
      const Ee = document.createElement("video");
      return Ee.playsInline = !0, Ee.preload = "auto", Ee.crossOrigin = "anonymous", Ee.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", P.appendChild(Ee), Ee;
    }), Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const Ae = document.createElement("canvas");
    Ae.__panoFrameIdx = 0;
    const je = kM({
      video: j,
      stickerVideo: he,
      createImage: (Ee, $e) => {
        const gt = new Image();
        return gt.onload = $e, gt.onerror = $e, gt.src = Ee, gt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ee) => requestAnimationFrame(Ee),
        cancelFrame: (Ee) => cancelAnimationFrame(Ee)
      },
      readState: () => Ln(e),
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var $e;
        if (!(j.videoWidth > 0 && j.videoHeight > 0)) return;
        const Ee = Math.min(1, VN / j.videoWidth);
        Oe.width = Math.round(j.videoWidth * Ee), Oe.height = Math.round(j.videoHeight * Ee), ($e = Oe.getContext("2d")) == null || $e.drawImage(j, 0, 0, Oe.width, Oe.height), Oe.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Ee;
        he.videoWidth > 0 && he.videoHeight > 0 && (Ae.width = he.videoWidth, Ae.height = he.videoHeight, (Ee = Ae.getContext("2d")) == null || Ee.drawImage(he, 0, 0), Ae.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        $.playing = je.playing, V();
      }
    });
    G = { playback: je, video: j, still: Oe, stickerVideo: he, stickerStill: Ae, stickerSource: "" }, e.__panoSurfacePlayback = G;
  }
  const ee = () => {
    var gt;
    const { playback: j, still: he, stickerStill: Oe } = G, Ae = SM(P, !!((gt = e.flags) != null && gt.collapsed)), je = j.source, Ee = Ae ? w2(e) : null, $e = j.follow({
      shown: Ae,
      sources: Ae ? _2(e) : [],
      state: Ln(e),
      sticker: Ee
    });
    ((Ee == null ? void 0 : Ee.src) || "") !== G.stickerSource && (G.stickerSource = (Ee == null ? void 0 : Ee.src) || "", Oe.width = 0), j.source !== je && (he.width = 0, he.__panoFrameIdx = 0), $.playable = $e, $.playing = j.playing;
  }, _e = () => G == null ? void 0 : G.playback.pause();
  let T = null;
  const C = (o ? wM : OM)({
    readState: () => Ln(e),
    publishLiveState: (j) => {
      j ? (T = j, e.__panoLiveStateOverride = j) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (j) => {
      var Ae, je, Ee, $e;
      const he = ia(e, "state_json");
      if (!he) return;
      U0(e, j.active);
      const Oe = Y0(e, j);
      X0(e, Oe, String(he.value ?? "")) || (he.value = Oe, (Ae = he.callback) == null || Ae.call(he, Oe), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), ($e = (Ee = e.graph) == null ? void 0 : Ee.setDirtyCanvas) == null || $e.call(Ee, !0, !0));
    },
    onChange: (j) => Object.assign($, j)
  }), ue = o ? Gy(e, (j = "sync", he = null) => {
    var fn;
    if (!o || !e.graph || !C || C.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const dn = wn(e, "external-sticker"), $i = Ln(e).stickers.find((At) => At.source.kind === "port");
      return C.apply({
        type: "sync-port",
        value: Py(e, {
          pose: dn ? ts(e, "pano_sticker_input_pose", he) : null,
          image: $i ? ds(e, $i.id, null, { external: !0 }) : null
        })
      });
    }
    const Oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((dn) => String((dn == null ? void 0 : dn.name) || "") === "sticker_image") : -1, Ae = Oe >= 0 ? ((fn = e.getInputLink(Oe)) == null ? void 0 : fn.id) ?? null : null;
    if (Ae == null)
      return C.apply({ type: "sync-external", value: { connected: !1 } });
    if (!wn(e, "external-sticker")) return !1;
    const je = ts(e, "pano_sticker_input_pose", he), Ee = Array.isArray(je) ? je[0] : je, $e = String(ts(e, "pano_sticker_input_state_hash", he) ?? ""), gt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Vt = Ln(e), hn = (Array.isArray(Vt == null ? void 0 : Vt.stickers) ? Vt.stickers : []).find((dn) => String((dn == null ? void 0 : dn.id) || "") === "sticker_image_1"), rn = ds(e, "sticker_image_1", null, { external: !0 }), gi = Ee && typeof Ee == "object" ? Ee : hn || { yaw_deg: gt.yaw, pitch_deg: gt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return C.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ae,
        stateHash: $e,
        pose: gi,
        imageWidth: Number((rn == null ? void 0 : rn.naturalWidth) || (rn == null ? void 0 : rn.width) || 0),
        imageHeight: Number((rn == null ? void 0 : rn.naturalHeight) || (rn == null ? void 0 : rn.height) || 0)
      }
    });
  }) : () => {
  };
  let fe = 0;
  const U = async (j) => {
    if (!o || !C || !br(j)) return !1;
    _e();
    const he = `asset_${Math.random().toString(16).slice(2, 10)}`, Oe = `st_${Math.random().toString(16).slice(2, 10)}`, Ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    fe += 1, $.importing = !0;
    const je = Ba(e, `add:${he}`, async () => {
      const Ee = await Wa(j), $e = await Qi(j, {
        fetchApi: (gt, Vt) => Kt.fetchApi(gt, Vt)
      });
      return Ce(), C.apply({
        type: "add-sticker",
        value: {
          stickerId: Oe,
          assetId: he,
          asset: $e,
          imageWidth: Ee.width,
          imageHeight: Ee.height,
          yaw_deg: Number(Ae.yaw || 0),
          pitch_deg: Number(Ae.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      fe = Math.max(0, fe - 1), $.importing = fe > 0, V();
    }
  };
  let X = null, H = null, A = null, te = !1;
  const Y = () => {
    var j;
    return A && (clearTimeout(A), A = null), te ? (te = !1, ((j = C == null ? void 0 : C.commitGesture) == null ? void 0 : j.call(C)) ?? !1) : !1;
  }, Ce = () => {
    var Ae, je, Ee;
    const j = Y(), he = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    if (X = null, H = null, he != null) {
      try {
        (Ae = x.hasPointerCapture) != null && Ae.call(x, he) && ((je = x.releasePointerCapture) == null || je.call(x, he));
      } catch {
      }
      x.style.cursor = "grab";
    }
    const Oe = ((Ee = C == null ? void 0 : C.commitGesture) == null ? void 0 : Ee.call(C)) ?? !1;
    return j || Oe;
  }, Fe = () => {
    var Ae, je, Ee;
    const j = Y(), he = X == null ? void 0 : X.pointerId;
    if (X = null, he != null) {
      try {
        (Ae = x.hasPointerCapture) != null && Ae.call(x, he) && ((je = x.releasePointerCapture) == null || je.call(x, he));
      } catch {
      }
      x.style.cursor = "grab";
    }
    const Oe = ((Ee = C == null ? void 0 : C.cancelGesture) == null ? void 0 : Ee.call(C)) ?? !1;
    return j || Oe;
  }, kt = () => Ce();
  C && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(kt));
  let mt = null, ln = !1;
  if (z && C)
    try {
      kd(), mt = Jf(o ? iN : qM, {
        model: $,
        onAction: (j) => {
          var Ae, je;
          if ((j == null ? void 0 : j.type) === "toggle-playback") {
            Ce(), G == null || G.playback.toggle();
            return;
          }
          if (_e(), (j == null ? void 0 : j.type) === "open-editor") {
            Ce(), o || ($.aspectOpen = !1), (Ae = e.__panoOpenEditor) == null || Ae.call(e);
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
            $.aspectOpen = !$.aspectOpen;
            return;
          }
          if ((j == null ? void 0 : j.type) === "close-aspect") {
            $.aspectOpen = !1;
            return;
          }
          let he = j;
          if ((j == null ? void 0 : j.type) === "add-frame") {
            const Ee = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            he = {
              ...j,
              ...AM(Ee, {
                width: x.width,
                height: x.height
              })
            };
          } else if ((j == null ? void 0 : j.type) === "delete-frame") {
            const Ee = po(Ln(e));
            Ee && (e.__panoPreviewView = Dy(Ee, {
              width: x.width,
              height: x.height
            }));
          }
          const Oe = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          $.aspectOpen = !1, C.apply({ ...he, safeRect: Oe }) && V();
        }
      }), mt.mount(z), ln = !0;
    } catch {
      mt = null, ln = !1;
    }
  const at = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    G && ee(), V();
  }) : null;
  at == null || at.observe(P);
  const Xn = (j) => {
    var Oe, Ae;
    I.raf = 0, I.inTick = !0;
    let he = !1;
    try {
      he = Ot.stepInertia(j), (I.needsDraw || he) && (I.needsDraw = !1, G && ee(), (Oe = e.flags) != null && Oe.collapsed || S2(e, x, O), $.viewUnavailable = O.failed);
    } finally {
      I.inTick = !1;
    }
    (he || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(Xn)), $N() && (!e.__panoDebugLastTs || j - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = j, e.__panoPreviewMode, Nf(e), $a(S), $a(P), $a(x), $a(S.parentElement), $a((Ae = S.parentElement) == null ? void 0 : Ae.parentElement), Number(x.width || 0), Number(x.height || 0), void 0);
  }, Ot = td({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (j) => {
      e.__panoPreviewView = j;
    },
    getViewportSize: () => {
      const j = x.getBoundingClientRect();
      return {
        w: Math.max(1, Number(j.width || x.clientWidth || 0)),
        h: Math.max(1, Number(j.height || x.clientHeight || 0))
      };
    },
    getInvert: () => {
      const j = Vm();
      return {
        x: j.invert_view_x ? -1 : 1,
        y: j.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), Zt = o ? P : S, cn = (j) => {
    const he = x.getBoundingClientRect();
    return {
      x: (Number(j.clientX) - he.left) * (x.width / Math.max(1, he.width)),
      y: (Number(j.clientY) - he.top) * (x.height / Math.max(1, he.height))
    };
  }, mi = (j) => {
    var Ae, je;
    if (!o || !a) return;
    const he = Ln(e), Oe = Fm(
      _f(he, ql(e)),
      String(((Ae = he == null ? void 0 : he.active) == null ? void 0 : Ae.selected_sticker_id) || ""),
      cn(j),
      Cf(e, x.width, x.height)
    );
    if (!Oe) {
      x.style.cursor = "grab";
      return;
    }
    if (((je = Oe.item) == null ? void 0 : je.locked) === !0) {
      x.style.cursor = "default";
      return;
    }
    x.style.cursor = Oe.hit.cursor || "default";
  };
  x.addEventListener("pointerdown", (j) => {
    var gt, Vt, hn, rn, gi, wo, fn, dn, $i, At, Gr;
    if (!Zn(j, Zt) || j.button !== 0) return;
    if (!o) {
      const En = po(Ln(e)), sr = e.__panoCutoutNodeFrame;
      if (!En) {
        (gt = S.focus) == null || gt.call(S, { preventScroll: !0 }), (Vt = x.setPointerCapture) == null || Vt.call(x, j.pointerId), x.style.cursor = "grabbing", Ot.startDrag(j.clientX, j.clientY, j.pointerId);
        return;
      }
      if (En.locked === !0 || !sr || !C) return;
      const xo = cn(j);
      let lr;
      if (j.shiftKey) {
        const Kr = Ry({
          frame: sr,
          point: xo,
          startRollDeg: Number(En.roll_deg ?? En.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Kr) return;
        lr = { kind: "roll", pointerId: j.pointerId, rollGesture: Kr };
      } else {
        const Kr = ((hn = Ln(e)) == null ? void 0 : hn.ui_settings) || Vm();
        lr = {
          kind: "pan",
          pointerId: j.pointerId,
          startPoint: xo,
          startShot: { ...En },
          focalPx: lo(sr, En),
          invertX: Kr.invert_view_x === !0,
          invertY: Kr.invert_view_y === !0
        };
      }
      Ce(), (rn = S.focus) == null || rn.call(S, { preventScroll: !0 }), (gi = x.setPointerCapture) == null || gi.call(x, j.pointerId), x.style.cursor = "grabbing", C.beginGesture(), X = lr;
      return;
    }
    if (!a) return;
    const he = cn(j), Oe = Ln(e), Ae = String(((wo = Oe == null ? void 0 : Oe.active) == null ? void 0 : wo.selected_sticker_id) || ""), je = Cf(e, x.width, x.height);
    (fn = S.focus) == null || fn.call(S, { preventScroll: !0 });
    const Ee = () => Fm(_f(Oe, ql(e)), Ae, he, je);
    let $e = Ee();
    if ($e && (G != null && G.playback.playing) && (_e(), $e = Ee()), $e && C) {
      if (Ot.stopMotion(), Ce(), String(((dn = $e.item) == null ? void 0 : dn.id) || "") !== Ae && C.apply({ type: "select-sticker", id: $e.item.id }), (($i = $e.item) == null ? void 0 : $i.locked) === !0) {
        V();
        return;
      }
      const En = he, sr = $e.geometry.center;
      H = {
        active: !0,
        kind: $e.hit.kind,
        pointerId: j.pointerId,
        startPoint: En,
        startCenter: { ...sr },
        startSticker: { ...$e.item },
        startDistance: Math.max(1, Math.hypot(En.x - sr.x, En.y - sr.y)),
        startAngle: Math.atan2(En.y - sr.y, En.x - sr.x),
        projection: je
      }, C.beginGesture(), (At = x.setPointerCapture) == null || At.call(x, j.pointerId), x.style.cursor = $e.hit.kind === "rotate" ? "grabbing" : $e.hit.kind === "move" ? "move" : $e.hit.cursor, V();
      return;
    }
    (Gr = x.setPointerCapture) == null || Gr.call(x, j.pointerId), x.style.cursor = "grabbing", Ot.startDrag(j.clientX, j.clientY, j.pointerId);
  }), x.addEventListener("pointermove", (j) => {
    if (!o) {
      if (!X) {
        if (!Ot.state.drag.active) return;
        Zn(j, Zt), Ot.moveDrag(j.clientX, j.clientY, "pano");
        return;
      }
      if (X.pointerId !== j.pointerId || !C) return;
      if (Zn(j, Zt), X.kind === "pan") {
        const Oe = cn(j);
        C.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Oe.x - X.startPoint.x,
          dy: Oe.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const he = Vy(X.rollGesture, cn(j), j);
      if (!he) return;
      X.rollGesture = he.gesture, C.updateGesture({ type: "set-roll", value: he.rollDeg });
      return;
    }
    if (!H && !Ot.state.drag.active) {
      mi(j);
      return;
    }
    if (H) {
      if (H.pointerId !== j.pointerId || !C) return;
      Zn(j, Zt);
      const he = cn(j);
      let Oe = H.startSticker;
      if (H.kind === "move")
        Oe = lN(
          H.startSticker,
          {
            x: H.startCenter.x + he.x - H.startPoint.x,
            y: H.startCenter.y + he.y - H.startPoint.y
          },
          H.projection
        );
      else if (H.kind === "scale") {
        const Ae = Math.hypot(he.x - H.startCenter.x, he.y - H.startCenter.y);
        Oe = cN(H.startSticker, H.startDistance, Ae);
      } else if (H.kind === "rotate") {
        const Ae = Math.atan2(he.y - H.startCenter.y, he.x - H.startCenter.x);
        Oe = uN(H.startSticker, H.startAngle, Ae, j.shiftKey === !0);
      }
      C.updateGesture({ type: "set-transform", value: Oe }), V();
      return;
    }
    !a || !Ot.state.drag.active || (Zn(j, Zt), Ot.moveDrag(j.clientX, j.clientY, "pano"));
  });
  const R = () => {
    var he, Oe;
    if (!X && !H) {
      if (!Ot.state.drag.active) return;
      Ot.endDrag(), x.style.cursor = "grab", V();
      return;
    }
    if (!C) return;
    const j = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    X = null, H = null;
    try {
      (he = x.hasPointerCapture) != null && he.call(x, j) && ((Oe = x.releasePointerCapture) == null || Oe.call(x, j));
    } catch {
    }
    C.cancelGesture(), x.style.cursor = "grab", V();
  }, W = (j, he = !1) => {
    var Oe, Ae, je, Ee;
    if (!o) {
      if (!X) {
        if (!Ot.state.drag.active) return;
        Zn(j, Zt), (Oe = x.releasePointerCapture) == null || Oe.call(x, j.pointerId), x.style.cursor = "grab", Ot.endDrag(), V();
        return;
      }
      if (X.pointerId !== j.pointerId || !C) return;
      Zn(j, Zt), X = null, (Ae = x.releasePointerCapture) == null || Ae.call(x, j.pointerId), x.style.cursor = "grab", he ? C.cancelGesture() : C.commitGesture(), mi(j), V();
      return;
    }
    if (H) {
      if (H.pointerId !== j.pointerId || !C) return;
      Zn(j, Zt), H = null, (je = x.releasePointerCapture) == null || je.call(x, j.pointerId), x.style.cursor = "grab", he ? C.cancelGesture() : C.commitGesture(), V();
      return;
    }
    !a || !Ot.state.drag.active || (Zn(j, Zt), (Ee = x.releasePointerCapture) == null || Ee.call(x, j.pointerId), x.style.cursor = "grab", Ot.endDrag(), V());
  };
  x.addEventListener("pointerup", W), x.addEventListener("pointercancel", (j) => W(j, !0)), x.addEventListener("lostpointercapture", R), x.addEventListener("pointerleave", (j) => {
    !o && X || H || Ot.state.drag.active && W(j);
  });
  const Z = (j) => {
    const he = document.activeElement;
    if (he !== S && !S.contains(he)) return;
    if (j.key === "Escape" && (X || H) && C) {
      R(), If(j);
      return;
    }
    if (!o || j.key !== "Delete" && j.key !== "Backspace" || !C) return;
    const Oe = j.target, Ae = String((Oe == null ? void 0 : Oe.tagName) || "").toUpperCase();
    Ae === "INPUT" || Ae === "TEXTAREA" || Oe != null && Oe.isContentEditable || $.canDelete === !0 && (_e(), Ce(), C.apply({ type: "delete-selected" }) && V(), If(j));
  };
  window.addEventListener("keydown", Z, !0);
  const ve = TN({
    requestFrame: (j) => requestAnimationFrame(j),
    cancelFrame: (j) => cancelAnimationFrame(j),
    restore: (j) => N2(j)
  }), ge = (j) => {
    var Oe, Ae, je, Ee, $e, gt;
    if (!Zn(j, Zt)) return;
    if (!o) {
      const Vt = po(Ln(e));
      if (Vt && Vt.locked !== !0 && C) {
        const hn = El(j);
        hn !== 0 && (te || (Ce(), C.beginGesture(), te = !0), C.updateGesture({
          type: "step-fov",
          direction: hn
        }) ? (A && clearTimeout(A), A = setTimeout(Y, 180), V()) : C.hasGestureChanges() || (C.cancelGesture(), te = !1));
      } else if (!Vt) {
        const hn = Km();
        Ot.applyWheelEvent(j) && V(), ve.schedule(hn);
      }
      (Oe = j.preventDefault) == null || Oe.call(j), (Ae = j.stopPropagation) == null || Ae.call(j), (je = j.stopImmediatePropagation) == null || je.call(j);
      return;
    }
    if (!a) return;
    const he = Km();
    Ot.applyWheelEvent(j) && V(), (Ee = j.preventDefault) == null || Ee.call(j), ($e = j.stopPropagation) == null || $e.call(j), (gt = j.stopImmediatePropagation) == null || gt.call(j), ve.schedule(he);
  }, ye = o ? [P, x] : [P];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((j) => {
    ye.forEach((he) => he.addEventListener(j, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((j) => {
    x.addEventListener(j, (he) => Zn(he, Zt)), P.addEventListener(j, (he) => Zn(he, Zt));
  });
  const Me = ia(e, "state_json");
  let Ne = null, we = null;
  Me && !Me.__panoPreviewPatchedCb && (Ne = Me.callback, we = (j) => {
    const he = Ne ? Ne(j) : void 0;
    return V(), he;
  }, Me.callback = we, Me.__panoPreviewPatchedCb = we);
  const de = ia(e, "bg_color");
  let Re = null, Ie = null;
  de && !de.__panoPreviewPatchedCb && (Re = de.callback, Ie = (j) => {
    const he = Re ? Re(j) : void 0;
    return V(), he;
  }, de.callback = Ie, de.__panoPreviewPatchedCb = Ie);
  const Ve = e.onRemoved, Be = e.onResize, p = e.onExecuted, Le = e.onDragOver, ct = e.onDragDrop;
  let We = null;
  const Rt = () => {
    o && ($.dropActive = !0, We && clearTimeout(We), We = setTimeout(() => {
      We = null, $.dropActive = !1;
    }, 140));
  }, un = o ? function(j) {
    return (Le ? Le.apply(this, arguments) : !1) === !0 ? !0 : Nd(j == null ? void 0 : j.dataTransfer) ? (Rt(), !0) : !1;
  } : null, nn = o ? function(j) {
    var Ae;
    if ((ct ? ct.apply(this, arguments) : !1) === !0) return !0;
    const Oe = Array.from(((Ae = j == null ? void 0 : j.dataTransfer) == null ? void 0 : Ae.files) || []).find((je) => br(je));
    return Oe ? (We && clearTimeout(We), We = null, $.dropActive = !1, U(Oe), !0) : !1;
  } : null;
  o && (e.onDragOver = un, e.onDragDrop = nn);
  const jt = o ? FN(S, {
    onActive: (j) => {
      if (j) {
        Rt();
        return;
      }
      We && clearTimeout(We), We = null, $.dropActive = !1;
    },
    onDrop: (j) => {
      U(j);
    }
  }) : () => {
  }, qn = function(j) {
    e.__panoOutputFromRun = !0;
    const he = eb(e, j);
    si(e, he ? "executed" : "sync", j), V();
    const Oe = p ? p.apply(this, arguments) : void 0;
    return Ua(e), Oe;
  };
  e.onExecuted = qn;
  const Pe = e.onConnectionsChange, Mt = function(j, he) {
    const Oe = _m(e, j, he, md), Ae = _m(e, j, he, Vi), je = arguments, Ee = Pe ? Pe.apply(this, je) : void 0, $e = () => {
      I.destroyed || (Ae && a2(e), Oe && si(e, "connection-change"), Ua(e), V());
    };
    return $e(), queueMicrotask($e), Ee;
  };
  e.onConnectionsChange = Mt;
  const Hr = function() {
    const j = Be ? Be.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), j;
  };
  e.onResize = Hr;
  const Sr = function() {
    return vo(), Af.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = Sr;
  const vo = () => {
    var j, he, Oe, Ae, je, Ee, $e, gt, Vt;
    I.destroyed = !0, (j = at == null ? void 0 : at.disconnect) == null || j.call(at), o ? Ce() : Fe(), x.removeEventListener("lostpointercapture", R), jt(), F(), window.removeEventListener("keydown", Z, !0), (Oe = (he = e.__panoStateFlushers) == null ? void 0 : he.delete) == null || Oe.call(he, kt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ae = C == null ? void 0 : C.destroy) == null || Ae.call(C), (je = mt == null ? void 0 : mt.unmount) == null || je.call(mt), G && (G.playback.dispose(), G.video.remove(), G.stickerVideo.remove(), e.__panoSurfacePlayback === G && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, ($e = (Ee = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ee.dispose) == null || $e.call(Ee), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ue(), ve.dispose(), We && clearTimeout(We), We = null, Pd.disposeOwner(e), oa(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((gt = e.__panoCutoutNodeSurface) == null ? void 0 : gt.session) === C && (e.__panoCutoutNodeSurface = null), ((Vt = e.__panoStickersNodeSurface) == null ? void 0 : Vt.session) === C && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Hr && (e.onResize = Be), e.onExecuted === qn && (e.onExecuted = p), e.onConnectionsChange === Mt && (e.onConnectionsChange = Pe), we && (Me == null ? void 0 : Me.callback) === we && (Me.callback = Ne), we && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === we && delete Me.__panoPreviewPatchedCb, Ie && (de == null ? void 0 : de.callback) === Ie && (de.callback = Re), Ie && (de == null ? void 0 : de.__panoPreviewPatchedCb) === Ie && delete de.__panoPreviewPatchedCb, e.onDragOver === un && (e.onDragOver = Le), e.onDragDrop === nn && (e.onDragDrop = ct), e.onRemoved === Sr && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = vo, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = C && ln && !o ? { session: C, model: $ } : null, e.__panoStickersNodeSurface = C && ln && o ? { session: C, model: $ } : null, e.__panoDomPreview = {
    widget: B,
    root: S,
    canvas: x,
    requestDraw: V,
    state: I,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Af.register(e), e.graph && si(e, "attach"), V();
}
function Wm(e, t = {}) {
  Xy(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Um(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Yy(e) && !n) {
    Ad(e);
    return;
  }
  Xy(e).attach(t);
}
function F2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function T2(e, t = 1, n = ym) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : ym, _ = Math.max(u, d), S = _ > 0 ? Math.min(1, g / _) : 1;
  return {
    width: Math.max(1, Math.round(u * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function D2({
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
  }, g = () => b();
  return (P = t == null ? void 0 : t.addEventListener) == null || P.call(t, "fullscreenchange", g), b(), { toggle: async () => {
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
      if (l = !0, (x = t == null ? void 0 : t.removeEventListener) == null || x.call(t, "fullscreenchange", g), d())
        try {
          const z = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (F = z == null ? void 0 : z.catch) == null || F.call(z, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const L2 = { class: "pano-preview-node-surface" }, R2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (re(), le("div", L2, [
      De(an, {
        icon: e.model.fullscreen ? tt(ke).fullscreen_close : tt(ke).fullscreen,
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
      e.model.viewUnavailable ? (re(), jr(wd, { key: 0 })) : ut("", !0)
    ]));
  }
}, Js = 140, V2 = 180, Ym = 40, Lu = 10;
function Xm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function qm(e, t) {
  const n = Xm(e), r = Xm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Jm(e) {
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
  return typeof ((a = Kt) == null ? void 0 : a.apiURL) == "function" ? Kt.apiURL(o) : o;
}
function aa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return aa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Jm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = aa(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Jm(e);
}
function tb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function $2(e) {
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
function Ef(e) {
  var o;
  const t = (o = vr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (qm(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (qm(a, n)) return t[a];
  return null;
}
function z2(e) {
  var r, o;
  const t = Ef(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = aa(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function j2(e, t = "erp_image") {
  var P, x, v, F, z, B, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, O) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (x = (P = vr) == null ? void 0 : P.graph) == null ? void 0 : x.getNodeById) == null ? void 0 : v.call(x, a), u = Ef(a), d = Ef(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (z = u == null ? void 0 : u.ui) == null ? void 0 : z.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const O of V) {
        const $ = aa(O);
        if ($) return $;
      }
  let g = [];
  try {
    g = typeof ((B = vr) == null ? void 0 : B.getNodeImageUrls) == "function" ? vr.getNodeImageUrls(l) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const V of g) {
      const O = aa(V);
      if (O) return O;
    }
  if (l) {
    const V = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const O of V) {
      const $ = aa(O);
      if ($) return $;
    }
  }
  const _ = (I = l == null ? void 0 : l.widgets) == null ? void 0 : I.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), S = String((_ == null ? void 0 : _.value) || "").trim();
  return S ? Kt.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`) : "";
}
function Ru(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Zm(e, t, n, r, o, a, l) {
  var b, g, _;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !tb(a) || n <= 1 || r <= 1) {
    Ru(t, n, r);
    return;
  }
  if (l.failed) {
    Ru(t, n, r);
    return;
  }
  const u = Number(((_ = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: jl(o, n, r),
    background: { media: a, revision: $2(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Ru(t, n, r);
}
function Qm(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class H2 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = oy(() => this.requestDraw()), this.controller = td({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Gt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Q(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Q(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Js}px`,
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
          return Js;
        },
        getHeight() {
          return Js;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Wl(kf(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Js, Number(a.minHeight || 0)),
            minWidth: Math.max(V2, Number(a.minWidth || 0))
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
      return kd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ pa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = D2({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Jf(R2, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = m0(n), t.addEventListener("pointerdown", (a) => {
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
      F2(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !tb(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Qm(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, _, S, P;
      const a = f2(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !Qm(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (_ = n == null ? void 0 : n.preventDefault) == null || _.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (P = n == null ? void 0 : n.stopImmediatePropagation) == null || P.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Lu * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - Ym - Lu);
    return { x: Lu, y: Ym, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Zm(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? iy : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = T2(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = z2(this.node);
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
    const n = j2(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Zm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, g, _, S, P, x, v, F, z;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (_ = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || _.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (x = (P = this.root) == null ? void 0 : P.remove) == null || x.call(P);
    } catch {
    }
    try {
      Wy(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((z = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : z.call(F, (B) => (B == null ? void 0 : B.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function G2(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new H2(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function nb(e, t, n) {
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
function Id(e) {
  return !!(e != null && e.prototype);
}
function ps(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function K2(e, t = {}) {
  Id(e) || G2(e, {
    ...t,
    onOpen: ps(e, t.onOpen)
  });
}
function B2(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Id(e)) {
    Um(e, {
      ...r,
      onOpen: ps(e, t.onOpen)
    });
    return;
  }
  nb(e, "stickers_node_preview", (o) => {
    Um(o, {
      ...r,
      onOpen: ps(o, t.onOpen)
    });
  });
}
function W2(e, t = {}) {
  if (!Id(e)) {
    Wm(e, {
      ...t,
      onOpen: ps(e, t.onOpen)
    });
    return;
  }
  nb(e, "cutout_preview", (n) => {
    Wm(n, {
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
function eg(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function U2(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), l = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((_) => {
      r.push(String(_ || ""));
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
      const b = r.length, g = Math.max(0, b - l), _ = o >= 0 ? Math.max(0, Math.min(o, g)) : g, S = r.slice(_, _ + l), P = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - _));
      return {
        version: 1,
        entries: S,
        index: P
      };
    },
    hydrate: u
  };
}
function Yi(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function Y2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function X2({
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
    historyEntries: Array.from({ length: 8 }, (O, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const _ = ((I = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : I.id) || "", S = !_, P = a(e.customPaintColor), x = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, z = d(), B = Array.from({ length: 8 }, (O, $) => e.customPaintHistory[$] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: _,
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
    historyEntries: B.map((O, $) => ({
      index: $,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function q2({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function J2({
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
  normalizeCoverageValue: g
}) {
  return {
    coverage: { value: g(e), disabled: !!t },
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
function Z2({
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
  isExternalSticker: g,
  isStickerHidden: _,
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
    ], g(t) || (x.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: P.duplicate }), x.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: P.replace_image })), g(t)) {
      const $ = S(), G = _(t);
      x.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: $ ? "Back to initial position" : "Already at initial position",
        icon: P.back_initial,
        disabled: !$
      }), x.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? P.eye : P.eye_dashed
      });
    }
    x.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? P.lock_open : P.lock_closed }), g(t) || x.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u });
  } else
    x = [
      {
        key: "aspect",
        kind: "aspect",
        icon: P.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map(($) => ({ value: $, label: $, active: d === $ }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: P.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u }
    ];
  const v = o.corners.map(($) => ({ x: Number($ == null ? void 0 : $.x), y: Number($ == null ? void 0 : $.y) })).filter(($) => Number.isFinite($.x) && Number.isFinite($.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = v.map(($) => $.x), z = v.map(($) => $.y), B = Math.min(...F), I = Math.max(...F), V = Math.min(...z), O = Math.max(...z);
  return {
    visible: !0,
    left: (B + I) * 0.5,
    top: O + 18,
    items: x,
    anchor: { minX: B, maxX: I, minY: V, maxY: O }
  };
}
const Q2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function eP(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: g = !1 }) {
  const _ = (x, v, F, z, B) => {
    const I = (V) => (r == null ? void 0 : r.owner) === x && r.lane === V ? r.frames.map((O) => O + B) : [];
    return {
      id: x,
      label: F,
      clip: z,
      selected: x === o,
      open: l.has(x),
      keyed: RS(v, t - B),
      keys: LS(v).map((V) => ({ frame: V.frame + B, full: V.full })),
      selectedFrames: I(null),
      lanes: yo(v).map((V) => ({
        key: `${x}:${V}`,
        lane: V,
        label: Q2[V],
        frames: v[V].keyframes.map((O) => O.frame + B),
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
    fpsLocked: g,
    length: e.timeline.length,
    rows: [
      _("camera", e.camera, "Camera", null, 0),
      ...[...S, ...P].map((x) => {
        const { start: v, in: F, duration: z } = x.clip;
        return _(x.id, x, gf(x), { start: v, end: z === null ? null : v + z }, v - F);
      })
    ]
  };
}
function tP(e, t, n, r) {
  const o = zS(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const nP = { class: "pano-floating-right" }, rP = ["data-settled"], iP = ["data-ready", "data-settled"], oP = ["aria-label", "data-tip"], aP = {
  key: 1,
  class: "pano-camera-preview-label"
}, sP = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le(Ue, null, [
      K("div", nP, [
        (re(!0), le(Ue, null, yt(e.buttons, (r) => wr((re(), jr(an, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"])), [
          [ci, r.visible !== !1]
        ])), 128))
      ]),
      wr(K("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        K("div", {
          class: ot(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: St({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = K("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            K("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (re(), le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Et, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, oP)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (re(), le("div", aP, nt(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, iP)
      ], 8, rP), [
        [ci, e.preview.visible]
      ])
    ], 64));
  }
}, lP = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, cP = ["y2", "transform"], uP = ["transform"], fP = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => wr((re(), le("div", {
      class: ot(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (re(), le("svg", lP, [
        a[1] || (a[1] = K("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (re(!0), le(Ue, null, yt(tt(n), (l) => (re(), le("line", {
          key: l,
          class: ot(["pano-frame-roll-knob-tick", { zero: l === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: l % 45 === 0 ? 7 : 6,
          transform: `rotate(${l} 20 20)`
        }, null, 10, cP))), 128)),
        K("g", { transform: r.value }, [...a[0] || (a[0] = [
          K("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, uP),
        a[2] || (a[2] = K("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ci, e.model.visible === !0]
    ]);
  }
}, dP = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le("div", {
      class: ot(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(zy, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(an, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(fP, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, pP = ["aria-label"], hP = { class: "pano-canvas-confirm-title" }, mP = { class: "pano-canvas-confirm-text" }, gP = { class: "pano-canvas-confirm-actions" }, yP = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, bP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Bt(null), r = /* @__PURE__ */ Bt(null);
    let o = null;
    function a() {
      const _ = r.value;
      return _ ? Array.from(_.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function l(_) {
      const S = r.value;
      if (!S) return;
      const P = S.querySelector(`[data-action='${_}']`);
      P instanceof HTMLButtonElement && P.click();
    }
    function u() {
      var v;
      const _ = r.value;
      if (!_) return;
      const S = _.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const x = a()[0] || _;
      (v = x == null ? void 0 : x.focus) == null || v.call(x);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(_) {
      var z;
      if (_.defaultPrevented) return;
      if (_.key === "Escape") {
        _.preventDefault(), _.stopPropagation(), l("confirm-cancel");
        return;
      }
      if (_.key !== "Tab") return;
      const S = a(), P = r.value;
      if (!S.length) {
        _.preventDefault(), (z = P == null ? void 0 : P.focus) == null || z.call(P);
        return;
      }
      const x = S[0], v = S[S.length - 1], F = document.activeElement;
      if (_.shiftKey) {
        (F === x || F === P || !(P != null && P.contains(F))) && (_.preventDefault(), v.focus());
        return;
      }
      (F === v || !(P != null && P.contains(F))) && (_.preventDefault(), x.focus());
    }
    function g(_) {
      _.target === n.value && l("confirm-cancel");
    }
    return ao(() => t.model.visible, (_, S) => {
      if (_) {
        o = document.activeElement, oc(() => {
          u();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), gs(() => {
      d();
    }), (_, S) => e.model.visible === !0 ? (re(), le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: It(g, ["self"])
    }, [
      K("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        K("div", hP, nt(e.model.title), 1),
        K("div", mP, nt(e.model.text), 1),
        K("div", gP, [
          S[0] || (S[0] = K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          K("button", yP, nt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, pP)
    ], 512)) : ut("", !0);
  }
}, vP = ["data-paint-pane"], _P = ["hidden"], wP = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], xP = ["aria-pressed", "disabled"], SP = ["hidden"], kP = { class: "pano-paint-color-pop-head" }, MP = { class: "pano-paint-color-field" }, NP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, PP = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, AP = { class: "pano-paint-color-field" }, CP = { class: "pano-paint-alpha-wrap" }, IP = ["value"], EP = { "data-paint-alpha-value": "" }, OP = ["hidden"], FP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, TP = ["data-paint-history-index", "aria-label", "disabled"], DP = ["data-paint-footer"], LP = ["data-paint-group"], RP = ["hidden"], VP = ["value", "disabled"], $P = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, zP = ["hidden"], jP = {
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
    return (r, o) => (re(), le("div", {
      class: ot(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (re(!0), le(Ue, null, yt(e.panes, (a) => {
        var l;
        return re(), le("div", {
          key: a.key,
          class: ot(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (re(), le("div", {
            key: 0,
            class: ot(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (re(!0), le(Ue, null, yt(e.paintSwatches, (u) => (re(), le("button", {
              key: u.id,
              class: ot(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: St(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, wP))), 128)),
            K("button", {
              class: ot(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: St({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, xP),
            K("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: St({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              K("div", kP, [
                K("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: St({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = K("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              K("div", MP, [
                K("div", NP, [
                  K("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: St({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                K("div", PP, [
                  K("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: St({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              K("label", AP, [
                o[1] || (o[1] = K("span", null, "Opacity", -1)),
                K("div", CP, [
                  K("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, IP),
                  K("span", EP, nt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              K("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                K("div", FP, [
                  (re(!0), le(Ue, null, yt(e.state.historyEntries || [], (u) => (re(), le("button", {
                    key: u.index,
                    class: ot(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: St(n(u.color))
                  }, null, 14, TP))), 128))
                ])
              ], 8, OP)
            ], 12, SP)
          ], 10, _P)) : ut("", !0),
          K("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            K("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (re(!0), le(Ue, null, yt(a.tools, (u) => {
                var d;
                return re(), jr(an, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, LP),
            K("div", {
              class: ot(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              K("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: St({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, VP),
              K("span", $P, nt(e.state.sizeText || "10"), 1)
            ], 10, RP),
            K("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = e.state.clearVisible) == null ? void 0 : l[a.key]) ?? !a.clearHidden)
            }, [
              De(an, {
                icon: tt(ke).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, zP)
          ], 8, DP)
        ], 10, vP);
      }), 128))
    ], 2));
  }
}, HP = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Bt(null), r = /* @__PURE__ */ Bt(null), o = /* @__PURE__ */ Bt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (l, u) => (re(), le(Ue, null, [
      K("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      K("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        K("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, GP = {
  key: 0,
  class: "pano-cutout-menu"
}, KP = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, BP = ["data-aspect"], WP = ["data-action", "aria-label", "data-tip", "disabled"], UP = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: St({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (re(!0), le(Ue, null, yt(e.model.items || [], (r) => (re(), le(Ue, {
        key: r.key
      }, [
        r.kind === "aspect" ? (re(), le("div", GP, [
          K("button", KP, [
            De(Et, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          K("div", {
            class: ot(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (re(!0), le(Ue, null, yt(r.choices || [], (o) => (re(), le("button", {
              key: o.value,
              class: ot(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, nt(o.label), 11, BP))), 128))
          ], 2)
        ])) : (re(), le("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(Et, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, WP))
      ], 64))), 128))
    ], 4));
  }
}, YP = {
  key: 0,
  class: "pano-easing"
}, XP = { class: "pano-section-title" }, qP = { class: "pano-easing-range" }, JP = { class: "pano-easing-modes" }, ZP = ["aria-pressed", "onClick"], QP = ["viewBox"], eA = ["x", "y"], tA = ["x1", "y1", "x2", "y2"], nA = ["d"], rA = ["x1", "y1", "x2", "y2"], iA = ["x1", "y1", "x2", "y2"], oA = ["cx", "cy"], aA = ["cx", "cy"], sA = { class: "pano-easing-note" }, Qr = 132, Xi = 14, lA = {
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
    ], a = /* @__PURE__ */ Bt(null), l = ft(() => {
      var x;
      return Array.isArray((x = n.model) == null ? void 0 : x.easing) ? n.model.easing : null;
    }), u = (x) => Xi + x * Qr, d = (x) => Xi + (1 - x) * Qr, b = ft(() => {
      var B;
      if (((B = n.model) == null ? void 0 : B.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [x, v, F, z] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(x)} ${d(v)} ${u(F)} ${d(z)} ${u(1)} ${d(1)}`;
    }), g = ft(() => l.value ? l.value.map((x) => x.toFixed(2)).join(", ") : "");
    function _(x) {
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
      let z = null;
      const B = (O) => {
        const $ = a.value.getBoundingClientRect(), G = $.width / (Qr + Xi * 2), ee = ((O.clientX - $.left) / G - Xi) / Qr, _e = 1 - ((O.clientY - $.top) / G - Xi) / Qr;
        z = [...z || l.value], z[v] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, z[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, S(z, !1);
      }, I = () => {
        F.removeEventListener("pointermove", B), F.removeEventListener("pointerup", I), F.removeEventListener("pointercancel", I), z && S(z, !0);
      };
      F.addEventListener("pointermove", B), F.addEventListener("pointerup", I), F.addEventListener("pointercancel", I);
    }
    return (x, v) => e.model ? (re(), le("div", YP, [
      K("div", XP, [
        v[2] || (v[2] = K("span", null, "Easing", -1)),
        K("span", qP, nt(e.model.label), 1)
      ]),
      K("div", JP, [
        (re(), le(Ue, null, yt(o, (F) => K("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": _(F) ? "true" : "false",
          onClick: (z) => S(F.easing, !0)
        }, nt(F.label), 9, ZP)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (re(), le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Qr + Xi * 2} ${Qr + Xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        K("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: Qr,
          height: Qr
        }, null, 8, eA),
        K("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, tA),
        K("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, nA),
        l.value ? (re(), le(Ue, { key: 0 }, [
          K("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, rA),
          K("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, iA),
          K("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => P(F, 0))
          }, null, 40, oA),
          K("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => P(F, 2))
          }, null, 40, aA)
        ], 64)) : ut("", !0)
      ], 8, QP)) : ut("", !0),
      K("div", sA, [
        e.model.mixed ? (re(), le(Ue, { key: 0 }, [
          Ha("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (re(), le(Ue, { key: 1 }, [
          Ha("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (re(), le(Ue, { key: 2 }, [
          Ha("Holds the value, then jumps to the next keyframe.")
        ], 64)) : l.value ? (re(), le(Ue, { key: 3 }, [
          Ha("cubic-bezier(" + nt(g.value) + ")", 1)
        ], 64)) : ut("", !0)
      ])
    ])) : ut("", !0);
  }
}, cA = {
  class: "pano-side",
  "data-side": ""
}, uA = { class: "pano-side-head" }, fA = { class: "pano-side-title" }, dA = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, pA = {
  key: 0,
  class: "pano-side-scroll"
}, hA = { class: "pano-inspector" }, mA = { class: "pano-ui-row pano-coverage-row" }, gA = ["data-selected"], yA = ["aria-pressed", "disabled"], bA = ["aria-pressed", "disabled"], vA = {
  key: 0,
  class: "pano-section-title"
}, _A = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, wA = {
  class: "pano-picker",
  "data-picker": "selection"
}, xA = ["disabled"], SA = { class: "pano-picker-label" }, kA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, MA = ["hidden"], NA = ["data-selection-id"], PA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, AA = {
  key: 2,
  class: "pano-state-actions"
}, CA = ["disabled"], IA = ["data-key"], EA = ["min", "max", "step", "value", "disabled", "data-param-key"], OA = ["min", "max", "step", "value", "disabled", "data-param-key"], FA = { class: "pano-visibility-section" }, TA = { class: "pano-visibility-stack" }, DA = ["data-visibility-row"], LA = { class: "pano-visibility-name" }, RA = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, VA = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], $A = ["open"], zA = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, jA = { class: "pano-ui-settings-body" }, HA = { class: "pano-ui-row" }, GA = ["data-selected"], KA = ["aria-pressed"], BA = ["aria-pressed"], WA = { class: "pano-ui-row" }, UA = ["data-selected"], YA = ["aria-pressed"], XA = ["aria-pressed"], qA = {
  key: 1,
  class: "pano-side-footer"
}, JA = ["data-action"], ZA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ft(() => {
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
      var b, g, _, S, P;
      return re(), le("div", cA, [
        K("div", uA, [
          K("div", fA, [
            K("span", dA, [
              De(Et, {
                icon: tt(ke).globe
              }, null, 8, ["icon"])
            ]),
            K("span", null, nt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = K("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = K("div", { class: "pano-divider" }, null, -1)),
        o.value ? (re(), le("div", pA, [
          K("div", hA, [
            d[11] || (d[11] = K("div", { class: "pano-section-title" }, [
              K("span", null, "Scene")
            ], -1)),
            K("div", mA, [
              d[2] || (d[2] = K("label", null, "Coverage", -1)),
              K("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "360", 8, yA),
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, bA)
              ], 8, gA)
            ]),
            e.model.transformTitle !== !1 ? (re(), le("div", vA, [...d[3] || (d[3] = [
              K("span", null, "Transform", -1)
            ])])) : ut("", !0),
            e.model.selectionPicker ? (re(), le("div", _A, [
              K("label", null, nt(e.model.selectionPicker.label), 1),
              K("div", wA, [
                K("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  K("span", SA, [
                    e.model.selectionPicker.currentIcon ? (re(), le("span", kA, [
                      De(Et, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    K("span", null, nt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = K("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, xA),
                K("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (re(!0), le(Ue, null, yt(e.model.selectionPicker.items || [], (x) => (re(), le("button", {
                    key: x.id,
                    type: "button",
                    class: ot(["pano-picker-item", { active: x.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": x.id
                  }, [
                    x.icon ? (re(), le("span", PA, [
                      De(Et, {
                        icon: x.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    K("span", null, nt(x.label), 1)
                  ], 10, NA))), 128))
                ], 8, MA)
              ])
            ])) : ut("", !0),
            e.model.copyStateButton ? (re(), le("div", AA, [
              K("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Et, {
                  icon: tt(ke).copy
                }, null, 8, ["icon"]),
                K("span", null, nt(e.model.copyStateButton.label), 1)
              ], 8, CA)
            ])) : ut("", !0),
            K("div", {
              class: ot(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (re(!0), le(Ue, { key: 0 }, yt(e.model.notes, (x) => (re(), le("div", {
                key: x,
                class: "pano-param-note"
              }, nt(x), 1))), 128)) : (re(!0), le(Ue, { key: 1 }, yt(e.model.params || [], (x) => (re(), le("div", {
                key: x.key,
                class: "pano-field",
                "data-key": x.key
              }, [
                K("label", null, nt(x.label), 1),
                K("input", {
                  type: "range",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.value,
                  disabled: l(x, e.model),
                  style: St(a(x)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": x.key
                }, null, 12, EA),
                K("input", {
                  type: "number",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.displayValue,
                  disabled: l(x, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": x.key
                }, null, 8, OA)
              ], 8, IA))), 128))
            ], 2),
            De(lA, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (x) => r("timeline", x))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (re(), le(Ue, { key: 3 }, [
              d[6] || (d[6] = K("div", { class: "pano-divider" }, null, -1)),
              K("div", FA, [
                d[5] || (d[5] = K("div", { class: "pano-section-title" }, [
                  K("span", null, "Layers")
                ], -1)),
                K("div", TA, [
                  (re(!0), le(Ue, null, yt(e.model.visibilityRows, (x) => (re(), le("div", {
                    key: x.key,
                    class: ot(["pano-visibility-row", { "is-hidden": x.visible === !1, "is-disabled": x.enabled === !1 }]),
                    "data-visibility-row": x.key
                  }, [
                    K("span", LA, [
                      K("span", RA, [
                        De(Et, {
                          icon: x.icon
                        }, null, 8, ["icon"])
                      ]),
                      K("span", null, nt(x.label), 1)
                    ]),
                    K("button", {
                      class: ot(["pano-visibility-toggle", { active: x.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": x.key,
                      "aria-label": x.ariaLabel,
                      "aria-pressed": x.visible === !0 ? "true" : "false",
                      "data-tip": x.tip,
                      disabled: x.enabled === !1
                    }, [
                      De(Et, {
                        icon: x.visible === !0 ? tt(ke).eye : tt(ke).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, VA)
                  ], 10, DA))), 128))
                ])
              ])
            ], 64)) : ut("", !0),
            e.model.uiSettings ? (re(), le("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              K("summary", null, [
                d[7] || (d[7] = K("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                K("span", zA, [
                  De(Et, {
                    icon: tt(ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              K("div", jA, [
                K("div", HA, [
                  d[8] || (d[8] = K("label", null, "Drag X", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, KA),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, BA)
                  ], 8, GA)
                ]),
                K("div", WA, [
                  d[9] || (d[9] = K("label", null, "Drag Y", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, YA),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, XA)
                  ], 8, UA)
                ]),
                d[10] || (d[10] = K("div", { class: "pano-ui-row" }, [
                  K("span"),
                  K("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, $A)) : ut("", !0)
          ])
        ])) : ut("", !0),
        (e.model.footerButtons || []).length ? (re(), le("div", qA, [
          (re(!0), le(Ue, null, yt(e.model.footerButtons, (x) => (re(), le("button", {
            key: x.action,
            class: ot(["pano-btn", { "pano-btn-primary": x.primary === !0 }]),
            type: "button",
            "data-action": x.action
          }, nt(x.label), 11, JA))), 128))
        ])) : ut("", !0)
      ]);
    };
  }
}, QA = { class: "pano-timeline-bar" }, eC = ["aria-label", "data-tip"], tC = ["aria-label", "data-tip"], nC = { class: "pano-timeline-time" }, rC = ["data-tip"], iC = { key: 0 }, oC = ["value"], aC = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, sC = ["value"], lC = ["aria-expanded"], cC = ["inert"], uC = { class: "pano-timeline-name" }, fC = ["aria-expanded", "aria-label", "onClick"], dC = ["title", "aria-current", "onClick"], pC = ["data-keyed", "aria-label", "onClick"], hC = ["onPointerdown"], mC = ["onPointerdown"], gC = ["onPointerdown"], yC = ["onPointerdown"], bC = ["aria-label", "data-tip", "onPointerdown"], vC = { key: 0 }, _C = ["onPointerdown"], wC = ["aria-label", "data-tip", "onPointerdown"], xC = { key: 0 }, SC = 10, kC = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Bt(null), l = /* @__PURE__ */ Bt(null), u = /* @__PURE__ */ Bt(1), d = /* @__PURE__ */ Bt(0), b = /* @__PURE__ */ Bt(!1);
    let g = null, _ = null, S = null;
    sc(() => {
      g = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && g.observe(a.value), _ = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && _.observe(l.value);
    }), gs(() => {
      g == null || g.disconnect(), _ == null || _.disconnect(), S == null || S();
    });
    const P = ft(() => Math.max(1, Number(n.model.span || 1))), x = ft(() => u.value / P.value), v = (U) => `${U / P.value * 100}%`, F = ft(() => {
      const U = o.find((H) => H * x.value >= 56) || o[o.length - 1], X = [];
      for (let H = 0; H < P.value; H += U) X.push(H);
      return X;
    });
    function z(U) {
      const X = a.value.getBoundingClientRect(), H = Math.floor((U - X.left) / Math.max(1, X.width) * P.value);
      return Math.min(P.value - 1, Math.max(0, H));
    }
    function B(U, X, H) {
      const A = Math.ceil(SC / Math.max(1e-6, x.value)), te = new Map(X.map((Y) => [Y.frame, Y.full]));
      return BS(X.map((Y) => Y.frame), A).map((Y, Ce) => ({
        ...Y,
        key: `${U}:${Ce}`,
        partial: Y.frames.some((Fe) => !te.get(Fe)),
        selected: Y.frames.some((Fe) => H.includes(Fe))
      }));
    }
    function I(U) {
      return B(U.id, U.keys, U.selectedFrames);
    }
    function V(U) {
      return B(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? P.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function $(U, X) {
      const H = U.clientX, A = Math.max(1e-6, x.value);
      let te = 0;
      X("start", 0, U);
      const Y = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const kt = Math.round((Fe.clientX - H) / A);
        kt !== te && (te = kt, X("move", te, Fe));
      }, Ce = (Fe) => {
        Fe.pointerId === U.pointerId && (S(), X("end", te, Fe));
      };
      S == null || S(), S = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ce), window.removeEventListener("pointercancel", Ce), S = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ce), window.addEventListener("pointercancel", Ce);
    }
    function G(U) {
      U.button === 0 && $(U, (X, H, A) => r("action", { type: "seek", frame: z(A.clientX), phase: X }));
    }
    function ee(U, X, H) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), $(U, (A, te) => r("action", { type: "clip", id: X.id, mode: H, delta: te, phase: A })));
    }
    function _e(U, X, H, A, te) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((Y) => te.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: H, frames: A.frames, additive: !1 }), $(U, (Y, Ce) => r("action", { type: "move-keys", delta: Ce, phase: Y }));
      }
    }
    const T = ft(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function C(U, X, H) {
      r("action", X), await oc(), U.target.value = H();
    }
    function ce(U) {
      C(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function ue(U) {
      const X = U.target.value.trim();
      C(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function fe(U, X, H) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: H, frames: [], additive: !1 });
    }
    return (U, X) => wr((re(), le("section", {
      class: ot(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      K("div", QA, [
        K("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (H) => r("action", { type: "play" }))
        }, [
          De(Et, {
            icon: e.model.playing ? tt(ke).pause : tt(ke).play
          }, null, 8, ["icon"])
        ], 8, eC),
        e.model.hasAudio ? (re(), le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (H) => r("action", { type: "mute" }))
        }, [
          De(Et, {
            icon: e.model.muted ? tt(ke).volume_muted : tt(ke).volume2
          }, null, 8, ["icon"])
        ], 8, tC)) : ut("", !0),
        K("span", nC, nt(e.model.label), 1),
        K("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (re(), le("span", iC, nt(T.value), 1)) : (re(), le("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: ce
          }, null, 40, oC)),
          X[6] || (X[6] = K("span", null, "fps", -1))
        ], 8, rC),
        K("label", aC, [
          X[7] || (X[7] = K("span", null, "Length", -1)),
          K("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ue
          }, null, 40, sC)
        ]),
        K("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (H) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = K("span", null, "Timeline", -1)),
          De(Et, {
            icon: tt(ke).chevron
          }, null, 8, ["icon"])
        ], 8, lC)
      ]),
      K("div", {
        class: ot(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: St({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = It((H) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = It((H) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = It((H) => b.value = !1, ["self"]))
      }, [
        K("div", {
          ref_key: "gridRef",
          ref: l,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = K("div", { class: "pano-timeline-corner" }, null, -1)),
          K("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: G
          }, [
            (re(!0), le(Ue, null, yt(F.value, (H) => (re(), le("span", {
              key: H,
              class: "pano-timeline-tick",
              style: St({ left: v(H) })
            }, nt(H), 5))), 128)),
            K("span", {
              class: "pano-timeline-playhead",
              style: St({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (re(!0), le(Ue, null, yt(e.model.rows || [], (H) => (re(), le(Ue, {
            key: H.id
          }, [
            K("div", {
              class: ot(["pano-timeline-head", { selected: H.selected }])
            }, [
              K("div", uC, [
                K("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": H.open ? "true" : "false",
                  "aria-label": H.open ? `Hide ${H.label} parameters` : `Show ${H.label} parameters`,
                  onClick: It((A) => r("action", { type: "toggle-row", id: H.id }), ["stop"])
                }, [
                  De(Et, {
                    icon: tt(ke).chevron
                  }, null, 8, ["icon"])
                ], 8, fC),
                K("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: H.label,
                  "aria-current": H.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: H.id })
                }, [
                  De(Et, {
                    icon: H.clip ? tt(ke).image : tt(ke).camera
                  }, null, 8, ["icon"]),
                  K("span", null, nt(H.label), 1)
                ], 8, dC),
                K("button", {
                  class: ot(["pano-timeline-key", { keyed: H.keyed }]),
                  type: "button",
                  "data-keyed": H.keyed ? "true" : "false",
                  "aria-label": H.keyed ? `Every ${H.label} parameter has a keyframe here; update them` : `Add keyframes for every ${H.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: It((A) => r("action", { type: "key-row", owner: H.id }), ["stop"])
                }, [
                  De(Et, {
                    icon: tt(ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, pC)
              ]),
              H.open ? (re(!0), le(Ue, { key: 0 }, yt(H.lanes, (A) => (re(), le("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, nt(A.label), 1))), 128)) : ut("", !0)
            ], 2),
            K("div", {
              class: ot(["pano-timeline-track", { selected: H.selected }])
            }, [
              K("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => fe(A, H, null)
              }, [
                H.clip ? (re(), le("div", {
                  key: 0,
                  class: ot(["pano-timeline-clip", { open: H.clip.end === null }]),
                  style: St(O(H.clip)),
                  onPointerdown: It((A) => ee(A, H, "move"), ["stop"])
                }, [
                  K("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: It((A) => ee(A, H, "start"), ["stop"])
                  }, null, 40, gC),
                  K("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: It((A) => ee(A, H, "end"), ["stop"])
                  }, null, 40, yC)
                ], 46, mC)) : ut("", !0),
                (re(!0), le(Ue, null, yt(I(H), (A) => (re(), le("button", {
                  key: A.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: St({ left: v(A.frame + 0.5) }),
                  "aria-label": `${H.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: It((te) => _e(te, H, null, A, H.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (re(), le("span", vC, nt(A.frames.length), 1)) : ut("", !0)
                ], 46, bC))), 128))
              ], 40, hC),
              H.open ? (re(!0), le(Ue, { key: 0 }, yt(H.lanes, (A) => (re(), le("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (te) => fe(te, H, A.lane)
              }, [
                (re(!0), le(Ue, null, yt(V(A), (te) => (re(), le("button", {
                  key: te.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: te.selected, cluster: te.frames.length > 1 }]),
                  style: St({ left: v(te.frame + 0.5) }),
                  "aria-label": `${A.label}: ${te.frames.length > 1 ? `${te.frames.length} keyframes` : `keyframe at frame ${te.frames[0]}`}`,
                  "data-tip": te.frames.length > 1 ? `${te.frames.length} keyframes` : `Frame ${te.frames[0]}`,
                  onPointerdown: It((Y) => _e(Y, H, A.lane, te, A.selectedFrames), ["stop"])
                }, [
                  te.frames.length > 1 ? (re(), le("span", xC, nt(te.frames.length), 1)) : ut("", !0)
                ], 46, wC))), 128))
              ], 40, _C))), 128)) : ut("", !0),
              K("span", {
                class: "pano-timeline-playhead",
                style: St({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, cC)
    ], 2)), [
      [ci, e.model.visible]
    ]);
  }
}, MC = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le("div", {
      class: ot(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: St({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, nt(e.model.text || ""), 7));
  }
}, NC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, PC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (re(), le("div", NC, [
      (re(!0), le(Ue, null, yt(e.buttons, (r) => wr((re(), jr(an, {
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
        [ci, r.visible !== !1]
      ])), 128))
    ]));
  }
}, AC = ["data-video-ready"], CC = { class: "pano-video-transport-shell" }, IC = { class: "pano-video-controls-left" }, EC = { class: "pano-video-filmstrip" }, OC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, FC = ["src", "onLoad"], TC = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, DC = ["max", "value", "disabled"], LC = { class: "pano-video-controls-right" }, RC = ["data-has-audio"], VC = { class: "pano-video-volume-pop" }, $C = ["value", "disabled"], zC = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? ke.pause : ke.play;
    }), a = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), l = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? ke.loop_off : ke.loop;
    }), d = ft(() => {
      var O, $;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ft(() => {
      var O, $, G;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? ke.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? ke.volume_muted : ke.volume2;
    }), g = ft(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), _ = ft(() => ({ left: `${g.value}%` })), S = ft(() => {
      var ee, _e;
      const O = (ee = t.state) == null ? void 0 : ee.volumePct, $ = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, G = Number(O ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), P = ft(() => {
      var G, ee;
      const $ = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, $)}ch`;
    }), x = ft(() => ({ "--pano-video-time-ch": P.value })), v = ft(() => {
      var G, ee;
      const O = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const $ = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: $ }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set()), z = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), B = (O) => F.value.has(z(O)), I = (O) => {
      const $ = new Set(F.value);
      $.add(z(O)), F.value = $;
    };
    ao(v, (O) => {
      const $ = new Set(O.map(z)), G = /* @__PURE__ */ new Set();
      for (const ee of F.value)
        $.has(ee) && G.add(ee);
      F.value = G;
    }, { immediate: !0 });
    const V = ft(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, $) => (re(), le("div", {
      class: ot(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: St(V.value)
    }, [
      $[1] || ($[1] = K("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = K("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      K("div", CC, [
        K("div", IC, [
          De(an, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          K("div", {
            class: "pano-video-time pano-video-time-start",
            style: St(x.value)
          }, nt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        K("div", EC, [
          K("div", OC, [
            (re(!0), le(Ue, null, yt(v.value, (G) => (re(), le("div", {
              key: z(G),
              class: ot(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && B(G)
              }])
            }, [
              G.src ? (re(), le("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => I(G)
              }, null, 40, FC)) : (re(), le("span", TC))
            ], 2))), 128))
          ]),
          K("div", {
            class: "pano-video-playhead",
            style: St(_.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
            K("span", { class: "pano-video-playhead-line" }, null, -1),
            K("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          K("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, DC)
        ]),
        K("div", LC, [
          K("div", {
            class: "pano-video-time pano-video-time-end",
            style: St(x.value)
          }, nt(e.state.durationLabel || "0:00"), 5),
          De(an, {
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
          K("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            K("div", VC, [
              K("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: St(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, $C)
            ]),
            De(an, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, RC)
        ])
      ])
    ], 14, AC));
  }
}, jC = { class: "pano-floating-top" }, HC = ["data-selected", "data-view-count"], GC = ["data-view", "aria-pressed", "aria-label", "disabled"], KC = { class: "label" }, BC = ["data-selected"], WC = ["data-space-mode", "data-tip", "aria-pressed"], UC = { class: "label" }, YC = ["data-selected"], XC = ["data-gizmo-mode", "data-tip", "aria-pressed"], qC = { class: "label" }, JC = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] },
    // The space view's 3DoF / 6DoF segments (#71), shown while they are visible.
    spaceButtons: { type: Array, default: () => [] },
    // Move | Rotate | Scale for the selected world Sticker's gizmo (#72), shown while it is.
    gizmoButtons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r, o, a;
      return re(), le("div", jC, [
        K("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((l) => l.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (re(!0), le(Ue, null, yt(e.buttons, (l) => wr((re(), le("button", {
            key: l.key,
            class: ot(["pano-view-btn", [l.extraClass, { active: l.pressed === "true" }]]),
            "data-view": l.key,
            "aria-pressed": l.pressed,
            "aria-label": l.label,
            disabled: l.disabled === !0
          }, [
            De(Et, {
              icon: l.icon
            }, null, 8, ["icon"]),
            K("span", KC, nt(l.label), 1)
          ], 10, GC)), [
            [ci, l.visible !== !1]
          ])), 128))
        ], 8, HC),
        wr(K("div", {
          class: "pano-view-toggle pano-space-toggle",
          role: "group",
          "aria-label": "Space view mode",
          "data-selected": ((o = e.spaceButtons.find((l) => l.pressed === "true")) == null ? void 0 : o.key) || "3dof"
        }, [
          (re(!0), le(Ue, null, yt(e.spaceButtons, (l) => (re(), le("button", {
            key: l.key,
            class: ot(["pano-view-btn", { active: l.pressed === "true" }]),
            "data-space-mode": l.key,
            "data-tip": l.tip,
            "aria-pressed": l.pressed
          }, [
            K("span", UC, nt(l.label), 1)
          ], 10, WC))), 128))
        ], 8, BC), [
          [ci, e.spaceButtons.some((l) => l.visible !== !1)]
        ]),
        wr(K("div", {
          class: "pano-view-toggle pano-space-toggle pano-gizmo-toggle",
          role: "group",
          "aria-label": "Gizmo mode",
          "data-view-count": "3",
          "data-selected": ((a = e.gizmoButtons.find((l) => l.pressed === "true")) == null ? void 0 : a.key) || "translate"
        }, [
          (re(!0), le(Ue, null, yt(e.gizmoButtons, (l) => (re(), le("button", {
            key: l.key,
            class: ot(["pano-view-btn", { active: l.pressed === "true" }]),
            "data-gizmo-mode": l.key,
            "data-tip": l.tip,
            "aria-pressed": l.pressed
          }, [
            K("span", qC, nt(l.label), 1)
          ], 10, XC))), 128))
        ], 8, YC), [
          [ci, e.gizmoButtons.some((l) => l.visible !== !1)]
        ])
      ]);
    };
  }
};
function rb(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ke.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ke.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: ke.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // The space view's mode (#71), next to the view toggle while the panorama view shows World content.
    spaceButtons: t ? [] : [
      { key: "3dof", label: "3DoF", tip: "Look around from the ERP origin", pressed: "true" },
      { key: "6dof", label: "6DoF", tip: "Move freely in space", pressed: "false" }
    ],
    // The gizmo mode of the selected world Sticker (#72), next to them while one is selected in space.
    gizmoButtons: t ? [] : [
      { key: "translate", label: "Move", tip: "Move the world sticker", pressed: "true" },
      { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", pressed: "false" },
      { key: "scale", label: "Scale", tip: "Scale the world sticker", pressed: "false" }
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ke.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ke.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ke.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ke.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ke.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ke.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: ke.globe, pressed: null, visible: !1 }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ke.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ke.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ke.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ke.reset },
      // Shown only while the panorama view is in space in 6DoF (#71).
      ...t ? [] : [
        { action: "frame-view", label: "Frame Content", tip: "Frame content", pressed: null, icon: ke.focus, visible: !1 }
      ],
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ke.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ke.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ke.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ke.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ke.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ke.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ke.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ke.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ke.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ke.lasso_tool }
        ]
      }
    ]
  };
}
const ZC = ["aria-label"], QC = { class: "pano-stage-column" }, eI = { class: "pano-stage-wrap" }, tI = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, nI = {
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
    const d = /* @__PURE__ */ Bt(null), b = /* @__PURE__ */ Bt(null), g = /* @__PURE__ */ Bt(null);
    function _() {
      var T, C;
      return ((C = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : C.call(T)) || {
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
    t({ getPaintOverlayRefs: _, openImagePicker: S });
    const v = ft(() => r.readOnly === !0), F = ft(() => r.shellPreset || rb(r.type)), z = ft(() => {
      var C, ce, ue;
      const T = String((((C = r.uiState) == null ? void 0 : C.stageStatus) === "failed" ? (ce = r.uiState) == null ? void 0 : ce.stageStatusDetail : (ue = r.uiState) == null ? void 0 : ue.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), B = ft(() => {
      var C;
      const T = Array.isArray((C = F.value) == null ? void 0 : C.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return v.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ke.fullscreen
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
    function $(T) {
      var C, ce, ue, fe;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = I();
          if (!U.length) {
            T.preventDefault(), (ce = (C = d.value) == null ? void 0 : C.focus) == null || ce.call(C);
            return;
          }
          const X = U[0], H = U[U.length - 1], A = document.activeElement;
          if (T.shiftKey) {
            (A === X || A === d.value || !((ue = d.value) != null && ue.contains(A))) && (T.preventDefault(), H.focus());
            return;
          }
          (A === H || !((fe = d.value) != null && fe.contains(A))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function G() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function ee() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", $), T ? (u || (u = document.activeElement), G(), document.addEventListener("keydown", $), oc(() => {
        V();
      })) : (ee(), O());
    }
    return sc(() => {
      _e(r.open);
    }), gs(() => {
      ee(), document.removeEventListener("keydown", $), O();
    }), ao(() => r.open, (T) => {
      _e(T);
    }), (T, C) => e.open ? (re(), le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[2] || (C[2] = It((ce) => o("close"), ["self"]))
    }, [
      K("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        K("div", QC, [
          K("div", eI, [
            C[3] || (C[3] = K("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[4] || (C[4] = K("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            C[5] || (C[5] = K("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (re(), le("div", tI, nt(z.value), 1)) : ut("", !0),
            C[6] || (C[6] = K("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              K("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(HP, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            De(jy, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: P,
              onFileCancelled: x
            }, null, 512),
            v.value ? ut("", !0) : (re(), le(Ue, { key: 1 }, [
              De(PC, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(dP, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(jP, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(zC, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(JC, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || [],
              "space-buttons": e.uiState.spaceButtons || [],
              "gizmo-buttons": e.uiState.gizmoButtons || []
            }, null, 8, ["buttons", "space-buttons", "gizmo-buttons"]),
            De(sP, {
              buttons: e.uiState.floatingButtons || B.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(UP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(MC, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(bP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(kC, {
            model: e.uiState.timeline || {},
            onAction: C[0] || (C[0] = (ce) => o("timeline", ce))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ut("", !0) : (re(), jr(ZA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: C[1] || (C[1] = (ce) => o("timeline", ce))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, ZC)
    ])) : ut("", !0);
  }
}, yr = "loading", da = "ready", tr = "failed";
function ib(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ob(e, t = "") {
  return e && (e.__panoLoadState = da, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ab(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Of(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? da : yr : da;
}
function Ff(e) {
  return Of(e) === tr;
}
function rI({ presented: e, background: t = da, stickers: n = [] } = {}) {
  if (!e) return { status: yr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === yr, a = r.includes(yr);
  if (o && a) return { status: yr, detail: "mixed" };
  if (o) return { status: yr, detail: "background" };
  if (a) return { status: yr, detail: "stickers" };
  const l = t === tr, u = r.includes(tr);
  return l && u ? { status: tr, detail: "mixed" } : l ? { status: tr, detail: "background" } : u ? { status: tr, detail: "stickers" } : { status: da, detail: "" };
}
const iI = "state_json", oI = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Vu = "sticker_image_1", aI = "external_image", Zs = "pano_sticker_input_images", sI = "pano_sticker_input_videos", lI = "pano_sticker_input_frames", cI = "pano_sticker_input_video_meta", uI = !0, _l = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ar = Math.PI / 180, to = 180 / Math.PI, $u = 1, fI = "rgb(255, 221, 87)", dI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, pI = 64, tg = 40, zu = 16, hI = 0.45, ng = 180, mI = 160, Jl = 24, gI = 4, yI = 4, Qs = /* @__PURE__ */ new Map(), rg = /* @__PURE__ */ new Map(), Fi = /* @__PURE__ */ new Map(), bI = 12, Kn = my({
  app: vr,
  api: Kt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Ff,
    markImageFailed: ab,
    markImageLoading: ib,
    markImageReady: ob
  }
});
function ju(e) {
  if (!wn(e, "background") || !wn(e, "external-sticker")) return null;
  const t = Kn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const vI = Kn.assetSource, za = Kn.source, Hu = Kn.uiImage, _I = Kn.invalidateUiImage, wI = Kn.resolvePreferredExactLinkedSource, Gu = Kn.loadPreferredExactLinkedImage;
function el(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function SI(e, t, n) {
  const r = Q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function kI(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Fi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Fi.delete(t), Fi.set(t, n), n);
}
function MI(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Fi.delete(n), Fi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Fi.size > bI; ) {
      const o = Fi.keys().next().value;
      if (!o) break;
      Fi.delete(o);
    }
}
function NI(e) {
  return e * e * e;
}
function mc(e, t, n) {
  return { x: e, y: t, z: n };
}
function ig(e, t) {
  return mc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function og(e, t) {
  return mc(e.x * t, e.y * t, e.z * t);
}
function Ku(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function PI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return mc(e.x / t, e.y / t, e.z / t);
}
function tl(e) {
  return {
    yaw: Gt(Math.atan2(e.x, e.z) * to),
    pitch: Q(Math.asin(Q(e.y, -1, 1)) * to, -90, 90)
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
function Ci(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Bu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return Ci(e, t);
  const d = Q((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, _ = Number(e.x || 0) - b, S = Number(e.y || 0) - g;
  return _ * _ + S * S;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function Cr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Q(n, 0, 1)})`;
}
function AI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let nl = { fillStyle: "", url: "" };
function CI(e, t, n) {
  if (nl.url && nl.fillStyle === String(e || ""))
    return nl.url;
  const r = AI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Jl}" height="${Jl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return nl = { fillStyle: String(e || ""), url: r }, r;
}
function wl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Hn(e) {
  return {
    r: Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function _n(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function II(e) {
  return _l.some((t) => wl(e, t.color));
}
function Wu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Q(Number(t), 0, 1), a = Q(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const l = Math.floor(r * 6), u = r * 6 - l, d = a * (1 - o), b = a * (1 - u * o), g = a * (1 - (1 - u) * o);
  switch (l % 6) {
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
function Uu(e) {
  const t = Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function Ho(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const sb = "pano_suite.ui_settings.v1", lb = "pano_suite.node_grid_visibility.v1";
let Xo = null, Ir = null;
function xl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function EI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(sb)) || "").trim();
    if (!t) return Xo ? xl(Xo) : null;
    const n = JSON.parse(t), r = xl(n);
    return Xo = r, r;
  } catch {
    return Xo ? xl(Xo) : null;
  }
}
function OI(e) {
  var n;
  const t = xl(e);
  Xo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(sb, JSON.stringify(t));
  } catch {
  }
  return t;
}
function cb() {
  var e;
  if (Ir && typeof Ir == "object")
    return Ir;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(lb)) || "").trim();
    if (!t)
      return Ir = {}, Ir;
    const n = JSON.parse(t);
    return Ir = n && typeof n == "object" ? n : {}, Ir;
  } catch {
    return Ir = {}, Ir;
  }
}
function FI(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = cb()[n];
  return typeof o == "boolean" ? o : !!t;
}
function TI(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = cb();
  r[n] = !!t, Ir = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(lb, JSON.stringify(r));
  } catch {
  }
}
function DI(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function ag(e) {
  const { paintCount: t, maskCount: n } = DI(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Go(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function rl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function LI(e, t) {
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
function RI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function VI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function $I(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function zI(e, t, n = {}) {
  var ph;
  await By(e, { tolerateOperationFailure: !0 }), Kn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = LI(e, t);
  await kd();
  const u = rl(e, "output_preset"), d = rl(e, "coverage"), b = rl(e, "bg_color"), g = rl(e, iI), _ = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Gu(
      e,
      i,
      () => se(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = _();
    return $I(i);
  }, P = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return VI(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : RI(s, i);
  }, x = t === "stickers" && e.__panoSceneStateV2 === !0, v = (x ? G0 : H0)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: P(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Gn(d == null ? void 0 : d.value),
    sharedUiSettings: EI(),
    active: W0(e),
    fps: x ? ju(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, z = F ? gp(F, !1) : { width: 220, height: 132 }, B = rb(t), I = /* @__PURE__ */ pa({
    stageStatus: yr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (B.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    spaceButtons: (B.spaceButtons || []).map((i) => ({ ...i, visible: !1 })),
    gizmoButtons: (B.gizmoButtons || []).map((i) => ({ ...i, visible: !1 })),
    // Only PanoramaStickersNode places images in space.
    toolButtons: (B.toolButtons || []).map((i) => ({ ...i, disabled: !1, ...i.key === "add-world" ? { visible: x } : {} })),
    floatingButtons: [
      ...(B.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ke.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: ke.aspect,
      rotateIcon: ke.rotate_90,
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
      icon: ke.fullscreen,
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
      width: z.width,
      height: z.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const O = ({ intent: i, file: s } = {}) => {
    if (br(s)) {
      if (i === "add") {
        Ep(s);
        return;
      }
      if (i === "add-world") {
        hv(s);
        return;
      }
      i === "replace" && yv(s);
    }
  }, $ = ({ intent: i } = {}) => {
  }, G = Jf(nI, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: B,
    paintSwatches: _l.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Cr(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      Vo();
    },
    onTimeline: (i) => fv(i),
    onImageFileSelected: O,
    onImageFileCancelled: $
  });
  let ee = null;
  try {
    ee = G.mount(V);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const _e = V.querySelector(".pano-modal-overlay"), T = V.querySelector(".pano-modal"), C = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), ce = T == null ? void 0 : T.querySelector("[data-stage-background]"), ue = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), fe = ((ph = ee == null ? void 0 : ee.getPaintOverlayRefs) == null ? void 0 : ph.call(ee)) || {}, U = fe.cursor || null, X = fe.sizePreview || null, H = fe.sizeSample || null;
  if (!_e || !T || !C || !ce || !ue || !U || !X || !H)
    throw G.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = C.getContext("2d"), te = T.querySelector("[data-side]"), Y = T.querySelector("[data-video-element]"), Ce = T.querySelector("[data-port-video-element]"), Fe = T.querySelector(".pano-floating-right"), kt = T.querySelector(".pano-floating-top"), mt = T.querySelector("[data-tool-rail]"), ln = T.querySelector("[data-frame-rail]"), at = T.querySelector("[data-frame-roll-knob]"), Xn = T.querySelector("[data-paint-dock]"), Ot = T.querySelector(".pano-video-transport"), Zt = T.querySelector("[data-selection-menu]"), cn = T.querySelector("[data-tooltip]"), mi = T.querySelector("[data-camera-preview-host]"), R = T.querySelector("[data-camera-preview-canvas]"), W = T.querySelector("[data-paint-color-row]"), Z = T.querySelector("[data-paint-color-pop]"), ve = T.querySelector("[data-paint-color-sv]"), ge = T.querySelector("[data-paint-color-sv-cursor]"), ye = T.querySelector("[data-paint-hue-strip]"), Me = T.querySelector("[data-paint-hue-handle]");
  let Ne = 0, we = 0;
  ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", ce.style.opacity = "0", o && (te == null || te.remove(), T.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!p.customPaintSessionStart) return;
    if (wl(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (II(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !wl(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, Re = (i = !1) => {
    !Z || Z.hidden || (i ? de() : p.customPaintSessionStart = null, Z.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, Ie = () => {
    Z && (Z.hidden && (p.customPaintSessionStart = Hn(p.customPaintColor)), Z.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Hi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), Re(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Xe(), se()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const Ve = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Be = JSON.stringify(cm(v)), p = {
    mode: "pano",
    selectedId: Ve,
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
    coverage: Gn(v.coverage),
    historyController: U2(80, { entries: [Be], index: 0 }),
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
    showGrid: FI(e == null ? void 0 : e.id, !0),
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
    paintEngine: af(),
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
  }, Le = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let ct = null;
  t === "stickers" && (p.selectedId = null, v.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const We = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), jt = document.createElement("canvas");
  jt.__panoFrameIdx = 0;
  const qn = document.createElement("canvas");
  qn.__panoFrameIdx = 0;
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
  }, Mt = Xk({
    onReady: () => se(),
    onFailed: () => se(),
    onUpdate: () => {
      Pe.backgroundDirty = !0, se({ localOnly: !0 });
    }
  });
  let Hr = { key: "", projection: null }, Sr = { key: null, sceneState: null }, vo = null, _o = null, j = null, he = null;
  const Oe = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Ae = (i) => {
    const s = String(i || "default");
    C.style.cursor !== s && (C.style.cursor = s);
  }, je = {
    timer: 0,
    target: null
  }, Ee = {
    active: !1,
    depth: 0
  }, $e = {
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
  }, gt = 9, Vt = [];
  let hn = 0;
  const rn = () => {
    var N, M;
    const i = (N = ue == null ? void 0 : ue.getBoundingClientRect) == null ? void 0 : N.call(ue), s = (M = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : M.call(Fe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, y = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(c - y * 2)), k = p.fullscreen ? Math.min(1200, w) : w;
    I.videoTransport.shellMaxWidthPx = k;
  }, gi = () => {
    hn || (hn = window.requestAnimationFrame(() => {
      hn = 0, rn();
    }));
  }, wo = (i) => {
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
  }, fn = typeof ResizeObserver < "u" ? new ResizeObserver(() => gi()) : null;
  fn == null || fn.observe(ue), Fe && (fn == null || fn.observe(Fe)), Vt.push(() => {
    var i;
    hn && (window.cancelAnimationFrame(hn), hn = 0), (i = fn == null ? void 0 : fn.disconnect) == null || i.call(fn);
  }), gi();
  const dn = () => {
    $e.thumbnailJobId += 1, $e.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = gt;
  }, $i = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      dn();
      return;
    }
    const h = kI(f);
    if (h) {
      $e.thumbnailSrc = f, I.videoTransport.thumbnails = h.thumbnails, I.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++$e.thumbnailJobId;
    $e.thumbnailSrc = f, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = gt;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const w = await new Promise((ae) => {
      let me = !1;
      const ie = (xe) => {
        me || (me = !0, ae(xe));
      };
      y.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), y.addEventListener("canplay", () => ie(!0), { once: !0 }), y.addEventListener("error", () => ie(!1), { once: !0 }), y.src = f, y.load();
    });
    if ($e.thumbnailJobId !== m) return;
    const k = Number(y.videoWidth || 0), N = Number(y.videoHeight || 0);
    if (!w || k < 1 || N < 1) {
      $e.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(y.duration || s || 0)), E = document.createElement("canvas"), L = 46, D = Math.max(72, Math.round(k / N * L));
    E.width = D, E.height = L;
    const q = E.getContext("2d");
    if (!q) return;
    const J = [], ne = (ae) => new Promise((me) => {
      let ie = !1;
      const xe = () => {
        ie || (ie = !0, me());
      };
      y.addEventListener("seeked", xe, { once: !0 }), y.addEventListener("error", xe, { once: !0 });
      try {
        y.currentTime = ae;
      } catch {
        xe();
      }
    });
    for (let ae = 0; ae < gt; ae += 1) {
      if ($e.thumbnailJobId !== m) return;
      const me = ae / (gt - 1), ie = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), M * me)) : 0;
      if (await ne(ie), $e.thumbnailJobId !== m) return;
      q.clearRect(0, 0, D, L), q.drawImage(y, 0, 0, D, L), J.push({
        id: `thumb-${ae}`,
        src: E.toDataURL("image/jpeg", 0.72),
        time: ie,
        label: Pc(ie)
      });
    }
    $e.thumbnailJobId === m && (I.videoTransport.thumbnails = J, I.videoTransport.thumbnailCount = J.length || gt, MI(f, {
      thumbnails: J,
      thumbnailCount: J.length || gt,
      duration: M,
      fps: c
    }));
  };
  Vt.push(() => {
    dn();
  });
  const At = Iy({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: ks,
    span: () => {
      if (x) return Uc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * ks());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => x,
    onFrame: (i) => {
      x ? av(i) : bi(), se({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Fb() && (Pe.backgroundDirty = !0);
    },
    onChange: () => {
      bi(), qr(), se({ cause: "frame_view", localOnly: !0 });
    }
  });
  Vt.push(() => At.dispose());
  const Gr = x && Ce instanceof HTMLVideoElement ? Ey({
    video: Ce,
    onCapture: () => {
      var c;
      const i = Number(Ce.videoWidth || 0), s = Number(Ce.videoHeight || 0);
      i < 1 || s < 1 || (qn.width = i, qn.height = s, (c = qn.getContext("2d")) == null || c.drawImage(Ce, 0, 0), qn.__panoFrameIdx += 1, se({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => se({ cause: "frame_view", localOnly: !0 })
  }) : null;
  Gr && Vt.push(() => Gr.dispose());
  const En = x ? vy({
    createImage: (i, s) => {
      const c = new Image();
      return c.onload = s, c.onerror = s, c.src = i, c;
    },
    onLoad: () => se({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      vi(), se({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      bi({
        hasAudio: I.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
      });
    }, c = () => {
      const f = Y.dataset.panoSrc;
      f && ($e.failedSrcs.add(f), vi(), se());
    };
    for (const [f, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", c]
    ])
      Y.addEventListener(f, h), Vt.push(() => Y.removeEventListener(f, h));
  }
  function sr() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : c ? i.key === p.paintTool : f ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function xo(i) {
    return Nd(i == null ? void 0 : i.dataTransfer);
  }
  function lr(i) {
    const s = !!i;
    Ee.active !== s && (Ee.active = s, ue.classList.toggle("drop-active", s));
  }
  function Kr(i, s, c = p.viewFov, f = 140, h = 620) {
    const m = zx(p.viewYaw, i), y = s - p.viewPitch, w = c - p.viewFov, k = Math.hypot(m, y) + Math.abs(w) * 0.6, N = Math.round(Q(f + k * 2.2, f, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, se();
  }
  Hb();
  function kr() {
    return t === "stickers" ? bs() : v.shots;
  }
  function bs() {
    return x ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function cr(i) {
    return x && bt(i);
  }
  function gc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Jt(i) {
    return cr(i) ? fd(i, p.frame) : i;
  }
  function ur(i, s) {
    cr(i) ? K0(i, p.frame, s) : Object.assign(i, s);
  }
  function mn() {
    const i = v.painting || (v.painting = na(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function ub(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = v.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const y of s) {
      const w = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }
    return c;
  }
  function fb() {
    return ub("paint");
  }
  function ga(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ya(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function on(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function ba(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const f = c.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function yc() {
    var s;
    let i = -1;
    for (const c of bs())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of mn())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function Ed(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const f = mn();
    let h = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: s == null ? yc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(h)), h;
  }
  function db(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(c - h, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(c - h, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(c + h, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(c + h, 0, 1)
      }
    ];
  }
  function pb() {
    const i = new Set(fb()), c = mn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === f) || c.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: yc(),
        locked: !1,
        frame: null
      });
    }), c.sort((f, h) => Number((f == null ? void 0 : f.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = c, c;
  }
  function hb(i, s, c) {
    var J;
    const f = (ne) => (Number(ne || 0) % 1 + 1) % 1, h = [];
    for (const ne of c) {
      const ae = ne == null ? void 0 : ne.geometry, me = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(me) && h.push(...me);
    }
    if (!h.length) return null;
    const m = f(((J = h[0]) == null ? void 0 : J.u) || 0);
    let y = 0, w = 0;
    h.forEach((ne) => {
      const ae = f((ne == null ? void 0 : ne.u) || 0);
      y += m + Jn(ae, m), w += Number((ne == null ? void 0 : ne.v) || 0);
    });
    const k = (y / h.length % 1 + 1) % 1;
    let N = 1 / 0, M = -1 / 0, E = 1 / 0, L = -1 / 0;
    h.forEach((ne) => {
      const ae = f((ne == null ? void 0 : ne.u) || 0), me = Jn(ae, k);
      N = Math.min(N, me), M = Math.max(M, me);
      const ie = Number((ne == null ? void 0 : ne.v) || 0);
      E = Math.min(E, ie), L = Math.max(L, ie);
    });
    const D = c.reduce((ne, ae) => {
      const me = Pi(String((ae == null ? void 0 : ae.toolKind) || "pen")), ie = Dn[me] || Dn[Zr], xe = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(ne, xe);
    }, 0), q = Math.max(35e-4, D / 2048);
    return {
      centerUv: { u: ((k + (N + M) * 0.5) % 1 + 1) % 1, v: Q((E + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - N) * 0.5 + q,
      halfH: (L - E) * 0.5 + q,
      uvPad: q
    };
  }
  function yi(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const h = mn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === f);
    if (!h) return null;
    const m = c || fr(f, s);
    return h.frame = hb(f, s, m), h.frame;
  }
  function So() {
    var f;
    const i = bs().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = pb().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), c = (Array.isArray((f = v.painting) == null ? void 0 : f.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...c].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function bc(i = !0) {
    var c, f, h, m, y, w;
    const s = So().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : w.toolKind) || "").trim();
      k && N === "paint" && M !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function vc(i = !0) {
    var w, k, N, M, E, L;
    const s = So();
    if (!i) return s;
    const c = String(((k = (w = p.interaction) == null ? void 0 : w.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((M = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : M.layerKind) || "").trim(), h = String(((L = (E = p.interaction) == null ? void 0 : E.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!c || f !== "paint" || h === "eraser" || s.some((D) => D.type === "strokeGroup" && String(D.actionGroupId || "") === c))
      return s;
    const m = Nt();
    let y = s.reduce((D, q) => Math.max(D, Number((q == null ? void 0 : q.z_index) || 0)), -1) + 1;
    return m && Qt(m) && String(m.actionGroupId || "") === c && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: y,
        item: null
      }
    ].sort((D, q) => Number((D == null ? void 0 : D.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0));
  }
  function mb() {
    return mn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Mo(ga("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function gb() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => ko(ya((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Od(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function yb() {
    var s, c, f, h;
    let i = null;
    try {
      const m = bc(), y = ((h = (f = (c = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${Na()}:${_c()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function _c() {
    var h, m, y, w, k, N, M;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Od(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const E = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), D = ((y = E == null ? void 0 : E.rawPoints) == null ? void 0 : y.length) ?? ((w = E == null ? void 0 : E.points) == null ? void 0 : w.length) ?? 0, q = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${q}_${D}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${c || f || "active"}_${p.livePaintInteractionRevision}`;
  }
  function wc() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function zn(i) {
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
    const s = on(i);
    if (!s) return null;
    const c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ya(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function gn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = on(i.rasterObjectId || i.id || "");
    return !!s && !!ko(ya(s));
  }
  function Mo(i) {
    const s = ba(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = mn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: ga("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Qt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Mo(ga(c, s));
  }
  function fr(i, s = null) {
    const c = ba(i, s), f = String(c.actionGroupId || "").trim();
    return f ? Lo(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === f) : [];
  }
  function bb(i, s = "paint") {
    const c = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${p.mode}:${Ma()}`;
    if (p.mode === "frame") {
      const m = Ge(), y = String((m == null ? void 0 : m.id) || ""), w = m ? en(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function vs(i, s, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Q(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function Jn(i, s) {
    let c = Number(i || 0) - Number(s || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function xc(i, s = null, c = null) {
    var N;
    const f = ba(i, s), h = Array.isArray(c) ? c : fr(f.actionGroupId, f.layerKind), m = [];
    if (h.forEach((M) => {
      const E = (M == null ? void 0 : M.geometry) || null, L = (E == null ? void 0 : E.geometryKind) === "lasso_fill" ? E == null ? void 0 : E.points : (E == null ? void 0 : E.processedPoints) || (E == null ? void 0 : E.rawPoints) || (E == null ? void 0 : E.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let w = 0, k = 0;
    return m.forEach((M) => {
      w += y + Jn(Number((M == null ? void 0 : M.u) || 0), y), k += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: Q(k / m.length, 0, 1)
    };
  }
  function _s(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = Jn(Number(i.u || 0), h), w = Number(i.v || 0) - m, k = Number(f || 0) * Ar, N = Math.cos(k), M = Math.sin(k), E = Math.max(0.02, Number(c || 1)), L = (y * N - w * M) * E, D = (y * M + w * N) * E;
    return {
      ...i,
      u: ((h + L) % 1 + 1) % 1,
      v: Q(m + D, 0, 1)
    };
  }
  function Fd(i, s, c, f = null, h = null, m = null) {
    const y = ba(i, h), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Lo(y.layerKind), N = Array.isArray(f) ? new Map(f.map((E) => [String((E == null ? void 0 : E.id) || ""), E])) : null;
    let M = !1;
    if (k.forEach((E) => {
      if (String((E == null ? void 0 : E.actionGroupId) || "").trim() !== w) return;
      const L = (N == null ? void 0 : N.get(String((E == null ? void 0 : E.id) || ""))) || E, D = E == null ? void 0 : E.geometry, q = L == null ? void 0 : L.geometry;
      !D || !q || (Array.isArray(q.points) && (D.points = q.points.map((J) => vs(J, s, c)), M = !0), Array.isArray(q.rawPoints) && (D.rawPoints = q.rawPoints.map((J) => vs(J, s, c)), M = !0), Array.isArray(q.processedPoints) && (D.processedPoints = q.processedPoints.map((J) => vs(J, s, c)), M = !0));
    }), M && m) {
      const E = mn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === w);
      E && (E.frame = null);
    }
    return M;
  }
  function Td(i, s = 1, c = 0, f = null, h = null, m = null) {
    const y = ba(i, h), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const k = Lo(y.layerKind), N = Array.isArray(f) ? f : fr(w, y.layerKind), M = Array.isArray(N) ? new Map(N.map((D) => [String((D == null ? void 0 : D.id) || ""), D])) : null, E = (m == null ? void 0 : m.centerUv) ?? xc(w, y.layerKind, N);
    let L = !1;
    if (k.forEach((D) => {
      if (String((D == null ? void 0 : D.actionGroupId) || "").trim() !== w) return;
      const q = (M == null ? void 0 : M.get(String((D == null ? void 0 : D.id) || ""))) || D, J = D == null ? void 0 : D.geometry, ne = q == null ? void 0 : q.geometry;
      !J || !ne || (Array.isArray(ne.points) && (J.points = ne.points.map((ae) => _s(ae, E, s, c)), L = !0), Array.isArray(ne.rawPoints) && (J.rawPoints = ne.rawPoints.map((ae) => _s(ae, E, s, c)), L = !0), Array.isArray(ne.processedPoints) && (J.processedPoints = ne.processedPoints.map((ae) => _s(ae, E, s, c)), L = !0));
    }), L && m) {
      const D = mn().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === w);
      D && (D.frame = null);
    }
    return L;
  }
  function Dd(i, s, c, f = null) {
    const h = on(i);
    if (!h) return !1;
    const m = On().find((M) => String((M == null ? void 0 : M.id) || "").trim() === h);
    if (!m) return !1;
    const y = f && typeof f == "object" ? f : m, w = (y == null ? void 0 : y.transform) || {}, k = Number(w.du || 0) + Number(s || 0), N = Q(Number(w.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = N, !0;
  }
  function vb(i, s = 1, c = null) {
    const f = on(i);
    if (!f) return !1;
    const h = On().find((N) => String((N == null ? void 0 : N.id) || "").trim() === f);
    if (!h) return !1;
    const m = c && typeof c == "object" ? c : h, y = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(y.scale || 1)), k = Q(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = k, !0;
  }
  function Nt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = Mo(i);
    if (s) return s;
    const c = ko(i);
    return c || (t === "cutout" ? wc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : kr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function dr() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], c = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const h = String(f || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? Nt() : Mo(h) || ko(h) || (t === "cutout" ? wc().find((y) => String((y == null ? void 0 : y.id) || "") === h) : kr().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function ws(i = null) {
    const s = Array.isArray(i) ? i : dr();
    if (!s || s.length < 2) return null;
    const c = s.map((N) => Ut(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((N) => N.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), h = c.flatMap((N) => N.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), y = Math.max(...f), w = Math.min(...h), k = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (w + k) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: y, y: w },
        { x: y, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: w, a: { x: m, y: w }, b: { x: y, y: w } },
        { edge: "right", x: y, y: (w + k) * 0.5, a: { x: y, y: w }, b: { x: y, y: k } },
        { edge: "bottom", x: (m + y) * 0.5, y: k, a: { x: y, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (w + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: w },
      rotateHandle: { x: (m + y) * 0.5, y: w - 30 }
    };
  }
  function Ld(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function xs() {
    const i = Nt();
    return i ? Qt(i) || gn(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function yn(i) {
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), c = mn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (gn(i)) {
      const s = on(i.rasterObjectId || i.id || ""), c = On().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Sc(i = null) {
    const s = Array.isArray(i) ? i : dr();
    return s.length > 0 && s.every((c) => yn(c));
  }
  function _b(i, s) {
    const c = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), h = mn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (gn(i)) {
      const f = on(i.rasterObjectId || i.id || ""), h = On().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function wb() {
    if (r) return;
    const i = dr();
    if (!i.length) return;
    const s = !Sc(i);
    let c = !1;
    i.forEach((f) => {
      _b(f, s) && (c = !0);
    }), c && (et(), lt(), Xe(), ze(), se());
  }
  function pr(i) {
    p.inspectCamera = !1, Ao(), Le.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && bt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && zn(i) ? v.active.selected_shot_id = i.id || null : i ? zn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function xb(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const w = String((y == null ? void 0 : y.id) || "").trim();
      !w || f.has(w) || (f.add(w), c.push(w));
    }), p.selectedIds = c, p.inspectCamera = !1, Ao(), Le.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && bt(m) && m.id || null, m && zn(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function Rd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, y;
      const h = $t(c) ? String(c.id || Vu) : String(((y = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : y.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...s];
  }
  function Sb(i) {
    return i === "frame" ? ke.camera : i === "stroke" ? ke.paintbrush_vertical_tool : ke.image;
  }
  function kc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Sb(i.kind)
    };
  }
  function Ss() {
    return yc();
  }
  function $t(i) {
    var s;
    return !i || typeof i != "object" ? !1 : x ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Vu || String(i.source_kind || "") === aI;
  }
  function No(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function kb(i) {
    return $t(i) && No(i) ? ey : 1;
  }
  function Mb() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function Nb() {
    return String(Mb() || "") === "lasso_fill";
  }
  function Pb() {
    if (r) return;
    const i = Nt();
    !i || !$t(i) || (i.visible = No(i), Ft(), et(), lt(), ze(), Xe(), se());
  }
  function Ab() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !$t(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ac(Zs, () => {
      se();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = _i(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), et(), lt(), ze(), Xe(), se();
  }
  function Cb(i) {
    if (!i || !$t(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Ac(Zs, () => {
      se();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = _i(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function Ib() {
    const i = Nt();
    if (!i || !$t(i)) return !1;
    const s = Cb(i);
    if (!s) return !1;
    const c = (f, h) => Math.abs(Number(f || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function Br(i) {
    return Kn.uiList(e, i);
  }
  function Mc(i) {
    return Kn.uiValue(e, i);
  }
  function Vd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Tl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Eb() {
    const { metaKey: i } = Vd(), s = Mc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Nc(i) {
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
  function Pc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), c = Math.floor(s / 60), f = s % 60;
    return `${c}:${String(f).padStart(2, "0")}`;
  }
  function ks() {
    return x ? v.timeline.fps : $e.metaFps || 1e3;
  }
  function bi(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), f = At.frame / ks(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = At.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : I.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : I.videoTransport.volume
    ), N = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : wo(Y), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: Pc(f),
      durationLabel: Pc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: N,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? gt))
    });
  }
  function $d() {
    return !!(Y instanceof HTMLVideoElement && !x && Y.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function zd() {
    if (!(Y instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), bi({
      hasAudio: I.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function Ob() {
    bi({
      visible: $d()
    });
  }
  function Fb() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    (jt.width !== i || jt.height !== s) && (jt.width = i, jt.height = s);
    const c = jt.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), jt.__panoFrameIdx = Number(jt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function jd() {
    return !At.showsVideo && Number(jt.width || 0) > 0 && Number(jt.height || 0) > 0 && Number(jt.__panoFrameIdx || 0) > 0 ? jt : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Hd() {
    jt.__panoFrameIdx = 0, Pe.backgroundDirty = !0;
  }
  function vi() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Vd(), s = wn(e, "background") && Br(i)[0] || null, c = za(s), f = [c, Kn.linkedVideoFile(e, ap())].filter(Boolean), h = f.find((E) => !$e.failedSrcs.has(E)) || "";
    $e.videoFailed = !h && f.length > 0;
    const m = h && h === c ? Eb() : null;
    $e.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (x ? v.timeline.fps : 24))), w = Y.dataset.panoSrc === h && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : w)), N = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * y))), M = !!(m != null && m.has_audio) || wo(Y);
    return h && Y.dataset.panoSrc !== h ? (Y.pause(), Hd(), Y.dataset.panoSrc = h, Y.loop = !x && !!I.videoTransport.loop, Y.muted = !!I.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), Y.src = h, Y.load(), At.setSource(!0), x || At.seek(0)) : !h && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Hd(), dn(), At.setSource(!1)), x || (Y.loop = !!I.videoTransport.loop), h && !x && $e.thumbnailSrc !== h && !$e.thumbnailFailedSrcs.has(h) && $i(h, k, y), h || dn(), bi({
      ready: !!h,
      visible: !!h && $d(),
      duration: k,
      frameCount: N,
      fps: y,
      hasAudio: M,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), h || null;
  }
  function Gd(i, s = null) {
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
  function Ac(i, s = null) {
    return Hu(e, i, We, s || (() => se()));
  }
  function Cc(i = null) {
    return wn(e, "external-sticker") ? Ac(Zs, i) : null;
  }
  function Kd() {
    if (!wn(e, "external-sticker")) return null;
    const i = Br(cI)[0];
    if (!i || typeof i != "object") return null;
    const s = Br(lI).map(za).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = za(Br(sI)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function Tb() {
    const i = v.stickers.find($t), s = i ? Kd() : null, c = s ? gy(i.clip, p.frame, v.timeline.fps, s.meta) : null;
    Gr.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: At.advancing, fps: v.timeline.fps });
    const f = i ? Rc(i) : null, h = s != null && s.frames ? En.picture(s.frames, c, s.meta, f) : Gr.picture(qn, f);
    return h ? { media: h, revision: Nc(h), source: by(s, f) } : null;
  }
  function _i(i, s, c) {
    const f = Math.max(1, Number(s || 1)), h = Math.max(1, Number(c || 1)), m = Q(Number(i || 30), 0.1, 179) * Ar, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / f));
    return Q(y * to, 0.1, 179);
  }
  function Db(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const c = JSON.parse(s);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const f = c.version;
      let h = null;
      if (typeof f == "number" && Number.isInteger(f) ? h = f : typeof f == "string" && /^\d+$/.test(f) && (h = Number.parseInt(f, 10)), h !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const y = Number(m.yaw_deg), w = Number(m.pitch_deg), k = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![y, w, k, N].every((D) => Number.isFinite(D))) return null;
      let M = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const E = {
        yaw_deg: M,
        pitch_deg: Q(w, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: Q(N, 0.1, 179)
      }, L = Number(c.source_aspect);
      return Number.isFinite(L) && L > 0 && (E.source_aspect = L), E;
    } catch {
      return null;
    }
  }
  function Bd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = co(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Lb(i) {
    var w;
    if (!i || typeof i != "object") return Bd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const k = Q(h, 0.1, 179) * Ar, N = Q(m, 0.1, 179) * Ar, M = Math.tan(N * 0.5);
      if (Math.abs(M) > 1e-6) {
        const E = Math.tan(k * 0.5) / M;
        Number.isFinite(E) && E > 0 && (y = E);
      }
    }
    if (i != null && i.asset_id && ((w = v == null ? void 0 : v.assets) != null && w[i.asset_id])) {
      const k = v.assets[i.asset_id], N = Number((k == null ? void 0 : k.w) || 0), M = Number((k == null ? void 0 : k.h) || 0);
      N > 0 && M > 0 && (y = N / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function Rb(i) {
    return Kn.linkedValue(e, i);
  }
  function Vb(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Db(s);
    if (f) {
      const y = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), w = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: _i(f.hFOV_deg, y, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: _i(30, h, m),
      rot_deg: 0
    };
  }
  function $b() {
    const i = Cc(() => {
      si(e, "image-loaded");
    }), s = wn(e, "external-sticker") ? Gd(Mc("pano_sticker_input_pose"), null) : null;
    return Ay(v, Py(e, { pose: s, image: i }));
  }
  function zb() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, c = Cc(() => {
      si(e, "image-loaded");
    }), f = Gd(Mc("pano_sticker_input_pose"), null), h = Rb("sticker_state"), m = Kn.externalStateHash(e, h), y = s == null ? null : Vb(f, h, c);
    return Ny(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Wd(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? $b() : zb();
    if (s.changed) {
      const c = v.stickers.find($t);
      v.stickers = s.state.stickers, v.active = s.state.active, c && p.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (p.selectedId = null, p.selectedIds = []), lt(), ze(), Xe();
    }
    se();
  }
  function va(i = {}) {
    const c = i.preservePanelValues !== !1 ? Jt(Nt()) : null;
    c && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ri(c)
    }), p.selectedId = null, p.selectedIds = [], Ao(), p.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Po() {
    return !x || !p.worldSelectedId ? null : v.stickers.find((i) => i.id === p.worldSelectedId && i.placement === "world") || null;
  }
  function Ic(i) {
    pr(null), p.worldSelectedId = i, Pe.backgroundDirty = !0;
  }
  function Ao() {
    p.worldSelectedId && (p.worldSelectedId = null, p.gizmoAxis = null, Pe.backgroundDirty = !0);
  }
  function _a(i) {
    return !!i && !r && !i.locked;
  }
  function jb() {
    if (t !== "cutout") return;
    const i = Ge();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function Ec() {
    if (t !== "cutout") return;
    const i = Ge();
    Yi(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? ke.camera : ke.plus_circle
    });
  }
  function wi() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    Yi(I.floatingButtons, "action", "reset-view", {
      disabled: r || i
    });
    const c = Co(), f = c && p.spaceMode === "6dof";
    I.spaceButtons.forEach((m) => {
      m.visible = c, m.pressed = m.key === p.spaceMode ? "true" : "false";
    });
    const h = c && p.showObjects && _a(Po());
    I.gizmoButtons.forEach((m) => {
      m.visible = h, m.pressed = m.key === p.gizmoMode ? "true" : "false";
    }), Yi(I.floatingButtons, "action", "frame-view", {
      visible: f,
      disabled: r || !f
    }), Yi(I.floatingButtons, "action", "toggle-grid", {
      icon: s ? ke.eye : ke.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Wr() {
    var c;
    const i = !!Ge();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, I.viewButtons.forEach((f) => {
      const h = f.key === p.mode;
      f.pressed = h ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? Ge() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = Ho(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((c = p.interaction) == null ? void 0 : c.kind) === "roll_frame", I.frameRollKnob.armed = !!s && p.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? ri(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(ri(s)) === f
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!Ge(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = p.mode !== "frame", I.cameraPreview.expanded = !!p.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame), wi(), zp() ? dt(p.pointerPos) : Ae(p.mode === "pano" ? "grab" : "default");
  }
  function Hb() {
    const s = sp({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Ud() {
    return ty({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, C.width, C.height);
  }
  function Yd() {
    return !x || !wn(e, "scene") ? null : dm(Br("pano_scene_files"), Br("pano_scene_meta"), za);
  }
  function Gb() {
    return !x || !wn(e, "external-sticker") ? null : dm(Br("pano_sticker_files"), Br("pano_sticker_meta"), za);
  }
  function Co() {
    return p.mode === "pano" && Xd();
  }
  function Xd() {
    return x && Pk({ sceneLinked: !!ly(e).scene, files: Yd(), stickers: v.stickers });
  }
  function wa() {
    return p.spaceMode === "6dof" && Co();
  }
  function Oc() {
    var i, s, c;
    return vN((c = (s = (i = vr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : c.call(s, Ky));
  }
  function qd() {
    return { mode: p.spaceMode, position: p.viewPosition, moved: p.viewMoved };
  }
  function Jd(i) {
    p.spaceMode = i.mode, p.viewPosition = i.position, p.viewMoved = i.moved;
  }
  function Kb(i) {
    Jd(q0(qd(), i)), Pe.backgroundDirty = !0, wi(), se({ localOnly: !0 });
  }
  function Ur() {
    var c;
    const i = p.viewMoved ? p.viewDistance : ((c = zi()) == null ? void 0 : c.radius) || ro, s = { position: p.viewPosition, yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, hFOV_deg: p.viewFov, distance: i };
    return gk(p.spaceMode, s);
  }
  function zi() {
    var i;
    return ((i = ki().space) == null ? void 0 : i.sphere) ?? null;
  }
  function Fc(i) {
    p.viewPosition = i.position, p.viewYaw = i.yaw_deg, p.viewPitch = i.pitch_deg, p.viewDistance = i.distance, p.viewMoved = !0, Pe.backgroundDirty = !0, se({ localOnly: !0 });
  }
  function Zd() {
    var i;
    return ((i = zi()) == null ? void 0 : i.radius) || ro;
  }
  function Bb() {
    const i = zi();
    i && Fc(kk(Ur(), i, C.width, C.height));
  }
  function Tc(i) {
    return Mt.pick(tu(), i.x, i.y, C.width, C.height);
  }
  function Qd(i, s) {
    var c;
    return vk(i, s, p.viewMoved ? null : (c = zi()) == null ? void 0 : c.center, Zd());
  }
  function ep() {
    return JSON.stringify([p.viewPosition, p.viewYaw, p.viewPitch]);
  }
  function Wb(i, s) {
    const c = performance.now(), f = { x: i.x, y: i.y, time: c, key: Mt.contentKey(), view: ep() };
    if (!_k(he, f)) {
      const m = Tc(i);
      he = { ...f, cost: performance.now() - c, hit: m };
    }
    const h = Ur();
    Fc(Sk(h, Qd(h, he.hit), s, Zd())), he.view = ep(), he.wheelTime = c;
  }
  function tp(i, s, c) {
    const f = Qd(Ur(), Tc(s));
    p.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: hc(Ur(), f) }, dt(s), C.setPointerCapture(c);
  }
  function Dc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${C.width}|${C.height}`;
    return Hr.key !== i && (Hr = { key: i, projection: ny(Ud(), C.width, C.height) }), Hr.projection;
  }
  function xa(i) {
    const s = Dc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Lc(i, s) {
    return Dc().ray(i, s);
  }
  function xi() {
    const i = C.width, s = C.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const w = s, k = w * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: w };
    }
    const h = i, m = h / c;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function Rc(i) {
    var y;
    if (i && typeof i == "object" && ($t(i) || i.external === !0))
      return Cc(() => {
        si(e, "image-loaded");
      });
    const s = x ? Sa(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = We.get(s);
    if (c) return c;
    const f = x ? B0(i.source) : (y = v.assets) == null ? void 0 : y[s], h = vI(f);
    if (!h) return null;
    const m = new Image();
    return ib(m, h), m.onload = () => {
      ob(m, h), se();
    }, m.onerror = () => {
      ab(m, h), se();
    }, m.src = h, We.set(s, m), m;
  }
  function Sa(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function np(i, s = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const f = Rt.get(c);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = c, Rt.set(c, h), h;
  }
  function Ub(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = un.get(s);
    if (c) return c.ready ? c : null;
    const f = np(i, () => {
      const M = un.get(s);
      M && (M.ready = !1), se({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const h = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const w = y.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, h, m), w.drawImage(f, 0, 0, h, m);
    const k = w.getImageData(0, 0, h, m).data, N = { canvas: y, width: h, height: m, alpha: k, ready: !0 };
    return un.set(s, N), N;
  }
  function Yb(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = Jn(Number(i.u || 0), h), w = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), N = Number(f || 0) * Ar, M = Math.cos(N), E = Math.sin(N), L = y / k, D = w / k, q = L * M + D * E, J = -L * E + D * M;
    return {
      ...i,
      u: ((h + q) % 1 + 1) % 1,
      v: m + J
    };
  }
  function Xb(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, y = Yb(
      m,
      h,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(w > 1e-6) || !(k > 1e-6)) return null;
    const N = Jn(Number(y.u || 0), Number(c.u0 || 0)) / w, M = (Number(y.v || 0) - Number(c.v0 || 0)) / k;
    if (N < 0 || N > 1 || M < 0 || M > 1) return 0;
    const E = Ub(i);
    if (!E) return null;
    const L = Q(Math.floor(N * E.width), 0, E.width - 1), D = Q(Math.floor(M * E.height), 0, E.height - 1);
    return Number(E.alpha[(D * E.width + L) * 4 + 3] || 0);
  }
  function rp(i, s, c, f = null) {
    if (!(s != null && s.visible) || !ei(c, s.corners)) return !1;
    const h = f || mr(c, performance.now()), m = Xb(i, h);
    return m === null ? !0 : m > 8;
  }
  function qb() {
    var f, h, m, y, w, k, N, M;
    const i = ((h = (f = p.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : h.call(f, bc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : w.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((M = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: c };
  }
  function Jb() {
    var D, q, J;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = jn(), f = `${_c()}:${c.width}:${c.height}`;
    if (((D = p._activePaintEraserPreviewInfo) == null ? void 0 : D.cacheKey) === f)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = _n(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Bc(ne, h.targetSpace, !0);
    }
    const y = ka(c.width, c.height, { readback: !0 });
    if (!wp(y, h, { w: c.width, h: c.height })) return null;
    const w = ((J = (q = y.ctx) == null ? void 0 : q.getImageData(0, 0, c.width, c.height)) == null ? void 0 : J.data) || null;
    if (!w) return null;
    let k = c.width, N = c.height, M = -1, E = -1;
    for (let ne = 0; ne < c.height; ne += 1)
      for (let ae = 0; ae < c.width; ae += 1)
        w[(ne * c.width + ae) * 4 + 3] <= 8 || (ae < k && (k = ae), ne < N && (N = ne), ae > M && (M = ae), ne > E && (E = ne));
    if (M < k || E < N)
      return p._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const L = {
      surface: y,
      bounds: { minX: k, minY: N, maxX: M, maxY: E },
      key: `${f}:${k}:${N}:${M}:${E}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: f, value: L }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Io() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Zb(i, s, c) {
    var f, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, w = Number(m.u0 || 0) + Number(y.du || 0), k = Number(m.u1 || 0) + Number(y.du || 0), N = Number(m.v0 || 0) + Number(y.dv || 0), M = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(Q(N, 0, 1) * c),
        maxY: Math.ceil(Q(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = fr(i.actionGroupId, "paint"), y = yi(i.actionGroupId, "paint", m);
      if (!y) return null;
      const w = y.centerUv.u - y.halfW, k = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, M = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(Q(N, 0, 1) * c),
        maxY: Math.ceil(Q(M, 0, 1) * c),
        wraps: k - w >= 1 || w < 0 || k > 1
      };
    }
    return null;
  }
  function Qb(i, s, c) {
    if (!i || !s) return !1;
    const f = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: c - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = f(i), m = f(s);
    return h.some((y) => m.some((w) => !(y.maxX < w.minX || w.maxX < y.minX || y.maxY < w.minY || w.maxY < y.minY)));
  }
  function e1(i, s, c) {
    var xe, Ke, Ye, st, be, oe, pe;
    if (!i || !s || !((xe = c == null ? void 0 : c.surface) != null && xe.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), h = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || h < 1) return i;
    const m = Zb(s, f, h);
    if (m && !Qb(m, c.bounds, f)) return i;
    const y = String(((Ke = s.item) == null ? void 0 : Ke.id) || s.id || ""), w = ((Ye = s.item) == null ? void 0 : Ye.transform) || {}, k = `${c.key}:${y}:${f}:${h}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, N = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(k)) return N.get(k);
    const M = Q(Math.floor(Number(((st = c.bounds) == null ? void 0 : st.minX) || 0)), 0, Math.max(0, f - 1)), E = Q(Math.floor(Number(((be = c.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, h - 1)), L = Q(Math.ceil(Number(((oe = c.bounds) == null ? void 0 : oe.maxX) || 0)), M, Math.max(0, f - 1)), D = Q(Math.ceil(Number(((pe = c.bounds) == null ? void 0 : pe.maxY) || 0)), E, Math.max(0, h - 1)), q = Math.max(1, L - M + 1), J = Math.max(1, D - E + 1), ne = ka(f, h, { readback: !0 });
    ne.ctx.clearRect(0, 0, f, h), ne.ctx.drawImage(i, 0, 0);
    const ae = ne.ctx.getImageData(M, E, q, J);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(c.surface.canvas, 0, 0), ne.ctx.restore();
    const me = ne.ctx.getImageData(M, E, q, J);
    let ie = !1;
    for (let Te = 0; Te < q * J; Te += 1) {
      const Se = ae.data[Te * 4 + 3], qe = me.data[Te * 4 + 3];
      if (Se > qe) {
        ie = !0;
        break;
      }
    }
    return ie ? (N.size > 64 && N.clear(), N.set(k, ne.canvas), ne.canvas) : (N.set(k, i), i);
  }
  function ip(i, s = null) {
    const c = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const h = np(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = qb(), w = (i == null ? void 0 : i.transform) || {}, k = [
      c,
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
      Ma()
    ].join(":"), N = nn.get(k);
    if (N) return N;
    nn.size > 64 && nn.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = y;
    const E = M.getContext("2d");
    if (!E) return null;
    const L = Number(f.u0 || 0) * m, D = Number(f.v0 || 0) * y, q = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), J = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * y), ne = L + q * 0.5 + Number(w.du || 0) * m, ae = D + J * 0.5 + Number(w.dv || 0) * y, me = Number(w.rot_deg || 0) * Ar, ie = Math.max(0.01, Number(w.scale || 1));
    for (const xe of [-m, 0, m])
      E.save(), E.translate(ne + xe, ae), E.rotate(me), E.scale(ie, ie), E.drawImage(h, -q * 0.5, -J * 0.5, q, J), E.restore();
    return nn.set(k, M), M;
  }
  async function Vc(i, s) {
    const c = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const h = await Kt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let Ms = null, Ns = !1;
  function t1() {
    const i = ag(v.painting), { width: s, height: c } = Pa();
    return ZS(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function op() {
    const i = String(e.id ?? "0"), s = Qs.get(i);
    if (Ns && s) return s;
    const c = (async () => {
      var m, y, w, k, N, M, E, L, D, q, J, ne;
      const f = Na(), h = ag(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Ms = f, Nn());
        return;
      }
      if (Ms !== f && !Ns) {
        Ns = !0;
        try {
          Es();
          const ae = bc(!1), me = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, ae)) || null, ie = ((w = me == null ? void 0 : me.displayPaint) == null ? void 0 : w.canvas) || null, xe = ((k = me == null ? void 0 : me.committedMask) == null ? void 0 : k.canvas) || null, Ke = Math.max(1, Number(((N = me == null ? void 0 : me.descriptor) == null ? void 0 : N.width) || (ie == null ? void 0 : ie.width) || (xe == null ? void 0 : xe.width) || 2048)), Ye = Math.max(1, Number(((M = me == null ? void 0 : me.descriptor) == null ? void 0 : M.height) || (ie == null ? void 0 : ie.height) || (xe == null ? void 0 : xe.height) || 1024));
          (!ie && h.totalPaintCount > 0 || !xe && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((E = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.width) || 0) !== Ke || Number(((L = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Ye) && (p._paintLayerSyncBlankSurface = ka(Ke, Ye)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ke, Ye));
          const st = ie || h.totalPaintCount > 0 && ((D = p._paintLayerSyncBlankSurface) == null ? void 0 : D.canvas) || null, be = xe || h.totalMaskCount > 0 && ((q = p._paintLayerSyncBlankSurface) == null ? void 0 : q.canvas) || null;
          if (!st && !be) return;
          let oe = null, pe = null;
          const Te = [];
          if (h.totalPaintCount > 0) {
            oe = await Vc(st, `pano_paint_${i}.png`);
            for (const Se of ae) {
              const qe = String(Se || "").trim();
              if (!qe) continue;
              const Je = ((ne = (J = p.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : ne.call(J, qe)) || null;
              if (!Je) continue;
              const He = qe.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ze = await Vc(Je, `pano_group_${i}_${He}.png`);
              Ze && Te.push({
                id: qe,
                actionGroupId: qe,
                image: Ze
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await Vc(be, `pano_mask_${i}.png`)), f === Na() && (v.painting_layer = {
            paint: oe,
            mask: pe,
            groups: Te,
            revision: f
          }, Ms = f, Nn());
        } catch (ae) {
          throw ae;
        } finally {
          Ns = !1;
        }
      }
    })();
    return Qs.set(i, c), c.finally(() => {
      Qs.get(i) === c && Qs.delete(i);
    }), c;
  }
  function $c() {
    if (t === "cutout") {
      const h = jd();
      if (h) return h;
      const m = Gu(
        e,
        ["erp_image", "bg_erp"],
        () => se(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Ff(m) ? m : Hu(e, "pano_input_images", We, () => se()) || m || null;
    }
    const i = jd();
    if (i) return i;
    const s = wn(e, "background") ? Hu(e, "pano_input_images", We, () => se()) : null;
    if (s && !Ff(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = ap();
    return Gu(e, c, () => se(), `background:${c.join("|")}`) || s || null;
  }
  function ap() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function zc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function n1() {
    if (Mt.failed) return { status: tr, detail: "renderer" };
    if (!Mt.ready) return { status: yr, detail: "boot" };
    let i = da;
    const s = [];
    if (p.showPanorama) {
      const c = $c();
      i = $e.videoFailed ? tr : Of(c, zc);
    }
    if (p.showObjects)
      for (const c of bs()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = Rc(c);
        s.push(Of(f, zc));
      }
    return rI({
      presented: Pe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Eo() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], We.delete(s));
    });
  }
  function jc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Q(i.y, -1, 1))
    };
  }
  function Hc(i, s = null) {
    const { lon: c, lat: f } = jc(i), h = xi();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - f / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function Ps(i) {
    const s = Jt(i), c = ha(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(Q(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Ar), h = Math.tan(Q(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Ar);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: h
    };
  }
  function Si(i, s, c) {
    return PI(ig(ig(i.centerDir, og(i.right, s)), og(i.up, c)));
  }
  function sp(i) {
    const s = Ps(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: h }) => Si(s, f * s.tanX, h * s.tanY));
  }
  function lp(i, s, c) {
    const f = Ps(i), h = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return Si(f, h, m);
  }
  function cp(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: Q((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function r1(i) {
    var k, N, M, E;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), y = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => vs(_s(L, c, f, h), m, y));
  }
  function i1(i) {
    const s = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${Ma()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = Ge(), y = m ? en(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function o1(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = zn(i) ? "frame" : bt(i) ? "sticker" : "item", f = Jt(i), h = [
      c,
      s,
      p.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      ri(f),
      cr(i) && Oi(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = Ge(), y = m ? en(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function up() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function a1() {
    return up() ? `${yp()}:mask_display` : "";
  }
  function fp(i) {
    if (!p.showMask) return i;
    const s = up();
    if (!s) return i;
    const c = a1(), f = i.reduce((y, w) => Math.max(y, Number((w == null ? void 0 : w.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, w) => Math.max(y, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function s1() {
    var f, h;
    const i = vc(!0), s = Jb(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const w = ((h = (f = p.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : h.call(f, y)) || null;
        if (!w) continue;
        c.push({
          id: `paint_group:${y}`,
          source: w,
          revision: `${yp()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, w = on((y == null ? void 0 : y.id) || m.id || "");
        if (!w) continue;
        const k = ip(y, () => se());
        if (!k) continue;
        const N = e1(k, m, s), M = (y == null ? void 0 : y.transform) || {};
        c.push({
          id: `raster:${w}`,
          source: N,
          revision: [
            Na(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return fp(c);
  }
  function l1() {
    return (p.showObjects ? s1() : fp([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ki() {
    return vo || (vo = c1()), vo;
  }
  function c1() {
    const i = $c(), s = l1(), c = { ...v.assets };
    for (const E of x ? [] : v.stickers) {
      const L = String((E == null ? void 0 : E.asset_id) || "");
      L && !c[L] && We.has(L) && (c[L] = { type: "comfy_image", filename: L });
    }
    const f = x ? v.stickers.map((E) => gc(E) ? { ...E, source: { kind: "file", filename: Sa(E) } } : E) : v.stickers, h = JSON.stringify([f, Object.keys(c), v.scene]);
    Sr.key !== h && (Sr = { key: h, sceneState: ho({ ...v, stickers: f, assets: c, painting: null }) });
    const m = Gr ? Tb() : null, y = (E) => {
      if (Gr && $t(E)) return m;
      const L = Rc(E);
      return L ? { media: L, revision: Nc(L) } : null;
    }, w = p.showObjects ? ry(Sr.sceneState, p.frame, v.stickers, { media: y, paintLayers: s }) : s.map((E) => ({ kind: "erp", ...E })), k = i && (i === Y || i === jt) ? Y.dataset.panoSrc : i, N = p.showPanorama && zc(i) ? { media: i, revision: Nc(i), coverage: Gn(v.coverage), source: k } : null;
    Jd(yk(qd(), Xd()));
    const M = Co() ? u1(Sr.sceneState, y) : null;
    return { background: N, layers: w, space: M };
  }
  function u1(i, s) {
    const c = ad(i, p.frame), f = Yd(), h = Z0(f, c.scene), m = h != null && h.url ? Mt.sceneBox(h.url) : null, y = m && hm(h.kind, m), w = Gb(), k = p.showObjects ? Ak(w, i, c) : null, N = k != null && k.url ? Mt.sceneBox(k.url) : null, M = N ? [{ box: hm(k.kind, N), value: k.value }] : [], E = p.showObjects ? Uk(i, p.frame, v.stickers, { media: s }) : [], L = Ek(Ok(c, y, E, M)), D = p.showGrid && !p.fullscreen ? Gk((L == null ? void 0 : L.radius) || ro) : null;
    return {
      gizmo: f1(c),
      grid: D,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: h,
      stickerUrls: Ck(w, i),
      sticker: k,
      stickers: E,
      sphere: L
    };
  }
  function f1(i) {
    const s = Po(), c = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !p.showObjects || !_a(s) || !(c != null && c.active) ? null : { mode: p.gizmoMode, transform: Q0(c) };
  }
  function d1() {
    if (!Pe.backgroundDirty && Pe.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = ki(), f = ce.width, h = ce.height, m = Mt.render({
      width: f,
      height: h,
      camera: c ? Au(Ur(), f, h, c.sphere) : Ud(),
      background: i,
      layers: s,
      space: c
    }), y = ce.getContext("2d");
    y.clearRect(0, 0, f, h), !i && !s.length && !c ? (y.fillStyle = "#070707", y.fillRect(0, 0, f, h)) : m && y.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, h), Pe.backgroundWasVisible = !!m, Pe.backgroundDirty = !1, j = null, wi();
  }
  function dp(i, s, c, f) {
    const { background: h, layers: m } = ki();
    if (!h && !m.length) return !1;
    const y = Mt.render({ width: s.w, height: s.h, camera: pl(c), background: h, layers: m, owner: f });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function p1(i) {
    const s = ki(), c = JSON.stringify([i, ce.width, ce.height, vm(s)]);
    if (c === j) return;
    const f = Mt.renderUnwrap({ width: i.w, height: i.h, ...s }), h = ce.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, ce.width, ce.height), f && h.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), j = f ? c : null, Pe.backgroundWasVisible = !1;
  }
  function h1(i = !1) {
    const s = C.width, c = C.height, f = xi();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || A.clearRect(0, 0, s, c), Es(), p1(f), p.showGrid && !p.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = f.x + f.w * m / 16;
        A.beginPath(), A.moveTo(y, f.y), A.lineTo(y, f.y + f.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = f.y + f.h * m / 8;
        A.beginPath(), A.moveTo(f.x, y), A.lineTo(f.x + f.w, y), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(f.x, f.y + f.h / 2), A.lineTo(f.x + f.w, f.y + f.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const h = f.y + f.h * 0.57;
      A.fillText("Left", f.x + f.w * 0.25, h), A.fillText("Front", f.x + f.w * 0.5, h), A.fillText("Right", f.x + f.w * 0.75, h), A.fillText("Back", f.x + 38, h), A.fillText("Back", f.x + f.w - 38, h);
    }
  }
  function pp(i, s, c = 1) {
    let f = !1;
    A.strokeStyle = s, A.lineWidth = c, A.beginPath();
    for (const h of i) {
      const m = xa(h);
      if (!m) {
        f = !1;
        continue;
      }
      f ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), f = !0);
    }
    A.stroke();
  }
  function m1(i = !1) {
    const s = C.width, c = C.height;
    if (i || A.clearRect(0, 0, s, c), Es(), d1(), p.showGrid && !p.fullscreen && ki().space)
      g1();
    else if (p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push($n(h, y));
        pp(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push($n(y, h));
        pp(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", f.forEach((h) => {
        const m = xa(h.dir);
        m && A.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function g1() {
    const i = Au(Ur(), C.width, C.height, zi()), s = Mk(i, [0, 0, 0], C.width, C.height);
    s && (A.fillStyle = "rgba(255, 221, 87, 0.9)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", A.fillText("ERP origin", s.x, s.y - 12));
  }
  function y1(i, s = null, c = null, f = null) {
    if (p.mode === "frame") {
      const h = s || Ge();
      if (!h) return [];
      const m = c || en(h);
      return Y1(i, h, m);
    }
    return xp(i, f);
  }
  function As(i, s = null, c = null, f = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = xp([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = Oo(i);
    return m ? Yr(m, s, c, f) : null;
  }
  function b1(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = fr(c, i.layerKind), h = yi(c, i.layerKind, f), m = (h == null ? void 0 : h.centerUv) || xc(c, i.layerKind, f), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], k = p.mode === "frame" ? Ge() : null, N = k ? en(k) : null;
    for (const ie of f) {
      const xe = (ie == null ? void 0 : ie.geometry) || null, Ke = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], Ye = y1(Ke, k, N, y).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!Ye.length) continue;
      const st = Pi(String((ie == null ? void 0 : ie.toolKind) || "pen")), be = Dn[st] || Dn[Zr];
      w.push({
        points: Ye,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || i.layerKind || "paint")
      });
    }
    const M = As(m, null, k, N, y);
    if (!M) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, ie), ie;
    }
    const L = db(h).map((ie) => As(ie, M.x, k, N, y)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (L.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, ie), ie;
    }
    const D = (ie, xe) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: ie,
      b: xe
    }), q = D(L[0], L[1]), J = D(L[1], L[2]), ne = D(L[2], L[3]), ae = D(L[3], L[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...q },
        { edge: "right", ...J },
        { edge: "bottom", ...ne },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: q.x, y: q.y },
      rotateHandle: { x: q.x, y: q.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return p._strokeGeomCache.set(s, me), me;
  }
  function v1(i, s) {
    const c = p.mode === "frame" ? Ge() : null, f = c ? en(c) : null, h = cp(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = As(h, null, c, f, m), k = r1(i).map((L) => As(L, (y == null ? void 0 : y.x) ?? null, c, f, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(k) || k.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, L), L;
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
    return p._strokeGeomCache.set(s, E), E;
  }
  function Yr(i, s = null, c = null, f = null, h = {}) {
    if (p.mode === "frame") {
      const M = c || Ge(), E = f || en(M);
      if (!M || !E) return null;
      const L = M ? Aa(M, i) : null;
      return L ? {
        x: Number(E.x || 0) + Number(L.x || 0) * Number(E.w || 0),
        y: Number(E.y || 0) + Number(L.y || 0) * Number(E.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Hc(i, s);
    const m = 1e-4, y = Dc().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const w = C.width, k = C.height, N = Math.max(w, k) * 2;
    return {
      x: Q(y.x, -N, w + N),
      y: Q(y.y, -N, k + N),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function _1(i, s = []) {
    if (p.mode !== "pano" || bt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? SI(0.035, 0.2, Math.min(...c)) : 1;
  }
  function w1(i) {
    if (cr(i) && !Oi(i.clip, p.frame)) return { visible: !1 };
    const s = Jt(i), c = $n(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = p.mode === "frame" ? Ge() : null, h = f ? en(f) : null, m = p.mode === "pano" && (bt(i) || zn(i)), y = m ? { clipBehind: !0 } : null, w = Yr(c, null, f, h, y);
    if (!w) return { visible: !1 };
    const k = Ps(i), M = sp(i).map((pe) => Yr(pe, w.x, f, h, y)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (M.length < 4) return { visible: !1 };
    const E = Si(k, 0, k.tanY), L = Si(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), D = Yr(E, w.x, f, h, y);
    if (!D) return { visible: !1 };
    const q = Yr(L, (D == null ? void 0 : D.x) ?? w.x, f, h, y), J = ((q == null ? void 0 : q.x) ?? D.x) - D.x, ne = ((q == null ? void 0 : q.y) ?? D.y) - D.y, ae = Math.hypot(J, ne) || 1, me = {
      x: D.x + J / ae * 30,
      y: D.y + ne / ae * 30
    }, ie = Yr(Si(k, 0, k.tanY), w.x, f, h, y), xe = Yr(Si(k, k.tanX, 0), w.x, f, h, y), Ke = Yr(Si(k, 0, -k.tanY), w.x, f, h, y), Ye = Yr(Si(k, -k.tanX, 0), w.x, f, h, y);
    if (!ie || !xe || !Ke || !Ye) return { visible: !1 };
    const st = [
      w,
      ...M,
      D,
      q,
      ie,
      xe,
      Ke,
      Ye
    ];
    if (m && !st.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const be = _1(i, st), oe = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Ke.x,
        y: Ke.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Ye.x,
        y: Ye.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: oe,
      rotateStemBase: { x: D.x, y: D.y },
      rotateHandle: me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Ut(i) {
    if (Qt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = bb(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), b1(i, m));
    }
    if (gn(i)) {
      const h = i1(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), v1(i, h));
    }
    const s = o1(i), c = p._strokeGeomCache.get(s);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const f = w1(i);
    return p._strokeGeomCache.set(s, f), f;
  }
  function Cs(i, s, c, f = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const y = m / c;
      let w = 0, k = 0;
      s === 0 ? (w = y, k = 0) : s === 1 ? (w = 1, k = y) : s === 2 ? (w = 1 - y, k = 1) : (w = 0, k = 1 - y);
      const N = lp(i, w, k), M = p.mode === "unwrap" ? Hc(N, f) : xa(N);
      M && h.push(M);
    }
    return h;
  }
  function x1(i, s) {
    const c = Jt(i), f = $n(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), h = p.mode === "unwrap" ? Hc(f) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, w = [
      Cs(i, 0, y, m),
      Cs(i, 1, y, m),
      Cs(i, 2, y, m),
      Cs(i, 3, y, m)
    ];
    xd(A, w, { selected: s });
  }
  function S1() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Gc() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(f.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function Is(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(s[c].x, s[c].y);
      i.closePath();
    }
  }
  function hp(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const h = Q(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * h;
    const y = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    Is(A, f), A.fillStyle = w, A.fill(), A.strokeStyle = y, A.lineWidth = k, A.stroke(), A.save(), A.strokeStyle = y, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const N = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, E = s ? 12 : 9;
    N.forEach((L) => {
      const q = N.find((me) => (me == null ? void 0 : me.edge) === M[L == null ? void 0 : L.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, J = q.x - L.x, ne = q.y - L.y, ae = Math.hypot(J, ne) || 1;
      A.beginPath(), A.moveTo(L.x, L.y), A.lineTo(L.x + J / ae * E, L.y + ne / ae * E), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function k1(i, s, c, f) {
    const h = Q(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (zn(i)) {
      hp(s, c, f);
      return;
    }
    if (bt(i)) {
      const y = A.globalAlpha;
      A.globalAlpha = y * kb(i) * h, p.mode === "frame" ? (A.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = c ? 2 : 1, Is(A, s.corners), A.stroke()) : x1(i, c), A.globalAlpha = y;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * h, A.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Is(A, s.corners), A.fill(), A.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = c ? 2.8 : 1.9, Is(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function mp(i, s, c) {
    if (bt(i)) {
      Hy(A, s, { accent: c });
      return;
    }
    A.fillStyle = c, s.corners.forEach((f) => {
      A.beginPath(), A.arc(f.x, f.y, 6.5, 0, Math.PI * 2), A.fill();
    }), zn(i) && (A.strokeStyle = c, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, E, L, D;
      const h = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((E = f.a) == null ? void 0 : E.x) ?? f.x), m = (((L = f.b) == null ? void 0 : L.y) ?? f.y) - (((D = f.a) == null ? void 0 : D.y) ?? f.y), y = Math.hypot(h, m) || 1, w = h / y, k = m / y, N = 10;
      A.beginPath(), A.moveTo(f.x - w * N, f.y - k * N), A.lineTo(f.x + w * N, f.y + k * N), A.stroke();
    }), A.lineCap = "butt"), Qt(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = c, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function M1() {
    var m;
    const i = p.mode === "frame" ? [] : dr(), s = i.length > 1, c = t === "cutout" ? S1() : kr(), f = c.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${zn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== c || p._sortedItemsCache.orderKey !== f) && (p._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const w = p.mode !== "frame" && !s && Ld(y);
      if (p.mode === "frame" && !w || !p.showObjects && !zn(y)) continue;
      const k = bt(y), N = zn(y), M = yn(y);
      if (!k && !N || cr(y) && !Oi(y.clip, p.frame)) continue;
      const E = Ut(y);
      if (t !== "stickers" && !E.visible)
        continue;
      const L = Q(Number((E == null ? void 0 : E.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const D = N && t === "cutout" && p.mode === "pano" ? Q(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= D, k1(y, E, w, M), w && E.visible) {
        const q = M ? "#ff4d4f" : k && $t(y) ? "#f59e0b" : "#0070f3", J = A.globalAlpha;
        A.globalAlpha = J * L, mp(y, E, q), A.globalAlpha = J;
      }
      A.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !Ge() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, w = Q(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= w, hp(y.geom, y.selected, y.locked), y.selected && mp(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (s) {
      const y = ws(i);
      if (y != null && y.visible) {
        const w = Sc(i) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(y.corners[0].x, y.corners[0].y);
        for (let k = 1; k < y.corners.length; k += 1) A.lineTo(y.corners[k].x, y.corners[k].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = w, y.corners.forEach((k) => {
          A.beginPath(), A.arc(k.x, k.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      i.forEach((y) => {
        if (!Qt(y) && !gn(y)) return;
        const w = Ut(y);
        if (!(w != null && w.visible)) return;
        const k = yn(y) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let N = 1; N < w.corners.length; N += 1) A.lineTo(w.corners[N].x, w.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = Bp(p.interaction.start, p.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), A.fill(), A.stroke(), A.restore();
    }
  }
  function gp(i, s = !1) {
    const c = Q(co(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function N1(i) {
    if (!mi || !i) return !1;
    const s = mi.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || mi.clientWidth || 0)), f = Math.round(Number(s.clientHeight || mi.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function P1() {
    if (p.outputPreviewRect = null, I.outputPreviewToggle.visible = p.mode !== "frame" && !!Ge(), t !== "cutout" || !I.cameraPreview) return;
    if (p.mode === "frame") {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1;
      return;
    }
    const i = Ge();
    I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = R == null ? void 0 : R.getContext("2d");
    if (!i || !s) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, R.width, R.height), _o = null;
      return;
    }
    const c = gp(i, !!p.outputPreviewExpanded);
    I.cameraPreview.width = c.width, I.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (R.width !== h.w || R.height !== h.h) && (R.width = h.w, R.height = h.h);
    const m = JSON.stringify([h, pi(i), vm(ki())]);
    let y = m === _o;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = dp(s, h, i, "camera_preview"), _o = y ? m : null), !y) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = $c() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const w = N1(c);
    I.cameraPreview.ready = !0, I.cameraPreview.label = w ? "" : "Loading preview", I.cameraPreview.settled = w && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame;
  }
  function Kc(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return lp(i, c, f);
  }
  function Oo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return mc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function A1(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function C1(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: bn(i, "widthScale", 1),
      pressureLike: bn(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function I1(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Bc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (f) {
      let J = null;
      i.forEach((ne) => {
        const ae = Number((ne == null ? void 0 : ne.u) || 0), me = Number((ne == null ? void 0 : ne.v) || 0), ie = (ae % 1 + 1) % 1, xe = J == null ? ie : J + Jn(ie, (J % 1 + 1) % 1);
        h.set(ne, { x: xe, y: me }), J = xe;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : h.get(J) || A1(J), y = (J, ne, ae, me = {}) => {
      const ie = f ? (Number(ne) % 1 + 1) % 1 : Number(ne), xe = C1(J, ie, ae, me);
      return h.set(xe, { x: Number(ne), y: Number(ae) }), xe;
    }, w = (J, ne, ae) => {
      const me = m(J), ie = m(ne);
      return y(J, Qn(me.x, ie.x, ae), Qn(me.y, ie.y, ae), {
        t: Qn(Number((J == null ? void 0 : J.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), ae),
        widthScale: Qn(bn(J, "widthScale", 1), bn(ne, "widthScale", 1), ae),
        pressureLike: Qn(bn(J, "pressureLike", 1), bn(ne, "pressureLike", 1), ae)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [y(i[0], J.x, J.y)];
    }
    const k = I1(s, c), N = (J, ne) => {
      const ae = [0];
      for (let oe = 1; oe < J.length; oe += 1) {
        const pe = m(J[oe - 1]), Te = m(J[oe]);
        ae.push(ae[oe - 1] + Math.hypot(Te.x - pe.x, Te.y - pe.y));
      }
      const me = ae[ae.length - 1] || 0;
      if (me <= 1e-8) {
        const oe = J[0], pe = m(oe);
        return [y(oe, pe.x, pe.y)];
      }
      const ie = [];
      let xe = 0;
      for (let oe = 0; oe <= me + 1e-9; oe += ne) {
        for (; xe < ae.length - 2 && ae[xe + 1] < oe; ) xe += 1;
        const pe = ae[xe], Te = ae[xe + 1], Se = Math.max(1e-8, Te - pe);
        ie.push(w(J[xe], J[xe + 1], Q((oe - pe) / Se, 0, 1)));
      }
      const Ke = J[J.length - 1], Ye = m(Ke), st = ie[ie.length - 1], be = st ? m(st) : null;
      return (!be || Math.hypot(be.x - Ye.x, be.y - Ye.y) > ne * 0.35) && ie.push(y(Ke, Ye.x, Ye.y)), ie;
    }, M = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const ne = m(J[0]), ae = [y(J[0], ne.x, ne.y)];
      for (let xe = 0; xe < J.length - 1; xe += 1) {
        const Ke = J[xe], Ye = J[xe + 1], st = m(Ke), be = m(Ye), oe = y(
          Ke,
          st.x * 0.75 + be.x * 0.25,
          st.y * 0.75 + be.y * 0.25,
          {
            t: Number(Ke.t || 0) * 0.75 + Number(Ye.t || 0) * 0.25,
            widthScale: bn(Ke, "widthScale", 1) * 0.75 + bn(Ye, "widthScale", 1) * 0.25,
            pressureLike: bn(Ke, "pressureLike", 1) * 0.75 + bn(Ye, "pressureLike", 1) * 0.25
          }
        ), pe = y(
          Ke,
          st.x * 0.25 + be.x * 0.75,
          st.y * 0.25 + be.y * 0.75,
          {
            t: Number(Ke.t || 0) * 0.25 + Number(Ye.t || 0) * 0.75,
            widthScale: bn(Ke, "widthScale", 1) * 0.25 + bn(Ye, "widthScale", 1) * 0.75,
            pressureLike: bn(Ke, "pressureLike", 1) * 0.25 + bn(Ye, "pressureLike", 1) * 0.75
          }
        );
        ae.push(oe, pe);
      }
      const me = J[J.length - 1], ie = m(me);
      return ae.push(y(me, ie.x, ie.y)), ae;
    }, E = N(i, k);
    if (E.length < 3) return E;
    const L = c ? 2 : 1;
    let D = E.slice();
    for (let J = 0; J < L; J += 1) D = M(D);
    return N(D, Math.max(k * 0.75, 55e-5));
  }
  function bn(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function E1(i) {
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
  function ka(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const h = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, f.width, f.height), h.imageSmoothingEnabled = !0), { canvas: f, ctx: h };
  }
  function Ma() {
    const i = Pa();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Na() {
    const i = Pa();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function yp() {
    const i = _c(), s = Na();
    return i ? `${s}:${i}` : s;
  }
  function O1() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function F1() {
    p.paintCompositeRevision += 1;
  }
  function T1() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function bp() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), p.paintEngineRevisionKey = Ma();
  }
  function vp() {
    v.painting_layer !== null && (v.painting_layer = null), Ms = "";
  }
  function Ft() {
    T1(), Pe.backgroundDirty = !0, Pe.dirty = !0;
  }
  function hr({ rebuildPaintEngine: i = !1 } = {}) {
    vp(), O1(), Ft(), i && bp();
  }
  function Fo() {
    vp(), F1(), Ft();
  }
  function Es() {
    var f;
    const i = Pa(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = af(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const c = Ma();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (f = p.paintEngine) == null || f.rebuildCommitted(v));
  }
  function Pa() {
    const i = Math.max(1, P(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function jn() {
    return Pa();
  }
  function D1(i, s, c, f, h = null) {
    const m = E1(i), y = bn(s, "widthScale", 1) * bn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Ar) * c * y) : Math.max(0.5, m.value / (2 * Math.PI) * c * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function L1(i, s, c = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = c.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${k})`;
  }
  function R1(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function V1(i, s, c, f, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), L1(i, c, h);
    const y = (w) => R1(i, w, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const k = s[w], N = s[w + 1];
      if (!k || !N) continue;
      const M = Number(k.x || 0), E = Number(k.y || 0), L = Number(N.x || 0), D = Number(N.y || 0), q = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(L) || !Number.isFinite(D) || !Number.isFinite(q) || !Number.isFinite(J)) continue;
      const ne = L - M, ae = D - E, me = Math.hypot(ne, ae);
      if (!Number.isFinite(me) || me < 1e-6) {
        y(k);
        continue;
      }
      if (me > Math.max(f.w, f.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(q, J)), xe = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Ke = Math.max(1, Math.ceil(me / xe));
      for (let Ye = 0; Ye <= Ke; Ye += 1) {
        const st = Ye / Ke;
        y({
          x: Qn(M, L, st),
          y: Qn(E, D, st),
          radiusPx: Qn(q, J, st)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function $1(i, s, c, f) {
    V1(i, s, c, f, { preview: !1 });
  }
  function z1(i, s, c, f, h) {
    var w, k, N, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const E = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(E.r || 0) * 255)}, ${Math.round(Number(E.g || 0) * 255)}, ${Math.round(Number(E.b || 0) * 255)}, ${Number(E.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((k = s[0]) == null ? void 0 : k[y]) || 0) * f.h);
    for (let E = 1; E < s.length; E += 1)
      i.lineTo(Number(((N = s[E]) == null ? void 0 : N[m]) || 0) * f.w, Number(((M = s[E]) == null ? void 0 : M[y]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function _p(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function j1(i, s) {
    const c = _p(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: D1(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function wp(i, s, c = null) {
    var w, k, N, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return z1(i.ctx, _p(h), h, f), !0;
    const y = j1(h, f);
    return y.length ? ($1(i.ctx, y, h, f), !0) : !1;
  }
  function H1(i, s, c, f = 8) {
    const h = new Uint8Array(s * c), m = [], y = new Int32Array(s * c), w = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let N = 0; N < s; N += 1) {
        const M = k * s + N;
        if (h[M] || i[M] <= f) continue;
        let E = 0, L = 0;
        y[L] = N, w[L] = k, L += 1, h[M] = 1;
        const D = [];
        let q = N, J = k, ne = N, ae = k;
        for (; E < L; ) {
          const me = y[E], ie = w[E];
          E += 1, D.push({ x: me, y: ie }), me < q && (q = me), ie < J && (J = ie), me > ne && (ne = me), ie > ae && (ae = ie);
          const xe = [
            [(me - 1 + s) % s, ie],
            [(me + 1) % s, ie],
            [me, ie - 1],
            [me, ie + 1]
          ];
          for (const [Ke, Ye] of xe) {
            if (Ye < 0 || Ye >= c) continue;
            const st = Ye * s + Ke;
            h[st] || i[st] <= f || (h[st] = 1, y[L] = Ke, w[L] = Ye, L += 1);
          }
        }
        m.push({ pixels: D, minX: q, minY: J, maxX: ne, maxY: ae });
      }
    return m;
  }
  function G1(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, N) => k - N);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, h = 0;
    for (let k = 0; k < c.length; k += 1) {
      const N = c[k], E = (k === c.length - 1 ? c[0] + s : c[k + 1]) - N - 1;
      E > f && (f = E, h = k);
    }
    const m = (c[(h + 1) % c.length] + s) % s;
    let y = 1 / 0, w = -1 / 0;
    for (const k of c) {
      const N = (k - m + s) % s;
      y = Math.min(y, N), w = Math.max(w, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - y + 1)
    };
  }
  function K1(i, s, c = {}) {
    var N;
    const f = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || f < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, f, h), w = new Uint8Array(f * h);
    for (let M = 0; M < w.length; M += 1) w[M] = y.data[M * 4 + 3];
    return H1(w, f, h, 8).map((M, E) => {
      const L = G1(M, f);
      if (!L) return null;
      const D = Number(L.widthPx || 0), q = M.maxY - M.minY + 1, J = Number(L.startX || 0), ne = document.createElement("canvas");
      ne.width = D, ne.height = q;
      const ae = ne.getContext("2d");
      if (!ae) return null;
      const me = ae.createImageData(D, q);
      return M.pixels.forEach(({ x: ie, y: xe }) => {
        const Ke = (xe * f + ie) * 4, Ye = (Number(ie || 0) - J + f) % f, st = ((xe - M.minY) * D + Ye) * 4;
        me.data[st + 0] = y.data[Ke + 0], me.data[st + 1] = y.data[Ke + 1], me.data[st + 2] = y.data[Ke + 2], me.data[st + 3] = y.data[Ke + 3];
      }), ae.putImageData(me, 0, 0), {
        id: Go("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + E * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / h,
          u1: D / f,
          v1: (M.maxY + 1) / h
        },
        rasterDataUrl: ne.toDataURL("image/png"),
        transform: {
          du: J / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Aa(i, s) {
    if (!i || !s) return null;
    const c = Ps(i), f = Ku(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const h = Ku(s, c.right) / f, m = Ku(s, c.up) / f;
    return {
      x: (h / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function B1(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = xi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => xa(Oo(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function xp(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const f = xi();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + Jn(m, s);
        return {
          x: f.x + y * f.w,
          y: f.y + Number(h.v || 0) * f.h
        };
      });
    }
    const c = i.map((f) => xa(Oo(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function W1(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], h = i[(c + 1) % i.length];
      if (!f || !h || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(f.x), Number(h.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function U1(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = Oo(h), y = Aa(s, m);
      if (!y) return [];
      f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return W1(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function Y1(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const h of i) {
      const m = Oo(h), y = Aa(s, m);
      y && f.push({
        x: Number(c.x || 0) + Number(y.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(y.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function X1() {
    const i = Ge(), s = Jc(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: h } = Kk(i, s, { width: C.width, height: C.height }), m = q1(c);
    return A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, C.width, C.height), dp(A, f, h) || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(f.x, f.y, f.w, f.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, C.width, C.height), A.roundRect(c.x, c.y, c.w, c.h, m), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = fI, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), A.stroke(), A.restore(), !0;
  }
  function q1(i) {
    const s = Math.max(1e-6, Number(Pe.frameCanvasScale || 1));
    return Math.min(Oe * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Xr() {
    var s;
    const i = p.mode === "frame" ? Ge() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = Ho(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function J1() {
    var k, N;
    if (((k = p.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let c;
    if (p.mode === "frame") {
      const M = Ge(), E = en(M);
      c = U1(s, M, E);
    } else
      c = B1(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), w = Math.round(Number(h.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) A.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    A.closePath(), f ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${y},${w},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function Z1() {
    const i = p.frameRollOverlayVisual, s = Q(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = en(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Ar, m = Math.hypot(c.w, c.h) * 0.55, y = Math.cos(h) * m, w = Math.sin(h) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(c.x, c.y, c.w, c.h), A.clip(), A.translate(f.x, f.y), A.rotate(h);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    A.beginPath();
    for (let N = -m; N <= m; N += k)
      A.moveTo(N, -m), A.lineTo(N, m);
    for (let N = -m; N <= m; N += k)
      A.moveTo(-m, N), A.lineTo(m, N);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(f.x - y, f.y - w), A.lineTo(f.x + y, f.y + w), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function Q1() {
    return t !== "cutout" || !Ge() ? 0 : hI;
  }
  function ev() {
    const i = Q(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = Ge(), c = s ? Ut(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    c != null && c.visible && f && (p.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: Ld(s),
      locked: yn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : h ? p.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, C.width, C.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) A.lineTo(m[y].x, m[y].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function Sp() {
    vo = null, p.mode === "frame" ? (Pe.frameSafeRect = Tv(), X1()) : p.mode === "unwrap" ? h1(!1) : m1(!1), ev(), t === "cutout" && P1(), M1(), Xr(), J1(), Z1(), I.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Xe(), Pe.hasPresentedFrame || (Pe.hasPresentedFrame = !0, ce.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame && p.mode !== "frame");
    const i = n1();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === yr ? (ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", i.detail)) : (ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind"));
  }
  function tv(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function nv() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = yb();
  }
  function se(i = {}) {
    var w, k, N, M, E, L, D, q, J, ne;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), h = String(((w = p.interaction) == null ? void 0 : w.kind) || "");
    (!s || h === "view" || h === "pan_frame" || tv() || !!((k = p.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Pe.backgroundDirty = !0), s && Od() && (p.livePaintInteractionRevision += 1, Pe.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (Ec(), Wr()), nv(), c && ((M = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || M.call(N), (E = e.setDirtyCanvas) == null || E.call(e, !0, !1)), c && !s && ((D = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || D.call(L, !0, !0), (ne = (J = (q = vr) == null ? void 0 : q.canvas) == null ? void 0 : J.setDirty) == null || ne.call(J, !0, !0)), Pe.dirty = !0;
  }
  function kp() {
    const i = C.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== s || C.height !== c || ce.width !== s || ce.height !== c ? (C.width = s, C.height = c, ce.width = s, ce.height = c, Pe.backgroundDirty = !0, Pe.dirty = !0, t === "cutout" && (Pe.pendingStableLayoutFrames = Math.max(Number(Pe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function rv(i = performance.now()) {
    var m, y;
    Pe.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = c, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const w = Q(
        (i - Number(p.frameRollOverlayStartTs || i)) / mI,
        0,
        1
      );
      p.frameRollOverlayAlpha = Qn(
        Number(p.frameRollOverlayFrom || 0),
        c,
        el(w)
      ), w >= 1 && (p.frameRollOverlayAlpha = c, c === 0 && (p.frameRollOverlayVisual = null)), Pe.dirty = !0;
    }
    const f = Q1();
    if (Math.abs(f - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = f, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const w = Q(
        (i - Number(p.cutoutPanoDimStartTs || i)) / ng,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Qn(
        Number(p.cutoutPanoDimFrom || 0),
        f,
        el(w)
      ), w >= 1 && (p.cutoutPanoDimAlpha = f), w >= 1 && f === 0 && (p.cutoutPanoDimCorners = null), Pe.dirty = !0;
    }
    const h = t === "cutout" && Ge() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const w = Q(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / ng,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Qn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        el(w)
      ), w >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Pe.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const w = Math.max(1, Number(p.outputPreviewAnimDurationMs)), k = Q((i - Number(p.outputPreviewAnimStartTs || 0)) / w, 0, 1), M = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? xI(k) : NI(k);
      p.outputPreviewAnim = Qn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, M), Pe.dirty = !0, k >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const w = p.viewTween, k = Q((i - w.startTs) / w.durationMs, 0, 1), N = el(k);
      p.viewYaw = Gt(w.startYaw + w.deltaYaw * N), p.viewPitch = w.startPitch + (w.targetPitch - w.startPitch) * N, p.viewFov = w.startFov + (w.targetFov - w.startFov) * N, Pe.backgroundDirty = !0, Pe.dirty = !0, k >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(pn.state.inertia.vx || 0), p.viewInertia.vy = Number(pn.state.inertia.vy || 0), p.viewInertia.active = !!pn.state.inertia.active, pn.stepInertia(i) && (p.viewInertia.vx = Number(pn.state.inertia.vx || 0), p.viewInertia.vy = Number(pn.state.inertia.vy || 0), p.viewInertia.active = !!pn.state.inertia.active, Pe.backgroundDirty = !0, Pe.dirty = !0), Pe.pendingStableLayoutFrames > 0 && (Pe.pendingStableLayoutFrames -= 1, Pe.dirty = !0), Pe.dirty) {
      if (Pe.pendingStableLayoutFrames > 0)
        return;
      Pe.dirty = !1, Sp();
    }
  }
  function Mp(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Pe.tickErrorSignature !== c && (Pe.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = tr, I.stageStatusDetail = "frame", ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind");
    }
  }
  function Np(i = performance.now()) {
    Pe.running && (Mp(() => rv(i)), Pe.running && (Pe.rafId = requestAnimationFrame(Np)));
  }
  function iv() {
    !Pe.running || !kp() || Mp(() => {
      Pe.dirty = !1, Sp();
    });
  }
  const Pp = new ResizeObserver(iv);
  Pp.observe(C);
  function ov() {
    Pe.running = !1, Pe.rafId && cancelAnimationFrame(Pe.rafId), Pe.rafId = 0, Pp.disconnect();
  }
  function et() {
    r || x && v.stickers.some(gc) || (p.historyController.commitActionGroup(JSON.stringify(cm(v))), nu());
  }
  function Wc(i) {
    var h;
    if (r) return;
    Tn();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (nu(), !s) return;
    const c = JS(v, s), f = (h = v.timeline) == null ? void 0 : h.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), x && v.timeline.fps !== f && At.seek(Math.round(p.frame * v.timeline.fps / f)), p.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], p.selectedId && Ao(), Pe.backgroundDirty = !0, c.paintingChanged ? hr() : Ft(), Fn(), ze(), Nn(), se({ cause: "cutout_frame" });
  }
  function Ap() {
    var c, f;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], s = Number((f = p.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Fn() {
    sr();
    const i = X2({
      editor: p,
      swatches: _l,
      paintColorPopOpen: Z ? !Z.hidden : !1,
      colorToCss: Cr,
      colorsApproximatelyEqual: wl,
      rgb01ToHsv: Uu,
      hsv01ToRgb: Wu,
      getBrushPresetIdForTool: Pi,
      isActiveLassoTool: Nb
    });
    if (Object.assign(I.paintDock, i), Ob(), !i.visible) {
      Z && (Z.hidden = !0);
      return;
    }
    we && (clearTimeout(we), we = 0), W && (!i.colorEnabled && Z && !Z.hidden && (we = window.setTimeout(() => {
      Z.hidden = !0, I.paintDock.colorPopOpen = !1, we = 0;
    }, 170)), Z && (Z.style.setProperty("--picker-hue-color", i.pickerHueColor), Z.style.setProperty("--picker-sat", i.pickerSat), Z.style.setProperty("--picker-val", i.pickerVal), Z.style.setProperty("--picker-hue", i.pickerHue)), ge && (ge.style.left = i.pickerSvLeft, ge.style.top = i.pickerSvTop), Me && (Me.style.left = i.pickerHueLeft));
  }
  function To() {
    const i = Jt(t === "cutout" && p.mode === "frame" ? Ge() : Nt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: ri(i)
    }, ze());
  }
  function ze() {
    var be, oe, pe, Te;
    if (qr(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = Y2(v.ui_settings);
    if (a) {
      I.sidePanel = q2({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Gn
      });
      return;
    }
    const s = Nt(), c = t === "cutout" && p.mode === "frame" ? Ge() : null, f = c || s, h = c ? [c] : dr(), m = c ? "shot" : xs();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const Se = Jt(f);
      p.panelLastValues = {
        yaw_deg: Number(Se.yaw_deg || 0),
        pitch_deg: Number(Se.pitch_deg || 0),
        hFOV_deg: Number(Se.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(Se.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(Se.rot_deg || 0),
        roll_deg: Number(Se.roll_deg || 0),
        aspect_id: ri(Se)
      }, cr(f) && (p.panelLastValues.opacity = uo(f, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, k = x && p.inspectCamera, N = Po(), M = k ? nk(v.camera, p.frame) : N ? ok(N, p.frame) : cr(w) ? p.panelLastValues : w || y, E = k || (N ? _a(N) : !!w && !yn(w));
    p.panelWasEnabled = E, Ec();
    let L = null;
    if (c) {
      const Se = kc({ item: c, kind: "shot", label: "Frame" });
      L = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Se.label,
        currentIcon: Se.icon || null,
        items: [{
          id: String(c.id || ""),
          label: Se.label,
          icon: Se.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const Se = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? kr().forEach((He, Ze) => {
        var zt, Nr;
        if (!He) return;
        const wt = x ? gf(He) : $t(He) ? String(He.id || Vu) : String(((Nr = (zt = v.assets) == null ? void 0 : zt[He.asset_id]) == null ? void 0 : Nr.name) || He.asset_id || He.id), vn = `${Ze + 1}. ${wt}${$t(He) && No(He) ? " (hidden)" : ""}`, Ct = kc({ item: He, label: vn, kind: "image" });
        Se.push({ id: He.id, label: Ct.label, icon: Ct.icon, item: He, kind: "image" });
      }) : Rd().forEach((He) => {
        if (!(He != null && He.item)) return;
        const Ze = kc(He);
        Se.push({ id: He.item.id, label: Ze.label, icon: Ze.icon, item: He.item, kind: He.kind });
      });
      const qe = (w == null ? void 0 : w.id) || "", Je = k ? { label: "Camera", icon: ke.camera } : N ? { label: gf(N), icon: ke.globe } : Se.find((He) => He.id === qe) || Se[0];
      L = {
        label: "Selection",
        open: !1,
        disabled: Se.length <= 1,
        currentLabel: Je.label,
        currentIcon: Je.icon || null,
        items: Se.map((He) => ({
          id: He.id,
          label: He.label,
          icon: He.icon || null,
          active: He.id === qe
        }))
      };
    }
    const D = [], q = (Se, qe, Je, He, Ze) => {
      const wt = Q(Number(M[Se] || 0), Je, He);
      D.push({
        key: Se,
        label: qe,
        min: Je,
        max: He,
        step: Ze,
        value: wt,
        displayValue: Ho(wt),
        fillPct: Q((wt - Je) / Math.max(1e-6, He - Je) * 100, 0, 100),
        enabled: E && !r
      });
    }, J = [];
    k ? (q("position_x", "X", -100, 100, 0.01), q("position_y", "Y", -100, 100, 0.01), q("position_z", "Z", -100, 100, 0.01), q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("roll_deg", "Roll", -180, 180, 0.1), q("hFOV_deg", "FOV", 1, 179, 0.1)) : N ? (q("position_x", "X", -100, 100, 0.01), q("position_y", "Y", -100, 100, 0.01), q("position_z", "Z", -100, 100, 0.01), q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("roll_deg", "Roll", -180, 180, 0.1), q("scale", "Scale", 0.01, 100, 0.01), q("opacity", "Opacity", 0, 100, 1)) : h.length > 1 ? (J.push(`Selected objects: ${h.length}`), J.push("Multi-selection supports z-order and delete.")) : (q("yaw_deg", "Yaw", -180, 180, 0.1), q("pitch_deg", "Pitch", -90, 90, 0.1), q("hFOV_deg", "H FOV", 1, 179, 0.1), q("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? q("rot_deg", "Rotation", -180, 180, 0.1) : q("roll_deg", "Roll", -180, 180, 0.1), x && q("opacity", "Opacity", 0, 100, 1));
    const ne = Array.isArray((oe = (be = v == null ? void 0 : v.painting) == null ? void 0 : be.paint) == null ? void 0 : oe.strokes) ? v.painting.paint.strokes.length : 0, ae = Array.isArray((Te = (pe = v == null ? void 0 : v.painting) == null ? void 0 : pe.mask) == null ? void 0 : Te.strokes) ? v.painting.mask.strokes.length : 0, me = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((Se) => String((Se == null ? void 0 : Se.name) || "")) : [], ie = wI(
      e,
      me.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), xe = !!String((ie == null ? void 0 : ie.src) || "").trim() || Br("pano_input_images").length > 0, Ke = kr().length > 0 || ne > 0, Ye = ae > 0, st = [
      { key: "mask", label: "Mask", icon: ke.circle_dashed_tool, visible: !!p.showMask, enabled: Ye },
      { key: "objects", label: "Paint / Images", icon: ke.image, visible: !!p.showObjects, enabled: Ke },
      { key: "panorama", label: "Panorama", icon: ke.globe, visible: !!p.showPanorama, enabled: xe }
    ].map((Se) => ({
      ...Se,
      ariaLabel: `Toggle ${Se.label.toLowerCase()}`,
      tip: Se.visible ? "Hide" : "Show"
    }));
    I.sidePanel = J2({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: L,
      enabled: E,
      selectedKind: k ? "camera" : N ? "world" : m,
      selectedItems: h,
      params: D,
      notes: J,
      visibilityRows: st,
      uiSettings: i,
      normalizeCoverageValue: Gn
    });
  }
  function qr() {
    if (!x || r) return;
    const i = Uc(), s = Le.selection, c = s && Mi(s.owner);
    if (s) {
      const h = c ? Ca(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => c[y].keyframes.some((w) => w.frame === m))), s.frames.length || (Le.selection = null);
    }
    const f = v.timeline.fps;
    I.timeline = eP(v, {
      frame: p.frame,
      span: i,
      selection: Le.selection,
      selectedId: p.inspectCamera ? "camera" : p.worldSelectedId || p.selectedId,
      expanded: Le.expanded ?? mf(v),
      openRows: Le.openRows,
      audio: sv() && I.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: At.playing,
      label: `${p.frame}f · ${(p.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: ju(e) !== null || Zk(e, ["bg_media", "sticker"])
    }), I.easing = Le.selection ? tP(c, Ca(Le.selection), Le.selection.frames, Ia(Le.selection.owner)) : null;
  }
  function Uc(i = null) {
    const s = v.timeline.fps, c = v.stickers.find($t), f = c ? Kd() : null, h = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0,
      f ? yy(c.clip, s, f.meta) : 0
    );
    return z0(v, { minimum: Math.round(s * 5), frames: h, openClip: i });
  }
  function Mi(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function Ca(i) {
    return i.lane ? [i.lane] : yo(Mi(i.owner));
  }
  function Ia(i) {
    if (i === "camera") return 0;
    const { clip: s } = Mi(i);
    return s.start - s.in;
  }
  function Os(i) {
    const s = Mi(i);
    return !!s && s.locked !== !0;
  }
  function Cp() {
    const i = Nt();
    cr(i) && !Oi(i.clip, p.frame) && pr(null);
  }
  function av(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, Cp(), Ft(), ze(), Xe(), se());
  }
  function sv() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function lv(i) {
    vi(), At.seek(i);
  }
  function Tn() {
    x && At.stop();
  }
  function Yc() {
    vi(), At.toggle();
  }
  function Do() {
    Ft(), ze(), Xe(), se();
  }
  function ji() {
    et(), lt(), Do();
  }
  function cv() {
    const { selection: i } = Le;
    Os(i.owner) && (Tn(), VS(Mi(i.owner), Ca(i), i.frames, p.frame - Ia(i.owner)), Le.selection = null, ji());
  }
  function Ip(i) {
    Tn();
    const s = Math.round(p.frame * i / v.timeline.fps);
    QS(v, i), Le.selection = null, At.seek(s), ji();
  }
  function uv() {
    const i = ju(e);
    i !== null && i !== v.timeline.fps && Ip(i);
  }
  function fv(i) {
    if (!(r || !x)) {
      if (i.type === "seek") {
        i.phase === "start" && vi(), At.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Yc();
        return;
      }
      if (i.type === "mute") {
        zd(), qr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? mf(v)), Le.selection = null, qr();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), qr();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !Oi(s.clip, p.frame) && lv(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? Ic(s.id) : pr(kr().find((c) => c.id === i.id) || null), p.inspectCamera = i.id === "camera", wi(), Le.selection = null, ze(), Xe(), se();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ia(i.owner), c = i.frames.map((m) => m - s), f = Le.selection, h = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(f.frames);
          for (const y of c)
            m.has(y) ? m.delete(y) : m.add(y);
          f.frames = [...m].sort((y, w) => y - w);
        } else
          Le.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        qr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !Os(s.owner)) return;
        const c = Mi(s.owner), f = Ca(s);
        if (i.phase === "start") {
          Tn(), Le.drag = { keyframes: f.map((y) => structuredClone(c[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Le;
        if (!(h != null && h.keyframes)) return;
        f.forEach((y, w) => {
          c[y].keyframes = structuredClone(h.keyframes[w]);
        });
        const m = $S(c, f, h.frames, i.delta, -Ia(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          Do();
          return;
        }
        Le.drag = null, m ? ji() : Do();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Tn(), Le.drag = { clip: { ...s.clip }, span: Uc(s.clip) };
          return;
        }
        const { drag: c } = Le;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? HS(s.clip, i.delta) : i.delta && i.mode === "start" ? GS(s.clip, f.start + i.delta) : i.delta && KS(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          Do();
          return;
        }
        Le.drag = null, Cp(), JSON.stringify(s.clip) !== JSON.stringify(f) ? ji() : Do();
        return;
      }
      if (i.type === "key-row") {
        if (!Os(i.owner)) return;
        Tn(), DS(Mi(i.owner), p.frame - Ia(i.owner)), ji();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || I.timeline.fpsLocked) {
          qr();
          return;
        }
        Ip(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          qr();
          return;
        }
        Tn(), v.timeline.length = s, ji();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !Os(s.owner)) return;
        Tn(), jS(Mi(s.owner), Ca(s), s.frames, i.easing), i.commit ? ji() : Do();
      }
    }
  }
  async function Ep(i) {
    if (r || t !== "stickers" && t !== "cutout" || !br(i)) return;
    if (x) {
      Tn(), await Op(i);
      return;
    }
    const s = qi("asset"), c = Ba(e, `add:${s}`, async () => {
      try {
        const { image: f } = await Wa(i);
        We.set(s, f);
        const h = qi("st");
        v.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: _i(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Ss()
        }), pr(v.stickers[v.stickers.length - 1]), Fs(), ze(), Xe(), se();
        const m = await Qi(i, {
          fetchApi: (k, N) => Kt.fetchApi(k, N)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, Eo(), et(), lt(), ze(), Xe(), se();
      } catch (f) {
        delete v.assets[s], We.delete(s);
        const h = Array.isArray(v.stickers) ? v.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (v.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && pr(null), ze(), Xe(), se(), lt()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function dv() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = ee == null ? void 0 : ee.openImagePicker) == null || i.call(ee, "add");
  }
  function pv() {
    var i;
    r || !x || (i = ee == null ? void 0 : ee.openImagePicker) == null || i.call(ee, "add-world");
  }
  async function hv(i) {
    r || !x || !br(i) || (Tn(), await Op(i, "world"));
  }
  function mv() {
    const i = { x: C.width / 2, y: C.height / 2 }, s = Co() ? Tc(i) : null;
    return $k(Ur(), s, zi());
  }
  async function Op(i, s = "sky") {
    const c = qi("st"), f = Ba(e, `add:${c}`, async () => {
      const { image: h } = await Wa(i), m = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: _i(30, Number(h.naturalWidth || h.width || 1), Number(h.naturalHeight || h.height || 1)),
        rot_deg: 0
      }, y = { kind: "file", filename: "" }, w = s === "world" ? lk(c, y, mv()) : dd(c, y, m, Ss());
      We.set(Sa(w), h), v.stickers.push(w), s === "world" ? Ic(c) : pr(w), Fs(), ze(), Xe(), se();
      try {
        const k = await Qi(i, {
          fetchApi: (M, E) => Kt.fetchApi(M, E)
        }), N = v.stickers.find((M) => M.id === c);
        if (!N) return;
        N.source = dl(k), We.set(Sa(N), h), et(), lt();
      } catch (k) {
        throw v.stickers = v.stickers.filter((N) => N.id !== c), p.selectedId === c && pr(null), p.worldSelectedId === c && Ao(), et(), lt(), k;
      } finally {
        ze(), Xe(), se();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function gv(i, s) {
    const c = Ba(e, `replace:${s}:${qi("asset")}`, async () => {
      const { image: f } = await Wa(i), h = await Qi(i, {
        fetchApi: (y, w) => Kt.fetchApi(y, w)
      }), m = v.stickers.find((y) => y.id === s);
      if (m) {
        m.source = dl(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          y.vFOV_deg = _i(y.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        We.set(Sa(m), f), Ft(), et(), lt(), ze(), Xe(), se();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function yv(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !bt(s) || $t(s) || !br(i)) return;
    if (x) {
      await gv(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = qi("asset"), h = Ba(e, `replace:${c}:${f}`, async () => {
      var M;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === c) || null;
      if (!m || !bt(m) || $t(m)) return;
      const y = String(m.asset_id || ""), w = y ? _n(((M = v.assets) == null ? void 0 : M[y]) || null) : null, k = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: E } = await Wa(i);
        We.set(f, E), m.asset_id = f, m.vFOV_deg = _i(
          Number(m.hFOV_deg || 30),
          Number(E.naturalWidth || E.width || 1),
          Number(E.naturalHeight || E.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ft(), ze(), Xe(), se();
        const L = await Qi(i, {
          fetchApi: (q, J) => Kt.fetchApi(q, J)
        }), D = (Array.isArray(v.stickers) ? v.stickers : []).find((q) => String((q == null ? void 0 : q.id) || "") === c) || null;
        if (!D || String(D.asset_id || "") !== f) return;
        v.assets[f] = L, Eo(), et(), lt(), ze(), Xe(), se();
      } catch (E) {
        delete v.assets[f], We.delete(f);
        const L = (Array.isArray(v.stickers) ? v.stickers : []).find((D) => String((D == null ? void 0 : D.id) || "") === c) || null;
        throw L && String(L.asset_id || "") === f && (y && w && (v.assets[y] = w), L.asset_id = y, L.vFOV_deg = k, L.crop = N ? { ...N } : null), Ft(), lt(), ze(), Xe(), se(), E;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function bv() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !bt(i) || $t(i) || (s = ee == null ? void 0 : ee.openImagePicker) == null || s.call(ee, "replace");
  }
  async function vv() {
    if (r || t !== "stickers") return;
    if (x) {
      await _v();
      return;
    }
    const i = v.assets && typeof v.assets == "object" ? v.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const h = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let c = !1;
    for (const [f, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((E) => E.blob()), w = String(y.type || "image/png").split("/")[1] || "png", k = String((h == null ? void 0 : h.name) || `${f}.${w}`), N = new File([y], k, { type: y.type || "image/png" }), M = await Qi(N, {
          fetchApi: (E, L) => Kt.fetchApi(E, L)
        });
        v.assets[f] = {
          ...M,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (lt(), se());
  }
  async function _v() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((w) => w.blob()), h = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${h}`, { type: f.type || "image/png" }), y = await Qi(m, {
            fetchApi: (w, k) => Kt.fetchApi(w, k)
          });
          s.source = dl(y), i = !0;
        } catch {
        }
    }
    i && (lt(), se());
  }
  function wv() {
    if (r || t !== "cutout") return;
    const i = Ge();
    if (i) {
      pr(i), p.mode = "pano", Kr(
        Gt(Number(i.yaw_deg || 0)),
        Q(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), ze(), Xe(), se({ cause: "cutout_frame" });
      return;
    }
    const s = _0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Gt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    v.shots = [s], pr(s), Fs(), p.mode = "pano", et(), lt(), ze(), Xe(), se({ cause: "cutout_frame" });
  }
  function xv() {
    r || t !== "cutout" || (v.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, v.active.selected_shot_id = null, et(), lt(), ze(), Xe(), se());
  }
  function Sv() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      $t(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function Fp(i, s, c = "Clear") {
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
  async function kv() {
    var c, f;
    if (r || !await Fp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = na(null), hr();
    const s = Sv();
    if (t === "stickers")
      v.stickers = x ? v.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, x || (v.assets = {}), p.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Eo();
    else {
      const h = qS(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, Eo();
    }
    et(), lt(), ze(), Xe(), se();
  }
  async function Mv(i) {
    var m, y, w, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = Lo(s);
    if (!(!f.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await Fp(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((w = p.interaction) == null ? void 0 : w.kind) === "draw" && ((k = p.interaction) == null ? void 0 : k.layerKind) === s) {
        const N = jn();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = On().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== s), s === "paint" && (mn().length = 0), hr(), et(), lt(), ze(), Xe(), Fn(), se();
    }
  }
  function Nv() {
    if (r) return;
    const i = Nt();
    if (!i || !bt(i) || $t(i) || x && gc(i)) return;
    let s;
    x ? s = ck(i, qi("st"), Ss()) : (s = JSON.parse(JSON.stringify(i)), s.id = qi("st"), s.yaw_deg = Gt((s.yaw_deg || 0) + 8), s.z_index = Ss()), v.stickers.push(s), v.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Ft(), et(), lt(), Xe(), ze(), se();
  }
  function Pv() {
    const i = Po();
    return i ? (_a(i) && (Tn(), $t(i) ? i.visible = !1 : v.stickers = v.stickers.filter((s) => s !== i), Ao(), Ft(), et(), lt(), ze(), Xe(), wi(), se()), !0) : !1;
  }
  function Tp() {
    var c, f, h, m, y;
    if (r) return;
    const i = dr(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((w) => yn(w))) {
      if (Tn(), i.length > 1) {
        const w = new Set(i.filter((M) => Qt(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => gn(M)).map((M) => on(M.rasterObjectId || M.id || ""))), N = new Set(i.filter(bt).map((M) => String(M.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = mn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), hr()), k.size > 0 && (v.painting.raster_objects = On().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Fo()), N.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => N.has(String((M == null ? void 0 : M.id) || "")) ? $t(M) ? (No(M) || (M.visible = !1), !0) : !1 : !0), Eo(), Ft()), p.selectedId = null, p.selectedIds = [], et(), lt(), ze(), Xe(), se();
        return;
      }
      if (Qt(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), v.painting.groups = mn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), hr(), p.selectedId = null, p.selectedIds = [], et(), lt(), ze(), Xe(), se();
        return;
      }
      if (gn(s)) {
        const w = on(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = On().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Fo(), p.selectedId = null, p.selectedIds = [], et(), lt(), ze(), Xe(), se();
        return;
      }
      if (t === "stickers" || bt(s)) {
        if ($t(s)) {
          if (No(s)) return;
          s.visible = !1, Ft(), et(), lt(), ze(), Xe(), se();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== s.id), Eo(), Ft(), p.selectedId = ((y = kr()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = p.selectedId, et(), lt(), ze(), Xe(), se();
        return;
      }
      xv();
    }
  }
  function Xc(i, s) {
    const c = Pe.frameSafeRect;
    if (!i || !c || p.mode !== "frame") return !1;
    const f = $u * lo(c, i), h = id(rd(c, s), f);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Dp(i, s) {
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
      const k = Number(i.hFOV_deg || 64), N = Number(i.vFOV_deg || 40);
      return Math.abs(k - N) > 1e-6 ? k >= N : co(i) >= 1;
    })();
    let [h, m] = c[String(s)] || c["1:1"];
    h >= m !== f && ([h, m] = [m, h]);
    const y = h / m;
    if (!Xc(i, y)) {
      const w = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = ul(w, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Av(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = fs(s, c);
    if (!f) return !1;
    const h = f.ratio;
    if (!Xc(i, h)) {
      const m = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = ul(m, h);
    }
    return i.aspect_id = f.label, !0;
  }
  function Lp(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = pi(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), h = 1 / Math.max(1e-12, f);
    if (!Xc(i, h)) {
      const m = Q(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = ul(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = eo(i);
  }
  function Rp() {
    So().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function Cv() {
    if (r) return;
    const i = dr();
    if (!Nt() || i.length === 0 || i.some((w) => yn(w))) return;
    Rp();
    const c = So(), f = new Set(i.map((w) => bt(w) ? `sticker:${String(w.id || "")}` : gn(w) ? `rasterObject:${on(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), h = [], m = [];
    if (c.forEach((w) => {
      var N, M;
      const k = w.type === "sticker" ? `sticker:${String(((N = w.item) == null ? void 0 : N.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? h.push(w) : m.push(w);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Ft(), et(), lt(), Xe(), se();
  }
  function Iv() {
    if (r) return;
    const i = dr();
    if (!Nt() || i.length === 0 || i.some((w) => yn(w))) return;
    Rp();
    const c = So(), f = new Set(i.map((w) => bt(w) ? `sticker:${String(w.id || "")}` : gn(w) ? `rasterObject:${on(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), h = [], m = [];
    if (c.forEach((w) => {
      var N, M;
      const k = w.type === "sticker" ? `sticker:${String(((N = w.item) == null ? void 0 : N.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(k) ? h.push(w) : m.push(w);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((w, k) => {
      w.type === "sticker" && w.item && (w.item.z_index = k), w.type === "strokeGroup" && w.item && (w.item.z_index = k), w.type === "rasterObject" && w.item && (w.item.z_index = k);
    }), Ft(), et(), lt(), Xe(), se();
  }
  function Ev() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = P(Number(v.output_preset || 2048))), d && (v.coverage = Gn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Nn(), e.setDirtyCanvas(!0, !0));
  }
  function Nn() {
    var s;
    if (r) return;
    v.coverage = Gn(v.coverage), U0(e, v.active);
    const i = Y0(e, v);
    g && !X0(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const Vp = () => Nn();
  r || (e.__panoFlushStateBeforeQueue = Vp);
  function qc() {
    v.ui_settings = OI(v.ui_settings), r || Nn();
  }
  function lt() {
    var i;
    r || (Nn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Ov() {
    r || t1() && op().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Fv(i = {}) {
    var f, h, m, y, w, k, N, M, E, L;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((h = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || h.call(f), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), c && ((N = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || N.call(k, !0, !0), (L = (E = (M = vr) == null ? void 0 : M.canvas) == null ? void 0 : E.setDirty) == null || L.call(E, !0, !0));
  }
  function Fs() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", Fn(), ze());
  }
  function Ni(i) {
    const s = C.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * C.width,
      y: (i.clientY - s.top) / s.height * C.height
    };
  }
  function Ts(i) {
    const s = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function $p() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function Tv() {
    var D, q, J, ne, ae;
    if (!C) return null;
    const i = (D = C.getBoundingClientRect) == null ? void 0 : D.call(C), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? C.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? C.height / i.height : 1;
    Pe.frameCanvasScale = Math.min(s, c);
    let f = 24, h = 24;
    const m = Math.max(f + 1, C.width - 24);
    let y = Math.max(h + 1, C.height - 24);
    const w = (q = mt == null ? void 0 : mt.getBoundingClientRect) == null ? void 0 : q.call(mt), k = (J = ln == null ? void 0 : ln.getBoundingClientRect) == null ? void 0 : J.call(ln);
    let N = 24;
    w && i && w.width > 0 && w.height > 0 && (N = Math.max(N, (w.right - i.left) * s + tg)), k && i && k.width > 0 && k.height > 0 && ((ne = I.frameRail) == null ? void 0 : ne.visible) === !0 && (N = Math.max(N, (i.right - k.left) * s + tg)), f = Math.max(f, N);
    const M = Math.min(m, C.width - N);
    let E = 24;
    const L = (ae = kt == null ? void 0 : kt.getBoundingClientRect) == null ? void 0 : ae.call(kt);
    if (L && i && L.width > 0 && L.height > 0 && (E = Math.max(E, (L.bottom - i.top) * c + zu)), [Xn, Ot].forEach((me) => {
      var Ke;
      if (!me || !i) return;
      const ie = getComputedStyle(me);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const xe = (Ke = me.getBoundingClientRect) == null ? void 0 : Ke.call(me);
      !xe || xe.width <= 0 || xe.height <= 0 || (E = Math.max(E, (i.bottom - xe.top) * c + zu));
    }), Fe && i) {
      const me = getComputedStyle(Fe);
      me.display !== "none" && me.visibility !== "hidden" && Number(me.opacity) > 0 && (E = Math.max(E, (pI + zu) * c));
    }
    return h = Math.max(h, E), y = Math.max(h + 1, Math.min(y, C.height - E)), {
      x: f,
      y: h,
      w: Math.max(1, M - f),
      h: Math.max(1, y - h)
    };
  }
  function Jc(i = Ge()) {
    if (!i || !C) return null;
    const s = Pe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, C.width - 48),
      h: Math.max(1, C.height - 48)
    };
    return nS(s, i, $u * lo(s, i));
  }
  function en(i = Ge()) {
    const s = Jc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Zc() {
    return t === "cutout" && !!Ge();
  }
  function mr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = xi(), y = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: Q(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = Lc(i.x, i.y), { lon: f, lat: h } = jc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function gr(i, s, c = performance.now()) {
    const f = en(s);
    if (!f) return null;
    const h = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = Kc(s, h);
    if (!m) return null;
    const { lon: y, lat: w } = jc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - w / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function Dv(i, s) {
    const c = Ge();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, h = x0(c, s);
    if (!h) return !1;
    if (f) {
      const m = $u * lo(
        Pe.frameSafeRect || { w: C.width, h: C.height },
        h
      ), y = od({ width: C.width, height: C.height }, m);
      if (y.halfW < C.width * 0.5 - 1e-6 || y.halfH < C.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = h.hFOV_deg, c.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, et(), lt(), ze());
    }, 180), ze(), !0;
  }
  function Lv() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, et(), lt(), ze(), !0) : !1;
  }
  function Ea() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Hi(), p.interaction = null, Io(), Wr(), ze(), dt(p.pointerPos), se({ localOnly: !0 }), !0;
  }
  function Rv(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function Pi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Zr : Dn[s] ? s : p.activeBrushPresetId || Zr;
  }
  function zp() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && ($p() || Zc());
  }
  function jp() {
    var i;
    return zp() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ds(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return p.pointerPos = { x: c, y: f, inside: h }, y;
  }
  function Vv() {
    var M, E;
    if (!jp()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, c = Pi(s), f = Dn[c] || Dn[Zr], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(p.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Q(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Q(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: y,
      fillStyle: Cr(w, k),
      strokeStyle: Cr(w, N),
      x: Number(((M = p.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((E = p.pointerPos) == null ? void 0 : E.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function $v() {
    var L, D, q;
    const i = Vv();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), E = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Jl, c = Jl, f = "0", y = "0", w = "none", M = gI, E = yI, m = CI(i.fillStyle, N, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, h = Number(((q = (D = i.preset) == null ? void 0 : D.angle) == null ? void 0 : q.value) || 0) * to;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = y, U.style.boxShadow = w, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - E)}px) rotate(${h}deg)`;
  }
  function zv() {
    var me;
    if (!X || !H) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const c = Pi(s), f = Dn[c] || Dn[Zr], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(6, m * 0.5), w = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(p.paintColor), N = i === "mask" ? Cr(k, 0.22) : w ? "rgba(255,255,255,0.14)" : Cr(k, Q(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Cr(k, 0.96) : w ? "rgba(255,255,255,0.72)" : Cr(k, Q(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let E = y * 2, L = y * 2, D = "999px", q = 0, J = N;
    const ne = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ie = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      E = Math.max(16, y * 2 * ie), L = Math.max(10, y * 2), D = `${Math.min(8, L * 0.42)}px`, q = Number(((me = f == null ? void 0 : f.angle) == null ? void 0 : me.value) || 0) * to;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${M} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (E = Math.max(18, y * 1.8), L = E, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (J = "rgba(255,255,255,0.12)");
    H.style.width = `${Math.round(E)}px`, H.style.height = `${Math.round(L)}px`, H.style.borderRadius = D, H.style.background = J, H.style.border = `1px solid ${ne}`, H.style.boxShadow = `0 0 0 1px ${ae}`, H.style.transform = `rotate(${q}deg)`, Ne && (clearTimeout(Ne), Ne = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function Ls() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), Ne && clearTimeout(Ne), Ne = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), Ne = 0;
    }, 180));
  }
  function Hp(i, s, c, f) {
    const h = Pi(s), m = Dn[h] || Dn[Zr], y = p.brushSizes[h] ?? 10, w = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), k = Rv(f, w), N = c.map((E) => ({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: Number.isFinite(Number(E == null ? void 0 : E.widthScale)) ? Math.max(0, Number(E.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(E == null ? void 0 : E.pressureLike)) ? Math.max(0, Number(E.pressureLike)) : 1
    })), M = {
      id: Go(i),
      actionGroupId: Go("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((E) => ({ ...E })),
        points: N.map((E) => ({ ...E }))
      }
    };
    return eg(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Gp(i, s, c, f) {
    const h = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = Pi(s), y = Dn[m] || Dn[Zr], w = {
      id: Go(i),
      actionGroupId: Go("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((k) => ({ ...k }))
      }
    };
    return eg(w, y), Number(y.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Lo(i) {
    const s = v.painting || (v.painting = na(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function jv(i, s, c = performance.now()) {
    let f;
    if (p.mode === "frame") {
      const N = Ge();
      if (!N || (f = gr(s, N, c), !f)) return !1;
    } else
      f = mr(s, c);
    if (!f) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const N = Math.abs(Number(f.u ?? f.x ?? 0) - Number(y.u ?? y.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...w }), m.push({ ...w });
    const k = jn();
    if (k) {
      const N = p.paintEngine.ensureTarget(k);
      p.paintEngine.appendStrokePoint(N, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Hv(i, s, c = performance.now()) {
    var y, w;
    let f;
    if (p.mode === "frame") {
      const k = Ge();
      if (!k) return !1;
      f = gr(s, k, c);
    } else
      f = mr(s, c);
    const h = (w = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Gv(i) {
    var ie, xe, Ke, Ye, st;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Es();
    const c = jn(), f = ka(c.width, c.height);
    if (!wp(f, s, { w: c.width, h: c.height })) return !1;
    const h = ((xe = (ie = f.ctx) == null ? void 0 : ie.getImageData(0, 0, c.width, c.height)) == null ? void 0 : xe.data) || null;
    if (!h) return !1;
    const m = new Map(mn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), y = [], w = [], k = [...On().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let N = !1, M = So().reduce((be, oe) => Math.max(be, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function E(be, oe, pe, Te = 8) {
      let Se = oe, qe = pe, Je = -1, He = -1;
      for (let Ze = 0; Ze < pe; Ze += 1)
        for (let wt = 0; wt < oe; wt += 1)
          be[(Ze * oe + wt) * 4 + 3] <= Te || (wt < Se && (Se = wt), Ze < qe && (qe = Ze), wt > Je && (Je = wt), Ze > He && (He = Ze));
      return Je < Se || He < qe ? null : { minX: Se, minY: qe, maxX: Je, maxY: He };
    }
    const L = E(h, c.width, c.height, 8);
    if (!L) return !1;
    function D(be, oe) {
      return !be || !oe ? !1 : !(be.maxX < oe.minX || oe.maxX < be.minX || be.maxY < oe.minY || oe.maxY < be.minY);
    }
    function q(be, oe) {
      const pe = yi((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", oe);
      if (!pe) return null;
      const Te = pe.centerUv.u - pe.halfW, Se = pe.centerUv.u + pe.halfW, qe = pe.centerUv.v - pe.halfH, Je = pe.centerUv.v + pe.halfH, He = c.width, Ze = c.height;
      return {
        minX: Math.floor((Te % 1 + 1) % 1 * He),
        maxX: Math.ceil((Se % 1 + 1) % 1 * He),
        minY: Math.floor(Q(qe, 0, 1) * Ze),
        maxY: Math.ceil(Q(Je, 0, 1) * Ze),
        wraps: Se - Te >= 1 || Te < 0 || Se > 1
      };
    }
    function J(be) {
      const oe = (be == null ? void 0 : be.bbox) || null;
      if (!oe) return null;
      const pe = (be == null ? void 0 : be.transform) || {}, Te = c.width, Se = c.height, qe = Number(oe.u0 || 0) + Number(pe.du || 0), Je = Number(oe.u1 || 0) + Number(pe.du || 0), He = Number(oe.v0 || 0) + Number(pe.dv || 0), Ze = Number(oe.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((qe % 1 + 1) % 1 * Te),
        maxX: Math.ceil((Je % 1 + 1) % 1 * Te),
        minY: Math.floor(Q(He, 0, 1) * Se),
        maxY: Math.ceil(Q(Ze, 0, 1) * Se),
        wraps: Je - qe >= 1 || qe < 0 || Je > 1
      };
    }
    function ne(be) {
      return be ? be.wraps ? D(L, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || D(L, { minX: be.minX, maxX: c.width - 1, minY: be.minY, maxY: be.maxY }) : D(L, be) : !0;
    }
    function ae(be) {
      if (!be) return { touched: !1, canvas: null };
      const oe = ka(c.width, c.height, { readback: !0 });
      oe.ctx.drawImage(be, 0, 0);
      const pe = oe.ctx.getImageData(0, 0, c.width, c.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(f.canvas, 0, 0), oe.ctx.restore();
      const Te = oe.ctx.getImageData(0, 0, c.width, c.height);
      for (let Se = 0; Se < c.width * c.height; Se += 1) {
        if (h[Se * 4 + 3] <= 8) continue;
        const Je = pe.data[Se * 4 + 3], He = Te.data[Se * 4 + 3];
        if (Je > He)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(be, oe, pe) {
      const Te = Number(pe == null ? void 0 : pe.z_index), Se = K1(be, oe, pe).map((qe, Je) => ({
        ...qe,
        z_index: Number.isFinite(Te) ? Te + Je * 1e-3 : M + Je * 1e-3
      }));
      return Se.length && (M = Math.max(M, ...Se.map((qe) => Number((qe == null ? void 0 : qe.z_index) || 0))) + 1), Se;
    }
    for (const be of mn()) {
      const oe = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!oe) continue;
      const pe = fr(oe, "paint");
      if (!ne(q(be, pe))) {
        w.push(be), y.push(...pe);
        continue;
      }
      const Te = ((Ye = (Ke = p.paintEngine) == null ? void 0 : Ke.getGroupTarget) == null ? void 0 : Ye.call(Ke, oe)) || null, Se = ((st = Te == null ? void 0 : Te.committedPaint) == null ? void 0 : st.canvas) || null;
      if (!Se) {
        w.push(be), y.push(...pe);
        continue;
      }
      const qe = ae(Se);
      if (!qe.touched || !qe.canvas) {
        w.push(be), y.push(...pe);
        continue;
      }
      N = !0;
      const Je = me(qe.canvas, "paint", m.get(oe) || be || {});
      k.push(...Je);
    }
    for (const be of On().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!ne(J(be))) {
        k.push(be);
        continue;
      }
      const oe = ip(be, null);
      if (!oe) {
        k.push(be);
        continue;
      }
      const pe = ae(oe);
      if (!pe.touched || !pe.canvas) {
        k.push(be);
        continue;
      }
      N = !0;
      const Te = me(pe.canvas, "paint", be);
      k.push(...Te);
    }
    return N ? (v.painting.paint.strokes = y, v.painting.groups = w.sort((be, oe) => Number((be == null ? void 0 : be.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), v.painting.raster_objects = k.sort((be, oe) => Number((be == null ? void 0 : be.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), va({ preservePanelValues: !1 }), !0) : !1;
  }
  function Kv(i) {
    var y, w, k, N, M;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.rawPoints) || ((N = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Qc(i);
      const E = jn();
      E && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(E) : p.paintEngine.commitActiveStroke(i.stroke, E)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Hp(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Bv(i) {
    var y, w;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Qc(i);
      const k = jn();
      k && p.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Gp(i.layerKind, c.toolKind, [], f);
    h.actionGroupId = c.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Qc(i) {
    var m, y, w, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Bc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Gv(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Ed((w = i.stroke) == null ? void 0 : w.actionGroupId), Lo(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = Bc(h, i.stroke.targetSpace, !0), f && Ed((k = i.stroke) == null ? void 0 : k.actionGroupId), Lo(i.layerKind).push(i.stroke), !0);
  }
  function Kp(i) {
    var c;
    if (t === "cutout" && p.mode === "frame") {
      const f = Ge(), h = en(f);
      if (!f || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = gr(i, f, performance.now()), w = y ? Oo(y) : null;
      if (w)
        for (const N of Gc()) {
          if (!bt(N)) continue;
          const M = Aa(N, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const E = Ut(N);
            if (E != null && E.visible) return { item: N, geom: E };
          }
        }
      const k = vc(!1).slice().sort((N, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of k) {
        if (N.type === "strokeGroup") {
          const L = Mo(ga("paint", N.actionGroupId || N.id || ""));
          if (!L) continue;
          const D = Ut(L);
          if (!(D != null && D.visible)) continue;
          const q = Array.isArray(D.strokePaths) ? D.strokePaths : [];
          for (const J of q) {
            const ne = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!ne.length) continue;
            if (J.closed && ne.length >= 3 && ei(i, ne)) return { item: L, geom: D };
            const ae = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < ne.length - 1; me += 1)
              if (Bu(i, ne[me], ne[me + 1]) <= ae * ae) return { item: L, geom: D };
            if (ne.length === 1 && Ci(i, ne[0]) <= ae * ae) return { item: L, geom: D };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const L = ko(ya(((c = N.item) == null ? void 0 : c.id) || N.id || ""));
          if (!L) continue;
          const D = Ut(L);
          if (rp(L, D, i, y)) return { item: L, geom: D };
          continue;
        }
        const M = N.item;
        if (!M || !bt(M) || !w) continue;
        const E = Aa(M, w);
        if (E && Number(E.x) >= 0 && Number(E.x) <= 1 && Number(E.y) >= 0 && Number(E.y) <= 1) {
          const L = Ut(M);
          if (L != null && L.visible) return { item: M, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...vc(!1).slice().sort((f, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var h;
        return f.type === "strokeGroup" ? Mo(ga("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? ko(ya(((h = f.item) == null ? void 0 : h.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Gc().filter((f) => zn(f)) : []
    ];
    for (const f of s) {
      if (Qt(f)) {
        const m = Ut(f);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of y) {
          const k = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!k.length) continue;
          if (w.closed && k.length >= 3 && ei(i, k)) return { item: f, geom: m };
          const N = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < k.length - 1; M += 1)
            if (Bu(i, k[M], k[M + 1]) <= N * N) return { item: f, geom: m };
          if (k.length === 1 && Ci(i, k[0]) <= N * N) return { item: f, geom: m };
        }
        continue;
      }
      if (gn(f)) {
        const m = Ut(f);
        if (!(m != null && m.visible)) continue;
        if (rp(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const h = Ut(f);
      if (h.visible && ei(i, h.corners))
        return { item: f, geom: h };
    }
    return null;
  }
  function Rs(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (bt(c)) return xf(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => Ci(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], w = y.x - i.center.x, k = y.y - i.center.y, N = w * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: N };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const w = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && w.length >= 3 && ei(s, w)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let N = 0; N < w.length - 1; N += 1)
          if (Bu(s, w[N], w[N + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => Ci(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, w = m.y - i.center.y, k = y * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      return ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => Ci(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const f = i.corners.findIndex((h) => Ci(h, s) <= 121);
    if (f >= 0) {
      const h = i.corners[f], m = h.x - i.center.x, y = h.y - i.center.y, w = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: w };
    }
    return Ci(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : ei(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function Bp(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Wv(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Uv(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => Wv(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ei({ x: c, y: f }, s.corners);
  }
  function dt(i) {
    if ($v(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Ae("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? Ae("grabbing") : p.interaction.kind === "space_pan" ? Ae("move") : p.interaction.kind === "space_orbit" || p.interaction.kind === "world_gizmo" || p.interaction.kind === "roll_frame" ? Ae("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Ae("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Ae(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Ae("grabbing") : Ae("default");
      return;
    }
    if (jp()) {
      Ae("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Ae(dI);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Ae("default");
        return;
      }
      Ae("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Ae("default");
      return;
    }
    if (p.gizmoAxis) {
      Ae("grab");
      return;
    }
    const s = Nt(), c = s ? Ut(s) : null, f = s ? yn(s) : !1, h = f ? { kind: "none", cursor: "default" } : Rs(c, i, s);
    if (!f && h.kind !== "none") {
      Ae(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Kp(i)) {
      Ae("default");
      return;
    }
    Ae(p.mode === "pano" ? "grab" : "default");
  }
  function Xe() {
    var k, N;
    if (!Zt) return;
    if (p.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Nt(), s = dr();
    if (!i && s.length === 0 || p.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = xs(), f = Z2({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? ws(s) : Ut(i),
      allLocked: Sc(s),
      anyLocked: s.some((M) => yn(M)),
      selectedLocked: yn(i),
      activeAspect: ri(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: $t,
      isStickerHidden: No,
      canRestoreSelectedToInitial: Ib,
      iconSet: ke
    });
    if (!f.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (M, E, { requireFitsBelow: L = !0 } = {}) => {
      var xe, Ke, Ye;
      const q = Number((xe = f.anchor) == null ? void 0 : xe.minX), J = Number((Ke = f.anchor) == null ? void 0 : Ke.maxX), ne = Number((Ye = f.anchor) == null ? void 0 : Ye.maxY);
      if (![q, J, ne].every(Number.isFinite)) return null;
      const ae = Math.max(14, C.width - M - 14), me = Q((q + J) * 0.5 - M * 0.5, 14, ae), ie = ne + 18;
      return !Number.isFinite(me) || !Number.isFinite(ie) || L && ie + E > C.height - 14 ? null : { left: me, top: ie };
    }, m = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.w) || 220)), y = Math.max(1, Number(((N = p.menuSize) == null ? void 0 : N.h) || 40)), w = h(m, y, { requireFitsBelow: !1 });
    if (!w) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: w.left,
      top: w.top,
      items: f.items
    }, requestAnimationFrame(() => {
      if (!Zt || I.selectionMenu.visible !== !0) return;
      const M = Zt.getBoundingClientRect(), E = Math.round(Number((M == null ? void 0 : M.width) || 0)) || 220, L = Math.round(Number((M == null ? void 0 : M.height) || 0)) || 40;
      p.menuSize = { w: E, h: L, measured: !0 };
      const D = h(E, L);
      if (!D) {
        I.selectionMenu.visible = !1;
        return;
      }
      I.selectionMenu.left = D.left, I.selectionMenu.top = D.top;
    });
  }
  function Hi() {
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null, I.tooltip.visible = !1;
  }
  function Yv(i) {
    if (!cn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var J, ne;
      if (je.target !== c || !cn || !(c != null && c.isConnected)) return;
      const f = ue.getBoundingClientRect(), h = c.getBoundingClientRect(), m = 8, y = 12, w = Math.round(Number(((J = cn.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, k = Math.round(Number(((ne = cn.getBoundingClientRect()) == null ? void 0 : ne.height) || 0)) || 24, N = !!c.closest(".pano-floating-left"), M = !!c.closest(".pano-frame-rail"), E = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let L = "", D = h.left - f.left + h.width * 0.5 - w * 0.5, q = h.top - f.top - k - y;
      if (N)
        L = "tool-rail", D = h.right - f.left + 10, q = h.top - f.top + h.height * 0.5 - k * 0.5, D = Q(D, m, Math.max(m, f.width - w - m)), q = Q(q, m, Math.max(m, f.height - k - m));
      else if (M)
        L = "frame-rail", D = h.left - f.left - w - 10, q = h.top - f.top + h.height * 0.5 - k * 0.5, D = Q(D, m, Math.max(m, f.width - w - m)), q = Q(q, m, Math.max(m, f.height - k - m));
      else if (E) {
        L = "footer";
        const ae = c.closest(".pano-paint-footer"), me = ae ? ae.getBoundingClientRect() : h;
        D = me.left - f.left + me.width * 0.5 - w * 0.5, q = me.bottom - f.top + 5, D = Q(D, m, Math.max(m, f.width - w - m)), q = Math.max(m, q);
      }
      D = Q(D, m, Math.max(m, f.width - w - m)), q = Math.max(m, q), I.tooltip.left = D, I.tooltip.top = q, I.tooltip.variant = L, I.tooltip.visible = !0;
    });
  }
  const pn = td({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Gt(Number(i.yaw || 0)), p.viewPitch = Q(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = Q(Number(i.fov || p.viewFov || 100), 35, 140);
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
    getUnwrapRect: xi,
    onInteraction: () => {
      Pe.backgroundDirty = !0, Pe.dirty = !0;
    }
  });
  function Xv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += g0(s, i.lastAngle), i.lastAngle = s;
    const f = y0(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f, h.displayValue = Ho(f), h.fillPct = (f + 180) / 360 * 100), Xr(), eu(i), se({ localOnly: !0 });
  }
  function qv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = Vy(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = f.rollDeg, h.displayValue = Ho(f.rollDeg), h.fillPct = (f.rollDeg + 180) / 360 * 100), Xr(), eu(i), se({ localOnly: !0 });
  }
  const Wp = (i, s) => {
    const c = Ni(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function eu(i) {
    var y, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null;
    const s = en(i.shot), c = (y = C.getBoundingClientRect) == null ? void 0 : y.call(C), f = (w = ue.getBoundingClientRect) == null ? void 0 : w.call(ue);
    if (!s || !c || !f || C.width <= 0 || C.height <= 0) return;
    const h = c.width / C.width, m = c.height / C.height;
    I.tooltip.text = `${Ho(i.shot.roll_deg)}°`, I.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * h, I.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  at == null || at.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = Ge();
    if (!s || s.locked === !0) return;
    const c = en(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, h = Wp(i, f);
    p.interaction = {
      kind: "roll_frame",
      shot: s,
      center: f,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = at.setPointerCapture) == null || m.call(at, i.pointerId), i.preventDefault(), Xr(), eu(p.interaction), se({ localOnly: !0 });
  }), at == null || at.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || Xv(
      p.interaction,
      Wp(i, p.interaction.center),
      i
    );
  });
  const Jv = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (et(), lt(), ze()), p.interaction = null, Hi(), Wr(), Xr(), se());
  };
  at == null || at.addEventListener("pointerup", Jv), at == null || at.addEventListener("pointercancel", () => Ea()), at == null || at.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && Ea();
  }), at == null || at.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? Ge() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, et(), lt(), ze(), Xr(), se(), i.preventDefault());
  }), C.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, qr());
    const s = Ni(i);
    ct = s, Ds(s, !0), p.viewTween = null, pn.state.inertia.active = !1, pn.state.inertia.vx = 0, pn.state.inertia.vy = 0;
    const c = wa(), f = c ? _N(Oc(), i) : null;
    if (f === "look") {
      i.preventDefault();
      const N = Ts(i);
      p.interaction = { kind: "view", last: N, lastTs: performance.now() }, pn.startDrag(N.x, N.y, i.pointerId, performance.now()), dt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (f) {
      i.preventDefault(), tp(f, s, i.pointerId);
      return;
    }
    if (c && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const N = Ge();
        if (!N || r || N.locked === !0) return;
        p.interaction = {
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
        const N = p.mode === "unwrap" ? s : Ts(i);
        p.interaction = { kind: "view", last: N, lastTs: performance.now() }, pn.startDrag(N.x, N.y, i.pointerId, performance.now());
      }
      dt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const N = Ge(), M = en(N);
      if (!N || N.locked === !0 || !M) return;
      const E = Ry({
        frame: M,
        point: s,
        startRollDeg: Number(N.roll_deg ?? N.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!E) return;
      p.interaction = {
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
      }, C.setPointerCapture(i.pointerId), i.preventDefault(), Xr(), se({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const N = Ge();
      if (!N || r || N.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: N,
        last: s,
        start: { yaw_deg: Number(N.yaw_deg || 0), pitch_deg: Number(N.pitch_deg || 0) },
        changed: !1
      }, dt(s), C.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      p.mode === "pano" && Yp(i, s);
      return;
    }
    if (Z && !Z.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && ($p() || Zc())) {
      Tn();
      const N = p.primaryTool === "mask" ? "mask" : "paint", M = p.primaryTool === "mask" ? p.maskTool : p.paintTool, E = p.mode === "frame" && Zc() ? Ge() : null, L = { kind: "ERP_GLOBAL" }, D = E ? gr(s, E, performance.now()) : mr(s, performance.now());
      if (!D) {
        dt(s);
        return;
      }
      p.interaction = {
        kind: M === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: N,
        _livePreviewToken: Go("live"),
        stroke: M === "lasso_fill" ? Gp(N, M, [D], L) : Hp(N, M, [D], L)
      }, Io();
      const q = jn();
      if (q)
        if (p.paintEngine.beginStroke(p.interaction.stroke, q), p.interaction.kind === "paint_stroke") {
          const J = p.paintEngine.ensureTarget(q), ne = Number((D == null ? void 0 : D.u) ?? (D == null ? void 0 : D.x) ?? 0), ae = Number((D == null ? void 0 : D.v) ?? (D == null ? void 0 : D.y) ?? 0);
          p.paintEngine.appendStrokePoint(J, ne, ae, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, q);
      dt(s), C.setPointerCapture(i.pointerId), se();
      return;
    }
    const h = dr(), m = Nt(), y = h.length > 1 ? ws(h) : m ? Ut(m) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, dt(s), C.setPointerCapture(i.pointerId), se({ localOnly: !0 });
      return;
    }
    if (p.primaryTool === "cursor" && Co() && Zv(i, s)) return;
    if (h.length > 1 && (y != null && y.visible)) {
      if ((h.some((M) => yn(M)) ? { kind: "none" } : Rs(y, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: h.map((M) => M),
          offset: { x: s.x - y.center.x, y: s.y - y.center.y },
          startCenter: { x: y.center.x, y: y.center.y },
          stickerSnapshots: h.filter((M) => bt(M)).map((M) => ({
            id: String(M.id || ""),
            yaw_deg: Number(Jt(M).yaw_deg || 0),
            pitch_deg: Number(Jt(M).pitch_deg || 0),
            center: (() => {
              var L, D;
              const E = Ut(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: h.filter((M) => Qt(M)).map((M) => ({
            id: String(M.actionGroupId || M.id || ""),
            layerKind: String(M.layerKind || "paint"),
            snapshot: _n(fr(M.actionGroupId, M.layerKind)),
            frameSnapshot: _n(yi(M.actionGroupId, M.layerKind)),
            center: (() => {
              var L, D;
              const E = Ut(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: xc(M.actionGroupId, M.layerKind)
          })),
          rasterSnapshots: h.filter((M) => gn(M)).map((M) => ({
            id: on(M.rasterObjectId || M.id || ""),
            snapshot: _n(On().find((E) => String((E == null ? void 0 : E.id) || "") === on(M.rasterObjectId || M.id || ""))),
            center: (() => {
              var L, D;
              const E = Ut(M);
              return E != null && E.visible ? { x: Number(((L = E.center) == null ? void 0 : L.x) || 0), y: Number(((D = E.center) == null ? void 0 : D.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: cp(M)
          }))
        }, dt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (m && (y != null && y.visible)) {
      const N = yn(m) ? { kind: "none" } : Rs(y, s, m);
      if (N.kind === "scale") {
        p.interaction = Qt(m) ? {
          kind: "scale_stroke_group",
          item: m,
          center: y.center,
          startDist: Math.max(1, Math.hypot(s.x - y.center.x, s.y - y.center.y)),
          snapshot: _n(fr(m.actionGroupId, m.layerKind)),
          frameSnapshot: _n(yi(m.actionGroupId, m.layerKind)),
          cursor: N.cursor
        } : gn(m) ? {
          kind: "scale_raster_object",
          item: m,
          center: y.center,
          startDist: Math.max(1, Math.hypot(s.x - y.center.x, s.y - y.center.y)),
          snapshot: _n(On().find((M) => String((M == null ? void 0 : M.id) || "") === on(m.rasterObjectId || m.id || ""))),
          cursor: N.cursor
        } : {
          kind: "scale",
          item: m,
          center: y.center,
          startDist: Math.max(1, Math.hypot(s.x - y.center.x, s.y - y.center.y)),
          startHFOV: Number(Jt(m).hFOV_deg || 20),
          startVFOV: Number(Jt(m).vFOV_deg || 20),
          cursor: N.cursor
        }, dt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "scale_x" || N.kind === "scale_y") {
        p.interaction = {
          kind: N.kind,
          item: m,
          center: y.center,
          startDist: Math.max(1, Math.hypot(s.x - y.center.x, s.y - y.center.y)),
          startHFOV: Number(Jt(m).hFOV_deg || 20),
          startVFOV: Number(Jt(m).vFOV_deg || 20),
          cursor: N.cursor,
          edge: N.edge
        }, dt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "rotate") {
        p.interaction = Qt(m) ? {
          kind: "rotate_stroke_group",
          item: m,
          center: y.center,
          startAng: Math.atan2(s.y - y.center.y, s.x - y.center.x),
          snapshot: _n(fr(m.actionGroupId, m.layerKind)),
          frameSnapshot: _n(yi(m.actionGroupId, m.layerKind))
        } : {
          kind: "rotate",
          item: m,
          center: y.center,
          startRot: Number(Jt(m).rot_deg || Jt(m).roll_deg || 0),
          startAng: Math.atan2(s.y - y.center.y, s.x - y.center.x)
        }, dt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "move") {
        if (Qt(m)) {
          const M = p.mode === "frame" ? (() => {
            const E = Ge();
            return E ? gr(s, E, performance.now()) : null;
          })() : mr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: m,
            startUv: M,
            snapshot: _n(fr(m.actionGroupId, m.layerKind)),
            frameSnapshot: _n(yi(m.actionGroupId, m.layerKind))
          }, dt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        if (gn(m)) {
          const M = p.mode === "frame" ? (() => {
            const E = Ge();
            return E ? gr(s, E, performance.now()) : null;
          })() : mr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: m,
            startUv: M,
            snapshot: _n(On().find((E) => String((E == null ? void 0 : E.id) || "") === on(m.rasterObjectId || m.id || "")))
          }, dt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: m,
          offset: { x: s.x - y.center.x, y: s.y - y.center.y }
        }, dt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const w = Kp(s);
    if (w) {
      const N = p.selectedId !== w.item.id;
      if (N && p.selectedId && (et(), Nn()), pr(w.item), t === "cutout" && N && (p.cutoutAspectOpen = !1), N && ze(), Xe(), se(), yn(w.item)) {
        dt(s);
        return;
      }
      p.interaction = {
        kind: Qt(w.item) ? "move_stroke_group" : gn(w.item) ? "move_raster_object" : "move",
        item: w.item,
        offset: { x: s.x - w.geom.center.x, y: s.y - w.geom.center.y },
        startUv: Qt(w.item) || gn(w.item) ? p.mode === "frame" ? (() => {
          const M = Ge();
          return M ? gr(s, M, performance.now()) : null;
        })() : mr(s, performance.now()) : null,
        snapshot: Qt(w.item) ? _n(fr(w.item.actionGroupId, w.item.layerKind)) : gn(w.item) ? _n(On().find((M) => String((M == null ? void 0 : M.id) || "") === on(w.item.rasterObjectId || w.item.id || ""))) : null,
        frameSnapshot: Qt(w.item) ? _n(yi(w.item.actionGroupId, w.item.layerKind)) : null
      }, dt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    const k = !!p.selectedId;
    k && (et(), Nn()), va(), k && ze(), Xe(), se(), p.mode === "pano" && Yp(i, s);
  };
  function tu() {
    return Au(Ur(), C.width, C.height, zi());
  }
  function Oa(i, s) {
    return Mt.gizmoPointer(i, tu(), s.x, s.y, C.width, C.height);
  }
  function Zv(i, s) {
    var y;
    const c = (y = ki().space) == null ? void 0 : y.gizmo;
    if (c && Oa("hover", s) !== null && Oa("down", s))
      return p.interaction = {
        kind: "world_gizmo",
        id: p.worldSelectedId,
        mode: c.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: c.transform,
        base: uo(Po(), p.frame),
        changed: !1
      }, C.setPointerCapture(i.pointerId), dt(s), !0;
    const f = Nt(), h = f && !yn(f) ? Rs(Ut(f), s, f).kind : "none";
    if (h !== "none" && h !== "move") return !1;
    const m = Mt.pickSticker(tu(), s.x, s.y, C.width, C.height);
    return v.stickers.some((w) => w.id === m && w.placement === "world") ? (p.worldSelectedId !== m && (p.selectedId && (et(), Nn()), Ic(m), ze(), Xe(), wi(), se()), p.interaction = { kind: "world_select" }, C.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Qv(i) {
    var f;
    const c = !!p.worldSelectedId && p.primaryTool === "cursor" && Co() && !!((f = ki().space) != null && f.gizmo) ? Oa("hover", i) : null;
    c !== p.gizmoAxis && (p.gizmoAxis = c, Pe.backgroundDirty = !0, se({ localOnly: !0 }));
  }
  function e_(i, s) {
    const c = Oa("move", s), f = v.stickers.find((h) => h.id === i.id);
    !c || !f || (sk(f, p.frame, jk(i.mode, i.base, i.start, c)), i.changed = !0, Ft(), ze(), se({ localOnly: !0 }));
  }
  function Up(i) {
    p.interaction = null, i.kind === "world_gizmo" && (Oa("up", p.pointerPos), Pe.backgroundDirty = !0, i.changed && (et(), lt(), ze())), dt(p.pointerPos), se();
  }
  function Yp(i, s) {
    if (wa()) {
      const f = Oc().emptyLeft;
      f && tp(f, s, i.pointerId);
      return;
    }
    const c = Ts(i);
    p.interaction = { kind: "view", last: c, lastTs: performance.now() }, pn.startDrag(c.x, c.y, i.pointerId, performance.now()), dt(s), C.setPointerCapture(i.pointerId);
  }
  function t_(i, s) {
    if (!x || !At.playing) return;
    if (At.stop(), i.kind === "world_gizmo") {
      const h = v.stickers.find((m) => m.id === i.id);
      h && (i.base = uo(h, p.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const h = ws(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), w = y ? Ut(y) : null;
        w != null && w.visible && (m.yaw_deg = Number(Jt(y).yaw_deg || 0), m.pitch_deg = Number(Jt(y).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const c = Ut(i.item);
    if (!(c != null && c.visible)) return;
    const f = Jt(i.item);
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
    var f, h, m, y, w, k, N, M, E, L, D, q, J, ne, ae, me, ie, xe, Ke, Ye, st, be;
    const s = Ni(i);
    if (Ds(s, !0), !p.interaction) {
      Qv(s), dt(s);
      return;
    }
    dt(s);
    const c = p.interaction;
    if (ct && (s.x !== ct.x || s.y !== ct.y)) {
      const oe = ct;
      ct = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(c.kind) || t_(c, oe);
    }
    if (c.kind !== "world_select") {
      if (c.kind === "world_gizmo") {
        e_(c, s);
        return;
      }
      if (c.kind === "paint_stroke") {
        const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let pe = !1;
        oe.forEach((Te) => {
          const Se = Ni(Te);
          if (p.mode === "frame") {
            const qe = Ge(), Je = qe ? en(qe) : null;
            if (Je) {
              const He = (Se.x - Je.x) / Math.max(1, Je.w), Ze = (Se.y - Je.y) / Math.max(1, Je.h);
              if (!(He >= 0 && He <= 1 && Ze >= 0 && Ze <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, Kv(c));
            }
          }
          jv(c, Se, performance.now()) && (pe = !0);
        }), pe && se({ localOnly: !0 });
        return;
      }
      if (c.kind === "paint_lasso_fill") {
        const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let pe = !1;
        if (oe.forEach((Te) => {
          const Se = Ni(Te);
          if (p.mode === "frame") {
            const qe = Ge(), Je = qe ? en(qe) : null;
            if (Je) {
              const He = (Se.x - Je.x) / Math.max(1, Je.w), Ze = (Se.y - Je.y) / Math.max(1, Je.h);
              if (!(He >= 0 && He <= 1 && Ze >= 0 && Ze <= 1)) {
                c._outOfFrame = !0;
                return;
              }
              c._outOfFrame && (c._outOfFrame = !1, Bv(c));
            }
          }
          Hv(c, Se, performance.now()) && (pe = !0);
        }), pe) {
          const Te = jn();
          Te && p.paintEngine.updateActiveStroke(c.stroke, Te), se({ localOnly: !0 });
        }
        return;
      }
      if (c.kind === "view") {
        const oe = performance.now(), pe = p.mode === "unwrap" ? s : Ts(i);
        pn.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", oe), c.lastTs = oe, c.last = pe, se({ localOnly: !0 });
        return;
      }
      if (c.kind === "space_pan" || c.kind === "space_orbit") {
        const oe = Ur();
        Fc(c.kind === "space_pan" ? xk(oe, s.x - c.last.x, s.y - c.last.y, C.width, C.height, c.depth) : wk(oe, s.x - c.last.x, s.y - c.last.y, C.height, c.pivot)), c.last = s;
        return;
      }
      if (c.kind === "pan_frame") {
        const oe = Jc(c.shot);
        if (!oe || !c.shot) return;
        const pe = s.x - c.last.x, Te = s.y - c.last.y, Se = $y(c.shot, {
          dx: pe,
          dy: Te,
          focalPx: oe.focalPx,
          invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((h = v.ui_settings) == null ? void 0 : h.invert_view_y) === !0
        });
        c.shot.yaw_deg = Se.yaw_deg, c.shot.pitch_deg = Se.pitch_deg, c.changed = c.changed || Math.abs(pe) > 0 || Math.abs(Te) > 0, c.last = s, se({ localOnly: !0 });
        return;
      }
      if (c.kind === "roll_frame") {
        if (c.source === "knob") return;
        qv(c, s, i);
        return;
      }
      if (c.kind === "move") {
        const oe = s.x - c.offset.x, pe = s.y - c.offset.y;
        if (p.mode === "frame" && t === "cutout") {
          const Te = Ge(), Se = en(Te);
          if (!Te || !Se) return;
          const qe = {
            x: Q((oe - Se.x) / Math.max(1, Se.w), 0, 1),
            y: Q((pe - Se.y) / Math.max(1, Se.h), 0, 1)
          }, Je = Kc(Te, qe);
          if (!Je) return;
          const He = tl(Je);
          ur(c.item, { yaw_deg: He.yaw, pitch_deg: He.pitch });
        } else if (p.mode === "unwrap") {
          const Te = xi(), Se = Q((oe - Te.x) / Math.max(Te.w, 1), 0, 1), qe = Q((pe - Te.y) / Math.max(Te.h, 1), 0, 1);
          ur(c.item, { yaw_deg: Gt(Se * 360 - 180), pitch_deg: Q(90 - qe * 180, -90, 90) });
        } else {
          const Te = Lc(oe, pe), Se = tl(Te);
          ur(c.item, { yaw_deg: Se.yaw, pitch_deg: Se.pitch });
        }
        bt(c.item) && Ft(), se({ localOnly: !0 });
        return;
      }
      if (c.kind === "move_stroke_group") {
        const oe = p.mode === "frame" ? (() => {
          const Se = Ge();
          return Se ? gr(s, Se, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!oe || !c.startUv) return;
        const pe = Jn(Number(oe.u || 0), Number(c.startUv.u || 0)), Te = Number(oe.v || 0) - Number(c.startUv.v || 0);
        Fd((m = c.item) == null ? void 0 : m.actionGroupId, pe, Te, c.snapshot, (y = c.item) == null ? void 0 : y.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_raster_object") {
        const oe = p.mode === "frame" ? (() => {
          const Se = Ge();
          return Se ? gr(s, Se, performance.now()) : null;
        })() : mr(s, performance.now());
        if (!oe || !c.startUv) return;
        const pe = Jn(Number(oe.u || 0), Number(c.startUv.u || 0)), Te = Number(oe.v || 0) - Number(c.startUv.v || 0);
        Dd(((w = c.item) == null ? void 0 : w.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", pe, Te, c.snapshot) && (Fo(), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_raster_object") {
        const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        vb(((N = c.item) == null ? void 0 : N.rasterObjectId) || ((M = c.item) == null ? void 0 : M.id) || "", pe, c.snapshot) && (Fo(), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "move_multi") {
        const oe = s.x - Number(((E = c.offset) == null ? void 0 : E.x) || 0), pe = s.y - Number(((L = c.offset) == null ? void 0 : L.y) || 0);
        let Te = !1, Se = !1, qe = !1;
        const Je = oe - Number(((D = c.startCenter) == null ? void 0 : D.x) || oe), He = pe - Number(((q = c.startCenter) == null ? void 0 : q.y) || pe);
        for (const Ze of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
          const wt = (t === "cutout" ? wc() : kr()).find((Ct) => String((Ct == null ? void 0 : Ct.id) || "") === String(Ze.id || ""));
          if (!wt || !bt(wt)) continue;
          const vn = {
            x: Number(((J = Ze.center) == null ? void 0 : J.x) || 0) + Je,
            y: Number(((ne = Ze.center) == null ? void 0 : ne.y) || 0) + He
          };
          if (p.mode === "frame" && t === "cutout") {
            const Ct = Ge(), zt = en(Ct);
            if (!Ct || !zt) continue;
            const Nr = {
              x: Q((vn.x - zt.x) / Math.max(1, zt.w), 0, 1),
              y: Q((vn.y - zt.y) / Math.max(1, zt.h), 0, 1)
            }, hh = Kc(Ct, Nr);
            if (!hh) continue;
            const mh = tl(hh);
            ur(wt, { yaw_deg: mh.yaw, pitch_deg: mh.pitch });
          } else if (p.mode === "unwrap") {
            const Ct = xi(), zt = Q((vn.x - Ct.x) / Math.max(Ct.w, 1), 0, 1), Nr = Q((vn.y - Ct.y) / Math.max(Ct.h, 1), 0, 1);
            ur(wt, { yaw_deg: Gt(zt * 360 - 180), pitch_deg: Q(90 - Nr * 180, -90, 90) });
          } else {
            const Ct = Lc(vn.x, vn.y), zt = tl(Ct);
            ur(wt, { yaw_deg: zt.yaw, pitch_deg: zt.pitch });
          }
          Te = !0;
        }
        for (const Ze of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
          const wt = {
            x: Number(((ae = Ze.center) == null ? void 0 : ae.x) || 0) + Je,
            y: Number(((me = Ze.center) == null ? void 0 : me.y) || 0) + He
          }, vn = p.mode === "frame" ? (() => {
            const zt = Ge();
            return zt ? gr(wt, zt, performance.now()) : null;
          })() : mr(wt, performance.now()), Ct = Ze.centerUv || null;
          if (vn && Ct) {
            const zt = Jn(Number(vn.u || 0), Number(Ct.u || 0)), Nr = Number(vn.v || 0) - Number(Ct.v || 0);
            Fd(Ze.id, zt, Nr, Ze.snapshot, Ze.layerKind, Ze.frameSnapshot) && (Te = !0, Se = !0);
          }
        }
        for (const Ze of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
          const wt = {
            x: Number(((ie = Ze.center) == null ? void 0 : ie.x) || 0) + Je,
            y: Number(((xe = Ze.center) == null ? void 0 : xe.y) || 0) + He
          }, vn = p.mode === "frame" ? (() => {
            const zt = Ge();
            return zt ? gr(wt, zt, performance.now()) : null;
          })() : mr(wt, performance.now()), Ct = Ze.centerUv || null;
          if (vn && Ct) {
            const zt = Jn(Number(vn.u || 0), Number(Ct.u || 0)), Nr = Number(vn.v || 0) - Number(Ct.v || 0);
            Dd(Ze.id, zt, Nr, Ze.snapshot) && (Te = !0, qe = !0);
          }
        }
        Te && (Se ? hr({ rebuildPaintEngine: !1 }) : qe ? Fo() : Ft(), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "scale_stroke_group") {
        const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
        Td((Ke = c.item) == null ? void 0 : Ke.actionGroupId, pe, 0, c.snapshot, (Ye = c.item) == null ? void 0 : Ye.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "rotate_stroke_group") {
        let oe = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * to;
        i.shiftKey && (oe = Math.round(oe / 45) * 45), Td((st = c.item) == null ? void 0 : st.actionGroupId, 1, oe, c.snapshot, (be = c.item) == null ? void 0 : be.layerKind, c.frameSnapshot) && (hr({ rebuildPaintEngine: !1 }), se({ localOnly: !0 }));
        return;
      }
      if (c.kind === "marquee_select") {
        c.current = s, se({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale") {
        const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        ur(c.item, { hFOV_deg: Q(c.startHFOV * pe, 1, 179), vFOV_deg: Q(c.startVFOV * pe, 1, 179) }), cr(c.item) || (c.item.aspect_id = eo(c.item)), bt(c.item) && Ft(), se({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_x") {
        const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        ur(c.item, { hFOV_deg: Q(c.startHFOV * pe, 1, 179) }), cr(c.item) || (c.item.aspect_id = eo(c.item)), bt(c.item) && Ft(), se({ localOnly: !0 });
        return;
      }
      if (c.kind === "scale_y") {
        const pe = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
        ur(c.item, { vFOV_deg: Q(c.startVFOV * pe, 1, 179) }), cr(c.item) || (c.item.aspect_id = eo(c.item)), bt(c.item) && Ft(), se({ localOnly: !0 });
        return;
      }
      if (c.kind === "rotate") {
        let pe = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * to, Te = c.startRot - pe;
        i.shiftKey && (Te = Math.round(Te / 45) * 45), ur(c.item, { [bt(c.item) ? "rot_deg" : "roll_deg"]: Te }), bt(c.item) && Ft(), se({ localOnly: !0 });
      }
    }
  }, C.onpointerup = () => {
    var s, c, f, h, m, y, w, k;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        p.interaction = null, dt(p.pointerPos);
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        Up(i);
        return;
      }
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        Io();
        const N = Qc(p.interaction), M = !!p.interaction._hasCommittedSegments;
        if (N || M) {
          hr();
          const E = String(((f = p.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (E) {
            const D = mn().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === E);
            D && (D.frame = null);
          }
          const L = jn();
          L && (N ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(L), bp()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, L) : p.paintEngine.cancelActiveStroke(L)), et(), Nn(), ze(), Xe(), e.setDirtyCanvas(!0, !0), se();
        } else {
          const E = jn();
          E && p.paintEngine.cancelActiveStroke(E);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = Bp(p.interaction.start, p.interaction.current), E = [
          ...t === "cutout" ? Gc().filter((L) => !zn(L)) : [...kr()],
          ...mb(),
          ...gb()
        ].filter((L) => Uv(N, Ut(L)));
        xb(E, ((y = E[E.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && E.length && (p.cutoutAspectOpen = !1), ze(), Xe(), se();
      } else if (((w = p.interaction) == null ? void 0 : w.kind) === "pan_frame" || ((k = p.interaction) == null ? void 0 : k.kind) === "roll_frame")
        p.interaction.changed && (et(), lt(), ze());
      else if (p.interaction && p.interaction.kind !== "view") {
        let N = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (N = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? hr({ rebuildPaintEngine: !0 }) : Fo()), et(), Nn(), e.setDirtyCanvas(!0, !0), To(), Xe(), se();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Hi(), Io(), i && i.kind === "view" && pn.endDrag(performance.now()), Wr(), Xe(), dt(p.pointerPos), se();
    }
  }, C.onpointercancel = () => {
    var i, s, c, f, h;
    if (!Ea()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = p.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        Up(p.interaction);
        return;
      }
      if (((c = p.interaction) == null ? void 0 : c.kind) === "view" && pn.endDrag(performance.now()), ((f = p.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((h = p.interaction) == null ? void 0 : h.kind) === "paint_lasso_fill") {
        Io();
        const m = jn();
        m && p.paintEngine.cancelActiveStroke(m);
      }
      p.interaction = null, Io(), Wr(), dt(p.pointerPos), se({ localOnly: !0 });
    }
  }, C.onlostpointercapture = () => {
    Ea();
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.oncontextmenu = (i) => {
    wa() && wN(Oc(), 2) && i.preventDefault();
  }, C.onmousemove = (i) => {
    const s = Ni(i), c = Ds(s, !0);
    p.interaction || (dt(s), c && p.mode === "frame" && p.primaryTool === "cursor" && se({ localOnly: !0 }));
  }, C.onmouseleave = () => {
    Ds(p.pointerPos, !1), dt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && se({ localOnly: !0 });
  }, C.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Ni(i), c = El(i);
      c && Dv(s, c) && se({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (p.mode === "pano") {
      if (wa()) {
        const s = El(i);
        s && Wb(Ni(i), -s);
      } else pn.applyWheelEvent(i) && se({ localOnly: !0 });
      i.preventDefault();
    }
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), lr(!0));
  }, C.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ee.depth = 0, lr(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((h) => br(h));
    c && Ep(c);
  };
  const Xp = (i) => {
    t !== "stickers" && t !== "cutout" || r || xo(i) && (Ee.depth += 1, lr(!0), i.preventDefault());
  }, qp = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ee.active && xo(i) && lr(!0), Ee.active && i.preventDefault());
  }, Jp = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ee.active) return;
    Ee.depth = Math.max(0, Ee.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ee.depth === 0 || s) && lr(!1);
  }, Zp = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ee.depth = 0, lr(!1), xo(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Xp, !0), window.addEventListener("dragover", qp, !0), window.addEventListener("dragleave", Jp, !0), window.addEventListener("drop", Zp, !0);
  function nu() {
    const { canUndo: i, canRedo: s } = Ap();
    Yi(I.toolButtons, "value", "undo", { disabled: !i }), Yi(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const Qp = (i, s, c = !1) => {
    var M;
    Tn();
    const f = t === "cutout" && p.mode === "frame" ? Ge() : null, h = f || Nt(), m = f ? "shot" : xs(), y = x && p.inspectCamera, w = Po();
    if (w && !_a(w) || !y && !w && (!h || m === "stroke" || yn(h))) return;
    const k = (((M = I.sidePanel) == null ? void 0 : M.params) || []).find((E) => E.key === i);
    if (!k || k.enabled === !1) return;
    let N = Number(s);
    if (Number.isNaN(N) && (N = 0), N = Q(N, Number(k.min), Number(k.max)), i === "yaw_deg" && (N = Gt(N)), y) {
      rk(v.camera, p.frame, i, N), ze(), c && et();
      return;
    }
    if (w) {
      ak(w, p.frame, i, N), Ft(), ze(), se(), c && et();
      return;
    }
    i === "opacity" ? ik(h, p.frame, N / 100) : ur(h, { [i]: N }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = eo(h)), ze(), se(), c && et();
  };
  te == null || te.addEventListener("click", async (i) => {
    var f, h, m, y, w, k, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const M = Gn(s.getAttribute("data-coverage"));
      if (M === Gn(v.coverage)) return;
      v.coverage = M, p.coverage = M, d && (d.value = String(M)), a ? Pe.backgroundDirty = !0 : (Nn(), Fv({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Xe(), se();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((h = (f = I.sidePanel) == null ? void 0 : f.selectionPicker) != null && h.disabled) return;
      I.sidePanel.selectionPicker.open = !I.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      I.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let E = null;
      if (M && (t === "stickers" ? E = kr().find((L) => String((L == null ? void 0 : L.id) || "") === M) || null : E = ((m = Rd().find((L) => {
        var D;
        return String(((D = L == null ? void 0 : L.item) == null ? void 0 : D.id) || "") === M;
      })) == null ? void 0 : m.item) || null), pr(E || null), E && !Qt(E)) {
        const L = Jt(E);
        Kr(
          Gt(Number(L.yaw_deg || 0)),
          Q(Number(L.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      ze(), Xe(), se();
      return;
    }
    if (c === "copy-state-inline") {
      const M = Nt(), E = xs();
      if (!M || E === "stroke" || dr().length > 1) return;
      const L = JSON.stringify(t === "cutout" && E !== "image" ? Bd(M) : Lb(Jt(M)));
      try {
        await navigator.clipboard.writeText(L), (y = I.sidePanel) != null && y.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var D;
          (D = I.sidePanel) != null && D.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? p.showPanorama = !p.showPanorama : M === "objects" ? p.showObjects = !p.showObjects : M === "mask" && (p.showMask = !p.showMask), ze(), se();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", qc(), ze(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), se();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", qc(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), se();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, qc(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), se();
      return;
    }
    if (c === "close-preview") {
      Vo();
      return;
    }
    if (c === "cancel-close") {
      Vo();
      return;
    }
    c === "save-close" && (Ev(), Vo());
  }), te == null || te.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Qp(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), te == null || te.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Qp(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const ru = () => wi();
  ru(), T.addEventListener("click", (i) => {
    var N, M, E, L;
    if ((M = (N = i.target) == null ? void 0 : N.matches) != null && M.call(N, "[data-confirm-overlay]")) {
      const D = (E = I.confirmDialog) == null ? void 0 : E.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, D == null || D(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Kb(s.getAttribute("data-space-mode"));
      return;
    }
    const c = i.target.closest("[data-gizmo-mode]");
    if (c) {
      p.gizmoMode = c.getAttribute("data-gizmo-mode"), Pe.backgroundDirty = !0, wi(), se({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.disabled) return;
      const D = p.mode;
      p.mode = String(f.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (D !== "frame" && (Pe.frameSafeRect = null), ze(), Xe()), Fs(), Wr(), se();
      return;
    }
    const h = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (h && !r) {
      if (h.matches("[data-tool-mode]")) {
        const D = String(h.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = D, (D === "paint" || D === "mask") && va({ preservePanelValues: !0 }), Fn(), ze(), Xe(), se();
        return;
      }
      if (h.matches("[data-tool-ui-action]")) {
        const D = String(h.getAttribute("data-tool-ui-action") || "");
        if ((D === "undo" || D === "redo") && h.disabled) return;
        D === "undo" ? Wc(-1) : D === "redo" ? Wc(1) : D === "clear" ? kv() : D === "add" || D === "add-image" ? dv() : D === "add-world" ? pv() : D === "add-or-look" && wv();
        return;
      }
      if (h.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const D = String(h.getAttribute("data-paint-tool") || "pen");
        p.paintTool = D, va({ preservePanelValues: !0 }), Dn[D] && (p.activeBrushPresetId = D), Fn(), ze(), Xe(), se();
        return;
      }
      if (h.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(h.getAttribute("data-mask-tool") || "pen"), va({ preservePanelValues: !0 }), Fn(), ze(), Xe(), se();
        return;
      }
      if (h.matches("[data-paint-layer-clear-current]")) {
        const D = String(h.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Mv(D);
        return;
      }
      if (h.matches("[data-paint-color-swatch]")) {
        const D = _l.find((q) => q.id === h.getAttribute("data-paint-color-swatch"));
        if (!D) return;
        p.paintColor = Hn(D.color), Re(!0), Fn();
        return;
      }
      if (h.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Z && !Z.hidden ? Re(!0) : Ie(), Fn();
        return;
      }
    }
    const m = String(((L = h == null ? void 0 : h.getAttribute) == null ? void 0 : L.call(h, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      $e.resumeAfterScrub = !1, Yc();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), zd(), typeof (h == null ? void 0 : h.blur) == "function" && h.blur();
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
      }), typeof (h == null ? void 0 : h.blur) == "function" && h.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const D = p.mode === "frame" ? Ge() : null;
        if (!D || D.locked === !0) return;
        Dp(D, String(h.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, To(), et(), lt(), Wr(), se();
        return;
      }
      if (m === "frame-aspect-custom") {
        const D = p.mode === "frame" ? Ge() : null, q = h.getAttribute("data-custom-width"), J = h.getAttribute("data-custom-height");
        if (!D || !Av(D, q, J)) return;
        I.frameRail.aspectOpen = !1, To(), et(), lt(), Wr(), se();
        return;
      }
      if (m === "frame-rotate-90") {
        const D = p.mode === "frame" ? Ge() : null;
        if (!D || D.locked === !0) return;
        Lp(D), I.frameRail.aspectOpen = !1, To(), et(), lt(), Wr(), se();
        return;
      }
      if (m === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Xe(), se();
        return;
      }
      if (m === "aspect-set") {
        const D = Nt();
        if (!D) return;
        const q = String(h.getAttribute("data-aspect") || "1:1");
        Dp(D, q), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, To(), et(), lt(), Xe(), se();
        return;
      }
      if (m === "rotate-90") {
        const D = Nt();
        if (!D) return;
        Lp(D), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, To(), et(), lt(), Xe(), se();
        return;
      }
      if (m === "bring-front") {
        Cv();
        return;
      }
      if (m === "send-back") {
        Iv();
        return;
      }
      if (m === "duplicate") {
        Nv();
        return;
      }
      if (m === "replace-image") {
        bv();
        return;
      }
      if (m === "toggle-lock") {
        wb();
        return;
      }
      if (m === "back-initial") {
        Ab();
        return;
      }
      if (m === "toggle-visible") {
        Pb();
        return;
      }
      if (m === "delete") {
        Tp();
        return;
      }
    }
    if (m === "reset-view") {
      if (p.mode === "frame") return;
      Kr(0, 0, 100, 180, 680), p.viewPosition = [0, 0, 0], p.viewMoved = !1;
      return;
    }
    if (m === "frame-view") {
      if (!wa()) return;
      Bb();
      return;
    }
    if (m === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, TI(e == null ? void 0 : e.id, p.showGrid), ru(), se();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), i_();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const D = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = D, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = D ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), ih(), se();
      return;
    }
    const y = i.target.closest("[data-paint-history-index]");
    if (!y) return;
    const w = Number(y.getAttribute("data-paint-history-index")), k = p.customPaintHistory[w];
    k && (p.customPaintColor = Hn(k), p.paintColor = Hn(k), Fn());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      At.playing && ($e.resumeAfterScrub = !0), At.seek(Zi(Number(s.value || 0), ks()));
      return;
    }
    const c = i.target.closest("[data-video-volume]");
    if (c) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = Q(Number(c.value || 0), 0, 1);
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
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), y = Pi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, Fn(), zv();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: Q(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Hn(m), p.paintColor = Hn(m), Fn();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      $e.resumeAfterScrub && At.play(), $e.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ls();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ls();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ls();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Ls();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || je.target !== s && (je.target = s, je.timer && clearTimeout(je.timer), je.timer = window.setTimeout(() => {
      je.target === s && Yv(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var f, h;
    const s = i.target.closest("[data-tip]");
    !s || je.target !== s || (i.relatedTarget instanceof Element ? (h = (f = i.relatedTarget).closest) == null ? void 0 : h.call(f, "[data-tip]") : null) === s || Hi();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Hi();
  });
  const n_ = (i, s) => {
    var w;
    if (!ve) return;
    const c = ve.getBoundingClientRect(), f = Q((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - Q((s - c.top) / Math.max(1, c.height), 0, 1), m = Uu(p.customPaintColor), y = { ...Wu(m.h, f, h), a: Number(((w = p.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    p.customPaintColor = Hn(y), p.paintColor = Hn(y), Fn();
  }, r_ = (i) => {
    var m;
    if (!ye) return;
    const s = ye.getBoundingClientRect(), c = Q((i - s.left) / Math.max(1, s.width), 0, 1), f = Uu(p.customPaintColor), h = { ...Wu(c, f.s, f.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Hn(h), p.paintColor = Hn(h), Fn();
  }, eh = (i, s) => {
    const c = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === c && s(m);
    }, h = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  ve && (ve.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), eh(i, (s) => n_(s.clientX, s.clientY));
  }), ye && (ye.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), eh(i, (s) => r_(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (h = I.confirmDialog) == null ? void 0 : h.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const th = () => {
    const i = !!p.fullscreen;
    Yi(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? ke.fullscreen_close : ke.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Vs = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), ru(), th(), gi(), se());
  }, nh = () => document.fullscreenElement === _e, i_ = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Vs(!p.fullscreen);
        return;
      }
      nh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      Vs(!p.fullscreen);
    }
  }, rh = () => {
    document.fullscreenEnabled && Vs(nh());
  };
  document.addEventListener("fullscreenchange", rh), th();
  const ih = () => {
    const i = !!p.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? ke.fullscreen_close : ke.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  ih();
  const iu = e.onConnectionsChange;
  let ou = null, oh = () => {
  };
  !r && t === "stickers" && (oh = Gy(e, (i = "sync") => {
    i === "executed" && (_I(We, Zs), vi(), x && uv()), Wd(i);
  }, { editor: !0 }), ou = function(...s) {
    typeof iu == "function" && iu.apply(this, s), vi(), si(this, "connections");
  }, e.onConnectionsChange = ou), r || rg.set(String(e.id ?? "0"), () => op());
  let Ro = null;
  const Vo = async () => Ro || (Ro = (async () => {
    var i, s, c, f, h, m, y, w;
    return rg.delete(String(e.id ?? "0")), Lv(), r || Nn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", rh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Vp && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (w = (y = (m = vr) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || w.call(y, !0, !0), Hi(), ov(), Y instanceof HTMLVideoElement && Y.pause(), Vt.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), Mt.dispose(), lr(!1), window.removeEventListener("keydown", ah, !0), window.removeEventListener("keydown", sh, !0), window.removeEventListener("keydown", ch, !0), window.removeEventListener("keyup", uh, !0), window.removeEventListener("keydown", $s, !0), window.removeEventListener("keyup", $s, !0), window.removeEventListener("blur", fh), window.removeEventListener("keydown", dh, !0), window.removeEventListener("dragenter", Xp, !0), window.removeEventListener("dragover", qp, !0), window.removeEventListener("dragleave", Jp, !0), window.removeEventListener("drop", Zp, !0), !r && t === "stickers" && (e.onConnectionsChange === ou && (e.onConnectionsChange = iu), oh()), G.unmount(), V.remove(), Ov(), Ro = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Ro = null, !1)), Ro), ah = (i) => {
    var s, c, f, h, m;
    if (i.key === "Escape") {
      if (Ea()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (c = i.stopImmediatePropagation) == null || c.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), Vs(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Vo();
    }
  }, sh = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const y = i.target, w = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Le.selection) {
      cv(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (Pv()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (Tp(), i.preventDefault(), i.stopPropagation());
  }, lh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !x || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !oI.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, ch = (i) => {
    lh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Yc());
  }, uh = (i) => {
    lh(i) && (i.preventDefault(), i.stopPropagation());
  }, $s = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === c || (p.marqueeModifier = s, p.altModifier = c, Xr(), dt(p.pointerPos));
  }, fh = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Xr(), dt(p.pointerPos);
  }, dh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, h = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Ap();
    i.shiftKey && !y || !i.shiftKey && !m || (Wc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", ah, !0), window.addEventListener("keydown", sh, !0), window.addEventListener("keydown", ch, !0), window.addEventListener("keyup", uh, !0), window.addEventListener("keydown", $s, !0), window.addEventListener("keyup", $s, !0), window.addEventListener("blur", fh), window.addEventListener("keydown", dh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Vo();
  });
  function Mr(i, s, { rollbackState: c = !1 } = {}) {
    let f = "";
    try {
      c && (f = JSON.stringify(v)), s();
    } catch (h) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(v).forEach((y) => delete v[y]), Object.assign(v, m), r || Nn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      I.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  Mr("cutout-focus", jb), !r && t === "stickers" && Mr("external-sticker-sync", () => Wd("open"), { rollbackState: !0 }), vv().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Mr("history", et), Mr("undo-redo", nu), Mr("paint-ui", Fn), Mr("side-panel", ze), Mr("look-at-frame", Ec), Mr("video-source", vi), Mr("canvas-size", kp), Mr("cursor", () => dt(p.pointerPos)), se(), Pe.rafId = requestAnimationFrame(Np);
}
vr.registerExtension(EN({
  app: vr,
  openEditor: zI,
  attachStickers: B2,
  attachCutout: W2,
  attachPreview: K2,
  restoreOutput: E2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: uI
}));
