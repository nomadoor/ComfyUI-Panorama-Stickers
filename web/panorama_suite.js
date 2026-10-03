import * as Xs from "../../scripts/app.js";
import { app as mr } from "../../scripts/app.js";
import { api as Gt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function kf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const wt = {}, Bo = [], Or = () => {
}, qm = () => !1, Gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Kl = (e) => e.startsWith("onUpdate:"), kn = Object.assign, Mf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jv = Object.prototype.hasOwnProperty, pt = (e, t) => jv.call(e, t), Ze = Array.isArray, Wo = (e) => is(e) === "[object Map]", Jm = (e) => is(e) === "[object Set]", ah = (e) => is(e) === "[object Date]", et = (e) => typeof e == "function", Ut = (e) => typeof e == "string", Tr = (e) => typeof e == "symbol", _t = (e) => e !== null && typeof e == "object", Zm = (e) => (_t(e) || et(e)) && et(e.then) && et(e.catch), Qm = Object.prototype.toString, is = (e) => Qm.call(e), Hv = (e) => is(e).slice(8, -1), eg = (e) => is(e) === "[object Object]", Nf = (e) => Ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $a = /* @__PURE__ */ kf(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Gv = /-\w/g, Cn = Bl(
  (e) => e.replace(Gv, (t) => t.slice(1).toUpperCase())
), Kv = /\B([A-Z])/g, uo = Bl(
  (e) => e.replace(Kv, "-$1").toLowerCase()
), Wl = Bl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jc = Bl(
  (e) => e ? `on${Wl(e)}` : ""
), Cr = (e, t) => !Object.is(e, t), qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, tg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Pf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let sh;
const Ul = () => sh || (sh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ut(r) ? Yv(r) : xt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Ut(e) || _t(e))
    return e;
}
const Bv = /;(?![^(]*\))/g, Wv = /:([^]+)/, Uv = /\/\*[^]*?\*\//g;
function Yv(e) {
  const t = {};
  return e.replace(Uv, "").split(Bv).forEach((n) => {
    if (n) {
      const r = n.split(Wv);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (Ut(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = ot(e[n]);
      r && (t += r + " ");
    }
  else if (_t(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qv = /* @__PURE__ */ kf(Xv);
function ng(e) {
  return !!e || e === "";
}
function Jv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Af(e[r], t[r]);
  return n;
}
function Af(e, t) {
  if (e === t) return !0;
  let n = ah(e), r = ah(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Tr(e), r = Tr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Jv(e, t) : !1;
  if (n = _t(e), r = _t(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), d = t.hasOwnProperty(l);
      if (u && !d || !u && d || !Af(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rg = (e) => !!(e && e.__v_isRef === !0), nt = (e) => Ut(e) ? e : e == null ? "" : Ze(e) || _t(e) && (e.toString === Qm || !et(e.toString)) ? rg(e) ? nt(e.value) : JSON.stringify(e, ig, 2) : String(e), ig = (e, t) => rg(t) ? ig(e, t.value) : Wo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Zc(r, a) + " =>"] = o, n),
    {}
  )
} : Jm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zc(n))
} : Tr(t) ? Zc(t) : _t(t) && !Ze(t) && !eg(t) ? String(t) : t, Zc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Tr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rn;
class Zv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Rn, !t && Rn && (this.index = (Rn.scopes || (Rn.scopes = [])).push(
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
      const n = Rn;
      try {
        return Rn = this, t();
      } finally {
        Rn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Rn, Rn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Rn = this.prevScope, this.prevScope = void 0);
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
function Qv() {
  return Rn;
}
let kt;
const Qc = /* @__PURE__ */ new WeakSet();
class og {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Rn && Rn.active && Rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qc.has(this) && (Qc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sg(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, lh(this), lg(this);
    const t = kt, n = gr;
    kt = this, gr = !0;
    try {
      return this.fn();
    } finally {
      cg(this), kt = t, gr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ef(t);
      this.deps = this.depsTail = void 0, lh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $u(this) && this.run();
  }
  get dirty() {
    return $u(this);
  }
}
let ag = 0, za, ja;
function sg(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ja, ja = e;
    return;
  }
  e.next = za, za = e;
}
function Cf() {
  ag++;
}
function If() {
  if (--ag > 0)
    return;
  if (ja) {
    let t = ja;
    for (ja = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; za; ) {
    let t = za;
    for (za = void 0; t; ) {
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
function lg(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cg(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Ef(r), e_(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function $u(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ug(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ug(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ua) || (e.globalVersion = Ua, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$u(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = kt, r = gr;
  kt = e, gr = !0;
  try {
    lg(e);
    const o = e.fn(e._value);
    (t.version === 0 || Cr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    kt = n, gr = r, cg(e), e.flags &= -3;
  }
}
function Ef(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Ef(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function e_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let gr = !0;
const fg = [];
function ai() {
  fg.push(gr), gr = !1;
}
function si() {
  const e = fg.pop();
  gr = e === void 0 ? !0 : e;
}
function lh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = kt;
    kt = void 0;
    try {
      t();
    } finally {
      kt = n;
    }
  }
}
let Ua = 0;
class t_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Of {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!kt || !gr || kt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== kt)
      n = this.activeLink = new t_(kt, this), kt.deps ? (n.prevDep = kt.depsTail, kt.depsTail.nextDep = n, kt.depsTail = n) : kt.deps = kt.depsTail = n, dg(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = kt.depsTail, n.nextDep = void 0, kt.depsTail.nextDep = n, kt.depsTail = n, kt.deps === n && (kt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ua++, this.notify(t);
  }
  notify(t) {
    Cf();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      If();
    }
  }
}
function dg(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        dg(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const zu = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ Symbol(
  ""
), ju = /* @__PURE__ */ Symbol(
  ""
), Ya = /* @__PURE__ */ Symbol(
  ""
);
function _n(e, t, n) {
  if (gr && kt) {
    let r = zu.get(e);
    r || zu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Of()), o.map = r, o.key = n), o.track();
  }
}
function ni(e, t, n, r, o, a) {
  const l = zu.get(e);
  if (!l) {
    Ua++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Cf(), t === "clear")
    l.forEach(u);
  else {
    const d = Ze(e), b = d && Nf(n);
    if (d && n === "length") {
      const y = Number(r);
      l.forEach((w, x) => {
        (x === "length" || x === Ya || !Tr(x) && x >= y) && u(w);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && u(l.get(n)), b && u(l.get(Ya)), t) {
        case "add":
          d ? b && u(l.get("length")) : (u(l.get(Qi)), Wo(e) && u(l.get(ju)));
          break;
        case "delete":
          d || (u(l.get(Qi)), Wo(e) && u(l.get(ju)));
          break;
        case "set":
          Wo(e) && u(l.get(Qi));
          break;
      }
  }
  If();
}
function Fo(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (_n(t, "iterate", Ya), /* @__PURE__ */ nr(e) ? t : t.map(yr));
}
function Yl(e) {
  return _n(e = /* @__PURE__ */ dt(e), "iterate", Ya), e;
}
function Pr(e, t) {
  return /* @__PURE__ */ li(e) ? ta(/* @__PURE__ */ eo(e) ? yr(t) : t) : yr(t);
}
const n_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return eu(this, Symbol.iterator, (e) => Pr(this, e));
  },
  concat(...e) {
    return Fo(this).concat(
      ...e.map((t) => Ze(t) ? Fo(t) : t)
    );
  },
  entries() {
    return eu(this, "entries", (e) => (e[1] = Pr(this, e[1]), e));
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
      (n) => n.map((r) => Pr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Yr(
      this,
      "find",
      e,
      t,
      (n) => Pr(this, n),
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
      (n) => Pr(this, n),
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
    return tu(this, "includes", e);
  },
  indexOf(...e) {
    return tu(this, "indexOf", e);
  },
  join(e) {
    return Fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return tu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ka(this, "pop");
  },
  push(...e) {
    return ka(this, "push", e);
  },
  reduce(e, ...t) {
    return ch(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ch(this, "reduceRight", e, t);
  },
  shift() {
    return ka(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ka(this, "splice", e);
  },
  toReversed() {
    return Fo(this).toReversed();
  },
  toSorted(e) {
    return Fo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Fo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ka(this, "unshift", e);
  },
  values() {
    return eu(this, "values", (e) => Pr(this, e));
  }
};
function eu(e, t, n) {
  const r = Yl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ nr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const r_ = Array.prototype;
function Yr(e, t, n, r, o, a) {
  const l = Yl(e), u = l !== e && !/* @__PURE__ */ nr(e), d = l[t];
  if (d !== r_[t]) {
    const w = d.apply(e, a);
    return u ? yr(w) : w;
  }
  let b = n;
  l !== e && (u ? b = function(w, x) {
    return n.call(this, Pr(e, w), x, e);
  } : n.length > 2 && (b = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const y = d.call(l, b, r);
  return u && o ? o(y) : y;
}
function ch(e, t, n, r) {
  const o = Yl(e), a = o !== e && !/* @__PURE__ */ nr(e);
  let l = n, u = !1;
  o !== e && (a ? (u = r.length === 0, l = function(b, y, w) {
    return u && (u = !1, b = Pr(e, b)), n.call(this, b, Pr(e, y), w, e);
  }) : n.length > 3 && (l = function(b, y, w) {
    return n.call(this, b, y, w, e);
  }));
  const d = o[t](l, ...r);
  return u ? Pr(e, d) : d;
}
function tu(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  _n(r, "iterate", Ya);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Df(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function ka(e, t, n = []) {
  ai(), Cf();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return If(), si(), r;
}
const i_ = /* @__PURE__ */ kf("__proto__,__v_isRef,__isVue"), pg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tr)
);
function o_(e) {
  Tr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return _n(t, "has", e), t.hasOwnProperty(e);
}
class hg {
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
      return r === (o ? a ? m_ : bg : a ? yg : gg).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = Ze(t);
    if (!o) {
      let d;
      if (l && (d = n_[n]))
        return d;
      if (n === "hasOwnProperty")
        return o_;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ xn(t) ? t : r
    );
    if ((Tr(n) ? pg.has(n) : i_(n)) || (o || _n(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ xn(u)) {
      const d = l && Nf(n) ? u : u.value;
      return o && _t(d) ? /* @__PURE__ */ Gu(d) : d;
    }
    return _t(u) ? o ? /* @__PURE__ */ Gu(u) : /* @__PURE__ */ sa(u) : u;
  }
}
class mg extends hg {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const l = Ze(t) && Nf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ li(a);
      if (!/* @__PURE__ */ nr(r) && !/* @__PURE__ */ li(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !l && /* @__PURE__ */ xn(a) && !/* @__PURE__ */ xn(r))
        return b || (a.value = r), !0;
    }
    const u = l ? Number(n) < t.length : pt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ xn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (u ? Cr(r, a) && ni(t, "set", n, r) : ni(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = pt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && ni(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Tr(n) || !pg.has(n)) && _n(t, "has", n), r;
  }
  ownKeys(t) {
    return _n(
      t,
      "iterate",
      Ze(t) ? "length" : Qi
    ), Reflect.ownKeys(t);
  }
}
class a_ extends hg {
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
const s_ = /* @__PURE__ */ new mg(), l_ = /* @__PURE__ */ new a_(), c_ = /* @__PURE__ */ new mg(!0);
const Hu = (e) => e, Es = (e) => Reflect.getPrototypeOf(e);
function u_(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), l = Wo(a), u = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, b = o[e](...r), y = n ? Hu : t ? ta : yr;
    return !t && _n(
      a,
      "iterate",
      d ? ju : Qi
    ), kn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: w, done: x } = b.next();
          return x ? { value: w, done: x } : {
            value: u ? [y(w[0]), y(w[1])] : y(w),
            done: x
          };
        }
      }
    );
  };
}
function Os(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function f_(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      e || (Cr(o, u) && _n(l, "get", o), _n(l, "get", u));
      const { has: d } = Es(l), b = t ? Hu : e ? ta : yr;
      if (d.call(l, o))
        return b(a.get(o));
      if (d.call(l, u))
        return b(a.get(u));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && _n(/* @__PURE__ */ dt(o), "iterate", Qi), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ dt(a), u = /* @__PURE__ */ dt(o);
      return e || (Cr(o, u) && _n(l, "has", o), _n(l, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const l = this, u = l.__v_raw, d = /* @__PURE__ */ dt(u), b = t ? Hu : e ? ta : yr;
      return !e && _n(d, "iterate", Qi), u.forEach((y, w) => o.call(a, b(y), b(w), l));
    }
  };
  return kn(
    n,
    e ? {
      add: Os("add"),
      set: Os("set"),
      delete: Os("delete"),
      clear: Os("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), l = Es(a), u = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ nr(o) && !/* @__PURE__ */ li(o) ? u : o;
        return l.has.call(a, d) || Cr(o, d) && l.has.call(a, o) || Cr(u, d) && l.has.call(a, u) || (a.add(d), ni(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ nr(a) && !/* @__PURE__ */ li(a) && (a = /* @__PURE__ */ dt(a));
        const l = /* @__PURE__ */ dt(this), { has: u, get: d } = Es(l);
        let b = u.call(l, o);
        b || (o = /* @__PURE__ */ dt(o), b = u.call(l, o));
        const y = d.call(l, o);
        return l.set(o, a), b ? Cr(a, y) && ni(l, "set", o, a) : ni(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: l, get: u } = Es(a);
        let d = l.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = l.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && ni(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, l = o.clear();
        return a && ni(
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
    n[o] = u_(o, e, t);
  }), n;
}
function Ff(e, t) {
  const n = f_(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    pt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const d_ = {
  get: /* @__PURE__ */ Ff(!1, !1)
}, p_ = {
  get: /* @__PURE__ */ Ff(!1, !0)
}, h_ = {
  get: /* @__PURE__ */ Ff(!0, !1)
};
const gg = /* @__PURE__ */ new WeakMap(), yg = /* @__PURE__ */ new WeakMap(), bg = /* @__PURE__ */ new WeakMap(), m_ = /* @__PURE__ */ new WeakMap();
function g_(e) {
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
function y_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : g_(Hv(e));
}
// @__NO_SIDE_EFFECTS__
function sa(e) {
  return /* @__PURE__ */ li(e) ? e : Tf(
    e,
    !1,
    s_,
    d_,
    gg
  );
}
// @__NO_SIDE_EFFECTS__
function b_(e) {
  return Tf(
    e,
    !1,
    c_,
    p_,
    yg
  );
}
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  return Tf(
    e,
    !0,
    l_,
    h_,
    bg
  );
}
function Tf(e, t, n, r, o) {
  if (!_t(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = y_(e);
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
function eo(e) {
  return /* @__PURE__ */ li(e) ? /* @__PURE__ */ eo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Df(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function v_(e) {
  return !pt(e, "__v_skip") && Object.isExtensible(e) && tg(e, "__v_skip", !0), e;
}
const yr = (e) => _t(e) ? /* @__PURE__ */ sa(e) : e, ta = (e) => _t(e) ? /* @__PURE__ */ Gu(e) : e;
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return __(e, !1);
}
function __(e, t) {
  return /* @__PURE__ */ xn(e) ? e : new w_(e, t);
}
class w_ {
  constructor(t, n) {
    this.dep = new Of(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : yr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ nr(t) || /* @__PURE__ */ li(t);
    t = r ? t : /* @__PURE__ */ dt(t), Cr(t, n) && (this._rawValue = t, this._value = r ? t : yr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ xn(e) ? e.value : e;
}
const x_ = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ xn(o) && !/* @__PURE__ */ xn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function vg(e) {
  return /* @__PURE__ */ eo(e) ? e : new Proxy(e, x_);
}
class S_ {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Of(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ua - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    kt !== this)
      return sg(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ug(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function k_(e, t, n = !1) {
  let r, o;
  return et(e) ? r = e : (r = e.get, o = e.set), new S_(r, o, n);
}
const Fs = {}, hl = /* @__PURE__ */ new WeakMap();
let Wi;
function M_(e, t = !1, n = Wi) {
  if (n) {
    let r = hl.get(n);
    r || hl.set(n, r = []), r.push(e);
  }
}
function N_(e, t, n = wt) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: u, call: d } = n, b = (R) => o ? R : /* @__PURE__ */ nr(R) || o === !1 || o === 0 ? ri(R, 1) : ri(R);
  let y, w, x, N, S = !1, v = !1;
  if (/* @__PURE__ */ xn(e) ? (w = () => e.value, S = /* @__PURE__ */ nr(e)) : /* @__PURE__ */ eo(e) ? (w = () => b(e), S = !0) : Ze(e) ? (v = !0, S = e.some((R) => /* @__PURE__ */ eo(R) || /* @__PURE__ */ nr(R)), w = () => e.map((R) => {
    if (/* @__PURE__ */ xn(R))
      return R.value;
    if (/* @__PURE__ */ eo(R))
      return b(R);
    if (et(R))
      return d ? d(R, 2) : R();
  })) : et(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (x) {
      ai();
      try {
        x();
      } finally {
        si();
      }
    }
    const R = Wi;
    Wi = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      Wi = R;
    }
  } : w = Or, t && o) {
    const R = w, F = o === !0 ? 1 / 0 : o;
    w = () => ri(R(), F);
  }
  const T = Qv(), $ = () => {
    y.stop(), T && T.active && Mf(T.effects, y);
  };
  if (a && t) {
    const R = t;
    t = (...F) => {
      R(...F), $();
    };
  }
  let K = v ? new Array(e.length).fill(Fs) : Fs;
  const I = (R) => {
    if (!(!(y.flags & 1) || !y.dirty && !R))
      if (t) {
        const F = y.run();
        if (o || S || (v ? F.some((V, G) => Cr(V, K[G])) : Cr(F, K))) {
          x && x();
          const V = Wi;
          Wi = y;
          try {
            const G = [
              F,
              // pass undefined as the old value when it's changed for the first time
              K === Fs ? void 0 : v && K[0] === Fs ? [] : K,
              N
            ];
            K = F, d ? d(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Wi = V;
          }
        }
      } else
        y.run();
  };
  return u && u(I), y = new og(w), y.scheduler = l ? () => l(I, !1) : I, N = (R) => M_(R, !1, y), x = y.onStop = () => {
    const R = hl.get(y);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const F of R) F();
      hl.delete(y);
    }
  }, t ? r ? I(!0) : K = y.run() : l ? l(I.bind(null, !0), !0) : y.run(), $.pause = y.pause.bind(y), $.resume = y.resume.bind(y), $.stop = $, $;
}
function ri(e, t = 1 / 0, n) {
  if (t <= 0 || !_t(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ xn(e))
    ri(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      ri(e[r], t, n);
  else if (Jm(e) || Wo(e))
    e.forEach((r) => {
      ri(r, t, n);
    });
  else if (eg(e)) {
    for (const r in e)
      ri(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ri(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function os(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Xl(o, t, n);
  }
}
function Dr(e, t, n, r) {
  if (et(e)) {
    const o = os(e, t, n, r);
    return o && Zm(o) && o.catch((a) => {
      Xl(a, t, n);
    }), o;
  }
  if (Ze(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Dr(e[a], t, n, r));
    return o;
  }
}
function Xl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || wt;
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
      ai(), os(a, null, 10, [
        e,
        d,
        b
      ]), si();
      return;
    }
  }
  P_(e, n, o, r, l);
}
function P_(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const An = [];
let Nr = -1;
const Uo = [];
let Mi = null, Vo = 0;
const _g = /* @__PURE__ */ Promise.resolve();
let ml = null;
function ql(e) {
  const t = ml || _g;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function A_(e) {
  let t = Nr + 1, n = An.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = An[r], a = Xa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Lf(e) {
  if (!(e.flags & 1)) {
    const t = Xa(e), n = An[An.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xa(n) ? An.push(e) : An.splice(A_(t), 0, e), e.flags |= 1, wg();
  }
}
function wg() {
  ml || (ml = _g.then(Sg));
}
function C_(e) {
  Ze(e) ? Uo.push(...e) : Mi && e.id === -1 ? Mi.splice(Vo + 1, 0, e) : e.flags & 1 || (Uo.push(e), e.flags |= 1), wg();
}
function uh(e, t, n = Nr + 1) {
  for (; n < An.length; n++) {
    const r = An[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      An.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function xg(e) {
  if (Uo.length) {
    const t = [...new Set(Uo)].sort(
      (n, r) => Xa(n) - Xa(r)
    );
    if (Uo.length = 0, Mi) {
      Mi.push(...t);
      return;
    }
    for (Mi = t, Vo = 0; Vo < Mi.length; Vo++) {
      const n = Mi[Vo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mi = null, Vo = 0;
  }
}
const Xa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sg(e) {
  try {
    for (Nr = 0; Nr < An.length; Nr++) {
      const t = An[Nr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nr < An.length; Nr++) {
      const t = An[Nr];
      t && (t.flags &= -2);
    }
    Nr = -1, An.length = 0, xg(), ml = null, (An.length || Uo.length) && Sg();
  }
}
let Bn = null, kg = null;
function gl(e) {
  const t = Bn;
  return Bn = e, kg = e && e.type.__scopeId || null, t;
}
function Mg(e, t = Bn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && xh(-1);
    const a = gl(t);
    let l;
    try {
      l = e(...o);
    } finally {
      gl(a), r._d && xh(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fr(e, t) {
  if (Bn === null)
    return e;
  const n = tc(Bn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, l, u, d = wt] = t[o];
    a && (et(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ri(l), r.push({
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
function Vi(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    a && (u.oldValue = a[l].value);
    let d = u.dir[r];
    d && (ai(), Dr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), si());
  }
}
function I_(e, t) {
  if (wn) {
    let n = wn.provides;
    const r = wn.parent && wn.parent.provides;
    r === n && (n = wn.provides = Object.create(r)), n[e] = t;
  }
}
function Js(e, t, n = !1) {
  const r = Aw();
  if (r || Yo) {
    let o = Yo ? Yo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && et(t) ? t.call(r && r.proxy) : t;
  }
}
const E_ = /* @__PURE__ */ Symbol.for("v-scx"), O_ = () => Js(E_);
function to(e, t, n) {
  return Ng(e, t, n);
}
function Ng(e, t, n = wt) {
  const { immediate: r, deep: o, flush: a, once: l } = n, u = kn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Ja) {
    if (a === "sync") {
      const N = O_();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Or, N.resume = Or, N.pause = Or, N;
    }
  }
  const y = wn;
  u.call = (N, S, v) => Dr(N, y, S, v);
  let w = !1;
  a === "post" ? u.scheduler = (N) => {
    Ln(N, y && y.suspense);
  } : a !== "sync" && (w = !0, u.scheduler = (N, S) => {
    S ? N() : Lf(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), w && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = N_(e, t, u);
  return Ja && (b ? b.push(x) : d && x()), x;
}
function F_(e, t, n) {
  const r = this.proxy, o = Ut(e) ? e.includes(".") ? Pg(r, e) : () => r[e] : e.bind(r, r);
  let a;
  et(t) ? a = t : (a = t.handler, n = t);
  const l = ss(this), u = Ng(o, a.bind(r), n);
  return l(), u;
}
function Pg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const T_ = /* @__PURE__ */ Symbol("_vte"), D_ = (e) => e.__isTeleport, L_ = /* @__PURE__ */ Symbol("_leaveCb");
function Rf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ag(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function fh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yl = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n, r, o = !1) {
  if (Ze(e)) {
    e.forEach(
      (v, T) => Ha(
        v,
        t && (Ze(t) ? t[T] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Ga(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ha(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? tc(r.component) : r.el, l = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === wt ? u.refs = {} : u.refs, w = u.setupState, x = /* @__PURE__ */ dt(w), N = w === wt ? qm : (v) => fh(y, v) ? !1 : pt(x, v), S = (v, T) => !(T && fh(y, T));
  if (b != null && b !== d) {
    if (dh(t), Ut(b))
      y[b] = null, N(b) && (w[b] = null);
    else if (/* @__PURE__ */ xn(b)) {
      const v = t;
      S(b, v.k) && (b.value = null), v.k && (y[v.k] = null);
    }
  }
  if (et(d))
    os(d, u, 12, [l, y]);
  else {
    const v = Ut(d), T = /* @__PURE__ */ xn(d);
    if (v || T) {
      const $ = () => {
        if (e.f) {
          const K = v ? N(d) ? w[d] : y[d] : S() || !e.k ? d.value : y[e.k];
          if (o)
            Ze(K) && Mf(K, a);
          else if (Ze(K))
            K.includes(a) || K.push(a);
          else if (v)
            y[d] = [a], N(d) && (w[d] = y[d]);
          else {
            const I = [a];
            S(d, e.k) && (d.value = I), e.k && (y[e.k] = I);
          }
        } else v ? (y[d] = l, N(d) && (w[d] = l)) : T && (S(d, e.k) && (d.value = l), e.k && (y[e.k] = l));
      };
      if (l) {
        const K = () => {
          $(), yl.delete(e);
        };
        K.id = -1, yl.set(e, K), Ln(K, n);
      } else
        dh(e), $();
    }
  }
}
function dh(e) {
  const t = yl.get(e);
  t && (t.flags |= 8, yl.delete(e));
}
Ul().requestIdleCallback;
Ul().cancelIdleCallback;
const Ga = (e) => !!e.type.__asyncLoader, Cg = (e) => e.type.__isKeepAlive;
function R_(e, t) {
  Ig(e, "a", t);
}
function V_(e, t) {
  Ig(e, "da", t);
}
function Ig(e, t, n = wn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Jl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Cg(o.parent.vnode) && $_(r, t, n, o), o = o.parent;
  }
}
function $_(e, t, n, r) {
  const o = Jl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Eg(() => {
    Mf(r[t], o);
  }, n);
}
function Jl(e, t, n = wn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...l) => {
      ai();
      const u = ss(n), d = Dr(t, n, e, l);
      return u(), si(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ui = (e) => (t, n = wn) => {
  (!Ja || e === "sp") && Jl(e, (...r) => t(...r), n);
}, z_ = ui("bm"), Zl = ui("m"), j_ = ui(
  "bu"
), H_ = ui("u"), as = ui(
  "bum"
), Eg = ui("um"), G_ = ui(
  "sp"
), K_ = ui("rtg"), B_ = ui("rtc");
function W_(e, t = wn) {
  Jl("ec", e, t);
}
const U_ = "components", Og = /* @__PURE__ */ Symbol.for("v-ndc");
function Y_(e) {
  return Ut(e) ? X_(U_, e, !1) || e : e || Og;
}
function X_(e, t, n = !0, r = !1) {
  const o = Bn || wn;
  if (o) {
    const a = o.type;
    {
      const u = Fw(
        a,
        !1
      );
      if (u && (u === t || u === Cn(t) || u === Wl(Cn(t))))
        return a;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      ph(o[e] || a[e], t) || // global registration
      ph(o.appContext[e], t)
    );
    return !l && r ? a : l;
  }
}
function ph(e, t) {
  return e && (e[t] || e[Cn(t)] || e[Wl(Cn(t))]);
}
function vt(e, t, n, r) {
  let o;
  const a = n, l = Ze(e);
  if (l || Ut(e)) {
    const u = l && /* @__PURE__ */ eo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ nr(e), b = /* @__PURE__ */ li(e), e = Yl(e)), o = new Array(e.length);
    for (let y = 0, w = e.length; y < w; y++)
      o[y] = t(
        d ? b ? ta(yr(e[y])) : yr(e[y]) : e[y],
        y,
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
        const y = u[d];
        o[d] = t(e[y], y, d, a);
      }
    }
  else
    o = [];
  return o;
}
const Ku = (e) => e ? Qg(e) ? tc(e) : Ku(e.parent) : null, Ka = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ kn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ku(e.parent),
    $root: (e) => Ku(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Lf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ql.bind(e.proxy)),
    $watch: (e) => F_.bind(e)
  })
), nu = (e, t) => e !== wt && !e.__isScriptSetup && pt(e, t), q_ = {
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
        if (nu(r, t))
          return l[t] = 1, r[t];
        if (o !== wt && pt(o, t))
          return l[t] = 2, o[t];
        if (pt(a, t))
          return l[t] = 3, a[t];
        if (n !== wt && pt(n, t))
          return l[t] = 4, n[t];
        Bu && (l[t] = 0);
      }
    }
    const b = Ka[t];
    let y, w;
    if (b)
      return t === "$attrs" && _n(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== wt && pt(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, pt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return nu(o, t) ? (o[t] = n, !0) : r !== wt && pt(r, t) ? (r[t] = n, !0) : pt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, u) {
    let d;
    return !!(n[u] || e !== wt && u[0] !== "$" && pt(e, u) || nu(t, u) || pt(a, u) || pt(r, u) || pt(Ka, u) || pt(o.config.globalProperties, u) || (d = l.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hh(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Bu = !0;
function J_(e) {
  const t = Tg(e), n = e.proxy, r = e.ctx;
  Bu = !1, t.beforeCreate && mh(t.beforeCreate, e, "bc");
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
    mounted: x,
    beforeUpdate: N,
    updated: S,
    activated: v,
    deactivated: T,
    beforeDestroy: $,
    beforeUnmount: K,
    destroyed: I,
    unmounted: R,
    render: F,
    renderTracked: V,
    renderTriggered: G,
    errorCaptured: Q,
    serverPrefetch: _e,
    // public API
    expose: D,
    inheritAttrs: C,
    // assets
    components: se,
    directives: ce,
    filters: fe
  } = t;
  if (b && Z_(b, r, null), l)
    for (const H in l) {
      const P = l[H];
      et(P) && (r[H] = P.bind(n));
    }
  if (o) {
    const H = o.call(n, n);
    _t(H) && (e.data = /* @__PURE__ */ sa(H));
  }
  if (Bu = !0, a)
    for (const H in a) {
      const P = a[H], ee = et(P) ? P.bind(n, n) : et(P.get) ? P.get.bind(n, n) : Or, Y = !et(P) && et(P.set) ? P.set.bind(n) : Or, Ae = ut({
        get: ee,
        set: Y
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (Fe) => Ae.value = Fe
      });
    }
  if (u)
    for (const H in u)
      Fg(u[H], r, n, H);
  if (d) {
    const H = et(d) ? d.call(n) : d;
    Reflect.ownKeys(H).forEach((P) => {
      I_(P, H[P]);
    });
  }
  y && mh(y, e, "c");
  function X(H, P) {
    Ze(P) ? P.forEach((ee) => H(ee.bind(n))) : P && H(P.bind(n));
  }
  if (X(z_, w), X(Zl, x), X(j_, N), X(H_, S), X(R_, v), X(V_, T), X(W_, Q), X(B_, V), X(K_, G), X(as, K), X(Eg, R), X(G_, _e), Ze(D))
    if (D.length) {
      const H = e.exposed || (e.exposed = {});
      D.forEach((P) => {
        Object.defineProperty(H, P, {
          get: () => n[P],
          set: (ee) => n[P] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Or && (e.render = F), C != null && (e.inheritAttrs = C), se && (e.components = se), ce && (e.directives = ce), _e && Ag(e);
}
function Z_(e, t, n = Or) {
  Ze(e) && (e = Wu(e));
  for (const r in e) {
    const o = e[r];
    let a;
    _t(o) ? "default" in o ? a = Js(
      o.from || r,
      o.default,
      !0
    ) : a = Js(o.from || r) : a = Js(o), /* @__PURE__ */ xn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a;
  }
}
function mh(e, t, n) {
  Dr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fg(e, t, n, r) {
  let o = r.includes(".") ? Pg(n, r) : () => n[r];
  if (Ut(e)) {
    const a = t[e];
    et(a) && to(o, a);
  } else if (et(e))
    to(o, e.bind(n));
  else if (_t(e))
    if (Ze(e))
      e.forEach((a) => Fg(a, t, n, r));
    else {
      const a = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(a) && to(o, a, e);
    }
}
function Tg(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => bl(d, b, l, !0)
  ), bl(d, t, l)), _t(t) && a.set(t, d), d;
}
function bl(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && bl(e, a, n, !0), o && o.forEach(
    (l) => bl(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const u = Q_[l] || n && n[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const Q_ = {
  data: gh,
  props: yh,
  emits: yh,
  // objects
  methods: Oa,
  computed: Oa,
  // lifecycle
  beforeCreate: Pn,
  created: Pn,
  beforeMount: Pn,
  mounted: Pn,
  beforeUpdate: Pn,
  updated: Pn,
  beforeDestroy: Pn,
  beforeUnmount: Pn,
  destroyed: Pn,
  unmounted: Pn,
  activated: Pn,
  deactivated: Pn,
  errorCaptured: Pn,
  serverPrefetch: Pn,
  // assets
  components: Oa,
  directives: Oa,
  // watch
  watch: tw,
  // provide / inject
  provide: gh,
  inject: ew
};
function gh(e, t) {
  return t ? e ? function() {
    return kn(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ew(e, t) {
  return Oa(Wu(e), Wu(t));
}
function Wu(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Pn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Oa(e, t) {
  return e ? kn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yh(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : kn(
    /* @__PURE__ */ Object.create(null),
    hh(e),
    hh(t ?? {})
  ) : t;
}
function tw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = kn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Pn(e[r], t[r]);
  return n;
}
function Dg() {
  return {
    app: null,
    config: {
      isNativeTag: qm,
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
let nw = 0;
function rw(e, t) {
  return function(r, o = null) {
    et(r) || (r = kn({}, r)), o != null && !_t(o) && (o = null);
    const a = Dg(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: nw++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Dw,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...w) {
        return l.has(y) || (y && et(y.install) ? (l.add(y), y.install(b, ...w)) : et(y) && (l.add(y), y(b, ...w))), b;
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
      mount(y, w, x) {
        if (!d) {
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, tc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (Dr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, w) {
        return a.provides[y] = w, b;
      },
      runWithContext(y) {
        const w = Yo;
        Yo = b;
        try {
          return y();
        } finally {
          Yo = w;
        }
      }
    };
    return b;
  };
}
let Yo = null;
const iw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Cn(t)}Modifiers`] || e[`${uo(t)}Modifiers`];
function ow(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || wt;
  let o = n;
  const a = t.startsWith("update:"), l = a && iw(r, t.slice(7));
  l && (l.trim && (o = n.map((y) => Ut(y) ? y.trim() : y)), l.number && (o = n.map(Pf)));
  let u, d = r[u = Jc(t)] || // also try camelCase event handler (#2249)
  r[u = Jc(Cn(t))];
  !d && a && (d = r[u = Jc(uo(t))]), d && Dr(
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
    e.emitted[u] = !0, Dr(
      b,
      e,
      6,
      o
    );
  }
}
const aw = /* @__PURE__ */ new WeakMap();
function Lg(e, t, n = !1) {
  const r = n ? aw : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let l = {}, u = !1;
  if (!et(e)) {
    const d = (b) => {
      const y = Lg(b, t, !0);
      y && (u = !0, kn(l, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (_t(e) && r.set(e, null), null) : (Ze(a) ? a.forEach((d) => l[d] = null) : kn(l, a), _t(e) && r.set(e, l), l);
}
function Ql(e, t) {
  return !e || !Gl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pt(e, t[0].toLowerCase() + t.slice(1)) || pt(e, uo(t)) || pt(e, t));
}
function bh(e) {
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
    data: x,
    setupState: N,
    ctx: S,
    inheritAttrs: v
  } = e, T = gl(e);
  let $, K;
  try {
    if (n.shapeFlag & 4) {
      const R = o || r, F = R;
      $ = Ar(
        b.call(
          F,
          R,
          y,
          w,
          N,
          x,
          S
        )
      ), K = u;
    } else {
      const R = t;
      $ = Ar(
        R.length > 1 ? R(
          w,
          { attrs: u, slots: l, emit: d }
        ) : R(
          w,
          null
        )
      ), K = t.props ? u : sw(u);
    }
  } catch (R) {
    Ba.length = 0, Xl(R, e, 1), $ = De(Ci);
  }
  let I = $;
  if (K && v !== !1) {
    const R = Object.keys(K), { shapeFlag: F } = I;
    R.length && F & 7 && (a && R.some(Kl) && (K = lw(
      K,
      a
    )), I = na(I, K, !1, !0));
  }
  return n.dirs && (I = na(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Rf(I, n.transition), $ = I, gl(T), $;
}
const sw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Gl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lw = (e, t) => {
  const n = {};
  for (const r in e)
    (!Kl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function cw(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: l, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? vh(r, l, b) : !!l;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let w = 0; w < y.length; w++) {
        const x = y[w];
        if (Rg(l, r, x) && !Ql(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === l ? !1 : r ? l ? vh(r, l, b) : !0 : !!l;
  return !1;
}
function vh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Rg(t, e, a) && !Ql(n, a))
      return !0;
  }
  return !1;
}
function Rg(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && _t(r) && _t(o) ? !Af(r, o) : r !== o;
}
function uw({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Vg = {}, $g = () => Object.create(Vg), zg = (e) => Object.getPrototypeOf(e) === Vg;
function fw(e, t, n, r = !1) {
  const o = {}, a = $g();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jg(e, t, o, a);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ b_(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function dw(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: l }
  } = e, u = /* @__PURE__ */ dt(o), [d] = e.propsOptions;
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
        let x = y[w];
        if (Ql(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (pt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const S = Cn(x);
            o[S] = Uu(
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
    jg(e, t, o, a) && (b = !0);
    let y;
    for (const w in u)
      (!t || // for camelCase
      !pt(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = uo(w)) === w || !pt(t, y))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[w] = Uu(
        d,
        u,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== u)
      for (const w in a)
        (!t || !pt(t, w)) && (delete a[w], b = !0);
  }
  b && ni(e.attrs, "set", "");
}
function jg(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let d in t) {
      if ($a(d))
        continue;
      const b = t[d];
      let y;
      o && pt(o, y = Cn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Ql(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, l = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), b = u || wt;
    for (let y = 0; y < a.length; y++) {
      const w = a[y];
      n[w] = Uu(
        o,
        d,
        w,
        b[w],
        e,
        !pt(b, w)
      );
    }
  }
  return l;
}
function Uu(e, t, n, r, o, a) {
  const l = e[n];
  if (l != null) {
    const u = pt(l, "default");
    if (u && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && et(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = ss(o);
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
    ] && (r === "" || r === uo(n)) && (r = !0));
  }
  return r;
}
const pw = /* @__PURE__ */ new WeakMap();
function Hg(e, t, n = !1) {
  const r = n ? pw : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, l = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const y = (w) => {
      d = !0;
      const [x, N] = Hg(w, t, !0);
      kn(l, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return _t(e) && r.set(e, Bo), Bo;
  if (Ze(a))
    for (let y = 0; y < a.length; y++) {
      const w = Cn(a[y]);
      _h(w) && (l[w] = wt);
    }
  else if (a)
    for (const y in a) {
      const w = Cn(y);
      if (_h(w)) {
        const x = a[y], N = l[w] = Ze(x) || et(x) ? { type: x } : kn({}, x), S = N.type;
        let v = !1, T = !0;
        if (Ze(S))
          for (let $ = 0; $ < S.length; ++$) {
            const K = S[$], I = et(K) && K.name;
            if (I === "Boolean") {
              v = !0;
              break;
            } else I === "String" && (T = !1);
          }
        else
          v = et(S) && S.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = v, N[
          1
          /* shouldCastTrue */
        ] = T, (v || pt(N, "default")) && u.push(w);
      }
    }
  const b = [l, u];
  return _t(e) && r.set(e, b), b;
}
function _h(e) {
  return e[0] !== "$" && !$a(e);
}
const Vf = (e) => e === "_" || e === "_ctx" || e === "$stable", $f = (e) => Ze(e) ? e.map(Ar) : [Ar(e)], hw = (e, t, n) => {
  if (t._n)
    return t;
  const r = Mg((...o) => $f(t(...o)), n);
  return r._c = !1, r;
}, Gg = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Vf(o)) continue;
    const a = e[o];
    if (et(a))
      t[o] = hw(o, a, r);
    else if (a != null) {
      const l = $f(a);
      t[o] = () => l;
    }
  }
}, Kg = (e, t) => {
  const n = $f(t);
  e.slots.default = () => n;
}, Bg = (e, t, n) => {
  for (const r in t)
    (n || !Vf(r)) && (e[r] = t[r]);
}, mw = (e, t, n) => {
  const r = e.slots = $g();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Bg(r, t, n), n && tg(r, "_", o, !0)) : Gg(t, r);
  } else t && Kg(e, t);
}, gw = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, l = wt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Bg(o, t, n) : (a = !t.$stable, Gg(t, o)), l = t;
  } else t && (Kg(e, t), l = { default: 1 });
  if (a)
    for (const u in o)
      !Vf(u) && l[u] == null && delete o[u];
}, Ln = ww;
function yw(e) {
  return bw(e);
}
function bw(e, t) {
  const n = Ul();
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
    nextSibling: x,
    setScopeId: N = Or,
    insertStaticContent: S
  } = e, v = (L, W, q, ve = null, ge = null, ye = null, ke = void 0, Me = null, xe = !!W.dynamicChildren) => {
    if (L === W)
      return;
    L && !Ma(L, W) && (ve = Un(L), Fe(L, ge, ye, !0), L = null), W.patchFlag === -2 && (xe = !1, W.dynamicChildren = null);
    const { type: de, ref: Ve, shapeFlag: Ce } = W;
    switch (de) {
      case ec:
        T(L, W, q, ve);
        break;
      case Ci:
        $(L, W, q, ve);
        break;
      case iu:
        L == null && K(W, q, ve, ke);
        break;
      case Xe:
        se(
          L,
          W,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe
        );
        break;
      default:
        Ce & 1 ? F(
          L,
          W,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe
        ) : Ce & 6 ? ce(
          L,
          W,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe
        ) : (Ce & 64 || Ce & 128) && de.process(
          L,
          W,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe,
          ln
        );
    }
    Ve != null && ge ? Ha(Ve, L && L.ref, ye, W || L, !W) : Ve == null && L && L.ref != null && Ha(L.ref, null, ye, L, !0);
  }, T = (L, W, q, ve) => {
    if (L == null)
      r(
        W.el = u(W.children),
        q,
        ve
      );
    else {
      const ge = W.el = L.el;
      W.children !== L.children && b(ge, W.children);
    }
  }, $ = (L, W, q, ve) => {
    L == null ? r(
      W.el = d(W.children || ""),
      q,
      ve
    ) : W.el = L.el;
  }, K = (L, W, q, ve) => {
    [L.el, L.anchor] = S(
      L.children,
      W,
      q,
      ve,
      L.el,
      L.anchor
    );
  }, I = ({ el: L, anchor: W }, q, ve) => {
    let ge;
    for (; L && L !== W; )
      ge = x(L), r(L, q, ve), L = ge;
    r(W, q, ve);
  }, R = ({ el: L, anchor: W }) => {
    let q;
    for (; L && L !== W; )
      q = x(L), o(L), L = q;
    o(W);
  }, F = (L, W, q, ve, ge, ye, ke, Me, xe) => {
    if (W.type === "svg" ? ke = "svg" : W.type === "math" && (ke = "mathml"), L == null)
      V(
        W,
        q,
        ve,
        ge,
        ye,
        ke,
        Me,
        xe
      );
    else {
      const de = L.el && L.el._isVueCE ? L.el : null;
      try {
        de && de._beginPatch(), _e(
          L,
          W,
          ge,
          ye,
          ke,
          Me,
          xe
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, V = (L, W, q, ve, ge, ye, ke, Me) => {
    let xe, de;
    const { props: Ve, shapeFlag: Ce, transition: $e, dirs: Be } = L;
    if (xe = L.el = l(
      L.type,
      ye,
      Ve && Ve.is,
      Ve
    ), Ce & 8 ? y(xe, L.children) : Ce & 16 && Q(
      L.children,
      xe,
      null,
      ve,
      ge,
      ru(L, ye),
      ke,
      Me
    ), Be && Vi(L, null, ve, "created"), G(xe, L, L.scopeId, ke, ve), Ve) {
      for (const Le in Ve)
        Le !== "value" && !$a(Le) && a(xe, Le, null, Ve[Le], ye, ve);
      "value" in Ve && a(xe, "value", null, Ve.value, ye), (de = Ve.onVnodeBeforeMount) && xr(de, ve, L);
    }
    Be && Vi(L, null, ve, "beforeMount");
    const h = vw(ge, $e);
    h && $e.beforeEnter(xe), r(xe, W, q), ((de = Ve && Ve.onVnodeMounted) || h || Be) && Ln(() => {
      try {
        de && xr(de, ve, L), h && $e.enter(xe), Be && Vi(L, null, ve, "mounted");
      } finally {
      }
    }, ge);
  }, G = (L, W, q, ve, ge) => {
    if (q && N(L, q), ve)
      for (let ye = 0; ye < ve.length; ye++)
        N(L, ve[ye]);
    if (ge) {
      let ye = ge.subTree;
      if (W === ye || Xg(ye.type) && (ye.ssContent === W || ye.ssFallback === W)) {
        const ke = ge.vnode;
        G(
          L,
          ke,
          ke.scopeId,
          ke.slotScopeIds,
          ge.parent
        );
      }
    }
  }, Q = (L, W, q, ve, ge, ye, ke, Me, xe = 0) => {
    for (let de = xe; de < L.length; de++) {
      const Ve = L[de] = Me ? ti(L[de]) : Ar(L[de]);
      v(
        null,
        Ve,
        W,
        q,
        ve,
        ge,
        ye,
        ke,
        Me
      );
    }
  }, _e = (L, W, q, ve, ge, ye, ke) => {
    const Me = W.el = L.el;
    let { patchFlag: xe, dynamicChildren: de, dirs: Ve } = W;
    xe |= L.patchFlag & 16;
    const Ce = L.props || wt, $e = W.props || wt;
    let Be;
    if (q && $i(q, !1), (Be = $e.onVnodeBeforeUpdate) && xr(Be, q, W, L), Ve && Vi(W, L, q, "beforeUpdate"), q && $i(q, !0), (Ce.innerHTML && $e.innerHTML == null || Ce.textContent && $e.textContent == null) && y(Me, ""), de ? D(
      L.dynamicChildren,
      de,
      Me,
      q,
      ve,
      ru(W, ge),
      ye
    ) : ke || P(
      L,
      W,
      Me,
      null,
      q,
      ve,
      ru(W, ge),
      ye,
      !1
    ), xe > 0) {
      if (xe & 16)
        C(Me, Ce, $e, q, ge);
      else if (xe & 2 && Ce.class !== $e.class && a(Me, "class", null, $e.class, ge), xe & 4 && a(Me, "style", Ce.style, $e.style, ge), xe & 8) {
        const h = W.dynamicProps;
        for (let Le = 0; Le < h.length; Le++) {
          const st = h[Le], We = Ce[st], Dt = $e[st];
          (Dt !== We || st === "value") && a(Me, st, We, Dt, ge, q);
        }
      }
      xe & 1 && L.children !== W.children && y(Me, W.children);
    } else !ke && de == null && C(Me, Ce, $e, q, ge);
    ((Be = $e.onVnodeUpdated) || Ve) && Ln(() => {
      Be && xr(Be, q, W, L), Ve && Vi(W, L, q, "updated");
    }, ve);
  }, D = (L, W, q, ve, ge, ye, ke) => {
    for (let Me = 0; Me < W.length; Me++) {
      const xe = L[Me], de = W[Me], Ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ma(xe, de) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? w(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      v(
        xe,
        de,
        Ve,
        null,
        ve,
        ge,
        ye,
        ke,
        !0
      );
    }
  }, C = (L, W, q, ve, ge) => {
    if (W !== q) {
      if (W !== wt)
        for (const ye in W)
          !$a(ye) && !(ye in q) && a(
            L,
            ye,
            W[ye],
            null,
            ge,
            ve
          );
      for (const ye in q) {
        if ($a(ye)) continue;
        const ke = q[ye], Me = W[ye];
        ke !== Me && ye !== "value" && a(L, ye, Me, ke, ge, ve);
      }
      "value" in q && a(L, "value", W.value, q.value, ge);
    }
  }, se = (L, W, q, ve, ge, ye, ke, Me, xe) => {
    const de = W.el = L ? L.el : u(""), Ve = W.anchor = L ? L.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: $e, slotScopeIds: Be } = W;
    Be && (Me = Me ? Me.concat(Be) : Be), L == null ? (r(de, q, ve), r(Ve, q, ve), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      q,
      Ve,
      ge,
      ye,
      ke,
      Me,
      xe
    )) : Ce > 0 && Ce & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren && L.dynamicChildren.length === $e.length ? (D(
      L.dynamicChildren,
      $e,
      q,
      ge,
      ye,
      ke,
      Me
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || ge && W === ge.subTree) && Wg(
      L,
      W,
      !0
      /* shallow */
    )) : P(
      L,
      W,
      q,
      Ve,
      ge,
      ye,
      ke,
      Me,
      xe
    );
  }, ce = (L, W, q, ve, ge, ye, ke, Me, xe) => {
    W.slotScopeIds = Me, L == null ? W.shapeFlag & 512 ? ge.ctx.activate(
      W,
      q,
      ve,
      ke,
      xe
    ) : fe(
      W,
      q,
      ve,
      ge,
      ye,
      ke,
      xe
    ) : U(L, W, xe);
  }, fe = (L, W, q, ve, ge, ye, ke) => {
    const Me = L.component = Pw(
      L,
      ve,
      ge
    );
    if (Cg(L) && (Me.ctx.renderer = ln), Cw(Me, !1, ke), Me.asyncDep) {
      if (ge && ge.registerDep(Me, X, ke), !L.el) {
        const xe = Me.subTree = De(Ci);
        $(null, xe, W, q), L.placeholder = xe.el;
      }
    } else
      X(
        Me,
        L,
        W,
        q,
        ge,
        ye,
        ke
      );
  }, U = (L, W, q) => {
    const ve = W.component = L.component;
    if (cw(L, W, q))
      if (ve.asyncDep && !ve.asyncResolved) {
        H(ve, W, q);
        return;
      } else
        ve.next = W, ve.update();
    else
      W.el = L.el, ve.vnode = W;
  }, X = (L, W, q, ve, ge, ye, ke) => {
    const Me = () => {
      if (L.isMounted) {
        let { next: Ce, bu: $e, u: Be, parent: h, vnode: Le } = L;
        {
          const nn = Ug(L);
          if (nn) {
            Ce && (Ce.el = Le.el, H(L, Ce, ke)), nn.asyncDep.then(() => {
              Ln(() => {
                L.isUnmounted || de();
              }, ge);
            });
            return;
          }
        }
        let st = Ce, We;
        $i(L, !1), Ce ? (Ce.el = Le.el, H(L, Ce, ke)) : Ce = Le, $e && qs($e), (We = Ce.props && Ce.props.onVnodeBeforeUpdate) && xr(We, h, Ce, Le), $i(L, !0);
        const Dt = bh(L), cn = L.subTree;
        L.subTree = Dt, v(
          cn,
          Dt,
          // parent may have changed if it's in a teleport
          w(cn.el),
          // anchor may have changed if it's in a fragment
          Un(cn),
          L,
          ge,
          ye
        ), Ce.el = Dt.el, st === null && uw(L, Dt.el), Be && Ln(Be, ge), (We = Ce.props && Ce.props.onVnodeUpdated) && Ln(
          () => xr(We, h, Ce, Le),
          ge
        );
      } else {
        let Ce;
        const { el: $e, props: Be } = W, { bm: h, m: Le, parent: st, root: We, type: Dt } = L, cn = Ga(W);
        $i(L, !1), h && qs(h), !cn && (Ce = Be && Be.onVnodeBeforeMount) && xr(Ce, st, W), $i(L, !0);
        {
          We.ce && We.ce._hasShadowRoot() && We.ce._injectChildStyle(
            Dt,
            L.parent ? L.parent.type : void 0
          );
          const nn = L.subTree = bh(L);
          v(
            null,
            nn,
            q,
            ve,
            L,
            ge,
            ye
          ), W.el = nn.el;
        }
        if (Le && Ln(Le, ge), !cn && (Ce = Be && Be.onVnodeMounted)) {
          const nn = W;
          Ln(
            () => xr(Ce, st, nn),
            ge
          );
        }
        (W.shapeFlag & 256 || st && Ga(st.vnode) && st.vnode.shapeFlag & 256) && L.a && Ln(L.a, ge), L.isMounted = !0, W = q = ve = null;
      }
    };
    L.scope.on();
    const xe = L.effect = new og(Me);
    L.scope.off();
    const de = L.update = xe.run.bind(xe), Ve = L.job = xe.runIfDirty.bind(xe);
    Ve.i = L, Ve.id = L.uid, xe.scheduler = () => Lf(Ve), $i(L, !0), de();
  }, H = (L, W, q) => {
    W.component = L;
    const ve = L.vnode.props;
    L.vnode = W, L.next = null, dw(L, W.props, ve, q), gw(L, W.children, q), ai(), uh(L), si();
  }, P = (L, W, q, ve, ge, ye, ke, Me, xe = !1) => {
    const de = L && L.children, Ve = L ? L.shapeFlag : 0, Ce = W.children, { patchFlag: $e, shapeFlag: Be } = W;
    if ($e > 0) {
      if ($e & 128) {
        Y(
          de,
          Ce,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe
        );
        return;
      } else if ($e & 256) {
        ee(
          de,
          Ce,
          q,
          ve,
          ge,
          ye,
          ke,
          Me,
          xe
        );
        return;
      }
    }
    Be & 8 ? (Ve & 16 && it(de, ge, ye), Ce !== de && y(q, Ce)) : Ve & 16 ? Be & 16 ? Y(
      de,
      Ce,
      q,
      ve,
      ge,
      ye,
      ke,
      Me,
      xe
    ) : it(de, ge, ye, !0) : (Ve & 8 && y(q, ""), Be & 16 && Q(
      Ce,
      q,
      ve,
      ge,
      ye,
      ke,
      Me,
      xe
    ));
  }, ee = (L, W, q, ve, ge, ye, ke, Me, xe) => {
    L = L || Bo, W = W || Bo;
    const de = L.length, Ve = W.length, Ce = Math.min(de, Ve);
    let $e;
    for ($e = 0; $e < Ce; $e++) {
      const Be = W[$e] = xe ? ti(W[$e]) : Ar(W[$e]);
      v(
        L[$e],
        Be,
        q,
        null,
        ge,
        ye,
        ke,
        Me,
        xe
      );
    }
    de > Ve ? it(
      L,
      ge,
      ye,
      !0,
      !1,
      Ce
    ) : Q(
      W,
      q,
      ve,
      ge,
      ye,
      ke,
      Me,
      xe,
      Ce
    );
  }, Y = (L, W, q, ve, ge, ye, ke, Me, xe) => {
    let de = 0;
    const Ve = W.length;
    let Ce = L.length - 1, $e = Ve - 1;
    for (; de <= Ce && de <= $e; ) {
      const Be = L[de], h = W[de] = xe ? ti(W[de]) : Ar(W[de]);
      if (Ma(Be, h))
        v(
          Be,
          h,
          q,
          null,
          ge,
          ye,
          ke,
          Me,
          xe
        );
      else
        break;
      de++;
    }
    for (; de <= Ce && de <= $e; ) {
      const Be = L[Ce], h = W[$e] = xe ? ti(W[$e]) : Ar(W[$e]);
      if (Ma(Be, h))
        v(
          Be,
          h,
          q,
          null,
          ge,
          ye,
          ke,
          Me,
          xe
        );
      else
        break;
      Ce--, $e--;
    }
    if (de > Ce) {
      if (de <= $e) {
        const Be = $e + 1, h = Be < Ve ? W[Be].el : ve;
        for (; de <= $e; )
          v(
            null,
            W[de] = xe ? ti(W[de]) : Ar(W[de]),
            q,
            h,
            ge,
            ye,
            ke,
            Me,
            xe
          ), de++;
      }
    } else if (de > $e)
      for (; de <= Ce; )
        Fe(L[de], ge, ye, !0), de++;
    else {
      const Be = de, h = de, Le = /* @__PURE__ */ new Map();
      for (de = h; de <= $e; de++) {
        const Pe = W[de] = xe ? ti(W[de]) : Ar(W[de]);
        Pe.key != null && Le.set(Pe.key, de);
      }
      let st, We = 0;
      const Dt = $e - h + 1;
      let cn = !1, nn = 0;
      const $t = new Array(Dt);
      for (de = 0; de < Dt; de++) $t[de] = 0;
      for (de = Be; de <= Ce; de++) {
        const Pe = L[de];
        if (We >= Dt) {
          Fe(Pe, ge, ye, !0);
          continue;
        }
        let Et;
        if (Pe.key != null)
          Et = Le.get(Pe.key);
        else
          for (st = h; st <= $e; st++)
            if ($t[st - h] === 0 && Ma(Pe, W[st])) {
              Et = st;
              break;
            }
        Et === void 0 ? Fe(Pe, ge, ye, !0) : ($t[Et - h] = de + 1, Et >= nn ? nn = Et : cn = !0, v(
          Pe,
          W[Et],
          q,
          null,
          ge,
          ye,
          ke,
          Me,
          xe
        ), We++);
      }
      const Yn = cn ? _w($t) : Bo;
      for (st = Yn.length - 1, de = Dt - 1; de >= 0; de--) {
        const Pe = h + de, Et = W[Pe], zr = W[Pe + 1], br = Pe + 1 < Ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          zr.el || Yg(zr)
        ) : ve;
        $t[de] === 0 ? v(
          null,
          Et,
          q,
          br,
          ge,
          ye,
          ke,
          Me,
          xe
        ) : cn && (st < 0 || de !== Yn[st] ? Ae(Et, q, br, 2) : st--);
      }
    }
  }, Ae = (L, W, q, ve, ge = null) => {
    const { el: ye, type: ke, transition: Me, children: xe, shapeFlag: de } = L;
    if (de & 6) {
      Ae(L.component.subTree, W, q, ve);
      return;
    }
    if (de & 128) {
      L.suspense.move(W, q, ve);
      return;
    }
    if (de & 64) {
      ke.move(L, W, q, ln);
      return;
    }
    if (ke === Xe) {
      r(ye, W, q);
      for (let Ce = 0; Ce < xe.length; Ce++)
        Ae(xe[Ce], W, q, ve);
      r(L.anchor, W, q);
      return;
    }
    if (ke === iu) {
      I(L, W, q);
      return;
    }
    if (ve !== 2 && de & 1 && Me)
      if (ve === 0)
        Me.beforeEnter(ye), r(ye, W, q), Ln(() => Me.enter(ye), ge);
      else {
        const { leave: Ce, delayLeave: $e, afterLeave: Be } = Me, h = () => {
          L.ctx.isUnmounted ? o(ye) : r(ye, W, q);
        }, Le = () => {
          ye._isLeaving && ye[L_](
            !0
            /* cancelled */
          ), Ce(ye, () => {
            h(), Be && Be();
          });
        };
        $e ? $e(ye, h, Le) : Le();
      }
    else
      r(ye, W, q);
  }, Fe = (L, W, q, ve = !1, ge = !1) => {
    const {
      type: ye,
      props: ke,
      ref: Me,
      children: xe,
      dynamicChildren: de,
      shapeFlag: Ve,
      patchFlag: Ce,
      dirs: $e,
      cacheIndex: Be,
      memo: h
    } = L;
    if (Ce === -2 && (ge = !1), Me != null && (ai(), Ha(Me, null, q, L, !0), si()), Be != null && (W.renderCache[Be] = void 0), Ve & 256) {
      W.ctx.deactivate(L);
      return;
    }
    const Le = Ve & 1 && $e, st = !Ga(L);
    let We;
    if (st && (We = ke && ke.onVnodeBeforeUnmount) && xr(We, W, L), Ve & 6)
      sn(L.component, q, ve);
    else {
      if (Ve & 128) {
        L.suspense.unmount(q, ve);
        return;
      }
      Le && Vi(L, null, W, "beforeUnmount"), Ve & 64 ? L.type.remove(
        L,
        W,
        q,
        ln,
        ve
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ye !== Xe || Ce > 0 && Ce & 64) ? it(
        de,
        W,
        q,
        !1,
        !0
      ) : (ye === Xe && Ce & 384 || !ge && Ve & 16) && it(xe, W, q), ve && St(L);
    }
    const Dt = h != null && Be == null;
    (st && (We = ke && ke.onVnodeUnmounted) || Le || Dt) && Ln(() => {
      We && xr(We, W, L), Le && Vi(L, null, W, "unmounted"), Dt && (L.el = null);
    }, q);
  }, St = (L) => {
    const { type: W, el: q, anchor: ve, transition: ge } = L;
    if (W === Xe) {
      ht(q, ve);
      return;
    }
    if (W === iu) {
      R(L);
      return;
    }
    const ye = () => {
      o(q), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (L.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: ke, delayLeave: Me } = ge, xe = () => ke(q, ye);
      Me ? Me(L.el, ye, xe) : xe();
    } else
      ye();
  }, ht = (L, W) => {
    let q;
    for (; L !== W; )
      q = x(L), o(L), L = q;
    o(W);
  }, sn = (L, W, q) => {
    const { bum: ve, scope: ge, job: ye, subTree: ke, um: Me, m: xe, a: de } = L;
    wh(xe), wh(de), ve && qs(ve), ge.stop(), ye && (ye.flags |= 8, Fe(ke, L, W, q)), Me && Ln(Me, W), Ln(() => {
      L.isUnmounted = !0;
    }, W);
  }, it = (L, W, q, ve = !1, ge = !1, ye = 0) => {
    for (let ke = ye; ke < L.length; ke++)
      Fe(L[ke], W, q, ve, ge);
  }, Un = (L) => {
    if (L.shapeFlag & 6)
      return Un(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const W = x(L.anchor || L.el), q = W && W[T_];
    return q ? x(q) : W;
  };
  let It = !1;
  const Zt = (L, W, q) => {
    let ve;
    L == null ? W._vnode && (Fe(W._vnode, null, null, !0), ve = W._vnode.component) : v(
      W._vnode || null,
      L,
      W,
      null,
      null,
      null,
      q
    ), W._vnode = L, It || (It = !0, uh(ve), xg(), It = !1);
  }, ln = {
    p: v,
    um: Fe,
    m: Ae,
    r: St,
    mt: fe,
    mc: Q,
    pc: P,
    pbc: D,
    n: Un,
    o: e
  };
  return {
    render: Zt,
    hydrate: void 0,
    createApp: rw(Zt)
  };
}
function ru({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $i({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wg(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ze(r) && Ze(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = ti(o[a]), u.el = l.el), !n && u.patchFlag !== -2 && Wg(l, u)), u.type === ec && (u.patchFlag === -1 && (u = o[a] = ti(u)), u.el = l.el), u.type === Ci && !u.el && (u.el = l.el);
    }
}
function _w(e) {
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
function Ug(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ug(t);
}
function wh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yg(t.subTree) : null;
}
const Xg = (e) => e.__isSuspense;
function ww(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : C_(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), ec = /* @__PURE__ */ Symbol.for("v-txt"), Ci = /* @__PURE__ */ Symbol.for("v-cmt"), iu = /* @__PURE__ */ Symbol.for("v-stc"), Ba = [];
let Wn = null;
function re(e = !1) {
  Ba.push(Wn = e ? null : []);
}
function xw() {
  Ba.pop(), Wn = Ba[Ba.length - 1] || null;
}
let qa = 1;
function xh(e, t = !1) {
  qa += e, e < 0 && Wn && t && (Wn.hasOnce = !0);
}
function qg(e) {
  return e.dynamicChildren = qa > 0 ? Wn || Bo : null, xw(), qa > 0 && Wn && Wn.push(e), e;
}
function le(e, t, n, r, o, a) {
  return qg(
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
function $r(e, t, n, r, o) {
  return qg(
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
function Jg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ma(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zg = ({ key: e }) => e ?? null, Zs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ut(e) || /* @__PURE__ */ xn(e) || et(e) ? { i: Bn, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Xe ? 0 : 1, l = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zg(t),
    ref: t && Zs(t),
    scopeId: kg,
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
    ctx: Bn
  };
  return u ? (zf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Ut(n) ? 8 : 16), qa > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Wn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Wn.push(d), d;
}
const De = Sw;
function Sw(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Og) && (e = Ci), Jg(e)) {
    const u = na(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zf(u, n), qa > 0 && !a && Wn && (u.shapeFlag & 6 ? Wn[Wn.indexOf(e)] = u : Wn.push(u)), u.patchFlag = -2, u;
  }
  if (Tw(e) && (e = e.__vccOpts), t) {
    t = kw(t);
    let { class: u, style: d } = t;
    u && !Ut(u) && (t.class = ot(u)), _t(d) && (/* @__PURE__ */ Df(d) && !Ze(d) && (d = kn({}, d)), t.style = xt(d));
  }
  const l = Ut(e) ? 1 : Xg(e) ? 128 : D_(e) ? 64 : _t(e) ? 4 : et(e) ? 2 : 0;
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
function kw(e) {
  return e ? /* @__PURE__ */ Df(e) || zg(e) ? kn({}, e) : e : null;
}
function na(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: u, transition: d } = e, b = t ? Ni(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Zg(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ze(a) ? a.concat(Zs(t)) : [a, Zs(t)] : Zs(t)
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
    patchFlag: t && e.type !== Xe ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && na(e.ssContent),
    ssFallback: e.ssFallback && na(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Rf(
    y,
    d.clone(y)
  ), y;
}
function Fa(e = " ", t = 0) {
  return De(ec, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (re(), $r(Ci, null, e)) : De(Ci, null, e);
}
function Ar(e) {
  return e == null || typeof e == "boolean" ? De(Ci) : Ze(e) ? De(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jg(e) ? ti(e) : De(ec, null, String(e));
}
function ti(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : na(e);
}
function zf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), zf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zg(t) ? t._ctx = Bn : o === 3 && Bn && (Bn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Bn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Fa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ni(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ot([t.class, r.class]));
      else if (o === "style")
        t.style = xt([t.style, r.style]);
      else if (Gl(o)) {
        const a = t[o], l = r[o];
        l && a !== l && !(Ze(a) && a.includes(l)) ? t[o] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Kl(o) && (t[o] = l);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function xr(e, t, n, r = null) {
  Dr(e, t, 7, [
    n,
    r
  ]);
}
const Mw = Dg();
let Nw = 0;
function Pw(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Mw, a = {
    uid: Nw++,
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
    scope: new Zv(
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
    propsOptions: Hg(r, o),
    emitsOptions: Lg(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: wt,
    data: wt,
    props: wt,
    attrs: wt,
    slots: wt,
    refs: wt,
    setupState: wt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ow.bind(null, a), e.ce && e.ce(a), a;
}
let wn = null;
const Aw = () => wn || Bn;
let vl, Yu;
{
  const e = Ul(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  vl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wn = n
  ), Yu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ja = n
  );
}
const ss = (e) => {
  const t = wn;
  return vl(e), e.scope.on(), () => {
    e.scope.off(), vl(t);
  };
}, Sh = () => {
  wn && wn.scope.off(), vl(null);
};
function Qg(e) {
  return e.vnode.shapeFlag & 4;
}
let Ja = !1;
function Cw(e, t = !1, n = !1) {
  t && Yu(t);
  const { props: r, children: o } = e.vnode, a = Qg(e);
  fw(e, r, a, t), mw(e, o, n || t);
  const l = a ? Iw(e, t) : void 0;
  return t && Yu(!1), l;
}
function Iw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, q_);
  const { setup: r } = n;
  if (r) {
    ai();
    const o = e.setupContext = r.length > 1 ? Ow(e) : null, a = ss(e), l = os(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = Zm(l);
    if (si(), a(), (u || e.sp) && !Ga(e) && Ag(e), u) {
      if (l.then(Sh, Sh), t)
        return l.then((d) => {
          kh(e, d);
        }).catch((d) => {
          Xl(d, e, 0);
        });
      e.asyncDep = l;
    } else
      kh(e, l);
  } else
    e0(e);
}
function kh(e, t, n) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _t(t) && (e.setupState = vg(t)), e0(e);
}
function e0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Or);
  {
    const o = ss(e);
    ai();
    try {
      J_(e);
    } finally {
      si(), o();
    }
  }
}
const Ew = {
  get(e, t) {
    return _n(e, "get", ""), e[t];
  }
};
function Ow(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ew),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vg(v_(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ka)
        return Ka[n](e);
    },
    has(t, n) {
      return n in t || n in Ka;
    }
  })) : e.proxy;
}
function Fw(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tw(e) {
  return et(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ k_(e, t, Ja), Dw = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xu;
const Mh = typeof window < "u" && window.trustedTypes;
if (Mh)
  try {
    Xu = /* @__PURE__ */ Mh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const t0 = Xu ? (e) => Xu.createHTML(e) : (e) => e, Lw = "http://www.w3.org/2000/svg", Rw = "http://www.w3.org/1998/Math/MathML", Zr = typeof document < "u" ? document : null, Nh = Zr && /* @__PURE__ */ Zr.createElement("template"), Vw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Zr.createElementNS(Lw, e) : t === "mathml" ? Zr.createElementNS(Rw, e) : n ? Zr.createElement(e, { is: n }) : Zr.createElement(e);
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
      Nh.innerHTML = t0(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Nh.content;
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
}, $w = /* @__PURE__ */ Symbol("_vtc");
function zw(e, t, n) {
  const r = e[$w];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _l = /* @__PURE__ */ Symbol("_vod"), n0 = /* @__PURE__ */ Symbol("_vsh"), Ii = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[_l] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Na(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Na(e, !0), r.enter(e)) : r.leave(e, () => {
      Na(e, !1);
    }) : Na(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Na(e, t);
  }
};
function Na(e, t) {
  e.style.display = t ? e[_l] : "none", e[n0] = !t;
}
const jw = /* @__PURE__ */ Symbol(""), Hw = /(?:^|;)\s*display\s*:/;
function Gw(e, t, n) {
  const r = e.style, o = Ut(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Ut(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          n[u] == null && Qs(r, u, "");
        }
      else
        for (const l in t)
          n[l] == null && Qs(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), Qs(r, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = r[jw];
      l && (n += ";" + l), r.cssText = n, a = Hw.test(n);
    }
  } else t && e.removeAttribute("style");
  _l in e && (e[_l] = a ? r.display : "", e[n0] && (r.display = "none"));
}
const Ph = /\s*!important$/;
function Qs(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Qs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Kw(e, t);
    Ph.test(n) ? e.setProperty(
      uo(r),
      n.replace(Ph, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ah = ["Webkit", "Moz", "ms"], ou = {};
function Kw(e, t) {
  const n = ou[t];
  if (n)
    return n;
  let r = Cn(t);
  if (r !== "filter" && r in e)
    return ou[t] = r;
  r = Wl(r);
  for (let o = 0; o < Ah.length; o++) {
    const a = Ah[o] + r;
    if (a in e)
      return ou[t] = a;
  }
  return t;
}
const Ch = "http://www.w3.org/1999/xlink";
function Ih(e, t, n, r, o, a = qv(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ch, t.slice(6, t.length)) : e.setAttributeNS(Ch, t, n) : n == null || a && !ng(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Tr(n) ? String(n) : n
  );
}
function Eh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? t0(n) : n);
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
    u === "boolean" ? n = ng(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function $o(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bw(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Oh = /* @__PURE__ */ Symbol("_vei");
function Ww(e, t, n, r, o = null) {
  const a = e[Oh] || (e[Oh] = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [u, d] = Uw(t);
    if (r) {
      const b = a[t] = qw(
        r,
        o
      );
      $o(e, u, b, d);
    } else l && (Bw(e, u, l, d), a[t] = void 0);
  }
}
const Fh = /(?:Once|Passive|Capture)$/;
function Uw(e) {
  let t;
  if (Fh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Fh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : uo(e.slice(2)), t];
}
let au = 0;
const Yw = /* @__PURE__ */ Promise.resolve(), Xw = () => au || (Yw.then(() => au = 0), au = Date.now());
function qw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Dr(
      Jw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Xw(), n;
}
function Jw(e, t) {
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
const Th = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zw = (e, t, n, r, o, a) => {
  const l = o === "svg";
  t === "class" ? zw(e, r, l) : t === "style" ? Gw(e, n, r) : Gl(t) ? Kl(t) || Ww(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qw(e, t, r, l)) ? (Eh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ih(e, t, r, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ex(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ut(r))) ? Eh(e, Cn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ih(e, t, r, l));
};
function Qw(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Th(t) && et(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Th(t) && Ut(n) ? !1 : t in e;
}
function ex(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Cn(t);
  return Array.isArray(n) ? n.some((o) => Cn(o) === r) : Object.keys(n).some((o) => Cn(o) === r);
}
const Dh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => qs(t, n) : t;
};
function tx(e) {
  e.target.composing = !0;
}
function Lh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const su = /* @__PURE__ */ Symbol("_assign");
function Rh(e, t, n) {
  return t && (e = e.trim()), n && (e = Pf(e)), e;
}
const Vh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[su] = Dh(o);
    const a = r || o.props && o.props.type === "number";
    $o(e, t ? "change" : "input", (l) => {
      l.target.composing || e[su](Rh(e.value, n, a));
    }), (n || a) && $o(e, "change", () => {
      e.value = Rh(e.value, n, a);
    }), t || ($o(e, "compositionstart", tx), $o(e, "compositionend", Lh), $o(e, "change", Lh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (e[su] = Dh(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Pf(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, nx = ["ctrl", "shift", "alt", "meta"], rx = {
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
  exact: (e, t) => nx.some((n) => e[`${n}Key`] && !t.includes(n))
}, At = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = rx[t[l]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, ix = /* @__PURE__ */ kn({ patchProp: Zw }, Vw);
let $h;
function ox() {
  return $h || ($h = yw(ix));
}
const jf = ((...e) => {
  const t = ox().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = sx(r);
    if (!o) return;
    const a = t._component;
    !et(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, ax(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
});
function ax(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sx(e) {
  return Ut(e) ? document.querySelector(e) : e;
}
function zo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function lx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function zh(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let l = r, u = o, d = -1, b = -1;
  for (let w = 0; w < o; w += 1)
    for (let x = 0; x < r; x += 1)
      a[(w * r + x) * 4 + 3] <= t || (x < l && (l = x), w < u && (u = w), x > d && (d = x), w > b && (b = w));
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
function Hf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Qr(e, t, n) {
  if (!e) return zo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ot(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let lu = null, cu = null, jh = null, Hh = null, jt = null, Pa = null, Nn = null, Si = null;
function cx() {
  if (cu) return cu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), cu = n, n;
}
function uu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  lu = Qr(lu, n, r);
  const o = lu;
  Ot(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Hh !== o.ctx && (jh = o.ctx.createPattern(cx(), "repeat"), Hh = o.ctx), o.ctx.fillStyle = jh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function ux(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function fx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function dx(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function px(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ft = /* @__PURE__ */ new Map(), Gf = 128;
function hx(e, t, n, r, o, a) {
  const l = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${l}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ft.has(d)) {
    const K = Ft.get(d);
    return Ft.delete(d), Ft.set(d, K), K;
  }
  Ft.size >= Gf && Ft.delete(Ft.keys().next().value);
  const b = l * 2 + 2, y = l + 1, w = Hf(b, b), x = w.getContext("2d"), N = u * l, S = l + 1, v = `rgba(${n},${r},${o},${a})`, T = `rgba(${n},${r},${o},0)`, $ = x.createRadialGradient(y, y, N, y, y, S);
  return $.addColorStop(0, v), $.addColorStop(1, T), x.fillStyle = $, x.fillRect(0, 0, b, b), Ft.set(d, w), w;
}
function mx(e, t, n, r, o, a, l) {
  const { r: u, g: d, b, a: y } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, l ?? 0)), T = `chisel:${w}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${S.toFixed(2)}:${v.toFixed(2)}`;
  if (Ft.has(T)) {
    const Q = Ft.get(T);
    return Ft.delete(T), Ft.set(T, Q), Q;
  }
  Ft.size >= Gf && Ft.delete(Ft.keys().next().value);
  const $ = Hf(w, x), K = $.getContext("2d"), I = K.createImageData(w, x), R = I.data, F = Math.max(0, e - t), V = Math.max(0, Math.min(1, n)), G = 1 + N;
  for (let Q = 0; Q < x; Q++)
    for (let _e = 0; _e < w; _e++) {
      const D = _e + 0.5 - e, C = Q + 0.5 - t, se = Math.max(Math.abs(D) - F, 0), fe = Math.hypot(se, C) / t;
      if (fe >= 1) continue;
      const U = fe <= V ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - V)), X = 1 - fe, H = 1 + N * (1 - X) * (1 - X), P = 1 - S * X * X, ee = H * P / G;
      let Y = 1;
      if (v > 0) {
        const St = Math.floor((C + t) / 1.5), ht = Math.floor((D + e) / 8), sn = no(Xo(St * 41 + 500, ht * 19 + 300));
        Y = 1 - v * 0.42 * sn;
      }
      const Ae = Math.round(255 * Math.min(1, y * U * ee * Y));
      if (Ae <= 0) continue;
      const Fe = (Q * w + _e) * 4;
      R[Fe] = u, R[Fe + 1] = d, R[Fe + 2] = b, R[Fe + 3] = Ae;
    }
  return K.putImageData(I, 0, 0), Ft.set(T, $), $;
}
function Xo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function no(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function gx(e, t, n, r, o, a, l) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), w = Math.hypot(y, d) / r;
  if (w >= 1) return 0;
  const x = no(Xo(e * 17 + 3, t * 13 + 7)), N = w + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const S = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), v = yx(e, t, u, d, n, r), T = a * 0.55;
  if (v < T) return 0;
  const K = 0.45 + 0.55 * ((v - T) / Math.max(1e-4, 1 - T));
  return Math.round(255 * Math.min(1, l * S * K));
}
function yx(e, t, n, r, o, a) {
  const l = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = no(Xo(l * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), w = no(Xo(b * 23 + 800, y * 29 + 500)), x = no(Xo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function bx(e, t, n, r, o) {
  const { r: a, g: l, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${l}:${u}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Ft.has(x)) {
    const K = Ft.get(x);
    return Ft.delete(x), Ft.set(x, K), K;
  }
  Ft.size >= Gf && Ft.delete(Ft.keys().next().value);
  const N = Hf(b, y), S = N.getContext("2d"), v = S.createImageData(b, y), T = v.data, $ = Math.max(0, Math.min(1, n));
  for (let K = 0; K < y; K++)
    for (let I = 0; I < b; I++) {
      const R = gx(I, K, e, t, $, w, d);
      if (R <= 0) continue;
      const F = (K * b + I) * 4;
      T[F] = a, T[F + 1] = l, T[F + 2] = u, T[F + 3] = R;
    }
  return S.putImageData(v, 0, 0), Ft.set(x, N), N;
}
function r0(e, t, n) {
  var v, T;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = dx(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), l = vx(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = px(t, o), y = String(((T = t == null ? void 0 : t.targetSpace) == null ? void 0 : T.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const $ = o * u, K = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = mx($, K, a, l, I, R, F);
  } else if (r === "crayon") {
    const $ = o * u, K = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = bx($, K, a, l, I);
  } else
    S = hx(o, a, l.r, l.g, l.b, l.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: w };
}
function vx(e) {
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
function _x(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Gh(e, t, n, r, o) {
  const a = e.angle, l = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + l, n), t + d > l && u(t - l, n);
}
function Kf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, w = b * e.radiusPx * o, x = Xo(t, n);
    for (let N = 0; N < y; N++) {
      const S = no(x + N * 2) * Math.PI * 2, v = Math.sqrt(no(x + N * 2 + 1)) * w, T = t + Math.cos(S) * v, $ = n + Math.sin(S) * v, K = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, R = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, F = K * e.aspect * R;
      Gh(e, T, $, K, F);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), l = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, d = a * e.aspect * u;
  Gh(e, t, n, a, d);
}
function Kh(e, t, n) {
  const r = fx(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, l = r0(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: S });
  }
  if (Kf(l, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], w = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], S = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? w = Za(l, y.x, y.y, S.x, S.y, w) : w = wl(l, d, y, S, N, w), d = b, b = N, y = S;
  }
  u.length === 2 ? Za(l, y.x, y.y, b.x, b.y, w) : wl(l, d, y, b, b, w), e.restore();
}
function el(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, l = _x(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = ux(r[x]);
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
function Ts(e, t, n) {
  var l;
  if (String(((l = t == null ? void 0 : t.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    el(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Kh(e, t, n) : (Pa = Qr(Pa, n.width, n.height), Ot(Pa), Kh(Pa.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(Pa.canvas, 0, 0), e.restore());
}
function zi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Za(e, t, n, r, o, a) {
  const l = r - t, u = o - n, d = Math.hypot(l, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    Kf(e, t + l * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function wl(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, w = u, x = w + d, N = x + b, S = x - w, v = 16;
  let T = a, $ = n.x, K = n.y;
  for (let I = 1; I <= v; I++) {
    const R = w + S * I / v, F = ((w - R) * t.x + (R - y) * n.x) / (w - y), V = ((w - R) * t.y + (R - y) * n.y) / (w - y), G = ((x - R) * n.x + (R - w) * r.x) / (x - w), Q = ((x - R) * n.y + (R - w) * r.y) / (x - w), _e = ((N - R) * r.x + (R - x) * o.x) / (N - x), D = ((N - R) * r.y + (R - x) * o.y) / (N - x), C = ((x - R) * F + (R - y) * G) / (x - y), se = ((x - R) * V + (R - y) * Q) / (x - y), ce = ((N - R) * G + (R - w) * _e) / (N - w), fe = ((N - R) * Q + (R - w) * D) / (N - w), U = ((x - R) * C + (R - w) * ce) / (x - w), X = ((x - R) * se + (R - w) * fe) / (x - w);
    T = Za(e, $, K, U, X, T), $ = U, K = X;
  }
  return T;
}
function wx(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, l = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * l;
  if (d && Math.abs(b - d.prev.x) > l * 0.5 && (b += b < d.prev.x ? l : -l), !d) {
    const N = r0(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), T = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Kf(N, b, u, 1), e.activeStroke = {
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
      isEraser: T,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + b) * 0.5, w = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = Za(x, d.lastMidX, d.lastMidY, y, w, d.distSinceStamp) : d.distSinceStamp = wl(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: w },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function qu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = zo(t, n), l = {
    descriptor: r,
    committedMask: zo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: zo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = zo(t, n);
  let b = null, y = "", w = null;
  function x(D) {
    return {
      actionGroupId: D,
      descriptor: r,
      committedPaint: zo(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(D) {
    let C = o.get(D);
    return C || (C = x(D), o.set(D, C)), C;
  }
  function S(D) {
    return y === "mask" ? l : b ? N(b) : u;
  }
  function v(D) {
    var X;
    const C = !w || w.length !== D.length || D.some((H, P) => H !== w[P]), se = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let ce = l.displayDirty || u.displayDirty || C;
    for (const H of D) {
      const P = o.get(H);
      if (P != null && P.displayDirty) {
        ce = !0;
        break;
      }
    }
    if (se && (ce = !0), !ce) return;
    l.displayDirty = !1, u.displayDirty = !1;
    for (const H of D) {
      const P = o.get(H);
      P && (P.displayDirty = !1);
    }
    w = [...D];
    const fe = d.ctx;
    Ot(d);
    const U = !!(se != null && se.isEraser);
    for (const H of D) {
      const P = o.get(H);
      if (!P) continue;
      const Y = b === P.actionGroupId && y === "paint" ? P.activeStroke : null;
      if (U)
        jt = Qr(jt, t, n), Ot(jt), jt.ctx.drawImage(P.committedPaint.canvas, 0, 0), zi(jt.ctx, a.canvas), fe.drawImage(jt.canvas, 0, 0);
      else if (fe.drawImage(P.committedPaint.canvas, 0, 0), Y) {
        const Ae = P.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        fe.save(), fe.globalAlpha = Ae, fe.drawImage(a.canvas, 0, 0), fe.restore();
      }
    }
  }
  function T(D) {
    var se, ce, fe, U, X;
    for (const H of o.values())
      Ot(H.committedPaint), Ot(H.currentStroke), H.activeStroke = null, H.displayDirty = !0;
    Ot(l.committedMask), Ot(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, u.displayDirty = !0, w = null;
    const C = [
      ...Array.isArray((ce = (se = D == null ? void 0 : D.painting) == null ? void 0 : se.paint) == null ? void 0 : ce.strokes) ? D.painting.paint.strokes : [],
      ...Array.isArray((U = (fe = D == null ? void 0 : D.painting) == null ? void 0 : fe.mask) == null ? void 0 : U.strokes) ? D.painting.mask.strokes : []
    ];
    for (const H of C) {
      if (((X = H == null ? void 0 : H.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const P = String((H == null ? void 0 : H.layerKind) || "paint"), Y = String((H == null ? void 0 : H.toolKind) || "pen") === "eraser";
      if (P === "mask") {
        const Ae = l.descriptor;
        Y ? (jt = Qr(jt, Ae.width, Ae.height), Ot(jt), Ts(jt.ctx, H, Ae), zi(l.committedMask.ctx, jt.canvas)) : Ts(l.committedMask.ctx, H, Ae);
        continue;
      }
      if (Y) {
        jt = Qr(jt, r.width, r.height), Ot(jt), Ts(jt.ctx, H, r);
        for (const Ae of o.values())
          zi(Ae.committedPaint.ctx, jt.canvas), Ae.displayDirty = !0;
      } else {
        const Ae = String((H == null ? void 0 : H.actionGroupId) || "__default__"), Fe = N(Ae), St = Fe.descriptor;
        Ts(Fe.committedPaint.ctx, H, St), Fe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function $(D, C) {
    y = String((D == null ? void 0 : D.layerKind) || "");
    const se = String((D == null ? void 0 : D.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Ot(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const ce = se ? u : N(String((D == null ? void 0 : D.actionGroupId) || "__default__"));
      b = se ? "" : String((D == null ? void 0 : D.actionGroupId) || "__default__"), Ot(ce.currentStroke), ce.activeStroke = null, ce.displayDirty = !0;
    }
  }
  function K(D, C) {
    var P;
    const se = String((D == null ? void 0 : D.layerKind) || "paint"), ce = String((D == null ? void 0 : D.toolKind) || "") === "eraser", fe = se === "mask" ? l : ce ? u : N(String((D == null ? void 0 : D.actionGroupId) || b || "__default__")), U = fe.activeStroke, X = fe.descriptor;
    if (U && U.pointCount > 1) {
      const ee = fe.currentStroke.ctx;
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
      U.pointCount === 2 ? Za(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : wl(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    fe.lassoPreviewActive && (Ot(fe.currentStroke), el(fe.currentStroke.ctx, D, X), fe.lassoPreviewActive = !1);
    const H = se === "mask" ? l.committedMask : fe.committedPaint;
    if (ce && se === "paint")
      for (const ee of o.values())
        zi(ee.committedPaint.ctx, fe.currentStroke.canvas), ee.displayDirty = !0;
    else if (ce)
      zi(H.ctx, fe.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      H.ctx.save(), H.ctx.globalAlpha = ee, H.ctx.drawImage(fe.currentStroke.canvas, 0, 0), H.ctx.restore();
    }
    lx() && (String((D == null ? void 0 : D.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((P = D == null ? void 0 : D.targetSpace) == null ? void 0 : P.viewMode) || ""), Number((D == null ? void 0 : D.aspect) ?? 1), zh(fe.currentStroke.canvas), zh(H.canvas), void 0), Ot(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0, b = null, y = "", v([...o.keys()]);
  }
  function I(D) {
    if (y === "mask")
      Ot(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (y === "paint" && !b)
      Ot(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const C = o.get(b);
      C && (Ot(C.currentStroke), C.activeStroke = null, C.lassoPreviewActive = !1, C.displayDirty = !0);
    }
    b = null, y = "", v([...o.keys()]);
  }
  function R(D, C) {
    var ce;
    if (y = String((D == null ? void 0 : D.layerKind) || ""), String(((ce = D == null ? void 0 : D.geometry) == null ? void 0 : ce.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Ot(l.currentStroke), el(l.currentStroke.ctx, D, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const fe = String((D == null ? void 0 : D.toolKind) || "") === "eraser", U = fe ? u : N(String((D == null ? void 0 : D.actionGroupId) || b || "__default__"));
        b = fe ? "" : String((D == null ? void 0 : D.actionGroupId) || b || "__default__"), Ot(U.currentStroke), el(U.currentStroke.ctx, D, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      v([...o.keys()]);
    }
  }
  function F(D) {
    return v(D ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: l.committedMask,
      descriptor: r
    };
  }
  function V(D) {
    return o.get(String(D)) ?? null;
  }
  function G() {
    return [...o.keys()];
  }
  function Q(D) {
    var X;
    const C = o.get(String(D));
    if (!C) return null;
    const se = y === "paint" && b === C.actionGroupId, ce = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (ce != null && ce.isEraser)
      return Nn = Qr(Nn, t, n), Ot(Nn), Nn.ctx.drawImage(C.committedPaint.canvas, 0, 0), zi(Nn.ctx, a.canvas), Nn.canvas;
    const fe = se ? C.activeStroke : null;
    if (!fe) return C.committedPaint.canvas;
    Nn = Qr(Nn, t, n), Ot(Nn), Nn.ctx.drawImage(C.committedPaint.canvas, 0, 0);
    const U = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
    return Nn.ctx.save(), Nn.ctx.globalAlpha = U, Nn.ctx.drawImage(a.canvas, 0, 0), Nn.ctx.restore(), Nn.canvas;
  }
  function _e() {
    return Si = Qr(Si, t, n), Ot(Si), uu(Si.ctx, l.committedMask.canvas), y === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (jt = Qr(jt, t, n), Ot(jt), jt.ctx.drawImage(l.committedMask.canvas, 0, 0), zi(jt.ctx, a.canvas), Ot(Si), uu(Si.ctx, jt.canvas)) : uu(Si.ctx, a.canvas)), Si.canvas;
  }
  return {
    rebuildCommitted: T,
    beginStroke: $,
    appendStrokePoint: wx,
    updateActiveStroke: R,
    commitActiveStroke: K,
    cancelActiveStroke: I,
    getErpTarget: F,
    ensureTarget: S,
    getGroupTarget: V,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: G
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function xx(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Ju = 3;
function Aa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function xl(e, t = 0) {
  const n = Aa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Aa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Aa(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Aa(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Aa(t) || 0);
}
function i0(e) {
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
const Bh = Math.PI / 180, Wh = 0.12, Sx = Ju, kx = 35, Mx = 140, Ta = 100, Nx = 20, Uh = 0.8;
function Px(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = J(Number(e || Ta), 1, 179) * Bh;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Bh;
}
function Bf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ta })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(K, I = null) {
    u && u(K, I);
  }
  function y(K, I, R = null, F = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(K || 0), d.drag.lastY = Number(I || 0), d.drag.lastTs = Number(F || performance.now()), d.drag.pointerId = R, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: R }), !0;
  }
  function w(K, I, R = "pano", F = performance.now()) {
    if (!d.drag.active) return !1;
    const V = Number(F || performance.now()), G = Number(K), Q = Number(I), _e = G - d.drag.lastX, D = Q - d.drag.lastY;
    d.drag.lastX = G, d.drag.lastY = Q, d.drag.lastTs = V;
    const C = r() || { x: 1, y: 1 }, se = Number(C.x || 1), ce = Number(C.y || 1), fe = { ...t() };
    let U = 0, X = 0;
    if (R === "unwrap") {
      const P = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(P.w || 1)), Y = Math.max(1, Number(P.h || 1)), Ae = _e / ee, Fe = D / Y;
      U = -Ae * 360 * se, X = Fe * 180 * ce;
    } else {
      const P = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(P.w || 0)), Y = Math.max(1, Number(P.h || 0));
      if (ee > 1 && Y > 1) {
        const Ae = J(Number(fe.fov || Ta), 1, 179), Fe = J(Px(Ae, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ae * se, X = D / Y * Fe * ce;
      } else
        U = -_e * Wh * se, X = D * Wh * ce;
    }
    fe.yaw = Ht(Number(fe.yaw || 0) + U), fe.pitch = J(Number(fe.pitch || 0) + X, -89.9, 89.9), n(fe), d.velHistory.push({ ts: V, yaw: fe.yaw, pitch: fe.pitch });
    let H = 0;
    for (; H < d.velHistory.length - 1 && d.velHistory[H].ts < V - 100; ) H++;
    return H > 0 && d.velHistory.splice(0, H), d.inertia.active = !1, d.inertia.lastTs = V, l(), b("drag", { phase: "move", dx: _e, dy: D, dYaw: U, dPitch: X }), !0;
  }
  function x(K = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(K || performance.now());
    d.drag.lastTs = I;
    const R = d.velHistory.filter((V) => I - V.ts <= 80);
    if (R.length >= 2) {
      const V = R[0], G = R.at(-1), Q = Math.max(1e-3, (G.ts - V.ts) / 1e3);
      let _e = G.yaw - V.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Q, d.inertia.vy = (G.pitch - V.pitch) / Q;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const F = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = F > Nx, d.inertia.lastTs = I, b("drag", { phase: "end", speed: F, inertiaActive: d.inertia.active }), !0;
  }
  function N(K = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(K || performance.now()), R = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const F = { ...t() };
    F.yaw = Ht(Number(F.yaw || 0) + d.inertia.vx * R), F.pitch = J(Number(F.pitch || 0) + d.inertia.vy * R, -89.9, 89.9);
    const V = Math.exp(-5.5 * R);
    return d.inertia.vx *= V, d.inertia.vy *= V, Math.abs(d.inertia.vx) < Uh && Math.abs(d.inertia.vy) < Uh && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(F), l(), d.inertia.active;
  }
  function S() {
    const K = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], K;
  }
  function v(K) {
    const I = Math.sign(Number(K || 0));
    if (!I) return !1;
    const R = { ...t() }, F = Number(R.fov || Ta);
    return R.fov = J(F + I * Sx, kx, Mx), n(R), l(), b("wheel", { deltaSign: I, fovBefore: F, fovAfter: R.fov }), !0;
  }
  function T(K, I = 0) {
    return v(xl(K, I));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: Ta }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, l();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: w,
    endDrag: x,
    stepInertia: N,
    stopMotion: S,
    applyWheel: v,
    applyWheelEvent: T,
    resetView: $
  };
}
const Jt = Math.PI / 180, Sn = 180 / Math.PI;
function rr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Sl(e, t) {
  return rr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function kl(e, t) {
  return rr(e.x * t, e.y * t, e.z * t);
}
function fu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Wf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return rr(e.x / t, e.y / t, e.z / t);
}
function Vn(e, t) {
  const n = e * Jt, r = t * Jt, o = Math.cos(r);
  return rr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function la(e, t, n = 0) {
  const r = Number(e || 0) * Jt, o = Number(t || 0) * Jt, a = n * Jt, l = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), w = Math.sin(a);
  return {
    right: rr(
      l * y - u * b * w,
      d * w,
      -u * y - l * b * w
    ),
    up: rr(
      -l * w - u * b * y,
      d * y,
      u * w - l * b * y
    ),
    fwd: rr(u * d, b, l * d)
  };
}
function Ml(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function bt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Ax() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Cx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = bt(r.z_index ?? r.zIndex, t.length);
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
function Ix(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Ex(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = bt(e.t, 0), r = bt(e.widthScale, null), o = bt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = bt(e.u, null), l = bt(e.v, null);
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
    const a = bt(e.u, null), l = bt(e.v, null);
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
function Ds(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Ex(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Ox(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Ds(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Ds(e.points, t, 1);
  if (!a) return null;
  const l = Ds(e.rawPoints, t, 1), u = Ds(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: l || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Fx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Ix(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Ox(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = bt(e.size, null), l = bt(e.opacity, null);
  if (a == null || l == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = bt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, bt(x.r, 0))),
      g: Math.max(0, Math.min(1, bt(x.g, 0))),
      b: Math.max(0, Math.min(1, bt(x.b, 0))),
      a: Math.max(0, Math.min(1, bt(x.a, 1)))
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
    hardness: bt(e.hardness, null),
    flow: bt(e.flow, null),
    spacing: bt(e.spacing, null),
    createdAt: Math.trunc(bt(e.createdAt, 0)),
    color: w,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Yh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Fx(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Tx(e) {
  if (!e || typeof e != "object") return null;
  const t = bt(e.u0, null), n = bt(e.v0, null), r = bt(e.u1, null), o = bt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), l = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function Dx(e) {
  const t = e || {};
  return {
    du: bt(t.du, 0) ?? 0,
    dv: bt(t.dv, 0) ?? 0,
    rot_deg: bt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, bt(t.scale, 1) ?? 1)
  };
}
function Lx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Tx(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, bt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Dx(e.transform)
  } : null;
}
function Rx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Lx(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function qo(e) {
  const t = Ax();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Cx(e.groups),
    paint: Yh(e.paint, "paint"),
    mask: Yh(e.mask, "mask"),
    raster_objects: Rx(e.raster_objects)
  };
}
const Lr = 1, Rr = 179, Zu = 85;
function nc(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function o0(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function a0(e, t, { shiftKey: n = !1 } = {}) {
  let r = tt(e, 0) + tt(t, 0) * Sn;
  return n && (r = Math.round(r / 15) * 15), nc(r);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ci(e = {}) {
  const t = J(tt(e.hFOV_deg || 90, 90), Lr, Rr), n = J(tt(e.vFOV_deg || 60, 60), Lr, Rr), r = Math.tan(t * Jt * 0.5), o = Math.tan(n * Jt * 0.5);
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
function ro(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ci(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function Uf(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, tt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Yf(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), r = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = J(2 * Math.atan(r / (2 * n)) * Sn, Lr, Rr), l = J(2 * Math.atan(o / (2 * n)) * Sn, Lr, Rr);
  return { hFOV_deg: a, vFOV_deg: l };
}
function Vx(e, t, n) {
  const r = tt(e == null ? void 0 : e.x, 0), o = tt(e == null ? void 0 : e.y, 0), a = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), l = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = ci(t), d = Math.max(1e-12, tt(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (l - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function Xf(e, t, n = Zu) {
  const r = Math.max(1e-12, tt(t, 1)), o = J(tt(n, Zu), 1, 89.999), a = r * Math.tan(o * Jt), l = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(l * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function s0(e, t, n) {
  const r = Math.max(1e-12, tt(t, 1));
  return {
    x: (tt(n == null ? void 0 : n.x, 0) - tt(e == null ? void 0 : e.x, 0)) / r,
    y: -(tt(n == null ? void 0 : n.y, 0) - tt(e == null ? void 0 : e.y, 0)) / r
  };
}
function tl(e, t) {
  const n = J(tt(e, 60), Lr, Rr), r = Math.max(1e-6, tt(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * Jt * 0.5) * r) * Sn,
    Lr,
    Rr
  );
}
function Xh(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function $x(e, t) {
  const n = Xh(e, 1), r = Xh(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), l = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, l) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(l / d))}`;
}
function io(e) {
  const t = J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Jt, n = J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Jt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Xi(e) {
  const t = io(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || $x(t, 1);
}
function l0(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Xi(t), t;
}
function c0({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const l = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(l) ? J(l, Lr, Rr) : J(Math.min(42, tt(o, 100) * 0.42), 8, 96);
  return l0({
    id: String(e),
    label: "Frame 1",
    yaw_deg: tt(t, 0),
    pitch_deg: J(tt(n, 0), -89.9, 89.9),
    roll_deg: nc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function ei(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Xi(e);
}
function u0(e, t) {
  const n = ci(e), r = tt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * Sn, a = 2 * Math.atan(n.tanHalfY * r) * Sn;
  return o < Lr || o > Rr || a < Lr || a > Rr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function f0(e, t, n = Ju) {
  const r = Math.sign(tt(t, 0)), o = Math.abs(tt(n, Ju));
  if (!r || !(o > 0)) return null;
  const a = ci(e), l = a.hFovDeg + r * o;
  if (l < Lr || l > Rr) return null;
  const u = Math.tan(l * Jt * 0.5);
  return u0(e, u / a.tanHalfX);
}
function d0(e, t) {
  const n = ci(e), r = la(n.yawDeg, n.pitchDeg, n.rollDeg), o = tt(t == null ? void 0 : t.x, 0), a = tt(t == null ? void 0 : t.y, 0);
  return Wf(Sl(Sl(r.fwd, kl(r.right, o)), kl(r.up, a)));
}
function zx(e) {
  return rr(e.x, e.y, -e.z);
}
function nl(e) {
  return rr(e.x, e.y, -e.z);
}
function ir(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = la(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function jx(e) {
  const t = nl(rr(e[0][0], e[1][0], e[2][0])), n = nl(rr(e[0][1], e[1][1], e[2][1])), r = nl(rr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), l = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - l * n.x, l * t.x - u * t.z);
  return { yawDeg: o * Sn, pitchDeg: a * Sn, rollDeg: d * Sn };
}
function qf(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function fo(e) {
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
  const w = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / w, y: (l + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function Ls(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ji = 1e-6, Qu = 1e-6, Hx = 1e-9;
function Qa(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Gx(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let l = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (l + u);
    Qa(0, n, o, 1, b) < t ? l = b : u = b;
  }
  return Qa(0, r, a, 1, 0.5 * (l + u));
}
function ra(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ia(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], l = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (l.reduce((x, N, S) => x + N * u[S], 0) < 0) return n.map(() => 0);
  const d = l.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, S) => N + S * S, 0)), y = 3 * Math.min(b(l), b(u)), w = b(d);
  return w <= y ? d : d.map((x) => x * y / w);
}
function p0(e, t, n, r) {
  const o = n[r], a = n[r + 1], l = t[r + 1] - t[r], u = o.map((y, w) => a[w] - y);
  let d = u;
  ra(e, r) && (d = ia(t, r, n[r - 1].map((y, w) => y - o[w]), u).map((y) => y * l));
  let b = u;
  return ra(e, r + 1) && (b = ia(t, r + 1, u.map((y) => -y), n[r + 2].map((y, w) => y - a[w])).map((y) => y * l)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function h0(e, t, n, r, o) {
  const [[a], [l]] = p0(e, t, n.map((u) => [u]), r);
  return Qa(n[r], n[r] + a, n[r + 1] + l, n[r + 1], o);
}
function Kx(e, t, n, r) {
  var b, y;
  const o = e.map((w) => w.value);
  let [a, l] = p0(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, l = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? l;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => Qa(u[w], u[w] + a[w], d[w] + l[w], d[w], r));
}
function Nl([e, t, n, r], [o, a, l, u]) {
  return [
    r * o + e * u + t * l - n * a,
    r * a - e * l + t * u + n * o,
    r * l + e * a - t * o + n * u,
    r * u - e * o - t * a - n * l
  ];
}
function Bx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function du(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Wx([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function ef(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Ko(e, t) {
  return Wx(Nl([-e[0], -e[1], -e[2], e[3]], t));
}
function pu(e, t, n) {
  return Nl(e, ef(Ko(e, t).map((r) => n * r)));
}
function hu(e, t) {
  const n = Bx(e, t);
  if (Math.abs(n) > Qu) return n < 0;
  const [r, o, a] = Ko(e, t);
  for (const l of [-o, r, a])
    if (Math.abs(l) > Qu) return l < 0;
  return !1;
}
function Rs(e) {
  const { x: t, y: n, z: r, w: o } = fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function tf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Ux(e, t, n, r) {
  const o = Rs(e[n].value);
  let a = Rs(e[n + 1].value);
  hu(o, a) && (a = du(a));
  const l = t[n + 1] - t[n], u = Ko(o, a);
  let d = u;
  if (ra(e, n)) {
    let F = Rs(e[n - 1].value);
    hu(F, o) && (F = du(F)), d = ia(t, n, Ko(o, F), u).map((V) => V * l);
  }
  let b = u;
  if (ra(e, n + 1)) {
    let F = Rs(e[n + 2].value);
    hu(a, F) && (F = du(F)), b = ia(t, n + 1, Ko(a, o), Ko(a, F)).map((V) => V * l);
  }
  const y = Nl(o, ef(d.map((F, V) => 0.5 * (F - u[V])))), w = Nl(a, ef(u.map((F, V) => 0.5 * (F - b[V])))), [x, N, S, v] = pu(pu(o, a, r), pu(y, w, r), 2 * r * (1 - r)), { yawDeg: T, pitchDeg: $, rollDeg: K } = jx(qf({ x, y: N, z: S, w: v })), I = e[n].value, R = e[n + 1].value;
  return {
    yaw_deg: tf(T, I.yaw_deg, R.yaw_deg, r),
    pitch_deg: $,
    roll_deg: tf(K, I.roll_deg, R.roll_deg, r)
  };
}
function es(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Pl(e) {
  return Math.sqrt(es(e, e));
}
function Al(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function m0(e, t) {
  const n = es(e, t), r = t.map((l, u) => l - n * e[u]), o = Pl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((l) => l * a);
}
function jo(e, t) {
  const n = Pl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Vs(e, t, n) {
  return jo(e, m0(e, t).map((r) => n * r));
}
function mu(e, t) {
  const n = Al(e[t].value), r = Al(e[t + 1].value), o = es(n, r), a = o < 0 && Pl(r.map((d, b) => d - o * n[b])) <= Qu;
  let l;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    l = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    l = m0(n, r);
  const u = Pl(l);
  return [l, l.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function Yx(e, t, n, r) {
  const o = Al(e[n].value), a = Al(e[n + 1].value), [l, u, d] = mu(e, n);
  let b = l, y = u;
  const w = t[n + 1] - t[n];
  ra(e, n) && (b = ia(t, n, mu(e, n - 1)[1].map((I) => -I), b).map((I) => I * w)), ra(e, n + 1) && (y = ia(t, n + 1, y.map((I) => -I), mu(e, n + 1)[0]).map((I) => I * w));
  let x, N, S;
  if (d) {
    const I = Math.PI, R = Qa(0, es(b, l) / I / 3, I - es(y, u) / I / 3, I, r);
    [x, N, S] = jo(o, l.map((F) => R * F / I));
  } else {
    const I = Vs(jo(o, b.map((V) => V / 3)), jo(a, y.map((V) => -V / 3)), r), R = Vs(jo(o, b.map((V) => r * V / 3)), I, r), F = Vs(I, jo(a, y.map((V) => -(1 - r) * V / 3)), r);
    [x, N, S] = Vs(R, F, r);
  }
  const v = Math.hypot(x, S), T = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= Hx ? T + ($ - T) * r : tf(Math.atan2(x, S) * 180 / Math.PI, T, $, r), pitch_deg: Math.atan2(N, v) * 180 / Math.PI };
}
function Xx(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = h0(e, t, e.map((l) => l.value[a]), n, r);
  return o;
}
function qx(e, t, n, r) {
  return h0(e, t, e.map((o) => o.value), n, r);
}
const Jx = { position: Kx, rotation: Ux, direction: Yx, size: Xx };
function qt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Ls(e[t].value);
  if (n <= r[0].frame + Ji) return Ls(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - Ji) return Ls(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + Ji; ) a += 1;
  const l = r[a];
  if (Math.abs(n - l.frame) <= Ji || l.easing === "hold") return Ls(l.value);
  const u = r.map((b) => b.frame), d = Gx(l.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (Jx[t] ?? qx)(r, u, a, d);
}
function nf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Zx(e) {
  return Math.min(1, Math.max(0, e));
}
function g0(e) {
  return Math.max(1e-6, e);
}
function y0(e, t) {
  return t - (e.start - e.in);
}
function Pi(e, t) {
  return t >= e.start - Ji && (e.duration === null || t < e.start + e.duration - Ji);
}
function Jf(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = y0(o.clip, n);
  return {
    frame: n,
    camera: {
      position: qt(r, "position", n),
      ...qt(r, "rotation", n),
      hFOV_deg: nf(qt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Pi(o.clip, n),
      clip_frame: a,
      position: qt(o, "position", a),
      ...qt(o, "rotation", a),
      scale: g0(qt(o, "scale", a))
    },
    stickers: e.stickers.map((l) => rc(l, n))
  };
}
function Qx(e, t) {
  if (e.placement === "world")
    return {
      position: qt(e, "position", t),
      ...qt(e, "rotation", t),
      scale: g0(qt(e, "scale", t))
    };
  const n = qt(e, "size", t);
  return {
    ...qt(e, "direction", t),
    roll_deg: qt(e, "roll", t),
    hFOV_deg: nf(n.hFOV_deg),
    vFOV_deg: nf(n.vFOV_deg)
  };
}
function rc(e, t) {
  const n = y0(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Pi(e.clip, t),
    clip_frame: n,
    ...Qx(e, n),
    opacity: Zx(qt(e, "opacity", n))
  };
}
const eS = 2, tS = ["sky", "world"], nS = ["input", "output", "temp"], b0 = [0.42, 0, 0.58, 1];
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Cl(e, t) {
  const n = Bt(e, t);
  return n !== null && n > 0 ? n : t;
}
function tr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function oo(e) {
  const t = Bt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function qh(e, t) {
  return typeof e == "boolean" ? e : t;
}
function v0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Bt(n, null));
  return t.includes(null) ? null : t;
}
function _0(e) {
  return v0(e) || [0, 0, 0];
}
function w0(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: tr(Bt(t.pitch_deg, 0), -90, 90),
    roll_deg: Bt(t.roll_deg, 0)
  };
}
function rS(e) {
  return tr(Bt(e, 90), 0.1, 179);
}
function iS(e) {
  return Cl(e, 1);
}
function oS(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: tr(Bt(t.pitch_deg, 0), -90, 90)
  };
}
function aS(e) {
  return Bt(e, 0);
}
function sS(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: tr(Bt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: tr(Bt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function x0(e) {
  return tr(Bt(e, 1), 0, 1);
}
const Zf = [["position", _0], ["rotation", w0], ["fov", rS]], ic = [["position", _0], ["rotation", w0], ["scale", iS]], Qf = [["direction", oS], ["roll", aS], ["size", sS], ["opacity", x0]], ed = [...ic, ["opacity", x0]];
function lS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Bt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...b0];
}
function cS(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = v0(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function uS(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!tn(o)) continue;
    const a = oo(o.frame);
    if (a === null) continue;
    const l = { frame: a, value: t(o.value), easing: lS(o.easing) }, u = n ? cS(o.handles) : null;
    u && (l.handles = u), r.set(a, l);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function rf(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = tn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: uS(a.keyframes, o, r === "position") };
  }
  return n;
}
function S0(e) {
  const t = tn(e) ? e : {}, n = oo(t.start), r = oo(t.in), o = oo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function fS(e) {
  const t = tn(e) ? e : {}, n = tr(Bt(t.x0, 0), 0, 1), r = tr(Bt(t.y0, 0), 0, 1), o = tr(Bt(t.x1, 1), 0, 1), a = tr(Bt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function dS(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: nS.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function pS(e) {
  const t = dS(e.source);
  if (!t) return null;
  const n = tS.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: S0(e.clip),
    visible: qh(e.visible, !0),
    locked: qh(e.locked, !1),
    crop: fS(e.crop),
    ...rf(e, r ? ed : Qf)
  };
  return r || (o.z_index = oo(e.z_index) ?? 0), o;
}
function hS(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const l = tn(a) ? pS(a) : null;
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
function Il(e) {
  const t = tn(e.timeline) ? e.timeline : {}, n = tn(e.camera) ? e.camera : {}, r = tn(e.scene) ? e.scene : {}, o = oo(t.length);
  return {
    version: eS,
    timeline: {
      fps: Cl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: Cl(n.aspect, 1), ...rf(n, Zf) },
    scene: { clip: S0(r.clip), ...rf(r, ic) },
    stickers: hS(e.stickers),
    painting: qo(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function mS(e, t) {
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
function gS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return {};
  const n = tr(Bt(t.hFOV_deg, 90), 1, 179), r = tr(Bt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function yS(e) {
  const t = tn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return n.sort((r, o) => Bt(r.z_index, 0) - Bt(o.z_index, 0)), Il({
    camera: gS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: mS(r, t),
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
function co(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Il({});
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
  return n === 1 ? yS(t) : Il(t);
}
function gu(e, t, n, r, o) {
  const a = {};
  for (const [l] of t)
    a[l] = {
      value: e[l].value,
      keyframes: e[l].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Jh(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function k0(e, t) {
  if (Cl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (l) => oo(l * n), { length: o } = e.timeline, a = Jh(e.scene.clip, r);
  return Il({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...gu(e.camera, Zf, r, 0, 0) },
    scene: { clip: a.clip, ...gu(e.scene, ic, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: d, newAnchor: b } = Jh(l.clip, r), y = l.placement === "world" ? ed : Qf;
      return { ...l, clip: u, ...gu(l, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function yu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function M0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function td(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Ji);
}
function N0(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? M0(e.keyframes[r - 1].easing) : [...b0];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function ao(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = yu(o.value, r);
    return;
  }
  const a = td(o, n);
  a ? a.value = yu(a.value, r) : N0(o, n, yu(qt(e, t, n), r));
}
function po(e) {
  return e.placement === "world" ? ed.map(([t]) => t) : e.placement === "sky" ? Qf.map(([t]) => t) : (e.clip ? ic : Zf).map(([t]) => t);
}
function bS(e, t) {
  for (const n of po(e))
    td(e[n], t) || N0(e[n], t, qt(e, n, t));
}
function vS(e) {
  const t = po(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function _S(e, t) {
  return po(e).every((n) => !!td(e[n], t));
}
function wS(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const l = e[a];
    if (!l.keyframes.some((d) => o.has(d.frame))) continue;
    const u = qt(e, a, r);
    l.keyframes = l.keyframes.filter((d) => !o.has(d.frame)), l.keyframes.length || (l.value = u);
  }
}
function xS(e, t, n, r, o) {
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
function P0(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((l) => n.length > 1 ? l.frame >= r && l.frame < o : l.frame === r));
}
function SS(e, t, n) {
  const r = P0(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function kS(e, t, n, r) {
  for (const o of P0(e, t, n)) o.easing = M0(r);
}
function MS(e, t) {
  e.start = Math.max(0, e.start + t);
}
function NS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function PS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Zh(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function of(e) {
  return po(e).map((t) => e[t]);
}
function af(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => of(t).some((n) => n.keyframes.length > 0)) || !Zh(e.scene.clip) || e.stickers.some((t) => !Zh(t.clip));
}
function A0(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of of(e.camera))
    for (const l of a.keyframes) o = Math.max(o, l.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: l } = a;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of of(a))
      for (const d of u.keyframes) o = Math.max(o, l.start - l.in + d.frame + 1);
  }
  return o;
}
function AS(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let $s = { text: null, parsed: null };
function Hn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function El(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function CS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Hn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: qo(null),
    painting_layer: null,
    ui_settings: El(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function C0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function IS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function ES(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function OS(e) {
  return Array.isArray(e) ? e.map((t) => l0(t)) : [];
}
function FS(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((l) => String((l == null ? void 0 : l.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function I0(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = CS(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if ($s.text === o ? a = $s.parsed : (a = JSON.parse(o), $s = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const l = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: IS(a.assets),
      stickers: ES(a.stickers),
      shots: OS(a.shots),
      painting: qo(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: El(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return l && (u.ui_settings = El({ ...u.ui_settings, ...l })), u.output_preset = C0(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Hn(n.coverage), delete u.editor_history, u;
  } catch {
    return $s = { text: o, parsed: null }, r;
  }
}
function Qh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function TS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function DS(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function E0(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: l, fps: u = null } = t;
  let d;
  try {
    d = co(e);
  } catch {
    d = co(null);
  }
  return u && u !== d.timeline.fps && (d = k0(d, u)), {
    ...d,
    coverage: Hn(o),
    bg_color: r,
    output_preset: C0(n),
    ui_settings: El(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...l }
  };
}
function LS(e, t) {
  const n = k0(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, l] of o)
    if (l) {
      a.clip && (a.clip = l.clip);
      for (const u of po(a)) a[u].keyframes = l[u].keyframes;
    }
}
function nd(e, t) {
  const n = rc(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const RS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function em(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function VS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[RS[n]].keyframes.length));
}
function O0(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = em(n, ["yaw_deg", "pitch_deg"]), a = em(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && ao(e, "direction", r, o), n.rot_deg !== void 0 && ao(e, "roll", r, n.rot_deg), Object.keys(a).length && ao(e, "size", r, a);
}
const F0 = ["position_x", "position_y", "position_z"];
function $S(e, t) {
  const n = qt(e, "position", t), r = qt(e, "rotation", t);
  return {
    ...Object.fromEntries(F0.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: qt(e, "fov", t)
  };
}
function zS(e, t, n, r) {
  const o = F0.indexOf(n);
  if (o >= 0) {
    const a = qt(e, "position", t);
    a[o] = r, ao(e, "position", t, a);
  } else n === "hFOV_deg" ? ao(e, "fov", t, r) : ao(e, "rotation", t, { [n]: r });
}
function jS(e, t, n) {
  ao(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function rl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function T0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function rd(e, t, n, r) {
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
function HS(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ht(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function D0(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function L0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function R0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function V0(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? co(t) : t);
}
function $0(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(co(n)) === t;
  } catch {
    return !1;
  }
}
const bu = 0.15, GS = 0.01, KS = 1e-3, BS = 0.05, WS = 4, tm = 250, US = 16, Zi = 1, YS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Vr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function so(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function id(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function ls(e, t, n = 0) {
  const r = ir(e, t, n), o = so(r, 2);
  return { right: so(r, 0), up: so(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function XS(e, t) {
  return e === "6dof" ? t : { ...t, position: [0, 0, 0] };
}
function z0(e, t) {
  return t === "3dof" ? { mode: t, position: [0, 0, 0], moved: !1 } : { ...e, mode: t };
}
function qS(e, t) {
  return t || e.mode === "3dof" ? e : z0(e, "3dof");
}
function JS(e) {
  return Vr(e.position, ls(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function oc(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function j0(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ac(e, t) {
  return j0(oc(t, e.position), ls(e.yaw_deg, e.pitch_deg).forward);
}
function ZS(e, t, n = null, r = Zi) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * BS;
  if (n && ac(e, n) > 0) {
    const a = oc(n, e.position), l = Math.hypot(...a);
    return l >= o ? n : Vr(e.position, a, o / l);
  }
  return Vr(e.position, ls(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function QS(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > WS ? !1 : t.time - e.time < tm || e.cost > US && t.time - e.wheelTime < tm;
}
function od(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Jt);
  return { tanX: r, tanY: r * n / t };
}
function ek(e, t, n, r, o = JS(e)) {
  const a = Ht(e.yaw_deg + t / r * 360), l = J(e.pitch_deg - n / r * 360, -89.9, 89.9), u = ir(e.yaw_deg, e.pitch_deg, 0), d = ir(a, l, 0), b = oc(e.position, o), y = [0, 1, 2].map((x) => j0(so(u, x), b)), w = { ...e, yaw_deg: a, pitch_deg: l, position: Vr(o, id(d, y)) };
  return { ...w, distance: ac(w, o) };
}
function tk(e, t, n, r, o, a = e.distance) {
  const { right: l, up: u } = ls(e.yaw_deg, e.pitch_deg), d = 2 * a * od(e, r, o).tanY / o;
  return { ...e, position: Vr(Vr(e.position, l, -t * d), u, n * d), distance: a };
}
function nk(e, t, n, r = Zi) {
  const o = oc(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const l = Math.max(r, 1e-6), u = l * GS, d = n > 0 ? Math.min(Math.max(a * bu, u), a - l * KS) : -Math.max(a * bu / (1 - bu), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: Vr(e.position, o, d / a) };
  return { ...b, distance: ac(b, t) };
}
function rk(e, t, n, r) {
  const { tanX: o, tanY: a } = od(e, n, r), l = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(l) * 1.1, { forward: d } = ls(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Vr(t.center, d, -u), distance: u };
}
function vu(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Zi }, l = Math.hypot(o[0] - e.position[0], o[1] - e.position[1], o[2] - e.position[2]), u = Math.max(l + a, Math.hypot(...e.position) + 6 * a);
  return {
    position: [...e.position],
    quaternion: fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(od(e, t, n).tanY) * Sn,
    aspect: t / n,
    near: Math.max(e.distance * 0.01, a * 1e-4),
    far: u * 2
  };
}
function ik(e, t, n, r) {
  const { right: o, up: a, forward: l } = ok(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * l[0] + u[1] * l[1] + u[2] * l[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Jt), y = b * e.aspect, w = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + w / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function ok(e) {
  const t = qf(e.quaternion), n = so(t, 2);
  return { right: so(t, 0), up: so(t, 1), forward: n.map((r) => -r) };
}
function nm(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function ak({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function H0(e, t) {
  if (!e || !t.active) return null;
  const n = ck(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: uk(t),
    itemQuaternion: e.kind === "splat" ? YS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function sk(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], l = H0(e, a);
  return l && { ...l, id: o.id, opacity: a.opacity, value: a };
}
function lk(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function ck(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function uk(e) {
  return {
    position: [...e.position],
    quaternion: fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function rm(e, t) {
  return Vr(e.position, id(ir(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function im(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function om({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function fk(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((l) => l[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((l) => l[a]))), r = t.map((a, l) => (a + n[l]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function dk(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...om(t).map((a) => rm(e.scene, a)));
  for (const a of n) o.push(...hk(a));
  for (const { box: a, value: l } of r) o.push(...om(a).map((u) => rm(l, u)));
  return o;
}
function pk(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: ir(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function hk(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => Vr(e.position, id(e.rotation, [r, o, 0])));
}
function mk(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
const am = 2048, G0 = 0.28;
function K0(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Jt);
  return {
    quaternion: fo(ir(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * Sn,
    aspect: r
  };
}
function il(e) {
  const t = ci(e);
  return {
    quaternion: fo(ir(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function gk(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Xf(n, r), l = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: l - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * Sn,
      vFOV_deg: 2 * Math.atan(a / r) * Sn
    }
  };
}
function B0(e, t, n) {
  const [[r, o, a], [l, u, d], [b, y, w]] = qf(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Jt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, v = 1e-4) {
      const T = zx(S), $ = r * T.x + l * T.y + b * T.z, K = o * T.x + u * T.y + y * T.z, I = -(a * T.x + d * T.y + w * T.z), R = Math.max(I, v);
      return {
        x: t * 0.5 * (1 + $ / R / N),
        y: n * 0.5 * (1 - K / R / x),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, v) {
      const T = (S / t * 2 - 1) * N, $ = (1 - v / n * 2) * x;
      return Wf(nl({
        x: r * T + o * $ - a,
        y: l * T + u * $ - d,
        z: b * T + y * $ - w
      }));
    }
  };
}
function yk(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = Jf(e, t), l = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const w = n(u);
    if (!w) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * Jt), N = Math.tan(b.vFOV_deg * 0.5 * Jt), { crop: S } = u;
    l.push({
      kind: "sticker",
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
      opacity: y ? G0 : b.opacity,
      zIndex: r(u),
      quaternion: fo(ir(b.yaw_deg, b.pitch_deg, b.roll_deg)),
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
function W0(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  return yk(e, t, {
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
function bk(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function vk(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = Jf(e, t), l = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), w = y ? r(y) : null;
    if (!w) return;
    const { width: x, height: N } = bk(w.media), S = pk(b, u.crop, x, N);
    S && l.push({
      id: u.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
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
const _u = /* @__PURE__ */ new WeakMap();
let _k = 1;
function sf(e) {
  return _u.has(e) || _u.set(e, _k++), _u.get(e);
}
function sm(e) {
  return e && typeof e == "object" ? sf(e) : e;
}
function lm({ background: e, layers: t }) {
  return JSON.stringify([
    e && [sf(e.media), sm(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, sf(n.media), sm(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function wk({ onReady: e, onFailed: t, onUpdate: n = () => {
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
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-DDDuA4qY.js").then((l) => l.$).then((l) => {
    o || (r = l.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((l) => {
    console.error("[PanoramaStickers] three.js view is unavailable", l), a.failed = !0, t();
  }), a;
}
const U0 = "3D view unavailable. Check the browser console.";
function Ol(e, t, n) {
  return K0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function xk(e) {
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
const Y0 = xk(
  () => import("./.lazy/pano_three_view-DDDuA4qY.js").then((e) => e.$).then((e) => e.createThreeView())
), Fi = ["erp_image", "bg_erp", "bg_media"], ad = ["sticker_image", "sticker"], X0 = ["scene"], Sk = {
  background: Fi,
  "external-sticker": ad,
  scene: X0
};
function q0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function J0(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = q0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function kk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function Z0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const l = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!l || a === n.length - 1) return { graph: r, entry: l };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === l.type);
  }
}
function Mk(e, t) {
  const { graph: n, entry: r } = Z0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((l) => Array.isArray(l) ? [l[0], { origin_id: l[1], origin_slot: l[2] }] : [l == null ? void 0 : l.id, l])), a = {};
  for (const l of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = q0(o.get(l == null ? void 0 : l.link));
    u && (a[String((l == null ? void 0 : l.name) || "")] = u);
  }
  return a;
}
const Q0 = [...Fi, ...ad, ...X0], Nk = 256, Ho = /* @__PURE__ */ new Map(), wu = /* @__PURE__ */ new WeakMap();
let ey = () => null;
function ty(e) {
  return wu.has(e) || wu.set(e, JSON.stringify(e)), wu.get(e);
}
function Pk(e) {
  ey = e;
}
function Fl(e, t) {
  const n = ty(e);
  Ho.delete(n), Ho.set(n, t), Ho.size > Nk && Ho.delete(Ho.keys().next().value);
}
function vn(e, t) {
  var a;
  const n = e ? ey(e) : null;
  if (!n) return !0;
  const r = J0(e);
  let o = Ho.get(ty(n));
  if (o)
    Fl(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((l) => Q0.includes(l == null ? void 0 : l.name)))) return !0;
    Fl(n, r), o = r;
  }
  return Sk[t].every((l) => o[l] === r[l]);
}
const Tl = /* @__PURE__ */ new WeakSet();
async function lf(e, t) {
  if (Tl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Tl.add(e), n.ok && r !== void 0 ? r : null;
}
function ny(e, t) {
  var a, l, u, d, b;
  const n = (u = (l = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : l.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = Z0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Q0.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: Mk(n, t) };
}
const ol = /* @__PURE__ */ new Map();
function Ak(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && ol.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await lf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const l = ny(o, a);
        l && Fl(l.output, l.inputs);
      }
    });
}
const Ck = 5;
function Ik(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Ck}`, r = lf(e, `/jobs?${n}`).then((l) => (l == null ? void 0 : l.jobs) || []), o = /* @__PURE__ */ new Map(), a = (l) => (o.has(l) || o.set(l, lf(e, `/jobs/${encodeURIComponent(l)}`)), o.get(l));
  return {
    async lastNodeOutput(l, u) {
      var b, y, w, x;
      const d = String(l.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const S = await a(N);
        if ((b = S == null ? void 0 : S.outputs) != null && b[d])
          return ((x = (w = (y = S.workflow) == null ? void 0 : y.prompt) == null ? void 0 : w[d]) == null ? void 0 : x.class_type) !== l.comfyClass ? null : ny(S, d);
      }
      return null;
    }
  };
}
function Ek(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, l;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((l = o.changeTracker) == null ? void 0 : l.nodeOutputs);
  });
}
let To = null;
async function Ok(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Tl.has(n) || (u = ol.get(o)) != null && u.has(r) || Ek(t)) return null;
  (To == null ? void 0 : To.workflowId) !== o && (To = { workflowId: o, history: Ik(n, o) }, queueMicrotask(() => {
    To = null;
  }));
  const l = await To.history.lastNodeOutput(e, a);
  return a() ? l ? (Fl(l.output, l.inputs), t.nodeOutputs[r] = l.output, l.output) : (Tl.has(n) || ol.set(o, (ol.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function cm(e, t, n, r = Fi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((l == null ? void 0 : l.name) || ""));
}
const um = /\.(mp4|webm|mov|m4v|mkv)$/i;
function al(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return um.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return um.test(String((e == null ? void 0 : e.filename) || ""));
}
const xu = /* @__PURE__ */ new WeakMap();
function Fk(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function cf(e) {
  return Fk(e) ? (xu.has(e) || xu.set(e, Math.random().toString(36).slice(2, 10)), xu.get(e)) : "run";
}
function ry(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Tk(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, l) => {
    for (const u of l) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function sd(e, t = [], n = null) {
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
function Dk({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var T;
  const r = ((T = e == null ? void 0 : e.createElement) == null ? void 0 : T.call(e, "video")) || null;
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
  }, x = () => o();
  let N = !1;
  const S = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", w), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var $, K;
    a || (a = !0, l && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(l), l = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (K = r.load) == null || K.call(r));
  }, failed: () => N };
}
function ji(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function Lk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function fm(e, t, n = null) {
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
  return !r && n != null && (r = Lk(e == null ? void 0 : e.graph, n)), r;
}
function Rk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Vk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function $k(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function iy({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (F) => {
    if (!F) return "";
    if (typeof F == "string") return String(F || "").trim();
    if (Array.isArray(F)) {
      if (F.length === 0) return "";
      if (F.length === 1) return o(F[0]);
      const V = String(F[0] || "").trim();
      if (V)
        return ji(t, {
          filename: V,
          subfolder: String(F[1] || "").trim(),
          type: String(F[2] || "output").trim() || "output"
        });
      for (const G of F) {
        const Q = o(G);
        if (Q) return Q;
      }
      return "";
    }
    return typeof (F == null ? void 0 : F.src) == "string" && F.src ? F.src : typeof (F == null ? void 0 : F.url) == "string" && F.url ? F.url : ji(t, F);
  }, a = (F) => {
    if (!F || typeof F != "object") return "";
    const V = String(F.type || "").trim().toLowerCase();
    if (V === "dataurl") return String(F.value || "");
    if (V !== "comfy_image") return "";
    const G = String(F.filename || "").trim();
    return G ? ji(t, {
      filename: G,
      subfolder: String(F.subfolder || ""),
      type: String(F.storage || "input")
    }) : "";
  }, l = (F) => {
    const V = e == null ? void 0 : e.nodeOutputs;
    if (!V || F == null) return null;
    const G = String(F);
    return V instanceof Map ? V.get(F) || V.get(G) || V.get(Number(G)) || null : V[F] || V[G] || null;
  }, u = (F, V) => {
    var Q;
    const G = l(F == null ? void 0 : F.id);
    return Array.isArray((Q = G == null ? void 0 : G.ui) == null ? void 0 : Q[V]) ? G.ui[V] : Array.isArray(G == null ? void 0 : G[V]) ? G[V] : [];
  }, d = (F, V) => {
    const G = l(F == null ? void 0 : F.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, V) ? G.ui[V] : G && Object.prototype.hasOwnProperty.call(G, V) ? G[V] : null;
  }, b = (F, V) => {
    const G = d(F, "pano_sticker_input_state_hash"), Q = Array.isArray(G) ? G[0] : G;
    return String(Q ?? "").trim() || $k(V);
  }, y = (F) => {
    const V = [], G = /* @__PURE__ */ new Set();
    for (const Q of F || []) {
      const _e = o(Q);
      !_e || G.has(_e) || (G.add(_e), V.push(_e));
    }
    return V;
  }, w = (F, V) => {
    var _e;
    const G = [];
    Array.isArray(F == null ? void 0 : F.images) && F.images.length && G.push(F.images), Array.isArray((_e = F == null ? void 0 : F.ui) == null ? void 0 : _e.images) && F.ui.images.length && G.push(F.ui.images);
    const Q = [];
    for (const D of G)
      V >= 0 && V < D.length && Q.push(D[V]), Q.push(...D);
    return Q;
  }, x = (F, V) => {
    var ee;
    const G = String(V || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === G);
    if (_e < 0) return { src: "", sourceType: "", inputName: G };
    const D = F.graph ? F.getInputLink(_e) : null;
    if ((D == null ? void 0 : D.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const C = D.origin_id, se = fm(F, _e, C);
    if (!se) return { src: "", sourceType: "", inputName: G };
    const ce = Number(D.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Y = [];
      ce >= 0 && ce < fe.length && Y.push(fe[ce]), Y.push(...fe);
      const Ae = y(Y.filter((Fe) => !al(Fe)));
      if (Ae.length)
        return { src: Ae[0], srcCandidates: Ae, sourceType: "appNodeImageUrls", inputName: G };
    }
    const U = l((se == null ? void 0 : se.id) ?? C), X = y(w(U, ce).filter((Y) => !al(Y))).map((Y) => `${Y}&pano_src=${cf(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: G };
    const H = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (H.length) {
      const Y = [];
      ce >= 0 && ce < H.length && Y.push(H[ce]), Y.push(...H);
      const Ae = y(Y);
      if (Ae.length)
        return { src: Ae[0], srcCandidates: Ae, sourceType: "nodeImgs", inputName: G };
    }
    const P = (ee = se == null ? void 0 : se.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (P) {
      let Y = o(P.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, N = (F, V = []) => {
    var Q;
    const G = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : [];
    for (const _e of V) {
      const D = G.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === _e), C = D >= 0 && F.graph ? F.getInputLink(D) : null;
      if ((C == null ? void 0 : C.origin_id) == null) continue;
      const se = l(((Q = fm(F, D, C.origin_id)) == null ? void 0 : Q.id) ?? C.origin_id), ce = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(al);
      return ce ? `${ji(t, ce)}&pano_src=${cf(se)}` : "";
    }
    return "";
  }, S = (F, V = []) => {
    const G = Array.isArray(V) ? V : [V];
    for (const Q of G) {
      const _e = x(F, Q);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (F) => {
    const V = String(F || "").trim();
    if (!V) return [];
    if (Rk(V)) return [V];
    const { filename: G, subfolder: Q } = Vk(V);
    return G ? y([
      ji(t, { filename: G, subfolder: Q, type: "temp" }),
      ji(t, { filename: G, subfolder: Q, type: "output" }),
      ji(t, { filename: G, subfolder: Q, type: "input" }),
      V
    ]) : [V];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (F) => {
      var V, G;
      try {
        (G = (V = F == null ? void 0 : F.__panoLinkedInputImageCache) == null ? void 0 : V.forEach) == null || G.call(V, (Q, _e, D) => {
          var C;
          Q != null && Q.img && ((C = r == null ? void 0 : r.isImageLoadFailed) != null && C.call(r, Q.img)) && D.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (F, V) => {
      var G;
      (G = F == null ? void 0 : F.delete) == null || G.call(F, `__ui__${String(V || "")}`);
    },
    linkedValue: (F, V) => {
      var C, se, ce, fe;
      const G = String(V || ""), Q = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === G) : -1, _e = Q >= 0 && F.graph ? F.getInputLink(Q) : null;
      if (_e) {
        const U = l(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (C = U == null ? void 0 : U.data) == null ? void 0 : C.output,
          (se = U == null ? void 0 : U.data) == null ? void 0 : se.result,
          (ce = U == null ? void 0 : U.ui) == null ? void 0 : ce.output,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.result
        ];
        for (const H of X) {
          if (!Array.isArray(H)) continue;
          const P = H[Number(_e.origin_slot || 0)];
          if (typeof P == "string" && P.trim()) return P;
        }
      }
      const D = Array.isArray(F == null ? void 0 : F.widgets) ? F.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === G) : null;
      return String((D == null ? void 0 : D.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (F, V = [], G = null, Q = "") => {
      var St;
      const _e = Array.isArray(V) ? V : [V], D = S(F, _e), se = (Array.isArray(D == null ? void 0 : D.srcCandidates) && D.srcCandidates.length ? D.srcCandidates : [D == null ? void 0 : D.src]).map((ht) => String(ht || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const ce = y(se.flatMap((ht) => v(ht)));
      if (!ce.length) return null;
      F.__panoLinkedInputImageCache || (F.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(Q || _e.join("|") || "image_exact"), U = se.join(`
`), X = F.__panoLinkedInputImageCache.get(fe);
      if (X && X.srcRaw === U && X.img) return X.img;
      const H = n || globalThis.Image;
      if (typeof H != "function") return null;
      const P = new H();
      (St = r == null ? void 0 : r.markImageLoading) == null || St.call(r, P, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: P };
      F.__panoLinkedInputImageCache.set(fe, ee);
      let Y = -1;
      const Ae = (ht) => {
        var sn, it, Un;
        ht === "ready" ? (sn = r == null ? void 0 : r.markImageReady) == null || sn.call(r, P, U) : (it = r == null ? void 0 : r.markImageFailed) == null || it.call(r, P, U), G == null || G(P), (Un = F.setDirtyCanvas) == null || Un.call(F, !0, !0);
      }, Fe = () => {
        if (Y += 1, Y >= ce.length) {
          Ae("failed");
          return;
        }
        ee.resolvedSrc = ce[Y], P.src = ee.resolvedSrc;
      };
      return P.onload = () => Ae("ready"), P.onerror = () => {
        if (Y + 1 < ce.length) {
          Fe();
          return;
        }
        Ae("failed");
      }, Fe(), P;
    },
    output: l,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (F, V, G, Q = null) => {
      var U, X, H;
      const _e = u(F, V)[0] || null, D = o(_e);
      if (!D) return null;
      const C = `__ui__${V}`, se = (U = G == null ? void 0 : G.get) == null ? void 0 : U.call(G, C);
      if (se && se.__panoSrc === D) return se;
      const ce = n || globalThis.Image;
      if (typeof ce != "function") return null;
      const fe = new ce();
      return fe.__panoSrc = D, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, fe, D), fe.onload = () => {
        var P;
        (P = r == null ? void 0 : r.markImageReady) == null || P.call(r, fe, D), Q == null || Q(fe);
      }, fe.onerror = () => {
        var P;
        (P = r == null ? void 0 : r.markImageFailed) == null || P.call(r, fe, D), Q == null || Q(fe);
      }, fe.src = D, (H = G == null ? void 0 : G.set) == null || H.call(G, C, fe), fe;
    },
    uiList: u,
    uiValue: d
  };
}
const zk = 1e-3;
function oy(e, t, n, r) {
  if (!Pi(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const l = Math.floor(o + 0.5);
    return l >= 0 && l < r.frames ? (l + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(zk / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function ay(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function jk(e, t) {
  return Math.floor(e * t.fps);
}
function sy(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const dm = 4;
function ly({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(l) {
    return r.has(l) || r.set(l, e(n[l], t)), r.get(l);
  }
  return {
    picture(l, u, d, b) {
      if ((l.length !== n.length || l.some((x, N) => x !== n[N])) && (n = l, r.clear(), o = null), u === null) return null;
      const y = jk(u, d);
      for (let x = y; x < Math.min(n.length, y + dm + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + dm) && x !== o && r.delete(x);
      const w = r.get(y);
      return w != null && w.complete && w.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function cy({
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
      const x = t(l, w);
      return x.changed ? (l = x.state, u = !0, r(l), y(), !0) : !1;
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
      const x = t(e(), w);
      return x.changed ? (o(x.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const w = l != null;
      l = null, u = !1, w && r(null);
    }
  };
}
const sl = "sticker_image_1", uy = "external_image", oa = 0;
function Jo(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Su(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ei(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function uf(e, t = oa) {
  return (e == null ? void 0 : e.version) !== 2 ? Ei(e) : Ei(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: rc(n, t).active,
    external: n.source.kind === "port",
    ...nd(n, t)
  }));
}
function ld(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ei(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function fy(e) {
  return String((e == null ? void 0 : e.id) || "") === sl || String((e == null ? void 0 : e.source_kind) || "") === uy;
}
function cd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : fy(t);
}
const dy = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function py(e) {
  return !fy(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(dy.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function hy(e) {
  const t = py(e);
  return t ? dy.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function my(e, t = {}) {
  var R, F, V;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((G) => String((G == null ? void 0 : G.id) || "") === sl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const G = String(((R = e.active) == null ? void 0 : R.selected_sticker_id) || "") === sl;
    return {
      state: {
        ...e,
        stickers: n.filter((Q, _e) => _e !== r),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), l = r >= 0 ? n[r] : null, u = !l || Number(l.source_link_id ?? -1) !== o || String(l.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, w = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, S = u ? N.hFOV_deg || (l == null ? void 0 : l.hFOV_deg) || 30 : (l == null ? void 0 : l.hFOV_deg) || N.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(S)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const G = Jo(v, w, x), Q = Number(((F = l == null ? void 0 : l.initial_pose) == null ? void 0 : F.hFOV_deg) ?? v), _e = Jo(Q, w, x), D = Number(((V = l == null ? void 0 : l.initial_pose) == null ? void 0 : V.vFOV_deg) ?? _e);
    return Math.abs(Number((l == null ? void 0 : l.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(D - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((C, se) => se === r ? {
          ...C,
          vFOV_deg: G,
          initial_pose: C.initial_pose && typeof C.initial_pose == "object" ? { ...C.initial_pose, vFOV_deg: _e } : C.initial_pose
        } : C)
      },
      changed: !0
    };
  }
  const T = n.reduce((G, Q) => Math.max(G, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), $ = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: y ? Jo(v, w, x) : Number(N.vFOV_deg || (l == null ? void 0 : l.vFOV_deg) || v),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, K = {
    ...l || {},
    id: sl,
    source_kind: uy,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: T + 1
  }, I = r >= 0 ? n.map((G, Q) => Q === r ? K : G) : [...n, K];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function pm(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const Hk = ["IMAGE", "VIDEO"];
function hm(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => Hk.includes(n)) ? "2d" : null;
}
function Gk(e, t) {
  var o, a, l, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? hm(r.type) ?? hm((b = (d = (u = (l = (a = e.graph).getNodeById) == null ? void 0 : l.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function gy(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: pm(e, "sticker"),
    awaitingPose: !t && (pm(e, "sticker_state") || Gk(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function mm(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return co({ version: 2, stickers: [n] }).stickers[0];
}
function yy(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const l = e.stickers.findIndex((T) => cd(e, T)), u = l >= 0 ? e.stickers[l] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const T = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter(($, K) => K !== l),
        active: T ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const T = { ...mm(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map(($, K) => K === l ? T : $) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const T = [u.size.value, ...u.size.keyframes.map((I) => I.value)], $ = T.map((I) => Jo(I.hFOV_deg, o, a));
    if (T.every((I, R) => Math.abs(I.vFOV_deg - $[R]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...u.size.value, vFOV_deg: $[0] },
      keyframes: u.size.keyframes.map((I, R) => ({ ...I, value: { ...I.value, vFOV_deg: $[R + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((I, R) => R === l ? { ...I, size: K } : I) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((T) => T.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, mm(`sticker_${y}`, r)] }, changed: !0 };
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (T) => d ? Jo(T, o, a) : T, N = rd(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: x(w)
  }, Ei(e).reduce((T, $) => Math.max(T, $.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = S.direction ?? [], N.roll.keyframes = S.roll ?? [], N.size.keyframes = (S.size ?? []).map((T) => ({ ...T, value: { ...T.value, vFOV_deg: x(T.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function ud(e) {
  const t = Ei(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Su(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Su(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Su(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, l) => a.z_index - l.z_index);
}
function by(e) {
  const t = ld(e), n = cd(e, t), r = Ei(e).some((u) => u && u.visible !== !1), o = ud(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, l = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: hy(t),
    selectedId: t ? String(t.id || "") : null,
    locked: l,
    canDelete: !!t && !l,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function Kk(e) {
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
function gm(e, t) {
  const n = ld(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Kk(e), o = String(n.id || ""), a = ud(r), l = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (l < 0) return { state: e, changed: !1 };
  if (t === "front" && l === a.length - 1 || t === "back" && l === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(l, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function Bk(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Wk(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return my(e, t.value);
  if (t.type === "sync-port") return yy(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), l = String(o.assetId || "").trim();
    if (!a || !l || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = ud(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: Jo(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, rd(a, rl(o.asset), y, d + 1)],
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
    return !o || !Ei(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = ld(e);
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
    const o = py(n);
    return !o || !hy(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return gm(e, "front");
  if (t.type === "send-back") return gm(e, "back");
  if (t.type === "delete-selected") {
    if (cd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Ei({ ...e, stickers: o })[0], l = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: l }
    };
    return e.version !== 2 && (u.assets = Bk(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], l = e.version === 2 ? nd(n, oa) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(l[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = VS(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return O0(b, oa, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
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
function Uk(e = {}) {
  return cy({
    ...e,
    reduce: Wk,
    projectModel: by
  });
}
const ff = 2;
function Ui(e, t) {
  return Math.floor(e * t + 0.5);
}
function Yk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function vy({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: l, onChange: u }) {
  let d = 0, b = !1, y = !1, w = { name: "idle" }, x = [];
  const N = () => b && !y, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of x) ee();
    x = [];
  }
  function T(ee, Y = {}) {
    return v(), w = { name: ee, ...Y }, u(), w;
  }
  function $(ee, Y, Ae) {
    const Fe = () => {
      w === ee && Ae();
    };
    e.addEventListener(Y, Fe), x.push(() => e.removeEventListener(Y, Fe));
  }
  function K(ee, Y) {
    let Ae = t.requestFrame(function Fe(St) {
      w === ee && (Y(St), w === ee && (Ae = t.requestFrame(Fe)));
    });
    x.push(() => t.cancelFrame(Ae));
  }
  function I(ee) {
    d = ee, a(d);
  }
  function R() {
    return T(y ? "error" : "idle");
  }
  function F() {
    y = !0, R();
  }
  function V() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function G(ee) {
    if (!N()) return ee === "play" ? se() : R();
    if (e.readyState < ff) {
      const Y = T("loading", { then: ee });
      return $(Y, "loadeddata", () => G(Y.then)), $(Y, "error", F), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? se() : Q(ee, !1);
  }
  function Q(ee, Y) {
    const Ae = V();
    if (!e.ended && Ui(Number(e.currentTime), n()) === Ui(Ae, n())) return _e(ee);
    const Fe = T("seeking", { then: ee, frame: d, retried: Y });
    return $(Fe, "seeked", () => {
      const St = Ui(Number(e.currentTime), n()) === Ui(V(), n()), ht = d === Fe.frame;
      St || ht && Fe.retried ? _e(Fe.then) : Q(Fe.then, ht);
    }), $(Fe, "error", F), e.currentTime = Ae, Fe;
  }
  function _e(ee) {
    return ee === "play" ? D() : (l(), R());
  }
  function D() {
    const ee = T("playingVideo", { shown: !1 });
    if ($(ee, "pause", () => e.ended ? C() : U()), $(ee, "ended", C), $(ee, "error", F), o() && Ui(Number(e.duration), n()) >= r()) {
      const Ae = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ae;
      });
    }
    const Y = (Ae, Fe) => {
      Fe && !ee.shown && (ee.shown = !0, u()), ce(Ui(Ae, n()));
    };
    if (S()) {
      let Ae = e.requestVideoFrameCallback(function Fe(St, ht) {
        w === ee && (Y(Number(ht.mediaTime), !0), w === ee && (Ae = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ae);
      });
    } else
      K(ee, () => Y(Number(e.currentTime), e.readyState >= ff));
    return Promise.resolve(e.play()).catch(() => {
      w === ee && U();
    }), ee;
  }
  function C() {
    l(), se();
  }
  function se() {
    const ee = T("playingClock", { startTs: t.now(), startFrame: d });
    return K(ee, (Y) => ce(ee.startFrame + Math.floor((Y - ee.startTs) / 1e3 * n()))), ee;
  }
  function ce(ee) {
    if (ee < r()) {
      I(ee);
      return;
    }
    if (!o()) {
      fe(r() - 1);
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), I(0), G("play");
  }
  function fe(ee) {
    w.name === "playingVideo" ? (v(), e.pause(), I(Math.max(0, ee)), l()) : I(Math.max(0, ee)), G("still");
  }
  function U() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", u();
    else if (w.name === "playingVideo") {
      v(), e.pause();
      const ee = Yk(Number(e.currentTime), n());
      I(Math.min(ee, r() - 1)), l(), d === ee ? R() : G("still");
    } else w.name === "playingClock" && fe(Math.min(d, r() - 1));
  }
  function X() {
    if (!P()) {
      if (d >= r() - 1 && I(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", u();
        return;
      }
      G("play");
    }
  }
  function H(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", I(Y), u();
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), I(Y), G("still");
  }
  function P() {
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
      return P();
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
      P() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ee) {
      v(), b = !!ee, y = !1, G("still");
    },
    dispose() {
      v(), b = !1, w = { name: "idle" };
    }
  };
}
function _y({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, l = null, u = null, d = !1;
  function b(v) {
    u = v, t();
  }
  function y(v) {
    l = v, e.currentTime = v;
  }
  function w() {
    const v = d;
    x(), d !== v && n();
  }
  function x() {
    if (!r || o || e.readyState < ff) return;
    const { time: v, playing: T, fps: $ } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (T) {
      if (l !== null) return;
      const K = Number(e.duration), I = Number.isFinite(K) ? Math.min(v, K) : v, R = Math.abs(Number(e.currentTime) - I) > 1.5 / $;
      if (e.ended && !R) return;
      R && y(I), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(l !== null || u === v) && (Number(e.currentTime) === v ? b(v) : y(v));
  }
  const N = {
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
  for (const [v, T] of Object.entries(N)) e.addEventListener(v, T);
  function S(v) {
    r = v, o = !1, l = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: T = null, playing: $ = !1, fps: K }) {
      v !== r && (S(v), n()), a = { time: T, playing: $, fps: K }, w();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, T) {
      return !r || o ? T : a.time === null ? null : a.playing && d ? e : u === null ? T : v;
    },
    dispose() {
      for (const [v, T] of Object.entries(N)) e.removeEventListener(v, T);
      S("");
    }
  };
}
function Xk(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function qk({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: l, onStickerCapture: u, onChange: d }) {
  let b = "", y = "", w = 0;
  const x = /* @__PURE__ */ new Set();
  let N = null, S = null;
  const v = () => o().timeline.fps, T = (D) => D.stickers.find((C) => C.source.kind === "port"), $ = () => {
    const D = o(), C = T(D);
    return A0(D, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(w * v()) : 0,
        N && C ? ay(C.clip, v(), N.meta) : 0
      )
    });
  }, K = vy({
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
  }, R = () => {
    y && (x.add(y), d());
  }, F = _y({ video: t, onCapture: u, onChange: d }), V = ly({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", I), e.addEventListener("error", R);
  function G(D) {
    D !== y && (y = D, e.pause(), D ? e.src = D : e.removeAttribute("src"), e.load(), K.setSource(!!D));
  }
  function Q() {
    K.playing && K.stop();
  }
  function _e(D) {
    const C = T(D);
    S = N && C ? oy(C.clip, K.frame, D.timeline.fps, N.meta) : null, F.follow({
      src: (N == null ? void 0 : N.src) || "",
      time: S,
      playing: K.advancing,
      fps: D.timeline.fps
    });
  }
  return {
    get frame() {
      return K.frame;
    },
    get playing() {
      return K.playing;
    },
    get showsVideo() {
      return K.showsVideo;
    },
    get source() {
      return y;
    },
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return N;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(D, C) {
      return N != null && N.frames ? V.picture(N.frames, S, N.meta, C) : F.picture(D, C);
    },
    toggle() {
      K.playing ? K.stop() : K.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: D, sources: C, state: se, sticker: ce = null }) {
      if (N = D ? ce : null, !D)
        return Q(), G(""), _e(se), !1;
      for (const P of x)
        C.includes(P) || x.delete(P);
      const fe = C.find((P) => P && !x.has(P)) || "", U = fe !== b;
      U && (b = fe, w = 0), G(b);
      const X = af(se) || !!b && K.state !== "error" || !!N;
      return X || Q(), (U || !X || !K.playing && K.frame >= $()) && K.frame !== oa && K.seek(oa), _e(se), X;
    },
    dispose() {
      K.dispose(), F.dispose(), e.removeEventListener("loadedmetadata", I), e.removeEventListener("error", R), e.pause(), e.removeAttribute("src"), e.load(), y = "";
    }
  };
}
const Dl = Math.PI / 180, Ir = 180 / Math.PI, Jk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Zk = 260;
function ym(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function wy(e, t) {
  return t ? wy(t, e % t) : e;
}
function Qk(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), l = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = wy(l, u) || 1;
  return `${Math.round(l / d)}:${Math.round(u / d)}`;
}
function ts(e, t) {
  const n = ym(e), r = ym(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: Qk(n, r) };
}
function lo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function xy(e) {
  const t = lo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ei(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function fd(e, t, n = Jk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (T, $, K) => {
    const I = T + $, R = Math.max(0, K - 1), F = I > R && I > 0 ? R / I : 1;
    return [T * F, $ * F];
  }, [y, w] = b(d, l, r), [x, N] = b(a, u, o), S = {
    x: y,
    y: x,
    w: Math.max(1, r - y - w),
    h: Math.max(1, o - x - N)
  }, v = Uf(S, t);
  return {
    x: S.x + (S.w - v.width) * 0.5,
    y: S.y + (S.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: S
  };
}
function eM(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = fd({ width: n, height: r }, 1), a = J(Number((e == null ? void 0 : e.fov) || 100), 1, 179), l = n / (2 * Math.tan(a * Dl * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = d0(d, s0(
    { x: n * 0.5, y: r * 0.5 },
    l,
    u
  )), y = tM(b, la(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = Yf({ width: o.w, height: o.h }, l);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function Sy(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Ir),
    pitch: J(Math.asin(J(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Ir, -89.9, 89.9)
  };
}
function tM(e, t) {
  const n = Sy(e), r = la(n.yaw, n.pitch, 0), o = fu(t, e), a = {
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
    roll: nc(Math.atan2(
      fu(u, r.up),
      fu(u, r.right)
    ) * Ir)
  };
}
function ky(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = fd({ width: n, height: r }, io(e)), a = ro(o, e), l = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = d0(e, s0(
    l,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Sy(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: J(2 * Math.atan(n / (2 * a)) * Ir, 1, 179)
  };
}
function nM(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, l = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = ro(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(l, o - l) * 2
  }, { halfW: b, halfH: y } = Xf(d, u), w = {
    x: a - b,
    y: l - y,
    w: b * 2,
    h: y * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, N = r / o, S = Math.tan(Zu * Dl), v = N >= 1 ? S : S * N, T = N >= 1 ? S / N : S;
  return {
    focalPx: u,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Ir,
      vFOV_deg: 2 * Math.atan(y / u) * Ir
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Ir,
        vFOV_deg: 2 * Math.atan(T) * Ir
      }
    }
  };
}
function Do(e, t) {
  const n = lo(e);
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
function rM(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const l = ro(n, e);
    return Yf(Uf(n, t), l);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: tl(a, t) };
}
function bm(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = ts(t, n);
  if (!a) return e;
  const l = io(e) >= 1;
  r && a.ratio >= 1 !== l && (a = ts(a.height, a.width));
  const u = rM(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function My(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (lo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = c0({
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
    const r = lo(e);
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
    return Do(e, (r) => bm(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Do(e, (r) => {
      const a = String(ei(r) || "").match(/^([0-9.]+):([0-9.]+)$/), l = a ? ts(a[1], a[2]) : ts(io(r), 1);
      return l ? bm(r, l.height, l.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Do(e, (o) => {
      const a = nc(r), l = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(l - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Do(e, (r) => {
    const o = u0(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Do(e, (r) => {
    const o = f0(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Do(e, (r) => {
    const o = Ay(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Ny({
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
function Py(e, t, n = {}) {
  var l, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((l = e.center) == null ? void 0 : l.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + o0(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: a0(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Ay(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, l = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Dl, d = Math.cos(u), b = Math.sin(u), y = a / n, w = -l / n, x = y * d - w * b, N = y * b + w * d, S = Number(e.pitch_deg || 0) * Dl, v = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(x) / v * Ir),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(N) * Ir, -90, 90)
  };
}
function iM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return cy({
    readState: e,
    reduce: My,
    projectModel: xy,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ne = Object.freeze({
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
}), oM = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, aM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: oM(t[2])
})), sM = {
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
}, vm = Object.fromEntries(
  Object.entries(sM).map(([e, t]) => [e, {
    name: t.name,
    elements: aM(t.body)
  }])
), Ct = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ut(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(vm, r) ? vm[r] : null;
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
      (re(!0), le(Xe, null, vt(n.value.elements, (a, l) => (re(), le(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${l}`
      }, [
        a.tag === "path" ? (re(), le("path", Ni({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (re(), le("circle", Ni({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (re(), le("rect", Ni({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (re(), le("line", Ni({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (re(), le("polyline", Ni({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (re(), le("polygon", Ni({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
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
    const t = e, n = ut(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (re(), $r(Y_(e.tag), Ni({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Mg(() => [
        De(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, lM = ["aria-expanded", "disabled"], cM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, uM = ["data-aspect", "disabled", "onClick"], fM = { class: "pano-cutout-aspect-custom" }, dM = ["disabled"], pM = ["disabled"], hM = ["data-custom-width", "data-custom-height", "disabled"], Cy = {
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
    ]), a = /* @__PURE__ */ Kt("1"), l = /* @__PURE__ */ Kt("1"), u = /* @__PURE__ */ Kt(null), d = ut(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ut(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], T = String(n.model.aspectLabel || "");
      return v.length ? v.map(($) => {
        const K = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), I = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || K);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: K,
          label: I,
          active: T ? K === T : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === T
      }));
    }), y = ut(() => {
      var T;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((T = b.value.find(($) => $.active === !0)) == null ? void 0 : T.label) || "Aspect");
    });
    to(y, (v) => {
      const T = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      T && (a.value = T[1], l.value = T[2]);
    }, { immediate: !0 });
    function w(v) {
      r("action", v);
    }
    function x(v) {
      var T;
      n.model.aspectOpen === !0 && ((T = u.value) != null && T.contains(v.target) || w({ type: "close-aspect" }));
    }
    Zl(() => {
      document.addEventListener("pointerdown", x, !0);
    }), as(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(v) {
      const [T, $] = String(v.value || "").split(":");
      w({
        type: "set-aspect",
        width: T,
        height: $,
        preserveOrientation: !0
      });
    }
    function S() {
      w({
        type: "set-aspect",
        width: a.value,
        height: l.value,
        preserveOrientation: !1
      });
    }
    return (v, T) => (re(), le("div", {
      ref_key: "rootElement",
      ref: u,
      class: ot(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (re(), $r(an, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Ne).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: T[0] || (T[0] = ($) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (re(), le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: T[1] || (T[1] = ($) => w({ type: "toggle-aspect" }))
      }, [
        De(Ct, {
          icon: e.model.aspectIcon || Qe(Ne).aspect
        }, null, 8, ["icon"]),
        B("span", null, nt(y.value), 1),
        De(Ct, {
          icon: Qe(Ne).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, lM)),
      Fr(B("div", cM, [
        (re(!0), le(Xe, null, vt(b.value, ($) => (re(), le("button", {
          key: $.value,
          class: ot(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (K) => N($)
        }, nt($.label), 11, uM))), 128)),
        B("div", fM, [
          Fr(B("input", {
            "onUpdate:modelValue": T[2] || (T[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, dM), [
            [Vh, a.value]
          ]),
          T[4] || (T[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          Fr(B("input", {
            "onUpdate:modelValue": T[3] || (T[3] = ($) => l.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, pM), [
            [Vh, l.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": l.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, hM)
        ])
      ], 512), [
        [Ii, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, mM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, gM = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), n = Object.freeze([
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
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: Qe(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", mM, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (re(!0), le(Xe, null, vt(Qe(n), (a) => (re(), le("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, nt(a[0]), 1),
          B("span", null, nt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, yM = {
  class: "pano-view-unavailable",
  role: "status"
}, dd = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (re(), le("div", yM, nt(Qe(U0)), 1));
  }
}, bM = { class: "pano-cutout-node-surface" }, vM = ["title", "disabled"], _M = { class: "value" }, wM = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, xM = {
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
    return (r, o) => (re(), le("div", bM, [
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
            icon: Qe(Ne).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(an, {
          icon: e.model.hasShot ? Qe(Ne).delete : Qe(Ne).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(Cy, {
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
            icon: Qe(Ne).roll
          }, null, 8, ["icon"]),
          B("span", _M, nt(e.model.rollLabel || "0.0°"), 1)
        ], 40, vM),
        De(an, {
          icon: Qe(Ne).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(gM)
      ], 32),
      e.model.hasShot === !1 ? (re(), le("div", wM, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (re(), $r(dd, { key: 1 })) : ct("", !0)
    ]));
  }
}, Iy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Kt(null);
    let a, l = !1;
    function u() {
      if (!l) return { active: !1, intent: void 0 };
      const w = a;
      return a = void 0, l = !1, { active: !0, intent: w };
    }
    function d(w) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = w, l = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(w) {
      var v, T;
      const { active: x, intent: N } = u();
      if (!x) return;
      const S = ((T = (v = w.target) == null ? void 0 : v.files) == null ? void 0 : T[0]) || null;
      if (S) {
        r("file-selected", { intent: N, file: S });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: w, intent: x } = u();
      w && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (w, x) => (re(), le("input", {
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
}, SM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, kM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), n = Object.freeze([
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
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: Qe(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", SM, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (re(!0), le(Xe, null, vt(Qe(n), (a) => (re(), le("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, nt(a[0]), 1),
          B("span", null, nt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, MM = { class: "pano-stickers-node-surface" }, NM = ["disabled"], PM = ["aria-label", "data-tip"], AM = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, CM = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, IM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Kt(null);
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
    return (l, u) => (re(), le("div", MM, [
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
            icon: Qe(Ne).fullscreen
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
            icon: Qe(Ne).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, NM),
        De(an, {
          icon: e.model.locked ? Qe(Ne).lock_closed : Qe(Ne).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(an, {
          icon: Qe(Ne).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: Qe(Ne).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: e.model.isExternalSelection ? Qe(Ne).back_initial : Qe(Ne).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(kM)
      ], 32),
      e.model.playable === !0 ? (re(), le("button", {
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
          icon: e.model.playing ? Qe(Ne).pause : Qe(Ne).play
        }, null, 8, ["icon"])
      ], 40, PM)) : ct("", !0),
      e.model.hasStickers === !1 ? (re(), le("div", AM, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (re(), le("div", CM, "Drop image to add")) : ct("", !0),
      De(Iy, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (re(), $r(dd, { key: 3 })) : ct("", !0)
    ]));
  }
}, _m = 24;
function EM(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function wm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function OM(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], l = t[o];
    a.y > e.y != l.y > e.y && e.x < (l.x - a.x) * (e.y - a.y) / (l.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function df(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => wm(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return wm(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : OM(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function pd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Ey(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ca(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: J(n.x, -r, t.width + r),
    y: J(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function FM(e) {
  const t = la(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(J(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Jt * 0.5),
    tanY: Math.tan(J(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Jt * 0.5)
  };
}
function Hi(e, t, n) {
  return Wf(Sl(
    Sl(e.centerDir, kl(e.right, t)),
    kl(e.up, n)
  ));
}
function hd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = FM(e), r = Ca(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Hi(n, -n.tanX, n.tanY),
    Hi(n, n.tanX, n.tanY),
    Hi(n, n.tanX, -n.tanY),
    Hi(n, -n.tanX, -n.tanY)
  ].map((x) => Ca(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const S = [];
    for (let v = 0; v <= 28; v += 1) {
      const T = v / 28;
      let $, K;
      N === 0 ? ($ = -n.tanX + 2 * n.tanX * T, K = n.tanY) : N === 1 ? ($ = n.tanX, K = n.tanY - 2 * n.tanY * T) : N === 2 ? ($ = n.tanX - 2 * n.tanX * T, K = -n.tanY) : ($ = -n.tanX, K = -n.tanY + 2 * n.tanY * T);
      const I = Ca(Hi(n, $, K), t);
      I && S.push({ x: I.x, y: I.y });
    }
    return S;
  }), l = Ca(Hi(n, 0, n.tanY), t), u = Ca(
    Hi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, l, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - l.x, y = u.y - l.y, w = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: l.x, y: l.y },
    rotateHandle: {
      x: l.x + b / w * _m,
      y: l.y + y / w * _m
    },
    visible: !0
  };
}
function xm(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((l) => l && l.visible !== !1).map((l) => ({ item: l, geometry: hd(l, r) })).filter((l) => l.geometry.visible).sort((l, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = l.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((l) => {
    var u;
    return String(((u = l.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const l = df(a.geometry, n);
    if (l.kind === "scale" || l.kind === "rotate") return { ...a, hit: l };
  }
  for (const l of o) {
    const u = df(l.geometry, n);
    if (u.kind !== "none") return { ...l, hit: u };
  }
  return null;
}
function TM(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(r.x, r.z) * Sn),
    pitch_deg: Math.asin(J(r.y, -1, 1)) * Sn
  };
}
function DM(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: J(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: J(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function LM(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * Sn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let zs = null;
function md() {
  return zs || (zs = new Promise((e) => {
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
  }), zs);
}
function Qn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function RM(e, t = 1024) {
  const n = Math.max(1, Math.round(Qn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Qn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function VM(e, t, n) {
  const r = Qn(t), o = Qn(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const l = Qn(a.u0), u = Qn(a.v0), d = Qn(a.u1), b = Qn(a.v1);
  if (d <= l || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((l + d) * 0.5 + Qn(y.du)) * r,
    centerY: ((u + b) * 0.5 + Qn(y.dv)) * o,
    width: (d - l) * r,
    height: (b - u) * o,
    rotationRad: Qn(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Qn(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function $M(e, t, n) {
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
function zM() {
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
    const b = String(a.rasterDataUrl || "").trim(), y = VM(a, l, u);
    if (!b.startsWith("data:") || !y) return null;
    const w = $M(a, l, u), x = String((a == null ? void 0 : a.id) || "").trim() || w, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === w) return { source: N.source, revision: w };
    const S = r(b, d), v = Number(S.naturalWidth || S.width || 0), T = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || v < 1 || T < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(l)), $.height = Math.max(1, Math.round(u));
    const K = $.getContext("2d");
    return K ? (y.wrapOffsets.forEach((I) => {
      K.save(), K.translate(y.centerX + I, y.centerY), K.rotate(y.rotationRad), K.scale(y.scale, y.scale), K.drawImage(
        S,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), K.restore();
    }), t.set(x, { revision: w, source: $ }), { source: $, revision: w }) : null;
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
function jM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function HM(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function GM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function l(w, x, N, S) {
    if (!w || typeof S != "function" || N.settled) return;
    let v = r.get(w);
    v || (v = /* @__PURE__ */ new Map(), r.set(w, v));
    const T = v.get(x);
    if ((T == null ? void 0 : T.entry) === N) {
      T.callback = S;
      return;
    }
    a(T);
    const $ = { owner: w, key: x, entry: N, callback: S };
    v.set(x, $), N.listeners.add($);
  }
  function u(w, x) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !x && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(w.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [x, N] of n) {
        if (n.size <= w) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function b(w, x, N, S = null) {
    const v = String(x || ""), T = String(N || "");
    if (!v || !T) return null;
    let $ = n.get(v);
    if ($)
      n.delete(v), n.set(v, $);
    else {
      d(o - 1);
      const I = e || globalThis.Image;
      if (typeof I != "function") return null;
      const R = new I();
      $ = { key: v, image: R, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, $), R.onload = () => u($, !0), R.onerror = () => u($, !1), R.src = T;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || l(w, v, $, S), $.image;
  }
  function y(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: b, disposeOwner: y };
}
const Da = /* @__PURE__ */ new WeakMap();
function Oy(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Da.get(e);
  r || (r = [], Da.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const l = Da.get(e);
    if (!l) return;
    const u = l.indexOf(o);
    u >= 0 && l.splice(u, 1), l.length === 0 && Da.delete(e);
  };
}
function ii(e, ...t) {
  const n = Da.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const ll = Object.freeze({
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
}), Fy = "PanoramaSuite.Editor.ViewControls", KM = {
  id: Fy,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ll).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function BM(e) {
  return Object.hasOwn(ll, e) ? ll[e] : ll.default;
}
function WM(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const l = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (l == null ? void 0 : l.action) ?? null;
}
function UM(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Ll = "state_json";
function oi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function YM(e) {
  var l, u;
  const t = oi(e, Ll);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = I0(n, {
    coverage: (l = oi(e, "coverage")) == null ? void 0 : l.value
  }), o = My(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function gd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = oi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var l, u, d, b, y, w, x, N, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (S = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || S.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function XM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Sm(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function qM(e) {
  var y, w, x, N, S, v;
  if (!e) return;
  const t = oi(e, "coverage"), n = oi(e, "bg_color"), r = oi(e, Ll), o = oi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), l = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && XM(a) && (Sm(l) || l === ""))) return;
  let b = "360";
  if (Sm(l))
    try {
      b = String(Hn((y = JSON.parse(l)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (w = t.callback) == null || w.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = l, (N = r.callback) == null || N.call(r, l), o && (o.value = u, (S = o.callback) == null || S.call(o, u)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function cl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, l;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function pf(e, t, n) {
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
async function JM(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function La(e, t, n) {
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
async function Ty(e, t = {}) {
  var r;
  await JM(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function ZM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Ty(e), n ? n.apply(this, r) : this.value;
  };
}
function QM(e) {
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
function eN(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ku(e, {
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
    const w = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === w) return;
    QM(y), gd(y, t), cl(y, Ll);
    const x = oi(y, Ll);
    if (ZM(y, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (v) => {
        var $;
        const T = S ? S(v) : void 0;
        return ($ = y.setDirtyCanvas) == null || $.call(y, !0, !1), T;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const S = oi(y, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (N = S.callback) == null || N.call(S, "#00ff00")), pf(y, r, () => o(y, "stickers")), u && (a(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && cl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
      return;
    }
    pf(y, r, () => o(y, "cutout")), l(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && cl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[y];
    e.prototype[y] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && YM(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && qM(this);
      const N = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && b(this), y === "onAdded" && N && ii(this, "attach"), x;
    };
  }
}
function tN(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return eN(this), r;
  };
}
function nN(e, {
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
    gd(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    pf(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && cl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function rN({
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
    settings: [KM],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && ku(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && ku(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && ku(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), Ml(y) && tN(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      gd(d, e), Ml(b) && nN(d, { app: e, openEditor: t, attachPreview: o, requestFrame: l });
    }
  };
}
const iN = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Er(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : iN.test(String(e.name || "")) : !1;
}
function yd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Er(n)) : !1;
}
function oN(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, w;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (yd(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((w) => Er(w));
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
async function Ra(e, t = {}) {
  var l, u, d, b;
  if (!Er(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (l = globalThis.URL) == null ? void 0 : l.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((w, x) => {
      const N = new n();
      N.onload = () => w(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
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
async function Yi(e, { fetchApi: t } = {}) {
  if (!Er(e)) throw new TypeError("A supported image file is required.");
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
const km = /* @__PURE__ */ new WeakSet(), Mm = /* @__PURE__ */ new WeakSet();
let Nm = 0;
function hf(e) {
  if (!e || typeof e != "object" || Mm.has(e)) return e;
  const t = String(e.type || "preview");
  return Nm += 1, e.type = `${t}:pano-${Nm}`, Mm.add(e), e;
}
function Rl(e) {
  if (!e || typeof e != "object" || km.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, km.add(e), e;
}
function Dy(e, t) {
  var r, o;
  if (!t || ((o = (r = Rl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function aN({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Tt } = Xs;
Pk((e) => Oi(e.id));
Ak(Gt);
const bd = GM(), { linkedVideoFile: sN } = iy({ app: Tt, api: Gt });
function mf() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Xs == null ? void 0 : Xs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const lN = "pano_suite.ui_settings.v1", cN = 120, uN = 2048;
function Pm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(lN)) || "").trim();
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
function fN() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ia(e) {
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
function dN() {
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
function gf(e) {
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
function Ly(e) {
  const t = gf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function pN(e, t, n) {
  Ly(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function yf(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function vd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ry(e) {
  return Ml(vd(e));
}
function Am(e = null) {
  var a, l;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((l = (a = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : l.name) || "");
  return [t, r, n, o].join("|");
}
function Vy(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = yf(e);
      this.activeBackend = a;
      const l = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && l === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && ul(e), i2(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = yf(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ul(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      ul(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function hN(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ul(e, t = {}) {
  var r, o, a, l, u;
  if (!e) return;
  bf.unregister(e), hN(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const y = String((b == null ? void 0 : b.name) || ""), w = String((b == null ? void 0 : b.type) || ""), x = mf();
      return y === x || w === x || y === "pano_preview" || w === "pano_preview" ? !0 : y === "preview" && w === "pano_preview";
    }).forEach((b) => DN(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function mN(e, t = "#00ff00") {
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
function gN(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Zo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Dn(e) {
  var u, d;
  const t = gN(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = Zo(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = Zo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const l = e.__panoSceneStateV2 && typeof t == "string" ? E0(t, { backgroundColor: r, coverage: o, active: L0(e) }) : mN(t, r);
  return l.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: l }, l;
}
function Zo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function yN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function $y(e, t, n = null) {
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
  return !r && n != null && (r = yN(e == null ? void 0 : e.graph, n)), r;
}
function bN(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function zy(e, t = []) {
  const n = bN(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Fi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Cm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Vl(e, t) {
  const n = Cm(e), r = Cm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function vN(e, t) {
  var n;
  return $y(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function _N(e, t = Fi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = zy(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  return Tk(e, l, vN);
}
const bf = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Gt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, w, x;
        if (!a) return;
        const l = Vl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !l || !l && ![..._N(a)].some((N) => Vl(r, N)) || ry(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (jy(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Gt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Gt) != null && e.removeEventListener) || (Gt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function $l(e) {
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
  return typeof ((a = Gt) == null ? void 0 : a.apiURL) == "function" ? Gt.apiURL(o) : o;
}
function wN(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function xN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function SN(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function kN(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (wN(t)) return [t];
  const { filename: n, subfolder: r } = xN(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => $l({
    filename: n,
    subfolder: r,
    type: a
  }));
  return SN([...o, t]);
}
function MN(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? $l({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Oi(e) {
  const t = Tt == null ? void 0 : Tt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Vl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const l of a)
      if (Vl(l, o)) return t[l];
  }
  return null;
}
function Wa(e, t, n = null) {
  const r = n || Oi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Kn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Kn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return $l({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Kn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : $l(e);
}
function zl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Mu(e) {
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
function _d(e, t) {
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
function NN(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((l) => t.push(l));
  }, o = (a, l = 0) => {
    !a || l > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, l + 1), o(a.ui, l + 1), o(a.data, l + 1), o(a.result, l + 1));
  };
  return o(e, 0), t;
}
function PN(e, t) {
  try {
    e.__panoOwnOutputRev = jM(e.__panoOwnOutputRev);
    const n = NN(t);
    let r = "";
    for (const o of n)
      if (r = Kn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), _d(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Qo(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function AN(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!vn(e, "background"))
    return Qo(e), null;
  const o = Oi(r), a = sd(o, t, Kn);
  if (!a)
    return Qo(e), null;
  const l = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = _d(a, l), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  Qo(e);
  const y = Dk({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function CN(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = zy(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), l = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of l) {
    const x = n[w], N = e.graph ? e.getInputLink(w) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const S = N.origin_id, v = $y(e, w, S);
    if (!v) continue;
    const T = Number(N.origin_slot ?? 0), $ = Oi((v == null ? void 0 : v.id) ?? S), K = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (K.length) {
      const V = [];
      T >= 0 && T < K.length && V.push(K[T]), V.push(...K);
      for (const G of V.filter((Q) => !al(Q))) {
        const Q = Kn(G);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: `${Q}&pano_src=${cf($)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Tt == null ? void 0 : Tt.getNodeImageUrls) == "function" ? Tt.getNodeImageUrls(v) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const V = [];
      T >= 0 && T < I.length && V.push(I[T]), V.push(...I);
      for (const G of V) {
        const Q = Kn(G);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const R = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (R.length) {
      const V = [];
      T >= 0 && T < R.length && V.push(R[T]), V.push(...R);
      for (const G of V) {
        const Q = Kn(G);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const F = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image");
    if (F) {
      let V = Kn(F.value);
      if (V && !V.includes("/") && !V.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (V = Gt.apiURL(`/view?filename=${encodeURIComponent(V)}&type=input&subfolder=`)), V)
        return String((x == null ? void 0 : x.name) || ""), { src: V, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = vn(e, "background") ? Oi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = Kn(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function IN(e, t = [], n = {}) {
  const r = CN(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = kN(o);
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
  const x = () => {
    var S, v, T, $;
    if (w += 1, w >= a.length) {
      if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          ($ = (T = e.__panoLinkedInputImageCache) == null ? void 0 : T.delete) == null || $.call(T, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[w];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, S, v;
    ((S = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : S.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (N) => {
    var S, v, T, $;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        ($ = (T = e.__panoLinkedInputImageCache) == null ? void 0 : T.delete) == null || $.call(T, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), l && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function EN(e, t = [], n = null, r = {}) {
  const o = IN(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function jy(e) {
  var t, n;
  if (e) {
    bd.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Qo(e), e.__panoWrappedErpCache = null;
  }
}
function ON(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Qo(e), e.__panoWrappedErpCache = null;
  }
}
function Hy(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function js(e, t, n = "") {
  const r = Hy(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < cN ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Im(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), l = n / o, u = r / a, d = Math.min(l, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function FN(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), l = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || l <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, w = o + (l - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, w, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, w + b * 0.5 + 0.5), e.restore();
}
function Nu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function TN(e) {
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
function DN(e, t) {
  return Dy(e, t);
}
function ns(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = MN(n);
  if (!a && (r != null && r.external)) {
    if (!vn(e, "external-sticker")) return null;
    const N = Oi(e == null ? void 0 : e.id), S = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const v of Array.isArray(S) ? S : [S])
      if (a = Kn(v), a) break;
  }
  if (!a) return null;
  const l = Wa(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(l ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? _d(a, d) : a, y = HM(a, u, d);
  return bd.get(e, y, b, (N, S) => {
    var v, T;
    S && (r != null && r.external && e.__panoOutputFromRun && ii(e, "image-loaded"), (T = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || T.call(v));
  }) || null;
}
function LN(e, t) {
  var w, x, N, S;
  const n = jN(e, t), r = HN(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
    o.filter((v) => v && typeof v == "object").map((v) => [String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim(), Number((v == null ? void 0 : v.z_index) || 0)])
  ), l = n ? r.map((v) => {
    const T = n.getGroupDisplayCanvas(v);
    return T ? {
      id: `paint_group:${v}`,
      source: T,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${v}`,
      zIndex: Number(a.get(v) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (S = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || S.call(N, []), l;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = zM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, T;
    return (T = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : T.call(v);
  });
  const d = RM(t == null ? void 0 : t.output_preset), b = u.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((v) => {
    const T = e.__panoRasterObjectSurfaceCache.get(
      v,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return T ? {
      id: `raster:${String((v == null ? void 0 : v.id) || "")}`,
      source: T.source,
      revision: T.revision,
      zIndex: Number((v == null ? void 0 : v.z_index) || 0),
      opacity: 1,
      visible: (v == null ? void 0 : v.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...l, ...y];
}
function RN(e, t, n, r) {
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
  const o = $N(e, t, r);
  return o || null;
}
function VN(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), l = (t == null ? void 0 : t.ds) || ((x = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : x.ds);
  if (!a || !l) return null;
  const u = Number(l.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(l.offset) ? l.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function $N(e, t, n) {
  var o, a;
  const r = VN(t, n || (Tt == null ? void 0 : Tt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function zN(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function jN(e, t) {
  var b, y, w, x, N, S, v, T, $, K, I, R;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const l = zN(e, t), u = `${l.width}x${l.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = qu(l), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((T = e.__panoPreviewPaintRevision) == null ? void 0 : T.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function HN(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function GN(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function KN(e, t, n) {
  const r = hd(t, n);
  r.visible && pd(e, r.boundaryEdges, { selected: !1 });
}
function BN(e, t, n) {
  const r = hd(t, n);
  r.visible && (e.save(), pd(e, r.boundaryEdges, { selected: !0 }), Ey(e, r, { accent: EM(t) }), e.restore());
}
function vf(e, t, n) {
  return B0(Ol(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function jl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? oa;
}
function WN(e) {
  return [vn(e, "background") ? sd(Oi(e.id), ["pano_input_videos"], Kn) : "", sN(e, Fi)];
}
function UN(e) {
  var a;
  if (!vn(e, "external-sticker")) return null;
  const t = Oi(e.id), n = Wa(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Kn), meta: n };
  const o = sd(t, ["pano_sticker_input_videos"], Kn);
  return o ? { src: o, meta: n } : null;
}
function YN({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Em(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: co({ ...t, painting: null }) });
  const r = (l) => {
    var d;
    if (l.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = ns(e, l.id, T0(l.source), { external: l.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (l.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), w = sy(b.playback.stickerMedia, u);
        return y ? { media: y, revision: Mu(y), source: w } : null;
      }
    } else {
      const b = l.type === "external_image" || l.source_kind === "external_image", y = String(l.asset_id || "") || (b ? String(l.id || "") : "");
      u = ns(e, y, (d = t.assets) == null ? void 0 : d[l.asset_id], { external: b });
    }
    return zl(u) ? { media: u, revision: Mu(u) } : null;
  }, o = LN(e, t).filter((l) => l.visible !== !1).map((l) => ({ id: l.id, media: l.source, revision: l.revision, opacity: l.opacity, zIndex: l.zIndex }));
  return {
    background: zl(n) ? { media: n, revision: Mu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: W0(e.__panoSurfaceScene.sceneState, jl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function XN(e, t, n) {
  var R, F, V, G, Q, _e, D;
  const r = String(e.__panoPreviewMode || "stickers");
  Hy(e, r);
  const o = Dn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (V = (F = (R = e.__panoCutoutNodeSurface) == null ? void 0 : R.session) == null ? void 0 : F.refresh) == null || V.call(F)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Q = (G = e.__panoStickersNodeSurface) == null ? void 0 : G.session) == null ? void 0 : Q.refresh) == null || _e.call(Q));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== u) && (t.width = l, t.height = u);
  const b = { x: 0, y: 0, w: l, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, u);
  const y = (e.__panoSurfacePlayback ? YN(e.__panoSurfacePlayback) : AN(e, ["pano_input_videos"], () => {
    var C, se;
    return (se = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : se.call(C);
  })) || EN(
    e,
    Fi,
    () => {
      var C, se;
      return (se = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : se.call(C);
    },
    { preserveReadyWhilePending: !1 }
  ), w = zl(y);
  let x = null;
  const N = (C, se) => {
    x || (x = Em(e, o, y));
    const ce = n.render({ width: C.w, height: C.h, camera: se, ...x });
    return ce && d.drawImage(ce.canvas, ce.x, ce.y, ce.width, ce.height, C.x, C.y, C.w, C.h), !!ce;
  };
  if (r === "cutout") {
    const C = TN(o), se = GN(y), ce = C ? J(ci(C).aspect, 0.1, 10) : w ? J(Number(se.width / se.height), 0.05, 20) : 1, fe = fd(b, ce);
    e.__panoCutoutNodeFrame = fe;
    let U = "none";
    const X = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (C)
      if (y && !w)
        U = "loading";
      else if (w) {
        const H = nM({ width: l, height: u }, fe, C);
        [
          !H.fallback || N(H.fallback.rect, il(H.fallback.shot)),
          N(H.rect, il(H.shot)),
          !H.fallback || N(fe, il(C))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const H = e.__panoLastCutoutShot;
      H ? (e.__panoPreviewView = ky(H, { width: l, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? N(b, Ol(e.__panoPreviewView, l, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    w || n.release(), n.failed && U === "loading" && (U = "none"), C && (e.__panoLastCutoutShot = { ...C }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, u), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), U === "loading" ? (Nu(e, !1), js(e, !0, X)) : U === "empty" ? (Nu(e, !0), js(e, !1, "")) : (Nu(e, !1), js(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!y || w) && (x = Em(e, o, y), !x.background && !x.layers.length ? (n.release(), S = !0) : S = N(b, Ol(e.__panoPreviewView, l, u)));
  const v = !S && !n.failed;
  js(e, v, v ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), v && FN(d, b, Im(t, b));
  const T = vf(e, l, u);
  !y && S && qN(d, T, Im(t, b));
  const $ = String(((D = o == null ? void 0 : o.active) == null ? void 0 : D.selected_sticker_id) || ""), K = uf(o, jl(e)), I = S ? K.find((C) => String((C == null ? void 0 : C.id) || "") === $ && (C == null ? void 0 : C.visible) !== !1) : null;
  S && K.filter((C) => C !== I && (C == null ? void 0 : C.visible) !== !1 && (C.external || C.source_kind === "external_image")).filter((C) => !zl(ns(e, C.id, null, { external: !0 }))).forEach((C) => KN(d, C, T)), I && BN(d, I, T);
}
function Om(e, t, n, r, o = 1) {
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
function qN(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Vn(b, u));
    Om(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Vn(u, b));
    Om(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
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
function _f(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function JN(e, t, n = 20) {
  var l;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (l = t.getBoundingClientRect) == null ? void 0 : l.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Jn(e, t) {
  return JN(e, t) ? !1 : (_f(e), !0);
}
function Fm() {
  var n;
  const e = (n = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function ZN(e) {
  var n;
  if (!e) return;
  const t = (n = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function QN(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Ly(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function e2(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, l;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (l = e.setDirtyCanvas) == null || l.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Tm(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && t2(e, 180, t);
    }
  };
}
function t2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Va(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const n2 = /* @__PURE__ */ new WeakMap();
function Gy(e, t) {
  return ry(n2, e, t) ? !1 : (PN(e, t), jy(e), Va(e), !0);
}
async function r2(e) {
  var n, r;
  const t = await Ok(e, Tt, Gt);
  t && (Gy(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function i2(e, t = {}) {
  var mo;
  const n = t.__allowStandalone === !0, r = Ry(e);
  if (r && !n) {
    vd(e);
    return;
  }
  r && QN(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Am(e)
  }, u = "dom", d = l.signature || Am(e);
  if (Number(e.__panoRebindGeneration || 0), yf(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, gf(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (mo = e.__panoDomPreview) != null && mo.widget || (e.__panoLegacyPreviewHooked && ul(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, w = b ? 0 : Zk, x = document.createElement("div");
  if (dN(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
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
    const z = Rl(hf(
      e.addDOMWidget(mf(), "preview", x, Tm(e, null))
    ));
    Va(e), e.__panoDomPreview = { widget: z, root: x, requestDraw: () => {
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
  const T = i0(x), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), pN(e, 120, 120), Va(e);
  let K = null;
  try {
    e2(e, y, () => {
      var z, me;
      return (me = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : me.call(z);
    }), K = Rl(hf(e.addDOMWidget(
      mf(),
      "preview",
      x,
      Tm(
        e,
        () => {
          var z, me;
          return (me = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : me.call(z);
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
  }, R = () => {
    I.destroyed || (I.needsDraw = !0, !I.inTick && !I.raf && (I.raf = requestAnimationFrame(Un)));
  }, F = Y0(R), V = /* @__PURE__ */ sa(o ? { ...by(Dn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...xy(Dn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let G = null;
  if (o && e.__panoSceneStateV2) {
    const [z, me] = [0, 1].map(() => {
      const Ee = document.createElement("video");
      return Ee.playsInline = !0, Ee.preload = "auto", Ee.crossOrigin = "anonymous", Ee.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Ee), Ee;
    }), Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const Ie = document.createElement("canvas");
    Ie.__panoFrameIdx = 0;
    const je = qk({
      video: z,
      stickerVideo: me,
      createImage: (Ee, ze) => {
        const mt = new Image();
        return mt.onload = ze, mt.onerror = ze, mt.src = Ee, mt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ee) => requestAnimationFrame(Ee),
        cancelFrame: (Ee) => cancelAnimationFrame(Ee)
      },
      readState: () => Dn(e),
      onFrame: R,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var ze;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Ee = Math.min(1, uN / z.videoWidth);
        Oe.width = Math.round(z.videoWidth * Ee), Oe.height = Math.round(z.videoHeight * Ee), (ze = Oe.getContext("2d")) == null || ze.drawImage(z, 0, 0, Oe.width, Oe.height), Oe.__panoFrameIdx += 1, R();
      },
      onStickerCapture: () => {
        var Ee;
        me.videoWidth > 0 && me.videoHeight > 0 && (Ie.width = me.videoWidth, Ie.height = me.videoHeight, (Ee = Ie.getContext("2d")) == null || Ee.drawImage(me, 0, 0), Ie.__panoFrameIdx += 1, R());
      },
      onChange: () => {
        V.playing = je.playing, R();
      }
    });
    G = { playback: je, video: z, still: Oe, stickerVideo: me, stickerStill: Ie, stickerSource: "" }, e.__panoSurfacePlayback = G;
  }
  const Q = () => {
    var mt;
    const { playback: z, still: me, stickerStill: Oe } = G, Ie = Xk(N, !!((mt = e.flags) != null && mt.collapsed)), je = z.source, Ee = Ie ? UN(e) : null, ze = z.follow({
      shown: Ie,
      sources: Ie ? WN(e) : [],
      state: Dn(e),
      sticker: Ee
    });
    ((Ee == null ? void 0 : Ee.src) || "") !== G.stickerSource && (G.stickerSource = (Ee == null ? void 0 : Ee.src) || "", Oe.width = 0), z.source !== je && (me.width = 0, me.__panoFrameIdx = 0), V.playable = ze, V.playing = z.playing;
  }, _e = () => G == null ? void 0 : G.playback.pause();
  let D = null;
  const C = (o ? Uk : iM)({
    readState: () => Dn(e),
    publishLiveState: (z) => {
      z ? (D = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === D && (e.__panoLiveStateOverride = null), D = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, R();
    },
    commitState: (z) => {
      var Ie, je, Ee, ze;
      const me = Zo(e, "state_json");
      if (!me) return;
      R0(e, z.active);
      const Oe = V0(e, z);
      $0(e, Oe, String(me.value ?? "")) || (me.value = Oe, (Ie = me.callback) == null || Ie.call(me, Oe), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (ze = (Ee = e.graph) == null ? void 0 : Ee.setDirtyCanvas) == null || ze.call(Ee, !0, !0));
    },
    onChange: (z) => Object.assign(V, z)
  }), ce = o ? Oy(e, (z = "sync", me = null) => {
    var un;
    if (!o || !e.graph || !C || C.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const fn = vn(e, "external-sticker"), Ti = Dn(e).stickers.find((Mt) => Mt.source.kind === "port");
      return C.apply({
        type: "sync-port",
        value: gy(e, {
          pose: fn ? Wa(e, "pano_sticker_input_pose", me) : null,
          image: Ti ? ns(e, Ti.id, null, { external: !0 }) : null
        })
      });
    }
    const Oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((fn) => String((fn == null ? void 0 : fn.name) || "") === "sticker_image") : -1, Ie = Oe >= 0 ? ((un = e.getInputLink(Oe)) == null ? void 0 : un.id) ?? null : null;
    if (Ie == null)
      return C.apply({ type: "sync-external", value: { connected: !1 } });
    if (!vn(e, "external-sticker")) return !1;
    const je = Wa(e, "pano_sticker_input_pose", me), Ee = Array.isArray(je) ? je[0] : je, ze = String(Wa(e, "pano_sticker_input_state_hash", me) ?? ""), mt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Lt = Dn(e), hn = (Array.isArray(Lt == null ? void 0 : Lt.stickers) ? Lt.stickers : []).find((fn) => String((fn == null ? void 0 : fn.id) || "") === "sticker_image_1"), rn = ns(e, "sticker_image_1", null, { external: !0 }), di = Ee && typeof Ee == "object" ? Ee : hn || { yaw_deg: mt.yaw, pitch_deg: mt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return C.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: ze,
        pose: di,
        imageWidth: Number((rn == null ? void 0 : rn.naturalWidth) || (rn == null ? void 0 : rn.width) || 0),
        imageHeight: Number((rn == null ? void 0 : rn.naturalHeight) || (rn == null ? void 0 : rn.height) || 0)
      }
    });
  }) : () => {
  };
  let fe = 0;
  const U = async (z) => {
    if (!o || !C || !Er(z)) return !1;
    _e();
    const me = `asset_${Math.random().toString(16).slice(2, 10)}`, Oe = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    fe += 1, V.importing = !0;
    const je = La(e, `add:${me}`, async () => {
      const Ee = await Ra(z), ze = await Yi(z, {
        fetchApi: (mt, Lt) => Gt.fetchApi(mt, Lt)
      });
      return Ae(), C.apply({
        type: "add-sticker",
        value: {
          stickerId: Oe,
          assetId: me,
          asset: ze,
          imageWidth: Ee.width,
          imageHeight: Ee.height,
          yaw_deg: Number(Ie.yaw || 0),
          pitch_deg: Number(Ie.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      fe = Math.max(0, fe - 1), V.importing = fe > 0, R();
    }
  };
  let X = null, H = null, P = null, ee = !1;
  const Y = () => {
    var z;
    return P && (clearTimeout(P), P = null), ee ? (ee = !1, ((z = C == null ? void 0 : C.commitGesture) == null ? void 0 : z.call(C)) ?? !1) : !1;
  }, Ae = () => {
    var Ie, je, Ee;
    const z = Y(), me = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    if (X = null, H = null, me != null) {
      try {
        (Ie = S.hasPointerCapture) != null && Ie.call(S, me) && ((je = S.releasePointerCapture) == null || je.call(S, me));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Oe = ((Ee = C == null ? void 0 : C.commitGesture) == null ? void 0 : Ee.call(C)) ?? !1;
    return z || Oe;
  }, Fe = () => {
    var Ie, je, Ee;
    const z = Y(), me = X == null ? void 0 : X.pointerId;
    if (X = null, me != null) {
      try {
        (Ie = S.hasPointerCapture) != null && Ie.call(S, me) && ((je = S.releasePointerCapture) == null || je.call(S, me));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Oe = ((Ee = C == null ? void 0 : C.cancelGesture) == null ? void 0 : Ee.call(C)) ?? !1;
    return z || Oe;
  }, St = () => Ae();
  C && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(St));
  let ht = null, sn = !1;
  if ($ && C)
    try {
      md(), ht = jf(o ? IM : xM, {
        model: V,
        onAction: (z) => {
          var Ie, je;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ae(), G == null || G.playback.toggle();
            return;
          }
          if (_e(), (z == null ? void 0 : z.type) === "open-editor") {
            Ae(), o || (V.aspectOpen = !1), (Ie = e.__panoOpenEditor) == null || Ie.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              U(z.file);
              return;
            }
            C.apply(z) && R();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            V.aspectOpen = !V.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            V.aspectOpen = !1;
            return;
          }
          let me = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Ee = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            me = {
              ...z,
              ...eM(Ee, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Ee = lo(Dn(e));
            Ee && (e.__panoPreviewView = ky(Ee, {
              width: S.width,
              height: S.height
            }));
          }
          const Oe = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          V.aspectOpen = !1, C.apply({ ...me, safeRect: Oe }) && R();
        }
      }), ht.mount($), sn = !0;
    } catch {
      ht = null, sn = !1;
    }
  const it = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    G && Q(), R();
  }) : null;
  it == null || it.observe(N);
  const Un = (z) => {
    var Oe, Ie;
    I.raf = 0, I.inTick = !0;
    let me = !1;
    try {
      me = It.stepInertia(z), (I.needsDraw || me) && (I.needsDraw = !1, G && Q(), (Oe = e.flags) != null && Oe.collapsed || XN(e, S, F), V.viewUnavailable = F.failed);
    } finally {
      I.inTick = !1;
    }
    (me || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(Un)), fN() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, gf(e), Ia(x), Ia(N), Ia(S), Ia(x.parentElement), Ia((Ie = x.parentElement) == null ? void 0 : Ie.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, It = Bf({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || S.clientWidth || 0)),
        h: Math.max(1, Number(z.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = Pm();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      R();
    }
  }), Zt = o ? N : x, ln = (z) => {
    const me = S.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - me.left) * (S.width / Math.max(1, me.width)),
      y: (Number(z.clientY) - me.top) * (S.height / Math.max(1, me.height))
    };
  }, fi = (z) => {
    var Ie, je;
    if (!o || !a) return;
    const me = Dn(e), Oe = xm(
      uf(me, jl(e)),
      String(((Ie = me == null ? void 0 : me.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      ln(z),
      vf(e, S.width, S.height)
    );
    if (!Oe) {
      S.style.cursor = "grab";
      return;
    }
    if (((je = Oe.item) == null ? void 0 : je.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Oe.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (z) => {
    var mt, Lt, hn, rn, di, go, un, fn, Ti, Mt, jr;
    if (!Jn(z, Zt) || z.button !== 0) return;
    if (!o) {
      const In = lo(Dn(e)), or = e.__panoCutoutNodeFrame;
      if (!In) {
        (mt = x.focus) == null || mt.call(x, { preventScroll: !0 }), (Lt = S.setPointerCapture) == null || Lt.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (In.locked === !0 || !or || !C) return;
      const yo = ln(z);
      let ar;
      if (z.shiftKey) {
        const Hr = Ny({
          frame: or,
          point: yo,
          startRollDeg: Number(In.roll_deg ?? In.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Hr) return;
        ar = { kind: "roll", pointerId: z.pointerId, rollGesture: Hr };
      } else {
        const Hr = ((hn = Dn(e)) == null ? void 0 : hn.ui_settings) || Pm();
        ar = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: yo,
          startShot: { ...In },
          focalPx: ro(or, In),
          invertX: Hr.invert_view_x === !0,
          invertY: Hr.invert_view_y === !0
        };
      }
      Ae(), (rn = x.focus) == null || rn.call(x, { preventScroll: !0 }), (di = S.setPointerCapture) == null || di.call(S, z.pointerId), S.style.cursor = "grabbing", C.beginGesture(), X = ar;
      return;
    }
    if (!a) return;
    const me = ln(z), Oe = Dn(e), Ie = String(((go = Oe == null ? void 0 : Oe.active) == null ? void 0 : go.selected_sticker_id) || ""), je = vf(e, S.width, S.height);
    (un = x.focus) == null || un.call(x, { preventScroll: !0 });
    const Ee = () => xm(uf(Oe, jl(e)), Ie, me, je);
    let ze = Ee();
    if (ze && (G != null && G.playback.playing) && (_e(), ze = Ee()), ze && C) {
      if (It.stopMotion(), Ae(), String(((fn = ze.item) == null ? void 0 : fn.id) || "") !== Ie && C.apply({ type: "select-sticker", id: ze.item.id }), ((Ti = ze.item) == null ? void 0 : Ti.locked) === !0) {
        R();
        return;
      }
      const In = me, or = ze.geometry.center;
      H = {
        active: !0,
        kind: ze.hit.kind,
        pointerId: z.pointerId,
        startPoint: In,
        startCenter: { ...or },
        startSticker: { ...ze.item },
        startDistance: Math.max(1, Math.hypot(In.x - or.x, In.y - or.y)),
        startAngle: Math.atan2(In.y - or.y, In.x - or.x),
        projection: je
      }, C.beginGesture(), (Mt = S.setPointerCapture) == null || Mt.call(S, z.pointerId), S.style.cursor = ze.hit.kind === "rotate" ? "grabbing" : ze.hit.kind === "move" ? "move" : ze.hit.cursor, R();
      return;
    }
    (jr = S.setPointerCapture) == null || jr.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
  }), S.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Jn(z, Zt), It.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      if (Jn(z, Zt), X.kind === "pan") {
        const Oe = ln(z);
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
      const me = Py(X.rollGesture, ln(z), z);
      if (!me) return;
      X.rollGesture = me.gesture, C.updateGesture({ type: "set-roll", value: me.rollDeg });
      return;
    }
    if (!H && !It.state.drag.active) {
      fi(z);
      return;
    }
    if (H) {
      if (H.pointerId !== z.pointerId || !C) return;
      Jn(z, Zt);
      const me = ln(z);
      let Oe = H.startSticker;
      if (H.kind === "move")
        Oe = TM(
          H.startSticker,
          {
            x: H.startCenter.x + me.x - H.startPoint.x,
            y: H.startCenter.y + me.y - H.startPoint.y
          },
          H.projection
        );
      else if (H.kind === "scale") {
        const Ie = Math.hypot(me.x - H.startCenter.x, me.y - H.startCenter.y);
        Oe = DM(H.startSticker, H.startDistance, Ie);
      } else if (H.kind === "rotate") {
        const Ie = Math.atan2(me.y - H.startCenter.y, me.x - H.startCenter.x);
        Oe = LM(H.startSticker, H.startAngle, Ie, z.shiftKey === !0);
      }
      C.updateGesture({ type: "set-transform", value: Oe }), R();
      return;
    }
    !a || !It.state.drag.active || (Jn(z, Zt), It.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const L = () => {
    var me, Oe;
    if (!X && !H) {
      if (!It.state.drag.active) return;
      It.endDrag(), S.style.cursor = "grab", R();
      return;
    }
    if (!C) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (H == null ? void 0 : H.pointerId);
    X = null, H = null;
    try {
      (me = S.hasPointerCapture) != null && me.call(S, z) && ((Oe = S.releasePointerCapture) == null || Oe.call(S, z));
    } catch {
    }
    C.cancelGesture(), S.style.cursor = "grab", R();
  }, W = (z, me = !1) => {
    var Oe, Ie, je, Ee;
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Jn(z, Zt), (Oe = S.releasePointerCapture) == null || Oe.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R();
        return;
      }
      if (X.pointerId !== z.pointerId || !C) return;
      Jn(z, Zt), X = null, (Ie = S.releasePointerCapture) == null || Ie.call(S, z.pointerId), S.style.cursor = "grab", me ? C.cancelGesture() : C.commitGesture(), fi(z), R();
      return;
    }
    if (H) {
      if (H.pointerId !== z.pointerId || !C) return;
      Jn(z, Zt), H = null, (je = S.releasePointerCapture) == null || je.call(S, z.pointerId), S.style.cursor = "grab", me ? C.cancelGesture() : C.commitGesture(), R();
      return;
    }
    !a || !It.state.drag.active || (Jn(z, Zt), (Ee = S.releasePointerCapture) == null || Ee.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), R());
  };
  S.addEventListener("pointerup", W), S.addEventListener("pointercancel", (z) => W(z, !0)), S.addEventListener("lostpointercapture", L), S.addEventListener("pointerleave", (z) => {
    !o && X || H || It.state.drag.active && W(z);
  });
  const q = (z) => {
    const me = document.activeElement;
    if (me !== x && !x.contains(me)) return;
    if (z.key === "Escape" && (X || H) && C) {
      L(), _f(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !C) return;
    const Oe = z.target, Ie = String((Oe == null ? void 0 : Oe.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || Oe != null && Oe.isContentEditable || V.canDelete === !0 && (_e(), Ae(), C.apply({ type: "delete-selected" }) && R(), _f(z));
  };
  window.addEventListener("keydown", q, !0);
  const ve = aN({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => ZN(z)
  }), ge = (z) => {
    var Oe, Ie, je, Ee, ze, mt;
    if (!Jn(z, Zt)) return;
    if (!o) {
      const Lt = lo(Dn(e));
      if (Lt && Lt.locked !== !0 && C) {
        const hn = xl(z);
        hn !== 0 && (ee || (Ae(), C.beginGesture(), ee = !0), C.updateGesture({
          type: "step-fov",
          direction: hn
        }) ? (P && clearTimeout(P), P = setTimeout(Y, 180), R()) : C.hasGestureChanges() || (C.cancelGesture(), ee = !1));
      } else if (!Lt) {
        const hn = Fm();
        It.applyWheelEvent(z) && R(), ve.schedule(hn);
      }
      (Oe = z.preventDefault) == null || Oe.call(z), (Ie = z.stopPropagation) == null || Ie.call(z), (je = z.stopImmediatePropagation) == null || je.call(z);
      return;
    }
    if (!a) return;
    const me = Fm();
    It.applyWheelEvent(z) && R(), (Ee = z.preventDefault) == null || Ee.call(z), (ze = z.stopPropagation) == null || ze.call(z), (mt = z.stopImmediatePropagation) == null || mt.call(z), ve.schedule(me);
  }, ye = o ? [N, S] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    ye.forEach((me) => me.addEventListener(z, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    S.addEventListener(z, (me) => Jn(me, Zt)), N.addEventListener(z, (me) => Jn(me, Zt));
  });
  const ke = Zo(e, "state_json");
  let Me = null, xe = null;
  ke && !ke.__panoPreviewPatchedCb && (Me = ke.callback, xe = (z) => {
    const me = Me ? Me(z) : void 0;
    return R(), me;
  }, ke.callback = xe, ke.__panoPreviewPatchedCb = xe);
  const de = Zo(e, "bg_color");
  let Ve = null, Ce = null;
  de && !de.__panoPreviewPatchedCb && (Ve = de.callback, Ce = (z) => {
    const me = Ve ? Ve(z) : void 0;
    return R(), me;
  }, de.callback = Ce, de.__panoPreviewPatchedCb = Ce);
  const $e = e.onRemoved, Be = e.onResize, h = e.onExecuted, Le = e.onDragOver, st = e.onDragDrop;
  let We = null;
  const Dt = () => {
    o && (V.dropActive = !0, We && clearTimeout(We), We = setTimeout(() => {
      We = null, V.dropActive = !1;
    }, 140));
  }, cn = o ? function(z) {
    return (Le ? Le.apply(this, arguments) : !1) === !0 ? !0 : yd(z == null ? void 0 : z.dataTransfer) ? (Dt(), !0) : !1;
  } : null, nn = o ? function(z) {
    var Ie;
    if ((st ? st.apply(this, arguments) : !1) === !0) return !0;
    const Oe = Array.from(((Ie = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Ie.files) || []).find((je) => Er(je));
    return Oe ? (We && clearTimeout(We), We = null, V.dropActive = !1, U(Oe), !0) : !1;
  } : null;
  o && (e.onDragOver = cn, e.onDragDrop = nn);
  const $t = o ? oN(x, {
    onActive: (z) => {
      if (z) {
        Dt();
        return;
      }
      We && clearTimeout(We), We = null, V.dropActive = !1;
    },
    onDrop: (z) => {
      U(z);
    }
  }) : () => {
  }, Yn = function(z) {
    e.__panoOutputFromRun = !0;
    const me = Gy(e, z);
    ii(e, me ? "executed" : "sync", z), R();
    const Oe = h ? h.apply(this, arguments) : void 0;
    return Va(e), Oe;
  };
  e.onExecuted = Yn;
  const Pe = e.onConnectionsChange, Et = function(z, me) {
    const Oe = cm(e, z, me, ad), Ie = cm(e, z, me, Fi), je = arguments, Ee = Pe ? Pe.apply(this, je) : void 0, ze = () => {
      I.destroyed || (Ie && ON(e), Oe && ii(e, "connection-change"), Va(e), R());
    };
    return ze(), queueMicrotask(ze), Ee;
  };
  e.onConnectionsChange = Et;
  const zr = function() {
    const z = Be ? Be.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, R(), z;
  };
  e.onResize = zr;
  const br = function() {
    return ho(), bf.unregister(this), $e ? $e.apply(this, arguments) : void 0;
  };
  e.onRemoved = br;
  const ho = () => {
    var z, me, Oe, Ie, je, Ee, ze, mt, Lt;
    I.destroyed = !0, (z = it == null ? void 0 : it.disconnect) == null || z.call(it), o ? Ae() : Fe(), S.removeEventListener("lostpointercapture", L), $t(), T(), window.removeEventListener("keydown", q, !0), (Oe = (me = e.__panoStateFlushers) == null ? void 0 : me.delete) == null || Oe.call(me, St), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ie = C == null ? void 0 : C.destroy) == null || Ie.call(C), (je = ht == null ? void 0 : ht.unmount) == null || je.call(ht), G && (G.playback.dispose(), G.video.remove(), G.stickerVideo.remove(), e.__panoSurfacePlayback === G && (e.__panoSurfacePlayback = null)), F.dispose(), e.__panoSurfaceScene = null, (ze = (Ee = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ee.dispose) == null || ze.call(Ee), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ce(), ve.dispose(), We && clearTimeout(We), We = null, bd.disposeOwner(e), Qo(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((mt = e.__panoCutoutNodeSurface) == null ? void 0 : mt.session) === C && (e.__panoCutoutNodeSurface = null), ((Lt = e.__panoStickersNodeSurface) == null ? void 0 : Lt.session) === C && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === zr && (e.onResize = Be), e.onExecuted === Yn && (e.onExecuted = h), e.onConnectionsChange === Et && (e.onConnectionsChange = Pe), xe && (ke == null ? void 0 : ke.callback) === xe && (ke.callback = Me), xe && (ke == null ? void 0 : ke.__panoPreviewPatchedCb) === xe && delete ke.__panoPreviewPatchedCb, Ce && (de == null ? void 0 : de.callback) === Ce && (de.callback = Ve), Ce && (de == null ? void 0 : de.__panoPreviewPatchedCb) === Ce && delete de.__panoPreviewPatchedCb, e.onDragOver === cn && (e.onDragOver = Le), e.onDragDrop === nn && (e.onDragDrop = st), e.onRemoved === br && (e.onRemoved = $e);
  };
  e.__panoDomRestore = ho, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = C && sn && !o ? { session: C, model: V } : null, e.__panoStickersNodeSurface = C && sn && o ? { session: C, model: V } : null, e.__panoDomPreview = {
    widget: K,
    root: x,
    canvas: S,
    requestDraw: R,
    state: I,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, bf.register(e), e.graph && ii(e, "attach"), R();
}
function Dm(e, t = {}) {
  Vy(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Lm(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Ry(e) && !n) {
    vd(e);
    return;
  }
  Vy(e).attach(t);
}
function o2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function a2(e, t = 1, n = am) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(l) ? l : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : am, w = Math.max(u, d), x = w > 0 ? Math.min(1, y / w) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function s2({
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
    var S, v, T;
    if (!l) {
      if (l = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", y), d())
        try {
          const $ = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (T = $ == null ? void 0 : $.catch) == null || T.call($, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const l2 = { class: "pano-preview-node-surface" }, c2 = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (re(), le("div", l2, [
      De(an, {
        icon: e.model.fullscreen ? Qe(Ne).fullscreen_close : Qe(Ne).fullscreen,
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
      e.model.viewUnavailable ? (re(), $r(dd, { key: 0 })) : ct("", !0)
    ]));
  }
}, Hs = 140, u2 = 180, Rm = 40, Pu = 10;
function Vm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function $m(e, t) {
  const n = Vm(e), r = Vm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function zm(e) {
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
  return typeof ((a = Gt) == null ? void 0 : a.apiURL) == "function" ? Gt.apiURL(o) : o;
}
function ea(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ea(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return zm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ea(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : zm(e);
}
function Ky(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function f2(e) {
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
function wf(e) {
  var o;
  const t = (o = mr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if ($m(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if ($m(a, n)) return t[a];
  return null;
}
function d2(e) {
  var r, o;
  const t = wf(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const l of a) {
        const u = ea(l);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function p2(e, t = "erp_image") {
  var N, S, v, T, $, K, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((R) => String((R == null ? void 0 : R.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((R, F) => String((R == null ? void 0 : R.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(F))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const l = (v = (S = (N = mr) == null ? void 0 : N.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : v.call(S, a), u = wf(a), d = wf(e == null ? void 0 : e.id), b = [
    (T = d == null ? void 0 : d.ui) == null ? void 0 : T.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    ($ = u == null ? void 0 : u.ui) == null ? void 0 : $.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const R of b)
    if (Array.isArray(R))
      for (const F of R) {
        const V = ea(F);
        if (V) return V;
      }
  let y = [];
  try {
    y = typeof ((K = mr) == null ? void 0 : K.getNodeImageUrls) == "function" ? mr.getNodeImageUrls(l) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const R of y) {
      const F = ea(R);
      if (F) return F;
    }
  if (l) {
    const R = Array.isArray(l == null ? void 0 : l.imgs) ? l.imgs : [];
    for (const F of R) {
      const V = ea(F);
      if (V) return V;
    }
  }
  const w = (I = l == null ? void 0 : l.widgets) == null ? void 0 : I.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image"), x = String((w == null ? void 0 : w.value) || "").trim();
  return x ? Gt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function Au(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function jm(e, t, n, r, o, a, l) {
  var b, y, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Ky(a) || n <= 1 || r <= 1) {
    Au(t, n, r);
    return;
  }
  if (l.failed) {
    Au(t, n, r);
    return;
  }
  const u = Number(((w = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = l.render({
    width: n,
    height: r,
    camera: Ol(o, n, r),
    background: { media: a, revision: f2(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Au(t, n, r);
}
function Hm(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class h2 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Y0(() => this.requestDraw()), this.controller = Bf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: J(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: J(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Hs}px`,
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
          return Hs;
        },
        getHeight() {
          return Hs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Rl(hf(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Hs, Number(a.minHeight || 0)),
            minWidth: Math.max(u2, Number(a.minWidth || 0))
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
      return md(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ sa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = s2({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = jf(c2, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = i0(n), t.addEventListener("pointerdown", (a) => {
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
      o2(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Ky(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Hm(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, y, w, x, N;
      const a = RN(this, n, r, o), l = t.getLegacyPreviewRect();
      if (!a || !Hm(a.x, a.y, l))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, l;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Pu * 2), n = Math.max(60, Number(((l = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : l[1]) || 0) - Rm - Pu);
    return { x: Pu, y: Rm, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), jm(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? U0 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = a2(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, l;
    const t = d2(this.node);
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
    const n = p2(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), jm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, l, u, d, b, y, w, x, N, S, v, T, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (l = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || l.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (w = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || w.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (N = this.root) == null ? void 0 : N.remove) == null || S.call(N);
    } catch {
    }
    try {
      Dy(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (T = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : T.find) == null ? void 0 : $.call(T, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function m2(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new h2(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function By(e, t, n) {
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
function wd(e) {
  return !!(e != null && e.prototype);
}
function rs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function g2(e, t = {}) {
  wd(e) || m2(e, {
    ...t,
    onOpen: rs(e, t.onOpen)
  });
}
function y2(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!wd(e)) {
    Lm(e, {
      ...r,
      onOpen: rs(e, t.onOpen)
    });
    return;
  }
  By(e, "stickers_node_preview", (o) => {
    Lm(o, {
      ...r,
      onOpen: rs(o, t.onOpen)
    });
  });
}
function b2(e, t = {}) {
  if (!wd(e)) {
    Dm(e, {
      ...t,
      onOpen: rs(e, t.onOpen)
    });
    return;
  }
  By(e, "cutout_preview", (n) => {
    Dm(n, {
      ...t,
      onOpen: rs(n, t.onOpen)
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
}, Xr = "pen";
function Gm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function v2(e = 80, t = null, n = 8) {
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
      const b = r.length, y = Math.max(0, b - l), w = o >= 0 ? Math.max(0, Math.min(o, y)) : y, x = r.slice(w, w + l), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - w));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: u
  };
}
function Gi(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function _2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function w2({
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
  var I, R;
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
    historyEntries: Array.from({ length: 8 }, (F, V) => ({ index: V, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const w = ((I = t.find((F) => o(e.paintColor, F.color))) == null ? void 0 : I.id) || "", x = !w, N = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((R = e.customPaintColor) == null ? void 0 : R.a) ?? 1))) * 100), v = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), T = e.brushSizes[v] ?? 10, $ = d(), K = Array.from({ length: 8 }, (F, V) => e.customPaintHistory[V] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
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
    historyEntries: K.map((F, V) => ({
      index: V,
      color: F ? { cssColor: r(F, 1) } : null
    })),
    sizeValue: T,
    sizeText: String(T),
    sizeFill: `${Math.max(0, Math.min(100, (T - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function x2({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function S2({
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
      disabled: !r || o === "stroke" || o === "camera" || a.length > 1,
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
function k2({
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
      const V = x(), G = w(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !V
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? N.eye : N.eye_dashed
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
        choices: ["1:1", "4:3", "3:2", "16:9"].map((V) => ({ value: V, label: V, active: d === V }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  const v = o.corners.map((V) => ({ x: Number(V == null ? void 0 : V.x), y: Number(V == null ? void 0 : V.y) })).filter((V) => Number.isFinite(V.x) && Number.isFinite(V.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const T = v.map((V) => V.x), $ = v.map((V) => V.y), K = Math.min(...T), I = Math.max(...T), R = Math.min(...$), F = Math.max(...$);
  return {
    visible: !0,
    left: (K + I) * 0.5,
    top: F + 18,
    items: S,
    anchor: { minX: K, maxX: I, minY: R, maxY: F }
  };
}
const M2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function N2(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: l, playing: u, label: d, audio: b = null, fpsLocked: y = !1 }) {
  const w = (S, v, T, $, K) => {
    const I = (R) => (r == null ? void 0 : r.owner) === S && r.lane === R ? r.frames.map((F) => F + K) : [];
    return {
      id: S,
      label: T,
      clip: $,
      selected: S === o,
      open: l.has(S),
      keyed: _S(v, t - K),
      keys: vS(v).map((R) => ({ frame: R.frame + K, full: R.full })),
      selectedFrames: I(null),
      lanes: po(v).map((R) => ({
        key: `${S}:${R}`,
        lane: R,
        label: M2[R],
        frames: v[R].keyframes.map((F) => F.frame + K),
        selectedFrames: I(R)
      }))
    };
  }, x = e.stickers.filter((S) => S.placement === "sky").sort((S, v) => v.z_index - S.z_index), N = e.stickers.filter((S) => S.placement === "world");
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
      ...[...x, ...N].map((S) => {
        const { start: v, in: T, duration: $ } = S.clip;
        return w(S.id, S, D0(S), { start: v, end: $ === null ? null : v + $ }, v - T);
      })
    ]
  };
}
function P2(e, t, n, r) {
  const o = SS(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, l = Math.max(...n) + r;
  return { label: a === l ? `Frame ${a}` : `${a} – ${l}`, ...o };
}
const A2 = { class: "pano-floating-right" }, C2 = ["data-settled"], I2 = ["data-ready", "data-settled"], E2 = ["aria-label", "data-tip"], O2 = {
  key: 1,
  class: "pano-camera-preview-label"
}, F2 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le(Xe, null, [
      B("div", A2, [
        (re(!0), le(Xe, null, vt(e.buttons, (r) => Fr((re(), $r(an, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"])), [
          [Ii, r.visible !== !1]
        ])), 128))
      ]),
      Fr(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: ot(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: xt({
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
          e.previewToggle.visible ? (re(), le("button", {
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
          ], 8, E2)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (re(), le("div", O2, nt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, I2)
      ], 8, C2), [
        [Ii, e.preview.visible]
      ])
    ], 64));
  }
}, T2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, D2 = ["y2", "transform"], L2 = ["transform"], R2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => Fr((re(), le("div", {
      class: ot(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (re(), le("svg", T2, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (re(!0), le(Xe, null, vt(Qe(n), (l) => (re(), le("line", {
          key: l,
          class: ot(["pano-frame-roll-knob-tick", { zero: l === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: l % 45 === 0 ? 7 : 6,
          transform: `rotate(${l} 20 20)`
        }, null, 10, D2))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, L2),
        a[2] || (a[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ii, e.model.visible === !0]
    ]);
  }
}, V2 = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le("div", {
      class: ot(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(Cy, {
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
      De(R2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, $2 = ["aria-label"], z2 = { class: "pano-canvas-confirm-title" }, j2 = { class: "pano-canvas-confirm-text" }, H2 = { class: "pano-canvas-confirm-actions" }, G2 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, K2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Kt(null), r = /* @__PURE__ */ Kt(null);
    let o = null;
    function a() {
      const w = r.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function l(w) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${w}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var v;
      const w = r.value;
      if (!w) return;
      const x = w.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const S = a()[0] || w;
      (v = S == null ? void 0 : S.focus) == null || v.call(S);
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
      const x = a(), N = r.value;
      if (!x.length) {
        w.preventDefault(), ($ = N == null ? void 0 : N.focus) == null || $.call(N);
        return;
      }
      const S = x[0], v = x[x.length - 1], T = document.activeElement;
      if (w.shiftKey) {
        (T === S || T === N || !(N != null && N.contains(T))) && (w.preventDefault(), v.focus());
        return;
      }
      (T === v || !(N != null && N.contains(T))) && (w.preventDefault(), S.focus());
    }
    function y(w) {
      w.target === n.value && l("confirm-cancel");
    }
    return to(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, ql(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), as(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (re(), le("div", {
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
        B("div", z2, nt(e.model.title), 1),
        B("div", j2, nt(e.model.text), 1),
        B("div", H2, [
          x[0] || (x[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", G2, nt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, $2)
    ], 512)) : ct("", !0);
  }
}, B2 = ["data-paint-pane"], W2 = ["hidden"], U2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Y2 = ["aria-pressed", "disabled"], X2 = ["hidden"], q2 = { class: "pano-paint-color-pop-head" }, J2 = { class: "pano-paint-color-field" }, Z2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Q2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, eP = { class: "pano-paint-color-field" }, tP = { class: "pano-paint-alpha-wrap" }, nP = ["value"], rP = { "data-paint-alpha-value": "" }, iP = ["hidden"], oP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, aP = ["data-paint-history-index", "aria-label", "disabled"], sP = ["data-paint-footer"], lP = ["data-paint-group"], cP = ["hidden"], uP = ["value", "disabled"], fP = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, dP = ["hidden"], pP = {
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
      (re(!0), le(Xe, null, vt(e.panes, (a) => {
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
            (re(!0), le(Xe, null, vt(e.paintSwatches, (u) => (re(), le("button", {
              key: u.id,
              class: ot(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: xt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, U2))), 128)),
            B("button", {
              class: ot(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: xt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Y2),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: xt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", q2, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: xt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", J2, [
                B("div", Z2, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: xt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", Q2, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: xt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", eP, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", tP, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, nP),
                  B("span", rP, nt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", oP, [
                  (re(!0), le(Xe, null, vt(e.state.historyEntries || [], (u) => (re(), le("button", {
                    key: u.index,
                    class: ot(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: xt(n(u.color))
                  }, null, 14, aP))), 128))
                ])
              ], 8, iP)
            ], 12, X2)
          ], 10, W2)) : ct("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (re(!0), le(Xe, null, vt(a.tools, (u) => {
                var d;
                return re(), $r(an, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, lP),
            B("div", {
              class: ot(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: xt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, uP),
              B("span", fP, nt(e.state.sizeText || "10"), 1)
            ], 10, cP),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = e.state.clearVisible) == null ? void 0 : l[a.key]) ?? !a.clearHidden)
            }, [
              De(an, {
                icon: Qe(Ne).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, dP)
          ], 8, sP)
        ], 10, B2);
      }), 128))
    ], 2));
  }
}, hP = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Kt(null), r = /* @__PURE__ */ Kt(null), o = /* @__PURE__ */ Kt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (l, u) => (re(), le(Xe, null, [
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
}, mP = {
  key: 0,
  class: "pano-cutout-menu"
}, gP = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, yP = ["data-aspect"], bP = ["data-action", "aria-label", "data-tip", "disabled"], vP = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (re(), le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: xt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (re(!0), le(Xe, null, vt(e.model.items || [], (r) => (re(), le(Xe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (re(), le("div", mP, [
          B("button", gP, [
            De(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: ot(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (re(!0), le(Xe, null, vt(r.choices || [], (o) => (re(), le("button", {
              key: o.value,
              class: ot(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, nt(o.label), 11, yP))), 128))
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
          De(Ct, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, bP))
      ], 64))), 128))
    ], 4));
  }
}, _P = {
  key: 0,
  class: "pano-easing"
}, wP = { class: "pano-section-title" }, xP = { class: "pano-easing-range" }, SP = { class: "pano-easing-modes" }, kP = ["aria-pressed", "onClick"], MP = ["viewBox"], NP = ["x", "y"], PP = ["x1", "y1", "x2", "y2"], AP = ["d"], CP = ["x1", "y1", "x2", "y2"], IP = ["x1", "y1", "x2", "y2"], EP = ["cx", "cy"], OP = ["cx", "cy"], FP = { class: "pano-easing-note" }, qr = 132, Ki = 14, TP = {
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
    ], a = /* @__PURE__ */ Kt(null), l = ut(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), u = (S) => Ki + S * qr, d = (S) => Ki + (1 - S) * qr, b = ut(() => {
      var K;
      if (((K = n.model) == null ? void 0 : K.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [S, v, T, $] = l.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(S)} ${d(v)} ${u(T)} ${d($)} ${u(1)} ${d(1)}`;
    }), y = ut(() => l.value ? l.value.map((S) => S.toFixed(2)).join(", ") : "");
    function w(S) {
      var v;
      return JSON.stringify(S.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function x(S, v) {
      r("timeline", { type: "easing", easing: S, commit: v });
    }
    function N(S, v) {
      var R;
      if (S.button !== 0 || !l.value) return;
      const T = S.currentTarget;
      (R = T.setPointerCapture) == null || R.call(T, S.pointerId);
      let $ = null;
      const K = (F) => {
        const V = a.value.getBoundingClientRect(), G = V.width / (qr + Ki * 2), Q = ((F.clientX - V.left) / G - Ki) / qr, _e = 1 - ((F.clientY - V.top) / G - Ki) / qr;
        $ = [...$ || l.value], $[v] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, $[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x($, !1);
      }, I = () => {
        T.removeEventListener("pointermove", K), T.removeEventListener("pointerup", I), T.removeEventListener("pointercancel", I), $ && x($, !0);
      };
      T.addEventListener("pointermove", K), T.addEventListener("pointerup", I), T.addEventListener("pointercancel", I);
    }
    return (S, v) => e.model ? (re(), le("div", _P, [
      B("div", wP, [
        v[2] || (v[2] = B("span", null, "Easing", -1)),
        B("span", xP, nt(e.model.label), 1)
      ]),
      B("div", SP, [
        (re(), le(Xe, null, vt(o, (T) => B("button", {
          key: T.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(T) ? "true" : "false",
          onClick: ($) => x(T.easing, !0)
        }, nt(T.label), 9, kP)), 64))
      ]),
      l.value || e.model.easing === "hold" ? (re(), le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${qr + Ki * 2} ${qr + Ki * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: qr,
          height: qr
        }, null, 8, NP),
        B("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, PP),
        B("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, AP),
        l.value ? (re(), le(Xe, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(l.value[0]),
            y2: d(l.value[1])
          }, null, 8, CP),
          B("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(l.value[2]),
            y2: d(l.value[3])
          }, null, 8, IP),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[0]),
            cy: d(l.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (T) => N(T, 0))
          }, null, 40, EP),
          B("circle", {
            class: "pano-easing-handle",
            cx: u(l.value[2]),
            cy: d(l.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (T) => N(T, 2))
          }, null, 40, OP)
        ], 64)) : ct("", !0)
      ], 8, MP)) : ct("", !0),
      B("div", FP, [
        e.model.mixed ? (re(), le(Xe, { key: 0 }, [
          Fa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (re(), le(Xe, { key: 1 }, [
          Fa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (re(), le(Xe, { key: 2 }, [
          Fa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : l.value ? (re(), le(Xe, { key: 3 }, [
          Fa("cubic-bezier(" + nt(y.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, DP = {
  class: "pano-side",
  "data-side": ""
}, LP = { class: "pano-side-head" }, RP = { class: "pano-side-title" }, VP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, $P = {
  key: 0,
  class: "pano-side-scroll"
}, zP = { class: "pano-inspector" }, jP = { class: "pano-ui-row pano-coverage-row" }, HP = ["data-selected"], GP = ["aria-pressed", "disabled"], KP = ["aria-pressed", "disabled"], BP = {
  key: 0,
  class: "pano-section-title"
}, WP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, UP = {
  class: "pano-picker",
  "data-picker": "selection"
}, YP = ["disabled"], XP = { class: "pano-picker-label" }, qP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, JP = ["hidden"], ZP = ["data-selection-id"], QP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, eA = {
  key: 2,
  class: "pano-state-actions"
}, tA = ["disabled"], nA = ["data-key"], rA = ["min", "max", "step", "value", "disabled", "data-param-key"], iA = ["min", "max", "step", "value", "disabled", "data-param-key"], oA = { class: "pano-visibility-section" }, aA = { class: "pano-visibility-stack" }, sA = ["data-visibility-row"], lA = { class: "pano-visibility-name" }, cA = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, uA = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], fA = ["open"], dA = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, pA = { class: "pano-ui-settings-body" }, hA = { class: "pano-ui-row" }, mA = ["data-selected"], gA = ["aria-pressed"], yA = ["aria-pressed"], bA = { class: "pano-ui-row" }, vA = ["data-selected"], _A = ["aria-pressed"], wA = ["aria-pressed"], xA = {
  key: 1,
  class: "pano-side-footer"
}, SA = ["data-action"], kA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ut(() => {
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
      var b, y, w, x, N;
      return re(), le("div", DP, [
        B("div", LP, [
          B("div", RP, [
            B("span", VP, [
              De(Ct, {
                icon: Qe(Ne).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, nt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (re(), le("div", $P, [
          B("div", zP, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", jP, [
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
                }, "360", 8, GP),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, KP)
              ], 8, HP)
            ]),
            e.model.transformTitle !== !1 ? (re(), le("div", BP, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (re(), le("div", WP, [
              B("label", null, nt(e.model.selectionPicker.label), 1),
              B("div", UP, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", XP, [
                    e.model.selectionPicker.currentIcon ? (re(), le("span", qP, [
                      De(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, nt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, YP),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (re(!0), le(Xe, null, vt(e.model.selectionPicker.items || [], (S) => (re(), le("button", {
                    key: S.id,
                    type: "button",
                    class: ot(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (re(), le("span", QP, [
                      De(Ct, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, nt(S.label), 1)
                  ], 10, ZP))), 128))
                ], 8, JP)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (re(), le("div", eA, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ct, {
                  icon: Qe(Ne).copy
                }, null, 8, ["icon"]),
                B("span", null, nt(e.model.copyStateButton.label), 1)
              ], 8, tA)
            ])) : ct("", !0),
            B("div", {
              class: ot(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (re(!0), le(Xe, { key: 0 }, vt(e.model.notes, (S) => (re(), le("div", {
                key: S,
                class: "pano-param-note"
              }, nt(S), 1))), 128)) : (re(!0), le(Xe, { key: 1 }, vt(e.model.params || [], (S) => (re(), le("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                B("label", null, nt(S.label), 1),
                B("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: l(S, e.model),
                  style: xt(a(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, rA),
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
                }, null, 8, iA)
              ], 8, nA))), 128))
            ], 2),
            De(TP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (re(), le(Xe, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", oA, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", aA, [
                  (re(!0), le(Xe, null, vt(e.model.visibilityRows, (S) => (re(), le("div", {
                    key: S.key,
                    class: ot(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    B("span", lA, [
                      B("span", cA, [
                        De(Ct, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, nt(S.label), 1)
                    ]),
                    B("button", {
                      class: ot(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      De(Ct, {
                        icon: S.visible === !0 ? Qe(Ne).eye : Qe(Ne).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, uA)
                  ], 10, sA))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (re(), le("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", dA, [
                  De(Ct, {
                    icon: Qe(Ne).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", pA, [
                B("div", hA, [
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
                    }, "Normal", 8, gA),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, yA)
                  ], 8, mA)
                ]),
                B("div", bA, [
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
                    }, "Normal", 8, _A),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, wA)
                  ], 8, vA)
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
            ], 8, fA)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (re(), le("div", xA, [
          (re(!0), le(Xe, null, vt(e.model.footerButtons, (S) => (re(), le("button", {
            key: S.action,
            class: ot(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, nt(S.label), 11, SA))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, MA = { class: "pano-timeline-bar" }, NA = ["aria-label", "data-tip"], PA = ["aria-label", "data-tip"], AA = { class: "pano-timeline-time" }, CA = ["data-tip"], IA = { key: 0 }, EA = ["value"], OA = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, FA = ["value"], TA = ["aria-expanded"], DA = ["inert"], LA = { class: "pano-timeline-name" }, RA = ["aria-expanded", "aria-label", "onClick"], VA = ["title", "aria-current", "onClick"], $A = ["data-keyed", "aria-label", "onClick"], zA = ["onPointerdown"], jA = ["onPointerdown"], HA = ["onPointerdown"], GA = ["onPointerdown"], KA = ["aria-label", "data-tip", "onPointerdown"], BA = { key: 0 }, WA = ["onPointerdown"], UA = ["aria-label", "data-tip", "onPointerdown"], YA = { key: 0 }, XA = 10, qA = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Kt(null), l = /* @__PURE__ */ Kt(null), u = /* @__PURE__ */ Kt(1), d = /* @__PURE__ */ Kt(0), b = /* @__PURE__ */ Kt(!1);
    let y = null, w = null, x = null;
    Zl(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), w = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), l.value && w.observe(l.value);
    }), as(() => {
      y == null || y.disconnect(), w == null || w.disconnect(), x == null || x();
    });
    const N = ut(() => Math.max(1, Number(n.model.span || 1))), S = ut(() => u.value / N.value), v = (U) => `${U / N.value * 100}%`, T = ut(() => {
      const U = o.find((H) => H * S.value >= 56) || o[o.length - 1], X = [];
      for (let H = 0; H < N.value; H += U) X.push(H);
      return X;
    });
    function $(U) {
      const X = a.value.getBoundingClientRect(), H = Math.floor((U - X.left) / Math.max(1, X.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, H));
    }
    function K(U, X, H) {
      const P = Math.ceil(XA / Math.max(1e-6, S.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return AS(X.map((Y) => Y.frame), P).map((Y, Ae) => ({
        ...Y,
        key: `${U}:${Ae}`,
        partial: Y.frames.some((Fe) => !ee.get(Fe)),
        selected: Y.frames.some((Fe) => H.includes(Fe))
      }));
    }
    function I(U) {
      return K(U.id, U.keys, U.selectedFrames);
    }
    function R(U) {
      return K(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function F(U) {
      const X = U.end === null ? N.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function V(U, X) {
      const H = U.clientX, P = Math.max(1e-6, S.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const St = Math.round((Fe.clientX - H) / P);
        St !== ee && (ee = St, X("move", ee, Fe));
      }, Ae = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), X("end", ee, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae), x = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
    }
    function G(U) {
      U.button === 0 && V(U, (X, H, P) => r("action", { type: "seek", frame: $(P.clientX), phase: X }));
    }
    function Q(U, X, H) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), V(U, (P, ee) => r("action", { type: "clip", id: X.id, mode: H, delta: ee, phase: P })));
    }
    function _e(U, X, H, P, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: H, frames: P.frames, additive: !0 });
          return;
        }
        P.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: H, frames: P.frames, additive: !1 }), V(U, (Y, Ae) => r("action", { type: "move-keys", delta: Ae, phase: Y }));
      }
    }
    const D = ut(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function C(U, X, H) {
      r("action", X), await ql(), U.target.value = H();
    }
    function se(U) {
      C(U, { type: "fps", fps: Number(U.target.value) }, () => D.value);
    }
    function ce(U) {
      const X = U.target.value.trim();
      C(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function fe(U, X, H) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: H, frames: [], additive: !1 });
    }
    return (U, X) => Fr((re(), le("section", {
      class: ot(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", MA, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (H) => r("action", { type: "play" }))
        }, [
          De(Ct, {
            icon: e.model.playing ? Qe(Ne).pause : Qe(Ne).play
          }, null, 8, ["icon"])
        ], 8, NA),
        e.model.hasAudio ? (re(), le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (H) => r("action", { type: "mute" }))
        }, [
          De(Ct, {
            icon: e.model.muted ? Qe(Ne).volume_muted : Qe(Ne).volume2
          }, null, 8, ["icon"])
        ], 8, PA)) : ct("", !0),
        B("span", AA, nt(e.model.label), 1),
        B("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (re(), le("span", IA, nt(D.value), 1)) : (re(), le("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: D.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, EA)),
          X[6] || (X[6] = B("span", null, "fps", -1))
        ], 8, CA),
        B("label", OA, [
          X[7] || (X[7] = B("span", null, "Length", -1)),
          B("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ce
          }, null, 40, FA)
        ]),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (H) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = B("span", null, "Timeline", -1)),
          De(Ct, {
            icon: Qe(Ne).chevron
          }, null, 8, ["icon"])
        ], 8, TA)
      ]),
      B("div", {
        class: ot(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: xt({ "--pano-timeline-rows": `${d.value}px` }),
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
            onPointerdown: G
          }, [
            (re(!0), le(Xe, null, vt(T.value, (H) => (re(), le("span", {
              key: H,
              class: "pano-timeline-tick",
              style: xt({ left: v(H) })
            }, nt(H), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: xt({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (re(!0), le(Xe, null, vt(e.model.rows || [], (H) => (re(), le(Xe, {
            key: H.id
          }, [
            B("div", {
              class: ot(["pano-timeline-head", { selected: H.selected }])
            }, [
              B("div", LA, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": H.open ? "true" : "false",
                  "aria-label": H.open ? `Hide ${H.label} parameters` : `Show ${H.label} parameters`,
                  onClick: At((P) => r("action", { type: "toggle-row", id: H.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Ne).chevron
                  }, null, 8, ["icon"])
                ], 8, RA),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: H.label,
                  "aria-current": H.selected ? "true" : void 0,
                  onClick: (P) => r("action", { type: "select-row", id: H.id })
                }, [
                  De(Ct, {
                    icon: H.clip ? Qe(Ne).image : Qe(Ne).camera
                  }, null, 8, ["icon"]),
                  B("span", null, nt(H.label), 1)
                ], 8, VA),
                B("button", {
                  class: ot(["pano-timeline-key", { keyed: H.keyed }]),
                  type: "button",
                  "data-keyed": H.keyed ? "true" : "false",
                  "aria-label": H.keyed ? `Every ${H.label} parameter has a keyframe here; update them` : `Add keyframes for every ${H.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((P) => r("action", { type: "key-row", owner: H.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Ne).keyframe
                  }, null, 8, ["icon"])
                ], 10, $A)
              ]),
              H.open ? (re(!0), le(Xe, { key: 0 }, vt(H.lanes, (P) => (re(), le("div", {
                key: P.key,
                class: "pano-timeline-lane-head"
              }, nt(P.label), 1))), 128)) : ct("", !0)
            ], 2),
            B("div", {
              class: ot(["pano-timeline-track", { selected: H.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (P) => fe(P, H, null)
              }, [
                H.clip ? (re(), le("div", {
                  key: 0,
                  class: ot(["pano-timeline-clip", { open: H.clip.end === null }]),
                  style: xt(F(H.clip)),
                  onPointerdown: At((P) => Q(P, H, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((P) => Q(P, H, "start"), ["stop"])
                  }, null, 40, HA),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((P) => Q(P, H, "end"), ["stop"])
                  }, null, 40, GA)
                ], 46, jA)) : ct("", !0),
                (re(!0), le(Xe, null, vt(I(H), (P) => (re(), le("button", {
                  key: P.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: P.selected, cluster: P.frames.length > 1, partial: P.partial }]),
                  style: xt({ left: v(P.frame + 0.5) }),
                  "aria-label": `${H.label}: ${P.frames.length > 1 ? `${P.frames.length} keyframes` : `keyframe at frame ${P.frames[0]}`}`,
                  "data-tip": P.frames.length > 1 ? `${P.frames.length} keyframes` : `Frame ${P.frames[0]}`,
                  onPointerdown: At((ee) => _e(ee, H, null, P, H.selectedFrames), ["stop"])
                }, [
                  P.frames.length > 1 ? (re(), le("span", BA, nt(P.frames.length), 1)) : ct("", !0)
                ], 46, KA))), 128))
              ], 40, zA),
              H.open ? (re(!0), le(Xe, { key: 0 }, vt(H.lanes, (P) => (re(), le("div", {
                key: P.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => fe(ee, H, P.lane)
              }, [
                (re(!0), le(Xe, null, vt(R(P), (ee) => (re(), le("button", {
                  key: ee.key,
                  type: "button",
                  class: ot(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: xt({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${P.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: At((Y) => _e(Y, H, P.lane, ee, P.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (re(), le("span", YA, nt(ee.frames.length), 1)) : ct("", !0)
                ], 46, UA))), 128))
              ], 40, WA))), 128)) : ct("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: xt({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, DA)
    ], 2)), [
      [Ii, e.model.visible]
    ]);
  }
}, JA = {
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
      style: xt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, nt(e.model.text || ""), 7));
  }
}, ZA = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, QA = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (re(), le("div", ZA, [
      (re(!0), le(Xe, null, vt(e.buttons, (r) => Fr((re(), $r(an, {
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
        [Ii, r.visible !== !1]
      ])), 128))
    ]));
  }
}, eC = ["data-video-ready"], tC = { class: "pano-video-transport-shell" }, nC = { class: "pano-video-controls-left" }, rC = { class: "pano-video-filmstrip" }, iC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, oC = ["src", "onLoad"], aC = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, sC = ["max", "value", "disabled"], lC = { class: "pano-video-controls-right" }, cC = ["data-has-audio"], uC = { class: "pano-video-volume-pop" }, fC = ["value", "disabled"], dC = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), r = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), o = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Ne.pause : Ne.play;
    }), a = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), l = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Ne.loop_off : Ne.loop;
    }), d = ut(() => {
      var F, V;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((V = t.state) == null ? void 0 : V.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ut(() => {
      var F, V, G;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Ne.volume : ((V = t.state) == null ? void 0 : V.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? Ne.volume_muted : Ne.volume2;
    }), y = ut(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), w = ut(() => ({ left: `${y.value}%` })), x = ut(() => {
      var Q, _e;
      const F = (Q = t.state) == null ? void 0 : Q.volumePct, V = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, G = Number(F ?? V ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), N = ut(() => {
      var G, Q;
      const V = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((_e, D) => Math.max(_e, D.length), 4);
      return `${Math.max(4, V)}ch`;
    }), S = ut(() => ({ "--pano-video-time-ch": N.value })), v = ut(() => {
      var G, Q;
      const F = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const V = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: V }, (_e, D) => ({
        id: `placeholder-${D}`,
        src: "",
        label: ""
      }));
    }), T = /* @__PURE__ */ Kt(/* @__PURE__ */ new Set()), $ = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), K = (F) => T.value.has($(F)), I = (F) => {
      const V = new Set(T.value);
      V.add($(F)), T.value = V;
    };
    to(v, (F) => {
      const V = new Set(F.map($)), G = /* @__PURE__ */ new Set();
      for (const Q of T.value)
        V.has(Q) && G.add(Q);
      T.value = G;
    }, { immediate: !0 });
    const R = ut(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, V) => (re(), le("div", {
      class: ot(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: xt(R.value)
    }, [
      V[1] || (V[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      V[2] || (V[2] = B("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", tC, [
        B("div", nC, [
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
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: xt(S.value)
          }, nt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", rC, [
          B("div", iC, [
            (re(!0), le(Xe, null, vt(v.value, (G) => (re(), le("div", {
              key: $(G),
              class: ot(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && K(G)
              }])
            }, [
              G.src ? (re(), le("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => I(G)
              }, null, 40, oC)) : (re(), le("span", aC))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: xt(w.value),
            "aria-hidden": "true"
          }, [...V[0] || (V[0] = [
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
          }, null, 8, sC)
        ]),
        B("div", lC, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: xt(S.value)
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
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", uC, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: xt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, fC)
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
          ], 8, cC)
        ])
      ])
    ], 14, eC));
  }
}, pC = { class: "pano-floating-top" }, hC = ["data-selected", "data-view-count"], mC = ["data-view", "aria-pressed", "aria-label", "disabled"], gC = { class: "label" }, yC = ["data-selected"], bC = ["data-space-mode", "data-tip", "aria-pressed"], vC = { class: "label" }, _C = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] },
    // The space view's 3DoF / 6DoF segments (#71), shown while they are visible.
    spaceButtons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r, o;
      return re(), le("div", pC, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (re(!0), le(Xe, null, vt(e.buttons, (a) => Fr((re(), le("button", {
            key: a.key,
            class: ot(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            De(Ct, {
              icon: a.icon
            }, null, 8, ["icon"]),
            B("span", gC, nt(a.label), 1)
          ], 10, mC)), [
            [Ii, a.visible !== !1]
          ])), 128))
        ], 8, hC),
        Fr(B("div", {
          class: "pano-view-toggle pano-space-toggle",
          role: "group",
          "aria-label": "Space view mode",
          "data-selected": ((o = e.spaceButtons.find((a) => a.pressed === "true")) == null ? void 0 : o.key) || "3dof"
        }, [
          (re(!0), le(Xe, null, vt(e.spaceButtons, (a) => (re(), le("button", {
            key: a.key,
            class: ot(["pano-view-btn", { active: a.pressed === "true" }]),
            "data-space-mode": a.key,
            "data-tip": a.tip,
            "aria-pressed": a.pressed
          }, [
            B("span", vC, nt(a.label), 1)
          ], 10, bC))), 128))
        ], 8, yC), [
          [Ii, e.spaceButtons.some((a) => a.visible !== !1)]
        ])
      ]);
    };
  }
};
function Wy(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ne.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ne.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ne.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // The space view's mode (#71), next to the view toggle while the panorama view shows World content.
    spaceButtons: t ? [] : [
      { key: "3dof", label: "3DoF", tip: "Look around from the ERP origin", pressed: "true" },
      { key: "6dof", label: "6DoF", tip: "Move freely in space", pressed: "false" }
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ne.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ne.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ne.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ne.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ne.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ne.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ne.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ne.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ne.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ne.reset },
      // Shown only while the panorama view is in space in 6DoF (#71).
      ...t ? [] : [
        { action: "frame-view", label: "Frame Content", tip: "Frame content", pressed: null, icon: Ne.focus, visible: !1 }
      ],
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ne.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ne.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ne.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ne.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ne.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ne.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ne.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ne.lasso_tool }
        ]
      }
    ]
  };
}
const wC = ["aria-label"], xC = { class: "pano-stage-column" }, SC = { class: "pano-stage-wrap" }, kC = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, MC = {
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
    const d = /* @__PURE__ */ Kt(null), b = /* @__PURE__ */ Kt(null), y = /* @__PURE__ */ Kt(null);
    function w() {
      var D, C;
      return ((C = (D = y.value) == null ? void 0 : D.getRefs) == null ? void 0 : C.call(D)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(D) {
      var C, se;
      return ((se = (C = b.value) == null ? void 0 : C.open) == null ? void 0 : se.call(C, D)) === !0;
    }
    function N(D) {
      o("image-file-selected", D);
    }
    function S(D) {
      o("image-file-cancelled", D);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const v = ut(() => r.readOnly === !0), T = ut(() => r.shellPreset || Wy(r.type)), $ = ut(() => {
      var C, se, ce;
      const D = String((((C = r.uiState) == null ? void 0 : C.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (ce = r.uiState) == null ? void 0 : ce.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = ut(() => {
      var C;
      const D = Array.isArray((C = T.value) == null ? void 0 : C.floatingButtons) ? T.value.floatingButtons.slice() : [];
      return v.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ne.fullscreen
      }), D;
    });
    function I() {
      const D = d.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function R() {
      var se;
      const C = I()[0] || d.value;
      (se = C == null ? void 0 : C.focus) == null || se.call(C);
    }
    function F() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function V(D) {
      var C, se, ce, fe;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const U = I();
          if (!U.length) {
            D.preventDefault(), (se = (C = d.value) == null ? void 0 : C.focus) == null || se.call(C);
            return;
          }
          const X = U[0], H = U[U.length - 1], P = document.activeElement;
          if (D.shiftKey) {
            (P === X || P === d.value || !((ce = d.value) != null && ce.contains(P))) && (D.preventDefault(), H.focus());
            return;
          }
          (P === H || !((fe = d.value) != null && fe.contains(P))) && (D.preventDefault(), X.focus());
          return;
        }
        D.key === "Escape" && o("close");
      }
    }
    function G() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function Q() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function _e(D) {
      document.removeEventListener("keydown", V), D ? (u || (u = document.activeElement), G(), document.addEventListener("keydown", V), ql(() => {
        R();
      })) : (Q(), F());
    }
    return Zl(() => {
      _e(r.open);
    }), as(() => {
      Q(), document.removeEventListener("keydown", V), F();
    }), to(() => r.open, (D) => {
      _e(D);
    }), (D, C) => e.open ? (re(), le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[2] || (C[2] = At((se) => o("close"), ["self"]))
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
        B("div", xC, [
          B("div", SC, [
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
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (re(), le("div", kC, nt($.value), 1)) : ct("", !0),
            C[6] || (C[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(hP, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            De(Iy, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: S
            }, null, 512),
            v.value ? ct("", !0) : (re(), le(Xe, { key: 1 }, [
              De(QA, {
                buttons: e.uiState.toolButtons || T.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(V2, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(pP, {
                "paint-swatches": e.paintSwatches,
                panes: T.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(dC, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(_C, {
              buttons: e.uiState.viewButtons || T.value.viewButtons || [],
              "space-buttons": e.uiState.spaceButtons || []
            }, null, 8, ["buttons", "space-buttons"]),
            De(F2, {
              buttons: e.uiState.floatingButtons || K.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(vP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(JA, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(K2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(qA, {
            model: e.uiState.timeline || {},
            onAction: C[0] || (C[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (re(), $r(kA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: C[1] || (C[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, wC)
    ])) : ct("", !0);
  }
}, hr = "loading", aa = "ready", er = "failed";
function Uy(e, t = "") {
  return e && (e.__panoLoadState = hr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Yy(e, t = "") {
  return e && (e.__panoLoadState = aa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Xy(e, t = "") {
  return e && (e.__panoLoadState = er, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function xf(e, t) {
  return e ? e.__panoLoadState === er ? er : typeof t == "function" && t(e) ? aa : hr : aa;
}
function Sf(e) {
  return xf(e) === er;
}
function NC({ presented: e, background: t = aa, stickers: n = [] } = {}) {
  if (!e) return { status: hr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === hr, a = r.includes(hr);
  if (o && a) return { status: hr, detail: "mixed" };
  if (o) return { status: hr, detail: "background" };
  if (a) return { status: hr, detail: "stickers" };
  const l = t === er, u = r.includes(er);
  return l && u ? { status: er, detail: "mixed" } : l ? { status: er, detail: "background" } : u ? { status: er, detail: "stickers" } : { status: aa, detail: "" };
}
const PC = "state_json", AC = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Cu = "sticker_image_1", CC = "external_image", Gs = "pano_sticker_input_images", IC = "pano_sticker_input_videos", EC = "pano_sticker_input_frames", OC = "pano_sticker_input_video_meta", FC = !0, fl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Sr = Math.PI / 180, qi = 180 / Math.PI, Iu = 1, TC = "rgb(255, 221, 87)", DC = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, LC = 64, Km = 40, Eu = 16, RC = 0.45, Bm = 180, VC = 160, Hl = 24, $C = 4, zC = 4, Ks = /* @__PURE__ */ new Map(), Wm = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), jC = 12, Gn = iy({
  app: mr,
  api: Gt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Sf,
    markImageFailed: Xy,
    markImageLoading: Uy,
    markImageReady: Yy
  }
});
function Ou(e) {
  if (!vn(e, "background") || !vn(e, "external-sticker")) return null;
  const t = Gn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const HC = Gn.assetSource, Ea = Gn.source, Fu = Gn.uiImage, GC = Gn.invalidateUiImage, KC = Gn.resolvePreferredExactLinkedSource, Tu = Gn.loadPreferredExactLinkedImage;
function Bs(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function BC(e) {
  return 1 - Math.pow(1 - e, 3);
}
function WC(e, t, n) {
  const r = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function UC(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ai.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ai.delete(t), Ai.set(t, n), n);
}
function YC(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ai.delete(n), Ai.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ai.size > jC; ) {
      const o = Ai.keys().next().value;
      if (!o) break;
      Ai.delete(o);
    }
}
function XC(e) {
  return e * e * e;
}
function sc(e, t, n) {
  return { x: e, y: t, z: n };
}
function Um(e, t) {
  return sc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ym(e, t) {
  return sc(e.x * t, e.y * t, e.z * t);
}
function Du(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function qC(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return sc(e.x / t, e.y / t, e.z / t);
}
function Ws(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * qi),
    pitch: J(Math.asin(J(e.y, -1, 1)) * qi, -90, 90)
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
function ki(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Lu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), l = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return ki(e, t);
  const d = J((a * r + l * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, w = Number(e.x || 0) - b, x = Number(e.y || 0) - y;
  return w * w + x * x;
}
function Zn(e, t, n) {
  return e + (t - e) * n;
}
function kr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function JC(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Us = { fillStyle: "", url: "" };
function ZC(e, t, n) {
  if (Us.url && Us.fillStyle === String(e || ""))
    return Us.url;
  const r = JC(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Hl}" height="${Hl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Us = { fillStyle: String(e || ""), url: r }, r;
}
function dl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function jn(e) {
  return {
    r: J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: J(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function bn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function QC(e) {
  return fl.some((t) => dl(e, t.color));
}
function Ru(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = J(Number(t), 0, 1), a = J(Number(n), 0, 1);
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
function Vu(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), l = o - a;
  let u = 0;
  l > 1e-6 && (o === t ? u = ((n - r) / l + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / l + 2) / 6 : u = ((t - n) / l + 4) / 6);
  const d = o <= 1e-6 ? 0 : l / o;
  return { h: u, s: d, v: o };
}
function Lo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const qy = "pano_suite.ui_settings.v1", Jy = "pano_suite.node_grid_visibility.v1";
let Go = null, Mr = null;
function pl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function eI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(qy)) || "").trim();
    if (!t) return Go ? pl(Go) : null;
    const n = JSON.parse(t), r = pl(n);
    return Go = r, r;
  } catch {
    return Go ? pl(Go) : null;
  }
}
function tI(e) {
  var n;
  const t = pl(e);
  Go = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(qy, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Zy() {
  var e;
  if (Mr && typeof Mr == "object")
    return Mr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Jy)) || "").trim();
    if (!t)
      return Mr = {}, Mr;
    const n = JSON.parse(t);
    return Mr = n && typeof n == "object" ? n : {}, Mr;
  } catch {
    return Mr = {}, Mr;
  }
}
function nI(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = Zy()[n];
  return typeof o == "boolean" ? o : !!t;
}
function rI(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = Zy();
  r[n] = !!t, Mr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Jy, JSON.stringify(r));
  } catch {
  }
}
function iI(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Xm(e) {
  const { paintCount: t, maskCount: n } = iI(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ro(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ys(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function oI(e, t) {
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
function Bi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function aI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function sI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function lI(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function cI(e, t, n = {}) {
  var rh;
  await Ty(e, { tolerateOperationFailure: !0 }), Gn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, l = oI(e, t);
  await md();
  const u = Ys(e, "output_preset"), d = Ys(e, "coverage"), b = Ys(e, "bg_color"), y = Ys(e, PC), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Tu(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return lI(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return sI(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : aI(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, v = (S ? E0 : I0)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Hn(d == null ? void 0 : d.value),
    sharedUiSettings: eI(),
    active: L0(e),
    fps: S ? Ou(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const T = t === "cutout" ? (() => {
    var c;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((c = v == null ? void 0 : v.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, $ = T ? lp(T, !1) : { width: 220, height: 132 }, K = Wy(t), I = /* @__PURE__ */ sa({
    stageStatus: hr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (K.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    spaceButtons: (K.spaceButtons || []).map((i) => ({ ...i, visible: !1 })),
    toolButtons: (K.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(K.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ne.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ne.aspect,
      rotateIcon: Ne.rotate_90,
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
      icon: Ne.fullscreen,
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
      customColorCss: kr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: kr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      label: T ? "Loading preview" : "Add Frame to preview"
    }
  }), R = document.createElement("div");
  document.body.appendChild(R);
  const F = ({ intent: i, file: s } = {}) => {
    if (Er(s)) {
      if (i === "add") {
        Sp(s);
        return;
      }
      i === "replace" && rv(s);
    }
  }, V = ({ intent: i } = {}) => {
  }, G = jf(MC, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: l,
    shellPreset: K,
    paintSwatches: fl.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: kr(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      Oo();
    },
    onTimeline: (i) => Q1(i),
    onImageFileSelected: F,
    onImageFileCancelled: V
  });
  let Q = null;
  try {
    Q = G.mount(R);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw R.remove(), i;
  }
  const _e = R.querySelector(".pano-modal-overlay"), D = R.querySelector(".pano-modal"), C = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), se = D == null ? void 0 : D.querySelector("[data-stage-background]"), ce = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), fe = ((rh = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : rh.call(Q)) || {}, U = fe.cursor || null, X = fe.sizePreview || null, H = fe.sizeSample || null;
  if (!_e || !D || !C || !se || !ce || !U || !X || !H)
    throw G.unmount(), R.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const P = C.getContext("2d"), ee = D.querySelector("[data-side]"), Y = D.querySelector("[data-video-element]"), Ae = D.querySelector("[data-port-video-element]"), Fe = D.querySelector(".pano-floating-right"), St = D.querySelector(".pano-floating-top"), ht = D.querySelector("[data-tool-rail]"), sn = D.querySelector("[data-frame-rail]"), it = D.querySelector("[data-frame-roll-knob]"), Un = D.querySelector("[data-paint-dock]"), It = D.querySelector(".pano-video-transport"), Zt = D.querySelector("[data-selection-menu]"), ln = D.querySelector("[data-tooltip]"), fi = D.querySelector("[data-camera-preview-host]"), L = D.querySelector("[data-camera-preview-canvas]"), W = D.querySelector("[data-paint-color-row]"), q = D.querySelector("[data-paint-color-pop]"), ve = D.querySelector("[data-paint-color-sv]"), ge = D.querySelector("[data-paint-color-sv-cursor]"), ye = D.querySelector("[data-paint-hue-strip]"), ke = D.querySelector("[data-paint-hue-handle]");
  let Me = 0, xe = 0;
  ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", se.style.opacity = "0", o && (ee == null || ee.remove(), D.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!h.customPaintSessionStart) return;
    if (dl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (QC(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      jn(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !dl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Ve = (i = !1) => {
    !q || q.hidden || (i ? de() : h.customPaintSessionStart = null, q.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, Ce = () => {
    q && (q.hidden && (h.customPaintSessionStart = jn(h.customPaintColor)), q.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Li(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((c) => {
      c.hidden = !0;
    }), Ve(!0), t === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, qe(), ue()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const $e = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Be = JSON.stringify(Qh(v)), h = {
    mode: "pano",
    selectedId: $e,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Zi,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Hn(v.coverage),
    historyController: v2(80, { entries: [Be], index: 0 }),
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
    showGrid: nI(e == null ? void 0 : e.id, !0),
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
    paintEngine: qu(),
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
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Le = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let st = null;
  t === "stickers" && (h.selectedId = null, v.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const We = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), cn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), $t = document.createElement("canvas");
  $t.__panoFrameIdx = 0;
  const Yn = document.createElement("canvas");
  Yn.__panoFrameIdx = 0;
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
  }, Et = wk({
    onReady: () => ue(),
    onFailed: () => ue(),
    onUpdate: () => {
      Pe.backgroundDirty = !0, ue({ localOnly: !0 });
    }
  });
  let zr = { key: "", projection: null }, br = { key: null, sceneState: null }, ho = null, mo = null, z = null, me = null;
  const Oe = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, Ie = (i) => {
    const s = String(i || "default");
    C.style.cursor !== s && (C.style.cursor = s);
  }, je = {
    timer: 0,
    target: null
  }, Ee = {
    active: !1,
    depth: 0
  }, ze = {
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
  }, mt = 9, Lt = [];
  let hn = 0;
  const rn = () => {
    var A, M;
    const i = (A = ce == null ? void 0 : ce.getBoundingClientRect) == null ? void 0 : A.call(ce), s = (M = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : M.call(Fe), c = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, _ = Math.max(280, Math.floor(c - g * 2)), k = h.fullscreen ? Math.min(1200, _) : _;
    I.videoTransport.shellMaxWidthPx = k;
  }, di = () => {
    hn || (hn = window.requestAnimationFrame(() => {
      hn = 0, rn();
    }));
  }, go = (i) => {
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
  }, un = typeof ResizeObserver < "u" ? new ResizeObserver(() => di()) : null;
  un == null || un.observe(ce), Fe && (un == null || un.observe(Fe)), Lt.push(() => {
    var i;
    hn && (window.cancelAnimationFrame(hn), hn = 0), (i = un == null ? void 0 : un.disconnect) == null || i.call(un);
  }), di();
  const fn = () => {
    ze.thumbnailJobId += 1, ze.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = mt;
  }, Ti = async (i, s, c) => {
    const f = String(i || "").trim();
    if (!f) {
      fn();
      return;
    }
    const p = UC(f);
    if (p) {
      ze.thumbnailSrc = f, I.videoTransport.thumbnails = p.thumbnails, I.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++ze.thumbnailJobId;
    ze.thumbnailSrc = f, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = mt;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const _ = await new Promise((ae) => {
      let pe = !1;
      const ie = (Se) => {
        pe || (pe = !0, ae(Se));
      };
      g.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), g.addEventListener("canplay", () => ie(!0), { once: !0 }), g.addEventListener("error", () => ie(!1), { once: !0 }), g.src = f, g.load();
    });
    if (ze.thumbnailJobId !== m) return;
    const k = Number(g.videoWidth || 0), A = Number(g.videoHeight || 0);
    if (!_ || k < 1 || A < 1) {
      ze.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), E = document.createElement("canvas"), O = 46, j = Math.max(72, Math.round(k / A * O));
    E.width = j, E.height = O;
    const te = E.getContext("2d");
    if (!te) return;
    const Z = [], ne = (ae) => new Promise((pe) => {
      let ie = !1;
      const Se = () => {
        ie || (ie = !0, pe());
      };
      g.addEventListener("seeked", Se, { once: !0 }), g.addEventListener("error", Se, { once: !0 });
      try {
        g.currentTime = ae;
      } catch {
        Se();
      }
    });
    for (let ae = 0; ae < mt; ae += 1) {
      if (ze.thumbnailJobId !== m) return;
      const pe = ae / (mt - 1), ie = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(c || 24))), M * pe)) : 0;
      if (await ne(ie), ze.thumbnailJobId !== m) return;
      te.clearRect(0, 0, j, O), te.drawImage(g, 0, 0, j, O), Z.push({
        id: `thumb-${ae}`,
        src: E.toDataURL("image/jpeg", 0.72),
        time: ie,
        label: vc(ie)
      });
    }
    ze.thumbnailJobId === m && (I.videoTransport.thumbnails = Z, I.videoTransport.thumbnailCount = Z.length || mt, YC(f, {
      thumbnails: Z,
      thumbnailCount: Z.length || mt,
      duration: M,
      fps: c
    }));
  };
  Lt.push(() => {
    fn();
  });
  const Mt = vy({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: ms,
    span: () => {
      if (S) return Vc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * ms());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? Y1(i) : hi(), ue({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      xb() && (Pe.backgroundDirty = !0);
    },
    onChange: () => {
      hi(), Ur(), ue({ cause: "frame_view", localOnly: !0 });
    }
  });
  Lt.push(() => Mt.dispose());
  const jr = S && Ae instanceof HTMLVideoElement ? _y({
    video: Ae,
    onCapture: () => {
      var c;
      const i = Number(Ae.videoWidth || 0), s = Number(Ae.videoHeight || 0);
      i < 1 || s < 1 || (Yn.width = i, Yn.height = s, (c = Yn.getContext("2d")) == null || c.drawImage(Ae, 0, 0), Yn.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  jr && Lt.push(() => jr.dispose());
  const In = S ? ly({
    createImage: (i, s) => {
      const c = new Image();
      return c.onload = s, c.onerror = s, c.src = i, c;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      mi(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      hi({
        hasAudio: I.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
      });
    }, c = () => {
      const f = Y.dataset.panoSrc;
      f && (ze.failedSrcs.add(f), mi(), ue());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", c]
    ])
      Y.addEventListener(f, p), Lt.push(() => Y.removeEventListener(f, p));
  }
  function or() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : c ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function yo(i) {
    return yd(i == null ? void 0 : i.dataTransfer);
  }
  function ar(i) {
    const s = !!i;
    Ee.active !== s && (Ee.active = s, ce.classList.toggle("drop-active", s));
  }
  function Hr(i, s, c = h.viewFov, f = 140, p = 620) {
    const m = xx(h.viewYaw, i), g = s - h.viewPitch, _ = c - h.viewFov, k = Math.hypot(m, g) + Math.abs(_) * 0.6, A = Math.round(J(f + k * 2.2, f, p));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: A,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: s,
      targetFov: c,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, ue();
  }
  Eb();
  function vr() {
    return t === "stickers" ? cs() : v.shots;
  }
  function cs() {
    return S ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function sr(i) {
    return S && yt(i);
  }
  function lc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Yt(i) {
    return sr(i) ? nd(i, h.frame) : i;
  }
  function lr(i, s) {
    sr(i) ? O0(i, h.frame, s) : Object.assign(i, s);
  }
  function mn() {
    const i = v.painting || (v.painting = qo(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Qy(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = v.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], c = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const _ = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }
    return c;
  }
  function eb() {
    return Qy("paint");
  }
  function ca(i, s) {
    const c = String(s || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ua(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function on(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const c = s.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : s).trim();
  }
  function fa(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const f = c.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function cc() {
    var s;
    let i = -1;
    for (const c of cs())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of mn())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function xd(i, s = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const f = mn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: s == null ? cc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function tb(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: J(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: J(c - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: J(c + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: J(c + p, 0, 1)
      }
    ];
  }
  function nb() {
    const i = new Set(eb()), c = mn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      c.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || c.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: cc(),
        locked: !1,
        frame: null
      });
    }), c.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), v.painting.groups = c, c;
  }
  function rb(i, s, c) {
    var Z;
    const f = (ne) => (Number(ne || 0) % 1 + 1) % 1, p = [];
    for (const ne of c) {
      const ae = ne == null ? void 0 : ne.geometry, pe = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(pe) && p.push(...pe);
    }
    if (!p.length) return null;
    const m = f(((Z = p[0]) == null ? void 0 : Z.u) || 0);
    let g = 0, _ = 0;
    p.forEach((ne) => {
      const ae = f((ne == null ? void 0 : ne.u) || 0);
      g += m + Xn(ae, m), _ += Number((ne == null ? void 0 : ne.v) || 0);
    });
    const k = (g / p.length % 1 + 1) % 1;
    let A = 1 / 0, M = -1 / 0, E = 1 / 0, O = -1 / 0;
    p.forEach((ne) => {
      const ae = f((ne == null ? void 0 : ne.u) || 0), pe = Xn(ae, k);
      A = Math.min(A, pe), M = Math.max(M, pe);
      const ie = Number((ne == null ? void 0 : ne.v) || 0);
      E = Math.min(E, ie), O = Math.max(O, ie);
    });
    const j = c.reduce((ne, ae) => {
      const pe = xi(String((ae == null ? void 0 : ae.toolKind) || "pen")), ie = Tn[pe] || Tn[Xr], Se = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(ne, Se);
    }, 0), te = Math.max(35e-4, j / 2048);
    return {
      centerUv: { u: ((k + (A + M) * 0.5) % 1 + 1) % 1, v: J((E + O) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - A) * 0.5 + te,
      halfH: (O - E) * 0.5 + te,
      uvPad: te
    };
  }
  function pi(i, s, c) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = mn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = c || cr(f, s);
    return p.frame = rb(f, s, m), p.frame;
  }
  function bo() {
    var f;
    const i = cs().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = nb().map((p) => ({
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
  function uc(i = !0) {
    var c, f, p, m, g, _;
    const s = bo().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((f = (c = h.interaction) == null ? void 0 : c.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), A = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((_ = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : _.toolKind) || "").trim();
      k && A === "paint" && M !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function fc(i = !0) {
    var _, k, A, M, E, O;
    const s = bo();
    if (!i) return s;
    const c = String(((k = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), f = String(((M = (A = h.interaction) == null ? void 0 : A.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((O = (E = h.interaction) == null ? void 0 : E.stroke) == null ? void 0 : O.toolKind) || "").trim();
    if (!c || f !== "paint" || p === "eraser" || s.some((j) => j.type === "strokeGroup" && String(j.actionGroupId || "") === c))
      return s;
    const m = Nt();
    let g = s.reduce((j, te) => Math.max(j, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return m && Qt(m) && String(m.actionGroupId || "") === c && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: g,
        item: null
      }
    ].sort((j, te) => Number((j == null ? void 0 : j.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0));
  }
  function ib() {
    return mn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => _o(ca("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function ob() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, c) => Number((s == null ? void 0 : s.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((s) => vo(ua((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Sd(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || f;
    }
    return !1;
  }
  function ab() {
    var s, c, f, p;
    let i = null;
    try {
      const m = uc(), g = ((p = (f = (c = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : c.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${ba()}:${dc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function dc() {
    var p, m, g, _, k, A, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Sd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const E = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, O = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), j = ((g = E == null ? void 0 : E.rawPoints) == null ? void 0 : g.length) ?? ((_ = E == null ? void 0 : E.points) == null ? void 0 : _.length) ?? 0, te = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${O || "paint"}_${s}_live${te}_${j}_${h.livePaintInteractionRevision}`;
    }
    const c = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), f = String(((A = i == null ? void 0 : i.item) == null ? void 0 : A.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${c || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function pc() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function $n(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function yt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function En() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function vo(i) {
    const s = on(i);
    if (!s) return null;
    const c = En().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ua(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function gn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = on(i.rasterObjectId || i.id || "");
    return !!s && !!vo(ua(s));
  }
  function _o(i) {
    const s = fa(i), c = String(s.actionGroupId || "").trim();
    if (!c) return null;
    const f = mn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === c || String((p == null ? void 0 : p.actionGroupId) || "") === c);
    return f ? {
      ...f,
      id: ca("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Qt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!_o(ca(c, s));
  }
  function cr(i, s = null) {
    const c = fa(i, s), f = String(c.actionGroupId || "").trim();
    return f ? Io(c.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function sb(i, s = "paint") {
    const c = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${c}:${h.mode}:${ya()}`;
    if (h.mode === "frame") {
      const m = Ge(), g = String((m == null ? void 0 : m.id) || ""), _ = m ? en(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function us(i, s, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: J(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function Xn(i, s) {
    let c = Number(i || 0) - Number(s || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function hc(i, s = null, c = null) {
    var A;
    const f = fa(i, s), p = Array.isArray(c) ? c : cr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const E = (M == null ? void 0 : M.geometry) || null, O = (E == null ? void 0 : E.geometryKind) === "lasso_fill" ? E == null ? void 0 : E.points : (E == null ? void 0 : E.processedPoints) || (E == null ? void 0 : E.rawPoints) || (E == null ? void 0 : E.points) || [];
      Array.isArray(O) && m.push(...O);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((A = m[0]) == null ? void 0 : A.u) || 0);
    let _ = 0, k = 0;
    return m.forEach((M) => {
      _ += g + Xn(Number((M == null ? void 0 : M.u) || 0), g), k += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: J(k / m.length, 0, 1)
    };
  }
  function fs(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Xn(Number(i.u || 0), p), _ = Number(i.v || 0) - m, k = Number(f || 0) * Sr, A = Math.cos(k), M = Math.sin(k), E = Math.max(0.02, Number(c || 1)), O = (g * A - _ * M) * E, j = (g * M + _ * A) * E;
    return {
      ...i,
      u: ((p + O) % 1 + 1) % 1,
      v: J(m + j, 0, 1)
    };
  }
  function kd(i, s, c, f = null, p = null, m = null) {
    const g = fa(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const k = Io(g.layerKind), A = Array.isArray(f) ? new Map(f.map((E) => [String((E == null ? void 0 : E.id) || ""), E])) : null;
    let M = !1;
    if (k.forEach((E) => {
      if (String((E == null ? void 0 : E.actionGroupId) || "").trim() !== _) return;
      const O = (A == null ? void 0 : A.get(String((E == null ? void 0 : E.id) || ""))) || E, j = E == null ? void 0 : E.geometry, te = O == null ? void 0 : O.geometry;
      !j || !te || (Array.isArray(te.points) && (j.points = te.points.map((Z) => us(Z, s, c)), M = !0), Array.isArray(te.rawPoints) && (j.rawPoints = te.rawPoints.map((Z) => us(Z, s, c)), M = !0), Array.isArray(te.processedPoints) && (j.processedPoints = te.processedPoints.map((Z) => us(Z, s, c)), M = !0));
    }), M && m) {
      const E = mn().find((O) => String((O == null ? void 0 : O.actionGroupId) || "") === _);
      E && (E.frame = null);
    }
    return M;
  }
  function Md(i, s = 1, c = 0, f = null, p = null, m = null) {
    const g = fa(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const k = Io(g.layerKind), A = Array.isArray(f) ? f : cr(_, g.layerKind), M = Array.isArray(A) ? new Map(A.map((j) => [String((j == null ? void 0 : j.id) || ""), j])) : null, E = (m == null ? void 0 : m.centerUv) ?? hc(_, g.layerKind, A);
    let O = !1;
    if (k.forEach((j) => {
      if (String((j == null ? void 0 : j.actionGroupId) || "").trim() !== _) return;
      const te = (M == null ? void 0 : M.get(String((j == null ? void 0 : j.id) || ""))) || j, Z = j == null ? void 0 : j.geometry, ne = te == null ? void 0 : te.geometry;
      !Z || !ne || (Array.isArray(ne.points) && (Z.points = ne.points.map((ae) => fs(ae, E, s, c)), O = !0), Array.isArray(ne.rawPoints) && (Z.rawPoints = ne.rawPoints.map((ae) => fs(ae, E, s, c)), O = !0), Array.isArray(ne.processedPoints) && (Z.processedPoints = ne.processedPoints.map((ae) => fs(ae, E, s, c)), O = !0));
    }), O && m) {
      const j = mn().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === _);
      j && (j.frame = null);
    }
    return O;
  }
  function Nd(i, s, c, f = null) {
    const p = on(i);
    if (!p) return !1;
    const m = En().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, _ = (g == null ? void 0 : g.transform) || {}, k = Number(_.du || 0) + Number(s || 0), A = J(Number(_.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = A, !0;
  }
  function lb(i, s = 1, c = null) {
    const f = on(i);
    if (!f) return !1;
    const p = En().find((A) => String((A == null ? void 0 : A.id) || "").trim() === f);
    if (!p) return !1;
    const m = c && typeof c == "object" ? c : p, g = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(g.scale || 1)), k = J(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = k, !0;
  }
  function Nt() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = _o(i);
    if (s) return s;
    const c = vo(i);
    return c || (t === "cutout" ? pc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : vr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function ur() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], c = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || c.has(p)) return;
      c.add(p);
      const m = p === String(h.selectedId || "") ? Nt() : _o(p) || vo(p) || (t === "cutout" ? pc().find((g) => String((g == null ? void 0 : g.id) || "") === p) : vr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function ds(i = null) {
    const s = Array.isArray(i) ? i : ur();
    if (!s || s.length < 2) return null;
    const c = s.map((A) => Xt(A)).filter((A) => (A == null ? void 0 : A.visible) && Array.isArray(A.corners) && A.corners.length);
    if (!c.length) return null;
    const f = c.flatMap((A) => A.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = c.flatMap((A) => A.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), _ = Math.min(...p), k = Math.max(...p);
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
  function Pd(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function ps() {
    const i = Nt();
    return i ? Qt(i) || gn(i) ? "stroke" : $n(i) ? "frame" : "image" : null;
  }
  function Mn(i) {
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), c = mn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (gn(i)) {
      const s = on(i.rasterObjectId || i.id || ""), c = En().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function mc(i = null) {
    const s = Array.isArray(i) ? i : ur();
    return s.length > 0 && s.every((c) => Mn(c));
  }
  function cb(i, s) {
    const c = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = mn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    if (gn(i)) {
      const f = on(i.rasterObjectId || i.id || ""), p = En().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === c ? !1 : (p.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function ub() {
    if (r) return;
    const i = ur();
    if (!i.length) return;
    const s = !mc(i);
    let c = !1;
    i.forEach((f) => {
      cb(f, s) && (c = !0);
    }), c && (at(), lt(), qe(), He(), ue());
  }
  function _r(i) {
    h.inspectCamera = !1, Le.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && yt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && $n(i) ? v.active.selected_shot_id = i.id || null : i ? $n(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function fb(i, s = null) {
    const c = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const _ = String((g == null ? void 0 : g.id) || "").trim();
      !_ || f.has(_) || (f.add(_), c.push(_));
    }), h.selectedIds = c, h.inspectCamera = !1, Le.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && c.includes(p) ? p : c[c.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && yt(m) && m.id || null, m && $n(m) ? v.active.selected_shot_id = m.id || null : c.length || (v.active.selected_shot_id = null);
  }
  function Ad() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((c, f) => ({
      kind: "frame",
      item: c,
      label: String((c == null ? void 0 : c.label) || `Frame ${f + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((c, f) => {
      var m, g;
      const p = zt(c) ? String(c.id || Cu) : String(((g = (m = v.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : g.name) || c.asset_id || c.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: c,
        label: p
      };
    });
    return [...i, ...s];
  }
  function db(i) {
    return i === "frame" ? Ne.camera : i === "stroke" ? Ne.paintbrush_vertical_tool : Ne.image;
  }
  function gc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: db(i.kind)
    };
  }
  function hs() {
    return cc();
  }
  function zt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Cu || String(i.source_kind || "") === CC;
  }
  function wo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function pb(i) {
    return zt(i) && wo(i) ? G0 : 1;
  }
  function hb() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function mb() {
    return String(hb() || "") === "lasso_fill";
  }
  function gb() {
    if (r) return;
    const i = Nt();
    !i || !zt(i) || (i.visible = wo(i), Wt(), at(), lt(), He(), qe(), ue());
  }
  function yb() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !zt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = _c(Gs, () => {
      ue();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = gi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), at(), lt(), He(), qe(), ue();
  }
  function bb(i) {
    if (!i || !zt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const c = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = _c(Gs, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (c.vFOV_deg = gi(
      c.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), c;
  }
  function vb() {
    const i = Nt();
    if (!i || !zt(i)) return !1;
    const s = bb(i);
    if (!s) return !1;
    const c = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(c(i.yaw_deg, s.yaw_deg) && c(i.pitch_deg, s.pitch_deg) && c(i.hFOV_deg, s.hFOV_deg) && c(i.vFOV_deg, s.vFOV_deg) && c(i.rot_deg, s.rot_deg));
  }
  function Gr(i) {
    return Gn.uiList(e, i);
  }
  function yc(i) {
    return Gn.uiValue(e, i);
  }
  function Cd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Ml(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function _b() {
    const { metaKey: i } = Cd(), s = yc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function bc(i) {
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
  function vc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), c = Math.floor(s / 60), f = s % 60;
    return `${c}:${String(f).padStart(2, "0")}`;
  }
  function ms() {
    return S ? v.timeline.fps : ze.metaFps || 1e3;
  }
  function hi(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), c = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), f = Mt.frame / ms(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = Mt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : I.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : I.videoTransport.volume
    ), A = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : go(Y), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: vc(f),
      durationLabel: vc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: c,
      hasAudio: A,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? mt))
    });
  }
  function Id() {
    return !!(Y instanceof HTMLVideoElement && !S && Y.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Ed() {
    if (!(Y instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), hi({
      hasAudio: I.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function wb() {
    hi({
      visible: Id()
    });
  }
  function xb() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    ($t.width !== i || $t.height !== s) && ($t.width = i, $t.height = s);
    const c = $t.getContext("2d");
    return c ? (c.clearRect(0, 0, i, s), c.drawImage(Y, 0, 0, i, s), $t.__panoFrameIdx = Number($t.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Od() {
    return !Mt.showsVideo && Number($t.width || 0) > 0 && Number($t.height || 0) > 0 && Number($t.__panoFrameIdx || 0) > 0 ? $t : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function Fd() {
    $t.__panoFrameIdx = 0, Pe.backgroundDirty = !0;
  }
  function mi() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Cd(), s = vn(e, "background") && Gr(i)[0] || null, c = Ea(s), f = [c, Gn.linkedVideoFile(e, Zd())].filter(Boolean), p = f.find((E) => !ze.failedSrcs.has(E)) || "";
    ze.videoFailed = !p && f.length > 0;
    const m = p && p === c ? _b() : null;
    ze.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? v.timeline.fps : 24))), _ = Y.dataset.panoSrc === p && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : _)), A = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * g))), M = !!(m != null && m.has_audio) || go(Y);
    return p && Y.dataset.panoSrc !== p ? (Y.pause(), Fd(), Y.dataset.panoSrc = p, Y.loop = !S && !!I.videoTransport.loop, Y.muted = !!I.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), Y.src = p, Y.load(), Mt.setSource(!0), S || Mt.seek(0)) : !p && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), Fd(), fn(), Mt.setSource(!1)), S || (Y.loop = !!I.videoTransport.loop), p && !S && ze.thumbnailSrc !== p && !ze.thumbnailFailedSrcs.has(p) && Ti(p, k, g), p || fn(), hi({
      ready: !!p,
      visible: !!p && Id(),
      duration: k,
      frameCount: A,
      fps: g,
      hasAudio: M,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), p || null;
  }
  function Td(i, s = null) {
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
  function _c(i, s = null) {
    return Fu(e, i, We, s || (() => ue()));
  }
  function wc(i = null) {
    return vn(e, "external-sticker") ? _c(Gs, i) : null;
  }
  function Dd() {
    if (!vn(e, "external-sticker")) return null;
    const i = Gr(OC)[0];
    if (!i || typeof i != "object") return null;
    const s = Gr(EC).map(Ea).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const c = Ea(Gr(IC)[0] || null);
    return c ? { src: c, meta: i } : null;
  }
  function Sb() {
    const i = v.stickers.find(zt), s = i ? Dd() : null, c = s ? oy(i.clip, h.frame, v.timeline.fps, s.meta) : null;
    jr.follow({ src: (s == null ? void 0 : s.src) || "", time: c, playing: Mt.advancing, fps: v.timeline.fps });
    const f = i ? Ac(i) : null, p = s != null && s.frames ? In.picture(s.frames, c, s.meta, f) : jr.picture(Yn, f);
    return p ? { media: p, revision: bc(p), source: sy(s, f) } : null;
  }
  function gi(i, s, c) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(c || 1)), m = J(Number(i || 30), 0.1, 179) * Sr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return J(g * qi, 0.1, 179);
  }
  function kb(i) {
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
      const g = Number(m.yaw_deg), _ = Number(m.pitch_deg), k = Number(m.roll_deg), A = Number(m.hFOV_deg);
      if (![g, _, k, A].every((j) => Number.isFinite(j))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const E = {
        yaw_deg: M,
        pitch_deg: J(_, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: J(A, 0.1, 179)
      }, O = Number(c.source_aspect);
      return Number.isFinite(O) && O > 0 && (E.source_aspect = O), E;
    } catch {
      return null;
    }
  }
  function Ld(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = io(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Mb(i) {
    var _;
    if (!i || typeof i != "object") return Ld(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const k = J(p, 0.1, 179) * Sr, A = J(m, 0.1, 179) * Sr, M = Math.tan(A * 0.5);
      if (Math.abs(M) > 1e-6) {
        const E = Math.tan(k * 0.5) / M;
        Number.isFinite(E) && E > 0 && (g = E);
      }
    }
    if (i != null && i.asset_id && ((_ = v == null ? void 0 : v.assets) != null && _[i.asset_id])) {
      const k = v.assets[i.asset_id], A = Number((k == null ? void 0 : k.w) || 0), M = Number((k == null ? void 0 : k.h) || 0);
      A > 0 && M > 0 && (g = A / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: J(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Nb(i) {
    return Gn.linkedValue(e, i);
  }
  function Pb(i, s, c) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : kb(s);
    if (f) {
      const g = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || f.source_aspect || 1), _ = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: gi(f.hFOV_deg, g, _),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: gi(30, p, m),
      rot_deg: 0
    };
  }
  function Ab() {
    const i = wc(() => {
      ii(e, "image-loaded");
    }), s = vn(e, "external-sticker") ? Td(yc("pano_sticker_input_pose"), null) : null;
    return yy(v, gy(e, { pose: s, image: i }));
  }
  function Cb() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, c = wc(() => {
      ii(e, "image-loaded");
    }), f = Td(yc("pano_sticker_input_pose"), null), p = Nb("sticker_state"), m = Gn.externalStateHash(e, p), g = s == null ? null : Pb(f, p, c);
    return my(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
  }
  function Rd(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? Ab() : Cb();
    if (s.changed) {
      const c = v.stickers.find(zt);
      v.stickers = s.state.stickers, v.active = s.state.active, c && h.selectedId === c.id && !v.stickers.some((f) => f.id === c.id) && (h.selectedId = null, h.selectedIds = []), lt(), He(), qe();
    }
    ue();
  }
  function da(i = {}) {
    const c = i.preservePanelValues !== !1 ? Yt(Nt()) : null;
    c && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ei(c)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Ib() {
    if (t !== "cutout") return;
    const i = Ge();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function xc() {
    if (t !== "cutout") return;
    const i = Ge();
    Gi(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ne.camera : Ne.plus_circle
    });
  }
  function gs() {
    const i = t === "cutout" && h.mode === "frame", s = !i && !!h.showGrid;
    Gi(I.floatingButtons, "action", "reset-view", {
      disabled: r || i
    });
    const c = Sc(), f = c && h.spaceMode === "6dof";
    I.spaceButtons.forEach((p) => {
      p.visible = c, p.pressed = p.key === h.spaceMode ? "true" : "false";
    }), Gi(I.floatingButtons, "action", "frame-view", {
      visible: f,
      disabled: r || !f
    }), Gi(I.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ne.eye : Ne.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Kr() {
    var c;
    const i = !!Ge();
    h.mode === "frame" && !i && (h.mode = "pano"), h.outputPreviewRect = null, I.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && h.mode === "frame" ? Ge() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = Lo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((c = h.interaction) == null ? void 0 : c.kind) === "roll_frame", I.frameRollKnob.armed = !!s && h.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? ei(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(ei(s)) === f
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!Ge(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = h.mode !== "frame", I.cameraPreview.expanded = !!h.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame), gs(), Ep() ? gt(h.pointerPos) : Ie(h.mode === "pano" ? "grab" : "default");
  }
  function Eb() {
    const s = Qd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Vd() {
    return K0({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, C.width, C.height);
  }
  function $d() {
    return !S || !vn(e, "scene") ? null : nm(Gr("pano_scene_files"), Gr("pano_scene_meta"), Ea);
  }
  function Ob() {
    return !S || !vn(e, "external-sticker") ? null : nm(Gr("pano_sticker_files"), Gr("pano_sticker_meta"), Ea);
  }
  function Sc() {
    return h.mode === "pano" && zd();
  }
  function zd() {
    return S && ak({ sceneLinked: !!J0(e).scene, files: $d(), stickers: v.stickers });
  }
  function pa() {
    return h.spaceMode === "6dof" && Sc();
  }
  function kc() {
    var i, s, c;
    return BM((c = (s = (i = mr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : c.call(s, Fy));
  }
  function jd() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Hd(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function Fb(i) {
    Hd(z0(jd(), i)), Pe.backgroundDirty = !0, gs(), ue({ localOnly: !0 });
  }
  function yi() {
    var c;
    const i = h.viewMoved ? h.viewDistance : ((c = xo()) == null ? void 0 : c.radius) || Zi, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return XS(h.spaceMode, s);
  }
  function xo() {
    var i;
    return ((i = Mo().space) == null ? void 0 : i.sphere) ?? null;
  }
  function Mc(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, Pe.backgroundDirty = !0, ue({ localOnly: !0 });
  }
  function Gd() {
    var i;
    return ((i = xo()) == null ? void 0 : i.radius) || Zi;
  }
  function Tb() {
    const i = xo();
    i && Mc(rk(yi(), i, C.width, C.height));
  }
  function Kd(i) {
    const s = vu(yi(), C.width, C.height, xo());
    return Et.pick(s, i.x, i.y, C.width, C.height);
  }
  function Bd(i, s) {
    var c;
    return ZS(i, s, h.viewMoved ? null : (c = xo()) == null ? void 0 : c.center, Gd());
  }
  function Wd() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function Db(i, s) {
    const c = performance.now(), f = { x: i.x, y: i.y, time: c, key: Et.contentKey(), view: Wd() };
    if (!QS(me, f)) {
      const m = Kd(i);
      me = { ...f, cost: performance.now() - c, hit: m };
    }
    const p = yi();
    Mc(nk(p, Bd(p, me.hit), s, Gd())), me.view = Wd(), me.wheelTime = c;
  }
  function Ud(i, s, c) {
    const f = Bd(yi(), Kd(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: ac(yi(), f) }, gt(s), C.setPointerCapture(c);
  }
  function Nc() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${C.width}|${C.height}`;
    return zr.key !== i && (zr = { key: i, projection: B0(Vd(), C.width, C.height) }), zr.projection;
  }
  function ha(i) {
    const s = Nc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Pc(i, s) {
    return Nc().ray(i, s);
  }
  function bi() {
    const i = C.width, s = C.height, c = 2;
    if (i / Math.max(s, 1) >= c) {
      const _ = s, k = _ * c;
      return { x: (i - k) * 0.5, y: 0, w: k, h: _ };
    }
    const p = i, m = p / c;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Ac(i) {
    var g;
    if (i && typeof i == "object" && (zt(i) || i.external === !0))
      return wc(() => {
        ii(e, "image-loaded");
      });
    const s = S ? ma(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const c = We.get(s);
    if (c) return c;
    const f = S ? T0(i.source) : (g = v.assets) == null ? void 0 : g[s], p = HC(f);
    if (!p) return null;
    const m = new Image();
    return Uy(m, p), m.onload = () => {
      Yy(m, p), ue();
    }, m.onerror = () => {
      Xy(m, p), ue();
    }, m.src = p, We.set(s, m), m;
  }
  function ma(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Yd(i, s = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const f = Dt.get(c);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = c, Dt.set(c, p), p;
  }
  function Lb(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = cn.get(s);
    if (c) return c.ready ? c : null;
    const f = Yd(i, () => {
      const M = cn.get(s);
      M && (M.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const _ = g.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, p, m), _.drawImage(f, 0, 0, p, m);
    const k = _.getImageData(0, 0, p, m).data, A = { canvas: g, width: p, height: m, alpha: k, ready: !0 };
    return cn.set(s, A), A;
  }
  function Rb(i, s, c = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Xn(Number(i.u || 0), p), _ = Number(i.v || 0) - m, k = Math.max(0.02, Number(c || 1)), A = Number(f || 0) * Sr, M = Math.cos(A), E = Math.sin(A), O = g / k, j = _ / k, te = O * M + j * E, Z = -O * E + j * M;
    return {
      ...i,
      u: ((p + te) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function Vb(i, s) {
    if (!i || !s) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = Rb(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), _ = Number(c.u1 || 0) - Number(c.u0 || 0), k = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(_ > 1e-6) || !(k > 1e-6)) return null;
    const A = Xn(Number(g.u || 0), Number(c.u0 || 0)) / _, M = (Number(g.v || 0) - Number(c.v0 || 0)) / k;
    if (A < 0 || A > 1 || M < 0 || M > 1) return 0;
    const E = Lb(i);
    if (!E) return null;
    const O = J(Math.floor(A * E.width), 0, E.width - 1), j = J(Math.floor(M * E.height), 0, E.height - 1);
    return Number(E.alpha[(j * E.width + O) * 4 + 3] || 0);
  }
  function Xd(i, s, c, f = null) {
    if (!(s != null && s.visible) || !Jr(c, s.corners)) return !1;
    const p = f || dr(c, performance.now()), m = Vb(i, p);
    return m === null ? !0 : m > 8;
  }
  function $b() {
    var f, p, m, g, _, k, A, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, uc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : _.width) || 2048)), c = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((M = (A = i == null ? void 0 : i.displayPaint) == null ? void 0 : A.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: c };
  }
  function zb() {
    var j, te, Z;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const c = zn(), f = `${dc()}:${c.width}:${c.height}`;
    if (((j = h._activePaintEraserPreviewInfo) == null ? void 0 : j.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = bn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Lc(ne, p.targetSpace, !0);
    }
    const g = ga(c.width, c.height, { readback: !0 });
    if (!pp(g, p, { w: c.width, h: c.height })) return null;
    const _ = ((Z = (te = g.ctx) == null ? void 0 : te.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Z.data) || null;
    if (!_) return null;
    let k = c.width, A = c.height, M = -1, E = -1;
    for (let ne = 0; ne < c.height; ne += 1)
      for (let ae = 0; ae < c.width; ae += 1)
        _[(ne * c.width + ae) * 4 + 3] <= 8 || (ae < k && (k = ae), ne < A && (A = ne), ae > M && (M = ae), ne > E && (E = ne));
    if (M < k || E < A)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const O = {
      surface: g,
      bounds: { minX: k, minY: A, maxX: M, maxY: E },
      key: `${f}:${k}:${A}:${M}:${E}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: O }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), O;
  }
  function So() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function jb(i, s, c) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, _ = Number(m.u0 || 0) + Number(g.du || 0), k = Number(m.u1 || 0) + Number(g.du || 0), A = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(A, 0, 1) * c),
        maxY: Math.ceil(J(M, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = cr(i.actionGroupId, "paint"), g = pi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const _ = g.centerUv.u - g.halfW, k = g.centerUv.u + g.halfW, A = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(A, 0, 1) * c),
        maxY: Math.ceil(J(M, 0, 1) * c),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    return null;
  }
  function Hb(i, s, c) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: c - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((_) => !(g.maxX < _.minX || _.maxX < g.minX || g.maxY < _.minY || _.maxY < g.minY)));
  }
  function Gb(i, s, c) {
    var Se, Ke, Ye, rt, be, oe, he;
    if (!i || !s || !((Se = c == null ? void 0 : c.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || c.surface.canvas.width || 0), p = Number(i.height || c.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = jb(s, f, p);
    if (m && !Hb(m, c.bounds, f)) return i;
    const g = String(((Ke = s.item) == null ? void 0 : Ke.id) || s.id || ""), _ = ((Ye = s.item) == null ? void 0 : Ye.transform) || {}, k = `${c.key}:${g}:${f}:${p}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, A = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (A.has(k)) return A.get(k);
    const M = J(Math.floor(Number(((rt = c.bounds) == null ? void 0 : rt.minX) || 0)), 0, Math.max(0, f - 1)), E = J(Math.floor(Number(((be = c.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, p - 1)), O = J(Math.ceil(Number(((oe = c.bounds) == null ? void 0 : oe.maxX) || 0)), M, Math.max(0, f - 1)), j = J(Math.ceil(Number(((he = c.bounds) == null ? void 0 : he.maxY) || 0)), E, Math.max(0, p - 1)), te = Math.max(1, O - M + 1), Z = Math.max(1, j - E + 1), ne = ga(f, p, { readback: !0 });
    ne.ctx.clearRect(0, 0, f, p), ne.ctx.drawImage(i, 0, 0);
    const ae = ne.ctx.getImageData(M, E, te, Z);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(c.surface.canvas, 0, 0), ne.ctx.restore();
    const pe = ne.ctx.getImageData(M, E, te, Z);
    let ie = !1;
    for (let we = 0; we < te * Z; we += 1) {
      const Re = ae.data[we * 4 + 3], Ue = pe.data[we * 4 + 3];
      if (Re > Ue) {
        ie = !0;
        break;
      }
    }
    return ie ? (A.size > 64 && A.clear(), A.set(k, ne.canvas), ne.canvas) : (A.set(k, i), i);
  }
  function qd(i, s = null) {
    const c = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!c || !f) return null;
    const p = Yd(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = $b(), _ = (i == null ? void 0 : i.transform) || {}, k = [
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
      ya()
    ].join(":"), A = nn.get(k);
    if (A) return A;
    nn.size > 64 && nn.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const E = M.getContext("2d");
    if (!E) return null;
    const O = Number(f.u0 || 0) * m, j = Number(f.v0 || 0) * g, te = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Z = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), ne = O + te * 0.5 + Number(_.du || 0) * m, ae = j + Z * 0.5 + Number(_.dv || 0) * g, pe = Number(_.rot_deg || 0) * Sr, ie = Math.max(0.01, Number(_.scale || 1));
    for (const Se of [-m, 0, m])
      E.save(), E.translate(ne + Se, ae), E.rotate(pe), E.scale(ie, ie), E.drawImage(p, -te * 0.5, -Z * 0.5, te, Z), E.restore();
    return nn.set(k, M), M;
  }
  async function Cc(i, s) {
    const c = await new Promise((_) => i.toBlob(_, "image/png")), f = new FormData();
    f.append("image", c, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Gt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let ys = null, bs = !1;
  function Kb() {
    const i = Xm(v.painting), { width: s, height: c } = va();
    return DS(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: c, nodeId: String(e.id ?? "0") });
  }
  function Jd() {
    const i = String(e.id ?? "0"), s = Ks.get(i);
    if (bs && s) return s;
    const c = (async () => {
      var m, g, _, k, A, M, E, O, j, te, Z, ne;
      const f = ba(), p = Xm(v.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, ys = f, Fn());
        return;
      }
      if (ys !== f && !bs) {
        bs = !0;
        try {
          Ss();
          const ae = uc(!1), pe = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ae)) || null, ie = ((_ = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : _.canvas) || null, Se = ((k = pe == null ? void 0 : pe.committedMask) == null ? void 0 : k.canvas) || null, Ke = Math.max(1, Number(((A = pe == null ? void 0 : pe.descriptor) == null ? void 0 : A.width) || (ie == null ? void 0 : ie.width) || (Se == null ? void 0 : Se.width) || 2048)), Ye = Math.max(1, Number(((M = pe == null ? void 0 : pe.descriptor) == null ? void 0 : M.height) || (ie == null ? void 0 : ie.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!ie && p.totalPaintCount > 0 || !Se && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((E = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.width) || 0) !== Ke || Number(((O = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : O.height) || 0) !== Ye) && (h._paintLayerSyncBlankSurface = ga(Ke, Ye)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ke, Ye));
          const rt = ie || p.totalPaintCount > 0 && ((j = h._paintLayerSyncBlankSurface) == null ? void 0 : j.canvas) || null, be = Se || p.totalMaskCount > 0 && ((te = h._paintLayerSyncBlankSurface) == null ? void 0 : te.canvas) || null;
          if (!rt && !be) return;
          let oe = null, he = null;
          const we = [];
          if (p.totalPaintCount > 0) {
            oe = await Cc(rt, `pano_paint_${i}.png`);
            for (const Re of ae) {
              const Ue = String(Re || "").trim();
              if (!Ue) continue;
              const Te = ((ne = (Z = h.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : ne.call(Z, Ue)) || null;
              if (!Te) continue;
              const ft = Ue.replace(/[^a-zA-Z0-9_-]+/g, "_"), Je = await Cc(Te, `pano_group_${i}_${ft}.png`);
              Je && we.push({
                id: Ue,
                actionGroupId: Ue,
                image: Je
              });
            }
          }
          p.totalMaskCount > 0 && (he = await Cc(be, `pano_mask_${i}.png`)), f === ba() && (v.painting_layer = {
            paint: oe,
            mask: he,
            groups: we,
            revision: f
          }, ys = f, Fn());
        } catch (ae) {
          throw ae;
        } finally {
          bs = !1;
        }
      }
    })();
    return Ks.set(i, c), c.finally(() => {
      Ks.get(i) === c && Ks.delete(i);
    }), c;
  }
  function Ic() {
    if (t === "cutout") {
      const p = Od();
      if (p) return p;
      const m = Tu(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Sf(m) ? m : Fu(e, "pano_input_images", We, () => ue()) || m || null;
    }
    const i = Od();
    if (i) return i;
    const s = vn(e, "background") ? Fu(e, "pano_input_images", We, () => ue()) : null;
    if (s && !Sf(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const c = Zd();
    return Tu(e, c, () => ue(), `background:${c.join("|")}`) || s || null;
  }
  function Zd() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), c = i.includes("bg_erp");
    return r && (s || c) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Ec(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Bb() {
    if (Et.failed) return { status: er, detail: "renderer" };
    if (!Et.ready) return { status: hr, detail: "boot" };
    let i = aa;
    const s = [];
    if (h.showPanorama) {
      const c = Ic();
      i = ze.videoFailed ? er : xf(c, Ec);
    }
    if (h.showObjects)
      for (const c of cs()) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const f = Ac(c);
        s.push(xf(f, Ec));
      }
    return NC({
      presented: Pe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function ko() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], We.delete(s));
    });
  }
  function Oc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(J(i.y, -1, 1))
    };
  }
  function Fc(i, s = null) {
    const { lon: c, lat: f } = Oc(i), p = bi();
    let m = p.x + (c / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function vs(i) {
    const s = Yt(i), c = la(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(J(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Sr), p = Math.tan(J(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Sr);
    return {
      centerDir: c.fwd,
      right: c.right,
      up: c.up,
      tanX: f,
      tanY: p
    };
  }
  function vi(i, s, c) {
    return qC(Um(Um(i.centerDir, Ym(i.right, s)), Ym(i.up, c)));
  }
  function Qd(i) {
    const s = vs(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => vi(s, f * s.tanX, p * s.tanY));
  }
  function ep(i, s, c) {
    const f = vs(i), p = (s * 2 - 1) * f.tanX, m = (1 - c * 2) * f.tanY;
    return vi(f, p, m);
  }
  function tp(i) {
    const s = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: J((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Wb(i) {
    var k, A, M, E;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const c = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), p = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((O) => us(fs(O, c, f, p), m, g));
  }
  function Ub(i) {
    const s = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${ya()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (h.mode === "frame") {
      const m = Ge(), g = m ? en(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Yb(i) {
    const s = String((i == null ? void 0 : i.id) || ""), c = $n(i) ? "frame" : yt(i) ? "sticker" : "item", f = Yt(i), p = [
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
      sr(i) && Pi(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = Ge(), g = m ? en(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function np() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Xb() {
    return np() ? `${cp()}:mask_display` : "";
  }
  function rp(i) {
    if (!h.showMask) return i;
    const s = np();
    if (!s) return i;
    const c = Xb(), f = i.reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), p = (Array.isArray(v.stickers) ? v.stickers : []).reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: c,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function qb() {
    var f, p;
    const i = fc(!0), s = zb(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const _ = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!_) continue;
        c.push({
          id: `paint_group:${g}`,
          source: _,
          revision: `${cp()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, _ = on((g == null ? void 0 : g.id) || m.id || "");
        if (!_) continue;
        const k = qd(g, () => ue());
        if (!k) continue;
        const A = Gb(k, m, s), M = (g == null ? void 0 : g.transform) || {};
        c.push({
          id: `raster:${_}`,
          source: A,
          revision: [
            ba(),
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
    return rp(c);
  }
  function Jb() {
    return (h.showObjects ? qb() : rp([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Mo() {
    return ho || (ho = Zb()), ho;
  }
  function Zb() {
    const i = Ic(), s = Jb(), c = { ...v.assets };
    for (const E of S ? [] : v.stickers) {
      const O = String((E == null ? void 0 : E.asset_id) || "");
      O && !c[O] && We.has(O) && (c[O] = { type: "comfy_image", filename: O });
    }
    const f = S ? v.stickers.map((E) => lc(E) ? { ...E, source: { kind: "file", filename: ma(E) } } : E) : v.stickers, p = JSON.stringify([f, Object.keys(c), v.scene]);
    br.key !== p && (br = { key: p, sceneState: co({ ...v, stickers: f, assets: c, painting: null }) });
    const m = jr ? Sb() : null, g = (E) => {
      if (jr && zt(E)) return m;
      const O = Ac(E);
      return O ? { media: O, revision: bc(O) } : null;
    }, _ = h.showObjects ? W0(br.sceneState, h.frame, v.stickers, { media: g, paintLayers: s }) : s.map((E) => ({ kind: "erp", ...E })), k = i && (i === Y || i === $t) ? Y.dataset.panoSrc : i, A = h.showPanorama && Ec(i) ? { media: i, revision: bc(i), coverage: Hn(v.coverage), source: k } : null;
    Hd(qS(jd(), zd()));
    const M = Sc() ? Qb(br.sceneState, g) : null;
    return { background: A, layers: _, space: M };
  }
  function Qb(i, s) {
    const c = Jf(i, h.frame), f = $d(), p = H0(f, c.scene), m = p != null && p.url ? Et.sceneBox(p.url) : null, g = m && im(p.kind, m), _ = Ob(), k = h.showObjects ? sk(_, i, c) : null, A = k != null && k.url ? Et.sceneBox(k.url) : null, M = A ? [{ box: im(k.kind, A), value: k.value }] : [], E = h.showObjects ? vk(i, h.frame, v.stickers, { media: s }) : [], O = fk(dk(c, g, E, M));
    return {
      grid: h.showGrid && !h.fullscreen ? mk((O == null ? void 0 : O.radius) || Zi) : null,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: lk(_, i),
      sticker: k,
      stickers: E,
      sphere: O
    };
  }
  function e1() {
    if (!Pe.backgroundDirty && Pe.backgroundWasVisible) return;
    const { background: i, layers: s, space: c } = Mo(), f = se.width, p = se.height, m = Et.render({
      width: f,
      height: p,
      camera: c ? vu(yi(), f, p, c.sphere) : Vd(),
      background: i,
      layers: s,
      space: c
    }), g = se.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !c ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), Pe.backgroundWasVisible = !!m, Pe.backgroundDirty = !1, z = null, gs();
  }
  function ip(i, s, c, f) {
    const { background: p, layers: m } = Mo();
    if (!p && !m.length) return !1;
    const g = Et.render({ width: s.w, height: s.h, camera: il(c), background: p, layers: m, owner: f });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function t1(i) {
    const s = Mo(), c = JSON.stringify([i, se.width, se.height, lm(s)]);
    if (c === z) return;
    const f = Et.renderUnwrap({ width: i.w, height: i.h, ...s }), p = se.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, se.width, se.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), z = f ? c : null, Pe.backgroundWasVisible = !1;
  }
  function n1(i = !1) {
    const s = C.width, c = C.height, f = bi();
    if (P.globalAlpha = 1, P.lineWidth = 1, i || P.clearRect(0, 0, s, c), Ss(), t1(f), h.showGrid && !h.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        P.beginPath(), P.moveTo(g, f.y), P.lineTo(g, f.y + f.h), P.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        P.beginPath(), P.moveTo(f.x, g), P.lineTo(f.x + f.w, g), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(f.x, f.y + f.h / 2), P.lineTo(f.x + f.w, f.y + f.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const p = f.y + f.h * 0.57;
      P.fillText("Left", f.x + f.w * 0.25, p), P.fillText("Front", f.x + f.w * 0.5, p), P.fillText("Right", f.x + f.w * 0.75, p), P.fillText("Back", f.x + 38, p), P.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function op(i, s, c = 1) {
    let f = !1;
    P.strokeStyle = s, P.lineWidth = c, P.beginPath();
    for (const p of i) {
      const m = ha(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? P.lineTo(m.x, m.y) : (P.moveTo(m.x, m.y), f = !0);
    }
    P.stroke();
  }
  function r1(i = !1) {
    const s = C.width, c = C.height;
    if (i || P.clearRect(0, 0, s, c), Ss(), e1(), h.showGrid && !h.fullscreen && Mo().space)
      i1();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Vn(p, g));
        op(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Vn(g, p));
        op(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Vn(-90, 0) },
        { name: "Front", dir: Vn(0, 0) },
        { name: "Right", dir: Vn(90, 0) },
        { name: "Back", dir: Vn(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", f.forEach((p) => {
        const m = ha(p.dir);
        m && P.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function i1() {
    const i = vu(yi(), C.width, C.height, xo()), s = ik(i, [0, 0, 0], C.width, C.height);
    s && (P.fillStyle = "rgba(255, 221, 87, 0.9)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", P.fillText("ERP origin", s.x, s.y - 12));
  }
  function o1(i, s = null, c = null, f = null) {
    if (h.mode === "frame") {
      const p = s || Ge();
      if (!p) return [];
      const m = c || en(p);
      return L1(i, p, m);
    }
    return hp(i, f);
  }
  function _s(i, s = null, c = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = hp([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = No(i);
    return m ? Br(m, s, c, f) : null;
  }
  function a1(i, s) {
    const c = String(i.actionGroupId || i.id || "").trim(), f = cr(c, i.layerKind), p = pi(c, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || hc(c, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], k = h.mode === "frame" ? Ge() : null, A = k ? en(k) : null;
    for (const ie of f) {
      const Se = (ie == null ? void 0 : ie.geometry) || null, Ke = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Ye = o1(Ke, k, A, g).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!Ye.length) continue;
      const rt = xi(String((ie == null ? void 0 : ie.toolKind) || "pen")), be = Tn[rt] || Tn[Xr];
      _.push({
        points: Ye,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || i.layerKind || "paint")
      });
    }
    const M = _s(m, null, k, A, g);
    if (!M) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const O = tb(p).map((ie) => _s(ie, M.x, k, A, g)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (O.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const j = (ie, Se) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: ie,
      b: Se
    }), te = j(O[0], O[1]), Z = j(O[1], O[2]), ne = j(O[2], O[3]), ae = j(O[3], O[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: O,
      edgeMidpoints: [
        { edge: "top", ...te },
        { edge: "right", ...Z },
        { edge: "bottom", ...ne },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: { x: te.x, y: te.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return h._strokeGeomCache.set(s, pe), pe;
  }
  function s1(i, s) {
    const c = h.mode === "frame" ? Ge() : null, f = c ? en(c) : null, p = tp(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = _s(p, null, c, f, m), k = Wb(i).map((O) => _s(O, (g == null ? void 0 : g.x) ?? null, c, f, m)).filter((O) => Number.isFinite(O == null ? void 0 : O.x) && Number.isFinite(O == null ? void 0 : O.y));
    if (!Array.isArray(k) || k.length < 4) {
      const O = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, O), O;
    }
    const A = k.slice(0, 4).map((O) => ({ x: Number((O == null ? void 0 : O.x) || 0), y: Number((O == null ? void 0 : O.y) || 0) })), E = {
      kind: "rasterObject",
      center: {
        x: A.reduce((O, j) => O + Number(j.x || 0), 0) / A.length,
        y: A.reduce((O, j) => O + Number(j.y || 0), 0) / A.length
      },
      corners: A,
      visible: !0
    };
    return h._strokeGeomCache.set(s, E), E;
  }
  function Br(i, s = null, c = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = c || Ge(), E = f || en(M);
      if (!M || !E) return null;
      const O = M ? _a(M, i) : null;
      return O ? {
        x: Number(E.x || 0) + Number(O.x || 0) * Number(E.w || 0),
        y: Number(E.y || 0) + Number(O.y || 0) * Number(E.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Fc(i, s);
    const m = 1e-4, g = Nc().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const _ = C.width, k = C.height, A = Math.max(_, k) * 2;
    return {
      x: J(g.x, -A, _ + A),
      y: J(g.y, -A, k + A),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function l1(i, s = []) {
    if (h.mode !== "pano" || yt(i)) return 1;
    const c = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return c.length ? WC(0.035, 0.2, Math.min(...c)) : 1;
  }
  function c1(i) {
    if (sr(i) && !Pi(i.clip, h.frame)) return { visible: !1 };
    const s = Yt(i), c = Vn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? Ge() : null, p = f ? en(f) : null, m = h.mode === "pano" && (yt(i) || $n(i)), g = m ? { clipBehind: !0 } : null, _ = Br(c, null, f, p, g);
    if (!_) return { visible: !1 };
    const k = vs(i), M = Qd(i).map((he) => Br(he, _.x, f, p, g)).filter((he) => Number.isFinite(he == null ? void 0 : he.x) && Number.isFinite(he == null ? void 0 : he.y));
    if (M.length < 4) return { visible: !1 };
    const E = vi(k, 0, k.tanY), O = vi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), j = Br(E, _.x, f, p, g);
    if (!j) return { visible: !1 };
    const te = Br(O, (j == null ? void 0 : j.x) ?? _.x, f, p, g), Z = ((te == null ? void 0 : te.x) ?? j.x) - j.x, ne = ((te == null ? void 0 : te.y) ?? j.y) - j.y, ae = Math.hypot(Z, ne) || 1, pe = {
      x: j.x + Z / ae * 30,
      y: j.y + ne / ae * 30
    }, ie = Br(vi(k, 0, k.tanY), _.x, f, p, g), Se = Br(vi(k, k.tanX, 0), _.x, f, p, g), Ke = Br(vi(k, 0, -k.tanY), _.x, f, p, g), Ye = Br(vi(k, -k.tanX, 0), _.x, f, p, g);
    if (!ie || !Se || !Ke || !Ye) return { visible: !1 };
    const rt = [
      _,
      ...M,
      j,
      te,
      ie,
      Se,
      Ke,
      Ye
    ];
    if (m && !rt.some((he) => Number((he == null ? void 0 : he.rawZ) ?? (he == null ? void 0 : he.z)) > 1e-4)) return { visible: !1 };
    const be = l1(i, rt), oe = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: Se.x,
        y: Se.y,
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
      center: { x: _.x, y: _.y },
      corners: M.map((he) => ({ x: he.x, y: he.y })),
      edgeMidpoints: oe,
      rotateStemBase: { x: j.x, y: j.y },
      rotateHandle: pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Xt(i) {
    if (Qt(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = sb(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), a1(i, m));
    }
    if (gn(i)) {
      const p = Ub(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), s1(i, p));
    }
    const s = Yb(i), c = h._strokeGeomCache.get(s);
    if (c) return c;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = c1(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function ws(i, s, c, f = null) {
    const p = [];
    for (let m = 0; m <= c; m += 1) {
      const g = m / c;
      let _ = 0, k = 0;
      s === 0 ? (_ = g, k = 0) : s === 1 ? (_ = 1, k = g) : s === 2 ? (_ = 1 - g, k = 1) : (_ = 0, k = 1 - g);
      const A = ep(i, _, k), M = h.mode === "unwrap" ? Fc(A, f) : ha(A);
      M && p.push(M);
    }
    return p;
  }
  function u1(i, s) {
    const c = Yt(i), f = Vn(Number(c.yaw_deg || 0), Number(c.pitch_deg || 0)), p = h.mode === "unwrap" ? Fc(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, _ = [
      ws(i, 0, g, m),
      ws(i, 1, g, m),
      ws(i, 2, g, m),
      ws(i, 3, g, m)
    ];
    pd(P, _, { selected: s });
  }
  function f1() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(c.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Tc() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((c, f) => Number(f.z_index || 0) - Number(c.z_index || 0)), ...i];
  }
  function xs(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(s[c].x, s[c].y);
      i.closePath();
    }
  }
  function ap(i, s, c) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = J(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = P.globalAlpha;
    P.globalAlpha = m * p;
    const g = c ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = c ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    xs(P, f), P.fillStyle = _, P.fill(), P.strokeStyle = g, P.lineWidth = k, P.stroke(), P.save(), P.strokeStyle = g, P.lineWidth = s ? 3.2 : 2.6, P.lineCap = "round";
    const A = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, E = s ? 12 : 9;
    A.forEach((O) => {
      const te = A.find((pe) => (pe == null ? void 0 : pe.edge) === M[O == null ? void 0 : O.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Z = te.x - O.x, ne = te.y - O.y, ae = Math.hypot(Z, ne) || 1;
      P.beginPath(), P.moveTo(O.x, O.y), P.lineTo(O.x + Z / ae * E, O.y + ne / ae * E), P.stroke();
    }), P.restore(), P.globalAlpha = m;
  }
  function d1(i, s, c, f) {
    const p = J(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if ($n(i)) {
      ap(s, c, f);
      return;
    }
    if (yt(i)) {
      const g = P.globalAlpha;
      P.globalAlpha = g * pb(i) * p, h.mode === "frame" ? (P.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = c ? 2 : 1, xs(P, s.corners), P.stroke()) : u1(i, c), P.globalAlpha = g;
      return;
    }
    const m = P.globalAlpha;
    P.globalAlpha = m * p, P.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", xs(P, s.corners), P.fill(), P.strokeStyle = c ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = c ? 2.8 : 1.9, xs(P, s.corners), P.stroke(), P.globalAlpha = m;
  }
  function sp(i, s, c) {
    if (yt(i)) {
      Ey(P, s, { accent: c });
      return;
    }
    P.fillStyle = c, s.corners.forEach((f) => {
      P.beginPath(), P.arc(f.x, f.y, 6.5, 0, Math.PI * 2), P.fill();
    }), $n(i) && (P.strokeStyle = c, P.lineCap = "round", P.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, E, O, j;
      const p = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((E = f.a) == null ? void 0 : E.x) ?? f.x), m = (((O = f.b) == null ? void 0 : O.y) ?? f.y) - (((j = f.a) == null ? void 0 : j.y) ?? f.y), g = Math.hypot(p, m) || 1, _ = p / g, k = m / g, A = 10;
      P.beginPath(), P.moveTo(f.x - _ * A, f.y - k * A), P.lineTo(f.x + _ * A, f.y + k * A), P.stroke();
    }), P.lineCap = "butt"), Qt(i) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), P.lineTo(s.rotateHandle.x, s.rotateHandle.y), P.stroke(), P.fillStyle = c, P.beginPath(), P.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function p1() {
    var m;
    const i = h.mode === "frame" ? [] : ur(), s = i.length > 1, c = t === "cutout" ? f1() : vr(), f = c.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${$n(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== c || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: c,
      orderKey: f,
      sorted: [...c]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const _ = h.mode !== "frame" && !s && Pd(g);
      if (h.mode === "frame" && !_ || !h.showObjects && !$n(g)) continue;
      const k = yt(g), A = $n(g), M = Mn(g);
      if (!k && !A || sr(g) && !Pi(g.clip, h.frame)) continue;
      const E = Xt(g);
      if (t !== "stickers" && !E.visible)
        continue;
      const O = J(Number((E == null ? void 0 : E.visibilityAlpha) ?? 1), 0, 1);
      if (O <= 0.01) continue;
      const j = A && t === "cutout" && h.mode === "pano" ? J(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (P.save(), P.globalAlpha *= j, d1(g, E, _, M), _ && E.visible) {
        const te = M ? "#ff4d4f" : k && zt(g) ? "#f59e0b" : "#0070f3", Z = P.globalAlpha;
        P.globalAlpha = Z * O, sp(g, E, te), P.globalAlpha = Z;
      }
      P.restore();
    }
    if (t === "cutout" && h.mode === "pano" && !Ge() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, _ = J(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      P.save(), P.globalAlpha *= _, ap(g.geom, g.selected, g.locked), g.selected && sp(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), P.restore();
    }
    if (s) {
      const g = ds(i);
      if (g != null && g.visible) {
        const _ = mc(i) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(g.corners[0].x, g.corners[0].y);
        for (let k = 1; k < g.corners.length; k += 1) P.lineTo(g.corners[k].x, g.corners[k].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = _, g.corners.forEach((k) => {
          P.beginPath(), P.arc(k.x, k.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      i.forEach((g) => {
        if (!Qt(g) && !gn(g)) return;
        const _ = Xt(g);
        if (!(_ != null && _.visible)) return;
        const k = Mn(g) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(_.corners[0].x, _.corners[0].y);
        for (let A = 1; A < _.corners.length; A += 1) P.lineTo(_.corners[A].x, _.corners[A].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = k, _.corners.forEach((A) => {
          P.beginPath(), P.arc(A.x, A.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Lp(h.interaction.start, h.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), P.fill(), P.stroke(), P.restore();
    }
  }
  function lp(i, s = !1) {
    const c = J(io(i), 0.05, 20), f = s ? 320 : 220;
    return c >= 1 ? { width: f, height: Math.max(1, Math.round(f / c)) } : { width: Math.max(1, Math.round(f * c)), height: f };
  }
  function h1(i) {
    if (!fi || !i) return !1;
    const s = fi.closest(".pano-camera-preview");
    if (!s) return !1;
    const c = Math.round(Number(s.clientWidth || fi.clientWidth || 0)), f = Math.round(Number(s.clientHeight || fi.clientHeight || 0));
    return Math.abs(c - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function m1() {
    if (h.outputPreviewRect = null, I.outputPreviewToggle.visible = h.mode !== "frame" && !!Ge(), t !== "cutout" || !I.cameraPreview) return;
    if (h.mode === "frame") {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1;
      return;
    }
    const i = Ge();
    I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = L == null ? void 0 : L.getContext("2d");
    if (!i || !s) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, L.width, L.height), mo = null;
      return;
    }
    const c = lp(i, !!h.outputPreviewExpanded);
    I.cameraPreview.width = c.width, I.cameraPreview.height = c.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(c.width * f)), h: Math.max(1, Math.round(c.height * f)) };
    (L.width !== p.w || L.height !== p.h) && (L.width = p.w, L.height = p.h);
    const m = JSON.stringify([p, ci(i), lm(Mo())]);
    let g = m === mo;
    if (g || (s.clearRect(0, 0, p.w, p.h), g = ip(s, p, i, "camera_preview"), mo = g ? m : null), !g) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = Ic() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const _ = h1(c);
    I.cameraPreview.ready = !0, I.cameraPreview.label = _ ? "" : "Loading preview", I.cameraPreview.settled = _ && Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame;
  }
  function Dc(i, s) {
    if (!i || !s) return null;
    const c = Number(s.x || 0), f = Number(s.y || 0);
    return ep(i, c, f);
  }
  function No(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(c);
    return sc(f * Math.sin(s), Math.sin(c), f * Math.cos(s));
  }
  function g1(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function y1(i, s, c, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: yn(i, "widthScale", 1),
      pressureLike: yn(i, "pressureLike", 1)
    }, ...f, u: s, v: c };
  }
  function b1(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Lc(i, s, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Z = null;
      i.forEach((ne) => {
        const ae = Number((ne == null ? void 0 : ne.u) || 0), pe = Number((ne == null ? void 0 : ne.v) || 0), ie = (ae % 1 + 1) % 1, Se = Z == null ? ie : Z + Xn(ie, (Z % 1 + 1) % 1);
        p.set(ne, { x: Se, y: pe }), Z = Se;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : p.get(Z) || g1(Z), g = (Z, ne, ae, pe = {}) => {
      const ie = f ? (Number(ne) % 1 + 1) % 1 : Number(ne), Se = y1(Z, ie, ae, pe);
      return p.set(Se, { x: Number(ne), y: Number(ae) }), Se;
    }, _ = (Z, ne, ae) => {
      const pe = m(Z), ie = m(ne);
      return g(Z, Zn(pe.x, ie.x, ae), Zn(pe.y, ie.y, ae), {
        t: Zn(Number((Z == null ? void 0 : Z.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), ae),
        widthScale: Zn(yn(Z, "widthScale", 1), yn(ne, "widthScale", 1), ae),
        pressureLike: Zn(yn(Z, "pressureLike", 1), yn(ne, "pressureLike", 1), ae)
      });
    };
    if (i.length === 1) {
      const Z = m(i[0]);
      return [g(i[0], Z.x, Z.y)];
    }
    const k = b1(s, c), A = (Z, ne) => {
      const ae = [0];
      for (let oe = 1; oe < Z.length; oe += 1) {
        const he = m(Z[oe - 1]), we = m(Z[oe]);
        ae.push(ae[oe - 1] + Math.hypot(we.x - he.x, we.y - he.y));
      }
      const pe = ae[ae.length - 1] || 0;
      if (pe <= 1e-8) {
        const oe = Z[0], he = m(oe);
        return [g(oe, he.x, he.y)];
      }
      const ie = [];
      let Se = 0;
      for (let oe = 0; oe <= pe + 1e-9; oe += ne) {
        for (; Se < ae.length - 2 && ae[Se + 1] < oe; ) Se += 1;
        const he = ae[Se], we = ae[Se + 1], Re = Math.max(1e-8, we - he);
        ie.push(_(Z[Se], Z[Se + 1], J((oe - he) / Re, 0, 1)));
      }
      const Ke = Z[Z.length - 1], Ye = m(Ke), rt = ie[ie.length - 1], be = rt ? m(rt) : null;
      return (!be || Math.hypot(be.x - Ye.x, be.y - Ye.y) > ne * 0.35) && ie.push(g(Ke, Ye.x, Ye.y)), ie;
    }, M = (Z) => {
      if (!Array.isArray(Z) || Z.length < 3) return Z ? Z.slice() : [];
      const ne = m(Z[0]), ae = [g(Z[0], ne.x, ne.y)];
      for (let Se = 0; Se < Z.length - 1; Se += 1) {
        const Ke = Z[Se], Ye = Z[Se + 1], rt = m(Ke), be = m(Ye), oe = g(
          Ke,
          rt.x * 0.75 + be.x * 0.25,
          rt.y * 0.75 + be.y * 0.25,
          {
            t: Number(Ke.t || 0) * 0.75 + Number(Ye.t || 0) * 0.25,
            widthScale: yn(Ke, "widthScale", 1) * 0.75 + yn(Ye, "widthScale", 1) * 0.25,
            pressureLike: yn(Ke, "pressureLike", 1) * 0.75 + yn(Ye, "pressureLike", 1) * 0.25
          }
        ), he = g(
          Ke,
          rt.x * 0.25 + be.x * 0.75,
          rt.y * 0.25 + be.y * 0.75,
          {
            t: Number(Ke.t || 0) * 0.25 + Number(Ye.t || 0) * 0.75,
            widthScale: yn(Ke, "widthScale", 1) * 0.25 + yn(Ye, "widthScale", 1) * 0.75,
            pressureLike: yn(Ke, "pressureLike", 1) * 0.25 + yn(Ye, "pressureLike", 1) * 0.75
          }
        );
        ae.push(oe, he);
      }
      const pe = Z[Z.length - 1], ie = m(pe);
      return ae.push(g(pe, ie.x, ie.y)), ae;
    }, E = A(i, k);
    if (E.length < 3) return E;
    const O = c ? 2 : 1;
    let j = E.slice();
    for (let Z = 0; Z < O; Z += 1) j = M(j);
    return A(j, Math.max(k * 0.75, 55e-5));
  }
  function yn(i, s, c = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : c;
  }
  function v1(i) {
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
  function ga(i, s, c = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function ya() {
    const i = va();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ba() {
    const i = va();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function cp() {
    const i = dc(), s = ba();
    return i ? `${s}:${i}` : s;
  }
  function _1() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function w1() {
    h.paintCompositeRevision += 1;
  }
  function x1() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function up() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), h.paintEngineRevisionKey = ya();
  }
  function fp() {
    v.painting_layer !== null && (v.painting_layer = null), ys = "";
  }
  function Wt() {
    x1(), Pe.backgroundDirty = !0, Pe.dirty = !0;
  }
  function fr({ rebuildPaintEngine: i = !1 } = {}) {
    fp(), _1(), Wt(), i && up();
  }
  function Po() {
    fp(), w1(), Wt();
  }
  function Ss() {
    var f;
    const i = va(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = qu(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const c = ya();
    h.paintEngineRevisionKey !== c && (h.paintEngineRevisionKey = c, (f = h.paintEngine) == null || f.rebuildCommitted(v));
  }
  function va() {
    const i = Math.max(1, N(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function zn() {
    return va();
  }
  function S1(i, s, c, f, p = null) {
    const m = v1(i), g = yn(s, "widthScale", 1) * yn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Sr) * c * g) : Math.max(0.5, m.value / (2 * Math.PI) * c * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function k1(i, s, c = {}) {
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
  function M1(i, s, c) {
    const f = Math.max(0.5, Math.min(c, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function N1(i, s, c, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), k1(i, c, p);
    const g = (_) => M1(i, _, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const k = s[_], A = s[_ + 1];
      if (!k || !A) continue;
      const M = Number(k.x || 0), E = Number(k.y || 0), O = Number(A.x || 0), j = Number(A.y || 0), te = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(A.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(O) || !Number.isFinite(j) || !Number.isFinite(te) || !Number.isFinite(Z)) continue;
      const ne = O - M, ae = j - E, pe = Math.hypot(ne, ae);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        g(k);
        continue;
      }
      if (pe > Math.max(f.w, f.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(te, Z)), Se = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Ke = Math.max(1, Math.ceil(pe / Se));
      for (let Ye = 0; Ye <= Ke; Ye += 1) {
        const rt = Ye / Ke;
        g({
          x: Zn(M, O, rt),
          y: Zn(E, j, rt),
          radiusPx: Zn(te, Z, rt)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function P1(i, s, c, f) {
    N1(i, s, c, f, { preview: !1 });
  }
  function A1(i, s, c, f, p) {
    var _, k, A, M;
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
      i.lineTo(Number(((A = s[E]) == null ? void 0 : A[m]) || 0) * f.w, Number(((M = s[E]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function dp(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function C1(i, s) {
    const c = dp(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: S1(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function pp(i, s, c = null) {
    var _, k, A, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = c || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((A = s == null ? void 0 : s.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return A1(i.ctx, dp(p), p, f), !0;
    const g = C1(p, f);
    return g.length ? (P1(i.ctx, g, p, f), !0) : !1;
  }
  function I1(i, s, c, f = 8) {
    const p = new Uint8Array(s * c), m = [], g = new Int32Array(s * c), _ = new Int32Array(s * c);
    for (let k = 0; k < c; k += 1)
      for (let A = 0; A < s; A += 1) {
        const M = k * s + A;
        if (p[M] || i[M] <= f) continue;
        let E = 0, O = 0;
        g[O] = A, _[O] = k, O += 1, p[M] = 1;
        const j = [];
        let te = A, Z = k, ne = A, ae = k;
        for (; E < O; ) {
          const pe = g[E], ie = _[E];
          E += 1, j.push({ x: pe, y: ie }), pe < te && (te = pe), ie < Z && (Z = ie), pe > ne && (ne = pe), ie > ae && (ae = ie);
          const Se = [
            [(pe - 1 + s) % s, ie],
            [(pe + 1) % s, ie],
            [pe, ie - 1],
            [pe, ie + 1]
          ];
          for (const [Ke, Ye] of Se) {
            if (Ye < 0 || Ye >= c) continue;
            const rt = Ye * s + Ke;
            p[rt] || i[rt] <= f || (p[rt] = 1, g[O] = Ke, _[O] = Ye, O += 1);
          }
        }
        m.push({ pixels: j, minX: te, minY: Z, maxX: ne, maxY: ae });
      }
    return m;
  }
  function E1(i, s) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, A) => k - A);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let k = 0; k < c.length; k += 1) {
      const A = c[k], E = (k === c.length - 1 ? c[0] + s : c[k + 1]) - A - 1;
      E > f && (f = E, p = k);
    }
    const m = (c[(p + 1) % c.length] + s) % s;
    let g = 1 / 0, _ = -1 / 0;
    for (const k of c) {
      const A = (k - m + s) % s;
      g = Math.min(g, A), _ = Math.max(_, A);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - g + 1)
    };
  }
  function O1(i, s, c = {}) {
    var A;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (A = i == null ? void 0 : i.getContext) == null ? void 0 : A.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), _ = new Uint8Array(f * p);
    for (let M = 0; M < _.length; M += 1) _[M] = g.data[M * 4 + 3];
    return I1(_, f, p, 8).map((M, E) => {
      const O = E1(M, f);
      if (!O) return null;
      const j = Number(O.widthPx || 0), te = M.maxY - M.minY + 1, Z = Number(O.startX || 0), ne = document.createElement("canvas");
      ne.width = j, ne.height = te;
      const ae = ne.getContext("2d");
      if (!ae) return null;
      const pe = ae.createImageData(j, te);
      return M.pixels.forEach(({ x: ie, y: Se }) => {
        const Ke = (Se * f + ie) * 4, Ye = (Number(ie || 0) - Z + f) % f, rt = ((Se - M.minY) * j + Ye) * 4;
        pe.data[rt + 0] = g.data[Ke + 0], pe.data[rt + 1] = g.data[Ke + 1], pe.data[rt + 2] = g.data[Ke + 2], pe.data[rt + 3] = g.data[Ke + 3];
      }), ae.putImageData(pe, 0, 0), {
        id: Ro("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + E * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: j / f,
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
  function _a(i, s) {
    if (!i || !s) return null;
    const c = vs(i), f = Du(s, c.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Du(s, c.right) / f, m = Du(s, c.up) / f;
    return {
      x: (p / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function F1(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const c = bi();
      return i.map((f) => ({
        x: c.x + Number(f.u || 0) * c.w,
        y: c.y + Number(f.v || 0) * c.h
      }));
    }
    const s = i.map((c) => ha(No(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function hp(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = bi();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + Xn(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const c = i.map((f) => ha(No(f))).filter(Boolean);
    return c.every((f) => Number(f.z || 0) > 0) ? c.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function T1(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c], p = i[(c + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function D1(i, s, c) {
    if (!Array.isArray(i) || i.length < 3 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = No(p), g = _a(s, m);
      if (!g) return [];
      f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return T1(f, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? f : [];
  }
  function L1(i, s, c) {
    if (!Array.isArray(i) || i.length < 1 || !s || !c) return [];
    const f = [];
    for (const p of i) {
      const m = No(p), g = _a(s, m);
      g && f.push({
        x: Number(c.x || 0) + Number(g.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(g.y || 0) * Number(c.h || 0)
      });
    }
    return f;
  }
  function R1() {
    const i = Ge(), s = Hc(i);
    if (!i || !s) return !1;
    const c = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = gk(i, s, { width: C.width, height: C.height }), m = V1(c);
    return P.save(), P.fillStyle = "#0a0a0a", P.fillRect(0, 0, C.width, C.height), ip(P, f, p) || (P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(f.x, f.y, f.w, f.h)), P.restore(), P.save(), P.fillStyle = "rgba(0, 0, 0, 0.58)", P.beginPath(), P.rect(0, 0, C.width, C.height), P.roundRect(c.x, c.y, c.w, c.h, m), P.fill("evenodd"), P.restore(), P.save(), P.strokeStyle = TC, P.globalAlpha = 0.62, P.lineWidth = 2, P.beginPath(), P.roundRect(c.x + 1, c.y + 1, c.w - 2, c.h - 2, Math.max(0, m - 1)), P.stroke(), P.restore(), !0;
  }
  function V1(i) {
    const s = Math.max(1e-6, Number(Pe.frameCanvasScale || 1));
    return Math.min(Oe * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Wr() {
    var s;
    const i = h.mode === "frame" ? Ge() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = Lo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function $1() {
    var k, A;
    if (((k = h.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (A = i == null ? void 0 : i.geometry) == null ? void 0 : A.points;
    let c;
    if (h.mode === "frame") {
      const M = Ge(), E = en(M);
      c = D1(s, M, E);
    } else
      c = F1(s);
    if (!Array.isArray(c) || c.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), _ = Math.round(Number(p.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) P.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    P.closePath(), f ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${m},${g},${_},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function z1() {
    const i = h.frameRollOverlayVisual, s = J(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const c = en(i.shot);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Sr, m = Math.hypot(c.w, c.h) * 0.55, g = Math.cos(p) * m, _ = Math.sin(p) * m;
    P.save(), P.globalAlpha *= s, P.beginPath(), P.rect(c.x, c.y, c.w, c.h), P.clip(), P.translate(f.x, f.y), P.rotate(p);
    const k = Math.max(12, Math.min(c.w, c.h) / 6);
    P.beginPath();
    for (let A = -m; A <= m; A += k)
      P.moveTo(A, -m), P.lineTo(A, m);
    for (let A = -m; A <= m; A += k)
      P.moveTo(-m, A), P.lineTo(m, A);
    P.lineWidth = 1, P.strokeStyle = "rgba(255, 255, 255, 0.22)", P.stroke(), P.setTransform(1, 0, 0, 1, 0, 0), P.beginPath(), P.moveTo(f.x - g, f.y - _), P.lineTo(f.x + g, f.y + _), P.lineWidth = 1.5, P.setLineDash([8, 6]), P.strokeStyle = "rgba(255, 255, 255, 0.92)", P.shadowColor = "rgba(0, 0, 0, 0.8)", P.shadowBlur = 3, P.stroke(), P.setLineDash([]), P.restore();
  }
  function j1() {
    return t !== "cutout" || !Ge() ? 0 : RC;
  }
  function H1() {
    const i = J(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || h.mode !== "pano") return;
    const s = Ge(), c = s ? Xt(s) : null, f = Array.isArray(c == null ? void 0 : c.corners) && c.corners.length >= 4 ? c.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    c != null && c.visible && f && (h.cutoutPanoDimCorners = f), s && (c != null && c.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: c,
      selected: Pd(s),
      locked: Mn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = c != null && c.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (P.save(), P.fillStyle = `rgba(0, 0, 0, ${i})`, P.beginPath(), P.rect(0, 0, C.width, C.height), m.length >= 4) {
      P.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) P.lineTo(m[g].x, m[g].y);
      P.closePath();
    }
    P.fill("evenodd"), P.restore();
  }
  function mp() {
    ho = null, h.mode === "frame" ? (Pe.frameSafeRect = vv(), R1()) : h.mode === "unwrap" ? n1(!1) : r1(!1), H1(), t === "cutout" && m1(), p1(), Wr(), $1(), z1(), I.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && qe(), Pe.hasPresentedFrame || (Pe.hasPresentedFrame = !0, se.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Pe.pendingStableLayoutFrames <= 0 && Pe.hasPresentedFrame && h.mode !== "frame");
    const i = Bb();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === hr ? (ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", i.detail)) : (ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind"));
  }
  function G1(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function K1() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = ab();
  }
  function ue(i = {}) {
    var _, k, A, M, E, O, j, te, Z, ne;
    const s = !!i.localOnly, c = i.externalSync === !0, f = String(i.cause || ""), p = String(((_ = h.interaction) == null ? void 0 : _.kind) || "");
    (!s || p === "view" || p === "pan_frame" || G1() || !!((k = h.viewTween) != null && k.active) || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Pe.backgroundDirty = !0), s && Sd() && (h.livePaintInteractionRevision += 1, Pe.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (xc(), Kr()), K1(), c && ((M = (A = e.__panoDomPreview) == null ? void 0 : A.requestDraw) == null || M.call(A), (E = e.setDirtyCanvas) == null || E.call(e, !0, !1)), c && !s && ((j = (O = e.graph) == null ? void 0 : O.setDirtyCanvas) == null || j.call(O, !0, !0), (ne = (Z = (te = mr) == null ? void 0 : te.canvas) == null ? void 0 : Z.setDirty) == null || ne.call(Z, !0, !0)), Pe.dirty = !0;
  }
  function gp() {
    const i = C.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== s || C.height !== c || se.width !== s || se.height !== c ? (C.width = s, C.height = c, se.width = s, se.height = c, Pe.backgroundDirty = !0, Pe.dirty = !0, t === "cutout" && (Pe.pendingStableLayoutFrames = Math.max(Number(Pe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function B1(i = performance.now()) {
    var m, g;
    Pe.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const c = s ? 1 : 0;
    if (Math.abs(c - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = c, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - c) > 1e-6) {
      const _ = J(
        (i - Number(h.frameRollOverlayStartTs || i)) / VC,
        0,
        1
      );
      h.frameRollOverlayAlpha = Zn(
        Number(h.frameRollOverlayFrom || 0),
        c,
        Bs(_)
      ), _ >= 1 && (h.frameRollOverlayAlpha = c, c === 0 && (h.frameRollOverlayVisual = null)), Pe.dirty = !0;
    }
    const f = j1();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const _ = J(
        (i - Number(h.cutoutPanoDimStartTs || i)) / Bm,
        0,
        1
      );
      h.cutoutPanoDimAlpha = Zn(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        Bs(_)
      ), _ >= 1 && (h.cutoutPanoDimAlpha = f), _ >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), Pe.dirty = !0;
    }
    const p = t === "cutout" && Ge() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const _ = J(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / Bm,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = Zn(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        Bs(_)
      ), _ >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), Pe.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(h.outputPreviewAnimDurationMs)), k = J((i - Number(h.outputPreviewAnimStartTs || 0)) / _, 0, 1), M = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? BC(k) : XC(k);
      h.outputPreviewAnim = Zn(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, M), Pe.dirty = !0, k >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if ((g = h.viewTween) != null && g.active) {
      const _ = h.viewTween, k = J((i - _.startTs) / _.durationMs, 0, 1), A = Bs(k);
      h.viewYaw = Ht(_.startYaw + _.deltaYaw * A), h.viewPitch = _.startPitch + (_.targetPitch - _.startPitch) * A, h.viewFov = _.startFov + (_.targetFov - _.startFov) * A, Pe.backgroundDirty = !0, Pe.dirty = !0, k >= 1 && (h.viewTween = null);
    }
    if (h.viewInertia.vx = Number(dn.state.inertia.vx || 0), h.viewInertia.vy = Number(dn.state.inertia.vy || 0), h.viewInertia.active = !!dn.state.inertia.active, dn.stepInertia(i) && (h.viewInertia.vx = Number(dn.state.inertia.vx || 0), h.viewInertia.vy = Number(dn.state.inertia.vy || 0), h.viewInertia.active = !!dn.state.inertia.active, Pe.backgroundDirty = !0, Pe.dirty = !0), Pe.pendingStableLayoutFrames > 0 && (Pe.pendingStableLayoutFrames -= 1, Pe.dirty = !0), Pe.dirty) {
      if (Pe.pendingStableLayoutFrames > 0)
        return;
      Pe.dirty = !1, mp();
    }
  }
  function yp(i) {
    try {
      i();
    } catch (s) {
      const c = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Pe.tickErrorSignature !== c && (Pe.tickErrorSignature = c, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = er, I.stageStatusDetail = "frame", ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind");
    }
  }
  function bp(i = performance.now()) {
    Pe.running && (yp(() => B1(i)), Pe.running && (Pe.rafId = requestAnimationFrame(bp)));
  }
  function W1() {
    !Pe.running || !gp() || yp(() => {
      Pe.dirty = !1, mp();
    });
  }
  const vp = new ResizeObserver(W1);
  vp.observe(C);
  function U1() {
    Pe.running = !1, Pe.rafId && cancelAnimationFrame(Pe.rafId), Pe.rafId = 0, vp.disconnect();
  }
  function at() {
    r || S && v.stickers.some(lc) || (h.historyController.commitActionGroup(JSON.stringify(Qh(v))), Uc());
  }
  function Rc(i) {
    var p;
    if (r) return;
    qn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Uc(), !s) return;
    const c = TS(v, s), f = (p = v.timeline) == null ? void 0 : p.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, c.state), S && v.timeline.fps !== f && Mt.seek(Math.round(h.frame * v.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], c.paintingChanged ? fr() : Wt(), On(), He(), Fn(), ue({ cause: "cutout_frame" });
  }
  function _p() {
    var c, f;
    const i = Array.isArray((c = h.historyController) == null ? void 0 : c.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function On() {
    or();
    const i = w2({
      editor: h,
      swatches: fl,
      paintColorPopOpen: q ? !q.hidden : !1,
      colorToCss: kr,
      colorsApproximatelyEqual: dl,
      rgb01ToHsv: Vu,
      hsv01ToRgb: Ru,
      getBrushPresetIdForTool: xi,
      isActiveLassoTool: mb
    });
    if (Object.assign(I.paintDock, i), wb(), !i.visible) {
      q && (q.hidden = !0);
      return;
    }
    xe && (clearTimeout(xe), xe = 0), W && (!i.colorEnabled && q && !q.hidden && (xe = window.setTimeout(() => {
      q.hidden = !0, I.paintDock.colorPopOpen = !1, xe = 0;
    }, 170)), q && (q.style.setProperty("--picker-hue-color", i.pickerHueColor), q.style.setProperty("--picker-sat", i.pickerSat), q.style.setProperty("--picker-val", i.pickerVal), q.style.setProperty("--picker-hue", i.pickerHue)), ge && (ge.style.left = i.pickerSvLeft, ge.style.top = i.pickerSvTop), ke && (ke.style.left = i.pickerHueLeft));
  }
  function Ao() {
    const i = Yt(t === "cutout" && h.mode === "frame" ? Ge() : Nt());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: ei(i)
    }, He());
  }
  function He() {
    var rt, be, oe, he;
    if (Ur(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = _2(v.ui_settings);
    if (a) {
      I.sidePanel = x2({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Hn
      });
      return;
    }
    const s = Nt(), c = t === "cutout" && h.mode === "frame" ? Ge() : null, f = c || s, p = c ? [c] : ur(), m = c ? "shot" : ps();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const we = Yt(f);
      h.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: ei(we)
      }, sr(f) && (h.panelLastValues.opacity = rc(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : f, k = S && h.inspectCamera, A = k ? $S(v.camera, h.frame) : sr(_) ? h.panelLastValues : _ || g, M = k || !!_ && !Mn(_);
    h.panelWasEnabled = M, xc();
    let E = null;
    if (c) {
      const we = gc({ item: c, kind: "shot", label: "Frame" });
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
      t === "stickers" ? vr().forEach((Te, ft) => {
        var Pt, Vt;
        if (!Te) return;
        const Je = S ? D0(Te) : zt(Te) ? String(Te.id || Cu) : String(((Vt = (Pt = v.assets) == null ? void 0 : Pt[Te.asset_id]) == null ? void 0 : Vt.name) || Te.asset_id || Te.id), Rt = `${ft + 1}. ${Je}${zt(Te) && wo(Te) ? " (hidden)" : ""}`, pn = gc({ item: Te, label: Rt, kind: "image" });
        we.push({ id: Te.id, label: pn.label, icon: pn.icon, item: Te, kind: "image" });
      }) : Ad().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const ft = gc(Te);
        we.push({ id: Te.item.id, label: ft.label, icon: ft.icon, item: Te.item, kind: Te.kind });
      });
      const Re = (_ == null ? void 0 : _.id) || "", Ue = k ? { label: "Camera", icon: Ne.camera } : we.find((Te) => Te.id === Re) || we[0];
      E = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: Ue.label,
        currentIcon: Ue.icon || null,
        items: we.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === Re
        }))
      };
    }
    const O = [], j = (we, Re, Ue, Te, ft) => {
      const Je = J(Number(A[we] || 0), Ue, Te);
      O.push({
        key: we,
        label: Re,
        min: Ue,
        max: Te,
        step: ft,
        value: Je,
        displayValue: Lo(Je),
        fillPct: J((Je - Ue) / Math.max(1e-6, Te - Ue) * 100, 0, 100),
        enabled: M && !r
      });
    }, te = [];
    k ? (j("position_x", "X", -100, 100, 0.01), j("position_y", "Y", -100, 100, 0.01), j("position_z", "Z", -100, 100, 0.01), j("yaw_deg", "Yaw", -180, 180, 0.1), j("pitch_deg", "Pitch", -90, 90, 0.1), j("roll_deg", "Roll", -180, 180, 0.1), j("hFOV_deg", "FOV", 1, 179, 0.1)) : p.length > 1 ? (te.push(`Selected objects: ${p.length}`), te.push("Multi-selection supports z-order and delete.")) : (j("yaw_deg", "Yaw", -180, 180, 0.1), j("pitch_deg", "Pitch", -90, 90, 0.1), j("hFOV_deg", "H FOV", 1, 179, 0.1), j("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? j("rot_deg", "Rotation", -180, 180, 0.1) : j("roll_deg", "Roll", -180, 180, 0.1), S && j("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((be = (rt = v == null ? void 0 : v.painting) == null ? void 0 : rt.paint) == null ? void 0 : be.strokes) ? v.painting.paint.strokes.length : 0, ne = Array.isArray((he = (oe = v == null ? void 0 : v.painting) == null ? void 0 : oe.mask) == null ? void 0 : he.strokes) ? v.painting.mask.strokes.length : 0, ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], pe = KC(
      e,
      ae.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), ie = !!String((pe == null ? void 0 : pe.src) || "").trim() || Gr("pano_input_images").length > 0, Se = vr().length > 0 || Z > 0, Ke = ne > 0, Ye = [
      { key: "mask", label: "Mask", icon: Ne.circle_dashed_tool, visible: !!h.showMask, enabled: Ke },
      { key: "objects", label: "Paint / Images", icon: Ne.image, visible: !!h.showObjects, enabled: Se },
      { key: "panorama", label: "Panorama", icon: Ne.globe, visible: !!h.showPanorama, enabled: ie }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    I.sidePanel = S2({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: E,
      enabled: M,
      selectedKind: k ? "camera" : m,
      selectedItems: p,
      params: O,
      notes: te,
      visibilityRows: Ye,
      uiSettings: i,
      normalizeCoverageValue: Hn
    });
  }
  function Ur() {
    if (!S || r) return;
    const i = Vc(), s = Le.selection, c = s && _i(s.owner);
    if (s) {
      const p = c ? wa(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => c[g].keyframes.some((_) => _.frame === m))), s.frames.length || (Le.selection = null);
    }
    const f = v.timeline.fps;
    I.timeline = N2(v, {
      frame: h.frame,
      span: i,
      selection: Le.selection,
      selectedId: h.inspectCamera ? "camera" : h.selectedId,
      expanded: Le.expanded ?? af(v),
      openRows: Le.openRows,
      audio: X1() && I.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: Mt.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: Ou(e) !== null || kk(e, ["bg_media", "sticker"])
    }), I.easing = Le.selection ? P2(c, wa(Le.selection), Le.selection.frames, xa(Le.selection.owner)) : null;
  }
  function Vc(i = null) {
    const s = v.timeline.fps, c = v.stickers.find(zt), f = c ? Dd() : null, p = Math.max(
      I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0,
      f ? ay(c.clip, s, f.meta) : 0
    );
    return A0(v, { minimum: Math.round(s * 5), frames: p, openClip: i });
  }
  function _i(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function wa(i) {
    return i.lane ? [i.lane] : po(_i(i.owner));
  }
  function xa(i) {
    if (i === "camera") return 0;
    const { clip: s } = _i(i);
    return s.start - s.in;
  }
  function ks(i) {
    const s = _i(i);
    return !!s && s.locked !== !0;
  }
  function wp() {
    const i = Nt();
    sr(i) && !Pi(i.clip, h.frame) && _r(null);
  }
  function Y1(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (h.frame = s, wp(), Wt(), He(), qe(), ue());
  }
  function X1() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function q1(i) {
    mi(), Mt.seek(i);
  }
  function qn() {
    S && Mt.stop();
  }
  function $c() {
    mi(), Mt.toggle();
  }
  function Co() {
    Wt(), He(), qe(), ue();
  }
  function Di() {
    at(), lt(), Co();
  }
  function J1() {
    const { selection: i } = Le;
    ks(i.owner) && (qn(), wS(_i(i.owner), wa(i), i.frames, h.frame - xa(i.owner)), Le.selection = null, Di());
  }
  function xp(i) {
    qn();
    const s = Math.round(h.frame * i / v.timeline.fps);
    LS(v, i), Le.selection = null, Mt.seek(s), Di();
  }
  function Z1() {
    const i = Ou(e);
    i !== null && i !== v.timeline.fps && xp(i);
  }
  function Q1(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && mi(), Mt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        $c();
        return;
      }
      if (i.type === "mute") {
        Ed(), Ur();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? af(v)), Le.selection = null, Ur();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), Ur();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((c) => c.id === i.id);
        s && !Pi(s.clip, h.frame) && q1(s.clip.start), _r(vr().find((c) => c.id === i.id) || null), h.inspectCamera = i.id === "camera", Le.selection = null, He(), qe(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = xa(i.owner), c = i.frames.map((m) => m - s), f = Le.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of c)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, _) => g - _);
        } else
          Le.selection = c.length ? { owner: i.owner, lane: i.lane, frames: c } : null;
        Ur();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !ks(s.owner)) return;
        const c = _i(s.owner), f = wa(s);
        if (i.phase === "start") {
          qn(), Le.drag = { keyframes: f.map((g) => structuredClone(c[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Le;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, _) => {
          c[g].keyframes = structuredClone(p.keyframes[_]);
        });
        const m = xS(c, f, p.frames, i.delta, -xa(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Co();
          return;
        }
        Le.drag = null, m ? Di() : Co();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          qn(), Le.drag = { clip: { ...s.clip }, span: Vc(s.clip) };
          return;
        }
        const { drag: c } = Le;
        if (!(c != null && c.clip)) return;
        const f = c.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? MS(s.clip, i.delta) : i.delta && i.mode === "start" ? NS(s.clip, f.start + i.delta) : i.delta && PS(s.clip, (f.duration === null ? c.span : f.start + f.duration) + i.delta, c.span), i.phase !== "end") {
          Co();
          return;
        }
        Le.drag = null, wp(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Di() : Co();
        return;
      }
      if (i.type === "key-row") {
        if (!ks(i.owner)) return;
        qn(), bS(_i(i.owner), h.frame - xa(i.owner)), Di();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || I.timeline.fpsLocked) {
          Ur();
          return;
        }
        xp(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          Ur();
          return;
        }
        qn(), v.timeline.length = s, Di();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !ks(s.owner)) return;
        qn(), kS(_i(s.owner), wa(s), s.frames, i.easing), i.commit ? Di() : Co();
      }
    }
  }
  async function Sp(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Er(i)) return;
    if (S) {
      qn(), await tv(i);
      return;
    }
    const s = Bi("asset"), c = La(e, `add:${s}`, async () => {
      try {
        const { image: f } = await Ra(i);
        We.set(s, f);
        const p = Bi("st");
        v.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: gi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: hs()
        }), _r(v.stickers[v.stickers.length - 1]), Ms(), He(), qe(), ue();
        const m = await Yi(i, {
          fetchApi: (k, A) => Gt.fetchApi(k, A)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, ko(), at(), lt(), He(), qe(), ue();
      } catch (f) {
        delete v.assets[s], We.delete(s);
        const p = Array.isArray(v.stickers) ? v.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (v.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && _r(null), He(), qe(), ue(), lt()), f;
      }
    });
    try {
      await c;
    } catch {
    }
  }
  function ev() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add");
  }
  async function tv(i) {
    const s = Bi("st"), c = La(e, `add:${s}`, async () => {
      const { image: f } = await Ra(i), p = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: gi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
        rot_deg: 0
      }, m = rd(s, { kind: "file", filename: "" }, p, hs());
      We.set(ma(m), f), v.stickers.push(m), _r(m), Ms(), He(), qe(), ue();
      try {
        const g = await Yi(i, {
          fetchApi: (k, A) => Gt.fetchApi(k, A)
        }), _ = v.stickers.find((k) => k.id === s);
        if (!_) return;
        _.source = rl(g), We.set(ma(_), f), at(), lt();
      } catch (g) {
        throw v.stickers = v.stickers.filter((_) => _.id !== s), h.selectedId === s && _r(null), at(), lt(), g;
      } finally {
        He(), qe(), ue();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function nv(i, s) {
    const c = La(e, `replace:${s}:${Bi("asset")}`, async () => {
      const { image: f } = await Ra(i), p = await Yi(i, {
        fetchApi: (g, _) => Gt.fetchApi(g, _)
      }), m = v.stickers.find((g) => g.id === s);
      if (m) {
        m.source = rl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          g.vFOV_deg = gi(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        We.set(ma(m), f), Wt(), at(), lt(), He(), qe(), ue();
      }
    });
    try {
      await c;
    } catch {
    }
  }
  async function rv(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !yt(s) || zt(s) || !Er(i)) return;
    if (S) {
      await nv(i, s.id);
      return;
    }
    const c = String(s.id || ""), f = Bi("asset"), p = La(e, `replace:${c}:${f}`, async () => {
      var M;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === c) || null;
      if (!m || !yt(m) || zt(m)) return;
      const g = String(m.asset_id || ""), _ = g ? bn(((M = v.assets) == null ? void 0 : M[g]) || null) : null, k = Number(m.vFOV_deg || 0), A = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: E } = await Ra(i);
        We.set(f, E), m.asset_id = f, m.vFOV_deg = gi(
          Number(m.hFOV_deg || 30),
          Number(E.naturalWidth || E.width || 1),
          Number(E.naturalHeight || E.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Wt(), He(), qe(), ue();
        const O = await Yi(i, {
          fetchApi: (te, Z) => Gt.fetchApi(te, Z)
        }), j = (Array.isArray(v.stickers) ? v.stickers : []).find((te) => String((te == null ? void 0 : te.id) || "") === c) || null;
        if (!j || String(j.asset_id || "") !== f) return;
        v.assets[f] = O, ko(), at(), lt(), He(), qe(), ue();
      } catch (E) {
        delete v.assets[f], We.delete(f);
        const O = (Array.isArray(v.stickers) ? v.stickers : []).find((j) => String((j == null ? void 0 : j.id) || "") === c) || null;
        throw O && String(O.asset_id || "") === f && (g && _ && (v.assets[g] = _), O.asset_id = g, O.vFOV_deg = k, O.crop = A ? { ...A } : null), Wt(), lt(), He(), qe(), ue(), E;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function iv() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !yt(i) || zt(i) || (s = Q == null ? void 0 : Q.openImagePicker) == null || s.call(Q, "replace");
  }
  async function ov() {
    if (r || t !== "stickers") return;
    if (S) {
      await av();
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
        const g = await fetch(m).then((E) => E.blob()), _ = String(g.type || "image/png").split("/")[1] || "png", k = String((p == null ? void 0 : p.name) || `${f}.${_}`), A = new File([g], k, { type: g.type || "image/png" }), M = await Yi(A, {
          fetchApi: (E, O) => Gt.fetchApi(E, O)
        });
        v.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (lt(), ue());
  }
  async function av() {
    let i = !1;
    for (const s of v.stickers) {
      const c = s.source.data_url;
      if (c)
        try {
          const f = await fetch(c).then((_) => _.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await Yi(m, {
            fetchApi: (_, k) => Gt.fetchApi(_, k)
          });
          s.source = rl(g), i = !0;
        } catch {
        }
    }
    i && (lt(), ue());
  }
  function sv() {
    if (r || t !== "cutout") return;
    const i = Ge();
    if (i) {
      _r(i), h.mode = "pano", Hr(
        Ht(Number(i.yaw_deg || 0)),
        J(Number(i.pitch_deg || 0), -89.9, 89.9),
        h.viewFov
      ), He(), qe(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = c0({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    v.shots = [s], _r(s), Ms(), h.mode = "pano", at(), lt(), He(), qe(), ue({ cause: "cutout_frame" });
  }
  function lv() {
    r || t !== "cutout" || (v.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, v.active.selected_shot_id = null, at(), lt(), He(), qe(), ue());
  }
  function cv() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const c of i)
      zt(c) && (c.visible = !1, s.push(c));
    return s;
  }
  function kp(i, s, c = "Clear") {
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
  async function uv() {
    var c, f;
    if (r || !await kp(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = qo(null), fr();
    const s = cv();
    if (t === "stickers")
      v.stickers = S ? v.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, S || (v.assets = {}), h.selectedId = ((c = s[0]) == null ? void 0 : c.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, ko();
    else {
      const p = FS(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, ko();
    }
    at(), lt(), He(), qe(), ue();
  }
  async function fv(i) {
    var m, g, _, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", c = s === "mask" ? "Mask" : "Paint", f = Io(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await kp(
      `Clear ${c}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((_ = h.interaction) == null ? void 0 : _.kind) === "draw" && ((k = h.interaction) == null ? void 0 : k.layerKind) === s) {
        const A = zn();
        A && h.paintEngine.cancelActiveStroke(A), h.interaction = null;
      }
      f.length = 0, v.painting.raster_objects = En().filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") !== s), s === "paint" && (mn().length = 0), fr(), at(), lt(), He(), qe(), On(), ue();
    }
  }
  function dv() {
    if (r) return;
    const i = Nt();
    if (!i || !yt(i) || zt(i) || S && lc(i)) return;
    let s;
    S ? s = HS(i, Bi("st"), hs()) : (s = JSON.parse(JSON.stringify(i)), s.id = Bi("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = hs()), v.stickers.push(s), v.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Wt(), at(), lt(), qe(), He(), ue();
  }
  function Mp() {
    var c, f, p, m, g;
    if (r) return;
    const i = ur(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((_) => Mn(_))) {
      if (qn(), i.length > 1) {
        const _ = new Set(i.filter((M) => Qt(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => gn(M)).map((M) => on(M.rasterObjectId || M.id || ""))), A = new Set(i.filter(yt).map((M) => String(M.id || "")));
        _.size > 0 && (v.painting.paint.strokes = (Array.isArray((f = (c = v.painting) == null ? void 0 : c.paint) == null ? void 0 : f.strokes) ? v.painting.paint.strokes : []).filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || ""))), v.painting.groups = mn().filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), fr()), k.size > 0 && (v.painting.raster_objects = En().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Po()), A.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => A.has(String((M == null ? void 0 : M.id) || "")) ? zt(M) ? (wo(M) || (M.visible = !1), !0) : !1 : !0), ko(), Wt()), h.selectedId = null, h.selectedIds = [], at(), lt(), He(), qe(), ue();
        return;
      }
      if (Qt(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (p = v.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== _), v.painting.groups = mn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== _), fr(), h.selectedId = null, h.selectedIds = [], at(), lt(), He(), qe(), ue();
        return;
      }
      if (gn(s)) {
        const _ = on(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = En().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== _), Po(), h.selectedId = null, h.selectedIds = [], at(), lt(), He(), qe(), ue();
        return;
      }
      if (t === "stickers" || yt(s)) {
        if (zt(s)) {
          if (wo(s)) return;
          s.visible = !1, Wt(), at(), lt(), He(), qe(), ue();
          return;
        }
        v.stickers = v.stickers.filter((_) => _.id !== s.id), ko(), Wt(), h.selectedId = ((g = vr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], v.active.selected_sticker_id = h.selectedId, at(), lt(), He(), qe(), ue();
        return;
      }
      lv();
    }
  }
  function zc(i, s) {
    const c = Pe.frameSafeRect;
    if (!i || !c || h.mode !== "frame") return !1;
    const f = Iu * ro(c, i), p = Yf(Uf(c, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Np(i, s) {
    if (!i || i.locked === !0) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [M, E] = _.split(":").map((O) => Number(O));
        if (Number.isFinite(M) && Number.isFinite(E)) return M >= E;
      }
      const k = Number(i.hFOV_deg || 64), A = Number(i.vFOV_deg || 40);
      return Math.abs(k - A) > 1e-6 ? k >= A : io(i) >= 1;
    })();
    let [p, m] = c[String(s)] || c["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!zc(i, g)) {
      const _ = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = tl(_, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function pv(i, s, c) {
    if (!i || i.locked === !0) return !1;
    const f = ts(s, c);
    if (!f) return !1;
    const p = f.ratio;
    if (!zc(i, p)) {
      const m = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = tl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Pp(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), c = ci(i), f = c.tanHalfX / Math.max(1e-12, c.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!zc(i, p)) {
      const m = J(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = tl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = Xi(i);
  }
  function Ap() {
    bo().forEach((s, c) => {
      s.type === "sticker" && s.item && (s.item.z_index = c), s.type === "strokeGroup" && s.item && (s.item.z_index = c), s.type === "rasterObject" && s.item && (s.item.z_index = c);
    });
  }
  function hv() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => Mn(_))) return;
    Ap();
    const c = bo(), f = new Set(i.map((_) => yt(_) ? `sticker:${String(_.id || "")}` : gn(_) ? `rasterObject:${on(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (c.forEach((_) => {
      var A, M;
      const k = _.type === "sticker" ? `sticker:${String(((A = _.item) == null ? void 0 : A.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? p.push(_) : m.push(_);
    }), !p.length || p[p.length - 1] === c[c.length - 1]) return;
    [...m, ...p].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Wt(), at(), lt(), qe(), ue();
  }
  function mv() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => Mn(_))) return;
    Ap();
    const c = bo(), f = new Set(i.map((_) => yt(_) ? `sticker:${String(_.id || "")}` : gn(_) ? `rasterObject:${on(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (c.forEach((_) => {
      var A, M;
      const k = _.type === "sticker" ? `sticker:${String(((A = _.item) == null ? void 0 : A.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(k) ? p.push(_) : m.push(_);
    }), !p.length || p[0] === c[0]) return;
    [...p, ...m].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Wt(), at(), lt(), qe(), ue();
  }
  function gv() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", u && (v.output_preset = N(Number(v.output_preset || 2048))), d && (v.coverage = Hn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), Fn(), e.setDirtyCanvas(!0, !0));
  }
  function Fn() {
    var s;
    if (r) return;
    v.coverage = Hn(v.coverage), R0(e, v.active);
    const i = V0(e, v);
    y && !$0(e, i, String(y.value ?? "")) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Cp = () => Fn();
  r || (e.__panoFlushStateBeforeQueue = Cp);
  function jc() {
    v.ui_settings = tI(v.ui_settings), r || Fn();
  }
  function lt() {
    var i;
    r || (Fn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function yv() {
    r || Kb() && Jd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function bv(i = {}) {
    var f, p, m, g, _, k, A, M, E, O;
    const s = i.syncPreview !== !1, c = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), c && ((A = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || A.call(k, !0, !0), (O = (E = (M = mr) == null ? void 0 : M.canvas) == null ? void 0 : E.setDirty) == null || O.call(E, !0, !0));
  }
  function Ms() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", On(), He());
  }
  function wi(i) {
    const s = C.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * C.width,
      y: (i.clientY - s.top) / s.height * C.height
    };
  }
  function Ns(i) {
    const s = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Ip() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Ge() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === s) || i[0] || null;
  }
  function vv() {
    var j, te, Z, ne, ae;
    if (!C) return null;
    const i = (j = C.getBoundingClientRect) == null ? void 0 : j.call(C), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? C.width / i.width : 1, c = Number((i == null ? void 0 : i.height) || 0) > 0 ? C.height / i.height : 1;
    Pe.frameCanvasScale = Math.min(s, c);
    let f = 24, p = 24;
    const m = Math.max(f + 1, C.width - 24);
    let g = Math.max(p + 1, C.height - 24);
    const _ = (te = ht == null ? void 0 : ht.getBoundingClientRect) == null ? void 0 : te.call(ht), k = (Z = sn == null ? void 0 : sn.getBoundingClientRect) == null ? void 0 : Z.call(sn);
    let A = 24;
    _ && i && _.width > 0 && _.height > 0 && (A = Math.max(A, (_.right - i.left) * s + Km)), k && i && k.width > 0 && k.height > 0 && ((ne = I.frameRail) == null ? void 0 : ne.visible) === !0 && (A = Math.max(A, (i.right - k.left) * s + Km)), f = Math.max(f, A);
    const M = Math.min(m, C.width - A);
    let E = 24;
    const O = (ae = St == null ? void 0 : St.getBoundingClientRect) == null ? void 0 : ae.call(St);
    if (O && i && O.width > 0 && O.height > 0 && (E = Math.max(E, (O.bottom - i.top) * c + Eu)), [Un, It].forEach((pe) => {
      var Ke;
      if (!pe || !i) return;
      const ie = getComputedStyle(pe);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const Se = (Ke = pe.getBoundingClientRect) == null ? void 0 : Ke.call(pe);
      !Se || Se.width <= 0 || Se.height <= 0 || (E = Math.max(E, (i.bottom - Se.top) * c + Eu));
    }), Fe && i) {
      const pe = getComputedStyle(Fe);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (E = Math.max(E, (LC + Eu) * c));
    }
    return p = Math.max(p, E), g = Math.max(p + 1, Math.min(g, C.height - E)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function Hc(i = Ge()) {
    if (!i || !C) return null;
    const s = Pe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, C.width - 48),
      h: Math.max(1, C.height - 48)
    };
    return Vx(s, i, Iu * ro(s, i));
  }
  function en(i = Ge()) {
    const s = Hc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Gc() {
    return t === "cutout" && !!Ge();
  }
  function dr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = bi(), g = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: J(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const c = Pc(i.x, i.y), { lon: f, lat: p } = Oc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function pr(i, s, c = performance.now()) {
    const f = en(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Dc(s, p);
    if (!m) return null;
    const { lon: g, lat: _ } = Oc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - _ / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function _v(i, s) {
    const c = Ge();
    if (!c || c.locked === !0) return !1;
    const f = Number(s) > 0, p = f0(c, s);
    if (!p) return !1;
    if (f) {
      const m = Iu * ro(
        Pe.frameSafeRect || { w: C.width, h: C.height },
        p
      ), g = Xf({ width: C.width, height: C.height }, m);
      if (g.halfW < C.width * 0.5 - 1e-6 || g.halfH < C.height * 0.5 - 1e-6) return !1;
    }
    return c.hFOV_deg = p.hFOV_deg, c.vFOV_deg = p.vFOV_deg, h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, at(), lt(), He());
    }, 180), He(), !0;
  }
  function wv() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, at(), lt(), He(), !0) : !1;
  }
  function Sa() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Li(), h.interaction = null, So(), Kr(), He(), gt(h.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function xv(i, s) {
    const c = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function xi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Xr : Tn[s] ? s : h.activeBrushPresetId || Xr;
  }
  function Ep() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (Ip() || Gc());
  }
  function Op() {
    var i;
    return Ep() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ps(i, s = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: c, y: f, inside: p }, g;
  }
  function Sv() {
    var M, E;
    if (!Op()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, c = xi(s), f = Tn[c] || Tn[Xr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : jn(h.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : J(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), A = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : J(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: kr(_, k),
      strokeStyle: kr(_, A),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((E = h.pointerPos) == null ? void 0 : E.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function kv() {
    var O, j, te;
    const i = Sv();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, c = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", A = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), E = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Hl, c = Hl, f = "0", g = "0", _ = "none", M = $C, E = zC, m = ZC(i.fillStyle, A, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((O = i.preset) == null ? void 0 : O.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Z), c = Math.max(6, i.radius * 2), f = `${Math.min(6, c * 0.42)}px`, p = Number(((te = (j = i.preset) == null ? void 0 : j.angle) == null ? void 0 : te.value) || 0) * qi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(c)}px`, U.style.borderRadius = f, U.style.border = g, U.style.boxShadow = _, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - E)}px) rotate(${p}deg)`;
  }
  function Mv() {
    var pe;
    if (!X || !H) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const c = xi(s), f = Tn[c] || Tn[Xr], p = Number(h.brushSizes[c] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), _ = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : jn(h.paintColor), A = i === "mask" ? kr(k, 0.22) : _ ? "rgba(255,255,255,0.14)" : kr(k, J(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? kr(k, 0.96) : _ ? "rgba(255,255,255,0.72)" : kr(k, J(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let E = g * 2, O = g * 2, j = "999px", te = 0, Z = A;
    const ne = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ie = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      E = Math.max(16, g * 2 * ie), O = Math.max(10, g * 2), j = `${Math.min(8, O * 0.42)}px`, te = Number(((pe = f == null ? void 0 : f.angle) == null ? void 0 : pe.value) || 0) * qi;
    } else s === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${M} 0%, ${A} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (E = Math.max(18, g * 1.8), O = E, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : _ && (Z = "rgba(255,255,255,0.12)");
    H.style.width = `${Math.round(E)}px`, H.style.height = `${Math.round(O)}px`, H.style.borderRadius = j, H.style.background = Z, H.style.border = `1px solid ${ne}`, H.style.boxShadow = `0 0 0 1px ${ae}`, H.style.transform = `rotate(${te}deg)`, Me && (clearTimeout(Me), Me = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function As() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), Me && clearTimeout(Me), Me = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), Me = 0;
    }, 180));
  }
  function Fp(i, s, c, f) {
    const p = xi(s), m = Tn[p] || Tn[Xr], g = h.brushSizes[p] ?? 10, _ = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), k = xv(f, _), A = c.map((E) => ({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: Number.isFinite(Number(E == null ? void 0 : E.widthScale)) ? Math.max(0, Number(E.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(E == null ? void 0 : E.pressureLike)) ? Math.max(0, Number(E.pressureLike)) : 1
    })), M = {
      id: Ro(i),
      actionGroupId: Ro("ag"),
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
        rawPoints: A.map((E) => ({ ...E })),
        points: A.map((E) => ({ ...E }))
      }
    };
    return Gm(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Tp(i, s, c, f) {
    const p = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = xi(s), g = Tn[m] || Tn[Xr], _ = {
      id: Ro(i),
      actionGroupId: Ro("ag"),
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
    return Gm(_, g), Number(g.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function Io(i) {
    const s = v.painting || (v.painting = qo(null)), c = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Nv(i, s, c = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const A = Ge();
      if (!A || (f = pr(s, A, c), !f)) return !1;
    } else
      f = dr(s, c);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const A = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (A < 15e-4 && M < 15e-4) return !1;
    }
    const _ = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ..._ }), m.push({ ..._ });
    const k = zn();
    if (k) {
      const A = h.paintEngine.ensureTarget(k);
      h.paintEngine.appendStrokePoint(A, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Pv(i, s, c = performance.now()) {
    var g, _;
    let f;
    if (h.mode === "frame") {
      const k = Ge();
      if (!k) return !1;
      f = pr(s, k, c);
    } else
      f = dr(s, c);
    const p = (_ = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const k = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), A = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && A < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Av(i) {
    var ie, Se, Ke, Ye, rt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Ss();
    const c = zn(), f = ga(c.width, c.height);
    if (!pp(f, s, { w: c.width, h: c.height })) return !1;
    const p = ((Se = (ie = f.ctx) == null ? void 0 : ie.getImageData(0, 0, c.width, c.height)) == null ? void 0 : Se.data) || null;
    if (!p) return !1;
    const m = new Map(mn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], _ = [], k = [...En().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let A = !1, M = bo().reduce((be, oe) => Math.max(be, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function E(be, oe, he, we = 8) {
      let Re = oe, Ue = he, Te = -1, ft = -1;
      for (let Je = 0; Je < he; Je += 1)
        for (let Rt = 0; Rt < oe; Rt += 1)
          be[(Je * oe + Rt) * 4 + 3] <= we || (Rt < Re && (Re = Rt), Je < Ue && (Ue = Je), Rt > Te && (Te = Rt), Je > ft && (ft = Je));
      return Te < Re || ft < Ue ? null : { minX: Re, minY: Ue, maxX: Te, maxY: ft };
    }
    const O = E(p, c.width, c.height, 8);
    if (!O) return !1;
    function j(be, oe) {
      return !be || !oe ? !1 : !(be.maxX < oe.minX || oe.maxX < be.minX || be.maxY < oe.minY || oe.maxY < be.minY);
    }
    function te(be, oe) {
      const he = pi((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", oe);
      if (!he) return null;
      const we = he.centerUv.u - he.halfW, Re = he.centerUv.u + he.halfW, Ue = he.centerUv.v - he.halfH, Te = he.centerUv.v + he.halfH, ft = c.width, Je = c.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * ft),
        maxX: Math.ceil((Re % 1 + 1) % 1 * ft),
        minY: Math.floor(J(Ue, 0, 1) * Je),
        maxY: Math.ceil(J(Te, 0, 1) * Je),
        wraps: Re - we >= 1 || we < 0 || Re > 1
      };
    }
    function Z(be) {
      const oe = (be == null ? void 0 : be.bbox) || null;
      if (!oe) return null;
      const he = (be == null ? void 0 : be.transform) || {}, we = c.width, Re = c.height, Ue = Number(oe.u0 || 0) + Number(he.du || 0), Te = Number(oe.u1 || 0) + Number(he.du || 0), ft = Number(oe.v0 || 0) + Number(he.dv || 0), Je = Number(oe.v1 || 0) + Number(he.dv || 0);
      return {
        minX: Math.floor((Ue % 1 + 1) % 1 * we),
        maxX: Math.ceil((Te % 1 + 1) % 1 * we),
        minY: Math.floor(J(ft, 0, 1) * Re),
        maxY: Math.ceil(J(Je, 0, 1) * Re),
        wraps: Te - Ue >= 1 || Ue < 0 || Te > 1
      };
    }
    function ne(be) {
      return be ? be.wraps ? j(O, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || j(O, { minX: be.minX, maxX: c.width - 1, minY: be.minY, maxY: be.maxY }) : j(O, be) : !0;
    }
    function ae(be) {
      if (!be) return { touched: !1, canvas: null };
      const oe = ga(c.width, c.height, { readback: !0 });
      oe.ctx.drawImage(be, 0, 0);
      const he = oe.ctx.getImageData(0, 0, c.width, c.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(f.canvas, 0, 0), oe.ctx.restore();
      const we = oe.ctx.getImageData(0, 0, c.width, c.height);
      for (let Re = 0; Re < c.width * c.height; Re += 1) {
        if (p[Re * 4 + 3] <= 8) continue;
        const Te = he.data[Re * 4 + 3], ft = we.data[Re * 4 + 3];
        if (Te > ft)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(be, oe, he) {
      const we = Number(he == null ? void 0 : he.z_index), Re = O1(be, oe, he).map((Ue, Te) => ({
        ...Ue,
        z_index: Number.isFinite(we) ? we + Te * 1e-3 : M + Te * 1e-3
      }));
      return Re.length && (M = Math.max(M, ...Re.map((Ue) => Number((Ue == null ? void 0 : Ue.z_index) || 0))) + 1), Re;
    }
    for (const be of mn()) {
      const oe = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!oe) continue;
      const he = cr(oe, "paint");
      if (!ne(te(be, he))) {
        _.push(be), g.push(...he);
        continue;
      }
      const we = ((Ye = (Ke = h.paintEngine) == null ? void 0 : Ke.getGroupTarget) == null ? void 0 : Ye.call(Ke, oe)) || null, Re = ((rt = we == null ? void 0 : we.committedPaint) == null ? void 0 : rt.canvas) || null;
      if (!Re) {
        _.push(be), g.push(...he);
        continue;
      }
      const Ue = ae(Re);
      if (!Ue.touched || !Ue.canvas) {
        _.push(be), g.push(...he);
        continue;
      }
      A = !0;
      const Te = pe(Ue.canvas, "paint", m.get(oe) || be || {});
      k.push(...Te);
    }
    for (const be of En().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!ne(Z(be))) {
        k.push(be);
        continue;
      }
      const oe = qd(be, null);
      if (!oe) {
        k.push(be);
        continue;
      }
      const he = ae(oe);
      if (!he.touched || !he.canvas) {
        k.push(be);
        continue;
      }
      A = !0;
      const we = pe(he.canvas, "paint", be);
      k.push(...we);
    }
    return A ? (v.painting.paint.strokes = g, v.painting.groups = _.sort((be, oe) => Number((be == null ? void 0 : be.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), v.painting.raster_objects = k.sort((be, oe) => Number((be == null ? void 0 : be.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), da({ preservePanelValues: !1 }), !0) : !1;
  }
  function Cv(i) {
    var g, _, k, A, M;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.rawPoints) || ((A = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : A.points) || []).length >= 1) {
      Kc(i);
      const E = zn();
      E && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(E) : h.paintEngine.commitActiveStroke(i.stroke, E)), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Fp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = zn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Iv(i) {
    var g, _;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      Kc(i);
      const k = zn();
      k && h.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const c = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Tp(i.layerKind, c.toolKind, [], f);
    p.actionGroupId = c.actionGroupId, i.stroke = p;
    const m = zn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Kc(i) {
    var m, g, _, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const c = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Lc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Av(i);
    const f = i.layerKind === "paint" && c !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && xd((_ = i.stroke) == null ? void 0 : _.actionGroupId), Io(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Lc(p, i.stroke.targetSpace, !0), f && xd((k = i.stroke) == null ? void 0 : k.actionGroupId), Io(i.layerKind).push(i.stroke), !0);
  }
  function Dp(i) {
    var c;
    if (t === "cutout" && h.mode === "frame") {
      const f = Ge(), p = en(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = pr(i, f, performance.now()), _ = g ? No(g) : null;
      if (_)
        for (const A of Tc()) {
          if (!yt(A)) continue;
          const M = _a(A, _);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const E = Xt(A);
            if (E != null && E.visible) return { item: A, geom: E };
          }
        }
      const k = fc(!1).slice().sort((A, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0));
      for (const A of k) {
        if (A.type === "strokeGroup") {
          const O = _o(ca("paint", A.actionGroupId || A.id || ""));
          if (!O) continue;
          const j = Xt(O);
          if (!(j != null && j.visible)) continue;
          const te = Array.isArray(j.strokePaths) ? j.strokePaths : [];
          for (const Z of te) {
            const ne = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!ne.length) continue;
            if (Z.closed && ne.length >= 3 && Jr(i, ne)) return { item: O, geom: j };
            const ae = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < ne.length - 1; pe += 1)
              if (Lu(i, ne[pe], ne[pe + 1]) <= ae * ae) return { item: O, geom: j };
            if (ne.length === 1 && ki(i, ne[0]) <= ae * ae) return { item: O, geom: j };
          }
          continue;
        }
        if (A.type === "rasterObject") {
          const O = vo(ua(((c = A.item) == null ? void 0 : c.id) || A.id || ""));
          if (!O) continue;
          const j = Xt(O);
          if (Xd(O, j, i, g)) return { item: O, geom: j };
          continue;
        }
        const M = A.item;
        if (!M || !yt(M) || !_) continue;
        const E = _a(M, _);
        if (E && Number(E.x) >= 0 && Number(E.x) <= 1 && Number(E.y) >= 0 && Number(E.y) <= 1) {
          const O = Xt(M);
          if (O != null && O.visible) return { item: M, geom: O };
        }
      }
      return null;
    }
    const s = [
      ...fc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? _o(ca("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? vo(ua(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? Tc().filter((f) => $n(f)) : []
    ];
    for (const f of s) {
      if (Qt(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of g) {
          const k = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!k.length) continue;
          if (_.closed && k.length >= 3 && Jr(i, k)) return { item: f, geom: m };
          const A = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < k.length - 1; M += 1)
            if (Lu(i, k[M], k[M + 1]) <= A * A) return { item: f, geom: m };
          if (k.length === 1 && ki(i, k[0]) <= A * A) return { item: f, geom: m };
        }
        continue;
      }
      if (gn(f)) {
        const m = Xt(f);
        if (!(m != null && m.visible)) continue;
        if (Xd(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = Xt(f);
      if (p.visible && Jr(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Bc(i, s, c = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (yt(c)) return df(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((g) => ki(g, s) <= 121);
      if (p >= 0) {
        const g = i.corners[p], _ = g.x - i.center.x, k = g.y - i.center.y, A = _ * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: A };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && Jr(s, _)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let A = 0; A < _.length - 1; A += 1)
          if (Lu(s, _[A], _[A + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => ki(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], g = m.x - i.center.x, _ = m.y - i.center.y, k = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      return Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => ki(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const f = i.corners.findIndex((p) => ki(p, s) <= 121);
    if (f >= 0) {
      const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: _ };
    }
    return ki(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Jr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function Lp(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Ev(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Ov(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => Ev(i, p))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Jr({ x: c, y: f }, s.corners);
  }
  function gt(i) {
    if (kv(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Ie("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Ie("grabbing") : h.interaction.kind === "space_pan" ? Ie("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "roll_frame" ? Ie("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Ie("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Ie(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Ie("grabbing") : Ie("default");
      return;
    }
    if (Op()) {
      Ie("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Ie(DC);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Ie("default");
        return;
      }
      Ie("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Ie("default");
      return;
    }
    const s = Nt(), c = s ? Xt(s) : null, f = s ? Mn(s) : !1, p = f ? { kind: "none", cursor: "default" } : Bc(c, i, s);
    if (!f && p.kind !== "none") {
      Ie(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Dp(i)) {
      Ie("default");
      return;
    }
    Ie(h.mode === "pano" ? "grab" : "default");
  }
  function qe() {
    var k, A;
    if (!Zt) return;
    if (h.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Nt(), s = ur();
    if (!i && s.length === 0 || h.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = ps(), f = k2({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: c,
      geom: s.length > 1 ? ds(s) : Xt(i),
      allLocked: mc(s),
      anyLocked: s.some((M) => Mn(M)),
      selectedLocked: Mn(i),
      activeAspect: ei(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: zt,
      isStickerHidden: wo,
      canRestoreSelectedToInitial: vb,
      iconSet: Ne
    });
    if (!f.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const p = (M, E, { requireFitsBelow: O = !0 } = {}) => {
      var Se, Ke, Ye;
      const te = Number((Se = f.anchor) == null ? void 0 : Se.minX), Z = Number((Ke = f.anchor) == null ? void 0 : Ke.maxX), ne = Number((Ye = f.anchor) == null ? void 0 : Ye.maxY);
      if (![te, Z, ne].every(Number.isFinite)) return null;
      const ae = Math.max(14, C.width - M - 14), pe = J((te + Z) * 0.5 - M * 0.5, 14, ae), ie = ne + 18;
      return !Number.isFinite(pe) || !Number.isFinite(ie) || O && ie + E > C.height - 14 ? null : { left: pe, top: ie };
    }, m = Math.max(1, Number(((k = h.menuSize) == null ? void 0 : k.w) || 220)), g = Math.max(1, Number(((A = h.menuSize) == null ? void 0 : A.h) || 40)), _ = p(m, g, { requireFitsBelow: !1 });
    if (!_) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: f.items
    }, requestAnimationFrame(() => {
      if (!Zt || I.selectionMenu.visible !== !0) return;
      const M = Zt.getBoundingClientRect(), E = Math.round(Number((M == null ? void 0 : M.width) || 0)) || 220, O = Math.round(Number((M == null ? void 0 : M.height) || 0)) || 40;
      h.menuSize = { w: E, h: O, measured: !0 };
      const j = p(E, O);
      if (!j) {
        I.selectionMenu.visible = !1;
        return;
      }
      I.selectionMenu.left = j.left, I.selectionMenu.top = j.top;
    });
  }
  function Li() {
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null, I.tooltip.visible = !1;
  }
  function Fv(i) {
    if (!ln || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const c = i;
    requestAnimationFrame(() => {
      var Z, ne;
      if (je.target !== c || !ln || !(c != null && c.isConnected)) return;
      const f = ce.getBoundingClientRect(), p = c.getBoundingClientRect(), m = 8, g = 12, _ = Math.round(Number(((Z = ln.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, k = Math.round(Number(((ne = ln.getBoundingClientRect()) == null ? void 0 : ne.height) || 0)) || 24, A = !!c.closest(".pano-floating-left"), M = !!c.closest(".pano-frame-rail"), E = !!c.closest(".pano-paint-footer") || !!c.closest(".pano-paint-color-float");
      let O = "", j = p.left - f.left + p.width * 0.5 - _ * 0.5, te = p.top - f.top - k - g;
      if (A)
        O = "tool-rail", j = p.right - f.left + 10, te = p.top - f.top + p.height * 0.5 - k * 0.5, j = J(j, m, Math.max(m, f.width - _ - m)), te = J(te, m, Math.max(m, f.height - k - m));
      else if (M)
        O = "frame-rail", j = p.left - f.left - _ - 10, te = p.top - f.top + p.height * 0.5 - k * 0.5, j = J(j, m, Math.max(m, f.width - _ - m)), te = J(te, m, Math.max(m, f.height - k - m));
      else if (E) {
        O = "footer";
        const ae = c.closest(".pano-paint-footer"), pe = ae ? ae.getBoundingClientRect() : p;
        j = pe.left - f.left + pe.width * 0.5 - _ * 0.5, te = pe.bottom - f.top + 5, j = J(j, m, Math.max(m, f.width - _ - m)), te = Math.max(m, te);
      }
      j = J(j, m, Math.max(m, f.width - _ - m)), te = Math.max(m, te), I.tooltip.left = j, I.tooltip.top = te, I.tooltip.variant = O, I.tooltip.visible = !0;
    });
  }
  const dn = Bf({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Ht(Number(i.yaw || 0)), h.viewPitch = J(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = J(Number(i.fov || h.viewFov || 100), 35, 140);
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
    getUnwrapRect: bi,
    onInteraction: () => {
      Pe.backgroundDirty = !0, Pe.dirty = !0;
    }
  });
  function Tv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += o0(s, i.lastAngle), i.lastAngle = s;
    const f = a0(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: c.shiftKey,
      altKey: i.altStarted ? !1 : c.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Lo(f), p.fillPct = (f + 180) / 360 * 100), Wr(), Wc(i), ue({ localOnly: !0 });
  }
  function Dv(i, s, c = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = Py(i.rollGesture, s, c);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Lo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), Wr(), Wc(i), ue({ localOnly: !0 });
  }
  const Rp = (i, s) => {
    const c = wi(i);
    return Math.atan2(c.y - s.y, c.x - s.x);
  };
  function Wc(i) {
    var g, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null;
    const s = en(i.shot), c = (g = C.getBoundingClientRect) == null ? void 0 : g.call(C), f = (_ = ce.getBoundingClientRect) == null ? void 0 : _.call(ce);
    if (!s || !c || !f || C.width <= 0 || C.height <= 0) return;
    const p = c.width / C.width, m = c.height / C.height;
    I.tooltip.text = `${Lo(i.shot.roll_deg)}°`, I.tooltip.left = c.left - f.left + (s.x + s.w * 0.5) * p, I.tooltip.top = c.top - f.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  it == null || it.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = Ge();
    if (!s || s.locked === !0) return;
    const c = en(s);
    if (!c) return;
    const f = { x: c.x + c.w * 0.5, y: c.y + c.h * 0.5 }, p = Rp(i, f);
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
    }, (m = it.setPointerCapture) == null || m.call(it, i.pointerId), i.preventDefault(), Wr(), Wc(h.interaction), ue({ localOnly: !0 });
  }), it == null || it.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || Tv(
      h.interaction,
      Rp(i, h.interaction.center),
      i
    );
  });
  const Lv = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (at(), lt(), He()), h.interaction = null, Li(), Kr(), Wr(), ue());
  };
  it == null || it.addEventListener("pointerup", Lv), it == null || it.addEventListener("pointercancel", () => Sa()), it == null || it.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Sa();
  }), it == null || it.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? Ge() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, at(), lt(), He(), Wr(), ue(), i.preventDefault());
  }), C.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, Ur());
    const s = wi(i);
    st = s, Ps(s, !0), h.viewTween = null, dn.state.inertia.active = !1, dn.state.inertia.vx = 0, dn.state.inertia.vy = 0;
    const c = pa(), f = c ? WM(kc(), i) : null;
    if (f === "look") {
      i.preventDefault();
      const A = Ns(i);
      h.interaction = { kind: "view", last: A, lastTs: performance.now() }, dn.startDrag(A.x, A.y, i.pointerId, performance.now()), gt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (f) {
      i.preventDefault(), Ud(f, s, i.pointerId);
      return;
    }
    if (c && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const A = Ge();
        if (!A || r || A.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: A,
          last: s,
          start: {
            yaw_deg: Number(A.yaw_deg || 0),
            pitch_deg: Number(A.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const A = h.mode === "unwrap" ? s : Ns(i);
        h.interaction = { kind: "view", last: A, lastTs: performance.now() }, dn.startDrag(A.x, A.y, i.pointerId, performance.now());
      }
      gt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const A = Ge(), M = en(A);
      if (!A || A.locked === !0 || !M) return;
      const E = Ny({
        frame: M,
        point: s,
        startRollDeg: Number(A.roll_deg ?? A.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!E) return;
      h.interaction = {
        kind: "roll_frame",
        shot: A,
        center: E.center,
        lastAngle: E.lastAngle,
        accumulatedRad: E.accumulatedRad,
        rollGesture: E,
        start: { roll_deg: Number(A.roll_deg ?? A.rot_deg ?? 0) },
        changed: !1,
        altStarted: E.source === "alt",
        source: E.source
      }, C.setPointerCapture(i.pointerId), i.preventDefault(), Wr(), ue({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      const A = Ge();
      if (!A || r || A.locked === !0) return;
      h.interaction = {
        kind: "pan_frame",
        shot: A,
        last: s,
        start: { yaw_deg: Number(A.yaw_deg || 0), pitch_deg: Number(A.pitch_deg || 0) },
        changed: !1
      }, gt(s), C.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && Vp(i, s);
      return;
    }
    if (q && !q.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (Ip() || Gc())) {
      qn();
      const A = h.primaryTool === "mask" ? "mask" : "paint", M = h.primaryTool === "mask" ? h.maskTool : h.paintTool, E = h.mode === "frame" && Gc() ? Ge() : null, O = { kind: "ERP_GLOBAL" }, j = E ? pr(s, E, performance.now()) : dr(s, performance.now());
      if (!j) {
        gt(s);
        return;
      }
      h.interaction = {
        kind: M === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: A,
        _livePreviewToken: Ro("live"),
        stroke: M === "lasso_fill" ? Tp(A, M, [j], O) : Fp(A, M, [j], O)
      }, So();
      const te = zn();
      if (te)
        if (h.paintEngine.beginStroke(h.interaction.stroke, te), h.interaction.kind === "paint_stroke") {
          const Z = h.paintEngine.ensureTarget(te), ne = Number((j == null ? void 0 : j.u) ?? (j == null ? void 0 : j.x) ?? 0), ae = Number((j == null ? void 0 : j.v) ?? (j == null ? void 0 : j.y) ?? 0);
          h.paintEngine.appendStrokePoint(Z, ne, ae, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, te);
      gt(s), C.setPointerCapture(i.pointerId), ue();
      return;
    }
    const p = ur(), m = Nt(), g = p.length > 1 ? ds(p) : m ? Xt(m) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, gt(s), C.setPointerCapture(i.pointerId), ue({ localOnly: !0 });
      return;
    }
    if (p.length > 1 && (g != null && g.visible)) {
      if ((p.some((M) => Mn(M)) ? { kind: "none" } : Bc(g, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: p.map((M) => M),
          offset: { x: s.x - g.center.x, y: s.y - g.center.y },
          startCenter: { x: g.center.x, y: g.center.y },
          stickerSnapshots: p.filter((M) => yt(M)).map((M) => ({
            id: String(M.id || ""),
            yaw_deg: Number(Yt(M).yaw_deg || 0),
            pitch_deg: Number(Yt(M).pitch_deg || 0),
            center: (() => {
              var O, j;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((O = E.center) == null ? void 0 : O.x) || 0), y: Number(((j = E.center) == null ? void 0 : j.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: p.filter((M) => Qt(M)).map((M) => ({
            id: String(M.actionGroupId || M.id || ""),
            layerKind: String(M.layerKind || "paint"),
            snapshot: bn(cr(M.actionGroupId, M.layerKind)),
            frameSnapshot: bn(pi(M.actionGroupId, M.layerKind)),
            center: (() => {
              var O, j;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((O = E.center) == null ? void 0 : O.x) || 0), y: Number(((j = E.center) == null ? void 0 : j.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: hc(M.actionGroupId, M.layerKind)
          })),
          rasterSnapshots: p.filter((M) => gn(M)).map((M) => ({
            id: on(M.rasterObjectId || M.id || ""),
            snapshot: bn(En().find((E) => String((E == null ? void 0 : E.id) || "") === on(M.rasterObjectId || M.id || ""))),
            center: (() => {
              var O, j;
              const E = Xt(M);
              return E != null && E.visible ? { x: Number(((O = E.center) == null ? void 0 : O.x) || 0), y: Number(((j = E.center) == null ? void 0 : j.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: tp(M)
          }))
        }, gt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (m && (g != null && g.visible)) {
      const A = Mn(m) ? { kind: "none" } : Bc(g, s, m);
      if (A.kind === "scale") {
        h.interaction = Qt(m) ? {
          kind: "scale_stroke_group",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: bn(cr(m.actionGroupId, m.layerKind)),
          frameSnapshot: bn(pi(m.actionGroupId, m.layerKind)),
          cursor: A.cursor
        } : gn(m) ? {
          kind: "scale_raster_object",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          snapshot: bn(En().find((M) => String((M == null ? void 0 : M.id) || "") === on(m.rasterObjectId || m.id || ""))),
          cursor: A.cursor
        } : {
          kind: "scale",
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Yt(m).hFOV_deg || 20),
          startVFOV: Number(Yt(m).vFOV_deg || 20),
          cursor: A.cursor
        }, gt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (A.kind === "scale_x" || A.kind === "scale_y") {
        h.interaction = {
          kind: A.kind,
          item: m,
          center: g.center,
          startDist: Math.max(1, Math.hypot(s.x - g.center.x, s.y - g.center.y)),
          startHFOV: Number(Yt(m).hFOV_deg || 20),
          startVFOV: Number(Yt(m).vFOV_deg || 20),
          cursor: A.cursor,
          edge: A.edge
        }, gt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (A.kind === "rotate") {
        h.interaction = Qt(m) ? {
          kind: "rotate_stroke_group",
          item: m,
          center: g.center,
          startAng: Math.atan2(s.y - g.center.y, s.x - g.center.x),
          snapshot: bn(cr(m.actionGroupId, m.layerKind)),
          frameSnapshot: bn(pi(m.actionGroupId, m.layerKind))
        } : {
          kind: "rotate",
          item: m,
          center: g.center,
          startRot: Number(Yt(m).rot_deg || Yt(m).roll_deg || 0),
          startAng: Math.atan2(s.y - g.center.y, s.x - g.center.x)
        }, gt(s), C.setPointerCapture(i.pointerId);
        return;
      }
      if (A.kind === "move") {
        if (Qt(m)) {
          const M = h.mode === "frame" ? (() => {
            const E = Ge();
            return E ? pr(s, E, performance.now()) : null;
          })() : dr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: m,
            startUv: M,
            snapshot: bn(cr(m.actionGroupId, m.layerKind)),
            frameSnapshot: bn(pi(m.actionGroupId, m.layerKind))
          }, gt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        if (gn(m)) {
          const M = h.mode === "frame" ? (() => {
            const E = Ge();
            return E ? pr(s, E, performance.now()) : null;
          })() : dr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: m,
            startUv: M,
            snapshot: bn(En().find((E) => String((E == null ? void 0 : E.id) || "") === on(m.rasterObjectId || m.id || "")))
          }, gt(s), C.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: m,
          offset: { x: s.x - g.center.x, y: s.y - g.center.y }
        }, gt(s), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const _ = Dp(s);
    if (_) {
      const A = h.selectedId !== _.item.id;
      if (A && h.selectedId && (at(), Fn()), _r(_.item), t === "cutout" && A && (h.cutoutAspectOpen = !1), A && He(), qe(), ue(), Mn(_.item)) {
        gt(s);
        return;
      }
      h.interaction = {
        kind: Qt(_.item) ? "move_stroke_group" : gn(_.item) ? "move_raster_object" : "move",
        item: _.item,
        offset: { x: s.x - _.geom.center.x, y: s.y - _.geom.center.y },
        startUv: Qt(_.item) || gn(_.item) ? h.mode === "frame" ? (() => {
          const M = Ge();
          return M ? pr(s, M, performance.now()) : null;
        })() : dr(s, performance.now()) : null,
        snapshot: Qt(_.item) ? bn(cr(_.item.actionGroupId, _.item.layerKind)) : gn(_.item) ? bn(En().find((M) => String((M == null ? void 0 : M.id) || "") === on(_.item.rasterObjectId || _.item.id || ""))) : null,
        frameSnapshot: Qt(_.item) ? bn(pi(_.item.actionGroupId, _.item.layerKind)) : null
      }, gt(s), C.setPointerCapture(i.pointerId);
      return;
    }
    const k = !!h.selectedId;
    k && (at(), Fn()), da(), k && He(), qe(), ue(), h.mode === "pano" && Vp(i, s);
  };
  function Vp(i, s) {
    if (pa()) {
      const f = kc().emptyLeft;
      f && Ud(f, s, i.pointerId);
      return;
    }
    const c = Ns(i);
    h.interaction = { kind: "view", last: c, lastTs: performance.now() }, dn.startDrag(c.x, c.y, i.pointerId, performance.now()), gt(s), C.setPointerCapture(i.pointerId);
  }
  function Rv(i, s) {
    if (!S || !Mt.playing) return;
    if (Mt.stop(), i.kind === "move_multi") {
      const p = ds(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), _ = g ? Xt(g) : null;
        _ != null && _.visible && (m.yaw_deg = Number(Yt(g).yaw_deg || 0), m.pitch_deg = Number(Yt(g).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const c = Xt(i.item);
    if (!(c != null && c.visible)) return;
    const f = Yt(i.item);
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
    var f, p, m, g, _, k, A, M, E, O, j, te, Z, ne, ae, pe, ie, Se, Ke, Ye, rt, be;
    const s = wi(i);
    if (Ps(s, !0), !h.interaction) {
      gt(s);
      return;
    }
    gt(s);
    const c = h.interaction;
    if (st && (s.x !== st.x || s.y !== st.y)) {
      const oe = st;
      st = null, ["view", "marquee_select", "space_pan", "space_orbit"].includes(c.kind) || Rv(c, oe);
    }
    if (c.kind === "paint_stroke") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let he = !1;
      oe.forEach((we) => {
        const Re = wi(we);
        if (h.mode === "frame") {
          const Ue = Ge(), Te = Ue ? en(Ue) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), Je = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && Je >= 0 && Je <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, Cv(c));
          }
        }
        Nv(c, Re, performance.now()) && (he = !0);
      }), he && ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let he = !1;
      if (oe.forEach((we) => {
        const Re = wi(we);
        if (h.mode === "frame") {
          const Ue = Ge(), Te = Ue ? en(Ue) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), Je = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && Je >= 0 && Je <= 1)) {
              c._outOfFrame = !0;
              return;
            }
            c._outOfFrame && (c._outOfFrame = !1, Iv(c));
          }
        }
        Pv(c, Re, performance.now()) && (he = !0);
      }), he) {
        const we = zn();
        we && h.paintEngine.updateActiveStroke(c.stroke, we), ue({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const oe = performance.now(), he = h.mode === "unwrap" ? s : Ns(i);
      dn.moveDrag(he.x, he.y, h.mode === "unwrap" ? "unwrap" : "pano", oe), c.lastTs = oe, c.last = he, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "space_pan" || c.kind === "space_orbit") {
      const oe = yi();
      Mc(c.kind === "space_pan" ? tk(oe, s.x - c.last.x, s.y - c.last.y, C.width, C.height, c.depth) : ek(oe, s.x - c.last.x, s.y - c.last.y, C.height, c.pivot)), c.last = s;
      return;
    }
    if (c.kind === "pan_frame") {
      const oe = Hc(c.shot);
      if (!oe || !c.shot) return;
      const he = s.x - c.last.x, we = s.y - c.last.y, Re = Ay(c.shot, {
        dx: he,
        dy: we,
        focalPx: oe.focalPx,
        invertX: ((f = v.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
        invertY: ((p = v.ui_settings) == null ? void 0 : p.invert_view_y) === !0
      });
      c.shot.yaw_deg = Re.yaw_deg, c.shot.pitch_deg = Re.pitch_deg, c.changed = c.changed || Math.abs(he) > 0 || Math.abs(we) > 0, c.last = s, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "roll_frame") {
      if (c.source === "knob") return;
      Dv(c, s, i);
      return;
    }
    if (c.kind === "move") {
      const oe = s.x - c.offset.x, he = s.y - c.offset.y;
      if (h.mode === "frame" && t === "cutout") {
        const we = Ge(), Re = en(we);
        if (!we || !Re) return;
        const Ue = {
          x: J((oe - Re.x) / Math.max(1, Re.w), 0, 1),
          y: J((he - Re.y) / Math.max(1, Re.h), 0, 1)
        }, Te = Dc(we, Ue);
        if (!Te) return;
        const ft = Ws(Te);
        lr(c.item, { yaw_deg: ft.yaw, pitch_deg: ft.pitch });
      } else if (h.mode === "unwrap") {
        const we = bi(), Re = J((oe - we.x) / Math.max(we.w, 1), 0, 1), Ue = J((he - we.y) / Math.max(we.h, 1), 0, 1);
        lr(c.item, { yaw_deg: Ht(Re * 360 - 180), pitch_deg: J(90 - Ue * 180, -90, 90) });
      } else {
        const we = Pc(oe, he), Re = Ws(we);
        lr(c.item, { yaw_deg: Re.yaw, pitch_deg: Re.pitch });
      }
      yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const oe = h.mode === "frame" ? (() => {
        const Re = Ge();
        return Re ? pr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!oe || !c.startUv) return;
      const he = Xn(Number(oe.u || 0), Number(c.startUv.u || 0)), we = Number(oe.v || 0) - Number(c.startUv.v || 0);
      kd((m = c.item) == null ? void 0 : m.actionGroupId, he, we, c.snapshot, (g = c.item) == null ? void 0 : g.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const oe = h.mode === "frame" ? (() => {
        const Re = Ge();
        return Re ? pr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!oe || !c.startUv) return;
      const he = Xn(Number(oe.u || 0), Number(c.startUv.u || 0)), we = Number(oe.v || 0) - Number(c.startUv.v || 0);
      Nd(((_ = c.item) == null ? void 0 : _.rasterObjectId) || ((k = c.item) == null ? void 0 : k.id) || "", he, we, c.snapshot) && (Po(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      lb(((A = c.item) == null ? void 0 : A.rasterObjectId) || ((M = c.item) == null ? void 0 : M.id) || "", he, c.snapshot) && (Po(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const oe = s.x - Number(((E = c.offset) == null ? void 0 : E.x) || 0), he = s.y - Number(((O = c.offset) == null ? void 0 : O.y) || 0);
      let we = !1, Re = !1, Ue = !1;
      const Te = oe - Number(((j = c.startCenter) == null ? void 0 : j.x) || oe), ft = he - Number(((te = c.startCenter) == null ? void 0 : te.y) || he);
      for (const Je of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Rt = (t === "cutout" ? pc() : vr()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(Je.id || ""));
        if (!Rt || !yt(Rt)) continue;
        const pn = {
          x: Number(((Z = Je.center) == null ? void 0 : Z.x) || 0) + Te,
          y: Number(((ne = Je.center) == null ? void 0 : ne.y) || 0) + ft
        };
        if (h.mode === "frame" && t === "cutout") {
          const Pt = Ge(), Vt = en(Pt);
          if (!Pt || !Vt) continue;
          const Ri = {
            x: J((pn.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: J((pn.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, ih = Dc(Pt, Ri);
          if (!ih) continue;
          const oh = Ws(ih);
          lr(Rt, { yaw_deg: oh.yaw, pitch_deg: oh.pitch });
        } else if (h.mode === "unwrap") {
          const Pt = bi(), Vt = J((pn.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), Ri = J((pn.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          lr(Rt, { yaw_deg: Ht(Vt * 360 - 180), pitch_deg: J(90 - Ri * 180, -90, 90) });
        } else {
          const Pt = Pc(pn.x, pn.y), Vt = Ws(Pt);
          lr(Rt, { yaw_deg: Vt.yaw, pitch_deg: Vt.pitch });
        }
        we = !0;
      }
      for (const Je of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Rt = {
          x: Number(((ae = Je.center) == null ? void 0 : ae.x) || 0) + Te,
          y: Number(((pe = Je.center) == null ? void 0 : pe.y) || 0) + ft
        }, pn = h.mode === "frame" ? (() => {
          const Vt = Ge();
          return Vt ? pr(Rt, Vt, performance.now()) : null;
        })() : dr(Rt, performance.now()), Pt = Je.centerUv || null;
        if (pn && Pt) {
          const Vt = Xn(Number(pn.u || 0), Number(Pt.u || 0)), Ri = Number(pn.v || 0) - Number(Pt.v || 0);
          kd(Je.id, Vt, Ri, Je.snapshot, Je.layerKind, Je.frameSnapshot) && (we = !0, Re = !0);
        }
      }
      for (const Je of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Rt = {
          x: Number(((ie = Je.center) == null ? void 0 : ie.x) || 0) + Te,
          y: Number(((Se = Je.center) == null ? void 0 : Se.y) || 0) + ft
        }, pn = h.mode === "frame" ? (() => {
          const Vt = Ge();
          return Vt ? pr(Rt, Vt, performance.now()) : null;
        })() : dr(Rt, performance.now()), Pt = Je.centerUv || null;
        if (pn && Pt) {
          const Vt = Xn(Number(pn.u || 0), Number(Pt.u || 0)), Ri = Number(pn.v || 0) - Number(Pt.v || 0);
          Nd(Je.id, Vt, Ri, Je.snapshot) && (we = !0, Ue = !0);
        }
      }
      we && (Re ? fr({ rebuildPaintEngine: !1 }) : Ue ? Po() : Wt(), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Md((Ke = c.item) == null ? void 0 : Ke.actionGroupId, he, 0, c.snapshot, (Ye = c.item) == null ? void 0 : Ye.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let oe = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - Number(c.startAng || 0)) * qi;
      i.shiftKey && (oe = Math.round(oe / 45) * 45), Md((rt = c.item) == null ? void 0 : rt.actionGroupId, 1, oe, c.snapshot, (be = c.item) == null ? void 0 : be.layerKind, c.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = s, ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * he, 1, 179), vFOV_deg: J(c.startVFOV * he, 1, 179) }), sr(c.item) || (c.item.aspect_id = Xi(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { hFOV_deg: J(c.startHFOV * he, 1, 179) }), sr(c.item) || (c.item.aspect_id = Xi(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const he = Math.max(1, Math.hypot(s.x - c.center.x, s.y - c.center.y)) / c.startDist;
      lr(c.item, { vFOV_deg: J(c.startVFOV * he, 1, 179) }), sr(c.item) || (c.item.aspect_id = Xi(c.item)), yt(c.item) && Wt(), ue({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let he = (Math.atan2(s.y - c.center.y, s.x - c.center.x) - c.startAng) * qi, we = c.startRot - he;
      i.shiftKey && (we = Math.round(we / 45) * 45), lr(c.item, { [yt(c.item) ? "rot_deg" : "roll_deg"]: we }), yt(c.item) && Wt(), ue({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var s, c, f, p, m, g, _, k;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, gt(h.pointerPos);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        So();
        const A = Kc(h.interaction), M = !!h.interaction._hasCommittedSegments;
        if (A || M) {
          fr();
          const E = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (E) {
            const j = mn().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === E);
            j && (j.frame = null);
          }
          const O = zn();
          O && (A ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(O), up()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, O) : h.paintEngine.cancelActiveStroke(O)), at(), Fn(), He(), qe(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const E = zn();
          E && h.paintEngine.cancelActiveStroke(E);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const A = Lp(h.interaction.start, h.interaction.current), E = [
          ...t === "cutout" ? Tc().filter((O) => !$n(O)) : [...vr()],
          ...ib(),
          ...ob()
        ].filter((O) => Ov(A, Xt(O)));
        fb(E, ((g = E[E.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && E.length && (h.cutoutAspectOpen = !1), He(), qe(), ue();
      } else if (((_ = h.interaction) == null ? void 0 : _.kind) === "pan_frame" || ((k = h.interaction) == null ? void 0 : k.kind) === "roll_frame")
        h.interaction.changed && (at(), lt(), He());
      else if (h.interaction && h.interaction.kind !== "view") {
        let A = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (A = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (A = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (A = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (A = !0), A && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? fr({ rebuildPaintEngine: !0 }) : Po()), at(), Fn(), e.setDirtyCanvas(!0, !0), Ao(), qe(), ue();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Li(), So(), i && i.kind === "view" && dn.endDrag(performance.now()), Kr(), qe(), gt(h.pointerPos), ue();
    }
  }, C.onpointercancel = () => {
    var i, s, c;
    if (!Sa()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "view" && dn.endDrag(performance.now()), ((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
        So();
        const f = zn();
        f && h.paintEngine.cancelActiveStroke(f);
      }
      h.interaction = null, So(), Kr(), gt(h.pointerPos), ue({ localOnly: !0 });
    }
  }, C.onlostpointercapture = () => {
    Sa();
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.oncontextmenu = (i) => {
    pa() && UM(kc(), 2) && i.preventDefault();
  }, C.onmousemove = (i) => {
    const s = wi(i), c = Ps(s, !0);
    h.interaction || (gt(s), c && h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 }));
  }, C.onmouseleave = () => {
    Ps(h.pointerPos, !1), gt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 });
  }, C.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = wi(i), c = xl(i);
      c && _v(s, c) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (pa()) {
        const s = xl(i);
        s && Db(wi(i), -s);
      } else dn.applyWheelEvent(i) && ue({ localOnly: !0 });
      i.preventDefault();
    }
  }, C.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), ar(!0));
  }, C.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ee.depth = 0, ar(!1);
    const c = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Er(p));
    c && Sp(c);
  };
  const $p = (i) => {
    t !== "stickers" && t !== "cutout" || r || yo(i) && (Ee.depth += 1, ar(!0), i.preventDefault());
  }, zp = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ee.active && yo(i) && ar(!0), Ee.active && i.preventDefault());
  }, jp = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ee.active) return;
    Ee.depth = Math.max(0, Ee.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ee.depth === 0 || s) && ar(!1);
  }, Hp = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ee.depth = 0, ar(!1), yo(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", $p, !0), window.addEventListener("dragover", zp, !0), window.addEventListener("dragleave", jp, !0), window.addEventListener("drop", Hp, !0);
  function Uc() {
    const { canUndo: i, canRedo: s } = _p();
    Gi(I.toolButtons, "value", "undo", { disabled: !i }), Gi(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const Gp = (i, s, c = !1) => {
    var A;
    qn();
    const f = t === "cutout" && h.mode === "frame" ? Ge() : null, p = f || Nt(), m = f ? "shot" : ps(), g = S && h.inspectCamera;
    if (!g && (!p || m === "stroke" || Mn(p))) return;
    const _ = (((A = I.sidePanel) == null ? void 0 : A.params) || []).find((M) => M.key === i);
    if (!_ || _.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), k = J(k, Number(_.min), Number(_.max)), i === "yaw_deg" && (k = Ht(k)), g) {
      zS(v.camera, h.frame, i, k), He(), c && at();
      return;
    }
    i === "opacity" ? jS(p, h.frame, k / 100) : lr(p, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = Xi(p)), He(), ue(), c && at();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var f, p, m, g, _, k, A;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const c = String(s.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const M = Hn(s.getAttribute("data-coverage"));
      if (M === Hn(v.coverage)) return;
      v.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? Pe.backgroundDirty = !0 : (Fn(), bv({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), qe(), ue();
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
      if (M && (t === "stickers" ? E = vr().find((O) => String((O == null ? void 0 : O.id) || "") === M) || null : E = ((m = Ad().find((O) => {
        var j;
        return String(((j = O == null ? void 0 : O.item) == null ? void 0 : j.id) || "") === M;
      })) == null ? void 0 : m.item) || null), _r(E || null), E && !Qt(E)) {
        const O = Yt(E);
        Hr(
          Ht(Number(O.yaw_deg || 0)),
          J(Number(O.pitch_deg || 0), -89.9, 89.9),
          h.viewFov
        );
      }
      He(), qe(), ue();
      return;
    }
    if (c === "copy-state-inline") {
      const M = Nt(), E = ps();
      if (!M || E === "stroke" || ur().length > 1) return;
      const O = JSON.stringify(t === "cutout" && E !== "image" ? Ld(M) : Mb(Yt(M)));
      try {
        await navigator.clipboard.writeText(O), (g = I.sidePanel) != null && g.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var j;
          (j = I.sidePanel) != null && j.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? h.showPanorama = !h.showPanorama : M === "objects" ? h.showObjects = !h.showObjects : M === "mask" && (h.showMask = !h.showMask), He(), ue();
      return;
    }
    if (c === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", jc(), He(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), ue();
      return;
    }
    if (c === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", jc(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), ue();
      return;
    }
    if (c === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, jc(), He(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0), ue();
      return;
    }
    if (c === "close-preview") {
      Oo();
      return;
    }
    if (c === "cancel-close") {
      Oo();
      return;
    }
    c === "save-close" && (gv(), Oo());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Gp(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Gp(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Yc = () => gs();
  Yc(), D.addEventListener("click", (i) => {
    var k, A, M, E;
    if ((A = (k = i.target) == null ? void 0 : k.matches) != null && A.call(k, "[data-confirm-overlay]")) {
      const O = (M = I.confirmDialog) == null ? void 0 : M.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, O == null || O(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Fb(s.getAttribute("data-space-mode"));
      return;
    }
    const c = i.target.closest("[data-view]");
    if (c) {
      if (c.disabled) return;
      const O = h.mode;
      h.mode = String(c.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && (O !== "frame" && (Pe.frameSafeRect = null), He(), qe()), Ms(), Kr(), ue();
      return;
    }
    const f = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (f && !r) {
      if (f.matches("[data-tool-mode]")) {
        const O = String(f.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = O, (O === "paint" || O === "mask") && da({ preservePanelValues: !0 }), On(), He(), qe(), ue();
        return;
      }
      if (f.matches("[data-tool-ui-action]")) {
        const O = String(f.getAttribute("data-tool-ui-action") || "");
        if ((O === "undo" || O === "redo") && f.disabled) return;
        O === "undo" ? Rc(-1) : O === "redo" ? Rc(1) : O === "clear" ? uv() : O === "add" || O === "add-image" ? ev() : O === "add-or-look" && sv();
        return;
      }
      if (f.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const O = String(f.getAttribute("data-paint-tool") || "pen");
        h.paintTool = O, da({ preservePanelValues: !0 }), Tn[O] && (h.activeBrushPresetId = O), On(), He(), qe(), ue();
        return;
      }
      if (f.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(f.getAttribute("data-mask-tool") || "pen"), da({ preservePanelValues: !0 }), On(), He(), qe(), ue();
        return;
      }
      if (f.matches("[data-paint-layer-clear-current]")) {
        const O = String(f.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        fv(O);
        return;
      }
      if (f.matches("[data-paint-color-swatch]")) {
        const O = fl.find((j) => j.id === f.getAttribute("data-paint-color-swatch"));
        if (!O) return;
        h.paintColor = jn(O.color), Ve(!0), On();
        return;
      }
      if (f.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), q && !q.hidden ? Ve(!0) : Ce(), On();
        return;
      }
    }
    const p = String(((E = f == null ? void 0 : f.getAttribute) == null ? void 0 : E.call(f, "data-action")) || "");
    if (p === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      ze.resumeAfterScrub = !1, $c();
      return;
    }
    if (p === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Ed(), typeof (f == null ? void 0 : f.blur) == "function" && f.blur();
      return;
    }
    if (p === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      const O = !I.videoTransport.loop;
      I.videoTransport.loop = O, Y.loop = O, hi({
        hasAudio: I.videoTransport.hasAudio,
        loop: O,
        muted: Y.muted,
        volume: Number(Y.volume ?? I.videoTransport.volume ?? 1)
      }), typeof (f == null ? void 0 : f.blur) == "function" && f.blur();
      return;
    }
    if (!r) {
      if (p === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (p === "frame-aspect-set") {
        const O = h.mode === "frame" ? Ge() : null;
        if (!O || O.locked === !0) return;
        Np(O, String(f.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, Ao(), at(), lt(), Kr(), ue();
        return;
      }
      if (p === "frame-aspect-custom") {
        const O = h.mode === "frame" ? Ge() : null, j = f.getAttribute("data-custom-width"), te = f.getAttribute("data-custom-height");
        if (!O || !pv(O, j, te)) return;
        I.frameRail.aspectOpen = !1, Ao(), at(), lt(), Kr(), ue();
        return;
      }
      if (p === "frame-rotate-90") {
        const O = h.mode === "frame" ? Ge() : null;
        if (!O || O.locked === !0) return;
        Pp(O), I.frameRail.aspectOpen = !1, Ao(), at(), lt(), Kr(), ue();
        return;
      }
      if (p === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, qe(), ue();
        return;
      }
      if (p === "aspect-set") {
        const O = Nt();
        if (!O) return;
        const j = String(f.getAttribute("data-aspect") || "1:1");
        Np(O, j), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ao(), at(), lt(), qe(), ue();
        return;
      }
      if (p === "rotate-90") {
        const O = Nt();
        if (!O) return;
        Pp(O), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ao(), at(), lt(), qe(), ue();
        return;
      }
      if (p === "bring-front") {
        hv();
        return;
      }
      if (p === "send-back") {
        mv();
        return;
      }
      if (p === "duplicate") {
        dv();
        return;
      }
      if (p === "replace-image") {
        iv();
        return;
      }
      if (p === "toggle-lock") {
        ub();
        return;
      }
      if (p === "back-initial") {
        yb();
        return;
      }
      if (p === "toggle-visible") {
        gb();
        return;
      }
      if (p === "delete") {
        Mp();
        return;
      }
    }
    if (p === "reset-view") {
      if (h.mode === "frame") return;
      Hr(0, 0, 100, 180, 680), h.viewPosition = [0, 0, 0], h.viewMoved = !1;
      return;
    }
    if (p === "frame-view") {
      if (!pa()) return;
      Tb();
      return;
    }
    if (p === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, rI(e == null ? void 0 : e.id, h.showGrid), Yc(), ue();
      return;
    }
    if (p === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), zv();
      return;
    }
    if (p === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const O = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = O, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = O ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), Yp(), ue();
      return;
    }
    const m = i.target.closest("[data-paint-history-index]");
    if (!m) return;
    const g = Number(m.getAttribute("data-paint-history-index")), _ = h.customPaintHistory[g];
    _ && (h.customPaintColor = jn(_), h.paintColor = jn(_), On());
  }), D.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      Mt.playing && (ze.resumeAfterScrub = !0), Mt.seek(Ui(Number(s.value || 0), ms()));
      return;
    }
    const c = i.target.closest("[data-video-volume]");
    if (c) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = J(Number(c.value || 0), 0, 1);
      Y.volume = m, Y.muted = m <= 1e-4, hi({
        hasAudio: I.videoTransport.hasAudio,
        muted: Y.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = xi(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, On(), Mv();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: J(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = jn(m), h.paintColor = jn(m), On();
    }
  }), D.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      ze.resumeAfterScrub && Mt.play(), ze.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && As();
  }), D.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && As();
  }), D.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && As();
  }), D.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && As();
  }), D.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !D.contains(s) || je.target !== s && (je.target = s, je.timer && clearTimeout(je.timer), je.timer = window.setTimeout(() => {
      je.target === s && Fv(s);
    }, 220));
  }), D.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || je.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || Li();
  }), D.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Li();
  });
  const Vv = (i, s) => {
    var _;
    if (!ve) return;
    const c = ve.getBoundingClientRect(), f = J((i - c.left) / Math.max(1, c.width), 0, 1), p = 1 - J((s - c.top) / Math.max(1, c.height), 0, 1), m = Vu(h.customPaintColor), g = { ...Ru(m.h, f, p), a: Number(((_ = h.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    h.customPaintColor = jn(g), h.paintColor = jn(g), On();
  }, $v = (i) => {
    var m;
    if (!ye) return;
    const s = ye.getBoundingClientRect(), c = J((i - s.left) / Math.max(1, s.width), 0, 1), f = Vu(h.customPaintColor), p = { ...Ru(c, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = jn(p), h.paintColor = jn(p), On();
  }, Kp = (i, s) => {
    const c = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === c && s(m);
    }, p = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  ve && (ve.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Kp(i, (s) => Vv(s.clientX, s.clientY));
  }), ye && (ye.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Kp(i, (s) => $v(s.clientX));
  }), D.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const c = s.getAttribute("data-action") === "confirm-accept", f = (p = I.confirmDialog) == null ? void 0 : p.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(c);
  });
  const Bp = () => {
    const i = !!h.fullscreen;
    Gi(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ne.fullscreen_close : Ne.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Cs = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, D.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Yc(), Bp(), di(), ue());
  }, Wp = () => document.fullscreenElement === _e, zv = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Cs(!h.fullscreen);
        return;
      }
      Wp() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      Cs(!h.fullscreen);
    }
  }, Up = () => {
    document.fullscreenEnabled && Cs(Wp());
  };
  document.addEventListener("fullscreenchange", Up), Bp();
  const Yp = () => {
    const i = !!h.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? Ne.fullscreen_close : Ne.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Yp();
  const Xc = e.onConnectionsChange;
  let qc = null, Xp = () => {
  };
  !r && t === "stickers" && (Xp = Oy(e, (i = "sync") => {
    i === "executed" && (GC(We, Gs), mi(), S && Z1()), Rd(i);
  }, { editor: !0 }), qc = function(...s) {
    typeof Xc == "function" && Xc.apply(this, s), mi(), ii(this, "connections");
  }, e.onConnectionsChange = qc), r || Wm.set(String(e.id ?? "0"), () => Jd());
  let Eo = null;
  const Oo = async () => Eo || (Eo = (async () => {
    var i, s, c, f, p, m, g, _;
    return Wm.delete(String(e.id ?? "0")), wv(), r || Fn(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Up), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Cp && (e.__panoFlushStateBeforeQueue = null), (c = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || c.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (_ = (g = (m = mr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || _.call(g, !0, !0), Li(), U1(), Y instanceof HTMLVideoElement && Y.pause(), Lt.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), Et.dispose(), ar(!1), window.removeEventListener("keydown", qp, !0), window.removeEventListener("keydown", Jp, !0), window.removeEventListener("keydown", Qp, !0), window.removeEventListener("keyup", eh, !0), window.removeEventListener("keydown", Is, !0), window.removeEventListener("keyup", Is, !0), window.removeEventListener("blur", th), window.removeEventListener("keydown", nh, !0), window.removeEventListener("dragenter", $p, !0), window.removeEventListener("dragover", zp, !0), window.removeEventListener("dragleave", jp, !0), window.removeEventListener("drop", Hp, !0), !r && t === "stickers" && (e.onConnectionsChange === qc && (e.onConnectionsChange = Xc), Xp()), G.unmount(), R.remove(), yv(), Eo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Eo = null, !1)), Eo), qp = (i) => {
    var s, c, f, p, m;
    if (i.key === "Escape") {
      if (Sa()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (c = i.stopImmediatePropagation) == null || c.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Cs(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Oo();
    }
  }, Jp = (i) => {
    const s = String(i.key || ""), c = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || c === "Delete" || f === 46) && !(s === "Backspace" || c === "Backspace" || f === 8)) return;
    const g = i.target, _ = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Le.selection) {
      J1(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (Mp(), i.preventDefault(), i.stopPropagation());
  }, Zp = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const c = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return c === "INPUT" ? !AC.has(String(s.type || "text").toLowerCase()) : c !== "TEXTAREA" && c !== "SELECT" && !(s != null && s.isContentEditable);
  }, Qp = (i) => {
    Zp(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || $c());
  }, eh = (i) => {
    Zp(i) && (i.preventDefault(), i.stopPropagation());
  }, Is = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), c = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === c || (h.marqueeModifier = s, h.altModifier = c, Wr(), gt(h.pointerPos));
  }, th = () => {
    h.marqueeModifier = !1, h.altModifier = !1, Wr(), gt(h.pointerPos);
  }, nh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (s !== "z" && c !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = _p();
    i.shiftKey && !g || !i.shiftKey && !m || (Rc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", qp, !0), window.addEventListener("keydown", Jp, !0), window.addEventListener("keydown", Qp, !0), window.addEventListener("keyup", eh, !0), window.addEventListener("keydown", Is, !0), window.addEventListener("keyup", Is, !0), window.addEventListener("blur", th), window.addEventListener("keydown", nh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && Oo();
  });
  function wr(i, s, { rollbackState: c = !1 } = {}) {
    let f = "";
    try {
      c && (f = JSON.stringify(v)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(v).forEach((g) => delete v[g]), Object.assign(v, m), r || Fn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      I.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  wr("cutout-focus", Ib), !r && t === "stickers" && wr("external-sticker-sync", () => Rd("open"), { rollbackState: !0 }), ov().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), wr("history", at), wr("undo-redo", Uc), wr("paint-ui", On), wr("side-panel", He), wr("look-at-frame", xc), wr("video-source", mi), wr("canvas-size", gp), wr("cursor", () => gt(h.pointerPos)), ue(), Pe.rafId = requestAnimationFrame(bp);
}
mr.registerExtension(rN({
  app: mr,
  openEditor: cI,
  attachStickers: y2,
  attachCutout: b2,
  attachPreview: g2,
  restoreOutput: r2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: FC
}));
