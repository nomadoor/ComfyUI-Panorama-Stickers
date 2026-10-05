import * as Xa from "../../scripts/app.js";
import { app as Zn } from "../../scripts/app.js";
import { api as fn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function lu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Et = {}, Gi = [], pr = () => {
}, rp = () => !1, Ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qs = (e) => e.startsWith("onUpdate:"), gn = Object.assign, cu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Tg = Object.prototype.hasOwnProperty, St = (e, t) => Tg.call(e, t), it = Array.isArray, Wi = (e) => fa(e) === "[object Map]", ip = (e) => fa(e) === "[object Set]", hd = (e) => fa(e) === "[object Date]", st = (e) => typeof e == "function", Yt = (e) => typeof e == "string", yr = (e) => typeof e == "symbol", At = (e) => e !== null && typeof e == "object", op = (e) => (At(e) || st(e)) && st(e.then) && st(e.catch), ap = Object.prototype.toString, fa = (e) => ap.call(e), Dg = (e) => fa(e).slice(8, -1), sp = (e) => fa(e) === "[object Object]", uu = (e) => Yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ lu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Lg = /-\w/g, _n = Xs(
  (e) => e.replace(Lg, (t) => t.slice(1).toUpperCase())
), Vg = /\B([A-Z])/g, wi = Xs(
  (e) => e.replace(Vg, "-$1").toLowerCase()
), Js = Xs((e) => e.charAt(0).toUpperCase() + e.slice(1)), kl = Xs(
  (e) => e ? `on${Js(e)}` : ""
), dr = (e, t) => !Object.is(e, t), Ja = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, lp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, du = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let md;
const Zs = () => md || (md = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ct(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Yt(n) ? jg(n) : Ct(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Yt(e) || At(e))
    return e;
}
const Rg = /;(?![^(]*\))/g, $g = /:([^]+)/, zg = /\/\*[^]*?\*\//g;
function jg(e) {
  const t = {};
  return e.replace(zg, "").split(Rg).forEach((r) => {
    if (r) {
      const n = r.split($g);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Yt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (At(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Hg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gg = /* @__PURE__ */ lu(Hg);
function cp(e) {
  return !!e || e === "";
}
function Wg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = fu(e[n], t[n]);
  return r;
}
function fu(e, t) {
  if (e === t) return !0;
  let r = hd(e), n = hd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = yr(e), n = yr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? Wg(e, t) : !1;
  if (r = At(e), n = At(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !fu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const up = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Yt(e) ? e : e == null ? "" : it(e) || At(e) && (e.toString === ap || !st(e.toString)) ? up(e) ? rt(e.value) : JSON.stringify(e, dp, 2) : String(e), dp = (e, t) => up(t) ? dp(e, t.value) : Wi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Ml(n, o) + " =>"] = i, r),
    {}
  )
} : ip(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Ml(r))
} : yr(t) ? Ml(t) : At(t) && !it(t) && !sp(t) ? String(t) : t, Ml = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kn;
class Kg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = kn, !t && kn && (this.index = (kn.scopes || (kn.scopes = [])).push(
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
      const r = kn;
      try {
        return kn = this, t();
      } finally {
        kn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = kn, kn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (kn = this.prevScope, this.prevScope = void 0);
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
  return kn;
}
let Ot;
const Pl = /* @__PURE__ */ new WeakSet();
class fp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kn && kn.active && kn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pl.has(this) && (Pl.delete(this), this.trigger()));
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
    this.flags |= 2, gd(this), mp(this);
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
        mu(t);
      this.deps = this.depsTail = void 0, gd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    dc(this) && this.run();
  }
  get dirty() {
    return dc(this);
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
function pu() {
  pp++;
}
function hu() {
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
    n.version === -1 ? (n === r && (r = i), mu(n), Ug(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function dc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qo) || (e.globalVersion = qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !dc(e))))
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
function mu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      mu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Ug(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Qn = !0;
const bp = [];
function Lr() {
  bp.push(Qn), Qn = !1;
}
function Vr() {
  const e = bp.pop();
  Qn = e === void 0 ? !0 : e;
}
function gd(e) {
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
class Yg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ot || !Qn || Ot === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Ot)
      r = this.activeLink = new Yg(Ot, this), Ot.deps ? (r.prevDep = Ot.depsTail, Ot.depsTail.nextDep = r, Ot.depsTail = r) : Ot.deps = Ot.depsTail = r, vp(r);
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
    pu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      hu();
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
const fc = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ Symbol(
  ""
), pc = /* @__PURE__ */ Symbol(
  ""
), Xo = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, r) {
  if (Qn && Ot) {
    let n = fc.get(e);
    n || fc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new gu()), i.map = n, i.key = r), i.track();
  }
}
function Ar(e, t, r, n, i, o) {
  const a = fc.get(e);
  if (!a) {
    qo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (pu(), t === "clear")
    a.forEach(s);
  else {
    const l = it(e), c = l && uu(r);
    if (l && r === "length") {
      const u = Number(n);
      a.forEach((d, f) => {
        (f === "length" || f === Xo || !yr(f) && f >= u) && s(d);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), c && s(a.get(Xo)), t) {
        case "add":
          l ? c && s(a.get("length")) : (s(a.get(di)), Wi(e) && s(a.get(pc)));
          break;
        case "delete":
          l || (s(a.get(di)), Wi(e) && s(a.get(pc)));
          break;
        case "set":
          Wi(e) && s(a.get(di));
          break;
      }
  }
  hu();
}
function Ei(e) {
  const t = /* @__PURE__ */ _t(e);
  return t === e ? t : (un(t, "iterate", Xo), /* @__PURE__ */ Gn(e) ? t : t.map(rr));
}
function Qs(e) {
  return un(e = /* @__PURE__ */ _t(e), "iterate", Xo), e;
}
function lr(e, t) {
  return /* @__PURE__ */ Rr(e) ? Zi(/* @__PURE__ */ fi(e) ? rr(t) : t) : rr(t);
}
const qg = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nl(this, Symbol.iterator, (e) => lr(this, e));
  },
  concat(...e) {
    return Ei(this).concat(
      ...e.map((t) => it(t) ? Ei(t) : t)
    );
  },
  entries() {
    return Nl(this, "entries", (e) => (e[1] = lr(this, e[1]), e));
  },
  every(e, t) {
    return xr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => lr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return xr(
      this,
      "find",
      e,
      t,
      (r) => lr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return xr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xr(
      this,
      "findLast",
      e,
      t,
      (r) => lr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cl(this, "includes", e);
  },
  indexOf(...e) {
    return Cl(this, "indexOf", e);
  },
  join(e) {
    return Ei(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wo(this, "pop");
  },
  push(...e) {
    return wo(this, "push", e);
  },
  reduce(e, ...t) {
    return yd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yd(this, "reduceRight", e, t);
  },
  shift() {
    return wo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xr(this, "some", e, t, void 0, arguments);
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
    return Nl(this, "values", (e) => lr(this, e));
  }
};
function Nl(e, t, r) {
  const n = Qs(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Gn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Xg = Array.prototype;
function xr(e, t, r, n, i, o) {
  const a = Qs(e), s = a !== e && !/* @__PURE__ */ Gn(e), l = a[t];
  if (l !== Xg[t]) {
    const d = l.apply(e, o);
    return s ? rr(d) : d;
  }
  let c = r;
  a !== e && (s ? c = function(d, f) {
    return r.call(this, lr(e, d), f, e);
  } : r.length > 2 && (c = function(d, f) {
    return r.call(this, d, f, e);
  }));
  const u = l.call(a, c, n);
  return s && i ? i(u) : u;
}
function yd(e, t, r, n) {
  const i = Qs(e), o = i !== e && !/* @__PURE__ */ Gn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(c, u, d) {
    return s && (s = !1, c = lr(e, c)), r.call(this, c, lr(e, u), d, e);
  }) : r.length > 3 && (a = function(c, u, d) {
    return r.call(this, c, u, d, e);
  }));
  const l = i[t](a, ...n);
  return s ? lr(e, l) : l;
}
function Cl(e, t, r) {
  const n = /* @__PURE__ */ _t(e);
  un(n, "iterate", Xo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ vu(r[0]) ? (r[0] = /* @__PURE__ */ _t(r[0]), n[t](...r)) : i;
}
function wo(e, t, r = []) {
  Lr(), pu();
  const n = (/* @__PURE__ */ _t(e))[t].apply(e, r);
  return hu(), Vr(), n;
}
const Jg = /* @__PURE__ */ lu("__proto__,__v_isRef,__isVue"), _p = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yr)
);
function Zg(e) {
  yr(e) || (e = String(e));
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
      return n === (i ? o ? l0 : Mp : o ? kp : xp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = it(t);
    if (!i) {
      let l;
      if (a && (l = qg[r]))
        return l;
      if (r === "hasOwnProperty")
        return Zg;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : n
    );
    if ((yr(r) ? _p.has(r) : Jg(r)) || (i || un(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ hn(s)) {
      const l = a && uu(r) ? s : s.value;
      return i && At(l) ? /* @__PURE__ */ mc(l) : l;
    }
    return At(s) ? i ? /* @__PURE__ */ mc(s) : /* @__PURE__ */ io(s) : s;
  }
}
class wp extends Sp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = it(t) && uu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Rr(o);
      if (!/* @__PURE__ */ Gn(n) && !/* @__PURE__ */ Rr(n) && (o = /* @__PURE__ */ _t(o), n = /* @__PURE__ */ _t(n)), !a && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(n))
        return c || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : St(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ hn(t) ? t : i
    );
    return t === /* @__PURE__ */ _t(i) && (s ? dr(n, o) && Ar(t, "set", r, n) : Ar(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = St(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Ar(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!yr(r) || !_p.has(r)) && un(t, "has", r), n;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      it(t) ? "length" : di
    ), Reflect.ownKeys(t);
  }
}
class Qg extends Sp {
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
const e0 = /* @__PURE__ */ new wp(), t0 = /* @__PURE__ */ new Qg(), n0 = /* @__PURE__ */ new wp(!0);
const hc = (e) => e, Oa = (e) => Reflect.getPrototypeOf(e);
function r0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ _t(i), a = Wi(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = i[e](...n), u = r ? hc : t ? Zi : rr;
    return !t && un(
      o,
      "iterate",
      l ? pc : di
    ), gn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = c.next();
          return f ? { value: d, done: f } : {
            value: s ? [u(d[0]), u(d[1])] : u(d),
            done: f
          };
        }
      }
    );
  };
}
function Fa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function i0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      e || (dr(i, s) && un(a, "get", i), un(a, "get", s));
      const { has: l } = Oa(a), c = t ? hc : e ? Zi : rr;
      if (l.call(a, i))
        return c(o.get(i));
      if (l.call(a, s))
        return c(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && un(/* @__PURE__ */ _t(i), "iterate", di), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      return e || (dr(i, s) && un(a, "has", i), un(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ _t(s), c = t ? hc : e ? Zi : rr;
      return !e && un(l, "iterate", di), s.forEach((u, d) => i.call(o, c(u), c(d), a));
    }
  };
  return gn(
    r,
    e ? {
      add: Fa("add"),
      set: Fa("set"),
      delete: Fa("delete"),
      clear: Fa("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ _t(this), a = Oa(o), s = /* @__PURE__ */ _t(i), l = !t && !/* @__PURE__ */ Gn(i) && !/* @__PURE__ */ Rr(i) ? s : i;
        return a.has.call(o, l) || dr(i, l) && a.has.call(o, i) || dr(s, l) && a.has.call(o, s) || (o.add(l), Ar(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Gn(o) && !/* @__PURE__ */ Rr(o) && (o = /* @__PURE__ */ _t(o));
        const a = /* @__PURE__ */ _t(this), { has: s, get: l } = Oa(a);
        let c = s.call(a, i);
        c || (i = /* @__PURE__ */ _t(i), c = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), c ? dr(o, u) && Ar(a, "set", i, o) : Ar(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ _t(this), { has: a, get: s } = Oa(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ _t(i), l = a.call(o, i)), s && s.call(o, i);
        const c = o.delete(i);
        return l && Ar(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ _t(this), o = i.size !== 0, a = i.clear();
        return o && Ar(
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
    r[i] = r0(i, e, t);
  }), r;
}
function yu(e, t) {
  const r = i0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    St(r, i) && i in n ? r : n,
    i,
    o
  );
}
const o0 = {
  get: /* @__PURE__ */ yu(!1, !1)
}, a0 = {
  get: /* @__PURE__ */ yu(!1, !0)
}, s0 = {
  get: /* @__PURE__ */ yu(!0, !1)
};
const xp = /* @__PURE__ */ new WeakMap(), kp = /* @__PURE__ */ new WeakMap(), Mp = /* @__PURE__ */ new WeakMap(), l0 = /* @__PURE__ */ new WeakMap();
function c0(e) {
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
function u0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : c0(Dg(e));
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  return /* @__PURE__ */ Rr(e) ? e : bu(
    e,
    !1,
    e0,
    o0,
    xp
  );
}
// @__NO_SIDE_EFFECTS__
function d0(e) {
  return bu(
    e,
    !1,
    n0,
    a0,
    kp
  );
}
// @__NO_SIDE_EFFECTS__
function mc(e) {
  return bu(
    e,
    !0,
    t0,
    s0,
    Mp
  );
}
function bu(e, t, r, n, i) {
  if (!At(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = u0(e);
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
function fi(e) {
  return /* @__PURE__ */ Rr(e) ? /* @__PURE__ */ fi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function vu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _t(t) : e;
}
function f0(e) {
  return !St(e, "__v_skip") && Object.isExtensible(e) && lp(e, "__v_skip", !0), e;
}
const rr = (e) => At(e) ? /* @__PURE__ */ io(e) : e, Zi = (e) => At(e) ? /* @__PURE__ */ mc(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return Pp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  return Pp(e, !0);
}
function Pp(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new p0(e, t);
}
class p0 {
  constructor(t, r) {
    this.dep = new gu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ _t(t), this._value = r ? t : rr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gn(t) || /* @__PURE__ */ Rr(t);
    t = n ? t : /* @__PURE__ */ _t(t), dr(t, r) && (this._rawValue = t, this._value = n ? t : rr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const h0 = {
  get: (e, t, r) => t === "__v_raw" ? e : nt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ hn(i) && !/* @__PURE__ */ hn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Np(e) {
  return /* @__PURE__ */ fi(e) ? e : new Proxy(e, h0);
}
class m0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new gu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
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
function g0(e, t, r = !1) {
  let n, i;
  return st(e) ? n = e : (n = e.get, i = e.set), new m0(n, i, r);
}
const Ta = {}, gs = /* @__PURE__ */ new WeakMap();
let ai;
function y0(e, t = !1, r = ai) {
  if (r) {
    let n = gs.get(r);
    n || gs.set(r, n = []), n.push(e);
  }
}
function b0(e, t, r = Et) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, c = (G) => i ? G : /* @__PURE__ */ Gn(G) || i === !1 || i === 0 ? Ir(G, 1) : Ir(G);
  let u, d, f, m, _ = !1, g = !1;
  if (/* @__PURE__ */ hn(e) ? (d = () => e.value, _ = /* @__PURE__ */ Gn(e)) : /* @__PURE__ */ fi(e) ? (d = () => c(e), _ = !0) : it(e) ? (g = !0, _ = e.some((G) => /* @__PURE__ */ fi(G) || /* @__PURE__ */ Gn(G)), d = () => e.map((G) => {
    if (/* @__PURE__ */ hn(G))
      return G.value;
    if (/* @__PURE__ */ fi(G))
      return c(G);
    if (st(G))
      return l ? l(G, 2) : G();
  })) : st(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Lr();
      try {
        f();
      } finally {
        Vr();
      }
    }
    const G = ai;
    ai = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      ai = G;
    }
  } : d = pr, t && i) {
    const G = d, x = i === !0 ? 1 / 0 : i;
    d = () => Ir(G(), x);
  }
  const p = Bg(), F = () => {
    u.stop(), p && p.active && cu(p.effects, u);
  };
  if (o && t) {
    const G = t;
    t = (...x) => {
      G(...x), F();
    };
  }
  let K = g ? new Array(e.length).fill(Ta) : Ta;
  const z = (G) => {
    if (!(!(u.flags & 1) || !u.dirty && !G))
      if (t) {
        const x = u.run();
        if (i || _ || (g ? x.some((q, R) => dr(q, K[R])) : dr(x, K))) {
          f && f();
          const q = ai;
          ai = u;
          try {
            const R = [
              x,
              // pass undefined as the old value when it's changed for the first time
              K === Ta ? void 0 : g && K[0] === Ta ? [] : K,
              m
            ];
            K = x, l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            ai = q;
          }
        }
      } else
        u.run();
  };
  return s && s(z), u = new fp(d), u.scheduler = a ? () => a(z, !1) : z, m = (G) => y0(G, !1, u), f = u.onStop = () => {
    const G = gs.get(u);
    if (G) {
      if (l)
        l(G, 4);
      else
        for (const x of G) x();
      gs.delete(u);
    }
  }, t ? n ? z(!0) : K = u.run() : a ? a(z.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function Ir(e, t = 1 / 0, r) {
  if (t <= 0 || !At(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ hn(e))
    Ir(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Ir(e[n], t, r);
  else if (ip(e) || Wi(e))
    e.forEach((n) => {
      Ir(n, t, r);
    });
  else if (sp(e)) {
    for (const n in e)
      Ir(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ir(e[n], t, r);
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
    el(i, t, r);
  }
}
function br(e, t, r, n) {
  if (st(e)) {
    const i = pa(e, t, r, n);
    return i && op(i) && i.catch((o) => {
      el(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(br(e[o], t, r, n));
    return i;
  }
}
function el(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Et;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Lr(), pa(o, null, 10, [
        e,
        l,
        c
      ]), Vr();
      return;
    }
  }
  v0(e, r, i, n, a);
}
function v0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const vn = [];
let sr = -1;
const Ki = [];
let Kr = null, Ti = 0;
const Cp = /* @__PURE__ */ Promise.resolve();
let ys = null;
function tl(e) {
  const t = ys || Cp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _0(e) {
  let t = sr + 1, r = vn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = vn[n], o = Jo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function _u(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), r = vn[vn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(r) ? vn.push(e) : vn.splice(_0(t), 0, e), e.flags |= 1, Ap();
  }
}
function Ap() {
  ys || (ys = Cp.then(Ep));
}
function S0(e) {
  it(e) ? Ki.push(...e) : Kr && e.id === -1 ? Kr.splice(Ti + 1, 0, e) : e.flags & 1 || (Ki.push(e), e.flags |= 1), Ap();
}
function bd(e, t, r = sr + 1) {
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
    if (Ki.length = 0, Kr) {
      Kr.push(...t);
      return;
    }
    for (Kr = t, Ti = 0; Ti < Kr.length; Ti++) {
      const r = Kr[Ti];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Kr = null, Ti = 0;
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
    sr = -1, vn.length = 0, Ip(), ys = null, (vn.length || Ki.length) && Ep();
  }
}
let Dn = null, Op = null;
function bs(e) {
  const t = Dn;
  return Dn = e, Op = e && e.type.__scopeId || null, t;
}
function Fp(e, t = Dn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Id(-1);
    const o = bs(t);
    let a;
    try {
      a = e(...i);
    } finally {
      bs(o), n._d && Id(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tr(e, t) {
  if (Dn === null)
    return e;
  const r = al(Dn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Et] = t[i];
    o && (st(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ir(a), n.push({
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
function ei(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Lr(), br(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Vr());
  }
}
function w0(e, t) {
  if (dn) {
    let r = dn.provides;
    const n = dn.parent && dn.parent.provides;
    n === r && (r = dn.provides = Object.create(n)), r[e] = t;
  }
}
function Za(e, t, r = !1) {
  const n = _y();
  if (n || Bi) {
    let i = Bi ? Bi._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && st(t) ? t.call(n && n.proxy) : t;
  }
}
const x0 = /* @__PURE__ */ Symbol.for("v-scx"), k0 = () => Za(x0);
function pi(e, t, r) {
  return Tp(e, t, r);
}
function Tp(e, t, r = Et) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (Qo) {
    if (o === "sync") {
      const m = k0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = pr, m.resume = pr, m.pause = pr, m;
    }
  }
  const u = dn;
  s.call = (m, _, g) => br(m, u, _, g);
  let d = !1;
  o === "post" ? s.scheduler = (m) => {
    xn(m, u && u.suspense);
  } : o !== "sync" && (d = !0, s.scheduler = (m, _) => {
    _ ? m() : _u(m);
  }), s.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = b0(e, t, s);
  return Qo && (c ? c.push(f) : l && f()), f;
}
function M0(e, t, r) {
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
const P0 = /* @__PURE__ */ Symbol("_vte"), N0 = (e) => e.__isTeleport, C0 = /* @__PURE__ */ Symbol("_leaveCb");
function Su(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Su(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const vs = /* @__PURE__ */ new WeakMap();
function Ho(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, p) => Ho(
        g,
        t && (it(t) ? t[p] : t),
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
  const o = n.shapeFlag & 4 ? al(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, c = t && t.r, u = s.refs === Et ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ _t(d), m = d === Et ? rp : (g) => vd(u, g) ? !1 : St(f, g), _ = (g, p) => !(p && vd(u, p));
  if (c != null && c !== l) {
    if (_d(t), Yt(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ hn(c)) {
      const g = t;
      _(c, g.k) && (c.value = null), g.k && (u[g.k] = null);
    }
  }
  if (st(l))
    pa(l, s, 12, [a, u]);
  else {
    const g = Yt(l), p = /* @__PURE__ */ hn(l);
    if (g || p) {
      const F = () => {
        if (e.f) {
          const K = g ? m(l) ? d[l] : u[l] : _() || !e.k ? l.value : u[e.k];
          if (i)
            it(K) && cu(K, o);
          else if (it(K))
            K.includes(o) || K.push(o);
          else if (g)
            u[l] = [o], m(l) && (d[l] = u[l]);
          else {
            const z = [o];
            _(l, e.k) && (l.value = z), e.k && (u[e.k] = z);
          }
        } else g ? (u[l] = a, m(l) && (d[l] = a)) : p && (_(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const K = () => {
          F(), vs.delete(e);
        };
        K.id = -1, vs.set(e, K), xn(K, r);
      } else
        _d(e), F();
    }
  }
}
function _d(e) {
  const t = vs.get(e);
  t && (t.flags |= 8, vs.delete(e));
}
Zs().requestIdleCallback;
Zs().cancelIdleCallback;
const Go = (e) => !!e.type.__asyncLoader, Vp = (e) => e.type.__isKeepAlive;
function A0(e, t) {
  Rp(e, "a", t);
}
function I0(e, t) {
  Rp(e, "da", t);
}
function Rp(e, t, r = dn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (nl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Vp(i.parent.vnode) && E0(n, t, r, i), i = i.parent;
  }
}
function E0(e, t, r, n) {
  const i = nl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  $p(() => {
    cu(n[t], i);
  }, r);
}
function nl(e, t, r = dn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Lr();
      const s = ma(r), l = br(t, r, e, a);
      return s(), Vr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const $r = (e) => (t, r = dn) => {
  (!Qo || e === "sp") && nl(e, (...n) => t(...n), r);
}, O0 = $r("bm"), rl = $r("m"), F0 = $r(
  "bu"
), T0 = $r("u"), ha = $r(
  "bum"
), $p = $r("um"), D0 = $r(
  "sp"
), L0 = $r("rtg"), V0 = $r("rtc");
function R0(e, t = dn) {
  nl("ec", e, t);
}
const $0 = "components", zp = /* @__PURE__ */ Symbol.for("v-ndc");
function z0(e) {
  return Yt(e) ? j0($0, e, !1) || e : e || zp;
}
function j0(e, t, r = !0, n = !1) {
  const i = Dn || dn;
  if (i) {
    const o = i.type;
    {
      const s = My(
        o,
        !1
      );
      if (s && (s === t || s === _n(t) || s === Js(_n(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sd(i[e] || o[e], t) || // global registration
      Sd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Sd(e, t) {
  return e && (e[t] || e[_n(t)] || e[Js(_n(t))]);
}
function Mt(e, t, r, n) {
  let i;
  const o = r, a = it(e);
  if (a || Yt(e)) {
    const s = a && /* @__PURE__ */ fi(e);
    let l = !1, c = !1;
    s && (l = !/* @__PURE__ */ Gn(e), c = /* @__PURE__ */ Rr(e), e = Qs(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        l ? c ? Zi(rr(e[u])) : rr(e[u]) : e[u],
        u,
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
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const gc = (e) => e ? sh(e) ? al(e) : gc(e.parent) : null, Wo = (
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
    $parent: (e) => gc(e.parent),
    $root: (e) => gc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _u(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tl.bind(e.proxy)),
    $watch: (e) => M0.bind(e)
  })
), Al = (e, t) => e !== Et && !e.__isScriptSetup && St(e, t), H0 = {
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
        if (Al(n, t))
          return a[t] = 1, n[t];
        if (i !== Et && St(i, t))
          return a[t] = 2, i[t];
        if (St(o, t))
          return a[t] = 3, o[t];
        if (r !== Et && St(r, t))
          return a[t] = 4, r[t];
        yc && (a[t] = 0);
      }
    }
    const c = Wo[t];
    let u, d;
    if (c)
      return t === "$attrs" && un(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (r !== Et && St(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      d = l.config.globalProperties, St(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Al(i, t) ? (i[t] = r, !0) : n !== Et && St(n, t) ? (n[t] = r, !0) : St(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Et && s[0] !== "$" && St(e, s) || Al(t, s) || St(o, s) || St(n, s) || St(Wo, s) || St(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : St(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function wd(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let yc = !0;
function G0(e) {
  const t = Hp(e), r = e.proxy, n = e.ctx;
  yc = !1, t.beforeCreate && xd(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: m,
    updated: _,
    activated: g,
    deactivated: p,
    beforeDestroy: F,
    beforeUnmount: K,
    destroyed: z,
    unmounted: G,
    render: x,
    renderTracked: q,
    renderTriggered: R,
    errorCaptured: ne,
    serverPrefetch: B,
    // public API
    expose: Z,
    inheritAttrs: I,
    // assets
    components: ae,
    directives: ie,
    filters: he
  } = t;
  if (c && W0(c, n, null), a)
    for (const de in a) {
      const P = a[de];
      st(P) && (n[de] = P.bind(r));
    }
  if (i) {
    const de = i.call(r, r);
    At(de) && (e.data = /* @__PURE__ */ io(de));
  }
  if (yc = !0, o)
    for (const de in o) {
      const P = o[de], H = st(P) ? P.bind(r, r) : st(P.get) ? P.get.bind(r, r) : pr, oe = !st(P) && st(P.set) ? P.set.bind(r) : pr, j = ut({
        get: H,
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
      w0(P, de[P]);
    });
  }
  u && xd(u, e, "c");
  function ge(de, P) {
    it(P) ? P.forEach((H) => de(H.bind(r))) : P && de(P.bind(r));
  }
  if (ge(O0, d), ge(rl, f), ge(F0, m), ge(T0, _), ge(A0, g), ge(I0, p), ge(R0, ne), ge(V0, q), ge(L0, R), ge(ha, K), ge($p, G), ge(D0, B), it(Z))
    if (Z.length) {
      const de = e.exposed || (e.exposed = {});
      Z.forEach((P) => {
        Object.defineProperty(de, P, {
          get: () => r[P],
          set: (H) => r[P] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === pr && (e.render = x), I != null && (e.inheritAttrs = I), ae && (e.components = ae), ie && (e.directives = ie), B && Lp(e);
}
function W0(e, t, r = pr) {
  it(e) && (e = bc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    At(i) ? "default" in i ? o = Za(
      i.from || n,
      i.default,
      !0
    ) : o = Za(i.from || n) : o = Za(i), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function xd(e, t, r) {
  br(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function jp(e, t, r, n) {
  let i = n.includes(".") ? Dp(r, n) : () => r[n];
  if (Yt(e)) {
    const o = t[e];
    st(o) && pi(i, o);
  } else if (st(e))
    pi(i, e.bind(r));
  else if (At(e))
    if (it(e))
      e.forEach((o) => jp(o, t, r, n));
    else {
      const o = st(e.handler) ? e.handler.bind(r) : t[e.handler];
      st(o) && pi(i, o, e);
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
    (c) => _s(l, c, a, !0)
  ), _s(l, t, a)), At(t) && o.set(t, l), l;
}
function _s(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && _s(e, o, r, !0), i && i.forEach(
    (a) => _s(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = K0[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const K0 = {
  data: kd,
  props: Md,
  emits: Md,
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
  watch: U0,
  // provide / inject
  provide: kd,
  inject: B0
};
function kd(e, t) {
  return t ? e ? function() {
    return gn(
      st(e) ? e.call(this, this) : e,
      st(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function B0(e, t) {
  return Io(bc(e), bc(t));
}
function bc(e) {
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
function Io(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Md(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    wd(e),
    wd(t ?? {})
  ) : t;
}
function U0(e, t) {
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
let Y0 = 0;
function q0(e, t) {
  return function(n, i = null) {
    st(n) || (n = gn({}, n)), i != null && !At(i) && (i = null);
    const o = Gp(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const c = o.app = {
      _uid: Y0++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ny,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && st(u.install) ? (a.add(u), u.install(c, ...d)) : st(u) && (a.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (o.components[u] = d, c) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, c) : o.directives[u];
      },
      mount(u, d, f) {
        if (!l) {
          const m = c._ceVNode || Be(n, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, c._container = u, u.__vue_app__ = c, al(m.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (br(
          s,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = Bi;
        Bi = c;
        try {
          return u();
        } finally {
          Bi = d;
        }
      }
    };
    return c;
  };
}
let Bi = null;
const X0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${wi(t)}Modifiers`];
function J0(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Et;
  let i = r;
  const o = t.startsWith("update:"), a = o && X0(n, t.slice(7));
  a && (a.trim && (i = r.map((u) => Yt(u) ? u.trim() : u)), a.number && (i = r.map(du)));
  let s, l = n[s = kl(t)] || // also try camelCase event handler (#2249)
  n[s = kl(_n(t))];
  !l && o && (l = n[s = kl(wi(t))]), l && br(
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
    e.emitted[s] = !0, br(
      c,
      e,
      6,
      i
    );
  }
}
const Z0 = /* @__PURE__ */ new WeakMap();
function Wp(e, t, r = !1) {
  const n = r ? Z0 : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!st(e)) {
    const l = (c) => {
      const u = Wp(c, t, !0);
      u && (s = !0, gn(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (At(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => a[l] = null) : gn(a, o), At(e) && n.set(e, a), a);
}
function il(e, t) {
  return !e || !Ys(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), St(e, t[0].toLowerCase() + t.slice(1)) || St(e, wi(t)) || St(e, t));
}
function Pd(e) {
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
    renderCache: u,
    props: d,
    data: f,
    setupState: m,
    ctx: _,
    inheritAttrs: g
  } = e, p = bs(e);
  let F, K;
  try {
    if (r.shapeFlag & 4) {
      const G = i || n, x = G;
      F = cr(
        c.call(
          x,
          G,
          u,
          d,
          m,
          f,
          _
        )
      ), K = s;
    } else {
      const G = t;
      F = cr(
        G.length > 1 ? G(
          d,
          { attrs: s, slots: a, emit: l }
        ) : G(
          d,
          null
        )
      ), K = t.props ? s : Q0(s);
    }
  } catch (G) {
    Ko.length = 0, el(G, e, 1), F = Be(Yr);
  }
  let z = F;
  if (K && g !== !1) {
    const G = Object.keys(K), { shapeFlag: x } = z;
    G.length && x & 7 && (o && G.some(qs) && (K = ey(
      K,
      o
    )), z = Qi(z, K, !1, !0));
  }
  return r.dirs && (z = Qi(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && Su(z, r.transition), F = z, bs(p), F;
}
const Q0 = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ys(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ey = (e, t) => {
  const r = {};
  for (const n in e)
    (!qs(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ty(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Nd(n, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (Kp(a, n, f) && !il(c, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Nd(n, a, c) : !0 : !!a;
  return !1;
}
function Nd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Kp(t, e, o) && !il(r, o))
      return !0;
  }
  return !1;
}
function Kp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && At(n) && At(i) ? !fu(n, i) : n !== i;
}
function ny({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Bp = {}, Up = () => Object.create(Bp), Yp = (e) => Object.getPrototypeOf(e) === Bp;
function ry(e, t, r, n = !1) {
  const i = {}, o = Up();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qp(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ d0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function iy(e, t, r, n) {
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
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (il(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (St(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const _ = _n(f);
            i[_] = vc(
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
    let u;
    for (const d in s)
      (!t || // for camelCase
      !St(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = wi(d)) === d || !St(t, u))) && (l ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[d] = vc(
        l,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== s)
      for (const d in o)
        (!t || !St(t, d)) && (delete o[d], c = !0);
  }
  c && Ar(e.attrs, "set", "");
}
function qp(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const c = t[l];
      let u;
      i && St(i, u = _n(l)) ? !o || !o.includes(u) ? r[u] = c : (s || (s = {}))[u] = c : il(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ _t(r), c = s || Et;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      r[d] = vc(
        i,
        l,
        d,
        c[d],
        e,
        !St(c, d)
      );
    }
  }
  return a;
}
function vc(e, t, r, n, i, o) {
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
          const u = ma(i);
          n = c[r] = l.call(
            null,
            t
          ), u();
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
    ] && (n === "" || n === wi(r)) && (n = !0));
  }
  return n;
}
const oy = /* @__PURE__ */ new WeakMap();
function Xp(e, t, r = !1) {
  const n = r ? oy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!st(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = Xp(d, t, !0);
      gn(a, f), m && s.push(...m);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return At(e) && n.set(e, Gi), Gi;
  if (it(o))
    for (let u = 0; u < o.length; u++) {
      const d = _n(o[u]);
      Cd(d) && (a[d] = Et);
    }
  else if (o)
    for (const u in o) {
      const d = _n(u);
      if (Cd(d)) {
        const f = o[u], m = a[d] = it(f) || st(f) ? { type: f } : gn({}, f), _ = m.type;
        let g = !1, p = !0;
        if (it(_))
          for (let F = 0; F < _.length; ++F) {
            const K = _[F], z = st(K) && K.name;
            if (z === "Boolean") {
              g = !0;
              break;
            } else z === "String" && (p = !1);
          }
        else
          g = st(_) && _.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = p, (g || St(m, "default")) && s.push(d);
      }
    }
  const c = [a, s];
  return At(e) && n.set(e, c), c;
}
function Cd(e) {
  return e[0] !== "$" && !$o(e);
}
const wu = (e) => e === "_" || e === "_ctx" || e === "$stable", xu = (e) => it(e) ? e.map(cr) : [cr(e)], ay = (e, t, r) => {
  if (t._n)
    return t;
  const n = Fp((...i) => xu(t(...i)), r);
  return n._c = !1, n;
}, Jp = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (wu(i)) continue;
    const o = e[i];
    if (st(o))
      t[i] = ay(i, o, n);
    else if (o != null) {
      const a = xu(o);
      t[i] = () => a;
    }
  }
}, Zp = (e, t) => {
  const r = xu(t);
  e.slots.default = () => r;
}, Qp = (e, t, r) => {
  for (const n in t)
    (r || !wu(n)) && (e[n] = t[n]);
}, sy = (e, t, r) => {
  const n = e.slots = Up();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qp(n, t, r), r && lp(n, "_", i, !0)) : Jp(t, n);
  } else t && Zp(e, t);
}, ly = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Et;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : Qp(i, t, r) : (o = !t.$stable, Jp(t, i)), a = t;
  } else t && (Zp(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !wu(s) && a[s] == null && delete i[s];
}, xn = py;
function cy(e) {
  return uy(e);
}
function uy(e, t) {
  const r = Zs();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: m = pr,
    insertStaticContent: _
  } = e, g = (y, v, V, U = null, S = null, w = null, D = void 0, k = null, N = !!v.dynamicChildren) => {
    if (y === v)
      return;
    y && !xo(y, v) && (U = ue(y), fe(y, S, w, !0), y = null), v.patchFlag === -2 && (N = !1, v.dynamicChildren = null);
    const { type: A, ref: W, shapeFlag: J } = v;
    switch (A) {
      case ol:
        p(y, v, V, U);
        break;
      case Yr:
        F(y, v, V, U);
        break;
      case El:
        y == null && K(v, V, U, D);
        break;
      case Qe:
        ae(
          y,
          v,
          V,
          U,
          S,
          w,
          D,
          k,
          N
        );
        break;
      default:
        J & 1 ? x(
          y,
          v,
          V,
          U,
          S,
          w,
          D,
          k,
          N
        ) : J & 6 ? ie(
          y,
          v,
          V,
          U,
          S,
          w,
          D,
          k,
          N
        ) : (J & 64 || J & 128) && A.process(
          y,
          v,
          V,
          U,
          S,
          w,
          D,
          k,
          N,
          E
        );
    }
    W != null && S ? Ho(W, y && y.ref, w, v || y, !v) : W == null && y && y.ref != null && Ho(y.ref, null, w, y, !0);
  }, p = (y, v, V, U) => {
    if (y == null)
      n(
        v.el = s(v.children),
        V,
        U
      );
    else {
      const S = v.el = y.el;
      v.children !== y.children && c(S, v.children);
    }
  }, F = (y, v, V, U) => {
    y == null ? n(
      v.el = l(v.children || ""),
      V,
      U
    ) : v.el = y.el;
  }, K = (y, v, V, U) => {
    [y.el, y.anchor] = _(
      y.children,
      v,
      V,
      U,
      y.el,
      y.anchor
    );
  }, z = ({ el: y, anchor: v }, V, U) => {
    let S;
    for (; y && y !== v; )
      S = f(y), n(y, V, U), y = S;
    n(v, V, U);
  }, G = ({ el: y, anchor: v }) => {
    let V;
    for (; y && y !== v; )
      V = f(y), i(y), y = V;
    i(v);
  }, x = (y, v, V, U, S, w, D, k, N) => {
    if (v.type === "svg" ? D = "svg" : v.type === "math" && (D = "mathml"), y == null)
      q(
        v,
        V,
        U,
        S,
        w,
        D,
        k,
        N
      );
    else {
      const A = y.el && y.el._isVueCE ? y.el : null;
      try {
        A && A._beginPatch(), B(
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
  }, q = (y, v, V, U, S, w, D, k) => {
    let N, A;
    const { props: W, shapeFlag: J, transition: se, dirs: L } = y;
    if (N = y.el = a(
      y.type,
      w,
      W && W.is,
      W
    ), J & 8 ? u(N, y.children) : J & 16 && ne(
      y.children,
      N,
      null,
      U,
      S,
      Il(y, w),
      D,
      k
    ), L && ei(y, null, U, "created"), R(N, y, y.scopeId, D, U), W) {
      for (const ve in W)
        ve !== "value" && !$o(ve) && o(N, ve, null, W[ve], w, U);
      "value" in W && o(N, "value", null, W.value, w), (A = W.onVnodeBeforeMount) && or(A, U, y);
    }
    L && ei(y, null, U, "beforeMount");
    const le = dy(S, se);
    le && se.beforeEnter(N), n(N, v, V), ((A = W && W.onVnodeMounted) || le || L) && xn(() => {
      try {
        A && or(A, U, y), le && se.enter(N), L && ei(y, null, U, "mounted");
      } finally {
      }
    }, S);
  }, R = (y, v, V, U, S) => {
    if (V && m(y, V), U)
      for (let w = 0; w < U.length; w++)
        m(y, U[w]);
    if (S) {
      let w = S.subTree;
      if (v === w || rh(w.type) && (w.ssContent === v || w.ssFallback === v)) {
        const D = S.vnode;
        R(
          y,
          D,
          D.scopeId,
          D.slotScopeIds,
          S.parent
        );
      }
    }
  }, ne = (y, v, V, U, S, w, D, k, N = 0) => {
    for (let A = N; A < y.length; A++) {
      const W = y[A] = k ? Pr(y[A]) : cr(y[A]);
      g(
        null,
        W,
        v,
        V,
        U,
        S,
        w,
        D,
        k
      );
    }
  }, B = (y, v, V, U, S, w, D) => {
    const k = v.el = y.el;
    let { patchFlag: N, dynamicChildren: A, dirs: W } = v;
    N |= y.patchFlag & 16;
    const J = y.props || Et, se = v.props || Et;
    let L;
    if (V && ti(V, !1), (L = se.onVnodeBeforeUpdate) && or(L, V, v, y), W && ei(v, y, V, "beforeUpdate"), V && ti(V, !0), (J.innerHTML && se.innerHTML == null || J.textContent && se.textContent == null) && u(k, ""), A ? Z(
      y.dynamicChildren,
      A,
      k,
      V,
      U,
      Il(v, S),
      w
    ) : D || P(
      y,
      v,
      k,
      null,
      V,
      U,
      Il(v, S),
      w,
      !1
    ), N > 0) {
      if (N & 16)
        I(k, J, se, V, S);
      else if (N & 2 && J.class !== se.class && o(k, "class", null, se.class, S), N & 4 && o(k, "style", J.style, se.style, S), N & 8) {
        const le = v.dynamicProps;
        for (let ve = 0; ve < le.length; ve++) {
          const we = le[ve], pe = J[we], be = se[we];
          (be !== pe || we === "value") && o(k, we, pe, be, S, V);
        }
      }
      N & 1 && y.children !== v.children && u(k, v.children);
    } else !D && A == null && I(k, J, se, V, S);
    ((L = se.onVnodeUpdated) || W) && xn(() => {
      L && or(L, V, v, y), W && ei(v, y, V, "updated");
    }, U);
  }, Z = (y, v, V, U, S, w, D) => {
    for (let k = 0; k < v.length; k++) {
      const N = y[k], A = v[k], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xo(N, A) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      g(
        N,
        A,
        W,
        null,
        U,
        S,
        w,
        D,
        !0
      );
    }
  }, I = (y, v, V, U, S) => {
    if (v !== V) {
      if (v !== Et)
        for (const w in v)
          !$o(w) && !(w in V) && o(
            y,
            w,
            v[w],
            null,
            S,
            U
          );
      for (const w in V) {
        if ($o(w)) continue;
        const D = V[w], k = v[w];
        D !== k && w !== "value" && o(y, w, k, D, S, U);
      }
      "value" in V && o(y, "value", v.value, V.value, S);
    }
  }, ae = (y, v, V, U, S, w, D, k, N) => {
    const A = v.el = y ? y.el : s(""), W = v.anchor = y ? y.anchor : s("");
    let { patchFlag: J, dynamicChildren: se, slotScopeIds: L } = v;
    L && (k = k ? k.concat(L) : L), y == null ? (n(A, V, U), n(W, V, U), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      V,
      W,
      S,
      w,
      D,
      k,
      N
    )) : J > 0 && J & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === se.length ? (Z(
      y.dynamicChildren,
      se,
      V,
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
      V,
      W,
      S,
      w,
      D,
      k,
      N
    );
  }, ie = (y, v, V, U, S, w, D, k, N) => {
    v.slotScopeIds = k, y == null ? v.shapeFlag & 512 ? S.ctx.activate(
      v,
      V,
      U,
      D,
      N
    ) : he(
      v,
      V,
      U,
      S,
      w,
      D,
      N
    ) : te(y, v, N);
  }, he = (y, v, V, U, S, w, D) => {
    const k = y.component = vy(
      y,
      U,
      S
    );
    if (Vp(y) && (k.ctx.renderer = E), Sy(k, !1, D), k.asyncDep) {
      if (S && S.registerDep(k, ge, D), !y.el) {
        const N = k.subTree = Be(Yr);
        F(null, N, v, V), y.placeholder = N.el;
      }
    } else
      ge(
        k,
        y,
        v,
        V,
        S,
        w,
        D
      );
  }, te = (y, v, V) => {
    const U = v.component = y.component;
    if (ty(y, v, V))
      if (U.asyncDep && !U.asyncResolved) {
        de(U, v, V);
        return;
      } else
        U.next = v, U.update();
    else
      v.el = y.el, U.vnode = v;
  }, ge = (y, v, V, U, S, w, D) => {
    const k = () => {
      if (y.isMounted) {
        let { next: J, bu: se, u: L, parent: le, vnode: ve } = y;
        {
          const h = th(y);
          if (h) {
            J && (J.el = ve.el, de(y, J, D)), h.asyncDep.then(() => {
              xn(() => {
                y.isUnmounted || A();
              }, S);
            });
            return;
          }
        }
        let we = J, pe;
        ti(y, !1), J ? (J.el = ve.el, de(y, J, D)) : J = ve, se && Ja(se), (pe = J.props && J.props.onVnodeBeforeUpdate) && or(pe, le, J, ve), ti(y, !0);
        const be = Pd(y), ye = y.subTree;
        y.subTree = be, g(
          ye,
          be,
          // parent may have changed if it's in a teleport
          d(ye.el),
          // anchor may have changed if it's in a fragment
          ue(ye),
          y,
          S,
          w
        ), J.el = be.el, we === null && ny(y, be.el), L && xn(L, S), (pe = J.props && J.props.onVnodeUpdated) && xn(
          () => or(pe, le, J, ve),
          S
        );
      } else {
        let J;
        const { el: se, props: L } = v, { bm: le, m: ve, parent: we, root: pe, type: be } = y, ye = Go(v);
        ti(y, !1), le && Ja(le), !ye && (J = L && L.onVnodeBeforeMount) && or(J, we, v), ti(y, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            be,
            y.parent ? y.parent.type : void 0
          );
          const h = y.subTree = Pd(y);
          g(
            null,
            h,
            V,
            U,
            y,
            S,
            w
          ), v.el = h.el;
        }
        if (ve && xn(ve, S), !ye && (J = L && L.onVnodeMounted)) {
          const h = v;
          xn(
            () => or(J, we, h),
            S
          );
        }
        (v.shapeFlag & 256 || we && Go(we.vnode) && we.vnode.shapeFlag & 256) && y.a && xn(y.a, S), y.isMounted = !0, v = V = U = null;
      }
    };
    y.scope.on();
    const N = y.effect = new fp(k);
    y.scope.off();
    const A = y.update = N.run.bind(N), W = y.job = N.runIfDirty.bind(N);
    W.i = y, W.id = y.uid, N.scheduler = () => _u(W), ti(y, !0), A();
  }, de = (y, v, V) => {
    v.component = y;
    const U = y.vnode.props;
    y.vnode = v, y.next = null, iy(y, v.props, U, V), ly(y, v.children, V), Lr(), bd(y), Vr();
  }, P = (y, v, V, U, S, w, D, k, N = !1) => {
    const A = y && y.children, W = y ? y.shapeFlag : 0, J = v.children, { patchFlag: se, shapeFlag: L } = v;
    if (se > 0) {
      if (se & 128) {
        oe(
          A,
          J,
          V,
          U,
          S,
          w,
          D,
          k,
          N
        );
        return;
      } else if (se & 256) {
        H(
          A,
          J,
          V,
          U,
          S,
          w,
          D,
          k,
          N
        );
        return;
      }
    }
    L & 8 ? (W & 16 && Q(A, S, w), J !== A && u(V, J)) : W & 16 ? L & 16 ? oe(
      A,
      J,
      V,
      U,
      S,
      w,
      D,
      k,
      N
    ) : Q(A, S, w, !0) : (W & 8 && u(V, ""), L & 16 && ne(
      J,
      V,
      U,
      S,
      w,
      D,
      k,
      N
    ));
  }, H = (y, v, V, U, S, w, D, k, N) => {
    y = y || Gi, v = v || Gi;
    const A = y.length, W = v.length, J = Math.min(A, W);
    let se;
    for (se = 0; se < J; se++) {
      const L = v[se] = N ? Pr(v[se]) : cr(v[se]);
      g(
        y[se],
        L,
        V,
        null,
        S,
        w,
        D,
        k,
        N
      );
    }
    A > W ? Q(
      y,
      S,
      w,
      !0,
      !1,
      J
    ) : ne(
      v,
      V,
      U,
      S,
      w,
      D,
      k,
      N,
      J
    );
  }, oe = (y, v, V, U, S, w, D, k, N) => {
    let A = 0;
    const W = v.length;
    let J = y.length - 1, se = W - 1;
    for (; A <= J && A <= se; ) {
      const L = y[A], le = v[A] = N ? Pr(v[A]) : cr(v[A]);
      if (xo(L, le))
        g(
          L,
          le,
          V,
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
    for (; A <= J && A <= se; ) {
      const L = y[J], le = v[se] = N ? Pr(v[se]) : cr(v[se]);
      if (xo(L, le))
        g(
          L,
          le,
          V,
          null,
          S,
          w,
          D,
          k,
          N
        );
      else
        break;
      J--, se--;
    }
    if (A > J) {
      if (A <= se) {
        const L = se + 1, le = L < W ? v[L].el : U;
        for (; A <= se; )
          g(
            null,
            v[A] = N ? Pr(v[A]) : cr(v[A]),
            V,
            le,
            S,
            w,
            D,
            k,
            N
          ), A++;
      }
    } else if (A > se)
      for (; A <= J; )
        fe(y[A], S, w, !0), A++;
    else {
      const L = A, le = A, ve = /* @__PURE__ */ new Map();
      for (A = le; A <= se; A++) {
        const b = v[A] = N ? Pr(v[A]) : cr(v[A]);
        b.key != null && ve.set(b.key, A);
      }
      let we, pe = 0;
      const be = se - le + 1;
      let ye = !1, h = 0;
      const $ = new Array(be);
      for (A = 0; A < be; A++) $[A] = 0;
      for (A = L; A <= J; A++) {
        const b = y[A];
        if (pe >= be) {
          fe(b, S, w, !0);
          continue;
        }
        let T;
        if (b.key != null)
          T = ve.get(b.key);
        else
          for (we = le; we <= se; we++)
            if ($[we - le] === 0 && xo(b, v[we])) {
              T = we;
              break;
            }
        T === void 0 ? fe(b, S, w, !0) : ($[T - le] = A + 1, T >= h ? h = T : ye = !0, g(
          b,
          v[T],
          V,
          null,
          S,
          w,
          D,
          k,
          N
        ), pe++);
      }
      const C = ye ? fy($) : Gi;
      for (we = C.length - 1, A = be - 1; A >= 0; A--) {
        const b = le + A, T = v[b], M = v[b + 1], Y = b + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          M.el || nh(M)
        ) : U;
        $[A] === 0 ? g(
          null,
          T,
          V,
          Y,
          S,
          w,
          D,
          k,
          N
        ) : ye && (we < 0 || A !== C[we] ? j(T, V, Y, 2) : we--);
      }
    }
  }, j = (y, v, V, U, S = null) => {
    const { el: w, type: D, transition: k, children: N, shapeFlag: A } = y;
    if (A & 6) {
      j(y.component.subTree, v, V, U);
      return;
    }
    if (A & 128) {
      y.suspense.move(v, V, U);
      return;
    }
    if (A & 64) {
      D.move(y, v, V, E);
      return;
    }
    if (D === Qe) {
      n(w, v, V);
      for (let J = 0; J < N.length; J++)
        j(N[J], v, V, U);
      n(y.anchor, v, V);
      return;
    }
    if (D === El) {
      z(y, v, V);
      return;
    }
    if (U !== 2 && A & 1 && k)
      if (U === 0)
        k.beforeEnter(w), n(w, v, V), xn(() => k.enter(w), S);
      else {
        const { leave: J, delayLeave: se, afterLeave: L } = k, le = () => {
          y.ctx.isUnmounted ? i(w) : n(w, v, V);
        }, ve = () => {
          w._isLeaving && w[C0](
            !0
            /* cancelled */
          ), J(w, () => {
            le(), L && L();
          });
        };
        se ? se(w, le, ve) : ve();
      }
    else
      n(w, v, V);
  }, fe = (y, v, V, U = !1, S = !1) => {
    const {
      type: w,
      props: D,
      ref: k,
      children: N,
      dynamicChildren: A,
      shapeFlag: W,
      patchFlag: J,
      dirs: se,
      cacheIndex: L,
      memo: le
    } = y;
    if (J === -2 && (S = !1), k != null && (Lr(), Ho(k, null, V, y, !0), Vr()), L != null && (v.renderCache[L] = void 0), W & 256) {
      v.ctx.deactivate(y);
      return;
    }
    const ve = W & 1 && se, we = !Go(y);
    let pe;
    if (we && (pe = D && D.onVnodeBeforeUnmount) && or(pe, v, y), W & 6)
      O(y.component, V, U);
    else {
      if (W & 128) {
        y.suspense.unmount(V, U);
        return;
      }
      ve && ei(y, null, v, "beforeUnmount"), W & 64 ? y.type.remove(
        y,
        v,
        V,
        E,
        U
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Qe || J > 0 && J & 64) ? Q(
        A,
        v,
        V,
        !1,
        !0
      ) : (w === Qe && J & 384 || !S && W & 16) && Q(N, v, V), U && Pe(y);
    }
    const be = le != null && L == null;
    (we && (pe = D && D.onVnodeUnmounted) || ve || be) && xn(() => {
      pe && or(pe, v, y), ve && ei(y, null, v, "unmounted"), be && (y.el = null);
    }, V);
  }, Pe = (y) => {
    const { type: v, el: V, anchor: U, transition: S } = y;
    if (v === Qe) {
      re(V, U);
      return;
    }
    if (v === El) {
      G(y);
      return;
    }
    const w = () => {
      i(V), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (y.shapeFlag & 1 && S && !S.persisted) {
      const { leave: D, delayLeave: k } = S, N = () => D(V, w);
      k ? k(y.el, w, N) : N();
    } else
      w();
  }, re = (y, v) => {
    let V;
    for (; y !== v; )
      V = f(y), i(y), y = V;
    i(v);
  }, O = (y, v, V) => {
    const { bum: U, scope: S, job: w, subTree: D, um: k, m: N, a: A } = y;
    Ad(N), Ad(A), U && Ja(U), S.stop(), w && (w.flags |= 8, fe(D, y, v, V)), k && xn(k, v), xn(() => {
      y.isUnmounted = !0;
    }, v);
  }, Q = (y, v, V, U = !1, S = !1, w = 0) => {
    for (let D = w; D < y.length; D++)
      fe(y[D], v, V, U, S);
  }, ue = (y) => {
    if (y.shapeFlag & 6)
      return ue(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const v = f(y.anchor || y.el), V = v && v[P0];
    return V ? f(V) : v;
  };
  let me = !1;
  const _e = (y, v, V) => {
    let U;
    y == null ? v._vnode && (fe(v._vnode, null, null, !0), U = v._vnode.component) : g(
      v._vnode || null,
      y,
      v,
      null,
      null,
      null,
      V
    ), v._vnode = y, me || (me = !0, bd(U), Ip(), me = !1);
  }, E = {
    p: g,
    um: fe,
    m: j,
    r: Pe,
    mt: he,
    mc: ne,
    pc: P,
    pbc: Z,
    n: ue,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: q0(_e)
  };
}
function Il({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ti({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function dy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Pr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && eh(a, s)), s.type === ol && (s.patchFlag === -1 && (s = i[o] = Pr(s)), s.el = a.el), s.type === Yr && !s.el && (s.el = a.el);
    }
}
function fy(e) {
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
function Ad(e) {
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
function py(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : S0(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), ol = /* @__PURE__ */ Symbol.for("v-txt"), Yr = /* @__PURE__ */ Symbol.for("v-cmt"), El = /* @__PURE__ */ Symbol.for("v-stc"), Ko = [];
let Ln = null;
function Fe(e = !1) {
  Ko.push(Ln = e ? null : []);
}
function hy() {
  Ko.pop(), Ln = Ko[Ko.length - 1] || null;
}
let Zo = 1;
function Id(e, t = !1) {
  Zo += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function ih(e) {
  return e.dynamicChildren = Zo > 0 ? Ln || Gi : null, hy(), Zo > 0 && Ln && Ln.push(e), e;
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
function Vn(e, t, r, n, i) {
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
const ah = ({ key: e }) => e ?? null, Qa = ({
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
    ref: t && Qa(t),
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
  return s ? (ku(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Yt(r) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ln.push(l), l;
}
const Be = my;
function my(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === zp) && (e = Yr), oh(e)) {
    const s = Qi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && ku(s, r), Zo > 0 && !o && Ln && (s.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = s : Ln.push(s)), s.patchFlag = -2, s;
  }
  if (Py(e) && (e = e.__vccOpts), t) {
    t = gy(t);
    let { class: s, style: l } = t;
    s && !Yt(s) && (t.class = mt(s)), At(l) && (/* @__PURE__ */ vu(l) && !it(l) && (l = gn({}, l)), t.style = Ct(l));
  }
  const a = Yt(e) ? 1 : rh(e) ? 128 : N0(e) ? 64 : At(e) ? 4 : st(e) ? 2 : 0;
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
function gy(e) {
  return e ? /* @__PURE__ */ vu(e) || Yp(e) ? gn({}, e) : e : null;
}
function Qi(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, c = t ? Nr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ah(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(Qa(t)) : [o, Qa(t)] : Qa(t)
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
  return l && n && Su(
    u,
    l.clone(u)
  ), u;
}
function Eo(e = " ", t = 0) {
  return Be(ol, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Fe(), Vn(Yr, null, e)) : Be(Yr, null, e);
}
function cr(e) {
  return e == null || typeof e == "boolean" ? Be(Yr) : it(e) ? Be(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oh(e) ? Pr(e) : Be(ol, null, String(e));
}
function Pr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qi(e);
}
function ku(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ku(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Yp(t) ? t._ctx = Dn : i === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else st(t) ? (t = { default: t, _ctx: Dn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Eo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Nr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Ct([t.style, n.style]);
      else if (Ys(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(it(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !qs(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function or(e, t, r, n = null) {
  br(e, t, 7, [
    r,
    n
  ]);
}
const yy = Gp();
let by = 0;
function vy(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || yy, o = {
    uid: by++,
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
    scope: new Kg(
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = J0.bind(null, o), e.ce && e.ce(o), o;
}
let dn = null;
const _y = () => dn || Dn;
let Ss, _c;
{
  const e = Zs(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Ss = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => dn = r
  ), _c = t(
    "__VUE_SSR_SETTERS__",
    (r) => Qo = r
  );
}
const ma = (e) => {
  const t = dn;
  return Ss(e), e.scope.on(), () => {
    e.scope.off(), Ss(t);
  };
}, Ed = () => {
  dn && dn.scope.off(), Ss(null);
};
function sh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function Sy(e, t = !1, r = !1) {
  t && _c(t);
  const { props: n, children: i } = e.vnode, o = sh(e);
  ry(e, n, o, t), sy(e, i, r || t);
  const a = o ? wy(e, t) : void 0;
  return t && _c(!1), a;
}
function wy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, H0);
  const { setup: n } = r;
  if (n) {
    Lr();
    const i = e.setupContext = n.length > 1 ? ky(e) : null, o = ma(e), a = pa(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = op(a);
    if (Vr(), o(), (s || e.sp) && !Go(e) && Lp(e), s) {
      if (a.then(Ed, Ed), t)
        return a.then((l) => {
          Od(e, l);
        }).catch((l) => {
          el(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Od(e, a);
  } else
    lh(e);
}
function Od(e, t, r) {
  st(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : At(t) && (e.setupState = Np(t)), lh(e);
}
function lh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || pr);
  {
    const i = ma(e);
    Lr();
    try {
      G0(e);
    } finally {
      Vr(), i();
    }
  }
}
const xy = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function ky(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, xy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function al(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Np(f0(e.exposed)), {
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
function My(e, t = !0) {
  return st(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Py(e) {
  return st(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ g0(e, t, Qo), Ny = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sc;
const Fd = typeof window < "u" && window.trustedTypes;
if (Fd)
  try {
    Sc = /* @__PURE__ */ Fd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ch = Sc ? (e) => Sc.createHTML(e) : (e) => e, Cy = "http://www.w3.org/2000/svg", Ay = "http://www.w3.org/1998/Math/MathML", Mr = typeof document < "u" ? document : null, Td = Mr && /* @__PURE__ */ Mr.createElement("template"), Iy = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Mr.createElementNS(Cy, e) : t === "mathml" ? Mr.createElementNS(Ay, e) : r ? Mr.createElement(e, { is: r }) : Mr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Mr.createTextNode(e),
  createComment: (e) => Mr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mr.querySelector(e),
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
      Td.innerHTML = ch(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Td.content;
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
}, Ey = /* @__PURE__ */ Symbol("_vtc");
function Oy(e, t, r) {
  const n = e[Ey];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const ws = /* @__PURE__ */ Symbol("_vod"), uh = /* @__PURE__ */ Symbol("_vsh"), bi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[ws] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : ko(e, t);
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
  e.style.display = t ? e[ws] : "none", e[uh] = !t;
}
const Fy = /* @__PURE__ */ Symbol(""), Ty = /(?:^|;)\s*display\s*:/;
function Dy(e, t, r) {
  const n = e.style, i = Yt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Yt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && es(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && es(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), es(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[Fy];
      a && (r += ";" + a), n.cssText = r, o = Ty.test(r);
    }
  } else t && e.removeAttribute("style");
  ws in e && (e[ws] = o ? n.display : "", e[uh] && (n.display = "none"));
}
const Dd = /\s*!important$/;
function es(e, t, r) {
  if (it(r))
    r.forEach((n) => es(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Ly(e, t);
    Dd.test(r) ? e.setProperty(
      wi(n),
      r.replace(Dd, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ld = ["Webkit", "Moz", "ms"], Ol = {};
function Ly(e, t) {
  const r = Ol[t];
  if (r)
    return r;
  let n = _n(t);
  if (n !== "filter" && n in e)
    return Ol[t] = n;
  n = Js(n);
  for (let i = 0; i < Ld.length; i++) {
    const o = Ld[i] + n;
    if (o in e)
      return Ol[t] = o;
  }
  return t;
}
const Vd = "http://www.w3.org/1999/xlink";
function Rd(e, t, r, n, i, o = Gg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Vd, t.slice(6, t.length)) : e.setAttributeNS(Vd, t, r) : r == null || o && !cp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : yr(r) ? String(r) : r
  );
}
function $d(e, t, r, n, i) {
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
const zd = /* @__PURE__ */ Symbol("_vei");
function Ry(e, t, r, n, i = null) {
  const o = e[zd] || (e[zd] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = $y(t);
    if (n) {
      const c = o[t] = Hy(
        n,
        i
      );
      Di(e, s, c, l);
    } else a && (Vy(e, s, a, l), o[t] = void 0);
  }
}
const jd = /(?:Once|Passive|Capture)$/;
function $y(e) {
  let t;
  if (jd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(jd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : wi(e.slice(2)), t];
}
let Fl = 0;
const zy = /* @__PURE__ */ Promise.resolve(), jy = () => Fl || (zy.then(() => Fl = 0), Fl = Date.now());
function Hy(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    br(
      Gy(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = jy(), r;
}
function Gy(e, t) {
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
const Hd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wy = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? Oy(e, n, a) : t === "style" ? Dy(e, r, n) : Ys(t) ? qs(t) || Ry(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ky(e, t, n, a)) ? ($d(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (By(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Yt(n))) ? $d(e, _n(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Rd(e, t, n, a));
};
function Ky(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hd(t) && st(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hd(t) && Yt(r) ? !1 : t in e;
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
const Gd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => Ja(t, r) : t;
};
function Uy(e) {
  e.target.composing = !0;
}
function Wd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tl = /* @__PURE__ */ Symbol("_assign");
function Kd(e, t, r) {
  return t && (e = e.trim()), r && (e = du(e)), e;
}
const Bd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Tl] = Gd(i);
    const o = n || i.props && i.props.type === "number";
    Di(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Tl](Kd(e.value, r, o));
    }), (r || o) && Di(e, "change", () => {
      e.value = Kd(e.value, r, o);
    }), t || (Di(e, "compositionstart", Uy), Di(e, "compositionend", Wd), Di(e, "change", Wd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Tl] = Gd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? du(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Yy = ["ctrl", "shift", "alt", "meta"], qy = {
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
  exact: (e, t) => Yy.some((r) => e[`${r}Key`] && !t.includes(r))
}, Pt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = qy[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Xy = /* @__PURE__ */ gn({ patchProp: Wy }, Iy);
let Ud;
function Jy() {
  return Ud || (Ud = cy(Xy));
}
const Mu = ((...e) => {
  const t = Jy().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Qy(n);
    if (!i) return;
    const o = t._component;
    !st(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, Zy(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function Zy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qy(e) {
  return Yt(e) ? document.querySelector(e) : e;
}
const eb = "PanoramaSuite.Debug.Diagnostics", tb = "PanoramaSuite.Debug.ExportDiagnostics", Dl = "pano_suite.diagnostics.v1", Yd = "pano_suite.diagnostics.previous.v1", nb = 300, rb = 2e5, ib = 100, ob = 20, ab = 1e3, sb = 2, Da = 1024 * 1024;
function Gr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function lb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function cb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: lb,
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
function ub(e = {}) {
  const t = { ...cb(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, c = 0;
  const u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((E) => {
    u.delete(E), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((E) => {
    d.delete(E), m.collected += 1;
  }) : null, p = /* @__PURE__ */ new Set(), F = { created: 0, lost: 0, restored: 0, disposed: 0 }, K = [], z = /* @__PURE__ */ new Map();
  let G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), q = { count: 0, maxMs: 0 };
  const R = [];
  function ne(E, ce, y = void 0) {
    K.push(y === void 0 ? { t: t.clock(), type: E, label: ce } : { t: t.clock(), type: E, label: ce, detail: y }), K.length > ib && K.shift();
  }
  function B(E, ce, y, v, V) {
    if (!r || !v || !t.WeakRef) return v;
    const U = { ref: new t.WeakRef(v), label: V };
    return E.add(U), ce == null || ce.register(v, U), y.created += 1, v;
  }
  function Z(E, ce = "") {
    return B(u, _, f, E, ce);
  }
  function I(E, ce = "") {
    return B(d, g, m, E, ce);
  }
  function ae({ label: E = "", width: ce, height: y, offscreen: v = !1 } = {}) {
    const V = globalThis.OffscreenCanvas;
    let U;
    return v && typeof V < "u" ? U = new V(ce, y) : (U = t.document().createElement("canvas"), ce !== void 0 && y !== void 0 && (U.width = ce, U.height = y)), Z(U, E);
  }
  function ie(E) {
    E.width = 0, E.height = 0, r && (f.released += 1);
  }
  function he(E = t.document(), ce = "") {
    var y;
    return I(((y = E == null ? void 0 : E.createElement) == null ? void 0 : y.call(E, "video")) || null, ce);
  }
  function te(E, ce) {
    if (!r || !E) return () => {
    };
    const y = { label: ce, lost: !1, disposed: !1 };
    p.add(y), F.created += 1, ne("webgl-created", ce);
    const v = () => {
      y.disposed || (y.lost = !0, F.lost += 1, ne("webglcontextlost", ce));
    }, V = () => {
      y.disposed || (y.lost = !1, F.restored += 1, ne("webglcontextrestored", ce));
    };
    return E.addEventListener("webglcontextlost", v), E.addEventListener("webglcontextrestored", V), () => {
      y.disposed || (y.disposed = !0, p.delete(y), F.disposed += 1, ne("webgl-disposed", ce));
    };
  }
  function ge(E, ce) {
    return z.set(E, ce), () => {
      z.get(E) === ce && z.delete(E);
    };
  }
  function de() {
    return r ? t.now() : -1;
  }
  function P(E) {
    if (E < 0 || !r) return;
    const ce = t.now() - E;
    G.count += 1, G.maxMs = Math.max(G.maxMs, ce);
  }
  function H(E, ce) {
    if (ce < 0 || !r) return;
    const y = t.now() - ce, v = x.get(E) ?? { count: 0, maxMs: 0 };
    v.count += 1, v.maxMs = Math.max(v.maxMs, y), x.set(E, v);
  }
  function oe() {
    let E = 0, ce = 0, y = 0, v = [0, 0];
    const V = {};
    for (const U of u) {
      const S = U.ref.deref();
      if (!S) continue;
      E += 1;
      const w = S.width * S.height;
      w > 0 && (ce += 1), y += w, w > v[0] * v[1] && (v = [S.width, S.height]);
      const D = V[U.label] ?? (V[U.label] = [0, 0]);
      D[0] += 1, D[1] += w;
    }
    return { ...f, alive: E, sized: ce, pixels: y, mb: Gr(y * 4 / Da, 1), largest: v, byLabel: V };
  }
  function j() {
    const E = [];
    let ce = 0, y = 0;
    for (const v of d) {
      const V = v.ref.deref();
      if (!V) continue;
      ce += 1;
      const U = !V.paused && !V.ended;
      U && (y += 1), E.length < ob && E.push({
        label: v.label,
        playing: U,
        src: !!(V.currentSrc || V.src),
        size: [V.videoWidth || 0, V.videoHeight || 0],
        ready: V.readyState ?? 0,
        connected: !!V.isConnected
      });
    }
    return { ...m, alive: ce, playing: y, list: E };
  }
  function fe() {
    const E = t.now(), ce = t.memory(), y = {
      t: t.clock(),
      heap: ce ? { used: Gr(ce.usedJSHeapSize / Da, 1), total: Gr(ce.totalJSHeapSize / Da, 1), limit: Gr(ce.jsHeapSizeLimit / Da, 1) } : null,
      canvas: oe(),
      webgl: { ...F, alive: [...p].filter((v) => !v.lost).length },
      video: j(),
      frame: { count: G.count, maxMs: Gr(G.maxMs), longTasks: q.count, longTaskMaxMs: Gr(q.maxMs) },
      renders: Object.fromEntries([...x].map(([v, V]) => [v, { count: V.count, maxMs: Gr(V.maxMs) }])),
      sources: Object.fromEntries([...z].map(([v, V]) => [v, V()])),
      costMs: Gr(c, 3)
    };
    return G = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), q = { count: 0, maxMs: 0 }, R.push({ record: y, text: JSON.stringify(y) }), R.length > nb && R.shift(), l += 1, l % sb === 0 && re(), c = t.now() - E, y;
  }
  function Pe(E = rb) {
    const ce = JSON.stringify({ ...o, events: K }).slice(0, -1);
    let y = E - ce.length - 14, v = R.length;
    for (; v > 0 && y - R[v - 1].text.length - 1 >= 0; )
      v -= 1, y -= R[v].text.length + 1;
    return `${ce},"records":[${R.slice(v).map((V) => V.text).join(",")}]}`;
  }
  function re() {
    if (!o) return;
    const E = t.storage();
    if (E) {
      o.savedAt = t.clock();
      try {
        E.setItem(Dl, Pe());
      } catch {
      }
    }
  }
  function O() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", re();
  }
  function Q() {
    var V;
    if (n) return i;
    n = !0;
    const E = t.storage();
    if (!E) return null;
    let ce = null;
    try {
      if (ce = E.getItem(Dl), ce === null) {
        const U = E.getItem(Yd);
        return i = U === null ? null : JSON.parse(U), i;
      }
      E.setItem(Yd, ce), E.removeItem(Dl), i = JSON.parse(ce);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], v = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(v)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((V = y.at(-1)) == null ? void 0 : V.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(v)
    ), i;
  }
  function ue(E) {
    const ce = E === !0;
    if (Q(), ce !== r) {
      if (r = ce, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, R.length = 0, s = t.observeLongTasks((y) => {
          for (const v of y)
            q.count += 1, q.maxMs = Math.max(q.maxMs, v.duration);
        }), t.addUnload(O), a = t.setInterval(fe, ab), re();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(O), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", re();
    }
  }
  function me() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...K], records: R.map((E) => E.record) } : null,
      previous: i
    };
  }
  function _e() {
    const E = t.document(), ce = new Blob([JSON.stringify(me(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(ce), v = E.createElement("a");
    v.href = y, v.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, v.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ae,
    releaseCanvas: ie,
    trackCanvas: Z,
    createVideo: he,
    trackVideo: I,
    watchContext: te,
    addSource: ge,
    frameStart: de,
    frameEnd: P,
    renderEnd: H,
    sample: fe,
    serialize: Pe,
    recoverPrevious: Q,
    setEnabled: ue,
    exportData: me,
    download: _e
  };
}
const Nn = ub(), mn = Nn.createCanvas, wc = Nn.releaseCanvas, Ll = Nn.trackCanvas, sl = Nn.createVideo, qd = Nn.trackVideo, db = Nn.addSource, fb = Nn.frameStart, pb = Nn.frameEnd;
function dh(e, t) {
  const r = Nn.watchContext(e.canvas, t), n = Nn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = Nn.frameStart(), l = o(a);
    return Nn.renderEnd(t, s), l;
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
const hb = {
  id: eb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Nn.setEnabled(e === !0)
}, Xd = {
  id: tb,
  label: "Export Panorama Suite diagnostics",
  function: () => Nn.download()
};
function Li(e, t) {
  const r = mn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function mb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Jd(e, t = 8) {
  var u;
  const r = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, c = -1;
  for (let d = 0; d < i; d += 1)
    for (let f = 0; f < n; f += 1)
      o[(d * n + f) * 4 + 3] <= t || (f < a && (a = f), d < s && (s = d), f > l && (l = f), d > c && (c = d));
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
function Pu(e, t) {
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
let Vl = null, Rl = null, Zd = null, Qd = null, Gt = null, Mo = null;
function gb() {
  if (Rl) return Rl;
  const e = 6, t = 17, r = mn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Rl = r, r;
}
function $l(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Vl = Br(Vl, r, n);
  const i = Vl;
  Wt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Qd !== i.ctx && (Zd = i.ctx.createPattern(gb(), "repeat"), Qd = i.ctx), i.ctx.fillStyle = Zd, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function yb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function bb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function vb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function _b(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Vt = /* @__PURE__ */ new Map(), Nu = 128;
function Sb(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Vt.has(l)) {
    const K = Vt.get(l);
    return Vt.delete(l), Vt.set(l, K), K;
  }
  Vt.size >= Nu && Vt.delete(Vt.keys().next().value);
  const c = a * 2 + 2, u = a + 1, d = Pu(c, c), f = d.getContext("2d"), m = s * a, _ = a + 1, g = `rgba(${r},${n},${i},${o})`, p = `rgba(${r},${n},${i},0)`, F = f.createRadialGradient(u, u, m, u, u, _);
  return F.addColorStop(0, g), F.addColorStop(1, p), f.fillStyle = F, f.fillRect(0, 0, c, c), Vt.set(l, d), d;
}
function wb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: c, a: u } = n, d = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, a ?? 0)), p = `chisel:${d}:${f}:${r.toFixed(2)}:${s}:${l}:${c}:${u.toFixed(3)}:${m.toFixed(2)}:${_.toFixed(2)}:${g.toFixed(2)}`;
  if (Vt.has(p)) {
    const ne = Vt.get(p);
    return Vt.delete(p), Vt.set(p, ne), ne;
  }
  Vt.size >= Nu && Vt.delete(Vt.keys().next().value);
  const F = Pu(d, f), K = F.getContext("2d"), z = K.createImageData(d, f), G = z.data, x = Math.max(0, e - t), q = Math.max(0, Math.min(1, r)), R = 1 + m;
  for (let ne = 0; ne < f; ne++)
    for (let B = 0; B < d; B++) {
      const Z = B + 0.5 - e, I = ne + 0.5 - t, ae = Math.max(Math.abs(Z) - x, 0), he = Math.hypot(ae, I) / t;
      if (he >= 1) continue;
      const te = he <= q ? 1 : Math.max(0, (1 - he) / Math.max(1e-4, 1 - q)), ge = 1 - he, de = 1 + m * (1 - ge) * (1 - ge), P = 1 - _ * ge * ge, H = de * P / R;
      let oe = 1;
      if (g > 0) {
        const Pe = Math.floor((I + t) / 1.5), re = Math.floor((Z + e) / 8), O = hi(Ui(Pe * 41 + 500, re * 19 + 300));
        oe = 1 - g * 0.42 * O;
      }
      const j = Math.round(255 * Math.min(1, u * te * H * oe));
      if (j <= 0) continue;
      const fe = (ne * d + B) * 4;
      G[fe] = s, G[fe + 1] = l, G[fe + 2] = c, G[fe + 3] = j;
    }
  return K.putImageData(z, 0, 0), Vt.set(p, F), F;
}
function Ui(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function hi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function xb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), u = Math.max(Math.abs(s) - c, 0), d = Math.hypot(u, l) / n;
  if (d >= 1) return 0;
  const f = hi(Ui(e * 17 + 3, t * 13 + 7)), m = d + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const _ = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = kb(e, t, s, l, r, n), p = o * 0.55;
  if (g < p) return 0;
  const K = 0.45 + 0.55 * ((g - p) / Math.max(1e-4, 1 - p));
  return Math.round(255 * Math.min(1, a * _ * K));
}
function kb(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = hi(Ui(a * 13 + 700, s * 17 + 400)), c = Math.floor((r + i) / 1.5), u = Math.floor((n + o) / 1.5), d = hi(Ui(c * 23 + 800, u * 29 + 500)), f = hi(Ui(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + d * 0.3 + f * 0.15;
}
function Mb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), d = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${u}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${d.toFixed(2)}`;
  if (Vt.has(f)) {
    const K = Vt.get(f);
    return Vt.delete(f), Vt.set(f, K), K;
  }
  Vt.size >= Nu && Vt.delete(Vt.keys().next().value);
  const m = Pu(c, u), _ = m.getContext("2d"), g = _.createImageData(c, u), p = g.data, F = Math.max(0, Math.min(1, r));
  for (let K = 0; K < u; K++)
    for (let z = 0; z < c; z++) {
      const G = xb(z, K, e, t, F, d, l);
      if (G <= 0) continue;
      const x = (K * c + z) * 4;
      p[x] = o, p[x + 1] = a, p[x + 2] = s, p[x + 3] = G;
    }
  return _.putImageData(g, 0, 0), Vt.set(f, m), m;
}
function fh(e, t, r) {
  var g, p;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = vb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = Pb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = _b(t, i), u = String(((p = t == null ? void 0 : t.targetSpace) == null ? void 0 : p.viewMode) || ""), d = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && u !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const F = i * s, K = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), G = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), x = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = wb(F, K, o, a, z, G, x);
  } else if (n === "crayon") {
    const F = i * s, K = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = Mb(F, K, o, a, z);
  } else
    _ = Sb(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: s, angle: l, stampKind: n, scatter: m, latitudeCorrection: d };
}
function Pb(e) {
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
function Nb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function ef(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(c, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, u - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Cu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: u } = e.scatter, d = c * e.radiusPx * i, f = Ui(t, r);
    for (let m = 0; m < u; m++) {
      const _ = hi(f + m * 2) * Math.PI * 2, g = Math.sqrt(hi(f + m * 2 + 1)) * d, p = t + Math.cos(_) * g, F = r + Math.sin(_) * g, K = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, G = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, x = K * e.aspect * G;
      ef(e, p, F, K, x);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  ef(e, t, r, o, l);
}
function tf(e, t, r) {
  const n = bb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = fh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let m = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(m - s[f - 1].x) > i * 0.5 && (m += m < s[f - 1].x ? i : -i), s.push({ x: m, y: _ });
  }
  if (Cu(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], c = s[0], u = s[0], d = 0;
  for (let f = 1; f < s.length; f++) {
    const m = s[f], _ = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? d = ea(a, u.x, u.y, _.x, _.y, d) : d = xs(a, l, u, _, m, d), l = c, c = m, u = _;
  }
  s.length === 2 ? ea(a, u.x, u.y, c.x, c.y, d) : xs(a, l, u, c, c, d), e.restore();
}
function ts(e, t, r) {
  var d;
  const n = Array.isArray((d = t == null ? void 0 : t.geometry) == null ? void 0 : d.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = Nb(t), s = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const m = yb(n[f]);
    let _ = Number(m.x || 0) * i;
    f > 0 && Math.abs(_ - s[f - 1].x) > i * 0.5 && (_ += _ < s[f - 1].x ? i : -i), s.push({ x: _, y: Number(m.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function u(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let m = 1; m < s.length; m++) e.lineTo(s[m].x + f, s[m].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), c > i && u(-i), e.restore();
}
function La(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    ts(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? tf(e, t, r) : (Mo = Br(Mo, r.width, r.height), Wt(Mo), tf(Mo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Mo.canvas, 0, 0), e.restore());
}
function ni(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ea(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const u = c / l;
    Cu(e, t + a * u, r + s * u, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function xs(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, u = 0, d = s, f = d + l, m = f + c, _ = f - d, g = 16;
  let p = o, F = r.x, K = r.y;
  for (let z = 1; z <= g; z++) {
    const G = d + _ * z / g, x = ((d - G) * t.x + (G - u) * r.x) / (d - u), q = ((d - G) * t.y + (G - u) * r.y) / (d - u), R = ((f - G) * r.x + (G - d) * n.x) / (f - d), ne = ((f - G) * r.y + (G - d) * n.y) / (f - d), B = ((m - G) * n.x + (G - f) * i.x) / (m - f), Z = ((m - G) * n.y + (G - f) * i.y) / (m - f), I = ((f - G) * x + (G - u) * R) / (f - u), ae = ((f - G) * q + (G - u) * ne) / (f - u), ie = ((m - G) * R + (G - d) * B) / (m - d), he = ((m - G) * ne + (G - d) * Z) / (m - d), te = ((f - G) * I + (G - d) * ie) / (f - d), ge = ((f - G) * ae + (G - d) * he) / (f - d);
    p = ea(e, F, K, te, ge, p), F = te, K = ge;
  }
  return p;
}
function Cb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let c = t * a;
  if (l && Math.abs(c - l.prev.x) > a * 0.5 && (c += c < l.prev.x ? a : -a), !l) {
    const m = fh(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), p = String((n == null ? void 0 : n.toolKind) || "") === "eraser", F = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Cu(m, c, s, 1), e.activeStroke = {
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
      layerKind: F,
      pointCount: 1
    }, sn(e);
    return;
  }
  const u = (l.prev.x + c) * 0.5, d = (l.prev.y + s) * 0.5;
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
  l.pointCount === 1 ? l.distSinceStamp = ea(f, l.lastMidX, l.lastMidY, u, d, l.distSinceStamp) : l.distSinceStamp = xs(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: d },
    { x: c, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: s }, l.lastMidX = u, l.lastMidY = d, l.pointCount++, sn(e);
}
function Au(e = {}) {
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
  let c = null, u = "", d = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function _(ie) {
    return {
      actionGroupId: ie,
      descriptor: n,
      committedPaint: Li(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(ie) {
    let he = i.get(ie);
    return he || (he = _(ie), i.set(ie, he)), he;
  }
  function p(ie) {
    return u === "mask" ? a : c ? g(c) : s;
  }
  function F(ie) {
    var H;
    const he = !d || d.length !== ie.length || ie.some((oe, j) => oe !== d[j]), te = u === "paint" && ((H = c ? i.get(c) : s) == null ? void 0 : H.activeStroke) || null;
    let ge = a.displayDirty || s.displayDirty || he;
    for (const oe of ie) {
      const j = i.get(oe);
      if (j != null && j.displayDirty) {
        ge = !0;
        break;
      }
    }
    if (te && (ge = !0), !ge) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const oe of ie) {
      const j = i.get(oe);
      j && (j.displayDirty = !1);
    }
    d = [...ie];
    const de = l.ctx;
    Wt(l);
    const P = !!(te != null && te.isEraser);
    for (const oe of ie) {
      const j = i.get(oe);
      if (!j) continue;
      const Pe = c === j.actionGroupId && u === "paint" ? j.activeStroke : null;
      if (P)
        Gt = Br(Gt, t, r), Wt(Gt), Gt.ctx.drawImage(j.committedPaint.canvas, 0, 0), ni(Gt.ctx, o.canvas), de.drawImage(Gt.canvas, 0, 0);
      else if (de.drawImage(j.committedPaint.canvas, 0, 0), Pe) {
        const re = j.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = re, de.drawImage(o.canvas, 0, 0), de.restore();
      }
    }
  }
  function K(ie) {
    var te, ge, de, P, H;
    for (const oe of i.values())
      Wt(oe.committedPaint), Wt(oe.currentStroke), oe.activeStroke = null, sn(oe);
    Wt(a.committedMask), Wt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), sn(a), sn(s), d = null;
    const he = [
      ...Array.isArray((ge = (te = ie == null ? void 0 : ie.painting) == null ? void 0 : te.paint) == null ? void 0 : ge.strokes) ? ie.painting.paint.strokes : [],
      ...Array.isArray((P = (de = ie == null ? void 0 : ie.painting) == null ? void 0 : de.mask) == null ? void 0 : P.strokes) ? ie.painting.mask.strokes : []
    ];
    for (const oe of he) {
      if (((H = oe == null ? void 0 : oe.targetSpace) == null ? void 0 : H.kind) !== "ERP_GLOBAL") continue;
      const j = String((oe == null ? void 0 : oe.layerKind) || "paint"), Pe = String((oe == null ? void 0 : oe.toolKind) || "pen") === "eraser";
      if (j === "mask") {
        const re = a.descriptor;
        Pe ? (Gt = Br(Gt, re.width, re.height), Wt(Gt), La(Gt.ctx, oe, re), ni(a.committedMask.ctx, Gt.canvas)) : (La(a.committedMask.ctx, oe, re), a.painted = !0);
        continue;
      }
      if (Pe) {
        Gt = Br(Gt, n.width, n.height), Wt(Gt), La(Gt.ctx, oe, n);
        for (const re of i.values())
          ni(re.committedPaint.ctx, Gt.canvas), sn(re);
      } else {
        const re = String((oe == null ? void 0 : oe.actionGroupId) || "__default__"), O = g(re), Q = O.descriptor;
        La(O.committedPaint.ctx, oe, Q), sn(O);
      }
    }
    F([...i.keys()]);
  }
  function z(ie, he) {
    u = String((ie == null ? void 0 : ie.layerKind) || "");
    const te = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser";
    if (u === "mask")
      c = null, Wt(a.currentStroke), a.activeStroke = null, sn(a);
    else {
      const ge = te ? s : g(String((ie == null ? void 0 : ie.actionGroupId) || "__default__"));
      c = te ? "" : String((ie == null ? void 0 : ie.actionGroupId) || "__default__"), Wt(ge.currentStroke), ge.activeStroke = null, sn(ge);
    }
  }
  function G(ie, he) {
    var j;
    const te = String((ie == null ? void 0 : ie.layerKind) || "paint"), ge = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", de = te === "mask" ? a : ge ? s : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__")), P = de.activeStroke, H = de.descriptor;
    if (P && P.pointCount > 1) {
      const fe = de.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: fe,
        stampTex: P.stampTex,
        radiusPx: P.radiusPx,
        spacingPx: P.spacingPx,
        desc: H,
        aspect: P.aspect,
        angle: P.angle,
        stampKind: P.stampKind,
        scatter: P.scatter,
        latitudeCorrection: P.latitudeCorrection
      };
      P.pointCount === 2 ? ea(Pe, P.lastMidX, P.lastMidY, P.prev.x, P.prev.y, P.distSinceStamp) : xs(Pe, P.pprev, { x: P.lastMidX, y: P.lastMidY }, P.prev, P.prev, P.distSinceStamp);
    }
    de.lassoPreviewActive && (Wt(de.currentStroke), ts(de.currentStroke.ctx, ie, H), de.lassoPreviewActive = !1);
    const oe = te === "mask" ? a.committedMask : de.committedPaint;
    if (ge && te === "paint")
      for (const fe of i.values())
        ni(fe.committedPaint.ctx, de.currentStroke.canvas), sn(fe);
    else if (ge)
      ni(oe.ctx, de.currentStroke.canvas);
    else {
      te === "mask" && (a.painted = !0);
      const fe = Math.max(0, Math.min(1, (P == null ? void 0 : P.strokeOpacity) ?? 1));
      oe.ctx.save(), oe.ctx.globalAlpha = fe, oe.ctx.drawImage(de.currentStroke.canvas, 0, 0), oe.ctx.restore();
    }
    mb() && (String((ie == null ? void 0 : ie.toolKind) || ""), String((H == null ? void 0 : H.kind) || ""), Number((H == null ? void 0 : H.width) || 0), Number((H == null ? void 0 : H.height) || 0), String(((j = ie == null ? void 0 : ie.targetSpace) == null ? void 0 : j.viewMode) || ""), Number((ie == null ? void 0 : ie.aspect) ?? 1), Jd(de.currentStroke.canvas), Jd(oe.canvas), void 0), Wt(de.currentStroke), de.activeStroke = null, sn(de), f.clear(), c = null, u = "", F([...i.keys()]);
  }
  function x(ie) {
    if (u === "mask")
      Wt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, sn(a);
    else if (u === "paint" && !c)
      Wt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, sn(s);
    else if (c) {
      const he = i.get(c);
      he && (Wt(he.currentStroke), he.activeStroke = null, he.lassoPreviewActive = !1, sn(he));
    }
    f.clear(), c = null, u = "", F([...i.keys()]);
  }
  function q(ie, he) {
    var ge;
    if (u = String((ie == null ? void 0 : ie.layerKind) || ""), String(((ge = ie == null ? void 0 : ie.geometry) == null ? void 0 : ge.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Wt(a.currentStroke), ts(a.currentStroke.ctx, ie, a.descriptor), a.lassoPreviewActive = !0, sn(a);
      else {
        const de = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", P = de ? s : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"));
        c = de ? "" : String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"), Wt(P.currentStroke), ts(P.currentStroke.ctx, ie, P.descriptor), P.lassoPreviewActive = !0, sn(P);
      }
      F([...i.keys()]);
    }
  }
  function R(ie) {
    return F(ie ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ne(ie) {
    return i.get(String(ie)) ?? null;
  }
  function B() {
    return [...i.keys()];
  }
  function Z(ie) {
    var fe;
    const he = i.get(String(ie));
    if (!he) return null;
    const te = u === "paint" && c === he.actionGroupId, ge = u === "paint" && ((fe = c ? i.get(c) : s) == null ? void 0 : fe.activeStroke) || null, de = !!(ge != null && ge.isEraser), P = te ? he.activeStroke : null;
    if (!de && !P) return he.committedPaint.canvas;
    const H = `${he.revision}:${s.revision}:${de}`, oe = f.get(he.actionGroupId);
    if ((oe == null ? void 0 : oe.key) === H) return oe.surface.canvas;
    const j = Br((oe == null ? void 0 : oe.surface) ?? null, t, r);
    return Wt(j), j.ctx.drawImage(he.committedPaint.canvas, 0, 0), de ? ni(j.ctx, o.canvas) : (j.ctx.save(), j.ctx.globalAlpha = he.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, P.strokeOpacity ?? 1)), j.ctx.drawImage(o.canvas, 0, 0), j.ctx.restore()), f.set(he.actionGroupId, { key: H, surface: j }), j.canvas;
  }
  function I() {
    const ie = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!ie || ie.isEraser) ? null : `${a.revision}:${!!ie}`;
  }
  function ae() {
    const ie = I();
    if (ie === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === ie) return m.surface.canvas;
    const he = Br((m == null ? void 0 : m.surface) ?? null, t, r);
    Wt(he);
    const te = u === "mask" ? a.activeStroke : null;
    return te != null && te.isEraser ? (Gt = Br(Gt, t, r), Wt(Gt), Gt.ctx.drawImage(a.committedMask.canvas, 0, 0), ni(Gt.ctx, o.canvas), $l(he.ctx, Gt.canvas)) : ($l(he.ctx, a.committedMask.canvas), te && $l(he.ctx, o.canvas)), m = { key: ie, surface: he }, he.canvas;
  }
  return {
    rebuildCommitted: K,
    beginStroke: z,
    appendStrokePoint: Cb,
    updateActiveStroke: q,
    commitActiveStroke: G,
    cancelActiveStroke: x,
    getErpTarget: R,
    ensureTarget: p,
    getGroupTarget: ne,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: ae,
    getMaskDisplayRevision: I,
    getAllGroupIds: B
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Iu(e, t) {
  let r = $t(t) - $t(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const xc = 3;
function Po(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function ks(e, t = 0) {
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
const nf = Math.PI / 180, rf = 0.12, Ab = xc, Ib = 35, Eb = 140, Oo = 100, Ob = 20, of = 0.8;
function Fb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Oo), 1, 179) * nf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / nf;
}
function Eu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Oo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(K, z = null) {
    s && s(K, z);
  }
  function u(K, z, G = null, x = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(K || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(x || performance.now()), l.drag.pointerId = G, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: G }), !0;
  }
  function d(K, z, G = "pano", x = performance.now()) {
    if (!l.drag.active) return !1;
    const q = Number(x || performance.now()), R = Number(K), ne = Number(z), B = R - l.drag.lastX, Z = ne - l.drag.lastY;
    l.drag.lastX = R, l.drag.lastY = ne, l.drag.lastTs = q;
    const I = n() || { x: 1, y: 1 }, ae = Number(I.x || 1), ie = Number(I.y || 1), he = { ...t() };
    let te = 0, ge = 0;
    if (G === "unwrap") {
      const P = i() || { w: 1, h: 1 }, H = Math.max(1, Number(P.w || 1)), oe = Math.max(1, Number(P.h || 1)), j = B / H, fe = Z / oe;
      te = -j * 360 * ae, ge = fe * 180 * ie;
    } else {
      const P = o() || { w: 0, h: 0 }, H = Math.max(1, Number(P.w || 0)), oe = Math.max(1, Number(P.h || 0));
      if (H > 1 && oe > 1) {
        const j = Ee(Number(he.fov || Oo), 1, 179), fe = Ee(Fb(j, H, oe), 0.1, 179);
        te = -(B / H) * j * ae, ge = Z / oe * fe * ie;
      } else
        te = -B * rf * ae, ge = Z * rf * ie;
    }
    he.yaw = $t(Number(he.yaw || 0) + te), he.pitch = Ee(Number(he.pitch || 0) + ge, -89.9, 89.9), r(he), l.velHistory.push({ ts: q, yaw: he.yaw, pitch: he.pitch });
    let de = 0;
    for (; de < l.velHistory.length - 1 && l.velHistory[de].ts < q - 100; ) de++;
    return de > 0 && l.velHistory.splice(0, de), l.inertia.active = !1, l.inertia.lastTs = q, a(), c("drag", { phase: "move", dx: B, dy: Z, dYaw: te, dPitch: ge }), !0;
  }
  function f(K = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(K || performance.now());
    l.drag.lastTs = z;
    const G = l.velHistory.filter((q) => z - q.ts <= 80);
    if (G.length >= 2) {
      const q = G[0], R = G.at(-1), ne = Math.max(1e-3, (R.ts - q.ts) / 1e3);
      let B = R.yaw - q.yaw;
      B > 180 && (B -= 360), B < -180 && (B += 360), l.inertia.vx = B / ne, l.inertia.vy = (R.pitch - q.pitch) / ne;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const x = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = x > Ob, l.inertia.lastTs = z, c("drag", { phase: "end", speed: x, inertiaActive: l.inertia.active }), !0;
  }
  function m(K = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(K || performance.now()), G = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const x = { ...t() };
    x.yaw = $t(Number(x.yaw || 0) + l.inertia.vx * G), x.pitch = Ee(Number(x.pitch || 0) + l.inertia.vy * G, -89.9, 89.9);
    const q = Math.exp(-5.5 * G);
    return l.inertia.vx *= q, l.inertia.vy *= q, Math.abs(l.inertia.vx) < of && Math.abs(l.inertia.vy) < of && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(x), a(), l.inertia.active;
  }
  function _() {
    const K = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], K;
  }
  function g(K) {
    const z = Math.sign(Number(K || 0));
    if (!z) return !1;
    const G = { ...t() }, x = Number(G.fov || Oo);
    return G.fov = Ee(x + z * Ab, Ib, Eb), r(G), a(), c("wheel", { deltaSign: z, fovBefore: x, fovAfter: G.fov }), !0;
  }
  function p(K, z = 0) {
    return g(ks(K, z));
  }
  function F() {
    r({ yaw: 0, pitch: 0, fov: Oo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: d,
    endDrag: f,
    stepInertia: m,
    stopMotion: _,
    applyWheel: g,
    applyWheelEvent: p,
    resetView: F
  };
}
const wt = Math.PI / 180, Jt = 180 / Math.PI;
function Wn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ms(e, t) {
  return Wn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ps(e, t) {
  return Wn(e.x * t, e.y * t, e.z * t);
}
function zl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ou(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wn(e.x / t, e.y / t, e.z / t);
}
function Pn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Wn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function oo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(o), d = Math.sin(o);
  return {
    right: Wn(
      a * u - s * c * d,
      l * d,
      -s * u - a * c * d
    ),
    up: Wn(
      -a * d - s * c * u,
      l * u,
      s * d - a * c * u
    ),
    fwd: Wn(s * l, c, a * l)
  };
}
function Ns(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Nt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Tb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Db(e) {
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
function Lb(e) {
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
function Rb(e, t, r, n) {
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
function $b(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Lb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Rb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Nt(e.size, null), a = Nt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const c = Nt(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let d = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    d = {
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
    color: d,
    radiusModel: u,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function af(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = $b(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function zb(e) {
  if (!e || typeof e != "object") return null;
  const t = Nt(e.u0, null), r = Nt(e.v0, null), n = Nt(e.u1, null), i = Nt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function jb(e) {
  const t = e || {};
  return {
    du: Nt(t.du, 0) ?? 0,
    dv: Nt(t.dv, 0) ?? 0,
    rot_deg: Nt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Nt(t.scale, 1) ?? 1)
  };
}
function Hb(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = zb(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Nt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: jb(e.transform)
  } : null;
}
function Gb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Hb(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function ao(e) {
  const t = Tb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Db(e.groups),
    paint: af(e.paint, "paint"),
    mask: af(e.mask, "mask"),
    raster_objects: Gb(e.raster_objects)
  };
}
const Kn = 1, Bn = 179, kc = 85;
function ll(e) {
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
  return r && (n = Math.round(n / 15) * 15), ll(n);
}
function at(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Jr(e = {}) {
  const t = Ee(at(e.hFOV_deg || 90, 90), Kn, Bn), r = Ee(at(e.vFOV_deg || 60, 60), Kn, Bn), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
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
function vi(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Jr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Fu(e, t) {
  const r = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, at(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Tu(e, t) {
  const r = Math.max(1e-12, at(t, 1)), n = Math.max(1e-6, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * Jt, Kn, Bn), a = Ee(2 * Math.atan(i / (2 * r)) * Jt, Kn, Bn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Wb(e, t, r) {
  const n = at(e == null ? void 0 : e.x, 0), i = at(e == null ? void 0 : e.y, 0), o = Math.max(1, at((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, at((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Jr(t), l = Math.max(1e-12, at(r, 1)), c = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (a - u) * 0.5,
    w: c,
    h: u,
    focalPx: l
  };
}
function Du(e, t, r = kc) {
  const n = Math.max(1e-12, at(t, 1)), i = Ee(at(r, kc), 1, 89.999), o = n * Math.tan(i * wt), a = Math.max(1, at((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, at((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
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
function Kb(e, t) {
  const r = Ee(at(e, 90), Kn, Bn), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * Jt,
    Kn,
    Bn
  );
}
function ns(e, t) {
  const r = Ee(at(e, 60), Kn, Bn), n = Math.max(1e-6, at(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * Jt,
    Kn,
    Bn
  );
}
function sf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Bb(e, t) {
  const r = sf(e, 1), n = sf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (c, u) => u ? s(u, c % u) : c, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function xi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function mi(e) {
  const t = xi(e), n = [
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
function Lu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = mi(t), t;
}
function yh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Kn, Bn) : Ee(Math.min(42, at(i, 100) * 0.42), 8, 96);
  return Lu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: at(t, 0),
    pitch_deg: Ee(at(r, 0), -89.9, 89.9),
    roll_deg: ll(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Er(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : mi(e);
}
function bh(e, t) {
  const r = Jr(e), n = at(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Jt, o = 2 * Math.atan(r.tanHalfY * n) * Jt;
  return i < Kn || i > Bn || o < Kn || o > Bn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function vh(e, t, r = xc) {
  const n = Math.sign(at(t, 0)), i = Math.abs(at(r, xc));
  if (!n || !(i > 0)) return null;
  const o = Jr(e), a = o.hFovDeg + n * i;
  if (a < Kn || a > Bn) return null;
  const s = Math.tan(a * wt * 0.5);
  return bh(e, s / o.tanHalfX);
}
function _h(e, t) {
  const r = Jr(e), n = oo(r.yawDeg, r.pitchDeg, r.rollDeg), i = at(t == null ? void 0 : t.x, 0), o = at(t == null ? void 0 : t.y, 0);
  return Ou(Ms(Ms(n.fwd, Ps(n.right, i)), Ps(n.up, o)));
}
function Ub(e) {
  return Wn(e.x, e.y, -e.z);
}
function rs(e) {
  return Wn(e.x, e.y, -e.z);
}
function An(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = oo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Sh(e) {
  const t = rs(Wn(e[0][0], e[1][0], e[2][0])), r = rs(Wn(e[0][1], e[1][1], e[2][1])), n = rs(Wn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
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
function ki(e) {
  const [[t, r, n], [i, o, a], [s, l, c]] = e, u = t + o + c;
  if (u > 0) {
    const f = 0.5 / Math.sqrt(u + 1);
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
  const d = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + s) / d, y: (a + l) / d, z: 0.25 * d, w: (i - r) / d };
}
function Ra(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ui = 1e-6, Mc = 1e-6, Yb = 1e-9;
function na(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function qb(e, t) {
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
  const l = a.map((f, m) => (f * o + s[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, _) => m + _ * _, 0)), u = 3 * Math.min(c(a), c(s)), d = c(l);
  return d <= u ? l : l.map((f) => f * u / d);
}
function wh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((u, d) => o[d] - u);
  let l = s;
  eo(e, n) && (l = to(t, n, r[n - 1].map((u, d) => u - i[d]), s).map((u) => u * a));
  let c = s;
  return eo(e, n + 1) && (c = to(t, n + 1, s.map((u) => -u), r[n + 2].map((u, d) => u - o[d])).map((u) => u * a)), [l.map((u) => u / 3), c.map((u) => -u / 3)];
}
function xh(e, t, r, n, i) {
  const [[o], [a]] = wh(e, t, r.map((s) => [s]), n);
  return na(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function Xb(e, t, r, n) {
  var c, u;
  const i = e.map((d) => d.value);
  let [o, a] = wh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, a = ((u = e[r + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((d) => na(s[d], s[d] + o[d], l[d] + a[d], l[d], n));
}
function Cs([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function Jb(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function jl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Zb([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Pc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function ji(e, t) {
  return Zb(Cs([-e[0], -e[1], -e[2], e[3]], t));
}
function Hl(e, t, r) {
  return Cs(e, Pc(ji(e, t).map((n) => r * n)));
}
function Gl(e, t) {
  const r = Jb(e, t);
  if (Math.abs(r) > Mc) return r < 0;
  const [n, i, o] = ji(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Mc) return a < 0;
  return !1;
}
function $a(e) {
  const { x: t, y: r, z: n, w: i } = ki(An(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Nc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Qb(e, t, r, n) {
  const i = $a(e[r].value);
  let o = $a(e[r + 1].value);
  Gl(i, o) && (o = jl(o));
  const a = t[r + 1] - t[r], s = ji(i, o);
  let l = s;
  if (eo(e, r)) {
    let x = $a(e[r - 1].value);
    Gl(x, i) && (x = jl(x)), l = to(t, r, ji(i, x), s).map((q) => q * a);
  }
  let c = s;
  if (eo(e, r + 1)) {
    let x = $a(e[r + 2].value);
    Gl(o, x) && (x = jl(x)), c = to(t, r + 1, ji(o, i), ji(o, x)).map((q) => q * a);
  }
  const u = Cs(i, Pc(l.map((x, q) => 0.5 * (x - s[q])))), d = Cs(o, Pc(s.map((x, q) => 0.5 * (x - c[q])))), [f, m, _, g] = Hl(Hl(i, o, n), Hl(u, d, n), 2 * n * (1 - n)), { yawDeg: p, pitchDeg: F, rollDeg: K } = Sh(ta({ x: f, y: m, z: _, w: g })), z = e[r].value, G = e[r + 1].value;
  return {
    yaw_deg: Nc(p, z.yaw_deg, G.yaw_deg, n),
    pitch_deg: F,
    roll_deg: Nc(K, z.roll_deg, G.roll_deg, n)
  };
}
function ra(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function As(e) {
  return Math.sqrt(ra(e, e));
}
function Is(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function kh(e, t) {
  const r = ra(e, t), n = t.map((a, s) => a - r * e[s]), i = As(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Vi(e, t) {
  const r = As(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function za(e, t, r) {
  return Vi(e, kh(e, t).map((n) => r * n));
}
function Wl(e, t) {
  const r = Is(e[t].value), n = Is(e[t + 1].value), i = ra(r, n), o = i < 0 && As(n.map((l, c) => l - i * r[c])) <= Mc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = kh(r, n);
  const s = As(a);
  return [a, a.map((l, c) => Math.cos(s) * l - s * Math.sin(s) * r[c]), o];
}
function e1(e, t, r, n) {
  const i = Is(e[r].value), o = Is(e[r + 1].value), [a, s, l] = Wl(e, r);
  let c = a, u = s;
  const d = t[r + 1] - t[r];
  eo(e, r) && (c = to(t, r, Wl(e, r - 1)[1].map((z) => -z), c).map((z) => z * d)), eo(e, r + 1) && (u = to(t, r + 1, u.map((z) => -z), Wl(e, r + 1)[0]).map((z) => z * d));
  let f, m, _;
  if (l) {
    const z = Math.PI, G = na(0, ra(c, a) / z / 3, z - ra(u, s) / z / 3, z, n);
    [f, m, _] = Vi(i, a.map((x) => G * x / z));
  } else {
    const z = za(Vi(i, c.map((q) => q / 3)), Vi(o, u.map((q) => -q / 3)), n), G = za(Vi(i, c.map((q) => n * q / 3)), z, n), x = za(z, Vi(o, u.map((q) => -(1 - n) * q / 3)), n);
    [f, m, _] = za(G, x, n);
  }
  const g = Math.hypot(f, _), p = e[r].value.yaw_deg, F = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= Yb ? p + (F - p) * n : Nc(Math.atan2(f, _) * 180 / Math.PI, p, F, n), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function t1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = xh(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function n1(e, t, r, n) {
  return xh(e, t, e.map((i) => i.value), r, n);
}
const r1 = { position: Xb, rotation: Qb, direction: e1, size: t1 };
function Ht(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Ra(e[t].value);
  if (r <= n[0].frame + ui) return Ra(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - ui) return Ra(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + ui; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= ui || a.easing === "hold") return Ra(a.value);
  const s = n.map((c) => c.frame), l = qb(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (r1[t] ?? n1)(n, s, o, l);
}
function Cc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function i1(e) {
  return Math.min(1, Math.max(0, e));
}
function Mh(e) {
  return Math.max(1e-6, e);
}
function Ph(e, t) {
  return t - (e.start - e.in);
}
function so(e, t) {
  return t >= e.start - ui && (e.duration === null || t < e.start + e.duration - ui);
}
function cl(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: Cc(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function ul(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Ph(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : cl(n, r),
    scene: {
      active: i.visible && so(i.clip, r),
      clip_frame: o,
      position: Ht(i, "position", o),
      ...Ht(i, "rotation", o),
      scale: Mh(Ht(i, "scale", o))
    },
    stickers: e.stickers.map((a) => _i(a, r))
  };
}
function o1(e, t) {
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
    hFOV_deg: Cc(r.hFOV_deg),
    vFOV_deg: Cc(r.vFOV_deg)
  };
}
function _i(e, t) {
  const r = Ph(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && so(e.clip, t),
    clip_frame: r,
    ...o1(e, r),
    opacity: i1(Ht(e, "opacity", r))
  };
}
const a1 = 2, s1 = ["sky", "world"], Ac = ["perspective", "erp"], l1 = ["input", "output", "temp"], Nh = [0.42, 0, 0.58, 1], Ch = 1, Vu = 1e3, Ic = 1e7, Ru = Ic;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function $u(e, t) {
  const r = Bt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Cn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function dl(e) {
  const t = Bt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function is(e) {
  const t = dl(e);
  return t === null ? null : Cn(t, -Ic, Ic);
}
function lo(e) {
  const t = $u(e, null);
  return t === null ? null : Cn(t, Ch, Vu);
}
function Ah(e) {
  const t = dl(e);
  return t !== null && t >= 1 ? Math.min(t, Ru) : null;
}
function ia(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ih(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Bt(r, null));
  return t.includes(null) ? null : t;
}
function Eh(e) {
  return Ih(e) || [0, 0, 0];
}
function Oh(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: Cn(Bt(t.pitch_deg, 0), -90, 90),
    roll_deg: Bt(t.roll_deg, 0)
  };
}
function c1(e) {
  return Cn(Bt(e, 90), 0.1, 179);
}
function u1(e) {
  return $u(e, 1);
}
function d1(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: Cn(Bt(t.pitch_deg, 0), -90, 90)
  };
}
function f1(e) {
  return Bt(e, 0);
}
function p1(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: Cn(Bt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Cn(Bt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Fh(e) {
  return Cn(Bt(e, 1), 0, 1);
}
const fl = [["position", Eh], ["rotation", Oh], ["fov", c1]], pl = [["position", Eh], ["rotation", Oh], ["scale", u1]], zu = [["direction", d1], ["roll", f1], ["size", p1], ["opacity", Fh]], ju = [...pl, ["opacity", Fh]];
function h1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Bt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Nh];
}
function m1(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Ih(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function g1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = is(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: h1(i.easing) }, s = r ? m1(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Hu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: g1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Th(e) {
  const t = tn(e) ? e : {}, r = is(t.start), n = is(t.in), i = is(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function y1(e) {
  const t = tn(e) ? e : {}, r = Cn(Bt(t.x0, 0), 0, 1), n = Cn(Bt(t.y0, 0), 0, 1), i = Cn(Bt(t.x1, 1), 0, 1), o = Cn(Bt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function b1(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: l1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function v1(e) {
  const t = b1(e.source);
  if (!t) return null;
  const r = s1.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Th(e.clip),
    visible: ia(e.visible, !0),
    locked: ia(e.locked, !1),
    crop: y1(e.crop),
    ...Hu(e, n ? ju : zu)
  };
  return n || (i.z_index = dl(e.z_index) ?? 0), i;
}
function _1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = tn(o) ? v1(o) : null;
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
  const t = Ac.includes(e.projection) ? e.projection : Ac[0];
  return { aspect: $u(e.aspect, 1), projection: t, visible: ia(e.visible, !0), ...Hu(e, fl) };
}
function Gu() {
  return Dh({});
}
function Es(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: a1,
    timeline: {
      fps: lo(t.fps) ?? 24,
      length: Ah(t.length)
    },
    camera: Dh(e.camera),
    scene: { clip: Th(r.clip), visible: ia(r.visible, !0), ...Hu(r, pl) },
    stickers: _1(e.stickers),
    painting: ao(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ia(e.painting_visible, !0)
  };
}
function S1(e, t) {
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
function w1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const r = Cn(Bt(t.hFOV_deg, 90), 1, 179), n = Cn(Bt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function x1(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Bt(n.z_index, 0) - Bt(i.z_index, 0)), Es({
    camera: w1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: S1(n, t),
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
function hr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Es({});
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
  return r === 1 ? x1(t) : Es(t);
}
const Kl = {
  state: { painting_visible: !0 },
  camera: { projection: Ac[0], visible: !0 },
  scene: { visible: !0 }
};
function Bl(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Ec(e) {
  return JSON.stringify({
    ...Bl(e, Kl.state),
    camera: e.camera && Bl(e.camera, Kl.camera),
    scene: Bl(e.scene, Kl.scene)
  });
}
function Ul(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function lf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function oa(e, t) {
  const r = lo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => dl(s * n), { length: o } = e.timeline, a = lf(e.scene.clip, i);
  return Es({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Ul(e.camera, fl, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Ul(e.scene, pl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: c, newAnchor: u } = lf(s.clip, i), d = s.placement === "world" ? ju : zu;
      return { ...s, clip: l, ...Ul(s, d, i, c, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Yl(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Lh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Vh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= ui);
}
function Rh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Lh(e.keyframes[n - 1].easing) : [...Nh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function pn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Yl(i.value, n);
    return;
  }
  const o = Vh(i, r);
  o ? o.value = Yl(o.value, n) : Rh(i, r, Yl(Ht(e, t, r), n));
}
function co(e) {
  return e.placement === "world" ? ju.map(([t]) => t) : e.placement === "sky" ? zu.map(([t]) => t) : (e.clip ? pl : fl).map(([t]) => t);
}
function k1(e, t) {
  for (const r of co(e))
    Vh(e[r], t) || Rh(e[r], t, Ht(e, r, t));
}
function M1(e) {
  const t = co(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function ql(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function P1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function N1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Ht(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function C1(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), c = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !c.has(u.frame)),
      ...l
    ].sort((u, d) => u.frame - d.frame);
  }
  return n;
}
function $h(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function A1(e, t, r) {
  const n = $h(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function I1(e, t, r, n) {
  for (const i of $h(e, t, r)) i.easing = Lh(n);
}
function E1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function O1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function F1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function T1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Os(e) {
  return co(e).map((t) => e[t]);
}
function D1(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? Os(e.camera).some((n) => n.keyframes.length > 0) : zh(e, { camera: r });
}
function Fs(e) {
  return Os(e).some((t) => t.keyframes.length > 0) || !!e.clip && !T1(e.clip);
}
function zh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Fs);
}
const L1 = 1e5;
function jh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of Os(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of Os(a))
      for (const c of l.keyframes) o = Math.max(o, s.start - s.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : L1;
}
function V1(e) {
  return e > 0 ? lo(Math.min(e, Vu)) : null;
}
function R1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Ah(Math.max(1, Math.min(e, Ru)));
}
const Xl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], $1 = 2e3;
function z1(e, t, r = 56) {
  const n = Xl.find((o) => o * t >= r) || Xl[Xl.length - 1], i = [];
  for (let o = 0; o < e && i.length < $1; o += n) i.push(o);
  return i;
}
function j1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let ja = { text: null, parsed: null };
function In(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ts(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function H1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: In(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ao(null),
    painting_layer: null,
    ui_settings: Ts(n),
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
function G1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function W1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function K1(e) {
  return Array.isArray(e) ? e.map((t) => Lu(t)) : [];
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
  }, n = H1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (ja.text === i ? o = ja.parsed : (o = JSON.parse(i), ja = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: G1(o.assets),
      stickers: W1(o.stickers),
      shots: K1(o.shots),
      painting: ao(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ts(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Ts({ ...s.ui_settings, ...a })), s.output_preset = Hh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = In(r.coverage), delete s.editor_history, s;
  } catch {
    return ja = { text: i, parsed: null }, n;
  }
}
function U1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Y1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function q1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Wh(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, c = lo(t.fps);
  let u;
  try {
    u = hr(e);
  } catch {
    u = hr(null);
  }
  c && c !== u.timeline.fps && (u = oa(u, c));
  const d = l && u.camera === null;
  if (d && (u = { ...u, camera: Gu() }), s) {
    let f = hr(s);
    c && c !== f.timeline.fps && (f = oa(f, c)), u = { ...f, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...d ? { default_camera: !0 } : {},
    coverage: In(i),
    bg_color: n,
    output_preset: Hh(r),
    ui_settings: Ts(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function X1(e, t) {
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
function Wu(e, t) {
  const r = _i(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const J1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function cf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function Z1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[J1[r]].keyframes.length));
}
function Kh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = cf(r, ["yaw_deg", "pitch_deg"]), o = cf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && pn(e, "direction", n, i), r.rot_deg !== void 0 && pn(e, "roll", n, r.rot_deg), Object.keys(o).length && pn(e, "size", n, o);
}
const hl = ["position_x", "position_y", "position_z"], ml = "camera";
function Bh(e, t) {
  const r = cl(e, t);
  return Lu({
    id: ml,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Kb(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Q1(e) {
  return hr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function ev(e) {
  return e - 360 * Math.round(e / 360);
}
function tv(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + ev(r[o] - n[o]));
  Object.keys(i).length && pn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && pn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && pn(e, "position", t, [...r.position]);
}
function nv(e, t) {
  const r = Ht(e, "position", t), n = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(hl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function rv(e, t, r, n) {
  const i = hl.indexOf(r);
  if (i >= 0) {
    const o = Ht(e, "position", t);
    o[i] = n, pn(e, "position", t, o);
  } else r === "hFOV_deg" ? pn(e, "fov", t, n) : pn(e, "rotation", t, { [r]: n });
}
function iv(e, t, r) {
  pn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function ov(e, t) {
  const r = _i(e, t);
  return {
    ...Object.fromEntries(hl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function av(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = hl.indexOf(r);
  if (o >= 0) {
    const a = Ht(e, "position", i);
    a[o] = n, pn(e, "position", i, a);
  } else r === "scale" ? pn(e, "scale", i, n) : r === "opacity" ? pn(e, "opacity", i, n / 100) : pn(e, "rotation", i, { [r]: n });
}
function sv(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && pn(e, i, n, r[i]);
}
function lv(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function cv(e, t, r) {
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
function os(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Uh(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ku(e, t, r, n) {
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
function uv(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = $t(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Oc(e) {
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
  e.default_camera && JSON.stringify(hr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Gu()) && delete e.default_camera;
}
function Jh(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = hr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Gu()) && (r.camera = null), Ec(r);
}
function Zh(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = hr(r);
    if (Ec(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Ec(oa(i, o)) === t;
  } catch {
    return !1;
  }
}
const Jl = 0.15, dv = 0.01, fv = 1e-3, pv = 0.05, hv = 4, uf = 250, mv = 16, er = 1, gv = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Rn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function gl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function uo(e, t, r = 0) {
  const n = An(e, t, r), i = mr(n, 2);
  return { right: mr(n, 0), up: mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function yv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Fc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function bv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Fc(e, "3dof", r);
}
function vv(e) {
  return uo(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function _v(e) {
  return Rn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Zr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Bo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Bu(e, t) {
  return Bo(Zr(t, e.position), uo(e.yaw_deg, e.pitch_deg).forward);
}
function Uu(e) {
  return Math.max(e, 1e-6) * pv;
}
function Tc(e, t, r = null, n = er) {
  if (t) return t;
  const i = Uu(n);
  if (r && Bu(e, r) > 0) {
    const o = Zr(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Rn(e.position, o, i / a);
  }
  return Rn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Qh(e, t = er) {
  return Math.max(e.distance, Uu(t));
}
function em(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > hv ? !1 : t.time - e.time < uf || e.cost > mv && t.time - e.wheelTime < uf;
}
function Yu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function tm(e, t, r, n, i = _v(e)) {
  const o = e.roll_deg ?? 0, [a, s] = Sv(t, r, o), l = $t(e.yaw_deg + a / n * 360), c = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), u = An(e.yaw_deg, e.pitch_deg, o), d = An(l, c, o), f = Zr(e.position, i), m = [0, 1, 2].map((g) => Bo(mr(u, g), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: Rn(i, gl(d, m)) };
  return { ..._, distance: Bu(_, i) };
}
function Sv(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function nm(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = vv(e), l = 2 * o * Yu(e, n, i).tanY / i;
  return { ...e, position: Rn(Rn(e.position, a, -t * l), s, r * l), distance: o };
}
function rm(e, t, r, n = er) {
  const i = Zr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * dv, l = r > 0 ? Math.min(Math.max(o * Jl, s), o - a * fv) : -Math.max(o * Jl / (1 - Jl), s);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Rn(e.position, i, l / o) };
  return { ...c, distance: Math.max(Bu(c, t), Uu(n)) };
}
function im(e, t, r, n) {
  const { tanX: i, tanY: o } = Yu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = uo(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Rn(t.center, l, -s), distance: s };
}
function qu(e, t, r, n = null) {
  return om({
    quaternion: ki(An(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Yu(e, t, r).tanY) * Jt,
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
  const c = Math.tan(e.fovY_deg * 0.5 * wt), u = c * e.aspect, d = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + d / l / u), y: n * 0.5 * (1 - f / l / c), z: l };
}
function am(e) {
  const t = ta(e.quaternion), r = mr(t, 2);
  return { right: mr(t, 0), up: mr(t, 1), forward: r.map((n) => -n) };
}
function df(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function wv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function sm(e, t) {
  if (!e || !t.active) return null;
  const r = Mv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Dc(t),
    itemQuaternion: e.kind === "splat" ? gv : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function xv(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = sm(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function kv(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Mv(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Dc(e) {
  return {
    position: [...e.position],
    quaternion: ki(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Lc(e, t) {
  return Rn(e.position, gl(An(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Vc(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Rc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function $c(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function Pv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Rc(t).map((o) => Lc(e.scene, o)));
  for (const o of r) i.push(...Xu(o));
  for (const { box: o, value: a } of n) i.push(...Rc(o).map((s) => Lc(a, s)));
  return i;
}
function Nv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ki(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: An(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Xu(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Rn(e.position, gl(e.rotation, [n, i, 0])));
}
function Cv(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? $c(Xu(i)) : o != null && o.box ? $c(Rc(Vc(o.kind, o.box)).map((a) => Lc(n, a))) : { center: [...n.position], radius: n.scale };
}
const Av = 2, Iv = 0.5, Ev = 30;
function lm(e, t) {
  const r = Zr(t, e), n = Math.atan2(r[0], -r[2]) * Jt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Jt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function Ov(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * Iv : Av, o = t ? [...t] : Rn(e.position, uo(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...Zr(o, e.position)), s = a > 0 ? lm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Ev * 0.5 * wt);
  return { position: o, rotation: s, scale: l };
}
function ff(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function Fv(e) {
  return [0, 1, 2].map((t) => mr(e, t));
}
function pf(e, t, r, n) {
  if (e === "translate") return { position: Rn(t.position, Zr(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * Rv(r.scale, n.scale) / r.scale };
  const i = ff(ta(n.quaternion), Fv(ta(r.quaternion))), o = ff(i, An(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Sh(o);
  return Math.abs(s) <= Tv ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Dv(o, t.yaw_deg) } };
}
const Tv = 89.9;
function Dv(e, t) {
  const r = mr(e, 0), n = mr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Jt + 0;
}
const Lv = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Vv(e, t, r, n, i) {
  if (!aa(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = am(e), l = Zr(t, e.position), c = Bo(l, o), u = Bo(l, a), d = Bo(l, s), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect, _ = Math.hypot(c, u, d) * Lv[r] * Math.min(1.9 * f, 7) / 4;
  if (!(d > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (G) => {
    const x = _ * Math.sqrt(G * G + d * d - _ * _);
    return [(G * d - x) / (d * d - _ * _), (G * d + x) / (d * d - _ * _)];
  }, [p, F] = g(c), [K, z] = g(u);
  return {
    minX: n * 0.5 * (1 + p / m),
    maxX: n * 0.5 * (1 + F / m),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - K / f)
  };
}
function Rv(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function $v(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function cm(e, t) {
  const r = An(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, u, d) => Rn(e.position, gl(r, [c, u, d])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((c) => [e.position, c]);
  a.forEach((c, u) => s.push([c, a[(u + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function zv(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = aa(e, a, n, i), c = aa(e, s, n, i);
    if (!l || !c) return !1;
    const u = c.x - l.x, d = c.y - l.y, f = Ee(((r.x - l.x) * u + (r.y - l.y) * d) / Math.max(u * u + d * d, 1e-12), 0, 1);
    return Math.hypot(l.x + u * f - r.x, l.y + d * f - r.y) <= o;
  });
}
function jv(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function Hv(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ht(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Ht(n, "position", l);
  });
}
function Gv(e, t, r, n, i) {
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
    quaternion: ki(An(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Jt,
    aspect: n
  };
}
function Uo(e) {
  const t = Jr(e);
  return {
    quaternion: ki(An(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function fm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Du(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
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
  const [[n, i, o], [a, s, l], [c, u, d]] = ta(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, g = 1e-4) {
      const p = Ub(_), F = n * p.x + a * p.y + c * p.z, K = i * p.x + s * p.y + u * p.z, z = -(o * p.x + l * p.y + d * p.z), G = Math.max(z, g);
      return {
        x: t * 0.5 * (1 + F / G / m),
        y: r * 0.5 * (1 - K / G / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, g) {
      const p = (_ / t * 2 - 1) * m, F = (1 - g / r * 2) * f;
      return Ou(rs({
        x: n * p + i * F - o,
        y: a * p + s * F - l,
        z: c * p + u * F - d
      }));
    }
  };
}
function Wv(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = ul(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const c = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!c.active && !u) return;
    const d = r(s);
    if (!d) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), m = Math.tan(c.vFOV_deg * 0.5 * wt), { crop: _ } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
      opacity: u ? um : c.opacity,
      zIndex: n(s),
      quaternion: ki(An(c.yaw_deg, c.pitch_deg, c.roll_deg)),
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
  return Wv(e, t, {
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
function Kv(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Bv(e, t, r, { media: n, evaluated: i = ul(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const c = i.stickers[l];
    if (s.placement !== "world" || !c.active) return;
    const u = o.get(s.id), d = u ? n(u) : null;
    if (!d) return;
    const { width: f, height: m } = Kv(d.media), _ = Nv(c, s.crop, f, m);
    _ && a.push({
      id: s.id,
      media: d.media,
      revision: d.revision,
      source: d.source,
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
function Uv({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-Bs852nXV.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, u = 0;
  const d = () => {
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
    pick(g, p, F, K, z) {
      return l && !f.lost ? l.pick(g, p, F, K, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, p, F, K, z) {
      return l && !f.lost ? l.pickSurface(g, p, F, K, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, p, F, K, z) {
      return l && !f.lost ? l.pickSticker(g, p, F, K, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, p, F, K, z, G) {
      return l && !f.lost ? l.gizmoPointer(g, p, F, K, z, G) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return u + (l ? l.contentRevision() : 0);
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
      c || !f.lost || (l && (u += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, s && (d(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", _), a().then((g) => {
    c || (s = g, !f.lost && (d(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const mm = "3D view unavailable. Check the browser console.";
function Ds(e, t, r) {
  return dm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function Yv(e) {
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
      render(u) {
        return c ? null : (o(), t ? t.render({ ...u, owner: l }) : null);
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
const gm = Yv(
  () => import("./.lazy/pano_three_view-Bs852nXV.js").then((e) => e.$).then((e) => dh(e.createThreeView({ createCanvas: () => mn({ label: "three.node" }) }), "node"))
), tr = ["erp_image", "bg_erp", "bg_media"], as = ["source"], Ju = ["sticker_image", "sticker"], ym = ["scene"], qv = {
  background: [...tr, ...as],
  "external-sticker": [...Ju, ...as],
  scene: [...ym, ...as]
};
function bm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function yl(e) {
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
function Xv(e, t) {
  const { graph: r, entry: n } = _m(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = bm(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const Sm = [...tr, ...Ju, ...ym, ...as], Jv = 256, Ri = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new WeakMap();
let wm = () => null;
function xm(e) {
  return Zl.has(e) || Zl.set(e, JSON.stringify(e)), Zl.get(e);
}
function Zv(e) {
  wm = e;
}
function Ls(e, t) {
  const r = xm(e);
  Ri.delete(r), Ri.set(r, t), Ri.size > Jv && Ri.delete(Ri.keys().next().value);
}
function en(e, t) {
  var o;
  const r = e ? wm(e) : null;
  if (!r) return !0;
  const n = yl(e);
  let i = Ri.get(xm(r));
  if (i)
    Ls(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => Sm.includes(a == null ? void 0 : a.name)))) return !0;
    Ls(r, n), i = n;
  }
  return qv[t].every((a) => i[a] === n[a]);
}
const Vs = /* @__PURE__ */ new WeakSet();
async function zc(e, t) {
  if (Vs.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Vs.add(e), r.ok && n !== void 0 ? n : null;
}
function km(e, t) {
  var o, a, s, l, c;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = _m(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((u) => Sm.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: Xv(r, t) };
}
const ss = /* @__PURE__ */ new Map();
function Qv(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ss.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await zc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = km(i, o);
        a && Ls(a.output, a.inputs);
      }
    });
}
const e_ = 5;
function t_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${e_}`, n = zc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, zc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var c, u, d, f;
      const l = String(a.id);
      for (const { id: m } of await n) {
        if (!s()) return null;
        const _ = await o(m);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (d = (u = _.workflow) == null ? void 0 : u.prompt) == null ? void 0 : d[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : km(_, l);
      }
      return null;
    }
  };
}
function n_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Oi = null;
async function r_(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Vs.has(r) || (s = ss.get(i)) != null && s.has(n) || n_(t)) return null;
  (Oi == null ? void 0 : Oi.workflowId) !== i && (Oi = { workflowId: i, history: t_(r, i) }, queueMicrotask(() => {
    Oi = null;
  }));
  const a = await Oi.history.lastNodeOutput(e, o);
  return o() ? a ? (Ls(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Vs.has(r) || ss.set(i, (ss.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function hf(e, t, r, n = tr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const mf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ls(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return mf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return mf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ql = /* @__PURE__ */ new WeakMap();
function i_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function jc(e) {
  return i_(e) ? (Ql.has(e) || Ql.set(e, Math.random().toString(36).slice(2, 10)), Ql.get(e)) : "run";
}
function Mm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function o_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, u) => u)));
    }
  };
  return i(e, t), n;
}
function Zu(e, t = [], r = null) {
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
function a_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = sl(e, "looping-preview");
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
  }, u = () => i(), d = () => {
    i(), l();
  }, f = () => i();
  let m = !1;
  const _ = () => {
    m = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), s || n.addEventListener("timeupdate", u), n.addEventListener("play", d), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const g = () => {
    o || m || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, p = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var K, z;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", u), n.removeEventListener("play", d), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (K = n.removeAttribute) == null || K.call(n, "src"), (z = n.load) == null || z.call(n));
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
function ri(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function s_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function gf(e, t, r = null) {
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
  return !n && r != null && (n = s_(e == null ? void 0 : e.graph, r)), n;
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
function Pm({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (x) => {
    if (!x) return "";
    if (typeof x == "string") return String(x || "").trim();
    if (Array.isArray(x)) {
      if (x.length === 0) return "";
      if (x.length === 1) return i(x[0]);
      const q = String(x[0] || "").trim();
      if (q)
        return ri(t, {
          filename: q,
          subfolder: String(x[1] || "").trim(),
          type: String(x[2] || "output").trim() || "output"
        });
      for (const R of x) {
        const ne = i(R);
        if (ne) return ne;
      }
      return "";
    }
    return typeof (x == null ? void 0 : x.src) == "string" && x.src ? x.src : typeof (x == null ? void 0 : x.url) == "string" && x.url ? x.url : ri(t, x);
  }, o = (x) => {
    if (!x || typeof x != "object") return "";
    const q = String(x.type || "").trim().toLowerCase();
    if (q === "dataurl") return String(x.value || "");
    if (q !== "comfy_image") return "";
    const R = String(x.filename || "").trim();
    return R ? ri(t, {
      filename: R,
      subfolder: String(x.subfolder || ""),
      type: String(x.storage || "input")
    }) : "";
  }, a = (x) => {
    const q = e == null ? void 0 : e.nodeOutputs;
    if (!q || x == null) return null;
    const R = String(x);
    return q instanceof Map ? q.get(x) || q.get(R) || q.get(Number(R)) || null : q[x] || q[R] || null;
  }, s = (x, q) => {
    var ne;
    const R = a(x == null ? void 0 : x.id);
    return Array.isArray((ne = R == null ? void 0 : R.ui) == null ? void 0 : ne[q]) ? R.ui[q] : Array.isArray(R == null ? void 0 : R[q]) ? R[q] : [];
  }, l = (x, q) => {
    const R = a(x == null ? void 0 : x.id);
    return R != null && R.ui && Object.prototype.hasOwnProperty.call(R.ui, q) ? R.ui[q] : R && Object.prototype.hasOwnProperty.call(R, q) ? R[q] : null;
  }, c = (x, q) => {
    const R = l(x, "pano_sticker_input_state_hash"), ne = Array.isArray(R) ? R[0] : R;
    return String(ne ?? "").trim() || u_(q);
  }, u = (x) => {
    const q = [], R = /* @__PURE__ */ new Set();
    for (const ne of x || []) {
      const B = i(ne);
      !B || R.has(B) || (R.add(B), q.push(B));
    }
    return q;
  }, d = (x, q) => {
    var B;
    const R = [];
    Array.isArray(x == null ? void 0 : x.images) && x.images.length && R.push(x.images), Array.isArray((B = x == null ? void 0 : x.ui) == null ? void 0 : B.images) && x.ui.images.length && R.push(x.ui.images);
    const ne = [];
    for (const Z of R)
      q >= 0 && q < Z.length && ne.push(Z[q]), ne.push(...Z);
    return ne;
  }, f = (x, q) => {
    var H;
    const R = String(q || "").trim();
    if (!R) return { src: "", sourceType: "", inputName: "" };
    const B = (Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : []).findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === R);
    if (B < 0) return { src: "", sourceType: "", inputName: R };
    const Z = x.graph ? x.getInputLink(B) : null;
    if ((Z == null ? void 0 : Z.origin_id) == null) return { src: "", sourceType: "", inputName: R };
    const I = Z.origin_id, ae = gf(x, B, I);
    if (!ae) return { src: "", sourceType: "", inputName: R };
    const ie = Number(Z.origin_slot ?? 0);
    let he = [];
    try {
      he = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ae) || [] : [];
    } catch {
      he = [];
    }
    if (Array.isArray(he) && he.length) {
      const oe = [];
      ie >= 0 && ie < he.length && oe.push(he[ie]), oe.push(...he);
      const j = u(oe.filter((fe) => !ls(fe)));
      if (j.length)
        return { src: j[0], srcCandidates: j, sourceType: "appNodeImageUrls", inputName: R };
    }
    const te = a((ae == null ? void 0 : ae.id) ?? I), ge = u(d(te, ie).filter((oe) => !ls(oe))).map((oe) => `${oe}&pano_src=${jc(te)}`);
    if (ge.length)
      return { src: ge[0], srcCandidates: ge, sourceType: "nodeOutputs", inputName: R };
    const de = Array.isArray(ae == null ? void 0 : ae.imgs) ? ae.imgs : [];
    if (de.length) {
      const oe = [];
      ie >= 0 && ie < de.length && oe.push(de[ie]), oe.push(...de);
      const j = u(oe);
      if (j.length)
        return { src: j[0], srcCandidates: j, sourceType: "nodeImgs", inputName: R };
    }
    const P = (H = ae == null ? void 0 : ae.widgets) == null ? void 0 : H.find((oe) => String((oe == null ? void 0 : oe.name) || "").toLowerCase() === "image");
    if (P) {
      let oe = i(P.value);
      if (oe && !oe.includes("/") && !oe.includes(":") && (ae.comfyClass === "LoadImage" || ae.type === "LoadImage") && (oe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(oe)}&type=input&subfolder=`), oe) return { src: oe, sourceType: "widget", inputName: R };
    }
    return { src: "", sourceType: "", inputName: R };
  }, m = (x, q = []) => {
    var ne;
    const R = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : [];
    for (const B of q) {
      const Z = R.findIndex((he) => String((he == null ? void 0 : he.name) || "") === B), I = Z >= 0 && x.graph ? x.getInputLink(Z) : null;
      if ((I == null ? void 0 : I.origin_id) == null) continue;
      const ae = a(((ne = gf(x, Z, I.origin_id)) == null ? void 0 : ne.id) ?? I.origin_id), ie = (Array.isArray(ae == null ? void 0 : ae.images) ? ae.images : []).find(ls);
      return ie ? `${ri(t, ie)}&pano_src=${jc(ae)}` : "";
    }
    return "";
  }, _ = (x, q = []) => {
    const R = Array.isArray(q) ? q : [q];
    for (const ne of R) {
      const B = f(x, ne);
      if (String((B == null ? void 0 : B.src) || "").trim()) return B;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (x) => {
    const q = String(x || "").trim();
    if (!q) return [];
    if (l_(q)) return [q];
    const { filename: R, subfolder: ne } = c_(q);
    return R ? u([
      ri(t, { filename: R, subfolder: ne, type: "temp" }),
      ri(t, { filename: R, subfolder: ne, type: "output" }),
      ri(t, { filename: R, subfolder: ne, type: "input" }),
      q
    ]) : [q];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (x) => {
      var q, R;
      try {
        (R = (q = x == null ? void 0 : x.__panoLinkedInputImageCache) == null ? void 0 : q.forEach) == null || R.call(q, (ne, B, Z) => {
          var I;
          ne != null && ne.img && ((I = n == null ? void 0 : n.isImageLoadFailed) != null && I.call(n, ne.img)) && Z.delete(B);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (x, q) => {
      var R;
      (R = x == null ? void 0 : x.delete) == null || R.call(x, `__ui__${String(q || "")}`);
    },
    linkedValue: (x, q) => {
      var I, ae, ie, he;
      const R = String(q || ""), ne = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs.findIndex((te) => String((te == null ? void 0 : te.name) || "") === R) : -1, B = ne >= 0 && x.graph ? x.getInputLink(ne) : null;
      if (B) {
        const te = a(B.origin_id), ge = [
          te == null ? void 0 : te.output,
          te == null ? void 0 : te.result,
          (I = te == null ? void 0 : te.data) == null ? void 0 : I.output,
          (ae = te == null ? void 0 : te.data) == null ? void 0 : ae.result,
          (ie = te == null ? void 0 : te.ui) == null ? void 0 : ie.output,
          (he = te == null ? void 0 : te.ui) == null ? void 0 : he.result
        ];
        for (const de of ge) {
          if (!Array.isArray(de)) continue;
          const P = de[Number(B.origin_slot || 0)];
          if (typeof P == "string" && P.trim()) return P;
        }
      }
      const Z = Array.isArray(x == null ? void 0 : x.widgets) ? x.widgets.find((te) => String((te == null ? void 0 : te.name) || "") === R) : null;
      return String((Z == null ? void 0 : Z.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (x, q = [], R = null, ne = "") => {
      var Pe;
      const B = Array.isArray(q) ? q : [q], Z = _(x, B), ae = (Array.isArray(Z == null ? void 0 : Z.srcCandidates) && Z.srcCandidates.length ? Z.srcCandidates : [Z == null ? void 0 : Z.src]).map((re) => String(re || "").trim()).filter(Boolean);
      if (!ae.length) return null;
      const ie = u(ae.flatMap((re) => g(re)));
      if (!ie.length) return null;
      x.__panoLinkedInputImageCache || (x.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const he = String(ne || B.join("|") || "image_exact"), te = ae.join(`
`), ge = x.__panoLinkedInputImageCache.get(he);
      if (ge && ge.srcRaw === te && ge.img) return ge.img;
      const de = r || globalThis.Image;
      if (typeof de != "function") return null;
      const P = new de();
      (Pe = n == null ? void 0 : n.markImageLoading) == null || Pe.call(n, P, te);
      const H = { srcRaw: te, resolvedSrc: "", img: P };
      x.__panoLinkedInputImageCache.set(he, H);
      let oe = -1;
      const j = (re) => {
        var O, Q, ue;
        re === "ready" ? (O = n == null ? void 0 : n.markImageReady) == null || O.call(n, P, te) : (Q = n == null ? void 0 : n.markImageFailed) == null || Q.call(n, P, te), R == null || R(P), (ue = x.setDirtyCanvas) == null || ue.call(x, !0, !0);
      }, fe = () => {
        if (oe += 1, oe >= ie.length) {
          j("failed");
          return;
        }
        H.resolvedSrc = ie[oe], P.src = H.resolvedSrc;
      };
      return P.onload = () => j("ready"), P.onerror = () => {
        if (oe + 1 < ie.length) {
          fe();
          return;
        }
        j("failed");
      }, fe(), P;
    },
    output: a,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (x, q, R, ne = null) => {
      var te, ge, de;
      const B = s(x, q)[0] || null, Z = i(B);
      if (!Z) return null;
      const I = `__ui__${q}`, ae = (te = R == null ? void 0 : R.get) == null ? void 0 : te.call(R, I);
      if (ae && ae.__panoSrc === Z) return ae;
      const ie = r || globalThis.Image;
      if (typeof ie != "function") return null;
      const he = new ie();
      return he.__panoSrc = Z, (ge = n == null ? void 0 : n.markImageLoading) == null || ge.call(n, he, Z), he.onload = () => {
        var P;
        (P = n == null ? void 0 : n.markImageReady) == null || P.call(n, he, Z), ne == null || ne(he);
      }, he.onerror = () => {
        var P;
        (P = n == null ? void 0 : n.markImageFailed) == null || P.call(n, he, Z), ne == null || ne(he);
      }, he.src = Z, (de = R == null ? void 0 : R.set) == null || de.call(R, I, he), he;
    },
    uiList: s,
    uiValue: l
  };
}
const d_ = 1e-3;
function Nm(e, t, r, n) {
  if (!so(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(d_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Cm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function f_(e, t) {
  return Math.floor(e * t.fps);
}
function Am(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const yf = 4;
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
      const u = f_(s, l);
      for (let f = u; f < Math.min(r.length, u + yf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < u || f > u + yf) && f !== i && n.delete(f);
      const d = n.get(u);
      return d != null && d.complete && d.naturalWidth > 0 && (i !== null && i !== u && n.delete(i), i = u), i === null ? c : n.get(i);
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
  const c = () => a || e(), u = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(d) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, d);
      return f.changed ? (a = f.state, s = !0, n(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const d = s;
      return d && i(a), a = null, s = !1, n(null), u(), d;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), u(), !0);
    },
    apply(d) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), d);
      return f.changed ? (i(f.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const d = a != null;
      a = null, s = !1, d && n(null);
    }
  };
}
const cs = "sticker_image_1", Om = "external_image", no = 0;
function Yi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function ec(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function qr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Hc(e, t = no) {
  return (e == null ? void 0 : e.version) !== 2 ? qr(e) : qr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: _i(r, t).active,
    external: r.source.kind === "port",
    ...Wu(r, t)
  }));
}
function Qu(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && qr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Fm(e) {
  return String((e == null ? void 0 : e.id) || "") === cs || String((e == null ? void 0 : e.source_kind) || "") === Om;
}
function ed(e, t) {
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
function Vm(e, t = {}) {
  var G, x, q;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((R) => String((R == null ? void 0 : R.id) || "") === cs);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const R = String(((G = e.active) == null ? void 0 : G.selected_sticker_id) || "") === cs;
    return {
      state: {
        ...e,
        stickers: r.filter((ne, B) => B !== n),
        active: R ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), u = l > 0 && c > 0, d = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = s ? m.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(_)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const R = Yi(g, d, f), ne = Number(((x = a == null ? void 0 : a.initial_pose) == null ? void 0 : x.hFOV_deg) ?? g), B = Yi(ne, d, f), Z = Number(((q = a == null ? void 0 : a.initial_pose) == null ? void 0 : q.vFOV_deg) ?? B);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - R) <= 1e-6 && Math.abs(Z - B) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((I, ae) => ae === n ? {
          ...I,
          vFOV_deg: R,
          initial_pose: I.initial_pose && typeof I.initial_pose == "object" ? { ...I.initial_pose, vFOV_deg: B } : I.initial_pose
        } : I)
      },
      changed: !0
    };
  }
  const p = r.reduce((R, ne) => Math.max(R, Number((ne == null ? void 0 : ne.z_index) || 0)), -1), F = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: u ? Yi(g, d, f) : Number(m.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, K = {
    ...a || {},
    id: cs,
    source_kind: Om,
    source_link_id: i,
    source_state_hash: o,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: p + 1
  }, z = n >= 0 ? r.map((R, ne) => ne === n ? K : R) : [...r, K];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function bf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const p_ = ["IMAGE", "VIDEO"];
function vf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => p_.includes(r)) ? "2d" : null;
}
function h_(e, t) {
  var i, o, a, s, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? vf(n.type) ?? vf((c = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Rm(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: bf(e, "sticker"),
    awaitingPose: !t && (bf(e, "sticker_state") || h_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function _f(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return hr({ version: 2, stickers: [r] }).stickers[0];
}
function $m(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var g;
  const a = e.stickers.findIndex((p) => ed(e, p)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const p = ((g = e.active) == null ? void 0 : g.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, K) => K !== a),
        active: p ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const p = { ..._f(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((F, K) => K === a ? p : F) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const p = [s.size.value, ...s.size.keyframes.map((z) => z.value)], F = p.map((z) => Yi(z.hFOV_deg, i, o));
    if (p.every((z, G) => Math.abs(z.vFOV_deg - F[G]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...s.size.value, vFOV_deg: F[0] },
      keyframes: s.size.keyframes.map((z, G) => ({ ...z, value: { ...z.value, vFOV_deg: F[G + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((z, G) => G === a ? { ...z, size: K } : z) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((p) => p.id));
  let u = 1;
  for (; c.has(`sticker_${u}`); ) u += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, _f(`sticker_${u}`, n)] }, changed: !0 };
  const d = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (p) => l ? Yi(p, i, o) : p, m = Ku(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: d,
    vFOV_deg: f(d)
  }, qr(e).reduce((p, F) => Math.max(p, F.z_index), -1) + 1), _ = (n == null ? void 0 : n.keyframes) ?? {};
  return m.direction.keyframes = _.direction ?? [], m.roll.keyframes = _.roll ?? [], m.size.keyframes = (_.size ?? []).map((p) => ({ ...p, value: { ...p.value, vFOV_deg: f(p.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, m] }, changed: !0 };
}
function td(e) {
  const t = qr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: ec(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: ec(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: ec(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function zm(e) {
  const t = Qu(e), r = ed(e, t), n = qr(e).some((s) => s && s.visible !== !1), i = td(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
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
function Sf(e, t) {
  const r = Qu(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = m_(e), i = String(r.id || ""), o = td(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, c) => {
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
  if (t.type === "sync-external") return Vm(e, t.value);
  if (t.type === "sync-port") return $m(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = td(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, u = {
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
          stickers: [...e.stickers, Ku(o, os(i.asset), u, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const d = { id: o, asset_id: a, ...u, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], d],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !qr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Qu(e);
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
  if (t.type === "bring-front") return Sf(e, "front");
  if (t.type === "send-back") return Sf(e, "back");
  if (t.type === "delete-selected") {
    if (ed(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = qr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = g_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Wu(r, no) : r, s = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(a[l] || 0)) > 1e-12 && (s[l] = c);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Z1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Kh(c, no, l), { state: { ...e, stickers: e.stickers.map((u) => u === r ? c : u) }, changed: !0 };
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
function b_(e = {}) {
  return Em({
    ...e,
    reduce: y_,
    projectModel: zm
  });
}
const Gc = 2;
function si(e, t) {
  return Math.floor(e * t + 0.5);
}
function v_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function jm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, c = !1, u = !1, d = { name: "idle" }, f = [];
  const m = () => c && !u, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const H of f) H();
    f = [];
  }
  function p(H, oe = {}) {
    return g(), d = { name: H, ...oe }, s(), d;
  }
  function F(H, oe, j) {
    const fe = () => {
      d === H && j();
    };
    e.addEventListener(oe, fe), f.push(() => e.removeEventListener(oe, fe));
  }
  function K(H, oe) {
    let j = t.requestFrame(function fe(Pe) {
      d === H && (oe(Pe), d === H && (j = t.requestFrame(fe)));
    });
    f.push(() => t.cancelFrame(j));
  }
  function z(H) {
    l = H, o(l);
  }
  function G() {
    return p(u ? "error" : "idle");
  }
  function x() {
    u = !0, G();
  }
  function q() {
    const { seekable: H } = e, oe = H != null && H.length ? H.end(H.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(oe) ? oe : 1 / 0));
  }
  function R(H) {
    if (!m()) return H === "play" ? ae() : G();
    if (e.readyState < Gc) {
      const oe = p("loading", { then: H });
      return F(oe, "loadeddata", () => R(oe.then)), F(oe, "error", x), oe;
    }
    return H === "play" && l / r() >= Number(e.duration) ? ae() : ne(H, !1);
  }
  function ne(H, oe) {
    const j = q();
    if (!e.ended && si(Number(e.currentTime), r()) === si(j, r())) return B(H);
    const fe = p("seeking", { then: H, frame: l, retried: oe });
    return F(fe, "seeked", () => {
      const Pe = si(Number(e.currentTime), r()) === si(q(), r()), re = l === fe.frame;
      Pe || re && fe.retried ? B(fe.then) : ne(fe.then, re);
    }), F(fe, "error", x), e.currentTime = j, fe;
  }
  function B(H) {
    return H === "play" ? Z() : (a(), G());
  }
  function Z() {
    const H = p("playingVideo", { shown: !1 });
    if (F(H, "pause", () => e.ended ? I() : te()), F(H, "ended", I), F(H, "error", x), i() && si(Number(e.duration), r()) >= n()) {
      const j = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = j;
      });
    }
    const oe = (j, fe) => {
      fe && !H.shown && (H.shown = !0, s()), ie(si(j, r()));
    };
    if (_()) {
      let j = e.requestVideoFrameCallback(function fe(Pe, re) {
        d === H && (oe(Number(re.mediaTime), !0), d === H && (j = e.requestVideoFrameCallback(fe)));
      });
      f.push(() => {
        var fe;
        return (fe = e.cancelVideoFrameCallback) == null ? void 0 : fe.call(e, j);
      });
    } else
      K(H, () => oe(Number(e.currentTime), e.readyState >= Gc));
    return Promise.resolve(e.play()).catch(() => {
      d === H && te();
    }), H;
  }
  function I() {
    a(), ae();
  }
  function ae() {
    const H = p("playingClock", { startTs: t.now(), startFrame: l });
    return K(H, (oe) => ie(H.startFrame + Math.floor((oe - H.startTs) / 1e3 * r()))), H;
  }
  function ie(H) {
    if (H < n()) {
      z(H);
      return;
    }
    if (!i()) {
      he(n() - 1);
      return;
    }
    d.name === "playingVideo" && (g(), e.pause()), z(0), R("play");
  }
  function he(H) {
    d.name === "playingVideo" ? (g(), e.pause(), z(Math.max(0, H)), a()) : z(Math.max(0, H)), R("still");
  }
  function te() {
    if (d.name === "loading" || d.name === "seeking")
      d.then = "still", s();
    else if (d.name === "playingVideo") {
      g(), e.pause();
      const H = v_(Number(e.currentTime), r());
      z(Math.min(H, n() - 1)), a(), l === H ? G() : R("still");
    } else d.name === "playingClock" && he(Math.min(l, n() - 1));
  }
  function ge() {
    if (!P()) {
      if (l >= n() - 1 && z(0), d.name === "loading" || d.name === "seeking") {
        d.then = "play", s();
        return;
      }
      R("play");
    }
  }
  function de(H) {
    const oe = Math.max(0, Math.round(H));
    if (d.name === "loading" || d.name === "seeking") {
      d.then = "still", z(oe), s();
      return;
    }
    d.name === "playingVideo" && (g(), e.pause()), z(oe), R("still");
  }
  function P() {
    return d.name === "playingVideo" || d.name === "playingClock" || d.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return d.name;
    },
    get playing() {
      return P();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return d.name === "playingVideo" || d.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return d.name === "playingVideo" && d.shown;
    },
    play: ge,
    stop: te,
    seek: de,
    toggle() {
      P() ? te() : ge();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(H) {
      g(), c = !!H, u = !1, R("still");
    },
    dispose() {
      g(), c = !1, d = { name: "idle" };
    }
  };
}
function Hm({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function c(g) {
    s = g, t();
  }
  function u(g) {
    a = g, e.currentTime = g;
  }
  function d() {
    const g = l;
    f(), l !== g && r();
  }
  function f() {
    if (!n || i || e.readyState < Gc) return;
    const { time: g, playing: p, fps: F } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (p) {
      if (a !== null) return;
      const K = Number(e.duration), z = Number.isFinite(K) ? Math.min(g, K) : g, G = Math.abs(Number(e.currentTime) - z) > 1.5 / F;
      if (e.ended && !G) return;
      G && u(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(a !== null || s === g) && (Number(e.currentTime) === g ? c(g) : u(g));
  }
  const m = {
    loadeddata: d,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: d,
    seeked: () => {
      const g = a;
      a = null, !o.playing && g === o.time ? c(g) : d();
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
    follow({ src: g = "", time: p = null, playing: F = !1, fps: K }) {
      g !== n && (_(g), r()), o = { time: p, playing: F, fps: K }, d();
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
function Wc(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function __({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: c = !1 }) {
  let u = "", d = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let _ = null, g = null;
  const p = () => i().timeline.fps, F = (I) => I.stickers.find((ae) => ae.source.kind === "port"), K = () => {
    const I = i(), ae = F(I);
    return jh(I, {
      minimum: Math.round(p() * 5),
      frames: Math.max(
        u ? Math.round(f * p()) : 0,
        _ && ae ? Cm(ae.clip, p(), _.meta) : 0
      ),
      camera: c
    });
  }, z = jm({
    video: e,
    clock: n,
    fps: p,
    span: K,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), G = () => {
    d === u && Number.isFinite(e.duration) && (f = e.duration);
  }, x = () => {
    d && (m.add(d), l());
  }, q = Hm({ video: t, onCapture: s, onChange: l }), R = Im({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", G), e.addEventListener("error", x);
  function ne(I) {
    I !== d && (d = I, e.pause(), I ? e.src = I : e.removeAttribute("src"), e.load(), z.setSource(!!I));
  }
  function B() {
    z.playing && z.stop();
  }
  function Z(I) {
    const ae = F(I);
    g = _ && ae ? Nm(ae.clip, z.frame, I.timeline.fps, _.meta) : null, q.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: g,
      playing: z.advancing,
      fps: I.timeline.fps
    });
  }
  return {
    get frame() {
      return z.frame;
    },
    get playing() {
      return z.playing;
    },
    get showsVideo() {
      return z.showsVideo;
    },
    get source() {
      return d;
    },
    pause: B,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(I, ae) {
      return _ != null && _.frames ? R.picture(_.frames, g, _.meta, ae) : q.picture(I, ae);
    },
    toggle() {
      z.playing ? z.stop() : z.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: I, sources: ae, state: ie, sticker: he = null }) {
      if (_ = I ? he : null, !I)
        return B(), ne(""), Z(ie), !1;
      for (const H of m)
        ae.includes(H) || m.delete(H);
      const te = ae.find((H) => H && !m.has(H)) || "", ge = te !== u;
      ge && (u = te, f = 0), ne(u);
      const de = zh(ie, { camera: c }) || !!u && z.state !== "error" || !!_;
      return de || B(), (ge || !de || !z.playing && z.frame >= K()) && z.frame !== no && z.seek(no), Z(ie), de;
    },
    dispose() {
      z.dispose(), q.dispose(), e.removeEventListener("loadedmetadata", G), e.removeEventListener("error", x), e.pause(), e.removeAttribute("src"), e.load(), d = "";
    }
  };
}
const Rs = Math.PI / 180, fr = 180 / Math.PI, S_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), w_ = 260;
function wf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Gm(e, t) {
  return t ? Gm(t, e % t) : e;
}
function x_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Gm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function sa(e, t) {
  const r = wf(e), n = wf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: x_(r, n) };
}
function gi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Wm(e) {
  const t = gi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Er(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function nd(e, t, r = S_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (p, F, K) => {
    const z = p + F, G = Math.max(0, K - 1), x = z > G && z > 0 ? G / z : 1;
    return [p * x, F * x];
  }, [u, d] = c(l, a, n), [f, m] = c(o, s, i), _ = {
    x: u,
    y: f,
    w: Math.max(1, n - u - d),
    h: Math.max(1, i - f - m)
  }, g = Fu(_, t);
  return {
    x: _.x + (_.w - g.width) * 0.5,
    y: _.y + (_.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: _
  };
}
function k_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = nd({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Rs * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = _h(l, gh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), u = M_(c, oo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), d = Tu({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: d.hFOV_deg
  };
}
function Km(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * fr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * fr, -89.9, 89.9)
  };
}
function M_(e, t) {
  const r = Km(e), n = oo(r.yaw, r.pitch, 0), i = zl(t, e), o = {
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
    roll: ll(Math.atan2(
      zl(s, n.up),
      zl(s, n.right)
    ) * fr)
  };
}
function Bm(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = nd({ width: r, height: n }, xi(e)), o = vi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = _h(e, gh(
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
function P_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = vi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: c, halfH: u } = Du(l, s), d = {
    x: o - c,
    y: a - u,
    w: c * 2,
    h: u * 2
  }, f = d.x <= 0 && d.y <= 0 && d.x + d.w >= n && d.y + d.h >= i, m = n / i, _ = Math.tan(kc * Rs), g = m >= 1 ? _ : _ * m, p = m >= 1 ? _ / m : _;
  return {
    focalPx: s,
    rect: d,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / s) * fr,
      vFOV_deg: 2 * Math.atan(u / s) * fr
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
  const r = gi(e);
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
    const a = vi(r, e);
    return Tu(Fu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ns(o, t) };
}
function xf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = sa(t, r);
  if (!o) return e;
  const a = xi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = sa(o.height, o.width));
  const s = N_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Um(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (gi(e)) return { state: e, changed: !1 };
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
    const n = gi(e);
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
    return Fi(e, (n) => xf(
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
      const o = String(Er(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? sa(o[1], o[2]) : sa(xi(n), 1);
      return a ? xf(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Fi(e, (i) => {
      const o = ll(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
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
  }, u = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (s === "shift" && u < Math.min(l.w, l.h) * a) return null;
  const d = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: s,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: d,
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
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Rs, l = Math.cos(s), c = Math.sin(s), u = o / r, d = -a / r, f = u * l - d * c, m = u * c + d * l, _ = Number(e.pitch_deg || 0) * Rs, g = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(f) / g * fr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(m) * fr, -90, 90)
  };
}
function C_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Em({
    readState: e,
    reduce: Um,
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
}), A_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, I_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: A_(t[2])
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
}, kf = Object.fromEntries(
  Object.entries(E_).map(([e, t]) => [e, {
    name: t.name,
    elements: I_(t.body)
  }])
), Tt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(kf, n) ? kf[n] : null;
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
        o.tag === "path" ? (Fe(), Le("path", Nr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Fe(), Le("circle", Nr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Fe(), Le("rect", Nr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Fe(), Le("line", Nr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Fe(), Le("polyline", Nr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Fe(), Le("polygon", Nr({
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
    const t = e, r = ut(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Fe(), Vn(z0(e.tag), Nr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Fp(() => [
        Be(Tt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, O_ = ["aria-expanded", "disabled"], F_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, T_ = ["data-aspect", "disabled", "onClick"], D_ = { class: "pano-cutout-aspect-custom" }, L_ = ["disabled"], V_ = ["disabled"], R_ = ["data-custom-width", "data-custom-height", "disabled"], Jm = {
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
    ]), o = /* @__PURE__ */ Kt("1"), a = /* @__PURE__ */ Kt("1"), s = /* @__PURE__ */ Kt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], p = String(r.model.aspectLabel || "");
      return g.length ? g.map((F) => {
        const K = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), z = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || K);
        return {
          ...typeof F == "object" && F ? F : {},
          value: K,
          label: z,
          active: p ? K === p : (F == null ? void 0 : F.active) === !0
        };
      }) : i.map((F) => ({
        ...F,
        active: F.value === p
      }));
    }), u = ut(() => {
      var p;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((p = c.value.find((F) => F.active === !0)) == null ? void 0 : p.label) || "Aspect");
    });
    pi(u, (g) => {
      const p = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      p && (o.value = p[1], a.value = p[2]);
    }, { immediate: !0 });
    function d(g) {
      n("action", g);
    }
    function f(g) {
      var p;
      r.model.aspectOpen === !0 && ((p = s.value) != null && p.contains(g.target) || d({ type: "close-aspect" }));
    }
    rl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ha(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function m(g) {
      const [p, F] = String(g.value || "").split(":");
      d({
        type: "set-aspect",
        width: p,
        height: F,
        preserveOrientation: !0
      });
    }
    function _() {
      d({
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
      e.mode === "rail" ? (Fe(), Vn(Xt, {
        key: 0,
        icon: e.model.aspectIcon || nt(He).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: p[0] || (p[0] = (F) => d({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Fe(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: p[1] || (p[1] = (F) => d({ type: "toggle-aspect" }))
      }, [
        Be(Tt, {
          icon: e.model.aspectIcon || nt(He).aspect
        }, null, 8, ["icon"]),
        Me("span", null, rt(u.value), 1),
        Be(Tt, {
          icon: nt(He).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, O_)),
      Tr(Me("div", F_, [
        (Fe(!0), Le(Qe, null, Mt(c.value, (F) => (Fe(), Le("button", {
          key: F.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: l.value,
          onClick: (K) => m(F)
        }, rt(F.label), 11, T_))), 128)),
        Me("div", D_, [
          Tr(Me("input", {
            "onUpdate:modelValue": p[2] || (p[2] = (F) => o.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, L_), [
            [Bd, o.value]
          ]),
          p[4] || (p[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Tr(Me("input", {
            "onUpdate:modelValue": p[3] || (p[3] = (F) => a.value = F),
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
          }, "Apply", 8, R_)
        ])
      ], 512), [
        [bi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, $_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, z_ = {
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
        icon: nt(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", $_, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Qe, null, Mt(nt(r), (o) => (Fe(), Le("div", {
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
}, bl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Fe(), Le("div", j_, rt(nt(mm)), 1));
  }
}, H_ = { class: "pano-cutout-node-surface" }, G_ = ["title", "disabled"], W_ = { class: "value" }, K_ = {
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
    return (n, i) => (Fe(), Le("div", H_, [
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
            icon: nt(He).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(Xt, {
          icon: e.model.hasShot ? nt(He).delete : nt(He).plus_circle,
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
            icon: nt(He).roll
          }, null, 8, ["icon"]),
          Me("span", W_, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, G_),
        Be(Xt, {
          icon: nt(He).rotate_90,
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
      e.model.hasShot === !1 ? (Fe(), Le("div", K_, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Fe(), Vn(bl, { key: 1 })) : ht("", !0)
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
      const d = o;
      return o = void 0, a = !1, { active: !0, intent: d };
    }
    function l(d) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = d, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(d) {
      var g, p;
      const { active: f, intent: m } = s();
      if (!f) return;
      const _ = ((p = (g = d.target) == null ? void 0 : g.files) == null ? void 0 : p[0]) || null;
      if (_) {
        n("file-selected", { intent: m, file: _ });
        return;
      }
      n("file-cancelled", { intent: m });
    }
    function u() {
      const { active: d, intent: f } = s();
      d && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (d, f) => (Fe(), Le("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: u
    }, null, 544));
  }
}, U_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Y_ = {
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
        icon: nt(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Pt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", U_, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Qe, null, Mt(nt(r), (o) => (Fe(), Le("div", {
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
}, eS = {
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
    return (a, s) => (Fe(), Le("div", q_, [
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
            icon: nt(He).fullscreen
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
            icon: nt(He).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, X_),
        Be(Xt, {
          icon: e.model.locked ? nt(He).lock_closed : nt(He).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Xt, {
          icon: nt(He).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Xt, {
          icon: nt(He).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Xt, {
          icon: e.model.isExternalSelection ? nt(He).back_initial : nt(He).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Y_)
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
          icon: e.model.playing ? nt(He).pause : nt(He).play
        }, null, 8, ["icon"])
      ], 40, J_)) : ht("", !0),
      e.model.hasStickers === !1 ? (Fe(), Le("div", Z_, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Fe(), Le("div", Q_, "Drop image to add")) : ht("", !0),
      Be(Zm, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Fe(), Vn(bl, { key: 3 })) : ht("", !0)
    ]));
  }
}, tS = { class: "pano-studio-node-surface" }, nS = {
  class: "pano-studio-node-status",
  role: "status"
}, rS = { class: "pano-studio-node-shot" }, iS = { class: "pano-studio-node-size" }, oS = { class: "pano-studio-node-note" }, aS = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Le("div", tS, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Pt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Pt(() => {
        }, ["stop"]))
      }, [
        Me("div", nS, [
          Me("span", rS, rt(e.model.status.shot), 1),
          Me("span", iS, rt(e.model.status.size), 1),
          Me("span", oS, rt(e.model.status.note), 1)
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
            icon: nt(He).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Fe(), Vn(bl, { key: 0 })) : ht("", !0)
    ]));
  }
}, sS = 2048, Kc = 4096, us = (e) => Math.floor(e + 0.5), Ha = (e) => Math.max(2, 2 * us(e / 2));
function Qm(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function lS(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? fl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, us(e.timeline.length)) : t.length ? n = Math.max(1, us(Math.max(...t))) : r.length && (n = Math.max(1, us(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function cS(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let a;
  r !== "auto" ? a = Number(r) : o ? a = sS : a = Math.floor(i * 360 / n);
  const s = Qm(e);
  if (!s || s.projection === "erp")
    return { width: Math.floor(a * n / 360), height: Math.floor(a / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => cl(s, m).hFOV_deg)), c = a / Math.PI * Math.tan(l * Math.PI / 360), u = c / s.aspect, d = [Ha(c), Ha(u)];
  if (Math.max(...d) <= Kc) return { width: d[0], height: d[1], reducedFrom: null, defaulted: o };
  const f = Kc / Math.max(c, u);
  return { width: Ha(c * f), height: Ha(u * f), reducedFrom: d, defaulted: o };
}
function uS(e, t, r) {
  let n = 2166136261;
  for (const i of `${e}\0${t}\0${r}`)
    n = Math.imul(n ^ i.codePointAt(0), 16777619) >>> 0;
  return n.toString(16).padStart(8, "0");
}
function dS(e, { stateText: t = "", outputSize: r, coverage: n, bgWidth: i, run: o = null }) {
  const a = Qm(e);
  let s = "ERP";
  a && (s = a.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let l;
  if (o && o.key === uS(t, r, String(n)))
    l = { width: o.width, height: o.height, reducedFrom: o.reduced_from, defaulted: r === "auto" && i === null };
  else {
    if (r === "auto" && i === void 0)
      return { shot: s, size: "auto", note: "" };
    l = cS(e, lS(e), r, n, i);
  }
  let c = "";
  return l.reducedFrom ? c = `Capped at ${Kc} (${l.reducedFrom[0]} × ${l.reducedFrom[1]})` : l.defaulted && (c = "auto: no bg_media"), { shot: s, size: `${l.width} × ${l.height}`, note: c };
}
function fS() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, n === void 0 ? "pending" : n, t.run ?? null]);
    return i === e ? null : (e = i, dS(r(), { ...t, bgWidth: n }));
  };
}
const Mf = 24;
function pS(e = {}) {
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
function hS(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
function rd(e, t, { selected: r = !0 } = {}) {
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
function mS(e) {
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
function ii(e, t, r) {
  return Ou(Ms(
    Ms(e.centerDir, Ps(e.right, t)),
    Ps(e.up, r)
  ));
}
function id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = mS(e), n = No(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ii(r, -r.tanX, r.tanY),
    ii(r, r.tanX, r.tanY),
    ii(r, r.tanX, -r.tanY),
    ii(r, -r.tanX, -r.tanY)
  ].map((f) => No(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const _ = [];
    for (let g = 0; g <= 28; g += 1) {
      const p = g / 28;
      let F, K;
      m === 0 ? (F = -r.tanX + 2 * r.tanX * p, K = r.tanY) : m === 1 ? (F = r.tanX, K = r.tanY - 2 * r.tanY * p) : m === 2 ? (F = r.tanX - 2 * r.tanX * p, K = -r.tanY) : (F = -r.tanX, K = -r.tanY + 2 * r.tanY * p);
      const z = No(ii(r, F, K), t);
      z && _.push({ x: z.x, y: z.y });
    }
    return _;
  }), a = No(ii(r, 0, r.tanY), t), s = No(
    ii(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = s.x - a.x, u = s.y - a.y, d = Math.hypot(c, u) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + c / d * Mf,
      y: a.y + u / d * Mf
    },
    visible: !0
  };
}
function Pf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: id(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
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
function gS(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(n.x, n.z) * Jt),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * Jt
  };
}
function yS(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function bS(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Jt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ga = null;
function od() {
  return Ga || (Ga = new Promise((e) => {
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
  }), Ga);
}
function zn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function vS(e, t = 1024) {
  const r = Math.max(1, Math.round(zn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(zn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function _S(e, t, r) {
  const n = zn(t), i = zn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = zn(o.u0), s = zn(o.v0), l = zn(o.u1), c = zn(o.v1);
  if (l <= a || c <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + zn(u.du)) * n,
    centerY: ((s + c) * 0.5 + zn(u.dv)) * i,
    width: (l - a) * n,
    height: (c - s) * i,
    rotationRad: zn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, zn(u.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function SS(e, t, r) {
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
function wS() {
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
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((d) => d()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), u = _S(o, a, s);
    if (!c.startsWith("data:") || !u) return null;
    const d = SS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || d, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === d) return { source: m.source, revision: d };
    const _ = n(c, l), g = Number(_.naturalWidth || _.width || 0), p = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || g < 1 || p < 1) return null;
    const F = mn({ label: "raster-object" });
    F.width = Math.max(1, Math.round(a)), F.height = Math.max(1, Math.round(s));
    const K = F.getContext("2d");
    return K ? (u.wrapOffsets.forEach((z) => {
      K.save(), K.translate(u.centerX + z, u.centerY), K.rotate(u.rotationRad), K.scale(u.scale, u.scale), K.drawImage(
        _,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), K.restore();
    }), t.set(f, { revision: d, source: F }), { source: F, revision: d }) : null;
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
function xS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function kS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function MS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(d) {
    if (!d) return;
    d.entry.listeners.delete(d);
    const f = n.get(d.owner);
    (f == null ? void 0 : f.get(d.key)) === d && f.delete(d.key);
  }
  function a(d, f, m, _) {
    if (!d || typeof _ != "function" || m.settled) return;
    let g = n.get(d);
    g || (g = /* @__PURE__ */ new Map(), n.set(d, g));
    const p = g.get(f);
    if ((p == null ? void 0 : p.entry) === m) {
      p.callback = _;
      return;
    }
    o(p);
    const F = { owner: d, key: f, entry: m, callback: _ };
    g.set(f, F), m.listeners.add(F);
  }
  function s(d, f) {
    d.settled || (d.settled = !0, d.image.onload = null, d.image.onerror = null, !f && r.get(d.key) === d && r.delete(d.key), [...d.listeners].forEach((m) => {
      o(m);
      try {
        m.callback(d.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(d) {
    if (!(r.size <= d))
      for (const [f, m] of r) {
        if (r.size <= d) break;
        !m.settled || m.listeners.size > 0 || (m.image.onload = null, m.image.onerror = null, r.delete(f));
      }
  }
  function c(d, f, m, _ = null) {
    const g = String(f || ""), p = String(m || "");
    if (!g || !p) return null;
    let F = r.get(g);
    if (F)
      r.delete(g), r.set(g, F);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const G = new z();
      F = { key: g, image: G, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, F), G.onload = () => s(F, !0), G.onerror = () => s(F, !1), G.src = p;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || a(d, g, F, _), F.image;
  }
  function u(d) {
    const f = n.get(d);
    f && ([...f.values()].forEach(o), n.delete(d), l(i));
  }
  return { get: c, disposeOwner: u };
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
const ds = Object.freeze({
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
}), rg = "PanoramaSuite.Editor.ViewControls", PS = {
  id: rg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ds).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function NS(e) {
  return Object.hasOwn(ds, e) ? ds[e] : ds.default;
}
function CS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function AS(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const $s = "state_json";
function Or(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function IS(e) {
  var a, s;
  const t = Or(e, $s);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = Gh(r, {
    coverage: (a = Or(e, "coverage")) == null ? void 0 : a.value
  }), i = Um(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function ad(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Or(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, c, u, d, f, m, _;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (c = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (f = (d = e.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), (_ = (m = t == null ? void 0 : t.canvas) == null ? void 0 : m.setDirty) == null || _.call(m, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function ES(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Nf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function OS(e) {
  var u, d, f, m, _, g;
  if (!e) return;
  const t = Or(e, "coverage"), r = Or(e, "bg_color"), n = Or(e, $s), i = Or(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && ES(o) && (Nf(a) || a === ""))) return;
  let c = "360";
  if (Nf(a))
    try {
      c = String(In((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (d = t.callback) == null || d.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (m = n.callback) == null || m.call(n, a), i && (i.value = s, (_ = i.callback) == null || _.call(i, s)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function fs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Uc(e, t, r) {
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
async function FS(e, { tolerateOperationFailure: t = !1 } = {}) {
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
  await FS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function TS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await ig(e), r ? r.apply(this, n) : this.value;
  };
}
function DS(e) {
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
function LS(e) {
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
  function u(d) {
    var _;
    const f = `editor_btn|${r}`;
    if (d.__panoPreviewAttached === !0 && d.__panoPreviewMountKey === f) return;
    DS(d), ad(d, t), fs(d, $s);
    const m = Or(d, $s);
    if (TS(d, m), m && !m.__panoPreviewPatchedCb) {
      m.__panoPreviewPatchedCb = !0;
      const g = m.callback;
      m.callback = (p) => {
        var K;
        const F = g ? g(p) : void 0;
        return (K = d.setDirtyCanvas) == null || K.call(d, !0, !1), F;
      };
    }
    if (r === "PanoramaStickers") {
      d.__panoSceneStateV2 = l, d.__panoStudio = c;
      const g = Or(d, "bg_color");
      !l && g && (g.value == null || String(g.value).trim() === "" || String(g.value).toLowerCase() === "#000000") && (g.value = "#00ff00", (_ = g.callback) == null || _.call(g, "#00ff00")), Uc(d, n, () => i(d, "stickers")), s && (o(d, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(d, "stickers")
      }), d.__panoStickersNodeSurface && fs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260])), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
      return;
    }
    d.__panoSceneStateV2 = l, Uc(d, n, () => i(d, "cutout")), l || a(d, {
      buttonText: n,
      onOpen: () => i(d, "cutout")
    }), d.__panoCutoutNodeSurface && fs(d, n), (!Array.isArray(d.size) || d.size[0] < 10 || d.size[1] < 10) && (d.size = [360, 260]), d.__panoPreviewAttached = !0, d.__panoPreviewMountKey = f;
  }
  for (const d of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[d];
    e.prototype[d] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      d === "onNodeCreated" && r === "PanoramaCutout" && !l && IS(this), d === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && OS(this);
      const _ = !!this.__panoPreviewAttached;
      return (d === "onNodeCreated" || this.widgets) && u(this), d === "onAdded" && _ && Dr(this, "attach"), m;
    };
  }
}
function VS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return LS(this), n;
  };
}
function RS(e, {
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
    ad(e, t);
    const l = (c = e) => r(c, "stickers", { readOnly: !0, hideSidebar: !1 });
    Uc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && fs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function $S({
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
    settings: [PS, hb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Xd],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Xd.id] }],
    beforeRegisterNodeDef(l, c) {
      const u = String((c == null ? void 0 : c.name) || "");
      (u === "PanoramaStickers" || u === "Panorama Stickers") && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaStickersNode" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), u === "PanoramaStudio" && Co(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (u === "PanoramaCutout" || u === "Panorama Cutout") && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaCutoutNode" && Co(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), Ns(u) && VS(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      ad(l, e), Ns(c) && RS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const zS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Jn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : zS.test(String(e.name || "")) : !1;
}
function sd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Jn(r)) : !1;
}
function jS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, u, d;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (d = l == null ? void 0 : l.stopImmediatePropagation) == null || d.call(l);
  }, o = (l) => {
    if (sd(l == null ? void 0 : l.dataTransfer)) {
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
    var u;
    const c = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((d) => Jn(d));
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
    const u = await new Promise((d, f) => {
      const m = new r();
      m.onload = () => d(m), m.onerror = () => f(new Error("image load failed")), m.src = o;
    });
    return {
      image: u,
      width: Math.max(1, Number(u.naturalWidth || u.width || 1)),
      height: Math.max(1, Number(u.naturalHeight || u.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function li(e, { fetchApi: t } = {}) {
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
const Cf = /* @__PURE__ */ new WeakSet(), Af = /* @__PURE__ */ new WeakSet();
let If = 0;
function Yc(e) {
  if (!e || typeof e != "object" || Af.has(e)) return e;
  const t = String(e.type || "preview");
  return If += 1, e.type = `${t}:pano-${If}`, Af.add(e), e;
}
function zs(e) {
  if (!e || typeof e != "object" || Cf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Cf.add(e), e;
}
function og(e, t) {
  var n, i;
  if (!t || ((i = (n = zs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function HS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Rt } = Xa;
Zv((e) => Xr(e.id));
Qv(fn);
const ld = MS(), { linkedVideoFile: ag } = Pm({ app: Rt, api: fn });
function qc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Xa == null ? void 0 : Xa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const GS = "pano_suite.ui_settings.v1", WS = 120, KS = 2048;
function Ef() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(GS)) || "").trim();
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
function BS() {
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
function US() {
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
function Xc(e) {
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
  const t = Xc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function YS(e, t, r) {
  sg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Jc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function cd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function lg(e) {
  return Ns(cd(e));
}
function Of(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function cg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Jc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ps(e), zw(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Jc(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ps(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      ps(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function qS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ps(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Zc.unregister(e), qS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const u = String((c == null ? void 0 : c.name) || ""), d = String((c == null ? void 0 : c.type) || ""), f = qc();
      return u === f || d === f || u === "pano_preview" || d === "pano_preview" ? !0 : u === "preview" && d === "pano_preview";
    }).forEach((c) => mw(e, c));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function XS(e, t = "#00ff00") {
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
function JS(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Fr(e, "state_json")) == null ? void 0 : r.value) || "");
}
function ln(e) {
  var s, l;
  const t = JS(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = Fr(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = Fr(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? Wh(t, { backgroundColor: n, coverage: i, active: Yh(e) }) : XS(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function Fr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function ZS(e, t) {
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
  return !n && r != null && (n = ZS(e == null ? void 0 : e.graph, r)), n;
}
function QS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function dg(e, t = []) {
  const r = QS(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    tr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Ff(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function js(e, t) {
  const r = Ff(e), n = Ff(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function ew(e, t) {
  var r;
  return ug(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function tw(e, t = tr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = dg(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return o_(e, a, ew);
}
const Zc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = fn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, u, d, f;
        if (!o) return;
        const a = js(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...tw(o)].some((m) => js(n, m)) || Mm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (pg(o), (c = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || c.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (f = (d = o.graph) == null ? void 0 : d.setDirtyCanvas) == null || f.call(d, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Hs(e) {
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
function nw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function rw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function iw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function ow(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (nw(t)) return [t];
  const { filename: r, subfolder: n } = rw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Hs({
    filename: r,
    subfolder: n,
    type: o
  }));
  return iw([...i, t]);
}
function aw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Hs({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Xr(e) {
  const t = Rt == null ? void 0 : Rt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (js(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (js(a, i)) return t[a];
  }
  return null;
}
function yi(e, t, r = null) {
  const n = r || Xr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function Tn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Tn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Hs({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = Tn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Hs(e);
}
function la(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function tc(e) {
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
function ud(e, t) {
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
function sw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function lw(e, t) {
  try {
    e.__panoOwnOutputRev = xS(e.__panoOwnOutputRev);
    const r = sw(t);
    let n = "";
    for (const i of r)
      if (n = Tn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), ud(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function qi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function cw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!en(e, "background"))
    return qi(e), null;
  const i = Xr(n), o = Zu(i, t, Tn);
  if (!o)
    return qi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = ud(o, a), l = `${t.join("|")}:${s}`, c = e.__panoOwnOutputVideoCache;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  qi(e);
  const u = a_({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function uw(e, t = []) {
  var c, u;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = dg(e, t).map((d) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(d))).filter((d) => d >= 0), o = r.map((d, f) => ({ input: d, idx: f })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const d of a) {
    const f = r[d], m = e.graph ? e.getInputLink(d) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const _ = m.origin_id, g = ug(e, d, _);
    if (!g) continue;
    const p = Number(m.origin_slot ?? 0), F = Xr((g == null ? void 0 : g.id) ?? _), K = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (K.length) {
      const q = [];
      p >= 0 && p < K.length && q.push(K[p]), q.push(...K);
      for (const R of q.filter((ne) => !ls(ne))) {
        const ne = Tn(R);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ne}&pano_src=${jc(F)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (Rt == null ? void 0 : Rt.getNodeImageUrls) == "function" ? Rt.getNodeImageUrls(g) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const q = [];
      p >= 0 && p < z.length && q.push(z[p]), q.push(...z);
      for (const R of q) {
        const ne = Tn(R);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const G = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (G.length) {
      const q = [];
      p >= 0 && p < G.length && q.push(G[p]), q.push(...G);
      for (const R of q) {
        const ne = Tn(R);
        if (ne)
          return String((f == null ? void 0 : f.name) || ""), { src: ne, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const x = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((q) => String((q == null ? void 0 : q.name) || "").toLowerCase() === "image");
    if (x) {
      let q = Tn(x.value);
      if (q && !q.includes("/") && !q.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (q = fn.apiURL(`/view?filename=${encodeURIComponent(q)}&type=input&subfolder=`)), q)
        return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = en(e, "background") ? Xr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const d of l) {
      const f = Tn(d);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function dw(e, t = [], r = {}) {
  const n = uw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = ow(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const c = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = c, e.__panoLinkedInputImageCache.set(s, u);
  let d = -1;
  const f = () => {
    var _, g, p, F;
    if (d += 1, d >= o.length) {
      if (((g = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : g.call(_, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (F = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || F.call(p, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const m = o[d];
    u.pendingResolvedSrc = m, c.src = m;
  };
  return c.onload = () => {
    var m, _, g;
    ((_ = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : _.call(m, s)) === u && u.pendingImg === c && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || c.src || ""), u.img = c, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || c.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
  }, c.onerror = (m) => {
    var _, g, p, F;
    if (d + 1 < o.length) {
      f();
      return;
    }
    if (((g = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : g.call(_, s)) === u && u.pendingImg === c && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (F = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.delete) == null || F.call(p, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((m == null ? void 0 : m.type) || "error");
  }, f(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : c;
}
function fg(e, t = [], r = null, n = {}) {
  const i = dw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function pg(e) {
  var t, r;
  if (e) {
    ld.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, qi(e), e.__panoWrappedErpCache = null;
  }
}
function fw(e) {
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
function Wa(e, t, r = "") {
  const n = hg(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < WS ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Tf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function pw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), s + Math.round(14 * r)), u = n + (o - l) * 0.5, d = i + (a - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, d, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, d + c * 0.5 + 0.5), e.restore();
}
function nc(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function hw(e) {
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
function mw(e, t) {
  return og(e, t);
}
function ca(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = aw(r);
  if (!o && (n != null && n.external)) {
    if (!en(e, "external-sticker")) return null;
    const m = Xr(e == null ? void 0 : e.id), _ = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(_) ? _ : [_])
      if (o = Tn(g), o) break;
  }
  if (!o) return null;
  const a = yi(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, c = n != null && n.external ? ud(o, l) : o, u = kS(o, s, l);
  return ld.get(e, u, c, (m, _) => {
    var g, p;
    _ && (n != null && n.external && e.__panoOutputFromRun && Dr(e, "image-loaded"), (p = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || p.call(g));
  }) || null;
}
function gw(e, t) {
  var d, f, m, _;
  const r = Sw(e, t), n = ww(t), i = Array.isArray((d = t == null ? void 0 : t.painting) == null ? void 0 : d.groups) ? t.painting.groups : [], o = new Map(
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
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = wS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var g, p;
    return (p = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : p.call(g);
  });
  const l = vS(t == null ? void 0 : t.output_preset), c = s.filter((g) => (g == null ? void 0 : g.visible) !== !1 && String((g == null ? void 0 : g.layerKind) || "paint") === "paint").map((g) => String((g == null ? void 0 : g.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(c);
  const u = s.map((g) => {
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
  return [...a, ...u];
}
function yw(e, t, r, n) {
  var o, a, s, l, c, u;
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
      const d = n.convertEventToCanvasOffset(t);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(d[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  const i = vw(e, t, n);
  return i || null;
}
function bw(e, t) {
  var d, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (d = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : d.call(i), a = (t == null ? void 0 : t.ds) || ((f = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], c = (r - Number(o.left || 0)) / s - Number(l[0] || 0), u = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(u) ? null : { x: c, y: u };
}
function vw(e, t, r) {
  var i, o;
  const n = bw(t, r || (Rt == null ? void 0 : Rt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function _w(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Sw(e, t) {
  var c, u, d, f, m, _, g, p, F, K, z, G;
  const r = (u = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.paint) == null ? void 0 : u.strokes, n = (f = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = _w(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Au(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((g = e.__panoPreviewPaintRevision) == null ? void 0 : g.paint) !== l.paint || ((p = e.__panoPreviewPaintRevision) == null ? void 0 : p.mask) !== l.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== l.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((G = t == null ? void 0 : t.painting) == null ? void 0 : G.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function ww(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function xw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function kw(e, t, r) {
  const n = id(t, r);
  n.visible && rd(e, n.boundaryEdges, { selected: !1 });
}
function Mw(e, t, r) {
  const n = id(t, r);
  n.visible && (e.save(), rd(e, n.boundaryEdges, { selected: !0 }), tg(e, n, { accent: pS(t) }), e.restore());
}
function Qc(e, t, r) {
  return pm(Ds(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Gs(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? no;
}
function Pw(e) {
  return [en(e, "background") ? Zu(Xr(e.id), ["pano_input_videos"], Tn) : "", ag(e, tr)];
}
function Nw(e) {
  var o;
  if (!en(e, "external-sticker")) return null;
  const t = Xr(e.id), r = yi(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(Tn), meta: r };
  const i = Zu(t, ["pano_sticker_input_videos"], Tn);
  return i ? { src: i, meta: r } : null;
}
function Cw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function mg(e, t) {
  var r;
  return ((r = e.__panoSurfaceScene) == null ? void 0 : r.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: hr({ ...t, painting: null }) }), e.__panoSurfaceScene.sceneState;
}
function Aw(e, t) {
  const r = yl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (en(e, "background")) {
    const o = yi(e, "pano_bg_width");
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
function Iw(e, t) {
  var i, o;
  const r = String(((i = Fr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => en(e, a));
  return {
    stateText: String(((o = Fr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: ln(e).coverage,
    bgWidth: r === "auto" ? Aw(e, t) : null,
    run: n && yi(e, "pano_output_size") || null
  };
}
function Df(e, t, r) {
  const n = mg(e, t), i = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = ca(e, a.id, Uh(a.source), { external: a.source.kind === "port" });
      const c = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && c) {
        const u = c.playback.stickerPicture(c.stickerStill, s), d = Am(c.playback.stickerMedia, s);
        return u ? { media: u, revision: tc(u), source: d } : null;
      }
    } else {
      const c = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (c ? String(a.id || "") : "");
      s = ca(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: c });
    }
    return la(s) ? { media: s, revision: tc(s) } : null;
  }, o = (t.painting_visible === !1 ? [] : gw(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: la(r) ? { media: r, revision: tc(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: hm(n, Gs(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Ew(e, t, r) {
  var G, x, q, R, ne, B, Z;
  const n = String(e.__panoPreviewMode || "stickers");
  hg(e, n);
  const i = ln(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (q = (x = (G = e.__panoCutoutNodeSurface) == null ? void 0 : G.session) == null ? void 0 : x.refresh) == null || q.call(x)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (B = (ne = (R = e.__panoStickersNodeSurface) == null ? void 0 : R.session) == null ? void 0 : ne.refresh) == null || B.call(ne));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const c = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? Cw(e.__panoSurfacePlayback) : cw(e, ["pano_input_videos"], () => {
    var I, ae;
    return (ae = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : ae.call(I);
  })) || fg(
    e,
    tr,
    () => {
      var I, ae;
      return (ae = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : ae.call(I);
    },
    { preserveReadyWhilePending: !1 }
  ), d = la(u);
  let f = null;
  const m = (I, ae) => {
    f || (f = Df(e, i, u));
    const ie = r.render({ width: I.w, height: I.h, camera: ae, ...f });
    return ie && l.drawImage(ie.canvas, ie.x, ie.y, ie.width, ie.height, I.x, I.y, I.w, I.h), !!ie;
  };
  if (n === "cutout") {
    const I = hw(i), ae = xw(u), ie = I ? Ee(Jr(I).aspect, 0.1, 10) : d ? Ee(Number(ae.width / ae.height), 0.05, 20) : 1, he = nd(c, ie);
    e.__panoCutoutNodeFrame = he;
    let te = "none";
    const ge = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (I)
      if (u && !d)
        te = "loading";
      else if (d) {
        const de = P_({ width: a, height: s }, he, I);
        [
          !de.fallback || m(de.fallback.rect, Uo(de.fallback.shot)),
          m(de.rect, Uo(de.shot)),
          !de.fallback || m(he, Uo(I))
        ].every(Boolean) || (te = "loading");
      } else
        te = "empty";
    else {
      const de = e.__panoLastCutoutShot;
      de ? (e.__panoPreviewView = Bm(de, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), d ? m(c, Ds(e.__panoPreviewView, a, s)) || (te = "loading") : u ? te = "loading" : te = "empty";
    }
    d || r.release(), r.failed && te === "loading" && (te = "none"), I && (e.__panoLastCutoutShot = { ...I }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(he.x, he.y, he.w, he.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(he.x + 0.5, he.y + 0.5, Math.max(0, he.w - 1), Math.max(0, he.h - 1)), l.restore()), te === "loading" ? (nc(e, !1), Wa(e, !0, ge)) : te === "empty" ? (nc(e, !0), Wa(e, !1, "")) : (nc(e, !1), Wa(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let _ = !1;
  (!u || d) && (f = Df(e, i, u), !f.background && !f.layers.length ? (r.release(), _ = !0) : _ = m(c, Ds(e.__panoPreviewView, a, s)));
  const g = !_ && !r.failed;
  Wa(e, g, g ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), g && pw(l, c, Tf(t, c));
  const p = Qc(e, a, s);
  !u && _ && Ow(l, p, Tf(t, c));
  const F = String(((Z = i == null ? void 0 : i.active) == null ? void 0 : Z.selected_sticker_id) || ""), K = Hc(i, Gs(e)), z = _ && e.__panoStudio !== !0 ? K.find((I) => String((I == null ? void 0 : I.id) || "") === F && (I == null ? void 0 : I.visible) !== !1) : null;
  _ && K.filter((I) => I !== z && (I == null ? void 0 : I.visible) !== !1 && (I.external || I.source_kind === "external_image")).filter((I) => !la(ca(e, I.id, null, { external: !0 }))).forEach((I) => kw(l, I, p)), z && Mw(l, z, p);
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
function Ow(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Pn(c, s));
    Lf(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Pn(s, c));
    Lf(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Pn(0, 0) },
    { name: "Right", dir: Pn(90, 0) },
    { name: "Back", dir: Pn(180, 0) },
    { name: "Left", dir: Pn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function eu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Fw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function $n(e, t) {
  return Fw(e, t) ? !1 : (eu(e), !0);
}
function Vf() {
  var r;
  const e = (r = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Tw(e) {
  var r;
  if (!e) return;
  const t = (r = Rt == null ? void 0 : Rt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Dw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !sg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Lw(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Rf(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && Vw(e, 180, t);
    }
  };
}
function Vw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Lo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Rw = /* @__PURE__ */ new WeakMap();
function gg(e, t) {
  return Mm(Rw, e, t) ? !1 : (lw(e, t), pg(e), Lo(e), !0);
}
async function $w(e) {
  var r, n;
  const t = await r_(e, Rt, fn);
  t && (gg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function zw(e, t = {}) {
  var Re;
  const r = t.__allowStandalone === !0, n = lg(e);
  if (n && !r) {
    cd(e);
    return;
  }
  n && Dw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = i && e.__panoStudio === !0, a = i && !o, s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const l = {
    signature: Of(e)
  }, c = "dom", u = l.signature || Of(e);
  if (Number(e.__panoRebindGeneration || 0), Jc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Xc(e), e.__panoFrontendSig = u, e.__panoStickersPath = c, (Re = e.__panoDomPreview) != null && Re.widget || (e.__panoLegacyPreviewHooked && ps(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const d = t.noPreview === !0, f = d ? 0 : 56, m = d ? 0 : w_, _ = document.createElement("div");
  if (US(), _.className = "pano-node-preview-dom", _.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.tabIndex = 0, _.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    m > 0 ? `min-height:${m}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const X = zs(Yc(
      e.addDOMWidget(qc(), "preview", _, Rf(e, null))
    ));
    Lo(e), e.__panoDomPreview = { widget: X, root: _, requestDraw: () => {
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
  const F = document.createElement("div");
  F.style.cssText = [
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
  ].join(";"), F.textContent = "Connect ERP image", g.appendChild(p), g.appendChild(F), _.appendChild(g);
  const K = ph(_), z = document.createElement("div");
  z && (z.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", _.appendChild(z)), YS(e, 120, 120), Lo(e);
  let G = null;
  try {
    Lw(e, f, () => {
      var X, Ce;
      return (Ce = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Ce.call(X);
    }), G = zs(Yc(e.addDOMWidget(
      qc(),
      "preview",
      _,
      Rf(
        e,
        () => {
          var X, Ce;
          return (Ce = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Ce.call(X);
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
  }, q = fS(), R = () => {
    x.destroyed || (x.needsDraw = !0, !x.inTick && !x.raf && (x.raf = requestAnimationFrame(ce)));
  }, ne = gm(R), B = /* @__PURE__ */ io(i ? {
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
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((X) => ({ value: X, label: X }))
  });
  let Z = null;
  if (i && e.__panoSceneStateV2) {
    const [X, Ce] = [0, 1].map(() => {
      const Ge = sl(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", g.appendChild(Ge), Ge;
    }), Ve = mn({ label: "node.still" });
    Ve.__panoFrameIdx = 0;
    const Ae = mn({ label: "node.port-still" });
    Ae.__panoFrameIdx = 0;
    const $e = __({
      video: X,
      stickerVideo: Ce,
      createImage: (Ge, Ue) => {
        const ot = new Image();
        return ot.onload = Ue, ot.onerror = Ue, ot.src = Ge, ot;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => ln(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: R,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(X.videoWidth > 0 && X.videoHeight > 0)) return;
        const Ge = Math.min(1, KS / X.videoWidth);
        Ve.width = Math.round(X.videoWidth * Ge), Ve.height = Math.round(X.videoHeight * Ge), (Ue = Ve.getContext("2d")) == null || Ue.drawImage(X, 0, 0, Ve.width, Ve.height), Ve.__panoFrameIdx += 1, R();
      },
      onStickerCapture: () => {
        var Ge;
        Ce.videoWidth > 0 && Ce.videoHeight > 0 && (Ae.width = Ce.videoWidth, Ae.height = Ce.videoHeight, (Ge = Ae.getContext("2d")) == null || Ge.drawImage(Ce, 0, 0), Ae.__panoFrameIdx += 1, R());
      },
      onChange: () => {
        B.playing = $e.playing, R();
      }
    });
    Z = { playback: $e, video: X, still: Ve, stickerVideo: Ce, stickerStill: Ae, stickerSource: "" }, e.__panoSurfacePlayback = Z;
  }
  const I = () => {
    var ot;
    const { playback: X, still: Ce, stickerStill: Ve } = Z, Ae = Wc(g, !!((ot = e.flags) != null && ot.collapsed)), $e = X.source, Ge = Ae ? Nw(e) : null, Ue = X.follow({
      shown: Ae,
      sources: Ae ? Pw(e) : [],
      state: ln(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== Z.stickerSource && (Z.stickerSource = (Ge == null ? void 0 : Ge.src) || "", wc(Ve)), X.source !== $e && (wc(Ce), Ce.__panoFrameIdx = 0), B.playable = Ue, B.playing = X.playing;
  }, ae = () => {
    var Ce, Ve;
    const X = ((Ce = e.__panoOwnOutputVideoCache) == null ? void 0 : Ce.player) ?? null;
    X && !Wc(g, !!((Ve = e.flags) != null && Ve.collapsed)) && X.pause(), i && (B.playable = !!X && !X.failed(), B.playing = !!(X != null && X.playing));
  }, ie = () => {
    var X;
    Z == null || Z.playback.pause(), (X = e.__panoOwnOutputVideoCache) == null || X.player.pause();
  };
  let he = null;
  const te = (i ? b_ : C_)({
    readState: () => ln(e),
    publishLiveState: (X) => {
      X ? (he = X, e.__panoLiveStateOverride = X) : (e.__panoLiveStateOverride === he && (e.__panoLiveStateOverride = null), he = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, R();
    },
    commitState: (X) => {
      var Ae, $e, Ge, Ue;
      const Ce = Fr(e, "state_json");
      if (!Ce) return;
      qh(e, X.active);
      const Ve = Jh(e, X);
      Zh(e, Ve, String(Ce.value ?? "")) || (Ce.value = Ve, (Ae = Ce.callback) == null || Ae.call(Ce, Ve), e.__panoStateCache = null, ($e = e.setDirtyCanvas) == null || $e.call(e, !0, !0), (Ue = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Ue.call(Ge, !0, !0));
    },
    onChange: (X) => Object.assign(B, X)
  }), de = i ? ng(e, (X = "sync", Ce = null) => {
    var Ye;
    if (!i || !e.graph || !te || te.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const jt = en(e, "external-sticker"), yn = ln(e).stickers.find((vr) => vr.source.kind === "port");
      return te.apply({
        type: "sync-port",
        value: Rm(e, {
          pose: jt ? yi(e, "pano_sticker_input_pose", Ce) : null,
          image: yn ? ca(e, yn.id, null, { external: !0 }) : null
        })
      });
    }
    const Ve = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((jt) => String((jt == null ? void 0 : jt.name) || "") === "sticker_image") : -1, Ae = Ve >= 0 ? ((Ye = e.getInputLink(Ve)) == null ? void 0 : Ye.id) ?? null : null;
    if (Ae == null)
      return te.apply({ type: "sync-external", value: { connected: !1 } });
    if (!en(e, "external-sticker")) return !1;
    const $e = yi(e, "pano_sticker_input_pose", Ce), Ge = Array.isArray($e) ? $e[0] : $e, Ue = String(yi(e, "pano_sticker_input_state_hash", Ce) ?? ""), ot = e.__panoPreviewView || { yaw: 0, pitch: 0 }, ft = ln(e), zt = (Array.isArray(ft == null ? void 0 : ft.stickers) ? ft.stickers : []).find((jt) => String((jt == null ? void 0 : jt.id) || "") === "sticker_image_1"), Dt = ca(e, "sticker_image_1", null, { external: !0 }), on = Ge && typeof Ge == "object" ? Ge : zt || { yaw_deg: ot.yaw, pitch_deg: ot.pitch, hFOV_deg: 30, rot_deg: 0 };
    return te.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ae,
        stateHash: Ue,
        pose: on,
        imageWidth: Number((Dt == null ? void 0 : Dt.naturalWidth) || (Dt == null ? void 0 : Dt.width) || 0),
        imageHeight: Number((Dt == null ? void 0 : Dt.naturalHeight) || (Dt == null ? void 0 : Dt.height) || 0)
      }
    });
  }) : () => {
  };
  let P = 0;
  const H = async (X) => {
    if (!i || !te || !Jn(X)) return !1;
    ie();
    const Ce = `asset_${Math.random().toString(16).slice(2, 10)}`, Ve = `st_${Math.random().toString(16).slice(2, 10)}`, Ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    P += 1, B.importing = !0;
    const $e = To(e, `add:${Ce}`, async () => {
      const Ge = await Do(X), Ue = await li(X, {
        fetchApi: (ot, ft) => fn.fetchApi(ot, ft)
      });
      return O(), te.apply({
        type: "add-sticker",
        value: {
          stickerId: Ve,
          assetId: Ce,
          asset: Ue,
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
      P = Math.max(0, P - 1), B.importing = P > 0, R();
    }
  };
  let oe = null, j = null, fe = null, Pe = !1;
  const re = () => {
    var X;
    return fe && (clearTimeout(fe), fe = null), Pe ? (Pe = !1, ((X = te == null ? void 0 : te.commitGesture) == null ? void 0 : X.call(te)) ?? !1) : !1;
  }, O = () => {
    var Ae, $e, Ge;
    const X = re(), Ce = (oe == null ? void 0 : oe.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (oe = null, j = null, Ce != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Ce) && (($e = p.releasePointerCapture) == null || $e.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((Ge = te == null ? void 0 : te.commitGesture) == null ? void 0 : Ge.call(te)) ?? !1;
    return X || Ve;
  }, Q = () => {
    var Ae, $e, Ge;
    const X = re(), Ce = oe == null ? void 0 : oe.pointerId;
    if (oe = null, Ce != null) {
      try {
        (Ae = p.hasPointerCapture) != null && Ae.call(p, Ce) && (($e = p.releasePointerCapture) == null || $e.call(p, Ce));
      } catch {
      }
      p.style.cursor = "grab";
    }
    const Ve = ((Ge = te == null ? void 0 : te.cancelGesture) == null ? void 0 : Ge.call(te)) ?? !1;
    return X || Ve;
  }, ue = () => O();
  te && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ue));
  let me = null, _e = !1;
  if (z && te)
    try {
      od(), me = Mu(o ? aS : i ? eS : B_, {
        model: B,
        onAction: (X) => {
          var Ae, $e, Ge;
          if ((X == null ? void 0 : X.type) === "toggle-playback") {
            O(), Z ? Z.playback.toggle() : (Ae = e.__panoOwnOutputVideoCache) == null || Ae.player.toggle(), R();
            return;
          }
          if (ie(), (X == null ? void 0 : X.type) === "open-editor") {
            O(), i || (B.aspectOpen = !1), ($e = e.__panoOpenEditor) == null || $e.call(e);
            return;
          }
          if (i) {
            if ((X == null ? void 0 : X.type) === "add-image-file") {
              H(X.file);
              return;
            }
            te.apply(X) && R();
            return;
          }
          if ((X == null ? void 0 : X.type) === "toggle-aspect") {
            B.aspectOpen = !B.aspectOpen;
            return;
          }
          if ((X == null ? void 0 : X.type) === "close-aspect") {
            B.aspectOpen = !1;
            return;
          }
          let Ce = X;
          if ((X == null ? void 0 : X.type) === "add-frame") {
            const Ue = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Ce = {
              ...X,
              ...k_(Ue, {
                width: p.width,
                height: p.height
              })
            };
          } else if ((X == null ? void 0 : X.type) === "delete-frame") {
            const Ue = gi(ln(e));
            Ue && (e.__panoPreviewView = Bm(Ue, {
              width: p.width,
              height: p.height
            }));
          }
          const Ve = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          B.aspectOpen = !1, te.apply({ ...Ce, safeRect: Ve }) && R();
        }
      }), me.mount(z), _e = !0;
    } catch {
      me = null, _e = !1;
    }
  const E = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Z && I(), R();
  }) : null;
  E == null || E.observe(g);
  const ce = (X) => {
    var Ve, Ae;
    x.raf = 0, x.inTick = !0;
    let Ce = !1;
    try {
      if (Ce = y.stepInertia(X), (x.needsDraw || Ce) && (x.needsDraw = !1, Z ? I() : ae(), (Ve = e.flags) != null && Ve.collapsed || Ew(e, p, ne), B.viewUnavailable = ne.failed, o)) {
        const $e = q(Iw(e, Z), () => mg(e, ln(e)));
        $e && (B.status = $e);
      }
    } finally {
      x.inTick = !1;
    }
    (Ce || x.needsDraw) && !x.raf && (x.raf = requestAnimationFrame(ce)), BS() && (!e.__panoDebugLastTs || X - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = X, e.__panoPreviewMode, Xc(e), Ao(_), Ao(g), Ao(p), Ao(_.parentElement), Ao((Ae = _.parentElement) == null ? void 0 : Ae.parentElement), Number(p.width || 0), Number(p.height || 0), void 0);
  }, y = Eu({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (X) => {
      e.__panoPreviewView = X;
    },
    getViewportSize: () => {
      const X = p.getBoundingClientRect();
      return {
        w: Math.max(1, Number(X.width || p.clientWidth || 0)),
        h: Math.max(1, Number(X.height || p.clientHeight || 0))
      };
    },
    getInvert: () => {
      const X = Ef();
      return {
        x: X.invert_view_x ? -1 : 1,
        y: X.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      R();
    }
  }), v = i ? g : _, V = (X) => {
    const Ce = p.getBoundingClientRect();
    return {
      x: (Number(X.clientX) - Ce.left) * (p.width / Math.max(1, Ce.width)),
      y: (Number(X.clientY) - Ce.top) * (p.height / Math.max(1, Ce.height))
    };
  }, U = (X) => {
    var Ae, $e;
    if (!i || o || !s) return;
    const Ce = ln(e), Ve = Pf(
      Hc(Ce, Gs(e)),
      String(((Ae = Ce == null ? void 0 : Ce.active) == null ? void 0 : Ae.selected_sticker_id) || ""),
      V(X),
      Qc(e, p.width, p.height)
    );
    if (!Ve) {
      p.style.cursor = "grab";
      return;
    }
    if ((($e = Ve.item) == null ? void 0 : $e.locked) === !0) {
      p.style.cursor = "default";
      return;
    }
    p.style.cursor = Ve.hit.cursor || "default";
  };
  p.addEventListener("pointerdown", (X) => {
    var ot, ft, zt, Dt, on, En, Ye, jt, yn, vr, zr;
    if (!$n(X, v) || X.button !== 0) return;
    if (!i) {
      const nn = gi(ln(e)), Sn = e.__panoCutoutNodeFrame;
      if (!nn) {
        (ot = _.focus) == null || ot.call(_, { preventScroll: !0 }), (ft = p.setPointerCapture) == null || ft.call(p, X.pointerId), p.style.cursor = "grabbing", y.startDrag(X.clientX, X.clientY, X.pointerId);
        return;
      }
      if (nn.locked === !0 || !Sn || !te) return;
      const jr = V(X);
      let _r;
      if (X.shiftKey) {
        const Un = Ym({
          frame: Sn,
          point: jr,
          startRollDeg: Number(nn.roll_deg ?? nn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Un) return;
        _r = { kind: "roll", pointerId: X.pointerId, rollGesture: Un };
      } else {
        const Un = ((zt = ln(e)) == null ? void 0 : zt.ui_settings) || Ef();
        _r = {
          kind: "pan",
          pointerId: X.pointerId,
          startPoint: jr,
          startShot: { ...nn },
          focalPx: vi(Sn, nn),
          invertX: Un.invert_view_x === !0,
          invertY: Un.invert_view_y === !0
        };
      }
      O(), (Dt = _.focus) == null || Dt.call(_, { preventScroll: !0 }), (on = p.setPointerCapture) == null || on.call(p, X.pointerId), p.style.cursor = "grabbing", te.beginGesture(), oe = _r;
      return;
    }
    if (!s) return;
    const Ce = V(X), Ve = ln(e), Ae = String(((En = Ve == null ? void 0 : Ve.active) == null ? void 0 : En.selected_sticker_id) || ""), $e = Qc(e, p.width, p.height);
    (Ye = _.focus) == null || Ye.call(_, { preventScroll: !0 });
    const Ge = () => Pf(Hc(Ve, Gs(e)), Ae, Ce, $e);
    let Ue = o ? null : Ge();
    if (Ue && (Z != null && Z.playback.playing) && (ie(), Ue = Ge()), Ue && te) {
      if (y.stopMotion(), O(), String(((jt = Ue.item) == null ? void 0 : jt.id) || "") !== Ae && te.apply({ type: "select-sticker", id: Ue.item.id }), ((yn = Ue.item) == null ? void 0 : yn.locked) === !0) {
        R();
        return;
      }
      const nn = Ce, Sn = Ue.geometry.center;
      j = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: X.pointerId,
        startPoint: nn,
        startCenter: { ...Sn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(nn.x - Sn.x, nn.y - Sn.y)),
        startAngle: Math.atan2(nn.y - Sn.y, nn.x - Sn.x),
        projection: $e
      }, te.beginGesture(), (vr = p.setPointerCapture) == null || vr.call(p, X.pointerId), p.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, R();
      return;
    }
    (zr = p.setPointerCapture) == null || zr.call(p, X.pointerId), p.style.cursor = "grabbing", y.startDrag(X.clientX, X.clientY, X.pointerId);
  }), p.addEventListener("pointermove", (X) => {
    if (!i) {
      if (!oe) {
        if (!y.state.drag.active) return;
        $n(X, v), y.moveDrag(X.clientX, X.clientY, "pano");
        return;
      }
      if (oe.pointerId !== X.pointerId || !te) return;
      if ($n(X, v), oe.kind === "pan") {
        const Ve = V(X);
        te.updateGesture({
          type: "pan-camera",
          startShot: oe.startShot,
          dx: Ve.x - oe.startPoint.x,
          dy: Ve.y - oe.startPoint.y,
          focalPx: oe.focalPx,
          invertX: oe.invertX,
          invertY: oe.invertY
        });
        return;
      }
      const Ce = qm(oe.rollGesture, V(X), X);
      if (!Ce) return;
      oe.rollGesture = Ce.gesture, te.updateGesture({ type: "set-roll", value: Ce.rollDeg });
      return;
    }
    if (!j && !y.state.drag.active) {
      U(X);
      return;
    }
    if (j) {
      if (j.pointerId !== X.pointerId || !te) return;
      $n(X, v);
      const Ce = V(X);
      let Ve = j.startSticker;
      if (j.kind === "move")
        Ve = gS(
          j.startSticker,
          {
            x: j.startCenter.x + Ce.x - j.startPoint.x,
            y: j.startCenter.y + Ce.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Ae = Math.hypot(Ce.x - j.startCenter.x, Ce.y - j.startCenter.y);
        Ve = yS(j.startSticker, j.startDistance, Ae);
      } else if (j.kind === "rotate") {
        const Ae = Math.atan2(Ce.y - j.startCenter.y, Ce.x - j.startCenter.x);
        Ve = bS(j.startSticker, j.startAngle, Ae, X.shiftKey === !0);
      }
      te.updateGesture({ type: "set-transform", value: Ve }), R();
      return;
    }
    !s || !y.state.drag.active || ($n(X, v), y.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const S = () => {
    var Ce, Ve;
    if (!oe && !j) {
      if (!y.state.drag.active) return;
      y.endDrag(), p.style.cursor = "grab", R();
      return;
    }
    if (!te) return;
    const X = (oe == null ? void 0 : oe.pointerId) ?? (j == null ? void 0 : j.pointerId);
    oe = null, j = null;
    try {
      (Ce = p.hasPointerCapture) != null && Ce.call(p, X) && ((Ve = p.releasePointerCapture) == null || Ve.call(p, X));
    } catch {
    }
    te.cancelGesture(), p.style.cursor = "grab", R();
  }, w = (X, Ce = !1) => {
    var Ve, Ae, $e, Ge;
    if (!i) {
      if (!oe) {
        if (!y.state.drag.active) return;
        $n(X, v), (Ve = p.releasePointerCapture) == null || Ve.call(p, X.pointerId), p.style.cursor = "grab", y.endDrag(), R();
        return;
      }
      if (oe.pointerId !== X.pointerId || !te) return;
      $n(X, v), oe = null, (Ae = p.releasePointerCapture) == null || Ae.call(p, X.pointerId), p.style.cursor = "grab", Ce ? te.cancelGesture() : te.commitGesture(), U(X), R();
      return;
    }
    if (j) {
      if (j.pointerId !== X.pointerId || !te) return;
      $n(X, v), j = null, ($e = p.releasePointerCapture) == null || $e.call(p, X.pointerId), p.style.cursor = "grab", Ce ? te.cancelGesture() : te.commitGesture(), R();
      return;
    }
    !s || !y.state.drag.active || ($n(X, v), (Ge = p.releasePointerCapture) == null || Ge.call(p, X.pointerId), p.style.cursor = "grab", y.endDrag(), R());
  };
  p.addEventListener("pointerup", w), p.addEventListener("pointercancel", (X) => w(X, !0)), p.addEventListener("lostpointercapture", S), p.addEventListener("pointerleave", (X) => {
    !i && oe || j || y.state.drag.active && w(X);
  });
  const D = (X) => {
    const Ce = document.activeElement;
    if (Ce !== _ && !_.contains(Ce)) return;
    if (X.key === "Escape" && (oe || j) && te) {
      S(), eu(X);
      return;
    }
    if (!i || o || X.key !== "Delete" && X.key !== "Backspace" || !te) return;
    const Ve = X.target, Ae = String((Ve == null ? void 0 : Ve.tagName) || "").toUpperCase();
    Ae === "INPUT" || Ae === "TEXTAREA" || Ve != null && Ve.isContentEditable || B.canDelete === !0 && (ie(), O(), te.apply({ type: "delete-selected" }) && R(), eu(X));
  };
  window.addEventListener("keydown", D, !0);
  const k = HS({
    requestFrame: (X) => requestAnimationFrame(X),
    cancelFrame: (X) => cancelAnimationFrame(X),
    restore: (X) => Tw(X)
  }), N = (X) => {
    var Ve, Ae, $e, Ge, Ue, ot;
    if (!$n(X, v)) return;
    if (!i) {
      const ft = gi(ln(e));
      if (ft && ft.locked !== !0 && te) {
        const zt = ks(X);
        zt !== 0 && (Pe || (O(), te.beginGesture(), Pe = !0), te.updateGesture({
          type: "step-fov",
          direction: zt
        }) ? (fe && clearTimeout(fe), fe = setTimeout(re, 180), R()) : te.hasGestureChanges() || (te.cancelGesture(), Pe = !1));
      } else if (!ft) {
        const zt = Vf();
        y.applyWheelEvent(X) && R(), k.schedule(zt);
      }
      (Ve = X.preventDefault) == null || Ve.call(X), (Ae = X.stopPropagation) == null || Ae.call(X), ($e = X.stopImmediatePropagation) == null || $e.call(X);
      return;
    }
    if (!s) return;
    const Ce = Vf();
    y.applyWheelEvent(X) && R(), (Ge = X.preventDefault) == null || Ge.call(X), (Ue = X.stopPropagation) == null || Ue.call(X), (ot = X.stopImmediatePropagation) == null || ot.call(X), k.schedule(Ce);
  }, A = i ? [g, p] : [g];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    A.forEach((Ce) => Ce.addEventListener(X, N, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    p.addEventListener(X, (Ce) => $n(Ce, v)), g.addEventListener(X, (Ce) => $n(Ce, v));
  });
  const W = Fr(e, "state_json");
  let J = null, se = null;
  W && !W.__panoPreviewPatchedCb && (J = W.callback, se = (X) => {
    const Ce = J ? J(X) : void 0;
    return R(), Ce;
  }, W.callback = se, W.__panoPreviewPatchedCb = se);
  const L = Fr(e, "bg_color");
  let le = null, ve = null;
  L && !L.__panoPreviewPatchedCb && (le = L.callback, ve = (X) => {
    const Ce = le ? le(X) : void 0;
    return R(), Ce;
  }, L.callback = ve, L.__panoPreviewPatchedCb = ve);
  const we = o ? Fr(e, "output_size") : null, pe = we == null ? void 0 : we.callback, be = we ? (X) => {
    const Ce = pe ? pe(X) : void 0;
    return R(), Ce;
  } : null;
  we && (we.callback = be);
  const ye = e.onRemoved, h = e.onResize, $ = e.onExecuted, C = e.onDragOver, b = e.onDragDrop;
  let T = null;
  const M = () => {
    i && (B.dropActive = !0, T && clearTimeout(T), T = setTimeout(() => {
      T = null, B.dropActive = !1;
    }, 140));
  }, Y = a ? function(X) {
    return (C ? C.apply(this, arguments) : !1) === !0 ? !0 : sd(X == null ? void 0 : X.dataTransfer) ? (M(), !0) : !1;
  } : null, ee = a ? function(X) {
    var Ae;
    if ((b ? b.apply(this, arguments) : !1) === !0) return !0;
    const Ve = Array.from(((Ae = X == null ? void 0 : X.dataTransfer) == null ? void 0 : Ae.files) || []).find(($e) => Jn($e));
    return Ve ? (T && clearTimeout(T), T = null, B.dropActive = !1, H(Ve), !0) : !1;
  } : null;
  a && (e.onDragOver = Y, e.onDragDrop = ee);
  const Se = a ? jS(_, {
    onActive: (X) => {
      if (X) {
        M();
        return;
      }
      T && clearTimeout(T), T = null, B.dropActive = !1;
    },
    onDrop: (X) => {
      H(X);
    }
  }) : () => {
  }, xe = function(X) {
    e.__panoOutputFromRun = !0;
    const Ce = gg(e, X);
    Dr(e, Ce ? "executed" : "sync", X), R();
    const Ve = $ ? $.apply(this, arguments) : void 0;
    return Lo(e), Ve;
  };
  e.onExecuted = xe;
  const Ne = e.onConnectionsChange, Te = function(X, Ce) {
    const Ve = hf(e, X, Ce, Ju), Ae = hf(e, X, Ce, tr), $e = arguments, Ge = Ne ? Ne.apply(this, $e) : void 0, Ue = () => {
      x.destroyed || (Ae && fw(e), Ve && Dr(e, "connection-change"), Lo(e), R());
    };
    return Ue(), queueMicrotask(Ue), Ge;
  };
  e.onConnectionsChange = Te;
  const ze = function() {
    const X = h ? h.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, R(), X;
  };
  e.onResize = ze;
  const je = function() {
    return We(), Zc.unregister(this), ye ? ye.apply(this, arguments) : void 0;
  };
  e.onRemoved = je;
  const We = () => {
    var X, Ce, Ve, Ae, $e, Ge, Ue, ot, ft;
    x.destroyed = !0, (X = E == null ? void 0 : E.disconnect) == null || X.call(E), i ? O() : Q(), p.removeEventListener("lostpointercapture", S), Se(), K(), window.removeEventListener("keydown", D, !0), (Ve = (Ce = e.__panoStateFlushers) == null ? void 0 : Ce.delete) == null || Ve.call(Ce, ue), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ae = te == null ? void 0 : te.destroy) == null || Ae.call(te), ($e = me == null ? void 0 : me.unmount) == null || $e.call(me), Z && (Z.playback.dispose(), Z.video.remove(), Z.stickerVideo.remove(), e.__panoSurfacePlayback === Z && (e.__panoSurfacePlayback = null)), ne.dispose(), e.__panoSurfaceScene = null, (Ue = (Ge = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ge.dispose) == null || Ue.call(Ge), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, de(), k.dispose(), T && clearTimeout(T), T = null, ld.disposeOwner(e), qi(e), x.raf && cancelAnimationFrame(x.raf), x.raf = 0, ((ot = e.__panoCutoutNodeSurface) == null ? void 0 : ot.session) === te && (e.__panoCutoutNodeSurface = null), ((ft = e.__panoStickersNodeSurface) == null ? void 0 : ft.session) === te && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ze && (e.onResize = h), e.onExecuted === xe && (e.onExecuted = $), e.onConnectionsChange === Te && (e.onConnectionsChange = Ne), se && (W == null ? void 0 : W.callback) === se && (W.callback = J), se && (W == null ? void 0 : W.__panoPreviewPatchedCb) === se && delete W.__panoPreviewPatchedCb, ve && (L == null ? void 0 : L.callback) === ve && (L.callback = le), ve && (L == null ? void 0 : L.__panoPreviewPatchedCb) === ve && delete L.__panoPreviewPatchedCb, be && we.callback === be && (we.callback = pe), e.onDragOver === Y && (e.onDragOver = C), e.onDragDrop === ee && (e.onDragDrop = b), e.onRemoved === je && (e.onRemoved = ye);
  };
  e.__panoDomRestore = We, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = te && _e && !i ? { session: te, model: B } : null, e.__panoStickersNodeSurface = te && _e && i ? { session: te, model: B } : null, e.__panoDomPreview = {
    widget: G,
    root: _,
    canvas: p,
    requestDraw: R,
    state: x,
    emptyHintEl: F,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Zc.register(e), e.graph && Dr(e, "attach"), R();
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
    cd(e);
    return;
  }
  cg(e).attach(t);
}
function jw(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Hw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, c = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(r), d = u > 0 ? u : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, d / f) : 1;
  return n && l > 0 && c > 0 && (m = Math.min(m, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function Gw({
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
  }, u = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", u), c(), { toggle: async () => {
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
      if (a = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", u), l())
        try {
          const F = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (p = F == null ? void 0 : F.catch) == null || p.call(F, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const Ww = { class: "pano-preview-node-surface" }, Kw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Le("div", Ww, [
      Be(Xt, {
        icon: e.model.fullscreen ? nt(He).fullscreen_close : nt(He).fullscreen,
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
      e.model.viewUnavailable ? (Fe(), Vn(bl, { key: 0 })) : ht("", !0)
    ]));
  }
}, Ka = 140, Bw = 180, jf = 40, rc = 10;
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
function yg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Uw(e) {
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
function tu(e) {
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
function Yw(e) {
  var n, i;
  const t = tu(e == null ? void 0 : e.id), r = [
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
function qw(e, t = "erp_image") {
  var m, _, g, p, F, K, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((G) => String((G == null ? void 0 : G.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((G, x) => String((G == null ? void 0 : G.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(x))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (g = (_ = (m = Zn) == null ? void 0 : m.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : g.call(_, o), s = tu(o), l = tu(e == null ? void 0 : e.id), c = [
    (p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (F = s == null ? void 0 : s.ui) == null ? void 0 : F.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const G of c)
    if (Array.isArray(G))
      for (const x of G) {
        const q = Xi(x);
        if (q) return q;
      }
  let u = [];
  try {
    u = typeof ((K = Zn) == null ? void 0 : K.getNodeImageUrls) == "function" ? Zn.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const G of u) {
      const x = Xi(G);
      if (x) return x;
    }
  if (a) {
    const G = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const x of G) {
      const q = Xi(x);
      if (q) return q;
    }
  }
  const d = (z = a == null ? void 0 : a.widgets) == null ? void 0 : z.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image"), f = String((d == null ? void 0 : d.value) || "").trim();
  return f ? fn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function ic(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Kf(e, t, r, n, i, o, a) {
  var c, u, d;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !yg(o) || r <= 1 || n <= 1) {
    ic(t, r, n);
    return;
  }
  if (a.failed) {
    ic(t, r, n);
    return;
  }
  const s = Number(((d = (u = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : u.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Ds(i, r, n),
    background: { media: o, revision: Uw(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : ic(t, r, n);
}
function Bf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Xw {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = gm(() => this.requestDraw()), this.controller = Eu({
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
        `min-height:${Ka}px`,
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
          return Ka;
        },
        getHeight() {
          return Ka;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = zs(Yc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ka, Number(o.minHeight || 0)),
            minWidth: Math.max(Bw, Number(o.minWidth || 0))
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
      return od(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ io({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Gw({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = Mu(Kw, {
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
      jw(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !yg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Wc(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Zn.canvas) != null && n.graph) || this.node.graph === Zn.canvas.graph);
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
      return Bf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, u, d, f, m;
      const o = yw(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Bf(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (d = r == null ? void 0 : r.preventDefault) == null || d.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (m = r == null ? void 0 : r.stopImmediatePropagation) == null || m.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - rc * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - jf - rc);
    return { x: rc, y: jf, w: t, h: r };
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
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Hw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = Yw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = sl(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, c = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", c), s.addEventListener("play", c), s.addEventListener("pause", c), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", c), s.removeEventListener("play", c), s.removeEventListener("pause", c), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = qw(this.node, this.imageInputName);
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
    var r, n, i, o, a, s, l, c, u, d, f, m, _, g, p, F;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (d = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || d.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (m = this.root) == null ? void 0 : m.remove) == null || _.call(m);
    } catch {
    }
    try {
      og(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (p = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : p.find) == null ? void 0 : F.call(p, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Jw(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new Xw(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function bg(e, t, r) {
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
function dd(e) {
  return !!(e != null && e.prototype);
}
function ua(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Zw(e, t = {}) {
  dd(e) || Jw(e, {
    ...t,
    onOpen: ua(e, t.onOpen)
  });
}
function Qw(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!dd(e)) {
    zf(e, {
      ...n,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  bg(e, "stickers_node_preview", (i) => {
    zf(i, {
      ...n,
      onOpen: ua(i, t.onOpen)
    });
  });
}
function ex(e, t = {}) {
  if (!dd(e)) {
    $f(e, {
      ...t,
      onOpen: ua(e, t.onOpen)
    });
    return;
  }
  bg(e, "cutout_preview", (r) => {
    $f(r, {
      ...t,
      onOpen: ua(r, t.onOpen)
    });
  });
}
const Mn = {
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
}, Cr = "pen";
function Uf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function tx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const dt = Object.freeze({
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
}), nx = new Set(Object.values(dt));
function rx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = 1, d = 0;
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
      const F = l;
      l = /* @__PURE__ */ new Set(), (F.size || n()) && f(() => r(g, F));
    } finally {
      a = !1;
    }
    (l.size || c.size || n()) && m();
  }
  return {
    requestDraw(g) {
      if (!nx.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === dt.STATE && (d += 1), l.add(g), m();
    },
    requestFrame(g) {
      const p = u++;
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
      return d;
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
const ix = { class: "pano-floating-right" }, ox = {
  key: 0,
  class: "pano-floating-space"
}, ax = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, sx = ["data-settled"], lx = ["data-ready", "data-settled"], cx = ["aria-label", "data-tip"], ux = {
  key: 1,
  class: "pano-camera-preview-label"
}, dx = {
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
      Me("div", ix, [
        e.space ? Tr((Fe(), Le("div", ox, [
          Me("div", ax, [
            (Fe(!0), Le(Qe, null, Mt(e.space.modes, (n) => (Fe(), Vn(Xt, {
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
          [bi, e.space.visible]
        ]) : ht("", !0),
        (Fe(!0), Le(Qe, null, Mt(e.buttons, (n) => (Fe(), Vn(Xt, {
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
          ], 8, cx)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Fe(), Le("div", ux, rt(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, lx)
      ], 8, sx), [
        [bi, e.preview.visible]
      ])
    ], 64));
  }
}, fx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, px = ["y2", "transform"], hx = ["transform"], mx = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Tr((Fe(), Le("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Fe(), Le("svg", fx, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Fe(!0), Le(Qe, null, Mt(nt(r), (a) => (Fe(), Le("line", {
          key: a,
          class: mt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, px))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, hx),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [bi, e.model.visible === !0]
    ]);
  }
}, gx = {
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
      Be(mx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, yx = ["aria-label"], bx = { class: "pano-canvas-confirm-title" }, vx = { class: "pano-canvas-confirm-text" }, _x = { class: "pano-canvas-confirm-actions" }, Sx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, wx = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Kt(null), n = /* @__PURE__ */ Kt(null);
    let i = null;
    function o() {
      const d = n.value;
      return d ? Array.from(d.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(d) {
      const f = n.value;
      if (!f) return;
      const m = f.querySelector(`[data-action='${d}']`);
      m instanceof HTMLButtonElement && m.click();
    }
    function s() {
      var g;
      const d = n.value;
      if (!d) return;
      const f = d.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const _ = o()[0] || d;
      (g = _ == null ? void 0 : _.focus) == null || g.call(_);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(d) {
      var F;
      if (d.defaultPrevented) return;
      if (d.key === "Escape") {
        d.preventDefault(), d.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (d.key !== "Tab") return;
      const f = o(), m = n.value;
      if (!f.length) {
        d.preventDefault(), (F = m == null ? void 0 : m.focus) == null || F.call(m);
        return;
      }
      const _ = f[0], g = f[f.length - 1], p = document.activeElement;
      if (d.shiftKey) {
        (p === _ || p === m || !(m != null && m.contains(p))) && (d.preventDefault(), g.focus());
        return;
      }
      (p === g || !(m != null && m.contains(p))) && (d.preventDefault(), _.focus());
    }
    function u(d) {
      d.target === r.value && a("confirm-cancel");
    }
    return pi(() => t.model.visible, (d, f) => {
      if (d) {
        i = document.activeElement, tl(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ha(() => {
      l();
    }), (d, f) => e.model.visible === !0 ? (Fe(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Pt(u, ["self"])
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
        Me("div", bx, rt(e.model.title), 1),
        Me("div", vx, rt(e.model.text), 1),
        Me("div", _x, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", Sx, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, yx)
    ], 512)) : ht("", !0);
  }
}, xx = ["data-paint-pane"], kx = ["hidden"], Mx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Px = ["aria-pressed", "disabled"], Nx = ["hidden"], Cx = { class: "pano-paint-color-pop-head" }, Ax = { class: "pano-paint-color-field" }, Ix = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Ex = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Ox = { class: "pano-paint-color-field" }, Fx = { class: "pano-paint-alpha-wrap" }, Tx = ["value"], Dx = { "data-paint-alpha-value": "" }, Lx = ["hidden"], Vx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Rx = ["data-paint-history-index", "aria-label", "disabled"], $x = ["data-paint-footer"], zx = ["data-paint-group"], jx = ["hidden"], Hx = ["value", "disabled"], Gx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Wx = ["hidden"], Kx = {
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
            }, null, 14, Mx))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ct({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Px),
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
              Me("div", Cx, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ct({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", Ax, [
                Me("div", Ix, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ct({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", Ex, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ct({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", Ox, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", Fx, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Tx),
                  Me("span", Dx, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", Vx, [
                  (Fe(!0), Le(Qe, null, Mt(e.state.historyEntries || [], (s) => (Fe(), Le("button", {
                    key: s.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Ct(r(s.color))
                  }, null, 14, Rx))), 128))
                ])
              ], 8, Lx)
            ], 12, Nx)
          ], 10, kx)) : ht("", !0),
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
                return Fe(), Vn(Xt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, zx),
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
              }, null, 12, Hx),
              Me("span", Gx, rt(e.state.sizeText || "10"), 1)
            ], 10, jx),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Be(Xt, {
                icon: nt(He).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Wx)
          ], 8, $x)
        ], 10, xx);
      }), 128))
    ], 2));
  }
}, Bx = {
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
}, Ux = ["aria-label"], Yx = ["data-tip", "aria-pressed"], qx = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Fe(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Ct({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Fe(!0), Le(Qe, null, Mt(e.buttons, (o) => (Fe(), Le("button", Nr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, Yx))), 128))
    ], 12, Ux));
  }
}, Xx = {
  key: 0,
  class: "pano-cutout-menu"
}, Jx = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Zx = ["data-aspect"], Qx = ["data-action", "aria-label", "data-tip", "disabled"], ek = {
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
        n.kind === "aspect" ? (Fe(), Le("div", Xx, [
          Me("button", Jx, [
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
            }, rt(i.label), 11, Zx))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Fe(), Vn(qx, {
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
        ], 8, Qx))
      ], 64))), 128))
    ], 4));
  }
}, tk = {
  key: 0,
  class: "pano-easing"
}, nk = { class: "pano-section-title" }, rk = { class: "pano-easing-range" }, ik = { class: "pano-easing-modes" }, ok = ["aria-pressed", "onClick"], ak = ["viewBox"], sk = ["x", "y"], lk = ["x1", "y1", "x2", "y2"], ck = ["d"], uk = ["x1", "y1", "x2", "y2"], dk = ["x1", "y1", "x2", "y2"], fk = ["cx", "cy"], pk = ["cx", "cy"], hk = { class: "pano-easing-note" }, kr = 132, oi = 14, mk = {
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
    ], o = /* @__PURE__ */ Kt(null), a = ut(() => {
      var _;
      return Array.isArray((_ = r.model) == null ? void 0 : _.easing) ? r.model.easing : null;
    }), s = (_) => oi + _ * kr, l = (_) => oi + (1 - _) * kr, c = ut(() => {
      var K;
      if (((K = r.model) == null ? void 0 : K.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [_, g, p, F] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(_)} ${l(g)} ${s(p)} ${l(F)} ${s(1)} ${l(1)}`;
    }), u = ut(() => a.value ? a.value.map((_) => _.toFixed(2)).join(", ") : "");
    function d(_) {
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
      let F = null;
      const K = (x) => {
        const q = o.value.getBoundingClientRect(), R = q.width / (kr + oi * 2), ne = ((x.clientX - q.left) / R - oi) / kr, B = 1 - ((x.clientY - q.top) / R - oi) / kr;
        F = [...F || a.value], F[g] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, F[g + 1] = Math.round(Math.min(1, Math.max(0, B)) * 100) / 100, f(F, !1);
      }, z = () => {
        p.removeEventListener("pointermove", K), p.removeEventListener("pointerup", z), p.removeEventListener("pointercancel", z), F && f(F, !0);
      };
      p.addEventListener("pointermove", K), p.addEventListener("pointerup", z), p.addEventListener("pointercancel", z);
    }
    return (_, g) => e.model ? (Fe(), Le("div", tk, [
      Me("div", nk, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", rk, rt(e.model.label), 1)
      ]),
      Me("div", ik, [
        (Fe(), Le(Qe, null, Mt(i, (p) => Me("button", {
          key: p.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": d(p) ? "true" : "false",
          onClick: (F) => f(p.easing, !0)
        }, rt(p.label), 9, ok)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Fe(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${kr + oi * 2} ${kr + oi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: kr,
          height: kr
        }, null, 8, sk),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, lk),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, ck),
        a.value ? (Fe(), Le(Qe, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, uk),
          Me("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, dk),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (p) => m(p, 0))
          }, null, 40, fk),
          Me("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (p) => m(p, 2))
          }, null, 40, pk)
        ], 64)) : ht("", !0)
      ], 8, ak)) : ht("", !0),
      Me("div", hk, [
        e.model.mixed ? (Fe(), Le(Qe, { key: 0 }, [
          Eo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Fe(), Le(Qe, { key: 1 }, [
          Eo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Fe(), Le(Qe, { key: 2 }, [
          Eo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Fe(), Le(Qe, { key: 3 }, [
          Eo("cubic-bezier(" + rt(u.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, gk = {
  class: "pano-side",
  "data-side": ""
}, yk = { class: "pano-side-head" }, bk = { class: "pano-side-title" }, vk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, _k = {
  key: 0,
  class: "pano-side-scroll"
}, Sk = { class: "pano-inspector" }, wk = { class: "pano-ui-row pano-coverage-row" }, xk = ["data-selected"], kk = ["aria-pressed", "disabled"], Mk = ["aria-pressed", "disabled"], Pk = {
  key: 0,
  class: "pano-section-title"
}, Nk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Ck = {
  class: "pano-picker",
  "data-picker": "selection"
}, Ak = ["disabled"], Ik = { class: "pano-picker-label" }, Ek = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Ok = ["hidden"], Fk = ["data-selection-id"], Tk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Dk = {
  key: 2,
  class: "pano-state-actions"
}, Lk = ["disabled"], Vk = ["data-key"], Rk = { class: "pano-field-group-values" }, $k = ["title", "onPointerdown"], zk = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], jk = ["data-key"], Hk = ["min", "max", "step", "value", "disabled", "data-param-key"], Gk = ["min", "max", "step", "value", "disabled", "data-param-key"], Wk = ["open"], Kk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Bk = { class: "pano-ui-settings-body" }, Uk = { class: "pano-ui-row" }, Yk = ["data-selected"], qk = ["aria-pressed"], Xk = ["aria-pressed"], Jk = { class: "pano-ui-row" }, Zk = ["data-selected"], Qk = ["aria-pressed"], eM = ["aria-pressed"], tM = {
  key: 1,
  class: "pano-side-footer"
}, nM = ["data-action"], rM = {
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
    function a(c, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const s = {};
    function l(c, u) {
      const d = s[u.key];
      if (c.button !== 0 || !d || a(u, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, m = c.clientX, _ = Number(d.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const p = (K) => {
        if (!g && Math.abs(K.clientX - m) < 3) return;
        g = !0;
        const z = _ + (K.clientX - m) * u.drag * (K.shiftKey ? 0.1 : 1);
        d.value = String(Number(z.toFixed(3))), d.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        f.removeEventListener("pointermove", p), f.removeEventListener("pointerup", F), f.removeEventListener("pointercancel", F), f.removeEventListener("lostpointercapture", F), g ? d.dispatchEvent(new Event("change", { bubbles: !0 })) : d.focus();
      };
      f.addEventListener("pointermove", p), f.addEventListener("pointerup", F), f.addEventListener("pointercancel", F), f.addEventListener("lostpointercapture", F);
    }
    return (c, u) => {
      var d, f, m, _, g;
      return Fe(), Le("div", gk, [
        Me("div", yk, [
          Me("div", bk, [
            Me("span", vk, [
              Be(Tt, {
                icon: nt(He).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, rt(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Fe(), Le("div", _k, [
          Me("div", Sk, [
            u[9] || (u[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", wk, [
              u[2] || (u[2] = Me("label", null, "Coverage", -1)),
              Me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "360", 8, kk),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, Mk)
              ], 8, xk)
            ]),
            e.model.transformTitle !== !1 ? (Fe(), Le("div", Pk, [...u[3] || (u[3] = [
              Me("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Fe(), Le("div", Nk, [
              Me("label", null, rt(e.model.selectionPicker.label), 1),
              Me("div", Ck, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", Ik, [
                    e.model.selectionPicker.currentIcon ? (Fe(), Le("span", Ek, [
                      Be(Tt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Me("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Ak),
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
                    p.icon ? (Fe(), Le("span", Tk, [
                      Be(Tt, {
                        icon: p.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Me("span", null, rt(p.label), 1)
                  ], 10, Fk))), 128))
                ], 8, Ok)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Fe(), Le("div", Dk, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(Tt, {
                  icon: nt(He).copy
                }, null, 8, ["icon"]),
                Me("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, Lk)
            ])) : ht("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Fe(!0), Le(Qe, { key: 0 }, Mt(e.model.notes, (p) => (Fe(), Le("div", {
                key: p,
                class: "pano-param-note"
              }, rt(p), 1))), 128)) : (Fe(!0), Le(Qe, { key: 1 }, Mt(e.model.rows || [], (p) => (Fe(), Le(Qe, {
                key: p.key
              }, [
                p.grouped ? (Fe(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": p.key
                }, [
                  Me("label", null, rt(p.label), 1),
                  Me("div", Rk, [
                    (Fe(!0), Le(Qe, null, Mt(p.fields, (F) => (Fe(), Le("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: a(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (K) => l(K, F)
                      }, rt(F.short), 43, $k),
                      Me("input", {
                        ref_for: !0,
                        ref: (K) => {
                          s[F.key] = K;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: a(F, e.model),
                        "aria-label": `${p.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, zk)
                    ]))), 128))
                  ])
                ], 8, Vk)) : (Fe(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": p.key
                }, [
                  Me("label", null, rt(p.label), 1),
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
                  }, null, 12, Hk),
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
                  }, null, 8, Gk)
                ], 8, jk))
              ], 64))), 128))
            ], 2),
            Be(mk, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (p) => n("timeline", p))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Fe(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                u[5] || (u[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", Kk, [
                  Be(Tt, {
                    icon: nt(He).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", Bk, [
                Me("div", Uk, [
                  u[6] || (u[6] = Me("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, qk),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Xk)
                  ], 8, Yk)
                ]),
                Me("div", Jk, [
                  u[7] || (u[7] = Me("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, Qk),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, eM)
                  ], 8, Zk)
                ]),
                u[8] || (u[8] = Me("div", { class: "pano-ui-row" }, [
                  Me("span"),
                  Me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Wk)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Fe(), Le("div", tM, [
          (Fe(!0), Le(Qe, null, Mt(e.model.footerButtons, (p) => (Fe(), Le("button", {
            key: p.action,
            class: mt(["pano-btn", { "pano-btn-primary": p.primary === !0 }]),
            type: "button",
            "data-action": p.action
          }, rt(p.label), 11, nM))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, iM = { class: "pano-timeline-bar" }, oM = ["aria-label", "data-tip"], aM = ["aria-label", "data-tip"], sM = { class: "pano-timeline-time" }, lM = ["data-tip"], cM = { key: 0 }, uM = ["min", "max", "value"], dM = ["data-tip"], fM = { key: 0 }, pM = ["max", "value"], hM = ["aria-expanded"], mM = ["inert"], gM = { class: "pano-timeline-name" }, yM = ["aria-pressed", "aria-label", "data-tip", "onClick"], bM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, vM = ["disabled", "aria-expanded", "aria-label", "onClick"], _M = ["title", "aria-current", "onClick"], SM = ["data-keyed", "aria-label", "onClick"], wM = ["onPointerdown"], xM = ["onPointerdown"], kM = ["onPointerdown"], MM = ["onPointerdown"], PM = ["aria-label", "data-tip", "onPointerdown"], NM = { key: 0 }, CM = ["onPointerdown"], AM = ["aria-label", "data-tip", "onPointerdown"], IM = { key: 0 }, EM = 10, OM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ ms(0), playing: /* @__PURE__ */ ms(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Kt(null), o = /* @__PURE__ */ Kt(null), a = /* @__PURE__ */ Kt(1), s = /* @__PURE__ */ Kt(0), l = /* @__PURE__ */ Kt(!1);
    let c = null, u = null, d = null;
    rl(() => {
      c = new ResizeObserver(([ge]) => {
        a.value = Math.max(1, ge.contentRect.width);
      }), i.value && c.observe(i.value), u = new ResizeObserver(([ge]) => {
        s.value = ge.contentRect.height;
      }), o.value && u.observe(o.value);
    }), ha(() => {
      c == null || c.disconnect(), u == null || u.disconnect(), d == null || d();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), m = ut(() => r.playhead.frame.value), _ = ut(() => r.playhead.playing.value), g = ut(() => P1(m.value, Number(r.model.fps || 1))), p = ut(() => a.value / f.value), F = (ge) => `${ge / f.value * 100}%`, K = ut(() => z1(f.value, p.value));
    function z(ge) {
      const de = i.value.getBoundingClientRect(), P = Math.floor((ge - de.left) / Math.max(1, de.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, P));
    }
    function G(ge, de, P) {
      const H = Math.ceil(EM / Math.max(1e-6, p.value)), oe = new Map(de.map((j) => [j.frame, j.full]));
      return j1(de.map((j) => j.frame), H).map((j, fe) => ({
        ...j,
        key: `${ge}:${fe}`,
        partial: j.frames.some((Pe) => !oe.get(Pe)),
        selected: j.frames.some((Pe) => P.includes(Pe))
      }));
    }
    const x = ut(() => {
      const ge = /* @__PURE__ */ new Map();
      for (const de of r.model.rows || []) {
        ge.set(de.id, G(de.id, de.keys, de.selectedFrames));
        for (const P of de.lanes) ge.set(P.key, G(P.key, P.frames.map((H) => ({ frame: H, full: !0 })), P.selectedFrames));
      }
      return ge;
    });
    function q(ge) {
      const de = ge.end === null ? f.value : ge.end;
      return { left: F(ge.start), width: F(Math.max(0, de - ge.start)) };
    }
    function R(ge, de) {
      const P = ge.clientX, H = Math.max(1e-6, p.value);
      let oe = 0;
      de("start", 0, ge);
      const j = (Pe) => {
        if (Pe.pointerId !== ge.pointerId) return;
        const re = Math.round((Pe.clientX - P) / H);
        re !== oe && (oe = re, de("move", oe, Pe));
      }, fe = (Pe) => {
        Pe.pointerId === ge.pointerId && (d(), de("end", oe, Pe));
      };
      d == null || d(), d = () => {
        window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), d = null;
      }, window.addEventListener("pointermove", j), window.addEventListener("pointerup", fe), window.addEventListener("pointercancel", fe);
    }
    function ne(ge) {
      ge.button === 0 && R(ge, (de, P, H) => n("action", { type: "seek", frame: z(H.clientX), phase: de }));
    }
    function B(ge, de, P) {
      ge.button === 0 && (n("action", { type: "select-row", id: de.id }), R(ge, (H, oe) => n("action", { type: "clip", id: de.id, mode: P, delta: oe, phase: H })));
    }
    function Z(ge, de, P, H, oe) {
      if (ge.button === 0) {
        if (ge.shiftKey) {
          n("action", { type: "select-keys", owner: de.id, lane: P, frames: H.frames, additive: !0 });
          return;
        }
        H.frames.every((j) => oe.includes(j)) || n("action", { type: "select-keys", owner: de.id, lane: P, frames: H.frames, additive: !1 }), R(ge, (j, fe) => n("action", { type: "move-keys", delta: fe, phase: j }));
      }
    }
    const I = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ae(ge, de, P) {
      n("action", de), await tl(), ge.target.value = P();
    }
    function ie(ge) {
      ae(ge, { type: "fps", fps: Number(ge.target.value) }, () => I.value);
    }
    function he(ge) {
      const de = ge.target.value.trim();
      ae(ge, { type: "length", length: de ? Number(de) : null }, () => r.model.length ?? "");
    }
    function te(ge, de, P) {
      ge.button !== 0 || ge.target !== ge.currentTarget || n("action", { type: "select-keys", owner: de.id, lane: P, frames: [], additive: !1 });
    }
    return (ge, de) => Tr((Fe(), Le("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", iM, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: de[0] || (de[0] = (P) => n("action", { type: "play" }))
        }, [
          Be(Tt, {
            icon: _.value ? nt(He).pause : nt(He).play
          }, null, 8, ["icon"])
        ], 8, oM),
        e.model.hasAudio ? (Fe(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: de[1] || (de[1] = (P) => n("action", { type: "mute" }))
        }, [
          Be(Tt, {
            icon: e.model.muted ? nt(He).volume_muted : nt(He).volume2
          }, null, 8, ["icon"])
        ], 8, aM)) : ht("", !0),
        Me("span", sM, rt(g.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Fe(), Le("span", cM, rt(I.value), 1)) : (Fe(), Le("input", {
            key: 1,
            type: "number",
            min: nt(Ch),
            max: nt(Vu),
            step: "any",
            value: I.value,
            "aria-label": "Timeline fps",
            onChange: ie
          }, null, 40, uM)),
          de[6] || (de[6] = Me("span", null, "fps", -1))
        ], 8, lM),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          de[7] || (de[7] = Me("span", null, "Length", -1)),
          e.model.lengthLocked ? (Fe(), Le("span", fM, rt(e.model.length), 1)) : (Fe(), Le("input", {
            key: 1,
            type: "number",
            min: "1",
            max: nt(Ru),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: he
          }, null, 40, pM))
        ], 8, dM),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: de[2] || (de[2] = (P) => n("action", { type: "toggle-expanded" }))
        }, [
          de[8] || (de[8] = Me("span", null, "Timeline", -1)),
          Be(Tt, {
            icon: nt(He).chevron
          }, null, 8, ["icon"])
        ], 8, hM)
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
            onPointerdown: ne
          }, [
            (Fe(!0), Le(Qe, null, Mt(K.value, (P) => (Fe(), Le("span", {
              key: P,
              class: "pano-timeline-tick",
              style: Ct({ left: F(P) })
            }, rt(P), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Ct({ left: F(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Fe(!0), Le(Qe, null, Mt(e.model.rows || [], (P) => (Fe(), Le(Qe, {
            key: P.id
          }, [
            Me("div", {
              class: mt(["pano-timeline-head", { selected: P.selected, "is-hidden": !P.visible }])
            }, [
              Me("div", gM, [
                P.hideable ? (Fe(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": P.visible ? "true" : "false",
                  "aria-label": `${P.label} visible`,
                  "data-tip": P.visible ? "Hide" : "Show",
                  onClick: Pt((H) => n("action", { type: "toggle-visible", id: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: P.visible ? nt(He).eye : nt(He).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, yM)) : (Fe(), Le("span", bM)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !P.keyable,
                  "aria-expanded": P.open ? "true" : "false",
                  "aria-label": P.open ? `Hide ${P.label} parameters` : `Show ${P.label} parameters`,
                  onClick: Pt((H) => n("action", { type: "toggle-row", id: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: nt(He).chevron
                  }, null, 8, ["icon"])
                ], 8, vM),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: P.label,
                  "aria-current": P.selected ? "true" : void 0,
                  onClick: (H) => n("action", { type: "select-row", id: P.id })
                }, [
                  Be(Tt, {
                    icon: P.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, rt(P.label), 1)
                ], 8, _M),
                P.keyable ? (Fe(), Le("button", {
                  key: 2,
                  class: mt(["pano-timeline-key", { keyed: nt(ql)(P.keys, m.value) }]),
                  type: "button",
                  "data-keyed": nt(ql)(P.keys, m.value) ? "true" : "false",
                  "aria-label": nt(ql)(P.keys, m.value) ? `Every ${P.label} parameter has a keyframe here; update them` : `Add keyframes for every ${P.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Pt((H) => n("action", { type: "key-row", owner: P.id }), ["stop"])
                }, [
                  Be(Tt, {
                    icon: nt(He).keyframe
                  }, null, 8, ["icon"])
                ], 10, SM)) : ht("", !0)
              ]),
              P.open ? (Fe(!0), Le(Qe, { key: 0 }, Mt(P.lanes, (H) => (Fe(), Le("div", {
                key: H.key,
                class: "pano-timeline-lane-head"
              }, rt(H.label), 1))), 128)) : ht("", !0)
            ], 2),
            Me("div", {
              class: mt(["pano-timeline-track", { selected: P.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (H) => te(H, P, null)
              }, [
                P.clip ? (Fe(), Le("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: P.clip.end === null }]),
                  style: Ct(q(P.clip)),
                  onPointerdown: Pt((H) => B(H, P, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Pt((H) => B(H, P, "start"), ["stop"])
                  }, null, 40, kM),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Pt((H) => B(H, P, "end"), ["stop"])
                  }, null, 40, MM)
                ], 46, xM)) : ht("", !0),
                (Fe(!0), Le(Qe, null, Mt(x.value.get(P.id), (H) => (Fe(), Le("button", {
                  key: H.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: H.selected, cluster: H.frames.length > 1, partial: H.partial }]),
                  style: Ct({ left: F(H.frame + 0.5) }),
                  "aria-label": `${P.label}: ${H.frames.length > 1 ? `${H.frames.length} keyframes` : `keyframe at frame ${H.frames[0]}`}`,
                  "data-tip": H.frames.length > 1 ? `${H.frames.length} keyframes` : `Frame ${H.frames[0]}`,
                  onPointerdown: Pt((oe) => Z(oe, P, null, H, P.selectedFrames), ["stop"])
                }, [
                  H.frames.length > 1 ? (Fe(), Le("span", NM, rt(H.frames.length), 1)) : ht("", !0)
                ], 46, PM))), 128))
              ], 40, wM),
              P.open ? (Fe(!0), Le(Qe, { key: 0 }, Mt(P.lanes, (H) => (Fe(), Le("div", {
                key: H.key,
                class: "pano-timeline-lane",
                onPointerdown: (oe) => te(oe, P, H.lane)
              }, [
                (Fe(!0), Le(Qe, null, Mt(x.value.get(H.key), (oe) => (Fe(), Le("button", {
                  key: oe.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: oe.selected, cluster: oe.frames.length > 1 }]),
                  style: Ct({ left: F(oe.frame + 0.5) }),
                  "aria-label": `${H.label}: ${oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `keyframe at frame ${oe.frames[0]}`}`,
                  "data-tip": oe.frames.length > 1 ? `${oe.frames.length} keyframes` : `Frame ${oe.frames[0]}`,
                  onPointerdown: Pt((j) => Z(j, P, H.lane, oe, H.selectedFrames), ["stop"])
                }, [
                  oe.frames.length > 1 ? (Fe(), Le("span", IM, rt(oe.frames.length), 1)) : ht("", !0)
                ], 46, AM))), 128))
              ], 40, CM))), 128)) : ht("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Ct({ left: F(m.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, mM)
    ], 2)), [
      [bi, e.model.visible]
    ]);
  }
}, FM = {
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
    }, rt(e.model.text || ""), 7));
  }
}, TM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, DM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Fe(), Le("div", TM, [
      (Fe(!0), Le(Qe, null, Mt(e.buttons, (n) => Tr((Fe(), Vn(Xt, {
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
        [bi, n.visible !== !1]
      ])), 128))
    ]));
  }
}, LM = ["data-video-ready"], VM = { class: "pano-video-transport-shell" }, RM = { class: "pano-video-controls-left" }, $M = { class: "pano-video-filmstrip" }, zM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, jM = ["src", "onLoad"], HM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, GM = ["max", "value", "disabled"], WM = { class: "pano-video-controls-right" }, KM = ["data-has-audio"], BM = { class: "pano-video-volume-pop" }, UM = ["value", "disabled"], YM = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? He.pause : He.play;
    }), o = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = ut(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? He.loop_off : He.loop;
    }), l = ut(() => {
      var x, q;
      return ((x = t.state) == null ? void 0 : x.muted) === !0 || Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var x, q, R;
      return ((x = t.state) == null ? void 0 : x.hasAudio) !== !0 ? He.volume : ((q = t.state) == null ? void 0 : q.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? He.volume_muted : He.volume2;
    }), u = ut(() => {
      var x;
      return Math.max(0, Math.min(100, Number(((x = t.state) == null ? void 0 : x.progressPct) || 0)));
    }), d = ut(() => ({ left: `${u.value}%` })), f = ut(() => {
      var ne, B;
      const x = (ne = t.state) == null ? void 0 : ne.volumePct, q = Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) * 100, R = Number(x ?? q ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, R))}%`
      };
    }), m = ut(() => {
      var R, ne;
      const q = [
        String(((R = t.state) == null ? void 0 : R.currentTimeLabel) || "0:00"),
        String(((ne = t.state) == null ? void 0 : ne.durationLabel) || "0:00")
      ].reduce((B, Z) => Math.max(B, Z.length), 4);
      return `${Math.max(4, q)}ch`;
    }), _ = ut(() => ({ "--pano-video-time-ch": m.value })), g = ut(() => {
      var R, ne;
      const x = Array.isArray((R = t.state) == null ? void 0 : R.thumbnails) ? t.state.thumbnails : [];
      if (x.length) return x;
      const q = Math.max(7, Number(((ne = t.state) == null ? void 0 : ne.thumbnailCount) || 9));
      return Array.from({ length: q }, (B, Z) => ({
        id: `placeholder-${Z}`,
        src: "",
        label: ""
      }));
    }), p = /* @__PURE__ */ Kt(/* @__PURE__ */ new Set()), F = (x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.src) || (x == null ? void 0 : x.label) || ""), K = (x) => p.value.has(F(x)), z = (x) => {
      const q = new Set(p.value);
      q.add(F(x)), p.value = q;
    };
    pi(g, (x) => {
      const q = new Set(x.map(F)), R = /* @__PURE__ */ new Set();
      for (const ne of p.value)
        q.has(ne) && R.add(ne);
      p.value = R;
    }, { immediate: !0 });
    const G = ut(() => {
      var x;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((x = t.state) == null ? void 0 : x.shellMaxWidthPx) || 640))}px`
      };
    });
    return (x, q) => (Fe(), Le("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ct(G.value)
    }, [
      q[1] || (q[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      q[2] || (q[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", VM, [
        Me("div", RM, [
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
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", $M, [
          Me("div", zM, [
            (Fe(!0), Le(Qe, null, Mt(g.value, (R) => (Fe(), Le("div", {
              key: F(R),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !R.src,
                "is-loaded": R.src && K(R)
              }])
            }, [
              R.src ? (Fe(), Le("img", {
                key: 0,
                src: R.src,
                alt: "",
                draggable: "false",
                onLoad: (ne) => z(R)
              }, null, 40, jM)) : (Fe(), Le("span", HM))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: Ct(d.value),
            "aria-hidden": "true"
          }, [...q[0] || (q[0] = [
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
          }, null, 8, GM)
        ]),
        Me("div", WM, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ct(_.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
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
            Me("div", BM, [
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
              }, null, 12, UM)
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
          ], 8, KM)
        ])
      ])
    ], 14, LM));
  }
}, qM = { class: "pano-floating-top" }, XM = ["data-selected", "data-view-count"], JM = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], ZM = { class: "label" }, QM = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Fe(), Le("div", qM, [
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
            Me("span", ZM, rt(i.label), 1)
          ], 10, JM)), [
            [bi, i.visible !== !1]
          ])), 128))
        ], 8, XM)
      ]);
    };
  }
};
function vg(e = "stickers") {
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
const eP = ["aria-label"], tP = { class: "pano-stage-column" }, nP = { class: "pano-stage-wrap" }, rP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, iP = {
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
    const l = /* @__PURE__ */ Kt(null), c = /* @__PURE__ */ Kt(null), u = /* @__PURE__ */ Kt(null);
    function d() {
      var Z, I;
      return ((I = (Z = u.value) == null ? void 0 : Z.getRefs) == null ? void 0 : I.call(Z)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(Z) {
      var I, ae;
      return ((ae = (I = c.value) == null ? void 0 : I.open) == null ? void 0 : ae.call(I, Z)) === !0;
    }
    function m(Z) {
      i("image-file-selected", Z);
    }
    function _(Z) {
      i("image-file-cancelled", Z);
    }
    t({ getPaintOverlayRefs: d, openImagePicker: f });
    const g = ut(() => n.readOnly === !0), p = ut(() => n.shellPreset || vg(n.type)), F = ut(() => {
      var I, ae, ie;
      const Z = String((((I = n.uiState) == null ? void 0 : I.stageStatus) === "failed" ? (ae = n.uiState) == null ? void 0 : ae.stageStatusDetail : (ie = n.uiState) == null ? void 0 : ie.stageWarningDetail) ?? "");
      return Z === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : Z === "stickers" ? "One or more sticker previews are unavailable." : Z === "frame" ? "The editor hit a rendering error. Check the browser console for details." : Z === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : Z.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = ut(() => {
      var I;
      const Z = Array.isArray((I = p.value) == null ? void 0 : I.floatingButtons) ? p.value.floatingButtons.slice() : [];
      return g.value && Z.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: He.fullscreen
      }), Z;
    });
    function z() {
      const Z = l.value;
      return Z ? Array.from(Z.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((I) => I instanceof HTMLElement ? !I.hidden && I.tabIndex >= 0 && I.offsetParent !== null : !1) : [];
    }
    function G() {
      var ae;
      const I = z()[0] || l.value;
      (ae = I == null ? void 0 : I.focus) == null || ae.call(I);
    }
    function x() {
      var Z;
      s != null && s.isConnected && ((Z = s.focus) == null || Z.call(s)), s = null;
    }
    function q(Z) {
      var I, ae, ie, he;
      if (!Z.defaultPrevented) {
        if (Z.key === "Tab") {
          const te = z();
          if (!te.length) {
            Z.preventDefault(), (ae = (I = l.value) == null ? void 0 : I.focus) == null || ae.call(I);
            return;
          }
          const ge = te[0], de = te[te.length - 1], P = document.activeElement;
          if (Z.shiftKey) {
            (P === ge || P === l.value || !((ie = l.value) != null && ie.contains(P))) && (Z.preventDefault(), de.focus());
            return;
          }
          (P === de || !((he = l.value) != null && he.contains(P))) && (Z.preventDefault(), ge.focus());
          return;
        }
        Z.key === "Escape" && i("close");
      }
    }
    function R() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function ne() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function B(Z) {
      document.removeEventListener("keydown", q), Z ? (s || (s = document.activeElement), R(), document.addEventListener("keydown", q), tl(() => {
        G();
      })) : (ne(), x());
    }
    return rl(() => {
      B(n.open);
    }), ha(() => {
      ne(), document.removeEventListener("keydown", q), x();
    }), pi(() => n.open, (Z) => {
      B(Z);
    }), (Z, I) => e.open ? (Fe(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: I[2] || (I[2] = Pt((ae) => i("close"), ["self"]))
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
        Me("div", tP, [
          Me("div", nP, [
            I[3] || (I[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            I[4] || (I[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            I[5] || (I[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Fe(), Le("div", rP, rt(F.value), 1)) : ht("", !0),
            I[6] || (I[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(Bx, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            Be(Zm, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: _
            }, null, 512),
            g.value ? ht("", !0) : (Fe(), Le(Qe, { key: 1 }, [
              Be(DM, {
                buttons: e.uiState.toolButtons || p.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(gx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(Kx, {
                "paint-swatches": e.paintSwatches,
                panes: p.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(YM, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(QM, {
              buttons: e.uiState.viewButtons || p.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(dx, {
              buttons: e.uiState.floatingButtons || K.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(ek, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(FM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(wx, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(OM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: I[0] || (I[0] = (ae) => i("timeline", ae))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Fe(), Vn(rM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: I[1] || (I[1] = (ae) => i("timeline", ae))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, eP)
    ])) : ht("", !0);
  }
}, Xn = "loading", da = "ready", Hn = "failed";
function _g(e, t = "") {
  return e && (e.__panoLoadState = Xn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Sg(e, t = "") {
  return e && (e.__panoLoadState = da, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function wg(e, t = "") {
  return e && (e.__panoLoadState = Hn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function nu(e, t) {
  return e ? e.__panoLoadState === Hn ? Hn : typeof t == "function" && t(e) ? da : Xn : da;
}
function ru(e) {
  return nu(e) === Hn;
}
function oP({ presented: e, background: t = da, stickers: r = [] } = {}) {
  if (!e) return { status: Xn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Xn, o = n.includes(Xn);
  if (i && o) return { status: Xn, detail: "mixed" };
  if (i) return { status: Xn, detail: "background" };
  if (o) return { status: Xn, detail: "stickers" };
  const a = t === Hn, s = n.includes(Hn);
  return a && s ? { status: Hn, detail: "mixed" } : a ? { status: Hn, detail: "background" } : s ? { status: Hn, detail: "stickers" } : { status: da, detail: "" };
}
const aP = "state_json", sP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), fd = "sticker_image_1", lP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), xg = 0.01, cP = "external_image", Ws = "pano_sticker_input_images", uP = "pano_sticker_input_videos", dP = "pano_sticker_input_frames", fP = "pano_sticker_input_video_meta", pP = !0, vl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], gr = Math.PI / 180, Si = 180 / Math.PI, iu = 1, kg = "rgb(255, 221, 87)", hP = "rgb(228, 228, 231)", mP = "rgb(180, 150, 60)", gP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, yP = 64, Yf = 40, oc = 16, bP = 0.45, qf = 180, vP = 160, Ks = 24, _P = 4, SP = 4, wP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function ac(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function kP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function MP(e) {
  return e * e * e;
}
function _l(e, t, r) {
  return { x: e, y: t, z: r };
}
function Xf(e, t) {
  return _l(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Jf(e, t) {
  return _l(e.x * t, e.y * t, e.z * t);
}
function sc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function PP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return _l(e.x / t, e.y / t, e.z / t);
}
function Ba(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * Si),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * Si, -90, 90)
  };
}
function Wr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function Vo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function lc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return Vo(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), c = Number(t.x || 0) + n * l, u = Number(t.y || 0) + i * l, d = Number(e.x || 0) - c, f = Number(e.y || 0) - u;
  return d * d + f * f;
}
function jn(e, t, r) {
  return e + (t - e) * r;
}
function ur(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function NP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ua = { fillStyle: "", url: "" };
function CP(e, t, r) {
  if (Ua.url && Ua.fillStyle === String(e || ""))
    return Ua.url;
  const n = NP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Ks}" height="${Ks}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ua = { fillStyle: String(e || ""), url: n }, n;
}
function Bs(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Fn(e) {
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
function AP(e) {
  return vl.some((t) => Bs(e, t.color));
}
function ou(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), c = o * (1 - s * i), u = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: u, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: u };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: u, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function au(e) {
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
function IP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Zf(e) {
  const { paintCount: t, maskCount: r } = IP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ya(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function EP(e, t) {
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
function ci(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function OP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function FP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function TP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Mg = "pano_suite.ui_settings.v1", Pg = "pano_suite.node_grid_visibility.v1";
let $i = null, ar = null;
function hs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function DP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Mg)) || "").trim();
    if (!t) return $i ? hs($i) : null;
    const r = JSON.parse(t), n = hs(r);
    return $i = n, n;
  } catch {
    return $i ? hs($i) : null;
  }
}
function LP(e) {
  var r;
  const t = hs(e);
  $i = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Mg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Ng() {
  var e;
  if (ar && typeof ar == "object")
    return ar;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Pg)) || "").trim();
    if (!t)
      return ar = {}, ar;
    const r = JSON.parse(t);
    return ar = r && typeof r == "object" ? r : {}, ar;
  } catch {
    return ar = {}, ar;
  }
}
function VP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Ng()[r];
  return typeof i == "boolean" ? i : !!t;
}
function RP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Ng();
  n[r] = !!t, ar = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Pg, JSON.stringify(n));
  } catch {
  }
}
function $P(e, t) {
  const r = { ...e }, n = t.map((i) => i(cc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(cc(r, t[o].name))), cc(r, "showEditor");
}
function cc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const Ur = /* @__PURE__ */ new Map(), zP = 12;
function jP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = Ur.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (Ur.delete(t), Ur.set(t, r), r);
}
function HP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (Ur.delete(r), Ur.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ur.size > zP; ) {
      const i = Ur.keys().next().value;
      if (!i) break;
      Ur.delete(i);
    }
}
function GP(e) {
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
    mediaUiImage: u,
    node: d,
    portStillCanvas: f,
    portVideoEl: m,
    readOnly: _,
    runtime: g,
    scheduler: p,
    stageWrap: F,
    state: K,
    stateV2: z,
    stillCanvas: G,
    timelinePlayhead: x,
    type: q,
    uiState: R,
    videoEl: ne
  } = e;
  let B, Z, I, ae, ie, he;
  const te = {
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
  }, ge = 9, de = [];
  let P = 0;
  const H = () => {
    var We, Re;
    const M = (We = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : We.call(F), Y = (Re = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Re.call(o), ee = Math.max(0, Number((M == null ? void 0 : M.width) || 0)), Se = Y ? Math.max(0, Number(Y.width || 0)) : 0, Te = Se > 0 ? Se + 14 + 12 : 72, ze = Math.max(280, Math.floor(ee - Te * 2)), je = n.fullscreen ? Math.min(1200, ze) : ze;
    R.videoTransport.shellMaxWidthPx = je;
  }, oe = () => {
    P || (P = p.requestFrame(() => {
      P = 0, H();
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
    return !!R.videoTransport.hasAudio;
  }, fe = typeof ResizeObserver < "u" ? new ResizeObserver(() => oe()) : null;
  fe == null || fe.observe(F), o && (fe == null || fe.observe(o)), de.push(() => {
    var M;
    P && (p.cancelFrame(P), P = 0), (M = fe == null ? void 0 : fe.disconnect) == null || M.call(fe);
  }), oe();
  const Pe = () => {
    te.thumbnailJobId += 1, te.thumbnailSrc = "", R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = ge;
  }, re = async (M, Y, ee) => {
    const Se = String(M || "").trim();
    if (!Se) {
      Pe();
      return;
    }
    const xe = jP(Se);
    if (xe) {
      te.thumbnailSrc = Se, R.videoTransport.thumbnails = xe.thumbnails, R.videoTransport.thumbnailCount = xe.thumbnailCount;
      return;
    }
    const Ne = ++te.thumbnailJobId;
    te.thumbnailSrc = Se, R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = ge;
    const Te = sl(document, "editor.thumbnails");
    Te.preload = "auto", Te.muted = !0, Te.playsInline = !0, Te.crossOrigin = "anonymous";
    const ze = mn({ label: "editor.thumbnail" });
    try {
      const je = await new Promise((Ue) => {
        let ot = !1;
        const ft = (zt) => {
          ot || (ot = !0, Ue(zt));
        };
        Te.addEventListener("loadedmetadata", () => ft(!0), { once: !0 }), Te.addEventListener("canplay", () => ft(!0), { once: !0 }), Te.addEventListener("error", () => ft(!1), { once: !0 }), Te.src = Se, Te.load();
      });
      if (te.thumbnailJobId !== Ne) return;
      const We = Number(Te.videoWidth || 0), Re = Number(Te.videoHeight || 0);
      if (!je || We < 1 || Re < 1) {
        te.thumbnailFailedSrcs.add(Se);
        return;
      }
      const X = Math.max(0, Number(Te.duration || Y || 0)), Ce = 46, Ve = Math.max(72, Math.round(We / Re * Ce));
      ze.width = Ve, ze.height = Ce;
      const Ae = ze.getContext("2d");
      if (!Ae) return;
      const $e = [], Ge = (Ue) => new Promise((ot) => {
        let ft = !1;
        const zt = () => {
          ft || (ft = !0, ot());
        };
        Te.addEventListener("seeked", zt, { once: !0 }), Te.addEventListener("error", zt, { once: !0 });
        try {
          Te.currentTime = Ue;
        } catch {
          zt();
        }
      });
      for (let Ue = 0; Ue < ge; Ue += 1) {
        if (te.thumbnailJobId !== Ne) return;
        const ot = ge <= 1 ? 0 : Ue / (ge - 1), ft = X > 0 ? Math.max(0, Math.min(X - Math.max(1e-3, 0.5 / Math.max(1, Number(ee || 24))), X * ot)) : 0;
        if (await Ge(ft), te.thumbnailJobId !== Ne) return;
        Ae.clearRect(0, 0, Ve, Ce), Ae.drawImage(Te, 0, 0, Ve, Ce), $e.push({
          id: `thumb-${Ue}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: ft,
          label: v(ft)
        });
      }
      if (te.thumbnailJobId !== Ne) return;
      R.videoTransport.thumbnails = $e, R.videoTransport.thumbnailCount = $e.length || ge, HP(Se, {
        thumbnails: $e,
        thumbnailCount: $e.length || ge,
        duration: X,
        fps: ee
      });
    } finally {
      Te.removeAttribute("src"), Te.load(), wc(ze);
    }
  };
  de.push(() => {
    Pe();
  });
  const O = jm({
    video: ne instanceof HTMLVideoElement ? ne : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (M) => p.requestFrame(M),
      cancelFrame: (M) => p.cancelFrame(M)
    },
    fps: V,
    span: () => {
      if (z) return he();
      const M = Math.round(Number(R.videoTransport.duration || 0) * V());
      return ne.loop || !(M > 0) ? 1 / 0 : M;
    },
    loop: () => z,
    onFrame: (M) => {
      z ? I(M) : U(), Z({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      k() && (g.backgroundDirty = !0);
    },
    onChange: () => {
      U(), x.playing.value = O.playing, ie(), Z({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  de.push(() => O.dispose());
  const Q = z && m instanceof HTMLVideoElement ? Hm({
    video: m,
    onCapture: () => {
      var ee;
      const M = Number(m.videoWidth || 0), Y = Number(m.videoHeight || 0);
      M < 1 || Y < 1 || (f.width = M, f.height = Y, (ee = f.getContext("2d")) == null || ee.drawImage(m, 0, 0), f.__panoFrameIdx += 1, Z({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => Z({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  Q && de.push(() => Q.dispose());
  const ue = z ? Im({
    createImage: (M, Y) => {
      const ee = new Image();
      return ee.onload = Y, ee.onerror = Y, ee.src = M, ee;
    },
    onLoad: () => Z({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (ne instanceof HTMLVideoElement) {
    const M = () => {
      W(), Z({ cause: "frame_view", localOnly: !0 });
    }, Y = () => {
      U({
        hasAudio: R.videoTransport.hasAudio,
        muted: ne.muted,
        volume: Number(ne.volume ?? R.videoTransport.volume ?? 1)
      });
    }, ee = () => {
      const Se = ne.dataset.panoSrc;
      Se && (te.failedSrcs.add(Se), W(), Z());
    };
    for (const [Se, xe] of [
      ["loadedmetadata", M],
      ["loadeddata", M],
      ["canplay", M],
      ["volumechange", Y],
      ["error", ee]
    ])
      ne.addEventListener(Se, xe), de.push(() => ne.removeEventListener(Se, xe));
  }
  function me(M) {
    return t.uiList(d, M);
  }
  function _e(M) {
    return t.uiValue(d, M);
  }
  function E() {
    const M = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    return Ns(M) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : q === "stickers" || q === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ce() {
    const { metaKey: M } = E(), Y = _e(M);
    return Array.isArray(Y) && Y.length > 0 && Y[0] && typeof Y[0] == "object" ? Y[0] : Y && typeof Y == "object" ? Y : null;
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
    const Y = Math.max(0, Math.floor(Number(M || 0))), ee = Math.floor(Y / 60), Se = Y % 60;
    return `${ee}:${String(Se).padStart(2, "0")}`;
  }
  function V() {
    return z ? K.timeline.fps : te.metaFps || 1e3;
  }
  function U(M = {}) {
    const Y = Number(M.duration ?? R.videoTransport.duration ?? 0), ee = Math.max(1, Number(M.fps ?? R.videoTransport.fps ?? 24)), Se = O.frame / V(), xe = Object.prototype.hasOwnProperty.call(M, "ready") ? !!M.ready : !!R.videoTransport.ready, Ne = O.playing, Te = Object.prototype.hasOwnProperty.call(M, "visible") ? !!M.visible : !!R.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(M, "muted") ? !!M.muted : !!(ne instanceof HTMLVideoElement ? ne.muted : R.videoTransport.muted), je = Number(
      Object.prototype.hasOwnProperty.call(M, "volume") ? M.volume : ne instanceof HTMLVideoElement ? ne.volume : R.videoTransport.volume
    ), We = Object.prototype.hasOwnProperty.call(M, "hasAudio") ? !!M.hasAudio : j(ne), Re = Object.prototype.hasOwnProperty.call(M, "loop") ? !!M.loop : !!R.videoTransport.loop;
    Object.assign(R.videoTransport, {
      ready: xe,
      playing: Ne,
      visible: Te,
      loop: Re,
      currentTime: Number.isFinite(Se) ? Se : 0,
      duration: Number.isFinite(Y) ? Y : 0,
      progressPct: Y > 1e-6 ? Math.max(0, Math.min(100, Se / Y * 100)) : 0,
      currentTimeLabel: v(Se),
      durationLabel: v(Y),
      frameCount: Math.max(0, Number(M.frameCount ?? R.videoTransport.frameCount ?? 0)),
      fps: ee,
      hasAudio: We,
      muted: ze,
      volume: Math.max(0, Math.min(1, Number.isFinite(je) ? je : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(je) ? je : 1)) * 100),
      thumbnails: Array.isArray(M.thumbnails) ? M.thumbnails : R.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(M.thumbnailCount ?? R.videoTransport.thumbnailCount ?? ge))
    });
  }
  function S() {
    return !!(ne instanceof HTMLVideoElement && !z && ne.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function w() {
    if (!(ne instanceof HTMLVideoElement) || !R.videoTransport.hasAudio) return;
    const M = !ne.muted;
    ne.muted = M, !M && Number(ne.volume || 0) <= 0 && (ne.volume = Math.max(0.01, Number(R.videoTransport.volume || 1))), U({
      hasAudio: R.videoTransport.hasAudio,
      muted: ne.muted,
      volume: Number(ne.volume ?? R.videoTransport.volume ?? 1)
    });
  }
  function D() {
    U({
      visible: S()
    });
  }
  function k() {
    if (!(ne instanceof HTMLVideoElement) || Number(ne.videoWidth || 0) < 1 || Number(ne.videoHeight || 0) < 1) return !1;
    const M = Number(ne.videoWidth || 0), Y = Number(ne.videoHeight || 0);
    (G.width !== M || G.height !== Y) && (G.width = M, G.height = Y);
    const ee = G.getContext("2d");
    return ee ? (ee.clearRect(0, 0, M, Y), ee.drawImage(ne, 0, 0, M, Y), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !O.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : ne instanceof HTMLVideoElement && Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 ? ne : null;
  }
  function A() {
    G.__panoFrameIdx = 0, g.backgroundDirty = !0;
  }
  function W() {
    if (!(ne instanceof HTMLVideoElement)) return null;
    const { videoKey: M } = E(), Y = en(d, "background") && me(M)[0] || null, ee = c(Y), Se = [ee, t.linkedVideoFile(d, $())].filter(Boolean), xe = Se.find((X) => !te.failedSrcs.has(X)) || "";
    te.videoFailed = !xe && Se.length > 0;
    const Ne = xe && xe === ee ? ce() : null;
    te.metaFps = Number(Ne == null ? void 0 : Ne.fps) > 0 ? Number(Ne.fps) : 0;
    const Te = Math.max(1, Number((Ne == null ? void 0 : Ne.fps) || (z ? K.timeline.fps : 24))), ze = ne.dataset.panoSrc === xe && Number.isFinite(ne.duration) ? ne.duration : 0, je = Number((Ne == null ? void 0 : Ne.duration) || ((Ne == null ? void 0 : Ne.frames) > 0 ? Ne.frames / Te : ze)), We = Math.max(0, Number((Ne == null ? void 0 : Ne.frames) || Math.round(je * Te))), Re = !!(Ne != null && Ne.has_audio) || j(ne);
    return xe && ne.dataset.panoSrc !== xe ? (ne.pause(), A(), ne.dataset.panoSrc = xe, ne.loop = !z && !!R.videoTransport.loop, ne.muted = !!R.videoTransport.muted, ne.volume = Math.max(0, Math.min(1, Number(R.videoTransport.volume ?? 1))), ne.src = xe, ne.load(), O.setSource(!0), z || O.seek(0)) : !xe && ne.getAttribute("src") && (ne.pause(), ne.removeAttribute("src"), delete ne.dataset.panoSrc, ne.load(), A(), Pe(), O.setSource(!1)), z || (ne.loop = !!R.videoTransport.loop), xe && !z && te.thumbnailSrc !== xe && !te.thumbnailFailedSrcs.has(xe) && re(xe, je, Te), xe || Pe(), U({
      ready: !!xe,
      visible: !!xe && S(),
      duration: je,
      frameCount: We,
      fps: Te,
      hasAudio: Re,
      loop: !!ne.loop,
      muted: !!ne.muted,
      volume: Number(ne.volume ?? R.videoTransport.volume ?? 1),
      thumbnailCount: R.videoTransport.thumbnailCount
    }), xe || null;
  }
  function J(M, Y = null) {
    return u(d, M, a, Y || (() => Z()));
  }
  function se(M = null) {
    return en(d, "external-sticker") ? J(Ws, M) : null;
  }
  function L() {
    if (!en(d, "external-sticker")) return null;
    const M = me(fP)[0];
    if (!M || typeof M != "object") return null;
    const Y = me(dP).map(c).filter(Boolean);
    if (Y.length) return { frames: Y, meta: M };
    const ee = c(me(uP)[0] || null);
    return ee ? { src: ee, meta: M } : null;
  }
  function le() {
    const M = K.stickers.find(B), Y = M ? L() : null, ee = Y ? Nm(M.clip, n.frame, K.timeline.fps, Y.meta) : null;
    Q.follow({ src: (Y == null ? void 0 : Y.src) || "", time: ee, playing: O.advancing, fps: K.timeline.fps });
    const Se = M ? pe(M) : null, xe = Y != null && Y.frames ? ue.picture(Y.frames, ee, Y.meta, Se) : Q.picture(f, Se);
    return xe ? { media: xe, revision: y(xe), source: Am(Y, Se) } : null;
  }
  function ve() {
    return !z || !en(d, "scene") ? null : df(me("pano_scene_files"), me("pano_scene_meta"), c);
  }
  function we() {
    return !z || !en(d, "external-sticker") ? null : df(me("pano_sticker_files"), me("pano_sticker_meta"), c);
  }
  function pe(M) {
    var Te;
    if (M && typeof M == "object" && (B(M) || M.external === !0))
      return se(() => {
        Dr(d, "image-loaded");
      });
    const Y = z ? be(M) : String(M && typeof M == "object" ? M.asset_id || M.assetId || "" : M || "");
    if (!Y) return null;
    const ee = a.get(Y);
    if (ee) return ee;
    const Se = z ? Uh(M.source) : (Te = K.assets) == null ? void 0 : Te[Y], xe = l(Se);
    if (!xe) return null;
    const Ne = new Image();
    return _g(Ne, xe), Ne.onload = () => {
      Sg(Ne, xe), Z();
    }, Ne.onerror = () => {
      wg(Ne, xe), Z();
    }, Ne.src = xe, a.set(Y, Ne), Ne;
  }
  function be(M) {
    const { source: Y } = M;
    return Y.filename ? `file:${Y.storage}:${Y.subfolder}:${Y.filename}` : `sticker:${M.id}`;
  }
  function ye() {
    if (q === "cutout" && !r) {
      const xe = N();
      if (xe) return xe;
      const Ne = s(
        d,
        ["erp_image", "bg_erp"],
        () => Z(),
        "background:cutout:erp_image|bg_erp"
      );
      return Ne && !ru(Ne) ? Ne : u(d, "pano_input_images", a, () => Z()) || Ne || null;
    }
    const M = N();
    if (M) return M;
    const Y = en(d, "background") ? u(d, "pano_input_images", a, () => Z()) : null;
    if (Y && !ru(Y)) return Y;
    if (ne instanceof HTMLVideoElement && ne.dataset.panoSrc) return ne;
    const ee = $();
    return s(d, ee, () => Z(), `background:${ee.join("|")}`) || Y || null;
  }
  function h() {
    var Y;
    const M = (Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs : []).findIndex((ee) => (ee == null ? void 0 : ee.name) === "source");
    return M >= 0 && d.graph ? String(((Y = d.getInputLink(M)) == null ? void 0 : Y.type) || "") : "";
  }
  function $() {
    if (q === "cutout") return r ? h() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const M = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Se) => String((Se == null ? void 0 : Se.name) || "")) : [], Y = M.includes("erp_image"), ee = M.includes("bg_erp");
    return _ && (Y || ee) ? Y ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : q === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function C(M) {
    return M ? M instanceof HTMLImageElement ? !!M.complete && Number(M.naturalWidth || M.width || 0) > 0 && Number(M.naturalHeight || M.height || 0) > 0 : M instanceof HTMLVideoElement ? Number(M.videoWidth || 0) > 0 && Number(M.videoHeight || 0) > 0 && Number(M.readyState || 0) >= 2 : Number(M.width || M.naturalWidth || 0) > 0 && Number(M.height || M.naturalHeight || 0) > 0 : !1;
  }
  function b() {
    if (i.failed) return { status: Hn, detail: "renderer" };
    if (!i.ready) return { status: Xn, detail: "boot" };
    const M = ye(), Y = te.videoFailed ? Hn : nu(M, C), ee = [];
    for (const Se of ae()) {
      if ((Se == null ? void 0 : Se.visible) === !1) continue;
      const xe = pe(Se);
      ee.push(nu(xe, C));
    }
    return oP({
      presented: g.hasPresentedFrame,
      background: Y,
      stickers: ee
    });
  }
  function T() {
    ne instanceof HTMLVideoElement && ne.pause(), de.forEach((M) => {
      try {
        M();
      } catch {
      }
    });
  }
  return {
    connect(M) {
      ({
        isExternalSticker: B,
        requestDraw: Z,
        setTimelineFrame: I,
        skyStickers: ae,
        syncTimeline: ie,
        timelineSpanFrames: he
      } = M);
    },
    videoState: te,
    queueVideoTransportLayout: oe,
    playback: O,
    portVideo: Q,
    getNodeUiValue: _e,
    getMediaRevisionToken: y,
    playbackFps: V,
    syncVideoTransportState: U,
    toggleVideoMuted: w,
    syncVideoTransportVisibility: D,
    refreshModalVideoSource: W,
    getStickerUiImage: J,
    getExternalStickerPreviewImage: se,
    getPortMedia: L,
    followPortSticker: le,
    getStickerImage: pe,
    stickerImageKey: be,
    getConnectedErpImage: ye,
    isDecodedImageReady: C,
    getStageImageStatus: b,
    sceneFiles: ve,
    stickerFiles: we,
    disposeMediaSession: T
  };
}
function WP(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((d) => {
      n.push(String(d || ""));
    }), !n.length)) return;
    const u = Number(c.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, u)) : i = n.length - 1;
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
      const c = n.length, u = Math.max(0, c - a), d = i >= 0 ? Math.max(0, Math.min(i, u)) : u, f = n.slice(d, d + a), m = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - d));
      return {
        version: 1,
        entries: f,
        index: m
      };
    },
    hydrate: s
  };
}
const KP = 80;
function Cg(e) {
  return JSON.stringify(U1(e));
}
function BP(e) {
  return WP(KP, { entries: [Cg(e)], index: 0 });
}
function Ag(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function UP(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, c, u, d, f, m, _, g, p, F, K, z, G, x;
  function q() {
    r || (K(), Xh(i), !(o && i.stickers.some(d)) && (t.historyController.commitActionGroup(Cg(i)), G()));
  }
  function R(B) {
    var ie, he;
    if (r) return;
    F();
    const Z = B < 0 ? t.historyController.undo() : t.historyController.redo();
    if (G(), !Z) return;
    const I = Y1(i, Z), ae = (ie = i.timeline) == null ? void 0 : ie.fps;
    Object.keys(i).forEach((te) => delete i[te]), Object.assign(i, I.state), K(!1), o && i.timeline.fps !== ae && _.seek(Math.round(t.frame * i.timeline.fps / ae)), t.selectedId = Ag(s, i), a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((he = u()) == null ? void 0 : he.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), g(), n.backgroundDirty = !0, I.paintingChanged ? m() : f(), z(), x(), c(), p({ cause: "cutout_frame" });
  }
  function ne() {
    var I, ae;
    const B = Array.isArray((I = t.historyController) == null ? void 0 : I.entries) ? t.historyController.entries : [], Z = Number((ae = t.historyController) == null ? void 0 : ae.index);
    return {
      canUndo: !r && B.length > 1 && Z > 0,
      canRedo: !r && B.length > 1 && Z >= 0 && Z < B.length - 1
    };
  }
  return {
    connect(B) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: u,
        isUploadingSticker: d,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: _,
        releaseHiddenSelection: g,
        requestDraw: p,
        stopTimelinePlayback: F,
        syncCutoutShot: K,
        syncPaintUi: z,
        syncUndoRedoButtons: G,
        updateSidePanel: x
      } = B);
    },
    pushHistory: q,
    restoreHistory: R,
    getHistoryCapabilities: ne
  };
}
function YP(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, c, u, d, f, m, _;
  function g() {
    return s === "stickers" ? p() : o.shots;
  }
  function p() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function F(h) {
    return i && Q(h);
  }
  function K(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function z(h) {
    return F(h) ? Wu(h, n.frame) : h;
  }
  function G(h, $) {
    F(h) ? Kh(h, n.frame, $) : Object.assign(h, $);
  }
  function x() {
    const h = o.painting || (o.painting = ao(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function q(h = "paint") {
    var T, M;
    const $ = Array.isArray((M = (T = o.painting) == null ? void 0 : T[h]) == null ? void 0 : M.strokes) ? o.painting[h].strokes : [], C = [], b = /* @__PURE__ */ new Set();
    for (const Y of $) {
      const ee = String((Y == null ? void 0 : Y.actionGroupId) || "").trim();
      !ee || b.has(ee) || (b.add(ee), C.push(ee));
    }
    return C;
  }
  function R() {
    return q("paint");
  }
  function ne(h, $) {
    const C = String($ || "").trim();
    return C ? `${h === "mask" ? "mask" : "paint"}:${C}` : "";
  }
  function B(h) {
    const $ = String(h || "").trim();
    return $ ? `raster:${$}` : "";
  }
  function Z(h) {
    const $ = String(h || "").trim();
    if (!$) return "";
    const C = $.match(/^raster:(.*)$/);
    return String(C ? C[1] || "" : $).trim();
  }
  function I(h, $ = null) {
    const C = String(h || "").trim();
    if (!C) return { layerKind: "paint", actionGroupId: "" };
    const b = C.match(/^(paint|mask):(.*)$/);
    return b ? { layerKind: b[1] === "mask" ? "mask" : "paint", actionGroupId: String(b[2] || "").trim() } : { layerKind: $ === "mask" ? "mask" : "paint", actionGroupId: C };
  }
  function ae() {
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
  function ie(h, $ = null) {
    const C = String(h || "").trim();
    if (!C) return null;
    const b = x();
    let T = b.find((M) => String((M == null ? void 0 : M.actionGroupId) || "") === C);
    return T ? $ != null && (T.z_index = Math.max(0, Number($ || 0))) : (T = {
      id: C,
      type: "strokeGroup",
      actionGroupId: C,
      z_index: $ == null ? ae() : Math.max(0, Number($ || 0)),
      locked: !1,
      frame: null
    }, b.push(T)), T;
  }
  function he(h) {
    if (!(h != null && h.centerUv)) return [];
    const $ = Number(h.centerUv.u || 0), C = Number(h.centerUv.v || 0), b = Number(h.halfW || 0), T = Number(h.halfH || 0);
    return [
      {
        u: (($ - b) % 1 + 1) % 1,
        v: Ee(C - T, 0, 1)
      },
      {
        u: (($ + b) % 1 + 1) % 1,
        v: Ee(C - T, 0, 1)
      },
      {
        u: (($ + b) % 1 + 1) % 1,
        v: Ee(C + T, 0, 1)
      },
      {
        u: (($ - b) % 1 + 1) % 1,
        v: Ee(C + T, 0, 1)
      }
    ];
  }
  function te() {
    const h = new Set(R()), C = x().filter((b) => h.has(String((b == null ? void 0 : b.actionGroupId) || "")));
    return h.forEach((b) => {
      C.some((T) => String((T == null ? void 0 : T.actionGroupId) || "") === b) || C.push({
        id: b,
        type: "strokeGroup",
        actionGroupId: b,
        z_index: ae(),
        locked: !1,
        frame: null
      });
    }), C.sort((b, T) => Number((b == null ? void 0 : b.z_index) || 0) - Number((T == null ? void 0 : T.z_index) || 0)), o.painting.groups = C, C;
  }
  function ge(h, $, C) {
    var Re;
    const b = (X) => (Number(X || 0) % 1 + 1) % 1, T = [];
    for (const X of C) {
      const Ce = X == null ? void 0 : X.geometry, Ve = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Ve) && T.push(...Ve);
    }
    if (!T.length) return null;
    const M = b(((Re = T[0]) == null ? void 0 : Re.u) || 0);
    let Y = 0, ee = 0;
    T.forEach((X) => {
      const Ce = b((X == null ? void 0 : X.u) || 0);
      Y += M + U(Ce, M), ee += Number((X == null ? void 0 : X.v) || 0);
    });
    const Se = (Y / T.length % 1 + 1) % 1;
    let xe = 1 / 0, Ne = -1 / 0, Te = 1 / 0, ze = -1 / 0;
    T.forEach((X) => {
      const Ce = b((X == null ? void 0 : X.u) || 0), Ve = U(Ce, Se);
      xe = Math.min(xe, Ve), Ne = Math.max(Ne, Ve);
      const Ae = Number((X == null ? void 0 : X.v) || 0);
      Te = Math.min(Te, Ae), ze = Math.max(ze, Ae);
    });
    const je = C.reduce((X, Ce) => {
      const Ve = c(String((Ce == null ? void 0 : Ce.toolKind) || "pen")), Ae = Mn[Ve] || Mn[Cr], $e = Math.max(1, Number((Ce == null ? void 0 : Ce.size) || 10)) * Math.max(0.1, Number((Ae == null ? void 0 : Ae.sizeScale) ?? 1));
      return Math.max(X, $e);
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
    const T = x().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === b);
    if (!T) return null;
    const M = C || y(b, $);
    return T.frame = ge(b, $, M), T.frame;
  }
  function P() {
    var b;
    const h = p().map((T) => ({
      type: "sticker",
      id: String((T == null ? void 0 : T.id) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    })), $ = te().map((T) => ({
      type: "strokeGroup",
      id: String((T == null ? void 0 : T.id) || (T == null ? void 0 : T.actionGroupId) || ""),
      actionGroupId: String((T == null ? void 0 : T.actionGroupId) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    })), C = (Array.isArray((b = o.painting) == null ? void 0 : b.raster_objects) ? o.painting.raster_objects : []).filter((T) => String((T == null ? void 0 : T.layerKind) || "paint") === "paint").map((T) => ({
      type: "rasterObject",
      id: String((T == null ? void 0 : T.id) || ""),
      z_index: Number((T == null ? void 0 : T.z_index) || 0),
      item: T
    }));
    return [...h, ...$, ...C].sort((T, M) => Number(T.z_index || 0) - Number(M.z_index || 0));
  }
  function H(h = !0) {
    var C, b, T, M, Y, ee;
    const $ = P().filter((Se) => Se.type === "strokeGroup").map((Se) => String(Se.actionGroupId || "")).filter((Se) => !!Se);
    if (h) {
      const Se = String(((b = (C = n.interaction) == null ? void 0 : C.stroke) == null ? void 0 : b.actionGroupId) || "").trim(), xe = String(((M = (T = n.interaction) == null ? void 0 : T.stroke) == null ? void 0 : M.layerKind) || "").trim(), Ne = String(((ee = (Y = n.interaction) == null ? void 0 : Y.stroke) == null ? void 0 : ee.toolKind) || "").trim();
      Se && xe === "paint" && Ne !== "eraser" && !$.includes(Se) && $.push(Se);
    }
    return $;
  }
  function oe(h = !0) {
    var ee, Se, xe, Ne, Te, ze;
    const $ = P();
    if (!h) return $;
    const C = String(((Se = (ee = n.interaction) == null ? void 0 : ee.stroke) == null ? void 0 : Se.actionGroupId) || "").trim(), b = String(((Ne = (xe = n.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : Ne.layerKind) || "").trim(), T = String(((ze = (Te = n.interaction) == null ? void 0 : Te.stroke) == null ? void 0 : ze.toolKind) || "").trim();
    if (!C || b !== "paint" || T === "eraser" || $.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === C))
      return $;
    const M = m();
    let Y = $.reduce((je, We) => Math.max(je, Number((We == null ? void 0 : We.z_index) || 0)), -1) + 1;
    return M && ce(M) && String(M.actionGroupId || "") === C && (Y = Number(M.z_index || 0)), [
      ...$,
      {
        type: "strokeGroup",
        id: C,
        actionGroupId: C,
        z_index: Y,
        item: null
      }
    ].sort((je, We) => Number((je == null ? void 0 : je.z_index) || 0) - Number((We == null ? void 0 : We.z_index) || 0));
  }
  function j() {
    return x().slice().sort((h, $) => Number((h == null ? void 0 : h.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0)).map((h) => E(ne("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function fe() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter(($) => String(($ == null ? void 0 : $.layerKind) || "paint") === "paint").slice().sort(($, C) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((C == null ? void 0 : C.z_index) || 0)).map(($) => me(B(($ == null ? void 0 : $.id) || ""))).filter(Boolean);
  }
  function Pe() {
    return r || !Array.isArray(o.stickers) ? [] : p();
  }
  function re() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Pe()];
  }
  function O(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function Q(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function ue() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function me(h) {
    const $ = Z(h);
    if (!$) return null;
    const C = ue().find((b) => String((b == null ? void 0 : b.id) || "").trim() === $);
    return !C || String((C == null ? void 0 : C.layerKind) || "paint") !== "paint" ? null : {
      ...C,
      id: B($),
      type: "rasterObject",
      rasterObjectId: $
    };
  }
  function _e(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const $ = Z(h.rasterObjectId || h.id || "");
    return !!$ && !!me(B($));
  }
  function E(h) {
    const $ = I(h), C = String($.actionGroupId || "").trim();
    if (!C) return null;
    const b = x().find((T) => String((T == null ? void 0 : T.id) || (T == null ? void 0 : T.actionGroupId) || "") === C || String((T == null ? void 0 : T.actionGroupId) || "") === C);
    return b ? {
      ...b,
      id: ne("paint", C),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: C
    } : null;
  }
  function ce(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const $ = String(h.actionGroupId || "").trim(), C = String(h.layerKind || "paint").trim() || "paint";
    return !!$ && !!E(ne(C, $));
  }
  function y(h, $ = null) {
    const C = I(h, $), b = String(C.actionGroupId || "").trim();
    return b ? d(C.layerKind).filter((T) => String((T == null ? void 0 : T.actionGroupId) || "").trim() === b) : [];
  }
  function v(h, $ = "paint") {
    const C = String(h || "").trim(), T = `geomv5:${String($ || "paint").trim() || "paint"}:${C}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const M = l(), Y = String((M == null ? void 0 : M.id) || ""), ee = M ? u(M) : null;
      return `${T}:frame:${Y}:${Math.round(Number((M == null ? void 0 : M.yaw_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.pitch_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.roll_deg) ?? (M == null ? void 0 : M.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ee == null ? void 0 : ee.x) || 0))}:${Math.round(Number((ee == null ? void 0 : ee.y) || 0))}:${Math.round(Number((ee == null ? void 0 : ee.w) || 0))}:${Math.round(Number((ee == null ? void 0 : ee.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function V(h, $, C) {
    return !h || typeof h != "object" ? h : {
      ...h,
      u: ((Number(h.u || 0) + Number($ || 0)) % 1 + 1) % 1,
      v: Ee(Number(h.v || 0) + Number(C || 0), 0, 1)
    };
  }
  function U(h, $) {
    let C = Number(h || 0) - Number($ || 0);
    for (; C > 0.5; ) C -= 1;
    for (; C < -0.5; ) C += 1;
    return C;
  }
  function S(h, $ = null, C = null) {
    var xe;
    const b = I(h, $), T = Array.isArray(C) ? C : y(b.actionGroupId, b.layerKind), M = [];
    if (T.forEach((Ne) => {
      const Te = (Ne == null ? void 0 : Ne.geometry) || null, ze = (Te == null ? void 0 : Te.geometryKind) === "lasso_fill" ? Te == null ? void 0 : Te.points : (Te == null ? void 0 : Te.processedPoints) || (Te == null ? void 0 : Te.rawPoints) || (Te == null ? void 0 : Te.points) || [];
      Array.isArray(ze) && M.push(...ze);
    }), !M.length) return { u: 0.5, v: 0.5 };
    const Y = Number(((xe = M[0]) == null ? void 0 : xe.u) || 0);
    let ee = 0, Se = 0;
    return M.forEach((Ne) => {
      ee += Y + U(Number((Ne == null ? void 0 : Ne.u) || 0), Y), Se += Number((Ne == null ? void 0 : Ne.v) || 0);
    }), {
      u: (ee / M.length % 1 + 1) % 1,
      v: Ee(Se / M.length, 0, 1)
    };
  }
  function w(h, $, C = 1, b = 0) {
    if (!h || typeof h != "object") return h;
    const T = Number(($ == null ? void 0 : $.u) || 0), M = Number(($ == null ? void 0 : $.v) || 0), Y = U(Number(h.u || 0), T), ee = Number(h.v || 0) - M, Se = Number(b || 0) * gr, xe = Math.cos(Se), Ne = Math.sin(Se), Te = Math.max(0.02, Number(C || 1)), ze = (Y * xe - ee * Ne) * Te, je = (Y * Ne + ee * xe) * Te;
    return {
      ...h,
      u: ((T + ze) % 1 + 1) % 1,
      v: Ee(M + je, 0, 1)
    };
  }
  function D(h, $, C, b = null, T = null, M = null) {
    const Y = I(h, T), ee = String(Y.actionGroupId || "").trim();
    if (!ee) return !1;
    const Se = d(Y.layerKind), xe = Array.isArray(b) ? new Map(b.map((Te) => [String((Te == null ? void 0 : Te.id) || ""), Te])) : null;
    let Ne = !1;
    if (Se.forEach((Te) => {
      if (String((Te == null ? void 0 : Te.actionGroupId) || "").trim() !== ee) return;
      const ze = (xe == null ? void 0 : xe.get(String((Te == null ? void 0 : Te.id) || ""))) || Te, je = Te == null ? void 0 : Te.geometry, We = ze == null ? void 0 : ze.geometry;
      !je || !We || (Array.isArray(We.points) && (je.points = We.points.map((Re) => V(Re, $, C)), Ne = !0), Array.isArray(We.rawPoints) && (je.rawPoints = We.rawPoints.map((Re) => V(Re, $, C)), Ne = !0), Array.isArray(We.processedPoints) && (je.processedPoints = We.processedPoints.map((Re) => V(Re, $, C)), Ne = !0));
    }), Ne && M) {
      const Te = x().find((ze) => String((ze == null ? void 0 : ze.actionGroupId) || "") === ee);
      Te && (Te.frame = null);
    }
    return Ne;
  }
  function k(h, $ = 1, C = 0, b = null, T = null, M = null) {
    const Y = I(h, T), ee = String(Y.actionGroupId || "").trim();
    if (!ee) return !1;
    const Se = d(Y.layerKind), xe = Array.isArray(b) ? b : y(ee, Y.layerKind), Ne = Array.isArray(xe) ? new Map(xe.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Te = (M == null ? void 0 : M.centerUv) ?? S(ee, Y.layerKind, xe);
    let ze = !1;
    if (Se.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== ee) return;
      const We = (Ne == null ? void 0 : Ne.get(String((je == null ? void 0 : je.id) || ""))) || je, Re = je == null ? void 0 : je.geometry, X = We == null ? void 0 : We.geometry;
      !Re || !X || (Array.isArray(X.points) && (Re.points = X.points.map((Ce) => w(Ce, Te, $, C)), ze = !0), Array.isArray(X.rawPoints) && (Re.rawPoints = X.rawPoints.map((Ce) => w(Ce, Te, $, C)), ze = !0), Array.isArray(X.processedPoints) && (Re.processedPoints = X.processedPoints.map((Ce) => w(Ce, Te, $, C)), ze = !0));
    }), ze && M) {
      const je = x().find((We) => String((We == null ? void 0 : We.actionGroupId) || "") === ee);
      je && (je.frame = null);
    }
    return ze;
  }
  function N(h, $, C, b = null) {
    const T = Z(h);
    if (!T) return !1;
    const M = ue().find((Ne) => String((Ne == null ? void 0 : Ne.id) || "").trim() === T);
    if (!M) return !1;
    const Y = b && typeof b == "object" ? b : M, ee = (Y == null ? void 0 : Y.transform) || {}, Se = Number(ee.du || 0) + Number($ || 0), xe = Ee(Number(ee.dv || 0) + Number(C || 0), -1, 1);
    return M.transform || (M.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), M.transform.du = Se, M.transform.dv = xe, !0;
  }
  function A(h, $ = 1, C = null) {
    const b = Z(h);
    if (!b) return !1;
    const T = ue().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === b);
    if (!T) return !1;
    const M = C && typeof C == "object" ? C : T, Y = (M == null ? void 0 : M.transform) || {}, ee = Math.max(0.01, Number(Y.scale || 1)), Se = Ee(ee * Math.max(0.01, Number($ || 1)), 0.01, 100);
    return T.transform || (T.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), T.transform.scale = Se, !0;
  }
  function W() {
    return ae();
  }
  function J(h) {
    var $;
    return !h || typeof h != "object" ? !1 : a ? (($ = h.source) == null ? void 0 : $.kind) === "port" : String(h.id || "") === fd || String(h.source_kind || "") === cP;
  }
  function se(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function L(h) {
    return J(h) && se(h) ? um : 1;
  }
  function le(h, $, C = 1, b = 0) {
    if (!h || typeof h != "object") return h;
    const T = Number(($ == null ? void 0 : $.u) || 0), M = Number(($ == null ? void 0 : $.v) || 0), Y = U(Number(h.u || 0), T), ee = Number(h.v || 0) - M, Se = Math.max(0.02, Number(C || 1)), xe = Number(b || 0) * gr, Ne = Math.cos(xe), Te = Math.sin(xe), ze = Y / Se, je = ee / Se, We = ze * Ne + je * Te, Re = -ze * Te + je * Ne;
    return {
      ...h,
      u: ((T + We) % 1 + 1) % 1,
      v: M + Re
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
    }, b = Math.max(0.01, Number(((Se = h == null ? void 0 : h.transform) == null ? void 0 : Se.scale) || 1)), T = Number(((xe = h == null ? void 0 : h.transform) == null ? void 0 : xe.rot_deg) || 0), M = Number(((Ne = h == null ? void 0 : h.transform) == null ? void 0 : Ne.du) || 0), Y = Number(((Te = h == null ? void 0 : h.transform) == null ? void 0 : Te.dv) || 0);
    return [
      { u: Number($.u0 || 0), v: Number($.v0 || 0) },
      { u: Number($.u1 || 0), v: Number($.v0 || 0) },
      { u: Number($.u1 || 0), v: Number($.v1 || 0) },
      { u: Number($.u0 || 0), v: Number($.v1 || 0) }
    ].map((ze) => V(w(ze, C, b, T), M, Y));
  }
  function pe(h) {
    const $ = Z((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), C = (h == null ? void 0 : h.transform) || {}, b = (h == null ? void 0 : h.bbox) || {}, T = `${$}:${n.mode}:${f()}:${b.u0}:${b.v0}:${b.u1}:${b.v1}:${C.du}:${C.dv}:${C.rot_deg}:${C.scale}`;
    if (n.mode === "frame") {
      const M = l(), Y = M ? u(M) : null;
      return `${T}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((Y == null ? void 0 : Y.x) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.y) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.w) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function be(h) {
    const $ = String((h == null ? void 0 : h.id) || ""), C = O(h) ? "frame" : Q(h) ? "sticker" : "item", b = z(h), T = [
      C,
      $,
      n.mode,
      Number((b == null ? void 0 : b.yaw_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.pitch_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.hFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.vFOV_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.rot_deg) || 0).toFixed(4),
      Number((b == null ? void 0 : b.roll_deg) || 0).toFixed(4),
      Er(b),
      F(h) && _(h)
    ].join(":");
    if (n.mode === "frame") {
      const M = l(), Y = M ? u(M) : null;
      return `${T}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((Y == null ? void 0 : Y.x) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.y) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.w) || 0))}:${Math.round(Number((Y == null ? void 0 : Y.h) || 0))}`;
    }
    return `${T}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
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
        getFrameViewRect: u,
        getPaintingLayerList: d,
        getPaintingRevisionKey: f,
        getSelected: m,
        sceneStickerShown: _
      } = h);
    },
    getList: g,
    skyStickers: p,
    isSceneSticker: F,
    isUploadingSticker: K,
    poseOf: z,
    writePose: G,
    getPaintingGroupList: x,
    makeStrokeGroupSelectionId: ne,
    makeRasterObjectSelectionId: B,
    parseRasterObjectSelectionId: Z,
    ensurePaintingGroupEntry: ie,
    getFrameCornersUv: he,
    ensureGroupFrame: de,
    getDisplayListObjects: P,
    getOrderedPaintGroupIds: H,
    getOrderedDisplayListObjects: oe,
    getSelectableStrokeGroupItems: j,
    getSelectableRasterObjectItems: fe,
    cutoutStickers: Pe,
    getCutoutSelectableItems: re,
    isShotItem: O,
    isStickerItem: Q,
    getRasterObjectList: ue,
    getRasterObjectItem: me,
    isRasterObjectItem: _e,
    getStrokeGroupItem: E,
    isStrokeGroupItem: ce,
    getStrokeGroupStrokes: y,
    getStrokeGeomCacheKey: v,
    shortestWrappedDelta: U,
    getStrokeGroupCenterUv: S,
    applyStrokeGroupOffset: D,
    applyStrokeGroupTransform: k,
    applyRasterObjectOffset: N,
    applyRasterObjectTransform: A,
    getNextStickerZIndex: W,
    isExternalSticker: J,
    isStickerHidden: se,
    getStickerDisplayAlpha: L,
    inverseTransformErpPointAround: le,
    getRasterObjectCenterUv: ve,
    getRasterObjectTransformedErpPoints: we,
    getRasterObjectGeomCacheKey: pe,
    getSceneItemGeomCacheKey: be,
    normalizeDisplayZIndices: ye
  };
}
function qP(e) {
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
  let c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re;
  function O() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const $ = x(h);
    if ($) return $;
    const C = K(h);
    return C || (o ? _().find((b) => String((b == null ? void 0 : b.id) || "") === h) || null : p().find((b) => String((b == null ? void 0 : b.id) || "") === h) || null);
  }
  function Q() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], $ = [], C = /* @__PURE__ */ new Set();
    return h.forEach((b) => {
      const T = String(b || "").trim();
      if (!T || C.has(T)) return;
      C.add(T);
      const M = T === String(t.selectedId || "") ? O() : x(T) || K(T) || (o ? _().find((Y) => String((Y == null ? void 0 : Y.id) || "") === T) : p().find((Y) => String((Y == null ? void 0 : Y.id) || "") === T));
      M && $.push(M);
    }), $;
  }
  function ue(h = null) {
    const $ = Array.isArray(h) ? h : Q();
    if (!$ || $.length < 2) return null;
    const C = $.map((xe) => ge(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!C.length) return null;
    const b = C.flatMap((xe) => xe.corners.map((Ne) => Number((Ne == null ? void 0 : Ne.x) || 0))), T = C.flatMap((xe) => xe.corners.map((Ne) => Number((Ne == null ? void 0 : Ne.y) || 0))), M = Math.min(...b), Y = Math.max(...b), ee = Math.min(...T), Se = Math.max(...T);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (M + Y) * 0.5, y: (ee + Se) * 0.5 },
      corners: [
        { x: M, y: ee },
        { x: Y, y: ee },
        { x: Y, y: Se },
        { x: M, y: Se }
      ],
      edgeMidpoints: [
        { edge: "top", x: (M + Y) * 0.5, y: ee, a: { x: M, y: ee }, b: { x: Y, y: ee } },
        { edge: "right", x: Y, y: (ee + Se) * 0.5, a: { x: Y, y: ee }, b: { x: Y, y: Se } },
        { edge: "bottom", x: (M + Y) * 0.5, y: Se, a: { x: Y, y: Se }, b: { x: M, y: Se } },
        { edge: "left", x: M, y: (ee + Se) * 0.5, a: { x: M, y: Se }, b: { x: M, y: ee } }
      ],
      rotateStemBase: { x: (M + Y) * 0.5, y: ee },
      rotateHandle: { x: (M + Y) * 0.5, y: ee - 30 }
    };
  }
  function me(h) {
    const $ = String((h == null ? void 0 : h.id) || "").trim();
    return !!$ && Array.isArray(t.selectedIds) && t.selectedIds.includes($);
  }
  function _e() {
    const h = O();
    return h ? ie(h) || ne(h) ? "stroke" : Z(h) ? "frame" : "image" : null;
  }
  function E(h) {
    if (!h || typeof h != "object") return !1;
    if (ie(h)) {
      const $ = String(h.actionGroupId || h.id || "").trim(), C = F().find((b) => String((b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || "").trim() === $);
      return (C == null ? void 0 : C.locked) === !0;
    }
    if (ne(h)) {
      const $ = P(h.rasterObjectId || h.id || ""), C = z().find((b) => String((b == null ? void 0 : b.id) || "").trim() === $);
      return (C == null ? void 0 : C.locked) === !0;
    }
    return h.locked === !0;
  }
  function ce(h = null) {
    const $ = Array.isArray(h) ? h : Q();
    return $.length > 0 && $.every((C) => E(C));
  }
  function y(h, $) {
    const C = $ === !0;
    if (!h || typeof h != "object") return !1;
    if (ie(h)) {
      const b = String(h.actionGroupId || h.id || "").trim(), T = F().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === b);
      return !T || T.locked === C ? !1 : (T.locked = C, !0);
    }
    if (ne(h)) {
      const b = P(h.rasterObjectId || h.id || ""), T = z().find((M) => String((M == null ? void 0 : M.id) || "").trim() === b);
      return !T || T.locked === C ? !1 : (T.locked = C, !0);
    }
    return h.locked === C ? !1 : (h.locked = C, !0);
  }
  function v() {
    if (r) return;
    const h = Q();
    if (!h.length) return;
    const $ = !ce(h);
    let C = !1;
    h.forEach((b) => {
      y(b, $) && (C = !0);
    }), C && (oe(), u(), Pe(), re(), j());
  }
  function V(h) {
    le(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && ae(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && Z(h) ? a.active.selected_shot_id = h.id || null : h ? Z(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function U(h, $ = null) {
    const C = [], b = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((Y) => {
      const ee = String((Y == null ? void 0 : Y.id) || "").trim();
      !ee || b.has(ee) || (b.add(ee), C.push(ee));
    }), t.selectedIds = C, le(), s.selection = null;
    const T = String($ || "").trim();
    t.selectedId = T && C.includes(T) ? T : C[C.length - 1] || null;
    const M = O();
    a.active.selected_sticker_id = M && ae(M) && M.id || null, M && Z(M) ? a.active.selected_shot_id = M.id || null : C.length || (a.active.selected_shot_id = null);
  }
  function S() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((C, b) => ({
      kind: "frame",
      item: C,
      label: String((C == null ? void 0 : C.label) || `Frame ${b + 1}`)
    })), $ = f().map((C, b) => {
      var M, Y;
      const T = R(C) ? String(C.id || fd) : String(((Y = (M = a.assets) == null ? void 0 : M[C.asset_id]) == null ? void 0 : Y.name) || C.asset_id || C.id || `Image ${b + 1}`);
      return {
        kind: "image",
        item: C,
        label: T
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
    const h = O();
    !h || !R(h) || (h.visible = I(h), pe(), he(), oe(), u(), re(), Pe(), j());
  }
  function N() {
    if (r || l !== "stickers") return;
    const h = O();
    if (!h || !R(h)) return;
    const $ = h.initial_pose;
    if (!$ || typeof $ != "object") return;
    h.yaw_deg = Number($.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number($.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number($.hFOV_deg ?? h.hFOV_deg ?? 30);
    const C = G(Ws, () => {
      j();
    });
    C && (C.complete || C.naturalWidth || C.width) ? h.vFOV_deg = d(
      Number($.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(C.naturalWidth || C.width || 1),
      Number(C.naturalHeight || C.height || 1)
    ) : h.vFOV_deg = Number($.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number($.rot_deg ?? h.rot_deg ?? 0), oe(), u(), re(), Pe(), j();
  }
  function A(h) {
    if (!h || !R(h)) return null;
    const $ = h.initial_pose;
    if (!$ || typeof $ != "object") return null;
    const C = {
      yaw_deg: Number($.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number($.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number($.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number($.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number($.rot_deg ?? h.rot_deg ?? 0)
    }, b = G(Ws, () => {
      j();
    });
    return b && (b.complete || b.naturalWidth || b.width) && (C.vFOV_deg = d(
      C.hFOV_deg,
      Number(b.naturalWidth || b.width || 1),
      Number(b.naturalHeight || b.height || 1)
    )), C;
  }
  function W() {
    const h = O();
    if (!h || !R(h)) return !1;
    const $ = A(h);
    if (!$) return !1;
    const C = (b, T) => Math.abs(Number(b || 0) - Number(T || 0)) <= 1e-4;
    return !(C(h.yaw_deg, $.yaw_deg) && C(h.pitch_deg, $.pitch_deg) && C(h.hFOV_deg, $.hFOV_deg) && C(h.vFOV_deg, $.vFOV_deg) && C(h.rot_deg, $.rot_deg));
  }
  function J(h = {}) {
    const C = h.preservePanelValues !== !1 ? H(O()) : null;
    C && (t.panelLastValues = {
      yaw_deg: Number(C.yaw_deg || 0),
      pitch_deg: Number(C.pitch_deg || 0),
      hFOV_deg: Number(C.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(C.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(C.rot_deg || 0),
      roll_deg: Number(C.roll_deg || 0),
      aspect_id: Er(C)
    }), t.selectedId = null, t.selectedIds = [], le(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function se() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((h) => h.id === t.worldSelectedId && h.placement === "world") || null;
  }
  function L(h) {
    V(null), t.worldSelectedId = h, n.backgroundDirty = !0;
  }
  function le() {
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
    const h = O();
    (B(h) && !fe(h) || t.selectedId === ml && q() && !c() || _e() === "stroke" && !de()) && V(null), (($ = se()) == null ? void 0 : $.visible) === !1 && le();
  }
  function be() {
    if (r) return;
    const h = Q();
    if (!O() || h.length === 0 || h.some((ee) => E(ee))) return;
    te();
    const C = g(), b = new Set(h.map((ee) => ae(ee) ? `sticker:${String(ee.id || "")}` : ne(ee) ? `rasterObject:${P(ee.rasterObjectId || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || ee.id || "")}`)), T = [], M = [];
    if (C.forEach((ee) => {
      var xe, Ne;
      const Se = ee.type === "sticker" ? `sticker:${String(((xe = ee.item) == null ? void 0 : xe.id) || "")}` : ee.type === "rasterObject" ? `rasterObject:${String(((Ne = ee.item) == null ? void 0 : Ne.id) || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || "")}`;
      b.has(Se) ? T.push(ee) : M.push(ee);
    }), !T.length || T[T.length - 1] === C[C.length - 1]) return;
    [...M, ...T].forEach((ee, Se) => {
      ee.type === "sticker" && ee.item && (ee.item.z_index = Se), ee.type === "strokeGroup" && ee.item && (ee.item.z_index = Se), ee.type === "rasterObject" && ee.item && (ee.item.z_index = Se);
    }), he(), oe(), u(), Pe(), j();
  }
  function ye() {
    if (r) return;
    const h = Q();
    if (!O() || h.length === 0 || h.some((ee) => E(ee))) return;
    te();
    const C = g(), b = new Set(h.map((ee) => ae(ee) ? `sticker:${String(ee.id || "")}` : ne(ee) ? `rasterObject:${P(ee.rasterObjectId || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || ee.id || "")}`)), T = [], M = [];
    if (C.forEach((ee) => {
      var xe, Ne;
      const Se = ee.type === "sticker" ? `sticker:${String(((xe = ee.item) == null ? void 0 : xe.id) || "")}` : ee.type === "rasterObject" ? `rasterObject:${String(((Ne = ee.item) == null ? void 0 : Ne.id) || ee.id || "")}` : `strokeGroup:${String(ee.actionGroupId || "")}`;
      b.has(Se) ? T.push(ee) : M.push(ee);
    }), !T.length || T[0] === C[0]) return;
    [...T, ...M].forEach((ee, Se) => {
      ee.type === "sticker" && ee.item && (ee.item.z_index = Se), ee.type === "strokeGroup" && ee.item && (ee.item.z_index = Se), ee.type === "rasterObject" && ee.item && (ee.item.z_index = Se);
    }), he(), oe(), u(), Pe(), j();
  }
  return {
    connect(h) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: u,
        computeStickerVFov: d,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: _,
        getDisplayListObjects: g,
        getList: p,
        getPaintingGroupList: F,
        getRasterObjectItem: K,
        getRasterObjectList: z,
        getStickerUiImage: G,
        getStrokeGroupItem: x,
        hasCamera: q,
        isExternalSticker: R,
        isRasterObjectItem: ne,
        isSceneSticker: B,
        isShotItem: Z,
        isStickerHidden: I,
        isStickerItem: ae,
        isStrokeGroupItem: ie,
        markObjectVisualsDirty: he,
        normalizeDisplayZIndices: te,
        objectGeom: ge,
        paintingShown: de,
        parseRasterObjectSelectionId: P,
        poseOf: H,
        pushHistory: oe,
        requestDraw: j,
        sceneStickerShown: fe,
        updateSelectionMenu: Pe,
        updateSidePanel: re
      } = h);
    },
    getSelected: O,
    getSelectedItems: Q,
    getMultiSelectionGeom: ue,
    isItemSelected: me,
    getSelectedKind: _e,
    isItemLocked: E,
    areAllSelectedItemsLocked: ce,
    toggleSelectedLock: v,
    setSelectedItem: V,
    setSelectedItems: U,
    getCutoutInspectorItems: S,
    getSelectionItemIcon: w,
    getSelectionItemLabelData: D,
    toggleSelectedExternalStickerVisibility: k,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: W,
    clearSelection: J,
    selectedWorldSticker: se,
    selectWorldSticker: L,
    clearWorldSelection: le,
    worldStickerEditable: ve,
    applyInitialCutoutFocus: we,
    releaseHiddenSelection: pe,
    bringSelectedToFront: be,
    sendSelectedToBack: ye
  };
}
function XP(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, c, u, d, f = { key: [], projection: null };
  function m() {
    return o && a() && i.camera.projection === "erp";
  }
  function _() {
    const Q = ne({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !Q || Q.length !== 4 ? !1 : Q[0].y >= Q[3].y;
  }
  function g() {
    return dm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function p() {
    const O = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return O.some((Q, ue) => Q !== f.key[ue]) && (f = { key: O, projection: pm(g(), r.width, r.height) }), f.projection;
  }
  function F(O) {
    const Q = p().project(O);
    return Q.z > 1e-4 ? Q : null;
  }
  function K(O, Q) {
    return p().ray(O, Q);
  }
  function z() {
    const O = r.width, Q = r.height, ue = 2;
    if (O / Math.max(Q, 1) >= ue) {
      const y = Q, v = y * ue;
      return { x: (O - v) * 0.5, y: 0, w: v, h: y };
    }
    const _e = O, E = _e / ue;
    return { x: 0, y: (Q - E) * 0.5, w: _e, h: E };
  }
  function G(O) {
    return {
      lon: Math.atan2(O.x, O.z),
      lat: Math.asin(Ee(O.y, -1, 1))
    };
  }
  function x(O, Q = null) {
    const { lon: ue, lat: me } = G(O), _e = z();
    let E = _e.x + (ue / (2 * Math.PI) + 0.5) * _e.w;
    const ce = _e.y + (0.5 - me / Math.PI) * _e.h;
    if (Q !== null) {
      for (; E - Q > _e.w / 2; ) E -= _e.w;
      for (; E - Q < -_e.w / 2; ) E += _e.w;
    }
    return { x: E, y: ce, z: 1 };
  }
  function q(O) {
    const Q = c(O), ue = oo(
      Number(Q.yaw_deg || 0),
      Number(Q.pitch_deg || 0),
      Number(Q.rot_deg || Q.roll_deg || 0)
    ), me = Math.tan(Ee(Number(Q.hFOV_deg || 20), 0.1, 179) * 0.5 * gr), _e = Math.tan(Ee(Number(Q.vFOV_deg || 20), 0.1, 179) * 0.5 * gr);
    return {
      centerDir: ue.fwd,
      right: ue.right,
      up: ue.up,
      tanX: me,
      tanY: _e
    };
  }
  function R(O, Q, ue) {
    return PP(Xf(Xf(O.centerDir, Jf(O.right, Q)), Jf(O.up, ue)));
  }
  function ne(O) {
    const Q = q(O);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: me, v: _e }) => R(Q, me * Q.tanX, _e * Q.tanY));
  }
  function B(O, Q, ue) {
    const me = q(O), _e = (Q * 2 - 1) * me.tanX, E = (1 - ue * 2) * me.tanY;
    return R(me, _e, E);
  }
  function Z(O) {
    const Q = t.width / Math.max(1, r.width), ue = t.height / Math.max(1, r.height);
    return { x: O.x * Q, y: O.y * ue, w: O.w * Q, h: O.h * ue };
  }
  function I(O, Q = null, ue = null, me = null) {
    if (n.mode === "frame") {
      const _e = Q || s();
      if (!_e) return [];
      const E = ue || l(_e);
      return oe(O, _e, E);
    }
    return de(O, me);
  }
  function ae(O, Q = null, ue = null, me = null, _e = null) {
    if (!O) return null;
    if (n.mode === "unwrap") {
      const ce = de([O], _e);
      return ce[0] ? { x: ce[0].x, y: ce[0].y, z: 1 } : null;
    }
    const E = he(O);
    return E ? u(E, Q, ue, me) : null;
  }
  function ie(O, Q) {
    if (!O || !Q) return null;
    const ue = Number(Q.x || 0), me = Number(Q.y || 0);
    return B(O, ue, me);
  }
  function he(O) {
    if (!O) return null;
    const Q = (Number(O.u || 0) - 0.5) * (2 * Math.PI), ue = (0.5 - Number(O.v || 0)) * Math.PI, me = Math.cos(ue);
    return _l(me * Math.sin(Q), Math.sin(ue), me * Math.cos(Q));
  }
  function te(O, Q) {
    if (!O || !Q) return null;
    const ue = q(O), me = sc(Q, ue.centerDir);
    if (!Number.isFinite(me) || me <= 1e-6) return null;
    const _e = sc(Q, ue.right) / me, E = sc(Q, ue.up) / me;
    return {
      x: (_e / Math.max(1e-6, ue.tanX) + 1) * 0.5,
      y: (1 - E / Math.max(1e-6, ue.tanY)) * 0.5
    };
  }
  function ge(O) {
    if (!Array.isArray(O) || O.length < 3) return [];
    if (n.mode === "unwrap") {
      const ue = z();
      return O.map((me) => ({
        x: ue.x + Number(me.u || 0) * ue.w,
        y: ue.y + Number(me.v || 0) * ue.h
      }));
    }
    const Q = O.map((ue) => F(he(ue))).filter(Boolean);
    return Q.every((ue) => Number(ue.z || 0) > 0) ? Q.map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) })) : [];
  }
  function de(O, Q = null) {
    if (!Array.isArray(O) || O.length < 1) return [];
    if (n.mode === "unwrap") {
      const me = z();
      return O.map((_e) => {
        const E = (Number(_e.u || 0) % 1 + 1) % 1, ce = Q == null ? E : Number(Q || 0) + d(E, Q);
        return {
          x: me.x + ce * me.w,
          y: me.y + Number(_e.v || 0) * me.h
        };
      });
    }
    const ue = O.map((me) => F(he(me))).filter(Boolean);
    return ue.every((me) => Number(me.z || 0) > 0) ? ue.map((me) => ({ x: Number(me.x || 0), y: Number(me.y || 0) })) : [];
  }
  function P(O, Q = 160) {
    if (!Array.isArray(O) || O.length < 3) return !1;
    for (let ue = 0; ue < O.length; ue += 1) {
      const me = O[ue], _e = O[(ue + 1) % O.length];
      if (!me || !_e || !Number.isFinite(me.x) || !Number.isFinite(me.y) || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || Math.hypot(Number(_e.x) - Number(me.x), Number(_e.y) - Number(me.y)) > Q) return !1;
    }
    return !0;
  }
  function H(O, Q, ue) {
    if (!Array.isArray(O) || O.length < 3 || !Q || !ue) return [];
    const me = [];
    for (const _e of O) {
      const E = he(_e), ce = te(Q, E);
      if (!ce) return [];
      me.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return P(me, Math.max(80, Math.max(ue.w, ue.h) * 0.75)) ? me : [];
  }
  function oe(O, Q, ue) {
    if (!Array.isArray(O) || O.length < 1 || !Q || !ue) return [];
    const me = [];
    for (const _e of O) {
      const E = he(_e), ce = te(Q, E);
      ce && me.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return me;
  }
  function j(O) {
    const Q = r.getBoundingClientRect();
    return {
      x: (O.clientX - Q.left) / Q.width * r.width,
      y: (O.clientY - Q.top) / Q.height * r.height
    };
  }
  function fe(O) {
    const Q = r.getBoundingClientRect();
    return {
      x: Number(O.clientX) - Number(Q.left || 0),
      y: Number(O.clientY) - Number(Q.top || 0)
    };
  }
  function Pe(O, Q = performance.now()) {
    if (n.mode === "unwrap") {
      const E = z(), ce = (O.x - E.x) / Math.max(1, E.w), y = (O.y - E.y) / Math.max(1, E.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ce % 1 + 1) % 1,
        v: Ee(y, 0, 1),
        t: Number(Q || 0)
      };
    }
    const ue = K(O.x, O.y), { lon: me, lat: _e } = G(ue);
    return {
      targetKind: "ERP_GLOBAL",
      u: (me / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - _e / Math.PI, 0, 1),
      t: Number(Q || 0)
    };
  }
  function re(O, Q, ue = performance.now()) {
    const me = l(Q);
    if (!me) return null;
    const _e = {
      x: (Number(O.x) - me.x) / Math.max(1, me.w),
      y: (Number(O.y) - me.y) / Math.max(1, me.h)
    };
    if (_e.x < 0 || _e.x > 1 || _e.y < 0 || _e.y > 1) return null;
    const E = ie(Q, _e);
    if (!E) return null;
    const { lon: ce, lat: y } = G(E);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ce / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - y / Math.PI, 0, 1),
      t: Number(ue || 0)
    };
  }
  return {
    connect(O) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: u,
        shortestWrappedDelta: d
      } = O);
    },
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: p,
    projectDir: F,
    screenToWorldDir: K,
    getUnwrapRect: z,
    projectDirUnwrap: x,
    getStickerFrame: q,
    stickerDirFromFrame: R,
    stickerCornersDir: ne,
    stickerSampleDir: B,
    stickerCornerOrderSanity: _,
    projectEditorPoints: I,
    projectErpPointToEditor: ae,
    frameLocalPointToWorldDir: ie,
    erpPointToWorldDir: he,
    worldDirToFrameLocalPoint: te,
    projectLassoPointsToCurrentView: ge,
    projectErpLassoPointsToFrameRect: H,
    screenPos: j,
    screenPosCss: fe,
    screenPosToErpPoint: Pe,
    screenPosToFrameAsErpPoint: re,
    deviceRect: Z
  };
}
function JP(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe;
  function j(E, ce) {
    const y = String(E.actionGroupId || E.id || "").trim(), v = z(y, E.layerKind), V = s(y, E.layerKind, v), U = (V == null ? void 0 : V.centerUv) || K(y, E.layerKind, v), S = n.mode === "unwrap" ? Number((U == null ? void 0 : U.u) || 0) : null, w = [], D = n.mode === "frame" ? l() : null, k = D ? d(D) : null;
    for (const pe of v) {
      const be = (pe == null ? void 0 : pe.geometry) || null, ye = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], h = he(ye, D, k, S).filter((b) => Number.isFinite(b == null ? void 0 : b.x) && Number.isFinite(b == null ? void 0 : b.y));
      if (!h.length) continue;
      const $ = c(String((pe == null ? void 0 : pe.toolKind) || "pen")), C = Mn[$] || Mn[Cr];
      w.push({
        points: h,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((pe == null ? void 0 : pe.size) || 10) * Math.max(0.1, Number((C == null ? void 0 : C.sizeScale) ?? 1)) + 10),
        layerKind: String((pe == null ? void 0 : pe.layerKind) || E.layerKind || "paint")
      });
    }
    const N = te(U, null, D, k, S);
    if (!N) {
      const pe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, pe), pe;
    }
    const W = u(V).map((pe) => te(pe, N.x, D, k, S)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y)).map((pe) => ({ x: Number(pe.x || 0), y: Number(pe.y || 0) }));
    if (W.length < 4) {
      const pe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, pe), pe;
    }
    const J = (pe, be) => ({
      x: (Number((pe == null ? void 0 : pe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((pe == null ? void 0 : pe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: pe,
      b: be
    }), se = J(W[0], W[1]), L = J(W[1], W[2]), le = J(W[2], W[3]), ve = J(W[3], W[0]), we = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: W,
      edgeMidpoints: [
        { edge: "top", ...se },
        { edge: "right", ...L },
        { edge: "bottom", ...le },
        { edge: "left", ...ve }
      ],
      rotateStemBase: { x: se.x, y: se.y },
      rotateHandle: { x: se.x, y: se.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, we), we;
  }
  function fe(E, ce) {
    const y = n.mode === "frame" ? l() : null, v = y ? d(y) : null, V = f(E), U = n.mode === "unwrap" ? Number((V == null ? void 0 : V.u) || 0) : null, S = te(V, null, y, v, U), D = _(E).map((W) => te(W, (S == null ? void 0 : S.x) ?? null, y, v, U)).filter((W) => Number.isFinite(W == null ? void 0 : W.x) && Number.isFinite(W == null ? void 0 : W.y));
    if (!Array.isArray(D) || D.length < 4) {
      const W = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ce, W), W;
    }
    const k = D.slice(0, 4).map((W) => ({ x: Number((W == null ? void 0 : W.x) || 0), y: Number((W == null ? void 0 : W.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: k.reduce((W, J) => W + Number(J.x || 0), 0) / k.length,
        y: k.reduce((W, J) => W + Number(J.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, A), A;
  }
  function Pe(E, ce = null, y = null, v = null, V = {}) {
    if (n.mode === "frame") {
      const N = y || l(), A = v || d(N);
      if (!N || !A) return null;
      const W = N ? oe(N, E) : null;
      return W ? {
        x: Number(A.x || 0) + Number(W.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(W.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ie(E, ce);
    const U = 1e-4, S = o().project(E, U);
    if (!Number.isFinite(S.z) || S.z <= U && !(V != null && V.clipBehind)) return null;
    const w = r.width, D = r.height, k = Math.max(w, D) * 2;
    return {
      x: Ee(S.x, -k, w + k),
      y: Ee(S.y, -k, D + k),
      z: Math.max(S.z, U),
      rawZ: S.z,
      clipped: S.z <= U
    };
  }
  function re(E, ce = []) {
    if (n.mode !== "pano" || ne(E)) return 1;
    const y = ce.map((v) => Number((v == null ? void 0 : v.rawZ) ?? (v == null ? void 0 : v.z))).filter((v) => Number.isFinite(v));
    return y.length ? kP(0.035, 0.2, Math.min(...y)) : 1;
  }
  function O(E) {
    if (q(E) && !ge(E)) return { visible: !1 };
    const ce = I(E), y = Pn(Number(ce.yaw_deg || 0), Number(ce.pitch_deg || 0)), v = n.mode === "frame" ? l() : null, V = v ? d(v) : null, U = n.mode === "pano" && (ne(E) || R(E)), S = U ? { clipBehind: !0 } : null, w = Pe(y, null, v, V, S);
    if (!w) return { visible: !1 };
    const D = p(E), N = de(E).map((T) => Pe(T, w.x, v, V, S)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (N.length < 4) return { visible: !1 };
    const A = P(D, 0, D.tanY), W = P(D, 0, D.tanY + Math.max(D.tanY * 0.43, 0.053)), J = Pe(A, w.x, v, V, S);
    if (!J) return { visible: !1 };
    const se = Pe(W, (J == null ? void 0 : J.x) ?? w.x, v, V, S), L = ((se == null ? void 0 : se.x) ?? J.x) - J.x, le = ((se == null ? void 0 : se.y) ?? J.y) - J.y, ve = Math.hypot(L, le) || 1, we = {
      x: J.x + L / ve * 30,
      y: J.y + le / ve * 30
    }, pe = Pe(P(D, 0, D.tanY), w.x, v, V, S), be = Pe(P(D, D.tanX, 0), w.x, v, V, S), ye = Pe(P(D, 0, -D.tanY), w.x, v, V, S), h = Pe(P(D, -D.tanX, 0), w.x, v, V, S);
    if (!pe || !be || !ye || !h) return { visible: !1 };
    const $ = [
      w,
      ...N,
      J,
      se,
      pe,
      be,
      ye,
      h
    ];
    if (U && !$.some((T) => Number((T == null ? void 0 : T.rawZ) ?? (T == null ? void 0 : T.z)) > 1e-4)) return { visible: !1 };
    const C = re(E, $), b = [
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
      corners: N.map((T) => ({ x: T.x, y: T.y })),
      edgeMidpoints: b,
      rotateStemBase: { x: J.x, y: J.y },
      rotateHandle: we,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: C,
      visible: !0
    };
  }
  function Q(E) {
    if (t && R(E) && G()) return { visible: !1 };
    if (!Z() && (B(E) || x(E))) return { visible: !1 };
    if (B(E)) {
      const V = String(E.actionGroupId || E.id || "").trim(), U = F(V, E.layerKind), S = n._strokeGeomCache.get(U);
      return S || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), j(E, U));
    }
    if (x(E)) {
      const V = m(E), U = n._strokeGeomCache.get(V);
      return U || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), fe(E, V));
    }
    const ce = g(E), y = n._strokeGeomCache.get(ce);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const v = O(E);
    return n._strokeGeomCache.set(ce, v), v;
  }
  function ue(E, ce, y, v = null) {
    const V = [];
    for (let U = 0; U <= y; U += 1) {
      const S = U / y;
      let w = 0, D = 0;
      ce === 0 ? (w = S, D = 0) : ce === 1 ? (w = 1, D = S) : ce === 2 ? (w = 1 - S, D = 1) : (w = 0, D = 1 - S);
      const k = H(E, w, D), N = n.mode === "unwrap" ? ie(k, v) : ae(k);
      N && V.push(N);
    }
    return V;
  }
  function me() {
    const E = [...Array.isArray(i.shots) ? i.shots : []], ce = [...a()].sort((y, v) => Number(y.z_index || 0) - Number(v.z_index || 0));
    return [...E, ...ce];
  }
  function _e() {
    const E = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((y, v) => Number(v.z_index || 0) - Number(y.z_index || 0)), ...E];
  }
  return {
    connect(E) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: u,
        getFrameViewRect: d,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: m,
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: p,
        getStrokeGeomCacheKey: F,
        getStrokeGroupCenterUv: K,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: G,
        isRasterObjectItem: x,
        isSceneSticker: q,
        isShotItem: R,
        isStickerItem: ne,
        isStrokeGroupItem: B,
        paintingShown: Z,
        poseOf: I,
        projectDir: ae,
        projectDirUnwrap: ie,
        projectEditorPoints: he,
        projectErpPointToEditor: te,
        sceneStickerShown: ge,
        stickerCornersDir: de,
        stickerDirFromFrame: P,
        stickerSampleDir: H,
        worldDirToFrameLocalPoint: oe
      } = E);
    },
    projectSceneItemDir: Pe,
    objectGeom: Q,
    sampleStickerEdge: ue,
    getCutoutSelectableItemsForDisplay: me,
    getCutoutSelectableItemsForHit: _e
  };
}
const qa = /* @__PURE__ */ new Map();
function ZP(e) {
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
  let c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae;
  function ie(S = n.interaction) {
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
        revision: `${F()}:${te()}`
      });
    } catch {
      S = null;
    }
    return S;
  }
  function te() {
    var N, A, W, J, se, L, le;
    const S = n.interaction, w = String((S == null ? void 0 : S.kind) || "");
    if (!ie(S)) return "";
    if (w === "paint_stroke" || w === "paint_lasso_fill") {
      const ve = ((N = S == null ? void 0 : S.stroke) == null ? void 0 : N.geometry) || null, we = String(((A = S == null ? void 0 : S.stroke) == null ? void 0 : A.layerKind) || ""), pe = ((W = ve == null ? void 0 : ve.rawPoints) == null ? void 0 : W.length) ?? ((J = ve == null ? void 0 : ve.points) == null ? void 0 : J.length) ?? 0, be = String((S == null ? void 0 : S._livePreviewToken) || "");
      return `_${we || "paint"}_${w}_live${be}_${pe}_${n.livePaintInteractionRevision}`;
    }
    const D = String(((se = S == null ? void 0 : S.item) == null ? void 0 : se.actionGroupId) || ""), k = String(((L = S == null ? void 0 : S.item) == null ? void 0 : L.rasterObjectId) || ((le = S == null ? void 0 : S.item) == null ? void 0 : le.id) || "");
    return `_${w}_${D || k || "active"}_${n.livePaintInteractionRevision}`;
  }
  function ge(S, w = null) {
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
    const k = ge(S, () => {
      const le = a.get(w);
      le && (le.ready = !1), Z({ localOnly: !0 });
    });
    if (!k || !(k.complete || k.width || k.naturalWidth)) return null;
    const N = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (N < 1 || A < 1) return null;
    const W = mn({ label: "editor.image-pixels" });
    W.width = N, W.height = A;
    const J = W.getContext("2d", { willReadFrequently: !0 });
    if (!J) return null;
    J.clearRect(0, 0, N, A), J.drawImage(k, 0, 0, N, A);
    const se = J.getImageData(0, 0, N, A).data, L = { canvas: W, width: N, height: A, alpha: se, ready: !0 };
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
    ), J = Number(D.u1 || 0) - Number(D.u0 || 0), se = Number(D.v1 || 0) - Number(D.v0 || 0);
    if (!(J > 1e-6) || !(se > 1e-6)) return null;
    const L = ae(Number(W.u || 0), Number(D.u0 || 0)) / J, le = (Number(W.v || 0) - Number(D.v0 || 0)) / se;
    if (L < 0 || L > 1 || le < 0 || le > 1) return 0;
    const ve = de(S);
    if (!ve) return null;
    const we = Ee(Math.floor(L * ve.width), 0, ve.width - 1), pe = Ee(Math.floor(le * ve.height), 0, ve.height - 1);
    return Number(ve.alpha[(pe * ve.width + we) * 4 + 3] || 0);
  }
  function H(S, w, D, k = null) {
    if (!(w != null && w.visible) || !Wr(D, w.corners)) return !1;
    const N = k || I(D, performance.now()), A = P(S, N);
    return A === null ? !0 : A > 8;
  }
  function oe() {
    var k, N, A, W, J, se, L, le;
    const S = ((N = (k = n.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : N.call(k, p(!1))) || null, w = Math.max(1, Number(((A = S == null ? void 0 : S.descriptor) == null ? void 0 : A.width) || ((J = (W = S == null ? void 0 : S.displayPaint) == null ? void 0 : W.canvas) == null ? void 0 : J.width) || 2048)), D = Math.max(1, Number(((se = S == null ? void 0 : S.descriptor) == null ? void 0 : se.height) || ((le = (L = S == null ? void 0 : S.displayPaint) == null ? void 0 : L.canvas) == null ? void 0 : le.height) || 1024));
    return { width: w, height: D };
  }
  function j() {
    var pe, be, ye;
    const S = n.interaction;
    if ((S == null ? void 0 : S.kind) !== "paint_stroke") return null;
    const w = (S == null ? void 0 : S.stroke) || null;
    if (!w || String((w == null ? void 0 : w.layerKind) || "") !== "paint" || String((w == null ? void 0 : w.toolKind) || "") !== "eraser") return null;
    const D = f(), k = `${te()}:${D.width}:${D.height}`;
    if (((pe = n._activePaintEraserPreviewInfo) == null ? void 0 : pe.cacheKey) === k)
      return n._activePaintEraserPreviewInfo.value || null;
    const N = cn(w), A = (N == null ? void 0 : N.geometry) || null;
    if (A && String(A.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(A.rawPoints) && A.rawPoints.length ? A.rawPoints : Array.isArray(A.points) ? A.points : [];
      A.processedPoints = R(h, N.targetSpace, !0);
    }
    const W = u(D.width, D.height, { readback: !0 });
    if (!ne(W, N, { w: D.width, h: D.height })) return null;
    const J = ((ye = (be = W.ctx) == null ? void 0 : be.getImageData(0, 0, D.width, D.height)) == null ? void 0 : ye.data) || null;
    if (!J) return null;
    let se = D.width, L = D.height, le = -1, ve = -1;
    for (let h = 0; h < D.height; h += 1)
      for (let $ = 0; $ < D.width; $ += 1)
        J[(h * D.width + $) * 4 + 3] <= 8 || ($ < se && (se = $), h < L && (L = h), $ > le && (le = $), h > ve && (ve = h));
    if (le < se || ve < L)
      return n._activePaintEraserPreviewInfo = { cacheKey: k, value: null }, null;
    const we = {
      surface: W,
      bounds: { minX: se, minY: L, maxX: le, maxY: ve },
      key: `${k}:${se}:${L}:${le}:${ve}`
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
      const A = S.item.bbox, W = ((N = S.item) == null ? void 0 : N.transform) || {}, J = Number(A.u0 || 0) + Number(W.du || 0), se = Number(A.u1 || 0) + Number(W.du || 0), L = Number(A.v0 || 0) + Number(W.dv || 0), le = Number(A.v1 || 0) + Number(W.dv || 0);
      return {
        minX: Math.floor((J % 1 + 1) % 1 * w),
        maxX: Math.ceil((se % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(L, 0, 1) * D),
        maxY: Math.ceil(Ee(le, 0, 1) * D),
        wraps: se - J >= 1 || J < 0 || se > 1
      };
    }
    if (S.type === "strokeGroup") {
      const A = z(S.actionGroupId, "paint"), W = d(S.actionGroupId, "paint", A);
      if (!W) return null;
      const J = W.centerUv.u - W.halfW, se = W.centerUv.u + W.halfW, L = W.centerUv.v - W.halfH, le = W.centerUv.v + W.halfH;
      return {
        minX: Math.floor((J % 1 + 1) % 1 * w),
        maxX: Math.ceil((se % 1 + 1) % 1 * w),
        minY: Math.floor(Ee(L, 0, 1) * D),
        maxY: Math.ceil(Ee(le, 0, 1) * D),
        wraps: se - J >= 1 || J < 0 || se > 1
      };
    }
    return null;
  }
  function re(S, w, D) {
    if (!S || !w) return !1;
    const k = (W) => W.wraps ? [
      { minX: 0, maxX: W.maxX, minY: W.minY, maxY: W.maxY, wraps: !1 },
      { minX: W.minX, maxX: D - 1, minY: W.minY, maxY: W.maxY, wraps: !1 }
    ] : [W], N = k(S), A = k(w);
    return N.some((W) => A.some((J) => !(W.maxX < J.minX || J.maxX < W.minX || W.maxY < J.minY || J.maxY < W.minY)));
  }
  function O(S, w, D) {
    var T, M, Y, ee, Se, xe, Ne;
    if (!S || !w || !((T = D == null ? void 0 : D.surface) != null && T.canvas) || w.type !== "rasterObject") return S;
    const k = Number(S.width || D.surface.canvas.width || 0), N = Number(S.height || D.surface.canvas.height || 0);
    if (k < 1 || N < 1) return S;
    const A = Pe(w, k, N);
    if (A && !re(A, D.bounds, k)) return S;
    const W = String(((M = w.item) == null ? void 0 : M.id) || w.id || ""), J = ((Y = w.item) == null ? void 0 : Y.transform) || {}, se = `${D.key}:${W}:${k}:${N}:${Number(J.du || 0).toFixed(6)}:${Number(J.dv || 0).toFixed(6)}:${Number(J.rot_deg || 0).toFixed(3)}:${Number(J.scale || 1).toFixed(4)}`, L = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (L.has(se)) return L.get(se);
    const le = Ee(Math.floor(Number(((ee = D.bounds) == null ? void 0 : ee.minX) || 0)), 0, Math.max(0, k - 1)), ve = Ee(Math.floor(Number(((Se = D.bounds) == null ? void 0 : Se.minY) || 0)), 0, Math.max(0, N - 1)), we = Ee(Math.ceil(Number(((xe = D.bounds) == null ? void 0 : xe.maxX) || 0)), le, Math.max(0, k - 1)), pe = Ee(Math.ceil(Number(((Ne = D.bounds) == null ? void 0 : Ne.maxY) || 0)), ve, Math.max(0, N - 1)), be = Math.max(1, we - le + 1), ye = Math.max(1, pe - ve + 1), h = u(k, N, { readback: !0 });
    h.ctx.clearRect(0, 0, k, N), h.ctx.drawImage(S, 0, 0);
    const $ = h.ctx.getImageData(le, ve, be, ye);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(D.surface.canvas, 0, 0), h.ctx.restore();
    const C = h.ctx.getImageData(le, ve, be, ye);
    let b = !1;
    for (let Te = 0; Te < be * ye; Te += 1) {
      const ze = $.data[Te * 4 + 3], je = C.data[Te * 4 + 3];
      if (ze > je) {
        b = !0;
        break;
      }
    }
    return b ? (L.size > 64 && L.clear(), L.set(se, h.canvas), h.canvas) : (L.set(se, S), S);
  }
  function Q(S, w = null) {
    const D = q((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), k = (S == null ? void 0 : S.bbox) || null;
    if (!D || !k) return null;
    const N = ge(S, w);
    if (!N || !(N.complete || N.width || N.naturalWidth)) return null;
    const { width: A, height: W } = oe(), J = (S == null ? void 0 : S.transform) || {}, se = [
      D,
      A,
      W,
      k.u0,
      k.v0,
      k.u1,
      k.v1,
      J.du,
      J.dv,
      J.rot_deg,
      J.scale,
      K()
    ].join(":"), L = o.get(se);
    if (L) return L;
    o.size > 64 && o.clear();
    const le = mn({ label: "editor.raster-erp" });
    le.width = A, le.height = W;
    const ve = le.getContext("2d");
    if (!ve) return null;
    const we = Number(k.u0 || 0) * A, pe = Number(k.v0 || 0) * W, be = Math.max(1, (Number(k.u1 || 0) - Number(k.u0 || 0)) * A), ye = Math.max(1, (Number(k.v1 || 0) - Number(k.v0 || 0)) * W), h = we + be * 0.5 + Number(J.du || 0) * A, $ = pe + ye * 0.5 + Number(J.dv || 0) * W, C = Number(J.rot_deg || 0) * gr, b = Math.max(0.01, Number(J.scale || 1));
    for (const T of [-A, 0, A])
      ve.save(), ve.translate(h + T, $), ve.rotate(C), ve.scale(b, b), ve.drawImage(N, -be * 0.5, -ye * 0.5, be, ye), ve.restore();
    return o.set(se, le), le;
  }
  async function ue(S, w) {
    const D = await new Promise((J) => S.toBlob(J, "image/png")), k = new FormData();
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
  let me = null, _e = !1;
  function E() {
    if (r) return !1;
    const S = Zf(l.painting), { width: w, height: D } = m();
    return q1(l.painting_layer, { paintCount: S.totalPaintCount, maskCount: S.totalMaskCount, width: w, height: D, nodeId: String(i.id ?? "0") });
  }
  function ce() {
    const S = String(i.id ?? "0"), w = qa.get(S);
    if (_e && w) return w;
    const D = (async () => {
      var A, W, J, se, L, le, ve, we, pe, be, ye, h;
      const k = F(), N = Zf(l.painting);
      if (N.totalPaintCount <= 0 && N.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, me = k, c());
        return;
      }
      if (me !== k && !_e) {
        _e = !0;
        try {
          B();
          const $ = p(!1), C = ((W = (A = n.paintEngine) == null ? void 0 : A.getErpTarget) == null ? void 0 : W.call(A, $)) || null, b = ((J = C == null ? void 0 : C.displayPaint) == null ? void 0 : J.canvas) || null, T = ((se = C == null ? void 0 : C.committedMask) == null ? void 0 : se.canvas) || null, M = Math.max(1, Number(((L = C == null ? void 0 : C.descriptor) == null ? void 0 : L.width) || (b == null ? void 0 : b.width) || (T == null ? void 0 : T.width) || 2048)), Y = Math.max(1, Number(((le = C == null ? void 0 : C.descriptor) == null ? void 0 : le.height) || (b == null ? void 0 : b.height) || (T == null ? void 0 : T.height) || 1024));
          (!b && N.totalPaintCount > 0 || !T && N.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((ve = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ve.width) || 0) !== M || Number(((we = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.height) || 0) !== Y) && (n._paintLayerSyncBlankSurface = u(M, Y)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, M, Y));
          const ee = b || N.totalPaintCount > 0 && ((pe = n._paintLayerSyncBlankSurface) == null ? void 0 : pe.canvas) || null, Se = T || N.totalMaskCount > 0 && ((be = n._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null;
          if (!ee && !Se) return;
          let xe = null, Ne = null;
          const Te = [];
          if (N.totalPaintCount > 0) {
            xe = await ue(ee, `pano_paint_${S}.png`);
            for (const ze of $) {
              const je = String(ze || "").trim();
              if (!je) continue;
              const We = ((h = (ye = n.paintEngine) == null ? void 0 : ye.getGroupDisplayCanvas) == null ? void 0 : h.call(ye, je)) || null;
              if (!We) continue;
              const Re = je.replace(/[^a-zA-Z0-9_-]+/g, "_"), X = await ue(We, `pano_group_${S}_${Re}.png`);
              X && Te.push({
                id: je,
                actionGroupId: je,
                image: X
              });
            }
          }
          N.totalMaskCount > 0 && (Ne = await ue(Se, `pano_mask_${S}.png`)), k === F() && (l.painting_layer = {
            paint: xe,
            mask: Ne,
            groups: Te,
            revision: k
          }, me = k, c());
        } catch ($) {
          throw $;
        } finally {
          _e = !1;
        }
      }
    })();
    return qa.set(S, D), D.finally(() => {
      qa.get(S) === D && qa.delete(S);
    }), D;
  }
  function y(S) {
    var W;
    const w = ((W = n.paintEngine) == null ? void 0 : W.getMaskDisplayCanvas()) || null;
    if (!w) return S;
    const D = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, k = S.reduce((J, se) => Math.max(J, Number((se == null ? void 0 : se.zIndex) || 0)), -1), N = (Array.isArray(l.stickers) ? l.stickers : []).reduce((J, se) => Math.max(J, Number((se == null ? void 0 : se.z_index) || 0)), -1), A = Math.max(k, N);
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
        const J = ((N = (k = n.paintEngine) == null ? void 0 : k.getGroupDisplayCanvas) == null ? void 0 : N.call(k, W)) || null;
        if (!J) continue;
        D.push({
          id: `paint_group:${W}`,
          source: J,
          revision: `${_()}:${W}`,
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((A == null ? void 0 : A.type) === "rasterObject") {
        const W = A.item || null, J = q((W == null ? void 0 : W.id) || A.id || "");
        if (!J) continue;
        const se = Q(W, () => Z());
        if (!se) continue;
        const L = O(se, A, w), le = (W == null ? void 0 : W.transform) || {};
        D.push({
          id: `raster:${J}`,
          source: L,
          revision: [
            F(),
            (w == null ? void 0 : w.key) || "",
            J,
            Number(le.du || 0).toFixed(6),
            Number(le.dv || 0).toFixed(6),
            Number(le.rot_deg || 0).toFixed(3),
            Number(le.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((A == null ? void 0 : A.z_index) || 0),
          opacity: 1,
          visible: (W == null ? void 0 : W.visible) !== !1
        });
      }
    }
    return y(D);
  }
  function V() {
    return x() ? v().filter((S) => S.visible !== !1).map((S) => ({ id: S.id, media: S.source, revision: S.revision, opacity: S.opacity, zIndex: S.zIndex })) : [];
  }
  function U() {
    l.painting_layer !== null && (l.painting_layer = null), me = "";
  }
  return {
    connect(S) {
      ({
        commitState: c,
        createRasterSurface: u,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: m,
        getDisplayPaintRevisionKey: _,
        getOrderedDisplayListObjects: g,
        getOrderedPaintGroupIds: p,
        getPaintingCompositeRevisionKey: F,
        getPaintingRevisionKey: K,
        getStrokeGroupStrokes: z,
        inverseTransformErpPointAround: G,
        paintingShown: x,
        parseRasterObjectSelectionId: q,
        processFreehandPoints: R,
        rasterizeStrokeToSurface: ne,
        rebuildPaintEngineIfNeeded: B,
        requestDraw: Z,
        screenPosToErpPoint: I,
        shortestWrappedDelta: ae
      } = S);
    },
    getSharedLivePaintSurface: he,
    getLivePaintRevisionSuffix: te,
    isPaintCompositeInteraction: ie,
    hitRasterObjectAt: H,
    invalidateLivePaintPreviewCaches: fe,
    buildRasterObjectEditCanvas: Q,
    needsPaintingLayerSync: E,
    syncPaintingLayerAsync: ce,
    invalidatePaintingLayerState: U,
    buildEditorViewPaintLayers: V
  };
}
function QP(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(re) {
    return !re || typeof re != "object" ? { x: 0, y: 0 } : { x: Number((re == null ? void 0 : re.u) || 0), y: Number((re == null ? void 0 : re.v) || 0) };
  }
  function c(re, O, Q, ue = {}) {
    return { ...{
      ...re,
      t: Number((re == null ? void 0 : re.t) || 0),
      widthScale: f(re, "widthScale", 1),
      pressureLike: f(re, "pressureLike", 1)
    }, ...ue, u: O, v: Q };
  }
  function u(re, O = !1) {
    return O ? 12e-4 : 18e-4;
  }
  function d(re, O, Q = !1) {
    if (!Array.isArray(re) || !re.length) return [];
    const ue = String((O == null ? void 0 : O.kind) || "") === "ERP_GLOBAL", me = /* @__PURE__ */ new WeakMap();
    if (ue) {
      let k = null;
      re.forEach((N) => {
        const A = Number((N == null ? void 0 : N.u) || 0), W = Number((N == null ? void 0 : N.v) || 0), J = (A % 1 + 1) % 1, se = k == null ? J : k + s(J, (k % 1 + 1) % 1);
        me.set(N, { x: se, y: W }), k = se;
      });
    }
    const _e = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : me.get(k) || l(k), E = (k, N, A, W = {}) => {
      const J = ue ? (Number(N) % 1 + 1) % 1 : Number(N), se = c(k, J, A, W);
      return me.set(se, { x: Number(N), y: Number(A) }), se;
    }, ce = (k, N, A) => {
      const W = _e(k), J = _e(N);
      return E(k, jn(W.x, J.x, A), jn(W.y, J.y, A), {
        t: jn(Number((k == null ? void 0 : k.t) || 0), Number((N == null ? void 0 : N.t) || 0), A),
        widthScale: jn(f(k, "widthScale", 1), f(N, "widthScale", 1), A),
        pressureLike: jn(f(k, "pressureLike", 1), f(N, "pressureLike", 1), A)
      });
    };
    if (re.length === 1) {
      const k = _e(re[0]);
      return [E(re[0], k.x, k.y)];
    }
    const y = u(O, Q), v = (k, N) => {
      const A = [0];
      for (let pe = 1; pe < k.length; pe += 1) {
        const be = _e(k[pe - 1]), ye = _e(k[pe]);
        A.push(A[pe - 1] + Math.hypot(ye.x - be.x, ye.y - be.y));
      }
      const W = A[A.length - 1] || 0;
      if (W <= 1e-8) {
        const pe = k[0], be = _e(pe);
        return [E(pe, be.x, be.y)];
      }
      const J = [];
      let se = 0;
      for (let pe = 0; pe <= W + 1e-9; pe += N) {
        for (; se < A.length - 2 && A[se + 1] < pe; ) se += 1;
        const be = A[se], ye = A[se + 1], h = Math.max(1e-8, ye - be);
        J.push(ce(k[se], k[se + 1], Ee((pe - be) / h, 0, 1)));
      }
      const L = k[k.length - 1], le = _e(L), ve = J[J.length - 1], we = ve ? _e(ve) : null;
      return (!we || Math.hypot(we.x - le.x, we.y - le.y) > N * 0.35) && J.push(E(L, le.x, le.y)), J;
    }, V = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const N = _e(k[0]), A = [E(k[0], N.x, N.y)];
      for (let se = 0; se < k.length - 1; se += 1) {
        const L = k[se], le = k[se + 1], ve = _e(L), we = _e(le), pe = E(
          L,
          ve.x * 0.75 + we.x * 0.25,
          ve.y * 0.75 + we.y * 0.25,
          {
            t: Number(L.t || 0) * 0.75 + Number(le.t || 0) * 0.25,
            widthScale: f(L, "widthScale", 1) * 0.75 + f(le, "widthScale", 1) * 0.25,
            pressureLike: f(L, "pressureLike", 1) * 0.75 + f(le, "pressureLike", 1) * 0.25
          }
        ), be = E(
          L,
          ve.x * 0.25 + we.x * 0.75,
          ve.y * 0.25 + we.y * 0.75,
          {
            t: Number(L.t || 0) * 0.25 + Number(le.t || 0) * 0.75,
            widthScale: f(L, "widthScale", 1) * 0.25 + f(le, "widthScale", 1) * 0.75,
            pressureLike: f(L, "pressureLike", 1) * 0.25 + f(le, "pressureLike", 1) * 0.75
          }
        );
        A.push(pe, be);
      }
      const W = k[k.length - 1], J = _e(W);
      return A.push(E(W, J.x, J.y)), A;
    }, U = v(re, y);
    if (U.length < 3) return U;
    const S = Q ? 2 : 1;
    let w = U.slice();
    for (let k = 0; k < S; k += 1) w = V(w);
    return v(w, Math.max(y * 0.75, 55e-5));
  }
  function f(re, O, Q = 1) {
    const ue = Number(re == null ? void 0 : re[O]);
    return Number.isFinite(ue) ? Math.max(0, ue) : Q;
  }
  function m(re) {
    const O = Number(re == null ? void 0 : re.radiusValue);
    if (Number.isFinite(O) && O > 0) {
      const Q = String((re == null ? void 0 : re.radiusModel) || "").trim() || "erp_uv_norm";
      return Q === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((re == null ? void 0 : re.size) || 10) * 0.5 / 2048)
      } : {
        model: Q,
        value: O
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((re == null ? void 0 : re.size) || 10) * 0.5 / 2048)
    };
  }
  function _(re, O, Q = {}) {
    const ue = mn({ label: "editor.raster-surface" });
    ue.width = Math.max(1, Math.round(re)), ue.height = Math.max(1, Math.round(O));
    const me = ue.getContext("2d", Q.readback ? { willReadFrequently: !0 } : void 0);
    return me && (me.clearRect(0, 0, ue.width, ue.height), me.imageSmoothingEnabled = !0), { canvas: ue, ctx: me };
  }
  function g() {
    const re = Z();
    return `${String(t.paintStrokeRevision)}:${re.width}x${re.height}`;
  }
  function p() {
    const re = Z();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${re.width}x${re.height}`;
  }
  function F() {
    const re = i(), O = p();
    return re ? `${O}:${re}` : O;
  }
  function K() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function G() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function x() {
    var re, O;
    t.paintEngineRevisionKey = null, (O = (re = t.paintEngine) == null ? void 0 : re.rebuildCommitted) == null || O.call(re, n), t.paintEngineRevisionKey = g();
  }
  function q() {
    G(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function R({ rebuildPaintEngine: re = !1 } = {}) {
    o(), K(), q(), re && x();
  }
  function ne() {
    o(), z(), q();
  }
  function B() {
    var ue;
    const re = Z(), O = `${re.width}x${re.height}`;
    t.paintEngineDescriptorKey !== O && (t.paintEngine = Au(re), t.paintEngineDescriptorKey = O, t.paintEngineRevisionKey = "");
    const Q = g();
    t.paintEngineRevisionKey !== Q && (t.paintEngineRevisionKey = Q, (ue = t.paintEngine) == null || ue.rebuildCommitted(n));
  }
  function Z() {
    const re = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: re,
      height: Math.max(1, Math.round(re * 0.5))
    };
  }
  function I() {
    return Z();
  }
  function ae(re, O, Q, ue, me = null) {
    const _e = m(re), E = f(O, "widthScale", 1) * f(O, "pressureLike", 1);
    return _e.model === "erp_uv_norm" ? Math.max(0.5, _e.value * Q * E) : _e.model === "world_angle" ? me ? Math.max(0.5, _e.value / Math.max(1e-6, Number(me.hFOV_deg || 90) * gr) * Q * E) : Math.max(0.5, _e.value / (2 * Math.PI) * Q * E) : Math.max(0.5, Number((re == null ? void 0 : re.size) || 10) * 0.5 * E);
  }
  function ie(re, O, Q = {}) {
    const ue = String((O == null ? void 0 : O.layerKind) || "paint"), me = String((O == null ? void 0 : O.toolKind) || "pen"), _e = Q.preview === !0, E = _e ? 0.78 : 1;
    if (re.globalAlpha = me === "marker" ? 0.7 * E : 1, ue === "mask") {
      re.fillStyle = _e ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (me === "eraser") {
      re.globalCompositeOperation = "destination-out", re.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ce = String((O == null ? void 0 : O.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (O == null ? void 0 : O.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = _e ? Math.max(0.28, Number(ce.a ?? 1) * 0.88) : Math.max(0.12, Number(ce.a ?? 1));
    re.fillStyle = `rgba(${Math.round(Number(ce.r || 0) * 255)}, ${Math.round(Number(ce.g || 0) * 255)}, ${Math.round(Number(ce.b || 0) * 255)}, ${y})`;
  }
  function he(re, O, Q) {
    const ue = Math.max(0.5, Math.min(Q, Number((O == null ? void 0 : O.radiusPx) || 0.5)));
    !Number.isFinite(O == null ? void 0 : O.x) || !Number.isFinite(O == null ? void 0 : O.y) || !Number.isFinite(ue) || (re.beginPath(), re.arc(Number(O.x || 0), Number(O.y || 0), ue, 0, Math.PI * 2), re.fill());
  }
  function te(re, O, Q, ue, me = {}) {
    if (!re || !Array.isArray(O) || !O.length) return;
    const _e = Math.max(ue.w, ue.h) * 0.25;
    re.save(), ie(re, Q, me);
    const E = (ce) => he(re, ce, _e);
    if (O.length === 1) {
      E(O[0]), re.restore();
      return;
    }
    for (let ce = 0; ce < O.length - 1; ce += 1) {
      const y = O[ce], v = O[ce + 1];
      if (!y || !v) continue;
      const V = Number(y.x || 0), U = Number(y.y || 0), S = Number(v.x || 0), w = Number(v.y || 0), D = Math.max(0.5, Math.min(_e, Number(y.radiusPx || 0.5))), k = Math.max(0.5, Math.min(_e, Number(v.radiusPx || 0.5)));
      if (!Number.isFinite(V) || !Number.isFinite(U) || !Number.isFinite(S) || !Number.isFinite(w) || !Number.isFinite(D) || !Number.isFinite(k)) continue;
      const N = S - V, A = w - U, W = Math.hypot(N, A);
      if (!Number.isFinite(W) || W < 1e-6) {
        E(y);
        continue;
      }
      if (W > Math.max(ue.w, ue.h) * 0.5) continue;
      const J = Math.max(0.5, Math.min(D, k)), se = Math.max(0.35, Math.min(J * 0.4, 2.25)), L = Math.max(1, Math.ceil(W / se));
      for (let le = 0; le <= L; le += 1) {
        const ve = le / L;
        E({
          x: jn(V, S, ve),
          y: jn(U, w, ve),
          radiusPx: jn(D, k, ve)
        });
      }
    }
    E(O[O.length - 1]), re.restore();
  }
  function ge(re, O, Q, ue) {
    te(re, O, Q, ue, { preview: !1 });
  }
  function de(re, O, Q, ue, me) {
    var ce, y, v, V;
    if (!re || !Array.isArray(O) || O.length < 3) return;
    const _e = "u", E = "v";
    if (re.save(), String((Q == null ? void 0 : Q.layerKind) || "") === "mask")
      re.fillStyle = "rgba(255,255,255,1)";
    else if (String((Q == null ? void 0 : Q.toolKind) || "") === "eraser")
      re.globalCompositeOperation = "destination-out", re.fillStyle = "rgba(0,0,0,1)";
    else {
      const U = (Q == null ? void 0 : Q.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      re.fillStyle = `rgba(${Math.round(Number(U.r || 0) * 255)}, ${Math.round(Number(U.g || 0) * 255)}, ${Math.round(Number(U.b || 0) * 255)}, ${Number(U.a ?? 1)})`;
    }
    re.beginPath(), re.moveTo(Number(((ce = O[0]) == null ? void 0 : ce[_e]) || 0) * ue.w, Number(((y = O[0]) == null ? void 0 : y[E]) || 0) * ue.h);
    for (let U = 1; U < O.length; U += 1)
      re.lineTo(Number(((v = O[U]) == null ? void 0 : v[_e]) || 0) * ue.w, Number(((V = O[U]) == null ? void 0 : V[E]) || 0) * ue.h);
    re.closePath(), re.fill(), re.restore();
  }
  function P(re) {
    const O = (re == null ? void 0 : re.geometry) || null;
    return O ? String(O.geometryKind || "") === "lasso_fill" ? Array.isArray(O.points) ? O.points : [] : Array.isArray(O.processedPoints) && O.processedPoints.length ? O.processedPoints : Array.isArray(O.rawPoints) && O.rawPoints.length ? O.rawPoints : Array.isArray(O.points) ? O.points : [] : [];
  }
  function H(re, O) {
    const Q = P(re);
    return !Array.isArray(Q) || !Q.length ? [] : Q.map((ue) => ({
      x: Number((ue == null ? void 0 : ue.u) || 0) * Number((O == null ? void 0 : O.w) || 1),
      y: Number((ue == null ? void 0 : ue.v) || 0) * Number((O == null ? void 0 : O.h) || 1),
      radiusPx: ae(re, ue, Number((O == null ? void 0 : O.w) || 1), Number((O == null ? void 0 : O.h) || 1))
    }));
  }
  function oe(re, O, Q = null) {
    var ce, y, v, V;
    if (!(re != null && re.ctx) || !O) return !1;
    const ue = Q || { w: Number(((ce = re.canvas) == null ? void 0 : ce.width) || 0), h: Number(((y = re.canvas) == null ? void 0 : y.height) || 0) }, me = String((O == null ? void 0 : O.toolKind) || "") === "eraser" ? {
      ...O,
      layerKind: "mask",
      toolKind: String(((v = O == null ? void 0 : O.geometry) == null ? void 0 : v.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : O;
    if (String(((V = O == null ? void 0 : O.geometry) == null ? void 0 : V.geometryKind) || "") === "lasso_fill")
      return de(re.ctx, P(me), me, ue), !0;
    const E = H(me, ue);
    return E.length ? (ge(re.ctx, E, me, ue), !0) : !1;
  }
  function j(re, O, Q, ue = 8) {
    const me = new Uint8Array(O * Q), _e = [], E = new Int32Array(O * Q), ce = new Int32Array(O * Q);
    for (let y = 0; y < Q; y += 1)
      for (let v = 0; v < O; v += 1) {
        const V = y * O + v;
        if (me[V] || re[V] <= ue) continue;
        let U = 0, S = 0;
        E[S] = v, ce[S] = y, S += 1, me[V] = 1;
        const w = [];
        let D = v, k = y, N = v, A = y;
        for (; U < S; ) {
          const W = E[U], J = ce[U];
          U += 1, w.push({ x: W, y: J }), W < D && (D = W), J < k && (k = J), W > N && (N = W), J > A && (A = J);
          const se = [
            [(W - 1 + O) % O, J],
            [(W + 1) % O, J],
            [W, J - 1],
            [W, J + 1]
          ];
          for (const [L, le] of se) {
            if (le < 0 || le >= Q) continue;
            const ve = le * O + L;
            me[ve] || re[ve] <= ue || (me[ve] = 1, E[S] = L, ce[S] = le, S += 1);
          }
        }
        _e.push({ pixels: w, minX: D, minY: k, maxX: N, maxY: A });
      }
    return _e;
  }
  function fe(re, O) {
    const Q = [...new Set((Array.isArray(re == null ? void 0 : re.pixels) ? re.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, v) => y - v);
    if (!Q.length) return null;
    if (Q.length === 1)
      return { startX: Q[0], widthPx: 1 };
    let ue = -1, me = 0;
    for (let y = 0; y < Q.length; y += 1) {
      const v = Q[y], U = (y === Q.length - 1 ? Q[0] + O : Q[y + 1]) - v - 1;
      U > ue && (ue = U, me = y);
    }
    const _e = (Q[(me + 1) % Q.length] + O) % O;
    let E = 1 / 0, ce = -1 / 0;
    for (const y of Q) {
      const v = (y - _e + O) % O;
      E = Math.min(E, v), ce = Math.max(ce, v);
    }
    return {
      startX: _e,
      widthPx: Math.max(1, ce - E + 1)
    };
  }
  function Pe(re, O, Q = {}) {
    var v;
    const ue = Number((re == null ? void 0 : re.width) || 0), me = Number((re == null ? void 0 : re.height) || 0), _e = (v = re == null ? void 0 : re.getContext) == null ? void 0 : v.call(re, "2d");
    if (!_e || ue < 1 || me < 1) return [];
    const E = _e.getImageData(0, 0, ue, me), ce = new Uint8Array(ue * me);
    for (let V = 0; V < ce.length; V += 1) ce[V] = E.data[V * 4 + 3];
    return j(ce, ue, me, 8).map((V, U) => {
      const S = fe(V, ue);
      if (!S) return null;
      const w = Number(S.widthPx || 0), D = V.maxY - V.minY + 1, k = Number(S.startX || 0), N = mn({ label: "editor.lasso-fill" });
      N.width = w, N.height = D;
      const A = N.getContext("2d");
      if (!A) return null;
      const W = A.createImageData(w, D);
      return V.pixels.forEach(({ x: J, y: se }) => {
        const L = (se * ue + J) * 4, le = (Number(J || 0) - k + ue) % ue, ve = ((se - V.minY) * w + le) * 4;
        W.data[ve + 0] = E.data[L + 0], W.data[ve + 1] = E.data[L + 1], W.data[ve + 2] = E.data[L + 2], W.data[ve + 3] = E.data[L + 3];
      }), A.putImageData(W, 0, 0), {
        id: Hi("raster"),
        type: "raster_frozen",
        layerKind: O === "mask" ? "mask" : "paint",
        z_index: Number((Q == null ? void 0 : Q.z_index) || 0) + U * 1e-3,
        locked: (Q == null ? void 0 : Q.locked) === !0,
        bbox: {
          u0: 0,
          v0: V.minY / me,
          u1: w / ue,
          v1: (V.maxY + 1) / me
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: k / ue,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(re) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = re);
    },
    processFreehandPoints: d,
    createRasterSurface: _,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: p,
    getDisplayPaintRevisionKey: F,
    refreshPaintEngineRevisionCache: x,
    markObjectVisualsDirty: q,
    markPaintStrokeVisualsDirty: R,
    markPaintCompositeVisualsDirty: ne,
    rebuildPaintEngineIfNeeded: B,
    getDesiredPaintTargetDescriptor: Z,
    getActivePaintTargetDescriptor: I,
    rasterizeStrokeToSurface: oe,
    createRasterFrozenObjectsFromCanvas: Pe
  };
}
function eN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, c, u, d, f, m;
  function _(B, Z = null) {
    var I;
    if (B && typeof B == "object" && !Array.isArray(B)) return B;
    if (Array.isArray(B) && B.length > 0) {
      const ae = B[0];
      if (ae && typeof ae == "object" && !Array.isArray(ae)) return ae;
    }
    if (Array.isArray(Z) && Z.length > 0) {
      const ae = (I = Z[0]) == null ? void 0 : I.parsed_state;
      if (ae && typeof ae == "object" && !Array.isArray(ae))
        return {
          yaw_deg: Number(ae.yaw_deg || 0),
          pitch_deg: Number(ae.pitch_deg || 0),
          hFOV_deg: Number(ae.hFOV_deg || 30),
          rot_deg: Number(ae.roll_deg || 0)
        };
    }
    return null;
  }
  function g(B, Z, I) {
    const ae = Math.max(1, Number(Z || 1)), ie = Math.max(1, Number(I || 1)), he = Ee(Number(B || 30), 0.1, 179) * gr, te = 2 * Math.atan(Math.tan(he * 0.5) * (ie / ae));
    return Ee(te * Si, 0.1, 179);
  }
  function p(B) {
    const Z = String(B || "").trim();
    if (!Z) return null;
    try {
      const I = JSON.parse(Z);
      if (!I || typeof I != "object" || String(I.kind || "") !== "pano_sticker_state") return null;
      const ae = I.version;
      let ie = null;
      if (typeof ae == "number" && Number.isInteger(ae) ? ie = ae : typeof ae == "string" && /^\d+$/.test(ae) && (ie = Number.parseInt(ae, 10)), ie !== 1) return null;
      const he = I.pose;
      if (!he || typeof he != "object") return null;
      const te = Number(he.yaw_deg), ge = Number(he.pitch_deg), de = Number(he.roll_deg), P = Number(he.hFOV_deg);
      if (![te, ge, de, P].every((fe) => Number.isFinite(fe))) return null;
      let H = ((te + 180) % 360 + 360) % 360 - 180;
      Object.is(H, -0) && (H = 0);
      const oe = {
        yaw_deg: H,
        pitch_deg: Ee(ge, -89.9, 89.9),
        roll_deg: de,
        hFOV_deg: Ee(P, 0.1, 179)
      }, j = Number(I.source_aspect);
      return Number.isFinite(j) && j > 0 && (oe.source_aspect = j), oe;
    } catch {
      return null;
    }
  }
  function F(B) {
    const Z = Number(B == null ? void 0 : B.yaw_deg), I = Number(B == null ? void 0 : B.pitch_deg), ae = Number((B == null ? void 0 : B.roll_deg) ?? (B == null ? void 0 : B.rot_deg)), ie = Number(B == null ? void 0 : B.hFOV_deg), he = xi(B);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(Z) ? Z : 0),
        pitch_deg: Ee(Number.isFinite(I) ? I : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ae) ? ae : 0,
        hFOV_deg: Ee(Number.isFinite(ie) ? ie : 90, 0.1, 179)
      },
      source_aspect: he
    };
  }
  function K(B) {
    var ge;
    if (!B || typeof B != "object") return F(null);
    const Z = Number(B == null ? void 0 : B.yaw_deg), I = Number(B == null ? void 0 : B.pitch_deg), ae = Number((B == null ? void 0 : B.roll_deg) ?? (B == null ? void 0 : B.rot_deg)), ie = Number(B == null ? void 0 : B.hFOV_deg), he = Number(B == null ? void 0 : B.vFOV_deg);
    let te = 1;
    if (Number.isFinite(ie) && Number.isFinite(he)) {
      const de = Ee(ie, 0.1, 179) * gr, P = Ee(he, 0.1, 179) * gr, H = Math.tan(P * 0.5);
      if (Math.abs(H) > 1e-6) {
        const oe = Math.tan(de * 0.5) / H;
        Number.isFinite(oe) && oe > 0 && (te = oe);
      }
    }
    if (B != null && B.asset_id && ((ge = o == null ? void 0 : o.assets) != null && ge[B.asset_id])) {
      const de = o.assets[B.asset_id], P = Number((de == null ? void 0 : de.w) || 0), H = Number((de == null ? void 0 : de.h) || 0);
      P > 0 && H > 0 && (te = P / H);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(Z) ? Z : 0),
        pitch_deg: Ee(Number.isFinite(I) ? I : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ae) ? ae : 0,
        hFOV_deg: Ee(Number.isFinite(ie) ? ie : 30, 0.1, 179)
      },
      source_aspect: te
    };
  }
  function z(B) {
    return t.linkedValue(n, B);
  }
  function G(B, Z, I) {
    const ae = B && typeof B == "object" ? {
      yaw_deg: Number(B.yaw_deg || 0),
      pitch_deg: Number(B.pitch_deg || 0),
      roll_deg: Number(B.rot_deg ?? B.roll_deg ?? 0),
      hFOV_deg: Number(B.hFOV_deg || 30)
    } : p(Z);
    if (ae) {
      const te = Number((I == null ? void 0 : I.naturalWidth) || (I == null ? void 0 : I.width) || ae.source_aspect || 1), ge = Number((I == null ? void 0 : I.naturalHeight) || (I == null ? void 0 : I.height) || 1);
      return {
        yaw_deg: Number(ae.yaw_deg || 0),
        pitch_deg: Number(ae.pitch_deg || 0),
        hFOV_deg: Number(ae.hFOV_deg || 30),
        vFOV_deg: g(ae.hFOV_deg, te, ge),
        rot_deg: Number(ae.roll_deg || 0)
      };
    }
    const ie = Number((I == null ? void 0 : I.naturalWidth) || (I == null ? void 0 : I.width) || 1), he = Number((I == null ? void 0 : I.naturalHeight) || (I == null ? void 0 : I.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: g(30, ie, he),
      rot_deg: 0
    };
  }
  function x() {
    const B = l(() => {
      Dr(n, "image-loaded");
    }), Z = en(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return $m(o, Rm(n, { pose: Z, image: B }));
  }
  function q() {
    var ge;
    const B = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === "sticker_image") : -1, Z = B >= 0 ? ((ge = n.getInputLink(B)) == null ? void 0 : ge.id) ?? null : null, I = l(() => {
      Dr(n, "image-loaded");
    }), ae = _(c("pano_sticker_input_pose"), null), ie = z("sticker_state"), he = t.externalStateHash(n, ie), te = Z == null ? null : G(ae, ie, I);
    return Vm(o, {
      connected: Z != null,
      linkId: Z,
      stateHash: he,
      pose: te,
      imageWidth: Number((I == null ? void 0 : I.naturalWidth) || (I == null ? void 0 : I.width) || 0),
      imageHeight: Number((I == null ? void 0 : I.naturalHeight) || (I == null ? void 0 : I.height) || 0)
    });
  }
  function R(B = "sync") {
    if (a !== "stickers" || i) return;
    const Z = n.__panoSceneStateV2 ? x() : q();
    if (Z.changed) {
      const I = o.stickers.find(u);
      o.stickers = Z.state.stickers, o.active = Z.state.active, I && r.selectedId === I.id && !o.stickers.some((ae) => ae.id === I.id) && (r.selectedId = null, r.selectedIds = []), s(), m(), f();
    }
    d();
  }
  function ne() {
    const B = Array.isArray(o.stickers) ? o.stickers : [], Z = [];
    for (const I of B)
      u(I) && (I.visible = !1, Z.push(I));
    return Z;
  }
  return {
    connect(B) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: u,
        requestDraw: d,
        updateSelectionMenu: f,
        updateSidePanel: m
      } = B);
    },
    computeStickerVFov: g,
    buildCanonicalCutoutStickerState: F,
    buildCanonicalSelectedStickerState: K,
    reconcileExternalStickerFromInputs: R,
    collectExternalStickersForClearAll: ne
  };
}
const tN = 250, nN = 600, rN = 180, iN = 2;
function oN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ro(e, t, r) {
  return e + (t - e) * r;
}
function aN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Iu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / rN + i / iN);
  return Math.round(Ro(tN, nN, o));
}
function sN(e, t, r) {
  const n = oN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ro(i, t.position[o], n)),
    yaw_deg: $t(e.yaw_deg + Iu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ro(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ro(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ro(e.distance, t.distance, n)
  };
}
function lN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Iu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function cN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return lN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: aN(e, t, n), end: i };
}
function uN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: sN(e.from, e.to, r), done: !1 };
}
function Us(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function dN(e, t, r) {
  const n = Us(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function fN(e) {
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
    stateV2: u,
    studio: d,
    viewController: f
  } = e;
  let m, _, g, p, F, K, z, G, x, q = null;
  function R(k, N = null) {
    const A = H();
    z(() => {
      i.viewTransition = cN(A, k, performance.now(), { scale: me(), end: N });
    }), !i.viewTransition && N && ne(N), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, G(), F({ localOnly: !0, reason: dt.VIEW });
  }
  function ne(k) {
    de(Fc({ ...ge(), moved: k.moved }, k.mode, oe())), s.backgroundDirty = !0;
  }
  function B() {
    i.viewTransition && (i.viewTransition = null, G());
  }
  function Z(k, N) {
    R({ ...H(), yaw_deg: k, pitch_deg: N });
  }
  function I() {
    return !d || fe() && !p();
  }
  function ae() {
    return i.mode === "pano" && ie();
  }
  function ie() {
    return u && wv({ sceneLinked: l && !!yl(a).scene, files: K(), stickers: c.stickers });
  }
  function he() {
    return i.spaceMode === "6dof" && ae();
  }
  function te() {
    var k, N, A;
    return NS((A = (N = (k = t.ui) == null ? void 0 : k.settings) == null ? void 0 : N.getSettingValue) == null ? void 0 : A.call(N, rg));
  }
  function ge() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function de(k) {
    i.spaceMode = k.mode, i.viewPosition = k.position, i.viewMoved = k.moved;
  }
  function P(k) {
    var A;
    const N = dN(i.spaceMode, i.viewTransition, k);
    if (N !== "keep") {
      if (N === "return") {
        R({ ...H(), position: oe(), distance: ((A = Q()) == null ? void 0 : A.radius) || er }, { mode: k, moved: !1 });
        return;
      }
      B(), de(Fc({ ...ge(), position: H().position }, k, oe())), s.backgroundDirty = !0, G(), F({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function H() {
    var A;
    const k = i.viewMoved ? i.viewDistance : ((A = Q()) == null ? void 0 : A.radius) || er, N = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: k };
    return yv(i.spaceMode, N, oe());
  }
  function oe() {
    return fe() ? O().position : [0, 0, 0];
  }
  function j() {
    return r && c.camera !== null;
  }
  function fe() {
    return j() && (!d || c.camera.visible);
  }
  function Pe() {
    return c.painting_visible !== !1;
  }
  function re(k) {
    return k.visible && so(k.clip, i.frame);
  }
  function O() {
    return cl(c.camera, i.frame);
  }
  function Q() {
    var N;
    const k = m();
    return ((N = k.space ?? k.content) == null ? void 0 : N.sphere) ?? null;
  }
  function ue(k) {
    i.viewPosition = k.position, i.viewYaw = k.yaw_deg, i.viewPitch = k.pitch_deg, i.viewDistance = k.distance, i.viewMoved = !0, s.backgroundDirty = !0, F({ localOnly: !0, reason: dt.VIEW });
  }
  function me() {
    var k;
    return ((k = Q()) == null ? void 0 : k.radius) || er;
  }
  function _e() {
    var le;
    const k = m().space, N = _(), A = i.worldSelectedId || i.selectedId, W = N.stickers.findIndex((ve) => ve.id === A), J = W < 0 ? null : {
      sticker: N.stickers[W],
      value: ul(N, i.frame).stickers[W],
      plane: k.stickers.find((ve) => ve.id === A) ?? null,
      item: ((le = k.sticker) == null ? void 0 : le.id) === A && k.sticker.url ? { kind: k.sticker.kind, box: o.sceneBox(k.sticker.url) } : null
    }, se = g() ? S() : Cv(Q(), J);
    if (!se) return;
    const L = H();
    i.viewDistance = L.distance, i.viewMoved = !0, R(im(L, se, n.width, n.height));
  }
  function E(k) {
    return o.pickSurface(D(), k.x, k.y, n.width, n.height);
  }
  function ce(k, N) {
    var A;
    return Tc(k, N, i.viewMoved ? null : (A = Q()) == null ? void 0 : A.center, me());
  }
  function y() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function v(k, N) {
    const A = performance.now(), W = { x: k.x, y: k.y, time: A, key: o.contentRevision(), view: y() };
    if (!em(q, W)) {
      const se = E(k);
      q = { ...W, cost: performance.now() - A, hit: se };
    }
    const J = H();
    ue(rm(J, ce(J, q.hit), N, me())), q.view = y(), q.wheelTime = A;
  }
  function V(k, N, A) {
    const W = H();
    i.interaction = k === "orbit" ? { kind: "space_orbit", last: N, pivot: ce(W, E(N)) } : { kind: "space_pan", last: N, depth: Qh(W, me()) }, x(N), n.setPointerCapture(A);
  }
  function U(k) {
    return k * 0.2;
  }
  function S() {
    return { center: O().position, radius: U(me()) };
  }
  function w(k, N) {
    const { yaw_deg: A, pitch_deg: W } = lm(k.position, N);
    return { ...k, yaw_deg: A, pitch_deg: W };
  }
  function D() {
    return qu(H(), n.width, n.height, Q());
  }
  return {
    connect(k) {
      ({
        editorViewInput: m,
        editorViewSceneState: _,
        isCameraSelected: g,
        isErpCamera: p,
        requestDraw: F,
        sceneFiles: K,
        startAnimation: z,
        syncFloatingViewButtonState: G,
        updateCursor: x
      } = k);
    },
    transitionView: R,
    applyViewTransitionEnd: ne,
    cancelViewTransition: B,
    turnViewTo: Z,
    cameraPreviewShown: I,
    isSpaceView: ae,
    hasSpaceContent: ie,
    isFreeSpaceView: he,
    viewControls: te,
    spaceModeState: ge,
    applySpaceMode: de,
    setSpaceMode: P,
    spaceViewState: H,
    spaceOrigin: oe,
    hasCamera: j,
    cameraShoots: fe,
    paintingShown: Pe,
    sceneStickerShown: re,
    cutoutCamera: O,
    contentSphere: Q,
    setSpaceView: ue,
    spaceScale: me,
    frameSpaceContent: _e,
    zoomSpaceAt: v,
    startSpaceDrag: V,
    currentSpaceCamera: D,
    cameraFrustumLength: U,
    cameraSphere: S,
    lookingAt: w
  };
}
function pN(e) {
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
    videoEl: u
  } = e;
  let d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue = { revision: -1, sceneState: null }, me = null;
  function _e() {
    return me || (me = y()), me;
  }
  function E() {
    me = null;
  }
  function ce() {
    return ue.sceneState;
  }
  function y() {
    const L = x(), le = f(), ve = { ...s.assets };
    for (const ee of l ? [] : s.stickers) {
      const Se = String((ee == null ? void 0 : ee.asset_id) || "");
      Se && !ve[Se] && i.has(Se) && (ve[Se] = { type: "comfy_image", filename: Se });
    }
    const we = l ? s.stickers.map((ee) => ie(ee) ? { ...ee, source: { kind: "file", filename: fe(ee) } } : ee) : s.stickers;
    ue.revision !== a.stateRevision && (ue = { revision: a.stateRevision, sceneState: hr({ ...s, stickers: we, assets: ve, painting: null }) }), l && v(ue.sceneState);
    const pe = ul(ue.sceneState, r.frame), be = te ? z() : null, ye = (ee) => {
      if (l && !ee.visible) return null;
      if (te && Z(ee)) return be;
      const Se = R(ee);
      return Se ? { media: Se, revision: q(Se) } : null;
    }, h = hm(ue.sceneState, r.frame, s.stickers, { media: ye, paintLayers: le, evaluated: pe }), $ = L && (L === u || L === c) ? u.dataset.panoSrc : L, C = B(L) ? { media: L, revision: q(L), coverage: In(s.coverage), source: $ } : null, b = ne(), T = bv(P(), b, H());
    T.mode !== r.spaceMode && g(), d(T);
    const M = b ? V(ue.sceneState, pe, ye) : null, Y = ae() ? { ...M, ...U(M) } : null;
    return { background: C, layers: h, space: Y, content: M };
  }
  function v(L) {
    const le = new Map(s.stickers.map((ve) => [ve.id, ve.clip]));
    L.scene.clip = { ...s.scene.clip };
    for (const ve of L.stickers) {
      const we = le.get(ve.id);
      we && (ve.clip = { ...we });
    }
  }
  function V(L, le, ve) {
    const we = ge(), pe = sm(we, le.scene), be = pe != null && pe.url ? n.sceneBox(pe.url) : null, ye = be && Vc(pe.kind, be), h = j(), $ = xv(h, L, le), C = $ != null && $.url ? n.sceneBox($.url) : null, b = C ? [{ box: Vc($.kind, C), value: $.value }] : [], T = Bv(L, r.frame, s.stickers, { media: ve, evaluated: le }), M = $c(Pv(le, ye, T, b));
    return {
      evaluated: le,
      sceneUrls: we ? we.urls.filter(Boolean) : [],
      scene: pe,
      stickerUrls: kv(h, L),
      sticker: $,
      stickers: T,
      sphere: M
    };
  }
  function U(L) {
    var ve;
    const le = ((ve = L.sphere) == null ? void 0 : ve.radius) || er;
    return {
      gizmo: w() ? N() : S(L.evaluated),
      grid: r.showGrid && !r.fullscreen ? $v(le) : null,
      lines: _() ? k(le) : []
    };
  }
  function S(L) {
    const le = de(), ve = L.stickers.find((we) => we.id === (le == null ? void 0 : le.id));
    return !Q(le) || !(ve != null && ve.active) ? null : { mode: r.gizmoMode, transform: Dc(ve) };
  }
  function w() {
    return _() && r.selectedId === ml;
  }
  let D = { revision: -1, span: -1, segments: [] };
  function k(L) {
    const le = re();
    (D.revision !== a.stateRevision || D.span !== le) && (D = { revision: a.stateRevision, span: le, segments: jv(Hv(s, le)) });
    const { segments: ve } = D, we = ve.length ? [{ segments: ve, color: mP }] : [];
    if (!I()) return we;
    const pe = w() ? kg : hP;
    return [...we, { segments: cm(F(), m(L)), color: pe }];
  }
  function N() {
    return !I() || !w() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Dc({ ...F(), scale: 1 }) };
  }
  function A() {
    const { background: L, layers: le, space: ve } = _e(), we = t.width, pe = t.height, be = K({ x: 0, y: 0, w: we, h: pe });
    let ye = !1;
    return !L && !le.length && !ve ? (n.clear(460551), ye = n.ready) : (n.clear(), ye = !!n.render({
      rect: be,
      camera: ve ? qu(oe(), we, pe, ve.sphere) : p(),
      background: L,
      layers: le,
      space: ve
    })), Pe(), (r.worldSelectedId || w() || he()) && O(), ye;
  }
  function W(L) {
    const { content: le } = _e();
    return !le || !L.position ? Uo(L) : om(Uo(L), L.position, G(), le.sphere);
  }
  function J(L, le, ve, we = null) {
    const { background: pe, layers: be, content: ye } = _e();
    if (!pe && !be.length && !ye) return null;
    const h = ye && le.position ? ye : null;
    return n.render({ rect: L, camera: W(le), background: pe, layers: be, space: h, owner: ve, clearColor: we });
  }
  function se(L) {
    return n.clear(460551), !!n.renderUnwrap({ rect: K(L), ..._e() });
  }
  return {
    connect(L) {
      ({
        applySpaceMode: d,
        buildEditorViewPaintLayers: f,
        cameraFrustumLength: m,
        cameraShoots: _,
        cancelViewTransition: g,
        currentViewCamera: p,
        cutoutCamera: F,
        deviceRect: K,
        followPortSticker: z,
        frameViewDistance: G,
        getConnectedErpImage: x,
        getMediaRevisionToken: q,
        getStickerImage: R,
        hasSpaceContent: ne,
        isDecodedImageReady: B,
        isExternalSticker: Z,
        isFreeSpaceView: I,
        isSpaceView: ae,
        isUploadingSticker: ie,
        isWorldMenuShown: he,
        portVideo: te,
        sceneFiles: ge,
        selectedWorldSticker: de,
        spaceModeState: P,
        spaceOrigin: H,
        spaceViewState: oe,
        stickerFiles: j,
        stickerImageKey: fe,
        syncFloatingViewButtonState: Pe,
        timelineSpanFrames: re,
        updateSelectionMenu: O,
        worldStickerEditable: Q
      } = L);
    },
    editorViewInput: _e,
    endEditorViewFrame: E,
    editorViewSceneState: ce,
    isCameraSelected: w,
    renderEditorView: A,
    shotViewCamera: W,
    drawEditorViewShot: J,
    renderEditorViewUnwrap: se
  };
}
const su = "camera_preview";
function hN(e) {
  return e === su ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function mN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function Ig(e, t = !1) {
  const r = Ee(xi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function gN(e) {
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
  let u, d, f, m, _ = null, g = !1, p = !1;
  function F() {
    g && (g = !1, o.releaseSplats(su));
  }
  function K() {
    _ = null, p = !1, F();
  }
  function z(B) {
    if (!n || !B) return !1;
    const Z = n.closest(".pano-camera-preview");
    if (!Z) return !1;
    const I = Math.round(Number(Z.clientWidth || n.clientWidth || 0)), ae = Math.round(Number(Z.clientHeight || n.clientHeight || 0));
    return Math.abs(I - Number(B.width || 0)) <= 1 && Math.abs(ae - Number(B.height || 0)) <= 1;
  }
  function G(B, Z) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !s || !c.cameraPreview) return;
    if (i.mode === "frame" || !u()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, K();
      return;
    }
    const I = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !I || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = I ? "Preview unavailable" : "Add Frame to preview", K();
      return;
    }
    const ae = Ig(I, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ae.width, c.cameraPreview.height = ae.height, p) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, F();
      return;
    }
    const ie = window.devicePixelRatio || 1, he = Math.max(1, ae.width * ie), te = Math.max(1, ae.height * ie), ge = Math.min(1, t.width / he, t.height / te), de = { width: Math.max(1, Math.floor(he * ge)), height: Math.max(1, Math.floor(te * ge)) }, P = !_ || _.width !== de.width || _.height !== de.height || mN(Z);
    if (B && P) {
      g = !0;
      const oe = d({ x: 0, y: t.height - de.height, w: de.width, h: de.height }, I, su);
      _ = oe ? de : null, oe && ne(oe);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const H = z(ae);
    c.cameraPreview.ready = !0, c.cameraPreview.label = H ? "" : "Loading preview", c.cameraPreview.settled = H && a.pendingStableLayoutFrames <= 0 && a.hasPresentedFrame;
  }
  function x() {
    _ = null, p = !1;
  }
  let q = 0, R = !1;
  function ne(B) {
    const Z = ++q;
    createImageBitmap(B.canvas, B.x, B.y, B.width, B.height).then((I) => {
      var ae;
      if (Z !== q || !a.running) {
        I.close();
        return;
      }
      (ae = r.getContext("bitmaprenderer")) == null || ae.transferFromImageBitmap(I);
    }).catch((I) => {
      Z !== q || !a.running || (p = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !R && (R = !0, console.error("[PanoramaStickers] camera preview frame failed", I)));
    });
  }
  return {
    connect(B) {
      ({
        cameraPreviewShown: u,
        drawEditorViewShot: d,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = B);
    },
    drawCutoutOutputPreview: G,
    forgetCameraPreviewFrame: x
  };
}
function yN(e) {
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
    type: u
  } = e;
  let d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue, me, _e, E, ce, y;
  function v(pe) {
    const be = r.width, ye = r.height, h = ne();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, be, ye), Q(), pe && (s.backgroundDirty = !_e(h)), i.showGrid && !i.fullscreen) {
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
  function V(pe, be, ye = 1) {
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
  function U(pe) {
    const be = r.width, ye = r.height;
    if (n.clearRect(0, 0, be, ye), Q(), pe && (s.backgroundDirty = !me()), i.showGrid && !i.fullscreen && g().space)
      S();
    else if (i.showGrid && !i.fullscreen) {
      for (let $ = -180; $ <= 180; $ += 15) {
        const C = [];
        for (let b = -89; b <= 89; b += 4) C.push(Pn($, b));
        V(C, "#3f3f46", $ % 90 === 0 ? 1.3 : 1);
      }
      for (let $ = -75; $ <= 75; $ += 15) {
        const C = [];
        for (let b = -180; b <= 180; b += 4) C.push(Pn(b, $));
        V(C, $ === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", $ === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: Pn(-90, 0) },
        { name: "Front", dir: Pn(0, 0) },
        { name: "Right", dir: Pn(90, 0) },
        { name: "Back", dir: Pn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach(($) => {
        const C = fe($.dir);
        C && n.fillText($.name, C.x, C.y + 24);
      });
    }
  }
  function S() {
    const pe = qu(y(), r.width, r.height, f()), be = aa(pe, [0, 0, 0], r.width, r.height);
    be && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", be.x, be.y - 12));
  }
  function w(pe, be) {
    const ye = j(pe), h = Pn(Number(ye.yaw_deg || 0), Number(ye.pitch_deg || 0)), $ = i.mode === "unwrap" ? Pe(h) : null, C = $ ? $.x : null, b = i.mode === "pano" ? 28 : 20, T = [
      E(pe, 0, b, C),
      E(pe, 1, b, C),
      E(pe, 2, b, C),
      E(pe, 3, b, C)
    ];
    rd(n, T, { selected: be });
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
    const b = ye ? "rgba(255, 116, 116, 0.96)" : be ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", T = ye ? "rgba(255, 89, 89, 0.08)" : be ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", M = be ? 3.2 : 2.6;
    D(n, h), n.fillStyle = T, n.fill(), n.strokeStyle = b, n.lineWidth = M, n.stroke(), n.save(), n.strokeStyle = b, n.lineWidth = be ? 3.2 : 2.6, n.lineCap = "round";
    const Y = Array.isArray(pe == null ? void 0 : pe.edgeMidpoints) && pe.edgeMidpoints.length >= 4 ? pe.edgeMidpoints : [
      { edge: "top", x: (h[0].x + h[1].x) * 0.5, y: (h[0].y + h[1].y) * 0.5 },
      { edge: "right", x: (h[1].x + h[2].x) * 0.5, y: (h[1].y + h[2].y) * 0.5 },
      { edge: "bottom", x: (h[2].x + h[3].x) * 0.5, y: (h[2].y + h[3].y) * 0.5 },
      { edge: "left", x: (h[3].x + h[0].x) * 0.5, y: (h[3].y + h[0].y) * 0.5 }
    ], ee = { top: "bottom", right: "left", bottom: "top", left: "right" }, Se = be ? 12 : 9;
    Y.forEach((xe) => {
      const Te = Y.find((Re) => (Re == null ? void 0 : Re.edge) === ee[xe == null ? void 0 : xe.edge]) || {
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
      n.globalAlpha = b * R(pe) * $, i.mode === "frame" ? (n.strokeStyle = ye ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = ye ? 2 : 1, D(n, be.corners), n.stroke()) : w(pe, ye), n.globalAlpha = b;
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
      const C = (((Se = $.b) == null ? void 0 : Se.x) ?? $.x) - (((xe = $.a) == null ? void 0 : xe.x) ?? $.x), b = (((Ne = $.b) == null ? void 0 : Ne.y) ?? $.y) - (((Te = $.a) == null ? void 0 : Te.y) ?? $.y), T = Math.hypot(C, b) || 1, M = C / T, Y = b / T, ee = 10;
      n.beginPath(), n.moveTo($.x - M * ee, $.y - Y * ee), n.lineTo($.x + M * ee, $.y + Y * ee), n.stroke();
    }), n.lineCap = "butt"), H(pe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(be.rotateStemBase.x, be.rotateStemBase.y), n.lineTo(be.rotateHandle.x, be.rotateHandle.y), n.stroke(), n.fillStyle = ye, n.beginPath(), n.arc(be.rotateHandle.x, be.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function W() {
    var C;
    const pe = i.mode === "frame" ? [] : q(), be = pe.length > 1, ye = l ? F() : G(), h = ye.map((b) => `${String((b == null ? void 0 : b.id) || "")}:${de(b) ? "frame" : Number((b == null ? void 0 : b.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== ye || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: ye,
      orderKey: h,
      sorted: [...ye]
    });
    const $ = i._sortedItemsCache.sorted;
    for (const b of $) {
      const T = i.mode !== "frame" && !be && he(b);
      if (i.mode === "frame" && !T) continue;
      const M = P(b), Y = de(b), ee = ie(b);
      if (!M && !Y || ge(b) && !ce(b)) continue;
      const Se = oe(b);
      if (u !== "stickers" && !Se.visible)
        continue;
      const xe = Ee(Number((Se == null ? void 0 : Se.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Ne = Y && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Ne, N(b, Se, T, ee), T && Se.visible) {
        const Te = ee ? "#ff4d4f" : M && I(b) ? "#f59e0b" : "#0070f3", ze = n.globalAlpha;
        n.globalAlpha = ze * xe, A(b, Se, Te), n.globalAlpha = ze;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !p() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const b = i.cutoutPanoFrameVisual, T = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= T, k(b.geom, b.selected, b.locked), b.selected && A(
        b.item,
        b.geom,
        b.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (be) {
      const b = x(pe);
      if (b != null && b.visible) {
        const T = d(pe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(b.corners[0].x, b.corners[0].y);
        for (let M = 1; M < b.corners.length; M += 1) n.lineTo(b.corners[M].x, b.corners[M].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = T, b.corners.forEach((M) => {
          n.beginPath(), n.arc(M.x, M.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      pe.forEach((b) => {
        if (!H(b) && !te(b)) return;
        const T = oe(b);
        if (!(T != null && T.visible)) return;
        const M = ie(b) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(T.corners[0].x, T.corners[0].y);
        for (let Y = 1; Y < T.corners.length; Y += 1) n.lineTo(T.corners[Y].x, T.corners[Y].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = M, T.corners.forEach((Y) => {
          n.beginPath(), n.arc(Y.x, Y.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((C = i.interaction) == null ? void 0 : C.kind) === "marquee_select") {
      const b = ue(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function J(pe) {
    const be = p(), ye = K(be);
    if (!be || !ye)
      return n.clearRect(0, 0, r.width, r.height), pe && o.clear(657930), !1;
    const h = { x: ye.x, y: ye.y, w: ye.w, h: ye.h }, { rect: $, shot: C } = fm(be, ye, { width: r.width, height: r.height }), b = se(h);
    if (n.clearRect(0, 0, r.width, r.height), pe) {
      o.clear(657930);
      const T = m($), M = !!_(T, C, void 0, 657930);
      M || o.clear(1118481, T), s.backgroundDirty = !M;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, b), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = kg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, b - 1)), n.stroke(), n.restore(), !0;
  }
  function se(pe) {
    const be = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * be, Number((pe == null ? void 0 : pe.w) || 0) * 0.5, Number((pe == null ? void 0 : pe.h) || 0) * 0.5);
  }
  function L() {
    var M, Y;
    if (((M = i.interaction) == null ? void 0 : M.kind) !== "paint_lasso_fill") return;
    const pe = i.interaction.stroke, be = (Y = pe == null ? void 0 : pe.geometry) == null ? void 0 : Y.points;
    let ye;
    if (i.mode === "frame") {
      const ee = p(), Se = z(ee);
      ye = re(be, ee, Se);
    } else
      ye = O(be);
    if (!Array.isArray(ye) || ye.length < 3) return;
    const h = String((pe == null ? void 0 : pe.layerKind) || "") === "mask", $ = (pe == null ? void 0 : pe.color) || { r: 1, g: 0.25, b: 0.25 }, C = Math.round(Number($.r || 0) * 255), b = Math.round(Number($.g || 0) * 255), T = Math.round(Number($.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(ye[0].x || 0), Number(ye[0].y || 0));
    for (let ee = 1; ee < ye.length; ee++) n.lineTo(Number(ye[ee].x || 0), Number(ye[ee].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${C},${b},${T},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function le() {
    const pe = i.frameRollOverlayVisual, be = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(pe != null && pe.shot) || be <= 1e-4) return;
    const ye = z(pe.shot);
    if (!ye) return;
    const h = { x: ye.x + ye.w * 0.5, y: ye.y + ye.h * 0.5 }, $ = Number(pe.shot.roll_deg ?? pe.shot.rot_deg ?? 0) * gr, C = Math.hypot(ye.w, ye.h) * 0.55, b = Math.cos($) * C, T = Math.sin($) * C;
    n.save(), n.globalAlpha *= be, n.beginPath(), n.rect(ye.x, ye.y, ye.w, ye.h), n.clip(), n.translate(h.x, h.y), n.rotate($);
    const M = Math.max(12, Math.min(ye.w, ye.h) / 6);
    n.beginPath();
    for (let Y = -C; Y <= C; Y += M)
      n.moveTo(Y, -C), n.lineTo(Y, C);
    for (let Y = -C; Y <= C; Y += M)
      n.moveTo(-C, Y), n.lineTo(C, Y);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - b, h.y - T), n.lineTo(h.x + b, h.y + T), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function ve() {
    return !l || !p() || t && ae() || c && !B() ? 0 : bP;
  }
  function we() {
    const pe = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (pe <= 1e-4 || !l || i.mode !== "pano") return;
    const be = p(), ye = be ? oe(be) : null, h = Array.isArray(ye == null ? void 0 : ye.corners) && ye.corners.length >= 4 ? ye.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    ye != null && ye.visible && h && (i.cutoutPanoDimCorners = h), be && (ye != null && ye.visible) && h && (i.cutoutPanoFrameVisual = {
      item: be,
      geom: ye,
      selected: he(be),
      locked: ie(be)
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
        areAllSelectedItemsLocked: d,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: _,
        editorViewInput: g,
        getActiveCutoutShot: p,
        getCutoutSelectableItemsForDisplay: F,
        getFrameViewLayout: K,
        getFrameViewRect: z,
        getList: G,
        getMultiSelectionGeom: x,
        getSelectedItems: q,
        getStickerDisplayAlpha: R,
        getUnwrapRect: ne,
        isCameraSelected: B,
        isErpCamera: Z,
        isExternalSticker: I,
        isFreeSpaceView: ae,
        isItemLocked: ie,
        isItemSelected: he,
        isRasterObjectItem: te,
        isSceneSticker: ge,
        isShotItem: de,
        isStickerItem: P,
        isStrokeGroupItem: H,
        objectGeom: oe,
        poseOf: j,
        projectDir: fe,
        projectDirUnwrap: Pe,
        projectErpLassoPointsToFrameRect: re,
        projectLassoPointsToCurrentView: O,
        rebuildPaintEngineIfNeeded: Q,
        rectFromPoints: ue,
        renderEditorView: me,
        renderEditorViewUnwrap: _e,
        sampleStickerEdge: E,
        sceneStickerShown: ce,
        spaceViewState: y
      } = pe);
    },
    drawGridUnwrap: v,
    drawGridPano: U,
    drawObjects: W,
    drawFrameViewBackground: J,
    drawLassoOutlineOverlay: L,
    drawFrameRollOverlay: le,
    getCutoutPanoDimTarget: ve,
    drawCutoutPanoPassepartout: we
  };
}
function bN(e) {
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
    shotEditor: u,
    stageWrap: d,
    state: f,
    timeline: m,
    type: _,
    uiState: g,
    viewController: p
  } = e;
  let F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O = () => {
  };
  function Q(se = /* @__PURE__ */ new Set()) {
    Z();
    const L = l.backgroundDirty;
    u && (P(), K(L, se)), i.mode === "frame" ? (l.frameSafeRect = ge(), x(L)) : i.mode === "unwrap" ? R(L) : q(L), z(), B(), j(), ne(), G(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && re(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), u && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const le = he();
    g.stageStatus = le.status, g.stageStatusDetail = le.detail, le.status === Xn ? (d == null || d.removeAttribute("data-stage-ready"), d == null || d.setAttribute("data-stage-loading-kind", le.detail)) : (d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind"));
  }
  function ue(se = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const L = String((se == null ? void 0 : se.kind) || "");
    return L === "move" || L === "scale" || L === "scale_x" || L === "scale_y" || L === "rotate" ? !0 : L === "move_multi" ? Array.isArray(se == null ? void 0 : se.stickerSnapshots) && se.stickerSnapshots.length > 0 : !1;
  }
  function me() {
    return !!i.interaction || !!m.drag;
  }
  function _e() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ie();
  }
  function E(se = {}) {
    var h, $, C, b, T, M, Y, ee;
    const L = se.reason ?? dt.STATE, le = !!se.localOnly, ve = se.externalSync === !0, we = String(se.cause || ""), pe = String(((h = i.interaction) == null ? void 0 : h.kind) || "");
    (!le || pe === "view" || pe === "pan_frame" || ue() || !!i.viewTransition || we === "mode" || we === "frame_view" || we === "cutout_frame") && (l.backgroundDirty = !0), le && te() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!le || we === "selection" || we === "mode" || we === "cutout_frame") && (fe(), Pe()), me() ? l.nodePreviewPending = !0 : _e(), ve && ((C = ($ = a.__panoDomPreview) == null ? void 0 : $.requestDraw) == null || C.call($), (b = a.setDirtyCanvas) == null || b.call(a, !0, !1)), ve && !le && ((M = (T = a.graph) == null ? void 0 : T.setDirtyCanvas) == null || M.call(T, !0, !0), (ee = (Y = t == null ? void 0 : t.canvas) == null ? void 0 : Y.setDirty) == null || ee.call(Y, !0, !0)), c.requestDraw(L);
  }
  function ce() {
    const se = n.getBoundingClientRect(), L = Math.max(2, Math.round(se.width)), le = Math.max(2, Math.round(se.height)), ve = window.devicePixelRatio || 1, we = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== L || n.height !== le) && (n.width = L, n.height = le);
    const pe = Gv(se.width || L, se.height || le, ve, window.innerWidth || se.width, window.innerHeight || se.height);
    return o.resize(pe.width, pe.height), [n.width, n.height, r.width, r.height].join("x") === we ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && y(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function y(se) {
    se(), c.wake();
  }
  function v() {
    return !!i.viewTransition || !!p.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || me();
  }
  function V(se = performance.now(), L = /* @__PURE__ */ new Set()) {
    var be;
    l.nodePreviewPending && !me() && _e(), L.forEach((ye) => l.reasons.add(ye)), L.size && (l.dirty = !0), [...L].some((ye) => ye !== dt.OVERLAY) && (l.backgroundDirty = !0), H(), l.lastTickTs > 0 ? Math.max(1e-3, (se - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = se;
    const le = i.mode === "frame" && ((be = i.interaction) == null ? void 0 : be.kind) === "roll_frame" ? i.interaction : null;
    le != null && le.shot && (i.frameRollOverlayVisual = { shot: le.shot });
    const ve = le ? 1 : 0;
    if (Math.abs(ve - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ve, i.frameRollOverlayStartTs = se), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ve) > 1e-6) {
      const ye = Ee(
        (se - Number(i.frameRollOverlayStartTs || se)) / vP,
        0,
        1
      );
      i.frameRollOverlayAlpha = jn(
        Number(i.frameRollOverlayFrom || 0),
        ve,
        ac(ye)
      ), ye >= 1 && (i.frameRollOverlayAlpha = ve, ve === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const we = ae();
    if (Math.abs(we - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = we, i.cutoutPanoDimStartTs = se), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - we) > 1e-6) {
      const ye = Ee(
        (se - Number(i.cutoutPanoDimStartTs || se)) / qf,
        0,
        1
      );
      i.cutoutPanoDimAlpha = jn(
        Number(i.cutoutPanoDimFrom || 0),
        we,
        ac(ye)
      ), ye >= 1 && (i.cutoutPanoDimAlpha = we), ye >= 1 && we === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const pe = u && I() ? 1 : 0;
    if (Math.abs(pe - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = pe, i.cutoutPanoFrameStartTs = se), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - pe) > 1e-6) {
      const ye = Ee(
        (se - Number(i.cutoutPanoFrameStartTs || se)) / qf,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = jn(
        Number(i.cutoutPanoFrameFrom || 0),
        pe,
        ac(ye)
      ), ye >= 1 && (i.cutoutPanoFrameAlpha = pe, pe === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const ye = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), h = Ee((se - Number(i.outputPreviewAnimStartTs || 0)) / ye, 0, 1), C = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? xP(h) : MP(h);
      i.outputPreviewAnim = jn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, C), l.dirty = !0, h >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: ye, done: h } = uN(i.viewTransition, se);
      if (i.viewPosition = ye.position, i.viewYaw = ye.yaw_deg, i.viewPitch = ye.pitch_deg, i.viewFov = ye.hFOV_deg, i.viewDistance = ye.distance, h) {
        const { end: $ } = i.viewTransition;
        i.viewTransition = null, $ && F($), oe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, p.stepInertia(se) && (i.viewInertia.vx = Number(p.state.inertia.vx || 0), i.viewInertia.vy = Number(p.state.inertia.vy || 0), i.viewInertia.active = !!p.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const ye = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), Q(ye);
    }
  }
  function U(se) {
    try {
      se();
    } catch (L) {
      const le = String((L == null ? void 0 : L.stack) || (L == null ? void 0 : L.message) || L || "unknown editor frame error");
      l.tickErrorSignature !== le && (l.tickErrorSignature = le, console.error("[PanoramaStickers] editor frame failed", L)), g.stageStatus = Hn, g.stageStatusDetail = "frame", d == null || d.setAttribute("data-stage-ready", ""), d == null || d.removeAttribute("data-stage-loading-kind");
    }
  }
  function S(se = performance.now(), L = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const le = fb();
    U(() => V(se, L)), pb(le);
  }
  function w() {
    !l.running || !ce() || U(() => {
      l.dirty = !1, Q(/* @__PURE__ */ new Set([dt.RESIZE]));
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
    O = db("editor", () => {
      var se;
      return {
        type: _,
        readOnly: s,
        mode: i.mode,
        interaction: ((se = i.interaction) == null ? void 0 : se.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!de.playing
      };
    });
  }
  function J() {
    O(), l.running = !1, c.stop(), D.disconnect(), k.removeEventListener("change", A);
  }
  return {
    connect(se) {
      ({
        applyViewTransitionEnd: F,
        drawCutoutOutputPreview: K,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: G,
        drawFrameViewBackground: x,
        drawGridPano: q,
        drawGridUnwrap: R,
        drawLassoOutlineOverlay: ne,
        drawObjects: B,
        endEditorViewFrame: Z,
        getActiveCutoutShot: I,
        getCutoutPanoDimTarget: ae,
        getSharedLivePaintSurface: ie,
        getStageImageStatus: he,
        isPaintCompositeInteraction: te,
        measureFrameSafeRect: ge,
        playback: de,
        rebuildPaintEngineIfNeeded: P,
        syncCutoutShot: H,
        syncFloatingViewButtonState: oe,
        syncFrameRollKnob: j,
        syncLookAtFrameButtonState: fe,
        syncViewToggleState: Pe,
        updateSelectionMenu: re
      } = se);
    },
    requestDraw: E,
    syncCanvasSize: ce,
    startAnimation: y,
    editorAnimating: v,
    tick: S,
    stageResizeObserver: D,
    watchPixelRatio: N,
    sampleEditorDiagnostics: W,
    stopRenderLoop: J
  };
}
function zi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function vN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function _N({
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
  var z, G;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
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
    historyEntries: Array.from({ length: 8 }, (x, q) => ({ index: q, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return u;
  const d = ((z = t.find((x) => i(e.paintColor, x.color))) == null ? void 0 : z.id) || "", f = !d, m = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((G = e.customPaintColor) == null ? void 0 : G.a) ?? 1))) * 100), g = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), p = e.brushSizes[g] ?? 10, F = l(), K = Array.from({ length: 8 }, (x, q) => e.customPaintHistory[q] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: d,
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
    historyEntries: K.map((x, q) => ({
      index: q,
      color: x ? { cssColor: n(x, 1) } : null
    })),
    sizeValue: p,
    sizeText: String(p),
    sizeFill: `${Math.max(0, Math.min(100, (p - 1) / 119 * 100))}%`,
    sizeDisabled: F,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function SN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const wN = {
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
function xN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = wN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function uc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function kN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function MN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function PN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const ro = "erp", NN = ["1:1", "4:3", "3:2", "16:9"];
function Eg(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...NN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: ro, label: Number(r) === 180 ? "180°" : "360°", active: e === ro }] : []
  ];
}
function CN({
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
    rows: xN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function AN({
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
  isExternalSticker: u,
  isStickerHidden: d,
  canRestoreSelectedToInitial: f,
  iconSet: m,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: _ = !1,
  cameraDeletable: g = !1,
  erpChoice: p = !1,
  coverage: F = 360
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
    ], u(t) || (K.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: m.duplicate }), K.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: m.replace_image })), u(t)) {
      const z = f(), G = d(t);
      K.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: z ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !z
      }), K.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? m.eye : m.eye_dashed
      });
    }
    K.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? m.lock_open : m.lock_closed }), u(t) || K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s });
  } else
    K = [
      {
        key: "aspect",
        kind: "aspect",
        icon: m.aspect,
        open: !!c,
        choices: Eg(l, { erp: p, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === ro }
    ], _ ? g && K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : K.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s }
    );
  return Og(i.corners, K);
}
const Qf = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function IN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? Qf.filter((s) => s.cameraTip) : Qf;
  return Og([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: c, cameraTip: u }) => ({ key: s, label: l, tip: n ? u : c, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: He.delete }] : []
  ]);
}
function EN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: c, maxY: u } = e || {};
  if (![s, l, c, u].every(Number.isFinite)) return null;
  const d = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), m = u + 18, _ = c - 18 - r;
  let g;
  return m <= f ? g = Math.max(m, 14) : _ >= 14 ? g = Math.min(_, f) : g = Math.min(Math.max(m, 14), f), { left: d, top: g };
}
function Og(e, t) {
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
const Fg = "painting";
function ON(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const FN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function TN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: c = !1, stickers: u = !0, scene: d = !1, sceneLocked: f = !1 }) {
  const m = (K, z, G, x, q, R, { keyable: ne = !0, hideable: B = !0 } = {}) => {
    const Z = (I) => (r == null ? void 0 : r.owner) === K && r.lane === I ? r.frames.map((ae) => ae + R) : [];
    return {
      id: K,
      label: G,
      icon: x,
      clip: q,
      selected: K === n,
      hideable: B,
      visible: z.visible,
      keyable: ne,
      open: ne && o.has(K),
      keys: M1(z).map((I) => ({ frame: I.frame + R, full: I.full })),
      selectedFrames: Z(null),
      lanes: (ne ? co(z) : []).map((I) => ({
        key: `${K}:${I}`,
        lane: I,
        label: FN[I],
        frames: z[I].keyframes.map((ae) => ae.frame + R),
        selectedFrames: Z(I)
      }))
    };
  }, _ = u ? e.stickers : [], g = _.filter((K) => K.placement === "sky").sort((K, z) => z.z_index - K.z_index), p = _.filter((K) => K.placement === "world"), F = ({ start: K, in: z, duration: G }) => ({ clip: { start: K, end: G === null ? null : K + G }, offset: K - z });
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
        const { clip: z, offset: G } = F(K.clip);
        return m(K.id, K, Oc(K), He.image, z, G);
      }),
      ...u && (ON(e.painting) || !e.painting_visible) ? [{
        id: Fg,
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
      ...u && (d || Fs(e.scene)) ? [(() => {
        const { clip: K, offset: z } = F(e.scene.clip);
        return m("scene", e.scene, "Scene", He.box, K, z, { keyable: !1 });
      })()] : []
    ]
  };
}
function DN(e, t, r, n) {
  const i = A1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function LN(e) {
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
    runtime: u,
    sceneV2: d,
    shotEditor: f,
    state: m,
    studio: _,
    type: g,
    uiState: p
  } = e;
  let F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue, me, _e, E, ce, y, v = 0;
  function V() {
    p.toolButtons.forEach((L) => {
      const le = L.attr === "data-tool-mode", ve = L.attr === "data-paint-tool", we = L.attr === "data-mask-tool";
      L.active = le ? L.value === r.primaryTool : ve ? L.key === r.paintTool : we ? L.key === r.maskTool : !1, L.pressed = L.active ? "true" : L.pressed == null ? null : "false";
    });
  }
  function U() {
    if (_ && zi(p.toolButtons, "value", "add-camera", { disabled: ie() }), g !== "cutout") return;
    const L = z();
    zi(p.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: L ? "Look At Frame" : "Add Frame",
      tip: L ? "Look at frame" : "Add frame",
      icon: L ? He.camera : He.plus_circle
    });
  }
  function S() {
    const L = kN({
      spaceView: fe(),
      spaceMode: Us(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    p.space && Object.assign(p.space, L.space);
    for (const [le, ve] of Object.entries(L.buttons)) zi(p.floatingButtons, "action", le, ve);
  }
  function w() {
    var ve;
    const L = MN({ hasShot: !!z(), erp: ge(), hidden: ie() && !K(), studio: _ });
    r.mode === "frame" && L.disabled && (_ ? re(z()) : r.mode = "pano"), r.outputPreviewRect = null, p.viewButtons.forEach((we) => {
      const pe = we.key === r.mode;
      we.pressed = pe ? "true" : "false", we.visible = !(we.key === "frame" && !f), we.key === "frame" ? Object.assign(we, L) : we.disabled = !1;
    });
    const le = f && r.mode === "frame" ? z() : null;
    p.frameRail.visible = !!le, p.frameRail.disabled = c || (le == null ? void 0 : le.locked) === !0, p.frameRollKnob.visible = !!le && !c && le.locked !== !0, p.frameRollKnob.disabled = c || (le == null ? void 0 : le.locked) === !0, p.frameRollKnob.rollDeg = Number((le == null ? void 0 : le.roll_deg) ?? (le == null ? void 0 : le.rot_deg) ?? 0), p.frameRollKnob.displayValue = Ji(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((ve = r.interaction) == null ? void 0 : ve.kind) === "roll_frame", p.frameRollKnob.armed = !!le && r.altModifier === !0, p.frameRail.rollKnob = p.frameRollKnob, p.frameRail.aspectLabel = le ? Er(le) : "", p.frameRail.aspectChoices = Eg(le ? String(Er(le)) : null, { erp: _, coverage: m.coverage }), le || (p.frameRail.aspectOpen = !1), p.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!z(), f && p.cameraPreview && (p.cameraPreview.visible = r.mode !== "frame" && F(), p.cameraPreview.expanded = !!r.outputPreviewExpanded, p.cameraPreview.settled = p.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), S(), H() ? ce(r.pointerPos) : ue(r.mode === "pano" ? "grab" : "default");
  }
  function D() {
    var le;
    const L = r.mode === "frame" ? z() : null;
    p.frameRollKnob.visible = !!L && !c && L.locked !== !0, p.frameRollKnob.rollDeg = Number((L == null ? void 0 : L.roll_deg) ?? (L == null ? void 0 : L.rot_deg) ?? 0), p.frameRollKnob.displayValue = Ji(p.frameRollKnob.rollDeg), p.frameRollKnob.dragging = ((le = r.interaction) == null ? void 0 : le.kind) === "roll_frame", p.frameRollKnob.armed = !!L && r.altModifier === !0;
  }
  function k() {
    V();
    const L = _N({
      editor: r,
      swatches: vl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: ur,
      colorsApproximatelyEqual: Bs,
      rgb01ToHsv: au,
      hsv01ToRgb: ou,
      getBrushPresetIdForTool: G,
      isActiveLassoTool: te
    });
    if (Object.assign(p.paintDock, L), E(), !L.visible) {
      i && (i.hidden = !0);
      return;
    }
    v && (clearTimeout(v), v = 0), o && (!L.colorEnabled && i && !i.hidden && (v = window.setTimeout(() => {
      i.hidden = !0, p.paintDock.colorPopOpen = !1, v = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", L.pickerHueColor), i.style.setProperty("--picker-sat", L.pickerSat), i.style.setProperty("--picker-val", L.pickerVal), i.style.setProperty("--picker-hue", L.pickerHue)), a && (a.style.left = L.pickerSvLeft, a.style.top = L.pickerSvTop), s && (s.style.left = L.pickerHueLeft));
  }
  function N() {
    const L = O(f && r.mode === "frame" ? z() : ne());
    L && (r.panelLastValues = {
      yaw_deg: Number(L.yaw_deg || 0),
      pitch_deg: Number(L.pitch_deg || 0),
      hFOV_deg: Number(L.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(L.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(L.rot_deg || 0),
      roll_deg: Number(L.roll_deg || 0),
      aspect_id: Er(L)
    }, A());
  }
  function A() {
    me(), _e(), J();
  }
  function W() {
    const L = f && r.mode === "frame" ? z() : null;
    return [...B(), Q(), L].some((le) => oe(le) ? Fs(le) : j(le) && ie() && Fs(m.camera));
  }
  function J() {
    if (n) return;
    m.ui_settings = m.ui_settings || {};
    const L = vN(m.ui_settings);
    if (l) {
      p.sidePanel = SN({
        coverage: m.coverage,
        uiSettings: L,
        normalizeCoverageValue: In
      });
      return;
    }
    const le = ne(), ve = f && r.mode === "frame" ? z() : null, we = ve || le, pe = ve ? [ve] : B(), be = ve ? "shot" : Z();
    if (pe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), we && be !== "stroke") {
      const xe = O(we);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (be === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (be === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Er(xe)
      }, oe(we) && (r.panelLastValues.opacity = _i(we, r.frame).opacity * 100);
    }
    const ye = r.panelLastValues || (g === "stickers" || be === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = be === "stroke" ? null : we, $ = Q(), C = t && (be === "shot" || be === "frame") && he(), b = $ ? ov($, r.frame) : C ? { ...h, ...nv(m.camera, r.frame), vFOV_deg: h.vFOV_deg } : oe(h) ? r.panelLastValues : h || ye, T = $ ? y($) : !!h && !P(h);
    r.panelWasEnabled = T, U();
    let M = null;
    if (ve) {
      const xe = ae({ item: ve, kind: "shot", label: "Frame" });
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
        const ze = z();
        ze && xe.push({ id: ze.id, label: "Camera", icon: I("frame"), item: ze, kind: "frame" }), R().forEach((je, We) => {
          var Ve, Ae;
          if (!je || oe(je) && !je.visible) return;
          const Re = d ? Oc(je) : de(je) ? String(je.id || fd) : String(((Ae = (Ve = m.assets) == null ? void 0 : Ve[je.asset_id]) == null ? void 0 : Ae.name) || je.asset_id || je.id), X = `${We + 1}. ${Re}${de(je) && Pe(je) ? " (hidden)" : ""}`, Ce = ae({ item: je, label: X, kind: "image" });
          xe.push({ id: je.id, label: Ce.label, icon: Ce.icon, item: je, kind: "image" });
        });
      } else
        x().forEach((ze) => {
          if (!(ze != null && ze.item)) return;
          const je = ae(ze);
          xe.push({ id: ze.item.id, label: je.label, icon: je.icon, item: ze.item, kind: ze.kind });
        });
      const Ne = (h == null ? void 0 : h.id) || "", Te = $ ? { label: Oc($), icon: He.globe } : xe.find((ze) => ze.id === Ne) || xe[0];
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
    const Y = [], ee = (xe, Ne, Te, ze, je) => {
      const We = Ee(Number(b[xe] || 0), Te, ze);
      Y.push({
        key: xe,
        label: Ne,
        min: Te,
        max: ze,
        step: je,
        value: We,
        displayValue: Ji(We),
        fillPct: Ee((We - Te) / Math.max(1e-6, ze - Te) * 100, 0, 100),
        enabled: T && !c
      });
    }, Se = [];
    if ($) {
      for (const [xe, Ne] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Te = uc(b[xe]);
        ee(xe, Ne, -Te, Te, 0.01);
      }
      ee("yaw_deg", "Yaw", -180, 180, 0.1), ee("pitch_deg", "Pitch", -90, 90, 0.1), ee("roll_deg", "Roll", -180, 180, 0.1), ee("scale", "Scale", xg, uc(b.scale), 0.01), ee("opacity", "Opacity", 0, 100, 1);
    } else if (pe.length > 1)
      Se.push(`Selected objects: ${pe.length}`), Se.push("Multi-selection supports z-order and delete.");
    else {
      const xe = be === "shot" || be === "frame";
      if (C)
        for (const [Ne, Te] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ze = uc(b[Ne]);
          ee(Ne, Te, -ze, ze, 0.01);
        }
      ee("yaw_deg", "Yaw", -180, 180, 0.1), ee("pitch_deg", "Pitch", -90, 90, 0.1), ee(be === "image" || g === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ee("hFOV_deg", "H FOV", 1, 179, 0.1), ee("vFOV_deg", "V FOV", 1, 179, 0.1), xe && Y.forEach((Ne) => {
        Ne.enabled = Ne.enabled && PN(Ne.key, { erp: ge() });
      }), d && !xe && ee("opacity", "Opacity", 0, 100, 1);
    }
    p.sidePanel = CN({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: M,
      enabled: T,
      selectedKind: $ ? "world" : be,
      selectedItems: pe,
      params: Y,
      notes: Se,
      uiSettings: L,
      normalizeCoverageValue: In
    });
  }
  function se() {
    const { canUndo: L, canRedo: le } = q();
    zi(p.toolButtons, "value", "undo", { disabled: !L }), zi(p.toolButtons, "value", "redo", { disabled: !le });
  }
  return {
    connect(L) {
      ({
        cameraPreviewShown: F,
        cameraShoots: K,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: G,
        getCutoutInspectorItems: x,
        getHistoryCapabilities: q,
        getList: R,
        getSelected: ne,
        getSelectedItems: B,
        getSelectedKind: Z,
        getSelectionItemIcon: I,
        getSelectionItemLabelData: ae,
        hasCamera: ie,
        hasSpaceContent: he,
        isActiveLassoTool: te,
        isErpCamera: ge,
        isExternalSticker: de,
        isItemLocked: P,
        isPaintCursorEnabled: H,
        isSceneSticker: oe,
        isShotItem: j,
        isSpaceView: fe,
        isStickerHidden: Pe,
        leaveFrameView: re,
        poseOf: O,
        selectedWorldSticker: Q,
        setCanvasCursor: ue,
        syncCutoutShot: me,
        syncTimeline: _e,
        syncVideoTransportVisibility: E,
        updateCursor: ce,
        worldStickerEditable: y
      } = L);
    },
    syncLookAtFrameButtonState: U,
    syncFloatingViewButtonState: S,
    syncViewToggleState: w,
    syncFrameRollKnob: D,
    syncPaintUi: k,
    syncSidePanelControls: N,
    updateSidePanel: A,
    inspectorTimed: W,
    syncSidePanelModel: J,
    syncUndoRedoButtons: se
  };
}
function VN(e) {
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
    timeline: u,
    timelinePlayhead: d,
    uiState: f,
    videoEl: m,
    videoTimelineFps: _
  } = e;
  let g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie;
  function he() {
    if (!l || o) return;
    const y = ge(), v = u.selection, V = v && de(v.owner);
    if (v) {
      const U = V ? P(v) : [];
      v.frames = v.frames.filter((S) => U.some((w) => V[w].keyframes.some((D) => D.frame === S))), v.frames.length || (u.selection = null);
    }
    f.timeline = TN(s, {
      span: y,
      selection: u.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: u.expanded ?? te(),
      openRows: u.openRows,
      audio: Pe() && f.videoTransport.hasAudio ? { muted: m.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: _(i) !== null || vm(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: F(),
      cameraHideable: c,
      stickers: !r,
      scene: a && !!yl(i).scene,
      sceneLocked: !!t
    }), f.easing = u.selection ? DN(V, P(u.selection), u.selection.frames, H(u.selection.owner)) : null;
  }
  function te() {
    return D1(s, { cameraOnly: r, camera: c });
  }
  function ge(y = null) {
    if (t != null && t.frames) return t.frames;
    const v = s.timeline.fps, V = s.stickers.find(z), U = V ? p() : null, S = Math.max(
      f.videoTransport.ready ? Math.round(Number(f.videoTransport.duration || 0) * v) : 0,
      U ? Cm(V.clip, v, U.meta) : 0
    );
    return jh(s, { minimum: Math.round(v * 5), frames: S, openClip: y, camera: r && !t || c });
  }
  function de(y) {
    return y === "camera" ? F() ? s.camera : null : y === "scene" ? a ? s.scene : null : s.stickers.find((v) => v.id === y) || null;
  }
  function P(y) {
    return y.lane ? [y.lane] : co(de(y.owner));
  }
  function H(y) {
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
    Z(), n.frame = v, d.frame.value = v, Z();
    const V = [n.selectedId, n.worldSelectedId];
    ne(), G(), V[0] !== n.selectedId || V[1] !== n.worldSelectedId ? ie() : K() && I(), ae(), B({ reason: dt.PLAYHEAD });
  }
  function Pe() {
    return m instanceof HTMLVideoElement && !!m.getAttribute("src");
  }
  function re(y) {
    R(), x.seek(y);
  }
  function O() {
    l && x.stop();
  }
  function Q() {
    R(), x.toggle();
  }
  function ue() {
    Z(), G(), ie(), ae(), B();
  }
  function me() {
    q(), g(), ue();
  }
  function _e() {
    const { selection: y } = u;
    j(y.owner) && (O(), N1(de(y.owner), P(y), y.frames, n.frame - H(y.owner)), u.selection = null, me());
  }
  function E(y) {
    const v = lo(y);
    if (v === null || v === s.timeline.fps) return;
    O();
    const V = Math.round(n.frame * v / s.timeline.fps);
    X1(s, v), u.selection = null, x.seek(V), me();
  }
  function ce() {
    const y = _(i);
    y !== null && y !== s.timeline.fps && E(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: p,
        hasCamera: F,
        inspectorTimed: K,
        isExternalSticker: z,
        markObjectVisualsDirty: G,
        playback: x,
        pushHistory: q,
        refreshModalVideoSource: R,
        releaseHiddenSelection: ne,
        requestDraw: B,
        syncCutoutShot: Z,
        syncSidePanelModel: I,
        updateSelectionMenu: ae,
        updateSidePanel: ie
      } = y);
    },
    syncTimeline: he,
    timelineTimed: te,
    timelineSpanFrames: ge,
    timelineOwner: de,
    selectedLanes: P,
    timelineOffset: H,
    clipView: oe,
    timelineEditable: j,
    setTimelineFrame: fe,
    jumpTimelineTo: re,
    stopTimelinePlayback: O,
    togglePlayback: Q,
    refreshTimelineEdit: ue,
    commitTimelineEdit: me,
    deleteSelectedKeyframes: _e,
    changeTimelineFps: E,
    applyVideoTimelineFps: ce
  };
}
function RN(e) {
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
  let c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H;
  function oe(j) {
    if (!(n || !o)) {
      if (j.type === "seek") {
        if (j.phase === "move") {
          s.scrubFrame = j.frame, t.request("seek");
          return;
        }
        t.cancel(), j.phase === "start" && F(), p.seek(j.frame);
        return;
      }
      if (j.type === "play") {
        ge();
        return;
      }
      if (j.type === "mute") {
        de(), Z();
        return;
      }
      if (j.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? te()), s.selection = null, Z();
        return;
      }
      if (j.type === "toggle-row") {
        s.openRows.has(j.id) ? s.openRows.delete(j.id) : s.openRows.add(j.id), Z();
        return;
      }
      if (j.type === "toggle-visible") {
        if (j.id === Fg) i.painting_visible = !i.painting_visible;
        else {
          const fe = ie(j.id);
          if (!fe || j.id === "camera" && !a) return;
          fe.visible = !fe.visible;
        }
        z(), f();
        return;
      }
      if (j.type === "select-row") {
        const fe = i.stickers.find((Pe) => Pe.id === j.id);
        if (fe && !fe.visible || j.id === "camera" && !c()) return;
        fe && !so(fe.clip, r.frame) && g(fe.clip.start), (fe == null ? void 0 : fe.placement) === "world" ? x(fe.id) : j.id === "camera" ? R(m()) : R(_().find((Pe) => Pe.id === j.id) || null), B(), s.selection = null, H(), P(), G();
        return;
      }
      if (j.type === "select-keys") {
        const fe = ae(j.owner), Pe = j.frames.map((Q) => Q - fe), re = s.selection, O = (re == null ? void 0 : re.owner) === j.owner && re.lane === j.lane;
        if (j.additive && O) {
          const Q = new Set(re.frames);
          for (const ue of Pe)
            Q.has(ue) ? Q.delete(ue) : Q.add(ue);
          re.frames = [...Q].sort((ue, me) => ue - me);
        } else
          s.selection = Pe.length ? { owner: j.owner, lane: j.lane, frames: Pe } : null;
        Z();
        return;
      }
      if (j.type === "move-keys") {
        const fe = s.selection;
        if (!fe || !I(fe.owner)) return;
        const Pe = ie(fe.owner), re = q(fe);
        if (j.phase === "start") {
          ne(), s.drag = { keyframes: re.map((ue) => structuredClone(Pe[ue].keyframes)), frames: fe.frames };
          return;
        }
        const { drag: O } = s;
        if (!(O != null && O.keyframes)) return;
        re.forEach((ue, me) => {
          Pe[ue].keyframes = structuredClone(O.keyframes[me]);
        });
        const Q = C1(Pe, re, O.frames, j.delta, -ae(fe.owner));
        if (fe.frames = O.frames.map((ue) => ue + Q), j.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, Q ? f() : K();
        return;
      }
      if (j.type === "clip") {
        const fe = j.id === "scene" ? ie("scene") : i.stickers.find((Q) => Q.id === j.id);
        if (!fe || fe.locked) return;
        if (j.phase === "start") {
          ne(), s.drag = { clip: { ...fe.clip }, span: he(fe.clip) };
          return;
        }
        const { drag: Pe } = s;
        if (!(Pe != null && Pe.clip)) return;
        const re = Pe.clip, O = d(fe.clip);
        if (fe.clip = { ...re }, j.delta && j.mode === "move" ? E1(fe.clip, j.delta) : j.delta && j.mode === "start" ? O1(fe.clip, re.start + j.delta) : j.delta && F1(fe.clip, (re.duration === null ? Pe.span : re.start + re.duration) + j.delta, Pe.span), j.phase !== "end") {
          t.request("timeline"), d(fe.clip) !== O && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, z(), JSON.stringify(fe.clip) !== JSON.stringify(re) ? f() : K();
        return;
      }
      if (j.type === "key-row") {
        if (j.owner === "scene" || !I(j.owner)) return;
        ne(), k1(ie(j.owner), r.frame - ae(j.owner)), f();
        return;
      }
      if (j.type === "fps") {
        const fe = V1(j.fps);
        if (fe === null || fe === i.timeline.fps || l.timeline.fpsLocked) {
          Z();
          return;
        }
        u(fe);
        return;
      }
      if (j.type === "length") {
        const fe = R1(j.length);
        if (fe === void 0 || fe === i.timeline.length) {
          Z();
          return;
        }
        ne(), i.timeline.length = fe, f();
        return;
      }
      if (j.type === "easing") {
        const fe = s.selection;
        if (!fe || !I(fe.owner)) return;
        ne(), I1(ie(fe.owner), q(fe), fe.frames, j.easing), j.commit ? f() : K();
      }
    }
  }
  return {
    connect(j) {
      ({
        cameraShoots: c,
        changeTimelineFps: u,
        clipView: d,
        commitTimelineEdit: f,
        getActiveCutoutShot: m,
        getList: _,
        jumpTimelineTo: g,
        playback: p,
        refreshModalVideoSource: F,
        refreshTimelineEdit: K,
        releaseHiddenSelection: z,
        requestDraw: G,
        selectWorldSticker: x,
        selectedLanes: q,
        setSelectedItem: R,
        stopTimelinePlayback: ne,
        syncFloatingViewButtonState: B,
        syncTimeline: Z,
        timelineEditable: I,
        timelineOffset: ae,
        timelineOwner: ie,
        timelineSpanFrames: he,
        timelineTimed: te,
        togglePlayback: ge,
        toggleVideoMuted: de,
        updateSelectionMenu: P,
        updateSidePanel: H
      } = j);
    },
    onTimelineAction: oe
  };
}
function $N(e) {
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
  let u, d, f, m;
  function _() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = d(Number(l.output_preset || 2048))), i && (l.coverage = In(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), g(), o.setDirtyCanvas(!0, !0));
  }
  function g() {
    var x;
    if (s) return;
    f(), Xh(l), l.coverage = In(l.coverage), qh(o, l.active);
    const G = Jh(o, l);
    c && !Zh(o, G, String(c.value ?? ""), { rebased: n }) && (c.value = G, (x = c.callback) == null || x.call(c, G));
  }
  function p() {
    l.ui_settings = LP(l.ui_settings), s || g();
  }
  function F() {
    var G;
    s || (g(), (G = o.setDirtyCanvas) == null || G.call(o, !0, !0));
  }
  function K() {
    s || u() && m().catch((G) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", G);
    });
  }
  function z(G = {}) {
    var R, ne, B, Z, I, ae, ie, he, te;
    const x = G.syncPreview !== !1, q = G.syncGraph !== !1;
    x && ((ne = (R = o.__panoPreviewNodeRuntime) == null ? void 0 : R.requestDraw) == null || ne.call(R), (Z = (B = o.__panoDomPreview) == null ? void 0 : B.requestDraw) == null || Z.call(B), (I = o.setDirtyCanvas) == null || I.call(o, !0, !1)), q && ((ie = (ae = o.graph) == null ? void 0 : ae.setDirtyCanvas) == null || ie.call(ae, !0, !0), (te = (he = t == null ? void 0 : t.canvas) == null ? void 0 : he.setDirty) == null || te.call(he, !0, !0));
  }
  return {
    connect(G) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: d,
        syncCutoutShot: f,
        syncPaintingLayerAsync: m
      } = G);
    },
    apply: _,
    commitState: g,
    persistUiSettings: p,
    commitAndRefreshNode: F,
    triggerBackgroundPersistenceOnClose: K,
    syncCoverageChangeToNodePreviews: z
  };
}
function zN(e) {
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
  let c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue;
  function me(U, S, w = "Clear") {
    return new Promise((D) => {
      l.confirmDialog = {
        visible: !0,
        title: String(U || ""),
        text: String(S || ""),
        confirmLabel: String(w || "Confirm"),
        resolve: D
      };
    });
  }
  async function _e() {
    var w, D;
    if (n || !await me(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = ao(null), ge();
    const S = d();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((k) => k.placement === "world" || S.includes(k)) : S, i || (o.assets = {}), r.selectedId = ((w = S[0]) == null ? void 0 : w.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((D = S[0]) == null ? void 0 : D.id) || null, P();
    else {
      const k = B1(o.shots, o.active.selected_shot_id);
      o.stickers = S, o.assets = {}, o.shots = k.shots, r.selectedId = k.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = k.selectedShotId, !k.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, P();
    }
    H(), f(), Q(), O(), oe();
  }
  async function E(U) {
    var N, A, W, J;
    if (n) return;
    const S = U === "mask" ? "mask" : "paint", w = S === "mask" ? "Mask" : "Paint", D = K(S);
    if (!(!D.length && !(((N = r.interaction) == null ? void 0 : N.kind) === "draw" && ((A = r.interaction) == null ? void 0 : A.layerKind) === S) || !await me(
      `Clear ${w}`,
      `This will remove all ${S} strokes in the current node.`,
      `Clear ${w}`
    ))) {
      if (((W = r.interaction) == null ? void 0 : W.kind) === "draw" && ((J = r.interaction) == null ? void 0 : J.layerKind) === S) {
        const se = _(r.interaction);
        se && r.paintEngine.cancelActiveStroke(se), r.interaction = null;
      }
      D.length = 0, o.painting.raster_objects = z().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") !== S), S === "paint" && (F().length = 0), ge(), H(), f(), Q(), O(), re(), oe();
    }
  }
  function ce() {
    if (n) return;
    const U = G();
    if (!U || !I(U) || q(U) || i && ie(U)) return;
    let S;
    i ? S = uv(U, ci("st"), p()) : (S = JSON.parse(JSON.stringify(U)), S.id = ci("st"), S.yaw_deg = $t((S.yaw_deg || 0) + 8), S.z_index = p()), o.stickers.push(S), o.active.selected_sticker_id = S.id, r.selectedId = S.id, r.selectedIds = [S.id], he(), H(), f(), O(), Q(), oe();
  }
  function y() {
    const U = j();
    return U ? (ue(U) && (fe(), lv(o, U.id), u(), he(), H(), f(), Q(), O(), Pe(), oe()), !0) : !1;
  }
  function v() {
    var w, D, k, N, A;
    if (n || t) return;
    const U = x(), S = G();
    if (!(!S && U.length === 0) && !U.some((W) => R(W))) {
      if (fe(), U.length > 1) {
        const W = new Set(U.filter((L) => ae(L)).map((L) => String(L.actionGroupId || L.id || ""))), J = new Set(U.filter((L) => ne(L)).map((L) => de(L.rasterObjectId || L.id || ""))), se = new Set(U.filter(I).map((L) => String(L.id || "")));
        W.size > 0 && (o.painting.paint.strokes = (Array.isArray((D = (w = o.painting) == null ? void 0 : w.paint) == null ? void 0 : D.strokes) ? o.painting.paint.strokes : []).filter((L) => !W.has(String((L == null ? void 0 : L.actionGroupId) || ""))), o.painting.groups = F().filter((L) => !W.has(String((L == null ? void 0 : L.actionGroupId) || (L == null ? void 0 : L.id) || ""))), ge()), J.size > 0 && (o.painting.raster_objects = z().filter((L) => !J.has(String((L == null ? void 0 : L.id) || ""))), te()), se.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((L) => se.has(String((L == null ? void 0 : L.id) || "")) ? q(L) ? (Z(L) || (L.visible = !1), !0) : !1 : !0), P(), he()), r.selectedId = null, r.selectedIds = [], H(), f(), Q(), O(), oe();
        return;
      }
      if (ae(S)) {
        const W = String(S.actionGroupId || S.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((N = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : N.strokes) ? o.painting.paint.strokes : []).filter((J) => String((J == null ? void 0 : J.actionGroupId) || "").trim() !== W), o.painting.groups = F().filter((J) => String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim() !== W), ge(), r.selectedId = null, r.selectedIds = [], H(), f(), Q(), O(), oe();
        return;
      }
      if (ne(S)) {
        const W = de(S.rasterObjectId || S.id || "");
        o.painting.raster_objects = z().filter((J) => String((J == null ? void 0 : J.id) || "").trim() !== W), te(), r.selectedId = null, r.selectedIds = [], H(), f(), Q(), O(), oe();
        return;
      }
      if (a && B(S)) {
        m();
        return;
      }
      if (s === "stickers" || I(S)) {
        if (q(S)) {
          if (Z(S)) return;
          S.visible = !1, he(), H(), f(), Q(), O(), oe();
          return;
        }
        o.stickers = o.stickers.filter((W) => W.id !== S.id), P(), he(), r.selectedId = ((A = g()[0]) == null ? void 0 : A.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, H(), f(), Q(), O(), oe();
        return;
      }
      c();
    }
  }
  function V() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", re(), Q());
  }
  return {
    connect(U) {
      ({
        clearCutoutFrame: c,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: f,
        deleteStudioCamera: m,
        getActivePaintTargetDescriptor: _,
        getList: g,
        getNextStickerZIndex: p,
        getPaintingGroupList: F,
        getPaintingLayerList: K,
        getRasterObjectList: z,
        getSelected: G,
        getSelectedItems: x,
        isExternalSticker: q,
        isItemLocked: R,
        isRasterObjectItem: ne,
        isShotItem: B,
        isStickerHidden: Z,
        isStickerItem: I,
        isStrokeGroupItem: ae,
        isUploadingSticker: ie,
        markObjectVisualsDirty: he,
        markPaintCompositeVisualsDirty: te,
        markPaintStrokeVisualsDirty: ge,
        parseRasterObjectSelectionId: de,
        pruneUnusedAssets: P,
        pushHistory: H,
        requestDraw: oe,
        selectedWorldSticker: j,
        stopTimelinePlayback: fe,
        syncFloatingViewButtonState: Pe,
        syncPaintUi: re,
        updateSelectionMenu: O,
        updateSidePanel: Q,
        worldStickerEditable: ue
      } = U);
    },
    clearAll: _e,
    clearPaintingLayer: E,
    duplicateSelected: ce,
    deleteSelectedWorldSticker: y,
    deleteSelected: v,
    forceCursorTool: V
  };
}
function jN(e) {
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
    sceneV2: u,
    stageWrap: d,
    state: f,
    type: m,
    vueModal: _
  } = e;
  let g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H;
  function oe(N) {
    return sd(N == null ? void 0 : N.dataTransfer);
  }
  function j(N) {
    const A = !!N;
    i.active !== A && (i.active = A, d.classList.toggle("drop-active", A));
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
    if (u) {
      de(), await me(N);
      return;
    }
    const A = ci("asset"), W = To(l, `add:${A}`, async () => {
      try {
        const { image: J } = await Do(N);
        s.set(A, J);
        const se = ci("st");
        f.stickers.push({
          id: se,
          asset_id: A,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: F(30, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1)),
          rot_deg: 0,
          z_index: x()
        }), he(f.stickers[f.stickers.length - 1]), G(), H(), P(), ae();
        const L = await li(N, {
          fetchApi: (we, pe) => t.fetchApi(we, pe)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((we) => String((we == null ? void 0 : we.asset_id) || "") === A).length) return;
        f.assets[A] = L, fe(), I(), p(), H(), P(), ae();
      } catch (J) {
        delete f.assets[A], s.delete(A);
        const se = Array.isArray(f.stickers) ? f.stickers : [], L = se.filter((le) => String((le == null ? void 0 : le.asset_id) || "") === A);
        throw L.length && (f.stickers = se.filter((le) => String((le == null ? void 0 : le.asset_id) || "") !== A), L.some((le) => String((le == null ? void 0 : le.id) || "") === String(o.selectedId || "")) && he(null), H(), P(), ae(), p()), J;
      }
    });
    try {
      await W;
    } catch {
    }
  }
  function re() {
    var N;
    c || m !== "stickers" && m !== "cutout" || (N = _ == null ? void 0 : _.openImagePicker) == null || N.call(_, "add");
  }
  function O() {
    var N;
    c || !u || (N = _ == null ? void 0 : _.openImagePicker) == null || N.call(_, "add-world");
  }
  async function Q(N) {
    c || !u || !Jn(N) || (de(), await me(N, "world"));
  }
  function ue() {
    const N = { x: r.width / 2, y: r.height / 2 }, A = ne() ? a.pick(z(), N.x, N.y, r.width, r.height) : null;
    return Ov(te(), A, K());
  }
  async function me(N, A = "sky") {
    const W = ci("st"), J = To(l, `add:${W}`, async () => {
      const { image: se } = await Do(N), L = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: F(30, Number(se.naturalWidth || se.width || 1), Number(se.naturalHeight || se.height || 1)),
        rot_deg: 0
      }, le = { kind: "file", filename: "" }, ve = A === "world" ? cv(W, le, ue()) : Ku(W, le, L, x());
      s.set(ge(ve), se), f.stickers.push(ve), A === "world" ? ie(W) : he(ve), G(), H(), P(), ae();
      try {
        const we = await li(N, {
          fetchApi: (be, ye) => t.fetchApi(be, ye)
        }), pe = f.stickers.find((be) => be.id === W);
        if (!pe) return;
        pe.source = os(we), s.set(ge(pe), se), I(), p();
      } catch (we) {
        throw f.stickers = f.stickers.filter((pe) => pe.id !== W), o.selectedId === W && he(null), o.worldSelectedId === W && g(), I(), p(), we;
      } finally {
        H(), P(), ae();
      }
    });
    try {
      await J;
    } catch {
    }
  }
  async function _e(N, A) {
    const W = To(l, `replace:${A}:${ci("asset")}`, async () => {
      const { image: J } = await Do(N), se = await li(N, {
        fetchApi: (le, ve) => t.fetchApi(le, ve)
      }), L = f.stickers.find((le) => le.id === A);
      if (L) {
        L.source = os(se), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const le of [L.size.value, ...L.size.keyframes.map((ve) => ve.value)])
          le.vFOV_deg = F(le.hFOV_deg, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1));
        s.set(ge(L), J), Z(), I(), p(), H(), P(), ae();
      }
    });
    try {
      await W;
    } catch {
    }
  }
  async function E(N) {
    if (c || m !== "stickers" && m !== "cutout") return;
    const A = q();
    if (!A || !B(A) || R(A) || !Jn(N)) return;
    if (u) {
      await _e(N, A.id);
      return;
    }
    const W = String(A.id || ""), J = ci("asset"), se = To(l, `replace:${W}:${J}`, async () => {
      var be;
      const L = (Array.isArray(f.stickers) ? f.stickers : []).find((ye) => String((ye == null ? void 0 : ye.id) || "") === W) || null;
      if (!L || !B(L) || R(L)) return;
      const le = String(L.asset_id || ""), ve = le ? cn(((be = f.assets) == null ? void 0 : be[le]) || null) : null, we = Number(L.vFOV_deg || 0), pe = L.crop && typeof L.crop == "object" ? { ...L.crop } : null;
      try {
        const { image: ye } = await Do(N);
        s.set(J, ye), L.asset_id = J, L.vFOV_deg = F(
          Number(L.hFOV_deg || 30),
          Number(ye.naturalWidth || ye.width || 1),
          Number(ye.naturalHeight || ye.height || 1)
        ), L.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Z(), H(), P(), ae();
        const h = await li(N, {
          fetchApi: (C, b) => t.fetchApi(C, b)
        }), $ = (Array.isArray(f.stickers) ? f.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === W) || null;
        if (!$ || String($.asset_id || "") !== J) return;
        f.assets[J] = h, fe(), I(), p(), H(), P(), ae();
      } catch (ye) {
        delete f.assets[J], s.delete(J);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find(($) => String(($ == null ? void 0 : $.id) || "") === W) || null;
        throw h && String(h.asset_id || "") === J && (le && ve && (f.assets[le] = ve), h.asset_id = le, h.vFOV_deg = we, h.crop = pe ? { ...pe } : null), Z(), p(), H(), P(), ae(), ye;
      }
    });
    try {
      await se;
    } catch {
    }
  }
  function ce() {
    var A;
    if (c) return;
    const N = q();
    !N || !B(N) || R(N) || (A = _ == null ? void 0 : _.openImagePicker) == null || A.call(_, "replace");
  }
  async function y() {
    if (c || m !== "stickers") return;
    if (u) {
      await v();
      return;
    }
    const N = f.assets && typeof f.assets == "object" ? f.assets : {}, A = Object.entries(N).filter(([, J]) => {
      const se = String((J == null ? void 0 : J.type) || "").toLowerCase(), L = String((J == null ? void 0 : J.value) || "");
      return se === "dataurl" && L.startsWith("data:image");
    });
    if (!A.length) return;
    let W = !1;
    for (const [J, se] of A)
      try {
        const L = String((se == null ? void 0 : se.value) || "");
        if (!L) continue;
        const le = await fetch(L).then((ye) => ye.blob()), ve = String(le.type || "image/png").split("/")[1] || "png", we = String((se == null ? void 0 : se.name) || `${J}.${ve}`), pe = new File([le], we, { type: le.type || "image/png" }), be = await li(pe, {
          fetchApi: (ye, h) => t.fetchApi(ye, h)
        });
        f.assets[J] = {
          ...be,
          w: Number((se == null ? void 0 : se.w) || 0),
          h: Number((se == null ? void 0 : se.h) || 0)
        }, W = !0;
      } catch {
      }
    W && (p(), ae());
  }
  async function v() {
    let N = !1;
    for (const A of f.stickers) {
      const W = A.source.data_url;
      if (W)
        try {
          const J = await fetch(W).then((ve) => ve.blob()), se = String(J.type || "image/png").split("/")[1] || "png", L = new File([J], `${A.id}.${se}`, { type: J.type || "image/png" }), le = await li(L, {
            fetchApi: (ve, we) => t.fetchApi(ve, we)
          });
          A.source = os(le), N = !0;
        } catch {
        }
    }
    N && (p(), ae());
  }
  function V(N) {
    m !== "stickers" && m !== "cutout" || c || (N.preventDefault(), j(!0));
  }
  function U(N) {
    var J;
    if (m !== "stickers" && m !== "cutout" || c) return;
    N.preventDefault(), N.stopPropagation(), i.depth = 0, j(!1);
    const W = Array.from(((J = N.dataTransfer) == null ? void 0 : J.files) || []).find((se) => Jn(se));
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
        computeStickerVFov: F,
        contentSphere: K,
        currentSpaceCamera: z,
        forceCursorTool: G,
        getNextStickerZIndex: x,
        getSelected: q,
        isExternalSticker: R,
        isSpaceView: ne,
        isStickerItem: B,
        markObjectVisualsDirty: Z,
        pushHistory: I,
        requestDraw: ae,
        selectWorldSticker: ie,
        setSelectedItem: he,
        spaceViewState: te,
        stickerImageKey: ge,
        stopTimelinePlayback: de,
        updateSelectionMenu: P,
        updateSidePanel: H
      } = N);
    },
    addImageStickerFromFile: Pe,
    addImageSticker: re,
    addWorldImageSticker: O,
    addWorldStickerFromFile: Q,
    replaceSelectedImageFromFile: E,
    replaceSelectedImage: ce,
    migrateLegacyEmbeddedAssets: y,
    pruneUnusedAssets: fe,
    setDropCue: j,
    onCanvasDragOver: V,
    onCanvasDrop: U,
    onWindowDragEnter: S,
    onWindowDragOver: w,
    onWindowDragLeave: D,
    onWindowDrop: k
  };
}
function HN(e) {
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
    stageWrap: u,
    state: d,
    studio: f,
    tooltip: m,
    type: _,
    uiState: g
  } = e;
  let p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue, me, _e, E, ce, y, v = a;
  function V(b, T) {
    var ee;
    const M = (ee = R().space) == null ? void 0 : ee.gizmo;
    if (ie() && M && y("hover", T) !== null && y("down", T))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: M.mode, start: M.transform, base: q(), changed: !1 }, r.setPointerCapture(b.pointerId), _e(T), !0;
    const Y = cm(q(), F(fe()));
    return zv(x(), Y, T, r.width, r.height) ? (ie() || (j(le()), ce(), E(), H()), i.interaction = { kind: "world_select" }, r.setPointerCapture(b.pointerId), !0) : !1;
  }
  function U() {
    if (s || _ !== "cutout") return;
    const b = le();
    if (b) {
      j(b), i.mode = "pano", n && he() ? ue(im(de(Pe(), b.position), z(), r.width, r.height)) : me($t(Number(b.yaw_deg || 0)), Ee(Number(b.pitch_deg || 0), -89.9, 89.9)), ce(), E(), H({ cause: "cutout_frame" });
      return;
    }
    const T = yh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    d.shots = [T], j(T), ne(), i.mode = "pano", P(), G(), ce(), E(), H({ cause: "cutout_frame" });
  }
  function S() {
    s || !f || Z() || (re(), d.camera = Q1(Pe()), se(), j(le()), ne(), P(), G(), ce(), E(), H({ cause: "cutout_frame" }));
  }
  function w() {
    re(), d.camera = null, j(null), se(), P(), G(), ce(), E(), H({ cause: "cutout_frame" });
  }
  function D(b, T) {
    f && te(b) && (d.camera.projection = T === ro ? "erp" : "perspective", T === ro) || A(b, T);
  }
  function k() {
    s || _ !== "cutout" || (d.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, d.active.selected_shot_id = null, P(), G(), ce(), E(), H());
  }
  function N(b, T) {
    const M = l.frameSafeRect;
    if (!b || !M || i.mode !== "frame") return !1;
    const Y = iu * vi(M, b), ee = Tu(Fu(M, T), Y);
    return b.hFOV_deg = ee.hFOV_deg, b.vFOV_deg = ee.vFOV_deg, !0;
  }
  function A(b, T) {
    if (!b || b.locked === !0) return;
    const M = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, Y = (() => {
      const Ne = String(b.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(Ne)) {
        const [je, We] = Ne.split(":").map((Re) => Number(Re));
        if (Number.isFinite(je) && Number.isFinite(We)) return je >= We;
      }
      const Te = Number(b.hFOV_deg || 64), ze = Number(b.vFOV_deg || 40);
      return Math.abs(Te - ze) > 1e-6 ? Te >= ze : xi(b) >= 1;
    })();
    let [ee, Se] = M[String(T)] || M["1:1"];
    ee >= Se !== Y && ([ee, Se] = [Se, ee]);
    const xe = ee / Se;
    if (!N(b, xe)) {
      const Ne = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = Ne, b.hFOV_deg = ns(Ne, xe);
    }
    b.aspect_id = `${ee}:${Se}`;
  }
  function W(b, T, M) {
    if (!b || b.locked === !0) return !1;
    const Y = sa(T, M);
    if (!Y) return !1;
    const ee = Y.ratio;
    if (!N(b, ee)) {
      const Se = Ee(Number(b.vFOV_deg || 40), 1, 179);
      b.vFOV_deg = Se, b.hFOV_deg = ns(Se, ee);
    }
    return b.aspect_id = Y.label, !0;
  }
  function J(b) {
    if (!b || b.locked === !0) return;
    const T = String(b.aspect_id || "").trim(), M = Jr(b), Y = M.tanHalfX / Math.max(1e-12, M.tanHalfY), ee = 1 / Math.max(1e-12, Y);
    if (!N(b, ee)) {
      const Se = Ee(Number(b.vFOV_deg || 60), 1, 179);
      b.vFOV_deg = Se, b.hFOV_deg = ns(Se, ee);
    }
    if (/^\d+:\d+$/.test(T)) {
      const [Se, xe] = T.split(":");
      b.aspect_id = `${xe}:${Se}`;
    } else
      b.aspect_id = mi(b);
  }
  function se(b = !0) {
    var Y, ee;
    if (!t) return;
    const T = v;
    if (!K()) {
      v = null, (Y = d.shots) != null && Y.length && (d.shots = []), T && L(T, null);
      return;
    }
    const M = (ee = d.shots) == null ? void 0 : ee[0];
    b && M && v && tv(d.camera, i.frame, M, v), v = Bh(d.camera, i.frame), M ? Object.assign(M, v, { position: [...v.position] }) : d.shots = [{ ...v, position: [...v.position] }], T || L(null, v);
  }
  function L(b, T) {
    var Se, xe;
    !T && i.mode === "frame" && ge(b);
    const M = (T == null ? void 0 : T.position) ?? [0, 0, 0];
    if (((xe = (Se = i.viewTransition) == null ? void 0 : Se.end) == null ? void 0 : xe.mode) === "3dof") {
      ue({ ...Pe(), position: M }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !I()) return;
    const Y = (b == null ? void 0 : b.position) ?? [0, 0, 0];
    if (Y.every((Ne, Te) => Ne === M[Te])) return;
    const ee = { ...Pe(), position: Y };
    p({ mode: "6dof", position: Y, moved: !0 }), i.viewDistance = ee.distance, ue({ ...ee, position: M }, { mode: "3dof", moved: !1 });
  }
  function le() {
    if (!c) return null;
    const b = Array.isArray(d.shots) ? d.shots : [];
    if (!b.length) return null;
    const T = String(d.active.selected_shot_id || "");
    return b.find((M) => String((M == null ? void 0 : M.id) || "") === T) || b[0] || null;
  }
  function ve(b, T, M = {}) {
    var Se;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    b.accumulatedRad += hh(T, b.lastAngle), b.lastAngle = T;
    const Y = mh(b.start.roll_deg, b.accumulatedRad, {
      shiftKey: M.shiftKey,
      altKey: b.altStarted ? !1 : M.altKey
    });
    b.shot.roll_deg = Y, b.changed = b.changed || Math.abs(b.accumulatedRad) > 1e-9;
    const ee = (((Se = g.sidePanel) == null ? void 0 : Se.params) || []).find((xe) => xe.key === "roll_deg");
    ee && (ee.value = Y, ee.displayValue = Ji(Y), ee.fillPct = (Y + 180) / 360 * 100), O(), be(b), H({ localOnly: !0 });
  }
  function we(b, T, M = {}) {
    var Se;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot || !b.rollGesture) return;
    const Y = qm(b.rollGesture, T, M);
    if (!Y) return;
    b.rollGesture = Y.gesture, b.center = Y.gesture.center, b.lastAngle = Y.gesture.lastAngle, b.accumulatedRad = Y.gesture.accumulatedRad, b.shot.roll_deg = Y.rollDeg, b.changed = b.changed || Math.abs(Y.gesture.accumulatedRad) > 1e-9;
    const ee = (((Se = g.sidePanel) == null ? void 0 : Se.params) || []).find((xe) => xe.key === "roll_deg");
    ee && (ee.value = Y.rollDeg, ee.displayValue = Ji(Y.rollDeg), ee.fillPct = (Y.rollDeg + 180) / 360 * 100), O(), be(b), H({ localOnly: !0 });
  }
  function pe(b, T) {
    const M = oe(b);
    return Math.atan2(M.y - T.y, M.x - T.x);
  }
  function be(b) {
    var xe, Ne;
    if ((b == null ? void 0 : b.kind) !== "roll_frame" || !b.shot) return;
    m.timer && (clearTimeout(m.timer), m.timer = 0), m.target = null;
    const T = B(b.shot), M = (xe = r.getBoundingClientRect) == null ? void 0 : xe.call(r), Y = (Ne = u.getBoundingClientRect) == null ? void 0 : Ne.call(u);
    if (!T || !M || !Y || r.width <= 0 || r.height <= 0) return;
    const ee = M.width / r.width, Se = M.height / r.height;
    g.tooltip.text = `${Ji(b.shot.roll_deg)}°`, g.tooltip.left = M.left - Y.left + (T.x + T.w * 0.5) * ee, g.tooltip.top = M.top - Y.top + (T.y + T.h * 0.5) * Se + 12, g.tooltip.variant = "roll", g.tooltip.visible = !0;
  }
  function ye(b) {
    var Se;
    if (b.button !== 0 || s || i.mode !== "frame") return;
    const T = le();
    if (!T || T.locked === !0) return;
    const M = B(T);
    if (!M) return;
    const Y = { x: M.x + M.w * 0.5, y: M.y + M.h * 0.5 }, ee = pe(b, Y);
    i.interaction = {
      kind: "roll_frame",
      shot: T,
      center: Y,
      lastAngle: ee,
      accumulatedRad: 0,
      start: { roll_deg: Number(T.roll_deg ?? T.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (Se = o.setPointerCapture) == null || Se.call(o, b.pointerId), b.preventDefault(), O(), be(i.interaction), H({ localOnly: !0 });
  }
  function h(b) {
    var T;
    ((T = i.interaction) == null ? void 0 : T.kind) !== "roll_frame" || i.interaction.source !== "knob" || ve(
      i.interaction,
      pe(b, i.interaction.center),
      b
    );
  }
  function $() {
    const b = i.interaction;
    (b == null ? void 0 : b.kind) !== "roll_frame" || b.source !== "knob" || (b.changed && (P(), G(), ce()), i.interaction = null, ae(), Q(), O(), H());
  }
  function C(b) {
    const T = i.mode === "frame" && !s ? le() : null;
    !T || T.locked === !0 || Math.abs(Number(T.roll_deg ?? T.rot_deg ?? 0)) <= 1e-9 || (T.roll_deg = 0, P(), G(), ce(), O(), H(), b.preventDefault());
  }
  return {
    connect(b) {
      ({
        applySpaceMode: p,
        cameraFrustumLength: F,
        cameraShoots: K,
        cameraSphere: z,
        commitAndRefreshNode: G,
        currentSpaceCamera: x,
        cutoutCamera: q,
        editorViewInput: R,
        forceCursorTool: ne,
        getFrameViewRect: B,
        hasCamera: Z,
        hasSpaceContent: I,
        hideTooltip: ae,
        isCameraSelected: ie,
        isFreeSpaceView: he,
        isShotItem: te,
        leaveFrameView: ge,
        lookingAt: de,
        pushHistory: P,
        requestDraw: H,
        screenPos: oe,
        setSelectedItem: j,
        spaceScale: fe,
        spaceViewState: Pe,
        stopTimelinePlayback: re,
        syncFrameRollKnob: O,
        syncViewToggleState: Q,
        transitionView: ue,
        turnViewTo: me,
        updateCursor: _e,
        updateSelectionMenu: E,
        updateSidePanel: ce,
        worldGizmoPointer: y
      } = b);
    },
    addCutoutFrame: U,
    addStudioCamera: S,
    deleteStudioCamera: w,
    setShotAspect: D,
    clearCutoutFrame: k,
    applyCutoutAspectCustom: W,
    rotateCutoutAspect90: J,
    syncCutoutShot: se,
    getActiveCutoutShot: le,
    startCameraPress: V,
    applySharedRollInteractionPoint: we,
    onFrameRollKnobPointerDown: ye,
    onFrameRollKnobPointerMove: h,
    finishKnobRoll: $,
    onFrameRollKnobDoubleClick: C
  };
}
function GN(e) {
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
    runtime: u,
    shotEditor: d,
    toolRailEl: f,
    uiState: m,
    videoTransportEl: _
  } = e;
  let g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te = null;
  function ge(w) {
    if (n.mode = "pano", !w) return;
    p();
    const D = I().distance;
    n.viewYaw = $t(w.yaw_deg), n.viewPitch = Ee(w.pitch_deg, -89.9, 89.9), n.viewFov = Ee(w.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...w.position], moved: !0 }), n.viewDistance = D, u.backgroundDirty = !0;
  }
  function de() {
    var be, ye, h, $, C;
    if (!r) return null;
    const w = (be = r.getBoundingClientRect) == null ? void 0 : be.call(r), D = Number((w == null ? void 0 : w.width) || 0) > 0 ? r.width / w.width : 1, k = Number((w == null ? void 0 : w.height) || 0) > 0 ? r.height / w.height : 1;
    u.frameCanvasScale = Math.min(D, k);
    let N = 24, A = 24;
    const W = Math.max(N + 1, r.width - 24);
    let J = Math.max(A + 1, r.height - 24);
    const se = (ye = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : ye.call(f), L = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let le = 24;
    se && w && se.width > 0 && se.height > 0 && (le = Math.max(le, (se.right - w.left) * D + Yf)), L && w && L.width > 0 && L.height > 0 && (($ = m.frameRail) == null ? void 0 : $.visible) === !0 && (le = Math.max(le, (w.right - L.left) * D + Yf)), N = Math.max(N, le);
    const ve = Math.min(W, r.width - le);
    let we = 24;
    const pe = (C = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : C.call(a);
    if (pe && w && pe.width > 0 && pe.height > 0 && (we = Math.max(we, (pe.bottom - w.top) * k + oc)), [l, _].forEach((b) => {
      var Y;
      if (!b || !w) return;
      const T = getComputedStyle(b);
      if (T.display === "none" || T.visibility === "hidden" || Number(T.opacity) <= 0) return;
      const M = (Y = b.getBoundingClientRect) == null ? void 0 : Y.call(b);
      !M || M.width <= 0 || M.height <= 0 || (we = Math.max(we, (w.bottom - M.top) * k + oc));
    }), o && w) {
      const b = getComputedStyle(o);
      b.display !== "none" && b.visibility !== "hidden" && Number(b.opacity) > 0 && (we = Math.max(we, (yP + oc) * k));
    }
    return A = Math.max(A, we), J = Math.max(A + 1, Math.min(J, r.height - we)), {
      x: N,
      y: A,
      w: Math.max(1, ve - N),
      h: Math.max(1, J - A)
    };
  }
  function P(w = z()) {
    if (!w || !r) return null;
    const D = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Wb(D, w, iu * vi(D, w));
  }
  function H(w = z()) {
    const D = P(w);
    return D ? { x: D.x, y: D.y, w: D.w, h: D.h } : null;
  }
  function oe() {
    return d && !!z();
  }
  function j(w, D) {
    const k = z();
    if (!k || k.locked === !0) return !1;
    const N = Number(D) > 0, A = vh(k, D);
    if (!A) return !1;
    if (N) {
      const W = iu * vi(
        u.frameSafeRect || { w: r.width, h: r.height },
        A
      ), J = Du({ width: r.width, height: r.height }, W);
      if (J.halfW < r.width * 0.5 - 1e-6 || J.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return k.hFOV_deg = A.hFOV_deg, k.vFOV_deg = A.vFOV_deg, fe(), he(), !0;
  }
  function fe() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, R(), F(), he());
    }, 180);
  }
  function Pe() {
    return t && n.mode === "frame" && G();
  }
  function re() {
    const w = z(), D = P(w);
    return w && D ? fm(w, D, { width: r.width, height: r.height }) : null;
  }
  function O() {
    var w;
    return ((w = K()) == null ? void 0 : w.radius) || er;
  }
  function Q(w) {
    const { position: D, yaw_deg: k, pitch_deg: N, roll_deg: A, hFOV_deg: W } = w.shot;
    return { position: D, yaw_deg: k, pitch_deg: N, roll_deg: A, hFOV_deg: W, distance: O() };
  }
  function ue(w, D) {
    const { rect: k } = w;
    return i.pickSurface(B(w.shot), D.x - k.x, D.y - k.y, k.w, k.h);
  }
  function me(w, D, k) {
    return Tc(D, ue(w, k), null, Z());
  }
  function _e(w) {
    return JSON.stringify([Q(w), w.rect]);
  }
  function E(w) {
    const D = z();
    D.position = [...w.position], D.yaw_deg = w.yaw_deg, D.pitch_deg = w.pitch_deg;
  }
  function ce(w, D) {
    const k = z();
    !k || c || k.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: k,
      last: w,
      start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
      changed: !1
    }, ie(w), r.setPointerCapture(D));
  }
  function y(w, D, k) {
    const N = re();
    if (!N || c) return;
    const A = Q(N);
    n.interaction = w === "orbit" ? { kind: "frame_orbit", last: D, pivot: me(N, A, D), changed: !1 } : { kind: "frame_pan", last: D, depth: Qh(A, Z()), changed: !1 }, ie(D), r.setPointerCapture(k);
  }
  function v(w, D) {
    const k = re();
    if (!k) return;
    const N = Q(k), A = D.x - w.last.x, W = D.y - w.last.y;
    E(w.kind === "frame_pan" ? nm(N, A, W, k.rect.w, k.rect.h, w.depth) : tm(N, A, W, r.height, w.pivot)), w.changed = w.changed || A !== 0 || W !== 0, w.last = D, ne({ localOnly: !0, cause: "frame_view" });
  }
  function V(w, D) {
    const k = re();
    if (!k || c) return;
    const N = Q(k), A = performance.now(), W = { x: w.x, y: w.y, time: A, key: i.contentRevision(), view: _e(k) };
    if (!em(te, W)) {
      const J = ue(k, w);
      te = { ...W, cost: performance.now() - A, hit: J };
    }
    E(rm(N, Tc(N, te.hit, null, Z()), D, Z())), te.view = _e(re() ?? k), te.wheelTime = A, fe(), he(), ne({ localOnly: !0, cause: "frame_view" });
  }
  function U() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, R(), F(), he(), !0) : !1;
  }
  function S() {
    const w = n.interaction;
    if (!(w != null && w.shot) || !w.start || w.kind !== "pan_frame" && w.kind !== "roll_frame") return !1;
    const D = w.kind === "roll_frame";
    return w.kind === "pan_frame" ? (w.shot.yaw_deg = w.start.yaw_deg, w.shot.pitch_deg = w.start.pitch_deg) : w.shot.roll_deg = w.start.roll_deg, D && x(), n.interaction = null, q(), ae(), he(), ie(n.pointerPos), ne({ localOnly: !0 }), !0;
  }
  return {
    connect(w) {
      ({
        applySpaceMode: g,
        cancelViewTransition: p,
        commitAndRefreshNode: F,
        contentSphere: K,
        getActiveCutoutShot: z,
        hasSpaceContent: G,
        hideTooltip: x,
        invalidateLivePaintPreviewCaches: q,
        pushHistory: R,
        requestDraw: ne,
        shotViewCamera: B,
        spaceScale: Z,
        spaceViewState: I,
        syncViewToggleState: ae,
        updateCursor: ie,
        updateSidePanel: he
      } = w);
    },
    leaveFrameView: ge,
    measureFrameSafeRect: de,
    getFrameViewLayout: P,
    getFrameViewRect: H,
    supportsFramePainting: oe,
    zoomFrameViewAt: j,
    isFreeFrameView: Pe,
    frameContext: re,
    frameViewDistance: O,
    frameSpaceView: Q,
    frameTarget: me,
    startPanFrame: ce,
    startFrameDrag: y,
    dragFrame: v,
    zoomFrameAt: V,
    flushFrameWheelCommit: U,
    cancelFrameCameraGesture: S
  };
}
function WN(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne = 0;
  function B() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function Z() {
    return String(B() || "") === "lasso_fill";
  }
  function I() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ae(E, ce) {
    const y = Number(ce || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function ie(E) {
    const ce = String(E || "").trim();
    return ce === "eraser" ? Cr : Mn[ce] ? ce : t.activeBrushPresetId || Cr;
  }
  function he() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (I() || R());
  }
  function te() {
    var E;
    return he() && ((E = t.pointerPos) == null ? void 0 : E.inside) === !0;
  }
  function ge(E, ce = !0) {
    const y = Number((E == null ? void 0 : E.x) || 0), v = Number((E == null ? void 0 : E.y) || 0), V = ce !== !1, U = t.pointerPos || { x: 0, y: 0, inside: !1 }, S = U.inside !== V || Math.abs(U.x - y) > 0.01 || Math.abs(U.y - v) > 0.01;
    return t.pointerPos = { x: y, y: v, inside: V }, S;
  }
  function de() {
    var N, A;
    if (!te()) return null;
    const E = t.primaryTool === "mask" ? "mask" : "paint", ce = E === "mask" ? t.maskTool : t.paintTool, y = ie(ce), v = Mn[y] || Mn[Cr], V = Number(t.brushSizes[y] ?? 10), U = Math.max(1, V) * Math.max(0.1, Number(v.sizeScale ?? 1)), S = Math.max(3, U * 0.5), w = E === "mask" ? ce === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ce === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Fn(t.paintColor), D = E === "mask" ? ce === "lasso_fill" ? 0.18 : 0.2 : ce === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), k = E === "mask" ? 0.95 : ce === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: E,
      toolKind: ce,
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
    var W, J, se;
    const E = de();
    if (!r) return;
    if (!E) {
      r.style.display = "none";
      return;
    }
    let ce = E.radius * 2, y = E.radius * 2, v = "999px", V = 0, U = E.fillStyle, S = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const D = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let N = Number(E.hotspotX ?? ce * 0.5), A = Number(E.hotspotY ?? y * 0.5);
    if (E.toolKind === "lasso_fill")
      ce = Ks, y = Ks, v = "0", S = "0", w = "none", N = _P, A = SP, U = CP(E.fillStyle, k, D);
    else if (E.layerKind === "mask")
      U = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (E.toolKind === "marker") {
      const L = Math.max(1, Number(((W = E.preset) == null ? void 0 : W.aspect) ?? 1));
      ce = Math.max(10, E.radius * 2 * L), y = Math.max(6, E.radius * 2), v = `${Math.min(6, y * 0.42)}px`, V = Number(((se = (J = E.preset) == null ? void 0 : J.angle) == null ? void 0 : se.value) || 0) * Si;
    } else E.toolKind === "brush" ? U = `radial-gradient(circle at 50% 50%, ${E.strokeStyle} 0%, ${E.fillStyle} 45%, rgba(0,0,0,0) 100%)` : E.toolKind === "eraser" && (U = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ce)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = v, r.style.border = S, r.style.boxShadow = w, r.style.background = U, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(E.x - N)}px, ${Math.round(E.y - A)}px) rotate(${V}deg)`;
  }
  function H() {
    var we;
    if (!n || !i) return;
    const E = t.primaryTool === "mask" ? "mask" : "paint", ce = E === "mask" ? t.maskTool : t.paintTool;
    if (ce === "lasso_fill") return;
    const y = ie(ce), v = Mn[y] || Mn[Cr], V = Number(t.brushSizes[y] ?? 10), U = Math.max(1, V) * Math.max(0.1, Number(v.sizeScale ?? 1)), S = Math.max(6, U * 0.5), w = ce === "eraser", D = E === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : Fn(t.paintColor), k = E === "mask" ? ur(D, 0.22) : w ? "rgba(255,255,255,0.14)" : ur(D, Ee(Math.max(0.18, Number(D.a ?? 1) * 0.34), 0.18, 0.56)), N = E === "mask" ? ur(D, 0.96) : w ? "rgba(255,255,255,0.72)" : ur(D, Ee(Math.max(0.56, Number(D.a ?? 1) * 0.96), 0.56, 1));
    let A = S * 2, W = S * 2, J = "999px", se = 0, L = k;
    const le = "rgba(222, 222, 222, 0.72)", ve = "rgba(52, 52, 52, 0.72)";
    if (E === "mask")
      L = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ce === "marker") {
      const pe = Math.max(1, Number((v == null ? void 0 : v.aspect) ?? 1));
      A = Math.max(16, S * 2 * pe), W = Math.max(10, S * 2), J = `${Math.min(8, W * 0.42)}px`, se = Number(((we = v == null ? void 0 : v.angle) == null ? void 0 : we.value) || 0) * Si;
    } else ce === "brush" ? L = `radial-gradient(circle at 50% 50%, ${N} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : ce === "lasso_fill" ? (A = Math.max(18, S * 1.8), W = A, L = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : w && (L = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(A)}px`, i.style.height = `${Math.round(W)}px`, i.style.borderRadius = J, i.style.background = L, i.style.border = `1px solid ${le}`, i.style.boxShadow = `0 0 0 1px ${ve}`, i.style.transform = `rotate(${se}deg)`, ne && (clearTimeout(ne), ne = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function oe() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ne && clearTimeout(ne), ne = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ne = 0;
    }, 180));
  }
  function j(E, ce, y, v) {
    const V = ie(ce), U = Mn[V] || Mn[Cr], S = t.brushSizes[V] ?? 10, w = Math.max(1, S) * Math.max(0.1, U.sizeScale ?? 1), D = ae(v, w), k = y.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), N = {
      id: Hi(E),
      actionGroupId: Hi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: E,
      toolKind: ce,
      size: w,
      createdAt: Date.now(),
      color: E === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: D.radiusModel,
      radiusValue: D.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((A) => ({ ...A })),
        points: k.map((A) => ({ ...A }))
      }
    };
    return Uf(N, U), t.mode, Number(U.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function fe(E, ce, y, v) {
    const V = y.map((D) => ({
      ...D,
      t: Number((D == null ? void 0 : D.t) || 0),
      widthScale: Number.isFinite(Number(D == null ? void 0 : D.widthScale)) ? Math.max(0, Number(D.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(D == null ? void 0 : D.pressureLike)) ? Math.max(0, Number(D.pressureLike)) : 1
    })), U = ie(ce), S = Mn[U] || Mn[Cr], w = {
      id: Hi(E),
      actionGroupId: Hi("ag"),
      targetSpace: v && typeof v == "object" ? { ...v, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: E,
      toolKind: ce,
      size: 10,
      createdAt: Date.now(),
      color: E === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: V.map((D) => ({ ...D }))
      }
    };
    return Uf(w, S), t.mode, Number(S.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Pe(E) {
    const ce = o.painting || (o.painting = ao(null)), y = ce[E] || (ce[E] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function re(E, ce, y = performance.now()) {
    let v;
    if (t.mode === "frame") {
      const k = f();
      if (!k || (v = q(ce, k, y), !v)) return !1;
    } else
      v = x(ce, y);
    if (!v) return !1;
    const V = E.stroke.geometry.rawPoints || E.stroke.geometry.points, U = E.stroke.geometry.points, S = V[V.length - 1];
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
    V.push({ ...w }), U.push({ ...w });
    const D = m(E);
    if (D) {
      const k = t.paintEngine.ensureTarget(D);
      t.paintEngine.appendStrokePoint(k, Number(w.u ?? 0), Number(w.v ?? 0), E.stroke);
    }
    return !0;
  }
  function O(E, ce, y = performance.now()) {
    var S, w;
    let v;
    if (t.mode === "frame") {
      const D = f();
      if (!D) return !1;
      v = q(ce, D, y);
    } else
      v = x(ce, y);
    const V = (w = (S = E == null ? void 0 : E.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.points;
    if (!v || !Array.isArray(V)) return !1;
    const U = V[V.length - 1];
    if (U) {
      const D = Math.abs(Number(v.u ?? v.x ?? 0) - Number(U.u ?? U.x ?? 0)), k = Math.abs(Number(v.v ?? v.y ?? 0) - Number(U.v ?? U.y ?? 0));
      if (D < 15e-4 && k < 15e-4) return !1;
    }
    return V.push({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Q(E) {
    var pe, be, ye, h, $;
    const ce = (E == null ? void 0 : E.stroke) || null;
    if (!ce || (E == null ? void 0 : E.layerKind) !== "paint" || String((ce == null ? void 0 : ce.toolKind) || "") !== "eraser") return !1;
    G();
    const y = m(), v = c(y.width, y.height);
    if (!z(v, ce, { w: y.width, h: y.height })) return !1;
    const V = ((be = (pe = v.ctx) == null ? void 0 : pe.getImageData(0, 0, y.width, y.height)) == null ? void 0 : be.data) || null;
    if (!V) return !1;
    const U = new Map(g().map((C) => [String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim(), C ? { ...C } : null])), S = [], w = [], D = [...p().filter((C) => String((C == null ? void 0 : C.layerKind) || "paint") !== "paint")];
    let k = !1, N = _().reduce((C, b) => Math.max(C, Number((b == null ? void 0 : b.z_index) || 0)), -1) + 1;
    function A(C, b, T, M = 8) {
      let Y = b, ee = T, Se = -1, xe = -1;
      for (let Ne = 0; Ne < T; Ne += 1)
        for (let Te = 0; Te < b; Te += 1)
          C[(Ne * b + Te) * 4 + 3] <= M || (Te < Y && (Y = Te), Ne < ee && (ee = Ne), Te > Se && (Se = Te), Ne > xe && (xe = Ne));
      return Se < Y || xe < ee ? null : { minX: Y, minY: ee, maxX: Se, maxY: xe };
    }
    const W = A(V, y.width, y.height, 8);
    if (!W) return !1;
    function J(C, b) {
      return !C || !b ? !1 : !(C.maxX < b.minX || b.maxX < C.minX || C.maxY < b.minY || b.maxY < C.minY);
    }
    function se(C, b) {
      const T = u((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "", "paint", b);
      if (!T) return null;
      const M = T.centerUv.u - T.halfW, Y = T.centerUv.u + T.halfW, ee = T.centerUv.v - T.halfH, Se = T.centerUv.v + T.halfH, xe = y.width, Ne = y.height;
      return {
        minX: Math.floor((M % 1 + 1) % 1 * xe),
        maxX: Math.ceil((Y % 1 + 1) % 1 * xe),
        minY: Math.floor(Ee(ee, 0, 1) * Ne),
        maxY: Math.ceil(Ee(Se, 0, 1) * Ne),
        wraps: Y - M >= 1 || M < 0 || Y > 1
      };
    }
    function L(C) {
      const b = (C == null ? void 0 : C.bbox) || null;
      if (!b) return null;
      const T = (C == null ? void 0 : C.transform) || {}, M = y.width, Y = y.height, ee = Number(b.u0 || 0) + Number(T.du || 0), Se = Number(b.u1 || 0) + Number(T.du || 0), xe = Number(b.v0 || 0) + Number(T.dv || 0), Ne = Number(b.v1 || 0) + Number(T.dv || 0);
      return {
        minX: Math.floor((ee % 1 + 1) % 1 * M),
        maxX: Math.ceil((Se % 1 + 1) % 1 * M),
        minY: Math.floor(Ee(xe, 0, 1) * Y),
        maxY: Math.ceil(Ee(Ne, 0, 1) * Y),
        wraps: Se - ee >= 1 || ee < 0 || Se > 1
      };
    }
    function le(C) {
      return C ? C.wraps ? J(W, { minX: 0, maxX: C.maxX, minY: C.minY, maxY: C.maxY }) || J(W, { minX: C.minX, maxX: y.width - 1, minY: C.minY, maxY: C.maxY }) : J(W, C) : !0;
    }
    function ve(C) {
      if (!C) return { touched: !1, canvas: null };
      const b = c(y.width, y.height, { readback: !0 });
      b.ctx.drawImage(C, 0, 0);
      const T = b.ctx.getImageData(0, 0, y.width, y.height);
      b.ctx.save(), b.ctx.globalCompositeOperation = "destination-out", b.ctx.drawImage(v.canvas, 0, 0), b.ctx.restore();
      const M = b.ctx.getImageData(0, 0, y.width, y.height);
      for (let Y = 0; Y < y.width * y.height; Y += 1) {
        if (V[Y * 4 + 3] <= 8) continue;
        const Se = T.data[Y * 4 + 3], xe = M.data[Y * 4 + 3];
        if (Se > xe)
          return { touched: !0, canvas: b.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function we(C, b, T) {
      const M = Number(T == null ? void 0 : T.z_index), Y = l(C, b, T).map((ee, Se) => ({
        ...ee,
        z_index: Number.isFinite(M) ? M + Se * 1e-3 : N + Se * 1e-3
      }));
      return Y.length && (N = Math.max(N, ...Y.map((ee) => Number((ee == null ? void 0 : ee.z_index) || 0))) + 1), Y;
    }
    for (const C of g()) {
      const b = String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim();
      if (!b) continue;
      const T = F(b, "paint");
      if (!le(se(C, T))) {
        w.push(C), S.push(...T);
        continue;
      }
      const M = ((h = (ye = t.paintEngine) == null ? void 0 : ye.getGroupTarget) == null ? void 0 : h.call(ye, b)) || null, Y = (($ = M == null ? void 0 : M.committedPaint) == null ? void 0 : $.canvas) || null;
      if (!Y) {
        w.push(C), S.push(...T);
        continue;
      }
      const ee = ve(Y);
      if (!ee.touched || !ee.canvas) {
        w.push(C), S.push(...T);
        continue;
      }
      k = !0;
      const Se = we(ee.canvas, "paint", U.get(b) || C || {});
      D.push(...Se);
    }
    for (const C of p().filter((b) => String((b == null ? void 0 : b.layerKind) || "paint") === "paint")) {
      if (!le(L(C))) {
        D.push(C);
        continue;
      }
      const b = a(C, null);
      if (!b) {
        D.push(C);
        continue;
      }
      const T = ve(b);
      if (!T.touched || !T.canvas) {
        D.push(C);
        continue;
      }
      k = !0;
      const M = we(T.canvas, "paint", C);
      D.push(...M);
    }
    return k ? (o.painting.paint.strokes = S, o.painting.groups = w.sort((C, b) => Number((C == null ? void 0 : C.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), o.painting.raster_objects = D.sort((C, b) => Number((C == null ? void 0 : C.z_index) || 0) - Number((b == null ? void 0 : b.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ue(E) {
    var S, w, D, k, N;
    if ((((w = (S = E.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.rawPoints) || ((k = (D = E.stroke) == null ? void 0 : D.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      _e(E);
      const A = m(E);
      A && (String(((N = E.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(A) : t.paintEngine.commitActiveStroke(E.stroke, A)), E._hasCommittedSegments = !0;
    }
    const y = E.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = j(E.layerKind, y.toolKind, [], v);
    V.actionGroupId = y.actionGroupId, E.stroke = V;
    const U = m(E);
    U && t.paintEngine.beginStroke(V, U);
  }
  function me(E) {
    var S, w;
    if ((((w = (S = E.stroke) == null ? void 0 : S.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      _e(E);
      const D = m(E);
      D && t.paintEngine.commitActiveStroke(E.stroke, D), E._hasCommittedSegments = !0;
    }
    const y = E.stroke, v = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = fe(E.layerKind, y.toolKind, [], v);
    V.actionGroupId = y.actionGroupId, E.stroke = V;
    const U = m(E);
    U && t.paintEngine.beginStroke(V, U);
  }
  function _e(E) {
    var U, S, w, D;
    const ce = ((U = E == null ? void 0 : E.stroke) == null ? void 0 : U.geometry) || null;
    if (!ce) return !1;
    const y = String(((S = E == null ? void 0 : E.stroke) == null ? void 0 : S.toolKind) || "pen");
    if (E.layerKind === "paint" && y === "eraser")
      return ce.geometryKind !== "lasso_fill" && (ce.processedPoints = K(ce.rawPoints || ce.points || [], E.stroke.targetSpace, !0)), Q(E);
    const v = E.layerKind === "paint" && y !== "eraser";
    if (ce.geometryKind === "lasso_fill")
      return (Array.isArray(ce.points) ? ce.points : []).length < 3 ? !1 : (v && d((w = E.stroke) == null ? void 0 : w.actionGroupId), Pe(E.layerKind).push(E.stroke), !0);
    const V = ce.rawPoints || ce.points || [];
    return V.length < 1 ? !1 : (ce.processedPoints = K(V, E.stroke.targetSpace, !0), v && d((D = E.stroke) == null ? void 0 : D.actionGroupId), Pe(E.layerKind).push(E.stroke), !0);
  }
  return {
    connect(E) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: u,
        ensurePaintingGroupEntry: d,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: m,
        getDisplayListObjects: _,
        getPaintingGroupList: g,
        getRasterObjectList: p,
        getStrokeGroupStrokes: F,
        processFreehandPoints: K,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: G,
        screenPosToErpPoint: x,
        screenPosToFrameAsErpPoint: q,
        supportsFramePainting: R
      } = E);
    },
    isActiveLassoTool: Z,
    supportsErpPainting: I,
    getBrushPresetIdForTool: ie,
    isPaintCursorEnabled: he,
    isActivePaintCursorVisible: te,
    setPointerPos: ge,
    syncPaintCursorElement: P,
    showPaintSizePreview: H,
    hidePaintSizePreview: oe,
    buildFreehandStrokeRecord: j,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: Pe,
    appendPaintPoint: re,
    appendLassoPoint: O,
    _segmentFrameStroke: ue,
    _segmentFrameLassoFill: me,
    commitPaintInteraction: _e
  };
}
function KN(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, c, u, d, f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I;
  function ae(P) {
    var oe;
    if (n && t.mode === "frame") {
      const j = a(), fe = l(j);
      if (!j || !fe || !(Number((P == null ? void 0 : P.x) || 0) >= Number(fe.x || 0) && Number((P == null ? void 0 : P.x) || 0) <= Number(fe.x || 0) + Number(fe.w || 0) && Number((P == null ? void 0 : P.y) || 0) >= Number(fe.y || 0) && Number((P == null ? void 0 : P.y) || 0) <= Number(fe.y || 0) + Number(fe.h || 0))) return null;
      const re = ne(P, j, performance.now()), O = re ? o(re) : null;
      if (O)
        for (const ue of s()) {
          if (!z(ue)) continue;
          const me = I(ue, O);
          if (me && Number(me.x) >= 0 && Number(me.x) <= 1 && Number(me.y) >= 0 && Number(me.y) <= 1) {
            const _e = R(ue);
            if (_e != null && _e.visible) return { item: ue, geom: _e };
          }
        }
      const Q = c(!1).slice().sort((ue, me) => Number((me == null ? void 0 : me.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0));
      for (const ue of Q) {
        if (ue.type === "strokeGroup") {
          const E = f(q("paint", ue.actionGroupId || ue.id || ""));
          if (!E) continue;
          const ce = R(E);
          if (!(ce != null && ce.visible)) continue;
          const y = Array.isArray(ce.strokePaths) ? ce.strokePaths : [];
          for (const v of y) {
            const V = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
            if (!V.length) continue;
            if (v.closed && V.length >= 3 && Wr(P, V)) return { item: E, geom: ce };
            const U = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
            for (let S = 0; S < V.length - 1; S += 1)
              if (lc(P, V[S], V[S + 1]) <= U * U) return { item: E, geom: ce };
            if (V.length === 1 && Vo(P, V[0]) <= U * U) return { item: E, geom: ce };
          }
          continue;
        }
        if (ue.type === "rasterObject") {
          const E = u(x(((oe = ue.item) == null ? void 0 : oe.id) || ue.id || ""));
          if (!E) continue;
          const ce = R(E);
          if (m(E, ce, P, re)) return { item: E, geom: ce };
          continue;
        }
        const me = ue.item;
        if (!me || !z(me) || !O) continue;
        const _e = I(me, O);
        if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
          const E = R(me);
          if (E != null && E.visible) return { item: me, geom: E };
        }
      }
      return null;
    }
    const H = [
      ...c(!1).slice().sort((j, fe) => Number((fe == null ? void 0 : fe.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)).map((j) => {
        var fe;
        return j.type === "strokeGroup" ? f(q("paint", j.actionGroupId || j.id || "")) : j.type === "rasterObject" ? u(x(((fe = j.item) == null ? void 0 : fe.id) || j.id || "")) : j.item;
      }).filter(Boolean),
      ...n ? s().filter((j) => K(j)) : []
    ];
    for (const j of H) {
      if (G(j)) {
        const Pe = R(j);
        if (!(Pe != null && Pe.visible)) continue;
        const re = Array.isArray(Pe.strokePaths) ? Pe.strokePaths : [];
        for (const O of re) {
          const Q = Array.isArray(O == null ? void 0 : O.points) ? O.points : [];
          if (!Q.length) continue;
          if (O.closed && Q.length >= 3 && Wr(P, Q)) return { item: j, geom: Pe };
          const ue = Math.max(8, Number((O == null ? void 0 : O.lineWidth) || 0) * 0.5 + 6);
          for (let me = 0; me < Q.length - 1; me += 1)
            if (lc(P, Q[me], Q[me + 1]) <= ue * ue) return { item: j, geom: Pe };
          if (Q.length === 1 && Vo(P, Q[0]) <= ue * ue) return { item: j, geom: Pe };
        }
        continue;
      }
      if (F(j)) {
        const Pe = R(j);
        if (!(Pe != null && Pe.visible)) continue;
        if (m(j, Pe, P)) return { item: j, geom: Pe };
        continue;
      }
      const fe = R(j);
      if (fe.visible && Wr(P, fe.corners))
        return { item: j, geom: fe };
    }
    return null;
  }
  function ie(P, H, oe = null) {
    if (!P || !P.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(oe)) return Bc(P, H);
    if (P.kind === "strokeGroup") {
      const j = P.corners.findIndex((Pe) => Vo(Pe, H) <= 121);
      if (j >= 0) {
        const Pe = P.corners[j], re = Pe.x - P.center.x, O = Pe.y - P.center.y, Q = re * O >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: j, cursor: Q };
      }
      const fe = Array.isArray(P.strokePaths) ? P.strokePaths : [];
      for (const Pe of fe) {
        const re = Array.isArray(Pe == null ? void 0 : Pe.points) ? Pe.points : [];
        if (Pe.closed && re.length >= 3 && Wr(H, re)) return { kind: "move", cursor: "default" };
        const O = Math.max(8, Number((Pe == null ? void 0 : Pe.lineWidth) || 0) * 0.5 + 6);
        for (let Q = 0; Q < re.length - 1; Q += 1)
          if (lc(H, re[Q], re[Q + 1]) <= O * O) return { kind: "move", cursor: "default" };
      }
      return Wr(H, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (P.kind === "rasterObject") {
      const j = P.corners.findIndex((fe) => Vo(fe, H) <= 121);
      if (j >= 0) {
        const fe = P.corners[j], Pe = fe.x - P.center.x, re = fe.y - P.center.y, O = Pe * re >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: j, cursor: O };
      }
      return Wr(H, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return hS(P, H, {
      edges: i === "cutout" || K(oe),
      resize: !(K(oe) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function he(P, H) {
    return {
      x0: Math.min(Number((P == null ? void 0 : P.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y0: Math.min(Number((P == null ? void 0 : P.y) || 0), Number((H == null ? void 0 : H.y) || 0)),
      x1: Math.max(Number((P == null ? void 0 : P.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y1: Math.max(Number((P == null ? void 0 : P.y) || 0), Number((H == null ? void 0 : H.y) || 0))
    };
  }
  function te(P, H) {
    return !!P && !!H && Number(H.x) >= Number(P.x0) && Number(H.x) <= Number(P.x1) && Number(H.y) >= Number(P.y0) && Number(H.y) <= Number(P.y1);
  }
  function ge(P, H) {
    if (!P || !(H != null && H.visible) || !Array.isArray(H.corners)) return !1;
    if (H.corners.some((fe) => te(P, fe))) return !0;
    const oe = (Number(P.x0) + Number(P.x1)) * 0.5, j = (Number(P.y0) + Number(P.y1)) * 0.5;
    return !!Wr({ x: oe, y: j }, H.corners);
  }
  function de(P) {
    if (Z(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? B("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? B("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? B("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? B("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? B("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? B(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? B("grabbing") : B("default");
      return;
    }
    if (_()) {
      B("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        B(gP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        B("default");
        return;
      }
      B("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      B("default");
      return;
    }
    if (t.gizmoAxis) {
      B("grab");
      return;
    }
    const H = d(), oe = H ? R(H) : null, j = H ? p(H) : !1, fe = j ? { kind: "none", cursor: "default" } : ie(oe, P, H);
    if (!j && fe.kind !== "none") {
      B(fe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && ae(P)) {
      B("default");
      return;
    }
    B(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(P) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: u,
        getSelected: d,
        getStrokeGroupItem: f,
        hitRasterObjectAt: m,
        isActivePaintCursorVisible: _,
        isErpCamera: g,
        isItemLocked: p,
        isRasterObjectItem: F,
        isShotItem: K,
        isStickerItem: z,
        isStrokeGroupItem: G,
        makeRasterObjectSelectionId: x,
        makeStrokeGroupSelectionId: q,
        objectGeom: R,
        screenPosToFrameAsErpPoint: ne,
        setCanvasCursor: B,
        syncPaintCursorElement: Z,
        worldDirToFrameLocalPoint: I
      } = P);
    },
    hitObjectAt: ae,
    handleHit: ie,
    rectFromPoints: he,
    rectIntersectsGeom: ge,
    updateCursor: de
  };
}
function BN(e) {
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
    tooltipEl: u,
    type: d,
    uiState: f
  } = e;
  let m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he = !1;
  function te() {
    return he;
  }
  function ge() {
    if (!o) return;
    if (he = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || x() && ne()) {
      const O = de();
      he = O.visible, P(O);
      return;
    }
    const j = K(), fe = z();
    if (!j && fe.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Pe = G(), re = AN({
      type: d,
      selected: j,
      selectedItems: fe,
      selectedKind: Pe,
      geom: fe.length > 1 ? F(fe) : ie(j),
      allLocked: m(fe),
      anyLocked: fe.some((O) => B(O)),
      selectedLocked: B(j),
      activeAspect: Z(j) && q() ? ro : Er(j),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: R,
      isStickerHidden: ae,
      canRestoreSelectedToInitial: _,
      iconSet: He,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    P(re);
  }
  function de() {
    const j = I() && !n.interaction ? p().space : null;
    if (!(j != null && j.gizmo)) return { visible: !1 };
    const fe = g(), Pe = j.stickers.find((ue) => ue.id === n.worldSelectedId), O = (Pe ? Xu(Pe) : [j.gizmo.transform.position]).map((ue) => aa(fe, ue, r.width, r.height)).filter(Boolean), Q = Vv(fe, j.gizmo.transform.position, j.gizmo.mode, r.width, r.height);
    return IN({ corners: O, gizmoBox: Q, gizmoMode: j.gizmo.mode, camera: x(), deletable: l && x() });
  }
  function P(j) {
    var Q, ue;
    if (!j.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = (me, _e) => EN(j.anchor, me, _e, r.width, r.height), Pe = Math.max(1, Number(((Q = n.menuSize) == null ? void 0 : Q.w) || 220)), re = Math.max(1, Number(((ue = n.menuSize) == null ? void 0 : ue.h) || 40)), O = fe(Pe, re);
    if (!O) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: O.left,
      top: O.top,
      items: j.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const me = o.getBoundingClientRect(), _e = Math.round(Number((me == null ? void 0 : me.width) || 0)) || 220, E = Math.round(Number((me == null ? void 0 : me.height) || 0)) || 40;
      n.menuSize = { w: _e, h: E, measured: !0 };
      const ce = fe(_e, E);
      ce && (f.selectionMenu.left = ce.left, f.selectionMenu.top = ce.top);
    });
  }
  function H() {
    c.timer && (clearTimeout(c.timer), c.timer = 0), c.target = null, f.tooltip.visible = !1;
  }
  function oe(j) {
    if (!u || !j || !j.isConnected) return;
    const fe = String(j.getAttribute("data-tip") || "").trim();
    if (!fe) return;
    f.tooltip.text = fe, f.tooltip.visible = !0;
    const Pe = j;
    i.requestFrame(() => {
      var S, w;
      if (c.target !== Pe || !u || !(Pe != null && Pe.isConnected)) return;
      const re = a.getBoundingClientRect(), O = Pe.getBoundingClientRect(), Q = 8, ue = 12, me = Math.round(Number(((S = u.getBoundingClientRect()) == null ? void 0 : S.width) || 0)) || 100, _e = Math.round(Number(((w = u.getBoundingClientRect()) == null ? void 0 : w.height) || 0)) || 24, E = !!Pe.closest(".pano-floating-left"), ce = !!Pe.closest(".pano-frame-rail"), y = !!Pe.closest(".pano-paint-footer") || !!Pe.closest(".pano-paint-color-float");
      let v = "", V = O.left - re.left + O.width * 0.5 - me * 0.5, U = O.top - re.top - _e - ue;
      if (Pe.closest(".pano-floating-top") && (U = O.bottom - re.top + ue), E)
        v = "tool-rail", V = O.right - re.left + 10, U = O.top - re.top + O.height * 0.5 - _e * 0.5, V = Ee(V, Q, Math.max(Q, re.width - me - Q)), U = Ee(U, Q, Math.max(Q, re.height - _e - Q));
      else if (ce)
        v = "frame-rail", V = O.left - re.left - me - 10, U = O.top - re.top + O.height * 0.5 - _e * 0.5, V = Ee(V, Q, Math.max(Q, re.width - me - Q)), U = Ee(U, Q, Math.max(Q, re.height - _e - Q));
      else if (y) {
        v = "footer";
        const D = Pe.closest(".pano-paint-footer"), k = D ? D.getBoundingClientRect() : O;
        V = k.left - re.left + k.width * 0.5 - me * 0.5, U = k.bottom - re.top + 5, V = Ee(V, Q, Math.max(Q, re.width - me - Q)), U = Math.max(Q, U);
      }
      V = Ee(V, Q, Math.max(Q, re.width - me - Q)), U = Math.max(Q, U), f.tooltip.left = V, f.tooltip.top = U, f.tooltip.variant = v, f.tooltip.visible = !0;
    });
  }
  return {
    connect(j) {
      ({
        areAllSelectedItemsLocked: m,
        canRestoreSelectedToInitial: _,
        currentSpaceCamera: g,
        editorViewInput: p,
        getMultiSelectionGeom: F,
        getSelected: K,
        getSelectedItems: z,
        getSelectedKind: G,
        isCameraSelected: x,
        isErpCamera: q,
        isExternalSticker: R,
        isFreeSpaceView: ne,
        isItemLocked: B,
        isShotItem: Z,
        isSpaceView: I,
        isStickerHidden: ae,
        objectGeom: ie
      } = j);
    },
    isWorldMenuShown: te,
    updateSelectionMenu: ge,
    hideTooltip: H,
    showTooltipFor: oe
  };
}
function UN(e) {
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
    shotEditor: u,
    state: d,
    stateV2: f,
    timeline: m,
    type: _,
    viewController: g
  } = e;
  let p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue, me, _e, E, ce, y, v, V, U, S, w, D, k, N, A, W, J, se, L, le, ve, we, pe, be, ye, h, $, C, b, T, M, Y, ee, Se, xe, Ne, Te, ze, je, We, Re, X, Ce, Ve, Ae, $e, Ge, Ue, ot, ft, zt, Dt, on, En, Ye, jt, yn, vr, zr, nn, Sn, jr, _r, Un, ga, fo, po, ho, ya, ba, va, Mi, xt, Yn, ir, mo, On, _a, Sa, wa, Hr = null;
  function xa(Oe) {
    m.selection && (m.selection = null, va());
    const Ie = $e(Oe);
    Hr = Ie, on(Ie, !0), ie(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const ke = ye(), bt = be(), lt = ke || bt ? CS(mo(), Oe) : null;
    if (bt && lt) {
      Oe.preventDefault(), lt === "look" ? jr(Ie, Oe.pointerId) : Sn(lt, Ie, Oe.pointerId);
      return;
    }
    if (lt === "look") {
      Oe.preventDefault();
      const qe = Ge(Oe);
      n.interaction = { kind: "view", last: qe, lastTs: performance.now() }, g.startDrag(qe.x, qe.y, Oe.pointerId, performance.now()), xt(Ie), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (lt) {
      Oe.preventDefault(), _r(lt, Ie, Oe.pointerId);
      return;
    }
    if ((ke || bt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const qe = ue();
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
      const qe = ue(), Ke = y(qe);
      if (!qe || qe.locked === !0 || !Ke) return;
      const Ze = Ym({
        frame: Ke,
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
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), ya(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      jr(Ie, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && bo(Oe, Ie);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ga() || fo())) {
      if (!Te()) return;
      Un();
      const qe = n.primaryTool === "mask" ? "mask" : "paint", Ke = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Ze = n.mode === "frame" && fo() ? ue() : null, qt = { kind: "ERP_GLOBAL" }, kt = Ze ? ot(Ie, Ze, performance.now()) : Ue(Ie, performance.now());
      if (!kt) {
        xt(Ie);
        return;
      }
      n.interaction = {
        kind: Ke === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: qe,
        _livePreviewToken: Hi("live"),
        stroke: Ke === "lasso_fill" ? Z(qe, Ke, [kt], qt) : B(qe, Ke, [kt], qt)
      }, we();
      const wr = me(n.interaction);
      if (wr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, wr), n.interaction.kind === "paint_stroke") {
          const Pi = n.paintEngine.ensureTarget(wr), Ni = Number((kt == null ? void 0 : kt.u) ?? (kt == null ? void 0 : kt.x) ?? 0), Ci = Number((kt == null ? void 0 : kt.v) ?? (kt == null ? void 0 : kt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Pi, Ni, Ci, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, wr);
      xt(Ie), t.setPointerCapture(Oe.pointerId), Ae();
      return;
    }
    const vt = A(), Xe = N(), et = vt.length > 1 ? V(vt) : Xe ? Ne(Xe) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ie, current: Ie }, xt(Ie), t.setPointerCapture(Oe.pointerId), Ae({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && I() && ye() && nn(Oe, Ie) || n.primaryTool === "cursor" && c && T() && Sl(Oe, Ie)) return;
    if (vt.length > 1 && (et != null && et.visible)) {
      if ((vt.some((Ke) => h(Ke)) ? { kind: "none" } : L(et, Ie)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: vt.map((Ke) => Ke),
          offset: { x: Ie.x - et.center.x, y: Ie.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: vt.filter((Ke) => M(Ke)).map((Ke) => ({
            id: String(Ke.id || ""),
            yaw_deg: Number(We(Ke).yaw_deg || 0),
            pitch_deg: Number(We(Ke).pitch_deg || 0),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ke);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })()
          })),
          strokeSnapshots: vt.filter((Ke) => Y(Ke)).map((Ke) => ({
            id: String(Ke.actionGroupId || Ke.id || ""),
            layerKind: String(Ke.layerKind || "paint"),
            snapshot: cn(J(Ke.actionGroupId, Ke.layerKind)),
            frameSnapshot: cn(fe(Ke.actionGroupId, Ke.layerKind)),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ke);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: W(Ke.actionGroupId, Ke.layerKind)
          })),
          rasterSnapshots: vt.filter((Ke) => $(Ke)).map((Ke) => ({
            id: ze(Ke.rasterObjectId || Ke.id || ""),
            snapshot: cn(w().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === ze(Ke.rasterObjectId || Ke.id || ""))),
            center: (() => {
              var qt, kt;
              const Ze = Ne(Ke);
              return Ze != null && Ze.visible ? { x: Number(((qt = Ze.center) == null ? void 0 : qt.x) || 0), y: Number(((kt = Ze.center) == null ? void 0 : kt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: S(Ke)
          }))
        }, xt(Ie), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Xe && (et != null && et.visible)) {
      const qe = h(Xe) ? { kind: "none" } : L(et, Ie, Xe);
      if (qe.kind === "scale") {
        n.interaction = Y(Xe) ? {
          kind: "scale_stroke_group",
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          snapshot: cn(J(Xe.actionGroupId, Xe.layerKind)),
          frameSnapshot: cn(fe(Xe.actionGroupId, Xe.layerKind)),
          cursor: qe.cursor
        } : $(Xe) ? {
          kind: "scale_raster_object",
          item: Xe,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ie.x - et.center.x, Ie.y - et.center.y)),
          snapshot: cn(w().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === ze(Xe.rasterObjectId || Xe.id || ""))),
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
        n.interaction = Y(Xe) ? {
          kind: "rotate_stroke_group",
          item: Xe,
          center: et.center,
          startAng: Math.atan2(Ie.y - et.center.y, Ie.x - et.center.x),
          snapshot: cn(J(Xe.actionGroupId, Xe.layerKind)),
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
        if (Y(Xe)) {
          const Ke = n.mode === "frame" ? (() => {
            const Ze = ue();
            return Ze ? ot(Ie, Ze, performance.now()) : null;
          })() : Ue(Ie, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Xe,
            startUv: Ke,
            snapshot: cn(J(Xe.actionGroupId, Xe.layerKind)),
            frameSnapshot: cn(fe(Xe.actionGroupId, Xe.layerKind))
          }, xt(Ie), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if ($(Xe)) {
          const Ke = n.mode === "frame" ? (() => {
            const Ze = ue();
            return Ze ? ot(Ie, Ze, performance.now()) : null;
          })() : Ue(Ie, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Xe,
            startUv: Ke,
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
    const tt = ve(Ie);
    if (tt) {
      const qe = n.selectedId !== tt.item.id;
      if (qe && n.selectedId && (Re(), de()), En(tt.item), u && qe && (n.cutoutAspectOpen = !1), qe && ir(), Yn(), Ae(), h(tt.item)) {
        xt(Ie);
        return;
      }
      n.interaction = {
        kind: Y(tt.item) ? "move_stroke_group" : $(tt.item) ? "move_raster_object" : "move",
        item: tt.item,
        offset: { x: Ie.x - tt.geom.center.x, y: Ie.y - tt.geom.center.y },
        startUv: Y(tt.item) || $(tt.item) ? n.mode === "frame" ? (() => {
          const Ke = ue();
          return Ke ? ot(Ie, Ke, performance.now()) : null;
        })() : Ue(Ie, performance.now()) : null,
        snapshot: Y(tt.item) ? cn(J(tt.item.actionGroupId, tt.item.layerKind)) : $(tt.item) ? cn(w().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === ze(tt.item.rasterObjectId || tt.item.id || ""))) : null,
        frameSnapshot: Y(tt.item) ? cn(fe(tt.item.actionGroupId, tt.item.layerKind)) : null
      }, xt(Ie), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const qn = !!n.selectedId;
    qn && (Re(), de()), he(), qn && ir(), Yn(), Ae(), n.mode === "pano" && bo(Oe, Ie);
  }
  function Sr(Oe, Ie) {
    return i.gizmoPointer(Oe, P(), Ie.x, Ie.y, t.width, t.height);
  }
  function Sl(Oe, Ie) {
    var et;
    const ke = (et = j().space) == null ? void 0 : et.gizmo;
    if (ke && Sr("hover", Ie) !== null && Sr("down", Ie))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: _i(Dt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), xt(Ie), !0;
    const bt = A(), lt = N(), vt = bt.length > 1 ? bt.some((tt) => h(tt)) ? "none" : L(V(bt), Ie).kind : lt && !h(lt) ? L(Ne(lt), Ie, lt).kind : "none";
    if (vt !== "none" && vt !== "move") return !1;
    const Xe = i.pickSticker(P(), Ie.x, Ie.y, t.width, t.height);
    return d.stickers.some((tt) => tt.id === Xe && tt.placement === "world") ? (n.worldSelectedId !== Xe && (n.selectedId && (Re(), de()), zt(Xe), ir(), Yn(), ho(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function go(Oe) {
    var bt;
    const ke = !!(n.worldSelectedId || pe()) && n.primaryTool === "cursor" && T() && !!((bt = j().space) != null && bt.gizmo) ? Sr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: dt.VIEW }));
  }
  function ka(Oe, Ie) {
    const ke = Sr("move", Ie);
    if (ke && Oe.camera) {
      for (const [lt, vt] of Object.entries(pf(Oe.mode, Oe.base, Oe.start, ke))) pn(d.camera, lt, n.frame, vt);
      po(), Oe.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const bt = d.stickers.find((lt) => lt.id === Oe.id);
    !ke || !bt || (sv(bt, n.frame, pf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, ee(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function yo(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (Sr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && (Re(), te(), ir())), xt(n.pointerPos), Ae();
  }
  function bo(Oe, Ie) {
    if (ye()) {
      const bt = mo().emptyLeft;
      bt && _r(bt, Ie, Oe.pointerId);
      return;
    }
    const ke = Ge(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, g.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), xt(Ie), t.setPointerCapture(Oe.pointerId);
  }
  function Ma(Oe, Ie) {
    if (!f || !je.playing || (je.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const lt = Pe();
      lt && (Oe.pivot = Q(lt, O(lt), Ie));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const lt = d.stickers.find((vt) => vt.id === Oe.id);
      Oe.camera ? Oe.base = H() : lt && (Oe.base = _i(lt, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const lt = V(Oe.items);
      if (!(lt != null && lt.visible)) return;
      Oe.offset = { x: Ie.x - lt.center.x, y: Ie.y - lt.center.y }, Oe.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const vt of Oe.stickerSnapshots) {
        const Xe = Oe.items.find((tt) => String((tt == null ? void 0 : tt.id) || "") === vt.id), et = Xe ? Ne(Xe) : null;
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
  function Pa(Oe) {
    var bt, lt, vt, Xe, et, tt, qn, qe, Ke, Ze, qt, kt, wr, Pi, Ni, Ci, Ca, _o, Aa, Ia, Ea, So;
    const Ie = $e(Oe);
    if (on(Ie, !0), !n.interaction) {
      go(Ie), xt(Ie);
      return;
    }
    xt(Ie);
    const ke = n.interaction;
    if (Hr && (Ie.x !== Hr.x || Ie.y !== Hr.y)) {
      const ct = Hr;
      Hr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Ma(ke, ct);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        ka(ke, Ie);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        ct.forEach((gt) => {
          const yt = $e(gt);
          if (n.mode === "frame") {
            const an = ue(), Ut = an ? y(an) : null;
            if (Ut) {
              const Zt = (yt.x - Ut.x) / Math.max(1, Ut.w), It = (yt.y - Ut.y) / Math.max(1, Ut.h);
              if (!(Zt >= 0 && Zt <= 1 && It >= 0 && It <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, F(ke));
            }
          }
          z(ke, yt, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: dt.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        if (ct.forEach((gt) => {
          const yt = $e(gt);
          if (n.mode === "frame") {
            const an = ue(), Ut = an ? y(an) : null;
            if (Ut) {
              const Zt = (yt.x - Ut.x) / Math.max(1, Ut.w), It = (yt.y - Ut.y) / Math.max(1, Ut.h);
              if (!(Zt >= 0 && Zt <= 1 && It >= 0 && It <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, p(ke));
            }
          }
          K(ke, yt, performance.now()) && (pt = !0);
        }), pt) {
          const gt = me(ke);
          gt && n.paintEngine.updateActiveStroke(ke.stroke, gt), Ae({ localOnly: !0, reason: dt.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const ct = performance.now(), pt = n.mode === "unwrap" ? Ie : Ge(Oe);
        g.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), ke.lastTs = ct, ke.last = pt, Ae({ localOnly: !0, reason: dt.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        oe(ke, Ie);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const ct = vr();
        jt(ke.kind === "space_pan" ? nm(ct, Ie.x - ke.last.x, Ie.y - ke.last.y, t.width, t.height, ke.depth) : tm(ct, Ie.x - ke.last.x, Ie.y - ke.last.y, t.height, ke.pivot)), ke.last = Ie;
        return;
      }
      if (ke.kind === "pan_frame") {
        const ct = ce(ke.shot);
        if (!ct || !ke.shot) return;
        const pt = Ie.x - ke.last.x, gt = Ie.y - ke.last.y, yt = Xm(ke.shot, {
          dx: pt,
          dy: gt,
          focalPx: ct.focalPx,
          invertX: ((bt = d.ui_settings) == null ? void 0 : bt.invert_view_x) === !0,
          invertY: ((lt = d.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        ke.shot.yaw_deg = yt.yaw_deg, ke.shot.pitch_deg = yt.pitch_deg, ke.changed = ke.changed || Math.abs(pt) > 0 || Math.abs(gt) > 0, ke.last = Ie, Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        q(ke, Ie, Oe);
        return;
      }
      if (ke.kind === "move") {
        const ct = Ie.x - ke.offset.x, pt = Ie.y - ke.offset.y;
        if (n.mode === "frame" && u) {
          const gt = ue(), yt = y(gt);
          if (!gt || !yt) return;
          const an = {
            x: Ee((ct - yt.x) / Math.max(1, yt.w), 0, 1),
            y: Ee((pt - yt.y) / Math.max(1, yt.h), 0, 1)
          }, Ut = re(gt, an);
          if (!Ut) return;
          const Zt = Ba(Ut);
          On(ke.item, { yaw_deg: Zt.yaw, pitch_deg: Zt.pitch });
        } else if (n.mode === "unwrap") {
          const gt = se(), yt = Ee((ct - gt.x) / Math.max(gt.w, 1), 0, 1), an = Ee((pt - gt.y) / Math.max(gt.h, 1), 0, 1);
          On(ke.item, { yaw_deg: $t(yt * 360 - 180), pitch_deg: Ee(90 - an * 180, -90, 90) });
        } else {
          const gt = ft(ct, pt), yt = Ba(gt);
          On(ke.item, { yaw_deg: yt.yaw, pitch_deg: yt.pitch });
        }
        M(ke.item) && ee(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const yt = ue();
          return yt ? ot(Ie, yt, performance.now()) : null;
        })() : Ue(Ie, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = yn(Number(ct.u || 0), Number(ke.startUv.u || 0)), gt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        R((vt = ke.item) == null ? void 0 : vt.actionGroupId, pt, gt, ke.snapshot, (Xe = ke.item) == null ? void 0 : Xe.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const yt = ue();
          return yt ? ot(Ie, yt, performance.now()) : null;
        })() : Ue(Ie, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = yn(Number(ct.u || 0), Number(ke.startUv.u || 0)), gt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        G(((et = ke.item) == null ? void 0 : et.rasterObjectId) || ((tt = ke.item) == null ? void 0 : tt.id) || "", pt, gt, ke.snapshot) && (Se(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        x(((qn = ke.item) == null ? void 0 : qn.rasterObjectId) || ((qe = ke.item) == null ? void 0 : qe.id) || "", pt, ke.snapshot) && (Se(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const ct = Ie.x - Number(((Ke = ke.offset) == null ? void 0 : Ke.x) || 0), pt = Ie.y - Number(((Ze = ke.offset) == null ? void 0 : Ze.y) || 0);
        let gt = !1, yt = !1, an = !1;
        const Ut = ct - Number(((qt = ke.startCenter) == null ? void 0 : qt.x) || ct), Zt = pt - Number(((kt = ke.startCenter) == null ? void 0 : kt.y) || pt);
        for (const It of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const Lt = (_ === "cutout" ? _e() : v()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(It.id || ""));
          if (!Lt || !M(Lt)) continue;
          const rn = {
            x: Number(((wr = It.center) == null ? void 0 : wr.x) || 0) + Ut,
            y: Number(((Pi = It.center) == null ? void 0 : Pi.y) || 0) + Zt
          };
          if (n.mode === "frame" && u) {
            const Ft = ue(), De = y(Ft);
            if (!Ft || !De) continue;
            const Je = {
              x: Ee((rn.x - De.x) / Math.max(1, De.w), 0, 1),
              y: Ee((rn.y - De.y) / Math.max(1, De.h), 0, 1)
            }, wn = re(Ft, Je);
            if (!wn) continue;
            const Qt = Ba(wn);
            On(Lt, { yaw_deg: Qt.yaw, pitch_deg: Qt.pitch });
          } else if (n.mode === "unwrap") {
            const Ft = se(), De = Ee((rn.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), Je = Ee((rn.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
            On(Lt, { yaw_deg: $t(De * 360 - 180), pitch_deg: Ee(90 - Je * 180, -90, 90) });
          } else {
            const Ft = ft(rn.x, rn.y), De = Ba(Ft);
            On(Lt, { yaw_deg: De.yaw, pitch_deg: De.pitch });
          }
          gt = !0;
        }
        for (const It of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const Lt = {
            x: Number(((Ni = It.center) == null ? void 0 : Ni.x) || 0) + Ut,
            y: Number(((Ci = It.center) == null ? void 0 : Ci.y) || 0) + Zt
          }, rn = n.mode === "frame" ? (() => {
            const De = ue();
            return De ? ot(Lt, De, performance.now()) : null;
          })() : Ue(Lt, performance.now()), Ft = It.centerUv || null;
          if (rn && Ft) {
            const De = yn(Number(rn.u || 0), Number(Ft.u || 0)), Je = Number(rn.v || 0) - Number(Ft.v || 0);
            R(It.id, De, Je, It.snapshot, It.layerKind, It.frameSnapshot) && (gt = !0, yt = !0);
          }
        }
        for (const It of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const Lt = {
            x: Number(((Ca = It.center) == null ? void 0 : Ca.x) || 0) + Ut,
            y: Number(((_o = It.center) == null ? void 0 : _o.y) || 0) + Zt
          }, rn = n.mode === "frame" ? (() => {
            const De = ue();
            return De ? ot(Lt, De, performance.now()) : null;
          })() : Ue(Lt, performance.now()), Ft = It.centerUv || null;
          if (rn && Ft) {
            const De = yn(Number(rn.u || 0), Number(Ft.u || 0)), Je = Number(rn.v || 0) - Number(Ft.v || 0);
            G(It.id, De, Je, It.snapshot) && (gt = !0, an = !0);
          }
        }
        gt && (yt ? xe({ rebuildPaintEngine: !1 }) : an ? Se() : ee(), Ae({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        ne((Aa = ke.item) == null ? void 0 : Aa.actionGroupId, pt, 0, ke.snapshot, (Ia = ke.item) == null ? void 0 : Ia.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - Number(ke.startAng || 0)) * Si;
        Oe.shiftKey && (ct = Math.round(ct / 45) * 45), ne((Ea = ke.item) == null ? void 0 : Ea.actionGroupId, 1, ct, ke.snapshot, (So = ke.item) == null ? void 0 : So.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ie, Ae({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        On(ke.item, { hFOV_deg: Ee(ke.startHFOV * pt, 1, 179), vFOV_deg: Ee(ke.startVFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = mi(ke.item)), M(ke.item) && ee(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        On(ke.item, { hFOV_deg: Ee(ke.startHFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = mi(ke.item)), M(ke.item) && ee(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        On(ke.item, { vFOV_deg: Ee(ke.startVFOV * pt, 1, 179) }), C(ke.item) || (ke.item.aspect_id = mi(ke.item)), M(ke.item) && ee(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let pt = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - ke.startAng) * Si, gt = ke.startRot - pt;
        Oe.shiftKey && (gt = Math.round(gt / 45) * 45), On(ke.item, { [M(ke.item) ? "rot_deg" : "roll_deg"]: gt }), M(ke.item) && ee(), Ae({ localOnly: !0 });
      }
    }
  }
  function wl() {
    var Ie, ke, bt, lt, vt, Xe, et;
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
        const tt = ge(n.interaction), qn = !!n.interaction._hasCommittedSegments;
        if (tt || qn) {
          xe();
          const qe = String(((bt = n.interaction.stroke) == null ? void 0 : bt.actionGroupId) || "").trim();
          if (qe) {
            const Ze = U().find((qt) => String((qt == null ? void 0 : qt.actionGroupId) || "") === qe);
            Ze && (Ze.frame = null);
          }
          const Ke = me(n.interaction);
          Ke && (tt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ke), Ve()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ke) : n.paintEngine.cancelActiveStroke(Ke)), Re(), de(), ir(), Yn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const qe = me(n.interaction);
          qe && n.paintEngine.cancelActiveStroke(qe);
        }
      } else if (((vt = n.interaction) == null ? void 0 : vt.kind) === "marquee_select") {
        const tt = X(n.interaction.start, n.interaction.current), qe = [
          ..._ === "cutout" ? E().filter((Ke) => !b(Ke)) : [...v()],
          ...k(),
          ...D()
        ].filter((Ke) => Ce(tt, Ne(Ke)));
        Ye(qe, ((Xe = qe[qe.length - 1]) == null ? void 0 : Xe.id) || null), u && qe.length && (n.cutoutAspectOpen = !1), ir(), Yn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Re(), te(), ir());
      else if (n.interaction && n.interaction.kind !== "view") {
        let tt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (tt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (tt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (tt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (tt = !0), tt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : Se()), Re(), de(), o.setDirtyCanvas(!0, !0), ba(), Yn(), Ae();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && le(), we(), Oe && Oe.kind === "view" && zr(() => g.endDrag(performance.now())), Mi(), Yn(), xt(n.pointerPos), Ae();
    }
  }
  function xl() {
    var Oe, Ie, ke, bt, lt;
    if (!ae()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Ie = n.interaction) == null ? void 0 : Ie.kind) === "world_gizmo") {
        yo(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && zr(() => g.endDrag(performance.now())), ((bt = n.interaction) == null ? void 0 : bt.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        we();
        const vt = me(n.interaction);
        vt && n.paintEngine.cancelActiveStroke(vt);
      }
      n.interaction = null, we(), Mi(), xt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Na(Oe) {
    const Ie = $e(Oe), ke = on(Ie, !0);
    n.interaction || (xt(Ie), ke && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function vo(Oe) {
    if (n.mode === "frame") {
      const Ie = $e(Oe), ke = ks(Oe);
      ke && Un(), ke && be() ? _a(Ie, -ke) : ke && Sa(Ie, ke) && Ae({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ie(), ye()) {
        const Ie = ks(Oe);
        Ie && wa($e(Oe), -Ie);
      } else g.applyWheelEvent(Oe) && Ae({ localOnly: !0, reason: dt.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: p,
        _segmentFrameStroke: F,
        appendLassoPoint: K,
        appendPaintPoint: z,
        applyRasterObjectOffset: G,
        applyRasterObjectTransform: x,
        applySharedRollInteractionPoint: q,
        applyStrokeGroupOffset: R,
        applyStrokeGroupTransform: ne,
        buildFreehandStrokeRecord: B,
        buildLassoFillStrokeRecord: Z,
        cameraShoots: I,
        cancelFrameCameraGesture: ae,
        cancelViewTransition: ie,
        clearSelection: he,
        commitAndRefreshNode: te,
        commitPaintInteraction: ge,
        commitState: de,
        currentSpaceCamera: P,
        cutoutCamera: H,
        dragFrame: oe,
        editorViewInput: j,
        ensureGroupFrame: fe,
        frameContext: Pe,
        frameLocalPointToWorldDir: re,
        frameSpaceView: O,
        frameTarget: Q,
        getActiveCutoutShot: ue,
        getActivePaintTargetDescriptor: me,
        getCutoutSelectableItems: _e,
        getCutoutSelectableItemsForHit: E,
        getFrameViewLayout: ce,
        getFrameViewRect: y,
        getList: v,
        getMultiSelectionGeom: V,
        getPaintingGroupList: U,
        getRasterObjectCenterUv: S,
        getRasterObjectList: w,
        getSelectableRasterObjectItems: D,
        getSelectableStrokeGroupItems: k,
        getSelected: N,
        getSelectedItems: A,
        getStrokeGroupCenterUv: W,
        getStrokeGroupStrokes: J,
        getUnwrapRect: se,
        handleHit: L,
        hideTooltip: le,
        hitObjectAt: ve,
        invalidateLivePaintPreviewCaches: we,
        isCameraSelected: pe,
        isFreeFrameView: be,
        isFreeSpaceView: ye,
        isItemLocked: h,
        isRasterObjectItem: $,
        isSceneSticker: C,
        isShotItem: b,
        isSpaceView: T,
        isStickerItem: M,
        isStrokeGroupItem: Y,
        markObjectVisualsDirty: ee,
        markPaintCompositeVisualsDirty: Se,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: Ne,
        paintingShown: Te,
        parseRasterObjectSelectionId: ze,
        playback: je,
        poseOf: We,
        pushHistory: Re,
        rectFromPoints: X,
        rectIntersectsGeom: Ce,
        refreshPaintEngineRevisionCache: Ve,
        requestDraw: Ae,
        screenPos: $e,
        screenPosCss: Ge,
        screenPosToErpPoint: Ue,
        screenPosToFrameAsErpPoint: ot,
        screenToWorldDir: ft,
        selectWorldSticker: zt,
        selectedWorldSticker: Dt,
        setPointerPos: on,
        setSelectedItem: En,
        setSelectedItems: Ye,
        setSpaceView: jt,
        shortestWrappedDelta: yn,
        spaceViewState: vr,
        startAnimation: zr,
        startCameraPress: nn,
        startFrameDrag: Sn,
        startPanFrame: jr,
        startSpaceDrag: _r,
        stopTimelinePlayback: Un,
        supportsErpPainting: ga,
        supportsFramePainting: fo,
        syncCutoutShot: po,
        syncFloatingViewButtonState: ho,
        syncFrameRollKnob: ya,
        syncSidePanelControls: ba,
        syncTimeline: va,
        syncViewToggleState: Mi,
        updateCursor: xt,
        updateSelectionMenu: Yn,
        updateSidePanel: ir,
        viewControls: mo,
        writePose: On,
        zoomFrameAt: _a,
        zoomFrameViewAt: Sa,
        zoomSpaceAt: wa
      } = Oe);
    },
    onCanvasPointerDown: xa,
    worldGizmoPointer: Sr,
    hoverWorldGizmo: go,
    onCanvasPointerMove: Pa,
    onCanvasPointerUp: wl,
    onCanvasPointerCancel: xl,
    onCanvasMouseMove: Na,
    onCanvasWheel: vo
  };
}
function YN(e) {
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
    type: u,
    uiState: d
  } = e;
  let f, m, _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re;
  function O(_e, E, ce = !1) {
    var D;
    de();
    const y = s && n.mode === "frame" ? F() : null, v = y || G(), V = y ? "shot" : q(), U = te();
    if (U && !Pe(U) || !U && (!v || V === "stroke" || R(v))) return;
    const S = (((D = d.sidePanel) == null ? void 0 : D.params) || []).find((k) => k.key === _e);
    if (!S || S.enabled === !1) return;
    let w = Number(E);
    if (Number.isNaN(w) && (w = 0), (U || t) && lP.has(_e) ? w = _e === "scale" ? Math.max(w, xg) : w : w = Ee(w, Number(S.min), Number(S.max)), _e === "yaw_deg" && (w = $t(w)), !U && t && _e.startsWith("position_")) {
      H(), rv(l.camera, n.frame, _e, w), fe(), he(), ce && ie();
      return;
    }
    if (U) {
      av(U, n.frame, _e, w), Z(), fe(), he(), ce && ie();
      return;
    }
    _e === "opacity" ? iv(v, n.frame, w / 100) : re(v, { [_e]: w }), s && !ne(v) && (_e === "hFOV_deg" || _e === "vFOV_deg") && (v.aspect_id = mi(v)), fe(), he(), ce && ie();
  }
  async function Q(_e) {
    var y, v, V, U, S, w, D;
    const E = _e.target.closest("[data-action]");
    if (!E) return;
    const ce = String(E.getAttribute("data-action") || "");
    if (ce === "coverage-set") {
      const k = In(E.getAttribute("data-coverage"));
      if (k === In(l.coverage)) return;
      l.coverage = k, n.coverage = k, r && (r.value = String(k)), o ? a.backgroundDirty = !0 : (p(), P({
        syncPreview: u !== "cutout",
        syncGraph: u !== "cutout"
      })), fe(), j(), he();
      return;
    }
    if (ce === "toggle-selection-picker") {
      if ((v = (y = d.sidePanel) == null ? void 0 : y.selectionPicker) != null && v.disabled) return;
      d.sidePanel.selectionPicker.open = !d.sidePanel.selectionPicker.open;
      return;
    }
    if (ce === "select-picker-item") {
      d.sidePanel.selectionPicker.open = !1;
      const k = String(E.getAttribute("data-selection-id") || "");
      let N = null;
      if (k && (u === "stickers" ? N = [...z(), ...c ? l.shots : []].find((A) => String((A == null ? void 0 : A.id) || "") === k) || null : N = ((V = K().find((A) => {
        var W;
        return String(((W = A == null ? void 0 : A.item) == null ? void 0 : W.id) || "") === k;
      })) == null ? void 0 : V.item) || null), ge(N || null), N && !B(N)) {
        const A = ae(N);
        oe($t(Number(A.yaw_deg || 0)), Ee(Number(A.pitch_deg || 0), -89.9, 89.9));
      }
      fe(), j(), he();
      return;
    }
    if (ce === "copy-state-inline") {
      const k = G(), N = q();
      if (!k || N === "stroke" || x().length > 1) return;
      const A = JSON.stringify(s && N !== "image" ? m(k) : _(ae(k)));
      try {
        await navigator.clipboard.writeText(A), (U = d.sidePanel) != null && U.copyStateButton && (d.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var W;
          (W = d.sidePanel) != null && W.copyStateButton && (d.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (ce === "set-invert-x") {
      l.ui_settings.invert_view_x = E.getAttribute("data-value") === "1", I(), fe(), (S = i.setDirtyCanvas) == null || S.call(i, !0, !0), he();
      return;
    }
    if (ce === "set-invert-y") {
      l.ui_settings.invert_view_y = E.getAttribute("data-value") === "1", I(), fe(), (w = i.setDirtyCanvas) == null || w.call(i, !0, !0), he();
      return;
    }
    if (ce === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, I(), fe(), (D = i.setDirtyCanvas) == null || D.call(i, !0, !0), he();
      return;
    }
    if (ce === "close-preview") {
      g();
      return;
    }
    if (ce === "cancel-close") {
      g();
      return;
    }
    ce === "save-close" && (f(), g());
  }
  function ue(_e) {
    const E = _e.target.closest("[data-action='param-input']");
    E && O(String(E.getAttribute("data-param-key") || ""), E.value, !1);
  }
  function me(_e) {
    const E = _e.target.closest("[data-action='param-input']");
    E && O(String(E.getAttribute("data-param-key") || ""), E.value, !0);
  }
  return {
    connect(_e) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: _,
        closeEditor: g,
        commitState: p,
        getActiveCutoutShot: F,
        getCutoutInspectorItems: K,
        getList: z,
        getSelected: G,
        getSelectedItems: x,
        getSelectedKind: q,
        isItemLocked: R,
        isSceneSticker: ne,
        isStrokeGroupItem: B,
        markObjectVisualsDirty: Z,
        persistUiSettings: I,
        poseOf: ae,
        pushHistory: ie,
        requestDraw: he,
        selectedWorldSticker: te,
        setSelectedItem: ge,
        stopTimelinePlayback: de,
        syncCoverageChangeToNodePreviews: P,
        syncCutoutShot: H,
        turnViewTo: oe,
        updateSelectionMenu: j,
        updateSidePanel: fe,
        worldStickerEditable: Pe,
        writePose: re
      } = _e);
    },
    onSidePanelClick: Q,
    onSidePanelInput: ue,
    onSidePanelChange: me
  };
}
function qN(e) {
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
    shotEditor: u,
    tooltip: d,
    uiState: f,
    videoEl: m
  } = e;
  let _, g, p, F, K, z, G, x, q, R, ne, B, Z, I, ae, ie, he, te, ge, de, P, H, oe, j, fe, Pe, re, O, Q, ue, me, _e, E, ce, y, v, V, U, S, w, D, k, N, A, W, J, se, L, le, ve, we;
  const pe = () => {
    if (!t.customPaintSessionStart) return;
    if (Bs(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (AP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Re = [
      Fn(t.customPaintColor),
      ...t.customPaintHistory.filter((X) => !Bs(X, t.customPaintColor))
    ];
    t.customPaintHistory = Re.slice(0, 8), t.customPaintSessionStart = null;
  }, be = (Re = !1) => {
    !i || i.hidden || (Re ? pe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, ye = () => {
    i && (i.hidden && (t.customPaintSessionStart = Fn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    S();
  }
  function $(Re) {
    var ft, zt, Dt, on, En;
    if ((zt = (ft = Re.target) == null ? void 0 : ft.matches) != null && zt.call(ft, "[data-confirm-overlay]")) {
      const Ye = (Dt = f.confirmDialog) == null ? void 0 : Dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ye == null || Ye(!1);
      return;
    }
    const X = Re.target.closest("[data-space-mode]");
    if (X) {
      ce(X.getAttribute("data-space-mode"));
      return;
    }
    const Ce = Re.target.closest("[data-gizmo-mode]");
    if (Ce) {
      t.gizmoMode = Ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, le(), O({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const Ve = Re.target.closest("[data-view]");
    if (Ve) {
      if (Ve.getAttribute("aria-disabled") === "true") return;
      const Ye = t.mode;
      t.mode = String(Ve.getAttribute("data-view") || "pano"), u && t.mode === "frame" && (Ye !== "frame" && (c.frameSafeRect = null), ve(), le()), I(), N(), O();
      return;
    }
    const Ae = Re.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !s) {
      if (Ae.matches("[data-tool-mode]")) {
        const Ye = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Ye, (Ye === "paint" || Ye === "mask") && q({ preservePanelValues: !0 }), w(), ve(), le(), O();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const Ye = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((Ye === "undo" || Ye === "redo") && Ae.disabled) return;
        Ye === "undo" ? Q(-1) : Ye === "redo" ? Q(1) : Ye === "clear" ? G() : Ye === "add" || Ye === "add-image" ? g() : Ye === "add-world" ? F() : Ye === "add-or-look" ? _() : Ye === "add-camera" && p();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Ye = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Ye, q({ preservePanelValues: !0 }), Mn[Ye] && (t.activeBrushPresetId = Ye), w(), ve(), le(), O();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), q({ preservePanelValues: !0 }), w(), ve(), le(), O();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const Ye = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        x(Ye);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const Ye = vl.find((jt) => jt.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!Ye) return;
        t.paintColor = Fn(Ye.color), be(!0), w();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Re.preventDefault(), Re.stopPropagation(), i && !i.hidden ? be(!0) : ye(), w();
        return;
      }
    }
    const $e = String(((on = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : on.call(Ae, "data-action")) || "");
    if ($e === "video-play-toggle") {
      if (Re.preventDefault(), Re.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub = !1, A();
      return;
    }
    if ($e === "video-audio-toggle") {
      Re.preventDefault(), Re.stopPropagation(), se(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if ($e === "video-loop-toggle") {
      if (Re.preventDefault(), Re.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
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
        const Ye = t.mode === "frame" ? ie() : null;
        if (!Ye || Ye.locked === !0) return;
        E(Ye, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, D(), fe(), R(), N(), ve(), le(), O();
        return;
      }
      if ($e === "frame-aspect-custom") {
        const Ye = t.mode === "frame" ? ie() : null, jt = Ae.getAttribute("data-custom-width"), yn = Ae.getAttribute("data-custom-height");
        if (!Ye || !K(Ye, jt, yn)) return;
        f.frameRail.aspectOpen = !1, D(), fe(), R(), N(), O();
        return;
      }
      if ($e === "frame-rotate-90") {
        const Ye = t.mode === "frame" ? ie() : null;
        if (!Ye || Ye.locked === !0) return;
        me(Ye), f.frameRail.aspectOpen = !1, D(), fe(), R(), N(), O();
        return;
      }
      if ($e === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, le(), O();
        return;
      }
      if ($e === "aspect-set") {
        const Ye = te();
        if (!Ye) return;
        const jt = String(Ae.getAttribute("data-aspect") || "1:1");
        E(Ye, jt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), R(), le(), O();
        return;
      }
      if ($e === "rotate-90") {
        const Ye = te();
        if (!Ye || P()) return;
        me(Ye), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, D(), fe(), R(), le(), O();
        return;
      }
      if ($e === "bring-front") {
        z();
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
        re();
        return;
      }
      if ($e === "toggle-lock") {
        J();
        return;
      }
      if ($e === "back-initial") {
        ue();
        return;
      }
      if ($e === "toggle-visible") {
        W();
        return;
      }
      if ($e === "delete") {
        B();
        return;
      }
    }
    if ($e === "reset-view") {
      if (t.mode === "frame") return;
      L(
        { position: V(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((En = ne()) == null ? void 0 : En.radius) || er },
        { mode: Us(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if ($e === "frame-view") {
      if (!H() || Us(t.spaceMode, t.viewTransition) !== "6dof") return;
      ae();
      return;
    }
    if ($e === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, RP(r == null ? void 0 : r.id, t.showGrid), h(), O();
      return;
    }
    if ($e === "toggle-fullscreen") {
      Re.preventDefault(), Re.stopPropagation(), ze();
      return;
    }
    if ($e === "toggle-output-preview-size") {
      Re.preventDefault(), Re.stopPropagation();
      const Ye = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Ye, U(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Ye ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), We(), O();
      return;
    }
    const Ge = Re.target.closest("[data-paint-history-index]");
    if (!Ge) return;
    const Ue = Number(Ge.getAttribute("data-paint-history-index")), ot = t.customPaintHistory[Ue];
    ot && (t.customPaintColor = Fn(ot), t.paintColor = Fn(ot), w());
  }
  function C(Re) {
    const X = Re.target.closest("[data-video-seek]");
    if (X) {
      if (!(m instanceof HTMLVideoElement)) return;
      oe.playing && (we.resumeAfterScrub = !0), oe.seek(si(Number(X.value || 0), j()));
      return;
    }
    const Ce = Re.target.closest("[data-video-volume]");
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
    const Ve = Re.target.closest("[data-paint-size-slider]");
    if (Ve) {
      if (Ve.disabled) return;
      const $e = Math.max(1, Math.min(120, Math.round(Number(Ve.value)))), Ge = he(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ge] = $e, w(), y();
      return;
    }
    const Ae = Re.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const $e = { ...t.customPaintColor, a: Ee(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Fn($e), t.paintColor = Fn($e), w();
    }
  }
  function b(Re) {
    var X;
    if (Re.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      we.resumeAfterScrub && oe.play(), we.resumeAfterScrub = !1;
      return;
    }
    if (Re.target.closest("[data-video-volume]")) {
      typeof ((X = Re.target) == null ? void 0 : X.blur) == "function" && Re.target.blur();
      return;
    }
    Re.target.closest("[data-paint-size-slider]") && ge();
  }
  function T(Re) {
    const X = Re.target.closest("[data-tip]");
    !X || !l.contains(X) || d.target !== X && (d.target = X, d.timer && clearTimeout(d.timer), d.timer = window.setTimeout(() => {
      d.target === X && v(X);
    }, 220));
  }
  function M(Re) {
    var Ve, Ae;
    const X = Re.target.closest("[data-tip]");
    !X || d.target !== X || (Re.relatedTarget instanceof Element ? (Ae = (Ve = Re.relatedTarget).closest) == null ? void 0 : Ae.call(Ve, "[data-tip]") : null) === X || de();
  }
  function Y(Re, X) {
    var Ue;
    if (!o) return;
    const Ce = o.getBoundingClientRect(), Ve = Ee((Re - Ce.left) / Math.max(1, Ce.width), 0, 1), Ae = 1 - Ee((X - Ce.top) / Math.max(1, Ce.height), 0, 1), $e = au(t.customPaintColor), Ge = { ...ou($e.h, Ve, Ae), a: Number(((Ue = t.customPaintColor) == null ? void 0 : Ue.a) ?? 1) };
    t.customPaintColor = Fn(Ge), t.paintColor = Fn(Ge), w();
  }
  function ee(Re) {
    var $e;
    if (!a) return;
    const X = a.getBoundingClientRect(), Ce = Ee((Re - X.left) / Math.max(1, X.width), 0, 1), Ve = au(t.customPaintColor), Ae = { ...ou(Ce, Ve.s, Ve.v), a: Number((($e = t.customPaintColor) == null ? void 0 : $e.a) ?? 1) };
    t.customPaintColor = Fn(Ae), t.paintColor = Fn(Ae), w();
  }
  function Se(Re, X) {
    const Ce = Re.pointerId;
    X(Re);
    const Ve = ($e) => {
      $e.pointerId === Ce && X($e);
    }, Ae = ($e) => {
      $e.pointerId === Ce && (window.removeEventListener("pointermove", Ve), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ve), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const Re = !!t.fullscreen;
    zi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Re ? He.fullscreen_close : He.fullscreen,
      label: Re ? "Exit Fullscreen" : "Fullscreen",
      tip: Re ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ne(Re) {
    const X = !!Re;
    t.fullscreen !== X && (t.fullscreen = X, l.classList.toggle("pano-modal-fullscreen", X), X ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), xe(), Pe(), O());
  }
  function Te() {
    return document.fullscreenElement === n;
  }
  async function ze() {
    var Re, X;
    try {
      if (!document.fullscreenEnabled) {
        Ne(!t.fullscreen);
        return;
      }
      Te() ? await ((X = document.exitFullscreen) == null ? void 0 : X.call(document)) : await ((Re = n.requestFullscreen) == null ? void 0 : Re.call(n));
    } catch {
      Ne(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Ne(Te());
  }
  function We() {
    const Re = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Re ? He.fullscreen_close : He.fullscreen, f.outputPreviewToggle.label = Re ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Re ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Re) {
      ({
        addCutoutFrame: _,
        addImageSticker: g,
        addStudioCamera: p,
        addWorldImageSticker: F,
        applyCutoutAspectCustom: K,
        bringSelectedToFront: z,
        clearAll: G,
        clearPaintingLayer: x,
        clearSelection: q,
        commitAndRefreshNode: R,
        contentSphere: ne,
        deleteSelected: B,
        duplicateSelected: Z,
        forceCursorTool: I,
        frameSpaceContent: ae,
        getActiveCutoutShot: ie,
        getBrushPresetIdForTool: he,
        getSelected: te,
        hidePaintSizePreview: ge,
        hideTooltip: de,
        isErpCamera: P,
        isFreeSpaceView: H,
        playback: oe,
        playbackFps: j,
        pushHistory: fe,
        queueVideoTransportLayout: Pe,
        replaceSelectedImage: re,
        requestDraw: O,
        restoreHistory: Q,
        restoreSelectedToInitialPose: ue,
        rotateCutoutAspect90: me,
        sendSelectedToBack: _e,
        setShotAspect: E,
        setSpaceMode: ce,
        showPaintSizePreview: y,
        showTooltipFor: v,
        spaceOrigin: V,
        startAnimation: U,
        syncFloatingViewButtonState: S,
        syncPaintUi: w,
        syncSidePanelControls: D,
        syncVideoTransportState: k,
        syncViewToggleState: N,
        togglePlayback: A,
        toggleSelectedExternalStickerVisibility: W,
        toggleSelectedLock: J,
        toggleVideoMuted: se,
        transitionView: L,
        updateSelectionMenu: le,
        updateSidePanel: ve,
        videoState: we
      } = Re);
    },
    closePaintColorPop: be,
    syncGridToggleButton: h,
    onRootClick: $,
    onRootInput: C,
    onRootChange: b,
    onRootPointerOver: T,
    onRootPointerOut: M,
    updatePaintColorFromSv: Y,
    updatePaintColorFromHue: ee,
    bindDrag: Se,
    syncFullscreenButton: xe,
    setFullscreenState: Ne,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: We
  };
}
function XN(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, c, u, d, f, m, _, g, p, F, K;
  function z(I) {
    var ae, ie, he, te, ge;
    if (I.key === "Escape") {
      if (s()) {
        I.preventDefault(), I.stopPropagation(), (ae = I.stopImmediatePropagation) == null || ae.call(I);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        I.preventDefault(), I.stopPropagation(), (ie = I.stopImmediatePropagation) == null || ie.call(I), (he = document.exitFullscreen) == null || he.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        I.preventDefault(), I.stopPropagation(), (te = I.stopImmediatePropagation) == null || te.call(I), g(!1);
        return;
      }
      I.preventDefault(), I.stopPropagation(), (ge = I.stopImmediatePropagation) == null || ge.call(I), l();
    }
  }
  function G(I) {
    const ae = String(I.key || ""), ie = String(I.code || ""), he = Number(I.keyCode || 0);
    if (!(ae === "Delete" || ie === "Delete" || he === 46) && !(ae === "Backspace" || ie === "Backspace" || he === 8)) return;
    const de = I.target, P = ((de == null ? void 0 : de.tagName) || "").toUpperCase();
    if (P === "INPUT" || P === "TEXTAREA" || de != null && de.isContentEditable) return;
    if (o.selection) {
      u(), I.preventDefault(), I.stopPropagation();
      return;
    }
    if (d()) {
      I.preventDefault(), I.stopPropagation();
      return;
    }
    m() && (c(), I.preventDefault(), I.stopPropagation());
  }
  function x(I) {
    if (I.code !== "Space" || I.ctrlKey || I.metaKey || I.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const ae = I.composedPath()[0];
    if (ae !== document.body && ae !== document.documentElement && !r.contains(ae)) return !1;
    const ie = ((ae == null ? void 0 : ae.tagName) || "").toUpperCase();
    return ie === "INPUT" ? !sP.has(String(ae.type || "text").toLowerCase()) : ie !== "TEXTAREA" && ie !== "SELECT" && !(ae != null && ae.isContentEditable);
  }
  function q(I) {
    x(I) && (I.preventDefault(), I.stopPropagation(), I.repeat || F());
  }
  function R(I) {
    x(I) && (I.preventDefault(), I.stopPropagation());
  }
  function ne(I) {
    const ae = !!(I.ctrlKey || I.metaKey), ie = !!I.altKey;
    t.marqueeModifier === ae && t.altModifier === ie || (t.marqueeModifier = ae, t.altModifier = ie, p(), K(t.pointerPos));
  }
  function B() {
    t.marqueeModifier = !1, t.altModifier = !1, p(), K(t.pointerPos);
  }
  function Z(I) {
    if (n || !I.ctrlKey && !I.metaKey) return;
    const ae = String(I.key || "").toLowerCase(), ie = String(I.code || "");
    if (ae !== "z" && ie !== "KeyZ") return;
    const he = I.target, te = ((he == null ? void 0 : he.tagName) || "").toUpperCase();
    if (te === "INPUT" || te === "TEXTAREA" || he != null && he.isContentEditable) return;
    const { canUndo: ge, canRedo: de } = f();
    I.shiftKey && !de || !I.shiftKey && !ge || (_(I.shiftKey ? 1 : -1), I.preventDefault(), I.stopPropagation());
  }
  return {
    connect(I) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: u,
        deleteSelectedWorldSticker: d,
        getHistoryCapabilities: f,
        getSelected: m,
        restoreHistory: _,
        setFullscreenState: g,
        syncFrameRollKnob: p,
        togglePlayback: F,
        updateCursor: K
      } = I);
    },
    onEscClose: z,
    onDeleteKey: G,
    onSpaceKey: q,
    onSpaceKeyUp: R,
    onModifierKeyChange: ne,
    onWindowBlur: B,
    onUndoRedoKey: Z
  };
}
const ep = /* @__PURE__ */ new Map(), nr = Pm({
  app: Zn,
  api: fn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: ru,
    markImageFailed: wg,
    markImageLoading: _g,
    markImageReady: Sg
  }
});
function tp(e) {
  if (!en(e, "background") || !en(e, "external-sticker")) return null;
  const t = nr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? lo(t[0]) : null;
}
function JN(e) {
  if (!en(e, "background")) return null;
  const [t] = nr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = nr.uiValue(e, "pano_timeline_frames") || [], [n] = nr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: In(n) };
}
const ZN = nr.assetSource, QN = nr.source, e2 = nr.uiImage, t2 = nr.invalidateUiImage, np = nr.loadPreferredExactLinkedImage;
async function n2(e, t, r = {}) {
  var rn, Ft;
  await ig(e, { tolerateOperationFailure: !0 }), nr.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = EP(e, t);
  await od();
  const s = Ya(e, "output_preset"), l = Ya(e, "coverage"), c = Ya(e, "bg_color"), u = Ya(e, aP), d = () => {
    const De = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return np(
      e,
      De,
      () => Ie(),
      `background:size:${De.join("|")}`
    );
  }, f = () => {
    const De = d();
    return TP(De);
  }, m = (De = 2048) => {
    const Je = s == null ? void 0 : s.value;
    return FP(Je) ? f() || Math.max(1, Math.round(Number(De || 2048))) : OP(Je, De);
  }, _ = e.__panoSceneStateV2 === !0, g = t === "stickers" && _, p = t === "cutout" && _, F = g && e.__panoStudio === !0, K = p || F, z = t === "cutout" || F, G = p ? JN(e) : null, x = (_ ? Wh : Gh)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: G ? G.coverage : In(l == null ? void 0 : l.value),
    sharedUiSettings: DP(),
    active: Yh(e),
    fps: _ ? tp(e) : null,
    scene: (G == null ? void 0 : G.state) ?? null,
    camera: p
  });
  e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = 0;
  let q = null;
  K ? (q = x.camera && (!F || x.camera.visible !== !1) ? Bh(x.camera, 0) : null, x.shots = q ? [{ ...q, position: [...q.position] }] : [], x.active.selected_shot_id = q && p ? ml : null) : t === "cutout" && (x.shots = Array.isArray(x.shots) ? x.shots.slice(0, 1) : [], x.shots.length || (x.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var wn;
    const De = Array.isArray(x.shots) ? x.shots : [], Je = String(((wn = x == null ? void 0 : x.active) == null ? void 0 : wn.selected_shot_id) || "");
    return De.find((Qt) => String((Qt == null ? void 0 : Qt.id) || "") === Je) || De[0] || null;
  })() : null, ne = R ? Ig(R, !1) : { width: 220, height: 132 }, B = vg(F ? "studio" : t), Z = /* @__PURE__ */ io({
    stageStatus: Xn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (B.viewButtons || []).map((De) => ({ ...De, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (rn = B.spaceButtons) != null && rn.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: B.spaceButtons, frame: B.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (B.toolButtons || []).map((De) => ({
      ...De,
      disabled: !1,
      ...De.key === "add-world" ? { visible: g } : {},
      ...p && wP.has(De.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(B.floatingButtons || []).map((De) => ({ ...De, disabled: !1 })),
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
      width: ne.width,
      height: ne.height,
      label: R ? "Loading preview" : "Add Frame to preview"
    }
  }), I = { frame: /* @__PURE__ */ ms(0), playing: /* @__PURE__ */ ms(!1) }, ae = document.createElement("div");
  document.body.appendChild(ae);
  const ie = ({ intent: De, file: Je } = {}) => {
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
  }, te = Mu(iP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: B,
    paintSwatches: vl.map((De) => ({
      id: De.id,
      label: De.label,
      cssColor: ur(De.color, 1)
    })),
    uiState: Z,
    playhead: I,
    onClose: () => {
      It();
    },
    onTimeline: (De) => Sl(De),
    onImageFileSelected: ie,
    onImageFileCancelled: he
  });
  let ge = null;
  try {
    ge = te.mount(ae);
  } catch (De) {
    try {
      te.unmount();
    } catch {
    }
    throw ae.remove(), De;
  }
  const de = ae.querySelector(".pano-modal-overlay"), P = ae.querySelector(".pano-modal"), H = P == null ? void 0 : P.querySelector("[data-stage-overlay]"), oe = P == null ? void 0 : P.querySelector("[data-stage-background]"), j = P == null ? void 0 : P.querySelector(".pano-stage-wrap"), fe = ((Ft = ge == null ? void 0 : ge.getPaintOverlayRefs) == null ? void 0 : Ft.call(ge)) || {}, Pe = fe.cursor || null, re = fe.sizePreview || null, O = fe.sizeSample || null;
  if (!de || !P || !H || !oe || !j || !Pe || !re || !O)
    throw te.unmount(), ae.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const Q = H.getContext("2d"), ue = P.querySelector("[data-side]"), me = P.querySelector("[data-video-element]"), _e = P.querySelector("[data-port-video-element]");
  Ll(H, "editor.stage-overlay"), Ll(oe, "editor.stage-background"), qd(me, "editor.video"), qd(_e, "editor.port-video");
  const E = P.querySelector(".pano-floating-right"), ce = P.querySelector(".pano-floating-top"), y = P.querySelector("[data-tool-rail]"), v = P.querySelector("[data-frame-rail]"), V = P.querySelector("[data-frame-roll-knob]"), U = P.querySelector("[data-paint-dock]"), S = P.querySelector(".pano-video-transport"), w = P.querySelector("[data-selection-menu]"), D = P.querySelector("[data-tooltip]"), k = P.querySelector("[data-camera-preview-host]"), N = P.querySelector("[data-camera-preview-canvas]");
  Ll(N, "editor.camera-preview");
  const A = P.querySelector("[data-paint-color-row]"), W = P.querySelector("[data-paint-color-pop]"), J = P.querySelector("[data-paint-color-sv]"), se = P.querySelector("[data-paint-color-sv-cursor]"), L = P.querySelector("[data-paint-hue-strip]"), le = P.querySelector("[data-paint-hue-handle]");
  j == null || j.removeAttribute("data-stage-ready"), j == null || j.setAttribute("data-stage-loading-kind", "boot"), H.style.opacity = "1", oe.style.opacity = "0", i && (ue == null || ue.remove(), P.classList.add("pano-modal-readonly")), P.addEventListener("pointerdown", () => M.wake(), !0), P.addEventListener("pointerdown", (De) => {
    var Je;
    De.target.closest("[data-frame-roll-knob]") || En(), !De.target.closest(".pano-picker") && (De.target.closest("[data-paint-color-row]") || (P.querySelectorAll(".pano-picker-pop").forEach((wn) => {
      wn.hidden = !0;
    }), Ae(!0), z && we.cutoutAspectOpen && !De.target.closest(".pano-aspect-popover") && !De.target.closest("[data-action='aspect']") && (we.cutoutAspectOpen = !1, we.menuMode = "", we.menuSize.measured = !1, Ea(), Ie()), (Je = Z.frameRail) != null && Je.aspectOpen && !De.target.closest(".pano-frame-aspect-control") && (Z.frameRail.aspectOpen = !1)));
  });
  const we = {
    mode: "pano",
    selectedId: Ag(t, x),
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
    coverage: In(x.coverage),
    historyController: BP(x),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Cr,
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
    showGrid: VP(e == null ? void 0 : e.id, !0),
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
    paintEngine: Au(),
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
  const T = {
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
  }, M = rx({
    requestAnimationFrame: (De) => requestAnimationFrame(De),
    cancelAnimationFrame: (De) => cancelAnimationFrame(De),
    draw: (De, Je) => Ci(De, Je),
    animating: () => Ue()
  }), Y = tx({
    requestFrame: (De) => M.requestFrame(De),
    cancelFrame: (De) => M.cancelFrame(De),
    tasks: {
      seek: () => wl.seek(pe.scrubFrame),
      timeline: () => Pi(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        qn(), Ie({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => So()
    }
  }), ee = Uv({
    canvas: oe,
    onReady: () => {
      tt(), Ie({ reason: dt.CONTEXT });
    },
    onFailed: () => Ie(),
    onUpdate: () => Ie({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: (De) => Ie({ localOnly: !0, reason: hN(De) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      zt(), tt(), Ie({ reason: dt.CONTEXT });
    }
  }), Se = Number.parseFloat(
    getComputedStyle(P).getPropertyValue("--pano-float-radius")
  ) || 10, xe = (De) => {
    const Je = String(De || "default");
    H.style.cursor !== Je && (H.style.cursor = Je);
  }, Ne = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  }, ze = Eu({
    getView: () => ({ yaw: we.viewYaw, pitch: we.viewPitch, fov: we.viewFov }),
    setView: (De) => {
      we.viewYaw = $t(Number(De.yaw || 0)), we.viewPitch = Ee(Number(De.pitch || 0), -89.9, 89.9), we.viewFov = Ee(Number(De.fov || we.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const De = H.getBoundingClientRect();
      return {
        w: Math.max(1, Number(De.width || H.clientWidth || 0)),
        h: Math.max(1, Number(De.height || H.clientHeight || 0))
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
    onInteraction: () => M.requestDraw(dt.VIEW)
  }), {
    addImageStickerFromFile: je,
    addWorldStickerFromFile: We,
    applyInitialCutoutFocus: Re,
    applyVideoTimelineFps: X,
    bindDrag: Ce,
    cancelFrameCameraGesture: Ve,
    closePaintColorPop: Ae,
    commitState: $e,
    disposeMediaSession: Ge,
    editorAnimating: Ue,
    finishKnobRoll: ot,
    flushFrameWheelCommit: ft,
    forgetCameraPreviewFrame: zt,
    getUnwrapRect: Dt,
    hidePaintSizePreview: on,
    hideTooltip: En,
    hoverWorldGizmo: Ye,
    isFreeFrameView: jt,
    isFreeSpaceView: yn,
    migrateLegacyEmbeddedAssets: vr,
    onCanvasDragOver: zr,
    onCanvasDrop: nn,
    onCanvasMouseMove: Sn,
    onCanvasPointerCancel: jr,
    onCanvasPointerDown: _r,
    onCanvasPointerMove: Un,
    onCanvasPointerUp: ga,
    onCanvasWheel: fo,
    onDeleteKey: po,
    onEscClose: ho,
    onFrameRollKnobDoubleClick: ya,
    onFrameRollKnobPointerDown: ba,
    onFrameRollKnobPointerMove: va,
    onFullscreenChange: Mi,
    onModifierKeyChange: xt,
    onRootChange: Yn,
    onRootClick: ir,
    onRootInput: mo,
    onRootPointerOut: On,
    onRootPointerOver: _a,
    onSidePanelChange: Sa,
    onSidePanelClick: wa,
    onSidePanelInput: Hr,
    onSpaceKey: xa,
    onSpaceKeyUp: Sr,
    onTimelineAction: Sl,
    onUndoRedoKey: go,
    onWindowBlur: ka,
    onWindowDragEnter: yo,
    onWindowDragLeave: bo,
    onWindowDragOver: Ma,
    onWindowDrop: Pa,
    playback: wl,
    pushHistory: xl,
    reconcileExternalStickerFromInputs: Na,
    refreshModalVideoSource: vo,
    replaceSelectedImageFromFile: Oe,
    requestDraw: Ie,
    sampleEditorDiagnostics: ke,
    setDropCue: bt,
    setPointerPos: lt,
    stageResizeObserver: vt,
    stickerCornerOrderSanity: Xe,
    stopRenderLoop: et,
    syncCanvasSize: tt,
    syncCutoutShot: qn,
    syncFullscreenButton: qe,
    syncGridToggleButton: Ke,
    syncLookAtFrameButtonState: Ze,
    syncOutputPreviewToggleButton: qt,
    syncPaintUi: kt,
    syncPaintingLayerAsync: wr,
    syncTimeline: Pi,
    syncUndoRedoButtons: Ni,
    tick: Ci,
    triggerBackgroundPersistenceOnClose: Ca,
    updateCursor: _o,
    updatePaintColorFromHue: Aa,
    updatePaintColorFromSv: Ia,
    updateSelectionMenu: Ea,
    updateSidePanel: So,
    viewControls: ct,
    watchPixelRatio: pt
  } = $P({
    api: fn,
    app: Zn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: K,
    canvas: H,
    capture: G,
    closeEditor: It,
    comfyMedia: nr,
    coverageWidget: l,
    ctx: Q,
    cutoutPreviewCanvas: N,
    cutoutPreviewHost: k,
    cutoutV2: p,
    dragCue: Te,
    dragFrames: Y,
    editor: we,
    editorView: ee,
    floatingRightEl: E,
    floatingTopEl: ce,
    frameGateCssRadius: Se,
    frameRailEl: v,
    frameRollKnobEl: V,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: q,
    loadPreferredExactLinkedImage: np,
    mediaAssetSource: ZN,
    mediaSource: QN,
    mediaUiImage: e2,
    node: e,
    overlay: de,
    paintColorPop: W,
    paintColorRow: A,
    paintColorSv: J,
    paintColorSvCursor: se,
    paintCursorEl: Pe,
    paintDockEl: U,
    paintHueHandle: le,
    paintHueStrip: L,
    paintSizePreviewEl: re,
    paintSizePreviewSampleEl: O,
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
    runtime: T,
    sceneV2: g,
    scheduler: M,
    selectionMenu: w,
    setCanvasCursor: xe,
    shotEditor: z,
    stageWrap: j,
    state: x,
    stateV2: _,
    stateWidget: u,
    stillCanvas: C,
    studio: F,
    timeline: pe,
    timelinePlayhead: I,
    toolRailEl: y,
    tooltip: Ne,
    tooltipEl: D,
    type: t,
    uiState: Z,
    videoEl: me,
    videoTimelineFps: tp,
    videoTransportEl: S,
    viewController: ze,
    vueModal: ge
  }, [
    GP,
    UP,
    YP,
    qP,
    XP,
    JP,
    ZP,
    QP,
    eN,
    fN,
    pN,
    gN,
    yN,
    bN,
    LN,
    VN,
    RN,
    $N,
    zN,
    jN,
    HN,
    GN,
    WN,
    KN,
    BN,
    UN,
    YN,
    qN,
    XN
  ]);
  Xe(), vt.observe(H), pt();
  const gt = () => $e();
  n || (e.__panoFlushStateBeforeQueue = gt), V == null || V.addEventListener("pointerdown", ba), V == null || V.addEventListener("pointermove", va), V == null || V.addEventListener("pointerup", ot), V == null || V.addEventListener("pointercancel", () => Ve()), V == null || V.addEventListener("lostpointercapture", () => {
    var De;
    ((De = we.interaction) == null ? void 0 : De.source) === "knob" && Ve();
  }), V == null || V.addEventListener("dblclick", ya), H.onpointerdown = _r, H.onpointermove = Un, H.onpointerup = ga, H.onpointercancel = jr, H.onlostpointercapture = () => {
    Ve();
  }, H.onauxclick = (De) => {
    De.button === 1 && De.preventDefault();
  }, H.oncontextmenu = (De) => {
    (yn() || jt()) && AS(ct(), 2) && De.preventDefault();
  }, H.onmousemove = Sn, H.onpointerleave = () => {
    we.interaction || Ye({ x: -1e6, y: -1e6 });
  }, H.onmouseleave = () => {
    lt(we.pointerPos, !1), _o(we.pointerPos), we.mode === "frame" && we.primaryTool === "cursor" && Ie({ localOnly: !0, reason: dt.OVERLAY });
  }, H.onwheel = fo, H.ondragover = zr, H.ondrop = nn, window.addEventListener("dragenter", yo, !0), window.addEventListener("dragover", Ma, !0), window.addEventListener("dragleave", bo, !0), window.addEventListener("drop", Pa, !0), ue == null || ue.addEventListener("click", wa), ue == null || ue.addEventListener("input", Hr), ue == null || ue.addEventListener("change", Sa), Ke(), P.addEventListener("click", ir), P.addEventListener("input", mo), P.addEventListener("change", Yn), P.addEventListener("pointerup", (De) => {
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
  }), P.addEventListener("pointerover", _a), P.addEventListener("pointerout", On), P.addEventListener("pointerdown", (De) => {
    De.target.closest("[data-frame-roll-knob]") || En();
  }), J && (J.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), Ce(De, (Je) => Ia(Je.clientX, Je.clientY));
  }), L && (L.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), Ce(De, (Je) => Aa(Je.clientX));
  }), P.addEventListener("click", (De) => {
    var Qr;
    const Je = De.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!Je) return;
    const wn = Je.getAttribute("data-action") === "confirm-accept", Qt = (Qr = Z.confirmDialog) == null ? void 0 : Qr.resolve;
    Z.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Qt == null || Qt(wn);
  }), document.addEventListener("fullscreenchange", Mi), qe(), qt();
  const yt = e.onConnectionsChange;
  let an = null, Ut = () => {
  };
  !n && t === "stickers" && (Ut = ng(e, (De = "sync") => {
    De === "executed" && (t2(be, Ws), vo(), g && X()), Na(De);
  }, { editor: !0 }), an = function(...Je) {
    typeof yt == "function" && yt.apply(this, Je), vo(), Dr(this, "connections");
  }, e.onConnectionsChange = an), !n && !p && ep.set(String(e.id ?? "0"), () => wr());
  let Zt = null;
  async function It() {
    return Zt || (Zt = (async () => {
      var De, Je, wn, Qt, Qr, Ai, Ii, pd;
      return ep.delete(String(e.id ?? "0")), ft(), n || $e(), document.fullscreenElement === de && ((De = document.exitFullscreen) == null || De.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Mi), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === gt && (e.__panoFlushStateBeforeQueue = null), (wn = (Je = e.__panoDomPreview) == null ? void 0 : Je.requestDraw) == null || wn.call(Je), (Qr = (Qt = e.graph) == null ? void 0 : Qt.setDirtyCanvas) == null || Qr.call(Qt, !0, !0), (pd = (Ii = (Ai = Zn) == null ? void 0 : Ai.canvas) == null ? void 0 : Ii.setDirty) == null || pd.call(Ii, !0, !0), En(), Y.cancel(), et(), Ge(), ee.dispose(), bt(!1), window.removeEventListener("keydown", ho, !0), window.removeEventListener("keydown", po, !0), window.removeEventListener("keydown", xa, !0), window.removeEventListener("keyup", Sr, !0), window.removeEventListener("keydown", xt, !0), window.removeEventListener("keyup", xt, !0), window.removeEventListener("blur", ka), window.removeEventListener("keydown", go, !0), window.removeEventListener("dragenter", yo, !0), window.removeEventListener("dragover", Ma, !0), window.removeEventListener("dragleave", bo, !0), window.removeEventListener("drop", Pa, !0), !n && t === "stickers" && (e.onConnectionsChange === an && (e.onConnectionsChange = yt), Ut()), te.unmount(), ae.remove(), Ca(), Zt = null, !0;
    })().catch((De) => (console.error("[PanoramaCutoutSync] closeEditor failed", De), Zt = null, !1)), Zt);
  }
  window.addEventListener("keydown", ho, !0), window.addEventListener("keydown", po, !0), window.addEventListener("keydown", xa, !0), window.addEventListener("keyup", Sr, !0), window.addEventListener("keydown", xt, !0), window.addEventListener("keyup", xt, !0), window.addEventListener("blur", ka), window.addEventListener("keydown", go, !0), de.addEventListener("pointerdown", (De) => {
    De.target === de && It();
  });
  function Lt(De, Je, { rollbackState: wn = !1 } = {}) {
    let Qt = "";
    try {
      wn && (Qt = JSON.stringify(x)), Je();
    } catch (Qr) {
      if (Qt)
        try {
          const Ai = JSON.parse(Qt);
          Object.keys(x).forEach((Ii) => delete x[Ii]), Object.assign(x, Ai), n || $e();
        } catch (Ai) {
          console.error(`[PanoramaStickers] editor boot step "${De}" rollback failed`, Ai);
        }
      Z.stageWarningDetail = `boot:${De}`, console.error(`[PanoramaStickers] editor boot step "${De}" failed`, Qr);
    }
  }
  Lt("cutout-focus", Re), !n && t === "stickers" && Lt("external-sticker-sync", () => Na("open"), { rollbackState: !0 }), vr().catch((De) => {
    Z.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', De);
  }), Lt("history", xl), Lt("undo-redo", Ni), Lt("paint-ui", kt), Lt("side-panel", So), Lt("look-at-frame", Ze), Lt("video-source", vo), Lt("canvas-size", tt), Lt("cursor", () => _o(we.pointerPos)), Ie(), ke();
}
Zn.registerExtension($S({
  app: Zn,
  openEditor: n2,
  attachStickers: Qw,
  attachCutout: ex,
  attachPreview: Zw,
  restoreOutput: $w,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: pP
}));
