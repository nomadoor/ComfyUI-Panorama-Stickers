import * as Ja from "../../scripts/app.js";
import { app as Zn } from "../../scripts/app.js";
import { api as fn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function cu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Et = {}, Gi = [], hr = () => {
}, rp = () => !1, Js = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zs = (e) => e.startsWith("onUpdate:"), gn = Object.assign, uu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Dg = Object.prototype.hasOwnProperty, St = (e, t) => Dg.call(e, t), ot = Array.isArray, Wi = (e) => fa(e) === "[object Map]", ip = (e) => fa(e) === "[object Set]", md = (e) => fa(e) === "[object Date]", st = (e) => typeof e == "function", Yt = (e) => typeof e == "string", br = (e) => typeof e == "symbol", At = (e) => e !== null && typeof e == "object", op = (e) => (At(e) || st(e)) && st(e.then) && st(e.catch), ap = Object.prototype.toString, fa = (e) => ap.call(e), Lg = (e) => fa(e).slice(8, -1), sp = (e) => fa(e) === "[object Object]", du = (e) => Yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ cu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Rg = /-\w/g, _n = Qs(
  (e) => e.replace(Rg, (t) => t.slice(1).toUpperCase())
), Vg = /\B([A-Z])/g, xi = Qs(
  (e) => e.replace(Vg, "-$1").toLowerCase()
), el = Qs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nl = Qs(
  (e) => e ? `on${el(e)}` : ""
), dr = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, lp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, fu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let gd;
const tl = () => gd || (gd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ct(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Yt(n) ? Hg(n) : Ct(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Yt(e) || At(e))
    return e;
}
const $g = /;(?![^(]*\))/g, zg = /:([^]+)/, jg = /\/\*[^]*?\*\//g;
function Hg(e) {
  const t = {};
  return e.replace(jg, "").split($g).forEach((r) => {
    if (r) {
      const n = r.split(zg);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Yt(e))
    t = e;
  else if (ot(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (At(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Gg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wg = /* @__PURE__ */ cu(Gg);
function cp(e) {
  return !!e || e === "";
}
function Kg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = pu(e[n], t[n]);
  return r;
}
function pu(e, t) {
  if (e === t) return !0;
  let r = md(e), n = md(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = br(e), n = br(t), r || n)
    return e === t;
  if (r = ot(e), n = ot(t), r || n)
    return r && n ? Kg(e, t) : !1;
  if (r = At(e), n = At(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !pu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const up = (e) => !!(e && e.__v_isRef === !0), it = (e) => Yt(e) ? e : e == null ? "" : ot(e) || At(e) && (e.toString === ap || !st(e.toString)) ? up(e) ? it(e.value) : JSON.stringify(e, dp, 2) : String(e), dp = (e, t) => up(t) ? dp(e, t.value) : Wi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Cl(n, o) + " =>"] = i, r),
    {}
  )
} : ip(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Cl(r))
} : br(t) ? Cl(t) : At(t) && !ot(t) && !sp(t) ? String(t) : t, Cl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    br(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mn;
class Ug {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Mn, !t && Mn && (this.index = (Mn.scopes || (Mn.scopes = [])).push(
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
      const r = Mn;
      try {
        return Mn = this, t();
      } finally {
        Mn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mn, Mn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mn = this.prevScope, this.prevScope = void 0);
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
function Bg() {
  return Mn;
}
let Ot;
const Al = /* @__PURE__ */ new WeakSet();
class fp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mn && Mn.active && Mn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Al.has(this) && (Al.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yd(this), mp(this);
    const t = Ot, r = Qn;
    Ot = this, Qn = !0;
    try {
      return this.fn();
    } finally {
      gp(this), Ot = t, Qn = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gu(t);
      this.deps = this.depsTail = void 0, yd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Al.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    pc(this) && this.run();
  }
  get dirty() {
    return pc(this);
  }
}
let pp = 0, zo, jo;
function hp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jo, jo = e;
    return;
  }
  e.next = zo, zo = e;
}
function hu() {
  pp++;
}
function mu() {
  if (--pp > 0)
    return;
  if (jo) {
    let t = jo;
    for (jo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; zo; ) {
    let t = zo;
    for (zo = void 0; t; ) {
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
function mp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), gu(n), Yg(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function pc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qo) || (e.globalVersion = qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !pc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Ot, n = Qn;
  Ot = e, Qn = !0;
  try {
    mp(e);
    const i = e.fn(e._value);
    (t.version === 0 || dr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ot = r, Qn = n, gp(e), e.flags &= -3;
  }
}
function gu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      gu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Yg(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Qn = !0;
const bp = [];
function Rr() {
  bp.push(Qn), Qn = !1;
}
function Vr() {
  const e = bp.pop();
  Qn = e === void 0 ? !0 : e;
}
function yd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Ot;
    Ot = void 0;
    try {
      t();
    } finally {
      Ot = r;
    }
  }
}
let qo = 0;
class qg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ot || !Qn || Ot === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ot)
      r = this.activeLink = new qg(Ot, this), Ot.deps ? (r.prevDep = Ot.depsTail, Ot.depsTail.nextDep = r, Ot.depsTail = r) : Ot.deps = Ot.depsTail = r, vp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ot.depsTail, r.nextDep = void 0, Ot.depsTail.nextDep = r, Ot.depsTail = r, Ot.deps === r && (Ot.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, qo++, this.notify(t);
  }
  notify(t) {
    hu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      mu();
    }
  }
}
function vp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        vp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const hc = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ Symbol(
  ""
), mc = /* @__PURE__ */ Symbol(
  ""
), Xo = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, r) {
  if (Qn && Ot) {
    let n = hc.get(e);
    n || hc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new yu()), i.map = n, i.key = r), i.track();
  }
}
function Ir(e, t, r, n, i, o) {
  const a = hc.get(e);
  if (!a) {
    qo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (hu(), t === "clear")
    a.forEach(s);
  else {
    const l = ot(e), c = l && du(r);
    if (l && r === "length") {
      const d = Number(n);
      a.forEach((u, f) => {
        (f === "length" || f === Xo || !br(f) && f >= d) && s(u);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), c && s(a.get(Xo)), t) {
        case "add":
          l ? c && s(a.get("length")) : (s(a.get(pi)), Wi(e) && s(a.get(mc)));
          break;
        case "delete":
          l || (s(a.get(pi)), Wi(e) && s(a.get(mc)));
          break;
        case "set":
          Wi(e) && s(a.get(pi));
          break;
      }
  }
  mu();
}
function Ei(e) {
  const t = /* @__PURE__ */ _t(e);
  return t === e ? t : (un(t, "iterate", Xo), /* @__PURE__ */ Gn(e) ? t : t.map(rr));
}
function nl(e) {
  return un(e = /* @__PURE__ */ _t(e), "iterate", Xo), e;
}
function lr(e, t) {
  return /* @__PURE__ */ $r(e) ? Zi(/* @__PURE__ */ hi(e) ? rr(t) : t) : rr(t);
}
const Xg = {
  __proto__: null,
  [Symbol.iterator]() {
    return Il(this, Symbol.iterator, (e) => lr(this, e));
  },
  concat(...e) {
    return Ei(this).concat(
      ...e.map((t) => ot(t) ? Ei(t) : t)
    );
  },
  entries() {
    return Il(this, "entries", (e) => (e[1] = lr(this, e[1]), e));
  },
  every(e, t) {
    return kr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return kr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => lr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return kr(
      this,
      "find",
      e,
      t,
      (r) => lr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return kr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return kr(
      this,
      "findLast",
      e,
      t,
      (r) => lr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return kr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return kr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return El(this, "includes", e);
  },
  indexOf(...e) {
    return El(this, "indexOf", e);
  },
  join(e) {
    return Ei(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return El(this, "lastIndexOf", e);
  },
  map(e, t) {
    return kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wo(this, "pop");
  },
  push(...e) {
    return wo(this, "push", e);
  },
  reduce(e, ...t) {
    return bd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bd(this, "reduceRight", e, t);
  },
  shift() {
    return wo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return kr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wo(this, "splice", e);
  },
  toReversed() {
    return Ei(this).toReversed();
  },
  toSorted(e) {
    return Ei(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ei(this).toSpliced(...e);
  },
  unshift(...e) {
    return wo(this, "unshift", e);
  },
  values() {
    return Il(this, "values", (e) => lr(this, e));
  }
};
function Il(e, t, r) {
  const n = nl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Gn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Jg = Array.prototype;
function kr(e, t, r, n, i, o) {
  const a = nl(e), s = a !== e && !/* @__PURE__ */ Gn(e), l = a[t];
  if (l !== Jg[t]) {
    const u = l.apply(e, o);
    return s ? rr(u) : u;
  }
  let c = r;
  a !== e && (s ? c = function(u, f) {
    return r.call(this, lr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(a, c, n);
  return s && i ? i(d) : d;
}
function bd(e, t, r, n) {
  const i = nl(e), o = i !== e && !/* @__PURE__ */ Gn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(c, d, u) {
    return s && (s = !1, c = lr(e, c)), r.call(this, c, lr(e, d), u, e);
  }) : r.length > 3 && (a = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](a, ...n);
  return s ? lr(e, l) : l;
}
function El(e, t, r) {
  const n = /* @__PURE__ */ _t(e);
  un(n, "iterate", Xo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ _u(r[0]) ? (r[0] = /* @__PURE__ */ _t(r[0]), n[t](...r)) : i;
}
function wo(e, t, r = []) {
  Rr(), hu();
  const n = (/* @__PURE__ */ _t(e))[t].apply(e, r);
  return mu(), Vr(), n;
}
const Zg = /* @__PURE__ */ cu("__proto__,__v_isRef,__isVue"), _p = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(br)
);
function Qg(e) {
  br(e) || (e = String(e));
  const t = /* @__PURE__ */ _t(this);
  return un(t, "has", e), t.hasOwnProperty(e);
}
class Sp {
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
      return n === (i ? o ? c0 : Mp : o ? kp : xp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ot(t);
    if (!i) {
      let l;
      if (a && (l = Xg[r]))
        return l;
      if (r === "hasOwnProperty")
        return Qg;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : n
    );
    if ((br(r) ? _p.has(r) : Zg(r)) || (i || un(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ hn(s)) {
      const l = a && du(r) ? s : s.value;
      return i && At(l) ? /* @__PURE__ */ yc(l) : l;
    }
    return At(s) ? i ? /* @__PURE__ */ yc(s) : /* @__PURE__ */ io(s) : s;
  }
}
class wp extends Sp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = ot(t) && du(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ $r(o);
      if (!/* @__PURE__ */ Gn(n) && !/* @__PURE__ */ $r(n) && (o = /* @__PURE__ */ _t(o), n = /* @__PURE__ */ _t(n)), !a && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(n))
        return c || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : St(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ hn(t) ? t : i
    );
    return t === /* @__PURE__ */ _t(i) && (s ? dr(n, o) && Ir(t, "set", r, n) : Ir(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = St(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Ir(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!br(r) || !_p.has(r)) && un(t, "has", r), n;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      ot(t) ? "length" : pi
    ), Reflect.ownKeys(t);
  }
}
class e0 extends Sp {
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
const t0 = /* @__PURE__ */ new wp(), n0 = /* @__PURE__ */ new e0(), r0 = /* @__PURE__ */ new wp(!0);
const gc = (e) => e, Fa = (e) => Reflect.getPrototypeOf(e);
function i0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ _t(i), a = Wi(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = i[e](...n), d = r ? gc : t ? Zi : rr;
    return !t && un(
      o,
      "iterate",
      l ? mc : pi
    ), gn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: s ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function Ta(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function o0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      e || (dr(i, s) && un(a, "get", i), un(a, "get", s));
      const { has: l } = Fa(a), c = t ? gc : e ? Zi : rr;
      if (l.call(a, i))
        return c(o.get(i));
      if (l.call(a, s))
        return c(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && un(/* @__PURE__ */ _t(i), "iterate", pi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      return e || (dr(i, s) && un(a, "has", i), un(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ _t(s), c = t ? gc : e ? Zi : rr;
      return !e && un(l, "iterate", pi), s.forEach((d, u) => i.call(o, c(d), c(u), a));
    }
  };
  return gn(
    r,
    e ? {
      add: Ta("add"),
      set: Ta("set"),
      delete: Ta("delete"),
      clear: Ta("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ _t(this), a = Fa(o), s = /* @__PURE__ */ _t(i), l = !t && !/* @__PURE__ */ Gn(i) && !/* @__PURE__ */ $r(i) ? s : i;
        return a.has.call(o, l) || dr(i, l) && a.has.call(o, i) || dr(s, l) && a.has.call(o, s) || (o.add(l), Ir(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Gn(o) && !/* @__PURE__ */ $r(o) && (o = /* @__PURE__ */ _t(o));
        const a = /* @__PURE__ */ _t(this), { has: s, get: l } = Fa(a);
        let c = s.call(a, i);
        c || (i = /* @__PURE__ */ _t(i), c = s.call(a, i));
        const d = l.call(a, i);
        return a.set(i, o), c ? dr(o, d) && Ir(a, "set", i, o) : Ir(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ _t(this), { has: a, get: s } = Fa(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ _t(i), l = a.call(o, i)), s && s.call(o, i);
        const c = o.delete(i);
        return l && Ir(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ _t(this), o = i.size !== 0, a = i.clear();
        return o && Ir(
          i,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = i0(i, e, t);
  }), r;
}
function bu(e, t) {
  const r = o0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    St(r, i) && i in n ? r : n,
    i,
    o
  );
}
const a0 = {
  get: /* @__PURE__ */ bu(!1, !1)
}, s0 = {
  get: /* @__PURE__ */ bu(!1, !0)
}, l0 = {
  get: /* @__PURE__ */ bu(!0, !1)
};
const xp = /* @__PURE__ */ new WeakMap(), kp = /* @__PURE__ */ new WeakMap(), Mp = /* @__PURE__ */ new WeakMap(), c0 = /* @__PURE__ */ new WeakMap();
function u0(e) {
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
function d0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : u0(Lg(e));
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  return /* @__PURE__ */ $r(e) ? e : vu(
    e,
    !1,
    t0,
    a0,
    xp
  );
}
// @__NO_SIDE_EFFECTS__
function f0(e) {
  return vu(
    e,
    !1,
    r0,
    s0,
    kp
  );
}
// @__NO_SIDE_EFFECTS__
function yc(e) {
  return vu(
    e,
    !0,
    n0,
    l0,
    Mp
  );
}
function vu(e, t, r, n, i) {
  if (!At(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = d0(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return /* @__PURE__ */ $r(e) ? /* @__PURE__ */ hi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function _u(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _t(t) : e;
}
function p0(e) {
  return !St(e, "__v_skip") && Object.isExtensible(e) && lp(e, "__v_skip", !0), e;
}
const rr = (e) => At(e) ? /* @__PURE__ */ io(e) : e, Zi = (e) => At(e) ? /* @__PURE__ */ yc(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return Pp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return Pp(e, !0);
}
function Pp(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new h0(e, t);
}
class h0 {
  constructor(t, r) {
    this.dep = new yu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ _t(t), this._value = r ? t : rr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gn(t) || /* @__PURE__ */ $r(t);
    t = n ? t : /* @__PURE__ */ _t(t), dr(t, r) && (this._rawValue = t, this._value = n ? t : rr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const m0 = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ hn(i) && !/* @__PURE__ */ hn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Np(e) {
  return /* @__PURE__ */ hi(e) ? e : new Proxy(e, m0);
}
class g0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new yu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ot !== this)
      return hp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function y0(e, t, r = !1) {
  let n, i;
  return st(e) ? n = e : (n = e.get, i = e.set), new g0(n, i, r);
}
const Da = {}, vs = /* @__PURE__ */ new WeakMap();
let li;
function b0(e, t = !1, r = li) {
  if (r) {
    let n = vs.get(r);
    n || vs.set(r, n = []), n.push(e);
  }
}
function v0(e, t, r = Et) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, c = (G) => i ? G : /* @__PURE__ */ Gn(G) || i === !1 || i === 0 ? Er(G, 1) : Er(G);
  let d, u, f, m, _ = !1, g = !1;
  if (/* @__PURE__ */ hn(e) ? (u = () => e.value, _ = /* @__PURE__ */ Gn(e)) : /* @__PURE__ */ hi(e) ? (u = () => c(e), _ = !0) : ot(e) ? (g = !0, _ = e.some((G) => /* @__PURE__ */ hi(G) || /* @__PURE__ */ Gn(G)), u = () => e.map((G) => {
    if (/* @__PURE__ */ hn(G))
      return G.value;
    if (/* @__PURE__ */ hi(G))
      return c(G);
    if (st(G))
      return l ? l(G, 2) : G();
  })) : st(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Rr();
      try {
        f();
      } finally {
        Vr();
      }
    }
    const G = li;
    li = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      li = G;
    }
  } : u = hr, t && i) {
    const G = u, x = i === !0 ? 1 / 0 : i;
    u = () => Er(G(), x);
  }
  const p = Bg(), O = () => {
    d.stop(), p && p.active && uu(p.effects, d);
  };
  if (o && t) {
    const G = t;
    t = (...x) => {
      G(...x), O();
    };
  }
  let K = g ? new Array(e.length).fill(Da) : Da;
  const H = (G) => {
    if (!(!(d.flags & 1) || !d.dirty && !G))
      if (t) {
        const x = d.run();
        if (i || _ || (g ? x.some((X, V) => dr(X, K[V])) : dr(x, K))) {
          f && f();
          const X = li;
          li = d;
          try {
            const V = [
              x,
              // pass undefined as the old value when it's changed for the first time
              K === Da ? void 0 : g && K[0] === Da ? [] : K,
              m
            ];
            K = x, l ? l(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            li = X;
          }
        }
      } else
        d.run();
  };
  return s && s(H), d = new fp(u), d.scheduler = a ? () => a(H, !1) : H, m = (G) => b0(G, !1, d), f = d.onStop = () => {
    const G = vs.get(d);
    if (G) {
      if (l)
        l(G, 4);
      else
        for (const x of G) x();
      vs.delete(d);
    }
  }, t ? n ? H(!0) : K = d.run() : a ? a(H.bind(null, !0), !0) : d.run(), O.pause = d.pause.bind(d), O.resume = d.resume.bind(d), O.stop = O, O;
}
function Er(e, t = 1 / 0, r) {
  if (t <= 0 || !At(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ hn(e))
    Er(e.value, t, r);
  else if (ot(e))
    for (let n = 0; n < e.length; n++)
      Er(e[n], t, r);
  else if (ip(e) || Wi(e))
    e.forEach((n) => {
      Er(n, t, r);
    });
  else if (sp(e)) {
    for (const n in e)
      Er(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Er(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pa(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    rl(i, t, r);
  }
}
function vr(e, t, r, n) {
  if (st(e)) {
    const i = pa(e, t, r, n);
    return i && op(i) && i.catch((o) => {
      rl(o, t, r);
    }), i;
  }
  if (ot(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(vr(e[o], t, r, n));
    return i;
  }
}
function rl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Et;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Rr(), pa(o, null, 10, [
        e,
        l,
        c
      ]), Vr();
      return;
    }
  }
  _0(e, r, i, n, a);
}
function _0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const vn = [];
let sr = -1;
const Ki = [];
let Ur = null, Ti = 0;
const Cp = /* @__PURE__ */ Promise.resolve();
let _s = null;
function il(e) {
  const t = _s || Cp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function S0(e) {
  let t = sr + 1, r = vn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = vn[n], o = Jo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Su(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), r = vn[vn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(r) ? vn.push(e) : vn.splice(S0(t), 0, e), e.flags |= 1, Ap();
  }
}
function Ap() {
  _s || (_s = Cp.then(Ep));
}
function w0(e) {
  ot(e) ? Ki.push(...e) : Ur && e.id === -1 ? Ur.splice(Ti + 1, 0, e) : e.flags & 1 || (Ki.push(e), e.flags |= 1), Ap();
}
function vd(e, t, r = sr + 1) {
  for (; r < vn.length; r++) {
    const n = vn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      vn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ip(e) {
  if (Ki.length) {
    const t = [...new Set(Ki)].sort(
      (r, n) => Jo(r) - Jo(n)
    );
    if (Ki.length = 0, Ur) {
      Ur.push(...t);
      return;
    }
    for (Ur = t, Ti = 0; Ti < Ur.length; Ti++) {
      const r = Ur[Ti];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Ur = null, Ti = 0;
  }
}
const Jo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ep(e) {
  try {
    for (sr = 0; sr < vn.length; sr++) {
      const t = vn[sr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; sr < vn.length; sr++) {
      const t = vn[sr];
      t && (t.flags &= -2);
    }
    sr = -1, vn.length = 0, Ip(), _s = null, (vn.length || Ki.length) && Ep();
  }
}
let Dn = null, Op = null;
function Ss(e) {
  const t = Dn;
  return Dn = e, Op = e && e.type.__scopeId || null, t;
}
function Fp(e, t = Dn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Ed(-1);
    const o = Ss(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Ss(o), n._d && Ed(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tr(e, t) {
  if (Dn === null)
    return e;
  const r = cl(Dn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Et] = t[i];
    o && (st(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Er(a), n.push({
      dir: o,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function ni(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Rr(), vr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Vr());
  }
}
function x0(e, t) {
  if (dn) {
    let r = dn.provides;
    const n = dn.parent && dn.parent.provides;
    n === r && (r = dn.provides = Object.create(n)), r[e] = t;
  }
}
function Qa(e, t, r = !1) {
  const n = Sy();
  if (n || Ui) {
    let i = Ui ? Ui._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && st(t) ? t.call(n && n.proxy) : t;
  }
}
const k0 = /* @__PURE__ */ Symbol.for("v-scx"), M0 = () => Qa(k0);
function mi(e, t, r) {
  return Tp(e, t, r);
}
function Tp(e, t, r = Et) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (Qo) {
    if (o === "sync") {
      const m = M0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = hr, m.resume = hr, m.pause = hr, m;
    }
  }
  const d = dn;
  s.call = (m, _, g) => vr(m, d, _, g);
  let u = !1;
  o === "post" ? s.scheduler = (m) => {
    kn(m, d && d.suspense);
  } : o !== "sync" && (u = !0, s.scheduler = (m, _) => {
    _ ? m() : Su(m);
  }), s.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = v0(e, t, s);
  return Qo && (c ? c.push(f) : l && f()), f;
}
function P0(e, t, r) {
  const n = this.proxy, i = Yt(e) ? e.includes(".") ? Dp(n, e) : () => n[e] : e.bind(n, n);
  let o;
  st(t) ? o = t : (o = t.handler, r = t);
  const a = ma(this), s = Tp(i, o.bind(n), r);
  return a(), s;
}
function Dp(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const N0 = /* @__PURE__ */ Symbol("_vte"), C0 = (e) => e.__isTeleport, A0 = /* @__PURE__ */ Symbol("_leaveCb");
function wu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _d(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const ws = /* @__PURE__ */ new WeakMap();
function Ho(e, t, r, n, i = !1) {
  if (ot(e)) {
    e.forEach(
      (g, p) => Ho(
        g,
        t && (ot(t) ? t[p] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Go(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ho(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? cl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, c = t && t.r, d = s.refs === Et ? s.refs = {} : s.refs, u = s.setupState, f = /* @__PURE__ */ _t(u), m = u === Et ? rp : (g) => _d(d, g) ? !1 : St(f, g), _ = (g, p) => !(p && _d(d, p));
  if (c != null && c !== l) {
    if (Sd(t), Yt(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ hn(c)) {
      const g = t;
      _(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (st(l))
    pa(l, s, 12, [a, d]);
  else {
    const g = Yt(l), p = /* @__PURE__ */ hn(l);
    if (g || p) {
      const O = () => {
        if (e.f) {
          const K = g ? m(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            ot(K) && uu(K, o);
          else if (ot(K))
            K.includes(o) || K.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const H = [o];
            _(l, e.k) && (l.value = H), e.k && (d[e.k] = H);
          }
        } else g ? (d[l] = a, m(l) && (u[l] = a)) : p && (_(l, e.k) && (l.value = a), e.k && (d[e.k] = a));
      };
      if (a) {
        const K = () => {
          O(), ws.delete(e);
        };
        K.id = -1, ws.set(e, K), kn(K, r);
      } else
        Sd(e), O();
    }
  }
}
function Sd(e) {
  const t = ws.get(e);
  t && (t.flags |= 8, ws.delete(e));
}
tl().requestIdleCallback;
tl().cancelIdleCallback;
const Go = (e) => !!e.type.__asyncLoader, Rp = (e) => e.type.__isKeepAlive;
function I0(e, t) {
  Vp(e, "a", t);
}
function E0(e, t) {
  Vp(e, "da", t);
}
function Vp(e, t, r = dn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ol(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Rp(i.parent.vnode) && O0(n, t, r, i), i = i.parent;
  }
}
function O0(e, t, r, n) {
  const i = ol(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  $p(() => {
    uu(n[t], i);
  }, r);
}
function ol(e, t, r = dn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Rr();
      const s = ma(r), l = vr(t, r, e, a);
      return s(), Vr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const zr = (e) => (t, r = dn) => {
  (!Qo || e === "sp") && ol(e, (...n) => t(...n), r);
}, F0 = zr("bm"), al = zr("m"), T0 = zr(
  "bu"
), D0 = zr("u"), ha = zr(
  "bum"
), $p = zr("um"), L0 = zr(
  "sp"
), R0 = zr("rtg"), V0 = zr("rtc");
function $0(e, t = dn) {
  ol("ec", e, t);
}
const z0 = "components", zp = /* @__PURE__ */ Symbol.for("v-ndc");
function j0(e) {
  return Yt(e) ? H0(z0, e, !1) || e : e || zp;
}
function H0(e, t, r = !0, n = !1) {
  const i = Dn || dn;
  if (i) {
    const o = i.type;
    {
      const s = Py(
        o,
        !1
      );
      if (s && (s === t || s === _n(t) || s === el(_n(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      wd(i[e] || o[e], t) || // global registration
      wd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function wd(e, t) {
  return e && (e[t] || e[_n(t)] || e[el(_n(t))]);
}
function Mt(e, t, r, n) {
  let i;
  const o = r, a = ot(e);
  if (a || Yt(e)) {
    const s = a && /* @__PURE__ */ hi(e);
    let l = !1, c = !1;
    s && (l = !/* @__PURE__ */ Gn(e), c = /* @__PURE__ */ $r(e), e = nl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? Zi(rr(e[d])) : rr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (At(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = s[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const bc = (e) => e ? sh(e) ? cl(e) : bc(e.parent) : null, Wo = (
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
    $parent: (e) => bc(e.parent),
    $root: (e) => bc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Su(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = il.bind(e.proxy)),
    $watch: (e) => P0.bind(e)
  })
), Ol = (e, t) => e !== Et && !e.__isScriptSetup && St(e, t), G0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const f = a[t];
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
        if (Ol(n, t))
          return a[t] = 1, n[t];
        if (i !== Et && St(i, t))
          return a[t] = 2, i[t];
        if (St(o, t))
          return a[t] = 3, o[t];
        if (r !== Et && St(r, t))
          return a[t] = 4, r[t];
        vc && (a[t] = 0);
      }
    }
    const c = Wo[t];
    let d, u;
    if (c)
      return t === "$attrs" && un(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Et && St(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, St(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Ol(i, t) ? (i[t] = r, !0) : n !== Et && St(n, t) ? (n[t] = r, !0) : St(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Et && s[0] !== "$" && St(e, s) || Ol(t, s) || St(o, s) || St(n, s) || St(Wo, s) || St(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : St(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function xd(e) {
  return ot(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let vc = !0;
function W0(e) {
  const t = Hp(e), r = e.proxy, n = e.ctx;
  vc = !1, t.beforeCreate && kd(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: m,
    updated: _,
    activated: g,
    deactivated: p,
    beforeDestroy: O,
    beforeUnmount: K,
    destroyed: H,
    unmounted: G,
    render: x,
    renderTracked: X,
    renderTriggered: V,
    errorCaptured: re,
    serverPrefetch: U,
    // public API
    expose: Z,
    inheritAttrs: T,
    // assets
    components: ue,
    directives: B,
    filters: he
  } = t;
  if (c && K0(c, n, null), a)
    for (const de in a) {
      const P = a[de];
      st(P) && (n[de] = P.bind(r));
    }
  if (i) {
    const de = i.call(r, r);
    At(de) && (e.data = /* @__PURE__ */ io(de));
  }
  if (vc = !0, o)
    for (const de in o) {
      const P = o[de], z = st(P) ? P.bind(r, r) : st(P.get) ? P.get.bind(r, r) : hr, oe = !st(P) && st(P.set) ? P.set.bind(r) : hr, j = dt({
        get: z,
        set: oe
      });
      Object.defineProperty(n, de, {
        enumerable: !0,
        configurable: !0,
        get: () => j.value,
        set: (fe) => j.value = fe
      });
    }
  if (s)
    for (const de in s)
      jp(s[de], n, r, de);
  if (l) {
    const de = st(l) ? l.call(r) : l;
    Reflect.ownKeys(de).forEach((P) => {
      x0(P, de[P]);
    });
  }
  d && kd(d, e, "c");
  function me(de, P) {
    ot(P) ? P.forEach((z) => de(z.bind(r))) : P && de(P.bind(r));
  }
  if (me(F0, u), me(al, f), me(T0, m), me(D0, _), me(I0, g), me(E0, p), me($0, re), me(V0, X), me(R0, V), me(ha, K), me($p, G), me(L0, U), ot(Z))
    if (Z.length) {
      const de = e.exposed || (e.exposed = {});
      Z.forEach((P) => {
        Object.defineProperty(de, P, {
          get: () => r[P],
          set: (z) => r[P] = z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === hr && (e.render = x), T != null && (e.inheritAttrs = T), ue && (e.components = ue), B && (e.directives = B), U && Lp(e);
}
function K0(e, t, r = hr) {
  ot(e) && (e = _c(e));
  for (const n in e) {
    const i = e[n];
    let o;
    At(i) ? "default" in i ? o = Qa(
      i.from || n,
      i.default,
      !0
    ) : o = Qa(i.from || n) : o = Qa(i), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function kd(e, t, r) {
  vr(
    ot(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function jp(e, t, r, n) {
  let i = n.includes(".") ? Dp(r, n) : () => r[n];
  if (Yt(e)) {
    const o = t[e];
    st(o) && mi(i, o);
  } else if (st(e))
    mi(i, e.bind(r));
  else if (At(e))
    if (ot(e))
      e.forEach((o) => jp(o, t, r, n));
    else {
      const o = st(e.handler) ? e.handler.bind(r) : t[e.handler];
      st(o) && mi(i, o, e);
    }
}
function Hp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => xs(l, c, a, !0)
  ), xs(l, t, a)), At(t) && o.set(t, l), l;
}
function xs(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && xs(e, o, r, !0), i && i.forEach(
    (a) => xs(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = U0[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const U0 = {
  data: Md,
  props: Pd,
  emits: Pd,
  // objects
  methods: Io,
  computed: Io,
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
  components: Io,
  directives: Io,
  // watch
  watch: Y0,
  // provide / inject
  provide: Md,
  inject: B0
};
function Md(e, t) {
  return t ? e ? function() {
    return gn(
      st(e) ? e.call(this, this) : e,
      st(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function B0(e, t) {
  return Io(_c(e), _c(t));
}
function _c(e) {
  if (ot(e)) {
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
function Io(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pd(e, t) {
  return e ? ot(e) && ot(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    xd(e),
    xd(t ?? {})
  ) : t;
}
function Y0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = gn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = bn(e[n], t[n]);
  return r;
}
function Gp() {
  return {
    app: null,
    config: {
      isNativeTag: rp,
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
let q0 = 0;
function X0(e, t) {
  return function(n, i = null) {
    st(n) || (n = gn({}, n)), i != null && !At(i) && (i = null);
    const o = Gp(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = o.app = {
      _uid: q0++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Cy,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return a.has(d) || (d && st(d.install) ? (a.add(d), d.install(c, ...u)) : st(d) && (a.add(d), d(c, ...u))), c;
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
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, cl(m.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        l && (vr(
          s,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Ui;
        Ui = c;
        try {
          return d();
        } finally {
          Ui = u;
        }
      }
    };
    return c;
  };
}
let Ui = null;
const J0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${xi(t)}Modifiers`];
function Z0(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Et;
  let i = r;
  const o = t.startsWith("update:"), a = o && J0(n, t.slice(7));
  a && (a.trim && (i = r.map((d) => Yt(d) ? d.trim() : d)), a.number && (i = r.map(fu)));
  let s, l = n[s = Nl(t)] || // also try camelCase event handler (#2249)
  n[s = Nl(_n(t))];
  !l && o && (l = n[s = Nl(xi(t))]), l && vr(
    l,
    e,
    6,
    i
  );
  const c = n[s + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, vr(
      c,
      e,
      6,
      i
    );
  }
}
const Q0 = /* @__PURE__ */ new WeakMap();
function Wp(e, t, r = !1) {
  const n = r ? Q0 : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!st(e)) {
    const l = (c) => {
      const d = Wp(c, t, !0);
      d && (s = !0, gn(a, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (At(e) && n.set(e, null), null) : (ot(o) ? o.forEach((l) => a[l] = null) : gn(a, o), At(e) && n.set(e, a), a);
}
function sl(e, t) {
  return !e || !Js(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), St(e, t[0].toLowerCase() + t.slice(1)) || St(e, xi(t)) || St(e, t));
}
function Nd(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: m,
    ctx: _,
    inheritAttrs: g
  } = e, p = Ss(e);
  let O, K;
  try {
    if (r.shapeFlag & 4) {
      const G = i || n, x = G;
      O = cr(
        c.call(
          x,
          G,
          d,
          u,
          m,
          f,
          _
        )
      ), K = s;
    } else {
      const G = t;
      O = cr(
        G.length > 1 ? G(
          u,
          { attrs: s, slots: a, emit: l }
        ) : G(
          u,
          null
        )
      ), K = t.props ? s : ey(s);
    }
  } catch (G) {
    Ko.length = 0, rl(G, e, 1), O = Be(qr);
  }
  let H = O;
  if (K && g !== !1) {
    const G = Object.keys(K), { shapeFlag: x } = H;
    G.length && x & 7 && (o && G.some(Zs) && (K = ty(
      K,
      o
    )), H = Qi(H, K, !1, !0));
  }
  return r.dirs && (H = Qi(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(r.dirs) : r.dirs), r.transition && wu(H, r.transition), O = H, Ss(p), O;
}
const ey = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Js(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ty = (e, t) => {
  const r = {};
  for (const n in e)
    (!Zs(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ny(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Cd(n, a, c) : !!a;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Kp(a, n, f) && !sl(c, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Cd(n, a, c) : !0 : !!a;
  return !1;
}
function Cd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Kp(t, e, o) && !sl(r, o))
      return !0;
  }
  return !1;
}
function Kp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && At(n) && At(i) ? !pu(n, i) : n !== i;
}
function ry({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Up = {}, Bp = () => Object.create(Up), Yp = (e) => Object.getPrototypeOf(e) === Up;
function iy(e, t, r, n = !1) {
  const i = {}, o = Bp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qp(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ f0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function oy(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ _t(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (sl(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (St(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const _ = _n(f);
            i[_] = Sc(
              l,
              s,
              _,
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
    qp(e, t, i, o) && (c = !0);
    let d;
    for (const u in s)
      (!t || // for camelCase
      !St(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = xi(u)) === u || !St(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Sc(
        l,
        s,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== s)
      for (const u in o)
        (!t || !St(t, u)) && (delete o[u], c = !0);
  }
  c && Ir(e.attrs, "set", "");
}
function qp(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const c = t[l];
      let d;
      i && St(i, d = _n(l)) ? !o || !o.includes(d) ? r[d] = c : (s || (s = {}))[d] = c : sl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ _t(r), c = s || Et;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Sc(
        i,
        l,
        u,
        c[u],
        e,
        !St(c, u)
      );
    }
  }
  return a;
}
function Sc(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = St(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && st(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = ma(i);
          n = c[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === xi(r)) && (n = !0));
  }
  return n;
}
const ay = /* @__PURE__ */ new WeakMap();
function Xp(e, t, r = !1) {
  const n = r ? ay : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!st(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = Xp(u, t, !0);
      gn(a, f), m && s.push(...m);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return At(e) && n.set(e, Gi), Gi;
  if (ot(o))
    for (let d = 0; d < o.length; d++) {
      const u = _n(o[d]);
      Ad(u) && (a[u] = Et);
    }
  else if (o)
    for (const d in o) {
      const u = _n(d);
      if (Ad(u)) {
        const f = o[d], m = a[u] = ot(f) || st(f) ? { type: f } : gn({}, f), _ = m.type;
        let g = !1, p = !0;
        if (ot(_))
          for (let O = 0; O < _.length; ++O) {
            const K = _[O], H = st(K) && K.name;
            if (H === "Boolean") {
              g = !0;
              break;
            } else H === "String" && (p = !1);
          }
        else
          g = st(_) && _.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = p, (g || St(m, "default")) && s.push(u);
      }
    }
  const c = [a, s];
  return At(e) && n.set(e, c), c;
}
function Ad(e) {
  return e[0] !== "$" && !$o(e);
}
const xu = (e) => e === "_" || e === "_ctx" || e === "$stable", ku = (e) => ot(e) ? e.map(cr) : [cr(e)], sy = (e, t, r) => {
  if (t._n)
    return t;
  const n = Fp((...i) => ku(t(...i)), r);
  return n._c = !1, n;
}, Jp = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (xu(i)) continue;
    const o = e[i];
    if (st(o))
      t[i] = sy(i, o, n);
    else if (o != null) {
      const a = ku(o);
      t[i] = () => a;
    }
  }
}, Zp = (e, t) => {
  const r = ku(t);
  e.slots.default = () => r;
}, Qp = (e, t, r) => {
  for (const n in t)
    (r || !xu(n)) && (e[n] = t[n]);
}, ly = (e, t, r) => {
  const n = e.slots = Bp();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qp(n, t, r), r && lp(n, "_", i, !0)) : Jp(t, n);
  } else t && Zp(e, t);
}, cy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Et;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : Qp(i, t, r) : (o = !t.$stable, Jp(t, i)), a = t;
  } else t && (Zp(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !xu(s) && a[s] == null && delete i[s];
}, kn = hy;
function uy(e) {
  return dy(e);
}
function dy(e, t) {
  const r = tl();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: m = hr,
    insertStaticContent: _
  } = e, g = (y, v, R, Y = null, S = null, w = null, D = void 0, k = null, N = !!v.dynamicChildren) => {
    if (y === v)
      return;
    y && !xo(y, v) && (Y = ce(y), fe(y, S, w, !0), y = null), v.patchFlag === -2 && (N = !1, v.dynamicChildren = null);
    const { type: A, ref: W, shapeFlag: Q } = v;
    switch (A) {
      case ll:
        p(y, v, R, Y);
        break;
      case qr:
        O(y, v, R, Y);
        break;
      case Tl:
        y == null && K(v, R, Y, D);
        break;
      case Qe:
        ue(
          y,
          v,
          R,
          Y,
          S,
          w,
          D,
          k,
          N
        );
        break;
      default:
        Q & 1 ? x(
          y,
          v,
          R,
          Y,
          S,
          w,
          D,
          k,
          N
        ) : Q & 6 ? B(
          y,
          v,
          R,
          Y,
          S,
          w,
          D,
          k,
          N
        ) : (Q & 64 || Q & 128) && A.process(
          y,
          v,
          R,
          Y,
          S,
          w,
          D,
          k,
          N,
          I
        );
    }
    W != null && S ? Ho(W, y && y.ref, w, v || y, !v) : W == null && y && y.ref != null && Ho(y.ref, null, w, y, !0);
  }, p = (y, v, R, Y) => {
    if (y == null)
      n(
        v.el = s(v.children),
        R,
        Y
      );
    else {
      const S = v.el = y.el;
      v.children !== y.children && c(S, v.children);
    }
  }, O = (y, v, R, Y) => {
    y == null ? n(
      v.el = l(v.children || ""),
      R,
      Y
    ) : v.el = y.el;
  }, K = (y, v, R, Y) => {
    [y.el, y.anchor] = _(
      y.children,
      v,
      R,
      Y,
      y.el,
      y.anchor
    );
  }, H = ({ el: y, anchor: v }, R, Y) => {
    let S;
    for (; y && y !== v; )
      S = f(y), n(y, R, Y), y = S;
    n(v, R, Y);
  }, G = ({ el: y, anchor: v }) => {
    let R;
    for (; y && y !== v; )
      R = f(y), i(y), y = R;
    i(v);
  }, x = (y, v, R, Y, S, w, D, k, N) => {
    if (v.type === "svg" ? D = "svg" : v.type === "math" && (D = "mathml"), y == null)
      X(
        v,
        R,
        Y,
        S,
        w,
        D,
        k,
        N
      );
    else {
      const A = y.el && y.el._isVueCE ? y.el : null;
      try {
        A && A._beginPatch(), U(
          y,
          v,
          S,
          w,
          D,
          k,
          N
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, X = (y, v, R, Y, S, w, D, k) => {
    let N, A;
    const { props: W, shapeFlag: Q, transition: ae, dirs: L } = y;
    if (N = y.el = a(
      y.type,
      w,
      W && W.is,
      W
    ), Q & 8 ? d(N, y.children) : Q & 16 && re(
      y.children,
      N,
      null,
      Y,
      S,
      Fl(y, w),
      D,
      k
    ), L && ni(y, null, Y, "created"), V(N, y, y.scopeId, D, Y), W) {
      for (const ve in W)
        ve !== "value" && !$o(ve) && o(N, ve, null, W[ve], w, Y);
      "value" in W && o(N, "value", null, W.value, w), (A = W.onVnodeBeforeMount) && or(A, Y, y);
    }
    L && ni(y, null, Y, "beforeMount");
    const se = fy(S, ae);
    se && ae.beforeEnter(N), n(N, v, R), ((A = W && W.onVnodeMounted) || se || L) && kn(() => {
      try {
        A && or(A, Y, y), se && ae.enter(N), L && ni(y, null, Y, "mounted");
      } finally {
      }
    }, S);
  }, V = (y, v, R, Y, S) => {
    if (R && m(y, R), Y)
      for (let w = 0; w < Y.length; w++)
        m(y, Y[w]);
    if (S) {
      let w = S.subTree;
      if (v === w || rh(w.type) && (w.ssContent === v || w.ssFallback === v)) {
        const D = S.vnode;
        V(
          y,
          D,
          D.scopeId,
          D.slotScopeIds,
          S.parent
        );
      }
    }
  }, re = (y, v, R, Y, S, w, D, k, N = 0) => {
    for (let A = N; A < y.length; A++) {
      const W = y[A] = k ? Nr(y[A]) : cr(y[A]);
      g(
        null,
        W,
        v,
        R,
        Y,
        S,
        w,
        D,
        k
      );
    }
  }, U = (y, v, R, Y, S, w, D) => {
    const k = v.el = y.el;
    let { patchFlag: N, dynamicChildren: A, dirs: W } = v;
    N |= y.patchFlag & 16;
    const Q = y.props || Et, ae = v.props || Et;
    let L;
    if (R && ri(R, !1), (L = ae.onVnodeBeforeUpdate) && or(L, R, v, y), W && ni(v, y, R, "beforeUpdate"), R && ri(R, !0), (Q.innerHTML && ae.innerHTML == null || Q.textContent && ae.textContent == null) && d(k, ""), A ? Z(
      y.dynamicChildren,
      A,
      k,
      R,
      Y,
      Fl(v, S),
      w
    ) : D || P(
      y,
      v,
      k,
      null,
      R,
      Y,
      Fl(v, S),
      w,
      !1
    ), N > 0) {
      if (N & 16)
        T(k, Q, ae, R, S);
      else if (N & 2 && Q.class !== ae.class && o(k, "class", null, ae.class, S), N & 4 && o(k, "style", Q.style, ae.style, S), N & 8) {
        const se = v.dynamicProps;
        for (let ve = 0; ve < se.length; ve++) {
          const we = se[ve], pe = Q[we], be = ae[we];
          (be !== pe || we === "value") && o(k, we, pe, be, S, R);
        }
      }
      N & 1 && y.children !== v.children && d(k, v.children);
    } else !D && A == null && T(k, Q, ae, R, S);
    ((L = ae.onVnodeUpdated) || W) && kn(() => {
      L && or(L, R, v, y), W && ni(v, y, R, "updated");
    }, Y);
  }, Z = (y, v, R, Y, S, w, D) => {
    for (let k = 0; k < v.length; k++) {
      const N = y[k], A = v[k], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xo(N, A) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? u(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      g(
        N,
        A,
        W,
        null,
        Y,
        S,
        w,
        D,
        !0
      );
    }
  }, T = (y, v, R, Y, S) => {
    if (v !== R) {
      if (v !== Et)
        for (const w in v)
          !$o(w) && !(w in R) && o(
            y,
            w,
            v[w],
            null,
            S,
            Y
          );
      for (const w in R) {
        if ($o(w)) continue;
        const D = R[w], k = v[w];
        D !== k && w !== "value" && o(y, w, k, D, S, Y);
      }
      "value" in R && o(y, "value", v.value, R.value, S);
    }
  }, ue = (y, v, R, Y, S, w, D, k, N) => {
    const A = v.el = y ? y.el : s(""), W = v.anchor = y ? y.anchor : s("");
    let { patchFlag: Q, dynamicChildren: ae, slotScopeIds: L } = v;
    L && (k = k ? k.concat(L) : L), y == null ? (n(A, R, Y), n(W, R, Y), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      R,
      W,
      S,
      w,
      D,
      k,
      N
    )) : Q > 0 && Q & 64 && ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === ae.length ? (Z(
      y.dynamicChildren,
      ae,
      R,
      S,
      w,
      D,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || S && v === S.subTree) && eh(
      y,
      v,
      !0
      /* shallow */
    )) : P(
      y,
      v,
      R,
      W,
      S,
      w,
      D,
      k,
      N
    );
  }, B = (y, v, R, Y, S, w, D, k, N) => {
    v.slotScopeIds = k, y == null ? v.shapeFlag & 512 ? S.ctx.activate(
      v,
      R,
      Y,
      D,
      N
    ) : he(
      v,
      R,
      Y,
      S,
      w,
      D,
      N
    ) : ne(y, v, N);
  }, he = (y, v, R, Y, S, w, D) => {
    const k = y.component = _y(
      y,
      Y,
      S
    );
    if (Rp(y) && (k.ctx.renderer = I), wy(k, !1, D), k.asyncDep) {
      if (S && S.registerDep(k, me, D), !y.el) {
        const N = k.subTree = Be(qr);
        O(null, N, v, R), y.placeholder = N.el;
      }
    } else
      me(
        k,
        y,
        v,
        R,
        S,
        w,
        D
      );
  }, ne = (y, v, R) => {
    const Y = v.component = y.component;
    if (ny(y, v, R))
      if (Y.asyncDep && !Y.asyncResolved) {
        de(Y, v, R);
        return;
      } else
        Y.next = v, Y.update();
    else
      v.el = y.el, Y.vnode = v;
  }, me = (y, v, R, Y, S, w, D) => {
    const k = () => {
      if (y.isMounted) {
        let { next: Q, bu: ae, u: L, parent: se, vnode: ve } = y;
        {
          const h = th(y);
          if (h) {
            Q && (Q.el = ve.el, de(y, Q, D)), h.asyncDep.then(() => {
              kn(() => {
                y.isUnmounted || A();
              }, S);
            });
            return;
          }
        }
        let we = Q, pe;
        ri(y, !1), Q ? (Q.el = ve.el, de(y, Q, D)) : Q = ve, ae && Za(ae), (pe = Q.props && Q.props.onVnodeBeforeUpdate) && or(pe, se, Q, ve), ri(y, !0);
        const be = Nd(y), ye = y.subTree;
        y.subTree = be, g(
          ye,
          be,
          // parent may have changed if it's in a teleport
          u(ye.el),
          // anchor may have changed if it's in a fragment
          ce(ye),
          y,
          S,
          w
        ), Q.el = be.el, we === null && ry(y, be.el), L && kn(L, S), (pe = Q.props && Q.props.onVnodeUpdated) && kn(
          () => or(pe, se, Q, ve),
          S
        );
      } else {
        let Q;
        const { el: ae, props: L } = v, { bm: se, m: ve, parent: we, root: pe, type: be } = y, ye = Go(v);
        ri(y, !1), se && Za(se), !ye && (Q = L && L.onVnodeBeforeMount) && or(Q, we, v), ri(y, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            be,
            y.parent ? y.parent.type : void 0
          );
          const h = y.subTree = Nd(y);
          g(
            null,
            h,
            R,
            Y,
            y,
            S,
            w
          ), v.el = h.el;
        }
        if (ve && kn(ve, S), !ye && (Q = L && L.onVnodeMounted)) {
          const h = v;
          kn(
            () => or(Q, we, h),
            S
          );
        }
        (v.shapeFlag & 256 || we && Go(we.vnode) && we.vnode.shapeFlag & 256) && y.a && kn(y.a, S), y.isMounted = !0, v = R = Y = null;
      }
    };
    y.scope.on();
    const N = y.effect = new fp(k);
    y.scope.off();
    const A = y.update = N.run.bind(N), W = y.job = N.runIfDirty.bind(N);
    W.i = y, W.id = y.uid, N.scheduler = () => Su(W), ri(y, !0), A();
  }, de = (y, v, R) => {
    v.component = y;
    const Y = y.vnode.props;
    y.vnode = v, y.next = null, oy(y, v.props, Y, R), cy(y, v.children, R), Rr(), vd(y), Vr();
  }, P = (y, v, R, Y, S, w, D, k, N = !1) => {
    const A = y && y.children, W = y ? y.shapeFlag : 0, Q = v.children, { patchFlag: ae, shapeFlag: L } = v;
    if (ae > 0) {
      if (ae & 128) {
        oe(
          A,
          Q,
          R,
          Y,
          S,
          w,
          D,
          k,
          N
        );
        return;
      } else if (ae & 256) {
        z(
          A,
          Q,
          R,
          Y,
          S,
          w,
          D,
          k,
          N
        );
        return;
      }
    }
    L & 8 ? (W & 16 && ee(A, S, w), Q !== A && d(R, Q)) : W & 16 ? L & 16 ? oe(
      A,
      Q,
      R,
      Y,
      S,
      w,
      D,
      k,
      N
    ) : ee(A, S, w, !0) : (W & 8 && d(R, ""), L & 16 && re(
      Q,
      R,
      Y,
      S,
      w,
      D,
      k,
      N
    ));
  }, z = (y, v, R, Y, S, w, D, k, N) => {
    y = y || Gi, v = v || Gi;
    const A = y.length, W = v.length, Q = Math.min(A, W);
    let ae;
    for (ae = 0; ae < Q; ae++) {
      const L = v[ae] = N ? Nr(v[ae]) : cr(v[ae]);
      g(
        y[ae],
        L,
        R,
        null,
        S,
        w,
        D,
        k,
        N
      );
    }
    A > W ? ee(
      y,
      S,
      w,
      !0,
      !1,
      Q
    ) : re(
      v,
      R,
      Y,
      S,
      w,
      D,
      k,
      N,
      Q
    );
  }, oe = (y, v, R, Y, S, w, D, k, N) => {
    let A = 0;
    const W = v.length;
    let Q = y.length - 1, ae = W - 1;
    for (; A <= Q && A <= ae; ) {
      const L = y[A], se = v[A] = N ? Nr(v[A]) : cr(v[A]);
      if (xo(L, se))
        g(
          L,
          se,
          R,
          null,
          S,
          w,
          D,
          k,
          N
        );
      else
        break;
      A++;
    }
    for (; A <= Q && A <= ae; ) {
      const L = y[Q], se = v[ae] = N ? Nr(v[ae]) : cr(v[ae]);
      if (xo(L, se))
        g(
          L,
          se,
          R,
          null,
          S,
          w,
          D,
          k,
          N
        );
      else
        break;
      Q--, ae--;
    }
    if (A > Q) {
      if (A <= ae) {
        const L = ae + 1, se = L < W ? v[L].el : Y;
        for (; A <= ae; )
          g(
            null,
            v[A] = N ? Nr(v[A]) : cr(v[A]),
            R,
            se,
            S,
            w,
            D,
            k,
            N
          ), A++;
      }
    } else if (A > ae)
      for (; A <= Q; )
        fe(y[A], S, w, !0), A++;
    else {
      const L = A, se = A, ve = /* @__PURE__ */ new Map();
      for (A = se; A <= ae; A++) {
        const b = v[A] = N ? Nr(v[A]) : cr(v[A]);
        b.key != null && ve.set(b.key, A);
      }
      let we, pe = 0;
      const be = ae - se + 1;
      let ye = !1, h = 0;
      const $ = new Array(be);
      for (A = 0; A < be; A++) $[A] = 0;
      for (A = L; A <= Q; A++) {
        const b = y[A];
        if (pe >= be) {
          fe(b, S, w, !0);
          continue;
        }
        let F;
        if (b.key != null)
          F = ve.get(b.key);
        else
          for (we = se; we <= ae; we++)
            if ($[we - se] === 0 && xo(b, v[we])) {
              F = we;
              break;
            }
        F === void 0 ? fe(b, S, w, !0) : ($[F - se] = A + 1, F >= h ? h = F : ye = !0, g(
          b,
          v[F],
          R,
          null,
          S,
          w,
          D,
          k,
          N
        ), pe++);
      }
      const C = ye ? py($) : Gi;
      for (we = C.length - 1, A = be - 1; A >= 0; A--) {
        const b = se + A, F = v[b], M = v[b + 1], q = b + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          M.el || nh(M)
        ) : Y;
        $[A] === 0 ? g(
          null,
          F,
          R,
          q,
          S,
          w,
          D,
          k,
          N
        ) : ye && (we < 0 || A !== C[we] ? j(F, R, q, 2) : we--);
      }
    }
  }, j = (y, v, R, Y, S = null) => {
    const { el: w, type: D, transition: k, children: N, shapeFlag: A } = y;
    if (A & 6) {
      j(y.component.subTree, v, R, Y);
      return;
    }
    if (A & 128) {
      y.suspense.move(v, R, Y);
      return;
    }
    if (A & 64) {
      D.move(y, v, R, I);
      return;
    }
    if (D === Qe) {
      n(w, v, R);
      for (let Q = 0; Q < N.length; Q++)
        j(N[Q], v, R, Y);
      n(y.anchor, v, R);
      return;
    }
    if (D === Tl) {
      H(y, v, R);
      return;
    }
    if (Y !== 2 && A & 1 && k)
      if (Y === 0)
        k.beforeEnter(w), n(w, v, R), kn(() => k.enter(w), S);
      else {
        const { leave: Q, delayLeave: ae, afterLeave: L } = k, se = () => {
          y.ctx.isUnmounted ? i(w) : n(w, v, R);
        }, ve = () => {
          w._isLeaving && w[A0](
            !0
            /* cancelled */
          ), Q(w, () => {
            se(), L && L();
          });
        };
        ae ? ae(w, se, ve) : ve();
      }
    else
      n(w, v, R);
  }, fe = (y, v, R, Y = !1, S = !1) => {
    const {
      type: w,
      props: D,
      ref: k,
      children: N,
      dynamicChildren: A,
      shapeFlag: W,
      patchFlag: Q,
      dirs: ae,
      cacheIndex: L,
      memo: se
    } = y;
    if (Q === -2 && (S = !1), k != null && (Rr(), Ho(k, null, R, y, !0), Vr()), L != null && (v.renderCache[L] = void 0), W & 256) {
      v.ctx.deactivate(y);
      return;
    }
    const ve = W & 1 && ae, we = !Go(y);
    let pe;
    if (we && (pe = D && D.onVnodeBeforeUnmount) && or(pe, v, y), W & 6)
      E(y.component, R, Y);
    else {
      if (W & 128) {
        y.suspense.unmount(R, Y);
        return;
      }
      ve && ni(y, null, v, "beforeUnmount"), W & 64 ? y.type.remove(
        y,
        v,
        R,
        I,
        Y
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Qe || Q > 0 && Q & 64) ? ee(
        A,
        v,
        R,
        !1,
        !0
      ) : (w === Qe && Q & 384 || !S && W & 16) && ee(N, v, R), Y && Pe(y);
    }
    const be = se != null && L == null;
    (we && (pe = D && D.onVnodeUnmounted) || ve || be) && kn(() => {
      pe && or(pe, v, y), ve && ni(y, null, v, "unmounted"), be && (y.el = null);
    }, R);
  }, Pe = (y) => {
    const { type: v, el: R, anchor: Y, transition: S } = y;
    if (v === Qe) {
      ie(R, Y);
      return;
    }
    if (v === Tl) {
      G(y);
      return;
    }
    const w = () => {
      i(R), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (y.shapeFlag & 1 && S && !S.persisted) {
      const { leave: D, delayLeave: k } = S, N = () => D(R, w);
      k ? k(y.el, w, N) : N();
    } else
      w();
  }, ie = (y, v) => {
    let R;
    for (; y !== v; )
      R = f(y), i(y), y = R;
    i(v);
  }, E = (y, v, R) => {
    const { bum: Y, scope: S, job: w, subTree: D, um: k, m: N, a: A } = y;
    Id(N), Id(A), Y && Za(Y), S.stop(), w && (w.flags |= 8, fe(D, y, v, R)), k && kn(k, v), kn(() => {
      y.isUnmounted = !0;
    }, v);
  }, ee = (y, v, R, Y = !1, S = !1, w = 0) => {
    for (let D = w; D < y.length; D++)
      fe(y[D], v, R, Y, S);
  }, ce = (y) => {
    if (y.shapeFlag & 6)
      return ce(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const v = f(y.anchor || y.el), R = v && v[N0];
    return R ? f(R) : v;
  };
  let ge = !1;
  const _e = (y, v, R) => {
    let Y;
    y == null ? v._vnode && (fe(v._vnode, null, null, !0), Y = v._vnode.component) : g(
      v._vnode || null,
      y,
      v,
      null,
      null,
      null,
      R
    ), v._vnode = y, ge || (ge = !0, vd(Y), Ip(), ge = !1);
  }, I = {
    p: g,
    um: fe,
    m: j,
    r: Pe,
    mt: he,
    mc: re,
    pc: P,
    pbc: Z,
    n: ce,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: X0(_e)
  };
}
function Fl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ri({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ot(n) && ot(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Nr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && eh(a, s)), s.type === ll && (s.patchFlag === -1 && (s = i[o] = Nr(s)), s.el = a.el), s.type === qr && !s.el && (s.el = a.el);
    }
}
function py(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < c ? o = s + 1 : a = s;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function th(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : th(t);
}
function Id(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function nh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? nh(t.subTree) : null;
}
const rh = (e) => e.__isSuspense;
function hy(e, t) {
  t && t.pendingBranch ? ot(e) ? t.effects.push(...e) : t.effects.push(e) : w0(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), ll = /* @__PURE__ */ Symbol.for("v-txt"), qr = /* @__PURE__ */ Symbol.for("v-cmt"), Tl = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let Ln = null;
function Fe(e = !1) {
  Ko.push(Ln = e ? null : []);
}
function my() {
  Ko.pop(), Ln = Ko[Ko.length - 1] || null;
}
let Zo = 1;
function Ed(e, t = !1) {
  Zo += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function ih(e) {
  return e.dynamicChildren = Zo > 0 ? Ln || Gi : null, my(), Zo > 0 && Ln && Ln.push(e), e;
}
function Le(e, t, r, n, i, o) {
  return ih(
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
function Rn(e, t, r, n, i) {
  return ih(
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
function oh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ah = ({ key: e }) => e ?? null, es = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Yt(e) || /* @__PURE__ */ hn(e) || st(e) ? { i: Dn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Qe ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ah(t),
    ref: t && es(t),
    scopeId: Op,
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
    ctx: Dn
  };
  return s ? (Mu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Yt(r) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ln.push(l), l;
}
const Be = gy;
function gy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === zp) && (e = qr), oh(e)) {
    const s = Qi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Mu(s, r), Zo > 0 && !o && Ln && (s.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = s : Ln.push(s)), s.patchFlag = -2, s;
  }
  if (Ny(e) && (e = e.__vccOpts), t) {
    t = yy(t);
    let { class: s, style: l } = t;
    s && !Yt(s) && (t.class = mt(s)), At(l) && (/* @__PURE__ */ _u(l) && !ot(l) && (l = gn({}, l)), t.style = Ct(l));
  }
  const a = Yt(e) ? 1 : rh(e) ? 128 : C0(e) ? 64 : At(e) ? 4 : st(e) ? 2 : 0;
  return Me(
    e,
    t,
    r,
    n,
    i,
    a,
    o,
    !0
  );
}
function yy(e) {
  return e ? /* @__PURE__ */ _u(e) || Yp(e) ? gn({}, e) : e : null;
}
function Qi(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, c = t ? Cr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ah(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ot(o) ? o.concat(es(t)) : [o, es(t)] : es(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Qe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Qi(e.ssContent),
    ssFallback: e.ssFallback && Qi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && wu(
    d,
    l.clone(d)
  ), d;
}
function Eo(e = " ", t = 0) {
  return Be(ll, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Fe(), Rn(qr, null, e)) : Be(qr, null, e);
}
function cr(e) {
  return e == null || typeof e == "boolean" ? Be(qr) : ot(e) ? Be(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oh(e) ? Nr(e) : Be(ll, null, String(e));
}
function Nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qi(e);
}
function Mu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ot(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Mu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Yp(t) ? t._ctx = Dn : i === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else st(t) ? (t = { default: t, _ctx: Dn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Eo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Cr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Ct([t.style, n.style]);
      else if (Js(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(ot(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Zs(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function or(e, t, r, n = null) {
  vr(e, t, 7, [
    r,
    n
  ]);
}
const by = Gp();
let vy = 0;
function _y(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || by, o = {
    uid: vy++,
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
    scope: new Ug(
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
    propsOptions: Xp(n, i),
    emitsOptions: Wp(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Et,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Et,
    data: Et,
    props: Et,
    attrs: Et,
    slots: Et,
    refs: Et,
    setupState: Et,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Z0.bind(null, o), e.ce && e.ce(o), o;
}
let dn = null;
const Sy = () => dn || Dn;
let ks, wc;
{
  const e = tl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  ks = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => dn = r
  ), wc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qo = r
  );
}
const ma = (e) => {
  const t = dn;
  return ks(e), e.scope.on(), () => {
    e.scope.off(), ks(t);
  };
}, Od = () => {
  dn && dn.scope.off(), ks(null);
};
function sh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function wy(e, t = !1, r = !1) {
  t && wc(t);
  const { props: n, children: i } = e.vnode, o = sh(e);
  iy(e, n, o, t), ly(e, i, r || t);
  const a = o ? xy(e, t) : void 0;
  return t && wc(!1), a;
}
function xy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, G0);
  const { setup: n } = r;
  if (n) {
    Rr();
    const i = e.setupContext = n.length > 1 ? My(e) : null, o = ma(e), a = pa(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = op(a);
    if (Vr(), o(), (s || e.sp) && !Go(e) && Lp(e), s) {
      if (a.then(Od, Od), t)
        return a.then((l) => {
          Fd(e, l);
        }).catch((l) => {
          rl(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Fd(e, a);
  } else
    lh(e);
}
function Fd(e, t, r) {
  st(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : At(t) && (e.setupState = Np(t)), lh(e);
}
function lh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || hr);
  {
    const i = ma(e);
    Rr();
    try {
      W0(e);
    } finally {
      Vr(), i();
    }
  }
}
const ky = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function My(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, ky),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Np(p0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Wo)
        return Wo[r](e);
    },
    has(t, r) {
      return r in t || r in Wo;
    }
  })) : e.proxy;
}
function Py(e, t = !0) {
  return st(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ny(e) {
  return st(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ y0(e, t, Qo), Cy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xc;
const Td = typeof window < "u" && window.trustedTypes;
if (Td)
  try {
    xc = /* @__PURE__ */ Td.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ch = xc ? (e) => xc.createHTML(e) : (e) => e, Ay = "http://www.w3.org/2000/svg", Iy = "http://www.w3.org/1998/Math/MathML", Pr = typeof document < "u" ? document : null, Dd = Pr && /* @__PURE__ */ Pr.createElement("template"), Ey = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Pr.createElementNS(Ay, e) : t === "mathml" ? Pr.createElementNS(Iy, e) : r ? Pr.createElement(e, { is: r }) : Pr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Pr.createTextNode(e),
  createComment: (e) => Pr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const a = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Dd.innerHTML = ch(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Dd.content;
      if (n === "svg" || n === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Oy = /* @__PURE__ */ Symbol("_vtc");
function Fy(e, t, r) {
  const n = e[Oy];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ms = /* @__PURE__ */ Symbol("_vod"), uh = /* @__PURE__ */ Symbol("_vsh"), vi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ms] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ko(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), ko(e, !0), n.enter(e)) : n.leave(e, () => {
      ko(e, !1);
    }) : ko(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ko(e, t);
  }
};
function ko(e, t) {
  e.style.display = t ? e[Ms] : "none", e[uh] = !t;
}
const Ty = /* @__PURE__ */ Symbol(""), Dy = /(?:^|;)\s*display\s*:/;
function Ly(e, t, r) {
  const n = e.style, i = Yt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Yt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && ts(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && ts(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), ts(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[Ty];
      a && (r += ";" + a), n.cssText = r, o = Dy.test(r);
    }
  } else t && e.removeAttribute("style");
  Ms in e && (e[Ms] = o ? n.display : "", e[uh] && (n.display = "none"));
}
const Ld = /\s*!important$/;
function ts(e, t, r) {
  if (ot(r))
    r.forEach((n) => ts(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Ry(e, t);
    Ld.test(r) ? e.setProperty(
      xi(n),
      r.replace(Ld, ""),
      "important"
    ) : e[n] = r;
  }
}
const Rd = ["Webkit", "Moz", "ms"], Dl = {};
function Ry(e, t) {
  const r = Dl[t];
  if (r)
    return r;
  let n = _n(t);
  if (n !== "filter" && n in e)
    return Dl[t] = n;
  n = el(n);
  for (let i = 0; i < Rd.length; i++) {
    const o = Rd[i] + n;
    if (o in e)
      return Dl[t] = o;
  }
  return t;
}
const Vd = "http://www.w3.org/1999/xlink";
function $d(e, t, r, n, i, o = Wg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Vd, t.slice(6, t.length)) : e.setAttributeNS(Vd, t, r) : r == null || o && !cp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : br(r) ? String(r) : r
  );
}
function zd(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? ch(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (s !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const s = typeof e[t];
    s === "boolean" ? r = cp(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Di(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Vy(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const jd = /* @__PURE__ */ Symbol("_vei");
function $y(e, t, r, n, i = null) {
  const o = e[jd] || (e[jd] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = zy(t);
    if (n) {
      const c = o[t] = Gy(
        n,
        i
      );
      Di(e, s, c, l);
    } else a && (Vy(e, s, a, l), o[t] = void 0);
  }
}
const Hd = /(?:Once|Passive|Capture)$/;
function zy(e) {
  let t;
  if (Hd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Hd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xi(e.slice(2)), t];
}
let Ll = 0;
const jy = /* @__PURE__ */ Promise.resolve(), Hy = () => Ll || (jy.then(() => Ll = 0), Ll = Date.now());
function Gy(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    vr(
      Wy(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Hy(), r;
}
function Wy(e, t) {
  if (ot(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Gd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ky = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? Fy(e, n, a) : t === "style" ? Ly(e, r, n) : Js(t) ? Zs(t) || $y(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uy(e, t, n, a)) ? (zd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $d(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (By(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Yt(n))) ? zd(e, _n(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), $d(e, t, n, a));
};
function Uy(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gd(t) && st(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Gd(t) && Yt(r) ? !1 : t in e;
}
function By(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = _n(t);
  return Array.isArray(r) ? r.some((i) => _n(i) === n) : Object.keys(r).some((i) => _n(i) === n);
}
const Wd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ot(t) ? (r) => Za(t, r) : t;
};
function Yy(e) {
  e.target.composing = !0;
}
function Kd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Rl = /* @__PURE__ */ Symbol("_assign");
function Ud(e, t, r) {
  return t && (e = e.trim()), r && (e = fu(e)), e;
}
const Bd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Rl] = Wd(i);
    const o = n || i.props && i.props.type === "number";
    Di(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Rl](Ud(e.value, r, o));
    }), (r || o) && Di(e, "change", () => {
      e.value = Ud(e.value, r, o);
    }), t || (Di(e, "compositionstart", Yy), Di(e, "compositionend", Kd), Di(e, "change", Kd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Rl] = Wd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? fu(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, qy = ["ctrl", "shift", "alt", "meta"], Xy = {
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
  exact: (e, t) => qy.some((r) => e[`${r}Key`] && !t.includes(r))
}, Pt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = Xy[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Jy = /* @__PURE__ */ gn({ patchProp: Ky }, Ey);
let Yd;
function Zy() {
  return Yd || (Yd = uy(Jy));
}
const Pu = ((...e) => {
  const t = Zy().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = eb(n);
    if (!i) return;
    const o = t._component;
    !st(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, Qy(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function Qy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function eb(e) {
  return Yt(e) ? document.querySelector(e) : e;
}
const tb = "PanoramaSuite.Debug.Diagnostics", nb = "PanoramaSuite.Debug.ExportDiagnostics", Vl = "pano_suite.diagnostics.v1", qd = "pano_suite.diagnostics.previous.v1", rb = 300, ib = 2e5, ob = 100, ab = 20, sb = 1e3, lb = 2, La = 1024 * 1024;
function Wr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function cb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function ub() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: cb,
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
function db(e = {}) {
  const t = { ...ub(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    d.delete(I), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    u.delete(I), m.collected += 1;
  }) : null, p = /* @__PURE__ */ new Set(), O = { created: 0, lost: 0, restored: 0, disposed: 0 }, K = [], H = /* @__PURE__ */ new Map();
  let G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const V = [];
  function re(I, le, y = void 0) {
    K.push(y === void 0 ? { t: t.clock(), type: I, label: le } : { t: t.clock(), type: I, label: le, detail: y }), K.length > ob && K.shift();
  }
  function U(I, le, y, v, R) {
    if (!r || !v || !t.WeakRef) return v;
    const Y = { ref: new t.WeakRef(v), label: R };
    return I.add(Y), le == null || le.register(v, Y), y.created += 1, v;
  }
  function Z(I, le = "") {
    return U(d, _, f, I, le);
  }
  function T(I, le = "") {
    return U(u, g, m, I, le);
  }
  function ue({ label: I = "", width: le, height: y, offscreen: v = !1 } = {}) {
    const R = globalThis.OffscreenCanvas;
    let Y;
    return v && typeof R < "u" ? Y = new R(le, y) : (Y = t.document().createElement("canvas"), le !== void 0 && y !== void 0 && (Y.width = le, Y.height = y)), Z(Y, I);
  }
  function B(I) {
    I.width = 0, I.height = 0, r && (f.released += 1);
  }
  function he(I = t.document(), le = "") {
    var y;
    return T(((y = I == null ? void 0 : I.createElement) == null ? void 0 : y.call(I, "video")) || null, le);
  }
  function ne(I, le) {
    if (!r || !I) return () => {
    };
    const y = { label: le, lost: !1, disposed: !1 };
    p.add(y), O.created += 1, re("webgl-created", le);
    const v = () => {
      y.disposed || (y.lost = !0, O.lost += 1, re("webglcontextlost", le));
    }, R = () => {
      y.disposed || (y.lost = !1, O.restored += 1, re("webglcontextrestored", le));
    };
    return I.addEventListener("webglcontextlost", v), I.addEventListener("webglcontextrestored", R), () => {
      y.disposed || (y.disposed = !0, p.delete(y), O.disposed += 1, re("webgl-disposed", le));
    };
  }
  function me(I, le) {
    return H.set(I, le), () => {
      H.get(I) === le && H.delete(I);
    };
  }
  function de() {
    return r ? t.now() : -1;
  }
  function P(I) {
    if (I < 0 || !r) return;
    const le = t.now() - I;
    G.count += 1, G.maxMs = Math.max(G.maxMs, le);
  }
  function z(I, le) {
    if (le < 0 || !r) return;
    const y = t.now() - le, v = x.get(I) ?? { count: 0, maxMs: 0 };
    v.count += 1, v.maxMs = Math.max(v.maxMs, y), x.set(I, v);
  }
  function oe() {
    let I = 0, le = 0, y = 0, v = [0, 0];
    const R = {};
    for (const Y of d) {
      const S = Y.ref.deref();
      if (!S) continue;
      I += 1;
      const w = S.width * S.height;
      w > 0 && (le += 1), y += w, w > v[0] * v[1] && (v = [S.width, S.height]);
      const D = R[Y.label] ?? (R[Y.label] = [0, 0]);
      D[0] += 1, D[1] += w;
    }
    return { ...f, alive: I, sized: le, pixels: y, mb: Wr(y * 4 / La, 1), largest: v, byLabel: R };
  }
  function j() {
    const I = [];
    let le = 0, y = 0;
    for (const v of u) {
      const R = v.ref.deref();
      if (!R) continue;
      le += 1;
      const Y = !R.paused && !R.ended;
      Y && (y += 1), I.length < ab && I.push({
        label: v.label,
        playing: Y,
        src: !!(R.currentSrc || R.src),
        size: [R.videoWidth || 0, R.videoHeight || 0],
        ready: R.readyState ?? 0,
        connected: !!R.isConnected
      });
    }
    return { ...m, alive: le, playing: y, list: I };
  }
  function fe() {
    const I = t.now(), le = t.memory(), y = {
      t: t.clock(),
      heap: le ? { used: Wr(le.usedJSHeapSize / La, 1), total: Wr(le.totalJSHeapSize / La, 1), limit: Wr(le.jsHeapSizeLimit / La, 1) } : null,
      canvas: oe(),
      webgl: { ...O, alive: [...p].filter((v) => !v.lost).length },
      video: j(),
      frame: { count: G.count, maxMs: Wr(G.maxMs), longTasks: X.count, longTaskMaxMs: Wr(X.maxMs) },
      renders: Object.fromEntries([...x].map(([v, R]) => [v, { count: R.count, maxMs: Wr(R.maxMs) }])),
      sources: Object.fromEntries([...H].map(([v, R]) => [v, R()])),
      costMs: Wr(c, 3)
    };
    return G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, V.push({ record: y, text: JSON.stringify(y) }), V.length > rb && V.shift(), l += 1, l % lb === 0 && ie(), c = t.now() - I, y;
  }
  function Pe(I = ib) {
    const le = JSON.stringify({ ...o, events: K }).slice(0, -1);
    let y = I - le.length - 14, v = V.length;
    for (; v > 0 && y - V[v - 1].text.length - 1 >= 0; )
      v -= 1, y -= V[v].text.length + 1;
    return `${le},"records":[${V.slice(v).map((R) => R.text).join(",")}]}`;
  }
  function ie() {
    if (!o) return;
    const I = t.storage();
    if (I) {
      o.savedAt = t.clock();
      try {
        I.setItem(Vl, Pe());
      } catch {
      }
    }
  }
  function E() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", ie();
  }
  function ee() {
    var R;
    if (n) return i;
    n = !0;
    const I = t.storage();
    if (!I) return null;
    let le = null;
    try {
      if (le = I.getItem(Vl), le === null) {
        const Y = I.getItem(qd);
        return i = Y === null ? null : JSON.parse(Y), i;
      }
      I.setItem(qd, le), I.removeItem(Vl), i = JSON.parse(le);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], v = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(v)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((R = y.at(-1)) == null ? void 0 : R.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(v)
    ), i;
  }
  function ce(I) {
    const le = I === !0;
    if (ee(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, V.length = 0, s = t.observeLongTasks((y) => {
          for (const v of y)
            X.count += 1, X.maxMs = Math.max(X.maxMs, v.duration);
        }), t.addUnload(E), a = t.setInterval(fe, sb), ie();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(E), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", ie();
    }
  }
  function ge() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...K], records: V.map((I) => I.record) } : null,
      previous: i
    };
  }
  function _e() {
    const I = t.document(), le = new Blob([JSON.stringify(ge(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(le), v = I.createElement("a");
    v.href = y, v.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, v.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ue,
    releaseCanvas: B,
    trackCanvas: Z,
    createVideo: he,
    trackVideo: T,
    watchContext: ne,
    addSource: me,
    frameStart: de,
    frameEnd: P,
    renderEnd: z,
    sample: fe,
    serialize: Pe,
    recoverPrevious: ee,
    setEnabled: ce,
    exportData: ge,
    download: _e
  };
}
const An = db(), mn = An.createCanvas, kc = An.releaseCanvas, $l = An.trackCanvas, ul = An.createVideo, Xd = An.trackVideo, fb = An.addSource, pb = An.frameStart, hb = An.frameEnd;
function dh(e, t) {
  const r = An.watchContext(e.canvas, t), n = An.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = An.frameStart(), l = o(a);
    return An.renderEnd(t, s), l;
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
const mb = {
  id: tb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => An.setEnabled(e === !0)
}, Jd = {
  id: nb,
  label: "Export Panorama Suite diagnostics",
  function: () => An.download()
};
function Li(e, t) {
  const r = mn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function gb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Zd(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < a && (a = f), u < s && (s = u), f > l && (l = f), u > c && (c = u));
  return l < a || c < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: c,
    width: l - a + 1,
    height: c - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, c - s + 1)).toFixed(4))
  };
}
function Nu(e, t) {
  return mn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Br(e, t, r) {
  if (!e) return Li(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Wt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function sn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let zl = null, jl = null, Qd = null, ef = null, Gt = null, Mo = null;
function yb() {
  if (jl) return jl;
  const e = 6, t = 17, r = mn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), jl = r, r;
}
function Hl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  zl = Br(zl, r, n);
  const i = zl;
  Wt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", ef !== i.ctx && (Qd = i.ctx.createPattern(yb(), "repeat"), ef = i.ctx), i.ctx.fillStyle = Qd, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function bb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function vb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function _b(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Sb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Rt = /* @__PURE__ */ new Map(), Cu = 128;
function wb(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Rt.has(l)) {
    const K = Rt.get(l);
    return Rt.delete(l), Rt.set(l, K), K;
  }
  Rt.size >= Cu && Rt.delete(Rt.keys().next().value);
  const c = a * 2 + 2, d = a + 1, u = Nu(c, c), f = u.getContext("2d"), m = s * a, _ = a + 1, g = `rgba(${r},${n},${i},${o})`, p = `rgba(${r},${n},${i},0)`, O = f.createRadialGradient(d, d, m, d, d, _);
  return O.addColorStop(0, g), O.addColorStop(1, p), f.fillStyle = O, f.fillRect(0, 0, c, c), Rt.set(l, u), u;
}
function xb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, a ?? 0)), p = `chisel:${u}:${f}:${r.toFixed(2)}:${s}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${_.toFixed(2)}:${g.toFixed(2)}`;
  if (Rt.has(p)) {
    const re = Rt.get(p);
    return Rt.delete(p), Rt.set(p, re), re;
  }
  Rt.size >= Cu && Rt.delete(Rt.keys().next().value);
  const O = Nu(u, f), K = O.getContext("2d"), H = K.createImageData(u, f), G = H.data, x = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), V = 1 + m;
  for (let re = 0; re < f; re++)
    for (let U = 0; U < u; U++) {
      const Z = U + 0.5 - e, T = re + 0.5 - t, ue = Math.max(Math.abs(Z) - x, 0), he = Math.hypot(ue, T) / t;
      if (he >= 1) continue;
      const ne = he <= X ? 1 : Math.max(0, (1 - he) / Math.max(1e-4, 1 - X)), me = 1 - he, de = 1 + m * (1 - me) * (1 - me), P = 1 - _ * me * me, z = de * P / V;
      let oe = 1;
      if (g > 0) {
        const Pe = Math.floor((T + t) / 1.5), ie = Math.floor((Z + e) / 8), E = gi(Bi(Pe * 41 + 500, ie * 19 + 300));
        oe = 1 - g * 0.42 * E;
      }
      const j = Math.round(255 * Math.min(1, d * ne * z * oe));
      if (j <= 0) continue;
      const fe = (re * u + U) * 4;
      G[fe] = s, G[fe + 1] = l, G[fe + 2] = c, G[fe + 3] = j;
    }
  return K.putImageData(H, 0, 0), Rt.set(p, O), O;
}
function Bi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function gi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function kb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(s) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = gi(Bi(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const _ = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = Mb(e, t, s, l, r, n), p = o * 0.55;
  if (g < p) return 0;
  const K = 0.45 + 0.55 * ((g - p) / Math.max(1e-4, 1 - p));
  return Math.round(255 * Math.min(1, a * _ * K));
}
function Mb(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = gi(Bi(a * 13 + 700, s * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = gi(Bi(c * 23 + 800, d * 29 + 500)), f = gi(Bi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Pb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Rt.has(f)) {
    const K = Rt.get(f);
    return Rt.delete(f), Rt.set(f, K), K;
  }
  Rt.size >= Cu && Rt.delete(Rt.keys().next().value);
  const m = Nu(c, d), _ = m.getContext("2d"), g = _.createImageData(c, d), p = g.data, O = Math.max(0, Math.min(1, r));
  for (let K = 0; K < d; K++)
    for (let H = 0; H < c; H++) {
      const G = kb(H, K, e, t, O, u, l);
      if (G <= 0) continue;
      const x = (K * c + H) * 4;
      p[x] = o, p[x + 1] = a, p[x + 2] = s, p[x + 3] = G;
    }
  return _.putImageData(g, 0, 0), Rt.set(f, m), m;
}
function fh(e, t, r) {
  var g, p;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = _b(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = Nb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = Sb(t, i), d = String(((p = t == null ? void 0 : t.targetSpace) == null ? void 0 : p.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const O = i * s, K = i, H = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), G = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), x = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = xb(O, K, o, a, H, G, x);
  } else if (n === "crayon") {
    const O = i * s, K = i, H = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = Pb(O, K, o, a, H);
  } else
    _ = wb(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: s, angle: l, stampKind: n, scatter: m, latitudeCorrection: u };
}
function Nb(e) {
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
function Cb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function tf(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Au(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Bi(t, r);
    for (let m = 0; m < d; m++) {
      const _ = gi(f + m * 2) * Math.PI * 2, g = Math.sqrt(gi(f + m * 2 + 1)) * u, p = t + Math.cos(_) * g, O = r + Math.sin(_) * g, K = Math.max(0.5, e.radiusPx * i * 0.48), H = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, G = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, x = K * e.aspect * G;
      tf(e, p, O, K, x);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  tf(e, t, r, o, l);
}
function nf(e, t, r) {
  const n = vb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = fh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let m = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(m - s[f - 1].x) > i * 0.5 && (m += m < s[f - 1].x ? i : -i), s.push({ x: m, y: _ });
  }
  if (Au(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], c = s[0], d = s[0], u = 0;
  for (let f = 1; f < s.length; f++) {
    const m = s[f], _ = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = ea(a, d.x, d.y, _.x, _.y, u) : u = Ps(a, l, d, _, m, u), l = c, c = m, d = _;
  }
  s.length === 2 ? ea(a, d.x, d.y, c.x, c.y, u) : Ps(a, l, d, c, c, u), e.restore();
}
function ns(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Cb(t), s = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const m = bb(n[f]);
    let _ = Number(m.x || 0) * i;
    f > 0 && Math.abs(_ - s[f - 1].x) > i * 0.5 && (_ += _ < s[f - 1].x ? i : -i), s.push({ x: _, y: Number(m.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let m = 1; m < s.length; m++) e.lineTo(s[m].x + f, s[m].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Ra(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    ns(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? nf(e, t, r) : (Mo = Br(Mo, r.width, r.height), Wt(Mo), nf(Mo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Mo.canvas, 0, 0), e.restore());
}
function ii(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ea(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Au(e, t + a * d, r + s * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ps(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = s, f = u + l, m = f + c, _ = f - u, g = 16;
  let p = o, O = r.x, K = r.y;
  for (let H = 1; H <= g; H++) {
    const G = u + _ * H / g, x = ((u - G) * t.x + (G - d) * r.x) / (u - d), X = ((u - G) * t.y + (G - d) * r.y) / (u - d), V = ((f - G) * r.x + (G - u) * n.x) / (f - u), re = ((f - G) * r.y + (G - u) * n.y) / (f - u), U = ((m - G) * n.x + (G - f) * i.x) / (m - f), Z = ((m - G) * n.y + (G - f) * i.y) / (m - f), T = ((f - G) * x + (G - d) * V) / (f - d), ue = ((f - G) * X + (G - d) * re) / (f - d), B = ((m - G) * V + (G - u) * U) / (m - u), he = ((m - G) * re + (G - u) * Z) / (m - u), ne = ((f - G) * T + (G - u) * B) / (f - u), me = ((f - G) * ue + (G - u) * he) / (f - u);
    p = ea(e, O, K, ne, me, p), O = ne, K = me;
  }
  return p;
}
function Ab(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let c = t * a;
  if (l && Math.abs(c - l.prev.x) > a * 0.5 && (c += c < l.prev.x ? a : -a), !l) {
    const m = fh(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), p = String((n == null ? void 0 : n.toolKind) || "") === "eraser", O = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Au(m, c, s, 1), e.activeStroke = {
      pprev: { x: c, y: s },
      prev: { x: c, y: s },
      lastMidX: c,
      lastMidY: s,
      stampTex: m.stampTex,
      radiusPx: m.radiusPx,
      spacingPx: m.spacingPx,
      aspect: m.aspect,
      angle: m.angle,
      stampKind: m.stampKind,
      scatter: m.scatter,
      latitudeCorrection: m.latitudeCorrection,
      strokeOpacity: _,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: p,
      layerKind: O,
      pointCount: 1
    }, sn(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ea(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Ps(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: s }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, sn(e);
}
function Iu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Li(t, r), a = {
    descriptor: n,
    committedMask: Li(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: Li(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Li(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function _(B) {
    return {
      actionGroupId: B,
      descriptor: n,
      committedPaint: Li(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(B) {
    let he = i.get(B);
    return he || (he = _(B), i.set(B, he)), he;
  }
  function p(B) {
    return d === "mask" ? a : c ? g(c) : s;
  }
  function O(B) {
    var z;
    const he = !u || u.length !== B.length || B.some((oe, j) => oe !== u[j]), ne = d === "paint" && ((z = c ? i.get(c) : s) == null ? void 0 : z.activeStroke) || null;
    let me = a.displayDirty || s.displayDirty || he;
    for (const oe of B) {
      const j = i.get(oe);
      if (j != null && j.displayDirty) {
        me = !0;
        break;
      }
    }
    if (ne && (me = !0), !me) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const oe of B) {
      const j = i.get(oe);
      j && (j.displayDirty = !1);
    }
    u = [...B];
    const de = l.ctx;
    Wt(l);
    const P = !!(ne != null && ne.isEraser);
    for (const oe of B) {
      const j = i.get(oe);
      if (!j) continue;
      const Pe = c === j.actionGroupId && d === "paint" ? j.activeStroke : null;
      if (P)
        Gt = Br(Gt, t, r), Wt(Gt), Gt.ctx.drawImage(j.committedPaint.canvas, 0, 0), ii(Gt.ctx, o.canvas), de.drawImage(Gt.canvas, 0, 0);
      else if (de.drawImage(j.committedPaint.canvas, 0, 0), Pe) {
        const ie = j.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = ie, de.drawImage(o.canvas, 0, 0), de.restore();
      }
    }
  }
  function K(B) {
    var ne, me, de, P, z;
    for (const oe of i.values())
      Wt(oe.committedPaint), Wt(oe.currentStroke), oe.activeStroke = null, sn(oe);
    Wt(a.committedMask), Wt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), sn(a), sn(s), u = null;
    const he = [
      ...Array.isArray((me = (ne = B == null ? void 0 : B.painting) == null ? void 0 : ne.paint) == null ? void 0 : me.strokes) ? B.painting.paint.strokes : [],
      ...Array.isArray((P = (de = B == null ? void 0 : B.painting) == null ? void 0 : de.mask) == null ? void 0 : P.strokes) ? B.painting.mask.strokes : []
    ];
    for (const oe of he) {
      if (((z = oe == null ? void 0 : oe.targetSpace) == null ? void 0 : z.kind) !== "ERP_GLOBAL") continue;
      const j = String((oe == null ? void 0 : oe.layerKind) || "paint"), Pe = String((oe == null ? void 0 : oe.toolKind) || "pen") === "eraser";
      if (j === "mask") {
        const ie = a.descriptor;
        Pe ? (Gt = Br(Gt, ie.width, ie.height), Wt(Gt), Ra(Gt.ctx, oe, ie), ii(a.committedMask.ctx, Gt.canvas)) : (Ra(a.committedMask.ctx, oe, ie), a.painted = !0);
        continue;
      }
      if (Pe) {
        Gt = Br(Gt, n.width, n.height), Wt(Gt), Ra(Gt.ctx, oe, n);
        for (const ie of i.values())
          ii(ie.committedPaint.ctx, Gt.canvas), sn(ie);
      } else {
        const ie = String((oe == null ? void 0 : oe.actionGroupId) || "__default__"), E = g(ie), ee = E.descriptor;
        Ra(E.committedPaint.ctx, oe, ee), sn(E);
      }
    }
    O([...i.keys()]);
  }
  function H(B, he) {
    d = String((B == null ? void 0 : B.layerKind) || "");
    const ne = String((B == null ? void 0 : B.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Wt(a.currentStroke), a.activeStroke = null, sn(a);
    else {
      const me = ne ? s : g(String((B == null ? void 0 : B.actionGroupId) || "__default__"));
      c = ne ? "" : String((B == null ? void 0 : B.actionGroupId) || "__default__"), Wt(me.currentStroke), me.activeStroke = null, sn(me);
    }
  }
  function G(B, he) {
    var j;
    const ne = String((B == null ? void 0 : B.layerKind) || "paint"), me = String((B == null ? void 0 : B.toolKind) || "") === "eraser", de = ne === "mask" ? a : me ? s : g(String((B == null ? void 0 : B.actionGroupId) || c || "__default__")), P = de.activeStroke, z = de.descriptor;
    if (P && P.pointCount > 1) {
      const fe = de.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: fe,
        stampTex: P.stampTex,
        radiusPx: P.radiusPx,
        spacingPx: P.spacingPx,
        desc: z,
        aspect: P.aspect,
        angle: P.angle,
        stampKind: P.stampKind,
        scatter: P.scatter,
        latitudeCorrection: P.latitudeCorrection
      };
      P.pointCount === 2 ? ea(Pe, P.lastMidX, P.lastMidY, P.prev.x, P.prev.y, P.distSinceStamp) : Ps(Pe, P.pprev, { x: P.lastMidX, y: P.lastMidY }, P.prev, P.prev, P.distSinceStamp);
    }
    de.lassoPreviewActive && (Wt(de.currentStroke), ns(de.currentStroke.ctx, B, z), de.lassoPreviewActive = !1);
    const oe = ne === "mask" ? a.committedMask : de.committedPaint;
    if (me && ne === "paint")
      for (const fe of i.values())
        ii(fe.committedPaint.ctx, de.currentStroke.canvas), sn(fe);
    else if (me)
      ii(oe.ctx, de.currentStroke.canvas);
    else {
      ne === "mask" && (a.painted = !0);
      const fe = Math.max(0, Math.min(1, (P == null ? void 0 : P.strokeOpacity) ?? 1));
      oe.ctx.save(), oe.ctx.globalAlpha = fe, oe.ctx.drawImage(de.currentStroke.canvas, 0, 0), oe.ctx.restore();
    }
    gb() && (String((B == null ? void 0 : B.toolKind) || ""), String((z == null ? void 0 : z.kind) || ""), Number((z == null ? void 0 : z.width) || 0), Number((z == null ? void 0 : z.height) || 0), String(((j = B == null ? void 0 : B.targetSpace) == null ? void 0 : j.viewMode) || ""), Number((B == null ? void 0 : B.aspect) ?? 1), Zd(de.currentStroke.canvas), Zd(oe.canvas), void 0), Wt(de.currentStroke), de.activeStroke = null, sn(de), f.clear(), c = null, d = "", O([...i.keys()]);
  }
  function x(B) {
    if (d === "mask")
      Wt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, sn(a);
    else if (d === "paint" && !c)
      Wt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, sn(s);
    else if (c) {
      const he = i.get(c);
      he && (Wt(he.currentStroke), he.activeStroke = null, he.lassoPreviewActive = !1, sn(he));
    }
    f.clear(), c = null, d = "", O([...i.keys()]);
  }
  function X(B, he) {
    var me;
    if (d = String((B == null ? void 0 : B.layerKind) || ""), String(((me = B == null ? void 0 : B.geometry) == null ? void 0 : me.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Wt(a.currentStroke), ns(a.currentStroke.ctx, B, a.descriptor), a.lassoPreviewActive = !0, sn(a);
      else {
        const de = String((B == null ? void 0 : B.toolKind) || "") === "eraser", P = de ? s : g(String((B == null ? void 0 : B.actionGroupId) || c || "__default__"));
        c = de ? "" : String((B == null ? void 0 : B.actionGroupId) || c || "__default__"), Wt(P.currentStroke), ns(P.currentStroke.ctx, B, P.descriptor), P.lassoPreviewActive = !0, sn(P);
      }
      O([...i.keys()]);
    }
  }
  function V(B) {
    return O(B ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function re(B) {
    return i.get(String(B)) ?? null;
  }
  function U() {
    return [...i.keys()];
  }
  function Z(B) {
    var fe;
    const he = i.get(String(B));
    if (!he) return null;
    const ne = d === "paint" && c === he.actionGroupId, me = d === "paint" && ((fe = c ? i.get(c) : s) == null ? void 0 : fe.activeStroke) || null, de = !!(me != null && me.isEraser), P = ne ? he.activeStroke : null;
    if (!de && !P) return he.committedPaint.canvas;
    const z = `${he.revision}:${s.revision}:${de}`, oe = f.get(he.actionGroupId);
    if ((oe == null ? void 0 : oe.key) === z) return oe.surface.canvas;
    const j = Br((oe == null ? void 0 : oe.surface) ?? null, t, r);
    return Wt(j), j.ctx.drawImage(he.committedPaint.canvas, 0, 0), de ? ii(j.ctx, o.canvas) : (j.ctx.save(), j.ctx.globalAlpha = he.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, P.strokeOpacity ?? 1)), j.ctx.drawImage(o.canvas, 0, 0), j.ctx.restore()), f.set(he.actionGroupId, { key: z, surface: j }), j.canvas;
  }
  function T() {
    const B = d === "mask" ? a.activeStroke : null;
    return !a.painted && (!B || B.isEraser) ? null : `${a.revision}:${!!B}`;
  }
  function ue() {
    const B = T();
    if (B === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === B) return m.surface.canvas;
    const he = Br((m == null ? void 0 : m.surface) ?? null, t, r);
    Wt(he);
    const ne = d === "mask" ? a.activeStroke : null;
    return ne != null && ne.isEraser ? (Gt = Br(Gt, t, r), Wt(Gt), Gt.ctx.drawImage(a.committedMask.canvas, 0, 0), ii(Gt.ctx, o.canvas), Hl(he.ctx, Gt.canvas)) : (Hl(he.ctx, a.committedMask.canvas), ne && Hl(he.ctx, o.canvas)), m = { key: B, surface: he }, he.canvas;
  }
  return {
    rebuildCommitted: K,
    beginStroke: H,
    appendStrokePoint: Ab,
    updateActiveStroke: X,
    commitActiveStroke: G,
    cancelActiveStroke: x,
    getErpTarget: V,
    ensureTarget: p,
    getGroupTarget: re,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: ue,
    getMaskDisplayRevision: T,
    getAllGroupIds: U
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Eu(e, t) {
  let r = $t(t) - $t(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Mc = 3;
function Po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ns(e, t = 0) {
  const r = Po(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Po(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Po(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Po(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Po(t) || 0);
}
function ph(e) {
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
const rf = Math.PI / 180, of = 0.12, Ib = Mc, Eb = 35, Ob = 140, Oo = 100, Fb = 20, af = 0.8;
function Tb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Oo), 1, 179) * rf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / rf;
}
function Ou(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(K, H = null) {
    s && s(K, H);
  }
  function d(K, H, G = null, x = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(K || 0), l.drag.lastY = Number(H || 0), l.drag.lastTs = Number(x || performance.now()), l.drag.pointerId = G, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: G }), !0;
  }
  function u(K, H, G = "pano", x = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(x || performance.now()), V = Number(K), re = Number(H), U = V - l.drag.lastX, Z = re - l.drag.lastY;
    l.drag.lastX = V, l.drag.lastY = re, l.drag.lastTs = X;
    const T = n() || { x: 1, y: 1 }, ue = Number(T.x || 1), B = Number(T.y || 1), he = { ...t() };
    let ne = 0, me = 0;
    if (G === "unwrap") {
      const P = i() || { w: 1, h: 1 }, z = Math.max(1, Number(P.w || 1)), oe = Math.max(1, Number(P.h || 1)), j = U / z, fe = Z / oe;
      ne = -j * 360 * ue, me = fe * 180 * B;
    } else {
      const P = o() || { w: 0, h: 0 }, z = Math.max(1, Number(P.w || 0)), oe = Math.max(1, Number(P.h || 0));
      if (z > 1 && oe > 1) {
        const j = Ee(Number(he.fov || Oo), 1, 179), fe = Ee(Tb(j, z, oe), 0.1, 179);
        ne = -(U / z) * j * ue, me = Z / oe * fe * B;
      } else
        ne = -U * of * ue, me = Z * of * B;
    }
    he.yaw = $t(Number(he.yaw || 0) + ne), he.pitch = Ee(Number(he.pitch || 0) + me, -89.9, 89.9), r(he), l.velHistory.push({ ts: X, yaw: he.yaw, pitch: he.pitch });
    let de = 0;
    for (; de < l.velHistory.length - 1 && l.velHistory[de].ts < X - 100; ) de++;
    return de > 0 && l.velHistory.splice(0, de), l.inertia.active = !1, l.inertia.lastTs = X, a(), c("drag", { phase: "move", dx: U, dy: Z, dYaw: ne, dPitch: me }), !0;
  }
  function f(K = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const H = Number(K || performance.now());
    l.drag.lastTs = H;
    const G = l.velHistory.filter((X) => H - X.ts <= 80);
    if (G.length >= 2) {
      const X = G[0], V = G.at(-1), re = Math.max(1e-3, (V.ts - X.ts) / 1e3);
      let U = V.yaw - X.yaw;
      U > 180 && (U -= 360), U < -180 && (U += 360), l.inertia.vx = U / re, l.inertia.vy = (V.pitch - X.pitch) / re;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const x = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = x > Fb, l.inertia.lastTs = H, c("drag", { phase: "end", speed: x, inertiaActive: l.inertia.active }), !0;
  }
  function m(K = performance.now()) {
    if (!l.inertia.active) return !1;
    const H = Number(K || performance.now()), G = Math.max(1e-3, (H - (l.inertia.lastTs || H)) / 1e3);
    l.inertia.lastTs = H;
    const x = { ...t() };
    x.yaw = $t(Number(x.yaw || 0) + l.inertia.vx * G), x.pitch = Ee(Number(x.pitch || 0) + l.inertia.vy * G, -89.9, 89.9);
    const X = Math.exp(-5.5 * G);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < af && Math.abs(l.inertia.vy) < af && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(x), a(), l.inertia.active;
  }
  function _() {
    const K = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], K;
  }
  function g(K) {
    const H = Math.sign(Number(K || 0));
    if (!H) return !1;
    const G = { ...t() }, x = Number(G.fov || Oo);
    return G.fov = Ee(x + H * Ib, Eb, Ob), r(G), a(), c("wheel", { deltaSign: H, fovBefore: x, fovAfter: G.fov }), !0;
  }
  function p(K, H = 0) {
    return g(Ns(K, H));
  }
  function O() {
    r({ yaw: 0, pitch: 0, fov: Oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: _,
    applyWheel: g,
    applyWheelEvent: p,
    resetView: O
  };
}
const wt = Math.PI / 180, Jt = 180 / Math.PI;
function Wn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Cs(e, t) {
  return Wn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function As(e, t) {
  return Wn(e.x * t, e.y * t, e.z * t);
}
function Gl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Fu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wn(e.x / t, e.y / t, e.z / t);
}
function Nn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Wn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function oo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Wn(
      a * d - s * c * u,
      l * u,
      -s * d - a * c * u
    ),
    up: Wn(
      -a * u - s * c * d,
      l * d,
      s * u - a * c * d
    ),
    fwd: Wn(s * l, c, a * l)
  };
}
function Is(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Nt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Db() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Lb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Nt(n.z_index ?? n.zIndex, t.length);
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
function Rb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Vb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Nt(e.t, 0), n = Nt(e.widthScale, null), i = Nt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Nt(e.u, null), a = Nt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Nt(e.u, null), a = Nt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function Va(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Vb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function $b(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Va(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Va(e.points, t, 1);
  if (!o) return null;
  const a = Va(e.rawPoints, t, 1), s = Va(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function zb(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Rb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = $b(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Nt(e.size, null), a = Nt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const c = Nt(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Nt(f.r, 0))),
      g: Math.max(0, Math.min(1, Nt(f.g, 0))),
      b: Math.max(0, Math.min(1, Nt(f.b, 0))),
      a: Math.max(0, Math.min(1, Nt(f.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: Nt(e.hardness, null),
    flow: Nt(e.flow, null),
    spacing: Nt(e.spacing, null),
    createdAt: Math.trunc(Nt(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function sf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = zb(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function jb(e) {
  if (!e || typeof e != "object") return null;
  const t = Nt(e.u0, null), r = Nt(e.v0, null), n = Nt(e.u1, null), i = Nt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function Hb(e) {
  const t = e || {};
  return {
    du: Nt(t.du, 0) ?? 0,
    dv: Nt(t.dv, 0) ?? 0,
    rot_deg: Nt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Nt(t.scale, 1) ?? 1)
  };
}
function Gb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = jb(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Nt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Hb(e.transform)
  } : null;
}
function Wb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Gb(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function ao(e) {
  const t = Db();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Lb(e.groups),
    paint: sf(e.paint, "paint"),
    mask: sf(e.mask, "mask"),
    raster_objects: Wb(e.raster_objects)
  };
}
const Kn = 1, Un = 179, Pc = 85;
function dl(e) {
  const t = ((at(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function hh(e, t) {
  let r = at(e, 0) - at(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function mh(e, t, { shiftKey: r = !1 } = {}) {
  let n = at(e, 0) + at(t, 0) * Jt;
  return r && (n = Math.round(n / 15) * 15), dl(n);
}
function at(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Zr(e = {}) {
  const t = Ee(at(e.hFOV_deg || 90, 90), Kn, Un), r = Ee(at(e.vFOV_deg || 60, 60), Kn, Un), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
  return {
    yawDeg: at(e.yaw_deg, 0),
    pitchDeg: at(e.pitch_deg, 0),
    rollDeg: at(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function _i(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Zr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Tu(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, at(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Du(e, t) {
  const r = Math.max(1e-12, at(t, 1)), n = Math.max(1e-6, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * Jt, Kn, Un), a = Ee(2 * Math.atan(i / (2 * r)) * Jt, Kn, Un);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Kb(e, t, r) {
  const n = at(e == null ? void 0 : e.x, 0), i = at(e == null ? void 0 : e.y, 0), o = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Zr(t), l = Math.max(1e-12, at(r, 1)), c = 2 * l * s.tanHalfX, d = 2 * l * s.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (a - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function Lu(e, t, r = Pc) {
  const n = Math.max(1e-12, at(t, 1)), i = Ee(at(r, Pc), 1, 89.999), o = n * Math.tan(i * wt), a = Math.max(1, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function gh(e, t, r) {
  const n = Math.max(1e-12, at(t, 1));
  return {
    x: (at(r == null ? void 0 : r.x, 0) - at(e == null ? void 0 : e.x, 0)) / n,
    y: -(at(r == null ? void 0 : r.y, 0) - at(e == null ? void 0 : e.y, 0)) / n
  };
}
function Ub(e, t) {
  const r = Ee(at(e, 90), Kn, Un), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * Jt,
    Kn,
    Un
  );
}
function rs(e, t) {
  const r = Ee(at(e, 60), Kn, Un), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * Jt,
    Kn,
    Un
  );
}
function lf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Bb(e, t) {
  const r = lf(e, 1), n = lf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (c, d) => d ? s(d, c % d) : c, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function ki(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function yi(e) {
  const t = ki(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Bb(t, 1);
}
function Ru(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = yi(t), t;
}
function yh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Kn, Un) : Ee(Math.min(42, at(i, 100) * 0.42), 8, 96);
  return Ru({
    id: String(e),
    label: "Frame 1",
    yaw_deg: at(t, 0),
    pitch_deg: Ee(at(r, 0), -89.9, 89.9),
    roll_deg: dl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Or(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : yi(e);
}
function bh(e, t) {
  const r = Zr(e), n = at(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Jt, o = 2 * Math.atan(r.tanHalfY * n) * Jt;
  return i < Kn || i > Un || o < Kn || o > Un ? null : { hFOV_deg: i, vFOV_deg: o };
}
function vh(e, t, r = Mc) {
  const n = Math.sign(at(t, 0)), i = Math.abs(at(r, Mc));
  if (!n || !(i > 0)) return null;
  const o = Zr(e), a = o.hFovDeg + n * i;
  if (a < Kn || a > Un) return null;
  const s = Math.tan(a * wt * 0.5);
  return bh(e, s / o.tanHalfX);
}
function _h(e, t) {
  const r = Zr(e), n = oo(r.yawDeg, r.pitchDeg, r.rollDeg), i = at(t == null ? void 0 : t.x, 0), o = at(t == null ? void 0 : t.y, 0);
  return Fu(Cs(Cs(n.fwd, As(n.right, i)), As(n.up, o)));
}
function Yb(e) {
  return Wn(e.x, e.y, -e.z);
}
function is(e) {
  return Wn(e.x, e.y, -e.z);
}
function Sn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = oo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Sh(e) {
  const t = is(Wn(e[0][0], e[1][0], e[2][0])), r = is(Wn(e[0][1], e[1][1], e[2][1])), n = is(Wn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * Jt, pitchDeg: o * Jt, rollDeg: l * Jt };
}
function ta(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function Qr(e) {
  const [[t, r, n], [i, o, a], [s, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - a) * f, y: (n - s) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + s) / f, w: (l - a) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (a + l) / f, w: (n - s) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + s) / u, y: (a + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function $a(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const fi = 1e-6, Nc = 1e-6, qb = 1e-9;
function na(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function Xb(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (a + s);
    na(0, r, i, 1, c) < t ? a = c : s = c;
  }
  return na(0, n, o, 1, 0.5 * (a + s));
}
function eo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function to(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, m, _) => f + m * s[_], 0) < 0) return r.map(() => 0);
  const l = a.map((f, m) => (f * o + s[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, _) => m + _ * _, 0)), d = 3 * Math.min(c(a), c(s)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function wh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((d, u) => o[u] - d);
  let l = s;
  eo(e, n) && (l = to(t, n, r[n - 1].map((d, u) => d - i[u]), s).map((d) => d * a));
  let c = s;
  return eo(e, n + 1) && (c = to(t, n + 1, s.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * a)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function xh(e, t, r, n, i) {
  const [[o], [a]] = wh(e, t, r.map((s) => [s]), n);
  return na(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function Jb(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, a] = wh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, a = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => na(s[u], s[u] + o[u], l[u] + a[u], l[u], n));
}
function Es([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function Zb(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Wl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Qb([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Cc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ji(e, t) {
  return Qb(Es([-e[0], -e[1], -e[2], e[3]], t));
}
function Kl(e, t, r) {
  return Es(e, Cc(ji(e, t).map((n) => r * n)));
}
function Ul(e, t) {
  const r = Zb(e, t);
  if (Math.abs(r) > Nc) return r < 0;
  const [n, i, o] = ji(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Nc) return a < 0;
  return !1;
}
function za(e) {
  const { x: t, y: r, z: n, w: i } = Qr(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Ac(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function e1(e, t, r, n) {
  const i = za(e[r].value);
  let o = za(e[r + 1].value);
  Ul(i, o) && (o = Wl(o));
  const a = t[r + 1] - t[r], s = ji(i, o);
  let l = s;
  if (eo(e, r)) {
    let x = za(e[r - 1].value);
    Ul(x, i) && (x = Wl(x)), l = to(t, r, ji(i, x), s).map((X) => X * a);
  }
  let c = s;
  if (eo(e, r + 1)) {
    let x = za(e[r + 2].value);
    Ul(o, x) && (x = Wl(x)), c = to(t, r + 1, ji(o, i), ji(o, x)).map((X) => X * a);
  }
  const d = Es(i, Cc(l.map((x, X) => 0.5 * (x - s[X])))), u = Es(o, Cc(s.map((x, X) => 0.5 * (x - c[X])))), [f, m, _, g] = Kl(Kl(i, o, n), Kl(d, u, n), 2 * n * (1 - n)), { yawDeg: p, pitchDeg: O, rollDeg: K } = Sh(ta({ x: f, y: m, z: _, w: g })), H = e[r].value, G = e[r + 1].value;
  return {
    yaw_deg: Ac(p, H.yaw_deg, G.yaw_deg, n),
    pitch_deg: O,
    roll_deg: Ac(K, H.roll_deg, G.roll_deg, n)
  };
}
function ra(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Os(e) {
  return Math.sqrt(ra(e, e));
}
function Fs(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function kh(e, t) {
  const r = ra(e, t), n = t.map((a, s) => a - r * e[s]), i = Os(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Ri(e, t) {
  const r = Os(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ja(e, t, r) {
  return Ri(e, kh(e, t).map((n) => r * n));
}
function Bl(e, t) {
  const r = Fs(e[t].value), n = Fs(e[t + 1].value), i = ra(r, n), o = i < 0 && Os(n.map((l, c) => l - i * r[c])) <= Nc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = kh(r, n);
  const s = Os(a);
  return [a, a.map((l, c) => Math.cos(s) * l - s * Math.sin(s) * r[c]), o];
}
function t1(e, t, r, n) {
  const i = Fs(e[r].value), o = Fs(e[r + 1].value), [a, s, l] = Bl(e, r);
  let c = a, d = s;
  const u = t[r + 1] - t[r];
  eo(e, r) && (c = to(t, r, Bl(e, r - 1)[1].map((H) => -H), c).map((H) => H * u)), eo(e, r + 1) && (d = to(t, r + 1, d.map((H) => -H), Bl(e, r + 1)[0]).map((H) => H * u));
  let f, m, _;
  if (l) {
    const H = Math.PI, G = na(0, ra(c, a) / H / 3, H - ra(d, s) / H / 3, H, n);
    [f, m, _] = Ri(i, a.map((x) => G * x / H));
  } else {
    const H = ja(Ri(i, c.map((X) => X / 3)), Ri(o, d.map((X) => -X / 3)), n), G = ja(Ri(i, c.map((X) => n * X / 3)), H, n), x = ja(H, Ri(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, m, _] = ja(G, x, n);
  }
  const g = Math.hypot(f, _), p = e[r].value.yaw_deg, O = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= qb ? p + (O - p) * n : Ac(Math.atan2(f, _) * 180 / Math.PI, p, O, n), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function n1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = xh(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function r1(e, t, r, n) {
  return xh(e, t, e.map((i) => i.value), r, n);
}
const i1 = { position: Jb, rotation: e1, direction: t1, size: n1 };
function Ht(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return $a(e[t].value);
  if (r <= n[0].frame + fi) return $a(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - fi) return $a(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + fi; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= fi || a.easing === "hold") return $a(a.value);
  const s = n.map((c) => c.frame), l = Xb(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (i1[t] ?? r1)(n, s, o, l);
}
function Ic(e) {
  return Math.min(179, Math.max(0.1, e));
}
function o1(e) {
  return Math.min(1, Math.max(0, e));
}
function Mh(e) {
  return Math.max(1e-6, e);
}
function Ph(e, t) {
  return t - (e.start - e.in);
}
function so(e, t) {
  return t >= e.start - fi && (e.duration === null || t < e.start + e.duration - fi);
}
function ga(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: Ic(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function fl(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Ph(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : ga(n, r),
    scene: {
      active: i.visible && so(i.clip, r),
      clip_frame: o,
      position: Ht(i, "position", o),
      ...Ht(i, "rotation", o),
      scale: Mh(Ht(i, "scale", o))
    },
    stickers: e.stickers.map((a) => Si(a, r))
  };
}
function a1(e, t) {
  if (e.placement === "world")
    return {
      position: Ht(e, "position", t),
      ...Ht(e, "rotation", t),
      scale: Mh(Ht(e, "scale", t))
    };
  const r = Ht(e, "size", t);
  return {
    ...Ht(e, "direction", t),
    roll_deg: Ht(e, "roll", t),
    hFOV_deg: Ic(r.hFOV_deg),
    vFOV_deg: Ic(r.vFOV_deg)
  };
}
function Si(e, t) {
  const r = Ph(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && so(e.clip, t),
    clip_frame: r,
    ...a1(e, r),
    opacity: o1(Ht(e, "opacity", r))
  };
}
const s1 = 2, l1 = ["sky", "world"], Ec = ["perspective", "erp"], c1 = ["input", "output", "temp"], Nh = [0.42, 0, 0.58, 1], Ch = 1, Vu = 1e3, Oc = 1e7, $u = Oc;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ut(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function zu(e, t) {
  const r = Ut(e, t);
  return r !== null && r > 0 ? r : t;
}
function In(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function pl(e) {
  const t = Ut(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function os(e) {
  const t = pl(e);
  return t === null ? null : In(t, -Oc, Oc);
}
function lo(e) {
  const t = zu(e, null);
  return t === null ? null : In(t, Ch, Vu);
}
function Ah(e) {
  const t = pl(e);
  return t !== null && t >= 1 ? Math.min(t, $u) : null;
}
function ia(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ih(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Ut(r, null));
  return t.includes(null) ? null : t;
}
function Eh(e) {
  return Ih(e) || [0, 0, 0];
}
function Oh(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Ut(t.yaw_deg, 0),
    pitch_deg: In(Ut(t.pitch_deg, 0), -90, 90),
    roll_deg: Ut(t.roll_deg, 0)
  };
}
function u1(e) {
  return In(Ut(e, 90), 0.1, 179);
}
function d1(e) {
  return zu(e, 1);
}
function f1(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Ut(t.yaw_deg, 0),
    pitch_deg: In(Ut(t.pitch_deg, 0), -90, 90)
  };
}
function p1(e) {
  return Ut(e, 0);
}
function h1(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: In(Ut(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: In(Ut(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Fh(e) {
  return In(Ut(e, 1), 0, 1);
}
const hl = [["position", Eh], ["rotation", Oh], ["fov", u1]], ml = [["position", Eh], ["rotation", Oh], ["scale", d1]], ju = [["direction", f1], ["roll", p1], ["size", h1], ["opacity", Fh]], Hu = [...ml, ["opacity", Fh]];
function m1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Ut(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Nh];
}
function g1(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Ih(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function y1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = os(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: m1(i.easing) }, s = r ? g1(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Gu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: y1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Th(e) {
  const t = tn(e) ? e : {}, r = os(t.start), n = os(t.in), i = os(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function b1(e) {
  const t = tn(e) ? e : {}, r = In(Ut(t.x0, 0), 0, 1), n = In(Ut(t.y0, 0), 0, 1), i = In(Ut(t.x1, 1), 0, 1), o = In(Ut(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function v1(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: c1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function _1(e) {
  const t = v1(e.source);
  if (!t) return null;
  const r = l1.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Th(e.clip),
    visible: ia(e.visible, !0),
    locked: ia(e.locked, !1),
    crop: b1(e.crop),
    ...Gu(e, n ? Hu : ju)
  };
  return n || (i.z_index = pl(e.z_index) ?? 0), i;
}
function S1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = tn(o) ? _1(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (r) continue;
        r = !0;
      }
      t.push(a);
    }
  }
  const n = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !n.has(o.id) ? n.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; n.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, n.add(o.id);
    }
  return t;
}
function Dh(e) {
  if (!tn(e)) return null;
  const t = Ec.includes(e.projection) ? e.projection : Ec[0];
  return { aspect: zu(e.aspect, 1), projection: t, visible: ia(e.visible, !0), ...Gu(e, hl) };
}
function Wu() {
  return Dh({});
}
function Ts(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: s1,
    timeline: {
      fps: lo(t.fps) ?? 24,
      length: Ah(t.length)
    },
    camera: Dh(e.camera),
    scene: { clip: Th(r.clip), visible: ia(r.visible, !0), ...Gu(r, ml) },
    stickers: S1(e.stickers),
    painting: ao(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ia(e.painting_visible, !0)
  };
}
function w1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function x1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const r = In(Ut(t.hFOV_deg, 90), 1, 179), n = In(Ut(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function k1(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Ut(n.z_index, 0) - Ut(i.z_index, 0)), Ts({
    camera: x1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: w1(n, t),
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
function mr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ts({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? k1(t) : Ts(t);
}
const Yl = {
  state: { painting_visible: !0 },
  camera: { projection: Ec[0], visible: !0 },
  scene: { visible: !0 }
};
function ql(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Fc(e) {
  return JSON.stringify({
    ...ql(e, Yl.state),
    camera: e.camera && ql(e.camera, Yl.camera),
    scene: ql(e.scene, Yl.scene)
  });
}
function Xl(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function cf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function oa(e, t) {
  const r = lo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => pl(s * n), { length: o } = e.timeline, a = cf(e.scene.clip, i);
  return Ts({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Xl(e.camera, hl, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Xl(e.scene, ml, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: c, newAnchor: d } = cf(s.clip, i), u = s.placement === "world" ? Hu : ju;
      return { ...s, clip: l, ...Xl(s, u, i, c, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Jl(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Lh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Rh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= fi);
}
function Vh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Lh(e.keyframes[n - 1].easing) : [...Nh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function pn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Jl(i.value, n);
    return;
  }
  const o = Rh(i, r);
  o ? o.value = Jl(o.value, n) : Vh(i, r, Jl(Ht(e, t, r), n));
}
function co(e) {
  return e.placement === "world" ? Hu.map(([t]) => t) : e.placement === "sky" ? ju.map(([t]) => t) : (e.clip ? ml : hl).map(([t]) => t);
}
function M1(e, t) {
  for (const r of co(e))
    Rh(e[r], t) || Vh(e[r], t, Ht(e, r, t));
}
function P1(e) {
  const t = co(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Zl(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function N1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function C1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Ht(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function A1(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), c = new Set(l.map((d) => d.frame));
    s.keyframes = [
      ...s.keyframes.filter((d) => !o.has(d.frame) && !c.has(d.frame)),
      ...l
    ].sort((d, u) => d.frame - u.frame);
  }
  return n;
}
function $h(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function I1(e, t, r) {
  const n = $h(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function E1(e, t, r, n) {
  for (const i of $h(e, t, r)) i.easing = Lh(n);
}
function O1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function F1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function T1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function D1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Ds(e) {
  return co(e).map((t) => e[t]);
}
function L1(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Ds(e.camera).some((n) => n.keyframes.length > 0) : zh(e, { camera: r });
}
function Ls(e) {
  return Ds(e).some((t) => t.keyframes.length > 0) || !!e.clip && !D1(e.clip);
}
function zh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ls);
}
const R1 = 1e5;
function jh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Ds(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Ds(a))
      for (const c of l.keyframes) o = Math.max(o, s.start - s.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : R1;
}
function V1(e) {
  return e > 0 ? lo(Math.min(e, Vu)) : null;
}
function $1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Ah(Math.max(1, Math.min(e, $u)));
}
const Ql = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], z1 = 2e3;
function j1(e, t, r = 56) {
  const n = Ql.find((o) => o * t >= r) || Ql[Ql.length - 1], i = [];
  for (let o = 0; o < e && i.length < z1; o += n) i.push(o);
  return i;
}
function H1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Ha = { text: null, parsed: null };
function En(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Rs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function G1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: En(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ao(null),
    painting_layer: null,
    ui_settings: Rs(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Hh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function W1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function K1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function U1(e) {
  return Array.isArray(e) ? e.map((t) => Ru(t)) : [];
}
function B1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Gh(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = G1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Ha.text === i ? o = Ha.parsed : (o = JSON.parse(i), Ha = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: W1(o.assets),
      stickers: K1(o.stickers),
      shots: U1(o.shots),
      painting: ao(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Rs(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Rs({ ...s.ui_settings, ...a })), s.output_preset = Hh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = En(r.coverage), delete s.editor_history, s;
  } catch {
    return Ha = { text: i, parsed: null }, n;
  }
}
function Y1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function q1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function X1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Wh(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, c = lo(t.fps);
  let d;
  try {
    d = mr(e);
  } catch {
    d = mr(null);
  }
  c && c !== d.timeline.fps && (d = oa(d, c));
  const u = l && d.camera === null;
  if (u && (d = { ...d, camera: Wu() }), s) {
    let f = mr(s);
    c && c !== f.timeline.fps && (f = oa(f, c)), d = { ...f, camera: d.camera, cutout_state: d };
  }
  return {
    ...d,
    ...u ? { default_camera: !0 } : {},
    coverage: En(i),
    bg_color: n,
    output_preset: Hh(r),
    ui_settings: Rs(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function J1(e, t) {
  e.cutout_state && (e.cutout_state = oa(e.cutout_state, t));
  const r = oa(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of co(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Ku(e, t) {
  const r = Si(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const Z1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function uf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function Q1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Z1[r]].keyframes.length));
}
function Kh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = uf(r, ["yaw_deg", "pitch_deg"]), o = uf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && pn(e, "direction", n, i), r.rot_deg !== void 0 && pn(e, "roll", n, r.rot_deg), Object.keys(o).length && pn(e, "size", n, o);
}
const gl = ["position_x", "position_y", "position_z"], yl = "camera";
function Uh(e, t) {
  const r = ga(e, t);
  return Ru({
    id: yl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Ub(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function ev(e) {
  return mr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function tv(e) {
  return e - 360 * Math.round(e / 360);
}
function nv(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + tv(r[o] - n[o]));
  Object.keys(i).length && pn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && pn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && pn(e, "position", t, [...r.position]);
}
function rv(e, t) {
  const r = Ht(e, "position", t), n = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(gl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function iv(e, t, r, n) {
  const i = gl.indexOf(r);
  if (i >= 0) {
    const o = Ht(e, "position", t);
    o[i] = n, pn(e, "position", t, o);
  } else r === "hFOV_deg" ? pn(e, "fov", t, n) : pn(e, "rotation", t, { [r]: n });
}
function ov(e, t, r) {
  pn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function av(e, t) {
  const r = Si(e, t);
  return {
    ...Object.fromEntries(gl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function sv(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = gl.indexOf(r);
  if (o >= 0) {
    const a = Ht(e, "position", i);
    a[o] = n, pn(e, "position", i, a);
  } else r === "scale" ? pn(e, "scale", i, n) : r === "opacity" ? pn(e, "opacity", i, n / 100) : pn(e, "rotation", i, { [r]: n });
}
function lv(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && pn(e, i, n, r[i]);
}
function cv(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function uv(e, t, r) {
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
function as(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Bh(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Uu(e, t, r, n) {
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
function dv(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = $t(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Tc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Yh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function qh(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Xh(e) {
  e.default_camera && JSON.stringify(mr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Wu()) && delete e.default_camera;
}
function Jh(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = mr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Wu()) && (r.camera = null), Fc(r);
}
function Zh(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = mr(r);
    if (Fc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Fc(oa(i, o)) === t;
  } catch {
    return !1;
  }
}
const ec = 0.15, fv = 0.01, pv = 1e-3, hv = 0.05, mv = 4, df = 250, gv = 16, er = 1, yv = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Vn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function gr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function bl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function uo(e, t, r = 0) {
  const n = Sn(e, t, r), i = gr(n, 2);
  return { right: gr(n, 0), up: gr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function bv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Dc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function vv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Dc(e, "3dof", r);
}
function _v(e) {
  return uo(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function Sv(e) {
  return Vn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ei(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Uo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Bu(e, t) {
  return Uo(ei(t, e.position), uo(e.yaw_deg, e.pitch_deg).forward);
}
function Yu(e) {
  return Math.max(e, 1e-6) * hv;
}
function Lc(e, t, r = null, n = er) {
  if (t) return t;
  const i = Yu(n);
  if (r && Bu(e, r) > 0) {
    const o = ei(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Vn(e.position, o, i / a);
  }
  return Vn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Qh(e, t = er) {
  return Math.max(e.distance, Yu(t));
}
function em(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > mv ? !1 : t.time - e.time < df || e.cost > gv && t.time - e.wheelTime < df;
}
function qu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function tm(e, t, r, n, i = Sv(e)) {
  const o = e.roll_deg ?? 0, [a, s] = wv(t, r, o), l = $t(e.yaw_deg + a / n * 360), c = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), d = Sn(e.yaw_deg, e.pitch_deg, o), u = Sn(l, c, o), f = ei(e.position, i), m = [0, 1, 2].map((g) => Uo(gr(d, g), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: Vn(i, bl(u, m)) };
  return { ..._, distance: Bu(_, i) };
}
function wv(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function nm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = _v(e), l = 2 * o * qu(e, n, i).tanY / i;
  return { ...e, position: Vn(Vn(e.position, a, -t * l), s, r * l), distance: o };
}
function rm(e, t, r, n = er) {
  const i = ei(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * fv, l = r > 0 ? Math.min(Math.max(o * ec, s), o - a * pv) : -Math.max(o * ec / (1 - ec), s);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Vn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Bu(c, t), Yu(n)) };
}
function im(e, t, r, n) {
  const { tanX: i, tanY: o } = qu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = uo(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Vn(t.center, l, -s), distance: s };
}
function Xu(e, t, r, n = null) {
  return om({
    quaternion: Qr(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(qu(e, t, r).tanY) * Jt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function om(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: er }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function aa(e, t, r, n) {
  const { right: i, up: o, forward: a } = am(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function am(e) {
  const t = ta(e.quaternion), r = gr(t, 2);
  return { right: gr(t, 0), up: gr(t, 1), forward: r.map((n) => -n) };
}
function ff(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function xv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function sm(e, t) {
  if (!e || !t.active) return null;
  const r = Pv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Rc(t),
    itemQuaternion: e.kind === "splat" ? yv : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function kv(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = sm(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function Mv(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Pv(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Rc(e) {
  return {
    position: [...e.position],
    quaternion: Qr(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Vc(e, t) {
  return Vn(e.position, bl(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function $c(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function zc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function jc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function Nv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...zc(t).map((o) => Vc(e.scene, o)));
  for (const o of r) i.push(...Ju(o));
  for (const { box: o, value: a } of n) i.push(...zc(o).map((s) => Vc(a, s)));
  return i;
}
function Cv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: Qr(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Sn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Ju(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Vn(e.position, bl(e.rotation, [n, i, 0])));
}
function Av(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? jc(Ju(i)) : o != null && o.box ? jc(zc($c(o.kind, o.box)).map((a) => Vc(n, a))) : { center: [...n.position], radius: n.scale };
}
const Iv = 2, Ev = 0.5, Ov = 30;
function lm(e, t) {
  const r = ei(t, e), n = Math.atan2(r[0], -r[2]) * Jt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Jt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function Fv(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * Ev : Iv, o = t ? [...t] : Vn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...ei(o, e.position)), s = a > 0 ? lm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Ov * 0.5 * wt);
  return { position: o, rotation: s, scale: l };
}
function pf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function Tv(e) {
  return [0, 1, 2].map((t) => gr(e, t));
}
function hf(e, t, r, n) {
  if (e === "translate") return { position: Vn(t.position, ei(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * $v(r.scale, n.scale) / r.scale };
  const i = pf(ta(n.quaternion), Tv(ta(r.quaternion))), o = pf(i, Sn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Sh(o);
  return Math.abs(s) <= Dv ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Lv(o, t.yaw_deg) } };
}
const Dv = 89.9;
function Lv(e, t) {
  const r = gr(e, 0), n = gr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Jt + 0;
}
const Rv = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Vv(e, t, r, n, i) {
  if (!aa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = am(e), l = ei(t, e.position), c = Uo(l, o), d = Uo(l, a), u = Uo(l, s), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect, _ = Math.hypot(c, d, u) * Rv[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (G) => {
    const x = _ * Math.sqrt(G * G + u * u - _ * _);
    return [(G * u - x) / (u * u - _ * _), (G * u + x) / (u * u - _ * _)];
  }, [p, O] = g(c), [K, H] = g(d);
  return {
    minX: n * 0.5 * (1 + p / m),
    maxX: n * 0.5 * (1 + O / m),
    minY: i * 0.5 * (1 - H / f),
    maxY: i * 0.5 * (1 - K / f)
  };
}
function $v(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function zv(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function cm(e, t) {
  const r = Sn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Vn(e.position, bl(r, [c, d, u])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((c) => [e.position, c]);
  a.forEach((c, d) => s.push([c, a[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function jv(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = aa(e, a, n, i), c = aa(e, s, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ee(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function Hv(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function Gv(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ht(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Ht(n, "position", l);
  });
}
function Wv(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const um = 0.28;
function dm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: Qr(Sn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Jt,
    aspect: n
  };
}
function Bo(e) {
  const t = Zr(e);
  return {
    quaternion: Qr(Sn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function fm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Lu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * Jt,
      vFOV_deg: 2 * Math.atan(o / n) * Jt
    }
  };
}
function pm(e, t, r) {
  const [[n, i, o], [a, s, l], [c, d, u]] = ta(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, g = 1e-4) {
      const p = Yb(_), O = n * p.x + a * p.y + c * p.z, K = i * p.x + s * p.y + d * p.z, H = -(o * p.x + l * p.y + u * p.z), G = Math.max(H, g);
      return {
        x: t * 0.5 * (1 + O / G / m),
        y: r * 0.5 * (1 - K / G / f),
        z: H
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, g) {
      const p = (_ / t * 2 - 1) * m, O = (1 - g / r * 2) * f;
      return Fu(is({
        x: n * p + i * O - o,
        y: a * p + s * O - l,
        z: c * p + d * O - u
      }));
    }
  };
}
function Kv(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = fl(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const c = o.stickers[l];
    if (s.placement !== "sky") return;
    const d = s.source.kind === "port" && !s.visible;
    if (!c.active && !d) return;
    const u = r(s);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), m = Math.tan(c.vFOV_deg * 0.5 * wt), { crop: _ } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? um : c.opacity,
      zIndex: n(s),
      quaternion: Qr(Sn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * m,
        y1: (1 - 2 * _.y0) * m
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function hm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return Kv(e, t, {
    media: (s) => {
      const l = a.get(s.id);
      return l ? n(l) : null;
    },
    zIndex: (s) => {
      var l;
      return Number(((l = a.get(s.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function Uv(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Bv(e, t, r, { media: n, evaluated: i = fl(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const c = i.stickers[l];
    if (s.placement !== "world" || !c.active) return;
    const d = o.get(s.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: m } = Uv(u.media), _ = Cv(c, s.crop, f, m);
    _ && a.push({
      id: s.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: _.position,
      quaternion: _.quaternion,
      rotation: _.rotation,
      width: _.width,
      height: _.height,
      crop: s.crop
    });
  }), a;
}
function Yv({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-rqsRRT9z.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, d = 0;
  const u = () => {
    l = dh(s.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    resize(g, p) {
      return l && !f.lost ? l.resize(g, p) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, p) {
      l && !f.lost && l.clear(g, p);
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
    pick(g, p, O, K, H) {
      return l && !f.lost ? l.pick(g, p, O, K, H) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, p, O, K, H) {
      return l && !f.lost ? l.pickSurface(g, p, O, K, H) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, p, O, K, H) {
      return l && !f.lost ? l.pickSticker(g, p, O, K, H) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, p, O, K, H, G) {
      return l && !f.lost ? l.gizmoPointer(g, p, O, K, H, G) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", _), l == null || l.dispose(), l = null;
    }
  };
  function m(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function _() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", _), a().then((g) => {
    c || (s = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const mm = "3D view unavailable. Check the browser console.";
function Vs(e, t, r) {
  return dm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function qv(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((a) => {
      if (r = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const l = { onChange: s };
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
const gm = qv(
  () => import("./.lazy/pano_three_view-rqsRRT9z.js").then((e) => e.$).then((e) => dh(e.createThreeView({ createCanvas: () => mn({ label: "three.node" }) }), "node"))
), tr = ["erp_image", "bg_erp", "bg_media"], ss = ["source"], Zu = ["sticker_image", "sticker"], ym = ["scene"], Xv = {
  background: [...tr, ...ss],
  "external-sticker": [...Zu, ...ss],
  scene: [...ym, ...ss]
};
function bm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function vl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = bm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function vm(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function _m(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function Jv(e, t) {
  const { graph: r, entry: n } = _m(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = bm(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Sm = [...tr, ...Zu, ...ym, ...ss], Zv = 256, Vi = /* @__PURE__ */ new Map(), tc = /* @__PURE__ */ new WeakMap();
let wm = () => null;
function xm(e) {
  return tc.has(e) || tc.set(e, JSON.stringify(e)), tc.get(e);
}
function Qv(e) {
  wm = e;
}
function $s(e, t) {
  const r = xm(e);
  Vi.delete(r), Vi.set(r, t), Vi.size > Zv && Vi.delete(Vi.keys().next().value);
}
function en(e, t) {
  var o;
  const r = e ? wm(e) : null;
  if (!r) return !0;
  const n = vl(e);
  let i = Vi.get(xm(r));
  if (i)
    $s(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Sm.includes(a == null ? void 0 : a.name)))) return !0;
    $s(r, n), i = n;
  }
  return Xv[t].every((a) => i[a] === n[a]);
}
const zs = /* @__PURE__ */ new WeakSet();
async function Hc(e, t) {
  if (zs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && zs.add(e), r.ok && n !== void 0 ? n : null;
}
function km(e, t) {
  var o, a, s, l, c;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = _m(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Sm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: Jv(r, t) };
}
const ls = /* @__PURE__ */ new Map();
function e_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ls.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Hc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = km(i, o);
        a && $s(a.output, a.inputs);
      }
    });
}
const t_ = 5;
function n_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${t_}`, n = Hc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Hc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var c, d, u, f;
      const l = String(a.id);
      for (const { id: m } of await n) {
        if (!s()) return null;
        const _ = await o(m);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : km(_, l);
      }
      return null;
    }
  };
}
function r_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Oi = null;
async function i_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || zs.has(r) || (s = ls.get(i)) != null && s.has(n) || r_(t)) return null;
  (Oi == null ? void 0 : Oi.workflowId) !== i && (Oi = { workflowId: i, history: n_(r, i) }, queueMicrotask(() => {
    Oi = null;
  }));
  const a = await Oi.history.lastNodeOutput(e, o);
  return o() ? a ? ($s(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (zs.has(r) || ls.set(i, (ls.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function mf(e, t, r, n = tr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const gf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function cs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return gf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return gf.test(String((e == null ? void 0 : e.filename) || ""));
}
const nc = /* @__PURE__ */ new WeakMap();
function o_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Gc(e) {
  return o_(e) ? (nc.has(e) || nc.set(e, Math.random().toString(36).slice(2, 10)), nc.get(e)) : "run";
}
function Mm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function a_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Qu(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function s_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ul(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let m = !1;
  const _ = () => {
    m = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), s || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const g = () => {
    o || m || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, p = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var K, H;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (K = n.removeAttribute) == null || K.call(n, "src"), (H = n.load) == null || H.call(n));
    },
    failed: () => m,
    play: g,
    pause: p,
    toggle() {
      n.paused ? g() : p();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function oi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function l_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function yf(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = l_(e == null ? void 0 : e.graph, r)), n;
}
function c_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function u_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function d_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Pm({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (x) => {
    if (!x) return "";
    if (typeof x == "string") return String(x || "").trim();
    if (Array.isArray(x)) {
      if (x.length === 0) return "";
      if (x.length === 1) return i(x[0]);
      const X = String(x[0] || "").trim();
      if (X)
        return oi(t, {
          filename: X,
          subfolder: String(x[1] || "").trim(),
          type: String(x[2] || "output").trim() || "output"
        });
      for (const V of x) {
        const re = i(V);
        if (re) return re;
      }
      return "";
    }
    return typeof (x == null ? void 0 : x.src) == "string" && x.src ? x.src : typeof (x == null ? void 0 : x.url) == "string" && x.url ? x.url : oi(t, x);
  }, o = (x) => {
    if (!x || typeof x != "object") return "";
    const X = String(x.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(x.value || "");
    if (X !== "comfy_image") return "";
    const V = String(x.filename || "").trim();
    return V ? oi(t, {
      filename: V,
      subfolder: String(x.subfolder || ""),
      type: String(x.storage || "input")
    }) : "";
  }, a = (x) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || x == null) return null;
    const V = String(x);
    return X instanceof Map ? X.get(x) || X.get(V) || X.get(Number(V)) || null : X[x] || X[V] || null;
  }, s = (x, X) => {
    var re;
    const V = a(x == null ? void 0 : x.id);
    return Array.isArray((re = V == null ? void 0 : V.ui) == null ? void 0 : re[X]) ? V.ui[X] : Array.isArray(V == null ? void 0 : V[X]) ? V[X] : [];
  }, l = (x, X) => {
    const V = a(x == null ? void 0 : x.id);
    return V != null && V.ui && Object.prototype.hasOwnProperty.call(V.ui, X) ? V.ui[X] : V && Object.prototype.hasOwnProperty.call(V, X) ? V[X] : null;
  }, c = (x, X) => {
    const V = l(x, "pano_sticker_input_state_hash"), re = Array.isArray(V) ? V[0] : V;
    return String(re ?? "").trim() || d_(X);
  }, d = (x) => {
    const X = [], V = /* @__PURE__ */ new Set();
    for (const re of x || []) {
      const U = i(re);
      !U || V.has(U) || (V.add(U), X.push(U));
    }
    return X;
  }, u = (x, X) => {
    var U;
    const V = [];
    Array.isArray(x == null ? void 0 : x.images) && x.images.length && V.push(x.images), Array.isArray((U = x == null ? void 0 : x.ui) == null ? void 0 : U.images) && x.ui.images.length && V.push(x.ui.images);
    const re = [];
    for (const Z of V)
      X >= 0 && X < Z.length && re.push(Z[X]), re.push(...Z);
    return re;
  }, f = (x, X) => {
    var z;
    const V = String(X || "").trim();
    if (!V) return { src: "", sourceType: "", inputName: "" };
    const U = (Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : []).findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === V);
    if (U < 0) return { src: "", sourceType: "", inputName: V };
    const Z = x.graph ? x.getInputLink(U) : null;
    if ((Z == null ? void 0 : Z.origin_id) == null) return { src: "", sourceType: "", inputName: V };
    const T = Z.origin_id, ue = yf(x, U, T);
    if (!ue) return { src: "", sourceType: "", inputName: V };
    const B = Number(Z.origin_slot ?? 0);
    let he = [];
    try {
      he = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ue) || [] : [];
    } catch {
      he = [];
    }
    if (Array.isArray(he) && he.length) {
      const oe = [];
      B >= 0 && B < he.length && oe.push(he[B]), oe.push(...he);
      const j = d(oe.filter((fe) => !cs(fe)));
      if (j.length)
        return { src: j[0], srcCandidates: j, sourceType: "appNodeImageUrls", inputName: V };
    }
    const ne = a((ue == null ? void 0 : ue.id) ?? T), me = d(u(ne, B).filter((oe) => !cs(oe))).map((oe) => `${oe}&pano_src=${Gc(ne)}`);
    if (me.length)
      return { src: me[0], srcCandidates: me, sourceType: "nodeOutputs", inputName: V };
    const de = Array.isArray(ue == null ? void 0 : ue.imgs) ? ue.imgs : [];
    if (de.length) {
      const oe = [];
      B >= 0 && B < de.length && oe.push(de[B]), oe.push(...de);
      const j = d(oe);
      if (j.length)
        return { src: j[0], srcCandidates: j, sourceType: "nodeImgs", inputName: V };
    }
    const P = (z = ue == null ? void 0 : ue.widgets) == null ? void 0 : z.find((oe) => String((oe == null ? void 0 : oe.name) || "").toLowerCase() === "image");
    if (P) {
      let oe = i(P.value);
      if (oe && !oe.includes("/") && !oe.includes(":") && (ue.comfyClass === "LoadImage" || ue.type === "LoadImage") && (oe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`), oe) return { src: oe, sourceType: "widget", inputName: V };
    }
    return { src: "", sourceType: "", inputName: V };
  }, m = (x, X = []) => {
    var re;
    const V = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : [];
    for (const U of X) {
      const Z = V.findIndex((he) => String((he == null ? void 0 : he.name) || "") === U), T = Z >= 0 && x.graph ? x.getInputLink(Z) : null;
      if ((T == null ? void 0 : T.origin_id) == null) continue;
      const ue = a(((re = yf(x, Z, T.origin_id)) == null ? void 0 : re.id) ?? T.origin_id), B = (Array.isArray(ue == null ? void 0 : ue.images) ? ue.images : []).find(cs);
      return B ? `${oi(t, B)}&pano_src=${Gc(ue)}` : "";
    }
    return "";
  }, _ = (x, X = []) => {
    const V = Array.isArray(X) ? X : [X];
    for (const re of V) {
      const U = f(x, re);
      if (String((U == null ? void 0 : U.src) || "").trim()) return U;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (x) => {
    const X = String(x || "").trim();
    if (!X) return [];
    if (c_(X)) return [X];
    const { filename: V, subfolder: re } = u_(X);
    return V ? d([
      oi(t, { filename: V, subfolder: re, type: "temp" }),
      oi(t, { filename: V, subfolder: re, type: "output" }),
      oi(t, { filename: V, subfolder: re, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (x) => {
      var X, V;
      try {
        (V = (X = x == null ? void 0 : x.__panoLinkedInputImageCache) == null ? void 0 : X.forEach) == null || V.call(X, (re, U, Z) => {
          var T;
          re != null && re.img && ((T = n == null ? void 0 : n.isImageLoadFailed) != null && T.call(n, re.img)) && Z.delete(U);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (x, X) => {
      var V;
      (V = x == null ? void 0 : x.delete) == null || V.call(x, `__ui__${String(X || "")}`);
    },
    linkedValue: (x, X) => {
      var T, ue, B, he;
      const V = String(X || ""), re = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs.findIndex((ne) => String((ne == null ? void 0 : ne.name) || "") === V) : -1, U = re >= 0 && x.graph ? x.getInputLink(re) : null;
      if (U) {
        const ne = a(U.origin_id), me = [
          ne == null ? void 0 : ne.output,
          ne == null ? void 0 : ne.result,
          (T = ne == null ? void 0 : ne.data) == null ? void 0 : T.output,
          (ue = ne == null ? void 0 : ne.data) == null ? void 0 : ue.result,
          (B = ne == null ? void 0 : ne.ui) == null ? void 0 : B.output,
          (he = ne == null ? void 0 : ne.ui) == null ? void 0 : he.result
        ];
        for (const de of me) {
          if (!Array.isArray(de)) continue;
          const P = de[Number(U.origin_slot || 0)];
          if (typeof P == "string" && P.trim()) return P;
        }
      }
      const Z = Array.isArray(x == null ? void 0 : x.widgets) ? x.widgets.find((ne) => String((ne == null ? void 0 : ne.name) || "") === V) : null;
      return String((Z == null ? void 0 : Z.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (x, X = [], V = null, re = "") => {
      var Pe;
      const U = Array.isArray(X) ? X : [X], Z = _(x, U), ue = (Array.isArray(Z == null ? void 0 : Z.srcCandidates) && Z.srcCandidates.length ? Z.srcCandidates : [Z == null ? void 0 : Z.src]).map((ie) => String(ie || "").trim()).filter(Boolean);
      if (!ue.length) return null;
      const B = d(ue.flatMap((ie) => g(ie)));
      if (!B.length) return null;
      x.__panoLinkedInputImageCache || (x.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const he = String(re || U.join("|") || "image_exact"), ne = ue.join(`
`), me = x.__panoLinkedInputImageCache.get(he);
      if (me && me.srcRaw === ne && me.img) return me.img;
      const de = r || globalThis.Image;
      if (typeof de != "function") return null;
      const P = new de();
      (Pe = n == null ? void 0 : n.markImageLoading) == null || Pe.call(n, P, ne);
      const z = { srcRaw: ne, resolvedSrc: "", img: P };
      x.__panoLinkedInputImageCache.set(he, z);
      let oe = -1;
      const j = (ie) => {
        var E, ee, ce;
        ie === "ready" ? (E = n == null ? void 0 : n.markImageReady) == null || E.call(n, P, ne) : (ee = n == null ? void 0 : n.markImageFailed) == null || ee.call(n, P, ne), V == null || V(P), (ce = x.setDirtyCanvas) == null || ce.call(x, !0, !0);
      }, fe = () => {
        if (oe += 1, oe >= B.length) {
          j("failed");
          return;
        }
        z.resolvedSrc = B[oe], P.src = z.resolvedSrc;
      };
      return P.onload = () => j("ready"), P.onerror = () => {
        if (oe + 1 < B.length) {
          fe();
          return;
        }
        j("failed");
      }, fe(), P;
    },
    output: a,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (x, X, V, re = null) => {
      var ne, me, de;
      const U = s(x, X)[0] || null, Z = i(U);
      if (!Z) return null;
      const T = `__ui__${X}`, ue = (ne = V == null ? void 0 : V.get) == null ? void 0 : ne.call(V, T);
      if (ue && ue.__panoSrc === Z) return ue;
      const B = r || globalThis.Image;
      if (typeof B != "function") return null;
      const he = new B();
      return he.__panoSrc = Z, (me = n == null ? void 0 : n.markImageLoading) == null || me.call(n, he, Z), he.onload = () => {
        var P;
        (P = n == null ? void 0 : n.markImageReady) == null || P.call(n, he, Z), re == null || re(he);
      }, he.onerror = () => {
        var P;
        (P = n == null ? void 0 : n.markImageFailed) == null || P.call(n, he, Z), re == null || re(he);
      }, he.src = Z, (de = V == null ? void 0 : V.set) == null || de.call(V, T, he), he;
    },
    uiList: s,
    uiValue: l
  };
}
const f_ = 1e-3;
function Nm(e, t, r, n) {
  if (!so(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(f_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Cm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function p_(e, t) {
  return Math.floor(e * t.fps);
}
function Am(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const bf = 4;
function Im({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, c) {
      if ((a.length !== r.length || a.some((f, m) => f !== r[m])) && (r = a, n.clear(), i = null), s === null) return null;
      const d = p_(s, l);
      for (let f = d; f < Math.min(r.length, d + bf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + bf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Em({
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
  let a = null, s = !1, l = !1;
  const c = () => a || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, u);
      return f.changed ? (a = f.state, s = !0, n(a), d(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const u = s;
      return u && i(a), a = null, s = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = a != null;
      a = null, s = !1, u && n(null);
    }
  };
}
const us = "sticker_image_1", Om = "external_image", no = 0;
function Yi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function rc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Xr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Wc(e, t = no) {
  return (e == null ? void 0 : e.version) !== 2 ? Xr(e) : Xr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Si(r, t).active,
    external: r.source.kind === "port",
    ...Ku(r, t)
  }));
}
function ed(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Xr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Fm(e) {
  return String((e == null ? void 0 : e.id) || "") === us || String((e == null ? void 0 : e.source_kind) || "") === Om;
}
function td(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Fm(t);
}
const Tm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Dm(e) {
  return !Fm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Tm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Lm(e) {
  const t = Dm(e);
  return t ? Tm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Rm(e, t = {}) {
  var G, x, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((V) => String((V == null ? void 0 : V.id) || "") === us);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const V = String(((G = e.active) == null ? void 0 : G.selected_sticker_id) || "") === us;
    return {
      state: {
        ...e,
        stickers: r.filter((re, U) => U !== n),
        active: V ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = s ? m.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(_)));
  if (!s) {
    if (!d) return { state: e, changed: !1 };
    const V = Yi(g, u, f), re = Number(((x = a == null ? void 0 : a.initial_pose) == null ? void 0 : x.hFOV_deg) ?? g), U = Yi(re, u, f), Z = Number(((X = a == null ? void 0 : a.initial_pose) == null ? void 0 : X.vFOV_deg) ?? U);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - V) <= 1e-6 && Math.abs(Z - U) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((T, ue) => ue === n ? {
          ...T,
          vFOV_deg: V,
          initial_pose: T.initial_pose && typeof T.initial_pose == "object" ? { ...T.initial_pose, vFOV_deg: U } : T.initial_pose
        } : T)
      },
      changed: !0
    };
  }
  const p = r.reduce((V, re) => Math.max(V, Number((re == null ? void 0 : re.z_index) || 0)), -1), O = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Yi(g, u, f) : Number(m.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, K = {
    ...a || {},
    id: us,
    source_kind: Om,
    source_link_id: i,
    source_state_hash: o,
    ...O,
    initial_pose: { ...O },
    visible: !0,
    z_index: p + 1
  }, H = n >= 0 ? r.map((V, re) => re === n ? K : V) : [...r, K];
  return { state: { ...e, stickers: H }, changed: !0 };
}
function vf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const h_ = ["IMAGE", "VIDEO"];
function _f(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => h_.includes(r)) ? "2d" : null;
}
function m_(e, t) {
  var i, o, a, s, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? _f(n.type) ?? _f((c = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Vm(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: vf(e, "sticker"),
    awaitingPose: !t && (vf(e, "sticker_state") || m_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Sf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return mr({ version: 2, stickers: [r] }).stickers[0];
}
function $m(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var g;
  const a = e.stickers.findIndex((p) => td(e, p)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((g = e.active) == null ? void 0 : g.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((O, K) => K !== a),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const p = { ...Sf(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((O, K) => K === a ? p : O) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const p = [s.size.value, ...s.size.keyframes.map((H) => H.value)], O = p.map((H) => Yi(H.hFOV_deg, i, o));
    if (p.every((H, G) => Math.abs(H.vFOV_deg - O[G]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...s.size.value, vFOV_deg: O[0] },
      keyframes: s.size.keyframes.map((H, G) => ({ ...H, value: { ...H.value, vFOV_deg: O[G + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((H, G) => G === a ? { ...H, size: K } : H) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((p) => p.id));
  let d = 1;
  for (; c.has(`sticker_${d}`); ) d += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Sf(`sticker_${d}`, n)] }, changed: !0 };
  const u = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (p) => l ? Yi(p, i, o) : p, m = Uu(`sticker_${d}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: u,
    vFOV_deg: f(u)
  }, Xr(e).reduce((p, O) => Math.max(p, O.z_index), -1) + 1), _ = (n == null ? void 0 : n.keyframes) ?? {};
  return m.direction.keyframes = _.direction ?? [], m.roll.keyframes = _.roll ?? [], m.size.keyframes = (_.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: f(p.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, m] }, changed: !0 };
}
function nd(e) {
  const t = Xr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: rc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: rc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: rc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function zm(e) {
  const t = ed(e), r = td(e, t), n = Xr(e).some((s) => s && s.visible !== !1), i = nd(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Lm(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function g_(e) {
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
function wf(e, t) {
  const r = ed(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = g_(e), i = String(r.id || ""), o = nd(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function y_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function b_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Rm(e, t.value);
  if (t.type === "sync-port") return $m(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = nd(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Yi(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Uu(o, as(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const u = { id: o, asset_id: a, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Xr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = ed(e);
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
    const i = Dm(r);
    return !i || !Lm(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return wf(e, "front");
  if (t.type === "send-back") return wf(e, "back");
  if (t.type === "delete-selected") {
    if (td(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = Xr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = y_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Ku(r, no) : r, s = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(a[l] || 0)) > 1e-12 && (s[l] = c);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Q1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Kh(c, no, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...s } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function v_(e = {}) {
  return Em({
    ...e,
    reduce: b_,
    projectModel: zm
  });
}
const Kc = 2;
function ci(e, t) {
  return Math.floor(e * t + 0.5);
}
function __(e, t) {
  return Math.floor(e * t + 1e-3);
}
function jm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const m = () => c && !d, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const z of f) z();
    f = [];
  }
  function p(z, oe = {}) {
    return g(), u = { name: z, ...oe }, s(), u;
  }
  function O(z, oe, j) {
    const fe = () => {
      u === z && j();
    };
    e.addEventListener(oe, fe), f.push(() => e.removeEventListener(oe, fe));
  }
  function K(z, oe) {
    let j = t.requestFrame(function fe(Pe) {
      u === z && (oe(Pe), u === z && (j = t.requestFrame(fe)));
    });
    f.push(() => t.cancelFrame(j));
  }
  function H(z) {
    l = z, o(l);
  }
  function G() {
    return p(d ? "error" : "idle");
  }
  function x() {
    d = !0, G();
  }
  function X() {
    const { seekable: z } = e, oe = z != null && z.length ? z.end(z.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(oe) ? oe : 1 / 0));
  }
  function V(z) {
    if (!m()) return z === "play" ? ue() : G();
    if (e.readyState < Kc) {
      const oe = p("loading", { then: z });
      return O(oe, "loadeddata", () => V(oe.then)), O(oe, "error", x), oe;
    }
    return z === "play" && l / r() >= Number(e.duration) ? ue() : re(z, !1);
  }
  function re(z, oe) {
    const j = X();
    if (!e.ended && ci(Number(e.currentTime), r()) === ci(j, r())) return U(z);
    const fe = p("seeking", { then: z, frame: l, retried: oe });
    return O(fe, "seeked", () => {
      const Pe = ci(Number(e.currentTime), r()) === ci(X(), r()), ie = l === fe.frame;
      Pe || ie && fe.retried ? U(fe.then) : re(fe.then, ie);
    }), O(fe, "error", x), e.currentTime = j, fe;
  }
  function U(z) {
    return z === "play" ? Z() : (a(), G());
  }
  function Z() {
    const z = p("playingVideo", { shown: !1 });
    if (O(z, "pause", () => e.ended ? T() : ne()), O(z, "ended", T), O(z, "error", x), i() && ci(Number(e.duration), r()) >= n()) {
      const j = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = j;
      });
    }
    const oe = (j, fe) => {
      fe && !z.shown && (z.shown = !0, s()), B(ci(j, r()));
    };
    if (_()) {
      let j = e.requestVideoFrameCallback(function fe(Pe, ie) {
        u === z && (oe(Number(ie.mediaTime), !0), u === z && (j = e.requestVideoFrameCallback(fe)));
      });
      f.push(() => {
        var fe;
        return (fe = e.cancelVideoFrameCallback) == null ? void 0 : fe.call(e, j);
      });
    } else
      K(z, () => oe(Number(e.currentTime), e.readyState >= Kc));
    return Promise.resolve(e.play()).catch(() => {
      u === z && ne();
    }), z;
  }
  function T() {
    a(), ue();
  }
  function ue() {
    const z = p("playingClock", { startTs: t.now(), startFrame: l });
    return K(z, (oe) => B(z.startFrame + Math.floor((oe - z.startTs) / 1e3 * r()))), z;
  }
  function B(z) {
    if (z < n()) {
      H(z);
      return;
    }
    if (!i()) {
      he(n() - 1);
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), H(0), V("play");
  }
  function he(z) {
    u.name === "playingVideo" ? (g(), e.pause(), H(Math.max(0, z)), a()) : H(Math.max(0, z)), V("still");
  }
  function ne() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", s();
    else if (u.name === "playingVideo") {
      g(), e.pause();
      const z = __(Number(e.currentTime), r());
      H(Math.min(z, n() - 1)), a(), l === z ? G() : V("still");
    } else u.name === "playingClock" && he(Math.min(l, n() - 1));
  }
  function me() {
    if (!P()) {
      if (l >= n() - 1 && H(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", s();
        return;
      }
      V("play");
    }
  }
  function de(z) {
    const oe = Math.max(0, Math.round(z));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", H(oe), s();
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), H(oe), V("still");
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
    play: me,
    stop: ne,
    seek: de,
    toggle() {
      P() ? ne() : me();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(z) {
      g(), c = !!z, d = !1, V("still");
    },
    dispose() {
      g(), c = !1, u = { name: "idle" };
    }
  };
}
function Hm({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function c(g) {
    s = g, t();
  }
  function d(g) {
    a = g, e.currentTime = g;
  }
  function u() {
    const g = l;
    f(), l !== g && r();
  }
  function f() {
    if (!n || i || e.readyState < Kc) return;
    const { time: g, playing: p, fps: O } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (p) {
      if (a !== null) return;
      const K = Number(e.duration), H = Number.isFinite(K) ? Math.min(g, K) : g, G = Math.abs(Number(e.currentTime) - H) > 1.5 / O;
      if (e.ended && !G) return;
      G && d(H), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(a !== null || s === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const m = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const g = a;
      a = null, !o.playing && g === o.time ? c(g) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [g, p] of Object.entries(m)) e.addEventListener(g, p);
  function _(g) {
    n = g, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: p = null, playing: O = !1, fps: K }) {
      g !== n && (_(g), r()), o = { time: p, playing: O, fps: K }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, p) {
      return !n || i ? p : o.time === null ? null : o.playing && l ? e : s === null ? p : g;
    },
    dispose() {
      for (const [g, p] of Object.entries(m)) e.removeEventListener(g, p);
      _("");
    }
  };
}
function ds(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function S_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let _ = null, g = null;
  const p = () => i().timeline.fps, O = (T) => T.stickers.find((ue) => ue.source.kind === "port"), K = () => {
    const T = i(), ue = O(T);
    return jh(T, {
      minimum: Math.round(p() * 5),
      frames: Math.max(
        d ? Math.round(f * p()) : 0,
        _ && ue ? Cm(ue.clip, p(), _.meta) : 0
      ),
      camera: c
    });
  }, H = jm({
    video: e,
    clock: n,
    fps: p,
    span: K,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), G = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, x = () => {
    u && (m.add(u), l());
  }, X = Hm({ video: t, onCapture: s, onChange: l }), V = Im({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", G), e.addEventListener("error", x);
  function re(T) {
    T !== u && (u = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), H.setSource(!!T));
  }
  function U() {
    H.playing && H.stop();
  }
  function Z(T) {
    const ue = O(T);
    g = _ && ue ? Nm(ue.clip, H.frame, T.timeline.fps, _.meta) : null, X.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: g,
      playing: H.advancing,
      fps: T.timeline.fps
    });
  }
  return {
    get frame() {
      return H.frame;
    },
    get playing() {
      return H.playing;
    },
    get showsVideo() {
      return H.showsVideo;
    },
    get source() {
      return u;
    },
    pause: U,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, ue) {
      return _ != null && _.frames ? V.picture(_.frames, g, _.meta, ue) : X.picture(T, ue);
    },
    toggle() {
      H.playing ? H.stop() : H.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: ue, state: B, sticker: he = null }) {
      if (_ = T ? he : null, !T)
        return U(), re(""), Z(B), !1;
      for (const z of m)
        ue.includes(z) || m.delete(z);
      const ne = ue.find((z) => z && !m.has(z)) || "", me = ne !== d;
      me && (d = ne, f = 0), re(d);
      const de = zh(B, { camera: c }) || !!d && H.state !== "error" || !!_;
      return de || U(), (me || !de || !H.playing && H.frame >= K()) && H.frame !== no && H.seek(no), Z(B), de;
    },
    dispose() {
      H.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", G), e.removeEventListener("error", x), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const js = Math.PI / 180, fr = 180 / Math.PI, w_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), x_ = 260;
function xf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Gm(e, t) {
  return t ? Gm(t, e % t) : e;
}
function k_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Gm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function sa(e, t) {
  const r = xf(e), n = xf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: k_(r, n) };
}
function bi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Wm(e) {
  const t = bi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Or(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function rd(e, t, r = w_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (p, O, K) => {
    const H = p + O, G = Math.max(0, K - 1), x = H > G && H > 0 ? G / H : 1;
    return [p * x, O * x];
  }, [d, u] = c(l, a, n), [f, m] = c(o, s, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - m)
  }, g = Tu(_, t);
  return {
    x: _.x + (_.w - g.width) * 0.5,
    y: _.y + (_.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: _
  };
}
function M_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = rd({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * js * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = _h(l, gh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), d = P_(c, oo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = Du({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Km(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * fr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * fr, -89.9, 89.9)
  };
}
function P_(e, t) {
  const r = Km(e), n = oo(r.yaw, r.pitch, 0), i = Gl(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...r, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...r,
    roll: dl(Math.atan2(
      Gl(s, n.up),
      Gl(s, n.right)
    ) * fr)
  };
}
function Um(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = rd({ width: r, height: n }, ki(e)), o = _i(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = _h(e, gh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Km(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * fr, 1, 179)
  };
}
function N_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = _i(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: c, halfH: d } = Lu(l, s), u = {
    x: o - c,
    y: a - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, m = n / i, _ = Math.tan(Pc * js), g = m >= 1 ? _ : _ * m, p = m >= 1 ? _ / m : _;
  return {
    focalPx: s,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / s) * fr,
      vFOV_deg: 2 * Math.atan(d / s) * fr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(g) * fr,
        vFOV_deg: 2 * Math.atan(p) * fr
      }
    }
  };
}
function Fi(e, t) {
  const r = bi(e);
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
function C_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = _i(r, e);
    return Du(Tu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: rs(o, t) };
}
function kf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = sa(t, r);
  if (!o) return e;
  const a = ki(e) >= 1;
  n && o.ratio >= 1 !== a && (o = sa(o.height, o.width));
  const s = C_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Bm(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (bi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = yh({
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
    const n = bi(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
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
    return Fi(e, (n) => kf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Fi(e, (n) => {
      const o = String(Or(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? sa(o[1], o[2]) : sa(ki(n), 1);
      return a ? kf(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Fi(e, (i) => {
      const o = dl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Fi(e, (n) => {
    const i = bh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Fi(e, (n) => {
    const i = vh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Fi(e, (n) => {
    const i = Xm(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Ym({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : n ? "shift" : "";
  if (!s || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (s === "shift" && d < Math.min(l.w, l.h) * a) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: s,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function qm(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + hh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: mh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Xm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * js, l = Math.cos(s), c = Math.sin(s), d = o / r, u = -a / r, f = d * l - u * c, m = d * c + u * l, _ = Number(e.pitch_deg || 0) * js, g = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(f) / g * fr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(m) * fr, -90, 90)
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
  return Em({
    readState: e,
    reduce: Bm,
    projectModel: Wm,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const He = Object.freeze({
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
}), I_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, E_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: I_(t[2])
})), O_ = {
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
}, Mf = Object.fromEntries(
  Object.entries(O_).map(([e, t]) => [e, {
    name: t.name,
    elements: E_(t.body)
  }])
), Tt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Mf, n) ? Mf[n] : null;
    });
    return (n, i) => r.value ? (Fe(), Le("svg", {
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
      (Fe(!0), Le(Qe, null, Mt(r.value.elements, (o, a) => (Fe(), Le(Qe, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Fe(), Le("path", Cr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Fe(), Le("circle", Cr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Fe(), Le("rect", Cr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Fe(), Le("line", Cr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Fe(), Le("polyline", Cr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Fe(), Le("polygon", Cr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, Xt = {
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
    return (n, i) => (Fe(), Rn(j0(e.tag), Cr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Fp(() => [
        Be(Tt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, F_ = ["aria-expanded", "disabled"], T_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, D_ = ["data-aspect", "disabled", "onClick"], L_ = { class: "pano-cutout-aspect-custom" }, R_ = ["disabled"], V_ = ["disabled"], $_ = ["data-custom-width", "data-custom-height", "disabled"], Jm = {
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
    ]), o = /* @__PURE__ */ Kt("1"), a = /* @__PURE__ */ Kt("1"), s = /* @__PURE__ */ Kt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], p = String(r.model.aspectLabel || "");
      return g.length ? g.map((O) => {
        const K = typeof O == "string" ? O : String((O == null ? void 0 : O.value) || ""), H = typeof O == "string" ? O : String((O == null ? void 0 : O.label) || K);
        return {
          ...typeof O == "object" && O ? O : {},
          value: K,
          label: H,
          active: p ? K === p : (O == null ? void 0 : O.active) === !0
        };
      }) : i.map((O) => ({
        ...O,
        active: O.value === p
      }));
    }), d = dt(() => {
      var p;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((p = c.value.find((O) => O.active === !0)) == null ? void 0 : p.label) || "Aspect");
    });
    mi(d, (g) => {
      const p = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      p && (o.value = p[1], a.value = p[2]);
    }, { immediate: !0 });
    function u(g) {
      n("action", g);
    }
    function f(g) {
      var p;
      r.model.aspectOpen === !0 && ((p = s.value) != null && p.contains(g.target) || u({ type: "close-aspect" }));
    }
    al(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ha(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function m(g) {
      const [p, O] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: p,
        height: O,
        preserveOrientation: !0
      });
    }
    function _() {
      u({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (g, p) => (Fe(), Le("div", {
      ref_key: "rootElement",
      ref: s,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Fe(), Rn(Xt, {
        key: 0,
        icon: e.model.aspectIcon || rt(He).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: p[0] || (p[0] = (O) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Fe(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: p[1] || (p[1] = (O) => u({ type: "toggle-aspect" }))
      }, [
        Be(Tt, {
          icon: e.model.aspectIcon || rt(He).aspect
        }, null, 8, ["icon"]),
        Me("span", null, it(d.value), 1),
        Be(Tt, {
          icon: rt(He).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, F_)),
      Tr(Me("div", T_, [
        (Fe(!0), Le(Qe, null, Mt(c.value, (O) => (Fe(), Le("button", {
          key: O.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: O.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": O.value,
          disabled: l.value,
          onClick: (K) => m(O)
        }, it(O.label), 11, D_))), 128)),
        Me("div", L_, [
          Tr(Me("input", {
            "onUpdate:modelValue": p[2] || (p[2] = (O) => o.value = O),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, R_), [
            [Bd, o.value]
          ]),
          p[4] || (p[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Tr(Me("input", {
            "onUpdate:modelValue": p[3] || (p[3] = (O) => a.value = O),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, V_), [
            [Bd, a.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, $_)
        ])
      ], 512), [
        [vi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, z_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, j_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Fe(), Le("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Pt(() => {
      }, ["stop"]))
    }, [
      Be(Xt, {
        icon: rt(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", z_, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Qe, null, Mt(rt(r), (o) => (Fe(), Le("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, it(o[0]), 1),
          Me("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, H_ = {
  class: "pano-view-unavailable",
  role: "status"
}, _l = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Fe(), Le("div", H_, it(rt(mm)), 1));
  }
}, G_ = { class: "pano-cutout-node-surface" }, W_ = ["title", "disabled"], K_ = { class: "value" }, U_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, B_ = {
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
    return (n, i) => (Fe(), Le("div", G_, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Pt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Pt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(Tt, {
            icon: rt(He).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(Xt, {
          icon: e.model.hasShot ? rt(He).delete : rt(He).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Jm, {
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
          onDblclick: i[2] || (i[2] = Pt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(Tt, {
            icon: rt(He).roll
          }, null, 8, ["icon"]),
          Me("span", K_, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, W_),
        Be(Xt, {
          icon: rt(He).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(j_)
      ], 32),
      e.model.hasShot === !1 ? (Fe(), Le("div", U_, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Fe(), Rn(_l, { key: 1 })) : ht("", !0)
    ]));
  }
}, Zm = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Kt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, a = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var g, p;
      const { active: f, intent: m } = s();
      if (!f) return;
      const _ = ((p = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : p[0]) || null;
      if (_) {
        n("file-selected", { intent: m, file: _ });
        return;
      }
      n("file-cancelled", { intent: m });
    }
    function d() {
      const { active: u, intent: f } = s();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Fe(), Le("input", {
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
}, Y_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, q_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Kt(!1), r = Object.freeze([
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
    return (n, i) => (Fe(), Le("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Pt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Pt(() => {
      }, ["stop"]))
    }, [
      Be(Xt, {
        icon: rt(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", Y_, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Qe, null, Mt(rt(r), (o) => (Fe(), Le("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, it(o[0]), 1),
          Me("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, X_ = { class: "pano-stickers-node-surface" }, J_ = ["disabled"], Z_ = ["aria-label", "data-tip"], Q_ = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, eS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, tS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Kt(null);
    function n(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = r.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      n({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => (Fe(), Le("div", X_, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Pt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Pt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(Tt, {
            icon: rt(He).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be(Tt, {
            icon: rt(He).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, J_),
        Be(Xt, {
          icon: e.model.locked ? rt(He).lock_closed : rt(He).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Xt, {
          icon: rt(He).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Xt, {
          icon: rt(He).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Xt, {
          icon: e.model.isExternalSelection ? rt(He).back_initial : rt(He).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(q_)
      ], 32),
      e.model.playable === !0 ? (Fe(), Le("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Pt(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Pt(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(Tt, {
          icon: e.model.playing ? rt(He).pause : rt(He).play
        }, null, 8, ["icon"])
      ], 40, Z_)) : ht("", !0),
      e.model.hasStickers === !1 ? (Fe(), Le("div", Q_, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Fe(), Le("div", eS, "Drop image to add")) : ht("", !0),
      Be(Zm, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Fe(), Rn(_l, { key: 3 })) : ht("", !0)
    ]));
  }
}, nS = { class: "pano-studio-node-surface" }, rS = {
  class: "pano-studio-node-status",
  role: "status"
}, iS = { class: "pano-studio-node-shot" }, oS = { class: "pano-studio-node-size" }, aS = { class: "pano-studio-node-note" }, sS = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Le("div", nS, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Pt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Pt(() => {
        }, ["stop"]))
      }, [
        Me("div", rS, [
          Me("span", iS, it(e.model.status.shot), 1),
          Me("span", oS, it(e.model.status.size), 1),
          Me("span", aS, it(e.model.status.note), 1)
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
          Be(Tt, {
            icon: rt(He).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Fe(), Rn(_l, { key: 0 })) : ht("", !0)
    ]));
  }
}, lS = 2048, Uc = 4096, fs = (e) => Math.floor(e + 0.5), Ga = (e) => Math.max(2, 2 * fs(e / 2));
function Sl(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function cS(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? hl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, fs(e.timeline.length)) : t.length ? n = Math.max(1, fs(Math.max(...t))) : r.length && (n = Math.max(1, fs(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function uS(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let a;
  r !== "auto" ? a = Number(r) : o ? a = lS : a = Math.floor(i * 360 / n);
  const s = Sl(e);
  if (!s || s.projection === "erp")
    return { width: Math.floor(a * n / 360), height: Math.floor(a / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => ga(s, m).hFOV_deg)), c = a / Math.PI * Math.tan(l * Math.PI / 360), d = c / s.aspect, u = [Ga(c), Ga(d)];
  if (Math.max(...u) <= Uc) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Uc / Math.max(c, d);
  return { width: Ga(c * f), height: Ga(d * f), reducedFrom: u, defaulted: o };
}
function Qm(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function dS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", run: o = null, erp: a = null }) {
  const s = Sl(e);
  return !a || !o || s && s.projection !== "erp" ? null : o.key === Qm(t, r, String(n), i) ? a : null;
}
function fS(e) {
  const t = Sl(e);
  if (!t) return { x: 0, y: 0, z: 0, w: 1 };
  const { yaw_deg: r, pitch_deg: n, roll_deg: i } = ga(t, 0);
  return Qr(Sn(r, n, i));
}
function pS(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: a = null, showingRun: s = !1 }) {
  const l = Sl(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (a && a.key === Qm(t, r, String(n), i))
    d = { width: a.width, height: a.height, reducedFrom: a.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: s ? "Showing the last run" : "" };
    d = uS(e, cS(e), r, n, o);
  }
  const u = s ? ["Showing the last run"] : [];
  return d.reducedFrom ? u.push(`Capped at ${Uc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function hS() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, !!t.showingRun]);
    return i === e ? null : (e = i, pS(r(), { ...t, bgWidth: n }));
  };
}
const Pf = 24;
function mS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Yo(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function eg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Bc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Yo(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : eg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function gS(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Yo(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Yo(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Yo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : eg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function id(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function tg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function No(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ee(r.x, -n, t.width + n),
    y: Ee(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function yS(e) {
  const t = oo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function ai(e, t, r) {
  return Fu(Cs(
    Cs(e.centerDir, As(e.right, t)),
    As(e.up, r)
  ));
}
function od(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = yS(e), n = No(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ai(r, -r.tanX, r.tanY),
    ai(r, r.tanX, r.tanY),
    ai(r, r.tanX, -r.tanY),
    ai(r, -r.tanX, -r.tanY)
  ].map((f) => No(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const _ = [];
    for (let g = 0; g <= 28; g += 1) {
      const p = g / 28;
      let O, K;
      m === 0 ? (O = -r.tanX + 2 * r.tanX * p, K = r.tanY) : m === 1 ? (O = r.tanX, K = r.tanY - 2 * r.tanY * p) : m === 2 ? (O = r.tanX - 2 * r.tanX * p, K = -r.tanY) : (O = -r.tanX, K = -r.tanY + 2 * r.tanY * p);
      const H = No(ai(r, O, K), t);
      H && _.push({ x: H.x, y: H.y });
    }
    return _;
  }), a = No(ai(r, 0, r.tanY), t), s = No(
    ai(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = s.x - a.x, d = s.y - a.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + c / u * Pf,
      y: a.y + d / u * Pf
    },
    visible: !0
  };
}
function Nf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: od(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, c;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((c = a.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Bc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Bc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function bS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(n.x, n.z) * Jt),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * Jt
  };
}
function vS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function _S(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Jt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Wa = null;
function ad() {
  return Wa || (Wa = new Promise((e) => {
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
  }), Wa);
}
function zn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function SS(e, t = 1024) {
  const r = Math.max(1, Math.round(zn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(zn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function wS(e, t, r) {
  const n = zn(t), i = zn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = zn(o.u0), s = zn(o.v0), l = zn(o.u1), c = zn(o.v1);
  if (l <= a || c <= s) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + zn(d.du)) * n,
    centerY: ((s + c) * 0.5 + zn(d.dv)) * i,
    width: (l - a) * n,
    height: (c - s) * i,
    rotationRad: zn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, zn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function xS(e, t, r) {
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
function kS() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function n(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const l = new Image();
    s = { image: l, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const c = () => {
      s.settled = !0;
      const d = [...s.listeners];
      s.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = wS(o, a, s);
    if (!c.startsWith("data:") || !d) return null;
    const u = xS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const _ = n(c, l), g = Number(_.naturalWidth || _.width || 0), p = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || g < 1 || p < 1) return null;
    const O = mn({ label: "raster-object" });
    O.width = Math.max(1, Math.round(a)), O.height = Math.max(1, Math.round(s));
    const K = O.getContext("2d");
    return K ? (d.wrapOffsets.forEach((H) => {
      K.save(), K.translate(d.centerX + H, d.centerY), K.rotate(d.rotationRad), K.scale(d.scale, d.scale), K.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), K.restore();
    }), t.set(f, { revision: u, source: O }), { source: O, revision: u }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const a = new Set(Array.from(o, (s) => String(s || "").trim()).filter(Boolean));
      for (const s of t.keys())
        a.has(s) || t.delete(s);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function MS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function PS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function NS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function a(u, f, m, _) {
    if (!u || typeof _ != "function" || m.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const p = g.get(f);
    if ((p == null ? void 0 : p.entry) === m) {
      p.callback = _;
      return;
    }
    o(p);
    const O = { owner: u, key: f, entry: m, callback: _ };
    g.set(f, O), m.listeners.add(O);
  }
  function s(u, f) {
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
  function c(u, f, m, _ = null) {
    const g = String(f || ""), p = String(m || "");
    if (!g || !p) return null;
    let O = r.get(g);
    if (O)
      r.delete(g), r.set(g, O);
    else {
      l(i - 1);
      const H = e || globalThis.Image;
      if (typeof H != "function") return null;
      const G = new H();
      O = { key: g, image: G, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, O), G.onload = () => s(O, !0), G.onerror = () => s(O, !1), G.src = p;
    }
    return O.settled || O.image.complete && Number(O.image.naturalWidth || O.image.width || 0) > 0 || a(u, g, O, _), O.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Fo = /* @__PURE__ */ new WeakMap();
function ng(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Fo.get(e);
  n || (n = [], Fo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Fo.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Fo.delete(e);
  };
}
function Dr(e, ...t) {
  const r = Fo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const ps = Object.freeze({
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
}), rg = "PanoramaSuite.Editor.ViewControls", CS = {
  id: rg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ps).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function AS(e) {
  return Object.hasOwn(ps, e) ? ps[e] : ps.default;
}
function IS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function ES(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Hs = "state_json";
function Fr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function OS(e) {
  var a, s;
  const t = Fr(e, Hs);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = Gh(r, {
    coverage: (a = Fr(e, "coverage")) == null ? void 0 : a.value
  }), i = Bm(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function sd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Fr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, c, d, u, f, m, _;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (c = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (d = e.setDirtyCanvas) == null || d.call(e, !0, !0), (f = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || f.call(u, !0, !0), (_ = (m = t == null ? void 0 : t.canvas) == null ? void 0 : m.setDirty) == null || _.call(m, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function FS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Cf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function TS(e) {
  var d, u, f, m, _, g;
  if (!e) return;
  const t = Fr(e, "coverage"), r = Fr(e, "bg_color"), n = Fr(e, Hs), i = Fr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && FS(o) && (Cf(a) || a === ""))) return;
  let c = "360";
  if (Cf(a))
    try {
      c = String(En((d = JSON.parse(a)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (m = n.callback) == null || m.call(n, a), i && (i.value = s, (_ = i.callback) == null || _.call(i, s)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function hs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Yc(e, t, r) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function DS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function To(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var l, c;
    ((c = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : c.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function ig(e, t = {}) {
  var n;
  await DS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function LS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await ig(e), r ? r.apply(this, n) : this.value;
  };
}
function RS(e) {
  var t, r;
  try {
    (t = e.__panoDomRestore) == null || t.call(e);
  } catch {
  }
  try {
    (r = e.__panoLegacyRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null;
}
function VS(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Co(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var _;
    const f = `editor_btn|${r}`;
    if (u.__panoPreviewAttached === !0 && u.__panoPreviewMountKey === f) return;
    RS(u), sd(u, t), hs(u, Hs);
    const m = Fr(u, Hs);
    if (LS(u, m), m && !m.__panoPreviewPatchedCb) {
      m.__panoPreviewPatchedCb = !0;
      const g = m.callback;
      m.callback = (p) => {
        var K;
        const O = g ? g(p) : void 0;
        return (K = u.setDirtyCanvas) == null || K.call(u, !0, !1), O;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const g = Fr(u, "bg_color");
      !l && g && (g.value == null || String(g.value).trim() === "" || String(g.value).toLowerCase() === "#000000") && (g.value = "#00ff00", (_ = g.callback) == null || _.call(g, "#00ff00")), Yc(u, n, () => i(u, "stickers")), s && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), u.__panoStickersNodeSurface && hs(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), u.__panoPreviewAttached = !0, u.__panoPreviewMountKey = f;
      return;
    }
    u.__panoSceneStateV2 = l, Yc(u, n, () => i(u, "cutout")), l || a(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), u.__panoCutoutNodeSurface && hs(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), u.__panoPreviewAttached = !0, u.__panoPreviewMountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && !l && OS(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && TS(this);
      const _ = !!this.__panoPreviewAttached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && Dr(this, "attach"), m;
    };
  }
}
function $S(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return VS(this), n;
  };
}
function zS(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), s = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = s, !a && s < 40) {
      i(o);
      return;
    }
    sd(e, t);
    const l = (c = e) => r(c, "stickers", { readOnly: !0, hideSidebar: !1 });
    Yc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && hs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function jS({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [CS, mb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Jd],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Jd.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaStickersNode" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), d === "PanoramaStudio" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaCutoutNode" && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Is(d) && $S(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      sd(l, e), Is(c) && zS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const HS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Jn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : HS.test(String(e.name || "")) : !1;
}
function ld(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Jn(r)) : !1;
}
function GS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (ld(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => Jn(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Do(e, t = {}) {
  var a, s, l, c;
  if (!Jn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
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
async function ui(e, { fetchApi: t } = {}) {
  if (!Jn(e)) throw new TypeError("A supported image file is required.");
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
const Af = /* @__PURE__ */ new WeakSet(), If = /* @__PURE__ */ new WeakSet();
let Ef = 0;
function qc(e) {
  if (!e || typeof e != "object" || If.has(e)) return e;
  const t = String(e.type || "preview");
  return Ef += 1, e.type = `${t}:pano-${Ef}`, If.add(e), e;
}
function Gs(e) {
  if (!e || typeof e != "object" || Af.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Af.add(e), e;
}
function og(e, t) {
  var n, i;
  if (!t || ((i = (n = Gs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function WS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Vt } = Ja;
Qv((e) => Jr(e.id));
e_(fn);
const cd = NS(), { linkedVideoFile: ag } = Pm({ app: Vt, api: fn });
function Xc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ja == null ? void 0 : Ja.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const KS = "pano_suite.ui_settings.v1", US = 120, BS = 2048;
function Of() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(KS)) || "").trim();
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
function YS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ao(e) {
  var r, n, i, o, a;
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
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function qS() {
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
function Jc(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
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
function sg(e) {
  const t = Jc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function XS(e, t, r) {
  sg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Zc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function ud(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function lg(e) {
  return Is(ud(e));
}
function Ff(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function cg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Zc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ms(e), Ww(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Zc(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ms(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ms(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function JS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ms(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Qc.unregister(e), JS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const r = e.__panoDomPreview;
  try {
    (n = e.__panoDomRestore) == null || n.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (i = e.__panoLegacyRestore) == null || i.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, r) {
    try {
      (o = r.state) != null && o.raf && cancelAnimationFrame(r.state.raf);
    } catch {
    }
    try {
      (s = (a = r.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (r == null ? void 0 : r.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Xc();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => yw(e, c));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function ZS(e, t = "#00ff00") {
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
function QS(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = pr(e, "state_json")) == null ? void 0 : r.value) || "");
}
function ln(e) {
  var s, l;
  const t = QS(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = pr(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = pr(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? Wh(t, { backgroundColor: n, coverage: i, active: Yh(e) }) : ZS(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function pr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function ew(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ug(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = ew(e == null ? void 0 : e.graph, r)), n;
}
function tw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function dg(e, t = []) {
  const r = tw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    tr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Tf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Ws(e, t) {
  const r = Tf(e), n = Tf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function nw(e, t) {
  var r;
  return ug(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function rw(e, t = tr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = dg(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return a_(e, a, nw);
}
const Qc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = fn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f;
        if (!o) return;
        const a = Ws(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...rw(o)].some((m) => Ws(n, m)) || Mm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (pg(o), (c = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (d = o.setDirtyCanvas) == null || d.call(o, !0, !0), (f = (u = o.graph) == null ? void 0 : u.setDirtyCanvas) == null || f.call(u, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, fn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = fn) != null && e.removeEventListener) || (fn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ks(e) {
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
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function iw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function ow(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function aw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function sw(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (iw(t)) return [t];
  const { filename: r, subfolder: n } = ow(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Ks({
    filename: r,
    subfolder: n,
    type: o
  }));
  return aw([...i, t]);
}
function lw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Ks({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Jr(e) {
  const t = Vt == null ? void 0 : Vt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Ws(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Ws(a, i)) return t[a];
  }
  return null;
}
function Lr(e, t, r = null) {
  const n = r || Jr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Cn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Cn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Ks({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Cn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ks(e);
}
function la(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function gs(e) {
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
function dd(e, t) {
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
function cw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function uw(e, t) {
  try {
    e.__panoOwnOutputRev = MS(e.__panoOwnOutputRev);
    const r = cw(t);
    let n = "";
    for (const i of r)
      if (n = Cn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), dd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function qi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function dw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!en(e, "background"))
    return qi(e), null;
  const i = Jr(n), o = Qu(i, t, Cn);
  if (!o)
    return qi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = dd(o, a), l = `${t.join("|")}:${s}`, c = e.__panoOwnOutputVideoCache;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  qi(e);
  const d = s_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return d ? (e.__panoOwnOutputVideoCache = { key: l, player: d }, d.video) : null;
}
function fw(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = dg(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of a) {
    const f = r[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const _ = m.origin_id, g = ug(e, u, _);
    if (!g) continue;
    const p = Number(m.origin_slot ?? 0), O = Jr((g == null ? void 0 : g.id) ?? _), K = Array.isArray(O == null ? void 0 : O.images) ? O.images : [];
    if (K.length) {
      const X = [];
      p >= 0 && p < K.length && X.push(K[p]), X.push(...K);
      for (const V of X.filter((re) => !cs(re))) {
        const re = Cn(V);
        if (re)
          return String((f == null ? void 0 : f.name) || ""), { src: `${re}&pano_src=${Gc(O)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let H = [];
    try {
      H = typeof (Vt == null ? void 0 : Vt.getNodeImageUrls) == "function" ? Vt.getNodeImageUrls(g) || [] : [];
    } catch {
      H = [];
    }
    if (Array.isArray(H) && H.length) {
      const X = [];
      p >= 0 && p < H.length && X.push(H[p]), X.push(...H);
      for (const V of X) {
        const re = Cn(V);
        if (re)
          return String((f == null ? void 0 : f.name) || ""), { src: re, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const G = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (G.length) {
      const X = [];
      p >= 0 && p < G.length && X.push(G[p]), X.push(...G);
      for (const V of X) {
        const re = Cn(V);
        if (re)
          return String((f == null ? void 0 : f.name) || ""), { src: re, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const x = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (x) {
      let X = Cn(x.value);
      if (X && !X.includes("/") && !X.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (X = fn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = en(e, "background") ? Jr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((d = s == null ? void 0 : s.ui) == null ? void 0 : d.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = Cn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function pw(e, t = [], r = {}) {
  const n = fw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = sw(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const c = new Image(), d = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  d.pendingSrcRaw = i, d.pendingResolvedSrc = "", d.pendingImg = c, e.__panoLinkedInputImageCache.set(s, d);
  let u = -1;
  const f = () => {
    var _, g, p, O;
    if (u += 1, u >= o.length) {
      if (((g = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : g.call(_, s)) === d && d.pendingImg === c && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
        try {
          (O = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || O.call(p, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const m = o[u];
    d.pendingResolvedSrc = m, c.src = m;
  };
  return c.onload = () => {
    var m, _, g;
    ((_ = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : _.call(m, s)) === d && d.pendingImg === c && (d.srcRaw = i, d.resolvedSrc = String(d.pendingResolvedSrc || c.src || ""), d.img = c, d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null), String(d.pendingResolvedSrc || d.resolvedSrc || c.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
  }, c.onerror = (m) => {
    var _, g, p, O;
    if (u + 1 < o.length) {
      f();
      return;
    }
    if (((g = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : g.call(_, s)) === d && d.pendingImg === c && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
      try {
        (O = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || O.call(p, s);
      } catch {
      }
    String(d.pendingResolvedSrc || d.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((m == null ? void 0 : m.type) || "error");
  }, f(), a && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : c;
}
function fg(e, t = [], r = null, n = {}) {
  const i = pw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function pg(e) {
  var t, r;
  if (e) {
    cd.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, qi(e), e.__panoWrappedErpCache = null;
  }
}
function hw(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, qi(e), e.__panoWrappedErpCache = null;
  }
}
function hg(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ka(e, t, r = "") {
  const n = hg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < US ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Df(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function mw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), s + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (a - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function ic(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function gw(e) {
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
function yw(e, t) {
  return og(e, t);
}
function ca(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = lw(r);
  if (!o && (n != null && n.external)) {
    if (!en(e, "external-sticker")) return null;
    const m = Jr(e == null ? void 0 : e.id), _ = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(_) ? _ : [_])
      if (o = Cn(g), o) break;
  }
  if (!o) return null;
  const a = Lr(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, c = n != null && n.external ? dd(o, l) : o, d = PS(o, s, l);
  return cd.get(e, d, c, (m, _) => {
    var g, p;
    _ && (n != null && n.external && e.__panoOutputFromRun && Dr(e, "image-loaded"), (p = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || p.call(g));
  }) || null;
}
function bw(e, t) {
  var u, f, m, _;
  const r = xw(e, t), n = kw(t), i = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], o = new Map(
    i.filter((g) => g && typeof g == "object").map((g) => [String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim(), Number((g == null ? void 0 : g.z_index) || 0)])
  ), a = r ? n.map((g) => {
    const p = r.getGroupDisplayCanvas(g);
    return p ? {
      id: `paint_group:${g}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${g}`,
      zIndex: Number(o.get(g) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (_ = (m = e.__panoRasterObjectSurfaceCache) == null ? void 0 : m.retain) == null || _.call(m, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = kS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var g, p;
    return (p = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : p.call(g);
  });
  const l = SS(t == null ? void 0 : t.output_preset), c = s.filter((g) => (g == null ? void 0 : g.visible) !== !1 && String((g == null ? void 0 : g.layerKind) || "paint") === "paint").map((g) => String((g == null ? void 0 : g.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(c);
  const d = s.map((g) => {
    const p = e.__panoRasterObjectSurfaceCache.get(
      g,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return p ? {
      id: `raster:${String((g == null ? void 0 : g.id) || "")}`,
      source: p.source,
      revision: p.revision,
      zIndex: Number((g == null ? void 0 : g.z_index) || 0),
      opacity: 1,
      visible: (g == null ? void 0 : g.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...d];
}
function vw(e, t, r, n) {
  var o, a, s, l, c, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Sw(e, t, n);
  return i || null;
}
function _w(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), a = (t == null ? void 0 : t.ds) || ((f = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], c = (r - Number(o.left || 0)) / s - Number(l[0] || 0), d = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Sw(e, t, r) {
  var i, o;
  const n = _w(t, r || (Vt == null ? void 0 : Vt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function ww(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function xw(e, t) {
  var c, d, u, f, m, _, g, p, O, K, H, G;
  const r = (d = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.paint) == null ? void 0 : d.strokes, n = (f = (u = t == null ? void 0 : t.painting) == null ? void 0 : u.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = ww(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Iu(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((g = e.__panoPreviewPaintRevision) == null ? void 0 : g.paint) !== l.paint || ((p = e.__panoPreviewPaintRevision) == null ? void 0 : p.mask) !== l.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== l.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((H = t == null ? void 0 : t.painting) == null ? void 0 : H.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((G = t == null ? void 0 : t.painting) == null ? void 0 : G.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function kw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Mw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Pw(e, t, r) {
  const n = od(t, r);
  n.visible && id(e, n.boundaryEdges, { selected: !1 });
}
function Nw(e, t, r) {
  const n = od(t, r);
  n.visible && (e.save(), id(e, n.boundaryEdges, { selected: !0 }), tg(e, n, { accent: mS(t) }), e.restore());
}
function eu(e, t, r) {
  return pm(Vs(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Us(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? no;
}
function Cw(e) {
  return [en(e, "background") ? Qu(Jr(e.id), ["pano_input_videos"], Cn) : "", ag(e, tr)];
}
function Aw(e) {
  var o;
  if (!en(e, "external-sticker")) return null;
  const t = Jr(e.id), r = Lr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Cn), meta: r };
  const i = Qu(t, ["pano_sticker_input_videos"], Cn);
  return i ? { src: i, meta: r } : null;
}
function Iw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function mg(e, t) {
  var r;
  return ((r = e.__panoSurfaceScene) == null ? void 0 : r.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: mr({ ...t, painting: null }) }), e.__panoSurfaceScene.sceneState;
}
function Ew(e, t) {
  const r = vl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (en(e, "background")) {
    const o = Lr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (vm(e, tr)) {
    const { playback: o, video: a } = t;
    return o.source && o.source === ag(e, tr) && a.videoWidth > 0 ? a.videoWidth : void 0;
  }
  const i = fg(e, tr, null, { preserveReadyWhilePending: !1 });
  return la(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Ow(e, t) {
  var i, o, a;
  const r = String(((i = pr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((s) => en(e, s));
  return {
    stateText: String(((o = pr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: ln(e).coverage,
    bgColor: String(((a = pr(e, "bg_color")) == null ? void 0 : a.value) ?? ""),
    bgWidth: r === "auto" ? Ew(e, t) : null,
    run: n && Lr(e, "pano_output_size") || null,
    erp: n && Lr(e, "pano_output_erp") || null
  };
}
function gg(e) {
  const t = e == null ? void 0 : e.__panoStudioRunImage;
  t && (t.image.removeAttribute("src"), e.__panoStudioRunImage = null);
}
function Fw(e, t, r) {
  const n = Cn(Lr(e, "pano_output_erp"));
  let i = e.__panoStudioRunImage;
  if (i && i.src !== n && (gg(e), i = null), !t || !n) return null;
  if (!i) {
    const o = new Image(), a = { src: n, image: o, ready: !1 };
    o.src = n, o.decode().then(() => {
      var s, l;
      e.__panoStudioRunImage === a && (a.ready = !0, (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s));
    }, () => {
    }), e.__panoStudioRunImage = i = a;
  }
  return i.ready ? {
    media: i.image,
    revision: gs(i.image),
    coverage: Number(t.coverage) === 180 ? 180 : 360,
    quaternion: fS(r())
  } : null;
}
function Tw(e, t, r) {
  const n = mg(e, t), i = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = ca(e, a.id, Bh(a.source), { external: a.source.kind === "port" });
      const c = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, s), u = Am(c.playback.stickerMedia, s);
        return d ? { media: d, revision: gs(d), source: u } : null;
      }
    } else {
      const c = a.type === "external_image" || a.source_kind === "external_image", d = String(a.asset_id || "") || (c ? String(a.id || "") : "");
      s = ca(e, d, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: c });
    }
    return la(s) ? { media: s, revision: gs(s) } : null;
  }, o = (t.painting_visible === !1 ? [] : bw(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: la(r) ? { media: r, revision: gs(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: hm(n, Us(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Dw(e, t, r, n = null) {
  var X, V, re, U, Z, T, ue;
  const i = String(e.__panoPreviewMode || "stickers");
  hg(e, i);
  const o = ln(e);
  i === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (re = (V = (X = e.__panoCutoutNodeSurface) == null ? void 0 : X.session) == null ? void 0 : V.refresh) == null || re.call(V)) : i === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (T = (Z = (U = e.__panoStickersNodeSurface) == null ? void 0 : U.session) == null ? void 0 : Z.refresh) == null || T.call(Z));
  const a = t.parentElement, s = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), c = t.getContext("2d");
  if (!c) return;
  (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
  const d = { x: 0, y: 0, w: s, h: l };
  c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "#070707", c.fillRect(0, 0, s, l);
  const u = (n == null ? void 0 : n.media) || (e.__panoSurfacePlayback ? Iw(e.__panoSurfacePlayback) : dw(e, ["pano_input_videos"], () => {
    var B, he;
    return (he = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : he.call(B);
  })) || fg(
    e,
    tr,
    () => {
      var B, he;
      return (he = (B = e.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : he.call(B);
    },
    { preserveReadyWhilePending: !1 }
  ), f = la(u);
  let m = null;
  const _ = () => n ? { background: n, layers: [] } : Tw(e, o, u), g = (B, he) => {
    m || (m = _());
    const ne = r.render({ width: B.w, height: B.h, camera: he, ...m });
    return ne && c.drawImage(ne.canvas, ne.x, ne.y, ne.width, ne.height, B.x, B.y, B.w, B.h), !!ne;
  };
  if (i === "cutout") {
    const B = gw(o), he = Mw(u), ne = B ? Ee(Zr(B).aspect, 0.1, 10) : f ? Ee(Number(he.width / he.height), 0.05, 20) : 1, me = rd(d, ne);
    e.__panoCutoutNodeFrame = me;
    let de = "none";
    const P = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (B)
      if (u && !f)
        de = "loading";
      else if (f) {
        const z = N_({ width: s, height: l }, me, B);
        [
          !z.fallback || g(z.fallback.rect, Bo(z.fallback.shot)),
          g(z.rect, Bo(z.shot)),
          !z.fallback || g(me, Bo(B))
        ].every(Boolean) || (de = "loading");
      } else
        de = "empty";
    else {
      const z = e.__panoLastCutoutShot;
      z ? (e.__panoPreviewView = Um(z, { width: s, height: l }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), f ? g(d, Vs(e.__panoPreviewView, s, l)) || (de = "loading") : u ? de = "loading" : de = "empty";
    }
    f || r.release(), r.failed && de === "loading" && (de = "none"), B && (e.__panoLastCutoutShot = { ...B }, c.save(), c.fillStyle = "rgba(0,0,0,0.58)", c.beginPath(), c.rect(0, 0, s, l), c.rect(me.x, me.y, me.w, me.h), c.fill("evenodd"), c.restore(), c.save(), c.strokeStyle = "rgba(255,221,87,0.72)", c.lineWidth = 2, c.strokeRect(me.x + 0.5, me.y + 0.5, Math.max(0, me.w - 1), Math.max(0, me.h - 1)), c.restore()), de === "loading" ? (ic(e, !1), Ka(e, !0, P)) : de === "empty" ? (ic(e, !0), Ka(e, !1, "")) : (ic(e, !1), Ka(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let p = !1;
  (!u || f) && (m = _(), !m.background && !m.layers.length ? (r.release(), p = !0) : p = g(d, Vs(e.__panoPreviewView, s, l)));
  const O = !p && !r.failed;
  Ka(e, O, O ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), O && mw(c, d, Df(t, d));
  const K = eu(e, s, l);
  !u && p && Lw(c, K, Df(t, d));
  const H = String(((ue = o == null ? void 0 : o.active) == null ? void 0 : ue.selected_sticker_id) || ""), G = Wc(o, Us(e)), x = p && e.__panoStudio !== !0 ? G.find((B) => String((B == null ? void 0 : B.id) || "") === H && (B == null ? void 0 : B.visible) !== !1) : null;
  p && !n && G.filter((B) => B !== x && (B == null ? void 0 : B.visible) !== !1 && (B.external || B.source_kind === "external_image")).filter((B) => !la(ca(e, B.id, null, { external: !0 }))).forEach((B) => Pw(c, B, K)), x && Nw(c, x, K);
}
function Lf(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = r.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function Lw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Nn(c, s));
    Lf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Nn(s, c));
    Lf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Nn(0, 0) },
    { name: "Right", dir: Nn(90, 0) },
    { name: "Back", dir: Nn(180, 0) },
    { name: "Left", dir: Nn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function tu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Rw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function $n(e, t) {
  return Rw(e, t) ? !1 : (tu(e), !0);
}
function Rf() {
  var r;
  const e = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Vw(e) {
  var r;
  if (!e) return;
  const t = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function $w(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !sg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function zw(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Vf(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), i && jw(e, 180, t);
    }
  };
}
function jw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Lo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Hw = /* @__PURE__ */ new WeakMap();
function yg(e, t) {
  return Mm(Hw, e, t) ? !1 : (uw(e, t), pg(e), Lo(e), !0);
}
async function Gw(e) {
  var r, n;
  const t = await i_(e, Vt, fn);
  t && (yg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Ww(e, t = {}) {
  var Ve;
  const r = t.__allowStandalone === !0, n = lg(e);
  if (n && !r) {
    ud(e);
    return;
  }
  n && $w(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = i && e.__panoStudio === !0, a = i && !o, s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Ff(e)
  }, c = "dom", d = l.signature || Ff(e);
  if (Number(e.__panoRebindGeneration || 0), Zc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Jc(e), e.__panoFrontendSig = d, e.__panoStickersPath = c, (Ve = e.__panoDomPreview) != null && Ve.widget || (e.__panoLegacyPreviewHooked && ms(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const u = t.noPreview === !0, f = u ? 0 : 56, m = u ? 0 : x_, _ = document.createElement("div");
  if (qS(), _.className = "pano-node-preview-dom", _.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), u && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.tabIndex = 0, _.style.cssText = [
    "width:100%",
    u ? "height:auto" : "height:100%",
    m > 0 ? `min-height:${m}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), u) {
    const J = Gs(qc(
      e.addDOMWidget(Xc(), "preview", _, Vf(e, null))
    ));
    Lo(e), e.__panoDomPreview = { widget: J, root: _, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const g = document.createElement("div");
  g.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const p = mn({ label: "node.surface" });
  p.style.cssText = [
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
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), O.textContent = "Connect ERP image", g.appendChild(p), g.appendChild(O), _.appendChild(g);
  const K = ph(_), H = document.createElement("div");
  H && (H.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", H.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", _.appendChild(H)), XS(e, 120, 120), Lo(e);
  let G = null;
  try {
    zw(e, f, () => {
      var J, Ce;
      return (Ce = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Ce.call(J);
    }), G = Gs(qc(e.addDOMWidget(
      Xc(),
      "preview",
      _,
      Vf(
        e,
        () => {
          var J, Ce;
          return (Ce = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Ce.call(J);
        },
        f,
        m,
        !1
      )
    )));
  } catch {
    return;
  }
  const x = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, X = hS(), V = () => {
    x.destroyed || (x.needsDraw = !0, !x.inTick && !x.raf && (x.raf = requestAnimationFrame(le)));
  }, re = gm(V), U = /* @__PURE__ */ io(i ? {
    ...zm(ln(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...o ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Wm(ln(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((J) => ({ value: J, label: J }))
  });
  let Z = null;
  if (i && e.__panoSceneStateV2) {
    const [J, Ce] = [0, 1].map(() => {
      const Ge = ul(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", g.appendChild(Ge), Ge;
    }), Re = mn({ label: "node.still" });
    Re.__panoFrameIdx = 0;
    const Ae = mn({ label: "node.port-still" });
    Ae.__panoFrameIdx = 0;
    const $e = S_({
      video: J,
      stickerVideo: Ce,
      createImage: (Ge, Ke) => {
        const tt = new Image();
        return tt.onload = Ke, tt.onerror = Ke, tt.src = Ge, tt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => ln(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ke;
        if (!(J.videoWidth > 0 && J.videoHeight > 0)) return;
        const Ge = Math.min(1, BS / J.videoWidth);
        Re.width = Math.round(J.videoWidth * Ge), Re.height = Math.round(J.videoHeight * Ge), (Ke = Re.getContext("2d")) == null || Ke.drawImage(J, 0, 0, Re.width, Re.height), Re.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Ge;
        Ce.videoWidth > 0 && Ce.videoHeight > 0 && (Ae.width = Ce.videoWidth, Ae.height = Ce.videoHeight, (Ge = Ae.getContext("2d")) == null || Ge.drawImage(Ce, 0, 0), Ae.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        U.playing = $e.playing, V();
      }
    });
    Z = { playback: $e, video: J, still: Re, stickerVideo: Ce, stickerStill: Ae, stickerSource: "" }, e.__panoSurfacePlayback = Z;
  }
  const T = () => {
    var tt;
    const { playback: J, still: Ce, stickerStill: Re } = Z, Ae = ds(g, !!((tt = e.flags) != null && tt.collapsed)), $e = J.source, Ge = Ae ? Aw(e) : null, Ke = J.follow({
      shown: Ae,
      sources: Ae ? Cw(e) : [],
      state: ln(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== Z.stickerSource && (Z.stickerSource = (Ge == null ? void 0 : Ge.src) || "", kc(Re)), J.source !== $e && (kc(Ce), Ce.__panoFrameIdx = 0), U.playable = Ke, U.playing = J.playing;
  }, ue = () => {
    var Ce, Re;
    const J = ((Ce = e.__panoOwnOutputVideoCache) == null ? void 0 : Ce.player) ?? null;
    J && !ds(g, !!((Re = e.flags) != null && Re.collapsed)) && J.pause(), i && (U.playable = !!J && !J.failed(), U.playing = !!(J != null && J.playing));
  }, B = () => {
    var J;
    Z == null || Z.playback.pause(), (J = e.__panoOwnOutputVideoCache) == null || J.player.pause();
  };
  let he = null;
  const ne = (i ? v_ : A_)({
    readState: () => ln(e),
    publishLiveState: (J) => {
      J ? (he = J, e.__panoLiveStateOverride = J) : (e.__panoLiveStateOverride === he && (e.__panoLiveStateOverride = null), he = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (J) => {
      var Ae, $e, Ge, Ke;
      const Ce = pr(e, "state_json");
      if (!Ce) return;
      qh(e, J.active);
      const Re = Jh(e, J);
      Zh(e, Re, String(Ce.value ?? "")) || (Ce.value = Re, (Ae = Ce.callback) == null || Ae.call(Ce, Re), e.__panoStateCache = null, ($e = e.setDirtyCanvas) == null || $e.call(e, !0, !0), (Ke = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Ke.call(Ge, !0, !0));
    },
    onChange: (J) => Object.assign(U, J)
  }), de = i ? ng(e, (J = "sync", Ce = null) => {
    var Ye;
    if (!i || !e.graph || !ne || ne.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const jt = en(e, "external-sticker"), yn = ln(e).stickers.find((_r) => _r.source.kind === "port");
      return ne.apply({
        type: "sync-port",
        value: Vm(e, {
          pose: jt ? Lr(e, "pano_sticker_input_pose", Ce) : null,
          image: yn ? ca(e, yn.id, null, { external: !0 }) : null
        })
      });
    }
    const Re = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((jt) => String((jt == null ? void 0 : jt.name) || "") === "sticker_image") : -1, Ae = Re >= 0 ? ((Ye = e.getInputLink(Re)) == null ? void 0 : Ye.id) ?? null : null;
    if (Ae == null)
      return ne.apply({ type: "sync-external", value: { connected: !1 } });
    if (!en(e, "external-sticker")) return !1;
    const $e = Lr(e, "pano_sticker_input_pose", Ce), Ge = Array.isArray($e) ? $e[0] : $e, Ke = String(Lr(e, "pano_sticker_input_state_hash", Ce) ?? ""), tt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, lt = ln(e), zt = (Array.isArray(lt == null ? void 0 : lt.stickers) ? lt.stickers : []).find((jt) => String((jt == null ? void 0 : jt.id) || "") === "sticker_image_1"), Dt = ca(e, "sticker_image_1", null, { external: !0 }), on = Ge && typeof Ge == "object" ? Ge : zt || { yaw_deg: tt.yaw, pitch_deg: tt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return ne.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ae,
        stateHash: Ke,
        pose: on,
        imageWidth: Number((Dt == null ? void 0 : Dt.naturalWidth) || (Dt == null ? void 0 : Dt.width) || 0),
        imageHeight: Number((Dt == null ? void 0 : Dt.naturalHeight) || (Dt == null ? void 0 : Dt.height) || 0)
      }
    });
  }) : () => {
  };
  let P = 0;
  const z = async (J) => {
    if (!i || !ne || !Jn(J)) return !1;
    B();
    const Ce = `asset_${Math.random().toString(16).slice(2, 10)}`, Re = `st_${Math.random().toString(16).slice(2, 10)}`, Ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    P += 1, U.importing = !0;
    const $e = To(e, `add:${Ce}`, async () => {
      const Ge = await Do(J), Ke = await ui(J, {
        fetchApi: (tt, lt) => fn.fetchApi(tt, lt)
      });
      return E(), ne.apply({
        type: "add-sticker",
        value: {
          stickerId: Re,
          assetId: Ce,
          asset: Ke,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Ae.yaw || 0),
          pitch_deg: Number(Ae.pitch || 0)
        }
      });
    });
    try {
      return await $e;
    } catch {
      return !1;
    } finally {
      P = Math.max(0, P - 1), U.importing = P > 0, V();
    }
  };
  let oe = null, j = null, fe = null, Pe = !1;
  const ie = () => {
    var J;
    return fe && (clearTimeout(fe), fe = null), Pe ? (Pe = !1, ((J = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : J.call(ne)) ?? !1) : !1;
  }, E = () => {
    var Ae, $e, Ge;
    const J = ie(), Ce = (oe == null ? void 0 : oe.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (oe = null, j = null, Ce != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Ce) && (($e = p.releasePointerCapture) == null || $e.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Re = ((Ge = ne == null ? void 0 : ne.commitGesture) == null ? void 0 : Ge.call(ne)) ?? !1;
    return J || Re;
  }, ee = () => {
    var Ae, $e, Ge;
    const J = ie(), Ce = oe == null ? void 0 : oe.pointerId;
    if (oe = null, Ce != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Ce) && (($e = p.releasePointerCapture) == null || $e.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Re = ((Ge = ne == null ? void 0 : ne.cancelGesture) == null ? void 0 : Ge.call(ne)) ?? !1;
    return J || Re;
  }, ce = () => E();
  ne && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ce));
  let ge = null, _e = !1;
  if (H && ne)
    try {
      ad(), ge = Pu(o ? sS : i ? tS : B_, {
        model: U,
        onAction: (J) => {
          var Ae, $e, Ge;
          if ((J == null ? void 0 : J.type) === "toggle-playback") {
            E(), Z ? Z.playback.toggle() : (Ae = e.__panoOwnOutputVideoCache) == null || Ae.player.toggle(), V();
            return;
          }
          if (B(), (J == null ? void 0 : J.type) === "open-editor") {
            E(), i || (U.aspectOpen = !1), ($e = e.__panoOpenEditor) == null || $e.call(e);
            return;
          }
          if (i) {
            if ((J == null ? void 0 : J.type) === "add-image-file") {
              z(J.file);
              return;
            }
            ne.apply(J) && V();
            return;
          }
          if ((J == null ? void 0 : J.type) === "toggle-aspect") {
            U.aspectOpen = !U.aspectOpen;
            return;
          }
          if ((J == null ? void 0 : J.type) === "close-aspect") {
            U.aspectOpen = !1;
            return;
          }
          let Ce = J;
          if ((J == null ? void 0 : J.type) === "add-frame") {
            const Ke = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Ce = {
              ...J,
              ...M_(Ke, {
                width: p.width,
                height: p.height
              })
            };
          } else if ((J == null ? void 0 : J.type) === "delete-frame") {
            const Ke = bi(ln(e));
            Ke && (e.__panoPreviewView = Um(Ke, {
              width: p.width,
              height: p.height
            }));
          }
          const Re = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          U.aspectOpen = !1, ne.apply({ ...Ce, safeRect: Re }) && V();
        }
      }), ge.mount(H), _e = !0;
    } catch {
      ge = null, _e = !1;
    }
  const I = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Z && T(), V();
  }) : null;
  I == null || I.observe(g);
  const le = (J) => {
    var Re, Ae, $e;
    x.raf = 0, x.inTick = !0;
    let Ce = !1;
    try {
      if (Ce = y.stepInertia(J), x.needsDraw || Ce) {
        x.needsDraw = !1, Z ? T() : ue();
        const Ge = o ? Ow(e, Z) : null, Ke = () => mg(e, ln(e)), tt = Ge && ds(g, !!((Re = e.flags) != null && Re.collapsed)) ? Fw(e, dS(Ke(), Ge), Ke) : null;
        if ((Ae = e.flags) != null && Ae.collapsed || Dw(e, p, re, tt), U.viewUnavailable = re.failed, o) {
          const lt = X({ ...Ge, showingRun: !!tt }, Ke);
          lt && (U.status = lt);
        }
      }
    } finally {
      x.inTick = !1;
    }
    (Ce || x.needsDraw) && !x.raf && (x.raf = requestAnimationFrame(le)), YS() && (!e.__panoDebugLastTs || J - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = J, e.__panoPreviewMode, Jc(e), Ao(_), Ao(g), Ao(p), Ao(_.parentElement), Ao(($e = _.parentElement) == null ? void 0 : $e.parentElement), Number(p.width || 0), Number(p.height || 0), void 0);
  }, y = Ou({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (J) => {
      e.__panoPreviewView = J;
    },
    getViewportSize: () => {
      const J = p.getBoundingClientRect();
      return {
        w: Math.max(1, Number(J.width || p.clientWidth || 0)),
        h: Math.max(1, Number(J.height || p.clientHeight || 0))
      };
    },
    getInvert: () => {
      const J = Of();
      return {
        x: J.invert_view_x ? -1 : 1,
        y: J.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), v = i ? g : _, R = (J) => {
    const Ce = p.getBoundingClientRect();
    return {
      x: (Number(J.clientX) - Ce.left) * (p.width / Math.max(1, Ce.width)),
      y: (Number(J.clientY) - Ce.top) * (p.height / Math.max(1, Ce.height))
    };
  }, Y = (J) => {
    var Ae, $e;
    if (!i || o || !s) return;
    const Ce = ln(e), Re = Nf(
      Wc(Ce, Us(e)),
      String(((Ae = Ce == null ? void 0 : Ce.active) == null ? void 0 : Ae.selected_sticker_id) || ""),
      R(J),
      eu(e, p.width, p.height)
    );
    if (!Re) {
      p.style.cursor = "grab";
      return;
    }
    if ((($e = Re.item) == null ? void 0 : $e.locked) === !0) {
      p.style.cursor = "default";
      return;
    }
    p.style.cursor = Re.hit.cursor || "default";
  };
  p.addEventListener("pointerdown", (J) => {
    var tt, lt, zt, Dt, on, On, Ye, jt, yn, _r, jr;
    if (!$n(J, v) || J.button !== 0) return;
    if (!i) {
      const nn = bi(ln(e)), wn = e.__panoCutoutNodeFrame;
      if (!nn) {
        (tt = _.focus) == null || tt.call(_, { preventScroll: !0 }), (lt = p.setPointerCapture) == null || lt.call(p, J.pointerId), p.style.cursor = "grabbing", y.startDrag(J.clientX, J.clientY, J.pointerId);
        return;
      }
      if (nn.locked === !0 || !wn || !ne) return;
      const Hr = R(J);
      let Sr;
      if (J.shiftKey) {
        const Bn = Ym({
          frame: wn,
          point: Hr,
          startRollDeg: Number(nn.roll_deg ?? nn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Bn) return;
        Sr = { kind: "roll", pointerId: J.pointerId, rollGesture: Bn };
      } else {
        const Bn = ((zt = ln(e)) == null ? void 0 : zt.ui_settings) || Of();
        Sr = {
          kind: "pan",
          pointerId: J.pointerId,
          startPoint: Hr,
          startShot: { ...nn },
          focalPx: _i(wn, nn),
          invertX: Bn.invert_view_x === !0,
          invertY: Bn.invert_view_y === !0
        };
      }
      E(), (Dt = _.focus) == null || Dt.call(_, { preventScroll: !0 }), (on = p.setPointerCapture) == null || on.call(p, J.pointerId), p.style.cursor = "grabbing", ne.beginGesture(), oe = Sr;
      return;
    }
    if (!s) return;
    const Ce = R(J), Re = ln(e), Ae = String(((On = Re == null ? void 0 : Re.active) == null ? void 0 : On.selected_sticker_id) || ""), $e = eu(e, p.width, p.height);
    (Ye = _.focus) == null || Ye.call(_, { preventScroll: !0 });
    const Ge = () => Nf(Wc(Re, Us(e)), Ae, Ce, $e);
    let Ke = o ? null : Ge();
    if (Ke && (Z != null && Z.playback.playing) && (B(), Ke = Ge()), Ke && ne) {
      if (y.stopMotion(), E(), String(((jt = Ke.item) == null ? void 0 : jt.id) || "") !== Ae && ne.apply({ type: "select-sticker", id: Ke.item.id }), ((yn = Ke.item) == null ? void 0 : yn.locked) === !0) {
        V();
        return;
      }
      const nn = Ce, wn = Ke.geometry.center;
      j = {
        active: !0,
        kind: Ke.hit.kind,
        pointerId: J.pointerId,
        startPoint: nn,
        startCenter: { ...wn },
        startSticker: { ...Ke.item },
        startDistance: Math.max(1, Math.hypot(nn.x - wn.x, nn.y - wn.y)),
        startAngle: Math.atan2(nn.y - wn.y, nn.x - wn.x),
        projection: $e
      }, ne.beginGesture(), (_r = p.setPointerCapture) == null || _r.call(p, J.pointerId), p.style.cursor = Ke.hit.kind === "rotate" ? "grabbing" : Ke.hit.kind === "move" ? "move" : Ke.hit.cursor, V();
      return;
    }
    (jr = p.setPointerCapture) == null || jr.call(p, J.pointerId), p.style.cursor = "grabbing", y.startDrag(J.clientX, J.clientY, J.pointerId);
  }), p.addEventListener("pointermove", (J) => {
    if (!i) {
      if (!oe) {
        if (!y.state.drag.active) return;
        $n(J, v), y.moveDrag(J.clientX, J.clientY, "pano");
        return;
      }
      if (oe.pointerId !== J.pointerId || !ne) return;
      if ($n(J, v), oe.kind === "pan") {
        const Re = R(J);
        ne.updateGesture({
          type: "pan-camera",
          startShot: oe.startShot,
          dx: Re.x - oe.startPoint.x,
          dy: Re.y - oe.startPoint.y,
          focalPx: oe.focalPx,
          invertX: oe.invertX,
          invertY: oe.invertY
        });
        return;
      }
      const Ce = qm(oe.rollGesture, R(J), J);
      if (!Ce) return;
      oe.rollGesture = Ce.gesture, ne.updateGesture({ type: "set-roll", value: Ce.rollDeg });
      return;
    }
    if (!j && !y.state.drag.active) {
      Y(J);
      return;
    }
    if (j) {
      if (j.pointerId !== J.pointerId || !ne) return;
      $n(J, v);
      const Ce = R(J);
      let Re = j.startSticker;
      if (j.kind === "move")
        Re = bS(
          j.startSticker,
          {
            x: j.startCenter.x + Ce.x - j.startPoint.x,
            y: j.startCenter.y + Ce.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Ae = Math.hypot(Ce.x - j.startCenter.x, Ce.y - j.startCenter.y);
        Re = vS(j.startSticker, j.startDistance, Ae);
      } else if (j.kind === "rotate") {
        const Ae = Math.atan2(Ce.y - j.startCenter.y, Ce.x - j.startCenter.x);
        Re = _S(j.startSticker, j.startAngle, Ae, J.shiftKey === !0);
      }
      ne.updateGesture({ type: "set-transform", value: Re }), V();
      return;
    }
    !s || !y.state.drag.active || ($n(J, v), y.moveDrag(J.clientX, J.clientY, "pano"));
  });
  const S = () => {
    var Ce, Re;
    if (!oe && !j) {
      if (!y.state.drag.active) return;
      y.endDrag(), p.style.cursor = "grab", V();
      return;
    }
    if (!ne) return;
    const J = (oe == null ? void 0 : oe.pointerId) ?? (j == null ? void 0 : j.pointerId);
    oe = null, j = null;
    try {
      (Ce = p.hasPointerCapture) != null && Ce.call(p, J) && ((Re = p.releasePointerCapture) == null || Re.call(p, J));
    } catch {
    }
    ne.cancelGesture(), p.style.cursor = "grab", V();
  }, w = (J, Ce = !1) => {
    var Re, Ae, $e, Ge;
    if (!i) {
      if (!oe) {
        if (!y.state.drag.active) return;
        $n(J, v), (Re = p.releasePointerCapture) == null || Re.call(p, J.pointerId), p.style.cursor = "grab", y.endDrag(), V();
        return;
      }
      if (oe.pointerId !== J.pointerId || !ne) return;
      $n(J, v), oe = null, (Ae = p.releasePointerCapture) == null || Ae.call(p, J.pointerId), p.style.cursor = "grab", Ce ? ne.cancelGesture() : ne.commitGesture(), Y(J), V();
      return;
    }
    if (j) {
      if (j.pointerId !== J.pointerId || !ne) return;
      $n(J, v), j = null, ($e = p.releasePointerCapture) == null || $e.call(p, J.pointerId), p.style.cursor = "grab", Ce ? ne.cancelGesture() : ne.commitGesture(), V();
      return;
    }
    !s || !y.state.drag.active || ($n(J, v), (Ge = p.releasePointerCapture) == null || Ge.call(p, J.pointerId), p.style.cursor = "grab", y.endDrag(), V());
  };
  p.addEventListener("pointerup", w), p.addEventListener("pointercancel", (J) => w(J, !0)), p.addEventListener("lostpointercapture", S), p.addEventListener("pointerleave", (J) => {
    !i && oe || j || y.state.drag.active && w(J);
  });
  const D = (J) => {
    const Ce = document.activeElement;
    if (Ce !== _ && !_.contains(Ce)) return;
    if (J.key === "Escape" && (oe || j) && ne) {
      S(), tu(J);
      return;
    }
    if (!i || o || J.key !== "Delete" && J.key !== "Backspace" || !ne) return;
    const Re = J.target, Ae = String((Re == null ? void 0 : Re.tagName) || "").toUpperCase();
    Ae === "INPUT" || Ae === "TEXTAREA" || Re != null && Re.isContentEditable || U.canDelete === !0 && (B(), E(), ne.apply({ type: "delete-selected" }) && V(), tu(J));
  };
  window.addEventListener("keydown", D, !0);
  const k = WS({
    requestFrame: (J) => requestAnimationFrame(J),
    cancelFrame: (J) => cancelAnimationFrame(J),
    restore: (J) => Vw(J)
  }), N = (J) => {
    var Re, Ae, $e, Ge, Ke, tt;
    if (!$n(J, v)) return;
    if (!i) {
      const lt = bi(ln(e));
      if (lt && lt.locked !== !0 && ne) {
        const zt = Ns(J);
        zt !== 0 && (Pe || (E(), ne.beginGesture(), Pe = !0), ne.updateGesture({
          type: "step-fov",
          direction: zt
        }) ? (fe && clearTimeout(fe), fe = setTimeout(ie, 180), V()) : ne.hasGestureChanges() || (ne.cancelGesture(), Pe = !1));
      } else if (!lt) {
        const zt = Rf();
        y.applyWheelEvent(J) && V(), k.schedule(zt);
      }
      (Re = J.preventDefault) == null || Re.call(J), (Ae = J.stopPropagation) == null || Ae.call(J), ($e = J.stopImmediatePropagation) == null || $e.call(J);
      return;
    }
    if (!s) return;
    const Ce = Rf();
    y.applyWheelEvent(J) && V(), (Ge = J.preventDefault) == null || Ge.call(J), (Ke = J.stopPropagation) == null || Ke.call(J), (tt = J.stopImmediatePropagation) == null || tt.call(J), k.schedule(Ce);
  }, A = i ? [g, p] : [g];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((J) => {
    A.forEach((Ce) => Ce.addEventListener(J, N, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((J) => {
    p.addEventListener(J, (Ce) => $n(Ce, v)), g.addEventListener(J, (Ce) => $n(Ce, v));
  });
  const W = pr(e, "state_json");
  let Q = null, ae = null;
  W && !W.__panoPreviewPatchedCb && (Q = W.callback, ae = (J) => {
    const Ce = Q ? Q(J) : void 0;
    return V(), Ce;
  }, W.callback = ae, W.__panoPreviewPatchedCb = ae);
  const L = pr(e, "bg_color");
  let se = null, ve = null;
  L && !L.__panoPreviewPatchedCb && (se = L.callback, ve = (J) => {
    const Ce = se ? se(J) : void 0;
    return V(), Ce;
  }, L.callback = ve, L.__panoPreviewPatchedCb = ve);
  const we = o ? pr(e, "output_size") : null, pe = we == null ? void 0 : we.callback, be = we ? (J) => {
    const Ce = pe ? pe(J) : void 0;
    return V(), Ce;
  } : null;
  we && (we.callback = be);
  const ye = e.onRemoved, h = e.onResize, $ = e.onExecuted, C = e.onDragOver, b = e.onDragDrop;
  let F = null;
  const M = () => {
    i && (U.dropActive = !0, F && clearTimeout(F), F = setTimeout(() => {
      F = null, U.dropActive = !1;
    }, 140));
  }, q = a ? function(J) {
    return (C ? C.apply(this, arguments) : !1) === !0 ? !0 : ld(J == null ? void 0 : J.dataTransfer) ? (M(), !0) : !1;
  } : null, te = a ? function(J) {
    var Ae;
    if ((b ? b.apply(this, arguments) : !1) === !0) return !0;
    const Re = Array.from(((Ae = J == null ? void 0 : J.dataTransfer) == null ? void 0 : Ae.files) || []).find(($e) => Jn($e));
    return Re ? (F && clearTimeout(F), F = null, U.dropActive = !1, z(Re), !0) : !1;
  } : null;
  a && (e.onDragOver = q, e.onDragDrop = te);
  const Se = a ? GS(_, {
    onActive: (J) => {
      if (J) {
        M();
        return;
      }
      F && clearTimeout(F), F = null, U.dropActive = !1;
    },
    onDrop: (J) => {
      z(J);
    }
  }) : () => {
  }, xe = function(J) {
    e.__panoOutputFromRun = !0;
    const Ce = yg(e, J);
    Dr(e, Ce ? "executed" : "sync", J), V();
    const Re = $ ? $.apply(this, arguments) : void 0;
    return Lo(e), Re;
  };
  e.onExecuted = xe;
  const Ne = e.onConnectionsChange, Te = function(J, Ce) {
    const Re = mf(e, J, Ce, Zu), Ae = mf(e, J, Ce, tr), $e = arguments, Ge = Ne ? Ne.apply(this, $e) : void 0, Ke = () => {
      x.destroyed || (Ae && hw(e), Re && Dr(e, "connection-change"), Lo(e), V());
    };
    return Ke(), queueMicrotask(Ke), Ge;
  };
  e.onConnectionsChange = Te;
  const ze = function() {
    const J = h ? h.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), J;
  };
  e.onResize = ze;
  const je = function() {
    return We(), Qc.unregister(this), ye ? ye.apply(this, arguments) : void 0;
  };
  e.onRemoved = je;
  const We = () => {
    var J, Ce, Re, Ae, $e, Ge, Ke, tt, lt;
    x.destroyed = !0, (J = I == null ? void 0 : I.disconnect) == null || J.call(I), i ? E() : ee(), p.removeEventListener("lostpointercapture", S), Se(), K(), window.removeEventListener("keydown", D, !0), (Re = (Ce = e.__panoStateFlushers) == null ? void 0 : Ce.delete) == null || Re.call(Ce, ce), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ae = ne == null ? void 0 : ne.destroy) == null || Ae.call(ne), ($e = ge == null ? void 0 : ge.unmount) == null || $e.call(ge), Z && (Z.playback.dispose(), Z.video.remove(), Z.stickerVideo.remove(), e.__panoSurfacePlayback === Z && (e.__panoSurfacePlayback = null)), re.dispose(), e.__panoSurfaceScene = null, (Ke = (Ge = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ge.dispose) == null || Ke.call(Ge), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, de(), k.dispose(), F && clearTimeout(F), F = null, cd.disposeOwner(e), qi(e), gg(e), x.raf && cancelAnimationFrame(x.raf), x.raf = 0, ((tt = e.__panoCutoutNodeSurface) == null ? void 0 : tt.session) === ne && (e.__panoCutoutNodeSurface = null), ((lt = e.__panoStickersNodeSurface) == null ? void 0 : lt.session) === ne && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ze && (e.onResize = h), e.onExecuted === xe && (e.onExecuted = $), e.onConnectionsChange === Te && (e.onConnectionsChange = Ne), ae && (W == null ? void 0 : W.callback) === ae && (W.callback = Q), ae && (W == null ? void 0 : W.__panoPreviewPatchedCb) === ae && delete W.__panoPreviewPatchedCb, ve && (L == null ? void 0 : L.callback) === ve && (L.callback = se), ve && (L == null ? void 0 : L.__panoPreviewPatchedCb) === ve && delete L.__panoPreviewPatchedCb, be && we.callback === be && (we.callback = pe), e.onDragOver === q && (e.onDragOver = C), e.onDragDrop === te && (e.onDragDrop = b), e.onRemoved === je && (e.onRemoved = ye);
  };
  e.__panoDomRestore = We, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = ne && _e && !i ? { session: ne, model: U } : null, e.__panoStickersNodeSurface = ne && _e && i ? { session: ne, model: U } : null, e.__panoDomPreview = {
    widget: G,
    root: _,
    canvas: p,
    requestDraw: V,
    state: x,
    emptyHintEl: O,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Qc.register(e), e.graph && Dr(e, "attach"), V();
}
function $f(e, t = {}) {
  cg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function zf(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (lg(e) && !r) {
    ud(e);
    return;
  }
  cg(e).attach(t);
}
function Kw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Uw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, c = Math.max(0, Number.isFinite(s) ? s : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (m = Math.min(m, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function Bw({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var m;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const _ = l();
    return _ === s || (s = _, i(_)), _;
  }, d = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var _;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
      } catch {
      }
      return a ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return a || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var _, g, p;
    if (!a) {
      if (a = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", d), l())
        try {
          const O = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (p = O == null ? void 0 : O.catch) == null || p.call(O, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const Yw = { class: "pano-preview-node-surface" }, qw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Le("div", Yw, [
      Be(Xt, {
        icon: e.model.fullscreen ? rt(He).fullscreen_close : rt(He).fullscreen,
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
      e.model.viewUnavailable ? (Fe(), Rn(_l, { key: 0 })) : ht("", !0)
    ]));
  }
}, Ua = 140, Xw = 180, jf = 40, oc = 10;
function Hf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Gf(e, t) {
  const r = Hf(e), n = Hf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Wf(e) {
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
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function Xi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Xi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Wf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Xi(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Wf(e);
}
function bg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Jw(e) {
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
function nu(e) {
  var i;
  const t = (i = Zn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Gf(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Gf(o, r)) return t[o];
  return null;
}
function Zw(e) {
  var n, i;
  const t = nu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Xi(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function Qw(e, t = "erp_image") {
  var m, _, g, p, O, K, H;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((G) => String((G == null ? void 0 : G.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((G, x) => String((G == null ? void 0 : G.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(x))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (g = (_ = (m = Zn) == null ? void 0 : m.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : g.call(_, o), s = nu(o), l = nu(e == null ? void 0 : e.id), c = [
    (p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (O = s == null ? void 0 : s.ui) == null ? void 0 : O.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const G of c)
    if (Array.isArray(G))
      for (const x of G) {
        const X = Xi(x);
        if (X) return X;
      }
  let d = [];
  try {
    d = typeof ((K = Zn) == null ? void 0 : K.getNodeImageUrls) == "function" ? Zn.getNodeImageUrls(a) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const G of d) {
      const x = Xi(G);
      if (x) return x;
    }
  if (a) {
    const G = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const x of G) {
      const X = Xi(x);
      if (X) return X;
    }
  }
  const u = (H = a == null ? void 0 : a.widgets) == null ? void 0 : H.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? fn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function ac(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Kf(e, t, r, n, i, o, a) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !bg(o) || r <= 1 || n <= 1) {
    ac(t, r, n);
    return;
  }
  if (a.failed) {
    ac(t, r, n);
    return;
  }
  const s = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Vs(i, r, n),
    background: { media: o, revision: Jw(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : ac(t, r, n);
}
function Uf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ex {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = gm(() => this.requestDraw()), this.controller = Ou({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: $t(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ee(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ee(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
      const a = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onConnectionsChange = function() {
      const a = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onResize = function() {
      const a = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), a;
    }, this.node.onRemoved = function() {
      const a = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), a;
    };
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
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
        `min-height:${Ua}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = mn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Ua;
        },
        getHeight() {
          return Ua;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Gs(qc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ua, Number(o.minHeight || 0)),
            minWidth: Math.max(Xw, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return ad(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ io({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Bw({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Pu(qw, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, c;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var s, l;
          return (l = (s = this.fullscreenController) == null ? void 0 : s.toggle) == null ? void 0 : l.call(s);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = ph(r), t.addEventListener("pointerdown", (o) => {
      var a, s, l;
      o.button === 0 && ((a = r.focus) == null || a.call(r, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const n = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), r.addEventListener("keydown", (o) => {
      var a;
      Kw(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !bg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? ds(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Zn.canvas) != null && n.graph) || this.node.graph === Zn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var a;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Uf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, c, d, u, f, m;
      const o = vw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Uf(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), s && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (m = r == null ? void 0 : r.stopImmediatePropagation) == null || m.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - oc * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - jf - oc);
    return { x: oc, y: jf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Kf(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? mm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Uw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = Zw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ul(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, c = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", c), s.addEventListener("play", c), s.addEventListener("pause", c), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", c), s.removeEventListener("play", c), s.removeEventListener("pause", c), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = Qw(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = r;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Kf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, c, d, u, f, m, _, g, p, O;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (m = this.root) == null ? void 0 : m.remove) == null || _.call(m);
    } catch {
    }
    try {
      og(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((O = (p = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : p.find) == null ? void 0 : O.call(p, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function tx(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new ex(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function vg(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
}
function fd(e) {
  return !!(e != null && e.prototype);
}
function ua(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function nx(e, t = {}) {
  fd(e) || tx(e, {
    ...t,
    onOpen: ua(e, t.onOpen)
  });
}
function rx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!fd(e)) {
    zf(e, {
      ...n,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  vg(e, "stickers_node_preview", (i) => {
    zf(i, {
      ...n,
      onOpen: ua(i, t.onOpen)
    });
  });
}
function ix(e, t = {}) {
  if (!fd(e)) {
    $f(e, {
      ...t,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  vg(e, "cutout_preview", (r) => {
    $f(r, {
      ...t,
      onOpen: ua(r, t.onOpen)
    });
  });
}
const Pn = {
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
}, Ar = "pen";
function Bf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function ox({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(r))
      n.delete(a) && s();
  }
  return {
    request(a) {
      n.add(a), i ?? (i = e(o));
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
}), ax = new Set(Object.values(ft));
function sx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (p) {
      i(p);
    }
  }
  function m() {
    !o && !a && !s && (o = e(_));
  }
  function _(g) {
    o = 0, a = !0;
    try {
      const p = c;
      c = /* @__PURE__ */ new Map();
      for (const K of p.values()) f(() => K(g));
      if (s) return;
      const O = l;
      l = /* @__PURE__ */ new Set(), (O.size || n()) && f(() => r(g, O));
    } finally {
      a = !1;
    }
    (l.size || c.size || n()) && m();
  }
  return {
    requestDraw(g) {
      if (!ax.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ft.STATE && (u += 1), l.add(g), m();
    },
    requestFrame(g) {
      const p = d++;
      return c.set(p, g), m(), p;
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
      s = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const lx = { class: "pano-floating-right" }, cx = {
  key: 0,
  class: "pano-floating-space"
}, ux = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, dx = ["data-settled"], fx = ["data-ready", "data-settled"], px = ["aria-label", "data-tip"], hx = {
  key: 1,
  class: "pano-camera-preview-label"
}, mx = {
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
    return (t, r) => (Fe(), Le(Qe, null, [
      Me("div", lx, [
        e.space ? Tr((Fe(), Le("div", cx, [
          Me("div", ux, [
            (Fe(!0), Le(Qe, null, Mt(e.space.modes, (n) => (Fe(), Rn(Xt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(Xt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [vi, e.space.visible]
        ]) : ht("", !0),
        (Fe(!0), Le(Qe, null, Mt(e.buttons, (n) => (Fe(), Rn(Xt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Tr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ct({
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
          e.previewToggle.visible ? (Fe(), Le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(Tt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, px)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Fe(), Le("div", hx, it(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, fx)
      ], 8, dx), [
        [vi, e.preview.visible]
      ])
    ], 64));
  }
}, gx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, yx = ["y2", "transform"], bx = ["transform"], vx = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Tr((Fe(), Le("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Fe(), Le("svg", gx, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Fe(!0), Le(Qe, null, Mt(rt(r), (a) => (Fe(), Le("line", {
          key: a,
          class: mt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, yx))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, bx),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [vi, e.model.visible === !0]
    ]);
  }
}, _x = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Le("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(Jm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(Xt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(vx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Sx = ["aria-label"], wx = { class: "pano-canvas-confirm-title" }, xx = { class: "pano-canvas-confirm-text" }, kx = { class: "pano-canvas-confirm-actions" }, Mx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Px = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Kt(null), n = /* @__PURE__ */ Kt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(u) {
      const f = n.value;
      if (!f) return;
      const m = f.querySelector(`[data-action='${u}']`);
      m instanceof HTMLButtonElement && m.click();
    }
    function s() {
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
      var O;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), m = n.value;
      if (!f.length) {
        u.preventDefault(), (O = m == null ? void 0 : m.focus) == null || O.call(m);
        return;
      }
      const _ = f[0], g = f[f.length - 1], p = document.activeElement;
      if (u.shiftKey) {
        (p === _ || p === m || !(m != null && m.contains(p))) && (u.preventDefault(), g.focus());
        return;
      }
      (p === g || !(m != null && m.contains(p))) && (u.preventDefault(), _.focus());
    }
    function d(u) {
      u.target === r.value && a("confirm-cancel");
    }
    return mi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, il(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ha(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Fe(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Pt(d, ["self"])
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
        Me("div", wx, it(e.model.title), 1),
        Me("div", xx, it(e.model.text), 1),
        Me("div", kx, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", Mx, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Sx)
    ], 512)) : ht("", !0);
  }
}, Nx = ["data-paint-pane"], Cx = ["hidden"], Ax = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Ix = ["aria-pressed", "disabled"], Ex = ["hidden"], Ox = { class: "pano-paint-color-pop-head" }, Fx = { class: "pano-paint-color-field" }, Tx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Dx = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Lx = { class: "pano-paint-color-field" }, Rx = { class: "pano-paint-alpha-wrap" }, Vx = ["value"], $x = { "data-paint-alpha-value": "" }, zx = ["hidden"], jx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Hx = ["data-paint-history-index", "aria-label", "disabled"], Gx = ["data-paint-footer"], Wx = ["data-paint-group"], Kx = ["hidden"], Ux = ["value", "disabled"], Bx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Yx = ["hidden"], qx = {
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
    return (n, i) => (Fe(), Le("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Fe(!0), Le(Qe, null, Mt(e.panes, (o) => {
        var a;
        return Fe(), Le("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Fe(), Le("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Fe(!0), Le(Qe, null, Mt(e.paintSwatches, (s) => (Fe(), Le("button", {
              key: s.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Ct(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Ax))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ct({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Ix),
            Me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ct({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Me("div", Ox, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ct({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", Fx, [
                Me("div", Tx, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ct({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", Dx, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ct({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", Lx, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", Rx, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Vx),
                  Me("span", $x, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", jx, [
                  (Fe(!0), Le(Qe, null, Mt(e.state.historyEntries || [], (s) => (Fe(), Le("button", {
                    key: s.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Ct(r(s.color))
                  }, null, 14, Hx))), 128))
                ])
              ], 8, zx)
            ], 12, Ex)
          ], 10, Cx)) : ht("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Fe(!0), Le(Qe, null, Mt(o.tools, (s) => {
                var l;
                return Fe(), Rn(Xt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Wx),
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
                style: Ct({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Ux),
              Me("span", Bx, it(e.state.sizeText || "10"), 1)
            ], 10, Kx),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Be(Xt, {
                icon: rt(He).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Yx)
          ], 8, Gx)
        ], 10, Nx);
      }), 128))
    ], 2));
  }
}, Xx = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Kt(null), n = /* @__PURE__ */ Kt(null), i = /* @__PURE__ */ Kt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Fe(), Le(Qe, null, [
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
}, Jx = ["aria-label"], Zx = ["data-tip", "aria-pressed"], Qx = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Fe(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Ct({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Fe(!0), Le(Qe, null, Mt(e.buttons, (o) => (Fe(), Le("button", Cr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), it(o.label), 17, Zx))), 128))
    ], 12, Jx));
  }
}, ek = {
  key: 0,
  class: "pano-cutout-menu"
}, tk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, nk = ["data-aspect"], rk = ["data-action", "aria-label", "data-tip", "disabled"], ik = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ct({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Fe(!0), Le(Qe, null, Mt(e.model.items || [], (n) => (Fe(), Le(Qe, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Fe(), Le("div", ek, [
          Me("button", tk, [
            Be(Tt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Fe(!0), Le(Qe, null, Mt(n.choices || [], (i) => (Fe(), Le("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, it(i.label), 11, nk))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Fe(), Rn(Qx, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Fe(), Le("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be(Tt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, rk))
      ], 64))), 128))
    ], 4));
  }
}, ok = {
  key: 0,
  class: "pano-easing"
}, ak = { class: "pano-section-title" }, sk = { class: "pano-easing-range" }, lk = { class: "pano-easing-modes" }, ck = ["aria-pressed", "onClick"], uk = ["viewBox"], dk = ["x", "y"], fk = ["x1", "y1", "x2", "y2"], pk = ["d"], hk = ["x1", "y1", "x2", "y2"], mk = ["x1", "y1", "x2", "y2"], gk = ["cx", "cy"], yk = ["cx", "cy"], bk = { class: "pano-easing-note" }, Mr = 132, si = 14, vk = {
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
    ], o = /* @__PURE__ */ Kt(null), a = dt(() => {
      var _;
      return Array.isArray((_ = r.model) == null ? void 0 : _.easing) ? r.model.easing : null;
    }), s = (_) => si + _ * Mr, l = (_) => si + (1 - _) * Mr, c = dt(() => {
      var K;
      if (((K = r.model) == null ? void 0 : K.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [_, g, p, O] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(_)} ${l(g)} ${s(p)} ${l(O)} ${s(1)} ${l(1)}`;
    }), d = dt(() => a.value ? a.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var g;
      return JSON.stringify(_.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(_, g) {
      n("timeline", { type: "easing", easing: _, commit: g });
    }
    function m(_, g) {
      var G;
      if (_.button !== 0 || !a.value) return;
      const p = _.currentTarget;
      (G = p.setPointerCapture) == null || G.call(p, _.pointerId);
      let O = null;
      const K = (x) => {
        const X = o.value.getBoundingClientRect(), V = X.width / (Mr + si * 2), re = ((x.clientX - X.left) / V - si) / Mr, U = 1 - ((x.clientY - X.top) / V - si) / Mr;
        O = [...O || a.value], O[g] = Math.round(Math.min(1, Math.max(0, re)) * 100) / 100, O[g + 1] = Math.round(Math.min(1, Math.max(0, U)) * 100) / 100, f(O, !1);
      }, H = () => {
        p.removeEventListener("pointermove", K), p.removeEventListener("pointerup", H), p.removeEventListener("pointercancel", H), O && f(O, !0);
      };
      p.addEventListener("pointermove", K), p.addEventListener("pointerup", H), p.addEventListener("pointercancel", H);
    }
    return (_, g) => e.model ? (Fe(), Le("div", ok, [
      Me("div", ak, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", sk, it(e.model.label), 1)
      ]),
      Me("div", lk, [
        (Fe(), Le(Qe, null, Mt(i, (p) => Me("button", {
          key: p.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(p) ? "true" : "false",
          onClick: (O) => f(p.easing, !0)
        }, it(p.label), 9, ck)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Fe(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Mr + si * 2} ${Mr + si * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Mr,
          height: Mr
        }, null, 8, dk),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, fk),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, pk),
        a.value ? (Fe(), Le(Qe, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, hk),
          Me("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, mk),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (p) => m(p, 0))
          }, null, 40, gk),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (p) => m(p, 2))
          }, null, 40, yk)
        ], 64)) : ht("", !0)
      ], 8, uk)) : ht("", !0),
      Me("div", bk, [
        e.model.mixed ? (Fe(), Le(Qe, { key: 0 }, [
          Eo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Fe(), Le(Qe, { key: 1 }, [
          Eo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Fe(), Le(Qe, { key: 2 }, [
          Eo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Fe(), Le(Qe, { key: 3 }, [
          Eo("cubic-bezier(" + it(d.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, _k = {
  class: "pano-side",
  "data-side": ""
}, Sk = { class: "pano-side-head" }, wk = { class: "pano-side-title" }, xk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, kk = {
  key: 0,
  class: "pano-side-scroll"
}, Mk = { class: "pano-inspector" }, Pk = { class: "pano-ui-row pano-coverage-row" }, Nk = ["data-selected"], Ck = ["aria-pressed", "disabled"], Ak = ["aria-pressed", "disabled"], Ik = {
  key: 0,
  class: "pano-section-title"
}, Ek = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Ok = {
  class: "pano-picker",
  "data-picker": "selection"
}, Fk = ["disabled"], Tk = { class: "pano-picker-label" }, Dk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Lk = ["hidden"], Rk = ["data-selection-id"], Vk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $k = {
  key: 2,
  class: "pano-state-actions"
}, zk = ["disabled"], jk = ["data-key"], Hk = { class: "pano-field-group-values" }, Gk = ["title", "onPointerdown"], Wk = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], Kk = ["data-key"], Uk = ["min", "max", "step", "value", "disabled", "data-param-key"], Bk = ["min", "max", "step", "value", "disabled", "data-param-key"], Yk = ["open"], qk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Xk = { class: "pano-ui-settings-body" }, Jk = { class: "pano-ui-row" }, Zk = ["data-selected"], Qk = ["aria-pressed"], eM = ["aria-pressed"], tM = { class: "pano-ui-row" }, nM = ["data-selected"], rM = ["aria-pressed"], iM = ["aria-pressed"], oM = {
  key: 1,
  class: "pano-side-footer"
}, aM = ["data-action"], sM = {
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
    function a(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const s = {};
    function l(c, d) {
      const u = s[d.key];
      if (c.button !== 0 || !u || a(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, m = c.clientX, _ = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const p = (K) => {
        if (!g && Math.abs(K.clientX - m) < 3) return;
        g = !0;
        const H = _ + (K.clientX - m) * d.drag * (K.shiftKey ? 0.1 : 1);
        u.value = String(Number(H.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, O = () => {
        f.removeEventListener("pointermove", p), f.removeEventListener("pointerup", O), f.removeEventListener("pointercancel", O), f.removeEventListener("lostpointercapture", O), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", p), f.addEventListener("pointerup", O), f.addEventListener("pointercancel", O), f.addEventListener("lostpointercapture", O);
    }
    return (c, d) => {
      var u, f, m, _, g;
      return Fe(), Le("div", _k, [
        Me("div", Sk, [
          Me("div", wk, [
            Me("span", xk, [
              Be(Tt, {
                icon: rt(He).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Fe(), Le("div", kk, [
          Me("div", Mk, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", Pk, [
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
                }, "360", 8, Ck),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, Ak)
              ], 8, Nk)
            ]),
            e.model.transformTitle !== !1 ? (Fe(), Le("div", Ik, [...d[3] || (d[3] = [
              Me("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Fe(), Le("div", Ek, [
              Me("label", null, it(e.model.selectionPicker.label), 1),
              Me("div", Ok, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", Tk, [
                    e.model.selectionPicker.currentIcon ? (Fe(), Le("span", Dk, [
                      Be(Tt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Me("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Fk),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Fe(!0), Le(Qe, null, Mt(e.model.selectionPicker.items || [], (p) => (Fe(), Le("button", {
                    key: p.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: p.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": p.id
                  }, [
                    p.icon ? (Fe(), Le("span", Vk, [
                      Be(Tt, {
                        icon: p.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Me("span", null, it(p.label), 1)
                  ], 10, Rk))), 128))
                ], 8, Lk)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Fe(), Le("div", $k, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(Tt, {
                  icon: rt(He).copy
                }, null, 8, ["icon"]),
                Me("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, zk)
            ])) : ht("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Fe(!0), Le(Qe, { key: 0 }, Mt(e.model.notes, (p) => (Fe(), Le("div", {
                key: p,
                class: "pano-param-note"
              }, it(p), 1))), 128)) : (Fe(!0), Le(Qe, { key: 1 }, Mt(e.model.rows || [], (p) => (Fe(), Le(Qe, {
                key: p.key
              }, [
                p.grouped ? (Fe(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": p.key
                }, [
                  Me("label", null, it(p.label), 1),
                  Me("div", Hk, [
                    (Fe(!0), Le(Qe, null, Mt(p.fields, (O) => (Fe(), Le("div", {
                      key: O.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: a(O, e.model) }]),
                        title: O.label,
                        onPointerdown: (K) => l(K, O)
                      }, it(O.short), 43, Gk),
                      Me("input", {
                        ref_for: !0,
                        ref: (K) => {
                          s[O.key] = K;
                        },
                        type: "number",
                        min: O.min,
                        max: O.max,
                        step: O.step,
                        value: O.displayValue,
                        disabled: a(O, e.model),
                        "aria-label": `${p.label} ${O.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": O.key
                      }, null, 8, Wk)
                    ]))), 128))
                  ])
                ], 8, jk)) : (Fe(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": p.key
                }, [
                  Me("label", null, it(p.label), 1),
                  Me("input", {
                    type: "range",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].value,
                    disabled: a(p.fields[0], e.model),
                    style: Ct(o(p.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": p.fields[0].key
                  }, null, 12, Uk),
                  Me("input", {
                    type: "number",
                    min: p.fields[0].min,
                    max: p.fields[0].max,
                    step: p.fields[0].step,
                    value: p.fields[0].displayValue,
                    disabled: a(p.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": p.fields[0].key
                  }, null, 8, Bk)
                ], 8, Kk))
              ], 64))), 128))
            ], 2),
            Be(vk, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (p) => n("timeline", p))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Fe(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", qk, [
                  Be(Tt, {
                    icon: rt(He).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", Xk, [
                Me("div", Jk, [
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
                    }, "Normal", 8, Qk),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, eM)
                  ], 8, Zk)
                ]),
                Me("div", tM, [
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
                    }, "Normal", 8, rM),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, iM)
                  ], 8, nM)
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
            ], 8, Yk)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Fe(), Le("div", oM, [
          (Fe(!0), Le(Qe, null, Mt(e.model.footerButtons, (p) => (Fe(), Le("button", {
            key: p.action,
            class: mt(["pano-btn", { "pano-btn-primary": p.primary === !0 }]),
            type: "button",
            "data-action": p.action
          }, it(p.label), 11, aM))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, lM = { class: "pano-timeline-bar" }, cM = ["aria-label", "data-tip"], uM = ["aria-label", "data-tip"], dM = { class: "pano-timeline-time" }, fM = ["data-tip"], pM = { key: 0 }, hM = ["min", "max", "value"], mM = ["data-tip"], gM = { key: 0 }, yM = ["max", "value"], bM = ["aria-expanded"], vM = ["inert"], _M = { class: "pano-timeline-name" }, SM = ["aria-pressed", "aria-label", "data-tip", "onClick"], wM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, xM = ["disabled", "aria-expanded", "aria-label", "onClick"], kM = ["title", "aria-current", "onClick"], MM = ["data-keyed", "aria-label", "onClick"], PM = ["onPointerdown"], NM = ["onPointerdown"], CM = ["onPointerdown"], AM = ["onPointerdown"], IM = ["aria-label", "data-tip", "onPointerdown"], EM = { key: 0 }, OM = ["onPointerdown"], FM = ["aria-label", "data-tip", "onPointerdown"], TM = { key: 0 }, DM = 10, LM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ bs(0), playing: /* @__PURE__ */ bs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Kt(null), o = /* @__PURE__ */ Kt(null), a = /* @__PURE__ */ Kt(1), s = /* @__PURE__ */ Kt(0), l = /* @__PURE__ */ Kt(!1);
    let c = null, d = null, u = null;
    al(() => {
      c = new ResizeObserver(([me]) => {
        a.value = Math.max(1, me.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([me]) => {
        s.value = me.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ha(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), m = dt(() => r.playhead.frame.value), _ = dt(() => r.playhead.playing.value), g = dt(() => N1(m.value, Number(r.model.fps || 1))), p = dt(() => a.value / f.value), O = (me) => `${me / f.value * 100}%`, K = dt(() => j1(f.value, p.value));
    function H(me) {
      const de = i.value.getBoundingClientRect(), P = Math.floor((me - de.left) / Math.max(1, de.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, P));
    }
    function G(me, de, P) {
      const z = Math.ceil(DM / Math.max(1e-6, p.value)), oe = new Map(de.map((j) => [j.frame, j.full]));
      return H1(de.map((j) => j.frame), z).map((j, fe) => ({
        ...j,
        key: `${me}:${fe}`,
        partial: j.frames.some((Pe) => !oe.get(Pe)),
        selected: j.frames.some((Pe) => P.includes(Pe))
      }));
    }
    const x = dt(() => {
      const me = /* @__PURE__ */ new Map();
      for (const de of r.model.rows || []) {
        me.set(de.id, G(de.id, de.keys, de.selectedFrames));
        for (const P of de.lanes) me.set(P.key, G(P.key, P.frames.map((z) => ({ frame: z, full: !0 })), P.selectedFrames));
      }
      return me;
    });
    function X(me) {
      const de = me.end === null ? f.value : me.end;
      return { left: O(me.start), width: O(Math.max(0, de - me.start)) };
    }
    function V(me, de) {
      const P = me.clientX, z = Math.max(1e-6, p.value);
      let oe = 0;
      de("start", 0, me);
      const j = (Pe) => {
        if (Pe.pointerId !== me.pointerId) return;
        const ie = Math.round((Pe.clientX - P) / z);
        ie !== oe && (oe = ie, de("move", oe, Pe));
      }, fe = (Pe) => {
        Pe.pointerId === me.pointerId && (u(), de("end", oe, Pe));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), u = null;
      }, window.addEventListener("pointermove", j), window.addEventListener("pointerup", fe), window.addEventListener("pointercancel", fe);
    }
    function re(me) {
      me.button === 0 && V(me, (de, P, z) => n("action", { type: "seek", frame: H(z.clientX), phase: de }));
    }
    function U(me, de, P) {
      me.button === 0 && (n("action", { type: "select-row", id: de.id }), V(me, (z, oe) => n("action", { type: "clip", id: de.id, mode: P, delta: oe, phase: z })));
    }
    function Z(me, de, P, z, oe) {
      if (me.button === 0) {
        if (me.shiftKey) {
          n("action", { type: "select-keys", owner: de.id, lane: P, frames: z.frames, additive: !0 });
          return;
        }
        z.frames.every((j) => oe.includes(j)) || n("action", { type: "select-keys", owner: de.id, lane: P, frames: z.frames, additive: !1 }), V(me, (j, fe) => n("action", { type: "move-keys", delta: fe, phase: j }));
      }
    }
    const T = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ue(me, de, P) {
      n("action", de), await il(), me.target.value = P();
    }
    function B(me) {
      ue(me, { type: "fps", fps: Number(me.target.value) }, () => T.value);
    }
    function he(me) {
      const de = me.target.value.trim();
      ue(me, { type: "length", length: de ? Number(de) : null }, () => r.model.length ?? "");
    }
    function ne(me, de, P) {
      me.button !== 0 || me.target !== me.currentTarget || n("action", { type: "select-keys", owner: de.id, lane: P, frames: [], additive: !1 });
    }
    return (me, de) => Tr((Fe(), Le("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", lM, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: de[0] || (de[0] = (P) => n("action", { type: "play" }))
        }, [
          Be(Tt, {
            icon: _.value ? rt(He).pause : rt(He).play
          }, null, 8, ["icon"])
        ], 8, cM),
        e.model.hasAudio ? (Fe(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: de[1] || (de[1] = (P) => n("action", { type: "mute" }))
        }, [
          Be(Tt, {
            icon: e.model.muted ? rt(He).volume_muted : rt(He).volume2
          }, null, 8, ["icon"])
        ], 8, uM)) : ht("", !0),
        Me("span", dM, it(g.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Fe(), Le("span", pM, it(T.value), 1)) : (Fe(), Le("input", {
            key: 1,
            type: "number",
            min: rt(Ch),
            max: rt(Vu),
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: B
          }, null, 40, hM)),
          de[6] || (de[6] = Me("span", null, "fps", -1))
        ], 8, fM),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          de[7] || (de[7] = Me("span", null, "Length", -1)),
          e.model.lengthLocked ? (Fe(), Le("span", gM, it(e.model.length), 1)) : (Fe(), Le("input", {
            key: 1,
            type: "number",
            min: "1",
            max: rt($u),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: he
          }, null, 40, yM))
        ], 8, mM),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: de[2] || (de[2] = (P) => n("action", { type: "toggle-expanded" }))
        }, [
          de[8] || (de[8] = Me("span", null, "Timeline", -1)),
          Be(Tt, {
            icon: rt(He).chevron
          }, null, 8, ["icon"])
        ], 8, bM)
      ]),
      Me("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Ct({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: de[3] || (de[3] = Pt((P) => l.value = !0, ["self"])),
        onTransitionend: de[4] || (de[4] = Pt((P) => l.value = !1, ["self"])),
        onTransitioncancel: de[5] || (de[5] = Pt((P) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          de[9] || (de[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: re
          }, [
            (Fe(!0), Le(Qe, null, Mt(K.value, (P) => (Fe(), Le("span", {
              key: P,
              class: "pano-timeline-tick",
              style: Ct({ left: O(P) })
            }, it(P), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Ct({ left: O(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Fe(!0), Le(Qe, null, Mt(e.model.rows || [], (P) => (Fe(), Le(Qe, {
            key: P.id
          }, [
            Me("div", {
              class: mt(["pano-timeline-head", { selected: P.selected, "is-hidden": !P.visible }])
            }, [
              Me("div", _M, [
                P.hideable ? (Fe(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": P.visible ? "true" : "false",
                  "aria-label": `${P.label} visible`,
                  "data-tip": P.visible ? "Hide" : "Show",
                  onClick: Pt((z) => n("action", { type: "toggle-visible", id: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: P.visible ? rt(He).eye : rt(He).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, SM)) : (Fe(), Le("span", wM)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !P.keyable,
                  "aria-expanded": P.open ? "true" : "false",
                  "aria-label": P.open ? `Hide ${P.label} parameters` : `Show ${P.label} parameters`,
                  onClick: Pt((z) => n("action", { type: "toggle-row", id: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: rt(He).chevron
                  }, null, 8, ["icon"])
                ], 8, xM),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: P.label,
                  "aria-current": P.selected ? "true" : void 0,
                  onClick: (z) => n("action", { type: "select-row", id: P.id })
                }, [
                  Be(Tt, {
                    icon: P.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, it(P.label), 1)
                ], 8, kM),
                P.keyable ? (Fe(), Le("button", {
                  key: 2,
                  class: mt(["pano-timeline-key", { keyed: rt(Zl)(P.keys, m.value) }]),
                  type: "button",
                  "data-keyed": rt(Zl)(P.keys, m.value) ? "true" : "false",
                  "aria-label": rt(Zl)(P.keys, m.value) ? `Every ${P.label} parameter has a keyframe here; update them` : `Add keyframes for every ${P.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Pt((z) => n("action", { type: "key-row", owner: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: rt(He).keyframe
                  }, null, 8, ["icon"])
                ], 10, MM)) : ht("", !0)
              ]),
              P.open ? (Fe(!0), Le(Qe, { key: 0 }, Mt(P.lanes, (z) => (Fe(), Le("div", {
                key: z.key,
                class: "pano-timeline-lane-head"
              }, it(z.label), 1))), 128)) : ht("", !0)
            ], 2),
            Me("div", {
              class: mt(["pano-timeline-track", { selected: P.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (z) => ne(z, P, null)
              }, [
                P.clip ? (Fe(), Le("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: P.clip.end === null }]),
                  style: Ct(X(P.clip)),
                  onPointerdown: Pt((z) => U(z, P, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Pt((z) => U(z, P, "start"), ["stop"])
                  }, null, 40, CM),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Pt((z) => U(z, P, "end"), ["stop"])
                  }, null, 40, AM)
                ], 46, NM)) : ht("", !0),
                (Fe(!0), Le(Qe, null, Mt(x.value.get(P.id), (z) => (Fe(), Le("button", {
                  key: z.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: z.selected, cluster: z.frames.length > 1, partial: z.partial }]),
                  style: Ct({ left: O(z.frame + 0.5) }),
                  "aria-label": `${P.label}: ${z.frames.length > 1 ? `${z.frames.length} keyframes` : `keyframe at frame ${z.frames[0]}`}`,
                  "data-tip": z.frames.length > 1 ? `${z.frames.length} keyframes` : `Frame ${z.frames[0]}`,
                  onPointerdown: Pt((oe) => Z(oe, P, null, z, P.selectedFrames), ["stop"])
                }, [
                  z.frames.length > 1 ? (Fe(), Le("span", EM, it(z.frames.length), 1)) : ht("", !0)
                ], 46, IM))), 128))
              ], 40, PM),
              P.open ? (Fe(!0), Le(Qe, { key: 0 }, Mt(P.lanes, (z) => (Fe(), Le("div", {
                key: z.key,
                class: "pano-timeline-lane",
                onPointerdown: (oe) => ne(oe, P, z.lane)
              }, [
                (Fe(!0), Le(Qe, null, Mt(x.value.get(z.key), (oe) => (Fe(), Le("button", {
                  key: oe.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: oe.selected, cluster: oe.frames.length > 1 }]),
                  style: Ct({ left: O(oe.frame + 0.5) }),
                  "aria-label": `${z.label}: ${oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `keyframe at frame ${oe.frames[0]}`}`,
                  "data-tip": oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `Frame ${oe.frames[0]}`,
                  onPointerdown: Pt((j) => Z(j, P, z.lane, oe, z.selectedFrames), ["stop"])
                }, [
                  oe.frames.length > 1 ? (Fe(), Le("span", TM, it(oe.frames.length), 1)) : ht("", !0)
                ], 46, FM))), 128))
              ], 40, OM))), 128)) : ht("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Ct({ left: O(m.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, vM)
    ], 2)), [
      [vi, e.model.visible]
    ]);
  }
}, RM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Le("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Ct({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, VM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, $M = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Fe(), Le("div", VM, [
      (Fe(!0), Le(Qe, null, Mt(e.buttons, (n) => Tr((Fe(), Rn(Xt, {
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
        [vi, n.visible !== !1]
      ])), 128))
    ]));
  }
}, zM = ["data-video-ready"], jM = { class: "pano-video-transport-shell" }, HM = { class: "pano-video-controls-left" }, GM = { class: "pano-video-filmstrip" }, WM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, KM = ["src", "onLoad"], UM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, BM = ["max", "value", "disabled"], YM = { class: "pano-video-controls-right" }, qM = ["data-has-audio"], XM = { class: "pano-video-volume-pop" }, JM = ["value", "disabled"], ZM = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? He.pause : He.play;
    }), o = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = dt(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? He.loop_off : He.loop;
    }), l = dt(() => {
      var x, X;
      return ((x = t.state) == null ? void 0 : x.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var x, X, V;
      return ((x = t.state) == null ? void 0 : x.hasAudio) !== !0 ? He.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number(((V = t.state) == null ? void 0 : V.volume) ?? 1) <= 0 ? He.volume_muted : He.volume2;
    }), d = dt(() => {
      var x;
      return Math.max(0, Math.min(100, Number(((x = t.state) == null ? void 0 : x.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var re, U;
      const x = (re = t.state) == null ? void 0 : re.volumePct, X = Number(((U = t.state) == null ? void 0 : U.volume) ?? 1) * 100, V = Number(x ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, V))}%`
      };
    }), m = dt(() => {
      var V, re;
      const X = [
        String(((V = t.state) == null ? void 0 : V.currentTimeLabel) || "0:00"),
        String(((re = t.state) == null ? void 0 : re.durationLabel) || "0:00")
      ].reduce((U, Z) => Math.max(U, Z.length), 4);
      return `${Math.max(4, X)}ch`;
    }), _ = dt(() => ({ "--pano-video-time-ch": m.value })), g = dt(() => {
      var V, re;
      const x = Array.isArray((V = t.state) == null ? void 0 : V.thumbnails) ? t.state.thumbnails : [];
      if (x.length) return x;
      const X = Math.max(7, Number(((re = t.state) == null ? void 0 : re.thumbnailCount) || 9));
      return Array.from({ length: X }, (U, Z) => ({
        id: `placeholder-${Z}`,
        src: "",
        label: ""
      }));
    }), p = /* @__PURE__ */ Kt(/* @__PURE__ */ new Set()), O = (x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.src) || (x == null ? void 0 : x.label) || ""), K = (x) => p.value.has(O(x)), H = (x) => {
      const X = new Set(p.value);
      X.add(O(x)), p.value = X;
    };
    mi(g, (x) => {
      const X = new Set(x.map(O)), V = /* @__PURE__ */ new Set();
      for (const re of p.value)
        X.has(re) && V.add(re);
      p.value = V;
    }, { immediate: !0 });
    const G = dt(() => {
      var x;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((x = t.state) == null ? void 0 : x.shellMaxWidthPx) || 640))}px`
      };
    });
    return (x, X) => (Fe(), Le("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ct(G.value)
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
      Me("div", jM, [
        Me("div", HM, [
          Be(Xt, {
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
            style: Ct(_.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", GM, [
          Me("div", WM, [
            (Fe(!0), Le(Qe, null, Mt(g.value, (V) => (Fe(), Le("div", {
              key: O(V),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !V.src,
                "is-loaded": V.src && K(V)
              }])
            }, [
              V.src ? (Fe(), Le("img", {
                key: 0,
                src: V.src,
                alt: "",
                draggable: "false",
                onLoad: (re) => H(V)
              }, null, 40, KM)) : (Fe(), Le("span", UM))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: Ct(u.value),
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
          }, null, 8, BM)
        ]),
        Me("div", YM, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ct(_.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          Be(Xt, {
            "extra-class": "pano-video-control",
            icon: s.value,
            label: o.value,
            tip: a.value,
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
            Me("div", XM, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ct(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, JM)
            ]),
            Be(Xt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, qM)
        ])
      ])
    ], 14, zM));
  }
}, QM = { class: "pano-floating-top" }, eP = ["data-selected", "data-view-count"], tP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], nP = { class: "label" }, rP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Fe(), Le("div", QM, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Fe(!0), Le(Qe, null, Mt(e.buttons, (i) => Tr((Fe(), Le("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(Tt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", nP, it(i.label), 1)
          ], 10, tP)), [
            [vi, i.visible !== !1]
          ])), 128))
        ], 8, eP)
      ]);
    };
  }
};
function _g(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: He.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: He.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: He.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: He.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: He.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: He.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: He.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: He.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: He.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: He.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: He.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: He.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: He.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: He.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: He.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: He.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: He.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: He.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: He.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: He.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: He.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: He.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: He.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: He.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: He.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: He.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: He.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: He.lasso_tool }
        ]
      }
    ]
  };
}
const iP = ["aria-label"], oP = { class: "pano-stage-column" }, aP = { class: "pano-stage-wrap" }, sP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, lP = {
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
    let o = "", a = !1, s = null;
    const l = /* @__PURE__ */ Kt(null), c = /* @__PURE__ */ Kt(null), d = /* @__PURE__ */ Kt(null);
    function u() {
      var Z, T;
      return ((T = (Z = d.value) == null ? void 0 : Z.getRefs) == null ? void 0 : T.call(Z)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(Z) {
      var T, ue;
      return ((ue = (T = c.value) == null ? void 0 : T.open) == null ? void 0 : ue.call(T, Z)) === !0;
    }
    function m(Z) {
      i("image-file-selected", Z);
    }
    function _(Z) {
      i("image-file-cancelled", Z);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = dt(() => n.readOnly === !0), p = dt(() => n.shellPreset || _g(n.type)), O = dt(() => {
      var T, ue, B;
      const Z = String((((T = n.uiState) == null ? void 0 : T.stageStatus) === "failed" ? (ue = n.uiState) == null ? void 0 : ue.stageStatusDetail : (B = n.uiState) == null ? void 0 : B.stageWarningDetail) ?? "");
      return Z === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : Z === "stickers" ? "One or more sticker previews are unavailable." : Z === "frame" ? "The editor hit a rendering error. Check the browser console for details." : Z === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : Z.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = dt(() => {
      var T;
      const Z = Array.isArray((T = p.value) == null ? void 0 : T.floatingButtons) ? p.value.floatingButtons.slice() : [];
      return g.value && Z.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: He.fullscreen
      }), Z;
    });
    function H() {
      const Z = l.value;
      return Z ? Array.from(Z.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function G() {
      var ue;
      const T = H()[0] || l.value;
      (ue = T == null ? void 0 : T.focus) == null || ue.call(T);
    }
    function x() {
      var Z;
      s != null && s.isConnected && ((Z = s.focus) == null || Z.call(s)), s = null;
    }
    function X(Z) {
      var T, ue, B, he;
      if (!Z.defaultPrevented) {
        if (Z.key === "Tab") {
          const ne = H();
          if (!ne.length) {
            Z.preventDefault(), (ue = (T = l.value) == null ? void 0 : T.focus) == null || ue.call(T);
            return;
          }
          const me = ne[0], de = ne[ne.length - 1], P = document.activeElement;
          if (Z.shiftKey) {
            (P === me || P === l.value || !((B = l.value) != null && B.contains(P))) && (Z.preventDefault(), de.focus());
            return;
          }
          (P === de || !((he = l.value) != null && he.contains(P))) && (Z.preventDefault(), me.focus());
          return;
        }
        Z.key === "Escape" && i("close");
      }
    }
    function V() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function re() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function U(Z) {
      document.removeEventListener("keydown", X), Z ? (s || (s = document.activeElement), V(), document.addEventListener("keydown", X), il(() => {
        G();
      })) : (re(), x());
    }
    return al(() => {
      U(n.open);
    }), ha(() => {
      re(), document.removeEventListener("keydown", X), x();
    }), mi(() => n.open, (Z) => {
      U(Z);
    }), (Z, T) => e.open ? (Fe(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[2] || (T[2] = Pt((ue) => i("close"), ["self"]))
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
        Me("div", oP, [
          Me("div", aP, [
            T[3] || (T[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[4] || (T[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[5] || (T[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Fe(), Le("div", sP, it(O.value), 1)) : ht("", !0),
            T[6] || (T[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(Xx, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(Zm, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: _
            }, null, 512),
            g.value ? ht("", !0) : (Fe(), Le(Qe, { key: 1 }, [
              Be($M, {
                buttons: e.uiState.toolButtons || p.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(_x, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(qx, {
                "paint-swatches": e.paintSwatches,
                panes: p.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(ZM, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(rP, {
              buttons: e.uiState.viewButtons || p.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(mx, {
              buttons: e.uiState.floatingButtons || K.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(ik, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(RM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Px, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(LM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: T[0] || (T[0] = (ue) => i("timeline", ue))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Fe(), Rn(sM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: T[1] || (T[1] = (ue) => i("timeline", ue))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, iP)
    ])) : ht("", !0);
  }
}, Xn = "loading", da = "ready", Hn = "failed";
function Sg(e, t = "") {
  return e && (e.__panoLoadState = Xn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function wg(e, t = "") {
  return e && (e.__panoLoadState = da, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function xg(e, t = "") {
  return e && (e.__panoLoadState = Hn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ru(e, t) {
  return e ? e.__panoLoadState === Hn ? Hn : typeof t == "function" && t(e) ? da : Xn : da;
}
function iu(e) {
  return ru(e) === Hn;
}
function cP({ presented: e, background: t = da, stickers: r = [] } = {}) {
  if (!e) return { status: Xn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Xn, o = n.includes(Xn);
  if (i && o) return { status: Xn, detail: "mixed" };
  if (i) return { status: Xn, detail: "background" };
  if (o) return { status: Xn, detail: "stickers" };
  const a = t === Hn, s = n.includes(Hn);
  return a && s ? { status: Hn, detail: "mixed" } : a ? { status: Hn, detail: "background" } : s ? { status: Hn, detail: "stickers" } : { status: da, detail: "" };
}
const uP = "state_json", dP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), pd = "sticker_image_1", fP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), kg = 0.01, pP = "external_image", Bs = "pano_sticker_input_images", hP = "pano_sticker_input_videos", mP = "pano_sticker_input_frames", gP = "pano_sticker_input_video_meta", yP = !0, wl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], yr = Math.PI / 180, wi = 180 / Math.PI, ou = 1, Mg = "rgb(255, 221, 87)", bP = "rgb(228, 228, 231)", vP = "rgb(180, 150, 60)", _P = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, SP = 64, Yf = 40, sc = 16, wP = 0.45, qf = 180, xP = 160, Ys = 24, kP = 4, MP = 4, PP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function lc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function NP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function CP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function AP(e) {
  return e * e * e;
}
function xl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Xf(e, t) {
  return xl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Jf(e, t) {
  return xl(e.x * t, e.y * t, e.z * t);
}
function cc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function IP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return xl(e.x / t, e.y / t, e.z / t);
}
function Ba(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * wi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * wi, -90, 90)
  };
}
function Kr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function Ro(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function uc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Ro(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function jn(e, t, r) {
  return e + (t - e) * r;
}
function ur(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function EP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ya = { fillStyle: "", url: "" };
function OP(e, t, r) {
  if (Ya.url && Ya.fillStyle === String(e || ""))
    return Ya.url;
  const n = EP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ys}" height="${Ys}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ya = { fillStyle: String(e || ""), url: n }, n;
}
function qs(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Tn(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function cn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function FP(e) {
  return wl.some((t) => qs(e, t.color));
}
function au(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), c = o * (1 - s * i), d = o * (1 - (1 - s) * i);
  switch (a % 6) {
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
function su(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Ji(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function TP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Zf(e) {
  const { paintCount: t, maskCount: r } = TP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function Hi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function qa(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function DP(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function LP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function RP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function VP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Pg = "pano_suite.ui_settings.v1", Ng = "pano_suite.node_grid_visibility.v1";
let $i = null, ar = null;
function ys(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function $P() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Pg)) || "").trim();
    if (!t) return $i ? ys($i) : null;
    const r = JSON.parse(t), n = ys(r);
    return $i = n, n;
  } catch {
    return $i ? ys($i) : null;
  }
}
function zP(e) {
  var r;
  const t = ys(e);
  $i = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Pg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Cg() {
  var e;
  if (ar && typeof ar == "object")
    return ar;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ng)) || "").trim();
    if (!t)
      return ar = {}, ar;
    const r = JSON.parse(t);
    return ar = r && typeof r == "object" ? r : {}, ar;
  } catch {
    return ar = {}, ar;
  }
}
function jP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Cg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function HP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Cg();
  n[r] = !!t, ar = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Ng, JSON.stringify(n));
  } catch {
  }
}
function GP(e, t) {
  const r = { ...e }, n = t.map((i) => i(dc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(dc(r, t[o].name))), dc(r, "showEditor");
}
function dc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const Yr = /* @__PURE__ */ new Map(), WP = 12;
function KP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = Yr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (Yr.delete(t), Yr.set(t, r), r);
}
function UP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (Yr.delete(r), Yr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Yr.size > WP; ) {
      const i = Yr.keys().next().value;
      if (!i) break;
      Yr.delete(i);
    }
}
function BP(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: c,
    mediaUiImage: d,
    node: u,
    portStillCanvas: f,
    portVideoEl: m,
    readOnly: _,
    runtime: g,
    scheduler: p,
    stageWrap: O,
    state: K,
    stateV2: H,
    stillCanvas: G,
    timelinePlayhead: x,
    type: X,
    uiState: V,
    videoEl: re
  } = e;
  let U, Z, T, ue, B, he;
  const ne = {
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
  }, me = 9, de = [];
  let P = 0;
  const z = () => {
    var We, Ve;
    const M = (We = O == null ? void 0 : O.getBoundingClientRect) == null ? void 0 : We.call(O), q = (Ve = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ve.call(o), te = Math.max(0, Number((M == null ? void 0 : M.width) || 0)), Se = q ? Math.max(0, Number(q.width || 0)) : 0, Te = Se > 0 ? Se + 14 + 12 : 72, ze = Math.max(280, Math.floor(te - Te * 2)), je = n.fullscreen ? Math.min(1200, ze) : ze;
    V.videoTransport.shellMaxWidthPx = je;
  }, oe = () => {
    P || (P = p.requestFrame(() => {
      P = 0, z();
    }));
  }, j = (M) => {
    if (!(M instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(M.audioTracks) && M.audioTracks.length > 0 || M.audioTracks && typeof M.audioTracks.length == "number" && M.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof M.mozHasAudio == "boolean") return M.mozHasAudio;
    } catch {
    }
    try {
      if (Number(M.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!V.videoTransport.hasAudio;
  }, fe = typeof ResizeObserver < "u" ? new ResizeObserver(() => oe()) : null;
  fe == null || fe.observe(O), o && (fe == null || fe.observe(o)), de.push(() => {
    var M;
    P && (p.cancelFrame(P), P = 0), (M = fe == null ? void 0 : fe.disconnect) == null || M.call(fe);
  }), oe();
  const Pe = () => {
    ne.thumbnailJobId += 1, ne.thumbnailSrc = "", V.videoTransport.thumbnails = [], V.videoTransport.thumbnailCount = me;
  }, ie = async (M, q, te) => {
    const Se = String(M || "").trim();
    if (!Se) {
      Pe();
      return;
    }
    const xe = KP(Se);
    if (xe) {
      ne.thumbnailSrc = Se, V.videoTransport.thumbnails = xe.thumbnails, V.videoTransport.thumbnailCount = xe.thumbnailCount;
      return;
    }
    const Ne = ++ne.thumbnailJobId;
    ne.thumbnailSrc = Se, V.videoTransport.thumbnails = [], V.videoTransport.thumbnailCount = me;
    const Te = ul(document, "editor.thumbnails");
    Te.preload = "auto", Te.muted = !0, Te.playsInline = !0, Te.crossOrigin = "anonymous";
    const ze = mn({ label: "editor.thumbnail" });
    try {
      const je = await new Promise((Ke) => {
        let tt = !1;
        const lt = (zt) => {
          tt || (tt = !0, Ke(zt));
        };
        Te.addEventListener("loadedmetadata", () => lt(!0), { once: !0 }), Te.addEventListener("canplay", () => lt(!0), { once: !0 }), Te.addEventListener("error", () => lt(!1), { once: !0 }), Te.src = Se, Te.load();
      });
      if (ne.thumbnailJobId !== Ne) return;
      const We = Number(Te.videoWidth || 0), Ve = Number(Te.videoHeight || 0);
      if (!je || We < 1 || Ve < 1) {
        ne.thumbnailFailedSrcs.add(Se);
        return;
      }
      const J = Math.max(0, Number(Te.duration || q || 0)), Ce = 46, Re = Math.max(72, Math.round(We / Ve * Ce));
      ze.width = Re, ze.height = Ce;
      const Ae = ze.getContext("2d");
      if (!Ae) return;
      const $e = [], Ge = (Ke) => new Promise((tt) => {
        let lt = !1;
        const zt = () => {
          lt || (lt = !0, tt());
        };
        Te.addEventListener("seeked", zt, { once: !0 }), Te.addEventListener("error", zt, { once: !0 });
        try {
          Te.currentTime = Ke;
        } catch {
          zt();
        }
      });
      for (let Ke = 0; Ke < me; Ke += 1) {
        if (ne.thumbnailJobId !== Ne) return;
        const tt = me <= 1 ? 0 : Ke / (me - 1), lt = J > 0 ? Math.max(0, Math.min(J - Math.max(1e-3, 0.5 / Math.max(1, Number(te || 24))), J * tt)) : 0;
        if (await Ge(lt), ne.thumbnailJobId !== Ne) return;
        Ae.clearRect(0, 0, Re, Ce), Ae.drawImage(Te, 0, 0, Re, Ce), $e.push({
          id: `thumb-${Ke}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: lt,
          label: v(lt)
        });
      }
      if (ne.thumbnailJobId !== Ne) return;
      V.videoTransport.thumbnails = $e, V.videoTransport.thumbnailCount = $e.length || me, UP(Se, {
        thumbnails: $e,
        thumbnailCount: $e.length || me,
        duration: J,
        fps: te
      });
    } finally {
      Te.removeAttribute("src"), Te.load(), kc(ze);
    }
  };
  de.push(() => {
    Pe();
  });
  const E = jm({
    video: re instanceof HTMLVideoElement ? re : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (M) => p.requestFrame(M),
      cancelFrame: (M) => p.cancelFrame(M)
    },
    fps: R,
    span: () => {
      if (H) return he();
      const M = Math.round(Number(V.videoTransport.duration || 0) * R());
      return re.loop || !(M > 0) ? 1 / 0 : M;
    },
    loop: () => H,
    onFrame: (M) => {
      H ? T(M) : Y(), Z({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      k() && (g.backgroundDirty = !0);
    },
    onChange: () => {
      Y(), x.playing.value = E.playing, B(), Z({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  de.push(() => E.dispose());
  const ee = H && m instanceof HTMLVideoElement ? Hm({
    video: m,
    onCapture: () => {
      var te;
      const M = Number(m.videoWidth || 0), q = Number(m.videoHeight || 0);
      M < 1 || q < 1 || (f.width = M, f.height = q, (te = f.getContext("2d")) == null || te.drawImage(m, 0, 0), f.__panoFrameIdx += 1, Z({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => Z({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  ee && de.push(() => ee.dispose());
  const ce = H ? Im({
    createImage: (M, q) => {
      const te = new Image();
      return te.onload = q, te.onerror = q, te.src = M, te;
    },
    onLoad: () => Z({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (re instanceof HTMLVideoElement) {
    const M = () => {
      W(), Z({ cause: "frame_view", localOnly: !0 });
    }, q = () => {
      Y({
        hasAudio: V.videoTransport.hasAudio,
        muted: re.muted,
        volume: Number(re.volume ?? V.videoTransport.volume ?? 1)
      });
    }, te = () => {
      const Se = re.dataset.panoSrc;
      Se && (ne.failedSrcs.add(Se), W(), Z());
    };
    for (const [Se, xe] of [
      ["loadedmetadata", M],
      ["loadeddata", M],
      ["canplay", M],
      ["volumechange", q],
      ["error", te]
    ])
      re.addEventListener(Se, xe), de.push(() => re.removeEventListener(Se, xe));
  }
  function ge(M) {
    return t.uiList(u, M);
  }
  function _e(M) {
    return t.uiValue(u, M);
  }
  function I() {
    const M = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
    return Is(M) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: M } = I(), q = _e(M);
    return Array.isArray(q) && q.length > 0 && q[0] && typeof q[0] == "object" ? q[0] : q && typeof q == "object" ? q : null;
  }
  function y(M) {
    return M ? M instanceof HTMLVideoElement ? [
      String(M.currentSrc || M.src || ""),
      Number(M.videoWidth || 0),
      Number(M.videoHeight || 0)
    ].join("|") : M instanceof HTMLCanvasElement ? [
      "canvas",
      Number(M.width || 0),
      Number(M.height || 0),
      String(M.__panoFrameIdx || 0)
    ].join("|") : [
      String(M.currentSrc || M.src || ""),
      Number(M.naturalWidth || M.width || 0),
      Number(M.naturalHeight || M.height || 0)
    ].join("|") : "none";
  }
  function v(M) {
    const q = Math.max(0, Math.floor(Number(M || 0))), te = Math.floor(q / 60), Se = q % 60;
    return `${te}:${String(Se).padStart(2, "0")}`;
  }
  function R() {
    return H ? K.timeline.fps : ne.metaFps || 1e3;
  }
  function Y(M = {}) {
    const q = Number(M.duration ?? V.videoTransport.duration ?? 0), te = Math.max(1, Number(M.fps ?? V.videoTransport.fps ?? 24)), Se = E.frame / R(), xe = Object.prototype.hasOwnProperty.call(M, "ready") ? !!M.ready : !!V.videoTransport.ready, Ne = E.playing, Te = Object.prototype.hasOwnProperty.call(M, "visible") ? !!M.visible : !!V.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(M, "muted") ? !!M.muted : !!(re instanceof HTMLVideoElement ? re.muted : V.videoTransport.muted), je = Number(
      Object.prototype.hasOwnProperty.call(M, "volume") ? M.volume : re instanceof HTMLVideoElement ? re.volume : V.videoTransport.volume
    ), We = Object.prototype.hasOwnProperty.call(M, "hasAudio") ? !!M.hasAudio : j(re), Ve = Object.prototype.hasOwnProperty.call(M, "loop") ? !!M.loop : !!V.videoTransport.loop;
    Object.assign(V.videoTransport, {
      ready: xe,
      playing: Ne,
      visible: Te,
      loop: Ve,
      currentTime: Number.isFinite(Se) ? Se : 0,
      duration: Number.isFinite(q) ? q : 0,
      progressPct: q > 1e-6 ? Math.max(0, Math.min(100, Se / q * 100)) : 0,
      currentTimeLabel: v(Se),
      durationLabel: v(q),
      frameCount: Math.max(0, Number(M.frameCount ?? V.videoTransport.frameCount ?? 0)),
      fps: te,
      hasAudio: We,
      muted: ze,
      volume: Math.max(0, Math.min(1, Number.isFinite(je) ? je : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(je) ? je : 1)) * 100),
      thumbnails: Array.isArray(M.thumbnails) ? M.thumbnails : V.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(M.thumbnailCount ?? V.videoTransport.thumbnailCount ?? me))
    });
  }
  function S() {
    return !!(re instanceof HTMLVideoElement && !H && re.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function w() {
    if (!(re instanceof HTMLVideoElement) || !V.videoTransport.hasAudio) return;
    const M = !re.muted;
    re.muted = M, !M && Number(re.volume || 0) <= 0 && (re.volume = Math.max(0.01, Number(V.videoTransport.volume || 1))), Y({
      hasAudio: V.videoTransport.hasAudio,
      muted: re.muted,
      volume: Number(re.volume ?? V.videoTransport.volume ?? 1)
    });
  }
  function D() {
    Y({
      visible: S()
    });
  }
  function k() {
    if (!(re instanceof HTMLVideoElement) || Number(re.videoWidth || 0) < 1 || Number(re.videoHeight || 0) < 1) return !1;
    const M = Number(re.videoWidth || 0), q = Number(re.videoHeight || 0);
    (G.width !== M || G.height !== q) && (G.width = M, G.height = q);
    const te = G.getContext("2d");
    return te ? (te.clearRect(0, 0, M, q), te.drawImage(re, 0, 0, M, q), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !E.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : re instanceof HTMLVideoElement && Number(re.videoWidth || 0) > 0 && Number(re.videoHeight || 0) > 0 && Number(re.readyState || 0) >= 2 ? re : null;
  }
  function A() {
    G.__panoFrameIdx = 0, g.backgroundDirty = !0;
  }
  function W() {
    if (!(re instanceof HTMLVideoElement)) return null;
    const { videoKey: M } = I(), q = en(u, "background") && ge(M)[0] || null, te = c(q), Se = [te, t.linkedVideoFile(u, $())].filter(Boolean), xe = Se.find((J) => !ne.failedSrcs.has(J)) || "";
    ne.videoFailed = !xe && Se.length > 0;
    const Ne = xe && xe === te ? le() : null;
    ne.metaFps = Number(Ne == null ? void 0 : Ne.fps) > 0 ? Number(Ne.fps) : 0;
    const Te = Math.max(1, Number((Ne == null ? void 0 : Ne.fps) || (H ? K.timeline.fps : 24))), ze = re.dataset.panoSrc === xe && Number.isFinite(re.duration) ? re.duration : 0, je = Number((Ne == null ? void 0 : Ne.duration) || ((Ne == null ? void 0 : Ne.frames) > 0 ? Ne.frames / Te : ze)), We = Math.max(0, Number((Ne == null ? void 0 : Ne.frames) || Math.round(je * Te))), Ve = !!(Ne != null && Ne.has_audio) || j(re);
    return xe && re.dataset.panoSrc !== xe ? (re.pause(), A(), re.dataset.panoSrc = xe, re.loop = !H && !!V.videoTransport.loop, re.muted = !!V.videoTransport.muted, re.volume = Math.max(0, Math.min(1, Number(V.videoTransport.volume ?? 1))), re.src = xe, re.load(), E.setSource(!0), H || E.seek(0)) : !xe && re.getAttribute("src") && (re.pause(), re.removeAttribute("src"), delete re.dataset.panoSrc, re.load(), A(), Pe(), E.setSource(!1)), H || (re.loop = !!V.videoTransport.loop), xe && !H && ne.thumbnailSrc !== xe && !ne.thumbnailFailedSrcs.has(xe) && ie(xe, je, Te), xe || Pe(), Y({
      ready: !!xe,
      visible: !!xe && S(),
      duration: je,
      frameCount: We,
      fps: Te,
      hasAudio: Ve,
      loop: !!re.loop,
      muted: !!re.muted,
      volume: Number(re.volume ?? V.videoTransport.volume ?? 1),
      thumbnailCount: V.videoTransport.thumbnailCount
    }), xe || null;
  }
  function Q(M, q = null) {
    return d(u, M, a, q || (() => Z()));
  }
  function ae(M = null) {
    return en(u, "external-sticker") ? Q(Bs, M) : null;
  }
  function L() {
    if (!en(u, "external-sticker")) return null;
    const M = ge(gP)[0];
    if (!M || typeof M != "object") return null;
    const q = ge(mP).map(c).filter(Boolean);
    if (q.length) return { frames: q, meta: M };
    const te = c(ge(hP)[0] || null);
    return te ? { src: te, meta: M } : null;
  }
  function se() {
    const M = K.stickers.find(U), q = M ? L() : null, te = q ? Nm(M.clip, n.frame, K.timeline.fps, q.meta) : null;
    ee.follow({ src: (q == null ? void 0 : q.src) || "", time: te, playing: E.advancing, fps: K.timeline.fps });
    const Se = M ? pe(M) : null, xe = q != null && q.frames ? ce.picture(q.frames, te, q.meta, Se) : ee.picture(f, Se);
    return xe ? { media: xe, revision: y(xe), source: Am(q, Se) } : null;
  }
  function ve() {
    return !H || !en(u, "scene") ? null : ff(ge("pano_scene_files"), ge("pano_scene_meta"), c);
  }
  function we() {
    return !H || !en(u, "external-sticker") ? null : ff(ge("pano_sticker_files"), ge("pano_sticker_meta"), c);
  }
  function pe(M) {
    var Te;
    if (M && typeof M == "object" && (U(M) || M.external === !0))
      return ae(() => {
        Dr(u, "image-loaded");
      });
    const q = H ? be(M) : String(M && typeof M == "object" ? M.asset_id || M.assetId || "" : M || "");
    if (!q) return null;
    const te = a.get(q);
    if (te) return te;
    const Se = H ? Bh(M.source) : (Te = K.assets) == null ? void 0 : Te[q], xe = l(Se);
    if (!xe) return null;
    const Ne = new Image();
    return Sg(Ne, xe), Ne.onload = () => {
      wg(Ne, xe), Z();
    }, Ne.onerror = () => {
      xg(Ne, xe), Z();
    }, Ne.src = xe, a.set(q, Ne), Ne;
  }
  function be(M) {
    const { source: q } = M;
    return q.filename ? `file:${q.storage}:${q.subfolder}:${q.filename}` : `sticker:${M.id}`;
  }
  function ye() {
    if (X === "cutout" && !r) {
      const xe = N();
      if (xe) return xe;
      const Ne = s(
        u,
        ["erp_image", "bg_erp"],
        () => Z(),
        "background:cutout:erp_image|bg_erp"
      );
      return Ne && !iu(Ne) ? Ne : d(u, "pano_input_images", a, () => Z()) || Ne || null;
    }
    const M = N();
    if (M) return M;
    const q = en(u, "background") ? d(u, "pano_input_images", a, () => Z()) : null;
    if (q && !iu(q)) return q;
    if (re instanceof HTMLVideoElement && re.dataset.panoSrc) return re;
    const te = $();
    return s(u, te, () => Z(), `background:${te.join("|")}`) || q || null;
  }
  function h() {
    var q;
    const M = (Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs : []).findIndex((te) => (te == null ? void 0 : te.name) === "source");
    return M >= 0 && u.graph ? String(((q = u.getInputLink(M)) == null ? void 0 : q.type) || "") : "";
  }
  function $() {
    if (X === "cutout") return r ? h() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const M = Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs.map((Se) => String((Se == null ? void 0 : Se.name) || "")) : [], q = M.includes("erp_image"), te = M.includes("bg_erp");
    return _ && (q || te) ? q ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function C(M) {
    return M ? M instanceof HTMLImageElement ? !!M.complete && Number(M.naturalWidth || M.width || 0) > 0 && Number(M.naturalHeight || M.height || 0) > 0 : M instanceof HTMLVideoElement ? Number(M.videoWidth || 0) > 0 && Number(M.videoHeight || 0) > 0 && Number(M.readyState || 0) >= 2 : Number(M.width || M.naturalWidth || 0) > 0 && Number(M.height || M.naturalHeight || 0) > 0 : !1;
  }
  function b() {
    if (i.failed) return { status: Hn, detail: "renderer" };
    if (!i.ready) return { status: Xn, detail: "boot" };
    const M = ye(), q = ne.videoFailed ? Hn : ru(M, C), te = [];
    for (const Se of ue()) {
      if ((Se == null ? void 0 : Se.visible) === !1) continue;
      const xe = pe(Se);
      te.push(ru(xe, C));
    }
    return cP({
      presented: g.hasPresentedFrame,
      background: q,
      stickers: te
    });
  }
  function F() {
    re instanceof HTMLVideoElement && re.pause(), de.forEach((M) => {
      try {
        M();
      } catch {
      }
    });
  }
  return {
    connect(M) {
      ({
        isExternalSticker: U,
        requestDraw: Z,
        setTimelineFrame: T,
        skyStickers: ue,
        syncTimeline: B,
        timelineSpanFrames: he
      } = M);
    },
    videoState: ne,
    queueVideoTransportLayout: oe,
    playback: E,
    portVideo: ee,
    getNodeUiValue: _e,
    getMediaRevisionToken: y,
    playbackFps: R,
    syncVideoTransportState: Y,
    toggleVideoMuted: w,
    syncVideoTransportVisibility: D,
    refreshModalVideoSource: W,
    getStickerUiImage: Q,
    getExternalStickerPreviewImage: ae,
    getPortMedia: L,
    followPortSticker: se,
    getStickerImage: pe,
    stickerImageKey: be,
    getConnectedErpImage: ye,
    isDecodedImageReady: C,
    getStageImageStatus: b,
    sceneFiles: ve,
    stickerFiles: we,
    disposeMediaSession: F
  };
}
function YP(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
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
      const c = n.length, d = Math.max(0, c - a), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + a), m = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: m
      };
    },
    hydrate: s
  };
}
const qP = 80;
function Ag(e) {
  return JSON.stringify(Y1(e));
}
function XP(e) {
  return YP(qP, { entries: [Ag(e)], index: 0 });
}
function Ig(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function JP(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, c, d, u, f, m, _, g, p, O, K, H, G, x;
  function X() {
    r || (K(), Xh(i), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(Ag(i)), G()));
  }
  function V(U) {
    var B, he;
    if (r) return;
    O();
    const Z = U < 0 ? t.historyController.undo() : t.historyController.redo();
    if (G(), !Z) return;
    const T = q1(i, Z), ue = (B = i.timeline) == null ? void 0 : B.fps;
    Object.keys(i).forEach((ne) => delete i[ne]), Object.assign(i, T.state), K(!1), o && i.timeline.fps !== ue && _.seek(Math.round(t.frame * i.timeline.fps / ue)), t.selectedId = Ig(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((he = d()) == null ? void 0 : he.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), g(), n.backgroundDirty = !0, T.paintingChanged ? m() : f(), H(), x(), c(), p({ cause: "cutout_frame" });
  }
  function re() {
    var T, ue;
    const U = Array.isArray((T = t.historyController) == null ? void 0 : T.entries) ? t.historyController.entries : [], Z = Number((ue = t.historyController) == null ? void 0 : ue.index);
    return {
      canUndo: !r && U.length > 1 && Z > 0,
      canRedo: !r && U.length > 1 && Z >= 0 && Z < U.length - 1
    };
  }
  return {
    connect(U) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: _,
        releaseHiddenSelection: g,
        requestDraw: p,
        stopTimelinePlayback: O,
        syncCutoutShot: K,
        syncPaintUi: H,
        syncUndoRedoButtons: G,
        updateSidePanel: x
      } = U);
    },
    pushHistory: X,
    restoreHistory: V,
    getHistoryCapabilities: re
  };
}
function ZP(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, c, d, u, f, m, _;
  function g() {
    return s === "stickers" ? p() : o.shots;
  }
  function p() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function O(h) {
    return i && ee(h);
  }
  function K(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function H(h) {
    return O(h) ? Ku(h, n.frame) : h;
  }
  function G(h, $) {
    O(h) ? Kh(h, n.frame, $) : Object.assign(h, $);
  }
  function x() {
    const h = o.painting || (o.painting = ao(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function X(h = "paint") {
    var F, M;
    const $ = Array.isArray((M = (F = o.painting) == null ? void 0 : F[h]) == null ? void 0 : M.strokes) ? o.painting[h].strokes : [], C = [], b = /* @__PURE__ */ new Set();
    for (const q of $) {
      const te = String((q == null ? void 0 : q.actionGroupId) || "").trim();
      !te || b.has(te) || (b.add(te), C.push(te));
    }
    return C;
  }
  function V() {
    return X("paint");
  }
  function re(h, $) {
    const C = String($ || "").trim();
    return C ? `${h === "mask" ? "mask" : "paint"}:${C}` : "";
  }
  function U(h) {
    const $ = String(h || "").trim();
    return $ ? `raster:${$}` : "";
  }
  function Z(h) {
    const $ = String(h || "").trim();
    if (!$) return "";
    const C = $.match(/^raster:(.*)$/);
    return String(C ? C[1] || "" : $).trim();
  }
  function T(h, $ = null) {
    const C = String(h || "").trim();
    if (!C) return { layerKind: "paint", actionGroupId: "" };
    const b = C.match(/^(paint|mask):(.*)$/);
    return b ? { layerKind: b[1] === "mask" ? "mask" : "paint", actionGroupId: String(b[2] || "").trim() } : { layerKind: $ === "mask" ? "mask" : "paint", actionGroupId: C };
  }
  function ue() {
    var $;
    let h = -1;
    for (const C of p())
      h = Math.max(h, Number((C == null ? void 0 : C.z_index) || 0));
    for (const C of x())
      h = Math.max(h, Number((C == null ? void 0 : C.z_index) || 0));
    for (const C of Array.isArray(($ = o.painting) == null ? void 0 : $.raster_objects) ? o.painting.raster_objects : [])
      String((C == null ? void 0 : C.layerKind) || "paint") === "paint" && (h = Math.max(h, Number((C == null ? void 0 : C.z_index) || 0)));
    return h + 1;
  }
  function B(h, $ = null) {
    const C = String(h || "").trim();
    if (!C) return null;
    const b = x();
    let F = b.find((M) => String((M == null ? void 0 : M.actionGroupId) || "") === C);
    return F ? $ != null && (F.z_index = Math.max(0, Number($ || 0))) : (F = {
      id: C,
      type: "strokeGroup",
      actionGroupId: C,
      z_index: $ == null ? ue() : Math.max(0, Number($ || 0)),
      locked: !1,
      frame: null
    }, b.push(F)), F;
  }
  function he(h) {
    if (!(h != null && h.centerUv)) return [];
    const $ = Number(h.centerUv.u || 0), C = Number(h.centerUv.v || 0), b = Number(h.halfW || 0), F = Number(h.halfH || 0);
    return [
      {
        u: (($ - b) % 1 + 1) % 1,
        v: Ee(C - F, 0, 1)
      },
      {
        u: (($ + b) % 1 + 1) % 1,
        v: Ee(C - F, 0, 1)
      },
      {
        u: (($ + b) % 1 + 1) % 1,
        v: Ee(C + F, 0, 1)
      },
      {
        u: (($ - b) % 1 + 1) % 1,
        v: Ee(C + F, 0, 1)
      }
    ];
  }
  function ne() {
    const h = new Set(V()), C = x().filter((b) => h.has(String((b == null ? void 0 : b.actionGroupId) || "")));
    return h.forEach((b) => {
      C.some((F) => String((F == null ? void 0 : F.actionGroupId) || "") === b) || C.push({
        id: b,
        type: "strokeGroup",
        actionGroupId: b,
        z_index: ue(),
        locked: !1,
        frame: null
      });
    }), C.sort((b, F) => Number((b == null ? void 0 : b.z_index) || 0) - Number((F == null ? void 0 : F.z_index) || 0)), o.painting.groups = C, C;
  }
  function me(h, $, C) {
    var Ve;
    const b = (J) => (Number(J || 0) % 1 + 1) % 1, F = [];
    for (const J of C) {
      const Ce = J == null ? void 0 : J.geometry, Re = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Re) && F.push(...Re);
    }
    if (!F.length) return null;
    const M = b(((Ve = F[0]) == null ? void 0 : Ve.u) || 0);
    let q = 0, te = 0;
    F.forEach((J) => {
      const Ce = b((J == null ? void 0 : J.u) || 0);
      q += M + Y(Ce, M), te += Number((J == null ? void 0 : J.v) || 0);
    });
    const Se = (q / F.length % 1 + 1) % 1;
    let xe = 1 / 0, Ne = -1 / 0, Te = 1 / 0, ze = -1 / 0;
    F.forEach((J) => {
      const Ce = b((J == null ? void 0 : J.u) || 0), Re = Y(Ce, Se);
      xe = Math.min(xe, Re), Ne = Math.max(Ne, Re);
      const Ae = Number((J == null ? void 0 : J.v) || 0);
      Te = Math.min(Te, Ae), ze = Math.max(ze, Ae);
    });
    const je = C.reduce((J, Ce) => {
      const Re = c(String((Ce == null ? void 0 : Ce.toolKind) || "pen")), Ae = Pn[Re] || Pn[Ar], $e = Math.max(1, Number((Ce == null ? void 0 : Ce.size) || 10)) * Math.max(0.1, Number((Ae == null ? void 0 : Ae.sizeScale) ?? 1));
      return Math.max(J, $e);
    }, 0), We = Math.max(35e-4, je / 2048);
    return {
      centerUv: { u: ((Se + (xe + Ne) * 0.5) % 1 + 1) % 1, v: Ee((Te + ze) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Ne - xe) * 0.5 + We,
      halfH: (ze - Te) * 0.5 + We,
      uvPad: We
    };
  }
  function de(h, $, C) {
    const b = String(h || "").trim();
    if (!b) return null;
    const F = x().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === b);
    if (!F) return null;
    const M = C || y(b, $);
    return F.frame = me(b, $, M), F.frame;
  }
  function P() {
    var b;
    const h = p().map((F) => ({
      type: "sticker",
      id: String((F == null ? void 0 : F.id) || ""),
      z_index: Number((F == null ? void 0 : F.z_index) || 0),
      item: F
    })), $ = ne().map((F) => ({
      type: "strokeGroup",
      id: String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.actionGroupId) || ""),
      actionGroupId: String((F == null ? void 0 : F.actionGroupId) || ""),
      z_index: Number((F == null ? void 0 : F.z_index) || 0),
      item: F
    })), C = (Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : []).filter((F) => String((F == null ? void 0 : F.layerKind) || "paint") === "paint").map((F) => ({
      type: "rasterObject",
      id: String((F == null ? void 0 : F.id) || ""),
      z_index: Number((F == null ? void 0 : F.z_index) || 0),
      item: F
    }));
    return [...h, ...$, ...C].sort((F, M) => Number(F.z_index || 0) - Number(M.z_index || 0));
  }
  function z(h = !0) {
    var C, b, F, M, q, te;
    const $ = P().filter((Se) => Se.type === "strokeGroup").map((Se) => String(Se.actionGroupId || "")).filter((Se) => !!Se);
    if (h) {
      const Se = String(((b = (C = n.interaction) == null ? void 0 : C.stroke) == null ? void 0 : b.actionGroupId) || "").trim(), xe = String(((M = (F = n.interaction) == null ? void 0 : F.stroke) == null ? void 0 : M.layerKind) || "").trim(), Ne = String(((te = (q = n.interaction) == null ? void 0 : q.stroke) == null ? void 0 : te.toolKind) || "").trim();
      Se && xe === "paint" && Ne !== "eraser" && !$.includes(Se) && $.push(Se);
    }
    return $;
  }
  function oe(h = !0) {
    var te, Se, xe, Ne, Te, ze;
    const $ = P();
    if (!h) return $;
    const C = String(((Se = (te = n.interaction) == null ? void 0 : te.stroke) == null ? void 0 : Se.actionGroupId) || "").trim(), b = String(((Ne = (xe = n.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : Ne.layerKind) || "").trim(), F = String(((ze = (Te = n.interaction) == null ? void 0 : Te.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!C || b !== "paint" || F === "eraser" || $.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === C))
      return $;
    const M = m();
    let q = $.reduce((je, We) => Math.max(je, Number((We == null ? void 0 : We.z_index) || 0)), -1) + 1;
    return M && le(M) && String(M.actionGroupId || "") === C && (q = Number(M.z_index || 0)), [
      ...$,
      {
        type: "strokeGroup",
        id: C,
        actionGroupId: C,
        z_index: q,
        item: null
      }
    ].sort((je, We) => Number((je == null ? void 0 : je.z_index) || 0) - Number((We == null ? void 0 : We.z_index) || 0));
  }
  function j() {
    return x().slice().sort((h, $) => Number((h == null ? void 0 : h.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0)).map((h) => I(re("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function fe() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter(($) => String(($ == null ? void 0 : $.layerKind) || "paint") === "paint").slice().sort(($, C) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((C == null ? void 0 : C.z_index) || 0)).map(($) => ge(U(($ == null ? void 0 : $.id) || ""))).filter(Boolean);
  }
  function Pe() {
    return r || !Array.isArray(o.stickers) ? [] : p();
  }
  function ie() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Pe()];
  }
  function E(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function ee(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function ce() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function ge(h) {
    const $ = Z(h);
    if (!$) return null;
    const C = ce().find((b) => String((b == null ? void 0 : b.id) || "").trim() === $);
    return !C || String((C == null ? void 0 : C.layerKind) || "paint") !== "paint" ? null : {
      ...C,
      id: U($),
      type: "rasterObject",
      rasterObjectId: $
    };
  }
  function _e(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const $ = Z(h.rasterObjectId || h.id || "");
    return !!$ && !!ge(U($));
  }
  function I(h) {
    const $ = T(h), C = String($.actionGroupId || "").trim();
    if (!C) return null;
    const b = x().find((F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.actionGroupId) || "") === C || String((F == null ? void 0 : F.actionGroupId) || "") === C);
    return b ? {
      ...b,
      id: re("paint", C),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: C
    } : null;
  }
  function le(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const $ = String(h.actionGroupId || "").trim(), C = String(h.layerKind || "paint").trim() || "paint";
    return !!$ && !!I(re(C, $));
  }
  function y(h, $ = null) {
    const C = T(h, $), b = String(C.actionGroupId || "").trim();
    return b ? u(C.layerKind).filter((F) => String((F == null ? void 0 : F.actionGroupId) || "").trim() === b) : [];
  }
  function v(h, $ = "paint") {
    const C = String(h || "").trim(), F = `geomv5:${String($ || "paint").trim() || "paint"}:${C}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const M = l(), q = String((M == null ? void 0 : M.id) || ""), te = M ? d(M) : null;
      return `${F}:frame:${q}:${Math.round(Number((M == null ? void 0 : M.yaw_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.pitch_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.roll_deg) ?? (M == null ? void 0 : M.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((te == null ? void 0 : te.x) || 0))}:${Math.round(Number((te == null ? void 0 : te.y) || 0))}:${Math.round(Number((te == null ? void 0 : te.w) || 0))}:${Math.round(Number((te == null ? void 0 : te.h) || 0))}`;
    }
    return `${F}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function R(h, $, C) {
    return !h || typeof h != "object" ? h : {
      ...h,
      u: ((Number(h.u || 0) + Number($ || 0)) % 1 + 1) % 1,
      v: Ee(Number(h.v || 0) + Number(C || 0), 0, 1)
    };
  }
  function Y(h, $) {
    let C = Number(h || 0) - Number($ || 0);
    for (; C > 0.5; ) C -= 1;
    for (; C < -0.5; ) C += 1;
    return C;
  }
  function S(h, $ = null, C = null) {
    var xe;
    const b = T(h, $), F = Array.isArray(C) ? C : y(b.actionGroupId, b.layerKind), M = [];
    if (F.forEach((Ne) => {
      const Te = (Ne == null ? void 0 : Ne.geometry) || null, ze = (Te == null ? void 0 : Te.geometryKind) === "lasso_fill" ? Te == null ? void 0 : Te.points : (Te == null ? void 0 : Te.processedPoints) || (Te == null ? void 0 : Te.rawPoints) || (Te == null ? void 0 : Te.points) || [];
      Array.isArray(ze) && M.push(...ze);
    }), !M.length) return { u: 0.5, v: 0.5 };
    const q = Number(((xe = M[0]) == null ? void 0 : xe.u) || 0);
    let te = 0, Se = 0;
    return M.forEach((Ne) => {
      te += q + Y(Number((Ne == null ? void 0 : Ne.u) || 0), q), Se += Number((Ne == null ? void 0 : Ne.v) || 0);
    }), {
      u: (te / M.length % 1 + 1) % 1,
      v: Ee(Se / M.length, 0, 1)
    };
  }
  function w(h, $, C = 1, b = 0) {
    if (!h || typeof h != "object") return h;
    const F = Number(($ == null ? void 0 : $.u) || 0), M = Number(($ == null ? void 0 : $.v) || 0), q = Y(Number(h.u || 0), F), te = Number(h.v || 0) - M, Se = Number(b || 0) * yr, xe = Math.cos(Se), Ne = Math.sin(Se), Te = Math.max(0.02, Number(C || 1)), ze = (q * xe - te * Ne) * Te, je = (q * Ne + te * xe) * Te;
    return {
      ...h,
      u: ((F + ze) % 1 + 1) % 1,
      v: Ee(M + je, 0, 1)
    };
  }
  function D(h, $, C, b = null, F = null, M = null) {
    const q = T(h, F), te = String(q.actionGroupId || "").trim();
    if (!te) return !1;
    const Se = u(q.layerKind), xe = Array.isArray(b) ? new Map(b.map((Te) => [String((Te == null ? void 0 : Te.id) || ""), Te])) : null;
    let Ne = !1;
    if (Se.forEach((Te) => {
      if (String((Te == null ? void 0 : Te.actionGroupId) || "").trim() !== te) return;
      const ze = (xe == null ? void 0 : xe.get(String((Te == null ? void 0 : Te.id) || ""))) || Te, je = Te == null ? void 0 : Te.geometry, We = ze == null ? void 0 : ze.geometry;
      !je || !We || (Array.isArray(We.points) && (je.points = We.points.map((Ve) => R(Ve, $, C)), Ne = !0), Array.isArray(We.rawPoints) && (je.rawPoints = We.rawPoints.map((Ve) => R(Ve, $, C)), Ne = !0), Array.isArray(We.processedPoints) && (je.processedPoints = We.processedPoints.map((Ve) => R(Ve, $, C)), Ne = !0));
    }), Ne && M) {
      const Te = x().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === te);
      Te && (Te.frame = null);
    }
    return Ne;
  }
  function k(h, $ = 1, C = 0, b = null, F = null, M = null) {
    const q = T(h, F), te = String(q.actionGroupId || "").trim();
    if (!te) return !1;
    const Se = u(q.layerKind), xe = Array.isArray(b) ? b : y(te, q.layerKind), Ne = Array.isArray(xe) ? new Map(xe.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Te = (M == null ? void 0 : M.centerUv) ?? S(te, q.layerKind, xe);
    let ze = !1;
    if (Se.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== te) return;
      const We = (Ne == null ? void 0 : Ne.get(String((je == null ? void 0 : je.id) || ""))) || je, Ve = je == null ? void 0 : je.geometry, J = We == null ? void 0 : We.geometry;
      !Ve || !J || (Array.isArray(J.points) && (Ve.points = J.points.map((Ce) => w(Ce, Te, $, C)), ze = !0), Array.isArray(J.rawPoints) && (Ve.rawPoints = J.rawPoints.map((Ce) => w(Ce, Te, $, C)), ze = !0), Array.isArray(J.processedPoints) && (Ve.processedPoints = J.processedPoints.map((Ce) => w(Ce, Te, $, C)), ze = !0));
    }), ze && M) {
      const je = x().find((We) => String((We == null ? void 0 : We.actionGroupId) || "") === te);
      je && (je.frame = null);
    }
    return ze;
  }
  function N(h, $, C, b = null) {
    const F = Z(h);
    if (!F) return !1;
    const M = ce().find((Ne) => String((Ne == null ? void 0 : Ne.id) || "").trim() === F);
    if (!M) return !1;
    const q = b && typeof b == "object" ? b : M, te = (q == null ? void 0 : q.transform) || {}, Se = Number(te.du || 0) + Number($ || 0), xe = Ee(Number(te.dv || 0) + Number(C || 0), -1, 1);
    return M.transform || (M.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), M.transform.du = Se, M.transform.dv = xe, !0;
  }
  function A(h, $ = 1, C = null) {
    const b = Z(h);
    if (!b) return !1;
    const F = ce().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === b);
    if (!F) return !1;
    const M = C && typeof C == "object" ? C : F, q = (M == null ? void 0 : M.transform) || {}, te = Math.max(0.01, Number(q.scale || 1)), Se = Ee(te * Math.max(0.01, Number($ || 1)), 0.01, 100);
    return F.transform || (F.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), F.transform.scale = Se, !0;
  }
  function W() {
    return ue();
  }
  function Q(h) {
    var $;
    return !h || typeof h != "object" ? !1 : a ? (($ = h.source) == null ? void 0 : $.kind) === "port" : String(h.id || "") === pd || String(h.source_kind || "") === pP;
  }
  function ae(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function L(h) {
    return Q(h) && ae(h) ? um : 1;
  }
  function se(h, $, C = 1, b = 0) {
    if (!h || typeof h != "object") return h;
    const F = Number(($ == null ? void 0 : $.u) || 0), M = Number(($ == null ? void 0 : $.v) || 0), q = Y(Number(h.u || 0), F), te = Number(h.v || 0) - M, Se = Math.max(0.02, Number(C || 1)), xe = Number(b || 0) * yr, Ne = Math.cos(xe), Te = Math.sin(xe), ze = q / Se, je = te / Se, We = ze * Ne + je * Te, Ve = -ze * Te + je * Ne;
    return {
      ...h,
      u: ((F + We) % 1 + 1) % 1,
      v: M + Ve
    };
  }
  function ve(h) {
    const $ = (h == null ? void 0 : h.bbox) || null, C = (h == null ? void 0 : h.transform) || {};
    return $ ? {
      u: (((Number($.u0 || 0) + Number($.u1 || 0)) * 0.5 + Number(C.du || 0)) % 1 + 1) % 1,
      v: Ee((Number($.v0 || 0) + Number($.v1 || 0)) * 0.5 + Number(C.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function we(h) {
    var Se, xe, Ne, Te;
    const $ = (h == null ? void 0 : h.bbox) || null;
    if (!$) return [];
    const C = {
      u: (Number($.u0 || 0) + Number($.u1 || 0)) * 0.5,
      v: (Number($.v0 || 0) + Number($.v1 || 0)) * 0.5
    }, b = Math.max(0.01, Number(((Se = h == null ? void 0 : h.transform) == null ? void 0 : Se.scale) || 1)), F = Number(((xe = h == null ? void 0 : h.transform) == null ? void 0 : xe.rot_deg) || 0), M = Number(((Ne = h == null ? void 0 : h.transform) == null ? void 0 : Ne.du) || 0), q = Number(((Te = h == null ? void 0 : h.transform) == null ? void 0 : Te.dv) || 0);
    return [
      { u: Number($.u0 || 0), v: Number($.v0 || 0) },
      { u: Number($.u1 || 0), v: Number($.v0 || 0) },
      { u: Number($.u1 || 0), v: Number($.v1 || 0) },
      { u: Number($.u0 || 0), v: Number($.v1 || 0) }
    ].map((ze) => R(w(ze, C, b, F), M, q));
  }
  function pe(h) {
    const $ = Z((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), C = (h == null ? void 0 : h.transform) || {}, b = (h == null ? void 0 : h.bbox) || {}, F = `${$}:${n.mode}:${f()}:${b.u0}:${b.v0}:${b.u1}:${b.v1}:${C.du}:${C.dv}:${C.rot_deg}:${C.scale}`;
    if (n.mode === "frame") {
      const M = l(), q = M ? d(M) : null;
      return `${F}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((q == null ? void 0 : q.x) || 0))}:${Math.round(Number((q == null ? void 0 : q.y) || 0))}:${Math.round(Number((q == null ? void 0 : q.w) || 0))}:${Math.round(Number((q == null ? void 0 : q.h) || 0))}`;
    }
    return `${F}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function be(h) {
    const $ = String((h == null ? void 0 : h.id) || ""), C = E(h) ? "frame" : ee(h) ? "sticker" : "item", b = H(h), F = [
      C,
      $,
      n.mode,
      Number((b == null ? void 0 : b.yaw_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.pitch_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.hFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.vFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.rot_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.roll_deg) || 0).toFixed(4),
      Or(b),
      O(h) && _(h)
    ].join(":");
    if (n.mode === "frame") {
      const M = l(), q = M ? d(M) : null;
      return `${F}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((q == null ? void 0 : q.x) || 0))}:${Math.round(Number((q == null ? void 0 : q.y) || 0))}:${Math.round(Number((q == null ? void 0 : q.w) || 0))}:${Math.round(Number((q == null ? void 0 : q.h) || 0))}`;
    }
    return `${F}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ye() {
    P().forEach(($, C) => {
      $.type === "sticker" && $.item && ($.item.z_index = C), $.type === "strokeGroup" && $.item && ($.item.z_index = C), $.type === "rasterObject" && $.item && ($.item.z_index = C);
    });
  }
  return {
    connect(h) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameViewRect: d,
        getPaintingLayerList: u,
        getPaintingRevisionKey: f,
        getSelected: m,
        sceneStickerShown: _
      } = h);
    },
    getList: g,
    skyStickers: p,
    isSceneSticker: O,
    isUploadingSticker: K,
    poseOf: H,
    writePose: G,
    getPaintingGroupList: x,
    makeStrokeGroupSelectionId: re,
    makeRasterObjectSelectionId: U,
    parseRasterObjectSelectionId: Z,
    ensurePaintingGroupEntry: B,
    getFrameCornersUv: he,
    ensureGroupFrame: de,
    getDisplayListObjects: P,
    getOrderedPaintGroupIds: z,
    getOrderedDisplayListObjects: oe,
    getSelectableStrokeGroupItems: j,
    getSelectableRasterObjectItems: fe,
    cutoutStickers: Pe,
    getCutoutSelectableItems: ie,
    isShotItem: E,
    isStickerItem: ee,
    getRasterObjectList: ce,
    getRasterObjectItem: ge,
    isRasterObjectItem: _e,
    getStrokeGroupItem: I,
    isStrokeGroupItem: le,
    getStrokeGroupStrokes: y,
    getStrokeGeomCacheKey: v,
    shortestWrappedDelta: Y,
    getStrokeGroupCenterUv: S,
    applyStrokeGroupOffset: D,
    applyStrokeGroupTransform: k,
    applyRasterObjectOffset: N,
    applyRasterObjectTransform: A,
    getNextStickerZIndex: W,
    isExternalSticker: Q,
    isStickerHidden: ae,
    getStickerDisplayAlpha: L,
    inverseTransformErpPointAround: se,
    getRasterObjectCenterUv: ve,
    getRasterObjectTransformedErpPoints: we,
    getRasterObjectGeomCacheKey: pe,
    getSceneItemGeomCacheKey: be,
    normalizeDisplayZIndices: ye
  };
}
function QP(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: l
  } = e;
  let c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie;
  function E() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const $ = x(h);
    if ($) return $;
    const C = K(h);
    return C || (o ? _().find((b) => String((b == null ? void 0 : b.id) || "") === h) || null : p().find((b) => String((b == null ? void 0 : b.id) || "") === h) || null);
  }
  function ee() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], $ = [], C = /* @__PURE__ */ new Set();
    return h.forEach((b) => {
      const F = String(b || "").trim();
      if (!F || C.has(F)) return;
      C.add(F);
      const M = F === String(t.selectedId || "") ? E() : x(F) || K(F) || (o ? _().find((q) => String((q == null ? void 0 : q.id) || "") === F) : p().find((q) => String((q == null ? void 0 : q.id) || "") === F));
      M && $.push(M);
    }), $;
  }
  function ce(h = null) {
    const $ = Array.isArray(h) ? h : ee();
    if (!$ || $.length < 2) return null;
    const C = $.map((xe) => me(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!C.length) return null;
    const b = C.flatMap((xe) => xe.corners.map((Ne) => Number((Ne == null ? void 0 : Ne.x) || 0))), F = C.flatMap((xe) => xe.corners.map((Ne) => Number((Ne == null ? void 0 : Ne.y) || 0))), M = Math.min(...b), q = Math.max(...b), te = Math.min(...F), Se = Math.max(...F);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (M + q) * 0.5, y: (te + Se) * 0.5 },
      corners: [
        { x: M, y: te },
        { x: q, y: te },
        { x: q, y: Se },
        { x: M, y: Se }
      ],
      edgeMidpoints: [
        { edge: "top", x: (M + q) * 0.5, y: te, a: { x: M, y: te }, b: { x: q, y: te } },
        { edge: "right", x: q, y: (te + Se) * 0.5, a: { x: q, y: te }, b: { x: q, y: Se } },
        { edge: "bottom", x: (M + q) * 0.5, y: Se, a: { x: q, y: Se }, b: { x: M, y: Se } },
        { edge: "left", x: M, y: (te + Se) * 0.5, a: { x: M, y: Se }, b: { x: M, y: te } }
      ],
      rotateStemBase: { x: (M + q) * 0.5, y: te },
      rotateHandle: { x: (M + q) * 0.5, y: te - 30 }
    };
  }
  function ge(h) {
    const $ = String((h == null ? void 0 : h.id) || "").trim();
    return !!$ && Array.isArray(t.selectedIds) && t.selectedIds.includes($);
  }
  function _e() {
    const h = E();
    return h ? B(h) || re(h) ? "stroke" : Z(h) ? "frame" : "image" : null;
  }
  function I(h) {
    if (!h || typeof h != "object") return !1;
    if (B(h)) {
      const $ = String(h.actionGroupId || h.id || "").trim(), C = O().find((b) => String((b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || "").trim() === $);
      return (C == null ? void 0 : C.locked) === !0;
    }
    if (re(h)) {
      const $ = P(h.rasterObjectId || h.id || ""), C = H().find((b) => String((b == null ? void 0 : b.id) || "").trim() === $);
      return (C == null ? void 0 : C.locked) === !0;
    }
    return h.locked === !0;
  }
  function le(h = null) {
    const $ = Array.isArray(h) ? h : ee();
    return $.length > 0 && $.every((C) => I(C));
  }
  function y(h, $) {
    const C = $ === !0;
    if (!h || typeof h != "object") return !1;
    if (B(h)) {
      const b = String(h.actionGroupId || h.id || "").trim(), F = O().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === b);
      return !F || F.locked === C ? !1 : (F.locked = C, !0);
    }
    if (re(h)) {
      const b = P(h.rasterObjectId || h.id || ""), F = H().find((M) => String((M == null ? void 0 : M.id) || "").trim() === b);
      return !F || F.locked === C ? !1 : (F.locked = C, !0);
    }
    return h.locked === C ? !1 : (h.locked = C, !0);
  }
  function v() {
    if (r) return;
    const h = ee();
    if (!h.length) return;
    const $ = !le(h);
    let C = !1;
    h.forEach((b) => {
      y(b, $) && (C = !0);
    }), C && (oe(), d(), Pe(), ie(), j());
  }
  function R(h) {
    se(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && ue(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && Z(h) ? a.active.selected_shot_id = h.id || null : h ? Z(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function Y(h, $ = null) {
    const C = [], b = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((q) => {
      const te = String((q == null ? void 0 : q.id) || "").trim();
      !te || b.has(te) || (b.add(te), C.push(te));
    }), t.selectedIds = C, se(), s.selection = null;
    const F = String($ || "").trim();
    t.selectedId = F && C.includes(F) ? F : C[C.length - 1] || null;
    const M = E();
    a.active.selected_sticker_id = M && ue(M) && M.id || null, M && Z(M) ? a.active.selected_shot_id = M.id || null : C.length || (a.active.selected_shot_id = null);
  }
  function S() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((C, b) => ({
      kind: "frame",
      item: C,
      label: String((C == null ? void 0 : C.label) || `Frame ${b + 1}`)
    })), $ = f().map((C, b) => {
      var M, q;
      const F = V(C) ? String(C.id || pd) : String(((q = (M = a.assets) == null ? void 0 : M[C.asset_id]) == null ? void 0 : q.name) || C.asset_id || C.id || `Image ${b + 1}`);
      return {
        kind: "image",
        item: C,
        label: F
      };
    });
    return [...h, ...$];
  }
  function w(h) {
    return h === "frame" ? He.camera : h === "stroke" ? He.paintbrush_vertical_tool : He.image;
  }
  function D(h) {
    return !h || !h.item ? {
      label: String((h == null ? void 0 : h.label) || ""),
      icon: null
    } : {
      label: String(h.label || ""),
      icon: w(h.kind)
    };
  }
  function k() {
    if (r) return;
    const h = E();
    !h || !V(h) || (h.visible = T(h), pe(), he(), oe(), d(), ie(), Pe(), j());
  }
  function N() {
    if (r || l !== "stickers") return;
    const h = E();
    if (!h || !V(h)) return;
    const $ = h.initial_pose;
    if (!$ || typeof $ != "object") return;
    h.yaw_deg = Number($.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number($.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number($.hFOV_deg ?? h.hFOV_deg ?? 30);
    const C = G(Bs, () => {
      j();
    });
    C && (C.complete || C.naturalWidth || C.width) ? h.vFOV_deg = u(
      Number($.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(C.naturalWidth || C.width || 1),
      Number(C.naturalHeight || C.height || 1)
    ) : h.vFOV_deg = Number($.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number($.rot_deg ?? h.rot_deg ?? 0), oe(), d(), ie(), Pe(), j();
  }
  function A(h) {
    if (!h || !V(h)) return null;
    const $ = h.initial_pose;
    if (!$ || typeof $ != "object") return null;
    const C = {
      yaw_deg: Number($.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number($.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number($.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number($.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number($.rot_deg ?? h.rot_deg ?? 0)
    }, b = G(Bs, () => {
      j();
    });
    return b && (b.complete || b.naturalWidth || b.width) && (C.vFOV_deg = u(
      C.hFOV_deg,
      Number(b.naturalWidth || b.width || 1),
      Number(b.naturalHeight || b.height || 1)
    )), C;
  }
  function W() {
    const h = E();
    if (!h || !V(h)) return !1;
    const $ = A(h);
    if (!$) return !1;
    const C = (b, F) => Math.abs(Number(b || 0) - Number(F || 0)) <= 1e-4;
    return !(C(h.yaw_deg, $.yaw_deg) && C(h.pitch_deg, $.pitch_deg) && C(h.hFOV_deg, $.hFOV_deg) && C(h.vFOV_deg, $.vFOV_deg) && C(h.rot_deg, $.rot_deg));
  }
  function Q(h = {}) {
    const C = h.preservePanelValues !== !1 ? z(E()) : null;
    C && (t.panelLastValues = {
      yaw_deg: Number(C.yaw_deg || 0),
      pitch_deg: Number(C.pitch_deg || 0),
      hFOV_deg: Number(C.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(C.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(C.rot_deg || 0),
      roll_deg: Number(C.roll_deg || 0),
      aspect_id: Or(C)
    }), t.selectedId = null, t.selectedIds = [], se(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function ae() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((h) => h.id === t.worldSelectedId && h.placement === "world") || null;
  }
  function L(h) {
    R(null), t.worldSelectedId = h, n.backgroundDirty = !0;
  }
  function se() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function ve(h) {
    return !!h && !r && !h.locked;
  }
  function we() {
    if (l !== "cutout") return;
    const h = m();
    h && (t.selectedId = String(h.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function pe() {
    var $;
    const h = E();
    (U(h) && !fe(h) || t.selectedId === yl && X() && !c() || _e() === "stroke" && !de()) && R(null), (($ = ae()) == null ? void 0 : $.visible) === !1 && se();
  }
  function be() {
    if (r) return;
    const h = ee();
    if (!E() || h.length === 0 || h.some((te) => I(te))) return;
    ne();
    const C = g(), b = new Set(h.map((te) => ue(te) ? `sticker:${String(te.id || "")}` : re(te) ? `rasterObject:${P(te.rasterObjectId || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || te.id || "")}`)), F = [], M = [];
    if (C.forEach((te) => {
      var xe, Ne;
      const Se = te.type === "sticker" ? `sticker:${String(((xe = te.item) == null ? void 0 : xe.id) || "")}` : te.type === "rasterObject" ? `rasterObject:${String(((Ne = te.item) == null ? void 0 : Ne.id) || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || "")}`;
      b.has(Se) ? F.push(te) : M.push(te);
    }), !F.length || F[F.length - 1] === C[C.length - 1]) return;
    [...M, ...F].forEach((te, Se) => {
      te.type === "sticker" && te.item && (te.item.z_index = Se), te.type === "strokeGroup" && te.item && (te.item.z_index = Se), te.type === "rasterObject" && te.item && (te.item.z_index = Se);
    }), he(), oe(), d(), Pe(), j();
  }
  function ye() {
    if (r) return;
    const h = ee();
    if (!E() || h.length === 0 || h.some((te) => I(te))) return;
    ne();
    const C = g(), b = new Set(h.map((te) => ue(te) ? `sticker:${String(te.id || "")}` : re(te) ? `rasterObject:${P(te.rasterObjectId || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || te.id || "")}`)), F = [], M = [];
    if (C.forEach((te) => {
      var xe, Ne;
      const Se = te.type === "sticker" ? `sticker:${String(((xe = te.item) == null ? void 0 : xe.id) || "")}` : te.type === "rasterObject" ? `rasterObject:${String(((Ne = te.item) == null ? void 0 : Ne.id) || te.id || "")}` : `strokeGroup:${String(te.actionGroupId || "")}`;
      b.has(Se) ? F.push(te) : M.push(te);
    }), !F.length || F[0] === C[0]) return;
    [...F, ...M].forEach((te, Se) => {
      te.type === "sticker" && te.item && (te.item.z_index = Se), te.type === "strokeGroup" && te.item && (te.item.z_index = Se), te.type === "rasterObject" && te.item && (te.item.z_index = Se);
    }), he(), oe(), d(), Pe(), j();
  }
  return {
    connect(h) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: _,
        getDisplayListObjects: g,
        getList: p,
        getPaintingGroupList: O,
        getRasterObjectItem: K,
        getRasterObjectList: H,
        getStickerUiImage: G,
        getStrokeGroupItem: x,
        hasCamera: X,
        isExternalSticker: V,
        isRasterObjectItem: re,
        isSceneSticker: U,
        isShotItem: Z,
        isStickerHidden: T,
        isStickerItem: ue,
        isStrokeGroupItem: B,
        markObjectVisualsDirty: he,
        normalizeDisplayZIndices: ne,
        objectGeom: me,
        paintingShown: de,
        parseRasterObjectSelectionId: P,
        poseOf: z,
        pushHistory: oe,
        requestDraw: j,
        sceneStickerShown: fe,
        updateSelectionMenu: Pe,
        updateSidePanel: ie
      } = h);
    },
    getSelected: E,
    getSelectedItems: ee,
    getMultiSelectionGeom: ce,
    isItemSelected: ge,
    getSelectedKind: _e,
    isItemLocked: I,
    areAllSelectedItemsLocked: le,
    toggleSelectedLock: v,
    setSelectedItem: R,
    setSelectedItems: Y,
    getCutoutInspectorItems: S,
    getSelectionItemIcon: w,
    getSelectionItemLabelData: D,
    toggleSelectedExternalStickerVisibility: k,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: W,
    clearSelection: Q,
    selectedWorldSticker: ae,
    selectWorldSticker: L,
    clearWorldSelection: se,
    worldStickerEditable: ve,
    applyInitialCutoutFocus: we,
    releaseHiddenSelection: pe,
    bringSelectedToFront: be,
    sendSelectedToBack: ye
  };
}
function eN(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, c, d, u, f = { key: [], projection: null };
  function m() {
    return o && a() && i.camera.projection === "erp";
  }
  function _() {
    const ee = re({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !ee || ee.length !== 4 ? !1 : ee[0].y >= ee[3].y;
  }
  function g() {
    return dm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function p() {
    const E = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return E.some((ee, ce) => ee !== f.key[ce]) && (f = { key: E, projection: pm(g(), r.width, r.height) }), f.projection;
  }
  function O(E) {
    const ee = p().project(E);
    return ee.z > 1e-4 ? ee : null;
  }
  function K(E, ee) {
    return p().ray(E, ee);
  }
  function H() {
    const E = r.width, ee = r.height, ce = 2;
    if (E / Math.max(ee, 1) >= ce) {
      const y = ee, v = y * ce;
      return { x: (E - v) * 0.5, y: 0, w: v, h: y };
    }
    const _e = E, I = _e / ce;
    return { x: 0, y: (ee - I) * 0.5, w: _e, h: I };
  }
  function G(E) {
    return {
      lon: Math.atan2(E.x, E.z),
      lat: Math.asin(Ee(E.y, -1, 1))
    };
  }
  function x(E, ee = null) {
    const { lon: ce, lat: ge } = G(E), _e = H();
    let I = _e.x + (ce / (2 * Math.PI) + 0.5) * _e.w;
    const le = _e.y + (0.5 - ge / Math.PI) * _e.h;
    if (ee !== null) {
      for (; I - ee > _e.w / 2; ) I -= _e.w;
      for (; I - ee < -_e.w / 2; ) I += _e.w;
    }
    return { x: I, y: le, z: 1 };
  }
  function X(E) {
    const ee = c(E), ce = oo(
      Number(ee.yaw_deg || 0),
      Number(ee.pitch_deg || 0),
      Number(ee.rot_deg || ee.roll_deg || 0)
    ), ge = Math.tan(Ee(Number(ee.hFOV_deg || 20), 0.1, 179) * 0.5 * yr), _e = Math.tan(Ee(Number(ee.vFOV_deg || 20), 0.1, 179) * 0.5 * yr);
    return {
      centerDir: ce.fwd,
      right: ce.right,
      up: ce.up,
      tanX: ge,
      tanY: _e
    };
  }
  function V(E, ee, ce) {
    return IP(Xf(Xf(E.centerDir, Jf(E.right, ee)), Jf(E.up, ce)));
  }
  function re(E) {
    const ee = X(E);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ge, v: _e }) => V(ee, ge * ee.tanX, _e * ee.tanY));
  }
  function U(E, ee, ce) {
    const ge = X(E), _e = (ee * 2 - 1) * ge.tanX, I = (1 - ce * 2) * ge.tanY;
    return V(ge, _e, I);
  }
  function Z(E) {
    const ee = t.width / Math.max(1, r.width), ce = t.height / Math.max(1, r.height);
    return { x: E.x * ee, y: E.y * ce, w: E.w * ee, h: E.h * ce };
  }
  function T(E, ee = null, ce = null, ge = null) {
    if (n.mode === "frame") {
      const _e = ee || s();
      if (!_e) return [];
      const I = ce || l(_e);
      return oe(E, _e, I);
    }
    return de(E, ge);
  }
  function ue(E, ee = null, ce = null, ge = null, _e = null) {
    if (!E) return null;
    if (n.mode === "unwrap") {
      const le = de([E], _e);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const I = he(E);
    return I ? d(I, ee, ce, ge) : null;
  }
  function B(E, ee) {
    if (!E || !ee) return null;
    const ce = Number(ee.x || 0), ge = Number(ee.y || 0);
    return U(E, ce, ge);
  }
  function he(E) {
    if (!E) return null;
    const ee = (Number(E.u || 0) - 0.5) * (2 * Math.PI), ce = (0.5 - Number(E.v || 0)) * Math.PI, ge = Math.cos(ce);
    return xl(ge * Math.sin(ee), Math.sin(ce), ge * Math.cos(ee));
  }
  function ne(E, ee) {
    if (!E || !ee) return null;
    const ce = X(E), ge = cc(ee, ce.centerDir);
    if (!Number.isFinite(ge) || ge <= 1e-6) return null;
    const _e = cc(ee, ce.right) / ge, I = cc(ee, ce.up) / ge;
    return {
      x: (_e / Math.max(1e-6, ce.tanX) + 1) * 0.5,
      y: (1 - I / Math.max(1e-6, ce.tanY)) * 0.5
    };
  }
  function me(E) {
    if (!Array.isArray(E) || E.length < 3) return [];
    if (n.mode === "unwrap") {
      const ce = H();
      return E.map((ge) => ({
        x: ce.x + Number(ge.u || 0) * ce.w,
        y: ce.y + Number(ge.v || 0) * ce.h
      }));
    }
    const ee = E.map((ce) => O(he(ce))).filter(Boolean);
    return ee.every((ce) => Number(ce.z || 0) > 0) ? ee.map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) })) : [];
  }
  function de(E, ee = null) {
    if (!Array.isArray(E) || E.length < 1) return [];
    if (n.mode === "unwrap") {
      const ge = H();
      return E.map((_e) => {
        const I = (Number(_e.u || 0) % 1 + 1) % 1, le = ee == null ? I : Number(ee || 0) + u(I, ee);
        return {
          x: ge.x + le * ge.w,
          y: ge.y + Number(_e.v || 0) * ge.h
        };
      });
    }
    const ce = E.map((ge) => O(he(ge))).filter(Boolean);
    return ce.every((ge) => Number(ge.z || 0) > 0) ? ce.map((ge) => ({ x: Number(ge.x || 0), y: Number(ge.y || 0) })) : [];
  }
  function P(E, ee = 160) {
    if (!Array.isArray(E) || E.length < 3) return !1;
    for (let ce = 0; ce < E.length; ce += 1) {
      const ge = E[ce], _e = E[(ce + 1) % E.length];
      if (!ge || !_e || !Number.isFinite(ge.x) || !Number.isFinite(ge.y) || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || Math.hypot(Number(_e.x) - Number(ge.x), Number(_e.y) - Number(ge.y)) > ee) return !1;
    }
    return !0;
  }
  function z(E, ee, ce) {
    if (!Array.isArray(E) || E.length < 3 || !ee || !ce) return [];
    const ge = [];
    for (const _e of E) {
      const I = he(_e), le = ne(ee, I);
      if (!le) return [];
      ge.push({
        x: Number(ce.x || 0) + Number(le.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(le.y || 0) * Number(ce.h || 0)
      });
    }
    return P(ge, Math.max(80, Math.max(ce.w, ce.h) * 0.75)) ? ge : [];
  }
  function oe(E, ee, ce) {
    if (!Array.isArray(E) || E.length < 1 || !ee || !ce) return [];
    const ge = [];
    for (const _e of E) {
      const I = he(_e), le = ne(ee, I);
      le && ge.push({
        x: Number(ce.x || 0) + Number(le.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(le.y || 0) * Number(ce.h || 0)
      });
    }
    return ge;
  }
  function j(E) {
    const ee = r.getBoundingClientRect();
    return {
      x: (E.clientX - ee.left) / ee.width * r.width,
      y: (E.clientY - ee.top) / ee.height * r.height
    };
  }
  function fe(E) {
    const ee = r.getBoundingClientRect();
    return {
      x: Number(E.clientX) - Number(ee.left || 0),
      y: Number(E.clientY) - Number(ee.top || 0)
    };
  }
  function Pe(E, ee = performance.now()) {
    if (n.mode === "unwrap") {
      const I = H(), le = (E.x - I.x) / Math.max(1, I.w), y = (E.y - I.y) / Math.max(1, I.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Ee(y, 0, 1),
        t: Number(ee || 0)
      };
    }
    const ce = K(E.x, E.y), { lon: ge, lat: _e } = G(ce);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ge / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - _e / Math.PI, 0, 1),
      t: Number(ee || 0)
    };
  }
  function ie(E, ee, ce = performance.now()) {
    const ge = l(ee);
    if (!ge) return null;
    const _e = {
      x: (Number(E.x) - ge.x) / Math.max(1, ge.w),
      y: (Number(E.y) - ge.y) / Math.max(1, ge.h)
    };
    if (_e.x < 0 || _e.x > 1 || _e.y < 0 || _e.y > 1) return null;
    const I = B(ee, _e);
    if (!I) return null;
    const { lon: le, lat: y } = G(I);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - y / Math.PI, 0, 1),
      t: Number(ce || 0)
    };
  }
  return {
    connect(E) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = E);
    },
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: p,
    projectDir: O,
    screenToWorldDir: K,
    getUnwrapRect: H,
    projectDirUnwrap: x,
    getStickerFrame: X,
    stickerDirFromFrame: V,
    stickerCornersDir: re,
    stickerSampleDir: U,
    stickerCornerOrderSanity: _,
    projectEditorPoints: T,
    projectErpPointToEditor: ue,
    frameLocalPointToWorldDir: B,
    erpPointToWorldDir: he,
    worldDirToFrameLocalPoint: ne,
    projectLassoPointsToCurrentView: me,
    projectErpLassoPointsToFrameRect: z,
    screenPos: j,
    screenPosCss: fe,
    screenPosToErpPoint: Pe,
    screenPosToFrameAsErpPoint: ie,
    deviceRect: Z
  };
}
function tN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe;
  function j(I, le) {
    const y = String(I.actionGroupId || I.id || "").trim(), v = H(y, I.layerKind), R = s(y, I.layerKind, v), Y = (R == null ? void 0 : R.centerUv) || K(y, I.layerKind, v), S = n.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, w = [], D = n.mode === "frame" ? l() : null, k = D ? u(D) : null;
    for (const pe of v) {
      const be = (pe == null ? void 0 : pe.geometry) || null, ye = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], h = he(ye, D, k, S).filter((b) => Number.isFinite(b == null ? void 0 : b.x) && Number.isFinite(b == null ? void 0 : b.y));
      if (!h.length) continue;
      const $ = c(String((pe == null ? void 0 : pe.toolKind) || "pen")), C = Pn[$] || Pn[Ar];
      w.push({
        points: h,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((pe == null ? void 0 : pe.size) || 10) * Math.max(0.1, Number((C == null ? void 0 : C.sizeScale) ?? 1)) + 10),
        layerKind: String((pe == null ? void 0 : pe.layerKind) || I.layerKind || "paint")
      });
    }
    const N = ne(Y, null, D, k, S);
    if (!N) {
      const pe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, pe), pe;
    }
    const W = d(R).map((pe) => ne(pe, N.x, D, k, S)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y)).map((pe) => ({ x: Number(pe.x || 0), y: Number(pe.y || 0) }));
    if (W.length < 4) {
      const pe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, pe), pe;
    }
    const Q = (pe, be) => ({
      x: (Number((pe == null ? void 0 : pe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((pe == null ? void 0 : pe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: pe,
      b: be
    }), ae = Q(W[0], W[1]), L = Q(W[1], W[2]), se = Q(W[2], W[3]), ve = Q(W[3], W[0]), we = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: W,
      edgeMidpoints: [
        { edge: "top", ...ae },
        { edge: "right", ...L },
        { edge: "bottom", ...se },
        { edge: "left", ...ve }
      ],
      rotateStemBase: { x: ae.x, y: ae.y },
      rotateHandle: { x: ae.x, y: ae.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return n._strokeGeomCache.set(le, we), we;
  }
  function fe(I, le) {
    const y = n.mode === "frame" ? l() : null, v = y ? u(y) : null, R = f(I), Y = n.mode === "unwrap" ? Number((R == null ? void 0 : R.u) || 0) : null, S = ne(R, null, y, v, Y), D = _(I).map((W) => ne(W, (S == null ? void 0 : S.x) ?? null, y, v, Y)).filter((W) => Number.isFinite(W == null ? void 0 : W.x) && Number.isFinite(W == null ? void 0 : W.y));
    if (!Array.isArray(D) || D.length < 4) {
      const W = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(le, W), W;
    }
    const k = D.slice(0, 4).map((W) => ({ x: Number((W == null ? void 0 : W.x) || 0), y: Number((W == null ? void 0 : W.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: k.reduce((W, Q) => W + Number(Q.x || 0), 0) / k.length,
        y: k.reduce((W, Q) => W + Number(Q.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return n._strokeGeomCache.set(le, A), A;
  }
  function Pe(I, le = null, y = null, v = null, R = {}) {
    if (n.mode === "frame") {
      const N = y || l(), A = v || u(N);
      if (!N || !A) return null;
      const W = N ? oe(N, I) : null;
      return W ? {
        x: Number(A.x || 0) + Number(W.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(W.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return B(I, le);
    const Y = 1e-4, S = o().project(I, Y);
    if (!Number.isFinite(S.z) || S.z <= Y && !(R != null && R.clipBehind)) return null;
    const w = r.width, D = r.height, k = Math.max(w, D) * 2;
    return {
      x: Ee(S.x, -k, w + k),
      y: Ee(S.y, -k, D + k),
      z: Math.max(S.z, Y),
      rawZ: S.z,
      clipped: S.z <= Y
    };
  }
  function ie(I, le = []) {
    if (n.mode !== "pano" || re(I)) return 1;
    const y = le.map((v) => Number((v == null ? void 0 : v.rawZ) ?? (v == null ? void 0 : v.z))).filter((v) => Number.isFinite(v));
    return y.length ? CP(0.035, 0.2, Math.min(...y)) : 1;
  }
  function E(I) {
    if (X(I) && !me(I)) return { visible: !1 };
    const le = T(I), y = Nn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), v = n.mode === "frame" ? l() : null, R = v ? u(v) : null, Y = n.mode === "pano" && (re(I) || V(I)), S = Y ? { clipBehind: !0 } : null, w = Pe(y, null, v, R, S);
    if (!w) return { visible: !1 };
    const D = p(I), N = de(I).map((F) => Pe(F, w.x, v, R, S)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (N.length < 4) return { visible: !1 };
    const A = P(D, 0, D.tanY), W = P(D, 0, D.tanY + Math.max(D.tanY * 0.43, 0.053)), Q = Pe(A, w.x, v, R, S);
    if (!Q) return { visible: !1 };
    const ae = Pe(W, (Q == null ? void 0 : Q.x) ?? w.x, v, R, S), L = ((ae == null ? void 0 : ae.x) ?? Q.x) - Q.x, se = ((ae == null ? void 0 : ae.y) ?? Q.y) - Q.y, ve = Math.hypot(L, se) || 1, we = {
      x: Q.x + L / ve * 30,
      y: Q.y + se / ve * 30
    }, pe = Pe(P(D, 0, D.tanY), w.x, v, R, S), be = Pe(P(D, D.tanX, 0), w.x, v, R, S), ye = Pe(P(D, 0, -D.tanY), w.x, v, R, S), h = Pe(P(D, -D.tanX, 0), w.x, v, R, S);
    if (!pe || !be || !ye || !h) return { visible: !1 };
    const $ = [
      w,
      ...N,
      Q,
      ae,
      pe,
      be,
      ye,
      h
    ];
    if (Y && !$.some((F) => Number((F == null ? void 0 : F.rawZ) ?? (F == null ? void 0 : F.z)) > 1e-4)) return { visible: !1 };
    const C = ie(I, $), b = [
      {
        edge: "top",
        x: pe.x,
        y: pe.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: be.x,
        y: be.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: ye.x,
        y: ye.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: h.x,
        y: h.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: N.map((F) => ({ x: F.x, y: F.y })),
      edgeMidpoints: b,
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: we,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: C,
      visible: !0
    };
  }
  function ee(I) {
    if (t && V(I) && G()) return { visible: !1 };
    if (!Z() && (U(I) || x(I))) return { visible: !1 };
    if (U(I)) {
      const R = String(I.actionGroupId || I.id || "").trim(), Y = O(R, I.layerKind), S = n._strokeGeomCache.get(Y);
      return S || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), j(I, Y));
    }
    if (x(I)) {
      const R = m(I), Y = n._strokeGeomCache.get(R);
      return Y || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), fe(I, R));
    }
    const le = g(I), y = n._strokeGeomCache.get(le);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const v = E(I);
    return n._strokeGeomCache.set(le, v), v;
  }
  function ce(I, le, y, v = null) {
    const R = [];
    for (let Y = 0; Y <= y; Y += 1) {
      const S = Y / y;
      let w = 0, D = 0;
      le === 0 ? (w = S, D = 0) : le === 1 ? (w = 1, D = S) : le === 2 ? (w = 1 - S, D = 1) : (w = 0, D = 1 - S);
      const k = z(I, w, D), N = n.mode === "unwrap" ? B(k, v) : ue(k);
      N && R.push(N);
    }
    return R;
  }
  function ge() {
    const I = [...Array.isArray(i.shots) ? i.shots : []], le = [...a()].sort((y, v) => Number(y.z_index || 0) - Number(v.z_index || 0));
    return [...I, ...le];
  }
  function _e() {
    const I = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((y, v) => Number(v.z_index || 0) - Number(y.z_index || 0)), ...I];
  }
  return {
    connect(I) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: m,
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: p,
        getStrokeGeomCacheKey: O,
        getStrokeGroupCenterUv: K,
        getStrokeGroupStrokes: H,
        isFreeSpaceView: G,
        isRasterObjectItem: x,
        isSceneSticker: X,
        isShotItem: V,
        isStickerItem: re,
        isStrokeGroupItem: U,
        paintingShown: Z,
        poseOf: T,
        projectDir: ue,
        projectDirUnwrap: B,
        projectEditorPoints: he,
        projectErpPointToEditor: ne,
        sceneStickerShown: me,
        stickerCornersDir: de,
        stickerDirFromFrame: P,
        stickerSampleDir: z,
        worldDirToFrameLocalPoint: oe
      } = I);
    },
    projectSceneItemDir: Pe,
    objectGeom: ee,
    sampleStickerEdge: ce,
    getCutoutSelectableItemsForDisplay: ge,
    getCutoutSelectableItemsForHit: _e
  };
}
const Xa = /* @__PURE__ */ new Map();
function nN(e) {
  const {
    api: t,
    cutoutV2: r,
    editor: n,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: l
  } = e;
  let c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue;
  function B(S = n.interaction) {
    const w = String((S == null ? void 0 : S.kind) || "");
    if (w === "paint_stroke" || w === "paint_lasso_fill" || w === "move_stroke_group" || w === "scale_stroke_group" || w === "rotate_stroke_group" || w === "move_raster_object" || w === "scale_raster_object") return !0;
    if (w === "move_multi") {
      const D = Array.isArray(S == null ? void 0 : S.strokeSnapshots) && S.strokeSnapshots.length > 0, k = Array.isArray(S == null ? void 0 : S.rasterSnapshots) && S.rasterSnapshots.length > 0;
      return D || k;
    }
    return !1;
  }
  function he() {
    var w, D, k, N;
    let S = null;
    try {
      const A = p(), W = ((N = (k = (D = (w = n.paintEngine) == null ? void 0 : w.getErpTarget) == null ? void 0 : D.call(w, A)) == null ? void 0 : k.displayPaint) == null ? void 0 : N.canvas) || null;
      W && (S = {
        source: W,
        revision: `${O()}:${ne()}`
      });
    } catch {
      S = null;
    }
    return S;
  }
  function ne() {
    var N, A, W, Q, ae, L, se;
    const S = n.interaction, w = String((S == null ? void 0 : S.kind) || "");
    if (!B(S)) return "";
    if (w === "paint_stroke" || w === "paint_lasso_fill") {
      const ve = ((N = S == null ? void 0 : S.stroke) == null ? void 0 : N.geometry) || null, we = String(((A = S == null ? void 0 : S.stroke) == null ? void 0 : A.layerKind) || ""), pe = ((W = ve == null ? void 0 : ve.rawPoints) == null ? void 0 : W.length) ?? ((Q = ve == null ? void 0 : ve.points) == null ? void 0 : Q.length) ?? 0, be = String((S == null ? void 0 : S._livePreviewToken) || "");
      return `_${we || "paint"}_${w}_live${be}_${pe}_${n.livePaintInteractionRevision}`;
    }
    const D = String(((ae = S == null ? void 0 : S.item) == null ? void 0 : ae.actionGroupId) || ""), k = String(((L = S == null ? void 0 : S.item) == null ? void 0 : L.rasterObjectId) || ((se = S == null ? void 0 : S.item) == null ? void 0 : se.id) || "");
    return `_${w}_${D || k || "active"}_${n.livePaintInteractionRevision}`;
  }
  function me(S, w = null) {
    const D = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!D) return null;
    const k = s.get(D);
    if (k)
      return k.complete || k.width || k.naturalWidth, k;
    const N = new Image();
    return N.onload = () => {
      typeof w == "function" && w();
    }, N.src = D, s.set(D, N), N;
  }
  function de(S) {
    const w = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!w) return null;
    const D = a.get(w);
    if (D) return D.ready ? D : null;
    const k = me(S, () => {
      const se = a.get(w);
      se && (se.ready = !1), Z({ localOnly: !0 });
    });
    if (!k || !(k.complete || k.width || k.naturalWidth)) return null;
    const N = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (N < 1 || A < 1) return null;
    const W = mn({ label: "editor.image-pixels" });
    W.width = N, W.height = A;
    const Q = W.getContext("2d", { willReadFrequently: !0 });
    if (!Q) return null;
    Q.clearRect(0, 0, N, A), Q.drawImage(k, 0, 0, N, A);
    const ae = Q.getImageData(0, 0, N, A).data, L = { canvas: W, width: N, height: A, alpha: ae, ready: !0 };
    return a.set(w, L), L;
  }
  function P(S, w) {
    if (!S || !w) return null;
    const D = (S == null ? void 0 : S.bbox) || null;
    if (!D) return null;
    const k = (S == null ? void 0 : S.transform) || {}, N = {
      u: (Number(D.u0 || 0) + Number(D.u1 || 0)) * 0.5,
      v: (Number(D.v0 || 0) + Number(D.v1 || 0)) * 0.5
    }, A = {
      u: ((Number(w.u || 0) - Number(k.du || 0)) % 1 + 1) % 1,
      v: Number(w.v || 0) - Number(k.dv || 0)
    }, W = G(
      A,
      N,
      Number(k.scale || 1),
      Number(k.rot_deg || 0)
    ), Q = Number(D.u1 || 0) - Number(D.u0 || 0), ae = Number(D.v1 || 0) - Number(D.v0 || 0);
    if (!(Q > 1e-6) || !(ae > 1e-6)) return null;
    const L = ue(Number(W.u || 0), Number(D.u0 || 0)) / Q, se = (Number(W.v || 0) - Number(D.v0 || 0)) / ae;
    if (L < 0 || L > 1 || se < 0 || se > 1) return 0;
    const ve = de(S);
    if (!ve) return null;
    const we = Ee(Math.floor(L * ve.width), 0, ve.width - 1), pe = Ee(Math.floor(se * ve.height), 0, ve.height - 1);
    return Number(ve.alpha[(pe * ve.width + we) * 4 + 3] || 0);
  }
  function z(S, w, D, k = null) {
    if (!(w != null && w.visible) || !Kr(D, w.corners)) return !1;
    const N = k || T(D, performance.now()), A = P(S, N);
    return A === null ? !0 : A > 8;
  }
  function oe() {
    var k, N, A, W, Q, ae, L, se;
    const S = ((N = (k = n.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : N.call(k, p(!1))) || null, w = Math.max(1, Number(((A = S == null ? void 0 : S.descriptor) == null ? void 0 : A.width) || ((Q = (W = S == null ? void 0 : S.displayPaint) == null ? void 0 : W.canvas) == null ? void 0 : Q.width) || 2048)), D = Math.max(1, Number(((ae = S == null ? void 0 : S.descriptor) == null ? void 0 : ae.height) || ((se = (L = S == null ? void 0 : S.displayPaint) == null ? void 0 : L.canvas) == null ? void 0 : se.height) || 1024));
    return { width: w, height: D };
  }
  function j() {
    var pe, be, ye;
    const S = n.interaction;
    if ((S == null ? void 0 : S.kind) !== "paint_stroke") return null;
    const w = (S == null ? void 0 : S.stroke) || null;
    if (!w || String((w == null ? void 0 : w.layerKind) || "") !== "paint" || String((w == null ? void 0 : w.toolKind) || "") !== "eraser") return null;
    const D = f(), k = `${ne()}:${D.width}:${D.height}`;
    if (((pe = n._activePaintEraserPreviewInfo) == null ? void 0 : pe.cacheKey) === k)
      return n._activePaintEraserPreviewInfo.value || null;
    const N = cn(w), A = (N == null ? void 0 : N.geometry) || null;
    if (A && String(A.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(A.rawPoints) && A.rawPoints.length ? A.rawPoints : Array.isArray(A.points) ? A.points : [];
      A.processedPoints = V(h, N.targetSpace, !0);
    }
    const W = d(D.width, D.height, { readback: !0 });
    if (!re(W, N, { w: D.width, h: D.height })) return null;
    const Q = ((ye = (be = W.ctx) == null ? void 0 : be.getImageData(0, 0, D.width, D.height)) == null ? void 0 : ye.data) || null;
    if (!Q) return null;
    let ae = D.width, L = D.height, se = -1, ve = -1;
    for (let h = 0; h < D.height; h += 1)
      for (let $ = 0; $ < D.width; $ += 1)
        Q[(h * D.width + $) * 4 + 3] <= 8 || ($ < ae && (ae = $), h < L && (L = h), $ > se && (se = $), h > ve && (ve = h));
    if (se < ae || ve < L)
      return n._activePaintEraserPreviewInfo = { cacheKey: k, value: null }, null;
    const we = {
      surface: W,
      bounds: { minX: ae, minY: L, maxX: se, maxY: ve },
      key: `${k}:${ae}:${L}:${se}:${ve}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: k, value: we }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), we;
  }
  function fe() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Pe(S, w, D) {
    var k, N;
    if (!S) return null;
    if (S.type === "rasterObject" && ((k = S.item) != null && k.bbox)) {
      const A = S.item.bbox, W = ((N = S.item) == null ? void 0 : N.transform) || {}, Q = Number(A.u0 || 0) + Number(W.du || 0), ae = Number(A.u1 || 0) + Number(W.du || 0), L = Number(A.v0 || 0) + Number(W.dv || 0), se = Number(A.v1 || 0) + Number(W.dv || 0);
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * w),
        maxX: Math.ceil((ae % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(L, 0, 1) * D),
        maxY: Math.ceil(Ee(se, 0, 1) * D),
        wraps: ae - Q >= 1 || Q < 0 || ae > 1
      };
    }
    if (S.type === "strokeGroup") {
      const A = H(S.actionGroupId, "paint"), W = u(S.actionGroupId, "paint", A);
      if (!W) return null;
      const Q = W.centerUv.u - W.halfW, ae = W.centerUv.u + W.halfW, L = W.centerUv.v - W.halfH, se = W.centerUv.v + W.halfH;
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * w),
        maxX: Math.ceil((ae % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(L, 0, 1) * D),
        maxY: Math.ceil(Ee(se, 0, 1) * D),
        wraps: ae - Q >= 1 || Q < 0 || ae > 1
      };
    }
    return null;
  }
  function ie(S, w, D) {
    if (!S || !w) return !1;
    const k = (W) => W.wraps ? [
      { minX: 0, maxX: W.maxX, minY: W.minY, maxY: W.maxY, wraps: !1 },
      { minX: W.minX, maxX: D - 1, minY: W.minY, maxY: W.maxY, wraps: !1 }
    ] : [W], N = k(S), A = k(w);
    return N.some((W) => A.some((Q) => !(W.maxX < Q.minX || Q.maxX < W.minX || W.maxY < Q.minY || Q.maxY < W.minY)));
  }
  function E(S, w, D) {
    var F, M, q, te, Se, xe, Ne;
    if (!S || !w || !((F = D == null ? void 0 : D.surface) != null && F.canvas) || w.type !== "rasterObject") return S;
    const k = Number(S.width || D.surface.canvas.width || 0), N = Number(S.height || D.surface.canvas.height || 0);
    if (k < 1 || N < 1) return S;
    const A = Pe(w, k, N);
    if (A && !ie(A, D.bounds, k)) return S;
    const W = String(((M = w.item) == null ? void 0 : M.id) || w.id || ""), Q = ((q = w.item) == null ? void 0 : q.transform) || {}, ae = `${D.key}:${W}:${k}:${N}:${Number(Q.du || 0).toFixed(6)}:${Number(Q.dv || 0).toFixed(6)}:${Number(Q.rot_deg || 0).toFixed(3)}:${Number(Q.scale || 1).toFixed(4)}`, L = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (L.has(ae)) return L.get(ae);
    const se = Ee(Math.floor(Number(((te = D.bounds) == null ? void 0 : te.minX) || 0)), 0, Math.max(0, k - 1)), ve = Ee(Math.floor(Number(((Se = D.bounds) == null ? void 0 : Se.minY) || 0)), 0, Math.max(0, N - 1)), we = Ee(Math.ceil(Number(((xe = D.bounds) == null ? void 0 : xe.maxX) || 0)), se, Math.max(0, k - 1)), pe = Ee(Math.ceil(Number(((Ne = D.bounds) == null ? void 0 : Ne.maxY) || 0)), ve, Math.max(0, N - 1)), be = Math.max(1, we - se + 1), ye = Math.max(1, pe - ve + 1), h = d(k, N, { readback: !0 });
    h.ctx.clearRect(0, 0, k, N), h.ctx.drawImage(S, 0, 0);
    const $ = h.ctx.getImageData(se, ve, be, ye);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(D.surface.canvas, 0, 0), h.ctx.restore();
    const C = h.ctx.getImageData(se, ve, be, ye);
    let b = !1;
    for (let Te = 0; Te < be * ye; Te += 1) {
      const ze = $.data[Te * 4 + 3], je = C.data[Te * 4 + 3];
      if (ze > je) {
        b = !0;
        break;
      }
    }
    return b ? (L.size > 64 && L.clear(), L.set(ae, h.canvas), h.canvas) : (L.set(ae, S), S);
  }
  function ee(S, w = null) {
    const D = X((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), k = (S == null ? void 0 : S.bbox) || null;
    if (!D || !k) return null;
    const N = me(S, w);
    if (!N || !(N.complete || N.width || N.naturalWidth)) return null;
    const { width: A, height: W } = oe(), Q = (S == null ? void 0 : S.transform) || {}, ae = [
      D,
      A,
      W,
      k.u0,
      k.v0,
      k.u1,
      k.v1,
      Q.du,
      Q.dv,
      Q.rot_deg,
      Q.scale,
      K()
    ].join(":"), L = o.get(ae);
    if (L) return L;
    o.size > 64 && o.clear();
    const se = mn({ label: "editor.raster-erp" });
    se.width = A, se.height = W;
    const ve = se.getContext("2d");
    if (!ve) return null;
    const we = Number(k.u0 || 0) * A, pe = Number(k.v0 || 0) * W, be = Math.max(1, (Number(k.u1 || 0) - Number(k.u0 || 0)) * A), ye = Math.max(1, (Number(k.v1 || 0) - Number(k.v0 || 0)) * W), h = we + be * 0.5 + Number(Q.du || 0) * A, $ = pe + ye * 0.5 + Number(Q.dv || 0) * W, C = Number(Q.rot_deg || 0) * yr, b = Math.max(0.01, Number(Q.scale || 1));
    for (const F of [-A, 0, A])
      ve.save(), ve.translate(h + F, $), ve.rotate(C), ve.scale(b, b), ve.drawImage(N, -be * 0.5, -ye * 0.5, be, ye), ve.restore();
    return o.set(ae, se), se;
  }
  async function ce(S, w) {
    const D = await new Promise((Q) => S.toBlob(Q, "image/png")), k = new FormData();
    k.append("image", D, w), k.append("type", "input"), k.append("subfolder", "panorama_stickers"), k.append("overwrite", "1");
    const N = await t.fetchApi("/upload/image", { method: "POST", body: k });
    if (!N || N.status !== 200) throw new Error(`upload failed (${N == null ? void 0 : N.status})`);
    const A = await N.json(), W = String((A == null ? void 0 : A.name) || "").trim();
    if (!W) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: W,
      subfolder: String((A == null ? void 0 : A.subfolder) || "panorama_stickers"),
      storage: String((A == null ? void 0 : A.type) || "input")
    };
  }
  let ge = null, _e = !1;
  function I() {
    if (r) return !1;
    const S = Zf(l.painting), { width: w, height: D } = m();
    return X1(l.painting_layer, { paintCount: S.totalPaintCount, maskCount: S.totalMaskCount, width: w, height: D, nodeId: String(i.id ?? "0") });
  }
  function le() {
    const S = String(i.id ?? "0"), w = Xa.get(S);
    if (_e && w) return w;
    const D = (async () => {
      var A, W, Q, ae, L, se, ve, we, pe, be, ye, h;
      const k = O(), N = Zf(l.painting);
      if (N.totalPaintCount <= 0 && N.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, ge = k, c());
        return;
      }
      if (ge !== k && !_e) {
        _e = !0;
        try {
          U();
          const $ = p(!1), C = ((W = (A = n.paintEngine) == null ? void 0 : A.getErpTarget) == null ? void 0 : W.call(A, $)) || null, b = ((Q = C == null ? void 0 : C.displayPaint) == null ? void 0 : Q.canvas) || null, F = ((ae = C == null ? void 0 : C.committedMask) == null ? void 0 : ae.canvas) || null, M = Math.max(1, Number(((L = C == null ? void 0 : C.descriptor) == null ? void 0 : L.width) || (b == null ? void 0 : b.width) || (F == null ? void 0 : F.width) || 2048)), q = Math.max(1, Number(((se = C == null ? void 0 : C.descriptor) == null ? void 0 : se.height) || (b == null ? void 0 : b.height) || (F == null ? void 0 : F.height) || 1024));
          (!b && N.totalPaintCount > 0 || !F && N.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((ve = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ve.width) || 0) !== M || Number(((we = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.height) || 0) !== q) && (n._paintLayerSyncBlankSurface = d(M, q)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, M, q));
          const te = b || N.totalPaintCount > 0 && ((pe = n._paintLayerSyncBlankSurface) == null ? void 0 : pe.canvas) || null, Se = F || N.totalMaskCount > 0 && ((be = n._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null;
          if (!te && !Se) return;
          let xe = null, Ne = null;
          const Te = [];
          if (N.totalPaintCount > 0) {
            xe = await ce(te, `pano_paint_${S}.png`);
            for (const ze of $) {
              const je = String(ze || "").trim();
              if (!je) continue;
              const We = ((h = (ye = n.paintEngine) == null ? void 0 : ye.getGroupDisplayCanvas) == null ? void 0 : h.call(ye, je)) || null;
              if (!We) continue;
              const Ve = je.replace(/[^a-zA-Z0-9_-]+/g, "_"), J = await ce(We, `pano_group_${S}_${Ve}.png`);
              J && Te.push({
                id: je,
                actionGroupId: je,
                image: J
              });
            }
          }
          N.totalMaskCount > 0 && (Ne = await ce(Se, `pano_mask_${S}.png`)), k === O() && (l.painting_layer = {
            paint: xe,
            mask: Ne,
            groups: Te,
            revision: k
          }, ge = k, c());
        } catch ($) {
          throw $;
        } finally {
          _e = !1;
        }
      }
    })();
    return Xa.set(S, D), D.finally(() => {
      Xa.get(S) === D && Xa.delete(S);
    }), D;
  }
  function y(S) {
    var W;
    const w = ((W = n.paintEngine) == null ? void 0 : W.getMaskDisplayCanvas()) || null;
    if (!w) return S;
    const D = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, k = S.reduce((Q, ae) => Math.max(Q, Number((ae == null ? void 0 : ae.zIndex) || 0)), -1), N = (Array.isArray(l.stickers) ? l.stickers : []).reduce((Q, ae) => Math.max(Q, Number((ae == null ? void 0 : ae.z_index) || 0)), -1), A = Math.max(k, N);
    return S.push({
      id: "mask_display",
      source: w,
      revision: D,
      zIndex: A + 1,
      opacity: 1,
      visible: !0
    }), S;
  }
  function v() {
    var k, N;
    const S = g(!0), w = j(), D = [];
    for (const A of S) {
      if ((A == null ? void 0 : A.type) === "strokeGroup") {
        const W = String(A.actionGroupId || A.id || "");
        if (!W) continue;
        const Q = ((N = (k = n.paintEngine) == null ? void 0 : k.getGroupDisplayCanvas) == null ? void 0 : N.call(k, W)) || null;
        if (!Q) continue;
        D.push({
          id: `paint_group:${W}`,
          source: Q,
          revision: `${_()}:${W}`,
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((A == null ? void 0 : A.type) === "rasterObject") {
        const W = A.item || null, Q = X((W == null ? void 0 : W.id) || A.id || "");
        if (!Q) continue;
        const ae = ee(W, () => Z());
        if (!ae) continue;
        const L = E(ae, A, w), se = (W == null ? void 0 : W.transform) || {};
        D.push({
          id: `raster:${Q}`,
          source: L,
          revision: [
            O(),
            (w == null ? void 0 : w.key) || "",
            Q,
            Number(se.du || 0).toFixed(6),
            Number(se.dv || 0).toFixed(6),
            Number(se.rot_deg || 0).toFixed(3),
            Number(se.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: (W == null ? void 0 : W.visible) !== !1
        });
      }
    }
    return y(D);
  }
  function R() {
    return x() ? v().filter((S) => S.visible !== !1).map((S) => ({ id: S.id, media: S.source, revision: S.revision, opacity: S.opacity, zIndex: S.zIndex })) : [];
  }
  function Y() {
    l.painting_layer !== null && (l.painting_layer = null), ge = "";
  }
  return {
    connect(S) {
      ({
        commitState: c,
        createRasterSurface: d,
        ensureGroupFrame: u,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: m,
        getDisplayPaintRevisionKey: _,
        getOrderedDisplayListObjects: g,
        getOrderedPaintGroupIds: p,
        getPaintingCompositeRevisionKey: O,
        getPaintingRevisionKey: K,
        getStrokeGroupStrokes: H,
        inverseTransformErpPointAround: G,
        paintingShown: x,
        parseRasterObjectSelectionId: X,
        processFreehandPoints: V,
        rasterizeStrokeToSurface: re,
        rebuildPaintEngineIfNeeded: U,
        requestDraw: Z,
        screenPosToErpPoint: T,
        shortestWrappedDelta: ue
      } = S);
    },
    getSharedLivePaintSurface: he,
    getLivePaintRevisionSuffix: ne,
    isPaintCompositeInteraction: B,
    hitRasterObjectAt: z,
    invalidateLivePaintPreviewCaches: fe,
    buildRasterObjectEditCanvas: ee,
    needsPaintingLayerSync: I,
    syncPaintingLayerAsync: le,
    invalidatePaintingLayerState: Y,
    buildEditorViewPaintLayers: R
  };
}
function rN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(ie) {
    return !ie || typeof ie != "object" ? { x: 0, y: 0 } : { x: Number((ie == null ? void 0 : ie.u) || 0), y: Number((ie == null ? void 0 : ie.v) || 0) };
  }
  function c(ie, E, ee, ce = {}) {
    return { ...{
      ...ie,
      t: Number((ie == null ? void 0 : ie.t) || 0),
      widthScale: f(ie, "widthScale", 1),
      pressureLike: f(ie, "pressureLike", 1)
    }, ...ce, u: E, v: ee };
  }
  function d(ie, E = !1) {
    return E ? 12e-4 : 18e-4;
  }
  function u(ie, E, ee = !1) {
    if (!Array.isArray(ie) || !ie.length) return [];
    const ce = String((E == null ? void 0 : E.kind) || "") === "ERP_GLOBAL", ge = /* @__PURE__ */ new WeakMap();
    if (ce) {
      let k = null;
      ie.forEach((N) => {
        const A = Number((N == null ? void 0 : N.u) || 0), W = Number((N == null ? void 0 : N.v) || 0), Q = (A % 1 + 1) % 1, ae = k == null ? Q : k + s(Q, (k % 1 + 1) % 1);
        ge.set(N, { x: ae, y: W }), k = ae;
      });
    }
    const _e = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : ge.get(k) || l(k), I = (k, N, A, W = {}) => {
      const Q = ce ? (Number(N) % 1 + 1) % 1 : Number(N), ae = c(k, Q, A, W);
      return ge.set(ae, { x: Number(N), y: Number(A) }), ae;
    }, le = (k, N, A) => {
      const W = _e(k), Q = _e(N);
      return I(k, jn(W.x, Q.x, A), jn(W.y, Q.y, A), {
        t: jn(Number((k == null ? void 0 : k.t) || 0), Number((N == null ? void 0 : N.t) || 0), A),
        widthScale: jn(f(k, "widthScale", 1), f(N, "widthScale", 1), A),
        pressureLike: jn(f(k, "pressureLike", 1), f(N, "pressureLike", 1), A)
      });
    };
    if (ie.length === 1) {
      const k = _e(ie[0]);
      return [I(ie[0], k.x, k.y)];
    }
    const y = d(E, ee), v = (k, N) => {
      const A = [0];
      for (let pe = 1; pe < k.length; pe += 1) {
        const be = _e(k[pe - 1]), ye = _e(k[pe]);
        A.push(A[pe - 1] + Math.hypot(ye.x - be.x, ye.y - be.y));
      }
      const W = A[A.length - 1] || 0;
      if (W <= 1e-8) {
        const pe = k[0], be = _e(pe);
        return [I(pe, be.x, be.y)];
      }
      const Q = [];
      let ae = 0;
      for (let pe = 0; pe <= W + 1e-9; pe += N) {
        for (; ae < A.length - 2 && A[ae + 1] < pe; ) ae += 1;
        const be = A[ae], ye = A[ae + 1], h = Math.max(1e-8, ye - be);
        Q.push(le(k[ae], k[ae + 1], Ee((pe - be) / h, 0, 1)));
      }
      const L = k[k.length - 1], se = _e(L), ve = Q[Q.length - 1], we = ve ? _e(ve) : null;
      return (!we || Math.hypot(we.x - se.x, we.y - se.y) > N * 0.35) && Q.push(I(L, se.x, se.y)), Q;
    }, R = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const N = _e(k[0]), A = [I(k[0], N.x, N.y)];
      for (let ae = 0; ae < k.length - 1; ae += 1) {
        const L = k[ae], se = k[ae + 1], ve = _e(L), we = _e(se), pe = I(
          L,
          ve.x * 0.75 + we.x * 0.25,
          ve.y * 0.75 + we.y * 0.25,
          {
            t: Number(L.t || 0) * 0.75 + Number(se.t || 0) * 0.25,
            widthScale: f(L, "widthScale", 1) * 0.75 + f(se, "widthScale", 1) * 0.25,
            pressureLike: f(L, "pressureLike", 1) * 0.75 + f(se, "pressureLike", 1) * 0.25
          }
        ), be = I(
          L,
          ve.x * 0.25 + we.x * 0.75,
          ve.y * 0.25 + we.y * 0.75,
          {
            t: Number(L.t || 0) * 0.25 + Number(se.t || 0) * 0.75,
            widthScale: f(L, "widthScale", 1) * 0.25 + f(se, "widthScale", 1) * 0.75,
            pressureLike: f(L, "pressureLike", 1) * 0.25 + f(se, "pressureLike", 1) * 0.75
          }
        );
        A.push(pe, be);
      }
      const W = k[k.length - 1], Q = _e(W);
      return A.push(I(W, Q.x, Q.y)), A;
    }, Y = v(ie, y);
    if (Y.length < 3) return Y;
    const S = ee ? 2 : 1;
    let w = Y.slice();
    for (let k = 0; k < S; k += 1) w = R(w);
    return v(w, Math.max(y * 0.75, 55e-5));
  }
  function f(ie, E, ee = 1) {
    const ce = Number(ie == null ? void 0 : ie[E]);
    return Number.isFinite(ce) ? Math.max(0, ce) : ee;
  }
  function m(ie) {
    const E = Number(ie == null ? void 0 : ie.radiusValue);
    if (Number.isFinite(E) && E > 0) {
      const ee = String((ie == null ? void 0 : ie.radiusModel) || "").trim() || "erp_uv_norm";
      return ee === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((ie == null ? void 0 : ie.size) || 10) * 0.5 / 2048)
      } : {
        model: ee,
        value: E
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((ie == null ? void 0 : ie.size) || 10) * 0.5 / 2048)
    };
  }
  function _(ie, E, ee = {}) {
    const ce = mn({ label: "editor.raster-surface" });
    ce.width = Math.max(1, Math.round(ie)), ce.height = Math.max(1, Math.round(E));
    const ge = ce.getContext("2d", ee.readback ? { willReadFrequently: !0 } : void 0);
    return ge && (ge.clearRect(0, 0, ce.width, ce.height), ge.imageSmoothingEnabled = !0), { canvas: ce, ctx: ge };
  }
  function g() {
    const ie = Z();
    return `${String(t.paintStrokeRevision)}:${ie.width}x${ie.height}`;
  }
  function p() {
    const ie = Z();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${ie.width}x${ie.height}`;
  }
  function O() {
    const ie = i(), E = p();
    return ie ? `${E}:${ie}` : E;
  }
  function K() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function H() {
    t.paintCompositeRevision += 1;
  }
  function G() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function x() {
    var ie, E;
    t.paintEngineRevisionKey = null, (E = (ie = t.paintEngine) == null ? void 0 : ie.rebuildCommitted) == null || E.call(ie, n), t.paintEngineRevisionKey = g();
  }
  function X() {
    G(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function V({ rebuildPaintEngine: ie = !1 } = {}) {
    o(), K(), X(), ie && x();
  }
  function re() {
    o(), H(), X();
  }
  function U() {
    var ce;
    const ie = Z(), E = `${ie.width}x${ie.height}`;
    t.paintEngineDescriptorKey !== E && (t.paintEngine = Iu(ie), t.paintEngineDescriptorKey = E, t.paintEngineRevisionKey = "");
    const ee = g();
    t.paintEngineRevisionKey !== ee && (t.paintEngineRevisionKey = ee, (ce = t.paintEngine) == null || ce.rebuildCommitted(n));
  }
  function Z() {
    const ie = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: ie,
      height: Math.max(1, Math.round(ie * 0.5))
    };
  }
  function T() {
    return Z();
  }
  function ue(ie, E, ee, ce, ge = null) {
    const _e = m(ie), I = f(E, "widthScale", 1) * f(E, "pressureLike", 1);
    return _e.model === "erp_uv_norm" ? Math.max(0.5, _e.value * ee * I) : _e.model === "world_angle" ? ge ? Math.max(0.5, _e.value / Math.max(1e-6, Number(ge.hFOV_deg || 90) * yr) * ee * I) : Math.max(0.5, _e.value / (2 * Math.PI) * ee * I) : Math.max(0.5, Number((ie == null ? void 0 : ie.size) || 10) * 0.5 * I);
  }
  function B(ie, E, ee = {}) {
    const ce = String((E == null ? void 0 : E.layerKind) || "paint"), ge = String((E == null ? void 0 : E.toolKind) || "pen"), _e = ee.preview === !0, I = _e ? 0.78 : 1;
    if (ie.globalAlpha = ge === "marker" ? 0.7 * I : 1, ce === "mask") {
      ie.fillStyle = _e ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ge === "eraser") {
      ie.globalCompositeOperation = "destination-out", ie.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((E == null ? void 0 : E.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (E == null ? void 0 : E.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = _e ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    ie.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${y})`;
  }
  function he(ie, E, ee) {
    const ce = Math.max(0.5, Math.min(ee, Number((E == null ? void 0 : E.radiusPx) || 0.5)));
    !Number.isFinite(E == null ? void 0 : E.x) || !Number.isFinite(E == null ? void 0 : E.y) || !Number.isFinite(ce) || (ie.beginPath(), ie.arc(Number(E.x || 0), Number(E.y || 0), ce, 0, Math.PI * 2), ie.fill());
  }
  function ne(ie, E, ee, ce, ge = {}) {
    if (!ie || !Array.isArray(E) || !E.length) return;
    const _e = Math.max(ce.w, ce.h) * 0.25;
    ie.save(), B(ie, ee, ge);
    const I = (le) => he(ie, le, _e);
    if (E.length === 1) {
      I(E[0]), ie.restore();
      return;
    }
    for (let le = 0; le < E.length - 1; le += 1) {
      const y = E[le], v = E[le + 1];
      if (!y || !v) continue;
      const R = Number(y.x || 0), Y = Number(y.y || 0), S = Number(v.x || 0), w = Number(v.y || 0), D = Math.max(0.5, Math.min(_e, Number(y.radiusPx || 0.5))), k = Math.max(0.5, Math.min(_e, Number(v.radiusPx || 0.5)));
      if (!Number.isFinite(R) || !Number.isFinite(Y) || !Number.isFinite(S) || !Number.isFinite(w) || !Number.isFinite(D) || !Number.isFinite(k)) continue;
      const N = S - R, A = w - Y, W = Math.hypot(N, A);
      if (!Number.isFinite(W) || W < 1e-6) {
        I(y);
        continue;
      }
      if (W > Math.max(ce.w, ce.h) * 0.5) continue;
      const Q = Math.max(0.5, Math.min(D, k)), ae = Math.max(0.35, Math.min(Q * 0.4, 2.25)), L = Math.max(1, Math.ceil(W / ae));
      for (let se = 0; se <= L; se += 1) {
        const ve = se / L;
        I({
          x: jn(R, S, ve),
          y: jn(Y, w, ve),
          radiusPx: jn(D, k, ve)
        });
      }
    }
    I(E[E.length - 1]), ie.restore();
  }
  function me(ie, E, ee, ce) {
    ne(ie, E, ee, ce, { preview: !1 });
  }
  function de(ie, E, ee, ce, ge) {
    var le, y, v, R;
    if (!ie || !Array.isArray(E) || E.length < 3) return;
    const _e = "u", I = "v";
    if (ie.save(), String((ee == null ? void 0 : ee.layerKind) || "") === "mask")
      ie.fillStyle = "rgba(255,255,255,1)";
    else if (String((ee == null ? void 0 : ee.toolKind) || "") === "eraser")
      ie.globalCompositeOperation = "destination-out", ie.fillStyle = "rgba(0,0,0,1)";
    else {
      const Y = (ee == null ? void 0 : ee.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      ie.fillStyle = `rgba(${Math.round(Number(Y.r || 0) * 255)}, ${Math.round(Number(Y.g || 0) * 255)}, ${Math.round(Number(Y.b || 0) * 255)}, ${Number(Y.a ?? 1)})`;
    }
    ie.beginPath(), ie.moveTo(Number(((le = E[0]) == null ? void 0 : le[_e]) || 0) * ce.w, Number(((y = E[0]) == null ? void 0 : y[I]) || 0) * ce.h);
    for (let Y = 1; Y < E.length; Y += 1)
      ie.lineTo(Number(((v = E[Y]) == null ? void 0 : v[_e]) || 0) * ce.w, Number(((R = E[Y]) == null ? void 0 : R[I]) || 0) * ce.h);
    ie.closePath(), ie.fill(), ie.restore();
  }
  function P(ie) {
    const E = (ie == null ? void 0 : ie.geometry) || null;
    return E ? String(E.geometryKind || "") === "lasso_fill" ? Array.isArray(E.points) ? E.points : [] : Array.isArray(E.processedPoints) && E.processedPoints.length ? E.processedPoints : Array.isArray(E.rawPoints) && E.rawPoints.length ? E.rawPoints : Array.isArray(E.points) ? E.points : [] : [];
  }
  function z(ie, E) {
    const ee = P(ie);
    return !Array.isArray(ee) || !ee.length ? [] : ee.map((ce) => ({
      x: Number((ce == null ? void 0 : ce.u) || 0) * Number((E == null ? void 0 : E.w) || 1),
      y: Number((ce == null ? void 0 : ce.v) || 0) * Number((E == null ? void 0 : E.h) || 1),
      radiusPx: ue(ie, ce, Number((E == null ? void 0 : E.w) || 1), Number((E == null ? void 0 : E.h) || 1))
    }));
  }
  function oe(ie, E, ee = null) {
    var le, y, v, R;
    if (!(ie != null && ie.ctx) || !E) return !1;
    const ce = ee || { w: Number(((le = ie.canvas) == null ? void 0 : le.width) || 0), h: Number(((y = ie.canvas) == null ? void 0 : y.height) || 0) }, ge = String((E == null ? void 0 : E.toolKind) || "") === "eraser" ? {
      ...E,
      layerKind: "mask",
      toolKind: String(((v = E == null ? void 0 : E.geometry) == null ? void 0 : v.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : E;
    if (String(((R = E == null ? void 0 : E.geometry) == null ? void 0 : R.geometryKind) || "") === "lasso_fill")
      return de(ie.ctx, P(ge), ge, ce), !0;
    const I = z(ge, ce);
    return I.length ? (me(ie.ctx, I, ge, ce), !0) : !1;
  }
  function j(ie, E, ee, ce = 8) {
    const ge = new Uint8Array(E * ee), _e = [], I = new Int32Array(E * ee), le = new Int32Array(E * ee);
    for (let y = 0; y < ee; y += 1)
      for (let v = 0; v < E; v += 1) {
        const R = y * E + v;
        if (ge[R] || ie[R] <= ce) continue;
        let Y = 0, S = 0;
        I[S] = v, le[S] = y, S += 1, ge[R] = 1;
        const w = [];
        let D = v, k = y, N = v, A = y;
        for (; Y < S; ) {
          const W = I[Y], Q = le[Y];
          Y += 1, w.push({ x: W, y: Q }), W < D && (D = W), Q < k && (k = Q), W > N && (N = W), Q > A && (A = Q);
          const ae = [
            [(W - 1 + E) % E, Q],
            [(W + 1) % E, Q],
            [W, Q - 1],
            [W, Q + 1]
          ];
          for (const [L, se] of ae) {
            if (se < 0 || se >= ee) continue;
            const ve = se * E + L;
            ge[ve] || ie[ve] <= ce || (ge[ve] = 1, I[S] = L, le[S] = se, S += 1);
          }
        }
        _e.push({ pixels: w, minX: D, minY: k, maxX: N, maxY: A });
      }
    return _e;
  }
  function fe(ie, E) {
    const ee = [...new Set((Array.isArray(ie == null ? void 0 : ie.pixels) ? ie.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, v) => y - v);
    if (!ee.length) return null;
    if (ee.length === 1)
      return { startX: ee[0], widthPx: 1 };
    let ce = -1, ge = 0;
    for (let y = 0; y < ee.length; y += 1) {
      const v = ee[y], Y = (y === ee.length - 1 ? ee[0] + E : ee[y + 1]) - v - 1;
      Y > ce && (ce = Y, ge = y);
    }
    const _e = (ee[(ge + 1) % ee.length] + E) % E;
    let I = 1 / 0, le = -1 / 0;
    for (const y of ee) {
      const v = (y - _e + E) % E;
      I = Math.min(I, v), le = Math.max(le, v);
    }
    return {
      startX: _e,
      widthPx: Math.max(1, le - I + 1)
    };
  }
  function Pe(ie, E, ee = {}) {
    var v;
    const ce = Number((ie == null ? void 0 : ie.width) || 0), ge = Number((ie == null ? void 0 : ie.height) || 0), _e = (v = ie == null ? void 0 : ie.getContext) == null ? void 0 : v.call(ie, "2d");
    if (!_e || ce < 1 || ge < 1) return [];
    const I = _e.getImageData(0, 0, ce, ge), le = new Uint8Array(ce * ge);
    for (let R = 0; R < le.length; R += 1) le[R] = I.data[R * 4 + 3];
    return j(le, ce, ge, 8).map((R, Y) => {
      const S = fe(R, ce);
      if (!S) return null;
      const w = Number(S.widthPx || 0), D = R.maxY - R.minY + 1, k = Number(S.startX || 0), N = mn({ label: "editor.lasso-fill" });
      N.width = w, N.height = D;
      const A = N.getContext("2d");
      if (!A) return null;
      const W = A.createImageData(w, D);
      return R.pixels.forEach(({ x: Q, y: ae }) => {
        const L = (ae * ce + Q) * 4, se = (Number(Q || 0) - k + ce) % ce, ve = ((ae - R.minY) * w + se) * 4;
        W.data[ve + 0] = I.data[L + 0], W.data[ve + 1] = I.data[L + 1], W.data[ve + 2] = I.data[L + 2], W.data[ve + 3] = I.data[L + 3];
      }), A.putImageData(W, 0, 0), {
        id: Hi("raster"),
        type: "raster_frozen",
        layerKind: E === "mask" ? "mask" : "paint",
        z_index: Number((ee == null ? void 0 : ee.z_index) || 0) + Y * 1e-3,
        locked: (ee == null ? void 0 : ee.locked) === !0,
        bbox: {
          u0: 0,
          v0: R.minY / ge,
          u1: w / ce,
          v1: (R.maxY + 1) / ge
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: k / ce,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(ie) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = ie);
    },
    processFreehandPoints: u,
    createRasterSurface: _,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: p,
    getDisplayPaintRevisionKey: O,
    refreshPaintEngineRevisionCache: x,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: V,
    markPaintCompositeVisualsDirty: re,
    rebuildPaintEngineIfNeeded: U,
    getDesiredPaintTargetDescriptor: Z,
    getActivePaintTargetDescriptor: T,
    rasterizeStrokeToSurface: oe,
    createRasterFrozenObjectsFromCanvas: Pe
  };
}
function iN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, c, d, u, f, m;
  function _(U, Z = null) {
    var T;
    if (U && typeof U == "object" && !Array.isArray(U)) return U;
    if (Array.isArray(U) && U.length > 0) {
      const ue = U[0];
      if (ue && typeof ue == "object" && !Array.isArray(ue)) return ue;
    }
    if (Array.isArray(Z) && Z.length > 0) {
      const ue = (T = Z[0]) == null ? void 0 : T.parsed_state;
      if (ue && typeof ue == "object" && !Array.isArray(ue))
        return {
          yaw_deg: Number(ue.yaw_deg || 0),
          pitch_deg: Number(ue.pitch_deg || 0),
          hFOV_deg: Number(ue.hFOV_deg || 30),
          rot_deg: Number(ue.roll_deg || 0)
        };
    }
    return null;
  }
  function g(U, Z, T) {
    const ue = Math.max(1, Number(Z || 1)), B = Math.max(1, Number(T || 1)), he = Ee(Number(U || 30), 0.1, 179) * yr, ne = 2 * Math.atan(Math.tan(he * 0.5) * (B / ue));
    return Ee(ne * wi, 0.1, 179);
  }
  function p(U) {
    const Z = String(U || "").trim();
    if (!Z) return null;
    try {
      const T = JSON.parse(Z);
      if (!T || typeof T != "object" || String(T.kind || "") !== "pano_sticker_state") return null;
      const ue = T.version;
      let B = null;
      if (typeof ue == "number" && Number.isInteger(ue) ? B = ue : typeof ue == "string" && /^\d+$/.test(ue) && (B = Number.parseInt(ue, 10)), B !== 1) return null;
      const he = T.pose;
      if (!he || typeof he != "object") return null;
      const ne = Number(he.yaw_deg), me = Number(he.pitch_deg), de = Number(he.roll_deg), P = Number(he.hFOV_deg);
      if (![ne, me, de, P].every((fe) => Number.isFinite(fe))) return null;
      let z = ((ne + 180) % 360 + 360) % 360 - 180;
      Object.is(z, -0) && (z = 0);
      const oe = {
        yaw_deg: z,
        pitch_deg: Ee(me, -89.9, 89.9),
        roll_deg: de,
        hFOV_deg: Ee(P, 0.1, 179)
      }, j = Number(T.source_aspect);
      return Number.isFinite(j) && j > 0 && (oe.source_aspect = j), oe;
    } catch {
      return null;
    }
  }
  function O(U) {
    const Z = Number(U == null ? void 0 : U.yaw_deg), T = Number(U == null ? void 0 : U.pitch_deg), ue = Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg)), B = Number(U == null ? void 0 : U.hFOV_deg), he = ki(U);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(Z) ? Z : 0),
        pitch_deg: Ee(Number.isFinite(T) ? T : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Ee(Number.isFinite(B) ? B : 90, 0.1, 179)
      },
      source_aspect: he
    };
  }
  function K(U) {
    var me;
    if (!U || typeof U != "object") return O(null);
    const Z = Number(U == null ? void 0 : U.yaw_deg), T = Number(U == null ? void 0 : U.pitch_deg), ue = Number((U == null ? void 0 : U.roll_deg) ?? (U == null ? void 0 : U.rot_deg)), B = Number(U == null ? void 0 : U.hFOV_deg), he = Number(U == null ? void 0 : U.vFOV_deg);
    let ne = 1;
    if (Number.isFinite(B) && Number.isFinite(he)) {
      const de = Ee(B, 0.1, 179) * yr, P = Ee(he, 0.1, 179) * yr, z = Math.tan(P * 0.5);
      if (Math.abs(z) > 1e-6) {
        const oe = Math.tan(de * 0.5) / z;
        Number.isFinite(oe) && oe > 0 && (ne = oe);
      }
    }
    if (U != null && U.asset_id && ((me = o == null ? void 0 : o.assets) != null && me[U.asset_id])) {
      const de = o.assets[U.asset_id], P = Number((de == null ? void 0 : de.w) || 0), z = Number((de == null ? void 0 : de.h) || 0);
      P > 0 && z > 0 && (ne = P / z);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(Z) ? Z : 0),
        pitch_deg: Ee(Number.isFinite(T) ? T : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Ee(Number.isFinite(B) ? B : 30, 0.1, 179)
      },
      source_aspect: ne
    };
  }
  function H(U) {
    return t.linkedValue(n, U);
  }
  function G(U, Z, T) {
    const ue = U && typeof U == "object" ? {
      yaw_deg: Number(U.yaw_deg || 0),
      pitch_deg: Number(U.pitch_deg || 0),
      roll_deg: Number(U.rot_deg ?? U.roll_deg ?? 0),
      hFOV_deg: Number(U.hFOV_deg || 30)
    } : p(Z);
    if (ue) {
      const ne = Number((T == null ? void 0 : T.naturalWidth) || (T == null ? void 0 : T.width) || ue.source_aspect || 1), me = Number((T == null ? void 0 : T.naturalHeight) || (T == null ? void 0 : T.height) || 1);
      return {
        yaw_deg: Number(ue.yaw_deg || 0),
        pitch_deg: Number(ue.pitch_deg || 0),
        hFOV_deg: Number(ue.hFOV_deg || 30),
        vFOV_deg: g(ue.hFOV_deg, ne, me),
        rot_deg: Number(ue.roll_deg || 0)
      };
    }
    const B = Number((T == null ? void 0 : T.naturalWidth) || (T == null ? void 0 : T.width) || 1), he = Number((T == null ? void 0 : T.naturalHeight) || (T == null ? void 0 : T.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: g(30, B, he),
      rot_deg: 0
    };
  }
  function x() {
    const U = l(() => {
      Dr(n, "image-loaded");
    }), Z = en(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return $m(o, Vm(n, { pose: Z, image: U }));
  }
  function X() {
    var me;
    const U = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === "sticker_image") : -1, Z = U >= 0 ? ((me = n.getInputLink(U)) == null ? void 0 : me.id) ?? null : null, T = l(() => {
      Dr(n, "image-loaded");
    }), ue = _(c("pano_sticker_input_pose"), null), B = H("sticker_state"), he = t.externalStateHash(n, B), ne = Z == null ? null : G(ue, B, T);
    return Rm(o, {
      connected: Z != null,
      linkId: Z,
      stateHash: he,
      pose: ne,
      imageWidth: Number((T == null ? void 0 : T.naturalWidth) || (T == null ? void 0 : T.width) || 0),
      imageHeight: Number((T == null ? void 0 : T.naturalHeight) || (T == null ? void 0 : T.height) || 0)
    });
  }
  function V(U = "sync") {
    if (a !== "stickers" || i) return;
    const Z = n.__panoSceneStateV2 ? x() : X();
    if (Z.changed) {
      const T = o.stickers.find(d);
      o.stickers = Z.state.stickers, o.active = Z.state.active, T && r.selectedId === T.id && !o.stickers.some((ue) => ue.id === T.id) && (r.selectedId = null, r.selectedIds = []), s(), m(), f();
    }
    u();
  }
  function re() {
    const U = Array.isArray(o.stickers) ? o.stickers : [], Z = [];
    for (const T of U)
      d(T) && (T.visible = !1, Z.push(T));
    return Z;
  }
  return {
    connect(U) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: m
      } = U);
    },
    computeStickerVFov: g,
    buildCanonicalCutoutStickerState: O,
    buildCanonicalSelectedStickerState: K,
    reconcileExternalStickerFromInputs: V,
    collectExternalStickersForClearAll: re
  };
}
const oN = 250, aN = 600, sN = 180, lN = 2;
function cN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Vo(e, t, r) {
  return e + (t - e) * r;
}
function uN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Eu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / sN + i / lN);
  return Math.round(Vo(oN, aN, o));
}
function dN(e, t, r) {
  const n = cN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Vo(i, t.position[o], n)),
    yaw_deg: $t(e.yaw_deg + Eu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Vo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Vo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Vo(e.distance, t.distance, n)
  };
}
function fN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Eu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function pN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return fN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: uN(e, t, n), end: i };
}
function hN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: dN(e.from, e.to, r), done: !1 };
}
function Xs(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function mN(e, t, r) {
  const n = Xs(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function gN(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: c,
    stateV2: d,
    studio: u,
    viewController: f
  } = e;
  let m, _, g, p, O, K, H, G, x, X = null;
  function V(k, N = null) {
    const A = z();
    H(() => {
      i.viewTransition = pN(A, k, performance.now(), { scale: ge(), end: N });
    }), !i.viewTransition && N && re(N), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, G(), O({ localOnly: !0, reason: ft.VIEW });
  }
  function re(k) {
    de(Dc({ ...me(), moved: k.moved }, k.mode, oe())), s.backgroundDirty = !0;
  }
  function U() {
    i.viewTransition && (i.viewTransition = null, G());
  }
  function Z(k, N) {
    V({ ...z(), yaw_deg: k, pitch_deg: N });
  }
  function T() {
    return !u || fe() && !p();
  }
  function ue() {
    return i.mode === "pano" && B();
  }
  function B() {
    return d && xv({ sceneLinked: l && !!vl(a).scene, files: K(), stickers: c.stickers });
  }
  function he() {
    return i.spaceMode === "6dof" && ue();
  }
  function ne() {
    var k, N, A;
    return AS((A = (N = (k = t.ui) == null ? void 0 : k.settings) == null ? void 0 : N.getSettingValue) == null ? void 0 : A.call(N, rg));
  }
  function me() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function de(k) {
    i.spaceMode = k.mode, i.viewPosition = k.position, i.viewMoved = k.moved;
  }
  function P(k) {
    var A;
    const N = mN(i.spaceMode, i.viewTransition, k);
    if (N !== "keep") {
      if (N === "return") {
        V({ ...z(), position: oe(), distance: ((A = ee()) == null ? void 0 : A.radius) || er }, { mode: k, moved: !1 });
        return;
      }
      U(), de(Dc({ ...me(), position: z().position }, k, oe())), s.backgroundDirty = !0, G(), O({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function z() {
    var A;
    const k = i.viewMoved ? i.viewDistance : ((A = ee()) == null ? void 0 : A.radius) || er, N = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: k };
    return bv(i.spaceMode, N, oe());
  }
  function oe() {
    return fe() ? E().position : [0, 0, 0];
  }
  function j() {
    return r && c.camera !== null;
  }
  function fe() {
    return j() && (!u || c.camera.visible);
  }
  function Pe() {
    return c.painting_visible !== !1;
  }
  function ie(k) {
    return k.visible && so(k.clip, i.frame);
  }
  function E() {
    return ga(c.camera, i.frame);
  }
  function ee() {
    var N;
    const k = m();
    return ((N = k.space ?? k.content) == null ? void 0 : N.sphere) ?? null;
  }
  function ce(k) {
    i.viewPosition = k.position, i.viewYaw = k.yaw_deg, i.viewPitch = k.pitch_deg, i.viewDistance = k.distance, i.viewMoved = !0, s.backgroundDirty = !0, O({ localOnly: !0, reason: ft.VIEW });
  }
  function ge() {
    var k;
    return ((k = ee()) == null ? void 0 : k.radius) || er;
  }
  function _e() {
    var se;
    const k = m().space, N = _(), A = i.worldSelectedId || i.selectedId, W = N.stickers.findIndex((ve) => ve.id === A), Q = W < 0 ? null : {
      sticker: N.stickers[W],
      value: fl(N, i.frame).stickers[W],
      plane: k.stickers.find((ve) => ve.id === A) ?? null,
      item: ((se = k.sticker) == null ? void 0 : se.id) === A && k.sticker.url ? { kind: k.sticker.kind, box: o.sceneBox(k.sticker.url) } : null
    }, ae = g() ? S() : Av(ee(), Q);
    if (!ae) return;
    const L = z();
    i.viewDistance = L.distance, i.viewMoved = !0, V(im(L, ae, n.width, n.height));
  }
  function I(k) {
    return o.pickSurface(D(), k.x, k.y, n.width, n.height);
  }
  function le(k, N) {
    var A;
    return Lc(k, N, i.viewMoved ? null : (A = ee()) == null ? void 0 : A.center, ge());
  }
  function y() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function v(k, N) {
    const A = performance.now(), W = { x: k.x, y: k.y, time: A, key: o.contentRevision(), view: y() };
    if (!em(X, W)) {
      const ae = I(k);
      X = { ...W, cost: performance.now() - A, hit: ae };
    }
    const Q = z();
    ce(rm(Q, le(Q, X.hit), N, ge())), X.view = y(), X.wheelTime = A;
  }
  function R(k, N, A) {
    const W = z();
    i.interaction = k === "orbit" ? { kind: "space_orbit", last: N, pivot: le(W, I(N)) } : { kind: "space_pan", last: N, depth: Qh(W, ge()) }, x(N), n.setPointerCapture(A);
  }
  function Y(k) {
    return k * 0.2;
  }
  function S() {
    return { center: E().position, radius: Y(ge()) };
  }
  function w(k, N) {
    const { yaw_deg: A, pitch_deg: W } = lm(k.position, N);
    return { ...k, yaw_deg: A, pitch_deg: W };
  }
  function D() {
    return Xu(z(), n.width, n.height, ee());
  }
  return {
    connect(k) {
      ({
        editorViewInput: m,
        editorViewSceneState: _,
        isCameraSelected: g,
        isErpCamera: p,
        requestDraw: O,
        sceneFiles: K,
        startAnimation: H,
        syncFloatingViewButtonState: G,
        updateCursor: x
      } = k);
    },
    transitionView: V,
    applyViewTransitionEnd: re,
    cancelViewTransition: U,
    turnViewTo: Z,
    cameraPreviewShown: T,
    isSpaceView: ue,
    hasSpaceContent: B,
    isFreeSpaceView: he,
    viewControls: ne,
    spaceModeState: me,
    applySpaceMode: de,
    setSpaceMode: P,
    spaceViewState: z,
    spaceOrigin: oe,
    hasCamera: j,
    cameraShoots: fe,
    paintingShown: Pe,
    sceneStickerShown: ie,
    cutoutCamera: E,
    contentSphere: ee,
    setSpaceView: ce,
    spaceScale: ge,
    frameSpaceContent: _e,
    zoomSpaceAt: v,
    startSpaceDrag: R,
    currentSpaceCamera: D,
    cameraFrustumLength: Y,
    cameraSphere: S,
    lookingAt: w
  };
}
function yN(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce = { revision: -1, sceneState: null }, ge = null;
  function _e() {
    return ge || (ge = y()), ge;
  }
  function I() {
    ge = null;
  }
  function le() {
    return ce.sceneState;
  }
  function y() {
    const L = x(), se = f(), ve = { ...s.assets };
    for (const te of l ? [] : s.stickers) {
      const Se = String((te == null ? void 0 : te.asset_id) || "");
      Se && !ve[Se] && i.has(Se) && (ve[Se] = { type: "comfy_image", filename: Se });
    }
    const we = l ? s.stickers.map((te) => B(te) ? { ...te, source: { kind: "file", filename: fe(te) } } : te) : s.stickers;
    ce.revision !== a.stateRevision && (ce = { revision: a.stateRevision, sceneState: mr({ ...s, stickers: we, assets: ve, painting: null }) }), l && v(ce.sceneState);
    const pe = fl(ce.sceneState, r.frame), be = ne ? H() : null, ye = (te) => {
      if (l && !te.visible) return null;
      if (ne && Z(te)) return be;
      const Se = V(te);
      return Se ? { media: Se, revision: X(Se) } : null;
    }, h = hm(ce.sceneState, r.frame, s.stickers, { media: ye, paintLayers: se, evaluated: pe }), $ = L && (L === d || L === c) ? d.dataset.panoSrc : L, C = U(L) ? { media: L, revision: X(L), coverage: En(s.coverage), source: $ } : null, b = re(), F = vv(P(), b, z());
    F.mode !== r.spaceMode && g(), u(F);
    const M = b ? R(ce.sceneState, pe, ye) : null, q = ue() ? { ...M, ...Y(M) } : null;
    return { background: C, layers: h, space: q, content: M };
  }
  function v(L) {
    const se = new Map(s.stickers.map((ve) => [ve.id, ve.clip]));
    L.scene.clip = { ...s.scene.clip };
    for (const ve of L.stickers) {
      const we = se.get(ve.id);
      we && (ve.clip = { ...we });
    }
  }
  function R(L, se, ve) {
    const we = me(), pe = sm(we, se.scene), be = pe != null && pe.url ? n.sceneBox(pe.url) : null, ye = be && $c(pe.kind, be), h = j(), $ = kv(h, L, se), C = $ != null && $.url ? n.sceneBox($.url) : null, b = C ? [{ box: $c($.kind, C), value: $.value }] : [], F = Bv(L, r.frame, s.stickers, { media: ve, evaluated: se }), M = jc(Nv(se, ye, F, b));
    return {
      evaluated: se,
      sceneUrls: we ? we.urls.filter(Boolean) : [],
      scene: pe,
      stickerUrls: Mv(h, L),
      sticker: $,
      stickers: F,
      sphere: M
    };
  }
  function Y(L) {
    var ve;
    const se = ((ve = L.sphere) == null ? void 0 : ve.radius) || er;
    return {
      gizmo: w() ? N() : S(L.evaluated),
      grid: r.showGrid && !r.fullscreen ? zv(se) : null,
      lines: _() ? k(se) : []
    };
  }
  function S(L) {
    const se = de(), ve = L.stickers.find((we) => we.id === (se == null ? void 0 : se.id));
    return !ee(se) || !(ve != null && ve.active) ? null : { mode: r.gizmoMode, transform: Rc(ve) };
  }
  function w() {
    return _() && r.selectedId === yl;
  }
  let D = { revision: -1, span: -1, segments: [] };
  function k(L) {
    const se = ie();
    (D.revision !== a.stateRevision || D.span !== se) && (D = { revision: a.stateRevision, span: se, segments: Hv(Gv(s, se)) });
    const { segments: ve } = D, we = ve.length ? [{ segments: ve, color: vP }] : [];
    if (!T()) return we;
    const pe = w() ? Mg : bP;
    return [...we, { segments: cm(O(), m(L)), color: pe }];
  }
  function N() {
    return !T() || !w() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Rc({ ...O(), scale: 1 }) };
  }
  function A() {
    const { background: L, layers: se, space: ve } = _e(), we = t.width, pe = t.height, be = K({ x: 0, y: 0, w: we, h: pe });
    let ye = !1;
    return !L && !se.length && !ve ? (n.clear(460551), ye = n.ready) : (n.clear(), ye = !!n.render({
      rect: be,
      camera: ve ? Xu(oe(), we, pe, ve.sphere) : p(),
      background: L,
      layers: se,
      space: ve
    })), Pe(), (r.worldSelectedId || w() || he()) && E(), ye;
  }
  function W(L) {
    const { content: se } = _e();
    return !se || !L.position ? Bo(L) : om(Bo(L), L.position, G(), se.sphere);
  }
  function Q(L, se, ve, we = null) {
    const { background: pe, layers: be, content: ye } = _e();
    if (!pe && !be.length && !ye) return null;
    const h = ye && se.position ? ye : null;
    return n.render({ rect: L, camera: W(se), background: pe, layers: be, space: h, owner: ve, clearColor: we });
  }
  function ae(L) {
    return n.clear(460551), !!n.renderUnwrap({ rect: K(L), ..._e() });
  }
  return {
    connect(L) {
      ({
        applySpaceMode: u,
        buildEditorViewPaintLayers: f,
        cameraFrustumLength: m,
        cameraShoots: _,
        cancelViewTransition: g,
        currentViewCamera: p,
        cutoutCamera: O,
        deviceRect: K,
        followPortSticker: H,
        frameViewDistance: G,
        getConnectedErpImage: x,
        getMediaRevisionToken: X,
        getStickerImage: V,
        hasSpaceContent: re,
        isDecodedImageReady: U,
        isExternalSticker: Z,
        isFreeSpaceView: T,
        isSpaceView: ue,
        isUploadingSticker: B,
        isWorldMenuShown: he,
        portVideo: ne,
        sceneFiles: me,
        selectedWorldSticker: de,
        spaceModeState: P,
        spaceOrigin: z,
        spaceViewState: oe,
        stickerFiles: j,
        stickerImageKey: fe,
        syncFloatingViewButtonState: Pe,
        timelineSpanFrames: ie,
        updateSelectionMenu: E,
        worldStickerEditable: ee
      } = L);
    },
    editorViewInput: _e,
    endEditorViewFrame: I,
    editorViewSceneState: le,
    isCameraSelected: w,
    renderEditorView: A,
    shotViewCamera: W,
    drawEditorViewShot: Q,
    renderEditorViewUnwrap: ae
  };
}
const lu = "camera_preview";
function bN(e) {
  return e === lu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function vN(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function Eg(e, t = !1) {
  const r = Ee(ki(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function _N(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: a,
    shotEditor: s,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, m, _ = null, g = !1, p = !1;
  function O() {
    g && (g = !1, o.releaseSplats(lu));
  }
  function K() {
    _ = null, p = !1, O();
  }
  function H(U) {
    if (!n || !U) return !1;
    const Z = n.closest(".pano-camera-preview");
    if (!Z) return !1;
    const T = Math.round(Number(Z.clientWidth || n.clientWidth || 0)), ue = Math.round(Number(Z.clientHeight || n.clientHeight || 0));
    return Math.abs(T - Number(U.width || 0)) <= 1 && Math.abs(ue - Number(U.height || 0)) <= 1;
  }
  function G(U, Z) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !s || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, K();
      return;
    }
    const T = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !T || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = T ? "Preview unavailable" : "Add Frame to preview", K();
      return;
    }
    const ue = Eg(T, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ue.width, c.cameraPreview.height = ue.height, p) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, O();
      return;
    }
    const B = window.devicePixelRatio || 1, he = Math.max(1, ue.width * B), ne = Math.max(1, ue.height * B), me = Math.min(1, t.width / he, t.height / ne), de = { width: Math.max(1, Math.floor(he * me)), height: Math.max(1, Math.floor(ne * me)) }, P = !_ || _.width !== de.width || _.height !== de.height || vN(Z);
    if (U && P) {
      g = !0;
      const oe = u({ x: 0, y: t.height - de.height, w: de.width, h: de.height }, T, lu);
      _ = oe ? de : null, oe && re(oe);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const z = H(ue);
    c.cameraPreview.ready = !0, c.cameraPreview.label = z ? "" : "Loading preview", c.cameraPreview.settled = z && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function x() {
    _ = null, p = !1;
  }
  let X = 0, V = !1;
  function re(U) {
    const Z = ++X;
    createImageBitmap(U.canvas, U.x, U.y, U.width, U.height).then((T) => {
      var ue;
      if (Z !== X || !a.running) {
        T.close();
        return;
      }
      (ue = r.getContext("bitmaprenderer")) == null || ue.transferFromImageBitmap(T);
    }).catch((T) => {
      Z !== X || !a.running || (p = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !V && (V = !0, console.error("[PanoramaStickers] camera preview frame failed", T)));
    });
  }
  return {
    connect(U) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = U);
    },
    drawCutoutOutputPreview: G,
    forgetCameraPreviewFrame: x
  };
}
function SN(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce, ge, _e, I, le, y;
  function v(pe) {
    const be = r.width, ye = r.height, h = re();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, be, ye), ee(), pe && (s.backgroundDirty = !_e(h)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let C = 0; C <= 16; C += 1) {
        const b = h.x + h.w * C / 16;
        n.beginPath(), n.moveTo(b, h.y), n.lineTo(b, h.y + h.h), n.stroke();
      }
      for (let C = 0; C <= 8; C += 1) {
        const b = h.y + h.h * C / 8;
        n.beginPath(), n.moveTo(h.x, b), n.lineTo(h.x + h.w, b), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(h.x, h.y + h.h / 2), n.lineTo(h.x + h.w, h.y + h.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const $ = h.y + h.h * 0.57;
      n.fillText("Left", h.x + h.w * 0.25, $), n.fillText("Front", h.x + h.w * 0.5, $), n.fillText("Right", h.x + h.w * 0.75, $), n.fillText("Back", h.x + 38, $), n.fillText("Back", h.x + h.w - 38, $);
    }
  }
  function R(pe, be, ye = 1) {
    let h = !1;
    n.strokeStyle = be, n.lineWidth = ye, n.beginPath();
    for (const $ of pe) {
      const C = fe($);
      if (!C) {
        h = !1;
        continue;
      }
      h ? n.lineTo(C.x, C.y) : (n.moveTo(C.x, C.y), h = !0);
    }
    n.stroke();
  }
  function Y(pe) {
    const be = r.width, ye = r.height;
    if (n.clearRect(0, 0, be, ye), ee(), pe && (s.backgroundDirty = !ge()), i.showGrid && !i.fullscreen && g().space)
      S();
    else if (i.showGrid && !i.fullscreen) {
      for (let $ = -180; $ <= 180; $ += 15) {
        const C = [];
        for (let b = -89; b <= 89; b += 4) C.push(Nn($, b));
        R(C, "#3f3f46", $ % 90 === 0 ? 1.3 : 1);
      }
      for (let $ = -75; $ <= 75; $ += 15) {
        const C = [];
        for (let b = -180; b <= 180; b += 4) C.push(Nn(b, $));
        R(C, $ === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", $ === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: Nn(-90, 0) },
        { name: "Front", dir: Nn(0, 0) },
        { name: "Right", dir: Nn(90, 0) },
        { name: "Back", dir: Nn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach(($) => {
        const C = fe($.dir);
        C && n.fillText($.name, C.x, C.y + 24);
      });
    }
  }
  function S() {
    const pe = Xu(y(), r.width, r.height, f()), be = aa(pe, [0, 0, 0], r.width, r.height);
    be && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", be.x, be.y - 12));
  }
  function w(pe, be) {
    const ye = j(pe), h = Nn(Number(ye.yaw_deg || 0), Number(ye.pitch_deg || 0)), $ = i.mode === "unwrap" ? Pe(h) : null, C = $ ? $.x : null, b = i.mode === "pano" ? 28 : 20, F = [
      I(pe, 0, b, C),
      I(pe, 1, b, C),
      I(pe, 2, b, C),
      I(pe, 3, b, C)
    ];
    id(n, F, { selected: be });
  }
  function D(pe, be = []) {
    if (!(!pe || !Array.isArray(be) || be.length < 4)) {
      pe.beginPath(), pe.moveTo(be[0].x, be[0].y);
      for (let ye = 1; ye < 4; ye += 1) pe.lineTo(be[ye].x, be[ye].y);
      pe.closePath();
    }
  }
  function k(pe, be, ye) {
    const h = Array.isArray(pe == null ? void 0 : pe.corners) ? pe.corners : [];
    if (h.length < 4) return;
    const $ = Ee(Number((pe == null ? void 0 : pe.visibilityAlpha) ?? 1), 0, 1);
    if ($ <= 0.01) return;
    const C = n.globalAlpha;
    n.globalAlpha = C * $;
    const b = ye ? "rgba(255, 116, 116, 0.96)" : be ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", F = ye ? "rgba(255, 89, 89, 0.08)" : be ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", M = be ? 3.2 : 2.6;
    D(n, h), n.fillStyle = F, n.fill(), n.strokeStyle = b, n.lineWidth = M, n.stroke(), n.save(), n.strokeStyle = b, n.lineWidth = be ? 3.2 : 2.6, n.lineCap = "round";
    const q = Array.isArray(pe == null ? void 0 : pe.edgeMidpoints) && pe.edgeMidpoints.length >= 4 ? pe.edgeMidpoints : [
      { edge: "top", x: (h[0].x + h[1].x) * 0.5, y: (h[0].y + h[1].y) * 0.5 },
      { edge: "right", x: (h[1].x + h[2].x) * 0.5, y: (h[1].y + h[2].y) * 0.5 },
      { edge: "bottom", x: (h[2].x + h[3].x) * 0.5, y: (h[2].y + h[3].y) * 0.5 },
      { edge: "left", x: (h[3].x + h[0].x) * 0.5, y: (h[3].y + h[0].y) * 0.5 }
    ], te = { top: "bottom", right: "left", bottom: "top", left: "right" }, Se = be ? 12 : 9;
    q.forEach((xe) => {
      const Te = q.find((Ve) => (Ve == null ? void 0 : Ve.edge) === te[xe == null ? void 0 : xe.edge]) || {
        x: (h[0].x + h[1].x + h[2].x + h[3].x) * 0.25,
        y: (h[0].y + h[1].y + h[2].y + h[3].y) * 0.25
      }, ze = Te.x - xe.x, je = Te.y - xe.y, We = Math.hypot(ze, je) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + ze / We * Se, xe.y + je / We * Se), n.stroke();
    }), n.restore(), n.globalAlpha = C;
  }
  function N(pe, be, ye, h) {
    const $ = Ee(Number((be == null ? void 0 : be.visibilityAlpha) ?? 1), 0, 1);
    if ($ <= 0.01) return;
    if (de(pe)) {
      k(be, ye, h);
      return;
    }
    if (P(pe)) {
      const b = n.globalAlpha;
      n.globalAlpha = b * V(pe) * $, i.mode === "frame" ? (n.strokeStyle = ye ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = ye ? 2 : 1, D(n, be.corners), n.stroke()) : w(pe, ye), n.globalAlpha = b;
      return;
    }
    const C = n.globalAlpha;
    n.globalAlpha = C * $, n.fillStyle = ye ? "rgba(0, 112, 243, 0.24)" : h ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", D(n, be.corners), n.fill(), n.strokeStyle = ye ? "rgba(255, 255, 255, 1)" : h ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = ye ? 2.8 : 1.9, D(n, be.corners), n.stroke(), n.globalAlpha = C;
  }
  function A(pe, be, ye) {
    if (P(pe)) {
      tg(n, be, { accent: ye });
      return;
    }
    const h = !(de(pe) && Z());
    n.fillStyle = ye, h && be.corners.forEach(($) => {
      n.beginPath(), n.arc($.x, $.y, 6.5, 0, Math.PI * 2), n.fill();
    }), h && de(pe) && (n.strokeStyle = ye, n.lineCap = "round", n.lineWidth = 4, be.edgeMidpoints.forEach(($) => {
      var Se, xe, Ne, Te;
      const C = (((Se = $.b) == null ? void 0 : Se.x) ?? $.x) - (((xe = $.a) == null ? void 0 : xe.x) ?? $.x), b = (((Ne = $.b) == null ? void 0 : Ne.y) ?? $.y) - (((Te = $.a) == null ? void 0 : Te.y) ?? $.y), F = Math.hypot(C, b) || 1, M = C / F, q = b / F, te = 10;
      n.beginPath(), n.moveTo($.x - M * te, $.y - q * te), n.lineTo($.x + M * te, $.y + q * te), n.stroke();
    }), n.lineCap = "butt"), z(pe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(be.rotateStemBase.x, be.rotateStemBase.y), n.lineTo(be.rotateHandle.x, be.rotateHandle.y), n.stroke(), n.fillStyle = ye, n.beginPath(), n.arc(be.rotateHandle.x, be.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function W() {
    var C;
    const pe = i.mode === "frame" ? [] : X(), be = pe.length > 1, ye = l ? O() : G(), h = ye.map((b) => `${String((b == null ? void 0 : b.id) || "")}:${de(b) ? "frame" : Number((b == null ? void 0 : b.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== ye || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: ye,
      orderKey: h,
      sorted: [...ye]
    });
    const $ = i._sortedItemsCache.sorted;
    for (const b of $) {
      const F = i.mode !== "frame" && !be && he(b);
      if (i.mode === "frame" && !F) continue;
      const M = P(b), q = de(b), te = B(b);
      if (!M && !q || me(b) && !le(b)) continue;
      const Se = oe(b);
      if (d !== "stickers" && !Se.visible)
        continue;
      const xe = Ee(Number((Se == null ? void 0 : Se.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Ne = q && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Ne, N(b, Se, F, te), F && Se.visible) {
        const Te = te ? "#ff4d4f" : M && T(b) ? "#f59e0b" : "#0070f3", ze = n.globalAlpha;
        n.globalAlpha = ze * xe, A(b, Se, Te), n.globalAlpha = ze;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !p() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const b = i.cutoutPanoFrameVisual, F = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= F, k(b.geom, b.selected, b.locked), b.selected && A(
        b.item,
        b.geom,
        b.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (be) {
      const b = x(pe);
      if (b != null && b.visible) {
        const F = u(pe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(b.corners[0].x, b.corners[0].y);
        for (let M = 1; M < b.corners.length; M += 1) n.lineTo(b.corners[M].x, b.corners[M].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = F, b.corners.forEach((M) => {
          n.beginPath(), n.arc(M.x, M.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      pe.forEach((b) => {
        if (!z(b) && !ne(b)) return;
        const F = oe(b);
        if (!(F != null && F.visible)) return;
        const M = B(b) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(F.corners[0].x, F.corners[0].y);
        for (let q = 1; q < F.corners.length; q += 1) n.lineTo(F.corners[q].x, F.corners[q].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = M, F.corners.forEach((q) => {
          n.beginPath(), n.arc(q.x, q.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((C = i.interaction) == null ? void 0 : C.kind) === "marquee_select") {
      const b = ce(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Q(pe) {
    const be = p(), ye = K(be);
    if (!be || !ye)
      return n.clearRect(0, 0, r.width, r.height), pe && o.clear(657930), !1;
    const h = { x: ye.x, y: ye.y, w: ye.w, h: ye.h }, { rect: $, shot: C } = fm(be, ye, { width: r.width, height: r.height }), b = ae(h);
    if (n.clearRect(0, 0, r.width, r.height), pe) {
      o.clear(657930);
      const F = m($), M = !!_(F, C, void 0, 657930);
      M || o.clear(1118481, F), s.backgroundDirty = !M;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, b), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Mg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, b - 1)), n.stroke(), n.restore(), !0;
  }
  function ae(pe) {
    const be = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * be, Number((pe == null ? void 0 : pe.w) || 0) * 0.5, Number((pe == null ? void 0 : pe.h) || 0) * 0.5);
  }
  function L() {
    var M, q;
    if (((M = i.interaction) == null ? void 0 : M.kind) !== "paint_lasso_fill") return;
    const pe = i.interaction.stroke, be = (q = pe == null ? void 0 : pe.geometry) == null ? void 0 : q.points;
    let ye;
    if (i.mode === "frame") {
      const te = p(), Se = H(te);
      ye = ie(be, te, Se);
    } else
      ye = E(be);
    if (!Array.isArray(ye) || ye.length < 3) return;
    const h = String((pe == null ? void 0 : pe.layerKind) || "") === "mask", $ = (pe == null ? void 0 : pe.color) || { r: 1, g: 0.25, b: 0.25 }, C = Math.round(Number($.r || 0) * 255), b = Math.round(Number($.g || 0) * 255), F = Math.round(Number($.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(ye[0].x || 0), Number(ye[0].y || 0));
    for (let te = 1; te < ye.length; te++) n.lineTo(Number(ye[te].x || 0), Number(ye[te].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${C},${b},${F},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function se() {
    const pe = i.frameRollOverlayVisual, be = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(pe != null && pe.shot) || be <= 1e-4) return;
    const ye = H(pe.shot);
    if (!ye) return;
    const h = { x: ye.x + ye.w * 0.5, y: ye.y + ye.h * 0.5 }, $ = Number(pe.shot.roll_deg ?? pe.shot.rot_deg ?? 0) * yr, C = Math.hypot(ye.w, ye.h) * 0.55, b = Math.cos($) * C, F = Math.sin($) * C;
    n.save(), n.globalAlpha *= be, n.beginPath(), n.rect(ye.x, ye.y, ye.w, ye.h), n.clip(), n.translate(h.x, h.y), n.rotate($);
    const M = Math.max(12, Math.min(ye.w, ye.h) / 6);
    n.beginPath();
    for (let q = -C; q <= C; q += M)
      n.moveTo(q, -C), n.lineTo(q, C);
    for (let q = -C; q <= C; q += M)
      n.moveTo(-C, q), n.lineTo(C, q);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - b, h.y - F), n.lineTo(h.x + b, h.y + F), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function ve() {
    return !l || !p() || t && ue() || c && !U() ? 0 : wP;
  }
  function we() {
    const pe = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (pe <= 1e-4 || !l || i.mode !== "pano") return;
    const be = p(), ye = be ? oe(be) : null, h = Array.isArray(ye == null ? void 0 : ye.corners) && ye.corners.length >= 4 ? ye.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    ye != null && ye.visible && h && (i.cutoutPanoDimCorners = h), be && (ye != null && ye.visible) && h && (i.cutoutPanoFrameVisual = {
      item: be,
      geom: ye,
      selected: he(be),
      locked: B(be)
    });
    const $ = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, C = ye != null && ye.visible ? h : $ ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${pe})`, n.beginPath(), n.rect(0, 0, r.width, r.height), C.length >= 4) {
      n.moveTo(C[0].x, C[0].y);
      for (let b = 1; b < 4; b += 1) n.lineTo(C[b].x, C[b].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(pe) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: _,
        editorViewInput: g,
        getActiveCutoutShot: p,
        getCutoutSelectableItemsForDisplay: O,
        getFrameViewLayout: K,
        getFrameViewRect: H,
        getList: G,
        getMultiSelectionGeom: x,
        getSelectedItems: X,
        getStickerDisplayAlpha: V,
        getUnwrapRect: re,
        isCameraSelected: U,
        isErpCamera: Z,
        isExternalSticker: T,
        isFreeSpaceView: ue,
        isItemLocked: B,
        isItemSelected: he,
        isRasterObjectItem: ne,
        isSceneSticker: me,
        isShotItem: de,
        isStickerItem: P,
        isStrokeGroupItem: z,
        objectGeom: oe,
        poseOf: j,
        projectDir: fe,
        projectDirUnwrap: Pe,
        projectErpLassoPointsToFrameRect: ie,
        projectLassoPointsToCurrentView: E,
        rebuildPaintEngineIfNeeded: ee,
        rectFromPoints: ce,
        renderEditorView: ge,
        renderEditorViewUnwrap: _e,
        sampleStickerEdge: I,
        sceneStickerShown: le,
        spaceViewState: y
      } = pe);
    },
    drawGridUnwrap: v,
    drawGridPano: Y,
    drawObjects: W,
    drawFrameViewBackground: Q,
    drawLassoOutlineOverlay: L,
    drawFrameRollOverlay: se,
    getCutoutPanoDimTarget: ve,
    drawCutoutPanoPassepartout: we
  };
}
function wN(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: m,
    type: _,
    uiState: g,
    viewController: p
  } = e;
  let O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E = () => {
  };
  function ee(ae = /* @__PURE__ */ new Set()) {
    Z();
    const L = l.backgroundDirty;
    d && (P(), K(L, ae)), i.mode === "frame" ? (l.frameSafeRect = me(), x(L)) : i.mode === "unwrap" ? V(L) : X(L), H(), U(), j(), re(), G(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && ie(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const se = he();
    g.stageStatus = se.status, g.stageStatusDetail = se.detail, se.status === Xn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", se.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function ce(ae = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const L = String((ae == null ? void 0 : ae.kind) || "");
    return L === "move" || L === "scale" || L === "scale_x" || L === "scale_y" || L === "rotate" ? !0 : L === "move_multi" ? Array.isArray(ae == null ? void 0 : ae.stickerSnapshots) && ae.stickerSnapshots.length > 0 : !1;
  }
  function ge() {
    return !!i.interaction || !!m.drag;
  }
  function _e() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = B();
  }
  function I(ae = {}) {
    var h, $, C, b, F, M, q, te;
    const L = ae.reason ?? ft.STATE, se = !!ae.localOnly, ve = ae.externalSync === !0, we = String(ae.cause || ""), pe = String(((h = i.interaction) == null ? void 0 : h.kind) || "");
    (!se || pe === "view" || pe === "pan_frame" || ce() || !!i.viewTransition || we === "mode" || we === "frame_view" || we === "cutout_frame") && (l.backgroundDirty = !0), se && ne() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!se || we === "selection" || we === "mode" || we === "cutout_frame") && (fe(), Pe()), ge() ? l.nodePreviewPending = !0 : _e(), ve && ((C = ($ = a.__panoDomPreview) == null ? void 0 : $.requestDraw) == null || C.call($), (b = a.setDirtyCanvas) == null || b.call(a, !0, !1)), ve && !se && ((M = (F = a.graph) == null ? void 0 : F.setDirtyCanvas) == null || M.call(F, !0, !0), (te = (q = t == null ? void 0 : t.canvas) == null ? void 0 : q.setDirty) == null || te.call(q, !0, !0)), c.requestDraw(L);
  }
  function le() {
    const ae = n.getBoundingClientRect(), L = Math.max(2, Math.round(ae.width)), se = Math.max(2, Math.round(ae.height)), ve = window.devicePixelRatio || 1, we = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== L || n.height !== se) && (n.width = L, n.height = se);
    const pe = Wv(ae.width || L, ae.height || se, ve, window.innerWidth || ae.width, window.innerHeight || ae.height);
    return o.resize(pe.width, pe.height), [n.width, n.height, r.width, r.height].join("x") === we ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && y(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function y(ae) {
    ae(), c.wake();
  }
  function v() {
    return !!i.viewTransition || !!p.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ge();
  }
  function R(ae = performance.now(), L = /* @__PURE__ */ new Set()) {
    var be;
    l.nodePreviewPending && !ge() && _e(), L.forEach((ye) => l.reasons.add(ye)), L.size && (l.dirty = !0), [...L].some((ye) => ye !== ft.OVERLAY) && (l.backgroundDirty = !0), z(), l.lastTickTs > 0 ? Math.max(1e-3, (ae - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ae;
    const se = i.mode === "frame" && ((be = i.interaction) == null ? void 0 : be.kind) === "roll_frame" ? i.interaction : null;
    se != null && se.shot && (i.frameRollOverlayVisual = { shot: se.shot });
    const ve = se ? 1 : 0;
    if (Math.abs(ve - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ve, i.frameRollOverlayStartTs = ae), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ve) > 1e-6) {
      const ye = Ee(
        (ae - Number(i.frameRollOverlayStartTs || ae)) / xP,
        0,
        1
      );
      i.frameRollOverlayAlpha = jn(
        Number(i.frameRollOverlayFrom || 0),
        ve,
        lc(ye)
      ), ye >= 1 && (i.frameRollOverlayAlpha = ve, ve === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const we = ue();
    if (Math.abs(we - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = we, i.cutoutPanoDimStartTs = ae), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - we) > 1e-6) {
      const ye = Ee(
        (ae - Number(i.cutoutPanoDimStartTs || ae)) / qf,
        0,
        1
      );
      i.cutoutPanoDimAlpha = jn(
        Number(i.cutoutPanoDimFrom || 0),
        we,
        lc(ye)
      ), ye >= 1 && (i.cutoutPanoDimAlpha = we), ye >= 1 && we === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const pe = d && T() ? 1 : 0;
    if (Math.abs(pe - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = pe, i.cutoutPanoFrameStartTs = ae), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - pe) > 1e-6) {
      const ye = Ee(
        (ae - Number(i.cutoutPanoFrameStartTs || ae)) / qf,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = jn(
        Number(i.cutoutPanoFrameFrom || 0),
        pe,
        lc(ye)
      ), ye >= 1 && (i.cutoutPanoFrameAlpha = pe, pe === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const ye = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), h = Ee((ae - Number(i.outputPreviewAnimStartTs || 0)) / ye, 0, 1), C = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? NP(h) : AP(h);
      i.outputPreviewAnim = jn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, C), l.dirty = !0, h >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: ye, done: h } = hN(i.viewTransition, ae);
      if (i.viewPosition = ye.position, i.viewYaw = ye.yaw_deg, i.viewPitch = ye.pitch_deg, i.viewFov = ye.hFOV_deg, i.viewDistance = ye.distance, h) {
        const { end: $ } = i.viewTransition;
        i.viewTransition = null, $ && O($), oe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, p.stepInertia(ae) && (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const ye = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ee(ye);
    }
  }
  function Y(ae) {
    try {
      ae();
    } catch (L) {
      const se = String((L == null ? void 0 : L.stack) || (L == null ? void 0 : L.message) || L || "unknown editor frame error");
      l.tickErrorSignature !== se && (l.tickErrorSignature = se, console.error("[PanoramaStickers] editor frame failed", L)), g.stageStatus = Hn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function S(ae = performance.now(), L = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const se = pb();
    Y(() => R(ae, L)), hb(se);
  }
  function w() {
    !l.running || !le() || Y(() => {
      l.dirty = !1, ee(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const D = new ResizeObserver(w);
  let k = null;
  function N() {
    k == null || k.removeEventListener("change", A), k = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), k.addEventListener("change", A);
  }
  function A() {
    N(), w();
  }
  function W() {
    E = fb("editor", () => {
      var ae;
      return {
        type: _,
        readOnly: s,
        mode: i.mode,
        interaction: ((ae = i.interaction) == null ? void 0 : ae.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!de.playing
      };
    });
  }
  function Q() {
    E(), l.running = !1, c.stop(), D.disconnect(), k.removeEventListener("change", A);
  }
  return {
    connect(ae) {
      ({
        applyViewTransitionEnd: O,
        drawCutoutOutputPreview: K,
        drawCutoutPanoPassepartout: H,
        drawFrameRollOverlay: G,
        drawFrameViewBackground: x,
        drawGridPano: X,
        drawGridUnwrap: V,
        drawLassoOutlineOverlay: re,
        drawObjects: U,
        endEditorViewFrame: Z,
        getActiveCutoutShot: T,
        getCutoutPanoDimTarget: ue,
        getSharedLivePaintSurface: B,
        getStageImageStatus: he,
        isPaintCompositeInteraction: ne,
        measureFrameSafeRect: me,
        playback: de,
        rebuildPaintEngineIfNeeded: P,
        syncCutoutShot: z,
        syncFloatingViewButtonState: oe,
        syncFrameRollKnob: j,
        syncLookAtFrameButtonState: fe,
        syncViewToggleState: Pe,
        updateSelectionMenu: ie
      } = ae);
    },
    requestDraw: I,
    syncCanvasSize: le,
    startAnimation: y,
    editorAnimating: v,
    tick: S,
    stageResizeObserver: D,
    watchPixelRatio: N,
    sampleEditorDiagnostics: W,
    stopRenderLoop: Q
  };
}
function zi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function xN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function kN({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: l
}) {
  var H, G;
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
    historyEntries: Array.from({ length: 8 }, (x, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((H = t.find((x) => i(e.paintColor, x.color))) == null ? void 0 : H.id) || "", f = !u, m = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((G = e.customPaintColor) == null ? void 0 : G.a) ?? 1))) * 100), g = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), p = e.brushSizes[g] ?? 10, O = l(), K = Array.from({ length: 8 }, (x, X) => e.customPaintHistory[X] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(m.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: K.map((x, X) => ({
      index: X,
      color: x ? { cssColor: n(x, 1) } : null
    })),
    sizeValue: p,
    sizeText: String(p),
    sizeFill: `${Math.max(0, Math.min(100, (p - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function MN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const PN = {
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
function NN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = PN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function fc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function CN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? He.eye : He.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function AN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function IN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const ro = "erp", EN = ["1:1", "4:3", "3:2", "16:9"];
function Og(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...EN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: ro, label: Number(r) === 180 ? "180°" : "360°", active: e === ro }] : []
  ];
}
function ON({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
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
    params: a,
    rows: NN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function FN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: m,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: _ = !1,
  cameraDeletable: g = !1,
  erpChoice: p = !1,
  coverage: O = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let K = [];
  if (r.length > 1)
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!s }
    ], d(t) || (K.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: m.duplicate }), K.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: m.replace_image })), d(t)) {
      const H = f(), G = u(t);
      K.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: H ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !H
      }), K.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? m.eye : m.eye_dashed
      });
    }
    K.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? m.lock_open : m.lock_closed }), d(t) || K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s });
  } else
    K = [
      {
        key: "aspect",
        kind: "aspect",
        icon: m.aspect,
        open: !!c,
        choices: Og(l, { erp: p, coverage: O })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === ro }
    ], _ ? g && K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : K.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s }
    );
  return Fg(i.corners, K);
}
const Qf = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function TN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? Qf.filter((s) => s.cameraTip) : Qf;
  return Fg([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: c, cameraTip: d }) => ({ key: s, label: l, tip: n ? d : c, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: He.delete }] : []
  ]);
}
function DN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: c, maxY: d } = e || {};
  if (![s, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), m = d + 18, _ = c - 18 - r;
  let g;
  return m <= f ? g = Math.max(m, 14) : _ >= 14 ? g = Math.min(_, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
}
function Fg(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const Tg = "painting";
function LN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const RN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function VN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: c = !1, stickers: d = !0, scene: u = !1, sceneLocked: f = !1 }) {
  const m = (K, H, G, x, X, V, { keyable: re = !0, hideable: U = !0 } = {}) => {
    const Z = (T) => (r == null ? void 0 : r.owner) === K && r.lane === T ? r.frames.map((ue) => ue + V) : [];
    return {
      id: K,
      label: G,
      icon: x,
      clip: X,
      selected: K === n,
      hideable: U,
      visible: H.visible,
      keyable: re,
      open: re && o.has(K),
      keys: P1(H).map((T) => ({ frame: T.frame + V, full: T.full })),
      selectedFrames: Z(null),
      lanes: (re ? co(H) : []).map((T) => ({
        key: `${K}:${T}`,
        lane: T,
        label: RN[T],
        frames: H[T].keyframes.map((ue) => ue.frame + V),
        selectedFrames: Z(T)
      }))
    };
  }, _ = d ? e.stickers : [], g = _.filter((K) => K.placement === "sky").sort((K, H) => H.z_index - K.z_index), p = _.filter((K) => K.placement === "world"), O = ({ start: K, in: H, duration: G }) => ({ clip: { start: K, end: G === null ? null : K + G }, offset: K - H });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || f,
    lengthLocked: f,
    lockTip: f ? "Set by the scene" : "Set by the video input",
    length: f ? t : e.timeline.length,
    rows: [
      ...l ? [m("camera", e.camera, "Camera", He.camera, null, 0, { hideable: c })] : [],
      ...[...g, ...p].map((K) => {
        const { clip: H, offset: G } = O(K.clip);
        return m(K.id, K, Tc(K), He.image, H, G);
      }),
      ...d && (LN(e.painting) || !e.painting_visible) ? [{
        id: Tg,
        label: "Paint",
        icon: He.paintbrush_vertical_tool,
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
      ...d && (u || Ls(e.scene)) ? [(() => {
        const { clip: K, offset: H } = O(e.scene.clip);
        return m("scene", e.scene, "Scene", He.box, K, H, { keyable: !1 });
      })()] : []
    ]
  };
}
function $N(e, t, r, n) {
  const i = I1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function zN(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: m,
    studio: _,
    type: g,
    uiState: p
  } = e;
  let O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce, ge, _e, I, le, y, v = 0;
  function R() {
    p.toolButtons.forEach((L) => {
      const se = L.attr === "data-tool-mode", ve = L.attr === "data-paint-tool", we = L.attr === "data-mask-tool";
      L.active = se ? L.value === r.primaryTool : ve ? L.key === r.paintTool : we ? L.key === r.maskTool : !1, L.pressed = L.active ? "true" : L.pressed == null ? null : "false";
    });
  }
  function Y() {
    if (_ && zi(p.toolButtons, "value", "add-camera", { disabled: B() }), g !== "cutout") return;
    const L = H();
    zi(p.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: L ? "Look At Frame" : "Add Frame",
      tip: L ? "Look at frame" : "Add frame",
      icon: L ? He.camera : He.plus_circle
    });
  }
  function S() {
    const L = CN({
      spaceView: fe(),
      spaceMode: Xs(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    p.space && Object.assign(p.space, L.space);
    for (const [se, ve] of Object.entries(L.buttons)) zi(p.floatingButtons, "action", se, ve);
  }
  function w() {
    var ve;
    const L = AN({ hasShot: !!H(), erp: me(), hidden: B() && !K(), studio: _ });
    r.mode === "frame" && L.disabled && (_ ? ie(H()) : r.mode = "pano"), r.outputPreviewRect = null, p.viewButtons.forEach((we) => {
      const pe = we.key === r.mode;
      we.pressed = pe ? "true" : "false", we.visible = !(we.key === "frame" && !f), we.key === "frame" ? Object.assign(we, L) : we.disabled = !1;
    });
    const se = f && r.mode === "frame" ? H() : null;
    p.frameRail.visible = !!se, p.frameRail.disabled = c || (se == null ? void 0 : se.locked) === !0, p.frameRollKnob.visible = !!se && !c && se.locked !== !0, p.frameRollKnob.disabled = c || (se == null ? void 0 : se.locked) === !0, p.frameRollKnob.rollDeg = Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg) ?? 0), p.frameRollKnob.displayValue = Ji(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((ve = r.interaction) == null ? void 0 : ve.kind) === "roll_frame", p.frameRollKnob.armed = !!se && r.altModifier === !0, p.frameRail.rollKnob = p.frameRollKnob, p.frameRail.aspectLabel = se ? Or(se) : "", p.frameRail.aspectChoices = Og(se ? String(Or(se)) : null, { erp: _, coverage: m.coverage }), se || (p.frameRail.aspectOpen = !1), p.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!H(), f && p.cameraPreview && (p.cameraPreview.visible = r.mode !== "frame" && O(), p.cameraPreview.expanded = !!r.outputPreviewExpanded, p.cameraPreview.settled = p.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), S(), z() ? le(r.pointerPos) : ce(r.mode === "pano" ? "grab" : "default");
  }
  function D() {
    var se;
    const L = r.mode === "frame" ? H() : null;
    p.frameRollKnob.visible = !!L && !c && L.locked !== !0, p.frameRollKnob.rollDeg = Number((L == null ? void 0 : L.roll_deg) ?? (L == null ? void 0 : L.rot_deg) ?? 0), p.frameRollKnob.displayValue = Ji(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((se = r.interaction) == null ? void 0 : se.kind) === "roll_frame", p.frameRollKnob.armed = !!L && r.altModifier === !0;
  }
  function k() {
    R();
    const L = kN({
      editor: r,
      swatches: wl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: ur,
      colorsApproximatelyEqual: qs,
      rgb01ToHsv: su,
      hsv01ToRgb: au,
      getBrushPresetIdForTool: G,
      isActiveLassoTool: ne
    });
    if (Object.assign(p.paintDock, L), I(), !L.visible) {
      i && (i.hidden = !0);
      return;
    }
    v && (clearTimeout(v), v = 0), o && (!L.colorEnabled && i && !i.hidden && (v = window.setTimeout(() => {
      i.hidden = !0, p.paintDock.colorPopOpen = !1, v = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", L.pickerHueColor), i.style.setProperty("--picker-sat", L.pickerSat), i.style.setProperty("--picker-val", L.pickerVal), i.style.setProperty("--picker-hue", L.pickerHue)), a && (a.style.left = L.pickerSvLeft, a.style.top = L.pickerSvTop), s && (s.style.left = L.pickerHueLeft));
  }
  function N() {
    const L = E(f && r.mode === "frame" ? H() : re());
    L && (r.panelLastValues = {
      yaw_deg: Number(L.yaw_deg || 0),
      pitch_deg: Number(L.pitch_deg || 0),
      hFOV_deg: Number(L.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(L.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(L.rot_deg || 0),
      roll_deg: Number(L.roll_deg || 0),
      aspect_id: Or(L)
    }, A());
  }
  function A() {
    ge(), _e(), Q();
  }
  function W() {
    const L = f && r.mode === "frame" ? H() : null;
    return [...U(), ee(), L].some((se) => oe(se) ? Ls(se) : j(se) && B() && Ls(m.camera));
  }
  function Q() {
    if (n) return;
    m.ui_settings = m.ui_settings || {};
    const L = xN(m.ui_settings);
    if (l) {
      p.sidePanel = MN({
        coverage: m.coverage,
        uiSettings: L,
        normalizeCoverageValue: En
      });
      return;
    }
    const se = re(), ve = f && r.mode === "frame" ? H() : null, we = ve || se, pe = ve ? [ve] : U(), be = ve ? "shot" : Z();
    if (pe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), we && be !== "stroke") {
      const xe = E(we);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (be === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (be === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Or(xe)
      }, oe(we) && (r.panelLastValues.opacity = Si(we, r.frame).opacity * 100);
    }
    const ye = r.panelLastValues || (g === "stickers" || be === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = be === "stroke" ? null : we, $ = ee(), C = t && (be === "shot" || be === "frame") && he(), b = $ ? av($, r.frame) : C ? { ...h, ...rv(m.camera, r.frame), vFOV_deg: h.vFOV_deg } : oe(h) ? r.panelLastValues : h || ye, F = $ ? y($) : !!h && !P(h);
    r.panelWasEnabled = F, Y();
    let M = null;
    if (ve) {
      const xe = ue({ item: ve, kind: "shot", label: "Frame" });
      M = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(ve.id || ""),
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
        const ze = H();
        ze && xe.push({ id: ze.id, label: "Camera", icon: T("frame"), item: ze, kind: "frame" }), V().forEach((je, We) => {
          var Re, Ae;
          if (!je || oe(je) && !je.visible) return;
          const Ve = u ? Tc(je) : de(je) ? String(je.id || pd) : String(((Ae = (Re = m.assets) == null ? void 0 : Re[je.asset_id]) == null ? void 0 : Ae.name) || je.asset_id || je.id), J = `${We + 1}. ${Ve}${de(je) && Pe(je) ? " (hidden)" : ""}`, Ce = ue({ item: je, label: J, kind: "image" });
          xe.push({ id: je.id, label: Ce.label, icon: Ce.icon, item: je, kind: "image" });
        });
      } else
        x().forEach((ze) => {
          if (!(ze != null && ze.item)) return;
          const je = ue(ze);
          xe.push({ id: ze.item.id, label: je.label, icon: je.icon, item: ze.item, kind: ze.kind });
        });
      const Ne = (h == null ? void 0 : h.id) || "", Te = $ ? { label: Tc($), icon: He.globe } : xe.find((ze) => ze.id === Ne) || xe[0];
      M = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: Te.label,
        currentIcon: Te.icon || null,
        items: xe.map((ze) => ({
          id: ze.id,
          label: ze.label,
          icon: ze.icon || null,
          active: ze.id === Ne
        }))
      };
    }
    const q = [], te = (xe, Ne, Te, ze, je) => {
      const We = Ee(Number(b[xe] || 0), Te, ze);
      q.push({
        key: xe,
        label: Ne,
        min: Te,
        max: ze,
        step: je,
        value: We,
        displayValue: Ji(We),
        fillPct: Ee((We - Te) / Math.max(1e-6, ze - Te) * 100, 0, 100),
        enabled: F && !c
      });
    }, Se = [];
    if ($) {
      for (const [xe, Ne] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Te = fc(b[xe]);
        te(xe, Ne, -Te, Te, 0.01);
      }
      te("yaw_deg", "Yaw", -180, 180, 0.1), te("pitch_deg", "Pitch", -90, 90, 0.1), te("roll_deg", "Roll", -180, 180, 0.1), te("scale", "Scale", kg, fc(b.scale), 0.01), te("opacity", "Opacity", 0, 100, 1);
    } else if (pe.length > 1)
      Se.push(`Selected objects: ${pe.length}`), Se.push("Multi-selection supports z-order and delete.");
    else {
      const xe = be === "shot" || be === "frame";
      if (C)
        for (const [Ne, Te] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ze = fc(b[Ne]);
          te(Ne, Te, -ze, ze, 0.01);
        }
      te("yaw_deg", "Yaw", -180, 180, 0.1), te("pitch_deg", "Pitch", -90, 90, 0.1), te(be === "image" || g === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), te("hFOV_deg", "H FOV", 1, 179, 0.1), te("vFOV_deg", "V FOV", 1, 179, 0.1), xe && q.forEach((Ne) => {
        Ne.enabled = Ne.enabled && IN(Ne.key, { erp: me() });
      }), u && !xe && te("opacity", "Opacity", 0, 100, 1);
    }
    p.sidePanel = ON({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: M,
      enabled: F,
      selectedKind: $ ? "world" : be,
      selectedItems: pe,
      params: q,
      notes: Se,
      uiSettings: L,
      normalizeCoverageValue: En
    });
  }
  function ae() {
    const { canUndo: L, canRedo: se } = X();
    zi(p.toolButtons, "value", "undo", { disabled: !L }), zi(p.toolButtons, "value", "redo", { disabled: !se });
  }
  return {
    connect(L) {
      ({
        cameraPreviewShown: O,
        cameraShoots: K,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: G,
        getCutoutInspectorItems: x,
        getHistoryCapabilities: X,
        getList: V,
        getSelected: re,
        getSelectedItems: U,
        getSelectedKind: Z,
        getSelectionItemIcon: T,
        getSelectionItemLabelData: ue,
        hasCamera: B,
        hasSpaceContent: he,
        isActiveLassoTool: ne,
        isErpCamera: me,
        isExternalSticker: de,
        isItemLocked: P,
        isPaintCursorEnabled: z,
        isSceneSticker: oe,
        isShotItem: j,
        isSpaceView: fe,
        isStickerHidden: Pe,
        leaveFrameView: ie,
        poseOf: E,
        selectedWorldSticker: ee,
        setCanvasCursor: ce,
        syncCutoutShot: ge,
        syncTimeline: _e,
        syncVideoTransportVisibility: I,
        updateCursor: le,
        worldStickerEditable: y
      } = L);
    },
    syncLookAtFrameButtonState: Y,
    syncFloatingViewButtonState: S,
    syncViewToggleState: w,
    syncFrameRollKnob: D,
    syncPaintUi: k,
    syncSidePanelControls: N,
    updateSidePanel: A,
    inspectorTimed: W,
    syncSidePanelModel: Q,
    syncUndoRedoButtons: ae
  };
}
function jN(e) {
  const {
    capture: t,
    cutoutV2: r,
    editor: n,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: c,
    timeline: d,
    timelinePlayhead: u,
    uiState: f,
    videoEl: m,
    videoTimelineFps: _
  } = e;
  let g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B;
  function he() {
    if (!l || o) return;
    const y = me(), v = d.selection, R = v && de(v.owner);
    if (v) {
      const Y = R ? P(v) : [];
      v.frames = v.frames.filter((S) => Y.some((w) => R[w].keyframes.some((D) => D.frame === S))), v.frames.length || (d.selection = null);
    }
    f.timeline = VN(s, {
      span: y,
      selection: d.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: d.expanded ?? ne(),
      openRows: d.openRows,
      audio: Pe() && f.videoTransport.hasAudio ? { muted: m.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: _(i) !== null || vm(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: O(),
      cameraHideable: c,
      stickers: !r,
      scene: a && !!vl(i).scene,
      sceneLocked: !!t
    }), f.easing = d.selection ? $N(R, P(d.selection), d.selection.frames, z(d.selection.owner)) : null;
  }
  function ne() {
    return L1(s, { cameraOnly: r, camera: c });
  }
  function me(y = null) {
    if (t != null && t.frames) return t.frames;
    const v = s.timeline.fps, R = s.stickers.find(H), Y = R ? p() : null, S = Math.max(
      f.videoTransport.ready ? Math.round(Number(f.videoTransport.duration || 0) * v) : 0,
      Y ? Cm(R.clip, v, Y.meta) : 0
    );
    return jh(s, { minimum: Math.round(v * 5), frames: S, openClip: y, camera: r && !t || c });
  }
  function de(y) {
    return y === "camera" ? O() ? s.camera : null : y === "scene" ? a ? s.scene : null : s.stickers.find((v) => v.id === y) || null;
  }
  function P(y) {
    return y.lane ? [y.lane] : co(de(y.owner));
  }
  function z(y) {
    if (y === "camera") return 0;
    const { clip: v } = de(y);
    return v.start - v.in;
  }
  function oe(y) {
    return `${so(y, n.frame)}:${y.start - y.in}`;
  }
  function j(y) {
    const v = de(y);
    return !!v && v.locked !== !0;
  }
  function fe(y) {
    const v = Math.max(0, Math.round(y));
    if (v === n.frame) return;
    Z(), n.frame = v, u.frame.value = v, Z();
    const R = [n.selectedId, n.worldSelectedId];
    re(), G(), R[0] !== n.selectedId || R[1] !== n.worldSelectedId ? B() : K() && T(), ue(), U({ reason: ft.PLAYHEAD });
  }
  function Pe() {
    return m instanceof HTMLVideoElement && !!m.getAttribute("src");
  }
  function ie(y) {
    V(), x.seek(y);
  }
  function E() {
    l && x.stop();
  }
  function ee() {
    V(), x.toggle();
  }
  function ce() {
    Z(), G(), B(), ue(), U();
  }
  function ge() {
    X(), g(), ce();
  }
  function _e() {
    const { selection: y } = d;
    j(y.owner) && (E(), C1(de(y.owner), P(y), y.frames, n.frame - z(y.owner)), d.selection = null, ge());
  }
  function I(y) {
    const v = lo(y);
    if (v === null || v === s.timeline.fps) return;
    E();
    const R = Math.round(n.frame * v / s.timeline.fps);
    J1(s, v), d.selection = null, x.seek(R), ge();
  }
  function le() {
    const y = _(i);
    y !== null && y !== s.timeline.fps && I(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: p,
        hasCamera: O,
        inspectorTimed: K,
        isExternalSticker: H,
        markObjectVisualsDirty: G,
        playback: x,
        pushHistory: X,
        refreshModalVideoSource: V,
        releaseHiddenSelection: re,
        requestDraw: U,
        syncCutoutShot: Z,
        syncSidePanelModel: T,
        updateSelectionMenu: ue,
        updateSidePanel: B
      } = y);
    },
    syncTimeline: he,
    timelineTimed: ne,
    timelineSpanFrames: me,
    timelineOwner: de,
    selectedLanes: P,
    timelineOffset: z,
    clipView: oe,
    timelineEditable: j,
    setTimelineFrame: fe,
    jumpTimelineTo: ie,
    stopTimelinePlayback: E,
    togglePlayback: ee,
    refreshTimelineEdit: ce,
    commitTimelineEdit: ge,
    deleteSelectedKeyframes: _e,
    changeTimelineFps: I,
    applyVideoTimelineFps: le
  };
}
function HN(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    studio: a,
    timeline: s,
    uiState: l
  } = e;
  let c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z;
  function oe(j) {
    if (!(n || !o)) {
      if (j.type === "seek") {
        if (j.phase === "move") {
          s.scrubFrame = j.frame, t.request("seek");
          return;
        }
        t.cancel(), j.phase === "start" && O(), p.seek(j.frame);
        return;
      }
      if (j.type === "play") {
        me();
        return;
      }
      if (j.type === "mute") {
        de(), Z();
        return;
      }
      if (j.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? ne()), s.selection = null, Z();
        return;
      }
      if (j.type === "toggle-row") {
        s.openRows.has(j.id) ? s.openRows.delete(j.id) : s.openRows.add(j.id), Z();
        return;
      }
      if (j.type === "toggle-visible") {
        if (j.id === Tg) i.painting_visible = !i.painting_visible;
        else {
          const fe = B(j.id);
          if (!fe || j.id === "camera" && !a) return;
          fe.visible = !fe.visible;
        }
        H(), f();
        return;
      }
      if (j.type === "select-row") {
        const fe = i.stickers.find((Pe) => Pe.id === j.id);
        if (fe && !fe.visible || j.id === "camera" && !c()) return;
        fe && !so(fe.clip, r.frame) && g(fe.clip.start), (fe == null ? void 0 : fe.placement) === "world" ? x(fe.id) : j.id === "camera" ? V(m()) : V(_().find((Pe) => Pe.id === j.id) || null), U(), s.selection = null, z(), P(), G();
        return;
      }
      if (j.type === "select-keys") {
        const fe = ue(j.owner), Pe = j.frames.map((ee) => ee - fe), ie = s.selection, E = (ie == null ? void 0 : ie.owner) === j.owner && ie.lane === j.lane;
        if (j.additive && E) {
          const ee = new Set(ie.frames);
          for (const ce of Pe)
            ee.has(ce) ? ee.delete(ce) : ee.add(ce);
          ie.frames = [...ee].sort((ce, ge) => ce - ge);
        } else
          s.selection = Pe.length ? { owner: j.owner, lane: j.lane, frames: Pe } : null;
        Z();
        return;
      }
      if (j.type === "move-keys") {
        const fe = s.selection;
        if (!fe || !T(fe.owner)) return;
        const Pe = B(fe.owner), ie = X(fe);
        if (j.phase === "start") {
          re(), s.drag = { keyframes: ie.map((ce) => structuredClone(Pe[ce].keyframes)), frames: fe.frames };
          return;
        }
        const { drag: E } = s;
        if (!(E != null && E.keyframes)) return;
        ie.forEach((ce, ge) => {
          Pe[ce].keyframes = structuredClone(E.keyframes[ge]);
        });
        const ee = A1(Pe, ie, E.frames, j.delta, -ue(fe.owner));
        if (fe.frames = E.frames.map((ce) => ce + ee), j.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ee ? f() : K();
        return;
      }
      if (j.type === "clip") {
        const fe = j.id === "scene" ? B("scene") : i.stickers.find((ee) => ee.id === j.id);
        if (!fe || fe.locked) return;
        if (j.phase === "start") {
          re(), s.drag = { clip: { ...fe.clip }, span: he(fe.clip) };
          return;
        }
        const { drag: Pe } = s;
        if (!(Pe != null && Pe.clip)) return;
        const ie = Pe.clip, E = u(fe.clip);
        if (fe.clip = { ...ie }, j.delta && j.mode === "move" ? O1(fe.clip, j.delta) : j.delta && j.mode === "start" ? F1(fe.clip, ie.start + j.delta) : j.delta && T1(fe.clip, (ie.duration === null ? Pe.span : ie.start + ie.duration) + j.delta, Pe.span), j.phase !== "end") {
          t.request("timeline"), u(fe.clip) !== E && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, H(), JSON.stringify(fe.clip) !== JSON.stringify(ie) ? f() : K();
        return;
      }
      if (j.type === "key-row") {
        if (j.owner === "scene" || !T(j.owner)) return;
        re(), M1(B(j.owner), r.frame - ue(j.owner)), f();
        return;
      }
      if (j.type === "fps") {
        const fe = V1(j.fps);
        if (fe === null || fe === i.timeline.fps || l.timeline.fpsLocked) {
          Z();
          return;
        }
        d(fe);
        return;
      }
      if (j.type === "length") {
        const fe = $1(j.length);
        if (fe === void 0 || fe === i.timeline.length) {
          Z();
          return;
        }
        re(), i.timeline.length = fe, f();
        return;
      }
      if (j.type === "easing") {
        const fe = s.selection;
        if (!fe || !T(fe.owner)) return;
        re(), E1(B(fe.owner), X(fe), fe.frames, j.easing), j.commit ? f() : K();
      }
    }
  }
  return {
    connect(j) {
      ({
        cameraShoots: c,
        changeTimelineFps: d,
        clipView: u,
        commitTimelineEdit: f,
        getActiveCutoutShot: m,
        getList: _,
        jumpTimelineTo: g,
        playback: p,
        refreshModalVideoSource: O,
        refreshTimelineEdit: K,
        releaseHiddenSelection: H,
        requestDraw: G,
        selectWorldSticker: x,
        selectedLanes: X,
        setSelectedItem: V,
        stopTimelinePlayback: re,
        syncFloatingViewButtonState: U,
        syncTimeline: Z,
        timelineEditable: T,
        timelineOffset: ue,
        timelineOwner: B,
        timelineSpanFrames: he,
        timelineTimed: ne,
        togglePlayback: me,
        toggleVideoMuted: de,
        updateSelectionMenu: P,
        updateSidePanel: z
      } = j);
    },
    onTimelineAction: oe
  };
}
function GN(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, m;
  function _() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = En(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), g(), o.setDirtyCanvas(!0, !0));
  }
  function g() {
    var x;
    if (s) return;
    f(), Xh(l), l.coverage = En(l.coverage), qh(o, l.active);
    const G = Jh(o, l);
    c && !Zh(o, G, String(c.value ?? ""), { rebased: n }) && (c.value = G, (x = c.callback) == null || x.call(c, G));
  }
  function p() {
    l.ui_settings = zP(l.ui_settings), s || g();
  }
  function O() {
    var G;
    s || (g(), (G = o.setDirtyCanvas) == null || G.call(o, !0, !0));
  }
  function K() {
    s || d() && m().catch((G) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", G);
    });
  }
  function H(G = {}) {
    var V, re, U, Z, T, ue, B, he, ne;
    const x = G.syncPreview !== !1, X = G.syncGraph !== !1;
    x && ((re = (V = o.__panoPreviewNodeRuntime) == null ? void 0 : V.requestDraw) == null || re.call(V), (Z = (U = o.__panoDomPreview) == null ? void 0 : U.requestDraw) == null || Z.call(U), (T = o.setDirtyCanvas) == null || T.call(o, !0, !1)), X && ((B = (ue = o.graph) == null ? void 0 : ue.setDirtyCanvas) == null || B.call(ue, !0, !0), (ne = (he = t == null ? void 0 : t.canvas) == null ? void 0 : he.setDirty) == null || ne.call(he, !0, !0));
  }
  return {
    connect(G) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: m
      } = G);
    },
    apply: _,
    commitState: g,
    persistUiSettings: p,
    commitAndRefreshNode: O,
    triggerBackgroundPersistenceOnClose: K,
    syncCoverageChangeToNodePreviews: H
  };
}
function WN(e) {
  const {
    cutoutV2: t,
    editor: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    studio: a,
    type: s,
    uiState: l
  } = e;
  let c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce;
  function ge(Y, S, w = "Clear") {
    return new Promise((D) => {
      l.confirmDialog = {
        visible: !0,
        title: String(Y || ""),
        text: String(S || ""),
        confirmLabel: String(w || "Confirm"),
        resolve: D
      };
    });
  }
  async function _e() {
    var w, D;
    if (n || !await ge(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = ao(null), me();
    const S = u();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((k) => k.placement === "world" || S.includes(k)) : S, i || (o.assets = {}), r.selectedId = ((w = S[0]) == null ? void 0 : w.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((D = S[0]) == null ? void 0 : D.id) || null, P();
    else {
      const k = B1(o.shots, o.active.selected_shot_id);
      o.stickers = S, o.assets = {}, o.shots = k.shots, r.selectedId = k.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = k.selectedShotId, !k.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, P();
    }
    z(), f(), ee(), E(), oe();
  }
  async function I(Y) {
    var N, A, W, Q;
    if (n) return;
    const S = Y === "mask" ? "mask" : "paint", w = S === "mask" ? "Mask" : "Paint", D = K(S);
    if (!(!D.length && !(((N = r.interaction) == null ? void 0 : N.kind) === "draw" && ((A = r.interaction) == null ? void 0 : A.layerKind) === S) || !await ge(
      `Clear ${w}`,
      `This will remove all ${S} strokes in the current node.`,
      `Clear ${w}`
    ))) {
      if (((W = r.interaction) == null ? void 0 : W.kind) === "draw" && ((Q = r.interaction) == null ? void 0 : Q.layerKind) === S) {
        const ae = _(r.interaction);
        ae && r.paintEngine.cancelActiveStroke(ae), r.interaction = null;
      }
      D.length = 0, o.painting.raster_objects = H().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") !== S), S === "paint" && (O().length = 0), me(), z(), f(), ee(), E(), ie(), oe();
    }
  }
  function le() {
    if (n) return;
    const Y = G();
    if (!Y || !T(Y) || X(Y) || i && B(Y)) return;
    let S;
    i ? S = dv(Y, di("st"), p()) : (S = JSON.parse(JSON.stringify(Y)), S.id = di("st"), S.yaw_deg = $t((S.yaw_deg || 0) + 8), S.z_index = p()), o.stickers.push(S), o.active.selected_sticker_id = S.id, r.selectedId = S.id, r.selectedIds = [S.id], he(), z(), f(), E(), ee(), oe();
  }
  function y() {
    const Y = j();
    return Y ? (ce(Y) && (fe(), cv(o, Y.id), d(), he(), z(), f(), ee(), E(), Pe(), oe()), !0) : !1;
  }
  function v() {
    var w, D, k, N, A;
    if (n || t) return;
    const Y = x(), S = G();
    if (!(!S && Y.length === 0) && !Y.some((W) => V(W))) {
      if (fe(), Y.length > 1) {
        const W = new Set(Y.filter((L) => ue(L)).map((L) => String(L.actionGroupId || L.id || ""))), Q = new Set(Y.filter((L) => re(L)).map((L) => de(L.rasterObjectId || L.id || ""))), ae = new Set(Y.filter(T).map((L) => String(L.id || "")));
        W.size > 0 && (o.painting.paint.strokes = (Array.isArray((D = (w = o.painting) == null ? void 0 : w.paint) == null ? void 0 : D.strokes) ? o.painting.paint.strokes : []).filter((L) => !W.has(String((L == null ? void 0 : L.actionGroupId) || ""))), o.painting.groups = O().filter((L) => !W.has(String((L == null ? void 0 : L.actionGroupId) || (L == null ? void 0 : L.id) || ""))), me()), Q.size > 0 && (o.painting.raster_objects = H().filter((L) => !Q.has(String((L == null ? void 0 : L.id) || ""))), ne()), ae.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((L) => ae.has(String((L == null ? void 0 : L.id) || "")) ? X(L) ? (Z(L) || (L.visible = !1), !0) : !1 : !0), P(), he()), r.selectedId = null, r.selectedIds = [], z(), f(), ee(), E(), oe();
        return;
      }
      if (ue(S)) {
        const W = String(S.actionGroupId || S.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((N = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : N.strokes) ? o.painting.paint.strokes : []).filter((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "").trim() !== W), o.painting.groups = O().filter((Q) => String((Q == null ? void 0 : Q.actionGroupId) || (Q == null ? void 0 : Q.id) || "").trim() !== W), me(), r.selectedId = null, r.selectedIds = [], z(), f(), ee(), E(), oe();
        return;
      }
      if (re(S)) {
        const W = de(S.rasterObjectId || S.id || "");
        o.painting.raster_objects = H().filter((Q) => String((Q == null ? void 0 : Q.id) || "").trim() !== W), ne(), r.selectedId = null, r.selectedIds = [], z(), f(), ee(), E(), oe();
        return;
      }
      if (a && U(S)) {
        m();
        return;
      }
      if (s === "stickers" || T(S)) {
        if (X(S)) {
          if (Z(S)) return;
          S.visible = !1, he(), z(), f(), ee(), E(), oe();
          return;
        }
        o.stickers = o.stickers.filter((W) => W.id !== S.id), P(), he(), r.selectedId = ((A = g()[0]) == null ? void 0 : A.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, z(), f(), ee(), E(), oe();
        return;
      }
      c();
    }
  }
  function R() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", ie(), ee());
  }
  return {
    connect(Y) {
      ({
        clearCutoutFrame: c,
        clearWorldSelection: d,
        collectExternalStickersForClearAll: u,
        commitAndRefreshNode: f,
        deleteStudioCamera: m,
        getActivePaintTargetDescriptor: _,
        getList: g,
        getNextStickerZIndex: p,
        getPaintingGroupList: O,
        getPaintingLayerList: K,
        getRasterObjectList: H,
        getSelected: G,
        getSelectedItems: x,
        isExternalSticker: X,
        isItemLocked: V,
        isRasterObjectItem: re,
        isShotItem: U,
        isStickerHidden: Z,
        isStickerItem: T,
        isStrokeGroupItem: ue,
        isUploadingSticker: B,
        markObjectVisualsDirty: he,
        markPaintCompositeVisualsDirty: ne,
        markPaintStrokeVisualsDirty: me,
        parseRasterObjectSelectionId: de,
        pruneUnusedAssets: P,
        pushHistory: z,
        requestDraw: oe,
        selectedWorldSticker: j,
        stopTimelinePlayback: fe,
        syncFloatingViewButtonState: Pe,
        syncPaintUi: ie,
        updateSelectionMenu: E,
        updateSidePanel: ee,
        worldStickerEditable: ce
      } = Y);
    },
    clearAll: _e,
    clearPaintingLayer: I,
    duplicateSelected: le,
    deleteSelectedWorldSticker: y,
    deleteSelected: v,
    forceCursorTool: R
  };
}
function KN(e) {
  const {
    api: t,
    canvas: r,
    cutoutV2: n,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: c,
    sceneV2: d,
    stageWrap: u,
    state: f,
    type: m,
    vueModal: _
  } = e;
  let g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z;
  function oe(N) {
    return ld(N == null ? void 0 : N.dataTransfer);
  }
  function j(N) {
    const A = !!N;
    i.active !== A && (i.active = A, u.classList.toggle("drop-active", A));
  }
  function fe() {
    const N = new Set(
      (f.stickers || []).map((A) => String((A == null ? void 0 : A.asset_id) || "")).filter((A) => !!A)
    );
    Object.keys(f.assets || {}).forEach((A) => {
      N.has(A) || (delete f.assets[A], s.delete(A));
    });
  }
  async function Pe(N) {
    if (c || n || m !== "stickers" && m !== "cutout" || !Jn(N)) return;
    if (d) {
      de(), await ge(N);
      return;
    }
    const A = di("asset"), W = To(l, `add:${A}`, async () => {
      try {
        const { image: Q } = await Do(N);
        s.set(A, Q);
        const ae = di("st");
        f.stickers.push({
          id: ae,
          asset_id: A,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: O(30, Number(Q.naturalWidth || Q.width || 1), Number(Q.naturalHeight || Q.height || 1)),
          rot_deg: 0,
          z_index: x()
        }), he(f.stickers[f.stickers.length - 1]), G(), z(), P(), ue();
        const L = await ui(N, {
          fetchApi: (we, pe) => t.fetchApi(we, pe)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((we) => String((we == null ? void 0 : we.asset_id) || "") === A).length) return;
        f.assets[A] = L, fe(), T(), p(), z(), P(), ue();
      } catch (Q) {
        delete f.assets[A], s.delete(A);
        const ae = Array.isArray(f.stickers) ? f.stickers : [], L = ae.filter((se) => String((se == null ? void 0 : se.asset_id) || "") === A);
        throw L.length && (f.stickers = ae.filter((se) => String((se == null ? void 0 : se.asset_id) || "") !== A), L.some((se) => String((se == null ? void 0 : se.id) || "") === String(o.selectedId || "")) && he(null), z(), P(), ue(), p()), Q;
      }
    });
    try {
      await W;
    } catch {
    }
  }
  function ie() {
    var N;
    c || m !== "stickers" && m !== "cutout" || (N = _ == null ? void 0 : _.openImagePicker) == null || N.call(_, "add");
  }
  function E() {
    var N;
    c || !d || (N = _ == null ? void 0 : _.openImagePicker) == null || N.call(_, "add-world");
  }
  async function ee(N) {
    c || !d || !Jn(N) || (de(), await ge(N, "world"));
  }
  function ce() {
    const N = { x: r.width / 2, y: r.height / 2 }, A = re() ? a.pick(H(), N.x, N.y, r.width, r.height) : null;
    return Fv(ne(), A, K());
  }
  async function ge(N, A = "sky") {
    const W = di("st"), Q = To(l, `add:${W}`, async () => {
      const { image: ae } = await Do(N), L = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: O(30, Number(ae.naturalWidth || ae.width || 1), Number(ae.naturalHeight || ae.height || 1)),
        rot_deg: 0
      }, se = { kind: "file", filename: "" }, ve = A === "world" ? uv(W, se, ce()) : Uu(W, se, L, x());
      s.set(me(ve), ae), f.stickers.push(ve), A === "world" ? B(W) : he(ve), G(), z(), P(), ue();
      try {
        const we = await ui(N, {
          fetchApi: (be, ye) => t.fetchApi(be, ye)
        }), pe = f.stickers.find((be) => be.id === W);
        if (!pe) return;
        pe.source = as(we), s.set(me(pe), ae), T(), p();
      } catch (we) {
        throw f.stickers = f.stickers.filter((pe) => pe.id !== W), o.selectedId === W && he(null), o.worldSelectedId === W && g(), T(), p(), we;
      } finally {
        z(), P(), ue();
      }
    });
    try {
      await Q;
    } catch {
    }
  }
  async function _e(N, A) {
    const W = To(l, `replace:${A}:${di("asset")}`, async () => {
      const { image: Q } = await Do(N), ae = await ui(N, {
        fetchApi: (se, ve) => t.fetchApi(se, ve)
      }), L = f.stickers.find((se) => se.id === A);
      if (L) {
        L.source = as(ae), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const se of [L.size.value, ...L.size.keyframes.map((ve) => ve.value)])
          se.vFOV_deg = O(se.hFOV_deg, Number(Q.naturalWidth || Q.width || 1), Number(Q.naturalHeight || Q.height || 1));
        s.set(me(L), Q), Z(), T(), p(), z(), P(), ue();
      }
    });
    try {
      await W;
    } catch {
    }
  }
  async function I(N) {
    if (c || m !== "stickers" && m !== "cutout") return;
    const A = X();
    if (!A || !U(A) || V(A) || !Jn(N)) return;
    if (d) {
      await _e(N, A.id);
      return;
    }
    const W = String(A.id || ""), Q = di("asset"), ae = To(l, `replace:${W}:${Q}`, async () => {
      var be;
      const L = (Array.isArray(f.stickers) ? f.stickers : []).find((ye) => String((ye == null ? void 0 : ye.id) || "") === W) || null;
      if (!L || !U(L) || V(L)) return;
      const se = String(L.asset_id || ""), ve = se ? cn(((be = f.assets) == null ? void 0 : be[se]) || null) : null, we = Number(L.vFOV_deg || 0), pe = L.crop && typeof L.crop == "object" ? { ...L.crop } : null;
      try {
        const { image: ye } = await Do(N);
        s.set(Q, ye), L.asset_id = Q, L.vFOV_deg = O(
          Number(L.hFOV_deg || 30),
          Number(ye.naturalWidth || ye.width || 1),
          Number(ye.naturalHeight || ye.height || 1)
        ), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Z(), z(), P(), ue();
        const h = await ui(N, {
          fetchApi: (C, b) => t.fetchApi(C, b)
        }), $ = (Array.isArray(f.stickers) ? f.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === W) || null;
        if (!$ || String($.asset_id || "") !== Q) return;
        f.assets[Q] = h, fe(), T(), p(), z(), P(), ue();
      } catch (ye) {
        delete f.assets[Q], s.delete(Q);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find(($) => String(($ == null ? void 0 : $.id) || "") === W) || null;
        throw h && String(h.asset_id || "") === Q && (se && ve && (f.assets[se] = ve), h.asset_id = se, h.vFOV_deg = we, h.crop = pe ? { ...pe } : null), Z(), p(), z(), P(), ue(), ye;
      }
    });
    try {
      await ae;
    } catch {
    }
  }
  function le() {
    var A;
    if (c) return;
    const N = X();
    !N || !U(N) || V(N) || (A = _ == null ? void 0 : _.openImagePicker) == null || A.call(_, "replace");
  }
  async function y() {
    if (c || m !== "stickers") return;
    if (d) {
      await v();
      return;
    }
    const N = f.assets && typeof f.assets == "object" ? f.assets : {}, A = Object.entries(N).filter(([, Q]) => {
      const ae = String((Q == null ? void 0 : Q.type) || "").toLowerCase(), L = String((Q == null ? void 0 : Q.value) || "");
      return ae === "dataurl" && L.startsWith("data:image");
    });
    if (!A.length) return;
    let W = !1;
    for (const [Q, ae] of A)
      try {
        const L = String((ae == null ? void 0 : ae.value) || "");
        if (!L) continue;
        const se = await fetch(L).then((ye) => ye.blob()), ve = String(se.type || "image/png").split("/")[1] || "png", we = String((ae == null ? void 0 : ae.name) || `${Q}.${ve}`), pe = new File([se], we, { type: se.type || "image/png" }), be = await ui(pe, {
          fetchApi: (ye, h) => t.fetchApi(ye, h)
        });
        f.assets[Q] = {
          ...be,
          w: Number((ae == null ? void 0 : ae.w) || 0),
          h: Number((ae == null ? void 0 : ae.h) || 0)
        }, W = !0;
      } catch {
      }
    W && (p(), ue());
  }
  async function v() {
    let N = !1;
    for (const A of f.stickers) {
      const W = A.source.data_url;
      if (W)
        try {
          const Q = await fetch(W).then((ve) => ve.blob()), ae = String(Q.type || "image/png").split("/")[1] || "png", L = new File([Q], `${A.id}.${ae}`, { type: Q.type || "image/png" }), se = await ui(L, {
            fetchApi: (ve, we) => t.fetchApi(ve, we)
          });
          A.source = as(se), N = !0;
        } catch {
        }
    }
    N && (p(), ue());
  }
  function R(N) {
    m !== "stickers" && m !== "cutout" || c || (N.preventDefault(), j(!0));
  }
  function Y(N) {
    var Q;
    if (m !== "stickers" && m !== "cutout" || c) return;
    N.preventDefault(), N.stopPropagation(), i.depth = 0, j(!1);
    const W = Array.from(((Q = N.dataTransfer) == null ? void 0 : Q.files) || []).find((ae) => Jn(ae));
    W && Pe(W);
  }
  function S(N) {
    m !== "stickers" && m !== "cutout" || c || oe(N) && (i.depth += 1, j(!0), N.preventDefault());
  }
  function w(N) {
    m !== "stickers" && m !== "cutout" || c || (!i.active && oe(N) && j(!0), i.active && N.preventDefault());
  }
  function D(N) {
    if (m !== "stickers" && m !== "cutout" || c || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const A = Number(N.clientX) <= 0 && Number(N.clientY) <= 0;
    (i.depth === 0 || A) && j(!1);
  }
  function k(N) {
    m !== "stickers" && m !== "cutout" || c || (i.depth = 0, j(!1), oe(N) && N.preventDefault());
  }
  return {
    connect(N) {
      ({
        clearWorldSelection: g,
        commitAndRefreshNode: p,
        computeStickerVFov: O,
        contentSphere: K,
        currentSpaceCamera: H,
        forceCursorTool: G,
        getNextStickerZIndex: x,
        getSelected: X,
        isExternalSticker: V,
        isSpaceView: re,
        isStickerItem: U,
        markObjectVisualsDirty: Z,
        pushHistory: T,
        requestDraw: ue,
        selectWorldSticker: B,
        setSelectedItem: he,
        spaceViewState: ne,
        stickerImageKey: me,
        stopTimelinePlayback: de,
        updateSelectionMenu: P,
        updateSidePanel: z
      } = N);
    },
    addImageStickerFromFile: Pe,
    addImageSticker: ie,
    addWorldImageSticker: E,
    addWorldStickerFromFile: ee,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: le,
    migrateLegacyEmbeddedAssets: y,
    pruneUnusedAssets: fe,
    setDropCue: j,
    onCanvasDragOver: R,
    onCanvasDrop: Y,
    onWindowDragEnter: S,
    onWindowDragOver: w,
    onWindowDragLeave: D,
    onWindowDrop: k
  };
}
function UN(e) {
  const {
    cameraV2: t,
    canvas: r,
    cutoutV2: n,
    editor: i,
    frameRollKnobEl: o,
    initialShotBase: a,
    readOnly: s,
    runtime: l,
    shotEditor: c,
    stageWrap: d,
    state: u,
    studio: f,
    tooltip: m,
    type: _,
    uiState: g
  } = e;
  let p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce, ge, _e, I, le, y, v = a;
  function R(b, F) {
    var te;
    const M = (te = V().space) == null ? void 0 : te.gizmo;
    if (B() && M && y("hover", F) !== null && y("down", F))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: M.mode, start: M.transform, base: X(), changed: !1 }, r.setPointerCapture(b.pointerId), _e(F), !0;
    const q = cm(X(), O(fe()));
    return jv(x(), q, F, r.width, r.height) ? (B() || (j(se()), le(), I(), z()), i.interaction = { kind: "world_select" }, r.setPointerCapture(b.pointerId), !0) : !1;
  }
  function Y() {
    if (s || _ !== "cutout") return;
    const b = se();
    if (b) {
      j(b), i.mode = "pano", n && he() ? ce(im(de(Pe(), b.position), H(), r.width, r.height)) : ge($t(Number(b.yaw_deg || 0)), Ee(Number(b.pitch_deg || 0), -89.9, 89.9)), le(), I(), z({ cause: "cutout_frame" });
      return;
    }
    const F = yh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    u.shots = [F], j(F), re(), i.mode = "pano", P(), G(), le(), I(), z({ cause: "cutout_frame" });
  }
  function S() {
    s || !f || Z() || (ie(), u.camera = ev(Pe()), ae(), j(se()), re(), P(), G(), le(), I(), z({ cause: "cutout_frame" }));
  }
  function w() {
    ie(), u.camera = null, j(null), ae(), P(), G(), le(), I(), z({ cause: "cutout_frame" });
  }
  function D(b, F) {
    f && ne(b) && (u.camera.projection = F === ro ? "erp" : "perspective", F === ro) || A(b, F);
  }
  function k() {
    s || _ !== "cutout" || (u.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, u.active.selected_shot_id = null, P(), G(), le(), I(), z());
  }
  function N(b, F) {
    const M = l.frameSafeRect;
    if (!b || !M || i.mode !== "frame") return !1;
    const q = ou * _i(M, b), te = Du(Tu(M, F), q);
    return b.hFOV_deg = te.hFOV_deg, b.vFOV_deg = te.vFOV_deg, !0;
  }
  function A(b, F) {
    if (!b || b.locked === !0) return;
    const M = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, q = (() => {
      const Ne = String(b.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(Ne)) {
        const [je, We] = Ne.split(":").map((Ve) => Number(Ve));
        if (Number.isFinite(je) && Number.isFinite(We)) return je >= We;
      }
      const Te = Number(b.hFOV_deg || 64), ze = Number(b.vFOV_deg || 40);
      return Math.abs(Te - ze) > 1e-6 ? Te >= ze : ki(b) >= 1;
    })();
    let [te, Se] = M[String(F)] || M["1:1"];
    te >= Se !== q && ([te, Se] = [Se, te]);
    const xe = te / Se;
    if (!N(b, xe)) {
      const Ne = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = Ne, b.hFOV_deg = rs(Ne, xe);
    }
    b.aspect_id = `${te}:${Se}`;
  }
  function W(b, F, M) {
    if (!b || b.locked === !0) return !1;
    const q = sa(F, M);
    if (!q) return !1;
    const te = q.ratio;
    if (!N(b, te)) {
      const Se = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = Se, b.hFOV_deg = rs(Se, te);
    }
    return b.aspect_id = q.label, !0;
  }
  function Q(b) {
    if (!b || b.locked === !0) return;
    const F = String(b.aspect_id || "").trim(), M = Zr(b), q = M.tanHalfX / Math.max(1e-12, M.tanHalfY), te = 1 / Math.max(1e-12, q);
    if (!N(b, te)) {
      const Se = Ee(Number(b.vFOV_deg || 60), 1, 179);
      b.vFOV_deg = Se, b.hFOV_deg = rs(Se, te);
    }
    if (/^\d+:\d+$/.test(F)) {
      const [Se, xe] = F.split(":");
      b.aspect_id = `${xe}:${Se}`;
    } else
      b.aspect_id = yi(b);
  }
  function ae(b = !0) {
    var q, te;
    if (!t) return;
    const F = v;
    if (!K()) {
      v = null, (q = u.shots) != null && q.length && (u.shots = []), F && L(F, null);
      return;
    }
    const M = (te = u.shots) == null ? void 0 : te[0];
    b && M && v && nv(u.camera, i.frame, M, v), v = Uh(u.camera, i.frame), M ? Object.assign(M, v, { position: [...v.position] }) : u.shots = [{ ...v, position: [...v.position] }], F || L(null, v);
  }
  function L(b, F) {
    var Se, xe;
    !F && i.mode === "frame" && me(b);
    const M = (F == null ? void 0 : F.position) ?? [0, 0, 0];
    if (((xe = (Se = i.viewTransition) == null ? void 0 : Se.end) == null ? void 0 : xe.mode) === "3dof") {
      ce({ ...Pe(), position: M }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !T()) return;
    const q = (b == null ? void 0 : b.position) ?? [0, 0, 0];
    if (q.every((Ne, Te) => Ne === M[Te])) return;
    const te = { ...Pe(), position: q };
    p({ mode: "6dof", position: q, moved: !0 }), i.viewDistance = te.distance, ce({ ...te, position: M }, { mode: "3dof", moved: !1 });
  }
  function se() {
    if (!c) return null;
    const b = Array.isArray(u.shots) ? u.shots : [];
    if (!b.length) return null;
    const F = String(u.active.selected_shot_id || "");
    return b.find((M) => String((M == null ? void 0 : M.id) || "") === F) || b[0] || null;
  }
  function ve(b, F, M = {}) {
    var Se;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    b.accumulatedRad += hh(F, b.lastAngle), b.lastAngle = F;
    const q = mh(b.start.roll_deg, b.accumulatedRad, {
      shiftKey: M.shiftKey,
      altKey: b.altStarted ? !1 : M.altKey
    });
    b.shot.roll_deg = q, b.changed = b.changed || Math.abs(b.accumulatedRad) > 1e-9;
    const te = (((Se = g.sidePanel) == null ? void 0 : Se.params) || []).find((xe) => xe.key === "roll_deg");
    te && (te.value = q, te.displayValue = Ji(q), te.fillPct = (q + 180) / 360 * 100), E(), be(b), z({ localOnly: !0 });
  }
  function we(b, F, M = {}) {
    var Se;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot || !b.rollGesture) return;
    const q = qm(b.rollGesture, F, M);
    if (!q) return;
    b.rollGesture = q.gesture, b.center = q.gesture.center, b.lastAngle = q.gesture.lastAngle, b.accumulatedRad = q.gesture.accumulatedRad, b.shot.roll_deg = q.rollDeg, b.changed = b.changed || Math.abs(q.gesture.accumulatedRad) > 1e-9;
    const te = (((Se = g.sidePanel) == null ? void 0 : Se.params) || []).find((xe) => xe.key === "roll_deg");
    te && (te.value = q.rollDeg, te.displayValue = Ji(q.rollDeg), te.fillPct = (q.rollDeg + 180) / 360 * 100), E(), be(b), z({ localOnly: !0 });
  }
  function pe(b, F) {
    const M = oe(b);
    return Math.atan2(M.y - F.y, M.x - F.x);
  }
  function be(b) {
    var xe, Ne;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    m.timer && (clearTimeout(m.timer), m.timer = 0), m.target = null;
    const F = U(b.shot), M = (xe = r.getBoundingClientRect) == null ? void 0 : xe.call(r), q = (Ne = d.getBoundingClientRect) == null ? void 0 : Ne.call(d);
    if (!F || !M || !q || r.width <= 0 || r.height <= 0) return;
    const te = M.width / r.width, Se = M.height / r.height;
    g.tooltip.text = `${Ji(b.shot.roll_deg)}°`, g.tooltip.left = M.left - q.left + (F.x + F.w * 0.5) * te, g.tooltip.top = M.top - q.top + (F.y + F.h * 0.5) * Se + 12, g.tooltip.variant = "roll", g.tooltip.visible = !0;
  }
  function ye(b) {
    var Se;
    if (b.button !== 0 || s || i.mode !== "frame") return;
    const F = se();
    if (!F || F.locked === !0) return;
    const M = U(F);
    if (!M) return;
    const q = { x: M.x + M.w * 0.5, y: M.y + M.h * 0.5 }, te = pe(b, q);
    i.interaction = {
      kind: "roll_frame",
      shot: F,
      center: q,
      lastAngle: te,
      accumulatedRad: 0,
      start: { roll_deg: Number(F.roll_deg ?? F.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (Se = o.setPointerCapture) == null || Se.call(o, b.pointerId), b.preventDefault(), E(), be(i.interaction), z({ localOnly: !0 });
  }
  function h(b) {
    var F;
    ((F = i.interaction) == null ? void 0 : F.kind) !== "roll_frame" || i.interaction.source !== "knob" || ve(
      i.interaction,
      pe(b, i.interaction.center),
      b
    );
  }
  function $() {
    const b = i.interaction;
    (b == null ? void 0 : b.kind) !== "roll_frame" || b.source !== "knob" || (b.changed && (P(), G(), le()), i.interaction = null, ue(), ee(), E(), z());
  }
  function C(b) {
    const F = i.mode === "frame" && !s ? se() : null;
    !F || F.locked === !0 || Math.abs(Number(F.roll_deg ?? F.rot_deg ?? 0)) <= 1e-9 || (F.roll_deg = 0, P(), G(), le(), E(), z(), b.preventDefault());
  }
  return {
    connect(b) {
      ({
        applySpaceMode: p,
        cameraFrustumLength: O,
        cameraShoots: K,
        cameraSphere: H,
        commitAndRefreshNode: G,
        currentSpaceCamera: x,
        cutoutCamera: X,
        editorViewInput: V,
        forceCursorTool: re,
        getFrameViewRect: U,
        hasCamera: Z,
        hasSpaceContent: T,
        hideTooltip: ue,
        isCameraSelected: B,
        isFreeSpaceView: he,
        isShotItem: ne,
        leaveFrameView: me,
        lookingAt: de,
        pushHistory: P,
        requestDraw: z,
        screenPos: oe,
        setSelectedItem: j,
        spaceScale: fe,
        spaceViewState: Pe,
        stopTimelinePlayback: ie,
        syncFrameRollKnob: E,
        syncViewToggleState: ee,
        transitionView: ce,
        turnViewTo: ge,
        updateCursor: _e,
        updateSelectionMenu: I,
        updateSidePanel: le,
        worldGizmoPointer: y
      } = b);
    },
    addCutoutFrame: Y,
    addStudioCamera: S,
    deleteStudioCamera: w,
    setShotAspect: D,
    clearCutoutFrame: k,
    applyCutoutAspectCustom: W,
    rotateCutoutAspect90: Q,
    syncCutoutShot: ae,
    getActiveCutoutShot: se,
    startCameraPress: R,
    applySharedRollInteractionPoint: we,
    onFrameRollKnobPointerDown: ye,
    onFrameRollKnobPointerMove: h,
    finishKnobRoll: $,
    onFrameRollKnobDoubleClick: C
  };
}
function BN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: m,
    videoTransportEl: _
  } = e;
  let g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne = null;
  function me(w) {
    if (n.mode = "pano", !w) return;
    p();
    const D = T().distance;
    n.viewYaw = $t(w.yaw_deg), n.viewPitch = Ee(w.pitch_deg, -89.9, 89.9), n.viewFov = Ee(w.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...w.position], moved: !0 }), n.viewDistance = D, d.backgroundDirty = !0;
  }
  function de() {
    var be, ye, h, $, C;
    if (!r) return null;
    const w = (be = r.getBoundingClientRect) == null ? void 0 : be.call(r), D = Number((w == null ? void 0 : w.width) || 0) > 0 ? r.width / w.width : 1, k = Number((w == null ? void 0 : w.height) || 0) > 0 ? r.height / w.height : 1;
    d.frameCanvasScale = Math.min(D, k);
    let N = 24, A = 24;
    const W = Math.max(N + 1, r.width - 24);
    let Q = Math.max(A + 1, r.height - 24);
    const ae = (ye = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : ye.call(f), L = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let se = 24;
    ae && w && ae.width > 0 && ae.height > 0 && (se = Math.max(se, (ae.right - w.left) * D + Yf)), L && w && L.width > 0 && L.height > 0 && (($ = m.frameRail) == null ? void 0 : $.visible) === !0 && (se = Math.max(se, (w.right - L.left) * D + Yf)), N = Math.max(N, se);
    const ve = Math.min(W, r.width - se);
    let we = 24;
    const pe = (C = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : C.call(a);
    if (pe && w && pe.width > 0 && pe.height > 0 && (we = Math.max(we, (pe.bottom - w.top) * k + sc)), [l, _].forEach((b) => {
      var q;
      if (!b || !w) return;
      const F = getComputedStyle(b);
      if (F.display === "none" || F.visibility === "hidden" || Number(F.opacity) <= 0) return;
      const M = (q = b.getBoundingClientRect) == null ? void 0 : q.call(b);
      !M || M.width <= 0 || M.height <= 0 || (we = Math.max(we, (w.bottom - M.top) * k + sc));
    }), o && w) {
      const b = getComputedStyle(o);
      b.display !== "none" && b.visibility !== "hidden" && Number(b.opacity) > 0 && (we = Math.max(we, (SP + sc) * k));
    }
    return A = Math.max(A, we), Q = Math.max(A + 1, Math.min(Q, r.height - we)), {
      x: N,
      y: A,
      w: Math.max(1, ve - N),
      h: Math.max(1, Q - A)
    };
  }
  function P(w = H()) {
    if (!w || !r) return null;
    const D = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Kb(D, w, ou * _i(D, w));
  }
  function z(w = H()) {
    const D = P(w);
    return D ? { x: D.x, y: D.y, w: D.w, h: D.h } : null;
  }
  function oe() {
    return u && !!H();
  }
  function j(w, D) {
    const k = H();
    if (!k || k.locked === !0) return !1;
    const N = Number(D) > 0, A = vh(k, D);
    if (!A) return !1;
    if (N) {
      const W = ou * _i(
        d.frameSafeRect || { w: r.width, h: r.height },
        A
      ), Q = Lu({ width: r.width, height: r.height }, W);
      if (Q.halfW < r.width * 0.5 - 1e-6 || Q.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return k.hFOV_deg = A.hFOV_deg, k.vFOV_deg = A.vFOV_deg, fe(), he(), !0;
  }
  function fe() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, V(), O(), he());
    }, 180);
  }
  function Pe() {
    return t && n.mode === "frame" && G();
  }
  function ie() {
    const w = H(), D = P(w);
    return w && D ? fm(w, D, { width: r.width, height: r.height }) : null;
  }
  function E() {
    var w;
    return ((w = K()) == null ? void 0 : w.radius) || er;
  }
  function ee(w) {
    const { position: D, yaw_deg: k, pitch_deg: N, roll_deg: A, hFOV_deg: W } = w.shot;
    return { position: D, yaw_deg: k, pitch_deg: N, roll_deg: A, hFOV_deg: W, distance: E() };
  }
  function ce(w, D) {
    const { rect: k } = w;
    return i.pickSurface(U(w.shot), D.x - k.x, D.y - k.y, k.w, k.h);
  }
  function ge(w, D, k) {
    return Lc(D, ce(w, k), null, Z());
  }
  function _e(w) {
    return JSON.stringify([ee(w), w.rect]);
  }
  function I(w) {
    const D = H();
    D.position = [...w.position], D.yaw_deg = w.yaw_deg, D.pitch_deg = w.pitch_deg;
  }
  function le(w, D) {
    const k = H();
    !k || c || k.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: k,
      last: w,
      start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
      changed: !1
    }, B(w), r.setPointerCapture(D));
  }
  function y(w, D, k) {
    const N = ie();
    if (!N || c) return;
    const A = ee(N);
    n.interaction = w === "orbit" ? { kind: "frame_orbit", last: D, pivot: ge(N, A, D), changed: !1 } : { kind: "frame_pan", last: D, depth: Qh(A, Z()), changed: !1 }, B(D), r.setPointerCapture(k);
  }
  function v(w, D) {
    const k = ie();
    if (!k) return;
    const N = ee(k), A = D.x - w.last.x, W = D.y - w.last.y;
    I(w.kind === "frame_pan" ? nm(N, A, W, k.rect.w, k.rect.h, w.depth) : tm(N, A, W, r.height, w.pivot)), w.changed = w.changed || A !== 0 || W !== 0, w.last = D, re({ localOnly: !0, cause: "frame_view" });
  }
  function R(w, D) {
    const k = ie();
    if (!k || c) return;
    const N = ee(k), A = performance.now(), W = { x: w.x, y: w.y, time: A, key: i.contentRevision(), view: _e(k) };
    if (!em(ne, W)) {
      const Q = ce(k, w);
      ne = { ...W, cost: performance.now() - A, hit: Q };
    }
    I(rm(N, Lc(N, ne.hit, null, Z()), D, Z())), ne.view = _e(ie() ?? k), ne.wheelTime = A, fe(), he(), re({ localOnly: !0, cause: "frame_view" });
  }
  function Y() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, V(), O(), he(), !0) : !1;
  }
  function S() {
    const w = n.interaction;
    if (!(w != null && w.shot) || !w.start || w.kind !== "pan_frame" && w.kind !== "roll_frame") return !1;
    const D = w.kind === "roll_frame";
    return w.kind === "pan_frame" ? (w.shot.yaw_deg = w.start.yaw_deg, w.shot.pitch_deg = w.start.pitch_deg) : w.shot.roll_deg = w.start.roll_deg, D && x(), n.interaction = null, X(), ue(), he(), B(n.pointerPos), re({ localOnly: !0 }), !0;
  }
  return {
    connect(w) {
      ({
        applySpaceMode: g,
        cancelViewTransition: p,
        commitAndRefreshNode: O,
        contentSphere: K,
        getActiveCutoutShot: H,
        hasSpaceContent: G,
        hideTooltip: x,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: V,
        requestDraw: re,
        shotViewCamera: U,
        spaceScale: Z,
        spaceViewState: T,
        syncViewToggleState: ue,
        updateCursor: B,
        updateSidePanel: he
      } = w);
    },
    leaveFrameView: me,
    measureFrameSafeRect: de,
    getFrameViewLayout: P,
    getFrameViewRect: z,
    supportsFramePainting: oe,
    zoomFrameViewAt: j,
    isFreeFrameView: Pe,
    frameContext: ie,
    frameViewDistance: E,
    frameSpaceView: ee,
    frameTarget: ge,
    startPanFrame: le,
    startFrameDrag: y,
    dragFrame: v,
    zoomFrameAt: R,
    flushFrameWheelCommit: Y,
    cancelFrameCameraGesture: S
  };
}
function YN(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re = 0;
  function U() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function Z() {
    return String(U() || "") === "lasso_fill";
  }
  function T() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ue(I, le) {
    const y = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function B(I) {
    const le = String(I || "").trim();
    return le === "eraser" ? Ar : Pn[le] ? le : t.activeBrushPresetId || Ar;
  }
  function he() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (T() || V());
  }
  function ne() {
    var I;
    return he() && ((I = t.pointerPos) == null ? void 0 : I.inside) === !0;
  }
  function me(I, le = !0) {
    const y = Number((I == null ? void 0 : I.x) || 0), v = Number((I == null ? void 0 : I.y) || 0), R = le !== !1, Y = t.pointerPos || { x: 0, y: 0, inside: !1 }, S = Y.inside !== R || Math.abs(Y.x - y) > 0.01 || Math.abs(Y.y - v) > 0.01;
    return t.pointerPos = { x: y, y: v, inside: R }, S;
  }
  function de() {
    var N, A;
    if (!ne()) return null;
    const I = t.primaryTool === "mask" ? "mask" : "paint", le = I === "mask" ? t.maskTool : t.paintTool, y = B(le), v = Pn[y] || Pn[Ar], R = Number(t.brushSizes[y] ?? 10), Y = Math.max(1, R) * Math.max(0.1, Number(v.sizeScale ?? 1)), S = Math.max(3, Y * 0.5), w = I === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Tn(t.paintColor), D = I === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), k = I === "mask" ? 0.95 : le === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: I,
      toolKind: le,
      preset: v,
      radius: S,
      fillStyle: ur(w, D),
      strokeStyle: ur(w, k),
      x: Number(((N = t.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((A = t.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: S,
      hotspotY: S
    };
  }
  function P() {
    var W, Q, ae;
    const I = de();
    if (!r) return;
    if (!I) {
      r.style.display = "none";
      return;
    }
    let le = I.radius * 2, y = I.radius * 2, v = "999px", R = 0, Y = I.fillStyle, S = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const D = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let N = Number(I.hotspotX ?? le * 0.5), A = Number(I.hotspotY ?? y * 0.5);
    if (I.toolKind === "lasso_fill")
      le = Ys, y = Ys, v = "0", S = "0", w = "none", N = kP, A = MP, Y = OP(I.fillStyle, k, D);
    else if (I.layerKind === "mask")
      Y = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (I.toolKind === "marker") {
      const L = Math.max(1, Number(((W = I.preset) == null ? void 0 : W.aspect) ?? 1));
      le = Math.max(10, I.radius * 2 * L), y = Math.max(6, I.radius * 2), v = `${Math.min(6, y * 0.42)}px`, R = Number(((ae = (Q = I.preset) == null ? void 0 : Q.angle) == null ? void 0 : ae.value) || 0) * wi;
    } else I.toolKind === "brush" ? Y = `radial-gradient(circle at 50% 50%, ${I.strokeStyle} 0%, ${I.fillStyle} 45%, rgba(0,0,0,0) 100%)` : I.toolKind === "eraser" && (Y = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = v, r.style.border = S, r.style.boxShadow = w, r.style.background = Y, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(I.x - N)}px, ${Math.round(I.y - A)}px) rotate(${R}deg)`;
  }
  function z() {
    var we;
    if (!n || !i) return;
    const I = t.primaryTool === "mask" ? "mask" : "paint", le = I === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const y = B(le), v = Pn[y] || Pn[Ar], R = Number(t.brushSizes[y] ?? 10), Y = Math.max(1, R) * Math.max(0.1, Number(v.sizeScale ?? 1)), S = Math.max(6, Y * 0.5), w = le === "eraser", D = I === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Tn(t.paintColor), k = I === "mask" ? ur(D, 0.22) : w ? "rgba(255,255,255,0.14)" : ur(D, Ee(Math.max(0.18, Number(D.a ?? 1) * 0.34), 0.18, 0.56)), N = I === "mask" ? ur(D, 0.96) : w ? "rgba(255,255,255,0.72)" : ur(D, Ee(Math.max(0.56, Number(D.a ?? 1) * 0.96), 0.56, 1));
    let A = S * 2, W = S * 2, Q = "999px", ae = 0, L = k;
    const se = "rgba(222, 222, 222, 0.72)", ve = "rgba(52, 52, 52, 0.72)";
    if (I === "mask")
      L = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const pe = Math.max(1, Number((v == null ? void 0 : v.aspect) ?? 1));
      A = Math.max(16, S * 2 * pe), W = Math.max(10, S * 2), Q = `${Math.min(8, W * 0.42)}px`, ae = Number(((we = v == null ? void 0 : v.angle) == null ? void 0 : we.value) || 0) * wi;
    } else le === "brush" ? L = `radial-gradient(circle at 50% 50%, ${N} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (A = Math.max(18, S * 1.8), W = A, L = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : w && (L = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(A)}px`, i.style.height = `${Math.round(W)}px`, i.style.borderRadius = Q, i.style.background = L, i.style.border = `1px solid ${se}`, i.style.boxShadow = `0 0 0 1px ${ve}`, i.style.transform = `rotate(${ae}deg)`, re && (clearTimeout(re), re = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function oe() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), re && clearTimeout(re), re = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), re = 0;
    }, 180));
  }
  function j(I, le, y, v) {
    const R = B(le), Y = Pn[R] || Pn[Ar], S = t.brushSizes[R] ?? 10, w = Math.max(1, S) * Math.max(0.1, Y.sizeScale ?? 1), D = ue(v, w), k = y.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), N = {
      id: Hi(I),
      actionGroupId: Hi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: le,
      size: w,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: D.radiusModel,
      radiusValue: D.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((A) => ({ ...A })),
        points: k.map((A) => ({ ...A }))
      }
    };
    return Bf(N, Y), t.mode, Number(Y.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function fe(I, le, y, v) {
    const R = y.map((D) => ({
      ...D,
      t: Number((D == null ? void 0 : D.t) || 0),
      widthScale: Number.isFinite(Number(D == null ? void 0 : D.widthScale)) ? Math.max(0, Number(D.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(D == null ? void 0 : D.pressureLike)) ? Math.max(0, Number(D.pressureLike)) : 1
    })), Y = B(le), S = Pn[Y] || Pn[Ar], w = {
      id: Hi(I),
      actionGroupId: Hi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: R.map((D) => ({ ...D }))
      }
    };
    return Bf(w, S), t.mode, Number(S.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Pe(I) {
    const le = o.painting || (o.painting = ao(null)), y = le[I] || (le[I] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function ie(I, le, y = performance.now()) {
    let v;
    if (t.mode === "frame") {
      const k = f();
      if (!k || (v = X(le, k, y), !v)) return !1;
    } else
      v = x(le, y);
    if (!v) return !1;
    const R = I.stroke.geometry.rawPoints || I.stroke.geometry.points, Y = I.stroke.geometry.points, S = R[R.length - 1];
    if (S) {
      const k = Math.abs(Number(v.u ?? v.x ?? 0) - Number(S.u ?? S.x ?? 0)), N = Math.abs(Number(v.v ?? v.y ?? 0) - Number(S.v ?? S.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    const w = {
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    R.push({ ...w }), Y.push({ ...w });
    const D = m(I);
    if (D) {
      const k = t.paintEngine.ensureTarget(D);
      t.paintEngine.appendStrokePoint(k, Number(w.u ?? 0), Number(w.v ?? 0), I.stroke);
    }
    return !0;
  }
  function E(I, le, y = performance.now()) {
    var S, w;
    let v;
    if (t.mode === "frame") {
      const D = f();
      if (!D) return !1;
      v = X(le, D, y);
    } else
      v = x(le, y);
    const R = (w = (S = I == null ? void 0 : I.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.points;
    if (!v || !Array.isArray(R)) return !1;
    const Y = R[R.length - 1];
    if (Y) {
      const D = Math.abs(Number(v.u ?? v.x ?? 0) - Number(Y.u ?? Y.x ?? 0)), k = Math.abs(Number(v.v ?? v.y ?? 0) - Number(Y.v ?? Y.y ?? 0));
      if (D < 15e-4 && k < 15e-4) return !1;
    }
    return R.push({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ee(I) {
    var pe, be, ye, h, $;
    const le = (I == null ? void 0 : I.stroke) || null;
    if (!le || (I == null ? void 0 : I.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    G();
    const y = m(), v = c(y.width, y.height);
    if (!H(v, le, { w: y.width, h: y.height })) return !1;
    const R = ((be = (pe = v.ctx) == null ? void 0 : pe.getImageData(0, 0, y.width, y.height)) == null ? void 0 : be.data) || null;
    if (!R) return !1;
    const Y = new Map(g().map((C) => [String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim(), C ? { ...C } : null])), S = [], w = [], D = [...p().filter((C) => String((C == null ? void 0 : C.layerKind) || "paint") !== "paint")];
    let k = !1, N = _().reduce((C, b) => Math.max(C, Number((b == null ? void 0 : b.z_index) || 0)), -1) + 1;
    function A(C, b, F, M = 8) {
      let q = b, te = F, Se = -1, xe = -1;
      for (let Ne = 0; Ne < F; Ne += 1)
        for (let Te = 0; Te < b; Te += 1)
          C[(Ne * b + Te) * 4 + 3] <= M || (Te < q && (q = Te), Ne < te && (te = Ne), Te > Se && (Se = Te), Ne > xe && (xe = Ne));
      return Se < q || xe < te ? null : { minX: q, minY: te, maxX: Se, maxY: xe };
    }
    const W = A(R, y.width, y.height, 8);
    if (!W) return !1;
    function Q(C, b) {
      return !C || !b ? !1 : !(C.maxX < b.minX || b.maxX < C.minX || C.maxY < b.minY || b.maxY < C.minY);
    }
    function ae(C, b) {
      const F = d((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "", "paint", b);
      if (!F) return null;
      const M = F.centerUv.u - F.halfW, q = F.centerUv.u + F.halfW, te = F.centerUv.v - F.halfH, Se = F.centerUv.v + F.halfH, xe = y.width, Ne = y.height;
      return {
        minX: Math.floor((M % 1 + 1) % 1 * xe),
        maxX: Math.ceil((q % 1 + 1) % 1 * xe),
        minY: Math.floor(Ee(te, 0, 1) * Ne),
        maxY: Math.ceil(Ee(Se, 0, 1) * Ne),
        wraps: q - M >= 1 || M < 0 || q > 1
      };
    }
    function L(C) {
      const b = (C == null ? void 0 : C.bbox) || null;
      if (!b) return null;
      const F = (C == null ? void 0 : C.transform) || {}, M = y.width, q = y.height, te = Number(b.u0 || 0) + Number(F.du || 0), Se = Number(b.u1 || 0) + Number(F.du || 0), xe = Number(b.v0 || 0) + Number(F.dv || 0), Ne = Number(b.v1 || 0) + Number(F.dv || 0);
      return {
        minX: Math.floor((te % 1 + 1) % 1 * M),
        maxX: Math.ceil((Se % 1 + 1) % 1 * M),
        minY: Math.floor(Ee(xe, 0, 1) * q),
        maxY: Math.ceil(Ee(Ne, 0, 1) * q),
        wraps: Se - te >= 1 || te < 0 || Se > 1
      };
    }
    function se(C) {
      return C ? C.wraps ? Q(W, { minX: 0, maxX: C.maxX, minY: C.minY, maxY: C.maxY }) || Q(W, { minX: C.minX, maxX: y.width - 1, minY: C.minY, maxY: C.maxY }) : Q(W, C) : !0;
    }
    function ve(C) {
      if (!C) return { touched: !1, canvas: null };
      const b = c(y.width, y.height, { readback: !0 });
      b.ctx.drawImage(C, 0, 0);
      const F = b.ctx.getImageData(0, 0, y.width, y.height);
      b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(v.canvas, 0, 0), b.ctx.restore();
      const M = b.ctx.getImageData(0, 0, y.width, y.height);
      for (let q = 0; q < y.width * y.height; q += 1) {
        if (R[q * 4 + 3] <= 8) continue;
        const Se = F.data[q * 4 + 3], xe = M.data[q * 4 + 3];
        if (Se > xe)
          return { touched: !0, canvas: b.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function we(C, b, F) {
      const M = Number(F == null ? void 0 : F.z_index), q = l(C, b, F).map((te, Se) => ({
        ...te,
        z_index: Number.isFinite(M) ? M + Se * 1e-3 : N + Se * 1e-3
      }));
      return q.length && (N = Math.max(N, ...q.map((te) => Number((te == null ? void 0 : te.z_index) || 0))) + 1), q;
    }
    for (const C of g()) {
      const b = String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim();
      if (!b) continue;
      const F = O(b, "paint");
      if (!se(ae(C, F))) {
        w.push(C), S.push(...F);
        continue;
      }
      const M = ((h = (ye = t.paintEngine) == null ? void 0 : ye.getGroupTarget) == null ? void 0 : h.call(ye, b)) || null, q = (($ = M == null ? void 0 : M.committedPaint) == null ? void 0 : $.canvas) || null;
      if (!q) {
        w.push(C), S.push(...F);
        continue;
      }
      const te = ve(q);
      if (!te.touched || !te.canvas) {
        w.push(C), S.push(...F);
        continue;
      }
      k = !0;
      const Se = we(te.canvas, "paint", Y.get(b) || C || {});
      D.push(...Se);
    }
    for (const C of p().filter((b) => String((b == null ? void 0 : b.layerKind) || "paint") === "paint")) {
      if (!se(L(C))) {
        D.push(C);
        continue;
      }
      const b = a(C, null);
      if (!b) {
        D.push(C);
        continue;
      }
      const F = ve(b);
      if (!F.touched || !F.canvas) {
        D.push(C);
        continue;
      }
      k = !0;
      const M = we(F.canvas, "paint", C);
      D.push(...M);
    }
    return k ? (o.painting.paint.strokes = S, o.painting.groups = w.sort((C, b) => Number((C == null ? void 0 : C.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), o.painting.raster_objects = D.sort((C, b) => Number((C == null ? void 0 : C.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ce(I) {
    var S, w, D, k, N;
    if ((((w = (S = I.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.rawPoints) || ((k = (D = I.stroke) == null ? void 0 : D.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      _e(I);
      const A = m(I);
      A && (String(((N = I.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(A) : t.paintEngine.commitActiveStroke(I.stroke, A)), I._hasCommittedSegments = !0;
    }
    const y = I.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = j(I.layerKind, y.toolKind, [], v);
    R.actionGroupId = y.actionGroupId, I.stroke = R;
    const Y = m(I);
    Y && t.paintEngine.beginStroke(R, Y);
  }
  function ge(I) {
    var S, w;
    if ((((w = (S = I.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      _e(I);
      const D = m(I);
      D && t.paintEngine.commitActiveStroke(I.stroke, D), I._hasCommittedSegments = !0;
    }
    const y = I.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = fe(I.layerKind, y.toolKind, [], v);
    R.actionGroupId = y.actionGroupId, I.stroke = R;
    const Y = m(I);
    Y && t.paintEngine.beginStroke(R, Y);
  }
  function _e(I) {
    var Y, S, w, D;
    const le = ((Y = I == null ? void 0 : I.stroke) == null ? void 0 : Y.geometry) || null;
    if (!le) return !1;
    const y = String(((S = I == null ? void 0 : I.stroke) == null ? void 0 : S.toolKind) || "pen");
    if (I.layerKind === "paint" && y === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = K(le.rawPoints || le.points || [], I.stroke.targetSpace, !0)), ee(I);
    const v = I.layerKind === "paint" && y !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (v && u((w = I.stroke) == null ? void 0 : w.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
    const R = le.rawPoints || le.points || [];
    return R.length < 1 ? !1 : (le.processedPoints = K(R, I.stroke.targetSpace, !0), v && u((D = I.stroke) == null ? void 0 : D.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
  }
  return {
    connect(I) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: m,
        getDisplayListObjects: _,
        getPaintingGroupList: g,
        getRasterObjectList: p,
        getStrokeGroupStrokes: O,
        processFreehandPoints: K,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: G,
        screenPosToErpPoint: x,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: V
      } = I);
    },
    isActiveLassoTool: Z,
    supportsErpPainting: T,
    getBrushPresetIdForTool: B,
    isPaintCursorEnabled: he,
    isActivePaintCursorVisible: ne,
    setPointerPos: me,
    syncPaintCursorElement: P,
    showPaintSizePreview: z,
    hidePaintSizePreview: oe,
    buildFreehandStrokeRecord: j,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: Pe,
    appendPaintPoint: ie,
    appendLassoPoint: E,
    _segmentFrameStroke: ce,
    _segmentFrameLassoFill: ge,
    commitPaintInteraction: _e
  };
}
function qN(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, c, d, u, f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T;
  function ue(P) {
    var oe;
    if (n && t.mode === "frame") {
      const j = a(), fe = l(j);
      if (!j || !fe || !(Number((P == null ? void 0 : P.x) || 0) >= Number(fe.x || 0) && Number((P == null ? void 0 : P.x) || 0) <= Number(fe.x || 0) + Number(fe.w || 0) && Number((P == null ? void 0 : P.y) || 0) >= Number(fe.y || 0) && Number((P == null ? void 0 : P.y) || 0) <= Number(fe.y || 0) + Number(fe.h || 0))) return null;
      const ie = re(P, j, performance.now()), E = ie ? o(ie) : null;
      if (E)
        for (const ce of s()) {
          if (!H(ce)) continue;
          const ge = T(ce, E);
          if (ge && Number(ge.x) >= 0 && Number(ge.x) <= 1 && Number(ge.y) >= 0 && Number(ge.y) <= 1) {
            const _e = V(ce);
            if (_e != null && _e.visible) return { item: ce, geom: _e };
          }
        }
      const ee = c(!1).slice().sort((ce, ge) => Number((ge == null ? void 0 : ge.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0));
      for (const ce of ee) {
        if (ce.type === "strokeGroup") {
          const I = f(X("paint", ce.actionGroupId || ce.id || ""));
          if (!I) continue;
          const le = V(I);
          if (!(le != null && le.visible)) continue;
          const y = Array.isArray(le.strokePaths) ? le.strokePaths : [];
          for (const v of y) {
            const R = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
            if (!R.length) continue;
            if (v.closed && R.length >= 3 && Kr(P, R)) return { item: I, geom: le };
            const Y = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
            for (let S = 0; S < R.length - 1; S += 1)
              if (uc(P, R[S], R[S + 1]) <= Y * Y) return { item: I, geom: le };
            if (R.length === 1 && Ro(P, R[0]) <= Y * Y) return { item: I, geom: le };
          }
          continue;
        }
        if (ce.type === "rasterObject") {
          const I = d(x(((oe = ce.item) == null ? void 0 : oe.id) || ce.id || ""));
          if (!I) continue;
          const le = V(I);
          if (m(I, le, P, ie)) return { item: I, geom: le };
          continue;
        }
        const ge = ce.item;
        if (!ge || !H(ge) || !E) continue;
        const _e = T(ge, E);
        if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
          const I = V(ge);
          if (I != null && I.visible) return { item: ge, geom: I };
        }
      }
      return null;
    }
    const z = [
      ...c(!1).slice().sort((j, fe) => Number((fe == null ? void 0 : fe.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)).map((j) => {
        var fe;
        return j.type === "strokeGroup" ? f(X("paint", j.actionGroupId || j.id || "")) : j.type === "rasterObject" ? d(x(((fe = j.item) == null ? void 0 : fe.id) || j.id || "")) : j.item;
      }).filter(Boolean),
      ...n ? s().filter((j) => K(j)) : []
    ];
    for (const j of z) {
      if (G(j)) {
        const Pe = V(j);
        if (!(Pe != null && Pe.visible)) continue;
        const ie = Array.isArray(Pe.strokePaths) ? Pe.strokePaths : [];
        for (const E of ie) {
          const ee = Array.isArray(E == null ? void 0 : E.points) ? E.points : [];
          if (!ee.length) continue;
          if (E.closed && ee.length >= 3 && Kr(P, ee)) return { item: j, geom: Pe };
          const ce = Math.max(8, Number((E == null ? void 0 : E.lineWidth) || 0) * 0.5 + 6);
          for (let ge = 0; ge < ee.length - 1; ge += 1)
            if (uc(P, ee[ge], ee[ge + 1]) <= ce * ce) return { item: j, geom: Pe };
          if (ee.length === 1 && Ro(P, ee[0]) <= ce * ce) return { item: j, geom: Pe };
        }
        continue;
      }
      if (O(j)) {
        const Pe = V(j);
        if (!(Pe != null && Pe.visible)) continue;
        if (m(j, Pe, P)) return { item: j, geom: Pe };
        continue;
      }
      const fe = V(j);
      if (fe.visible && Kr(P, fe.corners))
        return { item: j, geom: fe };
    }
    return null;
  }
  function B(P, z, oe = null) {
    if (!P || !P.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (H(oe)) return Bc(P, z);
    if (P.kind === "strokeGroup") {
      const j = P.corners.findIndex((Pe) => Ro(Pe, z) <= 121);
      if (j >= 0) {
        const Pe = P.corners[j], ie = Pe.x - P.center.x, E = Pe.y - P.center.y, ee = ie * E >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: j, cursor: ee };
      }
      const fe = Array.isArray(P.strokePaths) ? P.strokePaths : [];
      for (const Pe of fe) {
        const ie = Array.isArray(Pe == null ? void 0 : Pe.points) ? Pe.points : [];
        if (Pe.closed && ie.length >= 3 && Kr(z, ie)) return { kind: "move", cursor: "default" };
        const E = Math.max(8, Number((Pe == null ? void 0 : Pe.lineWidth) || 0) * 0.5 + 6);
        for (let ee = 0; ee < ie.length - 1; ee += 1)
          if (uc(z, ie[ee], ie[ee + 1]) <= E * E) return { kind: "move", cursor: "default" };
      }
      return Kr(z, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (P.kind === "rasterObject") {
      const j = P.corners.findIndex((fe) => Ro(fe, z) <= 121);
      if (j >= 0) {
        const fe = P.corners[j], Pe = fe.x - P.center.x, ie = fe.y - P.center.y, E = Pe * ie >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: j, cursor: E };
      }
      return Kr(z, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return gS(P, z, {
      edges: i === "cutout" || K(oe),
      resize: !(K(oe) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function he(P, z) {
    return {
      x0: Math.min(Number((P == null ? void 0 : P.x) || 0), Number((z == null ? void 0 : z.x) || 0)),
      y0: Math.min(Number((P == null ? void 0 : P.y) || 0), Number((z == null ? void 0 : z.y) || 0)),
      x1: Math.max(Number((P == null ? void 0 : P.x) || 0), Number((z == null ? void 0 : z.x) || 0)),
      y1: Math.max(Number((P == null ? void 0 : P.y) || 0), Number((z == null ? void 0 : z.y) || 0))
    };
  }
  function ne(P, z) {
    return !!P && !!z && Number(z.x) >= Number(P.x0) && Number(z.x) <= Number(P.x1) && Number(z.y) >= Number(P.y0) && Number(z.y) <= Number(P.y1);
  }
  function me(P, z) {
    if (!P || !(z != null && z.visible) || !Array.isArray(z.corners)) return !1;
    if (z.corners.some((fe) => ne(P, fe))) return !0;
    const oe = (Number(P.x0) + Number(P.x1)) * 0.5, j = (Number(P.y0) + Number(P.y1)) * 0.5;
    return !!Kr({ x: oe, y: j }, z.corners);
  }
  function de(P) {
    if (Z(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? U("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? U("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? U("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? U("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? U("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? U(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? U("grabbing") : U("default");
      return;
    }
    if (_()) {
      U("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        U(_P);
        return;
      }
      if (t.primaryTool !== "cursor") {
        U("default");
        return;
      }
      U("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      U("default");
      return;
    }
    if (t.gizmoAxis) {
      U("grab");
      return;
    }
    const z = u(), oe = z ? V(z) : null, j = z ? p(z) : !1, fe = j ? { kind: "none", cursor: "default" } : B(oe, P, z);
    if (!j && fe.kind !== "none") {
      U(fe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && ue(P)) {
      U("default");
      return;
    }
    U(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(P) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: m,
        isActivePaintCursorVisible: _,
        isErpCamera: g,
        isItemLocked: p,
        isRasterObjectItem: O,
        isShotItem: K,
        isStickerItem: H,
        isStrokeGroupItem: G,
        makeRasterObjectSelectionId: x,
        makeStrokeGroupSelectionId: X,
        objectGeom: V,
        screenPosToFrameAsErpPoint: re,
        setCanvasCursor: U,
        syncPaintCursorElement: Z,
        worldDirToFrameLocalPoint: T
      } = P);
    },
    hitObjectAt: ue,
    handleHit: B,
    rectFromPoints: he,
    rectIntersectsGeom: me,
    updateCursor: de
  };
}
function XN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: a,
    state: s,
    studio: l,
    tooltip: c,
    tooltipEl: d,
    type: u,
    uiState: f
  } = e;
  let m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he = !1;
  function ne() {
    return he;
  }
  function me() {
    if (!o) return;
    if (he = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || x() && re()) {
      const E = de();
      he = E.visible, P(E);
      return;
    }
    const j = K(), fe = H();
    if (!j && fe.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Pe = G(), ie = FN({
      type: u,
      selected: j,
      selectedItems: fe,
      selectedKind: Pe,
      geom: fe.length > 1 ? O(fe) : B(j),
      allLocked: m(fe),
      anyLocked: fe.some((E) => U(E)),
      selectedLocked: U(j),
      activeAspect: Z(j) && X() ? ro : Or(j),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: V,
      isStickerHidden: ue,
      canRestoreSelectedToInitial: _,
      iconSet: He,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    P(ie);
  }
  function de() {
    const j = T() && !n.interaction ? p().space : null;
    if (!(j != null && j.gizmo)) return { visible: !1 };
    const fe = g(), Pe = j.stickers.find((ce) => ce.id === n.worldSelectedId), E = (Pe ? Ju(Pe) : [j.gizmo.transform.position]).map((ce) => aa(fe, ce, r.width, r.height)).filter(Boolean), ee = Vv(fe, j.gizmo.transform.position, j.gizmo.mode, r.width, r.height);
    return TN({ corners: E, gizmoBox: ee, gizmoMode: j.gizmo.mode, camera: x(), deletable: l && x() });
  }
  function P(j) {
    var ee, ce;
    if (!j.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = (ge, _e) => DN(j.anchor, ge, _e, r.width, r.height), Pe = Math.max(1, Number(((ee = n.menuSize) == null ? void 0 : ee.w) || 220)), ie = Math.max(1, Number(((ce = n.menuSize) == null ? void 0 : ce.h) || 40)), E = fe(Pe, ie);
    if (!E) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: E.left,
      top: E.top,
      items: j.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const ge = o.getBoundingClientRect(), _e = Math.round(Number((ge == null ? void 0 : ge.width) || 0)) || 220, I = Math.round(Number((ge == null ? void 0 : ge.height) || 0)) || 40;
      n.menuSize = { w: _e, h: I, measured: !0 };
      const le = fe(_e, I);
      le && (f.selectionMenu.left = le.left, f.selectionMenu.top = le.top);
    });
  }
  function z() {
    c.timer && (clearTimeout(c.timer), c.timer = 0), c.target = null, f.tooltip.visible = !1;
  }
  function oe(j) {
    if (!d || !j || !j.isConnected) return;
    const fe = String(j.getAttribute("data-tip") || "").trim();
    if (!fe) return;
    f.tooltip.text = fe, f.tooltip.visible = !0;
    const Pe = j;
    i.requestFrame(() => {
      var S, w;
      if (c.target !== Pe || !d || !(Pe != null && Pe.isConnected)) return;
      const ie = a.getBoundingClientRect(), E = Pe.getBoundingClientRect(), ee = 8, ce = 12, ge = Math.round(Number(((S = d.getBoundingClientRect()) == null ? void 0 : S.width) || 0)) || 100, _e = Math.round(Number(((w = d.getBoundingClientRect()) == null ? void 0 : w.height) || 0)) || 24, I = !!Pe.closest(".pano-floating-left"), le = !!Pe.closest(".pano-frame-rail"), y = !!Pe.closest(".pano-paint-footer") || !!Pe.closest(".pano-paint-color-float");
      let v = "", R = E.left - ie.left + E.width * 0.5 - ge * 0.5, Y = E.top - ie.top - _e - ce;
      if (Pe.closest(".pano-floating-top") && (Y = E.bottom - ie.top + ce), I)
        v = "tool-rail", R = E.right - ie.left + 10, Y = E.top - ie.top + E.height * 0.5 - _e * 0.5, R = Ee(R, ee, Math.max(ee, ie.width - ge - ee)), Y = Ee(Y, ee, Math.max(ee, ie.height - _e - ee));
      else if (le)
        v = "frame-rail", R = E.left - ie.left - ge - 10, Y = E.top - ie.top + E.height * 0.5 - _e * 0.5, R = Ee(R, ee, Math.max(ee, ie.width - ge - ee)), Y = Ee(Y, ee, Math.max(ee, ie.height - _e - ee));
      else if (y) {
        v = "footer";
        const D = Pe.closest(".pano-paint-footer"), k = D ? D.getBoundingClientRect() : E;
        R = k.left - ie.left + k.width * 0.5 - ge * 0.5, Y = k.bottom - ie.top + 5, R = Ee(R, ee, Math.max(ee, ie.width - ge - ee)), Y = Math.max(ee, Y);
      }
      R = Ee(R, ee, Math.max(ee, ie.width - ge - ee)), Y = Math.max(ee, Y), f.tooltip.left = R, f.tooltip.top = Y, f.tooltip.variant = v, f.tooltip.visible = !0;
    });
  }
  return {
    connect(j) {
      ({
        areAllSelectedItemsLocked: m,
        canRestoreSelectedToInitial: _,
        currentSpaceCamera: g,
        editorViewInput: p,
        getMultiSelectionGeom: O,
        getSelected: K,
        getSelectedItems: H,
        getSelectedKind: G,
        isCameraSelected: x,
        isErpCamera: X,
        isExternalSticker: V,
        isFreeSpaceView: re,
        isItemLocked: U,
        isShotItem: Z,
        isSpaceView: T,
        isStickerHidden: ue,
        objectGeom: B
      } = j);
    },
    isWorldMenuShown: ne,
    updateSelectionMenu: me,
    hideTooltip: z,
    showTooltipFor: oe
  };
}
function JN(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: a,
    readOnly: s,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: m,
    type: _,
    viewController: g
  } = e;
  let p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce, ge, _e, I, le, y, v, R, Y, S, w, D, k, N, A, W, Q, ae, L, se, ve, we, pe, be, ye, h, $, C, b, F, M, q, te, Se, xe, Ne, Te, ze, je, We, Ve, J, Ce, Re, Ae, $e, Ge, Ke, tt, lt, zt, Dt, on, On, Ye, jt, yn, _r, jr, nn, wn, Hr, Sr, Bn, ya, fo, po, ho, ba, va, _a, Mi, xt, Yn, ir, mo, Fn, Sa, wa, xa, Gr = null;
  function ka(Oe) {
    m.selection && (m.selection = null, _a());
    const Ie = $e(Oe);
    Gr = Ie, on(Ie, !0), B(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const ke = ye(), bt = be(), ct = ke || bt ? IS(mo(), Oe) : null;
    if (bt && ct) {
      Oe.preventDefault(), ct === "look" ? Hr(Ie, Oe.pointerId) : wn(ct, Ie, Oe.pointerId);
      return;
    }
    if (ct === "look") {
      Oe.preventDefault();
      const qe = Ge(Oe);
      n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, g.startDrag(qe.x, qe.y, Oe.pointerId, performance.now()), xt(Ie), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (ct) {
      Oe.preventDefault(), Sr(ct, Ie, Oe.pointerId);
      return;
    }
    if ((ke || bt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const qe = ce();
        if (!qe || s || qe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: qe,
          last: Ie,
          start: {
            yaw_deg: Number(qe.yaw_deg || 0),
            pitch_deg: Number(qe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const qe = n.mode === "unwrap" ? Ie : Ge(Oe);
        n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, g.startDrag(qe.x, qe.y, Oe.pointerId, performance.now());
      }
      xt(Ie), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (Oe.button !== 0) return;
    if (n.mode === "frame" && (Oe.altKey || Oe.shiftKey) && !s) {
      const qe = ce(), Ue = y(qe);
      if (!qe || qe.locked === !0 || !Ue) return;
      const Ze = Ym({
        frame: Ue,
        point: Ie,
        startRollDeg: Number(qe.roll_deg ?? qe.rot_deg ?? 0),
        shiftKey: Oe.shiftKey,
        altKey: Oe.altKey,
        allowAlt: !0
      });
      if (!Ze) return;
      n.interaction = {
        kind: "roll_frame",
        shot: qe,
        center: Ze.center,
        lastAngle: Ze.lastAngle,
        accumulatedRad: Ze.accumulatedRad,
        rollGesture: Ze,
        start: { roll_deg: Number(qe.roll_deg ?? qe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Ze.source === "alt",
        source: Ze.source
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), ba(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Hr(Ie, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && bo(Oe, Ie);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ya() || fo())) {
      if (!Te()) return;
      Bn();
      const qe = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Ze = n.mode === "frame" && fo() ? ce() : null, qt = { kind: "ERP_GLOBAL" }, kt = Ze ? tt(Ie, Ze, performance.now()) : Ke(Ie, performance.now());
      if (!kt) {
        xt(Ie);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: qe,
        _livePreviewToken: Hi("live"),
        stroke: Ue === "lasso_fill" ? Z(qe, Ue, [kt], qt) : U(qe, Ue, [kt], qt)
      }, we();
      const xr = ge(n.interaction);
      if (xr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, xr), n.interaction.kind === "paint_stroke") {
          const Pi = n.paintEngine.ensureTarget(xr), Ni = Number((kt == null ? void 0 : kt.u) ?? (kt == null ? void 0 : kt.x) ?? 0), Ci = Number((kt == null ? void 0 : kt.v) ?? (kt == null ? void 0 : kt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Pi, Ni, Ci, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, xr);
      xt(Ie), t.setPointerCapture(Oe.pointerId), Ae();
      return;
    }
    const vt = A(), Xe = N(), et = vt.length > 1 ? R(vt) : Xe ? Ne(Xe) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ie, current: Ie }, xt(Ie), t.setPointerCapture(Oe.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && T() && ye() && nn(Oe, Ie) || n.primaryTool === "cursor" && c && F() && kl(Oe, Ie)) return;
    if (vt.length > 1 && (et != null && et.visible)) {
      if ((vt.some((Ue) => h(Ue)) ? { kind: "none" } : L(et, Ie)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: vt.map((Ue) => Ue),
          offset: { x: Ie.x - et.center.x, y: Ie.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: vt.filter((Ue) => M(Ue)).map((Ue) => ({
            id: String(Ue.id || ""),
            yaw_deg: Number(We(Ue).yaw_deg || 0),
            pitch_deg: Number(We(Ue).pitch_deg || 0),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ue);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })()
          })),
          strokeSnapshots: vt.filter((Ue) => q(Ue)).map((Ue) => ({
            id: String(Ue.actionGroupId || Ue.id || ""),
            layerKind: String(Ue.layerKind || "paint"),
            snapshot: cn(Q(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: cn(fe(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ue);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: W(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: vt.filter((Ue) => $(Ue)).map((Ue) => ({
            id: ze(Ue.rasterObjectId || Ue.id || ""),
            snapshot: cn(w().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === ze(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ue);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: S(Ue)
          }))
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Xe && (et != null && et.visible)) {
      const qe = h(Xe) ? { kind: "none" } : L(et, Ie, Xe);
      if (qe.kind === "scale") {
        n.interaction = q(Xe) ? {
          kind: "scale_stroke_group",
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          snapshot: cn(Q(Xe.actionGroupId, Xe.layerKind)),
          frameSnapshot: cn(fe(Xe.actionGroupId, Xe.layerKind)),
          cursor: qe.cursor
        } : $(Xe) ? {
          kind: "scale_raster_object",
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          snapshot: cn(w().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === ze(Xe.rasterObjectId || Xe.id || ""))),
          cursor: qe.cursor
        } : {
          kind: "scale",
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          startHFOV: Number(We(Xe).hFOV_deg || 20),
          startVFOV: Number(We(Xe).vFOV_deg || 20),
          cursor: qe.cursor
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "scale_x" || qe.kind === "scale_y") {
        n.interaction = {
          kind: qe.kind,
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          startHFOV: Number(We(Xe).hFOV_deg || 20),
          startVFOV: Number(We(Xe).vFOV_deg || 20),
          cursor: qe.cursor,
          edge: qe.edge
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "rotate") {
        n.interaction = q(Xe) ? {
          kind: "rotate_stroke_group",
          item: Xe,
          center: et.center,
          startAng: Math.atan2(Ie.y - et.center.y, Ie.x - et.center.x),
          snapshot: cn(Q(Xe.actionGroupId, Xe.layerKind)),
          frameSnapshot: cn(fe(Xe.actionGroupId, Xe.layerKind))
        } : {
          kind: "rotate",
          item: Xe,
          center: et.center,
          startRot: Number(We(Xe).rot_deg || We(Xe).roll_deg || 0),
          startAng: Math.atan2(Ie.y - et.center.y, Ie.x - et.center.x)
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (qe.kind === "move") {
        if (q(Xe)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = ce();
            return Ze ? tt(Ie, Ze, performance.now()) : null;
          })() : Ke(Ie, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Xe,
            startUv: Ue,
            snapshot: cn(Q(Xe.actionGroupId, Xe.layerKind)),
            frameSnapshot: cn(fe(Xe.actionGroupId, Xe.layerKind))
          }, xt(Ie), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if ($(Xe)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = ce();
            return Ze ? tt(Ie, Ze, performance.now()) : null;
          })() : Ke(Ie, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Xe,
            startUv: Ue,
            snapshot: cn(w().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === ze(Xe.rasterObjectId || Xe.id || "")))
          }, xt(Ie), t.setPointerCapture(Oe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Xe,
          offset: { x: Ie.x - et.center.x, y: Ie.y - et.center.y }
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
    }
    const nt = ve(Ie);
    if (nt) {
      const qe = n.selectedId !== nt.item.id;
      if (qe && n.selectedId && (Ve(), de()), On(nt.item), d && qe && (n.cutoutAspectOpen = !1), qe && ir(), Yn(), Ae(), h(nt.item)) {
        xt(Ie);
        return;
      }
      n.interaction = {
        kind: q(nt.item) ? "move_stroke_group" : $(nt.item) ? "move_raster_object" : "move",
        item: nt.item,
        offset: { x: Ie.x - nt.geom.center.x, y: Ie.y - nt.geom.center.y },
        startUv: q(nt.item) || $(nt.item) ? n.mode === "frame" ? (() => {
          const Ue = ce();
          return Ue ? tt(Ie, Ue, performance.now()) : null;
        })() : Ke(Ie, performance.now()) : null,
        snapshot: q(nt.item) ? cn(Q(nt.item.actionGroupId, nt.item.layerKind)) : $(nt.item) ? cn(w().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === ze(nt.item.rasterObjectId || nt.item.id || ""))) : null,
        frameSnapshot: q(nt.item) ? cn(fe(nt.item.actionGroupId, nt.item.layerKind)) : null
      }, xt(Ie), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const qn = !!n.selectedId;
    qn && (Ve(), de()), he(), qn && ir(), Yn(), Ae(), n.mode === "pano" && bo(Oe, Ie);
  }
  function wr(Oe, Ie) {
    return i.gizmoPointer(Oe, P(), Ie.x, Ie.y, t.width, t.height);
  }
  function kl(Oe, Ie) {
    var et;
    const ke = (et = j().space) == null ? void 0 : et.gizmo;
    if (ke && wr("hover", Ie) !== null && wr("down", Ie))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: Si(Dt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), xt(Ie), !0;
    const bt = A(), ct = N(), vt = bt.length > 1 ? bt.some((nt) => h(nt)) ? "none" : L(R(bt), Ie).kind : ct && !h(ct) ? L(Ne(ct), Ie, ct).kind : "none";
    if (vt !== "none" && vt !== "move") return !1;
    const Xe = i.pickSticker(P(), Ie.x, Ie.y, t.width, t.height);
    return u.stickers.some((nt) => nt.id === Xe && nt.placement === "world") ? (n.worldSelectedId !== Xe && (n.selectedId && (Ve(), de()), zt(Xe), ir(), Yn(), ho(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function go(Oe) {
    var bt;
    const ke = !!(n.worldSelectedId || pe()) && n.primaryTool === "cursor" && F() && !!((bt = j().space) != null && bt.gizmo) ? wr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function Ma(Oe, Ie) {
    const ke = wr("move", Ie);
    if (ke && Oe.camera) {
      for (const [ct, vt] of Object.entries(hf(Oe.mode, Oe.base, Oe.start, ke))) pn(u.camera, ct, n.frame, vt);
      po(), Oe.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const bt = u.stickers.find((ct) => ct.id === Oe.id);
    !ke || !bt || (lv(bt, n.frame, hf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, te(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function yo(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (wr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && (Ve(), ne(), ir())), xt(n.pointerPos), Ae();
  }
  function bo(Oe, Ie) {
    if (ye()) {
      const bt = mo().emptyLeft;
      bt && Sr(bt, Ie, Oe.pointerId);
      return;
    }
    const ke = Ge(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, g.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), xt(Ie), t.setPointerCapture(Oe.pointerId);
  }
  function Pa(Oe, Ie) {
    if (!f || !je.playing || (je.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const ct = Pe();
      ct && (Oe.pivot = ee(ct, E(ct), Ie));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const ct = u.stickers.find((vt) => vt.id === Oe.id);
      Oe.camera ? Oe.base = z() : ct && (Oe.base = Si(ct, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const ct = R(Oe.items);
      if (!(ct != null && ct.visible)) return;
      Oe.offset = { x: Ie.x - ct.center.x, y: Ie.y - ct.center.y }, Oe.startCenter = { x: ct.center.x, y: ct.center.y };
      for (const vt of Oe.stickerSnapshots) {
        const Xe = Oe.items.find((nt) => String((nt == null ? void 0 : nt.id) || "") === vt.id), et = Xe ? Ne(Xe) : null;
        et != null && et.visible && (vt.yaw_deg = Number(We(Xe).yaw_deg || 0), vt.pitch_deg = Number(We(Xe).pitch_deg || 0), vt.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const ke = Ne(Oe.item);
    if (!(ke != null && ke.visible)) return;
    const bt = We(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Ie.x - ke.center.x, y: Ie.y - ke.center.y };
      return;
    }
    if (Oe.center = ke.center, Oe.kind === "rotate") {
      Oe.startRot = Number(bt.rot_deg || bt.roll_deg || 0), Oe.startAng = Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)), Oe.startHFOV = Number(bt.hFOV_deg || 20), Oe.startVFOV = Number(bt.vFOV_deg || 20);
  }
  function Na(Oe) {
    var bt, ct, vt, Xe, et, nt, qn, qe, Ue, Ze, qt, kt, xr, Pi, Ni, Ci, Aa, _o, Ia, Ea, Oa, So;
    const Ie = $e(Oe);
    if (on(Ie, !0), !n.interaction) {
      go(Ie), xt(Ie);
      return;
    }
    xt(Ie);
    const ke = n.interaction;
    if (Gr && (Ie.x !== Gr.x || Ie.y !== Gr.y)) {
      const ut = Gr;
      Gr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Pa(ke, ut);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        Ma(ke, Ie);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const ut = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        ut.forEach((gt) => {
          const yt = $e(gt);
          if (n.mode === "frame") {
            const an = ce(), Bt = an ? y(an) : null;
            if (Bt) {
              const Zt = (yt.x - Bt.x) / Math.max(1, Bt.w), It = (yt.y - Bt.y) / Math.max(1, Bt.h);
              if (!(Zt >= 0 && Zt <= 1 && It >= 0 && It <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, O(ke));
            }
          }
          H(ke, yt, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const ut = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        if (ut.forEach((gt) => {
          const yt = $e(gt);
          if (n.mode === "frame") {
            const an = ce(), Bt = an ? y(an) : null;
            if (Bt) {
              const Zt = (yt.x - Bt.x) / Math.max(1, Bt.w), It = (yt.y - Bt.y) / Math.max(1, Bt.h);
              if (!(Zt >= 0 && Zt <= 1 && It >= 0 && It <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, p(ke));
            }
          }
          K(ke, yt, performance.now()) && (pt = !0);
        }), pt) {
          const gt = ge(ke);
          gt && n.paintEngine.updateActiveStroke(ke.stroke, gt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const ut = performance.now(), pt = n.mode === "unwrap" ? Ie : Ge(Oe);
        g.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ut), ke.lastTs = ut, ke.last = pt, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        oe(ke, Ie);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const ut = _r();
        jt(ke.kind === "space_pan" ? nm(ut, Ie.x - ke.last.x, Ie.y - ke.last.y, t.width, t.height, ke.depth) : tm(ut, Ie.x - ke.last.x, Ie.y - ke.last.y, t.height, ke.pivot)), ke.last = Ie;
        return;
      }
      if (ke.kind === "pan_frame") {
        const ut = le(ke.shot);
        if (!ut || !ke.shot) return;
        const pt = Ie.x - ke.last.x, gt = Ie.y - ke.last.y, yt = Xm(ke.shot, {
          dx: pt,
          dy: gt,
          focalPx: ut.focalPx,
          invertX: ((bt = u.ui_settings) == null ? void 0 : bt.invert_view_x) === !0,
          invertY: ((ct = u.ui_settings) == null ? void 0 : ct.invert_view_y) === !0
        });
        ke.shot.yaw_deg = yt.yaw_deg, ke.shot.pitch_deg = yt.pitch_deg, ke.changed = ke.changed || Math.abs(pt) > 0 || Math.abs(gt) > 0, ke.last = Ie, Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        X(ke, Ie, Oe);
        return;
      }
      if (ke.kind === "move") {
        const ut = Ie.x - ke.offset.x, pt = Ie.y - ke.offset.y;
        if (n.mode === "frame" && d) {
          const gt = ce(), yt = y(gt);
          if (!gt || !yt) return;
          const an = {
            x: Ee((ut - yt.x) / Math.max(1, yt.w), 0, 1),
            y: Ee((pt - yt.y) / Math.max(1, yt.h), 0, 1)
          }, Bt = ie(gt, an);
          if (!Bt) return;
          const Zt = Ba(Bt);
          Fn(ke.item, { yaw_deg: Zt.yaw, pitch_deg: Zt.pitch });
        } else if (n.mode === "unwrap") {
          const gt = ae(), yt = Ee((ut - gt.x) / Math.max(gt.w, 1), 0, 1), an = Ee((pt - gt.y) / Math.max(gt.h, 1), 0, 1);
          Fn(ke.item, { yaw_deg: $t(yt * 360 - 180), pitch_deg: Ee(90 - an * 180, -90, 90) });
        } else {
          const gt = lt(ut, pt), yt = Ba(gt);
          Fn(ke.item, { yaw_deg: yt.yaw, pitch_deg: yt.pitch });
        }
        M(ke.item) && te(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const ut = n.mode === "frame" ? (() => {
          const yt = ce();
          return yt ? tt(Ie, yt, performance.now()) : null;
        })() : Ke(Ie, performance.now());
        if (!ut || !ke.startUv) return;
        const pt = yn(Number(ut.u || 0), Number(ke.startUv.u || 0)), gt = Number(ut.v || 0) - Number(ke.startUv.v || 0);
        V((vt = ke.item) == null ? void 0 : vt.actionGroupId, pt, gt, ke.snapshot, (Xe = ke.item) == null ? void 0 : Xe.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const ut = n.mode === "frame" ? (() => {
          const yt = ce();
          return yt ? tt(Ie, yt, performance.now()) : null;
        })() : Ke(Ie, performance.now());
        if (!ut || !ke.startUv) return;
        const pt = yn(Number(ut.u || 0), Number(ke.startUv.u || 0)), gt = Number(ut.v || 0) - Number(ke.startUv.v || 0);
        G(((et = ke.item) == null ? void 0 : et.rasterObjectId) || ((nt = ke.item) == null ? void 0 : nt.id) || "", pt, gt, ke.snapshot) && (Se(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        x(((qn = ke.item) == null ? void 0 : qn.rasterObjectId) || ((qe = ke.item) == null ? void 0 : qe.id) || "", pt, ke.snapshot) && (Se(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const ut = Ie.x - Number(((Ue = ke.offset) == null ? void 0 : Ue.x) || 0), pt = Ie.y - Number(((Ze = ke.offset) == null ? void 0 : Ze.y) || 0);
        let gt = !1, yt = !1, an = !1;
        const Bt = ut - Number(((qt = ke.startCenter) == null ? void 0 : qt.x) || ut), Zt = pt - Number(((kt = ke.startCenter) == null ? void 0 : kt.y) || pt);
        for (const It of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const Lt = (_ === "cutout" ? _e() : v()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(It.id || ""));
          if (!Lt || !M(Lt)) continue;
          const rn = {
            x: Number(((xr = It.center) == null ? void 0 : xr.x) || 0) + Bt,
            y: Number(((Pi = It.center) == null ? void 0 : Pi.y) || 0) + Zt
          };
          if (n.mode === "frame" && d) {
            const Ft = ce(), De = y(Ft);
            if (!Ft || !De) continue;
            const Je = {
              x: Ee((rn.x - De.x) / Math.max(1, De.w), 0, 1),
              y: Ee((rn.y - De.y) / Math.max(1, De.h), 0, 1)
            }, xn = ie(Ft, Je);
            if (!xn) continue;
            const Qt = Ba(xn);
            Fn(Lt, { yaw_deg: Qt.yaw, pitch_deg: Qt.pitch });
          } else if (n.mode === "unwrap") {
            const Ft = ae(), De = Ee((rn.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), Je = Ee((rn.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
            Fn(Lt, { yaw_deg: $t(De * 360 - 180), pitch_deg: Ee(90 - Je * 180, -90, 90) });
          } else {
            const Ft = lt(rn.x, rn.y), De = Ba(Ft);
            Fn(Lt, { yaw_deg: De.yaw, pitch_deg: De.pitch });
          }
          gt = !0;
        }
        for (const It of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const Lt = {
            x: Number(((Ni = It.center) == null ? void 0 : Ni.x) || 0) + Bt,
            y: Number(((Ci = It.center) == null ? void 0 : Ci.y) || 0) + Zt
          }, rn = n.mode === "frame" ? (() => {
            const De = ce();
            return De ? tt(Lt, De, performance.now()) : null;
          })() : Ke(Lt, performance.now()), Ft = It.centerUv || null;
          if (rn && Ft) {
            const De = yn(Number(rn.u || 0), Number(Ft.u || 0)), Je = Number(rn.v || 0) - Number(Ft.v || 0);
            V(It.id, De, Je, It.snapshot, It.layerKind, It.frameSnapshot) && (gt = !0, yt = !0);
          }
        }
        for (const It of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const Lt = {
            x: Number(((Aa = It.center) == null ? void 0 : Aa.x) || 0) + Bt,
            y: Number(((_o = It.center) == null ? void 0 : _o.y) || 0) + Zt
          }, rn = n.mode === "frame" ? (() => {
            const De = ce();
            return De ? tt(Lt, De, performance.now()) : null;
          })() : Ke(Lt, performance.now()), Ft = It.centerUv || null;
          if (rn && Ft) {
            const De = yn(Number(rn.u || 0), Number(Ft.u || 0)), Je = Number(rn.v || 0) - Number(Ft.v || 0);
            G(It.id, De, Je, It.snapshot) && (gt = !0, an = !0);
          }
        }
        gt && (yt ? xe({ rebuildPaintEngine: !1 }) : an ? Se() : te(), Ae({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        re((Ia = ke.item) == null ? void 0 : Ia.actionGroupId, pt, 0, ke.snapshot, (Ea = ke.item) == null ? void 0 : Ea.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let ut = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - Number(ke.startAng || 0)) * wi;
        Oe.shiftKey && (ut = Math.round(ut / 45) * 45), re((Oa = ke.item) == null ? void 0 : Oa.actionGroupId, 1, ut, ke.snapshot, (So = ke.item) == null ? void 0 : So.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ie, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        Fn(ke.item, { hFOV_deg: Ee(ke.startHFOV * pt, 1, 179), vFOV_deg: Ee(ke.startVFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = yi(ke.item)), M(ke.item) && te(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        Fn(ke.item, { hFOV_deg: Ee(ke.startHFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = yi(ke.item)), M(ke.item) && te(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        Fn(ke.item, { vFOV_deg: Ee(ke.startVFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = yi(ke.item)), M(ke.item) && te(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let pt = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - ke.startAng) * wi, gt = ke.startRot - pt;
        Oe.shiftKey && (gt = Math.round(gt / 45) * 45), Fn(ke.item, { [M(ke.item) ? "rot_deg" : "roll_deg"]: gt }), M(ke.item) && te(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ml() {
    var Ie, ke, bt, ct, vt, Xe, et;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, xt(n.pointerPos), Yn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        yo(Oe);
        return;
      }
      if (((Ie = n.interaction) == null ? void 0 : Ie.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        we();
        const nt = me(n.interaction), qn = !!n.interaction._hasCommittedSegments;
        if (nt || qn) {
          xe();
          const qe = String(((bt = n.interaction.stroke) == null ? void 0 : bt.actionGroupId) || "").trim();
          if (qe) {
            const Ze = Y().find((qt) => String((qt == null ? void 0 : qt.actionGroupId) || "") === qe);
            Ze && (Ze.frame = null);
          }
          const Ue = ge(n.interaction);
          Ue && (nt ? String(((ct = n.interaction.stroke) == null ? void 0 : ct.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Re()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), Ve(), de(), ir(), Yn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const qe = ge(n.interaction);
          qe && n.paintEngine.cancelActiveStroke(qe);
        }
      } else if (((vt = n.interaction) == null ? void 0 : vt.kind) === "marquee_select") {
        const nt = J(n.interaction.start, n.interaction.current), qe = [
          ..._ === "cutout" ? I().filter((Ue) => !b(Ue)) : [...v()],
          ...k(),
          ...D()
        ].filter((Ue) => Ce(nt, Ne(Ue)));
        Ye(qe, ((Xe = qe[qe.length - 1]) == null ? void 0 : Xe.id) || null), d && qe.length && (n.cutoutAspectOpen = !1), ir(), Yn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ve(), ne(), ir());
      else if (n.interaction && n.interaction.kind !== "view") {
        let nt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (nt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (nt = !0), nt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : Se()), Ve(), de(), o.setDirtyCanvas(!0, !0), va(), Yn(), Ae();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && se(), we(), Oe && Oe.kind === "view" && jr(() => g.endDrag(performance.now())), Mi(), Yn(), xt(n.pointerPos), Ae();
    }
  }
  function Pl() {
    var Oe, Ie, ke, bt, ct;
    if (!ue()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Ie = n.interaction) == null ? void 0 : Ie.kind) === "world_gizmo") {
        yo(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && jr(() => g.endDrag(performance.now())), ((bt = n.interaction) == null ? void 0 : bt.kind) === "paint_stroke" || ((ct = n.interaction) == null ? void 0 : ct.kind) === "paint_lasso_fill") {
        we();
        const vt = ge(n.interaction);
        vt && n.paintEngine.cancelActiveStroke(vt);
      }
      n.interaction = null, we(), Mi(), xt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Ca(Oe) {
    const Ie = $e(Oe), ke = on(Ie, !0);
    n.interaction || (xt(Ie), ke && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function vo(Oe) {
    if (n.mode === "frame") {
      const Ie = $e(Oe), ke = Ns(Oe);
      ke && Bn(), ke && be() ? Sa(Ie, -ke) : ke && wa(Ie, ke) && Ae({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (B(), ye()) {
        const Ie = Ns(Oe);
        Ie && xa($e(Oe), -Ie);
      } else g.applyWheelEvent(Oe) && Ae({ localOnly: !0, reason: ft.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: p,
        _segmentFrameStroke: O,
        appendLassoPoint: K,
        appendPaintPoint: H,
        applyRasterObjectOffset: G,
        applyRasterObjectTransform: x,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: V,
        applyStrokeGroupTransform: re,
        buildFreehandStrokeRecord: U,
        buildLassoFillStrokeRecord: Z,
        cameraShoots: T,
        cancelFrameCameraGesture: ue,
        cancelViewTransition: B,
        clearSelection: he,
        commitAndRefreshNode: ne,
        commitPaintInteraction: me,
        commitState: de,
        currentSpaceCamera: P,
        cutoutCamera: z,
        dragFrame: oe,
        editorViewInput: j,
        ensureGroupFrame: fe,
        frameContext: Pe,
        frameLocalPointToWorldDir: ie,
        frameSpaceView: E,
        frameTarget: ee,
        getActiveCutoutShot: ce,
        getActivePaintTargetDescriptor: ge,
        getCutoutSelectableItems: _e,
        getCutoutSelectableItemsForHit: I,
        getFrameViewLayout: le,
        getFrameViewRect: y,
        getList: v,
        getMultiSelectionGeom: R,
        getPaintingGroupList: Y,
        getRasterObjectCenterUv: S,
        getRasterObjectList: w,
        getSelectableRasterObjectItems: D,
        getSelectableStrokeGroupItems: k,
        getSelected: N,
        getSelectedItems: A,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: Q,
        getUnwrapRect: ae,
        handleHit: L,
        hideTooltip: se,
        hitObjectAt: ve,
        invalidateLivePaintPreviewCaches: we,
        isCameraSelected: pe,
        isFreeFrameView: be,
        isFreeSpaceView: ye,
        isItemLocked: h,
        isRasterObjectItem: $,
        isSceneSticker: C,
        isShotItem: b,
        isSpaceView: F,
        isStickerItem: M,
        isStrokeGroupItem: q,
        markObjectVisualsDirty: te,
        markPaintCompositeVisualsDirty: Se,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: Ne,
        paintingShown: Te,
        parseRasterObjectSelectionId: ze,
        playback: je,
        poseOf: We,
        pushHistory: Ve,
        rectFromPoints: J,
        rectIntersectsGeom: Ce,
        refreshPaintEngineRevisionCache: Re,
        requestDraw: Ae,
        screenPos: $e,
        screenPosCss: Ge,
        screenPosToErpPoint: Ke,
        screenPosToFrameAsErpPoint: tt,
        screenToWorldDir: lt,
        selectWorldSticker: zt,
        selectedWorldSticker: Dt,
        setPointerPos: on,
        setSelectedItem: On,
        setSelectedItems: Ye,
        setSpaceView: jt,
        shortestWrappedDelta: yn,
        spaceViewState: _r,
        startAnimation: jr,
        startCameraPress: nn,
        startFrameDrag: wn,
        startPanFrame: Hr,
        startSpaceDrag: Sr,
        stopTimelinePlayback: Bn,
        supportsErpPainting: ya,
        supportsFramePainting: fo,
        syncCutoutShot: po,
        syncFloatingViewButtonState: ho,
        syncFrameRollKnob: ba,
        syncSidePanelControls: va,
        syncTimeline: _a,
        syncViewToggleState: Mi,
        updateCursor: xt,
        updateSelectionMenu: Yn,
        updateSidePanel: ir,
        viewControls: mo,
        writePose: Fn,
        zoomFrameAt: Sa,
        zoomFrameViewAt: wa,
        zoomSpaceAt: xa
      } = Oe);
    },
    onCanvasPointerDown: ka,
    worldGizmoPointer: wr,
    hoverWorldGizmo: go,
    onCanvasPointerMove: Na,
    onCanvasPointerUp: Ml,
    onCanvasPointerCancel: Pl,
    onCanvasMouseMove: Ca,
    onCanvasWheel: vo
  };
}
function ZN(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: a,
    shotEditor: s,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, m, _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie;
  function E(_e, I, le = !1) {
    var D;
    de();
    const y = s && n.mode === "frame" ? O() : null, v = y || G(), R = y ? "shot" : X(), Y = ne();
    if (Y && !Pe(Y) || !Y && (!v || R === "stroke" || V(v))) return;
    const S = (((D = u.sidePanel) == null ? void 0 : D.params) || []).find((k) => k.key === _e);
    if (!S || S.enabled === !1) return;
    let w = Number(I);
    if (Number.isNaN(w) && (w = 0), (Y || t) && fP.has(_e) ? w = _e === "scale" ? Math.max(w, kg) : w : w = Ee(w, Number(S.min), Number(S.max)), _e === "yaw_deg" && (w = $t(w)), !Y && t && _e.startsWith("position_")) {
      z(), iv(l.camera, n.frame, _e, w), fe(), he(), le && B();
      return;
    }
    if (Y) {
      sv(Y, n.frame, _e, w), Z(), fe(), he(), le && B();
      return;
    }
    _e === "opacity" ? ov(v, n.frame, w / 100) : ie(v, { [_e]: w }), s && !re(v) && (_e === "hFOV_deg" || _e === "vFOV_deg") && (v.aspect_id = yi(v)), fe(), he(), le && B();
  }
  async function ee(_e) {
    var y, v, R, Y, S, w, D;
    const I = _e.target.closest("[data-action]");
    if (!I) return;
    const le = String(I.getAttribute("data-action") || "");
    if (le === "coverage-set") {
      const k = En(I.getAttribute("data-coverage"));
      if (k === En(l.coverage)) return;
      l.coverage = k, n.coverage = k, r && (r.value = String(k)), o ? a.backgroundDirty = !0 : (p(), P({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), fe(), j(), he();
      return;
    }
    if (le === "toggle-selection-picker") {
      if ((v = (y = u.sidePanel) == null ? void 0 : y.selectionPicker) != null && v.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (le === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const k = String(I.getAttribute("data-selection-id") || "");
      let N = null;
      if (k && (d === "stickers" ? N = [...H(), ...c ? l.shots : []].find((A) => String((A == null ? void 0 : A.id) || "") === k) || null : N = ((R = K().find((A) => {
        var W;
        return String(((W = A == null ? void 0 : A.item) == null ? void 0 : W.id) || "") === k;
      })) == null ? void 0 : R.item) || null), me(N || null), N && !U(N)) {
        const A = ue(N);
        oe($t(Number(A.yaw_deg || 0)), Ee(Number(A.pitch_deg || 0), -89.9, 89.9));
      }
      fe(), j(), he();
      return;
    }
    if (le === "copy-state-inline") {
      const k = G(), N = X();
      if (!k || N === "stroke" || x().length > 1) return;
      const A = JSON.stringify(s && N !== "image" ? m(k) : _(ue(k)));
      try {
        await navigator.clipboard.writeText(A), (Y = u.sidePanel) != null && Y.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var W;
          (W = u.sidePanel) != null && W.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (le === "set-invert-x") {
      l.ui_settings.invert_view_x = I.getAttribute("data-value") === "1", T(), fe(), (S = i.setDirtyCanvas) == null || S.call(i, !0, !0), he();
      return;
    }
    if (le === "set-invert-y") {
      l.ui_settings.invert_view_y = I.getAttribute("data-value") === "1", T(), fe(), (w = i.setDirtyCanvas) == null || w.call(i, !0, !0), he();
      return;
    }
    if (le === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, T(), fe(), (D = i.setDirtyCanvas) == null || D.call(i, !0, !0), he();
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
  function ce(_e) {
    const I = _e.target.closest("[data-action='param-input']");
    I && E(String(I.getAttribute("data-param-key") || ""), I.value, !1);
  }
  function ge(_e) {
    const I = _e.target.closest("[data-action='param-input']");
    I && E(String(I.getAttribute("data-param-key") || ""), I.value, !0);
  }
  return {
    connect(_e) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: _,
        closeEditor: g,
        commitState: p,
        getActiveCutoutShot: O,
        getCutoutInspectorItems: K,
        getList: H,
        getSelected: G,
        getSelectedItems: x,
        getSelectedKind: X,
        isItemLocked: V,
        isSceneSticker: re,
        isStrokeGroupItem: U,
        markObjectVisualsDirty: Z,
        persistUiSettings: T,
        poseOf: ue,
        pushHistory: B,
        requestDraw: he,
        selectedWorldSticker: ne,
        setSelectedItem: me,
        stopTimelinePlayback: de,
        syncCoverageChangeToNodePreviews: P,
        syncCutoutShot: z,
        turnViewTo: oe,
        updateSelectionMenu: j,
        updateSidePanel: fe,
        worldStickerEditable: Pe,
        writePose: ie
      } = _e);
    },
    onSidePanelClick: ee,
    onSidePanelInput: ce,
    onSidePanelChange: ge
  };
}
function QN(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: a,
    readOnly: s,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: m
  } = e;
  let _, g, p, O, K, H, G, x, X, V, re, U, Z, T, ue, B, he, ne, me, de, P, z, oe, j, fe, Pe, ie, E, ee, ce, ge, _e, I, le, y, v, R, Y, S, w, D, k, N, A, W, Q, ae, L, se, ve, we;
  const pe = () => {
    if (!t.customPaintSessionStart) return;
    if (qs(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (FP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ve = [
      Tn(t.customPaintColor),
      ...t.customPaintHistory.filter((J) => !qs(J, t.customPaintColor))
    ];
    t.customPaintHistory = Ve.slice(0, 8), t.customPaintSessionStart = null;
  }, be = (Ve = !1) => {
    !i || i.hidden || (Ve ? pe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, ye = () => {
    i && (i.hidden && (t.customPaintSessionStart = Tn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    S();
  }
  function $(Ve) {
    var lt, zt, Dt, on, On;
    if ((zt = (lt = Ve.target) == null ? void 0 : lt.matches) != null && zt.call(lt, "[data-confirm-overlay]")) {
      const Ye = (Dt = f.confirmDialog) == null ? void 0 : Dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const J = Ve.target.closest("[data-space-mode]");
    if (J) {
      le(J.getAttribute("data-space-mode"));
      return;
    }
    const Ce = Ve.target.closest("[data-gizmo-mode]");
    if (Ce) {
      t.gizmoMode = Ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, se(), E({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Re = Ve.target.closest("[data-view]");
    if (Re) {
      if (Re.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(Re.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), ve(), se()), T(), N(), E();
      return;
    }
    const Ae = Ve.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !s) {
      if (Ae.matches("[data-tool-mode]")) {
        const Ye = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && X({ preservePanelValues: !0 }), w(), ve(), se(), E();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const Ye = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ae.disabled) return;
        Ye === "undo" ? ee(-1) : Ye === "redo" ? ee(1) : Ye === "clear" ? G() : Ye === "add" || Ye === "add-image" ? g() : Ye === "add-world" ? O() : Ye === "add-or-look" ? _() : Ye === "add-camera" && p();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, X({ preservePanelValues: !0 }), Pn[Ye] && (t.activeBrushPresetId = Ye), w(), ve(), se(), E();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), w(), ve(), se(), E();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        x(Ye);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const Ye = wl.find((jt) => jt.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = Tn(Ye.color), be(!0), w();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ve.preventDefault(), Ve.stopPropagation(), i && !i.hidden ? be(!0) : ye(), w();
        return;
      }
    }
    const $e = String(((on = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : on.call(Ae, "data-action")) || "");
    if ($e === "video-play-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub = !1, A();
      return;
    }
    if ($e === "video-audio-toggle") {
      Ve.preventDefault(), Ve.stopPropagation(), ae(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if ($e === "video-loop-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const Ye = !f.videoTransport.loop;
      f.videoTransport.loop = Ye, m.loop = Ye, k({
        hasAudio: f.videoTransport.hasAudio,
        loop: Ye,
        muted: m.muted,
        volume: Number(m.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!s) {
      if ($e === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if ($e === "frame-aspect-set") {
        const Ye = t.mode === "frame" ? B() : null;
        if (!Ye || Ye.locked === !0) return;
        I(Ye, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, D(), fe(), V(), N(), ve(), se(), E();
        return;
      }
      if ($e === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? B() : null, jt = Ae.getAttribute("data-custom-width"), yn = Ae.getAttribute("data-custom-height");
        if (!Ye || !K(Ye, jt, yn)) return;
        f.frameRail.aspectOpen = !1, D(), fe(), V(), N(), E();
        return;
      }
      if ($e === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? B() : null;
        if (!Ye || Ye.locked === !0) return;
        ge(Ye), f.frameRail.aspectOpen = !1, D(), fe(), V(), N(), E();
        return;
      }
      if ($e === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, se(), E();
        return;
      }
      if ($e === "aspect-set") {
        const Ye = ne();
        if (!Ye) return;
        const jt = String(Ae.getAttribute("data-aspect") || "1:1");
        I(Ye, jt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), V(), se(), E();
        return;
      }
      if ($e === "rotate-90") {
        const Ye = ne();
        if (!Ye || P()) return;
        ge(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), V(), se(), E();
        return;
      }
      if ($e === "bring-front") {
        H();
        return;
      }
      if ($e === "send-back") {
        _e();
        return;
      }
      if ($e === "duplicate") {
        Z();
        return;
      }
      if ($e === "replace-image") {
        ie();
        return;
      }
      if ($e === "toggle-lock") {
        Q();
        return;
      }
      if ($e === "back-initial") {
        ce();
        return;
      }
      if ($e === "toggle-visible") {
        W();
        return;
      }
      if ($e === "delete") {
        U();
        return;
      }
    }
    if ($e === "reset-view") {
      if (t.mode === "frame") return;
      L(
        { position: R(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((On = re()) == null ? void 0 : On.radius) || er },
        { mode: Xs(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if ($e === "frame-view") {
      if (!z() || Xs(t.spaceMode, t.viewTransition) !== "6dof") return;
      ue();
      return;
    }
    if ($e === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, HP(r == null ? void 0 : r.id, t.showGrid), h(), E();
      return;
    }
    if ($e === "toggle-fullscreen") {
      Ve.preventDefault(), Ve.stopPropagation(), ze();
      return;
    }
    if ($e === "toggle-output-preview-size") {
      Ve.preventDefault(), Ve.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, Y(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), We(), E();
      return;
    }
    const Ge = Ve.target.closest("[data-paint-history-index]");
    if (!Ge) return;
    const Ke = Number(Ge.getAttribute("data-paint-history-index")), tt = t.customPaintHistory[Ke];
    tt && (t.customPaintColor = Tn(tt), t.paintColor = Tn(tt), w());
  }
  function C(Ve) {
    const J = Ve.target.closest("[data-video-seek]");
    if (J) {
      if (!(m instanceof HTMLVideoElement)) return;
      oe.playing && (we.resumeAfterScrub = !0), oe.seek(ci(Number(J.value || 0), j()));
      return;
    }
    const Ce = Ve.target.closest("[data-video-volume]");
    if (Ce) {
      if (!(m instanceof HTMLVideoElement)) return;
      const $e = Ee(Number(Ce.value || 0), 0, 1);
      m.volume = $e, m.muted = $e <= 1e-4, k({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: $e
      });
      return;
    }
    const Re = Ve.target.closest("[data-paint-size-slider]");
    if (Re) {
      if (Re.disabled) return;
      const $e = Math.max(1, Math.min(120, Math.round(Number(Re.value)))), Ge = he(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ge] = $e, w(), y();
      return;
    }
    const Ae = Ve.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const $e = { ...t.customPaintColor, a: Ee(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Tn($e), t.paintColor = Tn($e), w();
    }
  }
  function b(Ve) {
    var J;
    if (Ve.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub && oe.play(), we.resumeAfterScrub = !1;
      return;
    }
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((J = Ve.target) == null ? void 0 : J.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && me();
  }
  function F(Ve) {
    const J = Ve.target.closest("[data-tip]");
    !J || !l.contains(J) || u.target !== J && (u.target = J, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === J && v(J);
    }, 220));
  }
  function M(Ve) {
    var Re, Ae;
    const J = Ve.target.closest("[data-tip]");
    !J || u.target !== J || (Ve.relatedTarget instanceof Element ? (Ae = (Re = Ve.relatedTarget).closest) == null ? void 0 : Ae.call(Re, "[data-tip]") : null) === J || de();
  }
  function q(Ve, J) {
    var Ke;
    if (!o) return;
    const Ce = o.getBoundingClientRect(), Re = Ee((Ve - Ce.left) / Math.max(1, Ce.width), 0, 1), Ae = 1 - Ee((J - Ce.top) / Math.max(1, Ce.height), 0, 1), $e = su(t.customPaintColor), Ge = { ...au($e.h, Re, Ae), a: Number(((Ke = t.customPaintColor) == null ? void 0 : Ke.a) ?? 1) };
    t.customPaintColor = Tn(Ge), t.paintColor = Tn(Ge), w();
  }
  function te(Ve) {
    var $e;
    if (!a) return;
    const J = a.getBoundingClientRect(), Ce = Ee((Ve - J.left) / Math.max(1, J.width), 0, 1), Re = su(t.customPaintColor), Ae = { ...au(Ce, Re.s, Re.v), a: Number((($e = t.customPaintColor) == null ? void 0 : $e.a) ?? 1) };
    t.customPaintColor = Tn(Ae), t.paintColor = Tn(Ae), w();
  }
  function Se(Ve, J) {
    const Ce = Ve.pointerId;
    J(Ve);
    const Re = ($e) => {
      $e.pointerId === Ce && J($e);
    }, Ae = ($e) => {
      $e.pointerId === Ce && (window.removeEventListener("pointermove", Re), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Re), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const Ve = !!t.fullscreen;
    zi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ve ? He.fullscreen_close : He.fullscreen,
      label: Ve ? "Exit Fullscreen" : "Fullscreen",
      tip: Ve ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ne(Ve) {
    const J = !!Ve;
    t.fullscreen !== J && (t.fullscreen = J, l.classList.toggle("pano-modal-fullscreen", J), J ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), xe(), Pe(), E());
  }
  function Te() {
    return document.fullscreenElement === n;
  }
  async function ze() {
    var Ve, J;
    try {
      if (!document.fullscreenEnabled) {
        Ne(!t.fullscreen);
        return;
      }
      Te() ? await ((J = document.exitFullscreen) == null ? void 0 : J.call(document)) : await ((Ve = n.requestFullscreen) == null ? void 0 : Ve.call(n));
    } catch {
      Ne(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Ne(Te());
  }
  function We() {
    const Ve = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ve ? He.fullscreen_close : He.fullscreen, f.outputPreviewToggle.label = Ve ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ve ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ve) {
      ({
        addCutoutFrame: _,
        addImageSticker: g,
        addStudioCamera: p,
        addWorldImageSticker: O,
        applyCutoutAspectCustom: K,
        bringSelectedToFront: H,
        clearAll: G,
        clearPaintingLayer: x,
        clearSelection: X,
        commitAndRefreshNode: V,
        contentSphere: re,
        deleteSelected: U,
        duplicateSelected: Z,
        forceCursorTool: T,
        frameSpaceContent: ue,
        getActiveCutoutShot: B,
        getBrushPresetIdForTool: he,
        getSelected: ne,
        hidePaintSizePreview: me,
        hideTooltip: de,
        isErpCamera: P,
        isFreeSpaceView: z,
        playback: oe,
        playbackFps: j,
        pushHistory: fe,
        queueVideoTransportLayout: Pe,
        replaceSelectedImage: ie,
        requestDraw: E,
        restoreHistory: ee,
        restoreSelectedToInitialPose: ce,
        rotateCutoutAspect90: ge,
        sendSelectedToBack: _e,
        setShotAspect: I,
        setSpaceMode: le,
        showPaintSizePreview: y,
        showTooltipFor: v,
        spaceOrigin: R,
        startAnimation: Y,
        syncFloatingViewButtonState: S,
        syncPaintUi: w,
        syncSidePanelControls: D,
        syncVideoTransportState: k,
        syncViewToggleState: N,
        togglePlayback: A,
        toggleSelectedExternalStickerVisibility: W,
        toggleSelectedLock: Q,
        toggleVideoMuted: ae,
        transitionView: L,
        updateSelectionMenu: se,
        updateSidePanel: ve,
        videoState: we
      } = Ve);
    },
    closePaintColorPop: be,
    syncGridToggleButton: h,
    onRootClick: $,
    onRootInput: C,
    onRootChange: b,
    onRootPointerOver: F,
    onRootPointerOut: M,
    updatePaintColorFromSv: q,
    updatePaintColorFromHue: te,
    bindDrag: Se,
    syncFullscreenButton: xe,
    setFullscreenState: Ne,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: We
  };
}
function e2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, c, d, u, f, m, _, g, p, O, K;
  function H(T) {
    var ue, B, he, ne, me;
    if (T.key === "Escape") {
      if (s()) {
        T.preventDefault(), T.stopPropagation(), (ue = T.stopImmediatePropagation) == null || ue.call(T);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        T.preventDefault(), T.stopPropagation(), (B = T.stopImmediatePropagation) == null || B.call(T), (he = document.exitFullscreen) == null || he.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        T.preventDefault(), T.stopPropagation(), (ne = T.stopImmediatePropagation) == null || ne.call(T), g(!1);
        return;
      }
      T.preventDefault(), T.stopPropagation(), (me = T.stopImmediatePropagation) == null || me.call(T), l();
    }
  }
  function G(T) {
    const ue = String(T.key || ""), B = String(T.code || ""), he = Number(T.keyCode || 0);
    if (!(ue === "Delete" || B === "Delete" || he === 46) && !(ue === "Backspace" || B === "Backspace" || he === 8)) return;
    const de = T.target, P = ((de == null ? void 0 : de.tagName) || "").toUpperCase();
    if (P === "INPUT" || P === "TEXTAREA" || de != null && de.isContentEditable) return;
    if (o.selection) {
      d(), T.preventDefault(), T.stopPropagation();
      return;
    }
    if (u()) {
      T.preventDefault(), T.stopPropagation();
      return;
    }
    m() && (c(), T.preventDefault(), T.stopPropagation());
  }
  function x(T) {
    if (T.code !== "Space" || T.ctrlKey || T.metaKey || T.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const ue = T.composedPath()[0];
    if (ue !== document.body && ue !== document.documentElement && !r.contains(ue)) return !1;
    const B = ((ue == null ? void 0 : ue.tagName) || "").toUpperCase();
    return B === "INPUT" ? !dP.has(String(ue.type || "text").toLowerCase()) : B !== "TEXTAREA" && B !== "SELECT" && !(ue != null && ue.isContentEditable);
  }
  function X(T) {
    x(T) && (T.preventDefault(), T.stopPropagation(), T.repeat || O());
  }
  function V(T) {
    x(T) && (T.preventDefault(), T.stopPropagation());
  }
  function re(T) {
    const ue = !!(T.ctrlKey || T.metaKey), B = !!T.altKey;
    t.marqueeModifier === ue && t.altModifier === B || (t.marqueeModifier = ue, t.altModifier = B, p(), K(t.pointerPos));
  }
  function U() {
    t.marqueeModifier = !1, t.altModifier = !1, p(), K(t.pointerPos);
  }
  function Z(T) {
    if (n || !T.ctrlKey && !T.metaKey) return;
    const ue = String(T.key || "").toLowerCase(), B = String(T.code || "");
    if (ue !== "z" && B !== "KeyZ") return;
    const he = T.target, ne = ((he == null ? void 0 : he.tagName) || "").toUpperCase();
    if (ne === "INPUT" || ne === "TEXTAREA" || he != null && he.isContentEditable) return;
    const { canUndo: me, canRedo: de } = f();
    T.shiftKey && !de || !T.shiftKey && !me || (_(T.shiftKey ? 1 : -1), T.preventDefault(), T.stopPropagation());
  }
  return {
    connect(T) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: d,
        deleteSelectedWorldSticker: u,
        getHistoryCapabilities: f,
        getSelected: m,
        restoreHistory: _,
        setFullscreenState: g,
        syncFrameRollKnob: p,
        togglePlayback: O,
        updateCursor: K
      } = T);
    },
    onEscClose: H,
    onDeleteKey: G,
    onSpaceKey: X,
    onSpaceKeyUp: V,
    onModifierKeyChange: re,
    onWindowBlur: U,
    onUndoRedoKey: Z
  };
}
const ep = /* @__PURE__ */ new Map(), nr = Pm({
  app: Zn,
  api: fn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: iu,
    markImageFailed: xg,
    markImageLoading: Sg,
    markImageReady: wg
  }
});
function tp(e) {
  if (!en(e, "background") || !en(e, "external-sticker")) return null;
  const t = nr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? lo(t[0]) : null;
}
function t2(e) {
  if (!en(e, "background")) return null;
  const [t] = nr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = nr.uiValue(e, "pano_timeline_frames") || [], [n] = nr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: En(n) };
}
const n2 = nr.assetSource, r2 = nr.source, i2 = nr.uiImage, o2 = nr.invalidateUiImage, np = nr.loadPreferredExactLinkedImage;
async function a2(e, t, r = {}) {
  var rn, Ft;
  await ig(e, { tolerateOperationFailure: !0 }), nr.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = DP(e, t);
  await ad();
  const s = qa(e, "output_preset"), l = qa(e, "coverage"), c = qa(e, "bg_color"), d = qa(e, uP), u = () => {
    const De = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return np(
      e,
      De,
      () => Ie(),
      `background:size:${De.join("|")}`
    );
  }, f = () => {
    const De = u();
    return VP(De);
  }, m = (De = 2048) => {
    const Je = s == null ? void 0 : s.value;
    return RP(Je) ? f() || Math.max(1, Math.round(Number(De || 2048))) : LP(Je, De);
  }, _ = e.__panoSceneStateV2 === !0, g = t === "stickers" && _, p = t === "cutout" && _, O = g && e.__panoStudio === !0, K = p || O, H = t === "cutout" || O, G = p ? t2(e) : null, x = (_ ? Wh : Gh)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: G ? G.coverage : En(l == null ? void 0 : l.value),
    sharedUiSettings: $P(),
    active: Yh(e),
    fps: _ ? tp(e) : null,
    scene: (G == null ? void 0 : G.state) ?? null,
    camera: p
  });
  e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = 0;
  let X = null;
  K ? (X = x.camera && (!O || x.camera.visible !== !1) ? Uh(x.camera, 0) : null, x.shots = X ? [{ ...X, position: [...X.position] }] : [], x.active.selected_shot_id = X && p ? yl : null) : t === "cutout" && (x.shots = Array.isArray(x.shots) ? x.shots.slice(0, 1) : [], x.shots.length || (x.active.selected_shot_id = null));
  const V = t === "cutout" ? (() => {
    var xn;
    const De = Array.isArray(x.shots) ? x.shots : [], Je = String(((xn = x == null ? void 0 : x.active) == null ? void 0 : xn.selected_shot_id) || "");
    return De.find((Qt) => String((Qt == null ? void 0 : Qt.id) || "") === Je) || De[0] || null;
  })() : null, re = V ? Eg(V, !1) : { width: 220, height: 132 }, U = _g(O ? "studio" : t), Z = /* @__PURE__ */ io({
    stageStatus: Xn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (U.viewButtons || []).map((De) => ({ ...De, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (rn = U.spaceButtons) != null && rn.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: U.spaceButtons, frame: U.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (U.toolButtons || []).map((De) => ({
      ...De,
      disabled: !1,
      ...De.key === "add-world" ? { visible: g } : {},
      ...p && PP.has(De.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(U.floatingButtons || []).map((De) => ({ ...De, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: He.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: He.aspect,
      rotateIcon: He.rotate_90,
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
      icon: He.fullscreen,
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
      customColorCss: ur({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: ur({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (De, Je) => ({ index: Je, color: null })),
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
      width: re.width,
      height: re.height,
      label: V ? "Loading preview" : "Add Frame to preview"
    }
  }), T = { frame: /* @__PURE__ */ bs(0), playing: /* @__PURE__ */ bs(!1) }, ue = document.createElement("div");
  document.body.appendChild(ue);
  const B = ({ intent: De, file: Je } = {}) => {
    if (Jn(Je)) {
      if (De === "add") {
        je(Je);
        return;
      }
      if (De === "add-world") {
        We(Je);
        return;
      }
      De === "replace" && Oe(Je);
    }
  }, he = ({ intent: De } = {}) => {
  }, ne = Pu(lP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: U,
    paintSwatches: wl.map((De) => ({
      id: De.id,
      label: De.label,
      cssColor: ur(De.color, 1)
    })),
    uiState: Z,
    playhead: T,
    onClose: () => {
      It();
    },
    onTimeline: (De) => kl(De),
    onImageFileSelected: B,
    onImageFileCancelled: he
  });
  let me = null;
  try {
    me = ne.mount(ue);
  } catch (De) {
    try {
      ne.unmount();
    } catch {
    }
    throw ue.remove(), De;
  }
  const de = ue.querySelector(".pano-modal-overlay"), P = ue.querySelector(".pano-modal"), z = P == null ? void 0 : P.querySelector("[data-stage-overlay]"), oe = P == null ? void 0 : P.querySelector("[data-stage-background]"), j = P == null ? void 0 : P.querySelector(".pano-stage-wrap"), fe = ((Ft = me == null ? void 0 : me.getPaintOverlayRefs) == null ? void 0 : Ft.call(me)) || {}, Pe = fe.cursor || null, ie = fe.sizePreview || null, E = fe.sizeSample || null;
  if (!de || !P || !z || !oe || !j || !Pe || !ie || !E)
    throw ne.unmount(), ue.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ee = z.getContext("2d"), ce = P.querySelector("[data-side]"), ge = P.querySelector("[data-video-element]"), _e = P.querySelector("[data-port-video-element]");
  $l(z, "editor.stage-overlay"), $l(oe, "editor.stage-background"), Xd(ge, "editor.video"), Xd(_e, "editor.port-video");
  const I = P.querySelector(".pano-floating-right"), le = P.querySelector(".pano-floating-top"), y = P.querySelector("[data-tool-rail]"), v = P.querySelector("[data-frame-rail]"), R = P.querySelector("[data-frame-roll-knob]"), Y = P.querySelector("[data-paint-dock]"), S = P.querySelector(".pano-video-transport"), w = P.querySelector("[data-selection-menu]"), D = P.querySelector("[data-tooltip]"), k = P.querySelector("[data-camera-preview-host]"), N = P.querySelector("[data-camera-preview-canvas]");
  $l(N, "editor.camera-preview");
  const A = P.querySelector("[data-paint-color-row]"), W = P.querySelector("[data-paint-color-pop]"), Q = P.querySelector("[data-paint-color-sv]"), ae = P.querySelector("[data-paint-color-sv-cursor]"), L = P.querySelector("[data-paint-hue-strip]"), se = P.querySelector("[data-paint-hue-handle]");
  j == null || j.removeAttribute("data-stage-ready"), j == null || j.setAttribute("data-stage-loading-kind", "boot"), z.style.opacity = "1", oe.style.opacity = "0", i && (ce == null || ce.remove(), P.classList.add("pano-modal-readonly")), P.addEventListener("pointerdown", () => M.wake(), !0), P.addEventListener("pointerdown", (De) => {
    var Je;
    De.target.closest("[data-frame-roll-knob]") || On(), !De.target.closest(".pano-picker") && (De.target.closest("[data-paint-color-row]") || (P.querySelectorAll(".pano-picker-pop").forEach((xn) => {
      xn.hidden = !0;
    }), Ae(!0), H && we.cutoutAspectOpen && !De.target.closest(".pano-aspect-popover") && !De.target.closest("[data-action='aspect']") && (we.cutoutAspectOpen = !1, we.menuMode = "", we.menuSize.measured = !1, Oa(), Ie()), (Je = Z.frameRail) != null && Je.aspectOpen && !De.target.closest(".pano-frame-aspect-control") && (Z.frameRail.aspectOpen = !1)));
  });
  const we = {
    mode: "pano",
    selectedId: Ig(t, x),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: er,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: En(x.coverage),
    historyController: XP(x),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ar,
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
    showGrid: jP(e == null ? void 0 : e.id, !0),
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
    paintEngine: Iu(),
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
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, pe = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (we.selectedId = null, x.active.selected_sticker_id = null), we.selectedIds = we.selectedId ? [we.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), C = mn({ label: "editor.still" });
  C.__panoFrameIdx = 0;
  const b = mn({ label: "editor.port-still" });
  b.__panoFrameIdx = 0;
  const F = {
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
  }, M = sx({
    requestAnimationFrame: (De) => requestAnimationFrame(De),
    cancelAnimationFrame: (De) => cancelAnimationFrame(De),
    draw: (De, Je) => Ci(De, Je),
    animating: () => Ke()
  }), q = ox({
    requestFrame: (De) => M.requestFrame(De),
    cancelFrame: (De) => M.cancelFrame(De),
    tasks: {
      seek: () => Ml.seek(pe.scrubFrame),
      timeline: () => Pi(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        qn(), Ie({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => So()
    }
  }), te = Yv({
    canvas: oe,
    onReady: () => {
      nt(), Ie({ reason: ft.CONTEXT });
    },
    onFailed: () => Ie(),
    onUpdate: () => Ie({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (De) => Ie({ localOnly: !0, reason: bN(De) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      zt(), nt(), Ie({ reason: ft.CONTEXT });
    }
  }), Se = Number.parseFloat(
    getComputedStyle(P).getPropertyValue("--pano-float-radius")
  ) || 10, xe = (De) => {
    const Je = String(De || "default");
    z.style.cursor !== Je && (z.style.cursor = Je);
  }, Ne = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  }, ze = Ou({
    getView: () => ({ yaw: we.viewYaw, pitch: we.viewPitch, fov: we.viewFov }),
    setView: (De) => {
      we.viewYaw = $t(Number(De.yaw || 0)), we.viewPitch = Ee(Number(De.pitch || 0), -89.9, 89.9), we.viewFov = Ee(Number(De.fov || we.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const De = z.getBoundingClientRect();
      return {
        w: Math.max(1, Number(De.width || z.clientWidth || 0)),
        h: Math.max(1, Number(De.height || z.clientHeight || 0))
      };
    },
    getInvert: () => {
      var De, Je;
      return {
        x: (De = x.ui_settings) != null && De.invert_view_x ? -1 : 1,
        y: (Je = x.ui_settings) != null && Je.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dt(),
    onInteraction: () => M.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: je,
    addWorldStickerFromFile: We,
    applyInitialCutoutFocus: Ve,
    applyVideoTimelineFps: J,
    bindDrag: Ce,
    cancelFrameCameraGesture: Re,
    closePaintColorPop: Ae,
    commitState: $e,
    disposeMediaSession: Ge,
    editorAnimating: Ke,
    finishKnobRoll: tt,
    flushFrameWheelCommit: lt,
    forgetCameraPreviewFrame: zt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: on,
    hideTooltip: On,
    hoverWorldGizmo: Ye,
    isFreeFrameView: jt,
    isFreeSpaceView: yn,
    migrateLegacyEmbeddedAssets: _r,
    onCanvasDragOver: jr,
    onCanvasDrop: nn,
    onCanvasMouseMove: wn,
    onCanvasPointerCancel: Hr,
    onCanvasPointerDown: Sr,
    onCanvasPointerMove: Bn,
    onCanvasPointerUp: ya,
    onCanvasWheel: fo,
    onDeleteKey: po,
    onEscClose: ho,
    onFrameRollKnobDoubleClick: ba,
    onFrameRollKnobPointerDown: va,
    onFrameRollKnobPointerMove: _a,
    onFullscreenChange: Mi,
    onModifierKeyChange: xt,
    onRootChange: Yn,
    onRootClick: ir,
    onRootInput: mo,
    onRootPointerOut: Fn,
    onRootPointerOver: Sa,
    onSidePanelChange: wa,
    onSidePanelClick: xa,
    onSidePanelInput: Gr,
    onSpaceKey: ka,
    onSpaceKeyUp: wr,
    onTimelineAction: kl,
    onUndoRedoKey: go,
    onWindowBlur: Ma,
    onWindowDragEnter: yo,
    onWindowDragLeave: bo,
    onWindowDragOver: Pa,
    onWindowDrop: Na,
    playback: Ml,
    pushHistory: Pl,
    reconcileExternalStickerFromInputs: Ca,
    refreshModalVideoSource: vo,
    replaceSelectedImageFromFile: Oe,
    requestDraw: Ie,
    sampleEditorDiagnostics: ke,
    setDropCue: bt,
    setPointerPos: ct,
    stageResizeObserver: vt,
    stickerCornerOrderSanity: Xe,
    stopRenderLoop: et,
    syncCanvasSize: nt,
    syncCutoutShot: qn,
    syncFullscreenButton: qe,
    syncGridToggleButton: Ue,
    syncLookAtFrameButtonState: Ze,
    syncOutputPreviewToggleButton: qt,
    syncPaintUi: kt,
    syncPaintingLayerAsync: xr,
    syncTimeline: Pi,
    syncUndoRedoButtons: Ni,
    tick: Ci,
    triggerBackgroundPersistenceOnClose: Aa,
    updateCursor: _o,
    updatePaintColorFromHue: Ia,
    updatePaintColorFromSv: Ea,
    updateSelectionMenu: Oa,
    updateSidePanel: So,
    viewControls: ut,
    watchPixelRatio: pt
  } = GP({
    api: fn,
    app: Zn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: K,
    canvas: z,
    capture: G,
    closeEditor: It,
    comfyMedia: nr,
    coverageWidget: l,
    ctx: ee,
    cutoutPreviewCanvas: N,
    cutoutPreviewHost: k,
    cutoutV2: p,
    dragCue: Te,
    dragFrames: q,
    editor: we,
    editorView: te,
    floatingRightEl: I,
    floatingTopEl: le,
    frameGateCssRadius: Se,
    frameRailEl: v,
    frameRollKnobEl: R,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: X,
    loadPreferredExactLinkedImage: np,
    mediaAssetSource: n2,
    mediaSource: r2,
    mediaUiImage: i2,
    node: e,
    overlay: de,
    paintColorPop: W,
    paintColorRow: A,
    paintColorSv: Q,
    paintColorSvCursor: ae,
    paintCursorEl: Pe,
    paintDockEl: Y,
    paintHueHandle: se,
    paintHueStrip: L,
    paintSizePreviewEl: ie,
    paintSizePreviewSampleEl: E,
    portStillCanvas: b,
    portVideoEl: _e,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: $,
    rasterImageAlphaCache: h,
    rasterImageCache: ye,
    readOnly: n,
    resolveEditorOutputPresetWidth: m,
    root: P,
    runtime: F,
    sceneV2: g,
    scheduler: M,
    selectionMenu: w,
    setCanvasCursor: xe,
    shotEditor: H,
    stageWrap: j,
    state: x,
    stateV2: _,
    stateWidget: d,
    stillCanvas: C,
    studio: O,
    timeline: pe,
    timelinePlayhead: T,
    toolRailEl: y,
    tooltip: Ne,
    tooltipEl: D,
    type: t,
    uiState: Z,
    videoEl: ge,
    videoTimelineFps: tp,
    videoTransportEl: S,
    viewController: ze,
    vueModal: me
  }, [
    BP,
    JP,
    ZP,
    QP,
    eN,
    tN,
    nN,
    rN,
    iN,
    gN,
    yN,
    _N,
    SN,
    wN,
    zN,
    jN,
    HN,
    GN,
    WN,
    KN,
    UN,
    BN,
    YN,
    qN,
    XN,
    JN,
    ZN,
    QN,
    e2
  ]);
  Xe(), vt.observe(z), pt();
  const gt = () => $e();
  n || (e.__panoFlushStateBeforeQueue = gt), R == null || R.addEventListener("pointerdown", va), R == null || R.addEventListener("pointermove", _a), R == null || R.addEventListener("pointerup", tt), R == null || R.addEventListener("pointercancel", () => Re()), R == null || R.addEventListener("lostpointercapture", () => {
    var De;
    ((De = we.interaction) == null ? void 0 : De.source) === "knob" && Re();
  }), R == null || R.addEventListener("dblclick", ba), z.onpointerdown = Sr, z.onpointermove = Bn, z.onpointerup = ya, z.onpointercancel = Hr, z.onlostpointercapture = () => {
    Re();
  }, z.onauxclick = (De) => {
    De.button === 1 && De.preventDefault();
  }, z.oncontextmenu = (De) => {
    (yn() || jt()) && ES(ut(), 2) && De.preventDefault();
  }, z.onmousemove = wn, z.onpointerleave = () => {
    we.interaction || Ye({ x: -1e6, y: -1e6 });
  }, z.onmouseleave = () => {
    ct(we.pointerPos, !1), _o(we.pointerPos), we.mode === "frame" && we.primaryTool === "cursor" && Ie({ localOnly: !0, reason: ft.OVERLAY });
  }, z.onwheel = fo, z.ondragover = jr, z.ondrop = nn, window.addEventListener("dragenter", yo, !0), window.addEventListener("dragover", Pa, !0), window.addEventListener("dragleave", bo, !0), window.addEventListener("drop", Na, !0), ce == null || ce.addEventListener("click", xa), ce == null || ce.addEventListener("input", Gr), ce == null || ce.addEventListener("change", wa), Ue(), P.addEventListener("click", ir), P.addEventListener("input", mo), P.addEventListener("change", Yn), P.addEventListener("pointerup", (De) => {
    var Je;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((Je = De.target) == null ? void 0 : Je.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && on();
  }), P.addEventListener("pointercancel", (De) => {
    var Je;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((Je = De.target) == null ? void 0 : Je.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && on();
  }), P.addEventListener("focusout", (De) => {
    De.target.closest("[data-paint-size-slider]") && on();
  }), P.addEventListener("pointerover", Sa), P.addEventListener("pointerout", Fn), P.addEventListener("pointerdown", (De) => {
    De.target.closest("[data-frame-roll-knob]") || On();
  }), Q && (Q.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), Ce(De, (Je) => Ea(Je.clientX, Je.clientY));
  }), L && (L.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), Ce(De, (Je) => Ia(Je.clientX));
  }), P.addEventListener("click", (De) => {
    var ti;
    const Je = De.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!Je) return;
    const xn = Je.getAttribute("data-action") === "confirm-accept", Qt = (ti = Z.confirmDialog) == null ? void 0 : ti.resolve;
    Z.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Qt == null || Qt(xn);
  }), document.addEventListener("fullscreenchange", Mi), qe(), qt();
  const yt = e.onConnectionsChange;
  let an = null, Bt = () => {
  };
  !n && t === "stickers" && (Bt = ng(e, (De = "sync") => {
    De === "executed" && (o2(be, Bs), vo(), g && J()), Ca(De);
  }, { editor: !0 }), an = function(...Je) {
    typeof yt == "function" && yt.apply(this, Je), vo(), Dr(this, "connections");
  }, e.onConnectionsChange = an), !n && !p && ep.set(String(e.id ?? "0"), () => xr());
  let Zt = null;
  async function It() {
    return Zt || (Zt = (async () => {
      var De, Je, xn, Qt, ti, Ai, Ii, hd;
      return ep.delete(String(e.id ?? "0")), lt(), n || $e(), document.fullscreenElement === de && ((De = document.exitFullscreen) == null || De.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Mi), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === gt && (e.__panoFlushStateBeforeQueue = null), (xn = (Je = e.__panoDomPreview) == null ? void 0 : Je.requestDraw) == null || xn.call(Je), (ti = (Qt = e.graph) == null ? void 0 : Qt.setDirtyCanvas) == null || ti.call(Qt, !0, !0), (hd = (Ii = (Ai = Zn) == null ? void 0 : Ai.canvas) == null ? void 0 : Ii.setDirty) == null || hd.call(Ii, !0, !0), On(), q.cancel(), et(), Ge(), te.dispose(), bt(!1), window.removeEventListener("keydown", ho, !0), window.removeEventListener("keydown", po, !0), window.removeEventListener("keydown", ka, !0), window.removeEventListener("keyup", wr, !0), window.removeEventListener("keydown", xt, !0), window.removeEventListener("keyup", xt, !0), window.removeEventListener("blur", Ma), window.removeEventListener("keydown", go, !0), window.removeEventListener("dragenter", yo, !0), window.removeEventListener("dragover", Pa, !0), window.removeEventListener("dragleave", bo, !0), window.removeEventListener("drop", Na, !0), !n && t === "stickers" && (e.onConnectionsChange === an && (e.onConnectionsChange = yt), Bt()), ne.unmount(), ue.remove(), Aa(), Zt = null, !0;
    })().catch((De) => (console.error("[PanoramaCutoutSync] closeEditor failed", De), Zt = null, !1)), Zt);
  }
  window.addEventListener("keydown", ho, !0), window.addEventListener("keydown", po, !0), window.addEventListener("keydown", ka, !0), window.addEventListener("keyup", wr, !0), window.addEventListener("keydown", xt, !0), window.addEventListener("keyup", xt, !0), window.addEventListener("blur", Ma), window.addEventListener("keydown", go, !0), de.addEventListener("pointerdown", (De) => {
    De.target === de && It();
  });
  function Lt(De, Je, { rollbackState: xn = !1 } = {}) {
    let Qt = "";
    try {
      xn && (Qt = JSON.stringify(x)), Je();
    } catch (ti) {
      if (Qt)
        try {
          const Ai = JSON.parse(Qt);
          Object.keys(x).forEach((Ii) => delete x[Ii]), Object.assign(x, Ai), n || $e();
        } catch (Ai) {
          console.error(`[PanoramaStickers] editor boot step "${De}" rollback failed`, Ai);
        }
      Z.stageWarningDetail = `boot:${De}`, console.error(`[PanoramaStickers] editor boot step "${De}" failed`, ti);
    }
  }
  Lt("cutout-focus", Ve), !n && t === "stickers" && Lt("external-sticker-sync", () => Ca("open"), { rollbackState: !0 }), _r().catch((De) => {
    Z.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', De);
  }), Lt("history", Pl), Lt("undo-redo", Ni), Lt("paint-ui", kt), Lt("side-panel", So), Lt("look-at-frame", Ze), Lt("video-source", vo), Lt("canvas-size", nt), Lt("cursor", () => _o(we.pointerPos)), Ie(), ke();
}
Zn.registerExtension(jS({
  app: Zn,
  openEditor: a2,
  attachStickers: rx,
  attachCutout: ix,
  attachPreview: nx,
  restoreOutput: Gw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: yP
}));
