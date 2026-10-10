import * as Os from "../../scripts/app.js";
import { app as jn } from "../../scripts/app.js";
import { api as qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const wt = {}, Ei = [], nr = () => {
}, Vp = () => !1, La = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ra = (e) => e.startsWith("onUpdate:"), Zt = Object.assign, eu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ly = Object.prototype.hasOwnProperty, pt = (e, t) => Ly.call(e, t), Qe = Array.isArray, Oi = (e) => es(e) === "[object Map]", $p = (e) => es(e) === "[object Set]", jd = (e) => es(e) === "[object Date]", it = (e) => typeof e == "function", zt = (e) => typeof e == "string", or = (e) => typeof e == "symbol", _t = (e) => e !== null && typeof e == "object", zp = (e) => (_t(e) || it(e)) && it(e.then) && it(e.catch), jp = Object.prototype.toString, es = (e) => jp.call(e), Ry = (e) => es(e).slice(8, -1), Hp = (e) => es(e) === "[object Object]", tu = (e) => zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bo = /* @__PURE__ */ Qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Va = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vy = /-\w/g, sn = Va(
  (e) => e.replace(Vy, (t) => t.slice(1).toUpperCase())
), $y = /\B([A-Z])/g, fi = Va(
  (e) => e.replace($y, "-$1").toLowerCase()
), $a = Va((e) => e.charAt(0).toUpperCase() + e.slice(1)), fl = Va(
  (e) => e ? `on${$a(e)}` : ""
), er = (e, t) => !Object.is(e, t), Fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Gp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, nu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hd;
const za = () => Hd || (Hd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vt(e) {
  if (Qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = zt(r) ? Gy(r) : vt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (zt(e) || _t(e))
    return e;
}
const zy = /;(?![^(]*\))/g, jy = /:([^]+)/, Hy = /\/\*[^]*?\*\//g;
function Gy(e) {
  const t = {};
  return e.replace(Hy, "").split(zy).forEach((n) => {
    if (n) {
      const r = n.split(jy);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (zt(e))
    t = e;
  else if (Qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (_t(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ky = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wy = /* @__PURE__ */ Qc(Ky);
function Kp(e) {
  return !!e || e === "";
}
function Uy(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ru(e[r], t[r]);
  return n;
}
function ru(e, t) {
  if (e === t) return !0;
  let n = jd(e), r = jd(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = or(e), r = or(t), n || r)
    return e === t;
  if (n = Qe(e), r = Qe(t), n || r)
    return n && r ? Uy(e, t) : !1;
  if (n = _t(e), r = _t(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !ru(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Wp = (e) => !!(e && e.__v_isRef === !0), Je = (e) => zt(e) ? e : e == null ? "" : Qe(e) || _t(e) && (e.toString === jp || !it(e.toString)) ? Wp(e) ? Je(e.value) : JSON.stringify(e, Up, 2) : String(e), Up = (e, t) => Wp(t) ? Up(e, t.value) : Oi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[pl(r, o) + " =>"] = i, n),
    {}
  )
} : $p(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => pl(n))
} : or(t) ? pl(t) : _t(t) && !Qe(t) && !Hp(t) ? String(t) : t, pl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    or(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class By {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = dn, !t && dn && (this.index = (dn.scopes || (dn.scopes = [])).push(
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
      const n = dn;
      try {
        return dn = this, t();
      } finally {
        dn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = dn, dn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (dn = this.prevScope, this.prevScope = void 0);
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Yy() {
  return dn;
}
let xt;
const hl = /* @__PURE__ */ new WeakSet();
class Bp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hl.has(this) && (hl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gd(this), Xp(this);
    const t = xt, n = Hn;
    xt = this, Hn = !0;
    try {
      return this.fn();
    } finally {
      Jp(this), xt = t, Hn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        su(t);
      this.deps = this.depsTail = void 0, Gd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oc(this) && this.run();
  }
  get dirty() {
    return oc(this);
  }
}
let Yp = 0, vo, So;
function qp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = So, So = e;
    return;
  }
  e.next = vo, vo = e;
}
function iu() {
  Yp++;
}
function ou() {
  if (--Yp > 0)
    return;
  if (So) {
    let t = So;
    for (So = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; vo; ) {
    let t = vo;
    for (vo = void 0; t; ) {
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
function Xp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), su(r), qy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function oc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === To) || (e.globalVersion = To, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xt, r = Hn;
  xt = e, Hn = !0;
  try {
    Xp(e);
    const i = e.fn(e._value);
    (t.version === 0 || er(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    xt = n, Hn = r, Jp(e), e.flags &= -3;
  }
}
function su(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      su(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function qy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Hn = !0;
const Qp = [];
function vr() {
  Qp.push(Hn), Hn = !1;
}
function Sr() {
  const e = Qp.pop();
  Hn = e === void 0 ? !0 : e;
}
function Gd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xt;
    xt = void 0;
    try {
      t();
    } finally {
      xt = n;
    }
  }
}
let To = 0;
class Xy {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class au {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xt || !Hn || xt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xt)
      n = this.activeLink = new Xy(xt, this), xt.deps ? (n.prevDep = xt.depsTail, xt.depsTail.nextDep = n, xt.depsTail = n) : xt.deps = xt.depsTail = n, eh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = xt.depsTail, n.nextDep = void 0, xt.depsTail.nextDep = n, xt.depsTail = n, xt.deps === n && (xt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, To++, this.notify(t);
  }
  notify(t) {
    iu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ou();
    }
  }
}
function eh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        eh(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const sc = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ Symbol(
  ""
), ac = /* @__PURE__ */ Symbol(
  ""
), Do = /* @__PURE__ */ Symbol(
  ""
);
function Bt(e, t, n) {
  if (Hn && xt) {
    let r = sc.get(e);
    r || sc.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new au()), i.map = r, i.key = n), i.track();
  }
}
function pr(e, t, n, r, i, o) {
  const s = sc.get(e);
  if (!s) {
    To++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (iu(), t === "clear")
    s.forEach(a);
  else {
    const l = Qe(e), c = l && tu(n);
    if (l && n === "length") {
      const d = Number(r);
      s.forEach((u, f) => {
        (f === "length" || f === Do || !or(f) && f >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Do)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(ni)), Oi(e) && a(s.get(ac)));
          break;
        case "delete":
          l || (a(s.get(ni)), Oi(e) && a(s.get(ac)));
          break;
        case "set":
          Oi(e) && a(s.get(ni));
          break;
      }
  }
  ou();
}
function bi(e) {
  const t = /* @__PURE__ */ ft(e);
  return t === e ? t : (Bt(t, "iterate", Do), /* @__PURE__ */ In(e) ? t : t.map(Kn));
}
function ja(e) {
  return Bt(e = /* @__PURE__ */ ft(e), "iterate", Do), e;
}
function Jn(e, t) {
  return /* @__PURE__ */ _r(e) ? zi(/* @__PURE__ */ ri(e) ? Kn(t) : t) : Kn(t);
}
const Jy = {
  __proto__: null,
  [Symbol.iterator]() {
    return ml(this, Symbol.iterator, (e) => Jn(this, e));
  },
  concat(...e) {
    return bi(this).concat(
      ...e.map((t) => Qe(t) ? bi(t) : t)
    );
  },
  entries() {
    return ml(this, "entries", (e) => (e[1] = Jn(this, e[1]), e));
  },
  every(e, t) {
    return ar(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ar(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Jn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ar(
      this,
      "find",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ar(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ar(
      this,
      "findLast",
      e,
      t,
      (n) => Jn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ar(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ar(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gl(this, "includes", e);
  },
  indexOf(...e) {
    return gl(this, "indexOf", e);
  },
  join(e) {
    return bi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ar(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zi(this, "pop");
  },
  push(...e) {
    return Zi(this, "push", e);
  },
  reduce(e, ...t) {
    return Kd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Kd(this, "reduceRight", e, t);
  },
  shift() {
    return Zi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ar(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zi(this, "splice", e);
  },
  toReversed() {
    return bi(this).toReversed();
  },
  toSorted(e) {
    return bi(this).toSorted(e);
  },
  toSpliced(...e) {
    return bi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zi(this, "unshift", e);
  },
  values() {
    return ml(this, "values", (e) => Jn(this, e));
  }
};
function ml(e, t, n) {
  const r = ja(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ In(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Zy = Array.prototype;
function ar(e, t, n, r, i, o) {
  const s = ja(e), a = s !== e && !/* @__PURE__ */ In(e), l = s[t];
  if (l !== Zy[t]) {
    const u = l.apply(e, o);
    return a ? Kn(u) : u;
  }
  let c = n;
  s !== e && (a ? c = function(u, f) {
    return n.call(this, Jn(e, u), f, e);
  } : n.length > 2 && (c = function(u, f) {
    return n.call(this, u, f, e);
  }));
  const d = l.call(s, c, r);
  return a && i ? i(d) : d;
}
function Kd(e, t, n, r) {
  const i = ja(e), o = i !== e && !/* @__PURE__ */ In(e);
  let s = n, a = !1;
  i !== e && (o ? (a = r.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = Jn(e, c)), n.call(this, c, Jn(e, d), u, e);
  }) : n.length > 3 && (s = function(c, d, u) {
    return n.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...r);
  return a ? Jn(e, l) : l;
}
function gl(e, t, n) {
  const r = /* @__PURE__ */ ft(e);
  Bt(r, "iterate", Do);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ uu(n[0]) ? (n[0] = /* @__PURE__ */ ft(n[0]), r[t](...n)) : i;
}
function Zi(e, t, n = []) {
  vr(), iu();
  const r = (/* @__PURE__ */ ft(e))[t].apply(e, n);
  return ou(), Sr(), r;
}
const Qy = /* @__PURE__ */ Qc("__proto__,__v_isRef,__isVue"), th = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(or)
);
function eb(e) {
  or(e) || (e = String(e));
  const t = /* @__PURE__ */ ft(this);
  return Bt(t, "has", e), t.hasOwnProperty(e);
}
class nh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? ub : sh : o ? oh : ih).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = Qe(t);
    if (!i) {
      let l;
      if (s && (l = Jy[n]))
        return l;
      if (n === "hasOwnProperty")
        return eb;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Jt(t) ? t : r
    );
    if ((or(n) ? th.has(n) : Qy(n)) || (i || Bt(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Jt(a)) {
      const l = s && tu(n) ? a : a.value;
      return i && _t(l) ? /* @__PURE__ */ cc(l) : l;
    }
    return _t(a) ? i ? /* @__PURE__ */ cc(a) : /* @__PURE__ */ Yi(a) : a;
  }
}
class rh extends nh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = Qe(t) && tu(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ _r(o);
      if (!/* @__PURE__ */ In(r) && !/* @__PURE__ */ _r(r) && (o = /* @__PURE__ */ ft(o), r = /* @__PURE__ */ ft(r)), !s && /* @__PURE__ */ Jt(o) && !/* @__PURE__ */ Jt(r))
        return c || (o.value = r), !0;
    }
    const a = s ? Number(n) < t.length : pt(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Jt(t) ? t : i
    );
    return t === /* @__PURE__ */ ft(i) && (a ? er(r, o) && pr(t, "set", n, r) : pr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = pt(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && pr(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!or(n) || !th.has(n)) && Bt(t, "has", n), r;
  }
  ownKeys(t) {
    return Bt(
      t,
      "iterate",
      Qe(t) ? "length" : ni
    ), Reflect.ownKeys(t);
  }
}
class tb extends nh {
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
const nb = /* @__PURE__ */ new rh(), rb = /* @__PURE__ */ new tb(), ib = /* @__PURE__ */ new rh(!0);
const lc = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function ob(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ ft(i), s = Oi(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...r), d = n ? lc : t ? zi : Kn;
    return !t && Bt(
      o,
      "iterate",
      l ? ac : ni
    ), Zt(
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
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sb(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ft(o), a = /* @__PURE__ */ ft(i);
      e || (er(i, a) && Bt(s, "get", i), Bt(s, "get", a));
      const { has: l } = gs(s), c = t ? lc : e ? zi : Kn;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Bt(/* @__PURE__ */ ft(i), "iterate", ni), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ft(o), a = /* @__PURE__ */ ft(i);
      return e || (er(i, a) && Bt(s, "has", i), Bt(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ ft(a), c = t ? lc : e ? zi : Kn;
      return !e && Bt(l, "iterate", ni), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return Zt(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ft(this), s = gs(o), a = /* @__PURE__ */ ft(i), l = !t && !/* @__PURE__ */ In(i) && !/* @__PURE__ */ _r(i) ? a : i;
        return s.has.call(o, l) || er(i, l) && s.has.call(o, i) || er(a, l) && s.has.call(o, a) || (o.add(l), pr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ In(o) && !/* @__PURE__ */ _r(o) && (o = /* @__PURE__ */ ft(o));
        const s = /* @__PURE__ */ ft(this), { has: a, get: l } = gs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ ft(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? er(o, d) && pr(s, "set", i, o) : pr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ft(this), { has: s, get: a } = gs(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ ft(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && pr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ft(this), o = i.size !== 0, s = i.clear();
        return o && pr(
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
    n[i] = ob(i, e, t);
  }), n;
}
function lu(e, t) {
  const n = sb(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    pt(n, i) && i in r ? n : r,
    i,
    o
  );
}
const ab = {
  get: /* @__PURE__ */ lu(!1, !1)
}, lb = {
  get: /* @__PURE__ */ lu(!1, !0)
}, cb = {
  get: /* @__PURE__ */ lu(!0, !1)
};
const ih = /* @__PURE__ */ new WeakMap(), oh = /* @__PURE__ */ new WeakMap(), sh = /* @__PURE__ */ new WeakMap(), ub = /* @__PURE__ */ new WeakMap();
function db(e) {
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
function fb(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : db(Ry(e));
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return /* @__PURE__ */ _r(e) ? e : cu(
    e,
    !1,
    nb,
    ab,
    ih
  );
}
// @__NO_SIDE_EFFECTS__
function pb(e) {
  return cu(
    e,
    !1,
    ib,
    lb,
    oh
  );
}
// @__NO_SIDE_EFFECTS__
function cc(e) {
  return cu(
    e,
    !0,
    rb,
    cb,
    sh
  );
}
function cu(e, t, n, r, i) {
  if (!_t(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = fb(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return /* @__PURE__ */ _r(e) ? /* @__PURE__ */ ri(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function uu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ft(t) : e;
}
function hb(e) {
  return !pt(e, "__v_skip") && Object.isExtensible(e) && Gp(e, "__v_skip", !0), e;
}
const Kn = (e) => _t(e) ? /* @__PURE__ */ Yi(e) : e, zi = (e) => _t(e) ? /* @__PURE__ */ cc(e) : e;
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return ah(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return ah(e, !0);
}
function ah(e, t) {
  return /* @__PURE__ */ Jt(e) ? e : new mb(e, t);
}
class mb {
  constructor(t, n) {
    this.dep = new au(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ft(t), this._value = n ? t : Kn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ In(t) || /* @__PURE__ */ _r(t);
    t = r ? t : /* @__PURE__ */ ft(t), er(t, n) && (this._rawValue = t, this._value = r ? t : Kn(t), this.dep.trigger());
  }
}
function Ze(e) {
  return /* @__PURE__ */ Jt(e) ? e.value : e;
}
const gb = {
  get: (e, t, n) => t === "__v_raw" ? e : Ze(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Jt(i) && !/* @__PURE__ */ Jt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function lh(e) {
  return /* @__PURE__ */ ri(e) ? e : new Proxy(e, gb);
}
class yb {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new au(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = To - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xt !== this)
      return qp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function bb(e, t, n = !1) {
  let r, i;
  return it(e) ? r = e : (r = e.get, i = e.set), new yb(r, i, n);
}
const bs = {}, Zs = /* @__PURE__ */ new WeakMap();
let Zr;
function vb(e, t = !1, n = Zr) {
  if (n) {
    let r = Zs.get(n);
    r || Zs.set(n, r = []), r.push(e);
  }
}
function Sb(e, t, n = wt) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n, c = (O) => i ? O : /* @__PURE__ */ In(O) || i === !1 || i === 0 ? hr(O, 1) : hr(O);
  let d, u, f, h, _ = !1, g = !1;
  if (/* @__PURE__ */ Jt(e) ? (u = () => e.value, _ = /* @__PURE__ */ In(e)) : /* @__PURE__ */ ri(e) ? (u = () => c(e), _ = !0) : Qe(e) ? (g = !0, _ = e.some((O) => /* @__PURE__ */ ri(O) || /* @__PURE__ */ In(O)), u = () => e.map((O) => {
    if (/* @__PURE__ */ Jt(O))
      return O.value;
    if (/* @__PURE__ */ ri(O))
      return c(O);
    if (it(O))
      return l ? l(O, 2) : O();
  })) : it(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      vr();
      try {
        f();
      } finally {
        Sr();
      }
    }
    const O = Zr;
    Zr = d;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      Zr = O;
    }
  } : u = nr, t && i) {
    const O = u, P = i === !0 ? 1 / 0 : i;
    u = () => hr(O(), P);
  }
  const v = Yy(), y = () => {
    d.stop(), v && v.active && eu(v.effects, d);
  };
  if (o && t) {
    const O = t;
    t = (...P) => {
      O(...P), y();
    };
  }
  let H = g ? new Array(e.length).fill(bs) : bs;
  const W = (O) => {
    if (!(!(d.flags & 1) || !d.dirty && !O))
      if (t) {
        const P = d.run();
        if (i || _ || (g ? P.some((R, Z) => er(R, H[Z])) : er(P, H))) {
          f && f();
          const R = Zr;
          Zr = d;
          try {
            const Z = [
              P,
              // pass undefined as the old value when it's changed for the first time
              H === bs ? void 0 : g && H[0] === bs ? [] : H,
              h
            ];
            H = P, l ? l(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Zr = R;
          }
        }
      } else
        d.run();
  };
  return a && a(W), d = new Bp(u), d.scheduler = s ? () => s(W, !1) : W, h = (O) => vb(O, !1, d), f = d.onStop = () => {
    const O = Zs.get(d);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const P of O) P();
      Zs.delete(d);
    }
  }, t ? r ? W(!0) : H = d.run() : s ? s(W.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function hr(e, t = 1 / 0, n) {
  if (t <= 0 || !_t(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Jt(e))
    hr(e.value, t, n);
  else if (Qe(e))
    for (let r = 0; r < e.length; r++)
      hr(e[r], t, n);
  else if ($p(e) || Oi(e))
    e.forEach((r) => {
      hr(r, t, n);
    });
  else if (Hp(e)) {
    for (const r in e)
      hr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && hr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ts(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Ha(i, t, n);
  }
}
function sr(e, t, n, r) {
  if (it(e)) {
    const i = ts(e, t, n, r);
    return i && zp(i) && i.catch((o) => {
      Ha(o, t, n);
    }), i;
  }
  if (Qe(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(sr(e[o], t, n, r));
    return i;
  }
}
function Ha(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || wt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
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
      vr(), ts(o, null, 10, [
        e,
        l,
        c
      ]), Sr();
      return;
    }
  }
  _b(e, n, i, r, s);
}
function _b(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const nn = [];
let Xn = -1;
const Fi = [];
let Cr = null, _i = 0;
const ch = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function Ga(e) {
  const t = Qs || ch;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wb(e) {
  let t = Xn + 1, n = nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = nn[r], o = Lo(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function du(e) {
  if (!(e.flags & 1)) {
    const t = Lo(e), n = nn[nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lo(n) ? nn.push(e) : nn.splice(wb(t), 0, e), e.flags |= 1, uh();
  }
}
function uh() {
  Qs || (Qs = ch.then(fh));
}
function kb(e) {
  Qe(e) ? Fi.push(...e) : Cr && e.id === -1 ? Cr.splice(_i + 1, 0, e) : e.flags & 1 || (Fi.push(e), e.flags |= 1), uh();
}
function Wd(e, t, n = Xn + 1) {
  for (; n < nn.length; n++) {
    const r = nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function dh(e) {
  if (Fi.length) {
    const t = [...new Set(Fi)].sort(
      (n, r) => Lo(n) - Lo(r)
    );
    if (Fi.length = 0, Cr) {
      Cr.push(...t);
      return;
    }
    for (Cr = t, _i = 0; _i < Cr.length; _i++) {
      const n = Cr[_i];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Cr = null, _i = 0;
  }
}
const Lo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fh(e) {
  try {
    for (Xn = 0; Xn < nn.length; Xn++) {
      const t = nn[Xn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ts(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xn < nn.length; Xn++) {
      const t = nn[Xn];
      t && (t.flags &= -2);
    }
    Xn = -1, nn.length = 0, dh(), Qs = null, (nn.length || Fi.length) && fh();
  }
}
let _n = null, ph = null;
function ea(e) {
  const t = _n;
  return _n = e, ph = e && e.type.__scopeId || null, t;
}
function hh(e, t = _n, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && rf(-1);
    const o = ea(t);
    let s;
    try {
      s = e(...i);
    } finally {
      ea(o), r._d && rf(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function br(e, t) {
  if (_n === null)
    return e;
  const n = Ya(_n), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = wt] = t[i];
    o && (it(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && hr(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Ur(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[r];
    l && (vr(), sr(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Sr());
  }
}
function xb(e, t) {
  if (Yt) {
    let n = Yt.provides;
    const r = Yt.parent && Yt.parent.provides;
    r === n && (n = Yt.provides = Object.create(r)), n[e] = t;
  }
}
function Ts(e, t, n = !1) {
  const r = wv();
  if (r || Ti) {
    let i = Ti ? Ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && it(t) ? t.call(r && r.proxy) : t;
  }
}
const Mb = /* @__PURE__ */ Symbol.for("v-scx"), Pb = () => Ts(Mb);
function ii(e, t, n) {
  return mh(e, t, n);
}
function mh(e, t, n = wt) {
  const { immediate: r, deep: i, flush: o, once: s } = n, a = Zt({}, n), l = t && r || !t && o !== "post";
  let c;
  if (Vo) {
    if (o === "sync") {
      const h = Pb();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = nr, h.resume = nr, h.pause = nr, h;
    }
  }
  const d = Yt;
  a.call = (h, _, g) => sr(h, d, _, g);
  let u = !1;
  o === "post" ? a.scheduler = (h) => {
    un(h, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (h, _) => {
    _ ? h() : du(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const f = Sb(e, t, a);
  return Vo && (c ? c.push(f) : l && f()), f;
}
function Nb(e, t, n) {
  const r = this.proxy, i = zt(e) ? e.includes(".") ? gh(r, e) : () => r[e] : e.bind(r, r);
  let o;
  it(t) ? o = t : (o = t.handler, n = t);
  const s = rs(this), a = mh(i, o.bind(r), n);
  return s(), a;
}
function gh(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ab = /* @__PURE__ */ Symbol("_vte"), Cb = (e) => e.__isTeleport, Ib = /* @__PURE__ */ Symbol("_leaveCb");
function fu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ud(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ta = /* @__PURE__ */ new WeakMap();
function _o(e, t, n, r, i = !1) {
  if (Qe(e)) {
    e.forEach(
      (g, v) => _o(
        g,
        t && (Qe(t) ? t[v] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (wo(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && _o(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ya(r.component) : r.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === wt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ ft(u), h = u === wt ? Vp : (g) => Ud(d, g) ? !1 : pt(f, g), _ = (g, v) => !(v && Ud(d, v));
  if (c != null && c !== l) {
    if (Bd(t), zt(c))
      d[c] = null, h(c) && (u[c] = null);
    else if (/* @__PURE__ */ Jt(c)) {
      const g = t;
      _(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (it(l))
    ts(l, a, 12, [s, d]);
  else {
    const g = zt(l), v = /* @__PURE__ */ Jt(l);
    if (g || v) {
      const y = () => {
        if (e.f) {
          const H = g ? h(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            Qe(H) && eu(H, o);
          else if (Qe(H))
            H.includes(o) || H.push(o);
          else if (g)
            d[l] = [o], h(l) && (u[l] = d[l]);
          else {
            const W = [o];
            _(l, e.k) && (l.value = W), e.k && (d[e.k] = W);
          }
        } else g ? (d[l] = s, h(l) && (u[l] = s)) : v && (_(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const H = () => {
          y(), ta.delete(e);
        };
        H.id = -1, ta.set(e, H), un(H, n);
      } else
        Bd(e), y();
    }
  }
}
function Bd(e) {
  const t = ta.get(e);
  t && (t.flags |= 8, ta.delete(e));
}
za().requestIdleCallback;
za().cancelIdleCallback;
const wo = (e) => !!e.type.__asyncLoader, bh = (e) => e.type.__isKeepAlive;
function Eb(e, t) {
  vh(e, "a", t);
}
function Ob(e, t) {
  vh(e, "da", t);
}
function vh(e, t, n = Yt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ka(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      bh(i.parent.vnode) && Fb(r, t, n, i), i = i.parent;
  }
}
function Fb(e, t, n, r) {
  const i = Ka(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Sh(() => {
    eu(r[t], i);
  }, n);
}
function Ka(e, t, n = Yt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      vr();
      const a = rs(n), l = sr(t, n, e, s);
      return a(), Sr(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const xr = (e) => (t, n = Yt) => {
  (!Vo || e === "sp") && Ka(e, (...r) => t(...r), n);
}, Tb = xr("bm"), Wa = xr("m"), Db = xr(
  "bu"
), Lb = xr("u"), ns = xr(
  "bum"
), Sh = xr("um"), Rb = xr(
  "sp"
), Vb = xr("rtg"), $b = xr("rtc");
function zb(e, t = Yt) {
  Ka("ec", e, t);
}
const jb = "components", _h = /* @__PURE__ */ Symbol.for("v-ndc");
function Hb(e) {
  return zt(e) ? Gb(jb, e, !1) || e : e || _h;
}
function Gb(e, t, n = !0, r = !1) {
  const i = _n || Yt;
  if (i) {
    const o = i.type;
    {
      const a = Nv(
        o,
        !1
      );
      if (a && (a === t || a === sn(t) || a === $a(sn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yd(i[e] || o[e], t) || // global registration
      Yd(i.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function Yd(e, t) {
  return e && (e[t] || e[sn(t)] || e[$a(sn(t))]);
}
function mt(e, t, n, r) {
  let i;
  const o = n, s = Qe(e);
  if (s || zt(e)) {
    const a = s && /* @__PURE__ */ ri(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ In(e), c = /* @__PURE__ */ _r(e), e = ja(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? zi(Kn(e[d])) : Kn(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (_t(e))
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
const uc = (e) => e ? Hh(e) ? Ya(e) : uc(e.parent) : null, ko = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Zt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => uc(e.parent),
    $root: (e) => uc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      du(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ga.bind(e.proxy)),
    $watch: (e) => Nb.bind(e)
  })
), yl = (e, t) => e !== wt && !e.__isScriptSetup && pt(e, t), Kb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const f = s[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (yl(r, t))
          return s[t] = 1, r[t];
        if (i !== wt && pt(i, t))
          return s[t] = 2, i[t];
        if (pt(o, t))
          return s[t] = 3, o[t];
        if (n !== wt && pt(n, t))
          return s[t] = 4, n[t];
        dc && (s[t] = 0);
      }
    }
    const c = ko[t];
    let d, u;
    if (c)
      return t === "$attrs" && Bt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== wt && pt(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      u = l.config.globalProperties, pt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return yl(i, t) ? (i[t] = n, !0) : r !== wt && pt(r, t) ? (r[t] = n, !0) : pt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(n[a] || e !== wt && a[0] !== "$" && pt(e, a) || yl(t, a) || pt(o, a) || pt(r, a) || pt(ko, a) || pt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qd(e) {
  return Qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let dc = !0;
function Wb(e) {
  const t = kh(e), n = e.proxy, r = e.ctx;
  dc = !1, t.beforeCreate && Xd(t.beforeCreate, e, "bc");
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
    updated: _,
    activated: g,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: H,
    destroyed: W,
    unmounted: O,
    render: P,
    renderTracked: R,
    renderTriggered: Z,
    errorCaptured: q,
    serverPrefetch: ae,
    // public API
    expose: Se,
    inheritAttrs: ge,
    // assets
    components: B,
    directives: _e,
    filters: pe
  } = t;
  if (c && Ub(c, r, null), s)
    for (const me in s) {
      const oe = s[me];
      it(oe) && (r[me] = oe.bind(n));
    }
  if (i) {
    const me = i.call(n, n);
    _t(me) && (e.data = /* @__PURE__ */ Yi(me));
  }
  if (dc = !0, o)
    for (const me in o) {
      const oe = o[me], C = it(oe) ? oe.bind(n, n) : it(oe.get) ? oe.get.bind(n, n) : nr, G = !it(oe) && it(oe.set) ? oe.set.bind(n) : nr, N = rt({
        get: C,
        set: G
      });
      Object.defineProperty(r, me, {
        enumerable: !0,
        configurable: !0,
        get: () => N.value,
        set: (ue) => N.value = ue
      });
    }
  if (a)
    for (const me in a)
      wh(a[me], r, n, me);
  if (l) {
    const me = it(l) ? l.call(n) : l;
    Reflect.ownKeys(me).forEach((oe) => {
      xb(oe, me[oe]);
    });
  }
  d && Xd(d, e, "c");
  function ee(me, oe) {
    Qe(oe) ? oe.forEach((C) => me(C.bind(n))) : oe && me(oe.bind(n));
  }
  if (ee(Tb, u), ee(Wa, f), ee(Db, h), ee(Lb, _), ee(Eb, g), ee(Ob, v), ee(zb, q), ee($b, R), ee(Vb, Z), ee(ns, H), ee(Sh, O), ee(Rb, ae), Qe(Se))
    if (Se.length) {
      const me = e.exposed || (e.exposed = {});
      Se.forEach((oe) => {
        Object.defineProperty(me, oe, {
          get: () => n[oe],
          set: (C) => n[oe] = C,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === nr && (e.render = P), ge != null && (e.inheritAttrs = ge), B && (e.components = B), _e && (e.directives = _e), ae && yh(e);
}
function Ub(e, t, n = nr) {
  Qe(e) && (e = fc(e));
  for (const r in e) {
    const i = e[r];
    let o;
    _t(i) ? "default" in i ? o = Ts(
      i.from || r,
      i.default,
      !0
    ) : o = Ts(i.from || r) : o = Ts(i), /* @__PURE__ */ Jt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function Xd(e, t, n) {
  sr(
    Qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wh(e, t, n, r) {
  let i = r.includes(".") ? gh(n, r) : () => n[r];
  if (zt(e)) {
    const o = t[e];
    it(o) && ii(i, o);
  } else if (it(e))
    ii(i, e.bind(n));
  else if (_t(e))
    if (Qe(e))
      e.forEach((o) => wh(o, t, n, r));
    else {
      const o = it(e.handler) ? e.handler.bind(n) : t[e.handler];
      it(o) && ii(i, o, e);
    }
}
function kh(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (c) => na(l, c, s, !0)
  ), na(l, t, s)), _t(t) && o.set(t, l), l;
}
function na(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && na(e, o, n, !0), i && i.forEach(
    (s) => na(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const a = Bb[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Bb = {
  data: Jd,
  props: Zd,
  emits: Zd,
  // objects
  methods: ao,
  computed: ao,
  // lifecycle
  beforeCreate: en,
  created: en,
  beforeMount: en,
  mounted: en,
  beforeUpdate: en,
  updated: en,
  beforeDestroy: en,
  beforeUnmount: en,
  destroyed: en,
  unmounted: en,
  activated: en,
  deactivated: en,
  errorCaptured: en,
  serverPrefetch: en,
  // assets
  components: ao,
  directives: ao,
  // watch
  watch: qb,
  // provide / inject
  provide: Jd,
  inject: Yb
};
function Jd(e, t) {
  return t ? e ? function() {
    return Zt(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yb(e, t) {
  return ao(fc(e), fc(t));
}
function fc(e) {
  if (Qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function en(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? Zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zd(e, t) {
  return e ? Qe(e) && Qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Zt(
    /* @__PURE__ */ Object.create(null),
    qd(e),
    qd(t ?? {})
  ) : t;
}
function qb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Zt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = en(e[r], t[r]);
  return n;
}
function xh() {
  return {
    app: null,
    config: {
      isNativeTag: Vp,
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
let Xb = 0;
function Jb(e, t) {
  return function(r, i = null) {
    it(r) || (r = Zt({}, r)), i != null && !_t(i) && (i = null);
    const o = xh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Xb++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Cv,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && it(d.install) ? (s.add(d), d.install(c, ...u)) : it(d) && (s.add(d), d(c, ...u))), c;
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
          const h = c._ceVNode || Ye(r, i);
          return h.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, d, f), l = !0, c._container = d, d.__vue_app__ = c, Ya(h.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (sr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Ti;
        Ti = c;
        try {
          return d();
        } finally {
          Ti = u;
        }
      }
    };
    return c;
  };
}
let Ti = null;
const Zb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${sn(t)}Modifiers`] || e[`${fi(t)}Modifiers`];
function Qb(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || wt;
  let i = n;
  const o = t.startsWith("update:"), s = o && Zb(r, t.slice(7));
  s && (s.trim && (i = n.map((d) => zt(d) ? d.trim() : d)), s.number && (i = n.map(nu)));
  let a, l = r[a = fl(t)] || // also try camelCase event handler (#2249)
  r[a = fl(sn(t))];
  !l && o && (l = r[a = fl(fi(t))]), l && sr(
    l,
    e,
    6,
    i
  );
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, sr(
      c,
      e,
      6,
      i
    );
  }
}
const ev = /* @__PURE__ */ new WeakMap();
function Mh(e, t, n = !1) {
  const r = n ? ev : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!it(e)) {
    const l = (c) => {
      const d = Mh(c, t, !0);
      d && (a = !0, Zt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (_t(e) && r.set(e, null), null) : (Qe(o) ? o.forEach((l) => s[l] = null) : Zt(s, o), _t(e) && r.set(e, s), s);
}
function Ua(e, t) {
  return !e || !La(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pt(e, t[0].toLowerCase() + t.slice(1)) || pt(e, fi(t)) || pt(e, t));
}
function Qd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
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
    ctx: _,
    inheritAttrs: g
  } = e, v = ea(e);
  let y, H;
  try {
    if (n.shapeFlag & 4) {
      const O = i || r, P = O;
      y = Zn(
        c.call(
          P,
          O,
          d,
          u,
          h,
          f,
          _
        )
      ), H = a;
    } else {
      const O = t;
      y = Zn(
        O.length > 1 ? O(
          u,
          { attrs: a, slots: s, emit: l }
        ) : O(
          u,
          null
        )
      ), H = t.props ? a : tv(a);
    }
  } catch (O) {
    xo.length = 0, Ha(O, e, 1), y = Ye(Dr);
  }
  let W = y;
  if (H && g !== !1) {
    const O = Object.keys(H), { shapeFlag: P } = W;
    O.length && P & 7 && (o && O.some(Ra) && (H = nv(
      H,
      o
    )), W = ji(W, H, !1, !0));
  }
  return n.dirs && (W = ji(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && fu(W, n.transition), y = W, ea(v), y;
}
const tv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || La(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ra(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function rv(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? ef(r, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Ph(s, r, f) && !Ua(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? ef(r, s, c) : !0 : !!s;
  return !1;
}
function ef(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (Ph(t, e, o) && !Ua(n, o))
      return !0;
  }
  return !1;
}
function Ph(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && _t(r) && _t(i) ? !ru(r, i) : r !== i;
}
function iv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Nh = {}, Ah = () => Object.create(Nh), Ch = (e) => Object.getPrototypeOf(e) === Nh;
function ov(e, t, n, r = !1) {
  const i = {}, o = Ah();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ih(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ pb(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function sv(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ ft(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (Ua(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (l)
          if (pt(o, f))
            h !== o[f] && (o[f] = h, c = !0);
          else {
            const _ = sn(f);
            i[_] = pc(
              l,
              a,
              _,
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
    Ih(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !pt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = fi(u)) === u || !pt(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = pc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !pt(t, u)) && (delete o[u], c = !0);
  }
  c && pr(e.attrs, "set", "");
}
function Ih(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (bo(l))
        continue;
      const c = t[l];
      let d;
      i && pt(i, d = sn(l)) ? !o || !o.includes(d) ? n[d] = c : (a || (a = {}))[d] = c : Ua(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ ft(n), c = a || wt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      n[u] = pc(
        i,
        l,
        u,
        c[u],
        e,
        !pt(c, u)
      );
    }
  }
  return s;
}
function pc(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const a = pt(s, "default");
    if (a && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && it(l)) {
        const { propsDefaults: c } = i;
        if (n in c)
          r = c[n];
        else {
          const d = rs(i);
          r = c[n] = l.call(
            null,
            t
          ), d();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === fi(n)) && (r = !0));
  }
  return r;
}
const av = /* @__PURE__ */ new WeakMap();
function Eh(e, t, n = !1) {
  const r = n ? av : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!it(e)) {
    const d = (u) => {
      l = !0;
      const [f, h] = Eh(u, t, !0);
      Zt(s, f), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return _t(e) && r.set(e, Ei), Ei;
  if (Qe(o))
    for (let d = 0; d < o.length; d++) {
      const u = sn(o[d]);
      tf(u) && (s[u] = wt);
    }
  else if (o)
    for (const d in o) {
      const u = sn(d);
      if (tf(u)) {
        const f = o[d], h = s[u] = Qe(f) || it(f) ? { type: f } : Zt({}, f), _ = h.type;
        let g = !1, v = !0;
        if (Qe(_))
          for (let y = 0; y < _.length; ++y) {
            const H = _[y], W = it(H) && H.name;
            if (W === "Boolean") {
              g = !0;
              break;
            } else W === "String" && (v = !1);
          }
        else
          g = it(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = v, (g || pt(h, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return _t(e) && r.set(e, c), c;
}
function tf(e) {
  return e[0] !== "$" && !bo(e);
}
const pu = (e) => e === "_" || e === "_ctx" || e === "$stable", hu = (e) => Qe(e) ? e.map(Zn) : [Zn(e)], lv = (e, t, n) => {
  if (t._n)
    return t;
  const r = hh((...i) => hu(t(...i)), n);
  return r._c = !1, r;
}, Oh = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (pu(i)) continue;
    const o = e[i];
    if (it(o))
      t[i] = lv(i, o, r);
    else if (o != null) {
      const s = hu(o);
      t[i] = () => s;
    }
  }
}, Fh = (e, t) => {
  const n = hu(t);
  e.slots.default = () => n;
}, Th = (e, t, n) => {
  for (const r in t)
    (n || !pu(r)) && (e[r] = t[r]);
}, cv = (e, t, n) => {
  const r = e.slots = Ah();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Th(r, t, n), n && Gp(r, "_", i, !0)) : Oh(t, r);
  } else t && Fh(e, t);
}, uv = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = wt;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : Th(i, t, n) : (o = !t.$stable, Oh(t, i)), s = t;
  } else t && (Fh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !pu(a) && s[a] == null && delete i[a];
}, un = mv;
function dv(e) {
  return fv(e);
}
function fv(e, t) {
  const n = za();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: h = nr,
    insertStaticContent: _
  } = e, g = (p, m, x, I = null, $ = null, Y = null, se = void 0, V = null, ne = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !Qi(p, m) && (I = le(p), ue(p, $, Y, !0), p = null), m.patchFlag === -2 && (ne = !1, m.dynamicChildren = null);
    const { type: k, ref: U, shapeFlag: ie } = m;
    switch (k) {
      case Ba:
        v(p, m, x, I);
        break;
      case Dr:
        y(p, m, x, I);
        break;
      case vl:
        p == null && H(m, x, I, se);
        break;
      case Xe:
        B(
          p,
          m,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne
        );
        break;
      default:
        ie & 1 ? P(
          p,
          m,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne
        ) : ie & 6 ? _e(
          p,
          m,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne
        ) : (ie & 64 || ie & 128) && k.process(
          p,
          m,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne,
          b
        );
    }
    U != null && $ ? _o(U, p && p.ref, Y, m || p, !m) : U == null && p && p.ref != null && _o(p.ref, null, Y, p, !0);
  }, v = (p, m, x, I) => {
    if (p == null)
      r(
        m.el = a(m.children),
        x,
        I
      );
    else {
      const $ = m.el = p.el;
      m.children !== p.children && c($, m.children);
    }
  }, y = (p, m, x, I) => {
    p == null ? r(
      m.el = l(m.children || ""),
      x,
      I
    ) : m.el = p.el;
  }, H = (p, m, x, I) => {
    [p.el, p.anchor] = _(
      p.children,
      m,
      x,
      I,
      p.el,
      p.anchor
    );
  }, W = ({ el: p, anchor: m }, x, I) => {
    let $;
    for (; p && p !== m; )
      $ = f(p), r(p, x, I), p = $;
    r(m, x, I);
  }, O = ({ el: p, anchor: m }) => {
    let x;
    for (; p && p !== m; )
      x = f(p), i(p), p = x;
    i(m);
  }, P = (p, m, x, I, $, Y, se, V, ne) => {
    if (m.type === "svg" ? se = "svg" : m.type === "math" && (se = "mathml"), p == null)
      R(
        m,
        x,
        I,
        $,
        Y,
        se,
        V,
        ne
      );
    else {
      const k = p.el && p.el._isVueCE ? p.el : null;
      try {
        k && k._beginPatch(), ae(
          p,
          m,
          $,
          Y,
          se,
          V,
          ne
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, R = (p, m, x, I, $, Y, se, V) => {
    let ne, k;
    const { props: U, shapeFlag: ie, transition: ke, dirs: Me } = p;
    if (ne = p.el = s(
      p.type,
      Y,
      U && U.is,
      U
    ), ie & 8 ? d(ne, p.children) : ie & 16 && q(
      p.children,
      ne,
      null,
      I,
      $,
      bl(p, Y),
      se,
      V
    ), Me && Ur(p, null, I, "created"), Z(ne, p, p.scopeId, se, I), U) {
      for (const xe in U)
        xe !== "value" && !bo(xe) && o(ne, xe, null, U[xe], Y, I);
      "value" in U && o(ne, "value", null, U.value, Y), (k = U.onVnodeBeforeMount) && Yn(k, I, p);
    }
    Me && Ur(p, null, I, "beforeMount");
    const Ae = pv($, ke);
    Ae && ke.beforeEnter(ne), r(ne, m, x), ((k = U && U.onVnodeMounted) || Ae || Me) && un(() => {
      try {
        k && Yn(k, I, p), Ae && ke.enter(ne), Me && Ur(p, null, I, "mounted");
      } finally {
      }
    }, $);
  }, Z = (p, m, x, I, $) => {
    if (x && h(p, x), I)
      for (let Y = 0; Y < I.length; Y++)
        h(p, I[Y]);
    if ($) {
      let Y = $.subTree;
      if (m === Y || Vh(Y.type) && (Y.ssContent === m || Y.ssFallback === m)) {
        const se = $.vnode;
        Z(
          p,
          se,
          se.scopeId,
          se.slotScopeIds,
          $.parent
        );
      }
    }
  }, q = (p, m, x, I, $, Y, se, V, ne = 0) => {
    for (let k = ne; k < p.length; k++) {
      const U = p[k] = V ? ur(p[k]) : Zn(p[k]);
      g(
        null,
        U,
        m,
        x,
        I,
        $,
        Y,
        se,
        V
      );
    }
  }, ae = (p, m, x, I, $, Y, se) => {
    const V = m.el = p.el;
    let { patchFlag: ne, dynamicChildren: k, dirs: U } = m;
    ne |= p.patchFlag & 16;
    const ie = p.props || wt, ke = m.props || wt;
    let Me;
    if (x && Br(x, !1), (Me = ke.onVnodeBeforeUpdate) && Yn(Me, x, m, p), U && Ur(m, p, x, "beforeUpdate"), x && Br(x, !0), (ie.innerHTML && ke.innerHTML == null || ie.textContent && ke.textContent == null) && d(V, ""), k ? Se(
      p.dynamicChildren,
      k,
      V,
      x,
      I,
      bl(m, $),
      Y
    ) : se || oe(
      p,
      m,
      V,
      null,
      x,
      I,
      bl(m, $),
      Y,
      !1
    ), ne > 0) {
      if (ne & 16)
        ge(V, ie, ke, x, $);
      else if (ne & 2 && ie.class !== ke.class && o(V, "class", null, ke.class, $), ne & 4 && o(V, "style", ie.style, ke.style, $), ne & 8) {
        const Ae = m.dynamicProps;
        for (let xe = 0; xe < Ae.length; xe++) {
          const ve = Ae[xe], Q = ie[ve], T = ke[ve];
          (T !== Q || ve === "value") && o(V, ve, Q, T, $, x);
        }
      }
      ne & 1 && p.children !== m.children && d(V, m.children);
    } else !se && k == null && ge(V, ie, ke, x, $);
    ((Me = ke.onVnodeUpdated) || U) && un(() => {
      Me && Yn(Me, x, m, p), U && Ur(m, p, x, "updated");
    }, I);
  }, Se = (p, m, x, I, $, Y, se) => {
    for (let V = 0; V < m.length; V++) {
      const ne = p[V], k = m[V], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qi(ne, k) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? u(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      g(
        ne,
        k,
        U,
        null,
        I,
        $,
        Y,
        se,
        !0
      );
    }
  }, ge = (p, m, x, I, $) => {
    if (m !== x) {
      if (m !== wt)
        for (const Y in m)
          !bo(Y) && !(Y in x) && o(
            p,
            Y,
            m[Y],
            null,
            $,
            I
          );
      for (const Y in x) {
        if (bo(Y)) continue;
        const se = x[Y], V = m[Y];
        se !== V && Y !== "value" && o(p, Y, V, se, $, I);
      }
      "value" in x && o(p, "value", m.value, x.value, $);
    }
  }, B = (p, m, x, I, $, Y, se, V, ne) => {
    const k = m.el = p ? p.el : a(""), U = m.anchor = p ? p.anchor : a("");
    let { patchFlag: ie, dynamicChildren: ke, slotScopeIds: Me } = m;
    Me && (V = V ? V.concat(Me) : Me), p == null ? (r(k, x, I), r(U, x, I), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      x,
      U,
      $,
      Y,
      se,
      V,
      ne
    )) : ie > 0 && ie & 64 && ke && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === ke.length ? (Se(
      p.dynamicChildren,
      ke,
      x,
      $,
      Y,
      se,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || $ && m === $.subTree) && Dh(
      p,
      m,
      !0
      /* shallow */
    )) : oe(
      p,
      m,
      x,
      U,
      $,
      Y,
      se,
      V,
      ne
    );
  }, _e = (p, m, x, I, $, Y, se, V, ne) => {
    m.slotScopeIds = V, p == null ? m.shapeFlag & 512 ? $.ctx.activate(
      m,
      x,
      I,
      se,
      ne
    ) : pe(
      m,
      x,
      I,
      $,
      Y,
      se,
      ne
    ) : fe(p, m, ne);
  }, pe = (p, m, x, I, $, Y, se) => {
    const V = p.component = _v(
      p,
      I,
      $
    );
    if (bh(p) && (V.ctx.renderer = b), kv(V, !1, se), V.asyncDep) {
      if ($ && $.registerDep(V, ee, se), !p.el) {
        const ne = V.subTree = Ye(Dr);
        y(null, ne, m, x), p.placeholder = ne.el;
      }
    } else
      ee(
        V,
        p,
        m,
        x,
        $,
        Y,
        se
      );
  }, fe = (p, m, x) => {
    const I = m.component = p.component;
    if (rv(p, m, x))
      if (I.asyncDep && !I.asyncResolved) {
        me(I, m, x);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = p.el, I.vnode = m;
  }, ee = (p, m, x, I, $, Y, se) => {
    const V = () => {
      if (p.isMounted) {
        let { next: ie, bu: ke, u: Me, parent: Ae, vnode: xe } = p;
        {
          const J = Lh(p);
          if (J) {
            ie && (ie.el = xe.el, me(p, ie, se)), J.asyncDep.then(() => {
              un(() => {
                p.isUnmounted || k();
              }, $);
            });
            return;
          }
        }
        let ve = ie, Q;
        Br(p, !1), ie ? (ie.el = xe.el, me(p, ie, se)) : ie = xe, ke && Fs(ke), (Q = ie.props && ie.props.onVnodeBeforeUpdate) && Yn(Q, Ae, ie, xe), Br(p, !0);
        const T = Qd(p), F = p.subTree;
        p.subTree = T, g(
          F,
          T,
          // parent may have changed if it's in a teleport
          u(F.el),
          // anchor may have changed if it's in a fragment
          le(F),
          p,
          $,
          Y
        ), ie.el = T.el, ve === null && iv(p, T.el), Me && un(Me, $), (Q = ie.props && ie.props.onVnodeUpdated) && un(
          () => Yn(Q, Ae, ie, xe),
          $
        );
      } else {
        let ie;
        const { el: ke, props: Me } = m, { bm: Ae, m: xe, parent: ve, root: Q, type: T } = p, F = wo(m);
        Br(p, !1), Ae && Fs(Ae), !F && (ie = Me && Me.onVnodeBeforeMount) && Yn(ie, ve, m), Br(p, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            T,
            p.parent ? p.parent.type : void 0
          );
          const J = p.subTree = Qd(p);
          g(
            null,
            J,
            x,
            I,
            p,
            $,
            Y
          ), m.el = J.el;
        }
        if (xe && un(xe, $), !F && (ie = Me && Me.onVnodeMounted)) {
          const J = m;
          un(
            () => Yn(ie, ve, J),
            $
          );
        }
        (m.shapeFlag & 256 || ve && wo(ve.vnode) && ve.vnode.shapeFlag & 256) && p.a && un(p.a, $), p.isMounted = !0, m = x = I = null;
      }
    };
    p.scope.on();
    const ne = p.effect = new Bp(V);
    p.scope.off();
    const k = p.update = ne.run.bind(ne), U = p.job = ne.runIfDirty.bind(ne);
    U.i = p, U.id = p.uid, ne.scheduler = () => du(U), Br(p, !0), k();
  }, me = (p, m, x) => {
    m.component = p;
    const I = p.vnode.props;
    p.vnode = m, p.next = null, sv(p, m.props, I, x), uv(p, m.children, x), vr(), Wd(p), Sr();
  }, oe = (p, m, x, I, $, Y, se, V, ne = !1) => {
    const k = p && p.children, U = p ? p.shapeFlag : 0, ie = m.children, { patchFlag: ke, shapeFlag: Me } = m;
    if (ke > 0) {
      if (ke & 128) {
        G(
          k,
          ie,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne
        );
        return;
      } else if (ke & 256) {
        C(
          k,
          ie,
          x,
          I,
          $,
          Y,
          se,
          V,
          ne
        );
        return;
      }
    }
    Me & 8 ? (U & 16 && M(k, $, Y), ie !== k && d(x, ie)) : U & 16 ? Me & 16 ? G(
      k,
      ie,
      x,
      I,
      $,
      Y,
      se,
      V,
      ne
    ) : M(k, $, Y, !0) : (U & 8 && d(x, ""), Me & 16 && q(
      ie,
      x,
      I,
      $,
      Y,
      se,
      V,
      ne
    ));
  }, C = (p, m, x, I, $, Y, se, V, ne) => {
    p = p || Ei, m = m || Ei;
    const k = p.length, U = m.length, ie = Math.min(k, U);
    let ke;
    for (ke = 0; ke < ie; ke++) {
      const Me = m[ke] = ne ? ur(m[ke]) : Zn(m[ke]);
      g(
        p[ke],
        Me,
        x,
        null,
        $,
        Y,
        se,
        V,
        ne
      );
    }
    k > U ? M(
      p,
      $,
      Y,
      !0,
      !1,
      ie
    ) : q(
      m,
      x,
      I,
      $,
      Y,
      se,
      V,
      ne,
      ie
    );
  }, G = (p, m, x, I, $, Y, se, V, ne) => {
    let k = 0;
    const U = m.length;
    let ie = p.length - 1, ke = U - 1;
    for (; k <= ie && k <= ke; ) {
      const Me = p[k], Ae = m[k] = ne ? ur(m[k]) : Zn(m[k]);
      if (Qi(Me, Ae))
        g(
          Me,
          Ae,
          x,
          null,
          $,
          Y,
          se,
          V,
          ne
        );
      else
        break;
      k++;
    }
    for (; k <= ie && k <= ke; ) {
      const Me = p[ie], Ae = m[ke] = ne ? ur(m[ke]) : Zn(m[ke]);
      if (Qi(Me, Ae))
        g(
          Me,
          Ae,
          x,
          null,
          $,
          Y,
          se,
          V,
          ne
        );
      else
        break;
      ie--, ke--;
    }
    if (k > ie) {
      if (k <= ke) {
        const Me = ke + 1, Ae = Me < U ? m[Me].el : I;
        for (; k <= ke; )
          g(
            null,
            m[k] = ne ? ur(m[k]) : Zn(m[k]),
            x,
            Ae,
            $,
            Y,
            se,
            V,
            ne
          ), k++;
      }
    } else if (k > ke)
      for (; k <= ie; )
        ue(p[k], $, Y, !0), k++;
    else {
      const Me = k, Ae = k, xe = /* @__PURE__ */ new Map();
      for (k = Ae; k <= ke; k++) {
        const j = m[k] = ne ? ur(m[k]) : Zn(m[k]);
        j.key != null && xe.set(j.key, k);
      }
      let ve, Q = 0;
      const T = ke - Ae + 1;
      let F = !1, J = 0;
      const L = new Array(T);
      for (k = 0; k < T; k++) L[k] = 0;
      for (k = Me; k <= ie; k++) {
        const j = p[k];
        if (Q >= T) {
          ue(j, $, Y, !0);
          continue;
        }
        let S;
        if (j.key != null)
          S = xe.get(j.key);
        else
          for (ve = Ae; ve <= ke; ve++)
            if (L[ve - Ae] === 0 && Qi(j, m[ve])) {
              S = ve;
              break;
            }
        S === void 0 ? ue(j, $, Y, !0) : (L[S - Ae] = k + 1, S >= J ? J = S : F = !0, g(
          j,
          m[S],
          x,
          null,
          $,
          Y,
          se,
          V,
          ne
        ), Q++);
      }
      const X = F ? hv(L) : Ei;
      for (ve = X.length - 1, k = T - 1; k >= 0; k--) {
        const j = Ae + k, S = m[j], z = m[j + 1], re = j + 1 < U ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          z.el || Rh(z)
        ) : I;
        L[k] === 0 ? g(
          null,
          S,
          x,
          re,
          $,
          Y,
          se,
          V,
          ne
        ) : F && (ve < 0 || k !== X[ve] ? N(S, x, re, 2) : ve--);
      }
    }
  }, N = (p, m, x, I, $ = null) => {
    const { el: Y, type: se, transition: V, children: ne, shapeFlag: k } = p;
    if (k & 6) {
      N(p.component.subTree, m, x, I);
      return;
    }
    if (k & 128) {
      p.suspense.move(m, x, I);
      return;
    }
    if (k & 64) {
      se.move(p, m, x, b);
      return;
    }
    if (se === Xe) {
      r(Y, m, x);
      for (let ie = 0; ie < ne.length; ie++)
        N(ne[ie], m, x, I);
      r(p.anchor, m, x);
      return;
    }
    if (se === vl) {
      W(p, m, x);
      return;
    }
    if (I !== 2 && k & 1 && V)
      if (I === 0)
        V.beforeEnter(Y), r(Y, m, x), un(() => V.enter(Y), $);
      else {
        const { leave: ie, delayLeave: ke, afterLeave: Me } = V, Ae = () => {
          p.ctx.isUnmounted ? i(Y) : r(Y, m, x);
        }, xe = () => {
          Y._isLeaving && Y[Ib](
            !0
            /* cancelled */
          ), ie(Y, () => {
            Ae(), Me && Me();
          });
        };
        ke ? ke(Y, Ae, xe) : xe();
      }
    else
      r(Y, m, x);
  }, ue = (p, m, x, I = !1, $ = !1) => {
    const {
      type: Y,
      props: se,
      ref: V,
      children: ne,
      dynamicChildren: k,
      shapeFlag: U,
      patchFlag: ie,
      dirs: ke,
      cacheIndex: Me,
      memo: Ae
    } = p;
    if (ie === -2 && ($ = !1), V != null && (vr(), _o(V, null, x, p, !0), Sr()), Me != null && (m.renderCache[Me] = void 0), U & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const xe = U & 1 && ke, ve = !wo(p);
    let Q;
    if (ve && (Q = se && se.onVnodeBeforeUnmount) && Yn(Q, m, p), U & 6)
      w(p.component, x, I);
    else {
      if (U & 128) {
        p.suspense.unmount(x, I);
        return;
      }
      xe && Ur(p, null, m, "beforeUnmount"), U & 64 ? p.type.remove(
        p,
        m,
        x,
        b,
        I
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== Xe || ie > 0 && ie & 64) ? M(
        k,
        m,
        x,
        !1,
        !0
      ) : (Y === Xe && ie & 384 || !$ && U & 16) && M(ne, m, x), I && A(p);
    }
    const T = Ae != null && Me == null;
    (ve && (Q = se && se.onVnodeUnmounted) || xe || T) && un(() => {
      Q && Yn(Q, m, p), xe && Ur(p, null, m, "unmounted"), T && (p.el = null);
    }, x);
  }, A = (p) => {
    const { type: m, el: x, anchor: I, transition: $ } = p;
    if (m === Xe) {
      E(x, I);
      return;
    }
    if (m === vl) {
      O(p);
      return;
    }
    const Y = () => {
      i(x), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (p.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: se, delayLeave: V } = $, ne = () => se(x, Y);
      V ? V(p.el, Y, ne) : ne();
    } else
      Y();
  }, E = (p, m) => {
    let x;
    for (; p !== m; )
      x = f(p), i(p), p = x;
    i(m);
  }, w = (p, m, x) => {
    const { bum: I, scope: $, job: Y, subTree: se, um: V, m: ne, a: k } = p;
    nf(ne), nf(k), I && Fs(I), $.stop(), Y && (Y.flags |= 8, ue(se, p, m, x)), V && un(V, m), un(() => {
      p.isUnmounted = !0;
    }, m);
  }, M = (p, m, x, I = !1, $ = !1, Y = 0) => {
    for (let se = Y; se < p.length; se++)
      ue(p[se], m, x, I, $);
  }, le = (p) => {
    if (p.shapeFlag & 6)
      return le(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = f(p.anchor || p.el), x = m && m[Ab];
    return x ? f(x) : m;
  };
  let ye = !1;
  const D = (p, m, x) => {
    let I;
    p == null ? m._vnode && (ue(m._vnode, null, null, !0), I = m._vnode.component) : g(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      x
    ), m._vnode = p, ye || (ye = !0, Wd(I), dh(), ye = !1);
  }, b = {
    p: g,
    um: ue,
    m: N,
    r: A,
    mt: pe,
    mc: q,
    pc: oe,
    pbc: Se,
    n: le,
    o: e
  };
  return {
    render: D,
    hydrate: void 0,
    createApp: Jb(D)
  };
}
function bl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Br({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function pv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dh(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Qe(r) && Qe(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ur(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && Dh(s, a)), a.type === Ba && (a.patchFlag === -1 && (a = i[o] = ur(a)), a.el = s.el), a.type === Dr && !a.el && (a.el = s.el);
    }
}
function hv(e) {
  const t = e.slice(), n = [0];
  let r, i, o, s, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        a = o + s >> 1, e[n[a]] < c ? o = a + 1 : s = a;
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function Lh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lh(t);
}
function nf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rh(t.subTree) : null;
}
const Vh = (e) => e.__isSuspense;
function mv(e, t) {
  t && t.pendingBranch ? Qe(e) ? t.effects.push(...e) : t.effects.push(e) : kb(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), Ba = /* @__PURE__ */ Symbol.for("v-txt"), Dr = /* @__PURE__ */ Symbol.for("v-cmt"), vl = /* @__PURE__ */ Symbol.for("v-stc"), xo = [];
let wn = null;
function Fe(e = !1) {
  xo.push(wn = e ? null : []);
}
function gv() {
  xo.pop(), wn = xo[xo.length - 1] || null;
}
let Ro = 1;
function rf(e, t = !1) {
  Ro += e, e < 0 && wn && t && (wn.hasOnce = !0);
}
function $h(e) {
  return e.dynamicChildren = Ro > 0 ? wn || Ei : null, gv(), Ro > 0 && wn && wn.push(e), e;
}
function Le(e, t, n, r, i, o) {
  return $h(
    Ne(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function gn(e, t, n, r, i) {
  return $h(
    Ye(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function zh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jh = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? zt(e) || /* @__PURE__ */ Jt(e) || it(e) ? { i: _n, r: e, k: t, f: !!n } : e : null);
function Ne(e, t = null, n = null, r = 0, i = null, o = e === Xe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jh(t),
    ref: t && Ds(t),
    scopeId: ph,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: _n
  };
  return a ? (mu(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= zt(n) ? 8 : 16), Ro > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  wn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && wn.push(l), l;
}
const Ye = yv;
function yv(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === _h) && (e = Dr), zh(e)) {
    const a = ji(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mu(a, n), Ro > 0 && !o && wn && (a.shapeFlag & 6 ? wn[wn.indexOf(e)] = a : wn.push(a)), a.patchFlag = -2, a;
  }
  if (Av(e) && (e = e.__vccOpts), t) {
    t = bv(t);
    let { class: a, style: l } = t;
    a && !zt(a) && (t.class = at(a)), _t(l) && (/* @__PURE__ */ uu(l) && !Qe(l) && (l = Zt({}, l)), t.style = vt(l));
  }
  const s = zt(e) ? 1 : Vh(e) ? 128 : Cb(e) ? 64 : _t(e) ? 4 : it(e) ? 2 : 0;
  return Ne(
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    !0
  );
}
function bv(e) {
  return e ? /* @__PURE__ */ uu(e) || Ch(e) ? Zt({}, e) : e : null;
}
function ji(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? dr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && jh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Qe(o) ? o.concat(Ds(t)) : [o, Ds(t)] : Ds(t)
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
    patchFlag: t && e.type !== Xe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ji(e.ssContent),
    ssFallback: e.ssFallback && ji(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && fu(
    d,
    l.clone(d)
  ), d;
}
function lo(e = " ", t = 0) {
  return Ye(Ba, null, e, t);
}
function nt(e = "", t = !1) {
  return t ? (Fe(), gn(Dr, null, e)) : Ye(Dr, null, e);
}
function Zn(e) {
  return e == null || typeof e == "boolean" ? Ye(Dr) : Qe(e) ? Ye(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zh(e) ? ur(e) : Ye(Ba, null, String(e));
}
function ur(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ji(e);
}
function mu(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), mu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ch(t) ? t._ctx = _n : i === 3 && _n && (_n.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else it(t) ? (t = { default: t, _ctx: _n }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (i === "style")
        t.style = vt([t.style, r.style]);
      else if (La(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(Qe(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ra(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Yn(e, t, n, r = null) {
  sr(e, t, 7, [
    n,
    r
  ]);
}
const vv = xh();
let Sv = 0;
function _v(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || vv, o = {
    uid: Sv++,
    vnode: e,
    type: r,
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
    scope: new By(
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
    propsOptions: Eh(r, i),
    emitsOptions: Mh(r, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Qb.bind(null, o), e.ce && e.ce(o), o;
}
let Yt = null;
const wv = () => Yt || _n;
let ra, hc;
{
  const e = za(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  ra = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Yt = n
  ), hc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Vo = n
  );
}
const rs = (e) => {
  const t = Yt;
  return ra(e), e.scope.on(), () => {
    e.scope.off(), ra(t);
  };
}, of = () => {
  Yt && Yt.scope.off(), ra(null);
};
function Hh(e) {
  return e.vnode.shapeFlag & 4;
}
let Vo = !1;
function kv(e, t = !1, n = !1) {
  t && hc(t);
  const { props: r, children: i } = e.vnode, o = Hh(e);
  ov(e, r, o, t), cv(e, i, n || t);
  const s = o ? xv(e, t) : void 0;
  return t && hc(!1), s;
}
function xv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kb);
  const { setup: r } = n;
  if (r) {
    vr();
    const i = e.setupContext = r.length > 1 ? Pv(e) : null, o = rs(e), s = ts(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = zp(s);
    if (Sr(), o(), (a || e.sp) && !wo(e) && yh(e), a) {
      if (s.then(of, of), t)
        return s.then((l) => {
          sf(e, l);
        }).catch((l) => {
          Ha(l, e, 0);
        });
      e.asyncDep = s;
    } else
      sf(e, s);
  } else
    Gh(e);
}
function sf(e, t, n) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _t(t) && (e.setupState = lh(t)), Gh(e);
}
function Gh(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || nr);
  {
    const i = rs(e);
    vr();
    try {
      Wb(e);
    } finally {
      Sr(), i();
    }
  }
}
const Mv = {
  get(e, t) {
    return Bt(e, "get", ""), e[t];
  }
};
function Pv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lh(hb(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ko)
        return ko[n](e);
    },
    has(t, n) {
      return n in t || n in ko;
    }
  })) : e.proxy;
}
function Nv(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Av(e) {
  return it(e) && "__vccOpts" in e;
}
const rt = (e, t) => /* @__PURE__ */ bb(e, t, Vo), Cv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mc;
const af = typeof window < "u" && window.trustedTypes;
if (af)
  try {
    mc = /* @__PURE__ */ af.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Kh = mc ? (e) => mc.createHTML(e) : (e) => e, Iv = "http://www.w3.org/2000/svg", Ev = "http://www.w3.org/1998/Math/MathML", cr = typeof document < "u" ? document : null, lf = cr && /* @__PURE__ */ cr.createElement("template"), Ov = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? cr.createElementNS(Iv, e) : t === "mathml" ? cr.createElementNS(Ev, e) : n ? cr.createElement(e, { is: n }) : cr.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => cr.createTextNode(e),
  createComment: (e) => cr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => cr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      lf.innerHTML = Kh(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = lf.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Fv = /* @__PURE__ */ Symbol("_vtc");
function Tv(e, t, n) {
  const r = e[Fv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ia = /* @__PURE__ */ Symbol("_vod"), Wh = /* @__PURE__ */ Symbol("_vsh"), ci = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ia] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : eo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), eo(e, !0), r.enter(e)) : r.leave(e, () => {
      eo(e, !1);
    }) : eo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    eo(e, t);
  }
};
function eo(e, t) {
  e.style.display = t ? e[ia] : "none", e[Wh] = !t;
}
const Dv = /* @__PURE__ */ Symbol(""), Lv = /(?:^|;)\s*display\s*:/;
function Rv(e, t, n) {
  const r = e.style, i = zt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (zt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Ls(r, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Ls(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Ls(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Dv];
      s && (n += ";" + s), r.cssText = n, o = Lv.test(n);
    }
  } else t && e.removeAttribute("style");
  ia in e && (e[ia] = o ? r.display : "", e[Wh] && (r.display = "none"));
}
const cf = /\s*!important$/;
function Ls(e, t, n) {
  if (Qe(n))
    n.forEach((r) => Ls(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Vv(e, t);
    cf.test(n) ? e.setProperty(
      fi(r),
      n.replace(cf, ""),
      "important"
    ) : e[r] = n;
  }
}
const uf = ["Webkit", "Moz", "ms"], Sl = {};
function Vv(e, t) {
  const n = Sl[t];
  if (n)
    return n;
  let r = sn(t);
  if (r !== "filter" && r in e)
    return Sl[t] = r;
  r = $a(r);
  for (let i = 0; i < uf.length; i++) {
    const o = uf[i] + r;
    if (o in e)
      return Sl[t] = o;
  }
  return t;
}
const df = "http://www.w3.org/1999/xlink";
function ff(e, t, n, r, i, o = Wy(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(df, t.slice(6, t.length)) : e.setAttributeNS(df, t, n) : n == null || o && !Kp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : or(n) ? String(n) : n
  );
}
function pf(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Kh(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Kp(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function wi(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function $v(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const hf = /* @__PURE__ */ Symbol("_vei");
function zv(e, t, n, r, i = null) {
  const o = e[hf] || (e[hf] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [a, l] = jv(t);
    if (r) {
      const c = o[t] = Kv(
        r,
        i
      );
      wi(e, a, c, l);
    } else s && ($v(e, a, s, l), o[t] = void 0);
  }
}
const mf = /(?:Once|Passive|Capture)$/;
function jv(e) {
  let t;
  if (mf.test(e)) {
    t = {};
    let r;
    for (; r = e.match(mf); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : fi(e.slice(2)), t];
}
let _l = 0;
const Hv = /* @__PURE__ */ Promise.resolve(), Gv = () => _l || (Hv.then(() => _l = 0), _l = Date.now());
function Kv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    sr(
      Wv(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Gv(), n;
}
function Wv(e, t) {
  if (Qe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const gf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Uv = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? Tv(e, r, s) : t === "style" ? Rv(e, n, r) : La(t) ? Ra(t) || zv(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bv(e, t, r, s)) ? (pf(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !zt(r))) ? pf(e, sn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ff(e, t, r, s));
};
function Bv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gf(t) && it(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gf(t) && zt(n) ? !1 : t in e;
}
function Yv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = sn(t);
  return Array.isArray(n) ? n.some((i) => sn(i) === r) : Object.keys(n).some((i) => sn(i) === r);
}
const yf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Qe(t) ? (n) => Fs(t, n) : t;
};
function qv(e) {
  e.target.composing = !0;
}
function bf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const wl = /* @__PURE__ */ Symbol("_assign");
function vf(e, t, n) {
  return t && (e = e.trim()), n && (e = nu(e)), e;
}
const Sf = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[wl] = yf(i);
    const o = r || i.props && i.props.type === "number";
    wi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[wl](vf(e.value, n, o));
    }), (n || o) && wi(e, "change", () => {
      e.value = vf(e.value, n, o);
    }), t || (wi(e, "compositionstart", qv), wi(e, "compositionend", bf), wi(e, "change", bf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[wl] = yf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? nu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, Xv = ["ctrl", "shift", "alt", "meta"], Jv = {
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
  exact: (e, t) => Xv.some((n) => e[`${n}Key`] && !t.includes(n))
}, ht = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Jv[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Zv = /* @__PURE__ */ Zt({ patchProp: Uv }, Ov);
let _f;
function Qv() {
  return _f || (_f = dv(Zv));
}
const gu = ((...e) => {
  const t = Qv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = t1(r);
    if (!i) return;
    const o = t._component;
    !it(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, e1(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function e1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function t1(e) {
  return zt(e) ? document.querySelector(e) : e;
}
function Te(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ft(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function yu(e, t) {
  let n = Ft(t) - Ft(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const gc = 3;
function to(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function oa(e, t = 0) {
  const n = to(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = to(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = to(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = to(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(to(t) || 0);
}
function Uh(e) {
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
const wf = Math.PI / 180, kf = 0.12, n1 = gc, r1 = 35, i1 = 140, co = 100, o1 = 20, xf = 0.8;
function s1(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Te(Number(e || co), 1, 179) * wf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / wf;
}
function bu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: co })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(H, W = null) {
    a && a(H, W);
  }
  function d(H, W, O = null, P = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(H || 0), l.drag.lastY = Number(W || 0), l.drag.lastTs = Number(P || performance.now()), l.drag.pointerId = O, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: O }), !0;
  }
  function u(H, W, O = "pano", P = performance.now()) {
    if (!l.drag.active) return !1;
    const R = Number(P || performance.now()), Z = Number(H), q = Number(W), ae = Z - l.drag.lastX, Se = q - l.drag.lastY;
    l.drag.lastX = Z, l.drag.lastY = q, l.drag.lastTs = R;
    const ge = r() || { x: 1, y: 1 }, B = Number(ge.x || 1), _e = Number(ge.y || 1), pe = { ...t() };
    let fe = 0, ee = 0;
    if (O === "unwrap") {
      const oe = i() || { w: 1, h: 1 }, C = Math.max(1, Number(oe.w || 1)), G = Math.max(1, Number(oe.h || 1)), N = ae / C, ue = Se / G;
      fe = -N * 360 * B, ee = ue * 180 * _e;
    } else {
      const oe = o() || { w: 0, h: 0 }, C = Math.max(1, Number(oe.w || 0)), G = Math.max(1, Number(oe.h || 0));
      if (C > 1 && G > 1) {
        const N = Te(Number(pe.fov || co), 1, 179), ue = Te(s1(N, C, G), 0.1, 179);
        fe = -(ae / C) * N * B, ee = Se / G * ue * _e;
      } else
        fe = -ae * kf * B, ee = Se * kf * _e;
    }
    pe.yaw = Ft(Number(pe.yaw || 0) + fe), pe.pitch = Te(Number(pe.pitch || 0) + ee, -89.9, 89.9), n(pe), l.velHistory.push({ ts: R, yaw: pe.yaw, pitch: pe.pitch });
    let me = 0;
    for (; me < l.velHistory.length - 1 && l.velHistory[me].ts < R - 100; ) me++;
    return me > 0 && l.velHistory.splice(0, me), l.inertia.active = !1, l.inertia.lastTs = R, s(), c("drag", { phase: "move", dx: ae, dy: Se, dYaw: fe, dPitch: ee }), !0;
  }
  function f(H = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const W = Number(H || performance.now());
    l.drag.lastTs = W;
    const O = l.velHistory.filter((R) => W - R.ts <= 80);
    if (O.length >= 2) {
      const R = O[0], Z = O.at(-1), q = Math.max(1e-3, (Z.ts - R.ts) / 1e3);
      let ae = Z.yaw - R.yaw;
      ae > 180 && (ae -= 360), ae < -180 && (ae += 360), l.inertia.vx = ae / q, l.inertia.vy = (Z.pitch - R.pitch) / q;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const P = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = P > o1, l.inertia.lastTs = W, c("drag", { phase: "end", speed: P, inertiaActive: l.inertia.active }), !0;
  }
  function h(H = performance.now()) {
    if (!l.inertia.active) return !1;
    const W = Number(H || performance.now()), O = Math.max(1e-3, (W - (l.inertia.lastTs || W)) / 1e3);
    l.inertia.lastTs = W;
    const P = { ...t() };
    P.yaw = Ft(Number(P.yaw || 0) + l.inertia.vx * O), P.pitch = Te(Number(P.pitch || 0) + l.inertia.vy * O, -89.9, 89.9);
    const R = Math.exp(-5.5 * O);
    return l.inertia.vx *= R, l.inertia.vy *= R, Math.abs(l.inertia.vx) < xf && Math.abs(l.inertia.vy) < xf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(P), s(), l.inertia.active;
  }
  function _() {
    const H = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], H;
  }
  function g(H) {
    const W = Math.sign(Number(H || 0));
    if (!W) return !1;
    const O = { ...t() }, P = Number(O.fov || co);
    return O.fov = Te(P + W * n1, r1, i1), n(O), s(), c("wheel", { deltaSign: W, fovBefore: P, fovAfter: O.fov }), !0;
  }
  function v(H, W = 0) {
    return g(oa(H, W));
  }
  function y() {
    n({ yaw: 0, pitch: 0, fov: co }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: h,
    stopMotion: _,
    applyWheel: g,
    applyWheelEvent: v,
    resetView: y
  };
}
const a1 = "PanoramaSuite.Debug.Diagnostics", l1 = "PanoramaSuite.Debug.ExportDiagnostics", kl = "pano_suite.diagnostics.v1", Mf = "pano_suite.diagnostics.previous.v1", c1 = 300, u1 = 2e5, d1 = 100, f1 = 20, p1 = 1e3, h1 = 2, vs = 1024 * 1024;
function Nr(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function m1() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function g1() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: m1,
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
      var r;
      const t = globalThis.PerformanceObserver;
      if (!((r = t == null ? void 0 : t.supportedEntryTypes) != null && r.includes("longtask"))) return null;
      const n = new t((i) => e(i.getEntries()));
      return n.observe({ type: "longtask" }), () => n.disconnect();
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
function y1(e = {}) {
  const t = { ...g1(), ...e };
  let n = !1, r = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, h = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    d.delete(b), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((b) => {
    u.delete(b), h.collected += 1;
  }) : null, v = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, H = [], W = /* @__PURE__ */ new Map();
  let O = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 };
  const Z = [];
  function q(b, K, p = void 0) {
    H.push(p === void 0 ? { t: t.clock(), type: b, label: K } : { t: t.clock(), type: b, label: K, detail: p }), H.length > d1 && H.shift();
  }
  function ae(b, K, p, m, x) {
    if (!n || !m || !t.WeakRef) return m;
    const I = { ref: new t.WeakRef(m), label: x };
    return b.add(I), K == null || K.register(m, I), p.created += 1, m;
  }
  function Se(b, K = "") {
    return ae(d, _, f, b, K);
  }
  function ge(b, K = "") {
    return ae(u, g, h, b, K);
  }
  function B({ label: b = "", width: K, height: p, offscreen: m = !1 } = {}) {
    const x = globalThis.OffscreenCanvas;
    let I;
    return m && typeof x < "u" ? I = new x(K, p) : (I = t.document().createElement("canvas"), K !== void 0 && p !== void 0 && (I.width = K, I.height = p)), Se(I, b);
  }
  function _e(b) {
    b.width = 0, b.height = 0, n && (f.released += 1);
  }
  function pe(b = t.document(), K = "") {
    var p;
    return ge(((p = b == null ? void 0 : b.createElement) == null ? void 0 : p.call(b, "video")) || null, K);
  }
  function fe(b, K) {
    if (!n || !b) return () => {
    };
    const p = { label: K, lost: !1, disposed: !1 };
    v.add(p), y.created += 1, q("webgl-created", K);
    const m = () => {
      p.disposed || (p.lost = !0, y.lost += 1, q("webglcontextlost", K));
    }, x = () => {
      p.disposed || (p.lost = !1, y.restored += 1, q("webglcontextrestored", K));
    };
    return b.addEventListener("webglcontextlost", m), b.addEventListener("webglcontextrestored", x), () => {
      p.disposed || (p.disposed = !0, v.delete(p), y.disposed += 1, q("webgl-disposed", K));
    };
  }
  function ee(b, K) {
    return W.set(b, K), () => {
      W.get(b) === K && W.delete(b);
    };
  }
  function me() {
    return n ? t.now() : -1;
  }
  function oe(b) {
    if (b < 0 || !n) return;
    const K = t.now() - b;
    O.count += 1, O.maxMs = Math.max(O.maxMs, K);
  }
  function C(b, K) {
    if (K < 0 || !n) return;
    const p = t.now() - K, m = P.get(b) ?? { count: 0, maxMs: 0 };
    m.count += 1, m.maxMs = Math.max(m.maxMs, p), P.set(b, m);
  }
  function G() {
    let b = 0, K = 0, p = 0, m = [0, 0];
    const x = {};
    for (const I of d) {
      const $ = I.ref.deref();
      if (!$) continue;
      b += 1;
      const Y = $.width * $.height;
      Y > 0 && (K += 1), p += Y, Y > m[0] * m[1] && (m = [$.width, $.height]);
      const se = x[I.label] ?? (x[I.label] = [0, 0]);
      se[0] += 1, se[1] += Y;
    }
    return { ...f, alive: b, sized: K, pixels: p, mb: Nr(p * 4 / vs, 1), largest: m, byLabel: x };
  }
  function N() {
    const b = [];
    let K = 0, p = 0, m = 0;
    for (const x of u) {
      const I = x.ref.deref();
      if (!I) continue;
      K += 1;
      const $ = !!(I.currentSrc || I.src);
      $ && (p += 1);
      const Y = !I.paused && !I.ended;
      Y && (m += 1), b.length < f1 && b.push({
        label: x.label,
        playing: Y,
        src: $,
        size: [I.videoWidth || 0, I.videoHeight || 0],
        ready: I.readyState ?? 0,
        connected: !!I.isConnected
      });
    }
    return { ...h, alive: K, loaded: p, playing: m, list: b };
  }
  function ue() {
    const b = t.now(), K = t.memory(), p = {
      t: t.clock(),
      heap: K ? { used: Nr(K.usedJSHeapSize / vs, 1), total: Nr(K.totalJSHeapSize / vs, 1), limit: Nr(K.jsHeapSizeLimit / vs, 1) } : null,
      canvas: G(),
      webgl: { ...y, alive: [...v].filter((m) => !m.lost).length },
      video: N(),
      frame: { count: O.count, maxMs: Nr(O.maxMs), longTasks: R.count, longTaskMaxMs: Nr(R.maxMs) },
      renders: Object.fromEntries([...P].map(([m, x]) => [m, { count: x.count, maxMs: Nr(x.maxMs) }])),
      sources: Object.fromEntries([...W].map(([m, x]) => [m, x()])),
      costMs: Nr(c, 3)
    };
    return O = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 }, Z.push({ record: p, text: JSON.stringify(p) }), Z.length > c1 && Z.shift(), l += 1, l % h1 === 0 && E(), c = t.now() - b, p;
  }
  function A(b = u1) {
    const K = JSON.stringify({ ...o, events: H }).slice(0, -1);
    let p = b - K.length - 14, m = Z.length;
    for (; m > 0 && p - Z[m - 1].text.length - 1 >= 0; )
      m -= 1, p -= Z[m].text.length + 1;
    return `${K},"records":[${Z.slice(m).map((x) => x.text).join(",")}]}`;
  }
  function E() {
    if (!o) return;
    const b = t.storage();
    if (b) {
      o.savedAt = t.clock();
      try {
        b.setItem(kl, A());
      } catch {
      }
    }
  }
  function w() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", E();
  }
  function M() {
    var x;
    if (r) return i;
    r = !0;
    const b = t.storage();
    if (!b) return null;
    let K = null;
    try {
      if (K = b.getItem(kl), K === null) {
        const I = b.getItem(Mf);
        return i = I === null ? null : JSON.parse(I), i;
      }
      b.setItem(Mf, K), b.removeItem(kl), i = JSON.parse(K);
    } catch {
      return i;
    }
    const p = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], m = p.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${p.length} records kept. Its last records:`,
      JSON.stringify(m)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((x = p.at(-1)) == null ? void 0 : x.t) || 0).toISOString()}; ${p.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(m)
    ), i;
  }
  function le(b) {
    const K = b === !0;
    if (M(), K !== n) {
      if (n = K, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, Z.length = 0, a = t.observeLongTasks((p) => {
          for (const m of p)
            R.count += 1, R.maxMs = Math.max(R.maxMs, m.duration);
        }), t.addUnload(w), s = t.setInterval(ue, p1), E();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(w), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", E();
    }
  }
  function ye() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...H], records: Z.map((b) => b.record) } : null,
      previous: i
    };
  }
  function D() {
    const b = t.document(), K = new Blob([JSON.stringify(ye(), null, 1)], { type: "application/json" }), p = URL.createObjectURL(K), m = b.createElement("a");
    m.href = p, m.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, m.click(), setTimeout(() => URL.revokeObjectURL(p), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: B,
    releaseCanvas: _e,
    trackCanvas: Se,
    createVideo: pe,
    trackVideo: ge,
    watchContext: fe,
    addSource: ee,
    frameStart: me,
    frameEnd: oe,
    renderEnd: C,
    sample: ue,
    serialize: A,
    recoverPrevious: M,
    setEnabled: le,
    exportData: ye,
    download: D
  };
}
const mn = y1(), Gt = mn.createCanvas, Fr = mn.releaseCanvas, xl = mn.trackCanvas, Hi = mn.createVideo, Pf = mn.trackVideo, b1 = mn.addSource, v1 = mn.frameStart, S1 = mn.frameEnd;
function Bh(e, t) {
  const n = mn.watchContext(e.canvas, t), r = mn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = mn.frameStart(), l = o(s);
    return mn.renderEnd(t, a), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (r(), n());
    }
  };
}
const _1 = {
  id: a1,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => mn.setEnabled(e === !0)
}, Nf = {
  id: l1,
  label: "Export Panorama Suite diagnostics",
  function: () => mn.download()
}, ut = Math.PI / 180, Ot = 180 / Math.PI;
function En(e, t, n) {
  return { x: e, y: t, z: n };
}
function sa(e, t) {
  return En(e.x + t.x, e.y + t.y, e.z + t.z);
}
function aa(e, t) {
  return En(e.x * t, e.y * t, e.z * t);
}
function Ml(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function vu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return En(e.x / t, e.y / t, e.z / t);
}
function hn(e, t) {
  const n = e * ut, r = t * ut, i = Math.cos(r);
  return En(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function qi(e, t, n = 0) {
  const r = Number(e || 0) * ut, i = Number(t || 0) * ut, o = n * ut, s = Math.cos(r), a = Math.sin(r), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: En(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: En(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: En(a * l, c, s * l)
  };
}
function la(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function bt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function w1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function k1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = bt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function x1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function M1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = bt(e.t, 0), r = bt(e.widthScale, null), i = bt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = bt(e.u, null), s = bt(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: n
    };
    return r != null && (a.widthScale = Math.max(0, r)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = bt(e.u, null), s = bt(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: n
    };
    return r != null && (a.widthScale = Math.max(0, r)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  return null;
}
function Ss(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = M1(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function P1(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const l = Ss(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = Ss(e.points, t, 1);
  if (!o) return null;
  const s = Ss(e.rawPoints, t, 1), a = Ss(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function N1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = x1(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = P1(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = bt(e.size, null), s = bt(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = bt(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, bt(f.r, 0))),
      g: Math.max(0, Math.min(1, bt(f.g, 0))),
      b: Math.max(0, Math.min(1, bt(f.b, 0))),
      a: Math.max(0, Math.min(1, bt(f.a, 1)))
    };
  }
  return {
    id: a,
    actionGroupId: l,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: bt(e.hardness, null),
    flow: bt(e.flow, null),
    spacing: bt(e.spacing, null),
    createdAt: Math.trunc(bt(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function Af(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = N1(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function A1(e) {
  if (!e || typeof e != "object") return null;
  const t = bt(e.u0, null), n = bt(e.v0, null), r = bt(e.u1, null), i = bt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function C1(e) {
  const t = e || {};
  return {
    du: bt(t.du, 0) ?? 0,
    dv: bt(t.dv, 0) ?? 0,
    rot_deg: bt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, bt(t.scale, 1) ?? 1)
  };
}
function I1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = A1(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, bt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: C1(e.transform)
  } : null;
}
function E1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = I1(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function pi(e) {
  const t = w1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: k1(e.groups),
    paint: Af(e.paint, "paint"),
    mask: Af(e.mask, "mask"),
    raster_objects: E1(e.raster_objects)
  };
}
const Fn = 1, Tn = 179, yc = 85;
function qa(e) {
  const t = ((et(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Yh(e, t) {
  let n = et(e, 0) - et(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function qh(e, t, { shiftKey: n = !1 } = {}) {
  let r = et(e, 0) + et(t, 0) * Ot;
  return n && (r = Math.round(r / 15) * 15), qa(r);
}
function et(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $r(e = {}) {
  const t = Te(et(e.hFOV_deg || 90, 90), Fn, Tn), n = Te(et(e.vFOV_deg || 60, 60), Fn, Tn), r = Math.tan(t * ut * 0.5), i = Math.tan(n * ut * 0.5);
  return {
    yawDeg: et(e.yaw_deg, 0),
    pitchDeg: et(e.pitch_deg, 0),
    rollDeg: et(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function ui(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = $r(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function Su(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, et(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function _u(e, t) {
  const n = Math.max(1e-12, et(t, 1)), r = Math.max(1e-6, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Te(2 * Math.atan(r / (2 * n)) * Ot, Fn, Tn), s = Te(2 * Math.atan(i / (2 * n)) * Ot, Fn, Tn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function O1(e, t, n) {
  const r = et(e == null ? void 0 : e.x, 0), i = et(e == null ? void 0 : e.y, 0), o = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = $r(t), l = Math.max(1e-12, et(n, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: r + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function wu(e, t, n = yc) {
  const r = Math.max(1e-12, et(t, 1)), i = Te(et(n, yc), 1, 89.999), o = r * Math.tan(i * ut), s = Math.max(1, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Xh(e, t, n) {
  const r = Math.max(1e-12, et(t, 1));
  return {
    x: (et(n == null ? void 0 : n.x, 0) - et(e == null ? void 0 : e.x, 0)) / r,
    y: -(et(n == null ? void 0 : n.y, 0) - et(e == null ? void 0 : e.y, 0)) / r
  };
}
function F1(e, t) {
  const n = Te(et(e, 90), Fn, Tn), r = Math.max(1e-6, et(t, 1));
  return Te(
    2 * Math.atan(Math.tan(n * ut * 0.5) / r) * Ot,
    Fn,
    Tn
  );
}
function Rs(e, t) {
  const n = Te(et(e, 60), Fn, Tn), r = Math.max(1e-6, et(t, 1));
  return Te(
    2 * Math.atan(Math.tan(n * ut * 0.5) * r) * Ot,
    Fn,
    Tn
  );
}
function Cf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function T1(e, t) {
  const n = Cf(e, 1), r = Cf(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function hi(e) {
  const t = Te(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * ut, n = Te(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * ut;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function is(e) {
  const t = hi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || T1(t, 1);
}
function ku(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = is(t), t;
}
function Jh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Te(s, Fn, Tn) : Te(Math.min(42, et(i, 100) * 0.42), 8, 96);
  return ku({
    id: String(e),
    label: "Frame 1",
    yaw_deg: et(t, 0),
    pitch_deg: Te(et(n, 0), -89.9, 89.9),
    roll_deg: qa(r),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function mr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : is(e);
}
function Zh(e, t) {
  const n = $r(e), r = et(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * Ot, o = 2 * Math.atan(n.tanHalfY * r) * Ot;
  return i < Fn || i > Tn || o < Fn || o > Tn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Qh(e, t, n = gc) {
  const r = Math.sign(et(t, 0)), i = Math.abs(et(n, gc));
  if (!r || !(i > 0)) return null;
  const o = $r(e), s = o.hFovDeg + r * i;
  if (s < Fn || s > Tn) return null;
  const a = Math.tan(s * ut * 0.5);
  return Zh(e, a / o.tanHalfX);
}
function em(e, t) {
  const n = $r(e), r = qi(n.yawDeg, n.pitchDeg, n.rollDeg), i = et(t == null ? void 0 : t.x, 0), o = et(t == null ? void 0 : t.y, 0);
  return vu(sa(sa(r.fwd, aa(r.right, i)), aa(r.up, o)));
}
function tm(e) {
  return En(e.x, e.y, -e.z);
}
function Vs(e) {
  return En(e.x, e.y, -e.z);
}
function Qt(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = qi(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function nm(e) {
  const t = Vs(En(e[0][0], e[1][0], e[2][0])), n = Vs(En(e[0][1], e[1][1], e[2][1])), r = Vs(En(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * n.z - s * n.x, s * t.x - a * t.z);
  return { yawDeg: i * Ot, pitchDeg: o * Ot, rollDeg: l * Ot };
}
function $o(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function zr(e) {
  const [[t, n, r], [i, o, s], [a, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - s) * f, y: (r - a) * f, z: (i - n) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (n + i) / f, z: (r + a) / f, w: (l - s) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (n + i) / f, y: 0.25 * f, z: (s + l) / f, w: (r - a) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (r + a) / u, y: (s + l) / u, z: 0.25 * u, w: (i - n) / u };
}
function _s(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ti = 1e-6, bc = 1e-6, D1 = 1e-9;
function zo(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function L1(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    zo(0, n, i, 1, c) < t ? s = c : a = c;
  }
  return zo(0, r, o, 1, 0.5 * (s + a));
}
function Gi(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ki(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = n.map((f) => -f / i), a = r.map((f) => f / o);
  if (s.reduce((f, h, _) => f + h * a[_], 0) < 0) return n.map(() => 0);
  const l = s.map((f, h) => (f * o + a[h] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((h, _) => h + _ * _, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function rm(e, t, n, r) {
  const i = n[r], o = n[r + 1], s = t[r + 1] - t[r], a = i.map((d, u) => o[u] - d);
  let l = a;
  Gi(e, r) && (l = Ki(t, r, n[r - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return Gi(e, r + 1) && (c = Ki(t, r + 1, a.map((d) => -d), n[r + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function im(e, t, n, r, i) {
  const [[o], [s]] = rm(e, t, n.map((a) => [a]), r);
  return zo(n[r], n[r] + o, n[r + 1] + s, n[r + 1], i);
}
function R1(e, t, n, r) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = rm(e, t, i, n);
  o = ((c = e[n].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[n + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[n], l = i[n + 1];
  return [0, 1, 2].map((u) => zo(a[u], a[u] + o[u], l[u] + s[u], l[u], r));
}
function ca([e, t, n, r], [i, o, s, a]) {
  return [
    r * i + e * a + t * s - n * o,
    r * o - e * s + t * a + n * i,
    r * s + e * o - t * i + n * a,
    r * a - e * i - t * o - n * s
  ];
}
function V1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Pl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function $1([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function vc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Ci(e, t) {
  return $1(ca([-e[0], -e[1], -e[2], e[3]], t));
}
function Nl(e, t, n) {
  return ca(e, vc(Ci(e, t).map((r) => n * r)));
}
function Al(e, t) {
  const n = V1(e, t);
  if (Math.abs(n) > bc) return n < 0;
  const [r, i, o] = Ci(e, t);
  for (const s of [-i, r, o])
    if (Math.abs(s) > bc) return s < 0;
  return !1;
}
function ws(e) {
  const { x: t, y: n, z: r, w: i } = zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function Sc(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function z1(e, t, n, r) {
  const i = ws(e[n].value);
  let o = ws(e[n + 1].value);
  Al(i, o) && (o = Pl(o));
  const s = t[n + 1] - t[n], a = Ci(i, o);
  let l = a;
  if (Gi(e, n)) {
    let P = ws(e[n - 1].value);
    Al(P, i) && (P = Pl(P)), l = Ki(t, n, Ci(i, P), a).map((R) => R * s);
  }
  let c = a;
  if (Gi(e, n + 1)) {
    let P = ws(e[n + 2].value);
    Al(o, P) && (P = Pl(P)), c = Ki(t, n + 1, Ci(o, i), Ci(o, P)).map((R) => R * s);
  }
  const d = ca(i, vc(l.map((P, R) => 0.5 * (P - a[R])))), u = ca(o, vc(a.map((P, R) => 0.5 * (P - c[R])))), [f, h, _, g] = Nl(Nl(i, o, r), Nl(d, u, r), 2 * r * (1 - r)), { yawDeg: v, pitchDeg: y, rollDeg: H } = nm($o({ x: f, y: h, z: _, w: g })), W = e[n].value, O = e[n + 1].value;
  return {
    yaw_deg: Sc(v, W.yaw_deg, O.yaw_deg, r),
    pitch_deg: y,
    roll_deg: Sc(H, W.roll_deg, O.roll_deg, r)
  };
}
function jo(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function ua(e) {
  return Math.sqrt(jo(e, e));
}
function da(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function om(e, t) {
  const n = jo(e, t), r = t.map((s, a) => s - n * e[a]), i = ua(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * o);
}
function ki(e, t) {
  const n = ua(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function ks(e, t, n) {
  return ki(e, om(e, t).map((r) => n * r));
}
function Cl(e, t) {
  const n = da(e[t].value), r = da(e[t + 1].value), i = jo(n, r), o = i < 0 && ua(r.map((l, c) => l - i * n[c])) <= bc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = om(n, r);
  const a = ua(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * n[c]), o];
}
function j1(e, t, n, r) {
  const i = da(e[n].value), o = da(e[n + 1].value), [s, a, l] = Cl(e, n);
  let c = s, d = a;
  const u = t[n + 1] - t[n];
  Gi(e, n) && (c = Ki(t, n, Cl(e, n - 1)[1].map((W) => -W), c).map((W) => W * u)), Gi(e, n + 1) && (d = Ki(t, n + 1, d.map((W) => -W), Cl(e, n + 1)[0]).map((W) => W * u));
  let f, h, _;
  if (l) {
    const W = Math.PI, O = zo(0, jo(c, s) / W / 3, W - jo(d, a) / W / 3, W, r);
    [f, h, _] = ki(i, s.map((P) => O * P / W));
  } else {
    const W = ks(ki(i, c.map((R) => R / 3)), ki(o, d.map((R) => -R / 3)), r), O = ks(ki(i, c.map((R) => r * R / 3)), W, r), P = ks(W, ki(o, d.map((R) => -(1 - r) * R / 3)), r);
    [f, h, _] = ks(O, P, r);
  }
  const g = Math.hypot(f, _), v = e[n].value.yaw_deg, y = e[n + 1].value.yaw_deg;
  return { yaw_deg: g <= D1 ? v + (y - v) * r : Sc(Math.atan2(f, _) * 180 / Math.PI, v, y, r), pitch_deg: Math.atan2(h, g) * 180 / Math.PI };
}
function H1(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = im(e, t, e.map((s) => s.value[o]), n, r);
  return i;
}
function G1(e, t, n, r) {
  return im(e, t, e.map((i) => i.value), n, r);
}
const K1 = { position: R1, rotation: z1, direction: j1, size: H1 };
function It(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return _s(e[t].value);
  if (n <= r[0].frame + ti) return _s(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - ti) return _s(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + ti; ) o += 1;
  const s = r[o];
  if (Math.abs(n - s.frame) <= ti || s.easing === "hold") return _s(s.value);
  const a = r.map((c) => c.frame), l = L1(s.easing, (n - a[o]) / (a[o + 1] - a[o]));
  return (K1[t] ?? G1)(r, a, o, l);
}
function _c(e) {
  return Math.min(179, Math.max(0.1, e));
}
function W1(e) {
  return Math.min(1, Math.max(0, e));
}
function sm(e) {
  return Math.max(1e-6, e);
}
function am(e, t) {
  return t - (e.start - e.in);
}
function mi(e, t) {
  return t >= e.start - ti && (e.duration === null || t < e.start + e.duration - ti);
}
function Xa(e, t) {
  return {
    position: It(e, "position", t),
    ...It(e, "rotation", t),
    hFOV_deg: _c(It(e, "fov", t)),
    aspect: e.aspect
  };
}
function os(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = am(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Xa(r, n),
    scene: {
      active: i.visible && mi(i.clip, n),
      clip_frame: o,
      position: It(i, "position", o),
      ...It(i, "rotation", o),
      scale: sm(It(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wn(s, n))
  };
}
function U1(e, t) {
  if (e.placement === "world")
    return {
      position: It(e, "position", t),
      ...It(e, "rotation", t),
      scale: sm(It(e, "scale", t))
    };
  const n = It(e, "size", t);
  return {
    ...It(e, "direction", t),
    roll_deg: It(e, "roll", t),
    hFOV_deg: _c(n.hFOV_deg),
    vFOV_deg: _c(n.vFOV_deg)
  };
}
function Wn(e, t) {
  const n = am(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && mi(e.clip, t),
    clip_frame: n,
    ...U1(e, n),
    opacity: W1(It(e, "opacity", n))
  };
}
const B1 = 2, lm = ["sky", "world"], wc = ["perspective", "erp"], Y1 = ["input", "output", "temp"], cm = [0.42, 0, 0.58, 1], um = 1, xu = 1e3, kc = 1e7, Mu = kc, Pu = Number.MAX_SAFE_INTEGER, q1 = /^sticker_([0-9]{1,16})$/;
function kt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function $t(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Nu(e, t) {
  const n = $t(e, t);
  return n !== null && n > 0 ? n : t;
}
function on(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Lr(e) {
  const t = $t(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function $s(e) {
  const t = Lr(e);
  return t === null ? null : on(t, -kc, kc);
}
function jr(e) {
  const t = Nu(e, null);
  return t === null ? null : on(t, um, xu);
}
function dm(e) {
  const t = Lr(e);
  return t !== null && t >= 1 ? Math.min(t, Mu) : null;
}
function Ho(e, t) {
  return typeof e == "boolean" ? e : t;
}
function fm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => $t(n, null));
  return t.includes(null) ? null : t;
}
function pm(e) {
  return fm(e) || [0, 0, 0];
}
function hm(e) {
  const t = kt(e) ? e : {};
  return {
    yaw_deg: $t(t.yaw_deg, 0),
    pitch_deg: on($t(t.pitch_deg, 0), -90, 90),
    roll_deg: $t(t.roll_deg, 0)
  };
}
function X1(e) {
  return on($t(e, 90), 0.1, 179);
}
function J1(e) {
  return Nu(e, 1);
}
function Z1(e) {
  const t = kt(e) ? e : {};
  return {
    yaw_deg: $t(t.yaw_deg, 0),
    pitch_deg: on($t(t.pitch_deg, 0), -90, 90)
  };
}
function Q1(e) {
  return $t(e, 0);
}
function eS(e) {
  const t = kt(e) ? e : {};
  return {
    hFOV_deg: on($t(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: on($t(t.vFOV_deg, 20), 0.1, 179)
  };
}
function mm(e) {
  return on($t(e, 1), 0, 1);
}
const Au = [["position", pm], ["rotation", hm], ["fov", X1]], Ja = [["position", pm], ["rotation", hm], ["scale", J1]], Hr = [["direction", Z1], ["roll", Q1], ["size", eS], ["opacity", mm]], Gr = [...Ja, ["opacity", mm]];
function tS(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => $t(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...cm];
}
function nS(e) {
  if (!kt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = fm(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function rS(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!kt(i)) continue;
    const o = $s(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: tS(i.easing) }, a = n ? nS(i.handles) : null;
    a && (s.handles = a), r.set(o, s);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function Za(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = kt(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: rS(o.keyframes, i, r === "position") };
  }
  return n;
}
function ss(e) {
  const t = kt(e) ? e : {}, n = $s(t.start), r = $s(t.in), i = $s(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Qa(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function gm(e) {
  const t = kt(e) ? e : {}, n = on($t(t.x0, 0), 0, 1), r = on($t(t.y0, 0), 0, 1), i = on($t(t.x1, 1), 0, 1), o = on($t(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function iS(e) {
  if (!kt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Y1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
const ym = Object.freeze([".gltf", ".glb", ".obj", ".fbx", ".stl", ".spz", ".splat", ".ply", ".ksplat"]);
function bm(e) {
  const t = String(e ?? "").toLowerCase(), n = t.lastIndexOf(".");
  return n >= 0 && ym.includes(t.slice(n));
}
function oi(e) {
  return (e == null ? void 0 : e.kind) === "file" && typeof e.filename == "string" && bm(e.filename);
}
function oS(e) {
  const t = iS(e.source);
  if (!t) return null;
  const n = lm.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: ss(e.clip),
    visible: Ho(e.visible, !0),
    locked: Ho(e.locked, !1),
    crop: gm(e.crop),
    ...Za(e, r ? Gr : Hr)
  };
  return r || (i.z_index = Lr(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = sS(e.handoff_overrides, n)), i;
}
function sS(e, t) {
  const n = Array.isArray(e) ? e : [];
  return (t === "world" ? Gr : Hr).map(([r]) => r).filter((r) => n.includes(r));
}
function aS(e, t) {
  const n = [];
  let r = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = kt(s) ? oS(s) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (r) continue;
        r = !0;
      }
      n.push(a);
    }
  }
  const i = /* @__PURE__ */ new Set();
  for (const s of n)
    typeof s.id == "string" && s.id && !i.has(s.id) ? i.add(s.id) : s.id = null;
  let o = cS(t, n);
  for (const s of n)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: n, next: Math.min(o, Pu) };
}
function lS(e) {
  const t = typeof e == "string" ? q1.exec(e) : null, n = t ? Number(t[1]) : 0;
  return n < Pu ? n : 0;
}
function vm(e) {
  return e.reduce((t, n) => Math.max(t, lS(n.id)), 0) + 1;
}
function cS(e, t) {
  const n = Lr(e), r = vm(t);
  return on(n === null ? r : Math.max(n, r), 1, Pu);
}
function uS(e) {
  if (!kt(e)) return null;
  const t = wc.includes(e.projection) ? e.projection : wc[0];
  return { aspect: Nu(e.aspect, 1), projection: t, visible: Ho(e.visible, !0), ...Za(e, Au) };
}
function fa(e) {
  return typeof e == "string" && e ? e : null;
}
function Sm(e, t) {
  const n = new Map(e.map((r, i) => [t(r), i]));
  return e.filter((r, i) => n.get(t(r)) === i);
}
function dS(e) {
  if (!kt(e) || fa(e.id) === null || !lm.includes(e.placement)) return null;
  const t = e.placement === "world", n = {};
  kt(e.clip) && (n.clip = ss(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (n[i] = e[i]);
  kt(e.crop) && (n.crop = gm(e.crop)), Object.assign(n, Za(e, (t ? Gr : Hr).filter(([i]) => kt(e[i]))));
  const r = t ? null : Lr(e.z_index);
  return r !== null && (n.z_index = r), Object.keys(n).length ? { id: e.id, placement: e.placement, ...n } : null;
}
function _m(e) {
  const t = kt(e) ? jr(e.fps) : null;
  if (t === null || fa(e.layer) === null) return null;
  const n = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => fa(c) !== null))] : [], r = (Array.isArray(e.stickers) ? e.stickers : []).map(dS).filter((c) => c !== null), i = Sm(r, (c) => c.id).filter((c) => !n.includes(c.id)), o = kt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), kt(o.clip) && (s.clip = ss(o.clip));
  const a = { layer: e.layer, fps: t, deleted: n, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !n.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function fS(e) {
  const t = (Array.isArray(e) ? e : []).map(_m).filter((n) => n !== null);
  return Sm(t, (n) => n.layer);
}
function pa(e) {
  const t = kt(e.timeline) ? e.timeline : {}, n = kt(e.scene) ? e.scene : {}, { stickers: r, next: i } = aS(e.stickers, e.next_sticker_id);
  return {
    version: B1,
    id: fa(e.id),
    timeline: {
      fps: jr(t.fps) ?? 24,
      length: dm(t.length)
    },
    camera: uS(e.camera),
    scene: { clip: ss(n.clip), visible: Ho(n.visible, !0), ...Za(n, Ja) },
    stickers: r,
    next_sticker_id: i,
    painting: pi(e.painting),
    painting_layer: kt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Ho(e.painting_visible, !0),
    upstream: fS(e.upstream),
    background: pS(e.background)
  };
}
function pS(e) {
  return { clip: ss(kt(e) ? e.clip : void 0) };
}
function hS(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!kt(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function mS(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!kt(t)) return null;
  const n = on($t(t.hFOV_deg, 90), 1, 179), r = on($t(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function gS(e) {
  const t = kt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(kt) : [];
  return n.sort((r, i) => $t(r.z_index, 0) - $t(i.z_index, 0)), pa({
    camera: mS(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: hS(r, t),
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
function an(e) {
  if (e == null || typeof e == "string" && !e.trim()) return pa({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!kt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? gS(t) : pa(t);
}
const Il = {
  state: { painting_visible: !0 },
  camera: { projection: wc[0], visible: !0 },
  scene: { visible: !0 }
};
function El(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function xc(e) {
  const t = El(e, Il.state);
  return t.id === null && delete t.id, t.next_sticker_id === vm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, Qa(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && El(e.camera, Il.camera),
    scene: El(e.scene, Il.scene),
    stickers: e.stickers.map((n) => Object.fromEntries(Object.entries(n).filter(([r, i]) => r !== "handoff_overrides" || i.length)))
  });
}
function Mo(e, t, n, r, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: n(r + a.frame) - i }))
    };
  return o;
}
function Po(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function Xi(e, t) {
  const n = jr(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (a) => Lr(a * r), { length: o } = e.timeline, s = Po(e.scene.clip, i);
  return pa({
    id: e.id,
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Mo(e.camera, Au, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...Mo(e.scene, Ja, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Po(a.clip, i), u = a.placement === "world" ? Gr : Hr;
      return { ...a, clip: l, ...Mo(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: Po(e.background.clip, i).clip }
  });
}
function wm(e, t) {
  const { fps: n } = t.timeline, r = n / e.fps, i = (l) => Lr(l * r), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? Gr : Hr).filter(([h]) => Object.hasOwn(l, h));
    if (!Object.hasOwn(l, "clip")) {
      const h = o.get(l.id) ?? 0, _ = Lr(h * (e.fps / n));
      return { ...l, ...Mo(l, c, i, _, h) };
    }
    const { clip: d, anchor: u, newAnchor: f } = Po(l.clip, i);
    return { ...l, clip: d, ...Mo(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: Po(e.scene.clip, i).clip } : e.scene;
  return _m({ ...e, fps: n, stickers: s, scene: a });
}
const yS = 1e-3;
function Cu(e, t, n, r) {
  if (!mi(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(yS / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function Iu(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function km(e, t, n, r = !1) {
  return e.start - e.in + (n.video && r ? n.duration * t : n.frames);
}
function xm(e, t, n) {
  const r = n / t;
  return { start: e.start * r, in: e.in * r, duration: e.duration === null ? null : e.duration * r };
}
function Mm(e) {
  return Qa(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function Mc(e, t, n, r = null, i = !1) {
  return mi(e, t) ? !(r != null && r.video || (r == null ? void 0 : r.frames) > 1) || t < km(e, n, r, i) : !1;
}
const no = /* @__PURE__ */ new Map(), bS = 8;
function Pm(e) {
  let t = no.get(e);
  if (!t) {
    const n = Gt({ label: "background.color", width: 2, height: 1 }), r = n.getContext("2d");
    r.fillStyle = e, r.fillRect(0, 0, n.width, n.height), t = { media: n, revision: e, coverage: 360, source: `bg_color:${e}` }, no.size >= bS && no.delete(no.keys().next().value), no.set(e, t);
  }
  return t;
}
function Go(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const n = e("pano_sticker_files").length;
  return n > 1 ? { kind: "IMAGE", frames: n } : null;
}
function vS(e, t) {
  return Math.floor(e * t.fps);
}
function Eu(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const If = 4;
function Ou({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== n.length || s.some((f, h) => f !== n[h])) && (n = s, r.clear(), i = null), a === null) return null;
      const d = vS(a, l);
      for (let f = d; f < Math.min(n.length, d + If + 1); f += 1) o(f);
      for (const f of r.keys())
        (f < d || f > d + If) && f !== i && r.delete(f);
      const u = r.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && r.delete(i), i = d), i === null ? c : r.get(i);
    }
  };
}
function Ol(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Nm(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Am(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ti);
}
function Cm(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? Nm(e.keyframes[r - 1].easing) : [...cm];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function Xt(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Ol(i.value, r);
    return;
  }
  const o = Am(i, n);
  o ? o.value = Ol(o.value, r) : Cm(i, n, Ol(It(e, t, n), r));
}
function Ji(e) {
  return e.placement === "world" ? Gr.map(([t]) => t) : e.placement === "sky" ? Hr.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? Ja : Au).map(([t]) => t);
}
function SS(e, t) {
  for (const n of Ji(e))
    Am(e[n], t) || Cm(e[n], t, It(e, n, t));
}
function _S(e) {
  const t = Ji(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Fl(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function wS(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function kS(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = It(e, o, r);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function xS(e, t, n, r, i, o = 1 / 0) {
  r = Math.min(r, Math.max(0, o - Math.max(...n))), r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const s = new Set(n);
  for (const a of t) {
    const l = e[a], c = l.keyframes.filter((u) => s.has(u.frame)).map((u) => ({ ...u, frame: u.frame + r })), d = new Set(c.map((u) => u.frame));
    l.keyframes = [
      ...l.keyframes.filter((u) => !s.has(u.frame) && !d.has(u.frame)),
      ...c
    ].sort((u, f) => u.frame - f.frame);
  }
  return r;
}
function Im(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function MS(e, t, n) {
  const r = Im(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function PS(e, t, n, r) {
  for (const i of Im(e, t, n)) i.easing = Nm(r);
}
function Ef(e, t) {
  e.start = Math.max(0, e.start + t);
}
function NS(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function AS(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Em(e) {
  return Ji(e).map((t) => e[t]);
}
function ha(e) {
  return Em(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Qa(e.clip);
}
function Om(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(ha);
}
const Fm = 1e5;
function Fu(e, t = {}) {
  const { length: n } = e.timeline, r = n ? Math.max(1, Math.round(n)) : CS(e, t);
  return Number.isFinite(r) ? r : Fm;
}
function CS(e, { bg: t = null, port: n = null, sceneItems: r = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (g) => g.duration === null || g === o, c = [e.scene.clip, ...e.stickers.map((g) => g.clip)].filter((g) => !l(g)).map((g) => g.start + g.duration), d = e.stickers.find((g) => g.source.kind === "port");
  n && d && l(d.clip) && c.push(Iu({ ...d.clip, duration: null }, a, n));
  const u = e.scene.clip;
  r > 1 && l(u) && c.push(u.start - u.in + r);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const h = s && e.camera ? Em(e.camera).flatMap((g) => g.keyframes.map((v) => v.frame)) : [];
  let _ = 1;
  return t != null && t.video ? _ = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? _ = t.frames : c.length ? _ = Math.max(1, Math.round(Math.max(...c))) : h.length && (_ = Math.max(1, Math.round(Math.max(...h)) + 1)), i && (_ = Math.max(_, i.frames, ...i.ends.map(Math.round))), _;
}
function IS(e) {
  return e > 0 ? jr(Math.min(e, xu)) : null;
}
function ES(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : dm(Math.max(1, Math.min(e, Mu)));
}
const Tl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], OS = 2e3;
function FS(e, t, n = 56) {
  const r = Tl.find((o) => o * t >= n) || Tl[Tl.length - 1], i = [];
  for (let o = 0; o < e && i.length < OS; o += r) i.push(o);
  return i;
}
function TS(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let xs = { text: null, parsed: null };
function yn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ma(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function DS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: yn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: pi(null),
    painting_layer: null,
    ui_settings: ma(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Tm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function LS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function RS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function VS(e) {
  return Array.isArray(e) ? e.map((t) => ku(t)) : [];
}
function $S(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Dm(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = DS(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (xs.text === i ? o = xs.parsed : (o = JSON.parse(i), xs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const s = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, a = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: LS(o.assets),
      stickers: RS(o.stickers),
      shots: VS(o.shots),
      painting: pi(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ma(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return s && (a.ui_settings = ma({ ...a.ui_settings, ...s })), a.output_preset = Tm(
      n.outputPreset,
      Number(a.output_preset || r.output_preset)
    ), a.bg_color = String(n.backgroundColor || a.bg_color || r.bg_color), a.coverage = yn(n.coverage), delete a.editor_history, a;
  } catch {
    return xs = { text: i, parsed: null }, r;
  }
}
function zS(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function jS(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), e.next_sticker_id > n.next_sticker_id && (n.next_sticker_id = e.next_sticker_id), e.id && !n.id && (n.id = e.id), { state: n, paintingChanged: r };
}
function HS(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Lm(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = jr(t.fps);
  let l;
  try {
    l = an(e);
  } catch {
    l = an(null);
  }
  return a && a !== l.timeline.fps && (l = Xi(l, a)), {
    ...l,
    coverage: yn(i),
    bg_color: r,
    output_preset: Tm(n),
    ui_settings: ma(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function GS(e, t) {
  const n = Xi(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.background, n.background], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Ji(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Rm(e, t, n) {
  if (e.source.kind !== "port" || !((n == null ? void 0 : n.width) > 0 && (n == null ? void 0 : n.height) > 0)) return t.vFOV_deg;
  const r = Math.min(179, Math.max(0.1, t.hFOV_deg)) * ut, i = 2 * Math.atan(Math.tan(r * 0.5) * (n.height / n.width)) / ut;
  return Math.min(179, Math.max(0.1, i));
}
function Tu(e, t, n = null) {
  const r = Wn(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: Rm(e, r, n), rot_deg: r.roll_deg };
}
const KS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Of(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function WS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[KS[n]].keyframes.length));
}
function Vm(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = Of(n, ["yaw_deg", "pitch_deg"]), o = Of(n, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && Xt(e, "direction", r, i), n.rot_deg !== void 0 && Xt(e, "roll", r, n.rot_deg), Object.keys(o).length && Xt(e, "size", r, o);
}
const el = ["position_x", "position_y", "position_z"], Du = "camera";
function $m(e, t) {
  const n = Xa(e, t);
  return ku({
    id: Du,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: F1(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function US(e) {
  return an({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ft(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function BS(e) {
  return e - 360 * Math.round(e / 360);
}
function YS(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + BS(n[o] - r[o]));
  Object.keys(i).length && Xt(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && Xt(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * ut * 0.5) / Math.tan(n.vFOV_deg * ut * 0.5)), n.position.some((o, s) => o !== r.position[s]) && Xt(e, "position", t, [...n.position]);
}
function qS(e, t) {
  const n = It(e, "position", t), r = It(e, "rotation", t);
  return {
    ...Object.fromEntries(el.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: It(e, "fov", t)
  };
}
function XS(e, t, n, r) {
  const i = el.indexOf(n);
  if (i >= 0) {
    const o = It(e, "position", t);
    o[i] = r, Xt(e, "position", t, o);
  } else n === "hFOV_deg" ? Xt(e, "fov", t, r) : Xt(e, "rotation", t, { [n]: r });
}
function JS(e, t, n) {
  Xt(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function ZS(e, t) {
  const n = Wn(e, t);
  return {
    ...Object.fromEntries(el.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function QS(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = el.indexOf(n);
  if (o >= 0) {
    const s = It(e, "position", i);
    s[o] = r, Xt(e, "position", i, s);
  } else n === "scale" ? Xt(e, "scale", i, r) : n === "opacity" ? Xt(e, "opacity", i, r / 100) : Xt(e, "rotation", i, { [n]: r });
}
function e_(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && Xt(e, i, r, n[i]);
}
function t_(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function Ff(e, t, n) {
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
function No(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ga(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ko(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Lu(e, t, n, r) {
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
function n_(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ft(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function zm(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function jm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Hm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Tf(e, t) {
  return e != null && e.__panoSceneStateV2 ? xc(an(t)) : JSON.stringify(t);
}
const r_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function i_() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => r_[e & 63]).join("");
}
function Gm(e, t, n, r) {
  const i = Tf(e, t);
  return o_(e, i, n, r) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = i_(), Tf(e, t));
}
function o_(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = an(n);
    if (xc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && xc(Xi(i, o)) === t;
  } catch {
    return !1;
  }
}
function xi(e, t) {
  const n = Gt({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function s_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Df(e, t = 8) {
  var d;
  const n = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const o = n.getImageData(0, 0, r, i).data;
  let s = r, a = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < r; f += 1)
      o[(u * r + f) * 4 + 3] <= t || (f < s && (s = f), u < a && (a = u), f > l && (l = f), u > c && (c = u));
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
function Ru(e, t) {
  return Gt({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Ir(e, t, n) {
  if (!e) return xi(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Rt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Ut(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Dl = null, Ll = null, Lf = null, Rf = null, Lt = null, ro = null;
function a_() {
  if (Ll) return Ll;
  const e = 6, t = 17, n = Gt({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Ll = n, n;
}
function Rl(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Dl = Ir(Dl, n, r);
  const i = Dl;
  Rt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Rf !== i.ctx && (Lf = i.ctx.createPattern(a_(), "repeat"), Rf = i.ctx), i.ctx.fillStyle = Lf, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function l_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function c_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function u_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function d_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const At = /* @__PURE__ */ new Map(), Vu = 128;
function f_(e, t, n, r, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (At.has(l)) {
    const H = At.get(l);
    return At.delete(l), At.set(l, H), H;
  }
  At.size >= Vu && At.delete(At.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Ru(c, c), f = u.getContext("2d"), h = a * s, _ = s + 1, g = `rgba(${n},${r},${i},${o})`, v = `rgba(${n},${r},${i},0)`, y = f.createRadialGradient(d, d, h, d, d, _);
  return y.addColorStop(0, g), y.addColorStop(1, v), f.fillStyle = y, f.fillRect(0, 0, c, c), At.set(l, u), u;
}
function p_(e, t, n, r, i, o, s) {
  const { r: a, g: l, b: c, a: d } = r, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), v = `chisel:${u}:${f}:${n.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${h.toFixed(2)}:${_.toFixed(2)}:${g.toFixed(2)}`;
  if (At.has(v)) {
    const q = At.get(v);
    return At.delete(v), At.set(v, q), q;
  }
  At.size >= Vu && At.delete(At.keys().next().value);
  const y = Ru(u, f), H = y.getContext("2d"), W = H.createImageData(u, f), O = W.data, P = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), Z = 1 + h;
  for (let q = 0; q < f; q++)
    for (let ae = 0; ae < u; ae++) {
      const Se = ae + 0.5 - e, ge = q + 0.5 - t, B = Math.max(Math.abs(Se) - P, 0), pe = Math.hypot(B, ge) / t;
      if (pe >= 1) continue;
      const fe = pe <= R ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - R)), ee = 1 - pe, me = 1 + h * (1 - ee) * (1 - ee), oe = 1 - _ * ee * ee, C = me * oe / Z;
      let G = 1;
      if (g > 0) {
        const A = Math.floor((ge + t) / 1.5), E = Math.floor((Se + e) / 8), w = si(Di(A * 41 + 500, E * 19 + 300));
        G = 1 - g * 0.42 * w;
      }
      const N = Math.round(255 * Math.min(1, d * fe * C * G));
      if (N <= 0) continue;
      const ue = (q * u + ae) * 4;
      O[ue] = a, O[ue + 1] = l, O[ue + 2] = c, O[ue + 3] = N;
    }
  return H.putImageData(W, 0, 0), At.set(v, y), y;
}
function Di(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function si(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function h_(e, t, n, r, i, o, s) {
  const a = e + 0.5 - n, l = t + 0.5 - r, c = Math.max(0, n - r), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / r;
  if (u >= 1) return 0;
  const f = si(Di(e * 17 + 3, t * 13 + 7)), h = u + o * 0.22 * (f - 0.5);
  if (h >= 1) return 0;
  const _ = h <= i ? 1 : Math.max(0, (1 - h) / Math.max(1e-4, 1 - i)), g = m_(e, t, a, l, n, r), v = o * 0.55;
  if (g < v) return 0;
  const H = 0.45 + 0.55 * ((g - v) / Math.max(1e-4, 1 - v));
  return Math.round(255 * Math.min(1, s * _ * H));
}
function m_(e, t, n, r, i, o) {
  const s = Math.floor((n + i) / 3), a = Math.floor((r + o) / 2), l = si(Di(s * 13 + 700, a * 17 + 400)), c = Math.floor((n + i) / 1.5), d = Math.floor((r + o) / 1.5), u = si(Di(c * 23 + 800, d * 29 + 500)), f = si(Di(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function g_(e, t, n, r, i) {
  const { r: o, g: s, b: a, a: l } = r, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${n.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (At.has(f)) {
    const H = At.get(f);
    return At.delete(f), At.set(f, H), H;
  }
  At.size >= Vu && At.delete(At.keys().next().value);
  const h = Ru(c, d), _ = h.getContext("2d"), g = _.createImageData(c, d), v = g.data, y = Math.max(0, Math.min(1, n));
  for (let H = 0; H < d; H++)
    for (let W = 0; W < c; W++) {
      const O = h_(W, H, e, t, y, u, l);
      if (O <= 0) continue;
      const P = (H * c + W) * 4;
      v[P] = o, v[P + 1] = s, v[P + 2] = a, v[P + 3] = O;
    }
  return _.putImageData(g, 0, 0), At.set(f, h), h;
}
function Km(e, t, n) {
  var g, v;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = u_(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = y_(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = d_(t, i), d = String(((v = t == null ? void 0 : t.targetSpace) == null ? void 0 : v.viewMode) || ""), u = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, h = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (r === "chisel") {
    const y = i * a, H = i, W = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), P = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = p_(y, H, o, s, W, O, P);
  } else if (r === "crayon") {
    const y = i * a, H = i, W = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = g_(y, H, o, s, W);
  } else
    _ = f_(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: n, aspect: a, angle: l, stampKind: r, scatter: h, latitudeCorrection: u };
}
function y_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(r.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: o
  };
}
function b_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function Vf(e, t, n, r, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  a(t, n);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, n), t + l > s && a(t - s, n);
}
function $u(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Di(t, n);
    for (let h = 0; h < d; h++) {
      const _ = si(f + h * 2) * Math.PI * 2, g = Math.sqrt(si(f + h * 2 + 1)) * u, v = t + Math.cos(_) * g, y = n + Math.sin(_) * g, H = Math.max(0.5, e.radiusPx * i * 0.48), W = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, O = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(W)) : 1, P = H * e.aspect * O;
      Vf(e, v, y, H, P);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Vf(e, t, n, o, l);
}
function $f(e, t, n) {
  const r = c_(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, s = Km(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < r.length; f++) {
    let h = Number(r[f].u || 0) * i;
    const _ = Number(r[f].v || 0) * o;
    f > 0 && Math.abs(h - a[f - 1].x) > i * 0.5 && (h += h < a[f - 1].x ? i : -i), a.push({ x: h, y: _ });
  }
  if ($u(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const h = a[f], _ = { x: (c.x + h.x) * 0.5, y: (c.y + h.y) * 0.5 };
    f === 1 ? u = Wo(s, d.x, d.y, _.x, _.y, u) : u = ya(s, l, d, _, h, u), l = c, c = h, d = _;
  }
  a.length === 2 ? Wo(s, d.x, d.y, c.x, c.y, u) : ya(s, l, d, c, c, u), e.restore();
}
function zs(e, t, n) {
  var u;
  const r = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, s = b_(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < r.length; f++) {
    const h = l_(r[f]);
    let _ = Number(h.x || 0) * i;
    f > 0 && Math.abs(_ - a[f - 1].x) > i * 0.5 && (_ += _ < a[f - 1].x ? i : -i), a.push({ x: _, y: Number(h.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let h = 1; h < a.length; h++) e.lineTo(a[h].x + f, a[h].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Ms(e, t, n) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    zs(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? $f(e, t, n) : (ro = Ir(ro, n.width, n.height), Rt(ro), $f(ro.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(ro.canvas, 0, 0), e.restore());
}
function Yr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Wo(e, t, n, r, i, o) {
  const s = r - t, a = i - n, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    $u(e, t + s * d, n + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function ya(e, t, n, r, i, o) {
  const a = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, d = 0, u = a, f = u + l, h = f + c, _ = f - u, g = 16;
  let v = o, y = n.x, H = n.y;
  for (let W = 1; W <= g; W++) {
    const O = u + _ * W / g, P = ((u - O) * t.x + (O - d) * n.x) / (u - d), R = ((u - O) * t.y + (O - d) * n.y) / (u - d), Z = ((f - O) * n.x + (O - u) * r.x) / (f - u), q = ((f - O) * n.y + (O - u) * r.y) / (f - u), ae = ((h - O) * r.x + (O - f) * i.x) / (h - f), Se = ((h - O) * r.y + (O - f) * i.y) / (h - f), ge = ((f - O) * P + (O - d) * Z) / (f - d), B = ((f - O) * R + (O - d) * q) / (f - d), _e = ((h - O) * Z + (O - u) * ae) / (h - u), pe = ((h - O) * q + (O - u) * Se) / (h - u), fe = ((f - O) * ge + (O - u) * _e) / (f - u), ee = ((f - O) * B + (O - u) * pe) / (f - u);
    v = Wo(e, y, H, fe, ee, v), y = fe, H = ee;
  }
  return v;
}
function v_(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = n * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const h = Km(i, r, o), _ = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), g = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), v = String((r == null ? void 0 : r.toolKind) || "") === "eraser", y = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", $u(h, c, a, 1), e.activeStroke = {
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
      strokeOpacity: _,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: v,
      layerKind: y,
      pointCount: 1
    }, Ut(e);
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
  l.pointCount === 1 ? l.distSinceStamp = Wo(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = ya(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, Ut(e);
}
function tl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = xi(t, n), s = {
    descriptor: r,
    committedMask: xi(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, a = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: xi(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = xi(t, n);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let h = null;
  function _(B) {
    return {
      actionGroupId: B,
      descriptor: r,
      committedPaint: xi(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(B) {
    let _e = i.get(B);
    return _e || (_e = _(B), i.set(B, _e)), _e;
  }
  function v(B) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(B) {
    var oe;
    const _e = !u || u.length !== B.length || B.some((C, G) => C !== u[G]), pe = d === "paint" && ((oe = c ? i.get(c) : a) == null ? void 0 : oe.activeStroke) || null;
    let fe = s.displayDirty || a.displayDirty || _e;
    for (const C of B) {
      const G = i.get(C);
      if (G != null && G.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (pe && (fe = !0), !fe) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const C of B) {
      const G = i.get(C);
      G && (G.displayDirty = !1);
    }
    u = [...B];
    const ee = l.ctx;
    Rt(l);
    const me = !!(pe != null && pe.isEraser);
    for (const C of B) {
      const G = i.get(C);
      if (!G) continue;
      const ue = c === G.actionGroupId && d === "paint" ? G.activeStroke : null;
      if (me)
        Lt = Ir(Lt, t, n), Rt(Lt), Lt.ctx.drawImage(G.committedPaint.canvas, 0, 0), Yr(Lt.ctx, o.canvas), ee.drawImage(Lt.canvas, 0, 0);
      else if (ee.drawImage(G.committedPaint.canvas, 0, 0), ue) {
        const A = G.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ue.strokeOpacity ?? 1));
        ee.save(), ee.globalAlpha = A, ee.drawImage(o.canvas, 0, 0), ee.restore();
      }
    }
  }
  function H(B) {
    var pe, fe, ee, me, oe;
    for (const C of i.values())
      Rt(C.committedPaint), Rt(C.currentStroke), C.activeStroke = null, Ut(C);
    Rt(s.committedMask), Rt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), Ut(s), Ut(a), u = null;
    const _e = [
      ...Array.isArray((fe = (pe = B == null ? void 0 : B.painting) == null ? void 0 : pe.paint) == null ? void 0 : fe.strokes) ? B.painting.paint.strokes : [],
      ...Array.isArray((me = (ee = B == null ? void 0 : B.painting) == null ? void 0 : ee.mask) == null ? void 0 : me.strokes) ? B.painting.mask.strokes : []
    ];
    for (const C of _e) {
      if (((oe = C == null ? void 0 : C.targetSpace) == null ? void 0 : oe.kind) !== "ERP_GLOBAL") continue;
      const G = String((C == null ? void 0 : C.layerKind) || "paint"), ue = String((C == null ? void 0 : C.toolKind) || "pen") === "eraser";
      if (G === "mask") {
        const A = s.descriptor;
        ue ? (Lt = Ir(Lt, A.width, A.height), Rt(Lt), Ms(Lt.ctx, C, A), Yr(s.committedMask.ctx, Lt.canvas)) : (Ms(s.committedMask.ctx, C, A), s.painted = !0);
        continue;
      }
      if (ue) {
        Lt = Ir(Lt, r.width, r.height), Rt(Lt), Ms(Lt.ctx, C, r);
        for (const A of i.values())
          Yr(A.committedPaint.ctx, Lt.canvas), Ut(A);
      } else {
        const A = String((C == null ? void 0 : C.actionGroupId) || "__default__"), E = g(A), w = E.descriptor;
        Ms(E.committedPaint.ctx, C, w), Ut(E);
      }
    }
    y([...i.keys()]);
  }
  function W(B, _e) {
    d = String((B == null ? void 0 : B.layerKind) || "");
    const pe = String((B == null ? void 0 : B.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Rt(s.currentStroke), s.activeStroke = null, Ut(s);
    else {
      const fe = pe ? a : g(String((B == null ? void 0 : B.actionGroupId) || "__default__"));
      c = pe ? "" : String((B == null ? void 0 : B.actionGroupId) || "__default__"), Rt(fe.currentStroke), fe.activeStroke = null, Ut(fe);
    }
  }
  function O(B, _e) {
    var G;
    const pe = String((B == null ? void 0 : B.layerKind) || "paint"), fe = String((B == null ? void 0 : B.toolKind) || "") === "eraser", ee = pe === "mask" ? s : fe ? a : g(String((B == null ? void 0 : B.actionGroupId) || c || "__default__")), me = ee.activeStroke, oe = ee.descriptor;
    if (me && me.pointCount > 1) {
      const N = ee.currentStroke.ctx;
      N.globalCompositeOperation = "source-over";
      const ue = {
        ctx: N,
        stampTex: me.stampTex,
        radiusPx: me.radiusPx,
        spacingPx: me.spacingPx,
        desc: oe,
        aspect: me.aspect,
        angle: me.angle,
        stampKind: me.stampKind,
        scatter: me.scatter,
        latitudeCorrection: me.latitudeCorrection
      };
      me.pointCount === 2 ? Wo(ue, me.lastMidX, me.lastMidY, me.prev.x, me.prev.y, me.distSinceStamp) : ya(ue, me.pprev, { x: me.lastMidX, y: me.lastMidY }, me.prev, me.prev, me.distSinceStamp);
    }
    ee.lassoPreviewActive && (Rt(ee.currentStroke), zs(ee.currentStroke.ctx, B, oe), ee.lassoPreviewActive = !1);
    const C = pe === "mask" ? s.committedMask : ee.committedPaint;
    if (fe && pe === "paint")
      for (const N of i.values())
        Yr(N.committedPaint.ctx, ee.currentStroke.canvas), Ut(N);
    else if (fe)
      Yr(C.ctx, ee.currentStroke.canvas);
    else {
      pe === "mask" && (s.painted = !0);
      const N = Math.max(0, Math.min(1, (me == null ? void 0 : me.strokeOpacity) ?? 1));
      C.ctx.save(), C.ctx.globalAlpha = N, C.ctx.drawImage(ee.currentStroke.canvas, 0, 0), C.ctx.restore();
    }
    s_() && (String((B == null ? void 0 : B.toolKind) || ""), String((oe == null ? void 0 : oe.kind) || ""), Number((oe == null ? void 0 : oe.width) || 0), Number((oe == null ? void 0 : oe.height) || 0), String(((G = B == null ? void 0 : B.targetSpace) == null ? void 0 : G.viewMode) || ""), Number((B == null ? void 0 : B.aspect) ?? 1), Df(ee.currentStroke.canvas), Df(C.canvas), void 0), Rt(ee.currentStroke), ee.activeStroke = null, Ut(ee), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function P(B) {
    if (d === "mask")
      Rt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Ut(s);
    else if (d === "paint" && !c)
      Rt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, Ut(a);
    else if (c) {
      const _e = i.get(c);
      _e && (Rt(_e.currentStroke), _e.activeStroke = null, _e.lassoPreviewActive = !1, Ut(_e));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function R(B, _e) {
    var fe;
    if (d = String((B == null ? void 0 : B.layerKind) || ""), String(((fe = B == null ? void 0 : B.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Rt(s.currentStroke), zs(s.currentStroke.ctx, B, s.descriptor), s.lassoPreviewActive = !0, Ut(s);
      else {
        const ee = String((B == null ? void 0 : B.toolKind) || "") === "eraser", me = ee ? a : g(String((B == null ? void 0 : B.actionGroupId) || c || "__default__"));
        c = ee ? "" : String((B == null ? void 0 : B.actionGroupId) || c || "__default__"), Rt(me.currentStroke), zs(me.currentStroke.ctx, B, me.descriptor), me.lassoPreviewActive = !0, Ut(me);
      }
      y([...i.keys()]);
    }
  }
  function Z(B) {
    return y(B ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function q(B) {
    return i.get(String(B)) ?? null;
  }
  function ae(B) {
    var N;
    const _e = i.get(String(B));
    if (!_e) return null;
    const pe = d === "paint" && c === _e.actionGroupId, fe = d === "paint" && ((N = c ? i.get(c) : a) == null ? void 0 : N.activeStroke) || null, ee = !!(fe != null && fe.isEraser), me = pe ? _e.activeStroke : null;
    if (!ee && !me) return _e.committedPaint.canvas;
    const oe = `${_e.revision}:${a.revision}:${ee}`, C = f.get(_e.actionGroupId);
    if ((C == null ? void 0 : C.key) === oe) return C.surface.canvas;
    const G = Ir((C == null ? void 0 : C.surface) ?? null, t, n);
    return Rt(G), G.ctx.drawImage(_e.committedPaint.canvas, 0, 0), ee ? Yr(G.ctx, o.canvas) : (G.ctx.save(), G.ctx.globalAlpha = _e.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, me.strokeOpacity ?? 1)), G.ctx.drawImage(o.canvas, 0, 0), G.ctx.restore()), f.set(_e.actionGroupId, { key: oe, surface: G }), G.canvas;
  }
  function Se() {
    const B = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!B || B.isEraser) ? null : `${s.revision}:${!!B}`;
  }
  function ge() {
    const B = Se();
    if (B === null)
      return h = null, null;
    if ((h == null ? void 0 : h.key) === B) return h.surface.canvas;
    const _e = Ir((h == null ? void 0 : h.surface) ?? null, t, n);
    Rt(_e);
    const pe = d === "mask" ? s.activeStroke : null;
    return pe != null && pe.isEraser ? (Lt = Ir(Lt, t, n), Rt(Lt), Lt.ctx.drawImage(s.committedMask.canvas, 0, 0), Yr(Lt.ctx, o.canvas), Rl(_e.ctx, Lt.canvas)) : (Rl(_e.ctx, s.committedMask.canvas), pe && Rl(_e.ctx, o.canvas)), h = { key: B, surface: _e }, _e.canvas;
  }
  return {
    rebuildCommitted: H,
    beginStroke: W,
    appendStrokePoint: v_,
    updateActiveStroke: R,
    commitActiveStroke: O,
    cancelActiveStroke: P,
    getErpTarget: Z,
    ensureTarget: v,
    getGroupTarget: q,
    getGroupDisplayCanvas: ae,
    getMaskDisplayCanvas: ge,
    getMaskDisplayRevision: Se
  };
}
function zu(e, { group: t, raster: n, mask: r = () => null }) {
  if (e.painting_visible === !1) return [];
  const { groups: i, paint: o, raster_objects: s } = e.painting, a = new Set(i.map(Vl)), l = [
    ...i.map((h) => ({ id: `paint_group:${Vl(h)}`, zIndex: $l(h), shown: () => t(Vl(h)) })),
    ...s.filter((h) => h.layerKind === "paint").map((h) => ({ id: `raster:${h.id}`, zIndex: $l(h), shown: () => n(h) }))
  ].sort((h, _) => h.zIndex - _.zIndex), c = [], d = (h, _, g) => {
    g && c.push({ id: h, media: g.media, revision: g.revision, opacity: 1, zIndex: _ });
  };
  for (const h of l) d(h.id, h.zIndex, h.shown());
  const u = Math.max(-1, ...c.map((h) => h.zIndex), ...e.stickers.map($l)) + 1, f = new Set(o.strokes.map((h) => h.actionGroupId).filter((h) => !a.has(h)));
  for (const h of f) d(`paint_group:${h}`, u, t(h));
  return d("mask_display", u, r()), c;
}
function Wm(e) {
  const t = (e == null ? void 0 : e.getMaskDisplayCanvas()) ?? null;
  return t && { media: t, revision: `mask_display:${e.getMaskDisplayRevision()}` };
}
function Vl(e) {
  return String(e.actionGroupId || e.id || "");
}
function $l(e) {
  return Math.trunc(Number(e.z_index) || 0);
}
function Pn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function S_(e, t = 1024) {
  const n = Math.max(1, Math.round(Pn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Pn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function __(e, t, n) {
  const r = Pn(t), i = Pn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const s = Pn(o.u0), a = Pn(o.v0), l = Pn(o.u1), c = Pn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Pn(d.du)) * r,
    centerY: ((a + c) * 0.5 + Pn(d.dv)) * i,
    width: (l - s) * r,
    height: (c - a) * i,
    rotationRad: Pn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Pn(d.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function w_(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
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
function k_() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function r(o, s) {
    let a = e.get(o);
    if (a)
      return e.delete(o), e.set(o, a), !a.settled && typeof s == "function" && a.listeners.add(s), a.image;
    const l = new Image();
    a = { image: l, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, a);
    const c = () => {
      a.settled = !0;
      const d = [...a.listeners];
      a.listeners.clear(), d.forEach((u) => u()), n();
    };
    return l.onload = c, l.onerror = c, l.src = o, n(), l;
  }
  function i(o, s, a, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = __(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = w_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, h = t.get(f);
    if ((h == null ? void 0 : h.revision) === u) return { source: h.source, revision: u };
    const _ = r(c, l), g = Number(_.naturalWidth || _.width || 0), v = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || g < 1 || v < 1) return null;
    const y = Gt({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const H = y.getContext("2d");
    return H ? (d.wrapOffsets.forEach((W) => {
      H.save(), H.translate(d.centerX + W, d.centerY), H.rotate(d.rotationRad), H.scale(d.scale, d.scale), H.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), H.restore();
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
function x_(e, t, n = tl) {
  var l;
  const r = { ...t, painting: M_(e, t.painting) }, i = S_(t.output_preset), o = [];
  let s = null;
  const a = zu(r, {
    group: (c) => {
      s ?? (s = P_(e, r, n));
      const d = s == null ? void 0 : s.getGroupDisplayCanvas(c);
      return d && { media: d, revision: `${e.paintRevisionKey}:${c}` };
    },
    raster: (c) => {
      e.rasterCache ?? (e.rasterCache = k_()), e.rasterReady ?? (e.rasterReady = () => {
        var u, f;
        return (f = (u = e.dom) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
      }), o.push(c.id);
      const d = e.rasterCache.get(c, i.width, i.height, e.rasterReady);
      return d && { media: d.source, revision: d.revision };
    }
  });
  return (l = e.rasterCache) == null || l.retain(o), a;
}
function M_(e, t) {
  return (!e.paintState || e.paintState.painting !== t) && (e.paintState = { painting: t, normalized: pi(t) }), e.paintState.normalized;
}
function P_(e, t, n) {
  const { painting: r } = t;
  if (!r.paint.strokes.length && !r.mask.strokes.length) return null;
  const i = Math.max(1, Number(t.output_preset || 2048)), o = { kind: "ERP_GLOBAL", width: i, height: Math.max(1, Math.round(i * 0.5)) }, s = `${o.width}x${o.height}`;
  return (!e.paintEngine || e.paintDescriptorKey !== s) && (e.paintEngine = n(o), e.paintDescriptorKey = s, e.paintRevision = null), e.paintRevision !== r && (e.paintRevision = r, e.paintRevisionKey = String((Number(e.paintRevisionKey) || 0) + 1), e.paintEngine.rebuildCommitted(t)), e.paintEngine;
}
const zl = 0.15, N_ = 0.01, A_ = 1e-3, C_ = 0.05, I_ = 4, zf = 250, E_ = 16, Gn = 1, Um = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function bn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function rr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function as(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function gi(e, t, n = 0) {
  const r = Qt(e, t, n), i = rr(r, 2);
  return { right: rr(r, 0), up: rr(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function O_(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Pc(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function F_(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Pc(e, "3dof", n);
}
function T_(e) {
  return gi(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function D_(e) {
  return bn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Kr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ao(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ju(e, t) {
  return Ao(Kr(t, e.position), gi(e.yaw_deg, e.pitch_deg).forward);
}
function Hu(e) {
  return Math.max(e, 1e-6) * C_;
}
function Nc(e, t, n = null, r = Gn) {
  if (t) return t;
  const i = Hu(r);
  if (n && ju(e, n) > 0) {
    const o = Kr(n, e.position), s = Math.hypot(...o);
    return s >= i ? n : bn(e.position, o, i / s);
  }
  return bn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Bm(e, t = Gn) {
  return Math.max(e.distance, Hu(t));
}
function Ym(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > I_ ? !1 : t.time - e.time < zf || e.cost > E_ && t.time - e.wheelTime < zf;
}
function Gu(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * ut);
  return { tanX: r, tanY: r * n / t };
}
function qm(e, t, n) {
  const { tanX: r, tanY: i } = Gu(e, t, n);
  return 2 * Math.atan(Math.min(r, i)) * Ot;
}
const wr = 100, L_ = 1.1, R_ = 0.1, V_ = 2 * Math.atan(Math.tan(wr * 0.5 * ut) * 9 / 16) * Ot;
function $_(e) {
  return Number.isFinite(e) && e > 0 ? e : V_;
}
function Xm(e, t) {
  return e / Math.sin($_(t) * 0.5 * ut) * L_;
}
function z_(e) {
  const t = (i) => Array.isArray(i) && i.length === 3 && i.every((o) => typeof o == "number" && Number.isFinite(o));
  if (!e || typeof e != "object" || !t(e.min) || !t(e.max) || e.min.some((i, o) => i > e.max[o])) return null;
  const n = e.min.map((i, o) => (i + e.max[o]) / 2), r = Math.hypot(...e.max.map((i, o) => i - e.min[o])) / 2;
  return { center: n, radius: r };
}
function Jm(e, t, n, r, i, o) {
  const s = Math.hypot(...t), a = t.map((f) => f / s), l = n && n.center.every(Number.isFinite) && Number.isFinite(n.radius) && n.radius >= 0, c = l ? n.center : [0, 0, 0], d = l ? Math.max(Xm(n.radius, i), o) : ag, u = as(Qt(r.yaw_deg, r.pitch_deg, r.roll_deg), c);
  return bn(e, a, d).map((f, h) => f - u[h]);
}
function Zm(e, t, n, r, i = D_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = j_(t, n, o), l = Ft(e.yaw_deg + s / r * 360), c = Te(e.pitch_deg - a / r * 360, -89.9, 89.9), d = Qt(e.yaw_deg, e.pitch_deg, o), u = Qt(l, c, o), f = Kr(e.position, i), h = [0, 1, 2].map((g) => Ao(rr(d, g), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: bn(i, as(u, h)) };
  return { ..._, distance: ju(_, i) };
}
function j_(e, t, n) {
  const r = Math.cos(n * ut), i = Math.sin(n * ut);
  return [e * r + t * i, t * r - e * i];
}
function Qm(e, t, n, r, i, o = e.distance) {
  const { right: s, up: a } = T_(e), l = 2 * o * Gu(e, r, i).tanY / i;
  return { ...e, position: bn(bn(e.position, s, -t * l), a, n * l), distance: o };
}
function eg(e, t, n, r = Gn) {
  const i = Kr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const s = Math.max(r, 1e-6), a = s * N_, l = n > 0 ? Math.min(Math.max(o * zl, a), o - s * A_) : -Math.max(o * zl / (1 - zl), a);
  if (n > 0 && l <= 0) return e;
  const c = { ...e, position: bn(e.position, i, l / o) };
  return { ...c, distance: Math.max(ju(c, t), Hu(r)) };
}
function H_(e, t, n, r) {
  const i = Xm(Math.max(t.radius, 1e-6), qm(e, n, r)), { forward: o } = gi(e.yaw_deg, e.pitch_deg);
  return { ...e, position: bn(t.center, o, -i), distance: i };
}
function Ku(e, t, n, r = null) {
  return tg({
    quaternion: zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Gu(e, t, n).tanY) * Ot,
    aspect: t / n
  }, e.position, e.distance, r);
}
function tg(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: Gn }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Uo(e, t, n, r) {
  const { right: i, up: o, forward: s } = ng(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * ut), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: n * 0.5 * (1 + u / l / d), y: r * 0.5 * (1 - f / l / c), z: l };
}
function ng(e) {
  const t = $o(e.quaternion), n = rr(t, 2);
  return { right: rr(t, 0), up: rr(t, 1), forward: n.map((r) => -r) };
}
function G_(e) {
  return `views:${JSON.stringify(e)}`;
}
function ba(e, t, n) {
  var s;
  const r = (s = t[0]) == null ? void 0 : s.kind;
  if (r === "depth_grid") return W_(e, t[0], n);
  if (!e.length || r !== "splat" && r !== "mesh") return null;
  const i = {}, o = e.map((a) => {
    if (!Array.isArray(a)) return a ? n(a) : null;
    const l = a.filter(Boolean).map(n);
    if (!l.length) return null;
    const c = G_(l);
    return i[c] = l, c;
  });
  return { kind: r, unlit: r !== "mesh" || t[0].unlit !== !1, urls: o, sources: i };
}
const K_ = 8, jf = (e) => Number.isInteger(e) && e > 0;
function W_(e, t, n) {
  const { width: r, height: i, depth: o, intrinsics: s } = t;
  if (!e.length || !jf(r) || !jf(i) || !o || typeof o != "object" || !Array.isArray(s) || s.length !== e.length) return null;
  const a = {}, l = e.map((u, f) => {
    const h = u && !Array.isArray(u) ? n(u) : null;
    return h && (a[h] = { url: h, width: r, height: i, depth: o, intrinsics: s[f] }), h || null;
  }), c = t.video ? n(t.video) : null, d = Number(t.video_fps);
  return { kind: "depth_grid", unlit: !0, urls: l, sources: a, video: c && d > 0 ? { src: c, fps: d } : null };
}
function U_({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Wu(e, t) {
  if (!e || !t.active) return null;
  const n = B_(t.clip_frame, e.urls.length), r = e.kind === "depth_grid", i = n === null ? [] : e.urls.slice(n + 1, n + 1 + (r ? K_ : 1));
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    prefetch: i.filter(Boolean),
    // A depth grid's colors: its proxy MP4 at the item's time (i / video_fps).
    video: r && e.video && n !== null ? { ...e.video, time: n / e.video.fps } : null,
    transform: va(t),
    itemQuaternion: e.kind === "splat" ? Um : { x: 0, y: 0, z: 0, w: 1 },
    unlit: e.unlit !== !1,
    // Where an item of several views loads from (sceneFilesOf).
    sources: e.sources ?? {}
  };
}
function rg(e, t, n) {
  const r = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], s = Wu(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function ig(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function og(e, t) {
  return `file3d:${t}:${e}`;
}
function sg(e, t, n) {
  const r = [];
  return e.stickers.forEach((i, o) => {
    if (i.placement !== "world" || !oi(i.source)) return;
    const s = n(i);
    if (!s) return;
    const a = og(i.id, s.generation), l = t.stickers[o], c = l.active ? {
      kind: s.kind,
      unlit: s.unlit !== !1,
      url: a,
      urls: [a],
      prefetch: [],
      src: s.url,
      transform: va(l),
      itemQuaternion: s.kind === "splat" ? Um : { x: 0, y: 0, z: 0, w: 1 },
      id: i.id,
      opacity: l.opacity,
      value: l
    } : null;
    r.push({ id: i.id, key: a, request: c });
  }), r;
}
function B_(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function va(e) {
  return {
    position: [...e.position],
    quaternion: zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Ac(e, t) {
  return bn(e.position, as(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function uo(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Cc({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Ic(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), r = t.map((o, s) => (o + n[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function Y_(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...Cc(t).map((o) => Ac(e.scene, o)));
  for (const o of n) i.push(...Uu(o));
  for (const { box: o, value: s } of r) i.push(...Cc(o).map((a) => Ac(s, a)));
  return i;
}
function q_(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Qt(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Uu(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => bn(e.position, as(e.rotation, [r, i, 0])));
}
function X_(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Ic(Uu(i)) : o != null && o.box ? Ic(Cc(uo(o.kind, o.box)).map((s) => Ac(r, s))) : { center: [...r.position], radius: r.scale };
}
const ag = 2, J_ = 0.5, Z_ = 30;
function lg(e, t) {
  const n = Kr(t, e), r = Math.atan2(n[0], -n[2]) * Ot, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * Ot;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function Q_(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * J_ : ag, o = t ? [...t] : bn(e.position, gi(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...Kr(o, e.position)), a = s > 0 ? lg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(Z_ * 0.5 * ut);
  return { position: o, rotation: a, scale: l };
}
function ew(e, t) {
  const r = Math.hypot(t[0], t[2]) > 1e-9 ? Math.atan2(t[0], -t[2]) * Ot + 0 : e.yaw_deg;
  return { position: Jm(e.position, t, null, { yaw_deg: r, pitch_deg: 0, roll_deg: 0 }, 0, 0), rotation: { yaw_deg: r, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
}
function Hf(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function tw(e) {
  return [0, 1, 2].map((t) => rr(e, t));
}
function Gf(e, t, n, r) {
  if (e === "translate") return { position: bn(t.position, Kr(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * sw(n.scale, r.scale) / n.scale };
  const i = Hf($o(r.quaternion), tw($o(n.quaternion))), o = Hf(i, Qt(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = nm(o);
  return Math.abs(a) <= nw ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: rw(o, t.yaw_deg) } };
}
const nw = 89.9;
function rw(e, t) {
  const n = rr(e, 0), r = rr(e, 1), i = Math.cos(t * ut), o = Math.sin(t * ut);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * Ot + 0;
}
const iw = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function ow(e, t, n, r, i) {
  if (!Uo(e, t, r, i)) return null;
  const { right: o, up: s, forward: a } = ng(e), l = Kr(t, e.position), c = Ao(l, o), d = Ao(l, s), u = Ao(l, a), f = Math.tan(e.fovY_deg * 0.5 * ut), h = f * e.aspect, _ = Math.hypot(c, d, u) * iw[n] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const g = (O) => {
    const P = _ * Math.sqrt(O * O + u * u - _ * _);
    return [(O * u - P) / (u * u - _ * _), (O * u + P) / (u * u - _ * _)];
  }, [v, y] = g(c), [H, W] = g(d);
  return {
    minX: r * 0.5 * (1 + v / h),
    maxX: r * 0.5 * (1 + y / h),
    minY: i * 0.5 * (1 - W / f),
    maxY: i * 0.5 * (1 - H / f)
  };
}
function sw(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function aw(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function cg(e, t) {
  const n = Qt(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * ut) * t, i = r / e.aspect, o = (c, d, u) => bn(e.position, as(n, [c, d, u])), s = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function lw(e, t, n, r, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Uo(e, s, r, i), c = Uo(e, a, r, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Te(((n.x - l.x) * d + (n.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - n.x, l.y + u * f - n.y) <= o;
  });
}
function cw(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function uw(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [It(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return It(r, "position", l);
  });
}
function dw(e, t, n, r, i) {
  const o = Math.max(0, e) * n, s = Math.max(0, t) * n, a = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const ug = 0.28;
function dg(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * ut);
  return {
    quaternion: zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * Ot,
    aspect: r
  };
}
function Co(e) {
  const t = $r(e);
  return {
    quaternion: zr(Qt(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function fg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = wu(n, r), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * Ot,
      vFOV_deg: 2 * Math.atan(o / r) * Ot
    }
  };
}
function fw(e, t, n, r) {
  const i = t ?? { x: n / 2, y: r / 2 }, { x: o, y: s, z: a } = tm(Bu(e, n, r).ray(i.x, i.y));
  return [o, s, a];
}
function Bu(e, t, n) {
  const [[r, i, o], [s, a, l], [c, d, u]] = $o(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * ut), h = f * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, g = 1e-4) {
      const v = tm(_), y = r * v.x + s * v.y + c * v.z, H = i * v.x + a * v.y + d * v.z, W = -(o * v.x + l * v.y + u * v.z), O = Math.max(W, g);
      return {
        x: t * 0.5 * (1 + y / O / h),
        y: n * 0.5 * (1 - H / O / f),
        z: W
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, g) {
      const v = (_ / t * 2 - 1) * h, y = (1 - g / n * 2) * f;
      return vu(Vs({
        x: r * v + i * y - o,
        y: s * v + a * y - l,
        z: c * v + d * y - u
      }));
    }
  };
}
function pg(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = os(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky" || oi(a.source)) return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = n(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * ut), h = Math.tan(Rm(a, c, mg(u.media)) * 0.5 * ut), { crop: _ } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? ug : c.opacity,
      zIndex: r(a),
      quaternion: zr(Qt(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * h,
        y1: (1 - 2 * _.y0) * h
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function hg(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return pg(e, t, {
    media: (a) => {
      const l = s.get(a.id);
      return l ? r(l) : null;
    },
    zIndex: (a) => {
      var l;
      return Number(((l = s.get(a.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function mg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function gg(e, t, n, { media: r, evaluated: i = os(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of n)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active || oi(a.source)) return;
    const d = o.get(a.id), u = d ? r(d) : null;
    if (!u) return;
    const { width: f, height: h } = mg(u.media), _ = q_(c, a.crop, f, h);
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
function pw({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BT34H8l-.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Bh(a.createThreeView({ onUpdate: r, onSplats: i, createCanvas: () => e }), "editor");
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
    resize(g, v) {
      return l && !f.lost ? l.resize(g, v) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, v) {
      l && !f.lost && l.clear(g, v);
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
    // Why a `scene` or 3D Sticker item failed to load (pano_three_view.js sceneItemError), or null.
    sceneItemError(g) {
      return l ? l.sceneItemError(g) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(g, v, y, H, W) {
      return l && !f.lost ? l.pick(g, v, y, H, W) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, v, y, H, W) {
      return l && !f.lost ? l.pickSurface(g, v, y, H, W) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, v, y, H, W) {
      return l && !f.lost ? l.pickSticker(g, v, y, H, W) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, v, y, H, W, O) {
      return l && !f.lost ? l.gizmoPointer(g, v, y, H, W, O) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", _), l == null || l.dispose(), l = null;
    }
  };
  function h(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function _() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", _), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, n();
  }), f;
}
const yg = "3D view unavailable. Check the browser console.";
function Sa(e, t, n) {
  return dg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function hw(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((s) => {
      if (n = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((a) => a.onChange());
    }).catch((s) => {
      n = !1, i.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((a) => a.onChange()));
    }));
  }
  return function(a) {
    const l = { onChange: a };
    let c = !1;
    return i.add(l), {
      get failed() {
        return r;
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
        c || (c = !0, i.delete(l), t == null || t.release(l), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const bg = hw(
  () => import("./.lazy/pano_three_view-BT34H8l-.js").then((e) => e.$).then((e) => Bh(e.createThreeView({ createCanvas: () => Gt({ label: "three.node" }) }), "node"))
), On = ["erp_image", "bg_erp", "bg_media"], Yu = ["sticker_image", "sticker"], vg = ["scene"], qu = ["sticker", "sticker_state"], mw = {
  background: On,
  "external-sticker": Yu,
  scene: vg,
  "sticker-handoff": qu
};
function Sg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Li(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = Sg(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function Io(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Kf(e, t) {
  var o, s;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((a) => (a == null ? void 0 : a.name) === t);
  let r = n >= 0 && e.graph ? e.getInputLink(n) : null;
  const i = /* @__PURE__ */ new Set();
  for (; r; ) {
    if (r.type && r.type !== "*") return String(r.type);
    const a = e.graph.getNodeById(r.origin_id);
    if (!a || i.has(a)) return "";
    i.add(a);
    const l = (s = (o = a.outputs) == null ? void 0 : o[r.origin_slot ?? 0]) == null ? void 0 : s.type;
    if (l && l !== "*") return String(l);
    if (a.type !== "Reroute") return "";
    r = a.getInputLink(0);
  }
  return "";
}
function _g(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((a) => String(a == null ? void 0 : a.id) === n[o]);
    if (!s || o === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function gw(e, t) {
  const { graph: n, entry: r } = _g(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const a = Sg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const wg = [...On, ...Yu, ...vg, ...qu], yw = 256, Mi = /* @__PURE__ */ new Map(), jl = /* @__PURE__ */ new WeakMap();
let kg = () => null;
function xg(e) {
  return jl.has(e) || jl.set(e, JSON.stringify(e)), jl.get(e);
}
function bw(e) {
  kg = e;
}
function _a(e, t) {
  const n = xg(e);
  Mi.delete(n), Mi.set(n, t), Mi.size > yw && Mi.delete(Mi.keys().next().value);
}
function St(e, t) {
  var o;
  const n = e ? kg(e) : null;
  if (!n) return !0;
  const r = Li(e);
  let i = Mi.get(xg(n));
  if (i)
    _a(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => wg.includes(s == null ? void 0 : s.name)))) return !0;
    _a(n, r), i = r;
  }
  return mw[t].every((s) => i[s] === r[s]);
}
const wa = /* @__PURE__ */ new WeakSet();
async function Ec(e, t) {
  if (wa.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && wa.add(e), n.ok && r !== void 0 ? r : null;
}
function Mg(e, t) {
  var o, s, a, l, c;
  const n = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: r } = _g(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = r == null ? void 0 : r.inputs) != null && c.some((d) => wg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: gw(n, t) };
}
const js = /* @__PURE__ */ new Map();
function vw(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && js.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Ec(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = Mg(i, o);
        s && _a(s.output, s.inputs);
      }
    });
}
const Sw = 5;
function _w(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Sw}`, r = Ec(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Ec(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: h } of await r) {
        if (!a()) return null;
        const _ = await o(h);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : Mg(_, l);
      }
      return null;
    }
  };
}
function ww(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let vi = null;
async function kw(e, t, n) {
  var a;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || wa.has(n) || (a = js.get(i)) != null && a.has(r) || ww(t)) return null;
  (vi == null ? void 0 : vi.workflowId) !== i && (vi = { workflowId: i, history: _w(n, i) }, queueMicrotask(() => {
    vi = null;
  }));
  const s = await vi.history.lastNodeOutput(e, o);
  return o() ? s ? (_a(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (wa.has(n) || js.set(i, (js.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Wf(e, t, n, r = On) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const Uf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Hs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Uf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Uf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Hl = /* @__PURE__ */ new WeakMap();
function xw(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Oc(e) {
  return xw(e) ? (Hl.has(e) || Hl.set(e, Math.random().toString(36).slice(2, 10)), Hl.get(e)) : "run";
}
function Pg(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Mw(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = n(o, a);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), r;
}
function Xu(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const a of s)
      if (Array.isArray(a))
        for (const l of a) {
          const c = r(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function Pw({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Hi(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let o = !1, s = 0;
  const a = typeof r.requestVideoFrameCallback == "function", l = () => {
    o || !a || s || r.paused || r.ended || (s = r.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let h = !1;
  const _ = () => {
    h = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", c, { once: !0 }), r.addEventListener("loadeddata", c, { once: !0 }), a || r.addEventListener("timeupdate", d), r.addEventListener("play", u), r.addEventListener("pause", f), r.addEventListener("error", _), r.src = t, r.load();
  const g = () => {
    o || h || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, v = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var H, W;
      o || (o = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", c), r.removeEventListener("loadeddata", c), r.removeEventListener("timeupdate", d), r.removeEventListener("play", u), r.removeEventListener("pause", f), r.removeEventListener("error", _), r.pause(), (H = r.removeAttribute) == null || H.call(r, "src"), (W = r.load) == null || W.call(r));
    },
    failed: () => h,
    play: g,
    pause: v,
    toggle() {
      r.paused ? g() : v();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
const Bo = /* @__PURE__ */ new WeakMap(), Ng = {
  editorSession: () => ({
    // The modal editor of the node is open; it covers the node surface, which lets its VIDEO go meanwhile.
    open: !1,
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
    paintState: null,
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
function ls(e, t) {
  if (!e || typeof e != "object") return null;
  let n = Bo.get(e);
  return n || (n = {}, Bo.set(e, n)), n[t] ?? (n[t] = Ng[t]());
}
function cs(e, t) {
  var n;
  return e && typeof e == "object" && ((n = Bo.get(e)) == null ? void 0 : n[t]) || null;
}
const Yo = (e) => ls(e, "editorSession"), ct = (e) => ls(e, "nodeSurface"), gr = (e) => ls(e, "previewNode"), ln = (e) => ls(e, "mediaCache"), kn = (e) => ls(e, "stateSync"), Nw = (e) => cs(e, "editorSession"), Fc = (e) => cs(e, "nodeSurface"), Ag = (e) => cs(e, "previewNode"), Gl = (e) => {
  var t;
  return ((t = cs(e, "editorSession")) == null ? void 0 : t.open) === !0;
};
function Kl(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const Aw = {
  editorSession() {
  },
  nodeSurface(e) {
    var t, n, r;
    try {
      (t = e.restore) == null || t.call(e);
    } catch {
    }
    clearTimeout(e.bootMinHeightTimer), clearTimeout(e.resizeSettleTimer), (r = (n = e.rasterCache) == null ? void 0 : n.dispose) == null || r.call(n);
  },
  previewNode(e) {
    var t, n;
    (n = (t = e.runtime) == null ? void 0 : t.teardown) == null || n.call(t);
  },
  mediaCache(e) {
    var t, n, r, i;
    e.linkedImages.forEach((o) => {
      Kl(o == null ? void 0 : o.img), Kl(o == null ? void 0 : o.pendingImg);
    }), (r = (n = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : n.destroy) == null || r.call(n), Kl((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function Cw(e, t) {
  const n = cs(e, t);
  if (n)
    try {
      Aw[t](n);
    } finally {
      delete Bo.get(e)[t];
    }
}
function Iw(e) {
  for (const t of Object.keys(Ng))
    try {
      Cw(e, t);
    } catch (n) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, n);
    }
  e && typeof e == "object" && Bo.delete(e);
}
function qr(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function Ew(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Bf(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (r = a.outputNode);
    } catch {
    }
  return !r && n != null && (r = Ew(e == null ? void 0 : e.graph, n)), r;
}
function Ow(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Fw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Tw(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Cg({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (P) => {
    if (!P) return "";
    if (typeof P == "string") return String(P || "").trim();
    if (Array.isArray(P)) {
      if (P.length === 0) return "";
      if (P.length === 1) return i(P[0]);
      const R = String(P[0] || "").trim();
      if (R)
        return qr(t, {
          filename: R,
          subfolder: String(P[1] || "").trim(),
          type: String(P[2] || "output").trim() || "output"
        });
      for (const Z of P) {
        const q = i(Z);
        if (q) return q;
      }
      return "";
    }
    return typeof (P == null ? void 0 : P.src) == "string" && P.src ? P.src : typeof (P == null ? void 0 : P.url) == "string" && P.url ? P.url : qr(t, P);
  }, o = (P) => {
    if (!P || typeof P != "object") return "";
    const R = String(P.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(P.value || "");
    if (R !== "comfy_image") return "";
    const Z = String(P.filename || "").trim();
    return Z ? qr(t, {
      filename: Z,
      subfolder: String(P.subfolder || ""),
      type: String(P.storage || "input")
    }) : "";
  }, s = (P) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || P == null) return null;
    const Z = String(P);
    return R instanceof Map ? R.get(P) || R.get(Z) || R.get(Number(Z)) || null : R[P] || R[Z] || null;
  }, a = (P, R) => {
    var q;
    const Z = s(P == null ? void 0 : P.id);
    return Array.isArray((q = Z == null ? void 0 : Z.ui) == null ? void 0 : q[R]) ? Z.ui[R] : Array.isArray(Z == null ? void 0 : Z[R]) ? Z[R] : [];
  }, l = (P, R) => {
    const Z = s(P == null ? void 0 : P.id);
    return Z != null && Z.ui && Object.prototype.hasOwnProperty.call(Z.ui, R) ? Z.ui[R] : Z && Object.prototype.hasOwnProperty.call(Z, R) ? Z[R] : null;
  }, c = (P, R) => {
    const Z = l(P, "pano_sticker_input_state_hash"), q = Array.isArray(Z) ? Z[0] : Z;
    return String(q ?? "").trim() || Tw(R);
  }, d = (P) => {
    const R = [], Z = /* @__PURE__ */ new Set();
    for (const q of P || []) {
      const ae = i(q);
      !ae || Z.has(ae) || (Z.add(ae), R.push(ae));
    }
    return R;
  }, u = (P, R) => {
    var ae;
    const Z = [];
    Array.isArray(P == null ? void 0 : P.images) && P.images.length && Z.push(P.images), Array.isArray((ae = P == null ? void 0 : P.ui) == null ? void 0 : ae.images) && P.ui.images.length && Z.push(P.ui.images);
    const q = [];
    for (const Se of Z)
      R >= 0 && R < Se.length && q.push(Se[R]), q.push(...Se);
    return q;
  }, f = (P, R) => {
    var C;
    const Z = String(R || "").trim();
    if (!Z) return { src: "", sourceType: "", inputName: "" };
    const ae = (Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : []).findIndex((G) => String((G == null ? void 0 : G.name) || "") === Z);
    if (ae < 0) return { src: "", sourceType: "", inputName: Z };
    const Se = P.graph ? P.getInputLink(ae) : null;
    if ((Se == null ? void 0 : Se.origin_id) == null) return { src: "", sourceType: "", inputName: Z };
    const ge = Se.origin_id, B = Bf(P, ae, ge);
    if (!B) return { src: "", sourceType: "", inputName: Z };
    const _e = Number(Se.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(B) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const G = [];
      _e >= 0 && _e < pe.length && G.push(pe[_e]), G.push(...pe);
      const N = d(G.filter((ue) => !Hs(ue)));
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "appNodeImageUrls", inputName: Z };
    }
    const fe = s((B == null ? void 0 : B.id) ?? ge), ee = d(u(fe, _e).filter((G) => !Hs(G))).map((G) => `${G}&pano_src=${Oc(fe)}`);
    if (ee.length)
      return { src: ee[0], srcCandidates: ee, sourceType: "nodeOutputs", inputName: Z };
    const me = Array.isArray(B == null ? void 0 : B.imgs) ? B.imgs : [];
    if (me.length) {
      const G = [];
      _e >= 0 && _e < me.length && G.push(me[_e]), G.push(...me);
      const N = d(G);
      if (N.length)
        return { src: N[0], srcCandidates: N, sourceType: "nodeImgs", inputName: Z };
    }
    const oe = (C = B == null ? void 0 : B.widgets) == null ? void 0 : C.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image");
    if (oe) {
      let G = i(oe.value);
      if (G && !G.includes("/") && !G.includes(":") && (B.comfyClass === "LoadImage" || B.type === "LoadImage") && (G = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`), G) return { src: G, sourceType: "widget", inputName: Z };
    }
    return { src: "", sourceType: "", inputName: Z };
  }, h = (P, R = []) => {
    var q;
    const Z = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : [];
    for (const ae of R) {
      const Se = Z.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === ae), ge = Se >= 0 && P.graph ? P.getInputLink(Se) : null;
      if ((ge == null ? void 0 : ge.origin_id) == null) continue;
      const B = s(((q = Bf(P, Se, ge.origin_id)) == null ? void 0 : q.id) ?? ge.origin_id), _e = (Array.isArray(B == null ? void 0 : B.images) ? B.images : []).find(Hs);
      return _e ? `${qr(t, _e)}&pano_src=${Oc(B)}` : "";
    }
    return "";
  }, _ = (P, R = []) => {
    const Z = Array.isArray(R) ? R : [R];
    for (const q of Z) {
      const ae = f(P, q);
      if (String((ae == null ? void 0 : ae.src) || "").trim()) return ae;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (P) => {
    const R = String(P || "").trim();
    if (!R) return [];
    if (Ow(R)) return [R];
    const { filename: Z, subfolder: q } = Fw(R);
    return Z ? d([
      qr(t, { filename: Z, subfolder: q, type: "temp" }),
      qr(t, { filename: Z, subfolder: q, type: "output" }),
      qr(t, { filename: Z, subfolder: q, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (P) => {
      var R;
      try {
        (R = ln(P)) == null || R.linkedImages.forEach((Z, q, ae) => {
          var Se;
          Z != null && Z.img && ((Se = r == null ? void 0 : r.isImageLoadFailed) != null && Se.call(r, Z.img)) && ae.delete(q);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (P, R) => {
      var Z;
      (Z = P == null ? void 0 : P.delete) == null || Z.call(P, `__ui__${String(R || "")}`);
    },
    linkedValue: (P, R) => {
      var ge, B, _e, pe;
      const Z = String(R || ""), q = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === Z) : -1, ae = q >= 0 && P.graph ? P.getInputLink(q) : null;
      if (ae) {
        const fe = s(ae.origin_id), ee = [
          fe == null ? void 0 : fe.output,
          fe == null ? void 0 : fe.result,
          (ge = fe == null ? void 0 : fe.data) == null ? void 0 : ge.output,
          (B = fe == null ? void 0 : fe.data) == null ? void 0 : B.result,
          (_e = fe == null ? void 0 : fe.ui) == null ? void 0 : _e.output,
          (pe = fe == null ? void 0 : fe.ui) == null ? void 0 : pe.result
        ];
        for (const me of ee) {
          if (!Array.isArray(me)) continue;
          const oe = me[Number(ae.origin_slot || 0)];
          if (typeof oe == "string" && oe.trim()) return oe;
        }
      }
      const Se = Array.isArray(P == null ? void 0 : P.widgets) ? P.widgets.find((fe) => String((fe == null ? void 0 : fe.name) || "") === Z) : null;
      return String((Se == null ? void 0 : Se.value) || "");
    },
    linkedVideoFile: h,
    loadPreferredExactLinkedImage: (P, R = [], Z = null, q = "") => {
      var E;
      const ae = Array.isArray(R) ? R : [R], Se = _(P, ae), B = (Array.isArray(Se == null ? void 0 : Se.srcCandidates) && Se.srcCandidates.length ? Se.srcCandidates : [Se == null ? void 0 : Se.src]).map((w) => String(w || "").trim()).filter(Boolean);
      if (!B.length) return null;
      const _e = d(B.flatMap((w) => g(w)));
      if (!_e.length) return null;
      const pe = ln(P).linkedImages, fe = String(q || ae.join("|") || "image_exact"), ee = B.join(`
`), me = pe.get(fe);
      if (me && me.srcRaw === ee && me.img) return me.img;
      const oe = n || globalThis.Image;
      if (typeof oe != "function") return null;
      const C = new oe();
      (E = r == null ? void 0 : r.markImageLoading) == null || E.call(r, C, ee);
      const G = { srcRaw: ee, resolvedSrc: "", img: C };
      pe.set(fe, G);
      let N = -1;
      const ue = (w) => {
        var M, le, ye;
        w === "ready" ? (M = r == null ? void 0 : r.markImageReady) == null || M.call(r, C, ee) : (le = r == null ? void 0 : r.markImageFailed) == null || le.call(r, C, ee), Z == null || Z(C), (ye = P.setDirtyCanvas) == null || ye.call(P, !0, !0);
      }, A = () => {
        if (N += 1, N >= _e.length) {
          ue("failed");
          return;
        }
        G.resolvedSrc = _e[N], C.src = G.resolvedSrc;
      };
      return C.onload = () => ue("ready"), C.onerror = () => {
        if (N + 1 < _e.length) {
          A();
          return;
        }
        ue("failed");
      }, A(), C;
    },
    output: s,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (P, R, Z, q = null) => {
      var fe, ee, me;
      const ae = a(P, R)[0] || null, Se = i(ae);
      if (!Se) return null;
      const ge = `__ui__${R}`, B = (fe = Z == null ? void 0 : Z.get) == null ? void 0 : fe.call(Z, ge);
      if (B && B.__panoSrc === Se) return B;
      const _e = n || globalThis.Image;
      if (typeof _e != "function") return null;
      const pe = new _e();
      return pe.__panoSrc = Se, (ee = r == null ? void 0 : r.markImageLoading) == null || ee.call(r, pe, Se), pe.onload = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageReady) == null || oe.call(r, pe, Se), q == null || q(pe);
      }, pe.onerror = () => {
        var oe;
        (oe = r == null ? void 0 : r.markImageFailed) == null || oe.call(r, pe, Se), q == null || q(pe);
      }, pe.src = Se, (me = Z == null ? void 0 : Z.set) == null || me.call(Z, ge, pe), pe;
    },
    uiList: a,
    uiValue: l
  };
}
function Ig({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let s = null, a = !1, l = !1;
  const c = () => s || e(), d = () => o(n(c()));
  return {
    model: () => n(c()),
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
      return f.changed ? (s = f.state, a = !0, r(s), d(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && a;
    },
    commitGesture() {
      if (l || !s) return !1;
      const u = a;
      return u && i(s), s = null, a = !1, r(null), d(), u;
    },
    cancelGesture() {
      return l || !s ? !1 : (s = null, a = !1, r(null), d(), !0);
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
      s = null, a = !1, u && r(null);
    }
  };
}
const Wi = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, Dw = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Eg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !Wi[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: jr(t.fps) };
}
function Er(e) {
  return structuredClone(e);
}
function Lw(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Rw(e, t, n) {
  const r = e.fps ?? t;
  if (r === t) return e.lanes;
  const i = n.start - n.in, o = Math.floor(i * r / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / r + 0.5) - i }))
  }]));
}
function Ju(e, t, n) {
  const r = Rw(n, e.timeline.fps, t.clip);
  let i;
  if (t.placement === n.placement) {
    i = { ...t };
    for (const o of Wi[n.placement]) t.handoff_overrides.includes(o) || (i[o] = r[o]);
  } else
    i = { ...Object.fromEntries(Dw.map((o) => [o, t[o]])), placement: n.placement, ...r }, n.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return Er(an({ version: 2, stickers: [i] }).stickers[0]);
}
function Vw(e, t) {
  const n = e.stickers.findIndex((r) => r.source.kind === "port");
  return !t || n < 0 ? e : { ...e, stickers: e.stickers.map((r, i) => i === n ? Ju(e, r, t) : r) };
}
function $w(e, t) {
  const n = Wi[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const r = n.filter((i) => !Lw(e[i], t[i]));
  if (r.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...r]);
    e.handoff_overrides = [...n, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function zw(e, t) {
  if (!t || t.id !== e.id) return Er(e);
  if (e.placement === t.placement) {
    const r = Er(e);
    for (const i of Wi[e.placement]) e.handoff_overrides.includes(i) || (r[i] = Er(t[i]));
    return r;
  }
  if (e.handoff_overrides.some((r) => Wi[e.placement].includes(r))) return Er(e);
  const n = Er(t);
  for (const r of ["clip", "visible", "locked", "crop", "opacity"]) n[r] = Er(e[r]);
  return n;
}
function jw(e, t, n, r) {
  return !t.handoff_overrides.includes(r) || t.placement !== n.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== r), t[r] = Er(Ju(e, t, n)[r]), !0);
}
const Gs = "sticker_image_1", Og = "external_image", Ui = 0;
function Ks(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Wl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Rr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Tc(e, t = Ui) {
  return (e == null ? void 0 : e.version) !== 2 ? Rr(e) : Rr(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Wn(n, t).active,
    external: n.source.kind === "port",
    ...Tu(n, t)
  }));
}
function Zu(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Rr(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Fg(e) {
  return String((e == null ? void 0 : e.id) || "") === Gs || String((e == null ? void 0 : e.source_kind) || "") === Og;
}
function Qu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Fg(t);
}
const Tg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Dg(e) {
  return !Fg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Tg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function Lg(e) {
  const t = Dg(e);
  return t ? Tg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Rg(e, t = {}) {
  var O, P, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((Z) => String((Z == null ? void 0 : Z.id) || "") === Gs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const Z = String(((O = e.active) == null ? void 0 : O.selected_sticker_id) || "") === Gs;
    return {
      state: {
        ...e,
        stickers: n.filter((q, ae) => ae !== r),
        active: Z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), h = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = a ? h.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || h.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(_)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const Z = Ks(g, u, f), q = Number(((P = s == null ? void 0 : s.initial_pose) == null ? void 0 : P.hFOV_deg) ?? g), ae = Ks(q, u, f), Se = Number(((R = s == null ? void 0 : s.initial_pose) == null ? void 0 : R.vFOV_deg) ?? ae);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - Z) <= 1e-6 && Math.abs(Se - ae) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((ge, B) => B === r ? {
          ...ge,
          vFOV_deg: Z,
          initial_pose: ge.initial_pose && typeof ge.initial_pose == "object" ? { ...ge.initial_pose, vFOV_deg: ae } : ge.initial_pose
        } : ge)
      },
      changed: !0
    };
  }
  const v = n.reduce((Z, q) => Math.max(Z, Number((q == null ? void 0 : q.z_index) || 0)), -1), y = {
    yaw_deg: Number(h.yaw_deg || 0),
    pitch_deg: Number(h.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Ks(g, u, f) : Number(h.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(h.rot_deg ?? h.roll_deg ?? 0)
  }, H = {
    ...s || {},
    id: Gs,
    source_kind: Og,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: v + 1
  }, W = r >= 0 ? n.map((Z, q) => q === r ? H : Z) : [...n, H];
  return { state: { ...e, stickers: W }, changed: !0 };
}
function ka(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const Hw = ["IMAGE", "VIDEO"], Gw = ["MESH", "SPLAT", "MOGE_GEOMETRY", "DA3_GEOMETRY"];
function Yf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => Gw.includes(n) || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => Hw.includes(n)) ? "2d" : null;
}
function Kw(e, t) {
  var i, o, s, a, l, c;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Yf(r.type) ?? Yf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, r.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : c.type) : null;
}
function Vg(e, { pose: t = null, handoff: n = null } = {}) {
  return {
    connected: ka(e, "sticker"),
    awaitingPose: !t && (ka(e, "sticker_state") || Kw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!n
  };
}
function $g(e) {
  return ka(e, "sticker") && ka(e, "sticker_state");
}
function Ww(e, t) {
  return $g(e) ? Eg(t) : null;
}
function Uw(e, t, n) {
  return Vw(Lm(e, t), Eg(n));
}
function qf(e, t, n = {}) {
  const r = t.keyframes ?? {}, i = {
    ...n,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: r.position ?? [] },
    rotation: { value: t.rotation, keyframes: r.rotation ?? [] },
    scale: { value: t.scale, keyframes: r.scale ?? [] }
  };
  return an({ version: 2, stickers: [i] }).stickers[0];
}
function zg(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((h) => Qu(e, h)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const h = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, g) => g !== o),
        active: h ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky" && !i) {
    const h = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), _ = qf(s.id, r, h);
    return { state: { ...e, stickers: e.stickers.map((g, v) => v === o ? _ : g) }, changed: !0 };
  }
  if (s || n) return { state: e, changed: !1 };
  const a = { ...e }, l = Ko(a);
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, qf(l, r)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), d = Lu(l, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, Rr(e).reduce((h, _) => Math.max(h, _.z_index), -1) + 1), u = (r == null ? void 0 : r.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((h) => ({ ...h, value: { ...h.value, vFOV_deg: h.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function ed(e) {
  const t = Rr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Wl(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Wl(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Wl(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, s) => o.z_index - s.z_index);
}
function jg(e) {
  const t = Zu(e), n = Qu(e, t), r = Rr(e).some((a) => a && a.visible !== !1), i = ed(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Lg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Bw(e) {
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
function Xf(e, t) {
  const n = Zu(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Bw(e), i = String(n.id || ""), o = ed(r), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: r, changed: !0 };
}
function Yw(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function qw(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Rg(e, t.value);
  if (t.type === "sync-port") return zg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = ed(e).reduce((f, h) => Math.max(f, Number(h.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Ks(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, h = Ko(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Lu(h, No(i.asset), d, l + 1)],
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
    return !i || !Rr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Zu(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = Dg(n);
    return !i || !Lg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Xf(e, "front");
  if (t.type === "send-back") return Xf(e, "back");
  if (t.type === "delete-selected") {
    if (Qu(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = Rr({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = Yw(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Tu(n, Ui) : n, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = WS(n, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(n);
      return Vm(c, Ui, l), { state: { ...e, stickers: e.stickers.map((d) => d === n ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === n ? { ...l, ...a } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Xw(e = {}) {
  return Ig({
    ...e,
    reduce: qw,
    projectModel: jg
  });
}
const Ws = 2;
function Qr(e, t) {
  return Math.floor(e * t + 0.5);
}
function Jw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Hg({ video: e, clock: t, fps: n, span: r, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, h = [];
  const _ = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const A of h) A();
    h = [];
  }
  function y(A, E = {}) {
    return v(), f = { name: A, ...E }, l(), f;
  }
  function H(A, E, w) {
    const M = () => {
      f === A && w();
    };
    e.addEventListener(E, M), h.push(() => e.removeEventListener(E, M));
  }
  function W(A, E) {
    let w = t.requestFrame(function M(le) {
      f === A && (E(le), f === A && (w = t.requestFrame(M)));
    });
    h.push(() => t.cancelFrame(w));
  }
  function O(A) {
    c = A, s(c);
  }
  function P() {
    return y(u ? "error" : "idle");
  }
  const R = () => {
    var A;
    return ((A = o()) == null ? void 0 : A.origin) ?? 0;
  }, Z = (A) => (A - R()) / n();
  function q(A) {
    const { start: E = 0, end: w = 1 / 0 } = o() ?? {};
    return A >= E && A < w && !(Z(A) >= Number(e.duration));
  }
  function ae() {
    u = !0, P();
  }
  function Se() {
    const { seekable: A } = e, E = A != null && A.length ? A.end(A.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(Z(c), Number.isFinite(E) ? E : 1 / 0));
  }
  function ge(A) {
    if (!_()) return A === "play" ? ee() : P();
    if (e.readyState < Ws && !e.seeking) {
      const E = y("loading", { then: A });
      return H(E, "loadeddata", () => ge(E.then)), H(E, "error", ae), E;
    }
    return A === "play" && !q(c) ? ee() : o() && !q(c) ? P() : B(A, !1);
  }
  function B(A, E) {
    const w = Se(), M = Qr(Number(e.currentTime), n()) === Qr(w, n());
    if (!e.ended && !e.seeking && M) return _e(A);
    const le = y("seeking", { then: A, target: w, retried: E });
    return H(le, "seeked", () => {
      const ye = Qr(Number(e.currentTime), n()) === Qr(Se(), n()), D = Se() === le.target;
      ye || D && le.retried ? _e(le.then) : B(le.then, D);
    }), H(le, "error", ae), e.seeking && M || (e.currentTime = w), le;
  }
  function _e(A) {
    return A === "play" ? pe() : (a(), P());
  }
  function pe() {
    const A = y("playingVideo", { shown: !1 });
    if (H(A, "pause", () => e.ended ? fe() : C()), H(A, "ended", fe), H(A, "error", ae), i() && !o() && Qr(Number(e.duration), n()) >= r()) {
      const w = e.loop;
      e.loop = !0, h.push(() => {
        e.loop = w;
      });
    }
    const E = (w, M) => {
      M && !A.shown && (A.shown = !0, l()), me(Qr(w + R() / n(), n()));
    };
    if (g()) {
      let w = e.requestVideoFrameCallback(function M(le, ye) {
        f === A && (E(Number(ye.mediaTime), !0), f === A && (w = e.requestVideoFrameCallback(M)));
      });
      h.push(() => {
        var M;
        return (M = e.cancelVideoFrameCallback) == null ? void 0 : M.call(e, w);
      });
    } else
      W(A, () => E(Number(e.currentTime), e.readyState >= Ws));
    return Promise.resolve(e.play()).catch(() => {
      f === A && C();
    }), A;
  }
  function fe() {
    a(), ee();
  }
  function ee() {
    var w;
    const A = y("playingClock", { startTs: t.now(), startFrame: c }), E = ((w = o()) == null ? void 0 : w.start) ?? 0;
    return _() && c < E && e.readyState >= Ws && (e.currentTime = Math.max(0, Z(E))), W(A, (M) => me(A.startFrame + Math.floor(Math.max(0, M - A.startTs) / 1e3 * n()))), A;
  }
  function me(A) {
    if (A < r()) {
      if (o() && f.name === "playingVideo" && !q(A)) {
        v(), e.pause(), O(A), ee();
        return;
      }
      const E = o() && f.name === "playingClock" && _() && A > c && !q(c) && q(A);
      O(A), E && ge("play");
      return;
    }
    if (!i() || r() <= 1) {
      oe(r() - 1);
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), O(0), ge("play");
  }
  function oe(A) {
    f.name === "playingVideo" ? (v(), e.pause(), O(Math.max(0, A)), a()) : O(Math.max(0, A)), ge("still");
  }
  function C() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      v(), e.pause();
      const A = Jw(Number(e.currentTime) + R() / n(), n());
      O(Math.min(A, r() - 1)), a(), c === A ? P() : ge("still");
    } else f.name === "playingClock" && oe(Math.min(c, r() - 1));
  }
  function G() {
    if (!(ue() || r() <= 1)) {
      if (c >= r() - 1 && O(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      ge("play");
    }
  }
  function N(A) {
    const E = Math.max(0, Math.min(Math.round(A), r() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", O(E), l();
      return;
    }
    f.name === "playingVideo" && (v(), e.pause()), O(E), ge("still");
  }
  function ue() {
    return f.name === "playingVideo" || f.name === "playingClock" || f.then === "play";
  }
  return {
    get frame() {
      return c;
    },
    get state() {
      return f.name;
    },
    get playing() {
      return ue();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return f.name === "playingVideo" || f.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return f.name === "playingVideo" && f.shown;
    },
    play: G,
    stop: C,
    seek: N,
    toggle() {
      ue() ? C() : G();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(A) {
      v(), d = !!A, u = !1, ge("still");
    },
    dispose() {
      v(), d = !1, f = { name: "idle" };
    }
  };
}
function nl({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(g) {
    a = g, t();
  }
  function d(g) {
    s = g, e.currentTime = g;
  }
  function u() {
    const g = l;
    f(), l !== g && n();
  }
  function f() {
    if (!r || i || e.readyState < Ws) return;
    const { time: g, playing: v, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (v) {
      if (s !== null) return;
      const H = Number(e.duration), W = Number.isFinite(H) ? Math.min(g, H) : g, O = Math.abs(Number(e.currentTime) - W) > 1.5 / y;
      if (e.ended && !O) return;
      O && d(W), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
      !o.playing || l || (l = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [g, v] of Object.entries(h)) e.addEventListener(g, v);
  function _(g) {
    r = g, i = !1, s = null, a = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: v = null, playing: y = !1, fps: H }) {
      g !== r && (_(g), n()), o = { time: v, playing: y, fps: H }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, v) {
      return !r || i ? v : o.time === null ? null : o.playing && l ? e : a === null ? v : g;
    },
    dispose() {
      for (const [g, v] of Object.entries(h)) e.removeEventListener(g, v);
      _("");
    }
  };
}
function Us(e, t, n = !1) {
  return !t && !n && e.isConnected && e.clientWidth > 0;
}
function Zw({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const h = /* @__PURE__ */ new Set();
  let _ = null, g = null, v = {};
  const y = () => i().timeline.fps, H = (pe) => pe.stickers.find((fe) => fe.source.kind === "port"), W = () => v.bg !== void 0 ? v.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, O = () => v.bg === null ? v.upstreamClip ?? { start: 0, in: 0, duration: null } : i().background.clip, P = () => Fu(i(), {
    ...v,
    bg: W(),
    port: (_ == null ? void 0 : _.meta) ?? v.port ?? null,
    camera: c
  }), R = Hg({
    video: e,
    clock: r,
    fps: y,
    span: P,
    loop: () => !0,
    place: () => {
      const pe = O();
      return pe ? Mm(pe) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), Z = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, q = () => {
    u && (h.add(u), l());
  }, ae = nl({ video: t, onCapture: a, onChange: l }), Se = Ou({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", Z), e.addEventListener("error", q);
  function ge(pe) {
    pe !== u && (u = pe, e.pause(), pe ? e.src = pe : e.removeAttribute("src"), e.load(), R.setSource(!!pe));
  }
  function B() {
    R.playing && R.stop();
  }
  function _e(pe) {
    const fe = H(pe);
    g = _ && fe ? Cu(fe.clip, R.frame, pe.timeline.fps, _.meta) : null, ae.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: g,
      playing: R.advancing,
      fps: pe.timeline.fps
    });
  }
  return {
    get frame() {
      return R.frame;
    },
    get playing() {
      return R.playing;
    },
    get showsVideo() {
      return R.showsVideo;
    },
    get source() {
      return u;
    },
    // Whether the background shows at the playhead (backgroundShownAt); where it does not, the surface shows
    // bg_color, as the node's output does.
    get backgroundShows() {
      const pe = O();
      return v.bg === null ? !pe || Mc(pe, R.frame, y(), v.upstreamMedia ?? null, !0) : !pe || Mc(pe, R.frame, y(), W(), !!v.upstream);
    },
    pause: B,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(pe, fe) {
      return _ != null && _.frames ? Se.picture(_.frames, g, _.meta, fe) : ae.picture(pe, fe);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in, which `upstreamClip`
    // places and `upstreamMedia` ({ video, frames, duration } of its MP4) ends). Out of sight, the node pauses and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: pe, sources: fe, state: ee, sticker: me = null, media: oe = {} }) {
      if (_ = pe ? me : null, v = oe, !pe)
        return B(), ge(""), _e(ee), !1;
      for (const A of h)
        fe.includes(A) || h.delete(A);
      const C = fe.find((A) => A && !h.has(A)) || "", G = C !== d;
      G && (d = C, f = 0), ge(d);
      const N = Om(ee, { camera: c }) || !!d && R.state !== "error" || !!_;
      return N || B(), (G || !N || !R.playing && R.frame >= P()) && R.frame !== Ui && R.seek(Ui), _e(ee), N;
    },
    dispose() {
      R.dispose(), ae.dispose(), e.removeEventListener("loadedmetadata", Z), e.removeEventListener("error", q), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function Qw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const n = t.fps === e.timeline.fps ? t : wm(t, e), r = new Set(n.deleted), i = new Map(n.stickers.map((a) => [a.id, a]));
  let o = Object.keys(n.scene).length > 0 || Object.hasOwn(n, "painting_visible");
  const s = [];
  for (const a of e.stickers) {
    if (r.has(a.id)) {
      o = !0;
      continue;
    }
    const l = i.get(a.id);
    l !== void 0 && l.placement === a.placement ? (s.push({ ...a, ...l }), o = !0) : s.push(a);
  }
  return o ? {
    ...e,
    scene: { ...e.scene, ...n.scene },
    stickers: s,
    painting_visible: Object.hasOwn(n, "painting_visible") ? n.painting_visible : e.painting_visible,
    upstream: []
  } : e;
}
const Gg = "PANO_SCENE";
function Kg(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: an(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function td(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], n = e("pano_upstream_bg_clip")[0], r = an({ version: 2, background: { clip: n == null ? void 0 : n.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: yn(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: Qa(r) || !(Number(n == null ? void 0 : n.fps) > 0) ? null : { clip: r, fps: Number(n.fps) }
  };
}
const ek = "bg_media is not used";
function tk(e, t) {
  return e === Gg && t === null;
}
function fn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function Wg(e) {
  return e.map(({ sceneState: { id: t } }, n) => t && !e.slice(n + 1).some((r) => r.sceneState.id === t) ? t : `#${n}`);
}
function Ug(e, t, n) {
  const r = Wg(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && r[s] === i.id ? t.find((h) => h.layer === i.id) ?? null : null, c = Qw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === n ? u : { ...Xi(u, n), painting: d };
    for (const h of f.stickers)
      h.origin = { layer: r[s], id: h.id }, h.id = nd(r[s], h.id);
    return { key: r[s], sceneState: f, ui: o, received: i };
  });
}
function nd(e, t) {
  return `upstream:${e}:${t}`;
}
function Dc(e, t) {
  return nd(e, t);
}
function Et(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function xa(e) {
  return qo(e.origin.layer);
}
function qo(e) {
  return !e.startsWith("#");
}
function Bg(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? Gr : Hr).map(([r]) => r), ...t ? [] : ["z_index"]];
}
function nk(e) {
  return Object.fromEntries(Bg(e).map((t) => [t, JSON.stringify(e[t])]));
}
function Yg(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function rd(e) {
  return `layer:${e}`;
}
function Jf(e) {
  return new Map(e.flatMap(({ key: t, sceneState: n }) => [
    [rd(t), Yg(n)],
    ...n.stickers.map((r) => [r.id, nk(r)])
  ]));
}
function rk(e, t, n, r, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = wm(o[d], u.timeline.fps === i ? u : Xi(u, i));
    }
    return d;
  };
  return n.forEach(({ key: l, sceneState: c }, d) => {
    if (!qo(l)) return;
    const u = r.get(rd(l));
    if (u) {
      const f = Yg(c), h = ["visible", "clip"].filter((_) => f[_] !== u[_]);
      if (h.length) {
        const _ = a(l, d), g = { ...o[_].scene };
        for (const v of h) g[v] = structuredClone(c.scene[v]);
        o[_] = { ...o[_], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const _ = a(l, d);
        o[_] = { ...o[_], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const h = r.get(f.id);
      if (!h) continue;
      const _ = Bg(f).filter((O) => JSON.stringify(f[O]) !== h[O]);
      if (!_.length) continue;
      const g = a(l, d), { id: v } = f.origin, y = [...o[g].stickers], H = y.findIndex((O) => O.id === v), W = H >= 0 && y[H].placement === f.placement ? { ...y[H] } : { id: v, placement: f.placement };
      for (const O of _) W[O] = structuredClone(f[O]);
      H >= 0 ? y[H] = W : y.push(W), o[g] = { ...o[g], stickers: y };
    }
  }), s ? an({ version: 2, upstream: o }).upstream : e;
}
function ik(e, t, n) {
  const r = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!qo(i)) return;
    const a = t.find((d) => d.layer === i), l = n.get(rd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && r.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((h) => h.id === d.origin.id && h.placement === d.placement && Object.hasOwn(h, "clip")), f = n.has(d.id) && n.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && r.push({ index: s, clip: d.clip, sticker: d });
    }
  }), r;
}
function qg(e, t, n, r, i, o = null) {
  return ik(e, t, n).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? r(s) : null;
    return c ? [Iu({ ...a, duration: null }, i, c)] : [];
  });
}
function rl(e, t, n, r) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(r({ layer: t, fps: n, deleted: [], stickers: [], scene: {} })) : o[i] = r(o[i]), an({ version: 2, upstream: o }).upstream;
}
function ok(e, t, n) {
  return t.reduce((r, { layer: i, id: o }) => rl(r, i, n, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const sk = new Set([...Hr, ...Gr].map(([e]) => e));
function Xg(e, { layer: t, id: n }) {
  var r;
  return ((r = e.find((i) => i.layer === t)) == null ? void 0 : r.stickers.find((i) => i.id === n)) ?? null;
}
function ak(e, t, n = null) {
  const { origin: r } = t, i = Xg(e, r);
  return !i || n !== null && !(sk.has(n) && i.placement === t.placement && Object.hasOwn(i, n)) ? e : rl(e, r.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== r.id) return [s];
      if (n === null) return [];
      const a = { ...s };
      return delete a[n], [a];
    })
  }));
}
function lk(e, t) {
  var r;
  const n = new Set((r = e.find((i) => i.layer === t.key)) == null ? void 0 : r.deleted);
  return t.received.stickers.filter((i) => n.has(i.id)).length;
}
function ck(e, t) {
  var n;
  return (n = e.find((r) => r.layer === t)) != null && n.deleted.length ? rl(e, t, null, (r) => ({ ...r, deleted: [] })) : e;
}
function Jg(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function uk(e, t) {
  return Jg(e.find((n) => n.layer === t)) ? rl(e, t, null, ({ painting_visible: n, ...r }) => ({ ...r, scene: {} })) : e;
}
function dk(e, t) {
  const n = Wg(t), r = new Map(t.flatMap(({ sceneState: s }, a) => n[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = r.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? an({ version: 2, upstream: o }).upstream : e;
}
function fk(e, t, n, { media: r, paintLayers: i, source: o, editorFile: s = null }) {
  const { sceneState: a, ui: l, received: c } = e, d = os(a, n), u = (y) => y.visible ? r(y) : null, f = pg(a, n, { media: u, zIndex: (y) => y.z_index, paintLayers: i, evaluated: d }).map((y) => y.kind === "erp" ? { ...y, id: nd(t, y.id) } : y), h = gg(a, n, a.stickers, { media: u, evaluated: d }), _ = [], g = ba(fn(l, "pano_scene_files"), fn(l, "pano_scene_meta"), o);
  g && _.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: Wu(g, d.scene), value: d.scene, opacity: 1 });
  const v = ba(fn(l, "pano_sticker_files"), fn(l, "pano_sticker_meta"), o);
  if (v) {
    const y = rg(v, a, d);
    _.push({ slot: `${t}:sticker`, urls: ig(v, c), request: y, value: (y == null ? void 0 : y.value) ?? null, opacity: (y == null ? void 0 : y.opacity) ?? 1 });
  }
  for (const y of s ? sg(a, d, s) : []) {
    const { request: H } = y, W = a.stickers.find((O) => O.id === y.id);
    _.push({ slot: `${t}:file:${y.id}`, urls: [y.key], request: H, value: (H == null ? void 0 : H.value) ?? null, opacity: (H == null ? void 0 : H.opacity) ?? 1, source: W.source });
  }
  return { evaluated: d, sky: f, stickers: h, items: _ };
}
const Ma = Math.PI / 180, tr = 180 / Math.PI, pk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), hk = 260;
function Zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Zg(e, t) {
  return t ? Zg(t, e % t) : e;
}
function mk(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Zg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Xo(e, t) {
  const n = Zf(e), r = Zf(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: mk(n, r) };
}
function ai(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Qg(e) {
  const t = ai(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? mr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function id(e, t, n = pk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), c = (v, y, H) => {
    const W = v + y, O = Math.max(0, H - 1), P = W > O && W > 0 ? O / W : 1;
    return [v * P, y * P];
  }, [d, u] = c(l, s, r), [f, h] = c(o, a, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, r - d - u),
    h: Math.max(1, i - f - h)
  }, g = Su(_, t);
  return {
    x: _.x + (_.w - g.width) * 0.5,
    y: _.y + (_.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: _
  };
}
function gk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = id({ width: n, height: r }, 1), o = Te(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(o * Ma * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = em(l, Xh(
    { x: n * 0.5, y: r * 0.5 },
    s,
    a
  )), d = yk(c, qi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = _u({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function e0(e) {
  return {
    yaw: Ft(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * tr),
    pitch: Te(Math.asin(Te(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * tr, -89.9, 89.9)
  };
}
function yk(e, t) {
  const n = e0(e), r = qi(n.yaw, n.pitch, 0), i = Ml(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...n, roll: 0 };
  const a = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...n,
    roll: qa(Math.atan2(
      Ml(a, r.up),
      Ml(a, r.right)
    ) * tr)
  };
}
function t0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = id({ width: n, height: r }, hi(e)), o = ui(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = em(e, Xh(
    s,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = e0(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Te(2 * Math.atan(n / (2 * o)) * tr, 1, 179)
  };
}
function bk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = ui(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = wu(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= r && u.y + u.h >= i, h = r / i, _ = Math.tan(yc * Ma), g = h >= 1 ? _ : _ * h, v = h >= 1 ? _ / h : _;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(c / a) * tr,
      vFOV_deg: 2 * Math.atan(d / a) * tr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(g) * tr,
        vFOV_deg: 2 * Math.atan(v) * tr
      }
    }
  };
}
function Si(e, t) {
  const n = ai(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === n ? r : i)
    },
    changed: !0
  };
}
function vk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = ui(n, e);
    return _u(Su(n, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Rs(o, t) };
}
function Qf(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = Xo(t, n);
  if (!o) return e;
  const s = hi(e) >= 1;
  r && o.ratio >= 1 !== s && (o = Xo(o.height, o.width));
  const a = vk(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function n0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ai(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = Jh({
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
        shots: [i],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = ai(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== r), o = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
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
    return Si(e, (r) => Qf(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Si(e, (r) => {
      const o = String(mr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Xo(o[1], o[2]) : Xo(hi(r), 1);
      return s ? Qf(r, s.height, s.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Si(e, (i) => {
      const o = qa(r), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Si(e, (r) => {
    const i = Zh(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Si(e, (r) => {
    const i = Qh(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Si(e, (r) => {
    const i = o0(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function r0({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const a = o && i ? "alt" : r ? "shift" : "";
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
    startRollDeg: Number(n || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function i0(e, t, n = {}) {
  var s, a;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Yh(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: qh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function o0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ma, l = Math.cos(a), c = Math.sin(a), d = o / n, u = -s / n, f = d * l - u * c, h = d * c + u * l, _ = Number(e.pitch_deg || 0) * Ma, g = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Ft(Number(e.yaw_deg || 0) - Math.atan(f) / g * tr),
    pitch_deg: Te(Number(e.pitch_deg || 0) - Math.atan(h) * tr, -90, 90)
  };
}
function Sk({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Ig({
    readState: e,
    reduce: n0,
    projectModel: Qg,
    publishLiveState: t,
    commitState: n,
    onChange: r
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
}), _k = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, wk = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: _k(t[2])
})), kk = {
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
  Object.entries(kk).map(([e, t]) => [e, {
    name: t.name,
    elements: wk(t.body)
  }])
), Mt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = rt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(ep, r) ? ep[r] : null;
    });
    return (r, i) => n.value ? (Fe(), Le("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: at(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Fe(!0), Le(Xe, null, mt(n.value.elements, (o, s) => (Fe(), Le(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Fe(), Le("path", dr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Fe(), Le("circle", dr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Fe(), Le("rect", dr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Fe(), Le("line", dr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Fe(), Le("polyline", dr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Fe(), Le("polygon", dr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : nt("", !0)
      ], 64))), 128))
    ], 2)) : nt("", !0);
  }
}, Ht = {
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
    const t = e, n = rt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Fe(), gn(Hb(e.tag), dr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: hh(() => [
        Ye(Mt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, xk = ["aria-expanded", "disabled"], Mk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Pk = ["data-aspect", "disabled", "onClick"], Nk = { class: "pano-cutout-aspect-custom" }, Ak = ["disabled"], Ck = ["disabled"], Ik = ["data-custom-width", "data-custom-height", "disabled"], s0 = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ Vt("1"), s = /* @__PURE__ */ Vt("1"), a = /* @__PURE__ */ Vt(null), l = rt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), c = rt(() => {
      const g = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], v = String(n.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const H = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), W = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || H);
        return {
          ...typeof y == "object" && y ? y : {},
          value: H,
          label: W,
          active: v ? H === v : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === v
      }));
    }), d = rt(() => {
      var v;
      const g = String(n.model.aspectLabel || "").trim();
      return g || String(((v = c.value.find((y) => y.active === !0)) == null ? void 0 : v.label) || "Aspect");
    });
    ii(d, (g) => {
      const v = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      v && (o.value = v[1], s.value = v[2]);
    }, { immediate: !0 });
    function u(g) {
      r("action", g);
    }
    function f(g) {
      var v;
      n.model.aspectOpen === !0 && ((v = a.value) != null && v.contains(g.target) || u({ type: "close-aspect" }));
    }
    Wa(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ns(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function h(g) {
      const [v, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: v,
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
    return (g, v) => (Fe(), Le("div", {
      ref_key: "rootElement",
      ref: a,
      class: at(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Fe(), gn(Ht, {
        key: 0,
        icon: e.model.aspectIcon || Ze(He).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: v[0] || (v[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Fe(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: v[1] || (v[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Ye(Mt, {
          icon: e.model.aspectIcon || Ze(He).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, Je(d.value), 1),
        Ye(Mt, {
          icon: Ze(He).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, xk)),
      br(Ne("div", Mk, [
        (Fe(!0), Le(Xe, null, mt(c.value, (y) => (Fe(), Le("button", {
          key: y.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (H) => h(y)
        }, Je(y.label), 11, Pk))), 128)),
        Ne("div", Nk, [
          br(Ne("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, Ak), [
            [Sf, o.value]
          ]),
          v[4] || (v[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          br(Ne("input", {
            "onUpdate:modelValue": v[3] || (v[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Ck), [
            [Sf, s.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, Ik)
        ])
      ], 512), [
        [ci, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Ek = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Ok = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Vt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Fe(), Le("div", {
      class: at(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = ht(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = ht(() => {
      }, ["stop"]))
    }, [
      Ye(Ht, {
        icon: Ze(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = ht((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Ek, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Xe, null, mt(Ze(n), (o) => (Fe(), Le("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, Je(o[0]), 1),
          Ne("span", null, Je(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Fk = {
  class: "pano-view-unavailable",
  role: "status"
}, il = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Fe(), Le("div", Fk, Je(Ze(yg)), 1));
  }
}, Tk = { class: "pano-cutout-node-surface" }, Dk = ["title", "disabled"], Lk = { class: "value" }, Rk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Vk = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var i;
      (i = t.onAction) == null || i.call(t, r);
    }
    return (r, i) => (Fe(), Le("div", Tk, [
      Ne("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = ht(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = ht(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          Ye(Mt, {
            icon: Ze(He).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ye(Ht, {
          icon: e.model.hasShot ? Ze(He).delete : Ze(He).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(s0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        Ne("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = ht((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ye(Mt, {
            icon: Ze(He).roll
          }, null, 8, ["icon"]),
          Ne("span", Lk, Je(e.model.rollLabel || "0.0°"), 1)
        ], 40, Dk),
        Ye(Ht, {
          icon: Ze(He).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(Ok)
      ], 32),
      e.model.hasShot === !1 ? (Fe(), Le("div", Rk, " Choose a view · + Add Frame ")) : nt("", !0),
      e.model.viewUnavailable ? (Fe(), gn(il, { key: 1 })) : nt("", !0)
    ]));
  }
}, a0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Vt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u, f = "image/*") {
      const h = i.value;
      return h instanceof HTMLInputElement ? (o = u, s = !0, h.accept = f, h.value = "", h.click(), !0) : !1;
    }
    function c(u) {
      var g, v;
      const { active: f, intent: h } = a();
      if (!f) return;
      const _ = ((v = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : v[0]) || null;
      if (_) {
        r("file-selected", { intent: h, file: _ });
        return;
      }
      r("file-cancelled", { intent: h });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && r("file-cancelled", { intent: f });
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
}, $k = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, zk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Vt(!1), n = Object.freeze([
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
    return (r, i) => (Fe(), Le("div", {
      class: at(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = ht(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = ht(() => {
      }, ["stop"]))
    }, [
      Ye(Ht, {
        icon: Ze(He).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = ht((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", $k, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Le(Xe, null, mt(Ze(n), (o) => (Fe(), Le("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, Je(o[0]), 1),
          Ne("span", null, Je(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, jk = { class: "pano-stickers-node-surface" }, Hk = ["disabled"], Gk = ["aria-label", "data-tip"], Kk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Wk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Uk = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Vt(null);
    function r(s) {
      var a;
      (a = t.onAction) == null || a.call(t, s);
    }
    function i() {
      var s, a;
      (a = (s = n.value) == null ? void 0 : s.open) == null || a.call(s, "add");
    }
    function o(s) {
      r({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, a) => (Fe(), Le("div", jk, [
      Ne("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = ht(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = ht(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => r({ type: "open-editor" }))
        }, [
          Ye(Mt, {
            icon: Ze(He).fullscreen
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
          Ye(Mt, {
            icon: Ze(He).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, Hk),
        Ye(Ht, {
          icon: e.model.locked ? Ze(He).lock_closed : Ze(He).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ye(Ht, {
          icon: Ze(He).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(Ht, {
          icon: Ze(He).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ye(Ht, {
          icon: e.model.isExternalSelection ? Ze(He).back_initial : Ze(He).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ye(zk)
      ], 32),
      e.model.playable === !0 ? (Fe(), Le("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = ht(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = ht(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => r({ type: "toggle-playback" }))
      }, [
        Ye(Mt, {
          icon: e.model.playing ? Ze(He).pause : Ze(He).play
        }, null, 8, ["icon"])
      ], 40, Gk)) : nt("", !0),
      e.model.hasStickers === !1 ? (Fe(), Le("div", Kk, " Add Image to place a sticker ")) : nt("", !0),
      e.model.dropActive === !0 ? (Fe(), Le("div", Wk, "Drop image to add")) : nt("", !0),
      Ye(a0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Fe(), gn(il, { key: 3 })) : nt("", !0)
    ]));
  }
}, Bk = { class: "pano-studio-node-surface" }, Yk = {
  class: "pano-studio-node-status",
  role: "status"
}, qk = { class: "pano-studio-node-shot" }, Xk = { class: "pano-studio-node-size" }, Jk = { class: "pano-studio-node-note" }, Zk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Fe(), Le("div", Bk, [
      Ne("div", {
        class: "pano-studio-node-bar",
        onPointerdown: r[1] || (r[1] = ht(() => {
        }, ["stop"])),
        onWheel: r[2] || (r[2] = ht(() => {
        }, ["stop"]))
      }, [
        Ne("div", Yk, [
          Ne("span", qk, Je(e.model.status.shot), 1),
          Ne("span", Xk, Je(e.model.status.size), 1),
          Ne("span", Jk, Je(e.model.status.note), 1)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: r[0] || (r[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ye(Mt, {
            icon: Ze(He).fullscreen
          }, null, 8, ["icon"]),
          r[3] || (r[3] = Ne("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Fe(), gn(il, { key: 0 })) : nt("", !0)
    ]));
  }
}, Qk = 2048, Lc = 4096, ex = (e) => Math.floor(e + 0.5), Ps = (e) => Math.max(2, 2 * ex(e / 2));
function l0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function tx(e) {
  const t = Fu(e, { camera: !0 });
  return t === Fm ? [] : Array.from({ length: t }, (n, r) => r);
}
function nx(e, t, n, r, i) {
  const o = n === "auto" && i == null;
  let s;
  n !== "auto" ? s = Number(n) : o ? s = Qk : s = Math.floor(i * 360 / r);
  const a = l0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * r / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((h) => Xa(a, h).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Ps(c), Ps(d)];
  if (Math.max(...u) <= Lc) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Lc / Math.max(c, d);
  return { width: Ps(c * f), height: Ps(d * f), reducedFrom: u, defaulted: o };
}
function c0(e, t, n, r) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${n}\0${r}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function rx({ stateText: e = "", outputSize: t, coverage: n, bgColor: r = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === c0(e, t, String(n), r) } : null;
}
function ix(e) {
  return e ? zr(Qt(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Ul = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function ox(e, { stateText: t = "", outputSize: n, coverage: r, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = l0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${r}°` : "Camera · Perspective");
  let d;
  if (s && s.key === c0(t, n, String(r), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: n === "auto" && o === null };
  else {
    if (n === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Ul[a] };
    d = nx(e, tx(e), n, r, o);
  }
  const u = Ul[a] ? [Ul[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Lc} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function sx() {
  let e = null;
  return (t, n) => {
    const r = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", r === void 0 ? "pending" : r, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, ox(n(), { ...t, bgWidth: r }));
  };
}
const tp = 24;
function ax(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Eo(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function u0(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Rc(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Eo(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Eo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : u0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function lx(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => Eo(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = r ? e.corners.findIndex((s) => Eo(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Eo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : u0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function od(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function d0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function io(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Te(n.x, -r, t.width + r),
    y: Te(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function cx(e) {
  const t = qi(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Te(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * ut * 0.5),
    tanY: Math.tan(Te(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * ut * 0.5)
  };
}
function Xr(e, t, n) {
  return vu(sa(
    sa(e.centerDir, aa(e.right, t)),
    aa(e.up, n)
  ));
}
function sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = cx(e), r = io(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    Xr(n, -n.tanX, n.tanY),
    Xr(n, n.tanX, n.tanY),
    Xr(n, n.tanX, -n.tanY),
    Xr(n, -n.tanX, -n.tanY)
  ].map((f) => io(f, t)), o = Array.from({ length: 4 }, (f, h) => {
    const _ = [];
    for (let g = 0; g <= 28; g += 1) {
      const v = g / 28;
      let y, H;
      h === 0 ? (y = -n.tanX + 2 * n.tanX * v, H = n.tanY) : h === 1 ? (y = n.tanX, H = n.tanY - 2 * n.tanY * v) : h === 2 ? (y = n.tanX - 2 * n.tanX * v, H = -n.tanY) : (y = -n.tanX, H = -n.tanY + 2 * n.tanY * v);
      const W = io(Xr(n, y, H), t);
      W && _.push({ x: W.x, y: W.y });
    }
    return _;
  }), s = io(Xr(n, 0, n.tanY), t), a = io(
    Xr(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), l = [r, ...i, s, a];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = a.x - s.x, d = a.y - s.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: r.x, y: r.y },
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
function np(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: sd(s, r) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Rc(o.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Rc(s.geometry, n);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function ux(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ft(Math.atan2(r.x, r.z) * Ot),
    pitch_deg: Math.asin(Te(r.y, -1, 1)) * Ot
  };
}
function dx(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Te(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Te(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function fx(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * Ot;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ns = null;
function ad() {
  return Ns || (Ns = new Promise((e) => {
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
  }), Ns);
}
function px(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function hx(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function mx({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = r.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, h, _) {
    if (!u || typeof _ != "function" || h.settled) return;
    let g = r.get(u);
    g || (g = /* @__PURE__ */ new Map(), r.set(u, g));
    const v = g.get(f);
    if ((v == null ? void 0 : v.entry) === h) {
      v.callback = _;
      return;
    }
    o(v);
    const y = { owner: u, key: f, entry: h, callback: _ };
    g.set(f, y), h.listeners.add(y);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && n.get(u.key) === u && n.delete(u.key), [...u.listeners].forEach((h) => {
      o(h);
      try {
        h.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(n.size <= u))
      for (const [f, h] of n) {
        if (n.size <= u) break;
        !h.settled || h.listeners.size > 0 || (h.image.onload = null, h.image.onerror = null, n.delete(f));
      }
  }
  function c(u, f, h, _ = null) {
    const g = String(f || ""), v = String(h || "");
    if (!g || !v) return null;
    let y = n.get(g);
    if (y)
      n.delete(g), n.set(g, y);
    else {
      l(i - 1);
      const W = e || globalThis.Image;
      if (typeof W != "function") return null;
      const O = new W();
      y = { key: g, image: O, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(g, y), O.onload = () => a(y, !0), O.onerror = () => a(y, !1), O.src = v;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, _), y.image;
  }
  function d(u) {
    const f = r.get(u);
    f && ([...f.values()].forEach(o), r.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const fo = /* @__PURE__ */ new WeakMap();
function f0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = fo.get(e);
  r || (r = [], fo.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = fo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && fo.delete(e);
  };
}
function Tr(e, ...t) {
  const n = fo.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Bs = Object.freeze({
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
}), p0 = "PanoramaSuite.Editor.ViewControls", gx = {
  id: p0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Bs).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function yx(e) {
  return Object.hasOwn(Bs, e) ? Bs[e] : Bs.default;
}
function bx(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === n && !!a.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function vx(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Pa = "state_json";
function yr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function Sx(e) {
  var s, a;
  const t = yr(e, Pa);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Dm(n, {
    coverage: (s = yr(e, "coverage")) == null ? void 0 : s.value
  }), i = n0(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function ld(e, t) {
  if (!e || kn(e).coverageSyncInstalled) return;
  const n = yr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, l, c, d, u, f, h, _, g;
    const o = r ? r(...i) : void 0, s = kn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = gr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = ct(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (g = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || g.call(_, !0, !0), o;
  }, kn(e).coverageSyncInstalled = !0;
}
function _x(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function rp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function wx(e) {
  var d, u, f, h, _, g;
  if (!e) return;
  const t = yr(e, "coverage"), n = yr(e, "bg_color"), r = yr(e, Pa), i = yr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), a = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && _x(o) && (rp(s) || s === ""))) return;
  let c = "360";
  if (rp(s))
    try {
      c = String(yn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), n.value = o, (f = n.callback) == null || f.call(n, o), r.value = s, (h = r.callback) == null || h.call(r, s), i && (i.value = a, (_ = i.callback) == null || _.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ys(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function Vc(e, t, n) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((a) => String((a == null ? void 0 : a.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const a = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(a) || Number(a[0] || 0) <= 0 || Number(a[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function kx(e, { tolerateOperationFailure: t = !1 } = {}) {
  var r;
  const n = (r = kn(e)) == null ? void 0 : r.pendingStickerUploads;
  if (n)
    for (; n.size > 0; ) {
      const i = Array.from(n.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        n.get(o) === s && n.delete(o);
      });
    }
}
function Pi(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const r = kn(e), i = r.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => n()), a = s.catch(() => {
  });
  r.stickerOperationTail = a, r.pendingStickerUploads.set(t, s);
  const l = () => {
    r.pendingStickerUploads.get(t) === s && r.pendingStickerUploads.delete(t);
  };
  return s.then(l, l), a.then(() => {
    r.stickerOperationTail === a && (r.stickerOperationTail = null);
  }), s;
}
async function h0(e, t = {}) {
  var r, i, o;
  await kx(e, t);
  const n = Array.from(((r = kn(e)) == null ? void 0 : r.flushers) ?? []);
  for (const s of n) await s();
  await ((o = (i = Yo(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function xx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await h0(e), n ? n.apply(this, r) : this.value;
  };
}
function Mx(e) {
  var n;
  const t = ct(e);
  try {
    (n = t.restore) == null || n.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function m0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return Iw(this), n;
  };
}
function Px(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Bl(e, {
  app: t,
  matchType: n,
  buttonText: r,
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
    const f = `editor_btn|${n}`, h = ct(u);
    if (h.attached === !0 && h.mountKey === f) return;
    Mx(u), ld(u, t), Ys(u, Pa);
    const _ = yr(u, Pa);
    if (xx(u, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const v = _.callback;
      _.callback = (y) => {
        var W;
        const H = v ? v(y) : void 0;
        return (W = u.setDirtyCanvas) == null || W.call(u, !0, !1), H;
      };
    }
    if (n === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const v = yr(u, "bg_color");
      !l && v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (g = v.callback) == null || g.call(v, "#00ff00")), Vc(u, r, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(u, "stickers")
      }), h.stickers && Ys(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), h.attached = !0, h.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Vc(u, r, () => i(u, "cutout")), s(u, {
      buttonText: r,
      onOpen: () => i(u, "cutout")
    }), h.cutout && Ys(u, r), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), h.attached = !0, h.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const h = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && n === "PanoramaCutout" && Sx(this), u === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && wx(this);
      const _ = ct(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && Tr(this, "attach"), h;
    };
  }
  m0(e);
}
function Nx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return Px(this), r;
  }, m0(e);
}
function Ax(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  const o = gr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (gr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    ld(e, t);
    const c = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Vc(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ys(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function Cx({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: a = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [gx, _1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Nf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Nf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Bl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Bl(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Bl(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: a
      }), la(d) && Nx(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      ct(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      ld(l, e), la(c) && Ax(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const Ix = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Cn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Ix.test(String(e.name || "")) : !1;
}
function cd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Cn(n)) : !1;
}
function Ex(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (cd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, s = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || n(!1);
  }, a = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => Cn(u));
    if (!c) {
      n(!1);
      return;
    }
    i(l), n(!1), r(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", a, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", a, !0), n(!1);
  };
}
async function po(e, t = {}) {
  var s, a, l, c;
  if (!Cn(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const d = await new Promise((u, f) => {
      const h = new n();
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
async function ei(e, { fetchApi: t } = {}) {
  if (!Cn(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const i = await r.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const ip = 100 * 1024 * 1024, Ox = ["image/*", ...ym].join(",");
function Na(e) {
  return !!e && bm(e.name);
}
function Fx(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r.startsWith("model/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Cn(n) || Na(n)) : !1;
}
function g0(e) {
  const t = Number((e == null ? void 0 : e.size) || 0);
  return t <= ip ? null : `${e.name} is too large (${(t / 1024 / 1024).toFixed(1)} MB). The largest 3D file is ${ip / 1024 / 1024} MB.`;
}
async function Tx(e, { fetchApi: t } = {}) {
  if (!Na(e)) throw new TypeError("A 3D file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = g0(e);
  if (n) throw new Error(n);
  const r = new FormData();
  r.append("image", e), r.append("subfolder", "3d"), r.append("type", "input");
  let i;
  try {
    i = await t("/upload/image", { method: "POST", body: r });
  } catch (a) {
    throw new Error(`Could not upload ${e.name} (${(a == null ? void 0 : a.message) || a}).`);
  }
  if (!i || i.status !== 200) {
    const a = i ? `${i.status}${i.statusText ? ` ${i.statusText}` : ""}` : "no response";
    throw new Error(`Could not upload ${e.name} (${a}).`);
  }
  const o = await i.json(), s = String((o == null ? void 0 : o.name) || "").trim();
  if (!s) throw new Error(`Could not upload ${e.name} (the server returned no file name).`);
  return No({ filename: s, subfolder: String((o == null ? void 0 : o.subfolder) ?? "3d"), storage: String((o == null ? void 0 : o.type) || "input") });
}
const op = /* @__PURE__ */ new WeakSet(), sp = /* @__PURE__ */ new WeakSet();
let ap = 0;
function $c(e) {
  if (!e || typeof e != "object" || sp.has(e)) return e;
  const t = String(e.type || "preview");
  return ap += 1, e.type = `${t}:pano-${ap}`, sp.add(e), e;
}
function Aa(e) {
  if (!e || typeof e != "object" || op.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, op.add(e), e;
}
function y0(e, t) {
  var r, i;
  if (!t || ((i = (r = Aa(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Dx({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const c = i;
    i = null, o || n == null || n(c);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Ct } = Os;
bw((e) => kr(e.id));
vw(qt);
const ud = mx(), { linkedVideoFile: b0 } = Cg({ app: Ct, api: qt });
function zc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Lx = "pano_suite.ui_settings.v1", Rx = 120, Vx = 2048;
function lp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Lx)) || "").trim();
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
function $x() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function oo(e) {
  var n, r, i, o, s;
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
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function zx() {
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
function jc(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const o = Number(r), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
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
function v0(e) {
  const t = jc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function jx(e, t, n) {
  v0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Hc(e) {
  var t, n;
  return (n = (t = ct(e)) == null ? void 0 : t.dom) != null && n.widget ? "dom" : "none";
}
function dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function S0(e) {
  return la(dd(e));
}
function cp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Ct == null ? void 0 : Ct.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function _0(e) {
  const t = ct(e);
  if (t.controller) return t.controller;
  const n = {
    activeBackend: "none",
    attach(r = {}) {
      const i = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Hc(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = r.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof r.onOpen == "function" ? r.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Yl(e), FM(e, { ...r, mode: i }), this.activeBackend = Hc(e);
    },
    rebind(r = {}) {
      const i = String(r.mode || ct(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Yl(e), this.activeBackend = "none", this.attach({ ...r, mode: i });
    },
    teardown() {
      Yl(e), this.activeBackend = "none";
    }
  };
  return t.controller = n, n;
}
function Yl(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Gc.unregister(e);
  const n = ct(e);
  n.dom, n.restore;
  const r = n.dom;
  try {
    (i = n.restore) == null || i.call(n);
  } catch {
  }
  if (n.restore = null, r) {
    try {
      (o = r.state) != null && o.raf && cancelAnimationFrame(r.state.raf);
    } catch {
    }
    try {
      (a = (s = r.root) == null ? void 0 : s.remove) == null || a.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (r == null ? void 0 : r.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = zc();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => aM(e, c));
  } catch {
  }
  n.dom = null, n.noPreview = !1, n.bootMinHeightTimer && (clearTimeout(n.bootMinHeightTimer), n.bootMinHeightTimer = null), n.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Hx(e, t = "#00ff00") {
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
    const i = e.trim();
    if (!i) return n;
    try {
      r = JSON.parse(i);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const i = r;
    return !i || typeof i != "object" || Array.isArray(i) ? n : {
      ...n,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : n.active
    };
  } catch {
    return n;
  }
}
function Gx(e) {
  var n, r;
  const t = (n = kn(e)) == null ? void 0 : n.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = $n(e, "state_json")) == null ? void 0 : r.value) || "");
}
function tn(e) {
  var d, u;
  const t = kn(e), n = Gx(e), r = t.liveStateVersion, i = String(((d = $n(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = $n(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof n == "string", a = s && $g(e) && St(e, "sticker-handoff") ? zn(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === n && l.liveVersion === r && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? Uw(n, { backgroundColor: i, coverage: o, active: jm(e) }, a) : Hx(n, i);
  return c.coverage = o, t.parsedState = { source: n, liveVersion: r, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function $n(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Kx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function w0(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (r = a.outputNode);
    } catch {
    }
  return !r && n != null && (r = Kx(e == null ? void 0 : e.graph, n)), r;
}
function Wx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function k0(e, t = []) {
  const n = Wx(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    On.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function up(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Ca(e, t) {
  const n = up(e), r = up(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ux(e, t) {
  var n;
  return w0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function Bx(e, t = On) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = k0(e, t).map((a) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = n.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Mw(e, s, Ux);
}
const Gc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = qt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, h, _;
        if (!o) return;
        const s = Ca(r, o == null ? void 0 : o.id);
        String(ct(o).mode || "") === "cutout" && !s || !s && ![...Bx(o)].some((g) => Ca(r, g)) || (s && (pd(o), (c = (l = ct(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Pg(ln(o).executedOutputs, r, n.output) && (M0(o), (u = (d = ct(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (_ = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || _.call(h, !0, !0), String(ct(o).mode || ""), String(ct(o).mode || ""), void 0));
      });
    }, qt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = qt) != null && e.removeEventListener) || (qt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ia(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((o = qt) == null ? void 0 : o.apiURL) == "function" ? qt.apiURL(i) : i;
}
function Yx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function qx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function Xx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function Jx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Yx(t)) return [t];
  const { filename: n, subfolder: r } = qx(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => Ia({
    filename: n,
    subfolder: r,
    type: o
  }));
  return Xx([...i, t]);
}
function Zx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ia({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function kr(e) {
  const t = Ct == null ? void 0 : Ct.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Ca(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Ca(s, i)) return t[s];
  }
  return null;
}
function zn(e, t, n = null) {
  const r = n || kr(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function rn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return rn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ia({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = rn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ia(e);
}
function Jo(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function qs(e) {
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
function fd(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const i = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", o = new URL(n, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${i}pano_rev=${t}` : n;
  }
}
function Qx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function eM(e, t) {
  try {
    const n = ln(e);
    n.ownOutputRev = px(n.ownOutputRev);
    const r = Qx(t);
    let i = "";
    for (const o of r)
      if (i = rn(o), i) break;
    i ? (fd(String(i || ""), n.ownOutputRev), n.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ri(e) {
  var n;
  const t = ln(e);
  t && ((n = t.ownOutputVideo) == null || n.player.destroy(), t.ownOutputVideo = null);
}
function tM(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!St(e, "background"))
    return Ri(e), null;
  const i = kr(r), o = Xu(i, t, rn);
  if (!o)
    return Ri(e), null;
  const s = ln(e), a = fd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Ri(e);
  const d = Pw({
    documentRef: document,
    src: a,
    onFrame: n
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function nM(e, t = []) {
  var c, d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = k0(e, t).map((u) => n.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = n.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = n[u], h = e.graph ? e.getInputLink(u) : null;
    if ((h == null ? void 0 : h.origin_id) == null) continue;
    const _ = h.origin_id, g = w0(e, u, _);
    if (!g) continue;
    const v = Number(h.origin_slot ?? 0), y = kr((g == null ? void 0 : g.id) ?? _), H = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (H.length) {
      const R = [];
      v >= 0 && v < H.length && R.push(H[v]), R.push(...H);
      for (const Z of R.filter((q) => !Hs(q))) {
        const q = rn(Z);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: `${q}&pano_src=${Oc(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let W = [];
    try {
      W = typeof (Ct == null ? void 0 : Ct.getNodeImageUrls) == "function" ? Ct.getNodeImageUrls(g) || [] : [];
    } catch {
      W = [];
    }
    if (Array.isArray(W) && W.length) {
      const R = [];
      v >= 0 && v < W.length && R.push(W[v]), R.push(...W);
      for (const Z of R) {
        const q = rn(Z);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const O = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (O.length) {
      const R = [];
      v >= 0 && v < O.length && R.push(O[v]), R.push(...O);
      for (const Z of R) {
        const q = rn(Z);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const P = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (P) {
      let R = rn(P.value);
      if (R && !R.includes("/") && !R.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (R = qt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((f == null ? void 0 : f.name) || ""), { src: R, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = St(e, "background") ? kr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = rn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function rM(e, t = [], n = {}) {
  const r = nM(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = Jx(i);
  if (!o.length) return null;
  const s = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1, a = ln(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const h = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const _ = o[f];
    u.pendingResolvedSrc = _, d.src = _;
  };
  return d.onload = () => {
    var _;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (_) => {
    if (f + 1 < o.length) {
      h();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, h(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function x0(e, t = [], n = null, r = {}) {
  const i = rM(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function M0(e) {
  e && (ud.disposeOwner(e), ln(e).linkedImages.clear(), Ri(e));
}
function iM(e) {
  e && (ln(e).linkedImages.clear(), Ri(e));
}
function P0(e, t) {
  const n = ct(e);
  n.renderCache ?? (n.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = n.renderCache, i = String(t || "");
  return r.mode !== i && (r.mode = i, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function so(e, t, n = "") {
  var s;
  const r = P0(e, ((s = ct(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < Rx ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function dp(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, a = r / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function oM(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), c = Math.max(Math.round(34 * n), a + Math.round(14 * n)), d = r + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function ql(e, t) {
  var r, i;
  const n = (i = (r = ct(e)) == null ? void 0 : r.dom) == null ? void 0 : i.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function sM(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === n);
    if (i) return i;
  }
  return t[0] || null;
}
function aM(e, t) {
  return y0(e, t);
}
function Ea(e, t, n, r = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Zx(n);
  if (!o && (r != null && r.external)) {
    if (!St(e, "external-sticker")) return null;
    const h = kr(e == null ? void 0 : e.id), _ = ((f = h == null ? void 0 : h.ui) == null ? void 0 : f.pano_sticker_input_images) || (h == null ? void 0 : h.pano_sticker_input_images) || [];
    for (const g of Array.isArray(_) ? _ : [_])
      if (o = rn(g), o) break;
  }
  if (!o) return null;
  const s = zn(e, "pano_sticker_input_state_hash"), a = r != null && r.external ? String(s ?? "") : "", l = r != null && r.external ? ln(e).ownOutputRev : 0, c = r != null && r.external ? fd(o, l) : o, d = hx(o, a, l);
  return ud.get(e, d, c, (h, _) => {
    var g, v;
    _ && (r != null && r.external && ln(e).outputFromRun && Tr(e, "image-loaded"), (v = (g = ct(e).dom) == null ? void 0 : g.requestDraw) == null || v.call(g));
  }) || null;
}
function lM(e, t, n, r) {
  var o, s, a, l, c, d;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const u = r.convertEventToCanvasOffset(t);
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
  const i = uM(e, t, r);
  return i || null;
}
function cM(e, t) {
  var u, f;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Ct == null ? void 0 : Ct.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (n - Number(o.left || 0)) / a - Number(l[0] || 0), d = (r - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function uM(e, t, n) {
  var i, o;
  const r = cM(t, n || (Ct == null ? void 0 : Ct.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function fp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function dM(e, t, n) {
  const r = sd(t, n);
  r.visible && od(e, r.boundaryEdges, { selected: !1 });
}
function fM(e, t, n) {
  const r = sd(t, n);
  r.visible && (e.save(), od(e, r.boundaryEdges, { selected: !0 }), d0(e, r, { accent: ax(t) }), e.restore());
}
function Kc(e, t, n) {
  return Bu(Sa(ct(e).view || { yaw: 0, pitch: 0, fov: wr }, t, n), t, n);
}
function Oa(e) {
  var t;
  return ((t = ct(e).playback) == null ? void 0 : t.playback.frame) ?? Ui;
}
function pM(e) {
  return [St(e, "background") ? Xu(kr(e.id), ["pano_input_videos"], rn) : "", b0(e, On)];
}
function hM(e) {
  var o;
  if (!St(e, "external-sticker")) return null;
  const t = kr(e.id), n = zn(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(rn), meta: n };
  const i = Xu(t, ["pano_sticker_input_videos"], rn);
  return i ? { src: i, meta: n } : null;
}
function N0(e, t) {
  const n = kr(e.id), r = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(r) ? r : [];
}
function mM(e, t) {
  var a;
  const n = {}, r = (l) => N0(e, l), i = St(e, "scene"), o = i ? r("pano_upstream_layers") : [], s = i ? td(r) : null;
  if (s) {
    n.bg = null;
    const { clip: l } = s;
    n.upstreamClip = l && xm(l.clip, l.fps, t.timeline.fps);
    const c = r(s.metaKey)[0];
    c && typeof c == "object" && (n.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (St(e, "background")) {
    const l = r("pano_input_video_meta")[0];
    l && typeof l == "object" && (n.bg = { video: Io(e, On), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (St(e, "external-sticker") && (n.port = Go(r)), o.length) {
    const l = ct(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = Kg(o), u = Ug(d, t.upstream, t.timeline.fps), f = (h) => Go((_) => fn(d[h].ui, _));
      l.upstreamLength = { layers: o, state: t, ends: qg(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = r("pano_upstream_frames").length ? r("pano_upstream_frames") : r("pano_timeline_frames");
    n.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (n.sceneItems = r("pano_scene_files").length);
  return n;
}
function gM({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function A0(e, t) {
  var r;
  const n = ct(e);
  return ((r = n.scene) == null ? void 0 : r.state) !== t && (n.scene = { state: t, sceneState: an({ ...t, painting: null }) }), n.scene.sceneState;
}
function yM(e, t) {
  const n = Li(e), r = !!n.bg_media;
  if (!r && !n.scene) return null;
  if (St(e, "background")) {
    const o = zn(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!r) return;
  if (Io(e, On)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === b0(e, On) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = x0(e, On, null, { preserveReadyWhilePending: !1 });
  return Jo(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function bM(e, t) {
  var i, o, s;
  const n = String(((i = $n(e, "output_size")) == null ? void 0 : i.value) ?? ""), r = ["background", "external-sticker", "scene"].every((a) => St(e, a));
  return {
    stateText: String(((o = $n(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: n,
    coverage: tn(e).coverage,
    bgColor: String(((s = $n(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: n === "auto" ? yM(e, t) : null,
    run: r && zn(e, "pano_output_size") || null,
    erp: zn(e, "pano_output_erp") || null,
    frame: zn(e, "pano_output_frame") || null
  };
}
const vM = 38;
function pd(e) {
  const t = ln(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function SM(e, t) {
  const n = ln(e).studioRunImage;
  return t && (n == null ? void 0 : n.src) === rn(t.entry) ? n : null;
}
function _M(e, t) {
  const n = ln(e), r = ct(e), i = t ? rn(t.entry) : "";
  if (n.studioRunImage && n.studioRunImage.src !== i && pd(e), !i) return null;
  let o = n.studioRunImage;
  if (!o) {
    const s = new Image(), a = { src: i, image: s, ready: !1, failed: !1 };
    s.src = i, s.decode().then(() => {
      var l, c;
      n.studioRunImage === a && (a.ready = !0, (c = (l = r.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }, () => {
      var l, c;
      n.studioRunImage === a && (a.failed = !0, (c = (l = r.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }), n.studioRunImage = o = a;
  }
  return o.ready ? t.kind === "frame" ? { frame: o.image } : {
    background: {
      media: o.image,
      revision: qs(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: ix(t.entry.rotation)
    }
  } : null;
}
function wM(e, t) {
  var n;
  return t ? (n = SM(e, t)) != null && n.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function kM(e, t, n) {
  var l, c, d;
  const r = A0(e, t), i = (u) => {
    var h;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Ea(e, u.id, ga(u.source), { external: u.source.kind === "port" });
      const _ = ct(e).playback;
      if (u.source.kind === "port" && _) {
        const g = _.playback.stickerPicture(_.stickerStill, f), v = Eu(_.playback.stickerMedia, f);
        return g ? { media: g, revision: qs(g), source: v } : null;
      }
    } else {
      const _ = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (_ ? String(u.id || "") : "");
      f = Ea(e, g, (h = t.assets) == null ? void 0 : h[u.asset_id], { external: _ });
    }
    return Jo(f) ? { media: f, revision: qs(f) } : null;
  }, o = x_(ct(e), t), s = St(e, "scene") ? (l = td((u) => N0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = ct(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? Pm(s || String(((d = $n(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : Jo(n) ? { media: n, revision: qs(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: hg(r, Oa(e), t.stickers, { media: i, paintLayers: o })
  };
}
function xM(e, t, n, r = null) {
  var q, ae, Se, ge, B, _e, pe;
  const i = ct(e), o = String(i.mode || "stickers");
  P0(e, o);
  const s = tn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (Se = (ae = (q = i.cutout) == null ? void 0 : q.session) == null ? void 0 : ae.refresh) == null || Se.call(ae)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (_e = (B = (ge = i.stickers) == null ? void 0 : ge.session) == null ? void 0 : B.refresh) == null || _e.call(B));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), r != null && r.frame) {
    n.release(), so(e, !1, "");
    const { width: fe, height: ee } = fp(r.frame), me = vM, oe = Math.min(l / fe, (c - me) / ee);
    d.drawImage(r.frame, (l - fe * oe) / 2, me + (c - me - ee * oe) / 2, fe * oe, ee * oe);
    return;
  }
  const f = (r == null ? void 0 : r.background) || null, h = (f == null ? void 0 : f.media) || (i.playback ? gM(i.playback) : tM(e, ["pano_input_videos"], () => {
    var fe, ee;
    return (ee = (fe = i.dom) == null ? void 0 : fe.requestDraw) == null ? void 0 : ee.call(fe);
  })) || x0(
    e,
    On,
    () => {
      var fe, ee;
      return (ee = (fe = i.dom) == null ? void 0 : fe.requestDraw) == null ? void 0 : ee.call(fe);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = Jo(h);
  let g = null;
  const v = () => f ? { background: f, layers: [] } : kM(e, s, h), y = (fe, ee) => {
    g || (g = v());
    const me = n.render({ width: fe.w, height: fe.h, camera: ee, ...g });
    return me && d.drawImage(me.canvas, me.x, me.y, me.width, me.height, fe.x, fe.y, fe.w, fe.h), !!me;
  };
  if (o === "cutout") {
    const fe = sM(s), ee = fp(h), me = fe ? Te($r(fe).aspect, 0.1, 10) : _ ? Te(Number(ee.width / ee.height), 0.05, 20) : 1, oe = id(u, me);
    i.cutoutFrame = oe;
    let C = "none";
    const G = String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "");
    if (fe)
      if (h && !_)
        C = "loading";
      else if (_) {
        const N = bk({ width: l, height: c }, oe, fe);
        [
          !N.fallback || y(N.fallback.rect, Co(N.fallback.shot)),
          y(N.rect, Co(N.shot)),
          !N.fallback || y(oe, Co(fe))
        ].every(Boolean) || (C = "loading");
      } else
        C = "empty";
    else {
      const N = i.lastCutoutShot;
      N ? (i.view = t0(N, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: wr }), _ ? y(u, Sa(i.view, l, c)) || (C = "loading") : h ? C = "loading" : C = "empty";
    }
    _ || n.release(), n.failed && C === "loading" && (C = "none"), fe && (i.lastCutoutShot = { ...fe }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(oe.x, oe.y, oe.w, oe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(oe.x + 0.5, oe.y + 0.5, Math.max(0, oe.w - 1), Math.max(0, oe.h - 1)), d.restore()), C === "loading" ? (ql(e, !1), so(e, !0, G)) : C === "empty" ? (ql(e, !0), so(e, !1, "")) : (ql(e, !1), so(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: wr });
  let H = !1;
  (!h || _) && (g = v(), !g.background && !g.layers.length ? (n.release(), H = !0) : H = y(u, Sa(i.view, l, c)));
  const W = !H && !n.failed;
  so(e, W, W ? String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "") : ""), W && oM(d, u, dp(t, u));
  const O = Kc(e, l, c);
  !h && H && MM(d, O, dp(t, u));
  const P = String(((pe = s == null ? void 0 : s.active) == null ? void 0 : pe.selected_sticker_id) || ""), R = Tc(s, Oa(e)), Z = H && e.__panoStudio !== !0 ? R.find((fe) => String((fe == null ? void 0 : fe.id) || "") === P && (fe == null ? void 0 : fe.visible) !== !1) : null;
  H && !f && R.filter((fe) => fe !== Z && (fe == null ? void 0 : fe.visible) !== !1 && (fe.external || fe.source_kind === "external_image")).filter((fe) => !Jo(Ea(e, fe.id, null, { external: !0 }))).forEach((fe) => dM(d, fe, O)), Z && fM(d, Z, O);
}
function pp(e, t, n, r, i = 1) {
  let o = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const a = n.project(s);
    if (a.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), o = !0);
  }
  e.stroke();
}
function MM(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(hn(c, a));
    pp(e, l, t, a === 0 ? i : r, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(hn(a, c));
    pp(e, l, t, r, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: hn(0, 0) },
    { name: "Right", dir: hn(90, 0) },
    { name: "Back", dir: hn(180, 0) },
    { name: "Left", dir: hn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * n));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * n);
  }), e.restore();
}
function Wc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function PM(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function Mn(e, t) {
  return PM(e, t) ? !1 : (Wc(e), !0);
}
function hp() {
  var n;
  const e = (n = Ct == null ? void 0 : Ct.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function NM(e) {
  var n;
  if (!e) return;
  const t = (n = Ct == null ? void 0 : Ct.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function AM(e, t = 360, n = 260) {
  const r = ct(e);
  if (!r || r.userResized === !0 || r.standaloneBootSized === !0 || !v0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, r.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function CM(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0)), o = ct(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function mp(e, t = null, n = 0, r = 0, i = !0) {
  const o = Math.max(0, Number(r || 0)), s = ct(e);
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(n || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      s.userResized = !0, t == null || t(), i && IM(e, 180, t);
    }
  };
}
function IM(e, t = 180, n = null) {
  if (!e) return;
  const r = ct(e);
  r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.resizeSettleTimer = setTimeout(() => {
    var i;
    r.resizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function ho(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const EM = /* @__PURE__ */ new WeakMap();
function C0(e, t) {
  return Pg(EM, e, t) ? !1 : (eM(e, t), M0(e), ho(e), !0);
}
async function OM(e) {
  var n, r;
  const t = await kw(e, Ct, qt);
  t && (C0(e, t), (r = (n = ct(e).dom) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function FM(e, t = {}) {
  var je;
  const n = t.__allowStandalone === !0, r = ct(e), i = ln(e), o = kn(e), s = S0(e);
  if (s && !n) {
    dd(e);
    return;
  }
  s && AM(e), r.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = r.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = r.mode !== "cutout";
  if (r.noPreview = t.noPreview === !0, r.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: cp(e)
  }.signature || cp(e), Hc(e), e == null || e.id, r.mode, e.addDOMWidget, jc(e), (je = r.dom) != null && je.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, h = f ? 0 : 56, _ = f ? 0 : hk, g = document.createElement("div");
  if (zx(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
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
    const ce = Aa($c(
      e.addDOMWidget(zc(), "preview", g, mp(e, null))
    ));
    ho(e), r.dom = { widget: ce, root: g, requestDraw: () => {
    } };
    return;
  }
  const v = document.createElement("div");
  v.className = "pano-node-frame", v.style.cssText = [
    "position:absolute",
    "inset:0",
    "overflow:hidden"
  ].join(";");
  const y = Gt({ label: "node.surface" });
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
  const H = document.createElement("div");
  H.style.cssText = [
    "position:absolute",
    "inset:0",
    "display:none",
    "align-items:center",
    "justify-content:center",
    "pointer-events:none",
    "color:rgba(161,161,170,0.95)",
    "font:600 15px var(--pano-font-family-compact)",
    "text-align:center",
    "padding:0 10px",
    "z-index:2"
  ].join(";"), H.textContent = "Connect ERP image", v.appendChild(y), v.appendChild(H), g.appendChild(v);
  const W = Uh(g), O = document.createElement("div");
  O && (O.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", O.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(O)), jx(e, 120, 120), ho(e);
  let P = null;
  try {
    CM(e, h, () => {
      var ce, te;
      return (te = (ce = r.dom) == null ? void 0 : ce.requestDraw) == null ? void 0 : te.call(ce);
    }), P = Aa($c(e.addDOMWidget(
      zc(),
      "preview",
      g,
      mp(
        e,
        () => {
          var ce, te;
          return (te = (ce = r.dom) == null ? void 0 : ce.requestDraw) == null ? void 0 : te.call(ce);
        },
        h,
        _,
        !1
      )
    )));
  } catch {
    return;
  }
  const R = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, Z = sx(), q = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(p)));
  }, ae = bg(q), Se = /* @__PURE__ */ Yi(a ? {
    ...jg(tn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Qg(tn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ce) => ({ value: ce, label: ce }))
  });
  let ge = null;
  if (a && e.__panoSceneStateV2) {
    const [ce, te] = [0, 1].map(() => {
      const Ee = Hi(document, "node.playback");
      return Ee.playsInline = !0, Ee.preload = "auto", Ee.crossOrigin = "anonymous", Ee.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", v.appendChild(Ee), Ee;
    }), be = Gt({ label: "node.still" });
    be.__panoFrameIdx = 0;
    const Pe = Gt({ label: "node.port-still" });
    Pe.__panoFrameIdx = 0;
    const Oe = Zw({
      video: ce,
      stickerVideo: te,
      createImage: (Ee, Ve) => {
        const Be = new Image();
        return Be.onload = Ve, Be.onerror = Ve, Be.src = Ee, Be;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ee) => requestAnimationFrame(Ee),
        cancelFrame: (Ee) => cancelAnimationFrame(Ee)
      },
      readState: () => tn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: q,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ve;
        if (!(ce.videoWidth > 0 && ce.videoHeight > 0)) return;
        const Ee = Math.min(1, Vx / ce.videoWidth);
        be.width = Math.round(ce.videoWidth * Ee), be.height = Math.round(ce.videoHeight * Ee), (Ve = be.getContext("2d")) == null || Ve.drawImage(ce, 0, 0, be.width, be.height), be.__panoFrameIdx += 1, q();
      },
      onStickerCapture: () => {
        var Ee;
        te.videoWidth > 0 && te.videoHeight > 0 && (Pe.width = te.videoWidth, Pe.height = te.videoHeight, (Ee = Pe.getContext("2d")) == null || Ee.drawImage(te, 0, 0), Pe.__panoFrameIdx += 1, q());
      },
      onChange: () => {
        Se.playing = Oe.playing, q();
      }
    });
    ge = { playback: Oe, video: ce, still: be, stickerVideo: te, stickerStill: Pe, stickerSource: "" }, r.playback = ge;
  }
  const B = () => {
    var st;
    const { playback: ce, still: te, stickerStill: be } = ge, Pe = Us(v, !!((st = e.flags) != null && st.collapsed), Gl(e)), Oe = ce.source, Ee = Pe ? hM(e) : null, Ve = tn(e), Be = ce.follow({
      shown: Pe,
      sources: Pe ? pM(e) : [],
      state: Ve,
      sticker: Ee,
      media: Pe ? mM(e, Ve) : {}
    });
    ((Ee == null ? void 0 : Ee.src) || "") !== ge.stickerSource && (ge.stickerSource = (Ee == null ? void 0 : Ee.src) || "", Fr(be)), ce.source !== Oe && (Fr(te), te.__panoFrameIdx = 0), Se.playable = Be, Se.playing = ce.playing;
  }, _e = () => {
    var te, be;
    const ce = ((te = i.ownOutputVideo) == null ? void 0 : te.player) ?? null;
    ce && !Us(v, !!((be = e.flags) != null && be.collapsed)) && ce.pause(), a && (Se.playable = !!ce && !ce.failed(), Se.playing = !!(ce != null && ce.playing));
  }, pe = () => {
    var ce;
    ge == null || ge.playback.pause(), (ce = i.ownOutputVideo) == null || ce.player.pause();
  };
  let fe = null;
  const ee = (a ? Xw : Sk)({
    readState: () => tn(e),
    publishLiveState: (ce) => {
      ce ? (fe = ce, o.liveState = ce) : (o.liveState === fe && (o.liveState = null), fe = null), o.liveStateVersion += 1, o.parsedState = null, q();
    },
    commitState: (ce) => {
      var Pe, Oe, Ee, Ve;
      const te = $n(e, "state_json");
      if (!te) return;
      Hm(e, ce.active);
      const be = Gm(e, ce, String(te.value ?? ""));
      be !== null && (te.value = be, (Pe = te.callback) == null || Pe.call(te, be), o.parsedState = null, (Oe = e.setDirtyCanvas) == null || Oe.call(e, !0, !0), (Ve = (Ee = e.graph) == null ? void 0 : Ee.setDirtyCanvas) == null || Ve.call(Ee, !0, !0));
    },
    onChange: (ce) => Object.assign(Se, ce)
  }), oe = a ? f0(e, (ce = "sync", te = null) => {
    var jt;
    if (!a || !e.graph || !ee || ee.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Tt = St(e, "external-sticker");
      return ee.apply({
        type: "sync-port",
        value: Vg(e, {
          pose: Tt ? zn(e, "pano_sticker_input_pose", te) : null,
          handoff: St(e, "sticker-handoff") ? zn(e, "pano_sticker_handoff", te) : null
        })
      });
    }
    const be = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Tt) => String((Tt == null ? void 0 : Tt.name) || "") === "sticker_image") : -1, Pe = be >= 0 ? ((jt = e.getInputLink(be)) == null ? void 0 : jt.id) ?? null : null;
    if (Pe == null)
      return ee.apply({ type: "sync-external", value: { connected: !1 } });
    if (!St(e, "external-sticker")) return !1;
    const Oe = zn(e, "pano_sticker_input_pose", te), Ee = Array.isArray(Oe) ? Oe[0] : Oe, Ve = String(zn(e, "pano_sticker_input_state_hash", te) ?? ""), Be = r.view || { yaw: 0, pitch: 0 }, st = tn(e), dt = (Array.isArray(st == null ? void 0 : st.stickers) ? st.stickers : []).find((Tt) => String((Tt == null ? void 0 : Tt.id) || "") === "sticker_image_1"), lt = Ea(e, "sticker_image_1", null, { external: !0 }), yt = Ee && typeof Ee == "object" ? Ee : dt || { yaw_deg: Be.yaw, pitch_deg: Be.pitch, hFOV_deg: 30, rot_deg: 0 };
    return ee.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Pe,
        stateHash: Ve,
        pose: yt,
        imageWidth: Number((lt == null ? void 0 : lt.naturalWidth) || (lt == null ? void 0 : lt.width) || 0),
        imageHeight: Number((lt == null ? void 0 : lt.naturalHeight) || (lt == null ? void 0 : lt.height) || 0)
      }
    });
  }) : () => {
  };
  let C = 0;
  const G = async (ce) => {
    if (!a || !ee || !Cn(ce)) return !1;
    pe();
    const te = `asset_${Math.random().toString(16).slice(2, 10)}`, be = `st_${Math.random().toString(16).slice(2, 10)}`, Pe = { ...r.view || { yaw: 0, pitch: 0 } };
    C += 1, Se.importing = !0;
    const Oe = Pi(e, `add:${te}`, async () => {
      const Ee = await po(ce), Ve = await ei(ce, {
        fetchApi: (Be, st) => qt.fetchApi(Be, st)
      });
      return M(), ee.apply({
        type: "add-sticker",
        value: {
          stickerId: be,
          assetId: te,
          asset: Ve,
          imageWidth: Ee.width,
          imageHeight: Ee.height,
          yaw_deg: Number(Pe.yaw || 0),
          pitch_deg: Number(Pe.pitch || 0)
        }
      });
    });
    try {
      return await Oe;
    } catch {
      return !1;
    } finally {
      C = Math.max(0, C - 1), Se.importing = C > 0, q();
    }
  };
  let N = null, ue = null, A = null, E = !1;
  const w = () => {
    var ce;
    return A && (clearTimeout(A), A = null), E ? (E = !1, ((ce = ee == null ? void 0 : ee.commitGesture) == null ? void 0 : ce.call(ee)) ?? !1) : !1;
  }, M = () => {
    var Pe, Oe, Ee;
    const ce = w(), te = (N == null ? void 0 : N.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    if (N = null, ue = null, te != null) {
      try {
        (Pe = y.hasPointerCapture) != null && Pe.call(y, te) && ((Oe = y.releasePointerCapture) == null || Oe.call(y, te));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const be = ((Ee = ee == null ? void 0 : ee.commitGesture) == null ? void 0 : Ee.call(ee)) ?? !1;
    return ce || be;
  }, le = () => {
    var Pe, Oe, Ee;
    const ce = w(), te = N == null ? void 0 : N.pointerId;
    if (N = null, te != null) {
      try {
        (Pe = y.hasPointerCapture) != null && Pe.call(y, te) && ((Oe = y.releasePointerCapture) == null || Oe.call(y, te));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const be = ((Ee = ee == null ? void 0 : ee.cancelGesture) == null ? void 0 : Ee.call(ee)) ?? !1;
    return ce || be;
  }, ye = () => M();
  ee && o.flushers.add(ye);
  let D = null, b = !1;
  if (O && ee)
    try {
      ad(), D = gu(l ? Zk : a ? Uk : Vk, {
        model: Se,
        onAction: (ce) => {
          var Pe, Oe, Ee;
          if ((ce == null ? void 0 : ce.type) === "toggle-playback") {
            M(), ge ? ge.playback.toggle() : (Pe = i.ownOutputVideo) == null || Pe.player.toggle(), q();
            return;
          }
          if (pe(), (ce == null ? void 0 : ce.type) === "open-editor") {
            M(), a || (Se.aspectOpen = !1), (Oe = r.openEditor) == null || Oe.call(r);
            return;
          }
          if (a) {
            if ((ce == null ? void 0 : ce.type) === "add-image-file") {
              G(ce.file);
              return;
            }
            ee.apply(ce) && q();
            return;
          }
          if ((ce == null ? void 0 : ce.type) === "toggle-aspect") {
            Se.aspectOpen = !Se.aspectOpen;
            return;
          }
          if ((ce == null ? void 0 : ce.type) === "close-aspect") {
            Se.aspectOpen = !1;
            return;
          }
          let te = ce;
          if ((ce == null ? void 0 : ce.type) === "add-frame") {
            const Ve = r.view || { yaw: 0, pitch: 0, fov: wr };
            te = {
              ...ce,
              ...gk(Ve, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ce == null ? void 0 : ce.type) === "delete-frame") {
            const Ve = ai(tn(e));
            Ve && (r.view = t0(Ve, {
              width: y.width,
              height: y.height
            }));
          }
          const be = ((Ee = r.cutoutFrame) == null ? void 0 : Ee.safeRect) || null;
          Se.aspectOpen = !1, ee.apply({ ...te, safeRect: be }) && q();
        }
      }), D.mount(O), b = !0;
    } catch {
      D = null, b = !1;
    }
  const K = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ge && B(), q();
  }) : null;
  K == null || K.observe(v);
  const p = (ce) => {
    var be, Pe, Oe;
    R.raf = 0, R.inTick = !0;
    let te = !1;
    try {
      if (te = m.stepInertia(ce), R.needsDraw || te) {
        R.needsDraw = !1, ge ? B() : _e();
        const Ee = l ? bM(e, ge) : null, Ve = Ee ? rx(Ee) : null, Be = () => A0(e, tn(e)), st = Ee && Us(v, !!((be = e.flags) != null && be.collapsed), Gl(e)) ? _M(e, Ve) : null;
        if (!((Pe = e.flags) != null && Pe.collapsed) && !Gl(e) ? xM(e, y, ae, st) : ae.release(), Se.viewUnavailable = ae.failed, l) {
          const dt = Z({ ...Ee, display: wM(e, Ve) }, Be);
          dt && (Se.status = dt);
        }
      }
    } finally {
      R.inTick = !1;
    }
    (te || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(p)), $x() && (!r.debugLastTs || ce - r.debugLastTs > 1200) && (r.debugLastTs = ce, r.mode, jc(e), oo(g), oo(v), oo(y), oo(g.parentElement), oo((Oe = g.parentElement) == null ? void 0 : Oe.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, m = bu({
    getView: () => (r.view || (r.view = { yaw: 0, pitch: 0, fov: wr }), r.view),
    setView: (ce) => {
      r.view = ce;
    },
    getViewportSize: () => {
      const ce = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ce.width || y.clientWidth || 0)),
        h: Math.max(1, Number(ce.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ce = lp();
      return {
        x: ce.invert_view_x ? -1 : 1,
        y: ce.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      q();
    }
  }), x = a ? v : g, I = (ce) => {
    const te = y.getBoundingClientRect();
    return {
      x: (Number(ce.clientX) - te.left) * (y.width / Math.max(1, te.width)),
      y: (Number(ce.clientY) - te.top) * (y.height / Math.max(1, te.height))
    };
  }, $ = (ce) => {
    var Pe, Oe;
    if (!a || l || !d) return;
    const te = tn(e), be = np(
      Tc(te, Oa(e)),
      String(((Pe = te == null ? void 0 : te.active) == null ? void 0 : Pe.selected_sticker_id) || ""),
      I(ce),
      Kc(e, y.width, y.height)
    );
    if (!be) {
      y.style.cursor = "grab";
      return;
    }
    if (((Oe = be.item) == null ? void 0 : Oe.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = be.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (ce) => {
    var Be, st, dt, lt, yt, qe, jt, Tt, Un, xn, Mr;
    if (!Mn(ce, x) || ce.button !== 0) return;
    if (!a) {
      const Pt = ai(tn(e)), Re = r.cutoutFrame;
      if (!Pt) {
        (Be = g.focus) == null || Be.call(g, { preventScroll: !0 }), (st = y.setPointerCapture) == null || st.call(y, ce.pointerId), y.style.cursor = "grabbing", m.startDrag(ce.clientX, ce.clientY, ce.pointerId);
        return;
      }
      if (Pt.locked === !0 || !Re || !ee) return;
      const Ge = I(ce);
      let Ke;
      if (ce.shiftKey) {
        const Nt = r0({
          frame: Re,
          point: Ge,
          startRollDeg: Number(Pt.roll_deg ?? Pt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Nt) return;
        Ke = { kind: "roll", pointerId: ce.pointerId, rollGesture: Nt };
      } else {
        const Nt = ((dt = tn(e)) == null ? void 0 : dt.ui_settings) || lp();
        Ke = {
          kind: "pan",
          pointerId: ce.pointerId,
          startPoint: Ge,
          startShot: { ...Pt },
          focalPx: ui(Re, Pt),
          invertX: Nt.invert_view_x === !0,
          invertY: Nt.invert_view_y === !0
        };
      }
      M(), (lt = g.focus) == null || lt.call(g, { preventScroll: !0 }), (yt = y.setPointerCapture) == null || yt.call(y, ce.pointerId), y.style.cursor = "grabbing", ee.beginGesture(), N = Ke;
      return;
    }
    if (!d) return;
    const te = I(ce), be = tn(e), Pe = String(((qe = be == null ? void 0 : be.active) == null ? void 0 : qe.selected_sticker_id) || ""), Oe = Kc(e, y.width, y.height);
    (jt = g.focus) == null || jt.call(g, { preventScroll: !0 });
    const Ee = () => np(Tc(be, Oa(e)), Pe, te, Oe);
    let Ve = l ? null : Ee();
    if (Ve && (ge != null && ge.playback.playing) && (pe(), Ve = Ee()), Ve && ee) {
      if (m.stopMotion(), M(), String(((Tt = Ve.item) == null ? void 0 : Tt.id) || "") !== Pe && ee.apply({ type: "select-sticker", id: Ve.item.id }), ((Un = Ve.item) == null ? void 0 : Un.locked) === !0) {
        q();
        return;
      }
      const Pt = te, Re = Ve.geometry.center;
      ue = {
        active: !0,
        kind: Ve.hit.kind,
        pointerId: ce.pointerId,
        startPoint: Pt,
        startCenter: { ...Re },
        startSticker: { ...Ve.item },
        startDistance: Math.max(1, Math.hypot(Pt.x - Re.x, Pt.y - Re.y)),
        startAngle: Math.atan2(Pt.y - Re.y, Pt.x - Re.x),
        projection: Oe
      }, ee.beginGesture(), (xn = y.setPointerCapture) == null || xn.call(y, ce.pointerId), y.style.cursor = Ve.hit.kind === "rotate" ? "grabbing" : Ve.hit.kind === "move" ? "move" : Ve.hit.cursor, q();
      return;
    }
    (Mr = y.setPointerCapture) == null || Mr.call(y, ce.pointerId), y.style.cursor = "grabbing", m.startDrag(ce.clientX, ce.clientY, ce.pointerId);
  }), y.addEventListener("pointermove", (ce) => {
    if (!a) {
      if (!N) {
        if (!m.state.drag.active) return;
        Mn(ce, x), m.moveDrag(ce.clientX, ce.clientY, "pano");
        return;
      }
      if (N.pointerId !== ce.pointerId || !ee) return;
      if (Mn(ce, x), N.kind === "pan") {
        const be = I(ce);
        ee.updateGesture({
          type: "pan-camera",
          startShot: N.startShot,
          dx: be.x - N.startPoint.x,
          dy: be.y - N.startPoint.y,
          focalPx: N.focalPx,
          invertX: N.invertX,
          invertY: N.invertY
        });
        return;
      }
      const te = i0(N.rollGesture, I(ce), ce);
      if (!te) return;
      N.rollGesture = te.gesture, ee.updateGesture({ type: "set-roll", value: te.rollDeg });
      return;
    }
    if (!ue && !m.state.drag.active) {
      $(ce);
      return;
    }
    if (ue) {
      if (ue.pointerId !== ce.pointerId || !ee) return;
      Mn(ce, x);
      const te = I(ce);
      let be = ue.startSticker;
      if (ue.kind === "move")
        be = ux(
          ue.startSticker,
          {
            x: ue.startCenter.x + te.x - ue.startPoint.x,
            y: ue.startCenter.y + te.y - ue.startPoint.y
          },
          ue.projection
        );
      else if (ue.kind === "scale") {
        const Pe = Math.hypot(te.x - ue.startCenter.x, te.y - ue.startCenter.y);
        be = dx(ue.startSticker, ue.startDistance, Pe);
      } else if (ue.kind === "rotate") {
        const Pe = Math.atan2(te.y - ue.startCenter.y, te.x - ue.startCenter.x);
        be = fx(ue.startSticker, ue.startAngle, Pe, ce.shiftKey === !0);
      }
      ee.updateGesture({ type: "set-transform", value: be }), q();
      return;
    }
    !d || !m.state.drag.active || (Mn(ce, x), m.moveDrag(ce.clientX, ce.clientY, "pano"));
  });
  const Y = () => {
    var te, be;
    if (!N && !ue) {
      if (!m.state.drag.active) return;
      m.endDrag(), y.style.cursor = "grab", q();
      return;
    }
    if (!ee) return;
    const ce = (N == null ? void 0 : N.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    N = null, ue = null;
    try {
      (te = y.hasPointerCapture) != null && te.call(y, ce) && ((be = y.releasePointerCapture) == null || be.call(y, ce));
    } catch {
    }
    ee.cancelGesture(), y.style.cursor = "grab", q();
  }, se = (ce, te = !1) => {
    var be, Pe, Oe, Ee;
    if (!a) {
      if (!N) {
        if (!m.state.drag.active) return;
        Mn(ce, x), (be = y.releasePointerCapture) == null || be.call(y, ce.pointerId), y.style.cursor = "grab", m.endDrag(), q();
        return;
      }
      if (N.pointerId !== ce.pointerId || !ee) return;
      Mn(ce, x), N = null, (Pe = y.releasePointerCapture) == null || Pe.call(y, ce.pointerId), y.style.cursor = "grab", te ? ee.cancelGesture() : ee.commitGesture(), $(ce), q();
      return;
    }
    if (ue) {
      if (ue.pointerId !== ce.pointerId || !ee) return;
      Mn(ce, x), ue = null, (Oe = y.releasePointerCapture) == null || Oe.call(y, ce.pointerId), y.style.cursor = "grab", te ? ee.cancelGesture() : ee.commitGesture(), q();
      return;
    }
    !d || !m.state.drag.active || (Mn(ce, x), (Ee = y.releasePointerCapture) == null || Ee.call(y, ce.pointerId), y.style.cursor = "grab", m.endDrag(), q());
  };
  y.addEventListener("pointerup", se), y.addEventListener("pointercancel", (ce) => se(ce, !0)), y.addEventListener("lostpointercapture", Y), y.addEventListener("pointerleave", (ce) => {
    !a && N || ue || m.state.drag.active && se(ce);
  });
  const V = (ce) => {
    const te = document.activeElement;
    if (te !== g && !g.contains(te)) return;
    if (ce.key === "Escape" && (N || ue) && ee) {
      Y(), Wc(ce);
      return;
    }
    if (!a || l || ce.key !== "Delete" && ce.key !== "Backspace" || !ee) return;
    const be = ce.target, Pe = String((be == null ? void 0 : be.tagName) || "").toUpperCase();
    Pe === "INPUT" || Pe === "TEXTAREA" || be != null && be.isContentEditable || Se.canDelete === !0 && (pe(), M(), ee.apply({ type: "delete-selected" }) && q(), Wc(ce));
  };
  window.addEventListener("keydown", V, !0);
  const ne = Dx({
    requestFrame: (ce) => requestAnimationFrame(ce),
    cancelFrame: (ce) => cancelAnimationFrame(ce),
    restore: (ce) => NM(ce)
  }), k = (ce) => {
    var be, Pe, Oe, Ee, Ve, Be;
    if (!Mn(ce, x)) return;
    if (!a) {
      const st = ai(tn(e));
      if (st && st.locked !== !0 && ee) {
        const dt = oa(ce);
        dt !== 0 && (E || (M(), ee.beginGesture(), E = !0), ee.updateGesture({
          type: "step-fov",
          direction: dt
        }) ? (A && clearTimeout(A), A = setTimeout(w, 180), q()) : ee.hasGestureChanges() || (ee.cancelGesture(), E = !1));
      } else if (!st) {
        const dt = hp();
        m.applyWheelEvent(ce) && q(), ne.schedule(dt);
      }
      (be = ce.preventDefault) == null || be.call(ce), (Pe = ce.stopPropagation) == null || Pe.call(ce), (Oe = ce.stopImmediatePropagation) == null || Oe.call(ce);
      return;
    }
    if (!d) return;
    const te = hp();
    m.applyWheelEvent(ce) && q(), (Ee = ce.preventDefault) == null || Ee.call(ce), (Ve = ce.stopPropagation) == null || Ve.call(ce), (Be = ce.stopImmediatePropagation) == null || Be.call(ce), ne.schedule(te);
  }, U = a ? [v, y] : [v];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ce) => {
    U.forEach((te) => te.addEventListener(ce, k, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ce) => {
    y.addEventListener(ce, (te) => Mn(te, x)), v.addEventListener(ce, (te) => Mn(te, x));
  });
  const ie = $n(e, "state_json");
  let ke = null, Me = null;
  ie && !ie.__panoPreviewPatchedCb && (ke = ie.callback, Me = (ce) => {
    const te = ke ? ke(ce) : void 0;
    return q(), te;
  }, ie.callback = Me, ie.__panoPreviewPatchedCb = Me);
  const Ae = $n(e, "bg_color");
  let xe = null, ve = null;
  Ae && !Ae.__panoPreviewPatchedCb && (xe = Ae.callback, ve = (ce) => {
    const te = xe ? xe(ce) : void 0;
    return q(), te;
  }, Ae.callback = ve, Ae.__panoPreviewPatchedCb = ve);
  const Q = l ? $n(e, "output_size") : null, T = Q == null ? void 0 : Q.callback, F = Q ? (ce) => {
    const te = T ? T(ce) : void 0;
    return q(), te;
  } : null;
  Q && (Q.callback = F);
  const J = e.onRemoved, L = e.onResize, X = e.onExecuted, j = e.onDragOver, S = e.onDragDrop;
  let z = null;
  const re = () => {
    a && (Se.dropActive = !0, z && clearTimeout(z), z = setTimeout(() => {
      z = null, Se.dropActive = !1;
    }, 140));
  }, he = c ? function(ce) {
    return (j ? j.apply(this, arguments) : !1) === !0 ? !0 : cd(ce == null ? void 0 : ce.dataTransfer) ? (re(), !0) : !1;
  } : null, de = c ? function(ce) {
    var Pe;
    if ((S ? S.apply(this, arguments) : !1) === !0) return !0;
    const be = Array.from(((Pe = ce == null ? void 0 : ce.dataTransfer) == null ? void 0 : Pe.files) || []).find((Oe) => Cn(Oe));
    return be ? (z && clearTimeout(z), z = null, Se.dropActive = !1, G(be), !0) : !1;
  } : null;
  c && (e.onDragOver = he, e.onDragDrop = de);
  const we = c ? Ex(g, {
    onActive: (ce) => {
      if (ce) {
        re();
        return;
      }
      z && clearTimeout(z), z = null, Se.dropActive = !1;
    },
    onDrop: (ce) => {
      G(ce);
    }
  }) : () => {
  }, Ie = function(ce) {
    i.outputFromRun = !0;
    const te = C0(e, ce);
    Tr(e, te ? "executed" : "sync", ce), q();
    const be = X ? X.apply(this, arguments) : void 0;
    return ho(e), be;
  };
  e.onExecuted = Ie;
  const De = e.onConnectionsChange, ze = function(ce, te) {
    const be = Wf(e, ce, te, [...Yu, ...qu]), Pe = Wf(e, ce, te, On), Oe = arguments, Ee = De ? De.apply(this, Oe) : void 0, Ve = () => {
      R.destroyed || (Pe && iM(e), be && Tr(e, "connection-change"), ho(e), q());
    };
    return Ve(), queueMicrotask(Ve), Ee;
  };
  e.onConnectionsChange = ze;
  const Ue = function() {
    const ce = L ? L.apply(this, arguments) : void 0;
    return ct(this).userResized = !0, q(), ce;
  };
  e.onResize = Ue;
  const We = function() {
    return Ce(), Gc.unregister(this), J ? J.apply(this, arguments) : void 0;
  };
  e.onRemoved = We;
  const Ce = () => {
    var ce, te, be, Pe, Oe, Ee, Ve;
    R.destroyed = !0, (ce = K == null ? void 0 : K.disconnect) == null || ce.call(K), a ? M() : le(), y.removeEventListener("lostpointercapture", Y), we(), W(), window.removeEventListener("keydown", V, !0), o.flushers.delete(ye), (te = ee == null ? void 0 : ee.destroy) == null || te.call(ee), (be = D == null ? void 0 : D.unmount) == null || be.call(D), ge && (ge.playback.dispose(), ge.video.remove(), ge.stickerVideo.remove(), Fr(ge.still), Fr(ge.stickerStill), r.playback === ge && (r.playback = null)), ae.dispose(), r.scene = null, (Oe = (Pe = r.rasterCache) == null ? void 0 : Pe.dispose) == null || Oe.call(Pe), r.rasterCache = null, r.rasterReady = null, r.paintEngine = null, r.paintState = null, r.paintRevision = null, oe(), ne.dispose(), z && clearTimeout(z), z = null, ud.disposeOwner(e), Ri(e), pd(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((Ee = r.cutout) == null ? void 0 : Ee.session) === ee && (r.cutout = null), ((Ve = r.stickers) == null ? void 0 : Ve.session) === ee && (r.stickers = null), r.cutoutState = null, r.stickersState = null, r.cutoutFrame = null, r.resizeSettleTimer && (clearTimeout(r.resizeSettleTimer), r.resizeSettleTimer = null), r.dom = null, r.restore = null, e.onResize === Ue && (e.onResize = L), e.onExecuted === Ie && (e.onExecuted = X), e.onConnectionsChange === ze && (e.onConnectionsChange = De), Me && (ie == null ? void 0 : ie.callback) === Me && (ie.callback = ke), Me && (ie == null ? void 0 : ie.__panoPreviewPatchedCb) === Me && delete ie.__panoPreviewPatchedCb, ve && (Ae == null ? void 0 : Ae.callback) === ve && (Ae.callback = xe), ve && (Ae == null ? void 0 : Ae.__panoPreviewPatchedCb) === ve && delete Ae.__panoPreviewPatchedCb, F && Q.callback === F && (Q.callback = T), e.onDragOver === he && (e.onDragOver = j), e.onDragDrop === de && (e.onDragDrop = S), e.onRemoved === We && (e.onRemoved = J);
  };
  r.restore = Ce, r.cutout = ee && b && !a ? { session: ee, model: Se } : null, r.stickers = ee && b && a ? { session: ee, model: Se } : null, r.dom = {
    widget: P,
    root: g,
    canvas: y,
    requestDraw: q,
    state: R,
    emptyHintEl: H,
    nodeSurface: r.cutout
  }, Gc.register(e), e.graph && Tr(e, "attach"), q();
}
function gp(e, t = {}) {
  _0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function yp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (S0(e) && !n) {
    dd(e);
    return;
  }
  _0(e).attach(t);
}
function TM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function DM(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(n), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let h = f > 0 ? Math.min(1, u / f) : 1;
  return r && l > 0 && c > 0 && (h = Math.min(h, r.width * o / l, r.height * o / c)), {
    width: Math.max(1, Math.round(l * h)),
    height: Math.max(1, Math.round(c * h))
  };
}
function LM({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var h;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const _ = l();
    return _ === a || (a = _, i(_)), _;
  }, d = () => c();
  return (h = t == null ? void 0 : t.addEventListener) == null || h.call(t, "fullscreenchange", d), c(), { toggle: async () => {
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
    var _, g, v;
    if (!s) {
      if (s = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", d), l())
        try {
          const y = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (v = y == null ? void 0 : y.catch) == null || v.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const RM = { class: "pano-preview-node-surface" }, VM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Fe(), Le("div", RM, [
      Ye(Ht, {
        icon: e.model.fullscreen ? Ze(He).fullscreen_close : Ze(He).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (Fe(), gn(il, { key: 0 })) : nt("", !0)
    ]));
  }
}, As = 140, $M = 180, bp = 40, Xl = 10;
function vp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Sp(e, t) {
  const n = vp(e), r = vp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function _p(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((o = qt) == null ? void 0 : o.apiURL) == "function" ? qt.apiURL(i) : i;
}
function Vi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Vi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return _p({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Vi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : _p(e);
}
function I0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function zM(e) {
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
function Uc(e) {
  var i;
  const t = (i = jn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Sp(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Sp(o, n)) return t[o];
  return null;
}
function jM(e) {
  var r, i;
  const t = Uc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const s of o) {
        const a = Vi(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function HM(e, t = "erp_image") {
  var h, _, g, v, y, H, W;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((O) => String((O == null ? void 0 : O.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((O, P) => String((O == null ? void 0 : O.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(P))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (_ = (h = jn) == null ? void 0 : h.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : g.call(_, o), a = Uc(o), l = Uc(e == null ? void 0 : e.id), c = [
    (v = l == null ? void 0 : l.ui) == null ? void 0 : v.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const O of c)
    if (Array.isArray(O))
      for (const P of O) {
        const R = Vi(P);
        if (R) return R;
      }
  let d = [];
  try {
    d = typeof ((H = jn) == null ? void 0 : H.getNodeImageUrls) == "function" ? jn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const O of d) {
      const P = Vi(O);
      if (P) return P;
    }
  if (s) {
    const O = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const P of O) {
      const R = Vi(P);
      if (R) return R;
    }
  }
  const u = (W = s == null ? void 0 : s.widgets) == null ? void 0 : W.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? qt.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Jl(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function wp(e, t, n, r, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !I0(o) || n <= 1 || r <= 1) {
    Jl(t, n, r);
    return;
  }
  if (s.failed) {
    Jl(t, n, r);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: n,
    height: r,
    camera: Sa(i, n, r),
    background: { media: o, revision: zM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : Jl(t, n, r);
}
function kp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class GM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = bg(() => this.requestDraw()), this.controller = bu({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ft(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Te(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Te(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, a;
        const r = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((a = this.canvas) == null ? void 0 : a.clientHeight) || 0))
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
    var r, i, o;
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
    const n = ((o = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...s) => {
      const a = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), a;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var o;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (o = this.flags) != null && o.collapsed || !t.errorText) return r;
      const i = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(i.x, i.y, i.w, i.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.classList.add("pano-node-frame"), this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${As}px`,
        "position:relative",
        "display:block",
        "overflow:hidden"
      ].join(";"), this.canvas = Gt({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return As;
        },
        getHeight() {
          return As;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Aa($c(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(As, Number(o.minHeight || 0)),
            minWidth: Math.max($M, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return ad(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Yi({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = LM({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = gu(VM, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), gr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, gr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Uh(n), t.addEventListener("pointerdown", (o) => {
      var s, a, l;
      o.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (a = t.setPointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const r = (o) => {
      var s, a;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), n.addEventListener("keydown", (o) => {
      var s;
      TM(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !I0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Us(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = jn.canvas) != null && r.graph) || this.node.graph === jn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var s;
      const i = t.localPoint(r);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return kp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var l, c, d, u, f, h;
      const o = lM(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!o || !kp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = n == null ? void 0 : n.preventDefault) == null || u.call(n), (f = n == null ? void 0 : n.stopPropagation) == null || f.call(n), (h = n == null ? void 0 : n.stopImmediatePropagation) == null || h.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, s;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Xl * 2), n = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - bp - Xl);
    return { x: Xl, y: bp, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), wp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? yg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = DM(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = jM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Hi(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const n = HM(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), wp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, s, a, l, c, d, u, f, h, _, g, v, y;
    if (((n = Ag(this.node)) == null ? void 0 : n.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, gr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (h = this.root) == null ? void 0 : h.remove) == null || _.call(h);
    } catch {
    }
    try {
      y0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (v = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (H) => (H == null ? void 0 : H.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), gr(this.node).runtime = null;
  }
}
function KM(e, t = {}) {
  if (!e || gr(e).runtime) return;
  const n = new GM(e, t);
  gr(e).runtime = n, n.attach();
}
function E0(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return a;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return a;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const a = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return a;
  };
}
function hd(e) {
  return !!(e != null && e.prototype);
}
function Zo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function WM(e, t = {}) {
  hd(e) || KM(e, {
    ...t,
    onOpen: Zo(e, t.onOpen)
  });
}
function UM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!hd(e)) {
    yp(e, {
      ...r,
      onOpen: Zo(e, t.onOpen)
    });
    return;
  }
  E0(e, "stickers_node_preview", (i) => {
    yp(i, {
      ...r,
      onOpen: Zo(i, t.onOpen)
    });
  });
}
function BM(e, t = {}) {
  if (!hd(e)) {
    gp(e, {
      ...t,
      onOpen: Zo(e, t.onOpen)
    });
    return;
  }
  E0(e, "cutout_preview", (n) => {
    gp(n, {
      ...t,
      onOpen: Zo(n, t.onOpen)
    });
  });
}
const pn = {
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
}, fr = "pen";
function xp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function YM({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, a] of Object.entries(n))
      r.delete(s) && a();
  }
  return {
    request(s) {
      r.add(s), i ?? (i = e(o));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const ot = Object.freeze({
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
}), qM = new Set(Object.values(ot));
function XM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (v) {
      i(v);
    }
  }
  function h() {
    !o && !s && !a && (o = e(_));
  }
  function _(g) {
    o = 0, s = !0;
    try {
      const v = c;
      c = /* @__PURE__ */ new Map();
      for (const H of v.values()) f(() => H(g));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || r()) && f(() => n(g, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || r()) && h();
  }
  return {
    requestDraw(g) {
      if (!qM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ot.STATE && (u += 1), l.add(g), h();
    },
    requestFrame(g) {
      const v = d++;
      return c.set(v, g), h(), v;
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
const JM = { class: "pano-floating-right" }, ZM = {
  key: 0,
  class: "pano-floating-space"
}, QM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, eP = ["data-settled"], tP = ["data-ready", "data-settled"], nP = ["aria-label", "data-tip"], rP = {
  key: 1,
  class: "pano-camera-preview-label"
}, iP = {
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
    return (t, n) => (Fe(), Le(Xe, null, [
      Ne("div", JM, [
        e.space ? br((Fe(), Le("div", ZM, [
          Ne("div", QM, [
            (Fe(!0), Le(Xe, null, mt(e.space.modes, (r) => (Fe(), gn(Ht, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ye(Ht, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ci, e.space.visible]
        ]) : nt("", !0),
        (Fe(!0), Le(Xe, null, mt(e.buttons, (r) => (Fe(), gn(Ht, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      br(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: vt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = Ne("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ne("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Fe(), Le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ye(Mt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, nP)) : nt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Fe(), Le("div", rP, Je(e.preview.label || "Preview unavailable"), 1)) : nt("", !0)
        ], 14, tP)
      ], 8, eP), [
        [ci, e.preview.visible]
      ])
    ], 64));
  }
}, oP = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, sP = ["y2", "transform"], aP = ["transform"], lP = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = rt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => br((Fe(), Le("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Fe(), Le("svg", oP, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Fe(!0), Le(Xe, null, mt(Ze(n), (s) => (Fe(), Le("line", {
          key: s,
          class: at(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, sP))), 128)),
        Ne("g", { transform: r.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, aP),
        o[2] || (o[2] = Ne("circle", {
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
}, cP = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Fe(), Le("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ye(s0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ye(Ht, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(lP, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, uP = ["aria-label"], dP = { class: "pano-canvas-confirm-title" }, fP = { class: "pano-canvas-confirm-text" }, pP = { class: "pano-canvas-confirm-actions" }, hP = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, mP = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Vt(null), r = /* @__PURE__ */ Vt(null);
    let i = null;
    function o() {
      const u = r.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function s(u) {
      const f = r.value;
      if (!f) return;
      const h = f.querySelector(`[data-action='${u}']`);
      h instanceof HTMLButtonElement && h.click();
    }
    function a() {
      var g;
      const u = r.value;
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
      const f = o(), h = r.value;
      if (!f.length) {
        u.preventDefault(), (y = h == null ? void 0 : h.focus) == null || y.call(h);
        return;
      }
      const _ = f[0], g = f[f.length - 1], v = document.activeElement;
      if (u.shiftKey) {
        (v === _ || v === h || !(h != null && h.contains(v))) && (u.preventDefault(), g.focus());
        return;
      }
      (v === g || !(h != null && h.contains(v))) && (u.preventDefault(), _.focus());
    }
    function d(u) {
      u.target === n.value && s("confirm-cancel");
    }
    return ii(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, Ga(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ns(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Fe(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: ht(d, ["self"])
    }, [
      Ne("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Ne("div", dP, Je(e.model.title), 1),
        Ne("div", fP, Je(e.model.text), 1),
        Ne("div", pP, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", hP, Je(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, uP)
    ], 512)) : nt("", !0);
  }
}, gP = ["data-paint-pane"], yP = ["hidden"], bP = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], vP = ["aria-pressed", "disabled"], SP = ["hidden"], _P = { class: "pano-paint-color-pop-head" }, wP = { class: "pano-paint-color-field" }, kP = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, xP = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, MP = { class: "pano-paint-color-field" }, PP = { class: "pano-paint-alpha-wrap" }, NP = ["value"], AP = { "data-paint-alpha-value": "" }, CP = ["hidden"], IP = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, EP = ["data-paint-history-index", "aria-label", "disabled"], OP = ["data-paint-footer"], FP = ["data-paint-group"], TP = ["hidden"], DP = ["value", "disabled"], LP = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, RP = ["hidden"], VP = {
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
    return (r, i) => (Fe(), Le("div", {
      class: at(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Fe(!0), Le(Xe, null, mt(e.panes, (o) => {
        var s;
        return Fe(), Le("div", {
          key: o.key,
          class: at(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Fe(), Le("div", {
            key: 0,
            class: at(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Fe(!0), Le(Xe, null, mt(e.paintSwatches, (a) => (Fe(), Le("button", {
              key: a.id,
              class: at(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: vt(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, bP))), 128)),
            Ne("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: vt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, vP),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: vt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ne("div", _P, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: vt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", wP, [
                Ne("div", kP, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: vt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", xP, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: vt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", MP, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", PP, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, NP),
                  Ne("span", AP, Je(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", IP, [
                  (Fe(!0), Le(Xe, null, mt(e.state.historyEntries || [], (a) => (Fe(), Le("button", {
                    key: a.index,
                    class: at(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: vt(n(a.color))
                  }, null, 14, EP))), 128))
                ])
              ], 8, CP)
            ], 12, SP)
          ], 10, yP)) : nt("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Fe(!0), Le(Xe, null, mt(o.tools, (a) => {
                var l;
                return Fe(), gn(Ht, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, FP),
            Ne("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: vt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, DP),
              Ne("span", LP, Je(e.state.sizeText || "10"), 1)
            ], 10, TP),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ye(Ht, {
                icon: Ze(He).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, RP)
          ], 8, OP)
        ], 10, gP);
      }), 128))
    ], 2));
  }
}, $P = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Vt(null), r = /* @__PURE__ */ Vt(null), i = /* @__PURE__ */ Vt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Fe(), Le(Xe, null, [
      Ne("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ne("div", {
        ref_key: "sizePreviewRef",
        ref: r,
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
}, zP = ["aria-label"], jP = ["data-tip", "aria-pressed"], HP = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = rt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Fe(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: vt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Fe(!0), Le(Xe, null, mt(e.buttons, (o) => (Fe(), Le("button", dr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), Je(o.label), 17, jP))), 128))
    ], 12, zP));
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
}, WP = ["data-aspect"], UP = ["data-action", "aria-label", "data-tip", "disabled"], BP = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Fe(), Le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: vt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Fe(!0), Le(Xe, null, mt(e.model.items || [], (r) => (Fe(), Le(Xe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Fe(), Le("div", GP, [
          Ne("button", KP, [
            Ye(Mt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: at(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Fe(!0), Le(Xe, null, mt(r.choices || [], (i) => (Fe(), Le("button", {
              key: i.value,
              class: at(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, Je(i.label), 11, WP))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Fe(), gn(HP, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Fe(), Le("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Ye(Mt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, UP))
      ], 64))), 128))
    ], 4));
  }
}, YP = {
  key: 0,
  class: "pano-easing"
}, qP = { class: "pano-section-title" }, XP = { class: "pano-easing-range" }, JP = { class: "pano-easing-modes" }, ZP = ["aria-pressed", "onClick"], QP = ["viewBox"], eN = ["x", "y"], tN = ["x1", "y1", "x2", "y2"], nN = ["d"], rN = ["x1", "y1", "x2", "y2"], iN = ["x1", "y1", "x2", "y2"], oN = ["cx", "cy"], sN = ["cx", "cy"], aN = { class: "pano-easing-note" }, lr = 132, Jr = 14, lN = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ Vt(null), s = rt(() => {
      var _;
      return Array.isArray((_ = n.model) == null ? void 0 : _.easing) ? n.model.easing : null;
    }), a = (_) => Jr + _ * lr, l = (_) => Jr + (1 - _) * lr, c = rt(() => {
      var H;
      if (((H = n.model) == null ? void 0 : H.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [_, g, v, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(_)} ${l(g)} ${a(v)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = rt(() => s.value ? s.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var g;
      return JSON.stringify(_.easing) === JSON.stringify((g = n.model) == null ? void 0 : g.easing);
    }
    function f(_, g) {
      r("timeline", { type: "easing", easing: _, commit: g });
    }
    function h(_, g) {
      var O;
      if (_.button !== 0 || !s.value) return;
      const v = _.currentTarget;
      (O = v.setPointerCapture) == null || O.call(v, _.pointerId);
      let y = null;
      const H = (P) => {
        const R = o.value.getBoundingClientRect(), Z = R.width / (lr + Jr * 2), q = ((P.clientX - R.left) / Z - Jr) / lr, ae = 1 - ((P.clientY - R.top) / Z - Jr) / lr;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, q)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, ae)) * 100) / 100, f(y, !1);
      }, W = () => {
        v.removeEventListener("pointermove", H), v.removeEventListener("pointerup", W), v.removeEventListener("pointercancel", W), y && f(y, !0);
      };
      v.addEventListener("pointermove", H), v.addEventListener("pointerup", W), v.addEventListener("pointercancel", W);
    }
    return (_, g) => e.model ? (Fe(), Le("div", YP, [
      Ne("div", qP, [
        g[2] || (g[2] = Ne("span", null, "Easing", -1)),
        Ne("span", XP, Je(e.model.label), 1)
      ]),
      Ne("div", JP, [
        (Fe(), Le(Xe, null, mt(i, (v) => Ne("button", {
          key: v.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(v) ? "true" : "false",
          onClick: (y) => f(v.easing, !0)
        }, Je(v.label), 9, ZP)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Fe(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${lr + Jr * 2} ${lr + Jr * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: lr,
          height: lr
        }, null, 8, eN),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, tN),
        Ne("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, nN),
        s.value ? (Fe(), Le(Xe, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, rN),
          Ne("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, iN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (v) => h(v, 0))
          }, null, 40, oN),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (v) => h(v, 2))
          }, null, 40, sN)
        ], 64)) : nt("", !0)
      ], 8, QP)) : nt("", !0),
      Ne("div", aN, [
        e.model.mixed ? (Fe(), Le(Xe, { key: 0 }, [
          lo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Fe(), Le(Xe, { key: 1 }, [
          lo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Fe(), Le(Xe, { key: 2 }, [
          lo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Fe(), Le(Xe, { key: 3 }, [
          lo("cubic-bezier(" + Je(d.value) + ")", 1)
        ], 64)) : nt("", !0)
      ])
    ])) : nt("", !0);
  }
}, cN = ["title"], uN = { class: "pano-ui-row" }, dN = ["disabled"], fN = { class: "pano-upstream-lanes" }, pN = ["data-action", "data-lane", "disabled", "title"], hN = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, n) => e.model ? (Fe(), Le("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Ne("div", uN, [
        n[0] || (n[0] = Ne("label", null, "Revert to upstream", -1)),
        Ne("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, dN)
      ]),
      Ne("div", fN, [
        (Fe(!0), Le(Xe, null, mt(e.model.lanes, (r) => (Fe(), Le("button", {
          key: r.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": r.action,
          "data-lane": r.name,
          disabled: r.disabled,
          title: `Revert ${r.label} to upstream`
        }, Je(r.label), 9, pN))), 128))
      ])
    ], 8, cN)) : nt("", !0);
  }
}, mN = {
  class: "pano-side",
  "data-side": ""
}, gN = { class: "pano-side-head" }, yN = { class: "pano-side-title" }, bN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, vN = {
  key: 0,
  class: "pano-side-scroll"
}, SN = { class: "pano-inspector" }, _N = { class: "pano-ui-row pano-coverage-row" }, wN = ["data-selected"], kN = ["aria-pressed", "disabled"], xN = ["aria-pressed", "disabled"], MN = {
  key: 0,
  class: "pano-section-title"
}, PN = { class: "meta" }, NN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, AN = {
  class: "pano-picker",
  "data-picker": "selection"
}, CN = ["disabled"], IN = { class: "pano-picker-label" }, EN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, ON = ["hidden"], FN = ["data-selection-id"], TN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, DN = {
  key: 2,
  class: "pano-state-actions"
}, LN = ["disabled"], RN = ["data-key"], VN = { class: "pano-field-group-values" }, $N = ["title", "onPointerdown"], zN = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], jN = ["data-key"], HN = ["min", "max", "step", "value", "disabled", "data-param-key"], GN = ["min", "max", "step", "value", "disabled", "data-param-key"], KN = ["open"], WN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, UN = { class: "pano-ui-settings-body" }, BN = { class: "pano-ui-row" }, YN = ["data-selected"], qN = ["aria-pressed"], XN = ["aria-pressed"], JN = { class: "pano-ui-row" }, ZN = ["data-selected"], QN = ["aria-pressed"], e2 = ["aria-pressed"], t2 = {
  key: 1,
  class: "pano-side-footer"
}, n2 = ["data-action"], r2 = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = rt(() => {
      const c = n.model;
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
      if (c.button !== 0 || !u || s(d, n.model)) return;
      c.preventDefault();
      const f = c.currentTarget, h = c.clientX, _ = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const v = (H) => {
        if (!g && Math.abs(H.clientX - h) < 3) return;
        g = !0;
        const W = _ + (H.clientX - h) * d.drag * (H.shiftKey ? 0.1 : 1);
        u.value = String(Number(W.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", v), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", v), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, h, _, g, v;
      return Fe(), Le("div", mN, [
        Ne("div", gN, [
          Ne("div", yN, [
            Ne("span", bN, [
              Ye(Mt, {
                icon: Ze(He).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, Je(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Fe(), Le("div", vN, [
          Ne("div", SN, [
            d[9] || (d[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", _N, [
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
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, kN),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, xN)
              ], 8, wN)
            ]),
            e.model.transformTitle !== !1 ? (Fe(), Le("div", MN, [
              d[3] || (d[3] = Ne("span", null, "Transform", -1)),
              Ne("span", PN, Je(((v = e.model.upstream) == null ? void 0 : v.origin) || ""), 1)
            ])) : nt("", !0),
            e.model.selectionPicker ? (Fe(), Le("div", NN, [
              Ne("label", null, Je(e.model.selectionPicker.label), 1),
              Ne("div", AN, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", IN, [
                    e.model.selectionPicker.currentIcon ? (Fe(), Le("span", EN, [
                      Ye(Mt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : nt("", !0),
                    Ne("span", null, Je(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, CN),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Fe(!0), Le(Xe, null, mt(e.model.selectionPicker.items || [], (y) => (Fe(), Le("button", {
                    key: y.id,
                    type: "button",
                    class: at(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Fe(), Le("span", TN, [
                      Ye(Mt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : nt("", !0),
                    Ne("span", null, Je(y.label), 1)
                  ], 10, FN))), 128))
                ], 8, ON)
              ])
            ])) : nt("", !0),
            e.model.copyStateButton ? (Fe(), Le("div", DN, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(Mt, {
                  icon: Ze(He).copy
                }, null, 8, ["icon"]),
                Ne("span", null, Je(e.model.copyStateButton.label), 1)
              ], 8, LN)
            ])) : nt("", !0),
            Ne("div", {
              class: at(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Fe(!0), Le(Xe, { key: 0 }, mt(e.model.notes, (y) => (Fe(), Le("div", {
                key: y,
                class: "pano-param-note"
              }, Je(y), 1))), 128)) : (Fe(!0), Le(Xe, { key: 1 }, mt(e.model.rows || [], (y) => (Fe(), Le(Xe, {
                key: y.key
              }, [
                y.grouped ? (Fe(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Ne("label", null, Je(y.label), 1),
                  Ne("div", VN, [
                    (Fe(!0), Le(Xe, null, mt(y.fields, (H) => (Fe(), Le("div", {
                      key: H.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: at(["pano-axis", { disabled: s(H, e.model) }]),
                        title: H.label,
                        onPointerdown: (W) => l(W, H)
                      }, Je(H.short), 43, $N),
                      Ne("input", {
                        ref_for: !0,
                        ref: (W) => {
                          a[H.key] = W;
                        },
                        type: "number",
                        min: H.min,
                        max: H.max,
                        step: H.step,
                        value: H.displayValue,
                        disabled: s(H, e.model),
                        "aria-label": `${y.label} ${H.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": H.key
                      }, null, 8, zN)
                    ]))), 128))
                  ])
                ], 8, RN)) : (Fe(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Ne("label", null, Je(y.label), 1),
                  Ne("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: vt(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, HN),
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
                  }, null, 8, GN)
                ], 8, jN))
              ], 64))), 128))
            ], 2),
            Ye(hN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Ye(lN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => r("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Fe(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                d[5] || (d[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", WN, [
                  Ye(Mt, {
                    icon: Ze(He).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", UN, [
                Ne("div", BN, [
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
                    }, "Normal", 8, qN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, XN)
                  ], 8, YN)
                ]),
                Ne("div", JN, [
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
                    }, "Normal", 8, QN),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, e2)
                  ], 8, ZN)
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
            ], 8, KN)) : nt("", !0)
          ])
        ])) : nt("", !0),
        (e.model.footerButtons || []).length ? (Fe(), Le("div", t2, [
          (Fe(!0), Le(Xe, null, mt(e.model.footerButtons, (y) => (Fe(), Le("button", {
            key: y.action,
            class: at(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, Je(y.label), 11, n2))), 128))
        ])) : nt("", !0)
      ]);
    };
  }
}, i2 = { class: "pano-timeline-group" }, o2 = ["title"], s2 = ["disabled"], a2 = ["disabled"], l2 = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, i) => (Fe(), Le("div", i2, [
      Ne("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, Je(e.group.label), 9, o2),
      Ne("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = ht((o) => n("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, s2),
      Ne("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = ht((o) => n("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, Je(e.group.restore.label), 9, a2)
    ]));
  }
}, c2 = { class: "pano-timeline-bar" }, u2 = ["disabled", "aria-label", "data-tip"], d2 = ["aria-label", "data-tip"], f2 = { class: "pano-timeline-time" }, p2 = ["data-tip"], h2 = { key: 0 }, m2 = ["min", "max", "value"], g2 = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames"
}, y2 = ["max", "value"], b2 = ["disabled"], v2 = ["aria-expanded"], S2 = ["inert"], _2 = { class: "pano-timeline-name" }, w2 = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], k2 = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, x2 = ["disabled", "aria-expanded", "aria-label", "onClick"], M2 = ["title", "aria-current", "onClick"], P2 = ["role", "aria-label", "data-tip"], N2 = ["disabled", "data-keyed", "aria-label", "onClick"], A2 = ["onPointerdown"], C2 = ["onPointerdown"], I2 = ["onPointerdown"], E2 = ["onPointerdown"], O2 = ["aria-label", "data-tip", "onPointerdown"], F2 = { key: 0 }, T2 = ["onPointerdown"], D2 = ["aria-label", "data-tip", "onPointerdown"], L2 = { key: 0 }, R2 = 10, V2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Vt(null), o = /* @__PURE__ */ Vt(null), s = /* @__PURE__ */ Vt(1), a = /* @__PURE__ */ Vt(0), l = /* @__PURE__ */ Vt(!1);
    let c = null, d = null, u = null;
    Wa(() => {
      c = new ResizeObserver(([oe]) => {
        s.value = Math.max(1, oe.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([oe]) => {
        a.value = oe.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ns(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = rt(() => Math.max(1, Number(n.model.span || 1))), h = rt(() => n.playhead.frame.value), _ = rt(() => n.playhead.playing.value), g = rt(() => wS(h.value, Number(n.model.fps || 1))), v = rt(() => s.value / f.value), y = (oe) => `${oe / f.value * 100}%`, H = rt(() => FS(f.value, v.value));
    function W(oe) {
      const C = i.value.getBoundingClientRect(), G = Math.floor((oe - C.left) / Math.max(1, C.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, G));
    }
    function O(oe, C, G) {
      const N = Math.ceil(R2 / Math.max(1e-6, v.value)), ue = C.filter((E) => E.frame < f.value), A = new Map(ue.map((E) => [E.frame, E.full]));
      return TS(ue.map((E) => E.frame), N).map((E, w) => ({
        ...E,
        key: `${oe}:${w}`,
        partial: E.frames.some((M) => !A.get(M)),
        selected: E.frames.some((M) => G.includes(M))
      }));
    }
    const P = rt(() => [
      ...(n.model.rows || []).map((oe) => ({ key: oe.id, row: oe })),
      ...(n.model.groups || []).flatMap((oe) => [
        { key: `group:${oe.key}`, group: oe },
        ...oe.rows.map((C) => ({ key: C.id, row: C }))
      ])
    ]), R = rt(() => {
      const oe = /* @__PURE__ */ new Map();
      for (const { row: C } of P.value)
        if (C) {
          oe.set(C.id, O(C.id, C.keys, C.selectedFrames));
          for (const G of C.lanes) oe.set(G.key, O(G.key, G.frames.map((N) => ({ frame: N, full: !0 })), G.selectedFrames));
        }
      return oe;
    });
    function Z(oe) {
      const C = oe.end === null ? f.value : Math.min(oe.end, f.value);
      return { left: y(oe.start), width: y(Math.max(0, C - oe.start)) };
    }
    function q(oe, C) {
      const G = oe.clientX, N = Math.max(1e-6, v.value);
      let ue = 0;
      C("start", 0, oe);
      const A = (w) => {
        if (w.pointerId !== oe.pointerId) return;
        const M = Math.round((w.clientX - G) / N);
        M !== ue && (ue = M, C("move", ue, w));
      }, E = (w) => {
        w.pointerId === oe.pointerId && (u(), C("end", ue, w));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", A), window.removeEventListener("pointerup", E), window.removeEventListener("pointercancel", E), u = null;
      }, window.addEventListener("pointermove", A), window.addEventListener("pointerup", E), window.addEventListener("pointercancel", E);
    }
    function ae(oe) {
      oe.button === 0 && q(oe, (C, G, N) => r("action", { type: "seek", frame: W(N.clientX), phase: C }));
    }
    function Se(oe, C, G) {
      oe.button === 0 && (r("action", { type: "select-row", id: C.id }), q(oe, (N, ue) => r("action", { type: "clip", id: C.id, mode: G, delta: ue, phase: N })));
    }
    function ge(oe, C, G, N, ue) {
      if (oe.button === 0) {
        if (oe.shiftKey) {
          r("action", { type: "select-keys", owner: C.id, lane: G, frames: N.frames, additive: !0 });
          return;
        }
        N.frames.every((A) => ue.includes(A)) || r("action", { type: "select-keys", owner: C.id, lane: G, frames: N.frames, additive: !1 }), q(oe, (A, E) => r("action", { type: "move-keys", delta: E, phase: A }));
      }
    }
    const B = rt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function _e(oe, C, G) {
      r("action", C), await Ga(), oe.target.value = G();
    }
    function pe(oe) {
      _e(oe, { type: "fps", fps: Number(oe.target.value) }, () => B.value);
    }
    const fe = rt(() => String(n.model.length ?? f.value));
    function ee(oe) {
      const C = oe.target.value.trim();
      if (!C) {
        oe.target.value = fe.value;
        return;
      }
      _e(oe, { type: "length", length: Number(C) }, () => fe.value);
    }
    function me(oe, C, G) {
      oe.button !== 0 || oe.target !== oe.currentTarget || r("action", { type: "select-keys", owner: C.id, lane: G, frames: [], additive: !1 });
    }
    return (oe, C) => br((Fe(), Le("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", c2, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: C[0] || (C[0] = (G) => r("action", { type: "play" }))
        }, [
          Ye(Mt, {
            icon: _.value ? Ze(He).pause : Ze(He).play
          }, null, 8, ["icon"])
        ], 8, u2),
        e.model.hasAudio ? (Fe(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: C[1] || (C[1] = (G) => r("action", { type: "mute" }))
        }, [
          Ye(Mt, {
            icon: e.model.muted ? Ze(He).volume_muted : Ze(He).volume2
          }, null, 8, ["icon"])
        ], 8, d2)) : nt("", !0),
        Ne("span", f2, Je(g.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Fe(), Le("span", h2, Je(B.value), 1)) : (Fe(), Le("input", {
            key: 1,
            type: "number",
            min: Ze(um),
            max: Ze(xu),
            step: "any",
            value: B.value,
            "aria-label": "Timeline fps",
            onChange: pe
          }, null, 40, m2)),
          C[8] || (C[8] = Ne("span", null, "fps", -1))
        ], 8, p2),
        Ne("label", g2, [
          C[9] || (C[9] = Ne("span", null, "Length", -1)),
          Ne("input", {
            type: "number",
            min: "1",
            max: Ze(Mu),
            step: "1",
            value: fe.value,
            "aria-label": "Output length in frames",
            onChange: ee
          }, null, 40, y2)
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-length-reset",
          type: "button",
          disabled: e.model.length == null,
          "aria-label": "Reset length to the inputs",
          "data-tip": "Reset length to the inputs",
          onClick: C[2] || (C[2] = (G) => r("action", { type: "length", length: null }))
        }, [
          Ye(Mt, {
            icon: Ze(He).reset
          }, null, 8, ["icon"])
        ], 8, b2),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: C[3] || (C[3] = (G) => r("action", { type: "toggle-expanded" }))
        }, [
          C[10] || (C[10] = Ne("span", null, "Timeline", -1)),
          Ye(Mt, {
            icon: Ze(He).chevron
          }, null, 8, ["icon"])
        ], 8, v2)
      ]),
      Ne("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: vt({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: C[5] || (C[5] = ht((G) => l.value = !0, ["self"])),
        onTransitionend: C[6] || (C[6] = ht((G) => l.value = !1, ["self"])),
        onTransitioncancel: C[7] || (C[7] = ht((G) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          C[11] || (C[11] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ae
          }, [
            (Fe(!0), Le(Xe, null, mt(H.value, (G) => (Fe(), Le("span", {
              key: G,
              class: "pano-timeline-tick",
              style: vt({ left: y(G) })
            }, Je(G), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: vt({ left: y(h.value + 0.5) })
            }, null, 4)
          ], 544),
          (Fe(!0), Le(Xe, null, mt(P.value, ({ key: G, row: N, group: ue }) => (Fe(), Le(Xe, { key: G }, [
            ue ? (Fe(), gn(l2, {
              key: 0,
              group: ue,
              onAction: C[4] || (C[4] = (A) => r("action", A))
            }, null, 8, ["group"])) : nt("", !0),
            N ? (Fe(), Le("div", {
              key: 1,
              class: at(["pano-timeline-head", { selected: N.selected, "is-hidden": !N.visible }])
            }, [
              Ne("div", _2, [
                N.hideable ? (Fe(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": N.visible ? "true" : "false",
                  disabled: !N.editable,
                  "aria-label": `${N.label} visible`,
                  "data-tip": N.editable ? N.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: ht((A) => r("action", { type: "toggle-visible", id: N.id }), ["stop"])
                }, [
                  Ye(Mt, {
                    icon: N.visible ? Ze(He).eye : Ze(He).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, w2)) : (Fe(), Le("span", k2)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !N.keyable,
                  "aria-expanded": N.open ? "true" : "false",
                  "aria-label": N.open ? `Hide ${N.label} parameters` : `Show ${N.label} parameters`,
                  onClick: ht((A) => r("action", { type: "toggle-row", id: N.id }), ["stop"])
                }, [
                  Ye(Mt, {
                    icon: Ze(He).chevron
                  }, null, 8, ["icon"])
                ], 8, x2),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: N.label,
                  "aria-current": N.selected ? "true" : void 0,
                  onClick: (A) => r("action", { type: "select-row", id: N.id })
                }, [
                  Ye(Mt, {
                    icon: N.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, Je(N.label), 1)
                ], 8, M2),
                N.upstream ? (Fe(), Le("span", {
                  key: 2,
                  class: at(["pano-timeline-override", { on: N.overridden }]),
                  role: N.overridden ? "img" : void 0,
                  "aria-label": N.overridden ? "Overridden in this node" : void 0,
                  "data-tip": N.overridden ? "Overridden in this node" : null
                }, null, 10, P2)) : nt("", !0),
                N.keyable ? (Fe(), Le("button", {
                  key: 3,
                  class: at(["pano-timeline-key", { keyed: Ze(Fl)(N.keys, h.value) }]),
                  type: "button",
                  disabled: !N.editable,
                  "data-keyed": Ze(Fl)(N.keys, h.value) ? "true" : "false",
                  "aria-label": Ze(Fl)(N.keys, h.value) ? `Every ${N.label} parameter has a keyframe here; update them` : `Add keyframes for every ${N.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: ht((A) => r("action", { type: "key-row", owner: N.id }), ["stop"])
                }, [
                  Ye(Mt, {
                    icon: Ze(He).keyframe
                  }, null, 8, ["icon"])
                ], 10, N2)) : nt("", !0)
              ]),
              N.open ? (Fe(!0), Le(Xe, { key: 0 }, mt(N.lanes, (A) => (Fe(), Le("div", {
                key: A.key,
                class: "pano-timeline-lane-head"
              }, Je(A.label), 1))), 128)) : nt("", !0)
            ], 2)) : nt("", !0),
            N ? (Fe(), Le("div", {
              key: 2,
              class: at(["pano-timeline-track", { selected: N.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (A) => me(A, N, null)
              }, [
                N.clip && N.clip.start < f.value ? (Fe(), Le("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: N.clip.end === null }]),
                  style: vt(Z(N.clip)),
                  onPointerdown: ht((A) => Se(A, N, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: ht((A) => Se(A, N, "start"), ["stop"])
                  }, null, 40, I2),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: ht((A) => Se(A, N, "end"), ["stop"])
                  }, null, 40, E2)
                ], 46, C2)) : nt("", !0),
                (Fe(!0), Le(Xe, null, mt(R.value.get(N.id), (A) => (Fe(), Le("button", {
                  key: A.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: A.selected, cluster: A.frames.length > 1, partial: A.partial }]),
                  style: vt({ left: y(A.frame + 0.5) }),
                  "aria-label": `${N.label}: ${A.frames.length > 1 ? `${A.frames.length} keyframes` : `keyframe at frame ${A.frames[0]}`}`,
                  "data-tip": A.frames.length > 1 ? `${A.frames.length} keyframes` : `Frame ${A.frames[0]}`,
                  onPointerdown: ht((E) => ge(E, N, null, A, N.selectedFrames), ["stop"])
                }, [
                  A.frames.length > 1 ? (Fe(), Le("span", F2, Je(A.frames.length), 1)) : nt("", !0)
                ], 46, O2))), 128))
              ], 40, A2),
              N.open ? (Fe(!0), Le(Xe, { key: 0 }, mt(N.lanes, (A) => (Fe(), Le("div", {
                key: A.key,
                class: "pano-timeline-lane",
                onPointerdown: (E) => me(E, N, A.lane)
              }, [
                (Fe(!0), Le(Xe, null, mt(R.value.get(A.key), (E) => (Fe(), Le("button", {
                  key: E.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: E.selected, cluster: E.frames.length > 1 }]),
                  style: vt({ left: y(E.frame + 0.5) }),
                  "aria-label": `${A.label}: ${E.frames.length > 1 ? `${E.frames.length} keyframes` : `keyframe at frame ${E.frames[0]}`}`,
                  "data-tip": E.frames.length > 1 ? `${E.frames.length} keyframes` : `Frame ${E.frames[0]}`,
                  onPointerdown: ht((w) => ge(w, N, A.lane, E, A.selectedFrames), ["stop"])
                }, [
                  E.frames.length > 1 ? (Fe(), Le("span", L2, Je(E.frames.length), 1)) : nt("", !0)
                ], 46, D2))), 128))
              ], 40, T2))), 128)) : nt("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: vt({ left: y(h.value + 0.5) })
              }, null, 4)
            ], 2)) : nt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, S2)
    ], 2)), [
      [ci, e.model.visible]
    ]);
  }
}, $2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Fe(), Le("div", {
      class: at(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: vt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, Je(e.model.text || ""), 7));
  }
}, z2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, j2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Fe(), Le("div", z2, [
      (Fe(!0), Le(Xe, null, mt(e.buttons, (r) => br((Fe(), gn(Ht, {
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
}, H2 = ["data-video-ready"], G2 = { class: "pano-video-transport-shell" }, K2 = { class: "pano-video-controls-left" }, W2 = { class: "pano-video-filmstrip" }, U2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, B2 = ["src", "onLoad"], Y2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, q2 = ["max", "value", "disabled"], X2 = { class: "pano-video-controls-right" }, J2 = ["data-has-audio"], Z2 = { class: "pano-video-volume-pop" }, Q2 = ["value", "disabled"], eA = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause" : "Play";
    }), r = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause video" : "Play video";
    }), i = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? He.pause : He.play;
    }), o = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = rt(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? He.loop_off : He.loop;
    }), l = rt(() => {
      var P, R;
      return ((P = t.state) == null ? void 0 : P.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = rt(() => {
      var P, R, Z;
      return ((P = t.state) == null ? void 0 : P.hasAudio) !== !0 ? He.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((Z = t.state) == null ? void 0 : Z.volume) ?? 1) <= 0 ? He.volume_muted : He.volume2;
    }), d = rt(() => {
      var P;
      return Math.max(0, Math.min(100, Number(((P = t.state) == null ? void 0 : P.progressPct) || 0)));
    }), u = rt(() => ({ left: `${d.value}%` })), f = rt(() => {
      var q, ae;
      const P = (q = t.state) == null ? void 0 : q.volumePct, R = Number(((ae = t.state) == null ? void 0 : ae.volume) ?? 1) * 100, Z = Number(P ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Z))}%`
      };
    }), h = rt(() => {
      var Z, q;
      const R = [
        String(((Z = t.state) == null ? void 0 : Z.currentTimeLabel) || "0:00"),
        String(((q = t.state) == null ? void 0 : q.durationLabel) || "0:00")
      ].reduce((ae, Se) => Math.max(ae, Se.length), 4);
      return `${Math.max(4, R)}ch`;
    }), _ = rt(() => ({ "--pano-video-time-ch": h.value })), g = rt(() => {
      var Z, q;
      const P = Array.isArray((Z = t.state) == null ? void 0 : Z.thumbnails) ? t.state.thumbnails : [];
      if (P.length) return P;
      const R = Math.max(7, Number(((q = t.state) == null ? void 0 : q.thumbnailCount) || 9));
      return Array.from({ length: R }, (ae, Se) => ({
        id: `placeholder-${Se}`,
        src: "",
        label: ""
      }));
    }), v = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), y = (P) => String((P == null ? void 0 : P.id) || (P == null ? void 0 : P.src) || (P == null ? void 0 : P.label) || ""), H = (P) => v.value.has(y(P)), W = (P) => {
      const R = new Set(v.value);
      R.add(y(P)), v.value = R;
    };
    ii(g, (P) => {
      const R = new Set(P.map(y)), Z = /* @__PURE__ */ new Set();
      for (const q of v.value)
        R.has(q) && Z.add(q);
      v.value = Z;
    }, { immediate: !0 });
    const O = rt(() => {
      var P;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((P = t.state) == null ? void 0 : P.shellMaxWidthPx) || 640))}px`
      };
    });
    return (P, R) => (Fe(), Le("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: vt(O.value)
    }, [
      R[1] || (R[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      R[2] || (R[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", G2, [
        Ne("div", K2, [
          Ye(Ht, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-time pano-video-time-start",
            style: vt(_.value)
          }, Je(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", W2, [
          Ne("div", U2, [
            (Fe(!0), Le(Xe, null, mt(g.value, (Z) => (Fe(), Le("div", {
              key: y(Z),
              class: at(["pano-video-thumb", {
                "is-placeholder": !Z.src,
                "is-loaded": Z.src && H(Z)
              }])
            }, [
              Z.src ? (Fe(), Le("img", {
                key: 0,
                src: Z.src,
                alt: "",
                draggable: "false",
                onLoad: (q) => W(Z)
              }, null, 40, B2)) : (Fe(), Le("span", Y2))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: vt(u.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
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
          }, null, 8, q2)
        ]),
        Ne("div", X2, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: vt(_.value)
          }, Je(e.state.durationLabel || "0:00"), 5),
          Ye(Ht, {
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
            Ne("div", Z2, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: vt(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Q2)
            ]),
            Ye(Ht, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, J2)
        ])
      ])
    ], 14, H2));
  }
}, tA = { class: "pano-floating-top" }, nA = ["data-selected", "data-view-count"], rA = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], iA = { class: "label" }, oA = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Fe(), Le("div", tA, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Fe(!0), Le(Xe, null, mt(e.buttons, (i) => br((Fe(), Le("button", {
            key: i.key,
            class: at(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ye(Mt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", iA, Je(i.label), 1)
          ], 10, rA)), [
            [ci, i.visible !== !1]
          ])), 128))
        ], 8, nA)
      ]);
    };
  }
};
function O0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: He.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: He.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: He.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
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
        // Panorama Studio only (#72): an image or a 3D file placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add to World", tip: "Add an image or 3D model in space", active: !1, accent: !1, icon: He.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: He.camera_plus, pressed: null }] : []
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
const sA = ["aria-label"], aA = { class: "pano-stage-column" }, lA = { class: "pano-stage-wrap" }, cA = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, uA = {
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
  setup(e, { expose: t, emit: n }) {
    const r = e, i = n;
    let o = "", s = !1, a = null;
    const l = /* @__PURE__ */ Vt(null), c = /* @__PURE__ */ Vt(null), d = /* @__PURE__ */ Vt(null);
    function u() {
      var ge, B;
      return ((B = (ge = d.value) == null ? void 0 : ge.getRefs) == null ? void 0 : B.call(ge)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(ge, B) {
      var _e, pe;
      return ((pe = (_e = c.value) == null ? void 0 : _e.open) == null ? void 0 : pe.call(_e, ge, B)) === !0;
    }
    function h(ge) {
      i("image-file-selected", ge);
    }
    function _(ge) {
      i("image-file-cancelled", ge);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = rt(() => r.readOnly === !0), v = rt(() => r.shellPreset || O0(r.type)), y = rt(() => {
      var B, _e, pe;
      const ge = String((((B = r.uiState) == null ? void 0 : B.stageStatus) === "failed" ? (_e = r.uiState) == null ? void 0 : _e.stageStatusDetail : (pe = r.uiState) == null ? void 0 : pe.stageWarningDetail) ?? "");
      return ge === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : ge === "stickers" ? "One or more sticker previews are unavailable." : ge === "frame" ? "The editor hit a rendering error. Check the browser console for details." : ge === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : ge.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), H = rt(() => {
      var ge, B, _e;
      return ((ge = r.uiState) == null ? void 0 : ge.stageStatus) === "failed" || (B = r.uiState) != null && B.stageWarningDetail ? y.value : (_e = r.uiState) == null ? void 0 : _e.stageNotice;
    }), W = rt(() => {
      var B;
      const ge = Array.isArray((B = v.value) == null ? void 0 : B.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return g.value && ge.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: He.fullscreen
      }), ge;
    });
    function O() {
      const ge = l.value;
      return ge ? Array.from(ge.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((B) => B instanceof HTMLElement ? !B.hidden && B.tabIndex >= 0 && B.offsetParent !== null : !1) : [];
    }
    function P() {
      var _e;
      const B = O()[0] || l.value;
      (_e = B == null ? void 0 : B.focus) == null || _e.call(B);
    }
    function R() {
      var ge;
      a != null && a.isConnected && ((ge = a.focus) == null || ge.call(a)), a = null;
    }
    function Z(ge) {
      var B, _e, pe, fe;
      if (!ge.defaultPrevented) {
        if (ge.key === "Tab") {
          const ee = O();
          if (!ee.length) {
            ge.preventDefault(), (_e = (B = l.value) == null ? void 0 : B.focus) == null || _e.call(B);
            return;
          }
          const me = ee[0], oe = ee[ee.length - 1], C = document.activeElement;
          if (ge.shiftKey) {
            (C === me || C === l.value || !((pe = l.value) != null && pe.contains(C))) && (ge.preventDefault(), oe.focus());
            return;
          }
          (C === oe || !((fe = l.value) != null && fe.contains(C))) && (ge.preventDefault(), me.focus());
          return;
        }
        ge.key === "Escape" && i("close");
      }
    }
    function q() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ae() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function Se(ge) {
      document.removeEventListener("keydown", Z), ge ? (a || (a = document.activeElement), q(), document.addEventListener("keydown", Z), Ga(() => {
        P();
      })) : (ae(), R());
    }
    return Wa(() => {
      Se(r.open);
    }), ns(() => {
      ae(), document.removeEventListener("keydown", Z), R();
    }), ii(() => r.open, (ge) => {
      Se(ge);
    }), (ge, B) => e.open ? (Fe(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: B[2] || (B[2] = ht((_e) => i("close"), ["self"]))
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
        Ne("div", aA, [
          Ne("div", lA, [
            B[3] || (B[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            B[4] || (B[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            B[5] || (B[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Fe(), Le("div", cA, Je(H.value), 1)) : nt("", !0),
            B[6] || (B[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ye($P, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ye(a0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: h,
              onFileCancelled: _
            }, null, 512),
            g.value ? nt("", !0) : (Fe(), Le(Xe, { key: 1 }, [
              Ye(j2, {
                buttons: e.uiState.toolButtons || v.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ye(cP, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ye(VP, {
                "paint-swatches": e.paintSwatches,
                panes: v.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ye(eA, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ye(oA, {
              buttons: e.uiState.viewButtons || v.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ye(iP, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ye(BP, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ye($2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ye(mP, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ye(V2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: B[0] || (B[0] = (_e) => i("timeline", _e))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? nt("", !0) : (Fe(), gn(r2, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: B[1] || (B[1] = (_e) => i("timeline", _e))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, sA)
    ])) : nt("", !0);
  }
}, Vn = "loading", Qo = "ready", An = "failed";
function F0(e, t = "") {
  return e && (e.__panoLoadState = Vn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function T0(e, t = "") {
  return e && (e.__panoLoadState = Qo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function D0(e, t = "") {
  return e && (e.__panoLoadState = An, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Bc(e, t) {
  return e ? e.__panoLoadState === An ? An : typeof t == "function" && t(e) ? Qo : Vn : Qo;
}
function Yc(e) {
  return Bc(e) === An;
}
function dA({ presented: e, background: t = Qo, stickers: n = [] } = {}) {
  if (!e) return { status: Vn, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === Vn, o = r.includes(Vn);
  if (i && o) return { status: Vn, detail: "mixed" };
  if (i) return { status: Vn, detail: "background" };
  if (o) return { status: Vn, detail: "stickers" };
  const s = t === An, a = r.includes(An);
  return s && a ? { status: An, detail: "mixed" } : s ? { status: An, detail: "background" } : a ? { status: An, detail: "stickers" } : { status: Qo, detail: "" };
}
const fA = "state_json", pA = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), md = "sticker_image_1", hA = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), L0 = 0.01, mA = "external_image", li = "pano_sticker_input_images", R0 = "pano_sticker_input_videos", V0 = "pano_sticker_input_frames", $0 = "pano_sticker_input_video_meta", gA = !0, ol = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], ir = Math.PI / 180, di = 180 / Math.PI, qc = 1, z0 = "rgb(255, 221, 87)", yA = "rgb(228, 228, 231)", bA = "rgb(180, 150, 60)", vA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, SA = 64, Mp = 40, Zl = 16, _A = 0.45, Pp = 180, wA = 160, Fa = 24, kA = 4, xA = 4;
function Ql(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function MA(e) {
  return 1 - Math.pow(1 - e, 3);
}
function PA(e, t, n) {
  const r = Te((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function NA(e) {
  return e * e * e;
}
function sl(e, t, n) {
  return { x: e, y: t, z: n };
}
function Np(e, t) {
  return sl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ap(e, t) {
  return sl(e.x * t, e.y * t, e.z * t);
}
function ec(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function AA(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return sl(e.x / t, e.y / t, e.z / t);
}
function Cp(e) {
  return {
    yaw: Ft(Math.atan2(e.x, e.z) * di),
    pitch: Te(Math.asin(Te(e.y, -1, 1)) * di, -90, 90)
  };
}
function Ar(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, s = t[r].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (n = !n);
  }
  return n;
}
function mo(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function tc(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = r * r + i * i;
  if (a <= 1e-6) return mo(e, t);
  const l = Te((o * r + s * i) / a, 0, 1), c = Number(t.x || 0) + r * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Nn(e, t, n) {
  return e + (t - e) * n;
}
function Qn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Te(n, 0, 1)})`;
}
function CA(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Cs = { fillStyle: "", url: "" };
function IA(e, t, n) {
  if (Cs.url && Cs.fillStyle === String(e || ""))
    return Cs.url;
  const r = CA(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Fa}" height="${Fa}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Cs = { fillStyle: String(e || ""), url: r }, r;
}
function Ta(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Sn(e) {
  return {
    r: Te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Te(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Oo(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function EA(e) {
  return ol.some((t) => Ta(e, t.color));
}
function Xc(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Te(Number(t), 0, 1), o = Te(Number(n), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(r * 6), a = r * 6 - s, l = o * (1 - i), c = o * (1 - a * i), d = o * (1 - (1 - a) * i);
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
function Jc(e) {
  const t = Te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? a = ((r - t) / s + 2) / 6 : a = ((t - n) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function $i(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function OA(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Ip(e) {
  const { paintCount: t, maskCount: n } = OA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return r.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: n + o
  };
}
function j0(e, t, n, r, i) {
  const o = n.bbox, s = n.transform || {}, a = Number(o.u0 || 0) * r, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * r), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * r, f = l + d * 0.5 + Number(s.dv || 0) * i, h = Number(s.rot_deg || 0) * ir, _ = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-r, 0, r])
    e.save(), e.translate(u + g, f), e.rotate(h), e.scale(_, _), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Ii(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Is(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function FA(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function go(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function TA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function DA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function LA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const H0 = "pano_suite.ui_settings.v1", G0 = "pano_suite.node_grid_visibility.v1";
let Ni = null, qn = null;
function Xs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function RA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(H0)) || "").trim();
    if (!t) return Ni ? Xs(Ni) : null;
    const n = JSON.parse(t), r = Xs(n);
    return Ni = r, r;
  } catch {
    return Ni ? Xs(Ni) : null;
  }
}
function VA(e) {
  var n;
  const t = Xs(e);
  Ni = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(H0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function K0() {
  var e;
  if (qn && typeof qn == "object")
    return qn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(G0)) || "").trim();
    if (!t)
      return qn = {}, qn;
    const n = JSON.parse(t);
    return qn = n && typeof n == "object" ? n : {}, qn;
  } catch {
    return qn = {}, qn;
  }
}
function $A(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = K0()[n];
  return typeof i == "boolean" ? i : !!t;
}
function zA(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = K0();
  r[n] = !!t, qn = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(G0, JSON.stringify(r));
  } catch {
  }
}
function jA(e, t) {
  const n = { ...e }, r = t.map((i) => i(nc(e, i.name)));
  for (const { connect: i, ...o } of r) {
    for (const s of Object.keys(o))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, o);
  }
  return r.forEach((i, o) => i.connect(nc(n, t[o].name))), nc(n, "showEditor");
}
function nc(e, t) {
  return new Proxy(e, {
    get(n, r) {
      if (!(r in n)) throw new Error(`Panorama editor: ${t} takes ${String(r)}, which nothing provides`);
      return n[r];
    }
  });
}
function HA({ createVideo: e, createCanvas: t, releaseCanvas: n, onChange: r }) {
  const i = /* @__PURE__ */ new Map();
  function o(a) {
    let l = i.get(a);
    if (l) return l;
    const c = e();
    c.playsInline = !0, c.preload = "auto";
    const d = t();
    return l = { video: c, still: d, frame: 0, follower: null }, l.follower = nl({
      video: c,
      onCapture: () => {
        var h;
        const u = Number(c.videoWidth || 0), f = Number(c.videoHeight || 0);
        u < 1 || f < 1 || (d.width = u, d.height = f, (h = d.getContext("2d")) == null || h.drawImage(c, 0, 0), l.frame += 1, r());
      },
      onChange: r
    }), i.set(a, l), l;
  }
  function s(a) {
    const l = i.get(a);
    i.delete(a), l.follower.dispose(), n(l.still);
  }
  return {
    // The colors of the depth grid of input `name` for `video` ({ src, fps, time }, sceneRequest's) while the
    // playhead advances or not: { media, revision, source }, or null while there is no picture yet.
    picture(a, l, c) {
      if (!(l != null && l.src)) return null;
      const d = o(a);
      d.follower.follow({ src: l.src, time: l.time, playing: c, fps: l.fps });
      const u = d.follower.picture(d.still, null);
      return u ? { media: u, revision: u === d.still ? `still:${d.frame}` : "video", source: l.src } : null;
    },
    // Lets the videos of the inputs not in `names` go.
    retain(a) {
      for (const l of [...i.keys()]) a.includes(l) || s(l);
    },
    dispose() {
      for (const a of [...i.keys()]) s(a);
    }
  };
}
const GA = "Loading depth video…";
function KA(e, t) {
  const n = e.filter((i) => (i == null ? void 0 : i.kind) === "depth_grid" && i.url), r = n.map((i) => t(i.url)).find((i) => /MAX_TEXTURE_SIZE/.test(i ?? ""));
  return r || (n.some((i) => !i.color) ? GA : "");
}
const WA = "/panorama_suite/file_3d", UA = 3;
function gd(e) {
  return {
    filename: String((e == null ? void 0 : e.filename) ?? ""),
    subfolder: String((e == null ? void 0 : e.subfolder) ?? ""),
    storage: String((e == null ? void 0 : e.storage) ?? "input")
  };
}
function BA({ filename: e, subfolder: t }) {
  return t ? `${t}/${e}` : e;
}
function rc(e, t) {
  return { ok: !1, error: `Could not read the 3D file ${BA(e)}: ${t}` };
}
async function YA(e, { fetchApi: t }) {
  const n = gd(e);
  let r;
  try {
    r = await t(WA, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    });
  } catch (s) {
    return rc(n, `${(s == null ? void 0 : s.message) || s}.`);
  }
  let i = null;
  try {
    i = await r.json();
  } catch {
    i = null;
  }
  if (r.status !== 200)
    return typeof (i == null ? void 0 : i.error) == "string" && i.error ? { ok: !1, error: i.error } : rc(n, `the server answered ${r.status}.`);
  const o = i == null ? void 0 : i.kind;
  return o !== "mesh" && o !== "splat" || !i.file || typeof i.file != "object" ? rc(n, "the server's reply was not understood.") : { ok: !0, kind: o, unlit: o !== "mesh" || i.unlit !== !1, file: i.file, box: i.box ?? null };
}
function Ep(e) {
  const { storage: t, subfolder: n, filename: r } = gd(e);
  return JSON.stringify([t, n, r]);
}
function qA({ fetchApi: e, onUpdate: t = () => {
} }) {
  const n = /* @__PURE__ */ new Map();
  let r = !1;
  function i(s, a, l, c) {
    const d = { state: "pending", kind: null, unlit: !0, file: null, box: null, error: null, generation: l }, u = YA(a, { fetchApi: e }).then((f) => {
      var h;
      return ((h = n.get(s)) == null ? void 0 : h.entry) !== d || (Object.assign(d, f.ok ? { state: "ready", kind: f.kind, unlit: f.unlit, file: f.file, box: f.box } : { state: "failed", error: f.error }), r || t()), d;
    });
    return n.set(s, { entry: d, pending: u, values: a, refreshes: c }), d;
  }
  function o(s) {
    const a = Ep(s);
    return n.has(a) || i(a, gd(s), 0, 0), n.get(a);
  }
  return {
    get(s) {
      return o(s).entry;
    },
    request(s) {
      return o(s).pending;
    },
    refresh(s) {
      const a = Ep(s), l = n.get(a);
      if (!l) {
        o(s);
        return;
      }
      l.entry.state === "pending" || l.refreshes >= UA || i(a, l.values, l.entry.generation + 1, l.refreshes + 1);
    },
    // The Sources whose question failed, with the reason.
    failures() {
      return [...n.values()].filter(({ entry: s }) => s.state === "failed").map(({ entry: s, values: a }) => ({ source: a, error: s.error }));
    },
    close() {
      r = !0, n.clear();
    }
  };
}
const Or = /* @__PURE__ */ new Map(), XA = 12;
function JA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Or.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Or.delete(t), Or.set(t, n), n);
}
function ZA(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Or.delete(n), Or.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Or.size > XA; ) {
      const i = Or.keys().next().value;
      if (!i) break;
      Or.delete(i);
    }
}
function QA(e) {
  const {
    api: t,
    comfyMedia: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    imageCache: s,
    loadPreferredExactLinkedImage: a,
    mediaAssetSource: l,
    mediaSource: c,
    mediaUiImage: d,
    node: u,
    portStillCanvas: f,
    portVideoEl: h,
    readOnly: _,
    runtime: g,
    scheduler: v,
    stageWrap: y,
    state: H,
    stateV2: W,
    stillCanvas: O,
    studio: P,
    timelinePlayhead: R,
    type: Z,
    uiState: q,
    videoEl: ae
  } = e;
  let Se, ge, B, _e, pe, fe, ee, me;
  const oe = W ? qA({ fetchApi: (te, be) => t.fetchApi(te, be), onUpdate: () => B() }) : null, C = {
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
  }, G = 9, N = [];
  let ue = 0;
  const A = () => {
    var lt, yt;
    const te = (lt = y == null ? void 0 : y.getBoundingClientRect) == null ? void 0 : lt.call(y), be = (yt = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : yt.call(o), Pe = Math.max(0, Number((te == null ? void 0 : te.width) || 0)), Oe = be ? Math.max(0, Number(be.width || 0)) : 0, Be = Oe > 0 ? Oe + 14 + 12 : 72, st = Math.max(280, Math.floor(Pe - Be * 2)), dt = r.fullscreen ? Math.min(1200, st) : st;
    q.videoTransport.shellMaxWidthPx = dt;
  }, E = () => {
    ue || (ue = v.requestFrame(() => {
      ue = 0, A();
    }));
  }, w = (te) => {
    if (!(te instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(te.audioTracks) && te.audioTracks.length > 0 || te.audioTracks && typeof te.audioTracks.length == "number" && te.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof te.mozHasAudio == "boolean") return te.mozHasAudio;
    } catch {
    }
    try {
      if (Number(te.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!q.videoTransport.hasAudio;
  }, M = typeof ResizeObserver < "u" ? new ResizeObserver(() => E()) : null;
  M == null || M.observe(y), o && (M == null || M.observe(o)), N.push(() => {
    var te;
    ue && (v.cancelFrame(ue), ue = 0), (te = M == null ? void 0 : M.disconnect) == null || te.call(M);
  }), E();
  const le = () => {
    C.thumbnailJobId += 1, C.thumbnailSrc = "", q.videoTransport.thumbnails = [], q.videoTransport.thumbnailCount = G;
  }, ye = async (te, be, Pe) => {
    const Oe = String(te || "").trim();
    if (!Oe) {
      le();
      return;
    }
    const Ee = JA(Oe);
    if (Ee) {
      C.thumbnailSrc = Oe, q.videoTransport.thumbnails = Ee.thumbnails, q.videoTransport.thumbnailCount = Ee.thumbnailCount;
      return;
    }
    const Ve = ++C.thumbnailJobId;
    C.thumbnailSrc = Oe, q.videoTransport.thumbnails = [], q.videoTransport.thumbnailCount = G;
    const Be = Hi(document, "editor.thumbnails");
    Be.preload = "auto", Be.muted = !0, Be.playsInline = !0, Be.crossOrigin = "anonymous";
    const st = Gt({ label: "editor.thumbnail" });
    try {
      const dt = await new Promise((Pt) => {
        let Re = !1;
        const Ge = (Ke) => {
          Re || (Re = !0, Pt(Ke));
        };
        Be.addEventListener("loadedmetadata", () => Ge(!0), { once: !0 }), Be.addEventListener("canplay", () => Ge(!0), { once: !0 }), Be.addEventListener("error", () => Ge(!1), { once: !0 }), Be.src = Oe, Be.load();
      });
      if (C.thumbnailJobId !== Ve) return;
      const lt = Number(Be.videoWidth || 0), yt = Number(Be.videoHeight || 0);
      if (!dt || lt < 1 || yt < 1) {
        C.thumbnailFailedSrcs.add(Oe);
        return;
      }
      const qe = Math.max(0, Number(Be.duration || be || 0)), jt = 46, Tt = Math.max(72, Math.round(lt / yt * jt));
      st.width = Tt, st.height = jt;
      const Un = st.getContext("2d");
      if (!Un) return;
      const xn = [], Mr = (Pt) => new Promise((Re) => {
        let Ge = !1;
        const Ke = () => {
          Ge || (Ge = !0, Re());
        };
        Be.addEventListener("seeked", Ke, { once: !0 }), Be.addEventListener("error", Ke, { once: !0 });
        try {
          Be.currentTime = Pt;
        } catch {
          Ke();
        }
      });
      for (let Pt = 0; Pt < G; Pt += 1) {
        if (C.thumbnailJobId !== Ve) return;
        const Re = G <= 1 ? 0 : Pt / (G - 1), Ge = qe > 0 ? Math.max(0, Math.min(qe - Math.max(1e-3, 0.5 / Math.max(1, Number(Pe || 24))), qe * Re)) : 0;
        if (await Mr(Ge), C.thumbnailJobId !== Ve) return;
        Un.clearRect(0, 0, Tt, jt), Un.drawImage(Be, 0, 0, Tt, jt), xn.push({
          id: `thumb-${Pt}`,
          src: st.toDataURL("image/jpeg", 0.72),
          time: Ge,
          label: se(Ge)
        });
      }
      if (C.thumbnailJobId !== Ve) return;
      q.videoTransport.thumbnails = xn, q.videoTransport.thumbnailCount = xn.length || G, ZA(Oe, {
        thumbnails: xn,
        thumbnailCount: xn.length || G,
        duration: qe,
        fps: Pe
      });
    } finally {
      Be.removeAttribute("src"), Be.load(), Fr(st);
    }
  };
  N.push(() => {
    le();
  });
  const D = Hg({
    video: ae instanceof HTMLVideoElement ? ae : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (te) => v.requestFrame(te),
      cancelFrame: (te) => v.cancelFrame(te)
    },
    fps: V,
    span: () => {
      if (W) return ee();
      const te = Math.round(Number(q.videoTransport.duration || 0) * V());
      return ae.loop || !(te > 0) ? 1 / 0 : te;
    },
    loop: () => W,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => Se(),
    onFrame: (te) => {
      W ? _e(te) : ne(), B({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    },
    onCapture: () => {
      ke() && (g.backgroundDirty = !0);
    },
    onChange: () => {
      ne(), R.playing.value = D.playing, fe(), B({ cause: "frame_view", localOnly: !0, reason: ot.PLAYHEAD });
    }
  });
  N.push(() => D.dispose());
  const b = W && h instanceof HTMLVideoElement ? nl({
    video: h,
    onCapture: () => {
      var Pe;
      const te = Number(h.videoWidth || 0), be = Number(h.videoHeight || 0);
      te < 1 || be < 1 || (f.width = te, f.height = be, (Pe = f.getContext("2d")) == null || Pe.drawImage(h, 0, 0), f.__panoFrameIdx += 1, B({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA }));
    },
    onChange: () => B({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  b && N.push(() => b.dispose());
  const K = W ? HA({
    createVideo: () => Hi(document, "editor.depth-video"),
    createCanvas: () => Gt({ label: "editor.depth-still" }),
    releaseCanvas: Fr,
    onChange: () => B({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  K && N.push(() => K.dispose());
  const p = W ? Ou({
    createImage: (te, be) => {
      const Pe = new Image();
      return Pe.onload = be, Pe.onerror = be, Pe.src = te, Pe;
    },
    onLoad: () => B({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA })
  }) : null;
  if (ae instanceof HTMLVideoElement) {
    const te = () => {
      xe(), B({ cause: "frame_view", localOnly: !0 });
    }, be = () => {
      ne({
        hasAudio: q.videoTransport.hasAudio,
        muted: ae.muted,
        volume: Number(ae.volume ?? q.videoTransport.volume ?? 1)
      });
    }, Pe = () => {
      const Oe = ae.dataset.panoSrc;
      Oe && (C.failedSrcs.add(Oe), xe(), B());
    };
    for (const [Oe, Ee] of [
      ["loadedmetadata", te],
      ["loadeddata", te],
      ["canplay", te],
      ["volumechange", be],
      ["error", Pe]
    ])
      ae.addEventListener(Oe, Ee), N.push(() => ae.removeEventListener(Oe, Ee));
  }
  function m(te) {
    return n.uiList(u, te);
  }
  function x(te) {
    return n.uiValue(u, te);
  }
  function I() {
    const te = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
    if (la(te))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const be = ze();
    return be ? { videoKey: be.videoKey, metaKey: be.metaKey } : Z === "stickers" || Z === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function $() {
    const { metaKey: te } = I(), be = x(te);
    return Array.isArray(be) && be.length > 0 && be[0] && typeof be[0] == "object" ? be[0] : be && typeof be == "object" ? be : null;
  }
  function Y(te) {
    return te ? te instanceof HTMLVideoElement ? [
      String(te.currentSrc || te.src || ""),
      Number(te.videoWidth || 0),
      Number(te.videoHeight || 0)
    ].join("|") : te instanceof HTMLCanvasElement ? [
      "canvas",
      Number(te.width || 0),
      Number(te.height || 0),
      String(te.__panoFrameIdx || 0)
    ].join("|") : [
      String(te.currentSrc || te.src || ""),
      Number(te.naturalWidth || te.width || 0),
      Number(te.naturalHeight || te.height || 0)
    ].join("|") : "none";
  }
  function se(te) {
    const be = Math.max(0, Math.floor(Number(te || 0))), Pe = Math.floor(be / 60), Oe = be % 60;
    return `${Pe}:${String(Oe).padStart(2, "0")}`;
  }
  function V() {
    return W ? H.timeline.fps : C.metaFps || 1e3;
  }
  function ne(te = {}) {
    const be = Number(te.duration ?? q.videoTransport.duration ?? 0), Pe = Math.max(1, Number(te.fps ?? q.videoTransport.fps ?? 24)), Oe = D.frame / V(), Ee = Object.prototype.hasOwnProperty.call(te, "ready") ? !!te.ready : !!q.videoTransport.ready, Ve = D.playing, Be = Object.prototype.hasOwnProperty.call(te, "visible") ? !!te.visible : !!q.videoTransport.visible, st = Object.prototype.hasOwnProperty.call(te, "muted") ? !!te.muted : !!(ae instanceof HTMLVideoElement ? ae.muted : q.videoTransport.muted), dt = Number(
      Object.prototype.hasOwnProperty.call(te, "volume") ? te.volume : ae instanceof HTMLVideoElement ? ae.volume : q.videoTransport.volume
    ), lt = Object.prototype.hasOwnProperty.call(te, "hasAudio") ? !!te.hasAudio : w(ae), yt = Object.prototype.hasOwnProperty.call(te, "loop") ? !!te.loop : !!q.videoTransport.loop;
    Object.assign(q.videoTransport, {
      ready: Ee,
      playing: Ve,
      visible: Be,
      loop: yt,
      currentTime: Number.isFinite(Oe) ? Oe : 0,
      duration: Number.isFinite(be) ? be : 0,
      progressPct: be > 1e-6 ? Math.max(0, Math.min(100, Oe / be * 100)) : 0,
      currentTimeLabel: se(Oe),
      durationLabel: se(be),
      frameCount: Math.max(0, Number(te.frameCount ?? q.videoTransport.frameCount ?? 0)),
      fps: Pe,
      hasAudio: lt,
      muted: st,
      volume: Math.max(0, Math.min(1, Number.isFinite(dt) ? dt : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(dt) ? dt : 1)) * 100),
      thumbnails: Array.isArray(te.thumbnails) ? te.thumbnails : q.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(te.thumbnailCount ?? q.videoTransport.thumbnailCount ?? G))
    });
  }
  function k() {
    return !!(ae instanceof HTMLVideoElement && !W && ae.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function U() {
    if (!(ae instanceof HTMLVideoElement) || !q.videoTransport.hasAudio) return;
    const te = !ae.muted;
    ae.muted = te, !te && Number(ae.volume || 0) <= 0 && (ae.volume = Math.max(0.01, Number(q.videoTransport.volume || 1))), ne({
      hasAudio: q.videoTransport.hasAudio,
      muted: ae.muted,
      volume: Number(ae.volume ?? q.videoTransport.volume ?? 1)
    });
  }
  function ie() {
    ne({
      visible: k()
    });
  }
  function ke() {
    if (!(ae instanceof HTMLVideoElement) || Number(ae.videoWidth || 0) < 1 || Number(ae.videoHeight || 0) < 1) return !1;
    const te = Number(ae.videoWidth || 0), be = Number(ae.videoHeight || 0);
    (O.width !== te || O.height !== be) && (O.width = te, O.height = be);
    const Pe = O.getContext("2d");
    return Pe ? (Pe.clearRect(0, 0, te, be), Pe.drawImage(ae, 0, 0, te, be), O.__panoFrameIdx = Number(O.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Me() {
    return !D.showsVideo && Number(O.width || 0) > 0 && Number(O.height || 0) > 0 && Number(O.__panoFrameIdx || 0) > 0 ? O : ae instanceof HTMLVideoElement && Number(ae.videoWidth || 0) > 0 && Number(ae.videoHeight || 0) > 0 && Number(ae.readyState || 0) >= 2 ? ae : null;
  }
  function Ae() {
    O.__panoFrameIdx = 0, g.backgroundDirty = !0;
  }
  function xe() {
    if (!(ae instanceof HTMLVideoElement)) return null;
    const { videoKey: te } = I(), be = (ze() || St(u, "background")) && m(te)[0] || null, Pe = c(be), Oe = [Pe, n.linkedVideoFile(u, We())].filter(Boolean), Ee = Oe.find((qe) => !C.failedSrcs.has(qe)) || "";
    C.videoFailed = !Ee && Oe.length > 0;
    const Ve = Ee && Ee === Pe ? $() : null;
    C.metaFps = Number(Ve == null ? void 0 : Ve.fps) > 0 ? Number(Ve.fps) : 0;
    const Be = Math.max(1, Number((Ve == null ? void 0 : Ve.fps) || (W ? H.timeline.fps : 24))), st = ae.dataset.panoSrc === Ee && Number.isFinite(ae.duration) ? ae.duration : 0, dt = Number((Ve == null ? void 0 : Ve.duration) || ((Ve == null ? void 0 : Ve.frames) > 0 ? Ve.frames / Be : st)), lt = Math.max(0, Number((Ve == null ? void 0 : Ve.frames) || Math.round(dt * Be))), yt = !!(Ve != null && Ve.has_audio) || w(ae);
    return Ee && ae.dataset.panoSrc !== Ee ? (ae.pause(), Ae(), ae.dataset.panoSrc = Ee, ae.loop = !W && !!q.videoTransport.loop, ae.muted = !!q.videoTransport.muted, ae.volume = Math.max(0, Math.min(1, Number(q.videoTransport.volume ?? 1))), ae.src = Ee, ae.load(), D.setSource(!0), W || D.seek(0)) : !Ee && ae.getAttribute("src") && (ae.pause(), ae.removeAttribute("src"), delete ae.dataset.panoSrc, ae.load(), Ae(), le(), D.setSource(!1)), W || (ae.loop = !!q.videoTransport.loop), Ee && !W && C.thumbnailSrc !== Ee && !C.thumbnailFailedSrcs.has(Ee) && ye(Ee, dt, Be), Ee || le(), ne({
      ready: !!Ee,
      visible: !!Ee && k(),
      duration: dt,
      frameCount: lt,
      fps: Be,
      hasAudio: yt,
      loop: !!ae.loop,
      muted: !!ae.muted,
      volume: Number(ae.volume ?? q.videoTransport.volume ?? 1),
      thumbnailCount: q.videoTransport.thumbnailCount
    }), Ee || null;
  }
  function ve(te, be = null) {
    return d(u, te, s, be || (() => B()));
  }
  function Q(te = null) {
    return St(u, "external-sticker") ? ve(li, te) : null;
  }
  function T() {
    if (!St(u, "external-sticker")) return null;
    const te = m($0)[0];
    if (!te || typeof te != "object") return null;
    const be = m(V0).map(c).filter(Boolean);
    if (be.length) return { frames: be, meta: te };
    const Pe = c(m(R0)[0] || null);
    return Pe ? { src: Pe, meta: te } : null;
  }
  function F() {
    return St(u, "external-sticker") ? Go(m) : null;
  }
  function J() {
    const te = H.stickers.find(ge), be = te ? T() : null, Pe = be ? Cu(te.clip, r.frame, H.timeline.fps, be.meta) : null;
    b.follow({ src: (be == null ? void 0 : be.src) || "", time: Pe, playing: D.advancing, fps: H.timeline.fps });
    const Oe = te ? we(te) : null, Ee = be != null && be.frames ? p.picture(be.frames, Pe, be.meta, Oe) : b.picture(f, Oe);
    return Ee ? { media: Ee, revision: Y(Ee), source: Eu(be, Oe) } : null;
  }
  function L() {
    return !W || !St(u, "scene") ? null : ba(m("pano_scene_files"), m("pano_scene_meta"), c);
  }
  function X() {
    return !W || !St(u, "external-sticker") ? null : ba(m("pano_sticker_files"), m("pano_sticker_meta"), c);
  }
  function j(te, be) {
    return (K == null ? void 0 : K.picture(te, be, D.advancing)) ?? null;
  }
  function S(te) {
    K == null || K.retain(te);
  }
  function z(te) {
    if (!oe || !oi(te == null ? void 0 : te.source)) return null;
    const be = oe.get(te.source), Pe = be.state === "ready" ? c(be.file) : null;
    return Pe ? { kind: be.kind, unlit: be.unlit, url: Pe, generation: be.generation } : null;
  }
  function re(te) {
    return oe.request(te);
  }
  function he(te) {
    oe == null || oe.refresh(te);
  }
  function de() {
    var Oe;
    if (!oe) return "";
    const te = oe.failures();
    if (!te.length) return "";
    const be = [...H.stickers, ...me()].map((Ee) => Ee.source).filter(oi), Pe = (Ee, Ve) => Ee.filename === Ve.filename && (Ee.subfolder ?? "") === Ve.subfolder && (Ee.storage ?? "input") === Ve.storage;
    return ((Oe = te.find((Ee) => be.some((Ve) => Pe(Ve, Ee.source)))) == null ? void 0 : Oe.error) ?? "";
  }
  function we(te) {
    var Be;
    if (W && oi(te == null ? void 0 : te.source)) return null;
    if (te && typeof te == "object" && (ge(te) || te.external === !0))
      return Q(() => {
        Tr(u, "image-loaded");
      });
    const be = W ? Ie(te) : String(te && typeof te == "object" ? te.asset_id || te.assetId || "" : te || "");
    if (!be) return null;
    const Pe = s.get(be);
    if (Pe) return Pe;
    const Oe = W ? ga(te.source) : (Be = H.assets) == null ? void 0 : Be[be], Ee = l(Oe);
    if (!Ee) return null;
    const Ve = new Image();
    return F0(Ve, Ee), Ve.onload = () => {
      T0(Ve, Ee), B();
    }, Ve.onerror = () => {
      D0(Ve, Ee), B();
    }, Ve.src = Ee, s.set(be, Ve), Ve;
  }
  function Ie(te) {
    const { source: be } = te;
    return be.filename ? `file:${be.storage}:${be.subfolder}:${be.filename}` : `sticker:${te.id}`;
  }
  function De() {
    if (Z === "cutout") {
      const Ve = Me();
      if (Ve) return Ve;
      const Be = a(
        u,
        ["erp_image", "bg_erp"],
        () => B(),
        "background:cutout:erp_image|bg_erp"
      );
      return Be && !Yc(Be) ? Be : d(u, "pano_input_images", s, () => B()) || Be || null;
    }
    const te = Me();
    if (te) return te;
    const be = ze(), Pe = be || St(u, "background") ? d(u, (be == null ? void 0 : be.imageKey) ?? "pano_input_images", s, () => B()) : null;
    if (Pe && !Yc(Pe)) return Pe;
    if (ae instanceof HTMLVideoElement && ae.dataset.panoSrc) return ae;
    if (be) return Pe;
    const Oe = We();
    return a(u, Oe, () => B(), `background:${Oe.join("|")}`) || Pe || null;
  }
  function ze() {
    return !P || !St(u, "scene") ? null : td(m);
  }
  function Ue() {
    var te;
    return ((te = ze()) == null ? void 0 : te.coverage) ?? yn(H.coverage);
  }
  function We() {
    if (ze()) return [];
    if (Z === "cutout") return ["erp_image", "bg_erp"];
    const te = Array.isArray(u == null ? void 0 : u.inputs) ? u.inputs.map((Oe) => String((Oe == null ? void 0 : Oe.name) || "")) : [], be = te.includes("erp_image"), Pe = te.includes("bg_erp");
    return _ && (be || Pe) ? be ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Z === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Ce(te) {
    return te ? te instanceof HTMLImageElement ? !!te.complete && Number(te.naturalWidth || te.width || 0) > 0 && Number(te.naturalHeight || te.height || 0) > 0 : te instanceof HTMLVideoElement ? Number(te.videoWidth || 0) > 0 && Number(te.videoHeight || 0) > 0 && Number(te.readyState || 0) >= 2 : Number(te.width || te.naturalWidth || 0) > 0 && Number(te.height || te.naturalHeight || 0) > 0 : !1;
  }
  function je() {
    if (i.failed) return { status: An, detail: "renderer" };
    if (!i.ready) return { status: Vn, detail: "boot" };
    const te = De(), be = C.videoFailed ? An : Bc(te, Ce), Pe = [];
    for (const Oe of pe()) {
      if ((Oe == null ? void 0 : Oe.visible) === !1) continue;
      const Ee = we(Oe);
      Pe.push(Bc(Ee, Ce));
    }
    return dA({
      presented: g.hasPresentedFrame,
      background: be,
      stickers: Pe
    });
  }
  function ce() {
    oe == null || oe.close(), ae instanceof HTMLVideoElement && ae.pause(), N.forEach((te) => {
      try {
        te();
      } catch {
      }
    });
  }
  return {
    connect(te) {
      ({
        backgroundVideoPlace: Se,
        isExternalSticker: ge,
        requestDraw: B,
        setTimelineFrame: _e,
        skyStickers: pe,
        syncTimeline: fe,
        timelineSpanFrames: ee,
        upstreamStickers: me
      } = te);
    },
    videoState: C,
    queueVideoTransportLayout: E,
    playback: D,
    portVideo: b,
    getNodeUiValue: x,
    getMediaRevisionToken: Y,
    playbackFps: V,
    syncVideoTransportState: ne,
    toggleVideoMuted: U,
    syncVideoTransportVisibility: ie,
    refreshModalVideoSource: xe,
    getStickerUiImage: ve,
    getExternalStickerPreviewImage: Q,
    getPortMediaMeta: F,
    followPortSticker: J,
    getStickerImage: we,
    stickerImageKey: Ie,
    getConnectedErpImage: De,
    backgroundCoverage: Ue,
    upstreamBackground: ze,
    isDecodedImageReady: Ce,
    getStageImageStatus: je,
    sceneFiles: L,
    stickerFiles: X,
    depthColor: j,
    retainDepthColors: S,
    file3dEditorFile: z,
    requestFile3d: re,
    refreshFile3d: he,
    file3dNotice: de,
    disposeMediaSession: ce
  };
}
function eC(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(n || 8));
  function a(c) {
    if (r.splice(0, r.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      r.push(String(u || ""));
    }), !r.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, d)) : i = r.length - 1;
  }
  function l(c) {
    r[i] !== c && (r.splice(i + 1), r.push(c), r.length > o && r.shift(), i = r.length - 1);
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
      return c < 0 || c >= r.length ? null : (i = c, r[i]);
    },
    redo() {
      const c = i + 1;
      return c < 0 || c >= r.length ? null : (i = c, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const c = r.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = r.slice(u, u + s), h = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: h
      };
    },
    hydrate: a
  };
}
const tC = 80;
function W0(e) {
  return JSON.stringify(zS(e));
}
function nC(e) {
  return eC(tC, { entries: [W0(e)], index: 0 });
}
function U0(e, t) {
  var n, r;
  return (e === "stickers" ? (n = t.active) == null ? void 0 : n.selected_sticker_id : (r = t.active) == null ? void 0 : r.selected_shot_id) ?? null;
}
function rC(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se;
  function ge({ initial: pe = !1 } = {}) {
    n || (P(), Z(), ae(), pe || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(W0(O())), q()));
  }
  function B(pe) {
    var C, G, N;
    if (n) return;
    W();
    const fe = pe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (q(), !fe) return;
    const ee = jS(i, fe), me = (C = i.timeline) == null ? void 0 : C.fps, oe = JSON.stringify((G = i.background) == null ? void 0 : G.clip);
    Object.keys(i).forEach((ue) => delete i[ue]), Object.assign(i, ee.state), P(!1), Z({ restored: !0 }), o && v(), o && i.timeline.fps !== me ? _.seek(Math.round(t.frame * i.timeline.fps / me)) : o && JSON.stringify(i.background.clip) !== oe && _.seek(t.frame), t.selectedId = U0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((N = d()) == null ? void 0 : N.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), r.backgroundDirty = !0, ee.paintingChanged ? h() : f(), R(), Se(), c(), H({ cause: "cutout_frame" });
  }
  function _e() {
    var ee, me;
    const pe = Array.isArray((ee = t.historyController) == null ? void 0 : ee.entries) ? t.historyController.entries : [], fe = Number((me = t.historyController) == null ? void 0 : me.index);
    return {
      canUndo: !n && pe.length > 1 && fe > 0,
      canRedo: !n && pe.length > 1 && fe >= 0 && fe < pe.length - 1
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
        playback: _,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: v,
        releaseHiddenSelection: y,
        requestDraw: H,
        stopTimelinePlayback: W,
        storedEditorState: O,
        syncCutoutShot: P,
        syncPaintUi: R,
        syncPortHandoff: Z,
        syncUndoRedoButtons: q,
        syncUpstreamEdits: ae,
        updateSidePanel: Se
      } = pe);
    },
    pushHistory: ge,
    restoreHistory: B,
    getHistoryCapabilities: _e
  };
}
function iC(e) {
  const {
    canvas: t,
    editor: n,
    sceneV2: r,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h, _, g, v;
  function y() {
    return s !== "stickers" ? i.shots : r ? [...H(), ...W()] : H();
  }
  function H() {
    return r ? i.stickers.filter((S) => S.placement === "sky") : i.stickers;
  }
  function W() {
    if (!r) return [];
    const S = v(), z = [...new Set(S.map((re) => re.origin.layer))];
    return S.filter((re) => re.placement === "sky").sort((re, he) => z.indexOf(re.origin.layer) - z.indexOf(he.origin.layer) || re.z_index - he.z_index);
  }
  function O(S) {
    return i.stickers.find((z) => z.id === S) || v().find((z) => z.id === S) || null;
  }
  function P(S) {
    return r && b(S);
  }
  function R(S) {
    return S.source.kind === "file" && !S.source.filename && !S.source.data_url;
  }
  function Z(S) {
    if (!P(S)) return S;
    const z = xe(S) ? Et(S) ? g(S) : h(S) : null;
    return Tu(S, n.frame, z && { width: z.naturalWidth || z.width, height: z.naturalHeight || z.height });
  }
  function q(S, z) {
    P(S) ? Vm(S, n.frame, z) : Object.assign(S, z);
  }
  function ae() {
    const S = i.painting || (i.painting = pi(null));
    return Array.isArray(S.groups) || (S.groups = []), S.groups;
  }
  function Se(S = "paint") {
    var de, we;
    const z = Array.isArray((we = (de = i.painting) == null ? void 0 : de[S]) == null ? void 0 : we.strokes) ? i.painting[S].strokes : [], re = [], he = /* @__PURE__ */ new Set();
    for (const Ie of z) {
      const De = String((Ie == null ? void 0 : Ie.actionGroupId) || "").trim();
      !De || he.has(De) || (he.add(De), re.push(De));
    }
    return re;
  }
  function ge() {
    return Se("paint");
  }
  function B(S, z) {
    const re = String(z || "").trim();
    return re ? `${S === "mask" ? "mask" : "paint"}:${re}` : "";
  }
  function _e(S) {
    const z = String(S || "").trim();
    return z ? `raster:${z}` : "";
  }
  function pe(S) {
    const z = String(S || "").trim();
    if (!z) return "";
    const re = z.match(/^raster:(.*)$/);
    return String(re ? re[1] || "" : z).trim();
  }
  function fe(S, z = null) {
    const re = String(S || "").trim();
    if (!re) return { layerKind: "paint", actionGroupId: "" };
    const he = re.match(/^(paint|mask):(.*)$/);
    return he ? { layerKind: he[1] === "mask" ? "mask" : "paint", actionGroupId: String(he[2] || "").trim() } : { layerKind: z === "mask" ? "mask" : "paint", actionGroupId: re };
  }
  function ee() {
    var z;
    let S = -1;
    for (const re of H())
      S = Math.max(S, Number((re == null ? void 0 : re.z_index) || 0));
    for (const re of ae())
      S = Math.max(S, Number((re == null ? void 0 : re.z_index) || 0));
    for (const re of Array.isArray((z = i.painting) == null ? void 0 : z.raster_objects) ? i.painting.raster_objects : [])
      String((re == null ? void 0 : re.layerKind) || "paint") === "paint" && (S = Math.max(S, Number((re == null ? void 0 : re.z_index) || 0)));
    return S + 1;
  }
  function me(S, z = null) {
    const re = String(S || "").trim();
    if (!re) return null;
    const he = ae();
    let de = he.find((we) => String((we == null ? void 0 : we.actionGroupId) || "") === re);
    return de ? z != null && (de.z_index = Math.max(0, Number(z || 0))) : (de = {
      id: re,
      type: "strokeGroup",
      actionGroupId: re,
      z_index: z == null ? ee() : Math.max(0, Number(z || 0)),
      locked: !1,
      frame: null
    }, he.push(de)), de;
  }
  function oe(S) {
    if (!(S != null && S.centerUv)) return [];
    const z = Number(S.centerUv.u || 0), re = Number(S.centerUv.v || 0), he = Number(S.halfW || 0), de = Number(S.halfH || 0);
    return [
      {
        u: ((z - he) % 1 + 1) % 1,
        v: Te(re - de, 0, 1)
      },
      {
        u: ((z + he) % 1 + 1) % 1,
        v: Te(re - de, 0, 1)
      },
      {
        u: ((z + he) % 1 + 1) % 1,
        v: Te(re + de, 0, 1)
      },
      {
        u: ((z - he) % 1 + 1) % 1,
        v: Te(re + de, 0, 1)
      }
    ];
  }
  function C() {
    const S = new Set(ge()), re = ae().filter((he) => S.has(String((he == null ? void 0 : he.actionGroupId) || "")));
    return S.forEach((he) => {
      re.some((de) => String((de == null ? void 0 : de.actionGroupId) || "") === he) || re.push({
        id: he,
        type: "strokeGroup",
        actionGroupId: he,
        z_index: ee(),
        locked: !1,
        frame: null
      });
    }), re.sort((he, de) => Number((he == null ? void 0 : he.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), i.painting.groups = re, re;
  }
  function G(S, z, re) {
    var be;
    const he = (Pe) => (Number(Pe || 0) % 1 + 1) % 1, de = [];
    for (const Pe of re) {
      const Oe = Pe == null ? void 0 : Pe.geometry, Ee = (Oe == null ? void 0 : Oe.geometryKind) === "lasso_fill" ? Oe == null ? void 0 : Oe.points : (Oe == null ? void 0 : Oe.processedPoints) || (Oe == null ? void 0 : Oe.rawPoints) || (Oe == null ? void 0 : Oe.points) || [];
      Array.isArray(Ee) && de.push(...Ee);
    }
    if (!de.length) return null;
    const we = he(((be = de[0]) == null ? void 0 : be.u) || 0);
    let Ie = 0, De = 0;
    de.forEach((Pe) => {
      const Oe = he((Pe == null ? void 0 : Pe.u) || 0);
      Ie += we + V(Oe, we), De += Number((Pe == null ? void 0 : Pe.v) || 0);
    });
    const ze = (Ie / de.length % 1 + 1) % 1;
    let Ue = 1 / 0, We = -1 / 0, Ce = 1 / 0, je = -1 / 0;
    de.forEach((Pe) => {
      const Oe = he((Pe == null ? void 0 : Pe.u) || 0), Ee = V(Oe, ze);
      Ue = Math.min(Ue, Ee), We = Math.max(We, Ee);
      const Ve = Number((Pe == null ? void 0 : Pe.v) || 0);
      Ce = Math.min(Ce, Ve), je = Math.max(je, Ve);
    });
    const ce = re.reduce((Pe, Oe) => {
      const Ee = l(String((Oe == null ? void 0 : Oe.toolKind) || "pen")), Ve = pn[Ee] || pn[fr], Be = Math.max(1, Number((Oe == null ? void 0 : Oe.size) || 10)) * Math.max(0.1, Number((Ve == null ? void 0 : Ve.sizeScale) ?? 1));
      return Math.max(Pe, Be);
    }, 0), te = Math.max(35e-4, ce / 2048);
    return {
      centerUv: { u: ((ze + (Ue + We) * 0.5) % 1 + 1) % 1, v: Te((Ce + je) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (We - Ue) * 0.5 + te,
      halfH: (je - Ce) * 0.5 + te,
      uvPad: te
    };
  }
  function N(S, z, re) {
    const he = String(S || "").trim();
    if (!he) return null;
    const de = ae().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === he);
    if (!de) return null;
    const we = re || $(he, z);
    return de.frame = G(he, z, we), de.frame;
  }
  function ue() {
    var he;
    const S = H().map((de) => ({
      type: "sticker",
      id: String((de == null ? void 0 : de.id) || ""),
      z_index: Number((de == null ? void 0 : de.z_index) || 0),
      item: de
    })), z = C().map((de) => ({
      type: "strokeGroup",
      id: String((de == null ? void 0 : de.id) || (de == null ? void 0 : de.actionGroupId) || ""),
      actionGroupId: String((de == null ? void 0 : de.actionGroupId) || ""),
      z_index: Number((de == null ? void 0 : de.z_index) || 0),
      item: de
    })), re = (Array.isArray((he = i.painting) == null ? void 0 : he.raster_objects) ? i.painting.raster_objects : []).filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") === "paint").map((de) => ({
      type: "rasterObject",
      id: String((de == null ? void 0 : de.id) || ""),
      z_index: Number((de == null ? void 0 : de.z_index) || 0),
      item: de
    }));
    return [...S, ...z, ...re].sort((de, we) => Number(de.z_index || 0) - Number(we.z_index || 0));
  }
  function A(S = !0) {
    var re, he, de, we, Ie, De;
    const z = ue().filter((ze) => ze.type === "strokeGroup").map((ze) => String(ze.actionGroupId || "")).filter((ze) => !!ze);
    if (S) {
      const ze = String(((he = (re = n.interaction) == null ? void 0 : re.stroke) == null ? void 0 : he.actionGroupId) || "").trim(), Ue = String(((we = (de = n.interaction) == null ? void 0 : de.stroke) == null ? void 0 : we.layerKind) || "").trim(), We = String(((De = (Ie = n.interaction) == null ? void 0 : Ie.stroke) == null ? void 0 : De.toolKind) || "").trim();
      ze && Ue === "paint" && We !== "eraser" && !z.includes(ze) && z.push(ze);
    }
    return z;
  }
  function E(S = !0) {
    var De, ze, Ue, We, Ce, je;
    const z = ue();
    if (!S) return z;
    const re = String(((ze = (De = n.interaction) == null ? void 0 : De.stroke) == null ? void 0 : ze.actionGroupId) || "").trim(), he = String(((We = (Ue = n.interaction) == null ? void 0 : Ue.stroke) == null ? void 0 : We.layerKind) || "").trim(), de = String(((je = (Ce = n.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : je.toolKind) || "").trim();
    if (!re || he !== "paint" || de === "eraser" || z.some((ce) => ce.type === "strokeGroup" && String(ce.actionGroupId || "") === re))
      return z;
    const we = f();
    let Ie = z.reduce((ce, te) => Math.max(ce, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    return we && I(we) && String(we.actionGroupId || "") === re && (Ie = Number(we.z_index || 0)), [
      ...z,
      {
        type: "strokeGroup",
        id: re,
        actionGroupId: re,
        z_index: Ie,
        item: null
      }
    ].sort((ce, te) => Number((ce == null ? void 0 : ce.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0));
  }
  function w() {
    return ae().slice().sort((S, z) => Number((S == null ? void 0 : S.z_index) || 0) - Number((z == null ? void 0 : z.z_index) || 0)).map((S) => x(B("paint", (S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || ""))).filter(Boolean);
  }
  function M() {
    var S;
    return (Array.isArray((S = i.painting) == null ? void 0 : S.raster_objects) ? i.painting.raster_objects : []).filter((z) => String((z == null ? void 0 : z.layerKind) || "paint") === "paint").slice().sort((z, re) => Number((z == null ? void 0 : z.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)).map((z) => p(_e((z == null ? void 0 : z.id) || ""))).filter(Boolean);
  }
  function le() {
    return Array.isArray(i.stickers) ? H() : [];
  }
  function ye() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...le(), ...W()];
  }
  function D(S) {
    return !!S && Array.isArray(i.shots) && i.shots.includes(S);
  }
  function b(S) {
    return !!S && (Array.isArray(i.stickers) && i.stickers.includes(S) || Et(S));
  }
  function K() {
    var S;
    return Array.isArray((S = i.painting) == null ? void 0 : S.raster_objects) ? i.painting.raster_objects : [];
  }
  function p(S) {
    const z = pe(S);
    if (!z) return null;
    const re = K().find((he) => String((he == null ? void 0 : he.id) || "").trim() === z);
    return !re || String((re == null ? void 0 : re.layerKind) || "paint") !== "paint" ? null : {
      ...re,
      id: _e(z),
      type: "rasterObject",
      rasterObjectId: z
    };
  }
  function m(S) {
    if (!S || typeof S != "object" || String(S.type || "") !== "rasterObject") return !1;
    const z = pe(S.rasterObjectId || S.id || "");
    return !!z && !!p(_e(z));
  }
  function x(S) {
    const z = fe(S), re = String(z.actionGroupId || "").trim();
    if (!re) return null;
    const he = ae().find((de) => String((de == null ? void 0 : de.id) || (de == null ? void 0 : de.actionGroupId) || "") === re || String((de == null ? void 0 : de.actionGroupId) || "") === re);
    return he ? {
      ...he,
      id: B("paint", re),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: re
    } : null;
  }
  function I(S) {
    if (!S || typeof S != "object" || String(S.type || "") !== "strokeGroup") return !1;
    const z = String(S.actionGroupId || "").trim(), re = String(S.layerKind || "paint").trim() || "paint";
    return !!z && !!x(B(re, z));
  }
  function $(S, z = null) {
    const re = fe(S, z), he = String(re.actionGroupId || "").trim();
    return he ? d(re.layerKind).filter((de) => String((de == null ? void 0 : de.actionGroupId) || "").trim() === he) : [];
  }
  function Y(S, z = "paint") {
    const re = String(S || "").trim(), de = `geomv5:${String(z || "paint").trim() || "paint"}:${re}:${n.mode}:${u()}`;
    if (n.mode === "frame") {
      const we = a(), Ie = String((we == null ? void 0 : we.id) || ""), De = we ? c(we) : null;
      return `${de}:frame:${Ie}:${Math.round(Number((we == null ? void 0 : we.yaw_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.pitch_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.roll_deg) ?? (we == null ? void 0 : we.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((we == null ? void 0 : we.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((De == null ? void 0 : De.x) || 0))}:${Math.round(Number((De == null ? void 0 : De.y) || 0))}:${Math.round(Number((De == null ? void 0 : De.w) || 0))}:${Math.round(Number((De == null ? void 0 : De.h) || 0))}`;
    }
    return `${de}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function se(S, z, re) {
    return !S || typeof S != "object" ? S : {
      ...S,
      u: ((Number(S.u || 0) + Number(z || 0)) % 1 + 1) % 1,
      v: Te(Number(S.v || 0) + Number(re || 0), 0, 1)
    };
  }
  function V(S, z) {
    let re = Number(S || 0) - Number(z || 0);
    for (; re > 0.5; ) re -= 1;
    for (; re < -0.5; ) re += 1;
    return re;
  }
  function ne(S, z = null, re = null) {
    var Ue;
    const he = fe(S, z), de = Array.isArray(re) ? re : $(he.actionGroupId, he.layerKind), we = [];
    if (de.forEach((We) => {
      const Ce = (We == null ? void 0 : We.geometry) || null, je = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(je) && we.push(...je);
    }), !we.length) return { u: 0.5, v: 0.5 };
    const Ie = Number(((Ue = we[0]) == null ? void 0 : Ue.u) || 0);
    let De = 0, ze = 0;
    return we.forEach((We) => {
      De += Ie + V(Number((We == null ? void 0 : We.u) || 0), Ie), ze += Number((We == null ? void 0 : We.v) || 0);
    }), {
      u: (De / we.length % 1 + 1) % 1,
      v: Te(ze / we.length, 0, 1)
    };
  }
  function k(S, z, re = 1, he = 0) {
    if (!S || typeof S != "object") return S;
    const de = Number((z == null ? void 0 : z.u) || 0), we = Number((z == null ? void 0 : z.v) || 0), Ie = V(Number(S.u || 0), de), De = Number(S.v || 0) - we, ze = Number(he || 0) * ir, Ue = Math.cos(ze), We = Math.sin(ze), Ce = Math.max(0.02, Number(re || 1)), je = (Ie * Ue - De * We) * Ce, ce = (Ie * We + De * Ue) * Ce;
    return {
      ...S,
      u: ((de + je) % 1 + 1) % 1,
      v: Te(we + ce, 0, 1)
    };
  }
  function U(S, z, re, he = null, de = null, we = null) {
    const Ie = fe(S, de), De = String(Ie.actionGroupId || "").trim();
    if (!De) return !1;
    const ze = d(Ie.layerKind), Ue = Array.isArray(he) ? new Map(he.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let We = !1;
    if (ze.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== De) return;
      const je = (Ue == null ? void 0 : Ue.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, ce = Ce == null ? void 0 : Ce.geometry, te = je == null ? void 0 : je.geometry;
      !ce || !te || (Array.isArray(te.points) && (ce.points = te.points.map((be) => se(be, z, re)), We = !0), Array.isArray(te.rawPoints) && (ce.rawPoints = te.rawPoints.map((be) => se(be, z, re)), We = !0), Array.isArray(te.processedPoints) && (ce.processedPoints = te.processedPoints.map((be) => se(be, z, re)), We = !0));
    }), We && we) {
      const Ce = ae().find((je) => String((je == null ? void 0 : je.actionGroupId) || "") === De);
      Ce && (Ce.frame = null);
    }
    return We;
  }
  function ie(S, z = 1, re = 0, he = null, de = null, we = null) {
    const Ie = fe(S, de), De = String(Ie.actionGroupId || "").trim();
    if (!De) return !1;
    const ze = d(Ie.layerKind), Ue = Array.isArray(he) ? he : $(De, Ie.layerKind), We = Array.isArray(Ue) ? new Map(Ue.map((ce) => [String((ce == null ? void 0 : ce.id) || ""), ce])) : null, Ce = (we == null ? void 0 : we.centerUv) ?? ne(De, Ie.layerKind, Ue);
    let je = !1;
    if (ze.forEach((ce) => {
      if (String((ce == null ? void 0 : ce.actionGroupId) || "").trim() !== De) return;
      const te = (We == null ? void 0 : We.get(String((ce == null ? void 0 : ce.id) || ""))) || ce, be = ce == null ? void 0 : ce.geometry, Pe = te == null ? void 0 : te.geometry;
      !be || !Pe || (Array.isArray(Pe.points) && (be.points = Pe.points.map((Oe) => k(Oe, Ce, z, re)), je = !0), Array.isArray(Pe.rawPoints) && (be.rawPoints = Pe.rawPoints.map((Oe) => k(Oe, Ce, z, re)), je = !0), Array.isArray(Pe.processedPoints) && (be.processedPoints = Pe.processedPoints.map((Oe) => k(Oe, Ce, z, re)), je = !0));
    }), je && we) {
      const ce = ae().find((te) => String((te == null ? void 0 : te.actionGroupId) || "") === De);
      ce && (ce.frame = null);
    }
    return je;
  }
  function ke(S, z, re, he = null) {
    const de = pe(S);
    if (!de) return !1;
    const we = K().find((We) => String((We == null ? void 0 : We.id) || "").trim() === de);
    if (!we) return !1;
    const Ie = he && typeof he == "object" ? he : we, De = (Ie == null ? void 0 : Ie.transform) || {}, ze = Number(De.du || 0) + Number(z || 0), Ue = Te(Number(De.dv || 0) + Number(re || 0), -1, 1);
    return we.transform || (we.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), we.transform.du = ze, we.transform.dv = Ue, !0;
  }
  function Me(S, z = 1, re = null) {
    const he = pe(S);
    if (!he) return !1;
    const de = K().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "").trim() === he);
    if (!de) return !1;
    const we = re && typeof re == "object" ? re : de, Ie = (we == null ? void 0 : we.transform) || {}, De = Math.max(0.01, Number(Ie.scale || 1)), ze = Te(De * Math.max(0.01, Number(z || 1)), 0.01, 100);
    return de.transform || (de.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), de.transform.scale = ze, !0;
  }
  function Ae() {
    return ee();
  }
  function xe(S) {
    var z;
    return !S || typeof S != "object" ? !1 : o ? ((z = S.source) == null ? void 0 : z.kind) === "port" : String(S.id || "") === md || String(S.source_kind || "") === mA;
  }
  function ve(S) {
    return !!(S && typeof S == "object" && S.visible === !1);
  }
  function Q(S) {
    return xe(S) && ve(S) ? ug : 1;
  }
  function T(S, z, re = 1, he = 0) {
    if (!S || typeof S != "object") return S;
    const de = Number((z == null ? void 0 : z.u) || 0), we = Number((z == null ? void 0 : z.v) || 0), Ie = V(Number(S.u || 0), de), De = Number(S.v || 0) - we, ze = Math.max(0.02, Number(re || 1)), Ue = Number(he || 0) * ir, We = Math.cos(Ue), Ce = Math.sin(Ue), je = Ie / ze, ce = De / ze, te = je * We + ce * Ce, be = -je * Ce + ce * We;
    return {
      ...S,
      u: ((de + te) % 1 + 1) % 1,
      v: we + be
    };
  }
  function F(S) {
    const z = (S == null ? void 0 : S.bbox) || null, re = (S == null ? void 0 : S.transform) || {};
    return z ? {
      u: (((Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5 + Number(re.du || 0)) % 1 + 1) % 1,
      v: Te((Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5 + Number(re.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function J(S) {
    var ze, Ue, We, Ce;
    const z = (S == null ? void 0 : S.bbox) || null;
    if (!z) return [];
    const re = {
      u: (Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5,
      v: (Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5
    }, he = Math.max(0.01, Number(((ze = S == null ? void 0 : S.transform) == null ? void 0 : ze.scale) || 1)), de = Number(((Ue = S == null ? void 0 : S.transform) == null ? void 0 : Ue.rot_deg) || 0), we = Number(((We = S == null ? void 0 : S.transform) == null ? void 0 : We.du) || 0), Ie = Number(((Ce = S == null ? void 0 : S.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(z.u0 || 0), v: Number(z.v0 || 0) },
      { u: Number(z.u1 || 0), v: Number(z.v0 || 0) },
      { u: Number(z.u1 || 0), v: Number(z.v1 || 0) },
      { u: Number(z.u0 || 0), v: Number(z.v1 || 0) }
    ].map((je) => se(k(je, re, he, de), we, Ie));
  }
  function L(S) {
    const z = pe((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), re = (S == null ? void 0 : S.transform) || {}, he = (S == null ? void 0 : S.bbox) || {}, de = `${z}:${n.mode}:${u()}:${he.u0}:${he.v0}:${he.u1}:${he.v1}:${re.du}:${re.dv}:${re.rot_deg}:${re.scale}`;
    if (n.mode === "frame") {
      const we = a(), Ie = we ? c(we) : null;
      return `${de}:frame:${String((we == null ? void 0 : we.id) || "")}:${Math.round(Number((Ie == null ? void 0 : Ie.x) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.y) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.w) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.h) || 0))}`;
    }
    return `${de}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function X(S) {
    const z = String((S == null ? void 0 : S.id) || ""), re = D(S) ? "frame" : b(S) ? "sticker" : "item", he = Z(S), de = [
      re,
      z,
      n.mode,
      Number((he == null ? void 0 : he.yaw_deg) || 0).toFixed(4),
      Number((he == null ? void 0 : he.pitch_deg) || 0).toFixed(4),
      Number((he == null ? void 0 : he.hFOV_deg) || 0).toFixed(4),
      Number((he == null ? void 0 : he.vFOV_deg) || 0).toFixed(4),
      Number((he == null ? void 0 : he.rot_deg) || 0).toFixed(4),
      Number((he == null ? void 0 : he.roll_deg) || 0).toFixed(4),
      mr(he),
      P(S) && _(S)
    ].join(":");
    if (n.mode === "frame") {
      const we = a(), Ie = we ? c(we) : null;
      return `${de}:frame:${String((we == null ? void 0 : we.id) || "")}:${Math.round(Number((Ie == null ? void 0 : Ie.x) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.y) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.w) || 0))}:${Math.round(Number((Ie == null ? void 0 : Ie.h) || 0))}`;
    }
    return `${de}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function j() {
    ue().forEach((z, re) => {
      z.type === "sticker" && z.item && (z.item.z_index = re), z.type === "strokeGroup" && z.item && (z.item.z_index = re), z.type === "rasterObject" && z.item && (z.item.z_index = re);
    });
  }
  return {
    connect(S) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: h,
        sceneStickerShown: _,
        upstreamStickerImage: g,
        upstreamStickers: v
      } = S);
    },
    getList: y,
    skyStickers: H,
    upstreamSkyStickers: W,
    stickerById: O,
    isSceneSticker: P,
    isUploadingSticker: R,
    poseOf: Z,
    writePose: q,
    getPaintingGroupList: ae,
    makeStrokeGroupSelectionId: B,
    makeRasterObjectSelectionId: _e,
    parseRasterObjectSelectionId: pe,
    ensurePaintingGroupEntry: me,
    getFrameCornersUv: oe,
    ensureGroupFrame: N,
    getDisplayListObjects: ue,
    getOrderedPaintGroupIds: A,
    getOrderedDisplayListObjects: E,
    getSelectableStrokeGroupItems: w,
    getSelectableRasterObjectItems: M,
    cutoutStickers: le,
    getCutoutSelectableItems: ye,
    isShotItem: D,
    isStickerItem: b,
    getRasterObjectList: K,
    getRasterObjectItem: p,
    isRasterObjectItem: m,
    getStrokeGroupItem: x,
    isStrokeGroupItem: I,
    getStrokeGroupStrokes: $,
    getStrokeGeomCacheKey: Y,
    shortestWrappedDelta: V,
    getStrokeGroupCenterUv: ne,
    applyStrokeGroupOffset: U,
    applyStrokeGroupTransform: ie,
    applyRasterObjectOffset: ke,
    applyRasterObjectTransform: Me,
    getNextStickerZIndex: Ae,
    isExternalSticker: xe,
    isStickerHidden: ve,
    getStickerDisplayAlpha: Q,
    inverseTransformErpPointAround: T,
    getRasterObjectCenterUv: F,
    getRasterObjectTransformedErpPoints: J,
    getRasterObjectGeomCacheKey: L,
    getSceneItemGeomCacheKey: X,
    normalizeDisplayZIndices: j
  };
}
function oC(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: a,
    type: l
  } = e;
  let c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w;
  function M() {
    const L = String(t.selectedId || "");
    if (!L) return null;
    const X = P(L);
    if (X) return X;
    const j = H(L);
    return j || (o ? _().find((S) => String((S == null ? void 0 : S.id) || "") === L) || null : v().find((S) => String((S == null ? void 0 : S.id) || "") === L) || null);
  }
  function le() {
    const L = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], X = [], j = /* @__PURE__ */ new Set();
    return L.forEach((S) => {
      const z = String(S || "").trim();
      if (!z || j.has(z)) return;
      j.add(z);
      const re = z === String(t.selectedId || "") ? M() : P(z) || H(z) || (o ? _().find((he) => String((he == null ? void 0 : he.id) || "") === z) : v().find((he) => String((he == null ? void 0 : he.id) || "") === z));
      re && X.push(re);
    }), X;
  }
  function ye(L = null) {
    const X = Array.isArray(L) ? L : le();
    if (!X || X.length < 2) return null;
    const j = X.map((Ie) => ee(Ie)).filter((Ie) => (Ie == null ? void 0 : Ie.visible) && Array.isArray(Ie.corners) && Ie.corners.length);
    if (!j.length) return null;
    const S = j.flatMap((Ie) => Ie.corners.map((De) => Number((De == null ? void 0 : De.x) || 0))), z = j.flatMap((Ie) => Ie.corners.map((De) => Number((De == null ? void 0 : De.y) || 0))), re = Math.min(...S), he = Math.max(...S), de = Math.min(...z), we = Math.max(...z);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (re + he) * 0.5, y: (de + we) * 0.5 },
      corners: [
        { x: re, y: de },
        { x: he, y: de },
        { x: he, y: we },
        { x: re, y: we }
      ],
      edgeMidpoints: [
        { edge: "top", x: (re + he) * 0.5, y: de, a: { x: re, y: de }, b: { x: he, y: de } },
        { edge: "right", x: he, y: (de + we) * 0.5, a: { x: he, y: de }, b: { x: he, y: we } },
        { edge: "bottom", x: (re + he) * 0.5, y: we, a: { x: he, y: we }, b: { x: re, y: we } },
        { edge: "left", x: re, y: (de + we) * 0.5, a: { x: re, y: we }, b: { x: re, y: de } }
      ],
      rotateStemBase: { x: (re + he) * 0.5, y: de },
      rotateHandle: { x: (re + he) * 0.5, y: de - 30 }
    };
  }
  function D(L) {
    const X = String((L == null ? void 0 : L.id) || "").trim();
    return !!X && Array.isArray(t.selectedIds) && t.selectedIds.includes(X);
  }
  function b() {
    const L = M();
    return L ? _e(L) || q(L) ? "stroke" : Se(L) ? "frame" : "image" : null;
  }
  function K(L) {
    if (!L || typeof L != "object") return !1;
    if (_e(L)) {
      const X = String(L.actionGroupId || L.id || "").trim(), j = y().find((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() === X);
      return (j == null ? void 0 : j.locked) === !0;
    }
    if (q(L)) {
      const X = oe(L.rasterObjectId || L.id || ""), j = W().find((S) => String((S == null ? void 0 : S.id) || "").trim() === X);
      return (j == null ? void 0 : j.locked) === !0;
    }
    return Et(L) && !xa(L) ? !0 : L.locked === !0;
  }
  function p(L = null) {
    const X = Array.isArray(L) ? L : le();
    return X.length > 0 && X.every((j) => K(j));
  }
  function m(L, X) {
    const j = X === !0;
    if (!L || typeof L != "object") return !1;
    if (_e(L)) {
      const S = String(L.actionGroupId || L.id || "").trim(), z = y().find((re) => String((re == null ? void 0 : re.actionGroupId) || (re == null ? void 0 : re.id) || "").trim() === S);
      return !z || z.locked === j ? !1 : (z.locked = j, !0);
    }
    if (q(L)) {
      const S = oe(L.rasterObjectId || L.id || ""), z = W().find((re) => String((re == null ? void 0 : re.id) || "").trim() === S);
      return !z || z.locked === j ? !1 : (z.locked = j, !0);
    }
    return L.locked === j || Et(L) && !xa(L) ? !1 : (L.locked = j, !0);
  }
  function x() {
    if (n) return;
    const L = le();
    if (!L.length) return;
    const X = !p(L);
    let j = !1;
    L.forEach((S) => {
      m(S, X) && (j = !0);
    }), j && (G(), d(), E(), w(), N());
  }
  function I(L) {
    xe(), a.selection = null, t.selectedId = (L == null ? void 0 : L.id) || null, t.selectedIds = L != null && L.id ? [L.id] : [], L && B(L) && !Et(L) ? s.active.selected_sticker_id = L.id || null : s.active.selected_sticker_id = null, L && Se(L) ? s.active.selected_shot_id = L.id || null : L ? Se(L) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function $(L, X = null) {
    const j = [], S = /* @__PURE__ */ new Set();
    (Array.isArray(L) ? L : []).forEach((he) => {
      const de = String((he == null ? void 0 : he.id) || "").trim();
      !de || S.has(de) || (S.add(de), j.push(de));
    }), t.selectedIds = j, xe(), a.selection = null;
    const z = String(X || "").trim();
    t.selectedId = z && j.includes(z) ? z : j[j.length - 1] || null;
    const re = M();
    s.active.selected_sticker_id = re && B(re) && !Et(re) && re.id || null, re && Se(re) ? s.active.selected_shot_id = re.id || null : j.length || (s.active.selected_shot_id = null);
  }
  function Y() {
    const L = (Array.isArray(s.shots) ? s.shots : []).map((j, S) => ({
      kind: "frame",
      item: j,
      label: String((j == null ? void 0 : j.label) || `Frame ${S + 1}`)
    })), X = f().map((j, S) => {
      var re, he;
      const z = Z(j) ? String(j.id || md) : String(((he = (re = s.assets) == null ? void 0 : re[j.asset_id]) == null ? void 0 : he.name) || j.asset_id || j.id || `Image ${S + 1}`);
      return {
        kind: "image",
        item: j,
        label: z
      };
    });
    return [...L, ...X];
  }
  function se(L) {
    return L === "frame" ? He.camera : L === "stroke" ? He.paintbrush_vertical_tool : He.image;
  }
  function V(L) {
    return !L || !L.item ? {
      label: String((L == null ? void 0 : L.label) || ""),
      icon: null
    } : {
      label: String(L.label || ""),
      icon: se(L.kind)
    };
  }
  function ne() {
    if (n) return;
    const L = M();
    !L || !Z(L) || (L.visible = ge(L), T(), pe(), G(), d(), w(), E(), N());
  }
  function k() {
    if (n || l !== "stickers") return;
    const L = M();
    if (!L || !Z(L)) return;
    const X = L.initial_pose;
    if (!X || typeof X != "object") return;
    L.yaw_deg = Number(X.yaw_deg ?? L.yaw_deg ?? 0), L.pitch_deg = Number(X.pitch_deg ?? L.pitch_deg ?? 0), L.hFOV_deg = Number(X.hFOV_deg ?? L.hFOV_deg ?? 30);
    const j = O(li, () => {
      N();
    });
    j && (j.complete || j.naturalWidth || j.width) ? L.vFOV_deg = u(
      Number(X.hFOV_deg ?? L.hFOV_deg ?? 30),
      Number(j.naturalWidth || j.width || 1),
      Number(j.naturalHeight || j.height || 1)
    ) : L.vFOV_deg = Number(X.vFOV_deg ?? L.vFOV_deg ?? 30), L.rot_deg = Number(X.rot_deg ?? L.rot_deg ?? 0), G(), d(), w(), E(), N();
  }
  function U(L) {
    if (!L || !Z(L)) return null;
    const X = L.initial_pose;
    if (!X || typeof X != "object") return null;
    const j = {
      yaw_deg: Number(X.yaw_deg ?? L.yaw_deg ?? 0),
      pitch_deg: Number(X.pitch_deg ?? L.pitch_deg ?? 0),
      hFOV_deg: Number(X.hFOV_deg ?? L.hFOV_deg ?? 30),
      vFOV_deg: Number(X.vFOV_deg ?? L.vFOV_deg ?? 30),
      rot_deg: Number(X.rot_deg ?? L.rot_deg ?? 0)
    }, S = O(li, () => {
      N();
    });
    return S && (S.complete || S.naturalWidth || S.width) && (j.vFOV_deg = u(
      j.hFOV_deg,
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    )), j;
  }
  function ie() {
    const L = M();
    if (!L || !Z(L)) return !1;
    const X = U(L);
    if (!X) return !1;
    const j = (S, z) => Math.abs(Number(S || 0) - Number(z || 0)) <= 1e-4;
    return !(j(L.yaw_deg, X.yaw_deg) && j(L.pitch_deg, X.pitch_deg) && j(L.hFOV_deg, X.hFOV_deg) && j(L.vFOV_deg, X.vFOV_deg) && j(L.rot_deg, X.rot_deg));
  }
  function ke(L = {}) {
    const j = L.preservePanelValues !== !1 ? C(M()) : null;
    j && (t.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: mr(j)
    }), t.selectedId = null, t.selectedIds = [], xe(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Me() {
    if (!i || !t.worldSelectedId) return null;
    const L = A(t.worldSelectedId);
    return (L == null ? void 0 : L.placement) === "world" ? L : null;
  }
  function Ae(L) {
    I(null), t.worldSelectedId = L, r.backgroundDirty = !0;
  }
  function xe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function ve(L) {
    return !!L && !n && !K(L);
  }
  function Q() {
    if (l !== "cutout") return;
    const L = h();
    L && (t.selectedId = String(L.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function T() {
    var X;
    const L = M();
    (ae(L) && !ue(L) || t.selectedId === Du && R() && !c() || b() === "stroke" && !me()) && I(null), ((X = Me()) == null ? void 0 : X.visible) === !1 && xe();
  }
  function F() {
    if (n) return;
    const L = le();
    if (!M() || L.length === 0 || L.some(Et) || L.some((de) => K(de))) return;
    fe();
    const j = g(), S = new Set(L.map((de) => B(de) ? `sticker:${String(de.id || "")}` : q(de) ? `rasterObject:${oe(de.rasterObjectId || de.id || "")}` : `strokeGroup:${String(de.actionGroupId || de.id || "")}`)), z = [], re = [];
    if (j.forEach((de) => {
      var Ie, De;
      const we = de.type === "sticker" ? `sticker:${String(((Ie = de.item) == null ? void 0 : Ie.id) || "")}` : de.type === "rasterObject" ? `rasterObject:${String(((De = de.item) == null ? void 0 : De.id) || de.id || "")}` : `strokeGroup:${String(de.actionGroupId || "")}`;
      S.has(we) ? z.push(de) : re.push(de);
    }), !z.length || z[z.length - 1] === j[j.length - 1]) return;
    [...re, ...z].forEach((de, we) => {
      de.type === "sticker" && de.item && (de.item.z_index = we), de.type === "strokeGroup" && de.item && (de.item.z_index = we), de.type === "rasterObject" && de.item && (de.item.z_index = we);
    }), pe(), G(), d(), E(), N();
  }
  function J() {
    if (n) return;
    const L = le();
    if (!M() || L.length === 0 || L.some(Et) || L.some((de) => K(de))) return;
    fe();
    const j = g(), S = new Set(L.map((de) => B(de) ? `sticker:${String(de.id || "")}` : q(de) ? `rasterObject:${oe(de.rasterObjectId || de.id || "")}` : `strokeGroup:${String(de.actionGroupId || de.id || "")}`)), z = [], re = [];
    if (j.forEach((de) => {
      var Ie, De;
      const we = de.type === "sticker" ? `sticker:${String(((Ie = de.item) == null ? void 0 : Ie.id) || "")}` : de.type === "rasterObject" ? `rasterObject:${String(((De = de.item) == null ? void 0 : De.id) || de.id || "")}` : `strokeGroup:${String(de.actionGroupId || "")}`;
      S.has(we) ? z.push(de) : re.push(de);
    }), !z.length || z[0] === j[0]) return;
    [...z, ...re].forEach((de, we) => {
      de.type === "sticker" && de.item && (de.item.z_index = we), de.type === "strokeGroup" && de.item && (de.item.z_index = we), de.type === "rasterObject" && de.item && (de.item.z_index = we);
    }), pe(), G(), d(), E(), N();
  }
  return {
    connect(L) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: h,
        getCutoutSelectableItems: _,
        getDisplayListObjects: g,
        getList: v,
        getPaintingGroupList: y,
        getRasterObjectItem: H,
        getRasterObjectList: W,
        getStickerUiImage: O,
        getStrokeGroupItem: P,
        hasCamera: R,
        isExternalSticker: Z,
        isRasterObjectItem: q,
        isSceneSticker: ae,
        isShotItem: Se,
        isStickerHidden: ge,
        isStickerItem: B,
        isStrokeGroupItem: _e,
        markObjectVisualsDirty: pe,
        normalizeDisplayZIndices: fe,
        objectGeom: ee,
        paintingShown: me,
        parseRasterObjectSelectionId: oe,
        poseOf: C,
        pushHistory: G,
        requestDraw: N,
        sceneStickerShown: ue,
        stickerById: A,
        updateSelectionMenu: E,
        updateSidePanel: w
      } = L);
    },
    getSelected: M,
    getSelectedItems: le,
    getMultiSelectionGeom: ye,
    isItemSelected: D,
    getSelectedKind: b,
    isItemLocked: K,
    areAllSelectedItemsLocked: p,
    toggleSelectedLock: x,
    setSelectedItem: I,
    setSelectedItems: $,
    getCutoutInspectorItems: Y,
    getSelectionItemIcon: se,
    getSelectionItemLabelData: V,
    toggleSelectedExternalStickerVisibility: ne,
    restoreSelectedToInitialPose: k,
    canRestoreSelectedToInitial: ie,
    clearSelection: ke,
    selectedWorldSticker: Me,
    selectWorldSticker: Ae,
    clearWorldSelection: xe,
    worldStickerEditable: ve,
    applyInitialCutoutFocus: Q,
    releaseHiddenSelection: T,
    bringSelectedToFront: F,
    sendSelectedToBack: J
  };
}
function sC(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function h() {
    return o && s() && i.camera.projection === "erp";
  }
  function _() {
    const M = q({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !M || M.length !== 4 ? !1 : M[0].y >= M[3].y;
  }
  function g() {
    return dg({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function v() {
    const w = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return w.some((M, le) => M !== f.key[le]) && (f = { key: w, projection: Bu(g(), n.width, n.height) }), f.projection;
  }
  function y(w) {
    const M = v().project(w);
    return M.z > 1e-4 ? M : null;
  }
  function H(w, M) {
    return v().ray(w, M);
  }
  function W() {
    const w = n.width, M = n.height, le = 2;
    if (w / Math.max(M, 1) >= le) {
      const p = M, m = p * le;
      return { x: (w - m) * 0.5, y: 0, w: m, h: p };
    }
    const D = w, b = D / le;
    return { x: 0, y: (M - b) * 0.5, w: D, h: b };
  }
  function O(w) {
    return {
      lon: Math.atan2(w.x, w.z),
      lat: Math.asin(Te(w.y, -1, 1))
    };
  }
  function P(w, M = null) {
    const { lon: le, lat: ye } = O(w), D = W();
    let b = D.x + (le / (2 * Math.PI) + 0.5) * D.w;
    const K = D.y + (0.5 - ye / Math.PI) * D.h;
    if (M !== null) {
      for (; b - M > D.w / 2; ) b -= D.w;
      for (; b - M < -D.w / 2; ) b += D.w;
    }
    return { x: b, y: K, z: 1 };
  }
  function R(w) {
    const M = c(w), le = qi(
      Number(M.yaw_deg || 0),
      Number(M.pitch_deg || 0),
      Number(M.rot_deg || M.roll_deg || 0)
    ), ye = Math.tan(Te(Number(M.hFOV_deg || 20), 0.1, 179) * 0.5 * ir), D = Math.tan(Te(Number(M.vFOV_deg || 20), 0.1, 179) * 0.5 * ir);
    return {
      centerDir: le.fwd,
      right: le.right,
      up: le.up,
      tanX: ye,
      tanY: D
    };
  }
  function Z(w, M, le) {
    return AA(Np(Np(w.centerDir, Ap(w.right, M)), Ap(w.up, le)));
  }
  function q(w) {
    const M = R(w);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ye, v: D }) => Z(M, ye * M.tanX, D * M.tanY));
  }
  function ae(w, M, le) {
    const ye = R(w), D = (M * 2 - 1) * ye.tanX, b = (1 - le * 2) * ye.tanY;
    return Z(ye, D, b);
  }
  function Se(w) {
    const M = t.width / Math.max(1, n.width), le = t.height / Math.max(1, n.height);
    return { x: w.x * M, y: w.y * le, w: w.w * M, h: w.h * le };
  }
  function ge(w, M = null, le = null, ye = null) {
    if (r.mode === "frame") {
      const D = M || a();
      if (!D) return [];
      const b = le || l(D);
      return G(w, D, b);
    }
    return me(w, ye);
  }
  function B(w, M = null, le = null, ye = null, D = null) {
    if (!w) return null;
    if (r.mode === "unwrap") {
      const K = me([w], D);
      return K[0] ? { x: K[0].x, y: K[0].y, z: 1 } : null;
    }
    const b = pe(w);
    return b ? d(b, M, le, ye) : null;
  }
  function _e(w, M) {
    if (!w || !M) return null;
    const le = Number(M.x || 0), ye = Number(M.y || 0);
    return ae(w, le, ye);
  }
  function pe(w) {
    if (!w) return null;
    const M = (Number(w.u || 0) - 0.5) * (2 * Math.PI), le = (0.5 - Number(w.v || 0)) * Math.PI, ye = Math.cos(le);
    return sl(ye * Math.sin(M), Math.sin(le), ye * Math.cos(M));
  }
  function fe(w, M) {
    if (!w || !M) return null;
    const le = R(w), ye = ec(M, le.centerDir);
    if (!Number.isFinite(ye) || ye <= 1e-6) return null;
    const D = ec(M, le.right) / ye, b = ec(M, le.up) / ye;
    return {
      x: (D / Math.max(1e-6, le.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, le.tanY)) * 0.5
    };
  }
  function ee(w) {
    if (!Array.isArray(w) || w.length < 3) return [];
    if (r.mode === "unwrap") {
      const le = W();
      return w.map((ye) => ({
        x: le.x + Number(ye.u || 0) * le.w,
        y: le.y + Number(ye.v || 0) * le.h
      }));
    }
    const M = w.map((le) => y(pe(le))).filter(Boolean);
    return M.every((le) => Number(le.z || 0) > 0) ? M.map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) })) : [];
  }
  function me(w, M = null) {
    if (!Array.isArray(w) || w.length < 1) return [];
    if (r.mode === "unwrap") {
      const ye = W();
      return w.map((D) => {
        const b = (Number(D.u || 0) % 1 + 1) % 1, K = M == null ? b : Number(M || 0) + u(b, M);
        return {
          x: ye.x + K * ye.w,
          y: ye.y + Number(D.v || 0) * ye.h
        };
      });
    }
    const le = w.map((ye) => y(pe(ye))).filter(Boolean);
    return le.every((ye) => Number(ye.z || 0) > 0) ? le.map((ye) => ({ x: Number(ye.x || 0), y: Number(ye.y || 0) })) : [];
  }
  function oe(w, M = 160) {
    if (!Array.isArray(w) || w.length < 3) return !1;
    for (let le = 0; le < w.length; le += 1) {
      const ye = w[le], D = w[(le + 1) % w.length];
      if (!ye || !D || !Number.isFinite(ye.x) || !Number.isFinite(ye.y) || !Number.isFinite(D.x) || !Number.isFinite(D.y) || Math.hypot(Number(D.x) - Number(ye.x), Number(D.y) - Number(ye.y)) > M) return !1;
    }
    return !0;
  }
  function C(w, M, le) {
    if (!Array.isArray(w) || w.length < 3 || !M || !le) return [];
    const ye = [];
    for (const D of w) {
      const b = pe(D), K = fe(M, b);
      if (!K) return [];
      ye.push({
        x: Number(le.x || 0) + Number(K.x || 0) * Number(le.w || 0),
        y: Number(le.y || 0) + Number(K.y || 0) * Number(le.h || 0)
      });
    }
    return oe(ye, Math.max(80, Math.max(le.w, le.h) * 0.75)) ? ye : [];
  }
  function G(w, M, le) {
    if (!Array.isArray(w) || w.length < 1 || !M || !le) return [];
    const ye = [];
    for (const D of w) {
      const b = pe(D), K = fe(M, b);
      K && ye.push({
        x: Number(le.x || 0) + Number(K.x || 0) * Number(le.w || 0),
        y: Number(le.y || 0) + Number(K.y || 0) * Number(le.h || 0)
      });
    }
    return ye;
  }
  function N(w) {
    const M = n.getBoundingClientRect();
    return {
      x: (w.clientX - M.left) / M.width * n.width,
      y: (w.clientY - M.top) / M.height * n.height
    };
  }
  function ue(w) {
    const M = n.getBoundingClientRect();
    return {
      x: Number(w.clientX) - Number(M.left || 0),
      y: Number(w.clientY) - Number(M.top || 0)
    };
  }
  function A(w, M = performance.now()) {
    if (r.mode === "unwrap") {
      const b = W(), K = (w.x - b.x) / Math.max(1, b.w), p = (w.y - b.y) / Math.max(1, b.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (K % 1 + 1) % 1,
        v: Te(p, 0, 1),
        t: Number(M || 0)
      };
    }
    const le = H(w.x, w.y), { lon: ye, lat: D } = O(le);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ye / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Te(0.5 - D / Math.PI, 0, 1),
      t: Number(M || 0)
    };
  }
  function E(w, M, le = performance.now()) {
    const ye = l(M);
    if (!ye) return null;
    const D = {
      x: (Number(w.x) - ye.x) / Math.max(1, ye.w),
      y: (Number(w.y) - ye.y) / Math.max(1, ye.h)
    };
    if (D.x < 0 || D.x > 1 || D.y < 0 || D.y > 1) return null;
    const b = _e(M, D);
    if (!b) return null;
    const { lon: K, lat: p } = O(b);
    return {
      targetKind: "ERP_GLOBAL",
      u: (K / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Te(0.5 - p / Math.PI, 0, 1),
      t: Number(le || 0)
    };
  }
  return {
    connect(w) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = w);
    },
    isErpCamera: h,
    currentViewCamera: g,
    currentViewProjection: v,
    projectDir: y,
    screenToWorldDir: H,
    getUnwrapRect: W,
    projectDirUnwrap: P,
    getStickerFrame: R,
    stickerDirFromFrame: Z,
    stickerCornersDir: q,
    stickerSampleDir: ae,
    stickerCornerOrderSanity: _,
    projectEditorPoints: ge,
    projectErpPointToEditor: B,
    frameLocalPointToWorldDir: _e,
    erpPointToWorldDir: pe,
    worldDirToFrameLocalPoint: fe,
    projectLassoPointsToCurrentView: ee,
    projectErpLassoPointsToFrameRect: C,
    screenPos: N,
    screenPosCss: ue,
    screenPosToErpPoint: A,
    screenPosToFrameAsErpPoint: E,
    deviceRect: Se
  };
}
function aC(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G;
  function N(b, K) {
    const p = String(b.actionGroupId || b.id || "").trim(), m = W(p, b.layerKind), x = a(p, b.layerKind, m), I = (x == null ? void 0 : x.centerUv) || H(p, b.layerKind, m), $ = r.mode === "unwrap" ? Number((I == null ? void 0 : I.u) || 0) : null, Y = [], se = r.mode === "frame" ? l() : null, V = se ? u(se) : null;
    for (const Q of m) {
      const T = (Q == null ? void 0 : Q.geometry) || null, F = (T == null ? void 0 : T.geometryKind) === "lasso_fill" ? T == null ? void 0 : T.points : (T == null ? void 0 : T.processedPoints) || (T == null ? void 0 : T.rawPoints) || (T == null ? void 0 : T.points) || [], J = pe(F, se, V, $).filter((j) => Number.isFinite(j == null ? void 0 : j.x) && Number.isFinite(j == null ? void 0 : j.y));
      if (!J.length) continue;
      const L = c(String((Q == null ? void 0 : Q.toolKind) || "pen")), X = pn[L] || pn[fr];
      Y.push({
        points: J,
        closed: String((T == null ? void 0 : T.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Q == null ? void 0 : Q.size) || 10) * Math.max(0.1, Number((X == null ? void 0 : X.sizeScale) ?? 1)) + 10),
        layerKind: String((Q == null ? void 0 : Q.layerKind) || b.layerKind || "paint")
      });
    }
    const ne = fe(I, null, se, V, $);
    if (!ne) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(K, Q), Q;
    }
    const U = d(x).map((Q) => fe(Q, ne.x, se, V, $)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y)).map((Q) => ({ x: Number(Q.x || 0), y: Number(Q.y || 0) }));
    if (U.length < 4) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(K, Q), Q;
    }
    const ie = (Q, T) => ({
      x: (Number((Q == null ? void 0 : Q.x) || 0) + Number((T == null ? void 0 : T.x) || 0)) * 0.5,
      y: (Number((Q == null ? void 0 : Q.y) || 0) + Number((T == null ? void 0 : T.y) || 0)) * 0.5,
      a: Q,
      b: T
    }), ke = ie(U[0], U[1]), Me = ie(U[1], U[2]), Ae = ie(U[2], U[3]), xe = ie(U[3], U[0]), ve = {
      kind: "strokeGroup",
      center: { x: Number(ne.x || 0), y: Number(ne.y || 0) },
      corners: U,
      edgeMidpoints: [
        { edge: "top", ...ke },
        { edge: "right", ...Me },
        { edge: "bottom", ...Ae },
        { edge: "left", ...xe }
      ],
      rotateStemBase: { x: ke.x, y: ke.y },
      rotateHandle: { x: ke.x, y: ke.y - 30 },
      strokePaths: Y,
      visible: !0
    };
    return r._strokeGeomCache.set(K, ve), ve;
  }
  function ue(b, K) {
    const p = r.mode === "frame" ? l() : null, m = p ? u(p) : null, x = f(b), I = r.mode === "unwrap" ? Number((x == null ? void 0 : x.u) || 0) : null, $ = fe(x, null, p, m, I), se = _(b).map((U) => fe(U, ($ == null ? void 0 : $.x) ?? null, p, m, I)).filter((U) => Number.isFinite(U == null ? void 0 : U.x) && Number.isFinite(U == null ? void 0 : U.y));
    if (!Array.isArray(se) || se.length < 4) {
      const U = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(K, U), U;
    }
    const V = se.slice(0, 4).map((U) => ({ x: Number((U == null ? void 0 : U.x) || 0), y: Number((U == null ? void 0 : U.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: V.reduce((U, ie) => U + Number(ie.x || 0), 0) / V.length,
        y: V.reduce((U, ie) => U + Number(ie.y || 0), 0) / V.length
      },
      corners: V,
      visible: !0
    };
    return r._strokeGeomCache.set(K, k), k;
  }
  function A(b, K = null, p = null, m = null, x = {}) {
    if (r.mode === "frame") {
      const ne = p || l(), k = m || u(ne);
      if (!ne || !k) return null;
      const U = ne ? G(ne, b) : null;
      return U ? {
        x: Number(k.x || 0) + Number(U.x || 0) * Number(k.w || 0),
        y: Number(k.y || 0) + Number(U.y || 0) * Number(k.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return _e(b, K);
    const I = 1e-4, $ = o().project(b, I);
    if (!Number.isFinite($.z) || $.z <= I && !(x != null && x.clipBehind)) return null;
    const Y = n.width, se = n.height, V = Math.max(Y, se) * 2;
    return {
      x: Te($.x, -V, Y + V),
      y: Te($.y, -V, se + V),
      z: Math.max($.z, I),
      rawZ: $.z,
      clipped: $.z <= I
    };
  }
  function E(b, K = []) {
    if (r.mode !== "pano" || q(b)) return 1;
    const p = K.map((m) => Number((m == null ? void 0 : m.rawZ) ?? (m == null ? void 0 : m.z))).filter((m) => Number.isFinite(m));
    return p.length ? PA(0.035, 0.2, Math.min(...p)) : 1;
  }
  function w(b) {
    if (R(b) && !ee(b)) return { visible: !1 };
    const K = ge(b), p = hn(Number(K.yaw_deg || 0), Number(K.pitch_deg || 0)), m = r.mode === "frame" ? l() : null, x = m ? u(m) : null, I = r.mode === "pano" && (q(b) || Z(b)), $ = I ? { clipBehind: !0 } : null, Y = A(p, null, m, x, $);
    if (!Y) return { visible: !1 };
    const se = v(b), ne = me(b).map((S) => A(S, Y.x, m, x, $)).filter((S) => Number.isFinite(S == null ? void 0 : S.x) && Number.isFinite(S == null ? void 0 : S.y));
    if (ne.length < 4) return { visible: !1 };
    const k = oe(se, 0, se.tanY), U = oe(se, 0, se.tanY + Math.max(se.tanY * 0.43, 0.053)), ie = A(k, Y.x, m, x, $);
    if (!ie) return { visible: !1 };
    const ke = A(U, (ie == null ? void 0 : ie.x) ?? Y.x, m, x, $), Me = ((ke == null ? void 0 : ke.x) ?? ie.x) - ie.x, Ae = ((ke == null ? void 0 : ke.y) ?? ie.y) - ie.y, xe = Math.hypot(Me, Ae) || 1, ve = {
      x: ie.x + Me / xe * 30,
      y: ie.y + Ae / xe * 30
    }, Q = A(oe(se, 0, se.tanY), Y.x, m, x, $), T = A(oe(se, se.tanX, 0), Y.x, m, x, $), F = A(oe(se, 0, -se.tanY), Y.x, m, x, $), J = A(oe(se, -se.tanX, 0), Y.x, m, x, $);
    if (!Q || !T || !F || !J) return { visible: !1 };
    const L = [
      Y,
      ...ne,
      ie,
      ke,
      Q,
      T,
      F,
      J
    ];
    if (I && !L.some((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z)) > 1e-4)) return { visible: !1 };
    const X = E(b, L), j = [
      {
        edge: "top",
        x: Q.x,
        y: Q.y,
        a: { x: ne[0].x, y: ne[0].y },
        b: { x: ne[1].x, y: ne[1].y }
      },
      {
        edge: "right",
        x: T.x,
        y: T.y,
        a: { x: ne[1].x, y: ne[1].y },
        b: { x: ne[2].x, y: ne[2].y }
      },
      {
        edge: "bottom",
        x: F.x,
        y: F.y,
        a: { x: ne[2].x, y: ne[2].y },
        b: { x: ne[3].x, y: ne[3].y }
      },
      {
        edge: "left",
        x: J.x,
        y: J.y,
        a: { x: ne[3].x, y: ne[3].y },
        b: { x: ne[0].x, y: ne[0].y }
      }
    ];
    return {
      center: { x: Y.x, y: Y.y },
      corners: ne.map((S) => ({ x: S.x, y: S.y })),
      edgeMidpoints: j,
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: ve,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: X,
      visible: !0
    };
  }
  function M(b) {
    if (t && Z(b) && O()) return { visible: !1 };
    if (!Se() && (ae(b) || P(b))) return { visible: !1 };
    if (ae(b)) {
      const x = String(b.actionGroupId || b.id || "").trim(), I = y(x, b.layerKind), $ = r._strokeGeomCache.get(I);
      return $ || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), N(b, I));
    }
    if (P(b)) {
      const x = h(b), I = r._strokeGeomCache.get(x);
      return I || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), ue(b, x));
    }
    const K = g(b), p = r._strokeGeomCache.get(K);
    if (p) return p;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const m = w(b);
    return r._strokeGeomCache.set(K, m), m;
  }
  function le(b, K, p, m = null) {
    const x = [];
    for (let I = 0; I <= p; I += 1) {
      const $ = I / p;
      let Y = 0, se = 0;
      K === 0 ? (Y = $, se = 0) : K === 1 ? (Y = 1, se = $) : K === 2 ? (Y = 1 - $, se = 1) : (Y = 0, se = 1 - $);
      const V = C(b, Y, se), ne = r.mode === "unwrap" ? _e(V, m) : B(V);
      ne && x.push(ne);
    }
    return x;
  }
  function ye() {
    const b = [...Array.isArray(i.shots) ? i.shots : []], K = [...s()].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
    return [...b, ...K];
  }
  function D() {
    const b = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((p, m) => Number(m.z_index || 0) - Number(p.z_index || 0)), ...b];
  }
  return {
    connect(b) {
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
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: v,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: H,
        getStrokeGroupStrokes: W,
        isFreeSpaceView: O,
        isRasterObjectItem: P,
        isSceneSticker: R,
        isShotItem: Z,
        isStickerItem: q,
        isStrokeGroupItem: ae,
        paintingShown: Se,
        poseOf: ge,
        projectDir: B,
        projectDirUnwrap: _e,
        projectEditorPoints: pe,
        projectErpPointToEditor: fe,
        sceneStickerShown: ee,
        stickerCornersDir: me,
        stickerDirFromFrame: oe,
        stickerSampleDir: C,
        worldDirToFrameLocalPoint: G
      } = b);
    },
    projectSceneItemDir: A,
    objectGeom: M,
    sampleStickerEdge: le,
    getCutoutSelectableItemsForDisplay: ye,
    getCutoutSelectableItemsForHit: D
  };
}
const Es = /* @__PURE__ */ new Map();
function lC(e) {
  const {
    api: t,
    editor: n,
    node: r,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se;
  function ge(p = n.interaction) {
    const m = String((p == null ? void 0 : p.kind) || "");
    if (m === "paint_stroke" || m === "paint_lasso_fill" || m === "move_stroke_group" || m === "scale_stroke_group" || m === "rotate_stroke_group" || m === "move_raster_object" || m === "scale_raster_object") return !0;
    if (m === "move_multi") {
      const x = Array.isArray(p == null ? void 0 : p.strokeSnapshots) && p.strokeSnapshots.length > 0, I = Array.isArray(p == null ? void 0 : p.rasterSnapshots) && p.rasterSnapshots.length > 0;
      return x || I;
    }
    return !1;
  }
  function B() {
    var m, x, I, $;
    let p = null;
    try {
      const Y = g(), se = (($ = (I = (x = (m = n.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : x.call(m, Y)) == null ? void 0 : I.displayPaint) == null ? void 0 : $.canvas) || null;
      se && (p = {
        source: se,
        revision: `${v()}:${_e()}`
      });
    } catch {
      p = null;
    }
    return p;
  }
  function _e() {
    var $, Y, se, V, ne, k, U;
    const p = n.interaction, m = String((p == null ? void 0 : p.kind) || "");
    if (!ge(p)) return "";
    if (m === "paint_stroke" || m === "paint_lasso_fill") {
      const ie = (($ = p == null ? void 0 : p.stroke) == null ? void 0 : $.geometry) || null, ke = String(((Y = p == null ? void 0 : p.stroke) == null ? void 0 : Y.layerKind) || ""), Me = ((se = ie == null ? void 0 : ie.rawPoints) == null ? void 0 : se.length) ?? ((V = ie == null ? void 0 : ie.points) == null ? void 0 : V.length) ?? 0, Ae = String((p == null ? void 0 : p._livePreviewToken) || "");
      return `_${ke || "paint"}_${m}_live${Ae}_${Me}_${n.livePaintInteractionRevision}`;
    }
    const x = String(((ne = p == null ? void 0 : p.item) == null ? void 0 : ne.actionGroupId) || ""), I = String(((k = p == null ? void 0 : p.item) == null ? void 0 : k.rasterObjectId) || ((U = p == null ? void 0 : p.item) == null ? void 0 : U.id) || "");
    return `_${m}_${x || I || "active"}_${n.livePaintInteractionRevision}`;
  }
  function pe(p, m = null) {
    const x = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!x) return null;
    const I = s.get(x);
    if (I)
      return I.complete || I.width || I.naturalWidth, I;
    const $ = new Image();
    return $.onload = () => {
      typeof m == "function" && m();
    }, $.src = x, s.set(x, $), $;
  }
  function fe(p) {
    const m = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!m) return null;
    const x = o.get(m);
    if (x) return x.ready ? x : null;
    const I = pe(p, () => {
      const U = o.get(m);
      U && (U.ready = !1), q({ localOnly: !0 });
    });
    if (!I || !(I.complete || I.width || I.naturalWidth)) return null;
    const $ = Number(I.naturalWidth || I.width || 0), Y = Number(I.naturalHeight || I.height || 0);
    if ($ < 1 || Y < 1) return null;
    const se = Gt({ label: "editor.image-pixels" });
    se.width = $, se.height = Y;
    const V = se.getContext("2d", { willReadFrequently: !0 });
    if (!V) return null;
    V.clearRect(0, 0, $, Y), V.drawImage(I, 0, 0, $, Y);
    const ne = V.getImageData(0, 0, $, Y).data, k = { canvas: se, width: $, height: Y, alpha: ne, ready: !0 };
    return o.set(m, k), k;
  }
  function ee(p, m) {
    if (!p || !m) return null;
    const x = (p == null ? void 0 : p.bbox) || null;
    if (!x) return null;
    const I = (p == null ? void 0 : p.transform) || {}, $ = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, Y = {
      u: ((Number(m.u || 0) - Number(I.du || 0)) % 1 + 1) % 1,
      v: Number(m.v || 0) - Number(I.dv || 0)
    }, se = W(
      Y,
      $,
      Number(I.scale || 1),
      Number(I.rot_deg || 0)
    ), V = Number(x.u1 || 0) - Number(x.u0 || 0), ne = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(V > 1e-6) || !(ne > 1e-6)) return null;
    const k = Se(Number(se.u || 0), Number(x.u0 || 0)) / V, U = (Number(se.v || 0) - Number(x.v0 || 0)) / ne;
    if (k < 0 || k > 1 || U < 0 || U > 1) return 0;
    const ie = fe(p);
    if (!ie) return null;
    const ke = Te(Math.floor(k * ie.width), 0, ie.width - 1), Me = Te(Math.floor(U * ie.height), 0, ie.height - 1);
    return Number(ie.alpha[(Me * ie.width + ke) * 4 + 3] || 0);
  }
  function me(p, m, x, I = null) {
    if (!(m != null && m.visible) || !Ar(x, m.corners)) return !1;
    const $ = I || ae(x, performance.now()), Y = ee(p, $);
    return Y === null ? !0 : Y > 8;
  }
  function oe() {
    var I, $, Y, se, V, ne, k, U;
    const p = (($ = (I = n.paintEngine) == null ? void 0 : I.getErpTarget) == null ? void 0 : $.call(I, g(!1))) || null, m = Math.max(1, Number(((Y = p == null ? void 0 : p.descriptor) == null ? void 0 : Y.width) || ((V = (se = p == null ? void 0 : p.displayPaint) == null ? void 0 : se.canvas) == null ? void 0 : V.width) || 2048)), x = Math.max(1, Number(((ne = p == null ? void 0 : p.descriptor) == null ? void 0 : ne.height) || ((U = (k = p == null ? void 0 : p.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : U.height) || 1024));
    return { width: m, height: x };
  }
  function C() {
    var Me, Ae, xe;
    const p = n.interaction;
    if ((p == null ? void 0 : p.kind) !== "paint_stroke") return null;
    const m = (p == null ? void 0 : p.stroke) || null;
    if (!m || String((m == null ? void 0 : m.layerKind) || "") !== "paint" || String((m == null ? void 0 : m.toolKind) || "") !== "eraser") return null;
    const x = u(), I = `${_e()}:${x.width}:${x.height}`;
    if (((Me = n._activePaintEraserPreviewInfo) == null ? void 0 : Me.cacheKey) === I)
      return n._activePaintEraserPreviewInfo.value || null;
    const $ = Oo(m), Y = ($ == null ? void 0 : $.geometry) || null;
    if (Y && String(Y.geometryKind || "") !== "lasso_fill") {
      const ve = Array.isArray(Y.rawPoints) && Y.rawPoints.length ? Y.rawPoints : Array.isArray(Y.points) ? Y.points : [];
      Y.processedPoints = P(ve, $.targetSpace, !0);
    }
    const se = c(x.width, x.height, { readback: !0 });
    if (!R(se, $, { w: x.width, h: x.height })) return null;
    const V = ((xe = (Ae = se.ctx) == null ? void 0 : Ae.getImageData(0, 0, x.width, x.height)) == null ? void 0 : xe.data) || null;
    if (!V) return null;
    let ne = x.width, k = x.height, U = -1, ie = -1;
    for (let ve = 0; ve < x.height; ve += 1)
      for (let Q = 0; Q < x.width; Q += 1)
        V[(ve * x.width + Q) * 4 + 3] <= 8 || (Q < ne && (ne = Q), ve < k && (k = ve), Q > U && (U = Q), ve > ie && (ie = ve));
    if (U < ne || ie < k)
      return n._activePaintEraserPreviewInfo = { cacheKey: I, value: null }, null;
    const ke = {
      surface: se,
      bounds: { minX: ne, minY: k, maxX: U, maxY: ie },
      key: `${I}:${ne}:${k}:${U}:${ie}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: I, value: ke }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ke;
  }
  function G() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function N(p, m, x) {
    var I, $;
    if (!p) return null;
    if ((I = p.item) != null && I.bbox) {
      const Y = p.item.bbox, se = (($ = p.item) == null ? void 0 : $.transform) || {}, V = Number(Y.u0 || 0) + Number(se.du || 0), ne = Number(Y.u1 || 0) + Number(se.du || 0), k = Number(Y.v0 || 0) + Number(se.dv || 0), U = Number(Y.v1 || 0) + Number(se.dv || 0);
      return {
        minX: Math.floor((V % 1 + 1) % 1 * m),
        maxX: Math.ceil((ne % 1 + 1) % 1 * m),
        minY: Math.floor(Te(k, 0, 1) * x),
        maxY: Math.ceil(Te(U, 0, 1) * x),
        wraps: ne - V >= 1 || V < 0 || ne > 1
      };
    }
    return null;
  }
  function ue(p, m, x) {
    if (!p || !m) return !1;
    const I = (se) => se.wraps ? [
      { minX: 0, maxX: se.maxX, minY: se.minY, maxY: se.maxY, wraps: !1 },
      { minX: se.minX, maxX: x - 1, minY: se.minY, maxY: se.maxY, wraps: !1 }
    ] : [se], $ = I(p), Y = I(m);
    return $.some((se) => Y.some((V) => !(se.maxX < V.minX || V.maxX < se.minX || se.maxY < V.minY || V.maxY < se.minY)));
  }
  function A(p, m, x) {
    var J, L, X, j, S, z, re;
    if (!p || !m || !((J = x == null ? void 0 : x.surface) != null && J.canvas)) return p;
    const I = Number(p.width || x.surface.canvas.width || 0), $ = Number(p.height || x.surface.canvas.height || 0);
    if (I < 1 || $ < 1) return p;
    const Y = N(m, I, $);
    if (Y && !ue(Y, x.bounds, I)) return p;
    const se = String(((L = m.item) == null ? void 0 : L.id) || m.id || ""), V = ((X = m.item) == null ? void 0 : X.transform) || {}, ne = `${x.key}:${se}:${I}:${$}:${Number(V.du || 0).toFixed(6)}:${Number(V.dv || 0).toFixed(6)}:${Number(V.rot_deg || 0).toFixed(3)}:${Number(V.scale || 1).toFixed(4)}`, k = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(ne)) return k.get(ne);
    const U = Te(Math.floor(Number(((j = x.bounds) == null ? void 0 : j.minX) || 0)), 0, Math.max(0, I - 1)), ie = Te(Math.floor(Number(((S = x.bounds) == null ? void 0 : S.minY) || 0)), 0, Math.max(0, $ - 1)), ke = Te(Math.ceil(Number(((z = x.bounds) == null ? void 0 : z.maxX) || 0)), U, Math.max(0, I - 1)), Me = Te(Math.ceil(Number(((re = x.bounds) == null ? void 0 : re.maxY) || 0)), ie, Math.max(0, $ - 1)), Ae = Math.max(1, ke - U + 1), xe = Math.max(1, Me - ie + 1), ve = c(I, $, { readback: !0 });
    ve.ctx.clearRect(0, 0, I, $), ve.ctx.drawImage(p, 0, 0);
    const Q = ve.ctx.getImageData(U, ie, Ae, xe);
    ve.ctx.save(), ve.ctx.globalCompositeOperation = "destination-out", ve.ctx.drawImage(x.surface.canvas, 0, 0), ve.ctx.restore();
    const T = ve.ctx.getImageData(U, ie, Ae, xe);
    let F = !1;
    for (let he = 0; he < Ae * xe; he += 1) {
      const de = Q.data[he * 4 + 3], we = T.data[he * 4 + 3];
      if (de > we) {
        F = !0;
        break;
      }
    }
    return F ? (k.size > 64 && k.clear(), k.set(ne, ve.canvas), ve.canvas) : (k.set(ne, p), p);
  }
  function E(p, m = null) {
    const x = O((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), I = (p == null ? void 0 : p.bbox) || null;
    if (!x || !I) return null;
    const $ = pe(p, m);
    if (!$ || !($.complete || $.width || $.naturalWidth)) return null;
    const { width: Y, height: se } = oe(), V = (p == null ? void 0 : p.transform) || {}, ne = [
      x,
      Y,
      se,
      I.u0,
      I.v0,
      I.u1,
      I.v1,
      V.du,
      V.dv,
      V.rot_deg,
      V.scale,
      y()
    ].join(":"), k = i.get(ne);
    if (k) return k;
    i.size > 64 && i.clear();
    const U = Gt({ label: "editor.raster-erp" });
    U.width = Y, U.height = se;
    const ie = U.getContext("2d");
    return ie ? (j0(ie, $, p, Y, se), i.set(ne, U), U) : null;
  }
  async function w(p, m) {
    const x = await new Promise((V) => p.toBlob(V, "image/png")), I = new FormData();
    I.append("image", x, m), I.append("type", "input"), I.append("subfolder", "panorama_stickers"), I.append("overwrite", "1");
    const $ = await t.fetchApi("/upload/image", { method: "POST", body: I });
    if (!$ || $.status !== 200) throw new Error(`upload failed (${$ == null ? void 0 : $.status})`);
    const Y = await $.json(), se = String((Y == null ? void 0 : Y.name) || "").trim();
    if (!se) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: se,
      subfolder: String((Y == null ? void 0 : Y.subfolder) || "panorama_stickers"),
      storage: String((Y == null ? void 0 : Y.type) || "input")
    };
  }
  let M = null, le = !1;
  function ye() {
    const p = Ip(a.painting), { width: m, height: x } = f();
    return HS(a.painting_layer, { paintCount: p.totalPaintCount, maskCount: p.totalMaskCount, width: m, height: x, nodeId: String(r.id ?? "0") });
  }
  function D() {
    const p = String(r.id ?? "0"), m = Es.get(p);
    if (le && m) return m;
    const x = (async () => {
      var Y, se, V, ne, k, U, ie, ke, Me, Ae, xe, ve;
      const I = v(), $ = Ip(a.painting);
      if ($.totalPaintCount <= 0 && $.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, M = I, l());
        return;
      }
      if (M !== I && !le) {
        le = !0;
        try {
          Z();
          const Q = g(!1), T = ((se = (Y = n.paintEngine) == null ? void 0 : Y.getErpTarget) == null ? void 0 : se.call(Y, Q)) || null, F = ((V = T == null ? void 0 : T.displayPaint) == null ? void 0 : V.canvas) || null, J = ((ne = T == null ? void 0 : T.committedMask) == null ? void 0 : ne.canvas) || null, L = Math.max(1, Number(((k = T == null ? void 0 : T.descriptor) == null ? void 0 : k.width) || (F == null ? void 0 : F.width) || (J == null ? void 0 : J.width) || 2048)), X = Math.max(1, Number(((U = T == null ? void 0 : T.descriptor) == null ? void 0 : U.height) || (F == null ? void 0 : F.height) || (J == null ? void 0 : J.height) || 1024));
          (!F && $.totalPaintCount > 0 || !J && $.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((ie = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ie.width) || 0) !== L || Number(((ke = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ke.height) || 0) !== X) && (n._paintLayerSyncBlankSurface = c(L, X)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, L, X));
          const j = F || $.totalPaintCount > 0 && ((Me = n._paintLayerSyncBlankSurface) == null ? void 0 : Me.canvas) || null, S = J || $.totalMaskCount > 0 && ((Ae = n._paintLayerSyncBlankSurface) == null ? void 0 : Ae.canvas) || null;
          if (!j && !S) return;
          let z = null, re = null;
          const he = [];
          if ($.totalPaintCount > 0) {
            z = await w(j, `pano_paint_${p}.png`);
            for (const de of Q) {
              const we = String(de || "").trim();
              if (!we) continue;
              const Ie = ((ve = (xe = n.paintEngine) == null ? void 0 : xe.getGroupDisplayCanvas) == null ? void 0 : ve.call(xe, we)) || null;
              if (!Ie) continue;
              const De = we.replace(/[^a-zA-Z0-9_-]+/g, "_"), ze = await w(Ie, `pano_group_${p}_${De}.png`);
              ze && he.push({
                id: we,
                actionGroupId: we,
                image: ze
              });
            }
          }
          $.totalMaskCount > 0 && (re = await w(S, `pano_mask_${p}.png`)), I === v() && (a.painting_layer = {
            paint: z,
            mask: re,
            groups: he,
            revision: I
          }, M = I, l());
        } catch (Q) {
          throw Q;
        } finally {
          le = !1;
        }
      }
    })();
    return Es.set(p, x), x.finally(() => {
      Es.get(p) === x && Es.delete(p);
    }), x;
  }
  function b() {
    const p = _(!0).filter(($) => $.type === "strokeGroup").map(($) => ({ actionGroupId: $.actionGroupId, z_index: $.z_index })), m = n.paintEngine, x = h(), I = C();
    return zu({ ...a, painting: { ...a.painting, groups: p } }, {
      group: ($) => {
        const Y = m == null ? void 0 : m.getGroupDisplayCanvas($);
        return Y && { media: Y, revision: `${x}:${$}` };
      },
      raster: ($) => {
        const Y = E($, () => q());
        if (!Y) return null;
        const se = $.transform || {};
        return {
          media: A(Y, { item: $ }, I),
          revision: [
            v(),
            (I == null ? void 0 : I.key) || "",
            $.id,
            Number(se.du || 0).toFixed(6),
            Number(se.dv || 0).toFixed(6),
            Number(se.rot_deg || 0).toFixed(3),
            Number(se.scale || 1).toFixed(4)
          ].join(":")
        };
      },
      mask: () => Wm(m)
    });
  }
  function K() {
    a.painting_layer !== null && (a.painting_layer = null), M = "";
  }
  return {
    connect(p) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: h,
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: v,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: H,
        inverseTransformErpPointAround: W,
        parseRasterObjectSelectionId: O,
        processFreehandPoints: P,
        rasterizeStrokeToSurface: R,
        rebuildPaintEngineIfNeeded: Z,
        requestDraw: q,
        screenPosToErpPoint: ae,
        shortestWrappedDelta: Se
      } = p);
    },
    getSharedLivePaintSurface: B,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: ge,
    hitRasterObjectAt: me,
    invalidateLivePaintPreviewCaches: G,
    buildRasterObjectEditCanvas: E,
    needsPaintingLayerSync: ye,
    syncPaintingLayerAsync: D,
    invalidatePaintingLayerState: K,
    buildEditorViewPaintLayers: b
  };
}
function cC(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, s, a;
  function l(E) {
    return !E || typeof E != "object" ? { x: 0, y: 0 } : { x: Number((E == null ? void 0 : E.u) || 0), y: Number((E == null ? void 0 : E.v) || 0) };
  }
  function c(E, w, M, le = {}) {
    return { ...{
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: f(E, "widthScale", 1),
      pressureLike: f(E, "pressureLike", 1)
    }, ...le, u: w, v: M };
  }
  function d(E, w = !1) {
    return w ? 12e-4 : 18e-4;
  }
  function u(E, w, M = !1) {
    if (!Array.isArray(E) || !E.length) return [];
    const le = String((w == null ? void 0 : w.kind) || "") === "ERP_GLOBAL", ye = /* @__PURE__ */ new WeakMap();
    if (le) {
      let V = null;
      E.forEach((ne) => {
        const k = Number((ne == null ? void 0 : ne.u) || 0), U = Number((ne == null ? void 0 : ne.v) || 0), ie = (k % 1 + 1) % 1, ke = V == null ? ie : V + a(ie, (V % 1 + 1) % 1);
        ye.set(ne, { x: ke, y: U }), V = ke;
      });
    }
    const D = (V) => !V || typeof V != "object" ? { x: 0, y: 0 } : ye.get(V) || l(V), b = (V, ne, k, U = {}) => {
      const ie = le ? (Number(ne) % 1 + 1) % 1 : Number(ne), ke = c(V, ie, k, U);
      return ye.set(ke, { x: Number(ne), y: Number(k) }), ke;
    }, K = (V, ne, k) => {
      const U = D(V), ie = D(ne);
      return b(V, Nn(U.x, ie.x, k), Nn(U.y, ie.y, k), {
        t: Nn(Number((V == null ? void 0 : V.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), k),
        widthScale: Nn(f(V, "widthScale", 1), f(ne, "widthScale", 1), k),
        pressureLike: Nn(f(V, "pressureLike", 1), f(ne, "pressureLike", 1), k)
      });
    };
    if (E.length === 1) {
      const V = D(E[0]);
      return [b(E[0], V.x, V.y)];
    }
    const p = d(w, M), m = (V, ne) => {
      const k = [0];
      for (let Q = 1; Q < V.length; Q += 1) {
        const T = D(V[Q - 1]), F = D(V[Q]);
        k.push(k[Q - 1] + Math.hypot(F.x - T.x, F.y - T.y));
      }
      const U = k[k.length - 1] || 0;
      if (U <= 1e-8) {
        const Q = V[0], T = D(Q);
        return [b(Q, T.x, T.y)];
      }
      const ie = [];
      let ke = 0;
      for (let Q = 0; Q <= U + 1e-9; Q += ne) {
        for (; ke < k.length - 2 && k[ke + 1] < Q; ) ke += 1;
        const T = k[ke], F = k[ke + 1], J = Math.max(1e-8, F - T);
        ie.push(K(V[ke], V[ke + 1], Te((Q - T) / J, 0, 1)));
      }
      const Me = V[V.length - 1], Ae = D(Me), xe = ie[ie.length - 1], ve = xe ? D(xe) : null;
      return (!ve || Math.hypot(ve.x - Ae.x, ve.y - Ae.y) > ne * 0.35) && ie.push(b(Me, Ae.x, Ae.y)), ie;
    }, x = (V) => {
      if (!Array.isArray(V) || V.length < 3) return V ? V.slice() : [];
      const ne = D(V[0]), k = [b(V[0], ne.x, ne.y)];
      for (let ke = 0; ke < V.length - 1; ke += 1) {
        const Me = V[ke], Ae = V[ke + 1], xe = D(Me), ve = D(Ae), Q = b(
          Me,
          xe.x * 0.75 + ve.x * 0.25,
          xe.y * 0.75 + ve.y * 0.25,
          {
            t: Number(Me.t || 0) * 0.75 + Number(Ae.t || 0) * 0.25,
            widthScale: f(Me, "widthScale", 1) * 0.75 + f(Ae, "widthScale", 1) * 0.25,
            pressureLike: f(Me, "pressureLike", 1) * 0.75 + f(Ae, "pressureLike", 1) * 0.25
          }
        ), T = b(
          Me,
          xe.x * 0.25 + ve.x * 0.75,
          xe.y * 0.25 + ve.y * 0.75,
          {
            t: Number(Me.t || 0) * 0.25 + Number(Ae.t || 0) * 0.75,
            widthScale: f(Me, "widthScale", 1) * 0.25 + f(Ae, "widthScale", 1) * 0.75,
            pressureLike: f(Me, "pressureLike", 1) * 0.25 + f(Ae, "pressureLike", 1) * 0.75
          }
        );
        k.push(Q, T);
      }
      const U = V[V.length - 1], ie = D(U);
      return k.push(b(U, ie.x, ie.y)), k;
    }, I = m(E, p);
    if (I.length < 3) return I;
    const $ = M ? 2 : 1;
    let Y = I.slice();
    for (let V = 0; V < $; V += 1) Y = x(Y);
    return m(Y, Math.max(p * 0.75, 55e-5));
  }
  function f(E, w, M = 1) {
    const le = Number(E == null ? void 0 : E[w]);
    return Number.isFinite(le) ? Math.max(0, le) : M;
  }
  function h(E) {
    const w = Number(E == null ? void 0 : E.radiusValue);
    if (Number.isFinite(w) && w > 0) {
      const M = String((E == null ? void 0 : E.radiusModel) || "").trim() || "erp_uv_norm";
      return M === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((E == null ? void 0 : E.size) || 10) * 0.5 / 2048)
      } : {
        model: M,
        value: w
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((E == null ? void 0 : E.size) || 10) * 0.5 / 2048)
    };
  }
  function _(E, w, M = {}) {
    const le = Gt({ label: "editor.raster-surface" });
    le.width = Math.max(1, Math.round(E)), le.height = Math.max(1, Math.round(w));
    const ye = le.getContext("2d", M.readback ? { willReadFrequently: !0 } : void 0);
    return ye && (ye.clearRect(0, 0, le.width, le.height), ye.imageSmoothingEnabled = !0), { canvas: le, ctx: ye };
  }
  function g() {
    const E = Se();
    return `${String(t.paintStrokeRevision)}:${E.width}x${E.height}`;
  }
  function v() {
    const E = Se();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${E.width}x${E.height}`;
  }
  function y() {
    const E = i(), w = v();
    return E ? `${w}:${E}` : w;
  }
  function H() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function W() {
    t.paintCompositeRevision += 1;
  }
  function O() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function P() {
    var E, w;
    t.paintEngineRevisionKey = null, (w = (E = t.paintEngine) == null ? void 0 : E.rebuildCommitted) == null || w.call(E, r), t.paintEngineRevisionKey = g();
  }
  function R() {
    O(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function Z({ rebuildPaintEngine: E = !1 } = {}) {
    o(), H(), R(), E && P();
  }
  function q() {
    o(), W(), R();
  }
  function ae() {
    var le;
    const E = Se(), w = `${E.width}x${E.height}`;
    t.paintEngineDescriptorKey !== w && (t.paintEngine = tl(E), t.paintEngineDescriptorKey = w, t.paintEngineRevisionKey = "");
    const M = g();
    t.paintEngineRevisionKey !== M && (t.paintEngineRevisionKey = M, (le = t.paintEngine) == null || le.rebuildCommitted(r));
  }
  function Se() {
    const E = Math.max(1, s(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: E,
      height: Math.max(1, Math.round(E * 0.5))
    };
  }
  function ge() {
    return Se();
  }
  function B(E, w, M, le, ye = null) {
    const D = h(E), b = f(w, "widthScale", 1) * f(w, "pressureLike", 1);
    return D.model === "erp_uv_norm" ? Math.max(0.5, D.value * M * b) : D.model === "world_angle" ? ye ? Math.max(0.5, D.value / Math.max(1e-6, Number(ye.hFOV_deg || 90) * ir) * M * b) : Math.max(0.5, D.value / (2 * Math.PI) * M * b) : Math.max(0.5, Number((E == null ? void 0 : E.size) || 10) * 0.5 * b);
  }
  function _e(E, w, M = {}) {
    const le = String((w == null ? void 0 : w.layerKind) || "paint"), ye = String((w == null ? void 0 : w.toolKind) || "pen"), D = M.preview === !0, b = D ? 0.78 : 1;
    if (E.globalAlpha = ye === "marker" ? 0.7 * b : 1, le === "mask") {
      E.fillStyle = D ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ye === "eraser") {
      E.globalCompositeOperation = "destination-out", E.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const K = String((w == null ? void 0 : w.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (w == null ? void 0 : w.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, p = D ? Math.max(0.28, Number(K.a ?? 1) * 0.88) : Math.max(0.12, Number(K.a ?? 1));
    E.fillStyle = `rgba(${Math.round(Number(K.r || 0) * 255)}, ${Math.round(Number(K.g || 0) * 255)}, ${Math.round(Number(K.b || 0) * 255)}, ${p})`;
  }
  function pe(E, w, M) {
    const le = Math.max(0.5, Math.min(M, Number((w == null ? void 0 : w.radiusPx) || 0.5)));
    !Number.isFinite(w == null ? void 0 : w.x) || !Number.isFinite(w == null ? void 0 : w.y) || !Number.isFinite(le) || (E.beginPath(), E.arc(Number(w.x || 0), Number(w.y || 0), le, 0, Math.PI * 2), E.fill());
  }
  function fe(E, w, M, le, ye = {}) {
    if (!E || !Array.isArray(w) || !w.length) return;
    const D = Math.max(le.w, le.h) * 0.25;
    E.save(), _e(E, M, ye);
    const b = (K) => pe(E, K, D);
    if (w.length === 1) {
      b(w[0]), E.restore();
      return;
    }
    for (let K = 0; K < w.length - 1; K += 1) {
      const p = w[K], m = w[K + 1];
      if (!p || !m) continue;
      const x = Number(p.x || 0), I = Number(p.y || 0), $ = Number(m.x || 0), Y = Number(m.y || 0), se = Math.max(0.5, Math.min(D, Number(p.radiusPx || 0.5))), V = Math.max(0.5, Math.min(D, Number(m.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(I) || !Number.isFinite($) || !Number.isFinite(Y) || !Number.isFinite(se) || !Number.isFinite(V)) continue;
      const ne = $ - x, k = Y - I, U = Math.hypot(ne, k);
      if (!Number.isFinite(U) || U < 1e-6) {
        b(p);
        continue;
      }
      if (U > Math.max(le.w, le.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(se, V)), ke = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Me = Math.max(1, Math.ceil(U / ke));
      for (let Ae = 0; Ae <= Me; Ae += 1) {
        const xe = Ae / Me;
        b({
          x: Nn(x, $, xe),
          y: Nn(I, Y, xe),
          radiusPx: Nn(se, V, xe)
        });
      }
    }
    b(w[w.length - 1]), E.restore();
  }
  function ee(E, w, M, le) {
    fe(E, w, M, le, { preview: !1 });
  }
  function me(E, w, M, le, ye) {
    var K, p, m, x;
    if (!E || !Array.isArray(w) || w.length < 3) return;
    const D = "u", b = "v";
    if (E.save(), String((M == null ? void 0 : M.layerKind) || "") === "mask")
      E.fillStyle = "rgba(255,255,255,1)";
    else if (String((M == null ? void 0 : M.toolKind) || "") === "eraser")
      E.globalCompositeOperation = "destination-out", E.fillStyle = "rgba(0,0,0,1)";
    else {
      const I = (M == null ? void 0 : M.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      E.fillStyle = `rgba(${Math.round(Number(I.r || 0) * 255)}, ${Math.round(Number(I.g || 0) * 255)}, ${Math.round(Number(I.b || 0) * 255)}, ${Number(I.a ?? 1)})`;
    }
    E.beginPath(), E.moveTo(Number(((K = w[0]) == null ? void 0 : K[D]) || 0) * le.w, Number(((p = w[0]) == null ? void 0 : p[b]) || 0) * le.h);
    for (let I = 1; I < w.length; I += 1)
      E.lineTo(Number(((m = w[I]) == null ? void 0 : m[D]) || 0) * le.w, Number(((x = w[I]) == null ? void 0 : x[b]) || 0) * le.h);
    E.closePath(), E.fill(), E.restore();
  }
  function oe(E) {
    const w = (E == null ? void 0 : E.geometry) || null;
    return w ? String(w.geometryKind || "") === "lasso_fill" ? Array.isArray(w.points) ? w.points : [] : Array.isArray(w.processedPoints) && w.processedPoints.length ? w.processedPoints : Array.isArray(w.rawPoints) && w.rawPoints.length ? w.rawPoints : Array.isArray(w.points) ? w.points : [] : [];
  }
  function C(E, w) {
    const M = oe(E);
    return !Array.isArray(M) || !M.length ? [] : M.map((le) => ({
      x: Number((le == null ? void 0 : le.u) || 0) * Number((w == null ? void 0 : w.w) || 1),
      y: Number((le == null ? void 0 : le.v) || 0) * Number((w == null ? void 0 : w.h) || 1),
      radiusPx: B(E, le, Number((w == null ? void 0 : w.w) || 1), Number((w == null ? void 0 : w.h) || 1))
    }));
  }
  function G(E, w, M = null) {
    var K, p, m, x;
    if (!(E != null && E.ctx) || !w) return !1;
    const le = M || { w: Number(((K = E.canvas) == null ? void 0 : K.width) || 0), h: Number(((p = E.canvas) == null ? void 0 : p.height) || 0) }, ye = String((w == null ? void 0 : w.toolKind) || "") === "eraser" ? {
      ...w,
      layerKind: "mask",
      toolKind: String(((m = w == null ? void 0 : w.geometry) == null ? void 0 : m.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : w;
    if (String(((x = w == null ? void 0 : w.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return me(E.ctx, oe(ye), ye, le), !0;
    const b = C(ye, le);
    return b.length ? (ee(E.ctx, b, ye, le), !0) : !1;
  }
  function N(E, w, M, le = 8) {
    const ye = new Uint8Array(w * M), D = [], b = new Int32Array(w * M), K = new Int32Array(w * M);
    for (let p = 0; p < M; p += 1)
      for (let m = 0; m < w; m += 1) {
        const x = p * w + m;
        if (ye[x] || E[x] <= le) continue;
        let I = 0, $ = 0;
        b[$] = m, K[$] = p, $ += 1, ye[x] = 1;
        const Y = [];
        let se = m, V = p, ne = m, k = p;
        for (; I < $; ) {
          const U = b[I], ie = K[I];
          I += 1, Y.push({ x: U, y: ie }), U < se && (se = U), ie < V && (V = ie), U > ne && (ne = U), ie > k && (k = ie);
          const ke = [
            [(U - 1 + w) % w, ie],
            [(U + 1) % w, ie],
            [U, ie - 1],
            [U, ie + 1]
          ];
          for (const [Me, Ae] of ke) {
            if (Ae < 0 || Ae >= M) continue;
            const xe = Ae * w + Me;
            ye[xe] || E[xe] <= le || (ye[xe] = 1, b[$] = Me, K[$] = Ae, $ += 1);
          }
        }
        D.push({ pixels: Y, minX: se, minY: V, maxX: ne, maxY: k });
      }
    return D;
  }
  function ue(E, w) {
    const M = [...new Set((Array.isArray(E == null ? void 0 : E.pixels) ? E.pixels : []).map((p) => Number((p == null ? void 0 : p.x) || 0)).filter((p) => Number.isFinite(p)))].sort((p, m) => p - m);
    if (!M.length) return null;
    if (M.length === 1)
      return { startX: M[0], widthPx: 1 };
    let le = -1, ye = 0;
    for (let p = 0; p < M.length; p += 1) {
      const m = M[p], I = (p === M.length - 1 ? M[0] + w : M[p + 1]) - m - 1;
      I > le && (le = I, ye = p);
    }
    const D = (M[(ye + 1) % M.length] + w) % w;
    let b = 1 / 0, K = -1 / 0;
    for (const p of M) {
      const m = (p - D + w) % w;
      b = Math.min(b, m), K = Math.max(K, m);
    }
    return {
      startX: D,
      widthPx: Math.max(1, K - b + 1)
    };
  }
  function A(E, w, M = {}) {
    var m;
    const le = Number((E == null ? void 0 : E.width) || 0), ye = Number((E == null ? void 0 : E.height) || 0), D = (m = E == null ? void 0 : E.getContext) == null ? void 0 : m.call(E, "2d");
    if (!D || le < 1 || ye < 1) return [];
    const b = D.getImageData(0, 0, le, ye), K = new Uint8Array(le * ye);
    for (let x = 0; x < K.length; x += 1) K[x] = b.data[x * 4 + 3];
    return N(K, le, ye, 8).map((x, I) => {
      const $ = ue(x, le);
      if (!$) return null;
      const Y = Number($.widthPx || 0), se = x.maxY - x.minY + 1, V = Number($.startX || 0), ne = Gt({ label: "editor.lasso-fill" });
      ne.width = Y, ne.height = se;
      const k = ne.getContext("2d");
      if (!k) return null;
      const U = k.createImageData(Y, se);
      return x.pixels.forEach(({ x: ie, y: ke }) => {
        const Me = (ke * le + ie) * 4, Ae = (Number(ie || 0) - V + le) % le, xe = ((ke - x.minY) * Y + Ae) * 4;
        U.data[xe + 0] = b.data[Me + 0], U.data[xe + 1] = b.data[Me + 1], U.data[xe + 2] = b.data[Me + 2], U.data[xe + 3] = b.data[Me + 3];
      }), k.putImageData(U, 0, 0), {
        id: Ii("raster"),
        type: "raster_frozen",
        layerKind: w === "mask" ? "mask" : "paint",
        z_index: Number((M == null ? void 0 : M.z_index) || 0) + I * 1e-3,
        locked: (M == null ? void 0 : M.locked) === !0,
        bbox: {
          u0: 0,
          v0: x.minY / ye,
          u1: Y / le,
          v1: (x.maxY + 1) / ye
        },
        rasterDataUrl: ne.toDataURL("image/png"),
        transform: {
          du: V / le,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(E) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = E);
    },
    processFreehandPoints: u,
    createRasterSurface: _,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: v,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: P,
    markObjectVisualsDirty: R,
    markPaintStrokeVisualsDirty: Z,
    markPaintCompositeVisualsDirty: q,
    rebuildPaintEngineIfNeeded: ae,
    getDesiredPaintTargetDescriptor: Se,
    getActivePaintTargetDescriptor: ge,
    rasterizeStrokeToSurface: G,
    createRasterFrozenObjectsFromCanvas: A
  };
}
function uC(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h, _, g, v = { stored: null, shown: null, handoff: null, fps: null };
  function y(C, G = null) {
    var N;
    if (C && typeof C == "object" && !Array.isArray(C)) return C;
    if (Array.isArray(C) && C.length > 0) {
      const ue = C[0];
      if (ue && typeof ue == "object" && !Array.isArray(ue)) return ue;
    }
    if (Array.isArray(G) && G.length > 0) {
      const ue = (N = G[0]) == null ? void 0 : N.parsed_state;
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
  function H(C, G, N) {
    const ue = Math.max(1, Number(G || 1)), A = Math.max(1, Number(N || 1)), E = Te(Number(C || 30), 0.1, 179) * ir, w = 2 * Math.atan(Math.tan(E * 0.5) * (A / ue));
    return Te(w * di, 0.1, 179);
  }
  function W(C) {
    const G = String(C || "").trim();
    if (!G) return null;
    try {
      const N = JSON.parse(G);
      if (!N || typeof N != "object" || String(N.kind || "") !== "pano_sticker_state") return null;
      const ue = N.version;
      let A = null;
      if (typeof ue == "number" && Number.isInteger(ue) ? A = ue : typeof ue == "string" && /^\d+$/.test(ue) && (A = Number.parseInt(ue, 10)), A !== 1) return null;
      const E = N.pose;
      if (!E || typeof E != "object") return null;
      const w = Number(E.yaw_deg), M = Number(E.pitch_deg), le = Number(E.roll_deg), ye = Number(E.hFOV_deg);
      if (![w, M, le, ye].every((p) => Number.isFinite(p))) return null;
      let D = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(D, -0) && (D = 0);
      const b = {
        yaw_deg: D,
        pitch_deg: Te(M, -89.9, 89.9),
        roll_deg: le,
        hFOV_deg: Te(ye, 0.1, 179)
      }, K = Number(N.source_aspect);
      return Number.isFinite(K) && K > 0 && (b.source_aspect = K), b;
    } catch {
      return null;
    }
  }
  function O(C) {
    const G = Number(C == null ? void 0 : C.yaw_deg), N = Number(C == null ? void 0 : C.pitch_deg), ue = Number((C == null ? void 0 : C.roll_deg) ?? (C == null ? void 0 : C.rot_deg)), A = Number(C == null ? void 0 : C.hFOV_deg), E = hi(C);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(G) ? G : 0),
        pitch_deg: Te(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Te(Number.isFinite(A) ? A : 90, 0.1, 179)
      },
      source_aspect: E
    };
  }
  function P(C) {
    var M;
    if (!C || typeof C != "object") return O(null);
    const G = Number(C == null ? void 0 : C.yaw_deg), N = Number(C == null ? void 0 : C.pitch_deg), ue = Number((C == null ? void 0 : C.roll_deg) ?? (C == null ? void 0 : C.rot_deg)), A = Number(C == null ? void 0 : C.hFOV_deg), E = Number(C == null ? void 0 : C.vFOV_deg);
    let w = 1;
    if (Number.isFinite(A) && Number.isFinite(E)) {
      const le = Te(A, 0.1, 179) * ir, ye = Te(E, 0.1, 179) * ir, D = Math.tan(ye * 0.5);
      if (Math.abs(D) > 1e-6) {
        const b = Math.tan(le * 0.5) / D;
        Number.isFinite(b) && b > 0 && (w = b);
      }
    }
    if (C != null && C.asset_id && ((M = o == null ? void 0 : o.assets) != null && M[C.asset_id])) {
      const le = o.assets[C.asset_id], ye = Number((le == null ? void 0 : le.w) || 0), D = Number((le == null ? void 0 : le.h) || 0);
      ye > 0 && D > 0 && (w = ye / D);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(G) ? G : 0),
        pitch_deg: Te(Number.isFinite(N) ? N : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ue) ? ue : 0,
        hFOV_deg: Te(Number.isFinite(A) ? A : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function R(C) {
    return t.linkedValue(r, C);
  }
  function Z(C, G, N) {
    const ue = C && typeof C == "object" ? {
      yaw_deg: Number(C.yaw_deg || 0),
      pitch_deg: Number(C.pitch_deg || 0),
      roll_deg: Number(C.rot_deg ?? C.roll_deg ?? 0),
      hFOV_deg: Number(C.hFOV_deg || 30)
    } : W(G);
    if (ue) {
      const w = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || ue.source_aspect || 1), M = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
      return {
        yaw_deg: Number(ue.yaw_deg || 0),
        pitch_deg: Number(ue.pitch_deg || 0),
        hFOV_deg: Number(ue.hFOV_deg || 30),
        vFOV_deg: H(ue.hFOV_deg, w, M),
        rot_deg: Number(ue.roll_deg || 0)
      };
    }
    const A = Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 1), E = Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: H(30, A, E),
      rot_deg: 0
    };
  }
  function q() {
    const C = St(r, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return zg(o, Vg(r, { pose: C, handoff: ae() }));
  }
  function ae() {
    return St(r, "sticker-handoff") ? Ww(r, c("pano_sticker_handoff")) : null;
  }
  function Se() {
    return s === "stickers" && !i && r.__panoSceneStateV2 === !0;
  }
  function ge(C, G, N) {
    return structuredClone(Xi(an({ version: 2, timeline: { fps: G }, stickers: [C] }), N).stickers[0]);
  }
  function B({ record: C = !0, restored: G = !1 } = {}) {
    var le;
    if (!Se()) return !1;
    const N = o.stickers.find((ye) => {
      var D;
      return ((D = ye.source) == null ? void 0 : D.kind) === "port";
    });
    if (!N)
      return v = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: ue } = o.timeline;
    let A;
    if (G || !v.handoff || ((le = v.stored) == null ? void 0 : le.id) !== N.id)
      A = structuredClone(N);
    else {
      const ye = (D) => v.fps === ue ? D : ge(D, v.fps, ue);
      C && $w(N, ye(v.shown)), A = zw(N, ye(v.stored));
    }
    const E = ae(), w = E ? Ju(o, A, E) : structuredClone(A), M = JSON.stringify(w) !== JSON.stringify(N);
    if (M) {
      for (const ye of Object.keys(N)) delete N[ye];
      Object.assign(N, w);
    }
    return v = { stored: A, shown: structuredClone(w), handoff: E, fps: ue }, M;
  }
  function _e() {
    return v.handoff ? { ...o, stickers: o.stickers.map((C) => {
      var G;
      return ((G = C.source) == null ? void 0 : G.kind) === "port" ? v.stored : C;
    }) } : o;
  }
  function pe(C) {
    var ue;
    if (!Se() || ((ue = C == null ? void 0 : C.source) == null ? void 0 : ue.kind) !== "port") return null;
    const { handoff: G } = v, N = !!G && G.placement === C.placement;
    return Wi[C.placement].map((A) => ({ name: A, overridden: N && C.handoff_overrides.includes(A) }));
  }
  function fe(C) {
    B();
    const G = o.stickers.find((N) => {
      var ue;
      return ((ue = N.source) == null ? void 0 : ue.kind) === "port";
    });
    !G || G.locked || !v.handoff || !jw(o, G, v.handoff, C) || (v.shown = structuredClone(G), v.stored[C] = structuredClone(G[C]), f(), a(), u(), g(), h());
  }
  function ee() {
    var M;
    const C = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((le) => String((le == null ? void 0 : le.name) || "") === "sticker_image") : -1, G = C >= 0 ? ((M = r.getInputLink(C)) == null ? void 0 : M.id) ?? null : null, N = l(() => {
      Tr(r, "image-loaded");
    }), ue = y(c("pano_sticker_input_pose"), null), A = R("sticker_state"), E = t.externalStateHash(r, A), w = G == null ? null : Z(ue, A, N);
    return Rg(o, {
      connected: G != null,
      linkId: G,
      stateHash: E,
      pose: w,
      imageWidth: Number((N == null ? void 0 : N.naturalWidth) || (N == null ? void 0 : N.width) || 0),
      imageHeight: Number((N == null ? void 0 : N.naturalHeight) || (N == null ? void 0 : N.height) || 0)
    });
  }
  function me(C = "sync") {
    if (s !== "stickers" || i) return;
    const G = r.__panoSceneStateV2 ? q() : ee();
    if (G.changed) {
      const N = o.stickers.find(d);
      o.stickers = G.state.stickers, o.active = G.state.active, N && n.selectedId === N.id && !o.stickers.some((ue) => ue.id === N.id) && (n.selectedId = null, n.selectedIds = []), a(), g(), _();
    } else B({ restored: C === "open" }) ? (u(), g()) : C === "image-loaded" && g();
    h();
  }
  function oe() {
    const C = Array.isArray(o.stickers) ? o.stickers : [], G = [];
    for (const N of C)
      d(N) && (N.visible = !1, G.push(N));
    return G;
  }
  return {
    connect(C) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: h,
        updateSelectionMenu: _,
        updateSidePanel: g
      } = C);
    },
    computeStickerVFov: H,
    buildCanonicalCutoutStickerState: O,
    buildCanonicalSelectedStickerState: P,
    reconcileExternalStickerFromInputs: me,
    collectExternalStickersForClearAll: oe,
    syncPortHandoff: B,
    storedEditorState: _e,
    portHandoffLanes: pe,
    revertPortHandoffLane: fe
  };
}
function Ai(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function dC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function fC({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: a,
  isActiveLassoTool: l
}) {
  var W, O;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: c,
    activePane: c ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: c ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (P, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((W = t.find((P) => i(e.paintColor, P.color))) == null ? void 0 : W.id) || "", f = !u, h = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((O = e.customPaintColor) == null ? void 0 : O.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), v = e.brushSizes[g] ?? 10, y = l(), H = Array.from({ length: 8 }, (P, R) => e.customPaintHistory[R] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...s(h.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: H.map((P, R) => ({
      index: R,
      color: P ? { cssColor: r(P, 1) } : null
    })),
    sizeValue: v,
    sizeText: String(v),
    sizeFill: `${Math.max(0, Math.min(100, (v - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function pC({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const hC = {
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
function mC(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = hC[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function ic(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function gC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
  const o = !r && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: o ? He.eye : He.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function B0({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function yC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function bC(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const Bi = "erp", vC = ["1:1", "4:3", "3:2", "16:9"];
function Y0(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...vC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Bi, label: Number(n) === 180 ? "180°" : "360°", active: e === Bi }] : []
  ];
}
const SC = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, _C = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, wC = { ...SC, opacity: "Opacity" };
function yd(e) {
  return `Upstream · ${e}`;
}
function kC({ layer: e, editable: t, locked: n, readOnly: r, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !r && t && !n && !!o, c = (d) => !r && !n && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${yd(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: _C[i].map((d) => ({
      name: d,
      label: wC[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function xC({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
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
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: mC(s),
    notes: a,
    upstream: d,
    paramsDisabled: !r,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function MC({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
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
  cameraShot: _ = !1,
  coverage: g = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: v = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (n.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s }
    ];
  else if (r === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    ];
  else if (r === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: h.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: h.replace_image })), d(t)) {
      const H = f(), W = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: H ? "Back to initial position" : "Already at initial position",
        icon: h.back_initial,
        disabled: !H
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? h.eye : h.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed }), (!d(t) || v) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: h.aspect,
        open: !!c,
        choices: Y0(l, { erp: _, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: h.rotate_90, disabled: l === Bi }
    ], _ ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    );
  return v && (y = y.map((H) => ({
    ...H,
    disabled: H.key === "toggle-lock" ? !v.editable : H.key === "delete" ? !v.editable || !!H.disabled : !0
  }))), q0(i.corners, y);
}
const Op = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function PC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = r ? Op.filter((s) => s.cameraTip) : Op;
  return q0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: r ? c : l, pressed: s === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...r ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: He.delete }] : []
  ]);
}
function NC(e, t, n, r, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), f = Math.max(14, i - n - 14), h = d + 18, _ = c - 18 - n;
  let g;
  return h <= f ? g = Math.max(h, 14) : _ >= 14 ? g = Math.min(_, f) : g = Math.min(Math.max(h, 14), f), { left: u, top: g };
}
function q0(e, t) {
  const n = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((c) => c.x), i = n.map((c) => c.y), o = Math.min(...r), s = Math.max(...r), a = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: a, maxY: l }
  };
}
const X0 = "painting", Fo = "background";
function AC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const CC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function IC(e, { span: t, portBarEnd: n = () => null, selection: r, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: h = null, loading3d: _ = /* @__PURE__ */ new Set() }) {
  const g = (H, W, O, P, R, Z, { keyable: q = !0, hideable: ae = !0, origin: Se = null } = {}) => {
    const ge = (B) => (r == null ? void 0 : r.owner) === H && r.lane === B ? r.frames.map((_e) => _e + Z) : [];
    return {
      id: H,
      label: O,
      icon: P,
      clip: R,
      selected: H === i,
      hideable: ae,
      // The background has no eye and always shows.
      visible: W.visible !== !1,
      ...Fp(Se),
      keyable: q,
      open: q && s.has(H),
      keys: _S(W).map((B) => ({ frame: B.frame + Z, full: B.full })),
      selectedFrames: ge(null),
      lanes: (q ? Ji(W) : []).map((B) => ({
        key: `${H}:${B}`,
        lane: B,
        label: CC[B],
        frames: W[B].keyframes.map((_e) => _e.frame + Z),
        selectedFrames: ge(B)
      }))
    };
  }, v = ({ start: H, in: W, duration: O }, P = null) => ({ clip: { start: H, end: O === null ? P : H + O }, offset: H - W }), y = (H, { idOf: W = (R) => R, sceneRow: O, origin: P = null }) => {
    const R = H.stickers.filter((q) => q.placement === "sky").sort((q, ae) => ae.z_index - q.z_index), Z = H.stickers.filter((q) => q.placement === "world");
    return [
      ...[...R, ...Z].map((q) => {
        const { clip: ae, offset: Se } = v(q.clip, n(q)), ge = zm(P ? { ...q, id: q.origin.id } : q), B = q.placement === "world" && (q.source.kind === "port" || oi(q.source) || _.has(q.id));
        return g(q.id, q, ge, B ? He.box : He.image, ae, Se, { origin: P && { ...P, overridden: P.stickerOverridden(q) } });
      }),
      ...AC(H.painting) || !H.painting_visible ? [{
        id: W(X0),
        label: "Paint",
        icon: He.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: H.painting_visible,
        ...Fp(P && { ...P, overridden: P.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...O || ha(H.scene) ? [(() => {
        const { clip: q, offset: ae } = v(H.scene.clip);
        return g(W("scene"), H.scene, "Scene", He.box, q, ae, {
          keyable: !1,
          origin: P && { ...P, overridden: P.sceneOverridden }
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
      ...h ? [(() => {
        const { clip: H, offset: W } = v(e.background.clip, h.end);
        return g(Fo, e.background, "Background", He.unwrap, H, W, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [g("camera", e.camera, "Camera", He.camera, null, 0, { hideable: d })] : [],
      ...y(e, { sceneRow: u })
    ],
    groups: f.map(({ key: H, sceneState: W, editable: O, record: P, scene: R, deleted: Z }) => ({
      key: H,
      label: `${yd(H)}${O ? "" : " · inherited only"}`,
      revert: { disabled: !O || !Jg(P) },
      restore: { label: `Restore deleted (${Z})`, disabled: !O || Z === 0 },
      rows: y(W, {
        idOf: (q) => Dc(H, q),
        sceneRow: R || !W.scene.visible,
        origin: {
          editable: O,
          stickerOverridden: (q) => !!(P != null && P.stickers.some((ae) => ae.id === q.origin.id && ae.placement === q.placement)),
          paintingOverridden: !!P && Object.hasOwn(P, "painting_visible"),
          sceneOverridden: !!P && Object.keys(P.scene).length > 0
        }
      })
    }))
  };
}
function Fp(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function EC(e, t, n, r) {
  const i = MS(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const OC = 4, FC = 0.25, J0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function Z0(e) {
  return Object.hasOwn(J0, e);
}
function Q0(e, t, n) {
  const { forward: r, right: i } = gi(e.yaw_deg, 0), o = [0, 1, 2].map((a) => r[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(n > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * n / s) };
}
function TC() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, n = !1, r = 0;
  function i() {
    e.clear(), t = !1, n = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return Z0(o) ? (e.size || (r = s), e.add(o), !0) : !1;
    },
    // Lets a held key go; false when it was not held.
    release(o) {
      return e.delete(o);
    },
    releaseAll: i,
    // Shift and Alt as a key event has them.
    modifiers(o) {
      t = !!o.shiftKey, n = !!o.altKey;
    },
    get held() {
      return e.size > 0;
    },
    direction() {
      const o = { forward: 0, right: 0, up: 0 };
      for (const s of e) {
        const [a, l] = J0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? OC : 1) * (n ? FC : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - r) / 1e3;
      return r = Math.max(r, o), s;
    }
  };
}
const DC = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), LC = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function RC(e) {
  var r;
  const t = e.viewTransition, n = (t == null ? void 0 : t.to) ?? {
    position: e.viewPosition,
    yaw_deg: e.viewYaw,
    pitch_deg: e.viewPitch,
    hFOV_deg: e.viewFov,
    distance: e.viewDistance
  };
  return {
    mode: e.mode,
    spaceMode: ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e.spaceMode,
    position: [...n.position],
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    hFOV_deg: n.hFOV_deg,
    distance: n.distance,
    moved: t != null && t.end ? t.end.moved : e.viewMoved
  };
}
function Tp(e, t, n) {
  return Number.isFinite(e) && e >= t && e <= n;
}
function VC(e, { frame: t }) {
  if (!e) return null;
  const { mode: n, spaceMode: r, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return DC.has(n) && (n !== "frame" || t) && LC.has(r) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Tp(s, -89.9, 89.9) && Tp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
    mode: n,
    spaceMode: r,
    viewPosition: [...i],
    viewYaw: o,
    viewPitch: s,
    viewFov: a,
    viewDistance: l,
    viewMoved: c
  } : null;
}
const $C = 250, zC = 600, jC = 180, HC = 2;
function GC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function yo(e, t, n) {
  return e + (t - e) * n;
}
function KC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(yu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(n, 1e-6), o = Math.min(1, r / jC + i / HC);
  return Math.round(yo($C, zC, o));
}
function WC(e, t, n) {
  const r = GC(Te(n, 0, 1));
  return {
    position: e.position.map((i, o) => yo(i, t.position[o], r)),
    yaw_deg: Ft(e.yaw_deg + yu(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: yo(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: yo(e.hFOV_deg, t.hFOV_deg, r),
    distance: yo(e.distance, t.distance, r)
  };
}
function UC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(yu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function BC(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return UC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: KC(e, t, r), end: i };
}
function YC(e, t) {
  const n = Te((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: WC(e.from, e.to, n), done: !1 };
}
function Da(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function qC(e, t, n) {
  const r = Da(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function XC(e) {
  const {
    app: t,
    cameraV2: n,
    canvas: r,
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
  let _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B = null;
  function _e(Q, T = null) {
    const F = w();
    q(() => {
      i.viewTransition = BC(F, Q, performance.now(), { scale: x(), end: T });
    }), !i.viewTransition && T && pe(T), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0, Se(), R({ localOnly: !0, reason: ot.VIEW });
  }
  function pe(Q) {
    A(Pc({ ...ue(), moved: Q.moved }, Q.mode, M())), a.backgroundDirty = !0;
  }
  function fe() {
    i.viewTransition && (i.viewTransition = null, Se());
  }
  function ee(Q, T) {
    _e({ ...w(), yaw_deg: Q, pitch_deg: T });
  }
  function me() {
    return !f || ye() && !H();
  }
  function oe() {
    return i.mode === "pano" && C();
  }
  function C() {
    return u && U_({ sceneLinked: l && !!Li(s).scene, files: Z(), stickers: d.stickers });
  }
  function G() {
    return i.spaceMode === "6dof" && oe();
  }
  function N() {
    var Q, T, F;
    return yx((F = (T = (Q = t.ui) == null ? void 0 : Q.settings) == null ? void 0 : T.getSettingValue) == null ? void 0 : F.call(T, p0));
  }
  function ue() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function A(Q) {
    i.spaceMode = Q.mode, i.viewPosition = Q.position, i.viewMoved = Q.moved;
  }
  function E(Q) {
    var F;
    const T = qC(i.spaceMode, i.viewTransition, Q);
    if (T !== "keep") {
      if (T === "return") {
        _e({ ...w(), position: M(), distance: ((F = p()) == null ? void 0 : F.radius) || Gn }, { mode: Q, moved: !1 });
        return;
      }
      fe(), A(Pc({ ...ue(), position: w().position }, Q, M())), a.backgroundDirty = !0, Se(), R({ localOnly: !0, reason: ot.VIEW });
    }
  }
  function w() {
    var F;
    const Q = i.viewMoved ? i.viewDistance : ((F = p()) == null ? void 0 : F.radius) || Gn, T = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: Q };
    return O_(i.spaceMode, T, M());
  }
  function M() {
    return ye() ? K().position : [0, 0, 0];
  }
  function le() {
    return n && d.camera !== null;
  }
  function ye() {
    return le() && d.camera.visible;
  }
  function D() {
    return d.painting_visible !== !1;
  }
  function b(Q) {
    return Q.visible && mi(Q.clip, i.frame);
  }
  function K() {
    return Xa(d.camera, i.frame);
  }
  function p() {
    var T;
    const Q = _();
    return ((T = Q.space ?? Q.content) == null ? void 0 : T.sphere) ?? null;
  }
  function m(Q) {
    i.viewPosition = Q.position, i.viewYaw = Q.yaw_deg, i.viewPitch = Q.pitch_deg, i.viewDistance = Q.distance, i.viewMoved = !0, a.backgroundDirty = !0, R({ localOnly: !0, reason: ot.VIEW });
  }
  function x() {
    var Q;
    return ((Q = p()) == null ? void 0 : Q.radius) || Gn;
  }
  function I() {
    var re;
    const Q = _().space, T = g(), F = i.worldSelectedId || i.selectedId, J = T.stickers.findIndex((he) => he.id === F), L = J < 0 ? ae(F) : null, X = J < 0 ? (re = Q.upstreamItems.find((he) => {
      var de;
      return ((de = he.request) == null ? void 0 : de.id) === F;
    })) == null ? void 0 : re.request : [Q.sticker, ...Q.fileStickers ?? []].find((he) => (he == null ? void 0 : he.id) === F), j = J < 0 && !Et(L) ? null : {
      sticker: L ?? T.stickers[J],
      value: L ? Wn(L, i.frame) : os(T, i.frame).stickers[J],
      plane: [...Q.stickers, ...Q.upstreamStickers].find((he) => he.id === F) ?? null,
      item: (X == null ? void 0 : X.id) === F && X.url ? { kind: X.kind, box: o.sceneBox(X.url) } : null
    }, S = y() ? Ae() : X_(p(), j);
    if (!S) return;
    const z = w();
    i.viewDistance = z.distance, i.viewMoved = !0, _e(H_(z, S, r.width, r.height));
  }
  function $(Q) {
    return o.pickSurface(ve(), Q.x, Q.y, r.width, r.height);
  }
  function Y(Q, T) {
    var F;
    return Nc(Q, T, i.viewMoved ? null : (F = p()) == null ? void 0 : F.center, x());
  }
  function se() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function V(Q, T) {
    const F = performance.now(), J = { x: Q.x, y: Q.y, time: F, key: o.contentRevision(), view: se() };
    if (!Ym(B, J)) {
      const X = $(Q);
      B = { ...J, cost: performance.now() - F, hit: X };
    }
    const L = w();
    m(eg(L, Y(L, B.hit), T, x())), B.view = se(), B.wheelTime = F;
  }
  function ne(Q, T, F) {
    const J = w();
    i.interaction = Q === "orbit" ? { kind: "space_orbit", last: T, pivot: Y(J, $(T)) } : { kind: "space_pan", last: T, depth: Bm(J, x()) }, ge(T), r.setPointerCapture(F);
  }
  function k() {
    return G() || W();
  }
  function U(Q) {
    const T = P.elapsed(Q);
    if (!T || i.viewTransition) return !1;
    const F = P.speed(x()) * T;
    if (W()) return O(P.direction(), F);
    if (!G()) return !1;
    const J = w(), L = Q0(J, P.direction(), F);
    return L === J ? !1 : (i.viewPosition = L.position, i.viewDistance = J.distance, i.viewMoved = !0, !0);
  }
  function ie() {
    Yo(s).view = RC(i);
  }
  function ke() {
    const Q = c && !B0({ hasShot: !!v(), erp: H() }).disabled, T = VC(Yo(s).view, { frame: Q });
    T && Object.assign(i, T);
  }
  function Me(Q) {
    return Q * 0.2;
  }
  function Ae() {
    return { center: K().position, radius: Me(x()) };
  }
  function xe(Q, T) {
    const { yaw_deg: F, pitch_deg: J } = lg(Q.position, T);
    return { ...Q, yaw_deg: F, pitch_deg: J };
  }
  function ve() {
    return Ku(w(), r.width, r.height, p());
  }
  return {
    connect(Q) {
      ({
        editorViewInput: _,
        editorViewSceneState: g,
        getActiveCutoutShot: v,
        isCameraSelected: y,
        isErpCamera: H,
        isFreeFrameView: W,
        moveFrameByKeys: O,
        moveKeys: P,
        requestDraw: R,
        sceneFiles: Z,
        startAnimation: q,
        stickerById: ae,
        syncFloatingViewButtonState: Se,
        updateCursor: ge
      } = Q);
    },
    transitionView: _e,
    applyViewTransitionEnd: pe,
    cancelViewTransition: fe,
    turnViewTo: ee,
    cameraPreviewShown: me,
    isSpaceView: oe,
    hasSpaceContent: C,
    isFreeSpaceView: G,
    viewControls: N,
    spaceModeState: ue,
    applySpaceMode: A,
    setSpaceMode: E,
    spaceViewState: w,
    spaceOrigin: M,
    hasCamera: le,
    cameraShoots: ye,
    paintingShown: D,
    sceneStickerShown: b,
    cutoutCamera: K,
    contentSphere: p,
    setSpaceView: m,
    spaceScale: x,
    frameSpaceContent: I,
    zoomSpaceAt: V,
    startSpaceDrag: ne,
    canKeyMove: k,
    stepKeyMove: U,
    saveView: ie,
    restoreView: ke,
    currentSpaceCamera: ve,
    cameraFrustumLength: Me,
    cameraSphere: Ae,
    lookingAt: xe
  };
}
function JC(e) {
  const {
    canvas: t,
    editor: n,
    editorView: r,
    imageCache: i,
    readOnly: o,
    scheduler: s,
    state: a,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K, p, m, x, I = "", $ = { revision: -1, sceneState: null }, Y = null;
  function se() {
    return Y || (Y = k()), Y;
  }
  function V() {
    Y = null;
  }
  function ne() {
    return $.sceneState;
  }
  function k() {
    const S = Se(), z = g(), re = { ...a.assets };
    for (const be of l ? [] : a.stickers) {
      const Pe = String((be == null ? void 0 : be.asset_id) || "");
      Pe && !re[Pe] && i.has(Pe) && (re[Pe] = { type: "comfy_image", filename: Pe });
    }
    const he = l ? a.stickers.map((be) => oe(be) ? { ...be, source: { kind: "file", filename: ye(be) } } : be) : a.stickers;
    $.revision !== s.stateRevision && ($ = { revision: s.stateRevision, sceneState: an({ ...a, stickers: he, assets: re, painting: null }) }), l && U($.sceneState);
    const de = os($.sceneState, n.frame), we = G ? q() : null, Ie = (be) => {
      if (l && !be.visible) return null;
      if (G && fe(be)) return we;
      const Pe = B(be);
      return Pe ? { media: Pe, revision: ge(Pe) } : null;
    }, De = m(), ze = [...De.sky, ...hg($.sceneState, n.frame, a.stickers, { media: Ie, paintLayers: z, evaluated: de })], Ue = S && (S === d || S === c) ? d.dataset.panoSrc : S;
    let We = pe(S) ? { media: S, revision: ge(S), coverage: h(), source: Ue } : null;
    _(n.frame) || (We = Pm(f()));
    const Ce = _e(), je = F_(E(), Ce, w());
    je.mode !== n.spaceMode && H(), u(je);
    const ce = Ce ? ie($.sceneState, de, Ie, De) : null;
    ce || (D([]), I = "");
    const te = me() ? { ...ce, ...Ae(ce) } : null;
    return { background: We, layers: ze, space: te, content: ce };
  }
  function U(S) {
    const z = new Map(a.stickers.map((re) => [re.id, re.clip]));
    S.scene.clip = { ...a.scene.clip };
    for (const re of S.stickers) {
      const he = z.get(re.id);
      he && (re.clip = { ...he });
    }
  }
  function ie(S, z, re, he) {
    const de = ue(), we = [], Ie = (Ee, Ve) => {
      if ((Ve == null ? void 0 : Ve.kind) !== "depth_grid") return Ve;
      we.push(Ee);
      const Be = P(Ee, Ve.video);
      return { ...Ve, color: Be && { ...Be, slot: Ee } };
    }, De = Ie("scene", Wu(de, z.scene)), ze = De != null && De.url ? r.sceneBox(De.url) : null, Ue = ze && uo(De.kind, ze), We = le(), Ce = Ie("sticker", rg(We, S, z)), je = Ce != null && Ce.url ? r.sceneBox(Ce.url) : null, ce = je ? [{ box: uo(Ce.kind, je), value: Ce.value }] : [], te = sg(S, z, Z);
    for (const { request: Ee } of te) {
      const Ve = Ee ? r.sceneBox(Ee.url) : null;
      Ve && ce.push({ box: uo(Ee.kind, Ve), value: Ee.value });
    }
    ke(S, te, he.items);
    const be = he.items.map((Ee) => {
      var Ve;
      return ((Ve = Ee.request) == null ? void 0 : Ve.kind) === "depth_grid" ? { ...Ee, request: Ie(Ee.slot, Ee.request) } : Ee;
    });
    D(we), I = KA([De, Ce, ...be.map((Ee) => Ee.request)], (Ee) => r.sceneItemError(Ee));
    const Pe = gg(S, n.frame, a.stickers, { media: re, evaluated: z });
    for (const { request: Ee, value: Ve } of be) {
      const Be = Ee != null && Ee.url ? r.sceneBox(Ee.url) : null;
      Be && ce.push({ box: uo(Ee.kind, Be), value: Ve });
    }
    const Oe = Ic(Y_(z, Ue, [...Pe, ...he.stickers], ce));
    return {
      evaluated: z,
      sceneUrls: de ? de.urls.filter(Boolean) : [],
      scene: De,
      stickerUrls: ig(We, S),
      sticker: Ce,
      fileStickers: te.map((Ee) => Ee.request).filter(Boolean),
      fileStickerKeys: te.map((Ee) => Ee.key),
      stickers: Pe,
      upstreamStickers: he.stickers,
      upstreamItems: be,
      sphere: Oe
    };
  }
  function ke(S, z, re) {
    const he = (de) => /\b404\b/.test(r.sceneItemError(de) ?? "");
    for (const { id: de, key: we } of z) {
      const Ie = he(we) ? S.stickers.find((De) => De.id === de) : null;
      Ie && N(Ie.source);
    }
    for (const de of re)
      de.source && he(de.urls[0]) && N(de.source);
  }
  function Me() {
    return I;
  }
  function Ae(S) {
    var re;
    const z = ((re = S.sphere) == null ? void 0 : re.radius) || Gn;
    return {
      gizmo: ve() ? F() : xe(S.evaluated),
      grid: n.showGrid && !n.fullscreen ? aw(z) : null,
      lines: y() ? T(z) : []
    };
  }
  function xe(S) {
    const z = A(), re = Et(z) ? Wn(z, n.frame) : S.stickers.find((he) => he.id === (z == null ? void 0 : z.id));
    return !x(z) || !(re != null && re.active) ? null : { mode: n.gizmoMode, transform: va(re) };
  }
  function ve() {
    return y() && n.selectedId === Du;
  }
  let Q = { revision: -1, span: -1, segments: [] };
  function T(S) {
    const z = K();
    (Q.revision !== s.stateRevision || Q.span !== z) && (Q = { revision: s.stateRevision, span: z, segments: cw(uw(a, z)) });
    const { segments: re } = Q, he = re.length ? [{ segments: re, color: bA }] : [];
    if (!ee()) return he;
    const de = ve() ? z0 : yA;
    return [...he, { segments: cg(O(), v(S)), color: de }];
  }
  function F() {
    return !ee() || !ve() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: va({ ...O(), scale: 1 }) };
  }
  function J() {
    const { background: S, layers: z, space: re } = se(), he = t.width, de = t.height, we = R({ x: 0, y: 0, w: he, h: de });
    let Ie = !1;
    return !S && !z.length && !re ? (r.clear(460551), Ie = r.ready) : (r.clear(), Ie = !!r.render({
      rect: we,
      camera: re ? Ku(M(), he, de, re.sphere) : W(),
      background: S,
      layers: z,
      space: re
    })), b(), (n.worldSelectedId || ve() || C()) && p(), Ie;
  }
  function L(S) {
    const { content: z } = se();
    return !z || !S.position ? Co(S) : tg(Co(S), S.position, ae(), z.sphere);
  }
  function X(S, z, re, he = null) {
    const { background: de, layers: we, content: Ie } = se();
    if (!de && !we.length && !Ie) return null;
    const De = Ie && z.position ? Ie : null;
    return r.render({ rect: S, camera: L(z), background: de, layers: we, space: De, owner: re, clearColor: he });
  }
  function j(S) {
    return r.clear(460551), !!r.renderUnwrap({ rect: R(S), ...se() });
  }
  return {
    connect(S) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: h,
        backgroundShowsAt: _,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        cancelViewTransition: H,
        currentViewCamera: W,
        cutoutCamera: O,
        depthColor: P,
        deviceRect: R,
        file3dEditorFile: Z,
        followPortSticker: q,
        frameViewDistance: ae,
        getConnectedErpImage: Se,
        getMediaRevisionToken: ge,
        getStickerImage: B,
        hasSpaceContent: _e,
        isDecodedImageReady: pe,
        isExternalSticker: fe,
        isFreeSpaceView: ee,
        isSpaceView: me,
        isUploadingSticker: oe,
        isWorldMenuShown: C,
        portVideo: G,
        refreshFile3d: N,
        sceneFiles: ue,
        selectedWorldSticker: A,
        spaceModeState: E,
        spaceOrigin: w,
        spaceViewState: M,
        stickerFiles: le,
        stickerImageKey: ye,
        retainDepthColors: D,
        syncFloatingViewButtonState: b,
        timelineSpanFrames: K,
        updateSelectionMenu: p,
        upstreamViewInput: m,
        worldStickerEditable: x
      } = S);
    },
    depthVideoNotice: Me,
    editorViewInput: se,
    endEditorViewFrame: V,
    editorViewSceneState: ne,
    isCameraSelected: ve,
    renderEditorView: J,
    shotViewCamera: L,
    drawEditorViewShot: X,
    renderEditorViewUnwrap: j
  };
}
function ZC(e) {
  const {
    comfyMedia: t,
    editor: n,
    mediaAssetSource: r,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f, h = { list: null, entries: [], fps: null }, _ = /* @__PURE__ */ new Map();
  const g = /* @__PURE__ */ new Map(), v = () => f({ cause: "frame_view", localOnly: !0, reason: ot.MEDIA });
  function y(D) {
    if (!D) return null;
    let b = g.get(D);
    return b || (b = new Image(), b.onload = v, b.onerror = v, b.src = D, g.set(D, b)), b;
  }
  function H({ sceneState: D, ui: b }) {
    return [
      ...D.stickers.filter((K) => K.source.kind !== "port").map((K) => r(ga(K.source))),
      i(fn(b, li)[0] || null),
      ...D.painting.raster_objects.map((K) => K.rasterDataUrl)
    ].filter(Boolean);
  }
  function W() {
    return a && (Kf(o, "scene") === Gg || !!O());
  }
  function O() {
    const D = a && St(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, b = Array.isArray(D) ? D : null;
    if (h.list !== b) {
      h.entries.forEach(le), h = { list: b, entries: b ? Kg(b).map((p) => ({ layer: p })) : [], fps: null };
      const K = new Set(h.entries.flatMap((p) => H(p.layer)));
      for (const p of [...g.keys()]) K.has(p) || g.delete(p);
    }
    return b && h.fps !== s.timeline.fps && P(), b && h.entries;
  }
  function P() {
    if (!h.list) return;
    const D = Ug(h.entries.map((b) => b.layer), s.upstream, s.timeline.fps);
    h.entries.forEach((b, K) => {
      b.working = D[K];
    }), h.fps = s.timeline.fps, _ = Jf(D);
  }
  function R() {
    if (!h.list) return;
    const D = h.entries.map((K) => K.working), b = rk(s.upstream, h.entries.map((K) => K.layer), D, _, h.fps);
    b !== s.upstream && (s.upstream = b, _ = Jf(D));
  }
  function Z() {
    const D = O();
    D && (s.upstream = dk(s.upstream, D.map((b) => b.layer)));
  }
  function q(D) {
    R();
    const b = D(s.upstream);
    return b === s.upstream ? !1 : (s.upstream = b, P(), !0);
  }
  function ae(D) {
    const b = D.map((K) => K.origin);
    return q((K) => ok(K, b, s.timeline.fps));
  }
  function Se(D, b = null) {
    return q((K) => ak(K, D, b));
  }
  function ge(D) {
    return q((b) => uk(b, D));
  }
  function B(D) {
    return q((b) => ck(b, D));
  }
  function _e() {
    return (O() ?? []).flatMap((D) => D.working.sceneState.stickers);
  }
  function pe(D) {
    const b = h.entries.find((K) => {
      var p;
      return ((p = K.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? y(i(fn(b.layer.ui, li)[0] || null)) : null;
  }
  function fe(D = null) {
    const b = O();
    if (!b) return null;
    const [K] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], p = b.map((x) => x.working), m = (x) => Go((I) => fn(b[x].layer.ui, I));
    return {
      frames: Number(K) > 0 ? Number(K) : 0,
      ends: qg(p, s.upstream, _, m, s.timeline.fps, D)
    };
  }
  function ee(D) {
    const b = h.entries.find((K) => {
      var p;
      return ((p = K.working) == null ? void 0 : p.key) === D.origin.layer;
    });
    return b ? Go((K) => fn(b.layer.ui, K)) : null;
  }
  function me() {
    return (O() ?? []).map(({ layer: D, working: b }) => {
      const K = qo(b.key);
      return {
        key: b.key,
        sceneState: b.sceneState,
        editable: K,
        record: K ? s.upstream.find((p) => p.layer === b.key) ?? null : null,
        scene: fn(D.ui, "pano_scene_files").length > 0,
        deleted: K ? lk(s.upstream, b) : 0
      };
    });
  }
  function oe(D) {
    for (const { working: b } of O() ?? []) {
      const { key: K, sceneState: p } = b, m = qo(K);
      if (D === Dc(K, "scene")) return { editable: m, part: "scene", owner: p.scene, sceneState: p };
      if (D === Dc(K, "painting")) return { editable: m, part: "painting", owner: null, sceneState: p };
      const x = p.stickers.find((I) => I.id === D);
      if (x) return { editable: m, part: "sticker", owner: x, sceneState: p };
    }
    return null;
  }
  function C() {
    if (!a) return "";
    const D = O();
    if (tk(Kf(o, "scene"), D)) return "Run the workflow to show the upstream scene.";
    if (!D) return "";
    const b = t.uiList(o, "pano_sticker_warnings");
    return String(b.find((K) => String(K).startsWith(ek)) ?? "");
  }
  function G(D, b, K) {
    const { ui: p } = D.layer, m = s.timeline.fps, x = fn(p, $0)[0], I = fn(p, V0).map(i).filter(Boolean), $ = i(fn(p, R0)[0] || null), Y = x && typeof x == "object" ? I.length ? { frames: I, meta: x } : $ ? { src: $, meta: x } : null : null, se = y(i(fn(p, li)[0] || null)), V = Y ? Cu(b.clip, K, m, Y.meta) : null;
    let ne = se;
    if (Y != null && Y.frames)
      D.frames || (D.frames = Ou({
        createImage: (k, U) => {
          const ie = new Image();
          return ie.onload = U, ie.onerror = U, ie.src = k, ie;
        },
        onLoad: v
      })), ne = D.frames.picture(Y.frames, V, Y.meta, se);
    else if (Y != null && Y.src) {
      const k = N(D);
      k.follow({ src: Y.src, time: V, playing: u.advancing, fps: m }), ne = k.picture(D.still, se);
    }
    return ne ? { media: ne, revision: d(ne), source: Eu(Y, se) } : null;
  }
  function N(D) {
    if (D.follower) return D.follower;
    const b = Hi(document, "editor.upstream-port-video");
    b.playsInline = !0, b.preload = "auto";
    const K = Gt({ label: "editor.upstream-port-still" });
    return K.__panoFrameIdx = 0, D.video = b, D.still = K, D.follower = nl({
      video: b,
      onCapture: () => {
        var x;
        const p = Number(b.videoWidth || 0), m = Number(b.videoHeight || 0);
        p < 1 || m < 1 || (K.width = p, K.height = m, (x = K.getContext("2d")) == null || x.drawImage(b, 0, 0), K.__panoFrameIdx += 1, v());
      },
      onChange: v
    }), D.follower;
  }
  function ue(D, b, K) {
    if (b.source.kind === "port") return G(D, b, K);
    const p = y(r(ga(b.source)));
    return p ? { media: p, revision: d(p) } : null;
  }
  function A(D) {
    var $;
    const { sceneState: b } = D.working, { painting: K } = b, p = K.paint.strokes.length + K.mask.strokes.length;
    if (!b.painting_visible || !p && !K.raster_objects.length) return [];
    const m = c(), x = `${m.width}x${m.height}`;
    D.paintSize !== x && (w(D), D.paintSize = x, D.paintEngine = p ? tl(m) : null, ($ = D.paintEngine) == null || $.rebuildCommitted({ painting: K }), D.rasters = /* @__PURE__ */ new Map());
    const I = D.paintEngine;
    return zu(b, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (Y) => {
        const se = I == null ? void 0 : I.getGroupDisplayCanvas(Y);
        return se && { media: se, revision: x };
      },
      raster: (Y) => {
        const se = E(D, Y, m);
        return se && { media: se, revision: x };
      },
      mask: () => Wm(I)
    });
  }
  function E(D, b, { width: K, height: p }) {
    if (D.rasters.has(b.id)) return D.rasters.get(b.id);
    const m = y(b.rasterDataUrl);
    if (!m.complete || !m.naturalWidth) return null;
    const x = Gt({ label: "editor.upstream-raster-erp", width: K, height: p }), I = x.getContext("2d");
    return I ? (j0(I, m, b, K, p), D.rasters.set(b.id, x), x) : null;
  }
  function w(D) {
    var b;
    (b = D.rasters) == null || b.forEach((K) => Fr(K)), D.rasters = null, D.paintEngine = null, D.paintSize = null;
  }
  function M() {
    const D = O() ?? [], b = { sky: [], stickers: [], items: [] }, K = n.frame;
    return D.forEach((p) => {
      const m = fk(p.working, p.working.key, K, {
        media: (x) => ue(p, x, K),
        paintLayers: A(p),
        source: i,
        editorFile: l
      });
      b.sky.push(...m.sky), b.stickers.push(...m.stickers), b.items.push(...m.items);
    }), b;
  }
  function le(D) {
    var b;
    (b = D.follower) == null || b.dispose(), D.still && Fr(D.still), w(D);
  }
  function ye() {
    h.entries.forEach(le), h = { list: null, entries: [], fps: null }, _ = /* @__PURE__ */ new Map(), g.clear();
  }
  return {
    connect(D) {
      ({ file3dEditorFile: l, getDesiredPaintTargetDescriptor: c, getMediaRevisionToken: d, playback: u, requestDraw: f } = D);
    },
    upstreamEntries: O,
    upstreamLinked: W,
    upstreamNotice: C,
    upstreamOutput: fe,
    upstreamPortMeta: ee,
    upstreamViewInput: M,
    rebuildUpstreamWorking: P,
    syncUpstreamEdits: R,
    pruneUpstreamRecords: Z,
    deleteUpstreamStickers: ae,
    revertUpstreamSticker: Se,
    revertUpstreamLayer: ge,
    restoreUpstreamDeleted: B,
    upstreamStickers: _e,
    upstreamStickerImage: pe,
    upstreamTimelineLayers: me,
    upstreamRow: oe,
    disposeUpstream: ye
  };
}
const Zc = "camera_preview";
function QC(e) {
  return e === Zc ? ot.SPLAT_PREVIEW : ot.SPLAT_STAGE;
}
function eI(e) {
  return [...e].some((t) => t !== ot.VIEW && t !== ot.OVERLAY && t !== ot.SPLAT_STAGE);
}
function ey(e, t = !1) {
  const n = Te(hi(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function tI(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: n,
    cutoutPreviewHost: r,
    editor: i,
    editorView: o,
    runtime: s,
    shotEditor: a,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, h, _ = null, g = !1, v = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Zc));
  }
  function H() {
    _ = null, v = !1, y();
  }
  function W(ae) {
    if (!r || !ae) return !1;
    const Se = r.closest(".pano-camera-preview");
    if (!Se) return !1;
    const ge = Math.round(Number(Se.clientWidth || r.clientWidth || 0)), B = Math.round(Number(Se.clientHeight || r.clientHeight || 0));
    return Math.abs(ge - Number(ae.width || 0)) <= 1 && Math.abs(B - Number(ae.height || 0)) <= 1;
  }
  function O(ae, Se) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, H();
      return;
    }
    const ge = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !ge || !n) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = ge ? "Preview unavailable" : "Add Frame to preview", H();
      return;
    }
    const B = ey(ge, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = B.width, c.cameraPreview.height = B.height, v) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const _e = window.devicePixelRatio || 1, pe = Math.max(1, B.width * _e), fe = Math.max(1, B.height * _e), ee = Math.min(1, t.width / pe, t.height / fe), me = { width: Math.max(1, Math.floor(pe * ee)), height: Math.max(1, Math.floor(fe * ee)) }, oe = !_ || _.width !== me.width || _.height !== me.height || eI(Se);
    if (ae && oe) {
      g = !0;
      const G = u({ x: 0, y: t.height - me.height, w: me.width, h: me.height }, ge, Zc);
      _ = G ? me : null, G && q(G);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const C = W(B);
    c.cameraPreview.ready = !0, c.cameraPreview.label = C ? "" : "Loading preview", c.cameraPreview.settled = C && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function P() {
    _ = null, v = !1;
  }
  let R = 0, Z = !1;
  function q(ae) {
    const Se = ++R;
    createImageBitmap(ae.canvas, ae.x, ae.y, ae.width, ae.height).then((ge) => {
      var B;
      if (Se !== R || !s.running) {
        ge.close();
        return;
      }
      (B = n.getContext("bitmaprenderer")) == null || B.transferFromImageBitmap(ge);
    }).catch((ge) => {
      Se !== R || !s.running || (v = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !Z && (Z = !0, console.error("[PanoramaStickers] camera preview frame failed", ge)));
    });
  }
  return {
    connect(ae) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = ae);
    },
    drawCutoutOutputPreview: O,
    forgetCameraPreviewFrame: P
  };
}
function nI(e) {
  const {
    cameraV2: t,
    canvas: n,
    ctx: r,
    editor: i,
    editorView: o,
    frameGateCssRadius: s,
    runtime: a,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K, p;
  function m(Q) {
    const T = n.width, F = n.height, J = q();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, T, F), M(), Q && (a.backgroundDirty = !D(J)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let X = 0; X <= 16; X += 1) {
        const j = J.x + J.w * X / 16;
        r.beginPath(), r.moveTo(j, J.y), r.lineTo(j, J.y + J.h), r.stroke();
      }
      for (let X = 0; X <= 8; X += 1) {
        const j = J.y + J.h * X / 8;
        r.beginPath(), r.moveTo(J.x, j), r.lineTo(J.x + J.w, j), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(J.x, J.y + J.h / 2), r.lineTo(J.x + J.w, J.y + J.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const L = J.y + J.h * 0.57;
      r.fillText("Left", J.x + J.w * 0.25, L), r.fillText("Front", J.x + J.w * 0.5, L), r.fillText("Right", J.x + J.w * 0.75, L), r.fillText("Back", J.x + 38, L), r.fillText("Back", J.x + J.w - 38, L);
    }
  }
  function x(Q, T, F = 1) {
    let J = !1;
    r.strokeStyle = T, r.lineWidth = F, r.beginPath();
    for (const L of Q) {
      const X = ue(L);
      if (!X) {
        J = !1;
        continue;
      }
      J ? r.lineTo(X.x, X.y) : (r.moveTo(X.x, X.y), J = !0);
    }
    r.stroke();
  }
  function I(Q) {
    const T = n.width, F = n.height;
    if (r.clearRect(0, 0, T, F), M(), Q && (a.backgroundDirty = !ye()), i.showGrid && !i.fullscreen && g().space)
      $();
    else if (i.showGrid && !i.fullscreen) {
      for (let L = -180; L <= 180; L += 15) {
        const X = [];
        for (let j = -89; j <= 89; j += 4) X.push(hn(L, j));
        x(X, "#3f3f46", L % 90 === 0 ? 1.3 : 1);
      }
      for (let L = -75; L <= 75; L += 15) {
        const X = [];
        for (let j = -180; j <= 180; j += 4) X.push(hn(j, L));
        x(X, L === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", L === 0 ? 1.5 : 1);
      }
      const J = [
        { name: "Left", dir: hn(-90, 0) },
        { name: "Front", dir: hn(0, 0) },
        { name: "Right", dir: hn(90, 0) },
        { name: "Back", dir: hn(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", J.forEach((L) => {
        const X = ue(L.dir);
        X && r.fillText(L.name, X.x, X.y + 24);
      });
    }
  }
  function $() {
    const Q = Ku(p(), n.width, n.height, f()), T = Uo(Q, [0, 0, 0], n.width, n.height);
    T && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", T.x, T.y - 12));
  }
  function Y(Q, T) {
    const F = N(Q), J = hn(Number(F.yaw_deg || 0), Number(F.pitch_deg || 0)), L = i.mode === "unwrap" ? A(J) : null, X = L ? L.x : null, j = i.mode === "pano" ? 28 : 20, S = [
      b(Q, 0, j, X),
      b(Q, 1, j, X),
      b(Q, 2, j, X),
      b(Q, 3, j, X)
    ];
    od(r, S, { selected: T });
  }
  function se(Q, T = []) {
    if (!(!Q || !Array.isArray(T) || T.length < 4)) {
      Q.beginPath(), Q.moveTo(T[0].x, T[0].y);
      for (let F = 1; F < 4; F += 1) Q.lineTo(T[F].x, T[F].y);
      Q.closePath();
    }
  }
  function V(Q, T, F) {
    const J = Array.isArray(Q == null ? void 0 : Q.corners) ? Q.corners : [];
    if (J.length < 4) return;
    const L = Te(Number((Q == null ? void 0 : Q.visibilityAlpha) ?? 1), 0, 1);
    if (L <= 0.01) return;
    const X = r.globalAlpha;
    r.globalAlpha = X * L;
    const j = F ? "rgba(255, 116, 116, 0.96)" : T ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", S = F ? "rgba(255, 89, 89, 0.08)" : T ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", z = T ? 3.2 : 2.6;
    se(r, J), r.fillStyle = S, r.fill(), r.strokeStyle = j, r.lineWidth = z, r.stroke(), r.save(), r.strokeStyle = j, r.lineWidth = T ? 3.2 : 2.6, r.lineCap = "round";
    const re = Array.isArray(Q == null ? void 0 : Q.edgeMidpoints) && Q.edgeMidpoints.length >= 4 ? Q.edgeMidpoints : [
      { edge: "top", x: (J[0].x + J[1].x) * 0.5, y: (J[0].y + J[1].y) * 0.5 },
      { edge: "right", x: (J[1].x + J[2].x) * 0.5, y: (J[1].y + J[2].y) * 0.5 },
      { edge: "bottom", x: (J[2].x + J[3].x) * 0.5, y: (J[2].y + J[3].y) * 0.5 },
      { edge: "left", x: (J[3].x + J[0].x) * 0.5, y: (J[3].y + J[0].y) * 0.5 }
    ], he = { top: "bottom", right: "left", bottom: "top", left: "right" }, de = T ? 12 : 9;
    re.forEach((we) => {
      const De = re.find((Ce) => (Ce == null ? void 0 : Ce.edge) === he[we == null ? void 0 : we.edge]) || {
        x: (J[0].x + J[1].x + J[2].x + J[3].x) * 0.25,
        y: (J[0].y + J[1].y + J[2].y + J[3].y) * 0.25
      }, ze = De.x - we.x, Ue = De.y - we.y, We = Math.hypot(ze, Ue) || 1;
      r.beginPath(), r.moveTo(we.x, we.y), r.lineTo(we.x + ze / We * de, we.y + Ue / We * de), r.stroke();
    }), r.restore(), r.globalAlpha = X;
  }
  function ne(Q, T, F, J) {
    const L = Te(Number((T == null ? void 0 : T.visibilityAlpha) ?? 1), 0, 1);
    if (L <= 0.01) return;
    if (me(Q)) {
      V(T, F, J);
      return;
    }
    if (oe(Q)) {
      const j = r.globalAlpha;
      r.globalAlpha = j * Z(Q) * L, i.mode === "frame" ? (r.strokeStyle = F ? "rgba(250, 250, 250, 0.9)" : J ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = F ? 2 : 1, se(r, T.corners), r.stroke()) : Y(Q, F), r.globalAlpha = j;
      return;
    }
    const X = r.globalAlpha;
    r.globalAlpha = X * L, r.fillStyle = F ? "rgba(0, 112, 243, 0.24)" : J ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", se(r, T.corners), r.fill(), r.strokeStyle = F ? "rgba(255, 255, 255, 1)" : J ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = F ? 2.8 : 1.9, se(r, T.corners), r.stroke(), r.globalAlpha = X;
  }
  function k(Q, T, F) {
    if (oe(Q)) {
      d0(r, T, { accent: F });
      return;
    }
    const J = !(me(Q) && Se());
    r.fillStyle = F, J && T.corners.forEach((L) => {
      r.beginPath(), r.arc(L.x, L.y, 6.5, 0, Math.PI * 2), r.fill();
    }), J && me(Q) && (r.strokeStyle = F, r.lineCap = "round", r.lineWidth = 4, T.edgeMidpoints.forEach((L) => {
      var de, we, Ie, De;
      const X = (((de = L.b) == null ? void 0 : de.x) ?? L.x) - (((we = L.a) == null ? void 0 : we.x) ?? L.x), j = (((Ie = L.b) == null ? void 0 : Ie.y) ?? L.y) - (((De = L.a) == null ? void 0 : De.y) ?? L.y), S = Math.hypot(X, j) || 1, z = X / S, re = j / S, he = 10;
      r.beginPath(), r.moveTo(L.x - z * he, L.y - re * he), r.lineTo(L.x + z * he, L.y + re * he), r.stroke();
    }), r.lineCap = "butt"), C(Q) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(T.rotateStemBase.x, T.rotateStemBase.y), r.lineTo(T.rotateHandle.x, T.rotateHandle.y), r.stroke(), r.fillStyle = F, r.beginPath(), r.arc(T.rotateHandle.x, T.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function U() {
    var X;
    const Q = i.mode === "frame" ? [] : R(), T = Q.length > 1, F = l ? y() : O(), J = F.map((j) => `${String((j == null ? void 0 : j.id) || "")}:${me(j) ? "frame" : Number((j == null ? void 0 : j.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== F || i._sortedItemsCache.orderKey !== J) && (i._sortedItemsCache = {
      src: F,
      orderKey: J,
      sorted: [...F]
    });
    const L = [...Q.filter(Et), ...i._sortedItemsCache.sorted];
    for (const j of L) {
      const S = i.mode !== "frame" && !T && pe(j);
      if (i.mode === "frame" && !S) continue;
      const z = oe(j), re = me(j), he = _e(j);
      if (!z && !re || ee(j) && !K(j)) continue;
      const de = G(j);
      if (d !== "stickers" && !de.visible)
        continue;
      const we = Te(Number((de == null ? void 0 : de.visibilityAlpha) ?? 1), 0, 1);
      if (we <= 0.01) continue;
      const Ie = re && l && i.mode === "pano" ? Te(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= Ie, ne(j, de, S, he), S && de.visible) {
        const De = he ? "#ff4d4f" : z && ge(j) ? "#f59e0b" : "#0070f3", ze = r.globalAlpha;
        r.globalAlpha = ze * we, k(j, de, De), r.globalAlpha = ze;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !v() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const j = i.cutoutPanoFrameVisual, S = Te(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= S, V(j.geom, j.selected, j.locked), j.selected && k(
        j.item,
        j.geom,
        j.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (T) {
      const j = P(Q);
      if (j != null && j.visible) {
        const S = u(Q) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(j.corners[0].x, j.corners[0].y);
        for (let z = 1; z < j.corners.length; z += 1) r.lineTo(j.corners[z].x, j.corners[z].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = S, j.corners.forEach((z) => {
          r.beginPath(), r.arc(z.x, z.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      Q.forEach((j) => {
        if (!C(j) && !fe(j)) return;
        const S = G(j);
        if (!(S != null && S.visible)) return;
        const z = _e(j) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(S.corners[0].x, S.corners[0].y);
        for (let re = 1; re < S.corners.length; re += 1) r.lineTo(S.corners[re].x, S.corners[re].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = z, S.corners.forEach((re) => {
          r.beginPath(), r.arc(re.x, re.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if (((X = i.interaction) == null ? void 0 : X.kind) === "marquee_select") {
      const j = le(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(j.x0, j.y0, j.x1 - j.x0, j.y1 - j.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function ie(Q) {
    const T = v(), F = H(T);
    if (!T || !F)
      return r.clearRect(0, 0, n.width, n.height), Q && o.clear(657930), !1;
    const J = { x: F.x, y: F.y, w: F.w, h: F.h }, { rect: L, shot: X } = fg(T, F, { width: n.width, height: n.height }), j = ke(J);
    if (r.clearRect(0, 0, n.width, n.height), Q) {
      o.clear(657930);
      const S = h(L), z = !!_(S, X, void 0, 657930);
      z || o.clear(1118481, S), a.backgroundDirty = !z;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(J.x, J.y, J.w, J.h, j), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = z0, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(J.x + 1, J.y + 1, J.w - 2, J.h - 2, Math.max(0, j - 1)), r.stroke(), r.restore(), !0;
  }
  function ke(Q) {
    const T = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * T, Number((Q == null ? void 0 : Q.w) || 0) * 0.5, Number((Q == null ? void 0 : Q.h) || 0) * 0.5);
  }
  function Me() {
    var z, re;
    if (((z = i.interaction) == null ? void 0 : z.kind) !== "paint_lasso_fill") return;
    const Q = i.interaction.stroke, T = (re = Q == null ? void 0 : Q.geometry) == null ? void 0 : re.points;
    let F;
    if (i.mode === "frame") {
      const he = v(), de = W(he);
      F = E(T, he, de);
    } else
      F = w(T);
    if (!Array.isArray(F) || F.length < 3) return;
    const J = String((Q == null ? void 0 : Q.layerKind) || "") === "mask", L = (Q == null ? void 0 : Q.color) || { r: 1, g: 0.25, b: 0.25 }, X = Math.round(Number(L.r || 0) * 255), j = Math.round(Number(L.g || 0) * 255), S = Math.round(Number(L.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(F[0].x || 0), Number(F[0].y || 0));
    for (let he = 1; he < F.length; he++) r.lineTo(Number(F[he].x || 0), Number(F[he].y || 0));
    r.closePath(), J ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${X},${j},${S},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function Ae() {
    const Q = i.frameRollOverlayVisual, T = Te(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(Q != null && Q.shot) || T <= 1e-4) return;
    const F = W(Q.shot);
    if (!F) return;
    const J = { x: F.x + F.w * 0.5, y: F.y + F.h * 0.5 }, L = Number(Q.shot.roll_deg ?? Q.shot.rot_deg ?? 0) * ir, X = Math.hypot(F.w, F.h) * 0.55, j = Math.cos(L) * X, S = Math.sin(L) * X;
    r.save(), r.globalAlpha *= T, r.beginPath(), r.rect(F.x, F.y, F.w, F.h), r.clip(), r.translate(J.x, J.y), r.rotate(L);
    const z = Math.max(12, Math.min(F.w, F.h) / 6);
    r.beginPath();
    for (let re = -X; re <= X; re += z)
      r.moveTo(re, -X), r.lineTo(re, X);
    for (let re = -X; re <= X; re += z)
      r.moveTo(-X, re), r.lineTo(X, re);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(J.x - j, J.y - S), r.lineTo(J.x + j, J.y + S), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function xe() {
    return !l || !v() || t && B() || c && !ae() ? 0 : _A;
  }
  function ve() {
    const Q = Te(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (Q <= 1e-4 || !l || i.mode !== "pano") return;
    const T = v(), F = T ? G(T) : null, J = Array.isArray(F == null ? void 0 : F.corners) && F.corners.length >= 4 ? F.corners.map((j) => ({ x: Number(j.x || 0), y: Number(j.y || 0) })) : null;
    F != null && F.visible && J && (i.cutoutPanoDimCorners = J), T && (F != null && F.visible) && J && (i.cutoutPanoFrameVisual = {
      item: T,
      geom: F,
      selected: pe(T),
      locked: _e(T)
    });
    const L = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, X = F != null && F.visible ? J : L ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${Q})`, r.beginPath(), r.rect(0, 0, n.width, n.height), X.length >= 4) {
      r.moveTo(X[0].x, X[0].y);
      for (let j = 1; j < 4; j += 1) r.lineTo(X[j].x, X[j].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(Q) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: h,
        drawEditorViewShot: _,
        editorViewInput: g,
        getActiveCutoutShot: v,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: H,
        getFrameViewRect: W,
        getList: O,
        getMultiSelectionGeom: P,
        getSelectedItems: R,
        getStickerDisplayAlpha: Z,
        getUnwrapRect: q,
        isCameraSelected: ae,
        isErpCamera: Se,
        isExternalSticker: ge,
        isFreeSpaceView: B,
        isItemLocked: _e,
        isItemSelected: pe,
        isRasterObjectItem: fe,
        isSceneSticker: ee,
        isShotItem: me,
        isStickerItem: oe,
        isStrokeGroupItem: C,
        objectGeom: G,
        poseOf: N,
        projectDir: ue,
        projectDirUnwrap: A,
        projectErpLassoPointsToFrameRect: E,
        projectLassoPointsToCurrentView: w,
        rebuildPaintEngineIfNeeded: M,
        rectFromPoints: le,
        renderEditorView: ye,
        renderEditorViewUnwrap: D,
        sampleStickerEdge: b,
        sceneStickerShown: K,
        spaceViewState: p
      } = Q);
    },
    drawGridUnwrap: m,
    drawGridPano: I,
    drawObjects: U,
    drawFrameViewBackground: ie,
    drawLassoOutlineOverlay: Me,
    drawFrameRollOverlay: Ae,
    getCutoutPanoDimTarget: xe,
    drawCutoutPanoPassepartout: ve
  };
}
function rI(e) {
  const {
    app: t,
    backgroundCanvas: n,
    canvas: r,
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
    type: _,
    uiState: g,
    viewController: v
  } = e;
  let y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K = () => {
  };
  function p(T = /* @__PURE__ */ new Set()) {
    Se();
    const F = l.backgroundDirty;
    d && (C(), H(F, T)), i.mode === "frame" ? (l.frameSafeRect = ee(), P(F)) : i.mode === "unwrap" ? Z(F) : R(F), W(), ae(), A(), q(), O(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && M(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const J = pe();
    g.stageStatus = J.status, g.stageStatusDetail = J.detail, g.stageNotice = ye() || D() || b() || le(), J.status === Vn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", J.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function m(T = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const F = String((T == null ? void 0 : T.kind) || "");
    return F === "move" || F === "scale" || F === "scale_x" || F === "scale_y" || F === "rotate" ? !0 : F === "move_multi" ? Array.isArray(T == null ? void 0 : T.stickerSnapshots) && T.stickerSnapshots.length > 0 : !1;
  }
  function x() {
    return !!i.interaction || !!h.drag;
  }
  function I() {
    l.nodePreviewPending = !1;
    const T = kn(s);
    T.liveState = f, T.liveStateVersion += 1, _e();
  }
  function $(T = {}) {
    var re, he, de, we, Ie, De, ze, Ue;
    const F = T.reason ?? ot.STATE, J = !!T.localOnly, L = T.externalSync === !0, X = String(T.cause || ""), j = String(((re = i.interaction) == null ? void 0 : re.kind) || "");
    (!J || j === "view" || j === "pan_frame" || m() || !!i.viewTransition || X === "mode" || X === "frame_view" || X === "cutout_frame") && (l.backgroundDirty = !0), J && fe() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!J || X === "selection" || X === "mode" || X === "cutout_frame") && (E(), w()), x() ? l.nodePreviewPending = !0 : I(), L && ((de = (he = ct(s).dom) == null ? void 0 : he.requestDraw) == null || de.call(he), (we = s.setDirtyCanvas) == null || we.call(s, !0, !1)), L && !J && ((De = (Ie = s.graph) == null ? void 0 : Ie.setDirtyCanvas) == null || De.call(Ie, !0, !0), (Ue = (ze = t == null ? void 0 : t.canvas) == null ? void 0 : ze.setDirty) == null || Ue.call(ze, !0, !0)), c.requestDraw(F);
  }
  function Y() {
    const T = r.getBoundingClientRect(), F = Math.max(2, Math.round(T.width)), J = Math.max(2, Math.round(T.height)), L = window.devicePixelRatio || 1, X = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== F || r.height !== J) && (r.width = F, r.height = J);
    const j = dw(T.width || F, T.height || J, L, window.innerWidth || T.width, window.innerHeight || T.height);
    return o.resize(j.width, j.height), [r.width, r.height, n.width, n.height].join("x") === X ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && se(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function se(T) {
    T(), c.wake();
  }
  function V() {
    return !!i.viewTransition || me.held || !!v.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || x();
  }
  function ne(T = performance.now(), F = /* @__PURE__ */ new Set()) {
    var S;
    l.nodePreviewPending && !x() && I(), F.forEach((z) => l.reasons.add(z)), F.size && (l.dirty = !0), [...F].some((z) => z !== ot.OVERLAY) && (l.backgroundDirty = !0), N(), l.lastTickTs > 0 ? Math.max(1e-3, (T - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = T;
    const J = i.mode === "frame" && ((S = i.interaction) == null ? void 0 : S.kind) === "roll_frame" ? i.interaction : null;
    J != null && J.shot && (i.frameRollOverlayVisual = { shot: J.shot });
    const L = J ? 1 : 0;
    if (Math.abs(L - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = L, i.frameRollOverlayStartTs = T), Math.abs(Number(i.frameRollOverlayAlpha || 0) - L) > 1e-6) {
      const z = Te(
        (T - Number(i.frameRollOverlayStartTs || T)) / wA,
        0,
        1
      );
      i.frameRollOverlayAlpha = Nn(
        Number(i.frameRollOverlayFrom || 0),
        L,
        Ql(z)
      ), z >= 1 && (i.frameRollOverlayAlpha = L, L === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const X = B();
    if (Math.abs(X - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = X, i.cutoutPanoDimStartTs = T), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - X) > 1e-6) {
      const z = Te(
        (T - Number(i.cutoutPanoDimStartTs || T)) / Pp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Nn(
        Number(i.cutoutPanoDimFrom || 0),
        X,
        Ql(z)
      ), z >= 1 && (i.cutoutPanoDimAlpha = X), z >= 1 && X === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const j = d && ge() ? 1 : 0;
    if (Math.abs(j - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = j, i.cutoutPanoFrameStartTs = T), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - j) > 1e-6) {
      const z = Te(
        (T - Number(i.cutoutPanoFrameStartTs || T)) / Pp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Nn(
        Number(i.cutoutPanoFrameFrom || 0),
        j,
        Ql(z)
      ), z >= 1 && (i.cutoutPanoFrameAlpha = j, j === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const z = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), re = Te((T - Number(i.outputPreviewAnimStartTs || 0)) / z, 0, 1), de = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? MA(re) : NA(re);
      i.outputPreviewAnim = Nn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, de), l.dirty = !0, re >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: z, done: re } = YC(i.viewTransition, T);
      if (i.viewPosition = z.position, i.viewYaw = z.yaw_deg, i.viewPitch = z.pitch_deg, i.viewFov = z.hFOV_deg, i.viewDistance = z.distance, re) {
        const { end: he } = i.viewTransition;
        i.viewTransition = null, he && y(he), ue();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (G(T) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, v.stepInertia(T) && (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const z = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), p(z);
    }
  }
  function k(T) {
    try {
      T();
    } catch (F) {
      const J = String((F == null ? void 0 : F.stack) || (F == null ? void 0 : F.message) || F || "unknown editor frame error");
      l.tickErrorSignature !== J && (l.tickErrorSignature = J, console.error("[PanoramaStickers] editor frame failed", F)), g.stageStatus = An, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function U(T = performance.now(), F = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const J = v1();
    k(() => ne(T, F)), S1(J);
  }
  function ie() {
    !l.running || !Y() || k(() => {
      l.dirty = !1, p(/* @__PURE__ */ new Set([ot.RESIZE]));
    });
  }
  const ke = new ResizeObserver(ie);
  let Me = null;
  function Ae() {
    Me == null || Me.removeEventListener("change", xe), Me = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), Me.addEventListener("change", xe);
  }
  function xe() {
    Ae(), ie();
  }
  function ve() {
    K = b1("editor", () => {
      var T;
      return {
        type: _,
        readOnly: a,
        mode: i.mode,
        interaction: ((T = i.interaction) == null ? void 0 : T.kind) ?? null,
        timelineDrag: !!h.drag,
        playing: !!oe.playing
      };
    });
  }
  function Q() {
    K(), l.running = !1, c.stop(), ke.disconnect(), Me.removeEventListener("change", xe);
  }
  return {
    connect(T) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: H,
        drawCutoutPanoPassepartout: W,
        drawFrameRollOverlay: O,
        drawFrameViewBackground: P,
        drawGridPano: R,
        drawGridUnwrap: Z,
        drawLassoOutlineOverlay: q,
        drawObjects: ae,
        endEditorViewFrame: Se,
        getActiveCutoutShot: ge,
        getCutoutPanoDimTarget: B,
        getSharedLivePaintSurface: _e,
        getStageImageStatus: pe,
        isPaintCompositeInteraction: fe,
        measureFrameSafeRect: ee,
        moveKeys: me,
        playback: oe,
        rebuildPaintEngineIfNeeded: C,
        stepKeyMove: G,
        syncCutoutShot: N,
        syncFloatingViewButtonState: ue,
        syncFrameRollKnob: A,
        syncLookAtFrameButtonState: E,
        syncViewToggleState: w,
        updateSelectionMenu: M,
        upstreamNotice: le,
        file3dImportNotice: ye,
        file3dNotice: D,
        depthVideoNotice: b
      } = T);
    },
    requestDraw: $,
    syncCanvasSize: Y,
    startAnimation: se,
    editorAnimating: V,
    tick: U,
    stageResizeObserver: ke,
    watchPixelRatio: Ae,
    sampleEditorDiagnostics: ve,
    stopRenderLoop: Q
  };
}
function iI(e) {
  const {
    cameraV2: t,
    editor: n,
    hideSidebar: r,
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
    studio: _,
    type: g,
    uiState: v
  } = e;
  let y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K, p, m, x = 0;
  function I() {
    v.toolButtons.forEach((xe) => {
      const ve = xe.attr === "data-tool-mode", Q = xe.attr === "data-paint-tool", T = xe.attr === "data-mask-tool";
      xe.active = ve ? xe.value === n.primaryTool : Q ? xe.key === n.paintTool : T ? xe.key === n.maskTool : !1, xe.pressed = xe.active ? "true" : xe.pressed == null ? null : "false";
    });
  }
  function $() {
    if (_ && Ai(v.toolButtons, "value", "add-camera", { disabled: _e() }), g !== "cutout") return;
    const xe = W();
    Ai(v.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: xe ? "Look At Frame" : "Add Frame",
      tip: xe ? "Look at frame" : "Add frame",
      icon: xe ? He.camera : He.plus_circle
    });
  }
  function Y() {
    const xe = gC({
      spaceView: ue(),
      spaceMode: Da(n.spaceMode, n.viewTransition),
      readOnly: c,
      frameMode: f && n.mode === "frame",
      showGrid: n.showGrid
    });
    v.space && Object.assign(v.space, xe.space);
    for (const [ve, Q] of Object.entries(xe.buttons)) Ai(v.floatingButtons, "action", ve, Q);
  }
  function se() {
    var Q;
    const xe = B0({ hasShot: !!W(), erp: ee(), hidden: _e() && !H(), studio: _ });
    n.mode === "frame" && xe.disabled && (_ ? E(W()) : n.mode = "pano"), n.outputPreviewRect = null, v.viewButtons.forEach((T) => {
      const F = T.key === n.mode;
      T.pressed = F ? "true" : "false", T.visible = !(T.key === "frame" && !f), T.key === "frame" ? Object.assign(T, xe) : T.disabled = !1;
    });
    const ve = f && n.mode === "frame" ? W() : null;
    v.frameRail.visible = !!ve, v.frameRail.disabled = c || (ve == null ? void 0 : ve.locked) === !0, v.frameRollKnob.visible = !!ve && !c && ve.locked !== !0, v.frameRollKnob.disabled = c || (ve == null ? void 0 : ve.locked) === !0, v.frameRollKnob.rollDeg = Number((ve == null ? void 0 : ve.roll_deg) ?? (ve == null ? void 0 : ve.rot_deg) ?? 0), v.frameRollKnob.displayValue = $i(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((Q = n.interaction) == null ? void 0 : Q.kind) === "roll_frame", v.frameRollKnob.armed = !!ve && n.altModifier === !0, v.frameRail.rollKnob = v.frameRollKnob, v.frameRail.aspectLabel = ve ? mr(ve) : "", v.frameRail.aspectChoices = Y0(ve ? String(mr(ve)) : null, { erp: _, coverage: h.coverage }), ve || (v.frameRail.aspectOpen = !1), v.outputPreviewToggle.visible = g === "cutout" && n.mode !== "frame" && !!W(), f && v.cameraPreview && (v.cameraPreview.visible = n.mode !== "frame" && y(), v.cameraPreview.expanded = !!n.outputPreviewExpanded, v.cameraPreview.settled = v.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), Y(), C() ? p(n.pointerPos) : ye(n.mode === "pano" ? "grab" : "default");
  }
  function V() {
    var ve;
    const xe = n.mode === "frame" ? W() : null;
    v.frameRollKnob.visible = !!xe && !c && xe.locked !== !0, v.frameRollKnob.rollDeg = Number((xe == null ? void 0 : xe.roll_deg) ?? (xe == null ? void 0 : xe.rot_deg) ?? 0), v.frameRollKnob.displayValue = $i(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((ve = n.interaction) == null ? void 0 : ve.kind) === "roll_frame", v.frameRollKnob.armed = !!xe && n.altModifier === !0;
  }
  function ne() {
    I();
    const xe = fC({
      editor: n,
      swatches: ol,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Qn,
      colorsApproximatelyEqual: Ta,
      rgb01ToHsv: Jc,
      hsv01ToRgb: Xc,
      getBrushPresetIdForTool: O,
      isActiveLassoTool: fe
    });
    if (Object.assign(v.paintDock, xe), K(), !xe.visible) {
      i && (i.hidden = !0);
      return;
    }
    x && (clearTimeout(x), x = 0), o && (!xe.colorEnabled && i && !i.hidden && (x = window.setTimeout(() => {
      i.hidden = !0, v.paintDock.colorPopOpen = !1, x = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", xe.pickerHueColor), i.style.setProperty("--picker-sat", xe.pickerSat), i.style.setProperty("--picker-val", xe.pickerVal), i.style.setProperty("--picker-hue", xe.pickerHue)), s && (s.style.left = xe.pickerSvLeft, s.style.top = xe.pickerSvTop), a && (a.style.left = xe.pickerHueLeft));
  }
  function k() {
    const xe = M(f && n.mode === "frame" ? W() : q());
    xe && (n.panelLastValues = {
      yaw_deg: Number(xe.yaw_deg || 0),
      pitch_deg: Number(xe.pitch_deg || 0),
      hFOV_deg: Number(xe.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(xe.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(xe.rot_deg || 0),
      roll_deg: Number(xe.roll_deg || 0),
      aspect_id: mr(xe)
    }, U());
  }
  function U() {
    D(), b(), ke();
  }
  function ie() {
    const xe = f && n.mode === "frame" ? W() : null;
    return [...ae(), le(), xe].some((ve) => G(ve) ? ha(ve) : N(ve) && _e() && ha(h.camera));
  }
  function ke() {
    if (r) return;
    h.ui_settings = h.ui_settings || {};
    const xe = dC(h.ui_settings);
    if (l) {
      v.sidePanel = pC({
        coverage: h.coverage,
        uiSettings: xe,
        normalizeCoverageValue: yn
      });
      return;
    }
    const ve = q(), Q = f && n.mode === "frame" ? W() : null, T = Q || ve, F = Q ? [Q] : ae(), J = Q ? "shot" : Se();
    if (F.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), T && J !== "stroke") {
      const ze = M(T);
      n.panelLastValues = {
        yaw_deg: Number(ze.yaw_deg || 0),
        pitch_deg: Number(ze.pitch_deg || 0),
        hFOV_deg: Number(ze.hFOV_deg || (J === "image" ? 30 : 90)),
        vFOV_deg: Number(ze.vFOV_deg || (J === "image" ? 30 : 60)),
        rot_deg: Number(ze.rot_deg || 0),
        roll_deg: Number(ze.roll_deg || 0),
        aspect_id: mr(ze)
      }, G(T) && (n.panelLastValues.opacity = Wn(T, n.frame).opacity * 100);
    }
    const L = n.panelLastValues || (g === "stickers" || J === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), X = J === "stroke" ? null : T, j = le(), S = t && (J === "shot" || J === "frame") && pe(), z = j ? ZS(j, n.frame) : S ? { ...X, ...qS(h.camera, n.frame), vFOV_deg: X.vFOV_deg } : G(X) ? n.panelLastValues : X || L, re = j ? m(j) : !!X && !oe(X);
    n.panelWasEnabled = re, $();
    let he = null;
    if (Q) {
      const ze = B({ item: Q, kind: "shot", label: "Frame" });
      he = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ze.label,
        currentIcon: ze.icon || null,
        items: [{
          id: String(Q.id || ""),
          label: ze.label,
          icon: ze.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const ze = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const Ce = W();
        Ce && ze.push({ id: Ce.id, label: "Camera", icon: ge("frame"), item: Ce, kind: "frame" }), Z().forEach((je, ce) => {
          var Oe, Ee;
          if (!je || G(je) && !je.visible) return;
          const te = u ? Me(je) : me(je) ? String(je.id || md) : String(((Ee = (Oe = h.assets) == null ? void 0 : Oe[je.asset_id]) == null ? void 0 : Ee.name) || je.asset_id || je.id), be = `${ce + 1}. ${te}${me(je) && A(je) ? " (hidden)" : ""}`, Pe = B({ item: je, label: be, kind: "image" });
          ze.push({ id: je.id, label: Pe.label, icon: Pe.icon, item: je, kind: "image" });
        });
      } else
        P().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const je = B(Ce);
          ze.push({ id: Ce.item.id, label: je.label, icon: je.icon, item: Ce.item, kind: Ce.kind });
        });
      const Ue = (X == null ? void 0 : X.id) || "", We = j ? { label: Me(j), icon: He.globe } : ze.find((Ce) => Ce.id === Ue) || ze[0];
      he = {
        label: "Selection",
        open: !1,
        disabled: ze.length <= 1,
        currentLabel: We.label,
        currentIcon: We.icon || null,
        items: ze.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === Ue
        }))
      };
    }
    const de = [], we = (ze, Ue, We, Ce, je) => {
      const ce = Te(Number(z[ze] || 0), We, Ce);
      de.push({
        key: ze,
        label: Ue,
        min: We,
        max: Ce,
        step: je,
        value: ce,
        displayValue: $i(ce),
        fillPct: Te((ce - We) / Math.max(1e-6, Ce - We) * 100, 0, 100),
        enabled: re && !c
      });
    }, Ie = [];
    if (j) {
      for (const [ze, Ue] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const We = ic(z[ze]);
        we(ze, Ue, -We, We, 0.01);
      }
      we("yaw_deg", "Yaw", -180, 180, 0.1), we("pitch_deg", "Pitch", -90, 90, 0.1), we("roll_deg", "Roll", -180, 180, 0.1), we("scale", "Scale", L0, ic(z.scale), 0.01), we("opacity", "Opacity", 0, 100, 1);
    } else if (F.length > 1)
      Ie.push(`Selected objects: ${F.length}`), Ie.push("Multi-selection supports z-order and delete.");
    else {
      const ze = J === "shot" || J === "frame";
      if (S)
        for (const [Ue, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = ic(z[Ue]);
          we(Ue, We, -Ce, Ce, 0.01);
        }
      we("yaw_deg", "Yaw", -180, 180, 0.1), we("pitch_deg", "Pitch", -90, 90, 0.1), we(J === "image" || g === "stickers" && !ze ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), we("hFOV_deg", "H FOV", 1, 179, 0.1), we("vFOV_deg", "V FOV", 1, 179, 0.1), ze && de.forEach((Ue) => {
        Ue.enabled = Ue.enabled && yC(Ue.key, { erp: ee() });
      }), G(X) && !ze && de.forEach((Ue) => {
        Ue.enabled = Ue.enabled && bC(Ue.key, { port: me(X) });
      }), u && !ze && we("opacity", "Opacity", 0, 100, 1);
    }
    const De = F.length > 1 ? null : j || X;
    v.sidePanel = xC({
      coverage: h.coverage,
      readOnly: c,
      selectionPicker: he,
      enabled: re,
      selectedKind: j ? "world" : J,
      selectedItems: F,
      params: de,
      notes: Ie,
      uiSettings: xe,
      normalizeCoverageValue: yn,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: _ && De && (De === j || G(De)) ? kC({
        layer: Et(De) ? De.origin.layer : null,
        editable: Et(De) && xa(De),
        locked: De.locked === !0,
        readOnly: c,
        placement: De.placement,
        override: Et(De) ? Xg(h.upstream, De.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Et(De) ? null : w(De)
      }) : null
    });
  }
  function Me(xe) {
    const ve = zm(xe);
    return Et(xe) ? `${yd(xe.origin.layer)} · ${ve}` : ve;
  }
  function Ae() {
    const { canUndo: xe, canRedo: ve } = R();
    Ai(v.toolButtons, "value", "undo", { disabled: !xe }), Ai(v.toolButtons, "value", "redo", { disabled: !ve });
  }
  return {
    connect(xe) {
      ({
        cameraPreviewShown: y,
        cameraShoots: H,
        getActiveCutoutShot: W,
        getBrushPresetIdForTool: O,
        getCutoutInspectorItems: P,
        getHistoryCapabilities: R,
        getList: Z,
        getSelected: q,
        getSelectedItems: ae,
        getSelectedKind: Se,
        getSelectionItemIcon: ge,
        getSelectionItemLabelData: B,
        hasCamera: _e,
        hasSpaceContent: pe,
        isActiveLassoTool: fe,
        isErpCamera: ee,
        isExternalSticker: me,
        isItemLocked: oe,
        isPaintCursorEnabled: C,
        isSceneSticker: G,
        isShotItem: N,
        isSpaceView: ue,
        isStickerHidden: A,
        leaveFrameView: E,
        portHandoffLanes: w,
        poseOf: M,
        selectedWorldSticker: le,
        setCanvasCursor: ye,
        syncCutoutShot: D,
        syncTimeline: b,
        syncVideoTransportVisibility: K,
        updateCursor: p,
        worldStickerEditable: m
      } = xe);
    },
    syncLookAtFrameButtonState: $,
    syncFloatingViewButtonState: Y,
    syncViewToggleState: se,
    syncFrameRollKnob: V,
    syncPaintUi: ne,
    syncSidePanelControls: k,
    updateSidePanel: U,
    inspectorTimed: ie,
    syncSidePanelModel: ke,
    syncUndoRedoButtons: Ae
  };
}
function oI(e) {
  const {
    editor: t,
    node: n,
    readOnly: r,
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
  let h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G;
  function N() {
    var F;
    if (!s || r) return;
    const ve = ((F = l.drag) == null ? void 0 : F.limit) ?? A();
    !l.drag && O.frame > ve - 1 && O.seek(ve - 1);
    const Q = l.selection, T = Q && p(Q.owner);
    if (Q) {
      const J = T ? x(Q) : [], L = I(Q.owner);
      Q.frames = Q.frames.filter((X) => X + L < ve && J.some((j) => T[j].keyframes.some((S) => S.frame === X))), Q.frames.length || (l.selection = null);
    }
    d.timeline = IC(o, {
      span: ve,
      portBarEnd: K,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? ue(),
      openRows: l.openRows,
      audio: V() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(n) !== null || Io(n, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!Li(n).scene && !ee(),
      upstream: G(),
      background: M() ? { end: K(o.background) } : null,
      // A 3D file still uploading is a 3D Sticker before its Source names it.
      loading3d: H()
    }), d.easing = l.selection && Y(l.selection.owner) ? EC(T, x(l.selection), l.selection.frames, I(l.selection.owner)) : null;
  }
  function ue() {
    return Om(o, { camera: a });
  }
  function A(ve = null) {
    var Q;
    return Fu(o, {
      bg: E(),
      port: _(),
      sceneItems: ee() ? 0 : ((Q = ae()) == null ? void 0 : Q.urls.length) ?? 0,
      upstream: me(ve),
      openClip: ve,
      camera: a
    });
  }
  function E() {
    return fe() ? null : w() ?? (Li(n).bg_media && !Io(n, ["bg_media"]) ? { frames: 1 } : null);
  }
  function w() {
    const ve = d.videoTransport;
    return ve.ready && ve.frameCount > 0 ? { video: !!fe() || Io(n, ["bg_media"]), frames: ve.frameCount, duration: Number(ve.duration || 0) } : null;
  }
  function M() {
    return i && !!Li(n).bg_media && !fe();
  }
  function le() {
    const ve = fe();
    return ve ? ve.clip ? xm(ve.clip.clip, ve.clip.fps, o.timeline.fps) : { start: 0, in: 0, duration: null } : M() ? o.background.clip : null;
  }
  function ye() {
    const ve = le();
    return ve ? Mm(ve) : null;
  }
  function D(ve) {
    const Q = le();
    if (!Q) return !0;
    const T = !!fe();
    return Mc(Q, ve, o.timeline.fps, T ? w() : E(), T || ee());
  }
  function b() {
    var ve;
    return ((ve = fe()) == null ? void 0 : ve.color) ?? o.bg_color;
  }
  function K(ve) {
    var T;
    if (ve === o.background) {
      const F = ve.clip.duration === null ? E() : null;
      return F != null && F.video || (F == null ? void 0 : F.frames) > 1 ? km(ve.clip, o.timeline.fps, F, ee()) : null;
    }
    if (((T = ve.source) == null ? void 0 : T.kind) !== "port" || ve.clip.duration !== null) return null;
    const Q = ve.origin ? oe(ve) : y(ve) ? _() : null;
    return Q ? Iu(ve.clip, o.timeline.fps, Q) : null;
  }
  function p(ve) {
    if (ve === "camera") return g() ? o.camera : null;
    if (ve === "scene") return i ? o.scene : null;
    if (ve === Fo) return M() ? o.background : null;
    const Q = C(ve);
    return Q ? Q.owner : ge(ve);
  }
  function m(ve) {
    var Q;
    return ((Q = C(ve)) == null ? void 0 : Q.editable) ?? !0;
  }
  function x(ve) {
    return ve.lane ? [ve.lane] : Ji(p(ve.owner));
  }
  function I(ve) {
    var T;
    if (ve === "camera") return 0;
    const Q = (T = p(ve)) == null ? void 0 : T.clip;
    return Q ? Q.start - Q.in : 0;
  }
  function $(ve) {
    return `${mi(ve, t.frame)}:${ve.start - ve.in}`;
  }
  function Y(ve) {
    var T;
    const Q = p(ve);
    return !!Q && Q.locked !== !0 && m(ve) && ((T = C(ve)) == null ? void 0 : T.part) !== "scene";
  }
  function se(ve) {
    const Q = Math.max(0, Math.round(ve));
    if (Q === t.frame) return;
    Se(), t.frame = Q, c.frame.value = Q, Se();
    const T = [t.selectedId, t.worldSelectedId];
    Z(), W(), T[0] !== t.selectedId || T[1] !== t.worldSelectedId ? pe() : v() && B(), _e(), q({ reason: ot.PLAYHEAD });
  }
  function V() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function ne(ve) {
    R(), O.seek(ve);
  }
  function k() {
    s && O.stop();
  }
  function U() {
    R(), O.toggle();
  }
  function ie() {
    Se(), W(), pe(), _e(), q();
  }
  function ke() {
    P(), h(), ie();
  }
  function Me() {
    const { selection: ve } = l;
    Y(ve.owner) && (k(), kS(p(ve.owner), x(ve), ve.frames, t.frame - I(ve.owner)), l.selection = null, ke());
  }
  function Ae(ve) {
    const Q = jr(ve);
    if (Q === null || Q === o.timeline.fps) return;
    k();
    const T = Math.round(t.frame * Q / o.timeline.fps);
    GS(o, Q), l.selection = null, O.seek(T), ke();
  }
  function xe() {
    const ve = f(n);
    ve !== null && ve !== o.timeline.fps && Ae(ve);
  }
  return {
    connect(ve) {
      ({
        commitAndRefreshNode: h,
        getPortMediaMeta: _,
        hasCamera: g,
        inspectorTimed: v,
        isExternalSticker: y,
        loading3dIds: H,
        markObjectVisualsDirty: W,
        playback: O,
        pushHistory: P,
        refreshModalVideoSource: R,
        releaseHiddenSelection: Z,
        requestDraw: q,
        sceneFiles: ae,
        syncCutoutShot: Se,
        stickerById: ge,
        syncSidePanelModel: B,
        updateSelectionMenu: _e,
        updateSidePanel: pe,
        upstreamBackground: fe,
        upstreamLinked: ee,
        upstreamOutput: me,
        upstreamPortMeta: oe,
        upstreamRow: C,
        upstreamTimelineLayers: G
      } = ve);
    },
    syncTimeline: N,
    timelineTimed: ue,
    timelineSpanFrames: A,
    backgroundShown: M,
    backgroundShowsAt: D,
    backgroundVideoPlace: ye,
    backgroundColor: b,
    portBarEnd: K,
    timelineOwner: p,
    selectedLanes: x,
    timelineOffset: I,
    clipView: $,
    timelineEditable: Y,
    rowEditable: m,
    setTimelineFrame: se,
    jumpTimelineTo: ne,
    stopTimelinePlayback: k,
    togglePlayback: U,
    refreshTimelineEdit: ie,
    commitTimelineEdit: ke,
    deleteSelectedKeyframes: Me,
    changeTimelineFps: Ae,
    applyVideoTimelineFps: xe
  };
}
function sI(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E;
  function w(M) {
    var le, ye;
    if (!(r || !o)) {
      if (M.type === "seek") {
        if (M.phase === "move") {
          s.scrubFrame = M.frame, t.request("seek");
          return;
        }
        t.cancel(), M.phase === "start" && y(), g.seek(M.frame);
        return;
      }
      if (M.type === "play") {
        G();
        return;
      }
      if (M.type === "mute") {
        N(), pe();
        return;
      }
      if (M.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? C()), s.selection = null, pe();
        return;
      }
      if (M.type === "restore-upstream-deleted" || M.type === "revert-upstream-layer") {
        const D = (ye = (le = a.timeline) == null ? void 0 : le.groups) == null ? void 0 : ye.find((K) => K.key === M.key), b = M.type === "restore-upstream-deleted" ? D == null ? void 0 : D.restore : D == null ? void 0 : D.revert;
        if (!b || b.disabled) return;
        M.type === "restore-upstream-deleted" ? P(M.key) : R(M.key), pe();
        return;
      }
      if (M.type === "toggle-row") {
        s.openRows.has(M.id) ? s.openRows.delete(M.id) : s.openRows.add(M.id), pe();
        return;
      }
      if (M.type === "toggle-visible") {
        if (!Z(M.id)) return;
        const D = E(M.id);
        if (M.id === X0) i.painting_visible = !i.painting_visible;
        else if ((D == null ? void 0 : D.part) === "painting") D.sceneState.painting_visible = !D.sceneState.painting_visible;
        else {
          const b = me(M.id);
          if (!b) return;
          b.visible = !b.visible;
        }
        W(), u();
        return;
      }
      if (M.type === "select-row") {
        const D = ge(M.id);
        if (D && !D.visible || M.id === "camera" && !l()) return;
        D && !mi(D.clip, n.frame) && _(D.clip.start), (D == null ? void 0 : D.placement) === "world" ? q(D.id) : M.id === "camera" ? Se(f()) : Se(h().find((b) => b.id === M.id) || null), _e(), s.selection = null, A(), ue(), O();
        return;
      }
      if (M.type === "select-keys") {
        const D = ee(M.owner), b = M.frames.map((m) => m - D), K = s.selection, p = (K == null ? void 0 : K.owner) === M.owner && K.lane === M.lane;
        if (M.additive && p) {
          const m = new Set(K.frames);
          for (const x of b)
            m.has(x) ? m.delete(x) : m.add(x);
          K.frames = [...m].sort((x, I) => x - I);
        } else
          s.selection = b.length ? { owner: M.owner, lane: M.lane, frames: b } : null;
        pe();
        return;
      }
      if (M.type === "move-keys") {
        const D = s.selection;
        if (!D || !fe(D.owner)) return;
        const b = me(D.owner), K = ae(D);
        if (M.phase === "start") {
          B(), s.drag = { keyframes: K.map((I) => structuredClone(b[I].keyframes)), frames: D.frames, limit: oe() };
          return;
        }
        const { drag: p } = s;
        if (!(p != null && p.keyframes)) return;
        K.forEach((I, $) => {
          b[I].keyframes = structuredClone(p.keyframes[$]);
        });
        const m = ee(D.owner), x = xS(b, K, p.frames, M.delta, -m, p.limit - 1 - m);
        if (D.frames = p.frames.map((I) => I + x), M.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, x ? u() : H();
        return;
      }
      if (M.type === "clip") {
        const D = me(M.id);
        if (!(D != null && D.clip) || D.locked || !Z(M.id)) return;
        if (M.phase === "start") {
          B();
          const { clip: x } = D, I = oe(), $ = x.duration === null ? v(D) ?? I : x.start + x.duration;
          s.drag = { clip: { ...x }, span: oe(x), limit: I, end: $ };
          return;
        }
        const { drag: b } = s;
        if (!(b != null && b.clip)) return;
        const K = b.clip, p = d(D.clip);
        if (D.clip = { ...K }, M.delta && M.mode === "move") {
          Ef(D.clip, Math.min(M.delta, Math.max(0, b.limit - 1 - K.start)));
          const x = oe() - b.limit;
          x > 0 && Ef(D.clip, -x);
        } else M.delta && M.mode === "start" ? NS(D.clip, Math.min(K.start + M.delta, Math.max(b.limit - 1, K.start))) : M.delta && AS(D.clip, Math.min(b.end + M.delta, Math.max(b.limit, b.end)), b.span);
        if (M.phase !== "end") {
          t.request("timeline"), d(D.clip) !== p && (t.request("view"), M.id === Fo && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, W();
        const m = JSON.stringify(D.clip) !== JSON.stringify(K);
        m && M.id === Fo && g.seek(n.frame), m ? u() : H();
        return;
      }
      if (M.type === "key-row") {
        if (M.owner === "scene" || M.owner === Fo || !fe(M.owner)) return;
        B(), SS(me(M.owner), n.frame - ee(M.owner)), u();
        return;
      }
      if (M.type === "fps") {
        const D = IS(M.fps);
        if (D === null || D === i.timeline.fps || a.timeline.fpsLocked) {
          pe();
          return;
        }
        c(D);
        return;
      }
      if (M.type === "length") {
        const D = ES(M.length);
        if (D === void 0 || D === i.timeline.length) {
          pe();
          return;
        }
        B(), i.timeline.length = D, u();
        return;
      }
      if (M.type === "easing") {
        const D = s.selection;
        if (!D || !fe(D.owner)) return;
        B(), PS(me(D.owner), ae(D), D.frames, M.easing), M.commit ? u() : H();
      }
    }
  }
  return {
    connect(M) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: h,
        jumpTimelineTo: _,
        playback: g,
        portBarEnd: v,
        refreshModalVideoSource: y,
        refreshTimelineEdit: H,
        releaseHiddenSelection: W,
        requestDraw: O,
        restoreUpstreamDeletedCommand: P,
        revertUpstreamLayerCommand: R,
        rowEditable: Z,
        selectWorldSticker: q,
        selectedLanes: ae,
        setSelectedItem: Se,
        stickerById: ge,
        stopTimelinePlayback: B,
        syncFloatingViewButtonState: _e,
        syncTimeline: pe,
        timelineEditable: fe,
        timelineOffset: ee,
        timelineOwner: me,
        timelineSpanFrames: oe,
        timelineTimed: C,
        togglePlayback: G,
        toggleVideoMuted: N,
        updateSelectionMenu: ue,
        updateSidePanel: A,
        upstreamRow: E
      } = M);
    },
    onTimelineAction: w
  };
}
function aI(e) {
  const {
    app: t,
    bgWidget: n,
    cameraV2: r,
    coverageWidget: i,
    node: o,
    presetWidget: s,
    readOnly: a,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, h, _, g, v;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = yn(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), H(), o.setDirtyCanvas(!0, !0));
  }
  function H() {
    var ae;
    if (a || (h(), g(), v(), l.coverage = yn(l.coverage), Hm(o, l.active), !c)) return;
    const Z = f(), q = Gm(o, Z, String(c.value ?? ""), { rebased: r });
    q !== null && (Z !== l && (l.id = Z.id), c.value = q, (ae = c.callback) == null || ae.call(c, q));
  }
  function W() {
    l.ui_settings = VA(l.ui_settings), a || H();
  }
  function O() {
    var Z;
    a || (H(), (Z = o.setDirtyCanvas) == null || Z.call(o, !0, !0));
  }
  function P() {
    a || d() && _().catch((Z) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", Z);
    });
  }
  function R(Z = {}) {
    var Se, ge, B, _e, pe, fe, ee, me, oe, C, G;
    const q = Z.syncPreview !== !1, ae = Z.syncGraph !== !1;
    q && ((B = (ge = (Se = Ag(o)) == null ? void 0 : Se.runtime) == null ? void 0 : ge.requestDraw) == null || B.call(ge), (fe = (pe = (_e = Fc(o)) == null ? void 0 : _e.dom) == null ? void 0 : pe.requestDraw) == null || fe.call(pe), (ee = o.setDirtyCanvas) == null || ee.call(o, !0, !1)), ae && ((oe = (me = o.graph) == null ? void 0 : me.setDirtyCanvas) == null || oe.call(me, !0, !0), (G = (C = t == null ? void 0 : t.canvas) == null ? void 0 : C.setDirty) == null || G.call(C, !0, !0));
  }
  return {
    connect(Z) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: h,
        syncPaintingLayerAsync: _,
        syncPortHandoff: g,
        syncUpstreamEdits: v
      } = Z);
    },
    apply: y,
    commitState: H,
    persistUiSettings: W,
    commitAndRefreshNode: O,
    triggerBackgroundPersistenceOnClose: P,
    syncCoverageChangeToNodePreviews: R
  };
}
function lI(e) {
  const {
    editor: t,
    readOnly: n,
    sceneV2: r,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b;
  function K(k, U, ie = "Clear") {
    return new Promise((ke) => {
      a.confirmDialog = {
        visible: !0,
        title: String(k || ""),
        text: String(U || ""),
        confirmLabel: String(ie || "Confirm"),
        resolve: ke
      };
    });
  }
  async function p() {
    var ie, ke;
    if (n || !await K(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = pi(null), ee();
    const U = d();
    if (s === "stickers")
      i.stickers = r ? i.stickers.filter((Me) => Me.placement === "world" || U.includes(Me)) : U, r || (i.assets = {}), t.selectedId = ((ie = U[0]) == null ? void 0 : ie.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((ke = U[0]) == null ? void 0 : ke.id) || null, oe();
    else {
      const Me = $S(i.shots, i.active.selected_shot_id);
      i.stickers = U, i.assets = {}, i.shots = Me.shots, t.selectedId = Me.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = Me.selectedShotId, !Me.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, oe();
    }
    C(), u(), D(), ye(), N();
  }
  async function m(k) {
    var Ae, xe, ve, Q;
    if (n) return;
    const U = k === "mask" ? "mask" : "paint", ie = U === "mask" ? "Mask" : "Paint", ke = H(U);
    if (!(!ke.length && !(((Ae = t.interaction) == null ? void 0 : Ae.kind) === "draw" && ((xe = t.interaction) == null ? void 0 : xe.layerKind) === U) || !await K(
      `Clear ${ie}`,
      `This will remove all ${U} strokes in the current node.`,
      `Clear ${ie}`
    ))) {
      if (((ve = t.interaction) == null ? void 0 : ve.kind) === "draw" && ((Q = t.interaction) == null ? void 0 : Q.layerKind) === U) {
        const T = _(t.interaction);
        T && t.paintEngine.cancelActiveStroke(T), t.interaction = null;
      }
      ke.length = 0, i.painting.raster_objects = W().filter((T) => String((T == null ? void 0 : T.layerKind) || "paint") !== U), U === "paint" && (y().length = 0), ee(), C(), u(), D(), ye(), le(), N();
    }
  }
  function x() {
    if (n) return;
    const k = O();
    if (!k || !ge(k) || R(k) || Et(k) || r && _e(k)) return;
    let U;
    r ? U = n_(k, Ko(i), v()) : (U = JSON.parse(JSON.stringify(k)), U.id = go("st"), U.yaw_deg = Ft((U.yaw_deg || 0) + 8), U.z_index = v()), i.stickers.push(U), i.active.selected_sticker_id = U.id, t.selectedId = U.id, t.selectedIds = [U.id], pe(), C(), u(), ye(), D(), N();
  }
  function I() {
    const k = E();
    return k ? (b(k) && (w(), Et(k) ? h([k]) : t_(i, k.id), c(), pe(), C(), u(), D(), ye(), M(), N()), !0) : !1;
  }
  function $() {
    var ke, Me, Ae, xe, ve;
    if (n) return;
    const k = P(), U = O();
    if (!U && k.length === 0 || k.some((Q) => Z(Q))) return;
    w();
    const ie = k.filter(Et);
    if (ie.length && (h(ie), pe()), k.length > 1 || ie.length) {
      const Q = new Set(k.filter((J) => B(J)).map((J) => String(J.actionGroupId || J.id || ""))), T = new Set(k.filter((J) => q(J)).map((J) => me(J.rasterObjectId || J.id || ""))), F = new Set(k.filter(ge).map((J) => String(J.id || "")));
      Q.size > 0 && (i.painting.paint.strokes = (Array.isArray((Me = (ke = i.painting) == null ? void 0 : ke.paint) == null ? void 0 : Me.strokes) ? i.painting.paint.strokes : []).filter((J) => !Q.has(String((J == null ? void 0 : J.actionGroupId) || ""))), i.painting.groups = y().filter((J) => !Q.has(String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || ""))), ee()), T.size > 0 && (i.painting.raster_objects = W().filter((J) => !T.has(String((J == null ? void 0 : J.id) || ""))), fe()), F.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((J) => F.has(String((J == null ? void 0 : J.id) || "")) ? R(J) ? (Se(J) || (J.visible = !1), !0) : !1 : !0), oe(), pe()), t.selectedId = null, t.selectedIds = [], C(), u(), D(), ye(), N();
      return;
    }
    if (B(U)) {
      const Q = String(U.actionGroupId || U.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((xe = (Ae = i.painting) == null ? void 0 : Ae.paint) == null ? void 0 : xe.strokes) ? i.painting.paint.strokes : []).filter((T) => String((T == null ? void 0 : T.actionGroupId) || "").trim() !== Q), i.painting.groups = y().filter((T) => String((T == null ? void 0 : T.actionGroupId) || (T == null ? void 0 : T.id) || "").trim() !== Q), ee(), t.selectedId = null, t.selectedIds = [], C(), u(), D(), ye(), N();
      return;
    }
    if (q(U)) {
      const Q = me(U.rasterObjectId || U.id || "");
      i.painting.raster_objects = W().filter((T) => String((T == null ? void 0 : T.id) || "").trim() !== Q), fe(), t.selectedId = null, t.selectedIds = [], C(), u(), D(), ye(), N();
      return;
    }
    if (o && ae(U)) {
      f();
      return;
    }
    if (s === "stickers" || ge(U)) {
      if (R(U)) {
        if (Se(U)) return;
        U.visible = !1, pe(), C(), u(), D(), ye(), N();
        return;
      }
      i.stickers = i.stickers.filter((Q) => Q.id !== U.id), oe(), pe(), t.selectedId = ((ve = g()[0]) == null ? void 0 : ve.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, C(), u(), D(), ye(), N();
      return;
    }
    l();
  }
  function Y(k, U) {
    n || (w(), k(U) && (G(), pe(), C(), u(), D(), ye(), N()));
  }
  function se(k) {
    Y(ue, k);
  }
  function V(k) {
    Y(A, k);
  }
  function ne() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", le(), D());
  }
  return {
    connect(k) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: h,
        getActivePaintTargetDescriptor: _,
        getList: g,
        getNextStickerZIndex: v,
        getPaintingGroupList: y,
        getPaintingLayerList: H,
        getRasterObjectList: W,
        getSelected: O,
        getSelectedItems: P,
        isExternalSticker: R,
        isItemLocked: Z,
        isRasterObjectItem: q,
        isShotItem: ae,
        isStickerHidden: Se,
        isStickerItem: ge,
        isStrokeGroupItem: B,
        isUploadingSticker: _e,
        markObjectVisualsDirty: pe,
        markPaintCompositeVisualsDirty: fe,
        markPaintStrokeVisualsDirty: ee,
        parseRasterObjectSelectionId: me,
        pruneUnusedAssets: oe,
        pushHistory: C,
        releaseHiddenSelection: G,
        requestDraw: N,
        restoreUpstreamDeleted: ue,
        revertUpstreamLayer: A,
        selectedWorldSticker: E,
        stopTimelinePlayback: w,
        syncFloatingViewButtonState: M,
        syncPaintUi: le,
        updateSelectionMenu: ye,
        updateSidePanel: D,
        worldStickerEditable: b
      } = k);
    },
    clearAll: p,
    clearPaintingLayer: m,
    duplicateSelected: x,
    deleteSelectedWorldSticker: I,
    deleteSelected: $,
    restoreUpstreamDeletedCommand: se,
    revertUpstreamLayerCommand: V,
    forceCursorTool: ne
  };
}
function cI(e) {
  const {
    api: t,
    canvas: n,
    dragCue: r,
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
  let _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue;
  const A = /* @__PURE__ */ new Set();
  let E = "";
  function w(T) {
    return c ? Fx(T == null ? void 0 : T.dataTransfer) : cd(T == null ? void 0 : T.dataTransfer);
  }
  function M(T) {
    const F = !!T;
    r.active !== F && (r.active = F, d.classList.toggle("drop-active", F));
  }
  function le() {
    const T = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      T.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function ye(T) {
    if (l || f !== "stickers" && f !== "cutout" || !Cn(T)) return;
    if (c) {
      C(), await se(T);
      return;
    }
    const F = go("asset"), J = Pi(a, `add:${F}`, async () => {
      try {
        const { image: L } = await po(T);
        s.set(F, L);
        const X = go("st");
        u.stickers.push({
          id: X,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: v(30, Number(L.naturalWidth || L.width || 1), Number(L.naturalHeight || L.height || 1)),
          rot_deg: 0,
          z_index: P()
        }), ee(u.stickers[u.stickers.length - 1]), O(), ue(), N(), B();
        const j = await ei(T, {
          fetchApi: (re, he) => t.fetchApi(re, he)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((re) => String((re == null ? void 0 : re.asset_id) || "") === F).length) return;
        u.assets[F] = j, le(), ge(), g(), ue(), N(), B();
      } catch (L) {
        delete u.assets[F], s.delete(F);
        const X = Array.isArray(u.stickers) ? u.stickers : [], j = X.filter((S) => String((S == null ? void 0 : S.asset_id) || "") === F);
        throw j.length && (u.stickers = X.filter((S) => String((S == null ? void 0 : S.asset_id) || "") !== F), j.some((S) => String((S == null ? void 0 : S.id) || "") === String(i.selectedId || "")) && ee(null), ue(), N(), B(), g()), L;
      }
    });
    try {
      await J;
    } catch {
    }
  }
  function D() {
    var T;
    l || f !== "stickers" && f !== "cutout" || (T = h == null ? void 0 : h.openImagePicker) == null || T.call(h, "add");
  }
  function b() {
    var T;
    l || !c || (T = h == null ? void 0 : h.openImagePicker) == null || T.call(h, "add-world", Ox);
  }
  async function K(T, F = null) {
    l || !c || (Cn(T) ? (C(), await se(T, "world")) : Na(T) && (C(), await m(T, p(F))));
  }
  function p(T) {
    const F = me(), J = H(), L = T && i.mode === "pano" ? T : null;
    return {
      view: F,
      eye: [...F.position],
      dir: fw(J, L, n.width, n.height),
      fovDeg: qm(F, n.width, n.height),
      minDistance: Math.max(R_, J.near * 2)
    };
  }
  async function m(T, F) {
    E = "";
    const J = g0(T);
    if (J) {
      E = J, B();
      return;
    }
    const L = Ko(u), X = ew(F.view, F.dir);
    u.stickers.push(Ff(L, { kind: "file", filename: "" }, X)), A.add(L), fe(L), O(), ue(), N(), G(), B();
    const j = Pi(a, `add:${L}`, async () => {
      try {
        const S = await Tx(T, {
          fetchApi: (he, de) => t.fetchApi(he, de)
        }), z = await _e(S);
        if (z.state !== "ready") throw new Error(z.error);
        const re = u.stickers.find((he) => he.id === L);
        if (!re) {
          A.delete(L);
          return;
        }
        re.source = S, x(re, X.position, F, z.box), ge(), g();
      } catch (S) {
        throw A.delete(L), E = String((S == null ? void 0 : S.message) || S), u.stickers = u.stickers.filter((z) => z.id !== L), i.selectedId === L && ee(null), i.worldSelectedId === L && _(), ge(), g(), S;
      } finally {
        ue(), N(), G(), B();
      }
    });
    try {
      await j;
    } catch {
    }
  }
  function x(T, F, J, L) {
    const X = T.position, j = !X.keyframes.length && X.value.every((re, he) => re === F[he]), S = z_(L);
    if (!j || !S) return;
    const z = Wn(T, i.frame);
    X.value = Jm(J.eye, J.dir, S, z, J.fovDeg, J.minDistance);
  }
  function I() {
    for (const T of [...A]) {
      const F = u.stickers.find((X) => X.id === T), J = F != null && F.source.filename ? W(F) : null, L = J && og(T, J.generation);
      !F || L && o.sceneBox(L) || !Wn(F, i.frame).active ? A.delete(T) : L && o.sceneItemError(L) && !/\b404\b/.test(o.sceneItemError(L)) && (A.delete(T), E = `Could not show ${F.source.filename}: ${o.sceneItemError(L)}`);
    }
    return E || (A.size ? "Loading 3D model…" : "");
  }
  function $() {
    return A;
  }
  function Y() {
    const T = { x: n.width / 2, y: n.height / 2 }, F = q() ? o.pick(H(), T.x, T.y, n.width, n.height) : null;
    return Q_(me(), F, y());
  }
  async function se(T, F = "sky") {
    E = "";
    const J = Ko(u), L = Pi(a, `add:${J}`, async () => {
      const { image: X } = await po(T), j = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: v(30, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1)),
        rot_deg: 0
      }, S = { kind: "file", filename: "" }, z = F === "world" ? Ff(J, S, Y()) : Lu(J, S, j, P());
      s.set(oe(z), X), u.stickers.push(z), F === "world" ? fe(J) : ee(z), O(), ue(), N(), B();
      try {
        const re = await ei(T, {
          fetchApi: (de, we) => t.fetchApi(de, we)
        }), he = u.stickers.find((de) => de.id === J);
        if (!he) return;
        he.source = No(re), s.set(oe(he), X), ge(), g();
      } catch (re) {
        throw u.stickers = u.stickers.filter((he) => he.id !== J), i.selectedId === J && ee(null), i.worldSelectedId === J && _(), ge(), g(), re;
      } finally {
        ue(), N(), B();
      }
    });
    try {
      await L;
    } catch {
    }
  }
  async function V(T, F) {
    const J = Pi(a, `replace:${F}:${go("asset")}`, async () => {
      const { image: L } = await po(T), X = await ei(T, {
        fetchApi: (S, z) => t.fetchApi(S, z)
      }), j = u.stickers.find((S) => S.id === F);
      if (j) {
        j.source = No(X), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const S of [j.size.value, ...j.size.keyframes.map((z) => z.value)])
          S.vFOV_deg = v(S.hFOV_deg, Number(L.naturalWidth || L.width || 1), Number(L.naturalHeight || L.height || 1));
        s.set(oe(j), L), Se(), ge(), g(), ue(), N(), B();
      }
    });
    try {
      await J;
    } catch {
    }
  }
  async function ne(T) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = R();
    if (!F || !ae(F) || Z(F) || Et(F) || !Cn(T)) return;
    if (c) {
      await V(T, F.id);
      return;
    }
    const J = String(F.id || ""), L = go("asset"), X = Pi(a, `replace:${J}:${L}`, async () => {
      var de;
      const j = (Array.isArray(u.stickers) ? u.stickers : []).find((we) => String((we == null ? void 0 : we.id) || "") === J) || null;
      if (!j || !ae(j) || Z(j)) return;
      const S = String(j.asset_id || ""), z = S ? Oo(((de = u.assets) == null ? void 0 : de[S]) || null) : null, re = Number(j.vFOV_deg || 0), he = j.crop && typeof j.crop == "object" ? { ...j.crop } : null;
      try {
        const { image: we } = await po(T);
        s.set(L, we), j.asset_id = L, j.vFOV_deg = v(
          Number(j.hFOV_deg || 30),
          Number(we.naturalWidth || we.width || 1),
          Number(we.naturalHeight || we.height || 1)
        ), j.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Se(), ue(), N(), B();
        const Ie = await ei(T, {
          fetchApi: (ze, Ue) => t.fetchApi(ze, Ue)
        }), De = (Array.isArray(u.stickers) ? u.stickers : []).find((ze) => String((ze == null ? void 0 : ze.id) || "") === J) || null;
        if (!De || String(De.asset_id || "") !== L) return;
        u.assets[L] = Ie, le(), ge(), g(), ue(), N(), B();
      } catch (we) {
        delete u.assets[L], s.delete(L);
        const Ie = (Array.isArray(u.stickers) ? u.stickers : []).find((De) => String((De == null ? void 0 : De.id) || "") === J) || null;
        throw Ie && String(Ie.asset_id || "") === L && (S && z && (u.assets[S] = z), Ie.asset_id = S, Ie.vFOV_deg = re, Ie.crop = he ? { ...he } : null), Se(), g(), ue(), N(), B(), we;
      }
    });
    try {
      await X;
    } catch {
    }
  }
  function k() {
    var F;
    if (l) return;
    const T = R();
    !T || !ae(T) || Z(T) || Et(T) || (F = h == null ? void 0 : h.openImagePicker) == null || F.call(h, "replace");
  }
  async function U() {
    if (l || f !== "stickers") return;
    if (c) {
      await ie();
      return;
    }
    const T = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(T).filter(([, L]) => {
      const X = String((L == null ? void 0 : L.type) || "").toLowerCase(), j = String((L == null ? void 0 : L.value) || "");
      return X === "dataurl" && j.startsWith("data:image");
    });
    if (!F.length) return;
    let J = !1;
    for (const [L, X] of F)
      try {
        const j = String((X == null ? void 0 : X.value) || "");
        if (!j) continue;
        const S = await fetch(j).then((we) => we.blob()), z = String(S.type || "image/png").split("/")[1] || "png", re = String((X == null ? void 0 : X.name) || `${L}.${z}`), he = new File([S], re, { type: S.type || "image/png" }), de = await ei(he, {
          fetchApi: (we, Ie) => t.fetchApi(we, Ie)
        });
        u.assets[L] = {
          ...de,
          w: Number((X == null ? void 0 : X.w) || 0),
          h: Number((X == null ? void 0 : X.h) || 0)
        }, J = !0;
      } catch {
      }
    J && (g(), B());
  }
  async function ie() {
    let T = !1;
    for (const F of u.stickers) {
      const J = F.source.data_url;
      if (J)
        try {
          const L = await fetch(J).then((z) => z.blob()), X = String(L.type || "image/png").split("/")[1] || "png", j = new File([L], `${F.id}.${X}`, { type: L.type || "image/png" }), S = await ei(j, {
            fetchApi: (z, re) => t.fetchApi(z, re)
          });
          F.source = No(S), T = !0;
        } catch {
        }
    }
    T && (g(), B());
  }
  function ke(T) {
    f !== "stickers" && f !== "cutout" || l || (T.preventDefault(), M(!0));
  }
  function Me(T) {
    var X;
    if (f !== "stickers" && f !== "cutout" || l) return;
    T.preventDefault(), T.stopPropagation(), r.depth = 0, M(!1);
    const F = Array.from(((X = T.dataTransfer) == null ? void 0 : X.files) || []), J = F.find((j) => Cn(j));
    if (J) {
      ye(J);
      return;
    }
    const L = c ? F.find((j) => Na(j)) : null;
    L && K(L, pe(T));
  }
  function Ae(T) {
    f !== "stickers" && f !== "cutout" || l || w(T) && (r.depth += 1, M(!0), T.preventDefault());
  }
  function xe(T) {
    f !== "stickers" && f !== "cutout" || l || (!r.active && w(T) && M(!0), r.active && T.preventDefault());
  }
  function ve(T) {
    if (f !== "stickers" && f !== "cutout" || l || !r.active) return;
    r.depth = Math.max(0, r.depth - 1);
    const F = Number(T.clientX) <= 0 && Number(T.clientY) <= 0;
    (r.depth === 0 || F) && M(!1);
  }
  function Q(T) {
    f !== "stickers" && f !== "cutout" || l || (r.depth = 0, M(!1), w(T) && T.preventDefault());
  }
  return {
    connect(T) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: g,
        computeStickerVFov: v,
        contentSphere: y,
        currentSpaceCamera: H,
        file3dEditorFile: W,
        forceCursorTool: O,
        getNextStickerZIndex: P,
        getSelected: R,
        isExternalSticker: Z,
        isSpaceView: q,
        isStickerItem: ae,
        markObjectVisualsDirty: Se,
        pushHistory: ge,
        requestDraw: B,
        requestFile3d: _e,
        screenPos: pe,
        selectWorldSticker: fe,
        setSelectedItem: ee,
        spaceViewState: me,
        stickerImageKey: oe,
        stopTimelinePlayback: C,
        syncTimeline: G,
        updateSelectionMenu: N,
        updateSidePanel: ue
      } = T);
    },
    addImageStickerFromFile: ye,
    addImageSticker: D,
    addToWorld: b,
    addWorldStickerFromFile: K,
    file3dImportNotice: I,
    loading3dIds: $,
    replaceSelectedImageFromFile: ne,
    replaceSelectedImage: k,
    migrateLegacyEmbeddedAssets: U,
    pruneUnusedAssets: le,
    setDropCue: M,
    onCanvasDragOver: ke,
    onCanvasDrop: Me,
    onWindowDragEnter: Ae,
    onWindowDragOver: xe,
    onWindowDragLeave: ve,
    onWindowDrop: Q
  };
}
function uI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
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
    uiState: _
  } = e;
  let g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D = o;
  function b(F, J) {
    var j;
    const L = (j = P().space) == null ? void 0 : j.gizmo;
    if (ge() && L && ye("hover", J) !== null && ye("down", J))
      return r.interaction = { kind: "world_gizmo", camera: !0, mode: L.mode, start: L.transform, base: O(), changed: !1 }, n.setPointerCapture(F.pointerId), w(J), !0;
    const X = cg(O(), v(oe()));
    return lw(W(), X, J, n.width, n.height) ? (ge() || (me(U()), le(), M(), fe()), r.interaction = { kind: "world_select" }, n.setPointerCapture(F.pointerId), !0) : !1;
  }
  function K() {
    if (s || h !== "cutout") return;
    const F = U();
    if (F) {
      me(F), r.mode = "pano", E(Ft(Number(F.yaw_deg || 0)), Te(Number(F.pitch_deg || 0), -89.9, 89.9)), le(), M(), fe({ cause: "cutout_frame" });
      return;
    }
    const J = Jh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ft(Number(r.viewYaw || 0)),
      pitchDeg: Number(r.viewPitch || 0),
      viewFovDeg: Number(r.viewFov || 90)
    });
    d.shots = [J], me(J), R(), r.mode = "pano", pe(), H(), le(), M(), fe({ cause: "cutout_frame" });
  }
  function p() {
    s || !u || q() || (G(), d.camera = US(C()), ne(), me(U()), R(), pe(), H(), le(), M(), fe({ cause: "cutout_frame" }));
  }
  function m() {
    G(), d.camera = null, me(null), ne(), pe(), H(), le(), M(), fe({ cause: "cutout_frame" });
  }
  function x(F, J) {
    u && B(F) && (d.camera.projection = J === Bi ? "erp" : "perspective", J === Bi) || Y(F, J);
  }
  function I() {
    s || h !== "cutout" || (d.shots = [], r.selectedId = null, r.selectedIds = [], r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, d.active.selected_shot_id = null, pe(), H(), le(), M(), fe());
  }
  function $(F, J) {
    const L = a.frameSafeRect;
    if (!F || !L || r.mode !== "frame") return !1;
    const X = qc * ui(L, F), j = _u(Su(L, J), X);
    return F.hFOV_deg = j.hFOV_deg, F.vFOV_deg = j.vFOV_deg, !0;
  }
  function Y(F, J) {
    if (!F || F.locked === !0) return;
    const L = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, X = (() => {
      const re = String(F.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(re)) {
        const [we, Ie] = re.split(":").map((De) => Number(De));
        if (Number.isFinite(we) && Number.isFinite(Ie)) return we >= Ie;
      }
      const he = Number(F.hFOV_deg || 64), de = Number(F.vFOV_deg || 40);
      return Math.abs(he - de) > 1e-6 ? he >= de : hi(F) >= 1;
    })();
    let [j, S] = L[String(J)] || L["1:1"];
    j >= S !== X && ([j, S] = [S, j]);
    const z = j / S;
    if (!$(F, z)) {
      const re = Te(Number(F.vFOV_deg || 40), 1, 179);
      F.vFOV_deg = re, F.hFOV_deg = Rs(re, z);
    }
    F.aspect_id = `${j}:${S}`;
  }
  function se(F, J, L) {
    if (!F || F.locked === !0) return !1;
    const X = Xo(J, L);
    if (!X) return !1;
    const j = X.ratio;
    if (!$(F, j)) {
      const S = Te(Number(F.vFOV_deg || 40), 1, 179);
      F.vFOV_deg = S, F.hFOV_deg = Rs(S, j);
    }
    return F.aspect_id = X.label, !0;
  }
  function V(F) {
    if (!F || F.locked === !0) return;
    const J = String(F.aspect_id || "").trim(), L = $r(F), X = L.tanHalfX / Math.max(1e-12, L.tanHalfY), j = 1 / Math.max(1e-12, X);
    if (!$(F, j)) {
      const S = Te(Number(F.vFOV_deg || 60), 1, 179);
      F.vFOV_deg = S, F.hFOV_deg = Rs(S, j);
    }
    if (/^\d+:\d+$/.test(J)) {
      const [S, z] = J.split(":");
      F.aspect_id = `${z}:${S}`;
    } else
      F.aspect_id = is(F);
  }
  function ne(F = !0) {
    var X, j;
    if (!t) return;
    const J = D;
    if (!y()) {
      D = null, (X = d.shots) != null && X.length && (d.shots = []), J && k(J, null);
      return;
    }
    const L = (j = d.shots) == null ? void 0 : j[0];
    F && L && D && YS(d.camera, r.frame, L, D), D = $m(d.camera, r.frame), L ? Object.assign(L, D, { position: [...D.position] }) : d.shots = [{ ...D, position: [...D.position] }], J || k(null, D);
  }
  function k(F, J) {
    var S, z;
    !J && r.mode === "frame" && _e(F);
    const L = (J == null ? void 0 : J.position) ?? [0, 0, 0];
    if (((z = (S = r.viewTransition) == null ? void 0 : S.end) == null ? void 0 : z.mode) === "3dof") {
      A({ ...C(), position: L }, r.viewTransition.end);
      return;
    }
    if (r.mode !== "pano" || r.spaceMode !== "3dof" || !ae()) return;
    const X = (F == null ? void 0 : F.position) ?? [0, 0, 0];
    if (X.every((re, he) => re === L[he])) return;
    const j = { ...C(), position: X };
    g({ mode: "6dof", position: X, moved: !0 }), r.viewDistance = j.distance, A({ ...j, position: L }, { mode: "3dof", moved: !1 });
  }
  function U() {
    if (!l) return null;
    const F = Array.isArray(d.shots) ? d.shots : [];
    if (!F.length) return null;
    const J = String(d.active.selected_shot_id || "");
    return F.find((L) => String((L == null ? void 0 : L.id) || "") === J) || F[0] || null;
  }
  function ie(F, J, L = {}) {
    var S;
    if ((F == null ? void 0 : F.kind) !== "roll_frame" || !F.shot) return;
    F.accumulatedRad += Yh(J, F.lastAngle), F.lastAngle = J;
    const X = qh(F.start.roll_deg, F.accumulatedRad, {
      shiftKey: L.shiftKey,
      altKey: F.altStarted ? !1 : L.altKey
    });
    F.shot.roll_deg = X, F.changed = F.changed || Math.abs(F.accumulatedRad) > 1e-9;
    const j = (((S = _.sidePanel) == null ? void 0 : S.params) || []).find((z) => z.key === "roll_deg");
    j && (j.value = X, j.displayValue = $i(X), j.fillPct = (X + 180) / 360 * 100), N(), Ae(F), fe({ localOnly: !0 });
  }
  function ke(F, J, L = {}) {
    var S;
    if ((F == null ? void 0 : F.kind) !== "roll_frame" || !F.shot || !F.rollGesture) return;
    const X = i0(F.rollGesture, J, L);
    if (!X) return;
    F.rollGesture = X.gesture, F.center = X.gesture.center, F.lastAngle = X.gesture.lastAngle, F.accumulatedRad = X.gesture.accumulatedRad, F.shot.roll_deg = X.rollDeg, F.changed = F.changed || Math.abs(X.gesture.accumulatedRad) > 1e-9;
    const j = (((S = _.sidePanel) == null ? void 0 : S.params) || []).find((z) => z.key === "roll_deg");
    j && (j.value = X.rollDeg, j.displayValue = $i(X.rollDeg), j.fillPct = (X.rollDeg + 180) / 360 * 100), N(), Ae(F), fe({ localOnly: !0 });
  }
  function Me(F, J) {
    const L = ee(F);
    return Math.atan2(L.y - J.y, L.x - J.x);
  }
  function Ae(F) {
    var z, re;
    if ((F == null ? void 0 : F.kind) !== "roll_frame" || !F.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const J = Z(F.shot), L = (z = n.getBoundingClientRect) == null ? void 0 : z.call(n), X = (re = c.getBoundingClientRect) == null ? void 0 : re.call(c);
    if (!J || !L || !X || n.width <= 0 || n.height <= 0) return;
    const j = L.width / n.width, S = L.height / n.height;
    _.tooltip.text = `${$i(F.shot.roll_deg)}°`, _.tooltip.left = L.left - X.left + (J.x + J.w * 0.5) * j, _.tooltip.top = L.top - X.top + (J.y + J.h * 0.5) * S + 12, _.tooltip.variant = "roll", _.tooltip.visible = !0;
  }
  function xe(F) {
    var S;
    if (F.button !== 0 || s || r.mode !== "frame") return;
    const J = U();
    if (!J || J.locked === !0) return;
    const L = Z(J);
    if (!L) return;
    const X = { x: L.x + L.w * 0.5, y: L.y + L.h * 0.5 }, j = Me(F, X);
    r.interaction = {
      kind: "roll_frame",
      shot: J,
      center: X,
      lastAngle: j,
      accumulatedRad: 0,
      start: { roll_deg: Number(J.roll_deg ?? J.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (S = i.setPointerCapture) == null || S.call(i, F.pointerId), F.preventDefault(), N(), Ae(r.interaction), fe({ localOnly: !0 });
  }
  function ve(F) {
    var J;
    ((J = r.interaction) == null ? void 0 : J.kind) !== "roll_frame" || r.interaction.source !== "knob" || ie(
      r.interaction,
      Me(F, r.interaction.center),
      F
    );
  }
  function Q() {
    const F = r.interaction;
    (F == null ? void 0 : F.kind) !== "roll_frame" || F.source !== "knob" || (F.changed && (pe(), H(), le()), r.interaction = null, Se(), ue(), N(), fe());
  }
  function T(F) {
    const J = r.mode === "frame" && !s ? U() : null;
    !J || J.locked === !0 || Math.abs(Number(J.roll_deg ?? J.rot_deg ?? 0)) <= 1e-9 || (J.roll_deg = 0, pe(), H(), le(), N(), fe(), F.preventDefault());
  }
  return {
    connect(F) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: v,
        cameraShoots: y,
        commitAndRefreshNode: H,
        currentSpaceCamera: W,
        cutoutCamera: O,
        editorViewInput: P,
        forceCursorTool: R,
        getFrameViewRect: Z,
        hasCamera: q,
        hasSpaceContent: ae,
        hideTooltip: Se,
        isCameraSelected: ge,
        isShotItem: B,
        leaveFrameView: _e,
        pushHistory: pe,
        requestDraw: fe,
        screenPos: ee,
        setSelectedItem: me,
        spaceScale: oe,
        spaceViewState: C,
        stopTimelinePlayback: G,
        syncFrameRollKnob: N,
        syncViewToggleState: ue,
        transitionView: A,
        turnViewTo: E,
        updateCursor: w,
        updateSelectionMenu: M,
        updateSidePanel: le,
        worldGizmoPointer: ye
      } = F);
    },
    addCutoutFrame: K,
    addStudioCamera: p,
    deleteStudioCamera: m,
    setShotAspect: x,
    clearCutoutFrame: I,
    applyCutoutAspectCustom: se,
    rotateCutoutAspect90: V,
    syncCutoutShot: ne,
    getActiveCutoutShot: U,
    startCameraPress: b,
    applySharedRollInteractionPoint: ke,
    onFrameRollKnobPointerDown: xe,
    onFrameRollKnobPointerMove: ve,
    finishKnobRoll: Q,
    onFrameRollKnobDoubleClick: T
  };
}
function dI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
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
    videoTransportEl: _
  } = e;
  let g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee = null, me = !1;
  function oe(k) {
    if (r.mode = "pano", !k) return;
    v();
    const U = ge().distance;
    r.viewYaw = Ft(k.yaw_deg), r.viewPitch = Te(k.pitch_deg, -89.9, 89.9), r.viewFov = Te(k.hFOV_deg, 35, 140), r.spaceMode === "6dof" && g({ mode: "6dof", position: [...k.position], moved: !0 }), r.viewDistance = U, d.backgroundDirty = !0;
  }
  function C() {
    var X, j, S, z, re;
    if (!n) return null;
    const k = (X = n.getBoundingClientRect) == null ? void 0 : X.call(n), U = Number((k == null ? void 0 : k.width) || 0) > 0 ? n.width / k.width : 1, ie = Number((k == null ? void 0 : k.height) || 0) > 0 ? n.height / k.height : 1;
    d.frameCanvasScale = Math.min(U, ie);
    let ke = 24, Me = 24;
    const Ae = Math.max(ke + 1, n.width - 24);
    let xe = Math.max(Me + 1, n.height - 24);
    const ve = (j = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : j.call(f), Q = (S = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : S.call(a);
    let T = 24;
    ve && k && ve.width > 0 && ve.height > 0 && (T = Math.max(T, (ve.right - k.left) * U + Mp)), Q && k && Q.width > 0 && Q.height > 0 && ((z = h.frameRail) == null ? void 0 : z.visible) === !0 && (T = Math.max(T, (k.right - Q.left) * U + Mp)), ke = Math.max(ke, T);
    const F = Math.min(Ae, n.width - T);
    let J = 24;
    const L = (re = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : re.call(s);
    if (L && k && L.width > 0 && L.height > 0 && (J = Math.max(J, (L.bottom - k.top) * ie + Zl)), [l, _].forEach((he) => {
      var Ie;
      if (!he || !k) return;
      const de = getComputedStyle(he);
      if (de.display === "none" || de.visibility === "hidden" || Number(de.opacity) <= 0) return;
      const we = (Ie = he.getBoundingClientRect) == null ? void 0 : Ie.call(he);
      !we || we.width <= 0 || we.height <= 0 || (J = Math.max(J, (k.bottom - we.top) * ie + Zl));
    }), o && k) {
      const he = getComputedStyle(o);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (J = Math.max(J, (SA + Zl) * ie));
    }
    return Me = Math.max(Me, J), xe = Math.max(Me + 1, Math.min(xe, n.height - J)), {
      x: ke,
      y: Me,
      w: Math.max(1, F - ke),
      h: Math.max(1, xe - Me)
    };
  }
  function G(k = W()) {
    if (!k || !n) return null;
    const U = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, n.width - 48),
      h: Math.max(1, n.height - 48)
    };
    return O1(U, k, qc * ui(U, k));
  }
  function N(k = W()) {
    const U = G(k);
    return U ? { x: U.x, y: U.y, w: U.w, h: U.h } : null;
  }
  function ue() {
    return u && !!W();
  }
  function A(k, U) {
    const ie = W();
    if (!ie || ie.locked === !0) return !1;
    const ke = Number(U) > 0, Me = Qh(ie, U);
    if (!Me) return !1;
    if (ke) {
      const Ae = qc * ui(
        d.frameSafeRect || { w: n.width, h: n.height },
        Me
      ), xe = wu({ width: n.width, height: n.height }, Ae);
      if (xe.halfW < n.width * 0.5 - 1e-6 || xe.halfH < n.height * 0.5 - 1e-6) return !1;
    }
    return ie.hFOV_deg = Me.hFOV_deg, ie.vFOV_deg = Me.vFOV_deg, E(), fe(), !0;
  }
  function E() {
    r.frameWheelChanged = !0, r.frameWheelCommitTimer && window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = window.setTimeout(() => {
      r.frameWheelCommitTimer = 0, r.frameWheelChanged && (r.frameWheelChanged = !1, Z(), y(), fe());
    }, 180);
  }
  function w() {
    return t && r.mode === "frame" && O();
  }
  function M() {
    const k = W(), U = G(k);
    return k && U ? fg(k, U, { width: n.width, height: n.height }) : null;
  }
  function le() {
    var k;
    return ((k = H()) == null ? void 0 : k.radius) || Gn;
  }
  function ye(k) {
    const { position: U, yaw_deg: ie, pitch_deg: ke, roll_deg: Me, hFOV_deg: Ae } = k.shot;
    return { position: U, yaw_deg: ie, pitch_deg: ke, roll_deg: Me, hFOV_deg: Ae, distance: le() };
  }
  function D(k, U) {
    const { rect: ie } = k;
    return i.pickSurface(ae(k.shot), U.x - ie.x, U.y - ie.y, ie.w, ie.h);
  }
  function b(k, U, ie) {
    return Nc(U, D(k, ie), null, Se());
  }
  function K(k) {
    return JSON.stringify([ye(k), k.rect]);
  }
  function p(k) {
    const U = W();
    U.position = [...k.position], U.yaw_deg = k.yaw_deg, U.pitch_deg = k.pitch_deg;
  }
  function m(k, U) {
    const ie = W();
    !ie || c || ie.locked === !0 || (r.interaction = {
      kind: "pan_frame",
      shot: ie,
      last: k,
      start: { yaw_deg: Number(ie.yaw_deg || 0), pitch_deg: Number(ie.pitch_deg || 0) },
      changed: !1
    }, pe(k), n.setPointerCapture(U));
  }
  function x(k, U, ie) {
    const ke = M();
    if (!ke || c) return;
    const Me = ye(ke);
    r.interaction = k === "orbit" ? { kind: "frame_orbit", last: U, pivot: b(ke, Me, U), changed: !1 } : { kind: "frame_pan", last: U, depth: Bm(Me, Se()), changed: !1 }, pe(U), n.setPointerCapture(ie);
  }
  function I(k, U) {
    const ie = M();
    if (!ie) return;
    const ke = ye(ie), Me = U.x - k.last.x, Ae = U.y - k.last.y;
    p(k.kind === "frame_pan" ? Qm(ke, Me, Ae, ie.rect.w, ie.rect.h, k.depth) : Zm(ke, Me, Ae, n.height, k.pivot)), k.changed = k.changed || Me !== 0 || Ae !== 0, k.last = U, q({ localOnly: !0, cause: "frame_view" });
  }
  function $(k, U) {
    const ie = M();
    if (!ie || c) return;
    const ke = ye(ie), Me = performance.now(), Ae = { x: k.x, y: k.y, time: Me, key: i.contentRevision(), view: K(ie) };
    if (!Ym(ee, Ae)) {
      const xe = D(ie, k);
      ee = { ...Ae, cost: performance.now() - Me, hit: xe };
    }
    p(eg(ke, Nc(ke, ee.hit, null, Se()), U, Se())), ee.view = K(M() ?? ie), ee.wheelTime = Me, E(), fe(), q({ localOnly: !0, cause: "frame_view" });
  }
  function Y(k, U) {
    const ie = W();
    if (!ie || c || ie.locked === !0) return !1;
    const ke = Q0(ie, k, U);
    return ke === ie ? !1 : (B(), ie.position = ke.position, me = !0, !0);
  }
  function se() {
    return me ? (me = !1, Z(), y(), fe(), !0) : !1;
  }
  function V() {
    return r.frameWheelCommitTimer && (window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = 0), r.frameWheelChanged ? (r.frameWheelChanged = !1, Z(), y(), fe(), !0) : !1;
  }
  function ne() {
    const k = r.interaction;
    if (!(k != null && k.shot) || !k.start || k.kind !== "pan_frame" && k.kind !== "roll_frame") return !1;
    const U = k.kind === "roll_frame";
    return k.kind === "pan_frame" ? (k.shot.yaw_deg = k.start.yaw_deg, k.shot.pitch_deg = k.start.pitch_deg) : k.shot.roll_deg = k.start.roll_deg, U && P(), r.interaction = null, R(), _e(), fe(), pe(r.pointerPos), q({ localOnly: !0 }), !0;
  }
  return {
    connect(k) {
      ({
        applySpaceMode: g,
        cancelViewTransition: v,
        commitAndRefreshNode: y,
        contentSphere: H,
        getActiveCutoutShot: W,
        hasSpaceContent: O,
        hideTooltip: P,
        invalidateLivePaintPreviewCaches: R,
        pushHistory: Z,
        requestDraw: q,
        shotViewCamera: ae,
        spaceScale: Se,
        spaceViewState: ge,
        stopTimelinePlayback: B,
        syncViewToggleState: _e,
        updateCursor: pe,
        updateSidePanel: fe
      } = k);
    },
    leaveFrameView: oe,
    measureFrameSafeRect: C,
    getFrameViewLayout: G,
    getFrameViewRect: N,
    supportsFramePainting: ue,
    zoomFrameViewAt: A,
    isFreeFrameView: w,
    frameContext: M,
    frameViewDistance: le,
    frameSpaceView: ye,
    frameTarget: b,
    startPanFrame: m,
    startFrameDrag: x,
    dragFrame: I,
    zoomFrameAt: $,
    flushFrameWheelCommit: V,
    cancelFrameCameraGesture: ne,
    moveFrameByKeys: Y,
    endFrameKeyMove: se
  };
}
function fI(e) {
  const {
    editor: t,
    paintCursorEl: n,
    paintSizePreviewEl: r,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q = 0;
  function ae() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function Se() {
    return String(ae() || "") === "lasso_fill";
  }
  function ge() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function B(b, K) {
    const p = Number(K || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, p / 2048)
    };
  }
  function _e(b) {
    const K = String(b || "").trim();
    return K === "eraser" ? fr : pn[K] ? K : t.activeBrushPresetId || fr;
  }
  function pe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (ge() || Z());
  }
  function fe() {
    var b;
    return pe() && ((b = t.pointerPos) == null ? void 0 : b.inside) === !0;
  }
  function ee(b, K = !0) {
    const p = Number((b == null ? void 0 : b.x) || 0), m = Number((b == null ? void 0 : b.y) || 0), x = K !== !1, I = t.pointerPos || { x: 0, y: 0, inside: !1 }, $ = I.inside !== x || Math.abs(I.x - p) > 0.01 || Math.abs(I.y - m) > 0.01;
    return t.pointerPos = { x: p, y: m, inside: x }, $;
  }
  function me() {
    var ne, k;
    if (!fe()) return null;
    const b = t.primaryTool === "mask" ? "mask" : "paint", K = b === "mask" ? t.maskTool : t.paintTool, p = _e(K), m = pn[p] || pn[fr], x = Number(t.brushSizes[p] ?? 10), I = Math.max(1, x) * Math.max(0.1, Number(m.sizeScale ?? 1)), $ = Math.max(3, I * 0.5), Y = b === "mask" ? K === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : K === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Sn(t.paintColor), se = b === "mask" ? K === "lasso_fill" ? 0.18 : 0.2 : K === "eraser" ? 0.06 : Te(Math.max(0.16, Number(Y.a ?? 1) * 0.3), 0.16, 0.52), V = b === "mask" ? 0.95 : K === "eraser" ? 0.75 : Te(Math.max(0.46, Number(Y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: b,
      toolKind: K,
      preset: m,
      radius: $,
      fillStyle: Qn(Y, se),
      strokeStyle: Qn(Y, V),
      x: Number(((ne = t.pointerPos) == null ? void 0 : ne.x) || 0),
      y: Number(((k = t.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: $,
      hotspotY: $
    };
  }
  function oe() {
    var U, ie, ke;
    const b = me();
    if (!n) return;
    if (!b) {
      n.style.display = "none";
      return;
    }
    let K = b.radius * 2, p = b.radius * 2, m = "999px", x = 0, I = b.fillStyle, $ = "1px solid rgba(222, 222, 222, 0.72)", Y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const se = "rgba(222, 222, 222, 0.72)", V = "rgba(52, 52, 52, 0.72)";
    let ne = Number(b.hotspotX ?? K * 0.5), k = Number(b.hotspotY ?? p * 0.5);
    if (b.toolKind === "lasso_fill")
      K = Fa, p = Fa, m = "0", $ = "0", Y = "none", ne = kA, k = xA, I = IA(b.fillStyle, V, se);
    else if (b.layerKind === "mask")
      I = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (b.toolKind === "marker") {
      const Me = Math.max(1, Number(((U = b.preset) == null ? void 0 : U.aspect) ?? 1));
      K = Math.max(10, b.radius * 2 * Me), p = Math.max(6, b.radius * 2), m = `${Math.min(6, p * 0.42)}px`, x = Number(((ke = (ie = b.preset) == null ? void 0 : ie.angle) == null ? void 0 : ke.value) || 0) * di;
    } else b.toolKind === "brush" ? I = `radial-gradient(circle at 50% 50%, ${b.strokeStyle} 0%, ${b.fillStyle} 45%, rgba(0,0,0,0) 100%)` : b.toolKind === "eraser" && (I = "rgba(255,255,255,0.14)");
    n.style.display = "block", n.style.width = `${Math.round(K)}px`, n.style.height = `${Math.round(p)}px`, n.style.borderRadius = m, n.style.border = $, n.style.boxShadow = Y, n.style.background = I, n.style.backgroundRepeat = "no-repeat", n.style.backgroundPosition = "center", n.style.backgroundSize = "contain", n.style.transform = `translate(${Math.round(b.x - ne)}px, ${Math.round(b.y - k)}px) rotate(${x}deg)`;
  }
  function C() {
    var ve;
    if (!r || !i) return;
    const b = t.primaryTool === "mask" ? "mask" : "paint", K = b === "mask" ? t.maskTool : t.paintTool;
    if (K === "lasso_fill") return;
    const p = _e(K), m = pn[p] || pn[fr], x = Number(t.brushSizes[p] ?? 10), I = Math.max(1, x) * Math.max(0.1, Number(m.sizeScale ?? 1)), $ = Math.max(6, I * 0.5), Y = K === "eraser", se = b === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : Y ? { r: 1, g: 1, b: 1, a: 0.22 } : Sn(t.paintColor), V = b === "mask" ? Qn(se, 0.22) : Y ? "rgba(255,255,255,0.14)" : Qn(se, Te(Math.max(0.18, Number(se.a ?? 1) * 0.34), 0.18, 0.56)), ne = b === "mask" ? Qn(se, 0.96) : Y ? "rgba(255,255,255,0.72)" : Qn(se, Te(Math.max(0.56, Number(se.a ?? 1) * 0.96), 0.56, 1));
    let k = $ * 2, U = $ * 2, ie = "999px", ke = 0, Me = V;
    const Ae = "rgba(222, 222, 222, 0.72)", xe = "rgba(52, 52, 52, 0.72)";
    if (b === "mask")
      Me = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (K === "marker") {
      const Q = Math.max(1, Number((m == null ? void 0 : m.aspect) ?? 1));
      k = Math.max(16, $ * 2 * Q), U = Math.max(10, $ * 2), ie = `${Math.min(8, U * 0.42)}px`, ke = Number(((ve = m == null ? void 0 : m.angle) == null ? void 0 : ve.value) || 0) * di;
    } else K === "brush" ? Me = `radial-gradient(circle at 50% 50%, ${ne} 0%, ${V} 48%, rgba(0,0,0,0) 100%)` : K === "lasso_fill" ? (k = Math.max(18, $ * 1.8), U = k, Me = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${ne} 43%, ${ne} 58%, rgba(0,0,0,0) 59%)`) : Y && (Me = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(k)}px`, i.style.height = `${Math.round(U)}px`, i.style.borderRadius = ie, i.style.background = Me, i.style.border = `1px solid ${Ae}`, i.style.boxShadow = `0 0 0 1px ${xe}`, i.style.transform = `rotate(${ke}deg)`, q && (clearTimeout(q), q = 0), r.classList.remove("fade-out"), r.classList.add("show");
  }
  function G() {
    !r || !r.classList.contains("show") || (r.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      r.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function N(b, K, p, m) {
    const x = _e(K), I = pn[x] || pn[fr], $ = t.brushSizes[x] ?? 10, Y = Math.max(1, $) * Math.max(0.1, I.sizeScale ?? 1), se = B(m, Y), V = p.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), ne = {
      id: Ii(b),
      actionGroupId: Ii("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: K,
      size: Y,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: se.radiusModel,
      radiusValue: se.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: V.map((k) => ({ ...k })),
        points: V.map((k) => ({ ...k }))
      }
    };
    return xp(ne, I), t.mode, Number(I.aspect ?? 1), Number(ne.aspect ?? 1), String(ne.stampKind || ""), Number(ne.size || 0), String(ne.radiusModel || ""), Number(ne.radiusValue || 0), { ...ne.targetSpace }, ne;
  }
  function ue(b, K, p, m) {
    const x = p.map((se) => ({
      ...se,
      t: Number((se == null ? void 0 : se.t) || 0),
      widthScale: Number.isFinite(Number(se == null ? void 0 : se.widthScale)) ? Math.max(0, Number(se.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(se == null ? void 0 : se.pressureLike)) ? Math.max(0, Number(se.pressureLike)) : 1
    })), I = _e(K), $ = pn[I] || pn[fr], Y = {
      id: Ii(b),
      actionGroupId: Ii("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: b,
      toolKind: K,
      size: 10,
      createdAt: Date.now(),
      color: b === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: x.map((se) => ({ ...se }))
      }
    };
    return xp(Y, $), t.mode, Number($.aspect ?? 1), Number(Y.aspect ?? 1), String(Y.stampKind || ""), { ...Y.targetSpace }, Y;
  }
  function A(b) {
    const K = o.painting || (o.painting = pi(null)), p = K[b] || (K[b] = { strokes: [] });
    return Array.isArray(p.strokes) || (p.strokes = []), p.strokes;
  }
  function E(b, K, p = performance.now()) {
    let m;
    if (t.mode === "frame") {
      const V = f();
      if (!V || (m = R(K, V, p), !m)) return !1;
    } else
      m = P(K, p);
    if (!m) return !1;
    const x = b.stroke.geometry.rawPoints || b.stroke.geometry.points, I = b.stroke.geometry.points, $ = x[x.length - 1];
    if ($) {
      const V = Math.abs(Number(m.u ?? m.x ?? 0) - Number($.u ?? $.x ?? 0)), ne = Math.abs(Number(m.v ?? m.y ?? 0) - Number($.v ?? $.y ?? 0));
      if (V < 15e-4 && ne < 15e-4) return !1;
    }
    const Y = {
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    x.push({ ...Y }), I.push({ ...Y });
    const se = h(b);
    if (se) {
      const V = t.paintEngine.ensureTarget(se);
      t.paintEngine.appendStrokePoint(V, Number(Y.u ?? 0), Number(Y.v ?? 0), b.stroke);
    }
    return !0;
  }
  function w(b, K, p = performance.now()) {
    var $, Y;
    let m;
    if (t.mode === "frame") {
      const se = f();
      if (!se) return !1;
      m = R(K, se, p);
    } else
      m = P(K, p);
    const x = (Y = ($ = b == null ? void 0 : b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : Y.points;
    if (!m || !Array.isArray(x)) return !1;
    const I = x[x.length - 1];
    if (I) {
      const se = Math.abs(Number(m.u ?? m.x ?? 0) - Number(I.u ?? I.x ?? 0)), V = Math.abs(Number(m.v ?? m.y ?? 0) - Number(I.v ?? I.y ?? 0));
      if (se < 15e-4 && V < 15e-4) return !1;
    }
    return x.push({
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function M(b) {
    var Q, T, F, J, L;
    const K = (b == null ? void 0 : b.stroke) || null;
    if (!K || (b == null ? void 0 : b.layerKind) !== "paint" || String((K == null ? void 0 : K.toolKind) || "") !== "eraser") return !1;
    O();
    const p = h(), m = c(p.width, p.height);
    if (!W(m, K, { w: p.width, h: p.height })) return !1;
    const x = ((T = (Q = m.ctx) == null ? void 0 : Q.getImageData(0, 0, p.width, p.height)) == null ? void 0 : T.data) || null;
    if (!x) return !1;
    const I = new Map(g().map((X) => [String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim(), X ? { ...X } : null])), $ = [], Y = [], se = [...v().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") !== "paint")];
    let V = !1, ne = _().reduce((X, j) => Math.max(X, Number((j == null ? void 0 : j.z_index) || 0)), -1) + 1;
    function k(X, j, S, z = 8) {
      let re = j, he = S, de = -1, we = -1;
      for (let Ie = 0; Ie < S; Ie += 1)
        for (let De = 0; De < j; De += 1)
          X[(Ie * j + De) * 4 + 3] <= z || (De < re && (re = De), Ie < he && (he = Ie), De > de && (de = De), Ie > we && (we = Ie));
      return de < re || we < he ? null : { minX: re, minY: he, maxX: de, maxY: we };
    }
    const U = k(x, p.width, p.height, 8);
    if (!U) return !1;
    function ie(X, j) {
      return !X || !j ? !1 : !(X.maxX < j.minX || j.maxX < X.minX || X.maxY < j.minY || j.maxY < X.minY);
    }
    function ke(X, j) {
      const S = d((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "", "paint", j);
      if (!S) return null;
      const z = S.centerUv.u - S.halfW, re = S.centerUv.u + S.halfW, he = S.centerUv.v - S.halfH, de = S.centerUv.v + S.halfH, we = p.width, Ie = p.height;
      return {
        minX: Math.floor((z % 1 + 1) % 1 * we),
        maxX: Math.ceil((re % 1 + 1) % 1 * we),
        minY: Math.floor(Te(he, 0, 1) * Ie),
        maxY: Math.ceil(Te(de, 0, 1) * Ie),
        wraps: re - z >= 1 || z < 0 || re > 1
      };
    }
    function Me(X) {
      const j = (X == null ? void 0 : X.bbox) || null;
      if (!j) return null;
      const S = (X == null ? void 0 : X.transform) || {}, z = p.width, re = p.height, he = Number(j.u0 || 0) + Number(S.du || 0), de = Number(j.u1 || 0) + Number(S.du || 0), we = Number(j.v0 || 0) + Number(S.dv || 0), Ie = Number(j.v1 || 0) + Number(S.dv || 0);
      return {
        minX: Math.floor((he % 1 + 1) % 1 * z),
        maxX: Math.ceil((de % 1 + 1) % 1 * z),
        minY: Math.floor(Te(we, 0, 1) * re),
        maxY: Math.ceil(Te(Ie, 0, 1) * re),
        wraps: de - he >= 1 || he < 0 || de > 1
      };
    }
    function Ae(X) {
      return X ? X.wraps ? ie(U, { minX: 0, maxX: X.maxX, minY: X.minY, maxY: X.maxY }) || ie(U, { minX: X.minX, maxX: p.width - 1, minY: X.minY, maxY: X.maxY }) : ie(U, X) : !0;
    }
    function xe(X) {
      if (!X) return { touched: !1, canvas: null };
      const j = c(p.width, p.height, { readback: !0 });
      j.ctx.drawImage(X, 0, 0);
      const S = j.ctx.getImageData(0, 0, p.width, p.height);
      j.ctx.save(), j.ctx.globalCompositeOperation = "destination-out", j.ctx.drawImage(m.canvas, 0, 0), j.ctx.restore();
      const z = j.ctx.getImageData(0, 0, p.width, p.height);
      for (let re = 0; re < p.width * p.height; re += 1) {
        if (x[re * 4 + 3] <= 8) continue;
        const de = S.data[re * 4 + 3], we = z.data[re * 4 + 3];
        if (de > we)
          return { touched: !0, canvas: j.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ve(X, j, S) {
      const z = Number(S == null ? void 0 : S.z_index), re = l(X, j, S).map((he, de) => ({
        ...he,
        z_index: Number.isFinite(z) ? z + de * 1e-3 : ne + de * 1e-3
      }));
      return re.length && (ne = Math.max(ne, ...re.map((he) => Number((he == null ? void 0 : he.z_index) || 0))) + 1), re;
    }
    for (const X of g()) {
      const j = String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim();
      if (!j) continue;
      const S = y(j, "paint");
      if (!Ae(ke(X, S))) {
        Y.push(X), $.push(...S);
        continue;
      }
      const z = ((J = (F = t.paintEngine) == null ? void 0 : F.getGroupTarget) == null ? void 0 : J.call(F, j)) || null, re = ((L = z == null ? void 0 : z.committedPaint) == null ? void 0 : L.canvas) || null;
      if (!re) {
        Y.push(X), $.push(...S);
        continue;
      }
      const he = xe(re);
      if (!he.touched || !he.canvas) {
        Y.push(X), $.push(...S);
        continue;
      }
      V = !0;
      const de = ve(he.canvas, "paint", I.get(j) || X || {});
      se.push(...de);
    }
    for (const X of v().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint")) {
      if (!Ae(Me(X))) {
        se.push(X);
        continue;
      }
      const j = s(X, null);
      if (!j) {
        se.push(X);
        continue;
      }
      const S = xe(j);
      if (!S.touched || !S.canvas) {
        se.push(X);
        continue;
      }
      V = !0;
      const z = ve(S.canvas, "paint", X);
      se.push(...z);
    }
    return V ? (o.painting.paint.strokes = $, o.painting.groups = Y.sort((X, j) => Number((X == null ? void 0 : X.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), o.painting.raster_objects = se.sort((X, j) => Number((X == null ? void 0 : X.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function le(b) {
    var $, Y, se, V, ne;
    if ((((Y = ($ = b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : Y.rawPoints) || ((V = (se = b.stroke) == null ? void 0 : se.geometry) == null ? void 0 : V.points) || []).length >= 1) {
      D(b);
      const k = h(b);
      k && (String(((ne = b.stroke) == null ? void 0 : ne.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(k) : t.paintEngine.commitActiveStroke(b.stroke, k)), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = N(b.layerKind, p.toolKind, [], m);
    x.actionGroupId = p.actionGroupId, b.stroke = x;
    const I = h(b);
    I && t.paintEngine.beginStroke(x, I);
  }
  function ye(b) {
    var $, Y;
    if ((((Y = ($ = b.stroke) == null ? void 0 : $.geometry) == null ? void 0 : Y.points) || []).length >= 3) {
      D(b);
      const se = h(b);
      se && t.paintEngine.commitActiveStroke(b.stroke, se), b._hasCommittedSegments = !0;
    }
    const p = b.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, x = ue(b.layerKind, p.toolKind, [], m);
    x.actionGroupId = p.actionGroupId, b.stroke = x;
    const I = h(b);
    I && t.paintEngine.beginStroke(x, I);
  }
  function D(b) {
    var I, $, Y, se;
    const K = ((I = b == null ? void 0 : b.stroke) == null ? void 0 : I.geometry) || null;
    if (!K) return !1;
    const p = String((($ = b == null ? void 0 : b.stroke) == null ? void 0 : $.toolKind) || "pen");
    if (b.layerKind === "paint" && p === "eraser")
      return K.geometryKind !== "lasso_fill" && (K.processedPoints = H(K.rawPoints || K.points || [], b.stroke.targetSpace, !0)), M(b);
    const m = b.layerKind === "paint" && p !== "eraser";
    if (K.geometryKind === "lasso_fill")
      return (Array.isArray(K.points) ? K.points : []).length < 3 ? !1 : (m && u((Y = b.stroke) == null ? void 0 : Y.actionGroupId), A(b.layerKind).push(b.stroke), !0);
    const x = K.rawPoints || K.points || [];
    return x.length < 1 ? !1 : (K.processedPoints = H(x, b.stroke.targetSpace, !0), m && u((se = b.stroke) == null ? void 0 : se.actionGroupId), A(b.layerKind).push(b.stroke), !0);
  }
  return {
    connect(b) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: h,
        getDisplayListObjects: _,
        getPaintingGroupList: g,
        getRasterObjectList: v,
        getStrokeGroupStrokes: y,
        processFreehandPoints: H,
        rasterizeStrokeToSurface: W,
        rebuildPaintEngineIfNeeded: O,
        screenPosToErpPoint: P,
        screenPosToFrameAsErpPoint: R,
        supportsFramePainting: Z
      } = b);
    },
    isActiveLassoTool: Se,
    supportsErpPainting: ge,
    getBrushPresetIdForTool: _e,
    isPaintCursorEnabled: pe,
    isActivePaintCursorVisible: fe,
    setPointerPos: ee,
    syncPaintCursorElement: oe,
    showPaintSizePreview: C,
    hidePaintSizePreview: G,
    buildFreehandStrokeRecord: N,
    buildLassoFillStrokeRecord: ue,
    getPaintingLayerList: A,
    appendPaintPoint: E,
    appendLassoPoint: w,
    _segmentFrameStroke: le,
    _segmentFrameLassoFill: ye,
    commitPaintInteraction: D
  };
}
function pI(e) {
  const {
    editor: t,
    readOnly: n,
    shotEditor: r,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B;
  function _e() {
    return ge().reverse();
  }
  function pe(G) {
    var ue;
    if (r && t.mode === "frame") {
      const A = s(), E = l(A);
      if (!A || !E || !(Number((G == null ? void 0 : G.x) || 0) >= Number(E.x || 0) && Number((G == null ? void 0 : G.x) || 0) <= Number(E.x || 0) + Number(E.w || 0) && Number((G == null ? void 0 : G.y) || 0) >= Number(E.y || 0) && Number((G == null ? void 0 : G.y) || 0) <= Number(E.y || 0) + Number(E.h || 0))) return null;
      const M = q(G, A, performance.now()), le = M ? o(M) : null;
      if (le)
        for (const D of a()) {
          if (!W(D)) continue;
          const b = B(D, le);
          if (b && Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1) {
            const K = Z(D);
            if (K != null && K.visible) return { item: D, geom: K };
          }
        }
      const ye = c(!1).slice().sort((D, b) => Number((b == null ? void 0 : b.z_index) || 0) - Number((D == null ? void 0 : D.z_index) || 0));
      for (const D of ye) {
        if (D.type === "strokeGroup") {
          const p = f(R("paint", D.actionGroupId || D.id || ""));
          if (!p) continue;
          const m = Z(p);
          if (!(m != null && m.visible)) continue;
          const x = Array.isArray(m.strokePaths) ? m.strokePaths : [];
          for (const I of x) {
            const $ = Array.isArray(I == null ? void 0 : I.points) ? I.points : [];
            if (!$.length) continue;
            if (I.closed && $.length >= 3 && Ar(G, $)) return { item: p, geom: m };
            const Y = Math.max(8, Number((I == null ? void 0 : I.lineWidth) || 0) * 0.5 + 6);
            for (let se = 0; se < $.length - 1; se += 1)
              if (tc(G, $[se], $[se + 1]) <= Y * Y) return { item: p, geom: m };
            if ($.length === 1 && mo(G, $[0]) <= Y * Y) return { item: p, geom: m };
          }
          continue;
        }
        if (D.type === "rasterObject") {
          const p = d(P(((ue = D.item) == null ? void 0 : ue.id) || D.id || ""));
          if (!p) continue;
          const m = Z(p);
          if (h(p, m, G, M)) return { item: p, geom: m };
          continue;
        }
        const b = D.item;
        if (!b || !W(b) || !le) continue;
        const K = B(b, le);
        if (K && Number(K.x) >= 0 && Number(K.x) <= 1 && Number(K.y) >= 0 && Number(K.y) <= 1) {
          const p = Z(b);
          if (p != null && p.visible) return { item: b, geom: p };
        }
      }
      if (!le) return null;
      for (const D of _e()) {
        const b = B(D, le);
        if (!b || !(Number(b.x) >= 0 && Number(b.x) <= 1 && Number(b.y) >= 0 && Number(b.y) <= 1)) continue;
        const K = Z(D);
        if (K != null && K.visible) return { item: D, geom: K };
      }
      return null;
    }
    const N = [
      ...c(!1).slice().sort((A, E) => Number((E == null ? void 0 : E.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((A) => {
        var E;
        return A.type === "strokeGroup" ? f(R("paint", A.actionGroupId || A.id || "")) : A.type === "rasterObject" ? d(P(((E = A.item) == null ? void 0 : E.id) || A.id || "")) : A.item;
      }).filter(Boolean),
      ..._e(),
      ...r ? a().filter((A) => H(A)) : []
    ];
    for (const A of N) {
      if (O(A)) {
        const w = Z(A);
        if (!(w != null && w.visible)) continue;
        const M = Array.isArray(w.strokePaths) ? w.strokePaths : [];
        for (const le of M) {
          const ye = Array.isArray(le == null ? void 0 : le.points) ? le.points : [];
          if (!ye.length) continue;
          if (le.closed && ye.length >= 3 && Ar(G, ye)) return { item: A, geom: w };
          const D = Math.max(8, Number((le == null ? void 0 : le.lineWidth) || 0) * 0.5 + 6);
          for (let b = 0; b < ye.length - 1; b += 1)
            if (tc(G, ye[b], ye[b + 1]) <= D * D) return { item: A, geom: w };
          if (ye.length === 1 && mo(G, ye[0]) <= D * D) return { item: A, geom: w };
        }
        continue;
      }
      if (y(A)) {
        const w = Z(A);
        if (!(w != null && w.visible)) continue;
        if (h(A, w, G)) return { item: A, geom: w };
        continue;
      }
      const E = Z(A);
      if (E.visible && Ar(G, E.corners))
        return { item: A, geom: E };
    }
    return null;
  }
  function fe(G, N, ue = null) {
    if (!G || !G.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (W(ue)) return Rc(G, N);
    if (G.kind === "strokeGroup") {
      const A = G.corners.findIndex((w) => mo(w, N) <= 121);
      if (A >= 0) {
        const w = G.corners[A], M = w.x - G.center.x, le = w.y - G.center.y, ye = M * le >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: ye };
      }
      const E = Array.isArray(G.strokePaths) ? G.strokePaths : [];
      for (const w of E) {
        const M = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
        if (w.closed && M.length >= 3 && Ar(N, M)) return { kind: "move", cursor: "default" };
        const le = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
        for (let ye = 0; ye < M.length - 1; ye += 1)
          if (tc(N, M[ye], M[ye + 1]) <= le * le) return { kind: "move", cursor: "default" };
      }
      return Ar(N, G.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (G.kind === "rasterObject") {
      const A = G.corners.findIndex((E) => mo(E, N) <= 121);
      if (A >= 0) {
        const E = G.corners[A], w = E.x - G.center.x, M = E.y - G.center.y, le = w * M >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: A, cursor: le };
      }
      return Ar(N, G.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return lx(G, N, {
      edges: i === "cutout" || H(ue),
      resize: !(H(ue) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function ee(G, N) {
    return {
      x0: Math.min(Number((G == null ? void 0 : G.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y0: Math.min(Number((G == null ? void 0 : G.y) || 0), Number((N == null ? void 0 : N.y) || 0)),
      x1: Math.max(Number((G == null ? void 0 : G.x) || 0), Number((N == null ? void 0 : N.x) || 0)),
      y1: Math.max(Number((G == null ? void 0 : G.y) || 0), Number((N == null ? void 0 : N.y) || 0))
    };
  }
  function me(G, N) {
    return !!G && !!N && Number(N.x) >= Number(G.x0) && Number(N.x) <= Number(G.x1) && Number(N.y) >= Number(G.y0) && Number(N.y) <= Number(G.y1);
  }
  function oe(G, N) {
    if (!G || !(N != null && N.visible) || !Array.isArray(N.corners)) return !1;
    if (N.corners.some((E) => me(G, E))) return !0;
    const ue = (Number(G.x0) + Number(G.x1)) * 0.5, A = (Number(G.y0) + Number(G.y1)) * 0.5;
    return !!Ar({ x: ue, y: A }, N.corners);
  }
  function C(G) {
    if (Se(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ae("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ae("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ae("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ae("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ae("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ae(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ae("grabbing") : ae("default");
      return;
    }
    if (_()) {
      ae("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !n) {
        ae(vA);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ae("default");
        return;
      }
      ae("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ae("default");
      return;
    }
    if (t.gizmoAxis) {
      ae("grab");
      return;
    }
    const N = u(), ue = N ? Z(N) : null, A = N ? v(N) : !1, E = A ? { kind: "none", cursor: "default" } : fe(ue, G, N);
    if (!A && E.kind !== "none") {
      ae(E.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && pe(G)) {
      ae("default");
      return;
    }
    ae(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(G) {
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
        isActivePaintCursorVisible: _,
        isErpCamera: g,
        isItemLocked: v,
        isRasterObjectItem: y,
        isShotItem: H,
        isStickerItem: W,
        isStrokeGroupItem: O,
        makeRasterObjectSelectionId: P,
        makeStrokeGroupSelectionId: R,
        objectGeom: Z,
        screenPosToFrameAsErpPoint: q,
        setCanvasCursor: ae,
        syncPaintCursorElement: Se,
        upstreamSkyStickers: ge,
        worldDirToFrameLocalPoint: B
      } = G);
    },
    hitObjectAt: pe,
    handleHit: fe,
    rectFromPoints: ee,
    rectIntersectsGeom: oe,
    updateCursor: C
  };
}
function hI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    scheduler: i,
    selectionMenu: o,
    stageWrap: s,
    state: a,
    tooltip: l,
    tooltipEl: c,
    type: d,
    uiState: u
  } = e;
  let f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e = !1;
  function pe() {
    return _e;
  }
  function fe() {
    if (!o) return;
    if (_e = !1, r.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (r.worldSelectedId || O() && Z()) {
      const w = me();
      _e = w.visible, oe(w);
      return;
    }
    const N = y(), ue = H();
    if (!N && ue.length === 0 || r.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const A = W(), E = MC({
      type: d,
      selected: N,
      selectedItems: ue,
      selectedKind: A,
      geom: ue.length > 1 ? v(ue) : B(N),
      allLocked: f(ue),
      anyLocked: ue.some((w) => q(w)),
      selectedLocked: q(N),
      activeAspect: ae(N) && P() ? Bi : mr(N),
      cutoutAspectOpen: r.cutoutAspectOpen,
      isExternalSticker: R,
      isStickerHidden: ge,
      canRestoreSelectedToInitial: h,
      iconSet: He,
      cameraShot: t,
      coverage: a.coverage,
      upstream: ee(ue)
    });
    oe(E);
  }
  function ee(N) {
    const ue = N.filter(Et);
    return ue.length ? { editable: ue.every(xa) } : null;
  }
  function me() {
    const N = Se() && !r.interaction ? g().space : null;
    if (!(N != null && N.gizmo)) return { visible: !1 };
    const ue = _(), A = [...N.stickers, ...N.upstreamStickers].find((le) => le.id === r.worldSelectedId), w = (A ? Uu(A) : [N.gizmo.transform.position]).map((le) => Uo(ue, le, n.width, n.height)).filter(Boolean), M = ow(ue, N.gizmo.transform.position, N.gizmo.mode, n.width, n.height);
    return PC({ corners: w, gizmoBox: M, gizmoMode: N.gizmo.mode, camera: O() });
  }
  function oe(N) {
    var M, le;
    if (!N.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ue = (ye, D) => NC(N.anchor, ye, D, n.width, n.height), A = Math.max(1, Number(((M = r.menuSize) == null ? void 0 : M.w) || 220)), E = Math.max(1, Number(((le = r.menuSize) == null ? void 0 : le.h) || 40)), w = ue(A, E);
    if (!w) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: w.left,
      top: w.top,
      items: N.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ye = o.getBoundingClientRect(), D = Math.round(Number((ye == null ? void 0 : ye.width) || 0)) || 220, b = Math.round(Number((ye == null ? void 0 : ye.height) || 0)) || 40;
      r.menuSize = { w: D, h: b, measured: !0 };
      const K = ue(D, b);
      K && (u.selectionMenu.left = K.left, u.selectionMenu.top = K.top);
    });
  }
  function C() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function G(N) {
    if (!c || !N || !N.isConnected) return;
    const ue = String(N.getAttribute("data-tip") || "").trim();
    if (!ue) return;
    u.tooltip.text = ue, u.tooltip.visible = !0;
    const A = N;
    i.requestFrame(() => {
      var $, Y;
      if (l.target !== A || !c || !(A != null && A.isConnected)) return;
      const E = s.getBoundingClientRect(), w = A.getBoundingClientRect(), M = 8, le = 12, ye = Math.round(Number((($ = c.getBoundingClientRect()) == null ? void 0 : $.width) || 0)) || 100, D = Math.round(Number(((Y = c.getBoundingClientRect()) == null ? void 0 : Y.height) || 0)) || 24, b = !!A.closest(".pano-floating-left"), K = !!A.closest(".pano-frame-rail"), p = !!A.closest(".pano-paint-footer") || !!A.closest(".pano-paint-color-float");
      let m = "", x = w.left - E.left + w.width * 0.5 - ye * 0.5, I = w.top - E.top - D - le;
      if (A.closest(".pano-floating-top") && (I = w.bottom - E.top + le), b)
        m = "tool-rail", x = w.right - E.left + 10, I = w.top - E.top + w.height * 0.5 - D * 0.5, x = Te(x, M, Math.max(M, E.width - ye - M)), I = Te(I, M, Math.max(M, E.height - D - M));
      else if (K)
        m = "frame-rail", x = w.left - E.left - ye - 10, I = w.top - E.top + w.height * 0.5 - D * 0.5, x = Te(x, M, Math.max(M, E.width - ye - M)), I = Te(I, M, Math.max(M, E.height - D - M));
      else if (p) {
        m = "footer";
        const se = A.closest(".pano-paint-footer"), V = se ? se.getBoundingClientRect() : w;
        x = V.left - E.left + V.width * 0.5 - ye * 0.5, I = V.bottom - E.top + 5, x = Te(x, M, Math.max(M, E.width - ye - M)), I = Math.max(M, I);
      }
      x = Te(x, M, Math.max(M, E.width - ye - M)), I = Math.max(M, I), u.tooltip.left = x, u.tooltip.top = I, u.tooltip.variant = m, u.tooltip.visible = !0;
    });
  }
  return {
    connect(N) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: h,
        currentSpaceCamera: _,
        editorViewInput: g,
        getMultiSelectionGeom: v,
        getSelected: y,
        getSelectedItems: H,
        getSelectedKind: W,
        isCameraSelected: O,
        isErpCamera: P,
        isExternalSticker: R,
        isFreeSpaceView: Z,
        isItemLocked: q,
        isShotItem: ae,
        isSpaceView: Se,
        isStickerHidden: ge,
        objectGeom: B
      } = N);
    },
    isWorldMenuShown: pe,
    updateSelectionMenu: fe,
    hideTooltip: C,
    showTooltipFor: G
  };
}
function mI(e) {
  const {
    canvas: t,
    editor: n,
    paintColorPop: r,
    readOnly: i,
    sceneV2: o,
    shotEditor: s,
    stateV2: a,
    timeline: l,
    viewController: c
  } = e;
  let d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K, p, m, x, I, $, Y, se, V, ne, k, U, ie, ke, Me, Ae, xe, ve, Q, T, F, J, L, X, j, S, z, re, he, de, we, Ie, De, ze, Ue, We, Ce, je, ce, te, be, Pe, Oe, Ee, Ve, Be, st, dt, lt, yt = null;
  function qe(Re) {
    l.selection && (l.selection = null, be());
    const Ge = xe(Re);
    yt = Ge, Q(Ge, !0), h(), c.state.inertia.active = !1, c.state.inertia.vx = 0, c.state.inertia.vy = 0;
    const Ke = ue(), Nt = N(), gt = Ke || Nt ? bx(Be(), Re) : null;
    if (Nt && gt) {
      Re.preventDefault(), gt === "look" ? Ie(Ge, Re.pointerId) : X(gt, Ge, Re.pointerId);
      return;
    }
    if (gt === "look") {
      Re.preventDefault(), z(Re, Ge, ve(Re));
      return;
    }
    if (gt) {
      Re.preventDefault(), Ue(gt, Ge, Re.pointerId);
      return;
    }
    if ((Ke || Nt) && Re.button !== 0) {
      Re.preventDefault();
      return;
    }
    if (Re.button === 1) {
      Re.preventDefault(), n.mode === "frame" ? re(Re, Ge) : z(Re, Ge, n.mode === "unwrap" ? Ge : ve(Re));
      return;
    }
    if (Re.button !== 0) return;
    if (n.mode === "frame" && (Re.altKey || Re.shiftKey) && !i) {
      j(Re, Ge);
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      Ie(Ge, Re.pointerId), Re.preventDefault();
      return;
    }
    if (i) {
      n.mode === "pano" && L(Re, Ge);
      return;
    }
    if (r && !r.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ce() || te())) {
      if (!Y()) return;
      je(), we(Re, Ge);
      return;
    }
    const vn = fe(), Kt = pe(), Dt = vn.length > 1 ? _e(vn) : Kt ? $(Kt) : null;
    if (n.primaryTool === "cursor" && (Re.ctrlKey || Re.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ge, current: Ge }, Oe(Ge), t.setPointerCapture(Re.pointerId), k({ localOnly: !0, reason: ot.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && d() && ue() && J(Re, Ge) || n.primaryTool === "cursor" && o && E() && We(Re, Ge)) return;
    if (vn.length > 1 && (Dt != null && Dt.visible)) {
      if ((vn.some((ds) => A(ds)) ? { kind: "none" } : ee(Dt, Ge)).kind === "move") {
        de(Re, Ge, vn, Dt);
        return;
      }
    } else if (Kt && (Dt != null && Dt.visible)) {
      const cn = A(Kt) ? { kind: "none" } : ee(Dt, Ge, Kt);
      if (cn.kind === "scale") {
        ze(Re, Ge, Kt, Dt, cn);
        return;
      }
      if (cn.kind === "scale_x" || cn.kind === "scale_y") {
        F(Re, Ge, Kt, Dt, cn);
        return;
      }
      if (cn.kind === "rotate") {
        De(Re, Ge, Kt, Dt);
        return;
      }
      if (cn.kind === "move") {
        he(Re, Ge, Kt, Dt);
        return;
      }
    }
    const Dn = oe(Ge);
    if (Dn) {
      const cn = n.selectedId !== Dn.item.id;
      if (cn && n.selectedId && (ne(), g()), T(Dn.item), s && cn && (n.cutoutAspectOpen = !1), cn && Ve(), Ee(), k(), A(Dn.item)) {
        Oe(Ge);
        return;
      }
      S(Re, Ge, Dn);
      return;
    }
    const us = !!n.selectedId;
    us && (ne(), g()), _(), us && Ve(), Ee(), k(), n.mode === "pano" && L(Re, Ge);
  }
  function jt(Re, Ge) {
    if (!a || !se.playing || (se.stop(), Re.kind === "frame_pan")) return;
    if (Re.kind === "frame_orbit") {
      const gt = Se();
      gt && (Re.pivot = B(gt, ge(gt), Ge));
      return;
    }
    if (Re.kind === "world_gizmo") {
      const gt = Ce(Re.id);
      Re.camera ? Re.base = v() : gt && (Re.base = Wn(gt, n.frame));
      return;
    }
    if (Re.kind === "move_multi") {
      const gt = _e(Re.items);
      if (!(gt != null && gt.visible)) return;
      Re.offset = { x: Ge.x - gt.center.x, y: Ge.y - gt.center.y }, Re.startCenter = { x: gt.center.x, y: gt.center.y };
      for (const vn of Re.stickerSnapshots) {
        const Kt = Re.items.find((Dn) => String((Dn == null ? void 0 : Dn.id) || "") === vn.id), Dt = Kt ? $(Kt) : null;
        Dt != null && Dt.visible && (vn.yaw_deg = Number(V(Kt).yaw_deg || 0), vn.pitch_deg = Number(V(Kt).pitch_deg || 0), vn.center = { x: Dt.center.x, y: Dt.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Re.kind)) return;
    const Ke = $(Re.item);
    if (!(Ke != null && Ke.visible)) return;
    const Nt = V(Re.item);
    if (Re.kind === "move") {
      Re.offset = { x: Ge.x - Ke.center.x, y: Ge.y - Ke.center.y };
      return;
    }
    if (Re.center = Ke.center, Re.kind === "rotate") {
      Re.startRot = Number(Nt.rot_deg || Nt.roll_deg || 0), Re.startAng = Math.atan2(Ge.y - Ke.center.y, Ge.x - Ke.center.x);
      return;
    }
    Re.startDist = Math.max(1, Math.hypot(Ge.x - Ke.center.x, Ge.y - Ke.center.y)), Re.startHFOV = Number(Nt.hFOV_deg || 20), Re.startVFOV = Number(Nt.vFOV_deg || 20);
  }
  function Tt(Re) {
    const Ge = xe(Re);
    if (Q(Ge, !0), !n.interaction) {
      C(Ge), Oe(Ge);
      return;
    }
    Oe(Ge);
    const Ke = n.interaction;
    if (yt && (Ge.x !== yt.x || Ge.y !== yt.y)) {
      const Nt = yt;
      yt = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Ke.kind) || jt(Ke, Nt);
    }
    if (Ke.kind !== "world_select") {
      if (Ke.kind === "world_gizmo") {
        H(Ke, Ge);
        return;
      }
      if (Ke.kind === "paint_stroke") {
        D(Ke, Re);
        return;
      }
      if (Ke.kind === "paint_lasso_fill") {
        w(Ke, Re);
        return;
      }
      if (Ke.kind === "view") {
        M(Ke, Ge, Re);
        return;
      }
      if (Ke.kind === "frame_pan" || Ke.kind === "frame_orbit") {
        y(Ke, Ge);
        return;
      }
      if (Ke.kind === "space_pan" || Ke.kind === "space_orbit") {
        m(Ke, Ge);
        return;
      }
      if (Ke.kind === "pan_frame") {
        b(Ke, Ge);
        return;
      }
      if (Ke.kind === "roll_frame") {
        p(Ke, Ge, Re);
        return;
      }
      if (Ke.kind === "move") {
        I(Ke, Ge);
        return;
      }
      if (Ke.kind === "move_stroke_group") {
        x(Ke, Ge);
        return;
      }
      if (Ke.kind === "move_raster_object") {
        K(Ke, Ge);
        return;
      }
      if (Ke.kind === "scale_raster_object") {
        Me(Ke, Ge);
        return;
      }
      if (Ke.kind === "move_multi") {
        ye(Ke, Ge);
        return;
      }
      if (Ke.kind === "scale_stroke_group") {
        Ae(Ke, Ge);
        return;
      }
      if (Ke.kind === "rotate_stroke_group") {
        ie(Ke, Ge, Re);
        return;
      }
      if (Ke.kind === "marquee_select") {
        le(Ke, Ge);
        return;
      }
      if (Ke.kind === "scale" || Ke.kind === "scale_x" || Ke.kind === "scale_y") {
        ke(Ke, Ge);
        return;
      }
      if (Ke.kind === "rotate") {
        U(Ke, Ge, Re);
        return;
      }
    }
  }
  function Un() {
    var Ge, Ke, Nt, gt;
    const Re = n.interaction;
    if (!((Re == null ? void 0 : Re.kind) === "roll_frame" && Re.source === "knob")) {
      if ((Re == null ? void 0 : Re.kind) === "space_pan" || (Re == null ? void 0 : Re.kind) === "space_orbit") {
        Z();
        return;
      }
      if ((Re == null ? void 0 : Re.kind) === "world_select" || (Re == null ? void 0 : Re.kind) === "world_gizmo") {
        ae(Re);
        return;
      }
      ((Ge = n.interaction) == null ? void 0 : Ge.kind) === "paint_stroke" || ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "paint_lasso_fill" ? R() : ((Nt = n.interaction) == null ? void 0 : Nt.kind) === "marquee_select" ? P() : ["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((gt = n.interaction) == null ? void 0 : gt.kind) ? W() : n.interaction && n.interaction.kind !== "view" && q(), n.interaction = null, (Re == null ? void 0 : Re.kind) === "roll_frame" && me(), G(), Re && Re.kind === "view" && O(), Pe(), Ee(), Oe(n.pointerPos), k();
    }
  }
  function xn() {
    var Re, Ge, Ke, Nt, gt;
    if (!u()) {
      if (((Re = n.interaction) == null ? void 0 : Re.kind) === "world_select" || ((Ge = n.interaction) == null ? void 0 : Ge.kind) === "world_gizmo") {
        ae(n.interaction);
        return;
      }
      ((Ke = n.interaction) == null ? void 0 : Ke.kind) === "view" && O(), (((Nt = n.interaction) == null ? void 0 : Nt.kind) === "paint_stroke" || ((gt = n.interaction) == null ? void 0 : gt.kind) === "paint_lasso_fill") && f(), n.interaction = null, G(), Pe(), Oe(n.pointerPos), k({ localOnly: !0 });
    }
  }
  function Mr(Re) {
    const Ge = xe(Re), Ke = Q(Ge, !0);
    n.interaction || (Oe(Ge), Ke && n.mode === "frame" && n.primaryTool === "cursor" && k({ localOnly: !0, reason: ot.OVERLAY }));
  }
  function Pt(Re) {
    if (n.mode === "frame") {
      const Ge = xe(Re), Ke = oa(Re);
      Ke && je(), Ke && N() ? st(Ge, -Ke) : Ke && dt(Ge, Ke) && k({ localOnly: !0 }), Re.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (h(), ue()) {
        const Ge = oa(Re);
        Ge && lt(xe(Re), -Ge);
      } else c.applyWheelEvent(Re) && k({ localOnly: !0, reason: ot.VIEW });
      Re.preventDefault();
    }
  }
  return {
    connect(Re) {
      ({
        cameraShoots: d,
        cancelFrameCameraGesture: u,
        cancelPaintStroke: f,
        cancelViewTransition: h,
        clearSelection: _,
        commitState: g,
        cutoutCamera: v,
        dragFrame: y,
        dragWorldGizmo: H,
        endFrameGesture: W,
        endLookDrag: O,
        endMarquee: P,
        endPaintStroke: R,
        endSpaceDrag: Z,
        endTransform: q,
        endWorldStickerPress: ae,
        frameContext: Se,
        frameSpaceView: ge,
        frameTarget: B,
        getMultiSelectionGeom: _e,
        getSelected: pe,
        getSelectedItems: fe,
        handleHit: ee,
        hideTooltip: me,
        hitObjectAt: oe,
        hoverWorldGizmo: C,
        invalidateLivePaintPreviewCaches: G,
        isFreeFrameView: N,
        isFreeSpaceView: ue,
        isItemLocked: A,
        isSpaceView: E,
        moveLassoFill: w,
        moveLookDrag: M,
        moveMarquee: le,
        moveMulti: ye,
        movePaintStroke: D,
        movePanFrame: b,
        moveRasterObject: K,
        moveRollFrame: p,
        moveSpaceDrag: m,
        moveStrokeGroup: x,
        moveItem: I,
        objectGeom: $,
        paintingShown: Y,
        playback: se,
        poseOf: V,
        pushHistory: ne,
        requestDraw: k,
        rotateItem: U,
        rotateStrokeGroup: ie,
        scaleItem: ke,
        scaleRasterObject: Me,
        scaleStrokeGroup: Ae,
        screenPos: xe,
        screenPosCss: ve,
        setPointerPos: Q,
        setSelectedItem: T,
        startAxisScale: F,
        startCameraPress: J,
        startEmptyDrag: L,
        startFrameDrag: X,
        startFrameRoll: j,
        startHitMove: S,
        startLookDrag: z,
        startMiddlePanFrame: re,
        startMove: he,
        startMultiMove: de,
        startPaintStroke: we,
        startPanFrame: Ie,
        startRotate: De,
        startScale: ze,
        startSpaceDrag: Ue,
        startWorldStickerPress: We,
        stickerById: Ce,
        stopTimelinePlayback: je,
        supportsErpPainting: ce,
        supportsFramePainting: te,
        syncTimeline: be,
        syncViewToggleState: Pe,
        updateCursor: Oe,
        updateSelectionMenu: Ee,
        updateSidePanel: Ve,
        viewControls: Be,
        zoomFrameAt: st,
        zoomFrameViewAt: dt,
        zoomSpaceAt: lt
      } = Re);
    },
    onCanvasPointerDown: qe,
    onCanvasPointerMove: Tt,
    onCanvasPointerUp: Un,
    onCanvasPointerCancel: xn,
    onCanvasMouseMove: Mr,
    onCanvasWheel: Pt
  };
}
function gI(e) {
  const { canvas: t, editor: n, viewController: r } = e;
  let i, o, s, a, l, c, d, u, f, h;
  function _(O, P, R) {
    n.interaction = { kind: "view", last: R, lastTs: performance.now() }, r.startDrag(R.x, R.y, O.pointerId, performance.now()), u(P), t.setPointerCapture(O.pointerId);
  }
  function g(O, P) {
    if (i()) {
      const R = h().emptyLeft;
      R && d(R, P, O.pointerId);
      return;
    }
    _(O, P, s(O));
  }
  function v(O, P, R) {
    const Z = performance.now(), q = n.mode === "unwrap" ? P : s(R);
    r.moveDrag(q.x, q.y, n.mode === "unwrap" ? "unwrap" : "pano", Z), O.lastTs = Z, O.last = q, o({ localOnly: !0, reason: ot.VIEW });
  }
  function y() {
    c(() => r.endDrag(performance.now()));
  }
  function H(O, P) {
    const R = l();
    a(O.kind === "space_pan" ? Qm(R, P.x - O.last.x, P.y - O.last.y, t.width, t.height, O.depth) : Zm(R, P.x - O.last.x, P.y - O.last.y, t.height, O.pivot)), O.last = P;
  }
  function W() {
    n.interaction = null, u(n.pointerPos), f();
  }
  return {
    connect(O) {
      ({
        isFreeSpaceView: i,
        requestDraw: o,
        screenPosCss: s,
        setSpaceView: a,
        spaceViewState: l,
        startAnimation: c,
        startSpaceDrag: d,
        updateCursor: u,
        updateSelectionMenu: f,
        viewControls: h
      } = O);
    },
    startLookDrag: _,
    startEmptyDrag: g,
    moveLookDrag: v,
    endLookDrag: y,
    moveSpaceDrag: H,
    endSpaceDrag: W
  };
}
function yI(e) {
  const { canvas: t, editor: n, readOnly: r, state: i } = e;
  let o, s, a, l, c, d, u, f, h, _;
  function g(O, P) {
    const R = a();
    !R || r || R.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: R,
      last: P,
      start: {
        yaw_deg: Number(R.yaw_deg || 0),
        pitch_deg: Number(R.pitch_deg || 0)
      },
      changed: !1
    }, h(P), t.setPointerCapture(O.pointerId));
  }
  function v(O, P) {
    const R = a(), Z = c(R);
    if (!R || R.locked === !0 || !Z) return;
    const q = r0({
      frame: Z,
      point: P,
      startRollDeg: Number(R.roll_deg ?? R.rot_deg ?? 0),
      shiftKey: O.shiftKey,
      altKey: O.altKey,
      allowAlt: !0
    });
    q && (n.interaction = {
      kind: "roll_frame",
      shot: R,
      center: q.center,
      lastAngle: q.lastAngle,
      accumulatedRad: q.accumulatedRad,
      rollGesture: q,
      start: { roll_deg: Number(R.roll_deg ?? R.rot_deg ?? 0) },
      changed: !1,
      altStarted: q.source === "alt",
      source: q.source
    }, t.setPointerCapture(O.pointerId), O.preventDefault(), f(), u({ localOnly: !0 }));
  }
  function y(O, P) {
    var Se, ge;
    const R = l(O.shot);
    if (!R || !O.shot) return;
    const Z = P.x - O.last.x, q = P.y - O.last.y, ae = o0(O.shot, {
      dx: Z,
      dy: q,
      focalPx: R.focalPx,
      invertX: ((Se = i.ui_settings) == null ? void 0 : Se.invert_view_x) === !0,
      invertY: ((ge = i.ui_settings) == null ? void 0 : ge.invert_view_y) === !0
    });
    O.shot.yaw_deg = ae.yaw_deg, O.shot.pitch_deg = ae.pitch_deg, O.changed = O.changed || Math.abs(Z) > 0 || Math.abs(q) > 0, O.last = P, u({ localOnly: !0 });
  }
  function H(O, P, R) {
    O.source !== "knob" && o(O, P, R);
  }
  function W() {
    n.interaction.changed && (d(), s(), _());
  }
  return {
    connect(O) {
      ({
        applySharedRollInteractionPoint: o,
        commitAndRefreshNode: s,
        getActiveCutoutShot: a,
        getFrameViewLayout: l,
        getFrameViewRect: c,
        pushHistory: d,
        requestDraw: u,
        syncFrameRollKnob: f,
        updateCursor: h,
        updateSidePanel: _
      } = O);
    },
    startMiddlePanFrame: g,
    startFrameRoll: v,
    movePanFrame: y,
    moveRollFrame: H,
    endFrameGesture: W
  };
}
function bI(e) {
  const { canvas: t, editor: n, node: r } = e;
  let i, o, s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge;
  function B(oe, C) {
    const G = n.primaryTool === "mask" ? "mask" : "paint", N = n.primaryTool === "mask" ? n.maskTool : n.paintTool, ue = n.mode === "frame" && q() ? f() : null, A = { kind: "ERP_GLOBAL" }, E = ue ? Z(C, ue, performance.now()) : R(C, performance.now());
    if (!E) {
      ae(C);
      return;
    }
    n.interaction = {
      kind: N === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
      layerKind: G,
      _livePreviewToken: Ii("live"),
      stroke: N === "lasso_fill" ? c(G, N, [E], A) : l(G, N, [E], A)
    }, v();
    const w = h(n.interaction);
    if (w)
      if (n.paintEngine.beginStroke(n.interaction.stroke, w), n.interaction.kind === "paint_stroke") {
        const M = n.paintEngine.ensureTarget(w), le = Number((E == null ? void 0 : E.u) ?? (E == null ? void 0 : E.x) ?? 0), ye = Number((E == null ? void 0 : E.v) ?? (E == null ? void 0 : E.y) ?? 0);
        n.paintEngine.appendStrokePoint(M, le, ye, n.interaction.stroke);
      } else
        n.paintEngine.updateActiveStroke(n.interaction.stroke, w);
    ae(C), t.setPointerCapture(oe.pointerId), O();
  }
  function _e(oe, C, G, N) {
    const ue = typeof C.getCoalescedEvents == "function" ? C.getCoalescedEvents() : [C];
    let A = !1;
    return ue.forEach((E) => {
      const w = P(E);
      if (n.mode === "frame") {
        const M = f(), le = M ? _(M) : null;
        if (le) {
          const ye = (w.x - le.x) / Math.max(1, le.w), D = (w.y - le.y) / Math.max(1, le.h);
          if (!(ye >= 0 && ye <= 1 && D >= 0 && D <= 1)) {
            oe._outOfFrame = !0;
            return;
          }
          oe._outOfFrame && (oe._outOfFrame = !1, G(oe));
        }
      }
      N(oe, w, performance.now()) && (A = !0);
    }), A;
  }
  function pe(oe, C) {
    _e(oe, C, o, a) && O({ localOnly: !0, reason: ot.PAINT });
  }
  function fe(oe, C) {
    if (_e(oe, C, i, s)) {
      const G = h(oe);
      G && n.paintEngine.updateActiveStroke(oe.stroke, G), O({ localOnly: !0, reason: ot.PAINT });
    }
  }
  function ee() {
    var G, N;
    v();
    const oe = d(n.interaction), C = !!n.interaction._hasCommittedSegments;
    if (oe || C) {
      y();
      const ue = String(((G = n.interaction.stroke) == null ? void 0 : G.actionGroupId) || "").trim();
      if (ue) {
        const E = g().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === ue);
        E && (E.frame = null);
      }
      const A = h(n.interaction);
      A && (oe ? String(((N = n.interaction.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(A), W()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, A) : n.paintEngine.cancelActiveStroke(A)), H(), u(), ge(), Se(), r.setDirtyCanvas(!0, !0), O();
    } else {
      const ue = h(n.interaction);
      ue && n.paintEngine.cancelActiveStroke(ue);
    }
  }
  function me() {
    v();
    const oe = h(n.interaction);
    oe && n.paintEngine.cancelActiveStroke(oe);
  }
  return {
    connect(oe) {
      ({
        _segmentFrameLassoFill: i,
        _segmentFrameStroke: o,
        appendLassoPoint: s,
        appendPaintPoint: a,
        buildFreehandStrokeRecord: l,
        buildLassoFillStrokeRecord: c,
        commitPaintInteraction: d,
        commitState: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: h,
        getFrameViewRect: _,
        getPaintingGroupList: g,
        invalidateLivePaintPreviewCaches: v,
        markPaintStrokeVisualsDirty: y,
        pushHistory: H,
        refreshPaintEngineRevisionCache: W,
        requestDraw: O,
        screenPos: P,
        screenPosToErpPoint: R,
        screenPosToFrameAsErpPoint: Z,
        supportsFramePainting: q,
        updateCursor: ae,
        updateSelectionMenu: Se,
        updateSidePanel: ge
      } = oe);
    },
    startPaintStroke: B,
    movePaintStroke: pe,
    moveLassoFill: fe,
    endPaintStroke: ee,
    cancelPaintStroke: me
  };
}
function vI(e) {
  const { canvas: t, dragFrames: n, editor: r, editorView: i, runtime: o, state: s } = e;
  let a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e;
  function pe(C, G) {
    return i.gizmoPointer(C, c(), G.x, G.y, t.width, t.height);
  }
  function fe(C, G) {
    var M, le;
    const N = (M = d().space) == null ? void 0 : M.gizmo;
    if (N && pe("hover", G) !== null && pe("down", G))
      return r.interaction = {
        kind: "world_gizmo",
        id: r.worldSelectedId,
        mode: N.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: N.transform,
        base: Wn(Z(), r.frame),
        changed: !1
      }, t.setPointerCapture(C.pointerId), ge(G), !0;
    const ue = h(), A = f(), E = ue.length > 1 ? ue.some((ye) => v(ye)) ? "none" : _(u(ue), G).kind : A && !v(A) ? _(W(A), G, A).kind : "none";
    if (E !== "none" && E !== "move") return !1;
    const w = i.pickSticker(c(), G.x, G.y, t.width, t.height);
    return ((le = q(w)) == null ? void 0 : le.placement) !== "world" ? !1 : (r.worldSelectedId !== w && (r.selectedId && (O(), l()), R(w), _e(), B(), Se(), P()), r.interaction = { kind: "world_select" }, t.setPointerCapture(C.pointerId), !0);
  }
  function ee(C) {
    var ue;
    const N = !!(r.worldSelectedId || g()) && r.primaryTool === "cursor" && y() && !!((ue = d().space) != null && ue.gizmo) ? pe("hover", C) : null;
    N !== r.gizmoAxis && (r.gizmoAxis = N, o.backgroundDirty = !0, P({ localOnly: !0, reason: ot.VIEW }));
  }
  function me(C, G) {
    const N = pe("move", G);
    if (N && C.camera) {
      for (const [A, E] of Object.entries(Gf(C.mode, C.base, C.start, N))) Xt(s.camera, A, r.frame, E);
      ae(), C.changed = !0, n.request("sidePanel"), P({ localOnly: !0 });
      return;
    }
    const ue = q(C.id);
    !N || !ue || (e_(ue, r.frame, Gf(C.mode, C.base, C.start, N)), C.changed = !0, H(), n.request("sidePanel"), P({ localOnly: !0 }));
  }
  function oe(C) {
    r.interaction = null, r.gizmoAxis = null, C.kind === "world_gizmo" && (pe("up", r.pointerPos), o.backgroundDirty = !0, C.changed && (O(), a(), _e())), ge(r.pointerPos), P();
  }
  return {
    connect(C) {
      ({
        commitAndRefreshNode: a,
        commitState: l,
        currentSpaceCamera: c,
        editorViewInput: d,
        getMultiSelectionGeom: u,
        getSelected: f,
        getSelectedItems: h,
        handleHit: _,
        isCameraSelected: g,
        isItemLocked: v,
        isSpaceView: y,
        markObjectVisualsDirty: H,
        objectGeom: W,
        pushHistory: O,
        requestDraw: P,
        selectWorldSticker: R,
        selectedWorldSticker: Z,
        stickerById: q,
        syncCutoutShot: ae,
        syncFloatingViewButtonState: Se,
        updateCursor: ge,
        updateSelectionMenu: B,
        updateSidePanel: _e
      } = C);
    },
    worldGizmoPointer: pe,
    startWorldStickerPress: fe,
    hoverWorldGizmo: ee,
    dragWorldGizmo: me,
    endWorldStickerPress: oe
  };
}
function SI(e) {
  const { editor: t, shotEditor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, h, _, g;
  function v(H, W) {
    H.current = W, f({ localOnly: !0, reason: ot.OVERLAY });
  }
  function y() {
    var P;
    const H = d(t.interaction.start, t.interaction.current), O = [
      ...r === "cutout" ? i().filter((R) => !l(R)) : [...o()],
      ...a(),
      ...s()
    ].filter((R) => u(H, c(R)));
    h(O, ((P = O[O.length - 1]) == null ? void 0 : P.id) || null), n && O.length && (t.cutoutAspectOpen = !1), g(), _(), f();
  }
  return {
    connect(H) {
      ({
        getCutoutSelectableItemsForHit: i,
        getList: o,
        getSelectableRasterObjectItems: s,
        getSelectableStrokeGroupItems: a,
        isShotItem: l,
        objectGeom: c,
        rectFromPoints: d,
        rectIntersectsGeom: u,
        requestDraw: f,
        setSelectedItems: h,
        updateSelectionMenu: _,
        updateSidePanel: g
      } = H);
    },
    moveMarquee: v,
    endMarquee: y
  };
}
function _I(e) {
  const { canvas: t, editor: n, node: r, shotEditor: i } = e;
  let o, s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C;
  function G(V) {
    return n.mode === "frame" ? (() => {
      const ne = f();
      return ne ? _e(V, ne, performance.now()) : null;
    })() : B(V, performance.now());
  }
  function N(V) {
    return Oo(g(V.actionGroupId, V.layerKind));
  }
  function ue(V) {
    return Oo(d(V.actionGroupId, V.layerKind));
  }
  function A(V) {
    return Oo(_().find((ne) => String((ne == null ? void 0 : ne.id) || "") === q(V.rasterObjectId || V.id || "")));
  }
  function E(V, ne, k) {
    if (n.mode === "frame" && i) {
      const U = f(), ie = h(U);
      if (!U || !ie) return !1;
      const ke = {
        x: Te((ne - ie.x) / Math.max(1, ie.w), 0, 1),
        y: Te((k - ie.y) / Math.max(1, ie.h), 0, 1)
      }, Me = u(U, ke);
      if (!Me) return !1;
      const Ae = Cp(Me);
      C(V, { yaw_deg: Ae.yaw, pitch_deg: Ae.pitch });
    } else if (n.mode === "unwrap") {
      const U = v(), ie = Te((ne - U.x) / Math.max(U.w, 1), 0, 1), ke = Te((k - U.y) / Math.max(U.h, 1), 0, 1);
      C(V, { yaw_deg: Ft(ie * 360 - 180), pitch_deg: Te(90 - ke * 180, -90, 90) });
    } else {
      const U = pe(ne, k), ie = Cp(U);
      C(V, { yaw_deg: ie.yaw, pitch_deg: ie.pitch });
    }
    return !0;
  }
  function w(V, ne, k, U, ie) {
    n.interaction = O(k) ? {
      kind: "scale_stroke_group",
      item: k,
      center: U.center,
      startDist: Math.max(1, Math.hypot(ne.x - U.center.x, ne.y - U.center.y)),
      snapshot: N(k),
      frameSnapshot: ue(k),
      cursor: ie.cursor
    } : y(k) ? {
      kind: "scale_raster_object",
      item: k,
      center: U.center,
      startDist: Math.max(1, Math.hypot(ne.x - U.center.x, ne.y - U.center.y)),
      snapshot: A(k),
      cursor: ie.cursor
    } : {
      kind: "scale",
      item: k,
      center: U.center,
      startDist: Math.max(1, Math.hypot(ne.x - U.center.x, ne.y - U.center.y)),
      startHFOV: Number(ae(k).hFOV_deg || 20),
      startVFOV: Number(ae(k).vFOV_deg || 20),
      cursor: ie.cursor
    }, me(ne), t.setPointerCapture(V.pointerId);
  }
  function M(V, ne, k, U, ie) {
    n.interaction = {
      kind: ie.kind,
      item: k,
      center: U.center,
      startDist: Math.max(1, Math.hypot(ne.x - U.center.x, ne.y - U.center.y)),
      startHFOV: Number(ae(k).hFOV_deg || 20),
      startVFOV: Number(ae(k).vFOV_deg || 20),
      cursor: ie.cursor,
      edge: ie.edge
    }, me(ne), t.setPointerCapture(V.pointerId);
  }
  function le(V, ne, k, U) {
    n.interaction = O(k) ? {
      kind: "rotate_stroke_group",
      item: k,
      center: U.center,
      startAng: Math.atan2(ne.y - U.center.y, ne.x - U.center.x),
      snapshot: N(k),
      frameSnapshot: ue(k)
    } : {
      kind: "rotate",
      item: k,
      center: U.center,
      startRot: Number(ae(k).rot_deg || ae(k).roll_deg || 0),
      startAng: Math.atan2(ne.y - U.center.y, ne.x - U.center.x)
    }, me(ne), t.setPointerCapture(V.pointerId);
  }
  function ye(V, ne, k, U) {
    if (O(k)) {
      const ie = G(ne);
      n.interaction = {
        kind: "move_stroke_group",
        item: k,
        startUv: ie,
        snapshot: N(k),
        frameSnapshot: ue(k)
      }, me(ne), t.setPointerCapture(V.pointerId);
      return;
    }
    if (y(k)) {
      const ie = G(ne);
      n.interaction = {
        kind: "move_raster_object",
        item: k,
        startUv: ie,
        snapshot: A(k)
      }, me(ne), t.setPointerCapture(V.pointerId);
      return;
    }
    n.interaction = {
      kind: "move",
      item: k,
      offset: { x: ne.x - U.center.x, y: ne.y - U.center.y }
    }, me(ne), t.setPointerCapture(V.pointerId);
  }
  function D(V, ne, k) {
    n.interaction = {
      kind: O(k.item) ? "move_stroke_group" : y(k.item) ? "move_raster_object" : "move",
      item: k.item,
      offset: { x: ne.x - k.geom.center.x, y: ne.y - k.geom.center.y },
      startUv: O(k.item) || y(k.item) ? G(ne) : null,
      snapshot: O(k.item) ? N(k.item) : y(k.item) ? A(k.item) : null,
      frameSnapshot: O(k.item) ? ue(k.item) : null
    }, me(ne), t.setPointerCapture(V.pointerId);
  }
  function b(V, ne) {
    const k = ne.x - V.offset.x, U = ne.y - V.offset.y;
    E(V.item, k, U) && (W(V.item) && P(), ge({ localOnly: !0 }));
  }
  function K(V, ne) {
    var ke, Me;
    const k = G(ne);
    if (!k || !V.startUv) return;
    const U = fe(Number(k.u || 0), Number(V.startUv.u || 0)), ie = Number(k.v || 0) - Number(V.startUv.v || 0);
    a((ke = V.item) == null ? void 0 : ke.actionGroupId, U, ie, V.snapshot, (Me = V.item) == null ? void 0 : Me.layerKind, V.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ge({ localOnly: !0, reason: ot.PAINT }));
  }
  function p(V, ne) {
    var ke, Me;
    const k = G(ne);
    if (!k || !V.startUv) return;
    const U = fe(Number(k.u || 0), Number(V.startUv.u || 0)), ie = Number(k.v || 0) - Number(V.startUv.v || 0);
    o(((ke = V.item) == null ? void 0 : ke.rasterObjectId) || ((Me = V.item) == null ? void 0 : Me.id) || "", U, ie, V.snapshot) && (R(), ge({ localOnly: !0, reason: ot.PAINT }));
  }
  function m(V, ne) {
    var ie, ke;
    const U = Math.max(1, Math.hypot(ne.x - V.center.x, ne.y - V.center.y)) / Math.max(1, Number(V.startDist || 1));
    s(((ie = V.item) == null ? void 0 : ie.rasterObjectId) || ((ke = V.item) == null ? void 0 : ke.id) || "", U, V.snapshot) && (R(), ge({ localOnly: !0, reason: ot.PAINT }));
  }
  function x(V, ne) {
    var ie, ke;
    const U = Math.max(1, Math.hypot(ne.x - V.center.x, ne.y - V.center.y)) / Math.max(1, Number(V.startDist || 1));
    l((ie = V.item) == null ? void 0 : ie.actionGroupId, U, 0, V.snapshot, (ke = V.item) == null ? void 0 : ke.layerKind, V.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ge({ localOnly: !0, reason: ot.PAINT }));
  }
  function I(V, ne, k) {
    var ie, ke;
    let U = (Math.atan2(ne.y - V.center.y, ne.x - V.center.x) - Number(V.startAng || 0)) * di;
    k.shiftKey && (U = Math.round(U / 45) * 45), l((ie = V.item) == null ? void 0 : ie.actionGroupId, 1, U, V.snapshot, (ke = V.item) == null ? void 0 : ke.layerKind, V.frameSnapshot) && (Z({ rebuildPaintEngine: !1 }), ge({ localOnly: !0, reason: ot.PAINT }));
  }
  function $(V, ne) {
    const U = Math.max(1, Math.hypot(ne.x - V.center.x, ne.y - V.center.y)) / V.startDist;
    V.kind === "scale" ? C(V.item, { hFOV_deg: Te(V.startHFOV * U, 1, 179), vFOV_deg: Te(V.startVFOV * U, 1, 179) }) : V.kind === "scale_x" ? C(V.item, { hFOV_deg: Te(V.startHFOV * U, 1, 179) }) : C(V.item, { vFOV_deg: Te(V.startVFOV * U, 1, 179) }), H(V.item) || (V.item.aspect_id = is(V.item)), W(V.item) && P(), ge({ localOnly: !0 });
  }
  function Y(V, ne, k) {
    let ie = (Math.atan2(ne.y - V.center.y, ne.x - V.center.x) - V.startAng) * di, ke = V.startRot - ie;
    k.shiftKey && (ke = Math.round(ke / 45) * 45), C(V.item, { [W(V.item) ? "rot_deg" : "roll_deg"]: ke }), W(V.item) && P(), ge({ localOnly: !0 });
  }
  function se() {
    let V = !1;
    (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (V = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (V = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (V = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (V = !0), V && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? Z({ rebuildPaintEngine: !0 }) : R()), Se(), c(), r.setDirtyCanvas(!0, !0), ee(), oe(), ge();
  }
  return {
    connect(V) {
      ({
        applyRasterObjectOffset: o,
        applyRasterObjectTransform: s,
        applyStrokeGroupOffset: a,
        applyStrokeGroupTransform: l,
        commitState: c,
        ensureGroupFrame: d,
        frameLocalPointToWorldDir: u,
        getActiveCutoutShot: f,
        getFrameViewRect: h,
        getRasterObjectList: _,
        getStrokeGroupStrokes: g,
        getUnwrapRect: v,
        isRasterObjectItem: y,
        isSceneSticker: H,
        isStickerItem: W,
        isStrokeGroupItem: O,
        markObjectVisualsDirty: P,
        markPaintCompositeVisualsDirty: R,
        markPaintStrokeVisualsDirty: Z,
        parseRasterObjectSelectionId: q,
        poseOf: ae,
        pushHistory: Se,
        requestDraw: ge,
        screenPosToErpPoint: B,
        screenPosToFrameAsErpPoint: _e,
        screenToWorldDir: pe,
        shortestWrappedDelta: fe,
        syncSidePanelControls: ee,
        updateCursor: me,
        updateSelectionMenu: oe,
        writePose: C
      } = V);
    },
    editUvAt: G,
    strokeGroupSnapshot: N,
    strokeGroupFrameSnapshot: ue,
    rasterObjectSnapshot: A,
    writePoseAtScreenPoint: E,
    startScale: w,
    startAxisScale: M,
    startRotate: le,
    startMove: ye,
    startHitMove: D,
    moveItem: b,
    moveStrokeGroup: K,
    moveRasterObject: p,
    scaleRasterObject: m,
    scaleStrokeGroup: x,
    rotateStrokeGroup: I,
    scaleItem: $,
    rotateItem: Y,
    endTransform: se
  };
}
function wI(e) {
  const { canvas: t, editor: n, type: r } = e;
  let i, o, s, a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se;
  function ge(pe, fe) {
    var me, oe;
    const ee = y(pe);
    return ee != null && ee.visible ? { x: Number(((me = ee.center) == null ? void 0 : me.x) || 0), y: Number(((oe = ee.center) == null ? void 0 : oe.y) || 0) } : { x: fe.x, y: fe.y };
  }
  function B(pe, fe, ee, me) {
    n.interaction = {
      kind: "move_multi",
      items: ee.map((oe) => oe),
      offset: { x: fe.x - me.center.x, y: fe.y - me.center.y },
      startCenter: { x: me.center.x, y: me.center.y },
      stickerSnapshots: ee.filter((oe) => f(oe)).map((oe) => ({
        id: String(oe.id || ""),
        yaw_deg: Number(W(oe).yaw_deg || 0),
        pitch_deg: Number(W(oe).pitch_deg || 0),
        center: ge(oe, fe)
      })),
      strokeSnapshots: ee.filter((oe) => h(oe)).map((oe) => ({
        id: String(oe.actionGroupId || oe.id || ""),
        layerKind: String(oe.layerKind || "paint"),
        snapshot: q(oe),
        frameSnapshot: Z(oe),
        center: ge(oe, fe),
        centerUv: d(oe.actionGroupId, oe.layerKind)
      })),
      rasterSnapshots: ee.filter((oe) => u(oe)).map((oe) => ({
        id: H(oe.rasterObjectId || oe.id || ""),
        snapshot: O(oe),
        center: ge(oe, fe),
        centerUv: c(oe)
      }))
    }, ae(fe), t.setPointerCapture(pe.pointerId);
  }
  function _e(pe, fe) {
    var A, E, w, M, le, ye, D, b, K, p;
    const ee = fe.x - Number(((A = pe.offset) == null ? void 0 : A.x) || 0), me = fe.y - Number(((E = pe.offset) == null ? void 0 : E.y) || 0);
    let oe = !1, C = !1, G = !1;
    const N = ee - Number(((w = pe.startCenter) == null ? void 0 : w.x) || ee), ue = me - Number(((M = pe.startCenter) == null ? void 0 : M.y) || me);
    for (const m of Array.isArray(pe.stickerSnapshots) ? pe.stickerSnapshots : []) {
      const x = (r === "cutout" ? a() : l()).find(($) => String(($ == null ? void 0 : $.id) || "") === String(m.id || ""));
      if (!x || !f(x)) continue;
      const I = {
        x: Number(((le = m.center) == null ? void 0 : le.x) || 0) + N,
        y: Number(((ye = m.center) == null ? void 0 : ye.y) || 0) + ue
      };
      Se(x, I.x, I.y) && (oe = !0);
    }
    for (const m of Array.isArray(pe.strokeSnapshots) ? pe.strokeSnapshots : []) {
      const x = {
        x: Number(((D = m.center) == null ? void 0 : D.x) || 0) + N,
        y: Number(((b = m.center) == null ? void 0 : b.y) || 0) + ue
      }, I = s(x), $ = m.centerUv || null;
      if (I && $) {
        const Y = R(Number(I.u || 0), Number($.u || 0)), se = Number(I.v || 0) - Number($.v || 0);
        o(m.id, Y, se, m.snapshot, m.layerKind, m.frameSnapshot) && (oe = !0, C = !0);
      }
    }
    for (const m of Array.isArray(pe.rasterSnapshots) ? pe.rasterSnapshots : []) {
      const x = {
        x: Number(((K = m.center) == null ? void 0 : K.x) || 0) + N,
        y: Number(((p = m.center) == null ? void 0 : p.y) || 0) + ue
      }, I = s(x), $ = m.centerUv || null;
      if (I && $) {
        const Y = R(Number(I.u || 0), Number($.u || 0)), se = Number(I.v || 0) - Number($.v || 0);
        i(m.id, Y, se, m.snapshot) && (oe = !0, G = !0);
      }
    }
    oe && (C ? v({ rebuildPaintEngine: !1 }) : G ? g() : _(), P({ localOnly: !0 }));
  }
  return {
    connect(pe) {
      ({
        applyRasterObjectOffset: i,
        applyStrokeGroupOffset: o,
        editUvAt: s,
        getCutoutSelectableItems: a,
        getList: l,
        getRasterObjectCenterUv: c,
        getStrokeGroupCenterUv: d,
        isRasterObjectItem: u,
        isStickerItem: f,
        isStrokeGroupItem: h,
        markObjectVisualsDirty: _,
        markPaintCompositeVisualsDirty: g,
        markPaintStrokeVisualsDirty: v,
        objectGeom: y,
        parseRasterObjectSelectionId: H,
        poseOf: W,
        rasterObjectSnapshot: O,
        requestDraw: P,
        shortestWrappedDelta: R,
        strokeGroupFrameSnapshot: Z,
        strokeGroupSnapshot: q,
        updateCursor: ae,
        writePoseAtScreenPoint: Se
      } = pe);
    },
    startMultiMove: B,
    moveMulti: _e
  };
}
function kI(e) {
  const {
    cameraV2: t,
    coverageWidget: n,
    editor: r,
    node: i,
    previewMode: o,
    runtime: s,
    shotEditor: a,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, h, _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye;
  function D(I, $, Y = !1) {
    var ke;
    N();
    const se = a && r.mode === "frame" ? H() : null, V = se || P(), ne = se ? "shot" : Z(), k = C();
    if (k && !le(k) || !k && (!V || ne === "stroke" || q(V))) return;
    const U = (((ke = u.sidePanel) == null ? void 0 : ke.params) || []).find((Me) => Me.key === I);
    if (!U || U.enabled === !1) return;
    let ie = Number($);
    if (Number.isNaN(ie) && (ie = 0), (k || t) && hA.has(I) ? ie = I === "scale" ? Math.max(ie, L0) : ie : ie = Te(ie, Number(U.min), Number(U.max)), I === "yaw_deg" && (ie = Ft(ie)), !k && t && I.startsWith("position_")) {
      A(), XS(l.camera, r.frame, I, ie), M(), ee(), Y && pe();
      return;
    }
    if (k) {
      QS(k, r.frame, I, ie), ge(), M(), ee(), Y && pe();
      return;
    }
    I === "opacity" ? JS(V, r.frame, ie / 100) : ye(V, { [I]: ie }), a && !ae(V) && (I === "hFOV_deg" || I === "vFOV_deg") && (V.aspect_id = is(V)), M(), ee(), Y && pe();
  }
  function b(I, $) {
    var V;
    const Y = (V = u.sidePanel) == null ? void 0 : V.upstream;
    if (!Y) return !1;
    const se = $ ? Y.lanes.find((ne) => ne.name === $ && ne.action === I) : I === "revert-upstream" ? Y.revertAll : null;
    return !!se && !se.disabled;
  }
  function K(I) {
    const $ = C() || P();
    Et($) && (N(), oe($, I) && (fe(), ge(), pe(), v(), M(), w(), ee()));
  }
  async function p(I) {
    var se, V, ne, k, U, ie, ke;
    const $ = I.target.closest("[data-action]");
    if (!$) return;
    const Y = String($.getAttribute("data-action") || "");
    if (Y === "coverage-set") {
      const Me = yn($.getAttribute("data-coverage"));
      if (Me === yn(l.coverage)) return;
      l.coverage = Me, r.coverage = Me, n && (n.value = String(Me)), o ? s.backgroundDirty = !0 : (y(), ue({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), M(), w(), ee();
      return;
    }
    if (Y === "revert-handoff-lane" || Y === "revert-upstream") {
      const Me = $.getAttribute("data-lane") || null;
      if (!b(Y, Me)) return;
      Y === "revert-handoff-lane" ? (N(), me(Me)) : K(Me);
      return;
    }
    if (Y === "toggle-selection-picker") {
      if ((V = (se = u.sidePanel) == null ? void 0 : se.selectionPicker) != null && V.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (Y === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Me = String($.getAttribute("data-selection-id") || "");
      let Ae = null;
      if (Me && (d === "stickers" ? Ae = [...O(), ...c ? l.shots : []].find((xe) => String((xe == null ? void 0 : xe.id) || "") === Me) || null : Ae = ((ne = W().find((xe) => {
        var ve;
        return String(((ve = xe == null ? void 0 : xe.item) == null ? void 0 : ve.id) || "") === Me;
      })) == null ? void 0 : ne.item) || null), G(Ae || null), Ae && !Se(Ae)) {
        const xe = _e(Ae);
        E(Ft(Number(xe.yaw_deg || 0)), Te(Number(xe.pitch_deg || 0), -89.9, 89.9));
      }
      M(), w(), ee();
      return;
    }
    if (Y === "copy-state-inline") {
      const Me = P(), Ae = Z();
      if (!Me || Ae === "stroke" || R().length > 1) return;
      const xe = JSON.stringify(a && Ae !== "image" ? h(Me) : _(_e(Me)));
      try {
        await navigator.clipboard.writeText(xe), (k = u.sidePanel) != null && k.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ve;
          (ve = u.sidePanel) != null && ve.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (Y === "set-invert-x") {
      l.ui_settings.invert_view_x = $.getAttribute("data-value") === "1", B(), M(), (U = i.setDirtyCanvas) == null || U.call(i, !0, !0), ee();
      return;
    }
    if (Y === "set-invert-y") {
      l.ui_settings.invert_view_y = $.getAttribute("data-value") === "1", B(), M(), (ie = i.setDirtyCanvas) == null || ie.call(i, !0, !0), ee();
      return;
    }
    if (Y === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, B(), M(), (ke = i.setDirtyCanvas) == null || ke.call(i, !0, !0), ee();
      return;
    }
    if (Y === "close-preview") {
      g();
      return;
    }
    if (Y === "cancel-close") {
      g();
      return;
    }
    Y === "save-close" && (f(), g());
  }
  function m(I) {
    const $ = I.target.closest("[data-action='param-input']");
    $ && D(String($.getAttribute("data-param-key") || ""), $.value, !1);
  }
  function x(I) {
    const $ = I.target.closest("[data-action='param-input']");
    $ && D(String($.getAttribute("data-param-key") || ""), $.value, !0);
  }
  return {
    connect(I) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: h,
        buildCanonicalSelectedStickerState: _,
        closeEditor: g,
        commitAndRefreshNode: v,
        commitState: y,
        getActiveCutoutShot: H,
        getCutoutInspectorItems: W,
        getList: O,
        getSelected: P,
        getSelectedItems: R,
        getSelectedKind: Z,
        isItemLocked: q,
        isSceneSticker: ae,
        isStrokeGroupItem: Se,
        markObjectVisualsDirty: ge,
        persistUiSettings: B,
        poseOf: _e,
        pushHistory: pe,
        releaseHiddenSelection: fe,
        requestDraw: ee,
        revertPortHandoffLane: me,
        revertUpstreamSticker: oe,
        selectedWorldSticker: C,
        setSelectedItem: G,
        stopTimelinePlayback: N,
        syncCoverageChangeToNodePreviews: ue,
        syncCutoutShot: A,
        turnViewTo: E,
        updateSelectionMenu: w,
        updateSidePanel: M,
        worldStickerEditable: le,
        writePose: ye
      } = I);
    },
    onSidePanelClick: p,
    onSidePanelInput: m,
    onSidePanelChange: x
  };
}
function xI(e) {
  const {
    editor: t,
    node: n,
    overlay: r,
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
  let _, g, v, y, H, W, O, P, R, Z, q, ae, Se, ge, B, _e, pe, fe, ee, me, oe, C, G, N, ue, A, E, w, M, le, ye, D, b, K, p, m, x, I, $, Y, se, V, ne, k, U, ie, ke, Me, Ae, xe, ve;
  const Q = () => {
    if (!t.customPaintSessionStart) return;
    if (Ta(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (EA(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      Sn(t.customPaintColor),
      ...t.customPaintHistory.filter((je) => !Ta(je, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, T = (Ce = !1) => {
    !i || i.hidden || (Ce ? Q() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, F = () => {
    i && (i.hidden && (t.customPaintSessionStart = Sn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function J() {
    $();
  }
  function L(Ce) {
    var Be, st, dt, lt, yt;
    if ((st = (Be = Ce.target) == null ? void 0 : Be.matches) != null && st.call(Be, "[data-confirm-overlay]")) {
      const qe = (dt = f.confirmDialog) == null ? void 0 : dt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const je = Ce.target.closest("[data-space-mode]");
    if (je) {
      K(je.getAttribute("data-space-mode"));
      return;
    }
    const ce = Ce.target.closest("[data-gizmo-mode]");
    if (ce) {
      t.gizmoMode = ce.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, Ae(), w({ localOnly: !0, reason: ot.VIEW });
      return;
    }
    const te = Ce.target.closest("[data-view]");
    if (te) {
      if (te.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(te.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), xe(), Ae()), ge(), ne(), w();
      return;
    }
    const be = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (be && !a) {
      if (be.matches("[data-tool-mode]")) {
        const qe = String(be.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && R({ preservePanelValues: !0 }), Y(), xe(), Ae(), w();
        return;
      }
      if (be.matches("[data-tool-ui-action]")) {
        const qe = String(be.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && be.disabled) return;
        qe === "undo" ? M(-1) : qe === "redo" ? M(1) : qe === "clear" ? O() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? y() : qe === "add-or-look" ? _() : qe === "add-camera" && v();
        return;
      }
      if (be.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(be.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, R({ preservePanelValues: !0 }), pn[qe] && (t.activeBrushPresetId = qe), Y(), xe(), Ae(), w();
        return;
      }
      if (be.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(be.getAttribute("data-mask-tool") || "pen"), R({ preservePanelValues: !0 }), Y(), xe(), Ae(), w();
        return;
      }
      if (be.matches("[data-paint-layer-clear-current]")) {
        const qe = String(be.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        P(qe);
        return;
      }
      if (be.matches("[data-paint-color-swatch]")) {
        const qe = ol.find((jt) => jt.id === be.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = Sn(qe.color), T(!0), Y();
        return;
      }
      if (be.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? T(!0) : F(), Y();
        return;
      }
    }
    const Pe = String(((lt = be == null ? void 0 : be.getAttribute) == null ? void 0 : lt.call(be, "data-action")) || "");
    if (Pe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      ve.resumeAfterScrub = !1, k();
      return;
    }
    if (Pe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), ke(), typeof (be == null ? void 0 : be.blur) == "function" && be.blur();
      return;
    }
    if (Pe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, h.loop = qe, V({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: h.muted,
        volume: Number(h.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (be == null ? void 0 : be.blur) == "function" && be.blur();
      return;
    }
    if (!a) {
      if (Pe === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Pe === "frame-aspect-set") {
        const qe = t.mode === "frame" ? _e() : null;
        if (!qe || qe.locked === !0) return;
        b(qe, String(be.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, se(), ue(), Z(), ne(), xe(), Ae(), w();
        return;
      }
      if (Pe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? _e() : null, jt = be.getAttribute("data-custom-width"), Tt = be.getAttribute("data-custom-height");
        if (!qe || !H(qe, jt, Tt)) return;
        f.frameRail.aspectOpen = !1, se(), ue(), Z(), ne(), w();
        return;
      }
      if (Pe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? _e() : null;
        if (!qe || qe.locked === !0) return;
        ye(qe), f.frameRail.aspectOpen = !1, se(), ue(), Z(), ne(), w();
        return;
      }
      if (Pe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, Ae(), w();
        return;
      }
      if (Pe === "aspect-set") {
        const qe = fe();
        if (!qe) return;
        const jt = String(be.getAttribute("data-aspect") || "1:1");
        b(qe, jt), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, se(), ue(), Z(), Ae(), w();
        return;
      }
      if (Pe === "rotate-90") {
        const qe = fe();
        if (!qe || oe()) return;
        ye(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, se(), ue(), Z(), Ae(), w();
        return;
      }
      if (Pe === "bring-front") {
        W();
        return;
      }
      if (Pe === "send-back") {
        D();
        return;
      }
      if (Pe === "duplicate") {
        Se();
        return;
      }
      if (Pe === "replace-image") {
        E();
        return;
      }
      if (Pe === "toggle-lock") {
        ie();
        return;
      }
      if (Pe === "back-initial") {
        le();
        return;
      }
      if (Pe === "toggle-visible") {
        U();
        return;
      }
      if (Pe === "delete") {
        ae();
        return;
      }
    }
    if (Pe === "reset-view") {
      if (t.mode === "frame") return;
      Me(
        { position: x(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: wr, distance: ((yt = q()) == null ? void 0 : yt.radius) || Gn },
        { mode: Da(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Pe === "frame-view") {
      if (!C() || Da(t.spaceMode, t.viewTransition) !== "6dof") return;
      B();
      return;
    }
    if (Pe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, zA(n == null ? void 0 : n.id, t.showGrid), J(), w();
      return;
    }
    if (Pe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), ze();
      return;
    }
    if (Pe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, I(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), We(), w();
      return;
    }
    const Oe = Ce.target.closest("[data-paint-history-index]");
    if (!Oe) return;
    const Ee = Number(Oe.getAttribute("data-paint-history-index")), Ve = t.customPaintHistory[Ee];
    Ve && (t.customPaintColor = Sn(Ve), t.paintColor = Sn(Ve), Y());
  }
  function X(Ce) {
    const je = Ce.target.closest("[data-video-seek]");
    if (je) {
      if (!(h instanceof HTMLVideoElement)) return;
      G.playing && (ve.resumeAfterScrub = !0), G.seek(Qr(Number(je.value || 0), N()));
      return;
    }
    const ce = Ce.target.closest("[data-video-volume]");
    if (ce) {
      if (!(h instanceof HTMLVideoElement)) return;
      const Pe = Te(Number(ce.value || 0), 0, 1);
      h.volume = Pe, h.muted = Pe <= 1e-4, V({
        hasAudio: f.videoTransport.hasAudio,
        muted: h.muted,
        volume: Pe
      });
      return;
    }
    const te = Ce.target.closest("[data-paint-size-slider]");
    if (te) {
      if (te.disabled) return;
      const Pe = Math.max(1, Math.min(120, Math.round(Number(te.value)))), Oe = pe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Oe] = Pe, Y(), p();
      return;
    }
    const be = Ce.target.closest("[data-paint-alpha-slider]");
    if (be) {
      const Pe = { ...t.customPaintColor, a: Te(Number(be.value) / 100, 0, 1) };
      t.customPaintColor = Sn(Pe), t.paintColor = Sn(Pe), Y();
    }
  }
  function j(Ce) {
    var je;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(h instanceof HTMLVideoElement)) return;
      ve.resumeAfterScrub && G.play(), ve.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((je = Ce.target) == null ? void 0 : je.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && ee();
  }
  function S(Ce) {
    const je = Ce.target.closest("[data-tip]");
    !je || !l.contains(je) || u.target !== je && (u.target = je, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === je && m(je);
    }, 220));
  }
  function z(Ce) {
    var te, be;
    const je = Ce.target.closest("[data-tip]");
    !je || u.target !== je || (Ce.relatedTarget instanceof Element ? (be = (te = Ce.relatedTarget).closest) == null ? void 0 : be.call(te, "[data-tip]") : null) === je || me();
  }
  function re(Ce, je) {
    var Ee;
    if (!o) return;
    const ce = o.getBoundingClientRect(), te = Te((Ce - ce.left) / Math.max(1, ce.width), 0, 1), be = 1 - Te((je - ce.top) / Math.max(1, ce.height), 0, 1), Pe = Jc(t.customPaintColor), Oe = { ...Xc(Pe.h, te, be), a: Number(((Ee = t.customPaintColor) == null ? void 0 : Ee.a) ?? 1) };
    t.customPaintColor = Sn(Oe), t.paintColor = Sn(Oe), Y();
  }
  function he(Ce) {
    var Pe;
    if (!s) return;
    const je = s.getBoundingClientRect(), ce = Te((Ce - je.left) / Math.max(1, je.width), 0, 1), te = Jc(t.customPaintColor), be = { ...Xc(ce, te.s, te.v), a: Number(((Pe = t.customPaintColor) == null ? void 0 : Pe.a) ?? 1) };
    t.customPaintColor = Sn(be), t.paintColor = Sn(be), Y();
  }
  function de(Ce, je) {
    const ce = Ce.pointerId;
    je(Ce);
    const te = (Pe) => {
      Pe.pointerId === ce && je(Pe);
    }, be = (Pe) => {
      Pe.pointerId === ce && (window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", be), window.removeEventListener("pointercancel", be));
    };
    window.addEventListener("pointermove", te), window.addEventListener("pointerup", be), window.addEventListener("pointercancel", be);
  }
  function we() {
    const Ce = !!t.fullscreen;
    Ai(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? He.fullscreen_close : He.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ie(Ce) {
    const je = !!Ce;
    t.fullscreen !== je && (t.fullscreen = je, l.classList.toggle("pano-modal-fullscreen", je), je ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), J(), we(), A(), w());
  }
  function De() {
    return document.fullscreenElement === r;
  }
  async function ze() {
    var Ce, je;
    try {
      if (!document.fullscreenEnabled) {
        Ie(!t.fullscreen);
        return;
      }
      De() ? await ((je = document.exitFullscreen) == null ? void 0 : je.call(document)) : await ((Ce = r.requestFullscreen) == null ? void 0 : Ce.call(r));
    } catch {
      Ie(!t.fullscreen);
    }
  }
  function Ue() {
    document.fullscreenEnabled && Ie(De());
  }
  function We() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? He.fullscreen_close : He.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: _,
        addImageSticker: g,
        addStudioCamera: v,
        addToWorld: y,
        applyCutoutAspectCustom: H,
        bringSelectedToFront: W,
        clearAll: O,
        clearPaintingLayer: P,
        clearSelection: R,
        commitAndRefreshNode: Z,
        contentSphere: q,
        deleteSelected: ae,
        duplicateSelected: Se,
        forceCursorTool: ge,
        frameSpaceContent: B,
        getActiveCutoutShot: _e,
        getBrushPresetIdForTool: pe,
        getSelected: fe,
        hidePaintSizePreview: ee,
        hideTooltip: me,
        isErpCamera: oe,
        isFreeSpaceView: C,
        playback: G,
        playbackFps: N,
        pushHistory: ue,
        queueVideoTransportLayout: A,
        replaceSelectedImage: E,
        requestDraw: w,
        restoreHistory: M,
        restoreSelectedToInitialPose: le,
        rotateCutoutAspect90: ye,
        sendSelectedToBack: D,
        setShotAspect: b,
        setSpaceMode: K,
        showPaintSizePreview: p,
        showTooltipFor: m,
        spaceOrigin: x,
        startAnimation: I,
        syncFloatingViewButtonState: $,
        syncPaintUi: Y,
        syncSidePanelControls: se,
        syncVideoTransportState: V,
        syncViewToggleState: ne,
        togglePlayback: k,
        toggleSelectedExternalStickerVisibility: U,
        toggleSelectedLock: ie,
        toggleVideoMuted: ke,
        transitionView: Me,
        updateSelectionMenu: Ae,
        updateSidePanel: xe,
        videoState: ve
      } = Ce);
    },
    closePaintColorPop: T,
    syncGridToggleButton: J,
    onRootClick: L,
    onRootInput: X,
    onRootChange: j,
    onRootPointerOver: S,
    onRootPointerOut: z,
    updatePaintColorFromSv: re,
    updatePaintColorFromHue: he,
    bindDrag: de,
    syncFullscreenButton: we,
    setFullscreenState: Ie,
    onFullscreenChange: Ue,
    syncOutputPreviewToggleButton: We
  };
}
function MI(e) {
  const {
    editor: t,
    overlay: n,
    readOnly: r,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, h, _, g, v, y, H, W, O, P, R;
  const Z = TC();
  function q(A) {
    var E, w, M, le, ye;
    if (A.key === "Escape") {
      if (l()) {
        A.preventDefault(), A.stopPropagation(), (E = A.stopImmediatePropagation) == null || E.call(A);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === n) {
        A.preventDefault(), A.stopPropagation(), (w = A.stopImmediatePropagation) == null || w.call(A), (M = document.exitFullscreen) == null || M.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        A.preventDefault(), A.stopPropagation(), (le = A.stopImmediatePropagation) == null || le.call(A), H(!1);
        return;
      }
      A.preventDefault(), A.stopPropagation(), (ye = A.stopImmediatePropagation) == null || ye.call(A), d();
    }
  }
  function ae(A) {
    const E = String(A.key || ""), w = String(A.code || ""), M = Number(A.keyCode || 0);
    if (!(E === "Delete" || w === "Delete" || M === 46) && !(E === "Backspace" || w === "Backspace" || M === 8)) return;
    const D = A.target, b = ((D == null ? void 0 : D.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || D != null && D.isContentEditable) return;
    if (o.selection) {
      f(), A.preventDefault(), A.stopPropagation();
      return;
    }
    if (h()) {
      A.preventDefault(), A.stopPropagation();
      return;
    }
    v() && (u(), A.preventDefault(), A.stopPropagation());
  }
  function Se(A) {
    if (s.confirmDialog.visible) return !1;
    const E = A.composedPath()[0];
    if (E !== document.body && E !== document.documentElement && !n.contains(E)) return !1;
    const w = ((E == null ? void 0 : E.tagName) || "").toUpperCase();
    return w === "INPUT" ? !pA.has(String(E.type || "text").toLowerCase()) : w !== "TEXTAREA" && w !== "SELECT" && !(E != null && E.isContentEditable);
  }
  function ge(A) {
    return A.code !== "Space" || A.ctrlKey || A.metaKey || A.altKey || r || !i || !s.timeline.visible ? !1 : Se(A);
  }
  function B(A) {
    ge(A) && (A.preventDefault(), A.stopPropagation(), A.repeat || P());
  }
  function _e(A) {
    ge(A) && (A.preventDefault(), A.stopPropagation());
  }
  function pe(A) {
    if (Z.modifiers(A), !!Z0(A.code)) {
      if (!Se(A)) {
        ee(A.code);
        return;
      }
      A.ctrlKey || A.metaKey || (A.preventDefault(), A.stopPropagation(), a() && (Z.press(A.code, A.timeStamp), A.repeat || c(), W(() => {
      })));
    }
  }
  function fe(A) {
    Z.modifiers(A), A.key === "Meta" && me(), ee(A.code) && (A.preventDefault(), A.stopPropagation());
  }
  function ee(A) {
    return Z.release(A) ? (Z.held || _(), !0) : !1;
  }
  function me() {
    Z.held && (Z.releaseAll(), _());
  }
  function oe() {
    document.hidden && me();
  }
  function C() {
    me();
  }
  function G(A) {
    const E = !!(A.ctrlKey || A.metaKey), w = !!A.altKey;
    t.marqueeModifier === E && t.altModifier === w || (t.marqueeModifier = E, t.altModifier = w, O(), R(t.pointerPos));
  }
  function N() {
    me(), t.marqueeModifier = !1, t.altModifier = !1, O(), R(t.pointerPos);
  }
  function ue(A) {
    if (r || !A.ctrlKey && !A.metaKey) return;
    const E = String(A.key || "").toLowerCase(), w = String(A.code || "");
    if (E !== "z" && w !== "KeyZ") return;
    const M = A.target, le = ((M == null ? void 0 : M.tagName) || "").toUpperCase();
    if (le === "INPUT" || le === "TEXTAREA" || M != null && M.isContentEditable) return;
    const { canUndo: ye, canRedo: D } = g();
    A.shiftKey && !D || !A.shiftKey && !ye || (y(A.shiftKey ? 1 : -1), A.preventDefault(), A.stopPropagation());
  }
  return {
    connect(A) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: h,
        endFrameKeyMove: _,
        getHistoryCapabilities: g,
        getSelected: v,
        restoreHistory: y,
        setFullscreenState: H,
        startAnimation: W,
        syncFrameRollKnob: O,
        togglePlayback: P,
        updateCursor: R
      } = A);
    },
    moveKeys: Z,
    onEscClose: q,
    onDeleteKey: ae,
    onSpaceKey: B,
    onSpaceKeyUp: _e,
    onMoveKeyDown: pe,
    onMoveKeyUp: fe,
    onVisibilityChange: oe,
    onContextMenu: C,
    onModifierKeyChange: G,
    onWindowBlur: N,
    onUndoRedoKey: ue
  };
}
const Dp = /* @__PURE__ */ new Map(), Vr = Cg({
  app: jn,
  api: qt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Yc,
    markImageFailed: D0,
    markImageLoading: F0,
    markImageReady: T0
  }
});
function Lp(e) {
  if (!St(e, "background") || !St(e, "external-sticker")) return null;
  const t = Vr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? jr(t[0]) : null;
}
const PI = Vr.assetSource, NI = Vr.source, AI = Vr.uiImage, CI = Vr.invalidateUiImage, Rp = Vr.loadPreferredExactLinkedImage;
async function II(e, t, n = {}) {
  var Dd, Ld, Rd, ps, Vd;
  await h0(e, { tolerateOperationFailure: !0 }), Vr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, s = FA(e, t);
  await ad();
  const a = Is(e, "output_preset"), l = Is(e, "coverage"), c = Is(e, "bg_color"), d = Is(e, fA), u = () => {
    const $e = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Rp(
      e,
      $e,
      () => Bn(),
      `background:size:${$e.join("|")}`
    );
  }, f = () => {
    const $e = u();
    return LA($e);
  }, h = ($e = 2048) => {
    const tt = a == null ? void 0 : a.value;
    return DA(tt) ? f() || Math.max(1, Math.round(Number($e || 2048))) : TA(tt, $e);
  }, _ = e.__panoSceneStateV2 === !0, g = t === "stickers" && _, v = g && e.__panoStudio === !0, y = v, H = t === "cutout" || v, W = (_ ? Lm : Dm)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: h(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: yn(l == null ? void 0 : l.value),
    sharedUiSettings: RA(),
    active: jm(e),
    fps: _ ? Lp(e) : null
  });
  kn(e).liveState = W, kn(e).liveStateVersion = 0;
  let O = null;
  y ? (O = W.camera && W.camera.visible !== !1 ? $m(W.camera, 0) : null, W.shots = O ? [{ ...O, position: [...O.position] }] : [], W.active.selected_shot_id = null) : t === "cutout" && (W.shots = Array.isArray(W.shots) ? W.shots.slice(0, 1) : [], W.shots.length || (W.active.selected_shot_id = null));
  const P = t === "cutout" ? (() => {
    var Rn;
    const $e = Array.isArray(W.shots) ? W.shots : [], tt = String(((Rn = W == null ? void 0 : W.active) == null ? void 0 : Rn.selected_shot_id) || "");
    return $e.find((Wt) => String((Wt == null ? void 0 : Wt.id) || "") === tt) || $e[0] || null;
  })() : null, R = P ? ey(P, !1) : { width: 220, height: 132 }, Z = O0(v ? "studio" : t), q = /* @__PURE__ */ Yi({
    stageStatus: Vn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (Z.viewButtons || []).map(($e) => ({ ...$e, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Dd = Z.spaceButtons) != null && Dd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Z.spaceButtons, frame: Z.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (Z.toolButtons || []).map(($e) => ({
      ...$e,
      disabled: !1,
      ...$e.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(Z.floatingButtons || []).map(($e) => ({ ...$e, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: He.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: He.aspect,
      rotateIcon: He.rotate_90,
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
      customColorCss: Qn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Qn({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, ($e, tt) => ({ index: tt, color: null })),
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
      width: R.width,
      height: R.height,
      label: P ? "Loading preview" : "Add Frame to preview"
    }
  }), ae = { frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }, Se = document.createElement("div");
  document.body.appendChild(Se);
  const ge = ({ intent: $e, file: tt } = {}) => {
    if ($e === "add-world") {
      ze(tt);
      return;
    }
    if (Cn(tt)) {
      if ($e === "add") {
        De(tt);
        return;
      }
      $e === "replace" && dy(tt);
    }
  }, B = ({ intent: $e } = {}) => {
  }, _e = gu(uA, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: Z,
    paintSwatches: ol.map(($e) => ({
      id: $e.id,
      label: $e.label,
      cssColor: Qn($e.color, 1)
    })),
    uiState: q,
    playhead: ae,
    onClose: () => {
      dl();
    },
    onTimeline: ($e) => cy($e),
    onImageFileSelected: ge,
    onImageFileCancelled: B
  });
  let pe = null;
  try {
    pe = _e.mount(Se);
  } catch ($e) {
    try {
      _e.unmount();
    } catch {
    }
    throw Se.remove(), $e;
  }
  const fe = Se.querySelector(".pano-modal-overlay"), ee = Se.querySelector(".pano-modal"), me = ee == null ? void 0 : ee.querySelector("[data-stage-overlay]"), oe = ee == null ? void 0 : ee.querySelector("[data-stage-background]"), C = ee == null ? void 0 : ee.querySelector(".pano-stage-wrap"), G = ((Ld = pe == null ? void 0 : pe.getPaintOverlayRefs) == null ? void 0 : Ld.call(pe)) || {}, N = G.cursor || null, ue = G.sizePreview || null, A = G.sizeSample || null;
  if (!fe || !ee || !me || !oe || !C || !N || !ue || !A)
    throw _e.unmount(), Se.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const E = me.getContext("2d"), w = ee.querySelector("[data-side]"), M = ee.querySelector("[data-video-element]"), le = ee.querySelector("[data-port-video-element]");
  xl(me, "editor.stage-overlay"), xl(oe, "editor.stage-background"), Pf(M, "editor.video"), Pf(le, "editor.port-video");
  const ye = ee.querySelector(".pano-floating-right"), D = ee.querySelector(".pano-floating-top"), b = ee.querySelector("[data-tool-rail]"), K = ee.querySelector("[data-frame-rail]"), p = ee.querySelector("[data-frame-roll-knob]"), m = ee.querySelector("[data-paint-dock]"), x = ee.querySelector(".pano-video-transport"), I = ee.querySelector("[data-selection-menu]"), $ = ee.querySelector("[data-tooltip]"), Y = ee.querySelector("[data-camera-preview-host]"), se = ee.querySelector("[data-camera-preview-canvas]");
  xl(se, "editor.camera-preview");
  const V = ee.querySelector("[data-paint-color-row]"), ne = ee.querySelector("[data-paint-color-pop]"), k = ee.querySelector("[data-paint-color-sv]"), U = ee.querySelector("[data-paint-color-sv-cursor]"), ie = ee.querySelector("[data-paint-hue-strip]"), ke = ee.querySelector("[data-paint-hue-handle]");
  C == null || C.removeAttribute("data-stage-ready"), C == null || C.setAttribute("data-stage-loading-kind", "boot"), me.style.opacity = "1", oe.style.opacity = "0", i && (w == null || w.remove(), ee.classList.add("pano-modal-readonly")), ee.addEventListener("pointerdown", () => j.wake(), !0), ee.addEventListener("pointerdown", ($e) => {
    var tt;
    $e.target.closest("[data-frame-roll-knob]") || yt(), !$e.target.closest(".pano-picker") && ($e.target.closest("[data-paint-color-row]") || (ee.querySelectorAll(".pano-picker-pop").forEach((Rn) => {
      Rn.hidden = !0;
    }), ce(!0), H && Ae.cutoutAspectOpen && !$e.target.closest(".pano-aspect-popover") && !$e.target.closest("[data-action='aspect']") && (Ae.cutoutAspectOpen = !1, Ae.menuMode = "", Ae.menuSize.measured = !1, Fy(), Bn()), (tt = q.frameRail) != null && tt.aspectOpen && !$e.target.closest(".pano-frame-aspect-control") && (q.frameRail.aspectOpen = !1)));
  });
  const Ae = {
    mode: "pano",
    selectedId: U0(t, W),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: wr,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Gn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: yn(W.coverage),
    historyController: nC(W),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: fr,
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
    showGrid: $A(e == null ? void 0 : e.id, !0),
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
    paintEngine: tl(),
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
  }, xe = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (Ae.selectedId = null, W.active.selected_sticker_id = null), Ae.selectedIds = Ae.selectedId ? [Ae.selectedId] : [];
  const ve = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = Gt({ label: "editor.still" });
  J.__panoFrameIdx = 0;
  const L = Gt({ label: "editor.port-still" });
  L.__panoFrameIdx = 0;
  const X = {
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
  }, j = XM({
    requestAnimationFrame: ($e) => requestAnimationFrame($e),
    cancelAnimationFrame: ($e) => cancelAnimationFrame($e),
    draw: ($e, tt) => Cy($e, tt),
    animating: () => Oe()
  }), S = YM({
    requestFrame: ($e) => j.requestFrame($e),
    cancelFrame: ($e) => j.cancelFrame($e),
    tasks: {
      seek: () => Cd.seek(xe.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => Cd.seek(Ae.frame),
      timeline: () => Ny(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Sy(), Bn({ localOnly: !0, reason: ot.STATE });
      },
      sidePanel: () => Od()
    }
  }), z = pw({
    canvas: oe,
    onReady: () => {
      ll(), Bn({ reason: ot.CONTEXT });
    },
    onFailed: () => Bn(),
    onUpdate: () => Bn({ localOnly: !0, reason: ot.MEDIA }),
    onSplats: ($e) => Bn({ localOnly: !0, reason: QC($e) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      st(), ll(), Bn({ reason: ot.CONTEXT });
    }
  }), re = Number.parseFloat(
    getComputedStyle(ee).getPropertyValue("--pano-float-radius")
  ) || 10, he = ($e) => {
    const tt = String($e || "default");
    me.style.cursor !== tt && (me.style.cursor = tt);
  }, de = {
    timer: 0,
    target: null
  }, we = {
    active: !1,
    depth: 0
  }, Ie = bu({
    getView: () => ({ yaw: Ae.viewYaw, pitch: Ae.viewPitch, fov: Ae.viewFov }),
    setView: ($e) => {
      Ae.viewYaw = Ft(Number($e.yaw || 0)), Ae.viewPitch = Te(Number($e.pitch || 0), -89.9, 89.9), Ae.viewFov = Te(Number($e.fov || Ae.viewFov || wr), 35, 140);
    },
    getViewportSize: () => {
      const $e = me.getBoundingClientRect();
      return {
        w: Math.max(1, Number($e.width || me.clientWidth || 0)),
        h: Math.max(1, Number($e.height || me.clientHeight || 0))
      };
    },
    getInvert: () => {
      var $e, tt;
      return {
        x: ($e = W.ui_settings) != null && $e.invert_view_x ? -1 : 1,
        y: (tt = W.ui_settings) != null && tt.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => dt(),
    onInteraction: () => j.requestDraw(ot.VIEW)
  }), {
    addImageStickerFromFile: De,
    addWorldStickerFromFile: ze,
    applyInitialCutoutFocus: Ue,
    applyVideoTimelineFps: We,
    bindDrag: Ce,
    cancelFrameCameraGesture: je,
    closePaintColorPop: ce,
    commitState: te,
    disposeMediaSession: be,
    disposeUpstream: Pe,
    editorAnimating: Oe,
    endFrameKeyMove: Ee,
    finishKnobRoll: Ve,
    flushFrameWheelCommit: Be,
    forgetCameraPreviewFrame: st,
    getUnwrapRect: dt,
    hidePaintSizePreview: lt,
    hideTooltip: yt,
    hoverWorldGizmo: qe,
    isFreeFrameView: jt,
    isFreeSpaceView: Tt,
    migrateLegacyEmbeddedAssets: Un,
    onCanvasDragOver: xn,
    onCanvasDrop: Mr,
    onCanvasMouseMove: Pt,
    onCanvasPointerCancel: Re,
    onCanvasPointerDown: Ge,
    onCanvasPointerMove: Ke,
    onCanvasPointerUp: Nt,
    onCanvasWheel: gt,
    onContextMenu: vn,
    onDeleteKey: Kt,
    onEscClose: Dt,
    onFrameRollKnobDoubleClick: Dn,
    onFrameRollKnobPointerDown: us,
    onFrameRollKnobPointerMove: cn,
    onFullscreenChange: ds,
    onModifierKeyChange: fs,
    onMoveKeyDown: bd,
    onMoveKeyUp: vd,
    onRootChange: ty,
    onRootClick: ny,
    onRootInput: ry,
    onRootPointerOut: iy,
    onRootPointerOver: oy,
    onSidePanelChange: sy,
    onSidePanelClick: ay,
    onSidePanelInput: ly,
    onSpaceKey: Sd,
    onSpaceKeyUp: _d,
    onTimelineAction: cy,
    onUndoRedoKey: wd,
    onVisibilityChange: kd,
    onWindowBlur: xd,
    onWindowDragEnter: Md,
    onWindowDragLeave: Pd,
    onWindowDragOver: Nd,
    onWindowDrop: Ad,
    playback: Cd,
    pushHistory: uy,
    reconcileExternalStickerFromInputs: Id,
    refreshModalVideoSource: al,
    replaceSelectedImageFromFile: dy,
    requestDraw: Bn,
    restoreView: fy,
    sampleEditorDiagnostics: py,
    saveView: hy,
    setDropCue: my,
    setPointerPos: gy,
    stageResizeObserver: yy,
    stickerCornerOrderSanity: by,
    stopRenderLoop: vy,
    syncCanvasSize: ll,
    syncCutoutShot: Sy,
    syncFullscreenButton: _y,
    syncGridToggleButton: wy,
    syncLookAtFrameButtonState: ky,
    syncOutputPreviewToggleButton: xy,
    syncPaintUi: My,
    syncPaintingLayerAsync: Py,
    syncTimeline: Ny,
    syncUndoRedoButtons: Ay,
    tick: Cy,
    triggerBackgroundPersistenceOnClose: Iy,
    updateCursor: Ed,
    updatePaintColorFromHue: Ey,
    updatePaintColorFromSv: Oy,
    updateSelectionMenu: Fy,
    updateSidePanel: Od,
    viewControls: Ty,
    watchPixelRatio: Dy
  } = jA({
    api: qt,
    app: jn,
    backgroundCanvas: oe,
    bgWidget: c,
    cameraV2: y,
    canvas: me,
    closeEditor: dl,
    comfyMedia: Vr,
    coverageWidget: l,
    ctx: E,
    cutoutPreviewCanvas: se,
    cutoutPreviewHost: Y,
    dragCue: we,
    dragFrames: S,
    editor: Ae,
    editorView: z,
    floatingRightEl: ye,
    floatingTopEl: D,
    frameGateCssRadius: re,
    frameRailEl: K,
    frameRollKnobEl: p,
    hideSidebar: i,
    imageCache: ve,
    initialShotBase: O,
    loadPreferredExactLinkedImage: Rp,
    mediaAssetSource: PI,
    mediaSource: NI,
    mediaUiImage: AI,
    node: e,
    overlay: fe,
    paintColorPop: ne,
    paintColorRow: V,
    paintColorSv: k,
    paintColorSvCursor: U,
    paintCursorEl: N,
    paintDockEl: m,
    paintHueHandle: ke,
    paintHueStrip: ie,
    paintSizePreviewEl: ue,
    paintSizePreviewSampleEl: A,
    portStillCanvas: L,
    portVideoEl: le,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: F,
    rasterImageAlphaCache: T,
    rasterImageCache: Q,
    readOnly: r,
    resolveEditorOutputPresetWidth: h,
    root: ee,
    runtime: X,
    sceneV2: g,
    scheduler: j,
    selectionMenu: I,
    setCanvasCursor: he,
    shotEditor: H,
    stageWrap: C,
    state: W,
    stateV2: _,
    stateWidget: d,
    stillCanvas: J,
    studio: v,
    timeline: xe,
    timelinePlayhead: ae,
    toolRailEl: b,
    tooltip: de,
    tooltipEl: $,
    type: t,
    uiState: q,
    videoEl: M,
    videoTimelineFps: Lp,
    videoTransportEl: x,
    viewController: Ie,
    vueModal: pe
  }, [
    QA,
    rC,
    iC,
    oC,
    sC,
    aC,
    lC,
    cC,
    uC,
    XC,
    JC,
    ZC,
    tI,
    nI,
    rI,
    iI,
    oI,
    sI,
    aI,
    lI,
    cI,
    uI,
    dI,
    fI,
    pI,
    hI,
    mI,
    gI,
    yI,
    bI,
    vI,
    SI,
    _I,
    wI,
    kI,
    xI,
    MI
  ]);
  by(), yy.observe(me), Dy();
  const Fd = () => te();
  r || (Yo(e).flushBeforeQueue = Fd), p == null || p.addEventListener("pointerdown", us), p == null || p.addEventListener("pointermove", cn), p == null || p.addEventListener("pointerup", Ve), p == null || p.addEventListener("pointercancel", () => je()), p == null || p.addEventListener("lostpointercapture", () => {
    var $e;
    (($e = Ae.interaction) == null ? void 0 : $e.source) === "knob" && je();
  }), p == null || p.addEventListener("dblclick", Dn), me.onpointerdown = Ge, me.onpointermove = Ke, me.onpointerup = Nt, me.onpointercancel = Re, me.onlostpointercapture = () => {
    je();
  }, me.onauxclick = ($e) => {
    $e.button === 1 && $e.preventDefault();
  }, me.oncontextmenu = ($e) => {
    (Tt() || jt()) && vx(Ty(), 2) && $e.preventDefault();
  }, me.onmousemove = Pt, me.onpointerleave = () => {
    Ae.interaction || qe({ x: -1e6, y: -1e6 });
  }, me.onmouseleave = () => {
    gy(Ae.pointerPos, !1), Ed(Ae.pointerPos), Ae.mode === "frame" && Ae.primaryTool === "cursor" && Bn({ localOnly: !0, reason: ot.OVERLAY });
  }, me.onwheel = gt, me.ondragover = xn, me.ondrop = Mr, window.addEventListener("dragenter", Md, !0), window.addEventListener("dragover", Nd, !0), window.addEventListener("dragleave", Pd, !0), window.addEventListener("drop", Ad, !0), w == null || w.addEventListener("click", ay), w == null || w.addEventListener("input", ly), w == null || w.addEventListener("change", sy), wy(), ee.addEventListener("click", ny), ee.addEventListener("input", ry), ee.addEventListener("change", ty), ee.addEventListener("pointerup", ($e) => {
    var tt;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((tt = $e.target) == null ? void 0 : tt.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && lt();
  }), ee.addEventListener("pointercancel", ($e) => {
    var tt;
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((tt = $e.target) == null ? void 0 : tt.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && lt();
  }), ee.addEventListener("focusout", ($e) => {
    $e.target.closest("[data-paint-size-slider]") && lt();
  }), ee.addEventListener("pointerover", oy), ee.addEventListener("pointerout", iy), ee.addEventListener("pointerdown", ($e) => {
    $e.target.closest("[data-frame-roll-knob]") || yt();
  }), k && (k.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (tt) => Oy(tt.clientX, tt.clientY));
  }), ie && (ie.onpointerdown = ($e) => {
    $e.preventDefault(), $e.stopPropagation(), Ce($e, (tt) => Ey(tt.clientX));
  }), ee.addEventListener("click", ($e) => {
    var Wr;
    const tt = $e.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!tt) return;
    const Rn = tt.getAttribute("data-action") === "confirm-accept", Wt = (Wr = q.confirmDialog) == null ? void 0 : Wr.resolve;
    q.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Wt == null || Wt(Rn);
  }), document.addEventListener("fullscreenchange", ds), _y(), xy();
  const cl = e.onConnectionsChange;
  let ul = null, Td = () => {
  };
  !r && t === "stickers" && (Td = f0(e, ($e = "sync") => {
    $e === "executed" && (CI(ve, li), al(), g && We()), Id($e);
  }, { editor: !0 }), ul = function(...tt) {
    typeof cl == "function" && cl.apply(this, tt), al(), Tr(this, "connections");
  }, e.onConnectionsChange = ul), r || Dp.set(String(e.id ?? "0"), () => Py());
  let yi = null;
  async function dl() {
    return yi || (yi = (async () => {
      var tt, Rn, Wt, Wr, Pr, hs, $d, ms, zd;
      const $e = Nw(e);
      return $e && ($e.open = !1), Dp.delete(String(e.id ?? "0")), Be(), Ee(), r || te(), hy(), document.fullscreenElement === fe && ((tt = document.exitFullscreen) == null || tt.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", ds), kn(e).liveState = null, ($e == null ? void 0 : $e.flushBeforeQueue) === Fd && ($e.flushBeforeQueue = null), (Wr = (Wt = (Rn = Fc(e)) == null ? void 0 : Rn.dom) == null ? void 0 : Wt.requestDraw) == null || Wr.call(Wt), (hs = (Pr = e.graph) == null ? void 0 : Pr.setDirtyCanvas) == null || hs.call(Pr, !0, !0), (zd = (ms = ($d = jn) == null ? void 0 : $d.canvas) == null ? void 0 : ms.setDirty) == null || zd.call(ms, !0, !0), yt(), S.cancel(), vy(), be(), Pe(), z.dispose(), my(!1), window.removeEventListener("keydown", Dt, !0), window.removeEventListener("keydown", Kt, !0), window.removeEventListener("keydown", Sd, !0), window.removeEventListener("keyup", _d, !0), window.removeEventListener("keydown", bd, !0), window.removeEventListener("keyup", vd, !0), document.removeEventListener("visibilitychange", kd), window.removeEventListener("contextmenu", vn, !0), window.removeEventListener("keydown", fs, !0), window.removeEventListener("keyup", fs, !0), window.removeEventListener("blur", xd), window.removeEventListener("keydown", wd, !0), window.removeEventListener("dragenter", Md, !0), window.removeEventListener("dragover", Nd, !0), window.removeEventListener("dragleave", Pd, !0), window.removeEventListener("drop", Ad, !0), !r && t === "stickers" && (e.onConnectionsChange === ul && (e.onConnectionsChange = cl), Td()), _e.unmount(), Se.remove(), Iy(), yi = null, !0;
    })().catch(($e) => (console.error("[PanoramaCutoutSync] closeEditor failed", $e), yi = null, !1)), yi);
  }
  window.addEventListener("keydown", Dt, !0), window.addEventListener("keydown", Kt, !0), window.addEventListener("keydown", Sd, !0), window.addEventListener("keyup", _d, !0), window.addEventListener("keydown", bd, !0), window.addEventListener("keyup", vd, !0), document.addEventListener("visibilitychange", kd), window.addEventListener("contextmenu", vn, !0), window.addEventListener("keydown", fs, !0), window.addEventListener("keyup", fs, !0), window.addEventListener("blur", xd), window.addEventListener("keydown", wd, !0), fe.addEventListener("pointerdown", ($e) => {
    $e.target === fe && dl();
  });
  function Ln($e, tt, { rollbackState: Rn = !1 } = {}) {
    let Wt = "";
    try {
      Rn && (Wt = JSON.stringify(W)), tt();
    } catch (Wr) {
      if (Wt)
        try {
          const Pr = JSON.parse(Wt);
          Object.keys(W).forEach((hs) => delete W[hs]), Object.assign(W, Pr), r || te();
        } catch (Pr) {
          console.error(`[PanoramaStickers] editor boot step "${$e}" rollback failed`, Pr);
        }
      q.stageWarningDetail = `boot:${$e}`, console.error(`[PanoramaStickers] editor boot step "${$e}" failed`, Wr);
    }
  }
  Ln("view", fy), Ln("cutout-focus", Ue), !r && t === "stickers" && Ln("external-sticker-sync", () => Id("open"), { rollbackState: !0 }), Un().catch(($e) => {
    q.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', $e);
  }), Ln("history", () => uy({ initial: !0 })), Ln("undo-redo", Ay), Ln("paint-ui", My), Ln("side-panel", Od), Ln("look-at-frame", ky), Ln("video-source", al), Ln("canvas-size", ll), Ln("cursor", () => Ed(Ae.pointerPos)), Yo(e).open = !0, (Vd = (ps = (Rd = Fc(e)) == null ? void 0 : Rd.dom) == null ? void 0 : ps.requestDraw) == null || Vd.call(ps), Bn(), py();
}
jn.registerExtension(Cx({
  app: jn,
  openEditor: II,
  attachStickers: UM,
  attachCutout: BM,
  attachPreview: WM,
  restoreOutput: OM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: gA
}));
